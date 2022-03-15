(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-it-now~floor-plans~._shared_d"],{

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

/***/ "./shared/new-user-profile/new-user-profile.directive.js":
/*!***************************************************************!*\
  !*** ./shared/new-user-profile/new-user-profile.directive.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-user-profile.tpl.html */ "./shared/new-user-profile/new-user-profile.tpl.html");
/* harmony import */ var _new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/**
 * New User Profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('newUserProfileDirective', []).directive('newUserProfile', function () {
  return {
    template: _new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    restrict: 'E',
    scope: true,
    controller: 'NewUserProfileCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      center: '<'
    }
  };
}).controller('NewUserProfileCtrl', ["$scope", "userProfileService", function ($scope, userProfileService) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    userProfileService.bindTestUserGenerator($scope, $ctrl.user, $ctrl.reg); // Bind test user data generator
  };
}]));

/***/ }),

/***/ "./shared/new-user-profile/new-user-profile.tpl.html":
/*!***********************************************************!*\
  !*** ./shared/new-user-profile/new-user-profile.tpl.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header><small translate=\"GLOBAL.REQUIRED_FIELDS_MARKED_WITH\"></small></ff-panel-header> <div class=\"ff-grid ff-gutter-v ff-gutter-h\"> <up-personal-info user=\"$ctrl.user\" schema=\"$ctrl.user.schema\" reg=\"$ctrl.reg\"></up-personal-info> <up-addresses flex=\"{md: '0 0 50%'}\" user=\"$ctrl.user\" schema=\"$ctrl.user.schema\" reg=\"$ctrl.reg\" center=\"$ctrl.center\" single=\"true\"></up-addresses> <div flex=\"{md: '0 0 50%'}\"> <div class=\"ff-grid ff-gutter-v\"> <up-login-info user=\"$ctrl.user\" schema=\"$ctrl.user.schema\" reg=\"$ctrl.reg\"></up-login-info> <up-phones user=\"$ctrl.user\" schema=\"$ctrl.user.schema\" reg=\"$ctrl.reg\" single=\"true\"></up-phones> </div> </div> <up-photo flex=\"{md: '0 0 50%'}\" user=\"$ctrl.user\" schema=\"$ctrl.user.schema\" reg=\"$ctrl.reg\"></up-photo> <div flex=\"{md: '0 0 50%'}\"> <div class=\"ff-grid ff-gutter-v\"> <up-lead-source user=\"$ctrl.user\" schema=\"$ctrl.user.schema\" reg=\"$ctrl.reg\"></up-lead-source> <up-terms-of-service user=\"$ctrl.user\" schema=\"$ctrl.user.schema\" reg=\"$ctrl.reg\"></up-terms-of-service> </div> </div> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-agreement/reservation-agreement.directive.js":
/*!*************************************************************************!*\
  !*** ./shared/reservation-agreement/reservation-agreement.directive.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reservation_agreement_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservation-agreement.tpl.html */ "./shared/reservation-agreement/reservation-agreement.tpl.html");
/* harmony import */ var _reservation_agreement_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reservation_agreement_tpl_html__WEBPACK_IMPORTED_MODULE_0__);
/**
 * reservationAgreement directive - 'Reservation Agreement' section in purchase step of Book It Now and Simple Reservation wizards
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationAgreement', ['deskworks.helper', 'deskworks.state']).directive('reservationAgreement', function () {
  return {
    restrict: 'E',
    scope: true,
    template: _reservation_agreement_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    translations: ['reservations']
  };
}));

/***/ }),

/***/ "./shared/reservation-agreement/reservation-agreement.tpl.html":
/*!*********************************************************************!*\
  !*** ./shared/reservation-agreement/reservation-agreement.tpl.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"reservationAgreement\" class=\"ff-no-frame\"> <label> <ff-checkbox ff-model=\"reservationAgreement\" ff-required=\"true\" ff-validate-alert=\"{ required: ('RESERVATIONS.RESERVATION_AGREEMENT.REQUIRED' | translate) }\" title=\"{{'RESERVATIONS.RESERVATION_AGREEMENT.REQUIRED' | translate}}\"> <div translate=\"RESERVATIONS.RESERVATION_AGREEMENT.LABEL\"></div> <a ng-href=\"{{::wlLinks.reservationAgreementLinkUrl}}\" ng-bind=\"::wlLinks.reservationAgreementLinkText\" target=\"_blank\" rel=\"noopener\"></a> </ff-checkbox> </label> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/staff-help/staff-help-directive.tpl.html":
/*!*********************************************************!*\
  !*** ./shared/staff-help/staff-help-directive.tpl.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel> <span ng-bind=\"::$ctrl.notice\"></span> </ff-panel> <ff-btn-group> <ff-btn sense=\"home\" type=\"submit\" ff-click=\"$ctrl.home()\"><span translate=\"GLOBAL.BTN_HOME\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/staff-help/staff-help.directive.js":
/*!***************************************************!*\
  !*** ./shared/staff-help/staff-help.directive.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _staff_help_directive_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-help-directive.tpl.html */ "./shared/staff-help/staff-help-directive.tpl.html");
