(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main~._c"],{

/***/ "./common/sidebar/sidebar-tasks.service.js":
/*!*************************************************!*\
  !*** ./common/sidebar/sidebar-tasks.service.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Sidebar Tasks service - list of known sidebar tasks
 */
angular.module('deskworks.sidebarTasks.service', []).factory('sidebarTasks', function () {
  'use strict';

  return ['widget-check-in', 'widget-manual-check-in', // Members
  'profile', 'new-member', 'new-user', 'our-members', 'floor-plans-community', 'floor-plans-reservation', // Usage
  'usage-entry', 'member-usage', 'usage-tracking', 'member-log', 'manual-check-in-log', // Reservations
  'new-reservation', 'simple-reservation', 'reservation-calendar', 'reservations', 'equipment-reservation', // Billing
  'billing-profiles', 'purchases', 'recurring-charges', 'member-statement', 'generate-invoice', 'termination-request', // Accounting
  'bulk-invoicing', 'bulk-charges', 'bulk-payments-assignment', 'printer-usage', 'invoice-log', 'accounting-periods', // Reports
  'analytics-dashboard', 'membership-report', 'recurring-billing-report', 'recurring-billing-churn-report', 'income-report', 'income-by-item-report', 'accounts-receivable-report', 'deposit-transaction-report', 'deposit-and-tax-report', 'credit-balance-report', 'reservation-report', 'mailbox-report', 'security-deposit-report', 'availability-report', 'member-usage-report', 'check-in-report', 'reservation-utilization-report', 'write-off-report', 'reservation-usage-report', 'passport-reservation-usage-report', 'rent-roll-report', 'pass-usage-report', 'revenue-forecast-report', 'payment-reconciliation-report', 'recurring-billing-change-report', // Inventory
  'pricelists', 'products', 'membership-types', 'reservation-types', 'reservation-units', 'product-categories', 'floor-plans', 'discount-codes', // Communications
  'email-all-members', 'email-site-members', 'message-board', 'splash-page', // System
  'tasks', 'system-emails', 'access-cards', 'centers', 'administrators', 'lead-sources', // Notifications
  'setup/bulk-invoices', 'setup/recurring-invoices', 'setup/expired-card-email', 'setup/declined-card-email', 'setup/welcome-letter', 'setup/reservation-confirmation', 'setup/reservation-reminder', 'setup/cal-sync-error-email', 'setup/passes-used-up-email', 'setup/plan-passes-used-up-notice', 'setup/bucket-used-up-email', 'setup/renewal-notice-email', 'notifications/receipt-email', 'notifications/message-board-notices', 'notifications/startup-info', 'notifications/reservation-follow-up-survey', 'notifications/refund-notice', 'desk-tablet-template', 'notifications/receipt-page', // Setup
  'setup/settings', 'setup/api-settings', 'setup/printer-usage-settings', 'setup/import', 'banks', 'owners-regions', 'user-fields', 'reservation-fields', 'integrations-setup', 'reservation-tablet-setup', 'quick-books-errors', 'ezeep-errors', 'white-label-settings'];
});

/***/ }),

/***/ "./common/sidebar/sidebar.component.js":
/*!*********************************************!*\
  !*** ./common/sidebar/sidebar.component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_dw_check_in_widget_dw_check_in_widget_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/dw-check-in-widget/dw-check-in-widget.directive */ "./shared/dw-check-in-widget/dw-check-in-widget.directive.js");
/* harmony import */ var shared_dw_check_in_widget_dw_manual_check_in_widget_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/dw-check-in-widget/dw-manual-check-in-widget.directive */ "./shared/dw-check-in-widget/dw-manual-check-in-widget.directive.js");
/* harmony import */ var shared_dw_controls_dw_select_user_dw_select_user_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/dw-controls/dw-select-user/dw-select-user.directive */ "./shared/dw-controls/dw-select-user/dw-select-user.directive.js");
/* harmony import */ var shared_dw_controls_dw_select_profile_dw_select_profile_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/dw-controls/dw-select-profile/dw-select-profile.directive */ "./shared/dw-controls/dw-select-profile/dw-select-profile.directive.js");
/* harmony import */ var shared_dw_controls_dw_select_center_dw_select_center_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/dw-controls/dw-select-center/dw-select-center.directive */ "./shared/dw-controls/dw-select-center/dw-select-center.directive.js");










