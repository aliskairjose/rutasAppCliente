import { UserService } from 'src/app/services/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Route, RouteStop } from '../../interfaces/route';
import { MAP } from '../../constants/global-constants';
import { CommonService } from '../../services/common.service';
import { SidemenuPage } from '../sidemenu/sidemenu.page';
import { PusherService } from '../../services/pusher.service';
declare var google: any;

@Component( {
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: [ './inicio.page.scss' ],
} )
export class InicioPage implements OnInit {

  map: google.maps.Map;
  markers: google.maps.Marker[] = [];
  // userMarker: google.maps.Marker[] = [];
  watch = null;
  selectedItem: Route;
  watchId = null;
  trackMarker = null;
  coords: any;
  zoom = 18;
  directions: any = {};
  waypoints: any[] = [];
  userMarker = MAP.USER_MARK;
  busLat = 51.678418;
  busLng = 7.809007;
  busIcon = MAP.BUS;
  renderOptions = {
    suppressMarkers: true,
  };

  markerOptions = {
    origin: {
      icon: MAP.STOP_MARK,
      draggable: false,
    },
    destination: {
      icon: MAP.END_ROUTE_MARK,
      draggable: false,
    },
    waypoints: [
      {
        icon: MAP.STOP_MARK
      },
    ],
  };

  @ViewChild( 'map' ) mapElement: ElementRef;

  constructor(
    private common: CommonService,
    public userService: UserService,
    private geolocation: Geolocation,
    private sidMenu: SidemenuPage,
    private pusher: PusherService
  ) {
    this.userService
      .flowhObserver()
      .subscribe( flow => { if ( [ 0, 2, 3 ].includes( flow ) ) { this.ngOnInit(); } } );
  }

  async ngOnInit() {
    const message = 'Obteniendo ubicación';
    const loading = await this.common.presentLoading( message );
    loading.present();
    const resp = await this.geolocation.getCurrentPosition();
    this.coords = resp.coords;
    loading.dismiss();
  }

  // Cuando el mapa esta completamente cargado, obtenemos la ubicacion
  async mapReady() {
    // const message = 'Obteniendo ubicación';
    // const loading = await this.common.presentLoading( message );
    // loading.present();
    // const resp = await this.geolocation.getCurrentPosition();
    // this.coords = resp.coords;
    // loading.dismiss();
  }

  bottomDrawerEvent( event: any ) {
    switch ( event.type ) {
      case 'item-selected':
        this.handleItemSelect( event.data );
        break;
      default:
        this.sidMenu.activeRoute = 0;
        break;
    }
  }

  async handleItemSelect( route: Route ) {
    this.selectedItem = { ...route };
    const stops: RouteStop[] = [ ...this.selectedItem.route_stops ];
    const loading = await this.common.presentLoading();
    loading.present();
    await this.calculateAndDisplayRoute( stops );
    loading.dismiss();
  }

  bindChannel( route: Route ): void {
    const channel = this.pusher.init( route.id );

    channel.bind( 'pusher:subscription_succeeded', () => {
      this.updateBusPosition( { route_id: route.id, lattitude: route.latitude, longitude: route.longitude } );
    } );

    channel.bind( 'App\\Events\\RoutePositionEvent', ( { route_id, lattitude, longitude } ) => {
      this.updateBusPosition( { route_id, lattitude, longitude } );
    } );

  }

  private calculateAndDisplayRoute( locations: RouteStop[] ) {
    return new Promise( resolve => {
      this.directions.origin = {
        lat: +locations[ 0 ].lattitude,
        lng: +locations[ 0 ].longitude
      };
      if ( locations.length > 1 ) {
        this.directions.destination = {
          lat: +locations[ locations.length - 1 ].lattitude,
          lng: +locations[ locations.length - 1 ].longitude
        };
      }

      if ( locations.length > 2 ) {
        locations.forEach( ( location, index ) => {
          if ( index > 0 && index < locations.length - 1 ) {
            this.waypoints.push(
              {
                location: { lat: +location.lattitude, lng: +location.longitude },
                stopover: false,
              },
            );
          }
        } );
      }
      resolve( true );
    } );
  }

  private updateBusPosition( { ...params } ) {
    this.busLat = params.latitude;
    this.busLng = params.longitude;
    // const position = { lat: parseFloat( params.lattitude ), lng: parseFloat( params.longitude ) };
    // this.trackMarker?.setMap( null );
    // this.trackMarker = new google.maps.Marker( {
    //   position,
    //   map: this.map,
    //   icon: MAP.BUS
    // } );
  }


}
