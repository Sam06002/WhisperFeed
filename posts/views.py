from django.shortcuts import render, redirect
from users.models import AnonymousUser
from django.contrib.auth import login
from .models import Whisper

def create_whisper(request):
    if request.method == 'POST':
        form = WhisperForm(request.POST)
        if form.is_valid():
            whisper = form.save(commit=False)
            whisper.user = request.user
            whisper.save()
            return redirect('feed')
    else:
        form = WhisperForm()
    return render(request, 'posts/create_whisper.html', {'form': form})

def feed(request):
    whispers = Whisper.objects.all().order_by('-created_at')
    return render(request, 'posts/feed.html', {'whispers': whispers})

def register(request):
    if request.method == 'POST':
        custom_username = request.POST.get('custom_username')
        password = request.POST.get('password')
        
        # Validate username uniqueness
        if AnonymousUser.objects.filter(custom_username=custom_username).exists():
            return render(request, 'register.html', {'error': 'Username already taken!'})
        
        # Create user
        user = AnonymousUser.objects.create_user(
            username=custom_username if custom_username else None,
            password=password,
            is_temporary=False if password else True
        )
        login(request, user)
        return redirect('feed')
    
    return render(request, 'register.html')
