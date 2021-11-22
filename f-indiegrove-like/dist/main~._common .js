(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main~._common "],{

/***/ "./common sync recursive .*\\.html$":
/*!*******************************!*\
  !*** ./common sync .*\.html$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./billing/billing-profile/billing-profile-edit.tpl.html": "./common/billing/billing-profile/billing-profile-edit.tpl.html",
	"./billing/purchase/audit/purchase-audit.tpl.html": "./common/billing/purchase/audit/purchase-audit.tpl.html",
	"./billing/purchase/dw-add-charges.tpl.html": "./common/billing/purchase/dw-add-charges.tpl.html",
	"./billing/purchase/purchase-edit.tpl.html": "./common/billing/purchase/purchase-edit.tpl.html",
	"./billing/purchase/purchase-list.tpl.html": "./common/billing/purchase/purchase-list.tpl.html",
	"./billing/purchase/purchase-payment.tpl.html": "./common/billing/purchase/purchase-payment.tpl.html",
	"./billing/recurring-billing/recurring-charge-audit.tpl.html": "./common/billing/recurring-billing/recurring-charge-audit.tpl.html",
	"./billing/recurring-billing/recurring-edit.tpl.html": "./common/billing/recurring-billing/recurring-edit.tpl.html",
	"./billing/recurring-billing/recurring-list.tpl.html": "./common/billing/recurring-billing/recurring-list.tpl.html",
	"./flex-forms/controls/ff-control.tpl.html": "./common/flex-forms/controls/ff-control.tpl.html",
	"./flex-forms/ff-datepicker/ff-datepicker.tpl.html": "./common/flex-forms/ff-datepicker/ff-datepicker.tpl.html",
	"./members/our-members/our-member-modal.tpl.html": "./common/members/our-members/our-member-modal.tpl.html",
	"./members/our-members/our-members-embedding.tpl.html": "./common/members/our-members/our-members-embedding.tpl.html",
	"./members/our-members/our-members.tpl.html": "./common/members/our-members/our-members.tpl.html",
	"./members/user-profile/billing-sections/up-billing-method.tpl.html": "./common/members/user-profile/billing-sections/up-billing-method.tpl.html",
	"./members/user-profile/billing-sections/up-credit-cards.tpl.html": "./common/members/user-profile/billing-sections/up-credit-cards.tpl.html",
	"./members/user-profile/billing-sections/up-e-checks.tpl.html": "./common/members/user-profile/billing-sections/up-e-checks.tpl.html",
	"./members/user-profile/sections/up-access-codes.tpl.html": "./common/members/user-profile/sections/up-access-codes.tpl.html",
	"./members/user-profile/sections/up-addresses.tpl.html": "./common/members/user-profile/sections/up-addresses.tpl.html",
	"./members/user-profile/sections/up-co-members.tpl.html": "./common/members/user-profile/sections/up-co-members.tpl.html",
	"./members/user-profile/sections/up-comments.tpl.html": "./common/members/user-profile/sections/up-comments.tpl.html",
	"./members/user-profile/sections/up-custom-fields.tpl.html": "./common/members/user-profile/sections/up-custom-fields.tpl.html",
	"./members/user-profile/sections/up-documents.tpl.html": "./common/members/user-profile/sections/up-documents.tpl.html",
	"./members/user-profile/sections/up-lead-source.tpl.html": "./common/members/user-profile/sections/up-lead-source.tpl.html",
	"./members/user-profile/sections/up-login-info.tpl.html": "./common/members/user-profile/sections/up-login-info.tpl.html",
	"./members/user-profile/sections/up-mailboxes.tpl.html": "./common/members/user-profile/sections/up-mailboxes.tpl.html",
	"./members/user-profile/sections/up-membership.tpl.html": "./common/members/user-profile/sections/up-membership.tpl.html",
	"./members/user-profile/sections/up-personal-info.tpl.html": "./common/members/user-profile/sections/up-personal-info.tpl.html",
	"./members/user-profile/sections/up-phones.tpl.html": "./common/members/user-profile/sections/up-phones.tpl.html",
	"./members/user-profile/sections/up-photo.tpl.html": "./common/members/user-profile/sections/up-photo.tpl.html",
	"./members/user-profile/sections/up-printer-codes.tpl.html": "./common/members/user-profile/sections/up-printer-codes.tpl.html",
	"./members/user-profile/sections/up-shareable.tpl.html": "./common/members/user-profile/sections/up-shareable.tpl.html",
	"./members/user-profile/sections/up-system-info.tpl.html": "./common/members/user-profile/sections/up-system-info.tpl.html",
	"./members/user-profile/sections/up-terms-of-service.tpl.html": "./common/members/user-profile/sections/up-terms-of-service.tpl.html",
	"./members/user-profile/user-profile.tpl.html": "./common/members/user-profile/user-profile.tpl.html",
	"./members/user-search/user-search.tpl.html": "./common/members/user-search/user-search.tpl.html",
	"./sidebar/sidebar.tpl.html": "./common/sidebar/sidebar.tpl.html",
	"./sign-in/dw-sign-in.tpl.html": "./common/sign-in/dw-sign-in.tpl.html",
	"./sign-in/sign-in.tpl.html": "./common/sign-in/sign-in.tpl.html"
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
webpackContext.id = "./common sync recursive .*\\.html$";

/***/ }),

/***/ "./common/billing/billing-profile/billing-profile-edit.controller.js":
/*!***************************************************************************!*\
  !*** ./common/billing/billing-profile/billing-profile-edit.controller.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);



angular.module('deskworks.members.billingProfile.edit', ['ngRoute', 'deskworks.routeHelper', 'deskworks.userProfile.service', 'deskworks.purchase.service', 'deskworks.setup.service']).config(["$routeProvider", function ($routeProvider) {
  'use strict';

  $routeProvider.when('/billing-profiles', {
    templateUrl: 'billing/billing-profile/billing-profile-edit.tpl.html',
    controller: 'BillingProfileEditCtrl as vm',
    label: 'Billing Profile',
    routeBranch: 'billing-profiles',
    translations: ['billing-profile', 'user-profile'],
    resolve: {
      reg: function reg() {},
      userProfile: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function userProfile(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to load billing profile.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to load setup settings.');
        });
      }]
    }
  }).when('/new-user/:userId/membership/billing-profile', {
    templateUrl: 'billing/billing-profile/billing-profile-edit.tpl.html',
    controller: 'BillingProfileEditCtrl',
    controllerAs: 'vm',
    label: 'Billing Profile',
    routeBranch: 'new-user',
    translations: ['billing-profile', 'user-profile'],
    resolve: {
      reg: function reg() {
        return {
          member: false,
          selfRegistration: false,
          step: 2,
          stepCount: 2
        };
      },
      userProfile: ["dwAlerts", "$route", "state", "userProfileService", "routeHelper", "resolveTimezone", function userProfile(dwAlerts, $route, state, userProfileService, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), $route.current.params.userId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to load setup settings.');
        });
      }]
    }
  }).when('/new-member/:userId/membership/billing-profile', {
    templateUrl: 'billing/billing-profile/billing-profile-edit.tpl.html',
    controller: 'BillingProfileEditCtrl',
    controllerAs: 'vm',
    label: 'Billing Profile',
    routeBranch: 'new-member',
    translations: ['billing-profile', 'user-profile'],
    resolve: {
      reg: function reg() {
        return {
          member: true,
          selfRegistration: false,
          step: 2,
          stepCount: 3
        };
      },
      userProfile: ["dwAlerts", "$route", "state", "userProfileService", "routeHelper", "resolveTimezone", function userProfile(dwAlerts, $route, state, userProfileService, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), $route.current.params.userId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to load billing profile.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to load setup settings.');
        });
      }]
    }
  });
}]).controller('BillingProfileEditCtrl', ["$scope", "$translate", "$q", "dwAlerts", "state", "helper", "reg", "userProfile", "settings", "userProfileService", "purchaseService", function ($scope, $translate, $q, dwAlerts, state, helper, reg, userProfile, settings, userProfileService, purchaseService) {
  'use strict';

  var _context;

  var vm = this;
  vm.reg = reg;
  vm.userProfile = userProfile;
  vm.settings = settings; // filter credit card types according to settings

  settings.creditCardTypes = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_context = settings.creditCardTypes).call(_context, function (ccType) {
    return ccType.enable;
  });
  vm.userProfile.creditCards.forEach(function (cc) {
    cc.type = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(helper).call(helper, settings.creditCardTypes, cc.type) || cc.type || {};
  }); // In registration mode, require at least one CC or ACH

  vm.userProfile.creditCards = vm.userProfile.creditCards || [];

  if (reg && !vm.userProfile.creditCards.length && !vm.userProfile.eChecks.length) {
    var cc = userProfileService.creditCard.new(vm.userProfile);
    cc.type = settings.creditCardTypes[0];
    vm.userProfile.creditCards.push(cc);
  }

  state.setPageTitle($translate.instant('BILLING_PROFILE.PAGE_TITLE', {
    userName: vm.userProfile.fullNameCompany
  }));
  /**
   * Next button handler
   */

  vm.next = function (options) {
    options = options || {};
    if (!options.skipBillingProfile && helper.pointFirstInvalid('#billingProfile')) return;
    var promise = $q.when();

    if (options.skipBillingProfile) {
      if (vm.userProfile.billingMethod === 'emailInvoice' || vm.userProfile.billingMethod === 'paperInvoice') {
        promise = userProfileService.saveBillingMethod(state.getCurrentCenterId(), vm.userProfile);
      }
    } else {
      promise = userProfileService.saveBillingProfile(state.getCurrentCenterId(), vm.userProfile);
    }

    return promise.then(function () {
      if (vm.reg && !vm.reg.member) {
        vm.complete = true;
        return; // Complete registration for non-member registration by coordinator
      }

      var promise = purchaseService.createPurchase(state.getCurrentCenterId(), vm.userProfile.id, true, +state.getParam('productId'), state.getParam('attachedReservationUnitId'), state.getParam('membershipStartDate'));
      return promise.catch(function (err) {
        return dwAlerts.error(err, 'Failed to create purchase.');
      }).then(function (result) {
        return state.setPath(state.getPath() + '/purchase/' + result.id);
      });
    });
  };
  /**
   * Back button handler
   */


  vm.back = state.back;
  /**
   * Bind test user data generator
   */

  userProfileService.bindTestBillingGenerator($scope, vm.userProfile, vm.reg);
}]);

/***/ }),

/***/ "./common/billing/billing-profile/billing-profile-edit.tpl.html":
/*!**********************************************************************!*\
  !*** ./common/billing/billing-profile/billing-profile-edit.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"billingProfile\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v\"> <ff-panel ng-if=\"vm.complete\"> <span translate=\"BILLING_PROFILE.REGISTRATION.COMPLETE\" translate-values=\"{ userName: vm.userProfile.fullNameCompany }\"></span> </ff-panel> <up-billing-method user=\"vm.userProfile\" reg=\"vm.reg\" settings=\"vm.settings\" ng-if=\"!vm.complete\" auto-save=\"!vm.reg\" new-payment-methods=\"!!vm.reg\"></up-billing-method> <up-credit-cards user-profile=\"vm.userProfile\" reg=\"vm.reg\" settings=\"vm.settings\" ng-if=\"!vm.complete\"></up-credit-cards> <up-e-checks user-profile=\"vm.userProfile\" reg=\"vm.reg\" ng-if=\"!vm.complete && vm.settings.enableEChecks\"></up-e-checks> </div> <ff-btn-group class=\"buttons-bottom\" ng-if=\"vm.reg && !vm.complete\"> <ff-btn sense=\"next\" ng-if=\"vm.reg && !vm.reg.selfRegistration\" ff-click=\"vm.next({ skipBillingProfile: true })\"> <span translate=\"BILLING_PROFILE.REGISTRATION.SKIP_BILLING\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" ng-if=\"vm.reg\" ff-click=\"vm.next()\"><span translate=\"GLOBAL.BTN_NEXT\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/billing/billing.module.js":
/*!******************************************!*\
  !*** ./common/billing/billing.module.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.billing', ['deskworks.billing.purchase.list', 'deskworks.billing.purchase.edit', 'deskworks.billing.recurringCharge.list', 'deskworks.billing.recurringCharge.edit']);

/***/ }),

/***/ "./common/billing/purchase/audit/purchase-audit.directive.js":
/*!*******************************************************************!*\
  !*** ./common/billing/purchase/audit/purchase-audit.directive.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");




/**
 * purchaseAudit directive -
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.purchaseAuditDirective', ['deskworks.helper', 'deskworks.PurchaseAudit', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name]).directive('purchaseAudit', function () {
  var templateUrl = 'billing/purchase/audit/purchase-audit.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'PurchaseAuditCtrl as $ctrl',
    bindToController: {
      purchaseId: '<'
    }
  };
}).controller('PurchaseAuditCtrl', ["$scope", "state", "dwAlerts", "PurchaseAudit", function ($scope, state, dwAlerts, PurchaseAudit) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.centerId = state.getCurrentCenterId();
    $ctrl.userId = state.getCurrentUserId();
    $ctrl.offset = 0;
    $ctrl.limit = 100;
    $ctrl.entries = [];
    $ctrl.fetch();
  };
  /**
   * Fetch
   */


  $ctrl.fetch = function () {
    if ($ctrl.eof || $ctrl.fetching) return $ctrl.fetching;
    $ctrl.fetching = PurchaseAudit.query({
      centerId: $ctrl.centerId,
      userId: $ctrl.userId,
      purchaseId: $ctrl.purchaseId,
      offset: $ctrl.offset,
      limit: $ctrl.limit
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query audit log.');
    }).finally(function () {
      $ctrl.fetching = null;
    }).then(function (entries) {
      // $ctrl.entries = $ctrl.entries.concat(entries);
      $ctrl.entries = entries;
      $ctrl.offset += entries.length;
      $ctrl.eof = entries.length < $ctrl.limit;
    });
  };

  $scope.$on('purchase:update', function () {
    $ctrl.eof = false;
    $ctrl.fetch();
  });
}]));

/***/ }),

