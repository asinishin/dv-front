(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports~._bundles_reports_m"],{

/***/ "./bundles/reports/mailbox-report/mailbox-report-columns.service.js":
/*!**************************************************************************!*\
  !*** ./bundles/reports/mailbox-report/mailbox-report-columns.service.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Columns for Mailbox Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.mailboxReportColumns', []).factory('mailboxReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'number',
    _title: 'MAILBOX_REPORT.COLUMNS.BOX_ID',
    include: true
  }, {
    dataKey: 'company',
    _title: 'MAILBOX_REPORT.COLUMNS.COMPANY',
    include: true,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'fullName',
    _title: 'MAILBOX_REPORT.COLUMNS.USER_NAME',
    include: true,
    styles: {
      minCellWidth: 120
    }
  }, {
    dataKey: 'handling',
    _title: 'MAILBOX_REPORT.COLUMNS.HANDLING',
    include: true,
    styles: {
      cellWidth: 'wrap'
    }
  }, {
    dataKey: 'key',
    _title: 'MAILBOX_REPORT.COLUMNS.KEY_ID',
    include: true,
    styles: {
      cellWidth: 'wrap'
    }
  }, {
    dataKey: 'names',
    _title: 'MAILBOX_REPORT.COLUMNS.OTHER_NAMES',
    include: true
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/mailbox-report/mailbox-report.controller.js":
/*!*********************************************************************!*\
  !*** ./bundles/reports/mailbox-report/mailbox-report.controller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.mailboxReport', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reports.reportColumns', 'deskworks.reports.reportOwnerRegion', 'deskworks.reports.mailboxReport.service', 'deskworks.reports.mailboxReportColumns']).controller('MailboxReportCtrl', ["$scope", "$timeout", "$translate", "state", "helper", "reportHelper", "ReportBuilder", "MailboxReport", "mailboxReportColumns", "reportStyles", function ($scope, $timeout, $translate, state, helper, reportHelper, ReportBuilder, MailboxReport, mailboxReportColumns, reportStyles) {
  var vm = this;
  vm.config = {
    reportName: $translate.instant('MAILBOX_REPORT.REPORT_NAME'),
    reportOptions: {},
    reportOwnerRegion: {},
    reportColumns: {
      columns: angular.copy(mailboxReportColumns)
    },
    getReportData: function getReportData() {
      return MailboxReport.query({
        centerId: vm.config.reportOptions.centerId,
        ownerId: vm.config.reportOwnerRegion.ownerId,
        regionId: vm.config.reportOwnerRegion.regionId
      }).$promise;
    }
  };
  state.setPageTitle(vm.config.reportName);
  vm.reportBuilder = new ReportBuilder(vm.config);
  /**
   * Watch for data report depends on (center, columns, order) and generate new report
   */

  var debounceTimeout;
  $scope.$watch(function (_) {
    return {
      reportOptions: vm.config.reportOptions,
      reportColumns: vm.config.reportColumns,
      orderBy: vm.config.orderBy,
      reportOwnerRegion: vm.config.reportOwnerRegion
    };
  }, function (_) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function () {
      vm.pdf = null;
      if (angular.isUndefined(vm.config.reportOptions.centerId)) return;
      vm.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
        vm.pdf = blob;
      });
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  vm.downloadPdf = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.pdf,
      fileName: vm.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
   * Generate and download CSV report
   */


  vm.downloadCsv = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.reportBuilder.buildCsv(reportDataCallback),
      fileName: vm.reportBuilder.getReportFileName('csv')
    });
  };
  /**
   * Report data callback for ReportBuilder, returns report data matrix and columns
   */


  function reportDataCallback(config) {
    var _context, _context2, _context4;

    var result = {
      columns: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = config.reportColumns.columns).call(_context, function (item) {
        return item.include;
      }),
      rows: config.reportData,
      styles: []
    };
    result.rows = _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default()(reportHelper).call(reportHelper, result.rows, config.orderBy);
    result.rows = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = result.rows).call(_context2, function (item) {
      var _context3;

      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = result.columns).call(_context3, function (col) {
        return item[col.dataKey];
      });
    });
    result.styles = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = result.rows).call(_context4, function (item, idx) {
      return idx % 2 ? null : reportStyles.rowOdd;
    });
    return result;
  }
}]));

/***/ }),

/***/ "./bundles/reports/mailbox-report/mailbox-report.service.js":
/*!******************************************************************!*\
  !*** ./bundles/reports/mailbox-report/mailbox-report.service.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * MailboxReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.mailboxReport.service', ['ngResource', 'deskworks.config']).factory('MailboxReport', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/mailbox-reports');
  return $resource(url, {
    centerId: '@centerId'
  }, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
}]));

/***/ }),

/***/ "./bundles/reports/mailbox-report/mailbox-report.tpl.html":
/*!****************************************************************!*\
  !*** ./bundles/reports/mailbox-report/mailbox-report.tpl.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"mailboxReport\" class=\"gutter-v\"> <form name=\"formMailboxReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <report-columns model=\"vm.config.reportColumns\"></report-columns> </div> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <div class=\"gutter-v\"> <report-options model=\"vm.config.reportOptions\"> <report-order-by model=\"vm.config.orderBy\" report-columns=\"vm.config.reportColumns.columns\"></report-order-by> </report-options> <report-owner-region model=\"vm.config.reportOwnerRegion\" report-data=\"vm.config.reportData\"></report-owner-region> </div> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"vm.downloadPdf()\" ff-disabled=\"!vm.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"vm.downloadCsv()\" ff-disabled=\"!vm.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"vm.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/member-statement/member-statement-columns.service.js":
/*!******************************************************************************!*\
  !*** ./bundles/reports/member-statement/member-statement-columns.service.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Member Statement
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.memberStatementColumns', []).factory('memberStatementColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'date',
    _title: 'MEMBER_STATEMENT.COLUMNS.DATE',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'item',
    _title: 'MEMBER_STATEMENT.COLUMNS.ITEM',
    include: true
  }, {
    dataKey: 'price',
    _title: 'MEMBER_STATEMENT.COLUMNS.UNIT_PRICE',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'qty',
    _title: 'MEMBER_STATEMENT.COLUMNS.QUANTITY',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    }
  }, {
    dataKey: 'amountBilled',
    _title: 'MEMBER_STATEMENT.COLUMNS.AMOUNT_BILLED',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'amountPaid',
    _title: 'MEMBER_STATEMENT.COLUMNS.AMOUNT_PAID',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'balance',
    _title: 'MEMBER_STATEMENT.COLUMNS.BALANCE',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/member-statement/member-statement.controller.js":
/*!*************************************************************************!*\
  !*** ./bundles/reports/member-statement/member-statement.controller.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");






/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.memberStatement', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reports.reportDates', 'deskworks.reports.memberStatement.service', 'deskworks.reports.memberStatementColumns']).controller('MemberStatementCtrl', ["$rootScope", "$scope", "$route", "$timeout", "$filter", "$translate", "state", "helper", "reportHelper", "reportStyles", "ReportBuilder", "user", "MemberStatement", "memberStatementColumns", function ($rootScope, $scope, $route, $timeout, $filter, $translate, state, helper, reportHelper, reportStyles, ReportBuilder, user, MemberStatement, memberStatementColumns) {
  var vm = this;
  vm.config = {
    reportName: $translate.instant('MEMBER_STATEMENT.REPORT_NAME'),
    reportOptions: {
      centerId: false
    },
    reportColumns: {
      columns: memberStatementColumns
    },
    reportDates: {
      fromDate: moment(),
      toDate: moment()
    },
    reportFor: user.fullNameCompany,
    getReportData: function getReportData() {
      return MemberStatement.get({
        centerId: state.getCurrentCenterId(),
        userId: state.getCurrentUserId(),
        fromDate: $filter('date')(vm.config.reportDates.fromDate, 'yyyy-MM-dd'),
        toDate: $filter('date')(vm.config.reportDates.toDate, 'yyyy-MM-dd')
      }).$promise;
    }
  };
  state.setPageTitle($translate.instant('MEMBER_STATEMENT.PAGE_TITLE', {
    userName: vm.config.reportFor
  }));
  vm.config.reportDates.fromDate.subtract(1, 'M'); // set fromDate to one month before

  vm.reportBuilder = new ReportBuilder(vm.config);
  /**
   * Watch for data report depends on (center, columns, order) and generate new report
   */

  var debounceTimeout;
  $scope.$watch(function (_) {
    return {
      reportOptions: vm.config.reportOptions,
      reportDates: vm.config.reportDates
    };
  }, function (newVal, oldVal) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function (_) {
      vm.pdf = null;

      if (angular.isDefined(vm.config.reportOptions.centerId)) {
        var newDate = newVal.reportDates.fromDate,
            oldDate = oldVal.reportDates.fromDate;

        if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) {
          vm.config.reportData = null;
        }

        newDate = newVal.reportDates.toDate;
        oldDate = oldVal.reportDates.toDate;

        if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) {
          vm.config.reportData = null;
        }

        vm.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
          vm.pdf = blob;
        });
      }
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  vm.downloadPdf = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.pdf,
      fileName: vm.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
   * Report data callback for ReportBuilder, returns report data matrix and columns
   */


  function reportDataCallback(config) {
    var _context, _context3;

    var result = {
      columns: config.reportColumns.columns,
      rows: [],
      styles: []
    };
    result.rows = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = config.reportData.transactions).call(_context, function (transaction, idx) {
      var _context2;

      result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = result.columns).call(_context2, function (col) {
        return transaction[col.dataKey];
      });
    });
    result.rows.unshift([false, $translate.instant('MEMBER_STATEMENT.BALANCE_FORWARD') + ':', false, false, false, false, config.reportData.balanceForward]);
    result.styles.unshift(reportStyles.h2);
    result.rows.push([false, $translate.instant('MEMBER_STATEMENT.TOTALS') + ':', false, false, config.reportData.totals.amountBilled, config.reportData.totals.amountPaid, config.reportData.totals.balance]);
    result.styles.push(reportStyles.h2);
    var depositRowStyles = [];

    var depositRows = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = config.reportData.depositTransactions).call(_context3, function (transaction, idx) {
      var _context4;

      depositRowStyles.push(idx % 2 ? null : reportStyles.rowOdd);
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context4 = result.columns).call(_context4, function (col) {
        return transaction[col.dataKey];
      });
    });

    if (depositRows.length > 0) {
      depositRows.unshift([false, $translate.instant('MEMBER_STATEMENT.SECURITY_DEPOSITS') + ':', false, false, config.reportData.depositTotals.amountBilled, config.reportData.depositTotals.amountPaid, config.reportData.depositTotals.balance]);
      depositRowStyles.unshift(reportStyles.h2);
      result.rows = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(depositRows).call(depositRows, result.rows);
      result.styles = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(depositRowStyles).call(depositRowStyles, result.styles);
    }

    return result;
  }

  $rootScope.$on('CHANGE-CENTER', $route.reload); // due to route.reloadOnSearch: false
}]));

/***/ }),

/***/ "./bundles/reports/member-statement/member-statement.service.js":
/*!**********************************************************************!*\
  !*** ./bundles/reports/member-statement/member-statement.service.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * MemberStatement service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.memberStatement.service', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('MemberStatement', ["$resource", "$q", "datesDeserializer", "deskworksConfig", function ($resource, $q, datesDeserializer, deskworksConfig) {
  var desDates = datesDeserializer(['transactions.date', 'depositTransactions.date']);
  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/member-statements');
  return $resource(url, {
    centerId: '@centerId',
    userId: '@userId',
    fromDate: '@fromDate',
    toDate: '@toDate'
  }, {
    get: {
      method: 'GET',
      transformResponse: [angular.fromJson, desDates]
    }
  });
}]));

/***/ }),

/***/ "./bundles/reports/member-statement/member-statement.tpl.html":
/*!********************************************************************!*\
  !*** ./bundles/reports/member-statement/member-statement.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"memberStatement\" class=\"gutter-v\"> <form name=\"formMemberStatement\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 65%', md: '0 0 50%'}\"> <report-dates model=\"vm.config.reportDates\"></report-dates> </div> <div flex=\"{lg: '0 0 35%', md: '0 0 50%'}\"> <report-options model=\"vm.config.reportOptions\"></report-options> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"vm.downloadPdf()\" ff-disabled=\"!vm.pdf\"> <span translate=\"MEMBER_STATEMENT.BTN_PDF\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"MEMBER_STATEMENT.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"vm.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/member-usage-report/member-usage-report-columns.service.js":
/*!************************************************************************************!*\
  !*** ./bundles/reports/member-usage-report/member-usage-report-columns.service.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Member Usage Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.memberUsageReportColumns', ['deskworks.helper']).factory('memberUsageReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'date',
    _title: 'MEMBER_USAGE_REPORT.COLUMNS.DATE',
    include: true,
    defaultOrder: true,
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'userName',
    _title: 'MEMBER_USAGE_REPORT.COLUMNS.USER_NAME',
    include: true
  }, {
    dataKey: 'userEmail',
    _title: 'MEMBER_USAGE_REPORT.COLUMNS.USER_EMAIL',
    include: true
  }, {
    dataKey: 'checkInTime',
    _title: 'MEMBER_USAGE_REPORT.COLUMNS.CHECK_IN',
    include: true,
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'shortTime');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortTime');
    }
  }, {
    dataKey: 'checkOutTime',
    _title: 'MEMBER_USAGE_REPORT.COLUMNS.CHECK_OUT',
    include: true,
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'shortTime');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortTime');
    }
  }, {
    dataKey: 'usageHours',
    _title: 'MEMBER_USAGE_REPORT.COLUMNS.HOURS',
    include: true,
    styles: {
      halign: 'right'
    }
  }, {
    dataKey: 'usagePasses',
    _title: 'MEMBER_USAGE_REPORT.COLUMNS.PASSES',
    include: true,
    styles: {
      halign: 'right'
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/member-usage-report/member-usage-report.controller.js":
/*!*******************************************************************************!*\
  !*** ./bundles/reports/member-usage-report/member-usage-report.controller.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");










/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.memberUsageReport', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_9__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reports.reportDates', 'deskworks.reports.memberUsageReport.service', 'deskworks.reports.memberUsageReportColumns']).controller('MemberUsageReportCtrl', ["$rootScope", "$scope", "$timeout", "$filter", "$route", "$q", "$translate", "state", "helper", "reportHelper", "reportStyles", "ReportBuilder", "MemberUsageReport", "memberUsageReportColumns", function ($rootScope, $scope, $timeout, $filter, $route, $q, $translate, state, helper, reportHelper, reportStyles, ReportBuilder, MemberUsageReport, memberUsageReportColumns) {
  var vm = this;
  vm.config = {
    reportName: $translate.instant('MEMBER_USAGE_REPORT.REPORT_NAME'),
    reportOptions: {},
    reportColumns: {
      columns: memberUsageReportColumns
    },
    reportDates: {
      fromDate: moment(),
      toDate: moment()
    },
    getReportData: function getReportData() {
      return MemberUsageReport.query({
        centerId: vm.config.reportOptions.centerId,
        userId: state.getCurrentUserId(),
        fromDate: $filter('date')(vm.config.reportDates.fromDate, 'yyyy-MM-dd'),
        toDate: $filter('date')(vm.config.reportDates.toDate, 'yyyy-MM-dd')
      }).$promise.then(function (usages) {
        angular.forEach(usages, function (usage) {
          usage.date = usage.checkInTime.clone().hour(0).minute(0).second(0).millisecond(0);
        });
        return usages;
      });
    }
  };
  state.setPageTitle(vm.config.reportName);
  vm.config.reportDates.fromDate.date(1); // set fromDate to first day of current month

  vm.config.reportDates.toDate.add(1, 'M').date(0); // set toDate to last day of current month

  vm.reportBuilder = new ReportBuilder(vm.config);
  /**
   * Watch for data report depends on (center, columns, order) and generate new report
   */

  var debounceTimeout;
  $scope.$watch(function (_) {
    return {
      reportOptions: vm.config.reportOptions,
      reportDates: vm.config.reportDates,
      reportColumns: vm.config.reportColumns,
      orderBy: vm.config.orderBy
    };
  }, function (newVal, oldVal) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function (_) {
      vm.pdf = null;

      if (angular.isDefined(vm.config.reportOptions.centerId)) {
        var newDate = newVal.reportDates.fromDate,
            oldDate = oldVal.reportDates.fromDate;

        if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) {
          vm.config.reportData = null;
        }

        newDate = newVal.reportDates.toDate;
        oldDate = oldVal.reportDates.toDate;

        if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) {
          vm.config.reportData = null;
        }

        vm.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
          vm.pdf = blob;
        });
      }
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  vm.downloadPdf = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.pdf,
      fileName: vm.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
  * Generate and download CSV report
  */


  vm.downloadCsv = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.reportBuilder.buildCsv(reportDataCallback),
      fileName: vm.reportBuilder.getReportFileName('csv')
    });
  };
  /**
   * Reload on changing current user
   */


  var offChangeUser = $rootScope.$on('CHANGE-USER', $route.reload);
  $scope.$on('$destroy', offChangeUser);
  /**
   * Report data callback for ReportBuilder, returns report data matrix and columns
   */

  function reportDataCallback(config) {
    var _context, _context2;

    var result = {
      columns: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = config.reportColumns.columns).call(_context, function (item) {
        return item.include;
      }),
      rows: [],
      styles: []
    };

    var data = _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default()(reportHelper).call(reportHelper, config.reportData, config.orderBy);

    var hoursIdx = helper.findIndexByKeyValue(result.columns, 'dataKey', 'usageHours');
    var passesIdx = helper.findIndexByKeyValue(result.columns, 'dataKey', 'usagePasses');

    var arr = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = Array.apply(null, new Array(result.columns.length))).call(_context2, function (val) {
      return false;
    });

    var hours = 0,
        passes = 0; // subtotals
    // Finally, convert to matrix

    data.forEach(function (usage, idx) {
      var _context3;

      result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = result.columns).call(_context3, function (col) {
        return usage[col.dataKey];
      }));
      hours += usage.usageHours ? usage.usageHours : 0;
      passes += usage.usagePasses ? usage.usagePasses : 0;

      if ((config.orderBy === 'date' || config.orderBy === 'userName') && (hoursIdx >= 0 || passesIdx >= 0)) {
        var curr = config.orderBy === 'date' ? usage[config.orderBy].unix() : usage[config.orderBy] || null;
        var next;
        if (idx < data.length - 1) next = config.orderBy === 'date' ? data[idx + 1][config.orderBy].unix() : data[idx + 1][config.orderBy] || null;

        if (curr !== next) {
          var _context4;

          hours = Math.round(hours * 100) / 100;
          passes = Math.round(passes * 100) / 100;
          var row;
          if (hoursIdx >= 0) row = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(arr).call(arr, 0, Math.max(hoursIdx - 1, 0))).call(_context4, [$translate.instant('MEMBER_USAGE_REPORT.TOTALS.SUBTOTAL') + ':', hours]);

          if (passesIdx >= 0) {
            var _context5;

            if (hoursIdx >= 0) row.push(passes);else row = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(arr).call(arr, 0, Math.max(passesIdx - 1, 0))).call(_context5, [$translate.instant('MEMBER_USAGE_REPORT.TOTALS.SUBTOTAL') + ':', passes]);
          }

          result.rows.push(row);
          result.styles.push(reportStyles.h2);
          hours = 0;
          passes = 0;
        }
      }
    });
    return result;
  }
}]));

/***/ }),

/***/ "./bundles/reports/member-usage-report/member-usage-report.service.js":
/*!****************************************************************************!*\
  !*** ./bundles/reports/member-usage-report/member-usage-report.service.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * MemberUsageReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.memberUsageReport.service', ['ngResource', 'datesDeserializer', 'deserializeNumbers', 'deskworks.config']).factory('MemberUsageReport', ["$resource", "datesDeserializer", "deserializeNumbers", "deskworksConfig", function ($resource, datesDeserializer, deserializeNumbers, deskworksConfig) {
  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/member-usage-reports');
  var desDates = datesDeserializer(['checkInTime', 'checkOutTime']);
  var desNumbers = deserializeNumbers(['usageHours', 'usagePasses']);
  return $resource(url, {
    centerId: '@centerId',
    userId: '@userId',
    fromDate: '@fromDate',
    toDate: '@toDate'
  }, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates, desNumbers]
    }
  });
}]));

/***/ }),

/***/ "./bundles/reports/member-usage-report/member-usage-report.tpl.html":
/*!**************************************************************************!*\
  !*** ./bundles/reports/member-usage-report/member-usage-report.tpl.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"memberUsageReport\" class=\"gutter-v\"> <form name=\"formMemberUsageReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <div class=\"gutter-v\"> <report-dates model=\"vm.config.reportDates\"></report-dates> <report-columns model=\"vm.config.reportColumns\"></report-columns> </div> </div> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <report-options model=\"vm.config.reportOptions\"> <report-order-by model=\"vm.config.orderBy\" report-columns=\"vm.config.reportColumns.columns\"></report-order-by> </report-options> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"vm.downloadPdf()\" ff-disabled=\"!vm.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"vm.downloadCsv()\" ff-disabled=\"!vm.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"vm.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/membership-report/membership-report-columns.service.js":
/*!********************************************************************************!*\
  !*** ./bundles/reports/membership-report/membership-report-columns.service.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Membership Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.membershipReportColumns', []).factory('membershipReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'company',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.COMPANY',
    include: true,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'name',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.NAME',
    include: true,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'address',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.ADDRESS',
    include: false,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'comments',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.COMMENTS',
    include: false,
    styles: {
      minCellWidth: 250
    }
  }, {
    dataKey: 'email',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.EMAIL',
    include: false,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'phone',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.PHONE',
    include: false,
    styles: {
      minCellWidth: 100
    }
  }, {
    dataKey: 'facility',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.FACILITY',
    include: false,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'joinDate',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.JOIN_DATE',
    include: false,
    styles: {
      minCellWidth: 100
    },
    pdf: function pdf(val) {
      return $filter('date')(val, 'mediumDate');
    },
    csv: function csv(val) {
      return $filter('date')(val, 'shortDate');
    }
  }, {
    dataKey: 'occupation',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.OCCUPATION',
    include: true,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'pricelist',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.PRICE_LIST',
    include: true,
    styles: {
      minCellWidth: 160
    }
  }, {
    dataKey: 'status',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.STATUS',
    include: true,
    styles: {
      cellWidth: 'wrap'
    }
  }, {
    dataKey: 'printerCodes',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.PRINTER_CODES',
    include: false
  }, {
    dataKey: 'leadSource',
    _title: 'MEMBERSHIP_REPORT.COLUMNS.LEAD_SOURCE',
    include: false
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/membership-report/membership-report.controller.js":
/*!***************************************************************************!*\
  !*** ./bundles/reports/membership-report/membership-report.controller.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_membership_filter_membership_filter_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/membership-filter/membership-filter.directive */ "./shared/membership-filter/membership-filter.directive.js");
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");









