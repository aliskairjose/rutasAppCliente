import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component( {
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: [ './soporte.page.scss' ],
} )
export class SoportePage implements OnInit {

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