/**
 * Deskworks Sidebar component
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.sidebar', ['deskworks.UserTasks.service', 'deskworks.signInLink', 'flexForms.ngCollapse', 'deskworks.sidebarTasks.service', 'deskworks.appDim', shared_dw_check_in_widget_dw_check_in_widget_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_dw_check_in_widget_dw_manual_check_in_widget_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_dw_controls_dw_select_user_dw_select_user_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_dw_controls_dw_select_profile_dw_select_profile_directive__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_dw_controls_dw_select_center_dw_select_center_directive__WEBPACK_IMPORTED_MODULE_9__["default"].name]).directive('sidebar', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'sidebar/sidebar.tpl.html',
    controller: 'SidebarCtrl as $ctrl'
  };
}).controller('SidebarCtrl', ["$scope", "$rootScope", "$element", "$route", "$timeout", "state", "helper", "routeHelper", "UserTasks", "appDim", function ($scope, $rootScope, $element, $route, $timeout, state, helper, routeHelper, UserTasks, appDim) {
  var $ctrl = this;
  /**
  * $onInit
  */

  $ctrl.$onInit = function () {
    $ctrl.state = state;
    bindRouteEvents();
    routeHelper.auth(null).finally(function () {
      fetchUserTasks().finally(bindEvents);
    }).catch(angular.noop); // watch for current menu item and un-collapse current group

    $scope.$watch('$ctrl.currentTask', activateGroup); // re-interpolate task.directUrl for all tasks in all groups

    $scope.$watchGroup(['$ctrl.tasks', state.getCurrentCenterId, state.getCurrentUserId], interpolateDirectUrls); // watch for tasks[].open and notify dwCheckInWidget to collapse if at least accordion is open

    $scope.$watchCollection(function () {
      var _context;

      return $ctrl.tasks ? _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.tasks).call(_context, function (task) {
        return task.open;
      }) : [];
    }, collapseCheckIn);
  };
  /**
   * $onDestroy
   */


  $ctrl.$onDestroy = function () {
    unbindRouteEvents();
    unbindEvents();
  };
  /**
   * $postLink
   */


  $ctrl.$postLink = function () {
    $element.addClass('sidebar');
  };
  /**
   * Open/close tasks group, closes all other groups
   */


  $ctrl.toggleGroup = function (group) {
    var status = group.open;
    $ctrl.tasks.forEach(function (gr) {
      gr.open = false;
    });
    group.open = !status;
  };
  /**
   * Navigate sidebar task
   */


  $ctrl.navigate = function ($event, uTask) {
    if (uTask.directUrl) return; // if task is a direct url, let the sidebar item to be a simple link

    $event.preventDefault();
    $event.stopPropagation();
    if (uTask.dashboard) uTask.url = state.isLoggedAdmin() ? '/dashboard-admin' : '/dashboard';
    if (!uTask.url) return;

    if (uTask.url === state.getPath()) {
      $route.reload(); // force route reload when clicked current item
    } else {
      state.resetParams(); // Reset state params

      state.setPath(uTask.url);
    }

    appDim(true);
  };
  /**
   * Unselect current user
   */


  $ctrl.unselectUser = function () {
    $ctrl.state.setCurrentUser(null);
    appDim(true);

    if ($route.current && $route.current.scope && $route.current.scope.backPath) {
      state.setPath($route.current.scope.backPath);
    } else {
      $route.reload();
    }
  };
  /**
   * Fetch user tasks
   */


  function fetchUserTasks() {
    if (!state.isLoggedAdmin()) {
      $ctrl.tasks = [];
      UserTasks.tasks = [];
    }

    return $timeout(function () {
      if (state.getLoggedUserId() && state.getCurrentCenterId()) {
        return UserTasks.query(state.getCurrentCenterId(), state.isMasterProfile() && state.getCurrentUserId()).then(function (tasks) {
          $ctrl.tasks = tasks;
          UserTasks.tasks = []; // flat user-tasks for readOnly check

          $ctrl.tasks.forEach(function (group) {
            var _context2;

            UserTasks.tasks = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = UserTasks.tasks).call(_context2, group.tasks);
          });
          activateGroup();
        });
      }
    });
  }
  /**
   * Watch for current menu item and un-collapse current accordion
   */


  function activateGroup() {
    if ($ctrl.currentTask && $ctrl.tasks && $ctrl.tasks.length) {
      var activated;
      $ctrl.tasks.forEach(function (group) {
        group.active = !!helper.findByKeyValue(group.tasks, 'url', $ctrl.currentTask);

        if (group.active) {
          activated = true;
          group.open = true;
          $timeout(function () {
            group.open = true;
          });
        }
      });
      return activated || $ctrl.currentTask === '/dashboard' || $ctrl.currentTask === '/sign-in' || $ctrl.currentTask === '/sign-out';
    }
  }
  /**
   * Watch for tasks[].open and notify dwCheckInWidget to collapse if at least accordion is open
   */


  function collapseCheckIn(opens) {
    if (opens.reduce(function (prev, curr) {
      return curr ? prev + 1 : prev;
    }, 0)) {
      $rootScope.$emit('SIDEBAR:ACCORD-COLLAPSED'); // at least one accordion is un-collapsed, notify dwCheckInWidget to collapse
    }
  }
  /**
   * Re-interpolate task.directUrl for all tasks in all groups
   */


  function interpolateDirectUrls() {
    angular.forEach($ctrl.tasks, function (group) {
      angular.forEach(group.tasks, function (task) {
        if (task.directUrl) task.directUrl = UserTasks.interpolateTaskUrl(task.url);
      });
    });
  }
  /**
   * Bind/unbind route events
   */


  function bindRouteEvents() {
    $ctrl.offRouteStart = $rootScope.$on('$routeChangeStart', function ($event, $next) {
      if ($next.$$route) $ctrl.pendingTask = '/' + $next.$$route.routeBranch;
    });
    $ctrl.offRouteSuccess = $rootScope.$on('$routeChangeSuccess', function () {
      $ctrl.currentTask = $ctrl.pendingTask;
      $ctrl.pendingTask = null;
      appDim(false);
    });
    $ctrl.offRouteError = $rootScope.$on('$routeChangeError', function () {
      $ctrl.pendingTask = null;
    });
  }

  function unbindRouteEvents() {
    $ctrl.offRouteStart();
    $ctrl.offRouteSuccess();
    $ctrl.offRouteError();
  }
  /**
   * Bind $rootScope events
   */


  function bindEvents() {
    $ctrl.offLogin = $rootScope.$on('LOGIN', fetchUserTasks);
    $ctrl.offLogout = $rootScope.$on('LOGOUT', fetchUserTasks);
    $ctrl.offRefresh = $rootScope.$on('SIDEBAR:REFRESH', fetchUserTasks);
    $ctrl.offCenter = $rootScope.$on('CHANGE-CENTER', fetchUserTasks);
    $ctrl.offCollapseAll = $rootScope.$on('SIDEBAR:ACCORD-COLLAPSE-ALL', function () {
      angular.forEach($ctrl.tasks, function (group) {
        group.open = false;
      });
    });
    $ctrl.offChangeUser = $rootScope.$on('CHANGE-USER', function () {
      if (state.isLoggedAdmin()) return;
      fetchUserTasks();
    });
  }

  function unbindEvents() {
    if ($ctrl.offLogin) $ctrl.offLogin();
    if ($ctrl.offLogout) $ctrl.offLogout();
    if ($ctrl.offRefresh) $ctrl.offRefresh();
    if ($ctrl.offCenter) $ctrl.offCenter();
    if ($ctrl.offCollapseAll) $ctrl.offCollapseAll();
    if ($ctrl.offChangeUser) $ctrl.offChangeUser();
  }
}]));

