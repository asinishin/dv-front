(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kisi~._bundles_kisi "],{

/***/ "./bundles/kisi sync recursive .*\\.tpl\\.html$":
/*!******************************************!*\
  !*** ./bundles/kisi sync .*\.tpl\.html$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-group/kisi-access-group.tpl.html": "./bundles/kisi/access-group/kisi-access-group.tpl.html",
	"./settings/kisi-settings.tpl.html": "./bundles/kisi/settings/kisi-settings.tpl.html"
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
webpackContext.id = "./bundles/kisi sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/kisi sync recursive \\..+\\/.+\\.js$":
/*!*****************************************!*\
  !*** ./bundles/kisi sync \..+\/.+\.js$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-group/kisi-access-group.directive.js": "./bundles/kisi/access-group/kisi-access-group.directive.js",
	"./services/kisi-access-group.service.js": "./bundles/kisi/services/kisi-access-group.service.js",
	"./services/kisi-center.service.js": "./bundles/kisi/services/kisi-center.service.js",
	"./services/kisi-place.service.js": "./bundles/kisi/services/kisi-place.service.js",
	"./services/kisi-settings.service.js": "./bundles/kisi/services/kisi-settings.service.js",
	"./services/kisi-user.service.js": "./bundles/kisi/services/kisi-user.service.js",
	"./settings/kisi-settings.directive.js": "./bundles/kisi/settings/kisi-settings.directive.js"
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
webpackContext.id = "./bundles/kisi sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/kisi/access-group/kisi-access-group.directive.js":
/*!******************************************************************!*\
  !*** ./bundles/kisi/access-group/kisi-access-group.directive.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Product -> Kisi Access Group directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.kisiAccessGroupDirective', ['deskworks.KisiCenter', 'deskworks.KisiUser', 'deskworks.KisiAccessGroup']).directive('kisiAccessGroup', function () {
  var templateUrl = 'access-group/kisi-access-group.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'KisiAccessGroupCtrl as $ctrl',
    bindToController: {
      userId: '<',
      save: '='
    }
  };
}).controller('KisiAccessGroupCtrl', ["$q", "dwAlerts", "helper", "state", "KisiCenter", "KisiUser", "KisiAccessGroup", function ($q, dwAlerts, helper, state, KisiCenter, KisiUser, KisiAccessGroup) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };
  /**
   * Load data
   */


  $ctrl.load = function () {
    return KisiCenter.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query Kisi centers.');
    }).then(function (kisiCenters) {
      $ctrl.kisiCenter = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, kisiCenters, state.getCurrentCenterId());
      if (!$ctrl.kisiCenter || !$ctrl.kisiCenter.enabled) return;
      var promises = {};

      if ($ctrl.kisiCenter.kisiPlaceId) {
        promises.kisiGroups = KisiAccessGroup.query($ctrl.kisiCenter.kisiPlaceId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to query Kisi access groups.');
        });
      }

      if ($ctrl.userId && $ctrl.userId !== 'new' && !helper.isUid($ctrl.userId)) {
        promises.kisiUser = KisiUser.get(state.getCurrentCenterId(), $ctrl.userId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get Kisi user.');
        });
      }

      return $q.all(promises).then(function (result) {
        if (result.kisiUser) {
          $ctrl.kisiUser = result.kisiUser;
        } else {
          $ctrl.kisiUser = {
            kisiGroupId: $ctrl.kisiCenter.defaultKisiGroupId
          };
        }

        $ctrl.kisiGroups = result.kisiGroups; // expose save method only if have accessGroups and enabled

        if ($ctrl.kisiGroups && $ctrl.kisiGroups.length && $ctrl.kisiCenter.enabled) $ctrl.save = save;
      });
    });
  };
  /**
   * Save Kisi user
   */


  function save() {
    if (!$ctrl.kisiCenter.enabled) return;
    $ctrl.kisiUser.id = $ctrl.userId;
    return KisiUser.save(state.getCurrentCenterId(), $ctrl.kisiUser).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save Kisi user.');
    });
  }
}]));

/***/ }),

