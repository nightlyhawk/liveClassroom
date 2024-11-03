from django.shortcuts import render


def index(request):
    return render(request, 'landingPage.html', context={})

def success(request):
    return render(request, 'success.html', context={})
