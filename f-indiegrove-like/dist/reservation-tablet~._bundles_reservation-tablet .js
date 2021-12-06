(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reservation-tablet~._bundles_reservation-tablet "],{

/***/ "./bundles/reservation-tablet sync recursive .*\\.tpl\\.html$":
/*!********************************************************!*\
  !*** ./bundles/reservation-tablet sync .*\.tpl\.html$ ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./reservation-tablet-setup/setup.tpl.html": "./bundles/reservation-tablet/reservation-tablet-setup/setup.tpl.html",
	"./reservation-tablet-wizard/01-schedule.tpl.html": "./bundles/reservation-tablet/reservation-tablet-wizard/01-schedule.tpl.html",
	"./reservation-tablet-wizard/02-sign-in.tpl.html": "./bundles/reservation-tablet/reservation-tablet-wizard/02-sign-in.tpl.html",
	"./reservation-tablet-wizard/03-reserve.tpl.html": "./bundles/reservation-tablet/reservation-tablet-wizard/03-reserve.tpl.html",
	"./reservation-tablet-wizard/04-complete.tpl.html": "./bundles/reservation-tablet/reservation-tablet-wizard/04-complete.tpl.html"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./bundles/reservation-tablet sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/reservation-tablet sync recursive \\..+\\/.+\\.js$":
/*!*******************************************************!*\
  !*** ./bundles/reservation-tablet sync \..+\/.+\.js$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./reservation-tablet-setup/setup.controller.js": "./bundles/reservation-tablet/reservation-tablet-setup/setup.controller.js",
	"./reservation-tablet-wizard/01-schedule.controller.js": "./bundles/reservation-tablet/reservation-tablet-wizard/01-schedule.controller.js",
	"./reservation-tablet-wizard/02-sign-in.controller.js": "./bundles/reservation-tablet/reservation-tablet-wizard/02-sign-in.controller.js",
	"./reservation-tablet-wizard/03-reserve.controller.js": "./bundles/reservation-tablet/reservation-tablet-wizard/03-reserve.controller.js",
	"./reservation-tablet-wizard/04-complete.controller.js": "./bundles/reservation-tablet/reservation-tablet-wizard/04-complete.controller.js",
	"./reservation-tablet-wizard/res-tablet.service.js": "./bundles/reservation-tablet/reservation-tablet-wizard/res-tablet.service.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./bundles/reservation-tablet sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/reservation-tablet/index.js":
/*!*********************************************!*\
  !*** ./bundles/reservation-tablet/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4__);





var index = ['$injector', function index($injector) {
  // JS
  var importAll = function importAll(r) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(r).call(r)).call(_context, r);
  };

  var js = importAll(__webpack_require__("./bundles/reservation-tablet sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/reservation-tablet sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-setup/setup.controller.js":
/*!*********************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-setup/setup.controller.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationTabletSetupCtrl', ['session', 'deskworks.state', 'deskworks.Credentials']).controller('ReservationTabletSetupCtrl', ["$scope", "$translate", "$localStorage", "dwAlerts", "state", "helper", "session", "categories", "Credentials", function ($scope, $translate, $localStorage, dwAlerts, state, helper, session, categories, Credentials) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('RESERVATION_TABLET.SETUP.PAGE_TITLE'));
  $localStorage.reservationTablet = $localStorage.reservationTablet || {};
  var ls = $localStorage.reservationTablet;
  $ctrl.categories = categories;

  if ($ctrl.categories.length) {
    var _context, _context2;

    $ctrl.category = ls.categoryId && _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.categories).call(_context, function (c) {
      return c.id === ls.categoryId;
    }) || $ctrl.categories[0];
    $ctrl.unit = ls.unitId && _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = $ctrl.category.reservationUnits).call(_context2, function (u) {
      return u.id === ls.unitId;
    }) || $ctrl.category.reservationUnits[0];
  }

  $ctrl.onCategoryChange = function () {
    return $ctrl.unit = $ctrl.category ? $ctrl.category.reservationUnits[0] : null;
  };
  /**
   * Start Wizard
   */


  $ctrl.start = function () {
    if (helper.pointFirstInvalid('#reservationTabletSetup')) return;
    return Credentials.get('$$reservations').catch(function (err) {
      return dwAlerts.error(err, 'Failed to get credentials.');
    }).then(function (credentials) {
      ls.centerId = state.getCurrentCenterId();
      ls.login = credentials.login;
      ls.password = credentials.password;
      ls.unitId = $ctrl.unit.id;
      ls.unitName = $ctrl.unit.name;
      $localStorage.$apply(); // flush local storage
    }).then(function () {
      return session.logout();
    }).then(function () {
      return state.setPath("/reservation-tablet-wizard");
    });
  };
}]));

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-setup/setup.tpl.html":
/*!****************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-setup/setup.tpl.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"reservationTabletSetup\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-panel style=\"max-width:600px\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 180px\"><span translate=\"RESERVATION_TABLET.RESERVATION_CATEGORY\"></span></ff-label> <ff-select flex=\"1 1 320px\" name=\"reservationCategory\" ff-model=\"$ctrl.category\" ff-required=\"true\" ff-options=\"cat.name for cat in $ctrl.categories\" ff-change=\"$ctrl.onCategoryChange()\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 180px\"><span translate=\"RESERVATION_TABLET.RESERVATION_UNIT\"></span></ff-label> <ff-select flex=\"1 1 320px\" name=\"reservationUnit\" ff-model=\"$ctrl.unit\" ff-required=\"true\" ff-options=\"unit.name for unit in $ctrl.category.reservationUnits\"></ff-select> </label> <ff-row> <ff-label><span> <span translate=\"RESERVATION_TABLET.START_WIZARD\"></span> <ff-hint><span translate=\"RESERVATION_TABLET.START_WIZARD.HINT\"></span></ff-hint> </span></ff-label> <ff-btn flex=\"none\" sense=\"ok\" size=\"sm\" class=\"buttons-row\" ff-click=\"$ctrl.start()\"> <span translate=\"RESERVATION_TABLET.BTN_START\"></span> </ff-btn> </ff-row> </ff-panel> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-wizard/01-schedule.controller.js":
/*!****************************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-wizard/01-schedule.controller.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wizard_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wizard.scss */ "./bundles/reservation-tablet/reservation-tablet-wizard/wizard.scss");
/* harmony import */ var _wizard_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wizard_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");









