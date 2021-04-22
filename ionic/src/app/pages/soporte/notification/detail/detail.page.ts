import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/interfaces/comment';
import { StorageService } from '../../../../services/storage.service';
import { USER } from '../../../../constants/global-constants';
import { User } from '../../../../interfaces/user';
import { CommonService } from '../../../../services/common.service';

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
    private common: CommonService,
    private _storage: StorageService,
    private userService: UserService,
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get( 'id' );
    this._storage.get( USER ).then( ( user: any ) => this.user = { ...user } );
    const loading = await this.common.presentLoading();
    loading.present();
    this.userService.commentById( +id ).subscribe( ( comment: Comment ) => {
      console.log( comment )
      loading.dismiss();
      this.comment = { ...comment };
    } );
  }

}
