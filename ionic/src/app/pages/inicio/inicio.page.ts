import { UserService } from 'src/app/services/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Route, RouteStop } from '../../interfaces/route';
import { STOP_MARK, END_ROUTE_MARK, USER_MARK } from '../../constants/global-constants';
declare var google: any;

@Component( {
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: [ './inicio.page.scss' ],
} )
export class InicioPage implements OnInit {
  @ViewChild( 'map' ) mapElement: ElementRef;
  map: any;
  markers: google.maps.Marker[] = [];
  userMarker: google.maps.Marker[] = [];
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

  handleItemSelect( route: Route ) {
    this.selectedItem = { ...route };

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer( { map: this.map, suppressMarkers: true } );
    // Instantiate an info window to hold step text.
    const stepDisplay = new google.maps.InfoWindow();

    this.calculateAndDisplayRoute( route.route_stops, directionsRenderer, directionsService, this.map );
  }

  async calculateAndDisplayRoute(
    locations: RouteStop[],
    directionsRenderer: google.maps.DirectionsRenderer,
    directionsService: google.maps.DirectionsService,
    map: google.maps.Map
  ) {
    let marker: any = '';
    this.markers.map( _marker => _marker.setMap( null ) ); // se pasa this.map para mantener el marcador del usuario
    this.markers = [];
    const travelMode = google.maps.TravelMode.DRIVING;
    const waypoints: google.maps.DirectionsWaypoint[] = [];

    const origin = new google.maps.LatLng(
      locations[ 0 ].lattitude,
      locations[ 0 ].longitude
    );

    const destination = new google.maps.LatLng(
      locations[ locations.length - 1 ].lattitude,
      locations[ locations.length - 1 ].longitude
    );

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

    directionsService.route( request, (
      result: google.maps.DirectionsResult | null,
      status: google.maps.DirectionsStatus
    ) => {
      if ( status === 'OK' && result ) {

        directionsRenderer.setDirections( result );
        const route = result.routes[ 0 ];

        // EL primer marcador
        marker = new google.maps.Marker( {
          position: route.legs[ 0 ].start_location,
          animation: google.maps.Animation.DROP,
          map,
          icon: STOP_MARK
        } );
        this.markers.push( marker );

        // Marcadores para las paradas
        for ( let i = 1; i < route.legs.length; i++ ) {
          marker = new google.maps.Marker( {
            position: route.legs[ i ].start_location,
            animation: google.maps.Animation.DROP,
            map,
            icon: STOP_MARK
          } );
          this.markers.push( marker );
        }

        // El ultimo marcador
        marker = new google.maps.Marker( {
          position: route.legs[ route.legs.length - 1 ].end_location,
          animation: google.maps.Animation.DROP,
          map,
          icon: END_ROUTE_MARK
        } );
        this.markers.push( marker );
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

  private updateMap( locations, extraInfo ) {

    this.markers.map( marker => marker.setMap( null ) ); // se pasa this.map para mantener el marcador del usuario
    this.markers = [];
    for ( const loc of locations ) {
      const marker = new google.maps.Marker( {
        position: loc.coord,
        animation: google.maps.Animation.DROP,
        map: this.map,
        icon: USER_MARK
      } );
      const iw = new google.maps.InfoWindow( {
        content: loc.name
      } );
      if ( extraInfo !== 'noTooltip' ) {
        iw.open( this.map, marker );
      }
      this.userMarker.push( marker );
    }
  }
}
