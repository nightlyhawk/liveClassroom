# Generated by Django 5.1.2 on 2024-11-04 22:03

import classroom.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classroom', '0006_assessment_submissions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='submissions',
            name='file',
            field=models.FileField(upload_to=classroom.models.submissions_directory_path),
        ),
    ]
