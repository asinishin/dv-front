(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teamgo~._bundles_teamgo "],{

/***/ "./bundles/teamgo sync recursive .*\\.tpl\\.html$":
/*!********************************************!*\
  !*** ./bundles/teamgo sync .*\.tpl\.html$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./settings/teamgo-settings.tpl.html": "./bundles/teamgo/settings/teamgo-settings.tpl.html"
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
webpackContext.id = "./bundles/teamgo sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/teamgo sync recursive \\..+\\/.+\\.js$":
/*!*******************************************!*\
  !*** ./bundles/teamgo sync \..+\/.+\.js$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./settings/teamgo-settings.directive.js": "./bundles/teamgo/settings/teamgo-settings.directive.js",
	"./settings/teamgo-settings.service.js": "./bundles/teamgo/settings/teamgo-settings.service.js"
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
webpackContext.id = "./bundles/teamgo sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/teamgo/index.js":
/*!*********************************!*\
  !*** ./bundles/teamgo/index.js ***!
  \*********************************/
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

  var js = importAll(__webpack_require__("./bundles/teamgo sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/teamgo sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/teamgo/settings/teamgo-settings.directive.js":
/*!**************************************************************!*\
  !*** ./bundles/teamgo/settings/teamgo-settings.directive.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Integrations Setup -> Teamgo Settings directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.teamgoSettingsDirective', ['debounce', 'deskworks.TeamgoSettings']).directive('teamgoSettings', function () {
  var templateUrl = 'settings/teamgo-settings.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'TeamgoSettingsCtrl as $ctrl'
  };
}).controller('TeamgoSettingsCtrl', ["dwAlerts", "debounce", "TeamgoSettings", function (dwAlerts, debounce, TeamgoSettings) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };
  /**
   * Load settings
   */


  $ctrl.load = function () {
    $ctrl.spin = true;
    return TeamgoSettings.get().catch(function (err) {
      return dwAlerts.error(err, 'Failed to load Teamgo settings.');
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
    return TeamgoSettings.save($ctrl.settings).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save Teamgo settings.');
    }).finally(function () {
      $ctrl.spin = false;
    });
  }
}]));

/***/ }),

/***/ "./bundles/teamgo/settings/teamgo-settings.service.js":
/*!************************************************************!*\
  !*** ./bundles/teamgo/settings/teamgo-settings.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.TeamgoSettings', ['ngResource', 'deskworks.config']).factory('TeamgoSettings', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/teamgo/settings'), {}, {
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

/***/ "./bundles/teamgo/settings/teamgo-settings.tpl.html":
/*!**********************************************************!*\
  !*** ./bundles/teamgo/settings/teamgo-settings.tpl.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header ff-spin=\"$ctrl.spin\" class=\"ff-spin-right\"> <span translate=\"INTEGRATIONS_SETUP.TEAMGO.HEADER\"></span> </ff-panel-header> <form name=\"form\" novalidate> <ff-static> <label class=\"ff-row\"> <ff-checkbox name=\"enabled\" ff-model=\"$ctrl.settings.enabled\" ff-change=\"$ctrl.save(form)\"> <span translate=\"INTEGRATIONS_SETUP.TEAMGO.ENABLED\"></span> </ff-checkbox> </label> </ff-static> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\" ff-required=\"{{$ctrl.settings.enabled}}\"> <span translate=\"INTEGRATIONS_SETUP.TEAMGO.API_KEY\"></span> </ff-label> <ff-text ff-model=\"$ctrl.settings.apiKey\" ff-change=\"$ctrl.save(form)\" ff-required=\"$ctrl.settings.enabled\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.TEAMGO.API_KEY' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\" ff-required=\"{{$ctrl.settings.enabled}}\"> <span translate=\"INTEGRATIONS_SETUP.TEAMGO.LOGIN\"></span> </ff-label> <ff-text ff-model=\"$ctrl.settings.login\" ff-change=\"$ctrl.save(form)\" ff-required=\"$ctrl.settings.enabled\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.TEAMGO.LOGIN' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\" ff-required=\"{{$ctrl.settings.enabled}}\"> <span translate=\"INTEGRATIONS_SETUP.TEAMGO.PASSWORD\"></span> </ff-label> <ff-password ff-model=\"$ctrl.settings.password\" ff-change=\"$ctrl.save(form)\" ff-required=\"$ctrl.settings.enabled\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.TEAMGO.PASSWORD' | translate}}\"></ff-password> </label> </form> </ff-panel> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=teamgo~._bundles_teamgo .js.map?_rev=6a5d552d089bfddd72ff