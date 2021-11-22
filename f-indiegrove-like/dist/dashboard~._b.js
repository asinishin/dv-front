(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard~._b"],{

/***/ "./bundles/dashboard sync recursive .*\\.tpl\\.html$":
/*!***********************************************!*\
  !*** ./bundles/dashboard sync .*\.tpl\.html$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-code-of-the-day/access-code-of-the-day.tpl.html": "./bundles/dashboard/access-code-of-the-day/access-code-of-the-day.tpl.html",
	"./dashboard-admin/dashboard-admin.tpl.html": "./bundles/dashboard/dashboard-admin/dashboard-admin.tpl.html",
	"./dashboard-user/dashboard-user.tpl.html": "./bundles/dashboard/dashboard-user/dashboard-user.tpl.html",
	"./widgets-admin/dash-admin-access-code.tpl.html": "./bundles/dashboard/widgets-admin/dash-admin-access-code.tpl.html",
	"./widgets-admin/dash-admin-billing.tpl.html": "./bundles/dashboard/widgets-admin/dash-admin-billing.tpl.html",
	"./widgets-admin/dash-admin-reservation-conflicts.tpl.html": "./bundles/dashboard/widgets-admin/dash-admin-reservation-conflicts.tpl.html",
	"./widgets-admin/dash-admin-reservations.tpl.html": "./bundles/dashboard/widgets-admin/dash-admin-reservations.tpl.html",
	"./widgets-admin/dash-admin-self-registrations.tpl.html": "./bundles/dashboard/widgets-admin/dash-admin-self-registrations.tpl.html",
	"./widgets-admin/dash-admin-users-checked-in.tpl.html": "./bundles/dashboard/widgets-admin/dash-admin-users-checked-in.tpl.html",
	"./widgets-user/dash-general.tpl.html": "./bundles/dashboard/widgets-user/dash-general.tpl.html",
	"./widgets-user/dash-members-checked-in.tpl.html": "./bundles/dashboard/widgets-user/dash-members-checked-in.tpl.html",
	"./widgets-user/dash-message-board.tpl.html": "./bundles/dashboard/widgets-user/dash-message-board.tpl.html",
	"./widgets-user/dash-outstanding-charges.tpl.html": "./bundles/dashboard/widgets-user/dash-outstanding-charges.tpl.html",
	"./widgets-user/dash-recurring-charges.tpl.html": "./bundles/dashboard/widgets-user/dash-recurring-charges.tpl.html",
	"./widgets-user/dash-upcoming-reservations.tpl.html": "./bundles/dashboard/widgets-user/dash-upcoming-reservations.tpl.html"
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
webpackContext.id = "./bundles/dashboard sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/dashboard sync recursive \\..+\\/.+\\.js$":
/*!**********************************************!*\
  !*** ./bundles/dashboard sync \..+\/.+\.js$ ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-code-of-the-day/access-code-of-the-day.controller.js": "./bundles/dashboard/access-code-of-the-day/access-code-of-the-day.controller.js",
	"./dashboard-admin/dashboard-admin.controller.js": "./bundles/dashboard/dashboard-admin/dashboard-admin.controller.js",
	"./dashboard-user/dashboard-user.controller.js": "./bundles/dashboard/dashboard-user/dashboard-user.controller.js",
	"./widgets-admin/dash-admin-access-code.directive.js": "./bundles/dashboard/widgets-admin/dash-admin-access-code.directive.js",
	"./widgets-admin/dash-admin-billing.directive.js": "./bundles/dashboard/widgets-admin/dash-admin-billing.directive.js",
	"./widgets-admin/dash-admin-reservation-conflicts.directive.js": "./bundles/dashboard/widgets-admin/dash-admin-reservation-conflicts.directive.js",
	"./widgets-admin/dash-admin-reservations.directive.js": "./bundles/dashboard/widgets-admin/dash-admin-reservations.directive.js",
	"./widgets-admin/dash-admin-self-registrations.directive.js": "./bundles/dashboard/widgets-admin/dash-admin-self-registrations.directive.js",
	"./widgets-admin/dash-admin-users-checked-in.directive.js": "./bundles/dashboard/widgets-admin/dash-admin-users-checked-in.directive.js",
	"./widgets-user/dash-general.directive.js": "./bundles/dashboard/widgets-user/dash-general.directive.js",
	"./widgets-user/dash-members-checked-in.directive.js": "./bundles/dashboard/widgets-user/dash-members-checked-in.directive.js",
	"./widgets-user/dash-message-board.directive.js": "./bundles/dashboard/widgets-user/dash-message-board.directive.js",
	"./widgets-user/dash-outstanding-charges.directive.js": "./bundles/dashboard/widgets-user/dash-outstanding-charges.directive.js",
	"./widgets-user/dash-recurring-charges.directive.js": "./bundles/dashboard/widgets-user/dash-recurring-charges.directive.js",
	"./widgets-user/dash-upcoming-reservations.directive.js": "./bundles/dashboard/widgets-user/dash-upcoming-reservations.directive.js"
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
webpackContext.id = "./bundles/dashboard sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/dashboard/access-code-of-the-day/access-code-of-the-day.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/dashboard/access-code-of-the-day/access-code-of-the-day.controller.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _access_code_of_the_day_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./access-code-of-the-day.scss */ "./bundles/dashboard/access-code-of-the-day/access-code-of-the-day.scss");
/* harmony import */ var _access_code_of_the_day_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_access_code_of_the_day_scss__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.AccessCodeOfTheDayCtrl', ['deskworks.routeHelper', 'deskworks.notifications.service']).controller('AccessCodeOfTheDayCtrl', ["$scope", "$translate", "$interval", "$q", "state", "dwAlerts", "routeHelper", "dashboardService", "Notifications", function ($scope, $translate, $interval, $q, state, dwAlerts, routeHelper, dashboardService, Notifications) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('DASHBOARD.ADMIN.ACCESS_CODE.HEADER'));
  var defaultBody = '<h1 style="text-align: center;"><b>WiFi Access</b></h1><br><br><h2 style="text-align: center;">Access Code: <b>{{access-code}}</b></h2><br>';
  /**
   * Fetch access code
   */

  $ctrl.fetch = function () {
    $interval.cancel($ctrl.timer);
    $ctrl.fetching = true;
    return routeHelper.auth().then(function () {
      return $q.all({
        stats: dashboardService.getCenterStats(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center stats.');
        }),
        tpl: Notifications.getDeskTabletTemplate(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get desk tablet template.');
        })
      });
    }).then(function (result) {
      $ctrl.accessCode = result.stats.accessCode;
      $ctrl.tpl = result.tpl;
      $ctrl.tpl.body = $ctrl.tpl.body || defaultBody;
      $ctrl.tpl.body = $ctrl.tpl.body.replace(/{{access-code}}/g, $ctrl.accessCode);
    }).finally(function () {
      $ctrl.fetching = false;
      $interval.cancel($ctrl.timer);
      $ctrl.timer = $interval($ctrl.fetch, 1000 * 60 * 5);
    });
  };

  $ctrl.fetch();
  /**
   * Destroy
   */

  $ctrl.$onDestroy = function () {
    $interval.cancel($ctrl.timer);
  };

  $ctrl.toDashboard = function () {
    return state.setPath('/dashboard');
  };
}]));

/***/ }),