/* harmony import */ var _staff_help_directive_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_staff_help_directive_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.StaffHelpDirectiveCtrl', ['ngRoute', 'deskworks.helper', 'deskworks.config']).directive('staffHelp', function () {
  return {
    template: _staff_help_directive_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    restrict: 'E',
    scope: true,
    controller: 'StaffHelpDirectiveCtrl as $ctrl'
  };
}).controller('StaffHelpDirectiveCtrl', ["$scope", "$translate", "dwAlerts", "helper", "state", "deskworksConfig", function ($scope, $translate, dwAlerts, helper, state, deskworksConfig) {
  var $ctrl = this;
  $ctrl.notice = state.getParam('notice');
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

  $ctrl.home = function () {
    state.resetParams();
    return state.setPath(deskworksConfig.getDefaultRoute());
  };
}]));

/***/ }),

/***/ "./shared/wizard-reservation/02-reservation/reservation.controller.js":
/*!****************************************************************************!*\
  !*** ./shared/wizard-reservation/02-reservation/reservation.controller.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_reservation_form_res_reservation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/reservation-form/res-reservation.component */ "./shared/reservation-form/res-reservation.component.js");
/* harmony import */ var shared_wizard_reservation_purchase_redirect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/wizard-reservation/purchase-redirect.service */ "./shared/wizard-reservation/purchase-redirect.service.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WizardReservationReservationCtrl', [shared_reservation_form_res_reservation_component__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'session', shared_wizard_reservation_purchase_redirect_service__WEBPACK_IMPORTED_MODULE_3__["default"].name]).controller('WizardReservationReservationCtrl', ["$scope", "$translate", "dwAlerts", "state", "session", "center", "wizardReservationPurchaseRedirect", function ($scope, $translate, dwAlerts, state, session, center, wizardReservationPurchaseRedirect) {
  var $ctrl = this;
  var origin = "/".concat(state.getPath().split('/')[1]);
  state.setPageTitle($translate.instant('RESERVATIONS.NEW.PAGE_TITLE', {
    centerName: center.name
  }));

  $ctrl.next = function () {
    if (session.isAnonymous()) {
      return state.setPath("".concat(origin, "/sign-in"));
    }

    return wizardReservationPurchaseRedirect(); // authenticated
  };

  $ctrl.back = function () {
    return state.setPath(origin);
  };
}]));

/***/ }),

/***/ "./shared/wizard-reservation/03-sign-in/sign-in.controller.js":
/*!********************************************************************!*\
  !*** ./shared/wizard-reservation/03-sign-in/sign-in.controller.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_wizard_reservation_purchase_redirect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/wizard-reservation/purchase-redirect.service */ "./shared/wizard-reservation/purchase-redirect.service.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WizardReservationSignInCtrl', ['session', 'deskworks.ReservationCost', 'deskworks.purchase.service', shared_wizard_reservation_purchase_redirect_service__WEBPACK_IMPORTED_MODULE_3__["default"].name]).controller('WizardReservationSignInCtrl', ["$scope", "$filter", "$translate", "dwAlerts", "state", "wizardReservationPurchaseRedirect", function ($scope, $filter, $translate, dwAlerts, state, wizardReservationPurchaseRedirect) {
  var $ctrl = this;
  var origin = "/".concat(state.getPath().split('/')[1]);
  state.setPageTitle($translate.instant('SIGN_IN.PAGE_TITLE'));
  /**
   * dwSignIn:SignIn event listener
   */

  $scope.$on('dwSignIn:SignIn', function ($event) {
    $event.stopPropagation();
    wizardReservationPurchaseRedirect({
      replace: true
    });
  });
  /**
   * dwSignIn:SignUp event listener - proceeds to Book It Now -> SignUp
   */

  $scope.$on('dwSignIn:SignUp', function ($event) {
    $event.stopPropagation();
    return state.replace().setPath("".concat(origin, "/sign-up")); // hide sign-in step in history to skip it with back button
  });
  /**
   * Back
   */

  $ctrl.back = function () {
    return state.setPath("".concat(origin, "/reservation"));
  };
}]));