/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.membershipReport', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_8__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reports.reportColumns', 'deskworks.reports.reportOwnerRegion', 'deskworks.reports.membershipReport.service', 'deskworks.reports.membershipReportColumns', shared_membership_filter_membership_filter_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name]).controller('MembershipReportCtrl', ["$scope", "$timeout", "$location", "$translate", "state", "helper", "reportHelper", "ReportBuilder", "MembershipReport", "membershipReportColumns", "fields", "reportStyles", function ($scope, $timeout, $location, $translate, state, helper, reportHelper, ReportBuilder, MembershipReport, membershipReportColumns, fields, reportStyles) {
  var vm = this;
  vm.config = {
    reportName: $translate.instant('MEMBERSHIP_REPORT.REPORT_NAME'),
    reportOptions: {},
    reportOwnerRegion: {},
    reportColumns: {
      columns: angular.copy(membershipReportColumns)
    },
    getReportData: function getReportData() {
      var params = {
        centerId: vm.config.reportOptions.centerId,
        ownerId: vm.config.reportOwnerRegion.ownerId,
        regionId: vm.config.reportOwnerRegion.regionId
      };
      return MembershipReport.query(angular.extend(params, vm.membershipFilter)).$promise.then(function (data) {
        return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(data).call(data, function (item) {
          if (item.fields) {
            // flatten fields sub-object
            item = angular.extend(item, item.fields);
            delete item.fields;
          }

          return item;
        });
      });
    }
  };
  state.setPageTitle(vm.config.reportName);
  vm.reportBuilder = new ReportBuilder(vm.config); // Add custom and shareable fields to columns

  angular.forEach(fields, function (field) {
    vm.config.reportColumns.columns.push({
      dataKey: field.id,
      title: field.name,
      include: false
    });
  });
  /**
   * Watch for data report depends on (center, columns, order) and generate new report
   */

  var debounceTimeout;
  $scope.$watch(function () {
    return {
      reportOptions: vm.config.reportOptions,
      reportColumns: vm.config.reportColumns,
      reportOwnerRegion: vm.config.reportOwnerRegion,
      membershipFilter: vm.membershipFilter,
      orderBy: vm.config.orderBy
    };
  }, function (newVal, oldVal) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function () {
      vm.pdf = null;
      if (newVal && oldVal && !angular.equals(newVal.membershipFilter, oldVal.membershipFilter)) vm.config.reportData = null;
      if (angular.isUndefined(vm.config.reportOptions.centerId)) return;
      vm.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
        vm.pdf = blob;
      });
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  vm.downloadPdf = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.pdf,
      fileName: vm.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
   * Generate and download CSV report
   */


  vm.downloadCsv = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.reportBuilder.buildCsv(reportDataCallback),
      fileName: vm.reportBuilder.getReportFileName('csv')
    });
  };
  /**
   * Report data callback for ReportBuilder, returns report data matrix and columns
   */


  function reportDataCallback(config) {
    var _context, _context2, _context4;

    var result = {
      columns: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(_context = config.reportColumns.columns).call(_context, function (item) {
        return item.include;
      }),
      rows: config.reportData,
      styles: []
    };
    result.rows = _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3___default()(reportHelper).call(reportHelper, result.rows, config.orderBy);
    result.rows = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = result.rows).call(_context2, function (item) {
      var _context3;

      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = result.columns).call(_context3, function (col) {
        return item[col.dataKey];
      });
    });
    result.styles = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = result.rows).call(_context4, function (item, idx) {
      return idx % 2 ? null : reportStyles.rowOdd;
    });
    return result;
  }
}]));

/***/ }),

/***/ "./bundles/reports/membership-report/membership-report.service.js":
/*!************************************************************************!*\
  !*** ./bundles/reports/membership-report/membership-report.service.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * MembershipReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.membershipReport.service', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('MembershipReport', ["$resource", "datesDeserializer", "deskworksConfig", function ($resource, datesDeserializer, deskworksConfig) {
  var desDates = datesDeserializer(['joinDate']);
  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/membership-reports');
  return $resource(url, {
    centerId: '@centerId'
  }, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates, deserialize]
    }
  });

  function deserialize(data) {
    angular.forEach(data, function (item) {
      angular.forEach(item.fields, function (field) {
        item[field.id] = field.value;
      }); // flatten nested fields

      delete item.fields;
    });
    return data;
  }
}]));

/***/ }),

/***/ "./bundles/reports/membership-report/membership-report.tpl.html":
/*!**********************************************************************!*\
  !*** ./bundles/reports/membership-report/membership-report.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"membershipReport\" class=\"gutter-v\"> <form name=\"formMembershipReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 65%', md: '0 0 50%'}\"> <report-columns model=\"vm.config.reportColumns\"></report-columns> </div> <div flex=\"{lg: '0 0 35%', md: '0 0 50%'}\"> <div class=\"gutter-v\"> <report-options model=\"vm.config.reportOptions\"> <report-order-by model=\"vm.config.orderBy\" report-columns=\"vm.config.reportColumns.columns\"></report-order-by> </report-options> <report-owner-region model=\"vm.config.reportOwnerRegion\" report-data=\"vm.config.reportData\"></report-owner-region> <ff-panel> <ff-panel-header><span translate=\"MEMBERSHIP_REPORT.MEMBERSHIP.HEADER\"></span></ff-panel-header> <membership-filter ff-model=\"vm.membershipFilter\" layout=\"2col\"></membership-filter> </ff-panel> </div> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"vm.downloadPdf()\" ff-disabled=\"!vm.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"vm.downloadCsv()\" ff-disabled=\"!vm.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"vm.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/pass-usage-report/pass-usage-report-columns.service.js":
/*!********************************************************************************!*\
  !*** ./bundles/reports/pass-usage-report/pass-usage-report-columns.service.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Pass Usage Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.passUsageReportColumns', []).factory('passUsageReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'memberCompany',
    _title: 'PASS_USAGE_REPORT.COLUMNS.COMPANY',
    include: true,
    styles: {
      minCellWidth: 200
    }
  }, {
    dataKey: 'memberName',
    _title: 'PASS_USAGE_REPORT.COLUMNS.NAME',
    include: true,
    defaultOrder: true,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'passesUsedCost',
    _title: 'PASS_USAGE_REPORT.COLUMNS.PASSES_USED_COST',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'passCreditAppliedCost',
    _title: 'PASS_USAGE_REPORT.COLUMNS.PASS_CREDIT_APPLIED_COST',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'costBalance',
    _title: 'PASS_USAGE_REPORT.COLUMNS.COST_BALANCE',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/pass-usage-report/pass-usage-report.controller.js":
/*!***************************************************************************!*\
  !*** ./bundles/reports/pass-usage-report/pass-usage-report.controller.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");











function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PassUsageReportCtrl', ['debounce', shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_12__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_13__["default"].name, 'deskworks.state', 'deskworks.reports.reportDates', 'deskworks.reports.reportColumns', 'deskworks.reports.ReportBuilder', 'deskworks.PassUsageReport', 'deskworks.passUsageReportColumns', shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_10__["default"].name]).controller('PassUsageReportCtrl', ["$scope", "$q", "$filter", "$translate", "state", "helper", "dwAlerts", "debounce", "reportStyles", "reportHelper", "PassUsageReport", "passUsageReportColumns", function ($scope, $q, $filter, $translate, state, helper, dwAlerts, debounce, reportStyles, reportHelper, PassUsageReport, passUsageReportColumns) {
  var $ctrl = this;
  var paramsChanged = reportHelper.paramsChanged,
      loadResources = reportHelper.loadResources;
  $ctrl.config = {
    reportName: $translate.instant('PASS_USAGE_REPORT.REPORT_NAME')
  };
  $ctrl.params = {
    fromDate: state.getParam('fromDate') ? $filter('toDate')(state.getParam('fromDate')) : moment().startOf('month'),
    toDate: state.getParam('toDate') ? $filter('toDate')(state.getParam('toDate')) : moment().endOf('month'),
    orderBy: state.getParam('orderBy') || 'memberName'
  };
  $ctrl.resources = null;
  $ctrl.data = null;
  $ctrl.columns = passUsageReportColumns;
  state.setPageTitle($ctrl.config.reportName);
  /**
   * Watch report params and generate new report
   */

  $scope.$watch('$ctrl.params', debounce(function (np, op) {
    $ctrl.pdf = null;
    $ctrl.report = null;
    if (helper.pointFirstInvalid('#passUsageReport')) return;
    if (!$ctrl.params.fromDate || !$ctrl.params.toDate) return;
    if (paramsChanged(np, op, ['fromDate', 'toDate', 'centerId'])) $ctrl.data = null;
    $q.all({
      resources: $ctrl.resources || loadResources(),
      data: $ctrl.data || PassUsageReport.query($ctrl.params).catch(function (err) {
        return dwAlerts.error(err, 'Failed to query report.');
      })
    }).then(function (result) {
      $ctrl.resources = result.resources;
      $ctrl.data = result.data;
    }).then(function () {
      $ctrl.report = dataToReport($ctrl.params, $ctrl.data);
      var doc = reportHelper.buildPdf({
        config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
        report: $ctrl.report,
        resources: $ctrl.resources
      });
      $ctrl.pdf = doc.output('blob');
    });
  }, 100), true);
  /**
   * @param params
   * @param data
   */

  function dataToReport(params, data) {
    var _context;

    var result = {
      columns: passUsageReportColumns,
      rows: [],
      styles: []
    };
    data = _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_7___default()(reportHelper).call(reportHelper, data, $ctrl.params.orderBy);
    result.rows = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8___default()(_context = result.rows).call(_context, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(data).call(data, function (item, idx) {
      var _context2;

      result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(_context2 = result.columns).call(_context2, function (col) {
        return item[col.dataKey];
      });
    }));
    var passesUsedCostTotal = 0,
        passCreditAppliedCostTotal = 0,
        costBalanceTotal = 0;
    data.forEach(function (item) {
      passesUsedCostTotal += helper.toNumber(item.passesUsedCost);
      passCreditAppliedCostTotal += helper.toNumber(item.passCreditAppliedCost);
      costBalanceTotal += helper.toNumber(item.costBalance);
    });
    passesUsedCostTotal = helper.round(passesUsedCostTotal);
    passCreditAppliedCostTotal = helper.round(passCreditAppliedCostTotal);
    costBalanceTotal = helper.round(costBalanceTotal);
    var totals = {
      passesUsedCostTotal: passesUsedCostTotal,
      passCreditAppliedCostTotal: passCreditAppliedCostTotal,
      costBalanceTotal: costBalanceTotal
    };
    var totalRow = [];
    var totalRowNameCell = {
      content: $translate.instant('PASS_USAGE_REPORT.TOTALS').toUpperCase() + ':',
      styles: {
        halign: 'left'
      }
    };
    result.columns.forEach(function (col) {
      var totalVal = totals["".concat(col.dataKey, "Total")];
      if (totalVal || typeof totalVal === 'number') totalRow.push({
        content: totalVal
      });
    }); // add name of total row, add empty cell if needed

    if (result.columns[0].dataKey === 'memberCompany' && (result.columns[1] || {}).dataKey === 'memberName') {
      totalRow.unshift({
        content: ' '
      });
      totalRow.unshift(totalRowNameCell);
    } else if (result.columns[0].dataKey === 'memberCompany' || result.columns[0].dataKey === 'memberName') {
      totalRow.unshift(totalRowNameCell);
    }

    if (data.length) {
      result.rows.unshift(totalRow);
      result.styles.unshift(reportStyles.h2);
      result.rows.push(totalRow);
      result.styles.push(reportStyles.h2);
    }

    return result;
  }
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
  };
  /**
   * Generate and download CSV report
   */


  $ctrl.downloadCsv = function () {
    if (!$ctrl.pdf) return;
    var fileName = reportHelper.getReportFileName({
      extension: 'csv',
      config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
      resources: $ctrl.resources
    });
    var csv = reportHelper.buildCsv({
      report: $ctrl.report
    });
    reportHelper.download({
      blob: csv,
      fileName: fileName
    });
  };
}]));

/***/ }),

/***/ "./bundles/reports/pass-usage-report/pass-usage-report.service.js":
/*!************************************************************************!*\
  !*** ./bundles/reports/pass-usage-report/pass-usage-report.service.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * PassUsageReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PassUsageReport', ['ngResource', 'deskworks.config']).factory('PassUsageReport', ["$resource", "$filter", "deskworksConfig", function ($resource, $filter, deskworksConfig) {
  var url = deskworksConfig.getApiAbsUrl('/reports/day-pass-usage');
  var res = $resource(url, {
    centerId: '@centerId',
    fromDate: '@fromDate',
    toDate: '@toDate'
  }, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  return {
    query: function query(params) {
      return res.query({
        centerId: params.centerId || null,
        fromDate: $filter('date')(params.fromDate, 'yyyy-MM-dd'),
        toDate: $filter('date')(params.toDate, 'yyyy-MM-dd')
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/reports/pass-usage-report/pass-usage-report.tpl.html":
/*!**********************************************************************!*\
  !*** ./bundles/reports/pass-usage-report/pass-usage-report.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"passUsageReport\" class=\"gutter-v\"> <form name=\"formPassUsageReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <report-dates model=\"$ctrl.params\"></report-dates> </div> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <report-options model=\"$ctrl.params\"> <report-order-by model=\"$ctrl.params.orderBy\" report-columns=\"$ctrl.columns\"></report-order-by> </report-options> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/passport-reservation-usage-report/passport-reservation-usage-report-columns.service.js":
/*!****************************************************************************************************************!*\
  !*** ./bundles/reports/passport-reservation-usage-report/passport-reservation-usage-report-columns.service.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Columns for Passport Reservation Usage Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.passportReservationUsageReportColumns', []).factory('passportReservationUsageReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'unitName',
    _title: 'PASSPORT_RESERVATION_USAGE_REPORT.COLUMNS.RESERVATION_UNIT'
  }, {
    dataKey: 'duration',
    _title: 'PASSPORT_RESERVATION_USAGE_REPORT.COLUMNS.HOURS',
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('hoursMinutes')(v);
    },
    csv: function csv(v) {
      return $filter('hoursMinutes')(v);
    }
  }, {
    dataKey: 'startTime',
    _title: 'PASSPORT_RESERVATION_USAGE_REPORT.COLUMNS.START_TIME',
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      var _context;

      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = "".concat($filter('date')(v, 'mediumDate'), " ")).call(_context, $filter('date')(v, 'shortTime'));
    },
    csv: function csv(v) {
      return $filter('date')(v, 'medium');
    }
  }, {
    dataKey: 'endTime',
    _title: 'PASSPORT_RESERVATION_USAGE_REPORT.COLUMNS.END_TIME',
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      var _context2;

      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = "".concat($filter('date')(v, 'mediumDate'), " ")).call(_context2, $filter('date')(v, 'shortTime'));
    },
    csv: function csv(v) {
      return $filter('date')(v, 'medium');
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/passport-reservation-usage-report/passport-reservation-usage-report.controller.js":
/*!***********************************************************************************************************!*\
  !*** ./bundles/reports/passport-reservation-usage-report/passport-reservation-usage-report.controller.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/fill */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/fill.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");









/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PassportReservationUsageReportCtrl', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_8__["default"].name, 'deskworks.state', 'deskworks.reports.reportDates', 'deskworks.reports.ReportBuilder', 'deskworks.PassportReservationUsageReport', 'deskworks.passportReservationUsageReportColumns']).controller('PassportReservationUsageReportCtrl', ["$scope", "$timeout", "$translate", "$filter", "state", "helper", "reportHelper", "reportStyles", "ReportBuilder", "PassportReservationUsageReport", "passportReservationUsageReportColumns", function ($scope, $timeout, $translate, $filter, state, helper, reportHelper, reportStyles, ReportBuilder, PassportReservationUsageReport, passportReservationUsageReportColumns) {
  var $ctrl = this;
  $ctrl.config = {
    reportName: $translate.instant('PASSPORT_RESERVATION_USAGE_REPORT.REPORT_NAME'),
    reportOptions: {},
    reportColumns: passportReservationUsageReportColumns,
    reportDates: {
      fromDate: moment(),
      toDate: moment()
    },
    getReportData: function getReportData() {
      return PassportReservationUsageReport.query({
        centerId: $ctrl.config.reportOptions.centerId || null,
        fromDate: $filter('date')($ctrl.config.reportDates.fromDate, 'yyyy-MM-dd'),
        toDate: $filter('date')($ctrl.config.reportDates.toDate, 'yyyy-MM-dd')
      });
    }
  };
  state.setPageTitle($ctrl.config.reportName);
  $ctrl.config.reportDates.fromDate.subtract(1, 'M').date(1); // set fromDate to first day of previous month

  $ctrl.config.reportDates.toDate.date(0); // set toDate to last day of previous month

  $ctrl.reportBuilder = new ReportBuilder($ctrl.config);
  /**
   * Watch for data report depends on (center, columns, order) and generate new report
   */

  var debounceTimeout;
  $scope.$watch(function () {
    return {
      reportOptions: $ctrl.config.reportOptions,
      reportDates: $ctrl.config.reportDates
    };
  }, function (newVal, oldVal) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function () {
      $ctrl.pdf = null;
      var newDate = newVal.reportDates.fromDate,
          oldDate = oldVal.reportDates.fromDate;
      if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) $ctrl.config.reportData = null;
      newDate = newVal.reportDates.toDate;
      oldDate = oldVal.reportDates.toDate;
      if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) $ctrl.config.reportData = null;
      $ctrl.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
        $ctrl.pdf = blob;
      });
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  $ctrl.downloadPdf = function () {
    if (!$ctrl.pdf) return;
    reportHelper.download({
      blob: $ctrl.pdf,
      fileName: $ctrl.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
  * Generate and download CSV report
  */


  $ctrl.downloadCsv = function () {
    if (!$ctrl.pdf) return;
    reportHelper.download({
      blob: $ctrl.reportBuilder.buildCsv(reportDataCallback),
      fileName: $ctrl.reportBuilder.getReportFileName('csv')
    });
  };
  /**
   * Report data callback
   */


  function reportDataCallback(config) {
    var result = {
      columns: config.reportColumns,
      rows: [],
      styles: []
    };
    var resUnits = [];
    config.reportData.forEach(function (obj) {
      var _context;

      var userTotal = 0;
      result.rows.push([{
        content: helper.join([obj.userCompany, obj.userName], ' - '),
        colSpan: 4
      }]);
      result.styles.push(reportStyles.h2);
      obj.usages.forEach(function (usage, idx) {
        userTotal += usage.duration || 0;

        var unit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(resUnits).call(resUnits, function (unit) {
          return unit.name === usage.unitName;
        });

        if (unit) unit.total += usage.duration;else resUnits.push({
          name: usage.unitName,
          total: usage.duration || 0
        });
        result.rows.push([usage.unitName, usage.duration, usage.startTime, usage.endTime]);
        result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      });
      result.rows.push([{
        content: $translate.instant('REPORTS.TOTAL') + ':',
        styles: {
          halign: 'right'
        }
      }, userTotal, false, false]);
      result.styles.push(reportStyles.h3); // Add empty row

      result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_1___default()(_context = Array(4)).call(_context, false));
      result.styles.push(null);
    });

    if (config.reportData.length) {
      result.rows.push([{
        content: $translate.instant('PASSPORT_RESERVATION_USAGE_REPORT.TOTALS_BY_RESERVATION_UNIT'),
        colSpan: 4
      }]);
      result.styles.push(reportStyles.h2);
    } // Add units totals


    _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2___default()(reportHelper).call(reportHelper, resUnits, 'name').forEach(function (unit) {
      var _context2;

      var row = _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = Array(4)).call(_context2, false);

      row[0] = unit.name;
      row[1] = unit.total;
      result.rows.push(row);
      result.styles.push(reportStyles.h3);
    });

    return result;
  }
}]));

/***/ }),

/***/ "./bundles/reports/passport-reservation-usage-report/passport-reservation-usage-report.service.js":
/*!********************************************************************************************************!*\
  !*** ./bundles/reports/passport-reservation-usage-report/passport-reservation-usage-report.service.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * PassportReservationUsageReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PassportReservationUsageReport', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('PassportReservationUsageReport', ["$resource", "datesDeserializer", "deskworksConfig", "$q", function ($resource, datesDeserializer, deskworksConfig, $q) {
  var desDates = datesDeserializer(['usages.startTime', 'usages.endTime']);
  var url = deskworksConfig.getApiAbsUrl('/reports/passport-reservation-usage');
  var res = $resource(url, {
    centerId: '@centerId',
    fromDate: '@fromDate',
    toDate: '@toDate'
  }, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates, makeUsageDurations]
    }
  });
  return {
    query: function query(params) {
      return res.query(params).$promise;
    }
  };

  function makeUsageDurations(data) {
    data.forEach(function (obj) {
      obj.usages.forEach(function (usage) {
        usage.duration = usage.endTime - usage.startTime;
      });
    });
    return data;
  }
}]));

/***/ }),

/***/ "./bundles/reports/passport-reservation-usage-report/passport-reservation-usage-report.tpl.html":
/*!******************************************************************************************************!*\
  !*** ./bundles/reports/passport-reservation-usage-report/passport-reservation-usage-report.tpl.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"passportReservationUsageReport\" class=\"gutter-v\"> <form name=\"formPassportReservationUsageReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <report-dates model=\"$ctrl.config.reportDates\"></report-dates> </div> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <report-options model=\"$ctrl.config.reportOptions\"></report-options> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/payment-reconciliation-report/payment-reconciliation-report-columns.service.js":
/*!********************************************************************************************************!*\
  !*** ./bundles/reports/payment-reconciliation-report/payment-reconciliation-report-columns.service.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Payment Reconciliation Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.paymentReconciliationReportColumns', []).factory('paymentReconciliationReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'userName',
    _title: 'REPORTS.COLUMNS.USER_NAME',
    include: true,
    defaultOrder: true,
    styles: {
      minCellWidth: 100
    }
  }, {
    dataKey: 'userCompany',
    _title: 'REPORTS.COLUMNS.USER_COMPANY',
    include: true,
    styles: {
      cellWidth: 150
    }
  }, {
    dataKey: 'orderId',
    _title: 'REPORTS.COLUMNS.ORDER_ID',
    include: true,
    styles: {
      halign: 'right'
    }
  }, {
    dataKey: 'productName',
    _title: 'REPORTS.COLUMNS.ITEM',
    include: true
  }, {
    dataKey: 'productCode',
    _title: 'REPORTS.COLUMNS.ITEM_CODE',
    include: true,
    styles: {
      halign: 'right'
    }
  }, {
    dataKey: 'quantity',
    _title: 'REPORTS.COLUMNS.QUANTITY',
    include: true,
    styles: {
      halign: 'right'
    }
  }, {
    dataKey: 'amount',
    _title: 'REPORTS.COLUMNS.AMOUNT',
    include: true,
    styles: {
      halign: 'right'
    },
    pdf: function pdf(val) {
      return $filter('ncurrency')(val);
    },
    csv: function csv(val) {
      return $filter('ncurrency')(val);
    }
  }, {
    dataKey: 'total',
    _title: 'REPORTS.COLUMNS.TOTAL',
    include: true,
    styles: {
      halign: 'right',
      cellWidth: 'wrap'
    },
    pdf: function pdf(val) {
      return $filter('ncurrency')(val);
    },
    csv: function csv(val) {
      return $filter('ncurrency')(val);
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/payment-reconciliation-report/payment-reconciliation-report.controller.js":
/*!***************************************************************************************************!*\
  !*** ./bundles/reports/payment-reconciliation-report/payment-reconciliation-report.controller.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/toConsumableArray */ "../node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/fill */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/fill.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");
