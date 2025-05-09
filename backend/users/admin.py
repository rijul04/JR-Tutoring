from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Subject, TutorProfile, TuteeProfile

admin.site.register(User)
admin.site.register(Subject)
admin.site.register(TutorProfile)
admin.site.register(TuteeProfile)
