(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports~._shared_c"],{

/***/ "./shared/charts/chart-colors.service.js":
/*!***********************************************!*\
  !*** ./shared/charts/chart-colors.service.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('chartColors', []).factory('chartColors', function () {
  return ['#317da3', '#e6194b', '#3cb44b', '#ffe119', '#f58231', '#911eb4', '#aa6e28', '#008080', '#808080', '#800000', '#3244a1', '#e64c19', '#3db372', '#d1ff1a', '#f5c131', '#b31e81', '#a89728', '#005580', '#806659', '#804000'];
}));

/***/ }),

/***/ "./shared/charts/chart.directive.js":
/*!******************************************!*\
  !*** ./shared/charts/chart.directive.js ***!
  \******************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chart.js */ "../node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _chart_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart.scss */ "./shared/charts/chart.scss");
/* harmony import */ var _chart_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_chart_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shared_charts_system_colors_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/charts/system-colors.service */ "./shared/charts/system-colors.service.js");
/* harmony import */ var shared_charts_chart_colors_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/charts/chart-colors.service */ "./shared/charts/chart-colors.service.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "../node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_13__);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }






/**
 * Chart directive - wrapper for chart.js
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('chartDirective', ['deskworks.helper', shared_charts_system_colors_service__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_charts_chart_colors_service__WEBPACK_IMPORTED_MODULE_12__["default"].name]).directive('chart', ["$window", "systemColors", function ($window, systemColors) {
  $window.Chart.defaults.global.legend.labels.boxWidth = 12;
  $window.Chart.defaults.global.tooltips.cornerRadius = 3;
  $window.Chart.defaults.global.tooltips.displayColors = false;
  $window.Chart.defaults.global.tooltips.backgroundColor = 'rgba(0,0,0,0.65)';
  $window.Chart.defaults.global.elements.rectangle.borderWidth = 1;
  $window.Chart.defaults.global.elements.rectangle.backgroundColor = systemColors.primary;
  $window.Chart.defaults.global.elements.arc.borderWidth = 1;
  $window.Chart.plugins.unregister(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_13___default.a);
  return {
    restrict: 'E',
    scope: true,
    controller: 'ChartCtrl as $ctrl',
    bindToController: {
      type: '@chartType',
      labels: '<chartLabels',
      data: '<chartData',
      options: '<chartOptions',
      config: '<'
    },
    template: '<canvas></canvas>'
  };
}]).controller('ChartCtrl', ["$scope", "$element", "$window", "chartColors", function ($scope, $element, $window, chartColors) {
  var $ctrl = this;
  var chart;
  var chartOptions = {
    maintainAspectRatio: false
  };
  var defaults = {
    backgroundColor: chartColors,
    hoverBorderWidth: 2,
    hoverBorderColor: '#fff'
  };
  /**
   * $onInit
   */
  // $ctrl.$onInit = function() {
  // };

  /**
   * $onDestroy
   */

  $ctrl.$onDestroy = function () {
    if (chart) chart.destroy();
  };
  /**
   * $onChanges
   */


  $ctrl.$onChanges = function (changes) {
    var _context2;

    // NEW APPROACH
    if ($ctrl.config) {
      var _context;

      if (chart) chart.destroy();

      var config = _objectSpread({}, $ctrl.config);

      config.options = _objectSpread(_objectSpread({}, config.options), chartOptions);
      config.data = _objectSpread({}, config.data);
      config.data.datasets = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7___default()(_context = config.data.datasets).call(_context, function (ds) {
        return _objectSpread(_objectSpread({}, defaults), ds);
      });
      chart = new $window.Chart($element.children(), config);
      return;
    } // OLD APPROACH


    if (!$ctrl.options) return;
    var chartData = {
      labels: $ctrl.labels,
      datasets: _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_8___default()(_context2 = $ctrl.data).call(_context2)
    };
    chartData.datasets[0] = angular.extend({}, defaults, chartData.datasets[0]);

    if (chart && (!changes.type || changes.type.currentValue === changes.type.previousValue)) {
      angular.extend(chart.data, chartData);
      angular.extend(chart.options, chartOptions, $ctrl.options);
      chart.update();
    } else {
      if (chart) chart.destroy();
      chart = new $window.Chart($element.children(), {
        type: $ctrl.type,
        data: chartData,
        options: angular.extend({}, chartOptions, $ctrl.options)
      });
    }
  };
}]));

/***/ }),

