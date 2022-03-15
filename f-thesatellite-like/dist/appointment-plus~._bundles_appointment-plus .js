(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-plus~._bundles_appointment-plus "],{

/***/ "./bundles/appointment-plus sync recursive .*\\.tpl\\.html$":
/*!******************************************************!*\
  !*** ./bundles/appointment-plus sync .*\.tpl\.html$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./settings/appointment-plus-settings.tpl.html": "./bundles/appointment-plus/settings/appointment-plus-settings.tpl.html"
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
webpackContext.id = "./bundles/appointment-plus sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/appointment-plus sync recursive \\..+\\/.+\\.js$":
/*!*****************************************************!*\
  !*** ./bundles/appointment-plus sync \..+\/.+\.js$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./settings/appointment-plus-settings.directive.js": "./bundles/appointment-plus/settings/appointment-plus-settings.directive.js",
	"./settings/appointment-plus-settings.service.js": "./bundles/appointment-plus/settings/appointment-plus-settings.service.js"
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
webpackContext.id = "./bundles/appointment-plus sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/appointment-plus/index.js":
/*!*******************************************!*\
  !*** ./bundles/appointment-plus/index.js ***!
  \*******************************************/
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

  var js = importAll(__webpack_require__("./bundles/appointment-plus sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/appointment-plus sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/appointment-plus/settings/appointment-plus-settings.directive.js":
/*!**********************************************************************************!*\
  !*** ./bundles/appointment-plus/settings/appointment-plus-settings.directive.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Integrations Setup -> Appointment Plus Settings directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.appointmentPlusSettingsDirective', ['debounce', 'deskworks.AppointmentPlusSettings']).directive('appointmentPlusSettings', function () {
  var templateUrl = 'settings/appointment-plus-settings.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'AppointmentPlusSettingsCtrl as $ctrl'
  };
}).controller('AppointmentPlusSettingsCtrl', ["dwAlerts", "debounce", "AppointmentPlusSettings", function (dwAlerts, debounce, AppointmentPlusSettings) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };
  /**
   * Load settings
   */


  $ctrl.load = function () {
    $ctrl.spin = true;
    return AppointmentPlusSettings.get().catch(function (err) {
      return dwAlerts.error(err, 'Failed to load AppointmentPlus settings.');
    }).finally(function () {
      $ctrl.spin = false;
    }).then(function (settings) {
      $ctrl.settings = settings;
    });
  };
  /**
   * Save settings
   */


  $ctrl.save = debounce(save, 1000);

  function save(form) {
    if (form.$invalid) return;
    $ctrl.spin = true;
    return AppointmentPlusSettings.save($ctrl.settings).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save AppointmentPlus settings.');
    }).finally(function () {
      $ctrl.spin = false;
    });
  }
}]));

/***/ }),

/***/ "./bundles/appointment-plus/settings/appointment-plus-settings.service.js":
/*!********************************************************************************!*\
  !*** ./bundles/appointment-plus/settings/appointment-plus-settings.service.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.AppointmentPlusSettings', ['ngResource', 'deskworks.config']).factory('AppointmentPlusSettings', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/appointment-plus/settings'), {}, {
    get: {
      method: 'GET'
    },
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get() {
      return res.get().$promise;
    },
    save: function save(data) {
      return res.update({}, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/appointment-plus/settings/appointment-plus-settings.tpl.html":
/*!******************************************************************************!*\
  !*** ./bundles/appointment-plus/settings/appointment-plus-settings.tpl.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header ff-spin=\"$ctrl.spin\" class=\"ff-spin-right\"> <span translate=\"INTEGRATIONS_SETUP.APP_PLUS.HEADER\"></span> </ff-panel-header> <form name=\"form\" novalidate> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"enabled\" ff-model=\"$ctrl.settings.enabled\" ff-change=\"$ctrl.save(form)\"> <span translate=\"INTEGRATIONS_SETUP.APP_PLUS.ENABLED\"></span> </ff-checkbox> </label> </ff-static> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\" ff-required=\"{{$ctrl.settings.enabled}}\"> <span translate=\"INTEGRATIONS_SETUP.APP_PLUS.API_SITE_ID\"></span> </ff-label> <ff-text ff-model=\"$ctrl.settings.apiSiteId\" ff-change=\"$ctrl.save(form)\" ff-required=\"$ctrl.settings.enabled\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.APP_PLUS.API_SITE_ID' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\" ff-required=\"{{$ctrl.settings.enabled}}\"> <span translate=\"INTEGRATIONS_SETUP.APP_PLUS.API_KEY\"></span> </ff-label> <ff-text ff-model=\"$ctrl.settings.apiKey\" ff-change=\"$ctrl.save(form)\" ff-required=\"$ctrl.settings.enabled\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.APP_PLUS.API_KEY' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\" ff-required=\"{{$ctrl.settings.enabled}}\"> <span translate=\"INTEGRATIONS_SETUP.APP_PLUS.API_BASE_URL\"></span> </ff-label> <ff-text ff-model=\"$ctrl.settings.apiBaseUrl\" ff-change=\"$ctrl.save(form)\" ff-required=\"$ctrl.settings.enabled\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.APP_PLUS.API_BASE_URL' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\"> <span translate=\"INTEGRATIONS_SETUP.APP_PLUS.COWORKING_CENTER\"></span> </ff-label> <ff-static>{{$ctrl.settings.coworkingCenter}}</ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\"> <span translate=\"INTEGRATIONS_SETUP.APP_PLUS.APPOINTMENT_LOCATION\"></span> </ff-label> <ff-static>{{$ctrl.settings.appointmentLocation}}</ff-static> </label> </form> </ff-panel> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=appointment-plus~._bundles_appointment-plus .js.map?_rev=363d62f942b3d91bd595