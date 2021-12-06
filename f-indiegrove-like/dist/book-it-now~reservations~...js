(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-it-now~reservations~.."],{

/***/ "../node_modules/core-js/internals/array-method-has-species-support.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-has-species-support.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.filter.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./shared/reservation-calendar/header/rc-adjustments.component.js":
/*!************************************************************************!*\
  !*** ./shared/reservation-calendar/header/rc-adjustments.component.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_adjustments_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-adjustments.scss */ "./shared/reservation-calendar/header/rc-adjustments.scss");
/* harmony import */ var _rc_adjustments_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_adjustments_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rcAdjustments component - adjustments block (zoom) for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcAdjustments', []).component('rcAdjustments', {
  template: '<label><span translate="RESERVATIONS.CALENDAR.ZOOM"></span>' + '<input type="range" class="rc-range" title="{{\'RESERVATIONS.CALENDAR.ZOOM.HINT\' | translate}}"' + ' min="{{$ctrl.$rcCalendar.modes.day.minWidth}}" max="{{$ctrl.$rcCalendar.modes.day.maxWidth}}"' + ' ng-model="$ctrl.$rcCalendar.modes.day.width" ng-show="$ctrl.$rcCalendar.mode === \'day\'">' + '<input type="range" class="rc-range" title="{{\'RESERVATIONS.CALENDAR.ZOOM.HINT\' | translate}}"' + ' min="{{$ctrl.$rcCalendar.modes.week.minWidth}}" max="{{$ctrl.$rcCalendar.modes.week.maxWidth}}"' + ' ng-model="$ctrl.$rcCalendar.modes.week.width" ng-show="$ctrl.$rcCalendar.mode === \'week\'">' + '</label>',
  controller: 'RcAdjustmentsController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcAdjustmentsController', function () {// var $ctrl = this;
  //
  // $ctrl.$onInit = function() {
  // };
}));

/***/ }),

/***/ "./shared/reservation-calendar/header/rc-adjustments.scss":
/*!****************************************************************!*\
  !*** ./shared/reservation-calendar/header/rc-adjustments.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-calendar/header/rc-header.component.js":
/*!*******************************************************************!*\
  !*** ./shared/reservation-calendar/header/rc-header.component.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-header.scss */ "./shared/reservation-calendar/header/rc-header.scss");
/* harmony import */ var _rc_header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_header_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rc_header_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rc-header.tpl.html */ "./shared/reservation-calendar/header/rc-header.tpl.html");
/* harmony import */ var _rc_header_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rc_header_tpl_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");



/**
 * rcHeader component - timetable header for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcHeader', [shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name]).component('rcHeader', {
  template: _rc_header_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
  controller: 'RcHeaderController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcHeaderController', ["$element", "$scope", "$locale", function ($element, $scope, $locale) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.weekTimeFormat = $locale.timeFormat === 24 ? 'H' : 'h';
  };
  /**
   * Recalculate vertical grid when calendar day/week mode changes
   */


  $scope.$watchGroup(['$ctrl.$rcCalendar.mode', '$ctrl.$rcCalendar.getCalStartDate().valueOf()'], function () {
    var startDate = $ctrl.$rcCalendar.getCalStartDate();
    var endDate = $ctrl.$rcCalendar.getCalEndDate();
    var date, delta; // Vertical grid generation

    delta = $ctrl.$rcCalendar.mode === 'week' ? 1 : 0.5;
    $ctrl.vgrid = [];

    for (date = startDate.clone(); date <= endDate; date.add(delta, 'h')) {
      $ctrl.vgrid.push($ctrl.$rcCalendar.dateToX(date));
    } // Time grid generation


    $ctrl.times = [];
    var comparator = $ctrl.$rcCalendar.mode === 'week' ? 'isBefore' : 'isSameOrBefore';

    for (date = startDate.clone(); date[comparator](endDate); date.add(1, 'h')) {
      if ($ctrl.$rcCalendar.mode !== 'week' || date.hour() % 2 === 0) {
        $ctrl.times.push({
          x: $ctrl.$rcCalendar.dateToX(date),
          time: date.clone(),
          highlight: $ctrl.$rcCalendar.mode === 'week' || date.hour() % 12 === 0
        });
      }
    } // Week days generation


    if ($ctrl.$rcCalendar.mode === 'week') {
      $ctrl.weekdays = [];

      for (date = startDate.clone(); date < endDate; date.add(1, 'd')) {
        $ctrl.weekdays.push({
          x: $ctrl.$rcCalendar.dateToX(date),
          width: $ctrl.$rcCalendar.dateToX(date.clone().add(1, 'd')) - $ctrl.$rcCalendar.dateToX(date),
          time: date.clone()
        });
      }
    }
  });
}]));

/***/ }),