/***/ "./common/billing/purchase/audit/purchase-audit.service.js":
/*!*****************************************************************!*\
  !*** ./common/billing/purchase/audit/purchase-audit.service.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * PurchaseAudit service -
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PurchaseAudit', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('PurchaseAudit', ["$resource", "$timeout", "deskworksConfig", "datesDeserializer", function ($resource, $timeout, deskworksConfig, datesDeserializer) {
  var desDates = datesDeserializer(['createdAt', 'itemDeleted.billedAt', 'itemDeleted.addedAt']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId/audit'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    /**
     * Get purchase changes log
     */
    query: function query(params) {
      return res.query(params).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/billing/purchase/audit/purchase-audit.tpl.html":
/*!***************************************************************!*\
  !*** ./common/billing/purchase/audit/purchase-audit.tpl.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel style=\"margin:1.5rem 0\"> <ff-panel-header><span translate=\"PURCHASE.AUDIT.HEADER\"></span></ff-panel-header> <div ng-if=\"!$ctrl.entries.length && !$ctrl.fetching\" class=\"animate-collapse\"> <span translate=\"GLOBAL.NONE\"></span> </div> <ff-header ng-if=\"$ctrl.entries.length\" class=\"animate-collapse\"> <ff-row> <cell flex=\"4 0 40px\" class=\"invoice-date ff-center\"><span translate=\"PURCHASE.INVOICE.DATE\"></span></cell> <cell flex=\"4 1 40px\" class=\"invoice-date-created ff-center show-lg\"><span translate=\"PURCHASE.INVOICE.DATE_CREATED\"></span></cell> <cell flex=\"4 1 40px\" class=\"invoice-added-by ff-center show-lg\"><span translate=\"PURCHASE.INVOICE.ADDED_BY\"></span></cell> <cell flex=\"4 0 70px\" class=\"invoice-product\"><span translate=\"PURCHASE.INVOICE.PRODUCT\"></span></cell> <cell flex=\"10 1 100px\" class=\"invoice-description show-md\"><span translate=\"PURCHASE.INVOICE.DESCRIPTION\"></span></cell> <cell flex=\"0 0 46px\" class=\"invoice-quantity ff-center show-sm\"><span translate=\"PURCHASE.INVOICE.QUANTITY\"></span></cell> <cell flex=\"0 0 80px\" class=\"invoice-price ff-right show-sm\"><span translate=\"PURCHASE.INVOICE.PRICE\"></span></cell> <cell flex=\"0 0 80px\" class=\"invoice-amount ff-right\"><span translate=\"PURCHASE.INVOICE.AMOUNT\"></span></cell> </ff-row> </ff-header> <ff-col infinite-scroll=\"$ctrl.fetch()\" infinite-scroll-distance=\"2\" infinite-scroll-container=\"'.snap-content-scroller'\"> <div ng-repeat=\"entry in $ctrl.entries\" class=\"animate-collapse\"> <ff-row> <ff-label class=\"standout\"><span> {{entry.createdAt | date:'mediumDate'}} <span nice-time=\"entry.createdAt\"></span>, item deleted by {{entry.createdBy}} </span></ff-label> </ff-row> <ff-row> <ff-static flex=\"4 0 40px\" class=\"invoice-date ff-center\" ff-bind=\"::entry.itemDeleted.billedAt | date:'mediumDate'\"></ff-static> <ff-static flex=\"4 1 40px\" class=\"invoice-date-created ff-center show-lg\" ff-bind=\"::entry.itemDeleted.addedAt | date:'mediumDate'\"></ff-static> <ff-static flex=\"4 1 40px\" class=\"invoice-added-by ff-center show-lg\" ff-bind=\"::entry.itemDeleted.addedBy\"></ff-static> <ff-static flex=\"4 0 70px\" class=\"invoice-product\" ff-bind=\"::entry.itemDeleted.name\"></ff-static> <ff-static flex=\"10 1 100px\" class=\"invoice-description show-md\" ff-bind=\"::entry.itemDeleted.description\"></ff-static> <ff-static flex=\"0 0 46px\" class=\"invoice-quantity ff-center show-sm\" ff-bind=\"::entry.itemDeleted.quantity | round\"></ff-static> <ff-static flex=\"0 0 80px\" class=\"invoice-price ff-right show-sm\" ff-bind=\"::entry.itemDeleted.price | ncurrency\"></ff-static> <ff-static flex=\"0 0 80px\" class=\"invoice-amount ff-right\" ff-bind=\"::entry.itemDeleted.amount | ncurrency\"></ff-static> </ff-row> </div> </ff-col> <ff-row ff-dim=\"true\" ng-if=\"$ctrl.fetching\" class=\"animate-collapse\"><ff-static></ff-static></ff-row> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/billing/purchase/dw-add-charges.directive.js":
/*!*************************************************************!*\
  !*** ./common/billing/purchase/dw-add-charges.directive.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dw_add_charges_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dw-add-charges.scss */ "./common/billing/purchase/dw-add-charges.scss");
/* harmony import */ var _dw_add_charges_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dw_add_charges_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * dwAddCharges directive - 'Add Charges' section of purchase
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwAddCharges', ['ngRoute', 'deskworks.helper', 'deskworks.state', 'deskworks.purchase.service']).directive('dwAddCharges', function () {
  return {
    restrict: 'EAC',
    scope: true,
    templateUrl: 'billing/purchase/dw-add-charges.tpl.html',
    controller: 'dwAddChargesCtrl as $ctrl',
    bindToController: {
      purchase: '<',
      updateInvoice: '&',
      userPriceList: '<',
      noCollapse: '<'
    }
  };
}).controller('dwAddChargesCtrl', ["$scope", "$filter", "$route", "$translate", "dwAlerts", "helper", "state", "purchaseService", function ($scope, $filter, $route, $translate, dwAlerts, helper, state, purchaseService) {
  var $ctrl = this;
  $ctrl.collapsed = {};
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {};
  /**
   * $onChanges
   */


  $ctrl.$onChanges = function () {
    // Add custom charge
    if ($ctrl.purchase && $ctrl.purchase.options && state.isLoggedAdmin() && !_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.purchase.options.chargeTypes, 'custom')) {
      $ctrl.purchase.options.chargeTypes.push({
        id: 'custom',
        name: $translate.instant('PURCHASE.CHARGES.CUSTOM'),
        packages: [{
          name: $translate.instant('PURCHASE.CHARGES.CUSTOM'),
          price: '0.0'
        }]
      });
    } // Additional init for packages


    if ($ctrl.purchase && $ctrl.purchase.options) {
      $ctrl.purchase.options.chargeTypes.forEach(function (chargeType) {
        chargeType.packages.forEach(function (pkg) {
          pkg.chargedAt = moment();
          pkg.quantity = 1;
          pkg.notes = '';
        });
      });
    }
  };
  /**
   * Create Charge handler
   */


  $ctrl.createCharge = function (chargeType, product) {
    if (helper.pointFirstInvalid('#product' + product.id)) return;
    var data = {
      chargedAt: $filter('date')(product.chargedAt, 'yyyy-MM-dd'),
      notes: product.notes,
      quantity: product.quantity
    };

    if (chargeType.id === 'custom') {
      data.packageName = product.name;
      data.price = product.price;
      data.isTaxable = product.isTaxable;
    } else {
      data.packageId = product.id;
    }

    return purchaseService.createCharge(state.getCurrentCenterId(), state.getCurrentUserId(), $ctrl.purchase.id, data, chargeType.id === 'custom', !!$route.current.params.productId, $route.current.params.productId).catch(function (err) {
      return dwAlerts.error(err, 'Failed to add charge.');
    }).then(function () {
      return $ctrl.updateInvoice();
    });
  };
}]));

/***/ }),

/***/ "./common/billing/purchase/dw-add-charges.scss":
/*!*****************************************************!*\
  !*** ./common/billing/purchase/dw-add-charges.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/billing/purchase/dw-add-charges.tpl.html":
/*!*********************************************************!*\
  !*** ./common/billing/purchase/dw-add-charges.tpl.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div> <div class=\"em ff-bmargin\" ng-if=\"!$ctrl.noCollapse\"> <span translate=\"PURCHASE.CHARGES.HEADER\"></span><span ng-if=\"$ctrl.userPriceList\">, <span translate=\"PURCHASE.USER_PRICE_LIST\"></span>: <span ng-bind=\"$ctrl.userPriceList.name || '-'\"></span> </span> </div> <div id=\"chargeType-{{chargeType.id}}\" ng-repeat=\"chargeType in $ctrl.purchase.options.chargeTypes\"> <ff-btn sense=\"collapse\" ff-click=\"$ctrl.collapsed[chargeType.id] = !$ctrl.collapsed[chargeType.id]\" ng-class=\"{ collapsed: !$ctrl.collapsed[chargeType.id] }\" class=\"dw-add-charges-collapse-btn\" ng-if=\"!$ctrl.noCollapse\">{{chargeType.name}}</ff-btn> <div ng-collapse=\"!$ctrl.collapsed[chargeType.id] && !$ctrl.noCollapse\"> <ff-panel class=\"ff-bmargin\" role=\"article\" aria-label=\"{{'PURCHASE.CHARGES.ADD_CHARGES' | translate: { chargeType: chargeType.name } }}\"> <ff-panel-header ng-if=\"$ctrl.noCollapse\">{{chargeType.name}}</ff-panel-header> <form name=\"formProduct\" id=\"product{{product.id}}\" ng-repeat=\"product in chargeType.packages\"> <div class=\"ff-bmargin\"> <ff-header>{{product.name}} - {{product.price | ncurrency}}</ff-header> <div class=\"ff-grid gutter-h-half\"> <label flex=\"{md: '0 0 50%'}\" class=\"ff-row\" ng-if=\"chargeType.id === 'custom'\"> <ff-label flex=\"0 0 78px\" ff-required=\"true\"><span translate=\"PURCHASE.CHARGES.NAME\"></span></ff-label> <ff-text name=\"name\" ff-model=\"product.name\" ff-required=\"true\" ff-validate-alert=\"{{'PURCHASE.CHARGES.NAME' | translate}}\"></ff-text> </label> <ff-row flex=\"{md: '0 0 50%'}\" ng-if=\"chargeType.id === 'custom'\"> <label flex=\"0 1 160px\"> <ff-label flex=\"0 0 78px\" ff-required=\"true\"><span translate=\"PURCHASE.CHARGES.PRICE\"></span></ff-label> <ff-price name=\"price\" ff-model=\"product.price\" ff-required=\"true\" ff-validate-alert=\"{{'PURCHASE.CHARGES.PRICE' | translate}}\"></ff-price> </label> <label flex=\"0 0 auto\"> <ff-checkbox flex=\"0 0 auto\" name=\"isTaxable\" ff-model=\"product.isTaxable\">Is Taxable</ff-checkbox> </label> </ff-row> <ff-row flex=\"{md: '0 0 50%'}\"> <label flex=\"0 0 34%\"> <ff-label flex=\"0 0 78px\" ff-required=\"true\"><span translate=\"PURCHASE.CHARGES.QUANTITY\"></span></ff-label> <ff-number flex=\"1 1 1%\" name=\"qty\" ff-model=\"product.quantity\" ff-required=\"true\" ff-validate-alert=\"{{'PURCHASE.CHARGES.QUANTITY' | translate}}\"></ff-number> </label> <label flex=\"0 0 66%\"> <ff-label flex=\"0 0 78px\"><req translate=\"PURCHASE.CHARGES.USE_DATE\"></req></ff-label> <ff-date flex=\"1 1 1%\" name=\"chargedAt\" ff-model=\"product.chargedAt\" ff-required=\"true\" ff-validate-alert=\"{{'PURCHASE.CHARGES.USE_DATE' | translate}}\"></ff-date> </label> </ff-row> <ff-row flex=\"{md: '0 0 50%'}\"> <label flex=\"1 1 auto\"> <ff-label flex=\"0 0 78px\"><span translate=\"PURCHASE.CHARGES.NOTES\"></span></ff-label> <ff-text flex=\"1 1 1%\" name=\"notes\" ff-model=\"product.notes\"></ff-text> </label> <ff-btn-group flex=\"none\"> <ff-btn sense=\"save\" size=\"sm\" type=\"submit\" ff-click=\"$ctrl.createCharge(chargeType, product)\"> <span translate=\"PURCHASE.CHARGES.BTN_ADD\"></span> </ff-btn> </ff-btn-group> </ff-row> </div> </div> </form> </ff-panel> </div> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/billing/purchase/purchase-edit.controller.js":
/*!*************************************************************!*\
  !*** ./common/billing/purchase/purchase-edit.controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _purchase_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase.scss */ "./common/billing/purchase/purchase.scss");
/* harmony import */ var _purchase_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_purchase_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");
/* harmony import */ var _purchase_payment_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purchase-payment.directive */ "./common/billing/purchase/purchase-payment.directive.js");
/* harmony import */ var shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice.directive */ "./shared/dw-invoice/dw-invoice.directive.js");
/* harmony import */ var bundles_lazy_loaders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bundles/lazy-loaders.service */ "./bundles/lazy-loaders.service.js");