/***/ }),

/***/ "./shared/wizard-reservation/04-confirm/confirm.controller.js":
/*!********************************************************************!*\
  !*** ./shared/wizard-reservation/04-confirm/confirm.controller.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");
/* harmony import */ var _confirm_tpl_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirm.tpl.html */ "./shared/wizard-reservation/04-confirm/confirm.tpl.html");
/* harmony import */ var _confirm_tpl_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_confirm_tpl_html__WEBPACK_IMPORTED_MODULE_7__);








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WizardReservationConfirmCtrl', ['deskworks.reservationService', 'deskworks.reservationUnit.optsRepeatFrequency', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name]).controller('WizardReservationConfirmCtrl', ["$scope", "$filter", "$translate", "$templateCache", "settings", "dwAlerts", "session", "state", "deskworksConfig", "reservationService", "reservationFields", "optsRepeatFrequency", function ($scope, $filter, $translate, $templateCache, settings, dwAlerts, session, state, deskworksConfig, reservationService, reservationFields, optsRepeatFrequency) {
  var _context;

  var $ctrl = this;
  var origin = "/".concat(state.getPath().split('/')[1]);
  $templateCache.put('wizard-reservation/04-confirm/confirm.tpl.html', _confirm_tpl_html__WEBPACK_IMPORTED_MODULE_7___default.a);
  state.setPageTitle($translate.instant('RESERVATIONS.CONFIRM.PAGE_TITLE'));
  $ctrl.timeStart = $filter('toDate')(state.getParam('start'));
  $ctrl.timeEnd = $filter('toDate')(state.getParam('end'));
  $ctrl.reservationNote = state.getParam('note') || '';
  $ctrl.emailConfirmation = !!state.getParam('confirm');
  $ctrl.reservationTitle = state.getParam('title');
  $ctrl.reservationNote = state.getParam('note');
  $ctrl.reservationUnitId = state.getParam('unit');
  $ctrl.optsRepeatFrequency = optsRepeatFrequency;
  $ctrl.repeatFrequency = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.optsRepeatFrequency).call(_context, function (o) {
    return o.id === state.getParam('freq');
  }) || $ctrl.optsRepeatFrequency[0];
  $ctrl.repeatDuration = state.getParam('duration') && +state.getParam('duration') || $ctrl.repeatFrequency.repeatDurationOptions && $ctrl.repeatFrequency.repeatDurationOptions[0];
  $scope.$watch('$ctrl.emailConfirmation', function (val) {
    state.setParam('confirm', val || null).replace();
  });
  /**
   * Next
   */

  $ctrl.next = function () {
    var fields = JSON.parse(state.getParam('fields') || "{}");

    _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(fields).forEach(function (key) {
      var field = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(reservationFields).call(reservationFields, function (f) {
        return f.id === +key;
      });

      fields[key] = field.$$serialize(field, fields[key]);
    });

    var data = {
      from: $ctrl.timeStart,
      to: $ctrl.timeEnd,
      title: $ctrl.reservationTitle,
      reservationNote: $ctrl.reservationNote,
      centerId: state.getCurrentCenterId(),
      reservationUnitId: $ctrl.reservationUnitId,
      emailConfirmation: $ctrl.emailConfirmation,
      repeatFrequency: $ctrl.repeatFrequency.id,
      repeatDuration: angular.isDefined($ctrl.repeatFrequency.repeatDurationOptions) ? $ctrl.repeatDuration : '',
      fields: fields
    };
    return reservationService.save(state.getCurrentCenterId(), state.getCurrentUserId(), data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save reservation.');
    }).then(function (result) {
      if (result.accessCode && settings.enableAccessCodes && !session.isAdmin()) {
        state.setParam('accessCode', result.accessCode);
        return state.setPath("".concat(origin, "/complete"));
      }

      state.resetParams();
      return state.setPath(session.isAdmin() ? origin : deskworksConfig.getDefaultRoute());
    });
  };
  /**
   * Back
   */


  $ctrl.back = function () {
    return state.setPath("".concat(origin, "/reservation"));
  };
  /**
   * Whether recurring settings are available
   */


  $ctrl.hasRecurring = function () {
    return session.isAdmin() || !settings.hideRecurringReservations;
  };
}]));

/***/ }),

