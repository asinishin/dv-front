(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice~._bundles_invoice_c"],{

/***/ "./bundles/invoice/common sync recursive .*\\.tpl\\.html$":
/*!****************************************************!*\
  !*** ./bundles/invoice/common sync .*\.tpl\.html$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./invoice.tpl.html": "./bundles/invoice/common/invoice.tpl.html"
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
webpackContext.id = "./bundles/invoice/common sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/invoice/common/invoice-load-module.service.js":
/*!***************************************************************!*\
  !*** ./bundles/invoice/common/invoice-load-module.service.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.invoiceLoadModule', []).factory('invoiceLoadModule', ["$injector", function ($injector) {
  var modules = {
    standard: function standard() {
      return __webpack_require__.e(/*! import() | invoice-standard */ "invoice-standard~._bundles_invoice_c").then(__webpack_require__.bind(null, /*! ../standard/index.js */ "./bundles/invoice/standard/index.js"));
    },
    alternate: function alternate() {
      return __webpack_require__.e(/*! import() | invoice-alternate */ "invoice-alternate~._bundles_invoice_a").then(__webpack_require__.bind(null, /*! ../alternate/index.js */ "./bundles/invoice/alternate/index.js"));
    }
  };
  return function (id) {
    return (modules[id] || modules.standard)().then(function (m) {
      return $injector.invoke(m.default);
    });
  };
}]));

/***/ }),

/***/ "./bundles/invoice/common/invoice.controller.js":
/*!******************************************************!*\
  !*** ./bundles/invoice/common/invoice.controller.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_dw_controls_dw_address_dw_address_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/dw-controls/dw-address/dw-address.directive */ "./shared/dw-controls/dw-address/dw-address.directive.js");
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");
/* harmony import */ var _invoice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./invoice.service */ "./bundles/invoice/common/invoice.service.js");
/* harmony import */ var _invoice_load_module_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./invoice-load-module.service */ "./bundles/invoice/common/invoice-load-module.service.js");







