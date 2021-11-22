(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory~._b"],{

/***/ "./bundles/inventory sync recursive .*\\.tpl\\.html$":
/*!***********************************************!*\
  !*** ./bundles/inventory sync .*\.tpl\.html$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./discount-codes/discount-code-edit.tpl.html": "./bundles/inventory/discount-codes/discount-code-edit.tpl.html",
	"./discount-codes/discount-codes.tpl.html": "./bundles/inventory/discount-codes/discount-codes.tpl.html",
	"./membership-category/membership-category-edit.tpl.html": "./bundles/inventory/membership-category/membership-category-edit.tpl.html",
	"./membership-category/membership-category-list.tpl.html": "./bundles/inventory/membership-category/membership-category-list.tpl.html",
	"./price-list/price-list-edit.tpl.html": "./bundles/inventory/price-list/price-list-edit.tpl.html",
	"./price-list/price-list-list.tpl.html": "./bundles/inventory/price-list/price-list-list.tpl.html",
	"./product-categories/product-categories.tpl.html": "./bundles/inventory/product-categories/product-categories.tpl.html",
	"./product/product-edit.tpl.html": "./bundles/inventory/product/product-edit.tpl.html",
	"./product/product-list.tpl.html": "./bundles/inventory/product/product-list.tpl.html",
	"./reservation-category/reservation-category-edit.tpl.html": "./bundles/inventory/reservation-category/reservation-category-edit.tpl.html",
	"./reservation-category/reservation-category-list.tpl.html": "./bundles/inventory/reservation-category/reservation-category-list.tpl.html",
	"./reservation-unit/reservation-unit-edit.tpl.html": "./bundles/inventory/reservation-unit/reservation-unit-edit.tpl.html",
	"./reservation-unit/reservation-unit-list.tpl.html": "./bundles/inventory/reservation-unit/reservation-unit-list.tpl.html"
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
webpackContext.id = "./bundles/inventory sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/inventory sync recursive \\..+\\/.+\\.js$":
/*!**********************************************!*\
  !*** ./bundles/inventory sync \..+\/.+\.js$ ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./discount-codes/discount-code-edit.controller.js": "./bundles/inventory/discount-codes/discount-code-edit.controller.js",
	"./discount-codes/discount-code.service.js": "./bundles/inventory/discount-codes/discount-code.service.js",
	"./discount-codes/discount-codes.controller.js": "./bundles/inventory/discount-codes/discount-codes.controller.js",
	"./membership-category/membership-category-edit.controller.js": "./bundles/inventory/membership-category/membership-category-edit.controller.js",
	"./membership-category/membership-category-list.controller.js": "./bundles/inventory/membership-category/membership-category-list.controller.js",
	"./price-list/price-list-edit.controller.js": "./bundles/inventory/price-list/price-list-edit.controller.js",
	"./price-list/price-list-list.controller.js": "./bundles/inventory/price-list/price-list-list.controller.js",
	"./product-categories/product-categories.controller.js": "./bundles/inventory/product-categories/product-categories.controller.js",
	"./product/product-edit.controller.js": "./bundles/inventory/product/product-edit.controller.js",
	"./product/product-list.controller.js": "./bundles/inventory/product/product-list.controller.js",
	"./reservation-category/reservation-category-edit.controller.js": "./bundles/inventory/reservation-category/reservation-category-edit.controller.js",
	"./reservation-category/reservation-category-list.controller.js": "./bundles/inventory/reservation-category/reservation-category-list.controller.js",
	"./reservation-unit/reservation-unit-edit.controller.js": "./bundles/inventory/reservation-unit/reservation-unit-edit.controller.js",
	"./reservation-unit/reservation-unit-list.controller.js": "./bundles/inventory/reservation-unit/reservation-unit-list.controller.js"
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
webpackContext.id = "./bundles/inventory sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/inventory/discount-codes/discount-code-edit.controller.js":
/*!***************************************************************************!*\
  !*** ./bundles/inventory/discount-codes/discount-code-edit.controller.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_autofocus_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/autofocus/autofocus.directive */ "./shared/autofocus/autofocus.directive.js");
/* harmony import */ var _discount_code_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discount-code.service */ "./bundles/inventory/discount-codes/discount-code.service.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('DiscountCodeEditCtrl', [shared_autofocus_autofocus_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, _discount_code_service__WEBPACK_IMPORTED_MODULE_4__["default"].name]).controller('DiscountCodeEditCtrl', ["$scope", "dwAlerts", "helper", "close", "centerId", "code", "products", "DiscountCode", function ($scope, dwAlerts, helper, close, centerId, code, products, DiscountCode) {
  var $ctrl = this;
  $scope.close = close;
  $ctrl.code = code;
  $ctrl.products = products;
  $ctrl.types = ['$', '%'];

  $ctrl.getProducts = function (prodId) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.products).call(_context, function (p) {
      var _context2;

      return !_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = $ctrl.code.productIds).call(_context2, function (id) {
        return id === p.id && id !== prodId;
      });
    });
  };
  /**
   * Add product
   */


  $ctrl.add = function () {
    $ctrl.code.productIds.push(null);
    $scope.form.$setDirty();
  };
  /**
   * Delete product
   */


  $ctrl.delete = function (index) {
    var _context3;

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = $ctrl.code.productIds).call(_context3, index, 1);

    $scope.form.$setDirty();
  };
  /**
   * Save discount code
   */


  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#discountCodeEdit')) return;
    return DiscountCode.save($ctrl.code, centerId).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save discount code.');
    }).then(function () {
      return $scope.form.$setPristine();
    }).then(function () {
      return close(true);
    });
  };
}]));

/***/ }),

/***/ "./bundles/inventory/discount-codes/discount-code-edit.tpl.html":
/*!**********************************************************************!*\
  !*** ./bundles/inventory/discount-codes/discount-code-edit.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"dw-modal\"> <div class=\"dw-modal-fade\" ng-click=\"close()\"></div> <form name=\"form\" class=\"dw-modal-dialog\" novalidate id=\"discountCodeEdit\" style=\"max-width:500px\"> <div class=\"ff-grid\"> <ff-header><span translate=\"DISCOUNT_CODES.EDIT.PAGE_TITLE\"></span></ff-header> <label flex=\"{sm: '1 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"DISCOUNT_CODES.CODE\"></req></ff-label> <ff-text name=\"code\" ff-model=\"$ctrl.code.code\" autofocus ff-required=\"true\" ff-validate-alert=\"{{ 'DISCOUNT_CODES.CODE' | translate }}\"></ff-text> </label> <label flex=\"{sm: '0 0 100px'}\" class=\"ff-row\"> <ff-label flex=\"{xs: '0 0 90px', sm: '0 0 50px'}\"><span translate=\"DISCOUNT_CODES.TYPE\"></span></ff-label> <ff-select name=\"type\" ff-model=\"$ctrl.code.type\" ff-options=\"opt for opt in $ctrl.types\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"DISCOUNT_CODES.DESCRIPTION\"></req></ff-label> <ff-text name=\"description\" ff-model=\"$ctrl.code.description\" ff-required=\"true\" ff-validate-alert=\"{{ 'DISCOUNT_CODES.DESCRIPTION' | translate }}\"></ff-text> </label> <label flex=\"{sm: '1 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 100px\"> <span> <req translate=\"DISCOUNT_CODES.AMOUNT\"></req> <ff-hint><span translate=\"DISCOUNT_CODES.AMOUNT.HINT\"></span></ff-hint> </span> </ff-label> <ff-price flex=\"0 0 50px\" name=\"amount\" ff-model=\"$ctrl.code.amount\" ff-required=\"true\" ff-validate-alert=\"{{ 'DISCOUNT_CODES.AMOUNT' | translate }}\"></ff-price> <ff-static></ff-static> </label> <label flex=\"{sm: '1 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 100px\"> <span> <req translate=\"DISCOUNT_CODES.DURATION\"></req> <ff-hint><span translate=\"DISCOUNT_CODES.DURATION.HINT\"></span></ff-hint> </span> </ff-label> <ff-number flex=\"0 0 50px\" name=\"duration\" ff-model=\"$ctrl.code.duration\" ff-required=\"true\" ff-validate-alert=\"{{ 'DISCOUNT_CODES.DURATION' | translate }}\"></ff-number> <ff-static></ff-static> </label> <label flex=\"{sm: '1 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 100px\"> <span> <req translate=\"DISCOUNT_CODES.START_DATE\"></req> <ff-hint><span translate=\"DISCOUNT_CODES.START_DATE.HINT\"></span></ff-hint> </span> </ff-label> <ff-date name=\"startDate\" ff-model=\"$ctrl.code.startDate\" ff-required=\"true\" ff-validate-alert=\"{{ 'DISCOUNT_CODES.START_DATE' | translate }}\"></ff-date> </label> <label flex=\"{sm: '1 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"DISCOUNT_CODES.END_DATE\"></req></ff-label> <ff-date name=\"endDate\" ff-model=\"$ctrl.code.endDate\" ff-required=\"true\" ff-validate-alert=\"{{ 'DISCOUNT_CODES.END_DATE' | translate }}\"></ff-date> </label> <ff-row> <ff-label flex=\"0 0 100px\"><span translate=\"DISCOUNT_CODES.APPLY_TO\"></span></ff-label> <ff-static> <span ng-if=\"!$ctrl.code.productIds.length\" translate=\"DISCOUNT_CODES.ALL_MEMBERSHIPS\"></span> <span ng-if=\"$ctrl.code.productIds.length\" translate=\"DISCOUNT_CODES.SELECTED_MEMBERSHIPS\"></span> </ff-static> <ff-btn-group flex=\"none\" class=\"buttons-row\"> <ff-btn sense=\"new\" size=\"xs\" ff-click=\"$ctrl.add()\" title=\"{{'GLOBAL.BTN_NEW' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> <ff-row ng-if=\"$ctrl.code.productIds.length\"> <ff-static flex=\"0 0 100px\"></ff-static> <ff-col> <ff-row ng-repeat=\"prodId in $ctrl.code.productIds track by $index\"> <ff-select ff-model=\"$ctrl.code.productIds[$index]\" ff-required=\"true\" ff-validate-alert=\"{{'DISCOUNT_CODES.MEMBERSHIP' | translate}}\" ff-options=\"p.id as p.name for p in $ctrl.getProducts(prodId)\"></ff-select> <ff-btn-group flex=\"none\" class=\"buttons-row\"> <ff-btn sense=\"delete\" size=\"xs\" ff-click=\"$ctrl.delete($index)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> </ff-col> </ff-row> <ff-btn-group class=\"ff-tmargin\"> <ff-btn sense=\"cancel\" ff-click=\"close(false)\"><span translate=\"GLOBAL.BTN_CANCEL\"></span></ff-btn> <ff-btn type=\"submit\" sense=\"ok\" ff-click=\"$ctrl.save()\" ff-disabled=\"form.$pristine\"><span translate=\"GLOBAL.BTN_SAVE\"></span></ff-btn> </ff-btn-group> </div> </form> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/discount-codes/discount-code.service.js":
/*!*******************************************************************!*\
  !*** ./bundles/inventory/discount-codes/discount-code.service.js ***!
  \*******************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.DiscountCode', ['ngResource', 'datesDeserializer', 'deskworks.config', 'deskworks.helper']).factory('DiscountCode', ["$resource", "$timeout", "$filter", "datesDeserializer", "deskworksConfig", "helper", function ($resource, $timeout, $filter, datesDeserializer, deskworksConfig, helper) {
  var desDates = datesDeserializer(['startDate', 'endDate']);

  var datesSerializer = function datesSerializer(obj, keys) {
    return keys.reduce(function (res, key) {
      return res[key] = $filter('date')(obj[key], 'yyyy-MM-dd'), res;
    }, {});
  };

  var serDates = function serDates(obj) {
    return datesSerializer(obj, ['startDate', 'endDate']);
  };

  var res = $resource(deskworksConfig.getApiAbsUrl('/discount-codes/:id'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [desDates]
    },
    update: {
      method: 'PUT'
    }
  });
  return {
    /**
     * @param params.centerId
     * @param params.offset
     * @param params.limit
     */
    query: function query(params) {
      return res.query(helper.pick(params, ['centerId', 'offset', 'limit'])).$promise;
    },
    save: function save(code, centerId) {
      var data = _objectSpread(_objectSpread({}, code), serDates(code, serDates(code)));

      if (data.id) return res.update({
        id: data.id
      }, data).$promise;
      return res.save({
        centerId: centerId
      }, data).$promise.then(function (result) {
        code.id = result.id;
      });
    },
    delete: function _delete(id) {
      return res.delete({
        id: id
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/inventory/discount-codes/discount-codes.controller.js":
/*!***********************************************************************!*\
  !*** ./bundles/inventory/discount-codes/discount-codes.controller.js ***!
  \***********************************************************************/
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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/dw-modal/dw-modal.service */ "./shared/dw-modal/dw-modal.service.js");
/* harmony import */ var _discount_code_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./discount-code.service */ "./bundles/inventory/discount-codes/discount-code.service.js");
/* harmony import */ var _discount_code_edit_controller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./discount-code-edit.controller */ "./bundles/inventory/discount-codes/discount-code-edit.controller.js");
/* harmony import */ var _discount_code_edit_tpl_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./discount-code-edit.tpl.html */ "./bundles/inventory/discount-codes/discount-code-edit.tpl.html");
/* harmony import */ var _discount_code_edit_tpl_html__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_discount_code_edit_tpl_html__WEBPACK_IMPORTED_MODULE_14__);









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.DiscountCodesCtrl', [shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_11__["default"].name, _discount_code_service__WEBPACK_IMPORTED_MODULE_12__["default"].name, _discount_code_edit_controller__WEBPACK_IMPORTED_MODULE_13__["default"].name, 'deskworks.inventory.product.service']).controller('DiscountCodesCtrl', ["$scope", "$translate", "state", "dwModal", "dwAlerts", "DiscountCode", "productService", function ($scope, $translate, state, dwModal, dwAlerts, DiscountCode, productService) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('DISCOUNT_CODES.PAGE_TITLE'));
  $ctrl.codes = [];
  $ctrl.params = {
    centerId: state.getCurrentCenterId(),
    offset: 0,
    limit: 50
  };
  /**
   * onInit
   */

  $ctrl.onInit = function () {
    $ctrl.fetch();
    productService.getProducts().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query products.');
    }).then(function (products) {
      $ctrl.products = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(products).call(products, function (p) {
        return p.type === 'membership';
      });
    });
  };
  /**
   * New discount code
   */


  $ctrl.new = function () {
    var code = {
      type: '$',
      duration: 1,
      startDate: moment().startOf('date'),
      endDate: moment().startOf('date').add(1, 'month'),
      productIds: []
    };
    return $ctrl.edit(code).then(function (result) {
      if (result) $ctrl.codes.unshift(code);
      sortCodes();
    });
  };
  /**
   * Edit discount code
   * @param code
   */


  $ctrl.edit = function (code) {
    var copy = _objectSpread({}, code);

    return dwModal.show({
      scope: $scope,
      template: _discount_code_edit_tpl_html__WEBPACK_IMPORTED_MODULE_14___default.a,
      controller: 'DiscountCodeEditCtrl as $ctrl',
      inputs: {
        centerId: $ctrl.params.centerId,
        code: copy,
        products: $ctrl.products
      }
    }).then(function (modal) {
      return modal.close;
    }).then(function (result) {
      if (result) {
        angular.extend(code, copy);
        sortCodes();
      }

      return result;
    });
  };
  /**
   * Delete discount code
   * @param code
   */


  $ctrl.delete = function (code) {
    return DiscountCode.delete(code.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete discount code.');
    }).then(function () {
      var _context;

      return _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_9___default()(_context = $ctrl.codes).call(_context, $ctrl.codes.indexOf(code), 1);
    });
  };
  /**
   * Fetch discount codes
   */


  $ctrl.fetch = function () {
    if ($ctrl.eof || $ctrl.fetching) return $ctrl.fetching;
    $ctrl.fetching = DiscountCode.query($ctrl.params).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query discount codes.');
    }).finally(function () {
      $ctrl.fetching = null;
    }).then(function (codes) {
      var _context2;

      $ctrl.codes = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default()(_context2 = $ctrl.codes).call(_context2, codes);
      sortCodes();
      $ctrl.params.offset = $ctrl.codes.length;
      $ctrl.eof = codes.length < $ctrl.params.limit;
    });
    return $ctrl.fetching;
  };
  /**
   * Bubble up active codes
   */


  function sortCodes() {
    var _context3, _context4;

    var today = moment().endOf('day');

    var active = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context3 = $ctrl.codes).call(_context3, function (code) {
      return today.isSameOrBefore(code.endDate);
    });

    var expired = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context4 = $ctrl.codes).call(_context4, function (code) {
      return today.isAfter(code.endDate);
    });

    $ctrl.codes = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_10___default()(active).call(active, expired);
    $ctrl.firstExpiredIdx = active.length;
  }

  $ctrl.onInit();
}]));