/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.billing.purchase.edit', ['ngRoute', bundles_lazy_loaders_service__WEBPACK_IMPORTED_MODULE_9__["default"].name, 'autoSave', 'deskworks.center.service', 'deskworks.purchase.service', 'deskworks.userProfile.service', 'deskworks.inventory.priceList.service', 'deskworks.routeHelper', 'deskworks.helper', 'deskworks.dwAddCharges', shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_6__["default"].name, 'deskworks.SecurityDepositRecord', _purchase_payment_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_8__["default"].name, 'deskworks.purchaseAuditDirective']).config(["$routeProvider", function ($routeProvider) {
  /**
   * Post Payment and Charges
   */
  $routeProvider.when('/purchases/:purchaseId/edit', {
    templateUrl: 'billing/purchase/purchase-edit.tpl.html',
    controller: 'PurchaseEditCtrl as $ctrl',
    label: 'Edit',
    routeBranch: 'purchases',
    translations: ['purchase', 'billing-profile', 'payments-assignment'],
    resolve: {
      reg: function reg() {},
      purchase: ["$route", "dwAlerts", "state", "purchaseService", "routeHelper", "resolveTimezone", function purchase($route, dwAlerts, state, purchaseService, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return purchaseService.get(state.getCurrentCenterId(), state.getCurrentUserId(), $route.current.params.purchaseId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get purchase.');
          });
        });
      }],
      user: ["dwAlerts", "routeHelper", "state", "userProfileService", "resolveTimezone", function user(dwAlerts, routeHelper, state, userProfileService, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      center: ["dwAlerts", "centerService", "state", function center(dwAlerts, centerService, state) {
        return centerService.get(state.getCurrentCenterId(state.getCurrentCenterId())).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to load setup settings.');
        });
      }],
      lazy: 'lazyLoadPaymentsAssignment'
    }
  });
  /**
   * Register new member by coordinator
   */

  $routeProvider.when('/new-member/:userId/membership/billing-profile/purchase/:purchaseId', {
    templateUrl: 'billing/purchase/purchase-edit.tpl.html',
    controller: 'PurchaseEditCtrl as $ctrl',
    label: 'Purchase',
    routeBranch: 'new-member',
    translations: ['purchase', 'billing-profile', 'payments-assignment'],
    resolve: {
      reg: function reg() {
        return {
          member: true,
          selfRegistration: false,
          step: 3,
          stepCount: 3
        };
      },
      purchase: ["$route", "dwAlerts", "state", "purchaseService", "routeHelper", "resolveTimezone", function purchase($route, dwAlerts, state, purchaseService, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return purchaseService.get(state.getCurrentCenterId(), $route.current.params.userId, $route.current.params.purchaseId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get purchase.');
          });
        });
      }],
      user: ["dwAlerts", "routeHelper", "state", "userProfileService", function user(dwAlerts, routeHelper, state, userProfileService) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      center: ["dwAlerts", "centerService", "state", function center(dwAlerts, centerService, state) {
        return centerService.get(state.getCurrentCenterId(state.getCurrentCenterId())).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to load setup settings.');
        });
      }],
      lazy: 'lazyLoadPaymentsAssignment'
    }
  });
}]).controller('PurchaseEditCtrl', ["$scope", "$filter", "$translate", "$q", "$injector", "dwAlerts", "state", "center", "purchase", "helper", "reg", "user", "settings", "session", "purchaseService", "priceListService", "SecurityDepositRecord", "autoSave", function ($scope, $filter, $translate, $q, $injector, dwAlerts, state, center, purchase, helper, reg, user, settings, session, purchaseService, priceListService, SecurityDepositRecord, autoSave) {
  var $ctrl = this;
  $scope.backPath = '/purchases';
  $scope.$watch('state.getCurrentCenterId()', function (nv, ov) {
    if (nv !== ov) state.setPath($scope.backPath);
  });
  $ctrl.center = center;
  $ctrl.reg = reg;
  $ctrl.user = user;
  $ctrl.showOrderDates = state.isLoggedAdmin();
  var limitRefund = settings.limitRefundProcessingTo;
  $ctrl.allowRefundProcessing = limitRefund[session.user.role] || _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(limitRefund).every(function (key) {
    return !limitRefund[key];
  });
  $ctrl.purchase = purchase;

  if (angular.isDefined(state.getParam('redirect'))) {
    $ctrl.redirect = state.getParam('redirect');
  }

  state.setPageTitle($translate.instant('PURCHASE.PAGE_TITLE', {
    userName: user.fullNameCompany,
    centerName: center.name
  }));

  if (user.membershipPriceListId) {
    priceListService.getPricelist(state.getCurrentCenterId(), user.membershipPriceListId).then(function (result) {
      $ctrl.userPriceList = result;
    });
  }
  /**
   * For simple purchase edit, prepare "Consolidate Order With Purchase" dropdown
   */


  $ctrl.queryConsolidations = function () {
    if (!$ctrl.reg) {
      purchaseService.queryConsolidations({
        centerId: state.getCurrentCenterId(),
        userId: $ctrl.user.id,
        purchaseId: $ctrl.purchase.id
      }).then(function (result) {
        $ctrl.consolidations = result;
        $ctrl.consolidationId = ($ctrl.consolidations[0] || {}).id;
      });
    }
  };

  $ctrl.queryConsolidations();
  /**
   * Back to Purchases handler. Redirects to Post Payments and charges screen.
   */

  $ctrl.backToPurchases = function () {
    return state.setPath('/purchases');
  };
  /**
   * Consolidate Order With Purchase handler
   */


  $ctrl.consolidatePurchase = function (consolidationId) {
    return purchaseService.consolidate(state.getCurrentCenterId(), state.getCurrentUserId(), $ctrl.purchase.id, consolidationId).catch(function (err) {
      return dwAlerts.error(err, 'Failed to consolidate order with purchase.');
    }).then(function () {
      return $ctrl.updateInvoice();
    });
  };
  /**
   * Gets updated invoice data from server and refreshes the invoice
   */


  $ctrl.updateInvoice = function () {
    return purchaseService.get(state.getCurrentCenterId(), state.getCurrentUserId(), $ctrl.purchase.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get purchase order.');
    }).then(function (result) {
      $ctrl.purchase = result;
      $ctrl.queryConsolidations();
    }).then(function (_) {
      return $scope.$broadcast('purchase:update');
    });
  };
  /**
   * Get updated records from server
   */


  $ctrl.updateSecurityDepositRecords = function () {
    return SecurityDepositRecord.query({
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId()
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query security deposit records.');
    }).then(function (result) {
      $ctrl.securityDepositRecords = result;
    });
  };

  $ctrl.updateSecurityDepositRecords(); // initial loading

  /**
   * Update invoice and security deposit records
   */

  $ctrl.update = function () {
    return $q.all([$ctrl.updateInvoice(), $ctrl.updateSecurityDepositRecords()]);
  };
  /**
   * Filter security deposit payments/refunds
   */


  $ctrl.filterBillingMethods = function (val) {
    var _context, _context2;

    var sdr = $ctrl.securityDepositRecords && _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3___default()(_context = $ctrl.securityDepositRecords).call(_context) || [];

    var lastBalanceRecord = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = sdr.reverse()).call(_context2, function (rec) {
      return angular.isDefined(rec.balance);
    });

    return val.id !== 'securityDeposit' || lastBalanceRecord && lastBalanceRecord.balance > 0;
  };
  /**
   * Bill Date / Due Date change handler
   */


  $ctrl.onOrderDateChange = autoSave.wrap(onOrderDateChange);

  function onOrderDateChange() {
    if (helper.pointFirstInvalid('.purchase-dates')) return;
    var data = helper.pick($ctrl.purchase, ['billDate', 'dueDate']);
    $ctrl.orderSpin = true;
    return purchaseService.update(state.getCurrentCenterId(), state.getCurrentUserId(), $ctrl.purchase.id, data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to update purchase order.');
    }).finally(function (_) {
      return $ctrl.orderSpin = false;
    });
  }

  $ctrl.isPaymentsAssignmentEnabled = function () {
    return session.isAdmin() && $injector.has('paymentsAssignmentDialog');
  };

  $ctrl.paymentAssignment = function () {
    return $injector.get('paymentsAssignmentDialog').open({
      scope: $scope.$new(),
      purchaseId: $ctrl.purchase.id
    });
  };
}]));

/***/ }),

/***/ "./common/billing/purchase/purchase-edit.tpl.html":
/*!********************************************************!*\
  !*** ./common/billing/purchase/purchase-edit.tpl.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"purchase\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel> <ff-spin ng-if=\"$ctrl.orderSpin\"></ff-spin> <ff-panel-header ng-if=\"$ctrl.reg\"><span translate=\"GLOBAL.STEP_X_OF_Y\" translate-values=\"$ctrl.reg\"></span></ff-panel-header> <ff-header style=\"margin-bottom:.5rem\"> <div class=\"ff-grid gutter-v-half\"> <div flex=\"none\"><span translate=\"PURCHASE.LIST.ORDER_ID\"></span>: {{$ctrl.purchase.orderId}}</div> <div flex=\"auto\" ng-if=\"$ctrl.showOrderDates\"> <div class=\"ff-grid purchase-dates\"> <label flex=\"0 0 200px\" class=\"ff-row\"> <ff-label flex=\"0 0 82px\"><req translate=\"PURCHASE.INVOICE.BILL_DATE\"></req></ff-label> <ff-date name=\"billDate\" ff-model=\"$ctrl.purchase.billDate\" ff-change=\"$ctrl.onOrderDateChange()\" ff-required=\"true\" ff-validate-alert=\"{{ 'PURCHASE.INVOICE.BILL_DATE' | translate }}\"></ff-date> </label> <label flex=\"0 0 200px\" class=\"ff-row\"> <ff-label flex=\"0 0 82px\"><req translate=\"PURCHASE.INVOICE.DUE_DATE\"></req></ff-label> <ff-date name=\"dueDate\" ff-model=\"$ctrl.purchase.dueDate\" ff-change=\"$ctrl.onOrderDateChange()\" ff-required=\"true\" ff-validate-alert=\"{{ 'PURCHASE.INVOICE.DUE_DATE' | translate }}\"></ff-date> </label> </div> </div> </div> </ff-header> <dw-invoice invoice=\"$ctrl.purchase\" center=\"$ctrl.center\" update-invoice=\"$ctrl.updateInvoice()\"></dw-invoice> </ff-panel> <form name=\"formConsolidate\" ng-if=\"$ctrl.consolidations.length > 0\"> <ff-panel> <ff-header><span translate=\"PURCHASE.CONSOLIDATE\"></span></ff-header> <ff-row class=\"gutter-h-half\"> <ff-select flex=\"0 0 120px\" name=\"consolidation\" ff-model=\"$ctrl.consolidationId\" ff-options=\"opt.id as opt.orderId for opt in $ctrl.consolidations\"></ff-select> <ff-btn flex=\"none\" type=\"submit\" sense=\"merge\" size=\"sm\" ff-click=\"$ctrl.consolidatePurchase($ctrl.consolidationId)\"> <span translate=\"PURCHASE.BTN_COMBINE\"></span> </ff-btn> </ff-row> </ff-panel> </form> <div ng-if=\"$ctrl.reg\"> <purchase-payment type=\"payment\" settings=\"$resolve.settings\" user=\"$resolve.user\" purchase-id=\"$ctrl.purchase.id\" update-invoice=\"$ctrl.update()\" default-amount=\"$ctrl.purchase.balance\" filter-billing-methods=\"$ctrl.filterBillingMethods\"></purchase-payment> </div> <div ng-if=\"!$ctrl.reg\" style=\"margin-bottom:.5rem\"> <div> <ff-btn sense=\"collapse\" ff-click=\"$ctrl.paymentCollapsed = !$ctrl.paymentCollapsed\" class=\"dw-add-charges-collapse-btn\" ng-class=\"{ collapsed: !$ctrl.paymentCollapsed }\"> <span translate=\"PURCHASE.PAYMENT.BTN_ADD\"></span> </ff-btn> <div ng-collapse=\"!$ctrl.paymentCollapsed\"> <purchase-payment type=\"payment\" settings=\"$resolve.settings\" user=\"$resolve.user\" purchase-id=\"$ctrl.purchase.id\" update-invoice=\"$ctrl.update()\" default-amount=\"$ctrl.purchase.balance\" filter-billing-methods=\"$ctrl.filterBillingMethods\"></purchase-payment> </div> </div> <div> <ff-btn sense=\"collapse\" ff-click=\"$ctrl.depositCollapsed = !$ctrl.depositCollapsed\" class=\"dw-add-charges-collapse-btn\" ng-class=\"{ collapsed: !$ctrl.depositCollapsed }\"> <span translate=\"PURCHASE.DEPOSIT.BTN_ADD\"></span> </ff-btn> <div ng-collapse=\"!$ctrl.depositCollapsed\"> <purchase-payment type=\"deposit\" settings=\"$resolve.settings\" user=\"$resolve.user\" purchase-id=\"$ctrl.purchase.id\" update-invoice=\"$ctrl.update()\"></purchase-payment> </div> </div> <div> <ff-btn sense=\"collapse\" ff-click=\"$ctrl.discountCollapsed = !$ctrl.discountCollapsed\" class=\"dw-add-charges-collapse-btn\" ng-class=\"{ collapsed: !$ctrl.discountCollapsed }\"> <span translate=\"PURCHASE.DISCOUNT.BTN_ADD\"></span> </ff-btn> <div ng-collapse=\"!$ctrl.discountCollapsed\"> <purchase-payment type=\"discount\" settings=\"$resolve.settings\" user=\"$resolve.user\" purchase-id=\"$ctrl.purchase.id\" update-invoice=\"$ctrl.updateInvoice()\"></purchase-payment> </div> </div> <div ng-if=\"$ctrl.allowRefundProcessing\"> <ff-btn sense=\"collapse\" ff-click=\"$ctrl.refundCollapsed = !$ctrl.refundCollapsed\" class=\"dw-add-charges-collapse-btn\" ng-class=\"{ collapsed: !$ctrl.refundCollapsed }\"> <span translate=\"PURCHASE.REFUND.BTN_ADD\"></span> </ff-btn> <div ng-collapse=\"!$ctrl.refundCollapsed\"> <purchase-payment type=\"refund\" settings=\"$resolve.settings\" user=\"$resolve.user\" purchase-id=\"$ctrl.purchase.id\" payment-methods=\"$ctrl.purchase.options.refundCreditCards\" update-invoice=\"$ctrl.update()\" filter-billing-methods=\"$ctrl.filterBillingMethods\"></purchase-payment> </div> </div> </div> <dw-add-charges purchase=\"$ctrl.purchase\" update-invoice=\"$ctrl.update()\" user-price-list=\"$ctrl.userPriceList\"></dw-add-charges> <ff-btn-group class=\"buttons-bottom\" ng-if=\"!$ctrl.reg\"> <ff-btn sense=\"back\" ff-click=\"$ctrl.backToPurchases()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"charge\" ng-if=\"$ctrl.isPaymentsAssignmentEnabled()\" ff-click=\"$ctrl.paymentAssignment()\"> <span translate=\"PAYMENTS_ASSIGNMENT.BTN_ASSIGN\"></span> </ff-btn> <ff-btn sense=\"collapseBtn\" ng-if=\"$ctrl.purchase.id && state.isLoggedAdmin()\" ff-click=\"$ctrl.showAudit = !$ctrl.showAudit\" ng-class=\"{ collapsed: !$ctrl.showAudit }\"> <span translate=\"GLOBAL.BTN_AUDIT\"></span> </ff-btn> </ff-btn-group> </div> </div> <div ng-if=\"$ctrl.showAudit\" class=\"animate-collapse\"> <purchase-audit purchase-id=\"$ctrl.purchase.id\"></purchase-audit> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/billing/purchase/purchase-list.controller.js":
/*!*************************************************************!*\
  !*** ./common/billing/purchase/purchase-list.controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.billing.purchase.list', ['deskworks.center.service', 'deskworks.purchase.service', 'deskworks.routeHelper', 'deskworks.SecurityDepositRecord']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/purchases', {
    templateUrl: 'billing/purchase/purchase-list.tpl.html',
    controller: 'PurchaseListCtrl as $ctrl',
    label: 'Purchases',
    routeBranch: 'purchases',
    translations: ['purchase'],
    resolve: {
      purchases: ["dwAlerts", "purchaseService", "state", "routeHelper", "resolveTimezone", function purchases(dwAlerts, purchaseService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return purchaseService.query(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query purchases.');
          });
        });
      }],
      user: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function user(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      center: ["dwAlerts", "centerService", "state", function center(dwAlerts, centerService, state) {
        return centerService.get(state.getCurrentCenterId(state.getCurrentCenterId())).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      securityDepositRecords: ["dwAlerts", "state", "routeHelper", "resolveTimezone", "SecurityDepositRecord", function securityDepositRecords(dwAlerts, state, routeHelper, resolveTimezone, SecurityDepositRecord) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return SecurityDepositRecord.query({
            centerId: state.getCurrentCenterId(),
            userId: state.getCurrentUserId()
          }).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query security deposit records.');
          });
        });
      }]
    }
  });
}]).controller('PurchaseListCtrl', ["$scope", "$translate", "dwAlerts", "center", "purchases", "state", "helper", "user", "purchaseService", function ($scope, $translate, dwAlerts, center, purchases, state, helper, user, purchaseService) {
  var $ctrl = this;
  $ctrl.center = center;
  $ctrl.purchases = purchases;
  $ctrl.types = [{
    id: 'credit',
    name: 'PURCHASE.LIST.CREDIT.HEADER'
  }, {
    id: 'open',
    name: 'PURCHASE.LIST.OPEN.HEADER'
  }, {
    id: 'paid',
    name: 'PURCHASE.LIST.PAID.HEADER'
  }];
  $ctrl.types.forEach(function (type) {
    var _context;

    type.orders = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.purchases).call(_context, function (p) {
      return p.type === type.id;
    });
  });
  state.setPageTitle($translate.instant('PURCHASE.LIST.PAGE_TITLE', {
    userName: user.fullNameCompany,
    centerName: center.name
  }));
  /**
   * Edit Purchase handler
   */

  $ctrl.editPurchase = function (order) {
    return state.setPath('/purchases/' + order.id + '/edit');
  };
  /**
   * View Purchase handler
   */


  $ctrl.viewPurchase = function (order) {
    return state.setPath('/purchases/' + order.id + '/view');
  };
  /**
   * Create New Purchase handler
   */


  $ctrl.createPurchase = function () {
    return purchaseService.createPurchase(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to create purchase');
    }).then(function (result) {
      return state.setPath('/purchases/' + result.id + '/edit');
    });
  };
}]));

