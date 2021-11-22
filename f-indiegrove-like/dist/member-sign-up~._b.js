(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["member-sign-up~._b"],{

/***/ "./bundles/member-sign-up sync recursive .*\\.tpl\\.html$":
/*!****************************************************!*\
  !*** ./bundles/member-sign-up sync .*\.tpl\.html$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./steps/01-landing.tpl.html": "./bundles/member-sign-up/steps/01-landing.tpl.html",
	"./steps/01-membership.tpl.html": "./bundles/member-sign-up/steps/01-membership.tpl.html",
	"./steps/03-purchase.tpl.html": "./bundles/member-sign-up/steps/03-purchase.tpl.html",
	"./steps/04-complete.tpl.html": "./bundles/member-sign-up/steps/04-complete.tpl.html"
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
webpackContext.id = "./bundles/member-sign-up sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/member-sign-up sync recursive \\..+\\/.+\\.js$":
/*!***************************************************!*\
  !*** ./bundles/member-sign-up sync \..+\/.+\.js$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./steps/01-landing.controller.js": "./bundles/member-sign-up/steps/01-landing.controller.js",
	"./steps/01-membership.controller.js": "./bundles/member-sign-up/steps/01-membership.controller.js",
	"./steps/02-profile.controller.js": "./bundles/member-sign-up/steps/02-profile.controller.js",
	"./steps/03-purchase.controller.js": "./bundles/member-sign-up/steps/03-purchase.controller.js",
	"./steps/04-complete.controller.js": "./bundles/member-sign-up/steps/04-complete.controller.js",
	"./steps/no-plan-billing.controller.js": "./bundles/member-sign-up/steps/no-plan-billing.controller.js",
	"./steps/no-plan-complete.controller.js": "./bundles/member-sign-up/steps/no-plan-complete.controller.js"
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
webpackContext.id = "./bundles/member-sign-up sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/member-sign-up/index.js":
/*!*****************************************!*\
  !*** ./bundles/member-sign-up/index.js ***!
  \*****************************************/
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
/* harmony import */ var shared_templates_new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/templates/new-billing-profile.tpl.html */ "./shared/templates/new-billing-profile.tpl.html");
/* harmony import */ var shared_templates_new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(shared_templates_new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_9__);










var index = ['$injector', function index($injector) {
  // JS
  var importAll = function importAll(r) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(r).call(r)).call(_context, r);
  };

  var js = importAll(__webpack_require__("./bundles/member-sign-up sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/member-sign-up sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });

    $templateCache.put('staff-help/staff-help.tpl.html', shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_7___default.a);
    $templateCache.put('templates/new-user-profile.tpl.html', shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_8___default.a);
    $templateCache.put('templates/new-billing-profile.tpl.html', shared_templates_new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_9___default.a);
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/member-sign-up/steps/01-landing.controller.js":
/*!***************************************************************!*\
  !*** ./bundles/member-sign-up/steps/01-landing.controller.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.MemberSignUpLandingCtrl', ['ngRoute', 'deskworks.helper', 'needHelp']).controller('MemberSignUpLandingCtrl', ["$scope", "$translate", "$filter", "dwAlerts", "state", "helper", "center", "product", function ($scope, $translate, $filter, dwAlerts, state, helper, center, product) {
  var $ctrl = this;
  $ctrl.center = center;
  $ctrl.product = product;
  $ctrl.membershipStartDate = state.getParam('membershipStartDate');
  $ctrl.membershipStartDate = $ctrl.membershipStartDate ? $filter('toDate')($ctrl.membershipStartDate) : moment();
  state.setPageTitle($translate.instant('MEMBER_SIGN_UP.LANDING.PAGE_TITLE', {
    centerName: $ctrl.center.name
  }));
  /**
   * Next button click handler
   */

  $ctrl.next = function () {
    state.setParam('membershipStartDate', $filter('date')($ctrl.membershipStartDate, 'yyyy-MM-dd'));
    return state.setPath('/member-sign-up' + '/' + (state.getCurrentUserId() || 'new'));
  };
}]));

/***/ }),

