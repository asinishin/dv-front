(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["printer-usage~._bundles_printer-usage "],{

/***/ "./bundles/printer-usage sync recursive .*\\.tpl\\.html$":
/*!***************************************************!*\
  !*** ./bundles/printer-usage sync .*\.tpl\.html$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./printer-usage/printer-usage-edit.tpl.html": "./bundles/printer-usage/printer-usage/printer-usage-edit.tpl.html",
	"./printer-usage/printer-usage-list.tpl.html": "./bundles/printer-usage/printer-usage/printer-usage-list.tpl.html",
	"./settings/print-import-profiles.tpl.html": "./bundles/printer-usage/settings/print-import-profiles.tpl.html",
	"./settings/print-part-numbers.tpl.html": "./bundles/printer-usage/settings/print-part-numbers.tpl.html",
	"./settings/printer-usage-settings.tpl.html": "./bundles/printer-usage/settings/printer-usage-settings.tpl.html"
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
webpackContext.id = "./bundles/printer-usage sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/printer-usage sync recursive \\..+\\/.+\\.js$":
/*!**************************************************!*\
  !*** ./bundles/printer-usage sync \..+\/.+\.js$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./printer-usage/printer-usage-edit.controller.js": "./bundles/printer-usage/printer-usage/printer-usage-edit.controller.js",
	"./printer-usage/printer-usage-list.controller.js": "./bundles/printer-usage/printer-usage/printer-usage-list.controller.js",
	"./services/opts-print-formatting-type.service.js": "./bundles/printer-usage/services/opts-print-formatting-type.service.js",
	"./services/print-import-profile.service.js": "./bundles/printer-usage/services/print-import-profile.service.js",
	"./services/print-usage-type.service.js": "./bundles/printer-usage/services/print-usage-type.service.js",
	"./services/printer-usage.service.js": "./bundles/printer-usage/services/printer-usage.service.js",
	"./settings/print-import-profiles.directive.js": "./bundles/printer-usage/settings/print-import-profiles.directive.js",
	"./settings/print-part-numbers.directive.js": "./bundles/printer-usage/settings/print-part-numbers.directive.js",
	"./settings/printer-usage-settings.controller.js": "./bundles/printer-usage/settings/printer-usage-settings.controller.js"
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
webpackContext.id = "./bundles/printer-usage sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/printer-usage/index.js":
/*!****************************************!*\
  !*** ./bundles/printer-usage/index.js ***!
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

  var js = importAll(__webpack_require__("./bundles/printer-usage sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/printer-usage sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/printer-usage/printer-usage/printer-usage-edit.controller.js":
/*!******************************************************************************!*\
  !*** ./bundles/printer-usage/printer-usage/printer-usage-edit.controller.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PrinterUsageEditCtrl', ['deskworks.PrinterUsage']).controller('PrinterUsageEditCtrl', ["$scope", "$window", "$translate", "$route", "dwAlerts", "state", "helper", "PrinterUsage", function ($scope, $window, $translate, $route, dwAlerts, state, helper, PrinterUsage) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('PRINTER_USAGE.LIST.PAGE_TITLE'));

  $ctrl.onInit = function () {
    $ctrl.navPage();
  };
  /**
   * Back button handler
   */


  $ctrl.back = function () {
    return state.setPath('/printer-usage');
  };
  /**
   * Save button handler
   */


  $ctrl.save = function (form) {
    if (helper.pointFirstInvalid('#printerUsage')) return;
    return PrinterUsage.save($ctrl.usage).catch(function (err) {
      return dwAlerts.error(err, 'Failed to update printer usage.');
    }).then(function () {
      return form.$setPristine();
    });
  };
  /**
   * Delete button handler
   */


  $ctrl.delete = function () {
    if ($window.confirm($translate.instant('PRINTER_USAGE.CONFIRM_DELETE'))) return PrinterUsage.delete($ctrl.usage.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete printer usage.');
    }).then(function () {
      return state.setPath('/printer-usage');
    });
  };
  /**
   * Post Charges button handler
   */


  $ctrl.postCharges = function () {
    return PrinterUsage.postCharges($ctrl.usage.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to post charges for printer usage.');
    }).then(function () {
      return state.setPath('/printer-usage');
    });
  };
  /**
   * Sort handler
   */


  $ctrl.sort = function (sort) {
    return $ctrl.navPage(1, sort);
  };
  /**
   * Navigate page handler
   */


  $ctrl.navPage = function ($page, sort) {
    sort = sort || $ctrl.usage && _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default()($ctrl.usage);
    return PrinterUsage.get($route.current.params.printerUsageId, $page, $ctrl.usage && $ctrl.usage.pageSize, sort).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query printer usages.');
    }).then(function (result) {
      $ctrl.usage = result;

      if ($ctrl.usage.jobs.length) {
        $ctrl.jobsColumnsNames = {};

        _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default()($ctrl.usage.jobs[0]).forEach(function (name) {
          return $ctrl.jobsColumnsNames[name] = name;
        });
      }
    });
  };

  $ctrl.onInit();
}]));

