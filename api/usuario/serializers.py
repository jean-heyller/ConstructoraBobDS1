from rest_framework import serializers
from .models import Usuario, TipoIdentificacion, TipoUsuario

class UsuarioSerializer(serializers.ModelSerializer):
    tipoUsuarioId = serializers.CharField(source='tipoUsuarioId.nombre', read_only=True)
    tipoUsuarioNombre = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = '__all__'
        read_only_fields = ('fecha_registro', 'fecha_actualizacion')

    def validate_tipoUsuarioNombre(self, value):
        try:
            tipo_usuario = TipoUsuario.objects.get(nombre=value)
        except TipoUsuario.DoesNotExist:
            raise serializers.ValidationError('Tipo de usuario no válido.')
        return tipo_usuario

    def create(self, validated_data):
        tipo_usuario_nombre = validated_data.pop('tipoUsuario')
        usuario = Usuario.objects.create(tipoUsuarioId=tipo_usuario_nombre, **validated_data)
        return usuario

    def update(self, instance, validated_data):
        tipo_usuario_nombre = validated_data.pop('tipoUsuario', None)
        if tipo_usuario_nombre is not None:
            instance.tipoUsuarioId = tipo_usuario_nombre
        return super().update(instance, validated_data)
    
class TipoIdentificacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoIdentificacion
        fields = '__all__'

class TipoUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoUsuario
        fields = ['nombre']

