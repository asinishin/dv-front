(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-assignment~.."],{

/***/ "../node_modules/core-js/internals/array-method-has-species-support.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-has-species-support.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.filter.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./bundles/payments-assignment sync recursive .*\\.tpl\\.html$":
/*!*********************************************************!*\
  !*** ./bundles/payments-assignment sync .*\.tpl\.html$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bulk-assignment/bulk-assignment-filter.tpl.html": "./bundles/payments-assignment/bulk-assignment/bulk-assignment-filter.tpl.html",
	"./bulk-assignment/bulk-assignment.tpl.html": "./bundles/payments-assignment/bulk-assignment/bulk-assignment.tpl.html",
	"./dialog/payments-assignment-dialog.tpl.html": "./bundles/payments-assignment/dialog/payments-assignment-dialog.tpl.html",
	"./discount-assignment/discount-assignment.tpl.html": "./bundles/payments-assignment/discount-assignment/discount-assignment.tpl.html",
	"./payments-assignment/payments-assignment.tpl.html": "./bundles/payments-assignment/payments-assignment/payments-assignment.tpl.html"
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
webpackContext.id = "./bundles/payments-assignment sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/payments-assignment/bulk-assignment/bulk-assignment-filter.directive.js":
/*!*****************************************************************************************!*\
  !*** ./bundles/payments-assignment/bulk-assignment/bulk-assignment-filter.directive.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bulk_assignment_filter_tpl_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bulk-assignment-filter.tpl.html */ "./bundles/payments-assignment/bulk-assignment/bulk-assignment-filter.tpl.html");
/* harmony import */ var _bulk_assignment_filter_tpl_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bulk_assignment_filter_tpl_html__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bulkPaymentsAssignmentFilterDirective', []).directive('bulkPaymentsAssignmentFilter', ["$compile", function ($compile) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    priority: 2,
    // To be higher than ngModel directive with priority: 1
    controller: 'BulkPaymentsAssignmentFilterCtrl as $ctrl',
    bindToController: {
      model: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      $transclude(function (clone, newScope) {
        var tpl = $compile(_bulk_assignment_filter_tpl_html__WEBPACK_IMPORTED_MODULE_6___default.a)($scope);
        angular.element(tpl[0].querySelector ? tpl[0].querySelector('.ff-panel-body') : tpl).append(clone); // append custom content before compilation

        $element.after(tpl);
      });
    }
  };
}]).controller('BulkPaymentsAssignmentFilterCtrl', ["$scope", "$location", "$filter", "$translate", function ($scope, $location, $filter, $translate) {
  var $ctrl = this;
  $ctrl.filters = [{
    id: 'all',
    name: $translate.instant('PAYMENTS_ASSIGNMENT.FILTER.ALL'),
    predicate: {}
  }, {
    id: 'withoutAssignment',
    name: $translate.instant('PAYMENTS_ASSIGNMENT.FILTER.WITHOUT_ASSIGNMENT'),
    predicate: {
      hasPaymentAssignments: false
    }
  }, {
    id: 'withAssignment',
    name: $translate.instant('PAYMENTS_ASSIGNMENT.FILTER.WITH_ASSIGNMENT'),
    predicate: {
      hasPaymentAssignments: true
    }
  }, {
    id: 'withManualAssignment',
    name: $translate.instant('PAYMENTS_ASSIGNMENT.FILTER.WITH_MANUAL_ASSIGNMENT'),
    predicate: {
      manualPaymentAssignment: true
    }
  }];
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    watchFromDate();
    watchToDate();
    watchFilter();
  };
  /**
   * Map fromDate to URL search param
   */


  function watchFromDate() {
    $scope.$watch(function () {
      return $location.search().fromDate;
    }, function (val) {
      var date = $filter('toDate')(val);
      $ctrl.model.fromDate = moment.isMoment(date) && !$ctrl.model.fromDate.isSame(date) ? date : $ctrl.model.fromDate;
    });
    $scope.$watch('$ctrl.model.fromDate', function (val) {
      if (!moment.isMoment(val)) return;
      $location.search('fromDate', $filter('date')(val, 'yyyy-MM-dd')).replace();
    });
  }
  /**
   * Map toDate to URL search param
   */


  function watchToDate() {
    $scope.$watch(function () {
      return $location.search().toDate;
    }, function (val) {
      var date = $filter('toDate')(val);
      $ctrl.model.toDate = moment.isMoment(date) && !$ctrl.model.toDate.isSame(date) ? date : $ctrl.model.toDate;
    });
    $scope.$watch('$ctrl.model.toDate', function (val) {
      if (!moment.isMoment(val)) return;
      $location.search('toDate', $filter('date')(val, 'yyyy-MM-dd')).replace();
    });
  }
  /**
   * Map filter to URL search param
   */


  function watchFilter() {
    $scope.$watch(function () {
      return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()($location.search());
    }, function (val) {
      var _context;

      $ctrl.model.filter = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context = $ctrl.filters).call(_context, function (f) {
        return f.id === val;
      }) || $ctrl.filters[0];
    });
    $scope.$watch('$ctrl.model.filter', function (val) {
      $location.search('filter', val.id).replace();
    });
  }
}]));

/***/ }),