/***/ }),

/***/ "./bundles/inventory/discount-codes/discount-codes.tpl.html":
/*!******************************************************************!*\
  !*** ./bundles/inventory/discount-codes/discount-codes.tpl.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"discountCodes\" ff-bulk-read-only> <h4 class=\"page-title\" ng-bind=\"state.getPageTitle()\"></h4> <div class=\"gutter-v\" style=\"max-width:1024px\"> <ff-panel> <ff-header ng-if=\"$ctrl.codes.length && $ctrl.firstExpiredIdx > 0\"> <ff-row> <cell flex=\"2 1 80px\"><span translate=\"DISCOUNT_CODES.ACTIVE_CODES\"></span></cell> <cell flex=\"2 1 100px\" class=\"show-sm\"><span translate=\"DISCOUNT_CODES.DESCRIPTION\"></span></cell> <cell flex=\"0 1 80px\" class=\"ff-right\"><span translate=\"DISCOUNT_CODES.AMOUNT\"></span></cell> <cell flex=\"0 1 75px\" class=\"ff-center\"><span translate=\"DISCOUNT_CODES.DURATION\"></span></cell> <cell flex=\"0 1 120px\" class=\"ff-right show-md\"><span translate=\"DISCOUNT_CODES.START_DATE\"></span></cell> <cell flex=\"0 1 120px\" class=\"ff-right show-md\"><span translate=\"DISCOUNT_CODES.END_DATE\"></span></cell> <ff-btn-group flex=\"none\" class=\"buttons-row zero-height\"> <ff-btn sense=\"edit\" size=\"xs\"></ff-btn> <ff-btn sense=\"delete\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-col infinite-scroll=\"$ctrl.fetch()\" infinite-scroll-distance=\"2\" infinite-scroll-container=\"'.snap-content-scroller'\"> <ff-header ng-repeat-start=\"code in $ctrl.codes\" ng-if=\"$index === $ctrl.firstExpiredIdx\" style=\"margin-top:.5rem\"> <ff-row> <cell flex=\"2 1 80px\"><span translate=\"DISCOUNT_CODES.EXPIRED_CODES\"></span></cell> <cell flex=\"2 1 100px\" class=\"show-sm\"><span translate=\"DISCOUNT_CODES.DESCRIPTION\"></span></cell> <cell flex=\"0 1 80px\" class=\"ff-right\"><span translate=\"DISCOUNT_CODES.AMOUNT\"></span></cell> <cell flex=\"0 1 75px\" class=\"ff-center\"><span translate=\"DISCOUNT_CODES.DURATION\"></span></cell> <cell flex=\"0 1 120px\" class=\"ff-right show-md\"><span translate=\"DISCOUNT_CODES.START_DATE\"></span></cell> <cell flex=\"0 1 120px\" class=\"ff-right show-md\"><span translate=\"DISCOUNT_CODES.END_DATE\"></span></cell> <ff-btn-group flex=\"none\" class=\"buttons-row zero-height\"> <ff-btn sense=\"edit\" size=\"xs\"></ff-btn> <ff-btn sense=\"delete\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-row ng-repeat-end> <ff-static flex=\"2 1 80px\">{{code.code}}</ff-static> <ff-static flex=\"2 1 100px\" class=\"show-sm\">{{code.description}}</ff-static> <ff-static flex=\"0 1 80px\" class=\"ff-right\">{{code.type === '%' ? code.amount + '%' : code.amount | ncurrency}}</ff-static> <ff-static flex=\"0 1 75px\" class=\"ff-center\">{{code.duration}}</ff-static> <ff-static flex=\"0 1 120px\" class=\"ff-right show-md\">{{code.startDate | date: 'mediumDate'}}</ff-static> <ff-static flex=\"0 1 120px\" class=\"ff-right show-md\">{{code.endDate | date: 'mediumDate'}}</ff-static> <ff-btn-group flex=\"none\" class=\"buttons-row\"> <ff-btn sense=\"edit\" size=\"xs\" ff-click=\"$ctrl.edit(code)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> <ff-btn sense=\"delete\" size=\"xs\" ff-click=\"$ctrl.delete(code)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> <div class=\"ff-spin ff-spin-placeholder\" ng-if=\"$ctrl.fetching\"></div> </ff-col> <ff-row ng-if=\"!$ctrl.codes.length && !$ctrl.fetching\" class=\"ff-no-frame\"> <ff-label>{{'GLOBAL.NONE' | translate}}</ff-label> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"$ctrl.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/index.js":
/*!************************************!*\
  !*** ./bundles/inventory/index.js ***!
  \************************************/
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

  var js = importAll(__webpack_require__("./bundles/inventory sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/inventory sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/inventory/membership-category/membership-category-edit.controller.js":
/*!**************************************************************************************!*\
  !*** ./bundles/inventory/membership-category/membership-category-edit.controller.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory.membershipCategory.edit', ['keese', 'deskworks.inventory.membershipCategory.service']).controller('MembershipCategoryEditCtrl', ["$scope", "$route", "$translate", "dwAlerts", "keese", "state", "helper", "membershipCategories", "membershipCategoryService", function ($scope, $route, $translate, dwAlerts, keese, state, helper, membershipCategories, membershipCategoryService) {
  var vm = this;
  vm.category = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, membershipCategories, $route.current.params.membershipCategoryId) || {};
  if ($route.current.params.membershipCategoryId === 'new') vm.category.id = 'new';
  state.setPageTitle($translate.instant(vm.category.id === 'new' ? 'MEMBERSHIP_CATEGORIES.NEW.PAGE_TITLE' : 'MEMBERSHIP_CATEGORIES.EDIT.PAGE_TITLE'));
  /**
   * Save membership category handler
   */

  vm.save = function (form) {
    if (helper.pointFirstInvalid('#membershipCategory')) return;
    var data = {
      name: vm.category.name,
      note: vm.category.note
    };
    var promise;

    if (vm.category.id === 'new') {
      data.order = keese.generate(membershipCategories[membershipCategories.length - 1] && membershipCategories[membershipCategories.length - 1].order);
      promise = membershipCategoryService.create(data);
    } else {
      promise = membershipCategoryService.update(vm.category.id, data);
    }

    return promise.catch(function (err) {
      return dwAlerts.error(err, 'Failed to save membership category.');
    }).then(function (result) {
      form.$setPristine(true);

      if (vm.category.id === 'new') {
        return state.setPath('/membership-types/' + result.id);
      }
    });
  };
  /**
   * Remove membership category handler
   */


  vm.remove = function () {
    if (confirm($translate.instant('MEMBERSHIP_CATEGORIES.CONFIRM_DELETE'))) {
      return membershipCategoryService.delete(vm.category.id).catch(function (err) {
        return dwAlerts.error(err, 'Failed to remove membership category.');
      }).then(function () {
        return state.setPath('/membership-types');
      });
    }
  };
  /**
   * Back button handler
   */


  vm.back = function () {
    return state.setPath('/membership-types');
  };
}]));

/***/ }),

/***/ "./bundles/inventory/membership-category/membership-category-edit.tpl.html":
/*!*********************************************************************************!*\
  !*** ./bundles/inventory/membership-category/membership-category-edit.tpl.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"formMembershipCategory\" id=\"membershipCategory\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:600px\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 62px\"><req translate=\"MEMBERSHIP_CATEGORIES.NAME\"></req></ff-label> <ff-text name=\"name\" ff-model=\"vm.category.name\" ff-required=\"true\" ff-validate-alert=\"{{'MEMBERSHIP_CATEGORIES.NAME' | translate}}\"></ff-text> </label> <ff-row> <ff-textarea name=\"description\" ff-model=\"vm.category.note\" placeholder=\"{{'MEMBERSHIP_CATEGORIES.NAME' | translate}}\"></ff-textarea> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"vm.save(formMembershipCategory)\" ff-disabled=\"formMembershipCategory.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"remove\" ng-if=\"vm.category.id !== 'new'\" ff-click=\"vm.remove()\"> <span translate=\"GLOBAL.BTN_DELETE\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/membership-category/membership-category-list.controller.js":
/*!**************************************************************************************!*\
  !*** ./bundles/inventory/membership-category/membership-category-list.controller.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/drag-n-drop/dnd.service */ "./shared/drag-n-drop/dnd.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory.membershipCategory.list', ['deskworks.inventory.membershipCategory.service', shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_2__["default"].name]).controller('MembershipCategoryListCtrl', ["$scope", "$translate", "state", "dnd", "helper", "dwAlerts", "membershipCategories", "membershipCategoryService", function ($scope, $translate, state, dnd, helper, dwAlerts, membershipCategories, membershipCategoryService) {
  var vm = this;
  state.setPageTitle($translate.instant('MEMBERSHIP_CATEGORIES.PAGE_TITLE'));
  vm.membershipCategories = membershipCategories;
  /**
   * Edit Membership Category handler
   */

  vm.edit = function (category) {
    return state.setPath('/membership-types/' + category.id);
  };
  /**
   * New Membership Category handler
   */


  vm.new = function () {
    return state.setPath('/membership-types/new');
  };
  /**
   * Drop handler
   */


  vm.onDrop = function (srcList, srcIndex, targetList, targetIndex) {
    var item = dnd.move(srcList, srcIndex, targetList, targetIndex);
    item.$spin = true;
    membershipCategoryService.update(item.id, {
      order: item.order
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to reorder membership category.');
    }).finally(function () {
      return delete item.$spin;
    });
    return true; // true is required by dnd-callback of dnd-list
  };
}]));

/***/ }),

