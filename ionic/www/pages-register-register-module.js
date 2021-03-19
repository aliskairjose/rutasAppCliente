(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "+mX6":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "gnlj");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "/al4":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"signupPageWrapper\">\n    <div class=\"signupLogoWrapper\">\n      <img [src]=\"logo\" alt=\"broken\" height=\"50vh\" />\n    </div>\n    <div class=\"signupFormWrapper\">\n      <ion-text class=\"signupTitleText\">Registro</ion-text>\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" novalidate class=\"signupForm\">\n        <!-- Name-->\n        <ion-item>\n          <ion-input type=\"text\" class=\"form-controll\" formControlName=\"name\" placeholder=\"Nombre\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"submitted && f.name.errors\">\n          <div *ngIf=\"f.name.errors.required\">\n            <ion-label text-wrap color=\"danger\">\n              {{formError.required}}\n            </ion-label>\n          </div>\n        </div>\n        <ion-item>\n          <ion-select placeholder=\"Empresa\" formControlName=\"client_id\">\n            <ion-select-option [value]=\"client.id\" *ngFor=\"let client of clients; let i=index\">{{ client.name }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div *ngIf=\"submitted && f.client_id.errors\">\n          <div *ngIf=\"f.client_id.errors.required\">\n            <ion-label text-wrap color=\"danger\">\n              {{formError.required}}\n            </ion-label>\n          </div>\n        </div>\n        <!-- Departamento-->\n        <ion-item>\n          <ion-input type=\"text\" class=\"form-controll\" formControlName=\"department\" placeholder=\"Departamento\">\n          </ion-input>\n        </ion-item>\n        <div *ngIf=\"submitted && f.department.errors\">\n          <div *ngIf=\"f.department.errors.required\">\n            <ion-label text-wrap color=\"danger\">\n              {{formError.required}}\n            </ion-label>\n          </div>\n        </div>\n        <!-- Cargo-->\n        <ion-item>\n          <ion-input type=\"text\" class=\"form-controll\" formControlName=\"charge\" placeholder=\"Cargo\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"submitted && f.charge.errors\">\n          <div *ngIf=\"f.charge.errors.required\">\n            <ion-label text-wrap color=\"danger\">\n              {{formError.required}}\n            </ion-label>\n          </div>\n        </div>\n        <!-- Email -->\n        <ion-item>\n          <ion-input type=\"email\" class=\"form-controll\" formControlName=\"email\" placeholder=\"Email\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"submitted && f.email.errors\">\n          <div *ngIf=\"f.email.errors.required\">\n            <ion-label text-wrap color=\"danger\">\n              {{formError.required}}\n            </ion-label>\n          </div>\n          <div *ngIf=\"f.email.errors.email\">\n            <ion-label text-wrap color=\"danger\">\n              {{formError.invalidEmail}}\n            </ion-label>\n          </div>\n        </div>\n        <!-- Password -->\n        <ion-item>\n          <ion-input type=\"password\" class=\"form-controll\" formControlName=\"password\" placeholder=\"Contraseña\">\n          </ion-input>\n        </ion-item>\n        <div *ngIf=\"submitted && f.password.errors\">\n          <div *ngIf=\"f.password.errors.required\">\n            <ion-label text-wrap color=\"danger\">\n              {{formError.required}}\n            </ion-label>\n          </div>\n          <div *ngIf=\"f.password.errors.minlength\">\n            <ion-label text-wrap color=\"danger\">\n              {{formError.minLength}} 8\n            </ion-label>\n          </div>\n        </div>\n        <!-- Confirm Password -->\n        <ion-item>\n          <ion-input type=\"password\" class=\"form-controll\" formControlName=\"passwordConfirmation\"\n            placeholder=\"Repita Contraseña\">\n          </ion-input>\n        </ion-item>\n        <div *ngIf=\"submitted && f.passwordConfirmation.errors\">\n          <div *ngIf=\"f.passwordConfirmation.errors.required\">\n            <ion-label text-wrap color=\"danger\">\n              {{formError.required}}\n            </ion-label>\n          </div>\n          <div *ngIf=\"f.passwordConfirmation.errors.minlength\">\n            <ion-label text-wrap color=\"danger\">\n              {{formError.minLength}} 8\n            </ion-label>\n          </div>\n          <div *ngIf=\"f.passwordConfirmation.errors.mustMatch\">\n            <ion-label text-wrap color=\"danger\">\n              {{formError.matchError}}\n            </ion-label>\n          </div>\n        </div>\n        <div class=\"text-center mt-2\">\n          <ion-button color=\"warning\" class=\"signupMedText\" type=\"submit\">\n            Registrese\n          </ion-button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "9Z55":
/*!*************************************************!*\
  !*** ./src/app/helpers/must-match.validator.ts ***!
  \*************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "fQjJ":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signupPageWrapper {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.signupLogoWrapper {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.signupFormWrapper {\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n  align-items: center;\n}\n\n.forgotLinkWrapper {\n  align-self: flex-end;\n  align-items: center;\n  padding: 10px;\n}\n\n.signupSmallText {\n  font-size: 12px;\n}\n\n.signupMedText {\n  font-size: 16px;\n  text-transform: initial;\n}\n\n.signupTitleText {\n  font-size: 20px;\n}\n\n.signupGrayText {\n  color: gray;\n}\n\n.googleLogoMargin {\n  margin: 20px 10px 20px 30px;\n}\n\n.googleText {\n  margin-right: 30px;\n}\n\n.signupForm {\n  width: 100%;\n  padding: 10px;\n}\n\n.signupErrText {\n  text-align: center;\n}\n\n.form-controll {\n  font-size: 12px;\n}\n\n.btnWrapper {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  padding-bottom: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cFBhZ2VXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zaWdudXBMb2dvV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZ251cEZvcm1XcmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9yZ290TGlua1dyYXBwZXIge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNpZ251cFNtYWxsVGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uc2lnbnVwTWVkVGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcblxyXG4uc2lnbnVwVGl0bGVUZXh0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zaWdudXBHcmF5VGV4dCB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5nb29nbGVMb2dvTWFyZ2luIHtcclxuICBtYXJnaW46IDIwcHggMTBweCAyMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5nb29nbGVUZXh0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5zaWdudXBGb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc2lnbnVwRXJyVGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRuV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzdmg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "fhSy":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "+mX6");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "gnlj");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "gnlj":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "/al4");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "fQjJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/clients.service */ "yHwA");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/global-constants */ "s8rx");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/must-match.validator */ "9Z55");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












