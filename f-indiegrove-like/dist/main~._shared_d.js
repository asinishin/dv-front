(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main~._shared_d"],{

/***/ "./shared/dw-alerts/dw-alerts.directive.js":
/*!*************************************************!*\
  !*** ./shared/dw-alerts/dw-alerts.directive.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dw_alerts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dw-alerts.scss */ "./shared/dw-alerts/dw-alerts.scss");
/* harmony import */ var _dw_alerts_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dw_alerts_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dw_alerts_tpl_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dw-alerts.tpl.html */ "./shared/dw-alerts/dw-alerts.tpl.html");
/* harmony import */ var _dw_alerts_tpl_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dw_alerts_tpl_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uib_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uib-alert */ "./shared/dw-alerts/uib-alert.js");
/* harmony import */ var _dw_alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dw-alerts.service */ "./shared/dw-alerts/dw-alerts.service.js");





/**
 * dwAlerts component - displays alerts from dwAlerts service
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwAlerts', ['ngAnimate', _uib_alert__WEBPACK_IMPORTED_MODULE_3__["default"].name, _dw_alerts_service__WEBPACK_IMPORTED_MODULE_4__["default"].name]).component('dwAlerts', {
  template: _dw_alerts_tpl_html__WEBPACK_IMPORTED_MODULE_2___default.a,
  controller: 'dwAlertsController'
}).controller('dwAlertsController', ["$scope", "$timeout", "dwAlerts", function ($scope, $timeout, dwAlerts) {
  var $ctrl = this;
  $ctrl.alerts = dwAlerts.$alerts;

  $ctrl.close = function (alert) {
    dwAlerts.close(alert);
  }; // Start alerts progress after adding


  $scope.$watchCollection('$ctrl.alerts', function () {
    $ctrl.alerts.forEach(function (alert) {
      if (alert.timeout && !alert.start) {
        $timeout(function () {
          alert.start = true;
        }); // start progress bar
      }
    });
  });
}]));

/***/ }),

/***/ "./shared/dw-alerts/dw-alerts.scss":
/*!*****************************************!*\
  !*** ./shared/dw-alerts/dw-alerts.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/dw-alerts/dw-alerts.service.js":
/*!***********************************************!*\
  !*** ./shared/dw-alerts/dw-alerts.service.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Deskworks alerts service (replacement for $rootScope.showError method)
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwAlerts.service', []).factory('dwAlerts', ["$rootScope", "$timeout", "$q", function ($rootScope, $timeout, $q) {
  var dwAlerts = {
    $alerts: [],

    /**
     * Display error message.
     * @param result - rejected promise result (parameter in catch block)
     * @param message - (optional) if missing, result is treated as message
     * @returns {Promise} - rejected promise which can be returned from catch block
     */
    error: function error(result, message) {
      if (!message) {
        message = result;
        result = null;
      }

      if (result && result.data && (result.data.error || result.data.message)) {
        message = result.data.error || result.data.message;
      }

      var alert = {
        id: Date.now(),
        type: 'danger',
        message: message || 'Sorry, error occurred. Please try again a bit later.',
        timeout: 10000
      };
      this.showAlert(alert);
      return $q.reject(result || message);
    },

    /**
     * Display info message.
     * @param message - message to display
     */
    info: function info(message) {
      var alert = {
        id: Date.now(),
        type: 'info',
        message: message,
        timeout: 6000
      };
      this.showAlert(alert);
    },
    close: function close(alert) {
      var index = this.$alerts.indexOf(alert);

      if (index >= 0) {
        var _context;

        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = this.$alerts).call(_context, index, 1);
      }
    },
    showAlert: function showAlert(alert) {
      var self = this;
      self.$alerts.unshift(alert);
      if (alert.timeout) $timeout(function () {
        self.close(alert);
      }, alert.timeout); // hide after timeout
    }
  };
  /**
   * Legacy methods
   */

  $rootScope.showError = function (result, message) {
    return dwAlerts.error(result, message);
  };

  $rootScope.closeError = function (index) {
    var _context2;

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = dwAlerts.$alerts).call(_context2, index, 1);
  };

  $rootScope.closeAllErrors = function () {
    var _context3;

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = dwAlerts.$alerts).call(_context3, 0, dwAlerts.$alerts.length);
  };

  return dwAlerts;
}]));

/***/ }),

/***/ "./shared/dw-alerts/dw-alerts.tpl.html":
/*!*********************************************!*\
  !*** ./shared/dw-alerts/dw-alerts.tpl.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<uib-alert ng-repeat=\"alert in $ctrl.alerts\" type=\"{{alert.type}}\" class=\"dw-alert\" close=\"$ctrl.close(alert)\"> <span ng-bind-html=\"alert.message\"></span> <span class=\"dw-alert-progress\" ng-if=\"alert.timeout\" ng-class=\"{ start: alert.start }\" ng-style=\"{ transition: 'all ' + alert.timeout / 1000 + 's linear', '-webkit-transition': 'all ' + alert.timeout / 1000 + 's linear' }\"></span> </uib-alert> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/dw-alerts/uib-alert.js":
/*!***************************************!*\
  !*** ./shared/dw-alerts/uib-alert.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Isolated ui.bootstrap.alert module from ui.bootstrap package
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('ui.bootstrap.alert', []).controller('UibAlertController', ['$scope', '$attrs', '$interpolate', '$timeout', function ($scope, $attrs, $interpolate, $timeout) {
  $scope.closeable = !!$attrs.close;
  var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ? $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

  if (dismissOnTimeout) {
    $timeout(function () {
      $scope.close();
    }, parseInt(dismissOnTimeout, 10));
  }
}]).directive('uibAlert', function () {
  return {
    controller: 'UibAlertController',
    controllerAs: 'alert',
    template: '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">' + '<button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">' + '<span aria-hidden="true">&times;</span>' + '</button>' + '<div ng-transclude></div>' + '</div>',
    transclude: true,
    replace: true,
    scope: {
      type: '@',
      close: '&'
    }
  };
}));

/***/ }),

/***/ "./shared/dw-check-in-widget/dw-check-in-widget.directive.js":
/*!*******************************************************************!*\
  !*** ./shared/dw-check-in-widget/dw-check-in-widget.directive.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dw_check_in_widget_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dw-check-in-widget.scss */ "./shared/dw-check-in-widget/dw-check-in-widget.scss");
/* harmony import */ var _dw_check_in_widget_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dw_check_in_widget_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dw_check_in_widget_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dw-check-in-widget.tpl.html */ "./shared/dw-check-in-widget/dw-check-in-widget.tpl.html");
/* harmony import */ var _dw_check_in_widget_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dw_check_in_widget_tpl_html__WEBPACK_IMPORTED_MODULE_1__);


/**
 * dwCheckInWidget directive - Check In / Check Out widget in sidebar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwCheckInWidget', ['flexForms', 'deskworks.helper', 'deskworks.checkInLog.service', 'resolveTimezone']).directive('dwCheckInWidget', function () {
  return {
    template: _dw_check_in_widget_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
    restrict: 'E',
    scope: true,
    controller: 'dwCheckInWidgetCtrl as $ctrl',
    compile: function compile(tElement, tAttrs) {
      tElement.addClass('sidebar-item').css('display', 'none');
      return function link($scope, $element, $attrs, $ctrl) {};
    }
  };
}).controller('dwCheckInWidgetCtrl', ["$scope", "$element", "$interval", "state", "dwAlerts", "checkInLogService", "resolveTimezone", function ($scope, $element, $interval, state, dwAlerts, checkInLogService, resolveTimezone) {
  var $ctrl = this;
  /**
   * Check-In/Out button handler
   */

  $ctrl.checkInOut = function (operation) {
    $interval.cancel($ctrl.updateTimer);
    return checkInLogService.checkInOut(state.getCurrentCenterId(), state.getCurrentUserId(), operation).then(function () {
      $ctrl.log.checkInTime = operation === 'checkIn' ? moment() : undefined; // temporary set dummy checkInTime to switch between checkIn and checkOut button

      $interval.cancel($ctrl.updateTimer);
      $ctrl.updateTimer = $interval($ctrl.updateMemberLog, 6000); // 6 sec delay because API processes data in background

      ga('send', 'event', 'merged', operation); // send track to Google Analytics
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to ' + operation);
    });
  };
  /**
   * Requests new member log from server and updates view
   */


  $ctrl.updateMemberLog = function () {
    $interval.cancel($ctrl.updateTimer);

    if (state.isLoggedAdmin() && !state.isUserSelected() || !state.getCurrentCenterId()) {
      $element.css('display', 'none');
      return; // skip updating Member Log if coordinator has not selected a user
    }

    return resolveTimezone().then(function () {
      return checkInLogService.getLog(state.getCurrentCenterId(), state.getCurrentUserId(), 0, 0);
    }).then(function (log) {
      $element.css('display', log.allowCheckIn ? null : 'none');
      $ctrl.log = log;

      if (log.allowCheckIn) {
        $interval.cancel($ctrl.updateTimer);
        $ctrl.updateTimer = $interval($ctrl.updateMemberLog, 60000); // 1 min auto-update timer
      }
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to update check-in widget');
    });
  };
  /**
   * Watch for current userId change and update member log
   */


  $scope.$watchGroup([state.getCurrentUserId, state.getCurrentCenterId], $ctrl.updateMemberLog);
}]));

/***/ }),

/***/ "./shared/dw-check-in-widget/dw-check-in-widget.scss":
/*!***********************************************************!*\
  !*** ./shared/dw-check-in-widget/dw-check-in-widget.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/dw-check-in-widget/dw-check-in-widget.tpl.html":
/*!***************************************************************!*\
  !*** ./shared/dw-check-in-widget/dw-check-in-widget.tpl.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span>Check In / Out</span> <ff-btn-group> <ff-btn sense=\"checkIn\" size=\"sm\" ng-hide=\"$ctrl.log.checkInTime\" ff-click=\"$ctrl.checkInOut('checkIn')\">Check In</ff-btn> <ff-btn sense=\"checkOut\" size=\"sm\" ng-show=\"$ctrl.log.checkInTime\" ff-click=\"$ctrl.checkInOut('checkOut')\">Check Out</ff-btn> </ff-btn-group> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/dw-check-in-widget/dw-manual-check-in-widget.directive.js":
/*!**************************************************************************!*\
  !*** ./shared/dw-check-in-widget/dw-manual-check-in-widget.directive.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dw_check_in_widget_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dw-check-in-widget.scss */ "./shared/dw-check-in-widget/dw-check-in-widget.scss");
/* harmony import */ var _dw_check_in_widget_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dw_check_in_widget_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dw_manual_check_in_widget_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dw-manual-check-in-widget.tpl.html */ "./shared/dw-check-in-widget/dw-manual-check-in-widget.tpl.html");
/* harmony import */ var _dw_manual_check_in_widget_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dw_manual_check_in_widget_tpl_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_services_usage_manual_check_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/usage/manual-check-in.service */ "./shared/services/usage/manual-check-in.service.js");



/**
 * dwManualCheckInWidget directive - Manual check in / check out widget in sidebar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwManualCheckInWidget', [shared_services_usage_manual_check_in_service__WEBPACK_IMPORTED_MODULE_2__["default"].name]).directive('dwManualCheckInWidget', function () {
  return {
    template: _dw_manual_check_in_widget_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
    restrict: 'E',
    scope: true,
    controller: 'dwManualCheckInWidgetCtrl as $ctrl',
    compile: function compile(tElement) {
      tElement.addClass('sidebar-item keep-sm-btn-size').css('display', 'none');
      return function () {};
    }
  };
}).controller('dwManualCheckInWidgetCtrl', ["$scope", "$element", "state", "dwAlerts", "ManualCheckIn", function ($scope, $element, state, dwAlerts, ManualCheckIn) {
  var $ctrl = this;
  /**
   * Check-In/Out button handler
   */

  $ctrl.check = function (rb, delta, $event) {
    delta = +delta;

    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }

    var operation = delta > 0 ? 'checkIn' : 'checkOut';
    return ManualCheckIn.save({
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId(),
      recurringId: rb.id,
      checkInCount: rb.checkInCount + delta
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to ' + operation);
    }).then(function () {
      rb.checkInCount += delta;
      ga('send', 'event', 'merged', operation); // send track to Google Analytics
    }); // TODO: refetch data
  };
  /**
   * Requests data from server and updates view
   */


  $ctrl.fetchData = function () {
    if (!state.isUserSelected() || !state.getCurrentCenterId()) {
      $element.css('display', 'none');
      return; // skip fetching if coordinator has not selected a user
    }

    return ManualCheckIn.query({
      centerId: state.getCurrentCenterId(),
      userId: state.getCurrentUserId()
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query manual check-in widget');
    }).then(function (rbs) {
      $element.css('display', rbs.length ? null : 'none');
      $ctrl.rbs = rbs;
    });
  };
  /**
   * Watch for current userId change and re-fetch data
   */


  $scope.$watchGroup([state.getCurrentUserId, state.getCurrentCenterId], $ctrl.fetchData);
}]));

