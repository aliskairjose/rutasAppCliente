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
  loading: HTMLIonLoadingElement;
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

  private _aboardinData: any = {};

  @Output() emitEvent: EventEmitter<any> = new EventEmitter();
  @Input() component = 'Inicio';

  constructor(
    private plt: Platform,
    private router: Router,
    public navctl: NavController,
    // private qrScanner: QRScanner,
    private _common: CommonService,
    private userService: UserService,
    private routeService: RouteService,
    private loadingCtrl: LoadingController,
    private gestureCtlr: GestureController,
    private nativePageTransitions: NativePageTransitions,
    public popoverCtrl: PopoverController,
    public modalController: ModalController,
    private _storage: StorageService,
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
    this.userService.rutasFlow = 4;
    this.showScan = false;
    this.bottomDrawerElement = this.bottomDrawer.nativeElement;
    this.bottomDrawerElement.style.transition = '.4s ease-out';
    this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px`;
  }

  async scannerOn() {
    this.showScan = true;
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan( options ).then( async ( barcodeData ) => {
      this.scanResult = JSON.parse( barcodeData.text );
      const result: any = await this.verifyBoarding();

      if ( result.hasBoarding ) { this._aboardinData = result.data; }
      if ( !result.hasBoarding ) {
        const user: User = await this._storage.getUser();
        this._aboardinData = await this.abording( user.client_id, this.scanResult.id, this.selectedRoute.id );
      }
      this.showScan = true;
      this.isOpen = false;
      this.userService.rutasFlow = 40;
      this.scanActive = true;
      this.bottomDrawerElement.style.transition = '.4s ease-out';
      this.bottomDrawerElement.style.transform = '';
      this.gesture.enable( true );
      this.dragable = true;
    } ).catch( () => {
      const message = 'Ha ocurrido un error';
      const color = 'danger';
      this._common.presentToast( { message, color } );
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

  async ratingModal() {
    const confirm = await this._common.alert();
    if ( confirm ) {
      const loading = await this._common.presentLoading();
      await this.endTravel();
      loading.dismiss();

      const modal = await this._common.presentModal( {
        component: RatingPage,
        cssClass: '',
        componentProps: {
          route: this._aboardinData.data.route,
          id: this._aboardinData.data.id
        }
      } );
      modal.present();
      await modal.onDidDismiss();
      this.userService.rutasFlow = 0;
    }

  }

  private endTravel(): Promise<void> {
    return new Promise<void>( resolve => {
      this.routeService.endTravel().subscribe( async () => { } );
      resolve();
    } );
  }


  private abording( clientId: number, busId: number, routeId: number ): Promise<any> {
    return new Promise<any>( resolve => {
      this.routeService.abording( clientId, busId, routeId ).subscribe( response => {
        resolve( response );
      } );
    } );
  }

  private async verifyBoarding(): Promise<any> {
    return new Promise<any>( resolve => {
      this.routeService.verifyBorading().subscribe( response => {
        resolve( response );
      } );
    } );
  }

}
