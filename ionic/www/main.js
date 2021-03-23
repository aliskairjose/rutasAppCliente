(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aponiar14/Documents/rutas-app-ionic/rutas-app/src/main.ts */"zUnb");


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
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 77%;\n}\n\n.addressDetails {\n  width: 90%;\n  height: 70px;\n  position: fixed;\n  top: 12%;\n  z-index: 1;\n  left: 5%;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 2px 4px 6px #ccc;\n}\n\n.listImg {\n  height: 42px;\n  width: 42px;\n  margin: 10px;\n}\n\n.rutasEdit {\n  width: 90%;\n  /* height: 70px; */\n  position: absolute;\n  top: 14%;\n  z-index: 1;\n  left: 5%;\n  border-radius: 8px;\n}\n\n.editInp {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 2px 4px 6px #ccc;\n}\n\n.currentLoc {\n  height: 35px;\n  width: 35px;\n  border-radius: 100px;\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n}\n\n.destLoc {\n  height: 20px;\n  width: 20px;\n  border-radius: 100px;\n  background-color: black;\n}\n\n.locIcon {\n  height: 35px;\n  width: 35px;\n  font-size: 35px;\n  margin-right: 10px;\n}\n\n.currentLocation {\n  width: 35px;\n  height: 35px;\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 34px;\n  position: absolute;\n  bottom: -44px;\n  right: 2px;\n  border-radius: 100px;\n}\n\n.icon {\n  position: absolute;\n  right: 10px;\n  font-size: 24px;\n  position: absolute;\n  right: 10px;\n  display: flex;\n  font-size: 24px;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKIiwiZmlsZSI6ImluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNtYXB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3NyU7IFxufVxuXG4uYWRkcmVzc0RldGFpbHN7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTIlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogNSU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNnB4ICNjY2M7XG59XG5cbi5saXN0SW1nIHtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4ucnV0YXNFZGl0IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIC8qIGhlaWdodDogNzBweDsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNCU7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5lZGl0SW5wIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA2cHggI2NjYztcbiAgICAvL21hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jdXJyZW50TG9jIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZTM0NTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZGVzdExvYyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubG9jSWNvbiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jdXJyZW50TG9jYXRpb24ge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlMzQ1O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTQ0cHg7XG4gICAgcmlnaHQ6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "7VC9":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/soporte/soporte.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"soporteWrapper\">\n  <ion-title class=\"soporteTitle flex-grow-1\">Soporte/Ayuda</ion-title>\n  <p class=\"soportePara flex-grow-2\">A continuacion realice sus preguntas y/o quejas, nuestro equipo se encargara de responderle a la brevedad posible</p>\n  <ion-note class=\"soporteNote flex-grow-1\">Realice su pregunta</ion-note>\n  <ion-input class=\"soporteIp flex-grow-1\" type=\"text\"></ion-input>\n  <div class=\"soporteBtnWrapper flex-grow-3\"><ion-button class=\"soporteBtn\">Enviar</ion-button></div>\n</div>\n");

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
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






// import { Storage } from '@ionic/storage';
// import { filter } from 'rxjs/operators';
const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
let InicioPage = class InicioPage {
    // currentMapTrack = null;
    // isTracking = false;
    // trackedRoute = [];
    // previousTracks = [];
    // postionSubscription: Subscription;
    constructor(userService) {
        this.userService = userService;
        this.markers = [];
        this.currLat = 20.7766443;
        this.currLng = 12.3288527;
        this.watch = null;
        this.trackMarker = null;
        this.watchId = null;
        this.addr = '';
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
        navigator.geolocation.getCurrentPosition((position) => {
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
            this.updateMap([latLng], '');
        });
    }
    updateMap(locations, extraInfo) {
        this.markers.map(marker => marker.setMap(null));
        this.markers = [];
        for (const loc of locations) {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ latLng: loc }, (results, status) => {
                var _a, _b;
                if (status === google.maps.GeocoderStatus.OK) {
                    console.log('address ==>>', results[0].address_components);
                    this.addr = (_b = (_a = results[0].address_components.filter((e) => {
                        return e.types.includes('sublocality_level_1');
                    })) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.long_name;
                    const marker = new google.maps.Marker({
                        position: loc,
                        animation: google.maps.Animation.DROP,
                        map: this.map,
                        icon: (locations.length === 1) ? './../../../assets/new_marker.png' : './../../../assets/location_marker.png'
                    });
                    const iw = new google.maps.InfoWindow({
                        content: this === null || this === void 0 ? void 0 : this.addr
                    });
                    if (extraInfo !== 'noTooltip' && this.addr) {
                        iw.open(this.map, marker);
                    }
                    this.markers.push(marker);
                }
                else {
                    console.log('error for getting address', status);
                }
            });
        }
    }
    startTracking() {
        console.log('start tracking ====>>');
        this.watchId = navigator.geolocation.watchPosition((position) => {
            var _a;
            if (position) {
                this.currLat = position.coords.latitude;
                this.currLng = position.coords.longitude;
            }
            const loc = new google.maps.LatLng(this.currLat, this.currLng);
            (_a = this.trackMarker) === null || _a === void 0 ? void 0 : _a.setMap(null);
            this.trackMarker = new google.maps.Marker({
                position: loc,
                map: this.map,
                icon: {
                    scaledSize: new google.maps.Size(25, 25),
                    url: './../../../assets/bus.png'
                }
            });
        });
    }
    bottomDrawerEvent(event) {
        if (event.type === 'item-selected') {
            this.handleItemSelect(event.data);
        }
        else if (event.type === 'scan-success') {
            console.log('start tracking');
            this.startTracking();
        }
        else if (event.type === 'stop-track') {
            this.stopTracking();
        }
    }
    stopTracking() {
        navigator.geolocation.clearWatch(this.watchId);
        this.trackMarker.setMap(null);
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
        const directionsRenderer = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeColor: 'black'
            },
            suppressMarkers: true
        });
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
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
InicioPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['map',] }]
};
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
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
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "gcOT");











