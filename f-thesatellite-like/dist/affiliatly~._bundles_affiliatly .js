(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["affiliatly~._bundles_affiliatly "],{

/***/ "./bundles/affiliatly sync recursive \\..+\\/.+\\.js$":
/*!***********************************************!*\
  !*** ./bundles/affiliatly sync \..+\/.+\.js$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./services/affiliatly.service.js": "./bundles/affiliatly/services/affiliatly.service.js",
	"./settings/affiliatly-settings.directive.js": "./bundles/affiliatly/settings/affiliatly-settings.directive.js"
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
webpackContext.id = "./bundles/affiliatly sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/affiliatly/index.js":
/*!*************************************!*\
  !*** ./bundles/affiliatly/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_1__);


var index = ['$injector', function index($injector) {
  // JS
  var importAll = function importAll(r) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_1___default()(r).call(r)).call(_context, r);
  };

  var js = importAll(__webpack_require__("./bundles/affiliatly sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(js).call(js, function (m) {
    return m.default.name;
  })); // // Templates
  // $injector.invoke(['$templateCache', function($templateCache) {
  //   const ctx = require.context('./', true, /.*\.tpl\.html$/);
  //   ctx.keys().forEach(key => $templateCache.put(key.replace(/^\.\//, ''), ctx(key)));
  // }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/affiliatly/services/affiliatly.service.js":
/*!***********************************************************!*\
  !*** ./bundles/affiliatly/services/affiliatly.service.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.Affiliatly', [// 'deskworks.config',
]).factory('Affiliatly', ["$http", "dwAlerts", "setupService", function ($http, dwAlerts, setupService) {
  var url = 'https://www.affiliatly.com/api_request.php';
  return {
    // track is incomplete
    track: function track() {
      return getSettings().then(function (settings) {
        var affiliatlyId = settings.affiliatlyId;
        var data = {
          mode: 'track-v2',
          id_affiliatly: affiliatlyId,
          tracking_parameter: {
            get: {
              aff: '1'
            },
            hash: {}
          }
        };
        if (document.referer) data.referer = document.referer;
        $http.post(url, formEncode(data), {
          withCredentials: false,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          params: {
            aid: affiliatlyId
          }
        }); // response: user_ip=93.170.114.10&id_user=46&aff_uid=1&duration=7776000&expire_time=1600195899
        // easy_affiliate: user_ip=93.170.114.10&id_user=25&aff_uid=1&duration=7776000&expire_time=1600187189
        // SameSite: Lax
        // POST https://www.affiliatly.com/api_request.php?aid=AF-1032712
        //  mode: cookie_update
        // id_affiliatly: AF-1032712
        // user_ip: 93.170.114.10
        // id_user: 25
        // aff_uid: 1
        // duration: 7776000
        // expire_time: 1600187189
        // store_visit: 1
      });
    },
    markPurchase: function markPurchase(_ref) {
      var orderId = _ref.orderId,
          total = _ref.total,
          email = _ref.email;
      return getSettings().then(function (settings) {
        var affiliatlyId = settings.affiliatlyId;
        if (!affiliatlyId) return;
        var data = {
          // mode: 'mark_purchase_external',
          mode: 'mark_shopify',
          id_affiliatly: affiliatlyId,
          order: orderId,
          price: total,
          client_email: email
        };
        $http.post(url, formEncode(data), {
          withCredentials: false,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          params: {
            aid: affiliatlyId
          }
        });
      });
    }
  };

  function getSettings() {
    return setupService.getSetupSettings().catch(function (err) {
      return dwAlerts.error(err, 'Failed to get setup settings.');
    });
  }

  function formEncode(data) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(data)).call(_context, function (key) {
      return [encodeURIComponent(key), encodeURIComponent(angular.isObject(data[key]) ? angular.toJson(data[key]) : data[key])].join('=');
    }).join('&');
  }
}]));

/***/ }),

/***/ "./bundles/affiliatly/settings/affiliatly-settings.directive.js":
/*!**********************************************************************!*\
  !*** ./bundles/affiliatly/settings/affiliatly-settings.directive.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _affiliatly_settings_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./affiliatly-settings.tpl.html */ "./bundles/affiliatly/settings/affiliatly-settings.tpl.html");
/* harmony import */ var _affiliatly_settings_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_affiliatly_settings_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Setup Settings -> Affiliatly settings directive
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.affiliatlySettingsDirective', []).directive('affiliatlySettings', function () {
  return {
    template: _affiliatly_settings_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    restrict: 'E',
    scope: true,
    controller: 'AffiliatlySettingsCtrl as $ctrl',
    bindToController: {
      settings: '<'
    }
  };
}).controller('AffiliatlySettingsCtrl', function () {// const $ctrl = this;
}));

/***/ }),

/***/ "./bundles/affiliatly/settings/affiliatly-settings.tpl.html":
/*!******************************************************************!*\
  !*** ./bundles/affiliatly/settings/affiliatly-settings.tpl.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label class=\"ff-row\"> <ff-label flex=\"{xs: '0 1 160px', sm: '0 1 250px'}\"> <span> <span translate=\"SETUP_SETTINGS.AFFILIATLY_ID\"></span> <ff-hint><span translate=\"SETUP_SETTINGS.AFFILIATLY_ID.HINT\"></span></ff-hint> </span> </ff-label> <ff-text name=\"affiliatlyId\" ff-model=\"$ctrl.settings.affiliatlyId\" placeholder=\"AF-XXXXXXX\" ff-validate-alert=\"{{'SETUP_SETTINGS.AFFILIATLY_ID' | translate}}\"></ff-text> </label> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=affiliatly~._bundles_affiliatly .js.map?_rev=db7ab2510851262149be