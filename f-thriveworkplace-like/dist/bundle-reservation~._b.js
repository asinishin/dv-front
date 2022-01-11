(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bundle-reservation~._b"],{

/***/ "./bundles/bundle-reservation sync recursive .*\\.tpl\\.html$":
/*!********************************************************!*\
  !*** ./bundles/bundle-reservation sync .*\.tpl\.html$ ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./steps/bundle-reservation-complete-member.tpl.html": "./bundles/bundle-reservation/steps/bundle-reservation-complete-member.tpl.html",
	"./steps/bundle-reservation-complete.tpl.html": "./bundles/bundle-reservation/steps/bundle-reservation-complete.tpl.html",
	"./steps/bundle-reservation-confirm.tpl.html": "./bundles/bundle-reservation/steps/bundle-reservation-confirm.tpl.html",
	"./steps/bundle-reservation-purchase.tpl.html": "./bundles/bundle-reservation/steps/bundle-reservation-purchase.tpl.html"
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
webpackContext.id = "./bundles/bundle-reservation sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/bundle-reservation sync recursive \\..+\\/.+\\.js$":
/*!*******************************************************!*\
  !*** ./bundles/bundle-reservation sync \..+\/.+\.js$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./services/bundle-reservation-purchase.service.js": "./bundles/bundle-reservation/services/bundle-reservation-purchase.service.js",
	"./services/bundle-reservation.service.js": "./bundles/bundle-reservation/services/bundle-reservation.service.js",
	"./steps/bundle-reservation-billing.controller.js": "./bundles/bundle-reservation/steps/bundle-reservation-billing.controller.js",
	"./steps/bundle-reservation-complete.controller.js": "./bundles/bundle-reservation/steps/bundle-reservation-complete.controller.js",
	"./steps/bundle-reservation-confirm.controller.js": "./bundles/bundle-reservation/steps/bundle-reservation-confirm.controller.js",
	"./steps/bundle-reservation-purchase.controller.js": "./bundles/bundle-reservation/steps/bundle-reservation-purchase.controller.js",
	"./steps/bundle-reservation-sign-in.controller.js": "./bundles/bundle-reservation/steps/bundle-reservation-sign-in.controller.js",
	"./steps/bundle-reservation-staff-help.controller.js": "./bundles/bundle-reservation/steps/bundle-reservation-staff-help.controller.js",
	"./steps/bundle-reservation-user-profile.controller.js": "./bundles/bundle-reservation/steps/bundle-reservation-user-profile.controller.js"
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
webpackContext.id = "./bundles/bundle-reservation sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/bundle-reservation/index.js":
/*!*********************************************!*\
  !*** ./bundles/bundle-reservation/index.js ***!
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
/* harmony import */ var shared_staff_help_staff_help_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/staff-help/staff-help.controller */ "./shared/staff-help/staff-help.controller.js");
/* harmony import */ var shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/staff-help/staff-help.tpl.html */ "./shared/staff-help/staff-help.tpl.html");
/* harmony import */ var shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/templates/new-user-profile.tpl.html */ "./shared/templates/new-user-profile.tpl.html");
/* harmony import */ var shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_templates_new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/templates/new-billing-profile.tpl.html */ "./shared/templates/new-billing-profile.tpl.html");
/* harmony import */ var shared_templates_new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shared_templates_new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_8__);









var index = ['$injector', function index($injector) {
  // JS
  var importAll = function importAll(r) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(r).call(r)).call(_context, r);
  };

  var js = importAll(__webpack_require__("./bundles/bundle-reservation sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/bundle-reservation sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });

    $templateCache.put('staff-help/staff-help.tpl.html', shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_6___default.a);
    $templateCache.put('templates/new-user-profile.tpl.html', shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_7___default.a);
    $templateCache.put('templates/new-billing-profile.tpl.html', shared_templates_new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_8___default.a);
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/bundle-reservation/services/bundle-reservation-purchase.service.js":
/*!************************************************************************************!*\
  !*** ./bundles/bundle-reservation/services/bundle-reservation-purchase.service.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * BundleReservationPurchase resource
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bundleReservation.BundleReservationPurchase', ['ngResource', 'deskworks.config']).factory('BundleReservationPurchase', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  'use strict';

  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId');
  return $resource(url, {
    centerId: '@centerId',
    userId: '@userId',
    reservationBundleId: '@reservationBundleId',
    reservation: true
  }, {
    save: {
      method: 'POST'
    }
  });
}]));

/***/ }),

