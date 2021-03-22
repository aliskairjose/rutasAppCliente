import { Plugins } from '@capacitor/core';
import { UserService } from 'src/app/services/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
// import { Storage } from '@ionic/storage';
// import { filter } from 'rxjs/operators';



const { Geolocation } = Plugins;

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
  currLat = 20.7766443;
  currLng = 12.3288527;
  watch = null;
  selectedItem: any;
  trackMarker = null;
  watchId = null;
  addr = '';
  // currentMapTrack = null;
  // isTracking = false;
  // trackedRoute = [];
  // previousTracks = [];
  // postionSubscription: Subscription;

  constructor(
    public userService: UserService,

    // private geolocation: Geolocation,
    // private storage: Storage
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

  loadMap() {
    navigator.geolocation.getCurrentPosition( ( position ) => {
      if ( position ) {
        this.currLat = position.coords.latitude;
        this.currLng = position.coords.longitude;
      }
      const latLng = new google.maps.LatLng( this.currLat, this.currLng );
      const mapOptions = {
        center: latLng,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map( this.mapElement.nativeElement, mapOptions );
      this.updateMap( [ latLng ], '' );
    } );
  }

  updateMap( locations, extraInfo ) {
    this.markers.map( marker => marker.setMap( null ) );
    this.markers = [];
    for ( const loc of locations ) {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode( { latLng: loc }, ( results, status ) => {
        if ( status === google.maps.GeocoderStatus.OK ) {
          console.log( 'address ==>>', results[ 0 ].address_components );
          this.addr = results[ 0 ].address_components.filter( ( e ) => {
            return e.types.includes( 'sublocality_level_1' );
          } )?.[ 0 ]?.long_name;
          const marker = new google.maps.Marker( {
            position: loc,
            animation: google.maps.Animation.DROP,
            map: this.map,
            icon: ( locations.length === 1 ) ? './../../../assets/new_marker.png' : './../../../assets/location_marker.png'
          } );
          const iw = new google.maps.InfoWindow( {
            content: this?.addr
          } );
          if ( extraInfo !== 'noTooltip' && this.addr ) {
            iw.open( this.map, marker );
          }
          this.markers.push( marker );
        } else {
          console.log( 'error for getting address', status );
        }
      } );
    }
  }

  startTracking() {
    console.log( 'start tracking ====>>' );
    this.watchId = navigator.geolocation.watchPosition( ( position ) => {
      if ( position ) {
        this.currLat = position.coords.latitude;
        this.currLng = position.coords.longitude;
      }
      const loc = new google.maps.LatLng( this.currLat, this.currLng );
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

  stopTracking() {
    navigator.geolocation.clearWatch( this.watchId );
    this.trackMarker.setMap( null );
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
    const directionsRenderer = new google.maps.DirectionsRenderer( {
      polylineOptions: {
        strokeColor: 'black'
      },
      suppressMarkers: true
    } );
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
}