/***/ }),

/***/ "./common/billing/purchase/purchase-list.tpl.html":
/*!********************************************************!*\
  !*** ./common/billing/purchase/purchase-list.tpl.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"purchase-list ff-grid\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v\"> <ng-include src=\"'securityDepositRecords'\"></ng-include> <ff-btn-group ng-if=\"$ctrl.purchases.length > 5\"> <ff-btn sense=\"new\" ff-click=\"$ctrl.createPurchase()\"><span translate=\"PURCHASE.LIST.BTN_NEW\"></span></ff-btn> </ff-btn-group> <ff-panel ng-repeat=\"type in $ctrl.types\" ng-if=\"type.orders.length\"> <ff-panel-header><span translate=\"{{type.name}}\"></span></ff-panel-header> <ff-header> <ff-row> <cell flex=\"1 1 12%\"><span translate=\"PURCHASE.LIST.ORDER_ID\"></span></cell> <cell flex=\"1 1 15%\" class=\"ff-right show-sm\"><span translate=\"PURCHASE.LIST.FIRST_OPENED\"></span></cell> <cell flex=\"1 1 15%\" class=\"ff-right show-md\"><span translate=\"PURCHASE.LIST.LAST_MODIFIED\"></span></cell> <cell flex=\"1 1 15%\" class=\"ff-right\"><span translate=\"PURCHASE.LIST.PURCHASE_TOTAL\"></span></cell> <cell flex=\"1 1 12%\" class=\"ff-right show-sm\" ng-if=\"$ctrl.center.taxRates.length\"><span translate=\"PURCHASE.LIST.TAX_TOTAL\"></span></cell> <cell flex=\"1 1 15%\" class=\"ff-right show-xs\"><span translate=\"PURCHASE.LIST.PAYMENT_TOTAL\"></span></cell> <cell flex=\"1 1 15%\" class=\"ff-right\"><span translate=\"PURCHASE.LIST.BALANCE_DUE\"></span></cell> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row zero-height\"> <ff-btn sense=\"view\" size=\"xs\"></ff-btn> <ff-btn sense=\"edit\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-row ng-repeat=\"order in type.orders\"> <ff-static flex=\"1 1 12%\" ff-bind=\"order.id\"></ff-static> <ff-static flex=\"1 1 15%\" class=\"ff-right show-sm\" ff-bind=\"order.firstOpened | date:'mediumDate'\"></ff-static> <ff-static flex=\"1 1 15%\" class=\"ff-right show-md\" ff-bind=\"order.lastModified | date:'mediumDate'\"></ff-static> <ff-static flex=\"1 1 15%\" class=\"ff-right\" ff-bind=\"order.chargesTotal | ncurrency\"></ff-static> <ff-static flex=\"1 1 12%\" class=\"ff-right show-sm\" ff-bind=\"order.taxTotal | ncurrency\" ng-if=\"$ctrl.center.taxRates.length\"></ff-static> <ff-static flex=\"1 1 15%\" class=\"ff-right show-xs\" ff-bind=\"order.paymentTotal | ncurrency\"></ff-static> <ff-static flex=\"1 1 15%\" class=\"ff-right\" ff-bind=\"order.balance | ncurrency\"></ff-static> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row\"> <ff-btn sense=\"view\" size=\"xs\" ff-click=\"$ctrl.viewPurchase(order)\" title=\"{{'PURCHASE.LIST.BTN_VIEW' | translate}}\"></ff-btn> <ff-btn sense=\"edit\" size=\"xs\" ff-click=\"$ctrl.editPurchase(order)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> </ff-panel> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"new\" ff-click=\"$ctrl.createPurchase()\"><span translate=\"PURCHASE.LIST.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> <script type=\"text/ng-template\" id=\"securityDepositRecords\"> <ff-panel ng-if=\"$resolve.securityDepositRecords.length > 0\" class=\"animate-collapse\">\n    <ff-panel-header style=\"margin-bottom: .5rem\"><span translate=\"PURCHASE.SECURITY_DEPOSIT_RECORDS.HEADER\"></span></ff-panel-header>\n    <ff-header>\n      <ff-row>\n        <cell flex=\"0 0 72px\" class=\"ff-right\"><span translate=\"PURCHASE.SECURITY_DEPOSIT_RECORDS.ORDER_NO\"></span></cell>\n        <cell flex=\"1 0 95px\" class=\"ff-right show-md\"><span translate=\"PURCHASE.SECURITY_DEPOSIT_RECORDS.DATE\"></span></cell>\n        <cell flex=\"1 0 72px\" class=\"ff-right\"><span translate=\"PURCHASE.SECURITY_DEPOSIT_RECORDS.CHARGED\"></span></cell>\n        <cell flex=\"1 0 72px\" class=\"ff-right\"><span translate=\"PURCHASE.SECURITY_DEPOSIT_RECORDS.PAID\"></span></cell>\n        <cell flex=\"1 0 72px\" class=\"ff-right show-sm\"><span translate=\"PURCHASE.SECURITY_DEPOSIT_RECORDS.USED\"></span></cell>\n        <cell flex=\"1 0 72px\" class=\"ff-right show-sm\"><span translate=\"PURCHASE.SECURITY_DEPOSIT_RECORDS.REFUND\"></span></cell>\n        <cell flex=\"1 0 72px\" class=\"ff-right\"><span translate=\"PURCHASE.SECURITY_DEPOSIT_RECORDS.BALANCE\"></span></cell>\n        <cell flex=\"2 1 250px\" class=\"show-lg\"><span translate=\"PURCHASE.SECURITY_DEPOSIT_RECORDS.DESCRIPTION\"></span></cell>\n      </ff-row>\n    </ff-header>\n\n    <ff-row ng-repeat=\"rec in $resolve.securityDepositRecords\">\n      <ff-static flex=\"0 0 72px\" class=\"ff-right\">{{::rec.orderId}}</ff-static>\n      <ff-static flex=\"1 0 95px\" class=\"ff-right show-md\">{{::rec.date | date:'mediumDate'}}</ff-static>\n      <ff-static flex=\"1 0 72px\" class=\"ff-right\">{{::rec.charged | ncurrency | nd}}</ff-static>\n      <ff-static flex=\"1 0 72px\" class=\"ff-right\">{{::rec.paid | ncurrency | nd}}</ff-static>\n      <ff-static flex=\"1 0 72px\" class=\"ff-right show-sm\">{{::rec.used | ncurrency | nd}}</ff-static>\n      <ff-static flex=\"1 0 72px\" class=\"ff-right show-sm\">{{::rec.refund | ncurrency | nd}}</ff-static>\n      <ff-static flex=\"1 0 72px\" class=\"ff-right\">{{::rec.balance | ncurrency | nd}}</ff-static>\n      <ff-static flex=\"2 1 250px\" class=\"show-lg\">{{::rec.description | nd}}</ff-static>\n    </ff-row>\n  </ff-panel> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/billing/purchase/purchase-payment-types.service.js":
/*!*******************************************************************!*\
  !*** ./common/billing/purchase/purchase-payment-types.service.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.purchasePaymentTypes', ['deskworks.purchase.service', 'deskworks.optsPaymentBillingMethod', 'deskworks.optsRefundBillingMethod']).factory('purchasePaymentTypes', ["dwAlerts", "purchaseService", "optsPaymentBillingMethod", "optsRefundBillingMethod", function (dwAlerts, purchaseService, optsPaymentBillingMethod, optsRefundBillingMethod) {
  return {
    payment: {
      hasProcessingFee: true,
      optsBillingMethod: optsPaymentBillingMethod,
      header: 'PURCHASE.PAYMENT.HEADER',
      negativeAmount: 'PURCHASE.PAYMENT.AMOUNT.NEGATIVE',
      btnSubmit: 'PURCHASE.PAYMENT.BTN_SUBMIT',
      btnRecord: 'PURCHASE.PAYMENT.BTN_RECORD',
      hintSubmit: 'PURCHASE.PAYMENT.HINT_SUBMIT',
      hintRecord: 'PURCHASE.PAYMENT.HINT_RECORD',
      securityDepositHint: 'PURCHASE.PAYMENT.SECURITY_DEPOSIT.HINT_RECORD',
      submit: function submit() {
        return purchaseService.createPayment.apply(purchaseService, arguments).catch(function (err) {
          return dwAlerts.error(err, 'Failed to make payment.');
        });
      }
    },
    deposit: {
      hasProcessingFee: true,
      header: 'PURCHASE.DEPOSIT.HEADER',
      negativeAmount: 'PURCHASE.PAYMENT.AMOUNT.NEGATIVE',
      btnSubmit: 'PURCHASE.DEPOSIT.BTN_SUBMIT',
      btnRecord: 'PURCHASE.DEPOSIT.BTN_RECORD',
      hintSubmit: 'PURCHASE.DEPOSIT.HINT_SUBMIT',
      hintRecord: 'PURCHASE.DEPOSIT.HINT_RECORD',
      submit: function submit() {
        return purchaseService.createDeposit.apply(purchaseService, arguments).catch(function (err) {
          return dwAlerts.error(err, 'Failed to make deposit.');
        });
      }
    },
    discount: {
      hasProcessingFee: false,
      header: 'PURCHASE.DISCOUNT.HEADER',
      negativeAmount: 'PURCHASE.DISCOUNT.AMOUNT.NEGATIVE',
      btnSubmit: 'PURCHASE.DISCOUNT.BTN_SUBMIT',
      btnRecord: 'PURCHASE.DISCOUNT.BTN_RECORD',
      submit: function submit() {
        return purchaseService.createDiscount.apply(purchaseService, arguments).catch(function (err) {
          return dwAlerts.error(err, 'Failed to make discount.');
        });
      }
    },
    refund: {
      hasProcessingFee: false,
      optsBillingMethod: optsRefundBillingMethod,
      header: 'PURCHASE.REFUND.HEADER',
      negativeAmount: 'PURCHASE.REFUND.AMOUNT.NEGATIVE',
      btnSubmit: 'PURCHASE.REFUND.BTN_SUBMIT',
      btnRecord: 'PURCHASE.REFUND.BTN_RECORD',
      hintSubmit: 'PURCHASE.REFUND.HINT_SUBMIT',
      hintRecord: 'PURCHASE.REFUND.HINT_RECORD',
      submit: function submit() {
        return purchaseService.createRefund.apply(purchaseService, arguments).catch(function (err) {
          return dwAlerts.error(err, 'Failed to make refund.');
        });
      }
    }
  };
}]));

/***/ }),

