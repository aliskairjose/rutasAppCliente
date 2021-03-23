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

  getClients(): Observable<any> {
    return this._httpService.get( '/clients' );
  }
}