/***/ }),

/***/ "./shared/dw-check-in-widget/dw-manual-check-in-widget.tpl.html":
/*!**********************************************************************!*\
  !*** ./shared/dw-check-in-widget/dw-manual-check-in-widget.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-row ng-repeat-start=\"rb in $ctrl.rbs\" class=\"sidebar-item\" ng-click=\"rb.$$unfold = !rb.$$unfold\"> <span>{{rb.name}}</span> <div flex=\"0 0 22px\" class=\"check-in-count\" ng-if=\"rb.checkInCount\">{{rb.checkInCount}}</div> <ff-btn flex=\"none\" sense=\"collapse\" size=\"xs\" style=\"margin-left:auto\" ng-class=\"{ collapsed: !rb.$$unfold }\"></ff-btn> <ff-btn-group flex=\"none\"> <ff-btn sense=\"checkIn\" size=\"sm\" ng-hide=\"rb.checkInCount > 0\" ff-click=\"$ctrl.check(rb, 1, $event)\" ff-disabled=\"rb.$$unfold\">Check In</ff-btn> <ff-btn sense=\"checkOut\" size=\"sm\" ng-show=\"rb.checkInCount > 0\" ff-click=\"$ctrl.check(rb, -1, $event)\" ff-disabled=\"rb.$$unfold\">Check Out</ff-btn> </ff-btn-group> </ff-row> <ff-row ng-repeat-end class=\"animate-collapse ff-no-frame\" ng-if=\"rb.$$unfold\"> <ff-static flex=\"0 0 30px\" class=\"ff-center\"> <ff-btn sense=\"minus\" size=\"xs\" class=\"ff-btn-icon\" flex=\"auto\" style=\"align-self:stretch\" ff-disabled=\"rb.$$count <= 1\" ff-click=\"rb.$$count = +rb.$$count - 1\"></ff-btn> </ff-static> <ff-number flex=\"0 0 36px\" ff-model=\"rb.$$count\" class=\"ff-center\" ff-required=\"true\" ff-gt=\"0\" ff-validate-alert=\"Count\"></ff-number> <ff-static flex=\"0 0 30px\" class=\"ff-center\"> <ff-btn sense=\"plus\" size=\"xs\" class=\"ff-btn-icon\" flex=\"auto\" style=\"align-self:stretch\" ff-click=\"rb.$$count = +rb.$$count + 1\"></ff-btn> </ff-static> <ff-btn-group flex=\"none\"> <ff-btn sense=\"checkIn\" size=\"sm\" ff-click=\"$ctrl.check(rb, rb.$$count)\">Check In</ff-btn> <ff-btn sense=\"checkOut\" size=\"sm\" ff-click=\"$ctrl.check(rb, -rb.$$count)\" ff-disabled=\"!rb.checkInCount || rb.$$count > rb.checkInCount\">Check Out</ff-btn> </ff-btn-group> </ff-row> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/dw-controls/dw-address/dw-address.directive.js":
/*!***************************************************************!*\
  !*** ./shared/dw-controls/dw-address/dw-address.directive.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dw_address_tpl_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dw-address.tpl.html */ "./shared/dw-controls/dw-address/dw-address.tpl.html");
/* harmony import */ var _dw_address_tpl_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dw_address_tpl_html__WEBPACK_IMPORTED_MODULE_2__);



/**
 * dwAddress directive - set of inputs standard for address, should be applied as attribute for fieldset tag.
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwAddress', ['flexForms', 'deskworks.helper']).directive('dwAddress', ["$compile", "$templateCache", "$timeout", "$translate", "helper", "optsAddressType", "optsCountry", "optsState", function ($compile, $templateCache, $timeout, $translate, helper, optsAddressType, optsCountry, optsState) {
  return {
    template: _dw_address_tpl_html__WEBPACK_IMPORTED_MODULE_2___default.a,
    restrict: 'A',
    scope: true,
    controllerAs: 'dwAddress',
    bindToController: {
      secondStreet: '<',
      notRequired: '<'
    },
    controller: ["$scope", "$element", "$attrs", function controller($scope, $element, $attrs) {
      var dwAddress = this;
      dwAddress.types = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(optsAddressType).call(optsAddressType, function (type) {
        return angular.extend(type, {
          name: $translate.instant(type.name)
        });
      });
      dwAddress.countries = optsCountry;
      dwAddress.states = optsState;
      dwAddress.address = $scope.$eval($attrs.dwAddress);
      dwAddress.hasType = $scope.$eval($attrs.dwAddressType);

      dwAddress.onChangeCountry = function () {
        // Let ngIf create second control (state consists of ffSelect and ffText) before reset.
        // So the second control can memorize initialValue before reset.
        $timeout(function () {
          if (dwAddress.address.country.id === 'US') {
            dwAddress.address.state = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, optsState.US, 'CA');
          } else {
            if (angular.isObject(dwAddress.address.state)) {
              delete dwAddress.address.state;
            }
          }
        });
      };
    }]
  };
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-address/dw-address.tpl.html":
/*!***********************************************************!*\
  !*** ./shared/dw-controls/dw-address/dw-address.tpl.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label class=\"ff-row\" ng-if=\"dwAddress.hasType\"> <ff-label flex=\"0 1 116px\"> <span translate=\"GLOBAL.ADDRESS.TYPE\" ng-class=\"{ req: !dwAddress.notRequired && (!ffBlock || ffBlock.editMode) }\"></span> </ff-label> <ff-select name=\"type\" ff-model=\"dwAddress.address.type\" ff-options=\"type.name for type in dwAddress.types\" ff-required=\"!dwAddress.notRequired\" ff-validate-alert=\"{{'GLOBAL.ADDRESS.TYPE' | translate}}\"></ff-select> </label> <label class=\"ff-row\" ng-if=\"!dwAddress.secondStreet\"> <ff-label flex=\"0 1 116px\"> <span translate=\"GLOBAL.ADDRESS.STREET\" ng-class=\"{ req: !dwAddress.notRequired && (!ffBlock || ffBlock.editMode) }\"></span> </ff-label> <ff-text name=\"street\" ff-model=\"dwAddress.address.street\" placeholder=\"6265 Highway 9\" ff-required=\"!dwAddress.notRequired\" ff-validate-alert=\"{{'GLOBAL.ADDRESS.STREET' | translate}}\"></ff-text> </label> <label class=\"ff-row\" ng-if=\"dwAddress.secondStreet\"> <ff-label flex=\"0 1 116px\"> <span translate=\"GLOBAL.ADDRESS.STREET\" ng-class=\"{ req: !dwAddress.notRequired && (!ffBlock || ffBlock.editMode) }\"></span>&nbsp;1 </ff-label> <ff-text name=\"street1\" ff-model=\"dwAddress.address.street1\" placeholder=\"6265 Highway 9\" ff-required=\"!dwAddress.notRequired\" ff-validate-alert=\"{{'GLOBAL.ADDRESS.STREET' | translate}} 1\"> </ff-text> </label> <label class=\"ff-row\" ng-if=\"dwAddress.secondStreet\"> <ff-label flex=\"0 1 116px\"><span translate=\"GLOBAL.ADDRESS.STREET\"></span>&nbsp;2</ff-label> <ff-text name=\"street2\" ff-model=\"dwAddress.address.street2\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"> <span translate=\"GLOBAL.ADDRESS.CITY\" ng-class=\"{ req: !dwAddress.notRequired && (!ffBlock || ffBlock.editMode) }\"></span> </ff-label> <ff-text name=\"city\" ff-model=\"dwAddress.address.city\" placeholder=\"Felton\" ff-required=\"!dwAddress.notRequired\" ff-validate-alert=\"{{'GLOBAL.ADDRESS.CITY' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"> <span translate=\"GLOBAL.ADDRESS.COUNTRY\" ng-class=\"{ req: !dwAddress.notRequired && (!ffBlock || ffBlock.editMode) }\"></span> </ff-label> <ff-select name=\"country\" ff-model=\"dwAddress.address.country\" ff-options=\"country.name for country in dwAddress.countries\" ff-required=\"!dwAddress.notRequired\" ff-validate-alert=\"{{'GLOBAL.ADDRESS.COUNTRY' | translate}}\" ff-change=\"dwAddress.onChangeCountry()\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"> <span translate=\"GLOBAL.ADDRESS.STATE\" ng-class=\"{ req: !dwAddress.notRequired && (!ffBlock || ffBlock.editMode) }\"></span> </ff-label> <ff-select name=\"state\" ff-model=\"dwAddress.address.state\" ng-if=\"dwAddress.states[dwAddress.address.country.id]\" ff-options=\"state.name for state in dwAddress.states[dwAddress.address.country.id]\" ff-required=\"!dwAddress.notRequired\" ff-validate-alert=\"State/Province\"></ff-select> <ff-text name=\"state\" ff-model=\"dwAddress.address.state\" ng-if=\"!dwAddress.states[dwAddress.address.country.id]\" ff-required=\"!dwAddress.notRequired\" ff-validate-alert=\"{{'GLOBAL.ADDRESS.STATE' | translate}}\" placeholder=\"Ontario\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"> <span translate=\"GLOBAL.ADDRESS.ZIP\" ng-class=\"{ req: !dwAddress.notRequired && (!ffBlock || ffBlock.editMode) }\"></span> </ff-label> <ff-text name=\"zip\" ff-model=\"dwAddress.address.zip\" placeholder=\"95018\" ff-required=\"!dwAddress.notRequired\" ff-validate-alert=\"{{'GLOBAL.ADDRESS.ZIP' | translate}}\"></ff-text> </label> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/dw-controls/dw-credit-card/dw-credit-card.directive.js":
/*!***********************************************************************!*\
  !*** ./shared/dw-controls/dw-credit-card/dw-credit-card.directive.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dw_credit_card_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dw-credit-card.tpl.html */ "./shared/dw-controls/dw-credit-card/dw-credit-card.tpl.html");