/***/ "./shared/reservation-calendar/header/rc-header.scss":
/*!***********************************************************!*\
  !*** ./shared/reservation-calendar/header/rc-header.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-calendar/header/rc-header.tpl.html":
/*!***************************************************************!*\
  !*** ./shared/reservation-calendar/header/rc-header.tpl.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = " <div class=\"rc-header-scrollable\" ng-style=\"{ width: $ctrl.$rcCalendar.modes[$ctrl.$rcCalendar.mode].width + 'px' }\"> <div class=\"rc-borders-h\"></div> <div class=\"rc-borders-v\" ng-repeat=\"x in $ctrl.vgrid\" ng-style=\"{ left: x + '%' }\"></div> <span ng-bind=\"item.time | date:$ctrl.weekTimeFormat\" ng-if=\"$ctrl.$rcCalendar.mode === 'week'\" ng-repeat=\"item in $ctrl.times\" ng-style=\"{ left: item.x + '%' }\" class=\"rc-time\" ng-class=\"{ 'rc-highlight': item.highlight }\"></span> <div ng-if=\"$ctrl.$rcCalendar.mode === 'week'\" ng-repeat=\"day in $ctrl.weekdays\" class=\"rc-weekday\" ng-style=\"{ left: day.x + '%', width: day.width + '%' }\"> <div ng-bind=\"day.time | date:'EEEE'\"></div> <div class=\"rc-pictogram\"> <ff-row> <div class=\"serifs\"><hr><hr><hr></div> </ff-row> <span ng-bind=\"day.time | date:'dd'\"></span> </div> </div> <rc-layer-grid-b ng-st1yle=\"{ width: $ctrl.$rcCalendar.modes[$ctrl.$rcCalendar.mode].width + 'px', height: $ctrl.$rcCalendar.gridHeight + 'px' }\"></rc-layer-grid-b> <span nice-time=\"item.time\" ng-repeat=\"item in $ctrl.times\" ng-if=\"$ctrl.$rcCalendar.mode === 'day'\" ng-style=\"{ left: item.x + '%' }\" class=\"rc-time\" ng-class=\"{ 'rc-highlight': item.highlight }\"></span> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-availability.component.js":
/*!*************************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-availability.component.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_availability_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-availability.scss */ "./shared/reservation-calendar/layers/rc-availability.scss");
/* harmony import */ var _rc_availability_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_availability_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rcAvailability component - availability item for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcAvailability', ['deskworks.appDim']).component('rcAvailability', {
  template: '',
  controller: 'RcAvailabilityController',
  require: {
    $rcCalendar: '^^rcCalendar',
    ffBlock: '^^?ffBulkReadOnly'
  },
  bindings: {
    availability: '<'
  }
}).controller('RcAvailabilityController', ["$element", "$scope", "$translate", "rcHelper", "state", "appDim", function ($element, $scope, $translate, rcHelper, state, appDim) {
  var $ctrl = this;
  /**
   * Init
   */

  $ctrl.$onInit = function () {
    if ($ctrl.ffBlock && !$ctrl.ffBlock.editMode) return $element.attr('title', $translate.instant('RESERVATIONS.CALENDAR.NO_PERMISSION.HINT'));
    $element.attr('title', $translate.instant('RESERVATIONS.CALENDAR.AVAILABLE.HINT'));
    $element.on('click', function (event) {
      $ctrl.onClick(event);
      $scope.$apply();
    });
  };
  /**
   * Destroy
   */


  $ctrl.$onDestroy = function () {
    $element.off('click');
  };
  /**
   * Click handler, navigates to reservation form
   */


  $ctrl.onClick = function (event) {
    var date = moment(Math.floor($ctrl.from + ($ctrl.to - $ctrl.from) * event.offsetX / $element[0].offsetWidth));
    rcHelper.floorDate(date, 30);
    state.setParam('date', rcHelper.dateToStr(date));
    state.setParam('unit', $ctrl.availability.reservationUnit.id);
    appDim(true);
    if ($ctrl.$rcCalendar.next) return $ctrl.$rcCalendar.next(); // external next handler

    return state.setPath('/new-reservation');
  };
  /**
   * Recalculate availability geometry on week/day mode change
   */


  $scope.$watchGroup(['$ctrl.$rcCalendar.mode', '$ctrl.$rcCalendar.filter'], function () {
    // Prevent overlapping calendar start/end dates via Math.max/min
    $ctrl.from = Math.max($ctrl.availability.from, $ctrl.$rcCalendar.getCalStartDate());
    $ctrl.to = Math.min($ctrl.availability.to, $ctrl.$rcCalendar.getCalEndDate());
    var left = $ctrl.$rcCalendar.dateToX($ctrl.from);
    var width = $ctrl.$rcCalendar.dateToX($ctrl.to) - left;
    $element.css('top', $ctrl.availability.reservationUnit.top + 'px');
    $element.css('height', $ctrl.$rcCalendar.rowHeight + 'px');
    $element.css('left', left + '%');
    $element.css('width', width + '%');
  });
}]));

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-availability.scss":
/*!*****************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-availability.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-buffer.component.js":
/*!*******************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-buffer.component.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_buffer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-buffer.scss */ "./shared/reservation-calendar/layers/rc-buffer.scss");
/* harmony import */ var _rc_buffer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_buffer_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rcBuffer component - reservation buffer item for Deskworks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcBuffer', []).component('rcBuffer', {
  template: '',
  controller: 'RcBufferController',
  require: {
    $rcCalendar: '^^rcCalendar'
  },
  bindings: {
    reservation: '<'
  }
}).controller('RcBufferController', ["$element", "$scope", "$translate", "rcHelper", "state", function ($element, $scope, $translate, rcHelper, state) {
  var $ctrl = this;
  /**
   * Init
   */

  $ctrl.$onInit = function () {
    $element.attr('title', $translate.instant('RESERVATIONS.RESERVATION_BUFFER'));
  };
  /**
   * Recalculate buffer geometry on week/day mode change
   */


  $scope.$watchGroup(['$ctrl.$rcCalendar.mode', '$ctrl.$rcCalendar.filter'], function () {
    var buffer = $ctrl.reservation.reservationUnit.buffer || 0;
    var from = $ctrl.reservation.from.clone().subtract(buffer, 'minutes');
    var to = $ctrl.reservation.to.clone().add(buffer, 'minutes');
    $ctrl.from = Math.max(from, $ctrl.$rcCalendar.getCalStartDate()); // prevent overlapping calendar start/end dates

    $ctrl.to = Math.min(to, $ctrl.$rcCalendar.getCalEndDate());
    var left = $ctrl.$rcCalendar.dateToX($ctrl.from);
    var width = $ctrl.$rcCalendar.dateToX($ctrl.to) - left;
    $element.css('top', $ctrl.reservation.reservationUnit.top + 'px');
    $element.css('height', $ctrl.$rcCalendar.rowHeight + 'px');
    $element.css('left', left + '%');
    $element.css('width', width + '%');
  });
}]));

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-buffer.scss":
/*!***********************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-buffer.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-layer-active.component.js":
/*!*************************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-layer-active.component.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_layer_active_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-layer-active.tpl.html */ "./shared/reservation-calendar/layers/rc-layer-active.tpl.html");
/* harmony import */ var _rc_layer_active_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_layer_active_tpl_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rc_availability_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rc-availability.component */ "./shared/reservation-calendar/layers/rc-availability.component.js");
/* harmony import */ var _rc_buffer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rc-buffer.component */ "./shared/reservation-calendar/layers/rc-buffer.component.js");
/* harmony import */ var _rc_reservation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rc-reservation.component */ "./shared/reservation-calendar/layers/rc-reservation.component.js");
/* harmony import */ var _rc_staff_only_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rc-staff-only.component */ "./shared/reservation-calendar/layers/rc-staff-only.component.js");





