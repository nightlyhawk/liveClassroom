from django.shortcuts import render, redirect

from announcement.forms import AnnouncementForm
from announcement.models import Announcement

# Create your views here.
def announcement_list(request):
    annoucements = Announcement.objects.al()
    return render(request, 'announcement.html', {'announcements': annoucements})


def announcement_create(request):
    if request.method == 'POST':
        form = AnnouncementForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')
    else:
        form = AnnouncementForm()
    return render(request, 'addAnnouncement.html', {'form': form})