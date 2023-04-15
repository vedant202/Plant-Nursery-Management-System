from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save # Produce a signal if there is any database action.
from phone_field import PhoneField
from django.contrib.auth.models import AbstractUser
from .manager import UserManager
from django.utils import timezone

# Create your models here.

# class User(AbstractUser):
#     # user = models.OneToOneField(User, on_delete= models.CASCADE)
#     # first_name = models.CharField(max_length=50);
#     # last_name = models.CharField(max_length=50)
#     # email = models.CharField(max_length=200)
#     age = models.CharField(max_length=10, null=False, blank=False)
#     sex = models.CharField(max_length=10, null=False, blank=False)
#     country = models.CharField(max_length=40, null=False, blank=False)
#     phone = PhoneField(blank=True, help_text='Contact phone number', null=False)
#     birth_date = models.CharField(max_length=40, null=False, blank=False)
#     objects = UserManager()
#     # password = models.CharField(max_length=50)


class Plant_Products(models.Model):
	plant_name = models.CharField(max_length = 100)
	reviews = models.CharField(max_length=10)
	price = models.DecimalField(max_digits=10, decimal_places=2)
	product_details = models.JSONField(null=True)
	product_desc = models.TextField()
	# product_img = models.ImageField(upload_to='images')
	img_caption = models.CharField(max_length=200)
	slug = models.CharField(max_length = 100,null=True,blank=True)
	categeory = models.CharField(max_length = 100,null=True,blank=True)
	img_url = models.URLField(max_length = 200,null=True,blank=True)
	ProductDate = models.DateField(default=timezone.now)
	def __str__(self):
		return self.plant_name  

class FlowerPlant_Products(models.Model):
	plant_name = models.CharField(max_length = 100)
	reviews = models.CharField(max_length=10)
	price = models.DecimalField(max_digits=10, decimal_places=2)
	product_details = models.JSONField(null=True)
	product_desc = models.TextField()
	product_img = models.ImageField(upload_to='images')
	img_caption = models.CharField(max_length=200)

	def __str__(self):
		return self.plant_name  

class Seed_Products(models.Model):
	seed_name = models.CharField(max_length = 100)
	reviews = models.CharField(max_length=10)
	price = models.DecimalField(max_digits=10, decimal_places=2)
	product_details = models.JSONField(null=True)
	product_desc = models.TextField()
	slug = models.CharField(max_length = 100,null=True,blank=True)
	product_date = models.DateField(default=timezone.now)
	# product_img = models.ImageField(upload_to='images')
	img_url = models.URLField(max_length = 800,null=True,blank=True)
	img_caption = models.CharField(max_length=200)

	def __str__(self):
		return self.seed_name
	

class PlantCare_Products(models.Model):
	care_name = models.CharField(max_length = 100)
	reviews = models.CharField(max_length=10)
	price = models.DecimalField(max_digits=10, decimal_places=2)
	product_details = models.JSONField(null=True)
	product_desc = models.TextField()
	product_img = models.ImageField(upload_to='images')
	img_caption = models.CharField(max_length=200)

	def __str__(self):
		return self.plant_name

class Blogs(models.Model):
	BlogTitle = models.CharField(max_length = 400)
	BlogDate = models.DateField(default=timezone.now)
	author = models.CharField(max_length=50)
	subpara = models.CharField(max_length = 200)
	slug = models.CharField(max_length = 100,null=True,blank=True)
	para1 = models.TextField()
	para2 = models.TextField()
	para3 = models.TextField(blank=True)
	para4 = models.TextField(blank=True)
	para5 = models.TextField(blank=True)
	img_url = models.URLField(max_length = 200,null=True,blank=True)
	img_url2 = models.URLField(max_length = 200,null=True,blank=True)
	img_url3 = models.URLField(max_length = 200,null=True,blank=True)
	product_img1 = models.ImageField(upload_to='images',blank=True)
	
	img_caption = models.CharField(max_length=200)

	def __str__(self):
		return self.BlogTitle


class Contact_db(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=200)
    phone = PhoneField(blank=True, help_text='Contact phone number')
    city = models.CharField(max_length=40,null=True)
    state = models.CharField(max_length=40,null=True)
    desc = models.CharField(max_length=500)
    def __str__(self):
	    return self.first_name + " "+ self.last_name
    
	

class CheckoutInfo(models.Model):
	first_name = models.CharField(max_length=100)
	last_name = models.CharField(max_length=100)
	email = models.CharField(max_length=200)
	mobileno1 = PhoneField(blank=True, help_text='Contact phone number')
	mobileno2 = PhoneField(blank=True, help_text='Contact phone number')
	city =  models.CharField(max_length=100)
	state =  models.CharField(max_length=100)
	Address1 = models.TextField()
	Address2 = models.TextField()
	pincode = models.CharField(max_length=20)
	cart = models.JSONField()

	def __str__(self) -> str:
		return self.first_name +" "+ self.last_name

# addr1
# : 
# "Ishwar nagar ,yavatmal"
# addr2
# : 
# "address2"
# cart
# : 
# {Shatavarplant: {…}}
# city
# : 
# "yavatmal"
# email
# : 
# "Aryantest@gmail.com"
# f_name
# : 
# "Vedant"
# l_name
# : 
# "Dhenge"
# mobno1
# : 
# "09763366044"
# mobno2
# : 
# "9208905622"
# pincode
# : 
# "445001"
# state
# : 
# "Maharashtra"
# subTotal
# : 
# 400


