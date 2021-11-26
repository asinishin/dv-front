(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main~._a"],{

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bundles_bundles_config_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bundles/bundles-config.service.js */ "./bundles/bundles-config.service.js");
/* harmony import */ var shared_scroll_pointer_events_none_scroll_pointer_events_none_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/scroll-pointer-events-none/scroll-pointer-events-none.directive */ "./shared/scroll-pointer-events-none/scroll-pointer-events-none.directive.js");
/* harmony import */ var shared_dw_alerts_dw_alerts_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/dw-alerts/dw-alerts.directive */ "./shared/dw-alerts/dw-alerts.directive.js");
/* harmony import */ var shared_uids_cuid_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/uids/cuid.service */ "./shared/uids/cuid.service.js");



 // for using in early-running config.js




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks', [shared_scroll_pointer_events_none_scroll_pointer_events_none_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_dw_alerts_dw_alerts_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_uids_cuid_service__WEBPACK_IMPORTED_MODULE_6__["default"].name, 'ngRoute', 'ngAnimate', 'ngSanitize', 'ngStorage', 'ngAria', 'oc.lazyLoad', 'pascalprecht.translate', 'snap', 'session', 'deskworks.config', 'deskworks.globalConfig', // important to run ASAP because it patches $routeProvider.when method
'deskworks.templates', 'deskworks.state', 'deskworks.helper', 'deskworks.routeHelper', 'deskworks.sidebar', 'deskworks.whitelabel', 'deskworks.WhiteLabelLinks', 'deskworks.members', 'deskworks.bundles', 'deskworks.billing', 'deskworks.signIn', 'deskworks.isMultiSite', 'deskworks.bundlesConfig']) // NOTE: see global config section in /src/common/global-config.js
.config(["snapRemoteProvider", function (snapRemoteProvider) {
  snapRemoteProvider.globalOptions.disable = 'right';
  snapRemoteProvider.globalOptions.maxPosition = 220; // @sidebar-width
}]).controller('AppCtrl', ["$scope", "$rootScope", "$route", "$window", "$document", "$timeout", "cuid", "whitelabel", "WhiteLabelLinks", "state", "routeHelper", "isMultiSite", function ($scope, $rootScope, $route, $window, $document, $timeout, cuid, whitelabel, WhiteLabelLinks, state, routeHelper, isMultiSite) {
  var $app = this;
  $scope.hideSidebar = true;
  $rootScope.state = state;
  $rootScope.wl = whitelabel;
  $rootScope.cuid = cuid;
  WhiteLabelLinks.get().then(function (links) {
    $rootScope.wlLinks = links;
  });
  var body = angular.element($document[0].body);
  body.removeClass('ff-spin'); // hide first loading spin

  var snapContent = angular.element(body[0].querySelector('snap-content'));
  snapContent.addClass('ff-spin'); // show 2nd loading spin

  /**
   * Route change events
   */

  $scope.$on('$routeChangeStart', function ($event, nextRoute, currentRoute) {
    $app.hideBanner = nextRoute.hideBanner;
    $app.routeClass = 'route' + (nextRoute.$$route ? nextRoute.$$route.originalPath.replace(/\//g, '-') : '');
    $app.routeExtraClass = nextRoute.$$route ? nextRoute.$$route.class : null;
    if (nextRoute.params.landing === 'logout') state.setPath('/sign-out');
    if (nextRoute.params.landing === 'login') routeHelper.auth();
  });
  $scope.$on('$routeChangeSuccess', function (event, currRoute, prevRoute) {
    $scope.hideSidebar = !currRoute.$$route || currRoute.$$route.hideSidebar;
    $scope.landing = currRoute.$$route && currRoute.$$route.landing;
    snapContent.removeClass('ff-spin'); // hide 2nd loading spin
    // $app.hideBanner = currRoute.hideBanner;
    // $app.routeClass = 'route' + currRoute.$$route.originalPath.replace(/\//g, '-');
    // $app.routeExtraClass = currRoute.$$route.class;

    $document[0].querySelector('.snap-content-scroller').scrollTop = 0; // scroll to top of page

    $window.ga('send', 'pageview', {
      page: state.getPath(),
      title: $route.current.label
    }); // Google Analytics
  });
  $scope.$on('$routeChangeError', function (event, currRoute, prevRoute, rejection) {
    if (rejection) console.error(rejection);
  });
  /**
   * Listen for external 'DW:hideHeader' and 'DW:hideSidebarHeader' events
   */

  $window.addEventListener('message', messageListener);

  function messageListener(event) {
    $scope.$apply(function () {
      angular.forEach(event.data, function (item) {
        if (item === 'DW:hideHeader') {
          $app.hideHeader = true;
        } else if (item === 'DW:hideSidebarHeader') {
          $app.hideSidebarHeader = true;
        }
      });
    });
  }

  $scope.$on('$destroy', function () {
    $window.removeEventListener('message', messageListener);
  });
}]));

/***/ }),

/***/ "./app/assets.js":
/*!***********************!*\
  !*** ./app/assets.js ***!
  \***********************/
/*! no exports provided */
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular */ "../node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_4__);







/**
 * Import common JS
 */

function importJs(r) {
  _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_0___default()(r).call(r).forEach(r);
}

importJs(__webpack_require__("./common sync recursive ^(?!.*\\.test\\.js$)^(?!.*\\.spec\\.js$).*\\.js$"));
/**
 * Import Templates
 */

var ctx = __webpack_require__("./common sync recursive .*\\.html$");

angular.module('deskworks.templates', []).run(['$templateCache', function ($templateCache) {
  _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_0___default()(ctx).call(ctx).forEach(function (key) {
    return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
  });
}]);

/***/ }),

/***/ "./app/bundles.js":
/*!************************!*\
  !*** ./app/bundles.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_1__);





var importJs = function importJs(r) {
  var _context;

  return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_1___default()(r).call(r)).call(_context, r);
};

var mods = importJs(__webpack_require__("./bundles sync recursive .*\\.module\\.js$"));
angular.module('deskworks.bundles', []).run(['$ocLazyLoad', function ($ocLazyLoad) {
  $ocLazyLoad.inject(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(mods).call(mods, function (m) {
    return m.default.name;
  }));
}]);

/***/ }),

/***/ "./bundles sync recursive .*\\.module\\.js$":
/*!**************************************!*\
  !*** ./bundles sync .*\.module\.js$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accounting/accounting.module.js": "./bundles/accounting/accounting.module.js",
	"./analytics/analytics.module.js": "./bundles/analytics/analytics.module.js",
	"./book-it-now/book-it-now.module.js": "./bundles/book-it-now/book-it-now.module.js",
	"./bundle-reservation/bundle-reservation.module.js": "./bundles/bundle-reservation/bundle-reservation.module.js",
	"./buy-pass/buy-pass.module.js": "./bundles/buy-pass/buy-pass.module.js",
	"./check-in-form/check-in-form.module.js": "./bundles/check-in-form/check-in-form.module.js",
	"./communications/communications.module.js": "./bundles/communications/communications.module.js",
	"./dashboard/dashboard.module.js": "./bundles/dashboard/dashboard.module.js",
	"./ezeep/ezeep.module.js": "./bundles/ezeep/ezeep.module.js",
	"./floor-plans/floor-plans.module.js": "./bundles/floor-plans/floor-plans.module.js",
	"./import/import.module.js": "./bundles/import/import.module.js",
	"./inventory/inventory.module.js": "./bundles/inventory/inventory.module.js",
	"./invoice/invoice.module.js": "./bundles/invoice/invoice.module.js",
	"./member-sign-up/member-sign-up.module.js": "./bundles/member-sign-up/member-sign-up.module.js",
	"./notifications/notifications.module.js": "./bundles/notifications/notifications.module.js",
	"./payments-assignment/payments-assignment.module.js": "./bundles/payments-assignment/payments-assignment.module.js",
	"./printer-usage/printer-usage.module.js": "./bundles/printer-usage/printer-usage.module.js",
	"./quick-books/quick-books.module.js": "../quick-books/quick-books.module.js",
	"./reports/reports.module.js": "./bundles/reports/reports.module.js",
	"./reservation-tablet/reservation-tablet.module.js": "./bundles/reservation-tablet/reservation-tablet.module.js",
	"./reservations/reservations.module.js": "./bundles/reservations/reservations.module.js",
	"./setup/setup.module.js": "./bundles/setup/setup.module.js",
	"./simple-reservation/simple-reservation.module.js": "./bundles/simple-reservation/simple-reservation.module.js",
	"./system/system.module.js": "./bundles/system/system.module.js",
	"./termination-request/termination-request.module.js": "./bundles/termination-request/termination-request.module.js",
	"./usage/usage.module.js": "./bundles/usage/usage.module.js",
	"./white-label/white-label.module.js": "./bundles/white-label/white-label.module.js"
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
webpackContext.id = "./bundles sync recursive .*\\.module\\.js$";

/***/ }),

/***/ "./bundles/accounting/accounting.module.js":
/*!*************************************************!*\
  !*** ./bundles/accounting/accounting.module.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.accounting', ['ngRoute', 'deskworks.routeHelper', 'deskworks.dwAlerts', 'deskworks.accounting.bulkInvoicing.service', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/bulk-charges', {
    template: '<div ng-include="\'bulk-charges/bulk-charges.tpl.html\'"></div>',
    controller: 'AccountingBulkChargesCtrl as vm',
    label: 'Bulk Charges',
    routeBranch: 'bulk-charges',
    translations: ['purchase', 'bulk-charges'],
    resolve: {
      invoices: ["dwAlerts", "bulkInvoicingService", "state", "routeHelper", function invoices(dwAlerts, bulkInvoicingService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return bulkInvoicingService.getPurchases(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query orders.');
          });
        });
      }],
      lazy: 'lazyLoadAccounting'
    }
  });
  $routeProvider.when('/bulk-invoicing', {
    template: '<div ng-include="\'bulk-invoicing/bulk-invoicing.tpl.html\'"></div>',
    controller: 'AccountingBulkInvoicingCtrl as vm',
    label: 'Bulk Invoicing',
    routeBranch: 'bulk-invoicing',
    translations: ['purchase', 'bulk-invoicing'],
    resolve: {
      invoices: ["dwAlerts", "bulkInvoicingService", "state", "routeHelper", function invoices(dwAlerts, bulkInvoicingService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return bulkInvoicingService.getInvoices(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query invoices.');
          });
        });
      }],
      lazy: 'lazyLoadAccounting'
    }
  });
  $routeProvider.when('/invoice-log', {
    template: '<div ng-include="\'invoice-log/invoice-log.tpl.html\'"></div>',
    controller: 'InvoiceLogCtrl as $ctrl',
    routeBranch: 'invoice-log',
    translations: ['invoice-log'],
    reloadOnSearch: false,
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadAccounting'
    }
  });
  $routeProvider.when('/accounting-periods', {
    template: '<div ng-include="\'accounting-periods/accounting-periods.tpl.html\'"></div>',
    controller: 'AccountingPeriodsCtrl as $ctrl',
    routeBranch: 'accounting-periods',
    translations: ['accounting-periods'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadAccounting'
    }
  });
}]));

/***/ }),

/***/ "./bundles/analytics/analytics.module.js":
/*!***********************************************!*\
  !*** ./bundles/analytics/analytics.module.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.analytics', ['oc.lazyLoad', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/analytics-dashboard', {
    template: '<div ng-include="\'dashboard/analytics-dashboard.tpl.html\'"></div>',
    controller: 'AnalyticsDashboardCtrl as $ctrl',
    routeBranch: 'analytics-dashboard',
    reloadOnSearch: false,
    translations: ['charts', 'analytics'],
    resolve: {
      lazy: 'lazyLoadAnalytics'
    }
  });
}]));

/***/ }),

/***/ "./bundles/book-it-now/book-it-now.module.js":
/*!***************************************************!*\
  !*** ./bundles/book-it-now/book-it-now.module.js ***!
  \***************************************************/
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
/* harmony import */ var bundles_lazy_loaders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bundles/lazy-loaders.service */ "./bundles/lazy-loaders.service.js");
/* harmony import */ var shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/setup/reservation-field.service */ "./shared/services/setup/reservation-field.service.js");
/* harmony import */ var shared_wizard_reservation_wizard_reservation_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/wizard-reservation/wizard-reservation-routes */ "./shared/wizard-reservation/wizard-reservation-routes.js");







function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bookItNow', ['ngRoute', 'session', 'deskworks.rcHelper', 'deskworks.center.service', 'deskworks.calendarService', 'deskworks.userProfile.service', 'deskworks.purchase.service', 'deskworks.setup.service', bundles_lazy_loaders_service__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_8__["default"].name]).config(["$routeProvider", function ($routeProvider) {
  var authUrl = '/book-it-now/sign-in';
  /**
   * 01. Book It Now: Calendar
   */

  $routeProvider.when('/book-it-now', {
    template: '<rc-calendar cal-data="$resolve.calData" settings="$resolve.settings" next="$ctrl.next()" show-pricing="true"></rc-calendar>',
    controller: 'BookItNowCalendarCtrl as $ctrl',
    routeBranch: 'book-it-now',
    hideSidebar: true,
    hideBanner: true,
    userTasksPolicy: false,
    translations: ['reservations', 'book-it-now'],
    resolve: {
      calData: ["$q", "$filter", "state", "helper", "dwAlerts", "calendarService", "rcHelper", "resolveTimezone", "session", "centerService", function calData($q, $filter, state, helper, dwAlerts, calendarService, rcHelper, resolveTimezone, session, centerService) {
        var centersPromise = centerService.getCenters().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query centers.');
        });
        return $q.all([centersPromise, session.wait().catch(angular.noop), resolveTimezone()]).then(function (result) {
          var date = $filter('toDate')(state.getParam('date'), 'Z');
          date = moment.isMoment(date) ? date : moment();
          if (!result[0].length) return dwAlerts.error('No centers available');
          if (!state.getCurrentCenterId()) state.setCurrentCenterId(result[0][0].id); // auto-select center

          return calendarService.query(state.getCurrentCenterId(), rcHelper.weekStart(date), rcHelper.weekEnd(date)).catch(function (err) {
            return dwAlerts.error(err, 'Failed to fetch calendar data.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy: 'lazyBookItNow'
    }
  });
  /**
   * Wizard Reservation routes
   */

  shared_wizard_reservation_wizard_reservation_routes__WEBPACK_IMPORTED_MODULE_9__["default"].routes.forEach(function (route) {
    $routeProvider.when("/book-it-now/".concat(route.url), wrap(shared_wizard_reservation_wizard_reservation_routes__WEBPACK_IMPORTED_MODULE_9__["default"][route.id]));
  });

  function wrap(route) {
    return _objectSpread(_objectSpread({}, route), {}, {
      routeBranch: 'book-it-now',
      hideSidebar: true,
      resolve: _objectSpread(_objectSpread({}, route.resolve), {}, {
        lazy: 'lazyBookItNow'
      })
    });
  }
}]));

/***/ }),

/***/ "./bundles/bundle-reservation/bundle-reservation.module.js":
/*!*****************************************************************!*\
  !*** ./bundles/bundle-reservation/bundle-reservation.module.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bundleReservation', ['ngRoute', 'deskworks.routeHelper', 'deskworks.dwAlerts', 'deskworks.setup.service', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  brAuth.$inject = ["$route", "helper", "routeHelper"];

  // Bundle Reservation Auth helper
  function brAuth($route, helper, routeHelper) {
    return routeHelper.auth(helper.interpolateRoute('/bundle-reservation/:reservationBundleId', $route.current.params));
  }
  /**
   * Sign-In
   */


  $routeProvider.when('/bundle-reservation/:reservationBundleId', {
    template: '<dw-sign-in id="signIn" show-sign-up="true"></dw-sign-in>',
    controller: 'BundleReservationSignInCtrl',
    controllerAs: 'vm',
    routeBranch: 'bundle-reservation',
    translations: ['sign-in'],
    hideSidebar: true,
    userTasksPolicy: false,
    resolve: {
      redirect: ["$q", "state", "routeHelper", "dwAlerts", "userProfileService", function redirect($q, state, routeHelper, dwAlerts, userProfileService) {
        return routeHelper.auth(null).then(function () {
          // If user is logged in, redirect to Bundle Reservation / User Profile or Confirm Reservation
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to load user profile.');
          }).then(function (user) {
            if (user.role === 'nonMember') {
              state.setPath(state.getPath() + '/user-profile', true);
            } else {
              state.setPath(state.getPath() + '/confirm', true);
            }

            return $q.reject();
          });
        }, function () {}); // If user is not logged in continue to Sign In form
      }],
      lazy: 'lazyLoadBundleReservation'
    }
  });
  /**
   * User Profile
   */

  $routeProvider.when('/bundle-reservation/:reservationBundleId/user-profile', {
    template: '<div ng-include="\'templates/new-user-profile.tpl.html\'"></div>',
    controller: 'BundleReservationUserProfileCtrl',
    controllerAs: 'vm',
    label: 'Profile',
    routeBranch: 'bundle-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['user-profile'],
    resolve: {
      reg: function reg() {
        return {
          member: false,
          selfRegistration: true
        };
      },
      userProfile: ["state", "$q", "dwAlerts", "helper", "routeHelper", "userProfileService", function userProfile(state, $q, dwAlerts, helper, routeHelper, userProfileService) {
        return routeHelper.auth(null).then(function () {
          if (!state.getCurrentCenterId()) return $q.reject();
          return userProfileService.getForRegistration(state.getCurrentCenterId(), state.getCurrentUserId(), 'nonMember', 'signUp').catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        }, function () {
          return userProfileService.new({}, 'nonMember', 'signUp').catch(function (err) {
            return dwAlerts.error(err, 'Failed to get new member profile template.');
          });
        });
      }],
      centers: ["dwAlerts", "centerService", function centers(dwAlerts, centerService) {
        centerService.resetCache();
        return centerService.getCenters().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      lazy: 'lazyLoadBundleReservation'
    }
  });
  /**
   * Purchase
   */

  $routeProvider.when('/bundle-reservation/:reservationBundleId/user-profile/purchase/:purchaseId', {
    template: '<div ng-include="\'steps/bundle-reservation-purchase.tpl.html\'"></div>',
    controller: 'BundleReservationPurchaseCtrl',
    controllerAs: '$ctrl',
    label: 'Purchase',
    routeBranch: 'bundle-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['purchase', 'simple-reservation'],
    resolve: {
      reg: function reg() {
        return {
          member: false,
          selfRegistration: true
        };
      },
      center: ["dwAlerts", "state", "centerService", function center(dwAlerts, state, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center data.');
        });
      }],
      purchase: ["$route", "dwAlerts", "state", "helper", "routeHelper", "purchaseService", function purchase($route, dwAlerts, state, helper, routeHelper, purchaseService) {
        return brAuth($route, helper, routeHelper).then(function () {
          return purchaseService.get(state.getCurrentCenterId(), state.getCurrentUserId(), $route.current.params.purchaseId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get purchase.');
          });
        });
      }],
      lazy: 'lazyLoadBundleReservation'
    }
  });
  /**
   * Staff Help
   */

  $routeProvider.when('/bundle-reservation/:reservationBundleId/user-profile/purchase/:purchaseId/staff-help', {
    template: '<div ng-include="\'staff-help/staff-help.tpl.html\'"></div>',
    controller: 'BundleReservationStaffHelpCtrl',
    controllerAs: 'vm',
    label: 'Staff Help',
    routeBranch: 'bundle-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation'],
    resolve: {
      auth: brAuth,
      lazy: 'lazyLoadBundleReservation'
    }
  });
  /**
   * Billing
   */

  $routeProvider.when('/bundle-reservation/:reservationBundleId/user-profile/purchase/:purchaseId/billing', {
    template: '<div ng-include="\'templates/new-billing-profile.tpl.html\'"></div>',
    controller: 'BundleReservationBillingCtrl',
    controllerAs: 'vm',
    label: 'Billing',
    routeBranch: 'bundle-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['billing-profile', 'user-profile', 'simple-reservation'],
    resolve: {
      reg: function reg() {
        return {
          member: false,
          selfRegistration: true
        };
      },
      userProfile: ["dwAlerts", "$route", "helper", "state", "routeHelper", "userProfileService", function userProfile(dwAlerts, $route, helper, state, routeHelper, userProfileService) {
        return brAuth($route, helper, routeHelper).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      center: ["dwAlerts", "state", "centerService", function center(dwAlerts, state, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center data.');
        });
      }],
      lazy: 'lazyLoadBundleReservation'
    }
  });
  /**
   * Complete
   */

  $routeProvider.when('/bundle-reservation/:reservationBundleId/user-profile/purchase/:purchaseId/billing/complete', {
    template: '<div ng-include="\'steps/bundle-reservation-complete.tpl.html\'"></div>',
    controller: 'BundleReservationCompleteCtrl',
    label: 'Complete',
    routeBranch: 'bundle-reservation',
    controllerAs: 'vm',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['purchase', 'simple-reservation'],
    resolve: {
      reg: function reg() {
        return {
          member: false,
          selfRegistration: true
        };
      },
      purchase: ["dwAlerts", "$route", "state", "helper", "routeHelper", "purchaseService", function purchase(dwAlerts, $route, state, helper, routeHelper, purchaseService) {
        return brAuth($route, helper, routeHelper).then(function () {
          return purchaseService.get(state.getCurrentCenterId(), state.getCurrentUserId(), $route.current.params.purchaseId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get purchase.');
          });
        });
      }],
      center: ["dwAlerts", "$route", "state", "centerService", function center(dwAlerts, $route, state, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      lazy: 'lazyLoadBundleReservation'
    }
  });
  /**
   * Confirm Reservation for Member only
   */

  $routeProvider.when('/bundle-reservation/:reservationBundleId/confirm', {
    template: '<div ng-include="\'steps/bundle-reservation-confirm.tpl.html\'"></div>',
    controller: 'BundleReservationConfirmCtrl',
    controllerAs: 'vm',
    routeBranch: 'bundle-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['reservations'],
    resolve: {
      auth: brAuth,
      lazy: 'lazyLoadBundleReservation'
    }
  });
  /**
   * Complete for Member only
   */

  $routeProvider.when('/bundle-reservation/:reservationBundleId/complete', {
    template: '<div ng-include="\'steps/bundle-reservation-complete-member.tpl.html\'"></div>',
    controller: 'BundleReservationCompleteCtrl',
    label: 'Complete',
    routeBranch: 'bundle-reservation',
    controllerAs: 'vm',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation'],
    resolve: {
      purchase: function purchase() {
        return null;
      },
      center: function center() {
        return null;
      },
      lazy: 'lazyLoadBundleReservation'
    }
  });
}]));

