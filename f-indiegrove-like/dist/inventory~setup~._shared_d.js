(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory~setup~._shared_d"],{

/***/ "./shared/drag-n-drop/dnd.service.js":
/*!*******************************************!*\
  !*** ./shared/drag-n-drop/dnd.service.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-drag-and-drop-lists */ "../node_modules/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js");
/* harmony import */ var angular_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _drag_n_drop_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-n-drop.scss */ "./shared/drag-n-drop/drag-n-drop.scss");
/* harmony import */ var _drag_n_drop_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drag_n_drop_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keese_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keese.service */ "./shared/drag-n-drop/keese.service.js");




/**
 * Drag'n'Drop helper service
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('dnd', ['dndLists', _keese_service__WEBPACK_IMPORTED_MODULE_3__["default"].name]).factory('dnd', ["keese", function (keese) {
  return {
    move: move
  };
  /**
   * Move item from srcList[srcIndex] to targetList[targetIndex], auto-generates new order. Returns moved item.
   */

  function move(srcList, srcIndex, targetList, targetIndex) {
    var item = srcList[srcIndex];
    if (targetList) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(targetList).call(targetList, targetIndex, 0, item); // copy item from source to target
    // remove source item, possibly correcting index. We must do this immediately, otherwise ng-repeat complains about duplicates

    if (srcList === targetList && targetIndex <= srcIndex) srcIndex++;

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(srcList).call(srcList, srcIndex, 1); // remove source item


    if (targetList) {
      var index = targetList.indexOf(item); // find new index of item

      item.order = keese.generate(targetList[index - 1] && targetList[index - 1].order, targetList[index + 1] && targetList[index + 1].order);
    }

    return item;
  }
}]));

/***/ }),

/***/ "./shared/drag-n-drop/drag-n-drop.scss":
/*!*********************************************!*\
  !*** ./shared/drag-n-drop/drag-n-drop.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/drag-n-drop/keese.service.js":
/*!*********************************************!*\
  !*** ./shared/drag-n-drop/keese.service.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Sort keys generator. Based on node-keese v1.1.1: https://github.com/thejoshwolfe/node-keese
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('keese', []).factory('keese', function () {
  var alphabet = "0123456789?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var radix = alphabet.length;
  var order_specifier = '~'; // bigger than any from the alphabet

  /**
   * Character to numerical value aka index of the character: "0": 0, "z": 63, etc.
   */

  var values = function () {
    var values = {};

    for (var i = 0; i < alphabet.length; i++) {
      values[alphabet[i]] = i;
    }

    return values;
  }();

  return {
    /**
     * Main exported function. Generates new sort key.
     * @param low - previous sort key or null/undefined
     * @param high - next sort key or null/undefined
     * @param count - if defined - the result is an Array of size count values
     * @returns {*} - single key or array of keys, depending on count
     */
    generate: function keese(low, high, count) {
      if (count) {
        return multi_keese(low, high, count);
      } else {
        return single_keese(low, high);
      }
    }
  };

  function single_keese(low, high) {
    if (!low) {
      if (!high) {
        return '1'; // return anything above 0
      } else {
        return average('0', high); // go smaller
      }
    } else {
      if (!high) {
        return increment(low); // go bigger
      } else {
        return average(low, high); // go in between
      }
    }
  }

  function multi_keese(low, high, count) {
    var result = new Array(count);

    if (count > 0) {
      if (!high) {
        for (var i = 0; i < count; i++) {
          // just allocate straight forward
          var value = keese(low, null);
          result[i] = value;
          low = value;
        }
      } else {
        recurse(low, high, 0, count); // binary tree descent
      }
    }

    return result;

    function recurse(low_value, high_value, low_index, high_index) {
      var mid_index = Math.floor((low_index + high_index) / 2);
      var mid_value = single_keese(low_value, high_value);
      result[mid_index] = mid_value;
      if (low_index < mid_index) recurse(low_value, mid_value, low_index, mid_index);
      if (mid_index + 1 < high_index) recurse(mid_value, high_value, mid_index + 1, high_index);
    }
  }

  function increment(value) {
    var n = parse(value);
    n.digits = n.digits.substr(0, n.order_length + 1); // drop the fraction

    return add(n, parse("1"));
  }

  function average(low, high) {
    if (low > high) {
      throw new Error('assertion failed: ' + _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(low) + " < " + _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(high));
    }

    var a = parse(low);
    var b = parse(high);
    pad_to_equal_order(a, b);
    var b_carry = 0;
    var max_digit_length = Math.max(a.digits.length, b.digits.length);

    for (var i = 0; i < max_digit_length || b_carry > 0; i++) {
      var a_value = values[a.digits[i]] || 0;
      var b_value = b_carry + (values[b.digits[i]] || 0);
      if (a_value === b_value) continue;

      if (a_value === b_value - 1) {
        b_carry = radix; // we need more digits, but remember that b is ahead

        continue;
      } // we have a distance of at least 2 between the values.
      // half the distance floored is sure to be a positive single digit.


      var half_distance_value = Math.floor((b_value - a_value) / 2);
      var half_distance_digits = '';

      for (var j = 0; j < i; j++) {
        half_distance_digits += '0';
      }

      half_distance_digits += alphabet[half_distance_value];
      var half_distance = parse(construct(a.order_length, half_distance_digits)); // truncate insignificant digits of a

      a.digits = a.digits.substr(0, i + 1);
      return add(a, half_distance);
    }

    throw new Error(); // unreachable
  }

  function add(a, b) {
    pad_to_equal_order(a, b);
    var result_digits = "";
    var order_length = a.order_length;
    var value = 0;

    for (var i = Math.max(a.digits.length, b.digits.length) - 1; i >= 0; i--) {
      value += values[a.digits[i]] || 0;
      value += values[b.digits[i]] || 0;
      result_digits = alphabet[value % radix] + result_digits;
      value = Math.floor(value / radix);
    } // overflow up to moar digits


    while (value > 0) {
      result_digits = alphabet[value % radix] + result_digits;
      value = Math.floor(value / radix);
      order_length++;
    }

    return construct(order_length, result_digits);
  }

  function parse(value) {
    var order_length = value.lastIndexOf(order_specifier) + 1;
    return {
      order_length: order_length,
      digits: value.substr(order_length)
    };
  }

  function construct(order_length, digits) {
    while (order_length > 0 && digits.charAt(0) == '0') {
      // strip unnecessary leading zeros
      digits = digits.substr(1);
      order_length--;
    }

    var result = "";

    for (var i = 0; i < order_length; i++) {
      result += order_specifier;
    }

    return result + digits;
  }

  function pad_to_equal_order(a, b) {
    pad_in_place(a, b.order_length);
    pad_in_place(b, a.order_length);
  }

  function pad_in_place(n, order_length) {
    while (n.order_length < order_length) {
      n.digits = "0" + n.digits;
      n.order_length++;
    }
  }
}));

