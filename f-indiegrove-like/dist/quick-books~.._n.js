(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quick-books~.._n"],{

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

/***/ "../quick-books sync recursive .*\\.tpl\\.html$":
/*!******************************************!*\
  !*** ../quick-books sync .*\.tpl\.html$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/quick-books-account.tpl.html": "../quick-books/account/quick-books-account.tpl.html",
	"./errors/quick-books-errors.tpl.html": "../quick-books/errors/quick-books-errors.tpl.html",
	"./settings/quick-books-apps.tpl.html": "../quick-books/settings/quick-books-apps.tpl.html",
	"./settings/quick-books-centers.tpl.html": "../quick-books/settings/quick-books-centers.tpl.html"
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
webpackContext.id = "../quick-books sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "../quick-books sync recursive \\..+\\/.+\\.js$":
/*!*****************************************!*\
  !*** ../quick-books sync \..+\/.+\.js$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/quick-books-account.directive.js": "../quick-books/account/quick-books-account.directive.js",
	"./errors/quick-books-errors.controller.js": "../quick-books/errors/quick-books-errors.controller.js",
	"./services/opts-quick-books-type.service.js": "../quick-books/services/opts-quick-books-type.service.js",
	"./services/qbo-ar-account.service.js": "../quick-books/services/qbo-ar-account.service.js",
	"./services/qbo-class.service.js": "../quick-books/services/qbo-class.service.js",
	"./services/qbo-customer.service.js": "../quick-books/services/qbo-customer.service.js",
	"./services/qbo-deposit-account.service.js": "../quick-books/services/qbo-deposit-account.service.js",
	"./services/qbo-income-account.service.js": "../quick-books/services/qbo-income-account.service.js",
	"./services/qbo-liability-account.service.js": "../quick-books/services/qbo-liability-account.service.js",
	"./services/qbo-product.service.js": "../quick-books/services/qbo-product.service.js",
	"./services/quick-books-app.service.js": "../quick-books/services/quick-books-app.service.js",
	"./services/quick-books-center.service.js": "../quick-books/services/quick-books-center.service.js",
	"./services/quick-books-errors.service.js": "../quick-books/services/quick-books-errors.service.js",
	"./services/quick-books-product.service.js": "../quick-books/services/quick-books-product.service.js",
	"./settings/quick-books-apps.directive.js": "../quick-books/settings/quick-books-apps.directive.js",
	"./settings/quick-books-centers.directive.js": "../quick-books/settings/quick-books-centers.directive.js"
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
webpackContext.id = "../quick-books sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "../quick-books/account/quick-books-account.directive.js":
/*!***************************************************************!*\
  !*** ../quick-books/account/quick-books-account.directive.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Product -> QuickBooks account directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.quickBooksAccountDirective', ['deskworks.QboIncomeAccount', 'deskworks.QuickBooksProduct', 'deskworks.QuickBooksCenter']).directive('quickBooksAccount', ["$compile", "$templateCache", function ($compile, $templateCache) {
  var templateUrl = 'account/quick-books-account.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'QuickBooksAccountCtrl as $ctrl',
    bindToController: {
      save: '=',
      productId: '<'
    }
  };
}]).controller('QuickBooksAccountCtrl', ["$q", "dwAlerts", "helper", "state", "QboIncomeAccount", "QuickBooksProduct", "QuickBooksCenter", function ($q, dwAlerts, helper, state, QboIncomeAccount, QuickBooksProduct, QuickBooksCenter) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };
  /**
   * Load data
   */


  $ctrl.load = function () {
    var promises = {
      centers: QuickBooksCenter.query().catch(function (err) {
        return dwAlerts.error(err, 'Failed to query QuickBooks centers.');
      }),
      product: QuickBooksProduct.get(state.getCurrentCenterId(), $ctrl.productId).catch(function (err) {
        return dwAlerts.error(err, 'Failed to load QuickBooks product.');
      })
    };
    return $q.all(promises).then(function (result) {
      $ctrl.product = result.product;

      var center = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, result.centers, state.getCurrentCenterId());

      if (center && center.appId && center.enabled) {
        return QboIncomeAccount.query(center.appId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to query QuickBooks income accounts.');
        }).then(function (accounts) {
          $ctrl.accounts = accounts;
          if ($ctrl.accounts && $ctrl.accounts.length) $ctrl.save = save; // expose save method only if have accounts
        });
      }
    });
  };
  /**
   * Save settings
   */


  function save() {
    return QuickBooksProduct.save(state.getCurrentCenterId(), $ctrl.productId, $ctrl.product).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save QuickBooks product.');
    });
  }
}]));

/***/ }),

/***/ "../quick-books/account/quick-books-account.tpl.html":
/*!***********************************************************!*\
  !*** ../quick-books/account/quick-books-account.tpl.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label class=\"ff-row animate-collapse\" ng-if=\"$ctrl.accounts.length\"> <ff-label flex=\"0 0 102px\" class=\"ff-small\"><span translate=\"PRODUCTS.QB_ACCOUNT\"></span></ff-label> <ff-select name=\"qboAccount\" ff-model=\"$ctrl.product.qboAccountId\" ff-options=\"opt.id as opt.name for opt in $ctrl.accounts\"> <option value=\"\">-</option> </ff-select> </label> ";
// Exports
module.exports = code;

/***/ }),

