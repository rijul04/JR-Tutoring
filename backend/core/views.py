from rest_framework import viewsets
from .models import TestModel
from .serializers import TestModelSerializer
from django.shortcuts import render


class TestModelViewSet(viewsets.ModelViewSet):
    queryset = TestModel.objects.all()
    serializer_class = TestModelSerializer
