import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class BusService {

  constructor(
    private _http: HttpService
  ) { }

  /**
   * @description Muestra la lista de los buses
   * @returns Lista de buses
   */
  busesList(): Observable<any> {
    return this._http.get( '/buses' );
  }

  /**
   * @description Registro de nuevo bus en la DB
   * @param bus Data del bus a agregar
   * @returns Bus agregado
   */
  add( bus: any ): Observable<any> {
    return this._http.post( '/buses', bus );
  }

  /**
   * @description Eliminación de bus de la DB
   * @param id Id del bus a eliminar
   * @returns Notificación
   */
  delete( id: number ): Observable<any> {
    return this._http.delete( `/buses/${id}` );
  }

  /**
   * @description Eliminación de buses de la DB
   * @param ids Arreglo de ids de buses a eliminar {ids: []}
   * @returns Notificación
   */
  deleteList( ids: number[] ): Observable<any> {
    return this._http.delete( `/buses/massive-delete`, ids );
  }


}