/***/ "./bundles/kisi/access-group/kisi-access-group.tpl.html":
/*!**************************************************************!*\
  !*** ./bundles/kisi/access-group/kisi-access-group.tpl.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label class=\"ff-row animate-collapse\" ng-if=\"$ctrl.kisiGroups.length && $ctrl.kisiCenter.enabled\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.MEMBERSHIP.KISI_ACCESS_GROUP\"></span></ff-label> <ff-select name=\"kisiGroupId\" ff-model=\"$ctrl.kisiUser.kisiGroupId\" ff-options=\"opt.id as opt.name for opt in $ctrl.kisiGroups\"> </ff-select> </label> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/kisi/index.js":
/*!*******************************!*\
  !*** ./bundles/kisi/index.js ***!
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

  var js = importAll(__webpack_require__("./bundles/kisi sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/kisi sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/kisi/services/kisi-access-group.service.js":
/*!************************************************************!*\
  !*** ./bundles/kisi/services/kisi-access-group.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.KisiAccessGroup', ['ngResource', 'deskworks.config']).factory('KisiAccessGroup', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/kisi/kisi-places/:placeId/kisi-groups'));
  return {
    query: function query(placeId) {
      return res.query({
        placeId: placeId
      }).$promise.then(function (groups) {
        groups.unshift({
          id: null,
          name: 'No Access'
        });
        return groups;
      });
    }
  };
}]));

/***/ }),

/***/ "./bundles/kisi/services/kisi-center.service.js":
/*!******************************************************!*\
  !*** ./bundles/kisi/services/kisi-center.service.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.KisiCenter', ['ngResource', 'deskworks.config']).factory('KisiCenter', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/kisi/centers/:centerId'), {}, {
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

/***/ "./bundles/kisi/services/kisi-place.service.js":
/*!*****************************************************!*\
  !*** ./bundles/kisi/services/kisi-place.service.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.KisiPlace', ['ngResource', 'deskworks.config']).factory('KisiPlace', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/kisi/kisi-places'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/kisi/services/kisi-settings.service.js":
/*!********************************************************!*\
  !*** ./bundles/kisi/services/kisi-settings.service.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.KisiSettings', ['ngResource', 'deskworks.config']).factory('KisiSettings', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/kisi/settings'), {}, {
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

/***/ "./bundles/kisi/services/kisi-user.service.js":
/*!****************************************************!*\
  !*** ./bundles/kisi/services/kisi-user.service.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.KisiUser', ['ngResource', 'deskworks.config']).factory('KisiUser', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/kisi/centers/:centerId/users/:userId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get(centerId, userId) {
      return res.get({
        centerId: centerId,
        userId: userId
      }).$promise;
    },
    save: function save(centerId, data) {
      return res.update({
        centerId: centerId,
        userId: data.id
      }, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/kisi/settings/kisi-settings.directive.js":
/*!**********************************************************!*\
  !*** ./bundles/kisi/settings/kisi-settings.directive.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Integrations Setup -> Kisi Settings directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.kisiSettingsDirective', ['debounce', 'deskworks.KisiSettings', 'deskworks.KisiCenter', 'deskworks.KisiPlace', 'deskworks.KisiAccessGroup', 'deskworks.center.service']).directive('kisiSettings', function () {
  var templateUrl = 'settings/kisi-settings.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'KisiSettingsCtrl as $ctrl'
  };
}).controller('KisiSettingsCtrl', ["dwAlerts", "$q", "debounce", "helper", "centerService", "KisiSettings", "KisiCenter", "KisiAccessGroup", "KisiPlace", function (dwAlerts, $q, debounce, helper, centerService, KisiSettings, KisiCenter, KisiAccessGroup, KisiPlace) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };
  /**
   * Load settings
   */


  $ctrl.load = function () {
    var promises = {
      kisiSettings: KisiSettings.get().catch(function (err) {
        return dwAlerts.error(err, 'Failed to load Kisi settings.');
      }),
      centers: centerService.getCenters().catch(function (err) {
        return dwAlerts.error(err, 'Failed to query centers.');
      }),
      kisiCenters: KisiCenter.query().catch(function (err) {
        return dwAlerts.error(err, 'Failed to query Kisi centers.');
      }),
      kisiPlaces: KisiPlace.query().catch(function (err) {
        return dwAlerts.error(err, 'Failed to query Kisi places.');
      })
    };
    $ctrl.spin = true;
    return $q.all(promises).then(function (result) {
      $ctrl.kisiSettings = result.kisiSettings;
      $ctrl.kisiCenters = result.kisiCenters;
      $ctrl.kisiPlaces = result.kisiPlaces;
      return result;
    }).finally(function () {
      $ctrl.spin = false;
    }).then(function (result) {
      var _context;

      var promises = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.kisiCenters).call(_context, function (kisiCenter) {
        kisiCenter.$$name = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, result.centers, kisiCenter.id) || {}).name;
        return loadKisiGroups(kisiCenter);
      });

      return $q.all(promises);
    });
  };
  /**
   * Save Kisi settings
   */


  $ctrl.saveSettings = debounce(saveSettings, 1000);

  function saveSettings(form) {
    if (form && form.$invalid) return;
    $ctrl.spin = true;
    return KisiSettings.save($ctrl.kisiSettings).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save Kisi settings.');
    }).finally(function () {
      $ctrl.spin = false;
    }).then(function () {
      delete $ctrl.kisiCenters;
      return $ctrl.load();
    });
  }
  /**
   * Save Kisi center
   */


  $ctrl.saveCenter = debounce(saveCenter, 500);

  function saveCenter(center, form) {
    if (form && form.$invalid) return;
    center.$$spin = true;
    return KisiCenter.save(center).finally(function () {
      center.$$spin = false;
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save Kisi center.');
    });
  }
  /**
   * Change Kisi Place handler
   */


  $ctrl.changePlace = function (center, form) {
    return loadKisiGroups(center).then(function () {
      return $ctrl.saveCenter(center, form);
    });
  };

  function loadKisiGroups(center) {
    center.$$kisiGroups = null;
    if (!center.kisiPlaceId) return $q.when(null);
    center.$$spin = true;
    return KisiAccessGroup.query(center.kisiPlaceId).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query Kisi access groups.');
    }).then(function (kisiGroups) {
      center.$$kisiGroups = kisiGroups;
      return kisiGroups;
    }).finally(function () {
      center.$$spin = false;
    });
  }
}]));

