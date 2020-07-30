from django.db import models
from .table import Table

class Cell(models.Model):
    id = models.AutoField(primary_key=True)
    row_no = models.IntegerField()
    col_no = models.IntegerField()
    row_span = models.IntegerField()
    col_span = models.IntegerField()
    value = models.CharField(max_length=200)
    table_category = models.ForeignKey(Table, default=1, verbose_name="Table", on_delete=models.CASCADE)

    def __str__(self):
        return (str(self.row_no)+" "+str(self.col_no))


