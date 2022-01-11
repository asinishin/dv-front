(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["termination-request~._bundles_termination-request "],{

/***/ "./bundles/termination-request sync recursive .*\\.tpl\\.html$":
/*!*********************************************************!*\
  !*** ./bundles/termination-request sync .*\.tpl\.html$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./termination-request/termination-request.tpl.html": "./bundles/termination-request/termination-request/termination-request.tpl.html"
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
webpackContext.id = "./bundles/termination-request sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/termination-request sync recursive \\..+\\/.+\\.js$":
/*!********************************************************!*\
  !*** ./bundles/termination-request sync \..+\/.+\.js$ ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./termination-request/termination-request.controller.js": "./bundles/termination-request/termination-request/termination-request.controller.js",
	"./termination-request/termination-request.service.js": "./bundles/termination-request/termination-request/termination-request.service.js"
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
webpackContext.id = "./bundles/termination-request sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/termination-request/index.js":
/*!**********************************************!*\
  !*** ./bundles/termination-request/index.js ***!
  \**********************************************/
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

  var js = importAll(__webpack_require__("./bundles/termination-request sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/termination-request sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/termination-request/termination-request/termination-request.controller.js":
/*!*******************************************************************************************!*\
  !*** ./bundles/termination-request/termination-request/termination-request.controller.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.TerminationRequestCtrl', ['deskworks.state', 'deskworks.TerminationRequest', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name]).controller('TerminationRequestCtrl', ["$scope", "$timeout", "$translate", "$q", "$filter", "dwAlerts", "state", "helper", "recurringCharges", "TerminationRequest", function ($scope, $timeout, $translate, $q, $filter, dwAlerts, state, helper, recurringCharges, TerminationRequest) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('TERMINATION_REQUEST.PAGE_TITLE'));
  $ctrl.noticeDate = moment();

  $ctrl.getToday = function () {
    return moment();
  };

  $ctrl.recurringCharges = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(recurringCharges).call(recurringCharges, function (product) {
    return product.status.id === 'active' && product.billingFrequency !== 'asNeeded';
  });
  $ctrl.recurringCharge = $ctrl.recurringCharges[0];
  $ctrl.terminateMembership = true;
  $ctrl.terminateCoMembers = true;
  $ctrl.terminateRecurringCharges = true;
  /**
   * Get data for Your Termination Requests list
   */

  $ctrl.fetchRequests = function () {
    return TerminationRequest.query(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query termination requests.');
    }).then(function (result) {
      $ctrl.terminationRequests = result;
      $ctrl.terminationRequests.forEach(function (request) {
        request.chargeProductName = getProductName(request);
      });
    });
  };

  $ctrl.fetchRequests();
  /**
   * Calculate terminationDate
   */

  $ctrl.calcTerminationDate = function () {
    if (!$ctrl.noticeDate) return;
    var days = $ctrl.recurringCharge && $ctrl.recurringCharge.noticePeriod || 30;
    $ctrl.terminationDate = $ctrl.noticeDate.clone().add(days, 'd');
  };

  $ctrl.calcTerminationDate($ctrl.noticeDate);
  /**
   * Submit termination request
   */

  $ctrl.terminate = function () {
    if (helper.pointFirstInvalid('#terminationRequest')) return;
    var data = {
      recurringChargeId: $ctrl.recurringCharge.id,
      noticeDate: $filter('date')($ctrl.noticeDate, 'yyyy-MM-dd'),
      reason: $ctrl.reason,
      terminateMembership: $ctrl.terminateMembership,
      terminateCoMembers: $ctrl.terminateCoMembers,
      terminateRecurringCharges: $ctrl.terminateRecurringCharges
    };
    return TerminationRequest.create(state.getCurrentCenterId(), state.getCurrentUserId(), data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save termination request.');
    }).then(function () {
      return $ctrl.fetchRequests();
    });
  };
  /**
   * Get product name of the recurring charge
   */


  function getProductName(request) {
    return (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(recurringCharges).call(recurringCharges, function (charge) {
      return charge.id === request.recurringChargeId;
    }) || {}).productName;
  }
}]));

/***/ }),

