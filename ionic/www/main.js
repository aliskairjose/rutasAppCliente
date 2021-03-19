(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ddeveloper\Documents\Cronapis\Projects\mobile\rutas_app\ionic\src\main.ts */"zUnb");


/***/ }),

/***/ "3AGg":
/*!***********************************************************!*\
  !*** ./src/app/pages/feedback/feedback-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FeedbackPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageRoutingModule", function() { return FeedbackPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback.page */ "ak7c");




const routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_3__["FeedbackPage"]
    }
];
let FeedbackPageRoutingModule = class FeedbackPageRoutingModule {
};
FeedbackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedbackPageRoutingModule);



/***/ }),

/***/ "5yII":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 77%;\n}\n\n.addressDetails {\n  width: 90%;\n  height: 70px;\n  position: fixed;\n  top: 12%;\n  z-index: 1;\n  left: 5%;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 2px 4px 6px black;\n}\n\n.listImg {\n  height: 42px;\n  width: 42px;\n  margin: 10px;\n}\n\n.rutasEdit {\n  width: 90%;\n  /* height: 70px; */\n  position: absolute;\n  top: 14%;\n  z-index: 1;\n  left: 5%;\n  border-radius: 8px;\n}\n\n.editInp {\n  background: white;\n  border-radius: 8px;\n}\n\n.currentLoc {\n  height: 35px;\n  width: 35px;\n  border-radius: 100px;\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n}\n\n.destLoc {\n  height: 20px;\n  width: 20px;\n  border-radius: 100px;\n  background-color: black;\n}\n\n.locIcon {\n  height: 35px;\n  width: 35px;\n  font-size: 35px;\n  margin-right: 10px;\n}\n\n.currentLocation {\n  width: 35px;\n  height: 35px;\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 34px;\n  position: absolute;\n  bottom: -44px;\n  right: 2px;\n  border-radius: 100px;\n}\n\n.icon {\n  position: absolute;\n  right: 10px;\n  font-size: 24px;\n  position: absolute;\n  right: 10px;\n  display: flex;\n  font-size: 24px;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREoiLCJmaWxlIjoiaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jbWFwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDc3JTsgXHJcbn1cclxuXHJcbi5hZGRyZXNzRGV0YWlsc3tcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEyJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA2cHggYmxhY2s7XHJcbn1cclxuXHJcbi5saXN0SW1nIHtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ucnV0YXNFZGl0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICAvKiBoZWlnaHQ6IDcwcHg7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0JTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmVkaXRJbnAge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAvL21hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jdXJyZW50TG9jIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlMzQ1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRlc3RMb2Mge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubG9jSWNvbiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmN1cnJlbnRMb2NhdGlvbiB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWUzNDU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNDRweDtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "7VC9":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/soporte/soporte.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"soporteWrapper\">\r\n  <ion-title class=\"soporteTitle flex-grow-1\">Soporte/Ayuda</ion-title>\r\n  <p class=\"soportePara flex-grow-2\">A continuacion realice sus preguntas y/o quejas, nuestro equipo se encargara de responderle a la brevedad posible</p>\r\n  <ion-note class=\"soporteNote flex-grow-1\">Realice su pregunta</ion-note>\r\n  <ion-input class=\"soporteIp flex-grow-1\" type=\"text\"></ion-input>\r\n  <div class=\"soporteBtnWrapper flex-grow-3\"><ion-button class=\"soporteBtn\">Enviar</ion-button></div>\r\n</div>\r\n");

/***/ }),

/***/ "9scE":
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio.page.html */ "XlEN");
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.page.scss */ "5yII");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");






let InicioPage = class InicioPage {
    constructor(userService, geolocation) {
        this.userService = userService;
        this.geolocation = geolocation;
        this.markers = [];
        this.currLat = 20.7766443;
        this.currLng = 12.3288527;
        this.watch = null;
    }
    ngOnInit() {
        this.clearMapError();
        this.loadMap();
    }
    clearMapError() {
        let dismissElement;
        setInterval(() => {
            dismissElement = document.getElementsByClassName('dismissButton')[0];
            if (dismissElement) {
                dismissElement.click();
                clearInterval();
            }
        }, 100);
    }
    loadMap() {
        // this.watch = Geolocation.watchPosition( {}, ( position, err ) => {
        //   if ( position ) {
        //     this.currLat = position.coords.latitude;
        //     this.currLng = position.coords.longitude;
        //   }
        //   const latLng = new google.maps.LatLng( this.currLat, this.currLng );
        //   const mapOptions = {
        //     center: latLng,
        //     zoom: 7,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        //   };
        //   this.map = new google.maps.Map( this.mapElement.nativeElement, mapOptions );
        //   this.updateMap( [ latLng ], '' );
        // } );
    }
    updateMap(locations, extraInfo) {
        this.markers.map(marker => marker.setMap(null));
        this.markers = [];
        for (const loc of locations) {
            // const geocoder = new google.maps.Geocoder();
            // geocoder.geocode({latLng: loc}, (results, status) => {
            //   if (status === google.maps.GeocoderStatus.OK) {
            //   const add = results[0].formatted_address;
            //   // document.write(add);
            //   console.log('address from geocode', add);
            //   }else {
            //     console.log('error for getting address', status);
            //   }
            // });
            const marker = new google.maps.Marker({
                position: loc,
                animation: google.maps.Animation.DROP,
                map: this.map,
                icon: './../../../assets/new_marker.png'
            });
            const iw = new google.maps.InfoWindow({
                content: loc.lat() + ', ' + loc.lng()
            });
            // google.maps.event.addListener(marker, 'click', function(e) {
            if (extraInfo !== 'noTooltip') {
                iw.open(this.map, marker);
            }
            // });
            this.markers.push(marker);
        }
    }
    bottomDrawerEvent(event) {
        console.log('hi', event);
        if (event.type === 'item-selected') {
            this.handleItemSelect(event.data);
        }
    }
    handleItemSelect(data) {
        var _a, _b;
        this.selectedItem = data;
        const coor1 = (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.from;
        const coor2 = (_b = this.selectedItem) === null || _b === void 0 ? void 0 : _b.to;
        if (coor1 && coor2) {
            const origin = new google.maps.LatLng(coor1.lat, coor1.lng);
            const destination = new google.maps.LatLng(coor2.lat, coor2.lng);
            this.updateMap([origin, destination], 'noTooltip');
            this.showDirections(origin, destination);
        }
    }
    showDirections(origin, destination, mode = 'DRIVING') {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(this.map);
        const request = {
            origin,
            destination,
            travelMode: google.maps.TravelMode[mode]
        };
        directionsService.route(request, (res, status) => {
            console.log(res, status);
            if (status === 'OK') {
                console.log('setting path');
                directionsRenderer.setDirections(res);
            }
        });
    }
};
InicioPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] }
];
InicioPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['map',] }]
};
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioPage);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: 'http://api.rutaspanama.dev.cronapis.com/api',
    firebase: {
        apiKey: 'AIzaSyAwpsAm2BlfpUCa20hymcmxrp97tjCIlPs',
        authDomain: 'rutasapp-305809.firebaseapp.com',
        projectId: 'rutasapp-305809',
        storageBucket: 'rutasapp-305809.appspot.com',
        messagingSenderId: '466798676316',
        appId: '1:466798676316:web:c6063ad42c2c7acf46d999'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DdEe":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_Components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Components/shared-components.module */ "kwd/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio-routing.module */ "vPJf");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inicio.page */ "9scE");








let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_6__["InicioPageRoutingModule"],
            src_app_Components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__["SharedComponentsModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_7__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "DeA2":
/*!*********************************************************************!*\
  !*** ./src/app/Components/bottom-drawer/bottom-drawer.component.ts ***!
  \*********************************************************************/
/*! exports provided: BottomDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomDrawerComponent", function() { return BottomDrawerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bottom_drawer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bottom-drawer.component.html */ "Z6aU");
/* harmony import */ var _bottom_drawer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bottom-drawer.component.scss */ "olBi");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ "qfBg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsqr */ "7Ozu");
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsqr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








