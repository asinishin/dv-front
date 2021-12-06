(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setup~._b"],{

/***/ "./bundles/setup sync recursive .*\\.tpl\\.html$":
/*!*******************************************!*\
  !*** ./bundles/setup sync .*\.tpl\.html$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./api-settings/api-settings.tpl.html": "./bundles/setup/api-settings/api-settings.tpl.html",
	"./banks/bank-edit.tpl.html": "./bundles/setup/banks/bank-edit.tpl.html",
	"./banks/banks.tpl.html": "./bundles/setup/banks/banks.tpl.html",
	"./bar-upload-settings/bar-upload-settings.tpl.html": "./bundles/setup/bar-upload-settings/bar-upload-settings.tpl.html",
	"./bundles/bundles.tpl.html": "./bundles/setup/bundles/bundles.tpl.html",
	"./center/center-edit.tpl.html": "./bundles/setup/center/center-edit.tpl.html",
	"./center/center-list.tpl.html": "./bundles/setup/center/center-list.tpl.html",
	"./integrations-setup/integrations-setup.tpl.html": "./bundles/setup/integrations-setup/integrations-setup.tpl.html",
	"./owners-regions/owners-regions.tpl.html": "./bundles/setup/owners-regions/owners-regions.tpl.html",
	"./reservation-fields/reservation-field-edit.tpl.html": "./bundles/setup/reservation-fields/reservation-field-edit.tpl.html",
	"./reservation-fields/reservation-fields.tpl.html": "./bundles/setup/reservation-fields/reservation-fields.tpl.html",
	"./settings/settings.tpl.html": "./bundles/setup/settings/settings.tpl.html",
	"./system-email/system-email-edit.tpl.html": "./bundles/setup/system-email/system-email-edit.tpl.html",
	"./system-email/system-email-list.tpl.html": "./bundles/setup/system-email/system-email-list.tpl.html",
	"./task/task-edit.tpl.html": "./bundles/setup/task/task-edit.tpl.html",
	"./task/task-list.tpl.html": "./bundles/setup/task/task-list.tpl.html",
	"./user-fields/user-fields.tpl.html": "./bundles/setup/user-fields/user-fields.tpl.html"
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
webpackContext.id = "./bundles/setup sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/setup sync recursive \\..+\\/.+\\.js$":
/*!******************************************!*\
  !*** ./bundles/setup sync \..+\/.+\.js$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./api-settings/api-settings.controller.js": "./bundles/setup/api-settings/api-settings.controller.js",
	"./banks/bank-edit.controller.js": "./bundles/setup/banks/bank-edit.controller.js",
	"./banks/banks.controller.js": "./bundles/setup/banks/banks.controller.js",
	"./bar-upload-settings/bar-upload-settings.controller.js": "./bundles/setup/bar-upload-settings/bar-upload-settings.controller.js",
	"./bundles/bundles.controller.js": "./bundles/setup/bundles/bundles.controller.js",
	"./center/center-edit.controller.js": "./bundles/setup/center/center-edit.controller.js",
	"./center/center-list.controller.js": "./bundles/setup/center/center-list.controller.js",
	"./integrations-setup/integrations-setup.controller.js": "./bundles/setup/integrations-setup/integrations-setup.controller.js",
	"./owners-regions/owners-regions.controller.js": "./bundles/setup/owners-regions/owners-regions.controller.js",
	"./reservation-fields/reservation-field-edit.controller.js": "./bundles/setup/reservation-fields/reservation-field-edit.controller.js",
	"./reservation-fields/reservation-field-types.service.js": "./bundles/setup/reservation-fields/reservation-field-types.service.js",
	"./reservation-fields/reservation-fields.controller.js": "./bundles/setup/reservation-fields/reservation-fields.controller.js",
	"./settings/settings.controller.js": "./bundles/setup/settings/settings.controller.js",
	"./system-email/system-email-edit.controller.js": "./bundles/setup/system-email/system-email-edit.controller.js",
	"./system-email/system-email-list.controller.js": "./bundles/setup/system-email/system-email-list.controller.js",
	"./task/task-edit.controller.js": "./bundles/setup/task/task-edit.controller.js",
	"./task/task-list.controller.js": "./bundles/setup/task/task-list.controller.js",
	"./user-fields/user-field-types.service.js": "./bundles/setup/user-fields/user-field-types.service.js",
	"./user-fields/user-fields.controller.js": "./bundles/setup/user-fields/user-fields.controller.js"
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
webpackContext.id = "./bundles/setup sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/setup/api-settings/api-settings.controller.js":
/*!***************************************************************!*\
  !*** ./bundles/setup/api-settings/api-settings.controller.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ApiSettingsCtrl', ['debounce', 'deskworks.allowedHost.service']).controller('ApiSettingsCtrl', ["$scope", "$translate", "$window", "dwAlerts", "state", "helper", "debounce", "allowedHosts", "allowedHostService", function ($scope, $translate, $window, dwAlerts, state, helper, debounce, allowedHosts, allowedHostService) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('API_SETTINGS.PAGE_TITLE'));
  $ctrl.allowedHosts = allowedHosts;
  /**
   * Save handler
   */

  $ctrl.save = debounce(save, 1000);

  function save(allowedHost, form, index) {
    if (form.$invalid) return;
    allowedHost.$$spin = true;
    return allowedHostService.save(allowedHost).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save allowed host.');
    }).finally(function () {
      allowedHost.$$spin = false;
    });
  }
  /**
   * New handler
   */


  $ctrl.new = function () {
    $ctrl.allowedHosts.push({
      isActive: true
    });
  };
  /**
   * Delete LeadSource handler
   */


  $ctrl.delete = function (allowedHost, index) {
    if (allowedHost.id) {
      // existing allowed host
      if (!$window.confirm($translate.instant('API_SETTINGS.ALLOWED_HOSTS.CONFIRM_DELETE'))) return;
      allowedHost.$$spin = true;
      return allowedHostService.delete(allowedHost.id).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete allowed host.');
      }).then(function () {
        var _context;

        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.allowedHosts).call(_context, index, 1);
      }).finally(function () {
        allowedHost.$$spin = false;
      });
    } else {
      var _context2;

      // new allowed host
      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = $ctrl.allowedHosts).call(_context2, index, 1);
    }
  };
}]));

/***/ }),

/***/ "./bundles/setup/api-settings/api-settings.tpl.html":
/*!**********************************************************!*\
  !*** ./bundles/setup/api-settings/api-settings.tpl.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"lead-source-list\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:815px\"> <ff-panel-header> <span translate=\"API_SETTINGS.ALLOWED_HOSTS.HEADER\"></span> <ff-hint><span translate=\"API_SETTINGS.ALLOWED_HOSTS.HINT\"></span></ff-hint> </ff-panel-header> <ff-header> <ff-row> <cell flex=\"0 0 60px\" class=\"ff-center\"><span translate=\"API_SETTINGS.ALLOWED_HOSTS.ACTIVE\"></span></cell> <cell><req translate=\"API_SETTINGS.ALLOWED_HOSTS.URL\"></req></cell> </ff-row> </ff-header> <form name=\"form\" ng-repeat=\"host in $ctrl.allowedHosts\" novalidate> <ff-row ff-dim=\"host.$$spin\"> <ff-checkbox flex=\"0 0 60px\" ff-model=\"host.isActive\" class=\"ff-center ff-control\" ff-change=\"$ctrl.save(host, form, $index)\"></ff-checkbox> <ff-text ff-model=\"host.hostUrl\" ff-required=\"true\" placeholder=\"https://thesatellite.satellitedeskworks.com\" ff-validate-alert=\"{{'API_SETTINGS.ALLOWED_HOSTS.URL' | translate}}\" ff-change=\"$ctrl.save(host, form, $index)\"></ff-text> <ff-btn sense=\"remove\" size=\"xs\" flex=\"none\" class=\"buttons-row\" ff-click=\"$ctrl.delete(host, $index)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-row> </form> <ff-btn-group class=\"ff-section-buttons\"> <ff-btn sense=\"new\" size=\"sm\" ff-click=\"$ctrl.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </ff-panel> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/banks/bank-edit.controller.js":
/*!*****************************************************!*\
  !*** ./bundles/setup/banks/bank-edit.controller.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SetupBankEditCtrl', ['deskworks.bank.service', 'deskworks.routeHelper', 'deskworks.optsTimezone']).controller('SetupBankEditCtrl', ["$scope", "$window", "$translate", "dwAlerts", "state", "helper", "bank", "bankService", "optsTimezone", function ($scope, $window, $translate, dwAlerts, state, helper, bank, bankService, optsTimezone) {
  var $ctrl = this;
  state.setPageTitle($translate.instant(bank.id === 'new' ? 'BANKS.NEW.PAGE_TITLE' : 'BANKS.EDIT.PAGE_TITLE'));
  $ctrl.bank = bank;
  $ctrl.optsTimezone = optsTimezone;

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#bankEdit')) return;
    return bankService.save($ctrl.bank).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save bank');
    }).then(function () {
      return state.setPath('/banks');
    });
  };

  $ctrl.delete = function () {
    if ($window.confirm($translate.instant('BANKS.CONFIRM_DELETE'))) {
      return bankService.delete($ctrl.bank.id).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete bank');
      }).then(function () {
        return state.setPath('/banks');
      });
    }
  };

  $ctrl.back = state.back;
}]));

/***/ }),

/***/ "./bundles/setup/banks/bank-edit.tpl.html":
/*!************************************************!*\
  !*** ./bundles/setup/banks/bank-edit.tpl.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"bankEdit\" novalidate ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:815px\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 200px\"><req translate=\"BANKS.NAME\"></req></ff-label> <ff-text flex=\"1 1 290px\" name=\"name\" ff-model=\"$ctrl.bank.name\" ff-required=\"true\" ff-validate-alert=\"{{'BANKS.NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 200px\"><req translate=\"BANKS.TIMEZONE\"></req></ff-label> <ff-select flex=\"1 1 290px\" name=\"timezone\" ff-model=\"$ctrl.bank.timezone\" ff-options=\"tz.id as tz.name for tz in $ctrl.optsTimezone\" ff-required=\"true\" ff-validate-alert=\"{{'BANKS.TIMEZONE' | translate}}\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 200px\"><req translate=\"BANKS.CC_CUT_OFF_TIME\"></req></ff-label> <ff-time flex=\"1 1 290px\" name=\"creditCardCutOffTime\" ff-model=\"$ctrl.bank.creditCardCutOffTime\" ff-required=\"true\" ff-validate-alert=\"{{'BANKS.CC_CUT_OFF_TIME' | translate}}\"></ff-time> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 200px\"><span translate=\"BANKS.NOTES\"></span></ff-label> <ff-text flex=\"1 1 290px\" name=\"notes\" ff-model=\"$ctrl.bank.notes\"></ff-text> </label> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"delete\" ff-click=\"$ctrl.delete()\" ng-if=\"$ctrl.bank.id !== 'new'\"> <span translate=\"GLOBAL.BTN_DELETE\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/banks/banks.controller.js":
/*!*************************************************!*\
  !*** ./bundles/setup/banks/banks.controller.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SetupBanksCtrl', ['deskworks.SetupBankEditCtrl', 'deskworks.bank.service', 'deskworks.routeHelper', 'deskworks.optsTimezone', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name]).controller('SetupBanksCtrl', ["$scope", "$translate", "state", "helper", "banks", "optsTimezone", function ($scope, $translate, state, helper, banks, optsTimezone) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('BANKS.PAGE_TITLE'));
  $ctrl.banks = banks;
  $ctrl.banks.forEach(function (bank) {
    bank.timezone = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsTimezone, bank.timezone) || {}).name || bank.timezone;
  });
  /**
   * Edit Bank handler
   */

  $ctrl.edit = function (bank) {
    return state.setPath('/banks/' + bank.id);
  };
  /**
   * New Bank handler
   */


  $ctrl.new = function () {
    return state.setPath('/banks/new');
  };
}]));

/***/ }),

/***/ "./bundles/setup/banks/banks.tpl.html":
/*!********************************************!*\
  !*** ./bundles/setup/banks/banks.tpl.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"banks\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel> <span ng-if=\"!$ctrl.banks.length\" translate=\"BANKS.LIST.EMPTY\"></span> <ff-header ng-show=\"$ctrl.banks.length > 0\"> <ff-row> <cell flex=\"1 1 25%\"><span translate=\"BANKS.NAME\"></span></cell> <cell flex=\"1 1 25%\"><span translate=\"BANKS.TIMEZONE\"></span></cell> <cell flex=\"1 1 25%\" class=\"ff-center\"><span translate=\"BANKS.CC_CUT_OFF_TIME\"></span></cell> <cell flex=\"1 1 25%\" class=\"show-sm\"><span translate=\"BANKS.NOTES\"></span></cell> <ff-btn size=\"xs\" class=\"buttons-row zero-height\"></ff-btn> </ff-row> </ff-header> <ff-row ng-repeat=\"bank in $ctrl.banks\"> <ff-static flex=\"1 1 25%\" ff-bind=\"bank.name\"></ff-static> <ff-static flex=\"1 1 25%\" ff-bind=\"bank.timezone\"></ff-static> <ff-static flex=\"1 1 25%\" class=\"ff-center\"><span nice-time=\"bank.creditCardCutOffTime\"></span></ff-static> <ff-static flex=\"1 1 25%\" ff-bind=\"bank.notes\" class=\"show-sm\"></ff-static> <ff-btn sense=\"edit\" size=\"xs\" flex=\"none\" class=\"buttons-row\" ff-click=\"$ctrl.edit(bank)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"$ctrl.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/bar-upload-settings/bar-upload-settings.controller.js":
/*!*****************************************************************************!*\
  !*** ./bundles/setup/bar-upload-settings/bar-upload-settings.controller.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.BarUploadSettingsCtrl', ['deskworks.state', 'deskworks.setup.service']).controller('BarUploadSettingsCtrl', ["$scope", "$translate", "dwAlerts", "state", "helper", "setupService", "settings", function ($scope, $translate, dwAlerts, state, helper, setupService, settings) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('BAR_UPLOAD_SETTINGS.PAGE_TITLE'));
  $ctrl.settings = settings;
  $ctrl.settings.centerId = state.getCurrentCenterId();
  /**
   * Save settings
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#setupBarUploadSettings')) {
      return;
    }

    return setupService.updateBarUploadSettings($ctrl.settings).then(function (result) {
      $ctrl.form.$setPristine();
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save bar upload settings.');
    });
  };
}]));

/***/ }),

