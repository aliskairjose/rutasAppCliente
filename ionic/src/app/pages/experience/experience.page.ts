import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonService } from '../../services/common.service';

@Component( {
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: [ './experience.page.scss' ],
} )
export class ExperiencePage implements OnInit {

  list = [];
  rating = 0;

  constructor(
    private common: CommonService,
    private userService: UserService
  ) { }

  async ngOnInit() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.userService.travelList().subscribe( list => {
      console.log( list );
      this.list = [ ...list ];
      const val = [];
      this.list.forEach( l => {
        val.push( l.calification_route );
      } );
      this.rating = val.reduce( ( a, b ) => a + b, 0 ) / this.list.length;
      console.log( this.rating );
      loading.dismiss();
    } );
  }

  ratingChange( rate ) {
    console.log( rate );
  }

}
