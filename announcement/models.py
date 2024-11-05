from django.db import models
from groups.models import Instructor

# Create your models here.


class Announcement(models.Model):
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE, related_name="instructor_annoucement")
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title