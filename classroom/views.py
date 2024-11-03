from django.shortcuts import render, redirect
import ast
from django.template.loader import render_to_string
from .serializers import *
from .models import *
from utils.decorators import error_catch
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework import status  
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect 
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from django.utils.decorators import method_decorator
from django.views.generic import TemplateView


# Create your views here.

def viewingClass(request, pk):
    if pk and request.COOKIES.get('safe') is not None:
        classroom = Classroom.objects.get(id=pk)
        serializer = ClassroomSerializer(classroom)
        return render(request=request, context={"data": serializer.data}, template_name="viewClass.html")
    else:
        classrooms = Classroom.objects.all()
        serializer = ClassroomSerializer(classrooms, many=True)
        return render(request=request, context={"data": serializer.data}, template_name="joinClass.html")
    
def startclass(request, pk):
    user = ast.literal_eval(request.COOKIES.get('user'))
    return render(request, "liveClass.html", context={"id": pk, "name": user['fullName']})
        
class ClassroomDetails(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [JSONParser, MultiPartParser, FormParser]

    @method_decorator(error_catch)
    def post(self, request, format=None):
        user = request.user
        instructor = Instructor.objects.get(user=user)
        serializer = ClassroomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(instructor=instructor)
            response = redirect("class_urls:instructor-myclasses")
            return response
        return render(request, "createClass.html", serializer.errors)
    
    def get(self, request, pk=None, create=None):
        pk = request.query_params.get("pk", None)
        create = request.query_params.get("create", None)
        if pk is not None:
            response = redirect("class_urls:classroom-view", pk=pk)
            response.set_cookie("safe", True)
            return response
        elif create is not None:
            return redirect('class_urls:redirect-create')
        
    
    def put(self, request, pk):
        try:
            instance = Classroom.objects.get(id=pk)
        except Classroom.DoesNotExist:
            return Response({"message": "Classroom not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = ClassroomSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    def delete(self, request, pk):
        classroom = Classroom.objects.get(pk=pk)
        classroom.delete()
        return redirect("/instructor/dahsboard/")

# @api_view(['GET'])
@permission_classes([AllowAny])
def RoomCreate(request):
    return render(request, "createClass.html", context={})

@permission_classes([AllowAny])
def StudentJoinClass(request):
    classrooms = Classroom.objects.all()
    serializer = ClassroomSerializer(classrooms, many=True)
    return render(request, "joinClass.html", context={"data": serializer.data})

@api_view(['GET'])
def EditClass(request, pk):
    classroom = Classroom.objects.get(pk=pk)
    serializer = ClassroomSerializer(classroom)
    return render(request, "editClass.html", context={"data": serializer.data})

    

@api_view(['PUT'])
@error_catch
def JoinClass(request, pk):
    user = request.user
    student = Student.objects.get(user=user)
    action = ""
    try:
        classroom = Classroom.objects.get(id=pk)
    except Classroom.DoesNotExist:
        return Response({"message": "Class dosen't exist"}, status=status.HTTP_400_BAD_REQUEST)
    
    if student in classroom.students.all():
        classroom.students.remove(student)
        action = "Left"
    else:
        classroom.students.add(student)
        action = "Joined"
    classroom.save()
    return Response({"message": f"{action} a class"}, status=status.HTTP_200_OK)

@api_view(['PUT'])
@error_catch
def JoinClassCode(request, code):
    user = request.user
    student = Student.objects.get(user=user)
    try:
        classroom = Classroom.objects.get(code=code)
    except Classroom.DoesNotExist:
        return Response({"message": "Class dosen't exist"}, status=status.HTTP_400_BAD_REQUEST)
    
    if student in classroom.students.all():
        return Response({"message": "You're in this class already"}, status=status.HTTP_200_OK)
    else:
        classroom.students.add(student)
        classroom.save()
        return Response({"message": "Joined a class"}, status=status.HTTP_200_OK)
    

@permission_classes([AllowAny])
def MyClasses(request):
    if request.COOKIES.get('user'):
        user = ast.literal_eval(request.COOKIES.get('user'))
        user = NewUser.objects.get(pk=user['id'])
        classes = Classroom.objects.filter(students__user__id=user.id).all()
        serializer = ClassroomSerializer(classes, many=True)
        return render(request, "myclasses.html", context={"data": serializer.data})
    else:
        # Render an HTML template for the GET request2
        return render(request, 'signin.html', context={})

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
def InstructorMyClasses(request, pk):
    classes = Classroom.objects.filter(instructor__user__id=pk).all()
    serializer = ClassroomSerializer(classes, many=True)
    return render(request, "inClasses.html", context={"data": serializer.data})
        
class FilterClasses(ListAPIView):
    permission_classes = [AllowAny]
    queryset = Classroom.objects.all()
    serializer_class = ClassroomSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title', 'course', 'instructor__user__fullName']

class SearchClass(ListAPIView):
    permission_classes = [AllowAny]
    queryset = Classroom.objects.all()
    serializer_class = ClassroomSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title', 'course', 'instructor__user__fullName']