(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports~._bundles_reports_s"],{

/***/ "./bundles/reports/services/b64.service.js":
/*!*************************************************!*\
  !*** ./bundles/reports/services/b64.service.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "../node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "../node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "../node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "../node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "../node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "../node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "../node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "../node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "../node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "../node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "../node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "../node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "../node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "../node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "../node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "../node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "../node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "../node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "../node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "../node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "../node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "../node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "../node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "../node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_25__);



























/**
 * b64 service - b64.js implementation (https://github.com/beatgammit/base64-js)
 * for base64 encoding/decoding binary data (standard atob/btoa only for strings)
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('b64', []).factory('b64', ["$window", function ($window) {
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

  function init() {
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }

    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;
  }

  init();
  return {
    toByteArray: toByteArray,
    fromByteArray: fromByteArray
  };

  function toByteArray(b64) {
    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;

    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    } // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice


    placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0; // base64 is 4/3 + up to two characters of the original data

    arr = new Arr(len * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars

    l = placeHolders > 0 ? len - 4 : len;
    var L = 0;

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
      arr[L++] = tmp >> 16 & 0xFF;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    if (placeHolders === 2) {
      tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
      arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
      tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    return arr;
  }

  function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
  }

  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];

    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
      output.push(tripletToBase64(tmp));
    }

    return output.join('');
  }

  function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

    var output = '';
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3
    // go through the array every three bytes, we'll deal with trailing stuff later

    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    } // pad the end with zeros, but make sure to not forget the extra bytes


    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup[tmp >> 2];
      output += lookup[tmp << 4 & 0x3F];
      output += '==';
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1];
      output += lookup[tmp >> 10];
      output += lookup[tmp >> 4 & 0x3F];
      output += lookup[tmp << 2 & 0x3F];
      output += '=';
    }

    parts.push(output);
    return parts.join('');
  }
}]));

/***/ }),

/***/ "./bundles/reports/services/report-builder.service.js":
/*!************************************************************!*\
  !*** ./bundles/reports/services/report-builder.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_reports_services_report_sort_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/reports/services/report-sort.service */ "./shared/reports/services/report-sort.service.js");
/* harmony import */ var shared_reports_services_csv_make_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/services/csv-make.service */ "./shared/reports/services/csv-make.service.js");
/* harmony import */ var shared_reports_services_jspdf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/services/jspdf.service */ "./shared/reports/services/jspdf.service.js");
/* harmony import */ var shared_reports_services_logo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/reports/services/logo.service */ "./shared/reports/services/logo.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_services_report_header_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/reports/services/report-header.service */ "./shared/reports/services/report-header.service.js");
/* harmony import */ var shared_reports_services_report_footer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/reports/services/report-footer.service */ "./shared/reports/services/report-footer.service.js");