/***/ "../quick-books/errors/quick-books-errors.controller.js":
/*!**************************************************************!*\
  !*** ../quick-books/errors/quick-books-errors.controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QuickBooksErrorsCtrl', ['deskworks.helper', 'deskworks.dwAlerts', 'deskworks.QuickBooksErrors', 'deskworks.optsQuickBooksType', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name]).controller('QuickBooksErrorsCtrl', ["$scope", "$translate", "dwAlerts", "state", "helper", "QuickBooksErrors", "optsQuickBooksType", function ($scope, $translate, dwAlerts, state, helper, QuickBooksErrors, optsQuickBooksType) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('QUICK_BOOKS_ERRORS.PAGE_TITLE'));
  /**
   * Fetch log data from server
   */

  $ctrl.fetch = function (page) {
    $ctrl.fetching = true;
    return QuickBooksErrors.query(state.getCurrentCenterId(), page || $ctrl.data && $ctrl.data.page || 1, 20).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query QuickBooks errors.');
    }).then(function (result) {
      $ctrl.data = result;
      $ctrl.data.errors.forEach(function (error) {
        error.$$qbTypeName = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(optsQuickBooksType).call(optsQuickBooksType, function (t) {
          return t.id === error.qbType;
        }) || {}).name || '-';
      });
    }).finally(function () {
      $ctrl.fetching = false;
    });
  };
  /**
   * Start initial fetching
   */


  $ctrl.fetch();
}]));

/***/ }),

