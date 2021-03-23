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
      const loading = await this._common.presentLoading();
      loading.present();
      const exist = await this.userExist( googleUser.email );
      console.log( exist );
      loading.dismiss();
      ( exist ) ? this.googleAccess( { email: googleUser.email, google_id: googleUser.id } ) : this.registerGoogleUSer( googleUser );
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
    const modal = await this._common.presentModal( { component: ClientsModalPage, cssClass: '', componentProps: { user: googleUser } } );
    modal.present();
    const modalData = await modal.onDidDismiss();
    if ( modalData.role === 'submit' ) {
      this.googleAccess( modalData.data );
    }
  }

  /**
   * @description Registro / Acceso del usuario google
   */
  private async googleAccess( accessData: any ) {
    const loading = await this._common.presentLoading();
    loading.present();
    this._auth.login( accessData ).subscribe( async ( response ) => {
      loading.dismiss();
      this._auth.AuthSubject( response.user );
      const message = response.message;
      const color = 'primary';
      this._common.presentToast( { message, color } );
      await this._storage.store( 'rp_token', response.data );
      await this._storage.store( 'rp_user', response.user );
      this.router.navigate( [ '/sidemenu/Inicio' ] );
    } );
  }

  private userExist( email: string ): Promise<boolean> {
    return new Promise<boolean>( resolve => {
      this._auth.exist( email ).subscribe( exist => resolve( exist ) );
    } );
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group( {
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength( 8 ) ] ],
    } );
  }

}
