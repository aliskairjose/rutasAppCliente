import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable( {
  providedIn: 'root'
} )
export class CommonService {

  constructor(
    private loading: LoadingController,
    private toastController: ToastController,
  ) { }

  async presentLoading() {
    const loading = await this.loading.create( {
      message: 'Por favor espere...',
      duration: 2000
    } );
    return loading;
    // await loading.present();

    // await loading.onDidDismiss();
  }

  /**
   *
   * @param message Mensaje a mostrar
   * @param color primary | secondary | tertiary | success | warning | danger | light | medium | dark Por defecto success
   * @param duration Tiempo en milisegundos, por defecto 2000
   */
  // tslint:disable-next-line: max-line-length
  async presentToast( { message, color = 'success', duration = 2000 }: { message: string; color?: string; duration?: number; } ) {

    const toast = await this.toastController.create( {
      message,
      duration,
      position: 'bottom',
      color
    } );
    toast.present();
  }

}