/***/ "./bundles/dashboard/access-code-of-the-day/access-code-of-the-day.scss":
/*!******************************************************************************!*\
  !*** ./bundles/dashboard/access-code-of-the-day/access-code-of-the-day.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/dashboard/access-code-of-the-day/access-code-of-the-day.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/dashboard/access-code-of-the-day/access-code-of-the-day.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"accessCodeOfTheDay\"> <ff-spin class=\"ff-spin-placeholder\" ng-if=\"$ctrl.fetching && !$ctrl.accessCode\"></ff-spin> <span ng-bind-html=\"$ctrl.tpl.body\"></span> </div> <ff-btn-group class=\"buttons-bottom\" style=\"margin-top:100vh\"> <ff-btn sense=\"back\" ff-click=\"$ctrl.toDashboard()\"> <span translate=\"SIDEBAR.DASHBOARD\"></span> </ff-btn> </ff-btn-group> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/dashboard-admin/dashboard-admin.controller.js":
/*!*************************************************************************!*\
  !*** ./bundles/dashboard/dashboard-admin/dashboard-admin.controller.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.admin', ['NATS', 'flexForms', 'deskworks.dashboard.dashAdminReservations', 'deskworks.dashboard.dashAdminAccessCode', 'deskworks.dashboard.dashAdminBilling', 'deskworks.dashboard.dashAdminUsersCheckedIn', 'deskworks.dashboard.dashAdminReservationConflicts', 'deskworks.dashboard.dashAdminSelfRegistrations', 'deskworks.dashboard.service', 'deskworks.Admin']).controller('DashboardAdminCtrl', ["$scope", "$filter", "$timeout", "$translate", "state", "helper", "admin", "dwAlerts", "settings", "dashboardService", "userProfileService", "NATS", function ($scope, $filter, $timeout, $translate, state, helper, admin, dwAlerts, settings, dashboardService, userProfileService, NATS) {
  var vm = this;
  vm.settings = settings;
  vm.nats = NATS.connect();
  vm.nats.on('error', function (err) {
    console.warn('NATS error:', err);
  });
  $scope.$on('$destroy', function () {
    return vm.nats.close();
  });
  var pageTitle = $translate.instant('DASHBOARD.ADMIN.PAGE_TITLE', {
    userName: admin.fullName
  });
  state.setPageTitle(pageTitle);
  /**
   * Get selected user profile to display User Dashboard
   */

  if (state.isUserSelected()) {
    userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get user profile.');
    }).then(function (result) {
      vm.user = result;
    });
  }

  vm.hideAll = (helper.findByKeyValue(admin.centers, 'id', state.getCurrentCenterId()) || {}).permission !== 'all';
  if (vm.hideAll) return;
  /**
   * Get center stats
   */

  dashboardService.getCenterStats(state.getCurrentCenterId()).catch(function (err) {
    return dwAlerts.error(err, 'Failed to get center stats.');
  }).then(function (result) {
    vm.centerStats = result;
  });
}]));

/***/ }),

/***/ "./bundles/dashboard/dashboard-admin/dashboard-admin.tpl.html":
/*!********************************************************************!*\
  !*** ./bundles/dashboard/dashboard-admin/dashboard-admin.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"dashboardAdmin\" class=\"dashboard\"> <h1 class=\"page-title\" style=\"margin-top:2rem;margin-bottom:2rem\" ng-bind=\"state.getPageTitle()\"></h1> <ff-panel ng-if=\"vm.hideAll\"> <span translate=\"DASHBOARD.ADMIN.NO_PERMISSION\"></span> </ff-panel> <div class=\"ff-grid gutter-v gutter-h\" ng-if=\"!vm.hideAll\"> <div flex=\"{lg: '0 0 50%'}\"> <div class=\"gutter-v\"> <dash-admin-reservations id=\"dashAdminReservationsToday\" reservations=\"vm.centerStats.reservationsToday\" label=\"DASHBOARD.ADMIN.RESERVATIONS.TODAY.HEADER\" settings=\"vm.settings\"></dash-admin-reservations> <dash-admin-reservations id=\"dashAdminReservationsTomorrow\" reservations=\"vm.centerStats.reservationsTomorrow\" label=\"DASHBOARD.ADMIN.RESERVATIONS.TOMORROW.HEADER\" settings=\"vm.settings\"></dash-admin-reservations> <dash-admin-users-checked-in id=\"dashAdminUsersCheckedIn\" nats=\"vm.nats\"></dash-admin-users-checked-in> </div> </div> <div flex=\"{lg: '0 0 50%'}\"> <div class=\"gutter-v\"> <dash-admin-access-code id=\"dashAdminAccessCode\" ng-if=\"vm.settings.enableAccessCodes\" stats=\"vm.centerStats\" class=\"animate-collapse\"></dash-admin-access-code> <dash-admin-billing id=\"dashAdminBilling\" stats=\"vm.centerStats\" settings=\"vm.settings\"></dash-admin-billing> <dash-admin-self-registrations id=\"dashAdminSelfRegistrations\" users=\"vm.centerStats.selfRegistrations\"></dash-admin-self-registrations> </div> </div> <dash-admin-reservation-conflicts id=\"dashAdminReservationsConflicts\" ng-if=\"vm.centerStats.reservationsConflicts.length\" reservations=\"vm.centerStats.reservationsConflicts\" class=\"animate-collapse\"> </dash-admin-reservation-conflicts> </div> </div> <div id=\"dashboardUser\" class=\"dashboard\" ng-if=\"vm.user\"> <h1 class=\"page-title\" translate=\"DASHBOARD.ADMIN.USER_DASHBOARD_TITLE\" style=\"margin-top:2rem;margin-bottom:2rem\" translate-values=\"{ userName: [vm.user.firstName, vm.user.lastName].join(' ') }\"></h1> <ff-panel ng-if=\"vm.hideAll\"> <span translate=\"DASHBOARD.USER.NO_PERMISSION\"></span> </ff-panel> <div class=\"ff-grid gutter-v gutter-h\" ng-if=\"!vm.hideAll\"> <div flex=\"{lg: '0 0 50%'}\"> <dash-upcoming-reservations id=\"dashUpcomingReservations\" settings=\"vm.settings\"></dash-upcoming-reservations> </div> <div flex=\"{lg: '0 0 50%'}\"> <dash-general id=\"dashGeneral\" settings=\"vm.settings\"></dash-general> </div> <dash-recurring-charges id=\"dashRecurringCharges\" ng-if=\"vm.user.role !== 'nonMember'\"></dash-recurring-charges> <dash-outstanding-charges id=\"dashOutstandingCharges\"></dash-outstanding-charges> <div flex=\"{md: '0 0 50%'}\" ng-if=\"vm.user.role !== 'nonMember'\"> <dash-members-checked-in id=\"dashMembersCheckedIn\" nats=\"vm.nats\"></dash-members-checked-in> </div> <div flex=\"{md: '0 0 50%'}\" ng-if=\"vm.user.role !== 'nonMember'\"> <dash-message-board id=\"dashMessageBoard\" nats=\"vm.nats\"></dash-message-board> </div> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/dashboard-user/dashboard-user.controller.js":
/*!***********************************************************************!*\
  !*** ./bundles/dashboard/dashboard-user/dashboard-user.controller.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.DashboardUserCtrl', ['NATS', 'deskworks.routeHelper', 'flexForms', 'deskworks.dashboard.upcomingReservations', 'deskworks.dashboard.dashGeneral', 'deskworks.dashboard.recurringCharges', 'deskworks.dashboard.dashOutstandingCharges', 'deskworks.dashboard.dashMembersCheckedIn', 'deskworks.dashboard.dashMessageBoard']).controller('DashboardUserCtrl', ["$scope", "$translate", "state", "helper", "user", "userLogged", "settings", "NATS", function ($scope, $translate, state, helper, user, userLogged, settings, NATS) {
  var vm = this;
  vm.user = user;
  vm.userLogged = userLogged;
  vm.settings = settings;
  var name = state.isMasterProfile() && vm.user.company ? vm.user.company : vm.user.firstName + ' ' + vm.user.lastName;
  var pageTitle = $translate.instant('DASHBOARD.USER.PAGE_TITLE', {
    userName: name
  });
  state.setPageTitle(pageTitle);
  vm.nats = NATS.connect();
  vm.nats.on('error', function (err) {
    console.warn('NATS error:', err);
  });
  $scope.$on('$destroy', function () {
    vm.nats.close();
  });
  /**
   * Limit co-member to see master accounting info if canSeeAccountingInfo: false
   */

  vm.canSeeAccountingInfo = function () {
    return !state.isMasterProfile() || (helper.findByKeyValue(vm.userLogged.masterMembers, 'id', vm.user.id) || {}).canSeeAccountingInfo;
  };
}]));

/***/ }),

