(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usage~._b"],{

/***/ "./bundles/usage sync recursive .*\\.tpl\\.html$":
/*!*******************************************!*\
  !*** ./bundles/usage sync .*\.tpl\.html$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./check-in-log/check-in-log.tpl.html": "./bundles/usage/check-in-log/check-in-log.tpl.html",
	"./manual-check-in-log/manual-check-in-log.tpl.html": "./bundles/usage/manual-check-in-log/manual-check-in-log.tpl.html",
	"./usage-entry/usage-entry-edit.tpl.html": "./bundles/usage/usage-entry/usage-entry-edit.tpl.html",
	"./usage-entry/usage-entry-list.tpl.html": "./bundles/usage/usage-entry/usage-entry-list.tpl.html",
	"./usage-tracking/usage-tracking.tpl.html": "./bundles/usage/usage-tracking/usage-tracking.tpl.html",
	"./view-usage/view-usage.tpl.html": "./bundles/usage/view-usage/view-usage.tpl.html"
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
webpackContext.id = "./bundles/usage sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/usage sync recursive \\..+\\/.+\\.js$":
/*!******************************************!*\
  !*** ./bundles/usage sync \..+\/.+\.js$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./check-in-log/check-in-log.controller.js": "./bundles/usage/check-in-log/check-in-log.controller.js",
	"./manual-check-in-log/manual-check-in-log.controller.js": "./bundles/usage/manual-check-in-log/manual-check-in-log.controller.js",
	"./usage-entry/usage-entry-edit.controller.js": "./bundles/usage/usage-entry/usage-entry-edit.controller.js",
	"./usage-entry/usage-entry-list.controller.js": "./bundles/usage/usage-entry/usage-entry-list.controller.js",
	"./usage-tracking/usage-tracking.controller.js": "./bundles/usage/usage-tracking/usage-tracking.controller.js",
	"./view-usage/view-usage.controller.js": "./bundles/usage/view-usage/view-usage.controller.js"
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
webpackContext.id = "./bundles/usage sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/usage/check-in-log/check-in-log.controller.js":
/*!***************************************************************!*\
  !*** ./bundles/usage/check-in-log/check-in-log.controller.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_dw_controls_dw_date_time_dw_date_time_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/dw-controls/dw-date-time/dw-date-time.directive */ "./shared/dw-controls/dw-date-time/dw-date-time.directive.js");
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.members.checkInLog.list', ['deskworks.checkInLog.service', shared_dw_controls_dw_date_time_dw_date_time_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name]).controller('CheckInLogCtrl', ["$scope", "$timeout", "$translate", "dwAlerts", "state", "helper", "user", "checkInLogService", function ($scope, $timeout, $translate, dwAlerts, state, helper, user, checkInLogService) {
  var $ctrl = this;
  $ctrl.state = state;
  $ctrl.operations = [{
    id: 'checkIn',
    name: $translate.instant('CHECK_IN_LOG.CHECK_IN')
  }, {
    id: 'checkOut',
    name: $translate.instant('CHECK_IN_LOG.CHECK_OUT')
  }];
  state.setPageTitle($translate.instant('CHECK_IN_LOG.PAGE_TITLE', {
    userName: user.fullNameCompany
  }));
  /**
   * Fetch log data from server
   */

  $ctrl.fetch = function (page) {
    $ctrl.fetching = true;
    return checkInLogService.getLog(state.getCurrentCenterId(), state.getCurrentUserId(), page || $ctrl.memberLog && $ctrl.memberLog.page || 1, 100, $ctrl.mac || null).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query check-in log.');
    }).then(function (result) {
      $ctrl.memberLog = result;
      angular.forEach($ctrl.memberLog && $ctrl.memberLog.log, function (log) {
        log.operation = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $ctrl.operations, log.operation) || $ctrl.operations[0];
      });
    }).finally(function () {
      $ctrl.fetching = false;
    });
  };
  /**
   * Start initial fetching
   */


  $ctrl.fetch();
  /**
   * Delete log record handler
   */

  $ctrl.delete = function (rec) {
    return checkInLogService.deleteLog(state.getCurrentCenterId(), state.getCurrentUserId(), rec.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete check-in log record.');
    }).then(function () {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default()(_context = $ctrl.memberLog.log).call(_context, _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2___default()(helper).call(helper, $ctrl.memberLog.log, rec.id), 1);

      if ($ctrl.memberLog.log.length === 0) {
        // if current page is empty, navigate previous/next page
        $timeout(function () {
          if (+$ctrl.memberLog.page > 1) {
            $ctrl.fetch(+$ctrl.memberLog.page - 1);
          } else {
            $ctrl.fetch(+$ctrl.memberLog.page);
          }
        }, 3000); // 3sec timeout to let API complete background work
      }
    });
  };
  /**
   * Create new log record handler
   */


  $ctrl.create = function () {
    $ctrl.rec = {
      id: 'new',
      operation: $ctrl.operations[0],
      time: moment()
    };
    window.scrollTo(0, 0); // scroll to top of page
  };
  /**
   * Save new log record handler
   */


  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#checkInLogRec')) return;
    return checkInLogService.checkInOut(state.getCurrentCenterId(), state.getCurrentUserId(), $ctrl.rec.operation.id, $ctrl.rec.time).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save check-in log record.');
    }).then(function (result) {
      $ctrl.rec.id = result.id;
      $ctrl.rec = null;
      return $ctrl.fetch();
    });
  };
  /**
   * Reset MAC Address filter
   */


  $ctrl.setMac = function ($event, mac) {
    if ($event) $event.preventDefault();

    if ($ctrl.mac !== mac) {
      $ctrl.mac = mac;
      $ctrl.fetch(1);
    }
  };
}]));

/***/ }),

