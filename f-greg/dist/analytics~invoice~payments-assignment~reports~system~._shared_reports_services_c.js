(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics~invoice~payments-assignment~reports~system~._shared_reports_services_c"],{

/***/ "./shared/reports/services/csv-make.service.js":
/*!*****************************************************!*\
  !*** ./shared/reports/services/csv-make.service.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);






/**
 * csvMake service - generates CSV from data[[]]
 * Based on https://github.com/asafdav/ng-csv
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('csvMake', []).service('csvMake', ["$q", function ($q) {
  /**
   * Generates CSV from data[[]] and options.
   */
  this.generate = function (data, options) {
    options.txtDelim = options.txtDelim || '"';
    options.decimalSep = options.decimalSep || '.';
    options.fieldSep = options.fieldSep || ',';
    options.charset = options.charset || 'utf-8'; // Replaces any badly formatted special character string with correct special character

    options.fieldSep = this.isSpecialChar(options.fieldSep) ? this.getSpecialChar(options.fieldSep) : options.fieldSep;
    return this.stringify(data, options);
  };

  var EOL = '\r\n';
  var BOM = "\uFEFF";
  var specialChars = {
    '\\t': '\t',
    '\\b': '\b',
    '\\v': '\v',
    '\\f': '\f',
    '\\r': '\r'
  };
  /**
   * Stringify one field
   */

  this.stringifyField = function (data, options) {
    if (options.decimalSep === 'locale' && this.isFloat(data)) {
      return data.toLocaleString();
    }

    if (options.decimalSep !== '.' && this.isFloat(data)) {
      return data.toString().replace('.', options.decimalSep);
    }

    if (typeof data === 'string') {
      data = data.replace(/"/g, '""'); // Escape double qoutes

      if (options.quoteStrings || data.indexOf(',') > -1 || data.indexOf('\n') > -1 || data.indexOf('\r') > -1) {
        data = options.txtDelim + data + options.txtDelim;
      }

      return data;
    }

    if (typeof data === 'boolean') {
      return data ? 'TRUE' : 'FALSE';
    }

    return data;
  };
  /**
   * Helper function to check if input is float
   */


  this.isFloat = function (input) {
    return +input === input && (!isFinite(input) || Boolean(input % 1));
  };
  /**
   * Creates a csv from a data array
   * @param data
   * @param options
   *  * header - Provide the first row (optional)
   *  * fieldSep - Field separator, default: ',',
   *  * addByteOrderMarker - Add Byte order mark, default(false)
   */


  this.stringifyAsync = function (data, options) {
    var def = $q.defer();
    var that = this;
    var csv = "";
    var csvContent = "";
    var dataPromise = $q.when(data).then(function (responseData) {
      //responseData = angular.copy(responseData);//moved to row creation
      // Check if there's a provided header array
      if (angular.isDefined(options.header) && options.header) {
        var encodingArray, headerString;
        encodingArray = [];
        angular.forEach(options.header, function (title, key) {
          this.push(that.stringifyField(title, options));
        }, encodingArray);
        headerString = encodingArray.join(options.fieldSep ? options.fieldSep : ",");
        csvContent += headerString + EOL;
      }

      var arrData = [];

      if (angular.isArray(responseData)) {
        arrData = responseData;
      } else if (angular.isFunction(responseData)) {
        arrData = responseData();
      } // Check if using keys as labels


      if (angular.isDefined(options.label) && options.label && typeof options.label === 'boolean') {
        var labelArray, labelString;
        labelArray = [];
        angular.forEach(arrData[0], function (value, label) {
          this.push(that.stringifyField(label, options));
        }, labelArray);
        labelString = labelArray.join(options.fieldSep ? options.fieldSep : ",");
        csvContent += labelString + EOL;
      }

      angular.forEach(arrData, function (oldRow, index) {
        var row = angular.copy(arrData[index]);
        var dataString, infoArray;
        infoArray = [];
        var iterator = !!options.columnOrder ? options.columnOrder : row;
        angular.forEach(iterator, function (field, key) {
          var val = !!options.columnOrder ? row[field] : field;
          this.push(that.stringifyField(val, options));
        }, infoArray);
        dataString = infoArray.join(options.fieldSep ? options.fieldSep : ",");
        csvContent += index < arrData.length ? dataString + EOL : dataString;
      }); // Add BOM if needed

      if (options.addByteOrderMarker) {
        csv += BOM;
      } // Append the content and resolve.


      csv += csvContent;
      def.resolve(csv);
    });

    if (typeof dataPromise['catch'] === 'function') {
      dataPromise['catch'](function (err) {
        def.reject(err);
      });
    }

    return def.promise;
  };
  /**
   * Creates a csv from a data array
   * @param data
   * @param options
   *  * header - Provide the first row (optional)
   *  * fieldSep - Field separator, default: ',',
   *  * addByteOrderMarker - Add Byte order mark, default(false)
   */


  this.stringify = function (data, options) {
    var that = this;
    var csv = '';
    var csvContent = ''; // Check if there's a provided header array

    if (angular.isDefined(options.header) && options.header) {
      var encodingArray, headerString;
      encodingArray = [];
      angular.forEach(options.header, function (title, key) {
        this.push(that.stringifyField(title, options));
      }, encodingArray);
      headerString = encodingArray.join(options.fieldSep ? options.fieldSep : ",");
      csvContent += headerString + EOL;
    }

    var arrData = data; // Check if using keys as labels

    if (angular.isDefined(options.label) && options.label && typeof options.label === 'boolean') {
      var labelArray, labelString;
      labelArray = [];
      angular.forEach(arrData[0], function (value, label) {
        this.push(that.stringifyField(label, options));
      }, labelArray);
      labelString = labelArray.join(options.fieldSep ? options.fieldSep : ",");
      csvContent += labelString + EOL;
    }

    angular.forEach(arrData, function (oldRow, index) {
      var row = angular.copy(arrData[index]);
      var dataString, infoArray;
      infoArray = [];
      var iterator = !!options.columnOrder ? options.columnOrder : row;
      angular.forEach(iterator, function (field, key) {
        var val = !!options.columnOrder ? row[field] : field;
        this.push(that.stringifyField(val, options));
      }, infoArray);
      dataString = infoArray.join(options.fieldSep ? options.fieldSep : ",");
      csvContent += index < arrData.length ? dataString + EOL : dataString;
    }); // Add BOM if needed

    if (options.addByteOrderMarker) {
      csv += BOM;
    } // Append the content


    csv += csvContent;
    return csv;
  };
  /**
   * Helper function to check if input is really a special character
   * @param input
   * @returns {boolean}
   */


  this.isSpecialChar = function (input) {
    return specialChars[input] !== undefined;
  };
  /**
   * Helper function to get what the special character was supposed to be
   * since Angular escapes the first backslash
   * @param input
   * @returns {special character string}
   */


  this.getSpecialChar = function (input) {
    return specialChars[input];
  };
}]));

