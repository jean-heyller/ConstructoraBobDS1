from usuario.models import Usuario, TipoIdentificacion, TipoUsuario
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers.usuario_serializers import UsuarioSerializer, TipoIdentificacionSerializer, TipoUsuarioSerializer
from .serializers.login_serializer import LoginSerializer

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

class LoginViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    def create(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({'username': user.username, 'tipoUsuario': user.tipoUsuarioId.nombre})
    
    @property
    def allowed_methods(self):
        return ['POST']