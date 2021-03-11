import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { ERROR_FORM } from '../../constants/global-constants';

@Component( {
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: [ './authentication.page.scss' ],
} )
export class AuthenticationPage implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  userInfo = null;
  formError = ERROR_FORM;

  constructor(
    private router: Router,
    private _auth: AuthService,
    private _storage: StorageService,
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
    const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  async googleLogin() {
    console.log( 'entered in googla login' );
    const googleUser = await Plugins.GoogleAuth.signIn();
    this.userInfo = googleUser;
    console.log( 'google log in', googleUser );
    if ( this.userInfo.authentication.idToken ) {
      localStorage.setItem( 'userToken', this.userInfo.authentication.idToken );
      this.router.navigate( [ '/sidemenu/Inicio' ] );
    }
  }

  onSubmit(): void {
    console.log( 'submmited' );
    this.submitted = true;

    if ( this.loginForm.valid ) {
      this._auth.login( this.loginForm.value ).subscribe( response => {
        this._storage.store( 'rp_token', response.data );
        this.router.navigate( [ '/sidemenu/Inicio' ] );
      } );
    }
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group( {
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength( 6 ) ] ],
    } );
  }

}
