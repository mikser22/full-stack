from django.shortcuts import render
from rest_framework import viewsets
from .models import Info
from .serializers import InfoSerializer

class InfoViewSet(viewsets.ModelViewSet):
    queryset = Info.objects.all()
    serializer_class = InfoSerializer

    def perform_create(self, serializer):
            serializer.save(owner=self.request.user)

