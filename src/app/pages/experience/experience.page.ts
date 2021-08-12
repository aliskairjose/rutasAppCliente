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
  face = '/assets/svg/faces/2.svg';
  rating = 1;
  serviceMesg = [
    'Mal Servicio',
    'Servicio Regular',
    'Buen Servicio',
    'Servicio satisfactorio',
    'Excelente Servicio',
  ];

  msg = '';

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
      const rat = Math.round( this.rating );
      ( rat === 0 ) ? this.rating = 1 : this.rating = rat;
      this.face = `/assets/svg/faces/${this.rating}.svg`;
      this.msg = this.serviceMesg.find( ( item, index ) => index === this.rating - 1 );
      loading.dismiss();
    }, () => loading.dismiss() );
  }

}
