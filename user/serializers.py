from rest_framework import serializers
from .models import NewUser
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password


# Create your serializers here.
class NewUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirmPassword = serializers.CharField(write_only=True, required=True)
    gender = serializers.CharField(required=False)

    class Meta:
        model = NewUser
        fields = ('id', 'email', 'fullName', 'password', 'confirmPassword', 'role', 'gender', 'created_at')

    def validate(self, attrs):
        password=attrs.get('password')
        confirmPassword=attrs.pop('confirmPassword')
        if password != confirmPassword:
            raise serializers.ValidationError({ "password": "Password fields didn't match." })

        return attrs
    
    def create(self, validated_data):
        user = NewUser.objects.create(**validated_data)
        user.is_active = True
        user.set_password(validated_data['password'])
        user.save()

        return user
    

class UpdateNewUserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(required=False)
    password = serializers.CharField(write_only=True, required=False, validators=[validate_password])
    confirmPassword = serializers.CharField(write_only=True, required=False)
    fullName = serializers.CharField(required=False)
    role = serializers.CharField(required=False)
    gender = serializers.CharField(required=False)

    class Meta:
        model = NewUser
        fields = ('id', 'email', 'fullName', 'password', 'confirmPassword', 'role', 'gender', 'created_at')

    def validate(self, attrs):
        if attrs.get('password') and attrs.get('confirmPassword'):
            password=attrs.get('password')
            confirmPassword=attrs.pop('confirmPassword')
            if password != confirmPassword:
                raise serializers.ValidationError({ "password": "Password fields didn't match." })
        else:
            attrs.pop('confirmPassword')

        return attrs
    
    def update(self, instance, validated_data):
        password = validated_data.pop("password")
        if password:
            instance.set_password(password)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
            
        return instance  

class LoginSerializer(serializers.ModelSerializer):
    email = serializers.CharField()
    password = serializers.CharField(write_only=True)
    class Meta:
        model = NewUser
        fields = ( 'email', 'password',)
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        user = authenticate(**data)
        if user is not None:
            return user
        raise Exception("email or password is Incorrect")