/***/ "./shared/wizard-reservation/04-confirm/confirm.tpl.html":
/*!***************************************************************!*\
  !*** ./shared/wizard-reservation/04-confirm/confirm.tpl.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <form class=\"gutter-v\" style=\"max-width:480px\"> <ff-panel> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.LOCATION\"></span></ff-label> <ff-static ff-bind=\"::$resolve.center.name\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.SPACE\"></span></ff-label> <ff-static ff-bind=\"::$resolve.reservationUnit.name\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.DATE\"></span></ff-label> <ff-static ff-bind=\"::$ctrl.timeStart | date:'longDate'\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.TIME\"></span></ff-label> <ff-static> <span><span nice-time=\"::$ctrl.timeStart\"></span> - <span nice-time=\"::$ctrl.timeEnd\"></span></span> </ff-static> </ff-row> <div ng-if=\"$ctrl.hasRecurring()\"> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.REPEAT_FREQUENCY\"></span></ff-label> <ff-static name=\"repeats\"><span ng-bind=\"$ctrl.repeatFrequency.name\"></span></ff-static> </ff-row> <ff-row ng-if=\"$ctrl.repeatFrequency.repeatDurationOptions\"> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.REPEAT_DURATION\"></span></ff-label> <ff-static>{{$ctrl.repeatFrequency.repeatDurationFilter($ctrl.repeatDuration)}}</ff-static> </ff-row> </div> <label class=\"ff-row\" style=\"margin-left:.5rem;margin-top:.5rem\"> <ff-checkbox name=\"emailConfirmation\" ff-model=\"$ctrl.emailConfirmation\"> <span translate=\"RESERVATIONS.EMAIL_CONFIRMATION\"></span> </ff-checkbox> </label> </ff-panel> <ff-btn-group> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"ok\" type=\"submit\" ff-click=\"$ctrl.next()\"><span translate=\"GLOBAL.BTN_CONFIRM\"></span></ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/wizard-reservation/05-complete/complete.controller.js":
/*!**********************************************************************!*\
  !*** ./shared/wizard-reservation/05-complete/complete.controller.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _complete_tpl_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete.tpl.html */ "./shared/wizard-reservation/05-complete/complete.tpl.html");
/* harmony import */ var _complete_tpl_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_complete_tpl_html__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WizardReservationCompleteCtrl', []).controller('WizardReservationCompleteCtrl', ["$scope", "$translate", "$templateCache", "dwAlerts", "state", "deskworksConfig", function ($scope, $translate, $templateCache, dwAlerts, state, deskworksConfig) {
  var $ctrl = this;
  var origin = "/".concat(state.getPath().split('/')[1]);
  state.setPageTitle($translate.instant('BOOK_IT_NOW.COMPLETE.PAGE_TITLE'));
  $templateCache.put('wizard-reservation/05-complete/complete.tpl.html', _complete_tpl_html__WEBPACK_IMPORTED_MODULE_2___default.a);
  $ctrl.accessCode = state.getParam('accessCode');
  /**
   * Prevent using Back button
   */

  $scope.$on('$locationChangeStart', function (event, newUrl) {
    if (newUrl && newUrl.indexOf(origin) >= 0) {
      event.preventDefault();
      dwAlerts.error($translate.instant('SIMPLE_RES.COMPLETE.BACK_ERROR'));
    }
  });
  /**
   * Back to Home Page button handler
   */

  $ctrl.home = function () {
    state.resetParams();
    return state.setPath(deskworksConfig.getDefaultRoute());
  };
}]));

/***/ }),

/***/ "./shared/wizard-reservation/05-complete/complete.tpl.html":
/*!*****************************************************************!*\
  !*** ./shared/wizard-reservation/05-complete/complete.tpl.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel ng-if=\"$ctrl.accessCode && $resolve.settings.enableAccessCodes\"> <span class=\"ff-center ff-bmargin\" translate=\"BOOK_IT_NOW.COMPLETE.ACCESS_CODE\" translate-values=\"{ accessCode: $ctrl.accessCode }\"></span> </ff-panel> <ff-btn-group> <ff-btn sense=\"home\" type=\"submit\" ff-click=\"$ctrl.home()\"><span translate=\"GLOBAL.BTN_HOME\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/wizard-reservation/06-purchase/purchase.controller.js":
/*!**********************************************************************!*\
  !*** ./shared/wizard-reservation/06-purchase/purchase.controller.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/new-billing-profile/new-billing-profile.directive */ "./shared/new-billing-profile/new-billing-profile.directive.js");