/***/ "./bundles/dashboard/dashboard-user/dashboard-user.tpl.html":
/*!******************************************************************!*\
  !*** ./bundles/dashboard/dashboard-user/dashboard-user.tpl.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"dashboardUser\" class=\"dashboard\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{md: '0 0 50%'}\"> <dash-upcoming-reservations id=\"dashUpcomingReservations\" settings=\"vm.settings\"></dash-upcoming-reservations> </div> <div flex=\"{md: '0 0 50%'}\"> <dash-general id=\"dashGeneral\" settings=\"vm.settings\"></dash-general> </div> <dash-recurring-charges id=\"dashRecurringCharges\" ng-if=\"vm.user.role !== 'nonMember' && vm.canSeeAccountingInfo()\"></dash-recurring-charges> <dash-outstanding-charges id=\"dashOutstandingCharges\" ng-if=\"vm.canSeeAccountingInfo()\"></dash-outstanding-charges> <div flex=\"{md: '0 0 50%'}\" ng-if=\"vm.user.role !== 'nonMember'\"> <dash-members-checked-in id=\"dashMembersCheckedIn\" nats=\"vm.nats\"></dash-members-checked-in> </div> <div flex=\"{md: '0 0 50%'}\" ng-if=\"vm.user.role !== 'nonMember'\"> <dash-message-board id=\"dashMessageBoard\" nats=\"vm.nats\"></dash-message-board> </div> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/index.js":
/*!************************************!*\
  !*** ./bundles/dashboard/index.js ***!
  \************************************/
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

  var js = importAll(__webpack_require__("./bundles/dashboard sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/dashboard sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-access-code.directive.js":
/*!*****************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-access-code.directive.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * dashAdminAccess directive - 'Access Code of the day' widget for admin dashboard
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.dashAdminAccessCode', []).directive('dashAdminAccessCode', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-admin/dash-admin-access-code.tpl.html',
    controller: 'DashAdminAccessCodeCtrl as $ctrl',
    bindToController: {
      stats: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        return helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashAdminAccessCodeCtrl', ["state", function (state) {
  var $ctrl = this;

  $ctrl.toAccessCode = function () {
    return state.setPath('/access-code-of-the-day');
  };
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-access-code.tpl.html":
/*!*************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-access-code.tpl.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel ng-if=\"$ctrl.stats.accessCode\" class=\"animate-collapse ff-no-frame\"> <ff-panel-header> <ff-icon sense=\"accessCode\"></ff-icon> <span translate=\"DASHBOARD.ADMIN.ACCESS_CODE.HEADER\"></span> </ff-panel-header> <ff-row> <ff-static>{{$ctrl.stats.accessCode}}</ff-static> <ff-btn-group flex=\"none\" class=\"buttons-row\"> <ff-btn sense=\"expand\" size=\"xs\" ng-if=\"$ctrl.stats.accessCode\" ff-style=\"{ 'font-size': '16px' }\" ff-click=\"$ctrl.toAccessCode()\" title=\"Desk Tablet\"></ff-btn> </ff-btn-group> </ff-row> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-billing.directive.js":
/*!*************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-billing.directive.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * dashAdminBilling directive - income/accounts-receivable/credit-cards-to-expire widget for admin dashboard
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.dashAdminBilling', []).directive('dashAdminBilling', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-admin/dash-admin-billing.tpl.html',
    controller: 'DashAdminBillingCtrl as $ctrl',
    bindToController: {
      stats: '<',
      settings: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashAdminBillingCtrl', ["$scope", "state", "helper", function ($scope, state, helper) {
  var $ctrl = this;
  $scope.helper = helper;
  /**
   * Navigate to Billing Profile on clicking credit card
   */

  $ctrl.toBillingProfile = function (cc) {
    state.setCurrentUserId(cc.userId);
    return state.setPath('/billing-profiles');
  };
  /**
   * Navigate to Income Report on clicking 'Income this month'
   */


  $ctrl.toIncomeReport = function () {
    return state.setPath($ctrl.settings && $ctrl.settings.dashboardIncome === 'accrual' ? '/income-by-item-report' : '/income-report');
  };
  /**
   * Navigate to Accounts Receivable Report on clicking 'Current Accounts Receivable'
   */


  $ctrl.toAccountsReceivableReport = function () {
    return state.setPath('/accounts-receivable-report');
  };
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-billing.tpl.html":
/*!*********************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-billing.tpl.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel ng-if=\"$ctrl.stats.incomeThisMonth !== undefined || $ctrl.stats.totalAccountsReceivable !== undefined || $ctrl.stats.currentAccountsReceivable !== undefined || $ctrl.stats.creditCardsToExpire.length\" class=\"animate-collapse\"> <ff-panel-header> <ff-icon sense=\"billing\"></ff-icon> <span translate=\"DASHBOARD.ADMIN.BILLING_INFO.HEADER\"></span> </ff-panel-header> <div class=\"gutter-v-half\"> <div> <ff-row class=\"ff-clickable\" ng-click=\"$ctrl.toIncomeReport()\" ff-dim ng-if=\"$ctrl.stats.incomeThisMonth !== undefined\" title=\"{{'DASHBOARD.ADMIN.BILLING_INFO.INCOME.NAV_TITLE' | translate}}\"> <ff-static> <span class=\"em\"> <span translate=\"DASHBOARD.ADMIN.BILLING_INFO.INCOME\"></span>: {{$ctrl.stats.incomeThisMonth | ncurrency}} </span> </ff-static> </ff-row> <ff-row class=\"ff-clickable\" ng-click=\"$ctrl.toAccountsReceivableReport()\" ff-dim ng-if=\"$ctrl.stats.currentAccountsReceivable !== undefined\" title=\"{{'DASHBOARD.ADMIN.BILLING_INFO.ACCOUNTS_RECEIVABLE.NAV_TITLE' | translate}}\"> <ff-static> <span class=\"em\"> <span translate=\"DASHBOARD.ADMIN.BILLING_INFO.ACCOUNTS_RECEIVABLE.CURRENT\"></span>: {{$ctrl.stats.currentAccountsReceivable | ncurrency}} </span> </ff-static> </ff-row> <ff-row class=\"ff-clickable\" ng-click=\"$ctrl.toAccountsReceivableReport()\" ff-dim ng-if=\"$ctrl.stats.totalAccountsReceivable !== undefined\" title=\"{{'DASHBOARD.ADMIN.BILLING_INFO.ACCOUNTS_RECEIVABLE.NAV_TITLE' | translate}}\"> <ff-static> <span class=\"em\"> <span translate=\"DASHBOARD.ADMIN.BILLING_INFO.ACCOUNTS_RECEIVABLE.TOTAL\"></span>: {{$ctrl.stats.totalAccountsReceivable | ncurrency}} </span> </ff-static> </ff-row> </div> <div ng-if=\"$ctrl.stats.creditCardsToExpire.length > 0\"> <ff-header><span translate=\"DASHBOARD.ADMIN.BILLING_INFO.CC_EXPIRE\"></span></ff-header> <ff-row ng-repeat=\"cc in ::$ctrl.stats.creditCardsToExpire\" class=\"ff-clickable\" ng-click=\"$ctrl.toBillingProfile(cc)\" ff-dim title=\"{{'DASHBOARD.ADMIN.BILLING_INFO.CC_EXPIRE.NAV_TITLE' | translate}}\"> <ff-static flex=\"0 1 180px\" class=\"ff-center\" ff-style=\"{ 'padding-left': '15px' }\"> <ff-hint hint-type=\"danger\" style=\"position:absolute;left:5px;top:50%;transform:translateY(-50%)\" ng-if=\"cc.defaultPaymentMethod\" ng-click=\"$event.stopPropagation()\" title=\"\"> <span translate=\"DASHBOARD.ADMIN.BILLING_INFO.CC_EXPIRE.DEFAULT_PAYMENT_METHOD\"></span> </ff-hint> {{::cc.number}} </ff-static> <ff-static flex=\"1 1 410px\" ff-bind=\"::helper.join([cc.userCompany, cc.userName], ', ')\"></ff-static> </ff-row> </div> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-reservation-conflicts.directive.js":
/*!***************************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-reservation-conflicts.directive.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");


/**
 * dashAdminReservationConflicts directive - reservation conflicts widget for admin dashboard
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.dashAdminReservationConflicts', ['deskworks.dashboard.service', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name]).directive('dashAdminReservationConflicts', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-admin/dash-admin-reservation-conflicts.tpl.html',
    controller: 'DashAdminReservationConflictsCtrl as $ctrl',
    bindToController: {
      reservations: '<',
      label: '@'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        return helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashAdminReservationConflictsCtrl', ["$scope", "$filter", "state", "helper", "dwAlerts", "dashboardService", function ($scope, $filter, state, helper, dwAlerts, dashboardService) {
  var $ctrl = this;
  $scope.helper = helper;
  /**
   * Navigate reservation handler
   */

  $ctrl.navigate = function (reservation) {
    state.setParam('date', $filter('date')(reservation.startTime, 'yyyy-MM-dd'));
    return state.setPath('/reservation-calendar');
  };
  /**
   * Reset reservation conflict handler
   */


  $ctrl.reset = function (reservation) {
    return dashboardService.resetReservationConflict(reservation.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to reset reservation conflict.');
    }).then(function () {
      var _context;

      return _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.reservations).call(_context, $ctrl.reservations.indexOf(reservation), 1);
    });
  };
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-reservation-conflicts.tpl.html":
/*!***********************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-reservation-conflicts.tpl.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header> <ff-icon sense=\"warning\"></ff-icon> <span translate=\"DASHBOARD.ADMIN.RESERVATION_CONFLICTS.HEADER\"></span> </ff-panel-header> <div> <div ng-if=\"!$ctrl.reservations.length\" class=\"animate-collapse\"> <span translate=\"DASHBOARD.ADMIN.RESERVATION_CONFLICTS.EMPTY\"></span> </div> <div style=\"display:flex\" ng-repeat-start=\"reservation in $ctrl.reservations\" class=\"animate-collapse\"> <ff-row flex=\"1 1 auto\" class=\"ff-clickable\" ng-click=\"$ctrl.navigate(reservation)\" ff-dim title=\"{{'DASHBOARD.ADMIN.RESERVATION_CONFLICTS.NAV_TITLE' | translate}}\"> <ff-static flex=\"0 1 260px\" class=\"ff-center\"> <span> <span ng-bind=\"::reservation.startTime | date:'mediumDate'\"></span>&nbsp;&nbsp; <span nice-time=\"::reservation.startTime\"></span> - <span nice-time=\"::reservation.endTime\"></span> </span> </ff-static> <ff-static flex=\"0 1 200px\" ff-bind=\"::reservation.reservationUnitName\"></ff-static> <ff-static flex=\"1 1 400px\" ff-bind=\"::reservation.errorMessage\"></ff-static> </ff-row> <ff-btn-group style=\"align-self:center;margin-top:-2px\"> <ff-btn sense=\"reset\" size=\"xs\" flex=\"0 0 auto\" ff-click=\"$ctrl.reset(reservation)\" title=\"{{'DASHBOARD.ADMIN.RESERVATION_CONFLICTS.RESET_BTN_TITLE' | translate}}\">Reset</ff-btn> </ff-btn-group> </div> <ff-row ng-repeat-end ng-if=\"::reservation.reservationNote\" class=\"animate-collapse\"> <ff-label> <span> <ff-icon sense=\"info\" class=\"ff-flex-start\"></ff-icon> {{::reservation.reservationNote}} </span> </ff-label> </ff-row> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-reservations.directive.js":
/*!******************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-reservations.directive.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");

/**
 * dashAdminReservations directive - reservations today/tomorrow widget for admin dashboard
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.dashAdminReservations', [shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name]).directive('dashAdminReservations', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-admin/dash-admin-reservations.tpl.html',
    controller: 'DashAdminReservationsCtrl as $ctrl',
    bindToController: {
      reservations: '<',
      label: '@',
      settings: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        return helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashAdminReservationsCtrl', ["$scope", "$filter", "state", "helper", function ($scope, $filter, state, helper) {
  var $ctrl = this;
  $scope.helper = helper;
  /**
   * Navigate reservation handler
   */

  $ctrl.navigate = function (reservation) {
    state.setParam('date', $filter('date')(reservation.startTime, 'yyyy-MM-ddTHH:mm:ss'));
    return state.setPath('/reservation-calendar');
  };
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-reservations.tpl.html":
/*!**************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-reservations.tpl.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header><ff-icon sense=\"reservation\"></ff-icon> <span translate=\"{{::$ctrl.label}}\"></span></ff-panel-header> <div ff-dim=\"!$ctrl.reservations\"> <div ng-repeat-start=\"reservation in ::$ctrl.reservations\" class=\"ff-grid ff-clickable ff-relative animate-collapse\" ng-click=\"$ctrl.navigate(reservation)\" ff-dim title=\"{{'DASHBOARD.ADMIN.RESERVATIONS.NAVIGATE_TITLE' | translate}}\"> <ff-row flex=\"{sm: '0 0 50%'}\"> <ff-static flex=\"0 1 210px\"> <span><span nice-time=\"::reservation.startTime\"></span> - <span nice-time=\"::reservation.endTime\"></span></span> </ff-static> <ff-static flex=\"1 1 210px\" ff-bind=\"::reservation.reservationUnitName\"></ff-static> </ff-row> <ff-row flex=\"{sm: '0 0 50%'}\"> <ff-static flex=\"1 1 210px\" ff-bind=\"::helper.join([reservation.userCompany, reservation.userName], ', ')\"></ff-static> <ff-static flex=\"0 1 90px\" ff-bind=\"::reservation.accessCode\" ng-click=\"$event.stopPropagation()\" ff-style=\"{ cursor: 'auto' }\" ng-if=\"$ctrl.settings.enableAccessCodes\" title=\"\"></ff-static> </ff-row> </div> <ff-row ng-repeat-end ng-if=\"::reservation.reservationNote\" class=\"animate-collapse\"> <ff-label> <em> <ff-icon sense=\"info\" class=\"ff-flex-start\"></ff-icon> {{::reservation.reservationNote}} </em> </ff-label> </ff-row> <div ng-if=\"$ctrl.reservations && !$ctrl.reservations.length\" class=\"animate-collapse\"> <span translate=\"GLOBAL.NONE\"></span> </div> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-self-registrations.directive.js":
/*!************************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-self-registrations.directive.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * dashAdminSelfRegistrations directive - current self-registrations widget for admin dashboard
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.dashAdminSelfRegistrations', []).directive('dashAdminSelfRegistrations', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-admin/dash-admin-self-registrations.tpl.html',
    controller: 'DashAdminSelfRegistrationsCtrl as $ctrl',
    bindToController: {
      users: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        return helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashAdminSelfRegistrationsCtrl', ["$scope", "state", "helper", function ($scope, state, helper) {
  var $ctrl = this;
  $scope.helper = helper;
  /**
   * Navigate to user profile on clicking self-registration
   */

  $ctrl.navigate = function (user) {
    state.setCurrentUserId(user.id);
    return state.setPath('/profile');
  };
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-self-registrations.tpl.html":
/*!********************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-self-registrations.tpl.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header> <ff-icon sense=\"user\"></ff-icon> <span translate=\"DASHBOARD.ADMIN.SIGN_UPS.HEADER\"></span> </ff-panel-header> <div> <ff-row ng-repeat-start=\"user in ::$ctrl.users\" class=\"ff-clickable animate-collapse\" ng-click=\"$ctrl.navigate(user)\" ff-dim title=\"{{'DASHBOARD.ADMIN.SIGN_UPS.NAV_TITLE' | translate}}\"> <ff-static flex=\"0 0 50%\" ff-bind=\"::user.fullNameCompany\"></ff-static> <ff-static flex=\"0 0 50%\" ff-style=\"{'padding-right': 0}\"> <a href=\"mailto:{{::user.email}}\" ng-bind=\"::user.email\" ng-click=\"$event.stopPropagation()\" title=\"\"></a> </ff-static> </ff-row> <ff-row ng-repeat-end ng-if=\"::['staffHelp', 'abandoned', 'banned'].indexOf(user.status) >= 0\" class=\"animate-collapse\"> <ff-static> <span> <ff-icon sense=\"warning\" class=\"ff-flex-start\"></ff-icon> <span ng-if=\"::user.status === 'staffHelp'\" translate=\"DASHBOARD.ADMIN.SIGN_UPS.STAFF_HELP\"></span> <span ng-if=\"::user.status === 'abandoned'\" translate=\"DASHBOARD.ADMIN.SIGN_UPS.ABANDONED\"></span> <span ng-if=\"::user.status === 'banned'\" translate=\"DASHBOARD.ADMIN.SIGN_UPS.BANNED\"></span> </span> </ff-static> </ff-row> <div ng-if=\"$ctrl.users && !$ctrl.users.length\" class=\"animate-collapse\"> <span translate=\"DASHBOARD.ADMIN.SIGN_UPS.EMPTY\"></span> </div> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-users-checked-in.directive.js":
/*!**********************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-users-checked-in.directive.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dash_admin_users_checked_in_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dash-admin-users-checked-in.scss */ "./bundles/dashboard/widgets-admin/dash-admin-users-checked-in.scss");
/* harmony import */ var _dash_admin_users_checked_in_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dash_admin_users_checked_in_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * dashAdminUsersCheckedIn directive - checked-in users widget for admin dashboard
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.dashAdminUsersCheckedIn', ['deskworks.userRoles', 'deskworks.CheckedInUsers']).directive('dashAdminUsersCheckedIn', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-admin/dash-admin-users-checked-in.tpl.html',
    controller: 'DashAdminUsersCheckedInCtrl as $ctrl',
    bindToController: {
      nats: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        return helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashAdminUsersCheckedInCtrl', ["$scope", "$timeout", "dwAlerts", "state", "helper", "userRoles", "CheckedInUsers", function ($scope, $timeout, dwAlerts, state, helper, userRoles, CheckedInUsers) {
  var $ctrl = this;
  $scope.helper = helper;
  $scope.userRoles = userRoles;
  var subs = [];
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    CheckedInUsers.query(state.getCurrentCenterId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query checked-in users.');
    }).then(function (result) {
      $ctrl.users = result;
      subs.push($ctrl.nats.subscribe('API.:siteId.centers.:centerId.checked-in-users.*', onUpdate));
      $timeout(function () {
        return $scope.$broadcast('dwWidget:SpinStop');
      });
    });
  };
  /**
   * $onDestroy
   */


  $ctrl.$onDestroy = function () {
    subs.forEach(function (sub) {
      return $ctrl.nats.unsubscribe(sub);
    });
  };
  /**
   * Navigate to user profile on clicking checked-in user
   */


  $ctrl.toUserProfile = function (user) {
    state.setCurrentUserId(user.id);
    return state.setPath('/profile');
  };
  /**
   * onUpdate event
   */


  function onUpdate(msg) {
    var _context;

    if (!$ctrl.users) return;

    var idx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $ctrl.users, msg.id);

    if (msg.devices <= 0 && idx >= 0) return _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default()(_context = $ctrl.users).call(_context, idx, 1);
    if (msg.devices > 0 && idx >= 0) return angular.extend($ctrl.users[idx], msg);
    if (msg.devices > 0 && idx < 0) return $ctrl.users.push(msg);
  }
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-users-checked-in.scss":
/*!**************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-users-checked-in.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/dashboard/widgets-admin/dash-admin-users-checked-in.tpl.html":
/*!******************************************************************************!*\
  !*** ./bundles/dashboard/widgets-admin/dash-admin-users-checked-in.tpl.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel class=\"dash-widget-admin-users-checked-in\"> <ff-panel-header> <ff-icon sense=\"user\"></ff-icon> <span translate=\"DASHBOARD.ADMIN.USERS_CHECKED_IN.HEADER\"></span> </ff-panel-header> <div> <span ng-if=\"!$ctrl.users.length\" class=\"animate-collapse\" translate=\"DASHBOARD.ADMIN.USERS_CHECKED_IN.EMPTY\"></span> <ff-row ng-repeat=\"user in $ctrl.users\" class=\"ff-clickable animate-collapse\" ng-click=\"$ctrl.toUserProfile(user)\" ff-dim title=\"{{'DASHBOARD.ADMIN.USERS_CHECKED_IN.NAVIGATE_TITLE' | translate}}\"> <ff-static class=\"dash-avatar\"> <ff-img ff-src=\"{{::user.photo}}\" ng-if=\"::user.photo\" ff-alt=\"{{::user.name}}\"></ff-img> <i class=\"fa fa-user\" ng-if=\"::!user.photo\"></i> </ff-static> <ff-static flex=\"0 0 30px\" class=\"ff-center\" style=\"z-index:2\"> <span class=\"badge\" ng-class=\"::userRoles[user.role].color\" ng-click=\"$event.stopPropagation()\" title=\"\"> {{user.devices}} <ff-tip class=\"text-nowrap\" ng-class=\"::userRoles[user.role].color\" style=\"min-width:60px\"> <div> <span class=\"hint-label\">{{'GLOBAL.ROLE' | translate}}:</span> {{::userRoles[user.role].name}} </div> <div> <span class=\"hint-label\">{{'DASHBOARD.ADMIN.USERS_CHECKED_IN.DEVICES' | translate}}:</span> {{user.devices}} </div> </ff-tip> </span> </ff-static> <ff-static ff-bind=\"::helper.join([user.company, user.name], ', ')\"></ff-static> <ff-static> <a href=\"mailto:{{::user.email}}\" ng-bind=\"::user.email\" ng-click=\"$event.stopPropagation()\" title=\"\"></a> </ff-static> </ff-row> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-general.directive.js":
/*!******************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-general.directive.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_services_usage_usage_tracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/usage/usage-tracking.service */ "./shared/services/usage/usage-tracking.service.js");



