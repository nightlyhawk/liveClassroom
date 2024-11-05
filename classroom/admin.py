from django.contrib import admin
from .models import Classroom, Assessment, Submissions

# Register your models here.

admin.site.register(Classroom)
admin.site.register(Assessment)
admin.site.register(Submissions)