/***/ "./bundles/usage/check-in-log/check-in-log.tpl.html":
/*!**********************************************************!*\
  !*** ./bundles/usage/check-in-log/check-in-log.tpl.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"checkInLog\" ng-if=\"!$ctrl.rec\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"$ctrl.create()\"><span translate=\"CHECK_IN_LOG.BTN_CREATE\"></span></ff-btn> </ff-btn-group> <ff-panel ff-dim=\"$ctrl.fetching\"> <ff-row class=\"ff-bmargin ff-read-only-ignore\" ng-if=\"state.isLoggedAdmin()\"> <label flex=\"auto\"> <span flex=\"0 0 120px\" class=\"em\" translate=\"CHECK_IN_LOG.FILTER_BY_MAC\" style=\"align-self:center\"></span> <ff-text flex=\"1 1 1%\" placeholder=\"00:00:00:00:00:00\" ff-model=\"$ctrl.mac\" ff-model-options=\"{ debounce: 500 }\" ff-change=\"$ctrl.fetch()\"></ff-text> </label> <ff-btn-group flex=\"none\" class=\"buttons-row\" ng-show=\"$ctrl.mac\"> <ff-btn sense=\"delete\" size=\"xs\" ff-click=\"$ctrl.setMac()\" title=\"{{'GLOBAL.BTN_CANCEL' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> <span translate=\"CHECK_IN_LOG.EMPTY\" ng-if=\"!$ctrl.memberLog || $ctrl.memberLog.pageCount === 0\"></span> <ff-header ng-if=\"$ctrl.memberLog.pageCount > 0\"> <ff-row> <cell flex=\"3 0 55px\"><span translate=\"CHECK_IN_LOG.TIME\"></span></cell> <cell flex=\"2 0 45px\"><span translate=\"CHECK_IN_LOG.ACTION\"></span></cell> <cell flex=\"4 0 1px\" class=\"show-xs\" ng-if=\"state.isLoggedAdmin()\"><span translate=\"CHECK_IN_LOG.LOGIN\"></span></cell> <cell flex=\"4 0 1px\" class=\"show-sm\" ng-if=\"state.isLoggedAdmin()\"><span translate=\"CHECK_IN_LOG.MAC\"></span></cell> <ff-btn-group flex=\"none\" class=\"buttons-row zero-height\" ng-if=\"state.isLoggedAdmin()\"> <ff-btn sense=\"remove\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-row ng-repeat=\"rec in $ctrl.memberLog.log\"> <ff-static flex=\"3 0 55px\"> <span ng-bind=\"rec.time | date:'mediumDate'\" style=\"font-size:.9em\"></span>&nbsp;&nbsp;<span nice-time=\"rec.time\"></span> </ff-static> <ff-static flex=\"2 0 45px\"><ff-icon sense=\"rec.operation.id + 'Status'\"></ff-icon>&nbsp;&nbsp;{{rec.operation.name}}</ff-static> <ff-static flex=\"4 0 1px\" class=\"show-xs\" ff-bind=\"rec.login\" ng-if=\"state.isLoggedAdmin()\"></ff-static> <ff-static flex=\"4 0 1px\" class=\"show-sm\" ng-if=\"state.isLoggedAdmin()\"> <a href=\"#\" ng-click=\"$ctrl.setMac($event, rec.macAddress)\" ng-bind=\"rec.macAddress\"></a> </ff-static> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row\" ng-if=\"state.isLoggedAdmin()\"> <ff-btn sense=\"remove\" size=\"xs\" ff-click=\"$ctrl.delete(rec)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> <ff-pagination props=\"$ctrl.memberLog\" ff-click=\"$ctrl.fetch($page)\"></ff-pagination> </ff-panel> <ff-btn-group ng-if=\"state.isLoggedAdmin() && $ctrl.memberLog.log.length > 0\"> <ff-btn sense=\"new\" ff-click=\"$ctrl.create()\"><span translate=\"CHECK_IN_LOG.BTN_CREATE\"></span></ff-btn> </ff-btn-group> </div> </div> <form name=\"formCheckInLogRec\" id=\"checkInLogRec\" ng-if=\"$ctrl.rec\" ff-bulk-read-only> <h1 class=\"page-title\"><span translate=\"CHECK_IN_LOG.NEW.PAGE_TITLE\"></span></h1> <div class=\"ff-grid gutter-v\"> <ff-panel style=\"max-width:400px\"> <dw-date-time label-flex=\"0 0 100px\" ff-model=\"$ctrl.rec.time\" ff-required=\"true\" ff-label=\"{{'CHECK_IN_LOG.TIME' | translate}}\" ff-validate-alert=\"{{'CHECK_IN_LOG.TIME' | translate}}\"></dw-date-time> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"CHECK_IN_LOG.ACTION\"></req></ff-label> <ff-select ff-model=\"$ctrl.rec.operation\" ff-required=\"true\" ff-options=\"operation.name for operation in $ctrl.operations\" ff-validate-alert=\"{{'CHECK_IN_LOG.ACTION' | translate}}\"></ff-select> </label> </ff-panel> <ff-btn-group> <ff-btn type=\"submit\" sense=\"save\" ff-click=\"$ctrl.save()\"><span translate=\"GLOBAL.BTN_SAVE\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.rec = null\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/usage/index.js":
/*!********************************!*\
  !*** ./bundles/usage/index.js ***!
  \********************************/
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

  var js = importAll(__webpack_require__("./bundles/usage sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/usage sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/usage/manual-check-in-log/manual-check-in-log.controller.js":
/*!*****************************************************************************!*\
  !*** ./bundles/usage/manual-check-in-log/manual-check-in-log.controller.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_dw_controls_dw_date_time_dw_date_time_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/dw-controls/dw-date-time/dw-date-time.directive */ "./shared/dw-controls/dw-date-time/dw-date-time.directive.js");
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");
/* harmony import */ var shared_services_usage_manual_check_in_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/usage/manual-check-in-log.service */ "./shared/services/usage/manual-check-in-log.service.js");
/* harmony import */ var shared_services_usage_manual_check_in_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/usage/manual-check-in.service */ "./shared/services/usage/manual-check-in.service.js");










/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ManualCheckInLogCtrl', ['session', 'deskworks.checkInLog.service', shared_dw_controls_dw_date_time_dw_date_time_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_services_usage_manual_check_in_log_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_services_usage_manual_check_in_service__WEBPACK_IMPORTED_MODULE_9__["default"].name]).controller('ManualCheckInLogCtrl', ["$scope", "$timeout", "$translate", "dwAlerts", "state", "helper", "session", "user", "ManualCheckInLog", "ManualCheckIn", function ($scope, $timeout, $translate, dwAlerts, state, helper, session, user, ManualCheckInLog, ManualCheckIn) {
  var $ctrl = this;
  $ctrl.operations = [{
    id: 'checkIn',
    name: $translate.instant('CHECK_IN_LOG.CHECK_IN'),
    value: true
  }, {
    id: 'checkOut',
    name: $translate.instant('CHECK_IN_LOG.CHECK_OUT'),
    value: false
  }];

  $ctrl.isAdmin = function () {
    return session.isAdmin();
  };

  $ctrl.onInit = function () {
    state.setPageTitle($translate.instant('CHECK_IN_LOG.MANUAL.PAGE_TITLE', {
      userName: user.fullNameCompany
    }));
    $ctrl.fetch();
    ManualCheckIn.query({
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId()
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query check-in log.');
    }).then(function (result) {
      $ctrl.rbs = result;
    });
  };
  /**
   * Fetch log data from server
   */


  $ctrl.fetch = function (page) {
    $ctrl.fetching = true;
    return ManualCheckInLog.get({
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId(),
      page: page || ($ctrl.data ? $ctrl.data.page : 1),
      pageSize: 30,
      mac: $ctrl.mac || null
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query check-in log.');
    }).then(function (result) {
      $ctrl.data = result;
      $ctrl.data.log.forEach(function (rec) {
        var _context;

        rec.$$op = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.operations).call(_context, function (o) {
          return o.value === rec.checkedIn;
        });
      });
    }).finally(function () {
      $ctrl.fetching = false;
    });
  };
  /**
   * Delete log record handler
   */


  $ctrl.delete = function (rec) {
    return ManualCheckInLog.delete({
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId(),
      logId: rec.id
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete check-in log record.');
    }).then(function () {
      var _context2, _context3;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = $ctrl.data.log).call(_context2, _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = $ctrl.data.log).call(_context3, function (i) {
        return i.id === rec.id;
      }), 1);

      if ($ctrl.data.log.length === 0) {
        // if current page is empty, navigate previous/next page
        if (+$ctrl.data.page > 1) {
          $ctrl.fetch(+$ctrl.data.page - 1);
        } else {
          $ctrl.fetch(+$ctrl.data.page);
        }
      }
    });
  };
  /**
   * Create new log record handler
   */


  $ctrl.create = function () {
    if (!$ctrl.rbs || !$ctrl.rbs.length) return dwAlerts.error('User has no recurring billings to check in.');
    $ctrl.rec = {
      time: moment(),
      recurringId: $ctrl.rbs[0].id,
      $$op: $ctrl.operations[0]
    };
    window.scrollTo(0, 0); // scroll to top of page
  };
  /**
   * Save new log record handler
   */


  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#manualCheckInLogRec')) return;
    return ManualCheckInLog.save({
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId(),
      recurringId: $ctrl.rec.recurringId,
      checkedIn: $ctrl.rec.$$op.id === 'checkIn',
      time: $ctrl.rec.time
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save check-in log record.');
    }).then(function (result) {
      $ctrl.rec.id = result.id;
      $ctrl.rec = null;
      return $ctrl.fetch();
    });
  };

  $ctrl.onInit();
}]));

