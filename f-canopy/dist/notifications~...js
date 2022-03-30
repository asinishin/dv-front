(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications~.."],{

/***/ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/repeat.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js-stable/instance/repeat.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/repeat */ "../node_modules/core-js-pure/stable/instance/repeat.js");

/***/ }),

/***/ "../node_modules/core-js-pure/es/instance/repeat.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/repeat.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var repeat = __webpack_require__(/*! ../string/virtual/repeat */ "../node_modules/core-js-pure/es/string/virtual/repeat.js");

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.repeat;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.repeat) ? repeat : own;
};


/***/ }),

/***/ "../node_modules/core-js-pure/es/string/virtual/repeat.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/string/virtual/repeat.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.string.repeat */ "../node_modules/core-js-pure/modules/es.string.repeat.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "../node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('String').repeat;


/***/ }),

/***/ "../node_modules/core-js-pure/internals/string-repeat.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/string-repeat.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js-pure/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js-pure/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "../node_modules/core-js-pure/modules/es.string.repeat.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.string.repeat.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js-pure/internals/export.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "../node_modules/core-js-pure/internals/string-repeat.js");

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ "../node_modules/core-js-pure/stable/instance/repeat.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/repeat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/repeat */ "../node_modules/core-js-pure/es/instance/repeat.js");

module.exports = parent;


/***/ }),

