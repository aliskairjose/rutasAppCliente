(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-authentication-module"],{

/***/ "4jZQ":
/*!*************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.page.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPage", function() { return AuthenticationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_authentication_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./authentication.page.html */ "wO0F");
/* harmony import */ var _authentication_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.page.scss */ "+K4q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ "OTqH");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/global-constants */ "s8rx");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");












let AuthenticationPage = class AuthenticationPage {
    constructor(router, _auth, _storage, formBuilder, _common) {
        this.router = router;
        this._auth = _auth;
        this._storage = _storage;
        this.formBuilder = formBuilder;
        this._common = _common;
        this.formError = _constants_global_constants__WEBPACK_IMPORTED_MODULE_10__["ERROR_FORM"];
        this.logo = _constants_global_constants__WEBPACK_IMPORTED_MODULE_10__["LOGO"];
        this.createForm();
    }
    ngOnInit() {
    }
    get f() { return this.loginForm.controls; }
    googleLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const googleUser = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].GoogleAuth.signIn();
            if (googleUser.authentication.idToken) {
                const loading = yield this._common.presentLoading();
                loading.present();
                this._auth.googleLogin(googleUser).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    loading.dismiss();
                    yield this._storage.store('rp_token', googleUser.authentication.idToken);
                    yield this._storage.store('rp_user', googleUser);
                    this.router.navigate(['/sidemenu/Inicio']);
                }), () => loading.dismiss());
            }
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.loginForm.valid) {
                const loading = yield this._common.presentLoading();
                loading.present();
                this._auth.login(this.loginForm.value).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    loading.dismiss();
                    this._auth.AuthSubject(response.user);
                    const message = response.message;
                    const color = 'primary';
                    this._common.presentToast({ message, color });
                    yield this._storage.store('rp_token', response.data);
                    yield this._storage.store('rp_user', response.user);
                    this.router.navigate(['/sidemenu/Inicio']);
                }), () => loading.dismiss());
            }
        });
    }
    createForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
        });
    }
};
AuthenticationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"] }
];
AuthenticationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-authentication',
        template: _raw_loader_authentication_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_authentication_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthenticationPage);



/***/ }),

/***/ "8caP":
/*!***********************************************************************!*\
  !*** ./src/app/pages/authentication/authentication-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AuthenticationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageRoutingModule", function() { return AuthenticationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.page */ "4jZQ");




const routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_3__["AuthenticationPage"]
    }
];
let AuthenticationPageRoutingModule = class AuthenticationPageRoutingModule {
};
AuthenticationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthenticationPageRoutingModule);



/***/ }),

/***/ "CAGU":
/*!***************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.module.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageModule", function() { return AuthenticationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication-routing.module */ "8caP");
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.page */ "4jZQ");







let AuthenticationPageModule = class AuthenticationPageModule {
};
AuthenticationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]]
    })
], AuthenticationPageModule);



/***/ }),

/***/ "Como":
/*!*******************************!*\
  !*** ./capacitor.config.json ***!
  \*******************************/
/*! exports provided: appId, appName, bundledWebRuntime, npmClient, webDir, plugins, cordova, linuxAndroidStudioPath, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"appId\":\"io.ionic.rutas\",\"appName\":\"myFirstIonicProject\",\"bundledWebRuntime\":false,\"npmClient\":\"npm\",\"webDir\":\"www\",\"plugins\":{\"SplashScreen\":{\"launchShowDuration\":0},\"GoogleAuth\":{\"scopes\":[\"profile\",\"email\"],\"serverClientId\":\"466798676316-02u4gktreb9lcqhfcq32mchcvtc6tpog.apps.googleusercontent.com\",\"forceCodeForRefreshToken\":true}},\"cordova\":{},\"linuxAndroidStudioPath\":\"/home/aponiar14/Downloads/android-studio/bin/studio.sh\"}");

/***/ }),

/***/ "OTqH":
/*!*******************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js ***!
  \*******************************************************************************/
/*! exports provided: GoogleAuthWeb, GoogleAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web */ "npad");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["GoogleAuthWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAuth", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["GoogleAuth"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "npad":
/*!*****************************************************************************!*\
  !*** ./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/web.js ***!
  \*****************************************************************************/
/*! exports provided: GoogleAuthWeb, GoogleAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthWeb", function() { return GoogleAuthWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuth", function() { return GoogleAuth; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../capacitor.config.json */ "Como");
var _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../capacitor.config.json */ "Como", 1);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// @ts-ignore

class GoogleAuthWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    get webConfigured() {
        return document.getElementsByName('google-signin-client_id').length > 0;
    }
    constructor() {
        super({
            name: 'GoogleAuth',
            platforms: ['web']
        });
        if (!this.webConfigured)
            return;
        this.gapiLoaded = new Promise(resolve => {
            // HACK: Relying on window object, can't get property in gapi.load callback
            window.gapiResolve = resolve;
            this.initialize();
        });
        this.addUserChangeListener();
    }
    initialize() {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.defer = true;
        script.async = true;
        script.onload = this.platformJsLoaded;
        script.src = 'https://apis.google.com/js/platform.js';
        head.appendChild(script);
    }
    platformJsLoaded() {
        gapi.load('auth2', () => {
            const clientConfig = {
                client_id: document.getElementsByName('google-signin-client_id')[0].content
            };
            if (_capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth != null && _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.scopes != null) {
                clientConfig.scope = _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.scopes.join(' ');
            }
            gapi.auth2.init(clientConfig);
            window.gapiResolve();
        });
    }
    signIn() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    var serverAuthCode;
                    var needsOfflineAccess = false;
                    try {
                        needsOfflineAccess = _capacitor_config_json__WEBPACK_IMPORTED_MODULE_1__.plugins.GoogleAuth.serverClientId != null;
                    }
                    catch (_a) {
                    }
                    if (needsOfflineAccess) {
                        const offlineAccessResponse = yield gapi.auth2.getAuthInstance().grantOfflineAccess();
                        serverAuthCode = offlineAccessResponse.code;
                    }
                    else {
                        yield gapi.auth2.getAuthInstance().signIn();
                    }
                    const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
                    if (needsOfflineAccess) {
                        // HACK: AuthResponse is null if we don't do this when using grantOfflineAccess
                        yield googleUser.reloadAuthResponse();
                    }
                    const user = this.getUserFrom(googleUser);
                    user.serverAuthCode = serverAuthCode;
                    resolve(user);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            const authResponse = yield gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();
            return {
                accessToken: authResponse.access_token,
                idToken: authResponse.id_token
            };
        });
    }
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            return gapi.auth2.getAuthInstance().signOut();
        });
    }
    addUserChangeListener() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gapiLoaded;
            gapi.auth2.getAuthInstance().currentUser.listen(googleUser => {
                this.notifyListeners("userChange", googleUser.isSignedIn() ? this.getUserFrom(googleUser) : null);
            });
        });
    }
    getUserFrom(googleUser) {
        const user = {};
        const profile = googleUser.getBasicProfile();
        user.email = profile.getEmail();
        user.familyName = profile.getFamilyName();
        user.givenName = profile.getGivenName();
        user.id = profile.getId();
        user.imageUrl = profile.getImageUrl();
        user.name = profile.getName();
        const authResponse = googleUser.getAuthResponse(true);
        user.authentication = {
            accessToken: authResponse.access_token,
            idToken: authResponse.id_token
        };
        return user;
    }
}
const GoogleAuth = new GoogleAuthWeb();


Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(GoogleAuth);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "wO0F":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/authentication.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"signupPageWrapper\">\r\n    <div class=\"signupLogoWrapper\">\r\n      <img [src]=\"logo\" alt=\"broken\" height=\"50vh\" />\r\n    </div>\r\n    <div class=\"signupFormWrapper\">\r\n      <ion-text class=\"signupTitleText\">Inicie sesion</ion-text>\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate class=\"signupForm\">\r\n        <ion-item>\r\n          <ion-input type=\"email\" class=\"form-controll\" formControlName=\"email\" placeholder=\"Usuario\"></ion-input>\r\n        </ion-item>\r\n        <div *ngIf=\"submitted && f.email.errors\">\r\n          <div *ngIf=\"f.email.errors.required\">\r\n            <ion-label text-wrap color=\"danger\">\r\n              {{formError.required}}\r\n            </ion-label>\r\n          </div>\r\n          <div *ngIf=\"f.email.errors.email\">\r\n            <ion-label text-wrap color=\"danger\">\r\n              {{formError.invalidEmail}}\r\n            </ion-label>\r\n          </div>\r\n        </div>\r\n        <ion-item>\r\n          <ion-input type=\"password\" class=\"form-controll\" formControlName=\"password\" placeholder=\"Contrasena\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <div *ngIf=\"submitted && f.password.errors\">\r\n          <div *ngIf=\"f.password.errors.required\">\r\n            <ion-label text-wrap color=\"danger\">\r\n              {{formError.required}}\r\n            </ion-label>\r\n          </div>\r\n          <div *ngIf=\"f.password.errors.minlength\">\r\n            <ion-label text-wrap color=\"danger\">\r\n              {{formError.minLength}} 6\r\n            </ion-label>\r\n          </div>\r\n        </div>\r\n        <div class=\"forgotLinkWrapper\">\r\n          <ion-text [routerLink]=\"['/forgot-password']\" class=\"signupSmallText ion-float-right\">Olvido su contraseña?\r\n          </ion-text>\r\n        </div>\r\n        <div class=\"ion-text-center ion-margin-vertical\">\r\n          <ion-button color=\"warning\" class=\"signupMedText\" type=\"submit\">\r\n            Iniciar sesion</ion-button>\r\n        </div>\r\n        <div class=\"ion-text-center\">\r\n          <ion-text [routerLink]=\"['/register']\" class=\"signupSmallTex\">Registrese</ion-text>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"btnWrapper\">\r\n      <ion-text class=\"signupSmallText signupGrayText\">Inicie sesion con</ion-text>\r\n      <ion-button color=\"light\" (click)=\"googleLogin()\">\r\n        <img src=\"./../../../assets/icon/googleLogo.png\" alt=\"broken\" width=\"30\" height=\"30\" class=\"googleLogoMargin\" />\r\n        <ion-text class=\"signupMedText signupGrayText googleText\">Google</ion-text>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-authentication-authentication-module.js.map