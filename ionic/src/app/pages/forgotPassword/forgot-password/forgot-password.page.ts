import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ERROR_FORM, LOGO } from '../../../constants/global-constants';

@Component( {
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: [ './../../authentication/authentication.page.scss' ],
} )
export class ForgotPasswordPage implements OnInit {

  registerForgotForm: FormGroup;
  submmited: boolean;
  formError = ERROR_FORM;
  logo = LOGO;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  get f() { return this.registerForgotForm.controls }

  ngOnInit() {
  }

  async onSubmit() {
    this.submmited = true;

  }

  private createForm(): void {
    this.registerForgotForm = this.formBuilder.group(
      {
        email: [ '', [ Validators.required, Validators.email ] ]
      }
    );
  }

}