/***/ }),

/***/ "./common/sidebar/sidebar.tpl.html":
/*!*****************************************!*\
  !*** ./common/sidebar/sidebar.tpl.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<header role=\"banner\" aria-label=\"Logo\" class=\"sidebar-logo\" ng-if=\"!$app.hideSidebarHeader\"> <a href=\"{{wlLinks.homepageUrl}}\" title=\"{{wlLinks.companyName}}\" target=\"_blank\" rel=\"noopener\"> <img src=\"/api/v1/white-label/images/logo.png\" class=\"white-label-prefix\" alt=\"{{wlLinks.companyName}}\"> </a> </header> <div role=\"complementary\" aria-label=\"Selectors\" class=\"sidebar-selectors\" ng-if=\"$ctrl.state.getLoggedUserId()\"> <label class=\"center-selector sidebar-selector\" ng-show=\"$ctrl.state.getUserCenters().length > 1\"> <span translate=\"SIDEBAR.CURRENT_CENTER\"></span> <dw-select-center></dw-select-center> </label> <div class=\"user-selector sidebar-selector\" ng-if=\"$ctrl.state.isLoggedAdmin()\"> <span class=\"ff-row\"> <span flex=\"auto\" translate=\"SIDEBAR.CURRENT_USER\"></span> <ff-btn sense=\"resetUser\" size=\"xs\" title=\"{{'SIDEBAR.CURRENT_USER.UNSELECT.HINT' | translate}}\" ng-if=\"$ctrl.state.isUserSelected()\" ff-click=\"$ctrl.unselectUser()\"></ff-btn> </span> <dw-select-user title=\"{{'SIDEBAR.CURRENT_USER.HINT' | translate}}\"></dw-select-user> </div> <label class=\"dw-select-profile sidebar-selector\" ng-if=\"!$ctrl.state.isLoggedAdmin()\"></label> </div> <nav class=\"sidebar-body\" aria-label=\"{{'SIDEBAR.SIDEBAR' | translate}}\"> <div class=\"sidebar-body-inner\"> <ul class=\"sidebar-items ff-relative\"> <li ff-spin=\"'/dashboard' === $ctrl.pendingTask\" class=\"dash-sidebar\"> <a class=\"sidebar-item\" href=\"#/dashboard\" target=\"_blank\" rel=\"noopener\" ng-click=\"$ctrl.navigate($event, { dashboard: true })\" snap-close ng-class=\"{ active: $ctrl.currentTask === '/dashboard' }\"> <span translate=\"SIDEBAR.DASHBOARD\"></span> </a> </li> </ul> <div class=\"sidebar-groups\"> <div class=\"sidebar-group\" ng-repeat=\"group in $ctrl.tasks\" ng-if=\"group.tasks.length > 0\"> <h2 class=\"sidebar-group-header\" ng-class=\"{ active: group.active, open: group.open }\" ng-click=\"$ctrl.toggleGroup(group)\" ng-if=\"group.name\"> <span ng-bind=\"group.name || '[No Name]'\"></span> </h2> <ul class=\"sidebar-items\" ng-collapse=\"group.name && !group.open\" lazy-rendering=\"false\"> <li ng-repeat-start=\"task in group.tasks\" ff-spin=\"task.url === $ctrl.pendingTask\" ng-if=\"task.url !== '/widget-check-in' && task.url !== '/widget-manual-check-in'\"> <a class=\"sidebar-item\" ng-href=\"{{'#' + task.url}}\" target=\"_blank\" rel=\"noopener\" ng-if=\"!task.directUrl\" ng-class=\"{ active: $ctrl.currentTask === task.url, disabled: !task.url }\" ng-click=\"$ctrl.navigate($event, task)\" snap-close> <span ng-bind=\"task.name\"></span> </a> <a class=\"sidebar-item\" ng-href=\"{{task.directUrl}}\" target=\"{{task.target}}\" rel=\"{{task.rel}}\" ng-if=\"task.directUrl\" snap-close><span ng-bind=\"task.name\"></span></a> </li> <dw-check-in-widget ng-if=\"task.url === '/widget-check-in' && $ctrl.state.getCurrentCenterId() && $ctrl.state.isUserSelected()\"> </dw-check-in-widget> <dw-manual-check-in-widget ng-repeat-end ng-if=\"task.url === '/widget-manual-check-in' && $ctrl.state.getCurrentCenterId() && $ctrl.state.isUserSelected()\"> </dw-manual-check-in-widget> </ul> </div> </div> <ul class=\"sidebar-items\"> <li ng-if=\"$ctrl.state.isLoggedAdmin()\"> <a href=\"https://support.satellitedeskworks.com/\" target=\"_blank\" rel=\"noopener\" class=\"sidebar-item\"> <span translate=\"SIDEBAR.SUPPORT\"></span> </a> </li> <li ng-if=\"!$ctrl.state.isLoggedAdmin() && wlLinks.contactLinkUrl\"> <a href=\"{{wlLinks.contactLinkUrl}}\" target=\"_blank\" rel=\"noopener\" class=\"sidebar-item\"> <span translate=\"SIDEBAR.CONTACT\"></span> </a> </li> <li ff-spin=\"$ctrl.pendingTask === '/sign-in' || $ctrl.pendingTask === '/sign-out'\"> <sign-in-link active=\"{{$ctrl.currentTask === '/sign-in'}}\"></sign-in-link> </li> </ul> </div> </nav> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/sidebar/sign-in-link.directive.js":
/*!**************************************************!*\
  !*** ./common/sidebar/sign-in-link.directive.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Sing In / Sign Out link directive - generates link which automatically switches between Sign In / Sign Out modes
 */
