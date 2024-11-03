from rest_framework import serializers 
from user.serializers import NewUserSerializer
from .models import *

# class CourseSerializer(serializers.ModelSerializer):

#     class Meta:
#         models = Course
#         fields = '__all__'
class InstructorSerializer(serializers.ModelSerializer):
    user = NewUserSerializer(read_only=True)
    
    class Meta:
        model = Instructor
        fields = ('id', 'user', 'bio', 'educationLevel', 'course', 'experience')

    def create(self, validated_data):
        user = validated_data.pop("user")
        instructor = Instructor.objects.create(user=user, **validated_data)
        instructor.save()

        return instructor
    
class StudentSerializer(serializers.ModelSerializer):
    user = NewUserSerializer(read_only=True)

    class Meta:
        model = Student
        fields = ('id', 'user', 'title', 'level', 'courses')
    
    def create(self, validated_data):
        user = validated_data.pop("user")
        student = Student.objects.create(user=user, **validated_data)
        student.save()

        return student