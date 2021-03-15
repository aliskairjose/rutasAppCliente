import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { StorageService } from '../../services/storage.service';


@Component( {
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: [ './sidemenu.page.scss' ],
} )
export class SidemenuPage implements OnInit {

  backdropVisible = false;
  drawerVar = 'Inicio';
  activeRoute = 0;
  addressClicked = 0;
  user: User = {};

  public appPages = [
    { title: 'Inicio', url: '/sidemenu/Inicio', icon: '../../../assets/prueba 1Recurso 29.png' },
    { title: 'Rutas', url: '/sidemenu/Rutas', icon: '../../../assets/prueba 1Recurso 30.png' },
    { title: 'Experiencia', url: '/sidemenu/Experiencia', icon: '../../../assets/prueba 1Recurso 31.png' },
    { title: 'Soporte/Ayuda', url: '/sidemenu/Soporte', icon: '../../../assets/prueba 1Recurso 32.png' }
  ];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private _storage: StorageService,
    private router: Router
  ) {
    this.user = this._storage.get( '_cap_rp_user' );
  }

  ngOnInit() {
  }

  toggleBackdrop( isVisible ) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }

  logout() {
    localStorage.clear();
    this.router.navigate( [ '/signin' ] );
  }

  menuOptionClickHandle( p, i ) {
    this.activeRoute = i;
    this.drawerVar = p.title;
    this.router.navigate( [ p.url ] );
  }

}