/***/ "./bundles/inventory/membership-category/membership-category-list.tpl.html":
/*!*********************************************************************************!*\
  !*** ./bundles/inventory/membership-category/membership-category-list.tpl.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"membership-categories\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:600px\"> <ff-header> <ff-row> <cell><span translate=\"MEMBERSHIP_CATEGORIES.LIST.HEADER\"></span></cell> <ff-hint flex=\"none\" ng-if=\"ffBlock.editMode\"><span translate=\"MEMBERSHIP_CATEGORIES.LIST.HINT\"></span></ff-hint> </ff-row> </ff-header> <span ng-if=\"!vm.membershipCategories.length\" translate=\"MEMBERSHIP_CATEGORIES.LIST.EMPTY\"></span> <div ng-if=\"ffBlock.editMode\" dnd-list dnd-drop=\"callback({ targetList: vm.membershipCategories, targetIndex: index })\"> <ff-row ng-repeat=\"category in vm.membershipCategories\" dnd-draggable=\"null\" ff-dim=\"category.$spin\" dnd-callback=\"vm.onDrop(vm.membershipCategories, $index, targetList, targetIndex)\" ng-include=\"'membershipCategoryTpl'\"> </ff-row> </div> <div ng-if=\"!ffBlock.editMode\"> <ff-row ng-repeat=\"category in vm.membershipCategories\" ng-include=\"'membershipCategoryTpl'\"></ff-row> </div> </ff-panel> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"vm.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> </div> <script type=\"text/ng-template\" id=\"membershipCategoryTpl\"> <ff-static ff-bind=\"category.name\"></ff-static>\n\n  <ff-btn-group flex=\"none\" class=\"buttons-row\">\n    <ff-btn sense=\"edit\" size=\"xs\" ff-click=\"vm.edit(category)\"><span translate=\"GLOBAL.BTN_EDIT\"></span></ff-btn>\n  </ff-btn-group> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/price-list/price-list-edit.controller.js":
/*!********************************************************************!*\
  !*** ./bundles/inventory/price-list/price-list-edit.controller.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory.priceList.edit', ['deskworks.inventory.priceList.service']).controller('PriceListEditCtrl', ["$scope", "$rootScope", "$filter", "$timeout", "$translate", "dwAlerts", "state", "helper", "priceList", "priceListService", "optsProductType", function ($scope, $rootScope, $filter, $timeout, $translate, dwAlerts, state, helper, priceList, priceListService, optsProductType) {
  var vm = this;
  state.setPageTitle($translate.instant(priceList.id === 'new' ? 'PRICE_LISTS.NEW.PAGE_TITLE' : 'PRICE_LISTS.EDIT.PAGE_TITLE'));
  vm.priceList = priceList;
  vm.useForOptions = [{
    id: 'members',
    name: $translate.instant('PRICE_LISTS.USE_FOR.MEMBERS')
  }, {
    id: 'nonMembers',
    name: $translate.instant('PRICE_LISTS.USE_FOR.NON_MEMBERS')
  }, {
    id: 'none',
    name: $translate.instant('PRICE_LISTS.USE_FOR.NONE')
  }];
  vm.priceList.useFor = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, vm.useForOptions, vm.priceList.useFor); // Need to deep-clone productTypes as we are going to modify it

  vm.productTypes = angular.copy(optsProductType);
  vm.productTypes.forEach(function (productType) {
    productType.products = [];
    productType.options = [];
  });
  vm.priceList.options.products.forEach(function (product) {
    var type = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, vm.productTypes, product.type);

    if (type) type.options.push(product);else console.warn('Product option of unknown type:', product);
  }); // Transform product.productId to product.product reference to options.products elements, sort products by types

  vm.priceList.products.forEach(function (product) {
    product.product = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, vm.priceList.options.products, product.productId);
    product.price = $filter('price')(product.price);

    if (angular.isDefined(product.reservationCredit)) {
      product.reservationCredit = $filter('price')(product.reservationCredit);
    }

    if (product.passQty === null) {
      product.passQty = 0;
    }

    var type = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, vm.productTypes, product.product.type);

    if (type) type.products.push(product);else console.warn('Product of unknown type:', product);
  });
  /**
   * Remove price list handler
   */

  vm.remove = function () {
    if (confirm($translate.instant('PRICE_LISTS.CONFIRM_DELETE'))) {
      return priceListService.deletePricelist(state.getCurrentCenterId(), vm.priceList.id).then(function () {
        return state.setPath('/pricelists');
      }).catch(function (err) {
        return dwAlerts.error(err, 'Failed to remove price list.');
      });
    }
  };
  /**
   * Save price list handler
   */


  vm.save = function () {
    if (helper.pointFirstInvalid('#priceListEdit')) return;
    var data = {
      name: vm.priceList.name,
      visibleForVisitors: vm.priceList.visibleForVisitors,
      useFor: vm.priceList.useFor ? vm.priceList.useFor.id : vm.priceList.useFor,
      isArchived: vm.priceList.isArchived
    };
    var promise;

    if (vm.priceList.id === 'new') {
      promise = priceListService.createPricelist(state.getCurrentCenterId(), data);
    } else {
      promise = priceListService.updatePricelist(state.getCurrentCenterId(), vm.priceList.id, data);
    }

    return promise.then(function (result) {
      vm.priceList.date = moment();
      vm.form.$setPristine();
      if (vm.priceList.id === 'new') return state.setPath('/pricelists/' + result.id);
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save price list.');
    });
  };
  /**
   * Back button handler
   */


  vm.back = function () {
    return state.setPath('/pricelists');
  };
  /**
   * Add Product handler
   */


  vm.addProduct = function (productType) {
    if (!productType.options.length) return dwAlerts.error($translate.instant('PRICE_LISTS.NO_PRODUCTS_ERROR'));
    var data = {
      id: 'new',
      productId: productType.options[0].id,
      product: productType.options[0],
      price: '',
      passQty: 0
    };
    productType.products.push(data); // Focus on new product

    $timeout(function () {
      var last = document.querySelector('#productType-' + productType.id + ' form:last-of-type');

      if (last) {
        last = last.querySelector('select:first-of-type');
        if (last) last.focus();
      }
    });
  };
  /**
   * Save Product handler
   */


  vm.saveProduct = function (product, form, index) {
    if (helper.pointFirstInvalid('#productForm-' + index)) return;
    var data = {
      productId: product.product.id,
      price: product.price
    };
    if (product.product.isCreditable) data.reservationCredit = product.reservationCredit;
    if (product.product.hasPasses) data.passQty = product.passQty;
    var promise;

    if (product.id === 'new') {
      promise = priceListService.createProduct(state.getCurrentCenterId(), vm.priceList.id, data);
    } else {
      promise = priceListService.updateProduct(state.getCurrentCenterId(), vm.priceList.id, product.id, data);
    }

    return promise.then(function (result) {
      if (product.id === 'new') product.id = result.id;
      form.$setPristine();
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save product.');
    });
  };
  /**
   * Remove product handler
   */


  vm.removeProduct = function (product, index, productType) {
    if (product.id === 'new') {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context = productType.products).call(_context, index, 1);
    } else {
      if (confirm($translate.instant('PRICE_LISTS.PRODUCTS.CONFIRM_DELETE'))) {
        return priceListService.deleteProduct(state.getCurrentCenterId(), vm.priceList.id, product.id).then(function () {
          var _context2;

          return _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = productType.products).call(_context2, index, 1);
        }).catch(function (err) {
          return dwAlerts.error(err, 'Failed to remove product.');
        });
      }
    }
  };
  /**
   * Redirect to list of price lists on changing current center
   */


  $scope.$watch('state.getCurrentCenterId()', function (nv, ov) {
    if (nv !== ov) state.setPath('/pricelists');
  });
}]));

/***/ }),

/***/ "./bundles/inventory/price-list/price-list-edit.tpl.html":
/*!***************************************************************!*\
  !*** ./bundles/inventory/price-list/price-list-edit.tpl.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"gutter-v\"> <form name=\"vm.form\" id=\"priceListEdit\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <ff-panel flex=\"{lg: '0 0 50%'}\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 160px\"><req translate=\"PRICE_LISTS.NAME\"></req></ff-label> <ff-text flex=\"1 1 200px\" ff-model=\"vm.priceList.name\" ff-required=\"true\" ff-validate-alert=\"{{'PRICE_LISTS.NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 160px\"><req translate=\"PRICE_LISTS.USE_FOR\"></req></ff-label> <ff-select flex=\"1 1 200px\" ff-model=\"vm.priceList.useFor\" ff-required=\"true\" ff-validate-alert=\"{{'PRICE_LISTS.USE_FOR' | translate}}\" ff-options=\"opt.name for opt in vm.useForOptions\"></ff-select> </label> <div class=\"ff-grid gutter-h-half\"> <label flex=\"none\"> <ff-checkbox ff-model=\"vm.priceList.visibleForVisitors\" ff-label=\"{{'PRICE_LISTS.VISIBLE_FOR_VISITORS_DURING_RESERVATION' | translate}}\"></ff-checkbox> </label> <ff-row flex=\"none\"> <label flex=\"none\"> <ff-checkbox ff-model=\"vm.priceList.isArchived\">{{'PRICE_LISTS.ARCHIVED' | translate}}</ff-checkbox> </label> <ff-static class=\"ff-no-frame\"><ff-hint>{{'PRICE_LISTS.ARCHIVED.HINT' | translate}}</ff-hint></ff-static> </ff-row> </div> </ff-panel> <ff-panel flex=\"{lg: '0 0 50%'}\" ng-if=\"vm.priceList.date\" class=\"ff-flex-start\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 100px\"><span translate=\"PRICE_LISTS.LAST_UPDATE\"></span></ff-label> <ff-static ff-bind=\"vm.priceList.date | date:'mediumDate'\"></ff-static> </label> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"vm.save()\" ff-disabled=\"vm.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"remove\" ff-click=\"vm.remove()\" ng-if=\"vm.priceList.id !== 'new'\"> <span translate=\"GLOBAL.BTN_DELETE\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> <ff-panel ng-repeat=\"productType in vm.productTypes\" id=\"productType-{{productType.id}}\" ff-bulk-read-only ng-if=\"vm.priceList.id !== 'new'\"> <ff-panel-header>{{productType.name}}</ff-panel-header> <span ng-if=\"!productType.products.length\" translate=\"GLOBAL.NONE\"></span> <ff-btn-group class=\"ff-section-buttons\"> <ff-btn sense=\"add\" size=\"sm\" ff-click=\"vm.addProduct(productType)\"> <span translate=\"PRICE_LISTS.PRODUCTS.BTN_ADD\"></span> </ff-btn> </ff-btn-group> <ff-header ng-show=\"productType.products.length > 0\"> <ff-row> <cell><req translate=\"PRICE_LISTS.PRODUCTS.PRODUCT\"></req></cell> <cell flex=\"0 0 60px\" class=\"ff-right\"><req translate=\"PRICE_LISTS.PRODUCTS.PRICE\"></req></cell> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row zero-height\"> <ff-btn sense=\"save\" size=\"xs\"></ff-btn> <ff-btn sense=\"remove\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <form name=\"productForm\" id=\"productForm-{{$index}}\" ng-repeat=\"product in productType.products\"> <ff-row> <ff-select flex=\"1 1 80px\" ff-attr-name=\"{ 'product' }\" ff-model=\"product.product\" ff-required=\"true\" ff-validate-alert=\"{{'PRICE_LISTS.PRODUCTS.PRODUCT' | translate}}\" ff-unique=\"{ array: productType.products, prop: 'product' }\" ff-model-options=\"{ allowInvalid: true }\" ff-options=\"product.name for product in productType.options\"> </ff-select> <label flex=\"{xs: '0 1 80px', md: '0 1 106px'}\" class=\"ff-row\" ng-if=\"product.product.hasPasses\"> <ff-label flex=\"none\"><req translate=\"PRICE_LISTS.PRODUCTS.PASSES\"></req></ff-label> <ff-number ff-model=\"product.passQty\" ff-required=\"true\" class=\"ff-right\" ff-validate-alert=\"{{'PRICE_LISTS.PRODUCTS.PASSES' | translate}}\"></ff-number> </label> <label flex=\"0 1 106px\" class=\"ff-row\" ng-if=\"product.product.isCreditable\"> <ff-label flex=\"0 0 48px\"><req translate=\"PRICE_LISTS.PRODUCTS.CREDIT\"></req></ff-label> <ff-price class=\"ff-right\" ff-model=\"product.reservationCredit\" ff-validate-alert=\"{{'PRICE_LISTS.PRODUCTS.CREDIT' | translate}}\"></ff-price> </label> <ff-price flex=\"0 0 60px\" class=\"ff-right\" ff-model=\"product.price\" ff-required=\"true\" ff-validate-alert=\"{{'PRICE_LISTS.PRODUCTS.PRICE' | translate}}\"></ff-price> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row\"> <ff-btn sense=\"save\" size=\"xs\" type=\"submit\" ff-click=\"vm.saveProduct(product, productForm, $index)\" ff-disabled=\"productForm.$pristine\" title=\"{{'GLOBAL.BTN_SAVE' | translate}}\"> </ff-btn> <ff-btn sense=\"remove\" size=\"xs\" ff-click=\"vm.removeProduct(product, $index, productType)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> </form> <ff-btn-group ng-show=\"productType.products.length > 0\" class=\"ff-section-buttons\"> <ff-btn sense=\"add\" size=\"sm\" ff-click=\"vm.addProduct(productType)\"> <span translate=\"PRICE_LISTS.PRODUCTS.BTN_ADD\"></span> </ff-btn> </ff-btn-group> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/price-list/price-list-list.controller.js":
/*!********************************************************************!*\
  !*** ./bundles/inventory/price-list/price-list-list.controller.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_dw_controls_dw_select_center_dw_select_center_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/dw-controls/dw-select-center/dw-select-center.directive */ "./shared/dw-controls/dw-select-center/dw-select-center.directive.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory.priceList.list', ['deskworks.inventory.priceList.service', shared_dw_controls_dw_select_center_dw_select_center_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name]).controller('PriceListListCtrl', ["$rootScope", "$scope", "$timeout", "$route", "$translate", "dwAlerts", "state", "helper", "priceLists", "centers", "priceListService", "lazyLoadReports", function ($rootScope, $scope, $timeout, $route, $translate, dwAlerts, state, helper, priceLists, centers, priceListService, lazyLoadReports) {
  var vm = this;
  state.setPageTitle($translate.instant('PRICE_LISTS.PAGE_TITLE'));
  vm.centers = centers;
  vm.dstCenterId = state.getCurrentCenterId();
  vm.priceLists = priceLists;
  vm.priceLists.forEach(function (pl) {
    pl.include = true;
  });
  vm.editAfterCloning = true;
  vm.printCollapsed = true;
  /**
   * Edit price list handler
   */

  vm.edit = function (pl) {
    return state.setPath('/pricelists/' + pl.id);
  };
  /**
   * Clone price list handler
   */


  vm.clone = function (pl) {
    if (vm.centers.length > 1 && !vm.cloning) {
      vm.cloning = pl;
      return;
    }

    return priceListService.clonePricelist(state.getCurrentCenterId(), pl.id, vm.dstCenterId).then(function (result) {
      if (vm.editAfterCloning) {
        state.setCurrentCenterId(vm.dstCenterId);
        return state.setPath('/pricelists/' + result.id);
      } else {
        $route.reload();
        return $timeout(5000);
      }
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to copy price list.');
    });
  };
  /**
   * New price list handler
   */


  vm.new = function () {
    return state.setPath('/pricelists/new');
  };
  /**
   * Toggle Print price lists collapse
   */


  vm.togglePrint = function () {
    return lazyLoadReports.then(function () {
      vm.printCollapsed = !vm.printCollapsed;
    });
  }; // Due to route.reloadOnSearch: false


  $rootScope.$on('CHANGE-CENTER', function () {
    $route.reload();
  });
}]));

/***/ }),