/**
 * Report generator service - creates report configuration from report data to create PDF via pdfMake
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.ReportBuilder', [shared_reports_services_report_sort_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_reports_services_csv_make_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_reports_services_jspdf_service__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_reports_services_logo_service__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_reports_services_report_header_service__WEBPACK_IMPORTED_MODULE_9__["default"].name, shared_reports_services_report_footer_service__WEBPACK_IMPORTED_MODULE_10__["default"].name, 'deskworks.center.service']).factory('ReportBuilder', ["$rootScope", "$q", "$timeout", "$window", "$filter", "$http", "state", "logo", "jsPDF", "csvMake", "centerService", "reportStyles", "reportHeader", "reportFooter", "reportSort", function ($rootScope, $q, $timeout, $window, $filter, $http, state, logo, jsPDF, csvMake, centerService, reportStyles, reportHeader, reportFooter, reportSort) {
  return ReportBuilder;
  /**
   * Report builder class.
   * @constructor
   */

  function ReportBuilder(config) {
    var self = this;
    /**
     * Watch for center change and invalidate config.reportData and config.center cache
     */

    $rootScope.$watch(function () {
      return config.reportOptions.centerId;
    }, function (newVal, oldVal) {
      if (newVal !== oldVal) {
        config.reportData = null;
        config.center = null;
      }
    });
    /**
     * Resolve report dependencies before building like reportData, center, logoDataUrl
     */

    self.resolve = function () {
      return $q.all({
        reportData: config.reportData || config.getReportData().catch(function (result) {
          return $rootScope.showError(result, 'Failed to load report data.');
        }),
        center: config.center || centerService.get(+config.reportOptions.centerId || state.getCurrentCenterId()).catch(function (result) {
          return $rootScope.showError(result, 'Failed to load center data.');
        }),
        logo: config.logo || logo.getSiteLogo()
      }).then(function (result) {
        config.reportData = result.reportData;
        config.center = result.center;
        config.logo = result.logo;
        return config;
      });
    };
    /**
     * Build PDF report
     */


    self.buildPdf = function (reportDataCallback, customReportStyles) {
      return self.generatePdf(reportDataCallback, customReportStyles).then(function (doc) {
        return doc.output('blob');
      });
    };
    /**
     * Generate PDF report
     */


    self.generatePdf = function (reportDataCallback, customReportStyles, jsPdfDoc) {
      return self.resolve().then(function (_) {
        var _context;

        var doc = jsPdfDoc || new jsPDF(config.reportOptions.paperLayout, 'pt', config.reportOptions.paperSize);
        var data = reportDataCallback(config); // Format data

        data.rows.forEach(function (row) {
          data.columns.forEach(function (col, idx) {
            if (!row[idx] || angular.isUndefined(row[idx].content)) row[idx] = {
              content: row[idx]
            };
            var obj = row[idx];

            if (obj.content === false) {
              obj.content = '';
            } else {
              if (col.pdf) {
                obj.content = col.pdf(obj.content);
              } // pdf formatter


              obj.content = angular.isUndefined(obj.content) || obj.content === null || obj.content === '' ? '-' : obj.content;
            }
          });
        });
        var options = {
          columns: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = data.columns).call(_context, function (col) {
            return col.title.toUpperCase();
          }),
          body: data.rows,
          headStyles: (customReportStyles || reportStyles).headStyles,
          bodyStyles: (customReportStyles || reportStyles).bodyStyles,
          columnStyles: (customReportStyles || reportStyles).columnStyles,
          tableMargin: customReportStyles && customReportStyles.tableMargin || (customReportStyles || reportStyles).pageMargins,
          startY: config.startY || (customReportStyles || reportStyles).startY || false,
          didParseCell: stylesInjector,
          didDrawCell: function didDrawCell(hd) {
            return drawCell(hd, data.columns);
          },
          didDrawPage: function didDrawPage(data) {
            (config.reportHeader || reportHeader)(data.table, doc, config);
            (config.reportFooter || reportFooter)(data.table, doc, config);
          }
        };
        options.margin = options.tableMargin || (customReportStyles || reportStyles).pageMargins;
        doc.autoTable(options);
        return doc;

        function stylesInjector(hd) {
          // Hook for individual row/cell styling
          var row = hd.row,
              cell = hd.cell,
              column = hd.column,
              section = hd.section;

          if (section === 'body') {
            var defaultStyles = {
              minCellWidth: 50,
              fillColor: false
            };
            angular.extend(cell.styles, defaultStyles, data.styles[row.index], data.columns[column.index].styles);
          } else {
            angular.extend(cell.styles, data.columns[column.index].styles);
          }
        }
      });
    };
    /**
     * Build CSV report
     */


    self.buildCsv = function (reportDataCallback) {
      var _context2;

      var options = {
        charset: 'utf-8'
      };
      var data = reportDataCallback(config); // Format data

      data.rows.forEach(function (row) {
        data.columns.forEach(function (col, idx) {
          // TODO: generate colSpan
          if (row[idx] && angular.isDefined(row[idx].content)) row[idx] = row[idx].content;

          if (col.csv) {
            row[idx] = col.csv(row[idx]);
          } // csv formatter


          row[idx] = angular.isUndefined(row[idx]) || row[idx] === null || row[idx] === false || row[idx] === '' ? '' : row[idx];
        });
      });
      data.rows.unshift(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = data.columns).call(_context2, function (col) {
        return col.title.toUpperCase();
      }));
      return new Blob([csvMake.generate(data.rows, options)], {
        type: 'text/csv;charset=' + options.charset + ';'
      });
    };
    /**
     * Builds report file name: report-name_center-name_yyyy-MM-dd_HH-mm-ss.type
     */


    self.getReportFileName = function (reportType, postfix) {
      var centerName = config.reportOptions.centerId === false || +config.reportOptions.centerId ? config.center.shortName : 'all-centers';
      var reportName = config.reportName;
      centerName = (centerName || '').toLowerCase().replace(/\s+/g, '-');
      reportName = (reportName || '').toLowerCase().replace(/\s+/g, '-');
      reportType = (reportType || 'pdf').toLowerCase();
      return reportName + '-' + centerName + '-' + $filter('date')(moment(), 'yyyyMMdd-HHmmss') + (postfix || '') + '.' + reportType;
    };
    /**
     * Sort reportData by order.
     * Filter unsortable data (undefined/null/'') and concatenate it to the end of sorted list.
     */


    self.sortData = reportSort;
    /**
     * Custom Cell Renderer
     */

    function drawCell(data, columns) {
      var cell = data.cell,
          doc = data.doc; // Border

      if (data.column.index === 0 && cell.styles.borderColor && cell.styles.borderWidth) {
        // if(data.row.index < 0) data.row.y = data.settings.margin.top; // for border in headerRow
        doc.setLineWidth(cell.styles.borderWidth);
        doc.setDrawColor(cell.styles.borderColor[0], cell.styles.borderColor[1], cell.styles.borderColor[2]);
        doc.rect(data.settings.margin.left + cell.styles.borderWidth / 2, cell.y + cell.styles.borderWidth / 2, data.table.getWidth(doc.internal.pageSize.width) - cell.styles.borderWidth, data.row.height - cell.styles.borderWidth * 2, 'S');
      }

      return false;
    }
  }
}]));

