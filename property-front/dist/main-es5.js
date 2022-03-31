function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_helpers/customValidators.ts":
  /*!**********************************************!*\
    !*** ./src/app/_helpers/customValidators.ts ***!
    \**********************************************/

  /*! exports provided: CustomValidators */

  /***/
  function srcApp_helpersCustomValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
      return CustomValidators;
    });

    var CustomValidators = /*#__PURE__*/function () {
      function CustomValidators() {
        _classCallCheck(this, CustomValidators);
      }

      _createClass(CustomValidators, null, [{
        key: "noSpaceValidator",
        value: function noSpaceValidator(control) {
          if (/[\s]/.test(control.value)) {
            return {
              'noSpaceValidator': true
            };
          }

          return null;
        }
      }, {
        key: "multipleSpaceValidator",
        value: function multipleSpaceValidator(control) {
          if (/[\s][\s]/.test(control.value)) {
            return {
              'multipleSpaceValidator': true
            };
          }

          return null;
        }
      }, {
        key: "noSpecialChars",
        value: function noSpecialChars(control) {
          if (/[!@#$%^&*(),.?":{}|<>±§_+~`=\/]/g.test(control.value)) {
            return {
              'noSpecialChar': true
            };
          }

          return null;
        }
      }, {
        key: "noNumbers",
        value: function noNumbers(control) {
          if (/[0-9]/.test(control.value)) {
            return {
              'noNumbers': true
            };
          }

          return null;
        }
      }, {
        key: "onlyNumbers",
        value: function onlyNumbers(control) {
          // if (!/[0-9]/.test(control.value)) {
          if (/[A-Za-z!@#$%^&*(),.?":{}|<>±§_+~`=\/]/.test(control.value)) {
            return {
              'onlyNumbers': true
            };
          }

          return null;
        }
      }, {
        key: "passwordNumber",
        value: function passwordNumber(control) {
          if (!/[0-9]/.test(control.value)) {
            return {
              'passwordNumber': true
            };
          }

          return null;
        }
      }, {
        key: "passwordUpperCase",
        value: function passwordUpperCase(control) {
          if (!/[A-Z]/.test(control.value)) {
            return {
              'passwordUpperCase': true
            };
          }

          return null;
        }
      }, {
        key: "passwordCompare",
        value: function passwordCompare(control) {
          var password = control.get('password');
          var confirmPass = control.get('confirmPass');

          if (password.pristine || confirmPass.pristine) {
            return null;
          }

          if (password.value !== confirmPass.value) {
            return {
              'match': true
            };
          }

          return null;
        }
      }]);

      return CustomValidators;
    }();
    /***/

  },

  /***/
  "./src/app/_helpers/error.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/_helpers/error.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcApp_helpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(authenticationService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {// auto logout if 401 response returned from api
              // this.authenticationService.logout();
              // location.reload();
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_helpers/fake-backend.ts":
  /*!******************************************!*\
    !*** ./src/app/_helpers/fake-backend.ts ***!
    \******************************************/

  /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcApp_helpersFakeBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return FakeBackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return fakeBackendProvider;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var users = [{
      id: 1,
      email: "test@test",
      password: "test",
      firstName: "Test",
      lastName: "User",
      // password: "test",
      contactNumber: "0765698964",
      favourites: [1]
    }, {
      id: 2,
      email: "test2@test",
      password: "test2",
      firstName: "Test2",
      lastName: "Test2Suranme",
      // confirmPass: "test2",
      contactNumber: "0824593652",
      favourites: []
    }];

    var FakeBackendInterceptor = /*#__PURE__*/function () {
      function FakeBackendInterceptor() {
        _classCallCheck(this, FakeBackendInterceptor);
      }

      _createClass(FakeBackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var url = request.url,
              method = request.method,
              headers = request.headers,
              body = request.body; // wrap in delayed observable to simulate server api call

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());

          function handleRoute() {
            switch (true) {
              case url.endsWith("/users/authenticate") && method === "POST":
                return authenticate();

              case url.endsWith("/users") && method === "GET":
                return getUsers();

              case url.endsWith("/users") && method === "PUT":
                return updateUser();

              case url.includes("/users") && !url.endsWith("/users") && method === "GET":
                return getUser(url);

              case url.endsWith("/users/password") && method === "PUT":
                return updatePassword();

              case url.endsWith("/users") && method === "POST":
                return createUser();

              default:
                // pass through any requests not handled above
                return next.handle(request);
            }
          } // route functions


          function authenticate() {
            var email = body.email,
                password = body.password;
            var user = users.find(function (x) {
              return x.email === email && x.password === password;
            });
            if (!user) return error("Username or password is incorrect");
            return ok({
              id: user.id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              contactNumber: user.contactNumber,
              token: "fake-jwt-token",
              favourites: user.favourites
            });
          }

          function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
          }

          function getUser(url) {
            if (!isLoggedIn()) return unauthorized();
            var startPoint = url.lastIndexOf("/") + 1;
            var endPoint = url.length;
            var userId = url.slice(startPoint, endPoint);
            var user = users.find(function (user) {
              return user.id === +userId;
            });
            return ok(user);
          }

          function updateUser() {
            /** @TODO: Change the value stored in localstorage as well..? */
            var email = body.email,
                firstName = body.firstName,
                lastName = body.lastName,
                contactNumber = body.contactNumber,
                id = body.id;
            var user = users.find(function (x) {
              return x.id === id;
            });
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.contactNumber = contactNumber;
            return ok({
              id: user.id,
              email: email,
              firstName: firstName,
              lastName: lastName,
              contactNumber: contactNumber,
              token: "fake-jwt-token"
            });
          }

          function updatePassword() {
            var currentPassword = body.currentPassword,
                password = body.password,
                confirmPass = body.confirmPass;
            /** @ TODO: Change this - we might have two users with the same password */

            var user = users.find(function (x) {
              return x.password === currentPassword;
            });
            if (!user) return error("Current password is incorrect");
            user.password = password;
            return ok({
              password: password,
              confirmPass: confirmPass
            });
          }

          function createUser() {
            var user = body;
            var numberOfUsers = users.length;
            user.id = numberOfUsers + 1;
            users.push(user);
            return ok({
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              password: user.password
            });
          } // helper functions


          function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
              status: 200,
              body: body
            }));
          }

          function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
              error: {
                message: message
              }
            });
          }

          function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
              status: 401,
              error: {
                message: "Unauthorised"
              }
            });
          }

          function isLoggedIn() {
            return headers.get("Authorization") === "Bearer fake-jwt-token";
          }
        }
      }]);

      return FakeBackendInterceptor;
    }();

    FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) {
      return new (t || FakeBackendInterceptor)();
    };

    FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FakeBackendInterceptor,
      factory: FakeBackendInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    var fakeBackendProvider = {
      // use fake backend in place of Http service for backend-less development
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: FakeBackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/_helpers/index.ts":
  /*!***********************************!*\
    !*** ./src/app/_helpers/index.ts ***!
    \***********************************/

  /*! exports provided: NotAuthGuard, ErrorInterceptor, FakeBackendInterceptor, fakeBackendProvider, JwtInterceptor */

  /***/
  function srcApp_helpersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _authentication_not_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../authentication/not.auth.guard */
    "./src/app/authentication/not.auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function () {
      return _authentication_not_auth_guard__WEBPACK_IMPORTED_MODULE_0__["NotAuthGuard"];
    });
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./error.interceptor */
    "./src/app/_helpers/error.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"];
    });
    /* harmony import */


    var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fake-backend */
    "./src/app/_helpers/fake-backend.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"];
    });
    /* harmony import */


    var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./jwt.interceptor */
    "./src/app/_helpers/jwt.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__["JwtInterceptor"];
    });
    /***/

  },

  /***/
  "./src/app/_helpers/jwt.interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/_helpers/jwt.interceptor.ts ***!
    \*********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcApp_helpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add auth header with jwt if user is logged in and request is to the api url
          var currentUser = this.authenticationService.currentUserValue;
          var isLoggedIn = currentUser && currentUser.token;
          var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);

          if (isLoggedIn && isApiUrl) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
      return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_helpers/truncate-text.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/_helpers/truncate-text.pipe.ts ***!
    \************************************************/

  /*! exports provided: TruncateTextPipe */

  /***/
  function srcApp_helpersTruncateTextPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncateTextPipe", function () {
      return TruncateTextPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TruncateTextPipe = /*#__PURE__*/function () {
      function TruncateTextPipe() {
        _classCallCheck(this, TruncateTextPipe);
      }

      _createClass(TruncateTextPipe, [{
        key: "transform",
        value: function transform(value, length) {
          var biggestWord = 50;
          var elipses = "...";
          if (typeof value === "undefined") return value;
          if (value.length <= length) return value; //.. truncate to about correct length

          var truncatedText = value.slice(0, length + biggestWord); //.. now nibble ends till correct length

          while (truncatedText.length > length - elipses.length) {
            var lastSpace = truncatedText.lastIndexOf(" ");
            if (lastSpace === -1) break;
            truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?;:]$/, '');
          }

          ;
          return truncatedText + elipses;
        }
      }]);

      return TruncateTextPipe;
    }();

    TruncateTextPipe.ɵfac = function TruncateTextPipe_Factory(t) {
      return new (t || TruncateTextPipe)();
    };

    TruncateTextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "truncateText",
      type: TruncateTextPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateTextPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'truncateText'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/_mockServices/my-in-memory.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/_mockServices/my-in-memory.service.ts ***!
    \*******************************************************/

  /*! exports provided: MyInMemoryService */

  /***/
  function srcApp_mockServicesMyInMemoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyInMemoryService", function () {
      return MyInMemoryService;
    });

    var MyInMemoryService = /*#__PURE__*/function () {
      function MyInMemoryService() {
        _classCallCheck(this, MyInMemoryService);
      }

      _createClass(MyInMemoryService, [{
        key: "createDb",
        value: function createDb() {
          var adverts = [{
            id: 3,
            userId: 2,
            title: "2 Bedroom Apartment",
            province: "Western Cape",
            city: "Jeffries Bay",
            details: "2 bedrooms with the main leading out to garden with french doors, unit has a beautiful full bathroom. Generous sized living area open plan lounge/ dining and kitchen with sliding doors leading out on to the private  garden and covered patio area. Complex offers tennis court 3 pools active club house fiber and 24 hour security, access control, Douglasdale village shopping center a walk away.<br><br> The unit comes with one covered parking with plenty of visitors parking for your guests. Complex has 24 hour security and a beautiful pool area with braai facilities for those hot summer days. <br><br> This is a ground floor apartment, parking is close to the unit one is covered and second one is not. In a well maintained complex, which is close to schools, shops and transport. Apartment has modern finishes. Unit is fibre ready. Kitchen has space for two under counter appliances. Main bathroom has a shower. The second bathroom has a shower and separate bath. Complex has play areas for the kids. Easy access to the highway to get to work.",
            price: 940000,
            status: "Live",
            bedrooms: 2,
            bathrooms: 2,
            parkingSpaces: 1,
            images: ['../../../assets/image-1.jpg', '../../../assets/image-2.jpg', '../../../assets/image-3.jpg', '../../../assets/image-4.jpg', '../../../assets/image-5.jpg', '../../../assets/image-6.jpg'],
            headlineImage: '../../../assets/image-1.jpg'
          }, {
            id: 1,
            userId: 1,
            title: "3 Bedroom House",
            province: "Gauteng",
            city: "Johannesburg",
            details: "Enjoy the warm and inviting viking family lifestyle of this popular complex where mothers meet and enjoy a glass of wine, whilst the children play and ride their bikes in the street. 3/4 sunlit bedrooms with wood laminated floors (main bedroom with air-conditioner), 2 full modern bathrooms with blinds (main with double vanities). Functional modern, open plan kitchen with granite tops, scullery and lots of storage.",
            price: 2400000,
            status: "Live",
            bedrooms: 3,
            bathrooms: 2,
            parkingSpaces: 2,
            images: ['../../../assets/image-1.jpg', '../../../assets/image-2.jpg', '../../../assets/image-3.jpg', '../../../assets/image-4.jpg', '../../../assets/image-5.jpg', '../../../assets/image-6.jpg'],
            headlineImage: '../../../assets/image-2.jpg'
          }, {
            id: 2,
            userId: 1,
            title: "2 Bedroom House",
            province: "Gauteng",
            city: "Johannesburg",
            details: "The property has a generous novik floor space of 91m2, your open plan kitchen with plenty of granite counter top and cupboard space will cater for the aspiring cook. The kitchen is open plan, leading into the generous living area, which flows seamlessly onto the private covered patio. The well sized bedrooms have been lovingly maintained, the main bedroom is en-suite with a shower, and the second bedroom is serviced by the second bathroom with bath and overhead shower. This unit provides 2 carports, one covered and one open, and the added benefits of what the lifestyle estate offers, swimming pool, clubhouse, tennis courts, 24 hour security, manicured communal gardens, ample visitors parking, and so much more. It really is a must view.",
            price: 1300000,
            status: "Live",
            bedrooms: 2,
            bathrooms: 1,
            parkingSpaces: 2,
            images: ['../../../assets/image-1.jpg', '../../../assets/image-2.jpg', '../../../assets/image-3.jpg', '../../../assets/image-4.jpg', '../../../assets/image-5.jpg', '../../../assets/image-6.jpg'],
            headlineImage: '../../../assets/image-5.jpg'
          }];
          var cities = [{
            name: "Johannesburg",
            province: "Gauteng"
          }, {
            name: "Pretoria",
            province: "Gauteng"
          }, {
            name: "Port Elizabeth",
            province: "Eastern Cape"
          }, {
            name: "East London",
            province: "Eastern Cape"
          }, {
            name: "Cape Town",
            province: "Western Cape"
          }, {
            name: "Jeffries Bay",
            province: "Western Cape"
          }, {
            name: "Kimberley",
            province: "Northern Cape"
          }, {
            name: "Upington",
            province: "Northern Cape"
          }, {
            name: "Bloemfontein",
            province: "Free State"
          }, {
            name: "Welkom",
            province: "Free State"
          }, {
            name: "Mahikeng",
            province: "North West"
          }, {
            name: "Klerksdop",
            province: "North West"
          }, {
            name: "Polokwane",
            province: "Limpopo"
          }, {
            name: "Mokopane",
            province: "Limpopo"
          }, {
            name: "Mbombela",
            province: "Mpumalanga"
          }, {
            name: "Hazyview",
            province: "Mpumalanga"
          }, {
            name: "Durban",
            province: "Kwazulu-Natal"
          }, {
            name: "Pietermaritzburg",
            province: "Kwazulu-Natal"
          }];
          return {
            adverts: adverts,
            cities: cities
          };
        }
      }]);

      return MyInMemoryService;
    }();
    /***/

  },

  /***/
  "./src/app/_models/advert.ts":
  /*!***********************************!*\
    !*** ./src/app/_models/advert.ts ***!
    \***********************************/

  /*! exports provided: Advert */

  /***/
  function srcApp_modelsAdvertTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Advert", function () {
      return Advert;
    });

    var Advert = function Advert(title, province, city, price, details, bedrooms, bathrooms, parkingSpaces, images, headlineImage, status,
    /** @Note: shouldnt need this once the userId gets assigned via the API */
    userId, id) {
      _classCallCheck(this, Advert);

      this.title = title;
      this.province = province;
      this.city = city;
      this.price = price;
      this.details = details;
      this.bedrooms = bedrooms;
      this.bathrooms = bathrooms;
      this.parkingSpaces = parkingSpaces;
      this.images = images;
      this.headlineImage = headlineImage;
      this.status = status;
      this.userId = userId;
      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/_models/user.ts":
  /*!*********************************!*\
    !*** ./src/app/_models/user.ts ***!
    \*********************************/

  /*! exports provided: User */

  /***/
  function srcApp_modelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(firstName, lastName, email, contactNumber, password, token, id, favourites) {
      _classCallCheck(this, User);

      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.contactNumber = contactNumber;
      this.password = password;
      this.token = token;
      this.id = id;
      this.favourites = favourites;
    };
    /***/

  },

  /***/
  "./src/app/_services/advert.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/_services/advert.service.ts ***!
    \*********************************************/

  /*! exports provided: AdvertService */

  /***/
  function srcApp_servicesAdvertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvertService", function () {
      return AdvertService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AdvertService = /*#__PURE__*/function () {
      function AdvertService(_http) {
        _classCallCheck(this, AdvertService);

        this._http = _http;
        this.apiEndpoint = 'api/adverts';
      }

      _createClass(AdvertService, [{
        key: "getAdvert",
        value: function getAdvert(id) {
          if (id === 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.initializeAd());
          }

          return this._http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint, "/").concat(id));
        }
      }, {
        key: "getAllAdverts",
        value: function getAllAdverts() {
          return this._http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint))
          /** @NOTE: Filtering for advert status would be handled by the API */
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (adverts) {
            return adverts.filter(function (ad) {
              return ad.status == "Live";
            });
          }));
        }
      }, {
        key: "getSearchedAdverts",
        value: function getSearchedAdverts() {
          return this._http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint));
        }
      }, {
        key: "getUserAdverts",
        value: function getUserAdverts(id) {
          return this._http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint))
          /** @Note: This would be removed and handled by the API when there is one */
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) {
            return x.filter(function (advert) {
              return advert.userId === id;
            });
          }));
        }
      }, {
        key: "createAdvert",
        value: function createAdvert(advert) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this._http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint), advert, {
            headers: headers
          });
        }
        /** @TODO: Pass the advert ID and request body seperatley here so i'm not using advert.id as the param */

      }, {
        key: "updateAdvert",
        value: function updateAdvert(advert) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this._http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint, "/").concat(advert.id), advert, {
            headers: headers
          });
        }
      }, {
        key: "deleteAdvert",
        value: function deleteAdvert(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this._http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint, "/").concat(id), {
            headers: headers
          });
        }
      }, {
        key: "initializeAd",
        value: function initializeAd() {
          return {
            title: '',
            province: '',
            city: '',
            details: '',
            price: null,
            status: '',
            bedrooms: null,
            bathrooms: null,
            parkingSpaces: null,
            images: [],
            headlineImage: ''
          };
        }
      }]);

      return AdvertService;
    }();

    AdvertService.ɵfac = function AdvertService_Factory(t) {
      return new (t || AdvertService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    AdvertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AdvertService,
      factory: AdvertService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdvertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/authentication.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_services/authentication.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/build/jwt-decode.esm.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(_http) {
        _classCallCheck(this, AuthenticationService);

        this._http = _http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(email, password) {
          var _this = this;

          /** @TODO: The api url that needs to be used when connected to the Node API is: `${environment.apiUrl}/users/login` - need to change this so they are the same */
          return this._http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users/authenticate"), {
            email: email,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            _this.currentUserSubject.next(user);

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }, {
        key: "decodedToken",
        get: function get() {
          /** @NOTE: Won't work with the in memory API as a fake token is being assigned */
          var token = this.currentUserSubject.value.token;
          return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_4__["default"])(token);
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/index.ts":
  /*!************************************!*\
    !*** ./src/app/_services/index.ts ***!
    \************************************/

  /*! exports provided: AuthenticationService, UserService */

  /***/
  function srcApp_servicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/_services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"];
    });
    /***/

  },

  /***/
  "./src/app/_services/location.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_services/location.service.ts ***!
    \***********************************************/

  /*! exports provided: LocationService */

  /***/
  function srcApp_servicesLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return LocationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LocationService = /*#__PURE__*/function () {
      function LocationService(_http) {
        _classCallCheck(this, LocationService);

        this._http = _http;
        this.apiEndpoint = 'api/cities';
      }

      _createClass(LocationService, [{
        key: "list",
        value: function list() {
          return this._http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/").concat(this.apiEndpoint));
        }
      }]);

      return LocationService;
    }();

    LocationService.ɵfac = function LocationService_Factory(t) {
      return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocationService,
      factory: LocationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(_http) {
        _classCallCheck(this, UserService);

        this._http = _http;
        this.apiEndpoint = 'api/users';
      }

      _createClass(UserService, [{
        key: "getAll",
        value: function getAll() {
          return this._http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint));
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this._http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint, "/").concat(id));
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          /** @TODO: This call the save the user isn't saving the user correctly - or, it's maybe saving the user to the users array on the in mem service, not the fake-backend */
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this._http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint), user, {
            headers: headers
          });
        }
      }, {
        key: "getAuthUser",
        value: function getAuthUser() {
          /** TODO: Fix - this is returning null at the moment */
          return this._http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint, "/auth"));
        }
      }, {
        key: "createUser",
        value: function createUser(body) {
          return this._http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint, "/register"), body);
        }
      }, {
        key: "updateUser",
        value: function updateUser(body) {
          return this._http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint), body);
        }
      }, {
        key: "updateUserPassword",
        value: function updateUserPassword(body) {
          return this._http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl, "/").concat(this.apiEndpoint, "/password"), body);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/accounts.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/accounts/accounts.module.ts ***!
    \*********************************************/

  /*! exports provided: AccountsModule */

  /***/
  function srcAppAccountsAccountsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsModule", function () {
      return AccountsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./my-account/my-account.component */
    "./src/app/accounts/my-account/my-account.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _password_dialog_password_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./password-dialog/password-dialog.component */
    "./src/app/accounts/password-dialog/password-dialog.component.ts");

    var AccountsModule = function AccountsModule() {
      _classCallCheck(this, AccountsModule);
    };

    AccountsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccountsModule
    });
    AccountsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AccountsModule_Factory(t) {
        return new (t || AccountsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountsModule, {
        declarations: [_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_2__["MyAccountComponent"], _password_dialog_password_dialog_component__WEBPACK_IMPORTED_MODULE_5__["PasswordDialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_2__["MyAccountComponent"], _password_dialog_password_dialog_component__WEBPACK_IMPORTED_MODULE_5__["PasswordDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/my-account/my-account.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/accounts/my-account/my-account.component.ts ***!
    \*************************************************************/

  /*! exports provided: MyAccountComponent */

  /***/
  function srcAppAccountsMyAccountMyAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function () {
      return MyAccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_helpers/customValidators */
    "./src/app/_helpers/customValidators.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _password_dialog_password_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../password-dialog/password-dialog.component */
    "./src/app/accounts/password-dialog/password-dialog.component.ts");
    /* harmony import */


    var _app_shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/utils */
    "./src/app/shared/utils.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var MyAccountComponent = /*#__PURE__*/function () {
      function MyAccountComponent(_formBuilder, _userService, _router, authService, matDialog, matSnackBar) {
        _classCallCheck(this, MyAccountComponent);

        this._formBuilder = _formBuilder;
        this._userService = _userService;
        this._router = _router;
        this.authService = authService;
        this.matDialog = matDialog;
        this.matSnackBar = matSnackBar;
        this.validationMessage = {};
        this.error = '';
        this.successMessage = '';
      }

      _createClass(MyAccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.manageAccountForm = this._formBuilder.group({
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].multipleSpaceValidator, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].noSpecialChars, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].noNumbers]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].multipleSpaceValidator, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].noSpecialChars, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].noNumbers]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].noSpaceValidator]],
            contactNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].onlyNumbers]]
          });
          this.sub = this.manageAccountForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(600)).subscribe(function (value) {
            return _this2.validationMessage = Object(_app_shared_utils__WEBPACK_IMPORTED_MODULE_5__["invalidInputs"])(_this2.manageAccountForm);
          });
          this.getAuthUser();
        }
      }, {
        key: "getAuthUser",
        value: function getAuthUser() {
          var _this3 = this;

          var userId = this.authService.currentUserValue.id;

          this._userService.getUser(userId).subscribe(function (user) {
            _this3.authUser = user;

            _this3.displayUser();
          });
        }
      }, {
        key: "displayUser",
        value: function displayUser() {
          this.manageAccountForm.patchValue({
            firstName: this.authUser.firstName,
            lastName: this.authUser.lastName,
            email: this.authUser.email,
            contactNumber: this.authUser.contactNumber
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this4 = this;

          /** TODO: Change the way this updates */
          var userToUpdate = {
            id: this.authUser.id,
            firstName: this.manageAccountForm.get("firstName").value.trim(),
            lastName: this.manageAccountForm.get("lastName").value.trim(),
            email: this.manageAccountForm.get("email").value.trim(),
            contactNumber: this.manageAccountForm.get("contactNumber").value.trim()
          };

          if (this.authUser.firstName === userToUpdate.firstName && this.authUser.lastName === userToUpdate.lastName && this.authUser.email === userToUpdate.email && this.authUser.contactNumber === userToUpdate.contactNumber) {
            this.matSnackBar.open("No changes were detected", "Close", {
              duration: 2000
            });
            return;
          }

          this._userService.updateUser(userToUpdate).subscribe(function (user) {
            _this4._router.navigateByUrl("/RefreshComponent", {
              skipLocationChange: true
            }).then(function () {
              _this4._router.navigate(["/myaccount"]);

              _this4.matSnackBar.open("You profile has been updated", "Close", {
                duration: 2000
              });
            });
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          this.matDialog.open(_password_dialog_password_dialog_component__WEBPACK_IMPORTED_MODULE_4__["PasswordDialogComponent"], {
            data: {
              user: this.authUser
            }
          });
        }
      }, {
        key: "afterSave",
        value: function afterSave() {
          this.manageAccountForm.patchValue({
            currentPassword: '',
            passwords: {
              password: '',
              confirmPass: ''
            }
          });
          this.manageAccountForm.markAsPristine();
          this.manageAccountForm.markAsUntouched();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) this.sub.unsubscribe();
        }
      }]);

      return MyAccountComponent;
    }();

    MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) {
      return new (t || MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]));
    };

    MyAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyAccountComponent,
      selectors: [["app-my-account"]],
      decls: 32,
      vars: 18,
      consts: [[1, "container"], ["id", "login-row", 1, "row", "justify-content-center", "align-items-center"], ["id", "login-column", 1, "col-md-6"], ["id", "login-box", 1, "col-md-12"], ["id", "login-form", "novalidate", "", 1, "form", 3, "formGroup"], [1, "text-center", "my-4", "h3"], [1, "form-group"], ["type", "text", "name", "firstName", "id", "firstName", "formControlName", "firstName", "placeholder", "First Name", "autocomplete", "off", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["type", "text", "name", "lastName", "id", "lastName", "formControlName", "lastName", "placeholder", "Last Name", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "text", "name", "email", "id", "email", "formControlName", "email", "placeholder", "Email", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "text", "name", "contactNumber", "id", "contactNumber", "formControlName", "contactNumber", "placeholder", "Contact Number", "autocomplete", "off", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-outline-secondary", "btn-lg", "btn-block", 3, "click"], ["type", "submit", "name", "submit", 1, "btn", "btn-outline-success", "btn-lg", "btn-block", 3, "disabled", "click"], ["routerLink", "/myadverts", 1, "btn", "btn-outline-danger", "btn-lg", "btn-block"]],
      template: function MyAccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Manage my account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_Template_a_click_26_listener() {
            return ctx.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Change password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_28_listener() {
            return ctx.updateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.manageAccountForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.validationMessage && ctx.validationMessage.firstName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.firstName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.validationMessage && ctx.validationMessage.lastName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.validationMessage && ctx.validationMessage.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.validationMessage && ctx.validationMessage.contactNumber));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.contactNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.manageAccountForm.touched);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
      styles: [".form-group-container[_ngcontent-%COMP%] {\n  display: flex;\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvbXktYWNjb3VudC9DOlxcVXNlcnNcXE1pY2hhZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3BlcnR5LXdlYnNpdGVcXHByb3BlcnR5LWZyb250L3NyY1xcYXBwXFxhY2NvdW50c1xcbXktYWNjb3VudFxcbXktYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudHMvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2x1bW4tZ2FwOiAxMnB4O1xyXG59XHJcblxyXG5cclxuIiwiLmZvcm0tZ3JvdXAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sdW1uLWdhcDogMTJweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-my-account",
          templateUrl: "./my-account.component.html",
          styleUrls: ["./my-account.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/accounts/password-dialog/password-dialog.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/accounts/password-dialog/password-dialog.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PasswordDialogComponent */

  /***/
  function srcAppAccountsPasswordDialogPasswordDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordDialogComponent", function () {
      return PasswordDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_helpers/customValidators */
    "./src/app/_helpers/customValidators.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/utils */
    "./src/app/shared/utils.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "fa-eye-slash": a0,
        "fa-eye": a1
      };
    };

    var PasswordDialogComponent = /*#__PURE__*/function () {
      function PasswordDialogComponent(_formBuilder, data, dialogRef, _userService, matSnackBar) {
        _classCallCheck(this, PasswordDialogComponent);

        this._formBuilder = _formBuilder;
        this.data = data;
        this.dialogRef = dialogRef;
        this._userService = _userService;
        this.matSnackBar = matSnackBar;
        this.fieldTextType = false;
        this.validationMessage = {};
      }

      _createClass(PasswordDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildForm();
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          var _this5 = this;

          this.editPasswordForm = this._formBuilder.group({
            currentPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwords: this._formBuilder.group({
              password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].noSpaceValidator, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].passwordNumber, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].passwordUpperCase]],
              confirmPass: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }, {
              validator: _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].passwordCompare
            })
          });
          this.editPasswordForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(800)).subscribe(function () {
            _this5.validationMessage = Object(_app_shared_utils__WEBPACK_IMPORTED_MODULE_5__["invalidInputs"])(_this5.editPasswordForm);
          });
        }
      }, {
        key: "updatePassword",
        value: function updatePassword() {
          var _this6 = this;

          var currentPassword = this.editPasswordForm.get("currentPassword").value;
          this.editPasswordForm.get("currentPassword").setErrors(null);
          this.validationMessage = {};

          if (currentPassword !== this.data.user.password) {
            this.editPasswordForm.get("currentPassword").setErrors({
              currentPassword: true
            });
            this.validationMessage = {
              currentPassword: "Password is not right, it is so not right"
            };
            return;
          }

          if (!this.editPasswordForm.valid) {
            this.editPasswordForm.markAllAsTouched();
            this.validationMessage = Object(_app_shared_utils__WEBPACK_IMPORTED_MODULE_5__["invalidInputs"])(this.editPasswordForm);
            return;
          }

          var passwordToUpdate = {
            id: this.data.user.id,
            currentPassword: this.editPasswordForm.get("currentPassword").value,
            password: this.editPasswordForm.get("passwords.password").value,
            confirmPass: this.editPasswordForm.get("passwords.confirmPass").value
          };

          this._userService.updateUserPassword(passwordToUpdate).subscribe(function (user) {
            _this6.dialogRef.close();

            _this6.matSnackBar.open("Your password has been updated", 'Close', {
              duration: 2000
            });
          });
        }
      }, {
        key: "toggleFieldTextType",
        value: function toggleFieldTextType() {
          this.fieldTextType = !this.fieldTextType;
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }]);

      return PasswordDialogComponent;
    }();

    PasswordDialogComponent.ɵfac = function PasswordDialogComponent_Factory(t) {
      return new (t || PasswordDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
    };

    PasswordDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PasswordDialogComponent,
      selectors: [["app-password-dialog"]],
      decls: 42,
      vars: 29,
      consts: [[1, "container"], ["action", "", 3, "formGroup"], [1, "form-group"], [1, "input-group"], ["name", "currentPassword", "id", "currentPassword", "formControlName", "currentPassword", "placeholder", "Current Password", "autocomplete", "off", 1, "form-control", 3, "type", "ngClass"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 3, "ngClass", "click"], [1, "invalid-feedback"], ["formGroupName", "passwords"], ["name", "password", "id", "password", "formControlName", "password", "placeholder", "Password", "autocomplete", "off", 1, "form-control", 3, "type", "ngClass"], ["name", "confirmPass", "id", "confirmPass", "formControlName", "confirmPass", "placeholder", "Confirm Password", "autocomplete", "off", 1, "form-control", 3, "type", "ngClass"], [1, "action-container"], ["type", "submit", "name", "submit", 1, "btn", "btn-outline-success", "btn-md", "btn-block", 3, "click"], [1, "btn", "btn-outline-danger", "btn-md", "btn-block", 3, "click"]],
      template: function PasswordDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change your password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordDialogComponent_Template_i_click_10_listener() {
            return ctx.toggleFieldTextType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordDialogComponent_Template_i_click_21_listener() {
            return ctx.toggleFieldTextType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordDialogComponent_Template_i_click_31_listener() {
            return ctx.toggleFieldTextType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordDialogComponent_Template_button_click_38_listener() {
            return ctx.updatePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Save changes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordDialogComponent_Template_a_click_40_listener() {
            return ctx.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editPasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.validationMessage && ctx.validationMessage.currentPassword));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c1, !ctx.fieldTextType, ctx.fieldTextType));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.currentPassword, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.validationMessage && ctx.validationMessage.password));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, !ctx.fieldTextType, ctx.fieldTextType));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.password, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.validationMessage && ctx.validationMessage.confirmPass || ctx.validationMessage.passwords));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c1, !ctx.fieldTextType, ctx.fieldTextType));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.confirmPass, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.passwords, " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"]],
      styles: [".container[_ngcontent-%COMP%] {\n  min-width: 25vw;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.action-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvcGFzc3dvcmQtZGlhbG9nL0M6XFxVc2Vyc1xcTWljaGFlbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvcGVydHktd2Vic2l0ZVxccHJvcGVydHktZnJvbnQvc3JjXFxhcHBcXGFjY291bnRzXFxwYXNzd29yZC1kaWFsb2dcXHBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudHMvcGFzc3dvcmQtZGlhbG9nL3Bhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudHMvcGFzc3dvcmQtZGlhbG9nL3Bhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWluLXdpZHRoOiAyNXZ3O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmFjdGlvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMjV2dztcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICB3aWR0aDogNTAlO1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-password-dialog',
          templateUrl: './password-dialog.component.html',
          styleUrls: ['./password-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adverts/advert-detail/advert-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/adverts/advert-detail/advert-detail.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdvertDetailComponent */

  /***/
  function srcAppAdvertsAdvertDetailAdvertDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvertDetailComponent", function () {
      return AdvertDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _dialogs_contact_seller_dialog_contact_seller_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../dialogs/contact-seller-dialog/contact-seller-dialog.component */
    "./src/app/adverts/dialogs/contact-seller-dialog/contact-seller-dialog.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services_advert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/_services/advert.service */
    "./src/app/_services/advert.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _shared_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/contact-form/contact-form.component */
    "./src/app/shared/contact-form/contact-form.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function AdvertDetailComponent_div_0_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertDetailComponent_div_0_div_1_div_8_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var img_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r5.selectImage(img_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.getClass(img_r4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AdvertDetailComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertDetailComponent_div_0_div_1_Template_i_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.cycleBackward();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertDetailComponent_div_0_div_1_Template_i_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.cycleForward();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdvertDetailComponent_div_0_div_1_div_8_Template, 3, 2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.advert.headlineImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.advert.images);
      }
    }

    function AdvertDetailComponent_div_0_div_2_button_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertDetailComponent_div_0_div_2_button_24_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r11.toggleFavourite();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.isFavourite ? "Remove from favourites" : "Add to favourites", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.isFavourite ? "favorite" : "favorite_border");
      }
    }

    function AdvertDetailComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AdvertDetailComponent_div_0_div_2_button_24_Template, 4, 2, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertDetailComponent_div_0_div_2_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.openContactDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact seller");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-contact-form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.advert.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 9, ctx_r2.advert.price, "ZAR", "symbol-narrow"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.advert.province, ", ", ctx_r2.advert.city, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.advert.bedrooms);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.advert.bathrooms);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.advert.parkingSpaces);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.authUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r2.advert.details, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AdvertDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdvertDetailComponent_div_0_div_1_Template, 9, 2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdvertDetailComponent_div_0_div_2_Template, 31, 13, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.imagesLoaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
      }
    }

    var AdvertDetailComponent = /*#__PURE__*/function () {
      function AdvertDetailComponent(_route, _advertService, matSnackBar, authService, userService, matDialog) {
        _classCallCheck(this, AdvertDetailComponent);

        this._route = _route;
        this._advertService = _advertService;
        this.matSnackBar = matSnackBar;
        this.authService = authService;
        this.userService = userService;
        this.matDialog = matDialog;
        this.headlineImgIndex = 0;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.isLoading = true;
      }

      _createClass(AdvertDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.sub.add(this._route.paramMap.subscribe(function (params) {
            _this7.id = +params.get("id");

            _this7.getAdvert(_this7.id);
          }));
        }
      }, {
        key: "cycleForward",
        value: function cycleForward() {
          this.headlineImgIndex++;

          if (this.headlineImgIndex < this.advert.images.length) {
            this.advert.headlineImage = this.advert.images[this.headlineImgIndex];
          } else {
            this.advert.headlineImage = this.advert.images[0];
            this.headlineImgIndex = 0;
          }
        }
      }, {
        key: "cycleBackward",
        value: function cycleBackward() {
          this.headlineImgIndex--;

          if (this.headlineImgIndex < this.advert.images.length && this.headlineImgIndex >= 0) {
            this.advert.headlineImage = this.advert.images[this.headlineImgIndex];
          } else {
            this.advert.headlineImage = this.advert.images[this.advert.images.length - 1];
            this.headlineImgIndex = this.advert.images.length - 1;
          }
        }
      }, {
        key: "getClass",
        value: function getClass(img) {
          if (this.advert.headlineImage == img) {
            return;
          } else {
            return 'overlay';
          }
        }
      }, {
        key: "selectImage",
        value: function selectImage(img) {
          var newIndex = this.advert.images.findIndex(function (image) {
            return image === img;
          });
          this.headlineImgIndex = newIndex;
          this.advert.headlineImage = img;
        }
      }, {
        key: "getAdvert",
        value: function getAdvert(id) {
          var _this8 = this;

          this._advertService.getAdvert(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (advert) {
            var headlineImgIndex = advert.images.findIndex(function (image) {
              return image == advert.headlineImage;
            });
            advert.images.splice(headlineImgIndex, 1);
            advert.images.unshift(advert.headlineImage);
          })).subscribe(function (advert) {
            _this8.advert = advert;

            _this8.determineFavourite();

            _this8.imagesLoaded = true;
          });
        }
      }, {
        key: "determineFavourite",
        value: function determineFavourite() {
          var _this9 = this;

          var _a;

          var authUserId = (_a = this.authService.currentUserValue) === null || _a === void 0 ? void 0 : _a.id;

          if (!authUserId) {
            this.isLoading = false;
            return;
          }

          this.userService.getUser(authUserId).subscribe(function (user) {
            _this9.authUser = user;
            if (_this9.authUser.favourites.includes(_this9.advert.id)) _this9.isFavourite = true;
            _this9.isLoading = false;
          });
        }
      }, {
        key: "openContactDialog",
        value: function openContactDialog() {
          this.matDialog.open(_dialogs_contact_seller_dialog_contact_seller_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ContactSellerDialogComponent"]);
        }
      }, {
        key: "toggleFavourite",
        value: function toggleFavourite() {
          var _this10 = this;

          var authUserId = this.authService.currentUserValue.id;
          this.userService.getUser(authUserId).subscribe(function (user) {
            if (!_this10.isFavourite) {
              user.favourites.push(_this10.advert.id);
              _this10.isFavourite = true;
            } else {
              var newFavourites = user.favourites.filter(function (element) {
                return element !== _this10.advert.id;
              });
              _this10.isFavourite = false;
              user.favourites = newFavourites;
            }

            _this10.userService.updateUser(user).subscribe();

            _this10.matSnackBar.open("".concat(_this10.isFavourite ? "Added to" : "Removed from", " your favourites"), "Close", {
              duration: 2000
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) this.sub.unsubscribe();
        }
      }]);

      return AdvertDetailComponent;
    }();

    AdvertDetailComponent.ɵfac = function AdvertDetailComponent_Factory(t) {
      return new (t || AdvertDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_advert_service__WEBPACK_IMPORTED_MODULE_5__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]));
    };

    AdvertDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdvertDetailComponent,
      selectors: [["app-advert-detail"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container grid-container mt-4", 4, "ngIf"], [1, "container", "grid-container", "mt-4"], [4, "ngIf"], ["class", "content-container", 4, "ngIf"], [1, "img-container"], [1, "fas", "fa-chevron-left", "mr-5", 3, "click"], ["alt", "", 3, "src"], [1, "fas", "fa-chevron-right", "ml-5", 3, "click"], [1, "img-preview-container"], ["class", "img-preview", 3, "click", 4, "ngFor", "ngForOf"], [1, "img-preview", 3, "click"], [3, "ngClass"], [3, "src"], [1, "content-container"], [1, "detail-container"], [1, "top-part"], [1, ""], [1, "icons"], [1, "icon-container"], [1, "fa", "fa-solid", "fa-bed"], [1, "fa", "fa-solid", "fa-toilet"], [1, "fa", "fa-solid", "fa-car"], ["class", "btn btn-outline-info btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline-info", "btn-sm", "contact-btn", 3, "click"], [1, "advert-details"], [2, "white-space", "pre-line", 3, "innerHtml"], [1, "btn", "btn-outline-info", "btn-sm", 3, "click"]],
      template: function AdvertDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdvertDetailComponent_div_0_Template, 3, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.advert);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _shared_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_11__["ContactFormComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 2.5rem;\n}\n\n.detail-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  margin-right: 2.5rem;\n}\n\n.detail-container[_ngcontent-%COMP%]   .top-part[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.detail-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.advert-details[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 32rem;\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100%;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  border-top-width: 1.5px;\n}\n\n.fas[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  padding-right: 9px;\n  display: flex;\n  flex-direction: row;\n}\n\n.icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 3px;\n  font-size: 18px;\n  color: #646464;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\nbutton[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 4px;\n}\n\n.img-preview-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 2rem;\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n}\n\n.img-preview-container[_ngcontent-%COMP%]   .img-preview[_ngcontent-%COMP%] {\n  position: relative;\n  flex-basis: 20%;\n}\n\n.img-preview-container[_ngcontent-%COMP%]   .img-preview[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.img-preview-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-color: rgba(255, 255, 255, 0.365);\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n\n.contact-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 980px) {\n  .detail-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detail-container[_ngcontent-%COMP%]   .top-part[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .detail-container[_ngcontent-%COMP%]   .top-part[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .content-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .img-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 13rem;\n    text-align: center;\n  }\n  .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .img-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  app-contact-form[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .contact-btn[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2ZXJ0cy9hZHZlcnQtZGV0YWlsL0M6XFxVc2Vyc1xcTWljaGFlbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvcGVydHktd2Vic2l0ZVxccHJvcGVydHktZnJvbnQvc3JjXFxhcHBcXGFkdmVydHNcXGFkdmVydC1kZXRhaWxcXGFkdmVydC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkdmVydHMvYWR2ZXJ0LWRldGFpbC9hZHZlcnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVFO0VBQ0UsU0FBQTtBQ0FKOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDREY7O0FER0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtBQ0ZGOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGUjs7QURPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FETUU7RUFDRSxpQkFBQTtBQ0pKOztBRFFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FDTEY7O0FET0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNMSjs7QURRRTtFQUNFLGVBQUE7QUNOSjs7QURTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDUEo7O0FEV0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNSRjs7QURXQTtFQUNFLGFBQUE7QUNSRjs7QURXQTtFQUVFO0lBQ0UsV0FBQTtFQ1RGO0VEV0U7SUFDRSxzQkFBQTtFQ1RKO0VEV0k7SUFDRSxnQkFBQTtFQ1ROOztFRGVBO0lBQ0Usc0JBQUE7RUNaRjs7RURlQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUNaRjtFRGNFO0lBQ0UsVUFBQTtFQ1pKO0VEZUU7SUFDRSxhQUFBO0VDYko7O0VEaUJBO0lBQ0UsYUFBQTtFQ2RGOztFRGlCQTtJQUNFLGNBQUE7RUNkRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWR2ZXJ0cy9hZHZlcnQtZGV0YWlsL2FkdmVydC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcclxufVxyXG5cclxuLmRldGFpbC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1yaWdodDogMi41cmVtO1xyXG5cclxuICAudG9wLXBhcnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi5hZHZlcnQtZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMnJlbTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICB9XHJcbn1cclxuXHJcbm1hdC1kaXZpZGVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGJvcmRlci10b3Atd2lkdGg6IDEuNXB4O1xyXG59XHJcblxyXG4uZmFzIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5pY29ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLmljb24tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIFxyXG4gICAgaSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1nLXByZXZpZXctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG5cclxuICAuaW1nLXByZXZpZXcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1iYXNpczogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1wcmV2aWV3OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MHB4O1xyXG4gIGxlZnQ6MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNjUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY29udGFjdC1idG4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xyXG5cclxuICAuZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudG9wLXBhcnQge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gXHJcbiAgLmltZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEzcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHAtY29udGFjdC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1idG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG5cbi5kZXRhaWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XG59XG4uZGV0YWlsLWNvbnRhaW5lciAudG9wLXBhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRldGFpbC1jb250YWluZXIgaDIge1xuICBtYXJnaW46IDA7XG59XG5cbi5hZHZlcnQtZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLmltZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMnJlbTtcbn1cbi5pbWctY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LWRpdmlkZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXItdG9wLXdpZHRoOiAxLjVweDtcbn1cblxuLmZhcyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pY29ucyAuaWNvbi1jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uaWNvbnMgLmljb24tY29udGFpbmVyIGkge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM2NDY0NjQ7XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5idXR0b24gbWF0LWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLmltZy1wcmV2aWV3LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG59XG4uaW1nLXByZXZpZXctY29udGFpbmVyIC5pbWctcHJldmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1iYXNpczogMjAlO1xufVxuLmltZy1wcmV2aWV3LWNvbnRhaW5lciAuaW1nLXByZXZpZXc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1nLXByZXZpZXctY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzY1KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLmNvbnRhY3QtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gIC5kZXRhaWwtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZGV0YWlsLWNvbnRhaW5lciAudG9wLXBhcnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmRldGFpbC1jb250YWluZXIgLnRvcC1wYXJ0IGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5pbWctY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaW1nLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLmltZy1jb250YWluZXIgYSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGFwcC1jb250YWN0LWZvcm0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29udGFjdC1idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-advert-detail',
          templateUrl: './advert-detail.component.html',
          styleUrls: ['./advert-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _app_services_advert_service__WEBPACK_IMPORTED_MODULE_5__["AdvertService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adverts/adverts.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/adverts/adverts.module.ts ***!
    \*******************************************/

  /*! exports provided: AdvertsModule */

  /***/
  function srcAppAdvertsAdvertsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvertsModule", function () {
      return AdvertsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _myadverts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./myadverts */
    "./src/app/adverts/myadverts/index.ts");
    /* harmony import */


    var _edit_advert_edit_advert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-advert/edit-advert.component */
    "./src/app/adverts/edit-advert/edit-advert.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _all_adverts_all_adverts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./all-adverts/all-adverts.component */
    "./src/app/adverts/all-adverts/all-adverts.component.ts");
    /* harmony import */


    var _advert_detail_advert_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./advert-detail/advert-detail.component */
    "./src/app/adverts/advert-detail/advert-detail.component.ts");
    /* harmony import */


    var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _favourite_adverts_favourite_adverts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./favourite-adverts/favourite-adverts.component */
    "./src/app/adverts/favourite-adverts/favourite-adverts.component.ts");
    /* harmony import */


    var _dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dialogs/delete-dialog/delete-dialog.component */
    "./src/app/adverts/dialogs/delete-dialog/delete-dialog.component.ts");
    /* harmony import */


    var _dialogs_unsaved_changes_dialog_unsaved_changes_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dialogs/unsaved-changes-dialog/unsaved-changes-dialog.component */
    "./src/app/adverts/dialogs/unsaved-changes-dialog/unsaved-changes-dialog.component.ts");
    /* harmony import */


    var _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dialogs/search-dialog/search-dialog.component */
    "./src/app/adverts/dialogs/search-dialog/search-dialog.component.ts");
    /* harmony import */


    var _dialogs_contact_seller_dialog_contact_seller_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dialogs/contact-seller-dialog/contact-seller-dialog.component */
    "./src/app/adverts/dialogs/contact-seller-dialog/contact-seller-dialog.component.ts");

    var AdvertsModule = function AdvertsModule() {
      _classCallCheck(this, AdvertsModule);
    };

    AdvertsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdvertsModule
    });
    AdvertsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdvertsModule_Factory(t) {
        return new (t || AdvertsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdvertsModule, {
        declarations: [_myadverts__WEBPACK_IMPORTED_MODULE_2__["MyAdvertsComponent"], _edit_advert_edit_advert_component__WEBPACK_IMPORTED_MODULE_3__["EditAdvertComponent"], _all_adverts_all_adverts_component__WEBPACK_IMPORTED_MODULE_6__["AllAdvertsComponent"], _advert_detail_advert_detail_component__WEBPACK_IMPORTED_MODULE_7__["AdvertDetailComponent"], _favourite_adverts_favourite_adverts_component__WEBPACK_IMPORTED_MODULE_9__["FavouriteAdvertsComponent"], _dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DeleteDialogComponent"], _dialogs_unsaved_changes_dialog_unsaved_changes_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UnsavedChangesDialogComponent"], _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_12__["SearchDialogComponent"], _dialogs_contact_seller_dialog_contact_seller_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ContactSellerDialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_myadverts__WEBPACK_IMPORTED_MODULE_2__["MyAdvertsComponent"], _edit_advert_edit_advert_component__WEBPACK_IMPORTED_MODULE_3__["EditAdvertComponent"], _all_adverts_all_adverts_component__WEBPACK_IMPORTED_MODULE_6__["AllAdvertsComponent"], _advert_detail_advert_detail_component__WEBPACK_IMPORTED_MODULE_7__["AdvertDetailComponent"], _favourite_adverts_favourite_adverts_component__WEBPACK_IMPORTED_MODULE_9__["FavouriteAdvertsComponent"], _dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DeleteDialogComponent"], _dialogs_unsaved_changes_dialog_unsaved_changes_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UnsavedChangesDialogComponent"], _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_12__["SearchDialogComponent"], _dialogs_contact_seller_dialog_contact_seller_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ContactSellerDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/adverts/all-adverts/all-adverts.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/adverts/all-adverts/all-adverts.component.ts ***!
    \**************************************************************/

  /*! exports provided: AllAdvertsComponent */

  /***/
  function srcAppAdvertsAllAdvertsAllAdvertsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllAdvertsComponent", function () {
      return AllAdvertsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dialogs/search-dialog/search-dialog.component */
    "./src/app/adverts/dialogs/search-dialog/search-dialog.component.ts");
    /* harmony import */


    var _app_services_advert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services/advert.service */
    "./src/app/_services/advert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/search/search.component */
    "./src/app/shared/search/search.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_advert_card_large_advert_card_large_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/advert-card-large/advert-card-large.component */
    "./src/app/shared/advert-card-large/advert-card-large.component.ts");

    function AllAdvertsComponent_div_16_h2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Finding adverts...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllAdvertsComponent_div_16_h2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There aren't any adverts that meet your search criteria.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllAdvertsComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllAdvertsComponent_div_16_h2_1_Template, 2, 0, "h2", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllAdvertsComponent_div_16_h2_2_Template, 2, 0, "h2", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
      }
    }

    function AllAdvertsComponent_div_17_app_advert_card_large_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-advert-card-large", 15);
      }

      if (rf & 2) {
        var advert_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("advert", advert_r5);
      }
    }

    function AllAdvertsComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllAdvertsComponent_div_17_app_advert_card_large_1_Template, 1, 1, "app-advert-card-large", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.adverts);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    var AllAdvertsComponent = /*#__PURE__*/function () {
      function AllAdvertsComponent(_advertService, route, matDialog) {
        _classCallCheck(this, AllAdvertsComponent);

        this._advertService = _advertService;
        this.route = route;
        this.matDialog = matDialog;
        this.adverts = [];
        this.orderBy = 'None';
        this.advertsToSend = [];
        this.loading = true;
      }

      _createClass(AllAdvertsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.route.queryParamMap.subscribe(function (params) {
            _this11.preFilledTerms = params;
            var hasParams = Object.keys(_this11.preFilledTerms.params).length > 0;
            var advertSubscription = hasParams ? _this11._advertService.getSearchedAdverts() : _this11._advertService.getAllAdverts();
            advertSubscription.subscribe(function (adverts) {
              if (hasParams) {
                _this11.adverts = _this11.filterAdverts(adverts, _this11.preFilledTerms.params);
                _this11.loading = false;
              } else {
                _this11.adverts = adverts;
                _this11.loading = false;
              }
            });
          });
        }
      }, {
        key: "orderChoice",
        value: function orderChoice(choice) {
          if (choice === 'Ascending') {
            this.isAscending = true;
            this.orderBy = 'Price | Low-to-High';
            this.adverts.sort(this.compare('asc'));
          }

          if (choice === 'Descending') {
            this.isAscending = false;
            this.orderBy = 'Price | High-to-Low';
            this.adverts.sort(this.compare('desc'));
          }
        }
      }, {
        key: "compare",
        value: function compare(order) {
          return function innerSort(a, b) {
            var advertA = a.price;
            var advertB = b.price;
            var comparison = 0;

            if (advertA > advertB) {
              comparison = 1;
            } else if (advertA < advertB) {
              comparison = -1;
            }

            return order === 'desc' ? comparison * -1 : comparison;
          };
        }
      }, {
        key: "openSearchModal",
        value: function openSearchModal() {
          this.matDialog.open(_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_1__["SearchDialogComponent"]);
        }
      }, {
        key: "filterAdverts",
        value: function filterAdverts(adverts, searchTerms) {
          var _this12 = this;

          /** @Note: If there was an API, this would be done there.  */
          var hasKeyword = searchTerms.hasOwnProperty("keyword");
          var hasProvince = searchTerms.hasOwnProperty("province");
          var hasCity = searchTerms.hasOwnProperty("city");
          var hasMinPrice = searchTerms.hasOwnProperty("minPrice");
          var hasMaxPrice = searchTerms.hasOwnProperty("maxPrice");
          var keyword = searchTerms.keyword;
          this.advertsToSend = [];
          adverts.forEach(function (advert) {
            if (hasKeyword && !hasCity && !hasProvince && !hasMinPrice && !hasMaxPrice) {
              if (advert.details.includes(keyword)) _this12.advertsToSend.push(advert);
            } else if (hasKeyword && (hasCity || hasProvince || hasMinPrice || hasMaxPrice)) {
              if (advert.details.includes(keyword)) {
                _this12.filterSomeMore(advert, searchTerms);
              } else {
                return;
              }
            } else {
              _this12.filterSomeMore(advert, searchTerms);
            }
          });
          return this.advertsToSend;
        }
      }, {
        key: "filterSomeMore",
        value: function filterSomeMore(advert, searchTerms) {
          var hasProvince = searchTerms.hasOwnProperty("province");
          var hasCity = searchTerms.hasOwnProperty("city");
          var hasMinPrice = searchTerms.hasOwnProperty("minPrice");
          var hasMaxPrice = searchTerms.hasOwnProperty("maxPrice");

          if (hasProvince && hasCity && hasMinPrice && hasMaxPrice) {
            var province = searchTerms.province,
                city = searchTerms.city,
                minPrice = searchTerms.minPrice,
                maxPrice = searchTerms.maxPrice,
                keyword = searchTerms.keyword;

            if (advert.province == province && advert.city == city && advert.price >= minPrice && advert.price <= maxPrice) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasProvince && hasCity && hasMinPrice) {
            var _province = searchTerms.province,
                _city = searchTerms.city,
                _minPrice = searchTerms.minPrice,
                _keyword = searchTerms.keyword;

            if (advert.province == _province && advert.city == _city && advert.price >= _minPrice) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasProvince && hasCity) {
            var _province2 = searchTerms.province,
                _city2 = searchTerms.city,
                _keyword2 = searchTerms.keyword;

            if (advert.province == _province2 && advert.city == _city2) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasProvince && hasMaxPrice && !hasCity && !hasMinPrice) {
            var _province3 = searchTerms.province,
                _maxPrice = searchTerms.maxPrice;

            if (advert.province == _province3 && advert.price <= _maxPrice) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasProvince && hasMinPrice) {
            var _province4 = searchTerms.province,
                _minPrice2 = searchTerms.minPrice,
                _keyword3 = searchTerms.keyword;

            if (advert.province == _province4 && advert.price >= _minPrice2) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasCity && hasMinPrice) {
            var _city3 = searchTerms.city,
                _minPrice3 = searchTerms.minPrice,
                _keyword4 = searchTerms.keyword;

            if (advert.city == _city3 && advert.price >= _minPrice3) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasCity && hasMaxPrice) {
            var _city4 = searchTerms.city,
                _maxPrice2 = searchTerms.maxPrice,
                _keyword5 = searchTerms.keyword;

            if (advert.city == _city4 && advert.price <= _maxPrice2) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasCity && hasMaxPrice && hasMinPrice) {
            var _city5 = searchTerms.city,
                _maxPrice3 = searchTerms.maxPrice,
                _minPrice4 = searchTerms.minPrice,
                _keyword6 = searchTerms.keyword;

            if (advert.city == _city5 && advert.price <= _maxPrice3 && advert.price >= _minPrice4) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasProvince && hasMaxPrice && hasMinPrice) {
            var _province5 = searchTerms.province,
                _maxPrice4 = searchTerms.maxPrice,
                _minPrice5 = searchTerms.minPrice,
                _keyword7 = searchTerms.keyword;

            if (advert.province == _province5 && advert.price <= _maxPrice4 && advert.price >= _minPrice5) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasMaxPrice && hasMinPrice) {
            var _maxPrice5 = searchTerms.maxPrice,
                _minPrice6 = searchTerms.minPrice,
                _keyword8 = searchTerms.keyword;

            if (advert.price <= _maxPrice5 && advert.price >= _minPrice6) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasProvince) {
            var _province6 = searchTerms.province,
                _keyword9 = searchTerms.keyword;

            if (advert.province == _province6) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasCity) {
            var _city6 = searchTerms.city,
                _keyword10 = searchTerms.keyword;

            if (advert.city == _city6) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasMaxPrice) {
            var _maxPrice6 = searchTerms.maxPrice,
                _keyword11 = searchTerms.keyword;

            if (advert.price <= _maxPrice6) {
              this.advertsToSend.push(advert);
            }

            return;
          }

          if (hasMinPrice) {
            var _minPrice7 = searchTerms.minPrice,
                _keyword12 = searchTerms.keyword;

            if (advert.price >= _minPrice7) {
              this.advertsToSend.push(advert);
            }

            return;
          }
        }
      }]);

      return AllAdvertsComponent;
    }();

    AllAdvertsComponent.ɵfac = function AllAdvertsComponent_Factory(t) {
      return new (t || AllAdvertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    AllAdvertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllAdvertsComponent,
      selectors: [["app-home"]],
      decls: 18,
      vars: 9,
      consts: [[1, "container"], [1, "mt-4"], [1, "search-bar"], [1, "d-flex", "flex-column", "align-items-end"], [1, "btn-group"], [1, "btn", "btn-info", "search-button", 3, "click"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle", "sort-button"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "ngClass", "click"], ["class", "no-adverts", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "no-adverts"], [4, "ngIf"], [1, "mb-3"], [3, "advert", 4, "ngFor", "ngForOf"], [3, "advert"]],
      template: function AllAdvertsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All Adverts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-search", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllAdvertsComponent_Template_button_click_7_listener() {
            return ctx.openSearchModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllAdvertsComponent_Template_a_click_12_listener() {
            return ctx.orderChoice("Descending");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Price: High-to-Low");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllAdvertsComponent_Template_a_click_14_listener() {
            return ctx.orderChoice("Ascending");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price: Low-to-High");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AllAdvertsComponent_div_16_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AllAdvertsComponent_div_17_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Order-by : ", ctx.orderBy, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.isAscending === false));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.isAscending === true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adverts.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adverts && ctx.adverts.length > 0);
        }
      },
      directives: [_shared_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_advert_card_large_advert_card_large_component__WEBPACK_IMPORTED_MODULE_7__["AdvertCardLargeComponent"]],
      styles: [".bd-placeholder-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: grey;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\na[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n  width: 100%;\n}\n\n.btn-group[_ngcontent-%COMP%]   .sort-button[_ngcontent-%COMP%] {\n  max-width: 12rem;\n}\n\n.no-adverts[_ngcontent-%COMP%] {\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 932px) {\n  .search-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search-button[_ngcontent-%COMP%] {\n    display: block;\n    max-width: 12rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2ZXJ0cy9hbGwtYWR2ZXJ0cy9DOlxcVXNlcnNcXE1pY2hhZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3BlcnR5LXdlYnNpdGVcXHByb3BlcnR5LWZyb250L3NyY1xcYXBwXFxhZHZlcnRzXFxhbGwtYWR2ZXJ0c1xcYWxsLWFkdmVydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkdmVydHMvYWxsLWFkdmVydHMvYWxsLWFkdmVydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENFO0VBQ0UsZ0JBQUE7QUNDSjs7QURHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLGFBQUE7RUNBRjs7RURHQTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZHZlcnRzL2FsbC1hZHZlcnRzL2FsbC1hZHZlcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJkLXBsYWNlaG9sZGVyLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlXHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ0bi1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5zb3J0LWJ1dHRvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDEycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLm5vLWFkdmVydHMge1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MzJweCkge1xyXG4gIC5zZWFyY2gtYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogMTJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuYmQtcGxhY2Vob2xkZXItaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJ0bi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG4tZ3JvdXAgLnNvcnQtYnV0dG9uIHtcbiAgbWF4LXdpZHRoOiAxMnJlbTtcbn1cblxuLm5vLWFkdmVydHMge1xuICBoZWlnaHQ6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2VhcmNoLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MzJweCkge1xuICAuc2VhcmNoLWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zZWFyY2gtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDEycmVtO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllAdvertsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './all-adverts.component.html',
          styleUrls: ['./all-adverts.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services_advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adverts/dialogs/contact-seller-dialog/contact-seller-dialog.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/adverts/dialogs/contact-seller-dialog/contact-seller-dialog.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ContactSellerDialogComponent */

  /***/
  function srcAppAdvertsDialogsContactSellerDialogContactSellerDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactSellerDialogComponent", function () {
      return ContactSellerDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/contact-form/contact-form.component */
    "./src/app/shared/contact-form/contact-form.component.ts");

    var ContactSellerDialogComponent = /*#__PURE__*/function () {
      function ContactSellerDialogComponent(dialogRef) {
        _classCallCheck(this, ContactSellerDialogComponent);

        this.dialogRef = dialogRef;
      }

      _createClass(ContactSellerDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeDialog",
        value: function closeDialog(event) {
          if (event) this.dialogRef.close();
        }
      }]);

      return ContactSellerDialogComponent;
    }();

    ContactSellerDialogComponent.ɵfac = function ContactSellerDialogComponent_Factory(t) {
      return new (t || ContactSellerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    ContactSellerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactSellerDialogComponent,
      selectors: [["app-contact-seller-dialog"]],
      decls: 1,
      vars: 0,
      consts: [[3, "closeDialogEvent"]],
      template: function ContactSellerDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-contact-form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeDialogEvent", function ContactSellerDialogComponent_Template_app_contact_form_closeDialogEvent_0_listener($event) {
            return ctx.closeDialog($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_2__["ContactFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkdmVydHMvZGlhbG9ncy9jb250YWN0LXNlbGxlci1kaWFsb2cvY29udGFjdC1zZWxsZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactSellerDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-seller-dialog',
          templateUrl: './contact-seller-dialog.component.html',
          styleUrls: ['./contact-seller-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adverts/dialogs/delete-dialog/delete-dialog.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/adverts/dialogs/delete-dialog/delete-dialog.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DeleteDialogComponent */

  /***/
  function srcAppAdvertsDialogsDeleteDialogDeleteDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function () {
      return DeleteDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_services_advert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services/advert.service */
    "./src/app/_services/advert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DeleteDialogComponent = /*#__PURE__*/function () {
      function DeleteDialogComponent(advertService, router, dialogRef, advert) {
        _classCallCheck(this, DeleteDialogComponent);

        this.advertService = advertService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.advert = advert;
      }

      _createClass(DeleteDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteAdvert",
        value: function deleteAdvert() {
          var _this13 = this;

          this.advertService.deleteAdvert(this.advert.id).subscribe(function () {
            _this13.router.navigateByUrl("/RefreshComponent", {
              skipLocationChange: true
            }).then(function () {
              _this13.router.navigate(["/myadverts"]);
            });

            _this13.dialogRef.close();
          });
        }
      }]);

      return DeleteDialogComponent;
    }();

    DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) {
      return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DeleteDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteDialogComponent,
      selectors: [["app-delete-dialog"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container"], [1, "titles"], [1, "actions"], [1, "btn", "btn-success", "btn-sm", 3, "click"], ["mat-dialog-close", "", 1, "btn", "btn-danger", "btn-sm"]],
      template: function DeleteDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Are you sure you want to delete this advert?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(This is permanent and not even Odin can bring it back!)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_7_listener() {
            return ctx.deleteAdvert();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes, delete!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Actually, no!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".container[_ngcontent-%COMP%] {\n  min-height: 8rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.titles[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  -moz-column-gap: 16px;\n       column-gap: 16px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2ZXJ0cy9kaWFsb2dzL2RlbGV0ZS1kaWFsb2cvQzpcXFVzZXJzXFxNaWNoYWVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm9wZXJ0eS13ZWJzaXRlXFxwcm9wZXJ0eS1mcm9udC9zcmNcXGFwcFxcYWR2ZXJ0c1xcZGlhbG9nc1xcZGVsZXRlLWRpYWxvZ1xcZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWR2ZXJ0cy9kaWFsb2dzL2RlbGV0ZS1kaWFsb2cvZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWR2ZXJ0cy9kaWFsb2dzL2RlbGV0ZS1kaWFsb2cvZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogOHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50aXRsZXMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sdW1uLWdhcDogMTZweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG5oMiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi50aXRsZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbHVtbi1nYXA6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-delete-dialog',
          templateUrl: './delete-dialog.component.html',
          styleUrls: ['./delete-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services_advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adverts/dialogs/search-dialog/search-dialog.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/adverts/dialogs/search-dialog/search-dialog.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SearchDialogComponent */

  /***/
  function srcAppAdvertsDialogsSearchDialogSearchDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchDialogComponent", function () {
      return SearchDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/search/search.component */
    "./src/app/shared/search/search.component.ts");

    var SearchDialogComponent = /*#__PURE__*/function () {
      function SearchDialogComponent(dialogRef) {
        _classCallCheck(this, SearchDialogComponent);

        this.dialogRef = dialogRef;
      }

      _createClass(SearchDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeDialog",
        value: function closeDialog(event) {
          if (event) this.dialogRef.close();
        }
      }]);

      return SearchDialogComponent;
    }();

    SearchDialogComponent.ɵfac = function SearchDialogComponent_Factory(t) {
      return new (t || SearchDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    SearchDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchDialogComponent,
      selectors: [["app-search-dialog"]],
      decls: 1,
      vars: 0,
      consts: [[3, "closeDialogEvent"]],
      template: function SearchDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeDialogEvent", function SearchDialogComponent_Template_app_search_closeDialogEvent_0_listener($event) {
            return ctx.closeDialog($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkdmVydHMvZGlhbG9ncy9zZWFyY2gtZGlhbG9nL3NlYXJjaC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-dialog',
          templateUrl: './search-dialog.component.html',
          styleUrls: ['./search-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adverts/dialogs/unsaved-changes-dialog/unsaved-changes-dialog.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/adverts/dialogs/unsaved-changes-dialog/unsaved-changes-dialog.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: UnsavedChangesDialogComponent */

  /***/
  function srcAppAdvertsDialogsUnsavedChangesDialogUnsavedChangesDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnsavedChangesDialogComponent", function () {
      return UnsavedChangesDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var UnsavedChangesDialogComponent = /*#__PURE__*/function () {
      function UnsavedChangesDialogComponent(dialogRef) {
        _classCallCheck(this, UnsavedChangesDialogComponent);

        this.dialogRef = dialogRef;
      }

      _createClass(UnsavedChangesDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "choose",
        value: function choose(choice) {
          this.dialogRef.close(choice);
        }
      }]);

      return UnsavedChangesDialogComponent;
    }();

    UnsavedChangesDialogComponent.ɵfac = function UnsavedChangesDialogComponent_Factory(t) {
      return new (t || UnsavedChangesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    UnsavedChangesDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnsavedChangesDialogComponent,
      selectors: [["app-unsaved-changes-dialog"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container"], [1, "headings"], [1, "actions"], ["mat-dialog-close", "", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["mat-dialog-close", "", 1, "btn", "btn-danger", "btn-sm", 3, "click"]],
      template: function UnsavedChangesDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Are you sure you want to exit, you're going to lose your changes!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(Think of how much effort you put into this, don't throw it away now!)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnsavedChangesDialogComponent_Template_button_click_7_listener() {
            return ctx.choose(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yeah, I'm over it!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnsavedChangesDialogComponent_Template_button_click_9_listener() {
            return ctx.choose(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Actually no, I'll keep it!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".container[_ngcontent-%COMP%] {\n  min-height: 8rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.headings[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.headings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2ZXJ0cy9kaWFsb2dzL3Vuc2F2ZWQtY2hhbmdlcy1kaWFsb2cvQzpcXFVzZXJzXFxNaWNoYWVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm9wZXJ0eS13ZWJzaXRlXFxwcm9wZXJ0eS1mcm9udC9zcmNcXGFwcFxcYWR2ZXJ0c1xcZGlhbG9nc1xcdW5zYXZlZC1jaGFuZ2VzLWRpYWxvZ1xcdW5zYXZlZC1jaGFuZ2VzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWR2ZXJ0cy9kaWFsb2dzL3Vuc2F2ZWQtY2hhbmdlcy1kaWFsb2cvdW5zYXZlZC1jaGFuZ2VzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxnQkFBQTtBQ0NSOztBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hZHZlcnRzL2RpYWxvZ3MvdW5zYXZlZC1jaGFuZ2VzLWRpYWxvZy91bnNhdmVkLWNoYW5nZXMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiA4cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmhlYWRpbmdzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDEycHg7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogOHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5oZWFkaW5ncyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkaW5ncyBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDEycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnsavedChangesDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-unsaved-changes-dialog',
          templateUrl: './unsaved-changes-dialog.component.html',
          styleUrls: ['./unsaved-changes-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adverts/edit-advert/edit-advert.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/adverts/edit-advert/edit-advert.component.ts ***!
    \**************************************************************/

  /*! exports provided: EditAdvertComponent */

  /***/
  function srcAppAdvertsEditAdvertEditAdvertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAdvertComponent", function () {
      return EditAdvertComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_models_advert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_models/advert */
    "./src/app/_models/advert.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/_helpers/customValidators */
    "./src/app/_helpers/customValidators.ts");
    /* harmony import */


    var _app_shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/utils */
    "./src/app/shared/utils.ts");
    /* harmony import */


    var _dialogs_unsaved_changes_dialog_unsaved_changes_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dialogs/unsaved-changes-dialog/unsaved-changes-dialog.component */
    "./src/app/adverts/dialogs/unsaved-changes-dialog/unsaved-changes-dialog.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services_advert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/_services/advert.service */
    "./src/app/_services/advert.service.ts");
    /* harmony import */


    var _app_services_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/_services/location.service */
    "./src/app/_services/location.service.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditAdvertComponent_option_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var location_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r3, "");
      }
    }

    function EditAdvertComponent_select_20_option_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r5, "");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function EditAdvertComponent_select_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose your city");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditAdvertComponent_select_20_option_3_Template, 2, 1, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.validationMessage && ctx_r1.validationMessage.city));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cities);
      }
    }

    function EditAdvertComponent_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.alertMessage);
      }
    }

    var EditAdvertComponent = /*#__PURE__*/function () {
      function EditAdvertComponent(_formBuilder, _route, _router, _advertService, _locationService, authenticationService, matDialog) {
        _classCallCheck(this, EditAdvertComponent);

        this._formBuilder = _formBuilder;
        this._route = _route;
        this._router = _router;
        this._advertService = _advertService;
        this._locationService = _locationService;
        this.authenticationService = authenticationService;
        this.matDialog = matDialog;
        this.locations = ['Gauteng', 'North West', 'Northern Cape', 'Western Cape', 'Eastern Cape', 'Limpopo', 'Free State', 'Mpumalanga', 'KwaZulu-Natal'];
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.cities = [];
        this.isConfirm = false;
        this.validationMessage = {};
        this.alertMessage = "";
        this.canExit$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.images = ['../../../assets/image-1.jpg', '../../../assets/image-2.jpg', '../../../assets/image-3.jpg', '../../../assets/image-4.jpg', '../../../assets/image-5.jpg', '../../../assets/image-6.jpg'];
      }

      _createClass(EditAdvertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          var _a, _b, _c, _d, _e, _f, _g, _h;

          this.editAdvertForm = this._formBuilder.group({
            title: [(_a = this.advert) === null || _a === void 0 ? void 0 : _a.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].multipleSpaceValidator]],
            province: [(_b = this.advert) === null || _b === void 0 ? void 0 : _b.province, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            city: [(_c = this.advert) === null || _c === void 0 ? void 0 : _c.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            details: [(_d = this.advert) === null || _d === void 0 ? void 0 : _d.details, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1000), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].multipleSpaceValidator]],
            price: [(_e = this.advert) === null || _e === void 0 ? void 0 : _e.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100000000), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].noSpaceValidator, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].onlyNumbers]],
            bedrooms: [(_f = this.advert) === null || _f === void 0 ? void 0 : _f.bedrooms, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            bathrooms: [(_g = this.advert) === null || _g === void 0 ? void 0 : _g.bathrooms, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            parkingSpaces: [(_h = this.advert) === null || _h === void 0 ? void 0 : _h.parkingSpaces, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]]
          });
          this.sub.add(this.editAdvertForm.get("province").valueChanges.subscribe(function (value) {
            _this14.province = value;

            _this14.getCities();
          })); // Get the advert ID from the route parameter

          this.sub.add(this._route.paramMap.subscribe(function (params) {
            _this14.id = +params.get('id');

            _this14.getAdvert(_this14.id);
          }));
          this.sub.add(this.editAdvertForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(600)).subscribe(function (value) {
            return _this14.validationMessage = Object(_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__["invalidInputs"])(_this14.editAdvertForm);
          }));
        }
      }, {
        key: "unsavedChanges",
        value: function unsavedChanges() {
          var _this15 = this;

          var dialogRef = this.matDialog.open(_dialogs_unsaved_changes_dialog_unsaved_changes_dialog_component__WEBPACK_IMPORTED_MODULE_7__["UnsavedChangesDialogComponent"], {});
          dialogRef.afterClosed().subscribe(function (choice) {
            _this15.canExit$.next(choice);
          });
        }
      }, {
        key: "getCities",
        value: function getCities() {
          var _this16 = this;

          this.cities = [];

          this._locationService.list().subscribe(function (cities) {
            /** @Note: Can replace this at some stage with a query param sent to the API */
            cities.forEach(function (city) {
              var _a;

              if (_this16.province === city.province) {
                (_a = _this16.cities) === null || _a === void 0 ? void 0 : _a.push(city.name);
              }
            });
          });
        }
      }, {
        key: "getAdvert",
        value: function getAdvert(id) {
          var _this17 = this;

          this._advertService.getAdvert(id).subscribe(function (advert) {
            _this17.advert = advert;

            _this17.displayAdvert();
          });
        }
      }, {
        key: "displayAdvert",
        value: function displayAdvert() {
          this.editAdvertForm.patchValue({
            title: this.advert.title,
            province: this.advert.province,
            city: this.advert.city,
            details: this.advert.details,
            price: this.advert.price,
            bedrooms: this.advert.bedrooms,
            bathrooms: this.advert.bathrooms,
            parkingSpaces: this.advert.parkingSpaces
          });
        }
      }, {
        key: "createAdvert",
        value: function createAdvert() {
          var _this18 = this;

          /** @TODO: Hack for now - need to move this userId to the API at some stage */
          var currentUser = this.authenticationService.currentUserValue;
          var advertDetails = this.addBreaksToAdvertDetails(this.editAdvertForm.get("details").value.trim());
          var advert = new _app_models_advert__WEBPACK_IMPORTED_MODULE_3__["Advert"](this.editAdvertForm.get("title").value.trim(), this.editAdvertForm.get("province").value.trim(), this.editAdvertForm.get("city").value.trim(), this.editAdvertForm.get("price").value.trim(), advertDetails, this.editAdvertForm.get("bedrooms").value, this.editAdvertForm.get("bathrooms").value, this.editAdvertForm.get("parkingSpaces").value, this.images, this.randomHeadlineImage(), 'Live', currentUser.id);

          this._advertService.createAdvert(advert).subscribe({
            next: function next() {
              return _this18.afterSave();
            }
          });
        }
      }, {
        key: "randomHeadlineImage",
        value: function randomHeadlineImage() {
          var randomNum = Math.floor(Math.random() * 5);
          return this.images[randomNum];
        }
      }, {
        key: "updateAdvert",
        value: function updateAdvert() {
          var _this19 = this;

          var updatedAdvert = Object.assign(Object.assign({}, this.advert), this.editAdvertForm.value);

          this._advertService.updateAdvert(updatedAdvert).subscribe({
            next: function next() {
              return _this19.afterSave();
            }
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this20 = this;

          if (this.editAdvertForm.valid) {
            if (this.id == 0) {
              this.createAdvert();
              return;
            }

            if (this.id > 0) {
              this.updateAdvert();
              return;
            }
          } else {
            this.alertMessage = "Please ensure the form is valid.";
            this.editAdvertForm.markAllAsTouched();
            this.validationMessage = Object(_app_shared_utils__WEBPACK_IMPORTED_MODULE_6__["invalidInputs"])(this.editAdvertForm);
            setTimeout(function () {
              _this20.alertMessage = "";
            }, 2000);
          }
        }
      }, {
        key: "afterSave",
        value: function afterSave() {
          this.editAdvertForm.markAsPristine();
          this.editAdvertForm.markAsUntouched();

          this._router.navigate(["/myadverts"]);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) this.sub.unsubscribe();
        }
      }, {
        key: "addBreaksToAdvertDetails",
        value: function addBreaksToAdvertDetails(advertDetails) {
          var arr = advertDetails.split(/[\s][\s]/);

          for (var i = 1; i < arr.length; i += 2) {
            arr.splice(i, 0, '<br><br>');
          }

          var str = arr.join(' ');
          return str;
        }
      }]);

      return EditAdvertComponent;
    }();

    EditAdvertComponent.ɵfac = function EditAdvertComponent_Factory(t) {
      return new (t || EditAdvertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_advert_service__WEBPACK_IMPORTED_MODULE_9__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]));
    };

    EditAdvertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditAdvertComponent,
      selectors: [["app-edit-advert"]],
      decls: 55,
      vars: 35,
      consts: [[1, "container"], ["id", "login-row", 1, "row", "justify-content-center", "align-items-center"], ["id", "login-column", 1, "col-md-6"], ["id", "login-box", 1, "col-md-12"], ["id", "login-form", "novalidate", "", 1, "form", 3, "formGroup"], [1, "text-center", "my-4", "h3"], [1, "form-group"], ["type", "text", "name", "title", "id", "title", "formControlName", "title", "placeholder", "Title", "autocomplete", "off", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["formControlName", "province", 1, "custom-select", 3, "ngClass"], ["value", "", "disabled", ""], [4, "ngFor", "ngForOf"], ["class", "custom-select", "formControlName", "city", 3, "ngClass", 4, "ngIf"], ["id", "exampleFormControlTextarea1", "placeholder", "Advert Details", "rows", "3", "formControlName", "details", 1, "form-control", 3, "ngClass"], [1, "form-group-container"], ["type", "number", "name", "bedrooms", "formControlName", "bedrooms", "autocomplete", "off", "id", "bedrooms", "placeholder", "Bedrooms", "min", "0", 1, "form-control", 3, "ngClass"], ["type", "number", "name", "bathrooms", "formControlName", "bathrooms", "autocomplete", "off", "id", "bathrooms", "min", "0", "placeholder", "Bathrooms", 1, "form-control", 3, "ngClass"], ["type", "number", "name", "parkingSpaces", "formControlName", "parkingSpaces", "autocomplete", "off", "id", "parkingSpaces", "min", "0", "placeholder", "Parkings", 1, "form-control", 3, "ngClass"], ["type", "text", "name", "price", "id", "price", "formControlName", "price", "placeholder", "Price", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "submit", "name", "submit", 1, "btn", "btn-outline-success", "btn-lg", "btn-block", 3, "click"], ["routerLink", "/myadverts", 1, "btn", "btn-outline-danger", "btn-lg", "btn-block"], ["class", "alert alert-warning text-center mt-3", 4, "ngIf"], ["formControlName", "city", 1, "custom-select", 3, "ngClass"], [1, "alert", "alert-warning", "text-center", "mt-3"], [1, "mt-2"]],
      template: function EditAdvertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Choose your province");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditAdvertComponent_option_16_Template, 2, 1, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditAdvertComponent_select_20_Template, 4, 4, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditAdvertComponent_Template_button_click_50_listener() {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EditAdvertComponent_div_54_Template, 4, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editAdvertForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.id > 0 ? "Edit Advert" : "Create New Advert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.validationMessage && ctx.validationMessage.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.validationMessage && ctx.validationMessage.province));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.province, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cities.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.city, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.validationMessage && ctx.validationMessage.details));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.details, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.validationMessage && ctx.validationMessage.bedrooms));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.validationMessage.bedrooms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.validationMessage && ctx.validationMessage.bathrooms));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.validationMessage.bathrooms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.validationMessage && ctx.validationMessage.parkingSpaces));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.validationMessage.parkingSpaces);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, ctx.validationMessage && ctx.validationMessage.price));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.validationMessage.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Publish ", ctx.id > 0 ? "Changes" : "Advert", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertMessage && ctx.alertMessage.length > 0);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]],
      styles: [".form-group-container[_ngcontent-%COMP%] {\n  display: flex;\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n}\n\n@media (max-width: 430px) {\n  .form-group-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2ZXJ0cy9lZGl0LWFkdmVydC9DOlxcVXNlcnNcXE1pY2hhZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3BlcnR5LXdlYnNpdGVcXHByb3BlcnR5LWZyb250L3NyY1xcYXBwXFxhZHZlcnRzXFxlZGl0LWFkdmVydFxcZWRpdC1hZHZlcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkdmVydHMvZWRpdC1hZHZlcnQvZWRpdC1hZHZlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxzQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZHZlcnRzL2VkaXQtYWR2ZXJ0L2VkaXQtYWR2ZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbHVtbi1nYXA6IDEycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gIC5mb3JtLWdyb3VwLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi5mb3JtLWdyb3VwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbHVtbi1nYXA6IDEycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xuICAuZm9ybS1ncm91cC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditAdvertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-edit-advert",
          templateUrl: "./edit-advert.component.html",
          styleUrls: ["./edit-advert.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _app_services_advert_service__WEBPACK_IMPORTED_MODULE_9__["AdvertService"]
        }, {
          type: _app_services_location_service__WEBPACK_IMPORTED_MODULE_10__["LocationService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adverts/favourite-adverts/favourite-adverts.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/adverts/favourite-adverts/favourite-adverts.component.ts ***!
    \**************************************************************************/

  /*! exports provided: FavouriteAdvertsComponent */

  /***/
  function srcAppAdvertsFavouriteAdvertsFavouriteAdvertsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouriteAdvertsComponent", function () {
      return FavouriteAdvertsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _app_services_advert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services/advert.service */
    "./src/app/_services/advert.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_advert_card_large_advert_card_large_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/advert-card-large/advert-card-large.component */
    "./src/app/shared/advert-card-large/advert-card-large.component.ts");

    function FavouriteAdvertsComponent_div_0_div_3_h2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Finding your favourtites...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FavouriteAdvertsComponent_div_0_div_3_h2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You currently have no favourites.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/alladverts"];
    };

    function FavouriteAdvertsComponent_div_0_div_3_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Browse adverts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function FavouriteAdvertsComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavouriteAdvertsComponent_div_0_div_3_h2_1_Template, 2, 0, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavouriteAdvertsComponent_div_0_div_3_h2_2_Template, 2, 0, "h2", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FavouriteAdvertsComponent_div_0_div_3_button_3_Template, 2, 2, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
      }
    }

    function FavouriteAdvertsComponent_div_0_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-advert-card-large", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("advertIdEvent", function FavouriteAdvertsComponent_div_0_div_5_div_1_Template_app_advert_card_large_advertIdEvent_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r8.removeUnfavouritedAd($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var advert_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("advert", advert_r7);
      }
    }

    function FavouriteAdvertsComponent_div_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavouriteAdvertsComponent_div_0_div_5_div_1_Template, 2, 1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.adverts);
      }
    }

    function FavouriteAdvertsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your favourite adverts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FavouriteAdvertsComponent_div_0_div_3_Template, 4, 3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FavouriteAdvertsComponent_div_0_div_5_Template, 2, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.adverts.length == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.adverts && ctx_r0.adverts.length > 0);
      }
    }

    var FavouriteAdvertsComponent = /*#__PURE__*/function () {
      function FavouriteAdvertsComponent(authService, advertService, userService) {
        _classCallCheck(this, FavouriteAdvertsComponent);

        this.authService = authService;
        this.advertService = advertService;
        this.userService = userService;
        this.adverts = [];
        this.isLoading = true;
      }

      _createClass(FavouriteAdvertsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          var authUserId = this.authService.currentUserValue.id;
          this.userService.getUser(authUserId).subscribe(function (user) {
            _this21.advertService.getAllAdverts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (adverts) {
              var filtered = adverts.filter(function (ad) {
                if (user.favourites.includes(ad.id)) {
                  return ad;
                }
              });
              return filtered;
            })).subscribe(function (ads) {
              _this21.adverts = ads;
              _this21.isLoading = false;
            });
          });
        }
      }, {
        key: "removeUnfavouritedAd",
        value: function removeUnfavouritedAd(id) {
          var adToRemove = this.adverts.findIndex(function (advert) {
            return advert.id === id;
          });
          this.adverts.splice(adToRemove, 1);
        }
      }]);

      return FavouriteAdvertsComponent;
    }();

    FavouriteAdvertsComponent.ɵfac = function FavouriteAdvertsComponent_Factory(t) {
      return new (t || FavouriteAdvertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_advert_service__WEBPACK_IMPORTED_MODULE_3__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    FavouriteAdvertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FavouriteAdvertsComponent,
      selectors: [["app-favourite-adverts"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], ["class", "no-adverts", 4, "ngIf"], [1, "adverts-container"], ["class", "mb-3", 4, "ngIf"], [1, "no-adverts"], [4, "ngIf"], ["class", "btn btn-info", 3, "routerLink", 4, "ngIf"], [1, "btn", "btn-info", 3, "routerLink"], [1, "mb-3"], [4, "ngFor", "ngForOf"], [3, "advert", "advertIdEvent"]],
      template: function FavouriteAdvertsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FavouriteAdvertsComponent_div_0_Template, 6, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adverts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_advert_card_large_advert_card_large_component__WEBPACK_IMPORTED_MODULE_6__["AdvertCardLargeComponent"]],
      styles: [".icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  padding-right: 9px;\n  display: flex;\n  flex-direction: row;\n}\n.icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 3px;\n  font-size: 18px;\n  color: #646464;\n}\n.bd-placeholder-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: grey;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n}\n.no-adverts[_ngcontent-%COMP%] {\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.icon-cont-max[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2ZXJ0cy9mYXZvdXJpdGUtYWR2ZXJ0cy9DOlxcVXNlcnNcXE1pY2hhZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3BlcnR5LXdlYnNpdGVcXHByb3BlcnR5LWZyb250L3NyY1xcYXBwXFxhZHZlcnRzXFxmYXZvdXJpdGUtYWR2ZXJ0c1xcZmF2b3VyaXRlLWFkdmVydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkdmVydHMvZmF2b3VyaXRlLWFkdmVydHMvZmF2b3VyaXRlLWFkdmVydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ047QURDTTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDVjtBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUU7RUFDRSxZQUFBO0FDREo7QURJRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hZHZlcnRzL2Zhdm91cml0ZS1hZHZlcnRzL2Zhdm91cml0ZS1hZHZlcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmQtcGxhY2Vob2xkZXItaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLm5vLWFkdmVydHMge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaWNvbi1jb250LW1heCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9IiwiLmljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pY29ucyAuaWNvbi1jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uaWNvbnMgLmljb24tY29udGFpbmVyIGkge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM2NDY0NjQ7XG59XG5cbi5iZC1wbGFjZWhvbGRlci1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubm8tYWR2ZXJ0cyB7XG4gIGhlaWdodDogNTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uLWNvbnQtbWF4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouriteAdvertsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-favourite-adverts',
          templateUrl: './favourite-adverts.component.html',
          styleUrls: ['./favourite-adverts.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _app_services_advert_service__WEBPACK_IMPORTED_MODULE_3__["AdvertService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adverts/myadverts/index.ts":
  /*!********************************************!*\
    !*** ./src/app/adverts/myadverts/index.ts ***!
    \********************************************/

  /*! exports provided: MyAdvertsComponent */

  /***/
  function srcAppAdvertsMyadvertsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _myadverts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./myadverts.component */
    "./src/app/adverts/myadverts/myadverts.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MyAdvertsComponent", function () {
      return _myadverts_component__WEBPACK_IMPORTED_MODULE_0__["MyAdvertsComponent"];
    });
    /***/

  },

  /***/
  "./src/app/adverts/myadverts/myadverts.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/adverts/myadverts/myadverts.component.ts ***!
    \**********************************************************/

  /*! exports provided: MyAdvertsComponent */

  /***/
  function srcAppAdvertsMyadvertsMyadvertsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAdvertsComponent", function () {
      return MyAdvertsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services_advert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services/advert.service */
    "./src/app/_services/advert.service.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_advert_card_large_advert_card_large_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/advert-card-large/advert-card-large.component */
    "./src/app/shared/advert-card-large/advert-card-large.component.ts");

    function MyAdvertsComponent_div_4_h2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Finding your adverts...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MyAdvertsComponent_div_4_h2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You currently have no adverts listed.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/editadvert", 0];
    };

    function MyAdvertsComponent_div_4_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create New Advert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function MyAdvertsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyAdvertsComponent_div_4_h2_1_Template, 2, 0, "h2", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyAdvertsComponent_div_4_h2_2_Template, 2, 0, "h2", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyAdvertsComponent_div_4_button_3_Template, 2, 2, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.adverts.length == 0);
      }
    }

    function MyAdvertsComponent_div_5_app_advert_card_large_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-advert-card-large", 10);
      }

      if (rf & 2) {
        var advert_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("advert", advert_r7);
      }
    }

    function MyAdvertsComponent_div_5_button_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create New Advert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function MyAdvertsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyAdvertsComponent_div_5_app_advert_card_large_1_Template, 1, 1, "app-advert-card-large", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyAdvertsComponent_div_5_button_2_Template, 2, 2, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.adverts);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.adverts.length > 0);
      }
    }

    var MyAdvertsComponent = /*#__PURE__*/function () {
      function MyAdvertsComponent(_advertService, _authService) {
        _classCallCheck(this, MyAdvertsComponent);

        this._advertService = _advertService;
        this._authService = _authService;
        this.loading = false;
        this.adverts = [];
      }

      _createClass(MyAdvertsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.loading = true;
          this.currentUser = this._authService.currentUserValue;

          this._advertService.getUserAdverts(this.currentUser.id).subscribe(function (adverts) {
            _this22.loading = false;
            _this22.adverts = adverts;
          });
        }
      }]);

      return MyAdvertsComponent;
    }();

    MyAdvertsComponent.ɵfac = function MyAdvertsComponent_Factory(t) {
      return new (t || MyAdvertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    MyAdvertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyAdvertsComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 2,
      consts: [[1, "container"], [1, "mt-4"], ["class", "no-adverts", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "no-adverts"], [4, "ngIf"], ["class", "btn btn-info", 3, "routerLink", 4, "ngIf"], [1, "btn", "btn-info", 3, "routerLink"], [1, "mb-3"], [3, "advert", 4, "ngFor", "ngForOf"], [3, "advert"]],
      template: function MyAdvertsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Adverts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyAdvertsComponent_div_4_Template, 4, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyAdvertsComponent_div_5_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adverts.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adverts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_advert_card_large_advert_card_large_component__WEBPACK_IMPORTED_MODULE_5__["AdvertCardLargeComponent"]],
      styles: [".no-adverts[_ngcontent-%COMP%] {\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2ZXJ0cy9teWFkdmVydHMvQzpcXFVzZXJzXFxNaWNoYWVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm9wZXJ0eS13ZWJzaXRlXFxwcm9wZXJ0eS1mcm9udC9zcmNcXGFwcFxcYWR2ZXJ0c1xcbXlhZHZlcnRzXFxteWFkdmVydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkdmVydHMvbXlhZHZlcnRzL215YWR2ZXJ0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZHZlcnRzL215YWR2ZXJ0cy9teWFkdmVydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tYWR2ZXJ0cyB7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59IiwiLm5vLWFkdmVydHMge1xuICBoZWlnaHQ6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAdvertsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "myadverts.component.html",
          styleUrls: ["./myadverts.component.scss"]
        }]
      }], function () {
        return [{
          type: _app_services_advert_service__WEBPACK_IMPORTED_MODULE_1__["AdvertService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adverts/unsaved.guard.ts":
  /*!******************************************!*\
    !*** ./src/app/adverts/unsaved.guard.ts ***!
    \******************************************/

  /*! exports provided: UnsavedGuard */

  /***/
  function srcAppAdvertsUnsavedGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnsavedGuard", function () {
      return UnsavedGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UnsavedGuard = /*#__PURE__*/function () {
      function UnsavedGuard() {
        _classCallCheck(this, UnsavedGuard);
      }

      _createClass(UnsavedGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return true;
        }
      }, {
        key: "canDeactivate",
        value: function canDeactivate(component, currentRoute, currentState, nextState) {
          if (component.editAdvertForm.dirty) {
            component.unsavedChanges();
            return component.canExit$;
          }

          return true;
        }
      }]);

      return UnsavedGuard;
    }();

    UnsavedGuard.ɵfac = function UnsavedGuard_Factory(t) {
      return new (t || UnsavedGuard)();
    };

    UnsavedGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UnsavedGuard,
      factory: UnsavedGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnsavedGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _adverts_myadverts_myadverts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./adverts/myadverts/myadverts.component */
    "./src/app/adverts/myadverts/myadverts.component.ts");
    /* harmony import */


    var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication/login/login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./_helpers */
    "./src/app/_helpers/index.ts");
    /* harmony import */


    var _adverts_all_adverts_all_adverts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./adverts/all-adverts/all-adverts.component */
    "./src/app/adverts/all-adverts/all-adverts.component.ts");
    /* harmony import */


    var _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./authentication/registration/registration.component */
    "./src/app/authentication/registration/registration.component.ts");
    /* harmony import */


    var _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./authentication/auth.guard */
    "./src/app/authentication/auth.guard.ts");
    /* harmony import */


    var _adverts_edit_advert_edit_advert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./adverts/edit-advert/edit-advert.component */
    "./src/app/adverts/edit-advert/edit-advert.component.ts");
    /* harmony import */


    var _adverts_unsaved_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./adverts/unsaved.guard */
    "./src/app/adverts/unsaved.guard.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _adverts_advert_detail_advert_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./adverts/advert-detail/advert-detail.component */
    "./src/app/adverts/advert-detail/advert-detail.component.ts");
    /* harmony import */


    var _accounts_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./accounts/my-account/my-account.component */
    "./src/app/accounts/my-account/my-account.component.ts");
    /* harmony import */


    var _adverts_favourite_adverts_favourite_adverts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./adverts/favourite-adverts/favourite-adverts.component */
    "./src/app/adverts/favourite-adverts/favourite-adverts.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
    }, {
      path: 'login',
      component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
      canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
    }, {
      path: 'registration',
      component: _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
      canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'myadverts',
      component: _adverts_myadverts_myadverts_component__WEBPACK_IMPORTED_MODULE_2__["MyAdvertsComponent"],
      canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["NotAuthGuard"]]
    }, {
      path: 'editadvert/:id',
      component: _adverts_edit_advert_edit_advert_component__WEBPACK_IMPORTED_MODULE_8__["EditAdvertComponent"],
      canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["NotAuthGuard"]],
      canDeactivate: [_adverts_unsaved_guard__WEBPACK_IMPORTED_MODULE_9__["UnsavedGuard"]]
    }, {
      path: 'alladverts',
      component: _adverts_all_adverts_all_adverts_component__WEBPACK_IMPORTED_MODULE_5__["AllAdvertsComponent"]
    }, {
      path: 'advertdetail/:id',
      component: _adverts_advert_detail_advert_detail_component__WEBPACK_IMPORTED_MODULE_11__["AdvertDetailComponent"]
    }, {
      path: 'myaccount',
      component: _accounts_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_12__["MyAccountComponent"],
      canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["NotAuthGuard"]]
    }, {
      path: 'favourites',
      component: _adverts_favourite_adverts_favourite_adverts_component__WEBPACK_IMPORTED_MODULE_13__["FavouriteAdvertsComponent"],
      canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_4__["NotAuthGuard"]]
    }, // otherwise redirect to home
    {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          var url = this.router.url;

          if (url === "/" || url === "/home") {
            return;
          } else {
            this["class"] = "mt-auto";
            return;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app"]],
      decls: 3,
      vars: 1,
      consts: [[3, "ngClass"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx["class"]);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app',
          templateUrl: 'app.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./_helpers */
    "./src/app/_helpers/index.ts");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var _mockServices_my_in_memory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./_mockServices/my-in-memory.service */
    "./src/app/_mockServices/my-in-memory.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./authentication/authentication.module */
    "./src/app/authentication/authentication.module.ts");
    /* harmony import */


    var _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./adverts/adverts.module */
    "./src/app/adverts/adverts.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _accounts_accounts_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./accounts/accounts.module */
    "./src/app/accounts/accounts.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/ng-material/ng-material.module */
    "./src/app/shared/ng-material/ng-material.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js"); // used to create fake backend


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"],
        multi: true
      }, // // provider used to create fake backend
      _helpers__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]],
      imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_11__["AuthenticationModule"], _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_12__["AdvertsModule"], _accounts_accounts_module__WEBPACK_IMPORTED_MODULE_14__["AccountsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_mockServices_my_in_memory_service__WEBPACK_IMPORTED_MODULE_6__["MyInMemoryService"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _shared_ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_16__["NgMaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_11__["AuthenticationModule"], _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_12__["AdvertsModule"], _accounts_accounts_module__WEBPACK_IMPORTED_MODULE_14__["AccountsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _shared_ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_16__["NgMaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_11__["AuthenticationModule"], _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_12__["AdvertsModule"], _accounts_accounts_module__WEBPACK_IMPORTED_MODULE_14__["AccountsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_mockServices_my_in_memory_service__WEBPACK_IMPORTED_MODULE_6__["MyInMemoryService"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _shared_ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_16__["NgMaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"],
            multi: true
          }, // // provider used to create fake backend
          _helpers__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/auth.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/authentication/auth.guard.ts ***!
    \**********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthenticationAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(_authService, _router) {
        _classCallCheck(this, AuthGuard);

        this._authService = _authService;
        this._router = _router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var currentUser = this._authService.currentUserValue;

          if (currentUser) {
            this._router.navigate(["/myadverts"]);

            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/authentication.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/authentication.module.ts ***!
    \*********************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login */
    "./src/app/authentication/login/index.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/authentication/registration/registration.component.ts");

    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthenticationModule
    });
    AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthenticationModule_Factory(t) {
        return new (t || AuthenticationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, {
        declarations: [_login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/login/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/authentication/login/index.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthenticationLoginIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"];
    });
    /***/

  },

  /***/
  "./src/app/authentication/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_helpers/customValidators */
    "./src/app/_helpers/customValidators.ts");
    /* harmony import */


    var _app_shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/utils */
    "./src/app/shared/utils.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
      }
    }

    function LoginComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "fa-eye-slash": a0,
        "fa-eye": a1
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_formBuilder, _route, _router, _authenticationService) {
        _classCallCheck(this, LoginComponent);

        this._formBuilder = _formBuilder;
        this._route = _route;
        this._router = _router;
        this._authenticationService = _authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = "";
        this.message = {};
        this.fieldTextType = false; // redirect to home if already logged in

        if (this._authenticationService.currentUserValue) {
          this._router.navigate(["/"]);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.loginForm = this._formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].noSpaceValidator]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this._route.snapshot.queryParams["returnUrl"] || "/";
          this.loginForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(600)).subscribe(function (value) {
            _this23.message = Object(_app_shared_utils__WEBPACK_IMPORTED_MODULE_4__["invalidInputs"])(_this23.loginForm);
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this24 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;

          this._authenticationService.login(this.f.email.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            _this24._router.navigate(["myadverts"]);
          }, function (error) {
            _this24.error = error;
            setTimeout(function () {
              _this24.error = '';
            }, 1800);
            _this24.loading = false;
          });
        }
      }, {
        key: "toggleFieldTextType",
        value: function toggleFieldTextType() {
          this.fieldTextType = !this.fieldTextType;
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["ng-component"]],
      decls: 28,
      vars: 17,
      consts: [[1, "col-md-6", "offset-md-3", "mt-5"], [1, "text-center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "formControlName", "email", "placeholder", "Email", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [1, "input-group"], ["formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "type", "ngClass"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 3, "ngClass", "click"], [1, "btn", "btn-secondary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "mt-3"], ["routerLink", "/registration", 1, "text-dark"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "alert", "alert-danger", "mt-3"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_17_listener() {
            return ctx.toggleFieldTextType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_span_22_Template, 1, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Register Instead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.message && ctx.message.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.message && ctx.message.password));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c1, !ctx.fieldTextType, ctx.fieldTextType));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vQzpcXFVzZXJzXFxNaWNoYWVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm9wZXJ0eS13ZWJzaXRlXFxwcm9wZXJ0eS1mcm9udC9zcmNcXGFwcFxcYXV0aGVudGljYXRpb25cXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59IiwiLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "login.component.html",
          styleUrls: ["./login.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/not.auth.guard.ts":
  /*!**************************************************!*\
    !*** ./src/app/authentication/not.auth.guard.ts ***!
    \**************************************************/

  /*! exports provided: NotAuthGuard */

  /***/
  function srcAppAuthenticationNotAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function () {
      return NotAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var NotAuthGuard = /*#__PURE__*/function () {
      function NotAuthGuard(router, authenticationService) {
        _classCallCheck(this, NotAuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(NotAuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser) {
            // logged in so return true
            return true;
          }

          if (route.routeConfig.path === 'editadvert/:id' || route.routeConfig.path === 'editadvert') {
            this.router.navigate(["/registration"]);
            return false;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(["/login"]);
          return false;
        }
      }]);

      return NotAuthGuard;
    }();

    NotAuthGuard.ɵfac = function NotAuthGuard_Factory(t) {
      return new (t || NotAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
    };

    NotAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotAuthGuard,
      factory: NotAuthGuard.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/registration/registration.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/authentication/registration/registration.component.ts ***!
    \***********************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppAuthenticationRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_helpers/customValidators */
    "./src/app/_helpers/customValidators.ts");
    /* harmony import */


    var _app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_models/user */
    "./src/app/_models/user.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/utils */
    "./src/app/shared/utils.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegistrationComponent_span_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 24);
      }
    }

    function RegistrationComponent_div_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please ensure all fields are completed correctly. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_div_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your password needs to be between 8 and 100 characters in length.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Your password cannot contain spaces.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your password must contain at least one number.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your password must contain at leat one uppercase character.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "fa-eye-slash": a0,
        "fa-eye": a1
      };
    };

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(_formBuilder, _userService, _router, _authenticationService) {
        _classCallCheck(this, RegistrationComponent);

        this._formBuilder = _formBuilder;
        this._userService = _userService;
        this._router = _router;
        this._authenticationService = _authenticationService;
        this.message = {};
        this.invalidSubmit = false;
        this.loading = false;
        this.error = "";
        this.passRequirements = false;
        this.fieldTextType = false;
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.registrationForm = this._formBuilder.group({
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].multipleSpaceValidator, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].noSpecialChars, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].noNumbers]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].multipleSpaceValidator, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].noSpecialChars, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].noNumbers]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].noSpaceValidator]],
            contactNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].onlyNumbers]],
            passwords: this._formBuilder.group({
              password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].noSpaceValidator, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].passwordNumber, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].passwordUpperCase]],
              confirmPass: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }, {
              validator: _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].passwordCompare
            })
          });
          this.sub = this.registrationForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(600)).subscribe(function (value) {
            return _this25.message = Object(_app_shared_utils__WEBPACK_IMPORTED_MODULE_5__["invalidInputs"])(_this25.registrationForm);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this26 = this;

          this.loading = true;

          if (!this.registrationForm.valid) {
            this.invalidSubmit = true;
            setTimeout(function () {
              _this26.invalidSubmit = false;
            }, 1800);
            this.loading = false;
            return;
          }

          var user = new _app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"](this.registrationForm.get("firstName").value.trim(), this.registrationForm.get("lastName").value.trim(), this.registrationForm.get("email").value.trim(), this.registrationForm.get("contactNumber").value.trim(), this.registrationForm.get("passwords.password").value.trim(), this.registrationForm.get("passwords.confirmPass").value.trim());
          user.favourites = [];

          this._userService.saveUser(user).subscribe();

          setTimeout(function () {
            _this26._authenticationService.login(user.email, user.password).subscribe(function (data) {
              _this26._router.navigate(["myadverts"]);

              _this26.loading = false;
            }, function (error) {
              _this26.error = error;
              _this26.loading = false;
            });
          }, 3000);
        }
      }, {
        key: "showPassRequirements",
        value: function showPassRequirements() {
          this.passRequirements = !this.passRequirements;
        }
      }, {
        key: "toggleFieldTextType",
        value: function toggleFieldTextType() {
          this.fieldTextType = !this.fieldTextType;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) this.sub.unsubscribe();
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["ng-component"]],
      decls: 58,
      vars: 40,
      consts: [[1, "col-md-6", "offset-md-3", "mt-5"], [1, "text-center"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "name", "firstName", "formControlName", "firstName", "placeholder", "First Name", "autocomplete", "off", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["type", "text", "name", "lastName", "formControlName", "lastName", "placeholder", "Last Name", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "email", "name", "email", "formControlName", "email", "placeholder", "Email", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["type", "text", "name", "contactNumber", "formControlName", "contactNumber", "placeholder", "Contact Number", "autocomplete", "off", 1, "form-control", 3, "ngClass"], ["formGroupName", "passwords"], [1, "input-group"], ["name", "password", "formControlName", "password", "placeholder", "Password", "autocomplete", "off", 1, "form-control", 3, "type", "ngClass"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 3, "ngClass", "click"], [1, "form-text", "text-muted", 3, "click"], ["name", "confirmPass", "formControlName", "confirmPass", "placeholder", "Confirm Password", "autocomplete", "off", 1, "form-control", 3, "type", "ngClass"], ["type", "submit", "name", "submit", 1, "btn", "btn-secondary"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "mt-3"], ["routerLink", "/login", 1, "mt-3", "text-dark"], ["class", "alert alert-info mt-4", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "alert", "alert-danger", "mt-3"], [1, "alert", "alert-info", "mt-4"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_i_click_33_listener() {
            return ctx.toggleFieldTextType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_a_click_37_listener() {
            return ctx.showPassRequirements();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_i_click_46_listener() {
            return ctx.toggleFieldTextType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, RegistrationComponent_span_51_Template, 1, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RegistrationComponent_div_53_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Login Instead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, RegistrationComponent_div_57_Template, 14, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.message && ctx.message.firstName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message.firstName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.message && ctx.message.lastName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.message && ctx.message.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.message && ctx.message.contactNumber));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message.contactNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.message && ctx.message.password));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c1, !ctx.fieldTextType, ctx.fieldTextType));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message.password, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.passRequirements ? "Hide" : "View", " password requirements. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, ctx.message && ctx.message.passwords));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](37, _c1, !ctx.fieldTextType, ctx.fieldTextType));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message.passwords, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Registering" : "Register", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passRequirements);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
      styles: [".btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0cmF0aW9uL0M6XFxVc2Vyc1xcTWljaGFlbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvcGVydHktd2Vic2l0ZVxccHJvcGVydHktZnJvbnQvc3JjXFxhcHBcXGF1dGhlbnRpY2F0aW9uXFxyZWdpc3RyYXRpb25cXHJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIuYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./registration.component.html",
          styleUrls: ["./registration.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 0,
      consts: [[1, "bg-dark", "text-white", "py-2", "text-center"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " All Rights Reserved. Copyright. 2020. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/mobile-nav/mobile-nav.component */
    "./src/app/shared/mobile-nav/mobile-nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function HeaderComponent_nav_0_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Ads");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_nav_0_a_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/editadvert", 0];
    };

    function HeaderComponent_nav_0_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Ad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function HeaderComponent_nav_0_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Favourites");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_nav_0_a_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_nav_0_a_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_nav_0_a_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_nav_0_a_15_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_nav_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_nav_0_Template_mat_icon_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.openMobileNavModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "view_headline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Homes for sale");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_nav_0_a_9_Template, 2, 0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_nav_0_a_10_Template, 2, 0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_nav_0_a_11_Template, 2, 2, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_nav_0_a_12_Template, 2, 0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_nav_0_a_13_Template, 2, 0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_nav_0_a_14_Template, 2, 0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_nav_0_a_15_Template, 2, 0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.currentUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.currentUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(_router, _authenticationService, router, matDialog) {
        var _this27 = this;

        _classCallCheck(this, HeaderComponent);

        this._router = _router;
        this._authenticationService = _authenticationService;
        this.router = router;
        this.matDialog = matDialog;

        this._authenticationService.currentUser.subscribe(function (x) {
          return _this27.currentUser = x;
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          if (this.router.url == "/" || this.router.url == "/home") {
            this.home = true;
          } else {
            this.home = false;
          }
        }
      }, {
        key: "openMobileNavModal",
        value: function openMobileNavModal() {
          this.matDialog.open(_app_shared_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_1__["MobileNavComponent"], {
            data: this.currentUser
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this._authenticationService.logout();

          this._router.navigate(["/login"]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 1,
      vars: 1,
      consts: [["class", "navbar navbar-expand navbar-light bg-light text-primary", 4, "ngIf"], [1, "navbar", "navbar-expand", "navbar-light", "bg-light", "text-primary"], ["src", "../../assets/logo-small.png", "routerLink", "/home", "alt", ""], [1, "hamburger", 3, "click"], [1, "navbar-nav"], ["routerLink", "/home", 1, "nav-item", "nav-link", "text-dark"], ["routerLink", "/alladverts", 1, "nav-item", "nav-link", "text-dark"], ["class", "nav-item nav-link text-dark", "routerLink", "/myadverts", 4, "ngIf"], ["class", "nav-item nav-link text-dark", "routerLink", "/myaccount", 4, "ngIf"], ["class", "nav-item nav-link text-dark", 3, "routerLink", 4, "ngIf"], ["class", "nav-item nav-link text-dark", "routerLink", "/favourites", 4, "ngIf"], ["class", "nav-item nav-link text-dark", "routerLink", "/login", 4, "ngIf"], ["class", "nav-item nav-link text-dark", "routerLink", "/registration", 4, "ngIf"], ["class", "nav-item nav-link text-dark", 3, "click", 4, "ngIf"], ["routerLink", "/myadverts", 1, "nav-item", "nav-link", "text-dark"], ["routerLink", "/myaccount", 1, "nav-item", "nav-link", "text-dark"], [1, "nav-item", "nav-link", "text-dark", 3, "routerLink"], ["routerLink", "/favourites", 1, "nav-item", "nav-link", "text-dark"], ["routerLink", "/login", 1, "nav-item", "nav-link", "text-dark"], ["routerLink", "/registration", 1, "nav-item", "nav-link", "text-dark"], [1, "nav-item", "nav-link", "text-dark", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_nav_0_Template, 16, 7, "nav", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.home);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["img[_ngcontent-%COMP%] {\n  height: 3.5rem;\n}\n\na[_ngcontent-%COMP%]:hover {\n  background: #ebebeb;\n}\n\nimg[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .navbar-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .hamburger[_ngcontent-%COMP%] {\n    display: block;\n    color: black;\n  }\n\n  .hamburger[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcTWljaGFlbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvcGVydHktd2Vic2l0ZVxccHJvcGVydHktZnJvbnQvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksYUFBQTtFQ0NOOztFREVFO0lBQ0ksY0FBQTtJQUNBLFlBQUE7RUNDTjs7RURFRTtJQUNJLGVBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBoZWlnaHQ6IDMuNXJlbTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM1LCAyMzUsIDIzNSk7XHJcbn1cclxuXHJcbmltZzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubmF2YmFyLW5hdiB7IFxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhhbWJ1cmdlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5oYW1idXJnZXI6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufSIsImltZyB7XG4gIGhlaWdodDogMy41cmVtO1xufVxuXG5hOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cblxuaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGFtYnVyZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5uYXZiYXItbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmhhbWJ1cmdlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmhhbWJ1cmdlcjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-header",
          templateUrl: "./header.component.html",
          styleUrls: ["./header.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_shared_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/mobile-nav/mobile-nav.component */
    "./src/app/shared/mobile-nav/mobile-nav.component.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/search/search.component */
    "./src/app/shared/search/search.component.ts");

    function HomeComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Ads");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/editadvert", 0];
    };

    function HomeComponent_a_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Ad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function HomeComponent_a_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Favourites");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_a_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_a_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_a_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_a_17_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(authService, router, matDialog) {
        var _this28 = this;

        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this.router = router;
        this.matDialog = matDialog;
        this.authService.currentUser.subscribe(function (x) {
          return _this28.currentUser = x;
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(["/login"]);
        }
      }, {
        key: "openMobileNavModal",
        value: function openMobileNavModal() {
          this.matDialog.open(_app_shared_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_1__["MobileNavComponent"], {
            data: this.currentUser
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 22,
      vars: 7,
      consts: [[1, "hero-container"], [1, "overlay"], [1, "navbar", "navbar-expand", "navbar-light"], ["src", "../../assets/logo-small.png", "routerLink", "/home", "alt", ""], [1, "hamburger", 3, "click"], [1, "navbar-nav"], ["routerLink", "/home", 1, "nav-item", "nav-link"], ["routerLink", "/alladverts", 1, "nav-item", "nav-link"], ["class", "nav-item nav-link", "routerLink", "/myadverts", 4, "ngIf"], ["class", "nav-item nav-link", "routerLink", "/myaccount", 4, "ngIf"], ["class", "nav-item nav-link", 3, "routerLink", 4, "ngIf"], ["class", "nav-item nav-link", "routerLink", "/favourites", 4, "ngIf"], ["class", "nav-item nav-link", "routerLink", "/login", 4, "ngIf"], ["class", "nav-item nav-link", "routerLink", "/registration", 4, "ngIf"], ["class", "nav-item nav-link", 3, "click", 4, "ngIf"], [1, "search"], ["routerLink", "/myadverts", 1, "nav-item", "nav-link"], ["routerLink", "/myaccount", 1, "nav-item", "nav-link"], [1, "nav-item", "nav-link", 3, "routerLink"], ["routerLink", "/favourites", 1, "nav-item", "nav-link"], ["routerLink", "/login", 1, "nav-item", "nav-link"], ["routerLink", "/registration", 1, "nav-item", "nav-link"], [1, "nav-item", "nav-link", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_mat_icon_click_4_listener() {
            return ctx.openMobileNavModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "view_headline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Homes for sale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_a_11_Template, 2, 0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_a_12_Template, 2, 0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_a_13_Template, 2, 2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_a_14_Template, 2, 0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_a_15_Template, 2, 0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_a_16_Template, 2, 0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_a_17_Template, 2, 0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Find your dream mountain home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  padding: 3rem 2rem 0 2rem;\n  font-size: 2rem;\n}\n\n.hero-container[_ngcontent-%COMP%] {\n  background: rgba(231, 231, 231, 0.459) url('hero-image.jpg');\n  height: 96.1vh;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.search[_ngcontent-%COMP%] {\n  width: 60vw;\n  margin: 0 auto;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 100%;\n  width: 100%;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 3.5rem;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0e0e0e;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #dddddd;\n}\n\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .navbar-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .hamburger[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hamburger[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .search[_ngcontent-%COMP%] {\n    width: 75vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXE1pY2hhZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3BlcnR5LXdlYnNpdGVcXHByb3BlcnR5LWZyb250L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLGVBQUE7QUNBSjs7QURHQTtFQUNJLDREQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FESUk7RUFDSSxjQUFBO0FDRFI7O0FESUk7RUFDSSxjQUFBO0FDRlI7O0FETUE7RUFDSSxhQUFBO0FDSEo7O0FETUE7RUFDSTtJQUNJLGFBQUE7RUNITjs7RURNRTtJQUNJLGNBQUE7RUNITjs7RURNRTtJQUNJLGVBQUE7RUNITjs7RURNRTtJQUNJLFdBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogM3JlbSAycmVtIDAgMnJlbTtcclxuXHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5oZXJvLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgMjMxLCAyMzEsIDAuNDU5KSB1cmwoLi4vLi4vYXNzZXRzL2hlcm8taW1hZ2UuanBnKTtcclxuICAgIGhlaWdodDogOTYuMXZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMy41cmVtO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogcmdiKDE0LCAxNCwgMTQpO1xyXG4gICAgfVxyXG5cclxuICAgIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oYW1idXJnZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubmF2YmFyLW5hdiB7IFxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhhbWJ1cmdlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmhhbWJ1cmdlcjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2ggeyBcclxuICAgICAgICB3aWR0aDogNzV2dztcclxuICAgIH1cclxufSIsImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNyZW0gMnJlbSAwIDJyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmhlcm8tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDIzMSwgMjMxLCAwLjQ1OSkgdXJsKC4uLy4uL2Fzc2V0cy9oZXJvLWltYWdlLmpwZyk7XG4gIGhlaWdodDogOTYuMXZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5zZWFyY2gge1xuICB3aWR0aDogNjB2dztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAzLjVyZW07XG59XG5cbi5uYXZiYXItbmF2IGEge1xuICBjb2xvcjogIzBlMGUwZTtcbn1cbi5uYXZiYXItbmF2IGE6aG92ZXIge1xuICBjb2xvcjogI2RkZGRkZDtcbn1cblxuLmhhbWJ1cmdlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmF2YmFyLW5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5oYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmhhbWJ1cmdlcjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnNlYXJjaCB7XG4gICAgd2lkdGg6IDc1dnc7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/advert-actions/advert-actions.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/advert-actions/advert-actions.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AdvertActionsComponent */

  /***/
  function srcAppSharedAdvertActionsAdvertActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvertActionsComponent", function () {
      return AdvertActionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_adverts_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/adverts/dialogs/delete-dialog/delete-dialog.component */
    "./src/app/adverts/dialogs/delete-dialog/delete-dialog.component.ts");
    /* harmony import */


    var _app_services_advert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services/advert.service */
    "./src/app/_services/advert.service.ts");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AdvertActionsComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertActionsComponent_a_7_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.changeStatus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hide Advert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdvertActionsComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertActionsComponent_a_8_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.changeStatus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unhide Advert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "badge-success": a0,
        "badge-warning": a1
      };
    };

    var _c1 = function _c1(a1) {
      return ["/editadvert", a1];
    };

    var AdvertActionsComponent = /*#__PURE__*/function () {
      function AdvertActionsComponent(advertService, authService, matDialog) {
        _classCallCheck(this, AdvertActionsComponent);

        this.advertService = advertService;
        this.authService = authService;
        this.matDialog = matDialog;
      }

      _createClass(AdvertActionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentUser = this.authService.currentUserValue;
        }
      }, {
        key: "changeStatus",
        value: function changeStatus() {
          this.advert.status = this.advert.status == "Live" ? "Hidden" : "Live";
          var updatedAdvert = Object.assign({}, this.advert);
          this.advertService.updateAdvert(updatedAdvert).subscribe();
        }
      }, {
        key: "openDeleteDialog",
        value: function openDeleteDialog() {
          this.matDialog.open(_app_adverts_dialogs_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DeleteDialogComponent"], {
            data: this.advert
          });
        }
      }]);

      return AdvertActionsComponent;
    }();

    AdvertActionsComponent.ɵfac = function AdvertActionsComponent_Factory(t) {
      return new (t || AdvertActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    AdvertActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdvertActionsComponent,
      selectors: [["app-advert-actions"]],
      inputs: {
        advert: "advert"
      },
      decls: 14,
      vars: 10,
      consts: [[1, "container"], [1, "badge", "py-2", "px-3", 3, "ngClass"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-info", "btn-sm", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["class", "dropdown-item small", 3, "click", 4, "ngIf"], [1, "dropdown-divider"], [1, "dropdown-item", "small", 3, "routerLink"], [1, "dropdown-item", "small", 3, "click"]],
      template: function AdvertActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdvertActionsComponent_a_7_Template, 2, 0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdvertActionsComponent_a_8_Template, 2, 0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit Advert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertActionsComponent_Template_a_click_12_listener() {
            return ctx.openDeleteDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete Advert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.advert.status == "Live", ctx.advert.status == "Hidden"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.advert.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.advert.status == "Live");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.advert.status == "Hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.advert.id));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FkdmVydC1hY3Rpb25zL0M6XFxVc2Vyc1xcTWljaGFlbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvcGVydHktd2Vic2l0ZVxccHJvcGVydHktZnJvbnQvc3JjXFxhcHBcXHNoYXJlZFxcYWR2ZXJ0LWFjdGlvbnNcXGFkdmVydC1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvYWR2ZXJ0LWFjdGlvbnMvYWR2ZXJ0LWFjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FkdmVydC1hY3Rpb25zL2FkdmVydC1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-advert-actions',
          templateUrl: './advert-actions.component.html',
          styleUrls: ['./advert-actions.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services_advert_service__WEBPACK_IMPORTED_MODULE_2__["AdvertService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, {
        advert: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/advert-card-large/advert-card-large.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/advert-card-large/advert-card-large.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AdvertCardLargeComponent */

  /***/
  function srcAppSharedAdvertCardLargeAdvertCardLargeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvertCardLargeComponent", function () {
      return AdvertCardLargeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _advert_actions_advert_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../advert-actions/advert-actions.component */
    "./src/app/shared/advert-actions/advert-actions.component.ts");
    /* harmony import */


    var _app_helpers_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/_helpers/truncate-text.pipe */
    "./src/app/_helpers/truncate-text.pipe.ts");

    function AdvertCardLargeComponent_mat_icon_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertCardLargeComponent_mat_icon_32_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.toggleFavourite(ctx_r2.advert.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.isFavourite ? "favorite" : "favorite_border");
      }
    }

    function AdvertCardLargeComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-advert-actions", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("advert", ctx_r1.advert);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/advertdetail", a1];
    };

    var AdvertCardLargeComponent = /*#__PURE__*/function () {
      function AdvertCardLargeComponent(authService, userService, matSnackBar, router) {
        _classCallCheck(this, AdvertCardLargeComponent);

        this.authService = authService;
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.advertIdEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = true;
      }

      _createClass(AdvertCardLargeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          var _a;

          var authUserId = (_a = this.authService.currentUserValue) === null || _a === void 0 ? void 0 : _a.id;

          if (!authUserId) {
            return;
          }

          this.userService.getUser(authUserId).subscribe(function (user) {
            _this29.authUser = user;
            _this29.authUser.favourites.includes(_this29.advert.id) ? _this29.isFavourite = true : _this29.isFavourite = false;
            _this29.router.url === '/myadverts' ? _this29.displayActions = true : _this29.displayActions = false;
            _this29.isLoading = false;
          });
        }
      }, {
        key: "toggleFavourite",
        value: function toggleFavourite(id) {
          var _this30 = this;

          var authUserId = this.authService.currentUserValue.id;
          this.userService.getUser(authUserId).subscribe(function (user) {
            if (!_this30.isFavourite) {
              user.favourites.push(_this30.advert.id);
              _this30.isFavourite = true;
            } else {
              var newFavourites = user.favourites.filter(function (element) {
                return element !== _this30.advert.id;
              });
              _this30.isFavourite = false;
              user.favourites = newFavourites;

              _this30.advertIdEvent.emit(id);
            }

            _this30.userService.updateUser(user).subscribe();

            _this30.matSnackBar.open("".concat(_this30.isFavourite ? "Added to" : "Removed from", " your favourites"), "Close", {
              duration: 2000
            });
          });
        }
      }]);

      return AdvertCardLargeComponent;
    }();

    AdvertCardLargeComponent.ɵfac = function AdvertCardLargeComponent_Factory(t) {
      return new (t || AdvertCardLargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AdvertCardLargeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdvertCardLargeComponent,
      selectors: [["app-advert-card-large"]],
      inputs: {
        advert: "advert"
      },
      outputs: {
        advertIdEvent: "advertIdEvent"
      },
      decls: 34,
      vars: 25,
      consts: [[1, "mb-3"], [1, "card", "my-4", "box-link"], [1, "row", "no-gutters"], [1, "col-md-4"], [1, "bd-placeholder-img"], [3, "routerLink"], ["alt", "", 3, "src"], [3, "ngClass"], [1, "card-body"], [1, "card-title", "h4"], [1, "card-text", "h5", 3, "routerLink"], [1, "card-text", 3, "innerHtml"], [1, "icon-cont-max"], [1, "icons"], [1, "icon-container"], [1, "fa", "fa-solid", "fa-bed"], [1, "fa", "fa-solid", "fa-toilet"], [1, "fa", "fa-solid", "fa-car"], [3, "click", 4, "ngIf"], ["class", "col-md-2", 4, "ngIf"], [3, "click"], [1, "col-md-2"], [3, "advert"]],
      template: function AdvertCardLargeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "truncateText");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AdvertCardLargeComponent_mat_icon_32_Template, 2, 1, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AdvertCardLargeComponent_div_33_Template, 2, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.advert.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.advert.headlineImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.displayActions ? "col-md-6" : "col-md-8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 14, ctx.advert.price, "ZAR", "symbol-narrow"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.advert.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.advert.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 18, ctx.advert.details, 275), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.advert.province, ", ", ctx.advert.city, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.advert.bedrooms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.advert.bathrooms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.advert.parkingSpaces);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayActions);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _advert_actions_advert_actions_component__WEBPACK_IMPORTED_MODULE_6__["AdvertActionsComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"], _app_helpers_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncateTextPipe"]],
      styles: [".icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  padding-right: 9px;\n  display: flex;\n  flex-direction: row;\n}\n.icons[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 3px;\n  font-size: 18px;\n  color: #646464;\n}\n.bd-placeholder-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: grey;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n}\n.box-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 1px 7px 4px #ccc;\n}\n.no-adverts[_ngcontent-%COMP%] {\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.icon-cont-max[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\nmat-icon[_ngcontent-%COMP%] {\n  color: red;\n}\nmat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FkdmVydC1jYXJkLWxhcmdlL0M6XFxVc2Vyc1xcTWljaGFlbFxcRG9jdW1lbnRzXFxQcm9qZWN0c1xccHJvcGVydHktd2Vic2l0ZVxccHJvcGVydHktZnJvbnQvc3JjXFxhcHBcXHNoYXJlZFxcYWR2ZXJ0LWNhcmQtbGFyZ2VcXGFkdmVydC1jYXJkLWxhcmdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvYWR2ZXJ0LWNhcmQtbGFyZ2UvYWR2ZXJ0LWNhcmQtbGFyZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURDSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ047QURDTTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDVjtBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUU7RUFDRSxZQUFBO0FDREo7QURJRTtFQUNFLGdDQUFBO0FDREo7QURJRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDREo7QURJRTtFQUNFLFVBQUE7QUNESjtBRElFO0VBQ0UsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FkdmVydC1jYXJkLWxhcmdlL2FkdmVydC1jYXJkLWxhcmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmQtcGxhY2Vob2xkZXItaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuYm94LWxpbms6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggNHB4ICNjY2M7XHJcbiAgfVxyXG5cclxuICAubm8tYWR2ZXJ0cyB7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pY29uLWNvbnQtbWF4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIG1hdC1pY29uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9IiwiLmljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pY29ucyAuaWNvbi1jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uaWNvbnMgLmljb24tY29udGFpbmVyIGkge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM2NDY0NjQ7XG59XG5cbi5iZC1wbGFjZWhvbGRlci1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYm94LWxpbms6aG92ZXIge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDdweCA0cHggI2NjYztcbn1cblxuLm5vLWFkdmVydHMge1xuICBoZWlnaHQ6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbi1jb250LW1heCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxubWF0LWljb24ge1xuICBjb2xvcjogcmVkO1xufVxuXG5tYXQtaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertCardLargeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-advert-card-large',
          templateUrl: './advert-card-large.component.html',
          styleUrls: ['./advert-card-large.component.scss']
        }]
      }], function () {
        return [{
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        advert: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        advertIdEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/contact-form/contact-form.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/contact-form/contact-form.component.ts ***!
    \***************************************************************/

  /*! exports provided: ContactFormComponent */

  /***/
  function srcAppSharedContactFormContactFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function () {
      return ContactFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_helpers/customValidators */
    "./src/app/_helpers/customValidators.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/utils */
    "./src/app/shared/utils.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var ContactFormComponent = /*#__PURE__*/function () {
      function ContactFormComponent(formBuilder, matSnackBar) {
        _classCallCheck(this, ContactFormComponent);

        this.formBuilder = formBuilder;
        this.matSnackBar = matSnackBar;
        this.closeDialogEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.validationMessage = {};
      }

      _createClass(ContactFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.contactSellerForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            contactNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _app_helpers_customValidators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].onlyNumbers]],
            message: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
          this.contactSellerForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(function (x) {
            _this31.validationMessage = Object(_app_shared_utils__WEBPACK_IMPORTED_MODULE_4__["invalidInputs"])(_this31.contactSellerForm);
          });
        }
      }, {
        key: "contactClick",
        value: function contactClick() {
          if (!this.contactSellerForm.valid) {
            this.contactSellerForm.markAllAsTouched();
            this.validationMessage = Object(_app_shared_utils__WEBPACK_IMPORTED_MODULE_4__["invalidInputs"])(this.contactSellerForm);
            return;
          }

          if (this.contactSellerForm.valid) {
            this.matSnackBar.open("Your message has been sent", 'Close', {
              duration: 2000
            });
            this.closeDialogEvent.emit(true);
            this.contactSellerForm.reset();
            return;
          }
        }
      }]);

      return ContactFormComponent;
    }();

    ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) {
      return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactFormComponent,
      selectors: [["app-contact-form"]],
      outputs: {
        closeDialogEvent: "closeDialogEvent"
      },
      decls: 23,
      vars: 17,
      consts: [[1, "contact-card"], [1, ""], ["action", "", 3, "formGroup"], [1, "form-group"], ["formControlName", "name", "placeholder", "Your name", "type", "text", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["formControlName", "email", "placeholder", "Your email", "type", "text", 1, "form-control", 3, "ngClass"], ["formControlName", "contactNumber", "placeholder", "Your cell number", "type", "text", 1, "form-control", 3, "ngClass"], ["formControlName", "message", "placeholder", "Your message", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-outline-dark", "btn-sm", "btn-block", 3, "click"]],
      template: function ContactFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Seller");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactFormComponent_Template_button_click_21_listener() {
            return ctx.contactClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactSellerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.validationMessage && ctx.validationMessage.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.validationMessage && ctx.validationMessage.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.validationMessage && ctx.validationMessage.contactNumber));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.contactNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.validationMessage && ctx.validationMessage.message));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.message, " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      styles: [".contact-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  font-size: 1.2rem;\n  text-align: center;\n}\n.contact-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n.contact-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n.contact-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbnRhY3QtZm9ybS9DOlxcVXNlcnNcXE1pY2hhZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3BlcnR5LXdlYnNpdGVcXHByb3BlcnR5LWZyb250L3NyY1xcYXBwXFxzaGFyZWRcXGNvbnRhY3QtZm9ybVxcY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRE47QURJSTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FDRk47QURJTTtFQUNFLFlBQUE7QUNGUjtBREtNO0VBQ0UsWUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1jYXJkIHtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIFxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IiwiLmNvbnRhY3QtY2FyZCBoNSB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3QtY2FyZCBmb3JtIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGFjdC1jYXJkIGZvcm0gaW5wdXQge1xuICBoZWlnaHQ6IDJyZW07XG59XG4uY29udGFjdC1jYXJkIGZvcm0gdGV4dGFyZWEge1xuICBoZWlnaHQ6IDhyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-form',
          templateUrl: './contact-form.component.html',
          styleUrls: ['./contact-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, {
        closeDialogEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/mobile-nav/mobile-nav.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/mobile-nav/mobile-nav.component.ts ***!
    \***********************************************************/

  /*! exports provided: MobileNavComponent */

  /***/
  function srcAppSharedMobileNavMobileNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileNavComponent", function () {
      return MobileNavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MobileNavComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Ads");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MobileNavComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/editadvert", 0];
    };

    function MobileNavComponent_a_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Ad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function MobileNavComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Favourites");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MobileNavComponent_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MobileNavComponent_a_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MobileNavComponent_a_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileNavComponent_a_14_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MobileNavComponent = /*#__PURE__*/function () {
      function MobileNavComponent(data, authService, router) {
        _classCallCheck(this, MobileNavComponent);

        this.data = data;
        this.authService = authService;
        this.router = router;
      }

      _createClass(MobileNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentUser = this.data;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(["/login"]);
        }
      }]);

      return MobileNavComponent;
    }();

    MobileNavComponent.ɵfac = function MobileNavComponent_Factory(t) {
      return new (t || MobileNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    MobileNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MobileNavComponent,
      selectors: [["app-mobile-nav"]],
      decls: 15,
      vars: 7,
      consts: [[1, "navbar-container"], ["mat-dialog-close", "", 1, "close"], [1, "navbar-items"], ["mat-dialog-close", "", "routerLink", "/home", 1, "nav-item", "nav-link"], ["mat-dialog-close", "", "routerLink", "/alladverts", 1, "nav-item", "nav-link"], ["mat-dialog-close", "", "class", "nav-item nav-link", "routerLink", "/myadverts", 4, "ngIf"], ["mat-dialog-close", "", "class", "nav-item nav-link", "routerLink", "/myaccount", 4, "ngIf"], ["mat-dialog-close", "", "class", "nav-item nav-link", 3, "routerLink", 4, "ngIf"], ["mat-dialog-close", "", "class", "nav-item nav-link", "routerLink", "/favourites", 4, "ngIf"], ["mat-dialog-close", "", "class", "nav-item nav-link", "routerLink", "/login", 4, "ngIf"], ["mat-dialog-close", "", "class", "nav-item nav-link", "routerLink", "/registration", 4, "ngIf"], ["mat-dialog-close", "", "class", "nav-item nav-link", 3, "click", 4, "ngIf"], ["mat-dialog-close", "", "routerLink", "/myadverts", 1, "nav-item", "nav-link"], ["mat-dialog-close", "", "routerLink", "/myaccount", 1, "nav-item", "nav-link"], ["mat-dialog-close", "", 1, "nav-item", "nav-link", 3, "routerLink"], ["mat-dialog-close", "", "routerLink", "/favourites", 1, "nav-item", "nav-link"], ["mat-dialog-close", "", "routerLink", "/login", 1, "nav-item", "nav-link"], ["mat-dialog-close", "", "routerLink", "/registration", 1, "nav-item", "nav-link"], ["mat-dialog-close", "", 1, "nav-item", "nav-link", 3, "click"]],
      template: function MobileNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Homes for sale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MobileNavComponent_a_8_Template, 2, 0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MobileNavComponent_a_9_Template, 2, 0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MobileNavComponent_a_10_Template, 2, 2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MobileNavComponent_a_11_Template, 2, 0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MobileNavComponent_a_12_Template, 2, 0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MobileNavComponent_a_13_Template, 2, 0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MobileNavComponent_a_14_Template, 2, 0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".navbar-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  right: 0;\n}\n.navbar-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.navbar-items[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.8rem 2.5rem;\n}\n.navbar-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  margin: 12px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vYmlsZS1uYXYvQzpcXFVzZXJzXFxNaWNoYWVsXFxEb2N1bWVudHNcXFByb2plY3RzXFxwcm9wZXJ0eS13ZWJzaXRlXFxwcm9wZXJ0eS1mcm9udC9zcmNcXGFwcFxcc2hhcmVkXFxtb2JpbGUtbmF2XFxtb2JpbGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbW9iaWxlLW5hdi9tb2JpbGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQ0FSO0FER0k7RUFDSSxlQUFBO0FDRFI7QURNQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUNISjtBREtJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vYmlsZS1uYXYvbW9iaWxlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItY29udGFpbmVyIHtcclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2U6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4ubmF2YmFyLWl0ZW1zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEuOHJlbSAyLjVyZW07XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBtYXJnaW46IDEycHggMDtcclxuICAgIH1cclxufSIsIi5uYXZiYXItY29udGFpbmVyIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cbi5uYXZiYXItY29udGFpbmVyIC5jbG9zZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhci1pdGVtcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS44cmVtIDIuNXJlbTtcbn1cbi5uYXZiYXItaXRlbXMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDEycHggMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mobile-nav',
          templateUrl: './mobile-nav.component.html',
          styleUrls: ['./mobile-nav.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/ng-material/ng-material.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/ng-material/ng-material.module.ts ***!
    \**********************************************************/

  /*! exports provided: NgMaterialModule */

  /***/
  function srcAppSharedNgMaterialNgMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgMaterialModule", function () {
      return NgMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var NgMaterialModule = function NgMaterialModule() {
      _classCallCheck(this, NgMaterialModule);
    };

    NgMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgMaterialModule
    });
    NgMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgMaterialModule_Factory(t) {
        return new (t || NgMaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgMaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/search/search.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/search/search.component.ts ***!
    \***************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSharedSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services/location.service */
    "./src/app/_services/location.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function SearchComponent_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var prov_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", prov_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prov_r4);
      }
    }

    function SearchComponent_mat_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r5);
      }
    }

    function SearchComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var price_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", price_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](price_r6);
      }
    }

    function SearchComponent_mat_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var price_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", price_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](price_r7);
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(_formBuilder, _locationService, router, route) {
        _classCallCheck(this, SearchComponent);

        this._formBuilder = _formBuilder;
        this._locationService = _locationService;
        this.router = router;
        this.route = route;
        this.closeDialogEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.provinces = ['Gauteng', 'North West', 'Northern Cape', 'Western Cape', 'Eastern Cape', 'Limpopo', 'Free State', 'Mpumalanga', 'KwaZulu-Natal'];
        this.cities = [];
        this.prices = [];
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.searchForm = this._formBuilder.group({
            province: ["", []],
            city: ["", []],
            minPrice: ["", []],
            maxPrice: ["", []],
            keyword: ["", []]
          });
          this.route.queryParamMap.subscribe(function (params) {
            var queryParams = params.params;

            _this32.searchForm.setValue({
              province: queryParams.province ? queryParams.province : "",
              city: queryParams.city ? queryParams.city : "",
              minPrice: +queryParams.minPrice ? +queryParams.minPrice : null,
              maxPrice: +queryParams.maxPrice ? +queryParams.maxPrice : null,
              keyword: queryParams.keyword ? queryParams.keyword : ""
            });

            if (queryParams.city) {
              _this32._locationService.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
                var cities = x.filter(function (x) {
                  return x.name === queryParams.city;
                });
                return cities.map(function (city) {
                  return city.name;
                });
              })).subscribe(function (cities) {
                _this32.cities = cities;

                _this32.searchForm.get("city").patchValue(cities[0]);
              });
            }
          });
          this.searchForm.get("province").valueChanges.subscribe(function (value) {
            _this32._locationService.list().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              var cities = x.filter(function (x) {
                return x.province === value;
              });
              return cities.map(function (city) {
                return city.name;
              });
            })).subscribe(function (cities) {
              _this32.cities = cities;
            });
          });
          this.assignClass();
          this.generatePrices();
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          var queryParams = {};
          if (this.searchForm.get("province").value) queryParams.province = this.searchForm.get("province").value;
          if (this.searchForm.get("city").value) queryParams.city = this.searchForm.get("city").value;
          if (this.searchForm.get("minPrice").value) queryParams.minPrice = this.searchForm.get("minPrice").value;
          if (this.searchForm.get("maxPrice").value) queryParams.maxPrice = this.searchForm.get("maxPrice").value;
          if (this.searchForm.get("keyword").value) queryParams.keyword = this.searchForm.get("keyword").value;
          this.closeDialogEvent.emit(true);
          this.router.navigate(['/alladverts'], {
            queryParams: queryParams
          });
        }
      }, {
        key: "resetClick",
        value: function resetClick() {
          if (this.router.url == '/home') {
            this.searchForm.reset();
            this.searchForm.patchValue({
              province: "",
              city: "",
              minPrice: "",
              maxPrice: ""
            });
            return;
          }

          this.searchForm.reset();
          this.router.navigate(['/alladverts']);
        }
      }, {
        key: "assignClass",
        value: function assignClass() {
          var url = this.router.url;

          if (url == "/home") {
            return 'class1';
          } else {
            return 'class2';
          }
        }
      }, {
        key: "generatePrices",
        value: function generatePrices() {
          var price = 500000;
          var count = 0;

          for (var i = 0; count < 16; i++) {
            this.prices.push(price);
            price += 500000;
            count++;
          }
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      outputs: {
        closeDialogEvent: "closeDialogEvent"
      },
      decls: 23,
      vars: 6,
      consts: [[3, "ngClass"], ["action", "", 1, "form", 3, "formGroup", "ngSubmit"], [1, "filters"], ["name", "province", "id", "", "placeholder", "Province", "formControlName", "province"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "City", "name", "city", "id", "", "formControlName", "city"], ["name", "minPrice", "id", "", "placeholder", "Min Price", "formControlName", "minPrice"], ["name", "maxPrice", "id", "", "placeholder", "Max Price", "formControlName", "maxPrice"], [1, "bottom-row"], ["matInput", "", "type", "text", "placeholder", "Search term...", "formControlName", "keyword", 1, "search-bar"], [1, "buttons"], ["type", "button", 1, "btn", "btn-light", "search", 3, "click"], ["type", "button", 1, "btn", "btn-light", "reset", 3, "click"], [3, "value"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_mat_option_5_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_mat_option_8_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_mat_option_11_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SearchComponent_mat_option_14_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_19_listener() {
            return ctx.onSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_21_listener() {
            return ctx.resetClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.assignClass());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.provinces);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.prices);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.prices);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
      styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n  padding: 18px;\n}\n\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0 1rem;\n}\n\n.filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.bottom-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0 1rem;\n}\n\n.bottom-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  display: flex;\n  flex-direction: row;\n  -moz-column-gap: 9px;\n       column-gap: 9px;\n  padding-left: 1rem;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 6rem;\n  height: 70%;\n}\n\n.buttons[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  background-color: #fd3e3e;\n  color: white;\n}\n\n.class1[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.781);\n  border-radius: 6px;\n  margin-bottom: 2rem;\n}\n\n.class2[_ngcontent-%COMP%] {\n  background-color: rgba(224, 224, 224, 0.493);\n  border-radius: 6px;\n  margin-bottom: 2rem;\n}\n\n@media (max-width: 600px) {\n  .bottom-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    row-gap: 8px;\n  }\n}\n\n@media (max-width: 930px) {\n  .filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .bottom-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlYXJjaC9DOlxcVXNlcnNcXE1pY2hhZWxcXERvY3VtZW50c1xcUHJvamVjdHNcXHByb3BlcnR5LXdlYnNpdGVcXHByb3BlcnR5LWZyb250L3NyY1xcYXBwXFxzaGFyZWRcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDSTtFQUNJLFVBQUE7QUNDUjs7QURHQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUk7RUFDSSxXQUFBO0FDQVI7O0FESUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0RSOztBRElJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDRlI7O0FETUE7RUFDSSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNQTtFQUNJLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1BO0VBQ0k7SUFDSSxzQkFBQTtFQ0hOOztFRE1FO0lBQ0ksc0JBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUNITjtBQUNGOztBRE1BO0VBQ0k7SUFDSSxzQkFBQTtFQ0pOO0VETU07SUFDSSxXQUFBO0VDSlY7O0VEUUU7SUFDSSxzQkFBQTtFQ0xOOztFRFFFO0lBQ0ksdUJBQUE7RUNMTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcm93LWdhcDogOHB4O1xyXG4gICAgcGFkZGluZzogMThweDtcclxufVxyXG5cclxuLmZpbHRlcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcblxyXG4gICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5ib3R0b20tcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgXHJcbiAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGNvbHVtbi1nYXA6IDlweDtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDYyLCA2Mik7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2xhc3MxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43ODEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmNsYXNzMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuNDkzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmJvdHRvbS1yb3cge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICByb3ctZ2FwOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MzBweCkge1xyXG4gICAgLmZpbHRlcnMge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20tcm93IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4iLCJmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogOHB4O1xuICBwYWRkaW5nOiAxOHB4O1xufVxuXG4uZmlsdGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLmZpbHRlcnMgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMjAlO1xufVxuXG4uYWxlcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmJvdHRvbS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cbi5ib3R0b20tcm93IG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b25zIHtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY29sdW1uLWdhcDogOXB4O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG4uYnV0dG9ucyBidXR0b24ge1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiA3MCU7XG59XG4uYnV0dG9ucyAuc2VhcmNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkM2UzZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2xhc3MxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4MSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmNsYXNzMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAyMjQsIDIyNCwgMC40OTMpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYm90dG9tLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcm93LWdhcDogOHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTMwcHgpIHtcbiAgLmZpbHRlcnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmZpbHRlcnMgbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmJvdHRvbS1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuYnV0dG9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _app_services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, {
        closeDialogEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/shared/search/search.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_helpers_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/_helpers/truncate-text.pipe */
    "./src/app/_helpers/truncate-text.pipe.ts");
    /* harmony import */


    var _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ng-material/ng-material.module */
    "./src/app/shared/ng-material/ng-material.module.ts");
    /* harmony import */


    var _advert_card_large_advert_card_large_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./advert-card-large/advert-card-large.component */
    "./src/app/shared/advert-card-large/advert-card-large.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contact-form/contact-form.component */
    "./src/app/shared/contact-form/contact-form.component.ts");
    /* harmony import */


    var _advert_actions_advert_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./advert-actions/advert-actions.component */
    "./src/app/shared/advert-actions/advert-actions.component.ts");
    /* harmony import */


    var _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./mobile-nav/mobile-nav.component */
    "./src/app/shared/mobile-nav/mobile-nav.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_5__["NgMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_5__["NgMaterialModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _app_helpers_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncateTextPipe"], _advert_card_large_advert_card_large_component__WEBPACK_IMPORTED_MODULE_6__["AdvertCardLargeComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactFormComponent"], _advert_actions_advert_actions_component__WEBPACK_IMPORTED_MODULE_9__["AdvertActionsComponent"], _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_10__["MobileNavComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_5__["NgMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
        exports: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _app_helpers_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncateTextPipe"], _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_5__["NgMaterialModule"], _advert_card_large_advert_card_large_component__WEBPACK_IMPORTED_MODULE_6__["AdvertCardLargeComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactFormComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _app_helpers_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncateTextPipe"], _advert_card_large_advert_card_large_component__WEBPACK_IMPORTED_MODULE_6__["AdvertCardLargeComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactFormComponent"], _advert_actions_advert_actions_component__WEBPACK_IMPORTED_MODULE_9__["AdvertActionsComponent"], _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_10__["MobileNavComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_5__["NgMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
          exports: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _app_helpers_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_4__["TruncateTextPipe"], _ng_material_ng_material_module__WEBPACK_IMPORTED_MODULE_5__["NgMaterialModule"], _advert_card_large_advert_card_large_component__WEBPACK_IMPORTED_MODULE_6__["AdvertCardLargeComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactFormComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/utils.ts":
  /*!*********************************!*\
    !*** ./src/app/shared/utils.ts ***!
    \*********************************/

  /*! exports provided: invalidInputs */

  /***/
  function srcAppSharedUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "invalidInputs", function () {
      return invalidInputs;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function invalidInputs(formgroup) {
      var messages = {};

      var _loop = function _loop(input) {
        var control = formgroup.controls[input]; // If the passwords don't match, assign error message.

        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"] && control.errors) {
          Object.keys(control.errors).map(function (messageKey) {
            messages[input] = validationMessages[input][messageKey];
          });
        } // If the password field doesn't meet the requirements, assign error message.


        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
          var nestedGroupMessages = invalidInputs(control);
          Object.assign(messages, nestedGroupMessages);
        } // If any of the other fields don't meet the requirements, assign error message.


        if (validationMessages[input]) {
          messages[input] = "";

          if (control.errors && (control.dirty || control.touched)) {
            Object.keys(control.errors).map(function (messageKey) {
              messages[input] = validationMessages[input][messageKey];
            });
          }
        }
      };

      for (var input in formgroup.controls) {
        _loop(input);
      }

      return messages;
    }

    var validationMessages = {
      firstName: {
        required: "A first name is required.",
        minlength: "Your first name need to be at least 1 character long.",
        multipleSpaceValidator: "Your first name cannot contain multiple spaces.",
        maxlength: "Your first name cannot be longer than 100 characters",
        noNumbers: "Your first name cannot contain any numbers",
        noSpecialChar: "Your first name cannot contain any special characters"
      },
      lastName: {
        required: "Your last name is required",
        minlength: "Your last name needs to be at least 3 characters long.",
        multipleSpaceValidator: "Your last name cannot contain multiple spaces.",
        maxlength: "Your last name cannot be longer than 100 characters",
        noNumbers: "Your last name cannot contain any numbers",
        noSpecialChar: "Your last name cannot contain any special characters"
      },
      email: {
        required: "Your email address is required.",
        minlength: "Your email address must be at least 6 characters long",
        noSpaceValidator: "Your email address cannot contain spaces.",
        email: "This must be a valid email address.",
        maxlength: "Your email cannot be longer than 100 characters"
      },
      contactNumber: {
        required: "Your contact number is required.",
        onlyNumbers: "Your contact number can only contain numbers"
      },
      currentPassword: {
        required: "Your current password is required"
      },
      passwords: {
        match: "Your passwords must match"
      },
      password: {
        required: "A password is required",
        minlength: "Your password needs to be at least 8 characters long",
        maxlength: "Your password cannot be longer than 100 characters",
        noSpaceValidator: "Your password cannot contain spaces",
        passwordNumber: "Your password must contain at least one number",
        passwordUpperCase: "Your password must contain at leat one uppercase character"
      },
      confirmPass: {
        required: "Please confirm your password"
      },
      name: {
        required: "Your name is required."
      },
      message: {
        required: "A message is required"
      },
      title: {
        required: "An advert title is required.",
        minlength: "Your advert title must be at least 10 characters long.",
        maxlength: "Your advert title cannot be longer than 100 characters",
        multipleSpaceValidator: "Your advert title cannot have consecutive spaces"
      },
      province: {
        required: "Your province is required."
      },
      city: {
        required: "Your city is required."
      },
      details: {
        required: "Advert details are required.",
        minlength: "Your advert details need to be at least 10 characters long.",
        maxlength: "Your advert details cannot be longer than 1000 characters.",
        multipleSpaceValidator: "Your advert details cannot have consecutive spaces"
      },
      price: {
        required: "An advert price is required.",
        min: "The minimum advert price is R10 000",
        max: "The maximum advert price is R100,000,000",
        noSpaceValidator: "Your price cannot contain spaces",
        onlyNumbers: "Your price can only contain numbers"
      },
      bedrooms: {
        required: "Bedrooms are required",
        min: "Cannot be less than 0"
      },
      bathrooms: {
        required: "Bathrooms are required",
        min: "Cannot be less than 0"
      },
      parkingSpaces: {
        required: "Parkings are required",
        min: "Cannot be less than 0"
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:3000'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Michael\Documents\Projects\property-website\property-front\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map