/***/ "./bundles/notifications sync recursive .*\\.tpl\\.html$":
/*!***************************************************!*\
  !*** ./bundles/notifications sync .*\.tpl\.html$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bucket-used-up-email/bucket-used-up-email.tpl.html": "./bundles/notifications/bucket-used-up-email/bucket-used-up-email.tpl.html",
	"./bulk-invoices/bulk-invoices.tpl.html": "./bundles/notifications/bulk-invoices/bulk-invoices.tpl.html",
	"./cal-sync-error-email/cal-sync-error-email.tpl.html": "./bundles/notifications/cal-sync-error-email/cal-sync-error-email.tpl.html",
	"./declined-card-email/declined-card-email.tpl.html": "./bundles/notifications/declined-card-email/declined-card-email.tpl.html",
	"./desk-tablet-template/desk-tablet-template.tpl.html": "./bundles/notifications/desk-tablet-template/desk-tablet-template.tpl.html",
	"./expired-card-email/expired-card-email.tpl.html": "./bundles/notifications/expired-card-email/expired-card-email.tpl.html",
	"./message-board-notices/message-board-notices.tpl.html": "./bundles/notifications/message-board-notices/message-board-notices.tpl.html",
	"./passes-used-up-email/passes-used-up-email.tpl.html": "./bundles/notifications/passes-used-up-email/passes-used-up-email.tpl.html",
	"./plan-passes-used-up-notice/plan-passes-used-up-notice.tpl.html": "./bundles/notifications/plan-passes-used-up-notice/plan-passes-used-up-notice.tpl.html",
	"./receipt-email/receipt-email.tpl.html": "./bundles/notifications/receipt-email/receipt-email.tpl.html",
	"./receipt-page/receipt-page.tpl.html": "./bundles/notifications/receipt-page/receipt-page.tpl.html",
	"./recurring-invoices/recurring-invoices.tpl.html": "./bundles/notifications/recurring-invoices/recurring-invoices.tpl.html",
	"./refund-notice/refund-notice.tpl.html": "./bundles/notifications/refund-notice/refund-notice.tpl.html",
	"./renewal-notice-email/renewal-notice-email.tpl.html": "./bundles/notifications/renewal-notice-email/renewal-notice-email.tpl.html",
	"./reservation-confirmation/reservation-confirmation.tpl.html": "./bundles/notifications/reservation-confirmation/reservation-confirmation.tpl.html",
	"./reservation-follow-up-survey/reservation-follow-up-survey.tpl.html": "./bundles/notifications/reservation-follow-up-survey/reservation-follow-up-survey.tpl.html",
	"./reservation-reminder/reservation-reminder.tpl.html": "./bundles/notifications/reservation-reminder/reservation-reminder.tpl.html",
	"./startup-info/startup-info.tpl.html": "./bundles/notifications/startup-info/startup-info.tpl.html",
	"./welcome-letter/welcome-letter.tpl.html": "./bundles/notifications/welcome-letter/welcome-letter.tpl.html"
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
webpackContext.id = "./bundles/notifications sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/notifications sync recursive \\..+\\/.+\\.js$":
/*!**************************************************!*\
  !*** ./bundles/notifications sync \..+\/.+\.js$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bucket-used-up-email/bucket-used-up-email.controller.js": "./bundles/notifications/bucket-used-up-email/bucket-used-up-email.controller.js",
	"./bulk-invoices/bulk-invoices.controller.js": "./bundles/notifications/bulk-invoices/bulk-invoices.controller.js",
	"./cal-sync-error-email/cal-sync-error-email.controller.js": "./bundles/notifications/cal-sync-error-email/cal-sync-error-email.controller.js",
	"./declined-card-email/declined-card-email.controller.js": "./bundles/notifications/declined-card-email/declined-card-email.controller.js",
	"./desk-tablet-template/desk-tablet-template.controller.js": "./bundles/notifications/desk-tablet-template/desk-tablet-template.controller.js",
	"./expired-card-email/expired-card-email.controller.js": "./bundles/notifications/expired-card-email/expired-card-email.controller.js",
	"./message-board-notices/message-board-notices.controller.js": "./bundles/notifications/message-board-notices/message-board-notices.controller.js",
	"./passes-used-up-email/passes-used-up-email.controller.js": "./bundles/notifications/passes-used-up-email/passes-used-up-email.controller.js",
	"./plan-passes-used-up-notice/plan-passes-used-up-notice.controller.js": "./bundles/notifications/plan-passes-used-up-notice/plan-passes-used-up-notice.controller.js",
	"./receipt-email/receipt-email.controller.js": "./bundles/notifications/receipt-email/receipt-email.controller.js",
	"./receipt-page/receipt-page.controller.js": "./bundles/notifications/receipt-page/receipt-page.controller.js",
	"./recurring-invoices/recurring-invoices.controller.js": "./bundles/notifications/recurring-invoices/recurring-invoices.controller.js",
	"./refund-notice/refund-notice.controller.js": "./bundles/notifications/refund-notice/refund-notice.controller.js",
	"./renewal-notice-email/renewal-notice-email.controller.js": "./bundles/notifications/renewal-notice-email/renewal-notice-email.controller.js",
	"./reservation-confirmation/reservation-confirmation.controller.js": "./bundles/notifications/reservation-confirmation/reservation-confirmation.controller.js",
	"./reservation-follow-up-survey/reservation-follow-up-survey.controller.js": "./bundles/notifications/reservation-follow-up-survey/reservation-follow-up-survey.controller.js",
	"./reservation-reminder/reservation-reminder.controller.js": "./bundles/notifications/reservation-reminder/reservation-reminder.controller.js",
	"./startup-info/startup-info.controller.js": "./bundles/notifications/startup-info/startup-info.controller.js",
	"./welcome-letter/welcome-letter.controller.js": "./bundles/notifications/welcome-letter/welcome-letter.controller.js"
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
webpackContext.id = "./bundles/notifications sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/notifications/bucket-used-up-email/bucket-used-up-email.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/notifications/bucket-used-up-email/bucket-used-up-email.controller.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.BucketUsedUpEmailCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('BucketUsedUpEmailCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.BUCKET_USED_UP.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{recurring-billing}}',
    _name: 'NOTIFICATIONS.SH_CODES.RECURRING_BILLING'
  }, {
    id: '{{pass-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.PASS_NAME'
  }, {
    id: '{{pass-price}}',
    _name: 'NOTIFICATIONS.SH_CODES.PASS_PRICE'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#bucketUsedUpEmail')) return;
    return Notifications.saveBucketUsedUpEmail($ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save bucket used up email template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/bucket-used-up-email/bucket-used-up-email.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/notifications/bucket-used-up-email/bucket-used-up-email.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"bucketUsedUpEmail\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/bulk-invoices/bulk-invoices.controller.js":
/*!*************************************************************************!*\
  !*** ./bundles/notifications/bulk-invoices/bulk-invoices.controller.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.BulkInvoicesTplCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('BulkInvoicesTplCtrl', ["$translate", "dwAlerts", "state", "helper", "tpl", "Notifications", "taToolbarEmail", function ($translate, dwAlerts, state, helper, tpl, Notifications, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.BULK_INVOICES.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{card-number}}',
    _name: 'NOTIFICATIONS.SH_CODES.CARD_NUMBER'
  }, {
    id: '{{center-phone}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_PHONE'
  }, {
    id: '{{two-business-days}}',
    _name: 'NOTIFICATIONS.SH_CODES.TWO_BUSINESS_DAYS'
  }, {
    id: '{{website-url}}',
    _name: 'NOTIFICATIONS.SH_CODES.WEBSITE_URL'
  }, {
    id: '{{year}}',
    _name: 'NOTIFICATIONS.SH_CODES.YEAR'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{month}}',
    _name: 'NOTIFICATIONS.SH_CODES.MONTH'
  }, {
    id: '{{invoice}}',
    _name: 'NOTIFICATIONS.SH_CODES.INVOICE'
  }, {
    id: '{{last-month}}',
    _name: 'NOTIFICATIONS.SH_CODES.LAST_MONTH'
  }, {
    id: '{{pdf-link}}',
    _name: 'NOTIFICATIONS.SH_CODES.PDF_LINK'
  }, {
    id: '{{last-month-year}}',
    _name: 'NOTIFICATIONS.SH_CODES.LAST_MONTH_YEAR'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#bulkInvoicesTpl')) return;
    return Notifications.saveBulkInvoices($ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save bulk invoices template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/bulk-invoices/bulk-invoices.tpl.html":
/*!********************************************************************!*\
  !*** ./bundles/notifications/bulk-invoices/bulk-invoices.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"bulkInvoicesTpl\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <ff-panel-header><span translate=\"NOTIFICATIONS.INVOICES.WITH_CREDIT_CARD\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.withCreditCard.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.withCreditCard.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-panel class=\"email-template-panel\"> <ff-panel-header><span translate=\"NOTIFICATIONS.INVOICES.WITHOUT_CREDIT_CARD\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.withoutCreditCard.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.withoutCreditCard.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div short-codes=\"$ctrl.shortCodes\" class=\"two-columns\"></div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/cal-sync-error-email/cal-sync-error-email.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/notifications/cal-sync-error-email/cal-sync-error-email.controller.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.CalSyncErrorEmailCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('CalSyncErrorEmailCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.CALENDAR_SYNC_ERROR.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{reservation-unit}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_UNIT'
  }, {
    id: '{{member-company}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_COMPANY'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{reservation-date}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_DATE'
  }, {
    id: '{{reservation-note}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_NOTE'
  }, {
    id: '{{reservation-start-time}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_START_TIME'
  }, {
    id: '{{error}}',
    _name: 'NOTIFICATIONS.SH_CODES.ERROR'
  }, {
    id: '{{reservation-end-time}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_END_TIME'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#calSyncErrorEmail')) return;
    return Notifications.saveCalSyncErrorEmail($ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save calendar sync error email template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/cal-sync-error-email/cal-sync-error-email.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/notifications/cal-sync-error-email/cal-sync-error-email.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"calSyncErrorEmail\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div short-codes=\"$ctrl.shortCodes\" class=\"two-columns\"></div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/declined-card-email/declined-card-email.controller.js":
/*!*************************************************************************************!*\
  !*** ./bundles/notifications/declined-card-email/declined-card-email.controller.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.DeclinedCardEmailCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('DeclinedCardEmailCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.DECLINED_CARD.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{center-phone}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_PHONE'
  }, {
    id: '{{amount}}',
    _name: 'NOTIFICATIONS.SH_CODES.AMOUNT'
  }, {
    id: '{{website-url}}',
    _name: 'NOTIFICATIONS.SH_CODES.WEBSITE_URL'
  }, {
    id: '{{card-number}}',
    _name: 'NOTIFICATIONS.SH_CODES.CARD_NUMBER'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#declinedCardEmail')) return;
    return Notifications.saveDeclinedCardEmail($ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save declined card email template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/declined-card-email/declined-card-email.tpl.html":
/*!********************************************************************************!*\
  !*** ./bundles/notifications/declined-card-email/declined-card-email.tpl.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"declinedCardEmail\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div short-codes=\"$ctrl.shortCodes\" class=\"two-columns\"></div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/desk-tablet-template/desk-tablet-template.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/notifications/desk-tablet-template/desk-tablet-template.controller.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _desk_tablet_template_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desk-tablet-template.scss */ "./bundles/notifications/desk-tablet-template/desk-tablet-template.scss");
