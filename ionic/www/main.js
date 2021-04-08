(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/+St":
/*!*********************************************!*\
  !*** ./src/app/pages/route/route.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  top: 10%;\n}\nion-content ion-card {\n  --background: var(--ion-color-rp-primary);\n}\n.listImg {\n  width: 42px;\n  height: 42px;\n  margin-right: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyb3V0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxRQUFBO0FBQ0Y7QUFDRTtFQUNFLHlDQUFBO0FBQ0o7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJyb3V0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgdG9wOiAxMCU7XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXJwLXByaW1hcnkpO1xyXG4gIH1cclxufVxyXG4ubGlzdEltZyB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ddeveloper\Documents\Cronapis\Projects\mobile\rutas_app\ionic\src\main.ts */"zUnb");


/***/ }),

/***/ "1c8c":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/experience/experience.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <h2>Experiencia</h2>\r\n</ion-content>");

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

/***/ "4Xs+":
/*!********************************************!*\
  !*** ./src/app/pipes/custome-time.pipe.ts ***!
  \********************************************/
/*! exports provided: CustomeTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomeTimePipe", function() { return CustomeTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CustomeTimePipe = class CustomeTimePipe {
    transform(time) {
        let timeTranform = '';
        const _time = time.split(':');
        const hour = parseInt(_time[0], 10);
        if (hour > 12) {
            const newHour = hour - 12;
            timeTranform = `${newHour}:${_time[1]} pm`;
        }
        else {
            timeTranform = `${_time[0]}:${_time[1]} am`;
        }
        return timeTranform;
    }
};
CustomeTimePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'customeTime'
    })
], CustomeTimePipe);



/***/ }),

/***/ "5yII":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 77%;\n}\n\n.listImg {\n  height: 42px;\n  width: 42px;\n  margin: 10px;\n}\n\n.rutasEdit {\n  width: 90%;\n  /* height: 70px; */\n  position: absolute;\n  top: 14%;\n  z-index: 1;\n  left: 5%;\n  border-radius: 8px;\n}\n\n.editInp {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 2px 4px 6px #ccc;\n}\n\n.currentLoc {\n  height: 35px;\n  width: 35px;\n  border-radius: 100px;\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n}\n\n.destLoc {\n  height: 20px;\n  width: 20px;\n  border-radius: 100px;\n  background-color: black;\n}\n\n.locIcon {\n  height: 35px;\n  width: 35px;\n  font-size: 35px;\n  margin-right: 10px;\n}\n\n.currentLocation {\n  width: 35px;\n  height: 35px;\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 34px;\n  position: absolute;\n  bottom: -44px;\n  right: 2px;\n  border-radius: 100px;\n}\n\n.icon {\n  position: absolute;\n  right: 10px;\n  font-size: 24px;\n  position: absolute;\n  right: 10px;\n  display: flex;\n  font-size: 24px;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUoiLCJmaWxlIjoiaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDc3JTtcclxufVxyXG5cclxuLmxpc3RJbWcge1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5ydXRhc0VkaXQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIC8qIGhlaWdodDogNzBweDsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTQlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uZWRpdElucCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNnB4ICNjY2M7XHJcbiAgICAvL21hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jdXJyZW50TG9jIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlMzQ1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRlc3RMb2Mge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubG9jSWNvbiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmN1cnJlbnRMb2NhdGlvbiB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWUzNDU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNDRweDtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "7VC9":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/soporte/soporte.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-item (click)=\"goTo('notification')\" detail>\r\n    <ion-icon name=\"notifications-outline\" slot=\"start\"></ion-icon>\r\n    <ion-label>\r\n      Notificaciones\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item button (click)=\"goTo('support')\" detail>\r\n    <ion-icon name=\"chatbubble-ellipses-outline\" slot=\"start\"></ion-icon>\r\n    <ion-label>\r\n      Soporte / Ayuda\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n</ion-content>");

/***/ }),

/***/ "8qg0":
/*!*******************************************************!*\
  !*** ./src/app/pages/experience/experience.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: absolute;\n  top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleHBlcmllbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQUNGIiwiZmlsZSI6ImV4cGVyaWVuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1JTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "9DlD":
/*!*********************************************************!*\
  !*** ./src/app/Components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-img {\n  height: 6vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0FBQUoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgaW9uLWltZyB7XHJcbiAgICBoZWlnaHQ6IDZ2aDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "9jJz":
/*!*******************************************!*\
  !*** ./src/app/services/route.service.ts ***!
  \*******************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "N+K7");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common.service */ "OlR4");





let RouteService = class RouteService {
    constructor(_http, _common) {
        this._http = _http;
        this._common = _common;
    }
    /**
     * @description Lista las rutas de los buses
     * @param Id del cliente
     * @returns Arreglo de Rutas
     */
    list(id) {
        return this._http.get(`/routes?client_id=${id}&includes[]=driver&includes[]=routeType&includes[]=RouteStops&includes[]=bus`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response.data));
    }
    /**
     * @description Agrega una nueva ruta a la db
     * @param data Ruta
     * @returns Confirmación de agregado
     */
    add(data) {
        return this._http.post('/routes', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            this.toastMessage(response.message);
            return response.data;
        }));
    }
    toastMessage(message) {
        const color = 'primary';
        this._common.presentToast({ message, color });
    }
};
RouteService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
RouteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RouteService);



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
/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/global-constants */ "s8rx");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");








let InicioPage = class InicioPage {
    constructor(_common, userService, geolocation) {
        this._common = _common;
        this.userService = userService;
        this.geolocation = geolocation;
        this.markers = [];
        this.userMarker = [];
        this.watch = null;
        this.watchId = null;
        this.trackMarker = null;
        this.userService
            .flowhObserver()
            .subscribe(flow => { if ([0, 2, 3].includes(flow)) {
            this.ngOnInit();
        } });
    }
    ngOnInit() {
        this.clearMapError();
        this.loadMap();
    }
    bottomDrawerEvent(event) {
        if (event.type === 'item-selected') {
            this.handleItemSelect(event.data);
            return;
        }
        if (event.type === 'scan-success') {
            this.startTracking();
            return;
        }
        if (event.type === 'stop-track') {
            this.stopTracking();
            return;
        }
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const resp = yield this.geolocation.getCurrentPosition();
            const data = { coord: new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude), name: 'Aquí estoy' };
            const mapOptions = {
                center: data.coord,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.map
            };
            const map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.updateMap([data], '', map);
        });
    }
    handleItemSelect(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const resp = yield this.geolocation.getCurrentPosition();
            const data = { coord: new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude), name: 'Aquí estoy' };
            const mapOptions = {
                center: data.coord,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.map
            };
            const map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            // actualizamos el mapa y limpiamos la rutas previas
            yield this.updateMap([data], '', map);
            this.selectedItem = Object.assign({}, route);
            const stops = [...this.selectedItem.route_stops];
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer({ map, suppressMarkers: true });
            const loading = yield this._common.presentLoading();
            loading.present();
            yield this.calculateAndDisplayRoute(stops, directionsRenderer, directionsService, map);
            loading.dismiss();
        });
    }
    calculateAndDisplayRoute(locations, directionsRenderer, directionsService, map) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let marker = '';
                let iw = '';
                this.markers.map(_marker => _marker.setMap(null)); // se pasa this.map para mantener el marcador del usuario
                this.markers = [];
                const travelMode = google.maps.TravelMode.DRIVING;
                const waypoints = [];
                const origin = new google.maps.LatLng(locations[0].lattitude, locations[0].longitude);
                const destination = new google.maps.LatLng(locations[locations.length - 1].lattitude, locations[locations.length - 1].longitude);
                if (locations.length > 2) {
                    const locs = [...locations];
                    locs.shift();
                    locs.pop();
                    locs.forEach(loc => {
                        waypoints.push({
                            location: new google.maps.LatLng(loc.lattitude, loc.longitude),
                            stopover: true
                        });
                    });
                }
                const request = {
                    origin,
                    destination,
                    waypoints,
                    optimizeWaypoints: true,
                    travelMode
                };
                directionsService.route(request, (result, status) => {
                    if (status === 'OK' && result) {
                        directionsRenderer.setDirections(result);
                        const route = result.routes[0];
                        // EL primer marcador
                        marker = new google.maps.Marker({
                            position: route.legs[0].start_location,
                            animation: google.maps.Animation.DROP,
                            map,
                            icon: _constants_global_constants__WEBPACK_IMPORTED_MODULE_6__["MAP"].STOP_MARK
                        });
                        iw = new google.maps.InfoWindow({
                            content: locations[0].name
                        });
                        iw.open(this.map, marker);
                        this.markers.push(marker);
                        // Marcadores para las paradas
                        for (let i = 1; i < route.legs.length; i++) {
                            marker = new google.maps.Marker({
                                position: route.legs[i].start_location,
                                animation: google.maps.Animation.DROP,
                                map,
                                icon: _constants_global_constants__WEBPACK_IMPORTED_MODULE_6__["MAP"].STOP_MARK
                            });
                            iw = new google.maps.InfoWindow({
                                content: locations[i].name
                            });
                            iw.open(this.map, marker);
                            this.markers.push(marker);
                        }
                        // El ultimo marcador
                        marker = new google.maps.Marker({
                            position: route.legs[route.legs.length - 1].end_location,
                            animation: google.maps.Animation.DROP,
                            map,
                            icon: _constants_global_constants__WEBPACK_IMPORTED_MODULE_6__["MAP"].END_ROUTE_MARK
                        });
                        iw = new google.maps.InfoWindow({
                            content: locations[locations.length - 1].name
                        });
                        iw.open(this.map, marker);
                        this.markers.push(marker);
                    }
                });
                resolve(true);
            });
        });
    }
    startTracking() {
        this.watchId = navigator.geolocation.watchPosition((position) => {
            var _a;
            const loc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
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
    stopTracking() {
        navigator.geolocation.clearWatch(this.watchId);
        this.trackMarker.setMap(null);
    }
    updateMap(locations, extraInfo, map) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.markers.map(marker => marker.setMap(null)); // se pasa this.map para mantener el marcador del usuario
                this.markers = [];
                for (const loc of locations) {
                    const marker = new google.maps.Marker({
                        position: loc.coord,
                        animation: google.maps.Animation.DROP,
                        map,
                        icon: _constants_global_constants__WEBPACK_IMPORTED_MODULE_6__["MAP"].USER_MARK
                    });
                    const iw = new google.maps.InfoWindow({
                        content: loc.name
                    });
                    if (extraInfo !== 'noTooltip') {
                        iw.open(this.map, marker);
                    }
                    this.userMarker.push(marker);
                }
                resolve(true);
            });
        });
    }
};
InicioPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
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

