(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nexkey~._bundles_nexkey "],{

/***/ "./bundles/nexkey sync recursive .*\\.tpl\\.html$":
/*!********************************************!*\
  !*** ./bundles/nexkey sync .*\.tpl\.html$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./locks/nexkey-locks.tpl.html": "./bundles/nexkey/locks/nexkey-locks.tpl.html",
	"./settings/nexkey-settings.tpl.html": "./bundles/nexkey/settings/nexkey-settings.tpl.html"
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
webpackContext.id = "./bundles/nexkey sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/nexkey sync recursive \\..+\\/.+\\.js$":
/*!*******************************************!*\
  !*** ./bundles/nexkey sync \..+\/.+\.js$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./locks/nexkey-locks.directive.js": "./bundles/nexkey/locks/nexkey-locks.directive.js",
	"./services/nexkey-center.service.js": "./bundles/nexkey/services/nexkey-center.service.js",
	"./services/nexkey-unit.service.js": "./bundles/nexkey/services/nexkey-unit.service.js",
	"./settings/nexkey-settings.directive.js": "./bundles/nexkey/settings/nexkey-settings.directive.js"
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
webpackContext.id = "./bundles/nexkey sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/nexkey/index.js":
/*!*********************************!*\
  !*** ./bundles/nexkey/index.js ***!
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

  var js = importAll(__webpack_require__("./bundles/nexkey sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/nexkey sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/nexkey/locks/nexkey-locks.directive.js":
/*!********************************************************!*\
  !*** ./bundles/nexkey/locks/nexkey-locks.directive.js ***!
  \********************************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/trim */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_11__);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default()(source, key)); }); } } return target; }





/**
 * Nexkey locks directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.nexkeyLocksDirective', ['deskworks.NexkeyCenter', 'deskworks.NexkeyUnit']).directive('nexkeyLocks', function () {
  var templateUrl = 'locks/nexkey-locks.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'NexkeyLocksCtrl as $ctrl',
    bindToController: {
      centerId: '<?',
      unitId: '<?',
      save: '='
    }
  };
}).controller('NexkeyLocksCtrl', ["$q", "dwAlerts", "helper", "state", "NexkeyCenter", "NexkeyUnit", function ($q, dwAlerts, helper, state, NexkeyCenter, NexkeyUnit) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
    $ctrl.save = save;
  };
  /**
   * Load settings
   */


  $ctrl.load = function () {
    var promises = [NexkeyCenter.get({
      id: $ctrl.centerId
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get Nexkey center.');
    })];

    if ($ctrl.unitId) {
      promises.push(NexkeyUnit.get({
        id: $ctrl.unitId
      }).catch(function (err) {
        return dwAlerts.error(err, 'Failed to get Nexkey unit.');
      }));
    }

    return $q.all(promises).then(function (results) {
      $ctrl.center = results[0];
      $ctrl.unit = results[1];
      $ctrl.settings = $ctrl.unit || $ctrl.center;
      $ctrl.settings.lockIds = $ctrl.settings.lockIds.join(', ');
    });
  };
  /**
   * Save settings
   */


  function save() {
    var _context2;

    if ($ctrl.unitId) {
      var _context;

      var unit = _objectSpread(_objectSpread({}, $ctrl.unit), {}, {
        lockIds: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7___default()(_context = $ctrl.unit.lockIds.split(',')).call(_context, function (v) {
          return _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_8___default()(v).call(v);
        })
      });

      return NexkeyUnit.save(unit).catch(function (err) {
        return dwAlerts.error(err, 'Failed to save Nexkey unit.');
      });
    }

    var center = _objectSpread(_objectSpread({}, $ctrl.center), {}, {
      lockIds: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_7___default()(_context2 = $ctrl.center.lockIds.split(',')).call(_context2, function (v) {
        return _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_8___default()(v).call(v);
      })
    });

    return NexkeyCenter.save(center).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save Nexkey center.');
    });
  }
}]));

/***/ }),

