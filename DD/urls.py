from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.dd,name='dd'),
    path('kk',views.ddhome,name='ddhome')
]