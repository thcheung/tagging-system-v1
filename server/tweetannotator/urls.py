from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken import views
from tweetannotator.api import views as ApiViews

router = routers.DefaultRouter()
router.register(r'users', ApiViews.UserViewSet)
router.register(r'projects', ApiViews.ProjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('auth/', ApiViews.CustomAuthToken.as_view()),
]