// import { DrawerState } from 'ion-bottom-drawer';
let BottomDrawerComponent = class BottomDrawerComponent {
    constructor(plt, gestureCtlr, changeDetectorRef, userService, loadingCtrl, router) {
        this.plt = plt;
        this.gestureCtlr = gestureCtlr;
        this.changeDetectorRef = changeDetectorRef;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        // tslint:disable-next-line:no-output-rename
        this.openState = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.emitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.component = 'Inicio';
        this.isOpen = false;
        this.backdropVisible = false;
        this.searchList = [];
        this.bottomPosition = -65;
        this.dragable = true;
        this.rutasFlow = 0;
        this.scanActive = false;
        this.scanResult = null;
        this.stream = null;
        this.seats = [];
        this.showScan = false;
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
                    lat: 28.7041,
                    lng: 77.1025
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
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bottomDrawerElement = this.bottomDrawer.nativeElement;
            // if(userService.rutasFlow == 2 )
            // this.videoElement = this.video.nativeElement;
            this.openHeight = (this.plt.height() / 100) * 60;
            this.gesture = yield this.gestureCtlr.create({
                el: this.bottomDrawerElement,
                gestureName: 'swipe',
                direction: 'y',
                onMove: ev => {
                    // tslint:disable-next-line:curly
                    if (ev.deltaY < -this.openHeight)
                        return;
                    // tslint:disable-next-line:curly
                    if (-ev.deltaY < -36.4705810546875)
                        return;
                    // tslint:disable-next-line:curly
                    if (this.isOpen && ev.deltaY < 0)
                        return;
                    // tslint:disable-next-line:curly
                    if (!this.isOpen && ev.deltaY > 0)
                        return;
                    this.bottomDrawerElement.style.transform = `translateY(${ev.deltaY}px)`;
                },
                onEnd: ev => {
                    if (ev.deltaY < -50 && !this.isOpen) {
                        // tslint:disable-next-line:quotemark
                        this.bottomDrawerElement.style.transition = ".4s ease-out";
                        this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px)`;
                        this.openState.emit(true);
                        this.isOpen = true;
                    }
                    else if (ev.deltaY > 50 && this.isOpen) {
                        this.bottomDrawerElement.style.transition = '.4s ease-out';
                        this.bottomDrawerElement.style.transform = '';
                        this.openState.emit(false);
                        this.isOpen = false;
                    }
                },
                onStart: ev => {
                }
            });
            this.gesture.enable(true);
        });
    }
    toggleDrawer() {
        this.bottomDrawerElement = this.bottomDrawer.nativeElement;
        this.openState.emit(!this.isOpen);
        if (!this.isOpen) {
            this.bottomDrawerElement.style.transition = '.4s ease-out';
            this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px`;
            this.openState.emit(true);
            this.isOpen = true;
        }
        else if (this.isOpen) {
            this.bottomDrawerElement.style.transition = '.4s ease-out';
            this.bottomDrawerElement.style.transform = '';
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
    startScan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bottomDrawerElement = this.bottomDrawer.nativeElement;
            ++this.userService.rutasFlow;
            this.bottomDrawerElement.style.transition = '.4s ease-out';
            this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px`;
            this.stream = yield navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            // setTimeout(async () => {
            this.videoElement = this.video.nativeElement;
            this.canvasElement = this.canvas.nativeElement;
            this.videoElement.srcObject = this.stream;
            this.videoElement.setAttribute('playsinline', true);
            this.videoElement.play();
            this.loading = yield this.loadingCtrl.create({});
            yield this.loading.present();
            requestAnimationFrame(this.scan.bind(this));
            // }, 200);
        });
    }
    scan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
                if (this.loading) {
                    yield this.loading.dismiss();
                    this.loading = null;
                    this.scanActive = true;
                }
                this.canvasElement.height = this.videoElement.videoHeight;
                this.canvasElement.width = this.videoElement.videoWidth;
                this.canvasContext = this.canvasElement.getContext('2d');
                this.canvasContext.drawImage(this.videoElement, 0, 0, this.canvasElement.width, this.canvasElement.height);
                const imageData = this.canvasContext.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height);
                const code = jsqr__WEBPACK_IMPORTED_MODULE_6___default()(imageData.data, imageData.width, imageData.height, {
                    inversionAttempts: 'dontInvert'
                });
                console.log('code', code);
                if (code === null || code === void 0 ? void 0 : code.data) {
                    this.scanActive = false;
                    this.scanResult = code.data;
                    ++this.userService.rutasFlow;
                    this.bottomDrawerElement.style.transition = '.4s ease-out';
                    this.bottomDrawerElement.style.transform = '';
                    this.stream.getTracks().forEach(track => track.stop());
                    this.gesture.enable(true);
                    this.dragable = true;
                }
                else {
                    if (this.scanActive) {
                        requestAnimationFrame(this.scan.bind(this));
                    }
                }
            }
            else {
                requestAnimationFrame(this.scan.bind(this));
            }
        });
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
    }
    scannerOn() {
        this.showScan = true;
    }
    goToFeedback() {
        this.router.navigateByUrl('/sidemenu/Feedback');
    }
    editRoute() {
        this.userService.rutasFlow = 5;
        this.dragable = true;
        this.openState.emit(true);
        this.gesture.enable(true);
        this.bottomDrawerElement.style.transition = '.4s ease-out';
        this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight / 2}px`;
        this.userService.rutasBarEdit = true;
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
            this.trackScroll();
        });
    }
    goToHome() {
        this.userService.rutasFlow = 1;
        this.dragable = false;
        this.openState.emit(false);
        this.gesture.enable(false);
        this.bottomDrawerElement.style.transition = '.4s ease-out';
        this.bottomDrawerElement.style.transform = ``;
    }
    stopDrag() {
        this.dragable = false;
        this.gesture.enable(false);
        console.log('drawer==> close ????', this.isOpen);
        if (this.isOpen) {
            this.toggleDrawer();
        }
    }
    startDrag() {
        console.log('happy dragging');
        this.dragable = true;
        this.gesture.enable(true);
        console.log('drawer==> open ????', this.isOpen);
        if (!this.isOpen) {
            this.toggleDrawer();
        }
    }
    trackScroll() {
        const ele = document.getElementById('seatArrangement');
        ele.addEventListener('scroll', (event) => {
            console.log('scrollinggggggg!!!!!!!!');
            event.stopPropagation();
            // this.gesture.enable(false);
        });
    }
};
BottomDrawerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["GestureController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
BottomDrawerComponent.propDecorators = {
    bottomDrawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['bottomDrawer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },] }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['video', { static: false },] }],
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['canvas', { static: false },] }],
    openState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['openStateChanged',] }],
    emitEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    component: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
BottomDrawerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-bottom-drawer',
        template: _raw_loader_bottom_drawer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bottom_drawer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BottomDrawerComponent);



/***/ }),

/***/ "E75v":
/*!***********************************************************!*\
  !*** ./src/app/pages/sidemenu/sidemenu-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SidemenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPageRoutingModule", function() { return SidemenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _inicio_inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../inicio/inicio.page */ "9scE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidemenu_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidemenu.page */ "QqEe");
/* harmony import */ var _feedback_feedback_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feedback/feedback.page */ "ak7c");
/* harmony import */ var _soporte_soporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../soporte/soporte.page */ "gzPJ");







const routes = [
    {
        path: '',
        component: _sidemenu_page__WEBPACK_IMPORTED_MODULE_4__["SidemenuPage"],
        children: [
            {
                path: 'Inicio',
                component: _inicio_inicio_page__WEBPACK_IMPORTED_MODULE_1__["InicioPage"]
            },
            {
                path: 'Feedback',
                component: _feedback_feedback_page__WEBPACK_IMPORTED_MODULE_5__["FeedbackPage"]
            },
            {
                path: 'Soporte',
                component: _soporte_soporte_page__WEBPACK_IMPORTED_MODULE_6__["SoportePage"]
            }
        ]
    }
];
let SidemenuPageRoutingModule = class SidemenuPageRoutingModule {
};
SidemenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], SidemenuPageRoutingModule);



/***/ }),

/***/ "HBsN":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content [ngSwitch] = \"feedbackFlow\" class=\"feedbackContainer\">\r\n\r\n  <div *ngSwitchCase = 0 class=\"d-flex align-items-center justify-content-center flex-column flex-grow-1 h-100\">\r\n    <span class=\"heading mb-3\">i Has llegado a tu destino!</span>\r\n\r\n    <span class=\"mb-2\">Callifica al conductor</span>\r\n\r\n    <div class=\"d-flex mb-3\">\r\n      <img class=\"proPic mx-3\" src=\"../../../assets/prueba 1Recurso 55.png\"/>\r\n      <div class=\"d-flex flex-column justify-content-center\">\r\n        <ion-note>Luis Durain</ion-note>\r\n        <app-rating></app-rating>\r\n        \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"d-flex flex-column justify-content-center mb-3\">\r\n      <span>Callifica la unidad</span>\r\n      <app-rating></app-rating>\r\n    </div>\r\n\r\n    <div class=\"d-flex align-items-center  p-1 textWrapper m-2\">\r\n      <img class=\"logo mx-2\" src=\"./../../../assets/route.png\" />\r\n      <div class=\"\">\r\n        <div class=\"listName\">{{userService.rutasData?.name}}</div>\r\n        <ion-note>{{userService.rutasData?.timeRange}}</ion-note>\r\n      </div>\r\n    </div>\r\n\r\n    <span>Algun comentario?</span>\r\n\r\n    <div>\r\n      <label class=\"feedbackInpLabel\">Describe tu experiencia</label>\r\n      <ion-input class=\"feedbackInp\" ></ion-input>\r\n    </div>\r\n      \r\n   \r\n\r\n    <ion-button fill=\"clear\" (click) = \"clickHandler(0)\" color=\"clear\" class=\"btn\">Enviar</ion-button>\r\n  </div>\r\n\r\n  <div *ngSwitchCase = 1 class=\"d-flex align-items-center justify-content-center flex-column flex-grow-1 h-100\">\r\n    <span class=\"boldTxt\">Gracias por vaijar con nosotros</span>\r\n    <ion-note>! Te eperamos pronto !</ion-note>\r\n\r\n    <ion-button fill=\"clear\" (click) = \"clickHandler(1)\" color=\"clear\" class=\"btn2\"><ion-icon class=\"logout-icon mx-1\" name=\"log-out-outline\" ></ion-icon >Saliar</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "N+K7":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    post(serviceName, data) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + serviceName;
        return this._http.post(url, data);
    }
    get(serviceName) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + serviceName;
        return this._http.get(url);
    }
    put(serviceName, data) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + serviceName;
        return this._http.put(url, data);
    }
    patch(serviceName, data) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + serviceName;
        return this._http.patch(url, data);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "OU9T":
/*!*******************************************************!*\
  !*** ./src/app/Components/rating/rating.component.ts ***!
  \*******************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rating_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rating.component.html */ "UIOA");