/***/ "./bundles/nexkey/locks/nexkey-locks.tpl.html":
/*!****************************************************!*\
  !*** ./bundles/nexkey/locks/nexkey-locks.tpl.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label class=\"ff-row animate-collapse\" ng-if=\"$ctrl.center.enabled\"> <ff-label flex=\"0 1 170px\"> <span> <span translate=\"NEXKEY.LOCKS\"></span> <ff-hint><span translate=\"NEXKEY.LOCKS.HINT\"></span></ff-hint> </span> </ff-label> <ff-text name=\"lockIds\" ff-model=\"$ctrl.settings.lockIds\"></ff-text> </label> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/nexkey/services/nexkey-center.service.js":
/*!**********************************************************!*\
  !*** ./bundles/nexkey/services/nexkey-center.service.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.NexkeyCenter', ['ngResource', 'deskworks.config']).factory('NexkeyCenter', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/nexkey/centers/:id'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query({}).$promise;
    },
    get: function get(params) {
      return res.get(params).$promise;
    },
    save: function save(center) {
      return res.update({
        id: center.id
      }, center).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/nexkey/services/nexkey-unit.service.js":
/*!********************************************************!*\
  !*** ./bundles/nexkey/services/nexkey-unit.service.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.NexkeyUnit', ['ngResource', 'deskworks.config']).factory('NexkeyUnit', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/nexkey/units/:id'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get(params) {
      return res.get(params).$promise;
    },
    save: function save(unit) {
      return res.update({
        id: unit.id
      }, unit).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/nexkey/settings/nexkey-settings.directive.js":
/*!**************************************************************!*\
  !*** ./bundles/nexkey/settings/nexkey-settings.directive.js ***!
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
 * Integrations Setup -> Nexkey Settings directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.nexkeySettingsDirective', ['debounce', 'deskworks.center.service', 'deskworks.NexkeyCenter']).directive('nexkeySettings', function () {
  var templateUrl = 'settings/nexkey-settings.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'NexkeySettingsCtrl as $ctrl'
  };
}).controller('NexkeySettingsCtrl', ["$q", "debounce", "dwAlerts", "helper", "state", "NexkeyCenter", function ($q, debounce, dwAlerts, helper, state, NexkeyCenter) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };
  /**
   * Load settings
   */


  $ctrl.load = function () {
    $ctrl.spin = true;
    return NexkeyCenter.query().then(function (result) {
      $ctrl.nexkeyCenters = result;
      return result;
    }).finally(function () {
      $ctrl.spin = false;
    });
  };
  /**
   * Save center
   */


  $ctrl.saveCenter = debounce(saveCenter, 500);

  function saveCenter(center, form) {
    if (form && form.$invalid) return;
    center.$$spin = true;
    return NexkeyCenter.save(center).finally(function () {
      center.$$spin = false;
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save Nexkey center.');
    });
  }
}]));

/***/ }),

/***/ "./bundles/nexkey/settings/nexkey-settings.tpl.html":
/*!**********************************************************!*\
  !*** ./bundles/nexkey/settings/nexkey-settings.tpl.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header> <span translate=\"INTEGRATIONS_SETUP.NEXKEY.HEADER\"></span> </ff-panel-header> <ff-spin class=\"ff-spin-placeholder\" ng-if=\"$ctrl.spin\"></ff-spin> <form name=\"form\" novalidate ng-repeat=\"center in $ctrl.nexkeyCenters\" class=\"animate-collapse\"> <ff-header ng-style=\"{ 'padding-top': $index ? '.5rem' : '0' }\"> <ff-row> <cell>{{::center.name}}</cell> <ff-spin flex=\"0 0 16px\" class=\"ff-spin-sm\" ng-if=\"center.$$spin\"></ff-spin> </ff-row> </ff-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><span translate=\"INTEGRATIONS_SETUP.ENABLED\"></span></ff-label> <ff-static> <ff-checkbox name=\"enabled\" ff-model=\"center.enabled\" ff-change=\"$ctrl.saveCenter(center, form)\"></ff-checkbox> </ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><span ng-class=\"{ req: center.enabled }\" translate=\"INTEGRATIONS_SETUP.API_KEY\"></span></ff-label> <ff-text ff-model=\"center.apiKey\" ff-change=\"$ctrl.saveCenter(center, form)\" ff-required=\"center.enabled\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.API_KEY' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><span ng-class=\"{ req: center.enabled }\" translate=\"INTEGRATIONS_SETUP.API_SECRET\"></span></ff-label> <ff-text ff-model=\"center.apiSecret\" ff-change=\"$ctrl.saveCenter(center, form)\" ff-required=\"center.enabled\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.API_SECRET' | translate}}\"></ff-text> </label> </form> </ff-panel> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=nexkey~._bundles_nexkey .js.map?_rev=6887d8e8db17803a4ad0