(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["check-in-form~._bundles_check-in-form "],{

/***/ "./bundles/check-in-form sync recursive .*\\.tpl\\.html$":
/*!***************************************************!*\
  !*** ./bundles/check-in-form sync .*\.tpl\.html$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./check-in/check-in.tpl.html": "./bundles/check-in-form/check-in/check-in.tpl.html"
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
webpackContext.id = "./bundles/check-in-form sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/check-in-form sync recursive \\..+\\/.+\\.js$":
/*!**************************************************!*\
  !*** ./bundles/check-in-form sync \..+\/.+\.js$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./check-in/check-in.controller.js": "./bundles/check-in-form/check-in/check-in.controller.js",
	"./check-in/kbw-access-card.directive.js": "./bundles/check-in-form/check-in/kbw-access-card.directive.js"
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
webpackContext.id = "./bundles/check-in-form sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/check-in-form/check-in/check-in.controller.js":
/*!***************************************************************!*\
  !*** ./bundles/check-in-form/check-in/check-in.controller.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _check_in_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-in.scss */ "./bundles/check-in-form/check-in/check-in.scss");
/* harmony import */ var _check_in_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_check_in_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kbw_access_card_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kbw-access-card.directive */ "./bundles/check-in-form/check-in/kbw-access-card.directive.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.checkInForm', ['deskworks.center.service', 'deskworks.checkIn.service', _kbw_access_card_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name]).controller('CheckInFormCtrl', ["$scope", "$q", "state", "helper", "center", "checkInService", function ($scope, $q, state, helper, center, checkInService) {
  var vm = this;
  state.setPageTitle('Check-In');
  vm.center = center;
  /**
   * Authenticates (and checks in) user by access card or login/password
   */

  vm.auth = function (checkOut) {
    if (!vm.busy) {
      delete vm.error;
      if (helper.pointFirstInvalid('#checkIn')) return;

      if (!vm.accessCardNumber && !vm.login && !vm.password) {
        vm.error = 'Please use access number or login/password';
        return;
      }

      vm.busy = true;
      return (checkOut ? checkInService.checkOut(vm.center.id, vm) : checkInService.checkIn(vm.center.id, vm)).then(function () {
        vm.countdown = 3;
      }).catch(function (err) {
        vm.error = err.data.error || (checkOut ? 'Failed to check out.' : 'Failed to check in.');
      }).finally(function () {
        vm.busy = false;
      });
    }
  };
  /**
   * Back to initial Check-In screen after thanks
   */


  vm.init = function () {
    delete vm.accessCardNumber;
    delete vm.login;
    delete vm.password;
    delete vm.error;
    delete vm.countdown;
  };
  /**
   * Listen to access card data from KBW and automatically check in via access card
   */


  $scope.$on('kbw::accessCard', function ($event, data) {
    $event.stopPropagation();

    if (!vm.busy) {
      vm.accessCardNumber = data;
      delete vm.login;
      delete vm.password;
      delete vm.error;
      delete vm.countdown;
      vm.auth();
    }
  });
  /**
   * Sign Up Non-Member button handler
   */

  vm.signUpNonMember = function () {
    state.setCurrentCenterId(vm.center.id);
    state.setParam('origin', '/check-in');
    return state.setPath('/simple-reservation/centers/' + vm.center.id + '/types');
  };
  /**
   * Sign Up as a Member button handler
   */


  vm.signUpMember = function () {
    state.setCurrentCenterId(vm.center.id);
    state.setParam('origin', '/check-in');
    return state.setPath('/member-sign-up');
  };
}]));

/***/ }),