/***/ }),

/***/ "./shared/reservation-rules/reservation-rules.component.js":
/*!*****************************************************************!*\
  !*** ./shared/reservation-rules/reservation-rules.component.js ***!
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reservation_rules_tpl_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reservation-rules.tpl.html */ "./shared/reservation-rules/reservation-rules.tpl.html");
/* harmony import */ var _reservation_rules_tpl_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reservation_rules_tpl_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reservation_rules_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservation-rules.scss */ "./shared/reservation-rules/reservation-rules.scss");
/* harmony import */ var _reservation_rules_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reservation_rules_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _rr_rule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rr-rule.component */ "./shared/reservation-rules/rr-rule.component.js");
/* harmony import */ var _rr_limit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rr-limit.component */ "./shared/reservation-rules/rr-limit.component.js");
/* harmony import */ var _rr_date_limit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rr-date-limit.component */ "./shared/reservation-rules/rr-date-limit.component.js");
/* harmony import */ var _rr_static_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rr-static.component */ "./shared/reservation-rules/rr-static.component.js");
/* harmony import */ var _rr_weekday_limit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rr-weekday-limit.component */ "./shared/reservation-rules/rr-weekday-limit.component.js");
/* harmony import */ var _rr_checklist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rr-checklist.component */ "./shared/reservation-rules/rr-checklist.component.js");
/* harmony import */ var shared_services_reservation_rules_opts_reservation_scale_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/services/reservation-rules/opts-reservation-scale.service */ "./shared/services/reservation-rules/opts-reservation-scale.service.js");
/* harmony import */ var shared_services_reservation_rules_opts_reservation_buffer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/services/reservation-rules/opts-reservation-buffer.service */ "./shared/services/reservation-rules/opts-reservation-buffer.service.js");














