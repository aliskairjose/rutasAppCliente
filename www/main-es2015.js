(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/+St":
/*!*********************************************!*\
  !*** ./src/app/pages/route/route.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  top: 10%;\n}\nion-content ion-card {\n  --background: var(--rp-color-primary);\n}\n.listImg {\n  width: 42px;\n  height: 42px;\n  margin-right: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyb3V0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxRQUFBO0FBQ0Y7QUFDRTtFQUNFLHFDQUFBO0FBQ0o7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJyb3V0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgdG9wOiAxMCU7XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcnAtY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcbi5saXN0SW1nIHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ddeveloper\Documents\Cronapis\Projects\mobile\rutas_app\src\main.ts */"zUnb");


/***/ }),

/***/ "1c8c":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/experience/experience.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-margin-bottom\" scroll-y=\"false\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"d-flex container\">\r\n          <div class=\"header-rating\">\r\n            <img [src]=\"face\" alt=\"\" class=\"rating-face\">\r\n            <div class=\"rating-header ion-text-center\">\r\n              <div>\r\n                <h3>Calificación del servicio</h3>\r\n                <app-rating size=\"large\" readOnly=\"true\" [rate]=\"rating\"></app-rating>\r\n                <p>{{rating}}/5 | {{ msg }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list-header>\r\n          <h3>Listado de viajes</h3>\r\n        </ion-list-header>\r\n        <ion-list lines=\"full\">\r\n          <ng-container *ngFor=\"let l of list; let i=index\">\r\n            <ion-item>\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"/assets/route.png\">\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h2>{{l.route.name}}</h2>\r\n                <h3>Bus: {{l.route.bus.license_plate | uppercase }} </h3>\r\n              </ion-label>\r\n              <div>\r\n                <div class=\"text-end\">\r\n                  <ion-note>{{ l.created_at | date: 'short' }}</ion-note>\r\n                </div>\r\n                <app-rating readOnly=\"true\" [rate]=\"l.calification_route\"> </app-rating>\r\n              </div>\r\n            </ion-item>\r\n          </ng-container>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

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
        if (time) {
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
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 77%;\n}\n\n.listImg {\n  height: 42px;\n  width: 42px;\n  margin: 10px;\n}\n\n.rutasEdit {\n  width: 90%;\n  /* height: 70px; */\n  position: absolute;\n  top: 14%;\n  z-index: 1;\n  left: 5%;\n  border-radius: 8px;\n}\n\n.editInp {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 2px 4px 6px #ccc;\n}\n\n.currentLoc {\n  height: 35px;\n  width: 35px;\n  border-radius: 100px;\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n}\n\n.destLoc {\n  height: 20px;\n  width: 20px;\n  border-radius: 100px;\n  background-color: black;\n}\n\n.locIcon {\n  height: 35px;\n  width: 35px;\n  font-size: 35px;\n  margin-right: 10px;\n}\n\n.currentLocation {\n  width: 35px;\n  height: 35px;\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 34px;\n  position: absolute;\n  bottom: -44px;\n  right: 2px;\n  border-radius: 100px;\n}\n\n.icon {\n  position: absolute;\n  right: 10px;\n  font-size: 24px;\n  position: absolute;\n  right: 10px;\n  display: flex;\n  font-size: 24px;\n  align-items: center;\n  justify-content: center;\n}\n\nagm-map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUoiLCJmaWxlIjoiaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDc3JTtcclxufVxyXG5cclxuLmxpc3RJbWcge1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5ydXRhc0VkaXQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIC8qIGhlaWdodDogNzBweDsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTQlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uZWRpdElucCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNnB4ICNjY2M7XHJcbiAgICAvL21hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jdXJyZW50TG9jIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlMzQ1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmRlc3RMb2Mge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubG9jSWNvbiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmN1cnJlbnRMb2NhdGlvbiB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWUzNDU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNDRweDtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "6ckw":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "spzo");
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss */ "ws6Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/route.service */ "9jJz");






let DashboardPage = class DashboardPage {
    constructor(geolocation, routeService) {
        this.geolocation = geolocation;
        this.routeService = routeService;
        this.route = {};
        this.hasRoute = false;
        this.routeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pos = yield this.geolocation.getCurrentPosition();
            this.routeService.closestRoute(pos.coords.latitude, pos.coords.longitude).subscribe(response => {
                this.message = response.message;
                if (response.data) {
                    this.hasRoute = true;
                    this.route = response.data;
                }
            });
        });
    }
    selectRoute(route) {
        this.routeEvent.emit(route);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_5__["RouteService"] }
];
DashboardPage.propDecorators = {
    routeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardPage);



/***/ }),

/***/ "7Efn":
/*!********************************************!*\
  !*** ./src/app/services/pusher.service.ts ***!
  \********************************************/
/*! exports provided: PusherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherService", function() { return PusherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");



let PusherService = class PusherService {
    constructor() {
    }
    init(id) {
        this.pusher = new Pusher(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].PUSHER_APP_KEY, {
            cluster: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].PUSHER_APP_CLUSTER,
            encrypted: true,
        });
        Pusher.logToConsole = true;
        const channel = this.pusher.subscribe(`route-${id}`);
        return channel;
    }
    finish(id) {
        this.pusher.unsubscribe(`route-${id}`);
    }
};
PusherService.ctorParameters = () => [];
PusherService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PusherService);



/***/ }),

/***/ "7VC9":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/soporte/soporte.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-item (click)=\"goTo('notification')\" detail>\r\n    <ion-icon name=\"notifications-outline\" slot=\"start\"></ion-icon>\r\n    <ion-label>\r\n      Notificaciones\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item button (click)=\"goTo('support')\" detail>\r\n    <ion-icon name=\"chatbox-ellipses-outline\" slot=\"start\"></ion-icon>\r\n    <ion-label>\r\n      Soporte / Ayuda\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n</ion-content>");

/***/ }),

/***/ "8qg0":
/*!*******************************************************!*\
  !*** ./src/app/pages/experience/experience.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: absolute;\n}\nion-content .container {\n  height: 45vh;\n}\nion-content .container .header-rating {\n  display: flex;\n  flex-flow: column;\n  width: 100vw;\n}\nion-content .container .header-rating .rating-face {\n  display: flex;\n  margin: auto;\n  margin-bottom: -1.4em;\n  width: 50%;\n  border: 24px var(--rp-color-primary) solid;\n  border-radius: 100%;\n}\nion-content .container .header-rating .rating-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 15vh;\n  background-color: var(--rp-color-primary);\n  border-radius: 10px;\n}\nion-content .container .header-rating .rating-header ion-icon {\n  margin: 0 4px;\n}\nion-content .container .header-rating .rating-header p {\n  margin: 0;\n}\nion-content ion-list {\n  height: 45vh;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleHBlcmllbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNOO0FBQU07RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUNNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQVE7RUFDRSxhQUFBO0FBRVY7QUFBUTtFQUNFLFNBQUE7QUFFVjtBQUlFO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0FBSEoiLCJmaWxlIjoiZXhwZXJpZW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDV2aDtcclxuXHJcbiAgICAuaGVhZGVyLXJhdGluZyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIC5yYXRpbmctZmFjZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEuNGVtO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAyNHB4IHZhcigtLXJwLWNvbG9yLXByaW1hcnkpIHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yYXRpbmctaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJwLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tbGlzdCB7XHJcbiAgICAvLyBoZWlnaHQ6IDQwdmg7XHJcbiAgICBoZWlnaHQ6IDQ1dmg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iXX0= */");

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
    constructor(http, common) {
        this.http = http;
        this.common = common;
    }
    /**
     * @description Lista las rutas de los buses
     * @param Id del cliente
     * @returns Arreglo de Rutas
     */
    list(id) {
        return this.http.get(`/routes?client_id=${id}&includes[]=driver&includes[]=routeType&includes[]=routeStops&includes[]=bus.busModel&occupedSeats=1`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => response.data));
    }
    /**
     * @description Agrega una nueva ruta a la db
     * @param data Ruta
     * @returns Confirmación de agregado
     */
    add(data) {
        return this.http.post('/routes', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            this.toastMessage(response.message);
            return response.data;
        }));
    }
    /**
     * @description Ruta mas cercana
     * @returns Ruta mas cercana
     */
    closestRoute(latitude, longitude) {
        return this.http.get(`/routes/closest-route?latitude=${latitude}&longitude=${longitude}`);
    }
    // Abordaje de ruta
    /**
     * @description Verifica si el usuario tiene un abodaje
     * @returns Boolean
     */
    verifyBorading() {
        return this.http.get(`/route-boarding`);
    }
    /**
     *
     * @param clientId Id del cliente (empresa)
     * @param busId del bus
     * @param routeId Id del bus
     * @returns Null
     */
    abording(clientId, busId, routeId) {
        return this.http.post(`/route-boarding?client_id=${clientId}&bus_id=${busId}&route_id=${routeId}`);
    }
    /**
     * @description Finaliza el abordaje
     * @returns Null
     */
    endTravel() {
        return this.http.put(`/route-boarding/close`);
    }
    ratingTravel(data) {
        return this.http.post(`/route-boarding-experiences`, data);
    }
    toastMessage(message) {
        const color = 'primary';
        this.common.presentToast({ message, color });
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
/* harmony import */ var _sidemenu_sidemenu_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidemenu/sidemenu.page */ "QqEe");
/* harmony import */ var _services_pusher_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/pusher.service */ "7Efn");