/***/ "./common/billing/purchase/purchase-payment.directive.js":
/*!***************************************************************!*\
  !*** ./common/billing/purchase/purchase-payment.directive.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _purchase_payment_tpl_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-payment.tpl.html */ "./common/billing/purchase/purchase-payment.tpl.html");
/* harmony import */ var _purchase_payment_tpl_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_purchase_payment_tpl_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _purchase_payment_types_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase-payment-types.service */ "./common/billing/purchase/purchase-payment-types.service.js");







/**
 * purchasePayment directive - ....
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.purchasePaymentDirective', [_purchase_payment_types_service__WEBPACK_IMPORTED_MODULE_6__["default"].name]).directive('purchasePayment', function () {
  return {
    template: _purchase_payment_tpl_html__WEBPACK_IMPORTED_MODULE_5___default.a,
    restrict: 'E',
    scope: true,
    controller: 'PurchasePaymentDirectiveCtrl as $ctrl',
    bindToController: {
      type: '@',
      settings: '<',
      user: '<',
      purchaseId: '<',
      defaultAmount: '<',
      updateInvoice: '&',
      filterBillingMethods: '<?',
      paymentMethods: '<?'
    }
  };
}).controller('PurchasePaymentDirectiveCtrl', ["$scope", "$filter", "state", "helper", "purchasePaymentTypes", function ($scope, $filter, state, helper, purchasePaymentTypes) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $ctrl.types = purchasePaymentTypes;
    $ctrl.postDate = moment();
    $ctrl.payment = $ctrl.payment || {};
    $ctrl.payment.receivedAt = moment();

    if ($ctrl.types[$ctrl.type].optsBillingMethod) {
      $scope.$watch('$ctrl.billingMethod', function () {
        if (!$ctrl.billingMethod) {
          var _context;

          // initialize billingMethod
          $ctrl.billingMethod = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default()(_context = $ctrl.types[$ctrl.type].optsBillingMethod).call(_context, function (i) {
            return i.id === $ctrl.user.billingMethod;
          });
          $ctrl.billingMethod = $ctrl.billingMethod || $ctrl.types[$ctrl.type].optsBillingMethod[0];
        }

        $ctrl.processPaymentMethods();

        if ($ctrl.billingMethod.paymentMethodKey) {
          var _context2;

          // initialize paymentMethodId according to billingMethod
          $ctrl.payment.receivedAt = moment(); // real payments only today

          if ($ctrl.user.billingMethod === $ctrl.billingMethod.id && _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = $ctrl.optsPaymentMethod).call(_context2, function (o) {
            return o.id === $ctrl.user.paymentMethodId;
          })) {
            $ctrl.payment.paymentMethodId = $ctrl.user.paymentMethodId;
          } else {
            if ($ctrl.paymentMethods ? $ctrl.paymentMethods.length === 1 : $ctrl.user[$ctrl.billingMethod.paymentMethodKey].length === 1) {
              // if one method only, select it
              $ctrl.payment.paymentMethodId = $ctrl.paymentMethods ? $ctrl.paymentMethods[0].id : $ctrl.user[$ctrl.billingMethod.paymentMethodKey][0].id;
            } else {
              delete $ctrl.payment.paymentMethodId;
            }
          }
        } else {
          delete $ctrl.payment.paymentMethodId;
        }
      });
      $scope.$watch('$ctrl.payment.paymentMethodId', function (paymentMethodId) {
        if (paymentMethodId && $ctrl.optsPaymentMethod) {
          var _context3;

          var method = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = $ctrl.optsPaymentMethod).call(_context3, function (o) {
            return o.id === paymentMethodId;
          });

          if (method && method.amount) {
            $ctrl.payment.amount = method.amount;
          }
        }
      });
    }
  };

  $ctrl.processPaymentMethods = function () {
    var _context4;

    if (!$ctrl.billingMethod) {
      return;
    }

    $ctrl.optsPaymentMethod = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(_context4 = $ctrl.paymentMethods || $ctrl.user[$ctrl.billingMethod.paymentMethodKey] || []).call(_context4, function (m) {
      var result = {
        id: m.id
      };

      if (m.number) {
        result.name = m.number.replace('XXXX-XXXX-XXXX', '*');
      }

      if (m.bankRoutingNumber && m.bankAccountNumber) {
        result.name = [m.bankRoutingNumber, m.bankAccountNumber].join(' / ');
      }

      if (m.amount) {
        result.name += " (".concat($filter('currency')(m.amount), ")");
        result.amount = m.amount;
      }

      return result;
    });
  };

  $ctrl.getMaxAmount = function () {
    var _context5;

    if (!$ctrl.optsPaymentMethod || !$ctrl.payment.paymentMethodId) {
      return null;
    }

    var method = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default()(_context5 = $ctrl.optsPaymentMethod).call(_context5, function (m) {
      return m.id === $ctrl.payment.paymentMethodId;
    }) || {
      amount: null
    };
    return method.amount;
  };
  /**
   * $onChanges
   */


  $ctrl.$onChanges = function () {
    $ctrl.payment = $ctrl.payment || {};
    if ($ctrl.defaultAmount) $ctrl.payment.amount = $ctrl.defaultAmount;
    $ctrl.processPaymentMethods();
  };
  /**
   * Create payment/deposit/discount/refund handler
   */


  $ctrl.createPayment = function () {
    if (helper.pointFirstInvalid("purchase-payment[type=".concat($ctrl.type, "]"))) return;

    if ($ctrl.types[$ctrl.type].optsBillingMethod) {
      $ctrl.payment.billingMethod = $ctrl.billingMethod.id;
    } else {
      delete $ctrl.payment.billingMethod;
      delete $ctrl.payment.paymentMethodId;
    }

    return $ctrl.types[$ctrl.type].submit(state.getCurrentCenterId(), state.getCurrentUserId(), $ctrl.purchaseId, $ctrl.payment).then(function () {
      return $ctrl.updateInvoice();
    }).then(function () {
      $ctrl.payment.$$collapsed = true;
      $ctrl.form.$setPristine();

      if ($ctrl.type !== 'payment') {
        $ctrl.payment.amount = null;
      }
    });
  };
  /**
   * Add payment processing fee to amount
   */


  $ctrl.getAmountWithFee = function () {
    var rate = $ctrl.settings.paymentProcessingRates[$ctrl.billingMethod && $ctrl.billingMethod.id];
    if (!$ctrl.settings.enablePaymentProcessingCharges || !rate || !$ctrl.types[$ctrl.type].hasProcessingFee) return 0;
    var fee = helper.round(rate * +$ctrl.payment.amount / 100);
    return +$ctrl.payment.amount + fee;
  };
  /**
   * Get submit/record button text
   */


  $ctrl.getSubmitText = function () {
    var type = $ctrl.types[$ctrl.type];

    var _ref = $ctrl.billingMethod || {},
        paymentMethodKey = _ref.paymentMethodKey,
        forceSubmit = _ref.forceSubmit;

    return paymentMethodKey || forceSubmit ? type.btnSubmit : type.btnRecord;
  };
}]));

/***/ }),

/***/ "./common/billing/purchase/purchase-payment.tpl.html":
/*!***********************************************************!*\
  !*** ./common/billing/purchase/purchase-payment.tpl.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" novalidate id=\"add-{{$ctrl.type}}\"> <ff-panel class=\"ff-bmargin\"> <ff-header><span translate=\"{{$ctrl.types[$ctrl.type].header}}\"></span></ff-header> <div class=\"ff-grid gutter-h-half\"> <label flex=\"{md: '0 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 104px\"><span translate=\"PURCHASE.PAYMENT.POST_DATE\"></span></ff-label> <ff-static>{{$ctrl.postDate | date}}</ff-static> </label> <label flex=\"{md: '0 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 104px\"><req translate=\"PURCHASE.PAYMENT.RECEIVED_DATE\"></req></ff-label> <ff-date name=\"receivedAt\" ff-model=\"$ctrl.payment.receivedAt\" ff-required=\"true\" ff-validate-alert=\"{{'PURCHASE.PAYMENT.RECEIVED_DATE' | translate}}\" ff-disabled=\"$ctrl.billingMethod.id === 'cc' || $ctrl.billingMethod.paymentMethodKey\"></ff-date> </label> <label flex=\"{md: '0 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 104px\"><req translate=\"PURCHASE.PAYMENT.AMOUNT\"></req></ff-label> <ff-price flex=\"0 0 70px\" name=\"amount\" ff-model=\"$ctrl.payment.amount\" ff-required=\"true\" ff-gt=\"0\" ff-lte=\"$ctrl.getMaxAmount()\" ff-validate-alert=\"{ field: ('PURCHASE.PAYMENT.AMOUNT' | translate), gt: ($ctrl.types[$ctrl.type].negativeAmount | translate) }\"></ff-price> <ff-label> <span ng-if=\"$ctrl.getAmountWithFee()\"> + {{$ctrl.settings.paymentProcessingRates[$ctrl.billingMethod.id]}}% <span translate=\"PURCHASE.PAYMENT_PROCESSING_FEE\"></span> = <strong>{{$ctrl.getAmountWithFee() | ncurrency}}</strong> </span> </ff-label> <discount-assignment-btn flex=\"none\" discount=\"$ctrl.payment\" ng-if=\"$ctrl.type === 'discount'\"></discount-assignment-btn> </label> <label flex=\"{md: '0 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 104px\"><span translate=\"PURCHASE.PAYMENT.NOTES\"></span></ff-label> <ff-text name=\"notes\" ff-model=\"$ctrl.payment.notes\" ff-maxlength=\"256\"></ff-text> </label> <discount-assignment flex=\"{md: '0 0 50.05%'}\" purchase-id=\"$ctrl.purchaseId\" discount=\"$ctrl.payment\" class=\"animate-collapse\" ng-if=\"$ctrl.type === 'discount' && !$ctrl.payment.$$collapsed\"></discount-assignment> <div class=\"payment-submit\" flex=\"{md: '0 0 50%'}\"> <div class=\"ff-grid\"> <ff-btn flex=\"{sm: 'none'}\" sense=\"save\" size=\"sm\" type=\"submit\" ff-click=\"$ctrl.createPayment()\" ff-disabled=\"$ctrl.type !== 'payment' && $ctrl.type !== 'refund' && $ctrl.form.$pristine\"> <span translate=\"{{$ctrl.getSubmitText()}}\"></span> </ff-btn> <div class=\"ff-grid\" flex=\"1 1 315px\" ng-if=\"$ctrl.types[$ctrl.type].optsBillingMethod\"> <label flex=\"{sm: '1 0 185px'}\" class=\"ff-row\"> <span flex=\"none\" translate=\"PURCHASE.PAYMENT.USING\"></span> <ff-select flex=\"1 1 auto\" name=\"billingMethod\" ff-model=\"$ctrl.billingMethod\" ff-options=\"method.name for method in $ctrl.types[$ctrl.type].optsBillingMethod | filter: $ctrl.filterBillingMethods\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.BILLING_METHOD' | translate}}\"></ff-select> </label> <ff-select flex=\"{sm: 'none'}\" name=\"paymentMethod\" ng-if=\"$ctrl.billingMethod.paymentMethodKey\" ff-model=\"$ctrl.payment.paymentMethodId\" style=\"min-width:72px\" ff-style=\"{'padding-right': '1.4rem'}\" ff-options=\"m.id as m.name for m in $ctrl.optsPaymentMethod\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.PAYMENT_METHOD' | translate}}\"> </ff-select> </div> </div> </div> <div flex=\"{md: '0 0 50%'}\" class=\"payment-hint\" ng-if=\"$ctrl.types[$ctrl.type].hintSubmit || $ctrl.types[$ctrl.type].hintRecord\"> <ff-static> <span> <ff-icon sense=\"info\"></ff-icon> <span translate=\"{{$ctrl.types[$ctrl.type][$ctrl.billingMethod.id + 'Hint'] || $ctrl.types[$ctrl.type][$ctrl.billingMethod.paymentMethodKey || $ctrl.billingMethod.forceSubmit ? 'hintSubmit' : 'hintRecord']}}\"></span> </span> </ff-static> </div> </div> </ff-panel> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/billing/purchase/purchase.scss":
/*!***********************************************!*\
  !*** ./common/billing/purchase/purchase.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/billing/recurring-billing/recurring-charge-audit.directive.js":
/*!******************************************************************************!*\
  !*** ./common/billing/recurring-billing/recurring-charge-audit.directive.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/entries */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");









/**
 * recurringChargeAudit directive -
 */

angular.module('deskworks.recurringChargeAudit', ['deskworks.helper', 'deskworks.RecurringChargeAudit', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_8__["default"].name]).directive('recurringChargeAudit', function () {
  var templateUrl = 'billing/recurring-billing/recurring-charge-audit.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'RecurringChargeAuditCtrl as $ctrl',
    bindToController: {
      priceListProducts: '<',
      reservationUnits: '<',
      recurringChargeId: '<'
    }
  };
}).controller('RecurringChargeAuditCtrl', ["state", "dwAlerts", "RecurringChargeAudit", function (state, dwAlerts, RecurringChargeAudit) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.props = RecurringChargeAudit.getProps();
    $ctrl.centerId = state.getCurrentCenterId();
    $ctrl.userId = state.getCurrentUserId();
    $ctrl.offset = 0;
    $ctrl.limit = 20;
    $ctrl.entries = [];
    $ctrl.fetch();
  };
  /**
   * Fetch
   */


  $ctrl.fetch = function () {
    if ($ctrl.eof || $ctrl.fetching) return $ctrl.fetching;
    $ctrl.fetching = RecurringChargeAudit.query($ctrl.centerId, $ctrl.userId, $ctrl.recurringChargeId, $ctrl.offset, $ctrl.limit).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query audit log.');
    }).finally(function () {
      $ctrl.fetching = null;
    }).then(function (entries) {
      var _context;

      $ctrl.entries = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_entries__WEBPACK_IMPORTED_MODULE_1___default()($ctrl)).call(_context, makeProps(entries));
      $ctrl.offset += entries.length;
      $ctrl.eof = entries.length < $ctrl.limit;
    });
  };

  function makeProps(entries) {
    entries.forEach(function (entry) {
      var _context2, _context3;

      if (entry.props) return;
      entry.props = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = $ctrl.props).call(_context3, function (prop) {
        return entry[prop.id];
      })).call(_context2, function (prop) {
        return {
          name: prop.name,
          old: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(prop) ? _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(prop).call(prop, entry[prop.id].old, $ctrl) : entry[prop.id].old,
          new: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(prop) ? _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(prop).call(prop, entry[prop.id].new, $ctrl) : entry[prop.id].new
        };
      });
    });
    return entries;
  }
}]);

