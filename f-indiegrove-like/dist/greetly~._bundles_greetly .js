(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["greetly~._bundles_greetly "],{

/***/ "./bundles/greetly sync recursive .*\\.tpl\\.html$":
/*!*********************************************!*\
  !*** ./bundles/greetly sync .*\.tpl\.html$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./settings/greetly-settings.tpl.html": "./bundles/greetly/settings/greetly-settings.tpl.html"
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
webpackContext.id = "./bundles/greetly sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/greetly sync recursive \\..+\\/.+\\.js$":
/*!********************************************!*\
  !*** ./bundles/greetly sync \..+\/.+\.js$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./services/greetly-center.service.js": "./bundles/greetly/services/greetly-center.service.js",
	"./services/greetly-locations.service.js": "./bundles/greetly/services/greetly-locations.service.js",
	"./services/greetly-settings.service.js": "./bundles/greetly/services/greetly-settings.service.js",
	"./settings/greetly-settings.directive.js": "./bundles/greetly/settings/greetly-settings.directive.js"
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
webpackContext.id = "./bundles/greetly sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/greetly/index.js":
/*!**********************************!*\
  !*** ./bundles/greetly/index.js ***!
  \**********************************/
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

  var js = importAll(__webpack_require__("./bundles/greetly sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/greetly sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/greetly/services/greetly-center.service.js":
/*!************************************************************!*\
  !*** ./bundles/greetly/services/greetly-center.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.GreetlyCenter', ['ngResource', 'deskworks.config']).factory('GreetlyCenter', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/greetly/centers/:centerId'), {}, {
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

/***/ "./bundles/greetly/services/greetly-locations.service.js":
/*!***************************************************************!*\
  !*** ./bundles/greetly/services/greetly-locations.service.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.GreetlyLocation', ['ngResource', 'deskworks.config']).factory('GreetlyLocation', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/greetly/greetly-locations'));
  return {
    query: function query() {
      return res.query().$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/greetly/services/greetly-settings.service.js":
/*!**************************************************************!*\
  !*** ./bundles/greetly/services/greetly-settings.service.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.GreetlySettings', ['ngResource', 'deskworks.config']).factory('GreetlySettings', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/greetly/settings'), {}, {
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

/***/ "./bundles/greetly/settings/greetly-settings.directive.js":
/*!****************************************************************!*\
  !*** ./bundles/greetly/settings/greetly-settings.directive.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Integrations Setup -> Greetly Settings directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.greetlySettingsDirective', ['debounce', 'deskworks.GreetlySettings', 'deskworks.GreetlyCenter', 'deskworks.GreetlyLocation']).directive('greetlySettings', function () {
  var templateUrl = 'settings/greetly-settings.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'GreetlySettingsCtrl as $ctrl'
  };
}).controller('GreetlySettingsCtrl', ["$q", "dwAlerts", "debounce", "GreetlySettings", "GreetlyCenter", "GreetlyLocation", function ($q, dwAlerts, debounce, GreetlySettings, GreetlyCenter, GreetlyLocation) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $ctrl.spin = true;
    $ctrl.loadSettings().then(function (settings) {
      if (settings.apiKey) return $ctrl.loadGreetlyData();
    }).finally(function () {
      $ctrl.spin = false;
    });
  };
  /**
   * Load Greetly settings
   */


  $ctrl.loadSettings = function () {
    return GreetlySettings.get().catch(function (err) {
      return dwAlerts.error(err, 'Failed to load Greetly settings.');
    }).then(function (settings) {
      $ctrl.settings = settings;
      return settings;
    });
  };
  /**
   * Load Greetly data: centers and locations
   */


  $ctrl.loadGreetlyData = function () {
    var promises = [GreetlyCenter.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query Greetly centers.');
    }).then(function (centers) {
      $ctrl.centers = centers;
    }), GreetlyLocation.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query Greetly locations.');
    }).then(function (locations) {
      $ctrl.locations = locations;
    })];
    return $q.all(promises);
  };
  /**
   * Save center
   */


  $ctrl.saveCenter = debounce(saveCenter, 1000);

  function saveCenter(center, form) {
    if (form.$invalid) return;
    $ctrl.spin = true;
    return GreetlyCenter.save(center).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save Greetly center.');
    }).finally(function () {
      $ctrl.spin = false;
    });
  }
  /**
   * Save Greetly settings
   */


  $ctrl.saveSettings = debounce(saveSettings, 1000);

  function saveSettings(form) {
    if (form.$invalid) return;
    $ctrl.spin = true;
    return GreetlySettings.save($ctrl.settings).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save Greetly settings.');
    }).then(function () {
      if ($ctrl.settings.apiKey) {
        return $ctrl.loadGreetlyData();
      } else {
        $ctrl.centers = null;
        $ctrl.locations = null;
      }
    }).finally(function () {
      $ctrl.spin = false;
    });
  }
}]));