let InicioPage = class InicioPage {
    constructor(common, userService, geolocation, sidMenu, pusher) {
        this.common = common;
        this.userService = userService;
        this.geolocation = geolocation;
        this.sidMenu = sidMenu;
        this.pusher = pusher;
        this.markers = [];
        this.watch = null;
        this.watchId = null;
        this.trackMarker = null;
        this.zoom = 18;
        this.directions = {};
        this.waypoints = [];
        this.userMarker = _constants_global_constants__WEBPACK_IMPORTED_MODULE_6__["MAP"].USER_MARK;
        this.busIcon = _constants_global_constants__WEBPACK_IMPORTED_MODULE_6__["MAP"].BUS;
        this.hasBusPosition = false;
        this.hasDirections = false;
        this.renderOptions = {
            suppressMarkers: true,
        };
        this.markerOptions = {
            origin: {
                icon: _constants_global_constants__WEBPACK_IMPORTED_MODULE_6__["MAP"].STOP_MARK,
                draggable: false,
            },
            destination: {
                icon: _constants_global_constants__WEBPACK_IMPORTED_MODULE_6__["MAP"].END_ROUTE_MARK,
                draggable: false,
            },
            waypoints: [
                {
                    icon: _constants_global_constants__WEBPACK_IMPORTED_MODULE_6__["MAP"].STOP_MARK
                },
            ],
        };
        this.userService
            .flowhObserver()
            .subscribe(flow => { if ([0, 2, 3].includes(flow)) {
            this.ngOnInit();
        } });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.waypoints.length = 0;
            this.hasBusPosition = false;
            this.hasDirections = false;
            const message = 'Obteniendo ubicación';
            const loading = yield this.common.presentLoading(message);
            loading.present();
            const resp = yield this.geolocation.getCurrentPosition();
            this.coords = resp.coords;
            loading.dismiss();
        });
    }
    bottomDrawerEvent(event) {
        switch (event.type) {
            case 'item-selected':
                this.handleItemSelect(event.data);
                break;
            case 'loadMap':
                this.waypoints.length = 0;
                this.hasBusPosition = false;
                this.hasDirections = false;
                break;
            default:
                this.sidMenu.activeRoute = 0;
                break;
        }
    }
    handleItemSelect(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.waypoints.length = 0;
            this.hasBusPosition = false;
            this.hasDirections = false;
            this.selectedItem = Object.assign({}, route);
            this.bindChannel(route);
            const stops = [...this.selectedItem.route_stops];
            const loading = yield this.common.presentLoading();
            loading.present();
            yield this.calculateAndDisplayRoute(stops);
            loading.dismiss();
        });
    }
    bindChannel(route) {
        const channel = this.pusher.init(route.id);
        channel.bind('pusher:subscription_succeeded', () => {
            this.updateBusPosition({ route_id: route.id, lattitude: route.latitude, longitude: route.longitude });
        });
        channel.bind('App\\Events\\RoutePositionEvent', ({ route_id, lattitude, longitude }) => {
            this.updateBusPosition({ route_id, lattitude, longitude });
        });
    }
    calculateAndDisplayRoute(locations) {
        return new Promise(resolve => {
            this.directions.origin = {
                lat: +locations[0].lattitude,
                lng: +locations[0].longitude
            };
            if (locations.length > 1) {
                this.directions.destination = {
                    lat: +locations[locations.length - 1].lattitude,
                    lng: +locations[locations.length - 1].longitude
                };
            }
            if (locations.length > 2) {
                locations.forEach((location, index) => {
                    if (index > 0 && index < locations.length - 1) {
                        this.waypoints.push({
                            location: { lat: +location.lattitude, lng: +location.longitude },
                            stopover: false,
                        });
                    }
                });
            }
            this.hasDirections = true;
            resolve(true);
        });
    }
    updateBusPosition(_a) {
        var params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, []);
        this.hasBusPosition = true;
        this.busLat = +params.lattitude;
        this.busLng = +params.longitude;
    }
};
InicioPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _sidemenu_sidemenu_page__WEBPACK_IMPORTED_MODULE_8__["SidemenuPage"] },
    { type: _services_pusher_service__WEBPACK_IMPORTED_MODULE_9__["PusherService"] }
];
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
    // api: 'http://api.rutaspanama.dev.cronapis.com/api',
    api: 'https://api.rutas.prod.dev.cronapis.com/api',
    firebase: {
        apiKey: 'AIzaSyAwpsAm2BlfpUCa20hymcmxrp97tjCIlPs',
        authDomain: 'rutasapp-305809.firebaseapp.com',
        projectId: 'rutasapp-305809',
        storageBucket: 'rutasapp-305809.appspot.com',
        messagingSenderId: '466798676316',
        appId: '1:466798676316:web:c6063ad42c2c7acf46d999'
    },
    PUSHER_APP_ID: 1190909,
    PUSHER_APP_KEY: '17f57ce05bb3f97f1ee8',
    PUSHER_APP_SECRET: '02ac7fdf7b269ff38226',
    PUSHER_APP_CLUSTER: 'mt1',
    googleConfig: {
        webClientId: '902176399419-e10ng3a6vsiv7ib90ub4f95n3knkgnur.apps.googleusercontent.com',
        offline: true,
    },
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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! agm-direction */ "IZFd");









 // agm-direction
let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_6__["InicioPageRoutingModule"],
            src_app_Components_shared_components_module__WEBPACK_IMPORTED_MODULE_1__["SharedComponentsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAFfkk5FtmXgIsbHQzmEXsyFOACA4Jj_oY'
            }),
            agm_direction__WEBPACK_IMPORTED_MODULE_9__["AgmDirectionModule"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _pages_rating_rating_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/rating/rating.page */ "a1os");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/route.service */ "9jJz");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");















const { Keyboard } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let BottomDrawerComponent = class BottomDrawerComponent {
    constructor(plt, router, navctl, 
    // private qrScanner: QRScanner,
    common, userService, routeService, loadingCtrl, gestureCtlr, nativePageTransitions, popoverCtrl, modalController, storage, barcodeScanner) {
        this.plt = plt;
        this.router = router;
        this.navctl = navctl;
        this.common = common;
        this.userService = userService;
        this.routeService = routeService;
        this.loadingCtrl = loadingCtrl;
        this.gestureCtlr = gestureCtlr;
        this.nativePageTransitions = nativePageTransitions;
        this.popoverCtrl = popoverCtrl;
        this.modalController = modalController;
        this.storage = storage;
        this.barcodeScanner = barcodeScanner;
        this.selectedRoute = {};
        this.searchText = '';
        this.bus = {};
        this.isOpen = false;
        this.backdropVisible = false;
        this.searchList = [];
        this.bottomPosition = -65;
        this.dragable = true;
        this.rutasFlow = 0;
        this.scanActive = false;
        this.scanResult = {};
        this.stream = null;
        this.seats = [];
        this.showScan = false;
        this.routes = [];
        this.rating = 0;
        this.aboardinData = {};
        this.emitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.component = 'Inicio';
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
        this.rating = Math.round(this.selectedRoute.driver.rating);
        this.userService.rutasData = route;
        this.bottomDrawerElement = this.bottomDrawer.nativeElement;
        this.gesture.enable(true);
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
            const result = yield this.verifyBoarding();
            if (result.hasBoarding) {
                this.aboardinData = result.data;
                this.isOpen = false;
                this.userService.rutasFlow = 40;
                this.bottomDrawerElement.style.transition = '.4s ease-out';
                this.bottomDrawerElement.style.transform = '';
                this.gesture.enable(true);
                this.dragable = true;
                return;
            }
            this.userService.rutasFlow = 4;
            this.showScan = false;
            this.bottomDrawerElement = this.bottomDrawer.nativeElement;
            this.bottomDrawerElement.style.transition = '.4s ease-out';
            this.bottomDrawerElement.style.transform = `translateY(${-this.openHeight}px`;
        });
    }
    scannerOn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                preferFrontCamera: false,
                showFlipCameraButton: true,
                showTorchButton: true,
                torchOn: false,
                prompt: 'Coloque un código de barras dentro del área de escaneo',
                resultDisplayDuration: 500,
                formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
                orientation: 'portrait',
            };
            this.barcodeScanner.scan(options).then((barcodeData) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.scanResult = JSON.parse(barcodeData.text);
                const user = yield this.storage.getUser();
                this.aboardinData = yield this.abording(user.client_id, this.scanResult.id, this.selectedRoute.id);
                this.isOpen = false;
                this.userService.rutasFlow = 40;
                this.bottomDrawerElement.style.transition = '.4s ease-out';
                this.bottomDrawerElement.style.transform = '';
                this.gesture.enable(true);
                this.dragable = true;
            }));
        });
    }
    // Abre el modal para calificar el viaje
    ratingModal() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.common.alert();
            if (confirm) {
                yield this.endTravel();
                const modal = yield this.common.presentModal({
                    component: _pages_rating_rating_page__WEBPACK_IMPORTED_MODULE_9__["RatingPage"],
                    cssClass: '',
                    componentProps: {
                        route: (_b = (_a = this.aboardinData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.route,
                        id: (_c = this.aboardinData) === null || _c === void 0 ? void 0 : _c.data.id
                    }
                });
                modal.present();
                yield modal.onDidDismiss();
                this.goToHome();
            }
        });
    }
    endTravel() {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.common.presentLoading();
            loading.present();
            this.routeService.endTravel().subscribe(() => {
                loading.dismiss();
                resolve();
            }, () => loading.dismiss());
        }));
    }
    abording(clientId, busId, routeId) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.common.presentLoading();
            loading.present();
            this.routeService.abording(clientId, busId, routeId).subscribe(response => {
                loading.dismiss();
                resolve(response);
            }, () => loading.dismiss());
        }));
    }
    verifyBoarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const loading = yield this.common.presentLoading();
                loading.present();
                this.routeService.verifyBorading().subscribe(response => {
                    loading.dismiss();
                    resolve(response);
                }, () => loading.dismiss());
            }));
        });
    }
    goToHome() {
        this.openHeight = (this.plt.height() / 100) * 60;
        this.userService.rutasFlow = 1;
        this.showScan = false;
        this.dragable = false;
        this.gesture.enable(true);
        this.bottomDrawerElement.style.transition = '.4s ease-out';
        this.bottomDrawerElement.style.transform = ``;
        this.emitEvent.emit({
            type: 'loadMap'
        });
    }
    trackScroll(ele) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.seatElement = ele;
            this.seatGesture = yield this.gestureCtlr.create({
                el: this.seatElement,
                gestureName: 'swipe',
                direction: 'y',
                onStart: ev => {
                    this.gesture.enable(true);
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_10__["RouteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["GestureController"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__["NativePageTransitions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__["BarcodeScanner"] }
];
BottomDrawerComponent.propDecorators = {
    bottomDrawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['bottomDrawer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }],
    seat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['seat',] }],
    editRutas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['editRutas',] }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['video', { static: false },] }],
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['canvas', { static: false },] }],
    emitEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    component: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
BottomDrawerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
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





// import {InicioComponent} from '../../Components/inicio/inicio.component';




const routes = [
    {
        path: '',
        component: _sidemenu_page__WEBPACK_IMPORTED_MODULE_4__["SidemenuPage"],
        children: [
            {
                path: 'Inicio',
                component: _inicio_inicio_page__WEBPACK_IMPORTED_MODULE_1__["InicioPage"],
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

/***/ "Kuh8":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating/rating.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ng-container *ngIf=\"!isRate; else elseTemplate\">\r\n    <div class=\"custom-space\">\r\n    </div>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <h2>\r\n          ¡Has llegado a tu destino!\r\n        </h2>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row size=\"12\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <span class=\"custom-title driver\">\r\n          Califica al conductor\r\n        </span>\r\n      </ion-col>\r\n      <div class=\"div-avatar\">\r\n        <ion-item lines=\"none\">\r\n          <ion-avatar slot=\"start\">\r\n            <img class=\"custom-img-avatar\" [src]=\"route?.driver.avatar\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <span class=\"ion-padding-top\">{{route?.driver?.name}}</span>\r\n            <app-rating (ratingChange)=\"ratingChange($event, 'driver')\" rate=\"1\"> </app-rating>\r\n          </ion-label>\r\n        </ion-item>\r\n      </div>\r\n    </ion-row>\r\n    <div class=\"custom-space-two\">\r\n    </div>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <span class=\"custom-title driver\">\r\n          Califica la unidad\r\n        </span>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <app-rating (ratingChange)=\"ratingChange($event, 'bus')\" rate=\"1\"> </app-rating>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"custom-space-two\">\r\n    </div>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <div class=\"addressDetailsCustom\">\r\n          <div class=\"listItemWrapper\">\r\n            <img class=\"listImg\" src=\"/assets/svg/route_circle.svg\" />\r\n            <div class=\"listTextWrapper\">\r\n              <div class=\"listName\">\r\n                <h3 style=\"margin: 0;\">{{ route?.name}}</h3>\r\n              </div>\r\n              <ion-note>{{route?.start_time | customeTime }} - {{route?.end_time | customeTime }}</ion-note>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"custom-space-two\">\r\n    </div>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"custom-title driver ion-text-center\">\r\n        <h6>¿Algun comentario?</h6>\r\n      </ion-col>\r\n      <ion-col class=\"ion-margin-start ion-margin-end\">\r\n        <ion-item>\r\n          <ion-select value=\"Excelente\" multiple=\"false\" (ionChange)=\"onChange($event.detail.value)\">\r\n            <ng-container *ngFor=\"let option of options; let i=index\">\r\n              <ion-select-option [value]=\"option.value\">{{ option.text}}</ion-select-option>\r\n            </ng-container>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ng-container *ngIf=\"comment === 'Otro'\">\r\n          <ion-textarea class=\"custom-text-area\" rows=\"4\" cols=\"20\" placeholder=\"Describe tu experiencia...\"\r\n            [(ngModel)]=\"otherComment\"></ion-textarea>\r\n        </ng-container>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button color=\"light\" expand=\"block\" class=\"custom-button\" (click)=\"sendRating()\">Enviar</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button color=\"secondary\" expand=\"block\" class=\"custom-button\" (click)=\"isRate = true \">\r\n          No quiero calificar\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-container>\r\n\r\n  <ng-template #elseTemplate>\r\n    <div class=\"d-flex justify-content-center thanks\">\r\n      <div class=\"align-self-center text-center w-75\">\r\n        <h2>Gracias por viajar con nosotros</h2>\r\n        <p>!Te esperamos pronto!</p>\r\n        <div>\r\n          <ion-button (click)=\"modalController.dismiss()\" expand=\"block\" color=\"light\">\r\n            <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\r\n            Salir\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n</ion-content>");

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
        this.rating = [1, 2, 3, 4, 5];
        this.starHalf = false;
        this.rate = 0;
        this.size = 'small';
        this.readOnly = false;
        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ratingHandler(i) {
        if (this.readOnly) {
            return;
        }
        this.rate = i;
        this.ratingChange.emit(this.rate);
    }
};
RatingComponent.ctorParameters = () => [];
RatingComponent.propDecorators = {
    rate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    readOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    ratingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
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
    constructor(loading, toastController, modalController, alertController) {
        this.loading = loading;
        this.toastController = toastController;
        this.modalController = modalController;
        this.alertController = alertController;
    }
    presentLoading(message = 'Por favor espere...') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loading.create({ message });
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
    alert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            const promise = new Promise(resolve => {
                resolveFunction = resolve;
            });
            const alert = yield this.alertController.create({
                message: '¿Desea finalizar el viaje?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => resolveFunction(false)
                    }, {
                        text: 'Si',
                        handler: () => resolveFunction(true)
                    }
                ]
            });
            yield alert.present();
            return promise;
        });
    }
};
CommonService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/global-constants */ "s8rx");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "gcOT");











const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"];
let SidemenuPage = class SidemenuPage {
    constructor(router, _auth, common, userService, storage, changeDetectorRef) {
        this.router = router;
        this._auth = _auth;
        this.common = common;
        this.userService = userService;
        this.storage = storage;
        this.changeDetectorRef = changeDetectorRef;
        this.backdropVisible = false;
        this.drawerVar = 'Inicio';
        this.addressClicked = 0;
        this.user = {};
        this.abrv = '';
        this.logo = _constants_global_constants__WEBPACK_IMPORTED_MODULE_5__["LOGO"];
        this._activeRoute = 0;
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
    ngOnInit() {
        this.storage.get(_constants_global_constants__WEBPACK_IMPORTED_MODULE_5__["USER"]).then((user) => {
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
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 30,
                height: 120,
                width: 120,
                preserveAspectRatio: true,
                allowEditing: false,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["CameraResultType"].Base64,
                direction: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["CameraDirection"].Front // iOS and Web only
            });
            const imageUrl = `data:image/png;base64,${image.base64String}`;
            const loading = yield this.common.presentLoading();
            loading.present();
            this.userService.updateAvatar({ avatar: imageUrl }).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                loading.dismiss();
                yield this.storage.store(_constants_global_constants__WEBPACK_IMPORTED_MODULE_5__["USER"], result.data);
                this._auth.AuthSubject(result.data);
                yield this.storage.store(_constants_global_constants__WEBPACK_IMPORTED_MODULE_5__["USER"], result.data);
                loading.dismiss();
                const message = result.message;
                const color = 'primary';
                this.common.presentToast({ message, color });
                // this.ngOnChanges();
            }), () => loading.dismiss());
        });
    }
    set activeRoute(i) {
        this._activeRoute = i;
    }
    get activeRoute() {
        return this._activeRoute;
    }
};
SidemenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
SidemenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-input type=\"search\" class=\"searchField\" placeholder=\"Buscar ruta\" [(ngModel)]=\"searchText\"></ion-input>\r\n<ng-container *ngIf=\"routes.length; else elseTemplate\">\r\n  <ion-list lines=\"none\">\r\n    <ng-container *ngFor=\"let route of routes | routesFilter: searchText\">\r\n      <ion-item (click)=\"selectRoute(route)\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"/assets/briefcase.png\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>{{route.name }}</h2>\r\n          <h3>{{route.start_time | customeTime }} - {{route.end_time | customeTime }}</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ng-container>\r\n\r\n  </ion-list>\r\n</ng-container>\r\n<ng-template #elseTemplate>\r\n  <div class=\"ion-text-center\">\r\n    No hay rutas disponibles\r\n  </div>\r\n</ng-template>");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");









