from django.conf.urls import url, include 
from rest_framework.routers import DefaultRouter
from apps.courses.views import CourseViewSet

router = DefaultRouter()
router.register("courses", CourseViewSet, basename="courses")
courses_urlpatterns = [url("api/v1/", include(router.urls))]