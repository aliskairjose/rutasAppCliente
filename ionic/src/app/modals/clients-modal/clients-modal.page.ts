import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../interfaces/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LOGO } from '../../constants/global-constants';
import { ModalController } from '@ionic/angular';

@Component( {
  selector: 'app-clients-modal',
  templateUrl: './clients-modal.page.html',
  styleUrls: [ './clients-modal.page.scss' ],
} )
export class ClientsModalPage implements OnInit {

  registerForm: FormGroup;
  logo = LOGO;
  submitted: boolean;

  @Input() clients: Client[];

  constructor(
    private _fb: FormBuilder,
    private modalController: ModalController,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  async onSubmit() {
    this.submitted = true;

    /* if ( this.registerForm.valid ) {
      
    } */
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  private createForm(): void {
    this.registerForm = this._fb.group( {
      department: [ '', [ Validators.required ] ],
      charge: [ '', [ Validators.required ] ],
      client_id: [ '', [ Validators.required ] ],
    } );
  }

}