/***/ "./bundles/bundle-reservation/services/bundle-reservation.service.js":
/*!***************************************************************************!*\
  !*** ./bundles/bundle-reservation/services/bundle-reservation.service.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Bundle Reservation resource
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bundleReservation.BundleReservation', ['ngResource', 'deskworks.config']).factory('BundleReservation', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  'use strict';

  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/reservations/:reservationId');
  return $resource(url, {
    centerId: '@centerId',
    userId: '@userId',
    reservationBundleId: '@reservationBundleId'
  }, {
    save: {
      method: 'POST'
    }
  });
}]));

/***/ }),

/***/ "./bundles/bundle-reservation/steps/bundle-reservation-billing.controller.js":
/*!***********************************************************************************!*\
  !*** ./bundles/bundle-reservation/steps/bundle-reservation-billing.controller.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/new-billing-profile/new-billing-profile.directive */ "./shared/new-billing-profile/new-billing-profile.directive.js");







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bundleReservation.billing', ['ngRoute', 'deskworks.userProfile.service', 'deskworks.purchase.service', 'deskworks.bundleReservation.BundleReservation', 'deskworks.bundleReservation.BundleReservationPurchase', 'deskworks.routeHelper', 'deskworks.helper', shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name]).controller('BundleReservationBillingCtrl', ["$scope", "$route", "$translate", "dwAlerts", "helper", "state", "userProfile", "reg", "userProfileService", "purchaseService", "BundleReservation", "settings", function ($scope, $route, $translate, dwAlerts, helper, state, userProfile, reg, userProfileService, purchaseService, BundleReservation, settings) {
  var _context;

  var vm = this;
  vm.userProfile = userProfile;
  vm.reg = reg;
  vm.settings = settings; // filter credit card types according to settings

  settings.creditCardTypes = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(_context = settings.creditCardTypes).call(_context, function (ccType) {
    return ccType.enable;
  });
  vm.userProfile.creditCards.forEach(function (cc) {
    cc.type = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(helper).call(helper, settings.creditCardTypes, cc.type) || cc.type || {};
  });
  state.setPageTitle($translate.instant('BILLING_PROFILE.PAGE_TITLE', {
    userName: helper.join([vm.userProfile.firstName, vm.userProfile.lastName], ' ')
  })); // Require at least one CC or ACH

  vm.userProfile.creditCards = vm.userProfile.creditCards || [];

  if (!vm.userProfile.creditCards.length && !vm.userProfile.eChecks.length) {
    var cc = userProfileService.creditCard.new(vm.userProfile);
    cc.type = settings.creditCardTypes[0];
    vm.userProfile.creditCards.push(cc);
  }
  /**
   * Bind test user data generator
   */


  userProfileService.bindTestBillingGenerator($scope, vm.userProfile, vm.reg);

  vm.addCC = function () {
    var cc = userProfileService.creditCard.new(vm.userProfile);
    vm.userProfile.creditCards = [cc];
    vm.userProfile.eChecks = [];
  };

  vm.addECheck = function () {
    var check = userProfileService.eCheck.new(vm.userProfile);
    vm.userProfile.eChecks = [check];
    vm.userProfile.creditCards = [];
  };

  vm.showSwitchButton = function () {
    var cc = !vm.userProfile.creditCards[0] || userProfileService.creditCard.isNew(vm.userProfile.creditCards[0]);
    var ec = !vm.userProfile.eChecks[0] || userProfileService.eCheck.isNew(vm.userProfile.eChecks[0]);
    return cc && ec && vm.settings.enableEChecks;
  };
  /**
   * Next button handler
   */


  vm.next = function () {
    if (helper.pointFirstInvalid('#simpleReservationBilling')) return;
    return userProfileService.saveBillingProfile(state.getCurrentCenterId(), vm.userProfile).then(function () {
      var params = {
        centerId: state.getCurrentCenterId(),
        userId: state.getCurrentUserId(),
        reservationBundleId: $route.current.params.reservationBundleId
      };
      return BundleReservation.save(params).$promise.catch(function (err) {
        return dwAlerts.error(err, 'Failed to make reservation.');
      }).then(function (reservation) {
        return purchaseService.createPayment(state.getCurrentCenterId(), state.getCurrentUserId(), $route.current.params.purchaseId, {}).catch(function (err) {
          return dwAlerts.error(err, 'Failed to make payment.');
        }).then(function () {
          return state.setPath(state.getPath() + '/complete');
        });
      });
    });
  };
  /**
   * Staff Help button handler
   */


  vm.staffHelp = function () {
    return purchaseService.createStaffHelp(state.getCurrentCenterId(), state.getCurrentUserId(), $route.current.params.purchaseId).catch(function (err) {
      return dwAlerts.error(err, 'Failed to create staff help.');
    }).then(function (result) {
      state.setParam('notice', result.notice);
      return state.setPath(state.getPath().replace(/\/billing$/, '/staff-help'));
    });
  };
  /**
   * Back button handler
   */


  vm.back = state.back;
}]));