/***/ }),

/***/ "./bundles/printer-usage/printer-usage/printer-usage-edit.tpl.html":
/*!*************************************************************************!*\
  !*** ./bundles/printer-usage/printer-usage/printer-usage-edit.tpl.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"formMemberStatement\" id=\"printerUsage\" novalidate ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-row ng-if=\"!$ctrl.usage\" class=\"animate-collapse\"><ff-spin class=\"ff-spin-placeholder\"></ff-spin></ff-row> <div class=\"gutter-v\" ng-if=\"$ctrl.usage\" class=\"animate-collapse\"> <ff-panel style=\"max-width:600px\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"PRINTER_USAGE.NUMBER\"></req></ff-label> <ff-text ff-model=\"$ctrl.usage.number\" ff-required=\"true\" ff-validate-alert=\"{{'PRINTER_USAGE.NUMBER' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"PRINTER_USAGE.POST_DATE\"></req></ff-label> <ff-date ff-model=\"$ctrl.usage.postDate\" ff-required=\"true\" ff-validate-alert=\"{{'PRINTER_USAGE.POST_DATE' | translate}}\"></ff-date> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><span translate=\"PRINTER_USAGE.POSTED\"></span></ff-label> <ff-static ff-bind=\"$ctrl.usage.posted | yesno\"></ff-static> </label> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save(formMemberStatement)\" ff-disabled=\"formMemberStatement.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"delete\" ff-click=\"$ctrl.delete()\"><span translate=\"GLOBAL.BTN_DELETE\"></span></ff-btn> <ff-btn sense=\"charge\" ff-click=\"$ctrl.postCharges()\" ng-if=\"!$ctrl.usage.posted\"> <span translate=\"PRINTER_USAGE.BTN_POST_CHARGES\"></span> </ff-btn> </ff-btn-group> <ff-panel> <ff-panel-header><span translate=\"PRINTER_USAGE.JOBS.HEADER\"></span></ff-panel-header> <ff-header ng-if=\"$ctrl.usage.jobs.length\"> <ff-row> <cell flex=\"1 0 8%\" class=\"ff-center show-sm\" title=\"{{'PRINTER_USAGE.JOBS.#.HINT' | translate}}\"> <span translate=\"PRINTER_USAGE.JOBS.#\"></span> </cell> <cell flex=\"1 0 12%\" class=\"show-xs\"> <div class=\"ff-center\" style=\"display:flex\"> <ff-sort flex=\"none\" props=\"$ctrl.usage\" col-id=\"'id'\" ff-click=\"$ctrl.sort('id')\"></ff-sort> <span translate=\"PRINTER_USAGE.JOBS.ID\"></span> </div> </cell> <cell flex=\"1 0 15%\" class=\"ff-center\"> <span translate=\"PRINTER_USAGE.JOBS.PRINTER_CODE\"></span> </cell> <cell flex=\"1 0 33%\"> <div class=\"ff-center\" style=\"display:flex\"> <ff-sort flex=\"none\" props=\"$ctrl.usage\" col-id=\"'memberName'\" ff-click=\"$ctrl.sort('memberName')\"></ff-sort> <span translate=\"PRINTER_USAGE.JOBS.USER_NAME\"></span> </div> </cell> <cell flex=\"1 0 10%\" class=\"ff-center\" ng-if=\"$ctrl.jobsColumnsNames.mode\"> <span translate=\"PRINTER_USAGE.JOBS.JOB_MODE\"></span> </cell> <cell flex=\"1 0 10%\" class=\"ff-center\"> <span translate=\"PRINTER_USAGE.JOBS.BLACK_WHITE\"></span> </cell> <cell flex=\"1 0 12%\" class=\"ff-center\"> <span translate=\"PRINTER_USAGE.JOBS.FULL_COLOR\"></span> </cell> <cell flex=\"1 0 10%\" class=\"ff-center\" ng-if=\"$ctrl.jobsColumnsNames.scanCount\"> <span translate=\"PRINTER_USAGE.JOBS.SCAN\"></span> </cell> <cell flex=\"1 0 12%\" class=\"ff-center\" ng-if=\"$ctrl.jobsColumnsNames.faxCount\"> <span translate=\"PRINTER_USAGE.JOBS.FAX\"></span> </cell> </ff-row> </ff-header> <ff-row ng-repeat=\"job in $ctrl.usage.jobs\"> <ff-static flex=\"1 0 8%\" class=\"ff-center show-sm\" ff-bind=\"::$ctrl.usage.pageSize * ($ctrl.usage.page - 1) + $index + 2\"></ff-static> <ff-static flex=\"1 0 12%\" class=\"ff-center show-xs\" ff-bind=\"::job.id\"></ff-static> <ff-static flex=\"1 0 15%\" class=\"ff-center\" style=\"overflow:visible\" ff-style=\"{ overflow: 'visible' }\"><span> {{::job.printerCode}} <ff-hint hint-type=\"danger\" ng-if=\"!job.valid\"><span translate=\"PRINTER_USAGE.JOBS.UNKNOWN.HINT\"></span></ff-hint> </span></ff-static> <ff-static flex=\"1 0 33%\" class=\"ff-center\" ff-bind=\"::job.memberName\"></ff-static> <ff-static flex=\"1 0 10%\" class=\"ff-center\" ff-bind=\"::job.mode\" ng-if=\"$ctrl.jobsColumnsNames.mode\"></ff-static> <ff-static flex=\"1 0 10%\" class=\"ff-center\" ff-bind=\"::job.blackAndWhiteCount\"></ff-static> <ff-static flex=\"1 0 12%\" class=\"ff-center\" ff-bind=\"::job.fullColorCount\"></ff-static> <ff-static flex=\"1 0 12%\" class=\"ff-center\" ff-bind=\"::job.scanCount\" ng-if=\"$ctrl.jobsColumnsNames.scanCount\"></ff-static> <ff-static flex=\"1 0 12%\" class=\"ff-center\" ff-bind=\"::job.faxCount\" ng-if=\"$ctrl.jobsColumnsNames.faxCount\"></ff-static> </ff-row> <span translate=\"PRINTER_USAGE.JOBS.EMPTY\" ng-if=\"!$ctrl.usage.jobs.length\"></span> <ff-pagination props=\"$ctrl.usage\" ff-click=\"$ctrl.navPage($page)\" ng-if=\"$ctrl.usage.pageCount > 1\"></ff-pagination> </ff-panel> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/printer-usage/printer-usage/printer-usage-list.controller.js":
/*!******************************************************************************!*\
  !*** ./bundles/printer-usage/printer-usage/printer-usage-list.controller.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PrinterUsageListCtrl', ['deskworks.PrinterUsage', 'deskworks.PrintImportProfile', 'ngFileUpload']).controller('PrinterUsageListCtrl', ["$scope", "$q", "$translate", "dwAlerts", "state", "helper", "PrinterUsage", "PrintImportProfile", function ($scope, $q, $translate, dwAlerts, state, helper, PrinterUsage, PrintImportProfile) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('PRINTER_USAGE.LIST.PAGE_TITLE'));

  $ctrl.onInit = function () {
    $ctrl.navPage();
    PrintImportProfile.query({
      centerId: state.getCurrentCenterId()
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get import profiles.');
    }).then(function (profiles) {
      $ctrl.importProfiles = profiles;
      $ctrl.importProfile = $ctrl.importProfiles[0];
    });
  };
  /**
   * Import from CSV button handler
   */


  $ctrl.import = function ($files, $invalidFiles) {
    if ($invalidFiles && $invalidFiles.length > 0) return dwAlerts.error($translate.instant('PRINTER_USAGE.INVALID_FORMAT'));
    if (!$files || !$files.length) return;
    if (helper.pointFirstInvalid('#printerUsageImport')) return;
    $ctrl.spinImport = true;

    var promises = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()($files).call($files, function ($file) {
      return PrinterUsage.import(state.getCurrentCenterId(), $ctrl.importProfile.id, $file).catch(function (err) {
        return dwAlerts.error(err, 'Failed to import ' + $file.name);
      });
    });

    return $q.all(promises).finally(function () {
      return $ctrl.navPage($ctrl.data.page).finally(function () {
        $ctrl.spinImport = false;
      });
    });
  };
  /**
   * Edit Usage button handler
   */


  $ctrl.edit = function (usage) {
    return state.setPath('/printer-usage/' + usage.id);
  };
  /**
   * Navigate page handler
   */


  $ctrl.navPage = function ($page) {
    return PrinterUsage.query(state.getCurrentCenterId(), $page).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query printer usages.');
    }).then(function (result) {
      $ctrl.data = result;
      $ctrl.usages = $ctrl.data.printerUsages;
    });
  };

  $ctrl.onInit();
}]));

