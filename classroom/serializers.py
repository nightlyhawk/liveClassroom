from rest_framework import serializers
from groups.serializers import *
import random
import string
from .models import Classroom

def generate_random_code(length):
    characters = string.ascii_letters + string.digits
    random_code = ''.join(random.choice(characters) for i in range(length))
    return random_code

class ClassroomSerializer(serializers.ModelSerializer):
    instructor = InstructorSerializer(read_only=True)
    students = StudentSerializer(many=True, read_only=True)
    code = serializers.IntegerField(required=False)
    roomID = serializers.IntegerField(required=False)
    startDate = serializers.DateTimeField(read_only=True, format="%A, %d %B %Y %H:%M", source='startTime')
    endDate = serializers.DateTimeField(read_only=True, format="%A, %d %B %Y %H:%M", source='endTime')
    title = serializers.CharField(required=False)
    description = serializers.CharField(required=False)
    level = serializers.CharField(required=False)
    course = serializers.CharField(required=False)
    courseCode = serializers.IntegerField(required=False)
    attendTotal = serializers.CharField(required=False)
    startTime = serializers.DateTimeField(required=False)
    endTime = serializers.DateTimeField(required=False)

    class Meta: 
        model = Classroom
        fields = ('id', 'instructor', 'title', 'description', 'students', 'level', 'course', 'courseCode', 'startDate', 'endDate', 'startTime', 'endTime', 'code', 'roomID', 'attendTotal')
    
    def create(self, validated_data):
        instructor = validated_data.pop("instructor")
        classroom = Classroom.objects.create(instructor=instructor, **validated_data)
        classroom.code = generate_random_code(5)
        classroom.save()

        return classroom
    
    def update(self, instance, validated_data: dict):
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        return instance