/* harmony import */ var _dw_credit_card_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dw_credit_card_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/**
 * dwCreditCard directive - set of inputs standard for CC, should be applied as attribute for fieldset tag.
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwCreditCard', ['flexForms', 'deskworks.helper', 'deskworks.userProfile.optsCCExpiryMonth', 'deskworks.userProfile.optsCCExpiryYear']).directive('dwCreditCard', function () {
  return {
    template: _dw_credit_card_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    restrict: 'A',
    scope: true,
    controller: 'dwCreditCardCtrl as $ctrl',
    bindToController: {
      cc: '<dwCreditCard',
      ccTypes: '<dwCreditCardTypes'
    }
  };
}).controller('dwCreditCardCtrl', ["$scope", "optsCCExpiryMonth", "optsCCExpiryYear", function ($scope, optsCCExpiryMonth, optsCCExpiryYear) {
  var $ctrl = this;
  $ctrl.optsCCExpiryMonth = optsCCExpiryMonth;
  $ctrl.optsCCExpiryYear = optsCCExpiryYear;
  $scope.$watch('$ctrl.ccType', function () {
    $ctrl.cc.type = $ctrl.ccType || $ctrl.cc.type;
  });
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-credit-card/dw-credit-card.tpl.html":
/*!*******************************************************************!*\
  !*** ./shared/dw-controls/dw-credit-card/dw-credit-card.tpl.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label class=\"ff-row\"> <ff-label flex=\"0 0 116px\"><span translate=\"BILLING_PROFILE.CREDIT_CARDS.NUMBER\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-cc-number name=\"number\" ff-model=\"$ctrl.cc.number\" placeholder=\"4111 1111 1111 1111\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.CREDIT_CARDS.NUMBER' | translate}}\" cc-type=\"$ctrl.ccType\" cc-types=\"$ctrl.ccTypes\"></ff-cc-number> </label> <ff-row> <label flex=\"0 0 60%\"> <ff-label flex=\"0 0 116px\"><span translate=\"BILLING_PROFILE.CREDIT_CARDS.EXPIRY\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-select flex=\"1 1 1%\" name=\"expiryMonth\" ff-model=\"$ctrl.cc.expiryMonth\" ff-options=\"opt.name for opt in $ctrl.optsCCExpiryMonth\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.CREDIT_CARDS.EXPIRY.MONTH' | translate}}\" aria-label=\"{{'BILLING_PROFILE.CREDIT_CARDS.EXPIRY.MONTH' | translate}}\"></ff-select> </label> <label flex=\"1 1 auto\"> <ff-select flex=\"1 1 1%\" name=\"expiryYear\" ff-model=\"$ctrl.cc.expiryYear\" ff-options=\"opt.name for opt in $ctrl.optsCCExpiryYear\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.CREDIT_CARDS.EXPIRY.YEAR' | translate}}\" aria-label=\"{{'BILLING_PROFILE.CREDIT_CARDS.EXPIRY.YEAR' | translate}}\"></ff-select> </label> <label flex=\"0 0 76px\" title=\"Security Code\"> <ff-label flex=\"0 1 40px\"><span translate=\"BILLING_PROFILE.CREDIT_CARDS.CVV\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-text flex=\"1 1 1%\" name=\"cvv\" ff-model=\"$ctrl.cc.ccv\" placeholder=\"123\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.CREDIT_CARDS.CVV' | translate}}\"></ff-text> </label> </ff-row> <ff-row> <label flex=\"0 0 60%\"> <ff-label flex=\"0 0 116px\"><span translate=\"BILLING_PROFILE.CREDIT_CARDS.NAME_ON_CARD\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-text flex=\"1 1 1%\" name=\"firstName\" ff-model=\"$ctrl.cc.firstName\" placeholder=\"John\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.PERSONAL_INFO.FIRST_NAME' | translate}}\"></ff-text> </label> <label flex=\"1 1 auto\"> <ff-text flex=\"1 1 1%\" name=\"lastName\" ff-model=\"$ctrl.cc.lastName\" placeholder=\"Doe\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.PERSONAL_INFO.LAST_NAME' | translate}}\"></ff-text> </label> </ff-row> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/dw-controls/dw-e-check/dw-e-check.directive.js":
/*!***************************************************************!*\
  !*** ./shared/dw-controls/dw-e-check/dw-e-check.directive.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dw_e_check_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dw-e-check.tpl.html */ "./shared/dw-controls/dw-e-check/dw-e-check.tpl.html");