/**
 * reservationRules component - reservation rules widget for center / reservation category / reservation unit
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationRules', ['deskworks.reservationRules.service', 'deskworks.inventory.product.service', 'deskworks.reservationRules.rrRule', 'deskworks.reservationRules.rrLimit', 'deskworks.reservationRules.rrWeekdayLimit', 'deskworks.reservationRules.rrDateLimit', 'deskworks.reservationRules.rrStatic', 'deskworks.reservationRules.optsWhoCanReserve', 'deskworks.reservationRules.optsReservationLimitMin', 'deskworks.reservationRules.optsReservationLimitMax', 'deskworks.reservationRules.optsDaysInAdvance', 'deskworks.reservationRules.optsTimeInAdvance', shared_services_reservation_rules_opts_reservation_scale_service__WEBPACK_IMPORTED_MODULE_12__["default"].name, shared_services_reservation_rules_opts_reservation_buffer_service__WEBPACK_IMPORTED_MODULE_13__["default"].name, _rr_checklist_component__WEBPACK_IMPORTED_MODULE_11__["default"].name]).directive('reservationRules', function () {
  return {
    scope: true,
    template: _reservation_rules_tpl_html__WEBPACK_IMPORTED_MODULE_4___default.a,
    controller: 'ReservationRulesCtrl as $ctrl',
    bindToController: {
      centerId: '<',
      reservationUnitId: '<'
    }
  };
}).controller('ReservationRulesCtrl', ["$scope", "$q", "$filter", "$timeout", "$translate", "helper", "dwAlerts", "ReservationRules", "productService", "ReservationUnit", "optsWhoCanReserve", "optsReservationLimitMin", "optsReservationLimitMax", "optsDaysInAdvance", "optsTimeInAdvance", "optsReservationScale", "optsReservationBuffer", function ($scope, $q, $filter, $timeout, $translate, helper, dwAlerts, ReservationRules, productService, ReservationUnit, optsWhoCanReserve, optsReservationLimitMin, optsReservationLimitMax, optsDaysInAdvance, optsTimeInAdvance, optsReservationScale, optsReservationBuffer) {
  var $ctrl = this;
  $ctrl.conf = {
    whoCanReserve: {
      name: $translate.instant('RESERVATION_RULES.WHO_CAN_RESERVE'),
      opts: optsWhoCanReserve
    },
    scale: {
      name: $translate.instant('RESERVATION_RULES.RESERVATION_SCALE'),
      opts: optsReservationScale
    },
    buffer: {
      name: $translate.instant('RESERVATION_RULES.RESERVATION_BUFFER'),
      opts: optsReservationBuffer
    },
    fullTimeProduct: {
      name: $translate.instant('RESERVATION_RULES.FULL_TIME_PRODUCT')
    },
    // deferred opts
    attachedUser: {
      name: $translate.instant('RESERVATION_RULES.ATTACHED_USER')
    },
    // no opts
    limitMin: {
      name: $translate.instant('RESERVATION_RULES.MIN_LIMIT'),
      opts: optsReservationLimitMin
    },
    limitMax: {
      name: $translate.instant('RESERVATION_RULES.MAX_LIMIT'),
      opts: optsReservationLimitMax
    },
    daysInAdvance: {
      name: $translate.instant('RESERVATION_RULES.DAYS_IN_ADVANCE'),
      opts: optsDaysInAdvance
    },
    timeInAdvance: {
      name: $translate.instant('RESERVATION_RULES.TIME_IN_ADVANCE'),
      opts: optsTimeInAdvance
    },
    nestedUnits: {
      name: $translate.instant('RESERVATION_RULES.NESTED_UNITS')
    } // deferred opts

  };
  /**
   * Component $onInit
   */

  $ctrl.$onInit = function () {
    $ctrl.form = $scope.formReservationRules;
  };
  /**
   * Component $onChanges
   */


  $ctrl.$onChanges = function () {
    ReservationRules.query({
      centerId: $ctrl.centerId,
      reservationUnitId: $ctrl.reservationUnitId
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to load reservation rules.');
    }).then(function (result) {
      var _context, _context2, _context3;

      $ctrl.rules = result;
      $ctrl.whoCanReserve = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context = $ctrl.rules).call(_context, function (i) {
        return i.uid === 'whoCanReserve';
      });
      $ctrl.scale = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = $ctrl.rules).call(_context2, function (i) {
        return i.uid === 'scale';
      });
      $ctrl.buffer = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = $ctrl.rules).call(_context3, function (i) {
        return i.uid === 'buffer';
      });
    });

    if ($ctrl.reservationUnitId) {
      ReservationUnit.query($ctrl.centerId).catch(function (err) {
        return dwAlerts.error(err, 'Reservation Rules failed to query reservation units.');
      }).then(function (units) {
        var unit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(units).call(units, function (u) {
          return u.id === $ctrl.reservationUnitId;
        }) || {};
        $ctrl.fullTimeProduct = {
          uid: 'fullTimeProduct',
          type: 'value',
          value: unit.fullTimeProductId
        };
        $ctrl.attachedUser = {
          uid: 'attachedUser',
          type: 'static',
          value: unit.attachedUserName
        }; // $ctrl.conf.nestedUnits.opts = units.filter(u => u.reservationTypeId === unit.reservationTypeId && u.id !== unit.id);

        $ctrl.conf.nestedUnits.opts = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(units).call(units, function (u) {
          return u.whoCanReserve !== 'notAvailable' && u.id !== unit.id;
        });
      });
      productService.getMembershipProducts($ctrl.centerId).catch(function (err) {
        return dwAlerts.error(err, 'Reservation Rules failed to query membership products.');
      }).then(function (products) {
        angular.forEach(products, function (product) {
          product.name += ' (' + $filter('ncurrency')(product.price) + ')';
        });
        $ctrl.conf.fullTimeProduct.opts = products;
        $ctrl.conf.fullTimeProduct.opts.unshift({
          id: null,
          name: $translate.instant('GLOBAL.NONE')
        });
      });
    }
  };
  /**
   * Control roles visibility
   */


  $scope.$watch('$ctrl.whoCanReserve.value', function (val) {
    if (!val) return;
    ReservationRules.roles.forEach(function (role) {
      role.$visible = role.$isVisible(val);
    });
    $ctrl.hideRules = val === 'staffOnly' || val === 'notAvailable';
  });
  /**
   * Add date to Annual Holiday Calendar
   */

  $ctrl.addDate = function () {
    $ctrl.rules.push({
      type: 'date',
      member: {
        available: false,
        intervals: []
      },
      nonMember: {
        available: false,
        intervals: []
      }
    });
  };
  /**
   * Reset rules - copy from center defaults
   */


  $ctrl.resetRules = function () {
    if (!window.confirm($translate.instant('RESERVATION_RULES.ACTIVE.BTN_RESET.CONFIRM'))) return;
    return ReservationRules.query({
      centerId: $ctrl.centerId
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to load reservation rules defaults from center.');
    }).then(function (result) {
      return $ctrl.copyRules(result);
    });
  };
  /**
   * Copy values of all passed rules to $ctrl.rules and trigger auto-save
   */


  $ctrl.copyRules = function (rules) {
    var _context4;

    return $q.all(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(rules).call(rules, function (rule) {
      return rule.type === 'value' || rule.type === 'roles' || rule.type === 'weekday';
    })).call(_context4, function (src) {
      var dst = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.rules, {
        uid: src.uid
      });

      if (!dst) return;

      switch (src.type) {
        case 'value':
          dst.value = src.value;
          break;

        case 'roles':
          ReservationRules.roles.forEach(function (role) {
            dst[role.id] = src[role.id];
          });
          break;

        case 'weekday':
          ReservationRules.roles.forEach(function (role) {
            var _context5;

            dst[role.id].available = src[role.id].available;
            dst[role.id].intervals = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context5 = src[role.id].intervals).call(_context5, function (interval) {
              return {
                from: interval.from,
                to: interval.to
              };
            });
          });
      }

      return $timeout(function () {
        return dst.$as();
      }, 100);
    }));
  };
  /**
   * Save Full Time Product callback
   */


  $ctrl.saveFullTimeProduct = function () {
    return ReservationUnit.save($ctrl.centerId, {
      id: $ctrl.reservationUnitId,
      fullTimeProductId: $ctrl.fullTimeProduct.value && +$ctrl.fullTimeProduct.value || null
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save full time product.');
    });
  };
}]));

/***/ }),

