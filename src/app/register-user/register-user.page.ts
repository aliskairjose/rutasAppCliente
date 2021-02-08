import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
  model: {
    nombre: string,
    empresa: string,
    departamento: string,
    cargo: string,
    email: string,
    password: string,
    recpass: string
  } = {
    nombre: '',
    empresa: '',
    departamento: '',
    cargo: '',
    email: '',
    password: '',
    recpass: ''
  };
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(
      public formBuilder: FormBuilder,
      private router: Router,
      public alertController: AlertController,
      public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      empresa: ['', Validators.required],
      departamento: ['', Validators.required],
      cargo: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required],
      recpass: ['', Validators.required]
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      return false;
    } else {
      //  console.log(this.ionicForm.value);
    }
  }

  register() {
    this.presentLoading();
    this.router.navigate(['/home']);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
