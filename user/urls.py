from django.urls import path, include
from .views import *
 
app_name = 'user_urls'

urlpatterns = [
    path('signup/', UserRegister.as_view(), name='user-signup'),
    path('edit/<int:pk>/', UserRegister.as_view(), name='user-edit'),
    path('delete/', UserRegister.as_view(), name='user-delete'),
    path('view/', UserRegister.as_view(), name='user-detail'),
    path('signin/', UserLogin.as_view(), name='user-signin'),
    path('signout/', UserLogout.as_view(), name='user-signout')
]