/**
 * dashGeneral directive - general widget for user dashboard
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.dashGeneral', ['deskworks.dashboard.service', 'deskworks.setup.service', 'deskworks.inventory.product.service', shared_services_usage_usage_tracking_service__WEBPACK_IMPORTED_MODULE_2__["default"].name]).directive('dashGeneral', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-user/dash-general.tpl.html',
    controller: 'DashGeneralCtrl as $ctrl',
    bindToController: {
      settings: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashGeneralCtrl', ["$scope", "$q", "$filter", "state", "helper", "dwAlerts", "userProfileService", "dashboardService", "UsageTracking", "productService", function ($scope, $q, $filter, state, helper, dwAlerts, userProfileService, dashboardService, UsageTracking, productService) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    var $user = userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to load user profile.');
    }).then(function (result) {
      $ctrl.user = result;
      angular.forEach($ctrl.user.creditCards, function (cc) {
        // find default payment method and check its expiry date
        if (cc.id === $ctrl.user.paymentMethodId) {
          $ctrl.defaultPaymentMethod = cc;
          var expiry = $filter('toDate')($ctrl.defaultPaymentMethod.expiry);

          if (expiry - moment() < 3600000 * 24 * 30) {
            if (expiry - moment() >= 0) $ctrl.showExpireWarning = true;else $ctrl.showExpiredWarning = true;
            cc.expiry = $filter('date')(expiry, 'mediumDate');
          }
        }
      });
    });
    var $usages = UsageTracking.query({
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId(),
      page: 1,
      pageSize: 1
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query usage tracking.');
    });
    var $products = productService.getProducts().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query products.');
    });
    $q.all({
      usages: $usages,
      products: $products
    }).then(function (result) {
      var usages = result.usages,
          products = result.products;
      $ctrl.closingBalance = usages.days.length && usages.days[0].closingBalance || [];
      $ctrl.closingBalance.forEach(function (usage) {
        usage.productName = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(products).call(products, function (p) {
          return p.id === usage.productId;
        }) || {}).name;
        usage.amount = angular.isDefined(usage.hours) ? $filter('hours')(usage.hours) : $filter('ncurrency')(usage.amount);
      });
    }); // $q.all([$user, $usages, $products])
    //   .finally(() => $scope.$broadcast('dwWidget:SpinStop'));
  };
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-general.tpl.html":
/*!**************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-general.tpl.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header> <ff-icon sense=\"list\"></ff-icon> <span translate=\"DASHBOARD.USER.GENERAL_INFO.HEADER\"></span> </ff-panel-header> <div ff-dim=\"!$ctrl.user || !$ctrl.closingBalance\"> <span translate=\"GLOBAL.NONE\" ng-if=\"!$ctrl.closingBalance.length && !$ctrl.showExpireWarning && !$ctrl.showExpiredWarning\"></span> <ff-row ng-repeat=\"rec in $ctrl.closingBalance\" class=\"animate-collapse\"> <ff-static><span> <ff-icon sense=\"info\"></ff-icon> <span ng-if=\"rec.typeId !== 'reservation'\" translate=\"DASHBOARD.USER.GENERAL_INFO.PASS_BALANCE\" translate-values=\"{{rec}}\"></span> <span ng-if=\"rec.typeId === 'reservation'\" translate=\"DASHBOARD.USER.GENERAL_INFO.CREDIT_BALANCE\" translate-values=\"{{rec}}\"></span> </span></ff-static> </ff-row> <ff-row ng-if=\"$ctrl.showExpireWarning\" class=\"animate-collapse\"> <ff-static><span> <ff-icon sense=\"warning\" class=\"text-danger\"></ff-icon> <span translate=\"DASHBOARD.USER.GENERAL_INFO.CC_DUE_TO_EXPIRE\" translate-values=\"{ date: $ctrl.defaultPaymentMethod.expiry }\"></span> </span></ff-static> </ff-row> <ff-row ng-if=\"$ctrl.showExpiredWarning\" class=\"animate-collapse\"> <ff-static><span> <ff-icon sense=\"warning\" class=\"text-danger\"></ff-icon> <span translate=\"DASHBOARD.USER.GENERAL_INFO.CC_HAS_EXPIRED\" translate-values=\"{ date: $ctrl.defaultPaymentMethod.expiry }\"></span> </span></ff-static> </ff-row> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-members-checked-in.directive.js":
/*!*****************************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-members-checked-in.directive.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dash_members_checked_in_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-members-checked-in.scss */ "./bundles/dashboard/widgets-user/dash-members-checked-in.scss");
/* harmony import */ var _dash_members_checked_in_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dash_members_checked_in_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/dw-modal/dw-modal.service */ "./shared/dw-modal/dw-modal.service.js");





