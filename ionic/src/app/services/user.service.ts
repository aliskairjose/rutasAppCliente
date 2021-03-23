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
   * @description Registra un nuevo cliente
   * @param cliente Datos del cliente
   * @returns Cliente registrado
   */
  add( cliente: any ): Observable<any> {
    return this._httpService.post( '/users', cliente );
  }

  /**
   * @description Actualización del cliente
   * @param id Id del cliente a actualizar
   * @param client Data que se actualizará del cliente
   * @returns Cliente Actualizado
   */
  update( id: number, client: any ): Observable<any> {
    return this._httpService.put( `/users/${id}`, client );
  }

  /**
   * @description Eliminación de cliente de la DB
   * @param id Id del cliente a eliminar
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
