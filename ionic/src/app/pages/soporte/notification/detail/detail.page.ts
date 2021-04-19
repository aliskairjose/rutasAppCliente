import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/interfaces/comment';

@Component( {
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: [ './detail.page.scss' ],
} )
export class DetailPage implements OnInit {

  comment: Comment = {};

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() {
    console.log( 'Detail oninit' );
    this.route.queryParams.subscribe( params => {
      this.comment = JSON.parse( window.atob( params.comment ) );
    } );
  }

}
