from django.contrib import admin
from .models import Nepal1,NepalDistricts,NepalLocal
from leaflet.admin import LeafletGeoAdmin
# Register your models here.
class NepalAdmin(LeafletGeoAdmin):
    list_display = ['first_dist','shape_area','first_dcod','gid','ddgn']
    list_filter = ['first_dcod']
    list_editable=['ddgn']

admin.site.register(Nepal1,NepalAdmin)

class NeDistrictAdmin(LeafletGeoAdmin):
    list_display = ['id','district','hq','province']
    list_filter = ['province']
    list_editable=['province']

admin.site.register(NepalDistricts,NeDistrictAdmin)

class NeLocalAdmin(LeafletGeoAdmin):
    list_display = ['id','district','gapa_napa','type_gn','state_code','province']
    list_filter = ['state_code']
    list_editable=['state_code']

admin.site.register(NepalLocal,NeLocalAdmin)