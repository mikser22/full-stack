from django.shortcuts import render
from rest_framework import viewsets, mixins
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductCategoryViewSet(viewsets.GenericViewSet, mixins.ListModelMixin):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = super(ProductCategoryViewSet, self).get_queryset()
        if('id' not in self.request.query_params):
            return queryset
        return queryset.filter(category=self.request.query_params['id'])




class ProductSelfViewSet(viewsets.ModelViewSet):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer

  def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

  def get_queryset(self):
        queryset = super(ProductSelfViewSet, self).get_queryset()
        return queryset.filter(owner=self.request.user)

