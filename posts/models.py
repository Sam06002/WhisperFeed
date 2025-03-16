from django.conf import settings
from django.db import models

class Whisper(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def display_name(self):
        return "Anonymous" if self.user.is_temporary else self.user.custom_username