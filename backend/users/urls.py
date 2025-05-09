from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SubjectViewSet, UserViewSet, TutorProfileViewSet, TuteeProfileViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()

router.register(r'subjects', SubjectViewSet, basename='subject')
router.register(r'users', UserViewSet, basename='user')
router.register(r'tutors', TutorProfileViewSet, basename='tutor')
router.register(r'tutees', TuteeProfileViewSet, basename='tutee')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]