/***/ }),

/***/ "./bundles/bundle-reservation/steps/bundle-reservation-complete-member.tpl.html":
/*!**************************************************************************************!*\
  !*** ./bundles/bundle-reservation/steps/bundle-reservation-complete-member.tpl.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form id=\"bundleReservationComplete\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-btn-group class=\"buttons-bottom\" ng-class=\"{'ff-center': !vm.purchase}\"> <ff-btn sense=\"home\" type=\"submit\" ff-click=\"vm.home()\"><span translate=\"GLOBAL.BTN_HOME\"></span></ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/bundle-reservation/steps/bundle-reservation-complete.controller.js":
/*!************************************************************************************!*\
  !*** ./bundles/bundle-reservation/steps/bundle-reservation-complete.controller.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice.directive */ "./shared/dw-invoice/dw-invoice.directive.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bundleReservation.complete', [shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name]).controller('BundleReservationCompleteCtrl', ["$scope", "$translate", "dwAlerts", "state", "helper", "deskworksConfig", "center", "purchase", function ($scope, $translate, dwAlerts, state, helper, deskworksConfig, center, purchase) {
  var vm = this;
  vm.center = center;
  vm.purchase = purchase;
  state.setPageTitle($translate.instant('SIMPLE_RES.COMPLETE.PAGE_TITLE'));
  /**
   * Prevent using Back button
   */

  $scope.$on('$routeChangeStart', function (event, next, current) {
    if (next.$$route && (next.$$route.controller === 'BundleReservationConfirmCtrl' || next.$$route.controller === 'BundleReservationBillingCtrl')) {
      dwAlerts.error($translate.instant('SIMPLE_RES.COMPLETE.BACK_ERROR'));
      event.preventDefault();
    }
  });
  /**
   * Back to Home Page button handler
   */

  vm.home = function () {
    state.resetParams();
    return state.setPath(deskworksConfig.getDefaultRoute());
  };
}]));

/***/ }),

