(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reservations~._b"],{

/***/ "./bundles/reservations sync recursive .*\\.tpl\\.html$":
/*!**************************************************!*\
  !*** ./bundles/reservations sync .*\.tpl\.html$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user-reservations/user-reservations.tpl.html": "./bundles/reservations/user-reservations/user-reservations.tpl.html"
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
webpackContext.id = "./bundles/reservations sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/reservations sync recursive \\..+\\/.+\\.js$":
/*!*************************************************!*\
  !*** ./bundles/reservations sync \..+\/.+\.js$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./reservation-calendar/index.js": "./bundles/reservations/reservation-calendar/index.js",
	"./reservation-form/index.js": "./bundles/reservations/reservation-form/index.js",
	"./user-reservations/user-reservations.controller.js": "./bundles/reservations/user-reservations/user-reservations.controller.js"
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
webpackContext.id = "./bundles/reservations sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/reservations/index.js":
/*!***************************************!*\
  !*** ./bundles/reservations/index.js ***!
  \***************************************/
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

  var js = importAll(__webpack_require__("./bundles/reservations sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/reservations sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/reservations/reservation-calendar/index.js":
/*!************************************************************!*\
  !*** ./bundles/reservations/reservation-calendar/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_reservation_calendar_rc_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/reservation-calendar/rc-calendar.component */ "./shared/reservation-calendar/rc-calendar.component.js");

/* harmony default export */ __webpack_exports__["default"] = (shared_reservation_calendar_rc_calendar_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./bundles/reservations/reservation-form/index.js":
/*!********************************************************!*\
  !*** ./bundles/reservations/reservation-form/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_reservation_form_res_reservation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/reservation-form/res-reservation.component */ "./shared/reservation-form/res-reservation.component.js");

/* harmony default export */ __webpack_exports__["default"] = (shared_reservation_form_res_reservation_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./bundles/reservations/user-reservations/user-reservations.controller.js":
/*!********************************************************************************!*\
  !*** ./bundles/reservations/user-reservations/user-reservations.controller.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");
/* harmony import */ var shared_dw_controls_dw_date_time_dw_date_time_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/dw-controls/dw-date-time/dw-date-time.directive */ "./shared/dw-controls/dw-date-time/dw-date-time.directive.js");
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");













/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.userReservations', ['session', 'deskworks.reservationService', shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_10__["default"].name, shared_dw_controls_dw_date_time_dw_date_time_directive__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_12__["default"].name]).controller('UserReservationsCtrl', ["$scope", "$filter", "$route", "$translate", "$timeout", "dwAlerts", "reservationService", "ReservationUnit", "reservationUnits", "user", "state", "session", "helper", "settings", "reservationFields", function ($scope, $filter, $route, $translate, $timeout, dwAlerts, reservationService, ReservationUnit, reservationUnits, user, state, session, helper, settings, reservationFields) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('USER_RESERVATIONS.PAGE_TITLE', {
    userName: user.fullNameCompany
  }));
  $ctrl.optsFilter = [{
    id: 'all',
    name: $translate.instant('USER_RESERVATIONS.FILTER.ALL')
  }, {
    id: 'upcoming',
    name: $translate.instant('USER_RESERVATIONS.FILTER.UPCOMING')
  }, {
    id: 'past',
    name: $translate.instant('USER_RESERVATIONS.FILTER.PAST')
  }];
  $ctrl.filter = $ctrl.optsFilter[0].id;
  $ctrl.settings = settings;
  $ctrl.reservations = [];
  $ctrl.units = reservationUnits;
  $ctrl.params = {
    centerId: state.getCurrentCenterId(),
    userId: state.getCurrentUserId(),
    offset: 0,
    limit: 50
  };
  /**
   * Fetch reservations from server
   */

  $ctrl.fetch = function () {
    if ($ctrl.eof || $ctrl.fetching) return $ctrl.fetching;
    $ctrl.fetching = reservationService.query($ctrl.params).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query reservations.');
    }).finally(function () {
      $ctrl.fetching = null;
    }).then(function (reservations) {
      return postProcessReservations(reservations);
    }).then(function (reservations) {
      var _context;

      $ctrl.reservations = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.reservations).call(_context, reservations);
      $ctrl.params.offset = $ctrl.reservations.length;
      $ctrl.eof = reservations.length < $ctrl.params.limit;
    });
  };
  /**
   * On filter change handler
   */


  $ctrl.onFilter = function () {
    $ctrl.reservations = [];
    $ctrl.params.offset = 0;
    $ctrl.eof = false;
    $ctrl.params.from = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()($ctrl) === 'upcoming' ? moment() : null;
    $ctrl.params.to = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()($ctrl) === 'past' ? moment() : null;
    $ctrl.fetch();
  };
  /**
   * Watch for $ctrl.editingReservation.from and if date is changed (but not time),
   * synchronize date of $ctrl.editingReservation.to with date of $ctrl.editingReservation.from
   */


  $scope.$watch('$ctrl.editingReservation.from', function (newVal, oldVal) {
    if (!moment.isMoment(newVal) || !moment.isMoment(oldVal)) return;

    if (newVal.date() !== oldVal.date() || newVal.month() !== oldVal.month() || newVal.year() !== oldVal.year()) {
      $ctrl.editingReservation.to = moment([newVal.year(), newVal.month(), newVal.date(), $ctrl.editingReservation.to.hour() || newVal.hour(), $ctrl.editingReservation.to.minute() || newVal.minute(), 0, 0]);
    }
  });
  /**
   * Save Reservation handler
   */

  $ctrl.saveReservation = function () {
    if (!$ctrl.editingReservation || helper.pointFirstInvalid('.reservations-edit')) return;
    var data = {
      id: $ctrl.editingReservation.id,
      reservationUnitId: $ctrl.editingReservation.reservationUnitId,
      from: $ctrl.editingReservation.from,
      to: $ctrl.editingReservation.to,
      reservationNote: $ctrl.editingReservation.reservationNote
    };
    return reservationService.save(state.getCurrentCenterId(), state.getCurrentUserId(), data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to update reservation.');
    }).then(function () {
      delete $ctrl.editingReservation;
      $ctrl.onFilter();
    });
  };
  /**
   * Is reservation editable
   */


  $ctrl.isEditable = function (reservation) {
    return session.isAdmin() || session.isRole('member');
  };
  /**
   * Edit Reservation handler
   */


  $ctrl.editReservation = function (reservation) {
    if (session.isRole('member')) {
      // General Edit Reservation for members
      state.setParam('date', $filter('date')(reservation.from, 'yyyy-MM-ddTHH:mm:00Z'));
      return state.setPath('/edit-reservation/' + reservation.id);
    }

    if (session.isAdmin()) {
      // Special Edit Reservation for admins
      $ctrl.editingReservation = angular.copy(reservation);
    }
  };
  /**
   * Back button handler
   */


  $ctrl.back = function () {
    delete $ctrl.editingReservation;
  };
  /**
   * Cancel reservation handler
   */


  $ctrl.cancelReservation = function (reservation) {
    if (!confirm($translate.instant('USER_RESERVATIONS.CONFIRM_DELETE'))) return;
    return reservationService.delete(state.getCurrentCenterId(), state.getCurrentUserId(), reservation.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to cancel reservation.');
    }).then(function () {
      var _context2;

      var index = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2___default()(helper).call(helper, $ctrl.reservations, reservation.id);

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = $ctrl.reservations).call(_context2, index, 1);
    });
  };
  /**
   * New reservation handler
   */


  $ctrl.newReservation = function () {
    return state.setPath('/new-reservation');
  };

  function postProcessReservations(reservations) {
    reservations.forEach(function (reservation) {
      var _context3, _context4;

      var unit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(reservationUnits).call(reservationUnits, function (u) {
        return u.id === reservation.reservationUnitId;
      }) || {};
      reservation.resCategoryName = unit.reservationTypeName;
      reservation.fields = reservation.fields || {};
      reservation.$$fields = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(reservationFields).call(reservationFields, function (f) {
        return f.reservationCategoryId === unit.reservationTypeId || f.reservationCategoryId === 0;
      })).call(_context4, function (f) {
        return reservation.fields[f.id] || reservation.fields[f.id] === 0 || reservation.fields[f.id] === false;
      })).call(_context3, function (f) {
        return {
          name: f.name,
          value: f.$$filter(f, reservation.fields[f.id])
        };
      });
    });
    return reservations;
  }
}]));

