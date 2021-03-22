import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  public registerForm: FormGroup;
  userInfo = null;
  // validationMessages = {
  //   'email': [
  //       { type: 'required', message: 'Username is required.' },
  //       { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
  //       { type: 'pattern', message: 'Your username has already been taken.' }
  //     ],
  //     'password': [
  //       { type: 'required', message: 'Name is required.' },
  //       { type: 'minlength', message: 'Username must be at least 5 characters long.' },
  //       { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
  //     ],
  //   }

  constructor(public formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  ngOnInit() {
  }

  async googleLogin() {
    console.log('entered in googla login');
    const googleUser = await Plugins.GoogleAuth.signIn();
    this.userInfo = googleUser;
    console.log('google log in', googleUser);
    if (this.userInfo.authentication.idToken) {
      localStorage.setItem('userToken', this.userInfo.authentication.idToken);
      this.router.navigate(['/sidemenu/Inicio']);
    }
  }

  signin() {
    const email = this.registerForm.controls.email.value;
    const pass = this.registerForm.controls.password.value;
    const emailValid = this.registerForm.controls.email.valid;
    const passValid = this.registerForm.controls.password.valid;
    if (email && pass && emailValid && passValid) {
      localStorage.setItem('userToken', 'test-valid user');
      this.router.navigate(['/sidemenu/Inicio']);
    }
  }
}
