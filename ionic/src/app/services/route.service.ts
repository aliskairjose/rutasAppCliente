import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class RouteService {

  constructor(
    private _http: HttpService
  ) { }

  add( data: any ): Observable<any> {
    return this._http.post( '/routes', data );
  }
}
