from rest_framework import viewsets
from .models import TestModel, TestModel2
from .serializers import TestModelSerializer, TestModel2Serializer
from django.shortcuts import render


class TestModelViewSet(viewsets.ModelViewSet):
    queryset = TestModel.objects.all()
    serializer_class = TestModelSerializer

class TestModel2ViewSet(viewsets.ModelViewSet):
    queryset = TestModel2.objects.all()
    serializer_class = TestModel2Serializer
