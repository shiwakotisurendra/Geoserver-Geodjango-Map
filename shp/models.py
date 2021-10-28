from django.db import models
from django.contrib.gis.db import models as gis_models

# Create your models here.
class NepalDistricts(models.Model):
    geom = gis_models.PolygonField(blank=True, null=True)
    district = models.CharField(db_column='DISTRICT', max_length=50, blank=True, null=True)  # Field name made lowercase.
    hq = models.CharField(db_column='HQ', max_length=50, blank=True, null=True)  # Field name made lowercase.
    province = models.IntegerField(db_column='PROVINCE', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Nepal_Districts'

    def __str__(self) -> str:
        return self.district       


class NepalLocal(models.Model):
    geom = gis_models.MultiPolygonField(blank=True, null=True)
    state_code = models.IntegerField(blank=True, null=True)
    district = models.CharField(max_length=50, blank=True, null=True)
    gapa_napa = models.CharField(max_length=50, blank=True, null=True)
    type_gn = models.CharField(max_length=50, blank=True, null=True)
    province = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Nepal_Local'

    def __str__(self) -> str:
        return self.gapa_napa 

class Nepal1(models.Model):
    gid = models.AutoField(primary_key=True)
    ddgn = models.FloatField(blank=True, null=True)
    first_dcod = models.FloatField(blank=True, null=True)
    first_dist = models.CharField(max_length=50, blank=True, null=True)
    first_gn_c = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    first_stat = models.FloatField(blank=True, null=True)
    shape_leng = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    shape_area = models.DecimalField(max_digits=65535, decimal_places=4, blank=True, null=True)
    area = models.FloatField(blank=True, null=True)
    centroid_x = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    centroid_y = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    geom = gis_models.MultiPolygonField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'nepal1'

    def __str__(self) -> str:
        return self.first_dist