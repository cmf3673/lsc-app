from django.shortcuts import render
from rest_framework import viewsets 
from apps.courses.models import Course 
from apps.courses.serializers import CourseSerializer

class CourseViewSet(viewsets.ModelViewSet):

    serializer_class = CourseSerializer
    queryset = Course.objects.all()

    # Overwriting to save info about who created note
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    # Overwriting to return notes only created by the user 
    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)
