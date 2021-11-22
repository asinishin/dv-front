(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communications~._bundles_communications "],{

/***/ "./bundles/communications sync recursive .*\\.tpl\\.html$":
/*!****************************************************!*\
  !*** ./bundles/communications sync .*\.tpl\.html$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./email-all-members/email-all-members.tpl.html": "./bundles/communications/email-all-members/email-all-members.tpl.html",
	"./email-site-members/email-site-members.tpl.html": "./bundles/communications/email-site-members/email-site-members.tpl.html",
	"./message-board/message-board.tpl.html": "./bundles/communications/message-board/message-board.tpl.html",
	"./splash-page/splash-page.tpl.html": "./bundles/communications/splash-page/splash-page.tpl.html"
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
webpackContext.id = "./bundles/communications sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/communications sync recursive \\..+\\/.+\\.js$":
/*!***************************************************!*\
  !*** ./bundles/communications sync \..+\/.+\.js$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./email-all-members/email-all-members.controller.js": "./bundles/communications/email-all-members/email-all-members.controller.js",
	"./email-site-members/email-site-members.controller.js": "./bundles/communications/email-site-members/email-site-members.controller.js",
	"./message-board/message-board.controller.js": "./bundles/communications/message-board/message-board.controller.js",
	"./splash-page/splash-page.controller.js": "./bundles/communications/splash-page/splash-page.controller.js"
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
webpackContext.id = "./bundles/communications sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/communications/email-all-members/email-all-members.controller.js":
/*!**********************************************************************************!*\
  !*** ./bundles/communications/email-all-members/email-all-members.controller.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");
/* harmony import */ var shared_attachments_attachments_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/attachments/attachments.directive */ "./shared/attachments/attachments.directive.js");








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.communications.emailAllMembers', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_attachments_attachments_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_6__["default"].name, 'deskworks.emailAllMembers.service']).controller('EmailAllMembersCtrl', ["$translate", "dwAlerts", "state", "helper", "emailAllMembers", "taToolbarEmail", function ($translate, dwAlerts, state, helper, emailAllMembers, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('EMAIL_MEMBERS.ALL.PAGE_TITLE'));
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.attachments = [];
  $ctrl.shortCodes = [{
    id: '{{member-name}}',
    _name: 'SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'SH_CODES.FIRST_NAME'
  }, {
    id: '{{last-name}}',
    _name: 'SH_CODES.LAST_NAME'
  }, {
    id: '{{login}}',
    _name: 'SH_CODES.LOGIN'
  }, {
    id: '{{company-name}}',
    _name: 'SH_CODES.COMPANY_NAME'
  }];
  /**
   * Load template
   */

  $ctrl.fetchingTpl = true;
  emailAllMembers.getTpl().catch(function (err) {
    return dwAlerts.error(err, 'Failed to get template.');
  }).then(function (result) {
    if (result.subject !== 'Default subject') $ctrl.subject = result.subject;
    $ctrl.body = result.content === 'Default body' ? $translate.instant('EMAIL_MEMBERS.MESSAGE.ALL.DEFAULT') : result.content;
  }).finally(function () {
    return $ctrl.fetchingTpl = false;
  });
  /**
   * Email All Members handler
   */

  $ctrl.send = function (test) {
    if (helper.pointFirstInvalid('#emailAllMembers')) return;
    var data = {
      includeNonMembers: $ctrl.includeNonMembers,
      subject: $ctrl.subject,
      body: $ctrl.body,
      attachments: $ctrl.attachments
    };
    return emailAllMembers.send(data, test).catch(function (err) {
      return dwAlerts.error(err, 'Failed to email all members.');
    }).then(function () {
      dwAlerts.info(test ? $translate.instant('EMAIL_MEMBERS.TEST_SUCCESS') : $translate.instant('EMAIL_MEMBERS.SUCCESS')); // if (!test) $ctrl.form.$setPristine();
    });
  };
  /**
   * View Email List handler
   */


  $ctrl.viewRecipients = function () {
    return emailAllMembers.query($ctrl.includeNonMembers).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query recipients.');
    }).then(function (result) {
      $ctrl.recipients = result;
      $ctrl.recipients.forEach(function (rcpt) {
        rcpt.fullName = helper.join([rcpt.firstName, rcpt.lastName], ' ');
      });
    });
  };
  /**
   * Save as Template
   */


  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#emailAllMembers')) return;
    var data = {
      subject: $ctrl.subject,
      content: $ctrl.body
    };
    return emailAllMembers.saveTpl(data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save template.');
    }).then(function () {
      return $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/communications/email-all-members/email-all-members.tpl.html":
/*!*****************************************************************************!*\
  !*** ./bundles/communications/email-all-members/email-all-members.tpl.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"emailAllMembers\" ng-hide=\"$ctrl.recipients\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:654px\"> <ff-panel-header><span translate=\"EMAIL_MEMBERS.OPTIONS.HEADER\"></span></ff-panel-header> <label> <ff-checkbox ff-model=\"$ctrl.includeNonMembers\"> <span translate=\"EMAIL_MEMBERS.OPTIONS.INCLUDE_NON_MEMBERS\"></span> </ff-checkbox> </label> </ff-panel> <ff-panel class=\"email-template-panel\"> <ff-spin ng-if=\"$ctrl.fetchingTpl\"></ff-spin> <ff-panel-header><span translate=\"EMAIL_MEMBERS.MESSAGE.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"EMAIL_MEMBERS.MESSAGE.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'EMAIL_MEMBERS.MESSAGE.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.body\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"send\" ff-click=\"$ctrl.send(true)\" title=\"{{'EMAIL_MEMBERS.BTN_TEST.HINT' | translate}}\"> <span translate=\"EMAIL_MEMBERS.BTN_TEST\"></span> </ff-btn> <ff-btn sense=\"send\" ff-click=\"$ctrl.send()\" title=\"{{'EMAIL_MEMBERS.BTN_SEND.HINT' | translate}}\"> <span translate=\"EMAIL_MEMBERS.BTN_SEND\"></span> </ff-btn> <ff-btn sense=\"search\" ff-click=\"$ctrl.viewRecipients()\"><span translate=\"EMAIL_MEMBERS.BTN_VIEW_RECIPIENTS\"></span></ff-btn> <ff-btn sense=\"save\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"><span translate=\"EMAIL_MEMBERS.BTN_SAVE_TEMPLATE\"></span></ff-btn> </ff-btn-group> <div class=\"ff-grid gutter-v gutter-h\" style=\"margin-bottom:0\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> <div flex=\"{md: '0 0 50%'}\" attachments=\"$ctrl.attachments\" form=\"$ctrl.form\"></div> </div> </div> </form> <div ng-if=\"$ctrl.recipients\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-btn-group ng-if=\"$ctrl.recipients.length > 10\"> <ff-btn sense=\"back\" ff-click=\"$ctrl.recipients = null\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> <ff-panel> <ff-panel-header> <span translate=\"EMAIL_MEMBERS.RECIPIENTS.HEADER\" translate-values=\"{ count: $ctrl.recipients.length }\"></span> </ff-panel-header> <ff-header ng-show=\"$ctrl.recipients.length > 0\"> <ff-row> <cell><span translate=\"EMAIL_MEMBERS.RECIPIENTS.COMPANY\"></span></cell> <cell><span translate=\"EMAIL_MEMBERS.RECIPIENTS.NAME\"></span></cell> <cell><span translate=\"EMAIL_MEMBERS.RECIPIENTS.EMAIL\"></span></cell> </ff-row> </ff-header> <ff-row ng-repeat=\"rcpt in $ctrl.recipients\"> <ff-static ff-bind=\"::rcpt.company\"></ff-static> <ff-static ff-bind=\"::rcpt.fullName\"></ff-static> <ff-static><a href=\"mailto:{{::rcpt.email}}\" target=\"_blank\" rel=\"noopener\" ng-bind=\"::rcpt.email\"></a></ff-static> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"back\" ff-click=\"$ctrl.recipients = null\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/communications/email-site-members/email-site-members.controller.js":
/*!************************************************************************************!*\
  !*** ./bundles/communications/email-site-members/email-site-members.controller.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/short-codes/short-codes.directive */ "./shared/short-codes/short-codes.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");
/* harmony import */ var shared_attachments_attachments_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/attachments/attachments.directive */ "./shared/attachments/attachments.directive.js");