/***/ "./bundles/setup/bar-upload-settings/bar-upload-settings.tpl.html":
/*!************************************************************************!*\
  !*** ./bundles/setup/bar-upload-settings/bar-upload-settings.tpl.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"setupBarUploadSettings\" novalidate ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <flex-form style=\"max-width:640px\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 220px\"><req translate=\"BAR_UPLOAD_SETTINGS.PRODUCT\"></req></ff-label> <ff-select flex=\"1 1 370px\" name=\"product\" ff-model=\"$ctrl.settings.product\" ff-required=\"true\" ff-options=\"product.name for product in $ctrl.settings.options.serviceProducts\" ff-validate-alert=\"{{'BAR_UPLOAD_SETTINGS.PRODUCT' | translate}}\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 220px\"><req translate=\"BAR_UPLOAD_SETTINGS.MEMBER_NAME\"></req></ff-label> <ff-text flex=\"1 1 370px\" name=\"colMemberName\" ff-model=\"$ctrl.settings.colMemberName\" ff-required=\"true\" ff-validate-alert=\"{{'BAR_UPLOAD_SETTINGS.MEMBER_NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 220px\"><req translate=\"BAR_UPLOAD_SETTINGS.CHARGE_AMOUNT\"></req></ff-label> <ff-text flex=\"1 1 370px\" name=\"colChargeAmount\" ff-model=\"$ctrl.settings.colChargeAmount\" ff-required=\"true\" ff-validate-alert=\"{{'BAR_UPLOAD_SETTINGS.CHARGE_AMOUNT' | translate}}\"></ff-text> </label> </flex-form> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/bundles/bundles.controller.js":
/*!*****************************************************!*\
  !*** ./bundles/setup/bundles/bundles.controller.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.BundlesCtrl', ['autoSave', 'deskworks.bundlesConfig']).controller('BundlesCtrl', ["$scope", "state", "helper", "dwAlerts", "bundlesConfig", "autoSave", function ($scope, state, helper, dwAlerts, bundlesConfig, autoSave) {
  var $ctrl = this;
  state.setPageTitle('Bundles Configuration');
  $ctrl.bundles = bundlesConfig.getOptionalBundles();
  bundlesConfig.get().catch(function (err) {
    return dwAlerts.error(err, 'Failed to get bundles config');
  }).then(function (config) {
    $ctrl.config = config;
  });
  $ctrl.save = autoSave.wrap(saveFunc);

  function saveFunc() {
    $ctrl.saving = true;
    return bundlesConfig.save(helper.purify($ctrl.config)).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save bundles config.');
    }).finally(function () {
      $ctrl.saving = false;
    });
  }
}]));

/***/ }),

/***/ "./bundles/setup/bundles/bundles.tpl.html":
/*!************************************************!*\
  !*** ./bundles/setup/bundles/bundles.tpl.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-panel style=\"max-width:815px\" ff-dim=\"!$ctrl.config\" class=\"ff-bmargin\"> <ff-header> <ff-row> <cell flex=\"0 0 36px\" class=\"ff-center\" ff-dim=\"$ctrl.saving\"><ff-icon sense=\"checkMark\"></ff-icon></cell> <cell>Bundle</cell> </ff-row> </ff-header> <label class=\"ff-row\" ng-repeat=\"bundle in $ctrl.bundles\"> <ff-static flex=\"0 0 36px\" class=\"ff-center\"> <ff-checkbox name=\"enable\" ff-model=\"$ctrl.config[bundle.id]\" ff-change=\"$ctrl.save()\"></ff-checkbox> </ff-static> <ff-static>{{::bundle.name}}</ff-static> </label> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/center/center-edit.controller.js":
/*!********************************************************!*\
  !*** ./bundles/setup/center/center-edit.controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_reservation_rules_reservation_rules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/reservation-rules/reservation-rules.component */ "./shared/reservation-rules/reservation-rules.component.js");
/* harmony import */ var shared_dw_controls_dw_address_dw_address_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/dw-controls/dw-address/dw-address.directive */ "./shared/dw-controls/dw-address/dw-address.directive.js");
/* harmony import */ var shared_dw_controls_dw_phone_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/dw-controls/dw-phone.directive */ "./shared/dw-controls/dw-phone.directive.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.CenterEditCtrl', ['deskworks.center.service', 'deskworks.optsTimezone', 'deskworks.Owner', 'deskworks.Region', 'deskworks.NetCheckInSettings', 'deskworks.setup.optsFreeAccessLength', shared_reservation_rules_reservation_rules_component__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_dw_controls_dw_address_dw_address_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_dw_controls_dw_phone_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name]).controller('CenterEditCtrl', ["$scope", "$translate", "$window", "$timeout", "dwAlerts", "state", "helper", "center", "settings", "Owner", "Region", "centerService", "optsTimezone", "optsFreeAccessLength", "NetCheckInSettings", function ($scope, $translate, $window, $timeout, dwAlerts, state, helper, center, settings, Owner, Region, centerService, optsTimezone, optsFreeAccessLength, NetCheckInSettings) {
  var vm = this;
  state.setPageTitle($translate.instant(center.id ? 'CENTERS.EDIT.PAGE_TITLE' : 'CENTERS.NEW.PAGE_TITLE'));
  vm.center = center;
  vm.banks = center.options.banks;
  vm.optsTimezone = optsTimezone;
  vm.optsFreeAccessLength = optsFreeAccessLength;
  var isNew = !vm.center.id || vm.center.id === 'new';

  if (settings.isFranchise) {
    vm.ownerRegionReadOnly = state.getLoggedUser().role !== 'master';
    Owner.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query owners.');
    }).then(function (owners) {
      vm.owners = owners;
      vm.owners.unshift({
        id: null,
        name: $translate.instant('GLOBAL.NONE')
      });
    });
    Region.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query regions.');
    }).then(function (regions) {
      vm.regions = regions;
      vm.regions.unshift({
        id: null,
        name: $translate.instant('GLOBAL.NONE')
      });
    });
  }

  if (isNew) {
    vm.netCheckInSettings = {
      freeAccessLength: 120
    };
  } else {
    NetCheckInSettings.get(vm.center.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get net check-in settings.');
    }).then(function (settings) {
      vm.netCheckInSettings = settings;
    });
  }
  /**
   * Save Center handler
   */


  vm.save = function () {
    if (helper.pointFirstInvalid('#centerEdit')) return;
    return centerService.save(vm.center).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save center.');
    }).then(function (result) {
      return NetCheckInSettings.save(vm.center.id, vm.netCheckInSettings).catch(function (err) {
        dwAlerts.error(err, 'Failed to save net check-in settings.');
      }) // skip errors
      .then(function () {
        return result;
      });
    }).then(function (result) {
      $scope.$emit('CENTERS:REFRESH');
      if (isNew) return state.setPath('/centers/' + result.id);

      if (vm.nexkeySave) {
        return vm.nexkeySave().catch(angular.noop);
      }
    }).then(function () {
      return centerService.get(vm.center.id).catch(function (err) {
        return dwAlerts.error(err, 'Failed to get center.');
      }).then(function (center) {
        vm.center = center;
        vm.form.$setPristine();
      });
    });
  };
  /**
   * Remove Center handler
   */


  vm.remove = function () {
    if (!confirm($translate.instant('CENTERS.CONFIRM_DELETE'))) return;
    return centerService.deleteCenter(vm.center.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete center.');
    }).then(function (result) {
      $scope.$emit('CENTERS:REFRESH');
      return state.setPath('/centers');
    });
  };
  /**
   * Back button handler
   */


  vm.back = function () {
    return state.setPath('/centers');
  };
  /**
   * Upload Photo handler
   * @param $files - files to upload
   * @param $invalidFiles - files rejected by ngfPattern directive
   */


  vm.uploadPhoto = function ($files, $invalidFiles) {
    if ($invalidFiles && $invalidFiles.length > 0) return dwAlerts.error($translate.instant('CENTERS.PHOTO.INVALID_FORMAT'));

    if ($files && $files.length > 0) {
      vm.spinUpload = true;
      return centerService.uploadThumbnail(vm.center.id, $files[0]).catch(function (err) {
        vm.spinUpload = false;
        return dwAlerts.error(err, 'Failed to upload center thumbnail.');
      }).then(function (result) {
        vm.spinUpload = false;
        vm.center.thumbnail = result.data.photo;
        vm.center.photo = result.data.photo;
        $scope.$emit('CENTERS:REFRESH');
        return result.data;
      });
    }
  };
  /**
   * Delete photo
   */


  vm.deletePhoto = function () {
    if (!$window.confirm($translate.instant('GLOBAL.CONFIRM_DELETE_PHOTO'))) return;
    var promise = centerService.deletePhoto({
      centerId: state.getCurrentCenterId()
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete photo.');
    });
    promise.then(function () {
      return $timeout();
    }).then(function () {
      vm.center.thumbnail = null;
      vm.center.photo = null;
    });
    return promise;
  };

  vm.addTax = function () {
    var tax = {};
    if (!vm.center.taxRates.length) tax.name = $translate.instant('CENTERS.TAX.NAME.DEFAULT');
    vm.center.taxRates.push(tax);
    vm.form.$setDirty();
  };

  vm.deleteTax = function (tax) {
    var _context;

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = vm.center.taxRates).call(_context, vm.center.taxRates.indexOf(tax), 1);

    vm.form.$setDirty();
  };
}]));

/***/ }),

