from django.db import models
from django.contrib.auth.models import User
import uuid
class Table(models.Model):
    # foreign key
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField(User,default=uuid.uuid1,unique= True,null=True,blank=True, verbose_name="User", on_delete=models.CASCADE)
    name = models.CharField(max_length=100,null=True)
    class Meta:
        verbose_name_plural = "Table"

    def __str__(self):
        return str(self.name)