/* harmony import */ var _rating_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rating.component.scss */ "e1c5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RatingComponent = class RatingComponent {
    constructor() {
        this.rate = 2;
        this.rating = [1, 2, 3, 4, 5];
    }
    ngOnInit() { }
    ratingHandler(i) {
        this.rate = i;
    }
};
RatingComponent.ctorParameters = () => [];
RatingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rating',
        template: _raw_loader_rating_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rating_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RatingComponent);



/***/ }),

/***/ "OlR4":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let CommonService = class CommonService {
    constructor(loading, toastController) {
        this.loading = loading;
        this.toastController = toastController;
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({
                message: 'Por favor espere...',
                duration: 2000
            });
            return loading;
        });
    }
    /**
     *
     * @param message Mensaje a mostrar
     * @param color primary | secondary | tertiary | success | warning | danger | light | medium | dark Por defecto success
     * @param duration Tiempo en milisegundos, por defecto 2000
     */
    // tslint:disable-next-line: max-line-length
    presentToast({ message, color = 'success', duration = 2000 }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration,
                position: 'bottom',
                color
            });
            toast.present();
        });
    }
};
CommonService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "OurG":
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feedbackContainer {\n  --background: #fae345;\n}\n\n.heading {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.proPic {\n  border-radius: 100px;\n  height: 65px;\n}\n\n.btn {\n  background: white;\n  padding: 1px;\n  position: absolute;\n  bottom: 10px;\n  font-size: 12px;\n  text-transform: none !important;\n}\n\n.btn2 {\n  background: white;\n  padding: 1px;\n  color: black;\n  margin-top: 18px;\n  font-size: 12px;\n  text-transform: none !important;\n}\n\n.feedbackInp {\n  border-bottom: 1px solid black;\n}\n\n.feedbackInpLabel {\n  font-size: 12px;\n}\n\n.logo {\n  height: 40px;\n  width: 40px;\n}\n\n.textWrapper {\n  background-color: white;\n  width: 75%;\n  border-radius: 8px;\n  box-shadow: 2px 2px 6px 1px #ccc;\n}\n\n.boldTxt {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmZWVkYmFjay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBUUE7RUFDSSw4QkFBQTtBQUxKOztBQVFBO0VBQ0ksZUFBQTtBQUxKOztBQVFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFMSjs7QUFRQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFMSjs7QUFRQTtFQUNJLGlCQUFBO0FBTEoiLCJmaWxlIjoiZmVlZGJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWRiYWNrQ29udGFpbmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZhZTM0NTtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9QaWMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4yIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLmZlZWRiYWNrSW5wIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHVuc2V0O1xyXG4vLyAgICAgYm9yZGVyOiB1bnNldDtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IGJsYWNrIDFweCBzb2xpZDtcclxuLy8gfVxyXG5cclxuLmZlZWRiYWNrSW5wIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmZlZWRiYWNrSW5wTGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLnRleHRXcmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDFweCAjY2NjO1xyXG59XHJcblxyXG4uYm9sZFR4dCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */");

/***/ }),

/***/ "Q00G":
/*!*************************************************!*\
  !*** ./src/app/pages/soporte/soporte.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".soporteWrapper {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.soporteTitle {\n  display: flex;\n  place-items: flex-start;\n  padding-top: 8%;\n}\n\n.soportePara {\n  text-align: center;\n  width: 80%;\n  color: grey;\n}\n\n.soporteNote {\n  display: flex;\n  align-self: flex-start;\n  padding-left: 10%;\n  align-items: flex-end;\n}\n\n.soporteIp {\n  border-bottom: black 1px solid;\n  width: 80%;\n}\n\n.soporteBtn {\n  --background: #fae345;\n  color: black;\n}\n\n.soporteBtnWrapper {\n  flex: 3;\n  padding-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzb3BvcnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLE9BQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InNvcG9ydGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvcG9ydGVXcmFwcGVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc29wb3J0ZVRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy10b3A6IDglO1xyXG59XHJcblxyXG4uc29wb3J0ZVBhcmF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5zb3BvcnRlTm90ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5zb3BvcnRlSXB7XHJcbiAgICBib3JkZXItYm90dG9tOiBibGFjayAxcHggc29saWQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uc29wb3J0ZUJ0bntcclxuICAgIC0tYmFja2dyb3VuZDogI2ZhZTM0NTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNvcG9ydGVCdG5XcmFwcGVye1xyXG4gICAgZmxleDogMztcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "QVr5":
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.module.ts ***!
  \***************************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback-routing.module */ "3AGg");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback.page */ "ak7c");
/* harmony import */ var src_app_Components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Components/shared-components.module */ "kwd/");








let FeedbackPageModule = class FeedbackPageModule {
};
FeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackPageRoutingModule"],
            src_app_Components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
    })
], FeedbackPageModule);



/***/ }),

/***/ "QqEe":
/*!*************************************************!*\
  !*** ./src/app/pages/sidemenu/sidemenu.page.ts ***!
  \*************************************************/
/*! exports provided: SidemenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPage", function() { return SidemenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidemenu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidemenu.page.html */ "uE9B");
/* harmony import */ var _sidemenu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidemenu.page.scss */ "jk5r");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");







let SidemenuPage = class SidemenuPage {
    constructor(changeDetectorRef, _storage, _auth, router) {
        this.changeDetectorRef = changeDetectorRef;
        this._storage = _storage;
        this._auth = _auth;
        this.router = router;
        this.backdropVisible = false;
        this.drawerVar = 'Inicio';
        this.activeRoute = 0;
        this.addressClicked = 0;
        this.user = {};
        this.abrv = '';
        this.appPages = [
            { title: 'Inicio', url: '/sidemenu/Inicio', icon: '../../../assets/prueba 1Recurso 29.png' },
            { title: 'Rutas', url: '/sidemenu/Rutas', icon: '../../../assets/prueba 1Recurso 30.png' },
            { title: 'Experiencia', url: '/sidemenu/Experiencia', icon: '../../../assets/prueba 1Recurso 31.png' },
            { title: 'Soporte/Ayuda', url: '/sidemenu/Soporte', icon: '../../../assets/prueba 1Recurso 32.png' }
        ];
        this.user = {};
        this._auth.authObserver().subscribe((user) => {
            this.user = Object.assign({}, user);
            const value = this.user.name.split(' ');
            this.abrv = `${value[0].charAt(0)}${value[1].charAt(0)}`;
        });
    }
    ngOnChanges(changes) {
    }
    ngOnInit() {
        this._storage.get('rp_user').then((user) => {
            this.user = Object.assign({}, user);
            const value = this.user.name.split(' ');
            this.abrv = `${value[0].charAt(0)}${value[1].charAt(0)}`;
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
    menuOptionClickHandle(p, i) {
        this.activeRoute = i;
        this.drawerVar = p.title;
        this.router.navigate([p.url]);
    }
};
SidemenuPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SidemenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-sidemenu',
        template: _raw_loader_sidemenu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidemenu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SidemenuPage);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/storage.service */ "n90K");






let AppComponent = class AppComponent {
    constructor(router, _storage) {
        this.router = router;
        this._storage = _storage;
        this.appPages = [
            { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
            { title: 'Rutas', url: '/folder/Rutas', icon: 'bus' },
            { title: 'Experiencia', url: '/folder/Experiencia', icon: 'medal' },
            { title: 'Soporte/Ayuda', url: '/folder/Soporte', icon: 'help-buoy' },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isLoggedin = yield this._storage.get('rp_token');
            const route = isLoggedin ? '/sidemenu/Inicio' : '/initial';
            this.router.navigate([route]);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "SyVg":
/*!***************************************************!*\
  !*** ./src/app/pages/sidemenu/sidemenu.module.ts ***!
  \***************************************************/
/*! exports provided: SidemenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPageModule", function() { return SidemenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sidemenu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidemenu-routing.module */ "E75v");
/* harmony import */ var src_app_Components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Components/shared-components.module */ "kwd/");
/* harmony import */ var _sidemenu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidemenu.page */ "QqEe");








let SidemenuPageModule = class SidemenuPageModule {
};
SidemenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sidemenu_routing_module__WEBPACK_IMPORTED_MODULE_5__["SidemenuPageRoutingModule"],
            src_app_Components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]
        ],
        declarations: [_sidemenu_page__WEBPACK_IMPORTED_MODULE_7__["SidemenuPage"]],
        exports: []
    })
], SidemenuPageModule);



/***/ }),

/***/ "UIOA":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/rating/rating.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex \">\r\n  <div  *ngFor=\"let p of rating; let i = index\" (click) = \"ratingHandler(i)\">\r\n    <ion-icon [ngClass] = \"rate >= i ? 'active' : 'deactive'\" ng name=\"star\"></ion-icon>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ }),

/***/ "XlEN":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addressDetails\" *ngIf=\"selectedItem  && !userService.rutasBarEdit && userService.rutasFlow != 4\">\r\n  <div class=\"listItemWrapper\">\r\n    <img class=\"listImg\" src=\"./../../../assets/route.png\" />\r\n    <div class=\"listTextWrapper\">\r\n      <div class=\"listName\">{{selectedItem?.name}}</div>\r\n      <ion-note>{{selectedItem?.timeRange}}</ion-note>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"rutasEdit d-flex flex-column\" *ngIf=\"userService.rutasBarEdit\">\r\n  <div class=\"d-flex align-items-center mb-3\">\r\n    <div class=\"currentLoc\"><span class=\"destLoc\"></span></div>\r\n    <ion-input class=\"editInp d-flex align-items-center\" placeholder=\"Indico de Ruta\">\r\n      <div class=\"icon\">\r\n        <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\r\n      </div>\r\n    </ion-input>\r\n  </div>\r\n\r\n  <div class=\"d-flex align-items-center\">\r\n    <div class=\"locIcon\">\r\n      <ion-icon name=\"location\"></ion-icon>\r\n    </div>\r\n    <ion-input class=\"editInp d-flex align-items-center\" placeholder=\"Final de Ruta\">\r\n      <div class=\"icon\">\r\n        <ion-icon name=\"swap-vertical\"></ion-icon>\r\n      </div>\r\n    </ion-input>\r\n  </div>\r\n</div>\r\n<div #map id=\"map\"></div>\r\n<!-- <app-map></app-map> -->\r\n<app-bottom-drawer component=\"Inicio\" (emitEvent)=\"bottomDrawerEvent($event)\"></app-bottom-drawer>");