/***/ "./bundles/bundle-reservation/steps/bundle-reservation-complete.tpl.html":
/*!*******************************************************************************!*\
  !*** ./bundles/bundle-reservation/steps/bundle-reservation-complete.tpl.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"bundleReservationComplete\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-board> <ff-panel> <ff-panel-header> <span translate=\"SIMPLE_RES.COMPLETE.ORDER.HEADER\" translate-values=\"{ orderId: vm.purchase.orderId }\"></span> </ff-panel-header> <dw-invoice invoice=\"vm.purchase\" center=\"vm.center\" allow-remove=\"false\"></dw-invoice> </ff-panel> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"home\" type=\"submit\" ff-click=\"vm.home()\"><span translate=\"GLOBAL.BTN_HOME\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/bundle-reservation/steps/bundle-reservation-confirm.controller.js":
/*!***********************************************************************************!*\
  !*** ./bundles/bundle-reservation/steps/bundle-reservation-confirm.controller.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bundleReservation.confirm', ['deskworks.bundleReservation.BundleReservation']).controller('BundleReservationConfirmCtrl', ["$scope", "$route", "$translate", "BundleReservation", "helper", "state", "dwAlerts", function ($scope, $route, $translate, BundleReservation, helper, state, dwAlerts) {
  'use strict';

  var vm = this;
  state.setPageTitle($translate.instant('RESERVATIONS.CONFIRM.PAGE_TITLE'));
  /**
   * Back button handler
   */

  vm.back = state.back;
  /**
   * Next button handler (make reservation without payment only if logged user is member or admin)
   */

  vm.next = function () {
    if (state.isLoggedMember() || state.isLoggedAdmin()) {
      var params = {
        centerId: state.getCurrentCenterId(),
        userId: state.getCurrentUserId(),
        reservationBundleId: $route.current.params.reservationBundleId
      };
      return BundleReservation.save(params).$promise.catch(function (err) {
        return dwAlerts.error(err, 'Failed to make reservation.');
      }).then(function () {
        return state.setPath(state.getPath().replace(/\/confirm$/, '/complete'));
      });
    } else {
      return dwAlerts.error('Failed to make reservation without payment for non-member.');
    }
  };
}]));

/***/ }),

/***/ "./bundles/bundle-reservation/steps/bundle-reservation-confirm.tpl.html":
/*!******************************************************************************!*\
  !*** ./bundles/bundle-reservation/steps/bundle-reservation-confirm.tpl.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"formBundleReservationConfirm\" id=\"bundleReservationConfirm\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"next\" type=\"submit\" ff-click=\"vm.next()\"><span translate=\"GLOBAL.BTN_CONFIRM\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/bundle-reservation/steps/bundle-reservation-purchase.controller.js":
/*!************************************************************************************!*\
  !*** ./bundles/bundle-reservation/steps/bundle-reservation-purchase.controller.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_need_help_need_help_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/need-help/need-help.directive */ "./shared/need-help/need-help.directive.js");
/* harmony import */ var _shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/dw-invoice/dw-invoice.directive */ "./shared/dw-invoice/dw-invoice.directive.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bundleReservation.purchase', ['ngRoute', 'deskworks.helper', 'deskworks.purchase.service', shared_need_help_need_help_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, _shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name]).controller('BundleReservationPurchaseCtrl', ["$scope", "$route", "$translate", "dwAlerts", "helper", "state", "reg", "center", "purchase", "purchaseService", function ($scope, $route, $translate, dwAlerts, helper, state, reg, center, purchase, purchaseService) {
  var $ctrl = this;
  $ctrl.reg = reg;
  $ctrl.center = center;
  $ctrl.purchase = purchase;
  state.setPageTitle($translate.instant('SIMPLE_RES.PURCHASE.PAGE_TITLE', {
    centerName: center.name
  }));
  /**
   * Next button handler
   */

  $ctrl.next = function () {
    return state.setPath(state.getPath() + '/billing');
  };
  /**
   * Back button handler
   */


  $ctrl.back = state.back;
  /**
   * Staff Help button handler
   */

  $ctrl.staffHelp = function () {
    return purchaseService.createStaffHelp($ctrl.center.id, state.getCurrentUserId(), $route.current.params.purchaseId).catch(function (err) {
      return dwAlerts.error(err, 'Failed to create staff help.');
    }).then(function (result) {
      state.setParam('notice', result.notice);
      return state.setPath(state.getPath() + '/staff-help');
    });
  };
}]));

/***/ }),