/* harmony import */ var _desk_tablet_template_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_desk_tablet_template_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.DeskTabletTemplateCtrl', ['deskworks.notifications.service', shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_1__["default"].name]).controller('DeskTabletTemplateCtrl', ["$scope", "$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($scope, $translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.DESK_TABLET_TEMPLATE.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{access-code}}',
    _name: 'NOTIFICATIONS.SH_CODES.ACCESS_CODE_OF_THE_DAY'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#deskTabletTemplate')) return;
    return Notifications.saveDeskTabletTemplate(state.getCurrentCenterId(), $ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save dest tablet template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };

  $ctrl.toAccessCode = function () {
    return state.setPath('/access-code-of-the-day');
  };
}]));

/***/ }),

/***/ "./bundles/notifications/desk-tablet-template/desk-tablet-template.scss":
/*!******************************************************************************!*\
  !*** ./bundles/notifications/desk-tablet-template/desk-tablet-template.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/notifications/desk-tablet-template/desk-tablet-template.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/notifications/desk-tablet-template/desk-tablet-template.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"deskTabletTemplate\" ff-bulk-read-only> <h4 class=\"page-title\" ng-bind=\"state.getPageTitle()\"></h4> <div class=\"gutter-v\" style=\"max-width:1024px\"> <ff-panel> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.body\" ta-toolbar=\"{{$ctrl.toolbar}}\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"expand\" ff-click=\"$ctrl.toAccessCode()\">Desk Tablet</ff-btn> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/expired-card-email/expired-card-email.controller.js":
/*!***********************************************************************************!*\
  !*** ./bundles/notifications/expired-card-email/expired-card-email.controller.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ExpiredCardEmailCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('ExpiredCardEmailCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.EXPIRED_CARD.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{center-phone}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_PHONE'
  }, {
    id: '{{card-number}}',
    _name: 'NOTIFICATIONS.SH_CODES.CARD_NUMBER'
  }, {
    id: '{{website-url}}',
    _name: 'NOTIFICATIONS.SH_CODES.WEBSITE_URL'
  }, {
    id: '{{card-expiry}}',
    _name: 'NOTIFICATIONS.SH_CODES.CARD_EXPIRY'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#expiredCardEmail')) return;
    return Notifications.saveExpiredCardEmail($ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save expired card email template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/expired-card-email/expired-card-email.tpl.html":
/*!******************************************************************************!*\
  !*** ./bundles/notifications/expired-card-email/expired-card-email.tpl.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"expiredCardEmail\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div short-codes=\"$ctrl.shortCodes\" class=\"two-columns\"></div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/index.js":
/*!****************************************!*\
  !*** ./bundles/notifications/index.js ***!
  \****************************************/
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

  var js = importAll(__webpack_require__("./bundles/notifications sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/notifications sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/notifications/message-board-notices/message-board-notices.controller.js":
/*!*****************************************************************************************!*\
  !*** ./bundles/notifications/message-board-notices/message-board-notices.controller.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.MessageBoardNoticesTplCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_3__["default"].name, 'deskworks.notifications.service']).controller('MessageBoardNoticesTplCtrl', ["$q", "$translate", "dwAlerts", "state", "helper", "tpls", "Notifications", "taToolbarEmail", function ($q, $translate, dwAlerts, state, helper, tpls, Notifications, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.MESSAGE_BOARD.PAGE_TITLE'));
  $ctrl.tpls = tpls;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{member-name}}',
    _name: 'SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{messages}}',
    _name: 'SH_CODES.MESSAGES'
  }, {
    id: '{{center-name}}',
    _name: 'SH_CODES.CENTER_NAME'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    var _context;

    if (helper.pointFirstInvalid('#messageBoardNoticesTpl')) return;
    return $q.all(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.tpls).call(_context, function (tpl) {
      return Notifications.saveMessageBoardEmailTemplate(tpl.$$id, tpl).catch(function (err) {
        return dwAlerts.error(err, 'Failed to save message board email template.');
      });
    })).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/message-board-notices/message-board-notices.tpl.html":
/*!************************************************************************************!*\
  !*** ./bundles/notifications/message-board-notices/message-board-notices.tpl.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"messageBoardNoticesTpl\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:654px\" ng-repeat=\"tpl in $ctrl.tpls\"> <ff-panel-header><span translate=\"{{tpl.$$name}}\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"tpl.body\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/passes-used-up-email/passes-used-up-email.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/notifications/passes-used-up-email/passes-used-up-email.controller.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PassesUsedUpEmailCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('PassesUsedUpEmailCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.PASSES_USED_UP.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{recurring-billing}}',
    _name: 'NOTIFICATIONS.SH_CODES.RECURRING_BILLING'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#passesUsedUpEmail')) return;
    return Notifications.savePassesUsedUpEmail($ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save passes used up email template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/passes-used-up-email/passes-used-up-email.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/notifications/passes-used-up-email/passes-used-up-email.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"passesUsedUpEmail\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/plan-passes-used-up-notice/plan-passes-used-up-notice.controller.js":
/*!***************************************************************************************************!*\
  !*** ./bundles/notifications/plan-passes-used-up-notice/plan-passes-used-up-notice.controller.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PlanPassesUsedUpNoticeCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('PlanPassesUsedUpNoticeCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.PLAN_PASSES_USED_UP.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'SH_CODES.CENTER_NAME'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'SH_CODES.FIRST_NAME'
  }, {
    id: '{{last-name}}',
    _name: 'SH_CODES.LAST_NAME'
  }, {
    id: '{{recurring-billing}}',
    _name: 'NOTIFICATIONS.SH_CODES.RECURRING_BILLING'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#planPassesUsedUpNotice')) return;
    return Notifications.saveEmailTemplate('plan-passes-used-up', $ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save plan passes used up notice template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/plan-passes-used-up-notice/plan-passes-used-up-notice.tpl.html":
/*!**********************************************************************************************!*\
  !*** ./bundles/notifications/plan-passes-used-up-notice/plan-passes-used-up-notice.tpl.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"planPassesUsedUpNotice\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <ff-static> <label> <ff-checkbox ff-model=\"$ctrl.tpl.enabled\">{{'NOTIFICATIONS.ENABLED' | translate}}</ff-checkbox> </label> <ff-static class=\"ff-no-frame\"><ff-hint>{{'NOTIFICATIONS.PLAN_PASSES_USED_UP.HINT' | translate}}</ff-hint></ff-static> </ff-static> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/receipt-email/receipt-email.controller.js":
/*!*************************************************************************!*\
  !*** ./bundles/notifications/receipt-email/receipt-email.controller.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReceiptEmailTplCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_3__["default"].name, 'deskworks.notifications.service']).controller('ReceiptEmailTplCtrl', ["$q", "$translate", "dwAlerts", "state", "helper", "tpls", "Notifications", "taToolbarEmail", function ($q, $translate, dwAlerts, state, helper, tpls, Notifications, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.RECEIPT.PAGE_TITLE'));
  $ctrl.tpls = tpls;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{center-street}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_STREET'
  }, {
    id: '{{member-company}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_COMPANY'
  }, {
    id: '{{center-city}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_CITY'
  }, {
    id: '{{member-street}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_STREET'
  }, {
    id: '{{center-state}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_STATE'
  }, {
    id: '{{member-city}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_CITY'
  }, {
    id: '{{center-zip}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_ZIP'
  }, {
    id: '{{member-state}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_STATE'
  }, {
    id: '{{center-email}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_EMAIL'
  }, {
    id: '{{member-zip}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_ZIP'
  }, {
    id: '{{center-phone}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_PHONE'
  }, {
    id: '{{member-country}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_COUNTRY'
  }, {
    id: '{{website-url}}',
    _name: 'NOTIFICATIONS.SH_CODES.WEBSITE_URL'
  }, {
    id: '{{member-email}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_EMAIL'
  }, {
    id: '{{order-id}}',
    _name: 'NOTIFICATIONS.SH_CODES.ORDER_ID'
  }, {
    id: '{{user-id}}',
    _name: 'NOTIFICATIONS.SH_CODES.USER_ID'
  }, {
    id: '{{transaction-id}}',
    _name: 'NOTIFICATIONS.SH_CODES.TRANSACTION_ID'
  }, {
    id: '{{invoice}}',
    _name: 'NOTIFICATIONS.SH_CODES.INVOICE'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    var _context;

    if (helper.pointFirstInvalid('#receiptEmailTpl')) return;
    return $q.all(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.tpls).call(_context, function (tpl) {
      return Notifications.saveEmailTemplate(tpl.$$id, tpl).catch(function (err) {
        return dwAlerts.error(err, 'Failed to save receipt email template.');
      });
    })).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/receipt-email/receipt-email.tpl.html":
/*!********************************************************************!*\
  !*** ./bundles/notifications/receipt-email/receipt-email.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"receiptEmailTpl\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel ng-repeat=\"tpl in $ctrl.tpls\" class=\"email-template-panel\"> <ff-panel-header> <span translate=\"{{tpl.$$name}}\"></span> </ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div short-codes=\"$ctrl.shortCodes\" class=\"two-columns\"></div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/receipt-page/receipt-page.controller.js":
/*!***********************************************************************!*\
  !*** ./bundles/notifications/receipt-page/receipt-page.controller.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReceiptPageTplCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, 'deskworks.notifications.service']).controller('ReceiptPageTplCtrl', ["$q", "$translate", "dwAlerts", "state", "helper", "tpl", "Notifications", function ($q, $translate, dwAlerts, state, helper, tpl, Notifications) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.RECEIPT_PAGE.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#receiptPageTpl')) return;
    return Notifications.saveEmailTemplate('receipt-page', tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save receipt page template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/receipt-page/receipt-page.tpl.html":
/*!******************************************************************!*\
  !*** ./bundles/notifications/receipt-page/receipt-page.tpl.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"receiptPageTpl\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"GLOBAL.TITLE\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'GLOBAL.TITLE' | translate}}\"></ff-text> </label> <ff-row> <ff-textarea ff-model=\"$ctrl.tpl.content\" placeholder=\"Extra text under title\"></ff-textarea> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/recurring-invoices/recurring-invoices.controller.js":
/*!***********************************************************************************!*\
  !*** ./bundles/notifications/recurring-invoices/recurring-invoices.controller.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.notifications.recurringInvoices', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('RecurringInvoicesEmailCtrl', ["$translate", "dwAlerts", "state", "helper", "tpl", "Notifications", "taToolbarEmail", function ($translate, dwAlerts, state, helper, tpl, Notifications, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.RECURRING_INVOICES.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{card-number}}',
    _name: 'NOTIFICATIONS.SH_CODES.CARD_NUMBER'
  }, {
    id: '{{center-phone}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_PHONE'
  }, {
    id: '{{due-date}}',
    _name: 'NOTIFICATIONS.SH_CODES.DUE_DATE'
  }, {
    id: '{{website-url}}',
    _name: 'NOTIFICATIONS.SH_CODES.WEBSITE_URL'
  }, {
    id: '{{year}}',
    _name: 'NOTIFICATIONS.SH_CODES.YEAR'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{month}}',
    _name: 'NOTIFICATIONS.SH_CODES.MONTH'
  }, {
    id: '{{invoice}}',
    _name: 'NOTIFICATIONS.SH_CODES.INVOICE'
  }, {
    id: '{{last-month}}',
    _name: 'NOTIFICATIONS.SH_CODES.LAST_MONTH'
  }, {
    id: '{{pdf-link}}',
    _name: 'NOTIFICATIONS.SH_CODES.PDF_LINK'
  }, {
    id: '{{last-month-year}}',
    _name: 'NOTIFICATIONS.SH_CODES.LAST_MONTH_YEAR'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#recurringInvoicesTpl')) return;
    return Notifications.saveRecurringInvoices($ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save recurring invoices template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/recurring-invoices/recurring-invoices.tpl.html":
/*!******************************************************************************!*\
  !*** ./bundles/notifications/recurring-invoices/recurring-invoices.tpl.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"recurringInvoicesTpl\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <ff-panel-header><span translate=\"NOTIFICATIONS.INVOICES.WITH_CREDIT_CARD\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.withCreditCard.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.withCreditCard.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-panel class=\"email-template-panel\"> <ff-panel-header><span translate=\"NOTIFICATIONS.INVOICES.WITHOUT_CREDIT_CARD\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.withoutCreditCard.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.withoutCreditCard.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div short-codes=\"$ctrl.shortCodes\" class=\"two-columns\"></div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/refund-notice/refund-notice.controller.js":
/*!*************************************************************************!*\
  !*** ./bundles/notifications/refund-notice/refund-notice.controller.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.RefundNoticeCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('RefundNoticeCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.REFUND_NOTICE.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{center-phone}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_PHONE'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{last-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.LAST_NAME'
  }, {
    id: '{{amount}}',
    _name: 'SH_CODES.REFUND_AMOUNT'
  }, {
    id: '{{order-id}}',
    _name: 'SH_CODES.ORDER_NO'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#refundNotice')) return;
    return Notifications.saveEmailTemplate('refund-notice', $ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save refund notice settings.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/refund-notice/refund-notice.tpl.html":
/*!********************************************************************!*\
  !*** ./bundles/notifications/refund-notice/refund-notice.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"refundNotice\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/renewal-notice-email/renewal-notice-email.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/notifications/renewal-notice-email/renewal-notice-email.controller.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.RenewalNoticeEmailCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('RenewalNoticeEmailCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.RENEWAL_NOTICE.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{last-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.LAST_NAME'
  }, {
    id: '{{renewal-notice-date}}',
    _name: 'NOTIFICATIONS.SH_CODES.RENEWAL_NOTICE_DATE'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#renewalNoticeEmail')) return;
    return Notifications.saveEmailTemplate('renewal-notice', $ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save renewal notice email template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/renewal-notice-email/renewal-notice-email.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/notifications/renewal-notice-email/renewal-notice-email.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"renewalNoticeEmail\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/reservation-confirmation/reservation-confirmation.controller.js":
/*!***********************************************************************************************!*\
  !*** ./bundles/notifications/reservation-confirmation/reservation-confirmation.controller.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_repeat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/repeat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/repeat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_repeat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_repeat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");
/* harmony import */ var shared_attachments_attachments_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/attachments/attachments.directive */ "./shared/attachments/attachments.directive.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationConfirmationEmailCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_attachments_attachments_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_3__["default"].name, 'deskworks.notifications.service']).controller('ReservationConfirmationEmailCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.RESERVATION_CONFIRMATION.PAGE_TITLE'));
  $ctrl.tabs = [{
    id: 'confirm',
    title: $translate.instant('NOTIFICATIONS.RESERVATION_CONFIRMATION.RESERVATION'),
    tpl: tpl.confirm
  }, {
    id: 'cancel',
    title: $translate.instant('NOTIFICATIONS.RESERVATION_CONFIRMATION.CANCELLATION'),
    tpl: tpl.cancel
  }, {
    id: 'repeat',
    title: $translate.instant('NOTIFICATIONS.RESERVATION_CONFIRMATION.REPEATING'),
    tpl: _babel_runtime_corejs3_core_js_stable_instance_repeat__WEBPACK_IMPORTED_MODULE_0___default()(tpl)
  }];
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.attachments = $ctrl.tpl.attachments || [];
  delete $ctrl.tpl.attachments; // delete to exclude from POST

  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{center-phone}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_PHONE'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{reservation-unit}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_UNIT'
  }, {
    id: '{{repeat-frequency}}',
    _name: 'NOTIFICATIONS.SH_CODES.REPEAT_FREQUENCY'
  }, {
    id: '{{access-code}}',
    _name: 'NOTIFICATIONS.SH_CODES.ACCESS_CODE'
  }, {
    id: '{{reservation-start-time}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_START_TIME'
  }, {
    id: '{{reservation-end-time}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_END_TIME'
  }, {
    id: '{{reservation-date}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_DATE'
  }, {
    id: '{{reservation-start-date}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_START_DATE'
  }, {
    id: '{{reservation-end-date}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_END_DATE'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#reservationConfirmationEmail')) return;
    return Notifications.saveReservationConfirmation($ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save reservation confirmation template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
  /**
   * Attach/detach file
   */


  $ctrl.attacher = function (att) {
    return Notifications.attachReservationConfirmation(att);
  };

  $ctrl.detacher = function (att) {
    return Notifications.detachReservationConfirmation(att.id);
  };
}]));