/***/ "./shared/reservation-rules/reservation-rules.scss":
/*!*********************************************************!*\
  !*** ./shared/reservation-rules/reservation-rules.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reservation-rules/reservation-rules.tpl.html":
/*!*************************************************************!*\
  !*** ./shared/reservation-rules/reservation-rules.tpl.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"formReservationRules\" novalidate> <div class=\"gutter-v\"> <ff-panel> <ff-panel-header ng-if=\"$ctrl.reservationUnitId\"> <div class=\"ff-grid gutter-v-half gutter-h-half\"> <div flex=\"auto\"> <span translate=\"RESERVATION_RULES.ACTIVE.HEADER\"></span> <ff-hint><span translate=\"RESERVATION_RULES.ACTIVE.HINT\"></span></ff-hint> </div> <ff-btn flex=\"none\" sense=\"clone\" size=\"sm\" ff-click=\"$ctrl.resetRules()\" style=\"margin:-.5rem 0 .5rem 0\"> <span translate=\"RESERVATION_RULES.ACTIVE.BTN_RESET\"></span> </ff-btn> </div> </ff-panel-header> <ff-panel-header ng-if=\"!$ctrl.reservationUnitId\"> <span translate=\"RESERVATION_RULES.DEFAULT.HEADER\"></span> <ff-hint><span translate=\"RESERVATION_RULES.DEFAULT.HINT\"></span></ff-hint> </ff-panel-header> <ff-col ff-dim=\"!$ctrl.rules\" class=\"gutter-v\"> <ff-col> <div class=\"rr-container gutter-v-half\"> <rr-rule rule=\"$ctrl.whoCanReserve\" options=\"$ctrl.conf.whoCanReserve.opts\" flex=\"{sm: '1 1 137px', md: '0 0 180px'}\">{{$ctrl.conf.whoCanReserve.name}}</rr-rule> <rr-rule rule=\"$ctrl.fullTimeProduct\" options=\"$ctrl.conf.fullTimeProduct.opts\" ng-if=\"$ctrl.reservationUnitId && $ctrl.conf.fullTimeProduct.opts\" rule-save=\"$ctrl.saveFullTimeProduct()\" flex=\"{sm: '1 1 176px', md: '0 0 350px'}\">{{$ctrl.conf.fullTimeProduct.name}}</rr-rule> <rr-rule rule=\"$ctrl.attachedUser\" ng-if=\"$ctrl.reservationUnitId && $ctrl.whoCanReserve.value === 'notAvailable'\" flex=\"{sm: '1 1 313px', md: '0 0 250px'}\">{{$ctrl.conf.attachedUser.name}}</rr-rule> </div> </ff-col> <ff-col ng-if=\"$ctrl.rules\"> <div class=\"rr-container gutter-v-half\"> <rr-rule rule=\"$ctrl.scale\" options=\"$ctrl.conf.scale.opts\" flex=\"{sm: '1 1 176px', md: '0 0 200px'}\"> {{$ctrl.conf.scale.name}} <ff-hint><span translate=\"RESERVATION_RULES.RESERVATION_SCALE.HINT\"></span></ff-hint> </rr-rule> <rr-rule rule=\"$ctrl.buffer\" options=\"$ctrl.conf.buffer.opts\" flex=\"{sm: '1 1 176px', md: '0 0 200px'}\"> {{$ctrl.conf.buffer.name}} <ff-hint><span translate=\"RESERVATION_RULES.RESERVATION_BUFFER.HINT\"></span></ff-hint> </rr-rule> </div> </ff-col> <ff-col ng-if=\"!$ctrl.hideRules\"> <div class=\"rr-container gutter-v-half\"> <rr-rule rule=\"rule\" options=\"$ctrl.conf[rule.uid].opts\" ng-repeat=\"rule in $ctrl.rules | filter:{ type: 'roles' }\" flex=\"{sm: '0 0 50%', md: '0 0 200px'}\"> <span ng-bind-html=\"$ctrl.conf[rule.uid].name\"></span> </rr-rule> </div> </ff-col> <ff-col ng-if=\"!$ctrl.hideRules\"> <div class=\"rr-container gutter-v-half\"> <rr-rule rule=\"rule\" ng-repeat=\"rule in $ctrl.rules | filter:{ type: 'weekday' }\" flex=\"{sm: '0 0 50%', md: '0 0 200px'}\">{{rule.name.toUpperCase()}}</rr-rule> </div> </ff-col> <ff-col ng-if=\"!$ctrl.hideRules\"> <div class=\"rr-container gutter-v-half\"> <rr-rule rule=\"rule\" ng-repeat=\"rule in $ctrl.rules | filter:{ type: 'checklist' }\" options=\"$ctrl.conf[rule.uid].opts\" flex=\"auto\" class=\"animate-collapse\" ng-if=\"$ctrl.conf[rule.uid].opts.length\">{{$ctrl.conf[rule.uid].name}}</rr-rule> </div> </ff-col> </ff-col> </ff-panel> <ff-panel class=\"rr-calendar\" ng-if=\"!$ctrl.reservationUnitId\"> <ff-panel-header> <span translate=\"RESERVATION_RULES.ANNUAL.HEADER\"></span> <ff-hint><span translate=\"RESERVATION_RULES.ANNUAL.HINT\"></span></ff-hint> </ff-panel-header> <ff-col ff-dim=\"!$ctrl.rules\"> <div class=\"rr-container gutter-v-half\"> <rr-rule rule=\"rule\" ng-repeat=\"rule in $ctrl.rules | filter:{ type: 'date' }\" flex=\"{sm: '0 0 50%', md: '0 0 200px'}\"></rr-rule> </div> <ff-btn-group class=\"ff-section-buttons\"> <ff-btn sense=\"add\" size=\"sm\" ff-click=\"$ctrl.addDate()\"><span translate=\"RESERVATION_RULES.BTN_ADD_DATE\"></span></ff-btn> </ff-btn-group> </ff-col> </ff-panel> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-rules/rr-checklist.component.js":
/*!************************************************************!*\
  !*** ./shared/reservation-rules/rr-checklist.component.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rr_checklist_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rr-checklist.tpl.html */ "./shared/reservation-rules/rr-checklist.tpl.html");
