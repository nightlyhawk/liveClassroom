from django.urls import path, include
from .views import *
 
app_name = 'groups_urls'

urlpatterns = [
    path('instructor/create/', InstructorRegister.as_view(), name='instructor-create'),
    path('student/create/', StudentRegister.as_view(), name='student-create'),
    path('instructor/edit/<int:pk>/', InstructorRegister.as_view(), name='instructor-edit'),
    path('instructor/delete/<int:pk>/', InstructorRegister.as_view(), name='instructor-delete'),
    path('instructor/view/<int:pk>/', InstructorRegister.as_view(), name='instructor-detail'),
    path('student/edit/<int:pk>/', StudentRegister.as_view(), name='student-edit'),
    path('student/delete/<int:pk>/', StudentRegister.as_view(), name='student-delete'),
    path('student/view/<int:pk>/', StudentRegister.as_view(), name='student-detail'),
    path('student/dahsboard/', StdnDashboard, name="student-dashboard"),
    path('instructor/dahsboard/', InstructorDashboard, name="instructor-dashboard"),
    path('instructor/schedule/', Schedule, name="instructor-schedule"),
    path('messages/', checkchats, name="view-messages")
]
