from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include ('autenticacao.urls')), #Quando acessar o link auth ela ira acessar o autenticacao e dentro dela terá urls.py
    path('', include('plataforma.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