/***/ }),

/***/ "Z6aU":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/bottom-drawer/bottom-drawer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\" tappable (click)=\"bottomDrawer.toggleDrawer()\"></div> -->\r\n<div  class=\"bottom-drawer\" [ngStyle]= \"{'bottom': 'calc('+ bottomPosition +'vh + env(safe-area-inset-bottom))'}\" #bottomDrawer>\r\n  <div *ngIf = \"userService.rutasFlow === 5\" class=\"car-loc-btn\"><ion-icon name=\"locate\"></ion-icon></div>\r\n  <div *ngIf=\"dragable\" class=\"ion-text-center \">\r\n    <ion-button  fill=\"clear\" expand=\"full\" (click) =\"toggleDrawer()\" class=\"minH\">\r\n      <div class=\"drawer-pull\"></div>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <div class=\"content-container mt-2\" *ngIf=\"component === 'Inicio'\">\r\n \r\n\r\n  <ion-content [ngSwitch] = \"userService.rutasFlow\">\r\n\r\n    <div *ngSwitchCase = 0>\r\n\r\n      <ion-input class=\"searchField\" placeholder=\"Buscar ruta\" (click)=\"stopDrag()\" (ionBlur)=\"startDrag()\"></ion-input>\r\n      <div class='itemWrapper' *ngFor=\"let item of searchList\" (click) =\"routeHandler(item)\">\r\n          <img class=\"listImg\" *ngIf=\"item.status === 'pending'\" src=\"../../../assets/clockYellow.png\"/>\r\n          <img class=\"listImg\" *ngIf=\"item.status === 'completed'\" src=\"../../../assets/briefcase.png\"/>\r\n          <div class=\"\">\r\n            <div class=\"listName\">{{item.name}}</div>\r\n            <ion-note >{{item.timeRange}}</ion-note>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"px-2\" *ngSwitchCase = 1>\r\n      <div class=\"d-flex flex-row\">\r\n        \r\n        <div class=\"d-flex flex-grow-1\">\r\n          <img class=\"clock\" src=\"../../../assets/clock.png\"/>\r\n          <div class=\"d-flex flex-column\">\r\n            <span >Proxima unidad</span>\r\n            <ion-note>15 minutes</ion-note>\r\n          </div>\r\n         \r\n        </div>\r\n        \r\n        \r\n        <div class=\"justify-content-around d-flex flex-grow-1\">\r\n          <img (click) = \"startScan()\" class=\"scan\" src=\"../../../assets/prueba 1Recurso 45.png\"/>\r\n\r\n          <img class=\"scan\" (click)=\"goToSeatArrangement()\" src=\"../../../assets/prueba 1Recurso 42.png\"/>\r\n          <img class=\"scan\" (click)=\"editRoute()\" src=\"../../../assets/prueba 1Recurso 47.png\"/>\r\n        </div>\r\n        \r\n      </div>\r\n      <ion-button fill=\"clear\" expand=\"full\" class=\"confirmRutas my-3\">Abordar este bus</ion-button>\r\n      \r\n    </div>\r\n\r\n    <div class=\"d-flex flex-column align-items-center\" *ngSwitchCase = 2>\r\n      <div class=\"scanBlock\">\r\n        <div class=\"d-flex flex-column align-items-center justify-content-center\" *ngIf=\"!showScan\">\r\n          <ion-note>Please scan this QR to verify your bus</ion-note>\r\n          <img class=\"scannerImg\" src=\"../../../assets/scanner.png\"/>\r\n        </div>\r\n        <div [ngClass]=\"!showScan ? 'd-none' : 'd-block'\">\r\n          <video class=\"vdo\" [hidden] = '!scanActive' #video></video>\r\n        <canvas #canvas hidden></canvas>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <ion-button *ngIf=\"!showScan\" (click) = \"scannerOn()\" fill=\"clear\"  class=\"confirmRutas my-3 \">Start scan</ion-button>\r\n\r\n      <ion-button *ngIf=\"showScan\"  (click) = \"stopScan()\" fill=\"clear\"  class=\"confirmRutas my-3 \">Back</ion-button>\r\n    </div>\r\n\r\n    \r\n    <div *ngSwitchCase = 3>\r\n\r\n      <div class=\"driverWrapper\" *ngIf=\"!isOpen\">\r\n        <div class=\"driverOverview\">\r\n        <img class = \"dp\" src=\"../../../assets/prueba 1Recurso 59.png\"/>\r\n        <div class=\"driverDetail\">\r\n          <ion-text class=\"drivername\">{{scanResult}}</ion-text>\r\n          <div class=\"driverPlaceDetail\">\r\n            <ion-text class=\"placePadding\">Modelo: Yutong V55</ion-text>\r\n            <ion-text>Placa: 456yht7</ion-text>\r\n          </div>\r\n          <ion-note>Tiempo de llegada a destino: 25min</ion-note>\r\n        </div>\r\n      </div>\r\n      <ion-button fill=\"clear\" (click) = \"goToFeedback()\" class=\"confirmDriverBtn\"> \r\n        <ion-icon class=\"\" name=\"log-out-outline\"></ion-icon>\r\n        <ion-text>Finalizar viaje</ion-text>\r\n      </ion-button>\r\n      </div>\r\n\r\n      <div class=\"expandedDetailWrapper\" *ngIf=\"isOpen\">\r\n        <ion-text class=\"drivername\">Datos de tu viaje</ion-text>\r\n\r\n        <img class = \"expandedDp\" src=\"../../../assets/prueba 1Recurso 59.png\"/>\r\n\r\n        <ion-note>Tu conductor</ion-note>\r\n\r\n        <div class=\"expandedSelectedItem\">\r\n          <div class=\"equalLength expanded-driverName\">\r\n            <ion-text class=\"brokenTxt\">{{scanResult}}</ion-text>\r\n          </div>  \r\n          <div class=\"equalLength\">\r\n            <ion-text>4/5</ion-text>\r\n            <img class=\"starImg\" src=\"../../../assets/yellowStar.png\"/>\r\n          </div>\r\n        </div>\r\n\r\n        <ion-note>Tu ruta</ion-note>\r\n\r\n        <div class=\"listItemWrapper cardInDrawer\">\r\n          <img class=\"listImg\" src=\"../../../assets/route.png\" />\r\n          <div class=\"listTextWrapper\">\r\n            <div class=\"listName\">{{selectedItem?.name}}</div>\r\n            <ion-note>{{selectedItem?.timeRange}}</ion-note>\r\n          </div>\r\n        </div>\r\n\r\n        <ion-note>Tu unidad</ion-note>\r\n\r\n        <ion-text>Modelo: Yutong V55</ion-text>\r\n\r\n        <ion-text>Placa: 456yht7</ion-text>\r\n\r\n        <ion-note>Puestos disponibles</ion-note>\r\n\r\n        <ion-text>15/30</ion-text>\r\n\r\n        <ion-button (click) = \"goToFeedback()\" class=\"confirmDriverBtn setAtBottom\">\r\n          <ion-icon class=\"\" name=\"log-out-outline\"></ion-icon>\r\n          <ion-text>Finalizar viaje</ion-text>\r\n        </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngSwitchCase = 4 class=\"seatContentWrapper\">\r\n      <div class=\"listItemWrapper extraShadow\">\r\n        <img class=\"listImg\" src=\"../../../assets/route.png\" />\r\n        <div class=\"listTextWrapper\">\r\n          <div class=\"listName\">{{selectedItem?.name}}</div>\r\n          <ion-note>{{selectedItem?.timeRange}}</ion-note>\r\n        </div>\r\n      </div>\r\n      <div class=\"rowWrapper\">\r\n      <div *ngFor=\"let row of seats\">\r\n        <div class=\"rowView\" *ngIf=\"row.length\">\r\n        <div class=\"imgWrapper\" *ngFor=\"let col of row\">\r\n            <img *ngIf=\"col.isSeat && col.status==='driver'\" class=\"seatImg\" src=\"../../../assets/chair (2).png\" />\r\n            <img *ngIf=\"col.isSeat && col.status==='empty'\" class=\"seatImg\" src=\"../../../assets/chair (1).png\" />\r\n            <img *ngIf=\"col.isSeat && col.status==='f'\" class=\"seatImg\" src=\"../../../assets/chair (3).png\" />\r\n            <img *ngIf=\"col.isSeat && col.status==='m'\" class=\"seatImg\" src=\"../../../assets/chair.png\" />\r\n          <div *ngIf=\"!col.isSeat\" class=\"emptySeat\"></div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"row.length === 0\" class=\"emptyRow\"></div>\r\n      </div>\r\n      </div>\r\n      <div *ngIf=\"isOpen\" class=\"totalSeats\">\r\n        <div class=\"rowView\">\r\n          <div class=\"bottomSeatWrapper smallSeatWrapper\">\r\n            <ion-note class=\"totalSeatCount\">8/32</ion-note>\r\n            <img class=\"seatImg smallSeat\" src=\"../../../assets/chair (1).png\"/>\r\n            <ion-note class=\"seatType\">Aslenios dispenible</ion-note>\r\n          </div>\r\n          <div class=\"bottomSeatWrapper extendedHeight\">\r\n            <img class=\"seatImg\" src=\"../../../assets/chair (2).png\"/>\r\n            <ion-note class=\"seatType\">Asionto del chofer</ion-note>\r\n          </div>\r\n          <div class=\"bottomSeatWrapper extendedHeight\">\r\n            <ion-note class=\"totalSeatCount\">15/32</ion-note>\r\n            <img class=\"seatImg\" src=\"../../../assets/chair (3).png\"/>\r\n            <ion-note class=\"seatType\">Asientos ocupados</ion-note>\r\n          </div>\r\n          <div class=\"bottomSeatWrapper noMargin smallSeatWrapper\">\r\n            <ion-note class=\"totalSeatCount\">5/32</ion-note>\r\n            <img class=\"seatImg smallSeat\" src=\"../../../assets/chair.png\"/>\r\n            <ion-note class=\"seatType\">Asientos selecclonacos</ion-note>\r\n          </div>\r\n        </div>\r\n        <ion-button class=\"seatBtn\" (click)=\"goToHome()\">\r\n          <ion-icon name=\"log-out-outline\" ></ion-icon>\r\n          Asignar Asientos\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngSwitchCase = 5>\r\n\r\n      <div class=\"d-flex justify-content-center h-100 flex-column\">\r\n        <ion-button fill=\"clear\" color=\"clear\" class=\"flow-4-btn-1 borderRad\"><ion-icon name=\"options-outline\" class=\"mx-2\"></ion-icon> Panel de Control</ion-button>\r\n\r\n        <div class=\"d-flex\">\r\n          <ion-select class=\"btn-select\" placeholder=\"Cliente\">\r\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\r\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\r\n          </ion-select>\r\n          <ion-select class=\"btn-select\" placeholder=\"Rutas\">\r\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\r\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\r\n          </ion-select>\r\n        </div>\r\n\r\n        <ion-button fill=\"clear\" color=\"clear\" class=\"flow-4-btn-1 borderRad\"><ion-icon name=\"search-outline\" class=\"mx-1\"></ion-icon>Buscar</ion-button>\r\n\r\n        <div class=\"d-flex justify-content-center my-4\">\r\n          <ion-button fill=\"clear\" color=\"clear\" class=\"flow-4-btn-2 btn35 mx-1 borderRad\" placeholder=\"Cliente\">Ida <ion-icon name=\"return-up-forward-outline\" class=\"mx-1 borderRad\"></ion-icon></ion-button>\r\n          <ion-button fill=\"clear\" color=\"clear\" class=\"flow-4-btn-1 btn35 mx-1 borderRad\" placeholder=\"Rutas\">Regreso <ion-icon name=\"return-down-back-outline\" class=\"mx-1 borderRad\"></ion-icon></ion-button>\r\n        </div>\r\n\r\n        <div class=\"d-flex flex-column align-items-center\">\r\n          <ion-note class=\"mb-2\">Informacion de Ruta</ion-note>\r\n\r\n          <table class=\"tbl\">\r\n            <thead>\r\n              <tr>\r\n                <th >Ruta</th>\r\n                <th >Detalles de Ruta</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td >foo</td>\r\n                <td >bar</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  \r\n</ion-content>\r\n</div>\r\n\r\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _pages_soporte_soporte_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/soporte/soporte.module */ "y+Ir");
/* harmony import */ var _pages_inicio_inicio_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/inicio/inicio.module */ "DdEe");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_sidemenu_sidemenu_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/sidemenu/sidemenu.module */ "SyVg");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _pages_feedback_feedback_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/feedback/feedback.module */ "QVr5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth-interceptor.service */ "giCd");




