/***/ }),

/***/ "./bundles/usage/manual-check-in-log/manual-check-in-log.tpl.html":
/*!************************************************************************!*\
  !*** ./bundles/usage/manual-check-in-log/manual-check-in-log.tpl.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"manualCheckInLog\" ng-if=\"!$ctrl.rec\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\" style=\"max-width:720px\"> <ff-panel ff-dim=\"$ctrl.fetching\"> <span translate=\"CHECK_IN_LOG.EMPTY\" ng-if=\"$ctrl.data && $ctrl.data.pageCount === 0\"></span> <ff-header ng-if=\"$ctrl.data.pageCount > 0\"> <ff-row> <cell flex=\"1 0 95px\"><span translate=\"CHECK_IN_LOG.TIME\"></span></cell> <cell flex=\"0 0 110px\"><span translate=\"CHECK_IN_LOG.ACTION\"></span></cell> <cell flex=\"6 1 5px\" class=\"show-xs\"><span translate=\"CHECK_IN_LOG.NAME\"></span></cell> <ff-btn-group flex=\"none\" class=\"buttons-row zero-height\" ng-if=\"$ctrl.isAdmin()\"> <ff-btn sense=\"remove\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-row ng-repeat=\"rec in $ctrl.data.log\"> <ff-static flex=\"1 0 95px\"> <span><span ng-bind=\"rec.time | date:'mediumDate'\" style=\"font-size:.9em\"></span> <span nice-time=\"rec.time\"></span></span> </ff-static> <ff-static flex=\"0 0 110px\"><ff-icon sense=\"rec.$$op.id + 'Status'\"></ff-icon>&nbsp;&nbsp;{{rec.$$op.name}}</ff-static> <ff-static flex=\"6 1 5px\" class=\"show-xs\" ff-bind=\"rec.name\"></ff-static> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row\" ng-if=\"$ctrl.isAdmin()\"> <ff-btn sense=\"remove\" size=\"xs\" ff-click=\"$ctrl.delete(rec)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> <ff-pagination props=\"$ctrl.data\" ff-click=\"$ctrl.fetch($page)\" ng-if=\"$ctrl.data.pageCount > 1\"></ff-pagination> </ff-panel> <ff-btn-group ng-if=\"$ctrl.isAdmin()\"> <ff-btn sense=\"new\" ff-click=\"$ctrl.create()\"><span translate=\"CHECK_IN_LOG.BTN_CREATE\"></span></ff-btn> </ff-btn-group> </div> </div> <form id=\"manualCheckInLogRec\" ng-if=\"$ctrl.rec\" ff-bulk-read-only> <h1 class=\"page-title\"><span translate=\"CHECK_IN_LOG.NEW.PAGE_TITLE\"></span></h1> <div class=\"ff-grid gutter-v\" style=\"max-width:400px\"> <ff-panel> <dw-date-time label-flex=\"0 0 100px\" ff-model=\"$ctrl.rec.time\" ff-required=\"true\" ff-label=\"{{'CHECK_IN_LOG.TIME' | translate}}\" ff-validate-alert=\"{{'CHECK_IN_LOG.TIME' | translate}}\"></dw-date-time> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"CHECK_IN_LOG.NAME\"></req></ff-label> <ff-select ff-model=\"$ctrl.rec.recurringId\" ff-required=\"true\" ff-options=\"rb.id as rb.name for rb in $ctrl.rbs\" ff-validate-alert=\"{{'CHECK_IN_LOG.NAME' | translate}}\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"CHECK_IN_LOG.ACTION\"></req></ff-label> <ff-select ff-model=\"$ctrl.rec.$$op\" ff-required=\"true\" ff-options=\"operation.name for operation in $ctrl.operations\" ff-validate-alert=\"{{'CHECK_IN_LOG.ACTION' | translate}}\"></ff-select> </label> </ff-panel> <ff-btn-group> <ff-btn type=\"submit\" sense=\"save\" ff-click=\"$ctrl.save()\"><span translate=\"GLOBAL.BTN_SAVE\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.rec = null\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/usage/usage-entry/usage-entry-edit.controller.js":
/*!******************************************************************!*\
  !*** ./bundles/usage/usage-entry/usage-entry-edit.controller.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_dw_controls_dw_date_time_dw_date_time_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/dw-controls/dw-date-time/dw-date-time.directive */ "./shared/dw-controls/dw-date-time/dw-date-time.directive.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.UsageEntryEditCtrl', ['deskworks.usageEntryService', shared_dw_controls_dw_date_time_dw_date_time_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name]).controller('UsageEntryEditCtrl', ["$scope", "$filter", "$timeout", "$route", "$translate", "dwAlerts", "usage", "user", "usageEntryService", "state", "helper", function ($scope, $filter, $timeout, $route, $translate, dwAlerts, usage, user, usageEntryService, state, helper) {
  var $ctrl = this;
  $scope.backPath = '/usage-entry';
  state.setPageTitle($translate.instant('USAGE_ENTRY.NEW.PAGE_TITLE', {
    userName: user.fullNameCompany
  }));
  $ctrl.editingUsage = usage;

  if (usage.id === 'new') {
    $timeout(function () {
      return $ctrl.form.$setDirty();
    });
  }
  /**
   * Watch for $ctrl.editingUsage.startTime and if date is changed (but not time), synchronize date of $ctrl.editingUsage.endTime with date of $ctrl.editingUsage.startTime
   */


  $scope.$watch('$ctrl.editingUsage.checkInTime', function (newVal, oldVal) {
    if (!moment.isMoment(newVal) || !moment.isMoment(oldVal)) return;

    if (newVal.date() !== oldVal.date() || newVal.month() !== oldVal.month() || newVal.year() !== oldVal.year()) {
      $ctrl.editingUsage.checkOutTime = moment([newVal.year(), newVal.month(), newVal.date(), $ctrl.editingUsage.checkOutTime.hour() || newVal.hour(), $ctrl.editingUsage.checkOutTime.minute() || newVal.minute(), 0, 0]);
    }
  });
  /**
   * Back button handler
   */

  $ctrl.back = function () {
    return state.setPath('/usage-entry');
  };
  /**
   * Save usage handler
   */


  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#usageEntryEdit')) return;
    return usageEntryService.save(state.getCurrentCenterId(), state.getCurrentUserId(), $ctrl.editingUsage).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save usage entry.');
    }).then(function () {
      $ctrl.form.$setPristine();
      $route.reload();
    });
  };
}]));