/***/ "./bundles/inventory/price-list/price-list-list.tpl.html":
/*!***************************************************************!*\
  !*** ./bundles/inventory/price-list/price-list-list.tpl.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"inventoryPriceLists\" ng-if=\"!vm.cloning\" ff-bulk-read-only class=\"ff-bmargin\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel> <ff-header ng-if=\"vm.priceLists.length\"> <ff-row> <cell flex=\"0 0 36px\" ng-hide=\"vm.printCollapsed\" class=\"ff-center\" title=\"{{'PRICE_LISTS.LIST.PRINT' | translate}}\"> <ff-icon sense=\"print\"></ff-icon> </cell> <cell flex=\"1 1 70%\" translate=\"PRICE_LISTS.NAME\"></cell> <cell flex=\"0 0 15%\" class=\"ff-center\"><span translate=\"PRICE_LISTS.LAST_UPDATE\"></span></cell> <cell flex=\"0 0 15%\" class=\"ff-center\"><span translate=\"PRICE_LISTS.VISIBLE_FOR_VISITORS\"></span></cell> <cell flex=\"0 0 15%\" class=\"ff-center\"><span translate=\"PRICE_LISTS.ARCHIVED\"></span></cell> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row zero-height\"> <ff-btn sense=\"edit\" size=\"xs\"></ff-btn> <ff-btn sense=\"clone\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <span ng-if=\"!vm.priceLists.length\" translate=\"PRICE_LISTS.LIST.EMPTY\"></span> <ff-row ng-repeat=\"pl in vm.priceLists\"> <ff-static flex=\"0 0 36px\" class=\"ff-center\" ng-hide=\"vm.printCollapsed\"> <ff-checkbox class=\"ff-read-only-ignore\" ff-model=\"pl.include\"></ff-checkbox> </ff-static> <ff-static flex=\"1 1 70%\" ff-bind=\"pl.name\"></ff-static> <ff-static flex=\"0 0 15%\" class=\"ff-center\" ff-bind-html=\"pl.date | date:'mediumDate'\"></ff-static> <ff-static flex=\"0 0 15%\" class=\"ff-center\" ff-bind=\"pl.visibleForVisitors | yesno\"></ff-static> <ff-static flex=\"0 0 15%\" class=\"ff-center\" ff-bind=\"pl.isArchived | yesno\"></ff-static> <ff-btn-group flex=\"0 0 auto\" class=\"buttons-row\"> <ff-btn sense=\"edit\" size=\"xs\" ff-click=\"vm.edit(pl)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> <ff-btn sense=\"clone\" size=\"xs\" ff-click=\"vm.clone(pl)\" title=\"{{'PRICE_LISTS.LIST.BTN_CLONE' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"vm.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> <ff-btn sense=\"collapseBtn\" ff-click=\"vm.togglePrint()\" ng-class=\"{ collapsed: vm.printCollapsed }\" ff-disabled=\"!vm.priceLists.length\"><span translate=\"PRICE_LISTS.LIST.BTN_PRINT\"></span></ff-btn> </ff-btn-group> </div> <div ng-collapse=\"vm.printCollapsed\" class=\"ff-grid\"> <ng-include src=\"'price-list-report/price-list-report.tpl.html'\" class=\"ff-tmargin\"></ng-include> </div> </div> <form name=\"formClonePriceList\" id=\"clonePriceList\" ng-if=\"vm.cloning\" ff-bulk-read-only style=\"max-width:600px\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel> <ff-panel-header> <span translate=\"PRICE_LISTS.CLONE.HEADER\" translate-values=\"{ priceList: vm.cloning.name }\"></span> </ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 1 160px\"><span translate=\"PRICE_LISTS.CLONE.CENTER\"></span></ff-label> <dw-select-center flex=\"1 0 180px\" ff-model=\"vm.dstCenterId\"></dw-select-center> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 160px\" ff-model=\"vm.editAfterCloning\"><span translate=\"PRICE_LISTS.CLONE.EDIT\"></span></ff-label> <ff-static><ff-checkbox flex=\"0 0 30px\" ff-model=\"vm.editAfterCloning\"></ff-checkbox></ff-static> </label> </ff-panel> <ff-btn-group> <ff-btn type=\"submit\" sense=\"clone\" ff-click=\"vm.clone(vm.cloning)\"><span translate=\"PRICE_LISTS.LIST.BTN_CLONE\"></span></ff-btn> <ff-btn sense=\"cancel\" ff-click=\"vm.cloning = false\"><span translate=\"GLOBAL.BTN_CANCEL\"></span></ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/product-categories/product-categories.controller.js":
/*!*******************************************************************************!*\
  !*** ./bundles/inventory/product-categories/product-categories.controller.js ***!
  \*******************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ProductCategoriesCtrl', ['debounce', 'deskworks.ProductCategory']).controller('ProductCategoriesCtrl', ["$scope", "$translate", "dwAlerts", "state", "helper", "debounce", "categories", "ProductCategory", function ($scope, $translate, dwAlerts, state, helper, debounce, categories, ProductCategory) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('PRODUCT_CATEGORIES.PAGE_TITLE'));
  $ctrl.categories = categories;
  /**
   * Save handler
   */

  $ctrl.save = debounce(save, 1000);

  function save(category, form, index) {
    if (form.$invalid) return;
    category.$$spin = true;
    return ProductCategory.save(category).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save product category.');
    }).finally(function () {
      category.$$spin = false;
    });
  }
  /**
   * New handler
   */


  $ctrl.new = function () {
    return $ctrl.categories.push({});
  };
  /**
   * Delete handler
   */


  $ctrl.delete = function (category, index) {
    if (category.id) {
      // existing category
      if (!confirm($translate.instant('PRODUCT_CATEGORIES.CONFIRM_DELETE'))) return;
      category.$$spin = true;
      return ProductCategory.delete(category.id).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete product category.');
      }).then(function () {
        var _context;

        return _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.categories).call(_context, index, 1);
      }).finally(function () {
        category.$$spin = false;
      });
    } else {
      var _context2;

      // new category
      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = $ctrl.categories).call(_context2, index, 1);
    }
  };
}]));

/***/ }),

/***/ "./bundles/inventory/product-categories/product-categories.tpl.html":
/*!**************************************************************************!*\
  !*** ./bundles/inventory/product-categories/product-categories.tpl.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"productCategories\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-panel style=\"max-width:600px\" class=\"ff-bmargin\"> <ff-header> <ff-row> <cell class=\"ff-right\" flex=\"0 0 60px\"><req translate=\"PRODUCT_CATEGORIES.CODE\"></req></cell> <cell><span translate=\"PRODUCT_CATEGORIES.NAME\"></span></cell> <ff-hint flex=\"none\"><span translate=\"PRODUCT_CATEGORIES.HINT\"></span></ff-hint> </ff-row> </ff-header> <form name=\"form\" ng-repeat=\"category in $ctrl.categories\" novalidate> <ff-row ff-dim=\"category.$$spin\"> <ff-text name=\"productCategoryCode\" ff-model=\"category.code\" flex=\"0 0 60px\" class=\"ff-right\" ff-change=\"$ctrl.save(category, form, $index)\" placeholder=\"1-05\" ff-required=\"true\" ff-validate-alert=\"{{'PRODUCT_CATEGORIES.CODE' | translate}}\" ff-disabled=\"category.code === '0-00'\"></ff-text> <ff-text name=\"productCategoryName\" ff-model=\"category.name\" placeholder=\"Private Office\" ff-change=\"$ctrl.save(category, form, $index)\"></ff-text> <ff-btn-group flex=\"none\" class=\"buttons-row\"> <ff-btn sense=\"remove\" size=\"xs\" flex=\"0 0 auto\" ff-click=\"$ctrl.delete(category, $index)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\" ff-disabled=\"category.code === '0-00'\"></ff-btn> </ff-btn-group> </ff-row> </form> <ff-btn-group class=\"ff-section-buttons\"> <ff-btn sense=\"new\" size=\"sm\" ff-click=\"$ctrl.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/product/product-edit.controller.js":
/*!**************************************************************!*\
  !*** ./bundles/inventory/product/product-edit.controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_printer_usage_free_copies_printer_usage_free_copies_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/printer-usage-free-copies/printer-usage-free-copies.directive */ "./shared/printer-usage-free-copies/printer-usage-free-copies.directive.js");







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory.product.edit', ['deskworks.inventory.product.service', 'deskworks.inventory.optsCountCheckInsPer', 'deskworks.printerUsageFreeCopies']).controller('ProductEditCtrl', ["$scope", "$q", "$timeout", "$window", "$translate", "dwAlerts", "state", "helper", "product", "settings", "productService", "optsPassMin", "optsPassMax", "optsCountCheckInsPer", "productCategories", function ($scope, $q, $timeout, $window, $translate, dwAlerts, state, helper, product, settings, productService, optsPassMin, optsPassMax, optsCountCheckInsPer, productCategories) {
  var vm = this;
  state.setPageTitle($translate.instant(product.id ? 'PRODUCTS.EDIT.PAGE_TITLE' : 'PRODUCTS.NEW.PAGE_TITLE'));
  vm.settings = settings;
  vm.product = product;
  vm.optsPassMin = optsPassMin;
  vm.optsPassMax = optsPassMax;
  vm.optsCountCheckInsPer = optsCountCheckInsPer;
  vm.productCategories = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(productCategories).call(productCategories, function (cat) {
    return cat.code !== '0-00';
  });
  vm.productCategories.forEach(function (cat) {
    cat.fullName = helper.join([cat.name, '[' + cat.code + ']'], ' ');
  });
  vm.passMinUnit = settings.minPassInPercent ? 'pass' : 'time';

  if (!settings.minPassInPercent) {
    vm.optsPassMin = angular.copy(vm.optsPassMin);
    vm.optsPassMin.forEach(function (opt) {
      opt.name += ' hr';
    });
  } // Init passProducts


  vm.product.options.passProducts = [];
  productService.getProducts().then(function (products) {
    if (angular.isArray(products)) {
      products.forEach(function (product) {
        if (product.type === 'rental') {
          vm.product.options.passProducts.push(product);
        }
      });
      vm.product.passProduct = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default()(helper).call(helper, vm.product.options.passProducts, vm.product.passProductId);
    }
  });
  /**
   * Save Product handler
   */

  vm.save = function (form) {
    if (helper.pointFirstInvalid('#productEdit')) return;
    var promise,
        isNew = false;

    if (vm.product.id) {
      promise = $q.all([productService.updateProduct(vm.product).catch(function (err) {
        return dwAlerts.error(err, 'Failed to save product.');
      }), $q.when(vm.saveQuickBooks && vm.saveQuickBooks()), $q.when(vm.saveDoorflow && vm.saveDoorflow()), $q.when(vm.saveDeskworksSweep && vm.saveDeskworksSweep().catch(angular.noop))]);
    } else {
      isNew = true;
      promise = productService.createProduct(vm.product).catch(function (err) {
        return dwAlerts.error(err, 'Failed to save product.');
      }).then(function (result) {
        return vm.product.id = result.id, result;
      }).then(function (result) {
        return $timeout().then(function () {
          return result;
        });
      }).then(function (result) {
        return $q.when(vm.saveDeskworksSweep && vm.saveDeskworksSweep().catch(angular.noop)).then(function () {
          return result;
        });
      });
    }

    return promise.then(function (result) {
      form.$setPristine(true);
      if (isNew) return state.setPath('/products/' + result.id);
    });
  };
  /**
   * Remove Product handler
   */


  vm.remove = function () {
    if (confirm($translate.instant('PRODUCTS.CONFIRM_DELETE'))) {
      return productService.deleteProduct(vm.product.id).catch(function (err) {
        return dwAlerts.error(err, 'Failed to remove product.');
      }).then(function () {
        return state.setPath('/products');
      });
    }
  };
  /**
   * Back button handler
   */


  vm.back = function () {
    return state.setPath('/products');
  };
  /**
   * Add PriceList handler
   */


  vm.addPriceList = function () {
    var id = helper.uid();
    vm.product.priceLists.push({
      id: id,
      priceListsId: vm.product.options.priceLists[0].id,
      priceList: vm.product.options.priceLists[0],
      price: '',
      passQty: 0
    });
    helper.focus('#productPriceList-' + id + ' select:first-of-type');
  };
  /**
   * Save PriceList handler
   */


  vm.savePriceList = function (priceList, form) {
    if (helper.pointFirstInvalid('#productPriceList-' + priceList.id)) return;
    var data = {
      priceListId: priceList.priceList.id,
      price: priceList.price
    };

    if (vm.product.isCreditable) {
      data.reservationCredit = priceList.reservationCredit;
    }

    if (vm.product.hasPasses) {
      data.passQty = priceList.passQty;
    }

    return (helper.isUid(priceList.id) ? productService.createPriceList(vm.product.id, data) : productService.updatePriceList(vm.product.id, priceList.id, data)).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save price list.');
    }).then(function (result) {
      if (helper.isUid(priceList.id)) priceList.id = result.id;
      form.$setPristine(true);
      return result;
    });
  };
  /**
   * Remove PriceList handler
   */


  vm.removePriceList = function (priceList, index) {
    if (helper.isUid(priceList.id)) {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4___default()(_context = vm.product.priceLists).call(_context, index, 1);
    } else {
      return productService.deletePriceList(vm.product.id, priceList.id).catch(function (err) {
        return dwAlerts.error(err, 'Failed to remove price list.');
      }).then(function (result) {
        var _context2;

        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = vm.product.priceLists).call(_context2, index, 1);

        return result;
      });
    }
  };
  /**
   * Get direct URL to Member Sign Up wizard
   */


  vm.getMemberSignUpUrl = function () {
    var _context3, _context4;

    var origin = window.location.origin;
    var centerId = state.getCurrentCenterId();
    var productId = vm.product.id;
    return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context4 = "".concat(origin, "/member-sign-up-landing?center=")).call(_context4, centerId, "&productId=")).call(_context3, productId);
  };
}]));

/***/ }),