/***/ "./bundles/setup/center/center-edit.tpl.html":
/*!***************************************************!*\
  !*** ./bundles/setup/center/center-edit.tpl.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"ff-grid gutter-v\"> <form name=\"vm.form\" id=\"centerEdit\" novalidate ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-h gutter-v\"> <ff-panel flex=\"{ md: '0 0 50%' }\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"CENTERS.NAME\"></req></ff-label> <ff-text name=\"name\" ff-model=\"vm.center.name\" ff-required=\"true\" placeholder=\"The Satellite Felton\" ff-validate-alert=\"{{'CENTERS.NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"CENTERS.SHORT_NAME\"></req></ff-label> <ff-text name=\"shortName\" ff-model=\"vm.center.shortName\" ff-required=\"true\" placeholder=\"Felton\" ff-validate-alert=\"{{'CENTERS.SHORT_NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"CENTERS.PHONE\"></req></ff-label> <ff-text name=\"phone\" ff-model=\"vm.center.phone\" ff-required=\"true\" dw-phone ff-validate-alert=\"{ field: ('CENTERS.PHONE' | translate), pattern: ('GLOBAL.VALIDATION.PHONE' | translate) }\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"CENTERS.FAX\"></req></ff-label> <ff-text name=\"fax\" ff-model=\"vm.center.fax\" ff-required=\"true\" dw-phone ff-validate-alert=\"{ field: ('CENTERS.FAX' | translate), pattern: ('GLOBAL.VALIDATION.PHONE' | translate) }\"> </ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"CENTERS.EMAIL\"></req></ff-label> <ff-email name=\"email\" ff-model=\"vm.center.email\" ff-required=\"true\" placeholder=\"felton@thesatelliteinc.com\" ff-validate-alert=\"{{'CENTERS.EMAIL' | translate}}\"></ff-email> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><span translate=\"CENTERS.COLOR\"></span></ff-label> <ff-text name=\"color\" ff-model=\"vm.center.color\" placeholder=\"red, blue, #fe00d3, #0f0\" ff-validate-alert=\"{{'CENTERS.COLOR' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"CENTERS.TIMEZONE\"></req></ff-label> <ff-select name=\"timezone\" ff-model=\"vm.center.timezone\" ff-required=\"true\" ff-options=\"tz.id as tz.name for tz in vm.optsTimezone\" ff-validate-alert=\"{{'CENTERS.TIMEZONE' | translate}}\"></ff-select> </label> <label class=\"ff-row\" ng-if=\"$resolve.settings.isFranchise\"> <ff-label flex=\"0 0 100px\"><span translate=\"CENTERS.OWNER\"></span></ff-label> <ff-select name=\"owner\" ff-model=\"vm.center.ownerId\" ff-bulk-read-only=\"vm.ownerRegionReadOnly\" ff-options=\"owner.id as owner.name for owner in vm.owners\" ff-validate-alert=\"{{'CENTERS.OWNER' | translate}}\"></ff-select> </label> <label class=\"ff-row\" ng-if=\"$resolve.settings.isFranchise\"> <ff-label flex=\"0 0 100px\"><span translate=\"CENTERS.REGION\"></span></ff-label> <ff-select name=\"region\" ff-model=\"vm.center.regionId\" ff-bulk-read-only=\"vm.ownerRegionReadOnly\" ff-options=\"region.id as region.name for region in vm.regions\" ff-validate-alert=\"{{'CENTERS.REGION' | translate}}\"></ff-select> </label> </ff-panel> <ff-panel flex=\"{ md: '0 0 50%' }\"> <fieldset dw-address=\"vm.center\" second-street=\"true\"></fieldset> <label class=\"ff-row\" ng-if=\"vm.center.options.qboClasses\"> <ff-label flex=\"0 0 116px\"><span translate=\"CENTERS.QBO_CLASS\"></span></ff-label> <ff-select name=\"qboAccount\" ff-model=\"vm.center.qboClassId\"> <option value=\"\">-</option> <option ng-repeat=\"class in vm.center.options.qboClasses\" value=\"{{class.id}}\">{{class.name}}</option> </ff-select> </label> </ff-panel> <ff-panel flex=\"{ md: '0 0 50%' }\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"CENTERS.BANK\"></req></ff-label> <ff-select name=\"bank\" ff-model=\"vm.center.bankId\" ff-required=\"true\" ff-validate-alert=\"{{'CENTERS.BANK' | translate}}\" ff-options=\"bank.id as bank.name for bank in vm.banks\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"> <span> <span translate=\"CENTERS.TAX.ID\"></span> <ff-hint><span translate=\"CENTERS.TAX.ID.HINT\"></span></ff-hint> </span> </ff-label> <ff-text name=\"taxId\" ff-model=\"vm.center.taxId\"></ff-text> </label> <ff-row ng-repeat=\"tax in vm.center.taxRates\"> <label> <ff-label flex=\"0 0 100px\"> <span translate=\"CENTERS.TAX.INDEX\" translate-values=\"{ index: $index + 1 }\"></span> </ff-label> <ff-text flex=\"auto\" name=\"taxName\" ff-model=\"tax.name\" placeholder=\"{{'CENTERS.TAX.NAME' | translate}}\" ff-required=\"true\" ff-unique=\"{ array: vm.center.taxRates, prop: 'name' }\" ff-model-options=\"{ allowInvalid: true }\" flex=\"auto\" ff-validate-alert=\"{{'CENTERS.TAX.NAME' | translate}}\"></ff-text> </label> <ff-number name=\"taxRate\" ff-model=\"tax.rate\" flex=\"0 1 72px\" placeholder=\"{{'CENTERS.TAX.RATE' | translate}}\" ff-required=\"true\" ff-gt=\"0\" ff-validate-alert=\"{{'CENTERS.TAX.RATE' | translate}}\"></ff-number> <ff-btn flex=\"none\" class=\"buttons-row\" sense=\"delete\" size=\"xs\" ff-click=\"vm.deleteTax(tax)\" title=\"{{'CENTERS.TAX.BTN_DELETE.HINT' | translate}}\"></ff-btn> </ff-row> <ff-btn-group class=\"ff-section-buttons\"> <ff-btn sense=\"add\" size=\"sm\" ff-click=\"vm.addTax()\"><span translate=\"CENTERS.TAX.BTN_ADD\"></span></ff-btn> </ff-btn-group> </ff-panel> <ff-panel flex=\"{ md: '0 0 50%' }\"> <ff-label> <label> <ff-checkbox name=\"forInternalUse\" ff-model=\"vm.center.forInternalUse\"> <span translate=\"CENTERS.INTERNAL_USE\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"CENTERS.INTERNAL_USE.HINT\"></span></ff-hint> </ff-label> <ff-label> <label> <ff-checkbox name=\"hideInMemberSignUp\" ff-model=\"vm.center.hideInMemberSignUp\"> <span translate=\"CENTERS.HIDE_IN_MEMBER_SIGN_UP\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"CENTERS.HIDE_IN_MEMBER_SIGN_UP.HINT\"></span></ff-hint> </ff-label> <label class=\"ff-row\"> <ff-label flex=\"0 1 160px\"> <span translate=\"CENTERS.FREE_ACCESS\"></span> &nbsp; <ff-hint><span translate=\"CENTERS.FREE_ACCESS.HINT\"></span></ff-hint> </ff-label> <ff-select name=\"freeAccessLength\" ff-model=\"vm.netCheckInSettings.freeAccessLength\" ff-options=\"opt.id as opt.name for opt in vm.optsFreeAccessLength\" ff-disabled=\"!vm.netCheckInSettings\"></ff-select> </label> <nexkey-locks center-id=\"vm.center.id\" save=\"vm.nexkeySave\" ng-if=\"vm.center.id && vm.center.id !== 'new'\"></nexkey-locks> </ff-panel> <ff-panel flex=\"{ md: '0 0 50%' }\" ng-if=\"vm.center.id && vm.center.id !== 'new'\" ngf-drop=\"vm.uploadPhoto($files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\" ngf-drag-over-class=\"dragover\"> <ff-panel-header> <span translate=\"CENTERS.PHOTO.HEADER\"></span> <ff-hint><span translate=\"CENTERS.PHOTO.HINT\"></span></ff-hint> </ff-panel-header> <ff-col style=\"height:240px\"> <ff-col flex=\"auto\"> <ff-img flex=\"auto\" ff-style=\"{ height: '100%', width: 'auto', 'object-fit': 'contain' }\" ff-src=\"{{vm.center.thumbnail}}\" ff-src-hq=\"{{vm.center.photo}}\" ff-alt=\"{{vm.center.name}}\" img-placeholder=\"1280 x 640\"></ff-img> </ff-col> <ff-btn-group flex=\"none\" class=\"ff-section-buttons\"> <ff-btn sense=\"upload\" size=\"sm\" ff-spin=\"vm.spinUpload\" ngf-select=\"vm.uploadPhoto($files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\" accept=\"image/png,image/jpeg\"> <span translate=\"CENTERS.PHOTO.BTN_UPLOAD\"></span> </ff-btn> </ff-btn-group> </ff-col> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"vm.save()\" ff-disabled=\"vm.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"remove\" ff-click=\"vm.remove()\" ng-if=\"vm.center.id && vm.center.id !== 'new'\"> <span translate=\"GLOBAL.BTN_DELETE\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> <reservation-rules center-id=\"vm.center.id\" ng-if=\"vm.center.id !== 'new'\" ff-bulk-read-only></reservation-rules> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/center/center-list.controller.js":
/*!********************************************************!*\
  !*** ./bundles/setup/center/center-list.controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.CenterListCtrl', []).controller('CenterListCtrl', ["$scope", "$translate", "state", "helper", "centers", "admin", function ($scope, $translate, state, helper, centers, admin) {
  var vm = this;
  state.setPageTitle($translate.instant('CENTERS.PAGE_TITLE'));
  vm.centers = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(centers).call(centers, function (center) {
    // hide centers without permission
    if (admin) return !!(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, admin.centers, center.id) || {}).permission;
    return true;
  });
  /**
   * Edit Center handler
   */

  vm.edit = function (center) {
    return state.setPath('/centers/' + center.id);
  };
  /**
   * New Center handler
   */


  vm.new = function () {
    return state.setPath('/centers/new');
  };
}]));

/***/ }),

/***/ "./bundles/setup/center/center-list.tpl.html":
/*!***************************************************!*\
  !*** ./bundles/setup/center/center-list.tpl.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"gutter-v\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-panel style=\"max-width:600px\"> <ff-header> <ff-row> <cell flex=\"0 0 50%\"><span translate=\"CENTERS.CENTER\"></span></cell> <cell> <span translate=\"GLOBAL.ADDRESS.CITY\"></span>, <span translate=\"GLOBAL.ADDRESS.STATE\"></span> </cell> <ff-btn flex=\"none\" sense=\"edit\" size=\"xs\" class=\"buttons-row zero-height\"></ff-btn> </ff-row> </ff-header> <ff-row ng-repeat=\"center in vm.centers\"> <ff-static flex=\"0 0 50%\" ff-bind=\"::center.name\" ff-style=\"::center.color ? { color: center.color } : {}\"></ff-static> <ff-static ff-bind=\"::center.city + ', ' + center.state\"></ff-static> <ff-btn flex=\"none\" sense=\"edit\" size=\"xs\" class=\"buttons-row\" ff-click=\"vm.edit(center)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"vm.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/index.js":
/*!********************************!*\
  !*** ./bundles/setup/index.js ***!
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

  var js = importAll(__webpack_require__("./bundles/setup sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/setup sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/setup/integrations-setup/integrations-setup.controller.js":
/*!***************************************************************************!*\
  !*** ./bundles/setup/integrations-setup/integrations-setup.controller.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.IntegrationsSetupCtrl', []).controller('IntegrationsSetupCtrl', ["$scope", "$translate", "$injector", "dwAlerts", "state", "helper", function ($scope, $translate, $injector, dwAlerts, state, helper) {
  var $ctrl = this;

  (function onInit() {
    state.setPageTitle($translate.instant('INTEGRATIONS_SETUP.PAGE_TITLE'));
    $ctrl.appointmentPlus = $injector.has('appointmentPlusSettingsDirective');
    $ctrl.quickBooks = $injector.has('quickBooksCentersDirective');
    $ctrl.teamgo = $injector.has('teamgoSettingsDirective');
    $ctrl.kisi = $injector.has('kisiSettingsDirective');
    $ctrl.nexkey = $injector.has('nexkeySettingsDirective');
    $ctrl.ezeep = $injector.has('ezeepSettingsDirective');
    $ctrl.greetly = $injector.has('greetlySettingsDirective');
  })();
}]));

/***/ }),

/***/ "./bundles/setup/integrations-setup/integrations-setup.tpl.html":
/*!**********************************************************************!*\
  !*** ./bundles/setup/integrations-setup/integrations-setup.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"integrationsSetup\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <quick-books-centers flex=\"{lg: '0 0 50%'}\" ng-if=\"$ctrl.quickBooks\" qb-apps=\"$ctrl.qbApps\"></quick-books-centers> <quick-books-apps flex=\"{lg: '0 0 50%'}\" ng-if=\"$ctrl.quickBooks\" qb-apps=\"$ctrl.qbApps\"></quick-books-apps> <appointment-plus-settings flex=\"{lg: '0 0 50%'}\" ng-if=\"$ctrl.appointmentPlus\"></appointment-plus-settings> <teamgo-settings flex=\"{lg: '0 0 50%'}\" ng-if=\"$ctrl.teamgo\"></teamgo-settings> <kisi-settings flex=\"{lg: '0 0 50%'}\" ng-if=\"$ctrl.kisi\"></kisi-settings> <nexkey-settings flex=\"{lg: '0 0 50%'}\" ng-if=\"$ctrl.nexkey\"></nexkey-settings> <ezeep-settings flex=\"{lg: '0 0 50%'}\" ng-if=\"$ctrl.ezeep\"></ezeep-settings> <greetly-settings flex=\"{lg: '0 0 50%'}\" ng-if=\"$ctrl.greetly\"></greetly-settings> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/owners-regions/owners-regions.controller.js":
/*!*******************************************************************!*\
  !*** ./bundles/setup/owners-regions/owners-regions.controller.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.OwnersRegionsCtrl', ['debounce', 'deskworks.Owner', 'deskworks.Region']).controller('OwnersRegionsCtrl', ["$scope", "$translate", "dwAlerts", "state", "debounce", "owners", "regions", "Owner", "Region", function ($scope, $translate, dwAlerts, state, debounce, owners, regions, Owner, Region) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('OWNERS_REGIONS.PAGE_TITLE'));
  $ctrl.owners = owners;
  $ctrl.regions = regions;
  /**
   * Save handler
   */

  $ctrl.saveOwner = debounce(saveOwner, 1000);

  function saveOwner(owner, form, index) {
    if (form.$invalid) return;
    owner.$$spin = true;
    return Owner.save(owner).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save owner.');
    }).finally(function () {
      owner.$$spin = false;
    });
  }

  $ctrl.saveRegion = debounce(saveRegion, 1000);

  function saveRegion(region, form, index) {
    if (form.$invalid) return;
    region.$$spin = true;
    return Region.save(region).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save region.');
    }).finally(function () {
      region.$$spin = false;
    });
  }
  /**
   * New handler
   */


  $ctrl.newOwner = function () {
    $ctrl.owners.push({});
  };

  $ctrl.newRegion = function () {
    $ctrl.regions.push({});
  };
  /**
   * Delete handler
   */


  $ctrl.deleteOwner = function (owner, index) {
    if (owner.id) {
      // existing
      owner.$$spin = true;
      return Owner.delete(owner.id).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete owner.');
      }).then(function () {
        var _context;

        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.owners).call(_context, index, 1);
      }).finally(function () {
        owner.$$spin = false;
      });
    } else {
      var _context2;

      // new
      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = $ctrl.owners).call(_context2, index, 1);
    }
  };

  $ctrl.deleteRegion = function (region, index) {
    if (region.id) {
      // existing
      region.$$spin = true;
      return Region.delete(region.id).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete region.');
      }).then(function () {
        var _context3;

        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = $ctrl.regions).call(_context3, index, 1);
      }).finally(function () {
        region.$$spin = false;
      });
    } else {
      var _context4;

      // new
      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context4 = $ctrl.regions).call(_context4, index, 1);
    }
  };
}]));

/***/ }),

/***/ "./bundles/setup/owners-regions/owners-regions.tpl.html":
/*!**************************************************************!*\
  !*** ./bundles/setup/owners-regions/owners-regions.tpl.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"owners-regions\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <ff-panel flex=\"{md: '0 0 50%'}\" class=\"ff-flex-start\"> <ff-panel-header><span translate=\"OWNERS_REGIONS.OWNERS.HEADER\"></span></ff-panel-header> <ff-header> <ff-row> <cell><req translate=\"OWNERS_REGIONS.OWNERS.NAME\"></req></cell> </ff-row> </ff-header> <form name=\"form\" ng-repeat=\"owner in $ctrl.owners\" novalidate> <ff-row ff-dim=\"owner.$$spin\"> <ff-text ff-model=\"owner.name\" ff-required=\"true\" ff-validate-alert=\"{{'OWNERS_REGIONS.OWNERS.NAME' | translate}}\" ff-change=\"$ctrl.saveOwner(owner, form, $index)\"></ff-text> <ff-btn sense=\"remove\" size=\"xs\" flex=\"none\" class=\"buttons-row\" ff-click=\"$ctrl.deleteOwner(owner, $index)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-row> </form> <ff-btn-group class=\"ff-section-buttons\"> <ff-btn sense=\"new\" size=\"sm\" ff-click=\"$ctrl.newOwner()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </ff-panel> <ff-panel flex=\"{md: '0 0 50%'}\" class=\"ff-flex-start\"> <ff-panel-header><span translate=\"OWNERS_REGIONS.REGIONS.HEADER\"></span></ff-panel-header> <ff-header> <ff-row> <cell><req translate=\"OWNERS_REGIONS.REGIONS.NAME\"></req></cell> </ff-row> </ff-header> <form name=\"form\" ng-repeat=\"region in $ctrl.regions\" novalidate> <ff-row ff-dim=\"region.$$spin\"> <ff-text ff-model=\"region.name\" ff-required=\"true\" ff-validate-alert=\"{{'OWNERS_REGIONS.REGIONS.NAME' | translate}}\" ff-change=\"$ctrl.saveRegion(region, form, $index)\"></ff-text> <ff-btn sense=\"remove\" size=\"xs\" flex=\"none\" class=\"buttons-row\" ff-click=\"$ctrl.deleteRegion(region, $index)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-row> </form> <ff-btn-group class=\"ff-section-buttons\"> <ff-btn sense=\"new\" size=\"sm\" ff-click=\"$ctrl.newRegion()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </ff-panel> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/reservation-fields/reservation-field-edit.controller.js":
/*!*******************************************************************************!*\
  !*** ./bundles/setup/reservation-fields/reservation-field-edit.controller.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reservation_field_types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reservation-field-types.service */ "./bundles/setup/reservation-fields/reservation-field-types.service.js");
/* harmony import */ var shared_services_setup_reservation_field_option_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/setup/reservation-field-option.service */ "./shared/services/setup/reservation-field-option.service.js");






