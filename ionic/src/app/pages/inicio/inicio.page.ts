import { UserService } from 'src/app/services/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
declare var google;
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
  selectedItem: any;
  watchId = null;
  trackMarker = null;

  constructor(
    public userService: UserService,
    private geolocation: Geolocation
  ) { }

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
    const coord = new google.maps.LatLng( resp.coords.latitude, resp.coords.longitude );
    const mapOptions = {
      center: coord,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.map
    };
    this.map = new google.maps.Map( this.mapElement.nativeElement, mapOptions );
    this.updateMap( [ coord, ], '' );
  }

  updateMap( locations, extraInfo ) {
    this.markers.map( marker => marker.setMap( null ) );
    this.markers = [];
    for ( const loc of locations ) {

      const marker = new google.maps.Marker( {
        position: loc,
        animation: google.maps.Animation.DROP,
        map: this.map,
        icon: './../../../assets/new_marker.png'
      } );
      const iw = new google.maps.InfoWindow( {
        content: loc.lat() + ', ' + loc.lng()
      } );
      if ( extraInfo !== 'noTooltip' ) {
        iw.open( this.map, marker );
      }
      this.markers.push( marker );
    }
  }

  bottomDrawerEvent( event: any ) {
    if ( event.type === 'item-selected' ) {
      this.handleItemSelect( event.data );
    } else if ( event.type === 'scan-success' ) {
      console.log( 'start tracking' );
      this.startTracking();
    } else if ( event.type === 'stop-track' ) {
      this.stopTracking();
    }
  }

  handleItemSelect( data ) {
    this.selectedItem = data;
    const coor1 = { lat: 10.609010, lng: -66.88834 }
    const coor2 = { lat: 10.60326, lng: -66.90159 };
    if ( coor1 && coor2 ) {
      const origin = new google.maps.LatLng( coor1.lat, coor1.lng );
      const destination = new google.maps.LatLng( coor2.lat, coor2.lng );
      this.updateMap( [ origin, destination ], 'noTooltip' );
      this.showDirections( origin, destination );
    }
  }

  showDirections( origin?: any, destination?: any ) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap( this.map );
    const request = {
      origin,
      destination,
      travelMode: 'DRIVING'
    };
    directionsService.route( request, ( res, status ) => {
      if ( status === 'OK' ) {
        directionsRenderer.setDirections( res );
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