/***/ }),

/***/ "./shared/reports/services/file-saver.service.js":
/*!*******************************************************!*\
  !*** ./shared/reports/services/file-saver.service.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "../node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('fileSaver', []).factory('fileSaver', ["$window", function ($window) {
  return function (blob, name, opts, popup) {
    if ($window.cordova && $window.cordova.InAppBrowser && $window.cordova.platformId === 'ios') {
      var reader = new FileReader();

      reader.onloadend = function () {
        var url = reader.result;
        return $window.cordova.InAppBrowser.open(url, '_blank', 'hidenavigationbuttons=yes,hideurlbar=yes,enableViewportScale=yes,location=no');
      };

      reader.readAsDataURL(blob);
      return;
    }

    return $window.saveAs(blob, name, opts, popup);
  };
}]));

/***/ }),

/***/ "./shared/reports/services/jspdf.service.js":
/*!**************************************************!*\
  !*** ./shared/reports/services/jspdf.service.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "../node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ "../node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);


/**
 * jsPDF service - wrapper for jsPDF
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('jsPDF', []).factory('jsPDF', ["$window", function ($window) {
  $window.jsPDF = jspdf__WEBPACK_IMPORTED_MODULE_0__["default"];
  return $window.jsPDF;
}]));

/***/ }),

