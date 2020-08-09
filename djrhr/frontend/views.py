from django.shortcuts import render
from django.views.decorators.cache import never_cache

# Create your views here.
@never_cache
def index_view(request):
    return render(request,'frontend/index.html', context=None)