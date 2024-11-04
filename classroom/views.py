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
    return render(request, "liveClass.html", context={"id": pk, "name": user['fullName'], "role": user['role']})

@permission_classes([IsAuthenticated])
def resetClass(request, pk):
    try:
        user = request.user
        classroom = Classroom.objects.get(id=pk, instructor__user=user)
        if classroom.roomID > 0:
            classroom.roomID = 0
            classroom.save()
        
        return Response({"message": "class ended"}, status=status.HTTP_200_OK)
    except Exception as e:
        return render(request, "signin.html", context={"errors": str(e)})
        
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

@permission_classes([AllowAny])
def assessmentView(request):
    if request.COOKIES.get('user'):
        user = ast.literal_eval(request.COOKIES.get('user'))
        user = NewUser.objects.get(pk=user['id'])
        context = {"data": {}}
        if user.role == "Instructor":
            classrooms = Classroom.objects.filter(instructor__user=user)
            assessment = Assessment.objects.filter(classroom__instructor__user=user)
            for room in classrooms.all():
                context["data"][f'{room.title}'] = []
                for amt in assessment.all():
                    if amt.classroom.title == room:
                        context["data"][f'{room.title}'].append(amt)
                    else: 
                        pass

            return render(request, "viewAmt.html", context=context)
        else:
            classrooms = Classroom.objects.filter(students__user__id=user.pk)
            assessment = Assessment.objects.filter(classroom__id__in=classrooms.values_list("pk", flat=True))
            for room in classrooms.all():
                context["data"][f'{room.title}'] = []
                for amt in assessment.all():
                    if amt.classroom.title == room:
                        context["data"][f'{room.title}'].append(amt)
                    else: 
                        pass

            return render(request, "stdnViewAmt.html", context=context)
class AssessmentDetails(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, JSONParser, FormParser]

    def post(self, request, pk):
        classroom = Classroom.objects.get(pk=pk)
        serializer = AssessmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(classroom=classroom)
            return redirect("class_urls:view-assessment")
        return render(request, "createAmt.html", context={"id":pk, "error":serializer.errors})
    
    def put(self, request, pk):
        try:
            instance = Assessment.objects.get(id=pk)
        except Assessment.DoesNotExist:
            return Response({"message": "Assessment not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = AssessmentSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    def delete(self, request, pk):
        try:
            user = ast.literal_eval(request.COOKIES.get('user'))
            user = NewUser.objects.get(pk=user['id'])
            instance = Assessment.objects.get(id=pk, classroom__instruction__user=user)
        except Assessment.DoesNotExist:
            return Response({"message": "Assessment not found"}, status=status.HTTP_404_NOT_FOUND)
        instance.delete()
        return redirect("class_urls:view-assessment")
        

@permission_classes([AllowAny])
def getAssessment(request, action, **kwargs):
    pk = kwargs.get("pk")
    user = ast.literal_eval(request.COOKIES.get('user'))
    user = NewUser.objects.get(pk=user['id'])
    if action == "create":
        classes = Classroom.objects.filter(instructor__user=user).all()
        serializer = ClassroomSerializer(classes, many=True)
        return render(request, "createAmt.html", context={"classes": serializer.data})
    elif action == "edit":
        assessment = Assessment.objects.get(id=pk)
        serializer = AssessmentSerializer(assessment)
        classes = Classroom.objects.filter(instructor__user__id=pk).all()
        classserializer = ClassroomSerializer(classes, many=True)
        return render(request, "editAmt.html", context={"id": pk, "data": serializer.data, "classes": classserializer.data})
    elif action == "answer":
        assessment = Assessment.objects.get(id=pk)
        serializer = AssessmentSerializer(assessment)
        return render(request, "answerAmt.html", context={"id": pk, "data": serializer.data})

@permission_classes([AllowAny])
def submissionView(request, pk):
    if request.COOKIES.get('user'):
        user = ast.literal_eval(request.COOKIES.get('user'))
        user = NewUser.objects.get(pk=user['id'])
        assessment = Assessment.objects.get(classroom__instructor__user=user, pk=pk)
        serializer = SubmissionsSerializer(assessment.submissions, many=True)

        return render(request, "submissions.html", context={"subs": serializer.data})
class SubmissionsDetails(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, JSONParser, FormParser]

    def post(self, request, pk):
        amt = Assessment.objects.get(pk=pk)
        serializer = SubmissionsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(assessment=amt)
            return redirect("class_urls:view-assessment")
        return render(request, "answerAmt.html", context={"error":serializer.errors})
    
    def put(self, request, pk):
        try:
            instance = Submissions.objects.get(id=pk)
        except Submissions.DoesNotExist:
            return Response({"message": "Submissions not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = SubmissionsSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    