/* harmony import */ var _dw_e_check_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dw_e_check_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/**
 * dwECheck directive - set of inputs standard for eCheck, should be applied as attribute for fieldset tag.
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwECheck', ['flexForms', 'deskworks.helper', 'deskworks.userProfile.optsBankAccountHolderType', 'deskworks.userProfile.optsBankAccountType']).directive('dwECheck', ["$compile", "$timeout", "helper", "optsBankAccountHolderType", "optsBankAccountType", function ($compile, $timeout, helper, optsBankAccountHolderType, optsBankAccountType) {
  return {
    template: _dw_e_check_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    restrict: 'A',
    scope: true,
    controllerAs: 'dwEC',
    controller: ["$scope", "$element", "$attrs", function controller($scope, $element, $attrs) {
      var dwEC = this;
      dwEC.optsBankAccountHolderType = optsBankAccountHolderType;
      dwEC.optsBankAccountType = optsBankAccountType;
      dwEC.check = $scope.$eval($attrs.dwECheck);
    }]
  };
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-e-check/dw-e-check.tpl.html":
/*!***********************************************************!*\
  !*** ./shared/dw-controls/dw-e-check/dw-e-check.tpl.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label class=\"ff-row\"> <ff-label flex=\"0 0 132px\"> <span translate=\"BILLING_PROFILE.E_CHECKS.ACCOUNT_HOLDER_TYPE\" ng-class=\"{ req: ffBlock.editMode }\"></span> </ff-label> <ff-select name=\"bankAccountHolderType\" ff-model=\"dwEC.check.bankAccountHolderType\" ff-options=\"type.name for type in dwEC.optsBankAccountHolderType\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.E_CHECKS.ACCOUNT_HOLDER_TYPE' | translate}}\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 132px\"> <span translate=\"BILLING_PROFILE.E_CHECKS.ACCOUNT_TYPE\" ng-class=\"{ req: ffBlock.editMode }\"></span> </ff-label> <ff-select name=\"bankAccountType\" ff-model=\"dwEC.check.bankAccountType\" ff-options=\"type.name for type in dwEC.optsBankAccountType\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.E_CHECKS.ACCOUNT_TYPE' | translate}}\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 132px\"> <span translate=\"BILLING_PROFILE.E_CHECKS.BANK_NAME\" ng-class=\"{ req: ffBlock.editMode }\"></span> </ff-label> <ff-text name=\"bankName\" ff-model=\"dwEC.check.bankName\" placeholder=\"Bank of America\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.E_CHECKS.BANK_NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 132px\"> <span translate=\"BILLING_PROFILE.E_CHECKS.ROUTING_NUMBER\" ng-class=\"{ req: ffBlock.editMode }\"></span> </ff-label> <ff-text name=\"bankRoutingNumber\" ff-model=\"dwEC.check.bankRoutingNumber\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.E_CHECKS.ROUTING_NUMBER' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 132px\"> <span translate=\"BILLING_PROFILE.E_CHECKS.ACCOUNT_NUMBER\" ng-class=\"{ req: ffBlock.editMode }\"></span> </ff-label> <ff-text name=\"bankAccountNumber\" ff-model=\"dwEC.check.bankAccountNumber\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.E_CHECKS.ACCOUNT_NUMBER' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 132px\"> <span translate=\"BILLING_PROFILE.E_CHECKS.ACCOUNT_NAME\" ng-class=\"{ req: ffBlock.editMode }\"></span> </ff-label> <ff-text name=\"fullName\" ff-model=\"dwEC.check.fullName\" placeholder=\"John Doe\" ff-required=\"true\" ff-validate-alert=\"{{'BILLING_PROFILE.E_CHECKS.ACCOUNT_NAME' | translate}}\"></ff-text> </label> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/dw-controls/dw-email.directive.js":
/*!**************************************************!*\
  !*** ./shared/dw-controls/dw-email.directive.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('dwEmailDirective', []).directive('dwEmail', ["$compile", function ($compile) {
  return {
    restrict: 'AC',
    priority: 30,
    terminal: true,
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('maxlength', tAttrs.maxlength || 256);
      tAttrs.$set('ffPattern', tAttrs.ffPattern || /^[\w\.%\+\-]+@(?:[A-Z0-9\-]+\.)+(?:[A-Z]+)$/i);
      tAttrs.$set('ffValidateAlert', tAttrs.ffValidateAlert || "{field: 'Email', pattern: 'Email should be valid'}");
      tAttrs.$set('placeholder', tAttrs.placeholder || 'example@mail.com');
      return function link($scope, $element, $attrs) {
        $compile($element, null, self.priority)($scope);
      };
    }
  };
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-last-name.directive.js":
/*!******************************************************!*\
  !*** ./shared/dw-controls/dw-last-name.directive.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('dwLastNameDirective', []).directive('dwLastName', ["$compile", "$translate", function ($compile, $translate) {
  return {
    restrict: 'AC',
    priority: 30,
    terminal: true,
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('maxlength', tAttrs.maxlength || 256);
      tAttrs.$set('ffPattern', tAttrs.ffPattern || /^[^\\<>\/&]*$/);
      tAttrs.$set('placeholder', tAttrs.placeholder || 'Doe');
      var lastName = $translate.instant('USER_PROFILE.PERSONAL_INFO.LAST_NAME');
      var patternMsg = $translate.instant('USER_PROFILE.PERSONAL_INFO.LAST_NAME_INVALID_CHARS');
      tAttrs.$set('ffValidateAlert', tAttrs.ffValidateAlert || "{ field: '" + lastName + "', pattern: '" + patternMsg + "' }");
      return function link($scope, $element, $attrs) {
        $compile($element, null, self.priority)($scope);
      };
    }
  };
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-login.directive.js":
/*!**************************************************!*\
  !*** ./shared/dw-controls/dw-login.directive.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('dwLoginDirective', []).directive('dwLogin', ["$compile", "$translate", function ($compile, $translate) {
  return {
    restrict: 'AC',
    priority: 30,
    terminal: true,
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('minlength', tAttrs.minlength || 4);
      tAttrs.$set('maxlength', tAttrs.maxlength || 256);
      tAttrs.$set('ffPattern', tAttrs.ffPattern || /^\w[\w\.\-_@]+$/);
      tAttrs.$set('placeholder', tAttrs.placeholder || 'jdoe');
      var login = $translate.instant('GLOBAL.LOGIN');
      var patternMsg = $translate.instant('GLOBAL.LOGIN.INVALID_CHARS');
      tAttrs.$set('ffValidateAlert', tAttrs.ffValidateAlert || "{ field: '" + login + "', pattern: '" + patternMsg + "' }");
      return function link($scope, $element, $attrs) {
        $compile($element, null, self.priority)($scope);
      };
    }
  };
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-password.directive.js":
/*!*****************************************************!*\
  !*** ./shared/dw-controls/dw-password.directive.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('dwPasswordDirective', []).directive('dwPassword', ["$compile", "$translate", function ($compile, $translate) {
  return {
    restrict: 'AC',
    priority: 30,
    terminal: true,
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('minlength', tAttrs.minlength || tAttrs.ffMinlength || 8);
      tAttrs.$set('maxlength', tAttrs.maxlength || tAttrs.ffMaxlength || 20);
      tAttrs.$set('ffPattern', tAttrs.ffPattern || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{8,}$/);
      tAttrs.$set('placeholder', 'password');
      var alert;
      var patternMsg = $translate.instant('GLOBAL.PASSWORD.INVALID_CHARS');

      try {
        alert = angular.fromJson(tAttrs.ffValidateAlert);
      } catch (err) {
        alert = {};
      }

      alert = angular.extend({
        field: $translate.instant('GLOBAL.PASSWORD'),
        pattern: patternMsg,
        minlength: patternMsg
      }, alert);
      tAttrs.$set('ffValidateAlert', angular.toJson(alert));
      return function link($scope, $element, $attrs) {
        $compile($element, null, self.priority)($scope);
      };
    }
  };
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-phone.directive.js":
/*!**************************************************!*\
  !*** ./shared/dw-controls/dw-phone.directive.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('dwPhoneDirective', []).directive('dwPhone', ["$compile", "$translate", function ($compile, $translate) {
  return {
    restrict: 'AC',
    priority: 30,
    terminal: true,
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('maxlength', tAttrs.maxlength || 64); // tAttrs.$set('ffPattern', tAttrs.ffPattern || /^((\+\d{1,3}[-. ]?\(?\d\)?[-. ]?\d{1,5})|(\(?\d{2,6}\)?))[-. ]?(\d{3,4})[-. ]?(\d{3,4})?$/);

      tAttrs.$set('ffPattern', tAttrs.ffPattern || /^(?:\+\d[-. ]?)?(?:\(?\d\)?[-. ]?){5,13}\d$/);
      tAttrs.$set('placeholder', tAttrs.placeholder || '888-379-2865');
      var number = $translate.instant('USER_PROFILE.PHONES.NUMBER');
      var patternMsg = $translate.instant('GLOBAL.VALIDATION.PHONE');
      tAttrs.$set('ffValidateAlert', tAttrs.ffValidateAlert || "{ field: '" + number + "', pattern: '" + patternMsg + "' }");
      return function link($scope, $element, $attrs) {
        $compile($element, null, self.priority)($scope);
      };
    }
  };
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-search-user.directive.js":
/*!********************************************************!*\
  !*** ./shared/dw-controls/dw-search-user.directive.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (angular.module('dwSearchUserDirective', []).directive('dwSearchUser', ["$compile", "$q", "$filter", "ffHelper", "state", "userProfileService", "dwAlerts", function ($compile, $q, $filter, ffHelper, state, userProfileService, dwAlerts) {
  return {
    restrict: 'A',
    priority: 30,
    terminal: true,
    template: '<ff-search-options>' + '<div>' + '<h6>' + '<span ng-bind-html="$search.highlighted.fullName"></span>{{$search.highlighted.company ? \',\' : \'\'}} ' + '<span ng-bind-html="$search.highlighted.company"></span> ' + '&lt;<span ng-bind-html="$search.highlighted.email"></span>&gt;' + '</h6>' + '<small>' + '<span ng-repeat="match in $search.matches" class="match">{{match.name}}: <span ng-bind-html="(match.value || \'-\') + ($last ? \'\' : \', \')"></span></span>' + '</small>' + '</div>' + '</ff-search-options>' + '<ff-search-match ng-if="dwSearchUser.options !== \'activeNameOnly\'">' + '<h6>' + '<span ng-bind="ffSearch.ngModel.$modelValue.fullName"></span>{{ffSearch.ngModel.$modelValue.company ? \',\' : \'\'}} ' + '<span ng-bind="ffSearch.ngModel.$modelValue.company"></span> ' + '&lt;<span ng-bind="ffSearch.ngModel.$modelValue.email"></span>&gt;' + '</h6>' + '</ff-search-match>' + '<ff-search-match ng-if="dwSearchUser.options === \'activeNameOnly\'">' + '<h6>' + '<span ng-bind="ffSearch.ngModel.$modelValue.fullName"></span>' + '</h6>' + '</ff-search-match>',
    controllerAs: 'dwSearchUser',
    bindToController: {
      options: '@dwSearchUser'
    },
    controller: function controller() {
      var dwSearchUser = this;
      /**
       * Filters users by found search string and sorts by number of matches
       * @param $results - non-filtered search results
       * @param $search - search string
       * @returns {Array.<T>} - filtered results
       */

      dwSearchUser.filterUsers = function ($results, $search) {
        var _context;

        $results = $results || [];
        $results.forEach(function (user) {
          user.weight = 0;
          user.matches = [{
            name: 'login',
            value: $filter('highlight')(user.login, $search)
          }];
          user.highlighted = {
            fullName: $filter('highlight')(user.fullName, $search),
            company: $filter('highlight')(user.company, $search),
            email: $filter('highlight')(user.email, $search)
          };

          for (var prop in user) {
            if (user.hasOwnProperty(prop) && angular.isString(user[prop]) && prop.indexOf('$$') !== 0) {
              var index = user[prop].toLowerCase().indexOf($search.toLowerCase());

              if (index >= 0) {
                user.weight++;

                if (prop !== 'fullName' && prop !== 'company' && prop !== 'email' && prop !== 'login') {
                  var name = prop.split(/(?=[A-Z])/).join(' ').toLowerCase();
                  user.matches.push({
                    name: name,
                    value: $filter('highlight')(user[prop], $search)
                  });
                }
              }
            }
          }
        });
        return _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()($results).call($results, function (user) {
          return user.weight > 0;
        })).call(_context, function (a, b) {
          return a.weight < b.weight ? 1 : a.weight > b.weight ? -1 : 0;
        });
      };
      /**
       * Search user handler, calls API search and returns resulting promise
       * @param $search - search string
       */


      dwSearchUser.searchUser = function ($search) {
        return userProfileService.quickSearch(state.getCurrentCenterId(), $search).catch(function (err) {
          return dwAlerts.error(err, 'Failed to quick search users.');
        });
      };
    },
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('ffSearch', 'dwSearchUser.searchUser($search)');
      tAttrs.$set('ffSearchFilter', 'dwSearchUser.filterUsers($results, $search)');
      tAttrs.$set('placeholder', 'start typing to search users');
      return function link($scope, $element, $attrs) {
        $compile($element, null, self.priority)($scope);
      };
    }
  };
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-select-center/dw-select-center.directive.js":
/*!***************************************************************************!*\
  !*** ./shared/dw-controls/dw-select-center/dw-select-center.directive.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);



/**
 * dwSelectCenter directive - wrapper for ffSelect, but automatically and transparently populates dropdown.
 * If initial evaluated ffModel is undefined, inits ffModel with state.getCurrentCenterId()
 * If ffOptionAll is true, centers unshifted with {id: 'all', name: 'All'} center and it set as current center.
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwSelectCenter', ['deskworks.state', 'flexForms', 'deskworks.helper', 'deskworks.center.service', 'deskworks.Admin']).directive('dwSelectCenter', ["$q", "$rootScope", "$timeout", "$compile", "dwAlerts", "ffHelper", "state", "helper", "centerService", "Admin", function ($q, $rootScope, $timeout, $compile, dwAlerts, ffHelper, state, helper, centerService, Admin) {
  return {
    restrict: 'E',
    scope: true,
    controller: function controller() {},
    controllerAs: 'dwSelectCenter',
    compile: function compile(tElement, tAttrs) {
      var input = angular.element('<ff-select name="center" flex="auto"></ff-select>');
      var options = angular.element('<option ng-repeat="center in dwSelectCenter.centers" ng-value="center.id" label="{{center.name}}">{{center.name}}</option>');
      options.attr('ng-style', 'center.color ? { color: center.color } : {}');
      input.attr('ff-style', 'dwSelectCenter.curCenter.color ? {color: dwSelectCenter.curCenter.color} : {}');
      input.attr('ff-model', tAttrs.ffModel || 'dwSelectCenter.curCenterId');
      input.attr('ff-change', 'dwSelectCenter.onCenterChange()');
      input.append(options);
      tElement.append(input);
      /**
       * Link function
       */

      return function link($scope, $element, $attrs, dwSelectCenter) {
        if (!tAttrs.ffModel) {
          // If no ffModel, use internal ffModel
          $scope.$watch(function () {
            return state.getCurrentCenterId();
          }, function (centerId) {
            dwSelectCenter.curCenterId = centerId;
            dwSelectCenter.curCenter = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, dwSelectCenter.centers, dwSelectCenter.curCenterId);
          });
        }
        /**
         * Current center change handler
         */


        dwSelectCenter.onCenterChange = function () {
          dwSelectCenter.curCenter = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, dwSelectCenter.centers, dwSelectCenter.curCenterId);

          if (!tAttrs.ffModel) {
            dwSelectCenter.curCenter = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, dwSelectCenter.centers, dwSelectCenter.curCenterId);
            state.setCurrentCenterId(dwSelectCenter.curCenterId);
          } else {
            dwSelectCenter.curCenter = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, dwSelectCenter.centers, $scope.$eval(tAttrs.ffModel));
          }
        };
        /**
         * Refresh centers
         */


        $rootScope.$on('CENTERS:REFRESH', function () {
          refreshCenters();
        });
        refreshCenters();

        function refreshCenters() {
          var promises = {
            centers: centerService.getCenters().catch(function (err) {
              return dwAlerts.error(err, 'dwSelectCenter: failed to query centers.');
            })
          };
          if (state.isLoggedAdmin()) promises.admin = Admin.get(state.getLoggedUserId()).catch(function (err) {
            return dwAlerts.error(err, 'dwSelectCenter: failed to get admin.');
          });
          return $q.all(promises).then(function (result) {
            var _context;

            dwSelectCenter.centers = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_context = result.centers).call(_context, function (center) {
              // filter centers for admins
              if (result.admin) return !!(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, result.admin.centers, center.id) || {}).permission;
              return true;
            });

            if ($attrs.ffOptionAll && $attrs.ffOptionAll !== 'false' && dwSelectCenter.centers.length > 1) {
              dwSelectCenter.centers.unshift({
                id: 0,
                name: 'All Centers'
              });
            }

            if (tAttrs.ffModel) {
              var model = $scope.$eval(tAttrs.ffModel);

              if (angular.isUndefined(model)) {
                dwSelectCenter.curCenterId = dwSelectCenter.centers[0].id;
                $scope.$eval(tAttrs.ffModel + ' = dwSelectCenter.curCenterId');
              } else {
                dwSelectCenter.curCenterId = model;
              }
            } else {
              dwSelectCenter.curCenterId = state.getCurrentCenterId() || dwSelectCenter.centers[0] && dwSelectCenter.centers[0].id;
            }

            dwSelectCenter.curCenter = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, dwSelectCenter.centers, dwSelectCenter.curCenterId);
          });
        }
      };
    }
  };
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-select-profile/dw-select-profile.directive.js":
/*!*****************************************************************************!*\
  !*** ./shared/dw-controls/dw-select-profile/dw-select-profile.directive.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * dwSelectProfile directive - sidebar widget for co-members to switch to one of master member profiles
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwSelectProfile', ['ngRoute', 'deskworks.state', 'flexForms', 'deskworks.helper', 'deskworks.userProfile.service']).directive('dwSelectProfile', ["$route", "state", "helper", "userProfileService", "resolveTimezone", function ($route, state, helper, userProfileService, resolveTimezone) {
  return {
    restrict: 'AC',
    scope: true,
    template: '<span>Current Profile</span>' + '<ff-select name="currentProfile" ff-model="currentProfile" ff-options="profile.name for profile in profiles" ff-change="selectProfile(currentProfile)"></ff-select>',
    compile: function compile(tElement, tAttrs) {
      tElement.css('display', 'none');
      return function link($scope, $element, $attrs) {
        $scope.profiles = [];
        /**
         * Logged User ID watcher, if logged, gets user profile from API and populates profiles collection.
         */

        $scope.$watch(function () {
          return state.getLoggedUserId();
        }, function (val) {
          if (state.isLoggedAdmin()) {
            $element.css('display', 'none');
            return;
          }

          if (val) {
            resolveTimezone().then(function () {
              return userProfileService.get(state.getCurrentCenterId(), state.getLoggedUserId());
            }).then(function (result) {
              // Add logged user to available profiles
              $scope.profiles = [{
                id: result.id,
                name: result.firstName + ' ' + result.lastName
              }]; // Add master members to available profiles

              result.masterMembers.forEach(function (masterMember) {
                if (masterMember.id !== val) {
                  $scope.profiles.push({
                    id: masterMember.id,
                    name: masterMember.company || masterMember.fullName
                  });
                  state.setCurrentUserId(masterMember.id);
                }
              });
              $scope.currentProfile = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $scope.profiles, state.getCurrentUserId()) || $scope.profiles[0];
              if ($scope.profiles.length > 1) $element.css('display', '');
            });
          } else {
            $scope.profiles = [];
            $scope.currentProfile = null;
            $element.css('display', 'none');
          }
        });
        /**
         * Selected User ID watcher, switches current profile in select
         */

        $scope.$watch(function () {
          return state.getCurrentUserId();
        }, function (val) {
          $scope.currentProfile = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $scope.profiles, val) || $scope.profiles[0];
        });
        /**
         * ngChange handler for profiles select
         */

        $scope.selectProfile = function (profile) {
          state.setCurrentUserId(profile.id === state.getLoggedUserId() ? null : profile.id); // Force reloading current route if it doesn't reload on search

          if ($route.current && $route.current.$$route && !$route.current.$$route.reloadOnSearch) $route.reload();
        };
      };
    }
  };
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-select-user/dw-select-user.directive.js":
/*!***********************************************************************!*\
  !*** ./shared/dw-controls/dw-select-user/dw-select-user.directive.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dw_select_user_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dw-select-user.scss */ "./shared/dw-controls/dw-select-user/dw-select-user.scss");
