from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import CustomAccountManager
from datetime import timezone



# Create your models here.
class NewUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    fullName = models.CharField(max_length=500, default="")
    INSTRUCTOR = "Instructor"
    STUDENT = "Student"
    gender_choices = [
        (INSTRUCTOR, "Instructor"),
        (STUDENT, "Student"),
    ]
    role = models.CharField(max_length=10, choices=gender_choices, default="user")
    MALE = "M"
    FEMALE = "F"
    OTHER = "Other"
    gender_choices = [
        (MALE, "Male"),
        (FEMALE, "Female"),
        (OTHER, "Other"),
    ]
    gender = models.CharField(max_length=6,
                              choices=gender_choices,
                              default=OTHER
                              )
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    can_reset = models.BooleanField(default=False)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['fullName',]

    def __str__(self):
        return self.fullName