/***/ "BCOl":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "HDAB");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "9DlD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants_global_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/global-constants */ "s8rx");





let HeaderComponent = class HeaderComponent {
    constructor() {
        this.logo = src_app_constants_global_constants__WEBPACK_IMPORTED_MODULE_4__["LOGO"];
    }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



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
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsqr */ "7Ozu");
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsqr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");










// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
const { Keyboard } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let BottomDrawerComponent = class BottomDrawerComponent {
    constructor(plt, router, navctl, 
    // private qrScanner: QRScanner,
    userService, loadingCtrl, gestureCtlr, nativePageTransitions) {
        this.plt = plt;
        this.router = router;
        this.navctl = navctl;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.gestureCtlr = gestureCtlr;
        this.nativePageTransitions = nativePageTransitions;
        this.selectedRoute = {};
        this.searchText = '';
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
        this.routes = [];
        this.userService.flowhObserver().subscribe(flow => this.userService.rutasFlow = flow);
    }
    ngOnInit() {
        window.addEventListener('keyboardWillShow', (e) => {
            this.dragable = false;
            this.gesture.enable(false);
            if (this.isOpen) {
                this.toggleDrawer();
            }
        });
        Keyboard.addListener('keyboardDidHide', () => {
            this.dragable = true;
            this.gesture.enable(true);
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
                        this.isOpen = true;
                    }
                    else if (ev.deltaY > 50) {
                        if (this.userService.rutasFlow === 5) {
                            this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight / 2.56}px`;
                        }
                        else {
                            this.bottomDrawerElement.style.transform = ``;
                        }
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
        if (!this.isOpen) {
            this.bottomDrawerElement.style.transition = '.4s ease-out';
            this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px`;
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
            this.isOpen = false;
        }
    }
    routeHandler(route) {
        this.isOpen = false;
        this.selectedRoute = route;
        this.userService.rutasData = route;
        this.bottomDrawerElement = this.bottomDrawer.nativeElement;
        this.gesture.enable(false);
        this.bottomDrawerElement.style.transition = '.4s ease-out';
        this.bottomDrawerElement.style.transform = '';
        this.emitEvent.emit({
            type: 'item-selected',
            data: route
        });
        this.userService.rutasFlow = 10; // Detalle de ruta
    }
    startScan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userService.rutasFlow = 4;
            this.showScan = false;
            this.bottomDrawerElement = this.bottomDrawer.nativeElement;
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
                const code = jsqr__WEBPACK_IMPORTED_MODULE_3___default()(imageData.data, imageData.width, imageData.height, {
                    inversionAttempts: 'dontInvert'
                });
                if (code === null || code === void 0 ? void 0 : code.data) {
                    this.isOpen = true;
                    this.userService.rutasFlow = 40;
                    this.scanActive = true;
                    this.stopScan();
                    // llamar al api para recibir información del bus
                    this.scanResult = code.data;
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
        this.bottomDrawerElement.style.transition = '.4s ease-out';
        this.bottomDrawerElement.style.transform = '';
        this.stream.getTracks().forEach(track => track.stop());
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
        this.gesture.enable(false);
        this.bottomDrawerElement.style.transition = '.4s ease-out';
        this.bottomDrawerElement.style.transform = ``;
    }
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["GestureController"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_7__["NativePageTransitions"] }
];
BottomDrawerComponent.propDecorators = {
    bottomDrawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['bottomDrawer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },] }],
    seat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['seat',] }],
    editRutas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['editRutas',] }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['video', { static: false },] }],
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['canvas', { static: false },] }],
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
/* harmony import */ var _route_route_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../route/route.page */ "jcYm");
/* harmony import */ var _experience_experience_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../experience/experience.page */ "vieH");









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
            },
            {
                path: 'Rutas',
                component: _route_route_page__WEBPACK_IMPORTED_MODULE_7__["RoutePage"]
            },
            {
                path: 'Experiencia',
                component: _experience_experience_page__WEBPACK_IMPORTED_MODULE_8__["ExperiencePage"]
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
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content [ngSwitch] = \"feedbackFlow\" class=\"feedbackContainer\">\r\n\r\n  <div *ngSwitchCase = 0 class=\"d-flex align-items-center justify-content-center flex-column flex-grow-1 h-100\">\r\n    <span class=\"heading mb-3\">i Has llegado a tu destino!</span>\r\n\r\n    <span class=\"mb-2\">Callifica al conductor</span>\r\n\r\n    <div class=\"d-flex mb-3\">\r\n      <img class=\"proPic mx-3\" src=\"../../../assets/prueba 1Recurso 55.png\"/>\r\n      <div class=\"d-flex flex-column justify-content-center\">\r\n        <ion-note>Luis Durain</ion-note>\r\n        <app-rating></app-rating>\r\n        \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"d-flex flex-column justify-content-center mb-3\">\r\n      <span>Callifica la unidad</span>\r\n      <app-rating></app-rating>\r\n    </div>\r\n\r\n    <div class=\"d-flex align-items-center  p-1 textWrapper mb-3\">\r\n      <img class=\"logo mx-2\" src=\"./../../../assets/route.png\" />\r\n      <div class=\"\">\r\n        <div class=\"listName\">{{userService.rutasData?.name}}</div>\r\n        <ion-note>{{userService.rutasData?.timeRange}}</ion-note>\r\n      </div>\r\n    </div>\r\n\r\n    <span>Algun comentario?</span>\r\n\r\n    <div>\r\n      <label class=\"feedbackInpLabel\">Describe tu experiencia</label>\r\n      <ion-input class=\"feedbackInp\" ></ion-input>\r\n    </div>\r\n      \r\n   \r\n\r\n    <ion-button fill=\"clear\" (click) = \"clickHandler(0)\" color=\"clear\" class=\"btn\">Enviar</ion-button>\r\n  </div>\r\n\r\n  <div *ngSwitchCase = 1 class=\"d-flex align-items-center justify-content-center flex-column flex-grow-1 h-100\">\r\n    <span class=\"boldTxt\">Gracias por vaijar con nosotros</span>\r\n    <ion-note>! Te eperamos pronto !</ion-note>\r\n\r\n    <ion-button fill=\"clear\" (click) = \"clickHandler(1)\" color=\"clear\" class=\"btn2\"><ion-icon class=\"logout-icon mx-1\" name=\"log-out-outline\" ></ion-icon >Saliar</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "HDAB":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"ion-margin-top\">\r\n    <ion-buttons slot=\"start\" class=\"menu-button\">\r\n      <ion-menu-button class=\"btn-icon\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <div class=\"ion-float-right\">\r\n      <ion-img [src]=\"logo\"></ion-img>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>");

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
    delete(serviceName, data) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + serviceName;
        return this._http.delete(url, data);
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
    constructor(loading, toastController, modalController) {
        this.loading = loading;
        this.toastController = toastController;
        this.modalController = modalController;
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
     * @param component Componente que se mostrará en el modal
     * @param cssClass Clase personalizada
     * @returns Instancia del Modal
     */
    presentModal({ component, cssClass, componentProps }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({ component, cssClass, componentProps });
            return modal;
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".feedbackContainer {\n  --background: #fae345;\n}\n\n.heading {\n  font-size: 22px;\n  font-weight: bold;\n}\n\n.proPic {\n  border-radius: 100px;\n  height: 65px;\n}\n\n.btn {\n  background: white;\n  padding: 1px;\n  position: absolute;\n  bottom: 10px;\n  font-size: 12px;\n  text-transform: none !important;\n  border-radius: 8px;\n}\n\n.btn2 {\n  background: white;\n  padding: 1px;\n  color: black;\n  margin-top: 18px;\n  font-size: 12px;\n  text-transform: none !important;\n  border-radius: 8px;\n}\n\n.feedbackInp {\n  border-bottom: 1px solid black;\n}\n\n.feedbackInpLabel {\n  font-size: 12px;\n}\n\n.logo {\n  height: 40px;\n  width: 40px;\n}\n\n.textWrapper {\n  background-color: white;\n  width: 75%;\n  border-radius: 8px;\n  box-shadow: 2px 2px 6px 1px #ccc;\n}\n\n.boldTxt {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmZWVkYmFjay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQVFBO0VBQ0ksOEJBQUE7QUFMSjs7QUFRQTtFQUNJLGVBQUE7QUFMSjs7QUFRQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBTEo7O0FBUUE7RUFDSSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBTEo7O0FBUUE7RUFDSSxpQkFBQTtBQUxKIiwiZmlsZSI6ImZlZWRiYWNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVkYmFja0NvbnRhaW5lciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYWUzNDU7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvUGljIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uYnRuMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi8vIC5mZWVkYmFja0lucCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuLy8gICAgIGJvcmRlcjogdW5zZXQ7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiBibGFjayAxcHggc29saWQ7XHJcbi8vIH1cclxuXHJcbi5mZWVkYmFja0lucCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5mZWVkYmFja0lucExhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi50ZXh0V3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAxcHggI2NjYztcclxufVxyXG5cclxuLmJvbGRUeHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "Q00G":
/*!*************************************************!*\
  !*** ./src/app/pages/soporte/soporte.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: absolute;\n  top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzb3BvcnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUNKIiwiZmlsZSI6InNvcG9ydGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/global-constants */ "s8rx");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");









let SidemenuPage = class SidemenuPage {
    constructor(changeDetectorRef, userService, _storage, _auth, router) {
        this.changeDetectorRef = changeDetectorRef;
        this.userService = userService;
        this._storage = _storage;
        this._auth = _auth;
        this.router = router;
        this.backdropVisible = false;
        this.drawerVar = 'Inicio';
        this.activeRoute = 0;
        this.addressClicked = 0;
        this.user = {};
        this.abrv = '';
        this.logo = _constants_global_constants__WEBPACK_IMPORTED_MODULE_7__["LOGO"];
        this.appPages = [
            { title: 'Inicio', url: '/sidemenu/Inicio', icon: '../../../assets/menu/home.png', route: 0 },
            { title: 'Rutas', url: '/sidemenu/Inicio', icon: '../../../assets/menu/routes.png', route: 1 },
            { title: 'Experiencia', url: '/sidemenu/Experiencia', icon: '../../../assets/menu/experience.png', route: 2 },
            { title: 'Soporte/Ayuda', url: '/sidemenu/Soporte', icon: '../../../assets/menu/support.png', route: 3 }
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
        this._storage.get(_constants_global_constants__WEBPACK_IMPORTED_MODULE_7__["USER"]).then((user) => {
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
        this.userService.flowSubject(p.route);
        this.activeRoute = i;
        this.drawerVar = p.title;
        this.router.navigate([p.url]);
    }
};
SidemenuPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
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

/***/ "RUUK":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/route/route.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-input type=\"search\" class=\"searchField\" placeholder=\"Buscar ruta\" [(ngModel)]=\"searchText\"></ion-input>\r\n<ng-container *ngIf=\"routes.length; else elseTemplate\">\r\n  <div class='itemWrapper' *ngFor=\"let route of routes | routesFilter: searchText\" (click)=\"selectRoute(route)\">\r\n    <!-- <img class=\"listImg\" *ngIf=\"item.status === 'pending'\" src=\"../../../assets/clockYellow.png\" /> -->\r\n    <img class=\"listImg\" src=\"../../../assets/briefcase.png\" />\r\n    <div>\r\n      <div class=\"ion-text-capitalize\">{{route.name }}</div>\r\n      <ion-note>{{route.start_time | customeTime }} - {{route.end_time | customeTime }}</ion-note>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n<ng-template #elseTemplate>\r\n  <div class=\"ion-text-center\">\r\n    No hay rutas disponibles\r\n  </div>\r\n</ng-template>");

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
/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/global-constants */ "s8rx");







let AppComponent = class AppComponent {
    constructor(router, _storage) {
        this.router = router;
        this._storage = _storage;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isLoggedin = yield this._storage.get(_constants_global_constants__WEBPACK_IMPORTED_MODULE_6__["TOKEN"]);
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
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");









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
        exports: [],
        providers: [_ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_8__["NativePageTransitions"]]
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    \r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>");

/***/ }),

/***/ "XlEN":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addressDetails\" *ngIf=\"selectedItem  && !userService.rutasBarEdit && userService.rutasFlow === 10\">\r\n  <div class=\"listItemWrapper\">\r\n    <img class=\"listImg\" src=\"./../../../assets/route.png\" />\r\n    <div class=\"listTextWrapper\">\r\n      <div class=\"listName\">{{selectedItem?.name}}</div>\r\n      <ion-note>{{selectedItem.start_time | customeTime }} - {{selectedItem.end_time | customeTime }}</ion-note>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"rutasEdit d-flex flex-column\" *ngIf=\"userService.rutasBarEdit\">\r\n  <div class=\"d-flex align-items-center mb-3\">\r\n    <div class=\"currentLoc\"><span class=\"destLoc\"></span></div>\r\n    <ion-input class=\"editInp d-flex align-items-center\" placeholder=\"Indico de Ruta\">\r\n      <div class=\"icon\">\r\n        <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\r\n      </div>\r\n    </ion-input>\r\n  </div>\r\n\r\n  <div class=\"d-flex align-items-center\">\r\n    <div class=\"locIcon\">\r\n      <ion-icon name=\"location\"></ion-icon>\r\n    </div>\r\n    <ion-input class=\"editInp d-flex align-items-center\" placeholder=\"Final de Ruta\">\r\n      <div class=\"icon\">\r\n        <ion-icon name=\"swap-vertical\"></ion-icon>\r\n      </div>\r\n    </ion-input>\r\n  </div>\r\n</div>\r\n<div #map id='map'></div>\r\n<app-bottom-drawer component=\"Inicio\" (emitEvent)=\"bottomDrawerEvent($event)\"></app-bottom-drawer>");

/***/ }),