/* harmony import */ var _dw_select_user_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dw_select_user_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * dwSelectUser directive - wrapper for ffSelect with user selection
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwSelectUser', ['deskworks.state', 'flexForms', 'deskworks.helper']).directive('dwSelectUser', ["$route", "$rootScope", "state", "helper", function ($route, $rootScope, state, helper) {
  return {
    restrict: 'E',
    scope: true,
    compile: function compile(tElement, tAttrs) {
      var input = angular.element('<ff-static snap-close ng-click="searchUser()" role="button" aria-label="{{\'SIDEBAR.CURRENT_USER\' | translate}}"' + ' ng-class="{ ava: state.isUserSelected() && state.getCurrentUser().photo.indexOf(\'missing.png\') < 0 }"></ff-static>');
      var placeholder = angular.element('<span class="placeholder" ng-hide="state.isUserSelected()"' + ' translate="SIDEBAR.CURRENT_USER.LABEL"></span>');
      var company = angular.element('<span class="company" ng-show="state.isUserSelected() && state.getCurrentUser().company"' + ' ng-bind="state.getCurrentUser().company"></span>');
      var member = angular.element('<span class="member" ng-show="state.isUserSelected()"' + ' ng-bind="state.getCurrentUser().fullName"></span>');
      var avatar = angular.element('<ff-img class="avatar" ff-src="{{state.getCurrentUser().photo}}"' + ' ng-if="state.isUserSelected()"' + ' ff-alt="{{state.getCurrentUser().fullName}}">');
      var dim = angular.element('<div class="ff-dimmer ff-spin" ng-if="spinning()"></div>');
      input.append(placeholder).append(company).append(member).append(avatar).append(dim);
      tElement.append(input).append(avatar);
      return this.link;
    },
    link: function link($scope, $element, $attrs, $controller, $transclude) {
      $scope.state = state;
      $scope.helper = helper;

      $scope.searchUser = function searchUser() {
        state.setParam('redirect', $route.current && $route.current.scope && $route.current.scope.backPath ? $route.current.scope.backPath : state.getPath());
        state.setPath('/user-search');
      };

      $scope.spinning = function () {
        return state.isUserSelected() && state.getCurrentUser().id !== state.getCurrentUserId() || $scope.loading;
      };
      /**
       * $onDestroy
       */


      $scope.$onDestroy = function () {
        return unbindRouteEvents();
      };

      bindRouteEvents();
      /**
       * Bind/unbind route events
       */

      function bindRouteEvents() {
        $scope.offRouteStart = $rootScope.$on('$routeChangeStart', function ($event, $next) {
          if ($next.$$route) $scope.loading = $next.$$route.routeBranch === 'user-search';
        });
        $scope.offRouteSuccess = $rootScope.$on('$routeChangeSuccess', function () {
          $scope.loading = false;
        });
        $scope.offRouteError = $rootScope.$on('$routeChangeError', function () {
          $scope.loading = false;
        });
      }

      function unbindRouteEvents() {
        $scope.offRouteStart();
        $scope.offRouteSuccess();
        $scope.offRouteError();
      }
    }
  };
}]));

/***/ }),

/***/ "./shared/dw-controls/dw-select-user/dw-select-user.scss":
/*!***************************************************************!*\
  !*** ./shared/dw-controls/dw-select-user/dw-select-user.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/dw-invoice/dw-invoice.directive.js":
/*!***************************************************!*\
  !*** ./shared/dw-invoice/dw-invoice.directive.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dw_invoice_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dw-invoice.tpl.html */ "./shared/dw-invoice/dw-invoice.tpl.html");
/* harmony import */ var _dw_invoice_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dw_invoice_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/**
 * dwInvoice directive - component for displaying Deskworks specific invoices
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwInvoice', ['flexForms', 'deskworks.state', 'deskworks.helper']).directive('dwInvoice', function () {
  return {
    template: _dw_invoice_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    restrict: 'E',
    scope: true,
    controller: 'dwInvoiceCtrl as dwInvoice',
    bindToController: {
      center: '=*?',
      invoice: '=*',
      allowRemove: '@',
      updateInvoice: '&'
    },
    compile: function compile(tElement, tAttrs) {
      tElement.addClass('dw-invoice');
      return function link() {};
    }
  };
}).controller('dwInvoiceCtrl', ["$scope", "$element", "$attrs", "dwAlerts", "state", "purchaseService", function ($scope, $element, $attrs, dwAlerts, state, purchaseService) {
  var dwInvoice = this;
  /**
   * Remove/Void Item handler
   */

  dwInvoice.removeItem = function (item) {
    return purchaseService.deletePurchaseItem(state.getCurrentCenterId(), state.getCurrentUserId(), dwInvoice.invoice.id, item.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to remove purchase item.');
    }).then(function (result) {
      return dwInvoice.updateInvoice();
    });
  };
}]));

/***/ }),

/***/ "./shared/dw-invoice/dw-invoice.tpl.html":
/*!***********************************************!*\
  !*** ./shared/dw-invoice/dw-invoice.tpl.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-header> <ff-row> <cell flex=\"4 0 40px\" class=\"invoice-date ff-center\"><span translate=\"PURCHASE.INVOICE.DATE\"></span></cell> <cell flex=\"4 1 40px\" class=\"invoice-date-created ff-center show-lg\"><span translate=\"PURCHASE.INVOICE.DATE_CREATED\"></span></cell> <cell flex=\"4 1 40px\" class=\"invoice-added-by ff-center show-lg\"><span translate=\"PURCHASE.INVOICE.ADDED_BY\"></span></cell> <cell flex=\"4 0 70px\" class=\"invoice-product\"><span translate=\"PURCHASE.INVOICE.PRODUCT\"></span></cell> <cell flex=\"10 1 100px\" class=\"invoice-description show-md\"><span translate=\"PURCHASE.INVOICE.DESCRIPTION\"></span></cell> <cell flex=\"0 0 46px\" class=\"invoice-quantity ff-center show-sm\"><span translate=\"PURCHASE.INVOICE.QUANTITY\"></span></cell> <cell flex=\"0 0 90px\" class=\"invoice-price ff-right show-sm\"><span translate=\"PURCHASE.INVOICE.PRICE\"></span></cell> <cell flex=\"0 0 90px\" class=\"invoice-amount ff-right\"><span translate=\"PURCHASE.INVOICE.AMOUNT\"></span></cell> <ff-btn-group flex=\"0 0 auto\" ng-if=\"::dwInvoice.allowRemove !== 'false'\" class=\"buttons-row zero-height\"> <ff-btn sense=\"remove\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-row ng-repeat=\"item in dwInvoice.invoice.items\"> <ff-static flex=\"4 0 40px\" class=\"invoice-date ff-center\" ff-bind=\"::item.billedAt | date:'mediumDate'\"></ff-static> <ff-static flex=\"4 1 40px\" class=\"invoice-date-created ff-center show-lg\" ff-bind=\"::item.createdAt | date:'mediumDate'\"></ff-static> <ff-static flex=\"4 1 40px\" class=\"invoice-added-by ff-center show-lg\" ff-bind=\"::item.addedBy\"></ff-static> <ff-static flex=\"4 0 70px\" class=\"invoice-product\" ff-bind=\"::item.name\"></ff-static> <ff-static flex=\"10 1 100px\" class=\"invoice-description show-md\" ff-bind=\"::item.description\"></ff-static> <ff-static flex=\"0 0 46px\" class=\"invoice-quantity ff-center show-sm\" ff-bind=\"::item.quantity | round\"></ff-static> <ff-static flex=\"0 0 90px\" class=\"invoice-price ff-right show-sm\" ff-bind=\"::item.price | ncurrency\"></ff-static> <ff-static flex=\"0 0 90px\" class=\"invoice-amount ff-right\" ff-bind=\"::item.amount | ncurrency\"></ff-static> <ff-btn-group flex=\"0 0 auto\" ng-if=\"::dwInvoice.allowRemove !== 'false'\" class=\"buttons-row\"> <ff-col> <ff-btn sense=\"remove\" size=\"xs\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\" ng-if=\"dwInvoice.invoice.accessRights.items[$index].canDelete || !dwInvoice.invoice.accessRights.items[$index].canVoid\" ng-class=\"{ 'zero-height': !dwInvoice.invoice.accessRights.items[$index].canDelete }\" ff-click=\"dwInvoice.removeItem(item)\"></ff-btn> <ff-btn sense=\"remove\" size=\"xs\" title=\"{{'PURCHASE.INVOICE.BTN_VOID' | translate}}\" ng-if=\"dwInvoice.invoice.accessRights.items[$index].canVoid || !dwInvoice.invoice.accessRights.items[$index].canDelete\" ng-class=\"{ 'zero-height': !dwInvoice.invoice.accessRights.items[$index].canVoid }\" ff-click=\"dwInvoice.removeItem(item)\"></ff-btn> </ff-col> </ff-btn-group> </ff-row> <ff-row class=\"invoice-charges\"> <ff-label><span translate=\"PURCHASE.INVOICE.CHARGES\"></span></ff-label> <ff-static flex=\"0 0 90px\" class=\"ff-right\" ff-bind=\"dwInvoice.invoice.chargesTotal | ncurrency\"></ff-static> <ff-btn-group flex=\"0 0 auto\" ng-if=\"::dwInvoice.allowRemove !== 'false'\" class=\"buttons-row zero-height\"> <ff-btn sense=\"remove\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> <ff-row class=\"invoice-tax\" ng-repeat=\"tax in dwInvoice.invoice.taxes\"> <ff-label>{{tax.taxName}}</ff-label> <ff-static flex=\"0 0 90px\" class=\"ff-right\" ff-bind=\"tax.taxAmount | ncurrency\"></ff-static> <ff-btn-group flex=\"0 0 auto\" ng-if=\"::dwInvoice.allowRemove !== 'false'\" class=\"buttons-row zero-height\"> <ff-btn sense=\"remove\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> <ff-row class=\"invoice-payment\"> <ff-label><span translate=\"PURCHASE.INVOICE.PAYMENT\"></span></ff-label> <ff-static flex=\"0 0 90px\" class=\"ff-right\" ff-bind=\"dwInvoice.invoice.paymentTotal | ncurrency\"></ff-static> <ff-btn-group flex=\"0 0 auto\" ng-if=\"::dwInvoice.allowRemove !== 'false'\" class=\"buttons-row zero-height\"> <ff-btn sense=\"remove\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> <ff-row class=\"invoice-balance\"> <ff-label><span translate=\"PURCHASE.INVOICE.BALANCE\"></span></ff-label> <ff-static flex=\"0 0 90px\" class=\"ff-right\" ff-bind=\"dwInvoice.invoice.balance | ncurrency\"></ff-static> <ff-btn-group flex=\"0 0 auto\" ng-if=\"::dwInvoice.allowRemove !== 'false'\" class=\"buttons-row zero-height\"> <ff-btn sense=\"remove\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/dw-modal/dw-modal.scss":
/*!***************************************!*\
  !*** ./shared/dw-modal/dw-modal.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/dw-modal/dw-modal.service.js":
/*!*********************************************!*\
  !*** ./shared/dw-modal/dw-modal.service.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dw_modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dw-modal.scss */ "./shared/dw-modal/dw-modal.scss");
/* harmony import */ var _dw_modal_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dw_modal_scss__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('dwModal', ['angularModalService']).factory('dwModal', ["ModalService", function (ModalService) {
  return {
    show: function show(options) {
      var defaults = {
        bodyClass: 'dw-modal-open',
        appendElement: angular.element(document.querySelector('.snap-content'))
      };
      return ModalService.showModal(angular.extend({}, defaults, options)).then(function (modal) {
        var cross = modal.element[0].querySelector('.dw-modal-cross');
        if (cross) cross.focus();
        return modal;
      });
    }
  };
}]));

/***/ }),

/***/ "./shared/forbid/forbid.directive.js":
/*!*******************************************!*\
  !*** ./shared/forbid/forbid.directive.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _forbid_tpl_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forbid.tpl.html */ "./shared/forbid/forbid.tpl.html");
/* harmony import */ var _forbid_tpl_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_forbid_tpl_html__WEBPACK_IMPORTED_MODULE_3__);




