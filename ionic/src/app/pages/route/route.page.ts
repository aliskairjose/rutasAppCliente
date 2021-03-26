import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { Route } from '../../interfaces/route';
import { CommonService } from '../../services/common.service';

@Component( {
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: [ './route.page.scss' ],
} )
export class RoutePage implements OnInit {

  routes: Route[] = [];

  constructor(
    private _common: CommonService,
    private _routeService: RouteService
  ) { }

  async ngOnInit() {
    const loading = await this._common.presentLoading();
    loading.present();
    this._routeService.list().subscribe( ( routes: Route[] ) => {
      this.routes = [ ...routes ];
      loading.dismiss();
    } );
  }

}