/***/ "./bundles/payments-assignment/bulk-assignment/bulk-assignment-filter.tpl.html":
/*!*************************************************************************************!*\
  !*** ./bundles/payments-assignment/bulk-assignment/bulk-assignment-filter.tpl.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <div class=\"ff-grid gutter-h\"> <div class=\"ff-grid\" flex=\"{lg: '0 0 50%'}\"> <label class=\"ff-row\" flex=\"{sm: '0 0 50%'}\" ng-if=\"$ctrl.model.fromDate !== false\"> <ff-label flex=\"{sm: '0 0 50px', xs: '0 0 50px'}\" ff-required=\"true\"><span translate=\"PAYMENTS_ASSIGNMENT.FROM\"></span></ff-label> <ff-date flex=\"0 0 124px\" ff-model=\"$ctrl.model.fromDate\" ff-required=\"true\" ff-date-order=\"{ early: $ctrl.model.fromDate, late: $ctrl.model.toDate }\" ff-validate-alert=\"{ field: '{{'PAYMENTS_ASSIGNMENT.FROM' | translate}}', late: '{{'PAYMENTS_ASSIGNMENT.TO' | translate}}' }\"></ff-date> <span class=\"ff-label\"></span> </label> <label class=\"ff-row\" flex=\"{sm: '0 0 50%'}\"> <ff-label flex=\"{sm: '0 0 32px', xs: '0 0 50px'}\" ff-required=\"true\"><span translate=\"PAYMENTS_ASSIGNMENT.TO\"></span></ff-label> <ff-date flex=\"0 0 124px\" ff-model=\"$ctrl.model.toDate\" ff-required=\"true\" ff-date-order=\"{ early: $ctrl.model.fromDate, late: $ctrl.model.toDate }\" ff-validate-alert=\"{ field: '{{'PAYMENTS_ASSIGNMENT.TO' | translate}}', early: '{{'PAYMENTS_ASSIGNMENT.FROM' | translate}}' }\"></ff-date> <span class=\"ff-label\"></span> </label> </div> <ff-row flex=\"{lg: '0 0 50%'}\"> <ff-label flex=\"0 0 60px\"><span translate=\"PAYMENTS_ASSIGNMENT.FILTER\"></span></ff-label> <ff-select ff-model=\"$ctrl.model.filter\" ff-options=\"opt.name for opt in $ctrl.filters\"></ff-select> </ff-row> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/payments-assignment/bulk-assignment/bulk-assignment.controller.js":
/*!***********************************************************************************!*\
  !*** ./bundles/payments-assignment/bulk-assignment/bulk-assignment.controller.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shared_dw_invoice_dw_invoice_small_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice-small.directive */ "./shared/dw-invoice/dw-invoice-small.directive.js");
/* harmony import */ var _bulk_assignment_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bulk-assignment.service */ "./bundles/payments-assignment/bulk-assignment/bulk-assignment.service.js");
/* harmony import */ var _bulk_assignment_filter_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bulk-assignment-filter.directive */ "./bundles/payments-assignment/bulk-assignment/bulk-assignment-filter.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, key)); }); } } return target; }








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.BulkPaymentsAssignmentCtrl', [_bulk_assignment_service__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_dw_invoice_dw_invoice_small_directive__WEBPACK_IMPORTED_MODULE_10__["default"].name, _bulk_assignment_filter_directive__WEBPACK_IMPORTED_MODULE_12__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_13__["default"].name, 'debounce']).controller('BulkPaymentsAssignmentCtrl', ["$scope", "$translate", "$timeout", "dwAlerts", "state", "helper", "debounce", "BulkPaymentsAssignment", "reportHelper", function ($scope, $translate, $timeout, dwAlerts, state, helper, debounce, BulkPaymentsAssignment, reportHelper) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('PAYMENTS_ASSIGNMENT.BULK.PAGE_TITLE'));
  var paramsChanged = reportHelper.paramsChanged;
  $ctrl.filters = {
    fromDate: moment().subtract(1, 'month').startOf('month'),
    toDate: moment().subtract(1, 'month').endOf('month')
  };

  $ctrl.onInit = function () {
    var fetch = debounce(function () {
      $ctrl.orders = [];
      $ctrl.fetch();
    }, 500);
    $scope.$watch('$ctrl.filters', function (np, op) {
      if (paramsChanged(np, op, ['fromDate', 'toDate']) || !$ctrl.orders) {
        fetch();
      }
    }, true);
  };
  /**
   * Fetch
   */


  $ctrl.fetch = function () {
    if ($ctrl.fetching) return $ctrl.fetching;
    $ctrl.fetching = BulkPaymentsAssignment.query(_objectSpread({
      centerId: state.getCurrentCenterId()
    }, helper.pick($ctrl.filters, ['fromDate', 'toDate']))).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query bulk payments assignment.');
    }).finally(function () {
      $ctrl.fetching = null;
    }).then(function (result) {
      $ctrl.orders = result;
    });
  };
  /**
   * Assign Payments
   */


  $ctrl.assign = function () {
    var _context;

    var orders = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(_context = $ctrl.orders || []).call(_context, function (o) {
      return o.include;
    });

    var data = {
      invoices: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(orders).call(orders, function (o) {
        return o.id;
      })
    };
    if (!orders.length) return dwAlerts.error($translate.instant('BULK_INVOICING.NOTHING_SELECTED'));
    return BulkPaymentsAssignment.save(data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to assign payments.');
    }).then(function () {
      dwAlerts.info($translate.instant('PAYMENTS_ASSIGNMENT.BULK.SUCCESS'));
      orders.forEach(function (o) {
        o.hasPaymentAssignments = true;
      });
    });
  };

  $timeout(function () {
    return $ctrl.onInit();
  });
}]));