/**
 * dashMembersCheckedIn directive - checked-in members widget for user dashboard
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.dashMembersCheckedIn', ['deskworks.CheckedInMembers', 'deskworks.OurMemberModalCtrl', shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_4__["default"].name]).directive('dashMembersCheckedIn', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-user/dash-members-checked-in.tpl.html',
    controller: 'DashMembersCheckedInCtrl as $ctrl',
    bindToController: {
      nats: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        return helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashMembersCheckedInCtrl', ["$scope", "$timeout", "state", "helper", "dwAlerts", "dwModal", "CheckedInMembers", function ($scope, $timeout, state, helper, dwAlerts, dwModal, CheckedInMembers) {
  var $ctrl = this;
  $scope.helper = helper;
  var subs = [];
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    CheckedInMembers.query(state.getCurrentCenterId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query checked-in members.');
    }).then(function (users) {
      $ctrl.users = users;
      subs.push($ctrl.nats.subscribe('API.:siteId.centers.:centerId.checked-in-members.create', onCreate));
      subs.push($ctrl.nats.subscribe('API.:siteId.centers.:centerId.checked-in-members.delete', onDelete));
    });
  };
  /**
   * $onDestroy
   */


  $ctrl.$onDestroy = function () {
    subs.forEach(function (sub) {
      return $ctrl.nats.unsubscribe(sub);
    });
  };
  /**
   * View member details
   */


  $ctrl.view = function (member) {
    dwModal.show({
      scope: $scope,
      templateUrl: 'members/our-members/our-member-modal.tpl.html',
      controller: 'OurMemberModalCtrl',
      inputs: {
        member: member
      }
    });
  };
  /**
   * onCreate event
   */


  function onCreate(msg) {
    if (!$ctrl.users) return;

    var user = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $ctrl.users, msg.id);

    if (user) return angular.extend(user, msg);
    $ctrl.users.push(msg);
  }
  /**
   * onDelete event
   */


  function onDelete(msg) {
    var _context;

    if (!$ctrl.users) return;

    var idx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.users, msg.id);

    if (idx >= 0) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context = $ctrl.users).call(_context, idx, 1);
  }
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-members-checked-in.scss":
/*!*********************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-members-checked-in.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-members-checked-in.tpl.html":
/*!*************************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-members-checked-in.tpl.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel class=\"dash-widget-members-checked-in ff-no-frame\"> <ff-panel-header> <ff-icon sense=\"user\"></ff-icon> <span translate=\"DASHBOARD.ADMIN.USERS_CHECKED_IN.HEADER\"></span> </ff-panel-header> <div ff-dim=\"!$ctrl.users\"> <div class=\"ff-grid\"> <ff-row class=\"ff-clickable animate-collapse\" ff-dim flex=\"{sm: '0 0 50%'}\" ng-repeat=\"user in $ctrl.users\" ng-click=\"$ctrl.view(user)\"> <ff-static class=\"dash-avatar\"> <ff-img ff-src=\"{{::user.photo}}\" ng-if=\"::user.photo\" ff-alt=\"{{::user.name}}\"></ff-img> <i class=\"fa fa-user\" ng-if=\"::!user.photo\"></i> </ff-static> <ff-static> <div> <div><strong>{{::user.name}}</strong></div> <small>{{::user.company}}</small> </div> </ff-static> </ff-row> </div> <div ng-if=\"$ctrl.users && !$ctrl.users.length\" class=\"animate-collapse ff-no-frame\"> <span translate=\"DASHBOARD.ADMIN.USERS_CHECKED_IN.EMPTY\"></span> </div> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-message-board.directive.js":
/*!************************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-message-board.directive.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");





/**
 * dashMessageBoard directive - brief messages widget for user dashboard
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.dashMessageBoard', ['deskworks.MessageBoard', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name]).directive('dashMessageBoard', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-user/dash-message-board.tpl.html',
    controller: 'DashMessageBoardCtrl as $ctrl',
    bindToController: {
      nats: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        return helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashMessageBoardCtrl', ["$scope", "$timeout", "dwAlerts", "state", "helper", "MessageBoard", function ($scope, $timeout, dwAlerts, state, helper, MessageBoard) {
  var $ctrl = this;
  var subs = [];
  var maxMessages = 10;
  var maxLength = 140;

  $ctrl.$onInit = function () {
    MessageBoard.query({
      centerId: state.getCurrentCenterId(),
      limit: 10
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query messages.');
    }).then(function (messages) {
      $ctrl.messages = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(messages).call(messages, cropMsgText);

      if (!subs.length) {
        subs.push($ctrl.nats.subscribe('API.:siteId.centers.:centerId.message-board.messages.create', onCreate));
        subs.push($ctrl.nats.subscribe('API.:siteId.centers.:centerId.message-board.messages.update', onUpdate));
        subs.push($ctrl.nats.subscribe('API.:siteId.centers.:centerId.message-board.messages.delete', onDelete));
      }
    }).catch(function () {
      return $ctrl.messages = [];
    });
  };
  /**
   * Message click handler
   */


  $ctrl.toMsg = function (msg) {
    return state.setPath('/message-board');
  };
  /**
   * Crop message to maxLength
   */


  function cropMsgText(msg) {
    if (msg.text.length > maxLength) {
      msg.text = msg.text.substr(0, maxLength);
      msg.crop = true;
    }

    return msg;
  }
  /**
   * Create message event
   */


  function onCreate(msg) {
    var _context;

    msg = MessageBoard.deserialize(msg);
    cropMsgText(msg);

    var message = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.messages, msg.id);

    if (message) return angular.extend(message, msg);
    $ctrl.messages.unshift(msg);
    if ($ctrl.messages.length > maxMessages) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context = $ctrl.messages).call(_context, maxMessages, $ctrl.messages.length - maxMessages);
  }
  /**
   * Update message event
   */


  function onUpdate(msg) {
    cropMsgText(msg);

    var message = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.messages, msg.id);

    if (message) return angular.extend(message, msg);
  }
  /**
   * Delete message event
   */


  function onDelete(msg) {
    var _context2;

    var idx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_3___default()(helper).call(helper, $ctrl.messages, msg.id);

    if (idx >= 0) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = $ctrl.messages).call(_context2, idx, 1);
  }
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-message-board.tpl.html":
/*!********************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-message-board.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header> <div class=\"ff-grid gutter-v-half gutter-h-half\"> <span flex=\"auto\"><ff-icon sense=\"message\"></ff-icon> <span translate=\"DASHBOARD.USER.MESSAGE_BOARD.HEADER\"></span></span> <ff-btn flex=\"none\" sense=\"edit\" size=\"xs\" ff-click=\"$ctrl.toMsg()\" style=\"margin:-.6rem 0 .4rem 0\" title=\"{{'DASHBOARD.USER.MESSAGE_BOARD.BTN_POST' | translate}}\"></ff-btn> </div> </ff-panel-header> <div class=\"message-board\" ff-dim=\"!$ctrl.messages\"> <ff-row ng-repeat=\"msg in $ctrl.messages\" class=\"msg-container animate-collapse ff-clickable\" ng-click=\"$ctrl.toMsg(msg)\"> <div class=\"msg-ava\"> <ff-img ff-src=\"{{::msg.author.photo}}\" ng-if=\"::msg.author.photo\" ff-alt=\"{{::msg.author.fullName || 'anonymous'}}\"></ff-img> <i class=\"fa fa-user\" ng-if=\"::!msg.author.photo\"></i> </div> <div> <div> <div class=\"msg-meta\"> <span class=\"msg-name\">{{::msg.author.fullName || 'anonymous'}}</span> <span class=\"msg-time\" nice-time=\"::msg.createdAt\"></span> <span class=\"msg-date\">{{::msg.createdAt | date: 'mediumDate'}}</span> </div> <div class=\"msg-body\"> {{msg.text}} <more ng-if=\"msg.crop\" translate=\"DASHBOARD.USER.MESSAGE_BOARD.MORE\"></more> </div> </div> </div> </ff-row> </div> <div ng-if=\"$ctrl.messages && !$ctrl.messages.length\"><span translate=\"GLOBAL.NONE\"></span></div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-outstanding-charges.directive.js":
/*!******************************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-outstanding-charges.directive.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);



/**
 * dashOutstandingCharges directive - Outstanding Charges widget for dashboard
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.dashOutstandingCharges', ['deskworks.purchase.service']).directive('dashOutstandingCharges', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-user/dash-outstanding-charges.tpl.html',
    controller: 'DashOutstandingChargesCtrl as $ctrl',
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        return helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashOutstandingChargesCtrl', ["$scope", "$q", "$timeout", "dwAlerts", "state", "helper", "purchaseService", function ($scope, $q, $timeout, dwAlerts, state, helper, purchaseService) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    purchaseService.getPurchases(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query non-recurring charges.');
    }).then(function (result) {
      var _context, _context2;

      return $q.all(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = result.open).call(_context2, result.credit)).call(_context, function (order) {
        return purchaseService.get(state.getCurrentCenterId(), state.getCurrentUserId(), order.id).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get purchase for order #' + order.id + '.');
        }).then(function (result) {
          var _context3;

          $ctrl.charges = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = $ctrl.charges || []).call(_context3, result.items);
        });
      })).then(function () {
        return $ctrl.charges = $ctrl.charges || [];
      });
    });
  };
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-outstanding-charges.tpl.html":
/*!**************************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-outstanding-charges.tpl.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header> <ff-icon sense=\"billing\"></ff-icon> <span translate=\"DASHBOARD.USER.OUTSTANDING_CHARGES.HEADER\"></span> </ff-panel-header> <div ff-dim=\"!$ctrl.charges\"> <ff-header class=\"animate-collapse\" ng-if=\"$ctrl.charges.length\"> <ff-row class=\"ff-small\"> <span flex=\"0 0 40px\" class=\"ff-center show-xs\" translate=\"DASHBOARD.USER.OUTSTANDING_CHARGES.QUANTITY\"></span> <span flex=\"0 1 280px\" translate=\"DASHBOARD.USER.OUTSTANDING_CHARGES.NAME\"></span> <span flex=\"1 1 450px\" class=\"show-sm\" translate=\"DASHBOARD.USER.OUTSTANDING_CHARGES.DESCRIPTION\"></span> <span flex=\"0 0 75px\" class=\"ff-right show-xs\" translate=\"DASHBOARD.USER.OUTSTANDING_CHARGES.PRICE\"></span> <span flex=\"0 0 75px\" class=\"ff-right\" translate=\"DASHBOARD.USER.OUTSTANDING_CHARGES.TOTAL\"></span> </ff-row> </ff-header> <ff-row ng-repeat=\"charge in $ctrl.charges\" class=\"animate-collapse\"> <ff-static flex=\"0 0 40px\" ff-bind=\"charge.quantity\" class=\"ff-center show-xs\"></ff-static> <ff-static flex=\"0 1 280px\" ff-bind=\"charge.name\"></ff-static> <ff-static flex=\"1 1 450px\" class=\"show-sm\" ff-bind=\"charge.description\"></ff-static> <ff-static flex=\"0 0 75px\" ff-bind=\"charge.price | ncurrency\" class=\"ff-right show-xs\"></ff-static> <ff-static flex=\"0 0 75px\" ff-bind=\"charge.amount | ncurrency\" class=\"ff-right\"></ff-static> </ff-row> <div ng-if=\"$ctrl.charges && !$ctrl.charges.length\" class=\"animate-collapse ff-no-frame\"> <span translate=\"GLOBAL.NONE\"></span> </div> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-recurring-charges.directive.js":
/*!****************************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-recurring-charges.directive.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);


/**
 * dashRecurringCharges directive - Recurring Charges widget for dashboard
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.recurringCharges', ['deskworks.recurringCharge.service']).directive('dashRecurringCharges', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-user/dash-recurring-charges.tpl.html',
    controller: 'DashRecurringChargesCtrl as $ctrl',
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        return helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashRecurringChargesCtrl', ["$scope", "dwAlerts", "state", "helper", "recurringChargeService", function ($scope, dwAlerts, state, helper, recurringChargeService) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    recurringChargeService.query(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query recurring charges.');
    }).then(function (result) {
      $ctrl.charges = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(result).call(result, function (charge) {
        return charge.status.id === 'active';
      });
    });
  };
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-recurring-charges.tpl.html":
/*!************************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-recurring-charges.tpl.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header> <ff-icon sense=\"billing\"></ff-icon> <span translate=\"DASHBOARD.USER.RECURRING_CHARGES.HEADER\"></span> </ff-panel-header> <div ff-dim=\"!$ctrl.charges\"> <ff-header class=\"animate-collapse\" ng-if=\"$ctrl.charges.length\"> <ff-row class=\"ff-small\"> <span flex=\"0 0 40px\" class=\"ff-center show-xs\" translate=\"DASHBOARD.USER.RECURRING_CHARGES.QUANTITY\"></span> <span flex=\"0 1 280px\" translate=\"DASHBOARD.USER.RECURRING_CHARGES.NAME\"></span> <span flex=\"1 1 400px\" class=\"show-sm\" translate=\"DASHBOARD.USER.RECURRING_CHARGES.DESCRIPTION\"></span> <span flex=\"1 1 130px\" class=\"ff-right\" translate=\"DASHBOARD.USER.RECURRING_CHARGES.CHARGE_DATE\"></span> <span flex=\"1 0 70px\" class=\"ff-right\" translate=\"DASHBOARD.USER.RECURRING_CHARGES.TOTAL\"></span> </ff-row> </ff-header> <ff-row ng-repeat=\"charge in $ctrl.charges\" class=\"animate-collapse\"> <ff-static flex=\"0 0 40px\" ff-bind=\"charge.quantity\" class=\"ff-center show-xs\"></ff-static> <ff-static flex=\"0 1 280px\" ff-bind=\"charge.productName\"></ff-static> <ff-static flex=\"1 1 400px\" class=\"show-sm\" ff-bind=\"charge.description\"></ff-static> <ff-static flex=\"1 1 130px\" ff-bind=\"charge.nextBilled | date:'mediumDate'\" class=\"ff-right\"></ff-static> <ff-static flex=\"1 0 70px\" ff-bind=\"charge.total | ncurrency\" class=\"ff-right\"></ff-static> </ff-row> <div ng-if=\"$ctrl.charges && !$ctrl.charges.length\" class=\"animate-collapse ff-no-frame\"> <span translate=\"GLOBAL.NONE\"></span> </div> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-upcoming-reservations.directive.js":
/*!********************************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-upcoming-reservations.directive.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");

/**
 * dashUpcomingReservations directive - Upcoming Reservation widget for dashboard
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.upcomingReservations', ['deskworks.reservationService', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name]).directive('dashUpcomingReservations', ["helper", function (helper) {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: 'element',
    templateUrl: 'widgets-user/dash-upcoming-reservations.tpl.html',
    controller: 'DashUpcomingReservationsCtrl as $ctrl',
    bindToController: {
      settings: '<'
    },
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      var self = this;
      $transclude(function () {
        helper.transcludeElement($scope, $element, $attrs, self.templateUrl, self.bindToController);
      });
    }
  };
}]).controller('DashUpcomingReservationsCtrl', ["$scope", "dwAlerts", "state", "helper", "reservationService", function ($scope, dwAlerts, state, helper, reservationService) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    var params = {
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId(),
      from: moment()
    };
    reservationService.query(params).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query reservations.');
    }).then(function (result) {
      return $ctrl.reservations = result;
    });
  };
}]));

/***/ }),

