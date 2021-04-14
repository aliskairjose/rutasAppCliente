import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingComponent } from '../../Components/rating/rating.component';
import { ModalController, NavParams } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { RouteService } from '../../services/route.service';
import { Route } from '../../interfaces/route';

@Component( {
  selector: 'app-page-rating',
  templateUrl: './rating.page.html',
  styleUrls: [ './rating.page.scss' ],
} )
export class RatingPage implements OnInit {

  experience: '';
  @Input() data: Route;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public rating: RatingComponent,
    public navParams: NavParams,
    public modalController: ModalController,
    private _storage: StorageService,
    private routeService: RouteService
  ) {
  }

  ngOnInit() {
  }


  sendRating() {
    this.endTravel();
  }


  endTravel(): void {
    this.routeService.endTravel().subscribe( async () => {
      await this.modalController.dismiss( this.experience, 'close' );
    } );
  }
}
