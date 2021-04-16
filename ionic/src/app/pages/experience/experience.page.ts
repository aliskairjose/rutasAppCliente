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

    const val = 1.8;

    if ( val > 1 && val < 2 ) {
      console.log( 'El valor medio es ', val )
    }


    const loading = await this.common.presentLoading();
    loading.present();
    this.userService.travelList().subscribe( list => {
      this.list = [ ...list ];
      const val = [];
      this.list.forEach( l => val.push( l.calification_route ) );
      this.rating = val.reduce( ( a, b ) => a + b, 0 ) / this.list.length;
      loading.dismiss();
    } );
  }

}
