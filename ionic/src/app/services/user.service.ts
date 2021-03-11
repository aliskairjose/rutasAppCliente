import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  rutasData: any;
  rutasFlow = 0;
  rutasBarEdit = false;
 constructor(private platform: Platform) {

 }

  subscribeBackHandler(){
    this.platform.backButton.subscribe();
  }

  unsubscribeBackHandler(){
    this.platform.backButton.unsubscribe();
  }
}