let AppComponent = class AppComponent {
    constructor(router, geolocation, platform, storage) {
        this.router = router;
        this.geolocation = geolocation;
        this.platform = platform;
        this.storage = storage;
        this.initializeApp();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    initializeApp() {
        this.platform.ready().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isLoggedin = yield this.storage.get(_constants_global_constants__WEBPACK_IMPORTED_MODULE_6__["TOKEN"]);
            const route = isLoggedin ? '/sidemenu/Inicio' : '/initial';
            this.router.navigate([route]);
            yield this.geolocation.getCurrentPosition();
        }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
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
/* harmony import */ var _Components_rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Components/rating/rating.component */ "OU9T");










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
        providers: [_ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_8__["NativePageTransitions"], _Components_rating_rating_component__WEBPACK_IMPORTED_MODULE_9__["RatingComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-center\">\r\n  <div *ngFor=\"let p of rating; let i = index\" (click)=\"ratingHandler(p)\">\r\n    <ion-icon slot=\"start\" [name]=\"rate >= p ? 'star' : 'star-outline'\" size=\"{{size}}\"></ion-icon>\r\n  </div>\r\n</div>");

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

/***/ "X635":
/*!***********************************************!*\
  !*** ./src/app/pages/rating/rating.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: var(--rp-color-primary) !important;\n}\nion-content ion-rating {\n  --star-color: gray;\n  --star-color-filled: green;\n}\nion-content .thanks {\n  height: 100vh;\n}\n.avatar-route {\n  border: solid 1px white;\n  height: 80%;\n  width: auto;\n}\n.custom-row-name {\n  padding-top: 6%;\n}\n.div-avatar {\n  margin: auto;\n}\n.div-avatar ion-avatar {\n  width: 5rem;\n  height: 5rem;\n}\n@media only screen and (max-width: 321px) and (min-width: 5px) {\n  .custom-space {\n    height: 1%;\n  }\n\n  .custom-space-two {\n    height: 1%;\n  }\n}\n@media only screen and (max-width: 361px) and (min-width: 322px) {\n  .custom-space {\n    height: 8%;\n  }\n\n  .custom-space-two {\n    height: 2%;\n  }\n}\n@media only screen and (max-width: 376px) and (min-width: 362px) {\n  .custom-space {\n    height: 8%;\n  }\n\n  .custom-space-two {\n    height: 3%;\n  }\n}\n@media only screen and (max-width: 415px) and (min-width: 377px) {\n  .custom-space {\n    height: 15%;\n  }\n\n  .custom-space-two {\n    height: 3%;\n  }\n}\n@media only screen and (min-width: 416px) {\n  .custom-space {\n    height: 20%;\n  }\n\n  .custom-space-two {\n    height: 8%;\n  }\n}\n@media only screen and (min-width: 540px) {\n  .custom-space {\n    height: 8%;\n  }\n\n  .custom-space-two {\n    height: 5%;\n  }\n}\n.custom-avatar .custom-img-avatar {\n  box-shadow: 2px 4px 6px #837f7f;\n}\n.listImg {\n  height: 42px;\n  width: 42px;\n  margin: 10px;\n}\n.listItemWrapper {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.listTextWrapper {\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n.addressDetailsCustom {\n  margin: auto;\n  width: 90%;\n  height: 70px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 2px 4px 6px #ccc;\n}\n.custom-text-area {\n  border-bottom: black 1px solid;\n}\n.custom-button {\n  text-transform: none;\n}\n.custom-title {\n  color: black;\n}\n.custom-title .driver {\n  font-size: 1.5rem;\n}\n.custom-row-name {\n  font-size: 1rem;\n}\n.custom-close {\n  padding-left: 5%;\n  margin-top: 10%;\n  background-color: transparent;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMERBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0FBREY7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUo7QUFJQTtFQUNFO0lBQ0UsVUFBQTtFQURGOztFQUdBO0lBQ0UsVUFBQTtFQUFGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsVUFBQTtFQUFGOztFQUVBO0lBQ0UsVUFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBQTtFQUNGOztFQUNBO0lBQ0UsVUFBQTtFQUVGO0FBQ0Y7QUFBQTtFQUNFO0lBQ0UsV0FBQTtFQUVGOztFQUFBO0lBQ0UsVUFBQTtFQUdGO0FBQ0Y7QUFEQTtFQUNFO0lBQ0UsV0FBQTtFQUdGOztFQURBO0lBQ0UsVUFBQTtFQUlGO0FBQ0Y7QUFGQTtFQUNFO0lBQ0UsVUFBQTtFQUlGOztFQUZBO0lBQ0UsVUFBQTtFQUtGO0FBQ0Y7QUFGRTtFQUNFLCtCQUFBO0FBSUo7QUFEQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlGO0FBRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBS0Y7QUFIQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFNRjtBQUpBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBT0Y7QUFMQTtFQUNFLDhCQUFBO0FBUUY7QUFOQTtFQUNFLG9CQUFBO0FBU0Y7QUFQQTtFQUNFLFlBQUE7QUFVRjtBQVRFO0VBQ0UsaUJBQUE7QUFXSjtBQVJBO0VBQ0UsZUFBQTtBQVdGO0FBVEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFZRiIsImZpbGUiOiJyYXRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXJwLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcblxyXG4gIGlvbi1yYXRpbmcge1xyXG4gICAgLS1zdGFyLWNvbG9yOiBncmF5O1xyXG4gICAgLS1zdGFyLWNvbG9yLWZpbGxlZDogZ3JlZW47XHJcbiAgfVxyXG5cclxuICAudGhhbmtzIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG59XHJcblxyXG4uYXZhdGFyLXJvdXRlIHtcclxuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmN1c3RvbS1yb3ctbmFtZSB7XHJcbiAgcGFkZGluZy10b3A6IDYlO1xyXG59XHJcblxyXG4uZGl2LWF2YXRhciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMXB4KSBhbmQgKG1pbi13aWR0aDogNXB4KSB7XHJcbiAgLmN1c3RvbS1zcGFjZSB7XHJcbiAgICBoZWlnaHQ6IDElO1xyXG4gIH1cclxuICAuY3VzdG9tLXNwYWNlLXR3byB7XHJcbiAgICBoZWlnaHQ6IDElO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MXB4KSBhbmQgKG1pbi13aWR0aDogMzIycHgpIHtcclxuICAuY3VzdG9tLXNwYWNlIHtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgfVxyXG4gIC5jdXN0b20tc3BhY2UtdHdvIHtcclxuICAgIGhlaWdodDogMiU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc2cHgpIGFuZCAobWluLXdpZHRoOiAzNjJweCkge1xyXG4gIC5jdXN0b20tc3BhY2Uge1xyXG4gICAgaGVpZ2h0OiA4JTtcclxuICB9XHJcbiAgLmN1c3RvbS1zcGFjZS10d28ge1xyXG4gICAgaGVpZ2h0OiAzJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTVweCkgYW5kIChtaW4td2lkdGg6IDM3N3B4KSB7XHJcbiAgLmN1c3RvbS1zcGFjZSB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICB9XHJcbiAgLmN1c3RvbS1zcGFjZS10d28ge1xyXG4gICAgaGVpZ2h0OiAzJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MTZweCkge1xyXG4gIC5jdXN0b20tc3BhY2Uge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgfVxyXG4gIC5jdXN0b20tc3BhY2UtdHdvIHtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQwcHgpIHtcclxuICAuY3VzdG9tLXNwYWNlIHtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgfVxyXG4gIC5jdXN0b20tc3BhY2UtdHdvIHtcclxuICAgIGhlaWdodDogNSU7XHJcbiAgfVxyXG59XHJcbi5jdXN0b20tYXZhdGFyIHtcclxuICAuY3VzdG9tLWltZy1hdmF0YXIge1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA2cHggIzgzN2Y3ZjtcclxuICB9XHJcbn1cclxuLmxpc3RJbWcge1xyXG4gIGhlaWdodDogNDJweDtcclxuICB3aWR0aDogNDJweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmxpc3RJdGVtV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubGlzdFRleHRXcmFwcGVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uYWRkcmVzc0RldGFpbHNDdXN0b20ge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNzBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDRweCA2cHggI2NjYztcclxufVxyXG4uY3VzdG9tLXRleHQtYXJlYSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgMXB4IHNvbGlkO1xyXG59XHJcbi5jdXN0b20tYnV0dG9uIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uY3VzdG9tLXRpdGxlIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLmRyaXZlciB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbn1cclxuLmN1c3RvbS1yb3ctbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5jdXN0b20tY2xvc2Uge1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "XlEN":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"addressDetails\" *ngIf=\"selectedItem  && !userService.rutasBarEdit && userService.rutasFlow === 10\">\r\n  <div class=\"listItemWrapper\">\r\n    <img class=\"listImg\" src=\"./../../../assets/route.png\" />\r\n    <div class=\"listTextWrapper\">\r\n      <div class=\"listName\">{{selectedItem?.name}}</div>\r\n      <ion-note>{{selectedItem.start_time | customeTime }} - {{selectedItem.end_time | customeTime }}</ion-note>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"rutasEdit d-flex flex-column\" *ngIf=\"userService.rutasBarEdit\">\r\n  <div class=\"d-flex align-items-center mb-3\">\r\n    <div class=\"currentLoc\"><span class=\"destLoc\"></span></div>\r\n    <ion-input class=\"editInp d-flex align-items-center\" placeholder=\"Indico de Ruta\">\r\n      <div class=\"icon\">\r\n        <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\r\n      </div>\r\n    </ion-input>\r\n  </div>\r\n\r\n  <div class=\"d-flex align-items-center\">\r\n    <div class=\"locIcon\">\r\n      <ion-icon name=\"location\"></ion-icon>\r\n    </div>\r\n    <ion-input class=\"editInp d-flex align-items-center\" placeholder=\"Final de Ruta\">\r\n      <div class=\"icon\">\r\n        <ion-icon name=\"swap-vertical\"></ion-icon>\r\n      </div>\r\n    </ion-input>\r\n  </div>\r\n</div>\r\n<agm-map [latitude]=\"coords?.latitude\" [longitude]=\"coords?.longitude\" [zoom]=\"zoom\">\r\n  <!-- Marcador para la posision del usuario -->\r\n  <agm-marker [latitude]=\"coords?.latitude\" [longitude]=\"coords?.longitude\" [iconUrl]=\"userMarker\"></agm-marker>\r\n  <!-- Marcador para la posicion del bus -->\r\n  <agm-marker *ngIf=\"hasBusPosition\" [latitude]=\"busLat\" [longitude]=\"busLng\" [iconUrl]=\"busIcon\"></agm-marker>\r\n\r\n  <agm-direction *ngIf=\"hasDirections\" [origin]=\"directions.origin\" [destination]=\"directions.destination\"\r\n    [waypoints]=\"waypoints\" [renderOptions]=\"renderOptions\" [markerOptions]=\"markerOptions\">\r\n  </agm-direction>\r\n</agm-map>\r\n<app-bottom-drawer component=\"Inicio\" (emitEvent)=\"bottomDrawerEvent($event)\"></app-bottom-drawer>");

/***/ }),

