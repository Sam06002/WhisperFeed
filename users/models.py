import random
from django.contrib.auth.models import AbstractUser
from django.db import models

class AnonymousUser(AbstractUser):
    # Remove unnecessary fields
    email = None
    first_name = None
    last_name = None

    # Track if the user wants a persistent identity
    is_temporary = models.BooleanField(default=True)
    custom_username = models.CharField(max_length=50, blank=True, unique=True)

    def save(self, *args, **kwargs):
        # Assign a random anonymous username (e.g., "Anon123")
        if not self.custom_username:
            self.username = f"Anon{random.randint(100, 999)}"
        else:
            self.username = self.custom_username
        super().save(*args, **kwargs)