/***/ "../quick-books/errors/quick-books-errors.tpl.html":
/*!*********************************************************!*\
  !*** ../quick-books/errors/quick-books-errors.tpl.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"quickBooksErrors\"> <h4 class=\"page-title\" ng-bind=\"state.getPageTitle()\"></h4> <div class=\"gutter-v\"> <ff-panel ff-dim=\"$ctrl.fetching && !$ctrl.data\"> <ff-header ng-if=\"$ctrl.data.errors.length\"> <ff-row> <cell flex=\"0 1 200px\"><span translate=\"QUICK_BOOKS_ERRORS.TIME\"></span></cell> <cell flex=\"{xs: '0 0 80px', md: '0 0 100px'}\" class=\"ff-center\"><span translate=\"QUICK_BOOKS_ERRORS.QB_TYPE\"></span></cell> <cell flex=\"{xs: '0 0 70px', md: '0 0 90px'}\" class=\"ff-center show-sm\"><span translate=\"QUICK_BOOKS_ERRORS.DW_ID\"></span></cell> <cell flex=\"1 1 250px\"><span translate=\"QUICK_BOOKS_ERRORS.DW_NAME\"></span></cell> <cell flex=\"1 1 450px\"><span translate=\"QUICK_BOOKS_ERRORS.ERROR_TEXT\"></span></cell> </ff-row> </ff-header> <span translate=\"GLOBAL.NONE\" ng-if=\"!$ctrl.data.errors.length && !$ctrl.fetching\"></span> <ff-row ng-repeat=\"error in $ctrl.data.errors\"> <ff-static flex=\"0 1 200px\"> <span>{{::error.time | date:'mediumDate'}} <span nice-time=\"::error.time\"></span></span> </ff-static> <ff-static flex=\"{xs: '0 0 80px', md: '0 0 100px'}\" class=\"ff-center\">{{::error.$$qbTypeName}}</ff-static> <ff-static flex=\"{xs: '0 0 70px', md: '0 0 90px'}\" class=\"ff-center show-sm\">{{::error.dwId}}</ff-static> <ff-static flex=\"1 1 250px\">{{::error.dwName}}</ff-static> <ff-static flex=\"1 1 450px\">{{::error.errorText}}</ff-static> </ff-row> <ff-pagination props=\"$ctrl.data\" ff-click=\"$ctrl.fetch($page)\" ng-if=\"$ctrl.data.pageCount > 1\"></ff-pagination> </ff-panel> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "../quick-books/index.js":
/*!*******************************!*\
  !*** ../quick-books/index.js ***!
  \*******************************/
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

  var js = importAll(__webpack_require__("../quick-books sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("../quick-books sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "../quick-books/services/opts-quick-books-type.service.js":
/*!****************************************************************!*\
  !*** ../quick-books/services/opts-quick-books-type.service.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Quick Books Errors
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsQuickBooksType', []).factory('optsQuickBooksType', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 'item',
    _name: 'QUICK_BOOKS_ERRORS.OBJ_TYPE.ITEM'
  }, {
    id: 'customer',
    _name: 'QUICK_BOOKS_ERRORS.OBJ_TYPE.CUSTOMER'
  }, {
    id: 'invoice',
    _name: 'QUICK_BOOKS_ERRORS.OBJ_TYPE.INVOICE'
  }, {
    id: 'deposit',
    _name: 'QUICK_BOOKS_ERRORS.OBJ_TYPE.DEPOSIT'
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

/***/ "../quick-books/services/qbo-ar-account.service.js":
/*!*********************************************************!*\
  !*** ../quick-books/services/qbo-ar-account.service.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QboArAccount', ['ngResource', 'deskworks.config']).factory('QboArAccount', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/quickbooks/apps/:appId/qbo-ar-accounts'), {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  return {
    query: function query(appId) {
      return res.query({
        appId: appId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "../quick-books/services/qbo-class.service.js":
/*!****************************************************!*\
  !*** ../quick-books/services/qbo-class.service.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QboClass', ['ngResource', 'deskworks.config']).factory('QboClass', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/quickbooks/apps/:appId/qbo-classes'), {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  return {
    query: function query(appId) {
      return res.query({
        appId: appId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "../quick-books/services/qbo-customer.service.js":
/*!*******************************************************!*\
  !*** ../quick-books/services/qbo-customer.service.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QboCustomer', ['ngResource', 'deskworks.config']).factory('QboCustomer', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/quickbooks/apps/:appId/qbo-customers'), {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  return {
    query: function query(appId) {
      return res.query({
        appId: appId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "../quick-books/services/qbo-deposit-account.service.js":
/*!**************************************************************!*\
  !*** ../quick-books/services/qbo-deposit-account.service.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QboDepositAccount', ['ngResource', 'deskworks.config']).factory('QboDepositAccount', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/quickbooks/apps/:appId/qbo-deposit-accounts'), {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  return {
    query: function query(appId) {
      return res.query({
        appId: appId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "../quick-books/services/qbo-income-account.service.js":
/*!*************************************************************!*\
  !*** ../quick-books/services/qbo-income-account.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QboIncomeAccount', ['ngResource', 'deskworks.config']).factory('QboIncomeAccount', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/quickbooks/apps/:appId/qbo-income-accounts'), {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  return {
    query: function query(appId) {
      return res.query({
        appId: appId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "../quick-books/services/qbo-liability-account.service.js":
/*!****************************************************************!*\
  !*** ../quick-books/services/qbo-liability-account.service.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QboLiabilityAccount', ['ngResource', 'deskworks.config']).factory('QboLiabilityAccount', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/quickbooks/apps/:appId/qbo-liability-accounts'), {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  return {
    query: function query(appId) {
      return res.query({
        appId: appId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "../quick-books/services/qbo-product.service.js":
/*!******************************************************!*\
  !*** ../quick-books/services/qbo-product.service.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QboProduct', ['ngResource', 'deskworks.config']).factory('QboProduct', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/quickbooks/apps/:appId/qbo-products'), {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  return {
    query: function query(appId) {
      return res.query({
        appId: appId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "../quick-books/services/quick-books-app.service.js":
/*!**********************************************************!*\
  !*** ../quick-books/services/quick-books-app.service.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QuickBooksApp', ['ngResource', 'deskworks.config']).factory('QuickBooksApp', ["$resource", "$location", "deskworksConfig", function ($resource, $location, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/quickbooks/apps/:appId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    },
    save: function save(app) {
      return app.id ? res.update({
        appId: app.id
      }, app).$promise : res.save({}, app).$promise.then(function (result) {
        app.id = result.id;
        app.nonce = result.nonce;
        return result;
      });
    },
    delete: function _delete(appId) {
      return res.delete({
        appId: appId
      }).$promise;
    },
    getConnectUrl: function getConnectUrl(appId, nonce) {
      return deskworksConfig.getApiAbsUrl(['/quickbooks/oauth2?appId=' + appId, 'redirectUri=' + encodeURIComponent($location.absUrl()), 'nonce=' + nonce].join('&'));
    }
  };
}]));

/***/ }),

/***/ "../quick-books/services/quick-books-center.service.js":
/*!*************************************************************!*\
  !*** ../quick-books/services/quick-books-center.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QuickBooksCenter', ['ngResource', 'deskworks.config']).factory('QuickBooksCenter', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/quickbooks/centers/:centerId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    },
    save: function save(data) {
      return res.update({
        centerId: data.id
      }, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "../quick-books/services/quick-books-errors.service.js":
/*!*************************************************************!*\
  !*** ../quick-books/services/quick-books-errors.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QuickBooksErrors', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('QuickBooksErrors', ["$resource", "deskworksConfig", "datesDeserializer", function ($resource, deskworksConfig, datesDeserializer) {
  var desDates = datesDeserializer(['errors.time']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/quickbooks/centers/:centerId/errors'), {}, {
    query: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    query: function query(centerId, page, pageSize) {
      return res.query({
        centerId: centerId,
        page: page,
        pageSize: pageSize
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "../quick-books/services/quick-books-product.service.js":
/*!**************************************************************!*\
  !*** ../quick-books/services/quick-books-product.service.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.QuickBooksProduct', ['ngResource', 'deskworks.config']).factory('QuickBooksProduct', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/quickbooks/centers/:centerId/products/:productId'), {}, {
    get: {
      method: 'GET'
    },
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get(centerId, productId) {
      return res.get({
        centerId: centerId,
        productId: productId
      }).$promise;
    },
    save: function save(centerId, productId, data) {
      return res.update({
        centerId: centerId,
        productId: productId
      }, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "../quick-books/settings/quick-books-apps.directive.js":
/*!*************************************************************!*\
  !*** ../quick-books/settings/quick-books-apps.directive.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _quick_books_apps_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quick-books-apps.scss */ "../quick-books/settings/quick-books-apps.scss");
