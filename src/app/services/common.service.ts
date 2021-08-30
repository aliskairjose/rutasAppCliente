import { Injectable } from '@angular/core';
import { LoadingController, ModalController, ToastController, AlertController } from '@ionic/angular';

@Injectable( {
  providedIn: 'root'
} )
export class CommonService {

  constructor(
    private loading: LoadingController,
    private toastController: ToastController,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  async presentLoading( message = 'Por favor espere...' ) {
    const loading = await this.loading.create( { message } );
    return loading;
  }

  /**
   * 
   * @param component Componente que se mostrará en el modal
   * @param cssClass Clase personalizada
   * @returns Instancia del Modal
   */
  async presentModal( { component, cssClass, componentProps }: { component: any; cssClass?: string; componentProps?: any } ) {
    const modal = await this.modalController.create( { component, cssClass, componentProps } );
    return modal;
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

  async alert(): Promise<boolean> {
    let resolveFunction: ( confirm: boolean ) => void;
    const promise = new Promise<boolean>( resolve => {
      resolveFunction = resolve;
    } );

    const alert = await this.alertController.create( {
      message: '¿Desea finalizar el viaje?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => resolveFunction( false )
        }, {
          text: 'Si',
          handler: () => resolveFunction( true )
        }

      ]
    } );

    await alert.present();
    return promise;
  }

}
