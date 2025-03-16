from django.shortcuts import render, redirect
from django.contrib.auth import login
from .models import AnonymousUser

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        if username and AnonymousUser.objects.filter(username=username).exists():
            return render(request, 'registration/register.html', {
                'error': 'Username already taken!'
            })
        
        user = AnonymousUser.objects.create_user(
            username=username,
            password=password
        )
        login(request, user)
        return redirect('feed')
        
    return render(request, 'registration/register.html')