from django.db import models
from user.models import NewUser

# Create your models here.
# class Courses(models.Model):
#     title = models.CharField(max_length=200, default="", blank=True, null=True)

#     def __str__(self):
#         return self.title
    
class Instructor(models.Model):
    user = models.OneToOneField(NewUser, on_delete=models.CASCADE, related_name="instructor")
    # title = models.CharField(max_length=200, default="", blank=True, null=True)
    # abbreviation = models.CharField(max_length=200, default="", blank=True, null=True)
    bio = models.TextField()
    BachelorsDegree = "Bachelor's Degree"
    Masters = "Master's Degree"
    PhD = "Ph.D."
    OTHER = "other"
    education_choices = [
        (BachelorsDegree, "Bachelor's Degree"),
        (Masters, "Master's Degree"),
        (PhD, "Ph.D."),
        (OTHER, "other"),
    ]
    educationLevel = models.CharField(max_length=100, choices=education_choices, default="Bachelor's Degree")
    course = models.CharField(max_length=200, default="", blank=True, null=True) 
    experience = models.IntegerField()

    def __str__(self):
        return self.user.fullName
    
class Student(models.Model):
    user = models.OneToOneField(NewUser, on_delete=models.CASCADE, related_name="student")
    title = models.CharField(max_length=200, default="", blank=True, null=True)
    level = models.CharField(max_length=200, default="", blank=True, null=True) 
    courses = models.CharField(max_length=200, default="", blank=True, null=True) 

    def __str__(self):
        return self.title + " " + self.user.fullName
