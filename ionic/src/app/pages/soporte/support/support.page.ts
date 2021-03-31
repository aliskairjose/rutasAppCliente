import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component( {
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: [ './support.page.scss' ],
} )
export class SupportPage implements OnInit {

  question = '';

  constructor(
    private _common: CommonService
  ) { }

  ngOnInit() {
  }

  async sendRequest() {
    // Send to api
    const loading = await this._common.presentLoading();
    loading.present();
  }


}