/* harmony import */ var _payment_reconciliation_report_columns_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./payment-reconciliation-report-columns.service */ "./bundles/reports/payment-reconciliation-report/payment-reconciliation-report-columns.service.js");
/* harmony import */ var _payment_reconciliation_report_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payment-reconciliation-report.service */ "./bundles/reports/payment-reconciliation-report/payment-reconciliation-report.service.js");













function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PaymentReconciliationReportCtrl', ['debounce', shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_12__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_13__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_14__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_15__["default"].name, 'deskworks.state', 'deskworks.reports.reportDates', 'deskworks.reports.reportColumns', 'deskworks.reports.ReportBuilder', 'deskworks.reportOrderBy', _payment_reconciliation_report_service__WEBPACK_IMPORTED_MODULE_17__["default"].name, _payment_reconciliation_report_columns_service__WEBPACK_IMPORTED_MODULE_16__["default"].name]).controller('PaymentReconciliationReportCtrl', ["$scope", "$timeout", "$translate", "$filter", "$q", "state", "helper", "debounce", "dwAlerts", "reportHelper", "reportStyles", "PaymentReconciliationReport", "paymentReconciliationReportColumns", function ($scope, $timeout, $translate, $filter, $q, state, helper, debounce, dwAlerts, reportHelper, reportStyles, PaymentReconciliationReport, paymentReconciliationReportColumns) {
  var $ctrl = this;
  var paramsChanged = reportHelper.paramsChanged,
      loadResources = reportHelper.loadResources;
  $ctrl.config = {
    reportName: $translate.instant('PAYMENT_RECONCILIATION_REPORT.REPORT_NAME')
  };
  $ctrl.params = {
    fromDate: state.getParam('fromDate') ? $filter('toDate')(state.getParam('fromDate')) : moment().subtract(1, 'M').startOf('month'),
    toDate: state.getParam('toDate') ? $filter('toDate')(state.getParam('toDate')) : moment().subtract(1, 'M').endOf('month')
  };
  $ctrl.resources = null;
  $ctrl.data = null;
  $ctrl.columns = paymentReconciliationReportColumns;
  state.setPageTitle($ctrl.config.reportName);
  /**
   * Watch report params and generate new report
   */

  $scope.$watch('$ctrl.params', debounce(function (np, op) {
    $ctrl.pdf = null;
    $ctrl.report = null;
    if (helper.pointFirstInvalid('#paymentReconciliationReport')) return;
    if (!$ctrl.params.fromDate || !$ctrl.params.toDate) return;
    if (paramsChanged(np, op, ['fromDate', 'toDate', 'centerId'])) $ctrl.data = null;
    $q.all({
      resources: $ctrl.resources || loadResources(),
      data: $ctrl.data || PaymentReconciliationReport.get($ctrl.params).catch(function (err) {
        return dwAlerts.error(err, 'Failed to query report.');
      })
    }).then(function (result) {
      $ctrl.resources = result.resources;
      $ctrl.data = result.data;
    }).then(function () {
      $ctrl.report = dataToReport($ctrl.params, $ctrl.data);
      var doc = reportHelper.buildPdf({
        config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
        report: $ctrl.report,
        resources: $ctrl.resources
      });
      $ctrl.pdf = doc.output('blob');
    });
  }, 100), true);
  /**
   * Data to report converter
   * @param params
   * @param data
   * @returns {{columns: paymentReconciliationReportColumns, styles: [], rows: []}}
   */

  function dataToReport(params, data) {
    var _context, _context4, _context5, _context6, _context7;

    var result = {
      columns: $ctrl.columns,
      rows: [],
      styles: []
    };

    var splitIndex = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_8___default()(_context = result.columns).call(_context, function (col) {
      return col.dataKey === 'productCode';
    });

    data.daily.forEach(function (day) {
      result.rows.push([// daily total
      {
        content: $filter('date')(day.date, 'mediumDate'),
        colSpan: splitIndex
      }, {
        content: $translate.instant("PAYMENT_RECONCILIATION_REPORT.TOTAL_DAILY") + ':',
        colSpan: result.columns.length - splitIndex - 1
      }, {
        content: $filter('ncurrency')(day.total)
      }]);
      result.styles.push(reportStyles.h1);
      day.billingMethods.forEach(function (method) {
        result.rows.push([// billing method total
        {
          content: method.name,
          colSpan: splitIndex
        }, {
          content: $translate.instant("PAYMENT_RECONCILIATION_REPORT.TOTAL_PAYMENT_METHOD") + ':',
          colSpan: result.columns.length - splitIndex - 1
        }, {
          content: $filter('ncurrency')(method.total)
        }]);
        result.styles.push(reportStyles.h2);
        method.orders.forEach(function (order) {
          var _context2;

          result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(_context2 = result.columns).call(_context2, function (col) {
            return angular.isDefined(order[col.dataKey]) ? order[col.dataKey] : false;
          }));
          result.styles.push(reportStyles.h3);
          order.items.forEach(function (item, idx) {
            var _context3;

            result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(_context3 = result.columns).call(_context3, function (col) {
              return angular.isDefined(item[col.dataKey]) ? item[col.dataKey] : false;
            }));
            result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
          });
        });
      });
    }); // Add empty row

    result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_10___default()(_context4 = Array(result.columns.length)).call(_context4, false));
    result.styles.push(null);
    var globalProps = [{
      name: 'TOTAL_PAYMENT_FEES',
      key: 'totalPaymentFees'
    }, {
      name: 'TOTAL_TAXES',
      key: 'totalTaxes'
    }, {
      name: 'TOTAL_DEPOSITS',
      key: 'totalDeposits'
    }, {
      name: 'TOTAL_UNDESIGNATED',
      key: 'totalUndesignated'
    }]; // Product Type Breakdown

    var byProductType = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_11___default()(_context5 = [{
      name: 'TOTAL_MEMBERSHIP',
      key: 'membership'
    }, {
      name: 'TOTAL_REGISTRATION',
      key: 'registration'
    }, {
      name: 'TOTAL_RENTAL',
      key: 'rental'
    }, {
      name: 'TOTAL_PRINT',
      key: 'print'
    }, {
      name: 'TOTAL_SERVICES',
      key: 'services'
    }, {
      name: 'TOTAL_CUSTOM',
      key: 'custom'
    }, {
      name: 'TOTAL_DISCOUNT',
      key: 'discount'
    }]).call(_context5, globalProps);

    var typeRows = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(byProductType).call(byProductType, function (type, idx) {
      return {
        data: [{
          content: $translate.instant("PAYMENT_RECONCILIATION_REPORT.".concat(type.name)),
          colSpan: 1
        }, {
          content: $filter('ncurrency')(idx > 6 ? data[type.key] : data.totalsByProductType[type.key] || 0),
          styles: {
            halign: 'right',
            fontStyle: 'bold'
          }
        }],
        style: null
      };
    });

    typeRows.unshift({
      data: [{
        content: $translate.instant('PAYMENT_RECONCILIATION_REPORT.PRODUCT_TYPE_BREAKDOWN') + ':',
        colSpan: 2
      }],
      style: reportStyles.h1
    }); // Product Category Breakdown

    var catRows = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_11___default()(_context6 = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(_context7 = data.totalsByProductCategory).call(_context7, function (cat) {
      return {
        data: [{
          content: cat.name
        }, {
          content: cat.code
        }, {
          content: $filter('ncurrency')(cat.total),
          colSpan: 2,
          styles: {
            fontStyle: 'bold'
          }
        }],
        style: null
      };
    })).call(_context6, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(globalProps).call(globalProps, function (type) {
      return {
        data: [{
          content: $translate.instant("PAYMENT_RECONCILIATION_REPORT.".concat(type.name))
        }, {
          content: false
        }, {
          content: $filter('ncurrency')(data[type.key]),
          styles: {
            halign: 'right',
            fontStyle: 'bold'
          },
          colSpan: 2
        }],
        style: null
      };
    }));

    catRows.unshift({
      data: [{
        content: $translate.instant('PAYMENT_RECONCILIATION_REPORT.PRODUCT_CATEGORY_BREAKDOWN') + ':',
        colSpan: 4
      }],
      style: null
    }); // Merge breakdown rows

    for (var i = 0, max = Math.max(typeRows.length, catRows.length); i < max; i++) {
      var _context8;

      result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_11___default()(_context8 = []).call(_context8, _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()((typeRows[i] || {
        data: [{
          content: false
        }, {
          content: false
        }]
      }).data), [{
        content: false
      }], _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()((catRows[i] || {
        data: [{
          content: false
        }, {
          content: false
        }, {
          content: false
        }, {
          content: false
        }]
      }).data), [{
        content: false
      }]));
      result.styles.push(typeRows[i] && typeRows[i].style || catRows[i] && catRows[i].style || null);
    }

    return result;
  }
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
  };
  /**
   * Generate and download CSV report
   */


  $ctrl.downloadCsv = function () {
    if (!$ctrl.pdf) return;
    var fileName = reportHelper.getReportFileName({
      extension: 'csv',
      config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
      resources: $ctrl.resources
    });
    var csv = reportHelper.buildCsv({
      report: $ctrl.report
    });
    reportHelper.download({
      blob: csv,
      fileName: fileName
    });
  };
}]));

/***/ }),

/***/ "./bundles/reports/payment-reconciliation-report/payment-reconciliation-report.service.js":
/*!************************************************************************************************!*\
  !*** ./bundles/reports/payment-reconciliation-report/payment-reconciliation-report.service.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.PaymentReconciliationReport', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('PaymentReconciliationReport', ["$resource", "datesDeserializer", "deskworksConfig", function ($resource, datesDeserializer, deskworksConfig) {
  var desDates = datesDeserializer('daily.date');
  var url = deskworksConfig.getApiAbsUrl('/reports/payment-reconciliation');
  var res = $resource(url, {
    centerId: '@centerId',
    fromDate: '@fromDate',
    toDate: '@toDate'
  }, {
    get: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    get: function get(params) {
      return res.get(params).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/reports/payment-reconciliation-report/payment-reconciliation-report.tpl.html":
/*!**********************************************************************************************!*\
  !*** ./bundles/reports/payment-reconciliation-report/payment-reconciliation-report.tpl.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"paymentReconciliationReport\" class=\"gutter-v\"> <form name=\"formPaymentReconciliationReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <report-dates model=\"$ctrl.params\"></report-dates> </div> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <report-options model=\"$ctrl.params\"> </report-options> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/price-list-report/price-list-report-columns.service.js":
/*!********************************************************************************!*\
  !*** ./bundles/reports/price-list-report/price-list-report-columns.service.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for PriceList Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.priceListReportColumns', []).factory('priceListReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'name',
    _title: 'PRICE_LISTS.PRODUCTS.PRODUCT',
    include: true
  }, {
    dataKey: 'passQty',
    _title: 'PRICE_LISTS.PRODUCTS.PASSES',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    }
  }, {
    dataKey: 'reservationCredit',
    _title: 'PRICE_LISTS.PRODUCTS.CREDIT',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'price',
    _title: 'PRICE_LISTS.PRODUCTS.PRICE',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/price-list-report/price-list-report.controller.js":
/*!***************************************************************************!*\
  !*** ./bundles/reports/price-list-report/price-list-report.controller.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.priceListReport', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reports.priceListReport.service', 'deskworks.reports.priceListReportColumns']).controller('PriceListReportCtrl', ["$scope", "$timeout", "$filter", "$translate", "state", "helper", "reportHelper", "reportStyles", "ReportBuilder", "PriceListReport", "priceListReportColumns", function ($scope, $timeout, $filter, $translate, state, helper, reportHelper, reportStyles, ReportBuilder, PriceListReport, priceListReportColumns) {
  var vm = this;
  vm.config = {
    reportName: $translate.instant('PRICE_LISTS.LIST.HEADER'),
    reportOptions: {
      centerId: false
    },
    reportColumns: {
      columns: angular.copy(priceListReportColumns)
    },
    getReportData: function getReportData() {
      return PriceListReport.get({
        centerId: state.getCurrentCenterId()
      }).$promise;
    }
  };
  vm.reportBuilder = new ReportBuilder(vm.config);
  /**
   * Watch for data report depends on (center, columns, order) and generate new report
   */

  var debounceTimeout;
  $scope.$watch(function (_) {
    var _context, _context2;

    return {
      reportOptions: vm.config.reportOptions,
      plNames: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = $scope.vm.priceLists).call(_context2, function (plist) {
        return plist.include;
      })).call(_context, function (plist) {
        return plist.name;
      })
    };
  }, function (newVal) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function (_) {
      vm.pdf = null;

      if (angular.isDefined(vm.config.reportOptions.centerId)) {
        vm.config.plNames = newVal.plNames;
        vm.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
          vm.pdf = blob;
        });
      }
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  vm.downloadPdf = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.pdf,
      fileName: vm.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
   * Generate and download CSV report
   */


  vm.downloadCsv = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.reportBuilder.buildCsv(reportDataCallback),
      fileName: vm.reportBuilder.getReportFileName('csv')
    });
  };
  /**
   * Report data callback for ReportBuilder, returns report data matrix and columns
   */


  function reportDataCallback(config) {
    var result = {
      columns: config.reportColumns.columns,
      rows: [],
      styles: []
    };
    var row;
    angular.forEach(config.reportData.pricelists, function (plist) {
      var _context3;

      if (config.plNames.indexOf(plist.name) < 0) return;
      row = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = Array.apply(null, Array(result.columns.length))).call(_context3, Boolean.prototype.valueOf, false);
      row[0] = $translate.instant('PRICE_LISTS.LIST.PRICE_LIST') + ': ' + plist.name + ' (' + $translate.instant('PRICE_LISTS.LAST_UPDATE') + ': ' + $filter('date')(plist.updatedAt, 'mediumDate') + ')';
      result.rows.push(row);
      result.styles.push(reportStyles.h1);
      plist.productTypes.forEach(function (productType) {
        var _context4;

        row = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = Array.apply(null, Array(result.columns.length))).call(_context4, Boolean.prototype.valueOf, false);
        row[0] = productType.id;
        result.rows.push(row);
        result.styles.push(reportStyles.h2);
        productType.products.forEach(function (product, idx) {
          var _context5;

          result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context5 = result.columns).call(_context5, function (col) {
            return product[col.dataKey];
          }));
          result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
        });
      });
    });
    return result;
  }
}]));

/***/ }),

/***/ "./bundles/reports/price-list-report/price-list-report.service.js":
/*!************************************************************************!*\
  !*** ./bundles/reports/price-list-report/price-list-report.service.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * PriceListReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.priceListReport.service', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('PriceListReport', ["$resource", "datesDeserializer", "deskworksConfig", function ($resource, datesDeserializer, deskworksConfig) {
  var desDates = datesDeserializer(['pricelists.updatedAt']);
  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/pricelist-reports');
  return $resource(url, {
    centerId: '@centerId'
  }, {
    get: {
      method: 'GET',
      transformResponse: [angular.fromJson, desDates]
    }
  });
}]));

/***/ }),

/***/ "./bundles/reports/price-list-report/price-list-report.tpl.html":
/*!**********************************************************************!*\
  !*** ./bundles/reports/price-list-report/price-list-report.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div ng-controller=\"PriceListReportCtrl as rep\" class=\"gutter-v\"> <div class=\"ff-grid\"> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\" style=\"margin-left:auto\"> <report-options model=\"rep.config.reportOptions\"></report-options> </div> </div> <ff-btn-group> <ff-btn sense=\"download\" ff-click=\"rep.downloadPdf()\" ff-disabled=\"!rep.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"rep.downloadCsv()\" ff-disabled=\"!rep.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"rep.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/product-report/product-report-columns.service.js":
/*!**************************************************************************!*\
  !*** ./bundles/reports/product-report/product-report-columns.service.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "../node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);







function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_3___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, key)); }); } } return target; }




/**
 * Columns for Product Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.productReportColumns', []).factory('productReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var $yesno = {
    pdf: function pdf(v) {
      return $filter('yesno')(v);
    },
    csv: function csv(v) {
      return $filter('yesno')(v);
    }
  };
  var $fixed = {
    pdf: function pdf(v) {
      return fixed(v);
    },
    csv: function csv(v) {
      return fixed(v);
    }
  };

  function fixed(v) {
    var num = parseFloat(v);
    return isNaN(num) ? v : num.toFixed(2);
  }

  var $ralign = {
    halign: 'right'
  };
  var $calign = {
    halign: 'center'
  };
  var colsByProductType = {
    membership: [{
      dataKey: 'code',
      _title: 'PRODUCTS.CODE',
      include: true
    }, {
      dataKey: 'name',
      _title: 'PRODUCTS.NAME',
      include: true
    }, {
      dataKey: 'membershipCategory',
      _title: 'PRODUCTS.MEMBERSHIP_CATEGORY',
      include: true
    }, {
      dataKey: 'billingFrequency',
      _title: 'PRODUCTS.BILLING_FREQUENCY',
      include: true
    }, _objectSpread(_objectSpread({
      dataKey: 'isCreditable',
      _title: 'PRODUCTS.IS_CREDITABLE',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), {
      dataKey: 'passProduct',
      _title: 'PRODUCTS.PASS_PRODUCT',
      include: true
    }, {
      dataKey: 'countCheckInsPer',
      _title: 'PRODUCTS.COUNT_CHECK_INS_PER',
      include: true
    }, _objectSpread(_objectSpread({
      dataKey: 'reserveWithNonMemberRules',
      _title: 'PRODUCTS.ONLY_NON_MEMBER_HOURS.SHORT',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), _objectSpread(_objectSpread({
      dataKey: 'taxable',
      _title: 'PRODUCTS.TAXABLE',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), _objectSpread(_objectSpread({
      dataKey: 'showInSelfRegistration',
      _title: 'PRODUCTS.SHOW_FOR_SIGN_UP.SHORT',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), _objectSpread(_objectSpread({
      dataKey: 'hasRegistrationFee',
      _title: 'PRODUCTS.HAS_REGISTRATION_FEE',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), _objectSpread(_objectSpread({
      dataKey: 'trackAcrossAllCenters',
      _title: 'PRODUCTS.TRACK_ACROSS_ALL_CENTERS',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), {
      dataKey: 'printBlack',
      _title: 'PRODUCTS.FREE_COPIES.PRINT_BLACK',
      include: true,
      styles: _objectSpread({}, $ralign)
    }, {
      dataKey: 'printColor',
      _title: 'PRODUCTS.FREE_COPIES.PRINT_COLOR',
      include: true,
      styles: _objectSpread({}, $ralign)
    }, {
      dataKey: 'fax',
      _title: 'PRODUCTS.FREE_COPIES.FAX',
      include: true,
      styles: _objectSpread({}, $ralign)
    }, {
      dataKey: 'scan',
      _title: 'PRODUCTS.FREE_COPIES.SCAN',
      include: true,
      styles: _objectSpread({}, $ralign)
    }, {
      dataKey: 'description',
      _title: 'PRODUCTS.DESCRIPTION',
      include: true
    }],
    registration: [{
      dataKey: 'code',
      _title: 'PRODUCTS.CODE',
      include: true
    }, {
      dataKey: 'name',
      _title: 'PRODUCTS.NAME',
      include: true
    }, _objectSpread(_objectSpread({
      dataKey: 'taxable',
      _title: 'PRODUCTS.TAXABLE',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), {
      dataKey: 'description',
      _title: 'PRODUCTS.DESCRIPTION',
      include: true
    }],
    rental: [{
      dataKey: 'code',
      _title: 'PRODUCTS.CODE',
      include: true
    }, {
      dataKey: 'name',
      _title: 'PRODUCTS.NAME',
      include: true
    }, {
      dataKey: 'reservationCategory',
      _title: 'PRODUCTS.RESERVATION_CATEGORY',
      include: true
    }, _objectSpread(_objectSpread({
      dataKey: 'allowReservationCredits',
      _title: 'PRODUCTS.ALLOW_RESERVATION_CREDITS',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), _objectSpread(_objectSpread({
      dataKey: 'canBuyOnSplashPage',
      _title: 'PRODUCTS.BUY_ON_SPLASH_PAGE',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), _objectSpread(_objectSpread({
      dataKey: 'passSize',
      _title: 'PRODUCTS.PASS_SIZE',
      include: true
    }, $fixed), {}, {
      styles: _objectSpread({}, $ralign)
    }), _objectSpread(_objectSpread({
      dataKey: 'passMin',
      _title: 'PRODUCTS.MIN_PASS.SHORT',
      include: true
    }, $fixed), {}, {
      styles: _objectSpread({}, $ralign)
    }), {
      dataKey: 'passMax',
      _title: 'PRODUCTS.MAX_PASS.SHORT',
      include: true,
      styles: _objectSpread({}, $ralign)
    }, _objectSpread(_objectSpread({
      dataKey: 'taxable',
      _title: 'PRODUCTS.TAXABLE',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), {
      dataKey: 'description',
      _title: 'PRODUCTS.DESCRIPTION',
      include: true
    }],
    print: [{
      dataKey: 'code',
      _title: 'PRODUCTS.CODE',
      include: true
    }, {
      dataKey: 'name',
      _title: 'PRODUCTS.NAME',
      include: true
    }, _objectSpread(_objectSpread({
      dataKey: 'taxable',
      _title: 'PRODUCTS.TAXABLE',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), {
      dataKey: 'description',
      _title: 'PRODUCTS.DESCRIPTION',
      include: true
    }],
    services: [{
      dataKey: 'code',
      _title: 'PRODUCTS.CODE',
      include: true
    }, {
      dataKey: 'name',
      _title: 'PRODUCTS.NAME',
      include: true
    }, {
      dataKey: 'billingFrequency',
      _title: 'PRODUCTS.BILLING_FREQUENCY',
      include: true
    }, _objectSpread(_objectSpread({
      dataKey: 'showInSelfRegistration',
      _title: 'PRODUCTS.SHOW_FOR_SIGN_UP.SHORT',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), _objectSpread(_objectSpread({
      dataKey: 'taxable',
      _title: 'PRODUCTS.TAXABLE',
      include: true
    }, $yesno), {}, {
      styles: _objectSpread({}, $calign)
    }), {
      dataKey: 'description',
      _title: 'PRODUCTS.DESCRIPTION',
      include: true
    }]
  };
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(colsByProductType).forEach(function (key) {
      return colsByProductType[key].forEach(function (col) {
        col.title = $translate.instant(col._title);
      });
    });
  }

  return colsByProductType;
}]));

/***/ }),

