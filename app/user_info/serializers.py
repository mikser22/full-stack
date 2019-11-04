from rest_framework import serializers
from .models import Info
from core.serializers import UserSerializer

class InfoSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)

  class Meta:
    model = Info
    fields = '__all__'
    read_only_fields = ('user',)