/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.communications.emailSiteMembers', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_short_codes_short_codes_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_attachments_attachments_directive__WEBPACK_IMPORTED_MODULE_9__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, 'deskworks.emailSiteMembers.service']).controller('EmailSiteMembersCtrl', ["$translate", "dwAlerts", "state", "helper", "emailSiteMembers", "membershipCategories", "center", "taToolbarEmail", function ($translate, dwAlerts, state, helper, emailSiteMembers, membershipCategories, center, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('EMAIL_MEMBERS.SITE.PAGE_TITLE', {
    centerName: center.name
  }));
  $ctrl.toolbar = taToolbarEmail;
  $ctrl.membershipCategories = membershipCategories;
  $ctrl.membershipCategory = $ctrl.membershipCategories[0];
  $ctrl.attachments = [];
  $ctrl.shortCodes = [{
    id: '{{center-name}}',
    _name: 'SH_CODES.CENTER_NAME'
  }, {
    id: '{{member-name}}',
    _name: 'SH_CODES.MEMBER_NAME'
  }, {
    id: '{{first-name}}',
    _name: 'SH_CODES.FIRST_NAME'
  }, {
    id: '{{last-name}}',
    _name: 'SH_CODES.LAST_NAME'
  }, {
    id: '{{login}}',
    _name: 'SH_CODES.LOGIN'
  }, {
    id: '{{company-name}}',
    _name: 'SH_CODES.COMPANY_NAME'
  }];
  /**
   * Load template
   */

  $ctrl.fetchingTpl = true;
  emailSiteMembers.getTpl().catch(function (err) {
    return dwAlerts.error(err, 'Failed to get template.');
  }).then(function (result) {
    if (result.subject !== 'Default subject') $ctrl.subject = result.subject;
    if (result.content !== 'Default body') $ctrl.body = result.content;
    $ctrl.body = result.content === 'Default body' ? $translate.instant('EMAIL_MEMBERS.MESSAGE.SITE.DEFAULT') : result.content;
  }).finally(function () {
    return $ctrl.fetchingTpl = false;
  });
  /**
   * Email All Members handler
   */

  $ctrl.send = function (test) {
    if (helper.pointFirstInvalid('#emailSiteMembers')) return;
    var data = {
      membershipTypeIds: $ctrl.getSelectedMembershipIds(),
      subject: $ctrl.subject,
      body: $ctrl.body,
      attachments: $ctrl.attachments,
      checkedInOnly: $ctrl.checkedInOnly
    };
    return emailSiteMembers.send(state.getCurrentCenterId(), data, test).catch(function (err) {
      return dwAlerts.error(err, 'Failed to email site members.');
    }).then(function () {
      dwAlerts.info(test ? $translate.instant('EMAIL_MEMBERS.TEST_SUCCESS') : $translate.instant('EMAIL_MEMBERS.SUCCESS')); // if (!test) $ctrl.form.$setPristine();
    });
  };
  /**
   * View Email List handler
   */


  $ctrl.viewRecipients = function () {
    return emailSiteMembers.query(state.getCurrentCenterId(), $ctrl.getSelectedMembershipIds(), $ctrl.checkedInOnly).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query recipients.');
    }).then(function (result) {
      $ctrl.recipients = result;
      $ctrl.recipients.forEach(function (rcpt) {
        rcpt.fullName = helper.join([rcpt.firstName, rcpt.lastName], ' ');
      });
    });
  };
  /**
   * Save as Template
   */


  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#emailSiteMembers')) return;
    var data = {
      subject: $ctrl.subject,
      content: $ctrl.body
    };
    return emailSiteMembers.saveTpl(data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save template.');
    }).then(function () {
      return $ctrl.form.$setPristine();
    });
  };
  /**
   * Collect ids of selected membership categories
   */


  $ctrl.getSelectedMembershipIds = function () {
    var _context, _context2;

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = $ctrl.membershipCategories).call(_context2, function (item) {
      return item.include;
    })).call(_context, function (item) {
      return item.id;
    });
  };
}]));

