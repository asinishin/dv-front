(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doorflow~._bundles_doorflow "],{

/***/ "./bundles/doorflow sync recursive .*\\.tpl\\.html$":
/*!**********************************************!*\
  !*** ./bundles/doorflow sync .*\.tpl\.html$ ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-group/doorflow-access-group.tpl.html": "./bundles/doorflow/access-group/doorflow-access-group.tpl.html",
	"./settings/doorflow-settings.tpl.html": "./bundles/doorflow/settings/doorflow-settings.tpl.html",
	"./user-access/doorflow-user-access.tpl.html": "./bundles/doorflow/user-access/doorflow-user-access.tpl.html"
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
webpackContext.id = "./bundles/doorflow sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/doorflow sync recursive \\..+\\/.+\\.js$":
/*!*********************************************!*\
  !*** ./bundles/doorflow sync \..+\/.+\.js$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-group/doorflow-access-group.directive.js": "./bundles/doorflow/access-group/doorflow-access-group.directive.js",
	"./services/doorflow-access-group.service.js": "./bundles/doorflow/services/doorflow-access-group.service.js",
	"./services/doorflow-center.service.js": "./bundles/doorflow/services/doorflow-center.service.js",
	"./services/doorflow-product.service.js": "./bundles/doorflow/services/doorflow-product.service.js",
	"./services/doorflow-settings.service.js": "./bundles/doorflow/services/doorflow-settings.service.js",
	"./services/doorflow-site.service.js": "./bundles/doorflow/services/doorflow-site.service.js",
	"./services/doorflow-user.service.js": "./bundles/doorflow/services/doorflow-user.service.js",
	"./settings/doorflow-settings.directive.js": "./bundles/doorflow/settings/doorflow-settings.directive.js",
	"./user-access/doorflow-user-access.directive.js": "./bundles/doorflow/user-access/doorflow-user-access.directive.js"
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
webpackContext.id = "./bundles/doorflow sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/doorflow/access-group/doorflow-access-group.directive.js":
/*!**************************************************************************!*\
  !*** ./bundles/doorflow/access-group/doorflow-access-group.directive.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Product -> Doorflow Access Group directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.doorflowAccessGroupDirective', ['deskworks.DoorflowAccessGroup', 'deskworks.DoorflowCenter', 'deskworks.DoorflowProduct']).directive('doorflowAccessGroup', ["$compile", "$templateCache", function ($compile, $templateCache) {
  var templateUrl = 'doorflow/doorflow-access-group.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'DoorflowAccessGroupCtrl as $ctrl',
    bindToController: {
      save: '=',
      productId: '<'
    }
  };
}]).controller('DoorflowAccessGroupCtrl', ["$q", "dwAlerts", "helper", "state", "DoorflowAccessGroup", "DoorflowCenter", "DoorflowProduct", function ($q, dwAlerts, helper, state, DoorflowAccessGroup, DoorflowCenter, DoorflowProduct) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };
  /**
   * Load data
   */


  $ctrl.load = function () {
    var promises = {
      centers: DoorflowCenter.query().catch(function (err) {
        return dwAlerts.error(err, 'Failed to query Doorflow centers.');
      }),
      product: DoorflowProduct.get(state.getCurrentCenterId(), $ctrl.productId).catch(function (err) {
        return dwAlerts.error(err, 'Failed to load Doorflow product.');
      })
    };
    return $q.all(promises).then(function (result) {
      $ctrl.product = result.product;

      var center = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, result.centers, state.getCurrentCenterId());

      if (center && center.enabled) {
        return DoorflowAccessGroup.query(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to query QuickBooks income accounts.');
        }).then(function (groups) {
          $ctrl.groups = groups;
          if ($ctrl.groups && $ctrl.groups.length) $ctrl.save = save; // expose save method only if have accounts
        });
      }
    });
  };
  /**
   * Save settings
   */


  function save() {
    return DoorflowProduct.save(state.getCurrentCenterId(), $ctrl.productId, $ctrl.product).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save Doorflow product.');
    });
  }
}]));

/***/ }),

