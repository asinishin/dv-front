(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-standard~._bundles_invoice_c"],{

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

/***/ }),

/***/ "./bundles/invoice/standard/index.js":
/*!*******************************************!*\
  !*** ./bundles/invoice/standard/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoice_styles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-styles.service */ "./bundles/invoice/standard/invoice-styles.service.js");
/* harmony import */ var _invoice_columns_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-columns.service */ "./bundles/invoice/standard/invoice-columns.service.js");
/* harmony import */ var _invoice_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-header.service */ "./bundles/invoice/standard/invoice-header.service.js");
/* harmony import */ var _invoice_body_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice-body.service */ "./bundles/invoice/standard/invoice-body.service.js");




var index = ['$injector', function index($injector) {
  $injector.loadNewModules([_invoice_styles_service__WEBPACK_IMPORTED_MODULE_0__["default"].name, _invoice_columns_service__WEBPACK_IMPORTED_MODULE_1__["default"].name, _invoice_header_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, _invoice_body_service__WEBPACK_IMPORTED_MODULE_3__["default"].name]);
  return {
    styles: $injector.get('invoiceStyles'),
    columns: $injector.get('invoiceColumns'),
    header: $injector.get('invoiceHeader'),
    body: $injector.get('invoiceBody')
  };
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/invoice/standard/invoice-body.service.js":
/*!**********************************************************!*\
  !*** ./bundles/invoice/standard/invoice-body.service.js ***!
  \**********************************************************/
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
/* harmony import */ var _invoice_styles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice-styles.service */ "./bundles/invoice/standard/invoice-styles.service.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.invoiceBody', [_common_invoice_helper_service__WEBPACK_IMPORTED_MODULE_3__["default"].name, _invoice_styles_service__WEBPACK_IMPORTED_MODULE_4__["default"].name]).factory('invoiceBody', ["$translate", "$filter", "invoiceHelper", "invoiceStyles", function ($translate, $filter, invoiceHelper, invoiceStyles) {
  return dataToReport;

  function dataToReport(_ref) {
    var params = _ref.params,
        data = _ref.data,
        columns = _ref.columns;
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
        content: $translate.instant('INVOICE.CHARGES') + ':',
        colSpan: report.columns.length - 1
      }, {
        content: $filter('ncurrency')(invoiceHelper.getChargesTotal(data.items))
      }]);
      report.styles.push(invoiceStyles.h1);
      taxTotals.forEach(function (taxTotal) {
        report.rows.push([{
          content: taxTotal.name + ':',
          colSpan: report.columns.length - 1
        }, {
          content: $filter('ncurrency')(taxTotal.amount)
        }]);
        report.styles.push(invoiceStyles.h1);
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
      content: $translate.instant('INVOICE.BALANCE') + ':',
      colSpan: report.columns.length - 1
    }, {
      content: $filter('ncurrency')(invoiceHelper.getBalance(data.items))
    }]);
    report.styles.push(invoiceStyles.h1);
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
      report.styles.push(invoiceStyles.h2);
      group.items.forEach(function (item, idx) {
        var _context;

        report.rows.push(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = report.columns).call(_context, function (col) {
          return item[col.dataKey];
        }));
        report.styles.push(idx % 2 ? null : invoiceStyles.rowOdd);
      });
      report.rows.push([{
        content: $translate.instant('INVOICE.SUBTOTAL') + ':',
        colSpan: report.columns.length - 1
      }, {
        content: $filter('ncurrency')(group.total)
      }]);
      report.styles.push(invoiceStyles.h3);
    }
  }
}]));

/***/ }),

/***/ "./bundles/invoice/standard/invoice-columns.service.js":
/*!*************************************************************!*\
  !*** ./bundles/invoice/standard/invoice-columns.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Columns for Invoice
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.invoiceColumns', []).factory('invoiceColumns', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  var cols = [{
    dataKey: 'date',
    _title: 'INVOICE.COLUMNS.DATE',
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
      minCellWidth: 150
    }
  }, {
    dataKey: 'description',
    _title: 'INVOICE.COLUMNS.DESCRIPTION',
    include: true,
    styles: {
      minCellWidth: 150
    }
  }, {
    dataKey: 'price',
    _title: 'INVOICE.COLUMNS.RATE',
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
    _title: 'INVOICE.COLUMNS.QTY',
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

/***/ "./bundles/invoice/standard/invoice-header.service.js":
/*!************************************************************!*\
  !*** ./bundles/invoice/standard/invoice-header.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _invoice_styles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-styles.service */ "./bundles/invoice/standard/invoice-styles.service.js");



