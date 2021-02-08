import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  model: { email: string, password: string} = {email: '', password: ''};
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(
      public formBuilder: FormBuilder,
      private router: Router,
      public alertController: AlertController,
      public loadingController: LoadingController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required]
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
  login() {
    if ( this.model.email === 'test@cronapis.com' && this.model.password === '123123') {
   //   this.router.navigate(['HomePage']);
      this.router.navigate(['/home']);
      this.presentLoading();
    } else {
      this.presentAlertError();
    }
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ups',
      subHeader: 'Datos de acceso incorrectos',
      message: 'Por favor verifique los datos de acceso.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  register() {
    this.router.navigate(['/register-user']);
  }
}
