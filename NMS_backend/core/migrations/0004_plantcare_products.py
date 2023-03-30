# Generated by Django 4.1.6 on 2023-03-29 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_seed_products'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlantCare_Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('care_name', models.CharField(max_length=100)),
                ('reviews', models.CharField(max_length=10)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('product_details', models.JSONField(null=True)),
                ('product_desc', models.TextField()),
                ('product_img', models.ImageField(upload_to='images')),
                ('img_caption', models.CharField(max_length=200)),
            ],
        ),
    ]