/***/ "./bundles/member-sign-up/steps/01-landing.tpl.html":
/*!**********************************************************!*\
  !*** ./bundles/member-sign-up/steps/01-landing.tpl.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form id=\"memberSignUpLanding\" novalidate> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <h1 class=\"page-title\" translate=\"MEMBER_SIGN_UP.MEMBERSHIP.CENTER.AT\" translate-values=\"{center: $ctrl.center.name}\"></h1> <ff-board> <ff-panel style=\"max-width:480px;margin:0 auto\"> <ff-panel-header> <span translate=\"GLOBAL.STEP_X_OF_Y\" translate-values=\"$resolve.reg\"></span> </ff-panel-header> <div class=\"gutter-v-half\"> <ff-header class=\"ff-grid\"> <span flex=\"0 1 auto\">{{::$ctrl.product.name}}&nbsp;</span> <span flex=\"none\" class=\"text-brand\">{{::($ctrl.product.price || 0) | ncurrency}}</span> </ff-header> <div ng-if=\"::$ctrl.product.description\" style=\"white-space:pre-wrap;line-height:1.4\">{{::$ctrl.product.description}}</div> <label class=\"ff-row\" style=\"max-width:220px;margin-left:auto\"> <ff-label flex=\"0 0 90px\"> <span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.START_DATE\"></span> </ff-label> <ff-date ff-model=\"$ctrl.membershipStartDate\" name=\"membershipStartDate\" ff-validate-alert=\"{{'MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.START_DATE' | translate}}\"></ff-date> </label> </div> </ff-panel> </ff-board> <ff-btn-group> <ff-btn sense=\"next\" type=\"submit\" ff-click=\"$ctrl.next()\"><span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.BTN_PROCEED\"></span></ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/member-sign-up/steps/01-membership.controller.js":
/*!******************************************************************!*\
  !*** ./bundles/member-sign-up/steps/01-membership.controller.js ***!
  \******************************************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_need_help_need_help_directive_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/need-help/need-help.directive.js */ "./shared/need-help/need-help.directive.js");







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.MemberSignUpMembershipCtrl', ['ngRoute', 'deskworks.center.service', 'deskworks.membership.service', 'deskworks.helper', 'needHelp']).controller('MemberSignUpMembershipCtrl', ["$scope", "$route", "$timeout", "$translate", "$filter", "dwAlerts", "state", "helper", "reg", "data", "membershipService", function ($scope, $route, $timeout, $translate, $filter, dwAlerts, state, helper, reg, data, membershipService) {
  var vm = this;
  state.setPageTitle($translate.instant('MEMBER_SIGN_UP.MEMBERSHIP.PAGE_TITLE'));
  vm.centers = data.centers;
  vm.reg = reg;
  vm.settings = data.settings;
  if (vm.settings.skipPlanMemberSignUp) vm.reg.stepCount -= 1;
  vm.center = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(helper).call(helper, vm.centers, state.getCurrentCenterId()); // auto-select if one center available

  if (!vm.center && vm.centers.length === 1) vm.center = vm.centers[0];
  /**
   * Center change handler, updates membership categories, resets membershipCategory and membershipProduct
   */

  vm.loadMembershipCategories = function () {
    if (!vm.center || vm.settings.skipPlanMemberSignUp) return;
    vm.updating = true;
    membershipService.query(vm.center.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query membership categories.');
    }).finally(function () {
      return vm.updating = false;
    }).then(function (result) {
      vm.membershipCategories = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(result).call(result, function (cat) {
        return cat.products.length > 0;
      });
      delete vm.membershipProduct;
      vm.updating = false;
      vm.membershipStartDate = state.getParam('membershipStartDate');
      vm.membershipStartDate = vm.membershipStartDate ? $filter('toDate')(vm.membershipStartDate) : moment(); // Find membershipCategory and membershipProduct from route params

      vm.membershipCategories.some(function (cat) {
        var product = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(helper).call(helper, cat.products, state.getParam('productId'));

        if (product) {
          vm.membershipCategory = cat;
          vm.membershipProduct = product;
        } else {
          delete vm.membershipCategory;
        }

        return !!product;
      });
    });
  };

  vm.loadMembershipCategories(); // load membership categories at startup

  /**
   * Membership Category change handler, resets membershipProduct
   */

  vm.membershipCategoryChange = function () {
    delete vm.membershipProduct;
  };
  /**
   * Next button click handler
   */


  vm.next = function () {
    if (helper.pointFirstInvalid('#memberSignUpMembership')) return;
    if (!vm.settings.skipPlanMemberSignUp && !vm.membershipProduct) return dwAlerts.error('No plan selected.');
    state.replace();
    state.setCurrentCenterId(vm.center.id);
    if (!vm.settings.skipPlanMemberSignUp) state.setParam('productId', vm.membershipProduct.id); // state.setLoggedUserCenter(vm.center.id, vm.center.name);

    state.setParam('membershipStartDate', $filter('date')(vm.membershipStartDate, 'yyyy-MM-dd'));
    return $timeout(function () {
      return state.setPath(state.getPath() + '/' + (state.getCurrentUserId() || 'new'));
    });
  };
}]));

