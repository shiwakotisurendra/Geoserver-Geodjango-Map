from django.urls import path

from shp.models import Nepal1,NepalDistricts,NepalLocal
from .views import index1,index2,Nepal,NeDistricts

urlpatterns = [
    path('',index1,name='index'),
    path('nepalData',Nepal,name='nepalData'),
    path('district',index2,name='district'),
    path('neDistrictData',NeDistricts,name='neDistrictData')

]