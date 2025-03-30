from rest_framework.routers import DefaultRouter
from .views import TestModelViewSet, TestModel2ViewSet

router = DefaultRouter()

router.register(r"test_model", TestModelViewSet)
router.register(r"test_model_2", TestModel2ViewSet, basename="test_model_2")



urlpatterns = router.urls