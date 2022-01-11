(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-alternate~._bundles_invoice_a"],{

/***/ "./bundles/invoice/alternate/index.js":
/*!********************************************!*\
  !*** ./bundles/invoice/alternate/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoice_styles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-styles.service */ "./bundles/invoice/alternate/invoice-styles.service.js");
/* harmony import */ var _invoice_columns_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-columns.service */ "./bundles/invoice/alternate/invoice-columns.service.js");
/* harmony import */ var _invoice_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-header.service */ "./bundles/invoice/alternate/invoice-header.service.js");
/* harmony import */ var _invoice_body_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-body.service */ "./bundles/invoice/alternate/invoice-body.service.js");




var index = ['$injector', function index($injector) {
  $injector.loadNewModules([_invoice_styles_service__WEBPACK_IMPORTED_MODULE_0__["default"].name, _invoice_columns_service__WEBPACK_IMPORTED_MODULE_1__["default"].name, _invoice_header_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, _invoice_body_service__WEBPACK_IMPORTED_MODULE_3__["default"].name]);
  return {
    styles: $injector.get('alternateInvoiceStyles'),
    columns: $injector.get('alternateInvoiceColumns'),
    header: $injector.get('alternateInvoiceHeader'),
    body: $injector.get('alternateInvoiceBody')
  };
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/invoice/alternate/invoice-body.service.js":
/*!***********************************************************!*\
  !*** ./bundles/invoice/alternate/invoice-body.service.js ***!
  \***********************************************************/
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
/* harmony import */ var _common_invoice_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/invoice-helper.service */ "./bundles/invoice/common/invoice-helper.service.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.alternateInvoiceBody', [_common_invoice_helper_service__WEBPACK_IMPORTED_MODULE_3__["default"].name]).factory('alternateInvoiceBody', ["$translate", "$filter", "invoiceHelper", function ($translate, $filter, invoiceHelper) {
  return dataToReport;

  function dataToReport(_ref) {
    var config = _ref.config,
        params = _ref.params,
        data = _ref.data,
        columns = _ref.columns,
        resources = _ref.resources;
    var styles = config.styles;
    var report = {
      columns: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(columns).call(columns, function (i) {
        return i.include;
      }),
      rows: [],
      styles: []
    };
    generateGroup(invoiceHelper.getGroup({
      items: data.items,
      type: 'recurring'
    }));
    generateGroup(invoiceHelper.getGroup({
      items: data.items,
      type: 'rental'
    }));
    generateGroup(invoiceHelper.getGroup({
      items: data.items,
      type: 'deposit'
    }));
    generateGroup(invoiceHelper.getGroup({
      items: data.items,
      type: 'other'
    }));
    var taxTotals = invoiceHelper.getTaxTotals(data.items);

    if (taxTotals.length) {
      report.rows.push([{
        content: $translate.instant('INVOICE.CHARGES') + ': ' + $filter('ncurrency')(invoiceHelper.getChargesTotal(data.items)),
        colSpan: report.columns.length
      }]);
      report.styles.push(styles.h1);
      taxTotals.forEach(function (taxTotal) {
        report.rows.push([{
          content: taxTotal.name + ': ' + $filter('ncurrency')(taxTotal.amount),
          colSpan: report.columns.length
        }]);
        report.styles.push(styles.h1);
      });
    }

    generateGroup(invoiceHelper.getGroup({
      items: data.items,
      type: 'payment'
    }));
    generateGroup(invoiceHelper.getGroup({
      items: data.items,
      type: 'refund'
    }));
    report.rows.push([{
      content: $translate.instant('INVOICE.TOTAL') + ': ' + $filter('ncurrency')(invoiceHelper.getBalance(data.items)),
      colSpan: report.columns.length
    }]);
    report.styles.push(styles.h1); // Increase startY by logo height

    var _invoiceHelper$getLog = invoiceHelper.getLogoSize({
      resources: resources
    }),
        height = _invoiceHelper$getLog.height;

    if (!styles._startY) styles._startY = styles.startY;
    styles.startY = styles._startY + height - 25;
    return report;
    /**
     * Generate group of order items obtained from invoiceHelper.getGroup
     * @param group
     */

    function generateGroup(group) {
      if (!group.items || !group.items.length) return;
      report.rows.push([{
        content: group.name,
        colSpan: report.columns.length,
        styles: {
          halign: 'left'
        }
      }]);
      report.styles.push(styles.h2);
      group.items.forEach(function (item, idx) {
        var _context;

        report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = report.columns).call(_context, function (col) {
          return item[col.dataKey];
        }));
        report.styles.push(null);
      });
      report.rows.push([{
        content: $translate.instant('INVOICE.TOTAL') + ' ' + group.name + ': ' + $filter('ncurrency')(group.total),
        colSpan: report.columns.length
      }]);
      report.styles.push(styles.h3);
    }
  }
}]));