angular.module('deskworks.signInLink', ['deskworks.state']).directive('signInLink', ["state", function (state) {
  return {
    template: '<a ng-href="{{state.getLoggedUserId() ? \'#/sign-out\' : \'#/sign-in\'}}"' + ' ng-click="signInOrOut($event)" ff-spin="spin" snap-close class="sidebar-item" ng-class="{ active: active }">' + '<span ng-if="!state.getLoggedUserId()" translate="SIDEBAR.SIGN_IN"></span>' + '<span ng-if="state.getLoggedUserId()" translate="SIDEBAR.SIGN_OUT"></span>' + '</a>',
    restrict: 'E',
    scope: true,
    link: function link($scope, $element, $attrs) {
      $scope.state = state;
      $attrs.$observe('active', function (val) {
        $scope.active = val === 'true';
      });
      /**
       * Sign In or Sign Out action
       */

      $scope.signInOrOut = function ($event) {
        $event.stopPropagation();
        $event.preventDefault();
        state.resetParams();
        state.setPath(state.getLoggedUserId() ? '/sign-out' : '/sign-in');
      };
    }
  };
}]);

/***/ }),

/***/ "./common/sign-in/dw-sign-in.directive.js":
/*!************************************************!*\
  !*** ./common/sign-in/dw-sign-in.directive.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dw_sign_in_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dw-sign-in.scss */ "./common/sign-in/dw-sign-in.scss");
