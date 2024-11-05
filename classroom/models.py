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
    code = models.IntegerField(blank=True, null=True)
    roomID = models.IntegerField(default=0)
    attendTotal = models.IntegerField(default=0)

    def __str__(self):
        return self.title

class Assessment(models.Model):
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE, related_name="assessment_class")
    title = models.CharField(max_length=200)
    instructions = models.TextField()
    dueTime = models.DateTimeField()
    ONGOING = "ongoing"
    ENDED = "ended"
    GRADED = "graded"
    status_choices = [
        (ONGOING, "ongoing"),
        (ENDED, "ended"),
        (GRADED, "graded"),
    ]
    status = models.CharField(max_length=20, choices=status_choices, default="ongoing")
    
    def __str__(self):
        return self.title

def submissions_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/submissions_assessment_<title>/<filename>
    return 'submissions_{0}/{1}'.format(instance.assessment.title, filename)

class Submissions(models.Model):
    assessment = models.ForeignKey(Assessment, on_delete=models.CASCADE, related_name="submissions")
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    text = models.TextField()
    file = models.FileField(upload_to=submissions_directory_path)
    PENDING = "pending"
    GRADED = "graded"
    status_choices = [
        (PENDING, "pending"),
        (GRADED, "graded"),
    ]
    status = models.CharField(max_length=20, choices=status_choices, default="pending")
    score = models.IntegerField()
    createdAt = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.assessment.title