/* harmony import */ var _quick_books_apps_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_quick_books_apps_scss__WEBPACK_IMPORTED_MODULE_10__);











/**
 * Integrations Setup -> QuickBooks Apps directive
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.quickBooksApps', ['debounce', 'deskworks.QuickBooksApp', 'deskworks.QboDepositAccount', 'deskworks.QboLiabilityAccount', 'deskworks.QboArAccount', 'deskworks.QboProduct', 'deskworks.QboCustomer', 'deskworks.QboClass']).directive('quickBooksApps', function () {
  var templateUrl = 'settings/quick-books-apps.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'QuickBooksAppsCtrl as $ctrl',
    bindToController: {
      qbApps: '='
    }
  };
}).controller('QuickBooksAppsCtrl', ["$scope", "$translate", "$q", "$filter", "$window", "dwAlerts", "debounce", "helper", "centerService", "QuickBooksApp", "QboDepositAccount", "QboLiabilityAccount", "QboArAccount", "QboProduct", "QboCustomer", "QboClass", function ($scope, $translate, $q, $filter, $window, dwAlerts, debounce, helper, centerService, QuickBooksApp, QboDepositAccount, QboLiabilityAccount, QboArAccount, QboProduct, QboCustomer, QboClass) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };

  $ctrl.getConnectUrl = function (app) {
    return QuickBooksApp.getConnectUrl(app.id, app.nonce);
  };
  /**
   * Load settings
   */


  $ctrl.load = function () {
    $ctrl.spin = true;
    return QuickBooksApp.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query QuickBooks apps.');
    }).finally(function () {
      $ctrl.spin = false;
    }).then(function (qbApps) {
      var _context;

      $ctrl.qbApps = qbApps;
      return $q.all(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.qbApps).call(_context, queryAppData));

      function queryAppData(app) {
        app.$$spin = true;
        var promises = {
          qboDepositAccounts: QboDepositAccount.query(app.id).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query QBO deposit accounts.');
          }),
          qboLiabilityAccounts: QboLiabilityAccount.query(app.id).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query QBO liability accounts.');
          }),
          qboArAccounts: QboArAccount.query(app.id).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query QBO ar accounts.');
          }),
          qboProducts: QboProduct.query(app.id).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query QBO products.');
          }),
          qboCustomers: QboCustomer.query(app.id).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query QBO customers.');
          }),
          qboClasses: QboClass.query(app.id).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query QBO classes.');
          })
        };
        return $q.all(promises).finally(function () {
          app.$$spin = false;
        }).then(function (result) {
          app.$$qboDepositAccounts = result.qboDepositAccounts;
          app.$$qboLiabilityAccounts = result.qboLiabilityAccounts;
          app.$$qboArAccounts = result.qboArAccounts;
          app.$$qboProducts = result.qboProducts;
          app.$$qboCustomers = result.qboCustomers;
          app.$$qboClasses = result.qboClasses;
          $ctrl.qbApps.forEach(function (app) {
            app.$$qboCustomProduct = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, app.$$qboProducts, app.qboCustomProductId);
            app.$$qboDiscountProduct = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, app.$$qboProducts, app.qboDiscountProductId);
            app.$$qboNonMember = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, app.$$qboCustomers, app.qboNonMemberId);
          });
        });
      }
    });
  };
  /**
   * Save QB app
   */


  $ctrl.saveQbApp = debounce(saveQbApp, 500);

  function saveQbApp(app) {
    app.qboCustomProductId = (app.$$qboCustomProduct || {}).id;
    app.qboDiscountProductId = (app.$$qboDiscountProduct || {}).id;
    app.qboNonMemberId = (app.$$qboNonMember || {}).id;
    app.$$spin = true;
    return QuickBooksApp.save(app).finally(function () {
      app.$$spin = false;
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save QuickBooks app.');
    });
  }
  /**
   * Delete QB app
   */


  $ctrl.deleteQbApp = function (index) {
    var _context2;

    if (!$ctrl.qbApps[index].id) return _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = $ctrl.qbApps).call(_context2, index, 1); // silently remove unsaved app

    if (!$window.confirm($translate.instant('INTEGRATIONS_SETUP.QBO.APP_DELETE_CONFIRMATION'))) return;
    return QuickBooksApp.delete($ctrl.qbApps[index].id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete QuickBooks app.');
    }).then(function () {
      var _context3;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = $ctrl.qbApps).call(_context3, index, 1);
    });
  };
  /**
   * New QB app
   */


  $ctrl.newQbApp = function () {
    $ctrl.qbApps.push({});
  };
  /**
   * Search items
   */


  $ctrl.search = function (items, $search) {
    return $q.when(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(items).call(items, function (item) {
      return item.name && item.name.toLowerCase().indexOf($search.toLowerCase()) >= 0;
    }));
  };
  /**
   * Filters results by found search string and sorts by number of matches
   * @param $results - non-filtered search results
   * @param $search - search string
   * @returns {Array.<T>} - filtered results
   */


  $ctrl.filter = function ($results, $search) {
    $results = $results || [];
    $results.forEach(function (item) {
      item.$$highlighted = {
        name: $filter('highlight')(item.name, $search)
      };
    });
    return $results;
  };
}]));