/***/ }),

/***/ "./bundles/bundles-config.service.js":
/*!*******************************************!*\
  !*** ./bundles/bundles-config.service.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.bundlesConfig', ['ngResource']).provider('bundlesConfig', function () {
  var bundles = [{
    id: 'dashboard',
    enabled: true,
    required: true,
    name: 'Dashboard'
  }, {
    id: 'reservations',
    enabled: true,
    required: true,
    name: 'Reservations'
  }, {
    id: 'usage',
    enabled: true,
    required: true,
    name: 'Usage'
  }, {
    id: 'notifications',
    enabled: true,
    required: true,
    name: 'Notifications'
  }, {
    id: 'communications',
    enabled: true,
    required: true,
    name: 'Communications'
  }, {
    id: 'accounting',
    enabled: true,
    required: true,
    name: 'Accounting'
  }, {
    id: 'inventory',
    enabled: true,
    required: true,
    name: 'Inventory'
  }, {
    id: 'system',
    enabled: true,
    required: true,
    name: 'System'
  }, {
    id: 'reports',
    enabled: true,
    required: true
  }, {
    id: 'setup',
    enabled: true,
    required: true,
    name: 'Setup'
  }, {
    id: 'reports',
    enabled: true,
    required: true,
    name: 'Reports'
  }, {
    id: 'white-label',
    enabled: true,
    required: true,
    name: 'White-Label'
  }, {
    id: 'import',
    enabled: true,
    required: false,
    name: 'Import'
  }, {
    id: 'printer-usage',
    enabled: true,
    required: false,
    name: 'Printer Usage'
  }, {
    id: 'floor-plans',
    enabled: true,
    required: false,
    name: 'Floor Plans'
  }, {
    id: 'check-in-form',
    enabled: true,
    required: false,
    name: 'Check In Form'
  }, {
    id: 'termination-request',
    enabled: false,
    required: false,
    name: 'Termination Request'
  }, {
    id: 'payments-assignment',
    enabled: true,
    required: false,
    name: 'Payments Assignment'
  }, {
    id: 'deskworks-sweep',
    enabled: false,
    required: false,
    name: 'Deskworks Sweep'
  }, // Wizards
  {
    id: 'simple-reservation',
    enabled: true,
    required: false,
    name: 'Simple Reservation wizard'
  }, {
    id: 'bundle-reservation',
    enabled: false,
    required: false,
    name: 'Bundle Reservation wizard'
  }, {
    id: 'buy-pass',
    enabled: true,
    required: false,
    name: 'Buy A Pass wizard'
  }, {
    id: 'member-sign-up',
    enabled: true,
    required: false,
    name: 'Member Sign Up wizard'
  }, {
    id: 'reservation-tablet',
    enabled: true,
    required: false,
    name: 'Reservation Tablet wizard'
  }, {
    id: 'book-it-now',
    enabled: true,
    required: false,
    name: 'Book It Now wizard'
  }, // Integrations
  {
    id: 'appointment-plus',
    enabled: false,
    required: false,
    name: 'AppointmentPlus integration'
  }, {
    id: 'quick-books',
    enabled: false,
    required: false,
    name: 'QuickBooks integration'
  }, {
    id: 'teamgo',
    enabled: false,
    required: false,
    name: 'Teamgo integration'
  }, {
    id: 'kisi',
    enabled: false,
    required: false,
    name: 'Kisi integration'
  }, {
    id: 'doorflow',
    enabled: false,
    required: false,
    name: 'DoorFlow integration'
  }, {
    id: 'ezeep',
    enabled: false,
    required: false,
    name: 'Ezeep integration'
  }, {
    id: 'greetly',
    enabled: false,
    required: false,
    name: 'Greetly integration'
  }, {
    id: 'affiliatly',
    enabled: false,
    required: false,
    name: 'Affiliatly integration'
  }];
  var defaults = bundles.reduce(function (result, bundle) {
    result[bundle.id] = bundle.enabled;
    return result;
  }, {});
  return {
    enable: function enable(id) {
      defaults[id] = true;
    },
    disable: function disable(id) {
      defaults[id] = false;
    },
    $get: ["$resource", "autoCacheFactory", "deskworksConfig", function $get($resource, autoCacheFactory, deskworksConfig) {
      var cache = autoCacheFactory('bundles-config', 120);
      var res = $resource(deskworksConfig.getApiAbsUrl('/white-label/bundles'), {}, {
        get: {
          method: 'GET',
          cache: cache
        },
        update: {
          method: 'PUT'
        }
      });
      return {
        enable: function enable(id) {
          defaults[id] = true;
        },
        disable: function disable(id) {
          defaults[id] = false;
        },
        getOptionalBundles: function getOptionalBundles() {
          return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(bundles).call(bundles, function (b) {
            return !b.required;
          });
        },
        get: function get() {
          return res.get().$promise.then(function (config) {
            return angular.extend({}, defaults, config);
          });
        },
        save: function save(config) {
          return res.update({}, config).$promise.finally(function () {
            return cache.removeAll();
          });
        }
      };
    }]
  };
}));

/***/ }),

/***/ "./bundles/buy-pass/buy-pass.module.js":
/*!*********************************************!*\
  !*** ./bundles/buy-pass/buy-pass.module.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");
/* harmony import */ var shared_forbid_forbid_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/forbid/forbid.directive */ "./shared/forbid/forbid.directive.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.buyPass', [bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_forbid_forbid_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, 'deskworks.PassProduct.service', 'deskworks.setup.service']).config(["$routeProvider", function ($routeProvider) {
  var authUrl = '/buy-pass/user';
  /**
   * Buy Pass -> Select A Pass
   */

  $routeProvider.when('/buy-pass', {
    template: '<forbid admin="true"><div><ng-include src="\'steps/01-select-pass.tpl.html\'"></ng-include></div></forbid>',
    controller: 'BuyPassSelectPassCtrl as $ctrl',
    routeBranch: 'buy-pass',
    hideSidebar: true,
    userTasksPolicy: false,
    reloadOnSearch: false,
    translations: ['buy-pass'],
    resolve: {
      reg: function reg() {
        return {};
      },
      passes: ["state", "dwAlerts", "PassProduct", function passes(state, dwAlerts, PassProduct) {
        if (!state.getCurrentCenterId()) return dwAlerts.error(null, 'Center is not selected.');
        return PassProduct.query(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to query pass products.');
        });
      }],
      center: ["state", "dwAlerts", "centerService", function center(state, dwAlerts, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      lazy: 'lazyLoadBuyPass'
    }
  });
  /**
   * Sign-In
   */

  $routeProvider.when('/buy-pass/user', {
    template: '<forbid admin="true"><div><dw-sign-in id="signIn" show-sign-up="true"></dw-sign-in></div></forbid>',
    controller: 'BuyPassSignInCtrl as vm',
    routeBranch: 'buy-pass',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['sign-in'],
    resolve: {
      redirect: ["$q", "state", function redirect($q, state) {
        if (state.getLoggedUserId()) {
          // redirect logged user to Buy Pass -> User Profile
          state.setPath(state.getPath() + '/' + state.getLoggedUserId(), true);
          return $q.reject();
        }
      }],
      lazy: 'lazyLoadBuyPass'
    }
  });
  /**
   * User Profile
   */

  $routeProvider.when('/buy-pass/user/:userId', {
    template: '<forbid admin="true"><div><ng-include src="\'templates/new-user-profile.tpl.html\'"></ng-include></div></forbid>',
    controller: 'BuyPassUserProfileCtrl as vm',
    routeBranch: 'buy-pass',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['user-profile'],
    resolve: {
      reg: ["$route", function reg($route) {
        return {
          member: false,
          selfRegistration: true,
          new: $route.current.params.userId === 'new'
        };
      }],
      userProfile: ["$q", "$route", "helper", "state", "routeHelper", "dwAlerts", "userProfileService", "centerService", "resolveTimezone", function userProfile($q, $route, helper, state, routeHelper, dwAlerts, userProfileService, centerService, resolveTimezone) {
        if ($route.current.params.userId === 'new') {
          return centerService.get(state.getCurrentCenterId()).then(function (center) {
            return userProfileService.new(center, 'nonMember', 'signUp').catch(function (err) {
              return dwAlerts.error(err, 'Failed to get new user profile template.');
            });
          });
        } else {
          return $q.all([routeHelper.auth(authUrl), resolveTimezone()]).then(function () {
            return userProfileService.getForRegistration(state.getCurrentCenterId(), $route.current.params.userId, 'nonMember', 'signUp').catch(function (err) {
              return dwAlerts.error(err, 'Failed to get user profile.');
            });
          });
        }
      }],
      center: ["state", "dwAlerts", "centerService", function center(state, dwAlerts, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      lazy: 'lazyLoadBuyPass'
    }
  });
  /**
   * Purchase
   */

  $routeProvider.when('/buy-pass/user/:userId/purchase/:purchaseId', {
    template: '<forbid admin="true"><div><ng-include src="\'steps/04-purchase.tpl.html\'"></ng-include></div></forbid>',
    controller: 'BuyPassPurchaseCtrl',
    controllerAs: '$ctrl',
    routeBranch: 'buy-pass',
    hideSidebar: true,
    userTasksPolicy: false,
    reloadOnSearch: false,
    translations: ['buy-pass', 'purchase', 'billing-profile', 'user-profile', 'simple-reservation'],
    resolve: {
      reg: function reg() {
        return {
          member: false,
          selfRegistration: true
        };
      },
      center: ["state", "dwAlerts", "centerService", function center(state, dwAlerts, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      purchase: ["$q", "$route", "dwAlerts", "state", "routeHelper", "purchaseService", "resolveTimezone", function purchase($q, $route, dwAlerts, state, routeHelper, purchaseService, resolveTimezone) {
        return $q.all([routeHelper.auth(authUrl), resolveTimezone()]).then(function () {
          return purchaseService.get(state.getCurrentCenterId(), $route.current.params.userId, $route.current.params.purchaseId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get purchase.');
          });
        });
      }],
      user: ["$q", "$route", "dwAlerts", "state", "routeHelper", "userProfileService", "resolveTimezone", function user($q, $route, dwAlerts, state, routeHelper, userProfileService, resolveTimezone) {
        return $q.all([routeHelper.auth(authUrl), resolveTimezone()]).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), $route.current.params.userId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy: 'lazyLoadBuyPass'
    }
  });
  /**
   * Staff Help
   */

  $routeProvider.when('/buy-pass/user/:userId/purchase/:purchaseId/staff-help', {
    template: '<forbid admin="true"><div><ng-include src="\'staff-help/staff-help.tpl.html\'"></ng-include></div></forbid>',
    controller: 'BuyPassStaffHelpCtrl as vm',
    routeBranch: 'buy-pass',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth(authUrl);
      }],
      lazy: 'lazyLoadBuyPass'
    }
  });
  /**
   * Complete
   */

  $routeProvider.when('/buy-pass/user/:userId/purchase/:purchaseId/complete', {
    template: '<forbid admin="true"><div><ng-include src="\'steps/06-complete.tpl.html\'"></ng-include></div></forbid>',
    controller: 'BuyPassCompleteCtrl as $ctrl',
    routeBranch: 'buy-pass',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['buy-pass'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth(authUrl);
      }],
      lazy: 'lazyLoadBuyPass'
    }
  });
}]));

/***/ }),

/***/ "./bundles/check-in-form/check-in-form.module.js":
/*!*******************************************************!*\
  !*** ./bundles/check-in-form/check-in-form.module.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.checkInForm', [bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].name]).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/check-in', {
    template: '<div ng-include="\'check-in/check-in.tpl.html\'"></div>',
    controller: 'CheckInFormCtrl as vm',
    hideSidebar: true,
    userTasksPolicy: false,
    landing: true,
    resolve: {
      center: ["state", "helper", "dwAlerts", "centerService", function center(state, helper, dwAlerts, centerService) {
        return centerService.getCenters().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query centers.');
        }).then(function (centers) {
          return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, centers, state.getCurrentCenterId()) || centers[0] || {};
        });
      }],
      lazy: 'lazyLoadCheckInForm'
    }
  });
}]));

/***/ }),

/***/ "./bundles/communications/communications.module.js":
/*!*********************************************************!*\
  !*** ./bundles/communications/communications.module.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.communications', ['deskworks.routeHelper', 'deskworks.dwAlerts', 'deskworks.center.service', 'deskworks.inventory.membershipCategory.service', 'deskworks.SplashPage', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/email-all-members', {
    template: '<div ng-include="\'email-all-members/email-all-members.tpl.html\'"></div>',
    controller: 'EmailAllMembersCtrl as $ctrl',
    label: 'Email All Members',
    routeBranch: 'email-all-members',
    translations: ['email-members', 'short-codes', 'attachments'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadCommunications'
    }
  });
  $routeProvider.when('/email-site-members', {
    template: '<div ng-include="\'email-site-members/email-site-members.tpl.html\'"></div>',
    controller: 'EmailSiteMembersCtrl as $ctrl',
    label: 'Email Site Members',
    routeBranch: 'email-site-members',
    translations: ['email-members', 'short-codes', 'attachments'],
    resolve: {
      membershipCategories: ["dwAlerts", "membershipCategoryService", "state", "routeHelper", function membershipCategories(dwAlerts, membershipCategoryService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return membershipCategoryService.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query membership categories.');
          });
        });
      }],
      center: ["dwAlerts", "state", "centerService", function center(dwAlerts, state, centerService) {
        return centerService.getCenter(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      lazy: 'lazyLoadCommunications'
    }
  });
  $routeProvider.when('/message-board', {
    template: '<div ng-include="\'message-board/message-board.tpl.html\'"></div>',
    controller: 'MessageBoardCtrl as $ctrl',
    label: 'Message Board',
    routeBranch: 'message-board',
    translations: ['message-board'],
    resolve: {
      lazy: 'lazyLoadCommunications'
    }
  });
  $routeProvider.when('/splash-page', {
    template: '<div ng-include="\'splash-page/splash-page.tpl.html\'"></div>',
    controller: 'SplashPageCtrl as $ctrl',
    label: 'Splash Page',
    routeBranch: 'splash-page',
    translations: ['splash-page'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      center: ["dwAlerts", "state", "centerService", function center(dwAlerts, state, centerService) {
        return centerService.getCenter(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      splashPage: ["dwAlerts", "SplashPage", "state", "routeHelper", function splashPage(dwAlerts, SplashPage, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return SplashPage.get(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get splash page settings.');
          });
        });
      }],
      lazy: 'lazyLoadCommunications'
    }
  });
}]));

/***/ }),

/***/ "./bundles/dashboard/dashboard.module.js":
/*!***********************************************!*\
  !*** ./bundles/dashboard/dashboard.module.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard', ['ngRoute', 'deskworks.routeHelper', 'deskworks.state', 'deskworks.dwAlerts.service', 'deskworks.Admin', 'deskworks.userProfile.service', 'deskworks.setup.service', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/dashboard', {
    template: '<div ng-include="\'dashboard-user/dashboard-user.tpl.html\'"></div>',
    controller: 'DashboardUserCtrl',
    controllerAs: 'vm',
    label: 'Dashboard',
    routeBranch: 'dashboard',
    translations: ['dashboard'],
    resolve: {
      user: ["$q", "dwAlerts", "routeHelper", "state", "userProfileService", "resolveTimezone", function user($q, dwAlerts, routeHelper, state, userProfileService, resolveTimezone) {
        return routeHelper.auth().then(function () {
          if (state.isLoggedAdmin()) {
            // redirect to Admin Dashboard for admins/coordinators
            state.setPath('/dashboard-admin', true);
            return $q.reject();
          }

          return resolveTimezone().then(function () {
            return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
              return dwAlerts.error(err, 'Failed to get user profile.');
            });
          });
        });
      }],
      userLogged: ["dwAlerts", "state", "routeHelper", "userProfileService", "resolveTimezone", function userLogged(dwAlerts, state, routeHelper, userProfileService, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getLoggedUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy: 'lazyLoadDashboard'
    }
  });
}]).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/dashboard-admin', {
    template: '<div ng-include="\'dashboard-admin/dashboard-admin.tpl.html\'"></div>',
    controller: 'DashboardAdminCtrl as vm',
    label: 'Dashboard',
    routeBranch: 'dashboard',
    translations: ['dashboard'],
    resolve: {
      admin: ["$q", "dwAlerts", "routeHelper", "state", "userProfileService", "Admin", "resolveTimezone", function admin($q, dwAlerts, routeHelper, state, userProfileService, Admin, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return resolveTimezone();
        }).then(function () {
          return $q.all([userProfileService.get(state.getCurrentCenterId(), state.getLoggedUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get admin profile.');
          }), Admin.get(state.getLoggedUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get admin.');
          })]).then(function (results) {
            return angular.extend(results[1], results[2]);
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy: 'lazyLoadDashboard'
    }
  });
}]).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/access-code-of-the-day', {
    template: '<div ng-include="\'access-code-of-the-day/access-code-of-the-day.tpl.html\'"></div>',
    controller: 'AccessCodeOfTheDayCtrl as $ctrl',
    routeBranch: 'access-code-of-the-day',
    // translations: ['dashboard'],
    userTasksPolicy: false,
    hideSidebar: true,
    resolve: {
      lazy: 'lazyLoadDashboard'
    }
  });
}]));

/***/ }),

