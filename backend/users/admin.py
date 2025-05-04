from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, TutorProfile, TuteeProfile, Subject

# Register User with Django's built-in UserAdmin
admin.site.register(User, UserAdmin)

# Register your custom models
admin.site.register(TutorProfile)
admin.site.register(TuteeProfile)
admin.site.register(Subject)
