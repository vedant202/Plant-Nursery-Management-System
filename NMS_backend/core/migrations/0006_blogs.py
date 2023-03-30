# Generated by Django 4.1.6 on 2023-03-30 04:23

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_flowerplant_products'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blogs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('BlogTitle', models.CharField(max_length=400)),
                ('BlogDate', models.DateField(default=django.utils.timezone.now)),
                ('author', models.CharField(max_length=50)),
                ('subpara', models.CharField(max_length=200)),
                ('para1', models.TextField()),
                ('para2', models.TextField()),
                ('para3', models.TextField(blank=True)),
                ('para4', models.TextField(blank=True)),
                ('para5', models.TextField(blank=True)),
                ('product_img1', models.ImageField(blank=True, upload_to='images')),
                ('product_img2', models.ImageField(blank=True, upload_to='images')),
                ('product_img3', models.ImageField(blank=True, upload_to='images')),
                ('img_caption', models.CharField(max_length=200)),
            ],
        ),
    ]
