import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { Route } from '../../interfaces/route';
import { CommonService } from '../../services/common.service';
import { StorageService } from '../../services/storage.service';
import { Observable, Subscription } from 'rxjs';

@Component( {
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: [ './route.page.scss' ],
} )
export class RoutePage implements OnInit, OnDestroy {

  routes: Route[] = [];
  searchText = '';
  subscription: Subscription;

  @Output() routeEvent: EventEmitter<Route> = new EventEmitter<Route>();

  constructor(
    private _common: CommonService,
    private _storage: StorageService,
    private _routeService: RouteService
  ) { }

  async ngOnInit() {
    const user: any = await this._storage.getUser();
    const loading = await this._common.presentLoading();
    loading.present();
    this.subscription = this._routeService.list( user.client_id ).subscribe( ( routes: Route[] ) => {
      this.routes = [ ...routes ];
      loading.dismiss();
    }, () => loading.dismiss() );
  }

  selectRoute( route: Route ): void {
    this.routeEvent.emit( route );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