let RegisterPage = class RegisterPage {
    constructor(_router, _auth, _formBuilder, _commonService, _clientService, _loadingController) {
        this._router = _router;
        this._auth = _auth;
        this._formBuilder = _formBuilder;
        this._commonService = _commonService;
        this._clientService = _clientService;
        this._loadingController = _loadingController;
        this.formError = _constants_global_constants__WEBPACK_IMPORTED_MODULE_7__["ERROR_FORM"];
        this.clients = [];
        this.logo = _constants_global_constants__WEBPACK_IMPORTED_MODULE_7__["LOGO"];
        this.createForm();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadClients();
        });
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.registerForm.valid) {
                const loading = yield this._commonService.presentLoading();
                loading.present();
                this._auth.register(this.registerForm.value).subscribe(response => {
                    loading.dismiss();
                    const message = response.message;
                    const color = 'primary';
                    this._commonService.presentToast({ message, color });
                    setTimeout(() => {
                        this._router.navigate(['/signin']);
                    }, 2000);
                }, () => loading.dismiss());
            }
        });
    }
    loadClients() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this._commonService.presentLoading();
            loading.present();
            this._clientService.getClients().subscribe(result => {
                loading.dismiss();
                this.clients = [...result.data];
            }, () => loading.dismiss());
        });
    }
    createForm() {
        this.registerForm = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
            passwordConfirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
            department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            charge: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            client_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_8__["MustMatch"])('password', 'passwordConfirmation'),
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
    { type: _services_clients_service__WEBPACK_IMPORTED_MODULE_5__["ClientsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "yHwA":
/*!*********************************************!*\
  !*** ./src/app/services/clients.service.ts ***!
  \*********************************************/
/*! exports provided: ClientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsService", function() { return ClientsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "N+K7");



let ClientsService = class ClientsService {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
    getClients() {
        return this._httpService.get('/clients');
    }
};
ClientsService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
ClientsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClientsService);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map