/***/ }),

/***/ "./bundles/reports/services/report-group-by.service.js":
/*!*************************************************************!*\
  !*** ./bundles/reports/services/report-group-by.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_reports_services_report_sort_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/reports/services/report-sort.service */ "./shared/reports/services/report-sort.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reportGroupBy', [_shared_reports_services_report_sort_service__WEBPACK_IMPORTED_MODULE_0__["default"].name]).factory('reportGroupBy', ["reportSort", function (reportSort) {
  return function (reportData, groupBy) {
    return reportSort(reportData, groupBy).reduce(function (groups, item) {
      var group = groups[groups.length - 1] || [];
      var prev = group[0] || {};

      if (prev[groupBy] !== item[groupBy] && (!moment.isMoment(prev[groupBy]) || !moment.isMoment(item[groupBy]) || !prev[groupBy].isSame(item[groupBy], 'day'))) {
        group = []; // new group

        groups.push(group);
      }

      group.push(item);
      return groups;
    }, []);
  };
}]));

/***/ }),

/***/ "./bundles/reports/write-off-report/write-off-report-columns.service.js":
/*!******************************************************************************!*\
  !*** ./bundles/reports/write-off-report/write-off-report-columns.service.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Write Off Report
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.writeOffReportColumns', []).factory('writeOffReportColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'userCompany',
    _title: 'WRITE_OFF_REPORT.COLUMNS.COMPANY'
  }, {
    dataKey: 'userName',
    _title: 'WRITE_OFF_REPORT.COLUMNS.NAME',
    defaultOrder: true
  }, {
    dataKey: 'orderId',
    _title: 'WRITE_OFF_REPORT.COLUMNS.ORDER_ID',
    styles: {
      halign: 'right'
    }
  }, {
    dataKey: 'date',
    _title: 'WRITE_OFF_REPORT.COLUMNS.DATE',
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
    _title: 'WRITE_OFF_REPORT.COLUMNS.AMOUNT',
    styles: {
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

/***/ "./bundles/reports/write-off-report/write-off-report.controller.js":
/*!*************************************************************************!*\
  !*** ./bundles/reports/write-off-report/write-off-report.controller.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/reports/directives/pdf-preview.directive */ "./shared/reports/directives/pdf-preview.directive.js");
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/reports/directives/report-options.directive */ "./shared/reports/directives/report-options.directive.js");







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WriteOffReportCtrl', [shared_reports_directives_pdf_preview_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_reports_directives_report_options_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, 'deskworks.state', 'deskworks.reports.ReportBuilder', 'deskworks.reports.reportDates', 'deskworks.WriteOffReport', 'deskworks.writeOffReportColumns', 'deskworks.reportOrderBy']).controller('WriteOffReportCtrl', ["$scope", "$timeout", "$translate", "$filter", "$location", "helper", "state", "reportHelper", "reportStyles", "ReportBuilder", "WriteOffReport", "writeOffReportColumns", function ($scope, $timeout, $translate, $filter, $location, helper, state, reportHelper, reportStyles, ReportBuilder, WriteOffReport, writeOffReportColumns) {
  var $ctrl = this;
  $ctrl.config = {
    reportName: $translate.instant('WRITE_OFF_REPORT.REPORT_NAME'),
    reportOptions: {},
    reportColumns: writeOffReportColumns,
    reportDates: {
      fromDate: moment().date(1),
      toDate: moment()
    },
    getReportData: function getReportData() {
      return WriteOffReport.query({
        centerId: $ctrl.config.reportOptions.centerId || null,
        fromDate: $filter('date')($ctrl.config.reportDates.fromDate, 'yyyy-MM-dd'),
        toDate: $filter('date')($ctrl.config.reportDates.toDate, 'yyyy-MM-dd')
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
      orderSort: $ctrl.config.orderSort
    };
  }, function (newVal, oldVal) {
    if (debounceTimeout) {
      $timeout.cancel(debounceTimeout);
      debounceTimeout = null;
    }

    debounceTimeout = $timeout(function () {
      $ctrl.pdf = null;
      if (angular.isUndefined($ctrl.config.reportOptions.centerId)) return;
      if (!$ctrl.config.reportDates.fromDate || !$ctrl.config.reportDates.toDate) return;
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
    var _context, _context3, _context4;

    var result = {
      columns: config.reportColumns,
      rows: [],
      styles: []
    };
    var total = 0;
    result.rows = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default()(reportHelper).call(reportHelper, config.reportData, config.orderBy)).call(_context, function (data, idx) {
      var _context2;

      result.styles.push(idx % 2 ? null : reportStyles.rowOdd);
      total += data.amount;
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = result.columns).call(_context2, function (col) {
        return data[col.dataKey];
      });
    });
    result.rows.push(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context4 = Array.apply(null, Array(result.columns.length - 2))).call(_context4, Boolean.prototype.valueOf, false)).call(_context3, [$translate.instant('REPORTS.TOTAL') + ':', helper.round(total)]));
    result.styles.push(reportStyles.h3);
    return result;
  }
}]));