/***/ "./bundles/reports/product-report/product-report-data.service.js":
/*!***********************************************************************!*\
  !*** ./bundles/reports/product-report/product-report-data.service.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");




/**
 * Data to report converter for Product Report
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.productReportData', ['deskworks.inventory.optsProductType', shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_3__["default"].name]).factory('productReportData', ["reportStyles", "optsProductType", function (reportStyles, optsProductType) {
  return dataToReport;
  /**
   *
   * @param params
   * @param data -
   * @returns {{columns: Array, styles: Array, rows: Array}}
   */

  function dataToReport(params, data) {
    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(optsProductType).call(optsProductType, function (productType) {
      var _context;

      var report = {
        id: productType.id,
        name: productType.name,
        columns: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(_context = params.columns[productType.id]).call(_context, function (c) {
          return c.include;
        }),
        rows: [],
        styles: []
      };

      _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(data).call(data, function (product) {
        return product.type === productType.id;
      }).forEach(function (product, idx) {
        var _context2;

        report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = report.columns).call(_context2, function (col) {
          return product[col.dataKey];
        }));
        report.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      });

      return report;
    });
  }
}]));

/***/ }),

/***/ "./bundles/reports/product-report/product-report.controller.js":
/*!*********************************************************************!*\
  !*** ./bundles/reports/product-report/product-report.controller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");
/* harmony import */ var _product_report_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-report.service */ "./bundles/reports/product-report/product-report.service.js");
/* harmony import */ var _product_report_columns_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-report-columns.service */ "./bundles/reports/product-report/product-report-columns.service.js");
/* harmony import */ var _product_report_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-report-data.service */ "./bundles/reports/product-report/product-report-data.service.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.productReport', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_9__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_10__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_11__["default"].name, 'deskworks.state', _product_report_service__WEBPACK_IMPORTED_MODULE_12__["default"].name, _product_report_columns_service__WEBPACK_IMPORTED_MODULE_13__["default"].name, _product_report_data_service__WEBPACK_IMPORTED_MODULE_14__["default"].name]).controller('ProductReportCtrl', ["$scope", "$q", "$timeout", "$filter", "$translate", "state", "helper", "debounce", "dwAlerts", "reportHelper", "reportStyles", "ProductReport", "productReportColumns", "productReportData", function ($scope, $q, $timeout, $filter, $translate, state, helper, debounce, dwAlerts, reportHelper, reportStyles, ProductReport, productReportColumns, productReportData) {
  var $ctrl = this;
  var paramsChanged = reportHelper.paramsChanged,
      loadResources = reportHelper.loadResources;
  $ctrl.config = {
    reportName: $translate.instant('PRODUCTS.INVENTORY_LIST')
  };
  $ctrl.params = {
    centerId: false,
    paperSize: 'A2'
  };
  $ctrl.resources = null;
  $ctrl.data = null;
  state.setPageTitle($ctrl.config.reportName);
  /**
   * Watch report params and generate new report
   */

  $scope.$watch('$ctrl.params', debounce(function (np, op) {
    // if (helper.pointFirstInvalid('#productReport')) return;
    $ctrl.pdf = null;
    $ctrl.report = null; // if (paramsChanged(np, op, ['centerId', 'fromDate', 'toDate', 'byPeriod'])) { $ctrl.data = null; }

    $q.all({
      resources: $ctrl.resources || loadResources(),
      data: $ctrl.data || ProductReport.query({
        centerId: state.getCurrentCenterId()
      })
    }).then(function (result) {
      $ctrl.resources = result.resources;
      $ctrl.data = result.data;
    }).then(function () {
      $ctrl.report = productReportData(_objectSpread(_objectSpread({}, $ctrl.params), {}, {
        columns: productReportColumns
      }), $ctrl.data);
      var doc = new jsPDF($ctrl.params.paperLayout, 'pt', $ctrl.params.paperSize);
      var startY = reportStyles.pageMargins[0];
      $ctrl.report.forEach(function (report) {
        if (!report.rows.length) {
          return;
        }

        drawHeader(report.name);
        reportHelper.buildPdf({
          config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
          report: report,
          resources: $ctrl.resources,
          doc: doc,
          startY: startY
        });
        startY = doc.previousAutoTable.finalY + 20;
      });
      $ctrl.pdf = doc.output('blob');

      function drawHeader(text) {
        doc.setFontSize(11);
        doc.setFont(doc.getFont().fontName, 'bold');
        doc.autoTableText(text, reportStyles.pageMargins[3], startY, {});
        startY += 18;
      }
    });
  }, 100), true);
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
  };
  /**
   * Generate and download CSV report
   */


  $ctrl.downloadCsv = function () {
    if (!$ctrl.pdf) return;
    $ctrl.report.forEach(function (report) {
      var _context;

      var reportName = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6___default()(_context = "".concat($ctrl.config.reportName, "-")).call(_context, report.name).toLowerCase();

      var fileName = reportHelper.getReportFileName({
        extension: 'csv',
        config: _objectSpread({
          reportName: reportName
        }, $ctrl.params),
        resources: $ctrl.resources
      });
      var csv = reportHelper.buildCsv({
        report: report
      });
      reportHelper.download({
        blob: csv,
        fileName: fileName
      });
    });
  };
}]));

/***/ }),

/***/ "./bundles/reports/product-report/product-report.service.js":
/*!******************************************************************!*\
  !*** ./bundles/reports/product-report/product-report.service.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * ProductReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ProductReport', ['deskworks.inventory.product.service', 'deskworks.inventory.membershipCategory.service', 'deskworks.reservationCategory.service', 'deskworks.billing.optsBillingFrequency', 'deskworks.inventory.optsCountCheckInsPer']).factory('ProductReport', ["$q", "dwAlerts", "productService", "membershipCategoryService", "reservationCategoryService", "optsBillingFrequency", "optsCountCheckInsPer", function ($q, dwAlerts, productService, membershipCategoryService, reservationCategoryService, optsBillingFrequency, optsCountCheckInsPer) {
  return {
    query: function query(_ref) {
      var centerId = _ref.centerId;
      return $q.all({
        products: productService.getProducts().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query products.');
        }),
        membershipCategories: membershipCategoryService.query().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query membership categories.');
        }),
        reservationCategories: reservationCategoryService.query(centerId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to query reservation categories.');
        })
      }).then(function (results) {
        var products = results.products,
            membershipCategories = results.membershipCategories,
            reservationCategories = results.reservationCategories;
        products.forEach(function (product) {
          if (product.membershipTypeId) {
            var category = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(membershipCategories).call(membershipCategories, function (c) {
              return c.id === product.membershipTypeId;
            }) || {
              name: product.membershipTypeId
            };
            product.membershipCategory = category.name;
          }

          if (product.passProductId) {
            var passProduct = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(products).call(products, function (p) {
              return p.id === product.passProductId;
            }) || {
              name: product.passProductId
            };
            product.passProduct = passProduct.name;
          }

          if (product.reservationTypeId) {
            var _category = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(reservationCategories).call(reservationCategories, function (c) {
              return c.id === product.reservationTypeId;
            }) || {
              name: product.reservationTypeId
            };

            product.reservationCategory = _category.name;
          }

          if (product.billingFrequency) {
            var freq = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(optsBillingFrequency).call(optsBillingFrequency, function (o) {
              return o.id === product.billingFrequency;
            }) || {
              name: product.billingFrequency
            };
            product.billingFrequency = freq.name;
          }

          if (product.countCheckInsPer) {
            var opt = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(optsCountCheckInsPer).call(optsCountCheckInsPer, function (o) {
              return o.id === product.countCheckInsPer;
            }) || {
              name: product.countCheckInsPer
            };
            product.countCheckInsPer = opt.name;
          }

          if (product.printerUsageFreeCopiesSettings) {
            product.printerUsageFreeCopiesSettings.forEach(function (setting) {
              product[setting.printerUsageType] = setting.freeCount || 0;
            });
          }

          product.showInSelfRegistration = !product.hideInSelfRegistration;
        });
        return products;
      });
    }
  };
}]));

/***/ }),

/***/ "./bundles/reports/product-report/product-report.tpl.html":
/*!****************************************************************!*\
  !*** ./bundles/reports/product-report/product-report.tpl.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div ng-controller=\"ProductReportCtrl as $ctrl\" class=\"gutter-v\"> <div class=\"ff-grid\"> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\" style=\"margin-left:auto\"> <report-options model=\"$ctrl.params\"></report-options> </div> </div> <ff-btn-group> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/recurring-billing-change-report/opts-rbc-report-by-period.service.js":
/*!**********************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-change-report/opts-rbc-report-by-period.service.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Options for Report / Group By Period
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.optsRbcReportByPeriod', ['deskworks.reports.optsReportByPeriod']).factory('optsRbcReportByPeriod', ["$rootScope", "$translate", "$filter", "optsReportByPeriod", function ($rootScope, $translate, $filter, optsReportByPeriod) {
  var _context;

  var df = function df(date) {
    return $filter('date')(date, 'mediumDate');
  };

  var opts = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = [{
    id: 'none',
    _name: 'GLOBAL.NONE',
    format: function format(from, to) {
      var _context2;

      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = "".concat(df(from), " - ")).call(_context2, df(to));
    }
  }]).call(_context, optsReportByPeriod);

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

/***/ "./bundles/reports/recurring-billing-change-report/recurring-billing-change-chart.service.js":
/*!***************************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-change-report/recurring-billing-change-chart.service.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Chart for Recurring Billing Change Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.recurringBillingChangeChart', []).factory('recurringBillingChangeChart', ["$translate", "$filter", "helper", "whitelabel", function ($translate, $filter, helper, whitelabel) {
  return function (data) {
    var datasets = [{
      label: $translate.instant('RECURRING_BILLING_CHANGE_REPORT.NEW_RB'),
      data: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(data).call(data, function (period) {
        return period.totalNew;
      }),
      maxBarThickness: 50,
      backgroundColor: '#317da3'
    }, {
      label: $translate.instant('RECURRING_BILLING_CHANGE_REPORT.NOTICES_GIVEN'),
      data: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(data).call(data, function (period) {
        return period.totalNotices;
      }),
      maxBarThickness: 50,
      backgroundColor: '#3cb44b'
    }, {
      label: $translate.instant('RECURRING_BILLING_CHANGE_REPORT.TERMINATIONS'),
      data: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(data).call(data, function (period) {
        return period.totalTermination;
      }),
      maxBarThickness: 50,
      backgroundColor: '#808080'
    }];
    var chart = {
      type: 'bar',
      data: {
        labels: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(data).call(data, function (period) {
          return period.title;
        }),
        datasets: datasets
      },
      options: {
        tooltips: {
          mode: 'index',
          intersect: true,
          displayColors: true,
          callbacks: {
            label: function label(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              return dataset.label + ': ' + $filter('currency')(dataset.data[tooltipItem.index]);
            }
          }
        },
        legend: {
          display: true,
          position: 'left'
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              callback: function callback(value) {
                return $filter('currency')(value, undefined, 0);
              }
            }
          }]
        }
      }
    };
    return chart;
  };
}]));

/***/ }),

/***/ "./bundles/reports/recurring-billing-change-report/recurring-billing-change-data.service.js":
/*!**************************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-change-report/recurring-billing-change-data.service.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var _recurring_billing_change_report_columns_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recurring-billing-change-report-columns.service */ "./bundles/reports/recurring-billing-change-report/recurring-billing-change-report-columns.service.js");








/**
 * Data to report converter for Recurring Billing Change Report
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.recurringBillingChangeData', [shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_6__["default"].name]).factory('recurringBillingChangeData', ["$filter", "$translate", "helper", "reportStyles", "reportHelper", function ($filter, $translate, helper, reportStyles, reportHelper) {
  return dataToReport;
  /**
   *
   * @param params
   * @param data -
   * @returns {{columns: Array, styles: Array, rows: Array}}
   */

  function dataToReport(params, data) {
    var _context;

    var report = {
      columns: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_context = params.columns).call(_context, function (c) {
        return c.include;
      }),
      rows: [],
      styles: []
    };
    if (!data || !data.length) return report;
    var fcurr = $filter('currency');

    var fdate = function fdate(date) {
      return $filter('date')(date, 'mediumDate');
    };

    data.forEach(function (period) {
      var _context2, _context3, _context4, _context5, _context6;

      var revenue1 = $translate.instant('RECURRING_BILLING_CHANGE_REPORT.REVENUE_AS_OF_DATE', {
        date: fdate(period.from)
      });
      var totalNew = $translate.instant('RECURRING_BILLING_CHANGE_REPORT.TOTAL_NEW');
      report.rows.push([{
        content: _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = "".concat(revenue1, ": ")).call(_context2, fcurr(period.revenueFirstDay)),
        colSpan: Math.ceil(report.columns.length / 2)
      }, {
        content: _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = "".concat(totalNew, ": ")).call(_context3, fcurr(period.totalNew)),
        colSpan: Math.floor(report.columns.length / 2)
      }]);
      report.styles.push(reportStyles.h3);
      var revenue2 = $translate.instant('RECURRING_BILLING_CHANGE_REPORT.REVENUE_AS_OF_DATE', {
        date: fdate(period.to)
      });
      var totalNotices = $translate.instant('RECURRING_BILLING_CHANGE_REPORT.TOTAL_NOTICES');
      report.rows.push([{
        content: _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = "".concat(revenue2, ": ")).call(_context4, fcurr(period.revenueLastDay)),
        colSpan: Math.ceil(report.columns.length / 2)
      }, {
        content: _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = "".concat(totalNotices, ": ")).call(_context5, fcurr(period.totalNotices)),
        colSpan: Math.floor(report.columns.length / 2)
      }]);
      report.styles.push(reportStyles.h3);
      var totalTerminations = $translate.instant('RECURRING_BILLING_CHANGE_REPORT.TOTAL_TERMINATIONS');
      report.rows.push([{
        content: false,
        colSpan: Math.ceil(report.columns.length / 2)
      }, {
        content: _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context6 = "".concat(totalTerminations, ": ")).call(_context6, fcurr(period.totalTermination)),
        colSpan: Math.floor(report.columns.length / 2)
      }]);
      report.styles.push(reportStyles.h3);

      _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3___default()(reportHelper).call(reportHelper, period.billings, params.orderBy).forEach(function (billing, idx) {
        var _context7;

        report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(_context7 = report.columns).call(_context7, function (col) {
          return billing[col.dataKey];
        }));
        report.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      });
    });
    return report;
  }
}]));

/***/ }),

/***/ "./bundles/reports/recurring-billing-change-report/recurring-billing-change-report-columns.service.js":
/*!************************************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-change-report/recurring-billing-change-report-columns.service.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Columns for Recurring Billing Change Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.recurringBillingChangeReportColumns', ['deskworks.userProfile.optsMembershipStatus']).factory('recurringBillingChangeReportColumns', ["$rootScope", "$translate", "$filter", "optsMembershipStatus", function ($rootScope, $translate, $filter, optsMembershipStatus) {
  var cols = [{
    dataKey: 'centerName',
    _title: 'REPORTS.COLUMNS.CENTER',
    include: false
  }, {
    dataKey: 'userCompany',
    _title: 'REPORTS.COLUMNS.USER_COMPANY',
    include: true,
    defaultOrder: true
  }, {
    dataKey: 'userName',
    _title: 'RECURRING_BILLING_CHANGE_REPORT.COLUMNS.MEMBER',
    include: true // styles: { minCellWidth: 100 },

  }, {
    dataKey: 'userMembershipStatus',
    _title: 'RECURRING_BILLING_CHANGE_REPORT.COLUMNS.MEMBER_STATUS',
    include: true,
    styles: {
      halign: 'center',
      cellWidth: 50
    },
    pdf: function pdf(v) {
      return (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(optsMembershipStatus).call(optsMembershipStatus, function (o) {
        return o.id === v;
      }) || {}).name || v;
    },
    csv: function csv(v) {
      return (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(optsMembershipStatus).call(optsMembershipStatus, function (o) {
        return o.id === v;
      }) || {}).name || v;
    }
  }, {
    dataKey: 'productName',
    _title: 'RECURRING_BILLING_CHANGE_REPORT.COLUMNS.PRODUCT',
    include: true,
    styles: {
      minCellWidth: 110
    }
  }, {
    dataKey: 'amount',
    _title: 'REPORTS.COLUMNS.AMOUNT',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('currency')(v);
    },
    csv: function csv(v) {
      return $filter('currency')(v);
    }
  }, {
    dataKey: 'discount',
    _title: 'REPORTS.COLUMNS.DISCOUNT',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('currency')(v);
    },
    csv: function csv(v) {
      return $filter('currency')(v);
    }
  }, {
    dataKey: 'total',
    _title: 'REPORTS.COLUMNS.TOTAL',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('currency')(v);
    },
    csv: function csv(v) {
      return $filter('currency')(v);
    }
  }, {
    dataKey: 'startDate',
    _title: 'RECURRING_BILLING_CHANGE_REPORT.COLUMNS.START_DATE',
    include: true,
    styles: {
      halign: 'right',
      cellWidth: 55
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'noticeDate',
    _title: 'RECURRING_BILLING_CHANGE_REPORT.COLUMNS.NOTICE_DATE',
    include: true,
    styles: {
      halign: 'right',
      cellWidth: 55
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'terminationDate',
    _title: 'RECURRING_BILLING_CHANGE_REPORT.COLUMNS.TERMINATION_DATE',
    include: true,
    styles: {
      halign: 'right',
      cellWidth: 55
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'daysActive',
    _title: 'RECURRING_BILLING_CHANGE_REPORT.COLUMNS.DAYS_ACTIVE',
    include: true,
    styles: {
      halign: 'right',
      cellWidth: 45
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/recurring-billing-change-report/recurring-billing-change-report.controller.js":
/*!*******************************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-change-report/recurring-billing-change-report.controller.js ***!
  \*******************************************************************************************************/
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
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");
/* harmony import */ var _directives_report_order_by_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/report-order-by.directive */ "./bundles/reports/directives/report-order-by.directive.js");
/* harmony import */ var _recurring_billing_change_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recurring-billing-change-data.service */ "./bundles/reports/recurring-billing-change-report/recurring-billing-change-data.service.js");
/* harmony import */ var _recurring_billing_change_chart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recurring-billing-change-chart.service */ "./bundles/reports/recurring-billing-change-report/recurring-billing-change-chart.service.js");
/* harmony import */ var _recurring_billing_change_report_columns_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recurring-billing-change-report-columns.service */ "./bundles/reports/recurring-billing-change-report/recurring-billing-change-report-columns.service.js");
/* harmony import */ var _recurring_billing_change_report_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recurring-billing-change-report.service */ "./bundles/reports/recurring-billing-change-report/recurring-billing-change-report.service.js");
/* harmony import */ var _opts_rbc_report_by_period_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./opts-rbc-report-by-period.service */ "./bundles/reports/recurring-billing-change-report/opts-rbc-report-by-period.service.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }











/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.RecurringBillingChangeReportCtrl', ['debounce', 'deskworks.state', shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_9__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_10__["default"].name, _directives_report_order_by_directive__WEBPACK_IMPORTED_MODULE_11__["default"].name, _recurring_billing_change_data_service__WEBPACK_IMPORTED_MODULE_12__["default"].name, _recurring_billing_change_chart_service__WEBPACK_IMPORTED_MODULE_13__["default"].name, _recurring_billing_change_report_columns_service__WEBPACK_IMPORTED_MODULE_14__["default"].name, _recurring_billing_change_report_service__WEBPACK_IMPORTED_MODULE_15__["default"].name, _opts_rbc_report_by_period_service__WEBPACK_IMPORTED_MODULE_16__["default"].name]).controller('RecurringBillingChangeReportCtrl', ["$scope", "$timeout", "$filter", "$translate", "$q", "systemColors", "debounce", "state", "helper", "reportStyles", "reportHelper", "dwAlerts", "RecurringBillingChangeReport", "recurringBillingChangeReportColumns", "recurringBillingChangeData", "recurringBillingChangeChart", "optsRbcReportByPeriod", function ($scope, $timeout, $filter, $translate, $q, systemColors, debounce, state, helper, reportStyles, reportHelper, dwAlerts, RecurringBillingChangeReport, recurringBillingChangeReportColumns, recurringBillingChangeData, recurringBillingChangeChart, optsRbcReportByPeriod) {
  var $ctrl = this;
  var paramsChanged = reportHelper.paramsChanged,
      loadResources = reportHelper.loadResources;
  $ctrl.config = {
    reportName: $translate.instant('RECURRING_BILLING_CHANGE_REPORT.REPORT_NAME')
  };
  $ctrl.params = {
    fromDate: state.getParam('fromDate') ? $filter('toDate')(state.getParam('fromDate')) : moment().subtract(1, 'year'),
    toDate: state.getParam('toDate') ? $filter('toDate')(state.getParam('toDate')) : moment(),
    byPeriod: state.getParam('byPeriod') || 'month',
    orderBy: state.getParam('orderBy') || 'userCompany',
    columns: recurringBillingChangeReportColumns
  };
  $ctrl.resources = null;
  $ctrl.data = null;
  $ctrl.optsByPeriod = optsRbcReportByPeriod;
  state.setPageTitle($ctrl.config.reportName);
  /**
   * Watch report params and generate new report
   */

  $scope.$watch('$ctrl.params', debounce(function (np, op) {
    if (helper.pointFirstInvalid('#recurringBillingChangeReport')) return;
    $ctrl.pdf = null;
    $ctrl.report = null;

    if (paramsChanged(np, op, ['centerId', 'fromDate', 'toDate', 'byPeriod'])) {
      $ctrl.data = null;
    }

    $q.all({
      resources: $ctrl.resources || loadResources(),
      data: $ctrl.data || RecurringBillingChangeReport.query($ctrl.params).catch(function (err) {
        return dwAlerts.error(err, 'Failed to query report.');
      })
    }).then(function (result) {
      $ctrl.resources = result.resources;
      $ctrl.data = result.data;
    }).then(function () {
      $ctrl.report = recurringBillingChangeData($ctrl.params, $ctrl.data);
      var doc = reportHelper.buildPdf({
        config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
        report: $ctrl.report,
        resources: $ctrl.resources
      });
      $ctrl.pdf = doc.output('blob');
      $ctrl.chart = recurringBillingChangeChart($ctrl.data);
    });
  }, 100), true);
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
  };
  /**
   * Generate and download CSV report
   */


  $ctrl.downloadCsv = function () {
    if (!$ctrl.pdf) return;
    var fileName = reportHelper.getReportFileName({
      extension: 'csv',
      config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
      resources: $ctrl.resources
    });
    var csv = reportHelper.buildCsv({
      report: $ctrl.report
    });
    reportHelper.download({
      blob: csv,
      fileName: fileName
    });
  };
}]));

/***/ }),

/***/ "./bundles/reports/recurring-billing-change-report/recurring-billing-change-report.service.js":
/*!****************************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-change-report/recurring-billing-change-report.service.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _opts_rbc_report_by_period_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opts-rbc-report-by-period.service */ "./bundles/reports/recurring-billing-change-report/opts-rbc-report-by-period.service.js");