/**
 * rcLayerActive component - active (hover/click) availabilities/reservations layer for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcLayerActive', [_rc_availability_component__WEBPACK_IMPORTED_MODULE_1__["default"].name, _rc_buffer_component__WEBPACK_IMPORTED_MODULE_2__["default"].name, _rc_reservation_component__WEBPACK_IMPORTED_MODULE_3__["default"].name, _rc_staff_only_component__WEBPACK_IMPORTED_MODULE_4__["default"].name]).component('rcLayerActive', {
  template: _rc_layer_active_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
  controller: 'RcLayerActiveController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcLayerActiveController', ["$element", "$scope", "$locale", "$translate", function ($element, $scope, $locale, $translate) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $element.addClass('rc-layer');
    $element.attr('title', $translate.instant('RESERVATIONS.CALENDAR.NOT_AVAILABLE.HINT'));
    $ctrl.markerTimeFormat = $locale.timeFormat === 24 ? 'HH:mm' : 'hh:mm';
  };

  $ctrl.onClickHint = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();
  };
}]));

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-layer-active.tpl.html":
/*!*********************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-layer-active.tpl.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<rc-staff-only ng-repeat=\"resUnit in $ctrl.$rcCalendar.staffOnly\" reservation-unit=\"resUnit\"></rc-staff-only> <rc-availability ng-repeat=\"availability in $ctrl.$rcCalendar.availabilities\" availability=\"availability\"></rc-availability> <rc-buffer ng-repeat=\"reservation in $ctrl.$rcCalendar.reservations\" reservation=\"reservation\"></rc-buffer> <rc-reservation ng-repeat=\"reservation in $ctrl.$rcCalendar.reservations\" reservation=\"reservation\"> <ff-tip class=\"rc-marker-info\" ng-if=\"reservation.userName || reservation.reservationNote\" ng-click=\"$ctrl.onClickHint($event)\"> <h6> <span ng-if=\"reservation.userCompany\" class=\"company\">{{reservation.userCompany}}:</span> <span ng-if=\"reservation.userName\">{{reservation.userName}}</span> </h6> <div ng-if=\"reservation.accessCode && $ctrl.$rcCalendar.settings.enableAccessCodes\"> <span class=\"label\"><span translate=\"RESERVATIONS.ACCESS_CODE\"></span>:</span> <span class=\"value\">{{reservation.accessCode}}</span> </div> <div ng-if=\"reservation.addedBy\"> <span class=\"label\"><span translate=\"RESERVATIONS.ADDED_BY\"></span>:</span> <span class=\"value\">{{reservation.addedBy}}</span> </div> <div ng-if=\"reservation.title\"> <span class=\"label\"><span translate=\"RESERVATIONS.TITLE.SHORT\"></span>:</span> <span class=\"value\">{{reservation.title}}</span> </div> <div ng-if=\"reservation.reservationNote\">{{reservation.reservationNote}}</div> </ff-tip> <ff-tip class=\"rc-marker-start\"> <span ng-bind=\"reservation.from | date:$ctrl.markerTimeFormat\"></span> </ff-tip> <ff-tip class=\"rc-marker-end\"> <span ng-bind=\"reservation.to | date:$ctrl.markerTimeFormat\"></span> </ff-tip> </rc-reservation> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-layer-availability.component.js":
/*!*******************************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-layer-availability.component.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_availability_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-availability.component */ "./shared/reservation-calendar/layers/rc-availability.component.js");

/**
 * rcLayerAvailability component - availability layer for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcLayerAvailability', [_rc_availability_component__WEBPACK_IMPORTED_MODULE_0__["default"].name]).component('rcLayerAvailability', {
  template: '<rc-availability ng-repeat="availability in $ctrl.$rcCalendar.availabilities" availability="availability"></rc-availability>',
  controller: 'RcLayerAvailabilityController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcLayerAvailabilityController', ["$element", "$scope", function ($element, $scope) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $element.addClass('rc-layer');
  };
}]));

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-layer-buffers.component.js":
/*!**************************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-layer-buffers.component.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_buffer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-buffer.component */ "./shared/reservation-calendar/layers/rc-buffer.component.js");

/**
 * rcLayerBuffers component - reservation buffers layer for Deskworks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcLayerBuffers', [_rc_buffer_component__WEBPACK_IMPORTED_MODULE_0__["default"].name, 'deskworks.userRoles', 'session']).component('rcLayerBuffers', {
  template: '<rc-buffer ng-if="$ctrl.isVisible()" ng-repeat="reservation in $ctrl.$rcCalendar.reservations" reservation="reservation"></rc-buffer>',
  controller: 'RcLayerBuffersController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcLayerBuffersController', ["$element", "$scope", "userRoles", "session", function ($element, $scope, userRoles, session) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $element.addClass('rc-layer');
  };

  $ctrl.isVisible = function () {
    return $ctrl.$rcCalendar.role ? (userRoles[$ctrl.$rcCalendar.role] || {}).type !== 'admin' : !session.isAdmin();
  };
}]));

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-layer-grid-b.component.js":
/*!*************************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-layer-grid-b.component.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_layer_grid_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-layer-grid.scss */ "./shared/reservation-calendar/layers/rc-layer-grid.scss");
/* harmony import */ var _rc_layer_grid_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_layer_grid_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rcLayerGridB component - boundary grid layer for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcLayerGridB', []).component('rcLayerGridB', {
  template: '<div class="rc-borders-b" ng-repeat="x in $ctrl.bgrid" ng-style="{ left: x + \'%\' }"></div>',
  controller: 'RcLayerGridBController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcLayerGridBController', ["$element", "$scope", function ($element, $scope) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $element.addClass('rc-layer');
  };
  /**
   * Recalculate vertical grid when calendar day/week mode changes
   */


  $scope.$watchGroup(['$ctrl.$rcCalendar.mode', '$ctrl.$rcCalendar.getCalStartDate().valueOf()'], function () {
    var startDate = $ctrl.$rcCalendar.getCalStartDate();
    var endDate = $ctrl.$rcCalendar.getCalEndDate();
    var date;
    $ctrl.bgrid = [];

    if ($ctrl.$rcCalendar.mode === 'week') {
      for (date = startDate.clone(); date <= endDate; date.add(1, 'd')) {
        $ctrl.bgrid.push($ctrl.$rcCalendar.dateToX(date));
      }
    } else {
      for (date = startDate.clone(); date <= endDate; date.hour(date.hour() ? 24 : 12)) {
        $ctrl.bgrid.push($ctrl.$rcCalendar.dateToX(date));
      }
    }
  });
}]));

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-layer-grid-h.component.js":
/*!*************************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-layer-grid-h.component.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_layer_grid_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-layer-grid.scss */ "./shared/reservation-calendar/layers/rc-layer-grid.scss");
/* harmony import */ var _rc_layer_grid_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_layer_grid_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rcLayerGridH component - horizontal grid layer for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcLayerGridH', []).component('rcLayerGridH', {
  template: '<div class="rc-borders-h" ng-repeat-start="resType in $ctrl.$rcCalendar.reservationTypes" ' + 'ng-style="{ top: resType.top + \'px\', height: $ctrl.$rcCalendar.rowGroupHeaderHeight + \'px\' }"></div>' + '<div class="rc-borders-h" ng-repeat-end ng-repeat="resUnit in resType.reservationUnits" ' + 'ng-style="{ top: resUnit.top + \'px\', height: $ctrl.$rcCalendar.rowHeight + \'px\' }"></div>',
  controller: 'RcLayerGridHController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcLayerGridHController', ["$element", function ($element) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $element.addClass('rc-layer');
  };
}]));

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-layer-grid-v.component.js":
/*!*************************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-layer-grid-v.component.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_layer_grid_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-layer-grid.scss */ "./shared/reservation-calendar/layers/rc-layer-grid.scss");
/* harmony import */ var _rc_layer_grid_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_layer_grid_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rcLayerGridV component - vertical grid layer for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcLayerGridV', []).component('rcLayerGridV', {
  template: '<div class="rc-borders-v" ng-repeat="x in $ctrl.vgrid" ng-style="{ left: x + \'%\' }"></div>',
  controller: 'RcLayerGridVController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcLayerGridVController', ["$element", "$scope", function ($element, $scope) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $element.addClass('rc-layer');
  };
  /**
   * Recalculate vertical grid when calendar day/week mode changes
   */


  $scope.$watchGroup(['$ctrl.$rcCalendar.mode', '$ctrl.$rcCalendar.getCalStartDate().valueOf()'], function () {
    var startDate = $ctrl.$rcCalendar.getCalStartDate();
    var endDate = $ctrl.$rcCalendar.getCalEndDate();
    var frame = $ctrl.$rcCalendar.mode === 'week' ? 3 : 0.5;
    var date;
    $ctrl.vgrid = [];

    for (date = startDate.clone(); date <= endDate; date.add(0.5, 'h')) {
      if ((date.hour() + date.minute() / 60) % frame === 0) {
        $ctrl.vgrid.push($ctrl.$rcCalendar.dateToX(date));
      }
    }
  });
}]));

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-layer-grid.scss":
/*!***************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-layer-grid.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-layer-reservations.component.js":
/*!*******************************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-layer-reservations.component.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_reservation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-reservation.component */ "./shared/reservation-calendar/layers/rc-reservation.component.js");