/***/ }),

/***/ "./bundles/notifications/reservation-confirmation/reservation-confirmation.tpl.html":
/*!******************************************************************************************!*\
  !*** ./bundles/notifications/reservation-confirmation/reservation-confirmation.tpl.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"reservationConfirmationEmail\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel ng-repeat=\"tab in $ctrl.tabs\" class=\"email-template-panel\"> <ff-panel-header><span>{{tab.title}}</span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"tab.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"tab.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid gutter-v gutter-h\" style=\"margin-bottom:0\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> <div flex=\"{md: '0 0 50%'}\" attachments=\"$ctrl.attachments\" attacher=\"$ctrl.attacher\" detacher=\"$ctrl.detacher\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/reservation-follow-up-survey/reservation-follow-up-survey.controller.js":
/*!*******************************************************************************************************!*\
  !*** ./bundles/notifications/reservation-follow-up-survey/reservation-follow-up-survey.controller.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationFollowUpSurveyCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('ReservationFollowUpSurveyCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.RESERVATION_FOLLOW_UP_SURVEY.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'SH_CODES.CENTER_NAME'
  }, {
    id: '{{center-phone}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_PHONE'
  }, {
    id: '{{center-address}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_ADDRESS'
  }, {
    id: '{{user-name}}',
    _name: 'SH_CODES.USER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'SH_CODES.USER_FIRST_NAME'
  }, {
    id: '{{last-name}}',
    _name: 'SH_CODES.USER_LAST_NAME'
  }, {
    id: '{{reservation-unit}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_UNIT'
  }, {
    id: '{{reservation-date}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_DATE'
  }, {
    id: '{{reservation-start-time}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_START_TIME'
  }, {
    id: '{{reservation-end-time}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_END_TIME'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#reservationFollowUpSurvey')) return;
    return Notifications.save('reservation-follow-up-survey', $ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save reservation follow up survey settings.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/reservation-follow-up-survey/reservation-follow-up-survey.tpl.html":
/*!**************************************************************************************************!*\
  !*** ./bundles/notifications/reservation-follow-up-survey/reservation-follow-up-survey.tpl.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"reservationFollowUpSurvey\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <ff-static> <label> <ff-checkbox ff-model=\"$ctrl.tpl.enabled\">{{'NOTIFICATIONS.ENABLED' | translate}}</ff-checkbox> </label> <ff-static class=\"ff-no-frame\"><ff-hint>{{'NOTIFICATIONS.RESERVATION_FOLLOW_UP_SURVEY.HINT' | translate}}</ff-hint></ff-static> </ff-static> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/reservation-reminder/reservation-reminder.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/notifications/reservation-reminder/reservation-reminder.controller.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");
/* harmony import */ var shared_attachments_attachments_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/attachments/attachments.directive */ "./shared/attachments/attachments.directive.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationReminderEmailCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_attachments_attachments_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_3__["default"].name, 'deskworks.notifications.service']).controller('ReservationReminderEmailCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.RESERVATION_REMINDER.PAGE_TITLE'));
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.reminders = tpl.reminders || [];
  $ctrl.attachments = tpl.attachments || [];
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{reservation-unit}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_UNIT'
  }, {
    id: '{{reservation-date}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_DATE'
  }, {
    id: '{{reservation-start-time}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_START_TIME'
  }, {
    id: '{{reservation-end-time}}',
    _name: 'NOTIFICATIONS.SH_CODES.RESERVATION_END_TIME'
  }, {
    id: '{{access-code}}',
    _name: 'NOTIFICATIONS.SH_CODES.ACCESS_CODE'
  }];
  /**
   * Add reminder
   */

  $ctrl.add = function () {
    var reminder = {
      subject: 'Reservation Reminder',
      content: "<p>Dear {{member-name}},</p>\n<br>\n<p>You have a reservation tomorrow at {{reservation-start-time}} at {{center-name}} for {{reservation-unit}}.</p>\n<p>Let us know if you need anything. We look forward to seeing you!</p>\n<br>\n<p>Sincerely,<br>\n{{center-name}} Team</p>\n"
    };

    if ($ctrl.reminders.length) {
      reminder.subject = $ctrl.reminders[0].subject;
      reminder.content = $ctrl.reminders[0].content;
    } else {
      reminder.hoursBefore = 23;
    }

    $ctrl.reminders.push(reminder);
    $ctrl.form.$setDirty();
  };
  /**
   * Delete reminder
   */


  $ctrl.delete = function (index) {
    var _context;

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.reminders).call(_context, index, 1);

    $ctrl.form.$setDirty();
  };
  /**
   * Save settings
   */


  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#reservationReminderEmail')) return;
    return Notifications.saveEmailTemplate('reservation-reminder', {
      reminders: $ctrl.reminders
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save reservation reminder template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
  /**
   * Attach/detach file
   */


  $ctrl.attacher = function (att) {
    return Notifications.attachEmailTemplate('reservation-reminder', att);
  };

  $ctrl.detacher = function (att) {
    return Notifications.detachEmailTemplate('reservation-reminder', att.id);
  };
}]));