/* harmony import */ var _dw_sign_in_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dw_sign_in_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * dwSignIn directive - sign-in/sign-up/restore-password form
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwSignIn', ['deskworks.helper', 'deskworks.state', 'ngStorage', 'deskworks.userProfile.service']).directive('dwSignIn', function () {
  return {
    restrict: 'EAC',
    scope: true,
    transclude: {
      extraButtons: '?extraButtons'
    },
    templateUrl: 'sign-in/dw-sign-in.tpl.html',
    controller: 'dwSignIn',
    controllerAs: 'dwSignIn',
    bindToController: {
      showSignUp: '<'
    }
  };
}).controller('dwSignIn', ["$scope", "$element", "$attrs", "$q", "$timeout", "$localStorage", "$translate", "helper", "state", "userProfileService", function ($scope, $element, $attrs, $q, $timeout, $localStorage, $translate, helper, state, userProfileService) {
  var dwSignIn = this; // restore 'Remember Me' status from local storage

  dwSignIn.rememberMe = angular.isDefined($localStorage.rememberMe) ? $localStorage.rememberMe : true;
  /**
   * Sign-in button handler
   */

  dwSignIn.signIn = function () {
    dwSignIn.error = null;
    dwSignIn.success = null;
    dwSignIn.info = $translate.instant('SIGN_IN.SIGNING_IN');
    return state.login(dwSignIn.login, dwSignIn.password, dwSignIn.rememberMe).then(function () {
      dwSignIn.info = $translate.instant('SIGN_IN.SUCCESS');
      $localStorage.rememberMe = dwSignIn.rememberMe; // save 'Remember Me' status to local storage

      $scope.$emit('dwSignIn:SignIn');
      return $timeout(5000);
    }).catch(function (err) {
      dwSignIn.info = null;
      dwSignIn.error = err.data && err.data.error || $translate.instant('SIGN_IN.INVALID_LOGIN_PASSWORD');
      return $q.reject(dwSignIn.error);
    });
  };
  /**
   * Forgot Password button handler
   */


  dwSignIn.forgotPassword = function (status) {
    dwSignIn.error = null;
    dwSignIn.info = null;
    dwSignIn.success = null;
    dwSignIn.restorePassword = status;
  };
  /**
   * Send Password button handler
   */


  dwSignIn.sendPassword = function () {
    dwSignIn.error = null;
    dwSignIn.info = $translate.instant('SIGN_IN.RESTORE_PASSWORD.SENDING');
    return userProfileService.restorePassword({
      email: dwSignIn.email
    }).then(function () {
      dwSignIn.info = null;
      dwSignIn.success = $translate.instant('SIGN_IN.RESTORE_PASSWORD.SUCCESS');
      dwSignIn.restorePassword = false;
    }).catch(function (err) {
      dwSignIn.info = null;
      dwSignIn.error = err.data && err.data.error || 'Failed to restore password.';
      return $q.reject(dwSignIn.error);
    });
  };
  /**
   * Sign Up button handler
   */


  dwSignIn.signUp = function () {
    $scope.$emit('dwSignIn:SignUp');
    return $timeout(10000);
  };
}]));

/***/ }),