/***/ }),

/***/ "./common/billing/recurring-billing/recurring-charge-audit.service.js":
/*!****************************************************************************!*\
  !*** ./common/billing/recurring-billing/recurring-charge-audit.service.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);



/**
 * RecurringChargeAudit service -
 */
angular.module('deskworks.RecurringChargeAudit', ['ngResource', 'datesDeserializer', 'deskworks.config', 'deskworks.billing.optsBillingFrequency', 'deskworks.billing.optsRecurringChargeStatus', 'deskworks.billing.optsNoticePeriod', 'deskworks.billing.optsDiscountType', 'deskworks.userProfile.optsMonthsOfDiscount', 'deskworks.billing.optsRecurringChargeTerminate', 'deskworks.billing.optsRenewalTerm', 'deskworks.billing.optsRenewalNoticePeriod']).factory('RecurringChargeAudit', ["$resource", "$q", "$timeout", "$filter", "$rootScope", "$translate", "deskworksConfig", "helper", "datesDeserializer", "optsBillingFrequency", "optsRecurringChargeStatus", "optsNoticePeriod", "optsDiscountType", "optsMonthsOfDiscount", "optsRecurringChargeTerminate", "optsRenewalTerm", "optsRenewalNoticePeriod", function ($resource, $q, $timeout, $filter, $rootScope, $translate, deskworksConfig, helper, datesDeserializer, optsBillingFrequency, optsRecurringChargeStatus, optsNoticePeriod, optsDiscountType, optsMonthsOfDiscount, optsRecurringChargeTerminate, optsRenewalTerm, optsRenewalNoticePeriod) {
  'use strict';

  var dateFilter = function dateFilter(val) {
    return $filter('date')(val, 'mediumDate');
  };

  var getOptsFilter = function getOptsFilter(opts, name) {
    name = name || 'name';

    if (angular.isString(opts)) {
      // from controller
      return function (val, $ctrl) {
        return (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl[opts], val) || {})[name] || '-';
      };
    } else {
      // from variable directly
      return function (val, $ctrl) {
        return (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, opts, val) || {})[name] || '-';
      };
    }
  };

  var props = [{
    id: 'priceListProductId',
    _name: 'RECURRING_BILLING.GENERAL.PRODUCT',
    filter: getOptsFilter('priceListProducts', 'productName')
  }, {
    id: 'description',
    _name: 'RECURRING_BILLING.GENERAL.DESCRIPTION'
  }, {
    id: 'quantity',
    _name: 'RECURRING_BILLING.GENERAL.QUANTITY'
  }, {
    id: 'attachedReservationUnitId',
    _name: 'RECURRING_BILLING.GENERAL.ATTACHED_RES_UNIT',
    filter: getOptsFilter('reservationUnits')
  }, {
    id: 'passBalance',
    _name: 'RECURRING_BILLING.GENERAL.PASS_BALANCE'
  }, {
    id: 'invoiceSent',
    _name: 'RECURRING_BILLING.GENERAL.INVOICE_SENT',
    filter: function filter(val) {
      return $filter('yesno')(val);
    }
  }, {
    id: 'lastBillDate',
    _name: 'RECURRING_BILLING.DATES.LAST_BILL_DATE',
    filter: dateFilter
  }, {
    id: 'nextBillDate',
    _name: 'RECURRING_BILLING.DATES.NEXT_BILL_DATE',
    filter: dateFilter
  }, {
    id: 'startDate',
    _name: 'RECURRING_BILLING.DATES.START_DATE',
    filter: dateFilter
  }, {
    id: 'noticeDate',
    _name: 'RECURRING_BILLING.DATES.NOTICE_DATE',
    filter: dateFilter
  }, {
    id: 'noticePeriod',
    _name: 'RECURRING_BILLING.DATES.NOTICE_PERIOD',
    filter: getOptsFilter(optsNoticePeriod)
  }, {
    id: 'terminate',
    _name: 'RECURRING_BILLING.DATES.TERMINATE',
    filter: function filter(val, $ctrl) {
      return (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, optsRecurringChargeTerminate, val) || {}).name || dateFilter(val) || '-';
    }
  }, {
    id: 'renewalDate',
    _name: 'RECURRING_BILLING.RENEWAL_DATE',
    filter: dateFilter
  }, {
    id: 'renewalTerm',
    _name: 'RECURRING_BILLING.RENEWAL_TERM',
    filter: getOptsFilter(optsRenewalTerm)
  }, {
    id: 'renewalNoticePeriod',
    _name: 'RECURRING_BILLING.RENEWAL_NOTICE_PERIOD',
    filter: getOptsFilter(optsRenewalNoticePeriod)
  }, {
    id: 'discountTypeId',
    _name: 'RECURRING_BILLING.DISCOUNT.TYPE',
    filter: getOptsFilter(optsDiscountType)
  }, {
    id: 'discountValue',
    _name: 'RECURRING_BILLING.DISCOUNT.VALUE'
  }, {
    id: 'discountTrialOccurrences',
    _name: 'RECURRING_BILLING.DISCOUNT.MONTHS',
    filter: getOptsFilter(optsMonthsOfDiscount)
  }, {
    id: 'discountStartDate',
    _name: 'RECURRING_BILLING.DISCOUNT.START_DATE',
    filter: dateFilter
  }, {
    id: 'status',
    _name: 'RECURRING_BILLING.STATUS_NOTES.STATUS',
    filter: getOptsFilter(optsRecurringChargeStatus)
  }, {
    id: 'notes',
    _name: 'RECURRING_BILLING.STATUS_NOTES.NOTES'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    props.forEach(function (opt) {
      opt.name = $translate.instant(opt._name);
    });
  }

  var desDates = datesDeserializer(['createdAt', 'lastBillDate.old', 'lastBillDate.new', 'nextBillDate.old', 'nextBillDate.new', 'startDate.old', 'startDate.new', 'noticeDate.old', 'noticeDate.new', 'renewalDate.old', 'renewalDate.new', 'discountStartDate.old', 'discountStartDate.new', 'terminate.old', 'terminate.new']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/recurring-charges/:recurringId/audit'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    /**
     * Get Recurring Charge changes log
     */
    query: function query(centerId, userId, recurringId, offset, limit) {
      return res.query({
        centerId: centerId,
        userId: userId,
        recurringId: recurringId,
        offset: offset,
        limit: limit
      }).$promise;
    },
    getProps: function getProps() {
      return props;
    }
  };
}]);

/***/ }),

/***/ "./common/billing/recurring-billing/recurring-charge-audit.tpl.html":
/*!**************************************************************************!*\
  !*** ./common/billing/recurring-billing/recurring-charge-audit.tpl.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel style=\"margin:1.5rem 0\"> <ff-panel-header><span translate=\"RECURRING_BILLING.AUDIT.HEADER\"></span></ff-panel-header> <div ng-if=\"!$ctrl.entries.length && !$ctrl.fetching\" class=\"animate-collapse\"> <span translate=\"GLOBAL.NONE\"></span> </div> <ff-header ng-if=\"$ctrl.entries.length\" class=\"animate-collapse\"> <ff-row> <cell><span translate=\"RECURRING_BILLING.AUDIT.PROPERTY\"></span></cell> <cell><span translate=\"RECURRING_BILLING.AUDIT.OLD_VALUE\"></span></cell> <cell><span translate=\"RECURRING_BILLING.AUDIT.NEW_VALUE\"></span></cell> </ff-row> </ff-header> <ff-col infinite-scroll=\"$ctrl.fetch()\" infinite-scroll-distance=\"2\" infinite-scroll-container=\"'.snap-content-scroller'\"> <div ng-repeat=\"entry in $ctrl.entries\" class=\"animate-collapse\"> <ff-row> <ff-label class=\"standout\"><span> {{entry.createdAt | date:'mediumDate'}} <span nice-time=\"entry.createdAt\"></span> by {{entry.createdBy}} </span></ff-label> </ff-row> <ff-row ng-repeat=\"prop in entry.props\"> <ff-static>{{prop.name}}</ff-static> <ff-static>{{prop.old | nd}}</ff-static> <ff-static>{{prop.new | nd}}</ff-static> </ff-row> </div> </ff-col> <ff-row ff-dim=\"true\" ng-if=\"$ctrl.fetching\" class=\"animate-collapse\"><ff-static></ff-static></ff-row> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/billing/recurring-billing/recurring-edit.controller.js":
/*!***********************************************************************!*\
  !*** ./common/billing/recurring-billing/recurring-edit.controller.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.billing.recurringCharge.edit', ['deskworks.recurringCharge.service', 'deskworks.userProfile.service', 'deskworks.recurringCharge.service', 'deskworks.routeHelper', 'deskworks.recurringChargeAudit', shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_6__["default"].name]).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/recurring-charges/:recurringId/edit', {
    templateUrl: 'billing/recurring-billing/recurring-edit.tpl.html',
    controller: 'RecurringChargeEditCtrl as $ctrl',
    label: 'Edit',
    routeBranch: 'recurring-charges',
    translations: ['recurring-billing'],
    resolve: {
      charge: ["dwAlerts", "$route", "recurringChargeService", "state", "routeHelper", "resolveTimezone", function charge(dwAlerts, $route, recurringChargeService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return recurringChargeService.get(state.getCurrentCenterId(), state.getCurrentUserId(), $route.current.params.recurringId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get recurring charge.');
          });
        });
      }],
      charges: ["dwAlerts", "$route", "recurringChargeService", "state", "routeHelper", "resolveTimezone", function charges(dwAlerts, $route, recurringChargeService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return recurringChargeService.query(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get recurring charge.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", "state", "routeHelper", function settings(dwAlerts, setupService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return setupService.getSetupSettings(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get setup settings.');
          });
        });
      }],
      user: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function user(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      resUnits: ["dwAlerts", "state", "ReservationUnit", function resUnits(dwAlerts, state, ReservationUnit) {
        return ReservationUnit.query(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to query reservation units');
        });
      }]
    }
  });
}]).controller('RecurringChargeEditCtrl', ["$scope", "$route", "$translate", "dwAlerts", "recurringChargeService", "userProfileService", "ReservationUnit", "charge", "charges", "settings", "user", "state", "helper", "optsBillingFrequency", "optsRecurringChargeStatus", "optsNoticePeriod", "optsDiscountType", "optsMonthsOfDiscount", "optsRecurringChargeTerminate", "resUnits", "optsRenewalTerm", "optsRenewalNoticePeriod", function ($scope, $route, $translate, dwAlerts, recurringChargeService, userProfileService, ReservationUnit, charge, charges, settings, user, state, helper, optsBillingFrequency, optsRecurringChargeStatus, optsNoticePeriod, optsDiscountType, optsMonthsOfDiscount, optsRecurringChargeTerminate, resUnits, optsRenewalTerm, optsRenewalNoticePeriod) {
  var $ctrl = this;
  $scope.backPath = '/recurring-charges';
  $scope.$watch('state.getCurrentCenterId()', function (nv, ov) {
    if (nv !== ov) state.setPath($scope.backPath);
  });
  state.setPageTitle($translate.instant('RECURRING_BILLING.PAGE_TITLE', {
    userName: user.fullNameCompany
  }));
  $ctrl.charge = charge;
  $ctrl.initialStatus = $ctrl.charge.status;
  $ctrl.charge.startDate = $ctrl.charge.startDate || $ctrl.charge.entryDate;
  $ctrl.billingFrequencyProducts = {};
  $ctrl.billingFrequencies = optsBillingFrequency;
  $ctrl.noticePeriods = optsNoticePeriod;
  $ctrl.discountTypes = optsDiscountType;
  $ctrl.discountTrialOccurrences = optsMonthsOfDiscount;
  $ctrl.optsTerminate = optsRecurringChargeTerminate;
  $ctrl.optsRenewalTerm = optsRenewalTerm;
  $ctrl.optsRenewalNoticePeriod = optsRenewalNoticePeriod;
  $ctrl.chargeStatuses = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(optsRecurringChargeStatus).call(optsRecurringChargeStatus, function (status) {
    return status.id !== 'deleted' || !state.isLoggedRole('coordinator');
  });
  if ($route.current.params.recurringId === 'new') $ctrl.chargeStatuses = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(optsRecurringChargeStatus).call(optsRecurringChargeStatus, 0, 1); // Sort priceListProducts by billingFrequency

  charge.options.priceListProducts.forEach(function (priceListProduct) {
    var billingFrequency = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(helper).call(helper, $ctrl.billingFrequencies, priceListProduct.billingFrequency);

    if (billingFrequency) {
      $ctrl.billingFrequencyProducts[billingFrequency.id] = $ctrl.billingFrequencyProducts[billingFrequency.id] || [];
      $ctrl.billingFrequencyProducts[billingFrequency.id].push(priceListProduct);
    }
  });
  $ctrl.reservationUnits = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(resUnits).call(resUnits, function (resUnit) {
    return !resUnit.attachedUserId || resUnit.id == $ctrl.charge.attachedReservationUnitId;
  });
  $ctrl.activeChargesCount = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(charges).call(charges, function (c) {
    return c.status.id === 'active';
  }).length;
  /**
   * Billing Frequency change handler, inits Recurring Item
   */

  $ctrl.billingFrequencyChange = function () {
    if ($ctrl.charge.billingFrequency && $ctrl.billingFrequencyProducts[$ctrl.charge.billingFrequency.id]) {
      $ctrl.charge.priceListProduct = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(helper).call(helper, $ctrl.billingFrequencyProducts[$ctrl.charge.billingFrequency.id], $ctrl.charge.priceListProductId);
    }

    $ctrl.charge.terminate = $ctrl.charge.billingFrequency.id === 'asNeeded' ? optsRecurringChargeTerminate[0] : ''; // calculate nextBillDate as lastBillDate + billingFrequency.months size

    if ($ctrl.charge.billingFrequency.months && moment.isMoment($ctrl.charge.lastBillDate)) {
      $ctrl.charge.nextBillDate = $ctrl.charge.lastBillDate.clone().add($ctrl.charge.billingFrequency.months, 'M');

      if (settings.prorateAtStart && $ctrl.charge.billingFrequency.id === 'monthly') {
        $ctrl.charge.nextBillDate.date(1); // shift next bill date to first day of month if pro-ration at start is enabled
      }
    }
  };

  if (!$ctrl.charge.id) $ctrl.billingFrequencyChange(); // run it on init of new charge

  /**
   * Delete checkboxes' values in Status/Notes section if selected option changes from 'Deleted' or 'Inactive' to 'Active'
   */

  $ctrl.onChangeStatus = function () {
    if ($ctrl.initialStatus.id !== 'active') return;

    if ($ctrl.charge.status.id === 'active') {
      if (typeof $ctrl.charge.makeMemberInactive === 'boolean') delete $ctrl.charge.makeMemberInactive;
      if (typeof $ctrl.charge.makeCoMembersInactive === 'boolean') delete $ctrl.charge.makeCoMembersInactive;
    }
  };
  /**
   * Calculate Termination Date
   */


  $ctrl.calcTerminationDate = function () {
    if ($ctrl.charge.billingFrequency.id !== 'asNeeded' && $ctrl.charge.noticeDate && $ctrl.charge.noticePeriod) {
      $ctrl.charge.terminate = $ctrl.charge.noticeDate.clone().add($ctrl.charge.noticePeriod.id, 'd');
    }
  };
  /**
   * Is NextBillDate disabled
   */


  $ctrl.isNextBillDateDisabled = function () {
    return $ctrl.charge.nextBillDate === null && moment.isMoment($ctrl.charge.terminate) || moment.isMoment($ctrl.charge.terminate) && moment.isMoment($ctrl.charge.nextBillDate) && $ctrl.charge.terminate.isSameOrBefore($ctrl.charge.nextBillDate, 'date');
  };
  /**
   * Back handler
   */


  $ctrl.backToList = function () {
    return state.setPath('/recurring-charges');
  };
  /**
   * Save Charge handler
   */


  $ctrl.saveCharge = function (refill) {
    if (helper.pointFirstInvalid('#recurringCharge')) return;
    var data = {
      description: $ctrl.charge.description,
      priceListProductId: angular.isDefined($ctrl.charge.priceListProduct) ? $ctrl.charge.priceListProduct.id : null,
      customPrice: $ctrl.charge.customPrice || $ctrl.charge.customPrice === 0 ? +$ctrl.charge.customPrice : null,
      startDate: $ctrl.charge.startDate,
      nextBillDate: $ctrl.isNextBillDateDisabled() ? null : $ctrl.charge.nextBillDate,
      lastBillDate: $ctrl.charge.lastBillDate,
      noticeDate: $ctrl.charge.noticeDate || null,
      terminate: $ctrl.charge.billingFrequency.id === 'asNeeded' ? $ctrl.charge.terminate.id : $ctrl.charge.terminate || null,
      quantity: $ctrl.charge.quantity,
      noticePeriod: $ctrl.charge.noticePeriod && $ctrl.charge.noticePeriod.id,
      status: angular.isDefined($ctrl.charge.status) ? $ctrl.charge.status.id : undefined,
      notes: $ctrl.charge.notes,
      attachedReservationUnitId: $ctrl.charge.attachedReservationUnitId ? +$ctrl.charge.attachedReservationUnitId : null
    };

    if (settings.enableRenewalNotices) {
      data.renewalDate = $ctrl.charge.renewalDate;
      data.renewalTerm = $ctrl.charge.renewalTerm;
      data.renewalNoticePeriod = $ctrl.charge.renewalNoticePeriod;
    }

    if ($ctrl.charge.discountType.id) {
      data.discountTypeId = $ctrl.charge.discountType.id;
      data.discountValue = $ctrl.charge.discountValue;

      if ($ctrl.charge.discountTrialOccurrences) {
        data.discountTrialOccurrences = $ctrl.charge.discountTrialOccurrences.id;
      }

      data.discountStartDate = $ctrl.charge.discountStartDate;
    } else {
      data.discountTypeId = 0;
    }

    if ($ctrl.charge.billingFrequency.id === 'asNeeded') {
      data.passBalance = +$ctrl.charge.passBalance;
      data.refill = refill;
    } // Add checkboxes' values from Status/Notes section


    if (typeof $ctrl.charge.makeMemberInactive === 'boolean') data.makeMemberInactive = $ctrl.charge.makeMemberInactive;
    if (typeof $ctrl.charge.makeCoMembersInactive === 'boolean') data.makeCoMembersInactive = $ctrl.charge.makeCoMembersInactive;
    var promise;

    if ($route.current.params.recurringId === 'new') {
      data.postProration = !!$ctrl.charge.postProration;
      promise = recurringChargeService.createCharge(state.getCurrentCenterId(), state.getCurrentUserId(), data);
    } else {
      promise = recurringChargeService.updateCharge(state.getCurrentCenterId(), state.getCurrentUserId(), $route.current.params.recurringId, data);
    }

    return promise.then(function () {
      if ($ctrl.charge.makeMemberInactive) userProfileService.resetCache();

      if (refill) {
        $route.reload();
      } else {
        return state.setPath('/recurring-charges');
      }
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save recurring charge.');
    });
  };
}]));

