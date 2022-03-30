(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ezeep~._bundles_ezeep "],{

/***/ "./bundles/ezeep sync recursive .*\\.tpl\\.html$":
/*!*******************************************!*\
  !*** ./bundles/ezeep sync .*\.tpl\.html$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./errors/ezeep-errors.tpl.html": "./bundles/ezeep/errors/ezeep-errors.tpl.html",
	"./group/ezeep-group.tpl.html": "./bundles/ezeep/group/ezeep-group.tpl.html",
	"./settings/ezeep-settings.tpl.html": "./bundles/ezeep/settings/ezeep-settings.tpl.html"
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
webpackContext.id = "./bundles/ezeep sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/ezeep sync recursive \\..+\\/.+\\.js$":
/*!******************************************!*\
  !*** ./bundles/ezeep sync \..+\/.+\.js$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./errors/ezeep-errors.controller.js": "./bundles/ezeep/errors/ezeep-errors.controller.js",
	"./errors/ezeep-errors.service.js": "./bundles/ezeep/errors/ezeep-errors.service.js",
	"./group/ezeep-group.directive.js": "./bundles/ezeep/group/ezeep-group.directive.js",
	"./services/ezeep-group.service.js": "./bundles/ezeep/services/ezeep-group.service.js",
	"./services/ezeep-settings.service.js": "./bundles/ezeep/services/ezeep-settings.service.js",
	"./services/ezeep-user.service.js": "./bundles/ezeep/services/ezeep-user.service.js",
	"./settings/ezeep-settings.directive.js": "./bundles/ezeep/settings/ezeep-settings.directive.js"
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
webpackContext.id = "./bundles/ezeep sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/ezeep/errors/ezeep-errors.controller.js":
/*!*********************************************************!*\
  !*** ./bundles/ezeep/errors/ezeep-errors.controller.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.EzeepErrorsCtrl', ['deskworks.dwAlerts', 'deskworks.EzeepErrors', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name]).controller('EzeepErrorsCtrl', ["$scope", "$translate", "state", "dwAlerts", "EzeepErrors", function ($scope, $translate, state, dwAlerts, EzeepErrors) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('EZEEP_ERRORS.PAGE_TITLE'));
  /**
   * Fetch log data from server
   */

  $ctrl.fetch = function (page) {
    $ctrl.fetching = true;
    return EzeepErrors.query(page || $ctrl.data && $ctrl.data.page || 1, 20).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query Ezeep errors.');
    }).then(function (result) {
      $ctrl.data = result;
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

/***/ "./bundles/ezeep/errors/ezeep-errors.service.js":
/*!******************************************************!*\
  !*** ./bundles/ezeep/errors/ezeep-errors.service.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.EzeepErrors', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('EzeepErrors', ["$resource", "deskworksConfig", "datesDeserializer", function ($resource, deskworksConfig, datesDeserializer) {
  var desDates = datesDeserializer(['errors.time']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/ezeep/errors'), {}, {
    query: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    query: function query(page, pageSize) {
      return res.query({
        page: page,
        pageSize: pageSize
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/ezeep/errors/ezeep-errors.tpl.html":
/*!****************************************************!*\
  !*** ./bundles/ezeep/errors/ezeep-errors.tpl.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"ezeepErrors\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel ff-dim=\"$ctrl.fetching && !$ctrl.data\"> <ff-header ng-if=\"$ctrl.data.errors.length\"> <ff-row> <cell flex=\"0 1 240px\"><span translate=\"EZEEP_ERRORS.TIME\"></span></cell> <cell flex=\"0 1 160px\" class=\"ff-center show-sm\"><span translate=\"EZEEP_ERRORS.DW_ID\"></span></cell> <cell flex=\"0 1 200px\"><span translate=\"EZEEP_ERRORS.EMAIL\"></span></cell> <cell flex=\"1 1 500px\"><span translate=\"EZEEP_ERRORS.ERROR_TEXT\"></span></cell> </ff-row> </ff-header> <span translate=\"GLOBAL.NONE\" ng-if=\"!$ctrl.data.errors.length && !$ctrl.fetching\"></span> <ff-row ng-repeat=\"error in $ctrl.data.errors\"> <ff-static flex=\"0 1 240px\"> <span>{{::error.time | date:'mediumDate'}} <span nice-time=\"::error.time\"></span></span> </ff-static> <ff-static flex=\"0 1 160px\" class=\"ff-center show-sm\">{{::error.dwId}}</ff-static> <ff-static flex=\"0 1 200px\">{{::error.email}}</ff-static> <ff-static flex=\"1 1 500px\">{{::error.errorText}}</ff-static> </ff-row> <ff-pagination props=\"$ctrl.data\" ff-click=\"$ctrl.fetch($page)\" ng-if=\"$ctrl.data.pageCount > 1\"></ff-pagination> </ff-panel> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/ezeep/group/ezeep-group.directive.js":
/*!******************************************************!*\
  !*** ./bundles/ezeep/group/ezeep-group.directive.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Product -> Ezeep Group directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ezeepGroupDirective', ['deskworks.EzeepUser', 'deskworks.EzeepGroup', 'deskworks.EzeepSettings']).directive('ezeepGroup', function () {
  var templateUrl = 'group/ezeep-group.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'EzeepGroupCtrl as $ctrl',
    bindToController: {
      userId: '<',
      save: '='
    }
  };
}).controller('EzeepGroupCtrl', ["$q", "dwAlerts", "helper", "state", "EzeepUser", "EzeepGroup", "EzeepSettings", function ($q, dwAlerts, helper, state, EzeepUser, EzeepGroup, EzeepSettings) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };
  /**
   * Load data
   */


  $ctrl.load = function () {
    return EzeepSettings.get().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query Ezeep settings.');
    }).then(function (ezeepSettings) {
      $ctrl.ezeepEnabled = ezeepSettings.enabled;
      var promises = {};

      if ($ctrl.ezeepEnabled) {
        promises.ezeepGroups = EzeepGroup.query().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query Ezeep groups.');
        });
      }

      if ($ctrl.userId && $ctrl.userId !== 'new' && !helper.isUid($ctrl.userId)) {
        promises.ezeepUser = EzeepUser.get($ctrl.userId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get Ezeep user.');
        });
      }

      return $q.all(promises).then(function (result) {
        if (result.ezeepUser) {
          $ctrl.ezeepUser = result.ezeepUser;
        } else {
          $ctrl.ezeepUser = {
            ezeepGroupId: ezeepSettings.defaultEzeepGroupId
          };
        }

        if ($ctrl.ezeepEnabled) {
          $ctrl.ezeepGroups = result.ezeepGroups;
        } else {
          $ctrl.ezeepGroups = [];
        } // expose save method only if have Groups and Ezeep enabled


        if ($ctrl.ezeepGroups && $ctrl.ezeepGroups.length && $ctrl.ezeepEnabled) $ctrl.save = save;
      });
    });
  };
  /**
   * Save Ezeep user
   */


  function save() {
    if (!$ctrl.ezeepEnabled) return;
    $ctrl.ezeepUser.id = $ctrl.userId;
    return EzeepUser.save($ctrl.ezeepUser).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save Ezeep user.');
    });
  }
}]));