/***/ "./common/sign-in/dw-sign-in.scss":
/*!****************************************!*\
  !*** ./common/sign-in/dw-sign-in.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/sign-in/dw-sign-in.tpl.html":
/*!********************************************!*\
  !*** ./common/sign-in/dw-sign-in.tpl.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"formSignIn\" class=\"sign-in\"> <h1 class=\"page-title\" ng-bind=\"dwSignIn.restorePassword ? ('SIGN_IN.RESTORE_PASSWORD.PAGE_TITLE' | translate) : state.getPageTitle()\"></h1> <div class=\"gutter-v\"> <ff-board> <ff-panel ng-if=\"!dwSignIn.restorePassword\"> <ff-header> <span ng-class=\"{ 'text-danger': dwSignIn.error }\"> {{dwSignIn.error || dwSignIn.success || dwSignIn.info || ('SIGN_IN.HINT' | translate)}} </span> </ff-header> <ff-row class=\"sign-up-block\" ng-if=\"dwSignIn.showSignUp\"> <span style=\"align-items:center\" translate=\"SIGN_IN.NO_ACCOUNT_YET\"></span> <ff-btn flex=\"0 0 auto\" sense=\"signup\" ff-click=\"dwSignIn.signUp()\"><span translate=\"SIGN_IN.BTN_SIGN_UP\"></span></ff-btn> </ff-row> <label class=\"ff-row\"> <ff-label flex=\"0 0 80px\"><span translate=\"GLOBAL.LOGIN\"></span></ff-label> <ff-login name=\"login\" ff-model=\"dwSignIn.login\" ff-required=\"true\" ff-maxlength=\"256\" ff-validate-alert=\"{{'GLOBAL.LOGIN' | translate}}\"></ff-login> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 80px\"><span translate=\"GLOBAL.PASSWORD\"></span></ff-label> <ff-password name=\"password\" ff-model=\"dwSignIn.password\" ff-required=\"true\" ff-maxlength=\"256\" ff-attr-autocomplete=\"current-password\" ff-validate-alert=\"{{'GLOBAL.PASSWORD' | translate}}\"></ff-password> </label> <ff-row class=\"sign-in-bottom\"> <ff-btn flex=\"none\" sense=\"link\" ff-attr-tabindex=\"{{1}}\" ff-click=\"dwSignIn.forgotPassword(true)\"> <span translate=\"SIGN_IN.FORGOT_PASSWORD\"></span> </ff-btn> <label flex=\"none\" style=\"margin-left:auto\"> <ff-checkbox name=\"rememberMe\" ff-model=\"dwSignIn.rememberMe\" class=\"ff-right\" ff-label=\"{{'SIGN_IN.REMEMBER_ME' | translate}}\"></ff-checkbox> </label> </ff-row> </ff-panel> <ff-panel ng-if=\"dwSignIn.restorePassword\"> <ff-header> <span ng-class=\"{ 'text-danger': dwSignIn.error }\"> {{dwSignIn.error || dwSignIn.info || ('SIGN_IN.RESTORE_PASSWORD.HINT' | translate)}} </span> </ff-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 70px\"><req translate=\"GLOBAL.EMAIL\"></req></ff-label> <ff-email name=\"email\" ff-model=\"dwSignIn.email\" ff-required=\"true\" ff-validate-alert=\"{{'GLOBAL.EMAIL' | translate}}\"></ff-email> </label> </ff-panel> </ff-board> <ff-btn-group ng-if=\"!dwSignIn.restorePassword\"> <span ng-transclude=\"extraButtons\"></span> <ff-btn sense=\"back\" ff-click=\"vm.back()\" ng-if=\"vm.back\"> <span translate=\"GLOBAL.BTN_BACK\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\" ng-if=\"$ctrl.back\"> <span translate=\"GLOBAL.BTN_BACK\"></span> </ff-btn> <ff-btn type=\"submit\" sense=\"ok\" ff-disabled=\"formSignIn.$invalid\" ff-click=\"dwSignIn.signIn()\"> <span translate=\"SIGN_IN.BTN_SIGN_IN\"></span> </ff-btn> </ff-btn-group> <ff-btn-group ng-if=\"dwSignIn.restorePassword\"> <ff-btn type=\"submit\" sense=\"ok\" ff-disabled=\"formSignIn.$invalid\" ff-click=\"dwSignIn.sendPassword()\"> <span translate=\"SIGN_IN.RESTORE_PASSWORD.BTN_SEND\"></span> </ff-btn> <ff-btn sense=\"cancel\" ff-click=\"dwSignIn.forgotPassword(false)\"> <span translate=\"GLOBAL.BTN_CANCEL\"></span> </ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/sign-in/sign-in.controller.js":
/*!**********************************************!*\
  !*** ./common/sign-in/sign-in.controller.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


angular.module('deskworks.signIn', ['ngRoute', 'ngStorage', 'flexForms', 'deskworks.state', 'deskworks.config', 'deskworks.dwSignIn', 'deskworks.isMultiSite']).config(["$routeProvider", function ($routeProvider) {
  'use strict';

  var silent; // silent search param is used by E2E tests to disable redirect to /sign-in after signing out

  $routeProvider.when('/sign-in', {
    templateUrl: 'sign-in/sign-in.tpl.html',
    controller: 'SignInCtrl',
    controllerAs: 'vm',
    label: 'Sign In',
    routeBranch: 'sign-in',
    hideSidebar: true,
    userTasksPolicy: false,
    landing: true,
    reloadOnSearch: false,
    translations: ['sign-in']
  });
  $routeProvider.when('/sign-out', {
    routeBranch: 'sign-out',
    hideSidebar: true,
    userTasksPolicy: false,
    landing: true,
    resolve: {
      logout: ["state", "isMultiSite", "deskworksConfig", function logout(state, isMultiSite, deskworksConfig) {
        // silent param is used in E2E tests to prevent displaying Sign In page after logout
        silent = state.getParam('silent') || silent;
        return state.logout().finally(function () {
          if (!silent) {
            if (isMultiSite()) {
              window.location = deskworksConfig.getSitesUrl();
              return;
            }

            return state.setPath('/sign-in');
          }
        });
      }]
    }
  });
}]).controller('SignInCtrl', ["$scope", "$route", "$location", "$localStorage", "$timeout", "$translate", "state", "deskworksConfig", "isMultiSite", function ($scope, $route, $location, $localStorage, $timeout, $translate, state, deskworksConfig, isMultiSite) {
  'use strict';

  var vm = this;
  state.setPageTitle($translate.instant('SIGN_IN.PAGE_TITLE'));
  /**
   * dwSignIn:SignIn event listener, proceeds to redirect
   */

  $scope.$on('dwSignIn:SignIn', function ($event) {
    state.setPath(state.getParam('redirect') || deskworksConfig.getDefaultRoute(), true);
    state.setParam('redirect'); // Reset redirect

    $event.stopPropagation();
  });
  $scope.$watch(isMultiSite, function (val) {
    vm.back = val ? backToSites : null;
  });

  function backToSites() {
    window.location = deskworksConfig.getSitesUrl();
    return $timeout(5000);
  }
}]);