/**
 * rcLayerReservations component - reservations layer for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcLayerReservations', [_rc_reservation_component__WEBPACK_IMPORTED_MODULE_0__["default"].name]).component('rcLayerReservations', {
  template: '<rc-reservation ng-repeat="reservation in $ctrl.$rcCalendar.reservations" reservation="reservation"></rc-reservation>',
  controller: 'RcLayerReservationsController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcLayerReservationsController', ["$element", "$scope", function ($element, $scope) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $element.addClass('rc-layer');
  };
}]));

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-reservation.component.js":
/*!************************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-reservation.component.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_reservation_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-reservation.scss */ "./shared/reservation-calendar/layers/rc-reservation.scss");
/* harmony import */ var _rc_reservation_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_reservation_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rcReservation component - reservation item for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcReservation', ['deskworks.appDim']).component('rcReservation', {
  template: '',
  controller: 'RcReservationController',
  require: {
    $rcCalendar: '^^rcCalendar',
    ffBlock: '^^?ffBulkReadOnly'
  },
  bindings: {
    reservation: '<'
  }
}).controller('RcReservationController', ["$element", "$scope", "$translate", "rcHelper", "state", "appDim", function ($element, $scope, $translate, rcHelper, state, appDim) {
  var $ctrl = this;
  /**
   * Init
   */

  $ctrl.$onInit = function () {
    $element.attr('title', $translate.instant('RESERVATIONS.CALENDAR.RESERVED.HINT'));
    if ($ctrl.reservation.userId == state.getCurrentUserId()) $element.addClass('own');
    if ($ctrl.ffBlock && !$ctrl.ffBlock.editMode) return;
    $element.on('click', function (event) {
      $ctrl.onClick(event);
      $scope.$apply();
    });
  };
  /**
   * Destroy
   */


  $ctrl.$onDestroy = function () {
    $element.off('click');
  };
  /**
   * Click handler, navigates to reservation form
   */


  $ctrl.onClick = function (event) {
    if (!state.isLoggedAdmin() && $ctrl.reservation.userId != state.getCurrentUserId()) return;
    appDim(true);
    state.setParam('date', rcHelper.dateToStr($ctrl.reservation.from));
    return state.setPath('/edit-reservation/' + $ctrl.reservation.id);
  };
  /**
   * Recalculate reservation geometry on week/day mode change
   */


  $scope.$watchGroup(['$ctrl.$rcCalendar.mode', '$ctrl.$rcCalendar.filter'], function () {
    // Prevent overlapping calendar start/end dates via Math.max/min
    $ctrl.from = Math.max($ctrl.reservation.from, $ctrl.$rcCalendar.getCalStartDate());
    $ctrl.to = Math.min($ctrl.reservation.to, $ctrl.$rcCalendar.getCalEndDate());
    var left = $ctrl.$rcCalendar.dateToX($ctrl.from);
    var width = $ctrl.$rcCalendar.dateToX($ctrl.to) - left;
    $element.css('top', $ctrl.reservation.reservationUnit.top + 'px');
    $element.css('height', $ctrl.$rcCalendar.rowHeight + 'px');
    $element.css('left', left + '%');
    $element.css('width', width + '%');
  });
}]));

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-reservation.scss":
/*!****************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-reservation.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-staff-only.component.js":
/*!***********************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-staff-only.component.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_staff_only_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-staff-only.scss */ "./shared/reservation-calendar/layers/rc-staff-only.scss");
/* harmony import */ var _rc_staff_only_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_staff_only_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rcStaffOnly component - Staff Only available item for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcStaffOnly', []).component('rcStaffOnly', {
  template: '',
  controller: 'RcStaffOnlyController',
  require: {
    $rcCalendar: '^rcCalendar'
  },
  bindings: {
    reservationUnit: '<'
  }
}).controller('RcStaffOnlyController', ["$element", "$scope", "$translate", function ($element, $scope, $translate) {
  var $ctrl = this;
  /**
   * Init
   */

  $ctrl.$onInit = function () {
    $element.attr('title', $translate.instant('RESERVATIONS.CALENDAR.STAFF_ONLY.HINT'));
  };
  /**
   * Recalculate availability geometry on week/day mode change
   */


  $scope.$watchGroup(['$ctrl.$rcCalendar.mode', '$ctrl.$rcCalendar.filter'], function () {
    var left = $ctrl.$rcCalendar.dateToX($ctrl.$rcCalendar.getCalStartDate());
    var width = $ctrl.$rcCalendar.dateToX($ctrl.$rcCalendar.getCalEndDate()) - left;
    $element.css('top', $ctrl.reservationUnit.top + 'px');
    $element.css('height', $ctrl.$rcCalendar.rowHeight + 'px');
    $element.css('left', left + '%');
    $element.css('width', width + '%');
  });
}]));