/* harmony import */ var shared_need_help_need_help_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/need-help/need-help.directive */ "./shared/need-help/need-help.directive.js");
/* harmony import */ var shared_reservation_agreement_reservation_agreement_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/reservation-agreement/reservation-agreement.directive */ "./shared/reservation-agreement/reservation-agreement.directive.js");
/* harmony import */ var shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice.directive */ "./shared/dw-invoice/dw-invoice.directive.js");
/* harmony import */ var shared_dw_invoice_dw_invoice_payment_processing_fee_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice-payment-processing-fee.directive */ "./shared/dw-invoice/dw-invoice-payment-processing-fee.directive.js");
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");
/* harmony import */ var _purchase_tpl_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./purchase.tpl.html */ "./shared/wizard-reservation/06-purchase/purchase.tpl.html");
/* harmony import */ var _purchase_tpl_html__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_purchase_tpl_html__WEBPACK_IMPORTED_MODULE_14__);















/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WizardReservationPurchaseCtrl', ['ngRoute', 'deskworks.helper', 'deskworks.purchase.service', 'deskworks.reservationService', 'deskworks.userProfile.service', 'deskworks.reservationUnit.optsRepeatFrequency', shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_need_help_need_help_directive__WEBPACK_IMPORTED_MODULE_9__["default"].name, shared_reservation_agreement_reservation_agreement_directive__WEBPACK_IMPORTED_MODULE_10__["default"].name, shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_dw_invoice_dw_invoice_payment_processing_fee_directive__WEBPACK_IMPORTED_MODULE_12__["default"].name, shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_13__["default"].name]).controller('WizardReservationPurchaseCtrl', ["$scope", "$filter", "$q", "$route", "$translate", "$timeout", "$templateCache", "dwAlerts", "helper", "session", "state", "center", "purchase", "user", "reservationUnit", "settings", "reservationFields", "purchaseService", "reservationService", "userProfileService", "optsRepeatFrequency", "deskworksConfig", function ($scope, $filter, $q, $route, $translate, $timeout, $templateCache, dwAlerts, helper, session, state, center, purchase, user, reservationUnit, settings, reservationFields, purchaseService, reservationService, userProfileService, optsRepeatFrequency, deskworksConfig) {
  var $ctrl = this;
  var origin = "/".concat(state.getPath().split('/')[1]);
  $templateCache.put('wizard-reservation/06-purchase/purchase.tpl.html', _purchase_tpl_html__WEBPACK_IMPORTED_MODULE_14___default.a);
  state.setPageTitle($translate.instant('SIMPLE_RES.PURCHASE.PAGE_TITLE', {
    centerName: center.name
  }));
  $ctrl.center = center;
  $ctrl.user = user;
  $ctrl.purchase = purchase;
  $ctrl.purchasePackageId = +state.getParam('purchasePackageId');
  $ctrl.reservationUnit = reservationUnit;
  $ctrl.timeStart = $filter('toDate')(state.getParam('start'));
  $ctrl.timeEnd = $filter('toDate')(state.getParam('end'));
  $ctrl.reservationTitle = state.getParam('title') || '';
  $ctrl.reservationNote = state.getParam('note') || '';
  $ctrl.emailConfirmation = !!state.getParam('confirm');
  $scope.$watch('$ctrl.emailConfirmation', function (val) {
    state.setParam('confirm', val || null).replace();
  });
  $ctrl.repeatFrequency = optsRepeatFrequency[0];

  if (state.getParam('freq')) {
    $ctrl.repeatFrequency = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(optsRepeatFrequency).call(optsRepeatFrequency, function (opt) {
      return opt.id === state.getParam('freq');
    });

    if ($ctrl.repeatFrequency && $ctrl.repeatFrequency.repeatDurationOptions) {
      if (state.getParam('duration') - 1 < $ctrl.repeatFrequency.repeatDurationOptions.length) {
        $ctrl.repeatDuration = +state.getParam('duration');
      }
    }
  }
  /**
   * Next button handler
   */


  $ctrl.next = function () {
    if (helper.pointFirstInvalid('#wizardReservationPurchase')) return;
    $ctrl.spin = true;
    return userProfileService.saveBillingProfile(state.getCurrentCenterId(), user).then(function (_) {
      if (+$ctrl.purchase.balance <= 0) return state.setPath("".concat(origin, "/complete"));
      return $ctrl.createReservationWithPayment().then(function (result) {
        return $ctrl.updatePurchase().then(function (_) {
          return result;
        });
      }).then(function (result) {
        if (result.accessCode && settings.enableAccessCodes && !session.isAdmin()) {
          state.setParam('accessCode', result.accessCode);
          return state.setPath("".concat(origin, "/complete"));
        }

        state.resetParams();
        return state.setPath(deskworksConfig.getDefaultRoute());
      });
    }).finally(function (_) {
      $ctrl.spin = false;
    });
  };
  /**
   * Create reservation with payment
   */


  $ctrl.createReservationWithPayment = function (_) {
    var fields = JSON.parse(state.getParam('fields') || "{}");

    _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(fields).forEach(function (key) {
      var field = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(reservationFields).call(reservationFields, function (f) {
        return f.id === +key;
      });

      fields[key] = field.$$serialize(field, fields[key]);
    });

    var data = {
      from: $ctrl.timeStart,
      to: $ctrl.timeEnd,
      reservationNote: $ctrl.reservationNote,
      title: $ctrl.reservationTitle,
      reservationUnitId: $ctrl.reservationUnit.id,
      emailConfirmation: $ctrl.emailConfirmation,
      repeatFrequency: $ctrl.repeatFrequency.id,
      repeatDuration: $ctrl.repeatDuration,
      fields: fields
    };
    if ($ctrl.purchasePackageId) data.purchasePackageId = $ctrl.purchasePackageId;
    return reservationService.saveWithPayment($ctrl.center.id, $ctrl.user.id, data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to make reservation and payment.');
    });
  };
  /**
   * Update purchase order
   */


  $ctrl.updatePurchase = function (_) {
    return purchaseService.get($ctrl.center.id, $ctrl.user.id, $ctrl.purchase.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get purchase.');
    }).then(function (purchase) {
      $ctrl.purchase = purchase;
    });
  };
  /**
   * Back button handler
   */


  $ctrl.back = function () {
    return state.setPath("".concat(origin, "/reservation"));
  };
  /**
   * Staff Help button handler
   */


  $ctrl.staffHelp = function () {
    return purchaseService.createStaffHelp($ctrl.center.id, $ctrl.user.id, $ctrl.purchase.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to create staff help.');
    }).then(function (result) {
      state.setParam('notice', result.notice);
      return state.setPath("".concat(origin, "/staff-help"));
    });
  };
  /**
   * Whether recurring settings are available
   */


  $ctrl.hasRecurring = function () {
    return session.isAdmin() || !settings.hideRecurringReservations;
  };
}]));

