from django.urls import path, include
from .views import *
 
app_name = 'class_urls'

urlpatterns = [
    path('create/', ClassroomDetails.as_view(), name='classroom-create'),
    path('reset/', resetClass, name='classroom-reset'),
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
    path('view/assessment/', assessmentView, name='view-assessment'),
    path('assessment/<str:action>/', getAssessment, name='manipulate-assessment'),
    path('create/assessment/<int:pk>/', AssessmentDetails.as_view(), name='create-assessment'),
    path('edit/assessment/<int:pk>/', AssessmentDetails.as_view(), name='edit-assessment'),
    path('delete/assessment/<int:pk>/', AssessmentDetails.as_view(), name='delete-assessment'),
    path('view/submissions/<int:pk>/', submissionView, name='view-submissions'),
    path('create/submissions/<int:pk>/', SubmissionsDetails.as_view(), name='create-submissions'),
    path('edit/submissions/<int:pk>/', SubmissionsDetails.as_view(), name='edit-submissions'),
]
