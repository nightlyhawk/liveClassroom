from django.urls import path, include
from .views import *
 
app_name = 'class_urls'

urlpatterns = [
    path('create/', ClassroomDetails.as_view(), name='classroom-create'),
    path('start/creation/', RoomCreate, name='redirect-create'),
    path('live/<int:pk>/', startclass, name='live-class'),
    path('edit/<int:pk>/', ClassroomDetails.as_view(), name='classroom-edit'),
    path('start/edit/', EditClass, name='start-edit'),
    path('delete/<int:pk>/', ClassroomDetails.as_view(), name='classroom-delete'),
    path('view/', ClassroomDetails.as_view(), name='classroom-detail'),
    path('recommended/', StudentJoinClass, name='classroom-recommended'),
    path('detail/<int:pk>/', viewingClass, name='classroom-view'),
    path('join/<int:pk>/', JoinClass, name='classroom-join'),
    path('join/code/<int:code>/', JoinClassCode, name='classroom-join-code'),
    path('student/myclasses/', MyClasses, name='student-myclasses'),
    path('instructor/classes/<int:pk>/', InstructorMyClasses, name='instructor-classes'),
    path('search/', SearchClass.as_view(), name='search-class'),
    path('filter/', FilterClasses.as_view(), name='filter-classes'),
]
