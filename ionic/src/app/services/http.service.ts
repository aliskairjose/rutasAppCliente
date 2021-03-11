import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class HttpService {

  constructor(
    private _http: HttpService
  ) { }

  post( serviceName: string, data: any ): Observable<any> {
    const url = environment.api + serviceName;
    return this._http.post( url, data );
  }

  get( serviceName: string ): Observable<any> {
    const url = environment.api + serviceName;
    return this._http.get( url );
  }

  put( serviceName: string, data: any ): Observable<any> {
    const url = environment.api + serviceName;
    return this._http.put( url, data );
  }

  patch( serviceName: string, data: any ): Observable<any> {
    const url = environment.api + serviceName;
    return this._http.patch( url, data )
  }
}
