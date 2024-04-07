import requests
from rest_framework import serializers

def validate_recaptcha(recaptcha_response):
    data = {
        'secret': 'Tu clave privada de reCAPTCHA',
        'response': recaptcha_response
    }
    r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
    result = r.json()
    if not result['success']:
        raise serializers.ValidationError("Invalid reCAPTCHA.")