/**
 * RecurringBillingChangeReport service
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.RecurringBillingChangeReport', ['ngResource', 'deskworks.config', 'datesDeserializer', _opts_rbc_report_by_period_service__WEBPACK_IMPORTED_MODULE_2__["default"].name]).factory('RecurringBillingChangeReport', ["$resource", "$timeout", "deskworksConfig", "datesDeserializer", "optsRbcReportByPeriod", function ($resource, $timeout, deskworksConfig, datesDeserializer, optsRbcReportByPeriod) {
  var url = deskworksConfig.getApiAbsUrl('/reports/recurring-billing-change');
  var desDates = datesDeserializer(['from', 'to', 'billings.startDate', 'billings.noticeDate', 'billings.terminationDate']);
  var res = $resource(url, {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    query: function query(params) {
      return res.query(params).$promise.then(function (data) {
        return deserialize({
          data: data,
          params: params
        });
      });
    }
  };

  function deserialize(_ref) {
    var data = _ref.data,
        params = _ref.params;
    var _params$byPeriod = params.byPeriod,
        byPeriod = _params$byPeriod === void 0 ? 'month' : _params$byPeriod;

    var periodConfig = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(optsRbcReportByPeriod).call(optsRbcReportByPeriod, function (i) {
      return i.id === byPeriod;
    });

    data.forEach(function (period) {
      period.title = periodConfig.format(period.from, period.to);
    });
    return data;
  }
}]));

/***/ }),

/***/ "./bundles/reports/recurring-billing-change-report/recurring-billing-change-report.tpl.html":
/*!**************************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-change-report/recurring-billing-change-report.tpl.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"recurringBillingChangeReport\" class=\"gutter-v\"> <form> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <div class=\"gutter-v\"> <report-dates model=\"$ctrl.params\"></report-dates> <report-columns model=\"$ctrl.params\"></report-columns> </div> </div> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <report-options model=\"$ctrl.params\"> <report-by-period model=\"$ctrl.params.byPeriod\" opts=\"$ctrl.optsByPeriod\"></report-by-period> <report-order-by model=\"$ctrl.params.orderBy\" report-columns=\"$ctrl.params.columns\" levels=\"2\"></report-order-by> </report-options> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <ff-panel-header><span translate=\"RECURRING_BILLING_CHANGE_REPORT.CHART.HEADER\"></span></ff-panel-header> <div ff-dim=\"!$ctrl.pdf\"> <chart config=\"$ctrl.chart\" style=\"max-height:228px\"></chart> </div> </ff-panel> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/recurring-billing-churn-report/recurring-billing-churn-report-columns.service.js":
/*!**********************************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-churn-report/recurring-billing-churn-report-columns.service.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Columns for Recurring Billing Churn Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.recurringBillingChurnReportColumns', ['deskworks.userProfile.optsMembershipStatus', 'deskworks.userProfile.optsBillingMethod']).factory('recurringBillingChurnReportColumns', ["$rootScope", "$filter", "$translate", "optsMembershipStatus", "optsBillingMethod", function ($rootScope, $filter, $translate, optsMembershipStatus, optsBillingMethod) {
  var cols = [{
    dataKey: 'centerName',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.CENTER'
  }, {
    dataKey: 'userCompany',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.COMPANY',
    include: true,
    defaultOrder: true,
    styles: {
      minCellWidth: 60
    }
  }, {
    dataKey: 'userName',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.MEMBER',
    include: true
  }, {
    dataKey: 'userMembershipStatus',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.MEMBER_STATUS',
    include: true,
    styles: {
      halign: 'center'
    },
    pdf: function pdf(v) {
      return (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(optsMembershipStatus).call(optsMembershipStatus, function (o) {
        return o.id === v;
      }) || {}).name || v;
    },
    csv: function csv(v) {
      return (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(optsMembershipStatus).call(optsMembershipStatus, function (o) {
        return o.id === v;
      }) || {}).name || v;
    }
  }, {
    dataKey: 'productName',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.RECURRING_BILLING_ITEM',
    include: true
  }, {
    dataKey: 'billingMethod',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.BILLING_METHOD',
    include: true,
    styles: {
      halign: 'center'
    },
    pdf: function pdf(v) {
      return (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(optsBillingMethod).call(optsBillingMethod, function (o) {
        return o.id === v;
      }) || {}).name || v;
    },
    csv: function csv(v) {
      return (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(optsBillingMethod).call(optsBillingMethod, function (o) {
        return o.id === v;
      }) || {}).name || v;
    }
  }, {
    dataKey: 'amount',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.AMOUNT',
    include: true,
    styles: {
      halign: 'right',
      cellWidth: 'wrap'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'discount',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.DISCOUNT',
    include: true,
    styles: {
      halign: 'right',
      cellWidth: 'wrap'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'total',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.TOTAL',
    include: true,
    styles: {
      halign: 'right',
      cellWidth: 'wrap'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'startDate',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.START_DATE',
    include: true,
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v);
    },
    csv: function csv(v) {
      return $filter('date')(v);
    }
  }, {
    dataKey: 'terminationDate',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.TERMINATION_DATE',
    include: true,
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v);
    },
    csv: function csv(v) {
      return $filter('date')(v);
    }
  }, {
    dataKey: 'daysActive',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.DAYS_ACTIVE',
    include: true,
    styles: {
      halign: 'right'
    }
  }, {
    dataKey: 'leadSource',
    _title: 'RECURRING_BILLING_CHURN_REPORT.COLUMNS.LEAD_SOURCE',
    include: true // styles: { halign: 'right' },

  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/recurring-billing-churn-report/recurring-billing-churn-report.controller.js":
/*!*****************************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-churn-report/recurring-billing-churn-report.controller.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.RecurringBillingChurnReportCtrl', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.RecurringBillingChurnReport', 'deskworks.recurringBillingChurnReportColumns']).controller('RecurringBillingChurnReportCtrl', ["$scope", "$timeout", "$filter", "$translate", "state", "reportHelper", "reportStyles", "ReportBuilder", "RecurringBillingChurnReport", "recurringBillingChurnReportColumns", function ($scope, $timeout, $filter, $translate, state, reportHelper, reportStyles, ReportBuilder, RecurringBillingChurnReport, recurringBillingChurnReportColumns) {
  var $ctrl = this;
  $ctrl.config = {
    reportName: $translate.instant('RECURRING_BILLING_CHURN_REPORT.REPORT_NAME'),
    reportOptions: {},
    reportColumns: {
      columns: angular.copy(recurringBillingChurnReportColumns)
    },
    reportDates: {
      toDate: state.getParam('toDate') || function (date) {
        state.setParam('toDate', $filter('date')(date, 'yyyy-MM-dd'));
        return date;
      }(moment())
    },
    getReportData: function getReportData() {
      return RecurringBillingChurnReport.get({
        centerId: $ctrl.config.reportOptions.centerId,
        toDate: $filter('date')($ctrl.config.reportDates.toDate, 'yyyy-MM-dd')
      });
    }
  };
  state.setPageTitle($ctrl.config.reportName);
  /**
   * Allow center column only if 'All centers' selected
   */

  $scope.$watch('$ctrl.config.reportOptions.centerId', function (val) {
    var col = $ctrl.config.reportColumns.columns[0];
    col.readonly = !!val;
    if (col.readonly) col.include = false;
    if (col.readonly && $ctrl.config.orderBy === 'centerName') $ctrl.config.orderBy = 'userCompany';
  });
  $ctrl.reportBuilder = new ReportBuilder($ctrl.config);
  /**
   * Watch for data report depends on (center, columns, order) and generate new report, set toDate url param
   */

  var debounceTimeout;
  $scope.$watch(function (_) {
    return {
      reportOptions: $ctrl.config.reportOptions,
      reportColumns: $ctrl.config.reportColumns,
      toDate: $ctrl.config.reportDates.toDate,
      orderBy: $ctrl.config.orderBy
    };
  }, function (newVal, oldVal) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function (_) {
      $ctrl.pdf = null;
      if (angular.isUndefined($ctrl.config.reportOptions.centerId)) return;
      var newDate = newVal.toDate,
          oldDate = oldVal.toDate;

      if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) {
        $ctrl.config.reportData = null;
        state.setParam('toDate', $filter('date')(newVal.toDate, 'yyyy-MM-dd'));
      }

      $ctrl.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
        $ctrl.pdf = blob;
      });
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  $ctrl.downloadPdf = function () {
    if (!$ctrl.pdf) return;
    reportHelper.download({
      blob: $ctrl.pdf,
      fileName: $ctrl.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
  * Generate and download CSV report
  */


  $ctrl.downloadCsv = function () {
    if (!$ctrl.pdf) return;
    reportHelper.download({
      blob: $ctrl.reportBuilder.buildCsv(reportDataCallback),
      fileName: $ctrl.reportBuilder.getReportFileName('csv')
    });
  };
  /**
   * Report data callback for ReportBuilder, returns report data matrix and columns
   */


  function reportDataCallback(config) {
    var _context, _context2, _context4;

    var result = {
      columns: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = config.reportColumns.columns).call(_context, function (item) {
        return item.include;
      }),
      rows: [],
      styles: []
    };
    result.rows = _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default()(reportHelper).call(reportHelper, config.reportData.billings, config.orderBy);
    result.rows = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = result.rows).call(_context2, function (item, idx) {
      var _context3;

      result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = result.columns).call(_context3, function (col) {
        return item[col.dataKey];
      });
    }); // Add empty row

    result.rows.push([{
      content: false,
      colSpan: result.columns.length
    }]);
    result.styles.push(null); // Add total rows

    var totalRows = [{
      name: 'MONTHLY_RECURRING_BILLINGS',
      key: 'monthly'
    }, {
      name: 'QUARTERLY_RECURRING_BILLINGS',
      key: 'quarterly'
    }, {
      name: 'SEMIANNUAL_RECURRING_BILLINGS',
      key: 'semiAnnual'
    }, {
      name: 'ANNUAL_RECURRING_BILLINGS',
      key: 'annual'
    }, {
      name: 'AS_NEEDED_RECURRING_BILLINGS',
      key: 'asNeeded'
    }];

    var totalIdx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = result.columns).call(_context4, function (col) {
      return col.dataKey === 'total';
    });

    if (totalIdx >= 0) {
      totalRows.forEach(function (tr) {
        var row = [{
          content: $filter('ncurrency')(config.reportData[tr.key]),
          styles: {
            halign: 'right'
          }
        }];
        if (totalIdx > 0) row.unshift({
          content: $translate.instant("RECURRING_BILLING_CHURN_REPORT.TOTALS.".concat(tr.name)) + ':',
          colSpan: totalIdx,
          styles: {
            halign: 'right'
          }
        });
        if (totalIdx < result.columns.length - 1) row.push({
          content: false,
          colSpan: result.columns.length - totalIdx - 1
        });
        result.rows.push(row);
        result.styles.push(reportStyles.h3);
      });
    }

    return result;
  }
}]));

/***/ }),

/***/ "./bundles/reports/recurring-billing-churn-report/recurring-billing-churn-report.service.js":
/*!**************************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-churn-report/recurring-billing-churn-report.service.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * RecurringBillingChurnReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.RecurringBillingChurnReport', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('RecurringBillingChurnReport', ["$resource", "datesDeserializer", "deskworksConfig", function ($resource, datesDeserializer, deskworksConfig) {
  var desDates = datesDeserializer(['billings.startDate', 'billings.terminationDate']);
  var url = deskworksConfig.getApiAbsUrl('/reports/recurring-billing-churn');
  var res = $resource(url, {}, {
    get: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    get: function get(params) {
      return res.get(params).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/reports/recurring-billing-churn-report/recurring-billing-churn-report.tpl.html":
/*!************************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-churn-report/recurring-billing-churn-report.tpl.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"recurringBillingChurnReport\" class=\"gutter-v\"> <form name=\"formRecurringBillingChurnReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 65%', md: '0 0 50%'}\"> <report-columns model=\"$ctrl.config.reportColumns\"></report-columns> </div> <div flex=\"{lg: '0 0 35%', md: '0 0 50%'}\"> <report-options model=\"$ctrl.config.reportOptions\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><span translate=\"RECURRING_BILLING_CHURN_REPORT.AS_OF\"></span></ff-label> <ff-date flex=\"0 0 124px\" ff-model=\"$ctrl.config.reportDates.toDate\" ff-validate-alert=\"{{'RECURRING_BILLING_CHURN_REPORT.AS_OF' | translate}}\"></ff-date> <span class=\"ff-label\"></span> </label> <report-order-by model=\"$ctrl.config.orderBy\" report-columns=\"$ctrl.config.reportColumns.columns\"></report-order-by> </report-options> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/recurring-billing-report/recurring-billing-report-columns.service.js":
/*!**********************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-report/recurring-billing-report-columns.service.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Recurring Billing Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.recurringBillingReportColumns', []).factory('recurringBillingReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'userCompany',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.COMPANY',
    include: true
  }, {
    dataKey: 'userName',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.MEMBER',
    include: true,
    styles: {
      minCellWidth: 100
    }
  }, {
    dataKey: 'centerName',
    _title: 'REPORTS.COLUMNS.CENTER',
    include: false
  }, {
    dataKey: 'lastBillDate',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.LAST_BILL_DATE',
    include: true,
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'nextBillDate',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.NEXT_BILL_DATE',
    include: true,
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'amount',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.AMOUNT',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(val) {
      return $filter('ncurrency')(val);
    },
    csv: function csv(val) {
      return $filter('ncurrency')(val);
    }
  }, {
    dataKey: 'billingMethod',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.BILLING_METHOD',
    include: true
  }, {
    dataKey: 'ccExpiry',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.CC_EXPIRY',
    include: false,
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'discount',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.DISCOUNT',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(val) {
      return $filter('ncurrency')(val);
    },
    csv: function csv(val) {
      return $filter('ncurrency')(val);
    }
  }, {
    dataKey: 'productName',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.PRODUCT',
    include: true,
    styles: {
      minCellWidth: 120
    }
  }, {
    dataKey: 'description',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.DESCRIPTION',
    include: false
  }, {
    dataKey: 'startDate',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.START_DATE',
    include: true,
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'noticeDate',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.NOTICE_DATE',
    include: false,
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'noticePeriod',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.NOTICE_PERIOD',
    include: false
  }, {
    dataKey: 'noticeRequiredBy',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.NOTICE_REQUIRED_BY',
    include: false,
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'terminate',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.TERMINATION_DATE',
    include: false,
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'renewalDate',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.RENEWAL_DATE',
    include: false,
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'renewalTerm',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.RENEWAL_TERM',
    include: false
  }, {
    dataKey: 'renewalNoticePeriod',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.RENEWAL_REMINDER',
    include: false
  }, {
    dataKey: 'useForCheckInBilling',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.USE_FOR_CHECK_IN_BILLING',
    include: false,
    styles: {
      halign: 'center'
    },
    pdf: function pdf(v) {
      return $filter('yesno')(v);
    },
    csv: function csv(v) {
      return $filter('yesno')(v);
    }
  }, {
    dataKey: 'total',
    _title: 'RECURRING_BILLINGS_REPORT.COLUMNS.TOTAL',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/recurring-billing-report/recurring-billing-report.controller.js":
/*!*****************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-report/recurring-billing-report.controller.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.recurringBillingReport', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reports.reportColumns', 'deskworks.reports.reportOwnerRegion', 'deskworks.reports.recurringBillingReport.service', 'deskworks.reports.recurringBillingReportColumns']).controller('RecurringBillingReportCtrl', ["$scope", "$timeout", "$filter", "$translate", "state", "helper", "reportHelper", "reportStyles", "ReportBuilder", "RecurringBillingReport", "recurringBillingReportColumns", function ($scope, $timeout, $filter, $translate, state, helper, reportHelper, reportStyles, ReportBuilder, RecurringBillingReport, recurringBillingReportColumns) {
  var vm = this;
  vm.config = {
    reportName: $translate.instant('RECURRING_BILLINGS_REPORT.REPORT_NAME'),
    reportOptions: {},
    reportColumns: {
      columns: angular.copy(recurringBillingReportColumns)
    },
    reportOwnerRegion: {},
    getReportData: function getReportData() {
      return RecurringBillingReport.get({
        centerId: vm.config.reportOptions.centerId,
        ownerId: vm.config.reportOwnerRegion.ownerId,
        regionId: vm.config.reportOwnerRegion.regionId
      }).$promise;
    }
  };
  state.setPageTitle(vm.config.reportName);
  vm.reportBuilder = new ReportBuilder(vm.config);
  /**
   * Watch for data report depends on (center, columns, order) and generate new report
   */

  var debounceTimeout;
  $scope.$watch(function (_) {
    return {
      reportOptions: vm.config.reportOptions,
      reportColumns: vm.config.reportColumns,
      orderBy: vm.config.orderBy,
      reportOwnerRegion: vm.config.reportOwnerRegion
    };
  }, function (_) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function (_) {
      vm.pdf = null;
      if (angular.isUndefined(vm.config.reportOptions.centerId)) return;
      vm.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
        vm.pdf = blob;
      });
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  vm.downloadPdf = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.pdf,
      fileName: vm.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
   * Generate and download CSV report
   */


  vm.downloadCsv = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.reportBuilder.buildCsv(reportDataCallback),
      fileName: vm.reportBuilder.getReportFileName('csv')
    });
  };
  /**
   * Report data callback for ReportBuilder, returns report data matrix and columns
   */


  function reportDataCallback(config) {
    var _context, _context2;

    var result = {
      columns: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = config.reportColumns.columns).call(_context, function (item) {
        return item.include;
      }),
      rows: _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default()(reportHelper).call(reportHelper, config.reportData.billings, vm.config.orderBy),
      styles: []
    };
    result.rows = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = result.rows).call(_context2, function (billing, idx) {
      var _context3;

      result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = result.columns).call(_context3, function (col) {
        return billing[col.dataKey];
      });
    }); // Totals only if we have total column

    var row,
        idx,
        totalIdx = helper.findIndexByKeyValue(result.columns, 'dataKey', 'total');

    if (totalIdx >= 0) {
      var _context4, _context5, _context6, _context7, _context8, _context9;

      idx = helper.findIndexByKeyValue(result.columns, 'dataKey', 'description');
      idx = idx < 0 ? helper.findIndexByKeyValue(result.columns, 'dataKey', 'productName') : idx;
      idx = idx < 0 ? result.columns.length - 2 : idx;
      result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = Array.apply(null, Array(result.columns.length))).call(_context4, Boolean.prototype.valueOf, false)); // empty line

      result.styles.push(null);
      row = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = Array.apply(null, Array(result.columns.length))).call(_context5, Boolean.prototype.valueOf, false);
      row[idx] = $translate.instant('RECURRING_BILLINGS_REPORT.TOTALS.MONTHLY') + ':';
      row[totalIdx] = config.reportData.totalMonthly;
      result.rows.push(row);
      result.styles.push(reportStyles.h3);
      row = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context6 = Array.apply(null, Array(result.columns.length))).call(_context6, Boolean.prototype.valueOf, false);
      row[idx] = $translate.instant('RECURRING_BILLINGS_REPORT.TOTALS.QUARTERLY') + ':';
      row[totalIdx] = config.reportData.totalQuarterly;
      result.rows.push(row);
      result.styles.push(reportStyles.h3);
      row = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context7 = Array.apply(null, Array(result.columns.length))).call(_context7, Boolean.prototype.valueOf, false);
      row[idx] = $translate.instant('RECURRING_BILLINGS_REPORT.TOTALS.SEMI_ANNUAL') + ':';
      row[totalIdx] = config.reportData.totalSemiAnnual;
      result.rows.push(row);
      result.styles.push(reportStyles.h3);
      row = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context8 = Array.apply(null, Array(result.columns.length))).call(_context8, Boolean.prototype.valueOf, false);
      row[idx] = $translate.instant('RECURRING_BILLINGS_REPORT.TOTALS.ANNUAL') + ':';
      row[totalIdx] = config.reportData.totalAnnual;
      result.rows.push(row);
      result.styles.push(reportStyles.h3);
      row = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context9 = Array.apply(null, Array(result.columns.length))).call(_context9, Boolean.prototype.valueOf, false);
      row[idx] = $translate.instant('RECURRING_BILLINGS_REPORT.TOTALS.AS_NEEDED') + ':';
      row[totalIdx] = config.reportData.totalAsNeeded;
      result.rows.push(row);
      result.styles.push(reportStyles.h3);
    }

    return result;
  }
}]));

/***/ }),

/***/ "./bundles/reports/recurring-billing-report/recurring-billing-report.service.js":
/*!**************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-report/recurring-billing-report.service.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * RecurringBillingReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.recurringBillingReport.service', ['ngResource', 'datesDeserializer', 'deserializeNumbers', 'deskworks.config']).factory('RecurringBillingReport', ["$resource", "datesDeserializer", "deserializeNumbers", "deskworksConfig", function ($resource, datesDeserializer, deserializeNumbers, deskworksConfig) {
  var numbersDeserializer = deserializeNumbers(['billings.total', 'billings.discount', 'billings.amount', 'billings.noticePeriod', 'billings.renewalTerm', 'billings.renewalNoticePeriod']);
  var desDates = datesDeserializer(['billings.lastBillDate', 'billings.nextBillDate', 'billings.startDate', 'billings.ccExpiry', 'billings.terminate', 'billings.noticeDate', 'billings.renewalDate']);
  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/recurring-billing-reports');
  return $resource(url, {
    centerId: '@centerId'
  }, {
    get: {
      method: 'GET',
      transformResponse: [angular.fromJson, desDates, numbersDeserializer, deserialize]
    }
  });

  function deserialize(data) {
    data = angular.fromJson(data);
    data.billings.forEach(function (item) {
      if (item.renewalDate && item.noticePeriod) {
        item.noticeRequiredBy = new Date(item.renewalDate - item.noticePeriod * 24 * 3600000);
      }
    });
    return data;
  }
}]));

/***/ }),

/***/ "./bundles/reports/recurring-billing-report/recurring-billing-report.tpl.html":
/*!************************************************************************************!*\
  !*** ./bundles/reports/recurring-billing-report/recurring-billing-report.tpl.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"recurringBillingReport\" class=\"gutter-v\"> <form name=\"formRecurringBillingReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 65%', md: '0 0 50%'}\"> <report-columns model=\"vm.config.reportColumns\"></report-columns> </div> <div flex=\"{lg: '0 0 35%', md: '0 0 50%'}\"> <div class=\"gutter-v\"> <report-options model=\"vm.config.reportOptions\"> <report-order-by model=\"vm.config.orderBy\" report-columns=\"vm.config.reportColumns.columns\" levels=\"2\"></report-order-by> </report-options> <report-owner-region model=\"vm.config.reportOwnerRegion\" report-data=\"vm.config.reportData\"></report-owner-region> </div> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"vm.downloadPdf()\" ff-disabled=\"!vm.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"vm.downloadCsv()\" ff-disabled=\"!vm.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"vm.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/rent-roll-report/rent-roll-report-columns.service.js":
/*!******************************************************************************!*\
  !*** ./bundles/reports/rent-roll-report/rent-roll-report-columns.service.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Rent Roll Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rentRollReportColumns', []).factory('rentRollReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'centerName',
    _title: 'RENT_ROLL_REPORT.COLUMNS.CENTER',
    include: false
  }, {
    dataKey: 'userCompany',
    _title: 'RENT_ROLL_REPORT.COLUMNS.COMPANY',
    include: true
  }, {
    dataKey: 'userName',
    _title: 'RENT_ROLL_REPORT.COLUMNS.MEMBER',
    include: false
  }, {
    dataKey: 'productName',
    _title: 'RENT_ROLL_REPORT.COLUMNS.SUBSCRIPTION_ITEM',
    include: true,
    defaultOrder: true
  }, {
    dataKey: 'area',
    _title: 'RENT_ROLL_REPORT.COLUMNS.AREA',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'center'
    }
  }, {
    dataKey: 'amount',
    _title: 'RENT_ROLL_REPORT.COLUMNS.AMOUNT',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'discount',
    _title: 'RENT_ROLL_REPORT.COLUMNS.DISCOUNT',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'total',
    _title: 'RENT_ROLL_REPORT.COLUMNS.TOTAL',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'startDate',
    _title: 'RENT_ROLL_REPORT.COLUMNS.START_DATE',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'terminationDate',
    _title: 'RENT_ROLL_REPORT.COLUMNS.TERMINATION_DATE',
    include: true,
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/rent-roll-report/rent-roll-report.controller.js":
/*!*************************************************************************!*\
  !*** ./bundles/reports/rent-roll-report/rent-roll-report.controller.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/fill */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/fill.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");










