from django.shortcuts import render, redirect, get_object_or_404
from .models import MlinerShortner

# Create your views here.
def home(request):
    # new_url = None
    new_url = request.session.pop('new_url', None)

    if request.method =="POST":
        
        original_url = request.POST.get('original_url')
        obj = MlinerShortner.objects.create(original_url=original_url)
        new_url = request.build_absolute_uri('/') + obj.shortened_link

        request.session['new_url'] = new_url
        
        return redirect('home')
    return render(request, 'index.html', {'new_url': new_url})
    
def redirect_link(request, shortened_link):
    link = get_object_or_404(MlinerShortner, shortened_link= shortened_link)

    return redirect(link.original_url)