/***/ "Z6aU":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/bottom-drawer/bottom-drawer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bottom-drawer\" [ngStyle]=\"{'bottom': 'calc('+ bottomPosition +'vh + env(safe-area-inset-bottom))'}\"\r\n  #bottomDrawer>\r\n  <div *ngIf=\"userService.rutasFlow === 10\" class=\"car-loc-btn\">\r\n    <div class=\"text-end\" *ngIf=\"!isOpen\">\r\n      <ion-note>Tú\r\n        <img class=\"scan\" src=\"../../../assets/mark.svg\" />\r\n      </ion-note>\r\n      <ion-note>Parada\r\n        <img class=\"scan\" src=\"../../../assets/waypoints.svg\" style=\"margin-left: 4px;\" />\r\n      </ion-note>\r\n      <ion-note>Final de ruta\r\n        <img class=\"scan\" src=\"../../../assets/location-sharp.svg\" style=\"margin-left: 5px;\" />\r\n      </ion-note>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"dragable\" class=\"ion-text-center \">\r\n    <ion-button fill=\"clear\" expand=\"full\" (click)=\"toggleDrawer()\" class=\"minH\">\r\n      <div class=\"drawer-pull\"></div>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <div class=\"content-container mt-2\" *ngIf=\"component === 'Inicio'\">\r\n    <ion-content [ngSwitch]=\"userService.rutasFlow\">\r\n      <!-- Dashboard -->\r\n      <div *ngSwitchCase=0>\r\n        <ion-grid fixed>\r\n          <ion-row>\r\n            <ion-col>\r\n              <div class=\"text-center\">\r\n                <app-dashboard (routeEvent)=\"routeHandler($event)\"></app-dashboard>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n      <!-- Rutas -->\r\n      <div *ngSwitchCase=1>\r\n        <app-route (routeEvent)=\"routeHandler($event)\"></app-route>\r\n      </div>\r\n      <!-- Detalle de ruta -->\r\n      <div *ngSwitchCase=10>\r\n        <ion-grid fixed *ngIf=\"isOpen\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-list-header>\r\n                <ion-label>Paradas de la ruta</ion-label>\r\n              </ion-list-header>\r\n              <ion-list>\r\n                <ion-item *ngFor=\"let stop of selectedRoute.route_stops\">\r\n                  <ion-label>{{ stop.name }}</ion-label>\r\n                  <ion-note>{{ stop.arrival_time | customeTime }}</ion-note>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <div class=\"mt-4\">\r\n          <ion-button expand=\"block\" (click)=\"startScan()\" color=\"tertiary\">\r\n            Abordar este bus\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- QR Scan -->\r\n      <div *ngSwitchCase=4>\r\n        <div class=\"d-flex flex-column align-items-center\">\r\n          <div class=\"scanBlock ion-text-center\">\r\n            <div class=\"d-flex flex-column align-items-center justify-content-center\" *ngIf=\"!showScan\">\r\n              <ion-note class=\"ion-text-center\">Para escanear código enfoca el QR ubicado en la entrada del bus\r\n              </ion-note>\r\n              <img class=\"scannerImg\" src=\"../../../assets/scanner.png\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"w-100 mt-5\">\r\n            <ion-button (click)=\"scannerOn()\" expand=\"block\" color=\"tertiary\">\r\n              Escanear QR\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Travel Detail -->\r\n      <div *ngSwitchCase=\"40\">\r\n        <ion-grid fixed *ngIf=\"isOpen\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <div class=\"text-center\" id=\"travel-data\">\r\n                <h2>Datos de tu viaje</h2>\r\n                <img class=\"rounded-circle shadow-sm avatar ion-margin-vertical\" [src]=\"selectedRoute?.driver.avatar\">\r\n                <ion-note>Tu conductor</ion-note>\r\n                <h5>\r\n                  {{selectedRoute?.driver?.name}} | {{rating}}/5\r\n                  <app-rating readOnly=\"true\" [rate]=\"rating\"> </app-rating>\r\n                </h5>\r\n                <ion-note>Tu ruta</ion-note>\r\n                <ion-item>\r\n                  <ion-avatar slot=\"start\">\r\n                    <img src=\"/assets/route.png\" />\r\n                  </ion-avatar>\r\n                  <ion-label>\r\n                    <h2>{{selectedRoute?.name }}</h2>\r\n                    <h3>{{selectedRoute?.start_time | customeTime }} - {{selectedRoute?.end_time | customeTime }}</h3>\r\n                  </ion-label>\r\n                </ion-item>\r\n\r\n                <ion-note>Tu unidad</ion-note>\r\n                <h5>\r\n                  Modelo {{ selectedRoute.bus.bus_model.name }} {{selectedRoute.bus.unit_number}}<br>\r\n                  Placa: {{ selectedRoute.bus.license_plate | uppercase }}\r\n                </h5>\r\n\r\n                <ion-note>Puestos disponibles</ion-note>\r\n                <h5>{{selectedRoute.occuped_seats}}/{{ selectedRoute?.bus?.number_positions }}</h5>\r\n\r\n                <ion-button (click)=\"ratingModal()\" class=\"button-btn ion-margin-top\" color=\"tertiary\">\r\n                  <ion-icon slot=\"start\" name=\"log-out-outline\" class=\"logout-icon\"></ion-icon>\r\n                  Finalizar viaje\r\n                </ion-button>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div id=\"travel-data\" *ngIf=\"!isOpen\">\r\n          <div id=\"info-route\">\r\n            <div class=\"d-flex\">\r\n              <img src=\"/assets/route.png\" style=\"margin-left: 0 !important;\" />\r\n              <div>\r\n                <h5>{{selectedRoute?.driver.name}}</h5>\r\n                <p style=\"margin: 0;\">Modelo {{ scanResult?.bus_model?.name }} {{scanResult?.unit_number}} | Placa: {{\r\n                  scanResult?.number_positions }}\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <ion-button expand=\"full\" class=\"confirmRutas my-3\" (click)=\"ratingModal()\" color=\"tertiary\">\r\n              <ion-icon slot=\"start\" name=\"log-out-outline\" class=\"logout-icon\"></ion-icon>\r\n              Finalizar viaje\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-content>\r\n  </div>\r\n</div>");

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
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bar-rating */ "Qsw1");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _services_pusher_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/pusher.service */ "7Efn");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");





























Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_24___default.a);
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
            ngx_bar_rating__WEBPACK_IMPORTED_MODULE_22__["BarRatingModule"],
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
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_27__["GooglePlus"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_23__["Camera"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__["Geolocation"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_25__["BarcodeScanner"],
            _services_pusher_service__WEBPACK_IMPORTED_MODULE_26__["PusherService"],
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__["LOCALE_ID"], useValue: 'es' },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptorService"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "a1os":
/*!*********************************************!*\
  !*** ./src/app/pages/rating/rating.page.ts ***!
  \*********************************************/
/*! exports provided: RatingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPage", function() { return RatingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rating_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rating.page.html */ "Kuh8");
/* harmony import */ var _rating_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rating.page.scss */ "X635");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/rating/rating.component */ "OU9T");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/route.service */ "9jJz");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");