/***/ }),

/***/ "./bundles/member-sign-up/steps/01-membership.tpl.html":
/*!*************************************************************!*\
  !*** ./bundles/member-sign-up/steps/01-membership.tpl.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"vm.form\" id=\"memberSignUpMembership\"> <h1 class=\"page-title flex\"> <span>{{state.getPageTitle()}} - <small translate=\"MEMBER_SIGN_UP.MEMBERSHIP.THANKS\"></small></span> <need-help phone=\"vm.center.phone\"></need-help> </h1> <ff-board class=\"ff-no-frame\"> <div class=\"ff-grid ff-gutter-v ff-gutter-h\"> <ff-panel ng-hide=\"state.getParam('origin') || state.getParam('redirect')\" flex=\"{md: '0 0 50%'}\" role=\"article\" aria-label=\"{{'MEMBER_SIGN_UP.MEMBERSHIP.CENTER.HEADER' | translate}}\"> <ff-panel-header> <span translate=\"GLOBAL.STEP_X_OF_Y\" translate-values=\"vm.reg\"></span> </ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"1 0 124px\" class=\"em\"> <span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.CENTER.HEADER\"></span> </ff-label> <ff-select flex=\"1 1 70%\" ff-model=\"vm.center\" ff-options=\"center.name for center in vm.centers\" name=\"center\" ff-required=\"true\" ff-validate-alert=\"{{'MEMBER_SIGN_UP.MEMBERSHIP.CENTER.CENTER' | translate}}\" ff-change=\"vm.loadMembershipCategories()\"></ff-select> </label> </ff-panel> <div flex=\"{md: '0 0 50%'}\" class=\"no-margin\"></div> <ff-panel ng-show=\"vm.center\" flex=\"{md: '0 0 50%'}\" ng-if=\"!vm.settings.skipPlanMemberSignUp\"> <ff-panel-header><span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.HEADER\"></span></ff-panel-header> <ff-col ff-dim=\"vm.updating\" role=\"radiogroup\" aria-label=\"{{'MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.HEADER' | translate}}\"> <ff-info ng-if=\"!vm.membershipCategories.length\" translate=\"MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.EMPTY\"></ff-info> <label ng-repeat=\"cat in vm.membershipCategories\"> <ff-label> <ff-radio flex=\"0 0 26px\" ff-model=\"vm.membershipCategory\" ff-value=\"cat\" name=\"membershipCategory\" ff-required=\"true\" ff-validate-alert=\"{{'MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.MEMB_CATEGORY' | translate}}\" ff-change=\"vm.membershipCategoryChange()\"></ff-radio> {{cat.name}} </ff-label> </label> </ff-col> </ff-panel> <ff-panel ng-show=\"vm.center\" flex=\"{md: '0 0 50%'}\" ng-if=\"!vm.settings.skipPlanMemberSignUp && vm.membershipCategories.length\"> <ff-panel-header><span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.DESCRIPTION\"></span></ff-panel-header> <ff-col ff-dim=\"vm.updating\"> <ff-static class=\"pre-description\"> <span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.HINT\" ng-if=\"!vm.membershipCategory\"></span> <span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.CATEGORY.NO_DESCRIPTION\" ng-if=\"vm.membershipCategory && !vm.membershipCategory.note\"></span> <span ng-bind=\"vm.membershipCategory.note\" ng-if=\"vm.membershipCategory && vm.membershipCategory.note\"></span> </ff-static> </ff-col> </ff-panel> <ff-panel ng-show=\"vm.membershipCategory.products.length > 0\" flex=\"{md: '0 0 50%'}\" ng-if=\"!vm.settings.skipPlanMemberSignUp\"> <ff-panel-header><span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.HEADER\"></span></ff-panel-header> <ff-col ff-dim=\"vm.updating\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\" class=\"em\"> <span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.SELECT_PLAN\"></span> </ff-label> <ff-select ff-model=\"vm.membershipProduct\" ff-options=\"product.name for product in vm.membershipCategory.products\" ff-required=\"vm.membershipCategory.products.length > 0\" name=\"plan\" ff-validate-alert=\"{{'MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.PLAN' | translate}}\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\" class=\"em\"> <span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.PRICE\"></span> </ff-label> <ff-static ff-bind=\"vm.membershipProduct.price | nd | ncurrency\" name=\"price\"></ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\" class=\"em\"> <span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.START_DATE\"></span> </ff-label> <ff-date ff-model=\"vm.membershipStartDate\" name=\"membershipStartDate\" ff-validate-alert=\"{{'MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.START_DATE' | translate}}\"></ff-date> </label> </ff-col> </ff-panel> <ff-panel flex=\"{md: '0 0 50%'}\" ng-if=\"!vm.settings.skipPlanMemberSignUp && vm.membershipProduct && vm.membershipProduct.description\"> <ff-panel-header><span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.PRODUCT.DESCRIPTION\"></span></ff-panel-header> <ff-col ff-dim=\"vm.updating\"> <ff-static class=\"pre-description\">{{vm.membershipProduct.description}}</ff-static> </ff-col> </ff-panel> </div> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"next\" type=\"submit\" ff-click=\"vm.next()\"><span translate=\"MEMBER_SIGN_UP.MEMBERSHIP.BTN_PROCEED\"></span></ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/member-sign-up/steps/02-profile.controller.js":
/*!***************************************************************!*\
  !*** ./bundles/member-sign-up/steps/02-profile.controller.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_need_help_need_help_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/need-help/need-help.directive.js */ "./shared/need-help/need-help.directive.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.MemberSignUpProfileCtrl', ['ngRoute', 'deskworks.routeHelper', 'deskworks.helper', 'deskworks.userProfile.service', 'deskworks.userProfile.optsMembershipStatus', 'needHelp']).controller('MemberSignUpProfileCtrl', ["$scope", "$timeout", "$q", "$translate", "dwAlerts", "helper", "state", "userProfile", "reg", "userProfileService", "purchaseService", "settings", "optsMembershipStatus", function ($scope, $timeout, $q, $translate, dwAlerts, helper, state, userProfile, reg, userProfileService, purchaseService, settings, optsMembershipStatus) {
  var vm = this;
  vm.reg = reg;
  vm.schema = userProfile.schema;
  vm.userProfile = userProfile;
  vm.settings = settings;

  if (!state.getParam('productId')) {
    vm.reg.stepCount -= 1;
    vm.userProfile.membershipStatus = optsMembershipStatus[0];
  }

  state.setPageTitle($translate.instant(vm.reg.new ? 'MEMBER_SIGN_UP.PROFILE.PAGE_TITLE' : 'USER_PROFILE.PAGE_TITLE', {
    userName: vm.userProfile.fullNameCompany
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
    return $q.when().then(function () {
      if (vm.reg.new) {
        return userProfileService.registerNewUser(state.getCurrentCenterId(), vm.userProfile, true);
      }
    }).then(function () {
      if (vm.reg.new) {
        // Need to login under just created user
        return state.login(vm.userProfile.login, vm.userProfile.password).catch(function (err) {
          return dwAlerts.error(err, 'Failed to login under created user.');
        });
      }
    }).then(function () {
      if (vm.reg.new) {
        state.replace();
        state.setPath(state.getPath().replace(/\/new/, '/' + vm.userProfile.id));
        return $timeout();
      }
    }).then(function () {
      if (!state.getParam('productId')) return; // no product -> settings.skipPlanMemberSignUp=true -> skip purchase

      return purchaseService.createPurchase(state.getCurrentCenterId(), vm.userProfile.id, true, state.getParam('productId'), null, state.getParam('membershipStartDate')).catch(function (err) {
        return dwAlerts.error(err, 'Failed to create purchase.');
      });
    }).then(function (result) {
      if (!state.getParam('productId')) {
        // no product -> settings.skipPlanMemberSignUp=true -> skip purchase
        return state.setPath(state.getPath() + '/billing');
      }

      return state.setPath(state.getPath() + '/purchases/' + result.id);
    });
  };
  /**
   * Back button handler
   */


  vm.back = state.back;
}]));

