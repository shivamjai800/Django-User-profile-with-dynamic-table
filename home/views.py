from django.shortcuts import render,redirect
from django.db.models import Count,Max
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt

import sys
sys.path.append('/home')
from .forms import UserRegisterForm
from django.views.decorators.csrf import csrf_protect
from .cell import Cell
from .table import Table
def home(request):
    return render(request,'home/start_page.html')
@csrf_protect
def registerPage(request):

    if request.method=='POST':
        
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request,f' Account created for {username}!')
            return redirect('login_url')
    else:
        form = UserRegisterForm()
    return render(request,'home/register.html',{'form':form})
@csrf_protect
def login(request):
    return render(request,'home/login.html')
@login_required
def profile(request):
    try:
        print("it has object")
        t = request.user.table
    except:
        print("her not")
        t = Table(user= request.user,name=request.user.username)
        t.save()
    if request.method == 'POST' :
        
        print(t)
        try:
            Cell.objects.filter(table_category = t).delete()
        except:
            print(Cell.objects.filter(table_category = t))
        request_getdata = request.POST
        print("here")
        x = request_getdata.lists()
        count =0
        c=[]
        for i,j in x:
            print(int(j[0]),int(j[1]),int(j[2]),int(j[3]),j[4])
            y = Cell(row_no=int(j[0]),col_no=int(j[1]),row_span=int(j[2]),col_span=int(j[3]),value=j[4],table_category=t)
            y.save()
            print(y)
        # k=k+1
        request.method='POST'
    m = Cell.objects.filter(table_category = t)
    print(m.values_list('row_no',flat=True))
    maxx=0
    if(m.count()):
        maxx=max(m.values_list('row_no',flat=True))
    lis = []
    for i in range(maxx):
        lis.append([])
    for i in m:
        temp=[]
        temp.append(i.col_no)
        temp.append(i.row_span)
        temp.append(i.col_span)
        temp.append(i.value)
        lis[i.row_no-1].append(temp)
    

    
    # m = m.group_by('row_no')
        
    return render(request,'home/profile.html',{'list':lis,'range':maxx})