/***/ }),

/***/ "./bundles/reservations/user-reservations/user-reservations.tpl.html":
/*!***************************************************************************!*\
  !*** ./bundles/reservations/user-reservations/user-reservations.tpl.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"reservations-list\" ng-show=\"!$ctrl.editingReservation\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-panel role=\"article\" aria-label=\"{{'USER_RESERVATIONS.RESERVATIONS' | translate}}\"> <ff-panel-header class=\"ff-read-only-ignore\"> <ff-row class=\"gutter-h-half\" role=\"radiogroup\" aria-label=\"{{'USER_RESERVATIONS.FILTER' | translate}}\"> <label ng-repeat=\"opt in ::$ctrl.optsFilter\" flex=\"none\"> <ff-radio name=\"filter\" ff-model=\"$ctrl.filter\" ff-value=\"::opt.id\" ff-label=\"{{opt.name}}\" ff-change=\"$ctrl.onFilter()\" style=\"min-height:1rem\"></ff-radio> </label> </ff-row> </ff-panel-header> <ff-header> <ff-row role=\"rowheader\"> <cell flex=\"0 1 145px\" class=\"ff-center\"><span translate=\"USER_RESERVATIONS.DATE\"></span></cell> <cell flex=\"1 1 150px\"><span translate=\"USER_RESERVATIONS.SPACE\"></span></cell> <cell flex=\"0 1 145px\" class=\"ff-center\"><span translate=\"USER_RESERVATIONS.TIME\"></span></cell> <cell flex=\"1 1 200px\" class=\"show-sm\"><span translate=\"USER_RESERVATIONS.NOTES\"></span></cell> <cell flex=\"0 1 110px\" ng-if=\"::$ctrl.settings.enableAccessCodes\"> <span translate=\"USER_RESERVATIONS.ACCESS_CODE\"></span> </cell> <cell flex=\"0 1 130px\" class=\"show-md\" ng-if=\"::state.isLoggedAdmin()\"> <span translate=\"USER_RESERVATIONS.ADDED_BY\"></span> </cell> <cell flex=\"0 1 110px\" class=\"show-md\" ng-if=\"::state.isLoggedAdmin()\"> <span translate=\"USER_RESERVATIONS.UPDATED_ON\"></span> </cell> </ff-row> </ff-header> <ff-col infinite-scroll=\"$ctrl.fetch()\" infinite-scroll-distance=\"2\" infinite-scroll-container=\"'.snap-content-scroller'\"> <ff-row ng-repeat=\"res in $ctrl.reservations\" role=\"row\"> <ff-static flex=\"0 1 145px\" ff-bind=\"::res.from | date:'weekDate'\" class=\"ff-right\"></ff-static> <ff-static flex=\"1 1 150px\" ff-bind=\"::res.reservationUnitName\"></ff-static> <ff-static flex=\"0 1 145px\" class=\"ff-center\"><span><span nice-time=\"::res.from\"></span> - <span nice-time=\"::res.to\"></span></span></ff-static> <ff-static flex=\"1 1 200px\" class=\"show-sm\"> <div> <div>{{::res.reservationNote}}</div> <div ng-repeat=\"f in res.$$fields\"> <small><span>{{f.name}}</span> <strong>{{f.value}}</strong></small> </div> </div> </ff-static> <ff-static flex=\"0 1 110px\" ff-bind=\"::res.accessCode | nd\" ng-if=\"::$ctrl.settings.enableAccessCodes\"></ff-static> <ff-static flex=\"0 1 130px\" class=\"show-md\" ff-bind=\"::res.addedBy\" ng-if=\"::state.isLoggedAdmin()\"></ff-static> <ff-static flex=\"0 1 110px\" class=\"show-md\" ff-bind=\"::res.updatedAt | date:'mediumDate'\" ng-if=\"::state.isLoggedAdmin()\"></ff-static> <ff-btn-group class=\"floating-toolbar\"> <ff-row> <ff-btn sense=\"edit\" size=\"xs\" class=\"ff-btn-icon\" ff-click=\"$ctrl.editReservation(res)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\" ng-if=\"::$ctrl.isEditable(res)\"></ff-btn> <ff-btn sense=\"delete\" size=\"xs\" class=\"ff-btn-icon\" ff-click=\"$ctrl.cancelReservation(res)\" title=\"{{'GLOBAL.BTN_CANCEL' | translate}}\"></ff-btn> </ff-row> </ff-btn-group> </ff-row> <div class=\"ff-spin ff-spin-placeholder\" ng-if=\"$ctrl.fetching\"></div> </ff-col> <ff-row ng-if=\"!$ctrl.reservations.length && !$ctrl.fetching\" class=\"ff-no-frame\"> <ff-label>{{'GLOBAL.NONE' | translate}}</ff-label> </ff-row> </ff-panel> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"new\" ff-click=\"$ctrl.newReservation()\"> <span translate=\"USER_RESERVATIONS.BTN_NEW\"></span> </ff-btn> </ff-btn-group> </div> <form name=\"formEditReservation\" class=\"reservations-edit\" ng-if=\"$ctrl.editingReservation\" ff-bulk-read-only> <h1 class=\"page-title\">Edit Reservation</h1> <div class=\"ff-grid ff-gutter-v ff-gutter-h\"> <ff-panel flex=\"{md: '0 0 50%'}\"> <ff-panel-header>{{'Center: ' + state.getCurrentCenter().name}}</ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 80px\">Category</ff-label> <ff-static ff-bind=\"$ctrl.editingReservation.resCategoryName\"></ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 80px\"><req>Unit</req></ff-label> <ff-select ff-model=\"$ctrl.editingReservation.reservationUnitId\" ff-options=\"unit.id as unit.name for unit in $ctrl.units\" ff-required=\"true\" ff-validate-alert=\"Unit\"></ff-select> </label> <dw-date-time name=\"from\" ff-label=\"Start Time\" ff-model=\"$ctrl.editingReservation.from\" label-flex=\"0 0 80px\" ff-required=\"true\" ff-date-diff=\"23\" ff-date-order=\"{ early: $ctrl.editingReservation.from, late: $ctrl.editingReservation.to }\" ff-validate-alert=\"{ field: 'Start Date', late: 'End Date' }\"> </dw-date-time> <dw-date-time name=\"to\" ff-label=\"End Time\" ff-model=\"$ctrl.editingReservation.to\" label-flex=\"0 0 80px\" ff-required=\"true\" ff-date-diff=\"23\" ff-date-order=\"{ early: $ctrl.editingReservation.from, late: $ctrl.editingReservation.to }\" ff-validate-alert=\"{ field: 'End Date', early: 'Start Date' }\"> </dw-date-time> </ff-panel> <ff-panel flex=\"{md: '0 0 50%'}\"> <ff-panel-header>Notes</ff-panel-header> <ff-row> <ff-textarea ff-model=\"$ctrl.editingReservation.reservationNote\" rowspan=\"4\"></ff-textarea> </ff-row> </ff-panel> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.saveReservation()\" ff-disabled=\"formEditReservation.$pristine\">Save Reservation</ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\">Back</ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/dw-controls/dw-date-time/dw-date-time.directive.js":
/*!*******************************************************************!*\
  !*** ./shared/dw-controls/dw-date-time/dw-date-time.directive.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * dwDateTime directive - wrapper for ffLabel + ffDate + ffTime date/time selection
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwDateTime', ['flexForms']).directive('dwDateTime', function () {
  return {
    restrict: 'E',
    scope: true,
    compile: function compile(tElement, tAttrs) {
      var ngDisabled = tAttrs.ngDisabled ? ' ng-disabled="' + tAttrs.ngDisabled + '"' : '';
      var ffDisabled = tAttrs.ngDisabled ? ' ff-disabled="' + tAttrs.ngDisabled + '"' : '';
      var ffRequired = tAttrs.ffRequired ? ' ff-required="' + tAttrs.ffRequired + '"' : '';
      var ffDateOrder = tAttrs.ffDateOrder ? ' ff-date-order="' + tAttrs.ffDateOrder + '"' : '';
      var ffDateDiff = tAttrs.ffDateDiff ? ' ff-date-diff="' + tAttrs.ffDateDiff + '"' : '';
      var ffValidateAlert = tAttrs.ffValidateAlert ? ' ff-validate-alert="' + tAttrs.ffValidateAlert + '"' : '';
      var labelClass = tAttrs.labelClass ? ' class="' + tAttrs.labelClass + '"' : '';
      var tpl = '<ff-row>' + '<label flex="1 1 auto">' + '<ff-label flex="' + tAttrs.labelFlex + '"' + ffRequired + ngDisabled + labelClass + '>' + tAttrs.ffLabel + '</ff-label>' + '<ff-row flex="1 1 1%">' + '<ff-date name="{{\'' + (tAttrs.name || tAttrs.ffModel) + 'date\'}}" flex="1 2 150px" ff-model="inner.date"' + ffRequired + ffDisabled + ffDateOrder + ffDateDiff + ffValidateAlert + '></ff-date>' + '<ff-time name="{{\'' + (tAttrs.name || tAttrs.ffModel) + 'time\'}}" flex="' + '1 3 150px' + '" ff-model="inner.time"' + ffRequired + ffDisabled + ffDateOrder + ffDateDiff + ffValidateAlert + '></ff-time>' + '</ff-row>' + '</label>' + '</ff-row>';
      tElement.append(tpl);
      return this.link;
    },
    link: function link($scope, $element, $attrs) {
      $scope.inner = {};
      var initDate = $scope.$eval($attrs.ffModel);
      if (initDate instanceof moment) innerFromModel(initDate); // init inner date and time with initial date

      $scope.$watch($attrs.ffModel, innerFromModel); // update inner date and time with ffModel

      /**
       * Watch for inner date and update ffModel
       */

      $scope.$watch('inner.date', function (date, oldDate) {
        var model = $scope.$eval($attrs.ffModel);
        if (!moment.isMoment(date) || !moment.isMoment(model)) return;
        if (moment.isMoment(oldDate) && date.isSame(oldDate)) return;
        $scope.newDate = date.clone().hour(model.hour()).minute(model.minute());
        $scope.$eval($attrs.ffModel + ' = newDate');
      });
      /**
       * Watch for inner time and update ffModel
       */

      $scope.$watch('inner.time', function (time, oldTime) {
        var model = $scope.$eval($attrs.ffModel);
        if (!moment.isMoment(time) || !moment.isMoment(model)) return;
        if (moment.isMoment(oldTime) && time.isSame(oldTime)) return;
        $scope.newDate = model.clone().hour(time.hour()).minute(time.minute());
        $scope.$eval($attrs.ffModel + ' = newDate');
      });
      /**
       * Updates inner date and time only if ffModel is really changed
       */

      function innerFromModel(model, oldModel) {
        if (!moment.isMoment(model) || moment.isMoment(oldModel) && model.isSame(oldModel)) return;
        $scope.inner.date = model.clone().second(0).millisecond(0);
        $scope.inner.time = model.clone().second(0).millisecond(0);
      }
    }
  };
}));

/***/ })

}]);
//# sourceMappingURL=reservations~._b.js.map?_rev=6d3560b483e8df4e4660