/***/ "./bundles/bundle-reservation/steps/bundle-reservation-purchase.tpl.html":
/*!*******************************************************************************!*\
  !*** ./bundles/bundle-reservation/steps/bundle-reservation-purchase.tpl.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"formPurchase\" id=\"buyPassPurchase\"> <h1 class=\"page-title flex\"> <span>{{state.getPageTitle()}}</span> <need-help phone=\"$ctrl.center.phone\"></need-help> </h1> <ff-board> <ff-panel> <ff-panel-header>Order Id: {{$ctrl.purchase.orderId}}</ff-panel-header> <dw-invoice invoice=\"$ctrl.purchase\" center=\"$ctrl.center\" allow-remove=\"false\"></dw-invoice> </ff-panel> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"help\" ff-click=\"$ctrl.staffHelp()\"><span translate=\"GLOBAL.BTN_STAFF_HELP\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"state.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" type=\"submit\" ff-click=\"$ctrl.next()\"><span translate=\"GLOBAL.BTN_NEXT\"></span></ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/bundle-reservation/steps/bundle-reservation-sign-in.controller.js":
/*!***********************************************************************************!*\
  !*** ./bundles/bundle-reservation/steps/bundle-reservation-sign-in.controller.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bundleReservation.signIn', ['flexForms', 'deskworks.state', 'deskworks.config', 'deskworks.dwSignIn']).controller('BundleReservationSignInCtrl', ["$scope", "$translate", "state", function ($scope, $translate, state) {
  'use strict';

  var vm = this;
  state.setPageTitle($translate.instant('SIGN_IN.PAGE_TITLE'));
  /**
   * dwSignIn:SignIn event listener, proceeds to Bundle Reservation / User Profile for non-member or Confirm Reservation for member/admin.
   */

  $scope.$on('dwSignIn:SignIn', function ($event) {
    $event.stopPropagation();
    state.replace(); // hide sign-in step in history to skip it with back button

    if (state.isLoggedNonMember()) return state.setPath(state.getPath() + '/user-profile');
    return state.setPath(state.getPath() + '/confirm');
  });
  /**
   * dwSignIn:SignUp event listener, proceeds to Simple Reservation / Non-member Self-registration
   */

  $scope.$on('dwSignIn:SignUp', function ($event) {
    $event.stopPropagation();
    state.replace(); // hide sign-in step in history to skip it with back button

    return state.setPath(state.getPath() + '/user-profile');
  });
  /**
   * Back button handler
   */

  vm.back = state.back;
}]));

/***/ }),

/***/ "./bundles/bundle-reservation/steps/bundle-reservation-staff-help.controller.js":
/*!**************************************************************************************!*\
  !*** ./bundles/bundle-reservation/steps/bundle-reservation-staff-help.controller.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bundleReservation.staffHelp', ['ngRoute', 'deskworks.helper', 'deskworks.config']).controller('BundleReservationStaffHelpCtrl', ["$scope", "$route", "dwAlerts", "helper", "state", "deskworksConfig", function ($scope, $route, dwAlerts, helper, state, deskworksConfig) {
  'use strict';

  var vm = this;
  vm.notice = state.getParam('notice'); // Page title

  state.setPageTitle('Staff Help');
  /**
   * Prevent using Back button
   */

  $scope.$on('$routeChangeStart', function (event, next, current) {
    if (next.$$route && (next.$$route.controller === 'BundleReservationBillingCtrl' || next.$$route.controller === 'BundleReservationPurchaseCtrl')) {
      dwAlerts.error('Our staff will help you to complete the registration.');
      event.preventDefault();
    }
  });
  /**
   * Next button handler
   */

  vm.home = function () {
    state.resetParams();
    return state.setPath(deskworksConfig.getDefaultRoute());
  };
}]));

/***/ }),

