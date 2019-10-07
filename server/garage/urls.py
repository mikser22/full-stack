from django.urls import path

from . import views

urlpatterns = [
    path('garages', views.get_garages, name='index')
]