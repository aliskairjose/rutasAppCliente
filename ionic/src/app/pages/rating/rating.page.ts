import { Component, Input, OnInit } from '@angular/core';
import { RatingComponent } from '../../Components/rating/rating.component';
import { ModalController, NavParams } from '@ionic/angular';
import { RouteService } from '../../services/route.service';
import { Route } from '../../interfaces/route';
import { CommonService } from '../../services/common.service';
import { Subscription } from 'rxjs';

@Component( {
  selector: 'app-page-rating',
  templateUrl: './rating.page.html',
  styleUrls: [ './rating.page.scss' ],
} )
export class RatingPage implements OnInit {

  driverRate = 1;
  busRate = 1;
  comment: '';
  isRate = false;
  subscription: Subscription;

  @Input() route: Route;
  @Input() id: number;

  constructor(
    private _common: CommonService,
    public rating: RatingComponent,
    public navParams: NavParams,
    public modalController: ModalController,
    private routeService: RouteService
  ) {
  }

  ngOnInit() {
  }

  async sendRating() {
    const loading = await this._common.presentLoading();
    const data = {
      route_boarding_id: this.id,
      comment: this.comment,
      bus_rate: this.busRate,
      driver_rate: this.driverRate
    };

    this.subscription = this.routeService.ratingTravel( data ).subscribe( () => {
      loading.dismiss();
      this.isRate = true;
    } );
  }

  ratingChange( rate: number, type: string ) {
    ( type === 'driver' ) ? this.driverRate = rate : this.busRate = rate;
  }

  closeModal(): void {
    this.subscription.unsubscribe();
    this.modalController.dismiss();
  }

}
