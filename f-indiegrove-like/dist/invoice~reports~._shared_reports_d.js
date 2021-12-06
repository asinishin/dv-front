(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice~reports~._shared_reports_d"],{

/***/ "./shared/reports/directives/pdf-preview.directive.js":
/*!************************************************************!*\
  !*** ./shared/reports/directives/pdf-preview.directive.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pdf_preview_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdf-preview.scss */ "./shared/reports/directives/pdf-preview.scss");
/* harmony import */ var _pdf_preview_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pdf_preview_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * PDF preview pane. Accepts PDF as Blob, creates/revokes temporary url and displays PDF in iframe.
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('pdfPreview', ['deskworks.helper']).directive('pdfPreview', ["$window", "helper", function ($window, helper) {
  return {
    restrict: 'A',
    scope: true,
    template: '<iframe ng-hide="ie" title="{{\'REPORTS.PREVIEW.HEADER\' | translate}}"></iframe>' + '<ff-info class="text-danger" ng-if="ie"><ff-icon sense="warning"></ff-icon> ' + 'Microsoft Edge & Internet Explorer don\'t support live PDF preview. ' + 'You can download the PDF or use another browser to have live preview, e.g. Chrome/Firefox/Opera/Safari.' + '</ff-info>',
    compile: function compile(tElement, tAttrs) {
      // TODO: Ugly hiding parent flex-form for mobile, can be refactored by wrapping flex-form to report-preview directive with ng-if
      var container = tElement.parent().parent();

      if (helper.isMobile() && container.hasClass('flex-form')) {
        tElement.parent().parent().css('display', 'none');
        return function link() {}; // browser doesn't support embedded PDF
      }

      if (helper.isIE()) {
        return function link($scope, $element, $attrs) {
          $scope.ie = true;
        };
      }

      tElement.addClass('pdf-preview');
      return function link($scope, $element, $attrs) {
        var iframe = $element.children();
        var dimmer = angular.element('<div class="ff-dimmer ff-spin"></div>');
        dimmer.on('click', function (event) {
          event.stopPropagation();
        }); // block clicking

        /**
         * Stop Dimming
         */

        iframe.on('load', function () {
          angular.element(dimmer).remove();
          $element.removeClass('ff-dim');
        }); // TODO: prevent vertical screen overflow: Math.min(maxHeight, clientHeight)

        /**
         * Watch for input blob and re-create temporary url for iframe
         */

        var pdfUrl; // temporary url created by URL.createObjectURL

        $scope.$watch($attrs.pdfPreview, function (blob) {
          // Start Dimming
          $element.append(dimmer);
          $element.addClass('ff-dim'); // Clear previous temporary url

          if (pdfUrl) {
            $window.URL.revokeObjectURL(pdfUrl);
            pdfUrl = null;
          }

          if (blob) {
            // Create new temporary url and update iframe
            pdfUrl = $window.URL.createObjectURL(blob);
            iframe[0].src = pdfUrl;
          }
        });
        /**
         * Destroy temporary url for iframe
         */

        $scope.$on('$destroy', function () {
          if (pdfUrl) {
            $window.URL.revokeObjectURL(pdfUrl);
            pdfUrl = null;
          }
        });
      };
    }
  };
}]));

/***/ }),

/***/ "./shared/reports/directives/pdf-preview.scss":
/*!****************************************************!*\
  !*** ./shared/reports/directives/pdf-preview.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reports/directives/report-options.directive.js":
/*!***************************************************************!*\
  !*** ./shared/reports/directives/report-options.directive.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_dw_controls_dw_select_center_dw_select_center_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/dw-controls/dw-select-center/dw-select-center.directive */ "./shared/dw-controls/dw-select-center/dw-select-center.directive.js");
/* harmony import */ var shared_reports_services_opts_paper_size_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/services/opts-paper-size.service */ "./shared/reports/services/opts-paper-size.service.js");
/* harmony import */ var _report_options_tpl_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-options.tpl.html */ "./shared/reports/directives/report-options.tpl.html");
/* harmony import */ var _report_options_tpl_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_report_options_tpl_html__WEBPACK_IMPORTED_MODULE_6__);