/***/ }),

/***/ "./bundles/member-sign-up/steps/03-purchase.controller.js":
/*!****************************************************************!*\
  !*** ./bundles/member-sign-up/steps/03-purchase.controller.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/new-billing-profile/new-billing-profile.directive */ "./shared/new-billing-profile/new-billing-profile.directive.js");
/* harmony import */ var shared_need_help_need_help_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/need-help/need-help.directive */ "./shared/need-help/need-help.directive.js");
/* harmony import */ var shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice.directive */ "./shared/dw-invoice/dw-invoice.directive.js");
/* harmony import */ var shared_dw_invoice_dw_invoice_payment_processing_fee_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice-payment-processing-fee.directive */ "./shared/dw-invoice/dw-invoice-payment-processing-fee.directive.js");






/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.MemberSignUpPurchaseCtrl', ['ngRoute', 'deskworks.helper', 'deskworks.dwAddCharges', 'deskworks.userProfile.service', 'deskworks.purchase.service', 'deskworks.StaffHelpCtrl', shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_need_help_need_help_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_dw_invoice_dw_invoice_payment_processing_fee_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name]).controller('MemberSignUpPurchaseCtrl', ["$scope", "$route", "$translate", "$timeout", "$window", "dwAlerts", "helper", "state", "session", "reg", "center", "settings", "purchase", "purchaseService", "userProfileService", "userProfile", "affiliatly", function ($scope, $route, $translate, $timeout, $window, dwAlerts, helper, state, session, reg, center, settings, purchase, purchaseService, userProfileService, userProfile, affiliatly) {
  var vm = this;
  state.setPageTitle($translate.instant('MEMBER_SIGN_UP.PURCHASE.PAGE_TITLE', {
    centerName: center.name
  }));
  vm.reg = reg;
  vm.center = center;
  vm.settings = settings;
  vm.user = userProfile;
  vm.purchase = purchase;
  /**
   * Next button handler
   */

  vm.next = function () {
    if (helper.pointFirstInvalid('#memberSignUpPurchaseValidation')) return;
    vm.spin = true;
    return userProfileService.saveBillingProfile(state.getCurrentCenterId(), vm.user).then(function (_) {
      return +vm.purchase.balance > 0 ? vm.createPayment() : null;
    }).then(function (_) {
      return affiliatly.markPurchase({
        orderId: vm.purchase.orderId,
        total: vm.purchase.balance,
        email: vm.user.email
      });
    }).then(function (_) {
      if (state.getParam('redirect')) {
        // redirect to splash page from Buy A Pass flow
        $window.location.href = state.getParam('redirect') + '&login=' + vm.user.login;
        return $timeout(15000);
      } // Update current user role and emit LOGIN to refresh sidebar, centers, etc. Then proceed to complete.


      userProfileService.resetCache();
      return userProfileService.get(state.getCurrentCenterId(), $route.current.params.userId).catch(function (err) {
        return dwAlerts.error(err, 'Failed to get user profile.');
      }).then(function (result) {
        session.user.role = result.role;
        $scope.$emit('LOGIN');
        return state.setPath(state.getPath() + '/complete');
      });
    }).finally(function (_) {
      vm.spin = false;
    });
  };
  /**
   * Create Payment which activates nonMember -> member, creates recurring billing, etc.
   */


  vm.createPayment = function (_) {
    return purchaseService.createPayment(state.getCurrentCenterId(), $route.current.params.userId, $route.current.params.purchaseId, {}, true, state.getParam('productId'), state.getParam('membershipStartDate')).catch(function (err) {
      return dwAlerts.error(err, 'Failed to make payment.');
    });
  };
  /**
   * Back button handler
   */


  vm.back = state.back;
  /**
   * Staff Help button handler
   */

  vm.staffHelp = function () {
    return purchaseService.createStaffHelp(vm.center.id, $route.current.params.userId, $route.current.params.purchaseId, true, state.getParam('productId')).catch(function (err) {
      return dwAlerts.error(err, 'Failed to create staff help.');
    }).then(function (staffHelp) {
      // update current user role and emit LOGIN to refresh sidebar, centers, etc. Then proceed to complete.
      userProfileService.resetCache();
      return userProfileService.get(state.getCurrentCenterId(), $route.current.params.userId).catch(function (err) {
        return dwAlerts.error(err, 'Failed to get user profile.');
      }).then(function (result) {
        session.user.role = result.role;
        $scope.$emit('LOGIN');
        state.setParam('notice', staffHelp.notice);
        return state.setPath(state.getPath() + '/staff-help');
      });
    });
  };
  /**
   * Gets updated invoice data from server and refreshes the invoice
   */


  vm.updateInvoice = function () {
    return purchaseService.get(state.getCurrentCenterId(), state.getCurrentUserId(), vm.purchase.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to update invoice.');
    }).then(function (result) {
      vm.purchase = result;
    });
  };
  /**
   * Apply discount code
   */


  vm.applyDiscountCode = function (form) {
    if (helper.pointFirstInvalid('#applyDiscountCode')) return;
    return purchaseService.createDiscountCode({
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId(),
      purchaseId: vm.purchase.id,
      code: vm.discountCode
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to apply discount code.');
    }).then(function () {
      vm.discountCode = null;
      form.$setPristine();
      dwAlerts.info('Discount code applied.');
      return vm.updateInvoice();
    });
  };
}]));