/***/ }),

/***/ "./bundles/payments-assignment/bulk-assignment/bulk-assignment.service.js":
/*!********************************************************************************!*\
  !*** ./bundles/payments-assignment/bulk-assignment/bulk-assignment.service.js ***!
  \********************************************************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.BulkPaymentsAssignment', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('BulkPaymentsAssignment', ["$resource", "$timeout", "$filter", "deskworksConfig", "datesDeserializer", function ($resource, $timeout, $filter, deskworksConfig, datesDeserializer) {
  var desDates = datesDeserializer(['date', 'items.date']);
  var resOrders = $resource(deskworksConfig.getApiAbsUrl('/payments-assignment/orders'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  var resBulk = $resource(deskworksConfig.getApiAbsUrl('/payments-assignment/bulk-assignment'), {}, {
    save: {
      method: 'POST'
    }
  });
  return {
    /**
     * @param params.centerId
     * @param params.fromDate
     * @param params.toDate
     * @returns {Resource.$promise}
     */
    query: function query(params) {
      return resOrders.query(_objectSpread(_objectSpread({}, params), {}, {
        fromDate: $filter('date')(params.fromDate, 'yyyy-MM-dd'),
        toDate: $filter('date')(params.toDate, 'yyyy-MM-dd')
      })).$promise;
    },

    /**
     * @param params.orderIds
     * @returns {Resource.$promise}
     */
    save: function save(params) {
      return resBulk.save({}, params).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/payments-assignment/bulk-assignment/bulk-assignment.tpl.html":
/*!******************************************************************************!*\
  !*** ./bundles/payments-assignment/bulk-assignment/bulk-assignment.tpl.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"bulk-invoicing\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v\"> <bulk-payments-assignment-filter model=\"$ctrl.filters\"></bulk-payments-assignment-filter> <ff-panel flex=\"0 0 100%\"> <ff-panel-header><span translate=\"PAYMENTS_ASSIGNMENT.BULK.HEADER\"></span></ff-panel-header> <ff-spin class=\"ff-spin-placeholder\" ng-if=\"$ctrl.fetching || !$ctrl.orders\"></ff-spin> <span ng-if=\"$ctrl.orders && !($ctrl.orders | filter: $ctrl.filters.filter.predicate).length && !$ctrl.fetching\"><span translate=\"GLOBAL.NONE\"></span></span> <ff-row ng-if=\"ffBlock.editMode && ($ctrl.orders | filter: $ctrl.filters.filter.predicate).length > 0\"> <label flex=\"none\"><ff-include-all flex=\"0 0 30px\" items=\"$ctrl.orders\"></ff-include-all></label> </ff-row> <ff-header ng-show=\"($ctrl.orders | filter: $ctrl.filters.filter.predicate).length > 0\"> <ff-row> <span flex=\"0 0 30px\" class=\"ff-center\" title=\"{{'GLOBAL.INCLUDE' | translate}}\" ng-if=\"ffBlock.editMode\"><ff-icon sense=\"check\"></ff-icon></span> <cell flex=\"1 1 150px\"><span translate=\"BULK_INVOICING.COMPANY\"></span></cell> <cell flex=\"1 1 150px\"><span translate=\"BULK_INVOICING.USER\"></span></cell> <cell flex=\"1 0 60px\" class=\"ff-center show-sm\"><span translate=\"BULK_INVOICING.ORDER_ID\"></span></cell> <cell flex=\"0 1 110px\" class=\"ff-center show-sm\"><span translate=\"BULK_INVOICING.DATE\"></span></cell> <cell flex=\"1 2 220px\" class=\"show-xl\"><span translate=\"BULK_INVOICING.COMMENTS\"></span></cell> <cell flex=\"0 0 30px\" class=\"ff-center show-md\"><ff-icon sense=\"billing\" title=\"{{'PAYMENTS_ASSIGNMENT.FILTER.WITH_ASSIGNMENT' | translate}}\"></ff-icon></cell> <cell flex=\"0 0 30px\" class=\"ff-center show-md\"><ff-icon sense=\"user\" title=\"{{'PAYMENTS_ASSIGNMENT.FILTER.WITH_MANUAL_ASSIGNMENT' | translate}}\"></ff-icon></cell> <cell flex=\"1 0 94px\" class=\"ff-right\"><span translate=\"BULK_INVOICING.BALANCE\"></span></cell> <ff-btn flex=\"none\" sense=\"collapse\" size=\"xs\" class=\"buttons-row zero-height\"></ff-btn> </ff-row> </ff-header> <ff-col ng-repeat=\"invoice in $ctrl.orders | filter: $ctrl.filters.filter.predicate\"> <ff-row class=\"invoice-head\" ng-class=\"{ active: invoice.uncollapsed }\" ff-click=\"invoice.uncollapsed = !invoice.uncollapsed\"> <ff-checkbox flex=\"0 0 30px\" class=\"ff-center\" ff-model=\"invoice.include\" ng-if=\"ffBlock.editMode\"></ff-checkbox> <ff-static flex=\"1 1 150px\" ff-bind=\"::invoice.userCompany\"></ff-static> <ff-static flex=\"1 1 150px\" ff-bind=\"::invoice.userName\"></ff-static> <ff-static flex=\"1 0 60px\" class=\"ff-center show-sm\" ff-bind=\"::invoice.orderId\"></ff-static> <ff-static flex=\"0 1 110px\" class=\"ff-center show-sm\" ff-bind=\"::invoice.date | date:'mediumDate'\"></ff-static> <ff-static flex=\"1 2 220px\" class=\"show-xl\" ff-bind=\"::invoice.comments\"></ff-static> <ff-static flex=\"0 0 30px\" class=\"ff-center show-md\"><ff-icon sense=\"check\" ng-if=\"invoice.hasPaymentAssignments\"></ff-icon></ff-static> <ff-static flex=\"0 0 30px\" class=\"ff-center show-md\"><ff-icon sense=\"check\" ng-if=\"invoice.manualPaymentAssignment\"></ff-icon></ff-static> <ff-static flex=\"1 0 94px\" class=\"ff-right\" ff-bind=\"::invoice.balance | ncurrency\"></ff-static> <ff-btn flex=\"none\" sense=\"collapse\" size=\"xs\" class=\"buttons-row\" title=\"{{'GLOBAL.BTN_VIEW' | translate}}\" ff-click=\"invoice.uncollapsed = !invoice.uncollapsed\" ng-class=\"{ collapsed: !invoice.uncollapsed }\"></ff-btn> </ff-row> <ff-row ng-collapse=\"!invoice.uncollapsed\"> <span flex=\"0 0 30px\" class=\"invisible\"></span> <dw-invoice-small invoice=\"invoice\"></dw-invoice-small> <ff-btn sense=\"collapse\" size=\"xs\" flex=\"none\" class=\"buttons-row zero-height\"></ff-btn> </ff-row> </ff-col> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" ff-click=\"$ctrl.assign()\"><span translate=\"PAYMENTS_ASSIGNMENT.BULK.BTN_ASSIGN\"></span></ff-btn> </ff-btn-group> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/payments-assignment/dialog/payments-assignment-dialog.service.js":
/*!**********************************************************************************!*\
  !*** ./bundles/payments-assignment/dialog/payments-assignment-dialog.service.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payments_assignment_dialog_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments-assignment-dialog.tpl.html */ "./bundles/payments-assignment/dialog/payments-assignment-dialog.tpl.html");
