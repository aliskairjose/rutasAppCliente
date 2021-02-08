(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-user-register-user-module"], {
    /***/
    "3sXM":
    /*!*******************************************************!*\
      !*** ./src/app/register-user/register-user.module.ts ***!
      \*******************************************************/

    /*! exports provided: RegisterUserPageModule */

    /***/
    function sXM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterUserPageModule", function () {
        return RegisterUserPageModule;
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


      var _register_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-user-routing.module */
      "pBK0");
      /* harmony import */


      var _register_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register-user.page */
      "7LWL");

      var RegisterUserPageModule = function RegisterUserPageModule() {
        _classCallCheck(this, RegisterUserPageModule);
      };

      RegisterUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterUserPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_register_user_page__WEBPACK_IMPORTED_MODULE_6__["RegisterUserPage"]]
      })], RegisterUserPageModule);
      /***/
    },

    /***/
    "7LWL":
    /*!*****************************************************!*\
      !*** ./src/app/register-user/register-user.page.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterUserPage */

    /***/
    function LWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterUserPage", function () {
        return RegisterUserPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register-user.page.html */
      "KTgz");
      /* harmony import */


      var _register_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register-user.page.scss */
      "qIjR");
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

      var RegisterUserPage = /*#__PURE__*/function () {
        function RegisterUserPage(formBuilder, router, alertController, loadingController) {
          _classCallCheck(this, RegisterUserPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.model = {
            nombre: '',
            empresa: '',
            departamento: '',
            cargo: '',
            email: '',
            password: '',
            recpass: ''
          };
          this.isSubmitted = false;
        }

        _createClass(RegisterUserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ionicForm = this.formBuilder.group({
              nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              empresa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              departamento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              recpass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
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
          key: "register",
          value: function register() {
            this.presentLoading();
            this.router.navigate(['/home']);
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Por favor espere...',
                        duration: 2000
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.ionicForm.controls;
          }
        }]);

        return RegisterUserPage;
      }();

      RegisterUserPage.ctorParameters = function () {
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

      RegisterUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register-user',
        template: _raw_loader_register_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterUserPage);
      /***/
    },

    /***/
    "KTgz":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-user/register-user.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function KTgz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-row size=\"12\">\n            <ion-col size=\"12\" class=\"ion-text-right\">\n                <div class=\"cont-img\">\n                    <img class=\"custom-img-header\" src=\"assets/login/logo.jpg\">\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-row size=\"12\" class=\"ion-no-padding ion-no-margin custom-row-nav\">\n    <ion-col size=\"6\" class=\"ion-no-padding ion-no-margin ion-text-left\">\n        <ion-icon name=\"arrow-back-outline\" class=\"ion-padding-start custon-icon-nav\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-no-padding ion-no-margin ion-text-right\">\n        <ion-icon *ngIf=\"ionicForm.valid\" name=\"checkmark-outline\" class=\"ion-padding-end custon-icon-nav\" (click)=\"register()\"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <ion-row size=\"12\" class=\"custom-row-login\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <div class=\"eti-user\">\n        USUARIO\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\" class=\"ion-padding-bottom\"> Nombre</ion-label>\n          <ion-input name=\"text\" formControlName=\"nombre\" [(ngModel)]=\"model.nombre\"\n                     required type=\"email\"  class=\"custom-input\"></ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"errorControl.nombre.errors?.required && ionicForm.get('nombre').touched\">\n      Es un campo requerido.\n    </span>\n        <span class=\"error ion-padding\" *ngIf=\"errorControl.nombre.errors?.pattern && ionicForm.get('nombre').touched\">\n      No es un email valido.\n    </span>\n\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\">Empresa </ion-label>\n          <ion-select class=\"custon-select\" formControlName=\"empresa\"  type=\"text\" [(ngModel)]=\"model.empresa\" multiple=\"false\" cancelText=\"Cancelar\"  okText=\"Ok\">\n            <ion-select-option value=\"bacon\">Empresa 01</ion-select-option>\n            <ion-select-option value=\"olives\">Empresa 02</ion-select-option>\n            <ion-select-option value=\"xcheese\">Empresa 03</ion-select-option>\n          </ion-select>\n        </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"errorControl.empresa.errors?.required && ionicForm.get('empresa').touched\">\n      Es un campo requerido.\n    </span>\n\n\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\">Departamento </ion-label>\n          <ion-select class=\"custon-select\" formControlName=\"departamento\"  type=\"text\" [(ngModel)]=\"model.departamento\" multiple=\"false\" cancelText=\"Cancelar\"  okText=\"Ok\">\n            <ion-select-option value=\"bacon\">Departamento 01</ion-select-option>\n            <ion-select-option value=\"olives\">Departamento 02</ion-select-option>\n            <ion-select-option value=\"xcheese\">Departamento 03</ion-select-option>\n          </ion-select>\n        </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"errorControl.departamento.errors?.required && ionicForm.get('departamento').touched\">\n      Es un campo requerido.\n    </span>\n\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\">Cargo </ion-label>\n          <ion-select class=\"custon-select\" formControlName=\"cargo\"  type=\"text\" [(ngModel)]=\"model.cargo\" multiple=\"false\" cancelText=\"Cancelar\"  okText=\"Ok\">\n            <ion-select-option value=\"bacon\">Supervisor </ion-select-option>\n            <ion-select-option value=\"olives\">Operador </ion-select-option>\n            <ion-select-option value=\"xcheese\">Planificador </ion-select-option>\n          </ion-select>\n        </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"errorControl.cargo.errors?.required && ionicForm.get('cargo').touched\">\n      Es un campo requerido.\n    </span>\n\n        <ion-item lines=\"none\">\n          <ion-label position=\"stacked\" class=\"ion-padding-bottom\"> Correo</ion-label>\n          <ion-input name=\"email\" formControlName=\"email\" [(ngModel)]=\"model.email\"\n                     required type=\"email\"  class=\"custom-input\"></ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"errorControl.email.errors?.required && ionicForm.get('email').touched\">\n      Es un campo requerido.\n    </span>\n        <span class=\"error ion-padding\" *ngIf=\"errorControl.email.errors?.pattern && ionicForm.get('email').touched\">\n      No es un email valido.\n    </span>\n\n        <ion-item lines=\"none\" class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" class=\"ion-padding-bottom\"> Contraseña</ion-label>\n          <ion-input  name=\"password\" formControlName=\"password\" [(ngModel)]=\"model.password\"\n                      required type=\"password\"  class=\"custom-input\"></ion-input>\n        </ion-item>\n        <span  class=\"error ion-padding\" *ngIf=\"errorControl.password.errors?.required && ionicForm.get('password').touched\">\n      Es un campo requerido.\n    </span>\n        <ion-item lines=\"none\" class=\"ion-margin-top\">\n          <ion-label position=\"stacked\" class=\"ion-padding-bottom\"> Repetir Contraseña</ion-label>\n          <ion-input  name=\"password\" formControlName=\"recpass\" [(ngModel)]=\"model.recpass\"\n                      required type=\"password\"  class=\"custom-input\"></ion-input>\n        </ion-item>\n        <span  class=\"error ion-padding\" *ngIf=\"errorControl.recpass.errors?.required && ionicForm.get('recpass').touched\">\n      Es un campo requerido.\n    </span>\n<!--        <div class=\"custom-cont-recovery\">\n          <ion-row size=\"12\">\n            <ion-col size=\"6\" class=\"ion-text-left\">\n              <span (click)=\"register()\" class=\"custom-span-recovery ion-padding-start\"> Regístrate </span>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-text-right\">\n              <span class=\"custom-span-recovery ion-padding-end\">¿ Olvidó su conraseña ?</span>\n            </ion-col>\n          </ion-row>\n        </div>-->\n      </form>\n\n    </ion-col>\n\n\n  </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "pBK0":
    /*!***************************************************************!*\
      !*** ./src/app/register-user/register-user-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: RegisterUserPageRoutingModule */

    /***/
    function pBK0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterUserPageRoutingModule", function () {
        return RegisterUserPageRoutingModule;
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


      var _register_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register-user.page */
      "7LWL");

      var routes = [{
        path: '',
        component: _register_user_page__WEBPACK_IMPORTED_MODULE_3__["RegisterUserPage"]
      }];

      var RegisterUserPageRoutingModule = function RegisterUserPageRoutingModule() {
        _classCallCheck(this, RegisterUserPageRoutingModule);
      };

      RegisterUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterUserPageRoutingModule);
      /***/
    },

    /***/
    "qIjR":
    /*!*******************************************************!*\
      !*** ./src/app/register-user/register-user.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function qIjR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-logo {\n  margin-top: 10%;\n}\n\n.cont-img {\n  width: 100%;\n}\n\n.cont-img .custom-img-header {\n  width: 60%;\n}\n\n.custom-input {\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 5px;\n}\n\n.custon-button-start {\n  text-transform: none;\n  font-size: 1rem;\n}\n\n.line-sep {\n  border: 1px solid black;\n}\n\n.error {\n  color: red;\n}\n\n.eti-user {\n  margin: auto;\n  padding-top: 3%;\n  font-weight: bold;\n  text-align: center;\n  width: 90%;\n  border-style: solid;\n  border-width: 1px;\n  border-color: gray;\n  color: black;\n  border-radius: 5px;\n  height: 3rem;\n  box-shadow: 2px 2px 10px #666;\n}\n\n.custom-row-nav {\n  padding-top: 2%;\n  padding-bottom: 2%;\n  background-color: #F5EC3D;\n}\n\n.custon-select {\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 5px;\n  margin-top: 3%;\n}\n\n.custon-icon-nav {\n  color: gray;\n  font-size: 2rem;\n}\n\n.custom-icon-menu {\n  padding-top: 5%;\n  font-size: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUFFO0VBQ0UsVUFBQTtBQUVKOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxVQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBSEYiLCJmaWxlIjoicmVnaXN0ZXItdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWxvZ28ge1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmNvbnQtaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAuY3VzdG9tLWltZy1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jdXN0b20tcm93LWxvZ2luIHtcclxuLy8gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uY3VzdG9tLWlucHV0IHtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmN1c3Rvbi1idXR0b24tc3RhcnQge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmxpbmUtc2VwIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZXRpLXVzZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItY29sb3I6IGdyYXk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICM2NjY7XHJcbn1cclxuXHJcbi5jdXN0b20tcm93LW5hdiB7XHJcbiAgcGFkZGluZy10b3A6IDIlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVFQzNEO1xyXG59XHJcblxyXG4uY3VzdG9uLXNlbGVjdCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuXHJcbi5jdXN0b24taWNvbi1uYXYge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLmN1c3RvbS1pY29uLW1lbnUge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBmb250LXNpemU6IDNyZW07XHJcbn1cclxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-user-register-user-module-es5.js.map