/***/ }),

/***/ "./bundles/usage/usage-entry/usage-entry-edit.tpl.html":
/*!*************************************************************!*\
  !*** ./bundles/usage/usage-entry/usage-entry-edit.tpl.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"usageEntryEdit\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h-half\"> <ff-panel flex=\"{lg: '0 0 50%'}\"> <ff-header><span translate=\"USAGE_ENTRY.PERIOD.HEADER\"></span></ff-header> <dw-date-time ff-label=\"{{'USAGE_ENTRY.CHECK_IN_TIME' | translate}}\" ff-model=\"$ctrl.editingUsage.checkInTime\" label-flex=\"0 0 126px\" ff-required=\"true\" ff-date-diff=\"23\" ff-date-order=\"{ early: $ctrl.editingUsage.checkInTime, late: $ctrl.editingUsage.checkOutTime }\" ff-validate-alert=\"{ field: 'Start Date', late: 'End Date' }\"> </dw-date-time> <dw-date-time ff-label=\"{{'USAGE_ENTRY.CHECK_OUT_TIME' | translate}}\" ff-model=\"$ctrl.editingUsage.checkOutTime\" label-flex=\"0 0 126px\" ff-required=\"true\" ff-date-diff=\"23\" ff-date-order=\"{ early: $ctrl.editingUsage.checkInTime, late: $ctrl.editingUsage.checkOutTime }\" ff-validate-alert=\"{ field: 'End Date', early: 'Start Date' }\"> </dw-date-time> </ff-panel> <ff-panel flex=\"{lg: '0 0 50%'}\"> <ff-header><span translate=\"USAGE_ENTRY.NOTES\"></span></ff-header> <label class=\"ff-row\"> <ff-textarea ff-model=\"$ctrl.editingUsage.notes\" rowspan=\"2\"></ff-textarea> </label> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-disabled=\"$ctrl.form.$pristine\" ff-click=\"$ctrl.save()\"><span translate=\"GLOBAL.BTN_SAVE\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/usage/usage-entry/usage-entry-list.controller.js":
/*!******************************************************************!*\
  !*** ./bundles/usage/usage-entry/usage-entry-list.controller.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.UsageEntryListCtrl', ['deskworks.usageEntryService', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name]).controller('UsageEntryListCtrl', ["$scope", "$timeout", "$translate", "dwAlerts", "usageList", "user", "usageEntryService", "state", "helper", function ($scope, $timeout, $translate, dwAlerts, usageList, user, usageEntryService, state, helper) {
  var $ctrl = this;
  $ctrl.usageList = usageList;
  state.setPageTitle($translate.instant('USAGE_ENTRY.PAGE_TITLE', {
    userName: user.fullNameCompany
  }));
  /**
   * Create usage handler
   */

  $ctrl.create = function () {
    return state.setPath('/usage-entry/new');
  };
  /**
   * Delete Usage handler
   */


  $ctrl.delete = function (usage) {
    if (confirm('Are you sure to delete the usage?')) {
      return usageEntryService.delete(state.getCurrentCenterId(), state.getCurrentUserId(), usage.id).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete usage entry.');
      }).then(function () {
        var _context;

        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.usageList.usages).call(_context, helper.findIndexByKeyValue($ctrl.usageList.usages, 'id', usage.id), 1); // If current page is empty, navigate previous/next page


        if ($ctrl.usageList.usages.length === 0) {
          return $timeout(function () {
            if (+$ctrl.usageList.page > 1) return $ctrl.navPage(+$ctrl.usageList.page - 1);
            return $ctrl.navPage(+$ctrl.usageList.page);
          }, 3000); // 3sec timeout to let API complete background work
        }
      });
    }
  };
  /**
   * Navigate Page handler
   */


  $ctrl.navPage = function ($page) {
    return usageEntryService.query(state.getCurrentCenterId(), state.getCurrentUserId(), $page, 15).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query usage entry.');
    }).then(function (result) {
      return $ctrl.usageList = result;
    });
  };
}]));

/***/ }),

/***/ "./bundles/usage/usage-entry/usage-entry-list.tpl.html":
/*!*************************************************************!*\
  !*** ./bundles/usage/usage-entry/usage-entry-list.tpl.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"usage-entry\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-btn-group ng-if=\"state.isLoggedAdmin() && $ctrl.usageList.usages.length > 0\"> <ff-btn sense=\"new\" ff-click=\"$ctrl.create()\"><span translate=\"USAGE_ENTRY.BTN_CREATE\"></span></ff-btn> </ff-btn-group> <ff-panel ng-if=\"$ctrl.usageList.pageCount === 0\"><span translate=\"USAGE_ENTRY.EMPTY\"></span></ff-panel> <ff-panel ng-if=\"$ctrl.usageList.pageCount > 0\"> <ff-header> <ff-row> <cell flex=\"2 0 15%\" class=\"ff-center\"><span translate=\"USAGE_ENTRY.DATE\"></span></cell> <cell flex=\"2 0 15%\" class=\"ff-center\"><span translate=\"USAGE_ENTRY.CHECK_IN_TIME\"></span></cell> <cell flex=\"2 0 15%\" class=\"ff-center\"><span translate=\"USAGE_ENTRY.CHECK_OUT_TIME\"></span></cell> <cell flex=\"5 1 40%\" class=\"ff-center show-sm\"><span translate=\"USAGE_ENTRY.NOTES\"></span></cell> <cell flex=\"1 0 15%\" class=\"ff-center\"><ff-col translate=\"USAGE_ENTRY.USAGE\"></ff-col></cell> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row zero-height\" ng-if=\"state.isLoggedAdmin()\"> <ff-btn sense=\"remove\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-row ng-repeat=\"usage in $ctrl.usageList.usages\"> <ff-static flex=\"2 0 15%\" class=\"ff-center\" ff-bind=\"(usage.checkInTime || usage.checkOutTime) | date:'mediumDate'\"></ff-static> <ff-static flex=\"2 0 15%\" class=\"ff-center\"><span nice-time=\"usage.checkInTime\"></span></ff-static> <ff-static flex=\"2 0 15%\" class=\"ff-center\"><span nice-time=\"usage.checkOutTime\"></span></ff-static> <ff-static flex=\"5 1 40%\" class=\"ff-center show-sm\" ff-bind=\"usage.notes | nd\"></ff-static> <ff-static flex=\"1 0 15%\" class=\"ff-center\" ff-bind=\"(usage.usageDurationHours | nd) + ' / ' + (usage.usageDurationUnits | nd)\"></ff-static> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row\" ng-if=\"state.isLoggedAdmin()\"> <ff-btn sense=\"remove\" size=\"xs\" ff-click=\"$ctrl.delete(usage)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> <ff-pagination props=\"$ctrl.usageList\" ff-click=\"$ctrl.navPage($page)\" ng-if=\"$ctrl.usageList.pageCount > 1\"></ff-pagination> </ff-panel> <ff-btn-group ng-if=\"state.isLoggedAdmin()\"> <ff-btn sense=\"new\" ff-click=\"$ctrl.create()\"><span translate=\"USAGE_ENTRY.BTN_CREATE\"></span></ff-btn> </ff-btn-group> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/usage/usage-tracking/usage-tracking.controller.js":
/*!*******************************************************************!*\
  !*** ./bundles/usage/usage-tracking/usage-tracking.controller.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _usage_tracking_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usage-tracking.scss */ "./bundles/usage/usage-tracking/usage-tracking.scss");
