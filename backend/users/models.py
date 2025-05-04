from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    USER_ROLES = (
        ("tutor", "Tutor"),
        ("tutee", "Tutee"),
    )
    role = models.CharField(max_length=10, choices=USER_ROLES)


class Subject(models.Model):
    LEVEL_CHOICES = (
        ('primary', 'Primary'),
        ('gcse', 'GCSE'),
        ('alevel', 'A-Level'),
        ('university', 'University'),
    )
    name = models.CharField(max_length=100)
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES)

    


class TutorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="tutor_profile")
    bio = models.CharField(max_length=255)
    image = models.TextField() # to hold base 64 image
    eductaion = models.CharField(max_length=255) # kinda similar as bio for now not sure best way to move forward with this one tbh
    hourly_rate = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True) # users can add if want for not (for info for us for now)

class TuteeProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="tutee_profile")
    learning_goals = models.TextField(blank=True)
    Tutor = models.ManyToManyField(TutorProfile, blank=True, related_name="tutee_to_tutor")