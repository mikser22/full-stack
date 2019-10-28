from django.db import models
from django.contrib.auth.models import User
from product.models import Product

class Info(models.Model):
  text = models.TextField()
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  products = models.IntegerField(default=0)
  rating = models.IntegerField(default=0)

  def __str__(self):
      return self.user.username + ': ' + self.text