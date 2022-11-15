(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-pass~._b"],{

/***/ "./bundles/buy-pass sync recursive .*\\.tpl\\.html$":
/*!**********************************************!*\
  !*** ./bundles/buy-pass sync .*\.tpl\.html$ ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./steps/01-select-pass.tpl.html": "./bundles/buy-pass/steps/01-select-pass.tpl.html",
	"./steps/04-purchase.tpl.html": "./bundles/buy-pass/steps/04-purchase.tpl.html",
	"./steps/06-complete.tpl.html": "./bundles/buy-pass/steps/06-complete.tpl.html"
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
webpackContext.id = "./bundles/buy-pass sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/buy-pass sync recursive \\..+\\/.+\\.js$":
/*!*********************************************!*\
  !*** ./bundles/buy-pass sync \..+\/.+\.js$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./steps/01-select-pass.controller.js": "./bundles/buy-pass/steps/01-select-pass.controller.js",
	"./steps/02-sign-in.controller.js": "./bundles/buy-pass/steps/02-sign-in.controller.js",
	"./steps/03-user-profile.controller.js": "./bundles/buy-pass/steps/03-user-profile.controller.js",
	"./steps/04-purchase.controller.js": "./bundles/buy-pass/steps/04-purchase.controller.js",
	"./steps/05-staff-help.controller.js": "./bundles/buy-pass/steps/05-staff-help.controller.js",
	"./steps/06-complete.controller.js": "./bundles/buy-pass/steps/06-complete.controller.js"
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
webpackContext.id = "./bundles/buy-pass sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/buy-pass/index.js":
/*!***********************************!*\
  !*** ./bundles/buy-pass/index.js ***!
  \***********************************/
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
/* harmony import */ var shared_need_help_need_help_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/need-help/need-help.directive */ "./shared/need-help/need-help.directive.js");
/* harmony import */ var shared_staff_help_staff_help_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/staff-help/staff-help.controller */ "./shared/staff-help/staff-help.controller.js");
/* harmony import */ var shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/staff-help/staff-help.tpl.html */ "./shared/staff-help/staff-help.tpl.html");
/* harmony import */ var shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/templates/new-user-profile.tpl.html */ "./shared/templates/new-user-profile.tpl.html");
/* harmony import */ var shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_8__);









var index = ['$injector', function index($injector) {
  // JS
  var importAll = function importAll(r) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(r).call(r)).call(_context, r);
  };

  var js = importAll(__webpack_require__("./bundles/buy-pass sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/buy-pass sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });

    $templateCache.put('staff-help/staff-help.tpl.html', shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_7___default.a);
    $templateCache.put('templates/new-user-profile.tpl.html', shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_8___default.a);
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/buy-pass/steps/01-select-pass.controller.js":
/*!*************************************************************!*\
  !*** ./bundles/buy-pass/steps/01-select-pass.controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.buyPass.selectPass', ['ngRoute', 'deskworks.helper']).controller('BuyPassSelectPassCtrl', ["$scope", "$translate", "state", "helper", "passes", function ($scope, $translate, state, helper, passes) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('BUY_PASS.SELECT_PASS.PAGE_TITLE'));
  $ctrl.passes = passes;
  $ctrl.pass = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(helper).call(helper, $ctrl.passes, state.getParam('pass'));
  /**
   * Next button handler
   */

  $ctrl.next = function () {
    if (helper.pointFirstInvalid('#selectPass')) return;
    return state.setPath(state.getPath() + '/user');
  };
  /**
   * Pass change handler, maps selected pass to URL
   */


  $ctrl.onPassChange = function () {
    state.replace();
    state.setParam('pass', $ctrl.pass.id);
  };
}]));

/***/ }),

