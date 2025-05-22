from rest_framework import serializers
from .models import User, Subject, TutorProfile, TuteeProfile

# ---------- Subject Serializers ----------

class SubjectRWSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Subject
        fields = ['id', 'name', 'level']

# ---------- User Serializers ----------

class UserRWSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'role']

# ---------- TuteeProfile Serializers ----------

class TuteeProfileReadSerializer(serializers.ModelSerializer):
    user = UserRWSerializer(read_only=True)

    class Meta:
        model = TuteeProfile
        fields = ['user', 'learning_goals', 'tutors', 'dob']


class TuteeProfileWriteSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField(write_only=True, required=False, allow_blank=True)
    last_name = serializers.CharField(write_only=True, required=False, allow_blank=True)
    tutors = serializers.PrimaryKeyRelatedField(
        queryset=TutorProfile.objects.all(),
        required=False,
        allow_null=True,
        many=True
    )

    class Meta:
        model = TuteeProfile
        fields = ['email', 'password', 'first_name', 'last_name', 'learning_goals', 'tutors', 'dob']

    def create(self, validated_data):

        tutors_data = validated_data.pop('tutors', [])

        user = User.objects.create(
            email=validated_data.pop('email'),
            first_name=validated_data.pop('first_name', ''),
            last_name=validated_data.pop('last_name', ''),
            role='tutee',
        )
        user.set_password(validated_data.pop('password'))
        user.save()

        tutee_profile = TuteeProfile.objects.create(user=user, **validated_data)

        if tutors_data:
            tutee_profile.tutors.set(tutors_data)

        return tutee_profile
    
    def update(self, instance, validated_data):
        # Pop user fields from the payload
        email = validated_data.pop('email', None)
        first_name = validated_data.pop('first_name', None)
        last_name = validated_data.pop('last_name', None)
        password = validated_data.pop('password', None)
        tutors_data = validated_data.pop('tutors', None)

        # Update user fields
        user = instance.user
        if email:
            user.email = email
        if first_name:
            user.first_name = first_name
        if last_name:
            user.last_name = last_name
        if password:
            user.set_password(password)
        user.save()


        if tutors_data is not None:
            instance.tutors.set(tutors_data)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance


# ---------- TutorProfile Serializers ----------

class TutorProfileReadSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(source='user.id', read_only=True)
    full_name = serializers.CharField(source='user.get_full_name', read_only=True)
    email = serializers.EmailField(source="user.email", read_only=True)
    subjects = SubjectRWSerializer(read_only=True, many=True)
    tutees = TuteeProfileReadSerializer(read_only=True, many=True)

    class Meta:
        model = TutorProfile
        fields = ['id', 'full_name', "email", 'image', 'education', 'hourly_rate',
                  'subjects', 'tutees', 'bio', 'dob']


class TutorProfileWriteSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField(write_only=True, required=False, allow_blank=True)
    last_name = serializers.CharField(write_only=True, required=False, allow_blank=True)
    subjects = serializers.PrimaryKeyRelatedField(
        queryset=Subject.objects.all(),
        many=True,
        required=False
    )
    tutees = serializers.PrimaryKeyRelatedField(
        queryset=TuteeProfile.objects.all(),
        many=True,
        required=False
    )

    class Meta:
        model = TutorProfile
        fields = ['email', 'password', 'first_name', 'last_name',
                  'image', 'education', 'hourly_rate', 'subjects', 'tutees', 'bio', 'dob']

    def create(self, validated_data):

        subjects_data = validated_data.pop('subjects', [])
        tutees_data = validated_data.pop('tutees', [])
 
        user = User.objects.create(
            email=validated_data.pop('email'),
            first_name=validated_data.pop('first_name', ''),
            last_name=validated_data.pop('last_name', ''),
            role='tutor',
        )
        user.set_password(validated_data.pop('password'))
        user.save()

        tutor_profile = TutorProfile.objects.create(user=user, **validated_data)

        if subjects_data:
            tutor_profile.subjects.set(subjects_data)
        if tutees_data:
            tutor_profile.tutees.set(tutees_data)

        return tutor_profile

    def update(self, instance, validated_data):
        # Pop user fields from the payload
        email = validated_data.pop('email', None)
        first_name = validated_data.pop('first_name', None)
        last_name = validated_data.pop('last_name', None)
        password = validated_data.pop('password', None)

        subjects_data = validated_data.pop('subjects', None)
        tutees_data = validated_data.pop('tutees', None)

        # Update user fields
        user = instance.user
        if email:
            user.email = email
        if first_name:
            user.first_name = first_name
        if last_name:
            user.last_name = last_name
        if password:
            user.set_password(password)
        user.save()

        if subjects_data is not None:
            instance.subjects.set(subjects_data)
        if tutees_data is not None:
            instance.tutees.set(tutees_data)

        # Update the TuteeProfile fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance

class TutorProfileReadSummarySerializer(serializers.ModelSerializer):
    # user = serializers.SerializerMethodField()
    id = serializers.UUIDField(source='user.id', read_only=True)
    full_name = serializers.CharField(source='user.get_full_name', read_only=True)
    email = serializers.EmailField(source="user.email", read_only=True)
    subjects = SubjectRWSerializer(many=True, read_only=True)

    class Meta:
        model = TutorProfile
        fields = ["id", "full_name", "email", 'hourly_rate', 'subjects', 'bio', 'image', "rating"]