from django.contrib import admin
from .cell import Cell
from .table import Table

from .forms import UserRegisterForm
# Register your models here.
class MyConnection(admin.ModelAdmin):

    fieldsets = [
    ]

admin.site.register(Cell)
admin.site.register(Table)
# admin.site.register(MyConnection)