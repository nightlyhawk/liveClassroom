from rest_framework import serializers
from groups.serializers import *
import random
import string
from .models import Classroom, Assessment, Submissions

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
    
class AssessmentSerializer(serializers.ModelSerializer):
    title = serializers.CharField(required=False)
    instructions = serializers.CharField(required=False)
    dueDate = serializers.DateTimeField(read_only=True, format="%A, %d %B %Y %H:%M", source='dueTime')
    dueTime = serializers.DateTimeField(required=False)
    status = serializers.CharField(required=False)
    
    class Meta:
        model = Classroom
        fields = ('id', 'title', 'instructions', 'dueTime', 'dueDate', 'status')
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['classTitle'] = instance.classroom.title

        return representation

    def create(self, validated_data):
        classroom = validated_data.pop('classroom')
        assessment = Assessment.objects.create(classroom=classroom, **validated_data)
        return assessment
    
    def update(self, instance, validated_data: dict):
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        return instance

class SubmissionsSerializer(serializers.ModelSerializer):
    assessment = AssessmentSerializer(read_only=True)
    text = serializers.CharField(required=False)
    file = serializers.FileField(required=False)
    status = serializers.CharField(read_only=True)
    score = serializers.IntegerField(read_only=True)

    class Meta:
        model = Submissions
        fields = ('id', 'assessment', 'text', 'file', 'status', 'score', 'createdAt')

    def create(self, validated_data):
        assessment = validated_data.pop('assessment')
        sub = Submissions.objects.create(assessment=assessment, **validated_data)
        return sub
    
    def update(self, instance, validated_data: dict):
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        return instance