/***/ }),

/***/ "./common/sign-in/sign-in.tpl.html":
/*!*****************************************!*\
  !*** ./common/sign-in/sign-in.tpl.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<dw-sign-in id=\"signIn\"></dw-sign-in> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/sw-registration.js":
/*!***********************************!*\
  !*** ./common/sw-registration.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Register Service Worker
 */
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     import(/* webpackMode: "eager" */ '../sw.js')
//       .then(function(module) {
//         navigator.serviceWorker.register(module.default)
//           // .then(function(reg) { console.log('SW registered: ', reg); })
//           .catch(function(err) { console.log('SW registration failed: ', err); });
//       });
//   });
// }

/***/ }),

/***/ "./common/whitelabel/get-color-contrast.service.js":
/*!*********************************************************!*\
  !*** ./common/whitelabel/get-color-contrast.service.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "../node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/toConsumableArray */ "../node_modules/@babel/runtime-corejs3/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (angular.module('getColorContrast', []).factory('getColorContrast', function () {
  return function (color) {
    var r, g, b, a;

    if (color.indexOf('#') >= 0) {
      var _context2;

      // #f088d1 or #f088d1ff
      if (color.length < 7) {
        var _context;

        // #f0f or #f0ff
        color = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = _babel_runtime_corejs3_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(color)).call(_context, function (char) {
          return char === '#' ? char : char + char;
        }).join('');
      }

      var _map = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = [1, 3, 5, 7]).call(_context2, function (i) {
        return parseInt(color.substr(i, 2), 16);
      });

      var _map2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_map, 4);

      r = _map2[0];
      g = _map2[1];
      b = _map2[2];
      a = _map2[3];
      a = isNaN(a) ? a = 1 : a / 255;
    } else {
      var _context3;

      // rgba(255, 255, 255, .75)
      var match = color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0*\.?\d+)\s*\)$/i);

      var _match$slice = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_3___default()(match).call(match, 1);

      var _match$slice2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_match$slice, 4);

      r = _match$slice2[0];
      g = _match$slice2[1];
      b = _match$slice2[2];
      a = _match$slice2[3];

      var _map3 = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = [r, g, b]).call(_context3, function (i) {
        return parseInt(i);
      });

      var _map4 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_map3, 3);

      r = _map4[0];
      g = _map4[1];
      b = _map4[2];
      a = parseFloat(a);
    }

    return (r * 299 + g * 587 + b * 114) / 1000; // YIQ ratio
  };
}));

/***/ }),

/***/ "./common/whitelabel/whitelabel.service.js":
/*!*************************************************!*\
  !*** ./common/whitelabel/whitelabel.service.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/trim */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_0__);


