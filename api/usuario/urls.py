from rest_framework import routers
from .api import UsuarioViewSet, TipoIdentificacionViewSet, TipoUsuarioViewSet

router = routers.DefaultRouter()

router.register('usuario', UsuarioViewSet, 'usuario')
router.register('tipo_identificacion', TipoIdentificacionViewSet, 'tipo_identificacion')
router.register('tipo_usuario', TipoUsuarioViewSet, 'tipo_usuario')

urlpatterns = router.urls