/***/ "./shared/reports/services/logo.service.js":
/*!*************************************************!*\
  !*** ./shared/reports/services/logo.service.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var logoUrl = '/white-label/images/logo-print.png';
/**
 * Logo service - handles logos for invoice
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.logo', []).factory('logo', ["$window", "$http", "$q", "deskworksConfig", function ($window, $http, $q, deskworksConfig) {
  var siteLogoPromise, siteLogoInvPromise;
  var maxWidth = 480,
      maxHeight = 171; // according to w = 140, h = 50 in invoice-header.service.js

  return {
    getSiteLogo: function getSiteLogo() {
      siteLogoPromise = siteLogoPromise || loadLogo();
      return siteLogoPromise;
    },
    getSiteLogoInv: function getSiteLogoInv() {
      siteLogoInvPromise = siteLogoInvPromise || loadLogoInv();
      return siteLogoInvPromise;
    },
    resetSiteLogo: function resetSiteLogo() {
      siteLogoPromise = null;
    },
    resetSiteLogoInv: function resetSiteLogoInv() {
      siteLogoInvPromise = null;
    }
  };
  /**
   * Loads non-inverted logo
   */

  function loadLogo() {
    return $q(function (resolve) {
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = deskworksConfig.getApiAbsUrl(logoUrl);

      img.onerror = function () {
        console.warn('Report failed to load site logo.');
        resolve(null);
        img = null;
      };

      img.onload = function () {
        resolve(img);
        img = null;
      };
    }).then(convertLogo);
  }
  /**
   * Loads inverted logo
   */


  function loadLogoInv() {
    return $q(function (resolve) {
      var img = document.querySelector('.sidebar-logo a img');
      if (!img) console.warn('Report failed to load site logo.');
      resolve(img);
    }).then(convertLogo);
  }
  /**
   * Downscales logo and converts to data-url then returns { width, height, data }
   */


  function convertLogo(img) {
    if (!img) return null;
    var dw = img.width / maxWidth;
    var dh = img.height / maxHeight;
    var scaleFactor = dw > dh ? dw : dh;
    var width = Math.round(img.width / scaleFactor);
    var height = Math.round(img.height / scaleFactor);
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    document.body.removeChild(canvas);
    return {
      width: width,
      height: height,
      data: data
    };
  }
}]));

/***/ }),

/***/ "./shared/reports/services/report-footer.service.js":
/*!**********************************************************!*\
  !*** ./shared/reports/services/report-footer.service.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _report_styles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-styles.service */ "./shared/reports/services/report-styles.service.js");



/**
 * PDF Report Footer
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.reportFooter', [_report_styles_service__WEBPACK_IMPORTED_MODULE_2__["default"].name]).factory('reportFooter', ["$filter", "reportStyles", function ($filter, reportStyles) {
  return function () {
    return arguments.length === 3 ? oldFooter.apply(void 0, arguments) : newFooter.apply(void 0, arguments);
  };
  /**
   * @param args.config - merged config + params
   * @param args.doc - jsPdfDoc
   * @param args.data - data.table
   * @param args.resources - { centers: [{...}] }
   */

  function newFooter(args) {
    var _context;

    var config = args.config,
        doc = args.doc,
        data = args.data,
        resources = args.resources;

    var center = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context = resources.centers).call(_context, function (i) {
      return i.id === +config.centerId;
    });

    if (!center) return; // no center - no footer

    var str;
    var pageWidth = doc.internal.pageSize.width;
    var pageHeight = doc.internal.pageSize.height;
    doc.setFont(doc.getFont().fontName, 'normal');
    doc.setTextColor(reportStyles.footer.textColor);
    doc.setFontSize(9);
    str = [center.name, center.phone, center.street1];
    if (center.street2) str.push(center.street2);
    str.push(center.city);
    str.push(center.state.name || center.state);
    str.push(center.zip);
    str = str.join(' / ');
    doc.text(str, (pageWidth - doc.getTextWidth(str)) / 2, pageHeight - 30);
  } // TODO: remove it after migration to reportHelper service


  function oldFooter(data, doc, config) {
    var str;
    var pageWidth = doc.internal.pageSize.width;
    var pageHeight = doc.internal.pageSize.height;
    doc.setFont(doc.getFont().fontName, 'normal');
    doc.setTextColor(reportStyles.footer.textColor);
    doc.setFontSize(9);
    str = [config.center.name, config.center.phone, config.center.street1];
    if (config.center.street2) str.push(config.center.street2);
    str.push(config.center.city);
    str.push(config.center.state.name || config.center.state);
    str.push(config.center.zip);
    str = str.join(' / ');
    doc.text(str, (pageWidth - doc.getTextWidth(str)) / 2, pageHeight - 30);
  }
}]));