/***/ "./shared/charts/chart.scss":
/*!**********************************!*\
  !*** ./shared/charts/chart.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/charts/system-colors.service.js":
/*!************************************************!*\
  !*** ./shared/charts/system-colors.service.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * systemColors service - sniffs and keeps system colors for using in JS
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('systemColors', ['deskworks.helper']).factory('systemColors', ["$window", "helper", function ($window, helper) {
  var colors = {};
  var picker = angular.element('<div style="display: none"></div>');
  picker.append('<div class="text-text"></div>');
  picker.append('<div class="text-brand"></div>');
  picker.append('<div class="text-brand"></div>');
  picker.append('<div class="text-danger"></div>');
  picker.append('<div></div>');
  picker.append('<div class="sidebar-group-header"></div>');
  document.body.appendChild(picker[0]);
  colors.text = helper.rgb2hex($window.getComputedStyle(picker.children()[0]).getPropertyValue('color')) || '#444';
  colors.info = helper.rgb2hex($window.getComputedStyle(picker.children()[4]).getPropertyValue('color')) || '#4d4e4c';
  colors.primary = helper.rgb2hex($window.getComputedStyle(picker.children()[5]).getPropertyValue('background-color')) || '#949594';
  colors.warning = helper.rgb2hex($window.getComputedStyle(picker.children()[3]).getPropertyValue('color')) || '#ff9b00';
  picker.remove();
  return colors;
}]));

/***/ }),

/***/ "./shared/reports/api/income-by-item-report.service.js":
/*!*************************************************************!*\
  !*** ./shared/reports/api/income-by-item-report.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * IncomeByItemReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.IncomeByItemReport', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('IncomeByItemReport', ["$resource", "$filter", "datesDeserializer", "deskworksConfig", function ($resource, $filter, datesDeserializer, deskworksConfig) {
  var desDates = datesDeserializer(['productCategories.products.date']);
  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/income-by-item-reports');
  var res = $resource(url, {
    centerId: '@centerId',
    fromDate: '@fromDate',
    toDate: '@toDate'
  }, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    query: function query(params) {
      return res.query({
        centerId: params.centerId || 0,
        fromDate: $filter('date')(params.fromDate, 'yyyy-MM-dd'),
        toDate: $filter('date')(params.toDate, 'yyyy-MM-dd')
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./shared/reports/directives/report-by-period/opts-report-by-period.service.js":
/*!*************************************************************************************!*\
  !*** ./shared/reports/directives/report-by-period/opts-report-by-period.service.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Options for Report / Group By Period
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.optsReportByPeriod', []).factory('optsReportByPeriod', ["$rootScope", "$translate", "$filter", function ($rootScope, $translate, $filter) {
  var df = $filter('date');
  var opts = [{
    id: 'week',
    _name: 'REPORTS.BY_PERIOD.WEEK',
    format: function format(from, to) {
      return df(from, 'MMM d') + ' - ' + df(to, 'MMM d');
    }
  }, {
    id: 'month',
    _name: 'REPORTS.BY_PERIOD.MONTH',
    format: function format(from, to) {
      return df(from, 'MMM');
    }
  }, {
    id: 'quarter',
    _name: 'REPORTS.BY_PERIOD.QUARTER',
    format: function format(from, to) {
      return df(from, 'MMM') + ' - ' + df(to, 'MMM');
    }
  }, {
    id: 'year',
    _name: 'REPORTS.BY_PERIOD.YEAR',
    format: function format(from, to) {
      return df(from, 'yyyy');
    }
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

/***/ "./shared/reports/directives/report-by-period/report-by-period.directive.js":
/*!**********************************************************************************!*\
  !*** ./shared/reports/directives/report-by-period/report-by-period.directive.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opts_report_by_period_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opts-report-by-period.service */ "./shared/reports/directives/report-by-period/opts-report-by-period.service.js");




/**
 * reportOptions directive - wraps report options: center, paper size, paper layout
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reportByPeriodDirective', ['deskworks.helper', _opts_report_by_period_service__WEBPACK_IMPORTED_MODULE_3__["default"].name]).directive('reportByPeriod', ["$compile", "$templateCache", function ($compile, $templateCache) {
  var templateUrl = 'directives/report-by-period.tpl.html';
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    priority: 2,
    // To be higher than ngModel directive with priority: 1
    controller: 'ReportByPeriodCtrl as $ctrl',
    bindToController: {
      model: '=',
      opts: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      $transclude(function (clone, newScope) {
        var tpl = $compile($templateCache.get(templateUrl))($scope);
        angular.element(tpl[0] && tpl[0].querySelector ? tpl[0].querySelector('.ff-panel-body') : tpl).append(clone); // append custom content before compilation

        $element.after(tpl);
      });
    }
  };
}]).controller('ReportByPeriodCtrl', ["$scope", "$location", "$filter", "$translate", "state", "helper", "optsReportByPeriod", function ($scope, $location, $filter, $translate, state, helper, optsReportByPeriod) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $ctrl.optsPeriod = $ctrl.opts || optsReportByPeriod;
    watchTimePeriod();
  };
  /**
   * Map timePeriod to URL search param
   */


  function watchTimePeriod() {
    $scope.$watch(function () {
      return $location.search().byPeriod;
    }, function (val) {
      $ctrl.model = val || $ctrl.model || $ctrl.optsPeriod[0].id;
    });
    $scope.$watch('$ctrl.model', function (val) {
      $location.search('byPeriod', val).replace();
    });
  }
}]));

/***/ })

}]);
//# sourceMappingURL=reports~._shared_c.js.map?_rev=3d17c72a032dce7672e9