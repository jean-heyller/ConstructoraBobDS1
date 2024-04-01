from django.http import JsonResponse
from django.views.decorators.http import require_GET
from .models import Usuario

@require_GET
def get_usuarios(request):
    hidden = request.GET.get('hidden', None)
    if hidden is not None:
        if hidden.lower() == 'true':
            usuarios = Usuario.objects.filter(eliminado=True)
        else:
            usuarios = Usuario.objects.filter(eliminado=False)
    else:
        usuarios = Usuario.objects.filter(eliminado=False)  # Si no se proporciona el parámetro, por defecto mostrará usuarios activos

    # Serializar los resultados 
    usuarios_serializados = [...]  # tocaria serializar los usuarios.

    return JsonResponse(usuarios_serializados, safe=False)
