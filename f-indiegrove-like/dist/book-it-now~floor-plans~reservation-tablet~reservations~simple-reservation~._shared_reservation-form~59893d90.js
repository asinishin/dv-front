(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-it-now~floor-plans~reservation-tablet~reservations~simple-reservation~._shared_reservation-form~59893d90"],{

/***/ "./shared/reservation-form/rc-date-selector.component.js":
/*!***************************************************************!*\
  !*** ./shared/reservation-form/rc-date-selector.component.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_date_selector_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-date-selector.scss */ "./shared/reservation-form/rc-date-selector.scss");
/* harmony import */ var _rc_date_selector_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_date_selector_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rc_date_selector_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rc-date-selector.tpl.html */ "./shared/reservation-form/rc-date-selector.tpl.html");
/* harmony import */ var _rc_date_selector_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rc_date_selector_tpl_html__WEBPACK_IMPORTED_MODULE_1__);


/**
 * rcDateSelector component - complex date selector for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcDateSelector', []).component('rcDateSelector', {
  template: _rc_date_selector_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
  controller: 'RcDateSelectorController as $ctrl',
  bindings: {
    mode: '<',
    date: '='
  }
}).controller('RcDateSelectorController', ["$scope", function ($scope) {
  'use strict';

  var $ctrl = this;
  /**
   * Watch for $ctrl.date and recalculate $ctrl.weekStart and $ctrl.weekEnd
   */

  $scope.$watch('$ctrl.date', function () {
    if (!moment.isMoment($ctrl.date)) return;
    $ctrl.weekStart = $ctrl.date.clone().startOf('week');
    $ctrl.weekEnd = $ctrl.weekStart.clone().endOf('week');
  });
  /**
   * Previous date
   */

  $ctrl.prev = function () {
    if (!moment.isMoment($ctrl.date)) return;
    $ctrl.date = $ctrl.date.clone().subtract($ctrl.mode === 'week' ? 7 : 1, 'd');
  };
  /**
   * Next date
   */


  $ctrl.next = function () {
    if (!moment.isMoment($ctrl.date)) return;
    $ctrl.date = $ctrl.date.clone().add($ctrl.mode === 'week' ? 7 : 1, 'd');
  };
}]));

/***/ }),