/***/ }),

/***/ "./bundles/printer-usage/printer-usage/printer-usage-list.tpl.html":
/*!*************************************************************************!*\
  !*** ./bundles/printer-usage/printer-usage/printer-usage-list.tpl.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"printerUsages\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel ngf-drop=\"true\" ngf-change=\"$ctrl.import($files, $rejectedFiles)\" ngf-multiple=\"true\" ngf-pattern=\"'text/csv,.csv'\" ngf-accept=\"'text/csv,.csv'\" ngf-drag-over-class=\"dragover\"> <ff-row ng-if=\"!$ctrl.usages\" class=\"animate-collapse\"><ff-spin class=\"ff-spin-placeholder\"></ff-spin></ff-row> <ff-header ng-if=\"$ctrl.usages\" class=\"animate-collapse\"> <ff-row> <cell class=\"ff-center\"><span translate=\"PRINTER_USAGE.NUMBER\"></span></cell> <cell flex=\"0 0 40%\" class=\"ff-center\"><span translate=\"PRINTER_USAGE.POST_DATE\"></span></cell> <cell flex=\"0 0 20%\" class=\"ff-center\"><span translate=\"PRINTER_USAGE.POSTED\"></span></cell> <ff-btn flex=\"none\" size=\"xs\" class=\"buttons-row zero-height\"></ff-btn> </ff-row> </ff-header> <ff-row ng-repeat=\"usage in $ctrl.usages\" class=\"animate-collapse\"> <ff-static class=\"ff-center\" ff-bind=\"usage.number\"></ff-static> <ff-static flex=\"0 0 40%\" class=\"ff-center\" ff-bind=\"usage.postDate | date:'mediumDate'\"></ff-static> <ff-static flex=\"0 0 20%\" class=\"ff-center\" ff-bind=\"usage.posted | yesno\"></ff-static> <ff-btn flex=\"none\" sense=\"edit\" size=\"xs\" class=\"buttons-row\" ff-click=\"$ctrl.edit(usage)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> </ff-row> <ff-pagination props=\"$ctrl.data\" ff-click=\"$ctrl.navPage($page)\"></ff-pagination> </ff-panel> <div id=\"printerUsageImport\" class=\"ff-row\" style=\"max-width:450px;margin-left:auto\"> <span flex=\"none\"> <ff-btn sense=\"import\" ff-spin=\"$ctrl.spinImport\" ngf-select=\"$ctrl.import($files, $invalidFiles)\" ngf-multiple=\"true\" ngf-pattern=\"'text/csv,.csv'\" ngf-accept=\"'text/csv,.csv'\"> <span translate=\"PRINTER_USAGE.BTN_IMPORT\"></span> </ff-btn> </span> <label flex=\"auto\" class=\"ff-row\"> <span flex=\"none\" translate=\"PRINTER_USAGE.USING\" style=\"align-items:center;margin:0 .5rem\"></span> <ff-select name=\"importProfile\" ff-model=\"$ctrl.importProfile\" ff-required=\"true\" ff-options=\"profile.name for profile in $ctrl.importProfiles\" ff-validate-alert=\"{{'PRINTER_USAGE.IMPORT_PROFILE' | translate}}\"> </ff-select> </label> </div> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/printer-usage/services/opts-print-formatting-type.service.js":
/*!******************************************************************************!*\
  !*** ./bundles/printer-usage/services/opts-print-formatting-type.service.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Printer Usage Settings -> Import Profiles -> Formatting Type
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsPrintFormattingType', []).factory('optsPrintFormattingType', function () {
  return [{
    id: 'Sharp',
    name: 'Sharp',
    columns: [{
      id: 'colPrinterCode',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.PRINTER_CODE',
      default: 'Login Name'
    }, {
      id: 'colJobMode',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.JOB_MODE',
      default: 'Job Mode'
    }, {
      id: 'colBwCount',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.PRINT_BLACK',
      default: 'Black & White Total Count'
    }, {
      id: 'colColorCount',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.PRINT_COLOR',
      default: 'Full Color Total Count'
    }]
  }, {
    id: 'Canon',
    name: 'Canon',
    columns: [{
      id: 'colPrinterCode',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.PRINTER_CODE',
      default: 'Login Name'
    }, {
      id: 'colBwCount',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.PRINT_BLACK',
      default: 'Black & White Total Count'
    }, {
      id: 'colColorCount',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.PRINT_COLOR',
      default: 'Full Color Total Count'
    }, {
      id: 'colScanCount',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.SCAN',
      default: 'Scan Total Count'
    }, {
      id: 'colFaxCount',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.FAX',
      default: 'Fax Total Count'
    }]
  }, {
    id: 'Ezeep',
    name: 'Ezeep',
    columns: [{
      id: 'colPrinterCode',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.PRINTER_CODE',
      default: 'User'
    }, {
      id: 'colBwCount',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.PRINT_BLACK',
      default: 'B/W'
    }, {
      id: 'colColorCount',
      _name: 'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.PRINT_COLOR',
      default: 'Color'
    }]
  }];
}));

/***/ }),