/***/ "./bundles/dashboard/widgets-user/dash-upcoming-reservations.tpl.html":
/*!****************************************************************************!*\
  !*** ./bundles/dashboard/widgets-user/dash-upcoming-reservations.tpl.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header> <ff-icon sense=\"reservation\"></ff-icon> <span translate=\"DASHBOARD.USER.UPCOMING_RESERVATIONS.HEADER\"></span> </ff-panel-header> <div ff-dim=\"!$ctrl.reservations\"> <ff-header class=\"animate-collapse\" ng-if=\"$ctrl.reservations.length\"> <ff-row class=\"ff-small\"> <span flex=\"0 1 120px\" class=\"ff-right\" translate=\"DASHBOARD.USER.UPCOMING_RESERVATIONS.DATE\"></span> <span flex=\"0 1 160px\" class=\"ff-center\" translate=\"DASHBOARD.USER.UPCOMING_RESERVATIONS.TIME\"></span> <span flex=\"1 1 230px\" translate=\"DASHBOARD.USER.UPCOMING_RESERVATIONS.SPACE\"></span> <span flex=\"0 1 100px\" class=\"ff-center\" translate=\"DASHBOARD.USER.UPCOMING_RESERVATIONS.ACCESS_CODE\" ng-if=\"$ctrl.settings.enableAccessCodes\"></span> </ff-row> </ff-header> <ff-row ng-repeat=\"reservation in $ctrl.reservations\" class=\"animate-collapse\"> <ff-static flex=\"0 1 120px\" class=\"ff-right\" ff-bind=\"reservation.from | date:'mediumDate'\"></ff-static> <ff-static flex=\"0 1 160px\" class=\"ff-center\"> <span><span nice-time=\"reservation.from\"></span> - <span nice-time=\"reservation.to\"></span></span> </ff-static> <ff-static flex=\"1 1 230px\" ff-bind=\"reservation.reservationUnitName\"></ff-static> <ff-static flex=\"0 1 100px\" class=\"ff-center\" ff-bind=\"reservation.accessCode\" ng-if=\"$ctrl.settings.enableAccessCodes\"></ff-static> </ff-row> <div ng-if=\"$ctrl.reservations && !$ctrl.reservations.length\" class=\"animate-collapse ff-no-frame\"> <span translate=\"GLOBAL.NONE\"></span> </div> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/services/usage/opts-credit-type.service.js":
/*!***********************************************************!*\
  !*** ./shared/services/usage/opts-credit-type.service.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Usage -> View Usage -> Source
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsCreditType', []).factory('optsCreditType', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 'reservation',
    _name: 'USAGE_TRACKING.CREDIT_TYPE.RESERVATION'
  }, {
    id: 'pass',
    _name: 'USAGE_TRACKING.CREDIT_TYPE.PASS'
  }, {
    id: 'bucket',
    _name: 'USAGE_TRACKING.CREDIT_TYPE.BUCKET'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $translate.instant(opt._name);
    });
  }

  return opts;
}]));

/***/ }),

