import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Route } from '../interfaces/route';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable( {
  providedIn: 'root'
} )
export class RouteService {

  constructor(
    private _http: HttpService,
    private common: CommonService
  ) { }

  /**
   * @description Lista las rutas de los buses
   * @param Id del cliente
   * @returns Arreglo de Rutas
   */
  list( id: number ): Observable<Route[]> {
    return this._http.get( `/routes?client_id=${id}&includes[]=driver&includes[]=routeType&includes[]=routeStops&includes[]=bus&occupedSeats=1` )
      .pipe( map( response => response.data ) );
  }

  /**
   * @description Agrega una nueva ruta a la db
   * @param data Ruta
   * @returns Confirmación de agregado
   */
  add( data: Route ): Observable<Route> {
    return this._http.post( '/routes', data ).pipe(
      map( response => {
        this.toastMessage( response.message );
        return response.data;
      } )
    );
  }

  // Abordaje de ruta

  /**
   * @description Verifica si el usuario tiene un abodaje
   * @returns Boolean
   */
  verifyBorading(): Observable<any> {
    return this._http.get( `/route-boarding` );
  }

  /**
   * 
   * @param clientId Id del cliente (empresa)
   * @param busId del bus
   * @param routeId Id del bus
   * @returns Null
   */
  abording( clientId: number, busId: number, routeId: number ): Observable<any> {
    return this._http.post( `/route-boarding?client_id=${clientId}&bus_id=${busId}&route_id=${routeId}` );
  }

  /**
   * @description Finaliza el abordaje
   * @returns Null
   */
  endTravel(): Observable<any> {
    return this._http.put( `/route-boarding/close` );
  }

  ratingTravel( data: any ): Observable<any> {
    return this._http.post( `/route-boarding-experiences`, data );
  }

  private toastMessage( message: string ): void {
    const color = 'primary';
    this.common.presentToast( { message, color } );
  }
}
