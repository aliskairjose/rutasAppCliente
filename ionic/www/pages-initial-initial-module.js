(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-initial-initial-module"],{

/***/ "+6CK":
/*!***********************************************!*\
  !*** ./src/app/pages/initial/initial.page.ts ***!
  \***********************************************/
/*! exports provided: InitialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPage", function() { return InitialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_initial_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./initial.page.html */ "RMhM");
/* harmony import */ var _initial_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial.page.scss */ "3EP2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let InitialPage = class InitialPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    gotoSignup() {
        this.router.navigate(['/signin']);
    }
};
InitialPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
InitialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-initial',
        template: _raw_loader_initial_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_initial_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InitialPage);



/***/ }),

/***/ "3EP2":
/*!*************************************************!*\
  !*** ./src/app/pages/initial/initial.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-image: url('prueba 1Recurso 11.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.logo {\n  max-width: 52%;\n}\n\n.txt {\n  font-size: 18px;\n  padding: 0 10vh 2vh;\n  text-align: center;\n  line-height: normal;\n  width: 43vh;\n  font-weight: bold;\n}\n\n.login-btn {\n  padding: 0 12vh;\n  text-transform: capitalize;\n}\n\n.des {\n  position: absolute;\n  bottom: 10%;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luaXRpYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBREoiLCJmaWxlIjoiaW5pdGlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9wcnVlYmEgMVJlY3Vyc28gMTEucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBcbiAgICBcbn1cblxuLmxvZ28ge1xuICAgIG1heC13aWR0aDogNTIlO1xufVxuXG4udHh0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMCAxMHZoIDJ2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB3aWR0aDogNDN2aDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ2luLWJ0biB7XG4gICAgcGFkZGluZzogMCAxMnZoO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uZGVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "RMhM":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/initial/initial.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"login position-relative\">\n    <img class=\"logo\" src=\"../../../assets/logo.png\"/>\n\n    <div class=\"des d-flex flex-column\">\n      <span class=\"txt\">Le ayudamos a IIegar a tiempo y de forma segura</span>\n    <ion-button color=\"dark\" class=\"login-btn\" (click)=\"gotoSignup()\">Empecemos!</ion-button>\n    </div>\n\n    \n  </div>\n</ion-content>");

/***/ }),

/***/ "dfEL":
/*!*************************************************!*\
  !*** ./src/app/pages/initial/initial.module.ts ***!
  \*************************************************/
/*! exports provided: InitialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPageModule", function() { return InitialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _initial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initial-routing.module */ "tWrK");
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initial.page */ "+6CK");







let InitialPageModule = class InitialPageModule {
};
InitialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _initial_routing_module__WEBPACK_IMPORTED_MODULE_5__["InitialPageRoutingModule"]
        ],
        declarations: [_initial_page__WEBPACK_IMPORTED_MODULE_6__["InitialPage"]]
    })
], InitialPageModule);



/***/ }),

/***/ "tWrK":
/*!*********************************************************!*\
  !*** ./src/app/pages/initial/initial-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: InitialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPageRoutingModule", function() { return InitialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial.page */ "+6CK");




const routes = [
    {
        path: '',
        component: _initial_page__WEBPACK_IMPORTED_MODULE_3__["InitialPage"]
    }
];
let InitialPageRoutingModule = class InitialPageRoutingModule {
};
InitialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InitialPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-initial-initial-module.js.map