/***/ }),

/***/ "./shared/wizard-reservation/06-purchase/purchase.tpl.html":
/*!*****************************************************************!*\
  !*** ./shared/wizard-reservation/06-purchase/purchase.tpl.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div> <h1 class=\"page-title flex\"> <span>{{state.getPageTitle()}}</span> <need-help phone=\"$ctrl.center.phone\"></need-help> </h1> <form id=\"wizardReservationPurchase\" class=\"ff-grid gutter-v gutter-h\" novalidate ff-dim=\"$ctrl.spin\"> <ff-panel> <ff-panel-header> <span translate=\"SIMPLE_RES.PURCHASE.RESERVATION.HEADER\"></span> </ff-panel-header> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.LOCATION\"></span></ff-label> <ff-static ff-bind=\"::$ctrl.center.name\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.SPACE\"></span></ff-label> <ff-static ff-bind=\"::$ctrl.reservationUnit.name\" name=\"reservationUnit\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.DATE\"></span></ff-label> <ff-static ff-bind=\"::$ctrl.timeStart | date:'longDate'\" name=\"date\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.TIME\"></span></ff-label> <ff-static> <span><span nice-time=\"::$ctrl.timeStart\"></span> - <span nice-time=\"::$ctrl.timeEnd\"></span></span> </ff-static> </ff-row> <ff-row ng-if=\"$ctrl.hasRecurring()\"> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.REPEAT_FREQUENCY\"></span></ff-label> <ff-static><span ng-bind=\"::$ctrl.repeatFrequency.name\"></span></ff-static> </ff-row> <ff-row ng-if=\"$ctrl.hasRecurring() && $ctrl.repeatFrequency.repeatDurationOptions\"> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.REPEAT_DURATION\"></span></ff-label> <ff-static>{{::$ctrl.repeatFrequency.repeatDurationFilter($ctrl.repeatDuration)}}</ff-static> </ff-row> </ff-panel> <ff-panel> <ff-panel-header> <span translate=\"SIMPLE_RES.PURCHASE.ORDER.HEADER\" translate-values=\"{ orderId: $ctrl.purchase.orderId }\"></span> </ff-panel-header> <dw-invoice invoice=\"$ctrl.purchase\" center=\"$ctrl.center\" allow-remove=\"false\" dw-invoice-payment-processing-fee settings=\"$resolve.settings\" credit-cards=\"$resolve.user.creditCards\" e-checks=\"$resolve.user.eChecks\"></dw-invoice> </ff-panel> <div> <ff-panel-header> <div translate=\"BILLING_PROFILE.PAGE_TITLE\" translate-values=\"{ userName: $resolve.user.fullName }\"></div> <small translate=\"GLOBAL.REQUIRED_FIELDS_MARKED_WITH\"></small> </ff-panel-header> <new-billing-profile user=\"$resolve.user\" settings=\"$resolve.settings\" id=\"newBillingProfile\" class=\"ff-grid gutter-v\"></new-billing-profile> </div> <ff-col> <div class=\"ff-grid gutter-h gutter-v\" style=\"justify-content:flex-end\"> <reservation-agreement flex=\"0 0 300px\" ng-if=\"wlLinks.reservationAgreementLinkUrl\"></reservation-agreement> <ff-panel flex=\"0 0 300px\"> <label class=\"ff-row\"> <ff-checkbox name=\"emailConfirmation\" ff-model=\"$ctrl.emailConfirmation\"> <span translate=\"RESERVATIONS.EMAIL_CONFIRMATION\"></span> </ff-checkbox> </label> </ff-panel> </div> </ff-col> <ff-btn-group> <ff-btn sense=\"help\" ff-click=\"$ctrl.staffHelp()\"><span translate=\"GLOBAL.BTN_STAFF_HELP\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" type=\"submit\" ff-click=\"$ctrl.next()\"><span translate=\"GLOBAL.BTN_NEXT\"></span></ff-btn> </ff-btn-group> </form> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/wizard-reservation/07-sign-up/sign-up.controller.js":
/*!********************************************************************!*\
  !*** ./shared/wizard-reservation/07-sign-up/sign-up.controller.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_new_user_profile_new_user_profile_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/new-user-profile/new-user-profile.directive */ "./shared/new-user-profile/new-user-profile.directive.js");