/***/ }),

/***/ "./bundles/reports/write-off-report/write-off-report.service.js":
/*!**********************************************************************!*\
  !*** ./bundles/reports/write-off-report/write-off-report.service.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WriteOffReport service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WriteOffReport', ['ngResource', 'datesDeserializer', 'deserializeNumbers', 'deskworks.config']).factory('WriteOffReport', ["$resource", "datesDeserializer", "deserializeNumbers", "deskworksConfig", function ($resource, datesDeserializer, deserializeNumbers, deskworksConfig) {
  var desDates = datesDeserializer(['date']);
  var desNumbers = deserializeNumbers(['amount']);
  var url = deskworksConfig.getApiAbsUrl('/write-off-report');
  var res = $resource(url, {
    centerId: '@centerId',
    fromDate: '@fromDate',
    toDate: '@toDate'
  }, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates, desNumbers]
    }
  });
  return {
    query: function query(params) {
      return res.query(params).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/reports/write-off-report/write-off-report.tpl.html":
/*!********************************************************************!*\
  !*** ./bundles/reports/write-off-report/write-off-report.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"writeOffReport\" class=\"gutter-v\"> <form name=\"formWriteOffReport\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{lg: '0 0 61%', md: '0 0 50%'}\"> <report-dates model=\"$ctrl.config.reportDates\"></report-dates> </div> <div flex=\"{lg: '0 0 39%', md: '0 0 50%'}\"> <report-options model=\"$ctrl.config.reportOptions\"> <report-order-by model=\"$ctrl.config.orderBy\" report-columns=\"$ctrl.config.reportColumns\"></report-order-by> </report-options> </div> </div> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadPdf()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_PDF\"></span> </ff-btn> <ff-btn sense=\"download\" ff-click=\"$ctrl.downloadCsv()\" ff-disabled=\"!$ctrl.pdf\"> <span translate=\"REPORTS.BTN_CSV\"></span> </ff-btn> </ff-btn-group> </form> <ff-panel> <ff-panel-header><span translate=\"REPORTS.PREVIEW.HEADER\"></span></ff-panel-header> <div pdf-preview=\"$ctrl.pdf\"></div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=reports~._bundles_reports_s.js.map?_rev=27d0132641694cbd1f61