/***/ }),

/***/ "./shared/reservation-calendar/layers/rc-staff-only.scss":
/*!***************************************************************!*\
  !*** ./shared/reservation-calendar/layers/rc-staff-only.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-calendar/rc-calendar.component.js":
/*!**************************************************************!*\
  !*** ./shared/reservation-calendar/rc-calendar.component.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _rc_calendar_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rc-calendar.scss */ "./shared/reservation-calendar/rc-calendar.scss");
/* harmony import */ var _rc_calendar_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_rc_calendar_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _rc_calendar_tpl_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rc-calendar.tpl.html */ "./shared/reservation-calendar/rc-calendar.tpl.html");
/* harmony import */ var _rc_calendar_tpl_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_rc_calendar_tpl_html__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _toolbar_rc_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toolbar/rc-toolbar.component */ "./shared/reservation-calendar/toolbar/rc-toolbar.component.js");
/* harmony import */ var _sidebar_rc_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/rc-sidebar.component */ "./shared/reservation-calendar/sidebar/rc-sidebar.component.js");
/* harmony import */ var _header_rc_adjustments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/rc-adjustments.component */ "./shared/reservation-calendar/header/rc-adjustments.component.js");
/* harmony import */ var _header_rc_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/rc-header.component */ "./shared/reservation-calendar/header/rc-header.component.js");
/* harmony import */ var _layers_rc_layer_grid_h_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layers/rc-layer-grid-h.component */ "./shared/reservation-calendar/layers/rc-layer-grid-h.component.js");
/* harmony import */ var _layers_rc_layer_grid_v_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layers/rc-layer-grid-v.component */ "./shared/reservation-calendar/layers/rc-layer-grid-v.component.js");
/* harmony import */ var _layers_rc_layer_grid_b_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layers/rc-layer-grid-b.component */ "./shared/reservation-calendar/layers/rc-layer-grid-b.component.js");
/* harmony import */ var _layers_rc_layer_availability_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layers/rc-layer-availability.component */ "./shared/reservation-calendar/layers/rc-layer-availability.component.js");
/* harmony import */ var _layers_rc_layer_buffers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layers/rc-layer-buffers.component */ "./shared/reservation-calendar/layers/rc-layer-buffers.component.js");
/* harmony import */ var _layers_rc_layer_reservations_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layers/rc-layer-reservations.component */ "./shared/reservation-calendar/layers/rc-layer-reservations.component.js");
/* harmony import */ var _layers_rc_layer_active_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layers/rc-layer-active.component */ "./shared/reservation-calendar/layers/rc-layer-active.component.js");





















