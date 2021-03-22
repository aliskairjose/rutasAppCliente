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
      let modalData: any;

      // if ( this._auth.exist( googleUser.email ) ) {
      if ( modalData ) {
        const loading = await this._common.presentLoading();
        loading.present();
        this._auth.googleLogin( googleUser ).subscribe( async ( result ) => {
          loading.dismiss();
          await this._storage.store( 'rp_token', googleUser.authentication.idToken );
          await this._storage.store( 'rp_user', googleUser );
          this.router.navigate( [ '/sidemenu/Inicio' ] );
        }, () => loading.dismiss() );

      } else { // Si el email no esta en el sistema se procede a un registro
        const modal = await this._common.presentModal( { component: ClientsModalPage } );
        modal.present();
        modalData = await modal.onDidDismiss();
        if ( modalData.role === 'submit' ) {
          // Registro con modalData.data
        }
      }
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

  private createForm(): void {
    this.loginForm = this.formBuilder.group( {
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength( 8 ) ] ],
    } );
  }

}
