from rest_framework import serializers
from .models import Product
from core.serializers import UserSerializer

class ProductSerializer(serializers.ModelSerializer):
#   owner = UserSerializer(read_only=True)

  class Meta:
    model = Product
    fields = ('id', 'name', 'price', 'description', 'creation_date', 'category', 'on_auction', 'owner')
#     read_only_fields = ('owner',)