/***/ }),

/***/ "./bundles/communications/email-site-members/email-site-members.tpl.html":
/*!*******************************************************************************!*\
  !*** ./bundles/communications/email-site-members/email-site-members.tpl.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"emailSiteMembers\" ng-hide=\"$ctrl.recipients\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:654px\"> <ff-panel-header><span translate=\"EMAIL_MEMBERS.OPTIONS.HEADER\"></span></ff-panel-header> <div class=\"ff-grid gutter-v-half\"> <div> <ff-row> <label flex=\"none\"><ff-include-all flex=\"0 0 30px\" items=\"$ctrl.membershipCategories\" default=\"true\"></ff-include-all></label> </ff-row> <ff-header> <ff-row> <span flex=\"0 0 32px\" class=\"ff-center\" title=\"{{'GLOBAL.INCLUDE' | translate}}\"><ff-icon sense=\"check\"></ff-icon></span> <cell><span translate=\"EMAIL_MEMBERS.OPTIONS.MEMBERSHIP_CATEGORY\"></span></cell> </ff-row> </ff-header> <label class=\"ff-row\" ng-repeat=\"membType in $ctrl.membershipCategories\"> <ff-static flex=\"0 0 32px\" class=\"ff-center\"><ff-checkbox ff-model=\"membType.include\"></ff-checkbox></ff-static> <ff-static>{{::membType.name}}</ff-static> </label> </div> <ff-static class=\"ff-no-frame\"><ff-static> <label> <ff-checkbox ff-model=\"$ctrl.checkedInOnly\"> <span translate=\"EMAIL_MEMBERS.OPTIONS.ONLY_CHECKED_IN\"></span> </ff-checkbox> </label> </ff-static></ff-static> </div> </ff-panel> <ff-panel class=\"email-template-panel\"> <ff-spin ng-if=\"$ctrl.fetchingTpl\"></ff-spin> <ff-panel-header><span translate=\"EMAIL_MEMBERS.MESSAGE.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"EMAIL_MEMBERS.MESSAGE.SUBJECT\"></req></ff-label> <ff-text ff-model=\"$ctrl.subject\" ff-required=\"true\" ff-validate-alert=\"{{'EMAIL_MEMBERS.MESSAGE.SUBJECT' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"$ctrl.body\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-email\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"send\" ff-click=\"$ctrl.send(true)\" title=\"{{'EMAIL_MEMBERS.BTN_TEST.HINT' | translate}}\"> <span translate=\"EMAIL_MEMBERS.BTN_TEST\"></span> </ff-btn> <ff-btn sense=\"send\" ff-click=\"$ctrl.send()\" title=\"{{'EMAIL_MEMBERS.BTN_SEND.HINT' | translate}}\"> <span translate=\"EMAIL_MEMBERS.BTN_SEND\"></span> </ff-btn> <ff-btn sense=\"search\" ff-click=\"$ctrl.viewRecipients()\"><span translate=\"EMAIL_MEMBERS.BTN_VIEW_RECIPIENTS\"></span></ff-btn> <ff-btn sense=\"save\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"><span translate=\"EMAIL_MEMBERS.BTN_SAVE_TEMPLATE\"></span></ff-btn> </ff-btn-group> <div class=\"ff-grid gutter-v gutter-h\" style=\"margin-bottom:0\"> <div flex=\"{md: '0 0 50%'}\" short-codes=\"$ctrl.shortCodes\"></div> <div flex=\"{md: '0 0 50%'}\" attachments=\"$ctrl.attachments\" form=\"$ctrl.form\"></div> </div> </div> </form> <div ng-if=\"$ctrl.recipients\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-btn-group ng-if=\"$ctrl.recipients.length > 10\"> <ff-btn sense=\"back\" ff-click=\"$ctrl.recipients = null\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> <ff-panel> <ff-panel-header> <span translate=\"EMAIL_MEMBERS.RECIPIENTS.HEADER\" translate-values=\"{ count: $ctrl.recipients.length }\"></span> </ff-panel-header> <ff-header ng-show=\"$ctrl.recipients.length > 0\"> <ff-row> <cell><span translate=\"EMAIL_MEMBERS.RECIPIENTS.COMPANY\"></span></cell> <cell><span translate=\"EMAIL_MEMBERS.RECIPIENTS.NAME\"></span></cell> <cell><span translate=\"EMAIL_MEMBERS.RECIPIENTS.EMAIL\"></span></cell> </ff-row> </ff-header> <ff-row ng-repeat=\"rcpt in $ctrl.recipients\"> <ff-static ff-bind=\"::rcpt.company\"></ff-static> <ff-static ff-bind=\"::rcpt.fullName\"></ff-static> <ff-static><a href=\"mailto:{{::rcpt.email}}\" target=\"_blank\" rel=\"noopener\" ng-bind=\"::rcpt.email\"></a></ff-static> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"back\" ff-click=\"$ctrl.recipients = null\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/communications/index.js":
/*!*****************************************!*\
  !*** ./bundles/communications/index.js ***!
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





var index = ['$injector', function index($injector) {
  // JS
  var importAll = function importAll(r) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(r).call(r)).call(_context, r);
  };

  var js = importAll(__webpack_require__("./bundles/communications sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/communications sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/communications/message-board/message-board.controller.js":
/*!**************************************************************************!*\
  !*** ./bundles/communications/message-board/message-board.controller.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _message_board_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message-board.scss */ "./bundles/communications/message-board/message-board.scss");