/***/ "./bundles/termination-request/termination-request/termination-request.service.js":
/*!****************************************************************************************!*\
  !*** ./bundles/termination-request/termination-request/termination-request.service.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * TerminationRequest - service for termination of user recurring billings
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.TerminationRequest', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('TerminationRequest', ["$resource", "deskworksConfig", "datesDeserializer", function ($resource, deskworksConfig, datesDeserializer) {
  var desDates = datesDeserializer(['createdAt', 'noticeDate']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/termination-requests'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    },
    save: {
      method: 'POST'
    }
  });
  return {
    query: function query(centerId, userId) {
      return res.query({
        centerId: centerId,
        userId: userId
      }).$promise;
    },
    create: function create(centerId, userId, data) {
      return res.save({
        centerId: centerId,
        userId: userId
      }, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/termination-request/termination-request/termination-request.tpl.html":
/*!**************************************************************************************!*\
  !*** ./bundles/termination-request/termination-request/termination-request.tpl.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"terminationRequest\" novalidate ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v\"> <ff-panel style=\"max-width:838px\"> <div class=\"ff-grid\"> <ff-label flex=\"{sm: 'none'}\"><span translate=\"TERMINATION_REQUEST.NOTICE.DATE\"></span></ff-label> <ff-date flex=\"{sm: 'auto', md: '0 1 120px'}\" name=\"noticeDate\" ff-model=\"$ctrl.noticeDate\" ff-date-order=\"{ early: $ctrl.getToday(), late: $ctrl.noticeDate }\" ff-validate-alert=\"{ field: 'Selected date', early: 'today or today' }\" ff-change=\"$ctrl.calcTerminationDate()\"></ff-date> <ff-label flex=\"{md: '1 1 230px'}\"><span translate=\"TERMINATION_REQUEST.NOTICE.TERMINATE\"></span></ff-label> <ff-row flex=\"{md: '50 1 120px'}\"> <ff-select name=\"charge\" ff-model=\"$ctrl.recurringCharge\" ff-required=\"true\" ff-options=\"charge.productName for charge in $ctrl.recurringCharges\" ff-change=\"$ctrl.calcTerminationDate()\" ff-validate-alert=\"{{'TERMINATION_REQUEST.REQUESTS_LIST.RECURRING_BILLING' | translate}}\"></ff-select> </ff-row> </div> <label class=\"ff-row\"> <ff-label flex=\"0 0 80px\"> <req translate=\"TERMINATION_REQUEST.NOTICE.REASON\"></req> </ff-label> <ff-text ff-model=\"$ctrl.reason\" ff-required=\"true\" ff-validate-alert=\"{{'TERMINATION_REQUEST.NOTICE.REASON' | translate}}\"></ff-text> </label> <ff-label> <span> <span translate=\"TERMINATION_REQUEST.NOTICE.TERMINATE_FROM_DATE\"></span> <b>{{$ctrl.terminationDate | date:'mediumDate'}}.</b> </span> </ff-label> <ff-label> <span translate=\"TERMINATION_REQUEST.TERMINATE_ADDITION\"></span> </ff-label> <ff-static class=\"ff-no-frame\"> <ff-col> <label> <ff-checkbox name=\"terminateMembership\" ff-model=\"$ctrl.terminateMembership\"> <span translate=\"TERMINATION_REQUEST.TERMINATE_ADDITION.MY_MEMBERSHIP\"></span> </ff-checkbox> </label> <label> <ff-checkbox name=\"terminateCoMembers\" ff-model=\"$ctrl.terminateCoMembers\"> <span translate=\"TERMINATION_REQUEST.TERMINATE_ADDITION.MY_CO_MEMBERS\"></span> </ff-checkbox> </label> <label> <ff-checkbox name=\"terminateRecurringCharges\" ff-model=\"$ctrl.terminateRecurringCharges\"> <span translate=\"TERMINATION_REQUEST.TERMINATE_ADDITION.MY_OTHER_RECURRING_CHARGES\"></span> </ff-checkbox> </label> </ff-col> </ff-static> </ff-panel> <ff-btn-group> <ff-btn type=\"submit\" sense=\"delete\" ff-click=\"$ctrl.terminate()\"> <span translate=\"TERMINATION_REQUEST.TERMINATE\"></span> </ff-btn> </ff-btn-group> <ff-panel ng-if=\"$ctrl.terminationRequests\"> <ff-panel-header><span translate=\"TERMINATION_REQUEST.REQUESTS_LIST.HEADER\"></span></ff-panel-header> <ff-header> <ff-row> <cell flex=\"1 0 12%\"><span translate=\"TERMINATION_REQUEST.REQUESTS_LIST.CREATED\"></span></cell> <cell flex=\"1 0 17%\"><span translate=\"TERMINATION_REQUEST.REQUESTS_LIST.RECURRING_BILLING\"></span></cell> <cell flex=\"1 0 15%\" class=\"ff-center\"><span translate=\"TERMINATION_REQUEST.REQUESTS_LIST.NOTICE_DATE\"></span></cell> <cell flex=\"1 0 28%\" class=\"ff-center show-md\"><span translate=\"TERMINATION_REQUEST.NOTICE.REASON\"></span></cell> <cell flex=\"1 0 25%\" class=\"ff-center show-sm\"><span translate=\"TERMINATION_REQUEST.TERMINATE\"></span></cell> </ff-row> </ff-header> <ff-row ng-repeat=\"request in $ctrl.terminationRequests\"> <ff-static flex=\"1 0 12%\"> <ff-col> <div> <span ng-bind=\"::request.createdAt | date:'mediumDate'\"></span> <div nice-time=\"::request.createdAt\"></div> </div> <div> <small>by&nbsp;<b>{{request.createdBy}}</b></small> </div> </ff-col> </ff-static> <ff-static flex=\"1 0 17%\" ff-bind=\"::request.chargeProductName\"></ff-static> <ff-static flex=\"1 0 15%\" class=\"ff-center\" ff-bind=\"::request.noticeDate | date:'mediumDate'\"></ff-static> <ff-static flex=\"1 0 28%\" class=\"ff-center show-md\" ff-bind=\"::request.reason\"></ff-static> <ff-static flex=\"1 0 25%\" class=\"ff-center show-sm\"> <ff-col> <div> <span translate=\"TERMINATION_REQUEST.REQUESTS_LIST.MEMBERSHIP\"></span>:&nbsp; <b><span ng-bind=\"::request.terminateMembership | yesno\"></span></b> </div> <div> <span translate=\"TERMINATION_REQUEST.REQUESTS_LIST.CO_MEMBERS\"></span>:&nbsp; <b><span ng-bind=\"::request.terminateCoMembers | yesno\"></span></b> </div> <div> <span translate=\"TERMINATION_REQUEST.REQUESTS_LIST.ALL_RECURRING\"></span>:&nbsp; <b><span ng-bind=\"::request.terminateRecurringCharges | yesno\"></span></b> </div> </ff-col> </ff-static> </ff-row> </ff-panel> </div> </form> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=termination-request~._bundles_termination-request .js.map?_rev=c3ef78864f2e167cbfbd