/***/ "./bundles/printer-usage/services/print-import-profile.service.js":
/*!************************************************************************!*\
  !*** ./bundles/printer-usage/services/print-import-profile.service.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PrintImportProfile', ['ngResource', 'deskworks.config', 'deskworks.optsPrintFormattingType']).factory('PrintImportProfile', ["$resource", "deskworksConfig", "optsPrintFormattingType", function ($resource, deskworksConfig, optsPrintFormattingType) {
  var url = deskworksConfig.getApiAbsUrl('/dw-print/import-profiles/:id');
  var res = $resource(url, {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    new: function _new() {
      return optsPrintFormattingType[0].columns.reduce(function (obj, col) {
        return obj[col.id] = col.default, obj;
      }, {
        formattingType: optsPrintFormattingType[0].id,
        $$formattingType: optsPrintFormattingType[0]
      });
    },
    query: function query(params) {
      return res.query(params).$promise.then(function (profiles) {
        profiles.forEach(function (profile) {
          profile.$$formattingType = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(optsPrintFormattingType).call(optsPrintFormattingType, function (opt) {
            return opt.id === profile.formattingType;
          });
        });
        return profiles;
      });
    },
    save: function save(params, data) {
      return data.id ? res.update(angular.extend({
        id: data.id
      }, params), data).$promise : res.save(params, data).$promise.then(function (result) {
        return data.id = result.id, result;
      });
    },
    delete: function _delete(data) {
      return res.delete({
        id: data.id
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/printer-usage/services/print-usage-type.service.js":
/*!********************************************************************!*\
  !*** ./bundles/printer-usage/services/print-usage-type.service.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PrintUsageType', ['ngResource', 'deskworks.config']).factory('PrintUsageType', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var urlUsageTypes = deskworksConfig.getApiAbsUrl('/dw-print/usage-types');
  var urlPrinterProducts = deskworksConfig.getApiAbsUrl('/dw-print/printer-products');
  var res = $resource(urlUsageTypes, {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  var resUpdate = $resource(urlUsageTypes + '/:usageTypeId', {}, {
    update: {
      method: 'PUT'
    }
  });
  var resPrinterProducts = $resource(urlPrinterProducts, {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  return {
    query: function query(centerId) {
      return res.query(centerId).$promise;
    },
    save: function save(data) {
      return resUpdate.update({
        usageTypeId: data.id
      }, data).$promise;
    },
    getPrinterProducts: function getPrinterProducts() {
      return resPrinterProducts.query().$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/printer-usage/services/printer-usage.service.js":
/*!*****************************************************************!*\
  !*** ./bundles/printer-usage/services/printer-usage.service.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Printer Usage service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PrinterUsage', ['ngResource', 'ngFileUpload', 'deskworks.helper', 'datesDeserializer']).factory('PrinterUsage', ["$resource", "$q", "$filter", "datesDeserializer", "deskworksConfig", "helper", "Upload", function ($resource, $q, $filter, datesDeserializer, deskworksConfig, helper, Upload) {
  var urlBase = deskworksConfig.getApiAbsUrl('/dw-print/printer-usages');
  var url = "".concat(urlBase, "/:id/:action");
  var desDates = datesDeserializer(['printerUsages.postDate', 'postDate']);
  var res = $resource(url, {}, {
    query: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    },
    get: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    },
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query(centerId, page, pageSize) {
      return res.query({
        centerId: centerId || 0,
        page: page || 1,
        pageSize: pageSize || 10
      }).$promise;
    },
    get: function get(id) {
      var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var pageSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
      var sort = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
      return res.get({
        id: id,
        page: page,
        pageSize: pageSize,
        sort: sort
      }).$promise;
    },
    save: function save(usage) {
      var self = this;
      return res.update({
        id: usage.id
      }, self.serialize(usage)).$promise;
    },
    delete: function _delete(id) {
      return res.delete({
        id: id
      }).$promise;
    },
    postCharges: function postCharges(id) {
      return res.save({
        id: id,
        action: 'charge'
      }, {}).$promise;
    },
    import: function _import(centerId, importProfileId, $file) {
      return Upload.upload({
        url: urlBase + '?centerId=' + centerId + '&importProfileId=' + importProfileId,
        method: 'POST',
        withCredentials: true,
        data: {
          file: $file
        }
      });
    },
    serialize: function serialize(usage) {
      return {
        number: usage.number,
        postDate: $filter('date')(usage.postDate, 'yyyy-MM-dd')
      };
    }
  };
}]));

/***/ }),