/***/ }),

/***/ "./shared/reports/services/report-header.service.js":
/*!**********************************************************!*\
  !*** ./shared/reports/services/report-header.service.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _report_styles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-styles.service */ "./shared/reports/services/report-styles.service.js");



/**
 * PDF Report Header
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.reportHeader', [_report_styles_service__WEBPACK_IMPORTED_MODULE_2__["default"].name]).factory('reportHeader', ["$filter", "$translate", "reportStyles", function ($filter, $translate, reportStyles) {
  return function () {
    return arguments.length === 3 ? oldHeader.apply(void 0, arguments) : newHeader.apply(void 0, arguments);
  };
  /**
   * @param args.config - merged config + params
   * @param args.doc - jsPdfDoc
   * @param args.data - data.table
   * @param args.resources - { centers: [{...}] }
   */

  function newHeader(args) {
    var _context;

    var config = args.config,
        doc = args.doc,
        data = args.data,
        resources = args.resources;

    var center = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context = resources.centers).call(_context, function (i) {
      return i.id === +config.centerId;
    });

    var str, x, y;
    var pageWidth = doc.internal.pageSize.width;
    doc.setFont(doc.getFont().fontName, 'normal');
    doc.setTextColor(reportStyles.header.textColor);
    /**
     * Report Name
     */
    // x = data.settings.margin.left; y = 40;

    x = reportStyles.pageMargins[3];
    y = 40;
    doc.setFontSize(14);
    str = config.reportName.toUpperCase();
    doc.text(str, x, y);
    x += doc.getTextWidth(str) + 3;
    /**
     * Report Period
     */

    if (config.fromDate || config.toDate) {
      doc.setFontSize(7);
      str = $translate.instant('REPORTS.HEADER.FOR_PERIOD').toUpperCase();
      if (config.fromDate) str += ' ' + $translate.instant('REPORTS.HEADER.FROM').toUpperCase() + ':';
      doc.text(str, x, y);
      x += doc.getTextWidth(str) + 3;

      if (config.fromDate) {
        doc.setFontSize(9);
        str = $filter('date')(config.fromDate, 'mediumDate') || '';
        doc.text(str, x, y);
        x += doc.getTextWidth(str) + 3;
      }

      doc.setFontSize(7);
      str = $translate.instant('REPORTS.HEADER.THROUGH').toUpperCase() + ':';
      doc.text(str, x, y);
      x += doc.getTextWidth(str) + 3;
      doc.setFontSize(9);
      str = $filter('date')(config.toDate, 'mediumDate') || '';
      doc.text(str, x, y);
      x += doc.getTextWidth(str) + 3;
    }
    /**
     * Page
     */
    // x = pageWidth - data.settings.margin.right;


    x = pageWidth - reportStyles.pageMargins[1];
    doc.setFontSize(9);
    str = '' + data.pageCount;
    x -= doc.getTextWidth(str);
    doc.text(str, x, y);
    doc.setFontSize(7);
    str = $translate.instant('REPORTS.HEADER.PAGE').toUpperCase() + ':';
    x -= doc.getTextWidth(str + ' ');
    doc.text(str, x, y - 0.6);
    /**
     * Report For
     */
    // x = data.settings.margin.left; y += 11;

    x = reportStyles.pageMargins[3];
    y += 11;
    doc.setFontSize(7);
    str = $translate.instant('REPORTS.HEADER.REPORT_FOR').toUpperCase() + ':';
    doc.text(str, x, y - 0.6);
    x += doc.getTextWidth(str + ' ');
    doc.setFontSize(9);
    str = config.reportFor || (center ? [center.name, center.city, center.state].join(', ') : 'All Centers');
    doc.text(str, x, y);
    x += doc.getTextWidth(str + ' ');
    /**
     * Report Date
     */
    // x = pageWidth - data.settings.margin.right;

    x = pageWidth - reportStyles.pageMargins[1];
    doc.setFontSize(9);
    str = $filter('date')(moment(), 'mediumDate');
    x -= doc.getTextWidth(str);
    doc.text(str, x, y);
    doc.setFontSize(7);
    str = $translate.instant('REPORTS.HEADER.REPORT_DATE').toUpperCase() + ':';
    x -= doc.getTextWidth(str + ' ');
    doc.text(str, x, y - 0.6);
  } // TODO: remove it after migration to reportHelper service


  function oldHeader(data, doc, config) {
    var str, x, y;
    var pageWidth = doc.internal.pageSize.width;
    doc.setFont(doc.getFont().fontName, 'normal');
    doc.setTextColor(reportStyles.header.textColor);
    /**
     * Report Name
     */
    // x = data.settings.margin.left; y = 40;

    x = reportStyles.pageMargins[3];
    y = 40;
    doc.setFontSize(14);
    str = config.reportName.toUpperCase();
    doc.text(str, x, y);
    x += doc.getTextWidth(str) + 3;
    /**
     * Report Period
     */

    if (config.reportDates) {
      doc.setFontSize(7);
      str = $translate.instant('REPORTS.HEADER.FOR_PERIOD').toUpperCase();
      if (config.reportDates.fromDate) str += ' ' + $translate.instant('REPORTS.HEADER.FROM').toUpperCase() + ':';
      doc.text(str, x, y);
      x += doc.getTextWidth(str) + 3;

      if (config.reportDates.fromDate) {
        doc.setFontSize(9);
        str = $filter('date')(config.reportDates.fromDate, 'mediumDate') || '';
        doc.text(str, x, y);
        x += doc.getTextWidth(str) + 3;
      }

      doc.setFontSize(7);
      str = $translate.instant('REPORTS.HEADER.THROUGH').toUpperCase() + ':';
      doc.text(str, x, y);
      x += doc.getTextWidth(str) + 3;
      doc.setFontSize(9);
      str = $filter('date')(config.reportDates.toDate, 'mediumDate') || '';
      doc.text(str, x, y);
      x += doc.getTextWidth(str) + 3;
    }
    /**
     * Page
     */
    // x = pageWidth - data.settings.margin.right;


    x = pageWidth - reportStyles.pageMargins[1];
    doc.setFontSize(9);
    str = '' + data.pageCount;
    x -= doc.getTextWidth(str);
    doc.text(str, x, y);
    doc.setFontSize(7);
    str = $translate.instant('REPORTS.HEADER.PAGE').toUpperCase() + ':';
    x -= doc.getTextWidth(str + ' ');
    doc.text(str, x, y - 0.6);
    /**
     * Report For
     */
    // x = data.settings.margin.left; y += 11;

    x = reportStyles.pageMargins[3];
    y += 11;
    doc.setFontSize(7);
    str = $translate.instant('REPORTS.HEADER.REPORT_FOR').toUpperCase() + ':';
    doc.text(str, x, y - 0.6);
    x += doc.getTextWidth(str + ' ');
    doc.setFontSize(9);
    str = config.reportFor || (config.reportOptions.centerId === false || +config.reportOptions.centerId) && [config.center.name, config.center.city, config.center.state.name].join(', ') || 'All Centers';
    doc.text(str, x, y);
    x += doc.getTextWidth(str + ' ');
    /**
     * Report Date
     */
    // x = pageWidth - data.settings.margin.right;

    x = pageWidth - reportStyles.pageMargins[1];
    doc.setFontSize(9);
    str = $filter('date')(moment(), 'mediumDate');
    x -= doc.getTextWidth(str);
    doc.text(str, x, y);
    doc.setFontSize(7);
    str = $translate.instant('REPORTS.HEADER.REPORT_DATE').toUpperCase() + ':';
    x -= doc.getTextWidth(str + ' ');
    doc.text(str, x, y - 0.6);
  }
}]));