/***/ "Z6aU":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/bottom-drawer/bottom-drawer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bottom-drawer\" [ngStyle]=\"{'bottom': 'calc('+ bottomPosition +'vh + env(safe-area-inset-bottom))'}\"\r\n  #bottomDrawer>\r\n  <div *ngIf=\"userService.rutasFlow === 10\" class=\"car-loc-btn\">\r\n    <div class=\"text-end\" *ngIf=\"!isOpen\">\r\n      <ion-note>Tú\r\n        <img class=\"scan\" src=\"../../../assets/mark.png\" style=\"margin: 0 5px;\" />\r\n      </ion-note>\r\n      <ion-note>Parada\r\n        <img class=\"scan\" src=\"../../../assets/stop_route.png\" style=\"margin-left: 4px;\" />\r\n      </ion-note>\r\n      <ion-note>Final de ruta\r\n        <img class=\"scan\" src=\"../../../assets/location-sharp.svg\" style=\"margin-left: 5px;\" />\r\n      </ion-note>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"dragable\" class=\"ion-text-center \">\r\n    <ion-button fill=\"clear\" expand=\"full\" (click)=\"toggleDrawer()\" class=\"minH\">\r\n      <div class=\"drawer-pull\"></div>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <div class=\"content-container mt-2\" *ngIf=\"component === 'Inicio'\">\r\n    <ion-content [ngSwitch]=\"userService.rutasFlow\">\r\n      <!-- Dashboard -->\r\n      <div *ngSwitchCase=0>\r\n        <ion-grid fixed>\r\n          <ion-row>\r\n            <ion-col>\r\n              <div class=\"text-center\">\r\n                <h2>Dashboard</h2>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n      <!-- Rutas -->\r\n      <div *ngSwitchCase=1>\r\n        <app-route (routeEvent)=\"routeHandler($event)\"></app-route>\r\n      </div>\r\n      <!-- Detalle de ruta -->\r\n      <div *ngSwitchCase=10>\r\n        <div class=\"d-flex flex-row\">\r\n          <div class=\"d-flex flex-grow-1\">\r\n            <img class=\"clock\" src=\"../../../assets/clock.png\" />\r\n            <div class=\"d-flex flex-column\">\r\n              <span>Proxima unidad</span>\r\n              <ion-note>15 minutes</ion-note>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ion-grid fixed *ngIf=\"isOpen\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-list-header>\r\n                <ion-label>Paradas de la ruta</ion-label>\r\n              </ion-list-header>\r\n              <ion-list>\r\n                <ion-item *ngFor=\"let stop of selectedRoute.route_stops\">\r\n                  <ion-label>{{ stop.name }}</ion-label>\r\n                  <ion-note>{{ stop.arrival_time | customeTime }}</ion-note>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-button fill=\"clear\" expand=\"full\" class=\"confirmRutas my-3\" (click)=\"startScan()\">\r\n          Abordar este bus\r\n        </ion-button>\r\n      </div>\r\n      <!-- Experiencia -->\r\n      <div *ngSwitchCase=2>\r\n        <h2>Experiencia</h2>\r\n      </div>\r\n      <!-- Support / Help -->\r\n      <div *ngSwitchCase=3>\r\n        <h2>Suporte / Ayuda</h2>\r\n      </div>\r\n      <!-- QR Scan -->\r\n      <div *ngSwitchCase=4>\r\n        <div class=\"d-flex flex-column align-items-center\">\r\n          <div class=\"scanBlock ion-text-center\">\r\n            <div class=\"d-flex flex-column align-items-center justify-content-center\" *ngIf=\"!showScan\">\r\n              <ion-note class=\"ion-text-center\">Para escanear código enfca el QR ubicado en la entrada del bus\r\n              </ion-note>\r\n              <img class=\"scannerImg\" src=\"../../../assets/scanner.png\" />\r\n            </div>\r\n            <div [ngClass]=\"!showScan ? 'd-none' : 'd-block'\">\r\n              <video class=\"vdo\" [hidden]='!scanActive' #video></video>\r\n              <canvas #canvas hidden></canvas>\r\n            </div>\r\n          </div>\r\n          <ion-button *ngIf=\"!showScan\" (click)=\"scannerOn()\" fill=\"clear\" class=\"confirmRutas my-3 \">\r\n            Escanear QR\r\n          </ion-button>\r\n          <ion-button *ngIf=\"showScan\" (click)=\"stopScan()\" fill=\"clear\" class=\"confirmRutas my-3 \">\r\n            <label class=\"label-button\" for=\"\">Volver</label>\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n      <!-- Travel Detail -->\r\n      <div *ngSwitchCase=\"40\">\r\n        <ion-grid fixed *ngIf=\"isOpen\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <div class=\"text-center\" id=\"travel-data\">\r\n                <h2>Datos de tu viaje</h2>\r\n                <img class=\"rounded-circle shadow-sm avatar ion-margin-vertical\"\r\n                  src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n                <ion-note>Tu conductor</ion-note>\r\n                <h5>\r\n                  Luis Duran | 4/5\r\n                  <ion-icon slot=\"end\" name=\"star\" part=\"icon\"></ion-icon>\r\n                </h5>\r\n                <ion-note>Tu ruta</ion-note>\r\n                <div id=\"info-route\">\r\n                  <img src=\"./../../../assets/route.png\" />\r\n                  <div>\r\n                    <h5>Ruta Ciudad - Tocumen</h5>\r\n                    <ion-note class=\"ion-float-left\">08:00 AM - 05:00 PM</ion-note>\r\n                  </div>\r\n                </div>\r\n\r\n                <ion-note>Tu unidad</ion-note>\r\n                <h5>\r\n                  Modelo Yutong V55 <br>\r\n                  Placa: 456yht7\r\n                </h5>\r\n\r\n                <ion-note>Puestos disponibles</ion-note>\r\n                <h5>15/30</h5>\r\n\r\n                <ion-button (click)=\"endTravel()\" class=\"button-btn ion-margin-top\">\r\n                  <ion-icon slot=\"start\" name=\"log-out-outline\" class=\"logout-icon\"></ion-icon>\r\n                  Finalizar viaje\r\n                </ion-button>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div id=\"travel-data\" *ngIf=\"!isOpen\">\r\n          <div id=\"info-route\">\r\n            <img src=\"./../../../assets/route.png\" style=\"margin-left: 0 !important;\" />\r\n            <div>\r\n              <h5>Luis Duran</h5>\r\n              <p style=\"margin: 0;\">Modelo Yutong V55 | Placa: 456yht7</p>\r\n              <ion-note class=\"ion-float-left\">Tiempo de llegada a destino: 25 min</ion-note>\r\n            </div>\r\n          </div>\r\n          <ion-button fill=\"clear\" expand=\"full\" class=\"confirmRutas my-3\" (click)=\"endTravel()\">\r\n            <ion-icon slot=\"start\" name=\"log-out-outline\" class=\"logout-icon\"></ion-icon>\r\n            Finalizar viaje\r\n          </ion-button>\r\n        </div>\r\n\r\n      </div>\r\n    </ion-content>\r\n  </div>\r\n</div>");

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
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");






















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
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
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
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__["Geolocation"],
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
    }
    ngOnInit() {
    }
    clickHandler(flow) {
        this.userService.rutasFlow = 0;
        (flow === 1) ? this.router.navigate(['/sidemenu/Inicio']) : this.feedbackFlow = 1;
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

/***/ "fDtk":
/*!*********************************************!*\
  !*** ./src/app/pipes/routes-filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: RoutesFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesFilterPipe", function() { return RoutesFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let RoutesFilterPipe = class RoutesFilterPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => it.name.toLocaleLowerCase().includes(searchText));
    }
};
RoutesFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'routesFilter'
    })
], RoutesFilterPipe);



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
/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/global-constants */ "s8rx");