/***/ "./shared/reservation-form/rc-date-selector.scss":
/*!*******************************************************!*\
  !*** ./shared/reservation-form/rc-date-selector.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-form/rc-date-selector.tpl.html":
/*!***********************************************************!*\
  !*** ./shared/reservation-form/rc-date-selector.tpl.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div ng-show=\"$ctrl.mode === 'day'\" class=\"day-mode\"> <ff-col class=\"day-pictogram\" flex=\"0 0 auto\"> <div class=\"rc-pictogram\" title=\"Click to pick date\"> <ff-datepicker-popup tabindex=\"0\" ff-model=\"$ctrl.date\"></ff-datepicker-popup> <ff-row> <div class=\"serifs\"><hr><hr><hr></div> </ff-row> <span ng-bind=\"$ctrl.date | date:'dd'\"></span> </div> <div class=\"weekday\"> <span ng-bind=\"$ctrl.date | date:'EEE'\"></span> <div class=\"prev\" title=\"{{'RESERVATIONS.DATE_SELECTOR.DAY.PREV.HINT' | translate}}\" ng-click=\"$ctrl.prev()\"></div> <div class=\"next\" title=\"{{'RESERVATIONS.DATE_SELECTOR.DAY.NEXT.HINT' | translate}}\" ng-click=\"$ctrl.next()\"></div> </div> </ff-col> <div class=\"bar\" translate=\"RESERVATIONS.DATE_SELECTOR.DAY.EXTRA\" translate-values=\"{ month: ($ctrl.date | date:'MMMM'), year: ($ctrl.date | date:'yyyy') }\">></div> </div> <div ng-show=\"$ctrl.mode === 'week'\" class=\"week-mode\"> <div class=\"week-pictogram\" flex=\"0 0 auto\"> <div class=\"rc-pictogram\"> <ff-row> <div class=\"serifs\"><hr><hr><hr><hr><hr><hr></div> </ff-row> <span ng-bind=\"($ctrl.weekStart | date:'dd') + '-' +  ($ctrl.weekEnd | date:'dd')\"></span> </div> <div class=\"prev\" title=\"{{'RESERVATIONS.DATE_SELECTOR.WEEK.PREV.HINT' | translate}}\" ng-click=\"$ctrl.prev()\"></div> <div class=\"next\" title=\"{{'RESERVATIONS.DATE_SELECTOR.WEEK.NEXT.HINT' | translate}}\" ng-click=\"$ctrl.next()\"></div> </div> <div class=\"bar\" translate=\"RESERVATIONS.DATE_SELECTOR.WEEK.EXTRA\" translate-values=\"{ month: ($ctrl.date | date:'MMMM'), year: ($ctrl.date | date:'yyyy') }\"></div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-form/res-drag-select.directive.js":
/*!**************************************************************!*\
  !*** ./shared/reservation-form/res-drag-select.directive.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.resDragSelectDirective', []).directive('resDragSelect', function () {
  return {
    restrict: 'A',
    scope: true,
    controller: 'ResDragSelectDirectiveCtrl as $rds',
    bindToController: {
      start: '=',
      end: '=',
      slots: '<',
      limitMin: '<',
      scale: '<'
    }
  };
}).controller('ResDragSelectDirectiveCtrl', ["$scope", "$element", "$timeout", function ($scope, $element, $timeout) {
  var $rds = this;
  var scaleDefault = 30; // min

  var limitMinDefault = 15; // min

  /**
   * $onInit
   */

  $rds.$onInit = function () {
    $rds.prevIndex = null;
    $rds.clickDisabled = false;
    $rds.touchY = null;
    var wrapper = $element[0];
    wrapper.addEventListener('mousedown', onMouseDown, true);
    wrapper.addEventListener('mousemove', onMouseMove, true);
    wrapper.addEventListener('selectstart', onSelectStart, true); // document.addEventListener('selectionchange', onSelectStart);

    wrapper.addEventListener('click', onClick, true);
    wrapper.addEventListener('touchstart', onTouchStart, true);
    wrapper.addEventListener('touchend', onTouchEnd, true);
    wrapper.addEventListener('touchcancel', onTouchEnd, true);
    wrapper.addEventListener('touchmove', onTouchMove, true);
  };
  /**
   * $onDestroy
   */


  $rds.$onDestroy = function () {
    var wrapper = $element[0];
    wrapper.removeEventListener('mousedown', onMouseDown, true);
    wrapper.removeEventListener('mousemove', onMouseMove, true);
    wrapper.removeEventListener('selectstart', onSelectStart, true); // document.removeEventListener('selectionchange', onSelectStart);

    wrapper.removeEventListener('click', onClick, true);
    wrapper.removeEventListener('touchstart', onTouchStart, true);
    wrapper.removeEventListener('touchend', onTouchEnd, true);
    wrapper.removeEventListener('touchcancel', onTouchEnd, true);
    wrapper.removeEventListener('touchmove', onTouchMove, true);
  };

  $rds.$onChanges = function () {
    var min = Math.max($rds.limitMin ? $rds.limitMin * 60 : limitMinDefault, $rds.scale || scaleDefault);
    $rds.size = min / ($rds.scale || scaleDefault);
  };

  function onTouchStart(event) {
    $rds.action = null;

    if (event.touches.length !== 1) {
      return;
    }

    if ($rds.touchTimer) {
      $timeout.cancel($rds.touchTimer);
    }

    $rds.touchTimer = $timeout(function () {
      $rds.touchTimer = null;
      $rds.touchY = event.touches[0].clientY;
      onMouseDown(event); // ripple({ x: event.touches[0].clientX, y: event.touches[0].clientY });

      resetSelection(100);
    }, 300);
    resetSelection();
  }

  function onTouchEnd(event) {
    if ($rds.touchTimer) {
      $timeout.cancel($rds.touchTimer);
      $rds.touchTimer = null;
    }

    $rds.action = null;
    resetSelection(); // if (event.touches.length !== 1) { return; }
  }

  function onTouchMove(event) {
    if ($rds.touchTimer) {
      $timeout.cancel($rds.touchTimer);
      $rds.touchTimer = null;
    }

    if (event.touches.length !== 1) {
      return;
    }

    if ($rds.action) {
      event.buttons = 1;
      event.clientY = event.touches[0].clientY;
      event.movementY = event.clientY - $rds.touchY;
      $rds.touchY = event.clientY;
      event.preventDefault();
      resetSelection();
      onMouseMove(event);
    }
  }

  function onMouseDown(event) {
    $rds.slotHeight = ($element[0].querySelector('.slot') || {}).offsetHeight || 37;
    $rds.prevIndex = null;
    $rds.clickDisabled = false;
    var cls = event.target.className;

    if (cls.indexOf('selected-from') >= 0) {
      $rds.action = 'start';
    } else if (cls.indexOf('selected-to') >= 0) {
      $rds.action = 'end';
    } else if (cls.indexOf('selected-outline-inner') >= 0) {
      $rds.action = 'move';
    } else {
      $rds.action = 'direction';
      $rds.movementY = 0;
      $rds.movementCount = 0;
    }
  }

  function onMouseMove(event) {
    if (!event.buttons || !$rds.action) {
      return;
    } // no mouse button pressed


    $rds.clickDisabled = true;
    var index = indexFromEvent(event);
    var slot = $rds.slots[index];
    var dir = $rds.prevIndex !== null ? index - $rds.prevIndex : 0;

    if (slot.reserved || !slot.available) {
      return;
    }

    $scope.$apply(function () {
      switch ($rds.action) {
        case 'direction':
          // obtaining drag start direction
          $rds.movementY += event.movementY;

          if ($rds.movementCount > 1) {
            $rds.action = 'reselect';
            $rds.direction = Math.min(Math.max(-1, $rds.movementY), 1) || 1;
          }

          $rds.movementCount++;
          return;

        case 'reselect':
          if ($rds.direction >= 0 && index < $rds.slots.length - 1 && !slot.reservedLength && !slot.buffer && isRangeOk(index, index + $rds.size)) {
            $rds.start = index;
            $rds.end = index + $rds.size;
            $rds.action = 'end';
          } else if (index > 0 && isRangeOk(index - $rds.size, index)) {
            $rds.start = index - $rds.size;
            $rds.end = index;
            $rds.action = 'start';
          }

          $rds.prevIndex = index;
          return;

        case 'start':
          if (index < $rds.end && $rds.end - index >= $rds.size && isRangeOk(index, $rds.end)) {
            $rds.start = index;
            $rds.prevIndex = index;
          }

          return;

        case 'end':
          if (index > $rds.start && index - $rds.start >= $rds.size && isRangeOk($rds.start, index)) {
            $rds.end = index;
            $rds.prevIndex = index;
          }

          return;

        case 'move':
          if ((dir < 0 && $rds.start > 0 || dir > 0 && $rds.end < $rds.slots.length - 1) && isRangeOk($rds.start + dir, $rds.end + dir)) {
            $rds.start += dir;
            $rds.end += dir;
          }

          $rds.prevIndex = index;
          return;
      }
    });
  }

  function isRangeOk(start, end) {
    var s = Math.min(start, end);
    var e = Math.max(start, end);

    if (s < 0 || e >= $rds.slots.length) {
      return false;
    }

    for (var i = s; i <= e; i++) {
      var slot = $rds.slots[i];

      if (slot.reserved || !slot.available) {
        return false;
      }

      if (slot.reservedLength && i !== end) {
        return false;
      }
    }

    return true;
  }

  function onSelectStart(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    resetSelection();
  }

  function resetSelection() {
    var maxFrames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    reset(0);

    function reset(counter) {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) {
          window.getSelection().removeAllRanges();
        }
      } else if (document.selection) {
        document.selection.empty();
      }

      if (counter < maxFrames) {
        window.requestAnimationFrame(function () {
          return reset(counter + 1);
        });
      }
    }
  } // function ripple({ x, y }) {
  //   const ripple = angular.element($element[0].querySelector('#ripple'));
  //   ripple.removeClass('ripple');
  //   ripple.css('left', `${Math.floor(x - 5)}px`);
  //   ripple.css('top', `${Math.floor(y - 5)}px`);
  //   window.requestAnimationFrame(() => { ripple.addClass('ripple'); });
  //   $timeout(() => ripple.removeClass('ripple'), 300);
  // }


  function onClick(event) {
    if ($rds.clickDisabled) {
      event.stopPropagation();
    }
  }

  function indexFromEvent(event) {
    var wrapperY = $element[0].getBoundingClientRect().top;
    var wrapperScrollY = $element[0].scrollTop;
    var eventY = event.clientY;
    return Math.min(Math.max(Math.floor((eventY - wrapperY + wrapperScrollY) / $rds.slotHeight), 0), $rds.slots.length - 1);
  }
}]));

/***/ }),

/***/ "./shared/reservation-form/res-reservation.component.js":
/*!**************************************************************!*\
  !*** ./shared/reservation-form/res-reservation.component.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _rc_date_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rc-date-selector.component */ "./shared/reservation-form/rc-date-selector.component.js");
/* harmony import */ var _time_selector_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./time-selector.directive */ "./shared/reservation-form/time-selector.directive.js");
/* harmony import */ var _res_reservation_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./res-reservation.scss */ "./shared/reservation-form/res-reservation.scss");
/* harmony import */ var _res_reservation_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_res_reservation_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _res_reservation_tpl_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./res-reservation.tpl.html */ "./shared/reservation-form/res-reservation.tpl.html");
/* harmony import */ var _res_reservation_tpl_html__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_res_reservation_tpl_html__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");
/* harmony import */ var shared_form_design_fd_field_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! shared/form-design/fd-field.directive */ "./shared/form-design/fd-field.directive.js");

