/* harmony import */ var _rr_checklist_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rr_checklist_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rrChecklist component - checkbox list component for reservation rules
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationRules.rrChecklist', []).directive('rrChecklist', function () {
  return {
    scope: true,
    template: _rr_checklist_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: 'RrChecklistCtrl as $ctrl',
    bindToController: {
      rule: '<',
      role: '<',
      options: '<'
    }
  };
}).controller('RrChecklistCtrl', ["$scope", "$element", function ($scope, $element) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    return $element.addClass('ff-col');
  };
}]));

/***/ }),

/***/ "./shared/reservation-rules/rr-checklist.tpl.html":
/*!********************************************************!*\
  !*** ./shared/reservation-rules/rr-checklist.tpl.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"ff-grid gutter-h-half\" style=\"justify-content:flex-start\"> <label flex=\"none\" ng-repeat=\"opt in $ctrl.options\"> <ff-checkbox ff-model=\"$ctrl.rule.value[opt.id]\" ff-change=\"$ctrl.rule.$as()\">{{::opt.name}}</ff-checkbox> </label> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-rules/rr-date-limit.component.js":
/*!*************************************************************!*\
  !*** ./shared/reservation-rules/rr-date-limit.component.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rr_date_limit_tpl_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rr-date-limit.tpl.html */ "./shared/reservation-rules/rr-date-limit.tpl.html");
/* harmony import */ var _rr_date_limit_tpl_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rr_date_limit_tpl_html__WEBPACK_IMPORTED_MODULE_3__);




/**
 * rrDateLimit component - date intervals limit component for reservation rules / annual holiday calendar
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationRules.rrDateLimit', ['deskworks.reservationRules.service']).directive('rrDateLimit', function () {
  return {
    scope: true,
    require: ['rrDateLimit', '^^reservationRules'],
    template: _rr_date_limit_tpl_html__WEBPACK_IMPORTED_MODULE_3___default.a,
    controller: 'RrDateLimitCtrl as $ctrl',
    bindToController: {
      rule: '<',
      role: '<'
    },
    link: function link($scope, $element, $attrs, $controllers) {
      $controllers[0].rrCtrl = $controllers[1];
    }
  };
}).controller('RrDateLimitCtrl', ["$scope", "$element", "$timeout", "$translate", "helper", "ReservationRules", function ($scope, $element, $timeout, $translate, helper, ReservationRules) {
  'use strict';

  var $ctrl = this;
  $ctrl.options = [{
    id: true,
    name: $translate.instant('RESERVATION_RULES.AVAILABLE')
  }, {
    id: false,
    name: $translate.instant('RESERVATION_RULES.NOT_AVAILABLE')
  }];
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $element.addClass('ff-col');
    $scope.$watch('$ctrl.rrCtrl.rules', $ctrl.updateGhosts);
  };
  /**
   * $onChanges
   */
  // $ctrl.$onChanges = function(z) {
  //   // $ctrl.updateGhosts();
  // };

  /**
   * Add Interval
   */


  $ctrl.addInterval = function () {
    if ($ctrl.rule.$$autoSaving) return;
    if ($ctrl.rule[$ctrl.role].$ghosts) $ctrl.rule[$ctrl.role].$ghosts.pop();
    $timeout(function () {
      $ctrl.rule[$ctrl.role].intervals.push({
        from: null,
        to: null
      });
      $ctrl.updateGhosts();
    });
  };
  /**
   * Delete Interval
   */


  $ctrl.deleteInterval = function (interval) {
    var _context;

    if ($ctrl.rule.$$autoSaving) return;

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default()(_context = $ctrl.rule[$ctrl.role].intervals).call(_context, $ctrl.rule[$ctrl.role].intervals.indexOf(interval), 1);

    $timeout($ctrl.updateGhosts);
    return interval.id ? $ctrl.rule.$as() : null;
  };
  /**
   * Update ghost items to sync rrRule items height
   */


  $ctrl.updateGhosts = function () {
    var _context2;

    if (!$ctrl.rrCtrl) return;

    var group = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = $ctrl.rrCtrl.rules).call(_context2, function (rule) {
      return rule.type === 'date';
    });

    ReservationRules.roles.forEach(function (role) {
      var max = group.reduce(function (prev, curr) {
        return curr[role.id].available && curr[role.id].intervals.length > prev ? curr[role.id].intervals.length : prev;
      }, 0);
      group.forEach(function (rule) {
        rule[role.id].$ghosts = new Array(max - (rule[role.id].available ? rule[role.id].intervals.length : 0));
      });
    });
  };
}]));

/***/ }),