let AuthInterceptorService = class AuthInterceptorService {
    constructor(router, commonService, _storage) {
        this.router = router;
        this.commonService = commonService;
        this._storage = _storage;
        this.token = '';
    }
    intercept(request, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this._storage.get(_constants_global_constants__WEBPACK_IMPORTED_MODULE_7__["TOKEN"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(token => {
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let SoportePage = class SoportePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goTo(route) {
        this.router.navigate([route]);
    }
};
SoportePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SoportePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-soporte',
        template: _raw_loader_soporte_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_soporte_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SoportePage);



/***/ }),

/***/ "jcYm":
/*!*******************************************!*\
  !*** ./src/app/pages/route/route.page.ts ***!
  \*******************************************/
/*! exports provided: RoutePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePage", function() { return RoutePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_route_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./route.page.html */ "RUUK");
/* harmony import */ var _route_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route.page.scss */ "/+St");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/route.service */ "9jJz");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");







let RoutePage = class RoutePage {
    constructor(_common, _storage, _routeService) {
        this._common = _common;
        this._storage = _storage;
        this._routeService = _routeService;
        this.routes = [];
        this.searchText = '';
        this.routeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this._storage.getUser();
            const loading = yield this._common.presentLoading();
            loading.present();
            this._routeService.list(user.client_id).subscribe((routes) => {
                this.routes = [...routes];
                loading.dismiss();
            });
        });
    }
    selectRoute(route) {
        this.routeEvent.emit(route);
    }
};
RoutePage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] }
];
RoutePage.propDecorators = {
    routeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
RoutePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-route',
        template: _raw_loader_route_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_route_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoutePage);



/***/ }),

