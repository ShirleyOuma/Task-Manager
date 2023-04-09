from django.contrib import admin
from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "priority", "due_date", "completed", "created_at", "updated_at")
 
# Register model
    

admin.site.register(Task, TaskAdmin)