/**
 * rcCalendar component - DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcCalendar', ['deskworks.rcHelper', 'deskworks.calendarService', _toolbar_rc_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["default"].name, _sidebar_rc_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["default"].name, _header_rc_adjustments_component__WEBPACK_IMPORTED_MODULE_12__["default"].name, _header_rc_header_component__WEBPACK_IMPORTED_MODULE_13__["default"].name, _layers_rc_layer_grid_h_component__WEBPACK_IMPORTED_MODULE_14__["default"].name, _layers_rc_layer_grid_v_component__WEBPACK_IMPORTED_MODULE_15__["default"].name, _layers_rc_layer_grid_b_component__WEBPACK_IMPORTED_MODULE_16__["default"].name, _layers_rc_layer_availability_component__WEBPACK_IMPORTED_MODULE_17__["default"].name, _layers_rc_layer_buffers_component__WEBPACK_IMPORTED_MODULE_18__["default"].name, _layers_rc_layer_reservations_component__WEBPACK_IMPORTED_MODULE_19__["default"].name, _layers_rc_layer_active_component__WEBPACK_IMPORTED_MODULE_20__["default"].name]).directive('rcCalendar', function () {
  return {
    template: _rc_calendar_tpl_html__WEBPACK_IMPORTED_MODULE_9___default.a,
    scope: true,
    controller: 'RcCalendarController as $ctrl',
    bindToController: {
      calData: '<',
      settings: '<',
      next: '&?',
      showPricing: '<'
    }
  };
}).controller('RcCalendarController', ["$element", "$scope", "$filter", "$timeout", "$interval", "helper", "rcHelper", "state", "dwAlerts", "calendarService", function ($element, $scope, $filter, $timeout, $interval, helper, rcHelper, state, dwAlerts, calendarService) {
  var $ctrl = this;
  /**
   * Init
   */

  $ctrl.$onInit = function () {
    $ctrl.rowHeight = 36;
    $ctrl.rowGroupHeaderHeight = 20;
    $ctrl.modes = {
      day: {
        minWidth: 1400,
        maxWidth: 2400
      },
      week: {
        minWidth: 1600,
        maxWidth: 3600
      }
    }; // $timeout - workaround for angular bug with input type range: https://github.com/angular/angular.js/issues/6726

    $timeout(function () {
      $ctrl.modes.day.width = 1670;
      $ctrl.modes.week.width = 2400;
    });
    $ctrl.mode = state.getParam('mode') || 'day';
    $ctrl.filter = state.getParam('filter') || 'available';
    $ctrl.role = state.getParam('role');
    $ctrl.date = $filter('toDate')(state.getParam('date'));

    if (!moment.isMoment($ctrl.date)) {
      $ctrl.date = moment();
    }

    rcHelper.floorDate($ctrl.date, 30);
    bindParamsToUrl(); // $timeout(function() {
    //   angular.element(document.querySelector('.rc-scroller')).on('scroll', syncScroll);
    // });
  };
  /**
   * Destroy
   */


  $ctrl.$onDestroy = function () {
    $interval.cancel($ctrl.timer);
  };

  $ctrl.getCenterName = function () {
    return (state.getCurrentCenter() || {}).name;
  };
  /**
   * Switch .mode-day/.mode-week class depending on $ctrl.mode
   */


  $scope.$watch('$ctrl.mode', function () {
    $element.toggleClass('mode-day', $ctrl.mode === 'day');
    $element.toggleClass('mode-week', $ctrl.mode !== 'day');
    scrollToTime($ctrl.date);
  });
  /**
   * Fetch data from server on date/mode change
   */

  $scope.$watchGroup(['$ctrl.mode', '$ctrl.date', '$ctrl.role', function () {
    return state.getCurrentCenterId();
  }], function (newVal, oldVal) {
    if (angular.equals(newVal, oldVal)) {
      // prevent duplicate fetch on initialization (due to $resolve.calData)
      $ctrl.timer = $interval($ctrl.fetch, 1000 * 60);
    } else {
      $ctrl.reservations = [];
      $ctrl.availabilities = [];
      $ctrl.fetch(true);
    }
  });
  /**
   * Transform $ctrl.calData to flat data
   */

  $scope.$watchGroup(['$ctrl.calData', '$ctrl.filter', '$ctrl.mode'], function (newVal, oldVal) {
    $ctrl.reservations = [];
    $ctrl.availabilities = [];
    $ctrl.staffOnly = [];
    $ctrl.reservationTypes = [];

    if (!angular.isArray($ctrl.calData)) {
      return;
    }

    $ctrl.calData.forEach(function (resType) {
      // Shallow copy each reservation category, filter reservation units, filter reservation categories for at least one reservation unit
      var reservationType = angular.extend({}, resType); // shallow copy each reservation category

      reservationType.reservationUnits = [];
      resType.reservationUnits.forEach(function (resUnit) {
        var _context, _context2;

        // Filter reservations
        var reservations = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = resUnit.reservations).call(_context, function (reservation) {
          if (rcHelper.checkIntersection(reservation.from, reservation.to, $ctrl.getCalStartDate(), $ctrl.getCalEndDate())) {
            reservation.reservationType = reservationType;
            reservation.reservationUnit = resUnit;
            return true;
          }
        }); // Filter availabilities


        var availabilities = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = resUnit.availabilities).call(_context2, function (availability) {
          if (rcHelper.checkIntersection(availability.from, availability.to, $ctrl.getCalStartDate(), $ctrl.getCalEndDate())) {
            availability.reservationType = reservationType;
            availability.reservationUnit = resUnit;
            return true;
          }
        }); // Filter reservation units by availabilities or include all depending on $ctrl.filter


        if (resUnit.availabilities.length || _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()($ctrl) === 'all' || !$ctrl.settings.hideStaffOnlyUnits && resUnit.whoCanReserve === 'staffOnly') {
          var _context3, _context4;

          $ctrl.reservations = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = $ctrl.reservations).call(_context3, reservations);
          $ctrl.availabilities = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = $ctrl.availabilities).call(_context4, availabilities);
          reservationType.reservationUnits.push(resUnit);

          if (!availabilities.length && resUnit.whoCanReserve === 'staffOnly') {
            $ctrl.staffOnly.push(resUnit);
          }
        }
      }); // Include only non-empty reservation categories

      if (reservationType.reservationUnits.length) {
        $ctrl.reservationTypes.push(reservationType); // include reservation category only if it has at least one reservation unit
      }
    });
    preCalcGeometry($ctrl.reservationTypes);
  });
  /**
   * Get calendar start date
   */

  $ctrl.getCalStartDate = function () {
    var date = $ctrl.mode === 'week' ? rcHelper.weekStart($ctrl.date) : $ctrl.date.clone();
    return date.hour(0).minute(0).second(0).millisecond(0);
  };
  /**
   * Get calendar end date
   */


  $ctrl.getCalEndDate = function () {
    var date = $ctrl.mode === 'week' ? rcHelper.weekEnd($ctrl.date) : $ctrl.date.clone();
    return date.hour(24).minute(0).second(0).millisecond(0);
  };
  /**
   * Calculates absolute X offset for specified date in percents
   */


  $ctrl.dateToX = function (date) {
    var start = $ctrl.getCalStartDate();
    var end = $ctrl.getCalEndDate();
    return (date - start) * 100 / (end - start);
  };
  /**
   * Fetches calendar data from server (reservation categories, reservation units, reservations, availability)
   */


  $ctrl.fetch = function (force) {
    $interval.cancel($ctrl.timer);
    if ($ctrl.fetching && !force) return; // skip fetching when called by timer

    $ctrl.fetching = true;
    return calendarService.query(state.getCurrentCenterId(), rcHelper.weekStart($ctrl.date), rcHelper.weekEnd($ctrl.date), $ctrl.role).then(function (result) {
      $ctrl.calData = result;
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to fetch calendar data.');
    }).finally(function () {
      $ctrl.fetching = false;
      $interval.cancel($ctrl.timer);
      $ctrl.timer = $interval($ctrl.fetch, 1000 * 60);
    });
  };
  /**
   * One-way bind reservation calendar params to URL search params
   */


  function bindParamsToUrl() {
    $scope.$watch('$ctrl.date', function (val) {
      state.setParam('date', rcHelper.dateToStr(val)).replace();
    });
    $scope.$watch('$ctrl.mode', function (val) {
      state.setParam('mode', val).replace();
    });
    $scope.$watch('$ctrl.filter', function (val) {
      state.setParam('filter', val).replace();
    });
    $scope.$watch('$ctrl.role', function (val) {
      state.setParam('role', val || null).replace();
    });
  } // /**
  //  * Synchronize scrolling sidebar with timetable
  //  */
  // function syncScroll(event) {
  //   angular.element(document.querySelector('.rc-sidebar-scrollable')).css('top', -event.target.scrollTop + 'px');
  //   angular.element(document.querySelector('.rc-header-scrollable')).css('left', -event.target.scrollLeft + 'px');
  // }

  /**
   * Scroll calendar to specified date/time
   */


  function scrollToTime(date) {
    $timeout(function () {
      var viewPort = document.querySelector('.rc-scroller');
      viewPort.scrollLeft = Math.floor($ctrl.modes[$ctrl.mode].width * $ctrl.dateToX(date - 3600000 * 4) / 100);
    });
  }
  /**
   * Pre-calculates vertical offset for each reservation category and unit and total grid height
   */


  function preCalcGeometry(reservationTypes) {
    var y = 0;
    reservationTypes.forEach(function (reservationType) {
      reservationType.top = y;
      y += $ctrl.rowGroupHeaderHeight - 1; // -1 for border collapsing

      reservationType.reservationUnits.forEach(function (reservationUnit) {
        reservationUnit.top = y;
        y += $ctrl.rowHeight - 1; // -1 for border collapsing
      });
    });
    $ctrl.gridHeight = y;
  }
}]));

/***/ }),