let AppModule = class AppModule {
    constructor(userService) {
        this.userService = userService;
        userService.subscribeBackHandler();
    }
};
AppModule.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"] }
];
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot({ mode: 'md' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _pages_sidemenu_sidemenu_module__WEBPACK_IMPORTED_MODULE_12__["SidemenuPageModule"],
            _pages_soporte_soporte_module__WEBPACK_IMPORTED_MODULE_1__["SoportePageModule"],
            _pages_inicio_inicio_module__WEBPACK_IMPORTED_MODULE_2__["InicioPageModule"],
            _pages_feedback_feedback_module__WEBPACK_IMPORTED_MODULE_17__["FeedbackPageModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptorService"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ak7c":
/*!*************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.ts ***!
  \*************************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feedback.page.html */ "HBsN");
/* harmony import */ var _feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback.page.scss */ "OurG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");






let FeedbackPage = class FeedbackPage {
    constructor(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.feedbackFlow = 0;
        console.log("usfvdgfb rutasdata", userService.rutasData);
    }
    ngOnInit() {
    }
    clickHandler(flow) {
        this.userService.rutasFlow = 0;
        if (flow === 1)
            this.router.navigate(['/sidemenu/Inicio']);
        else
            this.feedbackFlow = 1;
    }
};
FeedbackPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
FeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feedback',
        template: _raw_loader_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeedbackPage);



/***/ }),

/***/ "e1c5":
/*!*********************************************************!*\
  !*** ./src/app/Components/rating/rating.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".deactive {\n  color: white;\n}\n\n.active {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlYWN0aXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */");

/***/ }),

/***/ "giCd":
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.service */ "n90K");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.service */ "OlR4");




// import { CommonService } from '../common/common.service';



let AuthInterceptorService = class AuthInterceptorService {
    constructor(router, commonService, _storage) {
        this.router = router;
        this.commonService = commonService;
        this._storage = _storage;
        this.token = '';
    }
    intercept(request, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this._storage.get('_cap_rp_token')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(token => {
            // Importante: modificamos de forma inmutable, haciendo el clonado de la petición
            const headers = this.addToken(request, `${token}`);
            // Pasamos al siguiente interceptor de la cadena la petición modificada
            return next.handle(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(result => {
                const message = result.error.message;
                const color = 'danger';
                this.commonService.presentToast({ message, color });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(result);
            }));
        }));
    }
    addToken(request, token) {
        if (token) {
            let clone;
            clone = request.clone({
                setHeaders: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            return clone;
        }
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
AuthInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthInterceptorService);



/***/ }),

/***/ "gzPJ":
/*!***********************************************!*\
  !*** ./src/app/pages/soporte/soporte.page.ts ***!
  \***********************************************/
/*! exports provided: SoportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoportePage", function() { return SoportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_soporte_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./soporte.page.html */ "7VC9");
/* harmony import */ var _soporte_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./soporte.page.scss */ "Q00G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SoportePage = class SoportePage {
    constructor() { }
    ngOnInit() {
    }
};
SoportePage.ctorParameters = () => [];
SoportePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-soporte',
        template: _raw_loader_soporte_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_soporte_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SoportePage);



/***/ }),