/***/ }),

/***/ "./bundles/member-sign-up/steps/03-purchase.tpl.html":
/*!***********************************************************!*\
  !*** ./bundles/member-sign-up/steps/03-purchase.tpl.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"memberSignUpPurchase\"> <h1 class=\"page-title flex\"> <span>{{state.getPageTitle()}}</span> <need-help phone=\"vm.center.phone\"></need-help> </h1> <ff-board ff-dim=\"vm.spin\"> <div class=\"ff-grid gutter-v gutter-h\"> <ff-panel role=\"article\" aria-label=\"{{'PURCHASE.INVOICE.HEADER' | translate: { orderId: vm.purchase.orderId } }}\"> <ff-panel-header> <span translate=\"GLOBAL.STEP_X_OF_Y\" translate-values=\"vm.reg\"></span> </ff-panel-header> <div class=\"em\" translate=\"PURCHASE.INVOICE.HEADER\" translate-values=\"{ orderId: vm.purchase.orderId }\" style=\"margin-bottom:.25rem\"></div> <dw-invoice invoice=\"vm.purchase\" center=\"vm.center\" update-invoice=\"vm.updateInvoice()\" dw-invoice-payment-processing-fee settings=\"$resolve.settings\" credit-cards=\"$resolve.userProfile.creditCards\" e-checks=\"$resolve.userProfile.eChecks\"></dw-invoice> </ff-panel> <ff-panel class=\"ff-bmargin\" flex=\"{sm: '0 0 85%', md: '0 0 70%', lg: '0 0 50%'}\"> <form name=\"form\" class=\"ff-row\" id=\"applyDiscountCode\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\"><span translate=\"PURCHASE.DISCOUNT_CODE\"></span></ff-label> <ff-text ff-model=\"vm.discountCode\" ff-required=\"true\" ff-validate-alert=\"{{'PURCHASE.DISCOUNT_CODE' | translate}}\"></ff-text> </label> <ff-btn-group flex=\"none\" class=\"buttons-row\"> <ff-btn type=\"submit\" size=\"sm\" sense=\"save\" ff-disabled=\"form.$pristine\" ff-click=\"vm.applyDiscountCode(form)\"> <span translate=\"PURCHASE.DISCOUNT_CODE.BTN_APPLY\"></span> </ff-btn> </ff-btn-group> </form> </ff-panel> <div> <ff-header style=\"border:0;padding:0 1rem .5rem 1rem\"> <div translate=\"BILLING_PROFILE.PAGE_TITLE\" translate-values=\"{ userName: vm.user.fullNameCompany }\"></div> <small translate=\"GLOBAL.REQUIRED_FIELDS_MARKED_WITH\"></small> </ff-header> <new-billing-profile user=\"vm.user\" settings=\"vm.settings\" id=\"memberSignUpPurchaseValidation\" class=\"ff-grid gutter-v\"></new-billing-profile> </div> </div> </ff-board> <ff-header style=\"border:0\" ng-if=\"$resolve.settings.enableAddOnProductsAtRegistration\"> <small translate=\"MEMBER_SIGN_UP.PURCHASE.ADD_ON_PRODUCTS.HINT\"></small> </ff-header> <ff-board ff-dim=\"vm.spin\" ng-if=\"$resolve.settings.enableAddOnProductsAtRegistration\"> <dw-add-charges purchase=\"vm.purchase\" update-invoice=\"vm.updateInvoice()\" no-collapse=\"true\"></dw-add-charges> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"help\" ff-click=\"vm.staffHelp()\"><span translate=\"GLOBAL.BTN_STAFF_HELP\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" type=\"submit\" ff-click=\"vm.next()\"><span translate=\"SIMPLE_RES.BILLING.BTN_PURCHASE\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/member-sign-up/steps/04-complete.controller.js":
/*!****************************************************************!*\
  !*** ./bundles/member-sign-up/steps/04-complete.controller.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice.directive */ "./shared/dw-invoice/dw-invoice.directive.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.MemberSignUpCompleteCtrl', [shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name]).controller('MemberSignUpCompleteCtrl', ["$scope", "$q", "$timeout", "$translate", "dwAlerts", "state", "helper", "deskworksConfig", "center", "purchase", "template", function ($scope, $q, $timeout, $translate, dwAlerts, state, helper, deskworksConfig, center, purchase, template) {
  var vm = this;
  vm.center = center;
  vm.purchase = purchase;
  vm.template = template;
  state.setPageTitle(vm.template.subject || $translate.instant('MEMBER_SIGN_UP.COMPLETE.PAGE_TITLE'));
  /**
   * Prevent using Back button
   */

  $scope.$on('$locationChangeStart', function (event, newUrl) {
    if (newUrl && newUrl.indexOf('/member-sign-up') >= 0) {
      event.preventDefault();
      dwAlerts.error($translate.instant('MEMBER_SIGN_UP.COMPLETE.BACK_ERROR'));
    }
  });
  /**
   * Back to Home Page button handler
   */

  vm.home = function () {
    var origin = state.getParam('origin');
    var centerId = state.getCurrentCenterId();
    (origin ? state.logout() : $q.when()).finally(function () {
      // If origin presents, log out
      state.resetParams();
      state.setPath(origin || deskworksConfig.getDefaultRoute());
      if (origin) state.setCurrentCenterId(centerId);
    });
    return $timeout(15000);
  };
}]));

