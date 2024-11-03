from django.db import models
from groups.models import Instructor, Student

# Create your models here.
class Classroom(models.Model):
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE, related_name="classInstructor")
    title = models.CharField(max_length=200, default="", blank=True, null=True)
    description = models.TextField()
    level = models.CharField(max_length=200, default="", blank=True, null=True)
    students = models.ManyToManyField(Student, blank=True)
    course = models.CharField(max_length=200, default="", blank=True, null=True) 
    courseCode = models.IntegerField()
    startTime = models.DateTimeField()
    endTime = models.DateTimeField()
    code = models.IntegerField()
    roomID = models.IntegerField(default=0)
    attendTotal = models.IntegerField(default=0)

    def __str__(self):
        return self.title