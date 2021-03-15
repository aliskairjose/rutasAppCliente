import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable( {
  providedIn: 'root'
} )

export class StorageService {
  constructor() { }

  /**
    * @description Almacena la data en el localStorage
    * @param key Identificador del valor a almacenar
    * @param value Valor a almacenar
    */
  set( key: string, value: any ): void {
    localStorage.setItem( key, JSON.stringify( value ) );
  }

  /**
   * @description Recuerpa la data almacenada en el localStorage
   * @param key Identificador del dato que se desea recuperar
   * @returns value { any }
   */
  get( key: string ): any {
    const value = localStorage.getItem( key );
    return JSON.parse( value );
  }

  /**
   * @description Elimina la data almacenada según el identificador
   * @param key Identificador de la data que se desea eliminar
   */
  remove( key: string ): void {
    localStorage.removeItem( key );
  }

  /**
   * @description Elimina toda la data almacenada en el localStorage
   */
  clear(): void {
    localStorage.clear();
  }
}