/**
 * PDF Invoice Header
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.invoiceHeader', [_invoice_styles_service__WEBPACK_IMPORTED_MODULE_2__["default"].name]).factory('invoiceHeader', ["$filter", "$translate", "invoiceStyles", function ($filter, $translate, invoiceStyles) {
  return header;

  function header(args) {
    var _context;

    var config = args.config,
        doc = args.doc,
        data = args.data,
        resources = args.resources;

    var center = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context = resources.centers).call(_context, function (i) {
      return i.id === config.centerId;
    });

    var str, x, y;
    var pageWidth = doc.internal.pageSize.width;
    doc.setFont(doc.getFont().fontName, 'normal');
    doc.setTextColor(invoiceStyles.header.textColor);
    /**
     * Report Name
     */

    doc.setFontSize(14);
    str = config.reportName.toUpperCase();
    x = (pageWidth - doc.getTextWidth(str)) / 2;
    y = 40;
    doc.text(str, x, y);
    /**
     * Invoice Details
     */

    if (data.pageCount !== 1) return; // invoice details on 1st page only

    doc.setFontSize(10);
    doc.setFont(doc.getFont().fontName, 'normal');
    x = data.settings.margin.left;
    y = 60;
    doc.text(center.name, x, y);
    y += 12;
    doc.text(center.street1 || '', x, y);

    if (center.street2) {
      y += 12;
      doc.text(center.street2 || '', x, y);
    }

    y += 12;
    doc.text([center.city, center.state.name || center.state, center.zip].join(', '), x, y);
    y += 12;
    doc.text($translate.instant('INVOICE.HEADER.PHONE').toUpperCase() + ': ' + center.phone, x, y);

    if (center.taxId) {
      y += 12;
      doc.text($translate.instant('INVOICE.HEADER.TAX_ID').toUpperCase() + ': ' + center.taxId, x, y);
    }

    var secondBlockY = y + 18;
    /**
     * Logo
     */

    if (resources.logo) {
      x = pageWidth - data.settings.margin.right;
      y = 50;
      var w = 140,
          h = 50;
      var dx = w / resources.logo.width;
      var dy = h / resources.logo.height;
      if (dx <= dy) h *= dx / dy;else w *= dy / dx;
      doc.addImage(resources.logo.data, x - w, y, w, h);
    }
    /**
     * Bill To
     */


    doc.setFontSize(8);
    doc.setFont(doc.getFont().fontName, 'bold');
    x = data.settings.margin.left;
    y = secondBlockY;
    doc.text($translate.instant('INVOICE.HEADER.BILL_TO').toUpperCase() + ':', x, y);
    doc.setFontSize(10);
    doc.setFont(doc.getFont().fontName, 'normal');
    y += 12;
    doc.text(config.userName || '', x, y);
    y += 12;
    doc.text(config.userCompany || '', x, y);

    if (config.address) {
      y += 12;
      doc.text(config.address.street || '', x, y);
      y += 12;
      doc.text([config.address.city, config.address.state.name || config.address.state, config.address.zip].join(', '), x, y);
    }
    /**
     * Dates
     */


    x = pageWidth - data.settings.margin.right;
    y = secondBlockY;
    doc.setFontSize(8);
    doc.setFont(doc.getFont().fontName, 'bold');
    str = $translate.instant('INVOICE.HEADER.DATE').toUpperCase() + ':';
    doc.text(str, x - doc.getTextWidth(str), y);
    doc.setFontSize(10);
    doc.setFont(doc.getFont().fontName, 'normal');
    y += 12;
    str = $filter('date')(config.date || config.endDate, 'mediumDate');
    doc.text(str, x - doc.getTextWidth(str), y);
    y += 12;
    doc.setFontSize(8);
    doc.setFont(doc.getFont().fontName, 'bold');
    str = $translate.instant('INVOICE.HEADER.DUE_DATE').toUpperCase() + ':';
    doc.text(str, x - doc.getTextWidth(str), y);
    doc.setFontSize(10);
    doc.setFont(doc.getFont().fontName, 'normal');
    y += 12;
    str = $filter('date')(config.dueDate, 'mediumDate');
    doc.text(str, x - doc.getTextWidth(str), y);
  }
}]));

/***/ }),

/***/ "./bundles/invoice/standard/invoice-styles.service.js":
/*!************************************************************!*\
  !*** ./bundles/invoice/standard/invoice-styles.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/reports/services/report-styles.service */ "./shared/reports/services/report-styles.service.js");

/**
 * invoiceStyles service - defines PDF styling for invoices
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.invoiceStyles', ['deskworks.helper', shared_reports_services_report_styles_service__WEBPACK_IMPORTED_MODULE_0__["default"].name]).factory('invoiceStyles', ["helper", "reportStyles", function (helper, reportStyles) {
  var invoiceStyles = angular.copy(reportStyles);
  invoiceStyles.pageMargins[0] = 50; // reduce top margin due to simple header

  invoiceStyles.pageMargins[2] = 30; // reduce bottom margin due to lack of footer

  invoiceStyles.startY = 170;
  invoiceStyles.header.textColor = '#000000';
  invoiceStyles.headStyles = {
    fontSize: 9,
    fontStyle: 'normal',
    valign: 'middle',
    fillColor: 100,
    textColor: 255
  };
  invoiceStyles.h1 = {
    fontStyle: 'bold',
    textColor: 0,
    borderWidth: 1,
    borderColor: [0, 0, 0]
  };
  invoiceStyles.h2 = {
    fontStyle: 'bold',
    textColor: 0,
    borderWidth: 1,
    borderColor: [180, 180, 180]
  };
  return invoiceStyles;
}]));

/***/ })

}]);
//# sourceMappingURL=invoice-standard~._bundles_invoice_c.js.map?_rev=a7ae691456dfdcbcfd2f