/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.RentRollReportCtrl', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_9__["default"].name, 'deskworks.state', 'deskworks.reports.reportColumns', 'deskworks.reports.ReportBuilder', 'deskworks.RentRollReport', 'deskworks.rentRollReportColumns']).controller('RentRollReportCtrl', ["$scope", "$timeout", "$translate", "$filter", "helper", "state", "reportHelper", "reportStyles", "ReportBuilder", "RentRollReport", "rentRollReportColumns", function ($scope, $timeout, $translate, $filter, helper, state, reportHelper, reportStyles, ReportBuilder, RentRollReport, rentRollReportColumns) {
  var $ctrl = this;
  $ctrl.config = {
    reportName: $translate.instant('RENT_ROLL_REPORT.REPORT_NAME'),
    reportOptions: {},
    reportColumns: {
      columns: angular.copy(rentRollReportColumns)
    },
    getReportData: function getReportData() {
      return RentRollReport.query({
        centerId: $ctrl.config.reportOptions.centerId || null
      });
    }
  };
  state.setPageTitle($ctrl.config.reportName);
  $ctrl.reportBuilder = new ReportBuilder($ctrl.config);
  /**
   * Watch for data report depends on (center, columns, order) and generate new report
   */

  var debounceTimeout;
  $scope.$watch(function () {
    return {
      reportOptions: $ctrl.config.reportOptions,
      reportColumns: $ctrl.config.reportColumns,
      orderBy: $ctrl.config.orderBy
    };
  }, function () {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function () {
      $ctrl.pdf = null;
      if (angular.isUndefined($ctrl.config.reportOptions.centerId)) return;
      $ctrl.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
        $ctrl.pdf = blob;
      });
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  $ctrl.downloadPdf = function () {
    if (!$ctrl.pdf) return;
    reportHelper.download({
      blob: $ctrl.pdf,
      fileName: $ctrl.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
   * Generate and download CSV report
   */


  $ctrl.downloadCsv = function () {
    if (!$ctrl.pdf) return;
    reportHelper.download({
      blob: $ctrl.reportBuilder.buildCsv(reportDataCallback),
      fileName: $ctrl.reportBuilder.getReportFileName('csv')
    });
  };
  /**
   * Report data callback
   */


  function reportDataCallback(config) {
    var _context, _context2;

    var result = {
      columns: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_context = config.reportColumns.columns).call(_context, function (item) {
        return item.include;
      }),
      rows: [],
      styles: []
    };

    var totals = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = ['area', 'amount', 'discount', 'total']).call(_context2, function (k) {
      var _context3;

      return {
        dataKey: k,
        amount: 0,
        colIndex: _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = result.columns).call(_context3, function (c) {
          return c.dataKey === k;
        })
      };
    });

    var firstTotalIdx = -1;
    totals.some(function (total) {
      var _context4;

      firstTotalIdx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = result.columns).call(_context4, function (col) {
        return col.dataKey === total.dataKey;
      });
      return firstTotalIdx >= 0;
    });
    config.reportData.forEach(function (category) {
      var _context5;

      var charges = $ctrl.reportBuilder.sortData(category.recurringCharges, config.orderBy);

      var subtotals = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = angular.copy(totals)).call(_context5, function (t) {
        return t.amount = 0, t;
      }); // Add rows for recurring charges


      charges.forEach(function (charge, idx) {
        var _context6;

        result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context6 = result.columns).call(_context6, function (col) {
          return charge[col.dataKey];
        }));
        result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
        subtotals.forEach(function (total) {
          total.amount += charge[total.dataKey] || 0;
        });
      }); // Add subtotal row

      if (firstTotalIdx >= 0) {
        var _context7;

        var subtotalRow = _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_4___default()(_context7 = Array(result.columns.length)).call(_context7, false);

        if (firstTotalIdx > 0) {
          var _context8, _context9;

          subtotalRow[firstTotalIdx - 1] = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context8 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context9 = "".concat(category.productCategoryCode, " ")).call(_context9, category.productCategoryName, " ")).call(_context8, $translate.instant('REPORTS.TOTAL'), ":");
        }

        subtotals.forEach(function (total) {
          subtotalRow[total.colIndex] = helper.round(total.amount);
        });
        result.rows.push(subtotalRow);
        result.styles.push(reportStyles.h2);
      } // Calculate totals


      totals.forEach(function (total, idx) {
        total.amount += subtotals[idx].amount;
      });
    });

    if (firstTotalIdx >= 0) {
      var _context10, _context11;

      // Add empty row
      result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_4___default()(_context10 = Array(result.columns.length)).call(_context10, false));
      result.styles.push(reportStyles.h3); // Add total row

      var totalRow = _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_4___default()(_context11 = Array(result.columns.length)).call(_context11, false);

      if (firstTotalIdx > 0) {
        totalRow[firstTotalIdx - 1] = "".concat($translate.instant('RENT_ROLL_REPORT.TOTAL_RENT_ROLL'), ":");
      }

      totals.forEach(function (total) {
        totalRow[total.colIndex] = helper.round(total.amount);
      });
      result.rows.push(totalRow);
      result.styles.push(reportStyles.h3);
    }

    return result;
  }
}]));

/***/ }),

/***/ "./bundles/reports/rent-roll-report/rent-roll-report.service.js":
/*!**********************************************************************!*\
  !*** ./bundles/reports/rent-roll-report/rent-roll-report.service.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * RentRollReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.RentRollReport', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('RentRollReport', ["$resource", "datesDeserializer", "deskworksConfig", function ($resource, datesDeserializer, deskworksConfig) {
  var desDates = datesDeserializer(['recurringCharges.startDate', 'recurringCharges.terminationDate']);
  var url = deskworksConfig.getApiAbsUrl('/reports/rent-roll');
  var res = $resource(url, {
    centerId: '@centerId'
  }, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    query: function query(params) {
      return res.query(params).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/reports/rent-roll-report/rent-roll-report.tpl.html":
/*!********************************************************************!*\
  !*** ./bundles/reports/rent-roll-report/rent-roll-report.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"rentRollReport\" class=\"gutter-v\"> <form name=\"formRentRollReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 65%', md: '0 0 50%'}\"> <report-columns model=\"$ctrl.config.reportColumns\"></report-columns> </div> <div flex=\"{lg: '0 0 35%', md: '0 0 50%'}\"> <div class=\"gutter-v\"> <report-options model=\"$ctrl.config.reportOptions\"> <report-order-by model=\"$ctrl.config.orderBy\" report-columns=\"$ctrl.config.reportColumns.columns\"></report-order-by> </report-options> </div> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/reservation-report/reservation-report-columns.service.js":
/*!**********************************************************************************!*\
  !*** ./bundles/reports/reservation-report/reservation-report-columns.service.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Reservation Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.reservationReportColumns', []).factory('reservationReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'startTime',
    _title: 'RESERVATION_REPORT.COLUMNS.START_TIME',
    include: true,
    styles: {
      minCellWidth: 100
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'weekDate') + ' ' + $filter('date')(v, 'shortTime');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate') + ' ' + $filter('date')(v, 'shortTime');
    }
  }, {
    dataKey: 'centerName',
    _title: 'RESERVATION_REPORT.COLUMNS.CENTER',
    include: false,
    styles: {
      minCellWidth: 120
    }
  }, {
    dataKey: 'createdAt',
    _title: 'RESERVATION_REPORT.COLUMNS.CREATED_AT',
    include: false,
    styles: {
      minCellWidth: 80
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate') + ' ' + $filter('date')(v, 'shortTime');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate') + ' ' + $filter('date')(v, 'shortTime');
    }
  }, {
    dataKey: 'endTime',
    _title: 'RESERVATION_REPORT.COLUMNS.END_TIME',
    include: true,
    styles: {
      minCellWidth: 100
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'weekDate') + ' ' + $filter('date')(v, 'shortTime');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate') + ' ' + $filter('date')(v, 'shortTime');
    }
  }, {
    dataKey: 'note',
    _title: 'RESERVATION_REPORT.COLUMNS.NOTE',
    include: false,
    styles: {
      minCellWidth: 120
    }
  }, {
    dataKey: 'reservationUnitName',
    _title: 'RESERVATION_REPORT.COLUMNS.UNIT',
    include: true,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'userCompany',
    _title: 'RESERVATION_REPORT.COLUMNS.COMPANY',
    include: true,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'userName',
    _title: 'RESERVATION_REPORT.COLUMNS.USER_NAME',
    include: true,
    styles: {
      minCellWidth: 120
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/reservation-report/reservation-report.controller.js":
/*!*****************************************************************************!*\
  !*** ./bundles/reports/reservation-report/reservation-report.controller.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");











/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.reservationReport', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_9__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_10__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reports.reportColumns', 'deskworks.reports.reportOwnerRegion', 'deskworks.reports.reservationReport.service', 'deskworks.reports.reservationReportColumns']).controller('ReservationReportCtrl', ["$scope", "$timeout", "$filter", "$translate", "state", "helper", "reportHelper", "reportStyles", "ReportBuilder", "ReservationReport", "reservationReportColumns", "reservationFields", function ($scope, $timeout, $filter, $translate, state, helper, reportHelper, reportStyles, ReportBuilder, ReservationReport, reservationReportColumns, reservationFields) {
  var _context;

  var vm = this;

  var fieldColumns = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(reservationFields).call(reservationFields, function (f) {
    return {
      dataKey: f.id,
      //   styles: { minCellWidth: 100 },
      title: f.name,
      include: false,
      pdf: function pdf(v) {
        return f.$$filter(f, v);
      },
      csv: function csv(v) {
        return f.$$filter(f, v);
      }
    };
  });

  vm.config = {
    reportName: $translate.instant('RESERVATION_REPORT.REPORT_NAME'),
    reportOptions: {},
    reportOwnerRegion: {},
    reportColumns: {
      columns: _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context = angular.copy(reservationReportColumns)).call(_context, fieldColumns)
    },
    reportDates: {
      fromDate: moment(),
      toDate: moment()
    },
    getReportData: function getReportData() {
      return ReservationReport.get({
        centerId: vm.config.reportOptions.centerId,
        fromDate: $filter('date')(vm.config.reportDates.fromDate, 'yyyy-MM-dd'),
        toDate: $filter('date')(vm.config.reportDates.toDate, 'yyyy-MM-dd'),
        ownerId: vm.config.reportOwnerRegion.ownerId,
        regionId: vm.config.reportOwnerRegion.regionId
      }).then(function (result) {
        result.reservations.forEach(function (res) {
          // flatten reservation fields
          _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(res.fields).forEach(function (key) {
            var field = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(reservationFields).call(reservationFields, function (f) {
              return f.id === +key;
            });

            res[key] = field.$$deserialize(field, res.fields[key]);
          });

          delete res.fields;
        });
        return result;
      });
    }
  };
  vm.config.reportDates.toDate.add(7, 'd'); // one week range by default

  state.setPageTitle(vm.config.reportName);
  vm.reportBuilder = new ReportBuilder(vm.config);
  /**
   * Watch for data report depends on (center, columns, order) and generate new report
   */

  var debounceTimeout;
  $scope.$watch(function (_) {
    return {
      reportOptions: vm.config.reportOptions,
      reportColumns: vm.config.reportColumns,
      orderBy: vm.config.orderBy,
      reportDates: vm.config.reportDates,
      reportOwnerRegion: vm.config.reportOwnerRegion
    };
  }, function (newVal, oldVal) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function (_) {
      vm.pdf = null;
      if (angular.isUndefined(vm.config.reportOptions.centerId)) return;
      var newDate = newVal.reportDates.fromDate,
          oldDate = oldVal.reportDates.fromDate;
      if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) vm.config.reportData = null;
      newDate = newVal.reportDates.toDate;
      oldDate = oldVal.reportDates.toDate;
      if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) vm.config.reportData = null;
      vm.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
        vm.pdf = blob;
      });
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  vm.downloadPdf = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.pdf,
      fileName: vm.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
   * Generate and download CSV report
   */


  vm.downloadCsv = function () {
    if (!vm.pdf) return;
    reportHelper.download({
      blob: vm.reportBuilder.buildCsv(reportDataCallback),
      fileName: vm.reportBuilder.getReportFileName('csv')
    });
  };
  /**
   * Report data callback for ReportBuilder, returns report data matrix and columns
   */


  function reportDataCallback(config) {
    var _context2, _context3;

    var result = {
      columns: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = config.reportColumns.columns).call(_context2, function (item) {
        return item.include;
      }),
      rows: _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_6___default()(reportHelper).call(reportHelper, config.reportData.reservations, config.orderBy),
      styles: []
    };
    result.rows = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = result.rows).call(_context3, function (billing, idx) {
      var _context4;

      result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = result.columns).call(_context4, function (col) {
        return billing[col.dataKey];
      });
    });
    return result;
  }
}]));

/***/ }),

/***/ "./bundles/reports/reservation-report/reservation-report.service.js":
/*!**************************************************************************!*\
  !*** ./bundles/reports/reservation-report/reservation-report.service.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * ReservationReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.reservationReport.service', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('ReservationReport', ["$resource", "datesDeserializer", "deskworksConfig", function ($resource, datesDeserializer, deskworksConfig) {
  var desDates = datesDeserializer(['reservations.createdAt', 'reservations.startTime', 'reservations.endTime']);
  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/reservation-reports');
  var res = $resource(url, {
    centerId: '@centerId',
    fromDate: '@fromDate',
    toDate: '@toDate'
  }, {
    get: {
      method: 'GET',
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    get: function get(params) {
      return res.get(params).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/reports/reservation-report/reservation-report.tpl.html":
/*!************************************************************************!*\
  !*** ./bundles/reports/reservation-report/reservation-report.tpl.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"reservationReport\" class=\"gutter-v\"> <form name=\"formReservationReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <report-columns model=\"vm.config.reportColumns\"></report-columns> </div> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <div class=\"gutter-v\"> <report-options model=\"vm.config.reportOptions\"> <report-dates model=\"vm.config.reportDates\" embed=\"0 0 100px\"></report-dates> <report-order-by model=\"vm.config.orderBy\" report-columns=\"vm.config.reportColumns.columns\"></report-order-by> </report-options> <report-owner-region model=\"vm.config.reportOwnerRegion\" report-data=\"vm.config.reportData\"></report-owner-region> </div> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"vm.downloadPdf()\" ff-disabled=\"!vm.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"vm.downloadCsv()\" ff-disabled=\"!vm.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"vm.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/reservation-usage-report/reservation-usage-report-columns.service.js":
/*!**********************************************************************************************!*\
  !*** ./bundles/reports/reservation-usage-report/reservation-usage-report-columns.service.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Reservation Usage Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationUsageReportColumns', []).factory('reservationUsageReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'memberCompany',
    _title: 'REPORTS.COLUMNS.USER_COMPANY'
  }, {
    dataKey: 'memberName',
    _title: 'REPORTS.COLUMNS.USER_NAME',
    defaultOrder: true
  }, {
    dataKey: 'reservationCost',
    _title: 'RESERVATION_USAGE_REPORT.COLUMNS.RESERVATION_COST',
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'reservationCreditApplied',
    _title: 'RESERVATION_USAGE_REPORT.COLUMNS.RES_CREDITS_APPLIED',
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'reservationCostBalance',
    _title: 'RESERVATION_USAGE_REPORT.COLUMNS.RES_COST_BALANCE',
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/reservation-usage-report/reservation-usage-report.controller.js":
/*!*****************************************************************************************!*\
  !*** ./bundles/reports/reservation-usage-report/reservation-usage-report.controller.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationUsageReportCtrl', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reports.reportDates', 'deskworks.reports.reportOwnerRegion', 'deskworks.ReservationUsageReport', 'deskworks.reservationUsageReportColumns', 'deskworks.reportOrderBy']).controller('ReservationUsageReportCtrl', ["$scope", "$timeout", "$filter", "$translate", "state", "helper", "reportHelper", "reportStyles", "ReportBuilder", "ReservationUsageReport", "reservationUsageReportColumns", function ($scope, $timeout, $filter, $translate, state, helper, reportHelper, reportStyles, ReportBuilder, ReservationUsageReport, reservationUsageReportColumns) {
  var $ctrl = this;
  $ctrl.config = {
    reportName: $translate.instant('RESERVATION_USAGE_REPORT.REPORT_NAME'),
    reportOptions: {},
    reportOwnerRegion: {},
    reportColumns: reservationUsageReportColumns,
    reportDates: {
      fromDate: moment().subtract(1, 'month').startOf('month'),
      toDate: moment().subtract(1, 'month').endOf('month')
    },
    getReportData: function getReportData() {
      return ReservationUsageReport.query({
        centerId: $ctrl.config.reportOptions.centerId || null,
        fromDate: $filter('date')($ctrl.config.reportDates.fromDate, 'yyyy-MM-dd'),
        toDate: $filter('date')($ctrl.config.reportDates.toDate, 'yyyy-MM-dd'),
        ownerId: $ctrl.config.reportOwnerRegion.ownerId,
        regionId: $ctrl.config.reportOwnerRegion.regionId
      });
    }
  };
  state.setPageTitle($ctrl.config.reportName);
  $ctrl.reportBuilder = new ReportBuilder($ctrl.config);
  /**
   * Watch for data report depends on (center, columns, order) and generate new report
   */

  var debounceTimeout;
  $scope.$watch(function () {
    return {
      reportOptions: $ctrl.config.reportOptions,
      reportDates: $ctrl.config.reportDates,
      orderBy: $ctrl.config.orderBy,
      reportOwnerRegion: $ctrl.config.reportOwnerRegion
    };
  }, function (newVal, oldVal) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function () {
      $ctrl.pdf = null;
      var newDate = newVal.reportDates.fromDate,
          oldDate = oldVal.reportDates.fromDate;
      if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) $ctrl.config.reportData = null;
      newDate = newVal.reportDates.toDate;
      oldDate = oldVal.reportDates.toDate;
      if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) $ctrl.config.reportData = null;
      $ctrl.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
        $ctrl.pdf = blob;
      });
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  $ctrl.downloadPdf = function () {
    if (!$ctrl.pdf) return;
    reportHelper.download({
      blob: $ctrl.pdf,
      fileName: $ctrl.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
  * Generate and download CSV report
  */


  $ctrl.downloadCsv = function () {
    if (!$ctrl.pdf) return;
    reportHelper.download({
      blob: $ctrl.reportBuilder.buildCsv(reportDataCallback),
      fileName: $ctrl.reportBuilder.getReportFileName('csv')
    });
  };
  /**
   * Report data callback for ReportBuilder, returns report data matrix and columns
   */


  function reportDataCallback(config) {
    var _context;

    var result = {
      columns: config.reportColumns,
      rows: [],
      styles: []
    }; // Totals

    var totalsKeys = ['reservationCost', 'reservationCreditApplied', 'reservationCostBalance'];
    var totals = config.reportData.reduce(function (result, item) {
      return totalsKeys.forEach(function (key) {
        result[key] += item[key] || 0;
      }), result;
    }, totalsKeys.reduce(function (result, key) {
      return result[key] = 0, result;
    }, {}));
    totals.memberCompany = $translate.instant('REPORTS.TOTALS').toUpperCase() + ':';

    var totalRow = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context = result.columns).call(_context, function (col) {
      return angular.isNumber(totals[col.dataKey]) ? helper.round(totals[col.dataKey]) : totals[col.dataKey] || false;
    });

    result.rows.push(totalRow);
    result.styles.push(reportStyles.h2); // Items

    var items = _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2___default()(reportHelper).call(reportHelper, config.reportData, config.orderBy);

    items.forEach(function (item, idx) {
      var _context2;

      result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = result.columns).call(_context2, function (col) {
        return angular.isNumber(item[col.dataKey]) ? helper.round(item[col.dataKey]) : item[col.dataKey];
      }));
      result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
    });

    if (config.reportData.length) {
      result.rows.push(angular.extend({}, totalRow));
      result.styles.push(reportStyles.h2);
    }

    return result;
  }
}]));

/***/ }),

/***/ "./bundles/reports/reservation-usage-report/reservation-usage-report.service.js":
/*!**************************************************************************************!*\
  !*** ./bundles/reports/reservation-usage-report/reservation-usage-report.service.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * ReservationUsageReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationUsageReport', ['ngResource', 'deskworks.config', 'deserializeNumbers']).factory('ReservationUsageReport', ["$resource", "deskworksConfig", "deserializeNumbers", function ($resource, deskworksConfig, deserializeNumbers) {
  var url = deskworksConfig.getApiAbsUrl('/reservation-usage-report');
  var desNumbers = deserializeNumbers(['reservationHours', 'reservationCost', 'reservationCreditApplied', 'reservationCostBalance']);
  var res = $resource(url, {
    centerId: '@centerId',
    fromDate: '@fromDate',
    toDate: '@toDate'
  }, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desNumbers]
    }
  });
  return {
    query: function query(params) {
      return res.query(params).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/reports/reservation-usage-report/reservation-usage-report.tpl.html":
/*!************************************************************************************!*\
  !*** ./bundles/reports/reservation-usage-report/reservation-usage-report.tpl.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"reservationUsageReport\" class=\"gutter-v\"> <form name=\"formReservationUsageReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\" style=\"margin-bottom:-15px\"> <div flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <div class=\"gutter-v\"> <report-dates model=\"$ctrl.config.reportDates\"></report-dates> </div> </div> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <div class=\"gutter-v\"> <report-options model=\"$ctrl.config.reportOptions\"> <report-order-by model=\"$ctrl.config.orderBy\" report-columns=\"$ctrl.config.reportColumns\"></report-order-by> </report-options> <report-owner-region model=\"$ctrl.config.reportOwnerRegion\" report-data=\"$ctrl.config.reportData\"></report-owner-region> </div> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-aggregate.service.js":
/*!*********************************************************************************************************************!*\
  !*** ./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-aggregate.service.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_reports_directives_report_by_period_opts_report_by_period_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/reports/directives/report-by-period/opts-report-by-period.service */ "./shared/reports/directives/report-by-period/opts-report-by-period.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationUtilizationActualExpectedAggregate', [shared_reports_directives_report_by_period_opts_report_by_period_service__WEBPACK_IMPORTED_MODULE_2__["default"].name])
/**
 * Aggregate reservation utilization report data by reservation categories
 */
