import { UserService } from './../../services/user.service';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, AfterViewInit, ChangeDetectorRef, Input, HostListener } from '@angular/core';
import { GestureController, LoadingController, Platform } from '@ionic/angular';
import jsQR from 'jsqr';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import {Plugins} from "@capacitor/core";

const {Keyboard} = Plugins;

// import { DrawerState } from 'ion-bottom-drawer';
@Component({
  selector: 'app-bottom-drawer',
  templateUrl: './bottom-drawer.component.html',
  styleUrls: ['./bottom-drawer.component.scss'],
})
export class BottomDrawerComponent implements AfterViewInit, OnInit {
  @ViewChild('bottomDrawer', { read: ElementRef }) bottomDrawer: ElementRef;
  @ViewChild('seat') seat: ElementRef;
  @ViewChild('editRutas') editRutas: ElementRef;
  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  bottomDrawerElement: any;
  seatElement: any;
  videoElement: any;
  canvasElement: any;
  canvasContext: any;
  loading: HTMLIonLoadingElement;
  selectedItem: {};


  // tslint:disable-next-line:no-output-rename
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter();
  @Output() emitEvent: EventEmitter<any> = new EventEmitter();
  @Input() component = 'Inicio';

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
  scanResult = null;
  stream = null;
  seats = [];
  showScan = false;

  constructor(
    private plt: Platform,
    private gestureCtlr: GestureController,
    private changeDetectorRef: ChangeDetectorRef,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private nativePageTransitions: NativePageTransitions,
    public navctl: NavController,
  ) {
    console.log('bottom drawer');
    this.searchList = [
      {
        status: 'completed',
        name: 'abc-cba',
        timeRange: '8:00am - 4:00pm',
        from: {
          lat: 22.5726,
          lng: 88.3639
        },
        to: {
          lat: 22.586193,
          lng: 88.407760
        }
      },
      {
        status: 'pending',
        name: 'def-cba',
        timeRange: '11:00am - 8:00pm',
        from: {
          lat: 45.6483965,
          lng: 4.7111342
        },
        to: {
          lat: 55.6463965,
          lng: 34.8111342
        }
      },
      {
        status: 'pending',
        name: 'def-cba',
        timeRange: '11:00am - 8:00pm',
        from: {
          lat: 45.6483965,
          lng: 14.7111342
        },
        to: {
          lat: 15.6463965,
          lng: 24.8111342
        }
      }
    ];
  }
  ngOnInit() {

    window.addEventListener('keyboardWillShow', (e) => {
      console.log('keyboard will show with height');
      this.dragable = false;
    this.gesture.enable(false);
    if (this.isOpen) {
          this.toggleDrawer();
        }
    });

    Keyboard.addListener('keyboardDidHide', () => {
      console.log('keyboard will hide');
      this.dragable = true;
    this.gesture.enable(true);
    // if (!this.isOpen) {
    //   this.toggleDrawer();
    // }
    });
  }


  


  readJsonData(dataurl) {
    return new Promise((resolve, reject) => {
      fetch(dataurl).then(res => res.json()).then(jsonData => {
        resolve(jsonData);
      }).catch(err => {
        resolve({});
      });
    });
  }