/**
 * resReservation component - reservation create/edit dialog for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.resReservation', ['deskworks.rcHelper', 'deskworks.reservationUnit.optsRepeatFrequency', 'deskworks.timeSelector', 'deskworks.reservationService', 'deskworks.calendarService', 'deskworks.rcDateSelector', 'deskworks.ReservationCost', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_15__["default"].name, shared_form_design_fd_field_directive__WEBPACK_IMPORTED_MODULE_16__["default"].name]).directive('resReservation', function () {
  return {
    template: _res_reservation_tpl_html__WEBPACK_IMPORTED_MODULE_14___default.a,
    scope: true,
    controller: 'ResReservationController as $ctrl',
    bindToController: {
      center: '<',
      calData: '<',
      user: '<',
      reservationPrices: '<',
      reservationFields: '<',
      hideReservationCostEstimate: '<',
      hideRecurringReservations: '<',
      afterSave: '<',
      hideCalendarBtn: '<',
      signOut: '<',
      stopWizard: '<',
      backFn: '&?back',
      nextFn: '&?next',
      hideStaffOnlyUnits: '<'
    }
  };
}).controller('ResReservationController', ["$scope", "$filter", "$interval", "$route", "$window", "session", "dwAlerts", "helper", "rcHelper", "state", "reservationService", "calendarService", "ReservationCost", "optsRepeatFrequency", function ($scope, $filter, $interval, $route, $window, session, dwAlerts, helper, rcHelper, state, reservationService, calendarService, ReservationCost, optsRepeatFrequency) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $scope.state = state;
    $ctrl.optsRepeatFrequency = optsRepeatFrequency;
    $ctrl.afterSave = $ctrl.afterSave || $ctrl.navCalendar;
    $ctrl.role = state.getParam('role'); // Find reservation by its id

    $ctrl.calData.some(function (resType) {
      return resType.reservationUnits.some(function (resUnit) {
        var _context;

        var idx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_5___default()(_context = resUnit.reservations).call(_context, function (i) {
          return i.id === +$route.current.params.reservationId;
        });

        if (idx >= 0) {
          var _context2;

          $ctrl.reservation = resUnit.reservations[idx];

          _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6___default()(_context2 = resUnit.reservations).call(_context2, idx, 1);

          state.setParam('unit', resUnit.id).replace();
        }

        return !!$ctrl.reservation;
      });
    });
    /**
     * $onChanges
     */

    $ctrl.$onChanges = function () {
      $ctrl.afterSave = $ctrl.afterSave || $ctrl.navCalendar;
    };

    $ctrl.date = $filter('toDate')($route.current.params.date || state.getParam('date'));
    $ctrl.date = moment.isMoment($ctrl.date) ? $ctrl.date : moment();
    rcHelper.floorDate($ctrl.date, 30);
    var date = $ctrl.reservation && $ctrl.reservation.from || $filter('toDate')(state.getParam('start'));
    $ctrl.timeStart = moment.isMoment(date) ? date : null;
    date = $ctrl.reservation && $ctrl.reservation.to || $filter('toDate')(state.getParam('end'));
    $ctrl.timeEnd = moment.isMoment(date) && $ctrl.timeStart ? date : null;
    $ctrl.reservationTitle = state.getParam('title') || ($ctrl.reservation ? $ctrl.reservation.title : '');
    $ctrl.reservationNote = state.getParam('note') || $ctrl.reservation && $ctrl.reservation.reservationNote;
    $ctrl.repeatFrequency = helper.findByKeyValue($ctrl.optsRepeatFrequency, 'id', state.getParam('freq')) || $ctrl.optsRepeatFrequency[0];
    $ctrl.repeatDuration = state.getParam('duration') && +state.getParam('duration') || $ctrl.repeatFrequency.repeatDurationOptions && $ctrl.repeatFrequency.repeatDurationOptions[0];
    $ctrl.emailConfirmation = true; // !!state.getParam('confirm');

    $scope.$watch('$ctrl.calData', function () {
      filterCalData();
      initReservationUnit();
    });
    bindParamsToUrl();
    $scope.$watch('$ctrl.date', function (newVal, oldVal) {
      if (newVal !== oldVal) {
        // prevent duplicate fetch on initialization (due to $resolve.calData)
        $ctrl.fetch(true);
      } else {
        $interval.cancel($ctrl.timer);
        $ctrl.timer = $interval($ctrl.fetch, 1000 * 60);
      }
    }); // Calc reservation price

    $scope.$watchGroup(['$ctrl.reservationType', '$ctrl.timeStart', '$ctrl.timeEnd'], function () {
      if (!$ctrl.reservationType || !$ctrl.timeStart || !$ctrl.timeEnd) {
        $ctrl.reservationCost = null;
        return;
      }

      $ctrl.reservationCost = ReservationCost.calcSync($ctrl.timeStart, $ctrl.timeEnd, $ctrl.reservationPrices, $ctrl.reservationType.id);
    });
    /**
     * Reload route on center change
     */

    $scope.$watch(function () {
      return state.getCurrentCenterId();
    }, function (newVal, oldVal) {
      if (newVal !== oldVal) $route.reload();
    });
  };
  /**
   * Destroy
   */


  $ctrl.$onDestroy = function () {
    $interval.cancel($ctrl.timer);
  };
  /**
   * Next button handler (for Simple Reservation flow)
   */


  $ctrl.next = function () {
    if (helper.pointFirstInvalid('.sr-time')) return;
    return state.setPath(state.getPath() + '/users');
  };
  /**
   * On Make/Update Reservation button click
   */


  $ctrl.onNextClick = function () {
    if (helper.pointFirstInvalid('.res-container')) return;

    if ($ctrl.nextFn) {
      return $ctrl.nextFn();
    } else {
      $ctrl.totalCost = calcTotalCost();
      $ctrl.confirmation = true;
    }
  };

  function calcTotalCost() {
    var _context3, _context4, _context5, _context6, _context7, _context8;

    var customPriceFields = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(_context4 = $ctrl.reservationType.fields).call(_context4, function (field) {
      return field.type === 'customPrice';
    })).call(_context3, function (f) {
      return f.value || f.value === 0;
    });

    var extraPriceFields = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(_context6 = $ctrl.reservationType.fields).call(_context6, function (field) {
      return field.type === 'extraPrice';
    })).call(_context5, function (f) {
      return f.value || f.value === 0;
    });

    var totalCost = customPriceFields.reduce(function (cost, field) {
      return cost + field.$$deserialize(field, field.value);
    }, 0);

    if (!customPriceFields.length) {
      totalCost = $ctrl.reservationCost;
    }

    totalCost += _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(_context7 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(_context8 = $ctrl.reservationType.fields).call(_context8, function (field) {
      return field.type === 'extraPrice';
    })).call(_context7, function (f) {
      return f.value || f.value === 0;
    }).reduce(function (cost, field) {
      return cost + field.$$deserialize(field, field.value);
    }, 0);
    return totalCost;
  }
  /**
   * Make new reservation
   */


  $ctrl.makeReservation = function () {
    var _context9;

    var data = {
      from: $ctrl.timeStart,
      to: $ctrl.timeEnd,
      title: $ctrl.reservationTitle,
      reservationNote: $ctrl.reservationNote,
      centerId: $ctrl.center.id,
      reservationUnitId: $ctrl.reservationUnit.id,
      emailConfirmation: $ctrl.emailConfirmation,
      repeatFrequency: $ctrl.repeatFrequency.id,
      repeatDuration: angular.isDefined($ctrl.repeatFrequency.repeatDurationOptions) ? $ctrl.repeatDuration : '',
      fields: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(_context9 = $ctrl.reservationType.fields).call(_context9, function (f) {
        return f.value || f.value === 0 || f.value === false;
      }).reduce(function (res, f) {
        return res[f.id] = f.$$serialize(f, f.value), res;
      }, {})
    };
    return reservationService.save($ctrl.center.id, $ctrl.user.id, data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save reservation.');
    }).then(function () {
      return $ctrl.afterSave();
    });
  };
  /**
   * Update reservation
   */


  $ctrl.updateReservation = function () {
    var _context10;

    var data = {
      id: $ctrl.reservation.id,
      reservationUnitId: $ctrl.reservationUnit.id,
      from: $ctrl.timeStart,
      to: $ctrl.timeEnd,
      title: $ctrl.reservationTitle,
      reservationNote: $ctrl.reservationNote,
      emailConfirmation: $ctrl.emailConfirmation,
      fields: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(_context10 = $ctrl.reservationType.fields).call(_context10, function (f) {
        return f.value || f.value === 0 || f.value === false;
      }).reduce(function (res, f) {
        return res[f.id] = f.$$serialize(f, f.value), res;
      }, {})
    };
    return reservationService.save($ctrl.center.id, $ctrl.user.id, data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to update reservation.');
    }).then(function () {
      return $ctrl.afterSave();
    });
  };
  /**
   * Cancel reservation
   */


  $ctrl.cancelReservation = function () {
    return reservationService.delete($ctrl.center.id, $ctrl.user.id, $ctrl.reservation.id, $ctrl.emailConfirmation).catch(function (err) {
      return dwAlerts.error(err, 'Failed to cancel reservation.');
    }).then(function () {
      return $ctrl.afterSave();
    });
  };
  /**
   * Fetches calendar data from server (reservation categories, reservation units, reservations, availability)
   */


  $ctrl.fetch = function (force) {
    $interval.cancel($ctrl.timer);
    if ($ctrl.fetching && !force) return; // skip fetching when called by timer

    $ctrl.fetching = true;
    return calendarService.query(state.getCurrentCenterId() || $route.current.params.centerId, $ctrl.date, $ctrl.date, $ctrl.role).catch(function (err) {
      return dwAlerts.error(err, 'Failed to fetch calendar data.');
    }).then(function (result) {
      $ctrl.calData = result;
    }).finally(function () {
      $ctrl.fetching = false;
      $interval.cancel($ctrl.timer);
      $ctrl.timer = $interval($ctrl.fetch, 1000 * 60);
    });
  };
  /**
   * Navigate to reservation calendar
   */


  $ctrl.navCalendar = function () {
    state.setParam('unit', null);
    state.setParam('start', null);
    state.setParam('end', null);
    state.setParam('confirm', null);
    state.setParam('freq', null);
    state.setParam('duration', null);
    state.setParam('title', null);
    state.setParam('note', null);
    state.setParam('fields', null);
    return state.setPath('/reservation-calendar');
  };
  /**
   * Back button handler
   */


  $ctrl.back = state.back;
  /**
   * Whether recurring settings are available
   */

  $ctrl.hasRecurring = function () {
    return !$ctrl.reservation && (session.isAdmin() || !$ctrl.hideRecurringReservations);
  };
  /**
   * One-way bind reservation params to URL search params
   */


  function bindParamsToUrl() {
    $scope.$watch('$ctrl.reservationUnit.id', function (val) {
      state.setParam('unit', val).replace();
    });
    $scope.$watch('$ctrl.date', function (val) {
      state.setParam('date', rcHelper.dateToStr(val)).replace();

      if (moment.isMoment($ctrl.date)) {
        // update timeStart/timeEnd according to current date
        var newDatePart = {
          year: $ctrl.date.year(),
          month: $ctrl.date.month(),
          date: $ctrl.date.date()
        };

        if (moment.isMoment($ctrl.timeStart)) {
          $ctrl.timeStart = $ctrl.timeStart.clone().set(newDatePart);
        }

        if (moment.isMoment($ctrl.timeEnd)) {
          $ctrl.timeEnd = $ctrl.timeEnd.clone().set(newDatePart);
        }
      }
    });
    $scope.$watch('$ctrl.timeStart', function (val) {
      state.setParam('start', rcHelper.dateToStr(val)).replace();
    });
    $scope.$watch('$ctrl.timeEnd', function (val) {
      state.setParam('end', rcHelper.dateToStr(val)).replace();
    });
    $scope.$watch('$ctrl.emailConfirmation', function (val) {
      state.setParam('confirm', val || null).replace();
    });
    $scope.$watch('$ctrl.repeatFrequency.id', function (val) {
      state.setParam('freq', val).replace();
    });
    $scope.$watch('$ctrl.repeatDuration', function (val) {
      state.setParam('duration', val).replace();
    });
    $scope.$watch('$ctrl.reservationTitle', function (val) {
      state.setParam('title', val).replace();
    });
    $scope.$watch('$ctrl.reservationNote', function (val) {
      state.setParam('note', val).replace();
    });
    $scope.$watch( // reservation fields
    function () {
      var _context11;

      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_8___default()(_context11 = $ctrl.reservationType.fields).call(_context11, function (f) {
        return {
          id: f.id,
          value: f.value
        };
      });
    }, function (nv) {
      var obj = nv.reduce(function (res, f) {
        if (f.value || f.value === 0 || f.value === false) res[f.id] = f.value;
        return res;
      }, {});
      state.setParam('fields', _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(obj));
    }, true);
  }
  /**
   * Initialize default reservationUnit passed in URL search
   */


  function initReservationUnit() {
    var val = $route.current.params.reservationUnitId || state.getParam('unit');
    $ctrl.reservationTypes.some(function (resType) {
      var resUnit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_10___default()(helper).call(helper, resType.reservationUnits, val);

      if (resUnit) {
        $ctrl.reservationType = resType;
        $ctrl.reservationUnit = resUnit;
        return true;
      }
    });

    if (!$ctrl.reservationUnit) {
      $ctrl.reservationType = $ctrl.reservationTypes[0];
      $ctrl.reservationUnit = $ctrl.reservationType && $ctrl.reservationType.reservationUnits[0];
    }
  }
  /**
   * Filter raw calendar data
   */


  function filterCalData() {
    $ctrl.reservationTypes = [];
    if (!angular.isArray($ctrl.calData)) return;
    $ctrl.calData.forEach(function (resType) {
      var _context12;

      resType.reservationUnits = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(_context12 = resType.reservationUnits // replace reservation units with filtered array
      ).call(_context12, function (item) {
        return item.availabilities.length || !$ctrl.hideStaffOnlyUnits && item.whoCanReserve === 'staffOnly';
      }); // Include non-empty reservation categories only

      if (resType.reservationUnits.length) {
        var _context13;

        $ctrl.reservationTypes.push(resType); // include reservation category only if it has at least one reservation unit

        resType.fields = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(_context13 = $ctrl.reservationFields // prepare fields
        ).call(_context13, function (f) {
          return f.reservationCategoryId === resType.id || f.reservationCategoryId === 0;
        });
        var qFields = JSON.parse(state.getParam('fields') || "{}");
        resType.fields.forEach(function (f) {
          return f.value = qFields[f.id] || qFields[f.id] === 0 ? qFields[f.id] : (($ctrl.reservation || {}).fields || {})[f.id];
        });
      }
    });
  }
}]));

