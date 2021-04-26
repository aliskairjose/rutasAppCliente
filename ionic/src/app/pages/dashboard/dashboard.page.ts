import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';
import { StorageService } from '../../services/storage.service';
import { CommonService } from '../../services/common.service';
import { Route } from '../../interfaces/route';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: [ './dashboard.page.scss' ],
} )
export class DashboardPage implements OnInit {

  constructor(
    private routeService: RouteService,
    private storage: StorageService,
    private common: CommonService
  ) { }

  async ngOnInit() {
    const user: any = await this.storage.getUser();
    const loading = await this.common.presentLoading();
    loading.present();
    this.routeService.list( user.client_id ).subscribe( ( routes: Route[] ) => {
      console.log( routes )
      loading.dismiss();
    }, () => loading.dismiss() );
  }


}