/***/ "./bundles/printer-usage/settings/print-import-profiles.directive.js":
/*!***************************************************************************!*\
  !*** ./bundles/printer-usage/settings/print-import-profiles.directive.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * importProfiles directive - Import Profiles section of Printer Usage Settings
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.printImportProfilesDirective', ['autoSave', 'deskworks.helper', 'deskworks.state', 'deskworks.PrintImportProfile', 'deskworks.optsPrintFormattingType']).directive('printImportProfiles', function () {
  var templateUrl = 'settings/print-import-profiles.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'PrintImportProfilesCtrl as $ctrl',
    bindToController: {}
  };
}).controller('PrintImportProfilesCtrl', ["$scope", "$translate", "$window", "$q", "state", "autoSave", "helper", "dwAlerts", "PrintImportProfile", "optsPrintFormattingType", function ($scope, $translate, $window, $q, state, autoSave, helper, dwAlerts, PrintImportProfile, optsPrintFormattingType) {
  var $ctrl = this;
  $ctrl.types = optsPrintFormattingType;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    PrintImportProfile.query({
      centerId: state.getCurrentCenterId()
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get import profiles.');
    }).then(function (result) {
      $ctrl.profiles = result;
    });
  };
  /**
   * Create New
   */


  $ctrl.new = function () {
    $ctrl.profiles.push(PrintImportProfile.new());
  };
  /**
   * Save
   */


  $ctrl.save = autoSave.wrap(save);

  function save(profile) {
    return PrintImportProfile.save({
      centerId: state.getCurrentCenterId()
    }, profile).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save print import profile.');
    });
  }
  /**
   * Formatting type change handler
   */


  $ctrl.onTypeChange = function (profile) {
    if (profile.formattingType !== profile.$$formattingType.id) {
      // formatting type changed, apply defaults
      profile.$$formattingType.columns.forEach(function (col) {
        profile[col.id] = col.default;
      });
      profile.formattingType = profile.$$formattingType.id;
    }

    return $ctrl.save(profile);
  };
  /**
   * Delete
   */


  $ctrl.delete = function (profile) {
    if ($window.confirm($translate.instant('PRINTER_USAGE_SETTINGS.CONFIRM_DELETE'))) {
      return $q.when(profile.id ? PrintImportProfile.delete(profile) : null).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete import profile.');
      }).then(function () {
        var _context;

        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.profiles).call(_context, $ctrl.profiles.indexOf(profile), 1);
      });
    }
  };
}]));

