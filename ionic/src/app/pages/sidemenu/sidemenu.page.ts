import { Router, NavigationEnd } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit, } from '@angular/core';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

  backdropVisible = false;
  drawerVar = 'Inicio';
  activeRoute = '/sidemenu/Inicio';
  addressClicked = 0;

  public appPages = [
    { title: 'Inicio', url: '/sidemenu/Inicio', icon: '../../../assets/prueba 1Recurso 29.png' },
    { title: 'Rutas', url: '/sidemenu/Rutas', icon: '../../../assets/prueba 1Recurso 30.png' },
    { title: 'Experiencia', url: '/sidemenu/Experiencia', icon: '../../../assets/prueba 1Recurso 31.png' },
    { title: 'Soporte/Ayuda', url: '/sidemenu/Soporte', icon: '../../../assets/prueba 1Recurso 32.png' }
  ];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private nativePageTransitions: NativePageTransitions,
    public navctl: NavController
  ) { }

  ngOnInit() {
    console.log('hey I am in sidemenu');
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        console.log("router event", event['url']);
        if (event['url'] === '/sidemenu/Feedback') {
          this.activeRoute = '/sidemenu/Inicio'
        }
        else {
          this.activeRoute = event['url']
        }
        
      });
  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

  // ionViewWillLeave() {

  //   let options: NativeTransitionOptions = {
  //      direction: 'left',
  //      duration: 500,
  //      slowdownfactor: 3,
  //      slidePixels: 20,
  //      iosdelay: 100,
  //      androiddelay: 150,
  //      fixedPixelsTop: 0,
  //      fixedPixelsBottom: 60
  //     }

  //   this.nativePageTransitions.slide(options)
  //     .then((onSuccess) => {

  //     })
  //     .catch((onError) => console.log("onError", onError)
  //     );

  //  }


  menuOptionClickHandle(p, i) {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: 50,
      //slidePixels: 20,
      iosdelay: 100,
      androiddelay: 550,
      // fixedPixelsTop: 0,
      // fixedPixelsBottom: 60
    }
    //this.activeRoute = i;
    this.drawerVar = p.title;
    // this.nativePageTransitions.slide(options)
    this.router.navigate([p.url]);
    // this.navctl.navigateRoot([p.url])
  }

}