/***/ "./bundles/bundle-reservation/steps/bundle-reservation-user-profile.controller.js":
/*!****************************************************************************************!*\
  !*** ./bundles/bundle-reservation/steps/bundle-reservation-user-profile.controller.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bundleReservation.userProfile', ['ngRoute', 'deskworks.helper', 'deskworks.userProfile.service', 'deskworks.bundleReservation.BundleReservationPurchase']).controller('BundleReservationUserProfileCtrl', ["$scope", "$q", "$route", "$timeout", "$translate", "dwAlerts", "helper", "state", "reg", "centers", "userProfile", "userProfileService", "setupService", "BundleReservationPurchase", function ($scope, $q, $route, $timeout, $translate, dwAlerts, helper, state, reg, centers, userProfile, userProfileService, setupService, BundleReservationPurchase) {
  'use strict';

  var vm = this;
  reg.new = !state.getLoggedUserId();
  vm.reg = reg;
  vm.userProfile = userProfile;
  vm.schema = userProfile.schema;
  state.setPageTitle($translate.instant(vm.reg.new ? 'USER_PROFILE.NEW_USER.PAGE_TITLE' : 'USER_PROFILE.PAGE_TITLE', {
    userName: vm.userProfile.firstName + ' ' + vm.userProfile.lastName
  }));
  /**
   * Get settings to have 'Terms Of Service' stuff
   */

  setupService.getSetupSettings().catch(function (err) {
    return dwAlerts.error(err, 'Failed to get settings.');
  }).then(function (result) {
    vm.settings = result;
  });
  /**
   * Bind test user data generator
   */

  userProfileService.bindTestUserGenerator($scope, vm.userProfile, vm.reg);
  /**
   * Next button handler
   */

  vm.next = function () {
    if (helper.pointFirstInvalid('#userProfile')) return;
    return (vm.reg.new ? userProfileService.registerNewUser(0, vm.userProfile) : $q.when()).then(function () {
      if (vm.reg.new) {
        // Need to login under just created user
        return state.login(vm.userProfile.login, vm.userProfile.password).catch(function (err) {
          return dwAlerts.error(err, 'Failed to login under created user.');
        }).then(function () {
          state.replace();
          state.setCurrentCenterId(centers[0].id);
          return $timeout();
        });
      }
    }).then(function () {
      var params = {
        centerId: state.getCurrentCenterId(),
        userId: state.getCurrentUserId(),
        reservationBundleId: $route.current.params.reservationBundleId
      };
      return BundleReservationPurchase.save(params).$promise.catch(function (err) {
        return dwAlerts.error(err, 'Failed to create purchase for bundle reservation.');
      });
    }).then(function (result) {
      return state.setPath(state.getPath() + '/purchase/' + result.id);
    });
  };
  /**
   * Back button handler
   */


  vm.back = state.back;
}]));

/***/ }),

/***/ "./shared/need-help/need-help.directive.js":
/*!*************************************************!*\
  !*** ./shared/need-help/need-help.directive.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Need help? Phone 1-800-000-000.
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('needHelp', []).directive('needHelp', function () {
  return {
    restrict: 'E',
    scope: true,
    controller: function controller() {},
    controllerAs: '$ctrl',
    template: '<span translate="GLOBAL.NEED_HELP" class="need-help" ng-if="$ctrl.phone" ' + 'translate-values="{ phone: \'<a href=&quot;tel:\' + $ctrl.phone + \'&quot;>\' + $ctrl.phone + \'</a>\' }"></span>',
    bindToController: {
      phone: '<'
    }
  };
}));

/***/ }),

/***/ "./shared/new-billing-profile/new-billing-profile.directive.js":
/*!*********************************************************************!*\
  !*** ./shared/new-billing-profile/new-billing-profile.directive.js ***!
  \*********************************************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-billing-profile.tpl.html */ "./shared/new-billing-profile/new-billing-profile.tpl.html");
/* harmony import */ var _new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_4__);





/**
 * New Billing Profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('newBillingProfile', []).directive('newBillingProfile', function () {
  return {
    template: _new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_4___default.a,
    restrict: 'E',
    scope: true,
    controller: 'NewBillingProfileCtrl as $ctrl',
    bindToController: {
      settings: '<',
      user: '<'
    }
  };
}).controller('NewBillingProfileCtrl', ["$scope", "userProfileService", function ($scope, userProfileService) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    var _context;

    // filter credit card types according to settings
    $ctrl.settings.creditCardTypes = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_context = $ctrl.settings.creditCardTypes).call(_context, function (ccType) {
      return ccType.enable;
    });
    $ctrl.user.creditCards.forEach(function (cc) {
      var _context2;

      cc.type = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = $ctrl.settings.creditCardTypes).call(_context2, function (type) {
        return type.id === cc.type;
      }) || cc.type || {};
    }); // add one CC if no payment methods

    $ctrl.user.creditCards = $ctrl.user.creditCards || [];

    if (!$ctrl.user.creditCards.length && !$ctrl.user.eChecks.length) {
      var cc = userProfileService.creditCard.new($ctrl.user);
      cc.type = $ctrl.settings.creditCardTypes[0];
      $ctrl.user.creditCards.push(cc);
    }

    $scope.$watchCollection(function (_) {
      var _context3;

      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = $ctrl.user.creditCards).call(_context3, $ctrl.user.eChecks);
    }, function (methods) {
      if (methods && $ctrl.user.paymentMethodId && !_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(methods).call(methods, function (m) {
        return m.id === $ctrl.user.paymentMethodId;
      })) {
        $ctrl.user.billingMethod = null; // reset billing/payment method when payment method deleted

        $ctrl.user.paymentMethodId = null;
      }
    });
    userProfileService.bindTestBillingGenerator($scope, $ctrl.user); // Bind test user data generator
  };

  $ctrl.isSingleMode = function () {
    var _$ctrl$user = $ctrl.user,
        creditCards = _$ctrl$user.creditCards,
        eChecks = _$ctrl$user.eChecks;
    return !creditCards.length && (!eChecks.length || userProfileService.eCheck.isNew(eChecks[0])) || !eChecks.length && (!creditCards.length || userProfileService.creditCard.isNew(creditCards[0]));
  };
}]));

/***/ }),

