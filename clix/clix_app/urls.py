from django.urls import path
from .views import redirect_link, home

urlpatterns = [
    path("", home, name='home'),
    path('<str:shortened_link>/', redirect_link, name='redirect'),
]
