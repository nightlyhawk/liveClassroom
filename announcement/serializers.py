from rest_framework import serializers 
from groups.serializers import InstructorSerializer
from .models import *

class AnnouncementSerializer(serializers.ModelSerializer):
    instructor = InstructorSerializer(read_only=True)

    class Meta:
        model = Announcement
        fields = ("id", 'instructor', 'title', 'content', 'created_at')

    def create(self, validated_data):
        instructor = validated_data.pop('instructor')
        annoucement = Announcement.objects.create(instructor=instructor, **validated_data)
        annoucement.save()

        return annoucement
    
