from django.shortcuts import render
from django.http import HttpResponse

def dd(request):
    return HttpResponse("We are at dd Page")
def ddhome(request,strin):
    return HttpResponse(f'We are at,k')
# Create your views here.
