import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { ERROR_FORM } from '../../constants/global-constants';
import { CommonService } from '../../services/common.service';
import { LoadingController } from '@ionic/angular';

@Component( {
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: [ './authentication.page.scss' ],
} )
export class AuthenticationPage implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  formError = ERROR_FORM;

  private _loading: any;

  constructor(
    private router: Router,
    private _auth: AuthService,
    private _storage: StorageService,
    private formBuilder: FormBuilder,
    private _commonService: CommonService,
    private _loadingController: LoadingController,
  ) {
    this.createForm();

  }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  async googleLogin() {
    const googleUser = await Plugins.GoogleAuth.signIn();
    if ( googleUser.authentication.idToken ) {
      this.presentLoading().then( () => {
        this._auth.googleLogin( googleUser ).subscribe( async ( result ) => {
          this._loading.dismiss();

          const token = await this._storage.store( 'rp_token', googleUser.authentication.idToken );
          const user = await this._storage.store( 'rp_user', googleUser );
          this.router.navigate( [ '/sidemenu/Inicio' ] );
        }, () => this._loading.dismiss() );
      } );
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if ( this.loginForm.valid ) {
      this.presentLoading().then( () => {
        this._auth.login( this.loginForm.value ).subscribe( async ( response ) => {
          this._loading.dismiss();
          this._auth.AuthSubject( response.user );
          const message = response.message;
          const color = 'primary';
          this._commonService.presentToast( { message, color } );
          const token = await this._storage.store( 'rp_token', response.data );
          const user = await this._storage.store( 'rp_user', response.user );
          this.router.navigate( [ '/sidemenu/Inicio' ] );
        }, () => this._loading.dismiss() );
      } );
    }
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group( {
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength( 8 ) ] ],
    } );
  }

  private async presentLoading() {
    this._loading = await this._loadingController.create( {
      cssClass: 'mycustom-class',
      message: 'Espere popr favor...'
    } );
    await this._loading.present();
  }

}