function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.invoice', ['debounce', 'deskworks.state', 'deskworks.userProfile.service', 'deskworks.setup.service', shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_12__["default"].name, shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_10__["default"].name, shared_dw_controls_dw_address_dw_address_directive__WEBPACK_IMPORTED_MODULE_9__["default"].name, _invoice_service__WEBPACK_IMPORTED_MODULE_13__["default"].name, _invoice_load_module_service__WEBPACK_IMPORTED_MODULE_14__["default"].name]).controller('InvoiceCtrl', ["$rootScope", "$scope", "$route", "$filter", "$timeout", "$q", "$translate", "dwAlerts", "debounce", "reportHelper", "state", "helper", "orderId", "userProfileService", "Invoice", "setupService", "invoiceLoadModule", function ($rootScope, $scope, $route, $filter, $timeout, $q, $translate, dwAlerts, debounce, reportHelper, state, helper, orderId, userProfileService, Invoice, setupService, invoiceLoadModule) {
  var $ctrl = this;
  var paramsChanged = reportHelper.paramsChanged,
      loadResources = reportHelper.loadResources;
  $ctrl.config = {
    footer: function footer() {
      return null;
    }
  };
  $ctrl.params = {
    centerId: state.getCurrentCenterId(),
    paperLayout: 'p',
    date: moment(),
    dueDate: moment(),
    showDates: true
  };
  $ctrl.resources = null;
  $ctrl.data = null;
  state.setPageTitle($translate.instant($translate.instant(orderId ? 'INVOICE.INVOICE_NAME' : 'INVOICE.PAGE_TITLE', {
    orderId: orderId
  })));

  function loadExtraResources() {
    var user = userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get user profile.');
    });
    var settings = setupService.getSetupSettings().catch(function (err) {
      return dwAlerts.error(err, 'Failed to get setup settings.');
    });
    var module = settings.then(function (settings) {
      return invoiceLoadModule(settings.invoiceTemplate);
    });
    return {
      user: user,
      settings: settings,
      module: module
    };
  }
  /**
   * Watch report params and generate new report
   */


  $scope.$watch('$ctrl.params', debounce(function (np, op) {
    $ctrl.pdf = null;
    if (helper.pointFirstInvalid('#invoice')) return;
    $q.all({
      resources: $ctrl.resources || loadResources(loadExtraResources),
      data: $ctrl.data || Invoice.get({
        centerId: $ctrl.params.centerId,
        userId: state.getCurrentUserId(),
        orderId: orderId
      }).catch(function (err) {
        return dwAlerts.error(err, 'Failed to get invoice.');
      })
    }).then(function (result) {
      $ctrl.resources = result.resources;
      $ctrl.data = result.data;
      $ctrl.config.styles = angular.copy($ctrl.resources.module.styles);
      $ctrl.config.header = $ctrl.resources.module.header;
      $ctrl.config.body = $ctrl.resources.module.body;
      $ctrl.columns = angular.copy($ctrl.resources.module.columns);
    }).then(function () {
      var _context, _context2, _context3;

      if ($ctrl.data.date && !$ctrl.data.date.isSame($ctrl.params.date) || $ctrl.data.dueDate && !$ctrl.data.dueDate.isSame($ctrl.params.dueDate) || !$ctrl.params.address && $ctrl.resources.user.addresses[0]) {
        $ctrl.params.date = $ctrl.data.date || $ctrl.params.date;
        $ctrl.params.dueDate = $ctrl.data.dueDate || $ctrl.params.dueDate;
        $ctrl.params.address = $ctrl.params.address || $ctrl.resources.user.addresses[0];
        return; // skip for next firing of current watcher
      }

      $ctrl.payments = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6___default()(_context = $ctrl.data.items).call(_context, function (item) {
        return item.type === 'payment' || item.type === 'refund';
      });
      $ctrl.charges = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6___default()(_context2 = $ctrl.data.items).call(_context2, function (item) {
        return item.type !== 'payment' && item.type !== 'refund';
      });

      var center = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_7___default()(_context3 = $ctrl.resources.centers).call(_context3, function (i) {
        return i.id === $ctrl.params.centerId;
      });

      $ctrl.config.orderId = $ctrl.data.invoiceNumber;
      $ctrl.config.reportName = $translate.instant(center.taxId ? 'INVOICE.TAX_INVOICE_NAME' : 'INVOICE.INVOICE_NAME', {
        orderId: $ctrl.config.orderId
      });
      $ctrl.config.userName = $ctrl.resources.user.fullName;
      $ctrl.config.userCompany = $ctrl.resources.user.company;
      if (center.street2) $ctrl.config.styles.startY += 12;
      if (center.taxId) $ctrl.config.styles.startY += 12;
      var report = $ctrl.config.body({
        config: $ctrl.config,
        params: $ctrl.params,
        data: $ctrl.data,
        columns: $ctrl.columns,
        resources: $ctrl.resources
      });
      var doc = reportHelper.buildPdf({
        config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
        report: report,
        resources: $ctrl.resources
      });
      $ctrl.pdf = doc.output('blob');
    });
  }, 100), true);
  /**
   * Items watcher
   */

  $scope.$watchCollection(function () {
    var _context4;

    return $ctrl.data && $ctrl.data.items && _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8___default()(_context4 = $ctrl.data.items).call(_context4, function (i) {
      return i.include;
    });
  }, function () {
    var _context5;

    if (!$ctrl.data || !$ctrl.data.items) return;
    $ctrl.params.items = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6___default()(_context5 = $ctrl.data.items).call(_context5, function (i) {
      return i.include;
    }).reduce(function (o, i) {
      return o[i.id] = true, o;
    }, {});
  });
  /**
   * Select address handler
   */

  $ctrl.selectAddress = function (address) {
    $ctrl.params.address = address;
  };
  /**
   * Download generated PDF report
   */


  $ctrl.downloadPdf = function () {
    if (!$ctrl.pdf) return;
    var fileName = reportHelper.getReportFileName({
      extension: 'pdf',
      config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
      resources: $ctrl.resources
    });
    reportHelper.download({
      blob: $ctrl.pdf,
      fileName: fileName
    });
  }; // Due to route.reloadOnSearch: false


  var offChangeCenter = $rootScope.$on('CHANGE-CENTER', backOrReload);
  var offChangeUser = $rootScope.$on('CHANGE-USER', backOrReload);

  function backOrReload() {
    if ($scope.$resolve.back) return $scope.$resolve.back();
    $route.reload();
  }

  $scope.$on('$destroy', function (_) {
    offChangeCenter();
    offChangeUser();
  });
}]));

/***/ }),

