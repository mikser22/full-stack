from django.shortcuts import render

from rest_framework import viewsets, mixins
from rest_framework.decorators import action
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from django.contrib.auth.models import User
from .tasks import send_mail

class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]

  def perform_create(self, serializer):
    send_mail(serializer.validated_data['email'], serializer.validated_data['username'])
    serializer.save()

class UserSelfViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]

  def get_queryset(self):
    queryset = super(UserSelfViewSet, self).get_queryset()
    print("self.request.user")
    print(self.request.user)
    return queryset.filter(username=self.request.user)