.factory('reservationUtilizationActualExpectedAggregate', ["helper", function (helper) {
  return function (data, categories) {
    var _context;

    var allUnits = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(data).call(data, function (u) {
      var actualUse = u.groups.reduce(function (sum, g) {
        return sum + g.daily.reduce(function (sum, d) {
          return sum + d.usage;
        }, 0);
      }, 0) || 0;
      var unitName = u.unitName,
          _u$expectedUse = u.expectedUse,
          expectedUse = _u$expectedUse === void 0 ? 0 : _u$expectedUse,
          categoryId = u.categoryId;
      return {
        name: unitName,
        categoryId: categoryId,
        expectedUse: expectedUse,
        actualUse: actualUse,
        utilization: expectedUse ? actualUse * 100 / expectedUse : 0
      };
    });

    return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(categories).call(categories, function (cat) {
      var units = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(allUnits).call(allUnits, function (u) {
        return u.categoryId === cat.id;
      });

      var expectedUse = units.reduce(function (sum, u) {
        return sum + u.expectedUse;
      }, 0);
      var actualUse = units.reduce(function (sum, u) {
        return sum + u.actualUse;
      }, 0);
      return {
        name: cat.name,
        expectedUse: expectedUse,
        actualUse: actualUse,
        utilization: expectedUse ? helper.round(actualUse * 100 / expectedUse) : 0,
        units: units
      };
    })).call(_context, function (cat) {
      return cat.units && cat.units.length;
    });
  };
}]));

/***/ }),

/***/ "./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-chart.service.js":
/*!*****************************************************************************************************************!*\
  !*** ./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-chart.service.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Pie chart for Reservation Utilization Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.reservationUtilizationActualExpectedChart', []).factory('reservationUtilizationActualExpectedChart', ["$translate", "$filter", "helper", "whitelabel", function ($translate, $filter, helper, whitelabel) {
  return function (data) {
    var units = data.reduce(function (arr, cat) {
      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(arr).call(arr, cat.units);
    }, []);
    var expectedLabel = $translate.instant('RESERVATION_UTILIZATION_REPORT.COLUMNS.EXPECTED_USAGE');
    var actualLabel = $translate.instant('RESERVATION_UTILIZATION_REPORT.COLUMNS.ACTUAL_USAGE');
    var utilizationLabel = $translate.instant('RESERVATION_UTILIZATION_REPORT.COLUMNS.UTILIZATION');
    var chart = {
      type: 'horizontalBar',
      data: {
        labels: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(units).call(units, function (item) {
          return item.name || '-';
        }),
        datasets: [{
          data: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(units).call(units, function (u) {
            return u.utilization;
          }),
          backgroundColor: whitelabel.getProperty('--brand-color'),
          maxBarThickness: 30
        }]
      },
      options: {
        tooltips: {
          callbacks: {
            label: function label(tooltipItem, data) {
              var _context, _context2, _context3;

              var unit = units[tooltipItem.index];
              var expectedUse = $filter('hours')($filter('round')(unit.expectedUse, 1));
              var actualUse = $filter('hours')($filter('round')(unit.actualUse, 1));
              var utilization = $filter('round')(unit.utilization, 1);
              return [_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = "".concat(expectedLabel, ": ")).call(_context, expectedUse), _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = "".concat(actualLabel, ": ")).call(_context2, actualUse), _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = "".concat(utilizationLabel, ": ")).call(_context3, utilization, "%")];
            }
          }
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            min: 100,
            max: 100,
            ticks: {
              suggestedMin: 0,
              suggestedMax: 100,
              callback: function callback(v) {
                return v + '%';
              }
            }
          }]
        }
      }
    };
    return chart;
  };
}]));

/***/ }),

/***/ "./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-columns.service.js":
/*!*******************************************************************************************************************!*\
  !*** ./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-columns.service.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/**
 * Columns for Reservation Utilization Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationUtilizationActualExpectedColumns', []).factory('reservationUtilizationActualExpectedColumns', ["$rootScope", "$translate", "helper", function ($rootScope, $translate, helper) {
  var cols = [{
    dataKey: 'name',
    _title: 'RESERVATION_UNITS.UNIT'
  }, _objectSpread({
    dataKey: 'expectedUse',
    _title: 'RESERVATION_UTILIZATION_REPORT.COLUMNS.EXPECTED_USAGE',
    styles: {
      halign: 'right'
    }
  }, round(1)), _objectSpread({
    dataKey: 'actualUse',
    _title: 'RESERVATION_UTILIZATION_REPORT.COLUMNS.ACTUAL_USAGE',
    styles: {
      halign: 'right'
    }
  }, round(1)), {
    dataKey: 'utilization',
    _title: 'RESERVATION_UTILIZATION_REPORT.COLUMNS.UTILIZATION',
    styles: {
      halign: 'right'
    },
    pdf: function pdf(v) {
      return helper.round(v, 1) + '%';
    },
    csv: function csv(v) {
      return helper.round(v, 1) + '%';
    }
  }];

  function round(digits) {
    return {
      pdf: function pdf(v) {
        return helper.round(v, digits);
      },
      csv: function csv(v) {
        return helper.round(v, digits);
      }
    };
  }

  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-report.service.js":
/*!******************************************************************************************************************!*\
  !*** ./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-report.service.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var _reservation_utilization_actual_expected_columns_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-utilization-actual-expected-columns.service */ "./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-columns.service.js");




/**
 * Data to report converter for Actual / Expected mode of Reservation Utilization Report
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.reservationUtilizationActualExpectedReport', [shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, _reservation_utilization_actual_expected_columns_service__WEBPACK_IMPORTED_MODULE_3__["default"].name]).factory('reservationUtilizationActualExpectedReport', ["$filter", "$translate", "helper", "reportStyles", "reservationUtilizationActualExpectedColumns", function ($filter, $translate, helper, reportStyles, reservationUtilizationActualExpectedColumns) {
  return dataToReport;
  /**
   *
   * @param params
   * @param data - aggregated via reservationUtilizationActualExpectedAggregate
   * @returns {{columns: Array, styles: Array, rows: Array}}
   */

  function dataToReport(params, data) {
    var report = {
      columns: reservationUtilizationActualExpectedColumns,
      rows: [],
      styles: []
    };
    var expectedUse = data.reduce(function (sum, cat) {
      return sum + cat.expectedUse;
    }, 0);
    var actualUse = data.reduce(function (sum, cat) {
      return sum + cat.actualUse;
    }, 0);
    report.rows.push([$translate.instant('REPORTS.TOTALS').toUpperCase(), expectedUse, actualUse, expectedUse ? actualUse * 100 / expectedUse : 0]);
    report.styles.push(reportStyles.h1);
    data.forEach(function (category) {
      var _context;

      report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = report.columns).call(_context, function (col) {
        return category[col.dataKey];
      }));
      report.styles.push(reportStyles.h2);
      category.units.forEach(function (unit, idx) {
        var _context2;

        report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = report.columns).call(_context2, function (col) {
          return unit[col.dataKey];
        }));
        report.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      });
    });
    return report;
  }
}]));

/***/ }),

/***/ "./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-aggregate.service.js":
/*!*********************************************************************************************************************!*\
  !*** ./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-aggregate.service.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/fill */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/fill.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_reports_directives_report_by_period_opts_report_by_period_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/reports/directives/report-by-period/opts-report-by-period.service */ "./shared/reports/directives/report-by-period/opts-report-by-period.service.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationUtilizationDetailedActualAggregate', [shared_reports_directives_report_by_period_opts_report_by_period_service__WEBPACK_IMPORTED_MODULE_4__["default"].name])
/**
 * Aggregate reservation utilization report data by time periods, calculate totals
 */
.factory('reservationUtilizationDetailedActualAggregate', ["reservationUtilizationReportCreateGrid", "helper", function (reservationUtilizationReportCreateGrid, helper) {
  return function (params, data) {
    var result = {
      periods: reservationUtilizationReportCreateGrid(params.fromDate, params.toDate, params.byPeriod)
    };
    result.units = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(data).call(data, function (unit) {
      var _context, _context2;

      var newUnit = {
        name: unit.unitName,
        totals: _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_2___default()(_context = Array(result.periods.length)).call(_context, 0),
        total: 0
      };
      newUnit.groups = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = unit.groups).call(_context2, function (group) {
        var _context3;

        return {
          name: group.name,
          totals: group.daily.reduce(function (totals, day) {
            result.periods.some(function (col, idx) {
              if (day.date.isSameOrAfter(col.fromDate) && day.date.isSameOrBefore(col.toDate)) {
                var val = angular.isNumber(day.usage) ? day.usage : 0;
                totals[idx] += val;
                totals[idx] = helper.round(totals[idx]);
                newUnit.totals[idx] += val;
                newUnit.totals[idx] = helper.round(newUnit.totals[idx]);
                return true;
              }
            });
            return totals;
          }, _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = Array(result.periods.length)).call(_context3, 0))
        };
      });
      newUnit.groups.forEach(function (g) {
        g.total = g.totals.reduce(function (r, t) {
          return r + t;
        }, 0);
        newUnit.total += g.total;
        g.total = helper.round(g.total);
      });
      newUnit.total = helper.round(newUnit.total);
      return newUnit;
    });
    return result;
  };
}])
/**
 * Create calendar grid for selected period, return [{ fromDate, toDate, title }]
 */
.factory('reservationUtilizationReportCreateGrid', ["$filter", "optsReportByPeriod", function ($filter, optsReportByPeriod) {
  return function (fromDate, toDate, period) {
    var cols = [];

    var periodConfig = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default()(optsReportByPeriod).call(optsReportByPeriod, function (opt) {
      return opt.id === period;
    });

    var date = fromDate.clone().startOf(period);

    do {
      var col = {
        fromDate: date.clone()
      };
      date.add(1, period + 's'); // weeks/months/quarters/years

      col.toDate = date.clone().subtract(1, 'ms'); // end of previous day

      col.title = periodConfig.format(col.fromDate, col.toDate);
      cols.push(col);
    } while (date.isSameOrBefore(toDate));

    return cols;
  };
}]));

/***/ }),

/***/ "./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-chart.service.js":
/*!*****************************************************************************************************************!*\
  !*** ./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-chart.service.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Pie chart for Reservation Utilization Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.reservationUtilizationDetailedActualChart', []).factory('reservationUtilizationDetailedActualChart', ["$translate", "$filter", "helper", function ($translate, $filter, helper) {
  return function (data) {
    var _context, _context2;

    var totalTime = helper.round(data.units.reduce(function (acc, unit) {
      return acc + unit.total;
    }, 0));
    var chart = {
      type: 'pie',
      data: {
        labels: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = data.units).call(_context, function (u) {
          return u.name;
        }),
        datasets: [{
          data: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = data.units).call(_context2, function (u) {
            return u.total;
          })
        }]
      },
      options: {
        tooltips: {
          callbacks: {
            label: function label(tooltipItem, data) {
              var _context3, _context4;

              var label = data.labels[tooltipItem.index];
              var hours = data.datasets[0].data[tooltipItem.index];
              var percents = helper.round(hours / totalTime * 100, 1);
              return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = "".concat(label, ": ")).call(_context4, $filter('hours')(hours), " (")).call(_context3, percents, "%)");
            }
          }
        },
        legend: {
          display: true,
          position: 'right'
        },
        title: {
          display: true,
          text: $translate.instant('RESERVATION_UTILIZATION_REPORT.CHART.TOTAL_TIME').toUpperCase() + ': ' + $filter('hours')(totalTime)
        }
      }
    };
    return chart;
  };
}]));

/***/ }),

/***/ "./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-columns.service.js":
/*!*******************************************************************************************************************!*\
  !*** ./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-columns.service.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Columns for Reservation Utilization Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationUtilizationDetailedActualColumns', []).factory('reservationUtilizationDetailedActualColumns', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var cols = [{
    dataKey: 'name',
    _title: 'RESERVATION_UNITS.UNIT'
  }, {
    dataKey: '[period]',
    _title: '',
    styles: {
      halign: 'center'
    }
  }, {
    dataKey: 'totals',
    _title: 'REPORTS.TOTALS',
    styles: {
      halign: 'center'
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-report.service.js":
/*!******************************************************************************************************************!*\
  !*** ./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-report.service.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var _reservation_utilization_detailed_actual_aggregate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reservation-utilization-detailed-actual-aggregate.service */ "./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-aggregate.service.js");







/**
 * Data to report converter for Detailed Actual mode of Reservation Utilization Report
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.reservationUtilizationDetailedActualReport', [shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, _reservation_utilization_detailed_actual_aggregate_service__WEBPACK_IMPORTED_MODULE_6__["default"].name]).factory('reservationUtilizationDetailedActualReport', ["$filter", "helper", "reportStyles", "reservationUtilizationDetailedActualColumns", function ($filter, helper, reportStyles, reservationUtilizationDetailedActualColumns) {
  return dataToReport;
  /**
   *
   * @param params
   * @param data - aggregated via reservationUtilizationDetailedActualAggregate
   * @returns {{columns: Array, styles: Array, rows: Array}}
   */

  function dataToReport(params, data) {
    var _context, _context2, _context3;

    var columns = reservationUtilizationDetailedActualColumns;
    var report = {
      columns: [],
      rows: [],
      styles: []
    };

    var perIdx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default()(columns).call(columns, function (col) {
      return col.dataKey === '[period]';
    });

    if (perIdx < 0) throw new Error('[period] is not found in report columns');
    report.columns = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = data.periods).call(_context, function (per) {
      return angular.extend({}, columns[perIdx], {
        dataKey: $filter('date')(per.fromDate, 'yyyyMMdd'),
        title: per.title
      });
    });
    report.columns = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(columns).call(columns, 0, perIdx) // before [period]
    ).call(_context3, report.columns)).call(_context2, _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(columns).call(columns, perIdx + 1)); // after [period]

    data.units.forEach(function (unit) {
      var _context4, _context5;

      report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context5 = [unit.name]).call(_context5, unit.totals)).call(_context4, unit.total));
      report.styles.push(reportStyles.h2);
      unit.groups.forEach(function (group, idx) {
        var _context6, _context7;

        report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context6 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context7 = [group.name]).call(_context7, group.totals)).call(_context6, group.total));
        report.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      });
    });
    return report;
  }
}]));

/***/ }),

/***/ "./bundles/reports/reservation-utilization-report/reservation-utilization-report.controller.js":
/*!*****************************************************************************************************!*\
  !*** ./bundles/reports/reservation-utilization-report/reservation-utilization-report.controller.js ***!
  \*****************************************************************************************************/
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
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_charts_chart_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/charts/chart.directive */ "./shared/charts/chart.directive.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");
/* harmony import */ var shared_reports_directives_report_by_period_report_by_period_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/reports/directives/report-by-period/report-by-period.directive */ "./shared/reports/directives/report-by-period/report-by-period.directive.js");
/* harmony import */ var _reservation_utilization_detailed_actual_aggregate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reservation-utilization-detailed-actual-aggregate.service */ "./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-aggregate.service.js");
/* harmony import */ var _reservation_utilization_detailed_actual_report_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reservation-utilization-detailed-actual-report.service */ "./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-report.service.js");
/* harmony import */ var _reservation_utilization_actual_expected_aggregate_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reservation-utilization-actual-expected-aggregate.service */ "./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-aggregate.service.js");
/* harmony import */ var _reservation_utilization_actual_expected_report_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reservation-utilization-actual-expected-report.service */ "./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-report.service.js");
/* harmony import */ var _reservation_utilization_actual_expected_chart_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reservation-utilization-actual-expected-chart.service */ "./bundles/reports/reservation-utilization-report/reservation-utilization-actual-expected-chart.service.js");
/* harmony import */ var _reservation_utilization_detailed_actual_chart_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reservation-utilization-detailed-actual-chart.service */ "./bundles/reports/reservation-utilization-report/reservation-utilization-detailed-actual-chart.service.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }













/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationUtilizationReportCtrl', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_charts_chart_directive__WEBPACK_IMPORTED_MODULE_9__["default"].name, 'fileSaver', shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_10__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_reports_directives_report_by_period_report_by_period_directive__WEBPACK_IMPORTED_MODULE_12__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reports.reportDates', 'deskworks.ReservationUtilizationReport', 'deskworks.reservationCategory.service', _reservation_utilization_detailed_actual_aggregate_service__WEBPACK_IMPORTED_MODULE_13__["default"].name, _reservation_utilization_detailed_actual_report_service__WEBPACK_IMPORTED_MODULE_14__["default"].name, _reservation_utilization_actual_expected_report_service__WEBPACK_IMPORTED_MODULE_16__["default"].name, _reservation_utilization_actual_expected_aggregate_service__WEBPACK_IMPORTED_MODULE_15__["default"].name, _reservation_utilization_actual_expected_chart_service__WEBPACK_IMPORTED_MODULE_17__["default"].name, _reservation_utilization_detailed_actual_chart_service__WEBPACK_IMPORTED_MODULE_18__["default"].name]).controller('ReservationUtilizationReportCtrl', ["$scope", "$q", "$location", "$timeout", "$translate", "$filter", "helper", "dwAlerts", "debounce", "state", "fileSaver", "reportStyles", "ReportBuilder", "reportHelper", "ReservationUtilizationReport", "reservationUtilizationDetailedActualAggregate", "reservationUtilizationDetailedActualReport", "reservationUtilizationDetailedActualChart", "reservationCategoryService", "reservationUtilizationActualExpectedReport", "reservationUtilizationActualExpectedAggregate", "reservationUtilizationActualExpectedChart", function ($scope, $q, $location, $timeout, $translate, $filter, helper, dwAlerts, debounce, state, fileSaver, reportStyles, ReportBuilder, reportHelper, ReservationUtilizationReport, reservationUtilizationDetailedActualAggregate, reservationUtilizationDetailedActualReport, reservationUtilizationDetailedActualChart, reservationCategoryService, reservationUtilizationActualExpectedReport, reservationUtilizationActualExpectedAggregate, reservationUtilizationActualExpectedChart) {
  var $ctrl = this;
  var paramsChanged = reportHelper.paramsChanged,
      loadResources = reportHelper.loadResources;
  $ctrl.config = {
    reportName: $translate.instant('RESERVATION_UTILIZATION_REPORT.REPORT_NAME')
  };
  $ctrl.params = {
    fromDate: state.getParam('fromDate') ? $filter('toDate')(state.getParam('fromDate')) : moment().subtract(1, 'month').startOf('month'),
    toDate: state.getParam('toDate') ? $filter('toDate')(state.getParam('toDate')) : moment().subtract(1, 'month').endOf('month'),
    mode: state.getParam('mode') || 'detailedActual'
  };
  $ctrl.resources = null;
  $ctrl.data = null;
  state.setPageTitle($ctrl.config.reportName);
  /**
   * Watch report params and generate new report
   */

  $scope.$watch('$ctrl.params', debounce(function (np, op) {
    state.setParam('mode', $ctrl.params.mode);
    $ctrl.pdf = null;
    $ctrl.report = null;
    if (helper.pointFirstInvalid('#reservationUtilizationReport')) return;
    if (!$ctrl.params.fromDate || !$ctrl.params.toDate) return;
    if (paramsChanged(np, op, ['fromDate', 'toDate', 'centerId'])) $ctrl.data = null;
    $q.all({
      resources: $ctrl.resources || loadResources(function () {
        return {
          categories: reservationCategoryService.query(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation categories.');
          })
        };
      }),
      data: $ctrl.data || ReservationUtilizationReport.query($ctrl.params).catch(function (err) {
        return dwAlerts.error(err, 'Failed to query report.');
      })
    }).then(function (result) {
      $ctrl.resources = result.resources;
      $ctrl.data = result.data;
    }).then(function () {
      if ($ctrl.params.mode === 'actualExpected') {
        var data = reservationUtilizationActualExpectedAggregate($ctrl.data, $ctrl.resources.categories);
        $ctrl.report = reservationUtilizationActualExpectedReport($ctrl.params, data);
        $ctrl.chart = reservationUtilizationActualExpectedChart(data);
      } else {
        var _data = reservationUtilizationDetailedActualAggregate($ctrl.params, $ctrl.data);

        $ctrl.report = reservationUtilizationDetailedActualReport($ctrl.params, _data);
        $ctrl.chart = reservationUtilizationDetailedActualChart(_data);
      }

      var doc = reportHelper.buildPdf({
        config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
        report: $ctrl.report,
        resources: $ctrl.resources
      });
      $ctrl.pdf = doc.output('blob');
    });
  }, 100), true);
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
  };
  /**
   * Generate and download CSV report
   */


  $ctrl.downloadCsv = function () {
    if (!$ctrl.pdf) return;
    var fileName = reportHelper.getReportFileName({
      extension: 'csv',
      config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
      resources: $ctrl.resources
    });
    var csv = reportHelper.buildCsv({
      report: $ctrl.report
    });
    reportHelper.download({
      blob: csv,
      fileName: fileName
    });
  };
}]));

/***/ }),