/***/ "jk5r":
/*!***************************************************!*\
  !*** ./src/app/pages/sidemenu/sidemenu.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".appwrapper ion-menu.md ion-list {\n  padding: 20px 0;\n}\n.appwrapper ion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n.appwrapper ion-menu.md ion-list-header,\n.appwrapper ion-menu.md ion-note {\n  padding-left: 10px;\n}\n.appwrapper ion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n.appwrapper ion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n.appwrapper ion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n.appwrapper ion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n.appwrapper ion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n.appwrapper ion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n.appwrapper ion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n.appwrapper ion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n.appwrapper ion-menu.ios ion-list {\n  padding: 0px 0 0 0;\n}\n.appwrapper ion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n.appwrapper ion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n.appwrapper ion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n.appwrapper ion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n.appwrapper ion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n.appwrapper ion-menu.ios ion-list-header,\n.appwrapper ion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.appwrapper ion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n.appwrapper ion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n.appwrapper ion-item.selected {\n  --color: var(--ion-color-primary);\n}\n.appwrapper .menu-list-header {\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  flex-direction: row;\n  padding-left: 16px;\n}\n.appwrapper .profile-pic {\n  border-radius: 100px;\n  background-color: white;\n  padding: 8px;\n  font-size: 24px;\n}\n.appwrapper .heading {\n  display: flex;\n  flex-direction: column;\n  line-height: 2px;\n  margin-bottom: 5px;\n}\n.appwrapper .align-16 {\n  padding-left: 16px !important;\n}\n.appwrapper .heading-name {\n  font-size: 20px;\n}\n.appwrapper .more {\n  font-size: 26px;\n  color: white;\n}\n.appwrapper .logout {\n  display: flex;\n  justify-content: center;\n}\n.appwrapper .logout-btn {\n  --background: #fae345;\n  color: black;\n  margin-bottom: 18px;\n  text-transform: none !important;\n}\n.appwrapper .logout-icon {\n  margin-right: 5px;\n}\n.appwrapper ion-menu.md ion-list {\n  padding: 0px 0;\n}\n.appwrapper ion-menu.md ion-list#inbox-list {\n  border-bottom: unset;\n}\n.appwrapper ion-menu.md ion-item.selected {\n  --background: unset;\n}\n.appwrapper .menu-header {\n  position: absolute;\n  top: 2%;\n  width: 100%;\n  z-index: 9;\n}\n.appwrapper .menu-header ion-img {\n  height: 5vh;\n  position: absolute;\n  right: 0;\n  top: 3%;\n  z-index: 9;\n  margin-left: 20vw;\n}\n.appwrapper .menu-header .menu-button {\n  border-radius: 100px;\n  box-shadow: 1px 2px 7px 2px #ccc;\n  margin: 10px;\n  margin-left: 5%;\n  height: 40px;\n  width: 40px;\n  background: white;\n}\n.appwrapper .btn-icon {\n  color: black;\n}\n.appwrapper .backdrop {\n  width: 100%;\n  height: 100%;\n  background: #0000001f;\n  z-index: 10;\n  position: absolute;\n}\n.appwrapper .fade {\n  transition: 0.5s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n.appwrapper .fade-in {\n  transition: 0.5s linear all;\n  opacity: 1;\n}\n.appwrapper .active {\n  color: #fae345;\n}\n.appwrapper .deactive {\n  color: #616e7e;\n}\n.appwrapper .menuIcon {\n  height: 21px;\n  width: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUU7RUFDRSxlQUFBO0FBWEo7QUFjRTtFQUNFLG1CQUFBO0FBWko7QUFlRTs7RUFFRSxrQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsMkRBQUE7QUFkSjtBQWlCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBaEJKO0FBbUJFO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBcEJKO0FBdUJFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBckJKO0FBd0JFO0VBQ0Usc0RBQUE7QUF0Qko7QUF5QkU7RUFDRSwrQkFBQTtBQXZCSjtBQThCRTtFQUNFLGdCQUFBO0FBNUJKO0FBK0JFO0VBQ0Usc0JBQUE7QUE3Qko7QUFnQ0U7RUFDRSxrQkFBQTtBQTlCSjtBQWlDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUEvQko7QUFrQ0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFoQ0o7QUFtQ0U7RUFDRSwrQkFBQTtBQWpDSjtBQW9DRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBbENKO0FBcUNFO0VBQ0Usa0JBQUE7QUFuQ0o7QUFzQ0U7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQXBDSjtBQXVDRTtFQUNFLGtCQUFBO0FBckNKO0FBd0NFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUF2Q0o7QUEwQ0U7RUFDRSxpQ0FBQTtBQXhDSjtBQTJDRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUExQ0o7QUE2Q0U7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUEzQ0o7QUE4Q0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBNUNKO0FBK0NFO0VBQ0UsNkJBQUE7QUE3Q0o7QUFnREU7RUFDRSxlQUFBO0FBOUNKO0FBaURFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUEvQ0o7QUFrREU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFoREo7QUFtREU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBakRKO0FBb0RFO0VBQ0UsaUJBQUE7QUFsREo7QUFxREU7RUFDRSxjQUFBO0FBbkRKO0FBc0RFO0VBQ0Usb0JBQUE7QUFwREo7QUF1REU7RUFDRSxtQkFBQTtBQXJESjtBQXdERTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBdERKO0FBd0RJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUF0RE47QUF5REk7RUFDRSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFJQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBMUROO0FBOERFO0VBQ0UsWUFBQTtBQTVESjtBQStERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUE3REo7QUFnRUU7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBOURKO0FBaUVFO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0FBL0RKO0FBa0VFO0VBQ0UsY0FBQTtBQWhFSjtBQW1FRTtFQUNFLGNBQUE7QUFqRUo7QUFvRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQWxFSiIsImZpbGUiOiJzaWRlbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwd3JhcHBlciB7XHJcbiAgLy8gICBpb24tbWVudSBpb24tY29udGVudCB7XHJcbiAgLy8gICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpb24tbWVudS5tZCBpb24tY29udGVudCB7XHJcbiAgLy8gICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAvLyAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAvLyAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgLy8gICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5cclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5tZCBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICAgIC8vY29sb3I6ICM2MTZlN2U7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDBweCAwIDAgMDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjNzM4NDlhO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gIGlvbi1ub3RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICAubWVudS1saXN0LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlMzQ1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvL2p1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1waWMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIC5hbGlnbi0xNiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5oZWFkaW5nLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vcmUge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ291dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubG9nb3V0LWJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYWUzNDU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sb2dvdXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XHJcbiAgICBib3JkZXItYm90dG9tOiB1bnNldDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIC0tYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAubWVudS1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTtcclxuXHJcbiAgICBpb24taW1nIHtcclxuICAgICAgaGVpZ2h0OiA1dmg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMyU7XHJcbiAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDdweCAycHggI2NjYztcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgLy8gbGVmdDogNSU7XHJcbiAgICAgIC8vIHRvcDogMiU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi1pY29uIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5iYWNrZHJvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAxZjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgLmZhZGUge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXIgYWxsO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgLmZhZGUtaW4ge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXIgYWxsO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmYWUzNDU7XHJcbiAgfVxyXG5cclxuICAuZGVhY3RpdmUge1xyXG4gICAgY29sb3I6ICM2MTZlN2U7XHJcbiAgfVxyXG5cclxuICAubWVudUljb24ge1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _pipes_custome_time_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/custome-time.pipe */ "4Xs+");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "BCOl");
/* harmony import */ var _pipes_routes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/routes-filter.pipe */ "fDtk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_route_route_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/route/route.page */ "jcYm");
/* harmony import */ var ionic4_tooltips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ionic4-tooltips */ "TtsJ");













