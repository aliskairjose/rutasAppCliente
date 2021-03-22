import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./../../authentication/authentication.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public registerForgotForm: FormGroup;
  constructor(public formBuilder: FormBuilder, private router: Router) {
    const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    this.registerForgotForm = formBuilder.group({
      email:  ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])]
    });
  }

  ngOnInit() {
  }

  confirm() {
    const email = this.registerForgotForm.controls.email.value;
    const emailValid = this.registerForgotForm.controls.email.valid;
    if (email && emailValid) {
      this.router.navigate(['/signin']);
    }
  }

}
