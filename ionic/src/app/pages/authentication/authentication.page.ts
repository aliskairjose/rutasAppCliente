import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { ERROR_FORM, LOGO } from '../../constants/global-constants';
import { CommonService } from '../../services/common.service';
import { ClientsModalPage } from '../../modals/clients-modal/clients-modal.page';
@Component( {
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: [ './authentication.page.scss' ],
} )
export class AuthenticationPage implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  formError = ERROR_FORM;
  logo = LOGO;

  constructor(
    private router: Router,
    private _auth: AuthService,
    private _common: CommonService,
    private formBuilder: FormBuilder,
    private _storage: StorageService,
  ) {
    this.createForm();

  }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  async googleLogin() {
    const googleUser = await Plugins.GoogleAuth.signIn();

    if ( googleUser.authentication.idToken ) {

      if ( !this._auth.exist( googleUser.email ) ) {
        this.registerGoogleUSer( googleUser );
        return;
      }

      const loading = await this._common.presentLoading();
      loading.present();
      this._auth.googleLogin( googleUser ).subscribe( async ( result ) => {
        loading.dismiss();
        await this._storage.store( 'rp_token', googleUser.authentication.idToken );
        await this._storage.store( 'rp_user', googleUser );
        this.router.navigate( [ '/sidemenu/Inicio' ] );
      }, () => loading.dismiss() );
    }
  }

  async onSubmit() {
    this.submitted = true;
    if ( this.loginForm.valid ) {
      const loading = await this._common.presentLoading();
      loading.present();
      this._auth.login( this.loginForm.value ).subscribe( async ( response ) => {
        loading.dismiss();
        this._auth.AuthSubject( response.user );
        const message = response.message;
        const color = 'primary';
        this._common.presentToast( { message, color } );
        await this._storage.store( 'rp_token', response.data );
        await this._storage.store( 'rp_user', response.user );
        this.router.navigate( [ '/sidemenu/Inicio' ] );
      }, () => loading.dismiss() );
    }
  }

  /**
   * @description Registro del usuario google
   */
  private async registerGoogleUSer( googleUser ): Promise<void> {
    console.log( googleUser )
    const modal = await this._common.presentModal( { component: ClientsModalPage, cssClass: '', componentProps: { user: googleUser } } );
    modal.present();
    const modalData = await modal.onDidDismiss();
    console.log( modalData.data );
    if ( modalData.role === 'submit' ) {
      // Registro con modalData.data
    }
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group( {
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength( 8 ) ] ],
    } );
  }

}
