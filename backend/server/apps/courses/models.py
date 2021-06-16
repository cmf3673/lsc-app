from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# NOTE: Django adds pk id field automatically 
class Course(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.TextField(blank=True)