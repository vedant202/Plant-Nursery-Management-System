from django.shortcuts import render
from django.http import JsonResponse
from django.middleware.csrf import get_token
from .models import *
from django.core import serializers
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from django.contrib.auth import logout

import jwt

# Create your views here.

@csrf_exempt
def getAllPlantsProducts(request):
	
	if request.method == "GET" :
		# plant_products = Plant_Products()
		getAllProducts = list(Plant_Products.objects.all().values())
		# getAllProducts = serializers.serialize('json', Plant_Products.objects.all())
		print("Get all products ");
		# print(list(Plant_Products.objects.all().values()))
# ,"data":json.dumps({"plant_products":getAllProducts})
		res = {"response":True,"data":getAllProducts,"msg":"success"}
	elif request.method == "POST":
		req_body = json.loads(request.body)
		# plant_name = req_body['data']['plantname']
		plant_name = req_body['id']
		plant = list(Plant_Products.objects.filter(id=plant_name).values())
		# plant = list(Plant_Products.objects.filter(plant_name=plant_name).values())
		# print("Request body ",req_body['data']['plantname'])
		print("Request body ",req_body['id'])
		print("Database ",plant)

		res = {"response":True,"data":plant,"msg":"success"}

	else:
		res = {"response":False,data:"","msg":"failure"}
	return JsonResponse(res);

@csrf_exempt
def getAllFlowerPlantsProducts(request):
	
	if request.method == "GET" :
		# plant_products = Plant_Products()
		getAllProducts = list(FlowerPlant_Products.objects.all().values())
		# getAllProducts = serializers.serialize('json', Plant_Products.objects.all())
		print("Get all products ");
		# print(list(Plant_Products.objects.all().values()))
# ,"data":json.dumps({"plant_products":getAllProducts})
		res = {"response":True,"data":getAllProducts,"msg":"success"}
	elif request.method == "POST":
		req_body = json.loads(request.body)
		flower_name = req_body['data']['plantname']
		plant = list(FlowerPlant_Products.objects.filter(plant_name=flower_name).values())
		print("Request body ",req_body['data']['plantname'])
		print("Database ",plant)

		res = {"response":True,"data":plant,"msg":"success"}

	else:
		res = {"response":False,"data":"","msg":"failure"}
	return JsonResponse(res);

@csrf_exempt
def getAllSeedsProducts(request):
	
	if request.method == "GET" :
		# plant_products = Plant_Products()
		getAllProducts = list(Seed_Products.objects.all().values())
		# getAllProducts = serializers.serialize('json', Plant_Products.objects.all())
		print("Get all products ");
		# print(list(Plant_Products.objects.all().values()))
# ,"data":json.dumps({"plant_products":getAllProducts})
		res = {"response":True,"data":getAllProducts,"msg":"success"}
	elif request.method == "POST":
		req_body = json.loads(request.body)
		slug = req_body['slug']
		plant = list(Seed_Products.objects.filter(slug=slug).values())
		# print("Request body ",req_body['data']['plantname'])
		print("Database ",plant)

		res = {"response":True,"data":plant,"msg":"success"}

	else:
		res = {"response":False,"data":"","msg":"failure"}
	return JsonResponse(res);

@csrf_exempt
def getAllPlantCareProducts(request):
	
	if request.method == "GET" :
		# plant_products = Plant_Products()
		getAllProducts = list(PlantCare_Products.objects.all().values())
		# getAllProducts = serializers.serialize('json', Plant_Products.objects.all())
		print("Get all products ");
		# print(list(Plant_Products.objects.all().values()))
# ,"data":json.dumps({"plant_products":getAllProducts})
		res = {"response":True,"data":getAllProducts,"msg":"success"}
	elif request.method == "POST":
		req_body = json.loads(request.body)
		plantcare_name = req_body['data']['plantname']
		plant = list(PlantCare_Products.objects.filter(plant_name=plantcare_name).values())
		print("Request body ",req_body['data']['plantname'])
		print("Database ",plant)

		res = {"response":True,"data":plant,"msg":"success"}

	else:
		res = {"response":False,"data":"","msg":"failure"}
	return JsonResponse(res);

@csrf_exempt
def getAllBlogs(request):
	
	if request.method == "GET" :
		# plant_products = Plant_Products()
		getAllblogs = list(Blogs.objects.all().values())
		# getAllProducts = serializers.serialize('json', Plant_Products.objects.all())
		print("Get all Blogs ");
		# print(list(Plant_Products.objects.all().values()))
# ,"data":json.dumps({"plant_products":getAllProducts})
		res = {"response":True,"data":getAllblogs,"msg":"success"}
	elif request.method == "POST":
		req_body = json.loads(request.body)
		blog_name = req_body['slug']
		print(blog_name)
		blog = list(Blogs.objects.filter(slug=blog_name).values())
		# print("Request body ",req_body['data']['plantname'])
		print("Database ",blog)

		res = {"response":True,"data":blog[0],"msg":"success"}

	else:
		res = {"response":False,"data":"","msg":"failure"}
	return JsonResponse(res);