/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationFieldEditCtrl', ['debounce', _reservation_field_types_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_services_setup_reservation_field_option_service__WEBPACK_IMPORTED_MODULE_5__["default"].name]).controller('ReservationFieldEditCtrl', ["$scope", "$q", "close", "dwAlerts", "debounce", "field", "reservationFieldTypes", "save", "roles", "ReservationFieldOption", function ($scope, $q, close, dwAlerts, debounce, field, reservationFieldTypes, save, roles, ReservationFieldOption) {
  // const $ctrl = this;
  $scope.close = close;
  $scope.field = field;
  $scope.roles = roles;
  $scope.save = save;
  $scope.types = reservationFieldTypes;

  $scope.newOption = function (field) {
    field.options = field.options || [];
    field.options.push({
      name: ''
    });
  };

  $scope.saveOption = debounce(saveOption, 1000);

  function saveOption(field, option, form) {
    if (form.$invalid) return;
    field.$$spin = true;
    return ReservationFieldOption.save({
      fieldId: field.id,
      option: option
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save reservation field option.');
    }).finally(function () {
      field.$$spin = false;
    }).catch(angular.noop);
  }

  $scope.deleteOption = function (field, option) {
    var promise = $q.when();

    if (option.id) {
      promise = ReservationFieldOption.delete({
        fieldId: field.id,
        id: option.id
      }).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete reservation field option.');
      });
    }

    promise.then(function () {
      var _context, _context2;

      return _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = field.options).call(_context, _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = field.options).call(_context2, function (o) {
        return o === option;
      }), 1);
    });
  };
}]));

/***/ }),

/***/ "./bundles/setup/reservation-fields/reservation-field-edit.tpl.html":
/*!**************************************************************************!*\
  !*** ./bundles/setup/reservation-fields/reservation-field-edit.tpl.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"dw-modal\"> <div class=\"dw-modal-fade\" ng-click=\"close()\"></div> <div class=\"dw-modal-dialog\"> <div class=\"dw-modal-scroll\"> <div style=\"max-width:440px\"> <form name=\"form\" novalidate> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><span translate=\"FORM_DESIGN.TYPE\"></span></ff-label> <ff-static>{{types[field.type].name}}</ff-static> <ff-static flex=\"0 0 36px\" ff-dim=\"field.$$spin\" class=\"ff-center\"> <i ng-class=\"types[field.type].icon\" class=\"text-brand\"></i> </ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"FORM_DESIGN.NAME\"></req></ff-label> <ff-text ff-model=\"field.name\" ff-required=\"true\" ff-validate-alert=\"{{'FORM_DESIGN.NAME' | translate}}\" ff-change=\"save(field, form)\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><span translate=\"FORM_DESIGN.REQUIRED\"></span></ff-label> <ff-static> <ff-checkbox ff-model=\"field.required\" ff-validate-alert=\"{{'FORM_DESIGN.REQUIRED' | translate}}\" ff-change=\"save(field, form)\"></ff-checkbox> </ff-static> </label> <ff-row> <ff-label flex=\"0 0 70px\"><span translate=\"FORM_DESIGN.ACCESS\"></span></ff-label> <ff-static> <div class=\"ff-grid gutter-h-half\" flex=\"auto\" style=\"justify-content:flex-start\"> <label flex=\"0 0 120px\" ng-repeat=\"role in roles\"> <ff-checkbox ff-model=\"field.access[role.id]\" ff-disabled=\"role.id === 'admin'\" ff-change=\"save(field, form)\">{{role.name}}</ff-checkbox> </label> </div> </ff-static> </ff-row> </form> <ff-row ng-if=\"field.type === 'dropdown'\"> <ff-label flex=\"0 0 70px\"><span translate=\"FORM_DESIGN.OPTIONS\"></span></ff-label> <ff-col> <ff-static ng-if=\"!field.options.length\"><span translate=\"GLOBAL.NONE\"></span></ff-static> <ng-form name=\"form\" class=\"ff-row\" ng-repeat=\"opt in field.options\"> <ff-text ff-model=\"opt.name\" ff-required=\"true\" ff-validate-alert=\"{{'FORM_DESIGN.NAME' | translate}}\" ff-change=\"saveOption(field, opt, form)\" placeholder=\"{{'FORM_DESIGN.OPTION' | translate}}\"></ff-text> <ff-btn-group flex=\"none\" style=\"margin:0 .5rem\"> <ff-btn sense=\"delete\" size=\"xs\" ff-click=\"deleteOption(field, opt)\"></ff-btn> </ff-btn-group> </ng-form> </ff-col> </ff-row> <ff-btn-group style=\"margin:.5rem\" ng-if=\"field.type === 'dropdown'\"> <ff-btn sense=\"add\" size=\"xs\" title=\"{{'GLOBAL.BTN_NEW' | translate}}\" ff-click=\"newOption(field)\"></ff-btn> </ff-btn-group> </div> </div> <button class=\"dw-modal-cross\" ng-click=\"close()\"></button> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/reservation-fields/reservation-field-types.service.js":
/*!*****************************************************************************!*\
  !*** ./bundles/setup/reservation-fields/reservation-field-types.service.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Form Design field types
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationFieldTypes', []).factory('reservationFieldTypes', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var types = [{
    id: 'customPrice',
    icon: 'fa fa-dollar',
    _name: 'FORM_DESIGN.TYPE.CUSTOM_PRICE'
  }, {
    id: 'extraPrice',
    icon: 'fa fa-plus',
    _name: 'FORM_DESIGN.TYPE.EXTRA_PRICE'
  }, {
    id: 'text',
    icon: 'fa fa-text-width',
    _name: 'FORM_DESIGN.TYPE.TEXT'
  }, {
    id: 'date',
    icon: 'fa fa-calendar',
    _name: 'FORM_DESIGN.TYPE.DATE'
  }, {
    id: 'url',
    icon: 'fa fa-chain',
    _name: 'FORM_DESIGN.TYPE.URL'
  }, {
    id: 'email',
    icon: 'fa fa-at',
    _name: 'FORM_DESIGN.TYPE.EMAIL'
  }, {
    id: 'phone',
    icon: 'fa fa-phone',
    _name: 'FORM_DESIGN.TYPE.PHONE'
  }, {
    id: 'number',
    icon: 'fa fa-hashtag',
    _name: 'FORM_DESIGN.TYPE.NUMBER'
  }, {
    id: 'dropdown',
    icon: 'fa fa-caret-down',
    _name: 'FORM_DESIGN.TYPE.DROPDOWN'
  }, {
    id: 'checkbox',
    icon: 'fa fa-check',
    _name: 'FORM_DESIGN.TYPE.CHECKBOX'
  }];
  types.forEach(function (t) {
    types[t.id] = t;
  }); // array/object duality

  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    types.forEach(function (type) {
      type.name = $translate.instant(type._name);
    });
  }

  return types;
}]));

/***/ }),

/***/ "./bundles/setup/reservation-fields/reservation-fields.controller.js":
/*!***************************************************************************!*\
  !*** ./bundles/setup/reservation-fields/reservation-fields.controller.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/drag-n-drop/dnd.service */ "./shared/drag-n-drop/dnd.service.js");
/* harmony import */ var shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/setup/reservation-field.service */ "./shared/services/setup/reservation-field.service.js");
/* harmony import */ var _reservation_field_types_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reservation-field-types.service */ "./bundles/setup/reservation-fields/reservation-field-types.service.js");
/* harmony import */ var shared_form_design_fd_toolbar_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/form-design/fd-toolbar.directive */ "./shared/form-design/fd-toolbar.directive.js");
/* harmony import */ var shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/dw-modal/dw-modal.service */ "./shared/dw-modal/dw-modal.service.js");
/* harmony import */ var _reservation_field_edit_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reservation-field-edit.controller */ "./bundles/setup/reservation-fields/reservation-field-edit.controller.js");










/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationFieldsCtrl', ['debounce', shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, 'deskworks.UserField', shared_form_design_fd_toolbar_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name, _reservation_field_types_service__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, 'deskworks.reservationCategory.service', shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, _reservation_field_edit_controller__WEBPACK_IMPORTED_MODULE_9__["default"].name, 'deskworks.Roles']).controller('ReservationFieldsCtrl', ["$scope", "$translate", "$window", "$q", "dwAlerts", "state", "helper", "debounce", "dnd", "dwModal", "Roles", "ReservationField", "reservationCategoryService", "reservationFieldTypes", function ($scope, $translate, $window, $q, dwAlerts, state, helper, debounce, dnd, dwModal, Roles, ReservationField, reservationCategoryService, reservationFieldTypes) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('RESERVATION_FIELDS.PAGE_TITLE'));
  $ctrl.types = reservationFieldTypes;
  /**
   * Init
   */

  (function (onInit) {
    $ctrl.categories = [{
      id: 0,
      fields: [],
      name: $translate.instant('RESERVATION_FIELDS.SHARED.HEADER') // hint: $translate.instant('RESERVATION_FIELDS.SHARED.HINT'),

    }]; // const categoriesPromise = reservationCategoryService.query(state.getCurrentCenterId())
    //   .catch(err => dwAlerts.error(err, 'Failed to query reservation categories.'))
    //   .then(res => {
    //     $ctrl.categories = res.map(cat => ({ id: cat.id, name: cat.name, fields: [] }));
    //     $ctrl.categories.unshift({
    //       id: 0, fields: [], name: $translate.instant('RESERVATION_FIELDS.SHARED.HEADER'),
    //       hint: $translate.instant('RESERVATION_FIELDS.SHARED.HINT'),
    //     });
    //   });

    var fieldsPromise = ReservationField.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query reservation fields.');
    });
    Roles.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query roles.');
    }).then(function (roles) {
      $ctrl.roles = roles;
    }).then(function () {
      $ctrl.newFieldTpl = {
        type: '$type.id',
        name: '',
        reservationCategoryId: '$target.id',
        required: false,
        access: $ctrl.roles.reduce(function (res, role) {
          return res[role.id] = true, res;
        }, {})
      };
    }); // $q.all({ categoriesPromise, fields: fieldsPromise })

    $q.all({
      fields: fieldsPromise
    }).then(function (_ref) {
      var fields = _ref.fields;
      fields.forEach(function (field) {
        var _context;

        var category = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.categories).call(_context, function (c) {
          return c.id === field.reservationCategoryId;
        });

        if (!category) return;
        category.fields.push(field);
      });
    });
  })();
  /**
   * Drop handler
   */


  $ctrl.onDrop = function (srcList, srcIndex, targetList, targetIndex, form, target) {
    var item = srcList[srcIndex];
    if (!targetList && item.id && !$window.confirm($translate.instant('FORM_DESIGN.TRASH.CONFIRM'))) return false;
    item = dnd.move(srcList, srcIndex, targetList, targetIndex);
    if (item && target) item.reservationCategoryId = target.id;

    if (!targetList) {
      // delete
      if (!item.id) return true; // don't delete uncreated

      deleteField(item);
    } else {
      // update
      if (form.$invalid) return true; // don't save invalid

      saveField(item, form);
    }

    return true; // true is required by dnd-callback of dnd-list
  };
  /**
   * Save handler
   */


  $ctrl.saveField = debounce(saveField, 1000);

  function saveField(field, form) {
    if (form.$invalid) return;
    field.$$spin = true;
    return ReservationField.save(field).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save reservation field.');
    }).finally(function () {
      field.$$spin = false;
    }).catch(angular.noop);
  }
  /**
   * Edit handler
   */


  $ctrl.editField = function (field) {
    dwModal.show({
      scope: $scope,
      templateUrl: 'reservation-fields/reservation-field-edit.tpl.html',
      controller: 'ReservationFieldEditCtrl as $ctrl',
      inputs: {
        field: field,
        save: $ctrl.saveField,
        roles: $ctrl.roles
      }
    });
  };
  /**
   * Delete handler
   */


  function deleteField(field) {
    if (!field.id) return; // not existing

    field.$$spin = true;
    $ctrl.deleting = true;
    return ReservationField.delete(field.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete reservation field.');
    }).finally(function () {
      field.$$spin = false;
      $ctrl.deleting = false;
    }).catch(angular.noop);
  }
}]));

/***/ }),

/***/ "./bundles/setup/reservation-fields/reservation-fields.tpl.html":
/*!**********************************************************************!*\
  !*** ./bundles/setup/reservation-fields/reservation-fields.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div ff-bulk-read-only> <h4 class=\"page-title\"> <span>{{state.getPageTitle()}}</span> <ff-hint style=\"vertical-align:top;line-height:.8rem\"><span translate=\"RESERVATION_FIELDS.HINT\"></span></ff-hint> </h4> <div class=\"fd-container\"> <div class=\"ff-grid gutter-v gutter-h\"> <ff-spin class=\"ff-spin-placeholder\" ng-if=\"!$ctrl.categories\"></ff-spin> <ff-panel flex=\"{md: '0 0 50%'}\" ng-repeat=\"category in $ctrl.categories\"> <ff-panel-header> <span>{{category.name}}</span> <ff-hint><span translate=\"FORM_DESIGN.HINT\"></span></ff-hint> <ff-hint ng-if=\"category.hint\">{{category.hint}}</ff-hint> </ff-panel-header> <ng-include src=\"'reservationFieldsTpl'\"></ng-include> </ff-panel> </div> <fd-toolbar types=\"$ctrl.types\" deleting=\"$ctrl.deleting\" new-item=\"$ctrl.newFieldTpl\"></fd-toolbar> </div> </div> <script type=\"text/ng-template\" id=\"reservationFieldsTpl\"> <ff-header>\n    <ff-row>\n      <cell flex=\"0 0 36px\"><span translate=\"FORM_DESIGN.TYPE\" style=\"letter-spacing: -1px;\"></span></cell>\n      <cell><req translate=\"FORM_DESIGN.NAME\"></req></cell>\n    </ff-row>\n  </ff-header>\n\n  <div dnd-list dnd-drop=\"callback({ targetList: category.fields, targetIndex: index, target: category })\">\n    <form name=\"form\" novalidate class=\"ff-row\"\n          ng-repeat=\"field in category.fields\"\n          dnd-draggable=\"null\" dnd-callback=\"$ctrl.onDrop(category.fields, $index, targetList, targetIndex, form, target)\">\n      <ff-static flex=\"0 0 36px\" ff-dim=\"field.$$spin\" class=\"ff-center\">\n        <i ng-class=\"$ctrl.types[field.type].icon\"></i>\n      </ff-static>\n      <ff-text ff-model=\"field.name\" ff-required=\"true\" ff-validate-alert=\"{{'FORM_DESIGN.NAME' | translate}}\"\n               ff-change=\"$ctrl.saveField(field, form)\" dnd-nodrag></ff-text>\n      <ff-btn-group flex=\"none\">\n        <ff-btn sense=\"edit\" size=\"xs\" ff-click=\"$ctrl.editField(field)\"></ff-btn>\n      </ff-btn-group>\n    </form>\n    <div ng-if=\"!category.fields.length\" translate=\"FORM_DESIGN.EMPTY\" style=\"padding: 10px 0 0\"></div>\n  </div> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/settings/settings.controller.js":
/*!*******************************************************!*\
  !*** ./bundles/setup/settings/settings.controller.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_dw_controls_dw_search_user_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/dw-controls/dw-search-user.directive */ "./shared/dw-controls/dw-search-user.directive.js");
