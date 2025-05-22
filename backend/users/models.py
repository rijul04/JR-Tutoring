from django.utils import timezone
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.validators import MinValueValidator, MaxValueValidator
import uuid


class Subject(models.Model):
    LEVEL_CHOICES = (
        ('primary', 'Primary'),
        ('gcse', 'GCSE'),
        ('alevel', 'A-Level'),
        ('university', 'University'),
    )
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
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

class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("Email must be provided")
        if not password:
            raise ValueError("Password must be provided")
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)
    
class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    role = models.CharField(max_length=10, choices=[('tutor', 'Tutor'), ('tutee', 'Tutee')])
    date_joined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}".strip()

class TutorProfile(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE, related_name='tutor_profile')

    image = models.TextField(blank=True)  # base64 image
    education = models.CharField(max_length=255, blank=True)
    hourly_rate = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)

    tutees = models.ManyToManyField("TuteeProfile", blank=True, null=True, related_name="tutees")

    subjects = models.ManyToManyField(Subject, blank=True, null=True, related_name="subjects")
    bio = models.CharField(max_length=255, blank=True)
    dob = models.DateField()

    rating = models.DecimalField(
        max_digits=2,
        decimal_places=1,
        default=2.5,
        validators=[MinValueValidator(0), MaxValueValidator(5)],
        db_index=True
    )


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
    tutors = models.ManyToManyField(TutorProfile, blank=True, related_name="tutors")
    dob = models.DateField()


    def __str__(self):
        return f"Tutee: {self.user.get_full_name() or self.user.username}"

    def save(self, *args, **kwargs):
        if self._state.adding and self.user.role != "tutee":
            self.user.role = "tutee"
            self.user.save()
        super().save(*args, **kwargs)