/***/ }),

/***/ "./bundles/invoice/alternate/invoice-columns.service.js":
/*!**************************************************************!*\
  !*** ./bundles/invoice/alternate/invoice-columns.service.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Invoice
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.alternateInvoiceColumns', []).factory('alternateInvoiceColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'date',
    _title: 'INVOICE.COLUMNS.DATE_ADDED',
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
    dataKey: 'name',
    _title: 'INVOICE.COLUMNS.ITEM',
    include: true,
    styles: {
      minCellWidth: 110
    }
  }, {
    dataKey: 'description',
    _title: 'INVOICE.COLUMNS.DESCRIPTION',
    include: true,
    styles: {
      minCellWidth: 140
    }
  }, {
    dataKey: 'price',
    _title: 'INVOICE.COLUMNS.PRICE',
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
    _title: 'INVOICE.COLUMNS.QUANTITY',
    include: true,
    styles: {
      cellWidth: 'wrap',
      halign: 'right'
    },
    pdf: function pdf(v) {
      return $filter('round')(v);
    },
    csv: function csv(v) {
      return $filter('round')(v);
    }
  }, {
    dataKey: 'amount',
    _title: 'INVOICE.COLUMNS.AMOUNT',
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

/***/ "./bundles/invoice/alternate/invoice-header.service.js":
/*!*************************************************************!*\
  !*** ./bundles/invoice/alternate/invoice-header.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_invoice_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/invoice-helper.service */ "./bundles/invoice/common/invoice-helper.service.js");