/***/ "./bundles/inventory/product/product-edit.tpl.html":
/*!*********************************************************!*\
  !*** ./bundles/inventory/product/product-edit.tpl.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"formProduct\" id=\"productEdit\" novalidate ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h-half\"> <ff-panel flex=\"{lg: '0 0 50%'}\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 92px\"><req translate=\"PRODUCTS.NAME\"></req></ff-label> <ff-text name=\"name\" ff-model=\"vm.product.name\" ff-required=\"true\" ff-maxlength=\"128\" ff-validate-alert=\"{{'PRODUCTS.NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 92px\"><span translate=\"PRODUCTS.DESCRIPTION\" style=\"margin-bottom:auto;padding:.3333rem 0\"></span></ff-label> <ff-textarea name=\"description\" ff-model=\"vm.product.description\" ff-maxlength=\"1024\" rowspan=\"3\" ff-validate-alert=\"{{'PRODUCTS.DESCRIPTION' | translate}}\"></ff-textarea> </label> <div class=\"ff-grid\"> <label flex=\"{sm: '0 0 65%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 92px\"><req translate=\"PRODUCTS.ITEM_CATEGORY\"></req></ff-label> <ff-select name=\"productCategory\" ff-model=\"vm.product.productCategoryId\" ff-options=\"opt.id as opt.fullName for opt in vm.productCategories\" ff-required=\"true\" ff-validate-alert=\"{{'PRODUCTS.ITEM_CATEGORY' | translate}}\"></ff-select> </label> <label flex=\"{sm: '0 0 35%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 92px\"><req translate=\"PRODUCTS.ITEM_NUMBER\"></req></ff-label> <ff-number name=\"productNumber\" ff-model=\"vm.product.productNumber\" placeholder=\"01\" ff-required=\"true\" ff-gte=\"0\" ff-lt=\"1000\" ff-validate-alert=\"{{'PRODUCTS.ITEM_NUMBER' | translate}}\"></ff-number> </label> </div> <quick-books-account product-id=\"vm.product.id\" save=\"vm.saveQuickBooks\" ng-if=\"vm.product.id\"></quick-books-account> <doorflow-access-group product-id=\"vm.product.id\" save=\"vm.saveDoorflow\" ng-if=\"vm.product.id && vm.product.type == 'membership'\"></doorflow-access-group> <label class=\"ff-row\" ng-if=\"vm.product.type.id === 'membership' && vm.product.showInSelfRegistration && vm.product.id\"> <ff-label flex=\"0 0 92px\"> <span translate=\"PRODUCTS.WEBSITE_LINK\"></span> <ff-hint><span translate=\"PRODUCTS.WEBSITE_LINK.HINT\"></span></ff-hint> </ff-label> <ff-static> <a href=\"{{vm.getMemberSignUpUrl()}}\" target=\"_blank\" rel=\"noopener\">{{vm.getMemberSignUpUrl()}}</a> </ff-static> </label> </ff-panel> <ff-panel flex=\"{lg: '0 0 50%'}\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 90px\"><req translate=\"PRODUCTS.PRODUCT_TYPE\"></req></ff-label> <ff-select name=\"productType\" ff-model=\"vm.product.type\" ff-required=\"true\" ff-validate-alert=\"{{'PRODUCTS.PRODUCT_TYPE' | translate}}\" ff-options=\"type.name for type in vm.product.options.productTypes\" ng-if=\"vm.product.typeId !== 'discount'\"></ff-select> <ff-static ng-if=\"vm.product.typeId === 'discount'\" class=\"disabled\">Discount</ff-static> </label> <label class=\"ff-row\" flex=\"1 1 50%\" ng-if=\"vm.product.type.id === 'membership' || vm.product.type.id === 'services'\"> <ff-label flex=\"0 0 90px\" ng-if=\"vm.product.type.id === 'membership'\"> <req translate=\"PRODUCTS.MEMBERSHIP_CATEGORY\"></req> </ff-label> <ff-select name=\"membershipType\" ff-model=\"vm.product.membershipType\" ff-required=\"true\" ng-if=\"vm.product.type.id === 'membership'\" ff-validate-alert=\"{{'PRODUCTS.MEMBERSHIP_CATEGORY' | translate}}\" ff-options=\"type.name for type in vm.product.options.membershipTypes\"></ff-select> </label> <label class=\"ff-row\" flex=\"1 1 50%\" ng-if=\"vm.product.type.id === 'membership' || vm.product.type.id === 'services'\"> <ff-label flex=\"0 0 90px\"> <req translate=\"PRODUCTS.BILLING_FREQUENCY\"></req> </ff-label> <ff-select name=\"billingFrequency\" ff-model=\"vm.product.billingFrequency\" ff-required=\"true\" ff-validate-alert=\"{{'PRODUCTS.BILLING_FREQUENCY' | translate}}\" ff-options=\"billingFrequency.name for billingFrequency in vm.product.options.billingFrequencies\"></ff-select> </label> <div class=\"ff-grid\" ng-if=\"vm.product.type.id === 'membership'\"> <label flex=\"{sm: '0 0 50%'}\" class=\"ff-row\"> <ff-checkbox name=\"isCreditable\" ff-model=\"vm.product.isCreditable\" class=\"ff-control\"> <span translate=\"PRODUCTS.IS_CREDITABLE\"></span> </ff-checkbox> </label> <label flex=\"{sm: '0 0 50%'}\" class=\"ff-row\"> <ff-checkbox name=\"hasPasses\" ff-model=\"vm.product.hasPasses\" class=\"ff-control\"> <span translate=\"PRODUCTS.HAS_PASSES\"></span> </ff-checkbox> </label> </div> <label class=\"ff-row\" ng-if=\"vm.product.type.id === 'membership'\"> <ff-label flex=\"1 0 50%\" ng-disabled=\"!vm.product.hasPasses\"> <req translate=\"PRODUCTS.PASS_PRODUCT\"></req> </ff-label> <ff-select flex=\"1 0 50%\" name=\"passProduct\" ff-model=\"vm.product.passProduct\" ff-disabled=\"!vm.product.hasPasses\" ff-required=\"vm.product.hasPasses\" ff-validate-alert=\"{{'PRODUCTS.PASS_PRODUCT' | translate}}\" ff-options=\"passProduct.name for passProduct in vm.product.options.passProducts\"></ff-select> </label> <div class=\"ff-grid\" ng-if=\"vm.product.type.id === 'membership'\"> <label flex=\"{sm: '0 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"0 0 50%\" ng-disabled=\"!vm.product.hasPasses\"> <req translate=\"PRODUCTS.COUNT_CHECK_INS_PER\"></req> </ff-label> <ff-select flex=\"1 0 50%\" name=\"countCheckInsPer\" ff-model=\"vm.product.countCheckInsPer\" ff-disabled=\"!vm.product.hasPasses\" ff-required=\"vm.product.hasPasses\" ff-validate-alert=\"{{'PRODUCTS.COUNT_CHECK_INS_PER' | translate}}\"> <option value=\"{{opt.id}}\" ng-repeat=\"opt in vm.optsCountCheckInsPer\">{{opt.name}}</option> </ff-select> </label> <label flex=\"{sm: '0 0 50%'}\" class=\"ff-row\"> <ff-checkbox name=\"reserveWithNonMemberRules\" ff-model=\"vm.product.reserveWithNonMemberRules\" class=\"ff-control\"> <span translate=\"PRODUCTS.ONLY_NON_MEMBER_HOURS\"></span> </ff-checkbox> </label> </div> <div class=\"ff-grid\" ng-if=\"vm.product.type.id === 'rental'\"> <label flex=\"{sm: '0 0 50%'}\" class=\"ff-row\"> <ff-checkbox name=\"allowReservationCredits\" ff-model=\"vm.product.allowReservationCredits\" class=\"ff-control\"> <span translate=\"PRODUCTS.ALLOW_RESERVATION_CREDITS\"></span> </ff-checkbox> </label> <label flex=\"{sm: '0 0 50%'}\" class=\"ff-row\"> <ff-checkbox name=\"canBuyOnSplashPage\" ff-model=\"vm.product.canBuyOnSplashPage\" class=\"ff-control\"> <span translate=\"PRODUCTS.BUY_ON_SPLASH_PAGE\"></span> </ff-checkbox> </label> </div> <div class=\"ff-grid\"> <label flex=\"{sm: '1 0 50%'}\" class=\"ff-row\"> <ff-checkbox name=\"taxable\" ff-model=\"vm.product.taxable\" class=\"ff-control\"> <span translate=\"PRODUCTS.TAXABLE\"></span> </ff-checkbox> </label> <label flex=\"{sm: '0 0 50%'}\" class=\"ff-row\" ng-if=\"vm.product.type.id === 'membership' || vm.product.type.id === 'services'\"> <ff-checkbox name=\"showInSelfRegistration\" ff-model=\"vm.product.showInSelfRegistration\" class=\"ff-control\"> <span translate=\"PRODUCTS.SHOW_FOR_SIGN_UP\"></span> </ff-checkbox> </label> </div> <div class=\"ff-grid\" ng-if=\"vm.product.type.id === 'membership'\"> <label flex=\"{sm: '1 0 50%'}\" class=\"ff-row\"> <ff-checkbox name=\"hasRegistrationFee\" ff-model=\"vm.product.hasRegistrationFee\" class=\"ff-control\"> <span translate=\"PRODUCTS.HAS_REGISTRATION_FEE\"></span> </ff-checkbox> </label> <label flex=\"{sm: '1 0 50%'}\" class=\"ff-row\" ng-if=\"vm.settings.enableSecurityDepositInMembershipProducts\"> <ff-label flex=\"0 1 180px\"><req translate=\"PRODUCTS.SECURITY_DEPOSIT_AMOUNT\"></req></ff-label> <ff-number name=\"securityDepositAmount\" flex=\"1 0 50px\" ff-model=\"vm.product.securityDepositAmount\" ff-required=\"true\" ff-gte=\"0\" ff-validate-alert=\"{{'PRODUCTS.SECURITY_DEPOSIT_AMOUNT' | translate}}\"></ff-number> </label> <label flex=\"{sm: '0 0 50%'}\"> <ff-checkbox name=\"trackAcrossAllCenters\" ff-model=\"vm.product.trackAcrossAllCenters\" class=\"ff-control\" ff-disabled=\"!vm.product.hasPasses\"> <span translate=\"PRODUCTS.TRACK_ACROSS_ALL_CENTERS\"></span> </ff-checkbox> </label> <deskworks-sweep-product product-id=\"vm.product.id\" save=\"vm.saveDeskworksSweep\"></deskworks-sweep-product> </div> <ff-row ng-if=\"vm.product.type.id === 'rental'\"> <label flex=\"1 0 50%\" class=\"ff-row\"> <ff-label flex=\"3 0 60px\"><req translate=\"PRODUCTS.PASS_SIZE\"></req></ff-label> <ff-number flex=\"1 1 10px\" name=\"passSize\" ff-model=\"vm.product.passSize\" ff-required=\"true\" ff-validate-alert=\"{{'PRODUCTS.PASS_SIZE' | translate}}\"></ff-number> </label> <ff-static flex=\"{xs: '0 0 0', sm: '0 0 50%'}\" ff-style=\"{'padding': 0}\"></ff-static> </ff-row> <div class=\"ff-grid\" ng-if=\"vm.product.type.id === 'rental'\"> <label flex=\"{sm: '0 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"3 0 60px\"><req translate=\"PRODUCTS.MIN_PASS\" translate-values=\"{ minPassUnit: vm.passMinUnit }\"></req></ff-label> <ff-select flex=\"1 1 10px\" name=\"passMin\" ff-model=\"vm.product.passMin\" ff-required=\"true\" ff-validate-alert=\"Min {{vm.passMinUnit}}\" ff-options=\"opt.id as opt.name for opt in vm.optsPassMin\"></ff-select> </label> <label flex=\"{sm: '0 0 50%'}\" class=\"ff-row\"> <ff-label flex=\"3 0 60px\"><req translate=\"PRODUCTS.MAX_PASS\"></req></ff-label> <ff-select flex=\"1 1 10px\" name=\"passMax\" ff-model=\"vm.product.passMax\" ff-required=\"true\" ff-options=\"max.name for max in vm.optsPassMax\" ff-validate-alert=\"{{'PRODUCTS.MAX_PASS' | translate}}\"></ff-select> </label> </div> <label class=\"ff-row\" ng-if=\"vm.product.type.id === 'rental'\"> <ff-label flex=\"1 1 220px\"><span translate=\"PRODUCTS.RESERVATION_CATEGORY\"></span></ff-label> <ff-select flex=\"1 1 344px\" name=\"reservationType\" ff-model=\"vm.product.reservationTypeId\"> <option value=\"\" translate=\"PRODUCTS.NO_RESERVATION_CATEGORY\"></option> <option ng-repeat=\"resType in vm.product.options.reservationTypes\" value=\"{{resType.id}}\">{{resType.name}}</option> </ff-select> </label> </ff-panel> <printer-usage-free-copies flex=\"{md: '0 0 50%'}\" style=\"margin-left:auto\" free-copies-settings=\"vm.product.printerUsageFreeCopiesSettings\" ng-if=\"vm.product.type.id === 'membership' && vm.product.printerUsageFreeCopiesSettings.length > 0\"></printer-usage-free-copies> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-disabled=\"formProduct.$pristine\" ff-click=\"vm.save(formProduct)\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"remove\" ng-if=\"vm.product.id\" ff-click=\"vm.remove()\"> <span translate=\"GLOBAL.BTN_DELETE\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> <div id=\"productPriceLists\" ff-bulk-read-only style=\"margin:1.5rem 0\"> <ff-panel ng-if=\"vm.product.id\"> <ff-panel-header><span translate=\"PRODUCTS.PRICE_LISTS.HEADER\"></span></ff-panel-header> <ff-btn-group class=\"ff-section-buttons\"> <ff-btn sense=\"add\" size=\"sm\" ff-click=\"vm.addPriceList()\"><span translate=\"PRODUCTS.PRICE_LISTS.BTN_ADD\"></span></ff-btn> </ff-btn-group> <ff-header ng-show=\"vm.product.priceLists.length > 0\"> <ff-row> <cell><req translate=\"PRODUCTS.PRICE_LISTS.PRICE_LIST\"></req></cell> <cell flex=\"0 0 60px\" ng-if=\"vm.product.hasPasses\"><req translate=\"PRODUCTS.PRICE_LISTS.PASSES\"></req></cell> <cell flex=\"0 0 60px\" class=\"ff-right\" ng-if=\"vm.product.isCreditable\"><req translate=\"PRODUCTS.PRICE_LISTS.CREDIT\"></req></cell> <cell flex=\"0 0 60px\" class=\"ff-right\"><req translate=\"PRODUCTS.PRICE_LISTS.PRICE\"></req></cell> <ff-btn-group flex=\"none\" class=\"buttons-row zero-height\"> <ff-btn sense=\"save\" size=\"xs\" title=\"{{'GLOBAL.BTN_SAVE' | translate}}\"></ff-btn> <ff-btn sense=\"remove\" size=\"xs\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <form name=\"priceListForm\" id=\"productPriceList-{{priceList.id}}\" ng-repeat=\"priceList in vm.product.priceLists\" novalidate> <ff-row> <ff-select name=\"priceList\" ff-model=\"priceList.priceList\" ff-required=\"true\" ff-validate-alert=\"{{'PRODUCTS.PRICE_LISTS.PRICE_LIST' | translate}}\" ff-unique=\"{ array: vm.product.priceLists, prop: 'priceList' }\" ff-model-options=\"{ allowInvalid: true }\" ff-options=\"priceList.name for priceList in vm.product.options.priceLists\"> </ff-select> <ff-number flex=\"0 0 60px\" name=\"passQty\" class=\"ff-center\" ff-model=\"priceList.passQty\" ff-required=\"true\" ff-validate-alert=\"{{'PRODUCTS.PRICE_LISTS.PASSES' | translate}}\" ng-if=\"vm.product.hasPasses\"></ff-number> <ff-price flex=\"0 0 60px\" name=\"credit\" class=\"ff-right\" ff-model=\"priceList.reservationCredit\" ff-required=\"true\" ff-validate-alert=\"{{'PRODUCTS.PRICE_LISTS.CREDIT' | translate}}\" ng-if=\"vm.product.isCreditable\"></ff-price> <ff-price flex=\"0 0 60px\" name=\"price\" class=\"ff-right\" ff-model=\"priceList.price\" ff-required=\"true\" ff-validate-alert=\"{{'PRODUCTS.PRICE_LISTS.PRICE' | translate}}\"></ff-price> <ff-btn-group flex=\"none\" class=\"buttons-row\"> <ff-btn sense=\"save\" type=\"submit\" size=\"xs\" title=\"{{'GLOBAL.BTN_SAVE' | translate}}\" ff-click=\"vm.savePriceList(priceList, priceListForm)\" ff-disabled=\"priceListForm.$pristine\"></ff-btn> <ff-btn sense=\"remove\" size=\"xs\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\" ff-click=\"vm.removePriceList(priceList, $index)\"></ff-btn> </ff-btn-group> </ff-row> </form> <ff-btn-group ng-show=\"vm.product.priceLists.length > 0\" class=\"ff-section-buttons\"> <ff-btn sense=\"add\" size=\"sm\" ff-click=\"vm.addPriceList()\"> <span translate=\"PRODUCTS.PRICE_LISTS.BTN_ADD\"></span> </ff-btn> </ff-btn-group> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/product/product-list.controller.js":
/*!**************************************************************!*\
  !*** ./bundles/inventory/product/product-list.controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_list_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.scss */ "./bundles/inventory/product/product-list.scss");
