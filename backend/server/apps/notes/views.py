from django.shortcuts import render
from rest_framework import viewsets 
from apps.notes.models import Note 
from apps.notes.serializers import NoteSerializer

class NoteViewSet(viewsets.ModelViewSet):

    serializer_class = NoteSerializer
    queryset = Note.objects.all()

    # Overwriting to save info about who created note
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    # Overwriting to return notes only created by the user 
    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)