/**
 * PDF Invoice Header
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.alternateInvoiceHeader', [_common_invoice_helper_service__WEBPACK_IMPORTED_MODULE_1__["default"].name]).factory('alternateInvoiceHeader', ["$rootScope", "$filter", "$translate", "invoiceHelper", function ($rootScope, $filter, $translate, invoiceHelper) {
  return header;

  function header(args) {
    var config = args.config,
        doc = args.doc,
        data = args.data,
        resources = args.resources;
    var styles = config.styles; // const center = resources.centers.find(i => i.id === config.centerId);

    var str, x, y;
    var pageWidth = doc.internal.pageSize.width;
    var pageHeight = doc.internal.pageSize.height;

    var _invoiceHelper$getLog = invoiceHelper.getLogoSize({
      resources: resources
    }),
        width = _invoiceHelper$getLog.width,
        height = _invoiceHelper$getLog.height;

    var margin = data.settings.margin;
    var padding = angular.copy(styles.framePadding);
    padding[0] += height;
    margin.top = styles.pageMargins[0] + height;
    doc.setFont(doc.getFont().fontName, 'normal');
    doc.setTextColor(styles.header.textColor);
    /**
     * Frame
     */

    doc.setLineWidth(1);
    doc.setDrawColor(0, 0, 0);
    doc.rect(margin.left - padding[3], margin.top - padding[0], pageWidth - margin.right - margin.left + padding[3] + padding[1], pageHeight - margin.top - margin.bottom + padding[0] + padding[2], 'S');
    doc.setFillColor(255, 255, 255); // white frame space

    doc.rect(pageWidth / 2 - 100, margin.top - padding[0] - 1, 200, 2, 'F');
    /**
     * Logo
     */

    if (resources.logo) {
      x = pageWidth / 2;
      y = margin.top - padding[0] - 14;
      doc.addImage(resources.logo.data, x - width / 2, y, width, height);
    }
    /**
     * Footer
     */


    doc.setFontSize(9);
    str = $translate.instant('INVOICE.ALTERNATE.FOOTER', {
      company: $rootScope.wlLinks.companyName
    });
    x = doc.getTextWidth(str) + 25;
    doc.setFillColor(255, 255, 255); // white frame space

    doc.rect(pageWidth / 2 - x / 2, pageHeight - margin.bottom + padding[2] - 1, x, 2, 'F');
    x = (pageWidth - doc.getTextWidth(str)) / 2;
    y = pageHeight - margin.bottom + padding[2] + 3;
    doc.text(str, x, y);
    if (data.pageCount !== 1) return; // invoice details on 1st page only

    x = margin.left;
    y = margin.top + 10;
    doc.setFontSize(11);
    doc.setFont(doc.getFont().fontName, 'normal');
    /**
     * Details
     */
    // Date

    str = $translate.instant('INVOICE.HEADER.DATE') + ': ' + $filter('date')(config.date || config.endDate, 'mediumDate');
    doc.text(str, x, y);
    y += 26; // Company

    doc.text(config.userCompany || '', x, y);
    y += 13; // Address

    if (config.address) {
      doc.text(config.address.street || '', x, y);
      y += 13;
      doc.text([config.address.city, config.address.state.name || config.address.state, config.address.zip].join(', '), x, y);
      y += 26;
    }
    /**
     * Text
     */


    doc.text('Dear ' + (config.userName || '') + ',', x, y);
    y += 26;
    doc.text('This is your invoice for membership charges for the coming month.', x, y);
    y += 26; // doc.text('Your credit card ending in XXXX-XXXX-XXXX-XXXX will be charged in a few days.', x, y);

    doc.text('Your billing method will be charged in a few days.', x, y);
    y += 26;
    doc.setFont(doc.getFont().fontName, 'bold');
    doc.text('ORDER ID: ' + config.orderId, x, y); // y += 26;

    doc.setFont(doc.getFont().fontName, 'normal');
  }
}]));

/***/ }),

/***/ "./bundles/invoice/alternate/invoice-styles.service.js":
/*!*************************************************************!*\
  !*** ./bundles/invoice/alternate/invoice-styles.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");

/**
 * invoiceStyles service - defines PDF styling for invoices
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.alternateInvoiceStyles', ['deskworks.helper', shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_0__["default"].name]).factory('alternateInvoiceStyles', ["helper", "reportStyles", function (helper, reportStyles) {
  var styles = angular.copy(reportStyles);
  styles.framePadding = [12, 12, 12, 12];
  styles.pageMargins = [52, 40, 40, 40];
  styles.startY = 250;
  styles.header.textColor = '#000000';
  styles.bodyStyles.lineWidth = 1;
  styles.bodyStyles.lineColor = 0;
  styles.bodyStyles.cellPadding = 8;
  styles.bodyStyles.fontSize = 11;
  styles.headStyles = {
    fontSize: 11,
    fontStyle: 'bold',
    valign: 'middle',
    fillColor: null,
    textColor: 0,
    cellPadding: 8,
    textTransform: null,
    lineWidth: 1,
    lineColor: 0
  };
  styles.h1 = {
    halign: 'right',
    fontStyle: 'bold'
  };
  styles.h2 = {
    fontStyle: 'bold'
  };
  styles.h3 = {
    halign: 'right'
  };
  return styles;
}]));

/***/ }),

