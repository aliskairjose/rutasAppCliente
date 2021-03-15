import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, Subject } from 'rxjs';
import { StorageService } from './storage.service';
import { User } from '@codetrix-studio/capacitor-google-auth/dist/esm/user';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {
  $auth: Subject<any> = new Subject<any>();

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

  isLoggedIn(): boolean {
    return this._storage.get( '_cap_rp_token' ) ? true : false;
  }

  /**
   * @description Genera el stream de eventos usando next() para crear el evento
   */
  AuthSubject( user: User ): void {
    this.$auth.next( user );
    this.$auth.complete();
  }

  /**
   * @description Creación del observer mediante el método asObserver(), el cual sera consumido por el componente
   * @returns Observable
   */
  authObserver(): Observable<User> {
    return this.$auth.asObservable();
  }


}
