import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor(
    private _storage: StorageService,
    private _httpService: HttpService,
  ) { }

  /**
   * @description Inicio de sesión a la app
   * @param data Objeto { email, password }
   * @returns 
   */
  login( data: any ): Observable<any> {
    return this._httpService.post( '/login/user', data )
  }

  register( data: any ): Observable<any> {
    return this._httpService.post( '/users', data );
  }

}
