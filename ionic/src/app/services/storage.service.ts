import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
// import { Storage } from '@ionic/storage';


@Injectable( {
  providedIn: 'root'
} )

export class StorageService {
  constructor() { }

  // Store the value
  async store( key: string, value: any ) {
    await Storage.set( {
      key, value: JSON.stringify( value )
    } );
  }

  // Get the value
  async get( key: string ): Promise<{ value: any }> {
    const item = await Storage.get( { key } );
    return JSON.parse( item.value );
  }

  async removeStorageItem( key: string ) {
    await Storage.remove( { key } );
  }

  // Clear storage
  async clear() {
    await Storage.clear();
  }
}