/***/ "./shared/new-billing-profile/new-billing-profile.tpl.html":
/*!*****************************************************************!*\
  !*** ./shared/new-billing-profile/new-billing-profile.tpl.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span translate=\"BILLING_PROFILE.PAYMENT_METHOD.EMPTY\" ng-if=\"$ctrl.showSwitchCC() && $ctrl.showSwitchACH()\"></span> <up-billing-method user=\"$ctrl.user\" settings=\"$ctrl.settings\" ng-if=\"!$ctrl.isSingleMode()\"></up-billing-method> <up-credit-cards user-profile=\"$ctrl.user\" settings=\"$ctrl.settings\" single=\"$ctrl.isSingleMode()\" ng-if=\"$ctrl.user.creditCards.length || !$ctrl.isSingleMode()\"></up-credit-cards> <up-e-checks user-profile=\"$ctrl.user\" single=\"$ctrl.isSingleMode()\" ng-if=\"$ctrl.settings.enableEChecks && ($ctrl.user.eChecks.length || !$ctrl.isSingleMode())\"></up-e-checks> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/staff-help/staff-help.controller.js":
/*!****************************************************!*\
  !*** ./shared/staff-help/staff-help.controller.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.StaffHelpCtrl', ['ngRoute', 'deskworks.helper', 'deskworks.config']).controller('StaffHelpCtrl', ["$scope", "$timeout", "$q", "$route", "$window", "$translate", "dwAlerts", "helper", "state", "deskworksConfig", function ($scope, $timeout, $q, $route, $window, $translate, dwAlerts, helper, state, deskworksConfig) {
  'use strict';

  var vm = this;
  vm.notice = state.getParam('notice');
  state.setPageTitle($translate.instant('SIMPLE_RES.STAFF_HELP.PAGE_TITLE'));
  /**
   * Prevent using Back button
   */

  $scope.$on('$routeChangeStart', function (event, next, current) {
    if (next.$$route && (next.$$route.controller === 'MemberSignUpBillingCtrl' || next.$$route.controller === 'MemberSignUpPurchaseCtrl' || next.$$route.controller === 'SimpleReservationBillingCtrl' || next.$$route.controller === 'SimpleReservationPurchaseCtrl' || next.$$route.controller === 'BuyPassBillingCtrl' || next.$$route.controller === 'BuyPassPurchaseCtrl')) {
      dwAlerts.error($translate.instant('SIMPLE_RES.STAFF_HELP.BACK_ERROR'));
      event.preventDefault();
    }
  });
  /**
   * Next button handler
   */

  vm.home = function () {
    if (state.getParam('redirect')) {
      // redirect to splash page from Buy A Pass flow
      $window.location.href = state.getParam('redirect');
    } else {
      var origin = state.getParam('origin');
      var centerId = state.getCurrentCenterId();
      (origin ? state.logout() : $q.when()).finally(function () {
        // If origin presents, log out
        state.resetParams();
        if (origin) state.setCurrentCenterId(centerId);
        return state.setPath(origin || deskworksConfig.getDefaultRoute());
      });
    }

    return $timeout(10000);
  };
}]));

/***/ }),