  async ngAfterViewInit() {
    this.bottomDrawerElement = this.bottomDrawer.nativeElement;
    // if(userService.rutasFlow == 2 )
    // this.videoElement = this.video.nativeElement;
    console.log('ngafter');
    this.openHeight = (this.plt.height() / 100) * 60;

    this.gesture = await this.gestureCtlr.create({
      el: this.bottomDrawerElement,
      gestureName: 'swipe',
      direction: 'y',
      onMove: ev => {
        // tslint:disable-next-line:curly
        if (ev.deltaY < -this.openHeight) return;
        // tslint:disable-next-line:curly
        if (-ev.deltaY < -36.4705810546875) return;
        // tslint:disable-next-line:curly
        if (ev.deltaY < 0) return;
        // tslint:disable-next-line:curly
        if (ev.deltaY > 0) return;

        this.bottomDrawerElement.style.transform = `translateY(${ev.deltaY}px)`;
      },
      onEnd: ev => {
        if (ev.deltaY < -50 ) {
          // tslint:disable-next-line:quotemark
          this.bottomDrawerElement.style.transition = ".4s ease-out";
          this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px)`;
          this.openState.emit(true);
          this.isOpen = true;
        }
        else if (ev.deltaY > 50 ) {
          if (this.userService.rutasFlow === 5) {
            this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight / 2.56}px`;
          } else {
            this.bottomDrawerElement.style.transform = ``;
          }
          this.openState.emit(false);
          this.isOpen = false;
        }
      },
      onStart: ev => {
        console.log('mango', !this.isOpen);
      }
    });
    this.gesture.enable(true);
  }

  toggleDrawer() {
    this.bottomDrawerElement = this.bottomDrawer.nativeElement;
    // this.openState.emit(!this.isOpen);
    if (!this.isOpen) {
      this.bottomDrawerElement.style.transition = '.4s ease-out';
      this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px`;
      this.openState.emit(true);
      this.isOpen = true;
    }
    else  {
      this.bottomDrawerElement.style.transition = '.4s ease-out';
      if (this.userService.rutasFlow === 5) {
        this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight / 2.56}px`;
      } else {
        this.bottomDrawerElement.style.transform = ``;
      }

      this.openState.emit(false);
      this.isOpen = false;
    }
  }

  routeHandler(item) {
    this.selectedItem = item;
    this.userService.rutasData = item;
    this.bottomDrawerElement = this.bottomDrawer.nativeElement;
    this.openState.emit(false);
    this.gesture.enable(false);
    this.dragable = false;
    this.bottomDrawerElement.style.transition = '.4s ease-out';
    this.bottomDrawerElement.style.transform = '';
    // this.userService.setInicioRouteIndex(++userService.rutasFlow);
    // this.userService.setClickedSearchList(item);
    ++this.userService.rutasFlow;
    this.emitEvent.emit({
      type: 'item-selected',
      data: item
    });
    // this.bottomPosition = -69;
  }

  async startScan() {
    // tslint:disable-next-line:no-unused-expression
    this, this.showScan = false;
    this.bottomDrawerElement = this.bottomDrawer.nativeElement;
    ++this.userService.rutasFlow;
    this.bottomDrawerElement.style.transition = '.4s ease-out';
    this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px`;
  }

  async scan() {

    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {

      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;
      this.canvasContext = this.canvasElement.getContext('2d');

      this.canvasContext.drawImage(
        this.videoElement, 0, 0, this.canvasElement.width, this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0, 0, this.canvasElement.width, this.canvasElement.height
      );

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      console.log('code', code);

      if (code?.data) {
        this.scanActive = false;
        this.scanResult = code.data;
        ++this.userService.rutasFlow;
        this.bottomDrawerElement.style.transition = '.4s ease-out';
        this.bottomDrawerElement.style.transform = '';
        this.stream.getTracks().forEach(track => track.stop());
        this.gesture.enable(true);
        this.dragable = true;
        this.emitEvent.emit({
          type: 'scan-success'
        });
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));

        }
      }

    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  stopScan() {
    this.bottomDrawerElement = this.bottomDrawer.nativeElement;
    --this.userService.rutasFlow;
    this.bottomDrawerElement.style.transition = '.4s ease-out';
    this.bottomDrawerElement.style.transform = '';
    this.stream.getTracks().forEach(track => track.stop());
    this.openState.emit(false);
    this.gesture.enable(false);
    this.showScan = false;
    this.scanActive = false;
  }

  async scannerOn() {
    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();
    this.showScan = true;
    this.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });

    // setTimeout(async () => {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.videoElement.srcObject = this.stream;
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();

    
    requestAnimationFrame(this.scan.bind(this));
  }

  goToFeedback() {
    this.emitEvent.emit({
      type: 'stop-track'
    });
    this.router.navigateByUrl('/sidemenu/Feedback');
    const options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      // slidePixels: 20,
      // iosdelay: 100,
      // androiddelay: 550,
      // fixedPixelsTop: 0,
      // fixedPixelsBottom: 60
     };
    this.nativePageTransitions.slide(options);
    this.navctl.navigateRoot('/sidemenu/Feedback');
    // this.router.navigateByUrl('/sidemenu/Feedback');
  }

  editRoute() { // change height after changing this flow
    this.openHeight = (this.plt.height() / 100) * 60;
    // this.bottomPosition = -89;
    this.userService.rutasFlow = 5;
    this.dragable = true;
    this.openState.emit(true);
    this.gesture.enable(true);
    this.isOpen = true;
    this.bottomDrawerElement.style.height = '62vh';
    this.bottomDrawerElement.style.transition = '.4s ease-out';
    this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px`;
    this.userService.rutasBarEdit = true;

    setTimeout(() => {
      this.trackScroll(this.editRutas.nativeElement);
    }, 0);

  }

  goToSeatArrangement() {
    this.userService.rutasFlow = 4;
    this.gesture.enable(true);
    this.dragable = true;
    this.readJsonData('../../../assets/jsonCollections/seatMatrix.json').then((jsonData) => {
      if (jsonData) {
        console.log('jsonData ==>>>', JSON.parse(JSON.stringify(jsonData)).seats);
        this.seats = JSON.parse(JSON.stringify(jsonData)).seats;
      }
      this.trackScroll(this.seat.nativeElement);
    });
  }

  goToHome() {
    this.openHeight = (this.plt.height() / 100) * 60;
    this.userService.rutasFlow = 1;
    this.showScan = false;
    this.dragable = false;
    this.openState.emit(false);
    this.gesture.enable(false);
    this.bottomDrawerElement.style.transition = '.4s ease-out';
    this.bottomDrawerElement.style.transform = ``;

  }

  // stopDrag() {
  //   this.dragable = false;
  //   this.gesture.enable(false);
  //   console.log('drawer==> close ????', this.isOpen);
  //   if (this.isOpen) {
  //     this.toggleDrawer();
  //   }
  // }

  // startDrag() {
  //   console.log('happy dragging');
  //   this.dragable = true;
  //   this.gesture.enable(true);
  //   console.log('drawer==> open ????', this.isOpen);
  //   if (!this.isOpen) {
  //     this.toggleDrawer();
  //   }
  // }

  async trackScroll(ele) {
    this.seatElement = ele;
    this.seatGesture = await this.gestureCtlr.create({
      el: this.seatElement,
      gestureName: 'swipe',
      direction: 'y',
      onStart: ev => {
        this.gesture.enable(false);
      },
      onEnd: ev => {
        this.gesture.enable(true);
      }
    });
    this.seatGesture.enable(true);
  }
}