/***/ "./bundles/buy-pass/steps/01-select-pass.tpl.html":
/*!********************************************************!*\
  !*** ./bundles/buy-pass/steps/01-select-pass.tpl.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"formSelectPass\" id=\"selectPass\"> <h1 class=\"page-title flex\"> <span>{{state.getPageTitle()}}</span> <need-help phone=\"$resolve.center.phone\"></need-help> </h1> <ff-board class=\"ff-no-frame\"> <div class=\"ff-grid ff-gutter-v ff-gutter-h\"> <ff-panel flex=\"{md: '0 0 50%'}\"> <label class=\"ff-row\"> <ff-label flex=\"1 0 124px\" class=\"em\"> <span translate=\"BUY_PASS.SELECT_PASS.HEADER\"></span> </ff-label> <ff-select flex=\"1 1 70%\" name=\"pass\" ff-model=\"$ctrl.pass\" ff-options=\"pass.name for pass in $ctrl.passes\" ff-change=\"$ctrl.onPassChange()\" ff-required=\"true\" ff-validate-alert=\"{{'BUY_PASS.SELECT_PASS.PASS' | translate}}\"> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"1 0 124px\" class=\"em\"> <span translate=\"BUY_PASS.SELECT_PASS.PRICE\"></span> </ff-label> <ff-static flex=\"1 1 100%\" ff-bind=\"$ctrl.pass.price | nd | ncurrency\" name=\"price\"></ff-static> </label> </ff-panel> <ff-panel flex=\"{md: '0 0 50%'}\"> <span class=\"pre-description\" translate=\"BUY_PASS.SELECT_PASS.NOTE\"></span> </ff-panel> </div> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"next\" type=\"submit\" ff-click=\"$ctrl.next()\"> <span translate=\"GLOBAL.BTN_NEXT\"></span> </ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/buy-pass/steps/02-sign-in.controller.js":
/*!*********************************************************!*\
  !*** ./bundles/buy-pass/steps/02-sign-in.controller.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.buyPass.signIn', ['flexForms', 'deskworks.state', 'deskworks.config', 'deskworks.dwSignIn']).controller('BuyPassSignInCtrl', ["$scope", "$translate", "state", function ($scope, $translate, state) {
  var vm = this;
  state.setPageTitle($translate.instant('SIGN_IN.PAGE_TITLE'));
  /**
   * dwSignIn:SignIn event listener, proceeds to Buy Pass / User Profile
   */

  $scope.$on('dwSignIn:SignIn', function ($event) {
    $event.stopPropagation();
    state.replace(); // hide sign-in step in history to skip it with back button

    state.setPath(state.getPath() + '/' + state.getLoggedUserId());
  });
  /**
   * dwSignIn:SignUp event listener, proceeds to Buy Pass / Non-member Self-registration
   */

  $scope.$on('dwSignIn:SignUp', function ($event) {
    $event.stopPropagation();
    state.setPath(state.getPath() + '/new');
  });
}]));

/***/ }),

/***/ "./bundles/buy-pass/steps/03-user-profile.controller.js":
/*!**************************************************************!*\
  !*** ./bundles/buy-pass/steps/03-user-profile.controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.buyPass.userProfile', ['ngRoute', 'deskworks.userProfile.service', 'deskworks.helper', 'needHelp']).controller('BuyPassUserProfileCtrl', ["$scope", "$timeout", "$q", "$route", "$translate", "helper", "state", "center", "dwAlerts", "userProfile", "reg", "userProfileService", "purchaseService", function ($scope, $timeout, $q, $route, $translate, helper, state, center, dwAlerts, userProfile, reg, userProfileService, purchaseService) {
  var vm = this;
  vm.reg = reg;
  vm.reg.phone = center.phone;
  vm.userProfile = userProfile;
  vm.schema = userProfile.schema;
  state.setPageTitle($translate.instant(vm.reg.new ? 'USER_PROFILE.NEW_USER.PAGE_TITLE' : 'USER_PROFILE.PAGE_TITLE', {
    userName: helper.join([vm.userProfile.firstName, vm.userProfile.lastName], ' ')
  }));
  /**
   * Bind test user data generator
   */

  userProfileService.bindTestUserGenerator($scope, vm.userProfile, vm.reg);
  /**
   * Next button handler
   */

  vm.next = function () {
    if (helper.pointFirstInvalid('#userProfile')) return;
    return $q.when(vm.reg.new && userProfileService.registerNewUser(0, vm.userProfile)).then(function () {
      if (vm.reg.new) {
        // need to login under just created user
        return state.login(vm.userProfile.login, vm.userProfile.password).catch(function (err) {
          return dwAlerts.error(err, 'Failed to log in with created user.');
        });
      }
    }).then(function () {
      return purchaseService.createPurchase(state.getCurrentCenterId(), vm.userProfile.id, undefined, state.getParam('pass')).catch(function (err) {
        return dwAlerts.error(err, 'Failed to create purchase.');
      }).finally(function () {
        if (vm.reg.new) {
          state.replace();
          $route.updateParams({
            userId: vm.userProfile.id
          });
        }
      });
    }).then(function (result) {
      return $timeout(function () {
        return state.setPath(state.getPath() + '/purchase/' + result.id);
      });
    });
  };
  /**
   * Back button handler
   */


  vm.back = function () {
    return state.setPath('/buy-pass');
  };
}]));