/* harmony import */ var _payments_assignment_dialog_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_payments_assignment_dialog_tpl_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/dw-modal/dw-modal.service */ "./shared/dw-modal/dw-modal.service.js");
/* harmony import */ var _payments_assignment_payments_assignment_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payments-assignment/payments-assignment.directive */ "./bundles/payments-assignment/payments-assignment/payments-assignment.directive.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.paymentsAssignmentDialog', [shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_1__["default"].name, _payments_assignment_payments_assignment_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name]).factory('paymentsAssignmentDialog', ["dwModal", function (dwModal) {
  return {
    open: open
  };

  function open(_ref) {
    var scope = _ref.scope,
        purchaseId = _ref.purchaseId;
    return dwModal.show({
      scope: scope,
      template: _payments_assignment_dialog_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
      controller: 'PaymentsAssignmentModalCtrl as $ctrl',
      inputs: {
        purchaseId: purchaseId
      }
    });
  }
}]).controller('PaymentsAssignmentModalCtrl', ["$scope", "purchaseId", "close", function ($scope, purchaseId, close) {
  var $ctrl = this;
  $ctrl.purchaseId = purchaseId;
  $scope.close = close;

  $ctrl.back = function () {
    return close();
  };
}]));

/***/ }),

/***/ "./bundles/payments-assignment/dialog/payments-assignment-dialog.tpl.html":
/*!********************************************************************************!*\
  !*** ./bundles/payments-assignment/dialog/payments-assignment-dialog.tpl.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"dw-modal\"> <div class=\"dw-modal-fade\" style=\"background-color:#fff\"></div> <div style=\"overflow:auto;width:100%;height:100%;z-index:1;padding:1rem\"> <payments-assignment purchase-id=\"$ctrl.purchaseId\" back=\"$ctrl.back\"></payments-assignment> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/payments-assignment/discount-assignment/discount-assignment-btn.directive.js":
/*!**********************************************************************************************!*\
  !*** ./bundles/payments-assignment/discount-assignment/discount-assignment-btn.directive.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.discountAssignmentBtnDirective', ['deskworks.helper']).directive('discountAssignmentBtn', function () {
  return {
    template: "\n<ff-btn-group flex=\"none\" class=\"buttons-row\">\n  <ff-btn sense=\"collapse\" size=\"sm\" ff-click=\"$ctrl.toggle()\" ng-class=\"{ collapsed: $ctrl.discount.$$collapsed }\" title=\"{{'DISCOUNT_ASSIGNMENT.HINT' | translate}}\">\n    <span translate=\"DISCOUNT_ASSIGNMENT.BTN_ASSIGN\"></span>\n  </ff-btn>\n</ff-btn-group>\n",
    restrict: 'E',
    scope: true,
    controller: 'DiscountAssignmentBtnCtrl as $ctrl',
    bindToController: {
      discount: '<'
    },
    link: function link($scope, $element, $attrs) {
      $element.addClass('ff-row');
    }
  };
}).controller('DiscountAssignmentBtnCtrl', ["$scope", "state", "dwAlerts", "helper", "PaymentsAssignment", function ($scope, state, dwAlerts, helper, PaymentsAssignment) {
  var $ctrl = this;

  $ctrl.toggle = function () {
    if ($ctrl.discount.$$collapsed) {
      if (helper.pointFirstInvalid('#add-discount')) {
        return;
      }
    }

    $ctrl.discount.$$collapsed = !$ctrl.discount.$$collapsed;
  };

  $ctrl.$onChanges = function () {
    if (!$ctrl.discount) {
      return;
    }

    $ctrl.discount.$$collapsed = true;
  };
}]));

/***/ }),