/***/ "./bundles/check-in-form/check-in/check-in.scss":
/*!******************************************************!*\
  !*** ./bundles/check-in-form/check-in/check-in.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/check-in-form/check-in/check-in.tpl.html":
/*!**********************************************************!*\
  !*** ./bundles/check-in-form/check-in/check-in.tpl.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"checkIn\" ng-if=\"!vm.countdown\"> <h1 class=\"page-title\">Welcome to {{vm.center.name}}!</h1> <form name=\"formCheckIn\" class=\"check-in\" novalidate ff-dim=\"vm.busy\"> <div class=\"gutter-v\"> <ff-board> <ff-panel> <ff-panel> <ff-panel-header> <span ng-if=\"!vm.error\">Please Check In / Out</span> <span ng-if=\"vm.error\" ng-bind=\"vm.error\" class=\"text-danger\"></span> </ff-panel-header> <ff-row> <label> <ff-label flex=\"0 0 120px\">Access Number</ff-label> <ff-text name=\"accessCardNumber\" ff-model=\"vm.accessCardNumber\"></ff-text> </label> </ff-row> <ff-row> <span flex=\"0 0 120px\" class=\"ff-center\" style=\"padding-top:.5rem;color:var(--brand-color)\">&mdash; or &mdash;</span> </ff-row> <ff-row> <label> <ff-label flex=\"0 0 120px\">Login</ff-label> <ff-login name=\"login\" ff-model=\"vm.login\" ff-required=\"vm.password\" ff-maxlength=\"256\" ff-validate-alert=\"{{'GLOBAL.LOGIN' | translate}}\"></ff-login> </label> </ff-row> <ff-row> <label> <ff-label flex=\"0 0 120px\">Password</ff-label> <ff-password name=\"password\" ff-model=\"vm.password\" ff-required=\"vm.login\" ff-maxlength=\"256\" ff-validate-alert=\"{{'GLOBAL.PASSWORD' | translate}}\"></ff-password> </label> </ff-row> </ff-panel> </ff-panel> </ff-board> <ff-btn-group> <ff-btn type=\"submit\" sense=\"checkIn\" ff-click=\"vm.auth()\">Check In</ff-btn> <ff-btn sense=\"checkOut\" ff-click=\"vm.auth(true)\">Check Out</ff-btn> </ff-btn-group> </div> </form> <kbw-access-card></kbw-access-card> </div> <div id=\"checkInSuccess\" ng-if=\"vm.countdown\" class=\"check-in\"> <h1 class=\"page-title\">Thank You!</h1> <ff-btn-group> <ff-btn sense=\"ok\" ff-click=\"vm.init()\" ff-countdown=\"vm.countdown\">OK</ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/check-in-form/check-in/kbw-access-card.directive.js":
/*!*********************************************************************!*\
  !*** ./bundles/check-in-form/check-in/kbw-access-card.directive.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * kbwAccessCard directive - keyboard wedge listener for Access Card data
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.checkIn.kbwAccessCard', []).directive('kbwAccessCard', ["$timeout", function ($timeout) {
  var signature = 'PACS' + String.fromCharCode(186); // ;

  var signCount = 0;
  var cardData;
  var timer;
  return {
    restrict: 'EAC',
    scope: true,
    link: function link($scope) {
      document.addEventListener('keydown', listenKbw);
      $scope.$on('$destroy', function () {
        document.removeEventListener('keydown', listenKbw);
      });
      /**
       * KBW listener, collects card data between two signatures. Emits kbw::accessCard event.
       */

      function listenKbw(event) {
        if (event.which === 16) return; // skip Shift key
        // Timer for resetting signature recognition

        $timeout.cancel(timer);
        timer = $timeout(function () {
          cardData = null;
          signCount = 0;
        }, 1000);

        if (angular.isString(cardData)) {
          // Collecting card data
          if (event.which === 13) {
            $scope.$emit('kbw::accessCard', cardData);
            $scope.$apply();
            cardData = null;
          } else {
            cardData += String.fromCharCode(event.which);
          }
        } else {
          // Looking for signature
          if (String.fromCharCode(event.which) === signature.charAt(signCount)) {
            if (++signCount === signature.length) {
              // signature complete
              cardData = '';
              signCount = 0;
            }
          } else {
            signCount = 0;
          }
        }
      }
    }
  };
}]));

/***/ }),

/***/ "./bundles/check-in-form/index.js":
/*!****************************************!*\
  !*** ./bundles/check-in-form/index.js ***!
  \****************************************/
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

  var js = importAll(__webpack_require__("./bundles/check-in-form sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/check-in-form sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

}]);
//# sourceMappingURL=check-in-form~._bundles_check-in-form .js.map?_rev=b2248ec93fa883fb4364