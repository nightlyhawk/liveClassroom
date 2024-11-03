from django.shortcuts import render, redirect
import ast
from .serializers import *
from .models import *
from groups.models import Instructor, Student
from groups.serializers import InstructorSerializer, StudentSerializer
from .services import *
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework import status
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect 
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken


# Create your views here.
class UserRegister(APIView):
    permission_classes = [AllowAny]
    parser_classes = [JSONParser, MultiPartParser, FormParser]

    def post(self, request, format=None):
        try:
            serializer = NewUserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                role = str(serializer.data["role"])
                response = HttpResponseRedirect(reverse(f"groups_urls:{role.lower()}-create"))
                response.set_cookie("user", serializer.data)
                return response
            return render(request, "signup.html", context={"errors": serializer.errors})
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST) 
        
    def get(self, request, *args, **kwargs):
        if request.COOKIES.get('user'):
            user = ast.literal_eval(request.COOKIES.get('user'))
            user = NewUser.objects.get(pk=user['id'])
            serializer = NewUserSerializer(user)
            if user.role == "Instructor":
                role = Instructor.objects.get(user=user)
                roleData = InstructorSerializer(role).data
            else:
                role = Student.objects.get(user=user)
                roleData = StudentSerializer(role).data
            return render(request, 'profile.html', context={"user" : serializer.data, "role": roleData})
        else:
            # Render an HTML template for the GET request2
            return render(request, 'signup.html', context={})
    
    def put(self, request, pk):
        try:
            instance = NewUser.objects.get(id=pk)
        except NewUser.DoesNotExist:
            return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = NewUserSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

class UserLogin(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        try:
            serializer = LoginSerializer(data=request.data)
            serializer.is_valid(raise_exception=True) 
            email = serializer.data["email"]
            
            user = NewUser.objects.get(email=email)
            if user.is_active:
                token = RefreshToken.for_user(user)
                user_data = NewUserSerializer(user)
                data = user_data.data
                if data['role'] == "Student":
                    response = HttpResponseRedirect(reverse("groups_urls:student-dashboard"))
                else:
                    response = HttpResponseRedirect(reverse("groups_urls:instructor-dashboard"))    

                response.set_cookie("tokens", {"refresh": str(token), "access": str(token.access_token)})
                response.set_cookie("user", data)
                return response
            else:
                return Response({"message": "You need to sign up first!"}, status=status.HTTP_200_OK)
        except Exception as e:
            return render(request, "signin.html", context={"errors": str(e)})
    
    def get(self, request, *args, **kwargs):
        # Render an HTML template for the GET request
        return render(request, 'signin.html', context={})
    
class UserLogout(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return HttpResponseRedirect(reverse("user_urls:user-signin"))
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)    
