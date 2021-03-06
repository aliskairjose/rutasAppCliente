import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { LOGO, USER } from '../../constants/global-constants';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';
import { Plugins, CameraResultType, CameraDirection } from '@capacitor/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

const { Camera } = Plugins;

@Component( {
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: [ './sidemenu.page.scss' ],
} )
export class SidemenuPage implements OnInit {

  backdropVisible = false;
  drawerVar = 'Inicio';
  addressClicked = 0;
  user: User = { };
  abrv = '';
  logo = LOGO;
  private _activeRoute = 0;

  appPages = [
    { title: 'Inicio', url: '/sidemenu/Inicio', icon: '../../../assets/menu/home.png', route: 0 },
    { title: 'Rutas', url: '/sidemenu/Inicio', icon: '../../../assets/menu/routes.png', route: 1 },
    { title: 'Experiencia', url: '/sidemenu/Experiencia', icon: '../../../assets/menu/experience.png', route: 2 },
    { title: 'Soporte/Ayuda', url: '/sidemenu/Soporte', icon: '../../../assets/menu/support.png', route: 3 }
  ];


  constructor(
    private router: Router,
    private _auth: AuthService,
    private common: CommonService,
    private userService: UserService,
    private storage: StorageService,
    private googlePlus: GooglePlus,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.user = { };
    this._auth.authObserver().subscribe( ( user: User ) => {
      this.user = { ...user };
      const value = this.user.name.split( ' ' );
      this.abrv = `${value[ 0 ].charAt( 0 )}${value[ 1 ].charAt( 0 )}`;
    } );

  }

  ngOnInit() {
    this.storage.get( USER ).then( ( user: any ) => {
      this.user = { ...user };
      const value = this.user.name.split( ' ' );
      this.abrv = `${value[ 0 ].charAt( 0 )}${value[ 1 ].charAt( 0 )}`;
    } );
  }

  toggleBackdrop( isVisible ) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }

  async logout() {
    const googleLogin = await this.storage.get( 'googleLogin' );
    if ( googleLogin ) {
      this.googlePlus.disconnect().then( async () => {
        await this.storage.clear();
        this.router.navigate( [ '/signin' ] );
      } );
      return;
    }
    await this.storage.clear();
    this.router.navigate( [ '/signin' ] );
  }

  menuOptionClickHandle( p, i ) {
    this.userService.flowSubject( p.route );
    this.activeRoute = i;
    this.drawerVar = p.title;
    this.router.navigate( [ p.url ] );
  }

  async takePicture() {
    const image = await Camera.getPhoto( {
      quality: 30,
      height: 120,
      width: 120,
      preserveAspectRatio: true,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      direction: CameraDirection.Front // iOS and Web only
    } );


    const imageUrl = `data:image/png;base64,${image.base64String}`;
    const loading = await this.common.presentLoading();
    loading.present();
    this.userService.updateAvatar( { avatar: imageUrl } ).subscribe( async ( result ) => {
      loading.dismiss();
      await this.storage.store( USER, result.data );
      this._auth.AuthSubject( result.data );
      await this.storage.store( USER, result.data );
      loading.dismiss();
      const message = result.message;
      const color = 'primary';
      this.common.presentToast( { message, color } );
      // this.ngOnChanges();
    }, () => loading.dismiss() );
  }

  set activeRoute( i: number ) {
    this._activeRoute = i;
  }

  get activeRoute(): number {
    return this._activeRoute;
  }

}