/* harmony import */ var _product_list_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product_list_scss__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory.product.list', ['deskworks.inventory.product.service', 'deskworks.billing.optsBillingFrequency']).controller('ProductListCtrl', ["$scope", "$translate", "$timeout", "state", "helper", "lazyLoadReports", "products", "membershipCategories", "reservationCategories", "productService", "optsProductType", "optsBillingFrequency", function ($scope, $translate, $timeout, state, helper, lazyLoadReports, products, membershipCategories, reservationCategories, productService, optsProductType, optsBillingFrequency) {
  var vm = this;
  state.setPageTitle($translate.instant('PRODUCTS.PAGE_TITLE'));
  vm.collapsed = true;
  vm.printCollapsed = true;
  vm.products = products;
  vm.productTypes = angular.copy(optsProductType); // deep-clone productTypes as we are going to modify it

  vm.productTypes.forEach(function (productType) {
    productType.products = [];
  });
  vm.customProducts = {
    id: 'custom',
    name: $translate.instant('PRODUCTS.LIST.CUSTOM'),
    products: []
  }; // Sort products by types

  products.forEach(function (product) {
    if (product.membershipTypeId) {
      var category = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(membershipCategories).call(membershipCategories, function (c) {
        return c.id === product.membershipTypeId;
      }) || {
        name: product.membershipTypeId
      };
      product.membershipCategoryName = category.name;
    }

    if (product.passProductId) {
      var passProduct = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(products).call(products, function (p) {
        return p.id === product.passProductId;
      }) || {
        name: product.passProductId
      };
      product.passProductName = passProduct.name;
    }

    if (product.reservationTypeId) {
      var _category = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(reservationCategories).call(reservationCategories, function (c) {
        return c.id === product.reservationTypeId;
      }) || {
        name: product.reservationTypeId
      };

      product.reservationCategoryName = _category.name;
    }

    if (product.billingFrequency) {
      product.billingFrequency = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(optsBillingFrequency).call(optsBillingFrequency, function (o) {
        return o.id === product.billingFrequency;
      }) || {
        name: product.billingFrequency
      };
    }

    var type = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, vm.productTypes, product.type);

    if (product.custom) {
      vm.customProducts.products.push(product);
    } else if (type) {
      type.products.push(product);
    } else {
      console.warn('Product of unknown type:', product);
    }
  });
  /**
   * Edit product handler
   */

  vm.edit = function (product) {
    return state.setPath('/products/' + product.id);
  };
  /**
   * New product handler
   */


  vm.new = function () {
    return state.setPath('/products/new');
  };
  /**
   * Toggle Print Inventory List collapse
   */


  vm.togglePrint = function () {
    return lazyLoadReports.then(function () {
      vm.printCollapsed = !vm.printCollapsed;
    });
  };
}]));

/***/ }),

/***/ "./bundles/inventory/product/product-list.scss":
/*!*****************************************************!*\
  !*** ./bundles/inventory/product/product-list.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/inventory/product/product-list.tpl.html":
/*!*********************************************************!*\
  !*** ./bundles/inventory/product/product-list.tpl.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"product-list\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-btn-group ng-show=\"vm.productTypes.length > 0\"> <ff-btn sense=\"new\" ff-click=\"vm.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> <div ng-include=\"'productListTpl'\" ng-repeat=\"productType in vm.productTypes\"></div> <div> <ff-btn sense=\"collapse\" ff-click=\"vm.collapsed = !vm.collapsed\" class=\"ff-bmargin\" ng-class=\"{ collapsed: vm.collapsed }\" ng-if=\"vm.customProducts.products.length > 0\"><span translate=\"PRODUCTS.LIST.CUSTOM\"></span></ff-btn> <div class=\"custom-products\" ng-collapse=\"vm.collapsed\" ng-if=\"vm.customProducts.products.length > 0\"> <div ng-include=\"'productListTpl'\" ng-init=\"productType = vm.customProducts\"></div> </div> </div> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"vm.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> <ff-btn sense=\"collapseBtn\" ff-click=\"vm.togglePrint()\" ng-class=\"{ collapsed: vm.printCollapsed }\" ff-disabled=\"!vm.products.length\"><span translate=\"PRODUCTS.BTN_PRINT\"></span></ff-btn> </ff-btn-group> </div> <div ng-collapse=\"vm.printCollapsed\" class=\"ff-grid\"> <ng-include src=\"'product-report/product-report.tpl.html'\" class=\"ff-tmargin\"></ng-include> </div> </div> <script type=\"text/ng-template\" id=\"productListTpl\"> <ff-panel>\n    <ff-panel-header>{{productType.name}}</ff-panel-header>\n    <div class=\"ff-grid\">\n      <span ng-if=\"!productType.products.length\" translate=\"PRODUCTS.LIST.EMPTY\"></span>\n\n      <ff-header ng-if=\"productType.products.length\">\n        <ff-row>\n          <cell flex=\"0 0 80px\"><span translate=\"PRODUCTS.CODE\"></span></cell>\n          <cell flex=\"1 2 400px\"><span translate=\"PRODUCTS.PRODUCT\"></span></cell>\n          <cell flex=\"0 0 105px\" class=\"ff-center show-xl\" ng-if=\"productType.id === 'services'\"><span translate=\"PRODUCTS.BILLING_FREQUENCY\"></span></cell>\n          <cell flex=\"0 0 115px\" class=\"ff-center show-xl\" ng-if=\"productType.id === 'services'\"><span translate=\"PRODUCTS.SHOW_FOR_SIGN_UP\"></span></cell>\n          <cell flex=\"1 1 260px\" class=\"show-md\" ng-if=\"productType.id === 'membership'\"><span translate=\"PRODUCTS.MEMBERSHIP_CATEGORY\"></span></cell>\n          <cell flex=\"0 0 110px\" class=\"ff-center show-lg\" ng-if=\"productType.id === 'membership'\"><span translate=\"PRODUCTS.IS_CREDITABLE\"></span></cell>\n          <cell flex=\"1 3 330px\" class=\"show-xl\" ng-if=\"productType.id === 'membership'\"><span translate=\"PRODUCTS.PASS_PRODUCT\"></span></cell>\n          <cell flex=\"0 0 90px\" class=\"ff-center show-md\" ng-if=\"['registration', 'print', 'services'].indexOf(productType.id) >= 0\"><span translate=\"PRODUCTS.TAXABLE\"></span></cell>\n          <cell flex=\"1 2 600px\" class=\"show-lg\" ng-if=\"['registration', 'print', 'services'].indexOf(productType.id) >= 0\"><span translate=\"PRODUCTS.DESCRIPTION\"></span></cell>\n          <cell flex=\"1 2 400px\" class=\"show-md\" ng-if=\"productType.id === 'rental'\"><span translate=\"PRODUCTS.RESERVATION_CATEGORY\"></span></cell>\n          <cell flex=\"0 0 110px\" class=\"ff-center show-xl\" ng-if=\"productType.id === 'rental'\"><span translate=\"PRODUCTS.ALLOW_RESERVATION_CREDITS\"></span></cell>\n          <cell flex=\"0 0 75px\" class=\"ff-center show-xl\" ng-if=\"productType.id === 'rental'\"><span translate=\"PRODUCTS.BUY_ON_SPLASH_PAGE\"></span></cell>\n          <cell flex=\"0 0 75px\" class=\"ff-right show-xl\" ng-if=\"productType.id === 'rental'\"><span translate=\"PRODUCTS.PASS_SIZE\"></span></cell>\n          <cell flex=\"0 0 80px\" class=\"ff-center show-lg\" ng-if=\"productType.id === 'rental'\"><span translate=\"PRODUCTS.TAXABLE\"></span></cell>\n          <ff-btn sense=\"edit\" size=\"xs\" flex=\"none\" class=\"buttons-row zero-height\" title=\"{{'GLOBAL.BTN_EDIT' | translate }}\"></ff-btn>\n        </ff-row>\n      </ff-header>\n\n      <ff-row ng-repeat=\"product in productType.products\">\n        <ff-static flex=\"0 0 80px\">{{::product.code}}</ff-static>\n        <ff-static flex=\"1 2 400px\">{{::product.name}}</ff-static>\n        <ff-static flex=\"0 0 105px\" class=\"ff-center show-xl\" ng-if=\"productType.id === 'services'\">{{::product.billingFrequency.name}}</ff-static>\n        <ff-static flex=\"0 0 115px\" class=\"ff-center show-xl\" ng-if=\"productType.id === 'services'\">{{::!product.hideInSelfRegistration | yesno}}</ff-static>\n        <ff-static flex=\"1 1 260px\" class=\"show-md\" ng-if=\"productType.id === 'membership'\">{{::product.membershipCategoryName | nd}}</ff-static>\n        <ff-static flex=\"0 0 110px\" class=\"ff-center show-lg\" ng-if=\"productType.id === 'membership'\">{{::product.isCreditable | yesno}}</ff-static>\n        <ff-static flex=\"1 3 330px\" class=\"show-xl\" ng-if=\"productType.id === 'membership'\">{{::product.passProductName | nd}}</ff-static>\n        <ff-static flex=\"0 0 90px\" class=\"ff-center show-md\" ng-if=\"['registration', 'print', 'services'].indexOf(productType.id) >= 0\">{{::product.taxable | yesno}}</ff-static>\n        <ff-static flex=\"1 2 600px\" class=\"show-lg\" ng-if=\"['registration', 'print', 'services'].indexOf(productType.id) >= 0\">{{::product.description | nd}}</ff-static>\n        <ff-static flex=\"1 2 400px\" class=\"show-md\" ng-if=\"productType.id === 'rental'\">{{::product.reservationCategoryName}}</ff-static>\n        <ff-static flex=\"0 0 110px\" class=\"ff-center show-xl\" ng-if=\"productType.id === 'rental'\">{{::product.allowReservationCredits | yesno}}</ff-static>\n        <ff-static flex=\"0 0 75px\" class=\"ff-center show-xl\" ng-if=\"productType.id === 'rental'\">{{::product.canBuyOnSplashPage | yesno}}</ff-static>\n        <ff-static flex=\"0 0 75px\" class=\"ff-right show-xl\" ng-if=\"productType.id === 'rental'\">{{::product.passSize}}</ff-static>\n        <ff-static flex=\"0 0 80px\" class=\"ff-center show-lg\" ng-if=\"productType.id === 'rental'\">{{::product.taxable | yesno}}</ff-static>\n        <ff-btn sense=\"edit\" size=\"xs\" flex=\"none\" class=\"buttons-row\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\" ff-click=\"vm.edit(product)\"></ff-btn>\n      </ff-row>\n    </div>\n  </ff-panel> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/reservation-category/reservation-category-edit.controller.js":
/*!****************************************************************************************!*\
  !*** ./bundles/inventory/reservation-category/reservation-category-edit.controller.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reservation_category_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reservation-category.scss */ "./bundles/inventory/reservation-category/reservation-category.scss");
/* harmony import */ var _reservation_category_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_reservation_category_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/ff-richtext/ff-richtext.directive */ "./shared/ff-richtext/ff-richtext.directive.js");
/* harmony import */ var shared_drag_n_drop_keese_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/drag-n-drop/keese.service */ "./shared/drag-n-drop/keese.service.js");