/***/ "./shared/reservation-rules/rr-date-limit.tpl.html":
/*!*********************************************************!*\
  !*** ./shared/reservation-rules/rr-date-limit.tpl.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-row> <ff-select ff-model=\"$ctrl.rule[$ctrl.role].available\" ff-options=\"opt.id as opt.name for opt in $ctrl.options\" ff-change=\"$ctrl.updateGhosts() + $ctrl.rule.$as()\"></ff-select> <ff-btn flex=\"none\" sense=\"add\" size=\"xs\" ng-class=\"{ invisible: !$ctrl.rule[$ctrl.role].available }\" title=\"{{'RESERVATION_RULES.BTN_ADD_INTERVAL.HINT' | translate}}\" ff-click=\"$ctrl.addInterval()\"></ff-btn> </ff-row> <ff-row ng-repeat=\"interval in $ctrl.rule[$ctrl.role].intervals\" ng-if=\"$ctrl.rule[$ctrl.role].available\"> <ff-time ff-model=\"interval.from\" ff-change=\"$ctrl.rule.$as()\" ff-required=\"true\" ff-time-order=\"{ early: interval.from, late: interval.to }\" ff-validate-alert=\"{ field: ('RESERVATION_RULES.TIME_FROM' | translate), late: ('RESERVATION_RULES.TIME_TO' | translate) }\" placeholder=\"09:00 AM\"></ff-time> <ff-time ff-model=\"interval.to\" ff-change=\"$ctrl.rule.$as()\" ff-required=\"true\" ff-time-order=\"{ early: interval.from, late: interval.to }\" ff-validate-alert=\"{ field: ('RESERVATION_RULES.TIME_TO' | translate), early: ('RESERVATION_RULES.TIME_FROM' | translate) }\" placeholder=\"05:00 PM\"></ff-time> <ff-btn flex=\"none\" sense=\"delete\" size=\"xs\" ff-click=\"$ctrl.deleteInterval(interval)\" title=\"{{'RESERVATION_RULES.BTN_DELETE_INTERVAL.HINT' | translate}}\"></ff-btn> </ff-row> <ff-row ng-repeat=\"item in $ctrl.rule[$ctrl.role].$ghosts track by $index\"> <ff-static></ff-static> </ff-row> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-rules/rr-limit.component.js":
/*!********************************************************!*\
  !*** ./shared/reservation-rules/rr-limit.component.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rr_limit_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rr-limit.tpl.html */ "./shared/reservation-rules/rr-limit.tpl.html");
/* harmony import */ var _rr_limit_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rr_limit_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rrLimit component - limit component for reservation rules
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationRules.rrLimit', []).directive('rrLimit', function () {
  return {
    scope: true,
    template: _rr_limit_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: 'RrLimitCtrl as $ctrl',
    bindToController: {
      rule: '<',
      role: '<',
      options: '<'
    }
  };
}).controller('RrLimitCtrl', ["$scope", "$element", function ($scope, $element) {
  'use strict';

  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    return $element.addClass('ff-col');
  }; // /**
  //  * $onChanges
  //  */
  // $ctrl.$onChanges = function() {
  // };

}]));

/***/ }),

/***/ "./shared/reservation-rules/rr-limit.tpl.html":
/*!****************************************************!*\
  !*** ./shared/reservation-rules/rr-limit.tpl.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div> <ff-select ff-model=\"$ctrl.rule[$ctrl.role]\" ff-options=\"opt.id as opt.name for opt in $ctrl.options\" ng-if=\"$ctrl.rule.type === 'roles'\" ff-change=\"$ctrl.rule.$as()\"></ff-select> <ff-select ff-model=\"$ctrl.rule.value\" ff-options=\"opt.id as opt.name for opt in $ctrl.options\" ng-if=\"$ctrl.rule.type === 'value'\" ff-change=\"$ctrl.rule.$as()\"></ff-select> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-rules/rr-rule.component.js":
/*!*******************************************************!*\
  !*** ./shared/reservation-rules/rr-rule.component.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rr_rule_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rr-rule.tpl.html */ "./shared/reservation-rules/rr-rule.tpl.html");
/* harmony import */ var _rr_rule_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rr_rule_tpl_html__WEBPACK_IMPORTED_MODULE_1__);


/**
 * rrRule component - rule component for reservation rules
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationRules.rrRule', ['autoSave', 'deskworks.reservationRules.service']).directive('rrRule', function () {
  return {
    scope: true,
    require: {
      rrCtrl: '^^reservationRules'
    },
    transclude: true,
    template: _rr_rule_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
    controller: 'RrRuleCtrl as $ctrl',
    bindToController: {
      rule: '<',
      options: '<',
      ruleSave: '&?'
    }
  };
}).controller('RrRuleCtrl', ["$scope", "$element", "$timeout", "helper", "dwAlerts", "ReservationRules", "autoSave", function ($scope, $element, $timeout, helper, dwAlerts, ReservationRules, autoSave) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $element.addClass('ff-col');
    $ctrl.roles = ReservationRules.roles;
  };
  /**
   * $onChanges
   */


  $ctrl.$onChanges = function () {
    if (!$ctrl.rule) return;
    $timeout(function () {
      // timeout to complete linking and make $scope.rrForm available
      var saveFunc = $ctrl.ruleSave || function () {
        return ReservationRules.save({
          centerId: $ctrl.rrCtrl.centerId,
          reservationUnitId: $ctrl.rrCtrl.reservationUnitId
        }, this).catch(function (err) {
          return dwAlerts.error(err, 'Failed to save rule.');
        });
      };

      $ctrl.rule.$as = autoSave.wrap(saveFunc, $scope.rrForm);
    });
  };
  /**
   * Delete rule
   */


  $ctrl.deleteRule = function () {
    return ($ctrl.rule.id ? ReservationRules.delete({
      centerId: $ctrl.rrCtrl.centerId,
      ruleId: $ctrl.rule.id
    }) : $timeout()).then(function () {
      var _context;

      return _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.rrCtrl.rules).call(_context, $ctrl.rrCtrl.rules.indexOf($ctrl.rule), 1);
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete rule');
    });
  };
}]));

/***/ }),