/**
 * forbid directive - forbids staff/members to access content.
 * E.g. prevent repeating self-registration in same center.
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('forbid', []).directive('forbid', ["$compile", "session", "state", "userProfileService", function ($compile, session, state, userProfileService) {
  return {
    restrict: 'EA',
    scope: true,
    controller: 'ForbidCtrl as $forbid',
    bindToController: {
      admin: '<?',
      member: '<?'
    },
    link: function link($scope, $element, $attrs, $forbid) {
      var content = $element.children().css({
        display: 'none'
      });
      session.wait().then(function () {
        if ($forbid.member) {
          $scope.$watch(function () {
            return state.getCurrentCenterId();
          }, function (centerId) {
            var _context;

            $forbid.center = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context = $forbid.member.activatedAt).call(_context, function (i) {
              return i.centerId === centerId;
            });

            if ($forbid.center) {
              content.css({
                display: 'none'
              });
              $element.append($compile(_forbid_tpl_html__WEBPACK_IMPORTED_MODULE_3___default.a)($scope));
              $forbid.forbid = 'member';
            } else {
              content.css({
                display: null
              });
              var el = $element[0].querySelector('#forbid');

              if (el) {
                el.remove();
              }

              $forbid.forbid = null;
            }
          });
        } else if ($forbid.admin && session.isAdmin()) {
          $element.append($compile(_forbid_tpl_html__WEBPACK_IMPORTED_MODULE_3___default.a)($scope));
          $forbid.forbid = 'admin';
        } else {
          content.css({
            display: null
          });
        }
      });
    }
  };
}]).controller('ForbidCtrl', ["$scope", "$route", "$timeout", "state", function ($scope, $route, $timeout, state) {
  var $forbid = this;

  $forbid.signOut = function () {
    return state.logout({
      skipResetParams: true
    }).finally(function () {
      return $route.reload(), $timeout(5000);
    });
  };

  $forbid.home = function () {
    state.resetParams();
    return state.setPath('/');
  };
}]));

/***/ }),

/***/ "./shared/forbid/forbid.tpl.html":
/*!***************************************!*\
  !*** ./shared/forbid/forbid.tpl.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"forbid\"> <h1 class=\"page-title\" translate=\"GLOBAL.FORBID_STAFF.HEADER\"></h1> <ff-panel class=\"ff-center\"> <span translate=\"GLOBAL.FORBID_STAFF.TEXT\" ng-if=\"$forbid.forbid === 'admin'\"></span> <span translate=\"GLOBAL.FORBID_MEMBER.TEXT\" translate-values=\"{ center: $forbid.center.centerName }\" ng-if=\"$forbid.forbid === 'member'\"></span> </ff-panel> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"signOut\" ff-click=\"$forbid.signOut()\" ng-if=\"$forbid.forbid === 'admin'\"><span translate=\"GLOBAL.BTN_SIGN_OUT\"></span></ff-btn> <ff-btn sense=\"home\" ff-click=\"$forbid.home()\"><span translate=\"GLOBAL.BTN_HOME\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/form-design/fd-field-templates.service.js":
/*!**********************************************************!*\
  !*** ./shared/form-design/fd-field-templates.service.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_dw_controls_dw_email_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/dw-controls/dw-email.directive */ "./shared/dw-controls/dw-email.directive.js");
/* harmony import */ var shared_dw_controls_dw_phone_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/dw-controls/dw-phone.directive */ "./shared/dw-controls/dw-phone.directive.js");


/**
 * Form Design Fields templates
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.formDesign.fdFieldTemplates', [shared_dw_controls_dw_email_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_dw_controls_dw_phone_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name]).factory('fdFieldTemplates', function () {
  var attrs = 'ff-attr-id="fd-{{field.id}}" name="fd-{{field.id}}" ff-model="field.value" ff-required="field.required"';
  var start = '<label class="ff-row"><ff-label flex="1 1 160px"><span>{{field.name}}<req ng-if="field.required"></req></span></ff-label>';
  var end = '</label>';
  return {
    text: start + '<ff-text flex="0 1 110px" ' + attrs + ' ff-validate-alert="{{field.name}}"></ff-text>' + end,
    textarea: start + '<ff-textarea flex="0 1 110px" ' + attrs + '></ff-textarea>' + end,
    date: start + '<ff-date flex="0 1 110px" ' + attrs + ' ff-validate-alert="{{field.name}}"></ff-date>' + end,
    url: start + '<ff-url flex="0 1 110px" ' + attrs + ' ff-validate-alert="{{field.name}}"></ff-url>' + end,
    email: start + '<ff-text flex="0 1 110px" ' + attrs + ' dw-email></ff-text>' + end,
    phone: start + '<ff-text flex="0 1 110px" ' + attrs + ' dw-phone></ff-text>' + end,
    number: start + '<ff-number flex="0 1 110px" ' + attrs + ' ff-validate-alert="{{field.name}}"></ff-number>' + end,
    customPrice: start + '<ff-price flex="0 1 110px" ' + attrs + ' ff-validate-alert="{{field.name}}"></ff-price>' + end,
    extraPrice: start + '<ff-price flex="0 1 110px" ' + attrs + ' ff-validate-alert="{{field.name}}"></ff-price>' + end,
    dropdown: start + '<ff-select flex="0 1 110px" ' + attrs + ' ff-options="opt.id as opt.name for opt in field.options" ff-validate-alert="{{field.name}}"></ff-select>' + end,
    checkbox: start + '<ff-static flex="0 0 36px" class="ff-center"><ff-checkbox ' + attrs + ' ff-validate-alert="{{field.name}}"></ff-checkbox></ff-static>' + end
  };
}));

/***/ }),

/***/ "./shared/form-design/fd-field.directive.js":
/*!**************************************************!*\
  !*** ./shared/form-design/fd-field.directive.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fd_field_templates_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fd-field-templates.service */ "./shared/form-design/fd-field-templates.service.js");

/**
 * fdField directive - expands to template appropriate for field type
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.formDesign.fdField', [_fd_field_templates_service__WEBPACK_IMPORTED_MODULE_0__["default"].name]).directive('fdField', ["$compile", "fdFieldTemplates", function ($compile, fdFieldTemplates) {
  return {
    scope: true,
    require: "^^?form",
    link: function link($scope, $element, $attrs, form) {
      $scope.field = $scope.$eval($attrs.field);
      var el = angular.element(fdFieldTemplates[$scope.field.type]);
      $element.append(el);
      $compile(el)($scope);
    }
  };
}]));

/***/ }),

/***/ "./shared/membership-filter/membership-filter.directive.js":
/*!*****************************************************************!*\
  !*** ./shared/membership-filter/membership-filter.directive.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _membership_filter_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./membership-filter.scss */ "./shared/membership-filter/membership-filter.scss");
/* harmony import */ var _membership_filter_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_membership_filter_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _membership_filter_tpl_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./membership-filter.tpl.html */ "./shared/membership-filter/membership-filter.tpl.html");
/* harmony import */ var _membership_filter_tpl_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_membership_filter_tpl_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_membership_filter_opts_membership_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/membership-filter/opts-membership-filter.service */ "./shared/membership-filter/opts-membership-filter.service.js");






/**
 * membershipFilter directive - component for selecting membership in user search and membership report
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.membershipFilter', ['flexForms', 'deskworks.state', 'deskworks.helper', shared_membership_filter_opts_membership_filter_service__WEBPACK_IMPORTED_MODULE_5__["default"].name]).directive('membershipFilter', function () {
  return {
    template: _membership_filter_tpl_html__WEBPACK_IMPORTED_MODULE_4___default.a,
    restrict: 'E',
    scope: true,
    controller: 'MembershipFilterCtrl as $ctrl',
    bindToController: {
      ffModel: '=?',
      filterData: '=?',
      layout: '@?'
    }
  };
}).controller('MembershipFilterCtrl', ["$scope", "$element", "$attrs", "state", "helper", "optsMembershipFilter", function ($scope, $element, $attrs, state, helper, optsMembershipFilter) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.filterData = $ctrl.filterData || angular.copy(optsMembershipFilter);
    updateModel();
  };
  /**
   * Filter checkbox change handler
   */


  $ctrl.onChange = function (filter) {
    if (filter.id === 'all') {
      var val = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.filterData, 'all').value;

      $ctrl.filterData.forEach(function (filter) {
        if (filter.id === 'all') return;
        filter.value = val;
      });

      if (!val) {
        _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.filterData, 'activeMembers').value = true;
      }
    } else {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.filterData, 'all').value = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(_context = $ctrl.filterData).call(_context, function (filter) {
        return filter.id !== 'all';
      }).every(function (filter) {
        return filter.value;
      });
    }

    updateModel();
  };

  function updateModel() {
    var _context2;

    $ctrl.ffModel = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = $ctrl.filterData).call(_context2, function (filter) {
      return filter.id !== 'all';
    }).reduce(function (obj, filter) {
      if (filter.value) obj[filter.id] = filter.value;
      return obj;
    }, {});
  }
}]));

/***/ }),

/***/ "./shared/membership-filter/membership-filter.scss":
/*!*********************************************************!*\
  !*** ./shared/membership-filter/membership-filter.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/membership-filter/membership-filter.tpl.html":
/*!*************************************************************!*\
  !*** ./shared/membership-filter/membership-filter.tpl.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label ng-if=\"$ctrl.layout\" class=\"ff-grid\" flex=\"1 0 180px\" ng-repeat=\"filter in $ctrl.filterData\" ng-class=\"'mf-' + filter.type\"> <ff-label> <ff-checkbox name=\"role\" ff-model=\"filter.value\" ff-change=\"$ctrl.onChange(filter)\">{{filter.name}}</ff-checkbox> </ff-label> </label> <label ng-if=\"!$ctrl.layout\" ng-repeat=\"filter in $ctrl.filterData\" ng-class=\"'mf-' + filter.type\"> <ff-checkbox name=\"role\" ff-model=\"filter.value\" ff-change=\"$ctrl.onChange(filter)\">{{filter.name}}</ff-checkbox> </label> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/membership-filter/opts-membership-filter.service.js":
/*!********************************************************************!*\
  !*** ./shared/membership-filter/opts-membership-filter.service.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Membership Filter
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsMembershipFilter', []).factory('optsMembershipFilter', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 'all',
    _name: 'USER_SEARCH.FILTERS.ALL',
    value: false,
    type: 'all'
  }, {
    id: 'activeMembers',
    _name: 'USER_SEARCH.FILTERS.ACTIVE_MEMBERS',
    value: true,
    type: 'role'
  }, {
    id: 'inactiveMembers',
    _name: 'USER_SEARCH.FILTERS.INACTIVE_MEMBERS',
    value: false,
    type: 'role'
  }, {
    id: 'activeCoMembers',
    _name: 'USER_SEARCH.FILTERS.ACTIVE_CO_MEMBERS',
    value: false,
    type: 'role'
  }, {
    id: 'inactiveCoMembers',
    _name: 'USER_SEARCH.FILTERS.INACTIVE_CO_MEMBERS',
    value: false,
    type: 'role'
  }, {
    id: 'nonMembers',
    _name: 'USER_SEARCH.FILTERS.NON_MEMBERS',
    value: false,
    type: 'role'
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

/***/ "./shared/message-board-user-settings/message-board-user-settings.directive.js":
/*!*************************************************************************************!*\
  !*** ./shared/message-board-user-settings/message-board-user-settings.directive.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_board_user_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-board-user-settings.service */ "./shared/message-board-user-settings/message-board-user-settings.service.js");
/* harmony import */ var _opts_message_board_notices_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opts-message-board-notices.service */ "./shared/message-board-user-settings/opts-message-board-notices.service.js");
/* harmony import */ var _message_board_user_settings_tpl_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-board-user-settings.tpl.html */ "./shared/message-board-user-settings/message-board-user-settings.tpl.html");
/* harmony import */ var _message_board_user_settings_tpl_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_message_board_user_settings_tpl_html__WEBPACK_IMPORTED_MODULE_2__);



/**
 * messageBoardUserSettings directive - Message Board -> User Settings directive
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.messageBoardUserSettings', ['deskworks.MessageBoardUserSettings', 'deskworks.optsMessageBoardNotices']).directive('messageBoardUserSettings', function () {
  return {
    template: _message_board_user_settings_tpl_html__WEBPACK_IMPORTED_MODULE_2___default.a,
    restrict: 'EAC',
    scope: true,
    controller: 'MessageBoardUserSettingsCtrl as $ctrl',
    bindToController: {
      userId: '<',
      save: '='
    }
  };
}).controller('MessageBoardUserSettingsCtrl', ["$scope", "$timeout", "state", "helper", "dwAlerts", "MessageBoardUserSettings", "optsMessageBoardNotices", function ($scope, $timeout, state, helper, dwAlerts, MessageBoardUserSettings, optsMessageBoardNotices) {
  var $ctrl = this;
  $ctrl.optsMessageBoardNotices = optsMessageBoardNotices;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $ctrl.save = save;
    MessageBoardUserSettings.get($ctrl.userId).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get message board user settings.');
    }).then(function (settings) {
      $ctrl.settings = settings;
    });
  };
  /**
   * Save user settings
   */


  function save() {
    return $timeout(function () {
      return MessageBoardUserSettings.save($ctrl.userId, $ctrl.settings).catch(function (err) {
        return dwAlerts.error(err, 'Failed to save message board user settings.');
      });
    });
  }
}]));