/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory.reservationCategory', [shared_ff_richtext_ff_richtext_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_drag_n_drop_keese_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, 'deskworks.helper', 'deskworks.reservationCategory.service']).controller('InventoryReservationCategoryEditCtrl', ["$window", "$translate", "keese", "dwAlerts", "state", "helper", "reservationCategory", "reservationCategories", "reservationCategoryService", function ($window, $translate, keese, dwAlerts, state, helper, reservationCategory, reservationCategories, reservationCategoryService) {
  var vm = this;
  state.setPageTitle($translate.instant(reservationCategory.id === 'new' ? 'RESERVATION_CATEGORIES.NEW.PAGE_TITLE' : 'RESERVATION_CATEGORIES.EDIT.PAGE_TITLE'));
  vm.category = reservationCategory;
  vm.hours = [0, 1, 2, 12, 24, 48, 72, 120, 168];
  vm.cancellation = [{
    notice: 'RESERVATION_CATEGORIES.NOTICE_NON_MEMBER',
    hint: 'RESERVATION_CATEGORIES.NOTICE_NON_MEMBER.HINT',
    model: vm.category.cancellationNonMemberNoticeHours
  }, {
    notice: 'RESERVATION_CATEGORIES.NOTICE_MEMBER',
    hint: 'RESERVATION_CATEGORIES.NOTICE_MEMBER.HINT',
    model: vm.category.cancellationMemberNoticeHours
  }]; // Don't show photo placeholder

  if (vm.category.photos) {
    var photoPlaceholderIdx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_4___default()(helper).call(helper, vm.category.photos, null);

    if (photoPlaceholderIdx >= 0) {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_5___default()(_context = vm.category.photos).call(_context, photoPlaceholderIdx, 1);
    }
  }
  /**
   * Save Reservation Category handler
   */


  vm.save = function (form) {
    if (helper.pointFirstInvalid('#reservationCategory')) return;
    var data = {
      name: vm.category.name,
      description: vm.category.description,
      cancellationNonMemberNoticeHours: vm.cancellation[0].model,
      cancellationMemberNoticeHours: vm.cancellation[1].model
    };
    var promise;

    if (vm.category.id === 'new') {
      data.order = keese.generate(reservationCategories[reservationCategories.length - 1] && reservationCategories[reservationCategories.length - 1].order);
      promise = reservationCategoryService.create(state.getCurrentCenterId(), data);
    } else {
      promise = reservationCategoryService.update(state.getCurrentCenterId(), vm.category.id, data);
    }

    return promise.then(function (result) {
      form.$setPristine();
      if (vm.category.id === 'new') return state.setPath('/reservation-types/' + result.id);
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save reservation category.');
    });
  };
  /**
   * Remove Reservation Category handler
   */


  vm.remove = function () {
    if ($window.confirm($translate.instant('RESERVATION_CATEGORIES.CONFIRM_DELETE'))) {
      return reservationCategoryService.delete(state.getCurrentCenterId(), vm.category.id).then(function () {
        return state.setPath('/reservation-types');
      }).catch(function (err) {
        return dwAlerts.error(err, 'Failed to remove reservation category.');
      });
    }
  };
  /**
   * Back button handler
   */


  vm.back = function () {
    return state.setPath('/reservation-types');
  };
  /**
   * Add/Edit Photo handler
   * @param $files - files to upload
   * @param $invalidFiles - files rejected by ngfPattern directive
   * @param photo - photo object, if missing - adding new photo, if present - updating existing photo
   */


  vm.uploadPhoto = function ($files, $invalidFiles, photo) {
    if ($invalidFiles && $invalidFiles.length > 0) return dwAlerts.error($translate.instant('RESERVATION_CATEGORIES.PHOTOS.INVALID_FORMAT'));

    if ($files && $files.length > 0) {
      var promise;

      if (photo) {
        // Update photo
        promise = reservationCategoryService.updatePhoto(state.getCurrentCenterId(), vm.category.id, photo.id, $files[0]);
        photo.spin = true;
      } else {
        // Create photo
        promise = reservationCategoryService.createPhoto(state.getCurrentCenterId(), vm.category.id, $files[0]);
        vm.spinAddPhoto = true;
      }

      return promise.then(function (result) {
        if (photo) {
          // Update photo
          photo.url = result.data.url;
        } else {
          // Create photo
          vm.category.photos.push({
            id: result.data.id,
            url: result.data.url
          });
        }
      }).catch(function (err) {
        return dwAlerts.error(err, 'Failed to upload reservation category photo.');
      }).finally(function () {
        vm.spinAddPhoto = false;
        if (photo) photo.spin = false;
      });
    }
  };
  /**
   * Remove Photo handler
   */


  vm.removePhoto = function (photo) {
    if ($window.confirm($translate.instant('RESERVATION_CATEGORIES.PHOTOS.CONFIRM_DELETE'))) {
      return reservationCategoryService.deletePhoto(state.getCurrentCenterId(), vm.category.id, photo.id).then(function () {
        var _context2;

        var idx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_4___default()(helper).call(helper, vm.category.photos, photo.id);

        if (idx >= 0) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = vm.category.photos).call(_context2, idx, 1);
      }).catch(function (err) {
        return dwAlerts.error(err, 'Failed to remove reservation category photo.');
      });
    }
  };
}]));

/***/ }),

/***/ "./bundles/inventory/reservation-category/reservation-category-edit.tpl.html":
/*!***********************************************************************************!*\
  !*** ./bundles/inventory/reservation-category/reservation-category-edit.tpl.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"formResType\" id=\"reservationCategory\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v\"> <ff-panel> <label class=\"ff-row\"> <ff-label flex=\"0 1 200px\"><req translate=\"RESERVATION_CATEGORIES.NAME\"></req></ff-label> <ff-text flex=\"1 1 400px\" name=\"name\" ff-model=\"vm.category.name\" ff-required=\"true\" ff-validate-alert=\"{{'RESERVATION_CATEGORIES.NAME' | translate}}\"></ff-text> </label> <ff-row> <ff-richtext ff-model=\"vm.category.description\"></ff-richtext> </ff-row> <label class=\"ff-row\" ng-repeat=\"customer in vm.cancellation\"> <ff-label flex=\"0 1 350px\"> <span> <span translate=\"{{customer.notice}}\"></span> <ff-hint><span translate=\"{{customer.hint}}\"></span></ff-hint> </span> </ff-label> <ff-select flex=\"0 0 52px\" ff-model=\"customer.model\" ff-options=\"hours for hours in vm.hours\"></ff-select> <ff-label><span translate=\"RESERVATION_CATEGORIES.HOURS\"></span></ff-label> </label> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"vm.save(formResType)\" ff-disabled=\"formResType.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"remove\" ng-if=\"vm.category.id !== 'new'\" ff-click=\"vm.remove()\"><span translate=\"GLOBAL.BTN_DELETE\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> <ff-panel ng-if=\"vm.category.id !== 'new'\" ngf-drop=\"vm.uploadPhoto($files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\" ngf-drag-over-class=\"dragover\"> <ff-panel-header> <span translate=\"RESERVATION_CATEGORIES.PHOTOS.HEADER\"></span> <ff-hint><span translate=\"RESERVATION_CATEGORIES.PHOTOS.HINT\"></span></ff-hint> </ff-panel-header> <div class=\"ff-grid gutter-h-half\"> <ff-col flex=\"{md: '0 0 50%'}\" ng-repeat=\"photo in vm.category.photos\" class=\"res-cat-photos\"> <ff-img ff-src=\"{{photo.url}}\" ff-alt=\"{{vm.category.name}}\" img-placeholder=\"{{'GLOBAL.NO_PHOTO' | translate}}\"></ff-img> <ff-btn-group style=\"margin:.5rem 0\"> <ff-btn sense=\"edit\" size=\"xs\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\" ff-spin=\"photo.spin\" ngf-select=\"vm.uploadPhoto($files, $invalidFiles, photo)\" ngf-pattern=\"'image/png,image/jpeg'\" accept=\"image/png,image/jpeg\"></ff-btn> <ff-btn sense=\"remove\" size=\"xs\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\" ff-click=\"vm.removePhoto(photo)\"></ff-btn> </ff-btn-group> </ff-col> </div> <ff-btn-group> <ff-btn sense=\"add\" size=\"sm\" ngf-select=\"vm.uploadPhoto($files, $invalidFiles)\" ff-spin=\"vm.spinAddPhoto\" ngf-pattern=\"'image/png,image/jpeg'\" accept=\"image/png,image/jpeg\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </ff-panel> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/reservation-category/reservation-category-list.controller.js":
/*!****************************************************************************************!*\
  !*** ./bundles/inventory/reservation-category/reservation-category-list.controller.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/drag-n-drop/dnd.service */ "./shared/drag-n-drop/dnd.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory.reservationCategories', ['deskworks.state', 'deskworks.reservationCategory.service', shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_2__["default"].name]).controller('InventoryReservationCategoriesCtrl', ["$scope", "$translate", "state", "dnd", "dwAlerts", "reservationCategories", "reservationCategoryService", function ($scope, $translate, state, dnd, dwAlerts, reservationCategories, reservationCategoryService) {
  var vm = this;
  state.setPageTitle($translate.instant('RESERVATION_CATEGORIES.PAGE_TITLE'));
  vm.categories = reservationCategories;
  /**
   * Edit Reservation Category handler
   */

  vm.edit = function (reservationType) {
    return state.setPath('/reservation-types/' + reservationType.id);
  };
  /**
   * New Reservation Category handler
   */


  vm.new = function () {
    return state.setPath('/reservation-types/new');
  };
  /**
   * Drop handler
   */


  vm.onDrop = function (srcList, srcIndex, targetList, targetIndex) {
    var item = dnd.move(srcList, srcIndex, targetList, targetIndex);
    item.$spin = true;
    reservationCategoryService.update(state.getCurrentCenterId(), item.id, {
      order: item.order
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to reorder reservation category.');
    }).finally(function () {
      return delete item.$spin;
    });
    return true; // true is required by dnd-callback of dnd-list
  };
}]));

/***/ }),

/***/ "./bundles/inventory/reservation-category/reservation-category-list.tpl.html":
/*!***********************************************************************************!*\
  !*** ./bundles/inventory/reservation-category/reservation-category-list.tpl.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"reservation-type-list\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel> <span ng-if=\"!vm.categories.length\" translate=\"RESERVATION_CATEGORIES.LIST.EMPTY\"></span> <ff-header ng-show=\"vm.categories.length\"> <ff-row> <cell flex=\"0 0 60%\"> <span> <span translate=\"RESERVATION_CATEGORIES.LIST.CATEGORY\"></span> <ff-hint ng-if=\"ffBlock.editMode\"><span translate=\"RESERVATION_CATEGORIES.LIST.HINT\"></span></ff-hint> </span> </cell> <cell flex=\"0 1 40%\" class=\"ff-center\"><span translate=\"RESERVATION_CATEGORIES.LIST.NOTICE\"></span></cell> <ff-btn size=\"xs\" flex=\"none\" class=\"buttons-row zero-height\"></ff-btn> </ff-row> </ff-header> <div ng-if=\"ffBlock.editMode\" dnd-list dnd-drop=\"callback({ targetList: vm.categories, targetIndex: index })\"> <ff-row ng-repeat=\"category in vm.categories\" dnd-draggable=\"null\" dnd-callback=\"vm.onDrop(vm.categories, $index, targetList, targetIndex)\" ff-dim=\"category.$spin\" ng-include=\"'reservationCategoryTpl'\"> </ff-row> </div> <div ng-if=\"!ffBlock.editMode\"> <ff-row ng-repeat=\"category in vm.categories\" ng-include=\"'reservationCategoryTpl'\"></ff-row> </div> </ff-panel> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"vm.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> </div> <script type=\"text/ng-template\" id=\"reservationCategoryTpl\"> <ff-static flex=\"0 0 60%\" ff-bind=\"category.name\"></ff-static>\n  <ff-static flex=\"0 1 40%\" class=\"ff-center\">\n    {{category.cancellationNonMemberNoticeHours | nd}} / {{category.cancellationMemberNoticeHours | nd}}\n  </ff-static>\n  <ff-btn sense=\"edit\" size=\"xs\" flex=\"none\" class=\"buttons-row\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\" ff-click=\"vm.edit(category)\"></ff-btn> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/reservation-category/reservation-category.scss":
/*!**************************************************************************!*\
  !*** ./bundles/inventory/reservation-category/reservation-category.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/inventory/reservation-unit/reservation-unit-edit.controller.js":
/*!********************************************************************************!*\
  !*** ./bundles/inventory/reservation-unit/reservation-unit-edit.controller.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_reservation_rules_reservation_rules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/reservation-rules/reservation-rules.component */ "./shared/reservation-rules/reservation-rules.component.js");
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory.reservationUnit.edit', ['deskworks.reservationCategory.service', shared_reservation_rules_reservation_rules_component__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_4__["default"].name]).controller('InventoryReservationUnitEditCtrl', ["$scope", "$route", "$translate", "$window", "dwAlerts", "state", "helper", "unit", "categories", "ReservationUnit", function ($scope, $route, $translate, $window, dwAlerts, state, helper, unit, categories, ReservationUnit) {
  var _context;

  var $ctrl = this;
  state.setPageTitle($translate.instant(unit.id === 'new' ? 'RESERVATION_UNITS.NEW.PAGE_TITLE' : 'RESERVATION_UNITS.EDIT.PAGE_TITLE'));
  $ctrl.unit = unit;
  $ctrl.categories = categories;
  $ctrl.areaUnit = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context = window.dwLocales).call(_context, function (i) {
    return i.id === $scope.currentLocale;
  }) || {}).area || 'ft²';
  /**
   * Save Reservation Unit handler
   */

  $ctrl.saveReservationUnit = function (form) {
    if (helper.pointFirstInvalid('#reservation-unit-edit')) return;
    var data = helper.pick($ctrl.unit, ['id', 'name', 'reservationTypeId', 'syncWithCalendar', 'calendarId', 'description', 'area', 'capacity', 'expectedUsePerMonth']);
    data.area = data.area ? +data.area : null;
    data.capacity = data.capacity ? +data.capacity : null;
    data.expectedUsePerMonth = data.expectedUsePerMonth ? +data.expectedUsePerMonth : null;
    return ReservationUnit.save(state.getCurrentCenterId(), data).then(function (result) {
      $ctrl.form.$setPristine();
      if ($ctrl.unit.id === 'new') return state.setPath('/reservation-units/' + result.id);
      $route.reload();
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save reservation unit.');
    });
  };
  /**
   * Remove Reservation Unit handler
   */


  $ctrl.removeReservationUnit = function () {
    if (confirm($translate.instant('RESERVATION_UNITS.CONFIRM_DELETE'))) {
      return ReservationUnit.delete(state.getCurrentCenterId(), $ctrl.unit.id).then(function () {
        return state.setPath('/reservation-units');
      }).catch(function (err) {
        return dwAlerts.error(err, 'Failed to remove reservation unit.');
      });
    }
  };
  /**
   * Upload Photo handler
   */


  $ctrl.uploadPhoto = function ($files, $invalidFiles) {
    if ($invalidFiles && $invalidFiles.length > 0) return dwAlerts.error($translate.instant('GLOBAL.PHOTO.INVALID_FORMAT'));

    if ($files && $files.length > 0) {
      $ctrl.spinUpload = true;
      return ReservationUnit.uploadPhoto(state.getCurrentCenterId(), $ctrl.unit.id, $files[0]).catch(function (err) {
        return dwAlerts.error(err, 'Failed to upload photo.');
      }).finally(function () {
        $ctrl.spinUpload = false;
      }).then(function (result) {
        $ctrl.unit.thumbnail = result.data.thumbnail ? result.data.thumbnail + '?' + Date.now() : $ctrl.unit.thumbnail;
        $ctrl.unit.photo = result.data.photo + '?' + Date.now();
      });
    }
  };
  /**
   * Delete photo
   */


  $ctrl.deletePhoto = function () {
    if (!$window.confirm($translate.instant('GLOBAL.CONFIRM_DELETE_PHOTO'))) return;
    return ReservationUnit.deletePhoto({
      centerId: state.getCurrentCenterId(),
      id: $ctrl.unit.id
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete photo.');
    }).then(function () {
      $ctrl.unit.thumbnail = null;
      $ctrl.unit.photo = null;
    });
  };
  /**
   * Back button handler
   */


  $ctrl.back = function () {
    return state.setPath('/reservation-units');
  };
  /**
   * 'Sync With Calendar' change handler
   */


  $ctrl.calSyncChange = function () {
    if (!$ctrl.unit.syncWithCalendar) $ctrl.unit.calendarId = null;
    $ctrl.calendarIdEnabled = $ctrl.unit.syncWithCalendar;
  };

  $scope.$watch('state.getCurrentCenterId()', function (nv, ov) {
    if (nv !== ov) state.setPath('/reservation-units');
  });
}]));

