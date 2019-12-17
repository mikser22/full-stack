import smtplib
from django.conf import settings
from celery import Celery

app = Celery('tasks', broker='redis://localhost:6378/0')

@app.task
def send_mail(email, username):
  server = smtplib.SMTP("smtp.mail.ru", 587)
  server.starttls()
  server.login(settings.ADMIN_EMAIL, settings.ADMIN_PASSWORD)
  print(email)
  message = "Hello " + username + "\nWelcome to our site \nYou have just registered!"
  server.sendmail(settings.ADMIN_EMAIL, email, message)
  server.close()
