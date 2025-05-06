from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

# --- Custom User model ---

class User(AbstractUser):
    USER_ROLES = (
        ("tutor", "Tutor"),
        ("tutee", "Tutee"),
    )
    role = models.CharField(max_length=10, choices=USER_ROLES)

    def __str__(self):
        return self.get_full_name() or self.username

# --- Subject model ---

class Subject(models.Model):
    LEVEL_CHOICES = (
        ('primary', 'Primary'),
        ('gcse', 'GCSE'),
        ('alevel', 'A-Level'),
        ('university', 'University'),
    )
    name = models.CharField(max_length=100)
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES)

    def __str__(self):
        return f"{self.name} ({self.get_level_display()})"

# --- Abstract base profile for shared fields ---

class BaseProfile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=255, blank=True)
    dob = models.DateField()

    class Meta:
        abstract = True  # 🚨 No DB table will be created for BaseProfile

# --- Tutor profile ---

class TutorProfile(BaseProfile):
    image = models.TextField(blank=True)  # base64 image
    education = models.CharField(max_length=255, blank=True)
    hourly_rate = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    subjects = models.ManyToManyField(Subject, blank=True, related_name="tutors")

    def __str__(self):
        return f"Tutor: {self.user.get_full_name() or self.user.username}"

# --- Tutee profile ---

class TuteeProfile(BaseProfile):
    learning_goals = models.TextField(blank=True)
    tutor = models.ManyToManyField(TutorProfile, blank=True, related_name="tutees")

    def __str__(self):
        return f"Tutee: {self.user.get_full_name() or self.user.username}"
