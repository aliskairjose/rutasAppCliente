import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';
import { LoadingController } from '@ionic/angular';
import { ERROR_FORM, LOGO } from '../../constants/global-constants';
import { MustMatch } from '../../helpers/must-match.validator';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: [ './register.page.scss' ],
} )
export class RegisterPage implements OnInit {

  registerForm: FormGroup
  submitted: boolean;
  formError = ERROR_FORM;
  clients = [];
  logo = LOGO;
  private _loading: any;

  constructor(
    private _router: Router,
    private _auth: AuthService,
    private _formBuilder: FormBuilder,
    private _commonService: CommonService,
    private _clientService: ClientsService,
    private _loadingController: LoadingController,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.loadClients();
  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if ( this.registerForm.valid ) {
      this.presentLoading().then( () => {
        this._auth.register( this.registerForm.value ).subscribe( response => {
          this._loading.dismiss();
          const message = response.message;
          const color = 'primary';
          this._commonService.presentToast( { message, color } );
          setTimeout( () => {
            this._router.navigate( [ '/signin' ] );
          }, 2000 );
        }, () => this._loading.dismiss() );
      } );
    }
  }

  loadClients(): void {
    this.presentLoading().then( () => {
      this._clientService.getClients().subscribe( result => {
        this._loading.dismiss();
        this.clients = [ ...result.data ];
      }, () => this._loading.dismiss() );
    } );
  }

  private createForm(): void {
    this.registerForm = this._formBuilder.group( {
      name: [ '', [ Validators.required ] ],
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength( 8 ) ] ],
      passwordConfirmation: [ '', [ Validators.required, Validators.minLength( 8 ) ] ],
      department: [ '', [ Validators.required ] ],
      charge: [ '', [ Validators.required ] ],
      client_id: [ '', [ Validators.required ] ],
    }, {
      validator: MustMatch( 'password', 'passwordConfirmation' ),
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