/***/ }),

/***/ "./bundles/notifications/reservation-reminder/reservation-reminder.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/notifications/reservation-reminder/reservation-reminder.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"reservationReminderEmail\" ff-bulk-read-only novalidate> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel ng-if=\"!$ctrl.reminders.length\"> <span translate=\"GLOBAL.NONE\"></span> </ff-panel> <ff-panel class=\"email-template-panel\" ng-repeat=\"reminder in $ctrl.reminders\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 190px\"><span translate=\"NOTIFICATIONS.RESERVATION_REMINDER.SEND\"></span></ff-label> <ff-number flex=\"0 0 40px\" ff-model=\"reminder.hoursBefore\" ff-required=\"true\" ff-gte=\"1\" ff-validate-alert=\"{{'NOTIFICATIONS.RESERVATION_REMINDER.HOURS' | translate}}\"></ff-number> <ff-label flex=\"1 1 150px\"><req translate=\"NOTIFICATIONS.RESERVATION_REMINDER.HOURS_BEFORE\"></req></ff-label> <ff-btn-group flex=\"none\" class=\"buttons-row\"> <ff-btn sense=\"delete\" size=\"xs\" ff-click=\"$ctrl.delete($index)\"></ff-btn> </ff-btn-group> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"reminder.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"reminder.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"add\" type=\"submit\" ff-click=\"$ctrl.add()\"> <span translate=\"NOTIFICATIONS.RESERVATION_REMINDER.BTN_ADD\"></span> </ff-btn> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid gutter-v gutter-h\" style=\"margin-bottom:0\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> <div flex=\"{md: '0 0 50%'}\" attachments=\"$ctrl.attachments\" attacher=\"$ctrl.attacher\" detacher=\"$ctrl.detacher\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/startup-info/startup-info.controller.js":
/*!***********************************************************************!*\
  !*** ./bundles/notifications/startup-info/startup-info.controller.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.StartupInfoCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('StartupInfoCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.STARTUP_INFO.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_NAME'
  }, {
    id: '{{center-phone}}',
    _name: 'NOTIFICATIONS.SH_CODES.CENTER_PHONE'
  }, {
    id: '{{member-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.FIRST_NAME'
  }, {
    id: '{{last-name}}',
    _name: 'NOTIFICATIONS.SH_CODES.LAST_NAME'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#startupInfo')) return;
    return Notifications.saveEmailTemplate('startup-info', $ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save startup info settings.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/notifications/startup-info/startup-info.tpl.html":
/*!******************************************************************!*\
  !*** ./bundles/notifications/startup-info/startup-info.tpl.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"startupInfo\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <ff-static> <label> <ff-checkbox ff-model=\"$ctrl.tpl.enabled\">{{'NOTIFICATIONS.ENABLED' | translate}}</ff-checkbox> </label> <ff-static class=\"ff-no-frame\"><ff-hint>{{'NOTIFICATIONS.STARTUP_INFO.HINT' | translate}}</ff-hint></ff-static> </ff-static> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/notifications/welcome-letter/welcome-letter.controller.js":
/*!***************************************************************************!*\
  !*** ./bundles/notifications/welcome-letter/welcome-letter.controller.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");
/* harmony import */ var shared_attachments_attachments_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/attachments/attachments.directive */ "./shared/attachments/attachments.directive.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WelcomeLetterCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_attachments_attachments_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.notifications.service']).controller('WelcomeLetterCtrl', ["$translate", "dwAlerts", "state", "helper", "Notifications", "tpl", "taToolbarEmail", function ($translate, dwAlerts, state, helper, Notifications, tpl, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('NOTIFICATIONS.WELCOME_LETTER.PAGE_TITLE'));
  $ctrl.tpl = tpl;
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.attachments = $ctrl.tpl.attachments || [];
  delete $ctrl.tpl.attachments; // delete to exclude from POST

  $ctrl.shortCodes = [{
    id: '{{member-name}}',
    _name: 'SH_CODES.FULL_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'SH_CODES.FIRST_NAME'
  }, {
    id: '{{last-name}}',
    _name: 'SH_CODES.LAST_NAME'
  }, {
    id: '{{company}}',
    _name: 'SH_CODES.COMPANY'
  }, {
    id: '{{occupation}}',
    _name: 'SH_CODES.OCCUPATION'
  }, {
    id: '{{email}}',
    _name: 'SH_CODES.EMAIL'
  }, {
    id: '{{phone}}',
    _name: 'SH_CODES.PHONE'
  }, {
    id: '{{login}}',
    _name: 'SH_CODES.LOGIN'
  }, {
    id: '{{lead-source}}',
    _name: 'SH_CODES.LEAD_SOURCE'
  }, {
    id: '{{start-date}}',
    _name: 'SH_CODES.START_DATE'
  }, {
    id: '{{renewal-date}}',
    _name: 'SH_CODES.RENEWAL_DATE'
  }, {
    id: '{{renewal-term}}',
    _name: 'SH_CODES.RENEWAL_TERM'
  }, {
    id: '{{product}}',
    _name: 'SH_CODES.PRODUCT'
  }, {
    id: '{{price}}',
    _name: 'SH_CODES.PRICE'
  }, {
    id: '{{discount}}',
    _name: 'SH_CODES.DISCOUNT'
  }, {
    id: '{{net}}',
    _name: 'SH_CODES.NET'
  }, {
    id: '{{company-name}}',
    _name: 'SH_CODES.COMPANY_NAME'
  }];
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#welcomeLetter')) return;
    return Notifications.saveWelcomeLetter($ctrl.tpl).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save welcome letter template.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
  /**
   * Attach/detach file
   */


  $ctrl.attacher = function (att) {
    return Notifications.attachWelcomeLetter(att);
  };

  $ctrl.detacher = function (att) {
    return Notifications.detachWelcomeLetter(att.id);
  };
}]));

/***/ }),

/***/ "./bundles/notifications/welcome-letter/welcome-letter.tpl.html":
/*!**********************************************************************!*\
  !*** ./bundles/notifications/welcome-letter/welcome-letter.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"welcomeLetter\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"email-template-panel\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"NOTIFICATIONS.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.tpl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'NOTIFICATIONS.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.tpl.content\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> <div class=\"ff-grid gutter-v gutter-h\" style=\"margin-bottom:0\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> <div flex=\"{md: '0 0 50%'}\" attachments=\"$ctrl.attachments\" attacher=\"$ctrl.attacher\" detacher=\"$ctrl.detacher\"></div> </div> </div> </form> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=notifications~...js.map?_rev=8da530a4012ecef1de37