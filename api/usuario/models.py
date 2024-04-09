import uuid
from django.db import models

# Create your models here.

class Usuario(models.Model):
    usuarioId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    noIdentificacion = models.CharField(max_length=50)
    tipoIdentID = models.ForeignKey('TipoIdentificacion', on_delete=models.CASCADE)
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=100)
    tipoUsuarioId = models.ForeignKey('TipoUsuario', on_delete=models.CASCADE)
    genero = models.CharField(max_length=9)
    direccion = models.CharField(max_length=50)
    noCelular = models.CharField(max_length=20)
    usuariodelete = models.BooleanField(default=False)
    foto = models.URLField(null=True, blank=True)
    fecha_registro = models.DateField(auto_now_add=True)
    fecha_actualizacion = models.DateField(auto_now=True)

    def __str__(self):
        return self.nombre + ' ' + self.apellido



class TipoIdentificacion(models.Model):
    tipoIdentID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre
    
class TipoUsuario(models.Model):
    tipoUsuarioId = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre