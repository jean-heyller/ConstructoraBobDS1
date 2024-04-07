from usuario.models import Usuario, TipoIdentificacion, TipoUsuario
from rest_framework import viewsets, permissions
from .serializers import UsuarioSerializer, TipoIdentificacionSerializer, TipoUsuarioSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UsuarioSerializer

class TipoIdentificacionViewSet(viewsets.ModelViewSet):
    queryset = TipoIdentificacion.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TipoIdentificacionSerializer

class TipoUsuarioViewSet(viewsets.ModelViewSet):
    queryset = TipoUsuario.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TipoUsuarioSerializer