let RatingPage = class RatingPage {
    constructor(navParams, common, rating, modalController, routeService) {
        this.navParams = navParams;
        this.common = common;
        this.rating = rating;
        this.modalController = modalController;
        this.routeService = routeService;
        this.driverRate = 1;
        this.busRate = 1;
        this.comment = 'Excelente';
        this.isRate = false;
        this.otherComment = '';
        this.options = [
            { value: 'Excelente', text: 'Excelente' },
            { value: 'Satisfactorio', text: 'Satisfactorio' },
            { value: 'Regular', text: 'Regular' },
            { value: 'Otro', text: 'Otro' },
        ];
        this.route = {};
    }
    ngOnInit() {
    }
    // Seleccion de tipo de comentario
    onChange(value) {
        this.comment = value;
    }
    sendRating(type) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.common.presentLoading();
            loading.present();
            const data = {
                route_boarding_id: this.id,
                comment: this.comment !== 'Otro' ? this.comment : this.otherComment,
                bus_rate: this.busRate,
                driver_rate: this.driverRate
            };
            this.routeService.ratingTravel(data).subscribe(() => {
                loading.dismiss();
                this.isRate = true;
            });
        });
    }
    ratingChange(rate, type) {
        (type === 'driver') ? this.driverRate = rate : this.busRate = rate;
    }
    noRate() {
        this.isRate = true;
    }
};
RatingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _Components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"] }
];
RatingPage.propDecorators = {
    route: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page-rating',
        template: _raw_loader_rating_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rating_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RatingPage);



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
    constructor(router, userService) {
        this.router = router;
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
/* harmony default export */ __webpack_exports__["default"] = (".deactive {\n  color: white;\n}\n\n.active {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlYWN0aXZlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */");

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
    constructor(router, commonService, storage) {
        this.router = router;
        this.commonService = commonService;
        this.storage = storage;
        this.token = '';
    }
    intercept(request, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.storage.get(_constants_global_constants__WEBPACK_IMPORTED_MODULE_7__["TOKEN"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(token => {
            // Importante: modificamos de forma inmutable, haciendo el clonado de la petición
            const headers = this.addToken(request, `${token}`);
            // Pasamos al siguiente interceptor de la cadena la petición modificada
            return next.handle(headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(result => {
                const errors = result.error.errors;
                const color = 'danger';
                let mensaje = '';
                if (result.error.message) {
                    this.commonService.presentToast({ message: result.error.message, color });
                }
                if (Object.entries(errors).length) {
                    for (const key in errors) {
                        if (Object.prototype.hasOwnProperty.call(errors, key)) {
                            const element = errors[key];
                            mensaje += `${element} <br>`;
                        }
                    }
                    this.commonService.presentToast({ message: mensaje, color });
                }
                else {
                    const message = result.error.message;
                    this.commonService.presentToast({ message, color });
                }
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
    constructor(common, storage, routeService) {
        this.common = common;
        this.storage = storage;
        this.routeService = routeService;
        this.routes = [];
        this.searchText = '';
        this.routeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.storage.getUser();
            const loading = yield this.common.presentLoading();
            loading.present();
            this.subscription = this.routeService.list(user.client_id).subscribe((routes) => {
                this.routes = [...routes];
                loading.dismiss();
            }, () => loading.dismiss());
        });
    }
    selectRoute(route) {
        this.routeEvent.emit(route);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
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
/* harmony default export */ __webpack_exports__["default"] = (".appwrapper ion-menu.md ion-list {\n  padding: 20px 0;\n}\n.appwrapper ion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n.appwrapper ion-menu.md ion-list-header,\n.appwrapper ion-menu.md ion-note {\n  padding-left: 10px;\n}\n.appwrapper ion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n.appwrapper ion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n.appwrapper ion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n.appwrapper ion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n.appwrapper ion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n.appwrapper ion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n.appwrapper ion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n.appwrapper ion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n.appwrapper ion-menu.ios ion-list {\n  padding: 0px 0 0 0;\n}\n.appwrapper ion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n.appwrapper ion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n.appwrapper ion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n.appwrapper ion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n.appwrapper ion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n.appwrapper ion-menu.ios ion-list-header,\n.appwrapper ion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.appwrapper ion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n.appwrapper ion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n.appwrapper ion-item.selected {\n  --color: var(--ion-color-primary);\n}\n.appwrapper .avatar-container {\n  display: flex;\n  align-items: flex-end;\n}\n.appwrapper .avatar-container ion-icon {\n  position: fixed;\n  font-size: 1.3em;\n}\n.appwrapper .menu-list-header {\n  background-color: #fae345;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  flex-direction: row;\n  padding-left: 16px;\n}\n.appwrapper .profile-pic {\n  border-radius: 100px;\n  background-color: white;\n  padding: 8px;\n  font-size: 24px;\n}\n.appwrapper .heading {\n  display: flex;\n  flex-direction: column;\n}\n.appwrapper .align-16 {\n  padding-left: 16px !important;\n}\n.appwrapper .heading-name {\n  font-size: 20px;\n}\n.appwrapper .more {\n  font-size: 26px;\n  color: white;\n}\n.appwrapper .logout {\n  display: flex;\n  justify-content: center;\n}\n.appwrapper .logout-btn {\n  --background: #fae345;\n  color: black;\n  margin-bottom: 18px;\n  text-transform: none !important;\n}\n.appwrapper .logout-icon {\n  margin-right: 5px;\n}\n.appwrapper ion-menu.md ion-list {\n  padding: 0px 0;\n}\n.appwrapper ion-menu.md ion-list#inbox-list {\n  border-bottom: unset;\n}\n.appwrapper ion-menu.md ion-item.selected {\n  --background: unset;\n}\n.appwrapper .menu-header {\n  position: absolute;\n  top: 2%;\n  width: 100%;\n  padding: 0 8px;\n  z-index: 9;\n}\n.appwrapper .menu-header ion-img {\n  height: auto;\n  width: 15vh;\n}\n.appwrapper .menu-header .menu-button {\n  border-radius: 100px;\n  box-shadow: 1px 2px 7px 2px #ccc;\n  margin: 10px;\n  margin-left: 5%;\n  height: 40px;\n  width: 40px;\n  background: white;\n}\n.appwrapper .btn-icon {\n  color: black;\n}\n.appwrapper .backdrop {\n  width: 100%;\n  height: 100%;\n  background: #0000001f;\n  z-index: 10;\n  position: absolute;\n}\n.appwrapper .fade {\n  transition: 0.5s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n.appwrapper .fade-in {\n  transition: 0.5s linear all;\n  opacity: 1;\n}\n.appwrapper .active {\n  color: #fae345;\n}\n.appwrapper .deactive {\n  color: #616e7e;\n}\n.appwrapper .menuIcon {\n  height: 21px;\n  width: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUU7RUFDRSxlQUFBO0FBWEo7QUFjRTtFQUNFLG1CQUFBO0FBWko7QUFlRTs7RUFFRSxrQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsMkRBQUE7QUFkSjtBQWlCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBaEJKO0FBbUJFO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBcEJKO0FBdUJFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBckJKO0FBd0JFO0VBQ0Usc0RBQUE7QUF0Qko7QUF5QkU7RUFDRSwrQkFBQTtBQXZCSjtBQThCRTtFQUNFLGdCQUFBO0FBNUJKO0FBK0JFO0VBQ0Usc0JBQUE7QUE3Qko7QUFnQ0U7RUFDRSxrQkFBQTtBQTlCSjtBQWlDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUEvQko7QUFrQ0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFoQ0o7QUFtQ0U7RUFDRSwrQkFBQTtBQWpDSjtBQW9DRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBbENKO0FBcUNFO0VBQ0Usa0JBQUE7QUFuQ0o7QUFzQ0U7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQXBDSjtBQXVDRTtFQUNFLGtCQUFBO0FBckNKO0FBd0NFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUF2Q0o7QUEwQ0U7RUFDRSxpQ0FBQTtBQXhDSjtBQTJDRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQXpDSjtBQTBDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXhDTjtBQTRDRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUEzQ0o7QUE4Q0U7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUE1Q0o7QUErQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUE3Q0o7QUFrREU7RUFDRSw2QkFBQTtBQWhESjtBQW1ERTtFQUNFLGVBQUE7QUFqREo7QUFvREU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQWxESjtBQXFERTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQW5ESjtBQXNERTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFwREo7QUF1REU7RUFDRSxpQkFBQTtBQXJESjtBQXdERTtFQUNFLGNBQUE7QUF0REo7QUF5REU7RUFDRSxvQkFBQTtBQXZESjtBQTBERTtFQUNFLG1CQUFBO0FBeERKO0FBMkRFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBekRKO0FBMkRJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUF6RE47QUE0REk7RUFDRSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBMUROO0FBOERFO0VBQ0UsWUFBQTtBQTVESjtBQStERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUE3REo7QUFnRUU7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBOURKO0FBaUVFO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0FBL0RKO0FBa0VFO0VBQ0UsY0FBQTtBQWhFSjtBQW1FRTtFQUNFLGNBQUE7QUFqRUo7QUFvRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQWxFSiIsImZpbGUiOiJzaWRlbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwd3JhcHBlciB7XHJcbiAgLy8gICBpb24tbWVudSBpb24tY29udGVudCB7XHJcbiAgLy8gICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpb24tbWVudS5tZCBpb24tY29udGVudCB7XHJcbiAgLy8gICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAvLyAgIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAvLyAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgLy8gICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIC8vIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5cclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5tZCBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICAgIC8vY29sb3I6ICM2MTZlN2U7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDBweCAwIDAgMDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjNzM4NDlhO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gIGlvbi1ub3RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICAuYXZhdGFyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWVudS1saXN0LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlMzQ1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvL2p1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1waWMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLy8gbGluZS1oZWlnaHQ6IDJweDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIC5hbGlnbi0xNiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5oZWFkaW5nLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vcmUge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ291dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubG9nb3V0LWJ0biB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYWUzNDU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sb2dvdXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XHJcbiAgICBib3JkZXItYm90dG9tOiB1bnNldDtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIC0tYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAubWVudS1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG5cclxuICAgIGlvbi1pbWcge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHdpZHRoOiAxNXZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDdweCAycHggI2NjYztcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi1pY29uIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5iYWNrZHJvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAxZjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgLmZhZGUge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXIgYWxsO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgLmZhZGUtaW4ge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXIgYWxsO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmYWUzNDU7XHJcbiAgfVxyXG5cclxuICAuZGVhY3RpdmUge1xyXG4gICAgY29sb3I6ICM2MTZlN2U7XHJcbiAgfVxyXG5cclxuICAubWVudUljb24ge1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ionic4_tooltips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic4-tooltips */ "TtsJ");
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bar-rating */ "Qsw1");
/* harmony import */ var _pipes_custome_time_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/custome-time.pipe */ "4Xs+");
/* harmony import */ var _pipes_routes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/routes-filter.pipe */ "fDtk");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "BCOl");
/* harmony import */ var _pages_route_route_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/route/route.page */ "jcYm");
/* harmony import */ var _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/dashboard/dashboard.page */ "6ckw");















let SharedComponentsModule = class SharedComponentsModule {
};
SharedComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _bottom_drawer_bottom_drawer_component__WEBPACK_IMPORTED_MODULE_4__["BottomDrawerComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"],
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"],
            _pipes_custome_time_pipe__WEBPACK_IMPORTED_MODULE_10__["CustomeTimePipe"],
            _pipes_routes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["RoutesFilterPipe"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _pages_route_route_page__WEBPACK_IMPORTED_MODULE_13__["RoutePage"],
            _pages_dashboard_dashboard_page__WEBPACK_IMPORTED_MODULE_14__["DashboardPage"],
        ],
        imports: [
            ngx_bar_rating__WEBPACK_IMPORTED_MODULE_9__["BarRatingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ionic4_tooltips__WEBPACK_IMPORTED_MODULE_8__["TooltipsModule"].forRoot(),
        ],
        exports: [
            ngx_bar_rating__WEBPACK_IMPORTED_MODULE_9__["BarRatingModule"],
            _bottom_drawer_bottom_drawer_component__WEBPACK_IMPORTED_MODULE_4__["BottomDrawerComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"],
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"],
            _pipes_custome_time_pipe__WEBPACK_IMPORTED_MODULE_10__["CustomeTimePipe"],
            _pipes_routes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["RoutesFilterPipe"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"]
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
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "up+p");









let AuthService = class AuthService {
    constructor(common, storage, _httpService, oGooglePlus) {
        this.common = common;
        this.storage = storage;
        this._httpService = _httpService;
        this.oGooglePlus = oGooglePlus;
        this.auth$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
        return this.storage.get(_constants_global_constants__WEBPACK_IMPORTED_MODULE_7__["TOKEN"]) ? true : false;
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
        this.common.presentToast({ message, color });
    }
    /**
     * @description Genera el stream de eventos usando next() para crear el evento
     */
    AuthSubject(user) {
        this.auth$.next(user);
    }
    /**
     * @description Creación del observer mediante el método asObserver(), el cual sera consumido por el componente
     * @returns Observable
     */
    authObserver() {
        return this.auth$.asObservable();
    }
};
AuthService.ctorParameters = () => [
    { type: _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".bottom-drawer {\n  position: absolute;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  width: 100%;\n  height: 88vh;\n  z-index: 11;\n  background: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.bottom-position-max {\n  bottom: calc(-0vh + env(safe-area-inset-bottom));\n}\n\n.bottom-position-min {\n  bottom: calc(-69vh + env(safe-area-inset-bottom));\n}\n\n.drawer-pull {\n  background: #cccccc;\n  height: 4px;\n  width: 60px;\n}\n\n.backdrop {\n  width: 100%;\n  height: 100%;\n  background: #0000001f;\n  z-index: 10;\n  position: absolute;\n}\n\n.fade {\n  transition: 0.5s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n\n.fade-in {\n  transition: 0.5s linear all;\n  opacity: 1;\n}\n\n.listImg {\n  width: 42px;\n  height: 42px;\n  margin-right: 18px;\n}\n\n.timeText {\n  font-size: 12px;\n  color: gray;\n  margin-top: 3px;\n}\n\n.content-container {\n  height: 100%;\n  padding-bottom: 15vh;\n}\n\n.itemWrapper {\n  --inner-border-width: 0;\n  margin-top: 18px;\n  display: flex;\n  line-height: initial;\n  align-items: center;\n}\n\n.minH {\n  height: 16px;\n}\n\n.scan {\n  height: 20px;\n  padding-right: 10px;\n}\n\n.clock {\n  height: 18px;\n  margin-right: 5px;\n  margin-top: 1.5%;\n}\n\n.item-native {\n  -webkit-padding-start: unset;\n          padding-inline-start: unset;\n  -webkit-padding-end: unset;\n          padding-inline-end: unset;\n}\n\n.driverWrapper {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n}\n\n.driverOverview {\n  display: flex;\n  flex-direction: row;\n}\n\n.dp {\n  width: 55px;\n  height: 55px;\n  align-self: center;\n  margin-right: 10px;\n}\n\n.driverDetail {\n  display: flex;\n  flex-direction: column;\n  line-height: normal;\n}\n\n.drivername {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.driverPlaceDetail {\n  display: flex;\n  flex-direction: row;\n  font-size: 16px;\n}\n\n.placePadding {\n  padding-right: 6px;\n}\n\n.confirmDriverBtn {\n  margin-top: 3%;\n  --background: #fae345;\n  color: black;\n  --border-radius: 7px;\n}\n\n.setAtBottom {\n  margin-top: 10vh;\n}\n\n.expandedDetailWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.expandedDp {\n  height: 150px;\n}\n\n.expandedSelectedItem {\n  display: flex;\n  flex-direction: row;\n  width: 50%;\n  font-size: 14px;\n  text-align: center;\n}\n\n.equalLength {\n  display: flex;\n  flex: 1;\n  padding: 5px;\n  align-items: center;\n}\n\n.starImg {\n  height: 15px;\n  padding-left: 5px;\n  color: #fae345;\n}\n\n.expanded-driverName {\n  border-right: gray 1px solid;\n}\n\n.flow-4-btn-1 {\n  background-color: #fae345;\n  color: black;\n  text-transform: none !important;\n}\n\n.flow-4-btn-2 {\n  background-color: #ebebeb;\n  color: #8f8f8f;\n  text-transform: none !important;\n}\n\n.btn-select {\n  border: 1px solid #ccc;\n  display: flex;\n  flex: 1;\n  margin: 16px 5px;\n  border-radius: 8px;\n}\n\n.btn35 {\n  width: 38%;\n  text-transform: none !important;\n}\n\n.emptyRow {\n  height: 10px;\n  width: 10px;\n}\n\n.rowView {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.imgWrapper {\n  width: 18%;\n}\n\n.rowWrapper {\n  background: #f4f4f4;\n  border-radius: 15%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-top: 8%;\n  padding-bottom: 8%;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.extraShadow {\n  box-shadow: 2px 4px 6px #ccc;\n  margin-bottom: 3%;\n  width: 99%;\n  border-radius: 7px;\n  position: -webkit-sticky;\n  position: sticky;\n  background: white;\n  height: 9vh;\n  top: 0px;\n}\n\n.totalSeats {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0%;\n  background: white;\n  border-top: 1px solid #ccc;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bottomSeatWrapper {\n  width: 20%;\n  box-shadow: 2px 4px 6px grey;\n  border-radius: 8%;\n  margin-right: 7px;\n  margin-bottom: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 5px;\n  position: relative;\n}\n\n.seatBtn {\n  width: 90%;\n  --background: #fae345;\n  color: black;\n  --border-radius: 7px;\n  text-transform: initial;\n}\n\n.totalSeatCount {\n  align-self: flex-end;\n  width: 60%;\n  background: gainsboro;\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  font-size: 11px;\n}\n\n.smallSeat {\n  height: 4vh;\n  margin-top: 23%;\n}\n\n.smallSeatWrapper {\n  height: 11vh;\n}\n\n.seatType {\n  font-size: 10px;\n  line-height: normal;\n}\n\n.noMargin {\n  margin-right: unset;\n}\n\n.scanBlock {\n  height: 45vh;\n  padding: 18px;\n}\n\n.vdo {\n  height: 35vh;\n  width: 100%;\n}\n\n.car-loc-btn {\n  position: absolute;\n  top: -10%;\n  right: 3%;\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 34px;\n  border-radius: 100px;\n}\n\n.td,\nth {\n  width: 70px;\n}\n\n.scannerImg {\n  height: 40vh;\n}\n\n.brokenTxt {\n  line-break: anywhere;\n}\n\n.cardInDrawer {\n  width: 80%;\n}\n\n.seatContentWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.seatImg {\n  padding: 2px;\n}\n\n.bigseats {\n  margin-top: 25%;\n}\n\n.extendedHeight {\n  height: 12vh;\n}\n\n.borderRad {\n  border-radius: 8px;\n}\n\n.tbl {\n  border-collapse: separate;\n}\n\n.roundBorderLeft {\n  border-top-left-radius: 10px;\n}\n\n.roundBorderRight {\n  border-top-right-radius: 10px;\n}\n\nion-note {\n  display: block;\n}\n\n.avatar {\n  height: 15vh;\n}\n\n#travel-data #info-route {\n  display: flex;\n  flex-direction: column;\n}\n\n#travel-data #info-route img {\n  width: 48px;\n  height: 48px;\n  margin: 0 10px;\n}\n\n#travel-data #info-route h5 {\n  margin: 0;\n}\n\n#travel-data #info-route ion-note {\n  margin: 0;\n}\n\n#travel-data ion-note {\n  margin: 16px 0 5px;\n}\n\n#travel-data h5 {\n  font-weight: normal;\n}\n\n#travel-data h5 ion-icon {\n  color: var(--ion-color-rp-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib3R0b20tZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFHQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0RBQUE7QUFERjs7QUFJQTtFQUNFLGlEQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBREY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSwyQkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBRUUsWUFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLDRCQUFBO1VBQUEsMkJBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUVFLDRCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7QUFKRjs7QUFPQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7QUFKRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQUhGOztBQU1BO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBSEY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUpGOztBQU9BOztFQUVFLFdBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFPQTtFQUNFLG9CQUFBO0FBSkY7O0FBT0E7RUFDRSxVQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0FBSkY7O0FBT0E7RUFDRSw0QkFBQTtBQUpGOztBQU9BO0VBQ0UsNkJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFRRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUxKOztBQU1JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSk47O0FBTUk7RUFDRSxTQUFBO0FBSk47O0FBTUk7RUFDRSxTQUFBO0FBSk47O0FBT0U7RUFDRSxrQkFBQTtBQUxKOztBQU9FO0VBQ0UsbUJBQUE7QUFMSjs7QUFNSTtFQUNFLGtDQUFBO0FBSk4iLCJmaWxlIjoiYm90dG9tLWRyYXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20tZHJhd2VyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICBoZWlnaHQ6IDg4dmg7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmJvdHRvbS1wb3NpdGlvbi1tYXgge1xyXG4gIGJvdHRvbTogY2FsYygtMHZoICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcclxufVxyXG5cclxuLmJvdHRvbS1wb3NpdGlvbi1taW4ge1xyXG4gIGJvdHRvbTogY2FsYygtNjl2aCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XHJcbn1cclxuXHJcbi5kcmF3ZXItcHVsbCB7XHJcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcclxuICBoZWlnaHQ6IDRweDtcclxuICB3aWR0aDogNjBweDtcclxuICAvLyBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5iYWNrZHJvcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDAxZjtcclxuICB6LWluZGV4OiAxMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5mYWRlIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGxpbmVhciBhbGw7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmZhZGUtaW4ge1xyXG4gIHRyYW5zaXRpb246IDAuNXMgbGluZWFyIGFsbDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubGlzdEltZyB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG5cclxuLnRpbWVUZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIC8vIGhlaWdodDogNzUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTV2aDtcclxufVxyXG5cclxuLml0ZW1XcmFwcGVyIHtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1pbkgge1xyXG4gIGhlaWdodDogMTZweDtcclxufVxyXG5cclxuLnNjYW4ge1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY2xvY2sge1xyXG4gIGhlaWdodDogMThweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxLjUlO1xyXG59XHJcblxyXG4uaXRlbS1uYXRpdmUge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB1bnNldDtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IHVuc2V0O1xyXG59XHJcblxyXG4uZHJpdmVyV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kcml2ZXJPdmVydmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uZHAge1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZHJpdmVyRGV0YWlsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmRyaXZlcm5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmRyaXZlclBsYWNlRGV0YWlsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ucGxhY2VQYWRkaW5nIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5jb25maXJtRHJpdmVyQnRuIHtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICAtLWJhY2tncm91bmQ6ICNmYWUzNDU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uc2V0QXRCb3R0b20ge1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbn1cclxuXHJcbi5leHBhbmRlZERldGFpbFdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXhwYW5kZWREcCB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmV4cGFuZGVkU2VsZWN0ZWRJdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXF1YWxMZW5ndGgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXJJbWcge1xyXG4gIGhlaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBjb2xvcjogI2ZhZTM0NTtcclxufVxyXG5cclxuLmV4cGFuZGVkLWRyaXZlck5hbWUge1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICBib3JkZXItcmlnaHQ6IGdyYXkgMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uZmxvdy00LWJ0bi0xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlMzQ1O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxvdy00LWJ0bi0yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gIGNvbG9yOiAjOGY4ZjhmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc2VsZWN0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW46IDE2cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmJ0bjM1IHtcclxuICB3aWR0aDogMzglO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmVtcHR5Um93IHtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi5yb3dWaWV3IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWdXcmFwcGVyIHtcclxuICB3aWR0aDogMTglO1xyXG59XHJcblxyXG4ucm93V3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWJvdHRvbTogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxufVxyXG5cclxuLmV4dHJhU2hhZG93IHtcclxuICBib3gtc2hhZG93OiAycHggNHB4IDZweCAjY2NjO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gIHdpZHRoOiA5OSU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaGVpZ2h0OiA5dmg7XHJcbiAgdG9wOiAwcHg7XHJcbn1cclxuXHJcbi50b3RhbFNlYXRzIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGJvdHRvbTogMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3R0b21TZWF0V3JhcHBlciB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBib3gtc2hhZG93OiAycHggNHB4IDZweCBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDglO1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWF0QnRuIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIC0tYmFja2dyb3VuZDogI2ZhZTM0NTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbn1cclxuXHJcbi50b3RhbFNlYXRDb3VudCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uc21hbGxTZWF0IHtcclxuICBoZWlnaHQ6IDR2aDtcclxuICBtYXJnaW4tdG9wOiAyMyU7XHJcbn1cclxuXHJcbi5zbWFsbFNlYXRXcmFwcGVyIHtcclxuICBoZWlnaHQ6IDExdmg7XHJcbn1cclxuXHJcbi5zZWF0VHlwZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5ub01hcmdpbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcclxufVxyXG5cclxuLnNjYW5CbG9jayB7XHJcbiAgaGVpZ2h0OiA0NXZoO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbn1cclxuXHJcbi52ZG8ge1xyXG4gIGhlaWdodDogMzV2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyLWxvYy1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMCU7XHJcbiAgcmlnaHQ6IDMlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi50ZCxcclxudGgge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG59XHJcblxyXG4uc2Nhbm5lckltZyB7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG59XHJcblxyXG4uYnJva2VuVHh0IHtcclxuICBsaW5lLWJyZWFrOiBhbnl3aGVyZTtcclxufVxyXG5cclxuLmNhcmRJbkRyYXdlciB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnNlYXRDb250ZW50V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWF0SW1nIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5iaWdzZWF0cyB7XHJcbiAgbWFyZ2luLXRvcDogMjUlO1xyXG59XHJcblxyXG4uZXh0ZW5kZWRIZWlnaHQge1xyXG4gIGhlaWdodDogMTJ2aDtcclxufVxyXG5cclxuLmJvcmRlclJhZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4udGJsIHtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG59XHJcblxyXG4ucm91bmRCb3JkZXJMZWZ0IHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucm91bmRCb3JkZXJSaWdodCB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG4jdHJhdmVsLWRhdGEge1xyXG4gICNpbmZvLXJvdXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICBoNSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIGlvbi1ub3RlIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW46IDE2cHggMCA1cHg7XHJcbiAgfVxyXG4gIGg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcnAtcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
    constructor(platform, common, httpService) {
        this.platform = platform;
        this.common = common;
        this.httpService = httpService;
        this.rutasFlow = 0;
        this.rutasBarEdit = false;
        this.$flow = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @description Mustra la lista de usuario
     * @returns Lista de usuarios
     */
    list() {
        return this.httpService.get('/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => response.data));
    }
    /**
     * @description Registra un nuevo usuario
     * @param usuario Datos del usuario
     * @returns usuario registrado
     */
    add(usuario) {
        return this.httpService.post('/users', usuario);
    }
    /**
     * @description Actualización del usuario
     * @param id Id del usuario a actualizar
     * @param client Data que se actualizará del usuario
     * @returns usuario Actualizado
     */
    update(id, client) {
        return this.httpService.put(`/users/${id}`, client);
    }
    /**
     * @description Eliminación de usuario de la DB
     * @param id Id del usuario a eliminar
     * @returns Notificación
     */
    delete(id) {
        return this.httpService.delete(`/users/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            this.toastMessage(response.message);
        }));
    }
    /**
     * @description Actualiza la foto de perfil
     * @param data Foto en base64
     * @returns Foto nueva
     */
    updateAvatar(data) {
        return this.httpService.post(`/update-avatar`, data);
    }
    comment(comment) {
        const data = {
            type_comment_id: 4,
            comment
        };
        return this.httpService.post('/comments', data);
    }
    commentList() {
        return this.httpService
            .get(`/comments?includes[]=responses&includes[]=typeComment`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => response.data));
    }
    commentById(id) {
        return this.httpService
            .get(`/comments/${id}?includes[]=responses&includes[]=typeComment`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => response.data));
    }
    travelList(page = 1) {
        return this.httpService
            .get(`/route-boarding/list?finalized=1&includes[]=route.bus&page=${page}&includes[]=route&take=10&qualified=1`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(list => list.data));
    }
    toastMessage(message) {
        const color = 'primary';
        this.common.presentToast({ message, color });
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
const LOGO = '/assets/loginLogo.png';
const TOKEN = 'rp_token';
const USER = 'rp_user';
const MAP = {
    END_ROUTE_MARK: '/assets/location-sharp.svg',
    USER_MARK: '/assets/user_mark.svg',
    STOP_MARK: '/assets/waypoints.svg',
    BUS: '/assets/svg/bus.svg',
    BUSPNG: '/assets/bus.png'
};


/***/ }),

/***/ "spzo":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Dashboard</h2>\r\n<p>{{message}}</p>\r\n\r\n<ng-container *ngIf=\"hasRoute\">\r\n  <ion-list lines=\"none\">\r\n    <ion-item (click)=\"selectRoute(route)\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"/assets/briefcase.png\" />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{route.name }}</h2>\r\n        <h3>{{route.start_time | customeTime }} - {{route.end_time | customeTime }}</h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ng-container>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"appwrapper\">\r\n  <!-- <ion-split-pane> -->\r\n  <ion-menu contentId=\"home\" type=\"overlay\">\r\n    <ion-content class=\"content\">\r\n      <div class=\"d-flex flex-column h-100 justify-content-between\">\r\n        <ion-list id=\"inbox-list\">\r\n\r\n          <div class=\"menu-list-header\">\r\n            <ng-container *ngIf=\"user?.avatar?.includes('avatar_default.jpg'); else elseTemplate\">\r\n              <div class=\"avatar-container\" (click)=\"takePicture()\">\r\n                <span class=\"profile-pic\">{{ abrv | uppercase }}</span>\r\n                <ion-icon slot=\"end\" name=\"camera\"></ion-icon>\r\n              </div>\r\n            </ng-container>\r\n            <ng-template #elseTemplate>\r\n              <div class=\"avatar-container\" (click)=\"takePicture()\">\r\n                <ion-avatar>\r\n                  <img [src]=\"user?.avatar\">\r\n                </ion-avatar>\r\n                <ion-icon slot=\"end\" name=\"camera\"></ion-icon>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <div class=\"heading\">\r\n              <ion-note class=\"align-16 m-0\">Hola</ion-note>\r\n              <span class=\"align-16 heading-name m-0\">{{user.name}}</span>\r\n            </div>\r\n\r\n          </div>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" (click)=\"menuOptionClickHandle(p, i)\" lines=\"none\" detail=\"false\">\r\n              <img class=\"px-3 menuIcon\" [src]=\"p.icon\" />\r\n              <ion-label [ngClass]=\"activeRoute === i ? 'active' : 'deactive'\" class=\"menu-title\">{{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n        <div>\r\n          <ion-grid fixed>\r\n            <ion-row>\r\n              <ion-col>\r\n                <div>\r\n                  <ion-button expand=\"block\" class=\"ion-margin-bottom\" (click)=\"logout()\" color=\"tertiary\">\r\n                    <ion-icon class=\"logout-icon\" name=\"log-out-outline\"></ion-icon>\r\n                    <ion-label>Cerrar sesión</ion-label>\r\n                  </ion-button>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n      </div>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <div class=\"d-flex justify-content-between menu-header \">\r\n    <div>\r\n      <ion-buttons slot=\"start\" class=\"ion-float-left ion-margin-horizontal menu-button\">\r\n        <ion-menu-button class=\"btn-icon\"></ion-menu-button>\r\n      </ion-buttons>\r\n    </div>\r\n    <div class=\"align-self-center\">\r\n      <ion-img [src]=\"logo\"></ion-img>\r\n    </div>\r\n  </div>\r\n  <div class=\"backdrop\" [ngClass]=\"backdropVisible ? 'fade-in' : 'fade'\" tappable (click)=\"bottomDrawer.toggleDrawer()\">\r\n  </div>\r\n  <ion-router-outlet id=\"home\"></ion-router-outlet>\r\n</div>");

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
        loadChildren: () => Promise.all(/*! import() | pages-authentication-authentication-module */[__webpack_require__.e("default~modals-clients-modal-clients-modal-module~pages-authentication-authentication-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ./pages/authentication/authentication.module */ "CAGU")).then(m => m.AuthenticationPageModule),
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
    },
    {
        path: 'rating',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-rating-rating-module */ "pages-rating-rating-module").then(__webpack_require__.bind(null, /*! ./pages/rating/rating.module */ "17gG")).then(m => m.RatingPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard.module */ "/2RN")).then(m => m.DashboardPageModule)
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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let ExperiencePage = class ExperiencePage {
    constructor(common, userService) {
        this.common = common;
        this.userService = userService;
        this.list = [];
        this.face = '/assets/svg/faces/2.svg';
        this.rating = 1;
        this.serviceMesg = [
            'Mal Servicio',
            'Servicio Regular',
            'Buen Servicio',
            'Servicio satisfactorio',
            'Excelente Servicio',
        ];
        this.msg = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.common.presentLoading();
            loading.present();
            this.userService.travelList().subscribe(list => {
                this.list = [...list];
                const rateSum = [];
                this.list.forEach(l => rateSum.push(l.calification_route));
                this.rating = rateSum.reduce((a, b) => a + b, 0) / this.list.length;
                if (isNaN(this.rating)) {
                    this.rating = 1;
                }
                const rat = Math.round(this.rating);
                (rat === 0) ? this.rating = 1 : this.rating = rat;
                this.face = `/assets/svg/faces/${this.rating}.svg`;
                this.msg = this.serviceMesg.find((item, index) => index === this.rating - 1);
                loading.dismiss();
            }, () => loading.dismiss());
        });
    }
};
ExperiencePage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
ExperiencePage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"],] }]
};
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

/***/ "ws6Y":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */");

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
//# sourceMappingURL=main-es2015.js.map