/* harmony import */ var shared_services_setup_opts_invoice_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/setup/opts-invoice-template.service */ "./shared/services/setup/opts-invoice-template.service.js");






/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SetupSettingsCtrl', ['deskworks.state', 'deskworks.setup.service', 'deskworks.userProfile.service', 'setLocale', 'setTranslations', 'deskworks.setup.optsProrateAtStart', 'deskworks.setup.optsProrateAtTermination', 'deskworks.setup.optsMinPassFractionUnit', 'deskworks.optsDashboardIncome', 'deskworks.Roles', shared_dw_controls_dw_search_user_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_services_setup_opts_invoice_template_service__WEBPACK_IMPORTED_MODULE_5__["default"].name]).controller('SetupSettingsCtrl', ["$scope", "$window", "$timeout", "$route", "$translate", "$q", "dwAlerts", "state", "helper", "setupService", "settings", "userProfileService", "optsInvoiceDate", "optsProrateAtStart", "optsProrateAtTermination", "optsDashboardIncome", "optsReservationCreditsUnit", "optsMinPassFractionUnit", "Roles", "optsInvoiceTemplate", function ($scope, $window, $timeout, $route, $translate, $q, dwAlerts, state, helper, setupService, settings, userProfileService, optsInvoiceDate, optsProrateAtStart, optsProrateAtTermination, optsDashboardIncome, optsReservationCreditsUnit, optsMinPassFractionUnit, Roles, optsInvoiceTemplate) {
  var _context;

  var vm = this;
  state.setPageTitle($translate.instant('SETUP_SETTINGS.PAGE_TITLE'));
  vm.settings = settings;
  vm.optsDeclinedPaymentAutoRetryPeriod = [1, 2, 3, 7];
  vm.optsDeclinedPaymentAutoRetryAttempts = [0, 1, 2, 3];
  vm.optsPassGracePeriod = [15, 20, 30];
  vm.optsInvoiceTemplate = optsInvoiceTemplate;
  /**
   * Populate 'Create Invoice __ days in advance of charge' dropdown and select default value
   */

  vm.advanceInvoicingDays = [{
    id: 1,
    name: '1 day'
  }];

  for (var i = 2; i < 31; i++) {
    vm.advanceInvoicingDays.push({
      id: i,
      name: i + ' days'
    });
  }

  vm.settings.advanceInvoicingDays = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context = vm.advanceInvoicingDays).call(_context, function (d) {
    return d.id === vm.settings.advanceInvoicingDays;
  });

  if (!vm.settings.advanceInvoicingDays) {
    vm.settings.advanceInvoicingDays = vm.advanceInvoicingDays[0];
  }

  vm.optsInvoiceDate = optsInvoiceDate;
  vm.optsProrateAtStart = optsProrateAtStart;
  vm.optsProrateAtTermination = optsProrateAtTermination;
  vm.optsReservationCreditsUnit = optsReservationCreditsUnit;
  vm.optsMinPassFractionUnit = optsMinPassFractionUnit;
  vm.optsDashboardIncome = optsDashboardIncome;
  fetchOwners();
  fetchAdminRoles();
  /**
   * Save settings
   */

  vm.save = function () {
    if (helper.pointFirstInvalid('#setupSettings')) return;
    return setupService.updateSetupSettings(vm.settings).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save setup settings.');
    }).then(function () {
      $route.reload();
    });
  };
  /**
   * Fetch calendarOwners and replace owner.id with short user object
   */


  function fetchOwners() {
    vm.settings.calendarOwners.forEach(function (calOwner) {
      userProfileService.get(state.getCurrentCenterId(), calOwner.owner).then(function (result) {
        calOwner.owner = {
          id: result.id,
          fullName: result.firstName + ' ' + result.lastName,
          company: result.company,
          email: result.email
        };
      });
    });
  }
  /**
   * Fetch admin roles to use in limitRefundProcessingTo section
   */


  function fetchAdminRoles() {
    return Roles.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query user roles.');
    }).then(function (result) {
      vm.adminRoles = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(result).call(result, function (role) {
        return role.type === 'admin';
      });
    });
  }
  /**
   * Add Calendar Owner
   */


  vm.addCalendarOwner = function () {
    vm.settings.calendarOwners.push({});
    vm.form.$setDirty();
  };
  /**
   * Delete Calendar Owner
   */


  vm.deleteCalendarOwner = function (calOwner) {
    var _context2;

    var idx = vm.settings.calendarOwners.indexOf(calOwner);
    if (idx >= 0) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = vm.settings.calendarOwners).call(_context2, idx, 1);
    vm.form.$setDirty();
  };
  /**
   * Disconnect Calendar button handler
   */


  vm.disconnectCalendar = function () {
    if (!window.confirm($translate.instant('CALENDAR.CONFIRM_DISCONNECT'))) return;
    return setupService.updateSetupSettingsRaw({
      calendarConnected: false
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to disconnect calendar.');
    }).then(function () {
      vm.settings.calendarConnected = false;
    });
  };

  vm.ccTypeRequired = function () {
    return vm.settings.creditCardTypes.every(function (ccType) {
      return !ccType.enable;
    });
  };
}]));

/***/ }),