/***/ "./bundles/payments-assignment/discount-assignment/discount-assignment.directive.js":
/*!******************************************************************************************!*\
  !*** ./bundles/payments-assignment/discount-assignment/discount-assignment.directive.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _discount_assignment_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discount-assignment.scss */ "./bundles/payments-assignment/discount-assignment/discount-assignment.scss");
/* harmony import */ var _discount_assignment_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_discount_assignment_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _discount_assignment_tpl_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discount-assignment.tpl.html */ "./bundles/payments-assignment/discount-assignment/discount-assignment.tpl.html");
/* harmony import */ var _discount_assignment_tpl_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_discount_assignment_tpl_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _payments_assignment_payments_assignment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../payments-assignment/payments-assignment.service */ "./bundles/payments-assignment/payments-assignment/payments-assignment.service.js");
/* harmony import */ var shared_autofocus_autofocus_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/autofocus/autofocus.directive */ "./shared/autofocus/autofocus.directive.js");










/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.discountAssignmentDirective', ['deskworks.helper', _payments_assignment_payments_assignment_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_autofocus_autofocus_directive__WEBPACK_IMPORTED_MODULE_9__["default"].name]).directive('discountAssignment', function () {
  return {
    template: _discount_assignment_tpl_html__WEBPACK_IMPORTED_MODULE_7___default.a,
    restrict: 'E',
    scope: true,
    controller: 'DiscountAssignmentCtrl as $ctrl',
    bindToController: {
      purchaseId: '<',
      discount: '<'
    }
  };
}).controller('DiscountAssignmentCtrl', ["$scope", "state", "dwAlerts", "helper", "PaymentsAssignment", function ($scope, state, dwAlerts, helper, PaymentsAssignment) {
  var $ctrl = this;

  $ctrl.$onChanges = function () {
    if (!$ctrl.purchaseId) {
      return;
    }

    $ctrl.discount.assignment = $ctrl.discount.assignment || {};
    $ctrl.fetch();
  };

  $ctrl.$onDestroy = function () {
    delete $ctrl.discount.assignment;
  };
  /**
   * Fetch
   */


  $ctrl.fetch = function () {
    if ($ctrl.fetching) return $ctrl.fetching;
    $ctrl.fetching = PaymentsAssignment.get({
      purchaseId: $ctrl.purchaseId
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get payments assignment.');
    }).finally(function () {
      $ctrl.fetching = null;
    }).then(function (result) {
      var _context;

      $ctrl.charges = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = result.charges).call(_context, function (charge) {
        return charge.amount - charge.discount > 0;
      });
      $ctrl.charges.forEach(function (charge) {
        charge.amount -= charge.discount;
      });
    });
  };

  $ctrl.validate = function (value) {
    var _context2;

    var total = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default()($ctrl.discount.assignment)).call(_context2, function (key) {
      return $ctrl.discount.assignment[key];
    }).reduce(function (sum, amount) {
      return sum + (isNaN(+amount) ? 0 : +amount);
    }, 0);

    $ctrl.amountLeft = $ctrl.discount.amount - total;
    return $ctrl.discount.amount == total;
  };
}]));

/***/ }),

/***/ "./bundles/payments-assignment/discount-assignment/discount-assignment.scss":
/*!**********************************************************************************!*\
  !*** ./bundles/payments-assignment/discount-assignment/discount-assignment.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/payments-assignment/discount-assignment/discount-assignment.tpl.html":
/*!**************************************************************************************!*\
  !*** ./bundles/payments-assignment/discount-assignment/discount-assignment.tpl.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" class=\"gutter-v\" style=\"margin-top:.5rem\"> <ff-panel> <div ff-dim=\"$ctrl.fetching\"> <ff-header> <ff-row> <cell flex=\"1 0 80px\"><span> <span translate=\"GLOBAL.PRODUCT\"></span> <ff-hint><span translate=\"DISCOUNT_ASSIGNMENT.HINT\"></span></ff-hint> </span></cell> <cell flex=\"0 0 90px\" class=\"ff-right\"><span translate=\"GLOBAL.AMOUNT\"></span></cell> <cell flex=\"0 0 90px\" class=\"ff-right\"><span translate=\"GLOBAL.DISCOUNT\"></span></cell> </ff-row> </ff-header> <ff-static class=\"ff-no-frame\" ng-if=\"!$ctrl.charges.length\"><span translate=\"GLOBAL.NONE\"></span></ff-static> <ff-row ng-repeat=\"charge in $ctrl.charges\"> <ff-static flex=\"1 0 80px\">{{charge.name}}</ff-static> <ff-static flex=\"0 0 90px\" class=\"ff-right\">{{charge.amount | currency}}</ff-static> <ff-number flex=\"0 0 90px\" ff-model=\"$ctrl.discount.assignment[charge.id]\" class=\"ff-right discount-amount\" placeholder=\"0\" ff-gte=\"0\" ff-lte=\"charge.amount < $ctrl.discount.amount ? charge.amount : $ctrl.discount.amount\" ff-custom=\"$ctrl.validate($value)\" autofocus=\"{{!$index}}\" ff-validate-alert=\"{ field: '{{'GLOBAL.DISCOUNT' | translate}}', custom: 'DISCOUNT_ASSIGNMENT.INVALID_TOTAL', amount: $ctrl.discount.amount, left: $ctrl.amountLeft }\"></ff-number> </ff-row> </div> </ff-panel> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/payments-assignment/index.js":
/*!**********************************************!*\
  !*** ./bundles/payments-assignment/index.js ***!
  \**********************************************/
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
/* harmony import */ var _dialog_payments_assignment_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog/payments-assignment-dialog.service */ "./bundles/payments-assignment/dialog/payments-assignment-dialog.service.js");
/* harmony import */ var _bulk_assignment_bulk_assignment_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bulk-assignment/bulk-assignment.controller */ "./bundles/payments-assignment/bulk-assignment/bulk-assignment.controller.js");
/* harmony import */ var _discount_assignment_discount_assignment_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discount-assignment/discount-assignment.directive */ "./bundles/payments-assignment/discount-assignment/discount-assignment.directive.js");
/* harmony import */ var _discount_assignment_discount_assignment_btn_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discount-assignment/discount-assignment-btn.directive */ "./bundles/payments-assignment/discount-assignment/discount-assignment-btn.directive.js");








