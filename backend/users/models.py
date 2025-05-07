from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


class User(AbstractUser):
    USER_ROLES = (
        ("tutor", "Tutor"),
        ("tutee", "Tutee"),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    role = models.CharField(max_length=10, choices=USER_ROLES)

    def __str__(self):
        return self.get_full_name() or self.username


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
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['name', 'level'],
                name='unique_subject_name_and_level'
            ),
        ]

class TutorProfile(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE, related_name='tutor_profile')
    image = models.TextField(blank=True)  # base64 image
    education = models.CharField(max_length=255, blank=True)
    hourly_rate = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
    tutees = models.ManyToManyField("TuteeProfile", blank=True, related_name="tutees")
    subjects = models.ManyToManyField(Subject, blank=True, related_name="subjects")
    bio = models.CharField(max_length=255, blank=True)



    def __str__(self):
        return f"Tutor: {self.user.get_full_name() or self.user.username}"
    

    def save(self, *args, **kwargs):
        if self._state.adding and self.user.role != "tutor":
            self.user.role = "tutor"
            self.user.save()
        super().save(*args, **kwargs)


class TuteeProfile(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE, related_name='tutee_profile')

    learning_goals = models.TextField(blank=True)
    tutor = models.ManyToManyField(TutorProfile, blank=True, related_name="tutors")
    dob = models.DateField()


    def __str__(self):
        return f"Tutee: {self.user.get_full_name() or self.user.username}"

    def save(self, *args, **kwargs):
        if self._state.adding and self.user.role != "tutee":
            self.user.role = "tutee"
            self.user.save()
        super().save(*args, **kwargs)
