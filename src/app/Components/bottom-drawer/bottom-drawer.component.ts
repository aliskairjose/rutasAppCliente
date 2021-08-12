import jsQR from 'jsqr';

import {
  AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import {
  NativePageTransitions,
} from '@ionic-native/native-page-transitions/ngx';
import { GestureController, LoadingController, NavController, Platform } from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { Route } from '../../interfaces/route';
import { ModalController, PopoverController } from '@ionic/angular';
import { RatingPage } from '../../pages/rating/rating.page';
import { RouteService } from '../../services/route.service';
import { Bus } from '../../interfaces/bus';
import { StorageService } from '../../services/storage.service';
import { CommonService } from '../../services/common.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { User } from 'src/app/interfaces/user';

const { Keyboard } = Plugins;

@Component( {
  selector: 'app-bottom-drawer',
  templateUrl: './bottom-drawer.component.html',
  styleUrls: [ './bottom-drawer.component.scss' ],
} )
export class BottomDrawerComponent implements AfterViewInit, OnInit {
  @ViewChild( 'bottomDrawer', { read: ElementRef } ) bottomDrawer: ElementRef;
  @ViewChild( 'seat' ) seat: ElementRef;
  @ViewChild( 'editRutas' ) editRutas: ElementRef;
  @ViewChild( 'video', { static: false } ) video: ElementRef;
  @ViewChild( 'canvas', { static: false } ) canvas: ElementRef;
  bottomDrawerElement: any;
  seatElement: any;
  videoElement: any;
  canvasElement: any;
  canvasContext: any;
  loading: any;
  selectedRoute: Route = {};
  searchText = '';
  bus: Bus = {};
  isOpen = false;
  openHeight;
  editOpenHeight;
  backdropVisible = false;
  searchList = [];
  bottomPosition = -65;
  gesture;
  seatGesture;
  dragable = true;
  rutasFlow = 0;
  scanActive = false;
  scanResult: Bus = {};
  stream = null;
  seats = [];
  showScan = false;
  routes: Route[] = [];

  private rating = 0;
  private aboardinData: any = {};

  @Output() emitEvent: EventEmitter<any> = new EventEmitter();
  @Input() component = 'Inicio';

  constructor(
    private plt: Platform,
    private router: Router,
    public navctl: NavController,
    // private qrScanner: QRScanner,
    private common: CommonService,
    private userService: UserService,
    private routeService: RouteService,
    private loadingCtrl: LoadingController,
    private gestureCtlr: GestureController,
    private nativePageTransitions: NativePageTransitions,
    public popoverCtrl: PopoverController,
    public modalController: ModalController,
    private storage: StorageService,
    private barcodeScanner: BarcodeScanner,

  ) {
    this.userService.flowhObserver().subscribe( flow => this.userService.rutasFlow = flow );
  }

  ngOnInit() {
    window.addEventListener( 'keyboardWillShow', ( e ) => {
      this.dragable = false;
      this.gesture.enable( false );
      if ( this.isOpen ) {
        this.toggleDrawer();
      }
    } );

    Keyboard.addListener( 'keyboardDidHide', () => {
      this.dragable = true;
      this.gesture.enable( true );
    } );
  }

  readJsonData( dataurl ) {
    return new Promise( ( resolve, reject ) => {
      fetch( dataurl ).then( res => res.json() ).then( jsonData => {
        resolve( jsonData );
      } ).catch( err => {
        resolve( {} );
      } );
    } );
  }

  async ngAfterViewInit() {
    this.bottomDrawerElement = this.bottomDrawer.nativeElement;
    this.openHeight = ( this.plt.height() / 100 ) * 60;

    this.gesture = await this.gestureCtlr.create( {
      el: this.bottomDrawerElement,
      gestureName: 'swipe',
      direction: 'y',
      onMove: ev => {
        // tslint:disable-next-line:curly
        if ( ev.deltaY < -this.openHeight ) return;
        // tslint:disable-next-line:curly
        if ( -ev.deltaY < -36.4705810546875 ) return;
        // tslint:disable-next-line:curly
        if ( ev.deltaY < 0 ) return;
        // tslint:disable-next-line:curly
        if ( ev.deltaY > 0 ) return;

        this.bottomDrawerElement.style.transform = `translateY(${ev.deltaY}px)`;
      },
      onEnd: ev => {
        if ( ev.deltaY < -50 ) {
          // tslint:disable-next-line:quotemark
          this.bottomDrawerElement.style.transition = ".4s ease-out";
          this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px)`;
          this.isOpen = true;
        }
        else if ( ev.deltaY > 50 ) {
          if ( this.userService.rutasFlow === 5 ) {
            this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight / 2.56}px`;
          } else {
            this.bottomDrawerElement.style.transform = ``;
          }
          this.isOpen = false;
        }
      },
      onStart: ev => {
        console.log( 'mango', !this.isOpen );
      }
    } );
    this.gesture.enable( true );
  }

  toggleDrawer() {
    this.bottomDrawerElement = this.bottomDrawer.nativeElement;
    if ( !this.isOpen ) {
      this.bottomDrawerElement.style.transition = '.4s ease-out';
      this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px`;
      this.isOpen = true;
    }
    else {
      this.bottomDrawerElement.style.transition = '.4s ease-out';
      if ( this.userService.rutasFlow === 5 ) {
        this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight / 2.56}px`;
      } else {
        this.bottomDrawerElement.style.transform = ``;
      }

      this.isOpen = false;
    }
  }

  routeHandler( route: Route ) {
    this.isOpen = false;
    this.selectedRoute = route;
    this.rating = Math.round( this.selectedRoute.driver.rating );
    this.userService.rutasData = route;
    this.bottomDrawerElement = this.bottomDrawer.nativeElement;
    this.gesture.enable( true );
    this.bottomDrawerElement.style.transition = '.4s ease-out';
    this.bottomDrawerElement.style.transform = '';
    this.emitEvent.emit( {
      type: 'item-selected',
      data: route
    } );
    this.userService.rutasFlow = 10; // Detalle de ruta
  }

  async startScan() {
    const result: any = await this.verifyBoarding();

    if ( result.hasBoarding ) {
      this.aboardinData = result.data;
      this.isOpen = false;
      this.userService.rutasFlow = 40;
      this.bottomDrawerElement.style.transition = '.4s ease-out';
      this.bottomDrawerElement.style.transform = '';
      this.gesture.enable( true );
      this.dragable = true;

      return;
    }

    this.userService.rutasFlow = 4;
    this.showScan = false;
    this.bottomDrawerElement = this.bottomDrawer.nativeElement;
    this.bottomDrawerElement.style.transition = '.4s ease-out';
    this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px`;
  }

  async scannerOn() {

    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Coloque un código de barras dentro del área de escaneo',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan( options ).then( async ( barcodeData ) => {
      this.scanResult = JSON.parse( barcodeData.text );

      const user: User = await this.storage.getUser();
      this.aboardinData = await this.abording( user.client_id, this.scanResult.id, this.selectedRoute.id );

      this.isOpen = false;
      this.userService.rutasFlow = 40;
      this.bottomDrawerElement.style.transition = '.4s ease-out';
      this.bottomDrawerElement.style.transform = '';
      this.gesture.enable( true );
      this.dragable = true;
    } );

  }

  // Abre el modal para calificar el viaje
  async ratingModal() {
    const confirm = await this.common.alert();
    if ( confirm ) {
      await this.endTravel();
      const modal = await this.common.presentModal( {
        component: RatingPage,
        cssClass: '',
        componentProps: {
          route: this.aboardinData?.data?.route,
          id: this.aboardinData?.data.id
        }
      } );
      modal.present();
      await modal.onDidDismiss();
      this.goToHome();
    }

  }

  private endTravel(): Promise<void> {
    return new Promise<void>( async ( resolve ) => {
      const loading = await this.common.presentLoading();
      loading.present();
      this.routeService.endTravel().subscribe( () => {
        loading.dismiss();
        resolve();
      }, () => loading.dismiss() );
    } );
  }

  private abording( clientId: number, busId: number, routeId: number ): Promise<any> {
    return new Promise<any>( async ( resolve ) => {
      const loading = await this.common.presentLoading();
      loading.present();
      this.routeService.abording( clientId, busId, routeId ).subscribe( response => {
        loading.dismiss();
        resolve( response );
      }, () => loading.dismiss() );
    } );
  }

  private async verifyBoarding(): Promise<any> {
    return new Promise<any>( async ( resolve ) => {
      const loading = await this.common.presentLoading();
      loading.present();
      this.routeService.verifyBorading().subscribe( response => {
        loading.dismiss();
        resolve( response );
      }, () => loading.dismiss() );
    } );
  }


  goToHome() {
    this.openHeight = ( this.plt.height() / 100 ) * 60;
    this.userService.rutasFlow = 1;
    this.showScan = false;
    this.dragable = false;
    this.gesture.enable( true );
    this.bottomDrawerElement.style.transition = '.4s ease-out';
    this.bottomDrawerElement.style.transform = ``;
    this.emitEvent.emit( {
      type: 'loadMap'
    } );

  }

  async trackScroll( ele ) {
    this.seatElement = ele;
    this.seatGesture = await this.gestureCtlr.create( {
      el: this.seatElement,
      gestureName: 'swipe',
      direction: 'y',
      onStart: ev => {
        this.gesture.enable( true );
      },
      onEnd: ev => {
        this.gesture.enable( true );
      }
    } );
    this.seatGesture.enable( true );
  }

}