/***/ }),

/***/ "./common/billing/recurring-billing/recurring-edit.tpl.html":
/*!******************************************************************!*\
  !*** ./common/billing/recurring-billing/recurring-edit.tpl.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"chargeForm\" class=\"recurring-charges\" id=\"recurringCharge\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <ff-panel flex=\"{md: '0 0 50%'}\"> <ff-panel-header><span translate=\"RECURRING_BILLING.GENERAL.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"><req translate=\"RECURRING_BILLING.GENERAL.BILLING_FREQUENCY\"></req></ff-label> <ff-select ff-model=\"$ctrl.charge.billingFrequency\" ff-required=\"true\" name=\"billingFrequency\" ff-validate-alert=\"{{'RECURRING_BILLING.GENERAL.BILLING_FREQUENCY' | translate}}\" ff-options=\"freq.name for freq in $ctrl.billingFrequencies\" ff-change=\"$ctrl.billingFrequencyChange()\"> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"><req translate=\"RECURRING_BILLING.GENERAL.PRODUCT\"></req></ff-label> <ff-select ff-model=\"$ctrl.charge.priceListProduct\" ff-required=\"true\" name=\"priceListProduct\" ff-validate-alert=\"{{'RECURRING_BILLING.GENERAL.PRODUCT' | translate}}\" ff-options=\"priceListProduct.productName for priceListProduct in $ctrl.billingFrequencyProducts[$ctrl.charge.billingFrequency.id]\"> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"> <span> <span translate=\"RECURRING_BILLING.GENERAL.CUSTOM_PRICE\"></span> <ff-hint hint-type=\"primary\"><span translate=\"RECURRING_BILLING.GENERAL.CUSTOM_PRICE.HINT\"></span></ff-hint> </span> </ff-label> <ff-number ff-model=\"$ctrl.charge.customPrice\" name=\"customPrice\" ff-validate-alert=\"{{'RECURRING_BILLING.GENERAL.CUSTOM_PRICE' | translate}}\"></ff-number> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"><span translate=\"RECURRING_BILLING.GENERAL.PRICE_LIST\"></span></ff-label> <ff-static>{{$ctrl.charge.priceListProduct.priceListName | nd}}</ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"><span translate=\"RECURRING_BILLING.GENERAL.DESCRIPTION\"></span></ff-label> <ff-text ff-model=\"$ctrl.charge.description\" name=\"description\" ff-validate-alert=\"{{'RECURRING_BILLING.GENERAL.DESCRIPTION' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"><req translate=\"RECURRING_BILLING.GENERAL.QUANTITY\"></req></ff-label> <ff-number name=\"quantity\" ff-model=\"$ctrl.charge.quantity\" ff-required=\"true\" ff-validate-alert=\"{{'RECURRING_BILLING.GENERAL.QUANTITY' | translate}}\"></ff-number> </label> <ff-row> <ff-label flex=\"0 0 126px\"><span translate=\"RECURRING_BILLING.GENERAL.INVOICE_SENT\"></span></ff-label> <ff-static ff-bind=\"::$ctrl.charge.invoiceSent | yesno\" name=\"invoiceSent\"></ff-static> </ff-row> <label class=\"ff-row\" ng-if=\"!$ctrl.charge.id && $resolve.settings.prorateAtStart && $ctrl.charge.billingFrequency.id === 'monthly'\"> <ff-label flex=\"0 0 126px\"><span translate=\"RECURRING_BILLING.GENERAL.POST_PRO_RATION\"></span></ff-label> <ff-label> <ff-checkbox name=\"postProration\" ff-model=\"$ctrl.charge.postProration\"></ff-checkbox> </ff-label> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"> <span> <span translate=\"RECURRING_BILLING.GENERAL.ATTACHED_RES_UNIT\"></span> <ff-hint><span translate=\"RECURRING_BILLING.GENERAL.ATTACHED_RES_UNIT.HINT\"></span></ff-hint> </span> </ff-label> <ff-select ff-model=\"$ctrl.charge.attachedReservationUnitId\" name=\"attachedReservationUnit\"> <option translate=\"GLOBAL.NONE\"></option> <option ng-repeat=\"resUnit in $ctrl.reservationUnits\" ng-value=\"resUnit.id\">{{resUnit.name}}</option> </ff-select> </label> <ff-row ng-if=\"$ctrl.charge.billingFrequency.id === 'asNeeded'\"> <label flex=\"1 1 auto\"> <ff-label flex=\"0 0 126px\"><req translate=\"RECURRING_BILLING.DATES.PASS_BALANCE\"></req></ff-label> <ff-number flex=\"1 1 1%\" name=\"passBalance\" ff-model=\"$ctrl.charge.passBalance\" ff-required=\"true\" ff-validate-alert=\"{{'RECURRING_BILLING.DATES.PASS_BALANCE' | translate}}\"></ff-number> </label> <ff-btn-group flex=\"0 0 auto\" ng-if=\"$ctrl.charge.id\" style=\"z-index:3\"> <ff-btn sense=\"ok\" size=\"sm\" ff-click=\"$ctrl.saveCharge(true)\"> <span translate=\"RECURRING_BILLING.DATES.BTN_REFILL\"></span> </ff-btn> </ff-btn-group> </ff-row> </ff-panel> <ff-panel flex=\"{md: '0 0 50%'}\"> <ff-panel-header><span translate=\"RECURRING_BILLING.DATES.HEADER\"></span></ff-panel-header> <ff-header><span translate=\"RECURRING_BILLING.DATES.BILLING_DATES\"></span></ff-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\" ff-required=\"true\"> <span translate=\"RECURRING_BILLING.DATES.LAST_BILL_DATE\"></span> </ff-label> <ff-date ff-model=\"$ctrl.charge.lastBillDate\" ff-required=\"true\" name=\"lastBillDate\" ff-validate-alert=\"{{'RECURRING_BILLING.DATES.LAST_BILL_DATE' | translate}}\"></ff-date> </label> <label class=\"ff-row\" ng-if=\"$ctrl.charge.billingFrequency.id !== 'asNeeded'\"> <ff-label flex=\"0 0 126px\" ff-required=\"{{!$ctrl.isNextBillDateDisabled()}}\" ng-disabled=\"$ctrl.isNextBillDateDisabled()\"> <span translate=\"RECURRING_BILLING.DATES.NEXT_BILL_DATE\"></span> </ff-label> <ff-date ff-model=\"$ctrl.charge.nextBillDate\" ff-required=\"true\" name=\"nextBillDate\" ng-if=\"!$ctrl.isNextBillDateDisabled()\" ff-validate-alert=\"{{'RECURRING_BILLING.DATES.NEXT_BILL_DATE' | translate}}\"></ff-date> <ff-static ff-disabled=\"true\" ng-if=\"$ctrl.isNextBillDateDisabled()\">-</ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"><span translate=\"RECURRING_BILLING.DATES.ENTRY_DATE\"></span></ff-label> <ff-static name=\"entryDate\" ff-bind=\"$ctrl.charge.entryDate | date:'mediumDate'\"></ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"> <span> <req translate=\"RECURRING_BILLING.DATES.START_DATE\"></req> <ff-hint><span translate=\"RECURRING_BILLING.DATES.START_DATE.HINT\"></span></ff-hint> </span> </ff-label> <ff-date name=\"startDate\" ff-model=\"$ctrl.charge.startDate\" ff-required=\"true\" ff-validate-alert=\"{{'RECURRING_BILLING.DATES.START_DATE' | translate}}\"></ff-date> </label> <ff-header style=\"padding-top:.5rem\"><span translate=\"RECURRING_BILLING.DATES.NOTICE_DATES\"></span></ff-header> <label class=\"ff-row\" ng-if=\"$ctrl.charge.billingFrequency.id !== 'asNeeded'\"> <ff-label flex=\"0 0 126px\"> <span> <span translate=\"RECURRING_BILLING.DATES.NOTICE_DATE\"></span> <ff-hint><span translate=\"RECURRING_BILLING.DATES.NOTICE_DATE.HINT\"></span></ff-hint> </span> </ff-label> <ff-date ff-model=\"$ctrl.charge.noticeDate\" name=\"noticeDate\" ff-change=\"$ctrl.calcTerminationDate()\" ff-validate-alert=\"{{'RECURRING_BILLING.DATES.NOTICE_DATE' | translate}}\"></ff-date> </label> <label class=\"ff-row\" ng-if=\"$ctrl.charge.billingFrequency.id !== 'asNeeded'\" ng-show=\"$ctrl.charge.noticeDate\"> <ff-label flex=\"0 0 126px\"><small translate=\"RECURRING_BILLING.DATES.NOTICE_DATE.ADDED_BY\"></small></ff-label> <ff-static ff-bind=\"$ctrl.charge.noticeDateAddedBy || (state.getLoggedUser().firstName + ' ' + state.getLoggedUser().lastName)\"></ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"> <span> <span translate=\"RECURRING_BILLING.DATES.NOTICE_PERIOD\"></span> <ff-hint><span translate=\"RECURRING_BILLING.DATES.NOTICE_PERIOD.HINT\"></span></ff-hint> </span> </ff-label> <ff-select name=\"noticePeriod\" ff-model=\"$ctrl.charge.noticePeriod\" ff-options=\"period.name for period in $ctrl.noticePeriods\" ff-change=\"$ctrl.calcTerminationDate()\" ff-validate-alert=\"{{'RECURRING_BILLING.DATES.NOTICE_PERIOD' | translate}}\"> </ff-select> </label> <label class=\"ff-row\" ng-if=\"$resolve.settings.enableRenewalNotices\"> <ff-label flex=\"0 0 126px\"> <span> <span translate=\"RECURRING_BILLING.DATES.NOTICE_REQUIRED_BY\"></span> <ff-hint><span translate=\"RECURRING_BILLING.DATES.NOTICE_REQUIRED_BY.HINT\"></span></ff-hint> </span> </ff-label> <ff-static ng-if=\"$ctrl.charge.renewalDate && $ctrl.charge.noticePeriod\"> <span ng-bind=\"($ctrl.charge.renewalDate - $ctrl.charge.noticePeriod.id * 24 * 3600000) | date:'mediumDate'\"></span> </ff-static> <ff-static ng-if=\"!$ctrl.charge.renewalDate || !$ctrl.charge.noticePeriod\">-</ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"> <span> <span translate=\"RECURRING_BILLING.DATES.TERMINATE\"></span> <ff-hint><span translate=\"RECURRING_BILLING.DATES.TERMINATE.HINT\"></span></ff-hint> </span> </ff-label> <ff-date name=\"terminate\" ff-model=\"$ctrl.charge.terminate\" ng-if=\"$ctrl.charge.billingFrequency.id !== 'asNeeded'\" ff-validate-alert=\"{{'RECURRING_BILLING.DATES.TERMINATE' | translate}}\"></ff-date> <ff-select name=\"terminate\" ff-model=\"$ctrl.charge.terminate\" ng-if=\"$ctrl.charge.billingFrequency.id === 'asNeeded'\" ff-options=\"opt.name for opt in $ctrl.optsTerminate\" ff-validate-alert=\"{{'RECURRING_BILLING.DATES.TERMINATE' | translate}}\"></ff-select> </label> <div ng-if=\"$resolve.settings.enableRenewalNotices\"> <ff-header style=\"padding-top:.5rem\"><span translate=\"RECURRING_BILLING.DATES.RENEWAL_DATES\"></span></ff-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"> <span translate=\"RECURRING_BILLING.RENEWAL_DATE\"></span> </ff-label> <ff-date name=\"renewalDate\" ff-model=\"$ctrl.charge.renewalDate\" ff-validate-alert=\"{{'RECURRING_BILLING.RENEWAL_DATE' | translate}}\"></ff-date> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"> <span translate=\"RECURRING_BILLING.RENEWAL_TERM\"></span> </ff-label> <ff-select name=\"renewalTerm\" ff-model=\"$ctrl.charge.renewalTerm\" ff-required=\"true\" ff-options=\"opt.id as opt.name for opt in $ctrl.optsRenewalTerm\" ff-validate-alert=\"{{'RECURRING_BILLING.RENEWAL_TERM' | translate}}\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"> <span> <span translate=\"RECURRING_BILLING.RENEWAL_NOTICE_PERIOD\"></span> <ff-hint><span translate=\"RECURRING_BILLING.RENEWAL_NOTICE_PERIOD.HINT\"></span></ff-hint> </span> </ff-label> <ff-select name=\"renewalNoticePeriod\" ff-model=\"$ctrl.charge.renewalNoticePeriod\" ff-options=\"opt.id as opt.name for opt in $ctrl.optsRenewalNoticePeriod\" ff-validate-alert=\"{{'RECURRING_BILLING.RENEWAL_NOTICE_PERIOD' | translate}}\"></ff-select> </label> </div> </ff-panel> <ff-panel flex=\"{md: '0 0 50%'}\"> <ff-panel-header><span translate=\"RECURRING_BILLING.DISCOUNT.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"><span translate=\"RECURRING_BILLING.DISCOUNT.TYPE\"></span></ff-label> <ff-select ff-model=\"$ctrl.charge.discountType\" ff-required=\"true\" name=\"discountType\" ff-validate-alert=\"{{'RECURRING_BILLING.DISCOUNT.TYPE' | translate}}\" ff-options=\"type.name for type in $ctrl.discountTypes\"> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\" ng-disabled=\"!$ctrl.charge.discountType.id\"> <req translate=\"RECURRING_BILLING.DISCOUNT.VALUE\"></req> </ff-label> <ff-text ff-model=\"$ctrl.charge.discountValue\" name=\"discountValue\" ff-required=\"$ctrl.charge.discountType.id\" ff-disabled=\"!$ctrl.charge.discountType.id\" ff-validate-alert=\"{{'RECURRING_BILLING.DISCOUNT.VALUE' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\" ng-disabled=\"!$ctrl.charge.discountType.id\"> <req translate=\"RECURRING_BILLING.DISCOUNT.MONTHS\"></req> </ff-label> <ff-select ff-model=\"$ctrl.charge.discountTrialOccurrences\" name=\"discountTrialOccurrences\" ff-required=\"$ctrl.charge.discountType.id\" ff-validate-alert=\"{{'RECURRING_BILLING.DISCOUNT.MONTHS' | translate}}\" ff-options=\"trial.name for trial in $ctrl.discountTrialOccurrences\" ff-disabled=\"!$ctrl.charge.discountType.id\"> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\" ng-disabled=\"!$ctrl.charge.discountType.id\"> <req translate=\"RECURRING_BILLING.DISCOUNT.START_DATE\"></req> </ff-label> <ff-date ff-model=\"$ctrl.charge.discountStartDate\" ff-required=\"$ctrl.charge.discountType.id\" name=\"discountStartDate\" ff-disabled=\"!$ctrl.charge.discountType.id\" ff-validate-alert=\"{{'RECURRING_BILLING.DISCOUNT.START_DATE' | translate}}\"></ff-date> </label> </ff-panel> <ff-panel flex=\"{md: '0 0 50%'}\"> <ff-panel-header><span translate=\"RECURRING_BILLING.STATUS_NOTES.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 126px\"> <span> <req translate=\"RECURRING_BILLING.STATUS_NOTES.STATUS\"></req> <ff-hint ng-if=\"$ctrl.charge.status.id === 'active'\"> <span translate=\"RECURRING_BILLING.STATUS_NOTES.STATUS.HINT\"></span> </ff-hint> <ff-hint hint-type=\"warning\" ng-if=\"$ctrl.charge.existOutstandingUsages && ($ctrl.charge.status.id === 'deleted' || $ctrl.charge.status.id === 'inactive')\"> <span translate=\"RECURRING_BILLING.STATUS_NOTES.STATUS.WARNING\"></span> </ff-hint> </span> </ff-label> <ff-select ff-model=\"$ctrl.charge.status\" ff-required=\"true\" name=\"status\" ff-options=\"status.name for status in $ctrl.chargeStatuses\" ff-validate-alert=\"{{'RECURRING_BILLING.STATUS_NOTES.STATUS' | translate}}\" ff-change=\"$ctrl.onChangeStatus()\"> </ff-select> </label> <ff-static ng-if=\"$ctrl.activeChargesCount < 2 && $ctrl.initialStatus.id === 'active' && ($ctrl.charge.status.id === 'inactive' || $ctrl.charge.status.id === 'deleted')\"> <ff-col> <label> <ff-checkbox name=\"makeMemberInactive\" ff-model=\"$ctrl.charge.makeMemberInactive\"> <span translate=\"RECURRING_BILLING.STATUS_NOTES.INACTIVATE_MEMBER\"></span> </ff-checkbox> </label> <label> <ff-checkbox name=\"makeCoMembersInactive\" ff-model=\"$ctrl.charge.makeCoMembersInactive\"> <span translate=\"RECURRING_BILLING.STATUS_NOTES.INACTIVATE_CO_MEMBERS\"></span> </ff-checkbox> </label> </ff-col> </ff-static> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 0 60px', lg: '0 0 126px'}\"> <span translate=\"RECURRING_BILLING.STATUS_NOTES.NOTES\" class=\"ff-flex-start\" style=\"padding-top:.5rem\"></span> </ff-label> <ff-textarea ff-model=\"$ctrl.charge.notes\" name=\"notes\" rowspan=\"3\"></ff-textarea> </label> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" ff-click=\"$ctrl.saveCharge()\" ff-disabled=\"chargeForm.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.backToList()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"collapseBtn\" ng-if=\"$ctrl.charge.id\" ff-click=\"$ctrl.showAudit = !$ctrl.showAudit\" ng-class=\"{ collapsed: !$ctrl.showAudit }\"> <span translate=\"GLOBAL.BTN_AUDIT\"></span> </ff-btn> </ff-btn-group> </div> </form> <div ng-if=\"$ctrl.showAudit\" class=\"animate-collapse\"> <recurring-charge-audit price-list-products=\"$ctrl.charge.options.priceListProducts\" recurring-charge-id=\"$ctrl.charge.id\" reservation-units=\"$resolve.resUnits\"></recurring-charge-audit> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/billing/recurring-billing/recurring-list.controller.js":
/*!***********************************************************************!*\
  !*** ./common/billing/recurring-billing/recurring-list.controller.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);



angular.module('deskworks.billing.recurringCharge.list', ['deskworks.recurringCharge.service']).config(["$routeProvider", function ($routeProvider) {
  'use strict';

  $routeProvider.when('/recurring-charges', {
    templateUrl: 'billing/recurring-billing/recurring-list.tpl.html',
    controller: 'RecurringChargeListCtrl as $ctrl',
    label: 'Recurring Billing',
    routeBranch: 'recurring-charges',
    translations: ['recurring-billing'],
    resolve: {
      charges: ["dwAlerts", "recurringChargeService", "state", "routeHelper", function charges(dwAlerts, recurringChargeService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser().then(function () {
            return recurringChargeService.query(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
              return dwAlerts.error(err, 'Failed to query recurring charges.');
            });
          });
        });
      }],
      user: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function user(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }]
    }
  });
}]).controller('RecurringChargeListCtrl', ["$scope", "$translate", "dwAlerts", "recurringChargeService", "user", "charges", "state", "helper", function ($scope, $translate, dwAlerts, recurringChargeService, user, charges, state, helper) {
  'use strict';

  var $ctrl = this;
  $ctrl.charges = charges;
  state.setPageTitle($translate.instant('RECURRING_BILLING.LIST.PAGE_TITLE', {
    userName: user.fullNameCompany
  }));
  /**
   * New Charge button handler
   */

  $ctrl.new = function () {
    return state.setPath('/recurring-charges/new/edit');
  };
  /**
   * Edit Charge button handler
   */


  $ctrl.edit = function (charge) {
    return state.setPath('/recurring-charges/' + charge.id + '/edit');
  };
  /**
   * Saves 'Use for Check-In Billing' status
   */


  $ctrl.saveUseForCheckInBilling = function (charge) {
    $ctrl.charges.forEach(function (ch) {
      // reset other checkboxes
      if (ch.useForCheckInBilling && ch !== charge) ch.useForCheckInBilling = false;
    });
    charge.$spin = true;
    recurringChargeService.setUseForCheckInBilling(state.getCurrentCenterId(), state.getCurrentUserId(), charge.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to set "Use for Check-In Billing".');
    }).finally(function () {
      charge.$spin = false;
    });
  };
}]);