var index = ['$injector', function index($injector) {
  $injector.loadNewModules([_dialog_payments_assignment_dialog_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, _bulk_assignment_bulk_assignment_controller__WEBPACK_IMPORTED_MODULE_5__["default"].name, _discount_assignment_discount_assignment_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, _discount_assignment_discount_assignment_btn_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name]);
  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/payments-assignment sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_0___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/payments-assignment/payments-assignment/payments-assignment.directive.js":
/*!******************************************************************************************!*\
  !*** ./bundles/payments-assignment/payments-assignment/payments-assignment.directive.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _payments_assignment_tpl_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments-assignment.tpl.html */ "./bundles/payments-assignment/payments-assignment/payments-assignment.tpl.html");
/* harmony import */ var _payments_assignment_tpl_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_payments_assignment_tpl_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _payments_assignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payments-assignment.service */ "./bundles/payments-assignment/payments-assignment/payments-assignment.service.js");
/* harmony import */ var shared_autofocus_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/autofocus/autofocus.directive */ "./shared/autofocus/autofocus.directive.js");






/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.paymentsAssignmentDirective', ['deskworks.helper', _payments_assignment_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_autofocus_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name]).directive('paymentsAssignment', function () {
  return {
    template: _payments_assignment_tpl_html__WEBPACK_IMPORTED_MODULE_3___default.a,
    restrict: 'E',
    scope: true,
    controller: 'PaymentsAssignmentCtrl as $ctrl',
    bindToController: {
      purchaseId: '<',
      back: '<'
    }
  };
}).controller('PaymentsAssignmentCtrl', ["$scope", "state", "dwAlerts", "helper", "PaymentsAssignment", function ($scope, state, dwAlerts, helper, PaymentsAssignment) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.charges = [];
    $ctrl.payments = [];

    var expression = function expression() {
      return $ctrl.charges.reduce(function (obj, charge) {
        return obj[charge.id] = $ctrl.payments.reduce(function (sum, p) {
          return sum + charge.payments[p.id] || 0;
        }, 0), obj;
      }, {});
    };

    $scope.$watch(expression, function () {
      return PaymentsAssignment.calcBalances({
        charges: $ctrl.charges,
        payments: $ctrl.payments
      });
    }, true);
  };

  $ctrl.$onChanges = function () {
    if (!$ctrl.purchaseId) return;
    $ctrl.fetch();
  };
  /**
   * Fetch
   */


  $ctrl.fetch = function () {
    if ($ctrl.fetching) return $ctrl.fetching;
    $ctrl.fetching = PaymentsAssignment.get({
      purchaseId: $ctrl.purchaseId
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get payments assignment.');
    }).finally(function () {
      $ctrl.fetching = null;
    }).then(function (result) {
      $ctrl.charges = result.charges;
      $ctrl.payments = result.payments;
    });
  };
  /**
   * Save
   */


  $ctrl.save = function () {
    var _context;

    if (helper.pointFirstInvalid('payments-assignment')) return;
    var data = {
      charges: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.charges).call(_context, function (charge) {
        return {
          id: charge.id,
          payments: charge.payments
        };
      })
    };
    return PaymentsAssignment.save({
      purchaseId: $ctrl.purchaseId
    }, data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save payments assignment.');
    }).then(function () {
      return $ctrl.back();
    });
  };
}]));

/***/ }),