/***/ "./bundles/setup/settings/settings.tpl.html":
/*!**************************************************!*\
  !*** ./bundles/setup/settings/settings.tpl.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"vm.form\" id=\"setupSettings\" novalidate ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <ff-panel flex=\"{lg: '0 0 50%'}\"> <ff-panel-header><span translate=\"SETUP_SETTINGS.GENERAL.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 1 140px', sm: '0 1 220px'}\"><req translate=\"SETUP_SETTINGS.LANGUAGE\"></req></ff-label> <ff-select name=\"locale\" ff-model=\"vm.settings.locale\" ff-options=\"locale.id as locale.name for locale in $resolve.locales\" ff-required=\"true\" ff-validate-alert=\"{{'SETUP_SETTINGS.LANGUAGE' | translate}}\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 1 140px', sm: '0 1 220px'}\"><span translate=\"SETUP_SETTINGS.DASHBOARD_INCOME\"></span></ff-label> <ff-select name=\"dashboardIncome\" ff-model=\"vm.settings.dashboardIncome\" ff-required=\"true\" ff-options=\"opt.id as opt.name for opt in vm.optsDashboardIncome\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 1 140px', sm: '0 1 220px'}\"><span translate=\"SETUP_SETTINGS.PASS_GRACE_PERIOD\"></span></ff-label> <ff-select name=\"passGracePeriod\" ff-model=\"vm.settings.passGracePeriod\"> <option ng-repeat=\"opt in vm.optsPassGracePeriod\" ng-value=\"opt\">{{opt | minutes}}</option> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 1 140px', sm: '0 1 220px'}\"><span translate=\"SETUP_SETTINGS.INVOICE_TEMPLATE\"></span></ff-label> <ff-select name=\"invoiceTemplate\" ff-model=\"vm.settings.invoiceTemplate\" ff-options=\"opt.id as opt.name for opt in vm.optsInvoiceTemplate\"> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 1 160px', sm: '0 1 250px'}\"> <span> <span translate=\"SETUP_SETTINGS.GTM_CONTAINER_ID\"></span> <ff-hint><span translate=\"SETUP_SETTINGS.GTM_CONTAINER_ID.HINT\"></span></ff-hint> </span> </ff-label> <ff-text name=\"gtmContainerId\" ff-model=\"vm.settings.gtmContainerId\" placeholder=\"GTM-XXXXXXX\" ff-validate-alert=\"{{'SETUP_SETTINGS.GTM_CONTAINER_ID' | translate}}\"></ff-text> </label> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"enableAddOnProductsAtRegistration\" ff-model=\"vm.settings.enableAddOnProductsAtRegistration\"> <span translate=\"SETUP_SETTINGS.ADD_ON_PRODUCTS_REGISTRATION\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.ADD_ON_PRODUCTS_REGISTRATION.HINT\"></span></ff-hint> </ff-static> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"enableExtraFieldsAtRegistration\" ff-model=\"vm.settings.enableExtraFieldsAtRegistration\"> <span translate=\"SETUP_SETTINGS.EXTRA_FIELDS_REGISTRATION\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.EXTRA_FIELDS_REGISTRATION.HINT\"></span></ff-hint> </ff-static> <affiliatly-settings settings=\"vm.settings\"></affiliatly-settings> </ff-panel> <ff-panel flex=\"{lg: '0 0 50%'}\"> <ff-panel-header><span translate=\"SETUP_SETTINGS.FEATURES.HEADER\"></span></ff-panel-header> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"timeFormat\" ff-model=\"vm.settings.timeFormat\" ff-true-value=\"24\" ff-false-value=\"12\"> <span translate=\"SETUP_SETTINGS.TIME_FORMAT\"></span> </ff-checkbox> </label> </ff-static> <ff-static> <label> <ff-checkbox name=\"enableEmailing\" ff-model=\"vm.settings.enableEmailing\"> <span translate=\"SETUP_SETTINGS.ENABLE_EMAILING\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.ENABLE_EMAILING.HINT\"></span></ff-hint> </ff-static> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"sendNoticesFromLocalCenter\" ff-model=\"vm.settings.sendNoticesFromLocalCenter\"> <span translate=\"SETUP_SETTINGS.NOTICES_FROM_LOCAL_FACILITY\"></span> </ff-checkbox> </label> </ff-static> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"isFranchise\" ff-model=\"vm.settings.isFranchise\"> <span translate=\"SETUP_SETTINGS.IS_FRANCHISE\"></span> </ff-checkbox> </label> </ff-static> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"enableAccessCodes\" ff-model=\"vm.settings.enableAccessCodes\"> <span translate=\"SETUP_SETTINGS.ENABLE_ACCESS_CODES\"></span> </ff-checkbox> </label> </ff-static> <ff-static> <label> <ff-checkbox name=\"activateMembersForAllCenters\" ff-model=\"vm.settings.activateMembersForAllCenters\"> <span translate=\"SETUP_SETTINGS.ACTIVATE_MEMBERS_FOR_ALL_CENTERS\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.ACTIVATE_MEMBERS_FOR_ALL_CENTERS.HINT\"></span></ff-hint> </ff-static> <ff-static> <label> <ff-checkbox name=\"skipPlanMemberSignUp\" ff-model=\"vm.settings.skipPlanMemberSignUp\"> <span translate=\"SETUP_SETTINGS.SKIP_PLAN_MEMBER_SIGN_UP\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.SKIP_PLAN_MEMBER_SIGN_UP.HINT\"></span></ff-hint> </ff-static> <ff-static> <label> <ff-checkbox name=\"enableSecurityDepositInMembershipProducts\" ff-model=\"vm.settings.enableSecurityDepositInMembershipProducts\"> <span translate=\"SETUP_SETTINGS.ENABLE_SECURITY_DEPOSIT_IN_MEMBERSHIP_PRODUCTS\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.ENABLE_SECURITY_DEPOSIT_IN_MEMBERSHIP_PRODUCTS.HINT\"></span></ff-hint> </ff-static> <ff-static> <label> <ff-checkbox name=\"enableRenewalNotices\" ff-model=\"vm.settings.enableRenewalNotices\"> <span translate=\"SETUP_SETTINGS.ENABLE_RENEWAL_NOTICES\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.ENABLE_RENEWAL_NOTICES.HINT\"></span></ff-hint> </ff-static> <ff-static> <label> <ff-checkbox name=\"multiLevelProductCategory\" ff-model=\"vm.settings.multiLevelProductCategory\"> <span translate=\"SETUP_SETTINGS.MULTI_LEVEL_PRODUCT_CATEGORY\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.MULTI_LEVEL_PRODUCT_CATEGORY.HINT\"></span></ff-hint> </ff-static> <ff-static> <label> <ff-checkbox name=\"enableGdprDelete\" ff-model=\"vm.settings.enableGdprDelete\"> <span translate=\"SETUP_SETTINGS.ENABLE_GDPR_DELETE\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.ENABLE_GDPR_DELETE.HINT\"></span></ff-hint> </ff-static> </ff-panel> <ff-panel flex=\"{lg: '0 0 50%'}\"> <ff-panel-header><span translate=\"SETUP_SETTINGS.BILLING_FEATURES.HEADER\"></span></ff-panel-header> <ff-row> <ff-label flex=\"{xs: '0 1 140px', sm: '0 1 152px'}\"><span translate=\"SETUP_SETTINGS.CC_TYPES\"></span></ff-label> <ff-static> <div class=\"ff-grid gutter-h-half\" style=\"justify-content:flex-start\"> <label flex=\"none\" ng-repeat=\"ccType in vm.settings.creditCardTypes\"> <ff-checkbox name=\"{{ccType.id}}\" ff-model=\"ccType.enable\" ff-required=\"vm.ccTypeRequired()\" ff-validate-alert=\"{{'SETUP_SETTINGS.CC_TYPES.AT_LEAST_ONE' | translate}}\">{{ccType.name}}</ff-checkbox> </label> </div> </ff-static> </ff-row> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"enableEChecks\" ff-model=\"vm.settings.enableEChecks\"> <span translate=\"SETUP_SETTINGS.USE_E_CHECKS\"></span> </ff-checkbox> </label> </ff-static> <ff-static> <label> <ff-checkbox name=\"creditCardAddressOptional\" ff-model=\"vm.settings.creditCardAddressOptional\"> <span translate=\"SETUP_SETTINGS.CC_ADDRESS_OPTIONAL\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.CC_ADDRESS_OPTIONAL.HINT\"></span></ff-hint> </ff-static> <ff-static> <div class=\"gutter-h-half\" ff-dim=\"!vm.adminRoles\"> <ff-static class=\"i-block ff-no-frame\" ff-style=\"{ padding: 0 }\" style=\"min-width:196px\"> <span translate=\"SETUP_SETTINGS.LIMIT_REFUND_PROCESSING_TO\"></span> </ff-static> <label ng-repeat=\"role in vm.adminRoles\" class=\"i-block\"> <ff-checkbox name=\"{{role.id}}\" ff-model=\"vm.settings.limitRefundProcessingTo[role.id]\">{{role._name ? (role._name | translate) : role.name}}</ff-checkbox> </label> </div> </ff-static> <ff-static> <div class=\"gutter-h-half\" ff-dim=\"!vm.adminRoles\"> <ff-static class=\"i-block ff-no-frame\" ff-style=\"{ padding: 0 }\" style=\"min-width:196px\"> <span translate=\"SETUP_SETTINGS.LIMIT_DELETING_ORDER_ITEMS_TO\"></span> </ff-static> <label ng-repeat=\"role in vm.adminRoles\" class=\"i-block\"> <ff-checkbox name=\"{{role.id}}\" ff-model=\"vm.settings.limitDeletingOrderItemsTo[role.id]\">{{role._name ? (role._name | translate) : role.name}}</ff-checkbox> </label> </div> </ff-static> <ff-row> <label class=\"ff-row\" flex=\"0 1 320px\"> <ff-label flex=\"0 1 auto\"> <span translate=\"SETUP_SETTINGS.AUTO_RETRY_DECLINED_PAYMENTS\"></span> </ff-label> <ff-select flex=\"0 0 40px\" name=\"declinedPaymentAutoRetryPeriod\" ff-disabled=\"vm.settings.declinedPaymentAutoRetryAttempts === 0\" ff-model=\"vm.settings.declinedPaymentAutoRetryPeriod\" ff-required=\"true\" ff-options=\"days for days in vm.optsDeclinedPaymentAutoRetryPeriod\" ff-validate-alert=\"{{'SETUP_SETTINGS.AUTO_RETRY_DAYS' | translate}}\"></ff-select> <ff-label flex=\"1 0 auto\"><span translate=\"SETUP_SETTINGS.AUTO_RETRY_DAYS\"></span></ff-label> </label> <label class=\"ff-row\" flex=\"1 1 190px\"> <ff-label flex=\"0 0 auto\"><span translate=\"SETUP_SETTINGS.AUTO_RETRY_FOR\"></span></ff-label> <ff-select flex=\"0 0 40px\" name=\"declinedPaymentAutoRetryAttempts\" ff-model=\"vm.settings.declinedPaymentAutoRetryAttempts\" ff-required=\"true\" ff-options=\"days for days in vm.optsDeclinedPaymentAutoRetryAttempts\" ff-validate-alert=\"{{'SETUP_SETTINGS.AUTO_RETRY_ATTEMPTS' | translate}}\"></ff-select> <ff-label flex=\"1 0 auto\"><span translate=\"SETUP_SETTINGS.AUTO_RETRY_ATTEMPTS\"></span></ff-label> </label> </ff-row> </ff-panel> <ff-panel flex=\"{lg: '0 0 50%'}\"> <ff-panel-header><span translate=\"SETUP_SETTINGS.SWEEP.HEADER\"></span></ff-panel-header> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"sweepCharges\" ff-model=\"vm.settings.sweepCharges\"> <span translate=\"SETUP_SETTINGS.SWEEP_CHARGES\"></span> </ff-checkbox> </label> </ff-static> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"emailSweptInvoices\" ff-model=\"vm.settings.emailSweptInvoices\" ff-disabled=\"!vm.settings.sweepCharges\"> <span translate=\"SETUP_SETTINGS.EMAIL_SWEPT_INVOICES\"></span> </ff-checkbox> </label> </ff-static> <label class=\"ff-row\"> <ff-label flex=\"0 0 60%\" ng-disabled=\"!vm.settings.sweepCharges\"> <req translate=\"SETUP_SETTINGS.ADVANCE_INVOICING_DAYS\"></req> </ff-label> <ff-select name=\"advanceInvoicingDays\" ff-model=\"vm.settings.advanceInvoicingDays\" ff-required=\"true\" ff-options=\"days.name for days in vm.advanceInvoicingDays\" ff-disabled=\"!vm.settings.sweepCharges\" ff-validate-alert=\"{{'SETUP_SETTINGS.ADVANCE_INVOICING_BY' | translate}}\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 60%\" ng-disabled=\"!vm.settings.sweepCharges\"> <span translate=\"SETUP_SETTINGS.INVOICE_DATE\"></span> </ff-label> <ff-select name=\"invoiceDate\" ff-model=\"vm.settings.invoiceDate\" ff-options=\"date.name for date in vm.optsInvoiceDate\" ff-disabled=\"!vm.settings.sweepCharges\"></ff-select> </label> </ff-panel> <ff-panel flex=\"{lg: '0 0 50%'}\"> <ff-panel-header><span translate=\"SETUP_SETTINGS.RESERVATION.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 1 200px\"><span translate=\"SETUP_SETTINGS.RESERVATION_CREDITS_UNIT\"></span></ff-label> <ff-select name=\"reservationCreditsUnit\" ff-model=\"vm.settings.reservationCreditsUnit\"> <option ng-repeat=\"opt in vm.optsReservationCreditsUnit\" ng-value=\"opt.id\">{{opt.name}}</option> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 200px\"> <span> <span translate=\"SETUP_SETTINGS.MIN_PASS_UNIT\"></span> <ff-hint><span translate=\"SETUP_SETTINGS.MIN_PASS_UNIT.HINT\"></span></ff-hint> </span> </ff-label> <ff-select name=\"minPassInPercent\" ff-model=\"vm.settings.minPassInPercent\" ff-options=\"opt.id as opt.name for opt in vm.optsMinPassFractionUnit\"> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 200px\"><span translate=\"SETUP_SETTINGS.RESERVATION_INFO_VISIBILITY\"></span></ff-label> <ff-select name=\"publicReservationDetails\" ff-model=\"vm.settings.publicReservationDetails\"> <option ng-value=\"false\" translate=\"SETUP_SETTINGS.RESERVATION_INFO_VISIBILITY.SHARED\"></option> <option ng-value=\"true\" translate=\"SETUP_SETTINGS.RESERVATION_INFO_VISIBILITY.ALL\"></option> </ff-select> </label> <ff-static> <label> <ff-checkbox name=\"hideReservationCostEstimate\" ff-model=\"vm.settings.hideReservationCostEstimate\"> <span translate=\"SETUP_SETTINGS.HIDE_RESERVATION_COST_ESTIMATE\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.HIDE_RESERVATION_COST_ESTIMATE.HINT\"></span></ff-hint> </ff-static> <ff-static> <label> <ff-checkbox name=\"hideRecurringReservations\" ff-model=\"vm.settings.hideRecurringReservations\"> <span translate=\"SETUP_SETTINGS.HIDE_RECURRING_RESERVATIONS\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.HIDE_RECURRING_RESERVATIONS.HINT\"></span></ff-hint> </ff-static> <ff-static> <label> <ff-checkbox name=\"hideStaffOnlyUnits\" ff-model=\"vm.settings.hideStaffOnlyUnits\"> <span translate=\"SETUP_SETTINGS.HIDE_STAFF_ONLY_UNITS\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"SETUP_SETTINGS.HIDE_STAFF_ONLY_UNITS.HINT\"></span></ff-hint> </ff-static> </ff-panel> <div flex=\"{lg: '0 0 50%'}\"> <ff-col class=\"gutter-v\"> <ff-panel> <ff-panel-header> <span translate=\"SETUP_SETTINGS.PRO_RATION.HEADER\"></span> <ff-hint><span translate=\"SETUP_SETTINGS.PRO_RATION.HINT\"></span></ff-hint> </ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 1 200px\"><span translate=\"SETUP_SETTINGS.PRO_RATE_AT_START\"></span></ff-label> <ff-select name=\"prorateAtStart\" ff-model=\"vm.settings.prorateAtStart\" ff-options=\"opt.id as opt.name for opt in vm.optsProrateAtStart\"> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 200px\"><span translate=\"SETUP_SETTINGS.PRO_RATE_AT_TERMINATION\"></span></ff-label> <ff-select name=\"prorateAtTermination\" ff-model=\"vm.settings.prorateAtTermination\" ff-options=\"opt.id as opt.name for opt in vm.optsProrateAtTermination\"> </ff-select> </label> </ff-panel> <ff-panel> <ff-panel-header> <span translate=\"SETUP_SETTINGS.PROCESSING_CHARGES.HEADER\"></span> <ff-hint><span translate=\"SETUP_SETTINGS.PROCESSING_CHARGES.HINT\"></span></ff-hint> </ff-panel-header> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"enablePaymentProcessingCharges\" ff-model=\"vm.settings.enablePaymentProcessingCharges\"> <span translate=\"SETUP_SETTINGS.PROCESSING_CHARGES.ENABLE\"></span> </ff-checkbox> </label> </ff-static> <label class=\"ff-row\"> <ff-label flex=\"0 1 220px\" ng-disabled=\"!vm.settings.enablePaymentProcessingCharges\"> <span translate=\"SETUP_SETTINGS.PROCESSING_CHARGES.CC_RATE\"></span> </ff-label> <ff-number name=\"paymentProcessingRatesCc\" ff-model=\"vm.settings.paymentProcessingRates.cc\" ff-disabled=\"!vm.settings.enablePaymentProcessingCharges\" ff-gte=\"0\" ff-validate-alert=\"{{'SETUP_SETTINGS.PROCESSING_CHARGES.PERCENT' | translate}}\"></ff-number> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 220px\" ng-disabled=\"!vm.settings.enablePaymentProcessingCharges\"> <span translate=\"SETUP_SETTINGS.PROCESSING_CHARGES.ACH_RATE\"></span> </ff-label> <ff-number name=\"paymentProcessingRatesAch\" ff-model=\"vm.settings.paymentProcessingRates.ach\" ff-disabled=\"!vm.settings.enablePaymentProcessingCharges\" ff-gte=\"0\" ff-validate-alert=\"{{'SETUP_SETTINGS.PROCESSING_CHARGES.PERCENT' | translate}}\"></ff-number> </label> </ff-panel> </ff-col> </div> <ff-panel ng-if=\"vm.settings.calendarIntegration\" flex=\"{xl: '0 0 50%'}\"> <ff-panel-header><span translate=\"SETUP_SETTINGS.CALENDAR.HEADER\"></span></ff-panel-header> <ff-row> <label flex=\"auto\"> <ff-label flex=\"auto\"><span translate=\"SETUP_SETTINGS.CALENDAR.CONNECTION\"></span></ff-label> <ff-static flex=\"none\" ng-if=\"vm.settings.calendarConnected\"> <span> <ff-icon sense=\"check\"></ff-icon> <span translate=\"SETUP_SETTINGS.CALENDAR.CONNECTED\"></span> </span> </ff-static> </label> <ff-btn-group flex=\"none\" class=\"buttons-row\"> <a ng-if=\"!vm.settings.calendarConnected\" href=\"{{vm.settings.calendarGrantUrl}}\" target=\"_self\" style=\"background:url(data:image/png;base64,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);background-size:100%;display:inline-block;width:160px;height:38px;margin-left:5px\"></a> <ff-btn ng-if=\"vm.settings.calendarConnected\" sense=\"delete\" size=\"sm\" ff-click=\"vm.disconnectCalendar()\"> <span translate=\"SETUP_SETTINGS.CALENDAR.BTN_DISCONNECT\"></span> </ff-btn> </ff-btn-group> </ff-row> <label class=\"ff-row\" ng-if=\"vm.settings.googleCalendarEmail\"> <ff-label flex=\"0 0 50%\"><span translate=\"SETUP_SETTINGS.CALENDAR.EMAIL\"></span></ff-label> <ff-static>{{vm.settings.googleCalendarEmail}}</ff-static> </label> <ff-static ng-if=\"vm.settings.calendarConnected\"> <label class=\"ff-row\"> <ff-checkbox name=\"addCenterPrefixToCalendar\" ff-model=\"vm.settings.addCenterPrefixToCalendar\"> <span translate=\"SETUP_SETTINGS.CALENDAR.CENTER_PREFIX\"></span> </ff-checkbox> </label> </ff-static> <ff-header ng-if=\"vm.settings.calendarConnected\" style=\"margin-top:.6rem;padding-bottom:.6rem\"> <span><span translate=\"SETUP_SETTINGS.CALENDAR.ACCOUNTS\"></span>:</span> </ff-header> <ff-row ng-if=\"vm.settings.calendarConnected\" ng-repeat=\"calOwner in vm.settings.calendarOwners\"> <label flex=\"0 0 50%\"> <ff-label flex=\"0 0 65px\"><span translate=\"SETUP_SETTINGS.CALENDAR.ACCOUNT\"></span></ff-label> <ff-search flex=\"auto\" name=\"calendarAssignedToMember\" ng-model=\"calOwner.owner\" dw-search-user=\"activeNameOnly\"></ff-search> </label> <label flex=\"0 1 50%\"> <ff-label flex=\"none\"> <span> <span translate=\"SETUP_SETTINGS.CALENDAR.KEYWORD\"></span> <ff-hint><span translate=\"SETUP_SETTINGS.CALENDAR.KEYWORD.HINT\"></span></ff-hint> </span> </ff-label> <ff-text flex=\"1 1 1%\" name=\"mask\" ff-model=\"calOwner.mask\"></ff-text> </label> <ff-btn sense=\"delete\" size=\"xs\" ff-click=\"vm.deleteCalendarOwner(calOwner)\" title=\"{{'SETUP_SETTINGS.CALENDAR.BTN_DELETE_ACCOUNT.HINT' | translate}}\"></ff-btn> </ff-row> <ff-btn-group class=\"ff-section-buttons\" ng-if=\"vm.settings.calendarConnected\"> <ff-btn sense=\"add\" size=\"sm\" ff-click=\"vm.addCalendarOwner(calOwner)\"> <span translate=\"SETUP_SETTINGS.CALENDAR.BTN_ADD_ACCOUNT\"></span> </ff-btn> </ff-btn-group> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"vm.save()\" ff-disabled=\"vm.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/system-email/system-email-edit.controller.js":
/*!********************************************************************!*\
  !*** ./bundles/setup/system-email/system-email-edit.controller.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SystemEmailEditCtrl', ['deskworks.system.service']).controller('SystemEmailEditCtrl', ["$scope", "$translate", "dwAlerts", "state", "helper", "systemEmail", "systemService", "optsSystemEmailFunction", function ($scope, $translate, dwAlerts, state, helper, systemEmail, systemService, optsSystemEmailFunction) {
  var _context;

  var $ctrl = this;
  state.setPageTitle($translate.instant(systemEmail.id ? 'SYSTEM_EMAILS.EDIT.PAGE_TITLE' : 'SYSTEM_EMAILS.NEW.PAGE_TITLE'));
  $ctrl.systemEmail = systemEmail;
  $ctrl.functions = optsSystemEmailFunction;
  $ctrl.systemEmail.function = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.functions).call(_context, function (f) {
    return f.id === $ctrl.systemEmail.function;
  }) || $ctrl.functions[0];
  /**
   * Save System Email handler
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#systemEmailEdit')) return;
    var data = {
      function: $ctrl.systemEmail.function.id,
      email: $ctrl.systemEmail.email
    };
    var promise = $ctrl.systemEmail.id ? systemService.updateSystemEmail($ctrl.systemEmail.id, data) : systemService.createSystemEmail(data);
    return promise.catch(function (err) {
      return dwAlerts.error(err, 'Failed to save system email.');
    }).then(function (result) {
      if (!$ctrl.systemEmail.id) return state.setPath('/system-emails/' + result.id);
      $ctrl.form.$setPristine();
    });
  };
  /**
   * Remove System Email handler
   */


  $ctrl.remove = function () {
    if (!confirm($translate.instant('SYSTEM_EMAILS.CONFIRM_DELETE'))) return;
    return systemService.removeSystemEmail($ctrl.systemEmail.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to remove system email.');
    }).then(function () {
      return state.setPath('/system-emails');
    });
  };
  /**
   * Back button handler
   */


  $ctrl.back = function () {
    return state.setPath('/system-emails');
  };
}]));