/***/ }),

/***/ "./shared/reservation-form/res-reservation.scss":
/*!******************************************************!*\
  !*** ./shared/reservation-form/res-reservation.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-form/res-reservation.tpl.html":
/*!**********************************************************!*\
  !*** ./shared/reservation-form/res-reservation.tpl.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form class=\"res-container\" flex=\"1 1 auto\" ng-if=\"!$ctrl.confirmation && !$ctrl.cancelConfirmation\" novalidate ng-style=\"{ marginTop: $app.hideHeader ? 0 : null }\"> <div class=\"res-header\"> <h1 class=\"page-title\" ng-if=\"!$ctrl.reservation\" translate=\"RESERVATIONS.NEW.PAGE_TITLE\" translate-values=\"{ centerName: $ctrl.center.name }\"></h1> <h1 class=\"page-title\" ng-if=\"$ctrl.reservation\" translate=\"RESERVATIONS.EDIT.PAGE_TITLE\" translate-values=\"{ centerName: $ctrl.center.name }\"></h1> <small translate=\"RESERVATIONS.HINT\"></small> </div> <ff-row class=\"res-body\"> <ff-col class=\"res-col-opts\"> <ff-row flex=\"0 0 auto\"> <rc-date-selector mode=\"'day'\" date=\"$ctrl.date\"></rc-date-selector> </ff-row> <ff-row flex=\"0 0 auto\"> <ff-select name=\"reservationType\" ff-model=\"$ctrl.reservationType\" ff-options=\"resType.name for resType in $ctrl.reservationTypes\" ff-disabled=\"$ctrl.reservation || $ctrl.reservationTypes.length < 2\" ff-change=\"$ctrl.reservationUnit = $ctrl.reservationType.reservationUnits[0]\" aria-label=\"{{'RESERVATIONS.CATEGORY' | translate}}\"></ff-select> </ff-row> <ff-row flex=\"0 0 auto\"> <ff-select name=\"reservationUnit\" ff-model=\"$ctrl.reservationUnit\" ff-options=\"resUnit.name for resUnit in $ctrl.reservationType.reservationUnits\" ff-disabled=\"$ctrl.reservation || $ctrl.reservationType.reservationUnits.length < 2\" aria-label=\"{{'RESERVATIONS.SPACE' | translate}}\"></ff-select> </ff-row> <ff-row flex=\"0 0 auto\" ng-if=\"!$ctrl.hideReservationCostEstimate && $ctrl.reservationPrices\"> <ff-static> <span style=\"text-transform:uppercase;max-width:200px\"> <strong style=\"font-size:.8em\"><span translate=\"RESERVATIONS.ESTIMATED_COST\"></span>:</strong> <strong class=\"text-text\" ng-bind=\"$ctrl.reservationCost | ncurrency | nd\"></strong> </span> </ff-static> </ff-row> <ff-row flex=\"0 0 auto\"> <ff-text name=\"reservationTitle\" ff-maxlength=\"128\" ff-model=\"$ctrl.reservationTitle\" placeholder=\"{{('RESERVATIONS.TITLE' | translate)}}\" aria-label=\"{{('RESERVATIONS.TITLE' | translate)}}\"></ff-text> </ff-row> <ff-row flex=\"0 1 100px\"> <ff-textarea name=\"reservationNote\" ff-maxlength=\"250\" ff-model=\"$ctrl.reservationNote\" placeholder=\"{{('RESERVATIONS.NOTES' | translate)}}\" aria-label=\"{{('RESERVATIONS.NOTES' | translate)}}\"></ff-textarea> </ff-row> <div ng-if=\"!$ctrl.reservation ? ($ctrl.hideRecurringReservations ? !state.isLoggedMember() && !state.isLoggedNonMember() && !!state.getLoggedUser() : true) : false\"> <ff-row flex=\"0 0 auto\"> <ff-select name=\"repeatFrequency\" ff-model=\"$ctrl.repeatFrequency\" ff-options=\"opt.name for opt in $ctrl.optsRepeatFrequency\" ff-change=\"$ctrl.repeatDuration = $ctrl.repeatFrequency.repeatDurationOptions[0]\" aria-label=\"{{'RESERVATIONS.REPEAT_FREQUENCY' | translate}}\"></ff-select> </ff-row> <ff-row flex=\"0 0 auto\" ng-if=\"$ctrl.repeatFrequency.repeatDurationOptions\"> <ff-label flex=\"0 1 110px\"><span translate=\"RESERVATIONS.REPEAT_DURATION\"></span></ff-label> <ff-select name=\"repeatDuration\" flex=\"0 1 50px\" ff-model=\"$ctrl.repeatDuration\" ff-options=\"opt for opt in $ctrl.repeatFrequency.repeatDurationOptions\" aria-label=\"{{'RESERVATIONS.REPEAT_DURATION.LABEL' | translate}}\"></ff-select> <ff-label>{{$ctrl.repeatFrequency.repeatDurationFilter($ctrl.repeatDuration, true)}}</ff-label> </ff-row> </div> <fd-field field=\"field\" ng-repeat=\"field in $ctrl.reservationType.fields\"></fd-field> <ff-btn-group class=\"res-buttons\" style=\"margin-top:.5rem\"> <ff-btn sense=\"back\" ff-click=\"$ctrl.backFn()\" ng-if=\"$ctrl.backFn\"> <span translate=\"GLOBAL.BTN_BACK\"></span> </ff-btn> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.onNextClick()\" ff-disabled=\"!$ctrl.timeStart || !$ctrl.timeEnd || !$ctrl.reservationUnit.availabilities.length && $ctrl.reservationUnit.whoCanReserve === 'staffOnly'\"> <span translate=\"RESERVATIONS.BTN_CREATE\" ng-show=\"!$ctrl.reservation\"></span> <span translate=\"RESERVATIONS.BTN_UPDATE\" ng-show=\"$ctrl.reservation\"></span> </ff-btn> <ff-btn sense=\"remove\" ff-click=\"$ctrl.cancelConfirmation = true\" ng-if=\"$ctrl.reservation\"> <span translate=\"RESERVATIONS.BTN_DELETE\"></span> </ff-btn> <ff-btn sense=\"calendar\" ff-click=\"$ctrl.navCalendar()\" ng-if=\"!$ctrl.hideCalendarBtn\"> <span translate=\"RESERVATIONS.BTN_CALENDAR\"></span> </ff-btn> <ff-btn sense=\"settings\" ng-if=\"$ctrl.stopWizard\" ff-click=\"$ctrl.stopWizard()\"> <span translate=\"GLOBAL.BTN_SETTINGS\"></span> </ff-btn> <ff-btn sense=\"signOut\" ng-if=\"$ctrl.signOut\" ff-click=\"$ctrl.signOut()\" ff-countdown=\"30\"> <span translate=\"GLOBAL.BTN_SIGN_OUT\"></span> </ff-btn> </ff-btn-group> </ff-col> <ff-col class=\"res-col-time\"> <div class=\"res-current-member\" ng-if=\"(state.isLoggedAdmin() || state.isMasterProfile()) && ($ctrl.reservation || $ctrl.user)\"> <span translate=\"RESERVATIONS.USER\"></span>: <span ng-bind=\"$ctrl.reservation ? $ctrl.reservation.userName : $ctrl.user.fullName\"></span> </div> <time-selector date=\"$ctrl.date\" time-start=\"$ctrl.timeStart\" time-end=\"$ctrl.timeEnd\" role=\"$ctrl.role\" scale=\"$ctrl.reservationUnit.scale\" buffer=\"$ctrl.reservationUnit.buffer\" limit-min=\"$ctrl.reservationUnit.limitMin\" reservations=\"$ctrl.reservationUnit.reservations\" availabilities=\"$ctrl.reservationUnit.availabilities\"></time-selector> <ff-info ng-if=\"!$ctrl.reservationUnit.availabilities.length && $ctrl.reservationUnit.whoCanReserve === 'staffOnly'\" style=\"position:absolute;top:0;width:100%;height:100%;padding-top:55px;text-align:center;text-transform:none;font-weight:400;background:rgba(255,255,255,.9);z-index:5\" translate=\"RESERVATIONS.STAFF_ONLY\" translate-values=\"{ centerName: $ctrl.center.name, centerPhone: $ctrl.center.phone, centerEmail: $ctrl.center.email }\"> </ff-info> </ff-col> </ff-row> </form> <form class=\"res-confirm\" ng-if=\"$ctrl.confirmation || $ctrl.cancelConfirmation\" ng-style=\"{ marginTop: $app.hideHeader ? 0 : null }\"> <div class=\"res-header\"> <h1 class=\"page-title\" ng-if=\"$ctrl.confirmation\" translate=\"RESERVATIONS.CONFIRM.PAGE_TITLE\"></h1> <h1 class=\"page-title\" ng-if=\"$ctrl.cancelConfirmation\" translate=\"RESERVATIONS.CANCEL.PAGE_TITLE\"></h1> <small translate=\"RESERVATIONS.HINT\"></small> </div> <ff-col class=\"res-confirm-body\"> <ff-panel> <ff-row ng-if=\"$ctrl.reservation ? $ctrl.reservation.companyName : $ctrl.user.company\"> <ff-label flex=\"0 1 110px\">Company</ff-label> <ff-static ff-bind=\"$ctrl.reservation ? $ctrl.reservation.companyName : $ctrl.user.company\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 110px\"><span translate=\"RESERVATIONS.USER\"></span></ff-label> <ff-static ff-bind=\"$ctrl.reservation ? $ctrl.reservation.userName : $ctrl.user.firstName + ' ' + $ctrl.user.lastName\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 110px\"><span translate=\"RESERVATIONS.LOCATION\"></span></ff-label> <ff-static ff-bind=\"$ctrl.center.name\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 110px\"><span translate=\"RESERVATIONS.SPACE\"></span></ff-label> <ff-static ff-bind=\"$ctrl.reservationUnit.name\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 110px\"><span translate=\"RESERVATIONS.DATE\"></span></ff-label> <ff-static ff-bind=\"$ctrl.date | date:'mediumDate'\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 110px\"><span translate=\"RESERVATIONS.TIME\"></span></ff-label> <ff-static><span nice-time=\"$ctrl.timeStart\"></span>&nbsp;-&nbsp;<span nice-time=\"$ctrl.timeEnd\"></span></ff-static> </ff-row> <div ng-if=\"$ctrl.hasRecurring()\"> <ff-row> <ff-label flex=\"0 1 110px\"><span translate=\"RESERVATIONS.REPEAT_FREQUENCY\"></span></ff-label> <ff-static ff-bind=\"$ctrl.repeatFrequency.name\"></ff-static> </ff-row> <ff-row ng-if=\"$ctrl.repeatFrequency.repeatDurationOptions\"> <ff-label flex=\"0 1 110px\"><span translate=\"RESERVATIONS.REPEAT_DURATION\"></span></ff-label> <ff-static ff-bind=\"$ctrl.repeatDuration + ' ' + $ctrl.repeatFrequency.repeatDurationUnit\"></ff-static> </ff-row> </div> <ff-row ng-if=\"!$ctrl.hideReservationCostEstimate\"> <ff-label flex=\"0 1 110px\"><span translate=\"RESERVATIONS.COST\"></span></ff-label> <ff-static ff-bind=\"$ctrl.totalCost | ncurrency | nd\"></ff-static> </ff-row> <label class=\"ff-row ff-tmargin\" style=\"margin-left:.5rem\"> <ff-checkbox name=\"emailConfirmation\" ff-model=\"$ctrl.emailConfirmation\"> <span translate=\"RESERVATIONS.EMAIL_CONFIRMATION\"></span> </ff-checkbox> </label> </ff-panel> </ff-col> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"signOut\" ng-if=\"$ctrl.signOut\" ff-click=\"$ctrl.signOut()\" ff-countdown=\"30\"> <span translate=\"GLOBAL.BTN_SIGN_OUT\"></span> </ff-btn> <ff-btn sense=\"cancel\" ff-click=\"$ctrl.confirmation = $ctrl.cancelConfirmation = false\"> <span translate=\"GLOBAL.BTN_CANCEL\"></span> </ff-btn> <ff-btn sense=\"ok\" type=\"submit\" ff-click=\"$ctrl.cancelConfirmation ? $ctrl.cancelReservation() : $ctrl.reservation ? $ctrl.updateReservation() : $ctrl.makeReservation()\"> <span translate=\"GLOBAL.BTN_CONFIRM\"></span> </ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-form/time-selector.directive.js":
/*!************************************************************!*\
  !*** ./shared/reservation-form/time-selector.directive.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _time_selector_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-selector.scss */ "./shared/reservation-form/time-selector.scss");
