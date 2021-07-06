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
  message: string;
  hasRoute = true;

  @Output() routeEvent: EventEmitter<Route> = new EventEmitter<Route>();

  constructor(
    private geolocation: Geolocation,
    private routeService: RouteService,
  ) { }

  async ngOnInit(
  ) {
    const pos = await this.geolocation.getCurrentPosition();

    this.routeService.closestRoute( 36.124918, -115.291053 ).subscribe( response => {
      if ( response.message ) { this.message = response.message; }
      if ( response.errors ) { this.hasRoute = false; }
      this.route = response.data;
    } );
  }

  selectRoute( route: Route ): void {
    this.routeEvent.emit( route );
  }


}