/***/ }),

/***/ "./bundles/inventory/reservation-unit/reservation-unit-edit.tpl.html":
/*!***************************************************************************!*\
  !*** ./bundles/inventory/reservation-unit/reservation-unit-edit.tpl.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"ff-grid gutter-v\"> <form name=\"$ctrl.form\" id=\"reservation-unit-edit\" novalidate ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <ff-panel flex=\"{ md: '0 0 50%' }\"> <ff-panel-header> <span translate=\"RESERVATION_UNITS.GENERAL.HEADER\"></span> </ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 1 170px\"><req translate=\"RESERVATION_UNITS.NAME\"></req></ff-label> <ff-text flex=\"1 1 300px\" name=\"name\" ff-model=\"$ctrl.unit.name\" ff-required=\"true\" ff-validate-alert=\"{{'RESERVATION_UNITS.NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 170px\"><req translate=\"RESERVATION_UNITS.CATEGORY\"></req></ff-label> <ff-select flex=\"1 1 300px\" ff-model=\"$ctrl.unit.reservationTypeId\" ff-options=\"cat.id as cat.name for cat in $ctrl.categories\" ff-required=\"true\" ff-validate-alert=\"{{'RESERVATION_UNITS.CATEGORY' | translate}}\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 170px\"><span translate=\"RESERVATION_UNITS.DESCRIPTION\"></span></ff-label> <ff-text flex=\"1 1 300px\" ff-model=\"$ctrl.unit.description\"></ff-text> </label> <ff-row> <label class=\"ff-row\"> <ff-label flex=\"0 1 170px\"><span translate=\"RESERVATION_UNITS.AREA\" translate-values=\"{ areaUnit: $ctrl.areaUnit }\"></span></ff-label> <ff-number name=\"area\" flex=\"1 1 60px\" ff-model=\"$ctrl.unit.area\" ff-validate-alert=\"{{'RESERVATION_UNITS.AREA' | translate: { areaUnit: $ctrl.areaUnit } }}\"></ff-number> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 170px\"> <span> <span translate=\"RESERVATION_UNITS.CAPACITY\"></span> <ff-hint><span translate=\"RESERVATION_UNITS.CAPACITY.HINT\"></span></ff-hint> </span> </ff-label> <ff-number name=\"area\" flex=\"1 1 60px\" ff-model=\"$ctrl.unit.capacity\" ff-validate-alert=\"{{'RESERVATION_UNITS.CAPACITY' | translate}}\"></ff-number> </label> </ff-row> <label class=\"ff-row\"> <ff-label flex=\"0 1 170px\"> <span> <req translate=\"RESERVATION_UNITS.EXPECTED_USE_PER_MONTH\"></req> <ff-hint><span translate=\"RESERVATION_UNITS.EXPECTED_USE_PER_MONTH.HINT\"></span></ff-hint> </span> </ff-label> <ff-number flex=\"1 1 300px\" ff-model=\"$ctrl.unit.expectedUsePerMonth\" ff-gte=\"0\" ff-required=\"true\" ff-validate-alert=\"{{'RESERVATION_UNITS.EXPECTED_USE_PER_MONTH' | translate}}\"></ff-number> </label> <ff-static> <label> <ff-checkbox ff-model=\"$ctrl.unit.syncWithCalendar\" ff-label=\"{{'RESERVATION_UNITS.SYNC_WITH_CALENDAR' | translate}}\" ff-change=\"$ctrl.calSyncChange()\"></ff-checkbox> </label> </ff-static> <label class=\"ff-row\"> <ff-label flex=\"0 1 170px\"> <span> <span translate=\"RESERVATION_UNITS.CALENDAR_ID\"></span> <ff-hint><span translate=\"RESERVATION_UNITS.CALENDAR_ID.HINT\"></span></ff-hint> </span> </ff-label> <ff-text flex=\"1 1 300px\" name=\"calendarId\" ff-model=\"$ctrl.unit.calendarId\" ff-disabled=\"!$ctrl.calendarIdEnabled\" ff-validate-alert=\"{{'RESERVATION_UNITS.CALENDAR_ID' | translate}}\"></ff-text> </label> </ff-panel> <ff-panel flex=\"{ md: '0 0 50%' }\" ng-if=\"$ctrl.unit.id && $ctrl.unit.id !== 'new'\" ngf-drop=\"$ctrl.uploadPhoto($files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\" ngf-drag-over-class=\"dragover\"> <ff-panel-header> <span translate=\"GLOBAL.PHOTO\"></span> <ff-hint><span translate=\"RESERVATION_UNITS.PHOTO.HINT\"></span></ff-hint> </ff-panel-header> <ff-col style=\"height:100%\"> <ff-col flex=\"auto\"> <ff-img flex=\"auto\" ff-style=\"{ height: '100%', width: 'auto', 'object-fit': 'contain' }\" img-placeholder=\"1280 x 640\" ff-src=\"{{$ctrl.unit.thumbnail}}\" ff-src-hq=\"{{$ctrl.unit.photo}}\" ff-alt=\"{{$ctrl.unit.name}}\"></ff-img> </ff-col> <ff-btn-group flex=\"none\" class=\"ff-section-buttons\"> <ff-btn sense=\"upload\" size=\"sm\" ff-spin=\"$ctrl.spinUpload\" ngf-select=\"$ctrl.uploadPhoto($files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\" accept=\"image/png,image/jpeg\"> <span translate=\"GLOBAL.BTN_UPLOAD\"></span> </ff-btn> </ff-btn-group> </ff-col> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.saveReservationUnit()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"remove\" ng-if=\"$ctrl.unit.id !== 'new'\" ff-click=\"$ctrl.removeReservationUnit()\"> <span translate=\"GLOBAL.BTN_DELETE\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> <reservation-rules center-id=\"state.getCurrentCenterId()\" reservation-unit-id=\"$ctrl.unit.id\" ng-if=\"$ctrl.unit.id !== 'new'\" ff-bulk-read-only></reservation-rules> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/inventory/reservation-unit/reservation-unit-list.controller.js":
/*!********************************************************************************!*\
  !*** ./bundles/inventory/reservation-unit/reservation-unit-list.controller.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory.reservationUnit.list', ['deskworks.reservationRules.optsWhoCanReserve', shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_2__["default"].name]).controller('InventoryReservationUnitListCtrl', ["$scope", "$translate", "state", "helper", "reservationUnits", "optsWhoCanReserve", function ($scope, $translate, state, helper, reservationUnits, optsWhoCanReserve) {
  var vm = this;
  state.setPageTitle($translate.instant('RESERVATION_UNITS.PAGE_TITLE'));
  vm.reservationUnits = reservationUnits;
  vm.reservationUnits.forEach(function (unit) {
    unit.whoCanReserve = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsWhoCanReserve, unit.whoCanReserve) || {}).name;
  });
  /**
   * Edit Reservation Unit handler
   */

  vm.edit = function (reservationUnit) {
    return state.setPath('/reservation-units/' + reservationUnit.id);
  };
  /**
   * New Reservation Unit handler
   */


  vm.new = function () {
    return state.setPath('/reservation-units/new');
  };
}]));

/***/ }),

/***/ "./bundles/inventory/reservation-unit/reservation-unit-list.tpl.html":
/*!***************************************************************************!*\
  !*** ./bundles/inventory/reservation-unit/reservation-unit-list.tpl.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"reservation-unit-list\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel> <span ng-if=\"!vm.reservationUnits.length\" translate=\"RESERVATION_UNITS.LIST.EMPTY\"></span> <ff-header ng-show=\"vm.reservationUnits.length > 0\"> <ff-row> <cell flex=\"1 1 33%\"><span translate=\"RESERVATION_UNITS.UNIT\"></span></cell> <cell flex=\"1 1 33%\" class=\"show-sm\"><span translate=\"RESERVATION_UNITS.CATEGORY\"></span></cell> <cell flex=\"1 0 16%\" class=\"ff-center\"><span translate=\"RESERVATION_UNITS.WHO_CAN_RESERVE\"></span></cell> <cell flex=\"1 0 16%\" class=\"ff-center\"><span translate=\"RESERVATION_UNITS.SYNC_WITH_CALENDAR\"></span></cell> <ff-btn sense=\"edit\" size=\"xs\" flex=\"none\" class=\"buttons-row zero-height\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> </ff-row> </ff-header> <ff-row ng-repeat=\"unit in vm.reservationUnits\"> <ff-static flex=\"1 1 33%\" ff-bind=\"unit.name\"></ff-static> <ff-static flex=\"1 1 33%\" class=\"show-sm\" ff-bind=\"unit.reservationTypeName\"></ff-static> <ff-static flex=\"1 0 16%\" class=\"ff-center\" ff-bind=\"unit.whoCanReserve\"></ff-static> <ff-static flex=\"1 0 16%\" class=\"ff-center\" ff-bind=\"unit.syncWithCalendar | yesno\"></ff-static> <ff-btn sense=\"edit\" size=\"xs\" flex=\"none\" class=\"buttons-row\" ff-click=\"vm.edit(unit)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"vm.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> </div> ";
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

/***/ "./shared/ff-richtext/ff-richtext.directive.js":
/*!*****************************************************!*\
  !*** ./shared/ff-richtext/ff-richtext.directive.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var textangularjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! textangularjs */ "../node_modules/textangularjs/dist/textAngular.umd.js");
/* harmony import */ var textangularjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(textangularjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var textangularjs_dist_textAngular_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! textangularjs/dist/textAngular.css */ "../node_modules/textangularjs/dist/textAngular.css");
/* harmony import */ var textangularjs_dist_textAngular_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(textangularjs_dist_textAngular_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ff_richtext_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ff-richtext.scss */ "./shared/ff-richtext/ff-richtext.scss");
/* harmony import */ var _ff_richtext_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ff_richtext_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * ffRichtext directive - wrapper for 3rd party textAngular
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('ffRichtext', ['textAngular']).directive('ffRichtext', ["ffHelper", function (ffHelper) {
  return {
    restrict: 'E',
    scope: true,
    compile: function compile(tElement, tAttrs) {
      var input = angular.element('<text-angular></text-angular>');
      ffHelper.copyInnerAttrs(tElement, tAttrs, input);
      tElement.append(input);
      return this.link;
    },
    link: function link($scope, $element, $attrs) {
      var content = angular.element($element[0].querySelector('[contenteditable]'));
      $scope.$watch('ffBlock.editMode', function (editMode) {
        if (angular.isUndefined(editMode)) return;
        $element.toggleClass('ff-read-only', !editMode);
        content.attr('contenteditable', editMode);
      });
    }
  };
}]));

/***/ }),

/***/ "./shared/ff-richtext/ff-richtext.scss":
/*!*********************************************!*\
  !*** ./shared/ff-richtext/ff-richtext.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/printer-usage-free-copies/printer-usage-free-copies.directive.js":
/*!*********************************************************************************!*\
  !*** ./shared/printer-usage-free-copies/printer-usage-free-copies.directive.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printer_usage_free_copies_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printer-usage-free-copies.tpl.html */ "./shared/printer-usage-free-copies/printer-usage-free-copies.tpl.html");
/* harmony import */ var _printer_usage_free_copies_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_printer_usage_free_copies_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/**
 * printerUsageFreeCopies directive - free copies configuration for Membership Product -> Free Copies
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.printerUsageFreeCopies', ['deskworks.printerUsageTypeNames']).directive('printerUsageFreeCopies', function () {
  return {
    template: _printer_usage_free_copies_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    restrict: 'EAC',
    scope: true,
    controller: 'PrinterUsageFreeCopiesCtrl as $ctrl',
    bindToController: {
      types: '<freeCopiesSettings'
    }
  };
}).controller('PrinterUsageFreeCopiesCtrl', ["printerUsageTypeNames", function (printerUsageTypeNames) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $ctrl.typeNames = printerUsageTypeNames;
  };
}]));

/***/ }),

/***/ "./shared/printer-usage-free-copies/printer-usage-free-copies.tpl.html":
/*!*****************************************************************************!*\
  !*** ./shared/printer-usage-free-copies/printer-usage-free-copies.tpl.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header><span translate=\"PRINTER_USAGE_SETTINGS.FREE_COPIES.HEADER\"></span></ff-panel-header> <label class=\"ff-row\" ng-repeat=\"type in $ctrl.types\"> <ff-label flex=\"0 1 200px\"><req>{{$ctrl.typeNames[type.printerUsageType]}}</req></ff-label> <ff-number flex=\"0 0 50px\" ff-model=\"type.freeCount\" ff-required=\"true\" ff-validate-alert=\"{{'PRINTER_USAGE_SETTINGS.FREE_COPIES.FOR' | translate:{ type: $ctrl.typeNames[type.printerUsageType] } }}\"></ff-number> <ff-static></ff-static> </label> </ff-panel> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=inventory~._b.js.map?_rev=14c6c410d7c558a656a1