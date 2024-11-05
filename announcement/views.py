from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
import ast
from user.models import NewUser
from announcement.forms import AnnouncementForm
from announcement.models import Announcement
from classroom.models import Classroom
from .serializers import *
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework import status  
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import parser_classes, api_view, permission_classes
from rest_framework.views import APIView

# Create your views here.
# def announcement_view(request):
#     user = ast.literal_eval(request.COOKIES.get('user'))
#     classrooms = Classroom.objects.filter(students__user__id=user["pk"]).distinct()
#     instructors = []
#     for classroom in classrooms:
#         instructors.append(classroom.instructor)
#     annoucements = Announcement.objects.filter(instructor__id__in=instructors).all()
#     return render(request, 'announcement.html', {'announcements': annoucements})

@csrf_exempt
def addAnnouncement(request):
    user = ast.literal_eval(request.COOKIES.get('user'))
    user = NewUser.objects.get(pk=user['id'])
    serializer = AnnouncementSerializer(data=request.POST)
    instructor = Instructor.objects.get(user=user)
    if serializer.is_valid():
        serializer.save(instructor=instructor)  
        return render(request, 'announcement.html', {"status": True})
    return render(request, 'announcement.html', {"errors": serializer.error_messages})

def getAnnouncement(request):
    return render(request, 'announcement.html', {})