/***/ }),

/***/ "./bundles/ezeep/group/ezeep-group.tpl.html":
/*!**************************************************!*\
  !*** ./bundles/ezeep/group/ezeep-group.tpl.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label class=\"ff-row animate-collapse\" ng-if=\"$ctrl.ezeepGroups.length && $ctrl.ezeepEnabled\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.MEMBERSHIP.EZEEP_GROUP\"></span></ff-label> <ff-select name=\"ezeepGroupId\" ff-model=\"$ctrl.ezeepUser.ezeepGroupId\" ff-options=\"opt.id as opt.name for opt in $ctrl.ezeepGroups\"> </ff-select> </label> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/ezeep/index.js":
/*!********************************!*\
  !*** ./bundles/ezeep/index.js ***!
  \********************************/
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

  var js = importAll(__webpack_require__("./bundles/ezeep sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/ezeep sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/ezeep/services/ezeep-group.service.js":
/*!*******************************************************!*\
  !*** ./bundles/ezeep/services/ezeep-group.service.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.EzeepGroup', ['ngResource', 'deskworks.config']).factory('EzeepGroup', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/ezeep/ezeep-groups'));
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

/***/ "./bundles/ezeep/services/ezeep-settings.service.js":
/*!**********************************************************!*\
  !*** ./bundles/ezeep/services/ezeep-settings.service.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.EzeepSettings', ['ngResource', 'deskworks.config']).factory('EzeepSettings', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/ezeep/settings'), {}, {
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

/***/ "./bundles/ezeep/services/ezeep-user.service.js":
/*!******************************************************!*\
  !*** ./bundles/ezeep/services/ezeep-user.service.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.EzeepUser', ['ngResource', 'deskworks.config']).factory('EzeepUser', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/ezeep/users/:userId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get(userId) {
      return res.get({
        userId: userId
      }).$promise;
    },
    save: function save(data) {
      return res.update({
        userId: data.id
      }, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/ezeep/settings/ezeep-settings.directive.js":
/*!************************************************************!*\
  !*** ./bundles/ezeep/settings/ezeep-settings.directive.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Integrations Setup -> Ezeep Settings directive
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ezeepSettingsDirective', ['debounce', 'deskworks.EzeepGroup', 'deskworks.EzeepSettings']).directive('ezeepSettings', function () {
  var templateUrl = 'settings/ezeep-settings.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'EzeepSettingsCtrl as $ctrl'
  };
}).controller('EzeepSettingsCtrl', ["dwAlerts", "debounce", "EzeepGroup", "EzeepSettings", function (dwAlerts, debounce, EzeepGroup, EzeepSettings) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.load();
  };
  /**
   * Load settings
   */


  $ctrl.load = function () {
    $ctrl.spin = true;
    return EzeepSettings.get().catch(function (err) {
      return dwAlerts.error(err, 'Failed to load Ezeep settings.');
    }).finally(function () {
      $ctrl.spin = false;
    }).then(function (settings) {
      $ctrl.settings = settings;
    }).then(function (result) {
      if ($ctrl.settings && $ctrl.settings.enabled) return loadEzeepGroups();
    });
  };
  /**
   * Save settings
   */


  $ctrl.save = debounce(save, 1000);

  function save(form) {
    if (form.$invalid) return;
    $ctrl.spin = true;
    return EzeepSettings.save($ctrl.settings).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save Ezeep settings.');
    }).finally(function () {
      $ctrl.spin = false;
    });
  }

  ;
  /**
   * Change Ezeep Enabled handler
   */

  $ctrl.changeEnabled = function (form) {
    if ($ctrl.settings.enabled) {
      $ctrl.save(form).then(function () {
        return loadEzeepGroups();
      });
    } else {
      return save(form);
    }
  };

  function loadEzeepGroups() {
    $ctrl.$$ezeepGroups = null;
    $ctrl.$$groupSpin = true;
    return EzeepGroup.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query Ezeep groups.');
    }).then(function (ezeepGroups) {
      $ctrl.$$ezeepGroups = ezeepGroups;
      return ezeepGroups;
    }).finally(function () {
      $ctrl.$$groupSpin = false;
    });
  }
}]));

