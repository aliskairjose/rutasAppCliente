import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonService } from '../../services/common.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component( {
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: [ './experience.page.scss' ],
} )
export class ExperiencePage implements OnInit {

  list = [];
  rating = 0;

  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  constructor(
    private common: CommonService,
    private userService: UserService
  ) { }

  async ngOnInit() {

    const loading = await this.common.presentLoading();
    loading.present();
    this.userService.travelList().subscribe( list => {
      this.list = [ ...list ];
      const rateSum = [];
      this.list.forEach( l => rateSum.push( l.calification_route ) );
      this.rating = rateSum.reduce( ( a, b ) => a + b, 0 ) / this.list.length;
      this.rating = Math.round( this.rating );
      loading.dismiss();
    }, () => loading.dismiss() );
  }

}