const { Keyboard } = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Plugins"];
// import { DrawerState } from 'ion-bottom-drawer';
let BottomDrawerComponent = class BottomDrawerComponent {
    constructor(plt, gestureCtlr, changeDetectorRef, userService, loadingCtrl, router, nativePageTransitions, navctl) {
        this.plt = plt;
        this.gestureCtlr = gestureCtlr;
        this.changeDetectorRef = changeDetectorRef;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.nativePageTransitions = nativePageTransitions;
        this.navctl = navctl;
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
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bottomDrawerElement = this.bottomDrawer.nativeElement;
            // if(userService.rutasFlow == 2 )
            // this.videoElement = this.video.nativeElement;
            console.log('ngafter');
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
                    if (ev.deltaY < 0)
                        return;
                    // tslint:disable-next-line:curly
                    if (ev.deltaY > 0)
                        return;
                    this.bottomDrawerElement.style.transform = `translateY(${ev.deltaY}px)`;
                },
                onEnd: ev => {
                    if (ev.deltaY < -50) {
                        // tslint:disable-next-line:quotemark
                        this.bottomDrawerElement.style.transition = ".4s ease-out";
                        this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px)`;
                        this.openState.emit(true);
                        this.isOpen = true;
                    }
                    else if (ev.deltaY > 50) {
                        if (this.userService.rutasFlow === 5) {
                            this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight / 2.56}px`;
                        }
                        else {
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
        });
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
        else {
            this.bottomDrawerElement.style.transition = '.4s ease-out';
            if (this.userService.rutasFlow === 5) {
                this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight / 2.56}px`;
            }
            else {
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
    startScan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // tslint:disable-next-line:no-unused-expression
            this, this.showScan = false;
            this.bottomDrawerElement = this.bottomDrawer.nativeElement;
            ++this.userService.rutasFlow;
            this.bottomDrawerElement.style.transition = '.4s ease-out';
            this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px`;
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
                    this.emitEvent.emit({
                        type: 'scan-success'
                    });
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
        this.scanActive = false;
    }
    scannerOn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({});
            yield this.loading.present();
            this.showScan = true;
            this.stream = yield navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            // setTimeout(async () => {
            this.videoElement = this.video.nativeElement;
            this.canvasElement = this.canvas.nativeElement;
            this.videoElement.srcObject = this.stream;
            this.videoElement.setAttribute('playsinline', true);
            this.videoElement.play();
            requestAnimationFrame(this.scan.bind(this));
        });
    }
    goToFeedback() {
        this.emitEvent.emit({
            type: 'stop-track'
        });
        this.router.navigateByUrl('/sidemenu/Feedback');
        const options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
        };
        this.nativePageTransitions.slide(options);
        this.navctl.navigateRoot('/sidemenu/Feedback');
        // this.router.navigateByUrl('/sidemenu/Feedback');
    }
    editRoute() {
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
    trackScroll(ele) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.seatElement = ele;
            this.seatGesture = yield this.gestureCtlr.create({
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
        });
    }
};
BottomDrawerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["GestureController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_8__["NativePageTransitions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
BottomDrawerComponent.propDecorators = {
    bottomDrawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['bottomDrawer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },] }],
    seat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['seat',] }],
    editRutas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['editRutas',] }],
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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content [ngSwitch] = \"feedbackFlow\" class=\"feedbackContainer\">\n\n  <div *ngSwitchCase = 0 class=\"d-flex align-items-center justify-content-center flex-column flex-grow-1 h-100\">\n    <span class=\"heading mb-3\">i Has llegado a tu destino!</span>\n\n    <span class=\"mb-2\">Callifica al conductor</span>\n\n    <div class=\"d-flex mb-3\">\n      <img class=\"proPic mx-3\" src=\"../../../assets/prueba 1Recurso 55.png\"/>\n      <div class=\"d-flex flex-column justify-content-center\">\n        <ion-note>Luis Durain</ion-note>\n        <app-rating></app-rating>\n        \n      </div>\n    </div>\n\n    <div class=\"d-flex flex-column justify-content-center mb-3\">\n      <span>Callifica la unidad</span>\n      <app-rating></app-rating>\n    </div>\n\n    <div class=\"d-flex align-items-center  p-1 textWrapper mb-3\">\n      <img class=\"logo mx-2\" src=\"./../../../assets/route.png\" />\n      <div class=\"\">\n        <div class=\"listName\">{{userService.rutasData?.name}}</div>\n        <ion-note>{{userService.rutasData?.timeRange}}</ion-note>\n      </div>\n    </div>\n\n    <span>Algun comentario?</span>\n\n    <div>\n      <label class=\"feedbackInpLabel\">Describe tu experiencia</label>\n      <ion-input class=\"feedbackInp\" ></ion-input>\n    </div>\n      \n   \n\n    <ion-button fill=\"clear\" (click) = \"clickHandler(0)\" color=\"clear\" class=\"btn\">Enviar</ion-button>\n  </div>\n\n  <div *ngSwitchCase = 1 class=\"d-flex align-items-center justify-content-center flex-column flex-grow-1 h-100\">\n    <span class=\"boldTxt\">Gracias por vaijar con nosotros</span>\n    <ion-note>! Te eperamos pronto !</ion-note>\n\n    <ion-button fill=\"clear\" (click) = \"clickHandler(1)\" color=\"clear\" class=\"btn2\"><ion-icon class=\"logout-icon mx-1\" name=\"log-out-outline\" ></ion-icon >Saliar</ion-button>\n  </div>\n</ion-content>\n");

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

/***/ "OurG":
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feedbackContainer {\n  --background: #fae345;\n}\n\n.heading {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.proPic {\n  border-radius: 100px;\n  height: 65px;\n}\n\n.btn {\n  background: white;\n  padding: 1px;\n  position: absolute;\n  bottom: 10px;\n  font-size: 12px;\n  text-transform: none !important;\n  border-radius: 8px;\n}\n\n.btn2 {\n  background: white;\n  padding: 1px;\n  color: black;\n  margin-top: 18px;\n  font-size: 12px;\n  text-transform: none !important;\n  border-radius: 8px;\n}\n\n.feedbackInp {\n  border-bottom: 1px solid black;\n}\n\n.feedbackInpLabel {\n  font-size: 12px;\n}\n\n.logo {\n  height: 40px;\n  width: 40px;\n}\n\n.textWrapper {\n  background-color: white;\n  width: 75%;\n  border-radius: 8px;\n  box-shadow: 2px 2px 6px 1px #ccc;\n}\n\n.boldTxt {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZlZWRiYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBUUE7RUFDSSw4QkFBQTtBQUxKOztBQVFBO0VBQ0ksZUFBQTtBQUxKOztBQVFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFMSjs7QUFRQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFMSjs7QUFRQTtFQUNJLGlCQUFBO0FBTEoiLCJmaWxlIjoiZmVlZGJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWRiYWNrQ29udGFpbmVyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmYWUzNDU7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9QaWMge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGhlaWdodDogNjVweDtcbn1cblxuLmJ0biB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5idG4yIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi8vIC5mZWVkYmFja0lucCB7XG4vLyAgICAgYmFja2dyb3VuZDogdW5zZXQ7XG4vLyAgICAgYm9yZGVyOiB1bnNldDtcbi8vICAgICBib3JkZXItYm90dG9tOiBibGFjayAxcHggc29saWQ7XG4vLyB9XG5cbi5mZWVkYmFja0lucCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZmVlZGJhY2tJbnBMYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4udGV4dFdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDFweCAjY2NjO1xufVxuXG4uYm9sZFR4dCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "Q00G":
/*!*************************************************!*\
  !*** ./src/app/pages/soporte/soporte.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".soporteWrapper {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n}\n\n.soporteTitle {\n  display: flex;\n  place-items: flex-start;\n  padding-top: 8%;\n}\n\n.soportePara {\n  text-align: center;\n  width: 80%;\n  color: grey;\n}\n\n.soporteNote {\n  display: flex;\n  align-self: flex-start;\n  padding-left: 10%;\n  align-items: flex-end;\n}\n\n.soporteIp {\n  border-bottom: black 1px solid;\n  width: 80%;\n}\n\n.soporteBtn {\n  --background: #fae345;\n  color: black;\n}\n\n.soporteBtnWrapper {\n  flex: 3;\n  padding-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvcG9ydGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzb3BvcnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb3BvcnRlV3JhcHBlcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zb3BvcnRlVGl0bGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLXRvcDogOCU7XG59XG5cbi5zb3BvcnRlUGFyYXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLnNvcG9ydGVOb3Rle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5zb3BvcnRlSXB7XG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgMXB4IHNvbGlkO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5zb3BvcnRlQnRue1xuICAgIC0tYmFja2dyb3VuZDogI2ZhZTM0NTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5zb3BvcnRlQnRuV3JhcHBlcntcbiAgICBmbGV4OiAzO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG59Il19 */");

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
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let SidemenuPage = class SidemenuPage {
    constructor(changeDetectorRef, router, nativePageTransitions, navctl) {
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.nativePageTransitions = nativePageTransitions;
        this.navctl = navctl;
        this.backdropVisible = false;
        this.drawerVar = 'Inicio';
        this.activeRoute = '/sidemenu/Inicio';
        this.addressClicked = 0;
        this.appPages = [
            { title: 'Inicio', url: '/sidemenu/Inicio', icon: '../../../assets/prueba 1Recurso 29.png' },
            { title: 'Rutas', url: '/sidemenu/Rutas', icon: '../../../assets/prueba 1Recurso 30.png' },
            { title: 'Experiencia', url: '/sidemenu/Experiencia', icon: '../../../assets/prueba 1Recurso 31.png' },
            { title: 'Soporte/Ayuda', url: '/sidemenu/Soporte', icon: '../../../assets/prueba 1Recurso 32.png' }
        ];
    }
    ngOnInit() {
        console.log('hey I am in sidemenu');
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]))
            .subscribe(event => {
            console.log("router event", event['url']);
            if (event['url'] === '/sidemenu/Feedback') {
                this.activeRoute = '/sidemenu/Inicio';
            }
            else {
                this.activeRoute = event['url'];
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
        let options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: 50,
            //slidePixels: 20,
            iosdelay: 100,
            androiddelay: 550,
        };
        //this.activeRoute = i;
        this.drawerVar = p.title;
        // this.nativePageTransitions.slide(options)
        this.router.navigate([p.url]);
        // this.navctl.navigateRoot([p.url])
    }
};
SidemenuPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__["NativePageTransitions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
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





let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.appPages = [
            { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
            { title: 'Rutas', url: '/folder/Rutas', icon: 'bus' },
            { title: 'Experiencia', url: '/folder/Experiencia', icon: 'medal' },
            { title: 'Soporte/Ayuda', url: '/folder/Soporte', icon: 'help-buoy' },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        const isLoggedin = localStorage.getItem('userToken');
        if (isLoggedin) {
            this.router.navigate(['/sidemenu/Inicio']);
        }
        else {
            this.router.navigate(['/initial']);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
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
            src_app_Components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"],
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex \">\n  <div  *ngFor=\"let p of rating; let i = index\" (click) = \"ratingHandler(i)\">\n    <ion-icon [ngClass] = \"rate >= i ? 'active' : 'deactive'\" ng name=\"star\"></ion-icon>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    \n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>");

/***/ }),

/***/ "XlEN":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addressDetails\" *ngIf=\"selectedItem  && !userService.rutasBarEdit && userService.rutasFlow != 4\">\n  <div class=\"listItemWrapper\">\n    <img class=\"listImg\" src=\"./../../../assets/route.png\" />\n    <div class=\"listTextWrapper\">\n      <div class=\"listName\">{{selectedItem?.name}}</div>\n      <ion-note>{{selectedItem?.timeRange}}</ion-note>\n    </div>\n  </div>\n</div>\n\n<div class=\"rutasEdit d-flex flex-column\" *ngIf=\"userService.rutasBarEdit\">\n  <div class=\"d-flex align-items-center mb-3\">\n    <div class=\"currentLoc\"><span class=\"destLoc\"></span></div>\n    <ion-input class=\"editInp d-flex align-items-center\" placeholder=\"Indico de Ruta\"><div class=\"icon\">\n      <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n    </div></ion-input>\n </div>\n  \n  <div class=\"d-flex align-items-center\">\n    <div class=\"locIcon\"> <ion-icon  name=\"location\"></ion-icon></div>\n    <ion-input class=\"editInp d-flex align-items-center\" placeholder=\"Final de Ruta\"><div class=\"icon\">\n      <ion-icon name=\"swap-vertical\"></ion-icon>\n    </div></ion-input> \n  </div> \n</div>\n<div #map id='map'></div>\n<!-- <app-map></app-map> -->\n<app-bottom-drawer component=\"Inicio\" (emitEvent)=\"bottomDrawerEvent($event)\"></app-bottom-drawer>");