/***/ "./bundles/invoice/common/invoice.service.js":
/*!***************************************************!*\
  !*** ./bundles/invoice/common/invoice.service.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Invoice service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.Invoice', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('Invoice', ["$resource", "$q", "datesDeserializer", "deskworksConfig", function ($resource, $q, datesDeserializer, deskworksConfig) {
  var desDates = datesDeserializer(['items.date', 'date', 'dueDate']);
  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/generate-invoices');
  var res = $resource(url, {
    centerId: '@centerId',
    userId: '@userId',
    orderId: '@orderId'
  }, {
    get: {
      method: 'GET',
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    /**
     * @param params.centerId
     * @param params.userId
     * @param params.orderId
     */
    get: function get(params) {
      return res.get({
        centerId: params.centerId,
        userId: params.userId,
        orderId: params.orderId
      }).$promise.then(function (result) {
        return result.items.forEach(function (i) {
          i.include = true;
        }), result;
      });
    }
  };
}]));

/***/ }),

/***/ "./bundles/invoice/common/invoice.tpl.html":
/*!*************************************************!*\
  !*** ./bundles/invoice/common/invoice.tpl.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"formGenerateInvoice\" class=\"gutter-v\" id=\"invoice\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div> <div class=\"ff-grid gutter-v gutter-h\" ng-hide=\"$resolve.orderId\"> <ff-panel flex=\"{lg: '0 0 50%', md: '0 0 100%'}\" ng-if=\"!$ctrl.resources.user\"> <div><ff-spin class=\"ff-spin-placeholder\"></ff-spin></div> </ff-panel> <ff-panel flex=\"{lg: '0 0 50%', md: '0 0 100%'}\" ng-repeat=\"address in $ctrl.resources.user.addresses\"> <ff-panel-header> <ff-row class=\"gutter-h-half\"> <span translate=\"INVOICE.ADDRESS.HEADER\"></span> <div flex=\"0 0 auto\" style=\"align-items:center;margin:-.5rem 0\"> <ff-btn sense=\"favorite\" size=\"sm\" ng-if=\"address === $ctrl.params.address\" title=\"{{'INVOICE.ADDRESS.BTN_SELECTED.HINT' | translate}}\"> <span translate=\"INVOICE.ADDRESS.BTN_SELECTED\"></span> </ff-btn> <ff-btn sense=\"makeFavorite\" size=\"sm\" ng-if=\"address !== $ctrl.params.address\" ff-click=\"$ctrl.selectAddress(address)\" title=\"{{'INVOICE.ADDRESS.BTN_SELECT.HINT' | translate}}\"> <span translate=\"INVOICE.ADDRESS.BTN_SELECT\"></span> </ff-btn> </div> </ff-row> </ff-panel-header> <fieldset dw-address=\"address\" ng-disabled=\"address !== $ctrl.params.address\"></fieldset> </ff-panel> </div> </div> <div class=\"ff-grid gutter-h\" ng-hide=\"$resolve.orderId\"> <ff-panel flex=\"{lg: '0 0 50%', md: '0 0 100%'}\"> <ff-panel-header><span translate=\"INVOICE.DATES.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 116px\"><req translate=\"INVOICE.DATES.END_DATE\"></req></ff-label> <ff-date ff-model=\"$ctrl.params.date\" ff-required=\"true\" ff-validate-alert=\"{{'INVOICE.DATES.END_DATE' | translate}}\"></ff-date> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 116px\"><req translate=\"INVOICE.DATES.DUE_DATE\"></req></ff-label> <ff-date ff-model=\"$ctrl.params.dueDate\" ff-required=\"true\" ff-validate-alert=\"{{'INVOICE.DATES.DUE_DATE' | translate}}\"></ff-date> </label> <label> <ff-checkbox ff-model=\"$ctrl.params.showDates\" ff-click=\"$ctrl.columns[0].include = $ctrl.params.showDates\" ff-label=\"{{'INVOICE.DATES.ADD_DATE_TO_ALL_ITEMS' | translate}}\"></ff-checkbox> </label> </ff-panel> </div> <div> <div class=\"ff-grid gutter-v gutter-h\" ng-hide=\"$resolve.orderId\"> <ff-panel flex=\"{lg: '0 0 50%', md: '0 0 100%'}\"> <ff-panel-header><span translate=\"INVOICE.ITEMS.HEADER\"></span></ff-panel-header> <ff-row> <label flex=\"0 0 auto\"> <ff-include-all flex=\"0 0 32px\" items=\"$ctrl.charges\" default=\"true\"></ff-include-all> </label> </ff-row> <ff-header> <ff-row> <cell flex=\"0 0 32px\" class=\"ff-center\"><ff-icon sense=\"check\"></ff-icon></cell> <cell flex=\"1 1 100px\" ng-if=\"$ctrl.params.showDates\"><span translate=\"INVOICE.ITEMS.DATE\"></span></cell> <cell flex=\"2 1 100px\"><span translate=\"INVOICE.ITEMS.NAME\"></span></cell> <cell flex=\"0 0 80px\" class=\"ff-right\"><span translate=\"INVOICE.ITEMS.AMOUNT\"></span></cell> </ff-row> </ff-header> <div ng-if=\"!$ctrl.charges\"><ff-spin class=\"ff-spin-placeholder\"></ff-spin></div> <ff-static ng-if=\"$ctrl.charges && !$ctrl.charges.length\" class=\"ff-no-frame\"> <span translate=\"GLOBAL.NONE\"></span> </ff-static> <label ng-repeat=\"charge in $ctrl.charges\" class=\"ff-row\"> <ff-static flex=\"0 0 32px\" class=\"ff-center\"> <ff-checkbox ff-model=\"charge.include\"></ff-checkbox> </ff-static> <ff-static flex=\"1 1 100px\" ng-if=\"$ctrl.params.showDates\">{{charge.date | date:'mediumDate'}}</ff-static> <ff-static flex=\"2 1 100px\" ff-bind=\"charge.name\"></ff-static> <ff-static flex=\"0 0 80px\" ff-bind=\"charge.amount | ncurrency\" class=\"ff-right\"></ff-static> </label> </ff-panel> <ff-panel flex=\"{lg: '0 0 50%', md: '0 0 100%'}\"> <ff-panel-header><span translate=\"INVOICE.PAYMENTS.HEADER\"></span></ff-panel-header> <ff-row> <label flex=\"0 0 auto\"> <ff-include-all flex=\"0 0 32px\" items=\"$ctrl.payments\" default=\"true\"></ff-include-all> </label> </ff-row> <ff-header> <ff-row> <cell flex=\"0 0 32px\" class=\"ff-center\"><ff-icon sense=\"check\"></ff-icon></cell> <cell><span translate=\"INVOICE.PAYMENTS.DATE\"></span></cell> <cell flex=\"0 0 80px\" class=\"ff-right\"><span translate=\"INVOICE.PAYMENTS.AMOUNT\"></span></cell> </ff-row> </ff-header> <div ng-if=\"!$ctrl.payments\"><ff-spin class=\"ff-spin-placeholder\"></ff-spin></div> <ff-static ng-if=\"$ctrl.payments && !$ctrl.payments.length\" class=\"ff-no-frame\"> <span translate=\"GLOBAL.NONE\"></span> </ff-static> <label ng-repeat=\"payment in $ctrl.payments\" class=\"ff-row\"> <ff-static flex=\"0 0 32px\" class=\"ff-center\"> <ff-checkbox ff-model=\"payment.include\"></ff-checkbox> </ff-static> <ff-static ff-bind=\"payment.date | date:'mediumDate'\"></ff-static> <ff-static flex=\"0 0 80px\" ff-bind=\"payment.amount | ncurrency\" class=\"ff-right\"></ff-static> </label> </ff-panel> </div> </div> <div class=\"ff-grid gutter-v\"> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-bottom\" style=\"margin-top:0\"> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"INVOICE.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"$resolve.back()\" ng-if=\"$resolve.back\"> <span translate=\"GLOBAL.BTN_BACK\"></span> </ff-btn> </ff-btn-group> <div flex=\"{lg: '0 0 33%', md: '0 0 100%'}\" style=\"margin-bottom:0\"> <report-options model=\"$ctrl.params\" no-centers=\"true\"></report-options> </div> </div> <ff-panel> <ff-panel-header><span translate=\"INVOICE.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/invoice/index.js":
/*!**********************************!*\
  !*** ./bundles/invoice/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_invoice_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/invoice.controller */ "./bundles/invoice/common/invoice.controller.js");





var index = ['$injector', function index($injector) {
  // // JS
  // const importAll = r => r.keys().map(r);
  // const js = importAll(require.context('./', true, /\..+\/.+\.js$/));
  // $injector.loadNewModules(js.map(m => m.default.name));
  $injector.loadNewModules([_common_invoice_controller__WEBPACK_IMPORTED_MODULE_4__["default"].name]); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/invoice/common sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_0___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

}]);
//# sourceMappingURL=invoice~._bundles_invoice_c.js.map?_rev=e490fc34e283cb8faea8