/***/ }),

/***/ "./shared/reports/services/report-helper.service.js":
/*!**********************************************************!*\
  !*** ./shared/reports/services/report-helper.service.js ***!
  \**********************************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/fill */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/fill.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _report_sort_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./report-sort.service */ "./shared/reports/services/report-sort.service.js");
/* harmony import */ var _csv_make_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./csv-make.service */ "./shared/reports/services/csv-make.service.js");
/* harmony import */ var _jspdf_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jspdf.service */ "./shared/reports/services/jspdf.service.js");
/* harmony import */ var _file_saver_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./file-saver.service */ "./shared/reports/services/file-saver.service.js");
/* harmony import */ var _logo_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logo.service */ "./shared/reports/services/logo.service.js");
/* harmony import */ var _report_styles_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./report-styles.service */ "./shared/reports/services/report-styles.service.js");
/* harmony import */ var _report_header_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./report-header.service */ "./shared/reports/services/report-header.service.js");
/* harmony import */ var _report_footer_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./report-footer.service */ "./shared/reports/services/report-footer.service.js");














function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }









/**
 * Report helper service - creates report configuration from report data to create PDF via pdfMake
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reportHelper', [_report_sort_service__WEBPACK_IMPORTED_MODULE_13__["default"].name, _csv_make_service__WEBPACK_IMPORTED_MODULE_14__["default"].name, _jspdf_service__WEBPACK_IMPORTED_MODULE_15__["default"].name, _file_saver_service__WEBPACK_IMPORTED_MODULE_16__["default"].name, _logo_service__WEBPACK_IMPORTED_MODULE_17__["default"].name, _report_styles_service__WEBPACK_IMPORTED_MODULE_18__["default"].name, _report_header_service__WEBPACK_IMPORTED_MODULE_19__["default"].name, _report_footer_service__WEBPACK_IMPORTED_MODULE_20__["default"].name]).factory('reportHelper', ["$rootScope", "$q", "$timeout", "$window", "$filter", "$http", "dwAlerts", "state", "logo", "jsPDF", "csvMake", "centerService", "reportStyles", "reportHeader", "reportFooter", "reportSort", "fileSaver", function ($rootScope, $q, $timeout, $window, $filter, $http, dwAlerts, state, logo, jsPDF, csvMake, centerService, reportStyles, reportHeader, reportFooter, reportSort, fileSaver) {
  return {
    sort: reportSort,
    paramsChanged: paramsChanged,
    loadResources: loadResources,
    buildPdf: buildPdf,
    buildCsv: buildCsv,
    getReportFileName: getReportFileName,
    download: download
  };

  function paramsChanged() {
    var np = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return props.some(function (p) {
      return moment.isMoment(np[p]) ? !moment.isMoment(op[p]) || !np[p].isSame(op[p]) : np[p] !== op[p];
    });
  }

  function loadResources() {
    var extraLoaderFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
      return {};
    };
    return $q.all(_objectSpread(_objectSpread({}, extraLoaderFn()), {}, {
      centers: centerService.query().catch(function (err) {
        return dwAlerts.error(err, 'Failed to query centers.');
      }),
      logo: logo.getSiteLogo()
    }));
  }
  /**
   * Build jsPdfDoc based on config/params/data/resources
   * @param args.config - merged config + params
   * @param args.config.styles - custom report styles
   * @param args.config.header - custom report header
   * @param args.config.footer - custom report footer
   * @param args.report - report data { rows: [], columns: [], styles: [] }
   * @param args.resources - resources e.g. list of centers
   * @param args.doc - JsPdf document
   * @param args.startY -
   * @returns {*|jsPDF}
   */


  function buildPdf(args) {
    var _context;

    var config = args.config,
        report = args.report,
        resources = args.resources,
        _args$doc = args.doc,
        doc = _args$doc === void 0 ? new jsPDF(config.paperLayout, 'pt', config.paperSize) : _args$doc,
        startY = args.startY;
    var rows = angular.copy(report.rows); // Format data

    rows.forEach(function (row) {
      var colIdx = 0;
      row.forEach(function (cell, idx) {
        if (!cell || angular.isUndefined(cell.content)) row[idx] = cell = {
          content: cell
        };
        var col = report.columns[colIdx];

        if (cell.content === false) {
          cell.content = '';
        } else {
          if (col.pdf) {
            // pdf formatter
            var converted = col.pdf(cell.content);
            cell.content = converted === '' ? cell.content : converted;
          }

          cell.content = angular.isUndefined(cell.content) || cell.content === null || cell.content === '' ? '-' : cell.content;
        }

        colIdx += cell.colSpan || 1;
      });
    });
    var options = {
      columns: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(_context = report.columns).call(_context, function (col) {
        return !config.styles || config.styles.headStyles.textTransform === 'uppercase' ? col.title.toUpperCase() : col.title;
      }),
      body: rows,
      headStyles: (config.styles || reportStyles).headStyles,
      bodyStyles: (config.styles || reportStyles).bodyStyles,
      columnStyles: (config.styles || reportStyles).columnStyles,
      tableMargin: config.styles && config.styles.tableMargin || (config.styles || reportStyles).pageMargins,
      startY: startY || (config.styles || reportStyles).startY || false,
      didParseCell: stylesInjector,
      didDrawCell: function didDrawCell(hd) {
        return drawCell(hd, report.columns);
      },
      didDrawPage: function didDrawPage(data) {
        (config.header || reportHeader)({
          config: config,
          doc: doc,
          data: data.table,
          resources: resources
        });
        (config.footer || reportFooter)({
          config: config,
          doc: doc,
          data: data.table,
          resources: resources
        });
      }
    };
    options.margin = options.tableMargin || (config.styles || reportStyles).pageMargins;
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
        angular.extend(cell.styles, defaultStyles, report.styles[row.index], report.columns[column.index].styles, rows[row.index][column.index] ? rows[row.index][column.index].styles : null);
      } else {
        angular.extend(cell.styles, report.columns[column.index].styles);
      }
    }
    /**
     * Custom Cell Renderer
     */


    function drawCell(data, columns) {
      var cell = data.cell,
          doc = data.doc; // Border

      if (data.column.index === 0 && cell.styles.borderColor && cell.styles.borderWidth) {
        doc.setLineWidth(cell.styles.borderWidth);
        doc.setDrawColor(cell.styles.borderColor[0], cell.styles.borderColor[1], cell.styles.borderColor[2]);
        doc.rect(data.settings.margin.left + cell.styles.borderWidth / 2, cell.y + cell.styles.borderWidth / 2, data.table.getWidth(doc.internal.pageSize.width) - cell.styles.borderWidth, data.row.height - cell.styles.borderWidth * 2, 'S');
      }

      return false;
    }
  }
  /**
   * Build CSV report
   * @param args.report - report data { rows: [], columns: [], styles: [] }
   */


  function buildCsv(args) {
    var _context2, _context4;

    var report = args.report;
    var options = {
      charset: 'utf-8'
    };

    var rows = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(_context2 = report.rows).call(_context2, function (row) {
      return row.reduce(function (res, cell) {
        var _context3;

        // unwrap colSpans
        res.push(cell);
        return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7___default()(res).call(res, _babel_runtime_corejs3_core_js_stable_instance_fill__WEBPACK_IMPORTED_MODULE_8___default()(_context3 = new Array((cell && cell.colSpan ? cell.colSpan : 1 || false) - 1)).call(_context3, null));
      }, []);
    }); // Format data


    rows.forEach(function (row) {
      row.forEach(function (cell, idx) {
        if (row[idx] && angular.isDefined(row[idx].content)) row[idx] = row[idx].content;
        var col = report.columns[idx];

        if (col.csv) {
          // csv formatter
          var converted = col.csv(row[idx]);
          row[idx] = converted === '' ? row[idx] : converted;
        }

        row[idx] = angular.isUndefined(row[idx]) || row[idx] === null || row[idx] === false || row[idx] === '' ? '' : row[idx];
      });
    });
    rows.unshift(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_6___default()(_context4 = report.columns).call(_context4, function (col) {
      return col.title.toUpperCase();
    }));
    return new Blob([csvMake.generate(rows, options)], {
      type: 'text/csv;charset=' + options.charset + ';'
    });
  }
  /**
   * Builds report file name: report-name_center-name_yyyy-MM-dd_HH-mm-ss.type
   * @param args.config - merged config + params
   * @param args.resources - { centers: [{...}] }
   * @param args.extension - file extension, default 'pdf'
   * @param args.postfix - file postfix
   */


  function getReportFileName(args) {
    var _context5;

    var _args$extension = args.extension,
        extension = _args$extension === void 0 ? 'pdf' : _args$extension,
        _args$postfix = args.postfix,
        postfix = _args$postfix === void 0 ? '' : _args$postfix,
        config = args.config,
        resources = args.resources;
    var reportName = config.reportName.toLowerCase().replace(/\s+/g, '-');
    var center = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_9___default()(_context5 = resources.centers).call(_context5, function (i) {
      return i.id === +config.centerId;
    }) || {
      name: 'all-centers'
    };
    var centerName = center.name.toLowerCase().replace(/\s+/g, '-');
    return reportName + '-' + centerName + '-' + $filter('date')(moment(), 'yyyyMMdd-HHmmss') + postfix + '.' + extension.toLowerCase();
  }
  /**
   * Download report file
   * @param blob - blob of pdf or csv
   * @param fileName - file name
   */


  function download(_ref) {
    var blob = _ref.blob,
        fileName = _ref.fileName;
    if (!blob) return;
    fileSaver(blob, fileName);
  }
}]));