/***/ }),

/***/ "Z6aU":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/bottom-drawer/bottom-drawer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\" tappable (click)=\"bottomDrawer.toggleDrawer()\"></div> -->\n<div  class=\"bottom-drawer\" [ngStyle]= \"{'bottom': 'calc('+ bottomPosition +'vh + env(safe-area-inset-bottom))'}\" #bottomDrawer>\n  <div *ngIf = \"userService.rutasFlow === 5\" class=\"car-loc-btn\"><ion-icon name=\"locate\"></ion-icon></div>\n  <div *ngIf=\"dragable\" class=\"ion-text-center \">\n    <ion-button  fill=\"clear\" expand=\"full\" (click) =\"toggleDrawer()\" class=\"minH\">\n      <div class=\"drawer-pull\"></div>\n    </ion-button>\n  </div>\n\n  <div class=\"content-container mt-2\" *ngIf=\"component === 'Inicio'\">\n \n\n  <ion-content [ngSwitch] = \"userService.rutasFlow\">\n\n    <div *ngSwitchCase = 0>\n\n      <ion-input class=\"searchField\" placeholder=\"Buscar ruta\" ></ion-input>\n      <div class='itemWrapper' *ngFor=\"let item of searchList\" (click) =\"routeHandler(item)\">\n          <img class=\"listImg\" *ngIf=\"item.status === 'pending'\" src=\"../../../assets/clockYellow.png\"/>\n          <img class=\"listImg\" *ngIf=\"item.status === 'completed'\" src=\"../../../assets/briefcase.png\"/>\n          <div class=\"\">\n            <div class=\"listName\">{{item.name}}</div>\n            <ion-note >{{item.timeRange}}</ion-note>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"px-2\" *ngSwitchCase = 1>\n      <div class=\"d-flex flex-row\">\n        \n        <div class=\"d-flex flex-grow-1\">\n          <img class=\"clock\" src=\"../../../assets/clock.png\"/>\n          <div class=\"d-flex flex-column\">\n            <span >Proxima unidad</span>\n            <ion-note>15 minutes</ion-note>\n          </div>\n        </div>\n        \n        \n        <div class=\"justify-content-around d-flex flex-grow-1 imgSet\">\n          <img (click) = \"startScan()\" class=\"scan\" src=\"../../../assets/prueba 1Recurso 45.png\"/>\n\n          <img class=\"scan\" (click)=\"goToSeatArrangement()\" src=\"../../../assets/prueba 1Recurso 42.png\"/>\n          <img class=\"scan\" (click)=\"editRoute()\" src=\"../../../assets/prueba 1Recurso 47.png\"/>\n        </div>\n        \n      </div>\n      <ion-button fill=\"clear\" expand=\"full\" class=\"confirmRutas my-3\">Abordar este bus</ion-button>\n      \n    </div>\n\n    <div class=\"d-flex flex-column align-items-center\" *ngSwitchCase = 2>\n      <div class=\"scanBlock\">\n        <div class=\"d-flex flex-column align-items-center justify-content-center\" *ngIf=\"!showScan\">\n          <ion-note>Please scan this QR to verify your bus</ion-note>\n          <img class=\"scannerImg\" src=\"../../../assets/scanner.png\"/>\n        </div>\n        <div  [ngClass]=\"!showScan ? 'd-none' : 'd-block'\">\n          <video class=\"vdo\" [hidden] = '!scanActive' #video></video>\n        <canvas #canvas hidden></canvas>\n        </div>\n      </div>\n\n      <ion-button *ngIf=\"!showScan\" (click) = \"scannerOn()\" fill=\"clear\"  class=\"confirmRutas my-3 \">Start scan</ion-button>\n\n      <ion-button *ngIf=\"showScan\"  (click) = \"stopScan()\" fill=\"clear\"  class=\"confirmRutas my-3 \">Back</ion-button>\n    </div>\n\n    \n    <div *ngSwitchCase = 3>\n\n      <div class=\"driverWrapper\" *ngIf=\"!isOpen\">\n        <div class=\"driverOverview\">\n        <img class = \"dp\" src=\"../../../assets/prueba 1Recurso 59.png\"/>\n        <div class=\"driverDetail\">\n          <ion-text class=\"drivername\">{{scanResult}}</ion-text>\n          <div class=\"driverPlaceDetail\">\n            <ion-text class=\"placePadding\">Modelo: Yutong V55</ion-text>\n            <ion-text>Placa: 456yht7</ion-text>\n          </div>\n          <ion-note>Tiempo de llegada a destino: 25min</ion-note>\n        </div>\n      </div>\n      <ion-button fill=\"clear\" (click) = \"goToFeedback()\" class=\"confirmDriverBtn\"> \n        <ion-icon class=\"\" name=\"log-out-outline\"></ion-icon>\n        <ion-text>Finalizar viaje</ion-text>\n      </ion-button>\n      </div>\n\n      <div class=\"expandedDetailWrapper\" *ngIf=\"isOpen\">\n        <ion-text class=\"drivername\">Datos de tu viaje</ion-text>\n\n        <img class = \"expandedDp\" src=\"../../../assets/prueba 1Recurso 59.png\"/>\n\n        <ion-note>Tu conductor</ion-note>\n\n        <div class=\"expandedSelectedItem\">\n          <div class=\"equalLength expanded-driverName\">\n            <ion-text class=\"brokenTxt\">{{scanResult}}</ion-text>\n          </div>  \n          <div class=\"equalLength\">\n            <ion-text>4/5</ion-text>\n            <ion-icon class=\"starImg\" name=\"star\"></ion-icon>\n            <!-- <img class=\"starImg\" src=\"../../../assets/yellowStar.png\"/> -->\n          </div>\n        </div>\n\n        <ion-note>Tu ruta</ion-note>\n\n        <div class=\"listItemWrapper cardInDrawer\">\n          <img class=\"listImg\" src=\"../../../assets/route.png\" />\n          <div class=\"listTextWrapper\">\n            <div class=\"listName\">{{selectedItem?.name}}</div>\n            <ion-note>{{selectedItem?.timeRange}}</ion-note>\n          </div>\n        </div>\n\n        <ion-note>Tu unidad</ion-note>\n\n        <ion-text>Modelo: Yutong V55</ion-text>\n\n        <ion-text>Placa: 456yht7</ion-text>\n\n        <ion-note>Puestos disponibles</ion-note>\n\n        <ion-text>15/30</ion-text>\n\n        <ion-button (click) = \"goToFeedback()\" class=\"confirmDriverBtn setAtBottom\">\n          <ion-icon class=\"\" name=\"log-out-outline\"></ion-icon>\n          <ion-text>Finalizar viaje</ion-text>\n        </ion-button>\n      </div>\n\n    </div>\n\n    <div *ngSwitchCase = 4 class=\"seatContentWrapper\">\n      <div class=\"listItemWrapper extraShadow\">\n        <img class=\"listImg\" src=\"../../../assets/route.png\" />\n        <div class=\"listTextWrapper\">\n          <div class=\"listName\">{{selectedItem?.name}}</div>\n          <ion-note>{{selectedItem?.timeRange}}</ion-note>\n        </div>\n      </div>\n      <div #seat class=\"rowWrapper\">\n      <div *ngFor=\"let row of seats\">\n        <div class=\"rowView\" *ngIf=\"row.length\">\n        <div class=\"imgWrapper\" *ngFor=\"let col of row\">\n            <img *ngIf=\"col.isSeat && col.status==='driver'\" class=\"seatImg\" src=\"../../../assets/chair (2).png\" />\n            <img *ngIf=\"col.isSeat && col.status==='empty'\" class=\"seatImg\" src=\"../../../assets/chair (1).png\" />\n            <img *ngIf=\"col.isSeat && col.status==='f'\" class=\"seatImg\" src=\"../../../assets/chair (3).png\" />\n            <img *ngIf=\"col.isSeat && col.status==='m'\" class=\"seatImg\" src=\"../../../assets/chair.png\" />\n          <div *ngIf=\"!col.isSeat\" class=\"emptySeat\"></div>\n        </div>\n      </div>\n      <div *ngIf=\"row.length === 0\" class=\"emptyRow\"></div>\n      </div>\n      </div>\n      <div *ngIf=\"isOpen\" class=\"totalSeats\">\n        <div class=\"rowView\">\n          <div class=\"bottomSeatWrapper smallSeatWrapper\">\n            <ion-note class=\"totalSeatCount\">8/32</ion-note>\n            <img class=\"seatImg smallSeat\" src=\"../../../assets/chair (1).png\"/>\n            <ion-note class=\"seatType\">Aslenios dispenible</ion-note>\n          </div>\n          <div class=\"bottomSeatWrapper extendedHeight\">\n            <img class=\"seatImg bigseats\" src=\"../../../assets/chair (2).png\"/>\n            <ion-note class=\"seatType\">Asionto del chofer</ion-note>\n          </div>\n          <div class=\"bottomSeatWrapper extendedHeight\">\n            <ion-note class=\"totalSeatCount\">15/32</ion-note>\n            <img class=\"seatImg bigseats\" src=\"../../../assets/chair (3).png\"/>\n            <ion-note class=\"seatType\">Asientos ocupados</ion-note>\n          </div>\n          <div class=\"bottomSeatWrapper noMargin smallSeatWrapper\">\n            <ion-note class=\"totalSeatCount\">5/32</ion-note>\n            <img class=\"seatImg smallSeat\" src=\"../../../assets/chair.png\"/>\n            <ion-note class=\"seatType\">Asientos selecclonacos</ion-note>\n          </div>\n        </div>\n        <ion-button class=\"seatBtn\" (click)=\"goToHome()\">\n          <ion-icon name=\"log-out-outline\" ></ion-icon>\n          Asignar Asientos\n        </ion-button>\n      </div>\n    </div>\n\n    <div *ngSwitchCase = 5>\n\n      <div #editRutas class=\"d-flex justify-content-center h-100 flex-column\">\n        <ion-button fill=\"clear\" color=\"clear\" class=\"flow-4-btn-1 borderRad\"><ion-icon name=\"options-outline\" class=\"mx-2\"></ion-icon> Panel de Control</ion-button>\n\n        <div class=\"d-flex\">\n          <ion-select class=\"btn-select\" placeholder=\"Cliente\">\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\n          </ion-select>\n          <ion-select class=\"btn-select\" placeholder=\"Rutas\">\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\n            <ion-select-option value=\"brown\">Brown</ion-select-option>\n          </ion-select>\n        </div>\n\n        <ion-button fill=\"clear\" color=\"clear\" class=\"flow-4-btn-1 borderRad\"><ion-icon name=\"search-outline\" class=\"mx-1\"></ion-icon>Buscar</ion-button>\n\n        <div class=\"d-flex justify-content-center my-4\">\n          <ion-button fill=\"clear\" color=\"clear\" class=\"flow-4-btn-2 btn35 mx-1 borderRad\" placeholder=\"Cliente\">Ida <ion-icon name=\"return-up-forward-outline\" class=\"mx-1 borderRad\"></ion-icon></ion-button>\n          <ion-button fill=\"clear\" color=\"clear\" class=\"flow-4-btn-1 btn35 mx-1 borderRad\" placeholder=\"Rutas\">Regreso <ion-icon name=\"return-down-back-outline\" class=\"mx-1 borderRad\"></ion-icon></ion-button>\n        </div>\n\n        <div class=\"d-flex flex-column align-items-center\">\n          <ion-note class=\"mb-2\">Informacion de Ruta</ion-note>\n\n          <table class=\"tbl\">\n            <thead>\n              <tr>\n                <th class=\"roundBorderLeft\">Ruta</th>\n                <th class=\"roundBorderRight\">Detalles de Ruta</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td >foo</td>\n                <td >bar</td>\n              </tr>\n              <tr>\n                <td >foo</td>\n                <td >bar</td>\n              </tr>\n              <tr>\n                <td >foo</td>\n                <td >bar</td>\n              </tr>\n              <tr>\n                <td >foo</td>\n                <td >bar</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n  \n</ion-content>\n</div>\n\n</div>");

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
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _node_modules_ionic_core_dist_collection_utils_transition_ios_transition_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../node_modules/@ionic/core/dist/collection/utils/transition/ios.transition.js */ "BYU8");




















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
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _pages_sidemenu_sidemenu_module__WEBPACK_IMPORTED_MODULE_12__["SidemenuPageModule"],
            _pages_soporte_soporte_module__WEBPACK_IMPORTED_MODULE_1__["SoportePageModule"],
            _pages_inicio_inicio_module__WEBPACK_IMPORTED_MODULE_2__["InicioPageModule"],
            _pages_feedback_feedback_module__WEBPACK_IMPORTED_MODULE_17__["FeedbackPageModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot({
                navAnimation: _node_modules_ionic_core_dist_collection_utils_transition_ios_transition_js__WEBPACK_IMPORTED_MODULE_19__["iosTransitionAnimation"],
            }),
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"] }, _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_18__["NativePageTransitions"]],
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
/* harmony default export */ __webpack_exports__["default"] = (".deactive {\n  color: white;\n}\n\n.active {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJyYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVhY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".appwrapper ion-menu.md ion-list {\n  padding: 20px 0;\n}\n.appwrapper ion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n.appwrapper ion-menu.md ion-list-header,\n.appwrapper ion-menu.md ion-note {\n  padding-left: 10px;\n}\n.appwrapper ion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n.appwrapper ion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n.appwrapper ion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n.appwrapper ion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n.appwrapper ion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n.appwrapper ion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n.appwrapper ion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n.appwrapper ion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n.appwrapper ion-menu.ios ion-list {\n  padding: 0px 0 0 0;\n}\n.appwrapper ion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n.appwrapper ion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n.appwrapper ion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n.appwrapper ion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n.appwrapper ion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n.appwrapper ion-menu.ios ion-list-header,\n.appwrapper ion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.appwrapper ion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n.appwrapper ion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n.appwrapper ion-item.selected {\n  --color: var(--ion-color-primary);\n}\n.appwrapper .menu-list-header {\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  flex-direction: row;\n  padding-left: 16px;\n}\n.appwrapper .profile-pic {\n  border-radius: 100px;\n  background-color: white;\n  padding: 8px;\n  font-size: 24px;\n}\n.appwrapper .heading {\n  display: flex;\n  flex-direction: column;\n  line-height: 2px;\n  margin-bottom: 5px;\n}\n.appwrapper .align-16 {\n  padding-left: 16px !important;\n}\n.appwrapper .heading-name {\n  font-size: 20px;\n}\n.appwrapper .more {\n  font-size: 26px;\n  color: white;\n}\n.appwrapper .logout {\n  display: flex;\n  justify-content: center;\n}\n.appwrapper .logout-btn {\n  --background: #fae345;\n  color: black;\n  margin-bottom: 18px;\n  text-transform: none !important;\n}\n.appwrapper .logout-icon {\n  margin-right: 5px;\n}\n.appwrapper ion-menu.md ion-list {\n  padding: 0px 0;\n}\n.appwrapper ion-menu.md ion-list#inbox-list {\n  border-bottom: unset;\n}\n.appwrapper ion-menu.md ion-item.selected {\n  --background: unset;\n}\n.appwrapper .menu-button {\n  border-radius: 100px;\n  box-shadow: 1px 2px 7px 2px #ccc;\n  margin: 10px;\n  position: absolute;\n  left: 5%;\n  top: 2%;\n  height: 40px;\n  width: 40px;\n  background: white;\n}\n.appwrapper .btn-icon {\n  color: black;\n}\n.appwrapper .backdrop {\n  width: 100%;\n  height: 100%;\n  background: #0000001f;\n  z-index: 10;\n  position: absolute;\n}\n.appwrapper .fade {\n  transition: 0.5s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n.appwrapper .fade-in {\n  transition: 0.5s linear all;\n  opacity: 1;\n}\n.appwrapper .active {\n  color: #fae345;\n}\n.appwrapper .deactive {\n  color: #616e7e;\n}\n.appwrapper .menuIcon {\n  height: 21px;\n  width: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZGVtZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZRTtFQUNFLGVBQUE7QUFYSjtBQWNFO0VBQ0UsbUJBQUE7QUFaSjtBQWVFOztFQUVFLGtCQUFBO0FBYko7QUFnQkU7RUFDRSwyREFBQTtBQWRKO0FBaUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFoQko7QUFtQkU7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFwQko7QUF1QkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFyQko7QUF3QkU7RUFDRSxzREFBQTtBQXRCSjtBQXlCRTtFQUNFLCtCQUFBO0FBdkJKO0FBOEJFO0VBQ0UsZ0JBQUE7QUE1Qko7QUErQkU7RUFDRSxzQkFBQTtBQTdCSjtBQWdDRTtFQUNFLGtCQUFBO0FBOUJKO0FBaUNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQS9CSjtBQWtDRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWhDSjtBQW1DRTtFQUNFLCtCQUFBO0FBakNKO0FBb0NFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFsQ0o7QUFxQ0U7RUFDRSxrQkFBQTtBQW5DSjtBQXNDRTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBcENKO0FBdUNFO0VBQ0Usa0JBQUE7QUFyQ0o7QUF3Q0U7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQXZDSjtBQTBDRTtFQUNFLGlDQUFBO0FBeENKO0FBMkNFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTFDSjtBQThDRTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQTVDSjtBQStDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUE3Q0o7QUFnREU7RUFDRSw2QkFBQTtBQTlDSjtBQWlERTtFQUNFLGVBQUE7QUEvQ0o7QUFrREU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQWhESjtBQW9ERTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQWxESjtBQXFERTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFuREo7QUFzREU7RUFDRSxpQkFBQTtBQXBESjtBQXVERTtFQUNFLGNBQUE7QUFyREo7QUF3REU7RUFDRSxvQkFBQTtBQXRESjtBQXlERTtFQUNFLG1CQUFBO0FBdkRKO0FBMERFO0VBQ0Usb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXhESjtBQTJERTtFQUNFLFlBQUE7QUF6REo7QUE0REU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBMURKO0FBNkRFO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQTNESjtBQThERTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtBQTVESjtBQWdFRTtFQUNFLGNBQUE7QUE5REo7QUFpRUU7RUFDRSxjQUFBO0FBL0RKO0FBa0VFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFoRUoiLCJmaWxlIjoic2lkZW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcHdyYXBwZXIge1xuICAvLyAgIGlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLy8gICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4gIC8vIH1cbiAgXG4gIC8vIGlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLy8gICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLy8gICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC8vICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLy8gICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAvLyB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgXG4gICAgY29sb3I6ICM3NTc1NzU7XG4gIFxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gICAgLy9jb2xvcjogIzYxNmU3ZTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMHB4IDAgMCAwO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjNzM4NDlhO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICBpb24tbm90ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICB9XG4gIFxuICBpb24taXRlbS5zZWxlY3RlZCB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuICAubWVudS1saXN0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZTM0NTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIFxuICB9XG4gIFxuICAucHJvZmlsZS1waWMge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgXG4gIC5oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbGluZS1oZWlnaHQ6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgXG4gIC5hbGlnbi0xNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5oZWFkaW5nLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBcbiAgLm1vcmUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgXG4gIH1cbiAgXG4gIC5sb2dvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5sb2dvdXQtYnRuIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmYWUzNDU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubG9nb3V0LWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMHB4IDA7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICAgIGJvcmRlci1ib3R0b206IHVuc2V0O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1bnNldDtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA3cHggMnB4ICNjY2M7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1JTtcbiAgICB0b3A6IDIlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmJ0bi1pY29uIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuYmFja2Ryb3Age1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMWY7XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmZhZGUge1xuICAgIHRyYW5zaXRpb246IDAuNXMgbGluZWFyIGFsbDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG5cbiAgLmZhZGUtaW57XG4gICAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXIgYWxsO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgXG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBjb2xvcjogI2ZhZTM0NTtcbiAgfVxuXG4gIC5kZWFjdGl2ZSB7XG4gICAgY29sb3I6ICM2MTZlN2U7XG4gIH1cblxuICAubWVudUljb24ge1xuICAgIGhlaWdodDogMjFweDtcbiAgICB3aWR0aDogNTJweDtcbiAgfVxuICBcbiAgfVxuICAiXX0= */");

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

/***/ "olBi":
/*!***********************************************************************!*\
  !*** ./src/app/Components/bottom-drawer/bottom-drawer.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bottom-drawer {\n  position: absolute;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  width: 100%;\n  height: 88vh;\n  z-index: 11;\n  background: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.bottom-position-max {\n  bottom: calc(-0vh + env(safe-area-inset-bottom));\n}\n\n.bottom-position-min {\n  bottom: calc(-69vh + env(safe-area-inset-bottom));\n}\n\n.drawer-pull {\n  background: #cccccc;\n  height: 4px;\n  width: 60px;\n}\n\n.backdrop {\n  width: 100%;\n  height: 100%;\n  background: #0000001f;\n  z-index: 10;\n  position: absolute;\n}\n\n.fade {\n  transition: 0.5s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n\n.fade-in {\n  transition: 0.5s linear all;\n  opacity: 1;\n}\n\n.searchField {\n  background: #efedec;\n  border-radius: 8px;\n  height: 50px;\n  margin-bottom: 20px;\n}\n\n.listImg {\n  width: 42px;\n  height: 42px;\n  margin-right: 18px;\n}\n\n.timeText {\n  font-size: 12px;\n  color: gray;\n  margin-top: 3px;\n}\n\n.content-container {\n  height: 100%;\n  padding-bottom: 15vh;\n}\n\n.itemWrapper {\n  --inner-border-width: 0;\n  margin-top: 18px;\n  display: flex;\n  line-height: initial;\n  align-items: center;\n}\n\n.minH {\n  height: 16px;\n}\n\n.scan {\n  height: 20px;\n}\n\n.confirmRutas {\n  background: #fae345;\n  border-radius: 8px;\n  color: black;\n  text-transform: none;\n  height: 46px;\n  text-transform: initial;\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.clock {\n  height: 18px;\n  margin-right: 5px;\n  margin-top: 1.5%;\n}\n\n.item-native {\n  padding-inline-start: unset;\n  padding-inline-end: unset;\n}\n\n.driverWrapper {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n}\n\n.driverOverview {\n  display: flex;\n  flex-direction: row;\n}\n\n.dp {\n  width: 55px;\n  height: 55px;\n  align-self: center;\n  margin-right: 10px;\n}\n\n.driverDetail {\n  display: flex;\n  flex-direction: column;\n  line-height: normal;\n}\n\n.drivername {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.driverPlaceDetail {\n  display: flex;\n  flex-direction: row;\n  font-size: 16px;\n}\n\n.placePadding {\n  padding-right: 6px;\n}\n\n.confirmDriverBtn {\n  margin-top: 3%;\n  --background: #fae345;\n  color: black;\n  --border-radius: 7px;\n}\n\n.setAtBottom {\n  margin-top: 10vh;\n}\n\n.expandedDetailWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.expandedDp {\n  height: 150px;\n}\n\n.expandedSelectedItem {\n  display: flex;\n  flex-direction: row;\n  width: 50%;\n  font-size: 14px;\n  text-align: center;\n}\n\n.equalLength {\n  display: flex;\n  flex: 1;\n  padding: 5px;\n  align-items: center;\n}\n\n.starImg {\n  height: 15px;\n  padding-left: 5px;\n  color: #fae345;\n}\n\n.expanded-driverName {\n  border-right: gray 1px solid;\n}\n\n.flow-4-btn-1 {\n  background-color: #fae345;\n  color: black;\n  text-transform: none !important;\n}\n\n.flow-4-btn-2 {\n  background-color: #ebebeb;\n  color: #8f8f8f;\n  text-transform: none !important;\n}\n\n.btn-select {\n  border: 1px solid #ccc;\n  display: flex;\n  flex: 1;\n  margin: 16px 5px;\n  border-radius: 8px;\n}\n\n.btn35 {\n  width: 38%;\n  text-transform: none !important;\n}\n\n.emptyRow {\n  height: 10px;\n  width: 10px;\n}\n\n.rowView {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.imgWrapper {\n  width: 18%;\n}\n\n.rowWrapper {\n  background: #f4f4f4;\n  border-radius: 15%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-top: 8%;\n  padding-bottom: 8%;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.extraShadow {\n  box-shadow: 2px 4px 6px #ccc;\n  margin-bottom: 3%;\n  width: 99%;\n  border-radius: 7px;\n  position: sticky;\n  background: white;\n  height: 9vh;\n  top: 0px;\n}\n\n.totalSeats {\n  position: sticky;\n  bottom: 0%;\n  background: white;\n  border-top: 1px solid #ccc;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bottomSeatWrapper {\n  width: 20%;\n  box-shadow: 2px 4px 6px grey;\n  border-radius: 8%;\n  margin-right: 7px;\n  margin-bottom: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 5px;\n  position: relative;\n}\n\n.seatBtn {\n  width: 90%;\n  --background: #fae345;\n  color: black;\n  --border-radius: 7px;\n  text-transform: initial;\n}\n\n.totalSeatCount {\n  align-self: flex-end;\n  width: 60%;\n  background: gainsboro;\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  font-size: 11px;\n}\n\n.smallSeat {\n  height: 4vh;\n  margin-top: 23%;\n}\n\n.smallSeatWrapper {\n  height: 11vh;\n}\n\n.seatType {\n  font-size: 10px;\n  line-height: normal;\n}\n\n.noMargin {\n  margin-right: unset;\n}\n\n.scanBlock {\n  height: 45vh;\n  margin: 20px;\n  padding: 18px;\n}\n\n.vdo {\n  height: 35vh;\n  border-radius: 20px;\n}\n\n.car-loc-btn {\n  position: absolute;\n  top: -14%;\n  right: 3%;\n  width: 40px;\n  height: 40px;\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 34px;\n  border-radius: 100px;\n}\n\n.td, th {\n  width: 70px;\n}\n\n.scannerImg {\n  height: 40vh;\n}\n\n.brokenTxt {\n  line-break: anywhere;\n}\n\n.cardInDrawer {\n  width: 80%;\n}\n\n.seatContentWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.seatImg {\n  padding: 2px;\n}\n\n.bigseats {\n  margin-top: 25%;\n}\n\n.extendedHeight {\n  height: 12vh;\n}\n\n.borderRad {\n  border-radius: 8px;\n}\n\n.tbl {\n  border-collapse: separate;\n}\n\n.roundBorderLeft {\n  border-top-left-radius: 10px;\n}\n\n.roundBorderRight {\n  border-top-right-radius: 10px;\n}\n\n.imgSet {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JvdHRvbS1kcmF3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtFQUdBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDRSxnREFBQTtBQUhGOztBQU1BO0VBQ0UsaURBQUE7QUFIRjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFISjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPRTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFKSjs7QUFPRTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtBQUpKOztBQVFFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUU7RUFFRSxZQUFBO0VBQ0Esb0JBQUE7QUFOSjs7QUFTRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNFO0VBQ0UsWUFBQTtBQU5KOztBQVNFO0VBQ0UsWUFBQTtBQU5KOztBQVNFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFTRTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNFO0VBQ0Usa0JBQUE7QUFOSjs7QUFTRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQU5KOztBQVNFO0VBQ0UsZ0JBQUE7QUFOSjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVNFO0VBRUUsNEJBQUE7QUFQSjs7QUFVRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBUEo7O0FBVUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQVBKOztBQVVFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFVRTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtBQVBKOztBQVNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFOSjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBU0U7RUFDRSxVQUFBO0FBTko7O0FBU0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVNFO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQU5KOztBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTRTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFTRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBU0U7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFOSjs7QUFTRTtFQUNFLFlBQUE7QUFOSjs7QUFTRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNFO0VBQ0ksbUJBQUE7QUFOTjs7QUFTRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtBQVBKOztBQVVFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBVUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBUEo7O0FBVUU7RUFDRSxXQUFBO0FBUEo7O0FBVUU7RUFDRSxZQUFBO0FBUEo7O0FBVUU7RUFDRSxvQkFBQTtBQVBKOztBQVVFO0VBQ0UsVUFBQTtBQVBKOztBQVVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVRTtFQUNFLFlBQUE7QUFQSjs7QUFVRTtFQUNFLGVBQUE7QUFQSjs7QUFVRTtFQUNFLFlBQUE7QUFQSjs7QUFVRTtFQUNFLGtCQUFBO0FBUEo7O0FBVUU7RUFDRSx5QkFBQTtBQVBKOztBQVlFO0VBQ0UsNEJBQUE7QUFUSjs7QUFZRTtFQUNFLDZCQUFBO0FBVEo7O0FBWUU7RUFDRSxtQkFBQTtBQVRKIiwiZmlsZSI6ImJvdHRvbS1kcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmJvdHRvbS1kcmF3ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgXG4gICAgaGVpZ2h0OiA4OHZoO1xuICAgIHotaW5kZXg6IDExO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5ib3R0b20tcG9zaXRpb24tbWF4IHtcbiAgYm90dG9tOiBjYWxjKC0wdmggKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xufVxuXG4uYm90dG9tLXBvc2l0aW9uLW1pbiB7XG4gIGJvdHRvbTogY2FsYygtNjl2aCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XG59XG5cbi5kcmF3ZXItcHVsbCB7XG4gICAgYmFja2dyb3VuZDogI2NjY2NjYztcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5iYWNrZHJvcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAxZjtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuZmFkZSB7XG4gICAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXIgYWxsO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogLTE7XG4gIH1cblxuICAuZmFkZS1pbntcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGxpbmVhciBhbGw7XG4gICAgb3BhY2l0eTogMTtcbiAgICBcbiAgfVxuXG4gIC5zZWFyY2hGaWVsZHtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZGVjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5saXN0SW1ne1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gIH1cblxuICAudGltZVRleHR7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgfVxuXG4gIC5jb250ZW50LWNvbnRhaW5lcntcbiAgICAvLyBoZWlnaHQ6IDc1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDE1dmg7XG4gIH1cblxuICAuaXRlbVdyYXBwZXJ7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubWluSCB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG5cbiAgLnNjYW4ge1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuXG4gIC5jb25maXJtUnV0YXMge1xuICAgIGJhY2tncm91bmQ6ICNmYWUzNDU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuY2xvY2sge1xuICAgIGhlaWdodDogMThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxLjUlO1xuICB9XG5cbiAgLml0ZW0tbmF0aXZlIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdW5zZXQ7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB1bnNldDtcbiAgfVxuXG4gIC5kcml2ZXJXcmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmRyaXZlck92ZXJ2aWV3e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5kcHtcbiAgICB3aWR0aDogNTVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5kcml2ZXJEZXRhaWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAuZHJpdmVybmFtZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAuZHJpdmVyUGxhY2VEZXRhaWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5wbGFjZVBhZGRpbmd7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICB9XG5cbiAgLmNvbmZpcm1Ecml2ZXJCdG57XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmFlMzQ1O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAtLWJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuXG4gIC5zZXRBdEJvdHRvbXtcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICB9XG5cbiAgLmV4cGFuZGVkRGV0YWlsV3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5leHBhbmRlZERwe1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAuZXhwYW5kZWRTZWxlY3RlZEl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5lcXVhbExlbmd0aHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuc3RhckltZ3tcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgY29sb3I6ICNmYWUzNDU7XG4gIH1cblxuICAuZXhwYW5kZWQtZHJpdmVyTmFtZXtcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBncmF5IDFweCBzb2xpZDtcbiAgfVxuXG4gIC5mbG93LTQtYnRuLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWUzNDU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mbG93LTQtYnRuLTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gICAgY29sb3I6ICM4ZjhmOGY7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bi1zZWxlY3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbjogMTZweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG5cbiAgLmJ0bjM1IHtcbiAgICB3aWR0aDogMzglO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDtcbiAgfVxuICAuZW1wdHlSb3d7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG5cbiAgLnJvd1ZpZXd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmltZ1dyYXBwZXJ7XG4gICAgd2lkdGg6IDE4JTtcbiAgfVxuXG4gIC5yb3dXcmFwcGVye1xuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nLXRvcDogOCU7XG4gICAgcGFkZGluZy1ib3R0b206IDglO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cblxuICAuZXh0cmFTaGFkb3d7XG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA2cHggI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICB3aWR0aDogOTklO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGhlaWdodDogOXZoO1xuICAgIHRvcDogMHB4O1xuICB9XG5cbiAgLnRvdGFsU2VhdHN7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmJvdHRvbVNlYXRXcmFwcGVye1xuICAgIHdpZHRoOiAyMCU7XG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA2cHggZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiA4JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnNlYXRCdG57XG4gICAgd2lkdGg6IDkwJTtcbiAgICAtLWJhY2tncm91bmQ6ICNmYWUzNDU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC0tYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICB9XG5cbiAgLnRvdGFsU2VhdENvdW50e1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC5zbWFsbFNlYXR7XG4gICAgaGVpZ2h0OiA0dmg7XG4gICAgbWFyZ2luLXRvcDogMjMlO1xuICB9XG5cbiAgLnNtYWxsU2VhdFdyYXBwZXJ7XG4gICAgaGVpZ2h0OiAxMXZoO1xuICB9XG5cbiAgLnNlYXRUeXBle1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLm5vTWFyZ2lue1xuICAgICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgfVxuXG4gIC5zY2FuQmxvY2sge1xuICAgIGhlaWdodDogNDV2aDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgXG4gICAgcGFkZGluZzogMThweDtcbiAgfVxuXG4gIC52ZG8ge1xuICAgIGhlaWdodDogMzV2aDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG5cbiAgLmNhci1sb2MtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTQlO1xuICAgIHJpZ2h0OiAzJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZTM0NTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICB9XG5cbiAgLnRkLCB0aCB7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cblxuICAuc2Nhbm5lckltZyB7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICB9XG5cbiAgLmJyb2tlblR4dHtcbiAgICBsaW5lLWJyZWFrOiBhbnl3aGVyZTtcbiAgfVxuXG4gIC5jYXJkSW5EcmF3ZXJ7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5zZWF0Q29udGVudFdyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuc2VhdEltZ3tcbiAgICBwYWRkaW5nOiAycHg7XG4gIH1cblxuICAuYmlnc2VhdHN7XG4gICAgbWFyZ2luLXRvcDogMjUlO1xuICB9XG5cbiAgLmV4dGVuZGVkSGVpZ2h0e1xuICAgIGhlaWdodDogMTJ2aDtcbiAgfVxuXG4gIC5ib3JkZXJSYWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuXG4gIC50Ymwge1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgXG5cbiAgfVxuXG4gIC5yb3VuZEJvcmRlckxlZnQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAucm91bmRCb3JkZXJSaWdodCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAuaW1nU2V0e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"appwrapper\">\n  <!-- <ion-split-pane> -->\n    <ion-menu contentId=\"home\" type=\"overlay\">\n      <ion-content class=\"content\">\n        <div class=\"d-flex flex-column h-100 justify-content-between\">\n\n          <div>\n            <ion-list id=\"inbox-list\">\n  \n              <div class=\"menu-list-header\">\n                <span class=\"profile-pic\">MJ</span>\n    \n                <div class=\"heading\">\n                  <ion-note class=\"align-16\">Hola</ion-note>\n                  <span class=\"align-16 heading-name\">Maria Jose Castilo</span>\n                </div>\n    \n                <ion-icon class=\"more align-16\" name=\"ellipsis-horizontal\"></ion-icon>\n              </div>\n    \n              <ion-menu-toggle  auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n                <ion-item  routerDirection=\"root\" (click)=\"menuOptionClickHandle(p, i)\" lines=\"none\" detail=\"false\"\n                  >\n                  <img class=\"px-3 menuIcon\" [src]=\"p.icon\"/>\n                  <!-- <ion-icon [ngClass] = \"activeRoute === i ? 'active' : 'deactive'\" slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon> -->\n                  <ion-label [ngClass] = \"activeRoute === p.url ? 'active' : 'deactive'\">{{ p.title }}</ion-label>\n                </ion-item>\n              </ion-menu-toggle>\n            </ion-list>\n          </div>\n  \n          <div class=\"logout\">\n            <ion-button class=\"logout-btn\" (click)=\"logout()\"><ion-icon class=\"logout-icon\" name=\"log-out-outline\" ></ion-icon>Cerrar sesion</ion-button>\n  \n          </div>\n        </div>\n        \n      </ion-content>\n    </ion-menu>\n\n    <ion-buttons slot=\"start\" class=\"menu-button\">\n      <ion-menu-button class=\"btn-icon\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\" tappable (click)=\"bottomDrawer.toggleDrawer()\"></div>\n\n    <!-- <app-bottom-drawer [component]=\"drawerVar\" (openStateChanged) = \"toggleBackdrop($event)\" #bottomDrawer></app-bottom-drawer> -->\n    \n    <ion-router-outlet id=\"home\"></ion-router-outlet>\n  <!-- </ion-split-pane> -->\n</div>");

/***/ }),