/***/ "jk5r":
/*!***************************************************!*\
  !*** ./src/app/pages/sidemenu/sidemenu.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".appwrapper ion-menu.md ion-list {\n  padding: 20px 0;\n}\n.appwrapper ion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n.appwrapper ion-menu.md ion-list-header,\n.appwrapper ion-menu.md ion-note {\n  padding-left: 10px;\n}\n.appwrapper ion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n.appwrapper ion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n.appwrapper ion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n.appwrapper ion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n.appwrapper ion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n.appwrapper ion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n.appwrapper ion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n.appwrapper ion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n.appwrapper ion-menu.ios ion-list {\n  padding: 0px 0 0 0;\n}\n.appwrapper ion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n.appwrapper ion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n.appwrapper ion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n.appwrapper ion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n.appwrapper ion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n.appwrapper ion-menu.ios ion-list-header,\n.appwrapper ion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.appwrapper ion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n.appwrapper ion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n.appwrapper ion-item.selected {\n  --color: var(--ion-color-primary);\n}\n.appwrapper .menu-list-header {\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  flex-direction: row;\n  padding-left: 16px;\n}\n.appwrapper .profile-pic {\n  border-radius: 100px;\n  background-color: white;\n  padding: 8px;\n  font-size: 24px;\n}\n.appwrapper .heading {\n  display: flex;\n  flex-direction: column;\n  line-height: 2px;\n  margin-bottom: 5px;\n}\n.appwrapper .align-16 {\n  padding-left: 16px !important;\n}\n.appwrapper .heading-name {\n  font-size: 20px;\n}\n.appwrapper .more {\n  font-size: 26px;\n  color: white;\n}\n.appwrapper .logout {\n  display: flex;\n  justify-content: center;\n}\n.appwrapper .logout-btn {\n  --background: #fae345;\n  color: black;\n  margin-bottom: 18px;\n  text-transform: none !important;\n}\n.appwrapper .logout-icon {\n  margin-right: 5px;\n}\n.appwrapper ion-menu.md ion-list {\n  padding: 0px 0;\n}\n.appwrapper ion-menu.md ion-list#inbox-list {\n  border-bottom: unset;\n}\n.appwrapper ion-menu.md ion-item.selected {\n  --background: unset;\n}\n.appwrapper .menu-button {\n  border-radius: 100px;\n  box-shadow: 1px 2px 7px 2px #ccc;\n  margin: 10px;\n  position: absolute;\n  left: 5%;\n  top: 2%;\n  height: 40px;\n  width: 40px;\n  background: white;\n}\n.appwrapper .btn-icon {\n  color: black;\n}\n.appwrapper .backdrop {\n  width: 100%;\n  height: 100%;\n  background: #0000001f;\n  z-index: 10;\n  position: absolute;\n}\n.appwrapper .fade {\n  transition: 0.5s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n.appwrapper .fade-in {\n  transition: 0.5s linear all;\n  opacity: 1;\n}\n.appwrapper .active {\n  color: #fae345;\n}\n.appwrapper .deactive {\n  color: #616e7e;\n}\n.appwrapper .menuIcon {\n  height: 21px;\n  width: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUU7RUFDRSxlQUFBO0FBWEo7QUFjRTtFQUNFLG1CQUFBO0FBWko7QUFlRTs7RUFFRSxrQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsMkRBQUE7QUFkSjtBQWlCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBaEJKO0FBbUJFO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBcEJKO0FBdUJFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBckJKO0FBd0JFO0VBQ0Usc0RBQUE7QUF0Qko7QUF5QkU7RUFDRSwrQkFBQTtBQXZCSjtBQThCRTtFQUNFLGdCQUFBO0FBNUJKO0FBK0JFO0VBQ0Usc0JBQUE7QUE3Qko7QUFnQ0U7RUFDRSxrQkFBQTtBQTlCSjtBQWlDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUEvQko7QUFrQ0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFoQ0o7QUFtQ0U7RUFDRSwrQkFBQTtBQWpDSjtBQW9DRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBbENKO0FBcUNFO0VBQ0Usa0JBQUE7QUFuQ0o7QUFzQ0U7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQXBDSjtBQXVDRTtFQUNFLGtCQUFBO0FBckNKO0FBd0NFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUF2Q0o7QUEwQ0U7RUFDRSxpQ0FBQTtBQXhDSjtBQTJDRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUExQ0o7QUE4Q0U7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUE1Q0o7QUErQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBN0NKO0FBZ0RFO0VBQ0UsNkJBQUE7QUE5Q0o7QUFpREU7RUFDRSxlQUFBO0FBL0NKO0FBa0RFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFoREo7QUFvREU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFsREo7QUFxREU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBbkRKO0FBc0RFO0VBQ0UsaUJBQUE7QUFwREo7QUF1REU7RUFDRSxjQUFBO0FBckRKO0FBd0RFO0VBQ0Usb0JBQUE7QUF0REo7QUF5REU7RUFDRSxtQkFBQTtBQXZESjtBQTBERTtFQUNFLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF4REo7QUEyREU7RUFDRSxZQUFBO0FBekRKO0FBNERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTFESjtBQTZERTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUEzREo7QUE4REU7RUFDRSwyQkFBQTtFQUNBLFVBQUE7QUE1REo7QUFnRUU7RUFDRSxjQUFBO0FBOURKO0FBaUVFO0VBQ0UsY0FBQTtBQS9ESjtBQWtFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBaEVKIiwiZmlsZSI6InNpZGVtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHB3cmFwcGVyIHtcclxuICAvLyAgIGlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAvLyAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gIC8vICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgLy8gICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLy8gICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC8vICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAvLyB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIFxyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICBcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICBcclxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gICAgLy9jb2xvcjogIzYxNmU3ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMHB4IDAgMCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzczODQ5YTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1ub3RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICBcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICAubWVudS1saXN0LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlMzQ1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvL2p1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtcGljIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmFsaWduLTE2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGluZy1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vcmUge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9nb3V0LWJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYWUzNDU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubG9nb3V0LWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IHVuc2V0O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA3cHggMnB4ICNjY2M7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIHRvcDogMiU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWljb24ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLmJhY2tkcm9wIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDFmO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG5cclxuICAuZmFkZSB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGxpbmVhciBhbGw7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG5cclxuICAuZmFkZS1pbntcclxuICAgIHRyYW5zaXRpb246IDAuNXMgbGluZWFyIGFsbDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmYWUzNDU7XHJcbiAgfVxyXG5cclxuICAuZGVhY3RpdmUge1xyXG4gICAgY29sb3I6ICM2MTZlN2U7XHJcbiAgfVxyXG5cclxuICAubWVudUljb24ge1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgfVxyXG4gIFxyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kwd/":
/*!********************************************************!*\
  !*** ./src/app/Components/shared-components.module.ts ***!
  \********************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/map.component */ "xg16");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bottom_drawer_bottom_drawer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bottom-drawer/bottom-drawer.component */ "DeA2");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rating/rating.component */ "OU9T");







let SharedComponentsModule = class SharedComponentsModule {
};
SharedComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_bottom_drawer_bottom_drawer_component__WEBPACK_IMPORTED_MODULE_4__["BottomDrawerComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]
        ],
        exports: [_bottom_drawer_bottom_drawer_component__WEBPACK_IMPORTED_MODULE_4__["BottomDrawerComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"]]
    })
], SharedComponentsModule);



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "N+K7");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "n90K");