/* harmony import */ var _usage_tracking_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_usage_tracking_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");
/* harmony import */ var shared_services_usage_usage_tracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/usage/usage-tracking.service */ "./shared/services/usage/usage-tracking.service.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.UsageTrackingCtrl', ['deskworks.inventory.product.service', 'deskworks.center.service', shared_services_usage_usage_tracking_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name]).controller('UsageTrackingCtrl', ["$scope", "$translate", "dwAlerts", "state", "helper", "user", "UsageTracking", "productService", "centerService", function ($scope, $translate, dwAlerts, state, helper, user, UsageTracking, productService, centerService) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('USAGE_TRACKING.PAGE_TITLE', {
    userName: user.fullNameCompany
  }));

  $ctrl.onInit = function () {
    $ctrl.navPage(1);
    centerService.getCenters().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query centers.');
    }).then(function (centers) {
      $ctrl.centers = centers.reduce(function (map, obj) {
        return map[obj.id] = obj, map;
      }, {});
      $ctrl.centers[0] = {
        id: 0,
        name: $translate.instant('USAGE_TRACKING.FACILITY.ALL')
      };
    });
    productService.getProducts().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query products.');
    }).then(function (products) {
      $ctrl.products = products.reduce(function (map, obj) {
        return map[obj.id] = obj, map;
      }, {});
    });
  };
  /**
   * Navigate Page handler
   */


  $ctrl.navPage = function (page) {
    return UsageTracking.query({
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId(),
      page: page
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query member usages.');
    }).then(function (result) {
      $ctrl.usage = result;
      $ctrl.usage.days.forEach(function (day) {
        day.collapsed = true;
      });
    });
  };
  /**
   * Remove Pass Refill
   */


  $ctrl.delete = function (day, usage) {
    return UsageTracking.delete({
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId(),
      usageId: usage.id
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete bucket refill.');
    }).then(function () {
      return $ctrl.navPage($ctrl.usage.page);
    }).then(function () {
      var _context;

      var newDay = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.usage.days).call(_context, function (i) {
        return i.date.valueOf() === day.date.valueOf();
      });

      if (newDay) newDay.collapsed = day.collapsed;
    });
  };

  $ctrl.onInit();
}]));

/***/ }),

