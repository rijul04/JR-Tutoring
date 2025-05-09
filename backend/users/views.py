from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Subject, User, TutorProfile, TuteeProfile
from .serializers import SubjectRWSerializer, UserRWSerializer, TutorProfileReadSerializer, TutorProfileWriteSerializer, TuteeProfileReadSerializer, TuteeProfileWriteSerializer, TutorProfileReadSummarySerializer

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectRWSerializer

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserRWSerializer

class TutorProfileViewSet(viewsets.ModelViewSet):
    queryset = TutorProfile.objects.all()

    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return TutorProfileReadSerializer
        return TutorProfileWriteSerializer
        
    def get_permissions(self):
        if self.action:
            if self.action == 'create':
                return [AllowAny()]
            
            action = getattr(self, self.action, None)
            if action is not None:
                permission_classes = getattr(action, 'permission_classes', None)
                if permission_classes is not None:
                    return [permission() for permission in permission_classes]        
        
        return super().get_permissions()
    
    @action(detail=False, methods=['get'], permission_classes=[AllowAny])
    def summary(self, request):
        queryset = self.get_queryset()
        serializer = TutorProfileReadSummarySerializer(queryset, many=True)
        return Response(serializer.data)
    
class TuteeProfileViewSet(viewsets.ModelViewSet):
    queryset = TuteeProfile.objects.all()

    def get_serializer_class(self):
        if self.action in ["list", "retrieve"]:
            return TuteeProfileReadSerializer
        return TuteeProfileWriteSerializer
    
    def get_permissions(self):
        if self.action:
            if self.action == 'create':
                return [AllowAny()]
            
            action = getattr(self, self.action, None)
            if action is not None:
                permission_classes = getattr(action, 'permission_classes', None)
                if permission_classes is not None:
                    return [permission() for permission in permission_classes]        
        
        return super().get_permissions()