/* harmony import */ var _message_board_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_message_board_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.MessageBoardCtrl', ['NATS', 'infinite-scroll', 'deskworks.MessageBoard', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name]).controller('MessageBoardCtrl', ["$scope", "$translate", "$window", "$timeout", "dwAlerts", "state", "helper", "MessageBoard", "NATS", function ($scope, $translate, $window, $timeout, dwAlerts, state, helper, MessageBoard, NATS) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('MESSAGE_BOARD.PAGE_TITLE'));
  $ctrl.messageMaxLength = 1000;
  $ctrl.message = {};
  $ctrl.messages = [];
  $ctrl.params = {
    centerId: state.getCurrentCenterId(),
    offset: 0,
    limit: 100
  };
  var subs = [];
  $timeout(function onInit() {
    $ctrl.nats = NATS.connect();
    $ctrl.nats.on('error', function (err) {
      console.warn('NATS error:', err);
    });
    $scope.$on('$destroy', function () {
      subs.forEach(function (sub) {
        $ctrl.nats.unsubscribe(sub);
      });
      $ctrl.nats.close();
    });
    helper.focus('.message-board .msg-post textarea');
    $ctrl.fetch(); // workaround: ngInfiniteScroll may not run initial fetch in some cases
  });
  /**
   * Create message event
   */

  function onCreate(msg) {
    msg = MessageBoard.deserialize(msg);

    var message = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(helper).call(helper, $ctrl.messages, msg.id);

    if (message) return angular.extend(message, msg);
    $ctrl.messages.unshift(msg);
  }
  /**
   * Update message event
   */


  function onUpdate(msg) {
    var message = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(helper).call(helper, $ctrl.messages, msg.id);

    if (message) return angular.extend(message, msg);
  }
  /**
   * Delete message event
   */


  function onDelete(msg) {
    var _context;

    var idx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3___default()(helper).call(helper, $ctrl.messages, msg.id);

    if (idx >= 0) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4___default()(_context = $ctrl.messages).call(_context, idx, 1);
  }
  /**
   * Fetch
   */


  $ctrl.fetch = function () {
    if ($ctrl.eof || $ctrl.fetching) return $ctrl.fetching;
    $ctrl.fetching = MessageBoard.query($ctrl.params).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query messages.');
    }).finally(function () {
      $ctrl.fetching = null;
    }).then(function (messages) {
      var _context2;

      $ctrl.messages = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = $ctrl.messages).call(_context2, messages);
      $ctrl.params.offset = $ctrl.messages.length;
      $ctrl.eof = messages.length < $ctrl.params.limit;

      if (!subs.length) {
        subs.push($ctrl.nats.subscribe('API.:siteId.centers.:centerId.message-board.messages.create', onCreate));
        subs.push($ctrl.nats.subscribe('API.:siteId.centers.:centerId.message-board.messages.update', onUpdate));
        subs.push($ctrl.nats.subscribe('API.:siteId.centers.:centerId.message-board.messages.delete', onDelete));
      }
    });
  };
  /**
   * Post message
   */


  $ctrl.post = function () {
    if ($ctrl.posting || !$ctrl.message.text) return;
    $ctrl.message.centerId = $ctrl.message.centerId || state.getCurrentCenterId();
    $ctrl.posting = true;
    MessageBoard.save($ctrl.message) // don't return promise to avoid double spinner
    .catch(function (err) {
      return dwAlerts.error(err, 'Failed to save message.');
    }).then(function () {
      $ctrl.message = {};
    }).finally(function () {
      $ctrl.posting = false;
    });
  };
  /**
   * Post message by enter
   */


  $ctrl.keypress = function (event) {
    if (event.which === 13 && !event.shiftKey) {
      event.preventDefault();
      $ctrl.post();
    }
  };
  /**
   * Edit message
   */


  $ctrl.edit = function (msg) {
    $ctrl.message = angular.copy(msg);
    helper.focus('.msg-post textarea');
  };
  /**
   * Delete message
   */


  $ctrl.delete = function (msg) {
    if (!$window.confirm($translate.instant('MESSAGE_BOARD.MESSAGES.CONFIRM_DELETE'))) return;
    if ($ctrl.message.id === msg.id) $ctrl.message = {};
    return MessageBoard.delete(msg.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete message.');
    });
  };
}]));