/***/ }),

/***/ "./common/billing/recurring-billing/recurring-list.tpl.html":
/*!******************************************************************!*\
  !*** ./common/billing/recurring-billing/recurring-list.tpl.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"recurring-charges\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-panel> <ff-header> <ff-row> <cell><span translate=\"RECURRING_BILLING.LIST.PRODUCT\"></span></cell> <cell flex=\"0 0 25%\"><span translate=\"RECURRING_BILLING.GENERAL.DESCRIPTION\"></span></cell> <cell flex=\"0 0 17%\" class=\"ff-right\"><span translate=\"RECURRING_BILLING.LIST.NEXT_BILLED\"></span></cell> <cell flex=\"0 0 17%\" class=\"ff-center\"><span translate=\"RECURRING_BILLING.LIST.STATUS\"></span></cell> <cell flex=\"{xs: '0 0 90px', sm: '0 0 120px'}\" class=\"ff-center\"><span translate=\"RECURRING_BILLING.LIST.USE_FOR_CHECK_IN_BILLING\"></span></cell> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row zero-height\"> <ff-btn sense=\"edit\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-row ng-repeat=\"charge in $ctrl.charges\"> <ff-static ff-bind=\"::charge.productName\"></ff-static> <ff-static flex=\"0 0 25%\" ff-bind=\"::charge.description\"></ff-static> <ff-static flex=\"0 0 17%\" class=\"ff-right\" ff-bind=\"::charge.nextBilled | date:'mediumDate'\"></ff-static> <ff-static flex=\"0 0 17%\" class=\"ff-center\" ff-bind=\"::charge.status.name\"></ff-static> <ff-label flex=\"{xs: '0 0 90px', sm: '0 0 120px'}\" class=\"ff-center\" ff-dim=\"charge.$spin\"> <ff-checkbox ff-model=\"charge.useForCheckInBilling\" ff-value=\"true\" ff-change=\"$ctrl.saveUseForCheckInBilling(charge)\" ng-if=\"::charge.productHasPasses\"></ff-checkbox> <span ng-if=\"::!charge.productHasPasses\" translate=\"RECURRING_BILLING.LIST.NOT_AVAILABLE\"></span> </ff-label> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row\"> <ff-btn sense=\"edit\" size=\"xs\" ff-click=\"$ctrl.edit(charge)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> </ff-panel> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"new\" ff-click=\"$ctrl.new()\"><span translate=\"RECURRING_BILLING.LIST.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=main~._common .js.map?_rev=e2f8c2dd1e2f26dff1dc