let AuthService = class AuthService {
    constructor(_storage, _httpService) {
        this._storage = _storage;
        this._httpService = _httpService;
        this.$auth = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @description Inicio de sesión a la app
     * @param data Objeto { email, password }
     * @returns
     */
    login(data) {
        return this._httpService.post('/login/user', data);
    }
    register(data) {
        return this._httpService.post('/users', data);
    }
    isLoggedIn() {
        return this._storage.get('_cap_rp_token') ? true : false;
    }
    /**
     * @description Almacenamiendo de data de login google, enviando objeto {email, google_id}
     * @param Email del usuario
     * @param GoogleId el id proporcionado por el login de google
     * @returns
     */
    googleLogin(data) {
        return this._httpService.post('', data);
    }
    /**
     * @description Genera el stream de eventos usando next() para crear el evento
     */
    AuthSubject(user) {
        this.$auth.next(user);
        this.$auth.complete();
    }
    /**
     * @description Creación del observer mediante el método asObserver(), el cual sera consumido por el componente
     * @returns Observable
     */
    authObserver() {
        return this.$auth.asObservable();
    }
};
AuthService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");



const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let StorageService = class StorageService {
    constructor() { }
    /**
     * @description Almacena la data en el localStorage
     * @param key Identificador del valor a almacenar
     * @param value Valor a almacenar
     */
    store(key, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.set({
                key, value: JSON.stringify(value)
            });
        });
    }
    /**
     * @description Recupera la data almacenada en el localStorage
     * @param key Identificador del dato que se desea recuperar
     * @returns value { any }
     */
    get(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield Storage.get({ key });
            return JSON.parse(item.value);
        });
    }
    /**
     * @description Elimina la data almacenada según el identificador
     * @param key Identificador de la data que se desea eliminar
     */
    removeStorageItem(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.remove({ key });
        });
    }
    /**
     * @description Elimina toda la data almacenada en el localStorage
     */
    clear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.clear();
        });
    }
};
StorageService.ctorParameters = () => [];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "olBi":
/*!***********************************************************************!*\
  !*** ./src/app/Components/bottom-drawer/bottom-drawer.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bottom-drawer {\n  position: absolute;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  width: 100%;\n  height: 88vh;\n  z-index: 11;\n  background: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.bottom-position-max {\n  bottom: calc(-0vh + env(safe-area-inset-bottom));\n}\n\n.bottom-position-min {\n  bottom: calc(-69vh + env(safe-area-inset-bottom));\n}\n\n.drawer-pull {\n  background: #cccccc;\n  height: 4px;\n  width: 60px;\n}\n\n.backdrop {\n  width: 100%;\n  height: 100%;\n  background: #0000001f;\n  z-index: 10;\n  position: absolute;\n}\n\n.fade {\n  transition: 0.5s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n\n.fade-in {\n  transition: 0.5s linear all;\n  opacity: 1;\n}\n\n.searchField {\n  background: #efedec;\n  border-radius: 8px;\n  height: 50px;\n  margin-bottom: 20px;\n}\n\n.listImg {\n  width: 42px;\n  height: 42px;\n  margin-right: 18px;\n}\n\n.timeText {\n  font-size: 12px;\n  color: gray;\n  margin-top: 3px;\n}\n\n.content-container {\n  height: 100%;\n  padding-bottom: 15vh;\n}\n\n.itemWrapper {\n  --inner-border-width: 0;\n  margin-top: 18px;\n  display: flex;\n  line-height: initial;\n  align-items: center;\n}\n\n.minH {\n  height: 16px;\n}\n\n.scan {\n  height: 20px;\n}\n\n.confirmRutas {\n  background: #fae345;\n  border-radius: 8px;\n  color: black;\n  text-transform: none;\n  height: 46px;\n  text-transform: initial;\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.clock {\n  height: 18px;\n  margin-right: 5px;\n}\n\n.item-native {\n  padding-inline-start: unset;\n  padding-inline-end: unset;\n}\n\n.driverWrapper {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n}\n\n.driverOverview {\n  display: flex;\n  flex-direction: row;\n}\n\n.dp {\n  width: 55px;\n  height: 55px;\n  align-self: center;\n  margin-right: 10px;\n}\n\n.driverDetail {\n  display: flex;\n  flex-direction: column;\n  line-height: normal;\n}\n\n.drivername {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.driverPlaceDetail {\n  display: flex;\n  flex-direction: row;\n  font-size: 16px;\n}\n\n.placePadding {\n  padding-right: 6px;\n}\n\n.confirmDriverBtn {\n  margin-top: 3%;\n  --background: #fae345;\n  color: black;\n  --border-radius: 7px;\n}\n\n.setAtBottom {\n  margin-top: 10vh;\n}\n\n.expandedDetailWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.expandedDp {\n  height: 150px;\n}\n\n.expandedSelectedItem {\n  display: flex;\n  flex-direction: row;\n  width: 50%;\n  font-size: 14px;\n  text-align: center;\n}\n\n.equalLength {\n  display: flex;\n  flex: 1;\n  padding: 5px;\n  align-items: center;\n}\n\n.starImg {\n  height: 15px;\n  padding-left: 5px;\n}\n\n.expanded-driverName {\n  border-right: gray 1px solid;\n}\n\n.flow-4-btn-1 {\n  background-color: #fae345;\n  color: black;\n  text-transform: none !important;\n}\n\n.flow-4-btn-2 {\n  background-color: #ebebeb;\n  color: #8f8f8f;\n  text-transform: none !important;\n}\n\n.btn-select {\n  border: 1px solid #ccc;\n  display: flex;\n  flex: 1;\n  margin: 16px 5px;\n  border-radius: 8px;\n}\n\n.btn35 {\n  width: 38%;\n  text-transform: none !important;\n}\n\n.emptyRow {\n  height: 10px;\n  width: 10px;\n}\n\n.rowView {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.imgWrapper {\n  width: 18%;\n}\n\n.rowWrapper {\n  background: #f4f4f4;\n  border-radius: 15%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-top: 8%;\n  padding-bottom: 10%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.extraShadow {\n  box-shadow: 1px 2px 1px 1px #ccc;\n  margin-bottom: 3%;\n  width: 99%;\n  border-radius: 7px;\n  position: sticky;\n  background: white;\n  height: 9vh;\n  top: 0px;\n}\n\n.totalSeats {\n  position: sticky;\n  bottom: 0%;\n  background: white;\n  border-top: 1px solid gray;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bottomSeatWrapper {\n  width: 20%;\n  box-shadow: 2px 4px 6px grey;\n  border-radius: 8%;\n  margin-right: 7px;\n  margin-bottom: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 5px;\n  position: relative;\n}\n\n.seatBtn {\n  width: 90%;\n  --background: #fae345;\n  color: black;\n  --border-radius: 7px;\n  text-transform: initial;\n}\n\n.totalSeatCount {\n  align-self: flex-end;\n  width: 60%;\n  background: gainsboro;\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  font-size: 12px;\n}\n\n.smallSeat {\n  height: 4vh;\n}\n\n.smallSeatWrapper {\n  height: 14vh;\n}\n\n.seatType {\n  font-size: 10px;\n  line-height: normal;\n}\n\n.noMargin {\n  margin-right: unset;\n}\n\n.scanBlock {\n  height: 45vh;\n  margin: 20px;\n  padding: 18px;\n}\n\n.vdo {\n  height: 35vh;\n  border-radius: 20px;\n}\n\n.car-loc-btn {\n  position: absolute;\n  top: -8%;\n  right: 3%;\n  width: 40px;\n  height: 40px;\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 34px;\n  border-radius: 100px;\n}\n\n.td, th {\n  width: 70px;\n}\n\n.scannerImg {\n  height: 40vh;\n}\n\n.brokenTxt {\n  line-break: anywhere;\n}\n\n.cardInDrawer {\n  width: 80%;\n}\n\n.seatContentWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.seatImg {\n  padding: 2px;\n}\n\n.extendedHeight {\n  height: 16vh;\n}\n\n.borderRad {\n  border-radius: 8px;\n}\n\n.tbl {\n  border-collapse: separate;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib3R0b20tZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFHQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0UsZ0RBQUE7QUFIRjs7QUFNQTtFQUNFLGlEQUFBO0FBSEY7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSEo7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0U7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0U7RUFDRSwyQkFBQTtFQUNBLFVBQUE7QUFKSjs7QUFRRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFFO0VBRUUsWUFBQTtFQUNBLG9CQUFBO0FBTko7O0FBU0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTRTtFQUNFLFlBQUE7QUFOSjs7QUFTRTtFQUNFLFlBQUE7QUFOSjs7QUFTRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFTRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQU5KOztBQVNFO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtBQU5KOztBQVNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFOSjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0U7RUFDRSxrQkFBQTtBQU5KOztBQVNFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBTko7O0FBU0U7RUFDRSxnQkFBQTtBQU5KOztBQVNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTRTtFQUNFLGFBQUE7QUFOSjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFTRTtFQUVFLDRCQUFBO0FBUEo7O0FBVUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQVBKOztBQVVFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7QUFQSjs7QUFVRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUU7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7QUFQSjs7QUFTRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU5KOztBQVNFO0VBQ0UsVUFBQTtBQU5KOztBQVNFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTRTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFOSjs7QUFTRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0U7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0U7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQU5KOztBQVNFO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7QUFOSjs7QUFTRTtFQUNFLFdBQUE7QUFOSjs7QUFTRTtFQUNFLFlBQUE7QUFOSjs7QUFTRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNFO0VBQ0ksbUJBQUE7QUFOTjs7QUFTRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtBQVBKOztBQVVFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBVUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBUEo7O0FBVUU7RUFDRSxXQUFBO0FBUEo7O0FBVUU7RUFDRSxZQUFBO0FBUEo7O0FBVUU7RUFDRSxvQkFBQTtBQVBKOztBQVVFO0VBQ0UsVUFBQTtBQVBKOztBQVVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVRTtFQUNFLFlBQUE7QUFQSjs7QUFVRTtFQUNFLFlBQUE7QUFQSjs7QUFVRTtFQUNFLGtCQUFBO0FBUEo7O0FBVUU7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFQSiIsImZpbGUiOiJib3R0b20tZHJhd2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uYm90dG9tLWRyYXdlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDg4dmg7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYm90dG9tLXBvc2l0aW9uLW1heCB7XHJcbiAgYm90dG9tOiBjYWxjKC0wdmggKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xyXG59XHJcblxyXG4uYm90dG9tLXBvc2l0aW9uLW1pbiB7XHJcbiAgYm90dG9tOiBjYWxjKC02OXZoICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcclxufVxyXG5cclxuLmRyYXdlci1wdWxsIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMWY7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIC5mYWRlIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgbGluZWFyIGFsbDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4gIC5mYWRlLWlue1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXIgYWxsO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnNlYXJjaEZpZWxke1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWRlYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubGlzdEltZ3tcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpbWVUZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1jb250YWluZXJ7XHJcbiAgICAvLyBoZWlnaHQ6IDc1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXZoO1xyXG4gIH1cclxuXHJcbiAgLml0ZW1XcmFwcGVye1xyXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5taW5IIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICB9XHJcblxyXG4gIC5zY2FuIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIC5jb25maXJtUnV0YXMge1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZTM0NTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNsb2NrIHtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tbmF0aXZlIHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB1bnNldDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAuZHJpdmVyV3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmRyaXZlck92ZXJ2aWV3e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG5cclxuICAuZHB7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5kcml2ZXJEZXRhaWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuZHJpdmVybmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLmRyaXZlclBsYWNlRGV0YWlse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAucGxhY2VQYWRkaW5ne1xyXG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbmZpcm1Ecml2ZXJCdG57XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZhZTM0NTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIH1cclxuXHJcbiAgLnNldEF0Qm90dG9te1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICB9XHJcblxyXG4gIC5leHBhbmRlZERldGFpbFdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZXhwYW5kZWREcHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAuZXhwYW5kZWRTZWxlY3RlZEl0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZXF1YWxMZW5ndGh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc3RhckltZ3tcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4cGFuZGVkLWRyaXZlck5hbWV7XHJcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IGdyYXkgMXB4IHNvbGlkO1xyXG4gIH1cclxuXHJcbiAgLmZsb3ctNC1idG4tMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlMzQ1O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZsb3ctNC1idG4tMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gICAgY29sb3I6ICM4ZjhmOGY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRuLXNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDE2cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bjM1IHtcclxuICAgIHdpZHRoOiAzOCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5lbXB0eVJvd3tcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJvd1ZpZXd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmltZ1dyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gIH1cclxuXHJcbiAgLnJvd1dyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZy10b3A6IDglO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZXh0cmFTaGFkb3d7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAxcHggI2NjYztcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogOXZoO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxuICAudG90YWxTZWF0c3tcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbVNlYXRXcmFwcGVye1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNnB4IGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4JTtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuc2VhdEJ0bntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYWUzNDU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLnRvdGFsU2VhdENvdW50e1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsU2VhdHtcclxuICAgIGhlaWdodDogNHZoO1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsU2VhdFdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDE0dmg7XHJcbiAgfVxyXG5cclxuICAuc2VhdFR5cGV7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgLm5vTWFyZ2lue1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLnNjYW5CbG9jayB7XHJcbiAgICBoZWlnaHQ6IDQ1dmg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAudmRvIHtcclxuICAgIGhlaWdodDogMzV2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyLWxvYy1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtOCU7XHJcbiAgICByaWdodDogMyU7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWUzNDU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAudGQsIHRoIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNjYW5uZXJJbWcge1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gIH1cclxuXHJcbiAgLmJyb2tlblR4dHtcclxuICAgIGxpbmUtYnJlYWs6IGFueXdoZXJlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmRJbkRyYXdlcntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuICAuc2VhdENvbnRlbnRXcmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNlYXRJbWd7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICAuZXh0ZW5kZWRIZWlnaHR7XHJcbiAgICBoZWlnaHQ6IDE2dmg7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyUmFkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gIC50Ymwge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcblxyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let UserService = class UserService {
    constructor(platform) {
        this.platform = platform;
        this.rutasFlow = 0;
        this.rutasBarEdit = false;
    }
    subscribeBackHandler() {
        this.platform.backButton.subscribe();
    }
    unsubscribeBackHandler() {
        this.platform.backButton.unsubscribe();
    }
};
UserService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "txYf":
/*!*********************************************************!*\
  !*** ./src/app/pages/soporte/soporte-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SoportePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoportePageRoutingModule", function() { return SoportePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _soporte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./soporte.page */ "gzPJ");