let SharedComponentsModule = class SharedComponentsModule {
};
SharedComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _bottom_drawer_bottom_drawer_component__WEBPACK_IMPORTED_MODULE_4__["BottomDrawerComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"],
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"],
            _pipes_custome_time_pipe__WEBPACK_IMPORTED_MODULE_7__["CustomeTimePipe"],
            _pipes_routes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["RoutesFilterPipe"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _pages_route_route_page__WEBPACK_IMPORTED_MODULE_11__["RoutePage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            ionic4_tooltips__WEBPACK_IMPORTED_MODULE_12__["TooltipsModule"].forRoot(),
        ],
        exports: [
            _bottom_drawer_bottom_drawer_component__WEBPACK_IMPORTED_MODULE_4__["BottomDrawerComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"],
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"],
            _pipes_custome_time_pipe__WEBPACK_IMPORTED_MODULE_7__["CustomeTimePipe"],
            _pipes_routes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["RoutesFilterPipe"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.service */ "OlR4");
/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/global-constants */ "s8rx");








let AuthService = class AuthService {
    constructor(_common, _storage, _httpService) {
        this._common = _common;
        this._storage = _storage;
        this._httpService = _httpService;
        this.$auth = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @description Inicio de sesión a la app
     * @param data Objeto { email, password }
     */
    login(data) {
        return this._httpService.post('/login/user', data);
    }
    register(data) {
        return this._httpService.post('/users', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            this.toastMessage(response.message);
            return response;
        }));
    }
    recoverPassword(data) {
        return this._httpService.post('/reset-password', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            const message = response.message;
            this.toastMessage(response.message);
        }));
    }
    isLoggedIn() {
        return this._storage.get(_constants_global_constants__WEBPACK_IMPORTED_MODULE_7__["TOKEN"]) ? true : false;
    }
    /**
     * @description Válida si el correo ya existe en el sistema
     * @param email Email del usuario a consultar
     * @returns True o False
     */
    exist(email) {
        return new Promise(resolve => {
            this._httpService.get(`/verify-email/${email}`).subscribe(res => resolve(res));
        });
    }
    toastMessage(message) {
        const color = 'primary';
        this._common.presentToast({ message, color });
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
    { type: _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
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
/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/global-constants */ "s8rx");




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
     * @description Recupera el usuario almacenado en el localStorage
     * @returns Usuario
     */
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield Storage.get({ key: _constants_global_constants__WEBPACK_IMPORTED_MODULE_3__["USER"] });
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
/* harmony default export */ __webpack_exports__["default"] = (".bottom-drawer {\n  position: absolute;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  width: 100%;\n  height: 88vh;\n  z-index: 11;\n  background: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.bottom-position-max {\n  bottom: calc(-0vh + env(safe-area-inset-bottom));\n}\n\n.bottom-position-min {\n  bottom: calc(-69vh + env(safe-area-inset-bottom));\n}\n\n.drawer-pull {\n  background: #cccccc;\n  height: 4px;\n  width: 60px;\n}\n\n.backdrop {\n  width: 100%;\n  height: 100%;\n  background: #0000001f;\n  z-index: 10;\n  position: absolute;\n}\n\n.fade {\n  transition: 0.5s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n\n.fade-in {\n  transition: 0.5s linear all;\n  opacity: 1;\n}\n\n.listImg {\n  width: 42px;\n  height: 42px;\n  margin-right: 18px;\n}\n\n.timeText {\n  font-size: 12px;\n  color: gray;\n  margin-top: 3px;\n}\n\n.content-container {\n  height: 100%;\n  padding-bottom: 15vh;\n}\n\n.itemWrapper {\n  --inner-border-width: 0;\n  margin-top: 18px;\n  display: flex;\n  line-height: initial;\n  align-items: center;\n}\n\n.minH {\n  height: 16px;\n}\n\n.scan {\n  height: 20px;\n  padding-right: 10px;\n}\n\n.confirmRutas {\n  background: #fae345;\n  border-radius: 8px;\n  color: black;\n  text-transform: none;\n  height: 46px;\n  text-transform: initial;\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.clock {\n  height: 18px;\n  margin-right: 5px;\n  margin-top: 1.5%;\n}\n\n.item-native {\n  padding-inline-start: unset;\n  padding-inline-end: unset;\n}\n\n.driverWrapper {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n}\n\n.driverOverview {\n  display: flex;\n  flex-direction: row;\n}\n\n.dp {\n  width: 55px;\n  height: 55px;\n  align-self: center;\n  margin-right: 10px;\n}\n\n.driverDetail {\n  display: flex;\n  flex-direction: column;\n  line-height: normal;\n}\n\n.drivername {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.driverPlaceDetail {\n  display: flex;\n  flex-direction: row;\n  font-size: 16px;\n}\n\n.placePadding {\n  padding-right: 6px;\n}\n\n.confirmDriverBtn {\n  margin-top: 3%;\n  --background: #fae345;\n  color: black;\n  --border-radius: 7px;\n}\n\n.setAtBottom {\n  margin-top: 10vh;\n}\n\n.expandedDetailWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.expandedDp {\n  height: 150px;\n}\n\n.expandedSelectedItem {\n  display: flex;\n  flex-direction: row;\n  width: 50%;\n  font-size: 14px;\n  text-align: center;\n}\n\n.equalLength {\n  display: flex;\n  flex: 1;\n  padding: 5px;\n  align-items: center;\n}\n\n.starImg {\n  height: 15px;\n  padding-left: 5px;\n  color: #fae345;\n}\n\n.expanded-driverName {\n  border-right: gray 1px solid;\n}\n\n.flow-4-btn-1 {\n  background-color: #fae345;\n  color: black;\n  text-transform: none !important;\n}\n\n.flow-4-btn-2 {\n  background-color: #ebebeb;\n  color: #8f8f8f;\n  text-transform: none !important;\n}\n\n.btn-select {\n  border: 1px solid #ccc;\n  display: flex;\n  flex: 1;\n  margin: 16px 5px;\n  border-radius: 8px;\n}\n\n.btn35 {\n  width: 38%;\n  text-transform: none !important;\n}\n\n.emptyRow {\n  height: 10px;\n  width: 10px;\n}\n\n.rowView {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.imgWrapper {\n  width: 18%;\n}\n\n.rowWrapper {\n  background: #f4f4f4;\n  border-radius: 15%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-top: 8%;\n  padding-bottom: 8%;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.extraShadow {\n  box-shadow: 2px 4px 6px #ccc;\n  margin-bottom: 3%;\n  width: 99%;\n  border-radius: 7px;\n  position: sticky;\n  background: white;\n  height: 9vh;\n  top: 0px;\n}\n\n.totalSeats {\n  position: sticky;\n  bottom: 0%;\n  background: white;\n  border-top: 1px solid #ccc;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bottomSeatWrapper {\n  width: 20%;\n  box-shadow: 2px 4px 6px grey;\n  border-radius: 8%;\n  margin-right: 7px;\n  margin-bottom: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 5px;\n  position: relative;\n}\n\n.seatBtn {\n  width: 90%;\n  --background: #fae345;\n  color: black;\n  --border-radius: 7px;\n  text-transform: initial;\n}\n\n.totalSeatCount {\n  align-self: flex-end;\n  width: 60%;\n  background: gainsboro;\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  font-size: 11px;\n}\n\n.smallSeat {\n  height: 4vh;\n  margin-top: 23%;\n}\n\n.smallSeatWrapper {\n  height: 11vh;\n}\n\n.seatType {\n  font-size: 10px;\n  line-height: normal;\n}\n\n.noMargin {\n  margin-right: unset;\n}\n\n.scanBlock {\n  height: 45vh;\n  margin: 20px;\n  padding: 18px;\n}\n\n.vdo {\n  height: 35vh;\n  border-radius: 20px;\n}\n\n.car-loc-btn {\n  position: absolute;\n  top: -10%;\n  right: 3%;\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 34px;\n  border-radius: 100px;\n}\n\n.td,\nth {\n  width: 70px;\n}\n\n.scannerImg {\n  height: 40vh;\n}\n\n.brokenTxt {\n  line-break: anywhere;\n}\n\n.cardInDrawer {\n  width: 80%;\n}\n\n.seatContentWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.seatImg {\n  padding: 2px;\n}\n\n.bigseats {\n  margin-top: 25%;\n}\n\n.extendedHeight {\n  height: 12vh;\n}\n\n.borderRad {\n  border-radius: 8px;\n}\n\n.tbl {\n  border-collapse: separate;\n}\n\n.roundBorderLeft {\n  border-top-left-radius: 10px;\n}\n\n.roundBorderRight {\n  border-top-right-radius: 10px;\n}\n\nion-note {\n  display: block;\n}\n\n.avatar {\n  height: 15vh;\n}\n\n#travel-data #info-route {\n  display: flex;\n}\n\n#travel-data #info-route img {\n  width: 48px;\n  height: 48px;\n  margin: 0 10px;\n}\n\n#travel-data #info-route h5 {\n  margin: 0;\n}\n\n#travel-data #info-route ion-note {\n  margin: 0;\n}\n\n#travel-data ion-note {\n  margin: 16px 0 5px;\n}\n\n#travel-data h5 {\n  font-weight: normal;\n}\n\n#travel-data h5 ion-icon {\n  color: var(--ion-color-rp-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib3R0b20tZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFHQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0RBQUE7QUFERjs7QUFJQTtFQUNFLGlEQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBREY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSwyQkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBRUUsWUFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBRUUsNEJBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQUpGOztBQU9BO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtBQUpGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxVQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUpGOztBQU9BOztFQUVFLFdBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFPQTtFQUNFLG9CQUFBO0FBSkY7O0FBT0E7RUFDRSxVQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0FBSkY7O0FBT0E7RUFDRSw0QkFBQTtBQUpGOztBQU9BO0VBQ0UsNkJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFRRTtFQUNFLGFBQUE7QUFMSjs7QUFNSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUpOOztBQU1JO0VBQ0UsU0FBQTtBQUpOOztBQU1JO0VBQ0UsU0FBQTtBQUpOOztBQU9FO0VBQ0Usa0JBQUE7QUFMSjs7QUFPRTtFQUNFLG1CQUFBO0FBTEo7O0FBTUk7RUFDRSxrQ0FBQTtBQUpOIiwiZmlsZSI6ImJvdHRvbS1kcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tLWRyYXdlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgaGVpZ2h0OiA4OHZoO1xyXG4gIHotaW5kZXg6IDExO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3R0b20tcG9zaXRpb24tbWF4IHtcclxuICBib3R0b206IGNhbGMoLTB2aCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XHJcbn1cclxuXHJcbi5ib3R0b20tcG9zaXRpb24tbWluIHtcclxuICBib3R0b206IGNhbGMoLTY5dmggKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xyXG59XHJcblxyXG4uZHJhd2VyLXB1bGwge1xyXG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uYmFja2Ryb3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMWY7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZmFkZSB7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXIgYWxsO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5mYWRlLWluIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGxpbmVhciBhbGw7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmxpc3RJbWcge1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi50aW1lVGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAvLyBoZWlnaHQ6IDc1JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1dmg7XHJcbn1cclxuXHJcbi5pdGVtV3JhcHBlciB7XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5taW5IIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5zY2FuIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNvbmZpcm1SdXRhcyB7XHJcbiAgYmFja2dyb3VuZDogI2ZhZTM0NTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGhlaWdodDogNDZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNsb2NrIHtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMS41JTtcclxufVxyXG5cclxuLml0ZW0tbmF0aXZlIHtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogdW5zZXQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB1bnNldDtcclxufVxyXG5cclxuLmRyaXZlcldyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZHJpdmVyT3ZlcnZpZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmRwIHtcclxuICB3aWR0aDogNTVweDtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRyaXZlckRldGFpbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5kcml2ZXJuYW1lIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5kcml2ZXJQbGFjZURldGFpbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnBsYWNlUGFkZGluZyB7XHJcbiAgcGFkZGluZy1yaWdodDogNnB4O1xyXG59XHJcblxyXG4uY29uZmlybURyaXZlckJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmFlMzQ1O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLWJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLnNldEF0Qm90dG9tIHtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG59XHJcblxyXG4uZXhwYW5kZWREZXRhaWxXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4cGFuZGVkRHAge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5leHBhbmRlZFNlbGVjdGVkSXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVxdWFsTGVuZ3RoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGFySW1nIHtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6ICNmYWUzNDU7XHJcbn1cclxuXHJcbi5leHBhbmRlZC1kcml2ZXJOYW1lIHtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiBncmF5IDFweCBzb2xpZDtcclxufVxyXG5cclxuLmZsb3ctNC1idG4tMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZTM0NTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsb3ctNC1idG4tMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICBjb2xvcjogIzhmOGY4ZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXNlbGVjdCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luOiAxNnB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5idG4zNSB7XHJcbiAgd2lkdGg6IDM4JTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5lbXB0eVJvdyB7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4ucm93VmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nV3JhcHBlciB7XHJcbiAgd2lkdGg6IDE4JTtcclxufVxyXG5cclxuLnJvd1dyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDglO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5leHRyYVNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMnB4IDRweCA2cHggI2NjYztcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICB3aWR0aDogOTklO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGhlaWdodDogOXZoO1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG4udG90YWxTZWF0cyB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYm90dG9tU2VhdFdyYXBwZXIge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDRweCA2cHggZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA4JTtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VhdEJ0biB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICAtLWJhY2tncm91bmQ6ICNmYWUzNDU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcblxyXG4udG90YWxTZWF0Q291bnQge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLnNtYWxsU2VhdCB7XHJcbiAgaGVpZ2h0OiA0dmg7XHJcbiAgbWFyZ2luLXRvcDogMjMlO1xyXG59XHJcblxyXG4uc21hbGxTZWF0V3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMXZoO1xyXG59XHJcblxyXG4uc2VhdFR5cGUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ubm9NYXJnaW4ge1xyXG4gIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbn1cclxuXHJcbi5zY2FuQmxvY2sge1xyXG4gIGhlaWdodDogNDV2aDtcclxuICBtYXJnaW46IDIwcHg7XHJcblxyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbn1cclxuXHJcbi52ZG8ge1xyXG4gIGhlaWdodDogMzV2aDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyLWxvYy1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMCU7XHJcbiAgcmlnaHQ6IDMlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi50ZCxcclxudGgge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG59XHJcblxyXG4uc2Nhbm5lckltZyB7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG59XHJcblxyXG4uYnJva2VuVHh0IHtcclxuICBsaW5lLWJyZWFrOiBhbnl3aGVyZTtcclxufVxyXG5cclxuLmNhcmRJbkRyYXdlciB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnNlYXRDb250ZW50V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWF0SW1nIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5iaWdzZWF0cyB7XHJcbiAgbWFyZ2luLXRvcDogMjUlO1xyXG59XHJcblxyXG4uZXh0ZW5kZWRIZWlnaHQge1xyXG4gIGhlaWdodDogMTJ2aDtcclxufVxyXG5cclxuLmJvcmRlclJhZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4udGJsIHtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG59XHJcblxyXG4ucm91bmRCb3JkZXJMZWZ0IHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucm91bmRCb3JkZXJSaWdodCB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG4jdHJhdmVsLWRhdGEge1xyXG4gICNpbmZvLXJvdXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLW5vdGUge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1ub3RlIHtcclxuICAgIG1hcmdpbjogMTZweCAwIDVweDtcclxuICB9XHJcbiAgaDUge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ycC1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "N+K7");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.service */ "OlR4");







let UserService = class UserService {
    constructor(platform, _common, _httpService) {
        this.platform = platform;
        this._common = _common;
        this._httpService = _httpService;
        this.rutasFlow = 0;
        this.rutasBarEdit = false;
        this.$flow = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @description Mustra la lista de usuario
     * @returns Lista de usuarios
     */
    list() {
        return this._httpService.get('/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => response.data));
    }
    /**
     * @description Registra un nuevo usuario
     * @param usuario Datos del usuario
     * @returns usuario registrado
     */
    add(usuario) {
        return this._httpService.post('/users', usuario);
    }
    /**
     * @description Actualización del usuario
     * @param id Id del usuario a actualizar
     * @param client Data que se actualizará del usuario
     * @returns usuario Actualizado
     */
    update(id, client) {
        return this._httpService.put(`/users/${id}`, client);
    }
    /**
     * @description Eliminación de usuario de la DB
     * @param id Id del usuario a eliminar
     * @returns Notificación
     */
    delete(id) {
        return this._httpService.delete(`/users/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            this.toastMessage(response.message);
        }));
    }
    comment(comment) {
        const data = {
            type_comment_id: 4,
            comment
        };
        return this._httpService.post('/comments', data);
    }
    toastMessage(message) {
        const color = 'primary';
        this._common.presentToast({ message, color });
    }
    subscribeBackHandler() {
        this.platform.backButton.subscribe();
    }
    unsubscribeBackHandler() {
        this.platform.backButton.unsubscribe();
    }
    /**
     * @description Genera el stream de eventos usando next() para crear el evento
     */
    flowSubject(flow) {
        this.$flow.next(flow);
        // this.$flow.complete();
    }
    /**
     * @description Creación del observer mediante el método asObserver(), el cual sera consumido por el componente
     * @returns Observable
     */
    flowhObserver() {
        return this.$flow.asObservable();
    }
};
UserService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "s8rx":
/*!***********************************************!*\
  !*** ./src/app/constants/global-constants.ts ***!
  \***********************************************/
/*! exports provided: ERROR_FORM, LOGO, TOKEN, USER, MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_FORM", function() { return ERROR_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGO", function() { return LOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP", function() { return MAP; });
const ERROR_FORM = {
    invalidEmail: 'Email inválido.',
    required: 'Campo obligatorio.',
    invalidUrl: 'Ingere una url válida.',
    onlyLetter: 'Sólo se permiten caracteres',
    matchError: 'Los campos contraseña y Repetir contraseña deben coincidir',
    onlyDigits: 'Sólo se permiten números',
    minLength: 'El mínimo de caracteres es de '
};
const LOGO = './../../../assets/loginLogo.png';
const TOKEN = 'rp_token';
const USER = 'rp_user';
const MAP = {
    END_ROUTE_MARK: './../../../assets/location-sharp.svg',
    USER_MARK: './../../../assets/user_mark.png',
    STOP_MARK: './../../../assets/stop_route.png'
};


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
    },
    {
        path: 'support',
        loadChildren: () => __webpack_require__.e(/*! import() | support-support-module */ "support-support-module").then(__webpack_require__.bind(null, /*! ./support/support.module */ "Sn5W")).then(m => m.SupportPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() | notification-notification-module */ "notification-notification-module").then(__webpack_require__.bind(null, /*! ./notification/notification.module */ "C23j")).then(m => m.NotificationPageModule)
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"appwrapper\">\r\n  <!-- <ion-split-pane> -->\r\n  <ion-menu contentId=\"home\" type=\"overlay\">\r\n    <ion-content class=\"content\">\r\n      <div class=\"d-flex flex-column h-100 justify-content-between\">\r\n        <ion-list id=\"inbox-list\">\r\n          <div class=\"menu-list-header\">\r\n            <ng-container *ngIf=\"user.imageUrl; else elseTemplate\">\r\n              <ion-avatar>\r\n                <img [src]=\"user.imageUrl\">\r\n              </ion-avatar>\r\n            </ng-container>\r\n            <ng-template #elseTemplate>\r\n              <span class=\"profile-pic\">{{ abrv | uppercase }}</span>\r\n            </ng-template>\r\n            <div class=\"heading\">\r\n              <ion-note class=\"align-16\">Hola</ion-note>\r\n              <span class=\"align-16 heading-name\">{{ user.name }}</span>\r\n            </div>\r\n            <ion-icon class=\"more align-16\" name=\"ellipsis-horizontal\"></ion-icon>\r\n          </div>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" (click)=\"menuOptionClickHandle(p, i)\" lines=\"none\" detail=\"false\">\r\n              <img class=\"px-3 menuIcon\" [src]=\"p.icon\" />\r\n              <ion-label [ngClass]=\"activeRoute === i ? 'active' : 'deactive'\" class=\"menu-title\">{{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n        <div class=\"logout\">\r\n          <ion-button class=\"logout-btn\" (click)=\"logout()\">\r\n            <ion-icon class=\"logout-icon\" name=\"log-out-outline\"></ion-icon>Cerrar sesión\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <div class=\"menu-header\">\r\n    <ion-buttons slot=\"start\" class=\"ion-float-left ion-margin-horizontal menu-button\">\r\n      <ion-menu-button class=\"btn-icon\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-img [src]=\"logo\" class=\"ion-float-right mt-1\"></ion-img>\r\n  </div>\r\n  <div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\" tappable (click)=\"bottomDrawer.toggleDrawer()\">\r\n  </div>\r\n  <ion-router-outlet id=\"home\"></ion-router-outlet>\r\n</div>");

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
        loadChildren: () => Promise.all(/*! import() | pages-authentication-authentication-module */[__webpack_require__.e("default~modals-clients-modal-clients-modal-module~pages-authentication-authentication-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ./pages/authentication/authentication.module */ "CAGU")).then(m => m.AuthenticationPageModule)
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
        loadChildren: () => __webpack_require__.e(/*! import() | pages-register-register-module */ "pages-register-register-module").then(__webpack_require__.bind(null, /*! ./pages/register/register.module */ "fhSy")).then(m => m.RegisterPageModule)
    },
    {
        path: 'clients-modal',
        loadChildren: () => Promise.all(/*! import() | modals-clients-modal-clients-modal-module */[__webpack_require__.e("default~modals-clients-modal-clients-modal-module~pages-authentication-authentication-module"), __webpack_require__.e("modals-clients-modal-clients-modal-module")]).then(__webpack_require__.bind(null, /*! ./modals/clients-modal/clients-modal.module */ "RDMY")).then(m => m.ClientsModalPageModule)
    },
    {
        path: 'route',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-route-route-module */ "pages-route-route-module").then(__webpack_require__.bind(null, /*! ./pages/route/route.module */ "0eej")).then(m => m.RoutePageModule)
    },
    {
        path: 'experience',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-experience-experience-module */ "pages-experience-experience-module").then(__webpack_require__.bind(null, /*! ./pages/experience/experience.module */ "uPYg")).then(m => m.ExperiencePageModule)
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

/***/ "vieH":
/*!*****************************************************!*\
  !*** ./src/app/pages/experience/experience.page.ts ***!
  \*****************************************************/
/*! exports provided: ExperiencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePage", function() { return ExperiencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_experience_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./experience.page.html */ "1c8c");
/* harmony import */ var _experience_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience.page.scss */ "8qg0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExperiencePage = class ExperiencePage {
    constructor() { }
    ngOnInit() {
        console.log('Experience Page');
    }
};
ExperiencePage.ctorParameters = () => [];
ExperiencePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-experience',
        template: _raw_loader_experience_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_experience_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExperiencePage);



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
/* harmony import */ var _Components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/shared-components.module */ "kwd/");








let SoportePageModule = class SoportePageModule {
};
SoportePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _Components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
            _soporte_routing_module__WEBPACK_IMPORTED_MODULE_5__["SoportePageRoutingModule"],
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
/* harmony default export */ __webpack_exports__["default"] = (".appwrapper ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n.appwrapper ion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkVBQUE7QUFBSjtBQUdFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFESiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwd3JhcHBlciB7XHJcbiAgaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC8vIGlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICAvLyAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICAvLyAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbiAgLy8gaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gIC8vICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XHJcbiAgLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAvLyAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAvLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIC8vICAgbWluLWhlaWdodDogMjBweDtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgLy8gICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIC8vICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgLy8gICBjb2xvcjogIzc1NzU3NTtcclxuXHJcbiAgLy8gICBtaW4taGVpZ2h0OiAyNnB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gIC8vICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gIC8vICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAvLyAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICAvLyAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgLy8gICBjb2xvcjogIzYxNmU3ZTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAvLyAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gIC8vICAgcGFkZGluZzogMHB4IDAgMCAwO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAvLyAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIC8vICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XHJcbiAgLy8gICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLy8gICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIC8vICAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICAvLyAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIC8vICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIC8vICAgY29sb3I6ICM3Mzg0OWE7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAvLyAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXHJcbiAgLy8gaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAvLyAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAvLyAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIC8vICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaW9uLW5vdGUge1xyXG4gIC8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8vICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAvLyAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAvLyAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIC5tZW51LWxpc3QtaGVhZGVyIHtcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNmYWUzNDU7XHJcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyAgIC8vanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gICBoZWlnaHQ6IDEwMHB4O1xyXG4gIC8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAvLyAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuXHJcbiAgLy8gfVxyXG5cclxuICAvLyAucHJvZmlsZS1waWMge1xyXG4gIC8vICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAvLyAgIHBhZGRpbmc6IDhweDtcclxuICAvLyAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAvLyB9XHJcblxyXG4gIC8vIC5oZWFkaW5nIHtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8vICAgbGluZS1oZWlnaHQ6IDJweDtcclxuICAvLyAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAvLyB9XHJcblxyXG4gIC8vIC5hbGlnbi0xNiB7XHJcbiAgLy8gICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcclxuICAvLyB9XHJcblxyXG4gIC8vIC5oZWFkaW5nLW5hbWUge1xyXG4gIC8vICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLm1vcmUge1xyXG4gIC8vICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIC8vICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAvLyB9XHJcblxyXG4gIC8vIC5sb2dvdXQge1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICAvLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLmxvZ291dC1idG4ge1xyXG4gIC8vICAgLS1iYWNrZ3JvdW5kOiAjZmFlMzQ1O1xyXG4gIC8vICAgY29sb3I6IGJsYWNrO1xyXG4gIC8vICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICAvLyB9XHJcblxyXG4gIC8vIC5jb250YWluZXIge1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICAvLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLy8gfVxyXG5cclxuICAvLyAubG9nb3V0LWljb24ge1xyXG4gIC8vICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgLy8gICBwYWRkaW5nOiAwcHggMDtcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4gIC8vICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLy8gICAtLWJhY2tncm91bmQ6IHVuc2V0O1xyXG4gIC8vIH1cclxufVxyXG4iXX0= */");

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