/* harmony import */ var shared_need_help_need_help_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/need-help/need-help.directive.js */ "./shared/need-help/need-help.directive.js");
/* harmony import */ var _sign_up_tpl_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up.tpl.html */ "./shared/wizard-reservation/07-sign-up/sign-up.tpl.html");
/* harmony import */ var _sign_up_tpl_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sign_up_tpl_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_wizard_reservation_purchase_redirect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/wizard-reservation/purchase-redirect.service */ "./shared/wizard-reservation/purchase-redirect.service.js");






/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WizardReservationSignUpCtrl', ['ngRoute', 'deskworks.userProfile.service', 'deskworks.routeHelper', 'deskworks.helper', shared_new_user_profile_new_user_profile_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_need_help_need_help_directive_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_wizard_reservation_purchase_redirect_service__WEBPACK_IMPORTED_MODULE_5__["default"].name]).controller('WizardReservationSignUpCtrl', ["$scope", "$filter", "$timeout", "$q", "$route", "$translate", "$templateCache", "dwAlerts", "helper", "state", "user", "center", "reg", "session", "userProfileService", "wizardReservationPurchaseRedirect", function ($scope, $filter, $timeout, $q, $route, $translate, $templateCache, dwAlerts, helper, state, user, center, reg, session, userProfileService, wizardReservationPurchaseRedirect) {
  var $ctrl = this;
  var origin = "/".concat(state.getPath().split('/')[1]);
  $templateCache.put('wizard-reservation/07-sign-up/sign-up.tpl.html', _sign_up_tpl_html__WEBPACK_IMPORTED_MODULE_4___default.a);
  state.setPageTitle($translate.instant('USER_PROFILE.NEW_USER.PAGE_TITLE'));
  /**
   * Next button handler
   */

  $ctrl.next = function () {
    if (helper.pointFirstInvalid('#user')) return;
    return (reg.new ? userProfileService.registerNewUser(0, user) : $q.when()).then(function () {
      if (reg.new) {
        // Need to login under just created user
        return state.login(user.login, user.password).catch(function (err) {
          return dwAlerts.error(err, 'Failed to login under created user.');
        });
      }
    }).then(function () {
      return wizardReservationPurchaseRedirect({
        replace: true
      });
    });
  };
  /**
   * Back button handler
   */


  $ctrl.back = function () {
    return state.setPath(session.isAnonymous() ? "".concat(origin, "/sign-in") : "".concat(origin, "/reservation"));
  };
}]));

/***/ }),