/***/ "./bundles/usage/usage-tracking/usage-tracking.scss":
/*!**********************************************************!*\
  !*** ./bundles/usage/usage-tracking/usage-tracking.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/usage/usage-tracking/usage-tracking.tpl.html":
/*!**************************************************************!*\
  !*** ./bundles/usage/usage-tracking/usage-tracking.tpl.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"usage-tracking\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel> <ff-row ng-if=\"!$ctrl.usage\" class=\"animate-collapse\"> <ff-spin class=\"ff-spin-placeholder\"></ff-spin> </ff-row> <ff-static class=\"ff-no-frame\" ng-if=\"$ctrl.usage && !$ctrl.usage.days.length\"> <span translate=\"GLOBAL.NONE\"></span> </ff-static> <ff-header ng-if=\"$ctrl.usage.days.length\" class=\"ff-row\"> <cell flex=\"0 1 120px\" class=\"ff-right\" translate=\"USAGE_TRACKING.DATE\"></cell> <cell flex=\"1 1 25%\" class=\"ff-right\" translate=\"USAGE_TRACKING.USAGE_AMOUNT\"></cell> <cell flex=\"1 1 25%\" class=\"ff-right\" translate=\"USAGE_TRACKING.CREDITS_APPLIED\"></cell> <cell flex=\"1 1 12%\" class=\"ff-center show-sm\" translate=\"USAGE_TRACKING.REFILL\"></cell> <cell flex=\"1 1 12%\" class=\"ff-center\" translate=\"USAGE_TRACKING.IS_BILLED\"></cell> <ff-btn-group flex=\"0 0 auto\" class=\"zero-height buttons-row\"> <ff-btn sense=\"collapse\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-header> <ff-col ng-repeat=\"day in $ctrl.usage.days\"> <ff-row ng-class=\"{ active: !day.collapsed }\" ff-click=\"day.collapsed = !day.collapsed\"> <ff-static flex=\"0 1 120px\" class=\"ff-right\">{{::day.date | date:'mediumDate'}}</ff-static> <ff-static flex=\"1 1 25%\" class=\"ff-right\">{{::day.usageAmount | ncurrency}}</ff-static> <ff-static flex=\"1 1 25%\" class=\"ff-right\">{{::day.appliedAmount | ncurrency}}</ff-static> <ff-static flex=\"1 1 12%\" class=\"ff-center show-sm\">{{::day.refills.length | yesno}}</ff-static> <ff-static flex=\"1 1 12%\" class=\"ff-center\">{{::day.isBilled | yesno}}</ff-static> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row\"> <ff-btn sense=\"collapse\" size=\"xs\" ng-class=\"{ collapsed: day.collapsed }\" ff-click=\"day.collapsed = !day.collapsed\" title=\"{{'USAGE_TRACKING.BTN_COLLAPSE.HINT' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> <ff-row ng-if=\"!day.collapsed\" class=\"animate-collapse usage-details\"> <ff-col> <ff-header class=\"ff-row\"> <cell flex=\"1 1 150px\" class=\"show-lg\" translate=\"USAGE_TRACKING.FACILITY\"></cell> <cell flex=\"1 1 200px\" translate=\"USAGE_TRACKING.PRODUCT\"></cell> <cell flex=\"0 1 150px\" class=\"show-lg\" translate=\"USAGE_TRACKING.SOURCE\"></cell> <cell flex=\"0 0 68px\" class=\"ff-center show-md\" translate=\"USAGE_TRACKING.FROM\"></cell> <cell flex=\"0 0 68px\" class=\"ff-center show-md\" translate=\"USAGE_TRACKING.TO\"></cell> <cell flex=\"0 0 64px\" class=\"ff-right\" translate=\"USAGE_TRACKING.HOURS\"></cell> <cell flex=\"0 0 64px\" class=\"ff-right\" translate=\"USAGE_TRACKING.PASSES\"></cell> <cell flex=\"0 1 110px\" class=\"ff-right show-sm\" translate=\"USAGE_TRACKING.PRICE\"></cell> <cell flex=\"0 1 110px\" class=\"ff-right\" translate=\"USAGE_TRACKING.AMOUNT\"></cell> </ff-header> <ff-header ng-if=\"::day.openingBalance.length\"><span translate=\"USAGE_TRACKING.OPENING_BALANCE\"></span></ff-header> <ff-row ng-repeat=\"usage in ::day.openingBalance\"> <ff-static flex=\"1 1 150px\" class=\"show-lg\">{{$ctrl.centers[usage.centerId].name}}</ff-static> <ff-static flex=\"1 1 200px\">{{$ctrl.products[usage.productId].name}}</ff-static> <ff-static flex=\"0 1 150px\" class=\"show-lg\">{{::usage.typeName}}</ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"></ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"></ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\">{{::usage.hours}}</ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\">{{::usage.passes}}</ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right show-sm\"></ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right\">{{::usage.amount | ncurrency}}</ff-static> </ff-row> <ff-header ng-if=\"::day.refills.length\"><span translate=\"USAGE_TRACKING.REFILLS\"></span></ff-header> <ff-row ng-repeat=\"usage in ::day.refills\"> <ff-static flex=\"1 1 150px\" class=\"show-lg\">{{$ctrl.centers[usage.centerId].name}}</ff-static> <ff-static flex=\"1 1 200px\">{{$ctrl.products[usage.productId].name}}</ff-static> <ff-static flex=\"0 1 150px\" class=\"show-lg\"></ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"></ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"></ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\"></ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\">{{::usage.passes}}</ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right show-sm\"></ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right\"></ff-static> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row\" style=\"position:absolute;left:calc(100% - .5px);top:2px\"> <ff-btn size=\"xs\" sense=\"delete\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\" ff-click=\"$ctrl.delete(day, usage)\"></ff-btn> </ff-btn-group> </ff-row> <ff-header ng-if=\"::day.usages.length\"><span translate=\"USAGE_TRACKING.USAGE_LOG\"></span></ff-header> <ff-row ng-repeat=\"usage in ::day.usages\"> <ff-static flex=\"1 1 150px\" class=\"show-lg\">{{$ctrl.centers[usage.centerId].name}}</ff-static> <ff-static flex=\"1 1 200px\">{{$ctrl.products[usage.productId].name}}</ff-static> <ff-static flex=\"0 1 150px\" class=\"show-lg\">{{::usage.sourceName}}</ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"><span nice-time=\"::usage.from\"></span></ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"><span nice-time=\"::usage.to\"></span></ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\">{{::usage.hours}}</ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\"></ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right show-sm\"></ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right\"></ff-static> </ff-row> <ff-header ng-if=\"::day.usageTotals.length\"><span translate=\"USAGE_TRACKING.USAGE_TOTALS\"></span></ff-header> <ff-row ng-repeat=\"usage in ::day.usageTotals\"> <ff-static flex=\"1 1 150px\" class=\"show-lg\">{{$ctrl.centers[usage.centerId].name}}</ff-static> <ff-static flex=\"1 1 200px\">{{$ctrl.products[usage.productId].name}}</ff-static> <ff-static flex=\"0 1 150px\" class=\"show-lg\"></ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"></ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"></ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\">{{::usage.hours}}</ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\">{{::usage.passes}}</ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right show-sm\">{{::usage.price | ncurrency}}</ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right\">{{::usage.amount | ncurrency}}</ff-static> </ff-row> <ff-header ng-if=\"::day.creditsApplied.length\"><span translate=\"USAGE_TRACKING.CREDITS_APPLIED\"></span></ff-header> <ff-row ng-repeat=\"usage in ::day.creditsApplied\"> <ff-static flex=\"1 1 150px\" class=\"show-lg\">{{$ctrl.centers[usage.centerId].name}}</ff-static> <ff-static flex=\"1 1 200px\">{{$ctrl.products[usage.productId].name}}</ff-static> <ff-static flex=\"0 1 150px\" class=\"show-lg\">{{::usage.typeName}}</ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"></ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"></ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\">{{::usage.hours}}</ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\">{{::usage.passes}}</ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right show-sm\"></ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right\">{{::usage.amount | ncurrency}}</ff-static> </ff-row> <ff-row class=\"usage-to-charge\"> <ff-static flex=\"auto\" class=\"ff-right\"><strong translate=\"USAGE_TRACKING.USAGE_TO_CHARGE\"></strong></ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right\">{{::day.chargeAmount | ncurrency}}</ff-static> </ff-row> <ff-header ng-if=\"::day.closingBalance.length\"><span translate=\"USAGE_TRACKING.CLOSING_BALANCE\"></span></ff-header> <ff-row ng-repeat=\"usage in ::day.closingBalance\"> <ff-static flex=\"1 1 150px\" class=\"show-lg\">{{$ctrl.centers[usage.centerId].name}}</ff-static> <ff-static flex=\"1 1 200px\">{{$ctrl.products[usage.productId].name}}</ff-static> <ff-static flex=\"0 1 150px\" class=\"show-lg\">{{::usage.typeName}}</ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"></ff-static> <ff-static flex=\"0 0 68px\" class=\"show-md\"></ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\">{{::usage.hours}}</ff-static> <ff-static flex=\"0 0 64px\" class=\"ff-right\">{{::usage.passes}}</ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right show-sm\"></ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-right\">{{::usage.amount | ncurrency}}</ff-static> </ff-row> </ff-col> <ff-btn-group flex=\"0 0 auto\" class=\"zero-height buttons-row\"> <ff-btn sense=\"collapse\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-col> <ff-pagination props=\"$ctrl.usage\" ff-click=\"$ctrl.navPage($page)\" ng-if=\"$ctrl.usage.pageCount > 1\"></ff-pagination> </ff-panel> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/usage/view-usage/view-usage.controller.js":
/*!***********************************************************!*\
  !*** ./bundles/usage/view-usage/view-usage.controller.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_usage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-usage.scss */ "./bundles/usage/view-usage/view-usage.scss");
/* harmony import */ var _view_usage_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_view_usage_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ViewUsageCtrl', ['deskworks.memberUsageService', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name]).controller('ViewUsageCtrl', ["$scope", "$translate", "dwAlerts", "memberUsageList", "state", "helper", "user", "memberUsageService", function ($scope, $translate, dwAlerts, memberUsageList, state, helper, user, memberUsageService) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('MEMBER_USAGE.PAGE_TITLE', {
    userName: user.fullNameCompany
  }));
  $ctrl.memberUsageList = memberUsageList;
  $ctrl.inactiveCount = $ctrl.memberUsageList.reduce(function (prev, curr) {
    return curr.status === 'inactive' ? ++prev : prev;
  }, 0);
  /**
   * Navigate Page handler
   */

  $ctrl.navPage = function (memberUsage, $page) {
    return memberUsageService.get(state.getCurrentCenterId(), state.getCurrentUserId(), memberUsage.id, $page).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query member usages.');
    }).then(function (result) {
      return angular.copy(result, memberUsage);
    });
  };
  /**
   * Remove Pass Refill
   */


  $ctrl.delete = function (memberUsage, usage) {
    return memberUsageService.deletePassRefill(state.getCurrentCenterId(), state.getCurrentUserId(), memberUsage.id, usage.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to remove pass refill.');
    }).then(function (result) {
      return $ctrl.navPage(memberUsage, memberUsage.page);
    });
  };
}]));

/***/ }),

