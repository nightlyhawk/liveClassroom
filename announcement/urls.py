from django.urls import path
from .views import addAnnouncement, getAnnouncement


app_name='annoucement_urls'

urlpatterns = [
    path('add/', addAnnouncement, name="add-announcement"),
    path('view/', getAnnouncement, name="view-announcement"),
]
