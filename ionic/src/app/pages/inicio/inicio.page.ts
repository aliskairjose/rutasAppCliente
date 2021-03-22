import { UserService } from 'src/app/services/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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
    const latLng = new google.maps.LatLng( resp.coords.latitude, resp.coords.longitude );
    const mapOptions = {
      center: latLng,
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map( this.mapElement.nativeElement, mapOptions );
    this.updateMap( [ latLng ], '' );
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
    const coor1 = this.selectedItem?.from;
    const coor2 = this.selectedItem?.to;
    if ( coor1 && coor2 ) {
      const origin = new google.maps.LatLng( coor1.lat, coor1.lng );
      const destination = new google.maps.LatLng( coor2.lat, coor2.lng );
      this.updateMap( [ origin, destination ], 'noTooltip' );
      this.showDirections( origin, destination );
    }
  }

  showDirections( origin, destination, mode = 'DRIVING' ) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap( this.map );
    const request = {
      origin,
      destination,
      travelMode: google.maps.TravelMode[ mode ]
    };
    directionsService.route( request, ( res, status ) => {
      console.log( res, status );
      if ( status === 'OK' ) {
        console.log( 'setting path' );
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
