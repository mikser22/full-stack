"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include, re_path
from product.views import ProductViewSet, ProductSelfViewSet, ProductCategoryViewSet, ProductUsersViewSet
from user_info.views import InfoViewSet
from core.views import UserViewSet, UserSelfViewSet
from rest_framework import routers
from django.views.generic import TemplateView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register('products', ProductViewSet, 'Product')
router.register('my', ProductSelfViewSet, 'My')
router.register('info', InfoViewSet, 'Info')
router.register('users', UserViewSet, 'users')
router.register('category', ProductCategoryViewSet, 'Category')
router.register('userproducts', ProductUsersViewSet, 'UserProducts')
router.register('my_user', UserSelfViewSet, 'MyUser')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
#     re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
