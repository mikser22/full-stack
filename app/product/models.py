from django.db import models
from django.contrib.auth.models import User
from datetime import date


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    description = models.TextField()
    creation_date = models.DateField(default=date.today)
    category = models.IntegerField(default=1)
    on_auction = models.IntegerField(default=0)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(default=0)

    def __str__(self):
        return self.name