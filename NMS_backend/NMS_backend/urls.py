"""NMS_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.urls import path  
from django.urls.conf import include  
from django.conf import settings  
from django.conf.urls.static import static  
from core.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('getAllPlantsProducts/',getAllPlantsProducts,name="getAllPlantsProducts"),
    path('getAllFlowerPlantsProducts/',getAllFlowerPlantsProducts,name="getAllFlowerPlantsProducts"),
    path('getAllSeedsProducts/',getAllSeedsProducts,name="getAllSeedsProducts"),
    path('getAllPlantCareProducts/',getAllPlantCareProducts,name="getAllPlantCareProducts"),
    path('getAllBlogs/',getAllBlogs,name="getAllBlogs"),
    path('saveContact/',saveContact,name="saveContact"),
    path('handleLogin/',handleLogin,name="handleLogin"),
    path('handlelogout/',handlelogout,name="handlelogout"),
    path('handleRegister/',handleRegister,name="handleRegister"),
    path('searchNavbar/',searchNavbar,name="searchNavbar"),
    path('checkoutInfo/',checkoutInfo,name="checkoutInfo"),
     # path('', include(('sampleapp.urls'), namespace='sampleapp')) 
    path('csrf/',csrf),
]

if settings.DEBUG:  
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)  