import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare const Pusher: any;

@Injectable( {
  providedIn: 'root'
} )
export class PusherService {

  pusher;

  constructor() {

  }

  init( id: number ) {
    this.pusher = new Pusher( environment.PUSHER_APP_KEY, {
      cluster: environment.PUSHER_APP_CLUSTER,
      encrypted: true,
    } );
    Pusher.logToConsole = true;

    const channel = this.pusher.subscribe( `route-${id}` );
    return channel;
  }

  finish( id: number ) {
    this.pusher.unsubscribe( `route-${id}` );
  }


}