/***/ "./shared/reservation-calendar/rc-calendar.scss":
/*!******************************************************!*\
  !*** ./shared/reservation-calendar/rc-calendar.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-calendar/rc-calendar.tpl.html":
/*!**********************************************************!*\
  !*** ./shared/reservation-calendar/rc-calendar.tpl.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"rc-scroller\"> <div class=\"rc-header-hint gutter-h-half\" ng-if=\"$ctrl.showPricing\"> <span class=\"rc-header-hint-center\"><span>{{$ctrl.getCenterName()}}</span></span> <span class=\"rc-header-hint-hint\"><span><ff-icon sense=\"info\"></ff-icon> <span translate=\"RESERVATIONS.CALENDAR.HINT\"></span></span></span> </div> <rc-toolbar class=\"ff-read-only-ignore\" ng-style=\"{ marginTop: $app.hideHeader ? '-62px' : null }\"></rc-toolbar> <rc-header></rc-header> <rc-adjustments></rc-adjustments> <rc-layer-background class=\"rc-layer\" ng-style=\"{ width: +$ctrl.modes[$ctrl.mode].width + 40 + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-background> <rc-layer-availability ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-availability> <rc-layer-buffers ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-buffers> <rc-layer-reservations ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-reservations> <rc-layer-grid-h ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-grid-h> <rc-layer-grid-v ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-grid-v> <rc-layer-grid-b ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-grid-b> <rc-layer-active ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-active> <rc-sidebar ng-style=\"{ height: $ctrl.gridHeight + 'px' }\"></rc-sidebar> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-calendar/sidebar/rc-sidebar.component.js":
/*!*********************************************************************!*\
  !*** ./shared/reservation-calendar/sidebar/rc-sidebar.component.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rc_sidebar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rc-sidebar.scss */ "./shared/reservation-calendar/sidebar/rc-sidebar.scss");
/* harmony import */ var _rc_sidebar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rc_sidebar_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rc_sidebar_tpl_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rc-sidebar.tpl.html */ "./shared/reservation-calendar/sidebar/rc-sidebar.tpl.html");
/* harmony import */ var _rc_sidebar_tpl_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rc_sidebar_tpl_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layers_rc_layer_grid_h_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layers/rc-layer-grid-h.component */ "./shared/reservation-calendar/layers/rc-layer-grid-h.component.js");





/**
 * rcSidebar component - sidebar with reservation categories/units for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcSidebar', [_layers_rc_layer_grid_h_component__WEBPACK_IMPORTED_MODULE_4__["default"].name]).component('rcSidebar', {
  template: _rc_sidebar_tpl_html__WEBPACK_IMPORTED_MODULE_3___default.a,
  controller: 'RcSidebarController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcSidebarController', ["state", "dwAlerts", "reservationCategoryService", function (state, dwAlerts, reservationCategoryService) {
  var $ctrl = this;
  $ctrl.pricing = {};

  $ctrl.tipHover = function (category, scope) {
    if (!$ctrl.$rcCalendar.showPricing) return; // skip pricing

    if ($ctrl.pricing[category.id]) return; // already fired

    $ctrl.pricing[category.id] = {
      $$spin: true
    };
    return reservationCategoryService.get(state.getCurrentCenterId(), category.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get reservation category.');
    }).finally(function () {
      $ctrl.pricing[category.id].$$spin = false;
    }).then(function (cat) {
      $ctrl.pricing[cat.id].products = cat.products;
      scope.$broadcast('ffTip:layout');
    });
  };
}]));

/***/ }),

/***/ "./shared/reservation-calendar/sidebar/rc-sidebar.scss":
/*!*************************************************************!*\
  !*** ./shared/reservation-calendar/sidebar/rc-sidebar.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-calendar/sidebar/rc-sidebar.tpl.html":
/*!*****************************************************************!*\
  !*** ./shared/reservation-calendar/sidebar/rc-sidebar.tpl.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"rc-sidebar-scroller\"> <div class=\"rc-sidebar-scrollable\" ng-style=\"{ height: $ctrl.$rcCalendar.gridHeight + 'px' }\"> <div ng-repeat=\"resType in $ctrl.$rcCalendar.reservationTypes\"> <div class=\"rc-row-group-header ff-tip-trigger\" ng-style=\"{ top: resType.top + 'px' }\" title=\"{{::resType.name}}\"> <span>{{::resType.name}}</span> <ng-include src=\"'rcSidebarHintTpl'\" onload=\"item=resType\"></ng-include> </div> <div class=\"rc-row-header\" ng-repeat=\"resUnit in resType.reservationUnits\" title=\"{{::resUnit.name}}\" ng-style=\"{ top: resUnit.top + 'px', height: $ctrl.config.rowHeight + 'px' }\"> <div class=\"rc-unit-name\">{{::resUnit.name}}</div> <div class=\"rc-unit-icon ff-tip-trigger\" ng-if=\"::resUnit.photo\"> <ff-img ff-src=\"{{::resUnit.photo}}\" ff-alt=\"{{::resUnit.name}}\"></ff-img> <ng-include src=\"'rcSidebarHintTpl'\" onload=\"item=resUnit\"></ng-include> </div> </div> </div> <rc-layer-grid-h></rc-layer-grid-h> <ff-info ng-if=\"!$ctrl.$rcCalendar.reservationTypes.length\" class=\"ff-center\" translate=\"RESERVATIONS.CALENDAR.EMPTY\"></ff-info> </div> </div> <script type=\"text/ng-template\" id=\"rcSidebarHintTpl\"> <ff-tip class=\"ff-tip-right\" tip-type=\"white\" tip-hover=\"$ctrl.tipHover(resType, this)\">\n\t\t<h6>{{::item.name}}</h6>\n\t\t<div class=\"rc-tip-scroller\">\n\t\t\t<ff-img ff-src=\"{{::item.photo}}\" ff-alt=\"{{::item.name}}\"></ff-img>\n\t\t\t<div class=\"rc-cat-descr\" ng-if=\"::item.description || resType.description\" ng-bind-html=\"::item.description || resType.description\"></div>\n\t\t\t<div class=\"rc-cat-descr\" ng-if=\"::item.capacity\" translate=\"RESERVATIONS.CALENDAR.CAPACITY\" translate-values=\"{ capacity: item.capacity }\"></div>\n\t\t\t<div class=\"rc-cat-pricing\" ng-if=\"$ctrl.$rcCalendar.showPricing\">\n\t\t\t\t<ff-header ng-if=\"$ctrl.pricing[resType.id].products.length !== 0\"><span translate=\"RESERVATIONS.CALENDAR.PRICES\"></span></ff-header>\n\t\t\t\t<ff-spin ng-if=\"$ctrl.pricing[resType.id].$$spin\" class=\"ff-spin-placeholder\"></ff-spin>\n\t\t\t\t<div ng-repeat=\"product in $ctrl.pricing[resType.id].products\">\n\t\t\t\t\t<div class=\"rc-cat-product-name\" ng-if=\"product.priceItems.length\">{{::product.name}}</div>\n\t\t\t\t\t<ff-row ng-repeat=\"item in product.priceItems\">\n\t\t\t\t\t\t<div>{{::item.name}}</div>\n\t\t\t\t\t\t<div flex=\"0 0 50px\" class=\"ff-right rc-cat-item-price\">{{::item.price | ncurrency}}</div>\n\t\t\t\t\t</ff-row>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ff-tip> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-calendar/toolbar/rc-legend.component.js":
/*!********************************************************************!*\
  !*** ./shared/reservation-calendar/toolbar/rc-legend.component.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * rcLegend component - legend for DeskWorks reservation calendar
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcLegend', ['deskworks.state']).component('rcLegend', {
  template: '<div class="rc-reserved" translate="RESERVATIONS.CALENDAR.LEGEND.RESERVED" title="{{\'RESERVATIONS.CALENDAR.LEGEND.RESERVED.HINT\' | translate}}"></div>' + '<div class="rc-own" translate="RESERVATIONS.CALENDAR.LEGEND.OWN" title="{{\'RESERVATIONS.CALENDAR.LEGEND.OWN.HINT\' | translate}}"></div>' + '<div class="rc-available" translate="RESERVATIONS.CALENDAR.LEGEND.AVAILABLE" title="{{\'RESERVATIONS.CALENDAR.LEGEND.AVAILABLE.HINT\' | translate}}"></div>',
  controller: 'RcLegendController'
}).controller('RcLegendController', ["state", function (state) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.state = state;
  };
}]));

/***/ }),

