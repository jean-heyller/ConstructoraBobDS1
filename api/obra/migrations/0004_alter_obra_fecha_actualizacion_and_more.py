# Generated by Django 4.2.5 on 2024-04-07 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('obra', '0003_obra_usuarios_alter_tarea_usuarios'),
    ]

    operations = [
        migrations.AlterField(
            model_name='obra',
            name='fecha_actualizacion',
            field=models.DateField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='obra',
            name='fecha_registro',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='tarea',
            name='fecha_actualizacion',
            field=models.DateField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='tarea',
            name='fecha_registro',
            field=models.DateField(auto_now_add=True),
        ),
    ]