/***/ }),

/***/ "./bundles/greetly/settings/greetly-settings.tpl.html":
/*!************************************************************!*\
  !*** ./bundles/greetly/settings/greetly-settings.tpl.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header ff-spin=\"$ctrl.spin\" class=\"ff-spin-right\"> <span translate=\"INTEGRATIONS_SETUP.GREETLY.HEADER\"></span> </ff-panel-header> <form name=\"form\" novalidate> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\"><span translate=\"INTEGRATIONS_SETUP.API_KEY\"></span></ff-label> <ff-text ff-model=\"$ctrl.settings.apiKey\" ff-change=\"$ctrl.saveSettings(form)\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.API_KEY' | translate}}\"></ff-text> </label> </form> <ff-header style=\"padding-top:.6rem\" ng-if=\"$ctrl.centers\"> <ff-row> <cell flex=\"0 0 50%\"><span translate=\"INTEGRATIONS_SETUP.GREETLY.CENTER\"></span></cell> <cell flex=\"0 0 50%\"><span translate=\"INTEGRATIONS_SETUP.GREETLY.LOCATION\"></span></cell> </ff-row> </ff-header> <div ng-repeat=\"center in $ctrl.centers\"> <form name=\"form\" novalidate> <ff-row> <ff-static flex=\"0 0 50%\"> <ff-row> <label> <ff-checkbox name=\"enabled\" ff-model=\"center.enabled\" ff-change=\"$ctrl.saveCenter(center, form)\"> <span style=\"vertical-align:initial\">{{center.name}}</span> </ff-checkbox> </label> </ff-row> </ff-static> <ff-select flex=\"0 0 50%\" name=\"greetlyLocationId\" ff-model=\"center.greetlyLocationId\" ff-required=\"true\" ff-options=\"location.id as location.name for location in $ctrl.locations\" ff-change=\"$ctrl.saveCenter(center, form)\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.GREETLY.LOCATION' | translate}}\"></ff-select> </ff-row> <ff-static ng-if=\"center.enabled\"> <ff-col> <label> <ff-checkbox name=\"notificationByEmail\" ff-model=\"center.notificationByEmail\" ff-change=\"$ctrl.saveCenter(center, form)\"> <span translate=\"INTEGRATIONS_SETUP.GREETLY.NOTIFICATION.BY_EMAIL\"></span> </ff-checkbox> </label> <label> <ff-checkbox name=\"notificationBySlack\" ff-model=\"center.notificationBySlack\" ff-change=\"$ctrl.saveCenter(center, form)\"> <span translate=\"INTEGRATIONS_SETUP.GREETLY.NOTIFICATION.BY_SLACK\"></span> </ff-checkbox> </label> <label> <ff-checkbox name=\"notificationBySms\" ff-model=\"center.notificationBySms\" ff-change=\"$ctrl.saveCenter(center, form)\"> <span translate=\"INTEGRATIONS_SETUP.GREETLY.NOTIFICATION.BY_SMS\"></span> </ff-checkbox> </label> <label> <ff-checkbox name=\"notificationByVoice\" ff-model=\"center.notificationByVoice\" ff-change=\"$ctrl.saveCenter(center, form)\"> <span translate=\"INTEGRATIONS_SETUP.GREETLY.NOTIFICATION.BY_VOICE\"></span> </ff-checkbox> </label> </ff-col> </ff-static> </form> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=greetly~._bundles_greetly .js.map?_rev=83c0663cf720b20212b7