/***/ "./shared/reservation-calendar/toolbar/rc-options.component.js":
/*!*********************************************************************!*\
  !*** ./shared/reservation-calendar/toolbar/rc-options.component.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_options_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-options.tpl.html */ "./shared/reservation-calendar/toolbar/rc-options.tpl.html");
/* harmony import */ var _rc_options_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_options_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rcOptions component - options for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcOptions', ['deskworks.state']).component('rcOptions', {
  template: _rc_options_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
  controller: 'RcOptionsController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcOptionsController', ["state", function (state) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.state = state;
  };
}]));

/***/ }),

/***/ "./shared/reservation-calendar/toolbar/rc-options.tpl.html":
/*!*****************************************************************!*\
  !*** ./shared/reservation-calendar/toolbar/rc-options.tpl.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-col class=\"ff-no-frame\"> <div ng-if=\"$ctrl.state.isLoggedAdmin()\"> <ff-select ff-model=\"$ctrl.$rcCalendar.role\" class=\"rc-role\"> <option value=\"\" translate=\"RESERVATIONS.CALENDAR.ROLE.COORDINATOR\"></option> <option value=\"member\" translate=\"RESERVATIONS.CALENDAR.ROLE.MEMBER\"></option> <option value=\"nonMember\" translate=\"RESERVATIONS.CALENDAR.ROLE.NON_MEMBER\"></option> </ff-select> </div> <div class=\"ff-grid\"> <ff-select flex=\"0 0 auto\" name=\"filter\" ff-model=\"$ctrl.$rcCalendar.filter\" class=\"rc-filter\" ng-if=\"$ctrl.state.isLoggedAdmin()\"> <option value=\"available\" translate=\"RESERVATIONS.CALENDAR.FILTER.AVAILABLE\"></option> <option value=\"all\" translate=\"RESERVATIONS.CALENDAR.FILTER.ALL\"></option> </ff-select> <ff-select flex=\"0 0 auto\" name=\"mode\" ff-model=\"$ctrl.$rcCalendar.mode\" class=\"rc-mode\"> <option value=\"day\" translate=\"RESERVATIONS.CALENDAR.MODE.DAY\"></option> <option value=\"week\" translate=\"RESERVATIONS.CALENDAR.MODE.WEEK\"></option> </ff-select> </div> </ff-col> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-calendar/toolbar/rc-toolbar.component.js":
/*!*********************************************************************!*\
  !*** ./shared/reservation-calendar/toolbar/rc-toolbar.component.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rc_toolbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rc-toolbar.scss */ "./shared/reservation-calendar/toolbar/rc-toolbar.scss");
/* harmony import */ var _rc_toolbar_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rc_toolbar_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rc_toolbar_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rc-toolbar.tpl.html */ "./shared/reservation-calendar/toolbar/rc-toolbar.tpl.html");
/* harmony import */ var _rc_toolbar_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rc_toolbar_tpl_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_reservation_form_rc_date_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/reservation-form/rc-date-selector.component */ "./shared/reservation-form/rc-date-selector.component.js");
/* harmony import */ var _rc_legend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rc-legend.component */ "./shared/reservation-calendar/toolbar/rc-legend.component.js");
/* harmony import */ var _rc_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rc-options.component */ "./shared/reservation-calendar/toolbar/rc-options.component.js");





/**
 * rcToolbar component - toolbar for DeskWorks reservation calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcToolbar', [shared_reservation_form_rc_date_selector_component__WEBPACK_IMPORTED_MODULE_2__["default"].name, _rc_legend_component__WEBPACK_IMPORTED_MODULE_3__["default"].name, _rc_options_component__WEBPACK_IMPORTED_MODULE_4__["default"].name]).component('rcToolbar', {
  template: _rc_toolbar_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
  controller: 'RcToolbarController',
  require: {
    $rcCalendar: '^rcCalendar'
  }
}).controller('RcToolbarController', function () {// const $ctrl = this;
}));

/***/ }),

/***/ "./shared/reservation-calendar/toolbar/rc-toolbar.scss":
/*!*************************************************************!*\
  !*** ./shared/reservation-calendar/toolbar/rc-toolbar.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-calendar/toolbar/rc-toolbar.tpl.html":
/*!*****************************************************************!*\
  !*** ./shared/reservation-calendar/toolbar/rc-toolbar.tpl.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<rc-date-selector mode=\"$ctrl.$rcCalendar.mode\" date=\"$ctrl.$rcCalendar.date\"></rc-date-selector> <rc-legend></rc-legend> <rc-options></rc-options> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=book-it-now~reservations~...js.map?_rev=1d23519d2e1cc042757e