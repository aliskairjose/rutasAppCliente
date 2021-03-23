import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable( {
  providedIn: 'root'
} )

export class UserService {
  rutasData: any;
  rutasFlow = 0;
  rutasBarEdit = false;
  constructor(
    private platform: Platform,
    private _httpService: HttpService
  ) { }

  /**
   * @description Registra un nuevo usuario
   * @param usuario Datos del usuario
   * @returns usuario registrado
   */
  add( usuario: any ): Observable<any> {
    return this._httpService.post( '/users', usuario );
  }

  /**
   * @description Actualización del usuario
   * @param id Id del usuario a actualizar
   * @param client Data que se actualizará del usuario
   * @returns usuario Actualizado
   */
  update( id: number, client: any ): Observable<any> {
    return this._httpService.put( `/users/${id}`, client );
  }

  /**
   * @description Eliminación de usuario de la DB
   * @param id Id del usuario a eliminar
   * @returns Notificación
   */
  delete( id: number ): Observable<any> {
    return this._httpService.delete( `/users/${id}` );
  }

  subscribeBackHandler() {
    this.platform.backButton.subscribe();
  }

  unsubscribeBackHandler() {
    this.platform.backButton.unsubscribe();
  }
}