/***/ "./shared/reservation-rules/rr-rule.tpl.html":
/*!***************************************************!*\
  !*** ./shared/reservation-rules/rr-rule.tpl.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ng-form name=\"rrForm\"> <ff-header ff-spin=\"$ctrl.rule.$$autoSaving\" class=\"ff-relative ff-spin-sm\"> <ff-header class=\"rr-role\"></ff-header> <cell ng-transclude flex=\"auto\"> <ff-row> <ff-col> <ff-date ff-model=\"$ctrl.rule.date\" ff-required=\"true\" ff-validate-alert=\"Date\" ff-change=\"$ctrl.rule.$as()\"></ff-date> <ff-text ff-model=\"$ctrl.rule.name\" ff-change=\"$ctrl.rule.$as()\"></ff-text> </ff-col> <ff-btn flex=\"none\" sense=\"delete\" size=\"xs\" ff-click=\"$ctrl.deleteRule()\" title=\"{{'RESERVATION_RULES.BTN_DELETE_DATE' | translate}}\"></ff-btn> </ff-row> </cell> </ff-header> <ff-row ng-repeat=\"role in $ctrl.roles\" ng-if=\"(role.$visible || $ctrl.rule.type === 'date') && $ctrl.rule.type !== 'value' && $ctrl.rule.type !== 'static' && $ctrl.rule.type !== 'checklist'\"> <ff-label class=\"rr-role\">{{role.name}}</ff-label> <rr-limit rule=\"$ctrl.rule\" role=\"role.id\" options=\"$ctrl.options\" ng-if=\"$ctrl.rule.type === 'roles'\"></rr-limit> <rr-weekday-limit rule=\"$ctrl.rule\" role=\"role.id\" ng-if=\"$ctrl.rule.type === 'weekday'\"></rr-weekday-limit> <rr-date-limit rule=\"$ctrl.rule\" role=\"role.id\" ng-if=\"$ctrl.rule.type === 'date'\"></rr-date-limit> </ff-row> <ff-row ng-if=\"$ctrl.rule.type === 'value'\"> <rr-limit rule=\"$ctrl.rule\" options=\"$ctrl.options\"></rr-limit> </ff-row> <ff-row ng-if=\"$ctrl.rule.type === 'static'\"> <rr-static rule=\"$ctrl.rule\"></rr-static> </ff-row> <ff-row ng-if=\"$ctrl.rule.type === 'checklist'\"> <rr-checklist rule=\"$ctrl.rule\" options=\"$ctrl.options\"></rr-checklist> </ff-row> </ng-form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-rules/rr-static.component.js":
/*!*********************************************************!*\
  !*** ./shared/reservation-rules/rr-static.component.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rr_static_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rr-static.tpl.html */ "./shared/reservation-rules/rr-static.tpl.html");
/* harmony import */ var _rr_static_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rr_static_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/**
 * rrStatic component - static (read-only) component for reservation rules
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationRules.rrStatic', []).directive('rrStatic', function () {
  return {
    scope: true,
    require: ['rrWeekdayLimit', '^^reservationRules'],
    template: _rr_static_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    controller: 'RrStaticCtrl as $ctrl',
    bindToController: {
      rule: '<'
    }
  };
}).controller('RrStaticCtrl', ["$scope", "$element", "helper", function ($scope, $element, helper) {
  'use strict';

  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    return $element.addClass('ff-col');
  }; // /**
  //  * $onChanges
  //  */
  // $ctrl.$onChanges = function() {
  // };

}]));

/***/ }),

/***/ "./shared/reservation-rules/rr-static.tpl.html":
/*!*****************************************************!*\
  !*** ./shared/reservation-rules/rr-static.tpl.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-static ff-bind=\"$ctrl.rule.value | nd\"></ff-static> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-rules/rr-weekday-limit.component.js":
/*!****************************************************************!*\
  !*** ./shared/reservation-rules/rr-weekday-limit.component.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _rr_weekday_limit_tpl_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rr-weekday-limit.tpl.html */ "./shared/reservation-rules/rr-weekday-limit.tpl.html");
/* harmony import */ var _rr_weekday_limit_tpl_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_rr_weekday_limit_tpl_html__WEBPACK_IMPORTED_MODULE_5__);