/**
 * White-label service for customizing header and footer for each client individually.
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.whitelabel', ['getColorContrast']).provider('whitelabel', function () {
  return {
    setProperty: function setProperty(prop, val) {
      var styles = window.getComputedStyle(document.documentElement);

      if (!styles.getPropertyValue('--dynamic-white-label')) {
        // if set, vars are stored in database
        document.documentElement.style.setProperty(prop, val);
      }
    },
    $get: ["getColorContrast", function $get(getColorContrast) {
      updateTextOnBrandColor(); // initial recalc text-on-brand-color

      return {
        setProperty: function setProperty(prop, val) {
          document.documentElement.style.setProperty(prop, val);
          if (prop === '--brand-color') updateTextOnBrandColor();
        },
        getProperty: function getProperty(prop) {
          var styles = window.getComputedStyle(document.documentElement);
          var val = styles.getPropertyValue(prop);
          if (prop === '--elastic-banner' && !val) return 'true'; // default value

          return val && _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_0___default()(val).call(val);
        }
      };

      function updateTextOnBrandColor() {
        var _context;

        var styles = window.getComputedStyle(document.documentElement);
        var color = getColorContrast(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_0___default()(_context = styles.getPropertyValue('--brand-color')).call(_context)) < 170 ? '#fff' : '#000';
        document.documentElement.style.setProperty('--text-on-brand-color', color);
      }
    }]
  };
}));

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "../node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular_animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-animate */ "../node_modules/angular-animate/index.js");
/* harmony import */ var angular_animate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_animate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-resource */ "../node_modules/angular-resource/index.js");
/* harmony import */ var angular_resource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_resource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-route */ "../node_modules/angular-route/index.js");
/* harmony import */ var angular_route__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_route__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angular_aria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-aria */ "../node_modules/angular-aria/index.js");
/* harmony import */ var angular_aria__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_aria__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-modal-service */ "../node_modules/angular-modal-service/index.js");
/* harmony import */ var angular_modal_service__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_modal_service__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_snap_angular_snap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-snap/angular-snap */ "../node_modules/angular-snap/angular-snap.js");
/* harmony import */ var angular_snap_angular_snap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_snap_angular_snap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angular_translate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-translate */ "../node_modules/angular-translate/dist/angular-translate.js");
/* harmony import */ var angular_translate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_translate__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angular_translate_loader_partial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-translate-loader-partial */ "../node_modules/angular-translate-loader-partial/angular-translate-loader-partial.js");
/* harmony import */ var angular_translate_loader_partial__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_translate_loader_partial__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular_translate_interpolation_messageformat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-translate-interpolation-messageformat */ "../node_modules/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js");
/* harmony import */ var angular_translate_interpolation_messageformat__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular_translate_interpolation_messageformat__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngstorage */ "../node_modules/ngstorage/ngStorage.js");
/* harmony import */ var ngstorage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngstorage__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-file-upload */ "../node_modules/ng-file-upload/index.js");
/* harmony import */ var ng_file_upload__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_file_upload__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ng_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-infinite-scroll */ "../node_modules/ng-infinite-scroll/build/ng-infinite-scroll.js");
/* harmony import */ var ng_infinite_scroll__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment-timezone */ "../node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment-range */ "../node_modules/moment-range/dist/moment-range.js");
/* harmony import */ var moment_range__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment_range__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var oclazyload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! oclazyload */ "../node_modules/oclazyload/dist/ocLazyLoad.js");
/* harmony import */ var oclazyload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(oclazyload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var snapjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! snapjs */ "../node_modules/snapjs/snap.js");
/* harmony import */ var snapjs__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(snapjs__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var textangularjs_dist_textAngular_sanitize__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! textangularjs/dist/textAngular-sanitize */ "../node_modules/textangularjs/dist/textAngular-sanitize.js");
/* harmony import */ var textangularjs_dist_textAngular_sanitize__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(textangularjs_dist_textAngular_sanitize__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var websocket_nats__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! websocket-nats */ "../node_modules/websocket-nats/index.js");
/* harmony import */ var websocket_nats__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(websocket_nats__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _app_assets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app/assets */ "./app/assets.js");
/* harmony import */ var _app_bundles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app/bundles */ "./app/bundles.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app/app */ "./app/app.js");
/* harmony import */ var _common_scss_index_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./common/scss/index.scss */ "./common/scss/index.scss");
/* harmony import */ var _common_scss_index_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_common_scss_index_scss__WEBPACK_IMPORTED_MODULE_23__);




















 // instead of angular-sanitize





 // TODO: lazy load as theme

window.moment = moment__WEBPACK_IMPORTED_MODULE_13___default.a;
window.Snap = snapjs__WEBPACK_IMPORTED_MODULE_17___default.a;
window.NATS = websocket_nats__WEBPACK_IMPORTED_MODULE_19___default.a;
Object(moment_range__WEBPACK_IMPORTED_MODULE_15__["extendMoment"])(moment__WEBPACK_IMPORTED_MODULE_13___default.a); //   'node_modules/messageformat/messageformat.min.js',

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=main~._c.js.map?_rev=7d6c8f0a2245b3c4363a