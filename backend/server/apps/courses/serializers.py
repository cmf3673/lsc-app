from apps.courses.models import Course
from rest_framework import serializers


class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        read_only_fields = (
            "id",
            "created_at",
            "created_by",
        )
        fields = (
            "id",
            "created_at",
            "created_by",
            "title"
        )