/***/ }),

/***/ "./shared/reports/services/report-sort.service.js":
/*!********************************************************!*\
  !*** ./shared/reports/services/report-sort.service.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reportSort', []).factory('reportSort', ["$filter", function ($filter) {
  return function (reportData, order, reverse) {
    if (!angular.isArray(order)) order = [order];
    order = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(order).call(order, function (ord) {
      var _context, _context2;

      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = "".concat(ord, " || ")).call(_context2, ord, " === 0 ? ")).call(_context, ord, " : \"~~~\"");
    });
    return $filter('orderBy')(reportData, order, reverse);
  };
}]));

/***/ }),

/***/ "./shared/reports/services/report-styles.service.js":
/*!**********************************************************!*\
  !*** ./shared/reports/services/report-styles.service.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * reportStyles service - defines PDF styling for all reports
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports.reportStyles', ['deskworks.helper']).factory('reportStyles', ["helper", function (helper) {
  var borderLightColor = '#eeeeee';
  var lightColor = '#949594';
  var darkColor = '#444444';
  return {
    pageMargins: [60, 25, 50, 25],
    headStyles: {
      fontSize: 9,
      fontStyle: 'normal',
      valign: 'middle',
      fillColor: helper.hex2rgbArr(darkColor),
      textColor: 255,
      textTransform: 'uppercase'
    },
    bodyStyles: {
      overflow: 'linebreak',
      textColor: 0
    },
    header: {
      textColor: lightColor
    },
    footer: {
      textColor: lightColor
    },
    // Striped table
    rowOdd: {
      fillColor: [245, 245, 245]
    },
    // Special table rows for grouping
    h1: {
      fontStyle: 'bold',
      fillColor: helper.hex2rgbArr(lightColor),
      textColor: [255, 255, 255]
    },
    h2: {
      fontStyle: 'bold',
      textColor: helper.hex2rgbArr(darkColor),
      borderWidth: 1,
      borderColor: helper.hex2rgbArr(darkColor)
    },
    h3: {
      fontStyle: 'bold'
    }
  };
}]));

/***/ })

}]);
//# sourceMappingURL=analytics~invoice~payments-assignment~reports~system~._shared_reports_services_c.js.map?_rev=e9dda25694d17e3a33e2