/***/ }),

/***/ "./bundles/printer-usage/settings/print-import-profiles.tpl.html":
/*!***********************************************************************!*\
  !*** ./bundles/printer-usage/settings/print-import-profiles.tpl.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"ff-grid gutter-v\" ff-bulk-read-only> <ff-spin class=\"ff-spin-placeholder animate-collapse\" ng-if=\"!$ctrl.profiles\"></ff-spin> <ng-form name=\"profile.$$form\" ng-repeat=\"profile in $ctrl.profiles track by $index\" class=\"animate-collapse\"> <ff-panel> <ff-panel-header ng-if=\"!$index\"> <cell> <span translate=\"PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.HEADER\"></span> <ff-hint flex=\"none\"><span translate=\"PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.HEADER.HINT\"></span></ff-hint> </cell> </ff-panel-header> <ff-spin ng-if=\"profile.$$autoSaving\"></ff-spin> <label class=\"ff-row\"> <ff-label flex=\"0 0 50%\"><req translate=\"PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.NAME\"></req></ff-label> <ff-text ff-model=\"profile.name\" ff-required=\"true\" ff-change=\"$ctrl.save(profile)\" ff-validate-alert=\"{{'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 50%\"><req translate=\"PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.FORMATTING_TYPE\"></req></ff-label> <ff-select ff-model=\"profile.$$formattingType\" ff-required=\"true\" ff-change=\"$ctrl.onTypeChange(profile)\" ff-validate-alert=\"{{'PRINTER_USAGE_SETTINGS.IMPORT_PROFILES.FORMATTING_TYPE' | translate}}\" ff-options=\"type as type.name for type in $ctrl.types\"> </ff-select> </label> <label class=\"ff-row\" ng-repeat=\"col in profile.$$formattingType.columns\"> <ff-label flex=\"0 0 50%\"><req translate=\"{{col._name}}\"></req></ff-label> <ff-text ff-model=\"profile[col.id]\" ff-required=\"true\" ff-change=\"$ctrl.save(profile)\" ff-validate-alert=\"{{col._name | translate}}\"></ff-text> </label> <ff-btn-group class=\"ff-section-buttons\"> <ff-btn sense=\"delete\" size=\"sm\" ff-click=\"$ctrl.delete(profile)\"><span translate=\"GLOBAL.BTN_DELETE\"></span></ff-btn> </ff-btn-group> </ff-panel> </ng-form> <ff-btn-group> <ff-btn sense=\"new\" size=\"sm\" ff-click=\"$ctrl.new()\"><span translate=\"PRINTER_USAGE_SETTINGS.NEW_IMPORT_PROFILE\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/printer-usage/settings/print-part-numbers.directive.js":
/*!************************************************************************!*\
  !*** ./bundles/printer-usage/settings/print-part-numbers.directive.js ***!
  \************************************************************************/
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




