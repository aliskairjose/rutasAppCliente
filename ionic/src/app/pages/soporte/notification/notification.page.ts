import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { UserService } from '../../../services/user.service';
import { CommonService } from '../../../services/common.service';
import { Comment } from 'src/app/interfaces/comment';

@Component( {
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: [ './notification.page.scss' ],
} )
export class NotificationPage implements OnInit {

  initDate = moment().format( 'L' );
  endDate = moment().format( 'L' );
  maxDate = moment().format( 'L' );
  comments: Comment[] = [];
  status = '';
  private _comments: Comment[];

  constructor(
    private router: Router,
    private common: CommonService,
    private userService: UserService
  ) {
  }

  async ngOnInit() {
    const loading = await this.common.presentLoading();
    loading.present();
    this.userService.commentList().subscribe( ( comments: Comment[] ) => {
      this.comments = [ ...comments ];
      this._comments = [ ...comments ];
      loading.dismiss();
    }, () => loading.dismiss() );
  }

  search(): void {
    console.log( 'search' );
  }

  detail(): void {
    this.router.navigate( [ 'notification/detail' ] );
  }

  // Controla el valor de cambio en el select
  onChange( value ): void {
    switch ( value ) {
      case '0':
        this.comments = this._comments.filter( comment => comment.status === 0 );
        break;
      case '1':
        this.comments = this._comments.filter( comment => comment.status === 1 );
        break;
      default:
        this.comments = this._comments;
        break;
    }
  }

}