/***/ "./bundles/ezeep/ezeep.module.js":
/*!***************************************!*\
  !*** ./bundles/ezeep/ezeep.module.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service */ "./bundles/lazy-loaders.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ezeep', ['ngRoute', 'deskworks.routeHelper', bundles_lazy_loaders_service__WEBPACK_IMPORTED_MODULE_0__["default"].name]).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/ezeep-errors', {
    template: '<div ng-include="\'errors/ezeep-errors.tpl.html\'"></div>',
    controller: 'EzeepErrorsCtrl as $ctrl',
    routeBranch: 'ezeep-errors',
    translations: ['ezeep-errors'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadEzeep'
    }
  });
}]));

/***/ }),

/***/ "./bundles/floor-plans/floor-plans.module.js":
/*!***************************************************!*\
  !*** ./bundles/floor-plans/floor-plans.module.js ***!
  \***************************************************/
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
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");
/* harmony import */ var shared_wizard_reservation_wizard_reservation_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/wizard-reservation/wizard-reservation-routes */ "./shared/wizard-reservation/wizard-reservation-routes.js");







function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.floorPlans', ['ngRoute', 'deskworks.routeHelper', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  /**
   * Inventory -> Floor Plans
   */
  $routeProvider.when('/floor-plans', {
    template: '<div ng-include="\'floor-plans/floor-plans.tpl.html\'"></div>',
    controller: 'FloorPlansCtrl as $ctrl',
    routeBranch: 'floor-plans',
    translations: ['floor-plans', 'reservations'],
    resolve: {
      auth: ["$q", "routeHelper", "resolveTimezone", function auth($q, routeHelper, resolveTimezone) {
        return $q.all([routeHelper.auth(), resolveTimezone()]);
      }],
      lazy: 'lazyLoadFloorPlans'
    }
  });
  /**
   * Members -> Floor Plans (community view)
   */

  $routeProvider.when('/floor-plans-community', {
    template: '<div ng-include="\'floor-plans-community/floor-plans-community.tpl.html\'"></div>',
    controller: 'FloorPlansCommunityCtrl as $ctrl',
    routeBranch: 'floor-plans-community',
    translations: ['floor-plans', 'reservations'],
    resolve: {
      auth: ["$q", "routeHelper", "resolveTimezone", function auth($q, routeHelper, resolveTimezone) {
        return $q.all([routeHelper.auth(), resolveTimezone()]);
      }],
      lazy: 'lazyLoadFloorPlans'
    }
  });
  /**
   * Members -> Floor Plans Reservation
   */

  $routeProvider.when('/floor-plans-reservation', wrap({
    template: '<div ng-include="\'floor-plans-reservation/floor-plans-reservation.tpl.html\'"></div>',
    controller: 'FloorPlansReservationCtrl as $ctrl',
    translations: ['floor-plans', 'reservations'],
    userTasksPolicy: false,
    resolve: {
      /*@ngInject*/
      auth: ["resolveTimezone", function auth(resolveTimezone) {
        return resolveTimezone();
      }]
    }
  }));
  /**
   * Wizard Reservation routes
   */

  shared_wizard_reservation_wizard_reservation_routes__WEBPACK_IMPORTED_MODULE_8__["default"].routes.forEach(function (route) {
    $routeProvider.when("/floor-plans-reservation/".concat(route.url), wrap(shared_wizard_reservation_wizard_reservation_routes__WEBPACK_IMPORTED_MODULE_8__["default"][route.id]));
  });

  function wrap(route) {
    return _objectSpread(_objectSpread({}, route), {}, {
      routeBranch: 'floor-plans-reservation',
      resolve: _objectSpread(_objectSpread({}, route.resolve), {}, {
        lazy: 'lazyLoadFloorPlans',

        /*@ngInject*/
        hideSidebar: ["$route", "session", "state", function hideSidebar($route, session, state) {
          return session.wait().catch(angular.noop).then(function () {
            $route.current.$$route.hideSidebar = session.isAnonymous() || !!state.getParam('landing');
          });
        }]
      })
    });
  }
}]));

/***/ }),

/***/ "./bundles/import/import.module.js":
/*!*****************************************!*\
  !*** ./bundles/import/import.module.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");
/* harmony import */ var _import_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import.scss */ "./bundles/import/import.scss");
/* harmony import */ var _import_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_scss__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.import', ['deskworks.routeHelper', 'deskworks.dwAlerts', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/setup/import', {
    template: '<div ng-include="\'wizard/import.tpl.html\'"></div>',
    controller: 'SetupImportCtrl as $ctrl',
    label: 'Setup Import',
    routeBranch: 'setup/import',
    translations: ['reservation-rules', 'user-profile', 'billing-profile', 'products', 'recurring-billing'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadImport'
    }
  });
}]));

/***/ }),

/***/ "./bundles/import/import.scss":
/*!************************************!*\
  !*** ./bundles/import/import.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/inventory/inventory.module.js":
/*!***********************************************!*\
  !*** ./bundles/inventory/inventory.module.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory', ['ngRoute', 'deskworks.routeHelper', 'deskworks.dwAlerts', 'deskworks.center.service', 'deskworks.inventory.membershipCategory.service', 'deskworks.reservationCategory.service', 'deskworks.inventory.priceList.service', 'deskworks.inventory.product.service', 'deskworks.ProductCategory', 'deskworks.lazyLoaders', shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_1__["default"].name]).config(["$routeProvider", function ($routeProvider) {
  /**
   * Membership Categories
   */
  $routeProvider.when('/membership-types', {
    template: '<div ng-include="\'membership-category/membership-category-list.tpl.html\'"></div>',
    controller: 'MembershipCategoryListCtrl as vm',
    label: 'Membership Categories',
    routeBranch: 'membership-types',
    translations: ['membership-categories'],
    resolve: {
      membershipCategories: ["dwAlerts", "membershipCategoryService", "routeHelper", function membershipCategories(dwAlerts, membershipCategoryService, routeHelper) {
        return routeHelper.auth().then(function () {
          return membershipCategoryService.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query membership categories.');
          });
        });
      }],
      lazy: 'lazyLoadInventory'
    }
  });
  $routeProvider.when('/membership-types/:membershipCategoryId', {
    template: '<div ng-include="\'membership-category/membership-category-edit.tpl.html\'"></div>',
    controller: 'MembershipCategoryEditCtrl as vm',
    label: 'Edit',
    routeBranch: 'membership-types',
    translations: ['membership-categories'],
    resolve: {
      membershipCategories: ["dwAlerts", "membershipCategoryService", "routeHelper", function membershipCategories(dwAlerts, membershipCategoryService, routeHelper) {
        return routeHelper.auth().then(function () {
          return membershipCategoryService.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query membership categories.');
          });
        });
      }],
      lazy: 'lazyLoadInventory'
    }
  });
  /**
   * Price Lists
   */

  $routeProvider.when('/pricelists', {
    template: '<div ng-include="\'price-list/price-list-list.tpl.html\'"></div>',
    controller: 'PriceListListCtrl as vm',
    label: 'Price Lists',
    routeBranch: 'pricelists',
    reloadOnSearch: false,
    translations: ['price-lists', 'reports'],
    resolve: {
      priceLists: ["dwAlerts", "priceListService", "state", "routeHelper", function priceLists(dwAlerts, priceListService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return priceListService.getPricelists(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query price lists.');
          });
        });
      }],
      centers: ["dwAlerts", "centerService", function centers(dwAlerts, centerService) {
        return centerService.getCenters().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query centers.');
        });
      }],
      lazy: 'lazyLoadInventory'
    }
  });
  $routeProvider.when('/pricelists/:priceListId', {
    template: '<div ng-include="\'price-list/price-list-edit.tpl.html\'"></div>',
    controller: 'PriceListEditCtrl as vm',
    label: 'Edit',
    routeBranch: 'pricelists',
    translations: ['price-lists', 'products'],
    resolve: {
      priceList: ["$route", "dwAlerts", "priceListService", "state", "routeHelper", function priceList($route, dwAlerts, priceListService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return priceListService.getPricelist(state.getCurrentCenterId(), $route.current.params.priceListId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get price list.');
          });
        });
      }],
      lazy: 'lazyLoadInventory'
    }
  });
  /**
   * Products
   */

  $routeProvider.when('/products', {
    template: '<div ng-include="\'product/product-list.tpl.html\'"></div>',
    controller: 'ProductListCtrl as vm',
    label: 'Products',
    routeBranch: 'products',
    reloadOnSearch: false,
    translations: ['products', 'recurring-billing', 'reports'],
    resolve: {
      products: ["dwAlerts", "productService", "routeHelper", function products(dwAlerts, productService, routeHelper) {
        return routeHelper.auth().then(function () {
          return productService.getProducts().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query products.');
          });
        });
      }],
      membershipCategories: ["dwAlerts", "membershipCategoryService", "routeHelper", function membershipCategories(dwAlerts, membershipCategoryService, routeHelper) {
        return routeHelper.auth().then(function () {
          return membershipCategoryService.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query membership categories.');
          });
        });
      }],
      reservationCategories: ["dwAlerts", "reservationCategoryService", "state", "routeHelper", function reservationCategories(dwAlerts, reservationCategoryService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return reservationCategoryService.query(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation categories.');
          });
        });
      }],
      lazy: 'lazyLoadInventory'
    }
  });
  $routeProvider.when('/products/:productId', {
    template: '<div ng-include="\'product/product-edit.tpl.html\'"></div>',
    controller: 'ProductEditCtrl as vm',
    label: 'Edit',
    routeBranch: 'products',
    translations: ['products', 'recurring-billing', 'printer-usage-settings'],
    resolve: {
      product: ["$route", "dwAlerts", "productService", "routeHelper", function product($route, dwAlerts, productService, routeHelper) {
        return routeHelper.auth().then(function () {
          return productService.getProduct($route.current.params.productId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get product.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      productCategories: ["dwAlerts", "ProductCategory", "state", "routeHelper", function productCategories(dwAlerts, ProductCategory, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return ProductCategory.query(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query product categories.');
          });
        });
      }],
      lazy1: 'lazyLoadInventory',
      lazy2: 'lazyLoadQuickBooks',
      lazy3: 'lazyLoadDeskworksSweep',
      lazy4: 'lazyLoadDoorflow'
    }
  });
  /**
   * Reservation Categories
   */

  $routeProvider.when('/reservation-types', {
    template: '<div ng-include="\'reservation-category/reservation-category-list.tpl.html\'"></div>',
    controller: 'InventoryReservationCategoriesCtrl as vm',
    label: 'Reservation Categories',
    routeBranch: 'reservation-types',
    translations: ['reservation-categories'],
    resolve: {
      reservationCategories: ["dwAlerts", "reservationCategoryService", "state", "routeHelper", function reservationCategories(dwAlerts, reservationCategoryService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return reservationCategoryService.query(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation categories.');
          });
        });
      }],
      lazy: 'lazyLoadInventory'
    }
  });
  $routeProvider.when('/reservation-types/:reservationTypeId', {
    template: '<div ng-include="\'reservation-category/reservation-category-edit.tpl.html\'"></div>',
    controller: 'InventoryReservationCategoryEditCtrl as vm',
    label: 'Edit',
    routeBranch: 'reservation-types',
    translations: ['reservation-categories'],
    resolve: {
      reservationCategory: ["$route", "dwAlerts", "reservationCategoryService", "state", "routeHelper", function reservationCategory($route, dwAlerts, reservationCategoryService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return reservationCategoryService.get(state.getCurrentCenterId(), $route.current.params.reservationTypeId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get reservation category.');
          });
        });
      }],
      reservationCategories: ["dwAlerts", "reservationCategoryService", "state", "routeHelper", function reservationCategories(dwAlerts, reservationCategoryService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return reservationCategoryService.query(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation categories.');
          });
        });
      }],
      lazy: 'lazyLoadInventory'
    }
  });
  /**
   * Reservation Units
   */

  $routeProvider.when('/reservation-units', {
    template: '<div ng-include="\'reservation-unit/reservation-unit-list.tpl.html\'"></div>',
    controller: 'InventoryReservationUnitListCtrl as vm',
    label: 'Reservation Units',
    routeBranch: 'reservation-units',
    translations: ['reservation-units', 'reservation-rules'],
    resolve: {
      reservationUnits: ["dwAlerts", "ReservationUnit", "state", "routeHelper", function reservationUnits(dwAlerts, ReservationUnit, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return ReservationUnit.query(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation units.');
          });
        });
      }],
      lazy: 'lazyLoadInventory'
    }
  });
  $routeProvider.when('/reservation-units/:reservationUnitId', {
    template: '<div ng-include="\'reservation-unit/reservation-unit-edit.tpl.html\'"></div>',
    controller: 'InventoryReservationUnitEditCtrl as $ctrl',
    label: 'Edit',
    routeBranch: 'reservation-units',
    translations: ['reservation-units', 'reservation-rules'],
    resolve: {
      unit: ["$route", "dwAlerts", "ReservationUnit", "state", "routeHelper", function unit($route, dwAlerts, ReservationUnit, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return ReservationUnit.get(state.getCurrentCenterId(), $route.current.params.reservationUnitId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get reservation unit.');
          });
        });
      }],
      categories: ["dwAlerts", "reservationCategoryService", "state", function categories(dwAlerts, reservationCategoryService, state) {
        return reservationCategoryService.query(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to query reservation categories.');
        });
      }],
      lazy: 'lazyLoadInventory'
    }
  });
  /**
   * Product Categories
   */

  $routeProvider.when('/product-categories', {
    template: '<div ng-include="\'product-categories/product-categories.tpl.html\'"></div>',
    controller: 'ProductCategoriesCtrl as $ctrl',
    label: 'Product Categories',
    routeBranch: 'product-categories',
    translations: ['product-categories'],
    resolve: {
      categories: ["dwAlerts", "ProductCategory", "state", "routeHelper", function categories(dwAlerts, ProductCategory, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return ProductCategory.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query product categories.');
          });
        });
      }],
      lazy: 'lazyLoadInventory'
    }
  });
  /**
   * Discount Codes
   */

  $routeProvider.when('/discount-codes', {
    template: '<div ng-include="\'discount-codes/discount-codes.tpl.html\'"></div>',
    controller: 'DiscountCodesCtrl as $ctrl',
    routeBranch: 'discount-codes',
    translations: ['discount-codes'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadInventory'
    }
  });
}]));

/***/ }),

/***/ "./bundles/invoice/invoice.module.js":
/*!*******************************************!*\
  !*** ./bundles/invoice/invoice.module.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.invoice', ['oc.lazyLoad', 'deskworks.purchase.service', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/invoice/:orderId', {
    template: '<div ng-include="\'invoice.tpl.html\'"></div>',
    controller: 'InvoiceCtrl as $ctrl',
    routeBranch: 'invoice',
    reloadOnSearch: false,
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['invoice', 'reports'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.selectUser();
      }],
      orderId: ["$route", function orderId($route) {
        return $route.current.params.orderId;
      }],
      lazy: 'lazyLoadInvoice'
    }
  });
  $routeProvider.when('/purchases/:purchaseId/view', {
    // Post Payments or Charges -> View as PDF
    template: '<div ng-include="\'invoice.tpl.html\'"></div>',
    controller: 'InvoiceCtrl as $ctrl',
    routeBranch: 'purchases',
    reloadOnSearch: false,
    translations: ['invoice', 'reports'],
    resolve: {
      orderId: ["$route", function orderId($route) {
        return $route.current.params.purchaseId;
      }],
      back: ["state", function back(state) {
        return function () {
          state.resetParams();
          return state.setPath('/purchases');
        };
      }],
      preventOrderUserMismatch: ["$route", "$q", "dwAlerts", "routeHelper", "state", "helper", "purchaseService", function preventOrderUserMismatch($route, $q, dwAlerts, routeHelper, state, helper, purchaseService) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return purchaseService.query(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query purchases.');
          });
        }).then(function (orders) {
          if (!_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(orders).call(orders, function (o) {
            return +o.id === +$route.current.params.purchaseId;
          })) {
            state.resetParams();
            state.setPath('/purchases'); // go to purchases when user<->order mismatch

            return $q.reject();
          }
        });
      }],
      lazy: 'lazyLoadInvoice'
    }
  });
  $routeProvider.when('/generate-invoice', {
    template: '<div ng-include="\'invoice.tpl.html\'"></div>',
    controller: 'InvoiceCtrl as $ctrl',
    routeBranch: 'generate-invoice',
    reloadOnSearch: false,
    translations: ['invoice', 'reports'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        });
      }],
      orderId: function orderId() {
        return null;
      },
      lazy: 'lazyLoadInvoice'
    }
  });
}]));

/***/ }),