/***/ "./bundles/payments-assignment/payments-assignment/payments-assignment.service.js":
/*!****************************************************************************************!*\
  !*** ./bundles/payments-assignment/payments-assignment/payments-assignment.service.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PaymentsAssignment', ['ngResource', 'datesDeserializer', 'deserializeNumbers', 'deskworks.config']).factory('PaymentsAssignment', ["$resource", "$timeout", "deskworksConfig", "datesDeserializer", "deserializeNumbers", "helper", function ($resource, $timeout, deskworksConfig, datesDeserializer, deserializeNumbers, helper) {
  var desDates = datesDeserializer(['payments.billedAt', 'charges.billedAt']);
  var desNumbers = deserializeNumbers(['payments.amount', 'charges.amount', 'charges.discount', 'charges.tax']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/payments-assignment/:purchaseId'), {}, {
    get: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates, desNumbers]
    },
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get(params) {
      return res.get(params).$promise.then(function (data) {
        return deserialize(data);
      });
    },

    /**
     * @param params
     * @param params.purchaseId
     * @param data
     */
    save: function save(params, data) {
      return res.update(params, data).$promise;
    },
    calcBalances: calcBalances
  };

  function deserialize(data) {
    data.charges.forEach(function (charge) {
      charge.total = helper.round(charge.amount - charge.discount + charge.tax);
    });
    calcBalances({
      payments: data.payments,
      charges: data.charges
    });
    return data;
  }

  function calcBalances(_ref) {
    var payments = _ref.payments,
        charges = _ref.charges;
    charges.forEach(function (charge) {
      charge.balance = charge.total;
    });
    payments.forEach(function (payment) {
      payment.balance = payment.amount;
      charges.forEach(function (charge) {
        var delta = angular.isNumber(charge.payments[payment.id]) ? +charge.payments[payment.id] : 0;
        charge.balance = helper.round(charge.balance - delta);
        payment.balance = helper.round(payment.balance - delta);
      });
    });
  }
}]));

/***/ }),

/***/ "./bundles/payments-assignment/payments-assignment/payments-assignment.tpl.html":
/*!**************************************************************************************!*\
  !*** ./bundles/payments-assignment/payments-assignment/payments-assignment.tpl.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" class=\"gutter-v\"> <ff-panel> <ff-panel-header><span translate=\"PAYMENTS_ASSIGNMENT.PAYMENTS\"></span></ff-panel-header> <div ff-dim=\"$ctrl.fetching\"> <ff-header> <ff-row> <cell flex=\"0 1 110px\" class=\"ff-right show-sm\"><span translate=\"GLOBAL.DATE\"></span></cell> <cell><span translate=\"GLOBAL.NAME\"></span></cell> <cell flex=\"0 1 90px\" class=\"ff-right show-md\"><span translate=\"GLOBAL.AMOUNT\"></span></cell> <cell flex=\"0 1 90px\" class=\"ff-right\"><span translate=\"GLOBAL.BALANCE\"></span></cell> </ff-row> </ff-header> <ff-static class=\"ff-no-frame\" ng-if=\"!$ctrl.payments.length\"><span translate=\"GLOBAL.NONE\"></span></ff-static> <ff-row ng-repeat=\"payment in $ctrl.payments\"> <ff-static flex=\"0 1 110px\" class=\"ff-right show-sm\">{{payment.billedAt | date}}</ff-static> <ff-static>{{payment.name}}</ff-static> <ff-static flex=\"0 1 90px\" class=\"ff-right show-md\">{{payment.amount | ncurrency}}</ff-static> <ff-static flex=\"0 1 90px\" class=\"ff-right\">{{payment.balance | ncurrency}}</ff-static> </ff-row> </div> </ff-panel> <ff-panel> <ff-panel-header><span translate=\"PAYMENTS_ASSIGNMENT.HEADER\"></span></ff-panel-header> <div ff-dim=\"$ctrl.fetching\"> <ff-header> <ff-row> <cell flex=\"1 0 80px\"><span translate=\"GLOBAL.PRODUCT\"></span></cell> <cell flex=\"0 0 90px\" class=\"ff-right show-lg\"><span translate=\"GLOBAL.AMOUNT\"></span></cell> <cell flex=\"0 0 90px\" class=\"ff-right show-lg\"><span translate=\"GLOBAL.DISCOUNT\"></span></cell> <cell flex=\"0 0 90px\" class=\"ff-right show-md\"><span translate=\"GLOBAL.TAX\"></span></cell> <cell flex=\"0 0 90px\" class=\"ff-right show-sm\"><span translate=\"GLOBAL.TOTAL\"></span></cell> <cell flex=\"0 1 230px\" class=\"ff-right\"><span translate=\"PAYMENTS_ASSIGNMENT.PAYMENTS\"></span></cell> <cell flex=\"0 0 90px\" class=\"ff-right\"><span translate=\"GLOBAL.BALANCE\"></span></cell> </ff-row> </ff-header> <ff-static class=\"ff-no-frame\" ng-if=\"!$ctrl.charges.length\"><span translate=\"GLOBAL.NONE\"></span></ff-static> <ff-row ng-repeat=\"charge in $ctrl.charges\"> <ff-static flex=\"1 0 80px\">{{charge.name}}</ff-static> <ff-static flex=\"0 0 90px\" class=\"ff-right show-lg\">{{charge.amount | ncurrency}}</ff-static> <ff-static flex=\"0 0 90px\" class=\"ff-right show-lg\">{{charge.discount | ncurrency}}</ff-static> <ff-static flex=\"0 0 90px\" class=\"ff-right show-md\">{{charge.tax | ncurrency}}</ff-static> <ff-static flex=\"0 0 90px\" class=\"ff-right show-sm\">{{charge.total | ncurrency}}</ff-static> <ff-static flex=\"0 1 230px\"> <span ng-if=\"!$ctrl.payments.length\" translate=\"GLOBAL.NONE\" style=\"margin:0 auto\"></span> <ff-col ng-init=\"chargeIndex = $index\"> <label ng-repeat=\"payment in $ctrl.payments\" class=\"ff-row\" ng-class=\"{ 'ff-no-frame': $index === $ctrl.payments.length - 1 }\"> <ff-label class=\"ff-right\">{{payment.name}}</ff-label> <ff-number flex=\"0 0 65px\" ff-model=\"charge.payments[payment.id]\" class=\"ff-right\" autofocus=\"{{!$index && !chargeIndex}}\" ff-validate-alert=\"{{'GLOBAL.AMOUNT' | translate}}\" placeholder=\"0\"></ff-number> </label> </ff-col> </ff-static> <ff-static flex=\"0 0 90px\" class=\"ff-right\">{{charge.balance | ncurrency}}</ff-static> </ff-row> </div> </ff-panel> <ff-btn-group> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/autofocus/autofocus.directive.js":
/*!*************************************************!*\
  !*** ./shared/autofocus/autofocus.directive.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * autofocus directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('autofocusDirective', []).directive('autofocus', ["$timeout", function ($timeout) {
  return {
    restrict: 'A',
    link: function link($scope, $element, $attrs) {
      if ($attrs.autofocus === 'false') return;
      var input = $element[0].parentNode.querySelector('input') || $element[0].parentNode.querySelector('select') || $element[0].parentNode.querySelector('button');
      if (input) $timeout(function () {
        return input.focus();
      });
    }
  };
}]));

/***/ }),