/***/ }),

/***/ "./bundles/buy-pass/steps/04-purchase.controller.js":
/*!**********************************************************!*\
  !*** ./bundles/buy-pass/steps/04-purchase.controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/new-billing-profile/new-billing-profile.directive */ "./shared/new-billing-profile/new-billing-profile.directive.js");
/* harmony import */ var shared_need_help_need_help_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/need-help/need-help.directive */ "./shared/need-help/need-help.directive.js");
/* harmony import */ var shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice.directive */ "./shared/dw-invoice/dw-invoice.directive.js");
/* harmony import */ var shared_dw_invoice_dw_invoice_payment_processing_fee_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice-payment-processing-fee.directive */ "./shared/dw-invoice/dw-invoice-payment-processing-fee.directive.js");








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.buyPass.purchase', ['ngRoute', 'deskworks.purchase.service', 'deskworks.userProfile.service', shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_need_help_need_help_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_dw_invoice_dw_invoice_payment_processing_fee_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name]).controller('BuyPassPurchaseCtrl', ["$scope", "$route", "$translate", "$timeout", "helper", "dwAlerts", "state", "user", "purchase", "purchaseService", "userProfileService", function ($scope, $route, $translate, $timeout, helper, dwAlerts, state, user, purchase, purchaseService, userProfileService) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('BUY_PASS.PURCHASE.PAGE_TITLE'));
  $ctrl.purchase = purchase;
  /**
   * Next button handler
   */

  $ctrl.next = function () {
    if (helper.pointFirstInvalid('#newBillingProfile')) return;
    $ctrl.spin = true;
    return userProfileService.saveBillingProfile(state.getCurrentCenterId(), user).then(function (_) {
      if (+$ctrl.purchase.balance <= 0) return state.setPath(state.getPath() + '/complete');
      return $ctrl.createPayment().then(function (result) {
        return $ctrl.updatePurchase().then(function (_) {
          return result;
        });
      }).then(function (result) {
        state.replace().setParam('accessCode', result.accessCode);
        return $timeout(function (_) {
          return state.setPath(state.getPath() + '/complete');
        });
      });
    }).finally(function (_) {
      $ctrl.spin = false;
    });
  };
  /**
   * Create payment
   */


  $ctrl.createPayment = function (_) {
    return purchaseService.createPayment(state.getCurrentCenterId(), $route.current.params.userId, $route.current.params.purchaseId, {}, undefined, state.getParam('pass')).catch(function (err) {
      return dwAlerts.error(err, 'Failed to make payment.');
    });
  };
  /**
   * Update purchase order
   */


  $ctrl.updatePurchase = function (_) {
    return purchaseService.get(state.getCurrentCenterId(), $route.current.params.userId, $route.current.params.purchaseId).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get purchase.');
    }).then(function (purchase) {
      $ctrl.purchase = purchase;
    });
  };
  /**
   * Back button handler
   */


  $ctrl.back = function () {
    return state.setPath("/buy-pass/user/".concat(user.id));
  };
  /**
   * Staff Help button handler
   */


  $ctrl.staffHelp = function () {
    return purchaseService.createStaffHelp(state.getCurrentCenterId(), $route.current.params.userId, $ctrl.purchase.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to create staff help.');
    }).then(function (result) {
      state.setParam('notice', result.notice);
      return state.setPath(state.getPath() + '/staff-help');
    });
  };
}]));