/***/ }),

/***/ "../quick-books/settings/quick-books-apps.scss":
/*!*****************************************************!*\
  !*** ../quick-books/settings/quick-books-apps.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "../quick-books/settings/quick-books-apps.tpl.html":
/*!*********************************************************!*\
  !*** ../quick-books/settings/quick-books-apps.tpl.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header><span translate=\"INTEGRATIONS_SETUP.QBO.APPS\"></span></ff-panel-header> <ff-row ff-dim=\"true\" ng-if=\"$ctrl.spin && !$ctrl.qbApps\" class=\"animate-collapse\">&nbsp;</ff-row> <div ng-if=\"!$ctrl.spin && !$ctrl.qbApps.length\" class=\"animate-collapse\"><span translate=\"GLOBAL.NONE\"></span></div> <form name=\"form\" novalidate ng-repeat=\"app in $ctrl.qbApps\" class=\"animate-collapse\"> <ff-header style=\"padding:0\" class=\"ff-no-frame\"> <label class=\"ff-row\" style=\"margin-bottom:-2px\"> <cell flex=\"1 1 270px\" ff-dim=\"app.$$spin\" style=\"display:flex;align-items:center\"><span translate=\"INTEGRATIONS_SETUP.QBO.APP\"></span></cell> <ff-text flex=\"1 1 275px\" name=\"name\" ff-model=\"app.name\" ff-change=\"$ctrl.saveQbApp(app)\" ff-required=\"true\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.QBO.APP' | translate}}\" placeholder=\"{{'INTEGRATIONS_SETUP.QBO.APP_NAME' | translate}}\" style=\"text-transform:none;font-weight:400\"></ff-text> <ff-btn sense=\"remove\" size=\"xs\" flex=\"none\" class=\"buttons-row\" ff-click=\"$ctrl.deleteQbApp($index)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </label> </ff-header> <label class=\"ff-row\" ng-if=\"app.id\"> <ff-label flex=\"1 1 270px\"><span translate=\"INTEGRATIONS_SETUP.QBO.CONNECTION\"></span></ff-label> <ff-static flex=\"1 1 305px\" ng-if=\"!app.connected\"> <a class=\"qb-connect\" href=\"{{$ctrl.getConnectUrl(app)}}\" target=\"_self\" rel=\"noopener\"> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 244.16 66\"> <g> <path d=\"M113.71,25.6a6.7,6.7,0,0,0-3-2.3,10.17,10.17,0,0,0-7.8.1,9.73,9.73,0,0,0-3.22,2.28,10.13,10.13,0,0,0-2.07,3.4,12,12,0,0,0-.73,4.23,13.08,13.08,0,0,0,.71,4.4,9.92,9.92,0,0,0,2,3.42,9,9,0,0,0,3.13,2.22,10.25,10.25,0,0,0,4.11.79,9.08,9.08,0,0,0,4.19-.93A8.19,8.19,0,0,0,114,40.74l4.19,2.95a13.43,13.43,0,0,1-4.77,3.8,15.16,15.16,0,0,1-6.6,1.35,17,17,0,0,1-6.33-1.14,14.3,14.3,0,0,1-8.19-8.09,16.46,16.46,0,0,1-1.16-6.29,15.94,15.94,0,0,1,1.22-6.37,14.18,14.18,0,0,1,3.36-4.83,14.94,14.94,0,0,1,5-3.07A18,18,0,0,1,107,18a17,17,0,0,1,2.95.27,15,15,0,0,1,2.95.83,14.3,14.3,0,0,1,2.66,1.39,8.55,8.55,0,0,1,2.12,2Z\" transform=\"translate(-0.5 -0.5)\"/> <path d=\"M118.44,38a10.54,10.54,0,0,1,.85-4.29A9.89,9.89,0,0,1,125,28.33a12.36,12.36,0,0,1,8.46,0,9.9,9.9,0,0,1,5.75,5.42A10.53,10.53,0,0,1,140.1,38a10.67,10.67,0,0,1-.85,4.32,10.23,10.23,0,0,1-2.3,3.34,10.48,10.48,0,0,1-3.44,2.18,11.74,11.74,0,0,1-8.46,0,10.5,10.5,0,0,1-3.44-2.18,10.23,10.23,0,0,1-2.3-3.34A10.69,10.69,0,0,1,118.44,38Zm5.06,0a8,8,0,0,0,.35,2.32,6.37,6.37,0,0,0,1.06,2.08,5.53,5.53,0,0,0,1.78,1.49,6,6,0,0,0,5.15,0,5.54,5.54,0,0,0,1.78-1.49,6.39,6.39,0,0,0,1.06-2.08A8,8,0,0,0,135,38a7.78,7.78,0,0,0-.35-2.3,6.43,6.43,0,0,0-1.06-2.05,5.32,5.32,0,0,0-1.78-1.47,6.18,6.18,0,0,0-5.15,0,5.31,5.31,0,0,0-1.78,1.47,6.41,6.41,0,0,0-1.06,2.05A7.75,7.75,0,0,0,123.51,38Z\" transform=\"translate(-0.5 -0.5)\"/> <path d=\"M143.88,28.17h4.73v3.2h0.08a6.44,6.44,0,0,1,2.3-2.63,6.62,6.62,0,0,1,3.88-1.14,7.5,7.5,0,0,1,3.34.68,6.6,6.6,0,0,1,2.28,1.81,7.29,7.29,0,0,1,1.31,2.57,10.83,10.83,0,0,1,.42,3V48.08h-5V37a14.14,14.14,0,0,0-.12-1.83,4.93,4.93,0,0,0-.54-1.72,3.58,3.58,0,0,0-1.14-1.27,3.35,3.35,0,0,0-1.93-.5,4.25,4.25,0,0,0-2.07.48A4.4,4.4,0,0,0,150,33.44a5.41,5.41,0,0,0-.85,1.72,6.85,6.85,0,0,0-.29,2v11h-5V28.17Z\" transform=\"translate(-0.5 -0.5)\"/> <path d=\"M167,28.17h4.73v3.2h0.08a6.44,6.44,0,0,1,2.3-2.63A6.62,6.62,0,0,1,178,27.59a7.5,7.5,0,0,1,3.34.68,6.6,6.6,0,0,1,2.28,1.81,7.29,7.29,0,0,1,1.31,2.57,10.83,10.83,0,0,1,.42,3V48.08h-5V37a14.14,14.14,0,0,0-.12-1.83,4.93,4.93,0,0,0-.54-1.72,3.58,3.58,0,0,0-1.14-1.27,3.35,3.35,0,0,0-1.93-.5,4.25,4.25,0,0,0-2.07.48,4.4,4.4,0,0,0-1.43,1.22,5.41,5.41,0,0,0-.85,1.72,6.85,6.85,0,0,0-.29,2v11h-5V28.17Z\" transform=\"translate(-0.5 -0.5)\"/> <path d=\"M209.1,38.38V39a5.39,5.39,0,0,1,0,.66H193.91a4.92,4.92,0,0,0,.56,2,5,5,0,0,0,1.27,1.54,6.29,6.29,0,0,0,1.78,1,5.88,5.88,0,0,0,2.07.37,6.65,6.65,0,0,0,3.15-.68A5.9,5.9,0,0,0,204.86,42l3.32,2.66a10,10,0,0,1-8.55,4,12.17,12.17,0,0,1-4.27-.73A10.06,10.06,0,0,1,192,45.89a9.25,9.25,0,0,1-2.24-3.26,11.23,11.23,0,0,1-.81-4.38,11.43,11.43,0,0,1,.81-4.38,9.75,9.75,0,0,1,5.56-5.52,11.19,11.19,0,0,1,4.17-.77,10.52,10.52,0,0,1,3.84.68,8.34,8.34,0,0,1,3,2,9.45,9.45,0,0,1,2,3.36A13.86,13.86,0,0,1,209.1,38.38Zm-5-2.24a6.14,6.14,0,0,0-.27-1.83,4.07,4.07,0,0,0-2.32-2.59,5.15,5.15,0,0,0-2.1-.39,5.6,5.6,0,0,0-3.8,1.35,4.92,4.92,0,0,0-1.72,3.46h10.21Z\" transform=\"translate(-0.5 -0.5)\"/> <path d=\"M226.48,33.69a4.4,4.4,0,0,0-1.74-1.39,5.38,5.38,0,0,0-2.37-.56,5,5,0,0,0-2.41.56,5.22,5.22,0,0,0-1.72,1.47,6.34,6.34,0,0,0-1,2.05,8.19,8.19,0,0,0-.33,2.3,7.75,7.75,0,0,0,.35,2.3,6.43,6.43,0,0,0,1.06,2.05A5.37,5.37,0,0,0,220.07,44a5.2,5.2,0,0,0,2.47.56,6.31,6.31,0,0,0,2.32-.46,4.43,4.43,0,0,0,1.87-1.33l3.11,3.15a8.24,8.24,0,0,1-3.17,2.05,11.76,11.76,0,0,1-4.17.73,12.27,12.27,0,0,1-4.17-.71,9.73,9.73,0,0,1-5.77-5.39,11,11,0,0,1-.85-4.44,10.8,10.8,0,0,1,.85-4.36,10,10,0,0,1,2.3-3.32,10.29,10.29,0,0,1,3.38-2.12,11.54,11.54,0,0,1,8.38.08,8,8,0,0,1,3.26,2.28Z\" transform=\"translate(-0.5 -0.5)\"/> <path d=\"M231.29,32.15v-4h3.49V22.4h4.9v5.77h5v4h-5V41.4a4.54,4.54,0,0,0,.48,2.2,2.23,2.23,0,0,0,2.14.87,6.15,6.15,0,0,0,1.08-.1,4.31,4.31,0,0,0,1-.31l0.17,3.9a8.26,8.26,0,0,1-1.58.39,11.14,11.14,0,0,1-1.74.15,8,8,0,0,1-3.24-.56,4.9,4.9,0,0,1-2-1.54,5.67,5.67,0,0,1-1-2.24,13,13,0,0,1-.27-2.72V32.15h-3.49Z\" transform=\"translate(-0.5 -0.5)\"/> <path d=\"M66.5,33.5a33,33,0,1,1-33-33A33,33,0,0,1,66.5,33.5ZM32,20.33H23.26a13.14,13.14,0,1,0,0,26.29h1.2V42h-1.2a8.53,8.53,0,1,1,0-17.05h4.13V53H32V20.33ZM56.83,33.48A13.16,13.16,0,0,0,43.69,20.33h-1.2V25h1.2a8.53,8.53,0,1,1,0,17.05H39.56V14H34.94V46.62h8.75A13.16,13.16,0,0,0,56.83,33.48Z\" transform=\"translate(-0.5 -0.5)\"/> </g> </svg> </a> </ff-static> <ff-static flex=\"1 1 305px\" ng-if=\"app.connected\"> <ff-icon sense=\"check\"></ff-icon>&nbsp;<span translate=\"INTEGRATIONS_SETUP.QBO.CONNECTED\"></span> </ff-static> </label> <ff-col ng-if=\"app.connected && app.$$qboDepositAccounts\" class=\"animate-collapse\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 50%\"><span translate=\"INTEGRATIONS_SETUP.QBO.TRACK_CLASSES\"></span></ff-label> <ff-static> <ff-checkbox name=\"trackClasses\" ff-model=\"app.trackClasses\" ff-change=\"$ctrl.saveQbApp(app)\"></ff-checkbox> </ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 50%\"><span translate=\"INTEGRATIONS_SETUP.QBO.SECURITY_DEPOSIT_ACCOUNT\"></span></ff-label> <ff-select name=\"qboSecurityDepositAccountId\" ff-model=\"app.qboSecurityDepositAccountId\" ff-options=\"opt.id as opt.name for opt in app.$$qboDepositAccounts\" ff-change=\"$ctrl.saveQbApp(app)\"> <option value=\"\">-</option> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 50%\"><span translate=\"INTEGRATIONS_SETUP.QBO.SECURITY_LIABILITY\"></span></ff-label> <ff-select name=\"qboSecurityLiabilityAccountId\" ff-model=\"app.qboSecurityLiabilityAccountId\" ff-options=\"opt.id as opt.name for opt in app.$$qboLiabilityAccounts\" ff-change=\"$ctrl.saveQbApp(app)\"> <option value=\"\">-</option> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 50%\"><span translate=\"INTEGRATIONS_SETUP.QBO.ACCOUNTS_RECEIVABLE\"></span></ff-label> <ff-select name=\"qboSecurityArAccountId\" ff-model=\"app.qboSecurityArAccountId\" ff-options=\"opt.id as opt.name for opt in app.$$qboArAccounts\" ff-change=\"$ctrl.saveQbApp(app)\"> <option value=\"\">-</option> </ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 50%\"><span translate=\"INTEGRATIONS_SETUP.QBO.CUSTOM_PRODUCT\"></span></ff-label> <ff-search ng-model=\"app.$$qboCustomProduct\" ff-change=\"$ctrl.saveQbApp(app)\" ff-search=\"$ctrl.search(app.$$qboProducts, $search)\" ff-search-filter=\"$ctrl.filter($results, $search)\" placeholder=\"start typing to search...\"> <ff-search-options><h6><span ng-bind-html=\"$search.$$highlighted.name\"></span></h6></ff-search-options> <ff-search-match><h6><span ng-bind=\"ffSearch.ngModel.$modelValue.name\"></span></h6></ff-search-match> </ff-search> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 50%\"><span translate=\"INTEGRATIONS_SETUP.QBO.DISCOUNT_PRODUCT\"></span></ff-label> <ff-search ng-model=\"app.$$qboDiscountProduct\" ff-change=\"$ctrl.saveQbApp(app)\" ff-search=\"$ctrl.search(app.$$qboProducts, $search)\" ff-search-filter=\"$ctrl.filter($results, $search)\" placeholder=\"start typing to search...\"> <ff-search-options><h6><span ng-bind-html=\"$search.$$highlighted.name\"></span></h6></ff-search-options> <ff-search-match><h6><span ng-bind=\"ffSearch.ngModel.$modelValue.name\"></span></h6></ff-search-match> </ff-search> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 50%\"><span translate=\"INTEGRATIONS_SETUP.QBO.NON_MEMBER\"></span></ff-label> <ff-search ng-model=\"app.$$qboNonMember\" ff-change=\"$ctrl.saveQbApp(app)\" ff-search=\"$ctrl.search(app.$$qboCustomers, $search)\" ff-search-filter=\"$ctrl.filter($results, $search)\" placeholder=\"start typing to search...\"> <ff-search-options><h6><span ng-bind-html=\"$search.$$highlighted.name\"></span></h6></ff-search-options> <ff-search-match><h6><span ng-bind=\"ffSearch.ngModel.$modelValue.name\"></span></h6></ff-search-match> </ff-search> </label> </ff-col> </form> <ff-btn-group class=\"ff-section-buttons animate-collapse\" ng-if=\"!$ctrl.spin\"> <ff-btn sense=\"add\" size=\"sm\" ff-click=\"$ctrl.newQbApp()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "../quick-books/settings/quick-books-centers.directive.js":
/*!****************************************************************!*\
  !*** ../quick-books/settings/quick-books-centers.directive.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Integrations Setup -> QuickBooks Centers directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.quickBooksCenters', ['debounce', 'deskworks.center.service', 'deskworks.QuickBooksCenter']).directive('quickBooksCenters', function () {
  var templateUrl = 'settings/quick-books-centers.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'QuickBooksCentersCtrl as $ctrl',
    bindToController: {
      qbApps: '<'
    }
  };
}).controller('QuickBooksCentersCtrl', ["$scope", "$q", "$filter", "$window", "dwAlerts", "debounce", "helper", "centerService", "QuickBooksCenter", function ($scope, $q, $filter, $window, dwAlerts, debounce, helper, centerService, QuickBooksCenter) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };

  $ctrl.$onChanges = function () {
    if ($ctrl.qbApps && $ctrl.qbCenters) {
      $ctrl.qbCenters.forEach(function (center) {
        center.$$app = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $ctrl.qbApps, center.appId);
      });
    }
  };
  /**
   * Load settings
   */


  $ctrl.load = function () {
    $ctrl.spin = true;
    var promises = {
      qbCenters: QuickBooksCenter.query().catch(function (err) {
        return dwAlerts.error(err, 'Failed to query QuickBooks centers.');
      }),
      centers: centerService.getCenters().catch(function (err) {
        return dwAlerts.error(err, 'Failed to query centers.');
      })
    };
    return $q.all(promises).finally(function () {
      $ctrl.spin = false;
    }).then(function (result) {
      $ctrl.qbCenters = result.qbCenters;
      $ctrl.qbCenters.forEach(function (center) {
        center.name = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, result.centers, center.id) || {}).name;
        center.$$app = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $ctrl.qbApps, center.appId);
      });
    });
  };

  $ctrl.save = function (center) {
    center.$$app = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $ctrl.qbApps, center.appId);
    return $ctrl.saveQbCenter(center);
  };
  /**
   * Save QB center
   */


  $ctrl.saveQbCenter = debounce(saveQbCenter, 500);

  function saveQbCenter(center) {
    center.$$spin = true;
    return QuickBooksCenter.save(center).finally(function () {
      center.$$spin = false;
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save QuickBooks center.');
    });
  }
}]));

