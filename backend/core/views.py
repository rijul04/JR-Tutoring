from rest_framework import viewsets
from .models import TestModel, TestModel2
from .serializers import TestModelSerializer, TestModel2Serializer
from django.shortcuts import render
from rest_framework.permissions import AllowAny



class TestModelViewSet(viewsets.ModelViewSet):
    queryset = TestModel.objects.all()
    serializer_class = TestModelSerializer

    permission_classes = [AllowAny]

class TestModel2ViewSet(viewsets.ModelViewSet):
    queryset = TestModel2.objects.all()
    serializer_class = TestModel2Serializer

    permission_classes = [AllowAny]