/***/ "./bundles/doorflow/access-group/doorflow-access-group.tpl.html":
/*!**********************************************************************!*\
  !*** ./bundles/doorflow/access-group/doorflow-access-group.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label class=\"ff-row animate-collapse\" ng-if=\"$ctrl.groups.length\"> <ff-label flex=\"0 0 102px\" class=\"ff-small\"><span translate=\"PRODUCTS.DOORFLOW_GROUP\"></span></ff-label> <ff-select name=\"doorflowGroup\" ff-model=\"$ctrl.product.doorflowGroupId\" ff-options=\"opt.id as opt.name for opt in $ctrl.groups\"> <option value=\"\">-</option> </ff-select> </label> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/doorflow/index.js":
/*!***********************************!*\
  !*** ./bundles/doorflow/index.js ***!
  \***********************************/
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

  var js = importAll(__webpack_require__("./bundles/doorflow sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/doorflow sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/doorflow/services/doorflow-access-group.service.js":
/*!********************************************************************!*\
  !*** ./bundles/doorflow/services/doorflow-access-group.service.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.DoorflowAccessGroup', ['ngResource', 'deskworks.config']).factory('DoorflowAccessGroup', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/doorflow/centers/:centerId/doorflow-groups'));
  return {
    query: function query(centerId) {
      return res.query({
        centerId: centerId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/doorflow/services/doorflow-center.service.js":
/*!**************************************************************!*\
  !*** ./bundles/doorflow/services/doorflow-center.service.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.DoorflowCenter', ['ngResource', 'deskworks.config']).factory('DoorflowCenter', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/doorflow/centers/:centerId'), {}, {
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

/***/ "./bundles/doorflow/services/doorflow-product.service.js":
/*!***************************************************************!*\
  !*** ./bundles/doorflow/services/doorflow-product.service.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.DoorflowProduct', ['ngResource', 'deskworks.config']).factory('DoorflowProduct', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/doorflow/centers/:centerId/products/:productId'), {}, {
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

/***/ "./bundles/doorflow/services/doorflow-settings.service.js":
/*!****************************************************************!*\
  !*** ./bundles/doorflow/services/doorflow-settings.service.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.DoorflowSettings', ['ngResource', 'deskworks.config']).factory('DoorflowSettings', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/doorflow/settings'), {}, {
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

/***/ "./bundles/doorflow/services/doorflow-site.service.js":
/*!************************************************************!*\
  !*** ./bundles/doorflow/services/doorflow-site.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.DoorflowSite', ['ngResource', 'deskworks.config']).factory('DoorflowSite', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/doorflow/doorflow-sites'), {}, {
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

/***/ "./bundles/doorflow/services/doorflow-user.service.js":
/*!************************************************************!*\
  !*** ./bundles/doorflow/services/doorflow-user.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.DoorflowUser', ['ngResource', 'deskworks.config']).factory('DoorflowUser', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/doorflow/centers/:centerId/users/:userId'), {}, {
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

/***/ "./bundles/doorflow/settings/doorflow-settings.directive.js":
/*!******************************************************************!*\
  !*** ./bundles/doorflow/settings/doorflow-settings.directive.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Integrations Setup -> DoorFlow Settings directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.doorflowSettingsDirective', ['debounce', 'deskworks.DoorflowSettings', 'deskworks.DoorflowCenter', 'deskworks.DoorflowSite', 'deskworks.DoorflowAccessGroup', 'deskworks.center.service']).directive('doorflowSettings', function () {
  var templateUrl = 'settings/doorflow-settings.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'DoorflowSettingsCtrl as $ctrl'
  };
}).controller('DoorflowSettingsCtrl', ["dwAlerts", "$q", "debounce", "helper", "centerService", "DoorflowSettings", "DoorflowCenter", "DoorflowAccessGroup", "DoorflowSite", function (dwAlerts, $q, debounce, helper, centerService, DoorflowSettings, DoorflowCenter, DoorflowAccessGroup, DoorflowSite) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };
  /**
   * Load settings
   */


  $ctrl.load = function () {
    var promises = {
      doorflowSettings: DoorflowSettings.get().catch(function (err) {
        return dwAlerts.error(err, 'Failed to load DoorFlow settings.');
      }),
      centers: centerService.getCenters().catch(function (err) {
        return dwAlerts.error(err, 'Failed to query centers.');
      }),
      doorflowCenters: DoorflowCenter.query().catch(function (err) {
        return dwAlerts.error(err, 'Failed to query DoorFlow centers.');
      }),
      doorflowSites: DoorflowSite.query().catch(function (err) {
        return dwAlerts.error(err, 'Failed to query DoorFlow sites.');
      })
    };
    $ctrl.spin = true;
    return $q.all(promises).then(function (result) {
      $ctrl.doorflowSettings = result.doorflowSettings;
      $ctrl.doorflowCenters = result.doorflowCenters;
      $ctrl.doorflowSites = result.doorflowSites;
      return result;
    }).finally(function () {
      $ctrl.spin = false;
    });
  };
  /**
   * Save DoorFlow settings
   */


  $ctrl.saveSettings = debounce(saveSettings, 1000);

  function saveSettings(form) {
    if (form && form.$invalid) return;
    $ctrl.spin = true;
    return DoorflowSettings.save($ctrl.doorflowSettings).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save DoorFlow settings.');
    }).finally(function () {
      $ctrl.spin = false;
    }).then(function () {
      delete $ctrl.doorflowCenters;
      return $ctrl.load();
    });
  }
  /**
   * Save DoorFlow center
   */


  $ctrl.saveCenter = debounce(saveCenter, 500);

  function saveCenter(center, form) {
    if (form && form.$invalid) return;
    center.$$spin = true;
    return DoorflowCenter.save(center).finally(function () {
      center.$$spin = false;
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save DoorFlow center.');
    });
  }
  /**
   * Change DoorFlow Site handler
   */


  $ctrl.changeSite = function (center, form) {
    return $ctrl.saveCenter(center, form);
  };
}]));

