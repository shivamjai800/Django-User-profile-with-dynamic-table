from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.db import models
from django.contrib.auth.forms import UserCreationForm

from django.contrib.auth.models import User

# Create your models here.

from .table import Table
import sys
sys.path.append("..")
from project_intern import settings

class UserRegisterForm(UserCreationForm):
    firstname = forms.CharField(initial='First Name',widget=forms.TextInput(attrs={'class':'form-control'}))
    lastname = forms.CharField(initial='last name',widget=forms.TextInput(attrs={'class':'form-control'}))
    username = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control'}))
    email = forms.EmailField(required=False,widget=forms.TextInput(attrs={'class':'form-control'}))
    password1 = forms.CharField(max_length=20, widget=(forms.PasswordInput(attrs={'class':'form-control'})))
    password2 = forms.CharField(max_length=20, widget=(forms.PasswordInput(attrs={'class':'form-control'})))
    
    class Meta:
        model = User
        verbose_name_plural = "User"
        fields = ['firstname','lastname','username','email','password1','password2']
    def __str__(self):
        return self.firstname
        