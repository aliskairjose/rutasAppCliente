import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class ClientsService {

  constructor(
    private _httpService: HttpService
  ) { }

  /**
   * @description Consulta la lista de clientes
   * @returns Listado de clientes
   */
  getClients(): Observable<any> {
    return this._httpService.get( '/clients' );
  }

  /**
   * @description Registra un nuevo cliente
   * @param cliente Datos del cliente
   * @returns Cliente registrado
   */
  add( cliente: any ): Observable<any> {
    return this._httpService.post( '/clients', cliente );
  }

  /**
   * @description Actualización del cliente
   * @param id Id del cliente a actualizar
   * @param client Data que se actualizará del cliente
   * @returns Cliente Actualizado
   */
  update( id: number, client: any ): Observable<any> {
    return this._httpService.put( `/clients/${id}`, client );
  }

  /**
   * @description Eliminación de cliente de la DB
   * @param id Id del cliente a eliminar
   * @returns Notificación
   */
  delet( id: number ): Observable<any> {
    return this._httpService.delete( `/clients/${id}` );
  }

}