/**
 * printPartNumbers directive - Part Numbers Mapping section of Printer Usage Settings
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.printPartNumbersDirective', ['autoSave', 'deskworks.helper', 'deskworks.state', 'deskworks.PrintUsageType']).directive('printPartNumbers', function () {
  var templateUrl = 'settings/print-part-numbers.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'PrintPartNumbersCtrl as $ctrl',
    bindToController: {}
  };
}).controller('PrintPartNumbersCtrl', ["$scope", "$translate", "$window", "$q", "state", "autoSave", "helper", "dwAlerts", "PrintUsageType", function ($scope, $translate, $window, $q, state, autoSave, helper, dwAlerts, PrintUsageType) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    PrintUsageType.query({
      centerId: state.getCurrentCenterId()
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get printer usage types.');
    }).then(function (types) {
      $ctrl.usageTypes = types;
    });
    PrintUsageType.getPrinterProducts().catch(function (err) {
      return dwAlerts.error(err, 'Failed to get printer products.');
    }).then(function (products) {
      $ctrl.products = products;
    });
  };
  /**
   * Save Product Mapping
   */


  $ctrl.save = autoSave.wrap(saveProductMapping);

  function saveProductMapping(usageType) {
    $ctrl.saving = true;
    return PrintUsageType.save(usageType).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save printer usage type.');
    }).finally(function () {
      $ctrl.saving = false;
    });
  }
  /**
   * Add Product Mapping
   */


  $ctrl.add = function (usageType) {
    var mappings = usageType.productMappings;
    mappings.push({
      from: mappings.length ? null : 1,
      to: null
    });
  };
  /**
   * Delete Product Mapping
   */


  $ctrl.delete = function (usageType, index) {
    var mappings = usageType.productMappings;

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(mappings).call(mappings, index, 1);

    if (mappings.length) mappings[mappings.length - 1].to = null;
    if (mappings.length) mappings[0].from = 1;
    return PrintUsageType.save(usageType).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save printer usage type.');
    }).finally(function () {
      $ctrl.saving = false;
    });
  };
}]));

/***/ }),

