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
  comment = '';
  isRate = false;
  otherComment = '';
  options = [
    { value: 'Excelente', text: 'Excelente' },
    { value: 'Satisfactorio', text: 'Satisfactorio' },
    { value: 'Regular', text: 'Regular' },
    { value: 'Otro', text: 'Otro' },
  ];

  @Input() route: Route = {};
  @Input() id: number;

  constructor(
    public navParams: NavParams,
    private common: CommonService,
    public rating: RatingComponent,
    public modalController: ModalController,
    private routeService: RouteService
  ) {
  }

  ngOnInit() {
  }

  // Seleccion de tipo de comentario
  onChange( value: string ): void {
    this.comment = value;
  }

  async sendRating( type?: string ) {
    const loading = await this.common.presentLoading();
    loading.present();
    const data = {
      route_boarding_id: this.id,
      comment: this.comment !== 'Otro' ? this.comment : this.otherComment,
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
  }

  // closeModal(): void {
  //   this.modalController.dismiss();
  // }

}
