from django.db import migrations
from django.contrib.auth import get_user_model

def create_superuser(apps, schema_editor):
    User = get_user_model()
    if not User.objects.filter(email="admin@example.com").exists():
        User.objects.create_superuser(
            email="ri1jgo0l@gmail.com",
            password="5afgmWkO&2PvnP"
        )

class Migration(migrations.Migration):

    dependencies = [
        ("users", "0006_alter_tutorprofile_subjects"),  # adjust if needed
    ]

    operations = [
        migrations.RunPython(create_superuser),
    ]