/**
 * reportOptions directive - wraps report options: center, paper size, paper layout
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reportOptions', ['deskworks.helper', shared_reports_services_opts_paper_size_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_dw_controls_dw_select_center_dw_select_center_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name]).directive('reportOptions', ["$compile", function ($compile) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    priority: 2,
    // To be higher than ngModel directive with priority: 1
    controller: 'ReportOptionsCtrl as $ctrl',
    bindToController: {
      model: '<',
      centers: '<',
      allCenters: '<',
      banks: '<',
      noCenters: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      $transclude(function (clone, newScope) {
        var tpl = $compile(_report_options_tpl_html__WEBPACK_IMPORTED_MODULE_6___default.a)($scope);
        angular.element(tpl[0].querySelector ? tpl[0].querySelector('.ff-panel-body') : tpl).append(clone); // append custom content before compilation

        $element.after(tpl);
      });
    }
  };
}]).controller('ReportOptionsCtrl', ["$scope", "$location", "state", "helper", "optsPaperSize", function ($scope, $location, state, helper, optsPaperSize) {
  var $ctrl = this;
  $ctrl.optsPaperSize = optsPaperSize;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    if ($ctrl.model.centerId !== false && !$ctrl.noCenters) watchCenterId();
    if ($ctrl.banks) watchBankId();
    watchPaperSize();
    watchPaperLayout();
  };
  /**
   * Map centerId to URL search param
   */


  function watchCenterId() {
    $scope.$watch(function () {
      return $location.search().centerId;
    }, function (val) {
      $ctrl.model.centerId = val || val === 0 ? +val : state.getCurrentCenterId();
    });
    $scope.$watch('$ctrl.model.centerId', function (val) {
      if (val && $scope.vm && $scope.vm.config && $scope.vm.config.reportOwnerRegion) $scope.vm.config.reportOwnerRegion.ownerId = $scope.vm.config.reportOwnerRegion.regionId = undefined;
      $location.search('centerId', val).replace();
    });
  }
  /**
   * Map bankId to URL search param
   */


  function watchBankId() {
    $scope.$watch(function () {
      return $location.search().bankId;
    }, function (val) {
      $ctrl.model.bankId = val || val === 0 ? +val : $ctrl.banks && $ctrl.banks[0] && $ctrl.banks[0].id;
    });
    $scope.$watch('$ctrl.model.bankId', function (val) {
      $location.search('bankId', val).replace();
    });
  }
  /**
   * Map paperSize to URL search param
   */


  function watchPaperSize() {
    $scope.$watch(function () {
      return $location.search().paperSize;
    }, function (val) {
      var _context, _context2;

      $ctrl.model.paperSize = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.optsPaperSize).call(_context, function (o) {
        return o.id === val;
      }) || _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = $ctrl.optsPaperSize).call(_context2, function (o) {
        return o.id === $ctrl.model.paperSize;
      }) || $ctrl.optsPaperSize[0]).id;
    });
    $scope.$watch('$ctrl.model.paperSize', function (val) {
      $location.search('paperSize', val).replace();
    });
  }
  /**
   * Map paperLayout to URL search param
   */


  function watchPaperLayout() {
    $scope.$watch(function () {
      return $location.search().paperLayout;
    }, function (val) {
      $ctrl.model.paperLayout = val || $ctrl.model.paperLayout || 'l';
    });
    $scope.$watch('$ctrl.model.paperLayout', function (val) {
      $location.search('paperLayout', val).replace();
    });
  }
}]));

/***/ }),

/***/ "./shared/reports/directives/report-options.tpl.html":
/*!***********************************************************!*\
  !*** ./shared/reports/directives/report-options.tpl.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header><span translate=\"REPORTS.OPTIONS.HEADER\"></span></ff-panel-header> <label class=\"ff-row\" ng-if=\"$ctrl.banks\"> <ff-label flex=\"0 0 100px\"><span translate=\"REPORTS.OPTIONS.BANK\"></span></ff-label> <ff-select ff-model=\"$ctrl.model.bankId\" ff-options=\"bank.id as bank.name for bank in $ctrl.banks\"></ff-select> </label> <label class=\"ff-row\" ng-if=\"$ctrl.model.centerId !== false && !$ctrl.noCenters && !$ctrl.centers\" ng-show=\"state.getUserCenters().length > 1\"> <ff-label flex=\"0 0 100px\"><span translate=\"REPORTS.OPTIONS.CENTER\"></span></ff-label> <dw-select-center ff-model=\"$ctrl.model.centerId\" ff-option-all=\"{{$ctrl.allCenters !== false}}\"></dw-select-center> </label> <label class=\"ff-row\" ng-if=\"$ctrl.model.centerId !== false && !$ctrl.noCenters && $ctrl.centers\" ng-show=\"state.getUserCenters().length > 1\"> <ff-label flex=\"0 0 100px\"><span translate=\"REPORTS.OPTIONS.CENTER\"></span></ff-label> <ff-select ff-model=\"$ctrl.model.centerId\" ff-options=\"center.id as center.name for center in $ctrl.centers\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><span translate=\"REPORTS.OPTIONS.SIZE\"></span></ff-label> <ff-select ff-model=\"$ctrl.model.paperSize\"> <option ng-repeat=\"size in $ctrl.optsPaperSize\" value=\"{{size.id}}\">{{size.name}}</option> </ff-select> </label> <ff-row> <ff-label flex=\"0 0 100px\"><span translate=\"REPORTS.OPTIONS.LAYOUT\"></span></ff-label> <ff-static> <div class=\"ff-grid gutter-h-half\" role=\"radiogroup\" aria-label=\"{{'REPORTS.OPTIONS.LAYOUT' | translate}}\"> <label flex=\"0 0 auto\"> <ff-radio name=\"paperLayout\" ff-model=\"$ctrl.model.paperLayout\" ff-value=\"'p'\"> <span translate=\"REPORTS.OPTIONS.LAYOUT.PORTRAIT\"></span> </ff-radio> </label> <label flex=\"0 0 auto\"> <ff-radio name=\"paperLayout\" ff-model=\"$ctrl.model.paperLayout\" ff-value=\"'l'\"> <span translate=\"REPORTS.OPTIONS.LAYOUT.LANDSCAPE\"></span> </ff-radio> </label> </div> </ff-static> </ff-row> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reports/services/opts-paper-size.service.js":
/*!************************************************************!*\
  !*** ./shared/reports/services/opts-paper-size.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Report / Paper Size
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.optsPaperSize', []).factory('optsPaperSize', function () {
  return [{
    id: 'letter',
    name: 'Letter'
  }, {
    id: 'A4',
    name: 'A4'
  }, {
    id: 'A3',
    name: 'A3'
  }, {
    id: 'A2',
    name: 'A2'
  }, {
    id: 'A1',
    name: 'A1'
  }, {
    id: 'A0',
    name: 'A0'
  }];
}));

/***/ })

}]);
//# sourceMappingURL=invoice~reports~._shared_reports_d.js.map?_rev=d4a5aa50efc3d51ac0a1