/***/ }),

/***/ "./bundles/setup/system-email/system-email-edit.tpl.html":
/*!***************************************************************!*\
  !*** ./bundles/setup/system-email/system-email-edit.tpl.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"systemEmailEdit\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:815px\"> <ff-header> <ff-row> <cell flex=\"0 0 30%\"><req translate=\"SYSTEM_EMAILS.FUNCTION\"></req></cell> <cell><req translate=\"SYSTEM_EMAILS.EMAIL\"></req></cell> </ff-row> </ff-header> <ff-row> <ff-select flex=\"0 0 30%\" ff-model=\"$ctrl.systemEmail.function\" ff-options=\"function.name for function in $ctrl.functions\" ff-required=\"true\" ff-validate-alert=\"{{'SYSTEM_EMAILS.FUNCTION' | translate}}\"></ff-select> <ff-email ff-model=\"$ctrl.systemEmail.email\" ff-required=\"true\" ff-validate-alert=\"{{'SYSTEM_EMAILS.EMAIL' | translate}}\"></ff-email> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"remove\" ff-click=\"$ctrl.remove()\" ng-if=\"$ctrl.systemEmail.id\"> <span translate=\"GLOBAL.BTN_DELETE\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/system-email/system-email-list.controller.js":
/*!********************************************************************!*\
  !*** ./bundles/setup/system-email/system-email-list.controller.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SystemEmailListCtrl', ['deskworks.system.service', 'deskworks.optsSystemEmailFunction']).controller('SystemEmailListCtrl', ["$scope", "$translate", "state", "helper", "systemEmails", "optsSystemEmailFunction", function ($scope, $translate, state, helper, systemEmails, optsSystemEmailFunction) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('SYSTEM_EMAILS.PAGE_TITLE'));
  $ctrl.systemEmails = systemEmails;
  $ctrl.functions = optsSystemEmailFunction;
  $ctrl.systemEmails.forEach(function (systemEmail) {
    var _context;

    systemEmail.function = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.functions).call(_context, function (f) {
      return f.id === systemEmail.function;
    });
  });
  /**
   * Edit System Email handler
   */

  $ctrl.edit = function (systemEmail) {
    return state.setPath('/system-emails/' + systemEmail.id);
  };
  /**
   * New System Email handler
   */


  $ctrl.new = function () {
    return state.setPath('/system-emails/new');
  };
}]));

/***/ }),

/***/ "./bundles/setup/system-email/system-email-list.tpl.html":
/*!***************************************************************!*\
  !*** ./bundles/setup/system-email/system-email-list.tpl.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"system-email-list\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:815px\"> <span ng-if=\"!$ctrl.systemEmails.length\" translate=\"GLOBAL.NONE\"></span> <ff-header ng-if=\"$ctrl.systemEmails.length\"> <ff-row> <cell flex=\"0 0 30%\"><span translate=\"SYSTEM_EMAILS.FUNCTION\"></span></cell> <cell><span translate=\"SYSTEM_EMAILS.EMAIL\"></span></cell> <ff-btn sense=\"edit\" size=\"xs\" flex=\"none\" class=\"buttons-row zero-height\"></ff-btn> </ff-row> </ff-header> <ff-row ng-repeat=\"systemEmail in $ctrl.systemEmails\"> <ff-static flex=\"0 0 30%\" ff-bind=\"systemEmail.function.name\"></ff-static> <ff-static ff-bind=\"systemEmail.email\"></ff-static> <ff-btn sense=\"edit\" size=\"xs\" flex=\"none\" class=\"buttons-row\" ff-click=\"$ctrl.edit(systemEmail)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"$ctrl.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/task/task-edit.controller.js":
/*!****************************************************!*\
  !*** ./bundles/setup/task/task-edit.controller.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.TaskEditCtrl', ['deskworks.Task', 'deskworks.optsTaskPermission']).controller('TaskEditCtrl', ["$scope", "$translate", "dwAlerts", "state", "helper", "task", "Task", "roles", "optsTaskPermission", function ($scope, $translate, dwAlerts, state, helper, task, Task, roles, optsTaskPermission) {
  var $ctrl = this;
  state.setPageTitle($translate.instant(task.id ? 'TASKS.EDIT.PAGE_TITLE' : 'TASKS.NEW.PAGE_TITLE'));
  task.permissions = task.permissions || {};
  $ctrl.task = task;
  $ctrl.roles = roles;
  $ctrl.optsTaskPermission = optsTaskPermission;
  $ctrl.roles.forEach(function (role) {
    if (role._name) role.name = $translate.instant(role._name) || role.name;
  });

  if (!$ctrl.task.id) {
    $ctrl.roles.forEach(function (role) {
      $ctrl.task.permissions[role.id] = 'view';
      if (role.id === 'nonMember' || role.id === 'member') $ctrl.task.permissions[role.id] = null;
      if (role.id === 'admin' || role.id === 'master') $ctrl.task.permissions[role.id] = 'edit';
    });
  }
  /**
   * Save Task handler
   */


  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#taskEdit')) return;
    var isNew = !$ctrl.task.id;
    return Task.save($ctrl.task).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save task.');
    }).then(function (task) {
      $scope.$emit('SIDEBAR:REFRESH');
      if (isNew) return state.setPath('/tasks/' + task.id);else $ctrl.form.$setPristine();
    });
  };
  /**
   * Remove Task handler
   */


  $ctrl.remove = function () {
    if (!confirm($translate.instant('TASKS.CONFIRM_DELETE'))) return;
    return Task.delete($ctrl.task.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete task.');
    }).then(function () {
      $scope.$emit('SIDEBAR:REFRESH');
      return state.setPath('/tasks');
    });
  };
  /**
   * Back button handler
   */


  $ctrl.back = function () {
    return state.setPath('/tasks');
  }; // /**
  //  * Role permission checkbox change handler
  //  */
  // $ctrl.onChangePermission = function(role, perm) {
  //   var p = $ctrl.task.permissions[role];
  //   if(p.edit && perm === 'edit') p.view = true;
  //   if(!p.view && perm === 'view') p.edit = false;
  // };


  $ctrl.onChangeIsGroup = function () {
    if (!$ctrl.task.isGroup) return;
    $ctrl.roles.forEach(function (role) {
      if ($ctrl.task.permissions[role.id]) $ctrl.task.permissions[role.id] = 'view';
    });
  };
}]));

/***/ }),

/***/ "./bundles/setup/task/task-edit.tpl.html":
/*!***********************************************!*\
  !*** ./bundles/setup/task/task-edit.tpl.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"taskEdit\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <ff-panel flex=\"{md: '0 0 50%'}\"> <ff-panel-header><span translate=\"TASKS.GENERAL.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"TASKS.POSITION\"></req></ff-label> <ff-number name=\"taskPosition\" ff-model=\"$ctrl.task.position\" ff-required=\"true\" ff-validate-alert=\"{{'TASKS.POSITION' | translate}}\"></ff-number> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"TASKS.NAME\"></req></ff-label> <ff-text name=\"taskName\" ff-model=\"$ctrl.task.name\" ff-required=\"true\" ff-validate-alert=\"{{'TASKS.NAME' | translate}}\"></ff-text> </label> <ff-static> <label flex=\"0 0 100px\"> <span translate=\"TASKS.IS_GROUP\"></span> </label> <ff-checkbox name=\"isGroup\" ff-model=\"$ctrl.task.isGroup\" ff-change=\"$ctrl.onChangeIsGroup()\"></ff-checkbox> </ff-static> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\" ff-required=\"{{!$ctrl.task.isGroup}}\" ng-disabled=\"$ctrl.task.isGroup\"> <span translate=\"TASKS.URL\"></span> </ff-label> <ff-text name=\"taskUrl\" ff-model=\"$ctrl.task.url\" ff-required=\"!$ctrl.task.isGroup\" ff-disabled=\"$ctrl.task.isGroup\" ff-validate-alert=\"{{'TASKS.URL' | translate}}\"></ff-text> </label> </ff-panel> <ff-panel flex=\"{md: '0 0 50%'}\"> <ff-panel-header><span translate=\"TASKS.PERMISSIONS.HEADER\"></span></ff-panel-header> <ff-header> <ff-row> <cell><span translate=\"GLOBAL.ROLE\"></span></cell> <cell flex=\"0 0 100px\"><span translate=\"TASKS.PERMISSION\"></span></cell> </ff-row> </ff-header> <ff-row ng-repeat=\"role in $ctrl.roles\"> <ff-static>{{role.name}}</ff-static> <ff-select name=\"view\" ff-model=\"$ctrl.task.permissions[role.id]\" flex=\"0 0 100px\" ff-options=\"opt.id as opt.name for opt in $ctrl.optsTaskPermission | filter: ($ctrl.task.isGroup ? { id: '!edit' } : {})\"> <option ng-repeat=\"opt in $ctrl.optsTaskPermission\" ng-value=\"opt.id\" ng-if=\"!$ctrl.task.isGroup || opt.id !== 'edit'\">{{opt.name}}</option> </ff-select> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"remove\" ff-click=\"$ctrl.remove()\" ng-if=\"$ctrl.task.id\"> <span translate=\"GLOBAL.BTN_DELETE\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/task/task-list.controller.js":
/*!****************************************************!*\
  !*** ./bundles/setup/task/task-list.controller.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.TaskListCtrl', []).controller('TaskListCtrl', ["$scope", "$translate", "state", "helper", "tasks", "roles", function ($scope, $translate, state, helper, tasks, roles) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('TASKS.PAGE_TITLE'));
  $ctrl.tasks = [];
  $ctrl.tasksHidden = [];
  $ctrl.tasksHiddenCollapse = true;
  $ctrl.roles = roles;
  tasks.tasks.forEach(function (task) {
    (task.position ? $ctrl.tasks : $ctrl.tasksHidden).push(task);
    var viewRoles = [],
        editRoles = [];
    $ctrl.roles.forEach(function (role) {
      if (role._name) role.name = $translate.instant(role._name) || role.name;
      if (task.permissions[role.id] === 'edit') return editRoles.push(role.name);
      if (task.permissions[role.id] === 'view') return viewRoles.push(role.name);
    });
    task.viewRoles = viewRoles.join(', ');
    task.editRoles = editRoles.join(', ');
    if (task.viewRoles && task.editRoles && !task.isGroup) task.viewRoles += ',';
  });
  /**
   * Edit Task handler
   */

  $ctrl.edit = function (task) {
    return state.setPath('/tasks/' + task.id);
  };
  /**
   * New Task handler
   */


  $ctrl.new = function () {
    return state.setPath('/tasks/new');
  };
}]));

/***/ }),