/* harmony import */ var _time_selector_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_time_selector_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _time_selector_tpl_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-selector.tpl.html */ "./shared/reservation-form/time-selector.tpl.html");
/* harmony import */ var _time_selector_tpl_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_time_selector_tpl_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");
/* harmony import */ var _res_drag_select_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./res-drag-select.directive */ "./shared/reservation-form/res-drag-select.directive.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.timeSelector', ['deskworks.state', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, _res_drag_select_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name, 'deskworks.userRoles', 'session']).directive('timeSelector', function () {
  return {
    template: _time_selector_tpl_html__WEBPACK_IMPORTED_MODULE_2___default.a,
    restrict: 'E',
    scope: true,
    controller: 'TimeSelectorDirectiveCtrl as $ctrl',
    bindToController: {
      date: '<',
      reservations: '<',
      timeStart: '=',
      timeEnd: '=',
      availabilities: '<',
      role: '<?',
      scale: '<?',
      buffer: '<?',
      limitMin: '<?'
    },
    link: function link($scope, $element) {
      $element.addClass('time-selector');
    }
  };
}).controller('TimeSelectorDirectiveCtrl', ["$scope", "$timeout", "$filter", "$translate", "state", "userRoles", "session", function ($scope, $timeout, $filter, $translate, state, userRoles, session) {
  var $ctrl = this;
  var scaleDefault = 30; // min

  var limitMinDefault = 15; // min

  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $ctrl.currentUserId = state.getCurrentUserId(); // store initial times which are passed during instantiating directive

    $ctrl.timeStartInitial = moment.isMoment($ctrl.timeStart) ? $ctrl.timeStart.clone() : moment();
    $ctrl.timeEndInitial = moment.isMoment($ctrl.timeEnd) ? $ctrl.timeEnd.clone() : moment();
    $timeout(function () {
      // scroll to initial date or scroll to 8AM otherwise
      var wrapper = document.querySelector('.slots-wrapper');
      var elem = wrapper.querySelector('.slot[time-str="' + $filter('date')($ctrl.date, 'HH:mm:00') + '"]') || wrapper.querySelector('.slot[time-str="08:00:00"]');
      wrapper.scrollTop = elem.offsetTop;
    });
    $ctrl.slots = generateSlots();
    $ctrl.selectionStart = $ctrl.timeStart ? Math.floor(($ctrl.timeStart.hours() * 60 + $ctrl.timeStart.minutes()) / ($ctrl.scale || scaleDefault)) : -1;
    $ctrl.selectionEnd = $ctrl.timeEnd ? Math.ceil($ctrl.selectionStart + ($ctrl.timeEnd - $ctrl.timeStart) / 1000 / 60 / ($ctrl.scale || scaleDefault) - 1) : -1;
  };
  /**
   * $onChanges
   */


  $ctrl.$onChanges = function (params) {
    if (params.date && moment.isMoment(params.date.previousValue) && !params.date.currentValue.isSame(params.date.previousValue)) {
      if (!angular.isArray(params.reservations) && !angular.isArray(params.availabilities)) {
        $ctrl.slots = generateSlots();
        return;
      }
    }

    $timeout(function () {
      $ctrl.slots = generateSlots();
      markAvailable($ctrl.slots);
      markReservations($ctrl.slots);
      markOptional($ctrl.slots);
      adjustSelection();
    });
  };
  /**
   * Select time
   * @param index
   */


  $ctrl.selectTime = function (index) {
    if ($ctrl.slots[index].reserved || !$ctrl.slots[index].available) return;

    if (!$ctrl.selecting) {
      // selection starts
      $ctrl.selecting = true;
      $ctrl.selectionStart = index;
      $ctrl.selectionEnd = index;
    } else {
      // selection already started
      if (index > $ctrl.selectionStart) {
        // selection ends after start, move end
        $ctrl.selectionEnd = index;
        $ctrl.selecting = false;

        for (var i = $ctrl.selectionStart; i <= $ctrl.selectionEnd; i++) {
          // prevent selecting reserved slots
          if ($ctrl.slots[i].reserved || $ctrl.slots[i].reservedLength || !$ctrl.slots[i].available) {
            $ctrl.selectionStart = index;
            $ctrl.selectionEnd = index;
            break;
          }
        }
      } else if (index < $ctrl.selectionStart) {
        // selection ends before start, move start
        $ctrl.selectionStart = index;
        $ctrl.selecting = false;

        for (var _i = $ctrl.selectionEnd; _i >= $ctrl.selectionStart; _i--) {
          // prevent selecting reserved slots
          if ($ctrl.slots[_i].reserved || $ctrl.slots[_i].reservedLength || !$ctrl.slots[_i].available) {
            $ctrl.selectionStart = index;
            $ctrl.selectionEnd = index;
            break;
          }
        }
      }
    }

    adjustSelection();
  };

  $scope.$watchGroup(['$ctrl.selectionStart', '$ctrl.selectionEnd'], function () {
    // adjustSelection();
    if ($ctrl.selectionStart >= 0 && $ctrl.selectionEnd >= 0) {
      // update timeStart and timeEnd
      $ctrl.timeStart = $ctrl.slots[$ctrl.selectionStart].time.clone();
      $ctrl.timeEnd = $ctrl.slots[$ctrl.selectionEnd].time.clone();
    } else {
      $ctrl.timeStart = null;
      $ctrl.timeEnd = null;
    }
  });

  function adjustSelection() {
    var slots = $ctrl.slots;
    var start = $ctrl.selectionStart;
    var end = $ctrl.selectionEnd;

    if (start > 0 && end > 0 && (!slots[start].available || slots[start].reserved || !slots[end].available || slots[end].reserved)) {
      return $ctrl.selectClear();
    }

    var min = Math.max($ctrl.limitMin ? $ctrl.limitMin * 60 : limitMinDefault, $ctrl.scale || scaleDefault);
    var size = min / ($ctrl.scale || scaleDefault) + 1;

    if (start < 0 || end < 0 || end - start + 1 >= size) {
      return;
    }

    var index = $ctrl.selectionStart;

    for (var i = index; i < slots.length && i < index + size && slots[i].available && !slots[i].reserved && !(i === index && slots[i].reservedLength); i++) {
      $ctrl.selectionEnd = i; // forward
    }

    for (var _i2 = index - 1; _i2 >= 0 && _i2 > index - size && slots[_i2].available && !slots[_i2].reserved && $ctrl.selectionEnd - $ctrl.selectionStart + 1 < size; _i2--) {
      $ctrl.selectionStart = _i2; // backward
    }

    if ($ctrl.selectionEnd - $ctrl.selectionStart + 1 < size) {
      $ctrl.selectClear();
    }
  }
  /**
   * Clear selection
   */


  $ctrl.selectClear = function () {
    $ctrl.selectionStart = $ctrl.selectionEnd = -1;
    $ctrl.timeStart = $ctrl.timeEnd = null;
    $ctrl.selecting = false;
  };
  /**
   * Slot class list generator
   * @param slot
   * @param $index
   * @returns {{reserved: *, "reserved-own": (*|boolean), available: boolean, optional: *, selected: (boolean|boolean)}}
   */


  $ctrl.getSlotClass = function (slot, $index) {
    return {
      reserved: slot.reserved,
      'reserved-own': slot.reserved && $ctrl.currentUserId === slot.userId,
      available: slot.available,
      optional: slot.optional,
      buffer: slot.buffer,
      selected: $index === $ctrl.selectionStart && $ctrl.selectionEnd === -1 || $index >= $ctrl.selectionStart && $index <= $ctrl.selectionEnd
    };
  };
  /**
   * Slot aria-label generator
   * @param slot
   * @param index
   */


  $ctrl.getSlotTitle = function (slot, index) {
    var title = slot.available ? 'AVAILABLE' : 'UNAVAILABLE';
    if (slot.reserved) title = 'RESERVED';

    if (index === $ctrl.selectionStart && $ctrl.selectionEnd === -1 || index >= $ctrl.selectionStart && index <= $ctrl.selectionEnd) {
      title = 'SELECTED';
    }

    var opts = {
      from: $filter('date')(slot.time, 'shortTime'),
      to: $filter('date')(slot.timeEnd, 'shortTime')
    };
    return $translate.instant("RESERVATIONS.TIME_SELECTOR.SLOT.".concat(title), opts);
  };
  /**
   * Generate slots
   */


  function generateSlots() {
    var slots = [];
    var date = $ctrl.date.clone().startOf('day');
    var end = date.clone().add(1, 'd');

    for (; date <= end; date.add($ctrl.scale || scaleDefault, 'm')) {
      slots.push({
        reserved: false,
        time: date.clone(),
        timeEnd: date.clone().add($ctrl.scale || scaleDefault, 'm')
      });
    }

    return slots;
  }
  /**
   * Mark slots as available according to unit.availabilities
   * @param slots
   * @returns {*}
   */


  function markAvailable(slots) {
    angular.forEach(slots, function (slot) {
      slot.available = false;
    });
    angular.forEach($ctrl.availabilities, function (availability) {
      var idxFrom = Math.floor((availability.from.hour() * 60 + availability.from.minute()) / ($ctrl.scale || scaleDefault)) + 1;
      var idxTo = Math.ceil((availability.to.hour() * 60 + availability.to.minute()) / ($ctrl.scale || scaleDefault) || slots.length);

      for (var i = idxFrom; i < idxTo; i++) {
        slots[i].available = true;
      }
    });
    return slots;
  }
  /**
   * Marks slots as optional. Optional are unavailable from beginning and end of day.
   * E.g. if available from 10AM - 05PM => optional are 12AM - 10AM and 05PM - 12PM.
   * If no available slots, it resets optional to prevent displaying empty day.
   * @param slots - array of slots
   * @returns {*} - passed array of slots
   */


  function markOptional(slots) {
    var availableCount = slots.reduce(function (count, slot) {
      slot.optional = false; // reset

      return slot.available ? ++count : count;
    }, 0);
    if (!availableCount) return slots;
    slots.some(function (slot) {
      if (slot.available) return true;
      slot.optional = true;
    });
    slots.some(function (slot, index, halves) {
      slot = slots[slots.length - index - 1]; // reverse

      if (slot.available) return true;
      slot.optional = true;
    });
    return slots;
  }
  /**
   * Mark slots as reserved according to unit.reservations
   * @param slots
   */


  function markReservations(slots) {
    if (!moment.isMoment($ctrl.timeStartInitial) || !moment.isMoment($ctrl.timeEndInitial)) $ctrl.selectClear();

    if (angular.isDefined($ctrl.reservations)) {
      slots.forEach(function (slot) {
        // reset previous reservations
        slot.reserved = false;
        slot.buffer = false;
        delete slot.text;
        delete slot.userId;
        delete slot.reservedLength;
      });
      $ctrl.reservations.forEach(function (reservation) {
        // mark reservation only if it's not equal to our initial reservation (passed on instantiating the directive)
        // when editing existing reservation, this allows to again select hours that was reserved initially
        if (moment.isMoment($ctrl.timeStartInitial) && moment.isMoment($ctrl.timeEndInitial) && reservation.from.isSame($ctrl.timeStartInitial) && reservation.to.isSame($ctrl.timeEndInitial)) return;
        var start = reservation.from.diff(reservation.from.clone().startOf('date'), 'minutes') / ($ctrl.scale || scaleDefault);
        var fStart = Math.floor(start);
        var end = start + (reservation.to - reservation.from) / 1000 / 60 / ($ctrl.scale || scaleDefault);
        var fEnd = Math.ceil(end);
        fEnd += end !== fEnd ? 1 : 0;
        makeBuffer({
          slots: slots,
          reservation: reservation,
          index: fStart - 1,
          direction: -1
        }); // pre-buffer

        for (var i = fStart; i <= fEnd; i++) {
          slots[i].reserved = true;
          slots[i].text = reservation.userCompany ? reservation.userCompany + ': ' : '';
          slots[i].text += '<strong>' + reservation.userName + '</strong>';
          slots[i].userId = reservation.userId;

          if (i === fStart) {
            slots[i].reservedLength = fEnd - fStart + 1;
          }
        }

        makeBuffer({
          slots: slots,
          reservation: reservation,
          index: fEnd
        }); // post-buffer
      });
      freeOutermostSlots(slots);
    }

    function freeOutermostSlots(slots) {
      // allow clicking outermost slots
      for (var i = 0, j = slots.length - 1; i < slots.length; i++, j--) {
        if (slots[i].reserved && slots[i + 1] && !slots[i + 1].reserved && slots[i + 1].available) {
          slots[i].reserved = false;
        }

        if (slots[j].reserved && j > 0 && !slots[j - 1].reserved && slots[j - 1].available) {
          slots[j].reserved = false;
        }

        if (!slots[i].available && slots[i + 1] && slots[i + 1].available && !slots[i + 1].reserved) {
          slots[i].available = true;
        }

        if (!slots[j].available && slots[j - 1] && slots[j - 1].available && !slots[j - 1].reserved) {
          slots[j].available = true;
        }
      }
    }

    function makeBuffer(_ref) {
      var slots = _ref.slots,
          reservation = _ref.reservation,
          index = _ref.index,
          _ref$direction = _ref.direction,
          direction = _ref$direction === void 0 ? 1 : _ref$direction;
      if (!$ctrl.buffer || !slots[index]) return;
      if ($ctrl.role ? (userRoles[$ctrl.role] || {}).type === 'admin' : session.isAdmin()) return;
      var size = Math.ceil($ctrl.buffer / ($ctrl.scale || scaleDefault));
      var end = index + size * direction;

      for (var i = index; direction > 0 ? i < end : i > end; i += direction) {
        if (slots[i]) {
          (slots[i + (direction > 0 ? 1 : 0)] || {}).available = false;

          if (direction > 0 && i === index && index < slots.length - 1 || direction < 0 && i === end + 1) {
            slots[i].buffer = size;
          }
        }
      }
    }
  }
}]));

