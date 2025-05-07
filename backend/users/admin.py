from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Subject, TutorProfile, TuteeProfile

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ('id', 'username', 'email', 'role', 'is_staff')

admin.site.register(Subject)
admin.site.register(TutorProfile)
admin.site.register(TuteeProfile)