/***/ }),

/***/ "./bundles/ezeep/settings/ezeep-settings.tpl.html":
/*!********************************************************!*\
  !*** ./bundles/ezeep/settings/ezeep-settings.tpl.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header ff-spin=\"$ctrl.spin\" class=\"ff-spin-right\"> <span translate=\"INTEGRATIONS_SETUP.EZEEP.HEADER\"></span> </ff-panel-header> <form name=\"form\" novalidate> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\"><span translate=\"INTEGRATIONS_SETUP.ENABLED\"></span></ff-label> <ff-static flex=\"1 1 155px\"> <ff-checkbox name=\"enabled\" ff-model=\"$ctrl.settings.enabled\" ff-change=\"$ctrl.changeEnabled(form)\"></ff-checkbox> </ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\"> <req translate=\"INTEGRATIONS_SETUP.EZEEP.USERNAME\"></req> </ff-label> <ff-text ff-model=\"$ctrl.settings.userName\" ff-required=\"true\" ff-change=\"$ctrl.save(form)\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.EZEEP.USERNAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 120px\"> <req translate=\"INTEGRATIONS_SETUP.EZEEP.PASSWORD\"></req> </ff-label> <ff-password ff-model=\"$ctrl.settings.password\" ff-required=\"true\" ff-change=\"$ctrl.save(form)\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.EZEEP.PASSWORD' | translate}}\"></ff-password> </label> <ff-row ff-dim=\"$ctrl.$$groupSpin\" ng-if=\"$ctrl.settings.enabled\"> <label> <ff-label flex=\"0 0 120px\"><req translate=\"INTEGRATIONS_SETUP.EZEEP.DEFAULT_GROUP\"></req></ff-label> <ff-select flex=\"1 1 155px\" name=\"defaultEzeepGroupId\" ff-model=\"$ctrl.settings.defaultEzeepGroupId\" ff-options=\"group.id as group.name for group in $ctrl.$$ezeepGroups\" ff-change=\"$ctrl.save(form)\" ff-validate-alert=\"{{'INTEGRATIONS_SETUP.EZEEP.DEFAULT_GROUP' | translate}}\"></ff-select> </label> </ff-row> </form> </ff-panel> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=ezeep~._bundles_ezeep .js.map?_rev=a9c896fe9a077548f23f