/***/ }),

/***/ "../quick-books/settings/quick-books-centers.tpl.html":
/*!************************************************************!*\
  !*** ../quick-books/settings/quick-books-centers.tpl.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header><span translate=\"INTEGRATIONS_SETUP.QBO.CENTERS\"></span></ff-panel-header> <ff-row ff-dim=\"true\" ng-if=\"$ctrl.spin && !$ctrl.qbCenters\" class=\"animate-collapse\">&nbsp;</ff-row> <div ng-if=\"!$ctrl.spin && !$ctrl.qbCenters.length\" class=\"animate-collapse\"><span translate=\"GLOBAL.NONE\"></span></div> <form name=\"form\" novalidate ng-repeat=\"center in $ctrl.qbCenters\" class=\"animate-collapse\"> <ff-header ff-dim=\"center.$$spin\" style=\"padding-top:.6rem\"><cell>{{center.name}}</cell></ff-header> <label class=\"ff-row\"> <ff-label flex=\"1 1 270px\"><span translate=\"INTEGRATIONS_SETUP.QBO.ENABLED\"></span></ff-label> <ff-static flex=\"1 1 305px\"> <ff-checkbox name=\"enabled\" ff-model=\"center.enabled\" ff-change=\"$ctrl.saveQbCenter(center)\"></ff-checkbox> </ff-static> </label> <ff-col ng-if=\"center.enabled\" class=\"animate-collapse\"> <label class=\"ff-row\"> <ff-label flex=\"1 1 270px\"><span translate=\"INTEGRATIONS_SETUP.QBO.APP\"></span></ff-label> <ff-select flex=\"1 1 305px\" name=\"appId\" ff-model=\"center.appId\" ff-options=\"opt.id as opt.name for opt in $ctrl.qbApps | filter:{ id: '' }\" ff-change=\"$ctrl.save(center)\"> <option value=\"\">-</option> </ff-select> </label> <ff-col ng-if=\"center.$$app.trackClasses\" class=\"animate-collapse\"> <label class=\"ff-row\" ff-dim=\"!center.$$app.$$qboClasses\"> <ff-label flex=\"1 1 270px\"><span translate=\"INTEGRATIONS_SETUP.QBO.CLASS\"></span></ff-label> <ff-select flex=\"1 1 305px\" name=\"qboClassId\" ff-model=\"center.qboClassId\" ff-options=\"opt.id as opt.name for opt in center.$$app.$$qboClasses\" ff-change=\"$ctrl.save(center)\"> <option value=\"\">-</option> </ff-select> </label> </ff-col> </ff-col> </form> </ff-panel> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=quick-books~.._n.js.map?_rev=4888d06fc39ba4124f03