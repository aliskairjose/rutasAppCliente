import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RouteService } from '../../services/route.service';
import { Route } from '../../interfaces/route';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: [ './dashboard.page.scss' ],
} )
export class DashboardPage implements OnInit {

  route: Route = {};
  message: 'No se ha encontrado ninguna ruta cercana a tu ubicación';
  hasRoute = false;

  @Output() routeEvent: EventEmitter<Route> = new EventEmitter<Route>();

  constructor(
    private geolocation: Geolocation,
    private routeService: RouteService,
  ) { }

  async ngOnInit(
  ) {
    const pos = await this.geolocation.getCurrentPosition();
    this.routeService.closestRoute( pos.coords.latitude, pos.coords.longitude ).subscribe( response => {
      this.message = response.message;
      if ( response.data ) {
        this.hasRoute = true;
        this.route = response.data;
      }
    } );
  }

  selectRoute( route: Route ): void {
    this.routeEvent.emit( route );
  }


}