/***/ "./bundles/printer-usage/settings/print-part-numbers.tpl.html":
/*!********************************************************************!*\
  !*** ./bundles/printer-usage/settings/print-part-numbers.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div ff-bulk-read-only> <ff-panel> <ff-panel-header><span translate=\"PRINTER_USAGE_SETTINGS.PART_NUMBERS.HEADER\"></span></ff-panel-header> <ff-header> <ff-row> <cell flex=\"0 0 50px\" class=\"ff-center\" title=\"{{'PRINTER_USAGE_SETTINGS.PART_NUMBERS.FROM.HINT' | translate}}\"> <span translate=\"PRINTER_USAGE_SETTINGS.PART_NUMBERS.FROM\"></span> </cell> <cell flex=\"0 0 50px\" class=\"ff-center\" title=\"{{'PRINTER_USAGE_SETTINGS.PART_NUMBERS.TO.HINT' | translate}}\"> <span translate=\"PRINTER_USAGE_SETTINGS.PART_NUMBERS.TO\"></span> </cell> <cell title=\"{{'PRINTER_USAGE_SETTINGS.PART_NUMBERS.MAP_TO.HINT' | translate}}\"> <span translate=\"PRINTER_USAGE_SETTINGS.PART_NUMBERS.MAP_TO\"></span> </cell> </ff-row> </ff-header> <ff-row><ff-spin class=\"ff-spin-placeholder animate-collapse\" ng-if=\"!$ctrl.usageTypes\"></ff-spin></ff-row> <ng-form name=\"usageType.$$form\" ng-repeat=\"usageType in $ctrl.usageTypes\" class=\"ff-col animate-collapse\"> <ff-row> <ff-label class=\"em\"> {{usageType.type}} <ff-spin ng-if=\"usageType.$$autoSaving\" class=\"ff-spin-sm\" style=\"margin:0 .5rem 0 auto\"></ff-spin> </ff-label> <ff-btn sense=\"add\" size=\"xs\" flex=\"none\" class=\"buttons-row\" ff-click=\"$ctrl.add(usageType)\" title=\"{{'PRINTER_USAGE_SETTINGS.PART_NUMBERS.BTN_ADD.HINT' | translate}}\"></ff-btn> </ff-row> <ff-row ng-repeat=\"mapping in usageType.productMappings\"> <ff-number flex=\"0 0 50px\" class=\"ff-center\" ff-model=\"mapping.from\" ff-required=\"true\" ff-disabled=\"!$index\" ff-lt=\"mapping.to\" ff-gt=\"usageType.productMappings[$index - 1].to\" ff-change=\"$ctrl.save(usageType)\" ff-validate-alert=\"{{'PRINTER_USAGE_SETTINGS.PART_NUMBERS.FROM.HINT' | translate}}\"></ff-number> <ff-number flex=\"0 0 50px\" class=\"ff-center\" ff-model=\"mapping.to\" ff-required=\"true\" ff-change=\"$ctrl.save(usageType)\" ff-validate-alert=\"{{'PRINTER_USAGE_SETTINGS.PART_NUMBERS.TO.HINT' | translate}}\" ff-gt=\"mapping.from\" ff-lt=\"usageType.productMappings[$index + 1].from\" ng-if=\"$index < usageType.productMappings.length - 1\"></ff-number> <ff-static flex=\"0 0 50px\" class=\"ff-center\" ff-disabled=\"true\" ng-if=\"$index === usageType.productMappings.length - 1\">&infin;</ff-static> <ff-select ff-model=\"mapping.productId\" ff-required=\"true\" ff-change=\"$ctrl.save(usageType)\" ff-validate-alert=\"{{'PRINTER_USAGE_SETTINGS.PART_NUMBERS.MAP_TO.HINT' | translate}}\" ff-options=\"product.id as product.name for product in $ctrl.products\"> </ff-select> <ff-btn sense=\"remove\" size=\"xs\" flex=\"none\" class=\"buttons-row\" ff-click=\"$ctrl.delete(usageType, $index)\" title=\"{{'PRINTER_USAGE_SETTINGS.PART_NUMBERS.BTN_DELETE.HINT' | translate}}\"></ff-btn> </ff-row> </ng-form> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/printer-usage/settings/printer-usage-settings.controller.js":
/*!*****************************************************************************!*\
  !*** ./bundles/printer-usage/settings/printer-usage-settings.controller.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print_import_profiles_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-import-profiles.directive */ "./bundles/printer-usage/settings/print-import-profiles.directive.js");
/* harmony import */ var _print_part_numbers_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-part-numbers.directive */ "./bundles/printer-usage/settings/print-part-numbers.directive.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.printerUsageSettings', ['deskworks.state', _print_import_profiles_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, _print_part_numbers_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name]).controller('PrinterUsageSettingsCtrl', ["$scope", "$translate", "dwAlerts", "state", function ($scope, $translate, dwAlerts, state) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('PRINTER_USAGE_SETTINGS.PAGE_TITLE'));
}]));

/***/ }),

/***/ "./bundles/printer-usage/settings/printer-usage-settings.tpl.html":
/*!************************************************************************!*\
  !*** ./bundles/printer-usage/settings/printer-usage-settings.tpl.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"printerUsageSettings\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <print-import-profiles flex=\"{lg: '0 0 50%'}\"></print-import-profiles> <print-part-numbers flex=\"{lg: '0 0 50%'}\"></print-part-numbers> </div> </div> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=printer-usage~._bundles_printer-usage .js.map?_rev=eebb4901da766fa1eb8a