/***/ }),

/***/ "./shared/message-board-user-settings/message-board-user-settings.service.js":
/*!***********************************************************************************!*\
  !*** ./shared/message-board-user-settings/message-board-user-settings.service.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.MessageBoardUserSettings', ['ngResource', 'deskworks.config']).factory('MessageBoardUserSettings', ["$resource", "$q", "deskworksConfig", "helper", function ($resource, $q, deskworksConfig, helper) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/dw-mail/message-board/users/:userId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get(userId) {
      if (!userId || helper.isUid(userId)) return $q.when({
        notification: 'immediately'
      });
      return res.get({
        userId: userId
      }).$promise;
    },
    save: function save(userId, data) {
      return res.update({
        userId: userId
      }, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "./shared/message-board-user-settings/message-board-user-settings.tpl.html":
/*!*********************************************************************************!*\
  !*** ./shared/message-board-user-settings/message-board-user-settings.tpl.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<label class=\"ff-row\" ff-dim=\"!$ctrl.settings\"> <ff-label flex=\"0 1 132px\"> <span translate=\"USER_PROFILE.MESSAGE_BOARD_NOTICES\"></span> </ff-label> <ff-select flex=\"1 1 1%\" name=\"messageBoardNotices\" ff-model=\"$ctrl.settings.notification\" ff-options=\"opt.id as opt.name for opt in $ctrl.optsMessageBoardNotices\"></ff-select> </label> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/message-board-user-settings/opts-message-board-notices.service.js":
/*!**********************************************************************************!*\
  !*** ./shared/message-board-user-settings/opts-message-board-notices.service.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Message Board notices period in User Profile -> Login Information
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsMessageBoardNotices', []).factory('optsMessageBoardNotices', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'immediately',
    _name: 'USER_PROFILE.MESSAGE_BOARD_NOTICES.IMMEDIATELY'
  }, {
    id: 'daily',
    _name: 'USER_PROFILE.MESSAGE_BOARD_NOTICES.DAILY'
  }, {
    id: 'weekly',
    _name: 'USER_PROFILE.MESSAGE_BOARD_NOTICES.WEEKLY'
  }, {
    id: 'never',
    _name: 'USER_PROFILE.MESSAGE_BOARD_NOTICES.NEVER'
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

/***/ "./shared/nice-date-time/nice-time.directive.js":
/*!******************************************************!*\
  !*** ./shared/nice-date-time/nice-time.directive.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);


/**
 * niceTime directive - expands to hh:mm<sup>a</sup> or HH:mm depending on $locale.timeFormat
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('niceTimeDirective', []).directive('niceTime', ["$compile", "$locale", function ($compile, $locale) {
  return {
    restrict: 'A',
    compile: function compile(tElement, tAttrs) {
      return function ($scope, $element, $attrs) {
        var tpl;

        if ($locale.timeFormat === 24) {
          var _context;

          var format = tAttrs.niceFormat === 'shortHours' ? 'H' : 'HH:mm';
          tpl = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = "<span ng-bind=\"".concat(tAttrs.niceTime, " | date: '")).call(_context, format, "'\"></span>");
        } else {
          var _context2, _context3;

          var _format = tAttrs.niceFormat === 'shortHours' ? 'h' : 'hh:mm';

          tpl = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = "<span ng-bind=\"".concat(tAttrs.niceTime, " | date: '")).call(_context3, _format, "'\"></span><sup ng-bind=\"")).call(_context2, tAttrs.niceTime, " | date: 'a'\"></sup>");
        }

        $element.empty().append($compile(tpl)($scope));
      };
    }
  };
}]));

/***/ }),

/***/ "./shared/scroll-pointer-events-none/scroll-pointer-events-none.directive.js":
/*!***********************************************************************************!*\
  !*** ./shared/scroll-pointer-events-none/scroll-pointer-events-none.directive.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll_pointer_events_none_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-pointer-events-none.scss */ "./shared/scroll-pointer-events-none/scroll-pointer-events-none.scss");
/* harmony import */ var _scroll_pointer_events_none_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scroll_pointer_events_none_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * scrollPointerEventsNone directive - sets pointer-events: none; on scroll for scroll performance
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('scrollPointerEventsNone', []).directive('scrollPointerEventsNone', function () {
  return {
    restrict: 'AC',
    link: function link($scope, $element) {
      $element.on('scroll', onScroll);
      $scope.$on('$destroy', function () {
        return $element.off('scroll', onScroll);
      });
      var timer;

      function onScroll() {
        clearTimeout(timer);
        $element.addClass('pointer-events-none');
        timer = setTimeout(function () {
          return $element.removeClass('pointer-events-none');
        }, 100);
      }
    }
  };
}));

/***/ }),

