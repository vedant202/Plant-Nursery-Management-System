# Generated by Django 4.1.6 on 2023-03-31 06:55

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_plant_products_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='plant_products',
            name='ProductDate',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
