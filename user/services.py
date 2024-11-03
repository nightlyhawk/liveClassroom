from django.template.loader import render_to_string
from django.shortcuts import get_object_or_404
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.http import HttpResponse 
from django.core.mail import EmailMessage


from django.contrib.auth.tokens import PasswordResetTokenGenerator
import six


class AccountActivationTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (
            six.text_type(user.pk) + six.text_type(timestamp) +
            six.text_type(user.is_active)
        )


account_activation_token = AccountActivationTokenGenerator()

def activateEmail(user, request, to_email):
    try:
        user = user
        mail_subject = 'Activate your user account.'
        message = render_to_string('template_activate_account.html', {
            'subject': 'Account activation',
            'user': user.fullName, 
            'domain': get_current_site(request).domain,
            'uid': urlsafe_base64_encode(force_bytes(user.pk)),
            'token': account_activation_token.make_token(user),
            'protocol': 'https' if request.is_secure() else 'http'
        })
        email = EmailMessage(mail_subject, message, to=[to_email])
        email.send()
        return HttpResponse('Please confirm your email address to complete the registration')  
    except Exception as e:
        return HttpResponse(f'Error: {e}')