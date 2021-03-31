import { UserService } from 'src/app/services/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Route, RouteStop } from '../../interfaces/route';
declare var google: any;

@Component( {
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: [ './inicio.page.scss' ],
} )
export class InicioPage implements OnInit {
  @ViewChild( 'map' ) mapElement: ElementRef;
  map: any;
  markers = [];
  locations: Observable<any>;
  watch = null;
  selectedItem: Route;
  watchId = null;
  trackMarker = null;

  constructor(
    public userService: UserService,
    private geolocation: Geolocation
  ) {
    this.userService.flowhObserver().subscribe( flow => { if ( [ 0, 2, 3 ].includes( flow ) ) { this.ngOnInit(); } } );
  }

  ngOnInit() {
    this.clearMapError();
    this.loadMap();
  }

  clearMapError() {
    let dismissElement: any;
    setInterval( () => {
      dismissElement = document.getElementsByClassName( 'dismissButton' )[ 0 ];
      if ( dismissElement ) {
        dismissElement.click();
        clearInterval();
      }
    }, 100 );
  }

  async loadMap() {
    const resp = await this.geolocation.getCurrentPosition();
    const data = { coord: new google.maps.LatLng( resp.coords.latitude, resp.coords.longitude ), name: 'Aquí estoy' };
    const mapOptions = {
      center: data.coord,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.map
    };
    this.map = new google.maps.Map( this.mapElement.nativeElement, mapOptions );
    this.updateMap( [ data ], '' );
  }

  updateMap( locations, extraInfo ) {
    this.markers.map( marker => marker.setMap( this.map ) ); // se pasa this.map para mantener el marcador del usuario
    this.markers = [];
    for ( const loc of locations ) {
      const marker = new google.maps.Marker( {
        position: loc.coord,
        animation: google.maps.Animation.DROP,
        map: this.map,
        icon: './../../../assets/new_marker.png',
      } );
      const iw = new google.maps.InfoWindow( {
        content: loc.name
      } );
      // if ( extraInfo !== 'noTooltip' ) {
      //   iw.open( this.map, marker );
      // }
      this.markers.push( marker );
    }
  }

  bottomDrawerEvent( event: any ) {
    if ( event.type === 'item-selected' ) {
      this.handleItemSelect( event.data );
      return;
    }
    if ( event.type === 'scan-success' ) {
      this.startTracking();
      return;
    }
    if ( event.type === 'stop-track' ) {
      this.stopTracking();
      return;
    }
  }

  /* async handleItemSelect( route: Route ) {
    this.selectedItem = { ...route };
    await this.loadMap();
    const stopCoord = [];
    const stops = [ ...route.route_stops ];
    stops.forEach( stop => {
      console.log( stop.lattitude, stop.longitude );

      stopCoord.push( { coord: new google.maps.LatLng( stop.lattitude, stop.longitude ), name: stop.name } );
    } );
    this.updateMap( stopCoord, '' );
    this.calculateAndDisplayRoute( stopCoord );
  } */

  async handleItemSelect( route: Route ) {
    this.selectedItem = { ...route };
    await this.loadMap();
    this.calculateAndDisplayRoute( route.route_stops );
  }

  calculateAndDisplayRoute( locations: RouteStop[] ) {
    const markers = [];
    const travelMode = 'DRIVING';
    const waypoints: google.maps.DirectionsWaypoint[] = [];
    const origin = new google.maps.LatLng( locations[ 0 ].lattitude, locations[ 0 ].longitude );
    const destination = new google.maps.LatLng( locations[ locations.length - 1 ].lattitude, locations[ locations.length - 1 ].longitude );
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap( this.map );

    if ( locations.length > 2 ) {
      locations.shift();
      locations.pop();
      locations.forEach( location => {
        waypoints.push( {
          location: new google.maps.LatLng( location.lattitude, location.longitude ),
          stopover: true
        } );
      } );
    }

    const request = {
      origin,
      destination,
      waypoints,
      optimizeWaypoints: true,
      travelMode
    };

    directionsService.route( request, ( response, status ) => {
      if ( status === 'OK' ) {
        directionsRenderer.setDirections( response );
        const orders = response.routes[ 0 ].waypoint_order;
      }
    } );

  }

  startTracking() {
    this.watchId = navigator.geolocation.watchPosition( ( position ) => {

      const loc = new google.maps.LatLng( position.coords.latitude, position.coords.longitude );
      this.trackMarker?.setMap( null );
      this.trackMarker = new google.maps.Marker( {
        position: loc,
        map: this.map,
        icon: {
          scaledSize: new google.maps.Size( 25, 25 ),
          url: './../../../assets/bus.png'
        }
      } );
    } );
  }

  stopTracking() {
    navigator.geolocation.clearWatch( this.watchId );
    this.trackMarker.setMap( null );
  }
}