/***/ }),

/***/ "./bundles/kisi/settings/kisi-settings.tpl.html":
/*!******************************************************!*\
  !*** ./bundles/kisi/settings/kisi-settings.tpl.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header ff-spin=\"$ctrl.spin\" class=\"ff-spin-right\"> <span translate=\"INTEGRATIONS_SETUP.KISI.HEADER\"></span> </ff-panel-header> <form name=\"form\" novalidate ff-dim=\"$ctrl.spin\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\"><req translate=\"INTEGRATIONS_SETUP.API_KEY\"></req></ff-label> <ff-text ff-model=\"$ctrl.kisiSettings.apiKey\" ff-change=\"$ctrl.saveSettings(form)\" ff-required=\"true\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.API_KEY' | translate}}\"></ff-text> </label> </form> <form name=\"form\" novalidate ng-repeat=\"center in $ctrl.kisiCenters\" class=\"animate-collapse\"> <ff-header ff-dim=\"center.$$spin\" style=\"padding-top:.6rem\"><cell>{{center.$$name}}</cell></ff-header> <label class=\"ff-row\"> <ff-label flex=\"1 1 270px\"><span translate=\"INTEGRATIONS_SETUP.ENABLED\"></span></ff-label> <ff-static flex=\"1 1 305px\"> <ff-checkbox name=\"enabled\" ff-model=\"center.enabled\" ff-change=\"$ctrl.saveCenter(center, form)\"></ff-checkbox> </ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"1 1 270px\"><req translate=\"INTEGRATIONS_SETUP.KISI.PLACE\"></req></ff-label> <ff-select flex=\"1 1 305px\" name=\"kisiPlaceId\" ff-model=\"center.kisiPlaceId\" ff-required=\"true\" ff-options=\"place.id as place.name for place in $ctrl.kisiPlaces\" ff-change=\"$ctrl.changePlace(center, form)\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.KISI.PLACE' | translate}}\"></ff-select> </label> <ff-row ff-dim=\"center.$$spin && !center.$$kisiGroups\"> <label> <ff-label flex=\"1 1 270px\"><req translate=\"INTEGRATIONS_SETUP.KISI.DEFAULT_ACCESS_GROUP\"></req></ff-label> <ff-select flex=\"1 1 305px\" name=\"defaultKisiGroupId\" ff-model=\"center.defaultKisiGroupId\" ff-options=\"group.id as group.name for group in center.$$kisiGroups\" ff-change=\"$ctrl.saveCenter(center, form)\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.KISI.DEFAULT_ACCESS_GROUP' | translate}}\"></ff-select> </label> </ff-row> </form> </ff-panel> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=kisi~._bundles_kisi .js.map?_rev=138ea3bee75dc5e97e76