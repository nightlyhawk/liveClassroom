from django.shortcuts import render, redirect
from .serializers import *
from .models import *
import ast
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework import status  
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import parser_classes, api_view, permission_classes
from rest_framework.views import APIView
from classroom.models import Classroom
from classroom.serializers import ClassroomSerializer


# Create your views here.
class InstructorRegister(APIView):
    parser_classes = [JSONParser, MultiPartParser, FormParser]
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        try:
            user = ast.literal_eval(request.COOKIES.get('user'))
            user = NewUser.objects.get(pk=user['id'])
            serializer = InstructorSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=user)
                response = redirect("user_urls:user-signin")
                response.set_cookie("status", "success")
                return response
            return render(request, "instructor.html", context={"errors": serializer.errors})
        except Exception as e:
            return render(request, "instructor.html", context={"errors": str(e)})
        
    def get(self, request):
        return render(request, "instructor.html", context={})
    
    def put(self, request, pk):
        try:
            instance = Instructor.objects.get(id=pk)
        except Instructor.DoesNotExist:
            return Response({"message": "Instructor not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = InstructorSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

class StudentRegister(APIView):
    parser_classes = [JSONParser, MultiPartParser, FormParser]
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        try:
            user = ast.literal_eval(request.COOKIES.get('user'))
            user = NewUser.objects.get(pk=user['id'])
            serializer = StudentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=user)
                response = redirect("user_urls:user-signin")
                response.set_cookie("status", "success")
                return response
            return render(request, "student.html", context={"errors": serializer.errors})
        except Exception as e:
            return render(request, "student.html", context={"errors": str(e)})
    
    def get(self, request):
        return render(request, "student.html", context={})
    
    def put(self, request, pk):
        try:
            instance = Student.objects.get(id=pk)
        except Student.DoesNotExist:
            return Response({"message": "Student not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = StudentSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def StdnDashboard(request):
    try:
        user = ast.literal_eval(request.COOKIES.get('user'))
        user = NewUser.objects.get(pk=user['id'])
        classes = Classroom.objects.all()
        serializer = ClassroomSerializer(classes, many=True)
        return render(request, "stdnDashboard.html", context={"data": serializer.data, "name": user.fullName})
    except Exception as e:
            return render(request, "stdnDashboard.html", context={"errors": str(e)})

@api_view(['GET'])
@permission_classes([AllowAny])
def InstructorDashboard(request):
    try:
        user = ast.literal_eval(request.COOKIES.get('user'))
        user = NewUser.objects.get(pk=user['id'])
        classes = Classroom.objects.all()
        serializer = ClassroomSerializer(classes, many=True)
        return render(request, "dashboard.html", context={"data": serializer.data, "name": user.fullName})
    except Exception as e:
            return render(request, "dashboard.html", context={"errors": str(e)})

# @api_view(['GET'])
# def InstructorDashboard(request):
#     classes = Classroom.objects.all()
#     serializer = ClassroomSerializer(classes, many=True)
#     return render(request, "dashboard.html", context={"data": serializer.data})

@permission_classes([AllowAny])
def checkchats(request):
    user = ast.literal_eval(request.COOKIES.get('user'))
    if user['role'] == "Student":
        classes = Classroom.objects.filter(students__user__id=user['id']).all()
        instructors = []
        for room in classes.all():
            instructors.append(room.instructor)

        serializer = InstructorSerializer(instructors, many=True)
        return render(request, "messages.html", context={"tutors":serializer.data, "role": user["role"]})
    else:
        classes = Classroom.objects.filter(instructor__user__id=user['id']).all()
        students = []
        for room in classes.all():
            students.extend(student for student in room.students.all() )

        serializer = StudentSerializer(students, many=True)
        return render(request, "messages.html", context={"students":serializer.data, "role": user["role"]})

def Schedule(request):
    return render(request, "schedule.html", context={})