/***/ }),

/***/ "./shared/reservation-form/time-selector.scss":
/*!****************************************************!*\
  !*** ./shared/reservation-form/time-selector.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-form/time-selector.tpl.html":
/*!********************************************************!*\
  !*** ./shared/reservation-form/time-selector.tpl.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"hint\" translate=\"RESERVATIONS.TIME_SELECTOR.HINT\"></div> <div class=\"slots-wrapper\" flex=\"1 1 auto\" res-drag-select start=\"$ctrl.selectionStart\" end=\"$ctrl.selectionEnd\" slots=\"$ctrl.slots\" limit-min=\"$ctrl.limitMin\" scale=\"$ctrl.scale\"> <div class=\"slot\" ng-repeat=\"slot in $ctrl.slots\" ng-click=\"$ctrl.selectTime($index)\" ng-class=\"$ctrl.getSlotClass(slot, $index)\" index=\"{{$index}}\" time-str=\"{{slot.time | date:'HH:mm:00'}}\" aria-label=\"{{$ctrl.getSlotTitle(slot, $index)}}\"> <div class=\"reserved-outline\" ng-if=\"slot.reservedLength\" ng-class=\"{ own: $ctrl.currentUserId === slot.userId }\"> <div class=\"reserved-outline-inner\" ng-style=\"{ height: 'calc(' + (slot.reservedLength * 100) + '% - 40px)' }\"> <span ng-bind-html=\"slot.text\"></span> </div> </div> <div ng-if=\"slot.buffer\" class=\"buffer-outline\"> <div class=\"buffer-outline-inner\" ng-style=\"{ height: 'calc(' + (slot.buffer * 100) + '% - 3px)' }\"> <span translate=\"RESERVATIONS.RESERVATION_BUFFER\"></span> </div> </div> <div class=\"time-cell\"> <div class=\"time\" nice-time=\"slot.time\"></div> </div> </div> <div class=\"selected-outline\" ng-if=\"$ctrl.selectionStart != -1\" ng-style=\"{ top: $ctrl.selectionStart * 37 + 18.5 + 'px', height: ($ctrl.selectionEnd - $ctrl.selectionStart) * 37 + 'px' }\"> <div class=\"selected-outline-inner\"> <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"diagonal-hatch\"> <defs> <pattern id=\"diagonalHatch\" patternUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"105\" height=\"105\"> <g class=\"diagonal-hatch-pattern\" transform=\"translate(105,0) scale(-1,1)\"> <path d=\"M0 90 l15,15\"/> <path d=\"M0 75 l30,30\"/> <path d=\"M0 60 l45,45\"/> <path d=\"M0 45 l60,60\"/> <path d=\"M0 30 l75,75\"/> <path d=\"M0 15 l90,90\"/> <path d=\"M0 0 l105,105\"/> <path d=\"M15 0 l90,90\"/> <path d=\"M30 0 l75,75\"/> <path d=\"M45 0 l60,60\"/> <path d=\"M60 0 l45,45\"/> <path d=\"M75 0 l30,30\"/> <path d=\"M90 0 l15,15\"/> </g> </pattern> </defs> <g> <rect x=\"0\" y=\"0\" width=\"100%\" height=\"2000\" class=\"diagonal-hatch-rect\"/> </g> </svg> </div> <div class=\"selected-from\" ng-show=\"$ctrl.selectionStart !== -1\" translate=\"RESERVATIONS.TIME_SELECTOR.FROM\"></div> <div class=\"selected-to\" ng-show=\"$ctrl.selectionEnd !== -1\" translate=\"RESERVATIONS.TIME_SELECTOR.TO\"></div> </div> </div> <div class=\"clear-selection\"> <button type=\"button\" class=\"btn ff-btn btn-primary\" ng-click=\"$ctrl.selectClear()\" translate=\"RESERVATIONS.TIME_SELECTOR.BTN_CLEAR\"></button> </div> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=book-it-now~floor-plans~reservation-tablet~reservations~simple-reservation~._shared_reservation-form~59893d90.js.map?_rev=def9ecd95d381cccbe90