/***/ "./bundles/usage/view-usage/view-usage.scss":
/*!**************************************************!*\
  !*** ./bundles/usage/view-usage/view-usage.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/usage/view-usage/view-usage.tpl.html":
/*!******************************************************!*\
  !*** ./bundles/usage/view-usage/view-usage.tpl.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"view-usage\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel ng-if=\"$ctrl.inactiveCount\"> <label> <ff-checkbox name=\"show-inactive\" ff-model=\"$ctrl.showInactive\"> <span translate=\"MEMBER_USAGE.SHOW_INACTIVE\"></span> </ff-checkbox> </label> </ff-panel> <ff-panel ng-if=\"!$ctrl.memberUsageList.length || $ctrl.inactiveCount === $ctrl.memberUsageList.length && !$ctrl.showInactive\"> <span translate=\"MEMBER_USAGE.EMPTY\"></span> </ff-panel> <ff-panel ng-repeat=\"memberUsage in ::$ctrl.memberUsageList\" ng-if=\"memberUsage.status === 'active' || $ctrl.showInactive\"> <ff-panel-header> <div class=\"ff-grid ff-gutter-v-half\"> <span flex=\"{lg: '1 1 auto'}\">{{::memberUsage.productName}}</span> <span flex=\"{lg: '0 0 auto'}\">{{::memberUsage.passProductName}}</span> </div> </ff-panel-header> <ff-header class=\"pass-balance\"> <span translate=\"MEMBER_USAGE.PASS_BALANCE\" translate-values=\"{ passBalance: (memberUsage.passBalance | nd) }\"></span> </ff-header> <ff-header class=\"usage-header\" ng-if=\"::memberUsage.usages.length\"> <cell flex=\"0 1 18%\" class=\"ff-center\" translate=\"MEMBER_USAGE.DATE\"></cell> <cell flex=\"0 1 30%\" class=\"ff-center ff-col\" translate=\"MEMBER_USAGE.RESERVATION_DURATION\"></cell> <cell flex=\"0 1 30%\" class=\"ff-center ff-col\" translate=\"MEMBER_USAGE.USAGE_DURATION\"></cell> <cell flex=\"0 1 30%\" class=\"ff-center ff-col\" translate=\"MEMBER_USAGE.BILLING\"></cell> <cell flex=\"0 1 72px\" class=\"ff-center show-sm\" ng-if=\"::!memberUsage.isBucket\" translate=\"MEMBER_USAGE.IS_BILLED\"></cell> <ff-btn-group flex=\"0 0 auto\" class=\"zero-height\"> <ff-btn sense=\"collapse\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-header> <ff-static class=\"ff-no-frame\" ng-if=\"::!memberUsage.usages.length\"> <span translate=\"GLOBAL.NONE\"></span> </ff-static> <ff-col ng-repeat=\"usage in memberUsage.usages\" ng-init=\"usage.collapsed = true\"> <ff-row ng-class=\"{active: !usage.collapsed}\" ff-click=\"usage.collapsed = !usage.collapsed\" ng-if=\"!usage.passIncome\"> <ff-static flex=\"0 1 18%\" class=\"ff-center\" ff-bind=\"::usage.date | date:'mediumDate'\"></ff-static> <ff-static flex=\"0 1 30%\" class=\"ff-center\" ff-bind=\"::(usage.reservationDurationHours | nd) + ' / ' + (usage.reservationDurationUnits | nd)\"></ff-static> <ff-static flex=\"0 1 30%\" class=\"ff-center\" ff-bind=\"::(usage.usageDurationHours | nd) + ' / ' + (usage.usageDurationUnits | nd)\"></ff-static> <ff-static flex=\"0 1 30%\" class=\"ff-center\" ff-bind=\"::(usage.billingAmount | ncurrency) + ' / ' + (usage.billingPasses || 0)\"></ff-static> <ff-static flex=\"0 1 72px\" class=\"ff-center show-sm\" ff-bind=\"::usage.isBilled | yesno\" ng-if=\"::!memberUsage.isBucket\"></ff-static> <ff-btn-group flex=\"0 0 auto\"> <ff-btn sense=\"collapse\" size=\"xs\" ng-class=\"{ collapsed: usage.collapsed }\" ff-click=\"usage.collapsed = !usage.collapsed\" title=\"{{'MEMBER_USAGE.BTN_COLLAPSE.HINT' | translate}}\"> </ff-btn> </ff-btn-group> </ff-row> <ff-row ng-collapse=\"usage.collapsed\" ng-if=\"!usage.passIncome\"> <ff-col> <div class=\"ff-grid gutter-h-half\"> <div flex=\"{lg: '0 0 50%'}\" class=\"log-container\"> <ff-col> <ff-col> <ff-header class=\"log-block-header\"><span translate=\"MEMBER_USAGE.RESERVATION_LOG\"></span></ff-header> <ff-header class=\"log-header\" ng-if=\"::usage.reservationLog.length\"> <ff-row> <span class=\"show-xs\" translate=\"MEMBER_USAGE.FROM\"></span> <span class=\"show-xs\" translate=\"MEMBER_USAGE.TO\"></span> <span class=\"ff-center\" translate=\"MEMBER_USAGE.DURATION_HOURS\"></span> <span class=\"ff-center\" translate=\"MEMBER_USAGE.DURATION_PASSES\"></span> <span class=\"ff-right\" translate=\"MEMBER_USAGE.AMOUNT\"></span> </ff-row> </ff-header> <ff-row ng-repeat=\"log in ::usage.reservationLog\"> <ff-static class=\"show-xs\"><span nice-time=\"::log.startTime\"></span></ff-static> <ff-static class=\"show-xs\"><span nice-time=\"::log.endTime\"></span></ff-static> <ff-static class=\"ff-center\" ff-bind=\"::log.durationHours\"></ff-static> <ff-static class=\"ff-center\" ff-bind=\"::log.durationUnits\"></ff-static> <ff-static class=\"ff-right\" ff-bind=\"::log.amount | ncurrency\"></ff-static> </ff-row> <ff-static ng-if=\"::!usage.reservationLog.length\" class=\"ff-no-frame\"> <span translate=\"GLOBAL.NONE\"></span> </ff-static> </ff-col> </ff-col> </div> <div flex=\"{lg: '0 0 50%'}\" class=\"log-container\"> <ff-col> <ff-col> <ff-header class=\"log-block-header\"><span translate=\"MEMBER_USAGE.USAGE_LOG\"></span></ff-header> <ff-header class=\"log-header\" ng-if=\"::usage.checkInLog.length\"> <ff-row> <span class=\"show-xs\" translate=\"MEMBER_USAGE.FROM\"></span> <span class=\"show-xs\" translate=\"MEMBER_USAGE.TO\"></span> <span class=\"ff-center\" translate=\"MEMBER_USAGE.DURATION_HOURS\"></span> <span class=\"ff-center\" translate=\"MEMBER_USAGE.DURATION_PASSES\"></span> <span class=\"ff-right\" translate=\"MEMBER_USAGE.AMOUNT\"></span> </ff-row> </ff-header> <ff-row ng-repeat=\"log in ::usage.checkInLog\"> <ff-static class=\"show-xs\"><span nice-time=\"::log.startTime\"></span></ff-static> <ff-static class=\"show-xs\"><span nice-time=\"::log.endTime\"></span></ff-static> <ff-static class=\"ff-center\" ff-bind=\"::log.durationHours\"></ff-static> <ff-static class=\"ff-center\" ff-bind=\"::log.durationUnits\"></ff-static> <ff-static class=\"ff-right\" ff-bind=\"::log.amount | ncurrency\"></ff-static> </ff-row> <ff-static ng-if=\"::!usage.checkInLog.length\" class=\"ff-no-frame\"> <span translate=\"GLOBAL.NONE\"></span> </ff-static> </ff-col> </ff-col> </div> </div> </ff-col> <ff-btn-group flex=\"0 0 auto\" class=\"zero-height\"> <ff-btn sense=\"collapse\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> <ff-row ng-if=\"usage.passIncome\"> <ff-static flex=\"0 1 25%\" ff-bind=\"::usage.date | date:'mediumDate'\"></ff-static> <ff-label flex=\"0 1 75%\" class=\"ff-right em\">{{'+' + usage.passIncome | passes}}</ff-label> <ff-static flex=\"0 1 15px\"></ff-static> <ff-static flex=\"0 1 72px\" class=\"ff-center\" ng-if=\"::!memberUsage.isBucket\">-</ff-static> <ff-btn-group flex=\"0 0 auto\"> <ff-btn sense=\"remove\" size=\"xs\" ff-click=\"$ctrl.delete(memberUsage, usage)\"> <span translate=\"GLOBAL.BTN_DELETE\"></span> </ff-btn> </ff-btn-group> </ff-row> </ff-col> <ff-pagination props=\"memberUsage\" ff-click=\"$ctrl.navPage(memberUsage, $page)\" ng-if=\"memberUsage.pageCount > 1\"></ff-pagination> </ff-panel> </div> </div> ";
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

/***/ }),