/***/ }),

/***/ "./bundles/communications/message-board/message-board.scss":
/*!*****************************************************************!*\
  !*** ./bundles/communications/message-board/message-board.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/communications/message-board/message-board.tpl.html":
/*!*********************************************************************!*\
  !*** ./bundles/communications/message-board/message-board.tpl.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"message-board\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-panel class=\"ff-bmargin\"> <ff-col class=\"msg-sticky\"> <ff-header class=\"msg-post-header\"> <span translate=\"MESSAGE_BOARD.POST_MESSAGE.HEADER\" ng-if=\"!$ctrl.message.id\"></span> <span ng-if=\"$ctrl.message.id\"> <span translate=\"MESSAGE_BOARD.EDIT_MESSAGE.HEADER\"></span> <strong>{{$ctrl.message.author.fullName || 'anonymous'}}</strong> at <span nice-time=\"$ctrl.message.createdAt\"></span> on <span>{{$ctrl.message.createdAt | date: 'mediumDate'}}</span> </span> </ff-header> <form name=\"$ctrl.form\" class=\"ff-row msg-post\"> <ff-textarea name=\"text\" ff-model=\"$ctrl.message.text\" placeholder=\"{{'MESSAGE_BOARD.POST_MESSAGE.PLACEHOLDER' | translate}}\" counter=\"{{$ctrl.message.text.length}}/{{::$ctrl.messageMaxLength}}\" ng-keypress=\"$ctrl.keypress($event)\"></ff-textarea> <div ff-dim=\"$ctrl.posting\" class=\"msg-buttons\" flex=\"none\"> <ff-btn type=\"submit\" sense=\"ok\" size=\"xs\" ff-click=\"$ctrl.post()\" title=\"{{'MESSAGE_BOARD.POST_MESSAGE.BTN_POST' | translate}}\" ff-disabled=\"!$ctrl.message.text\"></ff-btn> <ff-btn sense=\"cancel\" size=\"xs\" title=\"{{'GLOBAL.BTN_CANCEL' | translate}}\" ff-click=\"$ctrl.message = {}\" ng-if=\"$ctrl.message.id\"></ff-btn> </div> </form> <ff-header class=\"msg-messages-header\" translate=\"MESSAGE_BOARD.MESSAGES.HEADER\"></ff-header> </ff-col> <div class=\"msg-scroller\" infinite-scroll=\"$ctrl.fetch()\" infinite-scroll-distance=\"2\" infinite-scroll-container=\"'.snap-content-scroller'\"> <ff-row ng-repeat=\"msg in $ctrl.messages\" class=\"msg-container animate-collapse\" ng-class=\"{ active: msg.id === $ctrl.message.id }\"> <div class=\"msg-ava\"> <ff-img ff-src=\"{{::msg.author.photo}}\" ng-if=\"::msg.author.photo\" ff-alt=\"{{::msg.author.fullName || 'anonymous'}}\"></ff-img> <i class=\"fa fa-user\" ng-if=\"::!msg.author.photo\"></i> </div> <div> <div> <div class=\"msg-meta\"> <span class=\"msg-name\">{{::msg.author.fullName || 'anonymous'}}</span> <span class=\"msg-time\" nice-time=\"::msg.createdAt\"></span> <span class=\"msg-date\">{{::msg.createdAt | date: 'mediumDate'}}</span> </div> <div class=\"msg-body\">{{msg.text}}</div> </div> </div> <ff-btn-group class=\"floating-toolbar\" ng-if=\"::state.isLoggedAdmin()\"> <ff-row> <ff-btn sense=\"edit\" size=\"xs\" class=\"ff-btn-icon\" ff-click=\"$ctrl.edit(msg)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> <ff-btn sense=\"delete\" size=\"xs\" class=\"ff-btn-icon\" ff-click=\"$ctrl.delete(msg)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-row> </ff-btn-group> </ff-row> <div class=\"ff-spin ff-spin-placeholder\" ng-if=\"$ctrl.fetching\"></div> </div> <ff-label ng-if=\"!$ctrl.messages.length && !$ctrl.fetching\" class=\"ff-no-frame\"> <span translate=\"GLOBAL.NONE\"></span> </ff-label> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/communications/splash-page/splash-page.controller.js":
/*!**********************************************************************!*\
  !*** ./bundles/communications/splash-page/splash-page.controller.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ff-richtext/ta-toolbar-email.service */ "./shared/ff-richtext/ta-toolbar-email.service.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SplashPageCtrl', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_ff_richtext_ta_toolbar_email_service__WEBPACK_IMPORTED_MODULE_1__["default"].name, 'deskworks.SplashPage']).controller('SplashPageCtrl', ["$translate", "dwAlerts", "state", "helper", "center", "splashPage", "SplashPage", "taToolbarEmail", function ($translate, dwAlerts, state, helper, center, splashPage, SplashPage, taToolbarEmail) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('SPLASH_PAGE.PAGE_TITLE', {
    centerName: center.name
  }));
  $ctrl.sp = splashPage;
  $ctrl.toolbar = taToolbarEmail;

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#splashPage')) return;
    return SplashPage.save(state.getCurrentCenterId(), $ctrl.sp).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save splash page settings.');
    }).then(function () {
      $ctrl.form.$setPristine();
    });
  };
}]));

/***/ }),

/***/ "./bundles/communications/splash-page/splash-page.tpl.html":
/*!*****************************************************************!*\
  !*** ./bundles/communications/splash-page/splash-page.tpl.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"splashPage\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:654px\"> <ff-row style=\"margin-bottom:1rem\"> <label flex=\"none\"> <ff-checkbox name=\"enabled\" ff-model=\"$ctrl.sp.enabled\"> <span translate=\"SPLASH_PAGE.ENABLED\"></span> </ff-checkbox> </label> <ff-hint flex=\"0 0 15px\" style=\"align-self:center;margin-left:auto\"> <span translate=\"SPLASH_PAGE.HINT\"></span> </ff-hint> </ff-row> <ff-row> <ff-richtext ff-model=\"$ctrl.sp.body\" ta-toolbar=\"{{$ctrl.toolbar}}\" class=\"ta-html\"></ff-richtext> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=communications~._bundles_communications .js.map?_rev=9a1fc63a906927e1ceef