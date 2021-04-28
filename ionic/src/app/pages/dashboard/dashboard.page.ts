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

  }


}
