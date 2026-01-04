from django.db import models
import uuid
# Create your models here.
class ClixShortner(models.Model):
    original_url = models.URLField(max_length= 10000)
    shortened_link = models.CharField(max_length= 10, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.shortened_link:
            self.shortened_link = str(uuid.uuid4())[:5]

        super().save(*args, **kwargs)


    def __str__(self):
        return self.original_url
    
    