from rest_framework.routers import DefaultRouter
from .views import TestModelViewSet

router = DefaultRouter()

router.register(r"test_model", TestModelViewSet)



urlpatterns = router.urls