/***/ "./shared/services/usage/manual-check-in-log.service.js":
/*!**************************************************************!*\
  !*** ./shared/services/usage/manual-check-in-log.service.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ManualCheckInLog', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('ManualCheckInLog', ["$resource", "$filter", "$timeout", "deskworksConfig", "datesDeserializer", function ($resource, $filter, $timeout, deskworksConfig, datesDeserializer) {
  var desDates = datesDeserializer(['log.time']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/manual-check-in-logs/:logId'), {}, {
    get: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    /**
     * @param params.centerId
     * @param params.userId
     * @param params.page
     * @param params.pageSize
     * @param params.macAddress
     * @returns {*}
     */
    get: function get(params) {
      var centerId = params.centerId,
          userId = params.userId,
          page = params.page,
          pageSize = params.pageSize,
          macAddress = params.macAddress;
      return res.get({
        centerId: centerId,
        userId: userId,
        page: page,
        pageSize: pageSize,
        macAddress: macAddress
      }).$promise;
    },

    /**
     * @param params.centerId
     * @param params.userId
     * @param params.logId
     * @returns {*}
     */
    delete: function _delete(params) {
      var centerId = params.centerId,
          userId = params.userId,
          logId = params.logId;
      return res.delete({
        centerId: centerId,
        userId: userId,
        logId: logId
      }).$promise;
    },

    /**
     * @param params.centerId
     * @param params.userId
     * @param params.recurringId
     * @param params.checkedIn
     * @param params.time
     * @returns {*}
     */
    save: function save(params) {
      var centerId = params.centerId,
          userId = params.userId,
          recurringId = params.recurringId,
          checkedIn = params.checkedIn,
          time = params.time;
      return res.save({
        centerId: centerId,
        userId: userId
      }, {
        recurringId: recurringId,
        checkedIn: checkedIn,
        time: $filter('date')(time, 'iso')
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./shared/services/usage/opts-credit-type.service.js":
/*!***********************************************************!*\
  !*** ./shared/services/usage/opts-credit-type.service.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Usage -> View Usage -> Source
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsCreditType', []).factory('optsCreditType', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 'reservation',
    _name: 'USAGE_TRACKING.CREDIT_TYPE.RESERVATION'
  }, {
    id: 'pass',
    _name: 'USAGE_TRACKING.CREDIT_TYPE.PASS'
  }, {
    id: 'bucket',
    _name: 'USAGE_TRACKING.CREDIT_TYPE.BUCKET'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $translate.instant(opt._name);
    });
  }

  return opts;
}]));

/***/ }),

/***/ "./shared/services/usage/opts-usage-source.service.js":
/*!************************************************************!*\
  !*** ./shared/services/usage/opts-usage-source.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Usage -> View Usage -> Source
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsUsageSource', []).factory('optsUsageSource', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 'reservation',
    _name: 'USAGE_TRACKING.SOURCE.RESERVATION'
  }, {
    id: 'network',
    _name: 'USAGE_TRACKING.SOURCE.NETWORK'
  }, {
    id: 'manual',
    _name: 'USAGE_TRACKING.SOURCE.MANUAL'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $translate.instant(opt._name);
    });
  }

  return opts;
}]));

/***/ }),

/***/ "./shared/services/usage/usage-tracking.service.js":
/*!*********************************************************!*\
  !*** ./shared/services/usage/usage-tracking.service.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_services_usage_opts_usage_source_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/usage/opts-usage-source.service */ "./shared/services/usage/opts-usage-source.service.js");
/* harmony import */ var shared_services_usage_opts_credit_type_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/usage/opts-credit-type.service */ "./shared/services/usage/opts-credit-type.service.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.UsageTracking', ['ngResource', 'deskworks.config', 'datesDeserializer', shared_services_usage_opts_usage_source_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_services_usage_opts_credit_type_service__WEBPACK_IMPORTED_MODULE_9__["default"].name]).factory('UsageTracking', ["$resource", "$filter", "$timeout", "deskworksConfig", "helper", "datesDeserializer", "optsUsageSource", "optsCreditType", function ($resource, $filter, $timeout, deskworksConfig, helper, datesDeserializer, optsUsageSource, optsCreditType) {
  var desDates = datesDeserializer(['days.date', 'days.usages.from', 'days.usages.to']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/usage-tracking/:usageId'), {}, {
    query: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    /**
     * @param params.centerId
     * @param params.userId
     * @param params.page
     * @param params.pageSize
     * @returns {*}
     */
    query: function query(params) {
      return res.query(_objectSpread({
        page: 1,
        pageSize: 20
      }, params)).$promise.then(function (result) {
        angular.forEach(result.days, function (day) {
          day.usages.forEach(function (usage) {
            usage.sourceName = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default()(optsUsageSource).call(optsUsageSource, function (i) {
              return i.id === usage.sourceId;
            }) || {}).name || usage.sourceId;
          });
          day.usageAmount = helper.round(day.usageTotals.reduce(function (sum, usage) {
            return +usage.amount + sum;
          }, 0));
          day.appliedAmount = helper.round(day.creditsApplied.reduce(function (sum, credit) {
            return +credit.amount + sum;
          }, 0));
          setCreditType(day.openingBalance);
          setCreditType(day.creditsApplied);
          setCreditType(day.closingBalance);
        });
        return result;
      });
    },

    /**
     * @param params.centerId
     * @param params.userId
     * @param params.usageId
     * @returns {*}
     */
    delete: function _delete(params) {
      return res.delete(params).$promise;
    }
  };

  function setCreditType(credits) {
    credits.forEach(function (credit) {
      if (angular.isDefined(credit.passes)) {
        credit.typeId = 'pass';
      } else if (angular.isDefined(credit.bucketPasses)) {
        credit.typeId = 'bucket';
        credit.passes = credit.bucketPasses;
        delete credit.bucketPasses;
      } else credit.typeId = 'reservation';

      credit.typeName = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default()(optsCreditType).call(optsCreditType, function (i) {
        return i.id === credit.typeId;
      }) || {}).name;
    });
  }
}]));

/***/ })

}]);
//# sourceMappingURL=usage~._b.js.map?_rev=3a0f71832b290220c688