/***/ "./bundles/reports/reservation-utilization-report/reservation-utilization-report.service.js":
/*!**************************************************************************************************!*\
  !*** ./bundles/reports/reservation-utilization-report/reservation-utilization-report.service.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * ReservationUtilizationReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationUtilizationReport', ['ngResource', 'datesDeserializer', 'deskworks.config']).factory('ReservationUtilizationReport', ["$resource", "$filter", "datesDeserializer", "deskworksConfig", function ($resource, $filter, datesDeserializer, deskworksConfig) {
  var desDates = datesDeserializer(['groups.daily.date']);
  var url = deskworksConfig.getApiAbsUrl('/reservation-utilization-report');
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
        centerId: params.centerId || null,
        fromDate: $filter('date')(params.fromDate, 'yyyy-MM-dd'),
        toDate: $filter('date')(params.toDate, 'yyyy-MM-dd')
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/reports/reservation-utilization-report/reservation-utilization-report.tpl.html":
/*!************************************************************************************************!*\
  !*** ./bundles/reports/reservation-utilization-report/reservation-utilization-report.tpl.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"reservationUtilizationReport\" class=\"gutter-v\"> <form> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <report-dates model=\"$ctrl.params\"></report-dates> </div> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <div class=\"gutter-v\"> <report-options model=\"$ctrl.params\" all-centers=\"false\"> <ff-row> <ff-label flex=\"0 0 100px\"><span translate=\"RESERVATION_UTILIZATION_REPORT.MODE\"></span></ff-label> <ff-static> <div class=\"ff-grid gutter-h-half\"> <label flex=\"0 0 auto\"> <ff-radio ff-model=\"$ctrl.params.mode\" ff-value=\"'detailedActual'\"> <span translate=\"RESERVATION_UTILIZATION_REPORT.MODE.DETAILED_ACTUAL\"></span> </ff-radio> </label> <label flex=\"0 0 auto\"> <ff-radio ff-model=\"$ctrl.params.mode\" ff-value=\"'actualExpected'\"> <span translate=\"RESERVATION_UTILIZATION_REPORT.MODE.ACTUAL_EXPECTED\"></span> </ff-radio> </label> </div> </ff-static> </ff-row> <report-by-period model=\"$ctrl.params.byPeriod\" ng-if=\"$ctrl.params.mode === 'detailedActual'\"></report-by-period> </report-options> </div> </div> <ff-panel flex=\"auto\"> <ff-panel-header><span translate=\"RESERVATION_UTILIZATION_REPORT.CHART.HEADER\"></span></ff-panel-header> <div ff-dim=\"!$ctrl.pdf\" ng-init=\"$ctl = $ctrl\"> <chart config=\"$ctrl.chart\" ng-style=\"{ 'max-height': ($ctl.chart && $ctl.chart.type !== 'pie' ? 'none' : null), 'height': ($ctl.chart && $ctl.chart.type !== 'pie' ? $ctl.chart.data.labels.length * 30 + 40 + 'px' : null) }\"></chart> </div> </ff-panel> <ff-btn-group> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </div> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/revenue-forecast-report/revenue-forecast-chart.service.js":
/*!***********************************************************************************!*\
  !*** ./bundles/reports/revenue-forecast-report/revenue-forecast-chart.service.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Chart for Revenue Forecast Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.revenueForecastChart', []).factory('revenueForecastChart', ["$translate", "$filter", "helper", "whitelabel", function ($translate, $filter, helper, whitelabel) {
  return function (data) {
    var _context, _context2, _context3;

    var labels = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = data[0].totals).call(_context, function (total) {
      return $filter('date')($filter('toDate')(total.month + '-01'), 'MMM yyyy');
    });

    var committed = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = data[0].totals).call(_context2, function (total, idx) {
      return data.reduce(function (amount, user) {
        return amount + user.totals[idx].committedAmount;
      }, 0);
    });

    var atRisk = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = data[0].totals).call(_context3, function (total, idx) {
      return data.reduce(function (amount, user) {
        return amount + user.totals[idx].riskAmount;
      }, 0);
    });

    var chart = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          name: $translate.instant('REVENUE_FORECAST_REPORT.COMMITTED_REVENUE'),
          data: committed,
          backgroundColor: whitelabel.getProperty('--brand-color'),
          maxBarThickness: 50
        }, {
          name: $translate.instant('REVENUE_FORECAST_REPORT.AT_RISK_REVENUE'),
          data: atRisk,
          backgroundColor: whitelabel.getProperty('--danger-color'),
          maxBarThickness: 50
        }]
      },
      options: {
        tooltips: {
          mode: 'index',
          intersect: true,
          displayColors: true,
          callbacks: {
            label: function label(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              return dataset.name + ': ' + $filter('ncurrency')(dataset.data[tooltipItem.index]);
            }
          }
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              min: 0,
              callback: function callback(value) {
                return $filter('ncurrency')(value, undefined, 0);
              }
            }
          }]
        }
      }
    };
    return chart;
  };
}]));

/***/ }),

/***/ "./bundles/reports/revenue-forecast-report/revenue-forecast-data.service.js":
/*!**********************************************************************************!*\
  !*** ./bundles/reports/revenue-forecast-report/revenue-forecast-data.service.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var _revenue_forecast_report_columns_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./revenue-forecast-report-columns.service */ "./bundles/reports/revenue-forecast-report/revenue-forecast-report-columns.service.js");








/**
 * Data to report converter for Revenue Forecast Report
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.revenueForecastData', [shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_6__["default"].name, _revenue_forecast_report_columns_service__WEBPACK_IMPORTED_MODULE_7__["default"].name]).factory('revenueForecastData', ["$filter", "$translate", "helper", "reportStyles", "reportHelper", "revenueForecastReportColumns", function ($filter, $translate, helper, reportStyles, reportHelper, revenueForecastReportColumns) {
  return dataToReport;
  /**
   *
   * @param params
   * @param data - aggregated via reservationUtilizationActualExpectedAggregate
   * @returns {{columns: Array, styles: Array, rows: Array}}
   */

  function dataToReport(params, data) {
    var _context, _context2, _context3, _context4, _context5;

    var report = {
      columns: _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(revenueForecastReportColumns).call(revenueForecastReportColumns),
      rows: [],
      styles: []
    };
    if (!data || !data.length) return report;

    var committed = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = data[0].totals).call(_context, function (total, idx) {
      var title = idx ? $filter('date')($filter('toDate')(total.month + '-01'), 'MMM\nyyyy') : $translate.instant('REVENUE_FORECAST_REPORT.COLUMNS.CURRENT_MONTH');
      report.columns.push({
        dataKey: total.month,
        title: title,
        styles: {
          halign: 'right',
          cellWidth: 'wrap'
        }
      }); // add column for month

      return data.reduce(function (amount, user) {
        return amount + user.totals[idx].committedAmount;
      }, 0);
    });

    var risk = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = data[0].totals).call(_context2, function (total, idx) {
      return data.reduce(function (amount, user) {
        return amount + user.totals[idx].riskAmount;
      }, 0);
    });

    var title = $translate.instant('REVENUE_FORECAST_REPORT.COMMITTED_REVENUE');
    report.styles.push(reportStyles.h3);
    report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = [false, title]).call(_context3, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(committed).call(committed, function (amount) {
      return $filter('ncurrency')(amount);
    })));
    title = $translate.instant('REVENUE_FORECAST_REPORT.AT_RISK_REVENUE');
    report.styles.push(reportStyles.h3);
    report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = [false, title]).call(_context4, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(risk).call(risk, function (amount) {
      return $filter('ncurrency')(amount);
    })));
    title = $translate.instant('REVENUE_FORECAST_REPORT.PERCENT_OF_CURRENT_MONTH');
    report.styles.push(reportStyles.h3);
    report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context5 = [false, title]).call(_context5, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(committed).call(committed, function (amount) {
      return $filter('number')(amount / committed[0] * 100, 2) + '%';
    })));

    _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_4___default()(reportHelper).call(reportHelper, data, params.orderBy).forEach(function (item, idx) {
      var _context6, _context7;

      report.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context6 = [item.userCompany, item.userName]).call(_context6, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context7 = item.totals).call(_context7, function (total) {
        return $filter('ncurrency')(total.committedAmount);
      })));
    });

    return report;
  }
}]));

/***/ }),

/***/ "./bundles/reports/revenue-forecast-report/revenue-forecast-report-columns.service.js":
/*!********************************************************************************************!*\
  !*** ./bundles/reports/revenue-forecast-report/revenue-forecast-report-columns.service.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Columns for Revenue Forecast Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.revenueForecastReportColumns', []).factory('revenueForecastReportColumns', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var cols = [{
    dataKey: 'userCompany',
    _title: 'REVENUE_FORECAST_REPORT.COLUMNS.COMPANY',
    include: true
  }, {
    dataKey: 'userName',
    _title: 'REVENUE_FORECAST_REPORT.COLUMNS.NAME',
    include: true,
    defaultOrder: true
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/revenue-forecast-report/revenue-forecast-report.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/reports/revenue-forecast-report/revenue-forecast-report.controller.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/toConsumableArray */ "../node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_charts_chart_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/charts/chart.directive */ "./shared/charts/chart.directive.js");
/* harmony import */ var shared_charts_system_colors_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! shared/charts/system-colors.service */ "./shared/charts/system-colors.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");
/* harmony import */ var _revenue_forecast_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./revenue-forecast-data.service */ "./bundles/reports/revenue-forecast-report/revenue-forecast-data.service.js");
/* harmony import */ var _revenue_forecast_chart_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./revenue-forecast-chart.service */ "./bundles/reports/revenue-forecast-report/revenue-forecast-chart.service.js");




function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_7___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_7___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_10___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_10___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_9___default()(source, key)); }); } } return target; }

















/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.RevenueForecastReportCtrl', ['debounce', 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reportOrderBy', 'deskworks.RevenueForecastReport', 'deskworks.revenueForecastReportColumns', shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_12__["default"].name, shared_charts_chart_directive__WEBPACK_IMPORTED_MODULE_13__["default"].name, shared_charts_system_colors_service__WEBPACK_IMPORTED_MODULE_14__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_15__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_16__["default"].name, _revenue_forecast_data_service__WEBPACK_IMPORTED_MODULE_17__["default"].name, _revenue_forecast_chart_service__WEBPACK_IMPORTED_MODULE_18__["default"].name]).controller('RevenueForecastReportCtrl', ["$scope", "$timeout", "$filter", "$translate", "$q", "systemColors", "debounce", "state", "helper", "reportStyles", "reportHelper", "dwAlerts", "RevenueForecastReport", "revenueForecastReportColumns", "revenueForecastData", "revenueForecastChart", function ($scope, $timeout, $filter, $translate, $q, systemColors, debounce, state, helper, reportStyles, reportHelper, dwAlerts, RevenueForecastReport, revenueForecastReportColumns, revenueForecastData, revenueForecastChart) {
  var _context, _context2, _context3;

  var $ctrl = this;
  var paramsChanged = reportHelper.paramsChanged,
      loadResources = reportHelper.loadResources;
  $ctrl.config = {
    reportName: $translate.instant('REVENUE_FORECAST_REPORT.REPORT_NAME')
  };
  $ctrl.params = {
    monthCount: state.getParam('monthCount') ? +state.getParam('monthCount') : 6,
    orderBy: state.getParam('orderBy') || 'userName'
  };
  $ctrl.resources = null;
  $ctrl.data = null;
  $ctrl.columns = revenueForecastReportColumns;
  state.setPageTitle($ctrl.config.reportName);
  $ctrl.optsMonthCount = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_5___default()(_context3 = Array(13)).call(_context3))).call(_context2, 1)).call(_context, function (idx) {
    return {
      id: idx,
      name: $filter('months')(idx)
    };
  });
  /**
   * Watch report params and generate new report
   */

  $scope.$watch('$ctrl.params', debounce(function (np, op) {
    state.setParam('monthCount', $ctrl.params.monthCount);
    $ctrl.pdf = null;
    $ctrl.report = null;
    if (helper.pointFirstInvalid('#revenueForecastReport')) return;
    if (paramsChanged(np, op, ['monthCount', 'centerId'])) $ctrl.data = null;
    $q.all({
      resources: $ctrl.resources || loadResources(),
      data: $ctrl.data || RevenueForecastReport.query($ctrl.params).catch(function (err) {
        return dwAlerts.error(err, 'Failed to query report.');
      })
    }).then(function (result) {
      $ctrl.resources = result.resources;
      $ctrl.data = result.data;
    }).then(function () {
      $ctrl.report = revenueForecastData($ctrl.params, $ctrl.data);
      var doc = reportHelper.buildPdf({
        config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
        report: $ctrl.report,
        resources: $ctrl.resources
      });
      $ctrl.pdf = doc.output('blob');
      $ctrl.chart = revenueForecastChart($ctrl.data);
    });
  }, 100), true);
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
  };
  /**
   * Generate and download CSV report
   */


  $ctrl.downloadCsv = function () {
    if (!$ctrl.pdf) return;
    var fileName = reportHelper.getReportFileName({
      extension: 'csv',
      config: _objectSpread(_objectSpread({}, $ctrl.config), $ctrl.params),
      resources: $ctrl.resources
    });
    var csv = reportHelper.buildCsv({
      report: $ctrl.report
    });
    reportHelper.download({
      blob: csv,
      fileName: fileName
    });
  };
}]));

/***/ }),

/***/ "./bundles/reports/revenue-forecast-report/revenue-forecast-report.service.js":
/*!************************************************************************************!*\
  !*** ./bundles/reports/revenue-forecast-report/revenue-forecast-report.service.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * RevenueForecastReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.RevenueForecastReport', ['ngResource', 'deskworks.config']).factory('RevenueForecastReport', ["$resource", "$timeout", "deskworksConfig", function ($resource, $timeout, deskworksConfig) {
  var url = deskworksConfig.getApiAbsUrl('/reports/revenue-forecast');
  var res = $resource(url, {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  return {
    query: function query(params) {
      return res.query({
        centerId: params.centerId,
        monthCount: params.monthCount
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/reports/revenue-forecast-report/revenue-forecast-report.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/reports/revenue-forecast-report/revenue-forecast-report.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"revenueForecastReport\" class=\"gutter-v\"> <form> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <ff-panel flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <ff-panel-header><span translate=\"REVENUE_FORECAST_REPORT.BAR_CHART.HEADER\"></span></ff-panel-header> <div ff-dim=\"!$ctrl.pdf\"> <chart config=\"$ctrl.chart\" style=\"max-height:228px\"></chart> </div> </ff-panel> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <report-options model=\"$ctrl.params\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><span translate=\"REVENUE_FORECAST_REPORT.PERIOD\"></span></ff-label> <ff-select ff-model=\"$ctrl.params.monthCount\" ff-required=\"true\" ff-options=\"opt.id as opt.name for opt in $ctrl.optsMonthCount\" ff-validate-alert=\"{{'REVENUE_FORECAST_REPORT.PERIOD' | translate}}\"></ff-select> </label> <report-order-by model=\"$ctrl.params.orderBy\" report-columns=\"$ctrl.columns\"></report-order-by> </report-options> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/reports/security-deposit-report/security-deposit-report-columns.service.js":
/*!********************************************************************************************!*\
  !*** ./bundles/reports/security-deposit-report/security-deposit-report-columns.service.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Security Deposit Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.securityDepositReportColumns', []).factory('securityDepositReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'userName',
    _title: 'SECURITY_DEPOSIT_REPORT.COLUMNS.USER_NAME',
    include: true,
    styles: {
      minCellWidth: 120
    }
  }, {
    dataKey: 'userCompany',
    _title: 'SECURITY_DEPOSIT_REPORT.COLUMNS.COMPANY',
    include: true,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'orderId',
    _title: 'SECURITY_DEPOSIT_REPORT.COLUMNS.ORDER_ID',
    include: false,
    styles: {
      halign: 'right'
    }
  }, {
    dataKey: 'date',
    _title: 'SECURITY_DEPOSIT_REPORT.COLUMNS.DATE',
    include: false,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('date')(v, 'mediumDate');
    },
    csv: function csv(v) {
      return $filter('date')(v, 'shortDate');
    }
  }, {
    dataKey: 'amount',
    _title: 'SECURITY_DEPOSIT_REPORT.COLUMNS.AMOUNT',
    include: false,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }, {
    dataKey: 'balance',
    _title: 'SECURITY_DEPOSIT_REPORT.COLUMNS.BALANCE',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('ncurrency')(v);
    },
    csv: function csv(v) {
      return $filter('ncurrency')(v);
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    cols.forEach(function (col) {
      col.title = $translate.instant(col._title);
    });
  }

  return cols;
}]));

/***/ }),

/***/ "./bundles/reports/security-deposit-report/security-deposit-report.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/reports/security-deposit-report/security-deposit-report.controller.js ***!
  \***************************************************************************************/
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
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");














/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.securityDepositReport', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_10__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_12__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_13__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reports.reportDates', 'deskworks.reports.reportOwnerRegion', 'deskworks.reports.securityDepositReport.service', 'deskworks.reports.securityDepositReportColumns']).controller('SecurityDepositReportCtrl', ["$scope", "$timeout", "$filter", "$translate", "$location", "state", "helper", "reportHelper", "reportStyles", "ReportBuilder", "SecurityDepositReport", "securityDepositReportColumns", function ($scope, $timeout, $filter, $translate, $location, state, helper, reportHelper, reportStyles, ReportBuilder, SecurityDepositReport, securityDepositReportColumns) {
  var _context;

  var $ctrl = this;
  $ctrl.config = {
    reportName: $translate.instant('SECURITY_DEPOSIT_REPORT.REPORT_NAME'),
    reportOptions: {},
    reportOwnerRegion: {},
    reportColumns: securityDepositReportColumns,
    toDate: moment(),
    showDetails: false,
    getReportData: function getReportData() {
      return SecurityDepositReport.get({
        centerId: $ctrl.config.reportOptions.centerId,
        ownerId: $ctrl.config.reportOwnerRegion.ownerId,
        regionId: $ctrl.config.reportOwnerRegion.regionId,
        toDate: $filter('date')($ctrl.config.toDate, 'yyyy-MM-dd')
      }).$promise;
    }
  };
  $ctrl.reportColumnsFiltered = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(_context = $ctrl.config.reportColumns).call(_context, function (item) {
    return item.include;
  });
  state.setPageTitle($ctrl.config.reportName);
  /**
   * Map showDetails to URL search param
   */

  $scope.$watch(function (_) {
    return $location.search().showDetails;
  }, function (val) {
    $ctrl.config.showDetails = val;
  });
  $scope.$watch('$ctrl.config.showDetails', function (val) {
    $location.search('showDetails', val || null).replace();
  });
  watchToDate();
  $ctrl.reportBuilder = new ReportBuilder($ctrl.config);

  $ctrl.getToday = function () {
    return moment();
  };
  /**
   * Watch for data report depends on (center, columns, order) and generate new report, watch for 'toDate' url param
   */


  var debounceTimeout;
  $scope.$watch(function () {
    return {
      reportOptions: $ctrl.config.reportOptions,
      reportOwnerRegion: $ctrl.config.reportOwnerRegion,
      toDate: $ctrl.config.toDate,
      orderBy: $ctrl.config.orderBy,
      showDetails: $ctrl.config.showDetails
    };
  }, function (newVal, oldVal) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function (_) {
      if (moment.isMoment(newVal.toDate) && newVal.toDate.isAfter(moment(), 'day')) return;
      $ctrl.pdf = null;
      if (angular.isUndefined($ctrl.config.reportOptions.centerId)) return;
      var newDate = newVal.toDate,
          oldDate = oldVal.toDate;
      if (moment.isMoment(newDate) && (!moment.isMoment(oldDate) || !newDate.isSame(oldDate))) $ctrl.config.reportData = null;
      $ctrl.reportBuilder.buildPdf(reportDataCallback).then(function (blob) {
        $ctrl.pdf = blob;
      });
    }, 100);
  }, true);
  /**
   * Download generated PDF report
   */

  $ctrl.downloadPdf = function () {
    if (!$ctrl.pdf) return;
    reportHelper.download({
      blob: $ctrl.pdf,
      fileName: $ctrl.reportBuilder.getReportFileName('pdf')
    });
  };
  /**
  * Generate and download CSV report
  */


  $ctrl.downloadCsv = function () {
    if (!$ctrl.pdf) return;
    reportHelper.download({
      blob: $ctrl.reportBuilder.buildCsv(reportDataCallback),
      fileName: $ctrl.reportBuilder.getReportFileName('csv')
    });
  };
  /**
   * Report data callback for ReportBuilder, returns report data matrix and columns
   */


  function reportDataCallback(config) {
    var _context2, _context4;

    var result = {
      columns: config.showDetails ? config.reportColumns : $ctrl.reportColumnsFiltered,
      rows: [],
      styles: []
    };

    var data = _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_5___default()(reportHelper).call(reportHelper, config.reportData.deposits, config.orderBy);

    var idx,
        arr = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(_context2 = Array.apply(null, new Array(result.columns.length))).call(_context2, function (_) {
      return false;
    });

    data.forEach(function (deposit, index) {
      var _context3;

      result.styles.push(config.showDetails ? reportStyles.h2 : index % 2 ? null : reportStyles.rowOdd);
      result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(_context3 = result.columns).call(_context3, function (col) {
        return ['orderId', 'date', 'amount'].indexOf(col.dataKey) >= 0 ? false : deposit[col.dataKey];
      }));

      if (config.showDetails) {
        deposit.details.forEach(function (detail, index) {
          result.styles.push(index % 2 ? null : reportStyles.rowOdd);
          result.rows.push([false, false, detail.orderId, detail.date, detail.amount, false]);
        });
      }
    });
    result.rows.push(arr);
    result.styles.push(null);
    idx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_7___default()(_context4 = result.columns).call(_context4, function (c) {
      return c.dataKey === 'balance';
    });

    if (idx >= 0) {
      var _context5, _context6;

      result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_8___default()(_context6 = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_9___default()(arr).call(arr, 0, Math.max(idx - 1, 0))).call(_context6, idx > 0 ? [{
        content: $translate.instant('SECURITY_DEPOSIT_REPORT.TOTALS.TOTAL') + ':',
        styles: {
          halign: 'right'
        }
      }, config.reportData.total] : [config.reportData.total])).call(_context5, _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_9___default()(arr).call(arr, 0, arr.length - idx - 1)));
      result.styles.push(reportStyles.h3);
    }

    return result;
  }
  /**
   * Map toDate to URL search param
   */


  function watchToDate() {
    $scope.$watch(function () {
      return $location.search().toDate;
    }, function (val) {
      var date = $filter('toDate')(val);
      $ctrl.config.toDate = moment.isMoment(date) && !$ctrl.config.toDate.isSame(date) ? date : $ctrl.config.toDate;
    });
    $scope.$watch('$ctrl.config.toDate', function (val) {
      if (!moment.isMoment(val)) return;
      $location.search('toDate', $filter('date')(val, 'yyyy-MM-dd')).replace();
    });
  }
}]));

/***/ }),

/***/ "./bundles/reports/security-deposit-report/security-deposit-report.service.js":
/*!************************************************************************************!*\
  !*** ./bundles/reports/security-deposit-report/security-deposit-report.service.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * SecurityDepositReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.securityDepositReport.service', ['ngResource', 'datesDeserializer', 'deserializeNumbers', 'deskworks.config']).factory('SecurityDepositReport', ["$resource", "datesDeserializer", "deserializeNumbers", "deskworksConfig", function ($resource, datesDeserializer, deserializeNumbers, deskworksConfig) {
  var desDates = datesDeserializer(['deposits.details.date']);
  var numbersDeserializer = deserializeNumbers(['deposits.balance', 'deposits.details.amount']);
  var url = deskworksConfig.getApiAbsUrl('/reports/security-deposit');
  return $resource(url, {
    centerId: '@centerId'
  }, {
    get: {
      method: 'GET',
      transformResponse: [angular.fromJson, desDates, numbersDeserializer]
    }
  });
}]));

/***/ }),

/***/ "./bundles/reports/security-deposit-report/security-deposit-report.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/reports/security-deposit-report/security-deposit-report.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"securityDepositReport\" class=\"gutter-v\"> <form name=\"formSecurityDepositReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"></div> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <div class=\"gutter-v\"> <report-options model=\"$ctrl.config.reportOptions\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\" ff-required=\"true\"><span translate=\"REPORTS.PERIOD.TO_DATE\"></span></ff-label> <ff-date flex=\"0 0 124px\" name=\"toDate\" ff-model=\"$ctrl.config.toDate\" ff-date-order=\"{ early: $ctrl.config.toDate, late: $ctrl.getToday() }\" ff-validate-alert=\"{ field: 'Selected date', late: 'or equal to today' }\"></ff-date> <span class=\"ff-label\"></span> </label> <report-order-by model=\"$ctrl.config.orderBy\" report-columns=\"$ctrl.reportColumnsFiltered\"></report-order-by> <ff-row> <ff-label flex=\"0 0 100px\"><span translate=\"SECURITY_DEPOSIT_REPORT.SHOW_DETAILS\"></span></ff-label> <ff-static><ff-checkbox ff-model=\"$ctrl.config.showDetails\"></ff-checkbox></ff-static> </ff-row> </report-options> <report-owner-region model=\"$ctrl.config.reportOwnerRegion\" report-data=\"$ctrl.config.reportData\"></report-owner-region> </div> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=reports~._bundles_reports_m.js.map?_rev=c622e9d7aebafd64a154