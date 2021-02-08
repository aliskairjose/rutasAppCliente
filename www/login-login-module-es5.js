(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Y5":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function Y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "V6Ie");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "r67e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(formBuilder, router, alertController, loadingController) {
          _classCallCheck(this, LoginPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.model = {
            email: '',
            password: ''
          };
          this.isSubmitted = false;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ionicForm = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.isSubmitted = true;

            if (!this.ionicForm.valid) {
              return false;
            } else {//  console.log(this.ionicForm.value);
            }
          }
        }, {
          key: "login",
          value: function login() {
            if (this.model.email === 'test@cronapis.com' && this.model.password === '123123') {
              //   this.router.navigate(['HomePage']);
              this.router.navigate(['/home']);
              this.presentLoading();
            } else {
              this.presentAlertError();
            }
          }
        }, {
          key: "presentAlertError",
          value: function presentAlertError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Ups',
                        subHeader: 'Datos de acceso incorrectos',
                        message: 'Por favor verifique los datos de acceso.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Por favor espere...',
                        duration: 2000
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      _context2.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context2.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(['/register-user']);
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.ionicForm.controls;
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "V6Ie":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function V6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n<ion-content>\n  <ion-row size=\"12\" class=\"custom-logo\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <div class=\"cont-img\">\n        <img src=\"assets/login/logo.jpg\">\n      </div>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row size=\"12\" class=\"custom-row-login\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\" class=\"ion-padding-bottom\"> USUARIO</ion-label>\n          <ion-input name=\"email\" formControlName=\"email\" [(ngModel)]=\"model.email\"\n                     required type=\"email\"  class=\"custom-input\"></ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"errorControl.email.errors?.required && ionicForm.get('email').touched\">\n      Es un campo requerido.\n    </span>\n        <span class=\"error ion-padding\" *ngIf=\"errorControl.email.errors?.pattern && ionicForm.get('email').touched\">\n      No es un email valido.\n    </span>\n\n        <ion-item lines=\"none\" class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" class=\"ion-padding-bottom\"> CONTRASEÑA</ion-label>\n          <ion-input  name=\"password\" formControlName=\"password\" [(ngModel)]=\"model.password\"\n                      required type=\"password\"  class=\"custom-input\"></ion-input>\n        </ion-item>\n        <span  class=\"error ion-padding\" *ngIf=\"errorControl.password.errors?.required && ionicForm.get('password').touched\">\n      Es un campo requerido.\n    </span>\n        <div class=\"custom-cont-recovery\">\n          <ion-row size=\"12\">\n            <ion-col size=\"6\" class=\"ion-text-left\">\n              <span (click)=\"register()\" class=\"custom-span-recovery ion-padding-start\"> Regístrate </span>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-right\">\n              <span class=\"custom-span-recovery ion-padding-end\">¿ Olvidó su conraseña ?</span>\n            </ion-col>\n          </ion-row>\n        </div>\n      </form>\n      <div class=\"custom-cont-butt-login\">\n        <ion-button [disabled]=\"!ionicForm.valid\" size=\"small\" color=\"medium\" class=\"custon-button-start\" (click)=\"login()\">\n          Iniciar\n        </ion-button>\n      </div>\n    </ion-col>\n\n\n  </ion-row>\n  <ion-row size=\"12\" class=\"ion-no-padding ion-text-center\">\n    <ion-col size=\"5\" class=\"ion-text-center\"><hr class=\"line-sep\"></ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\"> ó </ion-col>\n    <ion-col size=\"5\" class=\"ion-text-center\"><hr class=\"line-sep\"></ion-col>\n  </ion-row>\n\n  <ion-row size=\"12\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <div class=\"cont-google\">\n        <ion-button  size=\"medium\" color=\"light\" class=\"custon-button-start\">\n          <img class=\"custom-img-goo\" src=\"assets/icon/search.svg\">\n          Iniciar con Google\n        </ion-button>\n      </div>\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "euwS":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "r67e":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function r67e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-logo {\n  margin-top: 20%;\n}\n\n.custom-row-login {\n  margin-top: 20%;\n}\n\n.custom-input {\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 5px;\n}\n\n.custom-cont-recovery {\n  padding-top: 3%;\n  width: 100%;\n}\n\n.custom-cont-butt-login {\n  padding-top: 3%;\n  width: 100%;\n  text-align: center;\n}\n\n.custon-button-start {\n  text-transform: none;\n  font-size: 1rem;\n}\n\n.line-sep {\n  border: 1px solid black;\n}\n\n.cont-google {\n  margin-left: 20%;\n  margin-right: 20%;\n  padding-top: 3%;\n}\n\n.custom-img-goo {\n  width: 15%;\n  padding-right: 5%;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFIRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UsdUJBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLFVBQUE7QUFKRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWxvZ28ge1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG5cclxuLmN1c3RvbS1yb3ctbG9naW4ge1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG5cclxuLmN1c3RvbS1pbnB1dCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tc3Bhbi1yZWNvdmVyeSB7XHJcblxyXG59XHJcblxyXG4uY3VzdG9tLWNvbnQtcmVjb3Zlcnkge1xyXG4gIHBhZGRpbmctdG9wOiAzJTtcclxuICB3aWR0aDogMTAwJTtcclxuIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnQtYnV0dC1sb2dpbiB7XHJcbiAgcGFkZGluZy10b3A6IDMlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmN1c3Rvbi1idXR0b24tc3RhcnQge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmxpbmUtc2VwIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmNvbnQtZ29vZ2xlIHtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gIHBhZGRpbmctdG9wOiAzJTtcclxufVxyXG5cclxuLmN1c3RvbS1pbWctZ29vIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map