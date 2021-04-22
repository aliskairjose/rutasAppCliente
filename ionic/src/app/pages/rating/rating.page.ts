import { Component, Input, OnInit } from '@angular/core';
import { RatingComponent } from '../../Components/rating/rating.component';
import { ModalController, NavParams } from '@ionic/angular';
import { RouteService } from '../../services/route.service';
import { Route } from '../../interfaces/route';
import { CommonService } from '../../services/common.service';

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

  @Input() route: Route;
  @Input() id: number;

  constructor(
    public navParams: NavParams,
    private _common: CommonService,
    public rating: RatingComponent,
    public modalController: ModalController,
    private routeService: RouteService
  ) {
  }

  ngOnInit() {
  }

  async sendRating( type?: string ) {
    const loading = await this._common.presentLoading();
    loading.present();
    const data = {
      route_boarding_id: this.id,
      comment: this.comment,
      bus_rate: this.busRate,
      driver_rate: this.driverRate
    };

    this.routeService.ratingTravel( data ).subscribe( () => {
      loading.dismiss();
      this.isRate = true;
    } );
  }

  ratingChange( rate: number, type: string ) {
    ( type === 'driver' ) ? this.driverRate = rate : this.busRate = rate;
  }

  noRate(): void {
    this.isRate = true;
    this.closeModal();
  }

  closeModal(): void {
    this.modalController.dismiss();
  }

}
