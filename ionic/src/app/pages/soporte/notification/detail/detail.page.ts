import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/interfaces/comment';
import { StorageService } from '../../../../services/storage.service';
import { USER } from '../../../../constants/global-constants';
import { User } from '../../../../interfaces/user';

@Component( {
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: [ './detail.page.scss' ],
} )
export class DetailPage implements OnInit {

  user: User = {};
  comment: Comment = {};

  constructor(
    private route: ActivatedRoute,
    private _storage: StorageService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this._storage.get( USER ).then( ( user: any ) => this.user = { ...user } );

    this.route.queryParams.subscribe( params => {
      this.comment = JSON.parse( window.atob( params.comment ) );
    } );
  }

}