/***/ "./shared/scroll-pointer-events-none/scroll-pointer-events-none.scss":
/*!***************************************************************************!*\
  !*** ./shared/scroll-pointer-events-none/scroll-pointer-events-none.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/services/inventory/reservation-unit.service.js":
/*!***************************************************************!*\
  !*** ./shared/services/inventory/reservation-unit.service.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationUnit', ['ngResource', 'ngFileUpload', 'deskworks.config']).factory('ReservationUnit', ["$resource", "$q", "Upload", "deskworksConfig", function ($resource, $q, Upload, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/reservation-units/:id'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    /**
     * Query
     */
    query: function query(centerId) {
      return res.query({
        centerId: centerId
      }).$promise;
    },

    /**
     * Get
     */
    get: function get(centerId, id) {
      return id === 'new' ? $q.when({
        id: 'new',
        expectedUsePerMonth: 240
      }) : res.get({
        centerId: centerId,
        id: id
      }).$promise;
    },

    /**
     * Save
     */
    save: function save(centerId, resUnit) {
      return resUnit.id && resUnit.id !== 'new' ? res.update({
        centerId: centerId,
        id: resUnit.id
      }, resUnit).$promise : res.save({
        centerId: centerId
      }, resUnit).$promise.then(function (result) {
        return resUnit.id = result.id, result;
      });
    },

    /**
     * Delete
     */
    delete: function _delete(centerId, id) {
      return res.delete({
        centerId: centerId,
        id: id
      }).$promise;
    },

    /**
     * Upload photo
     */
    uploadPhoto: function uploadPhoto(centerId, id, file) {
      var _context;

      return Upload.upload({
        url: deskworksConfig.getApiAbsUrl(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = "/centers/".concat(centerId, "/reservation-units/")).call(_context, id)),
        method: 'PUT',
        withCredentials: true,
        data: {
          photo: file
        }
      });
    },

    /**
     * Delete photo
     * @param params.centerId
     * @param params.id
     * @returns {Resource.$promise}
     */
    deletePhoto: function deletePhoto(params) {
      return res.update(params, {
        photo: null
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./shared/services/setup/reservation-field.service.js":
/*!************************************************************!*\
  !*** ./shared/services/setup/reservation-field.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationField', ['ngResource', 'deskworks.config']).factory('ReservationField', ["$resource", "$filter", "$timeout", "deskworksConfig", "helper", function ($resource, $filter, $timeout, deskworksConfig, helper) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/reservation-fields/:id'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise.then(function (fields) {
        return addFilters(fields);
      }).then(function (fields) {
        return addDeserializers(fields);
      }).then(function (fields) {
        return addSerializers(fields);
      });
    },
    save: function save(field) {
      if (field.id) return res.update({
        id: field.id
      }, field).$promise;
      return res.save(field).$promise.then(function (result) {
        field.id = result.id;
      });
    },
    delete: function _delete(id) {
      return res.delete({
        id: id
      }).$promise;
    }
  };

  function addFilters(fields) {
    var notEmpty = function notEmpty(v) {
      return v || v === 0 || v === false;
    };

    var types = {
      date: function date(f, v) {
        return notEmpty(v) ? $filter('date')(v, 'mediumDate') : '-';
      },
      customPrice: function customPrice(f, v) {
        return notEmpty(v) ? $filter('ncurrency')(v) : '-';
      },
      extraPrice: function extraPrice(f, v) {
        return notEmpty(v) ? $filter('ncurrency')(v) : '-';
      },
      dropdown: function dropdown(f, v) {
        var _context;

        return notEmpty(v) ? _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context = f.options).call(_context, function (o) {
          return o.id == v;
        }).name : '-';
      },
      checkbox: function checkbox(f, v) {
        return notEmpty(v) ? $filter('yesno')(v) : '-';
      }
    };
    fields.forEach(function (f) {
      f.$$filter = types[f.type] || function (f, v) {
        return notEmpty(v) ? v : '-';
      };
    });
    return fields;
  }

  function addDeserializers(fields) {
    var types = {
      date: function date(f, v) {
        return $filter('toDate')(v);
      },
      customPrice: function customPrice(f, v) {
        return isNaN(+v) ? v : +v;
      },
      extraPrice: function extraPrice(f, v) {
        return isNaN(+v) ? v : +v;
      },
      dropdown: function dropdown(f, v) {
        return isNaN(+v) ? v : +v;
      },
      number: function number(f, v) {
        return isNaN(+v) ? v : +v;
      },
      checkbox: function checkbox(f, v) {
        return v === 'true' ? true : v === 'false' ? false : v;
      }
    };
    fields.forEach(function (f) {
      f.$$deserialize = types[f.type] || function (f, v) {
        return v;
      };
    });
    return fields;
  }

  function addSerializers(fields) {
    var types = {
      date: function date(f, v) {
        return $filter('date')(v, 'yyyy-MM-dd');
      },
      customPrice: function customPrice(f, v) {
        return isNaN(+v) ? v : +v;
      },
      extraPrice: function extraPrice(f, v) {
        return isNaN(+v) ? v : +v;
      },
      dropdown: function dropdown(f, v) {
        return isNaN(+v) ? v : +v;
      },
      number: function number(f, v) {
        return isNaN(+v) ? v : +v;
      },
      checkbox: function checkbox(f, v) {
        return v === 'true' ? true : v === 'false' ? false : v;
      }
    };
    fields.forEach(function (f) {
      f.$$serialize = types[f.type] || function (f, v) {
        return v;
      };
    });
    return fields;
  }
}]));

/***/ }),

/***/ "./shared/services/setup/user-field.service.js":
/*!*****************************************************!*\
  !*** ./shared/services/setup/user-field.service.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.UserField', ['ngResource', 'deskworks.config']).factory('UserField', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/user-fields/:fieldId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    },
    save: function save(field) {
      if (field.id) return res.update({
        fieldId: field.id
      }, field).$promise;
      return res.save(field).$promise.then(function (result) {
        field.id = result.id;
      });
    },
    delete: function _delete(fieldId) {
      return res.delete({
        fieldId: fieldId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./shared/services/usage/manual-check-in.service.js":
/*!**********************************************************!*\
  !*** ./shared/services/usage/manual-check-in.service.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ManualCheckIn', ['ngResource', 'deskworks.config']).factory('ManualCheckIn', ["$resource", "$filter", "$timeout", "deskworksConfig", function ($resource, $filter, $timeout, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/manual-check-ins/:recurringId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    /**
     * @param params.centerId
     * @param params.userId
     * @returns {*}
     */
    query: function query(params) {
      var centerId = params.centerId,
          userId = params.userId;
      return res.query({
        centerId: centerId,
        userId: userId
      }).$promise.then(function (rbs) {
        return rbs.forEach(function (rb) {
          rb.$$count = rb.$$count || rb.checkInCount || 1;
        }), rbs;
      });
    },

    /**
     * @param params.centerId
     * @param params.userId
     * @param params.recurringId
     * @param params.checkInCount
     * @returns {*}
     */
    save: function save(params) {
      var centerId = params.centerId,
          userId = params.userId,
          recurringId = params.recurringId,
          checkInCount = params.checkInCount;
      return res.update({
        centerId: centerId,
        userId: userId,
        recurringId: recurringId
      }, {
        checkInCount: checkInCount
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./shared/uids/cuid.service.js":
/*!*************************************!*\
  !*** ./shared/uids/cuid.service.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Counter UID service - unique runtime counter
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('cuid', []).factory('cuid', function () {
  var counter = 0;
  return function () {
    return ++counter;
  };
}));

/***/ }),

/***/ "./shared/wizard-reservation/wizard-reservation-routes.js":
/*!****************************************************************!*\
  !*** ./shared/wizard-reservation/wizard-reservation-routes.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  routes: [{
    url: 'reservation',
    id: 'reservation'
  }, {
    url: 'sign-in',
    id: 'signIn'
  }, {
    url: 'confirm',
    id: 'confirm'
  }, {
    url: 'complete',
    id: 'complete'
  }, {
    url: 'purchase',
    id: 'purchase'
  }, {
    url: 'sign-up',
    id: 'signUp'
  }, {
    url: 'staff-help',
    id: 'staffHelp'
  }],

  /**
   * 02. Reservation
   */
  reservation: {
    template: '<res-reservation center="$resolve.center" cal-data="$resolve.calData"' + ' hide-reservation-cost-estimate="$resolve.settings.hideReservationCostEstimate"' + ' hide-recurring-reservations="$resolve.settings.hideRecurringReservations"' + ' hide-staff-only-units="$resolve.settings.hideStaffOnlyUnits"' + ' reservation-fields="$resolve.reservationFields" hide-calendar-btn="true"' + ' back="$ctrl.back()" next="$ctrl.next()"></res-reservation>',
    controller: 'WizardReservationReservationCtrl as $ctrl',
    hideBanner: true,
    class: 'wizard-reservation-reservation',
    userTasksPolicy: false,
    reloadOnSearch: false,
    translations: ['reservations', 'book-it-now'],
    resolve: {
      /*@ngInject*/
      calData: ["$filter", "state", "helper", "dwAlerts", "calendarService", "resolveTimezone", function calData($filter, state, helper, dwAlerts, calendarService, resolveTimezone) {
        return resolveTimezone().then(function () {
          var date = $filter('toDate')(state.getParam('date'), 'Z');
          date = moment.isMoment(date) ? date : moment();
          return calendarService.query(state.getCurrentCenterId(), date, date, state.getParam('role')).catch(function (err) {
            return dwAlerts.error(err, 'Failed to fetch calendar data.');
          });
        });
      }],

      /*@ngInject*/
      center: ["state", "dwAlerts", "centerService", function center(state, dwAlerts, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],

      /*@ngInject*/
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],

      /*@ngInject*/
      reservationFields: ["dwAlerts", "ReservationField", function reservationFields(dwAlerts, ReservationField) {
        return ReservationField.query().catch(function (err) {
          return dwAlerts.error(err, 'Failed to query reservation fields.');
        });
      }]
    }
  },

  /**
   * 03. Sign In
   */
  signIn: {
    template: '<dw-sign-in id="signIn" show-sign-up="true"></dw-sign-in>',
    controller: 'WizardReservationSignInCtrl as $ctrl',
    userTasksPolicy: false,
    translations: ['sign-in'],
    resolve: {}
  },

  /**
   * 04. Confirm (for member/admin or on free reservation)
   */
  confirm: {
    template: '<div ng-include="\'wizard-reservation/04-confirm/confirm.tpl.html\'"></div>',
    controller: 'WizardReservationConfirmCtrl as $ctrl',
    userTasksPolicy: false,
    reloadOnSearch: false,
    translations: ['reservations'],
    resolve: {
      /*@ngInject*/
      center: ["state", "dwAlerts", "centerService", "routeHelper", function center(state, dwAlerts, centerService, routeHelper) {
        return routeHelper.auth("/".concat(state.getPath().split('/')[1], "/sign-in")).then(function () {
          return centerService.get(state.getCurrentCenterId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get center.');
          });
        });
      }],

      /*@ngInject*/
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],

      /*@ngInject*/
      reservationUnit: ["$q", "$filter", "state", "helper", "routeHelper", "dwAlerts", "calendarService", "resolveTimezone", function reservationUnit($q, $filter, state, helper, routeHelper, dwAlerts, calendarService, resolveTimezone) {
        return $q.all([routeHelper.auth("/".concat(state.getPath().split('/')[1], "/sign-in")), resolveTimezone()]).then(function () {
          var date = $filter('toDate')(state.getParam('date'), 'Z');
          date = moment.isMoment(date) ? date : moment();
          return calendarService.query(state.getCurrentCenterId(), date, date).catch(function (err) {
            return dwAlerts.error(err, 'Failed to fetch calendar data.');
          }).then(function (types) {
            return types.reduce(function (result, type) {
              var _context;

              return result || _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = type.reservationUnits).call(_context, function (unit) {
                return unit.id === +state.getParam('unit');
              });
            }, null);
          });
        });
      }],

      /*@ngInject*/
      reservationFields: ["dwAlerts", "ReservationField", "session", function reservationFields(dwAlerts, ReservationField, session) {
        return session.wait().catch(angular.noop).then(function () {
          return ReservationField.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation fields.');
          });
        });
      }]
    }
  },

  /**
   * 05. Complete
   */
  complete: {
    template: '<div ng-include="\'wizard-reservation/05-complete/complete.tpl.html\'"></div>',
    controller: 'WizardReservationCompleteCtrl as $ctrl',
    userTasksPolicy: false,
    translations: ['reservations', 'simple-reservation', 'book-it-now'],
    resolve: {
      /*@ngInject*/
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }]
    }
  },

  /**
   * 06. Purchase
   */
  purchase: {
    template: '<div ng-include="\'wizard-reservation/06-purchase/purchase.tpl.html\'"></div>',
    controller: 'WizardReservationPurchaseCtrl as $ctrl',
    userTasksPolicy: false,
    reloadOnSearch: false,
    translations: ['simple-reservation', 'reservations', 'purchase', 'billing-profile', 'book-it-now'],
    resolve: {
      /*@ngInject*/
      center: ["state", "dwAlerts", "centerService", function center(state, dwAlerts, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }],

      /*@ngInject*/
      purchase: ["$q", "dwAlerts", "state", "routeHelper", "purchaseService", "resolveTimezone", function purchase($q, dwAlerts, state, routeHelper, purchaseService, resolveTimezone) {
        return $q.all([routeHelper.auth("/".concat(state.getPath().split('/')[1], "/sign-in")), resolveTimezone()]).then(function () {
          return purchaseService.get(state.getCurrentCenterId(), state.getCurrentUserId(), +state.getParam('purchaseId')).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get purchase.');
          });
        });
      }],

      /*@ngInject*/
      reservationUnit: ["$q", "$filter", "state", "helper", "routeHelper", "dwAlerts", "calendarService", "resolveTimezone", function reservationUnit($q, $filter, state, helper, routeHelper, dwAlerts, calendarService, resolveTimezone) {
        return $q.all([routeHelper.auth("/".concat(state.getPath().split('/')[1], "/sign-in")), resolveTimezone()]).then(function () {
          var date = $filter('toDate')(state.getParam('date'), 'Z');
          date = moment.isMoment(date) ? date : moment();
          return calendarService.query(state.getCurrentCenterId(), date, date).catch(function (err) {
            return dwAlerts.error(err, 'Failed to fetch calendar data.');
          }).then(function (types) {
            return types.reduce(function (result, type) {
              var _context2;

              return result || _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = type.reservationUnits).call(_context2, function (unit) {
                return unit.id === +state.getParam('unit');
              });
            }, null);
          });
        });
      }],

      /*@ngInject*/
      user: ["$q", "dwAlerts", "state", "routeHelper", "userProfileService", "resolveTimezone", function user($q, dwAlerts, state, routeHelper, userProfileService, resolveTimezone) {
        return $q.all([routeHelper.auth("/".concat(state.getPath().split('/')[1], "/sign-in")), resolveTimezone()]).then(function () {
          return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
            return dwAlerts.error(err, 'Failed to get user profile.');
          });
        });
      }],

      /*@ngInject*/
      settings: ["dwAlerts", "setupService", function settings(dwAlerts, setupService) {
        return setupService.getSetupSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to get setup settings.');
        });
      }],

      /*@ngInject*/
      reservationFields: ["dwAlerts", "ReservationField", "session", function reservationFields(dwAlerts, ReservationField, session) {
        return session.wait().catch(angular.noop).then(function () {
          return ReservationField.query().catch(function (err) {
            return dwAlerts.error(err, 'Failed to query reservation fields.');
          });
        });
      }]
    }
  },

  /**
   * 07. Sign Up
   */
  signUp: {
    template: '<div ng-include="\'wizard-reservation/07-sign-up/sign-up.tpl.html\'"></div>',
    controller: 'WizardReservationSignUpCtrl as $ctrl',
    userTasksPolicy: false,
    translations: ['user-profile'],
    resolve: {
      /*@ngInject*/
      reg: ["$route", "state", function reg($route, state) {
        return {
          member: false,
          selfRegistration: true,
          new: !state.getCurrentUserId()
        };
      }],

      /*@ngInject*/
      user: ["dwAlerts", "$route", "helper", "state", "session", "userProfileService", "centerService", function user(dwAlerts, $route, helper, state, session, userProfileService, centerService) {
        if (!state.getCurrentUserId()) {
          return centerService.get(state.getCurrentCenterId()).then(function (center) {
            return userProfileService.new(center, 'nonMember', 'signUp').catch(function (err) {
              return dwAlerts.error(err, 'Failed to get new member profile template.');
            });
          });
        } else {
          return session.wait().catch(angular.noop).then(function () {
            return userProfileService.getForRegistration(state.getCurrentCenterId(), state.getCurrentUserId(), 'nonMember', 'signUp').catch(function (err) {
              return dwAlerts.error(err, 'Failed to get user profile.');
            });
          });
        }
      }],

      /*@ngInject*/
      center: ["state", "dwAlerts", "centerService", function center(state, dwAlerts, centerService) {
        return centerService.get(state.getCurrentCenterId()).catch(function (err) {
          return dwAlerts.error(err, 'Failed to get center.');
        });
      }]
    }
  },

  /**
   * xx. Staff Help
   */
  staffHelp: {
    template: '<staff-help></staff-help>',
    userTasksPolicy: false,
    translations: ['simple-reservation'],
    resolve: {
      /*@ngInject*/
      auth: ["routeHelper", "state", function auth(routeHelper, state) {
        return routeHelper.auth("/".concat(state.getPath().split('/')[1], "/sign-in"));
      }]
    }
  }
});

/***/ })

},[["./index.js","runtime","vendors~.._node_modules_@","vendors~.._node_modules_a","vendors~.._node_modules_angular-","vendors~.._node_modules_angular-m","vendors~.._node_modules_angular_angular.js~41fad05f","vendors~.._node_modules_asn1.js_l","vendors~.._node_modules_browserify-a","vendors~.._node_modules_buffer-","vendors~.._node_modules_ci","vendors~.._node_modules_core-j","vendors~.._node_modules_cre","vendors~.._node_modules_des.js_lib_des.","vendors~.._node_modules_diffie-hellman_b","vendors~.._node_modules_e","vendors~.._node_modules_elliptic_l","vendors~.._node_modules_events_events.js~84164f07","vendors~.._node_modules_ma","vendors~.._node_modules_messageformat-","vendors~.._node_modules_mi","vendors~.._node_modules_miller-rabin_l","vendors~.._node_modules_moment_moment.js~4e22a0c6","vendors~.._node_modules_n","vendors~.._node_modules_ng-","vendors~.._node_modules_r","vendors~.._node_modules_u","main~..","main~._a","main~._c","main~._common ","main~._common_flex-forms_c","main~._common_g","main~._common_scss_index.scss~c","main~._common_services__","main~._common_services_c"]]]);
//# sourceMappingURL=main~._shared_d.js.map?_rev=5e9cb271c3c6f31d721b