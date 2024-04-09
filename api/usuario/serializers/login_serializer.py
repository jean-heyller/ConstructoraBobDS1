from django.contrib.auth.hashers import check_password
from rest_framework import serializers
from usuario.models import Usuario
from .recaptcha import validate_recaptcha

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    recaptcha_response = serializers.CharField()

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')
        recaptcha_response = data.get('recaptcha_response')

        validate_recaptcha(recaptcha_response)

        try:
            user = Usuario.objects.get(username=username)
        except Usuario.DoesNotExist:
            raise serializers.ValidationError("Credenciales incorrectas.")

        if not check_password(password, user.password):
            raise serializers.ValidationError("Credenciales incorrectas.")

        return user