from django.shortcuts import render
from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductSelfViewSet(viewsets.ModelViewSet):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer

  def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

  def get_queryset(self):
    queryset = super(ProductSelfViewSet, self).get_queryset()
    return queryset.filter(owner=self.request.user)