/***/ "./shared/services/usage/opts-usage-source.service.js":
/*!************************************************************!*\
  !*** ./shared/services/usage/opts-usage-source.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Usage -> View Usage -> Source
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsUsageSource', []).factory('optsUsageSource', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 'reservation',
    _name: 'USAGE_TRACKING.SOURCE.RESERVATION'
  }, {
    id: 'network',
    _name: 'USAGE_TRACKING.SOURCE.NETWORK'
  }, {
    id: 'manual',
    _name: 'USAGE_TRACKING.SOURCE.MANUAL'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $translate.instant(opt._name);
    });
  }

  return opts;
}]));

/***/ }),

/***/ "./shared/services/usage/usage-tracking.service.js":
/*!*********************************************************!*\
  !*** ./shared/services/usage/usage-tracking.service.js ***!
  \*********************************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_services_usage_opts_usage_source_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/usage/opts-usage-source.service */ "./shared/services/usage/opts-usage-source.service.js");
/* harmony import */ var shared_services_usage_opts_credit_type_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/usage/opts-credit-type.service */ "./shared/services/usage/opts-credit-type.service.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.UsageTracking', ['ngResource', 'deskworks.config', 'datesDeserializer', shared_services_usage_opts_usage_source_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_services_usage_opts_credit_type_service__WEBPACK_IMPORTED_MODULE_9__["default"].name]).factory('UsageTracking', ["$resource", "$filter", "$timeout", "deskworksConfig", "helper", "datesDeserializer", "optsUsageSource", "optsCreditType", function ($resource, $filter, $timeout, deskworksConfig, helper, datesDeserializer, optsUsageSource, optsCreditType) {
  var desDates = datesDeserializer(['days.date', 'days.usages.from', 'days.usages.to']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/usage-tracking/:usageId'), {}, {
    query: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    /**
     * @param params.centerId
     * @param params.userId
     * @param params.page
     * @param params.pageSize
     * @returns {*}
     */
    query: function query(params) {
      return res.query(_objectSpread({
        page: 1,
        pageSize: 20
      }, params)).$promise.then(function (result) {
        angular.forEach(result.days, function (day) {
          day.usages.forEach(function (usage) {
            usage.sourceName = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default()(optsUsageSource).call(optsUsageSource, function (i) {
              return i.id === usage.sourceId;
            }) || {}).name || usage.sourceId;
          });
          day.usageAmount = helper.round(day.usageTotals.reduce(function (sum, usage) {
            return +usage.amount + sum;
          }, 0));
          day.appliedAmount = helper.round(day.creditsApplied.reduce(function (sum, credit) {
            return +credit.amount + sum;
          }, 0));
          setCreditType(day.openingBalance);
          setCreditType(day.creditsApplied);
          setCreditType(day.closingBalance);
        });
        return result;
      });
    },

    /**
     * @param params.centerId
     * @param params.userId
     * @param params.usageId
     * @returns {*}
     */
    delete: function _delete(params) {
      return res.delete(params).$promise;
    }
  };

  function setCreditType(credits) {
    credits.forEach(function (credit) {
      if (angular.isDefined(credit.passes)) {
        credit.typeId = 'pass';
      } else if (angular.isDefined(credit.bucketPasses)) {
        credit.typeId = 'bucket';
        credit.passes = credit.bucketPasses;
        delete credit.bucketPasses;
      } else credit.typeId = 'reservation';

      credit.typeName = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default()(optsCreditType).call(optsCreditType, function (i) {
        return i.id === credit.typeId;
      }) || {}).name;
    });
  }
}]));

/***/ })

}]);
//# sourceMappingURL=dashboard~._b.js.map?_rev=792c41cd98818fc3759d