/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationTabletScheduleCtrl', ['session', 'deskworks.state', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_8__["default"].name]).controller('ReservationTabletScheduleCtrl', ["$scope", "$translate", "$q", "$interval", "$localStorage", "dwAlerts", "state", "helper", "session", "calendarService", function ($scope, $translate, $q, $interval, $localStorage, dwAlerts, state, helper, session, calendarService) {
  var $ctrl = this;
  $localStorage.reservationTablet = $localStorage.reservationTablet || {};
  var ls = $localStorage.reservationTablet;
  state.setPageTitle($translate.instant('RESERVATION_TABLET.SCHEDULE.PAGE_TITLE', {
    unit: ls.unitName
  }));
  /**
   * Reserve
   */

  $ctrl.reserve = function () {
    state.setCurrentCenterId(ls.centerId);
    state.setParam('unit', ls.unitId);
    return state.setPath('/reservation-tablet-wizard/reserve');
  };
  /**
   * Fetch
   */


  $ctrl.fetch = function (force) {
    $interval.cancel($ctrl.timer);
    if ($ctrl.fetching && !force) return; // skip fetching when called by timer

    $ctrl.fetching = true;
    return session.loginSilent(ls.login, ls.password).catch(function (err) {
      return dwAlerts.error(err, 'Failed to log in by system user.');
    }).then(function () {
      return calendarService.query(ls.centerId).catch(function (err) {
        return dwAlerts.error(err, 'Failed to get calendar data.');
      });
    }).then(function (categories) {
      return categories.reduce(function (arr, cat) {
        return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(arr).call(arr, cat.reservationUnits);
      }, []);
    }) // flat units list
    .then(function (units) {
      var unit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(units).call(units, function (u) {
        return u.id === ls.unitId;
      });

      if (!unit) return dwAlerts.error('Reservation unit not found.');
      return unit;
    }).then(function (unit) {
      $ctrl.unit = $ctrl.unit || {
        reservations: []
      };
      $ctrl.unit.name = unit.name;
      unit.reservations.forEach(function (res) {
        var _context;

        // sync reservations: copy/insert existing/new
        if (res.to < Date.now()) return; // skip past reservations

        var index = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2___default()(_context = $ctrl.unit.reservations).call(_context, function (r) {
          return r.id === res.id;
        });

        if (index >= 0) angular.copy(res, $ctrl.unit.reservations[index]);else $ctrl.unit.reservations.push(res);
      });
      $ctrl.unit.reservations.forEach(function (res, idx) {
        var _context2, _context3;

        // sync reservations: remove deleted
        var found = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = unit.reservations).call(_context2, function (r) {
          return r.id === res.id;
        });

        if (!found) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = $ctrl.unit.reservations).call(_context3, idx, 1);
      });
      ls.unitName = $ctrl.unit.name;
      state.setPageTitle($translate.instant('RESERVATION_TABLET.SCHEDULE.PAGE_TITLE', {
        unit: ls.unitName
      }));
    }).finally(function () {
      $ctrl.fetching = false;
      $interval.cancel($ctrl.timer);
      $ctrl.timer = $interval($ctrl.fetch, 1000 * 60);
    }).finally(function () {
      return session.logout();
    });
  };

  $ctrl.fetch();
  $scope.$on('$destroy', function () {
    return $interval.cancel($ctrl.timer);
  });
}]));

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-wizard/01-schedule.tpl.html":
/*!***********************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-wizard/01-schedule.tpl.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"reservationTabletSchedule\"> <div class=\"animate-collapse\" ng-if=\"state.getPageTitle()\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> </div> <div class=\"animate-collapse\" ng-if=\"!state.getPageTitle()\" style=\"height:1rem\"></div> <div class=\"ff-grid gutter-v\"> <ff-panel ff-dim=\"!$ctrl.unit\"> <ff-header class=\"animate-collapse\" ng-if=\"$ctrl.unit\"> <ff-row> <cell flex=\"0 1 160px\"><span translate=\"GLOBAL.TIME\"></span></cell> <cell flex=\"1 1 210px\"><span translate=\"GLOBAL.COMPANY\"></span> / <span translate=\"GLOBAL.NAME\"></span></cell> <cell flex=\"1 1 210px\"><span translate=\"GLOBAL.TITLE\"></span></cell> </ff-row> </ff-header> <ff-row ng-repeat=\"res in $ctrl.unit.reservations | orderBy:'from'\" class=\"animate-collapse\"> <ff-static flex=\"0 1 160px\"><span><span nice-time=\"::res.from\"></span> - <span nice-time=\"::res.to\"></span></span></ff-static> <ff-static flex=\"1 1 210px\"> <span> <div class=\"rt-company\" ng-if=\"::res.userCompany\">{{::res.userCompany}}</div> <div>{{::res.userName}}</div> </span> </ff-static> <ff-static flex=\"1 1 210px\">{{::res.title}}</ff-static> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"reserve\" ff-click=\"$ctrl.reserve()\"><span translate=\"RESERVATION_TABLET.BNT_MAKE_RESERVATION\"></span></ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-wizard/02-sign-in.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-wizard/02-sign-in.controller.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationTabletSignInCtrl', ['flexForms', 'deskworks.state', 'deskworks.dwSignIn']).controller('ReservationTabletSignInCtrl', ["$scope", "$translate", "state", function ($scope, $translate, state) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('SIGN_IN.PAGE_TITLE'));
  /**
   * dwSignIn:SignIn event listener, proceeds to redirect
   */

  $scope.$on('dwSignIn:SignIn', function ($event) {
    $event.stopPropagation();
    return state.replace().setPath('/reservation-tablet-wizard/reserve');
  });
  /**
   * Back button with countdown
   */

  $ctrl.goBack = function () {
    return state.replace().setPath('/reservation-tablet-wizard');
  };
}]));

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-wizard/02-sign-in.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-wizard/02-sign-in.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<dw-sign-in id=\"signIn\"> <extra-buttons> <ff-btn sense=\"back\" ff-click=\"$ctrl.goBack()\" ff-countdown=\"20\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </extra-buttons> </dw-sign-in> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-wizard/03-reserve.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-wizard/03-reserve.controller.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_reservation_form_res_reservation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/reservation-form/res-reservation.component */ "./shared/reservation-form/res-reservation.component.js");
/* harmony import */ var _wizard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wizard.scss */ "./bundles/reservation-tablet/reservation-tablet-wizard/wizard.scss");
/* harmony import */ var _wizard_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wizard_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _res_tablet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./res-tablet.service */ "./bundles/reservation-tablet/reservation-tablet-wizard/res-tablet.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationTabletReserveCtrl', ['deskworks.state', 'deskworks.resReservation', 'resTablet']).controller('ReservationTabletReserveCtrl', ["$scope", "$translate", "$timeout", "state", "helper", "session", "resTablet", function ($scope, $translate, $timeout, state, helper, session, resTablet) {
  var $ctrl = this;
  /**
   * Next handler
   */

  $ctrl.next = function () {
    resTablet.resetParams();
    return state.setPath('/reservation-tablet-wizard/complete');
  };
  /**
   * Sign Out
   */


  $ctrl.signOut = function () {
    return resTablet.signOut();
  };
  /**
   * Stop Wizard - back to settings
   */


  $ctrl.stopWizard = function () {
    if (!session.isAdmin()) return;
    state.resetParams();
    return state.setPath('/reservation-tablet-setup');
  };

  $ctrl.isAdmin = session.isAdmin;
  addEventListeners();
  $timeout(function () {
    return setHeight();
  });
  /**
   * $onDestroy
   */

  $scope.$on('$destroy', function () {
    return removeEventListeners();
  });
  /**
   * Set container height to fit to screen vertically with header
   */

  function setHeight() {
    $ctrl.header = $ctrl.header || document.querySelector('header.header');
    $ctrl.container = $ctrl.container || angular.element(document.querySelector('.res-reservation-tablet'));
    $ctrl.container.css('max-height', "calc(100vh - ".concat($ctrl.header.offsetHeight, "px)"));
  }

  function addEventListeners() {
    $ctrl.logo = document.querySelector('.header-logo img');
    $ctrl.banner = document.querySelector('.header-banner img');
    $ctrl.logo.addEventListener('load', setHeight);
    $ctrl.banner.addEventListener('load', setHeight);
  }

  function removeEventListeners() {
    $ctrl.logo.removeEventListener('load', setHeight);
    $ctrl.banner.removeEventListener('load', setHeight);
  }
}]));

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-wizard/03-reserve.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-wizard/03-reserve.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<res-reservation center=\"$resolve.center\" user=\"$resolve.user\" cal-data=\"$resolve.calData\" hide-reservation-cost-estimate=\"true\" hide-calendar-btn=\"true\" after-save=\"$ctrl.next\" sign-out=\"$ctrl.signOut\" stop-wizard=\"$ctrl.isAdmin() ? $ctrl.stopWizard : null\" reservation-fields=\"$resolve.reservationFields\" class=\"res-reservation-tablet\"></res-reservation> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-wizard/04-complete.controller.js":
/*!****************************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-wizard/04-complete.controller.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _res_tablet_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./res-tablet.service */ "./bundles/reservation-tablet/reservation-tablet-wizard/res-tablet.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationTabletCompleteCtrl', ['deskworks.state', 'resTablet']).controller('ReservationTabletCompleteCtrl', ["$translate", "state", "helper", "resTablet", function ($translate, state, helper, resTablet) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('RESERVATION_TABLET.COMPLETE.PAGE_TITLE'));
  /**
   * Sign Out
   */

  $ctrl.signOut = function () {
    return resTablet.signOut();
  };
  /**
   * Make Another Reservation
   */


  $ctrl.reserve = function () {
    resTablet.resetParams();
    return state.setPath('/reservation-tablet-wizard/reserve');
  };
}]));

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-wizard/04-complete.tpl.html":
/*!***********************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-wizard/04-complete.tpl.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"reservationTabletComplete\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-btn-group> <ff-btn sense=\"signOut\" ff-click=\"$ctrl.signOut()\" ff-countdown=\"20\"><span translate=\"GLOBAL.BTN_SIGN_OUT\"></span></ff-btn> <ff-btn sense=\"reserve\" ff-click=\"$ctrl.reserve()\"><span translate=\"RESERVATION_TABLET.BNT_MAKE_ANOTHER_RESERVATION\"></span></ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-wizard/res-tablet.service.js":
/*!************************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-wizard/res-tablet.service.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('resTablet', ['session', 'deskworks.state', 'deskworks.dwAlerts.service']).factory('resTablet', ["session", "state", "dwAlerts", function (session, state, dwAlerts) {
  return {
    signOut: signOut,
    resetParams: resetParams
  };

  function signOut() {
    return session.logout().catch(function (err) {
      return dwAlerts.error(err, 'Failed to terminate session.');
    }).then(function () {
      return resetParams();
    }).then(function () {
      return state.setPath('/reservation-tablet-wizard');
    });
  }

  function resetParams() {
    state.setParam('date', null);
    state.setParam('start', null);
    state.setParam('end', null);
    state.setParam('title', null);
    state.setParam('note', null);
    state.setParam('freq', null);
    state.setParam('duration', null);
    state.setParam('confirm', null);
  }
}]));

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet-wizard/wizard.scss":
/*!**************************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet-wizard/wizard.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ })

}]);
//# sourceMappingURL=reservation-tablet~._bundles_reservation-tablet .js.map?_rev=9d24f62337bc3259632e