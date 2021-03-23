import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Route } from '../interfaces/route';
import { map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class RouteService {

  constructor(
    private _http: HttpService
  ) { }

  /**
   * @description Lista las rutas de los buses
   * @returns Arreglo de Rutas
   */
  list(): Observable<Route[]> {
    return this._http.get( '/routes' ).pipe( map( response => response.data ) );
  }

  /**
   * @description Agrega una nueva ruta a la db
   * @param data Ruta
   * @returns Confirmación de agregado
   */
  add( data: any ): Observable<any> {
    return this._http.post( '/routes', data );
  }
}