/***/ "./shared/staff-help/staff-help.tpl.html":
/*!***********************************************!*\
  !*** ./shared/staff-help/staff-help.tpl.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"staffHelp\" class=\"ff-tmargin\"> <ff-board> <ff-panel> <span ng-bind=\"::vm.notice\"></span> </ff-panel> </ff-board> <ff-btn-group class=\"buttons-bottom ff-center\"> <ff-btn sense=\"home\" type=\"submit\" ff-click=\"vm.home()\"><span translate=\"GLOBAL.BTN_HOME\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/templates/new-billing-profile.tpl.html":
/*!*******************************************************!*\
  !*** ./shared/templates/new-billing-profile.tpl.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div> <h1 class=\"page-title flex\"> <span>{{state.getPageTitle()}}</span> <need-help phone=\"$resolve.center.phone || vm.reg.phone\"></need-help> </h1> <ff-board> <div class=\"ff-panel-header\"> <span translate=\"GLOBAL.STEP_X_OF_Y\" translate-values=\"vm.reg\" ng-if=\"vm.reg.stepCount\"></span> <span ng-if=\"vm.reg.stepCount\">&nbsp;</span> <small translate=\"GLOBAL.REQUIRED_FIELDS_MARKED_WITH\"></small> </div> <new-billing-profile user=\"vm.userProfile\" settings=\"vm.settings\" id=\"newBillingProfile\" class=\"ff-grid gutter-v\"></new-billing-profile> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"help\" ff-click=\"vm.staffHelp()\" ng-if=\"vm.staffHelp\"><span translate=\"GLOBAL.BTN_STAFF_HELP\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" ff-click=\"vm.next()\" ng-if=\"vm.next\"><span translate=\"SIMPLE_RES.BILLING.BTN_PURCHASE\"></span></ff-btn> <ff-btn sense=\"next\" ff-click=\"vm.complete()\" ng-if=\"vm.complete\"><span translate=\"MEMBER_SIGN_UP.BILLING.BTN_COMPLETE\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/templates/new-user-profile.tpl.html":
/*!****************************************************!*\
  !*** ./shared/templates/new-user-profile.tpl.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"user-profile\" id=\"userProfile\"> <h1 class=\"page-title flex\"> <span> {{state.getPageTitle()}} <span ng-if=\"vm.reg.member && !vm.reg.selfRegistration\" ng-style=\"{ color: vm.center.color }\">{{vm.center.name}}</span> </span> <need-help phone=\"vm.reg.phone\"></need-help> </h1> <ff-board> <ff-panel role=\"article\" aria-label=\"{{'USER_PROFILE.USER_PROFILE' | translate}}\"> <ff-panel-header ng-if=\"vm.reg\"> <span translate=\"GLOBAL.STEP_X_OF_Y\" translate-values=\"vm.reg\" ng-if=\"vm.reg.stepCount\"></span> <small translate=\"GLOBAL.REQUIRED_FIELDS_MARKED_WITH\"></small> </ff-panel-header> <div class=\"ff-grid ff-gutter-v ff-gutter-h\"> <up-personal-info user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\"></up-personal-info> <up-addresses flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" center=\"vm.center\" single=\"true\"></up-addresses> <div flex=\"{md: '0 0 50%'}\"> <div class=\"ff-grid ff-gutter-v\"> <up-login-info user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" member-directory-url=\"wlLinks.memberDirectoryUrl\"></up-login-info> <up-phones user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" single=\"true\"></up-phones> </div> </div> <up-photo flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\"></up-photo> <div flex=\"{md: '0 0 50%'}\"> <div class=\"ff-grid ff-gutter-v\"> <up-lead-source user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\"></up-lead-source> <up-terms-of-service user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\"></up-terms-of-service> </div> </div> </div> </ff-panel> </ff-board> <ff-btn-group class=\"buttons-bottom\" ng-if=\"vm.reg\"> <ff-btn sense=\"back\" ff-click=\"vm.back()\" ng-if=\"vm.back\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" ff-click=\"vm.next()\"><span translate=\"GLOBAL.BTN_NEXT\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=bundle-reservation~._b.js.map?_rev=a454187a01cae9a0f395