/***/ "uMEU":
/*!***************************************************!*\
  !*** ./src/app/Components/map/map.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 77%;\n}\n\n.addressDetails {\n  width: 90%;\n  height: 70px;\n  position: fixed;\n  top: 75px;\n  z-index: 1;\n  left: 20px;\n  border-radius: 8px;\n}\n\n.listImg {\n  height: 42px;\n  width: 42px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDc3JTsgXG59XG5cbi5hZGRyZXNzRGV0YWlsc3tcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA3NXB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5saXN0SW1nIHtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "vGbJ":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \****************************************************************************************************************************************************/
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
webpackEmptyAsyncContext.id = "vGbJ";

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
        loadChildren: () => Promise.all(/*! import() | pages-forgotPassword-forgot-password-forgot-password-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-forgotPassword-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./pages/forgotPassword/forgot-password/forgot-password.module */ "CuHh")).then(m => m.ForgotPasswordPageModule)
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
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-signup-signup-module */ "pages-signup-signup-module").then(__webpack_require__.bind(null, /*! ./pages/signup/signup.module */ "UUSl")).then(m => m.SignupPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-signup-signup-module */ "pages-signup-signup-module").then(__webpack_require__.bind(null, /*! ./pages/signup/signup.module */ "UUSl")).then(m => m.SignupPageModule)
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
/* harmony default export */ __webpack_exports__["default"] = ("<div #map id='map'></div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".appwrapper ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n.appwrapper ion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNBLDJFQUFBO0FBQUY7QUFHQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBREYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcHdyYXBwZXIge1xuICBpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCB7XG4vLyAgIHBhZGRpbmc6IDIwcHggMDtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuLy8gICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG4vLyBpb24tbWVudS5tZCBpb24tbm90ZSB7XG4vLyAgIHBhZGRpbmctbGVmdDogMTBweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4vLyAgIGZvbnQtc2l6ZTogMjJweDtcbi8vICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuLy8gICBtaW4taGVpZ2h0OiAyMHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuLy8gICBmb250LXNpemU6IDE2cHg7XG5cbi8vICAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuLy8gICBjb2xvcjogIzc1NzU3NTtcblxuLy8gICBtaW4taGVpZ2h0OiAyNnB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24taXRlbSB7XG4vLyAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbi8vICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4vLyAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4vLyAgIGNvbG9yOiAjNjE2ZTdlO1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuLy8gICBmb250LXdlaWdodDogNTAwO1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuLy8gICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuLy8gICBwYWRkaW5nOiAwcHggMCAwIDA7XG4vLyB9XG5cbi8vIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4vLyAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuLy8gICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4vLyAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4vLyAgIC0tbWluLWhlaWdodDogNTBweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbi8vICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbi8vICAgZm9udC1zaXplOiAyNHB4O1xuLy8gICBjb2xvcjogIzczODQ5YTtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4vLyAgIG1hcmdpbi1ib3R0b206IDhweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbi8vIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4vLyAgIHBhZGRpbmctbGVmdDogMTZweDtcbi8vICAgcGFkZGluZy1yaWdodDogMTZweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbi8vICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuLy8gfVxuXG4vLyBpb24tbm90ZSB7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuXG4vLyAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbi8vIH1cblxuLy8gaW9uLWl0ZW0uc2VsZWN0ZWQge1xuLy8gICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyB9XG5cbi8vIC5tZW51LWxpc3QtaGVhZGVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZTM0NTtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgaGVpZ2h0OiAxMDBweDtcbi8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcbi8vICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBcbi8vIH1cblxuLy8gLnByb2ZpbGUtcGljIHtcbi8vICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiA4cHg7XG4vLyAgIGZvbnQtc2l6ZTogMjRweDtcbi8vIH1cblxuLy8gLmhlYWRpbmcge1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICBsaW5lLWhlaWdodDogMnB4O1xuLy8gICBtYXJnaW4tYm90dG9tOiA1cHg7XG4vLyB9XG5cbi8vIC5hbGlnbi0xNiB7XG4vLyAgIHBhZGRpbmctbGVmdDogMTZweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAuaGVhZGluZy1uYW1lIHtcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gfVxuXG4vLyAubW9yZSB7XG4vLyAgIGZvbnQtc2l6ZTogMjZweDtcbi8vICAgY29sb3I6IHdoaXRlO1xuICBcbi8vIH1cblxuLy8gLmxvZ291dCB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gfVxuXG4vLyAubG9nb3V0LWJ0biB7XG4vLyAgIC0tYmFja2dyb3VuZDogI2ZhZTM0NTtcbi8vICAgY29sb3I6IGJsYWNrO1xuLy8gICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuLy8gfVxuXG4vLyAuY29udGFpbmVyIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyB9XG5cbi8vIC5sb2dvdXQtaWNvbiB7XG4vLyAgIG1hcmdpbi1yaWdodDogNXB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCB7XG4vLyAgIHBhZGRpbmc6IDBweCAwO1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbi8vICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiB1bnNldDtcbi8vIH1cblxufVxuXG5cbiJdfQ== */");

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