/***/ "./bundles/invoice/common/invoice-helper.service.js":
/*!**********************************************************!*\
  !*** ./bundles/invoice/common/invoice-helper.service.js ***!
  \**********************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.invoiceHelper', []).factory('invoiceHelper', ["$translate", "$filter", function ($translate, $filter) {
  var knownTypes = ['recurring', 'rental', 'deposit', 'payment', 'refund']; // 'other' and unknown -> other section

  var types = [{
    id: 'recurring',
    _name: 'INVOICE.RECURRING',
    filter: function filter(i) {
      return i.type === 'recurring';
    }
  }, {
    id: 'rental',
    _name: 'INVOICE.RENTAL',
    filter: function filter(i) {
      return i.type === 'rental';
    }
  }, {
    id: 'deposit',
    _name: 'INVOICE.DEPOSITS',
    filter: function filter(i) {
      return i.type === 'deposit';
    }
  }, {
    id: 'other',
    _name: 'INVOICE.OTHER_CHARGES',
    filter: function filter(i) {
      return knownTypes.indexOf(i.type) < 0;
    }
  }, {
    id: 'payment',
    _name: 'INVOICE.PAYMENTS',
    filter: function filter(i) {
      return i.type === 'payment';
    }
  }, {
    id: 'refund',
    _name: 'INVOICE.REFUNDS',
    filter: function filter(i) {
      return i.type === 'refund';
    }
  }];
  return {
    getGroup: getGroup,
    getChargesTotal: getChargesTotal,
    getTaxTotals: getTaxTotals,
    getBalance: getBalance,
    getLogoSize: getLogoSize
  };
  /**
   * Get items group with name and total
   * @param items
   * @param type
   * @returns {{total: *, name: (string|Object), items: *}}
   */

  function getGroup(_ref) {
    var items = _ref.items,
        type = _ref.type;
    type = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(types).call(types, function (i) {
      return i.id === type;
    });
    items = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(items).call(items, function (i) {
      return i.include && _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(type).call(type, i);
    });
    return {
      name: $translate.instant(type._name),
      items: items,
      total: items.reduce(function (sum, i) {
        return sum + +i.amount;
      }, 0)
    };
  }
  /**
   * Get total for all charges
   * @param items
   * @returns {*}
   */


  function getChargesTotal(items) {
    return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(items).call(items, function (item) {
      return item.include && item.type !== 'payment' && item.type !== 'refund';
    }).reduce(function (sum, item) {
      return sum + (+item.amount || 0);
    }, 0);
  }
  /**
   * Get tax totals
   * @param items
   * @returns {Array}
   */


  function getTaxTotals(items) {
    var taxTotals = [];

    _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(items).call(items, function (item) {
      return item.include && item.type !== 'payment' && item.type !== 'refund';
    }).forEach(function (item) {
      angular.forEach(item.taxes, function (tax, idx) {
        if (taxTotals.length <= idx) taxTotals.push({
          name: tax.taxName,
          amount: 0
        });
        taxTotals[idx].amount += +tax.taxAmount;
      });
    });

    return taxTotals;
  }
  /**
   * Get total balance
   * @param items
   * @returns {*}
   */


  function getBalance(items) {
    var totalCharges = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(items).call(items, function (item) {
      return item.include && item.type !== 'payment' && item.type !== 'refund';
    }).reduce(function (sum, item) {
      return sum + (+item.amount || 0);
    }, 0);

    var balance = totalCharges + items.reduce(function (sum, item) {
      return item.include && (item.type === 'payment' || item.type === 'refund') ? sum + (+item.amount || 0) : sum;
    }, 0);
    getTaxTotals(items).forEach(function (taxTotal) {
      balance += taxTotal.amount || 0;
    });
    return balance;
  }
  /**
   * Get scaled logo size
   * @param resources
   * @returns {{ width: number, height: number }}
   */


  function getLogoSize(_ref2) {
    var resources = _ref2.resources;
    var width = 0,
        height = 0;

    if (resources.logo) {
      width = 140;
      height = 80;
      var dx = width / resources.logo.width;
      var dy = height / resources.logo.height;
      if (dx <= dy) height *= dx / dy;else width *= dy / dx;
    }

    return {
      width: width,
      height: height
    };
  }
}]));

/***/ })

}]);
//# sourceMappingURL=invoice-alternate~._bundles_invoice_a.js.map?_rev=b958a1dd79b0238dcfe5