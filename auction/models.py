from django.db import models
from django.contrib.auth.models import User
from product.models import Product

class Auction(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  product = models.ForeignKey(Product, on_delete=models.CASCADE)
  begin_cost = models.IntegerField(default=100)
  current_cost = models.IntegerField(default=100)
  step = models.IntegerField(default=10)

  def __str__(self):
      return 'auction:' + self.product.name