/***/ }),

/***/ "./bundles/member-sign-up/steps/04-complete.tpl.html":
/*!***********************************************************!*\
  !*** ./bundles/member-sign-up/steps/04-complete.tpl.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"memberSignUpComplete\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div style=\"white-space:pre-wrap\" class=\"ff-bmargin\" ng-if=\"vm.template.content\">{{vm.template.content}}</div> <ff-info class=\"ff-center ff-bmargin\" ng-if=\"vm.accessCode && vm.settings.enableAccessCodes\" translate=\"SIMPLE_RES.COMPLETE.ACCESS_CODE\" translate-values=\"{ accessCode: vm.accessCode }\"></ff-info> <ff-board> <ff-panel ng-if=\"vm.purchase\"> <ff-panel-header> <span translate=\"SIMPLE_RES.COMPLETE.ORDER.HEADER\" translate-values=\"{ orderId: vm.purchase.orderId }\"></span> </ff-panel-header> <dw-invoice invoice=\"vm.purchase\" center=\"vm.center\" allow-remove=\"false\"></dw-invoice> </ff-panel> <ff-panel ng-if=\"!vm.purchase && !vm.accessCode\"> <ff-info class=\"ff-center\" translate=\"MEMBER_SIGN_UP.COMPLETE.SUCCESS\"></ff-info> </ff-panel> </ff-board> <ff-btn-group class=\"buttons-bottom\" ng-class=\"{'ff-center': !vm.purchase}\"> <ff-btn sense=\"home\" type=\"submit\" ff-click=\"vm.home()\"><span translate=\"GLOBAL.BTN_HOME\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/member-sign-up/steps/no-plan-billing.controller.js":
/*!********************************************************************!*\
  !*** ./bundles/member-sign-up/steps/no-plan-billing.controller.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/new-billing-profile/new-billing-profile.directive */ "./shared/new-billing-profile/new-billing-profile.directive.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.MemberSignUpNoPlanBillingCtrl', ['ngRoute', 'deskworks.userProfile.service', 'deskworks.routeHelper', 'deskworks.helper', 'needHelp', 'deskworks.StaffHelpCtrl', shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name]).controller('MemberSignUpNoPlanBillingCtrl', ["$scope", "$translate", "helper", "state", "userProfile", "reg", "settings", "userProfileService", function ($scope, $translate, helper, state, userProfile, reg, settings, userProfileService) {
  var _context;

  var vm = this;
  vm.userProfile = userProfile;
  vm.reg = reg;
  vm.settings = settings;
  state.setPageTitle($translate.instant('BILLING_PROFILE.PAGE_TITLE', {
    userName: helper.join([vm.userProfile.firstName, vm.userProfile.lastName], ' ')
  })); // filter credit card types according to settings

  settings.creditCardTypes = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = settings.creditCardTypes).call(_context, function (ccType) {
    return ccType.enable;
  });
  vm.userProfile.creditCards.forEach(function (cc) {
    cc.type = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, settings.creditCardTypes, cc.type) || cc.type || {};
  }); // Require at least one CC or ACH

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
  /**
   * Complete Registration button handler
   */

  vm.complete = function () {
    if (helper.pointFirstInvalid('#newBillingProfile')) return;
    return userProfileService.saveBillingProfile(0, vm.userProfile).then(function () {
      return state.setPath(state.getPath() + '/complete');
    });
  };
  /**
   * Back button handler
   */


  vm.back = state.back;
}]));

/***/ }),

/***/ "./bundles/member-sign-up/steps/no-plan-complete.controller.js":
/*!*********************************************************************!*\
  !*** ./bundles/member-sign-up/steps/no-plan-complete.controller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.MemberSignUpNoPlanCompleteCtrl', []).controller('MemberSignUpNoPlanCompleteCtrl', ["$scope", "$q", "$timeout", "$translate", "state", "helper", "deskworksConfig", function ($scope, $q, $timeout, $translate, state, helper, deskworksConfig) {
  var vm = this;
  state.setPageTitle($translate.instant('MEMBER_SIGN_UP.COMPLETE.PAGE_TITLE'));
  /**
   * Back to Home Page button handler
   */

  vm.home = function () {
    var origin = state.getParam('origin');
    var centerId = state.getCurrentCenterId();
    (origin ? state.logout() : $q.when()).finally(function () {
      // If origin presents, log out
      state.resetParams();
      state.setPath(origin || deskworksConfig.getDefaultRoute());
      if (origin) state.setCurrentCenterId(centerId);
    });
    return $timeout(10000);
  };
}]));

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
//# sourceMappingURL=member-sign-up~._b.js.map?_rev=aebf175ce47ced81d910