/***/ "./bundles/lazy-loaders.service.js":
/*!*****************************************!*\
  !*** ./bundles/lazy-loaders.service.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bundles_bundles_config_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bundles/bundles-config.service.js */ "./bundles/bundles-config.service.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.lazyLoaders', ['deskworks.dwAlerts', 'deskworks.bundlesConfig']).factory('checkBundleConfig', ["$injector", "bundlesConfig", "dwAlerts", function ($injector, bundlesConfig, dwAlerts) {
  return function (id) {
    var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return bundlesConfig.get().catch(function (err) {
      return dwAlerts.error(err, 'Failed to load bundles config.');
    }).then(function (config) {
      if (!config[id] && silent) throw null;
      if (!config[id]) return dwAlerts.error("".concat(id, " bundle is disabled."));
      return true;
    });
  };
}]).factory('lazyLoadAccounting', ["$injector", function ($injector) {
  return __webpack_require__.e(/*! import() | accounting */ "accounting~._b").then(__webpack_require__.bind(null, /*! ./accounting/index.js */ "./bundles/accounting/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadCommunications', ["$injector", function ($injector) {
  return Promise.all(/*! import() | communications */[__webpack_require__.e("vendors~communications~inventory~notifications~.._node_modules_r"), __webpack_require__.e("vendors~communications~inventory~notifications~.._node_modules_textangularjs_dist_textAngular.umd.js~98438490"), __webpack_require__.e("communications~notifications~._shared_a"), __webpack_require__.e("communications~._bundles_communications ")]).then(__webpack_require__.bind(null, /*! ./communications/index.js */ "./bundles/communications/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadDashboard', ["$injector", function ($injector) {
  return __webpack_require__.e(/*! import() | dashboard */ "dashboard~._b").then(__webpack_require__.bind(null, /*! ./dashboard/index.js */ "./bundles/dashboard/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadImport', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('import').then(function () {
    return Promise.all(/*! import() | import */[__webpack_require__.e("vendors~import~.._node_modules_e"), __webpack_require__.e("vendors~import~.._node_modules_handsontable_dist_handsontable.js~12196462"), __webpack_require__.e("vendors~import~.._node_modules_xlsx_dist_cpexcel.js~45b436d6"), __webpack_require__.e("vendors~import~.._node_modules_xlsx_jszip.js~1c8eea30"), __webpack_require__.e("vendors~import~.._node_modules_xlsx_xlsx.js~22c8f89e"), __webpack_require__.e("import~._a")]).then(__webpack_require__.bind(null, /*! ./import/index.js */ "./bundles/import/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadInventory', ["$injector", function ($injector) {
  return Promise.all(/*! import() | inventory */[__webpack_require__.e("vendors~analytics~floor-plans~inventory~setup~.._node_modules_angular-drag-and-drop-lists_angular-dr~33cc1538"), __webpack_require__.e("vendors~communications~inventory~notifications~.._node_modules_r"), __webpack_require__.e("vendors~communications~inventory~notifications~.._node_modules_textangularjs_dist_textAngular.umd.js~98438490"), __webpack_require__.e("inventory~setup~._shared_d"), __webpack_require__.e("inventory~._b")]).then(__webpack_require__.bind(null, /*! ./inventory/index.js */ "./bundles/inventory/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadNotifications', ["$injector", function ($injector) {
  return Promise.all(/*! import() | notifications */[__webpack_require__.e("vendors~communications~inventory~notifications~.._node_modules_r"), __webpack_require__.e("vendors~communications~inventory~notifications~.._node_modules_textangularjs_dist_textAngular.umd.js~98438490"), __webpack_require__.e("communications~notifications~._shared_a"), __webpack_require__.e("notifications~..")]).then(__webpack_require__.bind(null, /*! ./notifications/index.js */ "./bundles/notifications/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadReports', ["$injector", function ($injector) {
  return Promise.all(/*! import() | reports */[__webpack_require__.e("vendors~analytics~invoice~payments-assignment~reports~system~.._node_modules_@"), __webpack_require__.e("vendors~analytics~invoice~payments-assignment~reports~system~.._node_modules_jspdf_dist_jspdf.es.min~d9785f81"), __webpack_require__.e("vendors~analytics~reports~.._node_modules_chart.js_dist_Chart.js~4b6821c5"), __webpack_require__.e("vendors~analytics~reports~.._node_modules_chartjs-plugin-datalabels_dist_chartjs-plugin-datalabels.j~7174a007"), __webpack_require__.e("vendors~reports~.._node_modules_core-js_i"), __webpack_require__.e("analytics~invoice~payments-assignment~reports~system~._shared_reports_services_c"), __webpack_require__.e("invoice~reports~._shared_reports_d"), __webpack_require__.e("reports~._bundles_reports "), __webpack_require__.e("reports~._bundles_reports_m"), __webpack_require__.e("reports~._bundles_reports_s"), __webpack_require__.e("reports~._shared_c")]).then(__webpack_require__.bind(null, /*! ./reports/index.js */ "./bundles/reports/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadAnalytics', ["$injector", function ($injector) {
  return Promise.all(/*! import() | analytics */[__webpack_require__.e("vendors~analytics~invoice~payments-assignment~reports~system~.._node_modules_@"), __webpack_require__.e("vendors~analytics~invoice~payments-assignment~reports~system~.._node_modules_jspdf_dist_jspdf.es.min~d9785f81"), __webpack_require__.e("vendors~analytics~floor-plans~inventory~setup~.._node_modules_angular-drag-and-drop-lists_angular-dr~33cc1538"), __webpack_require__.e("vendors~analytics~reports~.._node_modules_chart.js_dist_Chart.js~4b6821c5"), __webpack_require__.e("vendors~analytics~reports~.._node_modules_chartjs-plugin-datalabels_dist_chartjs-plugin-datalabels.j~7174a007"), __webpack_require__.e("analytics~invoice~payments-assignment~reports~system~._shared_reports_services_c"), __webpack_require__.e("analytics~._b")]).then(__webpack_require__.bind(null, /*! ./analytics/index.js */ "./bundles/analytics/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadInvoice', ["$injector", function ($injector) {
  return Promise.all(/*! import() | invoice */[__webpack_require__.e("vendors~analytics~invoice~payments-assignment~reports~system~.._node_modules_@"), __webpack_require__.e("vendors~analytics~invoice~payments-assignment~reports~system~.._node_modules_jspdf_dist_jspdf.es.min~d9785f81"), __webpack_require__.e("analytics~invoice~payments-assignment~reports~system~._shared_reports_services_c"), __webpack_require__.e("invoice~reports~._shared_reports_d"), __webpack_require__.e("invoice~._bundles_invoice_c")]).then(__webpack_require__.bind(null, /*! ./invoice/index.js */ "./bundles/invoice/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadReservations', ["$injector", function ($injector) {
  return Promise.all(/*! import() | reservations */[__webpack_require__.e("book-it-now~floor-plans~reservation-tablet~reservations~simple-reservation~._shared_reservation-form~59893d90"), __webpack_require__.e("book-it-now~reservations~.."), __webpack_require__.e("reservations~._b")]).then(__webpack_require__.bind(null, /*! ./reservations/index.js */ "./bundles/reservations/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadSetup', ["$injector", function ($injector) {
  return Promise.all(/*! import() | setup */[__webpack_require__.e("vendors~analytics~floor-plans~inventory~setup~.._node_modules_angular-drag-and-drop-lists_angular-dr~33cc1538"), __webpack_require__.e("inventory~setup~._shared_d"), __webpack_require__.e("setup~._b")]).then(__webpack_require__.bind(null, /*! ./setup/index.js */ "./bundles/setup/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadSystem', ["$injector", function ($injector) {
  return Promise.all(/*! import() | system */[__webpack_require__.e("vendors~analytics~invoice~payments-assignment~reports~system~.._node_modules_@"), __webpack_require__.e("vendors~analytics~invoice~payments-assignment~reports~system~.._node_modules_jspdf_dist_jspdf.es.min~d9785f81"), __webpack_require__.e("analytics~invoice~payments-assignment~reports~system~._shared_reports_services_c"), __webpack_require__.e("system~._bundles_system ")]).then(__webpack_require__.bind(null, /*! ./system/index.js */ "./bundles/system/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadUsage', ["$injector", function ($injector) {
  return __webpack_require__.e(/*! import() | usage */ "usage~._b").then(__webpack_require__.bind(null, /*! ./usage/index.js */ "./bundles/usage/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadWhiteLabel', ["$injector", function ($injector) {
  return Promise.all(/*! import() | white-label */[__webpack_require__.e("vendors~white-label~.._node_modules_j"), __webpack_require__.e("white-label~._b")]).then(__webpack_require__.bind(null, /*! ./white-label/index.js */ "./bundles/white-label/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadPrinterUsage', ["$injector", function ($injector) {
  return __webpack_require__.e(/*! import() | printer-usage */ "printer-usage~._bundles_printer-usage ").then(__webpack_require__.bind(null, /*! ./printer-usage/index.js */ "./bundles/printer-usage/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadFloorPlans', ["$injector", function ($injector) {
  return Promise.all(/*! import() | floor-plans */[__webpack_require__.e("vendors~analytics~floor-plans~inventory~setup~.._node_modules_angular-drag-and-drop-lists_angular-dr~33cc1538"), __webpack_require__.e("book-it-now~floor-plans~reservation-tablet~reservations~simple-reservation~._shared_reservation-form~59893d90"), __webpack_require__.e("book-it-now~floor-plans~._shared_d"), __webpack_require__.e("floor-plans~._b")]).then(__webpack_require__.bind(null, /*! ./floor-plans/index.js */ "./bundles/floor-plans/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadCheckInForm', ["$injector", function ($injector) {
  return __webpack_require__.e(/*! import() | check-in-form */ "check-in-form~._bundles_check-in-form ").then(__webpack_require__.bind(null, /*! ./check-in-form/index.js */ "./bundles/check-in-form/index.js")).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadTerminationRequest', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('termination-request').then(function () {
    return __webpack_require__.e(/*! import() | termination-request */ "termination-request~._bundles_termination-request ").then(__webpack_require__.bind(null, /*! ./termination-request/index.js */ "./bundles/termination-request/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadPaymentsAssignment', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('payments-assignment', true).then(function () {
    return Promise.all(/*! import() | payments-assignment */[__webpack_require__.e("vendors~analytics~invoice~payments-assignment~reports~system~.._node_modules_@"), __webpack_require__.e("vendors~analytics~invoice~payments-assignment~reports~system~.._node_modules_jspdf_dist_jspdf.es.min~d9785f81"), __webpack_require__.e("analytics~invoice~payments-assignment~reports~system~._shared_reports_services_c"), __webpack_require__.e("payments-assignment~..")]).then(__webpack_require__.bind(null, /*! ./payments-assignment/index.js */ "./bundles/payments-assignment/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  }).catch(angular.noop);
}])
/**
 * Wizards
 */
.factory('lazyLoadBundleReservation', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('bundle-reservation').then(function () {
    return __webpack_require__.e(/*! import() | bundle-reservation */ "bundle-reservation~._b").then(__webpack_require__.bind(null, /*! ./bundle-reservation/index.js */ "./bundles/bundle-reservation/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadBuyPass', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('buy-pass').then(function () {
    return __webpack_require__.e(/*! import() | buy-pass */ "buy-pass~._b").then(__webpack_require__.bind(null, /*! ./buy-pass/index.js */ "./bundles/buy-pass/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyMemberSignUp', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('member-sign-up').then(function () {
    return __webpack_require__.e(/*! import() | member-sign-up */ "member-sign-up~._b").then(__webpack_require__.bind(null, /*! ./member-sign-up/index.js */ "./bundles/member-sign-up/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyLoadSimpleReservation', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('simple-reservation').then(function () {
    return Promise.all(/*! import() | simple-reservation */[__webpack_require__.e("vendors~simple-reservation~.._node_modules_swiper_dist_idangerous.swiper.js~f612ee72"), __webpack_require__.e("book-it-now~floor-plans~reservation-tablet~reservations~simple-reservation~._shared_reservation-form~59893d90"), __webpack_require__.e("simple-reservation~._b")]).then(__webpack_require__.bind(null, /*! ./simple-reservation/index.js */ "./bundles/simple-reservation/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyReservationTablet', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('reservation-tablet').then(function () {
    return Promise.all(/*! import() | reservation-tablet */[__webpack_require__.e("book-it-now~floor-plans~reservation-tablet~reservations~simple-reservation~._shared_reservation-form~59893d90"), __webpack_require__.e("reservation-tablet~._bundles_reservation-tablet ")]).then(__webpack_require__.bind(null, /*! ./reservation-tablet/index.js */ "./bundles/reservation-tablet/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  });
}]).factory('lazyBookItNow', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('book-it-now').then(function () {
    return Promise.all(/*! import() | book-it-now */[__webpack_require__.e("book-it-now~floor-plans~reservation-tablet~reservations~simple-reservation~._shared_reservation-form~59893d90"), __webpack_require__.e("book-it-now~reservations~.."), __webpack_require__.e("book-it-now~floor-plans~._shared_d"), __webpack_require__.e("book-it-now~._bundles_book-it-now ")]).then(__webpack_require__.bind(null, /*! ./book-it-now/index.js */ "./bundles/book-it-now/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  });
}])
/**
 * Integrations
 */
.factory('lazyLoadAppointmentPlus', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('appointment-plus', true).then(function () {
    return __webpack_require__.e(/*! import() | appointment-plus */ "appointment-plus~._bundles_appointment-plus ").then(__webpack_require__.bind(null, /*! ./appointment-plus/index.js */ "./bundles/appointment-plus/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  }).catch(angular.noop);
}]).factory('lazyLoadQuickBooks', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('quick-books', true).then(function () {
    return __webpack_require__.e(/*! import() | quick-books */ "quick-books~.._n").then(__webpack_require__.bind(null, /*! ./quick-books/index.js */ "../quick-books/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  }).catch(angular.noop);
}]).factory('lazyLoadTeamgo', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('teamgo', true).then(function () {
    return __webpack_require__.e(/*! import() | teamgo */ "teamgo~._bundles_teamgo ").then(__webpack_require__.bind(null, /*! ./teamgo/index.js */ "./bundles/teamgo/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  }).catch(angular.noop);
}]).factory('lazyLoadKisi', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('kisi', true).then(function () {
    return __webpack_require__.e(/*! import() | kisi */ "kisi~._bundles_kisi ").then(__webpack_require__.bind(null, /*! ./kisi/index.js */ "./bundles/kisi/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  }).catch(angular.noop);
}]).factory('lazyLoadDoorflow', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('doorflow', true).then(function () {
    return __webpack_require__.e(/*! import() | doorflow */ "doorflow~._bundles_doorflow ").then(__webpack_require__.bind(null, /*! ./doorflow/index.js */ "./bundles/doorflow/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  }).catch(angular.noop);
}]).factory('lazyLoadEzeep', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('ezeep', true).then(function () {
    return __webpack_require__.e(/*! import() | ezeep */ "ezeep~._bundles_ezeep ").then(__webpack_require__.bind(null, /*! ./ezeep/index.js */ "./bundles/ezeep/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  }).catch(angular.noop);
}]).factory('lazyLoadGreetly', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('greetly', true).then(function () {
    return __webpack_require__.e(/*! import() | greetly */ "greetly~._bundles_greetly ").then(__webpack_require__.bind(null, /*! ./greetly/index.js */ "./bundles/greetly/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  }).catch(angular.noop);
}]).factory('lazyLoadAffiliatly', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('affiliatly', true).then(function () {
    return __webpack_require__.e(/*! import() | affiliatly */ "affiliatly~._bundles_affiliatly ").then(__webpack_require__.bind(null, /*! ./affiliatly/index.js */ "./bundles/affiliatly/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  }).catch(angular.noop);
}]).factory('lazyLoadDeskworksSweep', ["$injector", "checkBundleConfig", function ($injector, checkBundleConfig) {
  return checkBundleConfig('deskworks-sweep', true).then(function () {
    return __webpack_require__.e(/*! import() | deskworks-sweep */ "deskworks-sweep~._bundles_deskworks-sweep ").then(__webpack_require__.bind(null, /*! ./deskworks-sweep/index.js */ "./bundles/deskworks-sweep/index.js"));
  }).then(function (m) {
    return $injector.invoke(m.default);
  }).catch(angular.noop);
}]));

/***/ }),

/***/ "./bundles/member-sign-up/member-sign-up.module.js":
/*!*********************************************************!*\
  !*** ./bundles/member-sign-up/member-sign-up.module.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");
/* harmony import */ var shared_forbid_forbid_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/forbid/forbid.directive */ "./shared/forbid/forbid.directive.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.memberSignUp', [shared_forbid_forbid_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, 'deskworks.lazyLoaders', 'deskworks.membership.service']).config(["$routeProvider", function ($routeProvider) {
  var stepCount = 3;
  /**
   * 01. New Membership
   */

  $routeProvider.when('/member-sign-up', {
    template: '<forbid admin="true" member="$resolve.user"><div><ng-include src="\'steps/01-membership.tpl.html\'"></ng-include></div></forbid>',
    controller: 'MemberSignUpMembershipCtrl as vm',
    label: 'New Membership',
    routeBranch: 'member-sign-up',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['member-sign-up'],
    resolve: {
      reg: function reg() {
        return {
          member: true,
          selfRegistration: true,
          step: 1,
          stepCount: stepCount
        };
      },
      data: ["$q", "dwAlerts", "centerService", "setupService", "state", "filterHiddenCenters", function data($q, dwAlerts, centerService, setupService, state, filterHiddenCenters) {
        return $q.all({
          centers: centerService.getCenters().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query centers.');
          }).then(filterHiddenCenters),
          settings: setupService.getSetupSettings().catch(function (err) {
            return dwAlerts.error(err, 'Failed to get setup settings.');
          })
        }).then(function (data) {
          if (!data.centers.length) {
            return dwAlerts.error('<b>No public centers.</b> At least one center needs <b>Center for Internal Use</b> setting <b>turned off.</b>');
          }

          if (data.settings.skipPlanMemberSignUp && data.centers.length === 1) {
            state.setCurrentCenterId(data.centers[0].id); // auto-select center and redirect to the next step

            return state.setPath(state.getPath() + '/' + (state.getCurrentUserId() || 'new'));
          }

          return data;
        });
      }],
      user: ["session", "state", "userProfileService", function user(session, state, userProfileService) {
        return session.wait().then(function () {
          return session.isRole('member') ? userProfileService.get(state.getCurrentCenterId(), session.user.id) : null;
        });
      }],
      lazy1: 'lazyMemberSignUp'
    }
  });
  /**
   * 01. New membership (landing page)
   */

  $routeProvider.when('/member-sign-up-landing', {
    template: '<forbid admin="true" member="$resolve.user"><div><ng-include src="\'steps/01-landing.tpl.html\'"></ng-include></div></forbid>',
    controller: 'MemberSignUpLandingCtrl as $ctrl',
    label: 'New Membership',
    routeBranch: 'member-sign-up',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['member-sign-up'],
    resolve: {
      reg: function reg() {
        return {
          member: true,
          selfRegistration: true,
          step: 1,
          stepCount: stepCount
        };
      },
      center: ["dwAlerts", "centerService", "state", function center(dwAlerts, centerService, state) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get a center.');
        });
      }],
      product: ["dwAlerts", "membershipService", "state", function product(dwAlerts, membershipService, state) {
        return membershipService.query(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to query membership categories.');
        }).then(function (categories) {
          var productId = +state.getParam('productId');
          var product;
          categories.some(function (category) {
            return category.products.some(function (prod) {
              if (prod.id === productId) {
                product = prod;
                return true;
              }
            });
          });
          if (!product) return dwAlerts.error('No product with id=' + state.getParam('productId') + ' found in membership categories.');
          return product;
        });
      }],
      user: ["session", "state", "userProfileService", function user(session, state, userProfileService) {
        return session.wait().then(function () {
          return session.isRole('member') ? userProfileService.get(state.getCurrentCenterId(), session.user.id) : null;
        });
      }],
      lazy1: 'lazyMemberSignUp'
    }
  });
  /**
   * 02. New User Profile
   */

  $routeProvider.when('/member-sign-up/new', {
    template: '<forbid admin="true" member="$resolve.user"><div><ng-include src="\'templates/new-user-profile.tpl.html\'"></ng-include></div></forbid>',
    controller: 'MemberSignUpProfileCtrl',
    controllerAs: 'vm',
    label: 'Member Sign Up',
    routeBranch: 'member-sign-up',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['user-profile', 'member-sign-up'],
    resolve: {
      reg: ["$q", "helper", "state", "dwAlerts", "centerService", "setupService", "filterHiddenCenters", function reg($q, helper, state, dwAlerts, centerService, setupService, filterHiddenCenters) {
        return $q.all({
          centers: centerService.getCenters().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query centers.');
          }).then(filterHiddenCenters),
          settings: setupService.getSetupSettings().catch(function (err) {
            return dwAlerts.error(err, 'Failed to get setup settings.');
          })
        }).then(function (data) {
          if (!data.centers.length) {
            return dwAlerts.error('<b>No public centers.</b> At least one center needs <b>Center for Internal Use</b> setting <b>turned off.</b>');
          }

          if (data.settings.skipPlanMemberSignUp && data.centers.length === 1) {
            return {
              member: true,
              selfRegistration: true,
              step: 1,
              stepCount: stepCount - 1,
              new: true,
              phone: (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, data.centers, state.getCurrentCenterId()) || {}).phone
            };
          }

          return {
            member: true,
            selfRegistration: true,
            step: 2,
            stepCount: stepCount,
            new: true,
            phone: (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, data.centers, state.getCurrentCenterId()) || {}).phone
          };
        });
      }],
      userProfile: ["dwAlerts", "userProfileService", "helper", "state", "centerService", function userProfile(dwAlerts, userProfileService, helper, state, centerService) {
        return centerService.getCenter(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        }).then(function (center) {
          return userProfileService.new(center, 'member', 'signUp').catch(function (err) {
            return dwAlerts.error(err, 'Failed to get new member profile template.');
          });
        });
      }],
      user: ["session", "state", "userProfileService", function user(session, state, userProfileService) {
        return session.wait().then(function () {
          return session.isRole('member') ? userProfileService.get(state.getCurrentCenterId(), session.user.id) : null;
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy1: 'lazyMemberSignUp'
    }
  });
  /**
   * 02. Existing User Profile
   */

  $routeProvider.when('/member-sign-up/:userId', {
    template: '<forbid admin="true" member="$resolve.userProfile"><div><ng-include src="\'templates/new-user-profile.tpl.html\'"></ng-include></div></forbid>',
    controller: 'MemberSignUpProfileCtrl',
    controllerAs: 'vm',
    label: 'Member Sign Up',
    routeBranch: 'member-sign-up',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['user-profile', 'member-sign-up'],
    resolve: {
      reg: ["$q", "helper", "state", "dwAlerts", "centerService", "setupService", "filterHiddenCenters", function reg($q, helper, state, dwAlerts, centerService, setupService, filterHiddenCenters) {
        return $q.all({
          centers: centerService.getCenters().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query centers.');
          }).then(filterHiddenCenters),
          settings: setupService.getSetupSettings().catch(function (err) {
            return dwAlerts.error(err, 'Failed to get setup settings.');
          })
        }).then(function (data) {
          if (!data.centers.length) {
            return dwAlerts.error('<b>No public centers.</b> At least one center needs <b>Center for Internal Use</b> setting <b>turned off.</b>');
          }

          if (data.settings.skipPlanMemberSignUp && data.centers.length === 1) {
            return {
              member: true,
              selfRegistration: true,
              step: 1,
              stepCount: stepCount - 1,
              phone: (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, data.centers, state.getCurrentCenterId()) || {}).phone
            };
          }

          return {
            member: true,
            selfRegistration: true,
            step: 2,
            stepCount: stepCount,
            phone: (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, data.centers, state.getCurrentCenterId()) || {}).phone
          };
        });
      }],
      userProfile: ["dwAlerts", "$route", "routeHelper", "userProfileService", "resolveTimezone", function userProfile(dwAlerts, $route, routeHelper, userProfileService, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.getForRegistration(0, $route.current.params.userId, 'member', 'signUp').catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy1: 'lazyMemberSignUp'
    }
  });
  /**
   * 03. Purchase
   */

  $routeProvider.when('/member-sign-up/:userId/purchases/:purchaseId', {
    template: '<forbid admin="true" member="$resolve.userProfile"><div><ng-include src="\'steps/03-purchase.tpl.html\'"></ng-include></div></forbid>',
    controller: 'MemberSignUpPurchaseCtrl',
    controllerAs: 'vm',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['member-sign-up', 'purchase', 'billing-profile', 'simple-reservation'],
    resolve: {
      reg: function reg() {
        return {
          member: true,
          selfRegistration: true,
          step: 3,
          stepCount: stepCount
        };
      },
      center: ["dwAlerts", "state", "centerService", function center(dwAlerts, state, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      purchase: ["$route", "dwAlerts", "state", "routeHelper", "purchaseService", "resolveTimezone", function purchase($route, dwAlerts, state, routeHelper, purchaseService, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return resolveTimezone();
        }).then(function () {
          return purchaseService.get(state.getCurrentCenterId(), $route.current.params.userId, $route.current.params.purchaseId, state.getParam('productId')).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get purchase.');
          });
        });
      }],
      userProfile: ["$q", "$route", "dwAlerts", "state", "routeHelper", "userProfileService", "resolveTimezone", function userProfile($q, $route, dwAlerts, state, routeHelper, userProfileService, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), $route.current.params.userId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy1: 'lazyMemberSignUp',
      lazy2: 'lazyLoadAffiliatly'
    }
  });
  /**
   * Staff Help
   */

  $routeProvider.when('/member-sign-up/:userId/purchases/:purchaseId/staff-help', {
    template: '<forbid admin="true"><div><ng-include src="\'staff-help/staff-help.tpl.html\'"></ng-include></div></forbid>',
    controller: 'StaffHelpCtrl',
    controllerAs: 'vm',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy1: 'lazyMemberSignUp'
    }
  });
  /**
   * 04. Complete
   */

  $routeProvider.when('/member-sign-up/:userId/purchases/:purchaseId/complete', {
    template: '<forbid admin="true"><div><ng-include src="\'steps/04-complete.tpl.html\'"></ng-include></div></forbid>',
    controller: 'MemberSignUpCompleteCtrl',
    controllerAs: 'vm',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['member-sign-up', 'purchase', 'simple-reservation'],
    resolve: {
      reg: function reg() {
        return {
          member: true,
          selfRegistration: true
        };
      },
      purchase: ["$route", "dwAlerts", "routeHelper", "state", "purchaseService", "resolveTimezone", function purchase($route, dwAlerts, routeHelper, state, purchaseService, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return resolveTimezone();
        }).then(function () {
          return purchaseService.get(state.getCurrentCenterId(), $route.current.params.userId, $route.current.params.purchaseId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get purchase.');
          });
        });
      }],
      center: ["state", "dwAlerts", "centerService", function center(state, dwAlerts, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      template: ["state", "dwAlerts", "Notifications", function template(state, dwAlerts, Notifications) {
        return Notifications.getEmailTemplate('receipt-page').catch(function (err) {
          return dwAlerts.error(err, 'Failed to get receipt page settings.');
        });
      }],
      lazy1: 'lazyMemberSignUp'
    }
  });
  /**
   * No Plan -> Billing
   */

  $routeProvider.when('/member-sign-up/:userId/billing', {
    template: '<forbid admin="true" member="$resolve.userProfile"><div><ng-include src="\'templates/new-billing-profile.tpl.html\'"></ng-include></div></forbid>',
    controller: 'MemberSignUpNoPlanBillingCtrl',
    controllerAs: 'vm',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['member-sign-up', 'billing-profile', 'user-profile'],
    resolve: {
      reg: ["$q", "helper", "state", "dwAlerts", "centerService", "setupService", "filterHiddenCenters", function reg($q, helper, state, dwAlerts, centerService, setupService, filterHiddenCenters) {
        return $q.all({
          centers: centerService.getCenters().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query centers.');
          }).then(filterHiddenCenters),
          settings: setupService.getSetupSettings().catch(function (err) {
            return dwAlerts.error(err, 'Failed to get setup settings.');
          })
        }).then(function (data) {
          if (!data.centers.length) {
            return dwAlerts.error('<b>No public centers.</b> At least one center needs <b>Center for Internal Use</b> setting <b>turned off.</b>');
          }

          if (data.settings.skipPlanMemberSignUp && data.centers.length === 1) {
            return {
              member: true,
              selfRegistration: true,
              step: 2,
              stepCount: stepCount - 2,
              phone: (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, data.centers, state.getCurrentCenterId()) || {}).phone
            };
          }

          return {
            member: true,
            selfRegistration: true,
            step: 3,
            stepCount: stepCount - 1,
            phone: (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, data.centers, state.getCurrentCenterId()) || {}).phone
          };
        });
      }],
      userProfile: ["$route", "state", "dwAlerts", "routeHelper", "userProfileService", "resolveTimezone", function userProfile($route, state, dwAlerts, routeHelper, userProfileService, resolveTimezone) {
        return routeHelper.selectUser().then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), $route.current.params.userId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy: 'lazyMemberSignUp'
    }
  });
  /**
   * No Plan -> Complete
   */

  $routeProvider.when('/member-sign-up/:userId/billing/complete', {
    template: '<div><ng-include src="\'steps/04-complete.tpl.html\'"></ng-include></div>',
    controller: 'MemberSignUpNoPlanCompleteCtrl',
    controllerAs: 'vm',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['member-sign-up'],
    resolve: {
      reg: function reg() {
        return {
          member: true,
          selfRegistration: true
        };
      },
      lazy: 'lazyMemberSignUp'
    }
  });
}]) // .factory('filterNonEmptyCenters', () => centers => centers.filter(center => center.reservationUnitsCount > 0))
.factory('filterHiddenCenters', function () {
  return function (centers) {
    return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(centers).call(centers, function (center) {
      return !center.hideInMemberSignUp;
    });
  };
}).factory('affiliatly', ["$injector", function ($injector) {
  return {
    // track is incomplete
    // track: (params) => {
    //   if ($injector.has('Affiliatly')) return $injector.get('Affiliatly').track(params);
    // },
    markPurchase: function markPurchase(params) {
      if ($injector.has('Affiliatly')) return $injector.get('Affiliatly').markPurchase(params);
    }
  };
}]));

/***/ }),

/***/ "./bundles/notifications/notifications.module.js":
/*!*******************************************************!*\
  !*** ./bundles/notifications/notifications.module.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.notifications', ['deskworks.routeHelper', 'deskworks.notifications.service', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/setup/bulk-invoices', {
    template: '<div ng-include="\'bulk-invoices/bulk-invoices.tpl.html\'"></div>',
    controller: 'BulkInvoicesTplCtrl as $ctrl',
    label: 'Bulk Invoices Setup',
    routeBranch: 'setup/bulk-invoices',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getBulkInvoices().catch(function (err) {
            return dwAlerts.error(err, 'Failed to load bulk invoices template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/setup/recurring-invoices', {
    template: '<div ng-include="\'recurring-invoices/recurring-invoices.tpl.html\'"></div>',
    controller: 'RecurringInvoicesEmailCtrl as $ctrl',
    label: 'Recurring Invoices Setup',
    routeBranch: 'setup/recurring-invoices',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getRecurringInvoices().catch(function (err) {
            return dwAlerts.error(err, 'Failed to load recurring invoices template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/setup/expired-card-email', {
    template: '<div ng-include="\'expired-card-email/expired-card-email.tpl.html\'"></div>',
    controller: 'ExpiredCardEmailCtrl as $ctrl',
    label: 'Expired Card Email Setup',
    routeBranch: 'setup/expired-card-email',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getExpiredCardEmail().catch(function (err) {
            return dwAlerts.error(err, 'Failed to load expired card email template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/setup/declined-card-email', {
    template: '<div ng-include="\'declined-card-email/declined-card-email.tpl.html\'"></div>',
    controller: 'DeclinedCardEmailCtrl as $ctrl',
    label: 'Declined Card Email Setup',
    routeBranch: 'setup/declined-card-email',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getDeclinedCardEmail().catch(function (err) {
            return dwAlerts.error(err, 'Failed to load declined card email template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/setup/welcome-letter', {
    template: '<div ng-include="\'welcome-letter/welcome-letter.tpl.html\'"></div>',
    controller: 'WelcomeLetterCtrl as $ctrl',
    label: 'Welcome Letter Setup',
    routeBranch: 'setup/welcome-letter',
    translations: ['notifications', 'short-codes', 'attachments'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getWelcomeLetter().catch(function (err) {
            return dwAlerts.error(err, 'Failed to load welcome letter template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/setup/reservation-confirmation', {
    template: '<div ng-include="\'reservation-confirmation/reservation-confirmation.tpl.html\'"></div>',
    controller: 'ReservationConfirmationEmailCtrl as $ctrl',
    label: 'Reservation Confirmation Setup',
    routeBranch: 'setup/reservation-confirmation',
    translations: ['notifications', 'short-codes', 'attachments'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getReservationConfirmation().catch(function (err) {
            return dwAlerts.error(err, 'Failed to load reservation confirmation template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/setup/reservation-reminder', {
    template: '<div ng-include="\'reservation-reminder/reservation-reminder.tpl.html\'"></div>',
    controller: 'ReservationReminderEmailCtrl as $ctrl',
    label: 'Reservation Reminder',
    routeBranch: 'setup/reservation-reminder',
    translations: ['notifications', 'short-codes', 'attachments'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getEmailTemplate('reservation-reminder').catch(function (err) {
            return dwAlerts.error(err, 'Failed to get reservation reminder template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/setup/cal-sync-error-email', {
    template: '<div ng-include="\'cal-sync-error-email/cal-sync-error-email.tpl.html\'"></div>',
    controller: 'CalSyncErrorEmailCtrl as $ctrl',
    label: 'Cal Sync Error',
    routeBranch: 'setup/cal-sync-error-email',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getCalSyncErrorEmail().catch(function (err) {
            return dwAlerts.error(err, 'Failed to get calendar sync error email template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/setup/passes-used-up-email', {
    template: '<div ng-include="\'passes-used-up-email/passes-used-up-email.tpl.html\'"></div>',
    controller: 'PassesUsedUpEmailCtrl as $ctrl',
    label: 'Passes Used Up Email',
    routeBranch: 'setup/passes-used-up-email',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getPassesUsedUpEmail().catch(function (err) {
            return dwAlerts.error(err, 'Failed to get passes used up email template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/setup/plan-passes-used-up-notice', {
    template: '<div ng-include="\'plan-passes-used-up-notice/plan-passes-used-up-notice.tpl.html\'"></div>',
    controller: 'PlanPassesUsedUpNoticeCtrl as $ctrl',
    label: 'Plan Passes Used Up Notice',
    routeBranch: 'setup/plan-passes-used-up-notice',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getEmailTemplate('plan-passes-used-up').catch(function (err) {
            return dwAlerts.error(err, 'Failed to get plan passes used up notice template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/setup/bucket-used-up-email', {
    template: '<div ng-include="\'bucket-used-up-email/bucket-used-up-email.tpl.html\'"></div>',
    controller: 'BucketUsedUpEmailCtrl as $ctrl',
    label: 'Bucket Used Up Email',
    routeBranch: 'setup/bucket-used-up-email',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getBucketUsedUpEmail().catch(function (err) {
            return dwAlerts.error(err, 'Failed to get bucket used up email template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/setup/renewal-notice-email', {
    template: '<div ng-include="\'renewal-notice-email/renewal-notice-email.tpl.html\'"></div>',
    controller: 'RenewalNoticeEmailCtrl as $ctrl',
    label: 'Renewal Notice Email',
    routeBranch: 'setup/renewal-notice-email',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getEmailTemplate('renewal-notice').catch(function (err) {
            return dwAlerts.error(err, 'Failed to get renewal notice email template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/notifications/receipt-email', {
    template: '<div ng-include="\'receipt-email/receipt-email.tpl.html\'"></div>',
    controller: 'ReceiptEmailTplCtrl as $ctrl',
    label: 'Receipt Email',
    routeBranch: 'notifications/receipt-email',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpls: ["$q", "dwAlerts", "Notifications", "state", "routeHelper", function tpls($q, dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          var _context;

          return $q.all(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = [{
            $$id: 'receipt',
            $$name: 'NOTIFICATIONS.RECEIPT.GENERAL'
          }, {
            $$id: 'reservation-receipt',
            $$name: 'NOTIFICATIONS.RECEIPT.RESERVATION'
          }, {
            $$id: 'pass-receipt',
            $$name: 'NOTIFICATIONS.RECEIPT.PASS'
          }]).call(_context, function (meta) {
            return Notifications.getEmailTemplate(meta.$$id).catch(function (err) {
              return dwAlerts.error(err, 'Failed to get receipt email template.');
            }).then(function (result) {
              return angular.extend(result, meta);
            });
          }));
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/notifications/message-board-notices', {
    template: '<div ng-include="\'message-board-notices/message-board-notices.tpl.html\'"></div>',
    controller: 'MessageBoardNoticesTplCtrl as $ctrl',
    label: 'Message Board Notices Email',
    routeBranch: 'notifications/message-board-notices',
    newDesign: true,
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpls: ["$q", "dwAlerts", "Notifications", "state", "routeHelper", function tpls($q, dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          var _context2;

          return $q.all(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = [{
            $$id: 'immediately',
            $$name: 'NOTIFICATIONS.MESSAGE_BOARD.IMMEDIATELY'
          }, {
            $$id: 'daily',
            $$name: 'NOTIFICATIONS.MESSAGE_BOARD.DAILY'
          }, {
            $$id: 'weekly',
            $$name: 'NOTIFICATIONS.MESSAGE_BOARD.WEEKLY'
          }]).call(_context2, function (meta) {
            return Notifications.getMessageBoardEmailTemplate(meta.$$id).catch(function (err) {
              return dwAlerts.error(err, 'Failed to get receipt email template.');
            }).then(function (result) {
              return angular.extend(result, meta);
            });
          }));
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/notifications/startup-info', {
    template: '<div ng-include="\'startup-info/startup-info.tpl.html\'"></div>',
    controller: 'StartupInfoCtrl as $ctrl',
    label: 'Startup Info',
    routeBranch: 'notifications/startup-info',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getEmailTemplate('startup-info').catch(function (err) {
            return dwAlerts.error(err, 'Failed to get startup info settings.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/notifications/reservation-follow-up-survey', {
    template: '<div ng-include="\'reservation-follow-up-survey/reservation-follow-up-survey.tpl.html\'"></div>',
    controller: 'ReservationFollowUpSurveyCtrl as $ctrl',
    label: 'Reservation Follow Up Survey',
    routeBranch: 'notifications/reservation-follow-up-survey',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.get('reservation-follow-up-survey').catch(function (err) {
            return dwAlerts.error(err, 'Failed to get reservation follow up survey settings.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/desk-tablet-template', {
    template: '<div ng-include="\'desk-tablet-template/desk-tablet-template.tpl.html\'"></div>',
    controller: 'DeskTabletTemplateCtrl as $ctrl',
    routeBranch: 'desk-tablet-template',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getDeskTabletTemplate(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get desk tablet template.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/notifications/refund-notice', {
    template: '<div ng-include="\'refund-notice/refund-notice.tpl.html\'"></div>',
    controller: 'RefundNoticeCtrl as $ctrl',
    label: 'Refund Notice',
    routeBranch: 'notifications/refund-notice',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["dwAlerts", "Notifications", "state", "routeHelper", function tpl(dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getEmailTemplate('refund-notice').catch(function (err) {
            return dwAlerts.error(err, 'Failed to get refund notice settings.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
  $routeProvider.when('/notifications/receipt-page', {
    template: '<div ng-include="\'receipt-page/receipt-page.tpl.html\'"></div>',
    controller: 'ReceiptPageTplCtrl as $ctrl',
    routeBranch: 'notifications/receipt-page',
    translations: ['notifications', 'short-codes'],
    resolve: {
      tpl: ["$q", "dwAlerts", "Notifications", "state", "routeHelper", function tpl($q, dwAlerts, Notifications, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Notifications.getEmailTemplate('receipt-page').catch(function (err) {
            return dwAlerts.error(err, 'Failed to get receipt page settings.');
          });
        });
      }],
      lazy: 'lazyLoadNotifications'
    }
  });
}]));

/***/ }),

/***/ "./bundles/payments-assignment/payments-assignment.module.js":
/*!*******************************************************************!*\
  !*** ./bundles/payments-assignment/payments-assignment.module.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.paymentsAssignment', ['ngRoute', 'deskworks.routeHelper', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/bulk-payments-assignment', {
    template: '<div ng-include="\'bulk-assignment/bulk-assignment.tpl.html\'"></div>',
    controller: 'BulkPaymentsAssignmentCtrl as $ctrl',
    routeBranch: 'bulk-payments-assignment',
    reloadOnSearch: false,
    translations: ['payments-assignment', 'bulk-invoicing', 'purchase'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadPaymentsAssignment'
    }
  });
}]));

/***/ }),

/***/ "./bundles/printer-usage/printer-usage.module.js":
/*!*******************************************************!*\
  !*** ./bundles/printer-usage/printer-usage.module.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service */ "./bundles/lazy-loaders.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.printerUsage', ['ngRoute', 'deskworks.routeHelper', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/setup/printer-usage-settings', {
    template: '<div ng-include="\'settings/printer-usage-settings.tpl.html\'"></div>',
    controller: 'PrinterUsageSettingsCtrl as $ctrl',
    routeBranch: 'setup/printer-usage-settings',
    translations: ['printer-usage-settings'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadPrinterUsage'
    }
  });
  $routeProvider.when('/printer-usage', {
    template: '<div ng-include="\'printer-usage/printer-usage-list.tpl.html\'"></div>',
    controller: 'PrinterUsageListCtrl as $ctrl',
    routeBranch: 'printer-usage',
    translations: ['printer-usage'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      tz: ["resolveTimezone", function tz(resolveTimezone) {
        return resolveTimezone();
      }],
      lazy: 'lazyLoadPrinterUsage'
    }
  });
  $routeProvider.when('/printer-usage/:printerUsageId', {
    template: '<div ng-include="\'printer-usage/printer-usage-edit.tpl.html\'"></div>',
    controller: 'PrinterUsageEditCtrl as $ctrl',
    routeBranch: 'printer-usage',
    translations: ['printer-usage'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      tz: ["resolveTimezone", function tz(resolveTimezone) {
        return resolveTimezone();
      }],
      lazy: 'lazyLoadPrinterUsage'
    }
  });
}]));

/***/ }),

/***/ "./bundles/reports/reports.module.js":
/*!*******************************************!*\
  !*** ./bundles/reports/reports.module.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");
/* harmony import */ var shared_services_setup_user_field_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/setup/user-field.service */ "./shared/services/setup/user-field.service.js");
/* harmony import */ var shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/setup/reservation-field.service */ "./shared/services/setup/reservation-field.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reports', ['oc.lazyLoad', 'deskworks.setup.service', 'deskworks.center.service', 'deskworks.userProfile.service', 'deskworks.purchase.service', 'deskworks.bank.service', shared_services_setup_user_field_service__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/member-statement', {
    template: '<div ng-include="\'member-statement/member-statement.tpl.html\'"></div>',
    controller: 'MemberStatementCtrl as vm',
    label: 'Member Statement',
    routeBranch: 'member-statement',
    reloadOnSearch: false,
    translations: ['reports', 'member-statement'],
    resolve: {
      user: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function user(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/mailbox-report', {
    template: '<div ng-include="\'mailbox-report/mailbox-report.tpl.html\'"></div>',
    controller: 'MailboxReportCtrl as vm',
    label: 'Mailbox Report',
    routeBranch: 'mailbox-report',
    reloadOnSearch: false,
    translations: ['reports', 'mailbox-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/membership-report', {
    template: '<div ng-include="\'membership-report/membership-report.tpl.html\'"></div>',
    controller: 'MembershipReportCtrl as vm',
    label: 'Membership Report',
    routeBranch: 'membership-report',
    reloadOnSearch: false,
    translations: ['reports', 'membership-report', 'user-search'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      fields: ["dwAlerts", "UserField", function fields(dwAlerts, UserField) {
        return UserField.query().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query user fields.');
        });
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/deposit-transaction-report', {
    template: '<div ng-include="\'deposit-transaction-report/deposit-transaction-report.tpl.html\'"></div>',
    controller: 'DepositTransactionReportCtrl as vm',
    label: 'Deposit Transaction Report',
    routeBranch: 'deposit-transaction-report',
    reloadOnSearch: false,
    translations: ['reports', 'deposit-transaction-report'],
    resolve: {
      banks: ["routeHelper", "dwAlerts", "bankService", function banks(routeHelper, dwAlerts, bankService) {
        return routeHelper.auth().then(function () {
          return bankService.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query banks.');
          });
        });
      }],
      centers: ["routeHelper", "dwAlerts", "centerService", function centers(routeHelper, dwAlerts, centerService) {
        return routeHelper.auth().then(function () {
          return centerService.getCenters().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query centers.');
          });
        });
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/deposit-and-tax-report', {
    template: '<div ng-include="\'deposit-and-tax-report/deposit-and-tax-report.tpl.html\'"></div>',
    controller: 'DepositAndTaxReportCtrl as $ctrl',
    routeBranch: 'deposit-and-tax-report',
    reloadOnSearch: false,
    translations: ['reports', 'deposit-and-tax-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/income-by-item-report', {
    template: '<div ng-include="\'income-by-item-report/income-by-item-report.tpl.html\'"></div>',
    controller: 'IncomeByItemReportCtrl as $ctrl',
    label: 'Income By Item Report',
    routeBranch: 'income-by-item-report',
    reloadOnSearch: false,
    translations: ['reports', 'income-by-item-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/income-report', {
    template: '<div ng-include="\'income-report/income-report.tpl.html\'"></div>',
    controller: 'IncomeReportCtrl as vm',
    label: 'Income Report',
    routeBranch: 'income-report',
    reloadOnSearch: false,
    translations: ['reports', 'income-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/accounts-receivable-report', {
    template: '<div ng-include="\'accounts-receivable-report/accounts-receivable-report.tpl.html\'"></div>',
    controller: 'AccountsReceivableReportCtrl as vm',
    label: 'Accounts Receivable Report',
    routeBranch: 'accounts-receivable-report',
    reloadOnSearch: false,
    translations: ['reports', 'accounts-receivable-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/credit-balance-report', {
    template: '<div ng-include="\'credit-balance-report/credit-balance-report.tpl.html\'"></div>',
    controller: 'CreditBalanceReportCtrl as vm',
    label: 'Credit Balance Report',
    routeBranch: 'credit-balance-report',
    reloadOnSearch: false,
    translations: ['reports', 'credit-balance-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/recurring-billing-report', {
    template: '<div ng-include="\'recurring-billing-report/recurring-billing-report.tpl.html\'"></div>',
    controller: 'RecurringBillingReportCtrl as vm',
    label: 'Recurring Billings Report',
    routeBranch: 'recurring-billing-report',
    reloadOnSearch: false,
    translations: ['reports', 'recurring-billings-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/recurring-billing-churn-report', {
    template: '<div ng-include="\'recurring-billing-churn-report/recurring-billing-churn-report.tpl.html\'"></div>',
    controller: 'RecurringBillingChurnReportCtrl as $ctrl',
    label: 'Recurring Billing Churn Report',
    routeBranch: 'recurring-billing-churn-report',
    reloadOnSearch: false,
    translations: ['reports', 'recurring-billing-churn-report', 'user-profile', 'billing-profile'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/reservation-report', {
    template: '<div ng-include="\'reservation-report/reservation-report.tpl.html\'"></div>',
    controller: 'ReservationReportCtrl as vm',
    label: 'Reservation Report',
    routeBranch: 'reservation-report',
    reloadOnSearch: false,
    translations: ['reports', 'reservation-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      reservationFields: ["dwAlerts", "ReservationField", function reservationFields(dwAlerts, ReservationField) {
        return ReservationField.query().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query reservation fields.');
        });
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/security-deposit-report', {
    template: '<div ng-include="\'security-deposit-report/security-deposit-report.tpl.html\'"></div>',
    controller: 'SecurityDepositReportCtrl as $ctrl',
    label: 'Security Deposit Report',
    routeBranch: 'security-deposit-report',
    reloadOnSearch: false,
    translations: ['reports', 'security-deposit-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/availability-report', {
    template: '<div ng-include="\'availability-report/availability-report.tpl.html\'"></div>',
    controller: 'AvailabilityReportCtrl as $ctrl',
    label: 'Availability Report',
    routeBranch: 'availability-report',
    reloadOnSearch: false,
    translations: ['reports', 'availability-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/member-usage-report', {
    template: '<div ng-include="\'member-usage-report/member-usage-report.tpl.html\'"></div>',
    controller: 'MemberUsageReportCtrl as vm',
    label: 'Member Usage Report',
    routeBranch: 'member-usage-report',
    reloadOnSearch: false,
    translations: ['reports', 'member-usage-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        });
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/check-in-report', {
    template: '<div ng-include="\'check-in-report/check-in-report.tpl.html\'"></div>',
    controller: 'CheckInReportCtrl as $ctrl',
    routeBranch: 'check-in-report',
    reloadOnSearch: false,
    translations: ['reports', 'check-in-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/reservation-utilization-report', {
    template: '<div ng-include="\'reservation-utilization-report/reservation-utilization-report.tpl.html\'"></div>',
    controller: 'ReservationUtilizationReportCtrl as $ctrl',
    routeBranch: 'reservation-utilization-report',
    reloadOnSearch: false,
    translations: ['reports', 'reservation-units', 'reservation-utilization-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/write-off-report', {
    template: '<div ng-include="\'write-off-report/write-off-report.tpl.html\'"></div>',
    controller: 'WriteOffReportCtrl as $ctrl',
    routeBranch: 'write-off-report',
    reloadOnSearch: false,
    translations: ['reports', 'write-off-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/reservation-usage-report', {
    template: '<div ng-include="\'reservation-usage-report/reservation-usage-report.tpl.html\'"></div>',
    controller: 'ReservationUsageReportCtrl as $ctrl',
    routeBranch: 'reservation-usage-report',
    reloadOnSearch: false,
    translations: ['reports', 'reservation-units', 'reservation-usage-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/passport-reservation-usage-report', {
    template: '<div ng-include="\'passport-reservation-usage-report/passport-reservation-usage-report.tpl.html\'"></div>',
    controller: 'PassportReservationUsageReportCtrl as $ctrl',
    routeBranch: 'passport-reservation-usage-report',
    reloadOnSearch: false,
    translations: ['reports', 'passport-reservation-usage-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/rent-roll-report', {
    template: '<div ng-include="\'rent-roll-report/rent-roll-report.tpl.html\'"></div>',
    controller: 'RentRollReportCtrl as $ctrl',
    routeBranch: 'rent-roll-report',
    reloadOnSearch: false,
    translations: ['reports', 'rent-roll-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/pass-usage-report', {
    template: '<div ng-include="\'pass-usage-report/pass-usage-report.tpl.html\'"></div>',
    controller: 'PassUsageReportCtrl as $ctrl',
    routeBranch: 'pass-usage-report',
    reloadOnSearch: false,
    translations: ['reports', 'pass-usage-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/revenue-forecast-report', {
    template: '<div ng-include="\'revenue-forecast-report/revenue-forecast-report.tpl.html\'"></div>',
    controller: 'RevenueForecastReportCtrl as $ctrl',
    routeBranch: 'revenue-forecast-report',
    reloadOnSearch: false,
    translations: ['reports', 'revenue-forecast-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/payment-reconciliation-report', {
    template: '<div ng-include="\'payment-reconciliation-report/payment-reconciliation-report.tpl.html\'"></div>',
    controller: 'PaymentReconciliationReportCtrl as $ctrl',
    routeBranch: 'payment-reconciliation-report',
    reloadOnSearch: false,
    translations: ['reports', 'payment-reconciliation-report'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
  $routeProvider.when('/recurring-billing-change-report', {
    template: '<div ng-include="\'recurring-billing-change-report/recurring-billing-change-report.tpl.html\'"></div>',
    controller: 'RecurringBillingChangeReportCtrl as $ctrl',
    routeBranch: 'recurring-billing-change-report',
    reloadOnSearch: false,
    translations: ['reports', 'recurring-billing-change-report', 'user-profile'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadReports'
    }
  });
}]));

/***/ }),

/***/ "./bundles/reservation-tablet/reservation-tablet.module.js":
/*!*****************************************************************!*\
  !*** ./bundles/reservation-tablet/reservation-tablet.module.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");
/* harmony import */ var shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/setup/reservation-field.service */ "./shared/services/setup/reservation-field.service.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationTablet', ['ngStorage', 'ngRoute', 'deskworks.routeHelper', 'deskworks.dwAlerts', 'deskworks.calendarService', 'deskworks.center.service', 'deskworks.userProfile.service', 'deskworks.lazyLoaders', shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_1__["default"].name]).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/reservation-tablet-setup', {
    template: '<div ng-include="\'reservation-tablet-setup/setup.tpl.html\'"></div>',
    controller: 'ReservationTabletSetupCtrl as $ctrl',
    routeBranch: 'reservation-tablet-setup',
    translations: ['reservation-tablet'],
    resolve: {
      categories: ["dwAlerts", "state", "routeHelper", "calendarService", function categories(dwAlerts, state, routeHelper, calendarService) {
        return routeHelper.auth().then(function () {
          return calendarService.query(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get calendar data.');
          });
        });
      }],
      lazy: 'lazyReservationTablet'
    }
  });
  var signInUrl = '/reservation-tablet-wizard/sign-in';
  /**
   * Wizard: 01 - Schedule
   */

  $routeProvider.when('/reservation-tablet-wizard', {
    template: '<div ng-include="\'reservation-tablet-wizard/01-schedule.tpl.html\'"></div>',
    controller: 'ReservationTabletScheduleCtrl as $ctrl',
    routeBranch: 'reservation-tablet-wizard',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['reservation-tablet'],
    resolve: {
      lazy: 'lazyReservationTablet',
      validate: ["validateReservationTablet", function validate(validateReservationTablet) {
        return validateReservationTablet();
      }]
    }
  });
  /**
   * Wizard: 02 - Sign In
   */

  $routeProvider.when('/reservation-tablet-wizard/sign-in', {
    template: '<div ng-include="\'reservation-tablet-wizard/02-sign-in.tpl.html\'"></div>',
    // templateUrl: 'sign-in/sign-in.tpl.html',
    controller: 'ReservationTabletSignInCtrl as $ctrl',
    routeBranch: 'reservation-tablet-wizard',
    hideSidebar: true,
    userTasksPolicy: false,
    reloadOnSearch: false,
    translations: ['sign-in'],
    resolve: {
      lazy: 'lazyReservationTablet',
      validate: ["validateReservationTablet", function validate(validateReservationTablet) {
        return validateReservationTablet();
      }]
    }
  });
  /**
   * Wizard: 03 - Reserve
   */

  $routeProvider.when('/reservation-tablet-wizard/reserve', {
    template: '<div ng-include="\'reservation-tablet-wizard/03-reserve.tpl.html\'"></div>',
    controller: 'ReservationTabletReserveCtrl as $ctrl',
    routeBranch: 'reservation-tablet-wizard',
    hideSidebar: true,
    reloadOnSearch: false,
    userTasksPolicy: false,
    translations: ['reservations'
    /*'reservation-tablet'*/
    ],
    resolve: {
      user: ["$q", "userProfileService", "state", "dwAlerts", "routeHelper", "resolveTimezone", function user($q, userProfileService, state, dwAlerts, routeHelper, resolveTimezone) {
        return $q.all([routeHelper.auth(signInUrl), resolveTimezone()]).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      center: ["state", "dwAlerts", "centerService", "routeHelper", function center(state, dwAlerts, centerService, routeHelper) {
        return routeHelper.auth(signInUrl).then(function () {
          return centerService.get(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get center.');
          });
        });
      }],
      calData: ["$q", "$filter", "state", "helper", "dwAlerts", "calendarService", "routeHelper", "resolveTimezone", function calData($q, $filter, state, helper, dwAlerts, calendarService, routeHelper, resolveTimezone) {
        return $q.all([routeHelper.auth(signInUrl), resolveTimezone()]).then(function () {
          var date = $filter('toDate')(state.getParam('date'), 'Z');
          date = moment.isMoment(date) ? date : moment();
          return calendarService.query(state.getCurrentCenterId(), date, date, state.getParam('role')).catch(function (err) {
            return dwAlerts.error(err, 'Failed to fetch calendar data.');
          });
        });
      }],
      reservationFields: ["dwAlerts", "ReservationField", "session", function reservationFields(dwAlerts, ReservationField, session) {
        return session.wait().catch(angular.noop).then(function () {
          return ReservationField.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation fields.');
          });
        });
      }],
      lazy: 'lazyReservationTablet',
      validate: ["validateReservationTablet", function validate(validateReservationTablet) {
        return validateReservationTablet();
      }]
    }
  });
  /**
   * Wizard: 04 - Complete
   */

  $routeProvider.when('/reservation-tablet-wizard/complete', {
    template: '<div ng-include="\'reservation-tablet-wizard/04-complete.tpl.html\'"></div>',
    controller: 'ReservationTabletCompleteCtrl as $ctrl',
    routeBranch: 'reservation-tablet-wizard',
    hideSidebar: true,
    reloadOnSearch: false,
    userTasksPolicy: false,
    translations: ['reservation-tablet'],
    resolve: {
      lazy: 'lazyReservationTablet',
      validate: ["validateReservationTablet", function validate(validateReservationTablet) {
        return validateReservationTablet();
      }]
    }
  });
}]).factory('validateReservationTablet', ["$localStorage", "$route", "dwAlerts", "state", function ($localStorage, $route, dwAlerts, state) {
  return function () {
    $localStorage.reservationTablet = $localStorage.reservationTablet || {};
    var ls = $localStorage.reservationTablet;
    var prefix = 'Missing $localStorage.reservationTablet';
    if (!ls.centerId) return dwAlerts.error("".concat(prefix, ".centerId"));
    if (!ls.login) return dwAlerts.error("".concat(prefix, ".login"));
    if (!ls.password) return dwAlerts.error("".concat(prefix, ".password"));
    if (!ls.unitId) return dwAlerts.error("".concat(prefix, ".unitId"));

    if (ls.unitId !== +state.getParam('unit')) {
      state.setParam('unit', ls.unitId);
      $route.reload();
      throw false;
    }

    return true;
  };
}]));

/***/ }),

/***/ "./bundles/reservations/reservations.module.js":
/*!*****************************************************!*\
  !*** ./bundles/reservations/reservations.module.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");
/* harmony import */ var shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/setup/reservation-field.service */ "./shared/services/setup/reservation-field.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservations', ['deskworks.state', 'deskworks.routeHelper', 'deskworks.setup.service', 'deskworks.userProfile.service', 'deskworks.center.service', 'deskworks.calendarService', 'deskworks.ReservationPrice', 'deskworks.lazyLoaders', shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_2__["default"].name]).config(["$routeProvider", function ($routeProvider) {
  /**
   * User Reservations
   */
  $routeProvider.when('/reservations', {
    template: '<div ng-include="\'user-reservations/user-reservations.tpl.html\'"></div>',
    controller: 'UserReservationsCtrl as $ctrl',
    label: 'Reservations',
    routeBranch: 'reservations',
    translations: ['user-reservations'],
    resolve: {
      reservationUnits: ["dwAlerts", "routeHelper", "state", "ReservationUnit", function reservationUnits(dwAlerts, routeHelper, state, ReservationUnit) {
        return routeHelper.auth().then(function () {
          return ReservationUnit.query(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation units.');
          });
        });
      }],
      user: ["dwAlerts", "userProfileService", "state", "routeHelper", function user(dwAlerts, userProfileService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser().then(function () {
            return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
              return dwAlerts.error(err, 'Failed to get user profile.');
            });
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      reservationFields: ["dwAlerts", "ReservationField", function reservationFields(dwAlerts, ReservationField) {
        return ReservationField.query().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query reservation fields.');
        });
      }],
      lazy: 'lazyLoadReservations'
    }
  });
  /**
   * Reservation Calendar
   */

  $routeProvider.when('/reservation-calendar', {
    template: '<rc-calendar cal-data="$resolve.calData" settings="$resolve.settings" ff-bulk-read-only></rc-calendar>',
    label: 'Reservation Calendar',
    routeBranch: 'reservation-calendar',
    reloadOnSearch: false,
    hideBanner: true,
    translations: ['reservations'],
    resolve: {
      calData: ["$q", "$filter", "state", "helper", "routeHelper", "dwAlerts", "calendarService", "rcHelper", "resolveTimezone", function calData($q, $filter, state, helper, routeHelper, dwAlerts, calendarService, rcHelper, resolveTimezone) {
        return $q.all([routeHelper.auth(), resolveTimezone()]).then(function () {
          var date = $filter('toDate')(state.getParam('date'), 'Z');
          date = moment.isMoment(date) ? date : moment();
          return calendarService.query(state.getCurrentCenterId(), rcHelper.weekStart(date), rcHelper.weekEnd(date), state.getParam('role')).catch(function (err) {
            return dwAlerts.error(err, 'Failed to fetch calendar data.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy: 'lazyLoadReservations'
    }
  });
  $routeProvider.when('/new-reservation', {
    template: '<res-reservation center="$resolve.center" user="$resolve.user" cal-data="$resolve.calData"' + ' hide-reservation-cost-estimate="$resolve.settings.hideReservationCostEstimate"' + ' hide-recurring-reservations="$resolve.settings.hideRecurringReservations"' + ' hide-staff-only-units="$resolve.settings.hideStaffOnlyUnits"' + ' reservation-prices="$resolve.reservationPrices" reservation-fields="$resolve.reservationFields"' + ' ff-bulk-read-only></res-reservation>',
    label: 'New Reservation',
    routeBranch: 'new-reservation',
    hideBanner: true,
    reloadOnSearch: false,
    translations: ['reservations'],
    resolve: {
      user: ["$q", "userProfileService", "state", "dwAlerts", "routeHelper", "resolveTimezone", function user($q, userProfileService, state, dwAlerts, routeHelper, resolveTimezone) {
        return $q.all([routeHelper.auth(), resolveTimezone()]).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      center: ["state", "dwAlerts", "centerService", "routeHelper", function center(state, dwAlerts, centerService, routeHelper) {
        return routeHelper.auth().then(function () {
          return centerService.get(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get center.');
          });
        });
      }],
      calData: ["$q", "$filter", "state", "helper", "dwAlerts", "calendarService", "routeHelper", "resolveTimezone", function calData($q, $filter, state, helper, dwAlerts, calendarService, routeHelper, resolveTimezone) {
        return $q.all([routeHelper.auth(), resolveTimezone()]).then(function () {
          var date = $filter('toDate')(state.getParam('date'), 'Z');
          date = moment.isMoment(date) ? date : moment();
          return calendarService.query(state.getCurrentCenterId(), date, date, state.getParam('role')).catch(function (err) {
            return dwAlerts.error(err, 'Failed to fetch calendar data.');
          });
        });
      }],
      reservationPrices: ["state", "dwAlerts", "ReservationPrice", "routeHelper", function reservationPrices(state, dwAlerts, ReservationPrice, routeHelper) {
        return routeHelper.auth().then(function () {
          return ReservationPrice.query(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation prices.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      reservationFields: ["dwAlerts", "ReservationField", function reservationFields(dwAlerts, ReservationField) {
        return ReservationField.query().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query reservation fields.');
        });
      }],
      lazy: 'lazyLoadReservations'
    }
  });
  $routeProvider.when('/edit-reservation/:reservationId', {
    template: '<res-reservation center="$resolve.center" user="$resolve.user" cal-data="$resolve.calData"' + ' hide-reservation-cost-estimate="$resolve.settings.hideReservationCostEstimate"' + ' hide-staff-only-units="$resolve.settings.hideStaffOnlyUnits"' + ' reservation-prices="$resolve.reservationPrices" reservation-fields="$resolve.reservationFields"' + ' ff-bulk-read-only></res-reservation>',
    label: 'Edit Reservation',
    routeBranch: 'reservation-calendar',
    reloadOnSearch: false,
    hideBanner: true,
    translations: ['reservations'],
    resolve: {
      user: ["$q", "userProfileService", "state", "dwAlerts", "routeHelper", "resolveTimezone", function user($q, userProfileService, state, dwAlerts, routeHelper, resolveTimezone) {
        return $q.all([routeHelper.auth(), resolveTimezone()]).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      center: ["state", "dwAlerts", "centerService", "routeHelper", function center(state, dwAlerts, centerService, routeHelper) {
        return routeHelper.auth().then(function () {
          return centerService.get(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get center.');
          });
        });
      }],
      calData: ["$q", "$filter", "state", "helper", "dwAlerts", "calendarService", "routeHelper", "resolveTimezone", function calData($q, $filter, state, helper, dwAlerts, calendarService, routeHelper, resolveTimezone) {
        return $q.all([routeHelper.auth(), resolveTimezone()]).then(function () {
          var date = $filter('toDate')(state.getParam('date'), 'Z');
          date = moment.isMoment(date) ? date : moment();
          return calendarService.query(state.getCurrentCenterId(), date, date, state.getParam('role')).catch(function (err) {
            return dwAlerts.error(err, 'Failed to fetch calendar data.');
          });
        });
      }],
      reservationPrices: ["state", "dwAlerts", "ReservationPrice", "routeHelper", function reservationPrices(state, dwAlerts, ReservationPrice, routeHelper) {
        return routeHelper.auth().then(function () {
          return ReservationPrice.query(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation prices.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      reservationFields: ["dwAlerts", "ReservationField", function reservationFields(dwAlerts, ReservationField) {
        return ReservationField.query().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query reservation fields.');
        });
      }],
      lazy: 'lazyLoadReservations'
    }
  });
}]));

/***/ }),

/***/ "./bundles/setup/setup.module.js":
/*!***************************************!*\
  !*** ./bundles/setup/setup.module.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");
/* harmony import */ var shared_services_setup_user_field_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/setup/user-field.service */ "./shared/services/setup/user-field.service.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.setup', ['ngRoute', 'deskworks.routeHelper', 'deskworks.dwAlerts', 'deskworks.setup.service', 'deskworks.bank.service', 'deskworks.center.service', 'deskworks.allowedHost.service', 'deskworks.Task', 'deskworks.Admin', 'deskworks.Owner', 'deskworks.Region', shared_services_setup_user_field_service__WEBPACK_IMPORTED_MODULE_1__["default"].name, 'deskworks.Roles', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/setup/settings', {
    template: '<div ng-include="\'settings/settings.tpl.html\'"></div>',
    controller: 'SetupSettingsCtrl as vm',
    label: 'Setup Settings',
    routeBranch: 'setup/settings',
    translations: ['setup-settings'],
    resolve: {
      settings: ["dwAlerts", "setupService", "state", "routeHelper", function settings(dwAlerts, setupService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return setupService.getSetupSettings().catch(function (err) {
            return dwAlerts.error(err, 'Failed to get setup settings.');
          });
        });
      }],
      locales: ["dwAlerts", "setupService", function locales(dwAlerts, setupService) {
        return setupService.queryLocales().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query locales.');
        });
      }],
      lazy1: 'lazyLoadSetup',
      lazy2: 'lazyLoadAffiliatly'
    }
  });
  $routeProvider.when('/setup/bar-upload-settings', {
    template: '<div ng-include="\'bar-upload-settings/bar-upload-settings.tpl.html\'"></div>',
    controller: 'BarUploadSettingsCtrl as vm',
    label: 'Bar Upload Settings',
    routeBranch: 'setup/bar-upload-settings',
    translations: ['bar-upload-settings'],
    resolve: {
      settings: ["dwAlerts", "setupService", "state", "routeHelper", function settings(dwAlerts, setupService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return setupService.getBarUploadSettings(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get bar upload settings.');
          });
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/banks', {
    template: '<div ng-include="\'banks/banks.tpl.html\'"></div>',
    controller: 'SetupBanksCtrl as $ctrl',
    label: 'Banks',
    routeBranch: 'banks',
    translations: ['banks'],
    resolve: {
      banks: ["dwAlerts", "bankService", "state", "routeHelper", function banks(dwAlerts, bankService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return bankService.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query banks.');
          });
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/banks/:bankId', {
    template: '<div ng-include="\'banks/bank-edit.tpl.html\'"></div>',
    controller: 'SetupBankEditCtrl as $ctrl',
    label: 'Bank Edit',
    routeBranch: 'banks',
    translations: ['banks'],
    resolve: {
      bank: ["$route", "dwAlerts", "bankService", "state", "routeHelper", function bank($route, dwAlerts, bankService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return bankService.get($route.current.params.bankId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get bank.');
          });
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/centers', {
    template: '<div ng-include="\'center/center-list.tpl.html\'"></div>',
    controller: 'CenterListCtrl as vm',
    label: 'Centers',
    routeBranch: 'centers',
    translations: ['centers'],
    resolve: {
      centers: ["dwAlerts", "centerService", "routeHelper", function centers(dwAlerts, centerService, routeHelper) {
        return routeHelper.auth().then(function () {
          return centerService.getCenters().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query centers.');
          });
        });
      }],
      admin: ["dwAlerts", "Admin", "routeHelper", "state", function admin(dwAlerts, Admin, routeHelper, state) {
        return routeHelper.auth().then(function () {
          if (!state.isLoggedAdmin()) return;
          return Admin.get(state.getLoggedUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get admin.');
          });
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/centers/:centerId', {
    template: '<div ng-include="\'center/center-edit.tpl.html\'"></div>',
    controller: 'CenterEditCtrl as vm',
    label: 'Edit',
    routeBranch: 'centers',
    translations: ['centers', 'reservation-rules'],
    resolve: {
      center: ["$route", "dwAlerts", "centerService", "state", "routeHelper", function center($route, dwAlerts, centerService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return centerService.get($route.current.params.centerId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get center.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/system-emails', {
    template: '<div ng-include="\'system-email/system-email-list.tpl.html\'"></div>',
    controller: 'SystemEmailListCtrl as $ctrl',
    label: 'System Emails',
    routeBranch: 'system-emails',
    translations: ['system-emails'],
    resolve: {
      systemEmails: ["dwAlerts", "systemService", "routeHelper", function systemEmails(dwAlerts, systemService, routeHelper) {
        return routeHelper.auth().then(function () {
          return systemService.getSystemEmails().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query system emails.');
          });
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/system-emails/:systemEmailId', {
    template: '<div ng-include="\'system-email/system-email-edit.tpl.html\'"></div>',
    controller: 'SystemEmailEditCtrl as $ctrl',
    label: 'Edit',
    routeBranch: 'system-emails',
    translations: ['system-emails'],
    resolve: {
      systemEmail: ["$route", "dwAlerts", "systemService", "state", "routeHelper", function systemEmail($route, dwAlerts, systemService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return systemService.getSystemEmail($route.current.params.systemEmailId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get system email.');
          });
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/tasks', {
    template: '<div ng-include="\'task/task-list.tpl.html\'"></div>',
    controller: 'TaskListCtrl as $ctrl',
    label: 'Tasks',
    routeBranch: 'tasks',
    translations: ['tasks'],
    resolve: {
      tasks: ["dwAlerts", "Task", "state", "routeHelper", function tasks(dwAlerts, Task, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Task.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query tasks.');
          });
        });
      }],
      roles: ["dwAlerts", "Roles", function roles(dwAlerts, Roles) {
        return Roles.query().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query user roles.');
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/tasks/:taskId', {
    template: '<div ng-include="\'task/task-edit.tpl.html\'"></div>',
    controller: 'TaskEditCtrl as $ctrl',
    label: 'Edit',
    routeBranch: 'tasks',
    translations: ['tasks'],
    resolve: {
      task: ["$route", "dwAlerts", "Task", "state", "routeHelper", function task($route, dwAlerts, Task, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return Task.get($route.current.params.taskId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get task.');
          });
        });
      }],
      roles: ["dwAlerts", "Roles", function roles(dwAlerts, Roles) {
        return Roles.query().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query user roles.');
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/setup/api-settings', {
    template: '<div ng-include="\'api-settings/api-settings.tpl.html\'"></div>',
    controller: 'ApiSettingsCtrl as $ctrl',
    label: 'API Settings',
    routeBranch: 'setup/api-settings',
    translations: ['api-settings'],
    resolve: {
      allowedHosts: ["dwAlerts", "allowedHostService", "routeHelper", function allowedHosts(dwAlerts, allowedHostService, routeHelper) {
        return routeHelper.auth().then(function () {
          return allowedHostService.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query allowed hosts.');
          });
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/owners-regions', {
    template: '<div ng-include="\'owners-regions/owners-regions.tpl.html\'"></div>',
    controller: 'OwnersRegionsCtrl as $ctrl',
    label: 'Owners & Regions',
    routeBranch: 'owners-regions',
    translations: ['owners-regions'],
    resolve: {
      owners: ["dwAlerts", "Owner", "routeHelper", function owners(dwAlerts, Owner, routeHelper) {
        return routeHelper.auth().then(function () {
          return Owner.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query owners.');
          });
        });
      }],
      regions: ["dwAlerts", "Region", "routeHelper", function regions(dwAlerts, Region, routeHelper) {
        return routeHelper.auth().then(function () {
          return Region.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query regions.');
          });
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/user-fields', {
    template: '<div ng-include="\'user-fields/user-fields.tpl.html\'"></div>',
    controller: 'UserFieldsCtrl as $ctrl',
    routeBranch: 'user-fields',
    translations: ['form-design'],
    resolve: {
      userFields: ["dwAlerts", "UserField", "routeHelper", function userFields(dwAlerts, UserField, routeHelper) {
        return routeHelper.auth().then(function () {
          return UserField.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query user fields.');
          });
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/reservation-fields', {
    template: '<div ng-include="\'reservation-fields/reservation-fields.tpl.html\'"></div>',
    controller: 'ReservationFieldsCtrl as $ctrl',
    routeBranch: 'reservation-fields',
    translations: ['form-design'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }],
      lazy: 'lazyLoadSetup'
    }
  });
  $routeProvider.when('/integrations-setup', {
    template: '<div ng-include="\'integrations-setup/integrations-setup.tpl.html\'"></div>',
    controller: 'IntegrationsSetupCtrl as $ctrl',
    label: 'Integrations Setup',
    routeBranch: 'integrations-setup',
    translations: ['integrations-setup'],
    resolve: {
      lazy1: 'lazyLoadSetup',
      lazy2: 'lazyLoadAppointmentPlus',
      lazy3: 'lazyLoadQuickBooks',
      lazy4: 'lazyLoadTeamgo',
      lazy5: 'lazyLoadKisi',
      lazy6: 'lazyLoadEzeep',
      lazy7: 'lazyLoadGreetly',
      lazy8: 'lazyLoadDoorflow'
    }
  });
  $routeProvider.when('/bundles', {
    template: '<div ng-include="\'bundles/bundles.tpl.html\'"></div>',
    controller: 'BundlesCtrl as $ctrl',
    routeBranch: 'bundles',
    userTasksPolicy: false,
    // translations: ['bundles'],
    resolve: {
      auth: ["routeHelper", "session", "dwAlerts", function auth(routeHelper, session, dwAlerts) {
        return routeHelper.auth().then(function () {
          if (!session.isAdmin()) return dwAlerts.error('Insufficient permissions.');
        });
      }],
      lazy: 'lazyLoadSetup'
    }
  });
}]));

/***/ }),

/***/ "./bundles/simple-reservation/simple-reservation.module.js":
/*!*****************************************************************!*\
  !*** ./bundles/simple-reservation/simple-reservation.module.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");
/* harmony import */ var shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/setup/reservation-field.service */ "./shared/services/setup/reservation-field.service.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.simpleReservation', ['ngRoute', 'deskworks.center.service', 'deskworks.reservationCategory.service', 'deskworks.calendarService', 'deskworks.userProfile.service', 'deskworks.purchase.service', 'deskworks.setup.service', 'deskworks.lazyLoaders', shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_services_setup_reservation_field_service__WEBPACK_IMPORTED_MODULE_4__["default"].name]).config(["$routeProvider", function ($routeProvider) {
  // Simple Reservation Auth helper
  function srAuth($route, helper, routeHelper) {
    var url = '/simple-reservation/centers/:centerId/types/:reservationTypeId/dates/:date/units/:reservationUnitId/users';
    return routeHelper.auth(helper.interpolateRoute(url, $route.current.params));
  }
  /**
   * 01. Centers List
   */


  $routeProvider.when('/simple-reservation', {
    template: '<div ng-include="\'01-centers/centers.tpl.html\'"></div>',
    controller: 'SimpleReservationCentersCtrl as vm',
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation'],
    resolve: {
      centers: ["$q", "dwAlerts", "centerService", function centers($q, dwAlerts, centerService) {
        return centerService.getCenters().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query centers.');
        }).then(function (centers) {
          centers = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(centers).call(centers, function (center) {
            return center.reservationUnitsCount > 0;
          });
          if (!centers.length) return dwAlerts.error('<b>No public centers.</b> At least one center needs <b>Center for Internal Use</b> setting <b>turned off.</b>');
          return centers;
        });
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  /**
   * 02. Reservation Categories List
   */

  $routeProvider.when('/simple-reservation/centers/:centerId/types', {
    template: '<div ng-include="\'02-reservation-categories/reservation-categories.tpl.html\'"></div>',
    controller: 'SimpleReservationCategoriesCtrl as vm',
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation', 'reservations'],
    resolve: {
      reservationCategories: ["$route", "state", "helper", "dwAlerts", "calendarService", "resolveTimezone", function reservationCategories($route, state, helper, dwAlerts, calendarService, resolveTimezone) {
        return resolveTimezone().then(function () {
          return calendarService.query($route.current.params.centerId, moment(), moment()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation categories.');
          });
        });
      }],
      center: ["$route", "dwAlerts", "centerService", function center($route, dwAlerts, centerService) {
        return centerService.get($route.current.params.centerId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  /**
   * 03. Reservation Category View
   */

  $routeProvider.when('/simple-reservation/centers/:centerId/types/:reservationTypeId', {
    template: '<div ng-include="\'03-reservation-category/reservation-category.tpl.html\'"></div>',
    controller: 'SimpleReservationCategoryCtrl as vm',
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation'],
    resolve: {
      reservationCategory: ["$q", "$route", "dwAlerts", "reservationCategoryService", function reservationCategory($q, $route, dwAlerts, reservationCategoryService) {
        return reservationCategoryService.get($route.current.params.centerId, $route.current.params.reservationTypeId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get reservation category.');
        });
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  /**
   * 04. Date
   */

  $routeProvider.when('/simple-reservation/centers/:centerId/types/:reservationTypeId/dates', {
    template: '<div ng-include="\'04-date/date.tpl.html\'"></div>',
    controller: 'SimpleReservationDateCtrl as vm',
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation'],
    resolve: {
      unavailableDates: ["$route", "dwAlerts", "reservationCategoryService", function unavailableDates($route, dwAlerts, reservationCategoryService) {
        return reservationCategoryService.getUnavailableDates($route.current.params.centerId, $route.current.params.reservationTypeId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to query unavailable dates.');
        });
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  /**
   * 05. Reservation Units
   */

  $routeProvider.when('/simple-reservation/centers/:centerId/types/:reservationTypeId/dates/:date/units', {
    template: '<div ng-include="\'05-reservation-units/reservation-units.tpl.html\'"></div>',
    controller: 'SimpleReservationUnitsCtrl as vm',
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation', 'reservations'],
    resolve: {
      resUnits: ["$route", "$filter", "state", "helper", "dwAlerts", "calendarService", "resolveTimezone", function resUnits($route, $filter, state, helper, dwAlerts, calendarService, resolveTimezone) {
        return resolveTimezone().then(function () {
          var date = $filter('toDate')($route.current.params.date);
          date = moment.isMoment(date) ? date : moment();
          return calendarService.query($route.current.params.centerId, date, date).catch(function (err) {
            return dwAlerts.error(err, 'Failed to fetch calendar data.');
          }).then(function (resTypes) {
            return (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, resTypes, $route.current.params.reservationTypeId) || {}).reservationUnits || [];
          });
        });
      }],
      center: ["$route", "dwAlerts", "centerService", function center($route, dwAlerts, centerService) {
        return centerService.get($route.current.params.centerId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  /**
   * 06. Time
   */

  $routeProvider.when('/simple-reservation/centers/:centerId/types/:reservationTypeId/dates/:date/units/:reservationUnitId', {
    template: '<div ng-include="\'06-time/simple-reservation-time.tpl.html\'"></div>',
    controller: 'SimpleReservationTimeCtrl as $ctrl',
    reloadOnSearch: false,
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation', 'reservations'],
    resolve: {
      center: ["$route", "dwAlerts", "centerService", function center($route, dwAlerts, centerService) {
        return centerService.get($route.current.params.centerId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      calData: ["$route", "$filter", "state", "helper", "dwAlerts", "calendarService", "resolveTimezone", function calData($route, $filter, state, helper, dwAlerts, calendarService, resolveTimezone) {
        return resolveTimezone().then(function () {
          var date = $filter('toDate')($route.current.params.date || state.getParam('date'));
          date = moment.isMoment(date) ? date : moment();
          return calendarService.query($route.current.params.centerId, date, date, state.getParam('role')).catch(function (err) {
            return dwAlerts.error(err, 'Failed to fetch calendar data.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      reservationFields: ["dwAlerts", "ReservationField", "session", function reservationFields(dwAlerts, ReservationField, session) {
        return session.wait().catch(angular.noop).then(function () {
          return ReservationField.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation fields.');
          });
        });
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  /**
   * 06.5. Sign-In
   */

  $routeProvider.when('/simple-reservation/centers/:centerId/types/:reservationTypeId/dates/:date/units/:reservationUnitId/users', {
    template: '<div ng-include="\'other/simple-reservation-sign-in.tpl.html\'"></div>',
    controller: 'SimpleReservationSignInCtrl as vm',
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['sign-in'],
    resolve: {
      redirect: ["$q", "state", function redirect($q, state) {
        if (state.isLoggedNonMember()) {
          // Redirect non-member to Simple Reservation / User Profile
          state.setPath(state.getPath() + '/' + state.getLoggedUserId(), true);
          return $q.reject();
        }

        if (state.getLoggedUserId()) {
          // Redirect member/coordinator/admin to Simple Reservation / Confirm Reservation
          state.setPath(state.getPath() + '/' + state.getLoggedUserId() + '/confirm', true);
          return $q.reject();
        }
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  /**
   * 07. User Profile
   */

  $routeProvider.when('/simple-reservation/centers/:centerId/types/:reservationTypeId/dates/:date/units/:reservationUnitId/users/:userId', {
    template: '<div ng-include="\'templates/new-user-profile.tpl.html\'"></div>',
    controller: 'SimpleReservationUserProfileCtrl as vm',
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['user-profile'],
    resolve: {
      reg: ["$route", function reg($route) {
        return {
          member: false,
          selfRegistration: true,
          new: $route.current.params.userId === 'new'
        };
      }],
      userProfile: ["dwAlerts", "$route", "helper", "state", "routeHelper", "userProfileService", "centerService", function userProfile(dwAlerts, $route, helper, state, routeHelper, userProfileService, centerService) {
        if ($route.current.params.userId === 'new') {
          return centerService.get($route.current.params.centerId).then(function (center) {
            return userProfileService.new(center, 'nonMember', 'signUp').catch(function (err) {
              return dwAlerts.error(err, 'Failed to get new member profile template.');
            });
          });
        } else {
          return srAuth($route, helper, routeHelper).then(function () {
            return userProfileService.getForRegistration($route.current.params.centerId, $route.current.params.userId, 'nonMember', 'signUp').catch(function (err) {
              return dwAlerts.error(err, 'Failed to get user profile.');
            });
          });
        }
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  /**
   * Confirm Reservation (for Member)
   */

  $routeProvider.when('/simple-reservation/centers/:centerId/types/:reservationTypeId/dates/:date/units/:reservationUnitId/users/:userId/confirm', {
    template: '<div ng-include="\'other/confirm.tpl.html\'"></div>',
    controller: 'SimpleReservationConfirmCtrl',
    controllerAs: 'vm',
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation', 'reservations'],
    resolve: {
      center: ["$route", "dwAlerts", "centerService", function center($route, dwAlerts, centerService) {
        return centerService.get($route.current.params.centerId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      reservationUnit: ["$route", "dwAlerts", "helper", "routeHelper", "ReservationUnit", function reservationUnit($route, dwAlerts, helper, routeHelper, ReservationUnit) {
        return srAuth($route, helper, routeHelper).then(function () {
          return ReservationUnit.get($route.current.params.centerId, $route.current.params.reservationUnitId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get reservation unit.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      reservationFields: ["dwAlerts", "ReservationField", "session", function reservationFields(dwAlerts, ReservationField, session) {
        return session.wait().catch(angular.noop).then(function () {
          return ReservationField.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation fields.');
          });
        });
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  /**
   * 08. Purchase
   */

  $routeProvider.when('/simple-reservation/centers/:centerId/types/:reservationTypeId/dates/:date/units/:reservationUnitId/users/:userId/purchases/:purchaseId', {
    template: '<div ng-include="\'08-purchase/purchase.tpl.html\'"></div>',
    controller: 'SimpleReservationPurchaseCtrl',
    controllerAs: 'vm',
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    reloadOnSearch: false,
    translations: ['simple-reservation', 'reservations', 'purchase', 'billing-profile'],
    resolve: {
      reg: function reg() {
        return {
          member: false,
          selfRegistration: true
        };
      },
      center: ["$route", "dwAlerts", "centerService", function center($route, dwAlerts, centerService) {
        return centerService.get($route.current.params.centerId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      purchase: ["$route", "dwAlerts", "helper", "routeHelper", "purchaseService", "resolveTimezone", function purchase($route, dwAlerts, helper, routeHelper, purchaseService, resolveTimezone) {
        return srAuth($route, helper, routeHelper).then(function () {
          return resolveTimezone();
        }).then(function () {
          return purchaseService.get($route.current.params.centerId, $route.current.params.userId, $route.current.params.purchaseId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get purchase.');
          });
        });
      }],
      reservationUnit: ["$route", "dwAlerts", "ReservationUnit", function reservationUnit($route, dwAlerts, ReservationUnit) {
        return ReservationUnit.get($route.current.params.centerId, $route.current.params.reservationUnitId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get reservation unit.');
        });
      }],
      userProfile: ["$q", "$route", "dwAlerts", "helper", "state", "routeHelper", "userProfileService", "resolveTimezone", function userProfile($q, $route, dwAlerts, helper, state, routeHelper, userProfileService, resolveTimezone) {
        return srAuth($route, helper, routeHelper).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get($route.current.params.centerId, $route.current.params.userId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      reservationFields: ["dwAlerts", "ReservationField", "session", function reservationFields(dwAlerts, ReservationField, session) {
        return session.wait().catch(angular.noop).then(function () {
          return ReservationField.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation fields.');
          });
        });
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  /**
   * Staff Help
   */

  $routeProvider.when('/simple-reservation/centers/:centerId/types/:reservationTypeId/dates/:date/units/:reservationUnitId/users/:userId/purchases/:purchaseId/staff-help', {
    template: '<div ng-include="\'staff-help/staff-help.tpl.html\'"></div>',
    controller: 'StaffHelpCtrl',
    controllerAs: 'vm',
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation'],
    resolve: {
      user: ["$route", "helper", "routeHelper", function user($route, helper, routeHelper) {
        return srAuth($route, helper, routeHelper);
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  /**
   * Complete
   */

  $routeProvider.when('/simple-reservation/centers/:centerId/types/:reservationTypeId/dates/:date/units/:reservationUnitId/users/:userId/purchases/:purchaseId/complete', {
    template: '<div ng-include="\'other/complete.tpl.html\'"></div>',
    controller: 'SimpleReservationCompleteCtrl',
    routeBranch: 'new-reservation',
    controllerAs: 'vm',
    hideSidebar: true,
    translations: ['simple-reservation', 'purchase'],
    userTasksPolicy: false,
    resolve: {
      reg: function reg() {
        return {
          member: false,
          selfRegistration: true
        };
      },
      purchase: ["$route", "dwAlerts", "state", "helper", "routeHelper", "purchaseService", "resolveTimezone", function purchase($route, dwAlerts, state, helper, routeHelper, purchaseService, resolveTimezone) {
        return srAuth($route, helper, routeHelper).then(function () {
          return resolveTimezone();
        }).then(function () {
          return purchaseService.get($route.current.params.centerId, $route.current.params.userId, $route.current.params.purchaseId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get purchase.');
          });
        });
      }],
      center: ["$route", "dwAlerts", "centerService", function center($route, dwAlerts, centerService) {
        return centerService.get($route.current.params.centerId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
  $routeProvider.when('/simple-reservation/complete', {
    template: '<div ng-include="\'other/complete.tpl.html\'"></div>',
    controller: 'SimpleReservationCompleteCtrl as vm',
    routeBranch: 'new-reservation',
    hideSidebar: true,
    userTasksPolicy: false,
    translations: ['simple-reservation'],
    resolve: {
      purchase: function purchase() {},
      center: function center() {},
      auth: ["$route", "helper", "routeHelper", function auth($route, helper, routeHelper) {
        return srAuth($route, helper, routeHelper);
      }],
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],
      lazy: 'lazyLoadSimpleReservation'
    }
  });
}]));

/***/ }),

/***/ "./bundles/system/system.module.js":
/*!*****************************************!*\
  !*** ./bundles/system/system.module.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.system', ['ngRoute', 'deskworks.routeHelper', 'deskworks.dwAlerts', 'deskworks.accessCard.service', 'deskworks.system.service', 'deskworks.Admin', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/access-cards', {
    template: '<div ng-include="\'access-card/access-card-list.tpl.html\'"></div>',
    controller: 'AccessCardListCtrl as vm',
    label: 'Access Cards',
    routeBranch: 'access-cards',
    translations: ['access-cards'],
    resolve: {
      accessCards: ["dwAlerts", "AccessCard", "state", "routeHelper", function accessCards(dwAlerts, AccessCard, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return AccessCard.query({
            centerId: state.getCurrentCenterId()
          }).$promise.catch(function (err) {
            return dwAlerts.error(err, 'Failed to query access cards.');
          });
        });
      }],
      center: ["state", "dwAlerts", "centerService", function center(state, dwAlerts, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],
      lazy: 'lazyLoadSystem'
    }
  });
  $routeProvider.when('/access-cards/:accessCardId', {
    template: '<div ng-include="\'access-card/access-card-edit.tpl.html\'"></div>',
    controller: 'AccessCardEditCtrl as vm',
    label: 'Edit',
    routeBranch: 'access-cards',
    translations: ['access-cards'],
    resolve: {
      accessCard: ["$route", "dwAlerts", "AccessCard", "state", "helper", "routeHelper", function accessCard($route, dwAlerts, AccessCard, state, helper, routeHelper) {
        return routeHelper.auth().then(function () {
          return AccessCard.query({
            centerId: state.getCurrentCenterId()
          }).$promise.catch(function (err) {
            return dwAlerts.error(err, 'Failed to query access cards.');
          }).then(function (result) {
            return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, result, $route.current.params.accessCardId);
          });
        });
      }],
      user: ["dwAlerts", "state", "userProfileService", function user(dwAlerts, state, userProfileService) {
        return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get user profile.');
        });
      }],
      lazy: 'lazyLoadSystem'
    }
  });
  $routeProvider.when('/administrators', {
    template: '<div ng-include="\'administrator/administrator-list.tpl.html\'"></div>',
    controller: 'AdministratorListCtrl as $ctrl',
    label: 'Administrators',
    routeBranch: 'administrators',
    translations: ['administrators'],
    resolve: {
      admins: ["dwAlerts", "Admin", "routeHelper", function admins(dwAlerts, Admin, routeHelper) {
        return routeHelper.auth().then(function () {
          return Admin.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query administrators.');
          });
        });
      }],
      lazy: 'lazyLoadSystem'
    }
  });
  $routeProvider.when('/administrators/:adminId', {
    template: '<div ng-include="\'administrator/administrator-edit.tpl.html\'"></div>',
    controller: 'AdminEditCtrl as $ctrl',
    label: 'Edit',
    routeBranch: 'administrators',
    translations: ['administrators', 'user-profile'],
    resolve: {
      admin: ["$route", "dwAlerts", "Admin", "routeHelper", function admin($route, dwAlerts, Admin, routeHelper) {
        return routeHelper.auth().then(function () {
          return Admin.get($route.current.params.adminId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get administrator.');
          });
        });
      }],
      userProfile: ["$route", "state", "dwAlerts", "userProfileService", "routeHelper", function userProfile($route, state, dwAlerts, userProfileService, routeHelper) {
        return routeHelper.auth().then(function () {
          return userProfileService.get(state.getCurrentCenterId(), $route.current.params.adminId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get administrator user profile.');
          });
        });
      }],
      lazy: 'lazyLoadSystem'
    }
  });
  $routeProvider.when('/lead-sources', {
    template: '<div ng-include="\'lead-source/lead-source-list.tpl.html\'"></div>',
    controller: 'LeadSourceListCtrl as vm',
    label: 'Lead Sources',
    routeBranch: 'lead-sources',
    translations: ['lead-sources'],
    resolve: {
      leadSources: ["dwAlerts", "systemService", "state", "routeHelper", function leadSources(dwAlerts, systemService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return systemService.getLeadSources().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query lead sources.');
          });
        });
      }],
      lazy: 'lazyLoadSystem'
    }
  });
}]));

/***/ }),

/***/ "./bundles/termination-request/termination-request.module.js":
/*!*******************************************************************!*\
  !*** ./bundles/termination-request/termination-request.module.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.terminationRequest', ['ngRoute', 'deskworks.routeHelper', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/termination-request', {
    template: '<div ng-include="\'termination-request/termination-request.tpl.html\'"></div>',
    controller: 'TerminationRequestCtrl as $ctrl',
    routeBranch: 'termination-request',
    translations: ['termination-request'],
    resolve: {
      recurringCharges: ["dwAlerts", "recurringChargeService", "state", "routeHelper", function recurringCharges(dwAlerts, recurringChargeService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return recurringChargeService.query(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query recurring charges.');
          });
        });
      }],
      lazy: 'lazyLoadTerminationRequest'
    }
  });
}]));

/***/ }),

/***/ "./bundles/usage/usage.module.js":
/*!***************************************!*\
  !*** ./bundles/usage/usage.module.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.usage', ['ngRoute', 'deskworks.routeHelper', 'deskworks.dwAlerts', 'deskworks.usageEntryService', 'deskworks.checkInLog.service', 'deskworks.memberUsageService', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/usage-entry', {
    template: '<div ng-include="\'usage-entry/usage-entry-list.tpl.html\'"></div>',
    controller: 'UsageEntryListCtrl as $ctrl',
    routeBranch: 'usage-entry',
    translations: ['usage-entry'],
    resolve: {
      usageList: ["dwAlerts", "usageEntryService", "state", "routeHelper", function usageList(dwAlerts, usageEntryService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return usageEntryService.query(state.getCurrentCenterId(), state.getCurrentUserId(), 1, 15).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query usage entry.');
          });
        });
      }],
      user: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function user(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      lazy: 'lazyLoadUsage'
    }
  });
  $routeProvider.when('/usage-entry/:usageId', {
    template: '<div ng-include="\'usage-entry/usage-entry-edit.tpl.html\'"></div>',
    controller: 'UsageEntryEditCtrl as $ctrl',
    routeBranch: 'usage-entry',
    translations: ['usage-entry'],
    resolve: {
      usage: ["$route", "dwAlerts", "usageEntryService", "state", "routeHelper", function usage($route, dwAlerts, usageEntryService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return usageEntryService.get(state.getCurrentCenterId(), state.getCurrentUserId(), $route.current.params.usageId).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get usage entry.');
          });
        });
      }],
      user: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function user(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      lazy: 'lazyLoadUsage'
    }
  });
  /**
   * OLD Member Usage
   */

  $routeProvider.when('/member-usage', {
    template: '<div ng-include="\'view-usage/view-usage.tpl.html\'"></div>',
    controller: 'ViewUsageCtrl as $ctrl',
    routeBranch: 'member-usage',
    translations: ['view-usage'],
    resolve: {
      memberUsageList: ["dwAlerts", "memberUsageService", "state", "routeHelper", function memberUsageList(dwAlerts, memberUsageService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return memberUsageService.query(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to query member usages.');
          });
        });
      }],
      user: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function user(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      lazy: 'lazyLoadUsage'
    }
  });
  /**
   * New Usage Tracking migrated from canopy branch
   */

  $routeProvider.when('/usage-tracking', {
    template: '<div ng-include="\'usage-tracking/usage-tracking.tpl.html\'"></div>',
    controller: 'UsageTrackingCtrl as $ctrl',
    routeBranch: 'usage-tracking',
    translations: ['usage-tracking'],
    resolve: {
      user: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function user(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      lazy: 'lazyLoadUsage'
    }
  });
  $routeProvider.when('/member-log', {
    template: '<div ng-include="\'check-in-log/check-in-log.tpl.html\'"></div>',
    controller: 'CheckInLogCtrl as $ctrl',
    routeBranch: 'member-log',
    translations: ['check-in-log'],
    resolve: {
      user: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function user(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      lazy: 'lazyLoadUsage'
    }
  });
  $routeProvider.when('/manual-check-in-log', {
    template: '<div ng-include="\'manual-check-in-log/manual-check-in-log.tpl.html\'"></div>',
    controller: 'ManualCheckInLogCtrl as $ctrl',
    routeBranch: 'manual-check-in-log',
    translations: ['check-in-log'],
    resolve: {
      user: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function user(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser();
        }).then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],
      lazy: 'lazyLoadUsage'
    }
  });
}]));

/***/ }),

/***/ "./bundles/white-label/white-label.module.js":
/*!***************************************************!*\
  !*** ./bundles/white-label/white-label.module.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.whiteLabel', ['ngRoute', 'deskworks.routeHelper', 'deskworks.dwAlerts', 'deskworks.lazyLoaders']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/white-label-settings', {
    template: '<div ng-include="\'settings/white-label-settings.tpl.html\'"></div>',
    controller: 'WhiteLabelSettingsCtrl as $ctrl',
    routeBranch: 'white-label-settings',
    translations: ['white-label-settings'],
    resolve: {
      lazy: 'lazyLoadWhiteLabel'
    }
  });
}]));

/***/ })

}]);
//# sourceMappingURL=main~._a.js.map?_rev=5b1590d2e5c11dbde595