@csrf_exempt
def getAllContacts(request):
	
	if request.method == "GET" :
		# plant_products = Plant_Products()
		getAllContacts = list(Contact_db.objects.all().values())
		# getAllProducts = serializers.serialize('json', Plant_Products.objects.all())
		print("Get all products ");
		# print(list(Plant_Products.objects.all().values()))
# ,"data":json.dumps({"plant_products":getAllProducts})
		res = {"response":True,"data":getAllContacts,"msg":"success"}
	elif request.method == "POST":
		req_body = json.loads(request.body)
		contact_name = req_body['data']['plantname']
		contact_info = list(Contact_db.objects.filter(plant_name=contact_name).values())
		print("Request body ",req_body['data']['plantname'])
		print("Database ",contact_info)

		res = {"response":True,"data":contact_info,"msg":"success"}

	else:
		res = {"response":False,data:"","msg":"failure"}
	return JsonResponse(res);

def saveContact(request):
	if request.method == "POST":
		data = json.loads(request.body)
		con = Contact_db(first_name=data['f_name'],last_name=data['l_name'],email=data['email'],phone=data['mobno1'],city=data['city'],state=data['state'],desc=data['comment'])
		con.save()
		res = {"response":True,"data":data['f_name'],"msg":"success"}
	else:
		res = {"response":False,data:"","msg":"failure"}
	return JsonResponse(res);

def checkoutInfo(request):
	res = {"response":False,"data":"","msg":"failure"}
	if request.method == "POST":
		req_body = json.loads(request.body)
		print(req_body['f_name'])
		# req_body = req_body.data
		f_name = req_body['f_name']
		l_name = req_body['l_name']
		mobno1 = req_body['mobno1']
		mobno2 =  req_body['mobno2']
		city = req_body['city']
		state = req_body['state']
		email = req_body['email']
		pincode = req_body['pincode']
		addr1 = req_body['addr1']
		addr2 = req_body['addr2']
		cart = req_body['cart']
		subTotal = req_body['subTotal']
		try:
			checkout = CheckoutInfo(first_name = f_name,last_name=l_name,email=email,mobileno1=mobno1,mobileno2=mobno2,city=city,state=state,Address1=addr1,Address2=addr2,pincode=pincode,cart=cart)
			checkout.save()
			res = {"response":True,"data":"","msg":"success"}
		except Exception as e:
			print(e)
	return JsonResponse(res);

def handleRegister(request):
    key = "MySecretKeyForThisProject@1234"
    authToken = ""
    res = {"response":"failure","authToken":"","data":""}
    if request.method == "POST":
        print(request.body)
        u_data = json.loads(request.body)
        username = u_data['U_name']
        # print(u_data.keys())



        try:
            authToken = jwt.encode({"username":username},key,algorithm="HS256")
            user = User.objects.create_user(first_name=u_data['f_name'],last_name=u_data['l_name'],username=u_data['U_name'],email=u_data['email'],password=u_data['pass'])

            user.save()
            

            res = {"response":"success","authToken":authToken,"data":f"{u_data['f_name']} {u_data['l_name']} Successfully Registered in"};
        except Exception as e:
            res = {"response":"failure","authToken":"","data":f"Error while registering user {e}"};

    return JsonResponse(res);



def handleLogin(request):
    key = "MySecretKeyForThisProject@1234"
    authToken = ""

    res = {"response":"failure","authToken":authToken,"data":""}
    if request.method == "POST":
        print(request.body)
        data = json.loads(request.body)
        # {u_name:"",pass:""}
        username = data['u_name']
        password = data['pass']


        try:
            user = authenticate(request,username=username, password=password)
            print(user)
            if user is not None:
                login(request,user);
                authToken = jwt.encode({"username":username},key,algorithm="HS256")

            res = {"response":"success","authToken":authToken,"data":"You are logged in"};
    
        except Exception as e:
            res = {"response":"failure","authToken":authToken,"data":"You are not logged in and there is a error "+e}
        

        
    return JsonResponse(res);

@csrf_exempt
def searchNavbar(request):
	if request.method == "POST":
		body = json.loads(request.body)

		all_obj_list = []
		plant_prods = list(Plant_Products.objects.all().values())
		# seed_prods = list(Seed_Products.objects.all().values())
		# flower_plant_prods = list(FlowerPlant_Products.objects.all().values())
		all_obj_list.append(plant_prods)
		# all_obj_list.append(seed_prods)
		# all_obj_list.append(flower_plant_prods)
		sear = body
		# print("Search ",sear)
		data = []

		for l in all_obj_list:
			for i in l:
				print(i)
				if(sear == i['plant_name'][:len(sear)]):
					data.append(i)
					print(i['plant_name'])
		print(data)
		res = {"response":True,"data":data,"msg":"success"}
	else:
		res = {"response":False,"data":"","msg":"failure"}
	return JsonResponse(res)
# search()

def handlelogout(request):
    logout(request)
    res = {"response":"success","data":"You are logged out"};

    return JsonResponse(res);

def csrf(request):
    print("CSRF is requested")
    return JsonResponse({'csrfToken':get_token(request)})