const routes = [
    {
        path: '',
        component: _soporte_page__WEBPACK_IMPORTED_MODULE_3__["SoportePage"]
    }
];
let SoportePageRoutingModule = class SoportePageRoutingModule {
};
SoportePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SoportePageRoutingModule);



/***/ }),

/***/ "uE9B":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sidemenu/sidemenu.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"appwrapper\">\r\n  <!-- <ion-split-pane> -->\r\n  <ion-menu contentId=\"home\" type=\"overlay\">\r\n    <ion-content class=\"content\">\r\n      <div class=\"d-flex flex-column h-100 justify-content-between\">\r\n        <div>\r\n          <ion-list id=\"inbox-list\">\r\n            <div class=\"menu-list-header\">\r\n              <ng-container *ngIf=\"user.imageUrl; else elseTemplate\">\r\n                <ion-avatar>\r\n                  <img [src]=\"user.imageUrl\">\r\n                </ion-avatar>\r\n              </ng-container>\r\n              <ng-template #elseTemplate>\r\n                <span class=\"profile-pic\">{{ abrv | uppercase }}</span>\r\n              </ng-template>\r\n\r\n              <div class=\"heading\">\r\n                <ion-note class=\"align-16\">Hola</ion-note>\r\n                <span class=\"align-16 heading-name\">{{ user.name }}</span>\r\n              </div>\r\n\r\n              <ion-icon class=\"more align-16\" name=\"ellipsis-horizontal\"></ion-icon>\r\n            </div>\r\n\r\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n              <ion-item routerDirection=\"root\" (click)=\"menuOptionClickHandle(p, i)\" lines=\"none\" detail=\"false\">\r\n                <img class=\"px-3 menuIcon\" [src]=\"p.icon\" />\r\n                <!-- <ion-icon [ngClass] = \"activeRoute === i ? 'active' : 'deactive'\" slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon> -->\r\n                <ion-label [ngClass]=\"activeRoute === i ? 'active' : 'deactive'\">{{ p.title }}</ion-label>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n          </ion-list>\r\n        </div>\r\n\r\n        <div class=\"logout\">\r\n          <ion-button class=\"logout-btn\" (click)=\"logout()\">\r\n            <ion-icon class=\"logout-icon\" name=\"log-out-outline\"></ion-icon>Cerrar sesión\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-buttons slot=\"start\" class=\"menu-button\">\r\n    <ion-menu-button class=\"btn-icon\"></ion-menu-button>\r\n  </ion-buttons>\r\n\r\n  <div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\" tappable (click)=\"bottomDrawer.toggleDrawer()\">\r\n  </div>\r\n\r\n  <!-- <app-bottom-drawer [component]=\"drawerVar\" (openStateChanged) = \"toggleBackdrop($event)\" #bottomDrawer></app-bottom-drawer> -->\r\n\r\n  <ion-router-outlet id=\"home\"></ion-router-outlet>\r\n  <!-- </ion-split-pane> -->\r\n</div>");

/***/ }),

/***/ "uMEU":
/*!***************************************************!*\
  !*** ./src/app/Components/map/map.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 77%;\n}\n\n.addressDetails {\n  width: 90%;\n  height: 70px;\n  position: fixed;\n  top: 75px;\n  z-index: 1;\n  left: 20px;\n  border-radius: 8px;\n}\n\n.listImg {\n  height: 42px;\n  width: 42px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzclOyBcclxufVxyXG5cclxuLmFkZHJlc3NEZXRhaWxze1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNzVweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ubGlzdEltZyB7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "vPJf":
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "9scE");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'initial',
        pathMatch: 'full'
    },
    {
        path: 'initial',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-initial-initial-module */ "pages-initial-initial-module").then(__webpack_require__.bind(null, /*! ./pages/initial/initial.module */ "dfEL")).then(m => m.InitialPageModule)
    },
    {
        path: 'signin',
        loadChildren: () => Promise.all(/*! import() | pages-authentication-authentication-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ./pages/authentication/authentication.module */ "CAGU")).then(m => m.AuthenticationPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() | pages-forgot-password-forgot-password-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./pages/forgot-password/forgot-password.module */ "7CEM")).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'sidemenu',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/sidemenu/sidemenu.module */ "SyVg")).then(m => m.SidemenuPageModule)
    },
    {
        path: 'soporte',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/soporte/soporte.module */ "y+Ir")).then(m => m.SoportePageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | pages-register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-register-register-module")]).then(__webpack_require__.bind(null, /*! ./pages/register/register.module */ "fhSy")).then(m => m.RegisterPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "w7Bd":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/map/map.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #map id='map'></div>\r\n");

/***/ }),

/***/ "xg16":
/*!*************************************************!*\
  !*** ./src/app/Components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map.component.html */ "w7Bd");
/* harmony import */ var _map_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.component.scss */ "uMEU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");






const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let MapComponent = class MapComponent {
    constructor(userService) {
        this.userService = userService;
        this.markers = [];
        this.currLat = 20.7766443;
        this.currLng = 12.3288527;
        this.watch = null;
    }
    ionViewWillEnter() {
        this.loadMap();
    }
    ionViewDidLoad() {
    }
    loadMap() {
        this.watch = Geolocation.watchPosition({}, (position, err) => {
            console.log('position', position);
            if (position) {
                this.currLat = position.coords.latitude;
                this.currLng = position.coords.longitude;
            }
            const latLng = new google.maps.LatLng(this.currLat, this.currLng);
            const mapOptions = {
                center: latLng,
                zoom: 7,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            console.log('latLng', latLng);
            this.updateMap([latLng]);
        });
    }
    updateMap(locations) {
        this.markers.map(marker => marker.setMap(null));
        this.markers = [];
        for (const loc of locations) {
            const marker = new google.maps.Marker({
                position: loc,
                animation: google.maps.Animation.DROP,
                map: this.map
            });
            this.markers.push(marker);
        }
    }
    ngOnInit() {
        let dismissElement;
        setInterval(() => {
            dismissElement = document.getElementsByClassName('dismissButton')[0];
            if (dismissElement) {
                dismissElement.click();
                clearInterval();
            }
        }, 100);
    }
};
MapComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
MapComponent.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map',] }]
};
MapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map',
        template: _raw_loader_map_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapComponent);



/***/ }),

/***/ "y+Ir":
/*!*************************************************!*\
  !*** ./src/app/pages/soporte/soporte.module.ts ***!
  \*************************************************/
/*! exports provided: SoportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoportePageModule", function() { return SoportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _soporte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./soporte-routing.module */ "txYf");
/* harmony import */ var _soporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soporte.page */ "gzPJ");







let SoportePageModule = class SoportePageModule {
};
SoportePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _soporte_routing_module__WEBPACK_IMPORTED_MODULE_5__["SoportePageRoutingModule"]
        ],
        declarations: [_soporte_page__WEBPACK_IMPORTED_MODULE_6__["SoportePage"]]
    })
], SoportePageModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".appwrapper ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n.appwrapper ion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0EsMkVBQUE7QUFBRjtBQUdBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFERiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwd3JhcHBlciB7XHJcbiAgaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuLy8gICBwYWRkaW5nOiAyMHB4IDA7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbi8vIGlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbi8vICAgZm9udC1zaXplOiAyMnB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuLy8gICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5cclxuLy8gICBjb2xvcjogIzc1NzU3NTtcclxuXHJcbi8vICAgbWluLWhlaWdodDogMjZweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4vLyAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuLy8gICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4vLyAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxuLy8gfVxyXG5cclxuLy8gaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4vLyAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuLy8gICBjb2xvcjogIzYxNmU3ZTtcclxuLy8gfVxyXG5cclxuLy8gaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xyXG4vLyAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbi8vICAgcGFkZGluZzogMHB4IDAgMCAwO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XHJcbi8vICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4vLyAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbi8vICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4vLyAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbi8vICAgZm9udC1zaXplOiAyNHB4O1xyXG4vLyAgIGNvbG9yOiAjNzM4NDlhO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuLy8gICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXHJcbi8vIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tbm90ZSB7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbi8vICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4vLyB9XHJcblxyXG4vLyBpb24taXRlbS5zZWxlY3RlZCB7XHJcbi8vICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyB9XHJcblxyXG4vLyAubWVudS1saXN0LWhlYWRlciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZTM0NTtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIFxyXG4vLyB9XHJcblxyXG4vLyAucHJvZmlsZS1waWMge1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyAgIHBhZGRpbmc6IDhweDtcclxuLy8gICBmb250LXNpemU6IDI0cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5oZWFkaW5nIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgbGluZS1oZWlnaHQ6IDJweDtcclxuLy8gICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5hbGlnbi0xNiB7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5oZWFkaW5nLW5hbWUge1xyXG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLm1vcmUge1xyXG4vLyAgIGZvbnQtc2l6ZTogMjZweDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbi8vIH1cclxuXHJcbi8vIC5sb2dvdXQge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5sb2dvdXQtYnRuIHtcclxuLy8gICAtLWJhY2tncm91bmQ6ICNmYWUzNDU7XHJcbi8vICAgY29sb3I6IGJsYWNrO1xyXG4vLyAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5jb250YWluZXIge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyB9XHJcblxyXG4vLyAubG9nb3V0LWljb24ge1xyXG4vLyAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbi8vICAgcGFkZGluZzogMHB4IDA7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4vLyAgIGJvcmRlci1ib3R0b206IHVuc2V0O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbi8vICAgLS1iYWNrZ3JvdW5kOiB1bnNldDtcclxuLy8gfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map