/***/ }),

/***/ "./bundles/doorflow/settings/doorflow-settings.tpl.html":
/*!**************************************************************!*\
  !*** ./bundles/doorflow/settings/doorflow-settings.tpl.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header ff-spin=\"$ctrl.spin\" class=\"ff-spin-right\"> <span translate=\"INTEGRATIONS_SETUP.DOORFLOW.HEADER\"></span> </ff-panel-header> <form name=\"form\" novalidate ff-dim=\"$ctrl.spin\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\"><req translate=\"INTEGRATIONS_SETUP.API_KEY\"></req></ff-label> <ff-text ff-model=\"$ctrl.doorflowSettings.apiKey\" ff-change=\"$ctrl.saveSettings(form)\" ff-required=\"true\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.API_KEY' | translate}}\"></ff-text> </label> </form> <form name=\"form\" novalidate ng-repeat=\"center in $ctrl.doorflowCenters\" class=\"animate-collapse\"> <ff-header ff-dim=\"center.$$spin\" style=\"padding-top:.6rem\"><cell>{{center.$$name}}</cell></ff-header> <label class=\"ff-row\"> <ff-label flex=\"1 1 270px\"><span translate=\"INTEGRATIONS_SETUP.ENABLED\"></span></ff-label> <ff-static flex=\"1 1 305px\"> <ff-checkbox name=\"enabled\" ff-model=\"center.enabled\" ff-change=\"$ctrl.saveCenter(center, form)\"></ff-checkbox> </ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"1 1 270px\"><req translate=\"INTEGRATIONS_SETUP.DOORFLOW.SITE\"></req></ff-label> <ff-select flex=\"1 1 305px\" name=\"doorflowSiteId\" ff-model=\"center.doorflowSiteId\" ff-required=\"true\" ff-options=\"site.id as site.name for site in $ctrl.doorflowSites\" ff-change=\"$ctrl.changeSite(center, form)\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.DOORFLOW.SITE' | translate}}\"></ff-select> </label> </form> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/doorflow/user-access/doorflow-user-access.directive.js":
/*!************************************************************************!*\
  !*** ./bundles/doorflow/user-access/doorflow-user-access.directive.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Member -> DoorFlow User Access directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.doorflowUserAccessDirective', ['deskworks.DoorflowCenter', 'deskworks.DoorflowUser']).directive('doorflowUserAccess', function () {
  var templateUrl = 'user-access/doorflow-user-access.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'DoorflowUserAccessCtrl as $ctrl',
    bindToController: {
      userId: '<',
      save: '='
    }
  };
}).controller('DoorflowUserAccessCtrl', ["$q", "dwAlerts", "helper", "state", "DoorflowCenter", "DoorflowUser", function ($q, dwAlerts, helper, state, DoorflowCenter, DoorflowUser) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };
  /**
   * Load data
   */


  $ctrl.load = function () {
    return DoorflowCenter.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query DoorFlow centers.');
    }).then(function (doorflowCenters) {
      $ctrl.doorflowCenter = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, doorflowCenters, state.getCurrentCenterId());
      if (!$ctrl.doorflowCenter || !$ctrl.doorflowCenter.enabled) return;
      var promises = {};

      if ($ctrl.userId && $ctrl.userId !== 'new' && !helper.isUid($ctrl.userId)) {
        promises.doorflowUser = DoorflowUser.get(state.getCurrentCenterId(), $ctrl.userId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get DoorFlow user.');
        });
      }

      return $q.all(promises).then(function (result) {
        if (result.doorflowUser) {
          $ctrl.doorflowUser = result.doorflowUser;
        } else {
          $ctrl.doorflowUser = {
            doorflowEnabled: false
          };
        }

        $ctrl.save = save;
      });
    });
  };
  /**
   * Save DoorFlow user
   */


  function save() {
    if (!$ctrl.doorflowCenter.enabled) return;
    $ctrl.doorflowUser.id = $ctrl.userId;
    return DoorflowUser.save(state.getCurrentCenterId(), $ctrl.doorflowUser).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save DoorFlow user.');
    });
  }
}]));

/***/ }),

/***/ "./bundles/doorflow/user-access/doorflow-user-access.tpl.html":
/*!********************************************************************!*\
  !*** ./bundles/doorflow/user-access/doorflow-user-access.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label class=\"ff-row animate-collapse\" ng-if=\"$ctrl.doorflowCenter.enabled\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.MEMBERSHIP.DOORFLOW_ACCESS\"></span></ff-label> <ff-checkbox name=\"doorflowEnabled\" ff-model=\"$ctrl.doorflowUser.doorflowEnabled\"> <span translate=\"USER_PROFILE.MEMBERSHIP.DOORFLOW_ACCESS_DESCRIPTION\"></span> </ff-checkbox> </label> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=doorflow~._bundles_doorflow .js.map?_rev=360980d485443040176b