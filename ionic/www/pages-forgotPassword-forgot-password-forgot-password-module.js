(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgotPassword-forgot-password-forgot-password-module"],{

/***/ "3yjD":
/*!******************************************************************************!*\
  !*** ./src/app/pages/forgotPassword/forgot-password/forgot-password.page.ts ***!
  \******************************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "JTlk");
/* harmony import */ var _authentication_authentication_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../authentication/authentication.page.scss */ "+K4q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        this.registerForgotForm = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(EMAIL_REGEXP)])]
        });
    }
    ngOnInit() {
    }
    confirm() {
        const email = this.registerForgotForm.controls.email.value;
        const emailValid = this.registerForgotForm.controls.email.valid;
        if (email && emailValid) {
            this.router.navigate(['/signin']);
        }
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_authentication_authentication_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgotPasswordPage);



/***/ }),

/***/ "CuHh":
/*!********************************************************************************!*\
  !*** ./src/app/pages/forgotPassword/forgot-password/forgot-password.module.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "vvir");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "3yjD");







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "JTlk":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotPassword/forgot-password/forgot-password.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"signupPageWrapper\">\r\n    <div class=\"signupLogoWrapper\">\r\n        <!-- <img src=\"img_girl.jpg\" alt=\"broken\" width=\"100\" height=\"100\"/> -->\r\n    </div>\r\n    <div class=\"signupFormWrapper\">\r\n      <ion-text class=\"signupTitleText\">Inicie sesion</ion-text>\r\n      <form [formGroup]=\"registerForgotForm\" novalidate class=\"signupForm\">\r\n        <ion-item>\r\n          <!-- <ion-label class=\"signupSmallText signupGrayText\">Usuario</ion-label> -->\r\n          <ion-input type=\"email\" class=\"form-controll\" formControlName=\"email\" placeholder=\"Enter your registered email\"></ion-input>\r\n        </ion-item>\r\n        <ion-text color=\"danger\" class=\"signupErrText\">\r\n          <p class=\"danger-text\" *ngIf=\"!registerForgotForm.controls.email.valid && registerForgotForm.controls.email.touched\">\r\n              Please enter a valid Email!\r\n          </p>\r\n        </ion-text>\r\n      </form>\r\n      <ion-button color=\"warning\" class=\"signupMedText\" type=\"submit\" (click)=\"confirm()\" [disabled]=\"registerForgotForm.invalid\">Confirm</ion-button>\r\n    </div>\r\n  </div>\r\n  </ion-content>\r\n");

/***/ }),

/***/ "vvir":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/forgotPassword/forgot-password/forgot-password-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "3yjD");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-forgotPassword-forgot-password-forgot-password-module.js.map