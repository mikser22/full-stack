from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def get_garages(request):
    return HttpResponse(
        '{"items": [{"name": "garage1", "price": 75}, \
                    {"name": "garage2", "price": 567875}, \
                    {"name": "garage3", "price": 9875}, \
                    {"name": "garage4", "price": 9875}, \
                    {"name": "garage5", "price": 5679875}, \
                    {"name": "garage6", "price": 8875}, \
                    {"name": "garage7", "price": 56775}, \
                    {"name": "garage8", "price": 9075}, \
                    {"name": "garage9", "price": 5679875}, \
                    {"name": "garage10", "price": 59875}, \
                    {"name": "garage11", "price": 57} \
        ]}'
    )