/***/ "./shared/wizard-reservation/07-sign-up/sign-up.tpl.html":
/*!***************************************************************!*\
  !*** ./shared/wizard-reservation/07-sign-up/sign-up.tpl.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<h1 class=\"page-title flex\"> <span>{{state.getPageTitle()}}</span> <need-help phone=\"$resolve.center.phone\"></need-help> </h1> <div class=\"ff-grid gutter-v\"> <new-user-profile id=\"user\" user=\"$resolve.user\" reg=\"$resolve.reg\" center=\"$resolve.center\"></new-user-profile> <ff-btn-group> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" ff-click=\"$ctrl.next()\"><span translate=\"GLOBAL.BTN_NEXT\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/wizard-reservation/purchase-redirect.service.js":
/*!****************************************************************!*\
  !*** ./shared/wizard-reservation/purchase-redirect.service.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.wizardReservationPurchaseRedirect', ['session', 'deskworks.ReservationCost', 'deskworks.purchase.service']).factory('wizardReservationPurchaseRedirect', ["session", "state", "purchaseService", "ReservationCost", "dwAlerts", function (session, state, purchaseService, ReservationCost, dwAlerts) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$replace = _ref.replace,
        replace = _ref$replace === void 0 ? false : _ref$replace;

    var origin = "/".concat(state.getPath().split('/')[1]);

    if (!session.isAnonymous() && !session.isRole('nonMember')) {
      return state.setPath("".concat(origin, "/confirm"), replace); // member or admin - no payment
    }

    var centerId = state.getCurrentCenterId();
    var userId = state.getCurrentUserId();
    var unitId = state.getParam('unit');
    var start = state.getParam('start');
    var end = state.getParam('end');
    return ReservationCost.calcAsync(centerId, userId, unitId, start, end).then(function (cost) {
      if (!cost) {
        return state.setPath("".concat(origin, "/confirm"), replace);
      }

      var data = {
        reservationUnitId: unitId,
        reservationFrom: start,
        reservationTo: end,
        reservationRepeatFrequency: state.getParam('freq'),
        reservationRepeatDuration: state.getParam('duration')
      };
      return purchaseService.createPurchaseForReservation(centerId, userId, data).catch(function (err) {
        return dwAlerts.error(err, 'Failed to create purchase for reservation.');
      }).then(function (result) {
        if (result.purchasePackageId) {
          state.setParam('purchasePackageId', result.purchasePackageId);
        }

        state.setParam('purchaseId', result.id);
        return state.setPath("".concat(origin, "/purchase"), replace);
      });
    });
  };
}]));

/***/ }),

/***/ "./shared/wizard-reservation/wizard-reservation.module.js":
/*!****************************************************************!*\
  !*** ./shared/wizard-reservation/wizard-reservation.module.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wizard_reservation_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wizard-reservation.scss */ "./shared/wizard-reservation/wizard-reservation.scss");
/* harmony import */ var _wizard_reservation_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wizard_reservation_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_staff_help_staff_help_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/staff-help/staff-help.directive */ "./shared/staff-help/staff-help.directive.js");
/* harmony import */ var _02_reservation_reservation_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./02-reservation/reservation.controller */ "./shared/wizard-reservation/02-reservation/reservation.controller.js");
/* harmony import */ var _03_sign_in_sign_in_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./03-sign-in/sign-in.controller */ "./shared/wizard-reservation/03-sign-in/sign-in.controller.js");
/* harmony import */ var _04_confirm_confirm_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./04-confirm/confirm.controller */ "./shared/wizard-reservation/04-confirm/confirm.controller.js");
/* harmony import */ var _05_complete_complete_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./05-complete/complete.controller */ "./shared/wizard-reservation/05-complete/complete.controller.js");
/* harmony import */ var _06_purchase_purchase_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./06-purchase/purchase.controller */ "./shared/wizard-reservation/06-purchase/purchase.controller.js");
/* harmony import */ var _07_sign_up_sign_up_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./07-sign-up/sign-up.controller */ "./shared/wizard-reservation/07-sign-up/sign-up.controller.js");








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.wizardReservation', [shared_staff_help_staff_help_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, _02_reservation_reservation_controller__WEBPACK_IMPORTED_MODULE_2__["default"].name, _03_sign_in_sign_in_controller__WEBPACK_IMPORTED_MODULE_3__["default"].name, _04_confirm_confirm_controller__WEBPACK_IMPORTED_MODULE_4__["default"].name, _05_complete_complete_controller__WEBPACK_IMPORTED_MODULE_5__["default"].name, _06_purchase_purchase_controller__WEBPACK_IMPORTED_MODULE_6__["default"].name, _07_sign_up_sign_up_controller__WEBPACK_IMPORTED_MODULE_7__["default"].name]));

/***/ }),

/***/ "./shared/wizard-reservation/wizard-reservation.scss":
/*!***********************************************************!*\
  !*** ./shared/wizard-reservation/wizard-reservation.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ })

}]);
//# sourceMappingURL=book-it-now~floor-plans~._shared_d.js.map?_rev=40bda20f62bd35eab4f6