/**
 * rrWeekdayLimit component - weekday intervals limit component for reservation rules
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationRules.rrWeekdayLimit', ['deskworks.reservationRules.service']).directive('rrWeekdayLimit', function () {
  return {
    scope: true,
    require: ['rrWeekdayLimit', '^^reservationRules'],
    template: _rr_weekday_limit_tpl_html__WEBPACK_IMPORTED_MODULE_5___default.a,
    controller: 'RrWeekdayLimitCtrl as $ctrl',
    bindToController: {
      rule: '<',
      role: '<'
    },
    link: function link($scope, $element, $attrs, $controllers) {
      $controllers[0].rrCtrl = $controllers[1];
      $controllers[0].onInit();
    }
  };
}).controller('RrWeekdayLimitCtrl', ["$scope", "$element", "$timeout", "$translate", "$locale", "helper", "ReservationRules", function ($scope, $element, $timeout, $translate, $locale, helper, ReservationRules) {
  'use strict';

  var $ctrl = this;
  $ctrl.weekdayIds = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  $ctrl.options = [{
    id: true,
    name: $translate.instant('RESERVATION_RULES.AVAILABLE')
  }, {
    id: false,
    name: $translate.instant('RESERVATION_RULES.NOT_AVAILABLE')
  }];
  /**
   * On change rule availability handler. If day of week selected, clones itself from rule of that day of week.
   */

  $ctrl.onChangeAvailable = function () {
    if (angular.isString($ctrl.rule[$ctrl.role].available)) {
      var _context;

      var wd = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.rrCtrl.rules, {
        uid: $ctrl.rule[$ctrl.role].available
      });

      $ctrl.rule[$ctrl.role].intervals = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = wd[$ctrl.role].intervals).call(_context, function (interval) {
        return {
          from: interval.from.clone(),
          to: interval.to.clone()
        };
      });
      $ctrl.rule[$ctrl.role].available = wd[$ctrl.role].available;
    }

    $ctrl.updateGhosts();
    $ctrl.rule.$as();
  };
  /**
   * $onInit
   */


  $ctrl.onInit = function () {
    $element.addClass('ff-col');
    $ctrl.weekdayIds.forEach(function (weekday) {
      if (weekday !== $ctrl.rule.uid) {
        // skip ourselves
        $ctrl.options.push({
          id: weekday,
          name: $translate.instant('RESERVATION_RULES.COPY_FROM', {
            weekday: _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.rrCtrl.rules, {
              uid: weekday
            }).name.toUpperCase()
          })
        });
      }
    });
    /**
     * Watch for intervals and update ghosts
     */

    $scope.$watchCollection('$ctrl.rule[$ctrl.role].intervals', function () {
      return $ctrl.updateGhosts();
    });
  };
  /**
   * $onChanges
   */
  // $ctrl.$onChanges = function() {
  // };

  /**
   * Add Interval
   */


  $ctrl.addInterval = function () {
    if ($ctrl.rule.$$autoSaving) return;
    $ctrl.rule[$ctrl.role].$ghosts.pop();
    $timeout(function () {
      return $ctrl.rule[$ctrl.role].intervals.push({
        from: null,
        to: null
      });
    });
  };
  /**
   * Delete Interval
   */


  $ctrl.deleteInterval = function (interval) {
    var _context2;

    if ($ctrl.rule.$$autoSaving) return;

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = $ctrl.rule[$ctrl.role].intervals).call(_context2, $ctrl.rule[$ctrl.role].intervals.indexOf(interval), 1);

    return interval.id ? $ctrl.rule.$as() : null;
  };
  /**
   * Update ghost items to sync rrRule items height
   */


  $ctrl.updateGhosts = function () {
    var _context3;

    var group = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(_context3 = $ctrl.rrCtrl.rules).call(_context3, function (rule) {
      return rule.type === 'weekday';
    });

    ReservationRules.roles.forEach(function (role) {
      var max = group.reduce(function (prev, curr) {
        return curr[role.id].available && curr[role.id].intervals.length > prev ? curr[role.id].intervals.length : prev;
      }, 0);
      group.forEach(function (rule) {
        rule[role.id].$ghosts = new Array(max - (rule[role.id].available ? rule[role.id].intervals.length : 0));
      });
    });
  };
}]));

/***/ }),

/***/ "./shared/reservation-rules/rr-weekday-limit.tpl.html":
/*!************************************************************!*\
  !*** ./shared/reservation-rules/rr-weekday-limit.tpl.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-row> <ff-select ff-model=\"$ctrl.rule[$ctrl.role].available\" ff-options=\"opt.id as opt.name for opt in $ctrl.options\" ff-change=\"$ctrl.onChangeAvailable()\"></ff-select> <ff-btn flex=\"none\" sense=\"add\" size=\"xs\" ng-class=\"{ invisible: !$ctrl.rule[$ctrl.role].available }\" title=\"{{'RESERVATION_RULES.BTN_ADD_INTERVAL.HINT' | translate}}\" ff-click=\"$ctrl.addInterval()\"></ff-btn> </ff-row> <ff-row ng-repeat=\"interval in $ctrl.rule[$ctrl.role].intervals track by $index\" ng-if=\"$ctrl.rule[$ctrl.role].available\"> <ff-time ff-model=\"interval.from\" ff-change=\"$ctrl.rule.$as()\" ff-required=\"true\" ff-time-order=\"{ early: interval.from, late: interval.to }\" ff-validate-alert=\"{ field: ('RESERVATION_RULES.TIME_FROM' | translate), late: ('RESERVATION_RULES.TIME_TO' | translate) }\" placeholder=\"09:00 AM\"></ff-time> <ff-time ff-model=\"interval.to\" ff-change=\"$ctrl.rule.$as()\" ff-required=\"true\" ff-time-order=\"{ early: interval.from, late: interval.to }\" ff-validate-alert=\"{ field: ('RESERVATION_RULES.TIME_TO' | translate), early: ('RESERVATION_RULES.TIME_FROM' | translate) }\" placeholder=\"05:00 PM\"></ff-time> <ff-btn flex=\"none\" sense=\"delete\" size=\"xs\" ff-click=\"$ctrl.deleteInterval(interval)\" title=\"{{'RESERVATION_RULES.BTN_DELETE_INTERVAL.HINT' | translate}}\"></ff-btn> </ff-row> <ff-row ng-repeat=\"ghost in $ctrl.rule[$ctrl.role].$ghosts track by $index\"> <ff-static></ff-static> </ff-row> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/services/reservation-rules/opts-reservation-buffer.service.js":
/*!******************************************************************************!*\
  !*** ./shared/services/reservation-rules/opts-reservation-buffer.service.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Reservation Rules / Reservation Buffer
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsReservationBuffer', []).factory('optsReservationBuffer', ["$rootScope", "$translate", "$filter", function ($rootScope, $translate, $filter) {
  var opts = [{
    id: 0,
    _name: 'GLOBAL.NONE'
  }, // minutes
  {
    id: 15
  }, {
    id: 30
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = opt._name ? $translate.instant(opt._name) : $filter('minutes')(opt.id);
    });
  }

  return opts;
}]));

/***/ }),

/***/ "./shared/services/reservation-rules/opts-reservation-scale.service.js":
/*!*****************************************************************************!*\
  !*** ./shared/services/reservation-rules/opts-reservation-scale.service.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Reservation Rules / Reservation Scale
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsReservationScale', []).factory('optsReservationScale', ["$rootScope", "$filter", function ($rootScope, $filter) {
  var opts = [{
    id: 15
  }, // minutes
  {
    id: 30
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $filter('minutes')(opt.id);
    });
  }

  return opts;
}]));

/***/ })

}]);
//# sourceMappingURL=inventory~setup~._shared_d.js.map?_rev=45440fc55409e60239bd