from django.contrib import admin
from django.urls import path,include
from django.contrib.auth import views as auth_views
from . import views
urlpatterns = [
    path('',views.home,name='home_url'),
    path('login/',auth_views.LoginView.as_view(template_name='home/login.html'),name="login_url"),
    path('logout/',auth_views.LogoutView.as_view(template_name='home/logout.html'),name="logout_url"),
    path('profile/',views.profile,name="profile_url"),
    path('register/',views.registerPage,name="register_url"),
    # path('savepath/',views.savepath,name="save_url"),
    
]