/***/ "./bundles/setup/task/task-list.tpl.html":
/*!***********************************************!*\
  !*** ./bundles/setup/task/task-list.tpl.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<script type=\"text/ng-template\" id=\"taskListTpl\"> <ff-panel>\n    <ff-header>\n      <ff-row>\n        <cell class=\"ff-center\" flex=\"0 0 50px\" title=\"{{'GLOBAL.POSITION.HINT' | translate}}\">\n          <span translate=\"GLOBAL.POSITION\"></span>\n        </cell>\n        <cell flex=\"0 0 35%\"><span translate=\"TASKS.NAME\"></span></cell>\n        <cell><span translate=\"TASKS.PERMISSIONS.HEADER\"></span></cell>\n        <ff-btn size=\"xs\" flex=\"none\" class=\"buttons-row zero-height\"></ff-btn>\n      </ff-row>\n    </ff-header>\n\n    <ff-row ng-repeat=\"task in tasks\">\n      <ff-static class=\"ff-center\" flex=\"0 0 50px\" ff-bind=\"task.position\" ng-if=\"!task.isGroup\"></ff-static>\n      <ff-static flex=\"0 0 35%\" ff-bind=\"task.name\" ng-if=\"!task.isGroup\"></ff-static>\n      <ff-static ng-if=\"!task.isGroup\">\n        <span>\n          <span ng-if=\"task.viewRoles\" style=\"background: #eceaea\">{{task.viewRoles}}</span>\n          <span ng-if=\"task.editRoles\">{{task.editRoles}}</span>\n        </span>\n      </ff-static>\n\n      <ff-label class=\"ff-center standout em\" flex=\"0 0 50px\" ng-if=\"task.isGroup\"><span style=\"font-size: .8666rem\">{{task.position}}</span></ff-label>\n      <ff-label class=\"standout em\" flex=\"0 0 35%\" ng-if=\"task.isGroup\"><span style=\"font-size: .8666rem\">{{task.name}}</span></ff-label>\n      <ff-label class=\"standout em\" ng-if=\"task.isGroup\">\n        <span ng-if=\"task.viewRoles\" style=\"font-size: .8666rem\">{{task.viewRoles}}</span>\n      </ff-label>\n\n      <ff-btn sense=\"edit\" size=\"xs\" flex=\"none\" ff-click=\"$ctrl.edit(task)\"\n              class=\"buttons-row\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn>\n    </ff-row>\n  </ff-panel> </script> <div class=\"task-list\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <div class=\"ff-grid\"> <label class=\"ff-row\" flex=\"0 0 210px\" style=\"margin-left:auto\"> <div flex=\"0 0 45%\"> <span style=\"border:1px solid;width:35px;max-height:20px;background:#eceaea\"></span> &nbsp; <span translate=\"TASKS.PERMISSION.VIEW\"></span> </div> <div flex=\"0 0 55%\"> <span style=\"border:1px solid;width:35px;max-height:20px\"></span> &nbsp; <span translate=\"TASKS.PERMISSION.EDIT\"></span> </div> </label> </div> <div> <ng-include src=\"'taskListTpl'\" ng-init=\"tasks = $ctrl.tasks\"></ng-include> </div> <ff-btn-group ng-if=\"$ctrl.tasksHidden.length > 0\"> <ff-btn sense=\"collapse\" ng-class=\"{ collapsed: $ctrl.tasksHiddenCollapse }\" ff-click=\"$ctrl.tasksHiddenCollapse = !$ctrl.tasksHiddenCollapse\"> <span translate=\"TASKS.BTN_HIDDEN\"></span> </ff-btn> </ff-btn-group> <div> <div ng-collapse=\"$ctrl.tasksHiddenCollapse\" ng-if=\"$ctrl.tasksHidden.length > 0\"> <ng-include src=\"'taskListTpl'\" ng-init=\"tasks = $ctrl.tasksHidden\"></ng-include> </div> </div> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"$ctrl.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/setup/user-fields/user-field-types.service.js":
/*!***************************************************************!*\
  !*** ./bundles/setup/user-fields/user-field-types.service.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Form Design field types
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.userFieldTypes', []).factory('userFieldTypes', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var types = [{
    id: 'text',
    icon: 'fa fa-text-width',
    _name: 'FORM_DESIGN.TYPE.TEXT'
  }, {
    id: 'textarea',
    icon: 'fa fa-text-height',
    _name: 'FORM_DESIGN.TYPE.TEXTAREA'
  }, {
    id: 'date',
    icon: 'fa fa-calendar',
    _name: 'FORM_DESIGN.TYPE.DATE'
  }, {
    id: 'url',
    icon: 'fa fa-chain',
    _name: 'FORM_DESIGN.TYPE.URL'
  }, {
    id: 'email',
    icon: 'fa fa-at',
    _name: 'FORM_DESIGN.TYPE.EMAIL'
  }, {
    id: 'phone',
    icon: 'fa fa-phone',
    _name: 'FORM_DESIGN.TYPE.PHONE'
  }, {
    id: 'number',
    icon: 'fa fa-hashtag',
    _name: 'FORM_DESIGN.TYPE.NUMBER'
  }];
  types.forEach(function (t) {
    types[t.id] = t;
  }); // array/object duality

  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    types.forEach(function (type) {
      type.name = $translate.instant(type._name);
    });
  }

  return types;
}]));

/***/ }),

/***/ "./bundles/setup/user-fields/user-fields.controller.js":
/*!*************************************************************!*\
  !*** ./bundles/setup/user-fields/user-fields.controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/drag-n-drop/dnd.service */ "./shared/drag-n-drop/dnd.service.js");
/* harmony import */ var shared_services_setup_user_field_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/setup/user-field.service */ "./shared/services/setup/user-field.service.js");
/* harmony import */ var bundles_setup_user_fields_user_field_types_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bundles/setup/user-fields/user-field-types.service */ "./bundles/setup/user-fields/user-field-types.service.js");
/* harmony import */ var shared_form_design_fd_toolbar_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/form-design/fd-toolbar.directive */ "./shared/form-design/fd-toolbar.directive.js");







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.UserFieldsCtrl', ['debounce', shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_services_setup_user_field_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_form_design_fd_toolbar_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, bundles_setup_user_fields_user_field_types_service__WEBPACK_IMPORTED_MODULE_5__["default"].name]).controller('UserFieldsCtrl', ["$scope", "$translate", "$window", "dwAlerts", "state", "helper", "debounce", "dnd", "UserField", "userFields", "userFieldTypes", function ($scope, $translate, $window, dwAlerts, state, helper, debounce, dnd, UserField, userFields, userFieldTypes) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('USER_FIELDS.PAGE_TITLE'));
  $ctrl.types = userFieldTypes;
  $ctrl.sections = {
    customFields: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(userFields).call(userFields, function (field) {
      return field.section === 'customFields';
    }),
    shareable: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(userFields).call(userFields, function (field) {
      return field.section === 'shareable';
    })
  };
  /**
   * Drop handler
   */

  $ctrl.onDrop = function (srcList, srcIndex, targetList, targetIndex, form, target) {
    var item = srcList[srcIndex];
    if (!targetList && item.id && !$window.confirm($translate.instant('FORM_DESIGN.TRASH.CONFIRM'))) return false;
    item = dnd.move(srcList, srcIndex, targetList, targetIndex);
    if (item) item.section = target;

    if (!targetList) {
      // delete
      if (!item.id) return true; // don't delete uncreated

      deleteField(item);
    } else {
      // update
      if (form.$invalid) return true; // don't save invalid

      saveField(item, form);
    }

    return true; // true is required by dnd-callback of dnd-list
  };
  /**
   * Save handler
   */


  $ctrl.saveField = debounce(saveField, 1000);

  function saveField(field, form) {
    if (form.$invalid) return;
    field.$$spin = true;
    return UserField.save(field).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save user field.');
    }).finally(function () {
      field.$$spin = false;
    }).catch(angular.noop);
  }
  /**
   * Delete handler
   */


  function deleteField(field) {
    if (!field.id) return; // not existing

    field.$$spin = true;
    $ctrl.deleting = true;
    return UserField.delete(field.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete field.');
    }).finally(function () {
      field.$$spin = false;
      $ctrl.deleting = false;
    }).catch(angular.noop);
  }
}]));

/***/ }),

/***/ "./bundles/setup/user-fields/user-fields.tpl.html":
/*!********************************************************!*\
  !*** ./bundles/setup/user-fields/user-fields.tpl.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"fd-container\"> <div class=\"ff-grid gutter-v gutter-h\"> <ff-panel flex=\"{md: '0 0 50%'}\" ng-if=\"true\"> <ff-panel-header> <span translate=\"USER_FIELDS.CUSTOM.HEADER\"></span> <ff-hint><span translate=\"FORM_DESIGN.HINT\"></span></ff-hint> </ff-panel-header> <ng-include src=\"'userFieldsTpl'\" ng-init=\"section = 'customFields'\"></ng-include> </ff-panel> <ff-panel flex=\"{md: '0 0 50%'}\" ng-if=\"true\"> <ff-panel-header> <span translate=\"USER_FIELDS.SHAREABLE.HEADER\"></span> <ff-hint><span translate=\"FORM_DESIGN.HINT\"></span></ff-hint> </ff-panel-header> <ng-include src=\"'userFieldsTpl'\" ng-init=\"section = 'shareable'\"></ng-include> </ff-panel> </div> <fd-toolbar types=\"$ctrl.types\" deleting=\"$ctrl.deleting\" new-item=\"{ type: '$type.id', name: '', section: '$target' }\"></fd-toolbar> </div> </div> <script type=\"text/ng-template\" id=\"userFieldsTpl\"> <ff-header>\n    <ff-row>\n      <cell flex=\"0 0 36px\"><span translate=\"FORM_DESIGN.TYPE\" style=\"letter-spacing: -1px;\"></span></cell>\n      <cell><req translate=\"FORM_DESIGN.NAME\"></req></cell>\n    </ff-row>\n  </ff-header>\n\n  <div dnd-list dnd-drop=\"callback({ targetList: $ctrl.sections[section], targetIndex: index, target: section })\">\n    <form name=\"form\" novalidate class=\"ff-row\"\n          ng-repeat=\"field in $ctrl.sections[section]\"\n          dnd-draggable=\"null\" dnd-callback=\"$ctrl.onDrop($ctrl.sections[section], $index, targetList, targetIndex, form, target)\">\n      <ff-static flex=\"0 0 36px\" ff-dim=\"field.$$spin\" class=\"ff-center\">\n        <i ng-class=\"$ctrl.types[field.type].icon\"></i>\n      </ff-static>\n      <ff-text ff-model=\"field.name\" ff-required=\"true\" ff-validate-alert=\"{{'FORM_DESIGN.NAME' | translate}}\"\n               ff-change=\"$ctrl.saveField(field, form)\" dnd-nodrag></ff-text>\n    </form>\n    <div ng-if=\"!$ctrl.sections[section].length\" translate=\"FORM_DESIGN.EMPTY\" style=\"padding: 10px 0 0\"></div>\n  </div> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/form-design/fd-toolbar.directive.js":
/*!****************************************************!*\
  !*** ./shared/form-design/fd-toolbar.directive.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fd_toolbar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fd-toolbar.scss */ "./shared/form-design/fd-toolbar.scss");
/* harmony import */ var _fd_toolbar_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fd_toolbar_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/drag-n-drop/dnd.service */ "./shared/drag-n-drop/dnd.service.js");
/* harmony import */ var _fd_toolbar_tpl_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fd-toolbar.tpl.html */ "./shared/form-design/fd-toolbar.tpl.html");
/* harmony import */ var _fd_toolbar_tpl_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fd_toolbar_tpl_html__WEBPACK_IMPORTED_MODULE_6__);







/**
 * fdToolbar directive - toolbar with draggable components for Form Design
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.fdToolbar', [shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_5__["default"].name]).directive('fdToolbar', function () {
  return {
    scope: true,
    template: _fd_toolbar_tpl_html__WEBPACK_IMPORTED_MODULE_6___default.a,
    controller: 'FdToolbarCtrl as $ctrl',
    bindToController: {
      deleting: '<',
      types: '<',
      newItem: '<'
    }
  };
}).controller('FdToolbarCtrl', ["$scope", "$element", "dnd", function ($scope, $element, dnd) {
  var $ctrl = this;
  var scroller;
  /**
   * Init
   */

  $ctrl.$onInit = function () {
    scroller = document.querySelector('.snap-content-scroller');
    scroller.addEventListener('scroll', onScroll);
    onScroll();
  };
  /**
   * Drop handler - creates new element in targetList
   */


  $ctrl.onDrop = function (targetList, targetIndex, type, target) {
    var item = angular.copy($ctrl.newItem);

    _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(item).forEach(function (key) {
      if (!item[key] || typeof item[key] !== 'string') return;
      var subst = item[key].split('.');
      if (subst[0] === '$type') item[key] = subst[1] ? type[subst[1]] : type;else if (subst[0] === '$target') item[key] = subst[1] ? target[subst[1]] : target;
    });

    dnd.move([item], 0, targetList, targetIndex);
    return true; // true is required by dnd-callback of dnd-list
  };
  /**
   * Destroy
   */


  $ctrl.$onDestroy = function () {
    scroller.removeEventListener('scroll', onScroll);
  };
  /**
   * Scroll handler - stick toolbar to screen top
   */


  function onScroll(event) {
    var rect = $element[0].parentNode.getBoundingClientRect();
    $element.css('top', -Math.min(rect.top - 5, 0) + 'px');
  }
}]));

/***/ }),

/***/ "./shared/form-design/fd-toolbar.scss":
/*!********************************************!*\
  !*** ./shared/form-design/fd-toolbar.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/form-design/fd-toolbar.tpl.html":
/*!************************************************!*\
  !*** ./shared/form-design/fd-toolbar.tpl.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div> <div class=\"fd-tb-header em\"><span translate=\"FORM_DESIGN.TOOLBAR.HEADER\"></span></div> <div class=\"fd-tool\" ng-repeat=\"type in $ctrl.types\" title=\"{{type.name}}\" dnd-draggable=\"null\" dnd-callback=\"$ctrl.onDrop(targetList, targetIndex, type, target)\" dnd-effect-allowed=\"copy\"><i ng-class=\"type.icon\"></i></div> <div class=\"fd-tool fd-trash\" title=\"{{'FORM_DESIGN.TRASH.HINT' | translate}}\" ff-dim=\"$ctrl.deleting\" dnd-list=\"[]\" dnd-drop=\"callback({ targetList: null, targetIndex: index })\"><i class=\"fa fa-trash\"></i></div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/services/setup/opts-invoice-template.service.js":
/*!****************************************************************!*\
  !*** ./shared/services/setup/opts-invoice-template.service.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Setup -> Settings -> Invoice Template
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsInvoiceTemplate', []).factory('optsInvoiceTemplate', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 'standard',
    _name: 'SETUP_SETTINGS.INVOICE_TEMPLATE.STANDARD'
  }, {
    id: 'alternate',
    _name: 'SETUP_SETTINGS.INVOICE_TEMPLATE.ALTERNATE'
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

/***/ "./shared/services/setup/reservation-field-option.service.js":
/*!*******************************************************************!*\
  !*** ./shared/services/setup/reservation-field-option.service.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationFieldOption', ['ngResource', 'deskworks.config']).factory('ReservationFieldOption', ["$resource", "$filter", "$timeout", "deskworksConfig", function ($resource, $filter, $timeout, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/reservation-fields/:fieldId/options/:id'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    /**
     * @param params.fieldId
     * @param params.option
     * @returns {*}
     */
    save: function save(params) {
      var fieldId = params.fieldId,
          option = params.option;
      if (option.id) return res.update({
        fieldId: fieldId,
        id: option.id
      }, option).$promise;
      return res.save({
        fieldId: fieldId
      }, option).$promise.then(function (result) {
        option.id = result.id;
      });
    },

    /**
     * @param params.fieldId
     * @param params.id
     * @returns {*}
     */
    delete: function _delete(params) {
      return res.delete(params).$promise;
    }
  };
}]));

/***/ })

}]);
//# sourceMappingURL=setup~._b.js.map?_rev=ff44b22b81c13efae649