/***/ "./shared/dw-invoice/dw-invoice-small.directive.js":
/*!*********************************************************!*\
  !*** ./shared/dw-invoice/dw-invoice-small.directive.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dw_invoice_small_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dw-invoice-small.tpl.html */ "./shared/dw-invoice/dw-invoice-small.tpl.html");
/* harmony import */ var _dw_invoice_small_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dw_invoice_small_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/**
 * dwInvoiceSmall directive - component for displaying Deskworks specific small invoices
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwInvoice.small', ['deskworks.state', 'flexForms', 'deskworks.helper']).directive('dwInvoiceSmall', function () {
  return {
    template: _dw_invoice_small_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    restrict: 'E',
    scope: true,
    controller: 'dwInvoiceSmallCtrl as dwInvoice',
    bindToController: {
      invoice: '=*'
    },
    compile: function compile(tElement, tAttrs) {
      tElement.addClass('dw-invoice');
      return function link() {};
    }
  };
}).controller('dwInvoiceSmallCtrl', function () {}));

/***/ }),

/***/ "./shared/dw-invoice/dw-invoice-small.tpl.html":
/*!*****************************************************!*\
  !*** ./shared/dw-invoice/dw-invoice-small.tpl.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-header> <ff-row> <cell flex=\"10 0 50%\"><span translate=\"PURCHASE.INVOICE.DESCRIPTION\"></span></cell> <cell flex=\"3 0 45px\" class=\"ff-center show-sm\"><span translate=\"PURCHASE.INVOICE.DATE\"></span></cell> <cell flex=\"1 0 64px\" class=\"ff-right show-md\"><span translate=\"PURCHASE.INVOICE.PRICE\"></span></cell> <cell flex=\"1 0 36px\" class=\"ff-center\"><span translate=\"PURCHASE.INVOICE.QUANTITY\"></span></cell> <cell flex=\"0 0 94px\" class=\"ff-right\"><span translate=\"PURCHASE.INVOICE.AMOUNT\"></span></cell> </ff-row> </ff-header> <ff-row ng-repeat=\"item in ::dwInvoice.invoice.items\"> <ff-static flex=\"10 0 50%\" ff-bind=\"::item.description\"></ff-static> <ff-static flex=\"3 0 45px\" class=\"ff-center show-sm\" ff-bind=\"::item.date | date:'mediumDate'\"></ff-static> <ff-static flex=\"1 0 64px\" class=\"ff-right show-md\" ff-bind=\"::item.price | ncurrency\"></ff-static> <ff-static flex=\"1 0 36px\" class=\"ff-center\" ff-bind=\"::item.quantity\"></ff-static> <ff-static flex=\"0 0 94px\" class=\"ff-right\" ff-bind=\"::item.amount | ncurrency\"></ff-static> </ff-row> <ff-row class=\"invoice-charges\"> <ff-label><span translate=\"PURCHASE.INVOICE.CHARGES\"></span></ff-label> <ff-static flex=\"0 0 94px\" class=\"ff-right\" ff-bind=\"::dwInvoice.invoice.total | ncurrency\"></ff-static> </ff-row> <ff-row class=\"invoice-tax\" ng-repeat=\"tax in dwInvoice.invoice.taxes\"> <ff-label>{{tax.taxName}}</ff-label> <ff-static flex=\"0 0 94px\" class=\"ff-right\" ff-bind=\"tax.taxAmount | ncurrency\"></ff-static> </ff-row> <ff-row class=\"invoice-payment\"> <ff-label><span translate=\"PURCHASE.INVOICE.PAYMENT\"></span></ff-label> <ff-static flex=\"0 0 94px\" class=\"ff-right\" ff-bind=\"::dwInvoice.invoice.payment | ncurrency\"></ff-static> </ff-row> <ff-row class=\"invoice-balance\"> <ff-label><span translate=\"PURCHASE.INVOICE.BALANCE\"></span></ff-label> <ff-static flex=\"0 0 94px\" class=\"ff-right\" ff-bind=\"::dwInvoice.invoice.balance | ncurrency\"></ff-static> </ff-row> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=payments-assignment~...js.map?_rev=5bd9ac4597b3d1a654d1