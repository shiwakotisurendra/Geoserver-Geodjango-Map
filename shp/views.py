from django.shortcuts import render
from django.core.serializers import serialize
from django.http import HttpResponse
from .models import Nepal1,NepalDistricts,NepalLocal


def Nepal(request):
    nepalData= serialize('geojson',Nepal1.objects.all())
    return HttpResponse(nepalData,content_type='geojson')
    
# Create your views here.
def index1(request):
    return render(request,'index.html')

def NeDistricts(request):
    neDistrictData= serialize('geojson',NepalDistricts.objects.all())
    return HttpResponse(neDistrictData,content_type='geojson')
    
# Create your views here.
def index2(request):
    return render(request,'Districts.html')