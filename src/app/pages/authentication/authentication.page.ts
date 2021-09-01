import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { ERROR_FORM, LOGO, TOKEN, USER } from '../../constants/global-constants';
import { CommonService } from '../../services/common.service';
import { ClientsModalPage } from '../../modals/clients-modal/clients-modal.page';
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { environment } from '../../../environments/environment';
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
  response: any;
  error: any;

  constructor(
    private router: Router,
    private _auth: AuthService,
    private platform: Platform,
    private common: CommonService,
    private googlePlus: GooglePlus,
    private formBuilder: FormBuilder,
    private storage: StorageService,
  ) {
    this.createForm();

  }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  googleLogin() {
    this.googlePlus.login( environment.googleConfig ).then( async ( gplusUser ) => {
      if ( gplusUser.idToken ) {
        const loading = await this.common.presentLoading();
        loading.present();
        const exist = await this._auth.exist( gplusUser.email );
        loading.dismiss();
        ( exist ) ?
          this.googleAccess( { email: gplusUser.email, google_id: gplusUser.userId } ) :
          this.registerGoogleUSer( gplusUser );
      }
    }, ( err ) => this.common.presentToast( { message: err } ) );

  }
  async onSubmit() {
    this.submitted = true;
    if ( this.loginForm.valid ) {
      const loading = await this.common.presentLoading();
      loading.present();
      this._auth.login( this.loginForm.value ).subscribe( async ( response ) => {
        this._auth.AuthSubject( response.user );
        await this.storage.store( TOKEN, response.data );
        await this.storage.store( USER, response.user );
        this.submitted = false;
        this.loginForm.reset();
        loading.dismiss();
        this.router.navigate( [ '/sidemenu/Inicio' ] );
      }, () => loading.dismiss() );
    }
  }

  /**
   * @description Registro del usuario google
   */
  private async registerGoogleUSer( googleUser ): Promise<void> {
    const modal = await this.common.presentModal(
      {
        component: ClientsModalPage,
        cssClass: '',
        componentProps: { user: googleUser }
      } );
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
    const loading = await this.common.presentLoading();
    loading.present();
    this._auth.login( accessData ).subscribe( async ( response ) => {
      loading.dismiss();
      this._auth.AuthSubject( response.user );
      const message = response.message;
      const color = 'primary';
      this.common.presentToast( { message, color } );
      await this.storage.store( TOKEN, response.data );
      await this.storage.store( USER, response.user );
      this.router.navigate( [ '/sidemenu/Inicio' ] );
    }, () => loading.dismiss() );
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group( {
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength( 8 ) ] ],
    } );
  }

}
