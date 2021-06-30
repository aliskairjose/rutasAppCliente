import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RouteService } from '../../services/route.service';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: [ './dashboard.page.scss' ],
} )
export class DashboardPage implements OnInit {

  constructor(
    private geolocation: Geolocation,
    private routeService: RouteService,
  ) { }

  async ngOnInit(
  ) {
    const pos = await this.geolocation.getCurrentPosition();

    this.routeService.closestRoute( pos.coords.latitude, pos.coords.longitude ).subscribe( console.log );
  }


}