/***/ }),

/***/ "./bundles/buy-pass/steps/04-purchase.tpl.html":
/*!*****************************************************!*\
  !*** ./bundles/buy-pass/steps/04-purchase.tpl.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div> <h1 class=\"page-title flex\"> <span>{{state.getPageTitle()}}</span> <need-help phone=\"$resolve.center.phone\"></need-help> </h1> <form id=\"buyPassPurchase\" class=\"ff-grid gutter-v gutter-h\" novalidate ff-dim=\"$ctrl.spin\"> <ff-panel> <ff-panel-header> <span translate=\"SIMPLE_RES.PURCHASE.ORDER.HEADER\" translate-values=\"{ orderId: $ctrl.purchase.orderId }\"></span> </ff-panel-header> <dw-invoice invoice=\"$ctrl.purchase\" center=\"$resolve.center\" allow-remove=\"false\" dw-invoice-payment-processing-fee settings=\"$resolve.settings\" credit-cards=\"$resolve.user.creditCards\" e-checks=\"$resolve.user.eChecks\"></dw-invoice> </ff-panel> <div> <ff-panel-header> <div translate=\"BILLING_PROFILE.PAGE_TITLE\" translate-values=\"{ userName: $resolve.user.fullNameCompany }\"></div> <small translate=\"GLOBAL.REQUIRED_FIELDS_MARKED_WITH\"></small> </ff-panel-header> <new-billing-profile user=\"$resolve.user\" settings=\"$resolve.settings\" id=\"newBillingProfile\" class=\"ff-grid gutter-v\"></new-billing-profile> </div> <ff-btn-group> <ff-btn sense=\"help\" ff-click=\"$ctrl.staffHelp()\"><span translate=\"GLOBAL.BTN_STAFF_HELP\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" type=\"submit\" ff-click=\"$ctrl.next()\"><span translate=\"GLOBAL.BTN_NEXT\"></span></ff-btn> </ff-btn-group> </form> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/buy-pass/steps/05-staff-help.controller.js":
/*!************************************************************!*\
  !*** ./bundles/buy-pass/steps/05-staff-help.controller.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.buyPass.staffHelp', ['ngRoute', 'deskworks.helper', 'deskworks.config']).controller('BuyPassStaffHelpCtrl', ["$scope", "$timeout", "$window", "$translate", "dwAlerts", "helper", "state", function ($scope, $timeout, $window, $translate, dwAlerts, helper, state) {
  var vm = this;
  state.setPageTitle($translate.instant('SIMPLE_RES.STAFF_HELP.PAGE_TITLE'));
  vm.notice = state.getParam('notice');
  /**
   * Prevent using Back button
   */

  $scope.$on('$routeChangeStart', function (event, next, current) {
    var ctrl = next.$$route && next.$$route.controller;

    if (ctrl === 'BuyPassPurchaseCtrl' || ctrl === 'BuyPassBillingCtrl') {
      dwAlerts.error($translate.instant('SIMPLE_RES.STAFF_HELP.BACK_ERROR'));
      event.preventDefault();
    }
  });
  /**
   * Home button handler
   */

  vm.home = function () {
    $window.location.href = state.getParam('redirect');
    return $timeout(10000);
  };
}]));

/***/ }),

/***/ "./bundles/buy-pass/steps/06-complete.controller.js":
/*!**********************************************************!*\
  !*** ./bundles/buy-pass/steps/06-complete.controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.BuyPassCompleteCtrl', []).controller('BuyPassCompleteCtrl', ["$scope", "$timeout", "$translate", "$window", "state", "helper", "dwAlerts", function ($scope, $timeout, $translate, $window, state, helper, dwAlerts) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('BUY_PASS.COMPLETE.PAGE_TITLE'));
  $ctrl.accessCode = state.getParam('accessCode');
  /**
   * Prevent using Back button
   */

  $scope.$on('$locationChangeStart', function (event, newUrl) {
    if (newUrl && newUrl.indexOf('/buy-pass') >= 0) {
      event.preventDefault();
      dwAlerts.error($translate.instant('BUY_PASS.COMPLETE.BACK_ERROR'));
    }
  });
  /**
   * Start button handler
   */

  $ctrl.start = function () {
    $window.location.href = state.getParam('redirect') + '&accessCode=' + $ctrl.accessCode;
    return $timeout(15000);
  };
}]));

/***/ }),

/***/ "./bundles/buy-pass/steps/06-complete.tpl.html":
/*!*****************************************************!*\
  !*** ./bundles/buy-pass/steps/06-complete.tpl.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"buyPassComplete\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-panel> <span translate=\"BUY_PASS.COMPLETE.TEXT\" translate-values=\"{ accessCode: $ctrl.accessCode }\"></span> </ff-panel> <ff-btn-group class=\"buttons-bottom\" ng-class=\"{'ff-center': !vm.purchase}\"> <ff-btn sense=\"next\" type=\"submit\" ff-click=\"$ctrl.start()\"><span translate=\"BUY_PASS.COMPLETE.BTN_START\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/dw-invoice/dw-invoice-payment-processing-fee.directive.js":
/*!**************************************************************************!*\
  !*** ./shared/dw-invoice/dw-invoice-payment-processing-fee.directive.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__);



/**
 * dwInvoicePaymentProcessingFee directive -
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwInvoicePaymentProcessingFee', ['deskworks.state', 'deskworks.helper']).directive('dwInvoicePaymentProcessingFee', function () {
  return {
    restrict: 'A',
    scope: true,
    controller: 'DwInvoicePaymentProcessingFeeCtrl as $ctrl',
    bindToController: {
      invoice: '<',
      settings: '<',
      creditCards: '<',
      eChecks: '<'
    }
  };
}).controller('DwInvoicePaymentProcessingFeeCtrl', ["$scope", "$timeout", "state", "helper", function ($scope, $timeout, state, helper) {
  var $ctrl = this;

  $ctrl.$onChanges = function () {
    return $timeout(function () {
      var _context, _context2;

      if (!$ctrl.invoice || !$ctrl.settings || !$ctrl.creditCards || !$ctrl.eChecks) return;
      if (!$ctrl.settings.enablePaymentProcessingCharges) return;
      var rate = 0;
      if ($ctrl.creditCards.length) rate = $ctrl.settings.paymentProcessingRates.cc || 0;else if ($ctrl.eChecks.length) rate = $ctrl.settings.paymentProcessingRates.ach || 0;

      var prevIdx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.invoice.items).call(_context, function (i) {
        return i.id === 'fake-payment-processing-fee';
      });

      if (prevIdx >= 0) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = $ctrl.invoice.items).call(_context2, prevIdx, 1); // remove exiting fake-payment-processing-fee

      if (!rate || !+$ctrl.invoice.balance) return;
      var fee = helper.round(rate * +$ctrl.invoice.balance / 100);
      var item = {
        addedBy: 'system',
        amount: fee,
        billedAt: moment(),
        createdAt: moment(),
        description: "Payment processing fee",
        id: "fake-payment-processing-fee",
        name: "Payment Fee",
        price: fee,
        quantity: 1
      };
      $ctrl.invoice.items.push(item);

      if (angular.isUndefined($ctrl.invoice.chargesTotalInitial)) {
        $ctrl.invoice.chargesTotalInitial = +$ctrl.invoice.chargesTotal;
      }

      if (angular.isUndefined($ctrl.invoice.balanceInitial)) {
        $ctrl.invoice.balanceInitial = +$ctrl.invoice.balance;
      }

      $ctrl.invoice.chargesTotal = helper.round($ctrl.invoice.chargesTotalInitial + fee);
      $ctrl.invoice.balance = helper.round($ctrl.invoice.balanceInitial + fee);
    });
  };
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
//# sourceMappingURL=buy-pass~._b.js.map?_rev=a19b7c0c30a4124f727e