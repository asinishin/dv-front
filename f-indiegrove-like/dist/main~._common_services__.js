(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main~._common_services__"],{

/***/ "./common/services/_utility/app-dim.service.js":
/*!*****************************************************!*\
  !*** ./common/services/_utility/app-dim.service.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.appDim', []).factory('appDim', ["$rootScope", function ($rootScope) {
  return function (dim) {
    $rootScope.appDim = dim;
  };
}]));

/***/ }),

/***/ "./common/services/_utility/auto-cache-factory.service.js":
/*!****************************************************************!*\
  !*** ./common/services/_utility/auto-cache-factory.service.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Automatic cache factory provider. Provides interface the same as standard $cacheFactory, but supports auto expiration.
 * Cache can be disabled globally through autoCacheFactoryProvider.disableCache
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('autoCacheFactory', []).provider('autoCacheFactory', function () {
  var provider = this;
  provider.disableCache = false;

  provider.$get = function () {
    var caches = {};

    function autoCacheFactory(cacheId, expiryTime) {
      var size = 0,
          data = {};
      var stats = {
        id: cacheId,
        expiryTime: expiryTime || 0
      };

      if (!(cacheId in caches)) {
        caches[cacheId] = {
          /**
           * Put data to cache
           */
          put: function put(key, value) {
            if (angular.isUndefined(value) || provider.disableCache || !stats.expiryTime) return;
            if (!(key in data)) size++;
            data[key] = {
              value: value,
              time: Date.now()
            };
            return value;
          },

          /**
           * Get data from cache
           */
          get: function get(key) {
            if (key in data && Date.now() - data[key].time > stats.expiryTime * 1000) this.remove(key);
            if (key in data) return data[key].value;
          },

          /**
           * Remove data from cache
           */
          remove: function remove(key) {
            if (key in data) size--;
            delete data[key];
          },

          /**
           * Remove all data from cache
           */
          removeAll: function removeAll() {
            data = {};
            size = 0;
          },

          /**
           * Destroy cache
           */
          destroy: function destroy() {
            data = null;
            stats = null;
            delete caches[cacheId];
          },

          /**
           * Get cache info
           */
          info: function info() {
            return angular.extend({}, stats, {
              size: size
            });
          }
        };
      }

      return caches[cacheId];
    }
    /**
     * Get info about all caches
     */


    autoCacheFactory.info = function () {
      var info = {};
      angular.forEach(caches, function (cache, cacheId) {
        info[cacheId] = cache.info();
      });
      return info;
    };
    /**
     * Get access to cache object by cacheId
     */


    autoCacheFactory.get = function (cacheId) {
      return caches[cacheId];
    };
    /**
     * Empty all caches
     */


    autoCacheFactory.emptyAll = function () {
      angular.forEach(caches, function (cache) {
        cache.removeAll();
      });
    };

    return autoCacheFactory;
  };

  return provider;
}));

/***/ }),

/***/ "./common/services/_utility/auto-save.service.js":
/*!*******************************************************!*\
  !*** ./common/services/_utility/auto-save.service.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * autoSave - service for simple auto-saving, provides wrap function which debounces passed save callback
 * and prevents simultaneous saving. Also, checks for passed ngForm (optional) validity.
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('autoSave', ['debounce']).factory('autoSave', ["$q", "debounce", function ($q, debounce) {
  return {
    wrap: wrap
  };

  function wrap(saveMethod, globalForm) {
    var debounceTime = 1000;
    return debounce(function (field) {
      return save(field || this);
    }, debounceTime);

    function save(field) {
      var form = globalForm || field.$$form;
      if (form && form.$invalid) return;
      return $q.when(field.$$autoSaving).catch(function () {}) // reject -> resolve
      .then(function () {
        field.$$autoSaving = $q.when(saveMethod.call(field, field));
        field.$$autoSaving.then(function () {
          if (form) form.$setPristine();
        }).finally(function () {
          delete field.$$autoSaving;
        });
        return field.$$autoSaving;
      });
    }
  }
}]));

/***/ }),

/***/ "./common/services/_utility/date-filters.js":
/*!**************************************************!*\
  !*** ./common/services/_utility/date-filters.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
var _context, _context2;


/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = angular.module('dateFilters', ['deskworks.helper'])
/**
 * Standard date filter decorator for moment dates with timezones support
 */
.config(["$provide", function ($provide) {
  $provide.decorator('dateFilter', ["$delegate", function dateFilterDecorator($delegate) {
    return function (date, format, timezone) {
      if (date instanceof moment) return $delegate(date.toDate(), format, date.format('ZZ'));
      return $delegate(date, format, timezone);
    };
  }]);
}])
/**
 * Converts numeric time to date (12 -> 12:00, 22.5 -> 22:30)
 */
).call(_context2, 'numTimeToDate', function () {
  'ngInject';

  return function (input) {
    return moment().hour(Math.floor(+input)).minute(+input % 1 ? 30 : 0).second(0).millisecond(0);
  };
})
/**
 * Converts date string to Date object
 */
).call(_context, 'toDate', ["helper", function (helper) {
  'ngInject';

  return function (input) {
    if (!helper.isDateString(input)) return input; // skip non-date strings
    // 16:45:00 or 16:45

    if (input.length <= 8) return moment.tz(input, 'HH:mm:ss', moment.defaultZone.name); // 2015-02-24 and more

    return moment.tz(input, moment.defaultZone.name);
  };
}]));

/***/ }),

/***/ "./common/services/_utility/dates-deserializer.service.js":
/*!****************************************************************!*\
  !*** ./common/services/_utility/dates-deserializer.service.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);




/**
 * JSON deserializer with deserialization of ISO date strings to Date objects.
 * Should be used as $resource.method.transformResponse handler, e.g.:
 *
 * query: {
 *   method: 'GET',
 *   isArray: true,
 *   transformResponse: [datesDeserializer('lastPollDate')]
 * }
 *
 * Accepts predicate - one or an array of keys in response object/array which contain dates.
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('datesDeserializer', []).factory('datesDeserializer', ["$filter", function datesDeserializer($filter) {
  var toDate = $filter('toDate');
  return function (predicate, offset) {
    return function (data) {
      if (!data) return data;
      data = angular.fromJson(data);
      angular.forEach(angular.isArray(data) ? data : [data], function (item) {
        if (!item) return;
        angular.forEach(angular.isArray(predicate) ? predicate : [predicate], function (key) {
          var path = key.split('.');
          /**
           * Recursively process each path segment, iterate through each intermediate node (array), find the last node and convert it to Date.
           */

          recursion(0, item);

          function recursion(level, data) {
            if (!data) return;

            if (level < path.length - 1) {
              // intermediate segment
              if (angular.isArray(data[path[level]])) {
                data[path[level]].forEach(function (item) {
                  return recursion(level + 1, item);
                });
              } // // Uncomment for processing objects in addition to arrays
              // else if (angular.isObject(data[path[level]])) {
              //   Object.keys(data[path[level]]).forEach(key => recursion(level + 1, data[path[level]][key]));
              // }

            } else if (level < path.length) {
              // last segment, convert date
              data[path[level]] = toDate(data[path[level]]);
            }
          }
        });
      });
      return data;
    };
  };
}]));

/***/ }),

/***/ "./common/services/_utility/debounce.service.js":
/*!******************************************************!*\
  !*** ./common/services/_utility/debounce.service.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 */
angular.module('debounce', []).factory('debounce', ["$timeout", function ($timeout) {
  'use strict';

  return function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) return func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      $timeout.cancel(timeout);
      timeout = $timeout(later, wait);
      if (callNow) return func.apply(context, args);
      return timeout;
    };
  };
}]);

/***/ }),

/***/ "./common/services/_utility/deserialize-numbers.service.js":
/*!*****************************************************************!*\
  !*** ./common/services/_utility/deserialize-numbers.service.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);




/**
 * JSON deserializer with deserialization of string numbers.
 * Should be used as $resource.method.transformResponse handler, e.g.:
 *
 * query: {
 *   method: 'GET',
 *   isArray: true,
 *   transformResponse: [angular.fromJson, numbersDeserializer]
 * }
 *
 * Accepts predicate - one or an array of keys in response object/array which contain numbers.
 */
angular.module('deserializeNumbers', ['deskworks.helper']).factory('deserializeNumbers', ["helper", function deserializeNumbers(helper) {
  'use strict';

  return function (predicate) {
    return function (data) {
      if (!data) return data;
      angular.forEach(angular.isArray(data) ? data : [data], function (item) {
        if (!item) return;
        angular.forEach(angular.isArray(predicate) ? predicate : [predicate], function (key) {
          var path = key.split('.');
          /**
           * Recursively process each path segment, iterate through each intermediate node (array), find the last node and convert it to number.
           */

          recursion(0, item);

          function recursion(level, data) {
            if (!data) return;

            if (level < path.length - 1) {
              // intermediate segment
              if (angular.isArray(data[path[level]])) {
                data[path[level]].forEach(function (item) {
                  recursion(level + 1, item);
                });
              } // // Uncomment for processing objects in addition to arrays
              // else if(angular.isObject(data[path[level]])) {
              //   Object.keys(data[path[level]]).forEach(function(key) {
              //     recursion(level + 1, data[path[level]][key]);
              //   });
              // }

            } else if (level < path.length) {
              // last segment, convert number
              if (data[path[level]] && !isNaN(+data[path[level]])) {
                data[path[level]] = +data[path[level]];
              }
            }
          }
        });
      }); // return angular.fromJson(data);

      return data;
    };
  };
}]);

/***/ }),

/***/ "./common/services/_utility/helper.service.js":
/*!****************************************************!*\
  !*** ./common/services/_utility/helper.service.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ "../node_modules/@babel/runtime-corejs3/helpers/typeof.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/trim */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_12__);


var _context, _context2, _context3, _context4, _context5, _context6, _context7, _context8, _context9, _context10, _context11, _context12, _context13, _context14, _context15, _context16, _context17, _context18, _context19;














/**
 * Various helpers.
 */
/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context6 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context7 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context8 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context9 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context10 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context11 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context12 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context13 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context14 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context15 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context16 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context17 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context18 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(_context19 = angular.module('deskworks.helper', []).factory('helper', ["$window", "$timeout", "$compile", "$templateCache", "$filter", function ($window, $timeout, $compile, $templateCache, $filter) {
  return {
    /**
     * Searches array of objects for object[key] == value
     * @param array - where to search
     * @param key - key to search
     * @param value - value to compare
     * @returns {*} - object found or null
     */
    findByKeyValue: function findByKeyValue(array, key, value) {
      if (angular.isArray(array) && key) {
        for (var i = 0; i < array.length; i++) {
          if (array[i] && array[i][key] == value) return array[i];
        }
      }
    },

    /**
     * Searches array of objects for object[key] == value
     * @param array - where to search
     * @param key - key to search
     * @param value - value to compare
     * @returns {number} - index of object found or -1
     */
    findIndexByKeyValue: function findIndexByKeyValue(array, key, value) {
      if (angular.isArray(array) && key) {
        for (var i = 0; i < array.length; i++) {
          if (array[i] && array[i][key] == value) return i;
        }
      }

      return -1;
    },

    /**
     * Improved version of findIndexByKeyValue
     * @param array
     * @param predicate - object { property1: 'value1', property2: 'value2' }
     * @returns {*}
     */
    findIndex: function findIndex(array, predicate) {
      if ((predicate || predicate === 0) && !angular.isObject(predicate)) predicate = {
        id: predicate
      };
      if (!angular.isArray(array) || !predicate) return;

      var _loop = function _loop(i) {
        /* jshint ignore:start */
        var match = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(predicate).every(function (key) {
          return array[i] && array[i][key] == predicate[key];
        });
        /* jshint ignore:end */


        if (match) return {
          v: i
        };
      };

      for (var i = 0; i < array.length; i++) {
        var _ret = _loop(i);

        if (_babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_ret) === "object") return _ret.v;
      }

      return -1;
    },

    /**
     * Improved version of findByKeyValue
     * @param array
     * @param predicate - object { property1: 'value1', property2: 'value2' }
     * @returns {*}
     */
    find: function find(array, predicate) {
      var _context20;

      var idx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_10___default()(_context20 = this).call(_context20, array, predicate);

      if (idx >= 0) return array[idx];
    },

    /**
     * Tests if dateString matches short/full date pattern
     * @param dateString
     * @returns {boolean}
     */
    isDateString: function isDateString(dateString) {
      return angular.isString(dateString) && !!(dateString.match(/^\d\d\d\d-\d\d-\d\d(?:T\d\d:\d\d:\d\d(?:(?:(?:-|\+)\d\d:?\d\d)|(?:\.\d\d\d\d?)?Z)?)?$/i) || // !!(dateString.match(/^\d\d\d\d-\d\d-\d\d(?:T\d\d:\d\d:\d\d(?:(?:-|\+)\d\d:?\d\d)?)?$/i) ||
      dateString.match(/^\d\d:\d\d(?::?\d\d)?$/i));
    },

    /**
     * Checks if we are running on a mobile platform
     * @returns {boolean} - true if on mobile platform, false otherwise
     */
    isMobile: function isMobile() {
      if ($window.navigator.userAgent && ($window.navigator.userAgent.match(/Android/i) || $window.navigator.userAgent.match(/webOS/i) || $window.navigator.userAgent.match(/iPhone/i) || $window.navigator.userAgent.match(/iPad/i) || $window.navigator.userAgent.match(/iPod/i) || $window.navigator.userAgent.match(/BlackBerry/i) || $window.navigator.userAgent.match(/Windows Phone/i))) {
        return true;
      }
    },
    isIE: function isIE() {
      return /msie\s|trident\/|edge\//i.test(window.navigator.userAgent) && !!(document.uniqueID || window.MSInputMethodContext);
    },

    /**
     * Interpolates route path template with params
     */
    interpolateRoute: function interpolateRoute(string, params) {
      var result = [];
      angular.forEach((string || '').split(':'), function (segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
        }
      });
      return result.join('');
    },

    /**
     * Unique string generator
     */
    unique: function unique() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    },

    /**
     * UID generator
     */
    uid: function uid() {
      return 'dwuid' + Date.now() + Math.floor(Math.random() * Date.now() + Math.random() * Date.now());
    },

    /**
     * Checks if string starts from dwuid prefix
     */
    isUid: function isUid(str) {
      return !!String(str).match(/^dwuid\d+/);
    },

    /**
     * Strips dwuid prefixed strings, converts them to undefined.
     * Useful in services when need to hide auto-generated data.
     */
    stripUid: function stripUid(str) {
      if (!String(str).match(/^dwuid\d+/)) return str;
    },

    /**
     * Finds first invalid control in given container and focuses it.
     */
    pointFirstInvalid: function pointFirstInvalid(selector) {
      var invalid = document.querySelector(selector + ' .ng-invalid:not(ng-form):not(form):not([ng-form]):not([disabled])');

      if (invalid) {
        $timeout(function () {
          invalid.focus();
          invalid.blur();
          invalid.focus();
        });
      }

      return invalid;
    },

    /**
     * Focus element with given selector
     */
    focus: function focus(selector) {
      $timeout(function () {
        var element = document.querySelector(selector);
        if (element) element.focus();
      });
    },

    /**
     * Converts to string and trims, not fails on null/undefined
     */
    trim: function trim(val) {
      var _context21;

      return angular.isUndefined(val) || val === null ? '' : _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_11___default()(_context21 = String(val)).call(_context21);
    },

    /**
     * Soft search in array-of-objects. Auto-trims and lower-cases before comparison
     */
    indexSoft: function indexSoft(arr, keys, val) {
      if (angular.isArray(arr) && angular.isArray(keys) && angular.isDefined(val)) {
        var _context22;

        val = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_11___default()(_context22 = String(val)).call(_context22).toLowerCase();

        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < keys.length; j++) {
            var _context23;

            if (_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_11___default()(_context23 = String(arr[i][keys[j]])).call(_context23).toLowerCase() === val) {
              return i;
            }
          }
        }
      }

      return -1;
    },

    /**
     * Soft search in array-of-objects. Auto-trims and lower-cases before comparison
     */
    searchSoft: function searchSoft(arr, keys, val) {
      if (angular.isArray(arr) && angular.isArray(keys) && angular.isDefined(val)) {
        var _context24;

        val = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_11___default()(_context24 = String(val)).call(_context24).toLowerCase();

        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < keys.length; j++) {
            var _context25;

            if (_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_11___default()(_context25 = String(arr[i][keys[j]])).call(_context25).toLowerCase() === val) {
              return arr[i];
            }
          }
        }
      }
    },

    /**
     * Scroll window to specified selector
     */
    scrollTo: function scrollTo(selector) {
      var el = document.querySelector(selector);
      if (el) $window.scrollTo(0, $window.pageYOffset + el.getBoundingClientRect().top);
    },

    /**
     * Purify object from hidden $ and $$ properties, optionally exclude keys of specified array/object.
     * Optionally, convert to dashCase (ngClick -> ng-click).
     */
    purify: function purify(obj, exclude, dashCase) {
      var helper = this;
      var result = {};
      exclude = angular.isArray(exclude) ? exclude : _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(exclude || {});

      _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_9___default()(obj).forEach(function (key) {
        if (key[0] !== '$' && !exclude.some(function (exKey) {
          return key === exKey;
        })) {
          result[dashCase ? helper.toDashCase(key) : key] = obj[key];
        }
      });

      return result;
    },

    /**
     * Pick properties from object into a new object
     */
    pick: function pick(object, paths) {
      return paths.reduce(function (obj, path) {
        return obj[path] = object[path], obj;
      }, {});
    },

    /**
     * Transcludes element with recompiling template and transcluding attributes
     */
    transcludeElement: function transcludeElement($scope, $element, $attrs, templateUrl, attrsExclude) {
      var helper = this;
      return $element.after(helper.transcludeAttrs($compile($templateCache.get(templateUrl))($scope), $attrs, attrsExclude));
    },

    /**
     * Transcludes attributes to element
     */
    transcludeAttrs: function transcludeAttrs(element, attrs, attrsExclude) {
      var helper = this;
      return element.attr(helper.purify(attrs, attrsExclude, true));
    },

    /**
     * Convert camelCase to dash-case (ngRepeat -> ng-repeat)
     */
    toDashCase: function toDashCase(str) {
      return str.replace(/[A-Z]/g, function (letter, pos) {
        return (pos ? '-' : '') + letter.toLowerCase();
      });
    },

    /**
     * Joins array of strings with delimiter, but skips undefined/null/empty strings
     */
    join: function join(array, delimiter) {
      return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_8___default()(array).call(array, function (val) {
        return val;
      }).join(delimiter);
    },

    /**
     * Converts color from rgb(1, 1, 1) to #010101
     */
    rgb2hex: function rgb2hex(rgb) {
      if (!rgb || /^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

      function hex(x) {
        var _context26;

        return _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_12___default()(_context26 = '0' + parseInt(x).toString(16)).call(_context26, -2);
      }

      return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    },

    /**
     * Converts #rgb color string to array: '#0a0b0c' -> [10, 11, 12]
     */
    hex2rgbArr: function hex2rgbArr(rgb) {
      if (typeof rgb === 'string' && /^#[0-9A-Fa-f]{6}$/.test(rgb)) {
        var hex = parseInt(rgb.substr(1), 16);
        return [hex >> 16 & 255, hex >> 8 & 255, hex & 255];
      }

      return rgb;
    },

    /**
     * Find parent element by predicateFn, search up to 5 parent nodes
     */
    findParentElement: function findParentElement(element, predicateFn) {
      element = angular.element(element).parent();

      for (var i = 0; i < 5 && element.length; i++) {
        if (predicateFn(element)) return element;
        element = element.parent();
      }
    },

    /**
     * Converts value to number or 0
     */
    toNumber: function toNumber(val) {
      val = +val;
      return !isNaN(val) && isFinite(val) ? val : 0;
    },

    /**
     * Rounds number to specified number of fraction digits (default: 2)
     */
    round: function round(val, fractions) {
      var _context27;

      if (isNaN(+val)) return val;
      var factor = +_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_12___default()(_context27 = '1000000').call(_context27, 0, (fractions || 2) + 1);
      return Math.round(val * factor) / factor;
    }
  };
}])
/**
 * Yesno filter converts boolean true/false to human-friendly Yes/No
 */
).call(_context19, 'yesno', ["$translate", function ($translate) {
  'ngInject';

  return function (text, length, end) {
    return $translate.instant(text ? 'GLOBAL.YES' : 'GLOBAL.NO');
  };
}])
/**
 * Pre filter replaces all whitespaces to &nbsp;
 */
).call(_context18, 'pre', function () {
  'ngInject';

  return function (text, length, end) {
    return angular.isString(text) ? text.replace(/\s/g, '&nbsp;') : '';
  };
})
/**
 * Negative currency filter. Wraps standard currency filter, but fixes processing negative values.
 */
).call(_context17, 'ncurrency', ["$filter", function ($filter) {
  'ngInject';

  return $filter('currency'); // since Angular 1.4 standard currency filter is ok with negative amounts
}])
/**
 * Wrapper for standard date filter. Has no parameters to standardize date format globally.
 */
).call(_context16, 'price', ["$filter", function ($filter) {
  'ngInject';

  return function (text, length, end) {
    return angular.isNumber(text) || angular.isString(text) ? $filter('number')(text, 2).replace(',', '') : '0.00';
  };
}])
/**
 * Converts null to dash
 */
).call(_context15, 'nd', ["$filter", function ($filter) {
  'ngInject';

  return function (text, length, end) {
    return text || '-';
  };
}])
/**
 * Padds number with zeros to fixed width string
 */
).call(_context14, 'zpad', function () {
  'ngInject';

  return function (input, n) {
    var _context28;

    input = '' + (input || ''); // Force to string conversion

    if (input.length >= n) return input;
    var zeros = '00000000';
    return _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_12___default()(_context28 = zeros + input).call(_context28, -1 * n);
  };
})
/**
 * Months filter - adds month/months with translation
 */
).call(_context13, 'months', ["$translate", function ($translate) {
  'ngInject';

  return function (text, onlyUnit) {
    var result = $translate.instant('GLOBAL.MONTHS_FILTER', {
      monthsCount: text
    }, 'messageformat');
    if (onlyUnit) return result.replace(/\d+\s*/, '');
    return result;
  };
}])
/**
 * Weeks filter - adds week/weeks with translation
 */
).call(_context12, 'weeks', ["$translate", function ($translate) {
  'ngInject';

  return function (text, onlyUnit) {
    var result = $translate.instant('GLOBAL.WEEKS_FILTER', {
      weeksCount: text
    }, 'messageformat');
    if (onlyUnit) return result.replace(/\d+\s*/, '');
    return result;
  };
}])
/**
 * Days filter - adds day/days with translation
 */
).call(_context11, 'days', ["$translate", function ($translate) {
  'ngInject';

  return function (text, onlyUnit) {
    var result = $translate.instant('GLOBAL.DAYS_FILTER', {
      daysCount: text
    }, 'messageformat');
    if (onlyUnit) return result.replace(/\d+\s*/, '');
    return result;
  };
}])
/**
 * Hours filter - adds hour/hours with translation
 */
).call(_context10, 'hours', ["$translate", function ($translate) {
  'ngInject';

  return function (text, onlyUnit) {
    var result = $translate.instant('GLOBAL.HOURS_FILTER', {
      hoursCount: text
    }, 'messageformat');
    if (onlyUnit) return result.replace(/\d+\s*/, '');
    return result;
  };
}])
/**
 * Minutes filter - adds minute/minutes with translation
 */
).call(_context9, 'minutes', ["$translate", function ($translate) {
  'ngInject';

  return function (text, onlyUnit) {
    var result = $translate.instant('GLOBAL.MINUTES_FILTER', {
      minCount: text
    }, 'messageformat');
    if (onlyUnit) return result.replace(/\d+\s*/, '');
    return result;
  };
}])
/**
 * Seconds filter - adds second/seconds with translation
 */
).call(_context8, 'seconds', ["$translate", function ($translate) {
  'ngInject';

  return function (text, onlyUnit) {
    var result = $translate.instant('GLOBAL.SECONDS_FILTER', {
      secCount: text
    }, 'messageformat');
    if (onlyUnit) return result.replace(/\d+\s*/, '');
    return result;
  };
}])
/**
 * Passes filter - adds pass/passes with translation
 */
).call(_context7, 'passes', ["$translate", function ($translate) {
  'ngInject';

  return function (text, onlyUnit) {
    var result = $translate.instant('GLOBAL.PASSES_FILTER', {
      passCount: text
    }, 'messageformat');
    if (onlyUnit) return result.replace(/\d+\s*/, '');
    return result;
  };
}])
/**
 * Hours/minutes duration filter - stringify number of ms into HHh MMm
 */
).call(_context6, 'hoursMinutes', ["$filter", "helper", function ($filter, helper) {
  'ngInject';

  return function (ms) {
    if (!angular.isNumber(ms)) return ms;
    var h = Math.floor(ms / 3600000);
    var m = Math.round((ms / 3600000 - h) * 60);
    return helper.join([h ? h + $filter('hours')(h, true)[0] : null, $filter('zpad')(m, 2) + $filter('minutes')(m, true)[0]], ' ');
  };
}])
/**
 * Highlights substring in a string with <strong>
 */
).call(_context5, 'highlight', function () {
  'ngInject';

  return function (input, sub) {
    if (!input || !sub || input.length === 0 || sub.length === 0) return input;
    input = String(input);
    var index = input.toLowerCase().indexOf(sub.toLowerCase());

    if (index >= 0) {
      return [_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_12___default()(input).call(input, 0, index), '<strong>', _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_12___default()(input).call(input, index, index + sub.length), '</strong>', _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_12___default()(input).call(input, index + sub.length)].join('');
    }

    return input;
  };
})
/**
 * Checks if param is an array, returns true/false
 */
).call(_context4, 'isArray', function () {
  'ngInject';

  return function (input, sub) {
    return angular.isArray(input);
  };
})
/**
 * Checks if param is a string, returns true/false
 */
).call(_context3, 'isString', function () {
  'ngInject';

  return function (input, sub) {
    return angular.isString(input);
  };
})
/**
 * Join array to string with delimiters filter
 */
).call(_context2, 'join', ["helper", function (helper) {
  'ngInject';

  return function (array, delimiter) {
    return helper.join(array, delimiter);
  };
}])
/**
 * Rounds number to specified number of fraction digits (default: 2)
 */
).call(_context, 'round', ["helper", function (helper) {
  'ngInject';

  return helper.round;
}]));

/***/ }),

/***/ "./common/services/_utility/is-multi-site.service.js":
/*!***********************************************************!*\
  !*** ./common/services/_utility/is-multi-site.service.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);





angular.module('deskworks.isMultiSite', ['deskworks.state']).factory('isMultiSite', ["$rootScope", "state", function ($rootScope, state) {
  'use strict';

  $rootScope.$watch(function () {
    return window.cordova;
  }, flush);
  $rootScope.$watch(function () {
    return state.getLoggedUserId();
  }, function (newVal, oldVal) {
    if (!newVal && oldVal) {
      // just logged out
      setDwSiteCookie(null);
    }
  });
  $rootScope.$on('$routeChangeSuccess', function () {
    if (window.cordova && state.getLoggedUserId()) {
      // store DwSiteCookie for cordova with authorized users only
      setDwSiteCookie(location.href);
    }
  });

  function setDwSiteCookie() {
    var _context, _context2;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var url = value || '';
    var expDate = new Date();
    expDate.setTime(expDate.getTime() + 30 * 24 * 3600000);
    var expires = value ? expDate.toGMTString() : 'Thu, 01 Jan 1970 00:00:01 GMT';

    var domain = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(_context = window.location.hostname.toLowerCase().split('.')).call(_context, -2).join('.');

    document.cookie = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = "DwSiteCookie=".concat(url, "; expires=")).call(_context2, expires, "; domain=.satellitedeskworks.com; path=/");

    if (domain.indexOf('.satellitedeskworks.com') < 0) {
      var _context3, _context4;

      // if tenant has custom domain, duplicate for that domain
      document.cookie = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = "DwSiteCookie=".concat(url, "; expires=")).call(_context4, expires, "; domain=")).call(_context3, domain, "; path=/");
    }

    flush();
  }

  function flush() {
    // flush cookies in CookieManager to not miss cookies on Android
    if (!window.cordova || !window.cordova.plugins || !window.cordova.plugins.CookieManagementPlugin) return;
    window.cordova.plugins.CookieManagementPlugin.flush();
    console.log('DEBUG: flush cookies');
  }

  return function isMultiSite() {
    return !!window.cordova && !window.cordova.tenantLock;
  };
}]);

/***/ }),

/***/ "./common/services/_utility/nats.service.js":
/*!**************************************************!*\
  !*** ./common/services/_utility/nats.service.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Update $locale settings according to passed settings
 */
angular.module('NATS', []).factory('NATS', ["$rootScope", "$window", "deskworksConfig", "state", function ($rootScope, $window, deskworksConfig, state) {
  'use strict';

  if (!$window.NATS) throw new Error('Missing websocket-nats dependency.');
  return angular.extend({}, $window.NATS, {
    connect: connect
  });

  function connect(url) {
    url = url || deskworksConfig.getWsUrl();

    if (!url) {
      var _context, _context2;

      var match = deskworksConfig.getApiOrigin().match(/^(.*:)\/\/([A-Za-z0-9\-\.]+)(:[0-9]+)?(.*)$/i);
      if (match && match[2]) url = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = "".concat(match[1].replace('http', 'ws'), "://")).call(_context2, match[2])).call(_context, match[3] || '', "/nats");
    }

    if (!url) throw new Error('NATS.connect: missing url');
    var nats = $window.NATS.connect(url);
    nats.publish = wrapPublish(nats.publish);
    nats.subscribe = wrapSubscribe(nats.subscribe);
    nats.request = wrapRequest(nats.request);
    return nats;
  }

  function wrapPublish(publish) {
    return function (subject, msg, opt_reply, opt_callback) {
      if (opt_reply || opt_callback) console.warn('we have opt_reply and opt_callback unimplemented in nats.publish');
      subject = interpolate(subject);
      if (angular.isObject(msg) || angular.isArray(msg)) msg = angular.toJson(msg);
      return publish.call(this, subject, msg);
    };
  }

  function wrapSubscribe(subscribe) {
    return function (subject, opts, callback) {
      var cb = angular.isFunction(opts) ? opts : callback;
      subject = interpolate(subject);

      if (cb) {
        var cbOrig = cb;

        cb = function cb(msg, reply, subject) {
          // wrap callback for $rootScope.$apply and JSON deserialization
          return $rootScope.$apply(function () {
            return cbOrig.call(null, msg && angular.fromJson(msg), reply, subject);
          });
        };
      }

      return subscribe.call(this, subject, angular.isFunction(opts) ? cb : opts, angular.isFunction(callback) ? cb : callback);
    };
  }

  function wrapRequest(request) {
    return function (subject, opt_msg, opt_options, callback) {
      console.warn('we have nats.request unimplemented');
      return request.call(this, subject, opt_msg, opt_options, callback);
    };
  }

  function interpolate(subject) {
    return subject && subject.replace(/:siteId/, deskworksConfig.getSiteId()).replace(/:centerId/, state.getCurrentCenterId());
  }
}]);

/***/ }),

/***/ "./common/services/_utility/rc-helper.service.js":
/*!*******************************************************!*\
  !*** ./common/services/_utility/rc-helper.service.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Reservation Calendar helper service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.rcHelper', []).factory('rcHelper', ["$filter", function ($filter) {
  'use strict';

  return {
    /**
     * Calculate week start from specified date
     */
    weekStart: function weekStart(date) {
      return (moment.isMoment(date) ? date.clone() : moment()).startOf('week');
    },

    /**
    * Calculate week end from specified date
    */
    weekEnd: function weekEnd(date) {
      return (moment.isMoment(date) ? date.clone() : moment()).endOf('week');
    },

    /**
     * Floor date to threshold in minutes (e.g. 2016-07-02T14:23:00 / threshold=30 -> 2016-07-02T14:00:00)
     */
    floorDate: function floorDate(date, threshold) {
      date.minutes(Math.floor(date.minutes() / threshold) * threshold, 0, 0);
      return date;
    },

    /**
     * Stringify date to reservation calendar format
     */
    dateToStr: function dateToStr(date) {
      return $filter('date')(date, 'yyyy-MM-ddTHH:mm:00Z');
    },

    /**
     * Check if from1/to1 frame intersects with from2/to2 frame
     */
    checkIntersection: function checkIntersection(from1, to1, from2, to2) {
      return from1 <= to2 && from1 >= from2 || to1 <= to2 && to1 >= from2 || from1 <= from2 && to1 >= to2;
    }
  };
}]));

/***/ }),

/***/ "./common/services/_utility/resolve-gtm.service.js":
/*!*********************************************************!*\
  !*** ./common/services/_utility/resolve-gtm.service.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Google Tag Manager initialization
 */
angular.module('resolveGtm', []).factory('resolveGtm', ["dwAlerts", "setupService", function (dwAlerts, setupService) {
  'use strict';

  var gtmContainerId;
  return function () {
    return setupService.getSetupSettings().catch(function (err) {
      return dwAlerts.error(err, 'Failed to get setup settings.');
    }).then(function (settings) {
      if (settings.gtmContainerId && settings.gtmContainerId !== gtmContainerId) {
        gtmContainerId = settings.gtmContainerId;

        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
          var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', gtmContainerId);
      }
    });
  };
}]);

/***/ }),

/***/ "./common/services/_utility/resolve-timezone.service.js":
/*!**************************************************************!*\
  !*** ./common/services/_utility/resolve-timezone.service.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (angular.module('resolveTimezone', []).factory('resolveTimezone', ["$rootScope", "$q", "$route", "$location", "dwAlerts", "helper", "setupService", "centerService", function ($rootScope, $q, $route, $location, dwAlerts, helper, setupService, centerService) {
  var promise;
  $rootScope.$on('CHANGE-CENTER', function () {
    if (!$route.current.reloadOnSearch) resolveTimezone();
  });
  return resolveTimezone;

  function resolveTimezone() {
    if (promise) return promise;
    promise = $q.all({
      timezones: queryTimezones(),
      centers: queryCenters()
    }).then(function (result) {
      if (!result.centers.length) return;
      var centerId = $route.current.params.centerId === 'new' ? null : +$route.current.params.centerId;
      centerId = centerId || $location.search().center && +$location.search().center || result.centers[0].id;
      var centerTimezone = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, result.centers, centerId) || result.centers[0]).timezone;

      var timezone = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, result.timezones, centerTimezone);

      if (timezone) moment.tz.setDefault(timezone.tz.split('|')[0]);
    }).finally(function () {
      promise = null;
    });
    return promise;
  }

  function queryTimezones() {
    return setupService.queryTimezones().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query timezones.');
    }).then(function (result) {
      if (moment.tz.names().length < result.length) moment.tz.add(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(result).call(result, function (zone) {
        return zone.tz;
      }));
      return result;
    });
  }

  function queryCenters() {
    return centerService.getCenters().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query centers.');
    });
  }
}]));

/***/ }),

/***/ "./common/services/_utility/route-helper.service.js":
/*!**********************************************************!*\
  !*** ./common/services/_utility/route-helper.service.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Provides special promises to be used in route.resolve only.
 * routePromises.auth - redirects to sing-in if not authenticated
 * routePromises.selectUser - redirects to select user if not selected
 */
angular.module('deskworks.routeHelper', ['deskworks.state', 'session']).service('routeHelper', ["dwAlerts", "$q", "$timeout", "session", "state", function (dwAlerts, $q, $timeout, session, state) {
  'use strict';

  var authPromise;
  /**
   * Returns authentication promise, redirects to sign-in if not authenticated.
   * @param signInUrl - optional custom sign-in URL, used instead of default '/sign-in'
   * @returns {Promise} - should be used in route.resolve
   */

  this.auth = function (signInUrl) {
    if (signInUrl === null) {
      return (authPromise || session.wait()).then(function () {
        if (session.isAnonymous()) throw null;
        return session.user;
      });
    }

    if (authPromise) return authPromise;
    authPromise = session.wait().then(function () {
      if (session.isAnonymous()) {
        // Don't set redirect if custom sign-in is used (see Member Sign Up and Simple Reservation with Non-Member Sign Up)
        if (!signInUrl) state.setParam('redirect', state.getPath());
        state.setPath(signInUrl || '/sign-in', true);
        throw null;
      }
    }).then(function () {
      return state.getCentersPromise();
    }) // wait for center auto-selection
    .finally(function () {
      authPromise = null;
    });
    return authPromise;
  };
  /**
   * Returns select current user promise, redirects to user-search if not selected
   * @returns {Promise} - should be used in route.resolve
   */


  this.selectUser = function () {
    if (state.isUserSelected()) {
      return $q.when();
    } else {
      if (state.getPath() !== '/user-search') {
        state.setParam('redirect', state.getPath());
        state.setPath('/user-search');
      }

      return $q.reject();
    }
  };
}]);

/***/ }),

/***/ "./common/services/_utility/security-DEPRECATED.service.js":
/*!*****************************************************************!*\
  !*** ./common/services/_utility/security-DEPRECATED.service.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('security', ['deskworks.config']).factory('security', ["$http", "$q", "deskworksConfig", function ($http, $q, deskworksConfig) {
  var requestCurrentUserPromise; // The public API of the service

  var service = {
    /**
     * Attempt to authenticate a user by the given email and password
     */
    login: function login(user, pass, rememberMe) {
      requestCurrentUserPromise = $http.post(deskworksConfig.getApiAbsUrl('/sessions'), {
        login: user,
        password: pass,
        rememberMe: rememberMe
      });
      requestCurrentUserPromise.then(function (response) {
        service.currentUser = response.data.user;
      });
      return requestCurrentUserPromise;
    },

    /**
     * Logout the current user
     */
    logout: function logout() {
      return $http.delete(deskworksConfig.getApiAbsUrl('/sessions/123')).then(function () {
        requestCurrentUserPromise = null;
        service.currentUser = null;
      });
    },

    /**
     * Ask the backend to see if a user is already authenticated - this may be from a previous session.
     */
    requestCurrentUser: function requestCurrentUser() {
      // Prevent multiple requests
      if (requestCurrentUserPromise) {
        return requestCurrentUserPromise;
      }

      if (service.isAuthenticated()) {
        requestCurrentUserPromise = $q.when(service.currentUser);
      } else {
        requestCurrentUserPromise = $http.get(deskworksConfig.getApiAbsUrl('/sessions/123')).then(function (response) {
          if (angular.isDefined(response.data.success) && !response.data.success) {
            return $q.reject();
          } else {
            service.currentUser = response.data.user;
            return $q.when(service.currentUser);
          }
        });
      }

      return requestCurrentUserPromise;
    },
    // Information about the current user
    currentUser: null,

    /**
     * Is the current user authenticated?
     */
    isAuthenticated: function isAuthenticated() {
      return !!service.currentUser;
    },

    /**
     * Is the current user an administrator?
     */
    isAdmin: function isAdmin() {
      return !!(service.currentUser && service.currentUser.admin);
    }
  };
  return service;
}]);

/***/ }),

/***/ "./common/services/_utility/set-locale.service.js":
/*!********************************************************!*\
  !*** ./common/services/_utility/set-locale.service.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Update $locale settings according to passed settings
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('setLocale', ['tmh.dynamicLocale']).factory('setLocale', ["$locale", "$rootScope", "tmhDynamicLocale", "dwAlerts", "helper", function ($locale, $rootScope, tmhDynamicLocale, dwAlerts, helper) {
  return function (settings) {
    settings = settings || {};
    settings.locale = settings.locale || 'en-us';
    $rootScope.currentLocale = settings.locale; // for <html lang="{{currentLocale}}">

    return tmhDynamicLocale.set(settings.locale).catch(function (err) {
      return dwAlerts.error(err, 'Failed to set ' + settings.locale + ' locale.');
    }).then(function () {
      var dtf = $locale.DATETIME_FORMATS;
      var nf = $locale.NUMBER_FORMATS;
      $locale.timeFormat = settings.timeFormat;
      dtf.shortTime = $locale.timeFormat === 24 ? 'HH:mm' : 'hh:mm a';
      dtf.mediumDate = dtf.mediumDate.replace(/ '\u0433'.$/, '');
      dtf.weekDate = dtf.fullDate.replace(/ '\u0433'.$/, '').replace('EEEE', 'EEE').replace('MMMM', 'MMM');
      dtf.iso = 'yyyy-MM-ddTHH:mm:ssZ';
      nf.DECIMAL_SEP = '.';
      nf.GROUP_SEP = ','; // set moment locale for correct first-day-of-week

      moment.updateLocale($locale.id, {
        week: {
          dow: dtf.FIRSTDAYOFWEEK ? 0 : 1
        }
      });
      moment.locale($locale.id);
      $rootScope.$emit('$setLocaleSuccess');
      return $locale;
    });
  };
}]));

/***/ }),

/***/ "./common/services/_utility/set-translations.service.js":
/*!**************************************************************!*\
  !*** ./common/services/_utility/set-translations.service.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Loads translations for given module and locale
 */
angular.module('setTranslations', ['pascalprecht.translate']).factory('setTranslations', ["$translatePartialLoader", "$translate", "$rootScope", function ($translatePartialLoader, $translate, $rootScope) {
  'use strict';

  return function (translations, locale) {
    $translatePartialLoader.addPart('_global');
    translations.forEach(function (part) {
      $translatePartialLoader.addPart(part);
    });
    return $translate.use(locale.split('-')[0]).then(function () {
      return $translate.refresh();
    }).then(function () {
      $rootScope.$emit('$setTranslationsSuccess');
    });
  };
}])
/**
 * $translatePartialLoader error handler - receives each translation partial loading error
 */
.factory('$translateErrorHandler', ["$q", "dwAlerts", function ($q, dwAlerts) {
  return function (part, lang, response) {
    if (lang !== 'en') return $q.when(); // skip error for non-English language

    return dwAlerts.error('Failed to load ' + part + '-' + lang + ' translation.').catch(angular.noop); // don't stop on translation loading errors
  };
}]);

/***/ }),

/***/ "./common/services/_utility/state.service.js":
/*!***************************************************!*\
  !*** ./common/services/_utility/state.service.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);




angular.module('deskworks.state', ['ngRoute', 'session', 'deskworks.center.service', 'deskworks.userProfile.service', 'deskworks.helper', 'autoCacheFactory']).factory('state', ["$rootScope", "$location", "$q", "$route", "$timeout", "$window", "session", "centerService", "userProfileService", "helper", "autoCacheFactory", "resolveTimezone", function ($rootScope, $location, $q, $route, $timeout, $window, session, centerService, userProfileService, helper, autoCacheFactory, resolveTimezone) {
  'use strict';

  var currentUser;
  var centers = [];
  var centersPromise; // for chaining routeHelper.auth with centers auto-selection

  var pageTitle = ''; // At startup, check if we already authenticated and emit LOGIN

  session.wait().then(function () {
    if (!session.isAnonymous()) {
      $rootScope.$emit('LOGIN');
    }
  });
  var state = {
    /**
     * Login with username and password
     */
    login: function login(username, password, rememberMe) {
      return session.login(username, password, rememberMe).then(function () {
        $rootScope.$emit('LOGIN');
        return session.user;
      });
    },

    /**
     * Logout current user
     */
    logout: function logout(opts) {
      return session.logout().then(function () {
        $rootScope.$emit('LOGOUT', opts);
      });
    },

    /**
     * If user is defined in location.search, returns this currentUserId.
     * Otherwise returns loggedUserId.
     */
    getCurrentUserId: function getCurrentUserId() {
      if (angular.isDefined($location.search().user)) return +$location.search().user;
      return session.user && session.user.id;
    },

    /**
     * Set currentUserId.
     * @param id
     */
    setCurrentUserId: function setCurrentUserId(id) {
      $location.search('user', id || null);
    },

    /**
     * Get currentUser.
     */
    getCurrentUser: function getCurrentUser() {
      return currentUser || session.user;
    },

    /**
     * Set currentUser.
     * @param user
     */
    setCurrentUser: function setCurrentUser(user) {
      currentUser = user;
      this.setCurrentUserId((user || {}).id);
    },

    /**
     * Get loggedUserId.
     */
    getLoggedUserId: function getLoggedUserId() {
      return session.user && session.user.id;
    },

    /**
     * Get loggedUser.
     */
    getLoggedUser: function getLoggedUser() {
      return session.user;
    },

    /**
     * Set centerId and centerName for currently logged user. Used only in member self-registration on New Membership step
     */
    setLoggedUserCenter: function setLoggedUserCenter(id, name) {
      session.user.centerId = id;
      session.user.centerName = name;
    },

    /**
     * Check if loggedUser is admin.
     * @returns {*|boolean}
     */
    isLoggedAdmin: session.isAdmin,

    /**
     * Check if loggedUser is member.
     * @returns {*|boolean}
     */
    isLoggedMember: function isLoggedMember() {
      return session.isRole('member');
    },

    /**
     * Check if loggedUser is nonMember.
     * @returns {*|boolean}
     */
    isLoggedNonMember: function isLoggedNonMember() {
      return session.isRole('nonMember');
    },

    /**
     * Check if loggedUser is role.
     * @returns {*|boolean}
     */
    isLoggedRole: function isLoggedRole(role) {
      return session.isRole(role);
    },

    /**
     * Check if currentUser selected
     * @returns {*|boolean}
     */
    isUserSelected: function isUserSelected() {
      return angular.isDefined($location.search().user) || session.user && !this.isLoggedAdmin();
    },

    /**
     * Checks if co-member switched to master profile
     */
    isMasterProfile: function isMasterProfile() {
      return !this.isLoggedAdmin() && state.getLoggedUserId() && this.getLoggedUserId() != this.getCurrentUserId(); // important != comparison as getCurrentUserId() can return string
    },
    getCurrentCenterId: function getCurrentCenterId() {
      var center = $location.search().center;
      return angular.isDefined(center) && center !== null ? +center : undefined;
    },
    setCurrentCenterId: function setCurrentCenterId(id) {
      $location.search('center', id ? +id : null);
      $rootScope.$emit('CHANGE-CENTER');
    },
    getUserCenters: function getUserCenters() {
      var self = this;
      return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(centers).call(centers, function (center) {
        return self.isLoggedAdmin() || center.reservationUnitsCount > 0;
      });
    },
    currentCenterId: function currentCenterId(id) {
      // Getter/Setter format for bind to ng-model in Center Selector
      if (angular.isDefined(id)) {
        this.setCurrentCenterId(+id);
      }

      return this.getCurrentCenterId();
    },
    getCurrentCenter: function getCurrentCenter() {
      return helper.findByKeyValue(centers, 'id', this.getCurrentCenterId());
    },
    setCurrentCenter: function setCurrentCenter(center) {
      if (center) {
        this.setCurrentCenterId(center.id);
      }
    },
    currentCenter: function currentCenter(center) {
      // Getter/Setter format for bind to ng-model in Center Selector
      if (angular.isDefined(center)) {
        this.setCurrentCenter(center);
      }

      return this.getCurrentCenter();
    },
    getParam: function getParam(name) {
      return $location.search()[name];
    },
    setParam: function setParam(name, val) {
      return $location.search(name, angular.isDefined(val) ? val : null);
    },
    resetParams: function resetParams(params) {
      var user = $location.search().user;
      var center = $location.search().center;
      $location.$$search = angular.isDefined(params) ? params : {};

      if (angular.isDefined(user)) {
        $location.search('user', user);
      }

      if (angular.isDefined(center)) {
        $location.search('center', center);
      }

      return this;
    },
    getPath: function getPath() {
      return $location.path();
    },
    setPath: function setPath(path, replace) {
      if (replace) {
        $location.replace();
      }

      $location.path(path);
      return $timeout(15000); // promise for button spins
    },
    back: function back() {
      $window.history.back();
      return $timeout(15000); // promise for button spins
    },
    getPageTitle: function getPageTitle() {
      return pageTitle;
    },
    setPageTitle: function setPageTitle(title) {
      pageTitle = title;
      return title;
    },
    replace: function replace() {
      $location.replace();
      return this;
    },
    getCentersPromise: function getCentersPromise() {
      return centersPromise; // for chaining routeHelper.auth with centers auto-selection
    },
    // Prohibits transition to specified controllers, used to prohibit Back button
    prohibitBack: function prohibitBack(controllers, message, $scope) {
      $scope = $scope || $rootScope;
      return $scope.$on('$routeChangeStart', function (event, next, current) {
        if (next.$$route && controllers.indexOf(next.$$route.controller) >= 0) {
          $scope.showError(message || 'Back is not allowed.');
          event.preventDefault();
        }
      });
    }
  };
  /**
   * Reset page title on changing route
   */

  $rootScope.$on('$routeChangeSuccess', function () {
    pageTitle = '';
  });
  /**
   * Watch for selected user ID in $location.search, load current user profile and emit CHANGE-USER event
   */

  $rootScope.$watch(function () {
    return $location.search().user;
  }, function (newVal) {
    if (newVal) {
      resolveTimezone().then(function () {
        userProfileService.get(state.getCurrentCenterId(), newVal).then(function (user) {
          currentUser = user;
          $rootScope.$emit('CHANGE-USER');
        });
      });
    } else {
      currentUser = {};
      $rootScope.$emit('CHANGE-USER'); //$route.reload();
    }
  });
  /**
   * Starts monitoring and forcing correct center id in search params (?center=1).
   */

  var stopMonitoringCurrentCenter;

  function startMonitoringCurrentCenter() {
    centersPromise.then(function (result) {
      if (stopMonitoringCurrentCenter) stopMonitoringCurrentCenter();
      /*** $routeChangeStart listener ***/

      stopMonitoringCurrentCenter = $rootScope.$on('$routeChangeStart', function () {
        if (centers && centers.length > 0 && !helper.findByKeyValue(centers, 'id', state.getCurrentCenterId())) {
          state.setCurrentCenterId(session.user.centerId || centers[0].id);
        }
      });

      if (!state.getCurrentCenterId()) {
        state.replace(); // Enable replacing history state on this digest
        // Select current centerId on startup

        var centerId = session.user.centerId; // If current center is invalid, set the first center as current

        if (centers && centers.length > 0 && !helper.findByKeyValue(centers, 'id', centerId)) {
          centerId = centers[0].id;
        }

        state.setCurrentCenterId(centerId);
      }
    });
  }
  /**
   * LOGIN listener
   */


  $rootScope.$on('LOGIN', function () {
    autoCacheFactory.emptyAll();
    $rootScope.$emit('CENTERS:REFRESH');
    startMonitoringCurrentCenter();
  });
  /**
   * LOGOUT listener
   */

  $rootScope.$on('LOGOUT', function ($event, opts) {
    opts = opts || {};

    if (stopMonitoringCurrentCenter) {
      stopMonitoringCurrentCenter();
      stopMonitoringCurrentCenter = null;
    }

    autoCacheFactory.emptyAll();

    if (!opts.skipResetParams) {
      state.resetParams();
      $location.search('user', null);
      $location.search('center', null);
    }

    centers = [];
  });
  /**
   * CHANGE-CENTER listener
   */

  $rootScope.$on('CHANGE-CENTER', function () {
    autoCacheFactory.emptyAll();
  });
  /**
   * CENTERS:REFRESH listener
   */

  $rootScope.$on('CENTERS:REFRESH', function () {
    centersPromise = centerService.getCenters().then(function (result) {
      centers = result;
      return result;
    }).catch(function (err) {
      return $rootScope.showError(err, 'CENTERS:REFRESH failed to load centers list');
    });
  });
  /**
   * CurrentUser:refresh listener
   */

  $rootScope.$on('CurrentUser:refresh', function () {
    userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).then(function (user) {
      currentUser = user;
    });
  });
  return state;
}]);

/***/ }),

/***/ "./common/services/_utility/tmhDynamicLocale.js":
/*!******************************************************!*\
  !*** ./common/services/_utility/tmhDynamicLocale.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ "../node_modules/@babel/runtime-corejs3/helpers/typeof.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);







/**
 * Angular Dynamic Locale - 0.1.37
 * https://github.com/lgalfaso/angular-dynamic-locale
 * License: MIT
 */
(function (root, factory) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "../node_modules/webpack/buildin/amd-options.js")) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return factory();
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _babel_runtime_corejs3_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    factory();
  }
})(undefined, function () {
  'use strict';

  angular.module('tmh.dynamicLocale', []).config(['$provide', function ($provide) {
    function makeStateful($delegate) {
      $delegate.$stateful = true;
      return $delegate;
    }

    $provide.decorator('dateFilter', ['$delegate', makeStateful]);
    $provide.decorator('numberFilter', ['$delegate', makeStateful]);
    $provide.decorator('currencyFilter', ['$delegate', makeStateful]);
  }]).constant('tmhDynamicLocale.STORAGE_KEY', 'tmhDynamicLocale.locale').provider('tmhDynamicLocale', ['tmhDynamicLocale.STORAGE_KEY', function (STORAGE_KEY) {
    var defaultLocale,
        localeLocationPattern = 'angular/i18n/angular-locale_{{locale}}.js',
        nodeToAppend,
        storageFactory = 'tmhDynamicLocaleStorageCache',
        storage,
        storageKey = STORAGE_KEY,
        storageGet = 'get',
        storagePut = 'put',
        promiseCache = {},
        activeLocale,
        extraProperties = {};
    /**
     * Webpack-compatible replacement for loadScript
     */

    function importLocale(localeId, callback, errorCallback, $timeout) {
      __webpack_require__("../node_modules/angular-i18n lazy-once recursive _en-au\\.js|_en-ca\\.js|_en-gb\\.js|_en-nl\\.js|_en-sg\\.js|_en-us\\.js|_en-za\\.js|_fr-fr\\.js|_fr-ca\\.js|_ru-ru\\.js|_ru-ua\\.js")("./angular-locale_".concat(localeId, ".js")).then(callback).catch(function (err) {
        console.error('ERROR:', err);
        errorCallback();
      });
    } // function loadScript(url, callback, errorCallback, $timeout) {
    // var script = document.createElement('script'),
    //   element = nodeToAppend ? nodeToAppend : document.getElementsByTagName("body")[0],
    //   removed = false;
    //
    // script.type = 'text/javascript';
    // if (script.readyState) { // IE
    //   script.onreadystatechange = function () {
    //     if (script.readyState === 'complete' ||
    //       script.readyState === 'loaded') {
    //       script.onreadystatechange = null;
    //       $timeout(
    //         function () {
    //           if (removed) return;
    //           removed = true;
    //           if (script.parentNode === element) {
    //             element.removeChild(script);
    //           }
    //           callback();
    //         }, 30, false);
    //     }
    //   };
    // } else { // Others
    //   script.onload = function () {
    //     if (removed) return;
    //     removed = true;
    //     if (script.parentNode === element) {
    //       element.removeChild(script);
    //     }
    //     callback();
    //   };
    //   script.onerror = function () {
    //     if (removed) return;
    //     removed = true;
    //     if (script.parentNode === element) {
    //       element.removeChild(script);
    //     }
    //     errorCallback();
    //   };
    // }
    // script.src = url;
    // script.async = true;
    // element.appendChild(script);
    // }

    /**
     * Loads a locale and replaces the properties from the current locale with the new locale information
     *
     * @param {string} localeUrl The path to the new locale
     * @param {Object} $locale The locale at the curent scope
     * @param {string} localeId The locale id to load
     * @param {Object} $rootScope The application $rootScope
     * @param {Object} $q The application $q
     * @param {Object} localeCache The current locale cache
     * @param {Object} $timeout The application $timeout
     */


    function loadLocale(localeUrl, $locale, localeId, $rootScope, $q, localeCache, $timeout) {
      function overrideValues(oldObject, newObject) {
        if (activeLocale !== localeId) {
          return;
        }

        angular.forEach(oldObject, function (value, key) {
          if (!newObject[key]) {
            delete oldObject[key];
          } else if (angular.isArray(newObject[key])) {
            oldObject[key].length = newObject[key].length;
          }
        });
        angular.forEach(newObject, function (value, key) {
          if (angular.isArray(newObject[key]) || angular.isObject(newObject[key])) {
            if (!oldObject[key]) {
              oldObject[key] = angular.isArray(newObject[key]) ? [] : {};
            }

            overrideValues(oldObject[key], newObject[key]);
          } else {
            oldObject[key] = newObject[key];
          }
        });
      }

      if (promiseCache[localeId]) {
        activeLocale = localeId;
        return promiseCache[localeId];
      }

      var cachedLocale,
          deferred = $q.defer();

      if (localeId === activeLocale) {
        deferred.resolve($locale);
      } else if (cachedLocale = localeCache.get(localeId)) {
        activeLocale = localeId;
        $rootScope.$evalAsync(function () {
          overrideValues($locale, cachedLocale);
          storage[storagePut](storageKey, localeId);
          $rootScope.$broadcast('$localeChangeSuccess', localeId, $locale);
          deferred.resolve($locale);
        });
      } else {
        activeLocale = localeId;
        promiseCache[localeId] = deferred.promise; // loadScript(localeUrl, function() {

        importLocale(localeId, function () {
          // Create a new injector with the new locale
          var localInjector = angular.injector(['ngLocale']),
              externalLocale = localInjector.get('$locale');
          overrideValues($locale, externalLocale);
          localeCache.put(localeId, externalLocale);
          delete promiseCache[localeId];
          $rootScope.$applyAsync(function () {
            storage[storagePut](storageKey, localeId);
            $rootScope.$broadcast('$localeChangeSuccess', localeId, $locale);
            deferred.resolve($locale);
          });
        }, function () {
          delete promiseCache[localeId];
          $rootScope.$applyAsync(function () {
            if (activeLocale === localeId) {
              activeLocale = $locale.id;
            }

            $rootScope.$broadcast('$localeChangeError', localeId);
            deferred.reject(localeId);
          });
        }, $timeout);
      }

      return deferred.promise;
    }

    this.localeLocationPattern = function (value) {
      if (value) {
        localeLocationPattern = value;
        return this;
      } else {
        return localeLocationPattern;
      }
    };

    this.appendScriptTo = function (nodeElement) {
      nodeToAppend = nodeElement;
    };

    this.useStorage = function (storageName) {
      storageFactory = storageName;
      storageGet = 'get';
      storagePut = 'put';
    };

    this.useCookieStorage = function () {
      if (angular.version.minor < 7) {
        this.useStorage('$cookieStore');
      } else {
        this.useStorage('$cookies');
        storageGet = 'getObject';
        storagePut = 'putObject';
      }
    };

    this.defaultLocale = function (value) {
      defaultLocale = value;
    };

    this.storageKey = function (value) {
      if (value) {
        storageKey = value;
        return this;
      } else {
        return storageKey;
      }
    };

    this.addLocalePatternValue = function (key, value) {
      extraProperties[key] = value;
    };

    this.$get = ['$rootScope', '$injector', '$interpolate', '$locale', '$q', 'tmhDynamicLocaleCache', '$timeout', function ($rootScope, $injector, interpolate, locale, $q, tmhDynamicLocaleCache, $timeout) {
      var localeLocation = interpolate(localeLocationPattern);
      storage = $injector.get(storageFactory);
      $rootScope.$evalAsync(function () {
        var initialLocale;

        if (initialLocale = storage[storageGet](storageKey) || defaultLocale) {
          loadLocaleFn(initialLocale);
        }
      });
      return {
        /**
         * @ngdoc method
         * @description
         * @param {string} value Sets the locale to the new locale. Changing the locale will trigger
         *    a background task that will retrieve the new locale and configure the current $locale
         *    instance with the information from the new locale
         */
        set: loadLocaleFn,

        /**
         * @ngdoc method
         * @description Returns the configured locale
         */
        get: function get() {
          return activeLocale;
        }
      };

      function loadLocaleFn(localeId) {
        var baseProperties = {
          locale: localeId,
          angularVersion: angular.version.full
        };
        return loadLocale(localeLocation(angular.extend({}, extraProperties, baseProperties)), locale, localeId, $rootScope, $q, tmhDynamicLocaleCache, $timeout);
      }
    }];
  }]).provider('tmhDynamicLocaleCache', function () {
    this.$get = ['$cacheFactory', function ($cacheFactory) {
      return $cacheFactory('tmh.dynamicLocales');
    }];
  }).provider('tmhDynamicLocaleStorageCache', function () {
    this.$get = ['$cacheFactory', function ($cacheFactory) {
      return $cacheFactory('tmh.dynamicLocales.store');
    }];
  }).run(['tmhDynamicLocale', angular.noop]);
  return 'tmh.dynamicLocale';
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./common/services/_utility/user-tasks-policy.service.js":
/*!***************************************************************!*\
  !*** ./common/services/_utility/user-tasks-policy.service.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


angular.module('userTasksPolicy', ['session', 'deskworks.routeHelper', 'deskworks.UserTasks.service']).factory('userTasksPolicy', ["$rootScope", "$q", "$route", "dwAlerts", "helper", "state", "session", "UserTasks", "routeHelper", function ($rootScope, $q, $route, dwAlerts, helper, state, session, UserTasks, routeHelper) {
  'use strict';

  var promise;
  $rootScope.$on('CHANGE-CENTER', function () {
    if (!$route.current.reloadOnSearch) userTasksPolicy();
  });
  return userTasksPolicy;

  function userTasksPolicy() {
    var ignoredBranches = ['dashboard', 'sign-in', 'sign-out'];
    if ($route.current.$$route.userTasksPolicy === false) return $q.resolve({});
    if (ignoredBranches.indexOf($route.current.$$route.routeBranch) >= 0) return $q.resolve({});
    if (promise) return promise;
    promise = session.wait().then(function () {
      return state.getCentersPromise(); // wait for center auto-selection
    }).then(function () {
      return UserTasks.query(state.getCurrentCenterId(), state.isMasterProfile() && state.getCurrentUserId()).catch(function (err) {
        return dwAlerts.error(err, 'userTasksPolicy: failed to query user-tasks.');
      });
    }).then(function (groups) {
      if ($route.current.$$route.userTasksPolicy === false) return $q.resolve({});
      if (ignoredBranches.indexOf($route.current.$$route.routeBranch) >= 0) return $q.resolve({});
      var rb = '/' + $route.current.$$route.routeBranch;
      var found = groups.some(function (group) {
        return group.tasks.some(function (task) {
          return task.url === rb;
        });
      });
      if (found) return $q.resolve();
      state.resetParams().setPath('/dashboard');
      return $q.reject();
    }).finally(function () {
      promise = null;
    });
    return promise;
  }
}]);

/***/ }),

/***/ "./common/services/accounting/bulk-invoicing.service.js":
/*!**************************************************************!*\
  !*** ./common/services/accounting/bulk-invoicing.service.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.accounting.bulkInvoicing.service', ['ngResource', 'deskworks.config', 'deskworks.helper', 'datesDeserializer']).factory('bulkInvoicingService', ["$resource", "datesDeserializer", "deskworksConfig", "helper", function ($resource, datesDeserializer, deskworksConfig, helper) {
  'use strict';

  var desDates = datesDeserializer(['date', 'items.date']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/send-invoices'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  var resCharges = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/bulk-charges'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    getInvoices: function getInvoices(centerId) {
      return res.query({
        centerId: centerId
      }).$promise;
    },
    sendEmails: function sendEmails(centerId, data) {
      return res.save({
        centerId: centerId
      }, data).$promise;
    },

    /**
     * Bulk Charges
     */
    getPurchases: function getPurchases(centerId) {
      return resCharges.query({
        centerId: centerId
      }).$promise;
    },
    billPurchases: function billPurchases(centerId, data) {
      return resCharges.save({
        centerId: centerId
      }, data).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/billing/cc-validator.service.js":
/*!*********************************************************!*\
  !*** ./common/services/billing/cc-validator.service.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "../node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Utility for validation credit card numbers and determining their types.
 * Card Validator (https://github.com/braintree/card-validator)
 * Credit Card Type (https://github.com/braintree/credit-card-type)
 */
angular.module('ccValidator', []).factory('ccValidator', function () {
  'use strict';
  /**
   * Credit Card Type v5.0.4 (https://github.com/braintree/credit-card-type)
   */

  var types = {};
  var VISA = 'visa';
  var MASTERCARD = 'master';
  var AMERICAN_EXPRESS = 'american_express';
  var DINERS_CLUB = 'diners-club';
  var DISCOVER = 'discover';
  var JCB = 'jcb';
  var UNIONPAY = 'unionpay';
  var MAESTRO = 'maestro';
  var CVV = 'CVV';
  var CID = 'CID';
  var CVC = 'CVC';
  var CVN = 'CVN';
  var testOrder = [VISA, MASTERCARD, AMERICAN_EXPRESS, DINERS_CLUB, DISCOVER, JCB, UNIONPAY, MAESTRO];

  function clone(x) {
    var prefixPattern, exactPattern, dupe;

    if (!x) {
      return null;
    }

    prefixPattern = x.prefixPattern.source;
    exactPattern = x.exactPattern.source;
    dupe = JSON.parse(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(x));
    dupe.prefixPattern = prefixPattern;
    dupe.exactPattern = exactPattern;
    return dupe;
  }

  types[VISA] = {
    niceType: 'Visa',
    type: VISA,
    prefixPattern: /^4$/,
    exactPattern: /^4\d*$/,
    gaps: [4, 8, 12],
    lengths: [16, 18, 19],
    code: {
      name: CVV,
      size: 3
    }
  };
  types[MASTERCARD] = {
    niceType: 'MasterCard',
    type: MASTERCARD,
    prefixPattern: /^(5|5[1-5]|2|22|222|222[1-9]|2[3-6]|27|27[0-2]|2720)$/,
    exactPattern: /^(5[1-5]|222[1-9]|2[3-6]|27[0-1]|2720)\d*$/,
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: CVC,
      size: 3
    }
  };
  types[AMERICAN_EXPRESS] = {
    niceType: 'American Express',
    type: AMERICAN_EXPRESS,
    prefixPattern: /^(3|34|37)$/,
    exactPattern: /^3[47]\d*$/,
    isAmex: true,
    gaps: [4, 10],
    lengths: [15],
    code: {
      name: CID,
      size: 4
    }
  };
  types[DINERS_CLUB] = {
    niceType: 'Diners Club',
    type: DINERS_CLUB,
    prefixPattern: /^(3|3[0689]|30[0-5])$/,
    exactPattern: /^3(0[0-5]|[689])\d*$/,
    gaps: [4, 10],
    lengths: [14, 16, 19],
    code: {
      name: CVV,
      size: 3
    }
  };
  types[DISCOVER] = {
    niceType: 'Discover',
    type: DISCOVER,
    prefixPattern: /^(6|60|601|6011|65|64|64[4-9])$/,
    exactPattern: /^(6011|65|64[4-9])\d*$/,
    gaps: [4, 8, 12],
    lengths: [16, 19],
    code: {
      name: CID,
      size: 3
    }
  };
  types[JCB] = {
    niceType: 'JCB',
    type: JCB,
    prefixPattern: /^(2|21|213|2131|1|18|180|1800|3|35)$/,
    exactPattern: /^(2131|1800|35)\d*$/,
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: CVV,
      size: 3
    }
  };
  types[UNIONPAY] = {
    niceType: 'UnionPay',
    type: UNIONPAY,
    prefixPattern: /^((6|62|62\d|(621(?!83|88|98|99))|622(?!06)|627[02,06,07]|628(?!0|1)|629[1,2])|622018)$/,
    exactPattern: /^(((620|(621(?!83|88|98|99))|622(?!06|018)|62[3-6]|627[02,06,07]|628(?!0|1)|629[1,2]))\d*|622018\d{12})$/,
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    code: {
      name: CVN,
      size: 3
    }
  };
  types[MAESTRO] = {
    niceType: 'Maestro',
    type: MAESTRO,
    prefixPattern: /^(5|5[06-9]|6\d*)$/,
    exactPattern: /^(5[06-9]|6[37])\d*$/,
    gaps: [4, 8, 12],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
    code: {
      name: CVC,
      size: 3
    }
  };

  function creditCardType(cardNumber) {
    var type, value, i;
    var prefixResults = [];
    var exactResults = [];

    if (!(typeof cardNumber === 'string' || cardNumber instanceof String)) {
      return [];
    }

    for (i = 0; i < testOrder.length; i++) {
      type = testOrder[i];
      value = types[type];

      if (cardNumber.length === 0) {
        prefixResults.push(clone(value));
        continue;
      }

      if (value.exactPattern.test(cardNumber)) {
        exactResults.push(clone(value));
      } else if (value.prefixPattern.test(cardNumber)) {
        prefixResults.push(clone(value));
      }
    }

    return exactResults.length ? exactResults : prefixResults;
  }

  creditCardType.getTypeInfo = function (type) {
    return clone(types[type]);
  };

  creditCardType.types = {
    VISA: VISA,
    MASTERCARD: MASTERCARD,
    AMERICAN_EXPRESS: AMERICAN_EXPRESS,
    DINERS_CLUB: DINERS_CLUB,
    DISCOVER: DISCOVER,
    JCB: JCB,
    UNIONPAY: UNIONPAY,
    MAESTRO: MAESTRO
  };
  return cardNumber;
  /**
   * Card Validator v4.1.0 (https://github.com/braintree/card-validator)
   */

  function verification(card, isPotentiallyValid, isValid) {
    return {
      card: card,
      isPotentiallyValid: isPotentiallyValid,
      isValid: isValid
    };
  }

  function cardNumber(value) {
    var potentialTypes, cardType, isPotentiallyValid, isValid, i, maxLength;

    if (typeof value === 'number') {
      value = String(value);
    }

    if (typeof value !== 'string') {
      return verification(null, false, false);
    }

    value = value.replace(/\-|\s/g, '');

    if (!/^\d*$/.test(value)) {
      return verification(null, false, false);
    }

    potentialTypes = creditCardType(value);

    if (potentialTypes.length === 0) {
      return verification(null, false, false);
    } else if (potentialTypes.length !== 1) {
      return verification(null, true, false);
    }

    cardType = potentialTypes[0];

    if (cardType.type === 'unionpay') {
      // UnionPay is not Luhn 10 compliant
      isValid = true;
    } else {
      isValid = luhn10(value);
    }

    maxLength = Math.max.apply(null, cardType.lengths);

    for (i = 0; i < cardType.lengths.length; i++) {
      if (cardType.lengths[i] === value.length) {
        isPotentiallyValid = value.length !== maxLength || isValid;
        return verification(cardType, isPotentiallyValid, isValid);
      }
    }

    return verification(cardType, value.length < maxLength, false);
  }
  /**
   * Luhn algorithm implementation
   */


  function luhn10(identifier) {
    var sum = 0;
    var alt = false;
    var i = identifier.length - 1;
    var num;

    while (i >= 0) {
      num = parseInt(identifier.charAt(i), 10);

      if (alt) {
        num *= 2;

        if (num > 9) {
          num = num % 10 + 1; // eslint-disable-line no-extra-parens
        }
      }

      alt = !alt;
      sum += num;
      i--;
    }

    return sum % 10 === 0;
  }
});

/***/ }),

/***/ "./common/services/billing/opts-billing-frequency.service.js":
/*!*******************************************************************!*\
  !*** ./common/services/billing/opts-billing-frequency.service.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Billing Frequency in Setup / Recurring Billing
 */
angular.module('deskworks.billing.optsBillingFrequency', []).factory('optsBillingFrequency', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'monthly',
    _name: 'RECURRING_BILLING.GENERAL.BILLING_FREQUENCY.MONTHLY',
    months: 1
  }, {
    id: 'quarterly',
    _name: 'RECURRING_BILLING.GENERAL.BILLING_FREQUENCY.QUARTERLY',
    months: 3
  }, {
    id: 'semiAnnual',
    _name: 'RECURRING_BILLING.GENERAL.BILLING_FREQUENCY.SEMI_ANNUAL',
    months: 6
  }, {
    id: 'annual',
    _name: 'RECURRING_BILLING.GENERAL.BILLING_FREQUENCY.ANNUAL',
    months: 12
  }, {
    id: 'asNeeded',
    _name: 'RECURRING_BILLING.GENERAL.BILLING_FREQUENCY.AS_NEEDED'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $translate.instant(opt._name);
    });
  }

  return opts;
}]);

/***/ }),

/***/ "./common/services/billing/opts-discount-type.service.js":
/*!***************************************************************!*\
  !*** ./common/services/billing/opts-discount-type.service.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Discount Type in Billing / Recurring Billing
 */
angular.module('deskworks.billing.optsDiscountType', []).factory('optsDiscountType', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 0,
    _name: 'RECURRING_BILLING.DISCOUNT.TYPE.NO'
  }, {
    id: 1,
    _name: 'RECURRING_BILLING.DISCOUNT.TYPE.$'
  }, {
    id: 2,
    _name: 'RECURRING_BILLING.DISCOUNT.TYPE.%'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $translate.instant(opt._name);
    });
  }

  return opts;
}]);

/***/ }),

/***/ "./common/services/billing/opts-months-of-discount.service.js":
/*!********************************************************************!*\
  !*** ./common/services/billing/opts-months-of-discount.service.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for 'Months of Discount' in Recurring Billing
 */
angular.module('deskworks.userProfile.optsMonthsOfDiscount', []).factory('optsMonthsOfDiscount', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 1,
    _name: 'RECURRING_BILLING.DISCOUNT.MONTHS.SINGLE'
  }];

  for (var i = 2; i < 25; i++) {
    opts.push({
      id: i,
      name: String(i)
    });
  }

  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts[0].name = $translate.instant(opts[0]._name);
  }

  return opts;
}]);

/***/ }),

/***/ "./common/services/billing/opts-notice-period.service.js":
/*!***************************************************************!*\
  !*** ./common/services/billing/opts-notice-period.service.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Notice Period in Billing / Recurring Billing
 */
angular.module('deskworks.billing.optsNoticePeriod', []).factory('optsNoticePeriod', ["$rootScope", "$filter", function ($rootScope, $filter) {
  'use strict';

  var opts = [{
    id: 10,
    name: '10 days'
  }, {
    id: 15,
    name: '15 days'
  }, {
    id: 30,
    name: '30 days'
  }, {
    id: 60,
    name: '60 days'
  }, {
    id: 90,
    name: '90 days'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $filter('days')(opt.id);
    });
  }

  return opts;
}]);

/***/ }),

/***/ "./common/services/billing/opts-payment-billing-method.service.js":
/*!************************************************************************!*\
  !*** ./common/services/billing/opts-payment-billing-method.service.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Purchase -> Payment -> Billing Method
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsPaymentBillingMethod', []).factory('optsPaymentBillingMethod', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 'cc',
    _name: 'PURCHASE.PAYMENT.METHOD.CC',
    paymentMethodKey: 'creditCards'
  }, {
    id: 'ach',
    _name: 'PURCHASE.PAYMENT.METHOD.ACH',
    paymentMethodKey: 'eChecks'
  }, {
    id: 'cash',
    _name: 'PURCHASE.PAYMENT.METHOD.CASH'
  }, {
    id: 'check',
    _name: 'PURCHASE.PAYMENT.METHOD.CHECK'
  }, {
    id: 'writeOff',
    _name: 'PURCHASE.PAYMENT.METHOD.WRITE_OFF'
  }, {
    id: 'wireTransfer',
    _name: 'PURCHASE.PAYMENT.METHOD.WIRE_TRANSFER'
  }, {
    id: 'other',
    _name: 'PURCHASE.PAYMENT.METHOD.OTHER'
  }, {
    id: 'securityDeposit',
    _name: 'PURCHASE.PAYMENT.METHOD.SECURITY_DEPOSIT'
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

/***/ "./common/services/billing/opts-recurring-charge-status.service.js":
/*!*************************************************************************!*\
  !*** ./common/services/billing/opts-recurring-charge-status.service.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Recurring Charge Status in Billing / Recurring Billing
 */
angular.module('deskworks.billing.optsRecurringChargeStatus', []).factory('optsRecurringChargeStatus', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'active',
    _name: 'RECURRING_BILLING.STATUS_NOTES.STATUS.ACTIVE'
  }, {
    id: 'inactive',
    _name: 'RECURRING_BILLING.STATUS_NOTES.STATUS.INACTIVE'
  }, {
    id: 'deleted',
    _name: 'RECURRING_BILLING.STATUS_NOTES.STATUS.DELETED'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $translate.instant(opt._name);
    });
  }

  return opts;
}]);

/***/ }),

/***/ "./common/services/billing/opts-recurring-charge-terminate.service.js":
/*!****************************************************************************!*\
  !*** ./common/services/billing/opts-recurring-charge-terminate.service.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Recurring Charge Terminate (for billingFrequency 'asNeeded' only) in Billing / Recurring Billing
 */
angular.module('deskworks.billing.optsRecurringChargeTerminate', []).factory('optsRecurringChargeTerminate', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'never',
    _name: 'RECURRING_BILLING.DATES.TERMINATE.NEVER'
  }, {
    id: 'usedUp',
    _name: 'RECURRING_BILLING.DATES.TERMINATE.WHEN_USED_UP'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $translate.instant(opt._name);
    });
  }

  return opts;
}]);

/***/ }),

/***/ "./common/services/billing/opts-refund-method.service.js":
/*!***************************************************************!*\
  !*** ./common/services/billing/opts-refund-method.service.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Purchase -> Refund -> Billing Method
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.optsRefundBillingMethod', []).factory('optsRefundBillingMethod', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 'cc',
    _name: 'PURCHASE.REFUND.METHOD.CC',
    forceSubmit: true,
    paymentMethodKey: 'creditCards'
  }, {
    id: 'ach',
    _name: 'PURCHASE.REFUND.METHOD.ACH'
  }, {
    id: 'cash',
    _name: 'PURCHASE.REFUND.METHOD.CASH'
  }, {
    id: 'check',
    _name: 'PURCHASE.REFUND.METHOD.CHECK'
  }, {
    id: 'writeOff',
    _name: 'PURCHASE.REFUND.METHOD.WRITE_OFF'
  }, {
    id: 'other',
    _name: 'PURCHASE.REFUND.METHOD.OTHER'
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

/***/ "./common/services/billing/opts-renewal-notice-period.service.js":
/*!***********************************************************************!*\
  !*** ./common/services/billing/opts-renewal-notice-period.service.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Renewal Notice Period in Billing / Recurring Billing
 */
angular.module('deskworks.billing.optsRenewalNoticePeriod', []).factory('optsRenewalNoticePeriod', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  'use strict';

  var opts = [{
    id: null,
    _name: 'RECURRING_BILLING.RENEWAL_NOTICE_PERIOD.NO_NOTICE'
  }, {
    id: 10
  }, {
    id: 30
  }, {
    id: 37
  }, {
    id: 60
  }, {
    id: 67
  }, {
    id: 90
  }, {
    id: 120
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = opt._name ? $translate.instant(opt._name) : $filter('days')(opt.id);
    });
  }

  return opts;
}]);

/***/ }),

/***/ "./common/services/billing/opts-renewal-term.service.js":
/*!**************************************************************!*\
  !*** ./common/services/billing/opts-renewal-term.service.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Renewal Term in Billing / Recurring Billing
 */
angular.module('deskworks.billing.optsRenewalTerm', []).factory('optsRenewalTerm', ["$rootScope", "$filter", function ($rootScope, $filter) {
  'use strict';

  var opts = [{
    id: 1
  }, {
    id: 3
  }, {
    id: 6
  }, {
    id: 12
  }, {
    id: 24
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $filter('months')(opt.id);
    });
  }

  return opts;
}]);

/***/ }),

/***/ "./common/services/billing/purchase.service.js":
/*!*****************************************************!*\
  !*** ./common/services/billing/purchase.service.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.purchase.service', ['ngResource', 'deskworks.config', 'datesDeserializer', 'deserializeNumbers']).factory('purchaseService', ["$resource", "$filter", "$timeout", "deskworksConfig", "helper", "datesDeserializer", "deserializeNumbers", function ($resource, $filter, $timeout, deskworksConfig, helper, datesDeserializer, deserializeNumbers) {
  var desDates = datesDeserializer(['open.firstOpened', 'paid.firstOpened', 'credit.firstOpened', 'open.lastModified', 'paid.lastModified', 'credit.lastModified', 'items.billedAt', 'items.createdAt', 'billDate', 'dueDate']);
  var desNums = deserializeNumbers(['items.amount', 'items.price', 'items.quantity']);
  var resPurchase = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId'), {}, {
    query: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    },
    get: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates, desNums]
    },
    update: {
      method: 'PUT'
    }
  });
  var resPurchaseItem = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId/items/:itemId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resCharge = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId/charges'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resDiscount = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId/discounts'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resRefund = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId/refunds'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resPayment = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId/payments'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resDeposit = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId/security-deposits'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resStaffHelp = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId/staff-helps'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resConsolidate = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId/consolidations'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resDiscountCode = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/purchases/:purchaseId/discount-codes'));
  return {
    /**
     * Purchase
     */
    get: function get(centerId, userId, purchaseId, productId) {
      // productId is for obtaining priceList on server-side during member self-registration
      return resPurchase.get({
        centerId: centerId || 0,
        userId: userId,
        purchaseId: purchaseId,
        productId: productId
      }).$promise;
    },
    update: function update(centerId, userId, purchaseId, data) {
      data.billDate = $filter('date')(data.billDate, 'yyyy-MM-dd');
      data.dueDate = $filter('date')(data.dueDate, 'yyyy-MM-dd');
      return resPurchase.update({
        centerId: centerId,
        userId: userId,
        purchaseId: purchaseId
      }, data).$promise;
    },
    getPurchases: function getPurchases(centerId, userId) {
      // TODO: deprecated for the sake of query, get rid of it
      return resPurchase.query({
        centerId: centerId || 0,
        userId: userId
      }).$promise;
    },
    query: function query(centerId, userId) {
      // concatenates open + paid + credit
      return resPurchase.query({
        centerId: centerId || 0,
        userId: userId
      }).$promise.then(function (result) {
        var _context, _context2, _context3, _context4, _context5;

        return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = result.open).call(_context3, function (order) {
          return order.type = 'open', order;
        })).call(_context2, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = result.paid).call(_context4, function (order) {
          return order.type = 'paid', order;
        }))).call(_context, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = result.credit).call(_context5, function (order) {
          return order.type = 'credit', order;
        }));
      });
    },
    createPurchase: function createPurchase(centerId, userId, registration, productId, attachedReservationUnitId, membershipStartDate) {
      return resPurchase.save({
        centerId: centerId || 0,
        userId: userId,
        registration: registration,
        productId: productId || undefined,
        attachedReservationUnitId: attachedReservationUnitId || undefined,
        membershipStartDate: membershipStartDate || undefined
      }, {}).$promise;
    },
    createPurchaseForReservation: function createPurchaseForReservation(centerId, userId, data) {
      return resPurchase.save({
        centerId: centerId || 0,
        userId: userId
      }, data).$promise;
    },

    /**
     * Purchase => Charges
     */
    createCharge: function createCharge(centerId, userId, purchaseId, data, custom, registration, productId) {
      // registration/productId is for obtaining priceList on server-side during member self-registration
      return resCharge.save({
        centerId: centerId || 0,
        userId: userId,
        purchaseId: purchaseId,
        custom: custom,
        registration: registration || undefined,
        productId: productId
      }, data).$promise;
    },
    createDiscount: function createDiscount(centerId, userId, purchaseId, data) {
      data = angular.extend({}, data);
      if (moment.isMoment(data.receivedAt)) data.receivedAt = $filter('date')(data.receivedAt, 'yyyy-MM-dd');
      data.amount = +data.amount;

      _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(data.assignment || {}).forEach(function (key) {
        return data.assignment[key] = isNaN(+data.assignment[key]) ? 0 : +data.assignment[key];
      });

      return resDiscount.save({
        centerId: centerId || 0,
        userId: userId,
        purchaseId: purchaseId
      }, data).$promise;
    },
    createRefund: function createRefund(centerId, userId, purchaseId, data) {
      data = angular.extend({}, data);
      if (moment.isMoment(data.receivedAt)) data.receivedAt = $filter('date')(data.receivedAt, 'yyyy-MM-dd');
      data.amount = +data.amount;
      return resRefund.save({
        centerId: centerId || 0,
        userId: userId,
        purchaseId: purchaseId
      }, data).$promise;
    },

    /**
     * Purchase => Items
     */
    deletePurchaseItem: function deletePurchaseItem(centerId, userId, purchaseId, itemId) {
      return resPurchaseItem.delete({
        centerId: centerId || 0,
        userId: userId,
        purchaseId: purchaseId,
        itemId: itemId
      }).$promise;
    },

    /**
     * Purchase => Payments
     */
    createPayment: function createPayment(centerId, userId, purchaseId, data, registration, productId, membershipStartDate) {
      var obj;

      if (angular.isObject(centerId)) {
        obj = centerId;
        data = userId;
      }

      data = angular.extend({}, data);
      if (moment.isMoment(data.receivedAt)) data.receivedAt = $filter('date')(data.receivedAt, 'yyyy-MM-dd');
      if (data.amount) data.amount = +data.amount;
      return resPayment.save(obj || {
        centerId: centerId || 0,
        userId: userId,
        purchaseId: purchaseId,
        registration: registration,
        productId: productId,
        membershipStartDate: membershipStartDate
      }, data).$promise;
    },

    /**
     * Purchase => Deposits
     */
    createDeposit: function createDeposit(centerId, userId, purchaseId, data, registration, productId) {
      data = angular.extend({}, data);
      if (moment.isMoment(data.receivedAt)) data.receivedAt = $filter('date')(data.receivedAt, 'yyyy-MM-dd');
      data.amount = +data.amount;
      return resDeposit.save({
        centerId: centerId || 0,
        userId: userId,
        purchaseId: purchaseId,
        registration: registration,
        productId: productId
      }, data).$promise;
    },

    /**
     * Purchase => Staff Help
     */
    createStaffHelp: function createStaffHelp(centerId, userId, purchaseId, registration, productId) {
      return resStaffHelp.save({
        centerId: centerId || 0,
        userId: userId,
        purchaseId: purchaseId,
        registration: registration,
        productId: productId
      }, {}).$promise;
    },

    /**
     *
     * @param params.centerId
     * @param params.userId
     * @param params.purchaseId
     * @param params.code
     */
    createDiscountCode: function createDiscountCode(params) {
      return resDiscountCode.save(helper.pick(params, ['centerId', 'userId', 'purchaseId']), {
        code: params.code
      }).$promise;
    },

    /**
     * Query purchases to consolidate
     * @param params.centerId
     * @param params.userId
     * @param params.purchaseId
     * @returns {Resource.$promise}
     */
    queryConsolidations: function queryConsolidations(params) {
      return resConsolidate.query(params).$promise;
    },

    /**
     * Purchase => Consolidate Order With Purchase
     */
    consolidate: function consolidate(centerId, userId, purchaseId, sourcePurchaseId) {
      return resConsolidate.save({
        centerId: centerId,
        userId: userId,
        purchaseId: purchaseId
      }, {
        sourcePurchaseId: sourcePurchaseId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/billing/recurring-charge.service.js":
/*!*************************************************************!*\
  !*** ./common/services/billing/recurring-charge.service.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);


angular.module('deskworks.recurringCharge.service', ['ngResource', 'deskworks.config', 'deskworks.billing.optsBillingFrequency', 'deskworks.billing.optsRecurringChargeStatus', 'deskworks.billing.optsNoticePeriod', 'deskworks.billing.optsDiscountType', 'deskworks.userProfile.optsMonthsOfDiscount', 'deskworks.billing.optsRecurringChargeTerminate', 'datesDeserializer']).factory('recurringChargeService', ["$resource", "$q", "$timeout", "$filter", "deskworksConfig", "helper", "datesDeserializer", "optsBillingFrequency", "optsRecurringChargeStatus", "optsNoticePeriod", "optsDiscountType", "optsMonthsOfDiscount", "optsRecurringChargeTerminate", "optsRenewalTerm", function ($resource, $q, $timeout, $filter, deskworksConfig, helper, datesDeserializer, optsBillingFrequency, optsRecurringChargeStatus, optsNoticePeriod, optsDiscountType, optsMonthsOfDiscount, optsRecurringChargeTerminate, optsRenewalTerm) {
  'use strict';

  var toDate = $filter('toDate');
  var desDates = datesDeserializer(['lastBillDate', 'nextBillDate', 'entryDate', 'startDate', 'discountStartDate', 'terminate', 'noticeDate', 'renewalDate']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/recurring-charges/:recurringId'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    },
    get: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    },
    update: {
      method: 'PUT'
    }
  });
  return {
    /**
     * Returns new Recurring Charge template
     */
    new: function _new() {
      var charge = {};
      charge.id = helper.uid();
      charge.lastBillDate = moment();
      charge.nextBillDate = moment().add(1, 'M');
      charge.status = optsRecurringChargeStatus[0];
      charge.billingFrequency = optsBillingFrequency[0];
      charge.quantity = 1;
      charge.entryDate = moment();
      charge.startDate = moment();
      charge.noticePeriod = optsNoticePeriod[2];
      charge.discountType = optsDiscountType[0];
      charge.discountTrialOccurrences = optsMonthsOfDiscount[0];
      charge.discountStartDate = moment();
      charge.renewalDate = moment().add(1, 'M');
      charge.renewalTerm = optsRenewalTerm[0].id;
      charge.renewalNoticePeriod = null;
      return charge;
    },
    isNew: function isNew(charge) {
      return charge && helper.isUid(charge.id);
    },
    save: function save(centerId, userId, charge) {
      var self = this;

      if (helper.isUid(charge.id)) {
        return res.save({
          centerId: centerId,
          userId: userId
        }, self.unresolve(charge)).$promise.then(function (result) {
          charge.id = result.id;
          return result;
        });
      } else {
        return res.update({
          centerId: centerId,
          userId: userId,
          recurringId: charge.id
        }, self.unresolve(charge)).$promise;
      }
    },

    /**
     * Get Recurring Charges List
     */
    query: function query(centerId, userId) {
      return res.query({
        centerId: centerId,
        userId: userId
      }).$promise.then(function (result) {
        angular.forEach(result, function (charge) {
          charge.status = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsRecurringChargeStatus, charge.status);
        });
        return result;
      });
    },

    /**
     * Get Recurring Charge
     */
    get: function get(centerId, userId, recurringId) {
      return res.get({
        centerId: centerId,
        userId: userId,
        recurringId: recurringId
      }).$promise.then(function (charge) {
        charge.userName = charge.memberName; // Initializing New Charge

        if (recurringId === 'new') {
          charge.lastBillDate = moment();
          charge.nextBillDate = moment().add(1, 'M');
          charge.status = optsRecurringChargeStatus[0];
          charge.billingFrequency = optsBillingFrequency[0];
          charge.quantity = 1;
          charge.entryDate = moment();
          charge.startDate = moment();
          charge.noticePeriod = optsNoticePeriod[2];
          charge.discountType = optsDiscountType[0];
          charge.discountTrialOccurrences = optsMonthsOfDiscount[0];
          charge.discountStartDate = moment();
          charge.renewalDate = moment().add(1, 'M');
          charge.renewalTerm = optsRenewalTerm[0].id;
          charge.renewalNoticePeriod = null;
        } else {
          // Existing Charge, convert strings/IDs to objects
          charge.status = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsRecurringChargeStatus, charge.status);
          charge.priceListProduct = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, charge.options.priceListProducts, charge.priceListProductId);

          if (charge.priceListProduct) {
            charge.billingFrequency = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsBillingFrequency, charge.priceListProduct.billingFrequency);
          } // charge.startDate = toDate(charge.startDate);


          if (charge.terminate && charge.billingFrequency) {
            charge.terminate = charge.billingFrequency.id === 'asNeeded' ? _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsRecurringChargeTerminate, charge.terminate) : charge.terminate;
          }

          charge.noticePeriod = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsNoticePeriod, charge.noticePeriod);
          charge.discountType = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsDiscountType, charge.discountTypeId) || optsDiscountType[0];
          charge.discountTrialOccurrences = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsMonthsOfDiscount, charge.discountTrialOccurrences) || optsMonthsOfDiscount[0];
        }

        return charge;
      });
    },

    /**
     * Create Recurring Charge
     */
    createCharge: function createCharge(centerId, userId, data) {
      data.startDate = $filter('date')(data.startDate, 'yyyy-MM-dd');
      data.lastBillDate = $filter('date')(data.lastBillDate, 'yyyy-MM-dd');
      data.nextBillDate = $filter('date')(data.nextBillDate, 'yyyy-MM-dd');
      data.noticeDate = moment.isMoment(data.noticeDate) ? $filter('date')(data.noticeDate, 'yyyy-MM-dd') : data.noticeDate;
      data.terminate = moment.isMoment(data.terminate) ? $filter('date')(data.terminate, 'yyyy-MM-dd') : data.terminate;
      data.discountStartDate = $filter('date')(data.discountStartDate, 'yyyy-MM-dd');
      if (data.renewalDate) data.renewalDate = moment.isMoment(data.renewalDate) ? $filter('date')(data.renewalDate, 'yyyy-MM-dd') : data.renewalDate;
      return res.save({
        centerId: centerId,
        userId: userId
      }, data).$promise;
    },

    /**
     * Update Recurring Charge
     */
    updateCharge: function updateCharge(centerId, userId, recurringId, data) {
      data.startDate = $filter('date')(data.startDate, 'yyyy-MM-dd');
      data.lastBillDate = $filter('date')(data.lastBillDate, 'yyyy-MM-dd');
      data.nextBillDate = $filter('date')(data.nextBillDate, 'yyyy-MM-dd');
      data.noticeDate = moment.isMoment(data.noticeDate) ? $filter('date')(data.noticeDate, 'yyyy-MM-dd') : data.noticeDate;
      data.terminate = moment.isMoment(data.terminate) ? $filter('date')(data.terminate, 'yyyy-MM-dd') : data.terminate;
      data.discountStartDate = $filter('date')(data.discountStartDate, 'yyyy-MM-dd');
      if (data.renewalDate) data.renewalDate = moment.isMoment(data.renewalDate) ? $filter('date')(data.renewalDate, 'yyyy-MM-dd') : data.renewalDate;
      return res.update({
        centerId: centerId,
        userId: userId,
        recurringId: recurringId
      }, data).$promise;
    },

    /**
     * Delete Recurring Charge
     */
    deleteCharge: function deleteCharge(centerId, userId, recurringId) {
      return res.delete({
        centerId: centerId,
        userId: userId,
        recurringId: recurringId
      }).$promise;
    },

    /**
     * Update Recurring Charge with useForCheckInBilling: true
     */
    setUseForCheckInBilling: function setUseForCheckInBilling(centerId, userId, recurringId) {
      return res.update({
        centerId: centerId,
        userId: userId,
        recurringId: recurringId
      }, {
        useForCheckInBilling: true
      }).$promise;
    },

    /**
     * Convert resolved Recurring Charge to data ready for POST/PUT
     */
    unresolve: function unresolve(charge) {
      var data = {
        name: charge.name,
        priceListProductId: charge.priceListProduct ? charge.priceListProduct.id : null,
        nextBillDate: $filter('date')(charge.nextBillDate, 'yyyy-MM-dd'),
        lastBillDate: $filter('date')(charge.lastBillDate, 'yyyy-MM-dd'),
        noticeDate: $filter('date')(charge.noticeDate, 'yyyy-MM-dd'),
        terminate: $filter('date')(charge.terminate, 'yyyy-MM-dd'),
        renewalDate: $filter('date')(charge.renewalDate, 'yyyy-MM-dd'),
        renewalTerm: charge.renewalTerm,
        renewalNoticePeriod: charge.renewalNoticePeriod,
        quantity: charge.quantity,
        noticePeriod: charge.noticePeriod ? charge.noticePeriod.id : charge.noticePeriod,
        status: charge.status ? charge.status.id : charge.status,
        notes: charge.notes,
        attachedReservationUnitId: charge.attachedReservationUnitId || null
      };
      data.discountStartDate = $filter('date')(charge.discountStartDate, 'yyyy-MM-dd');

      if (charge.discountType && charge.discountType.id) {
        data.discountTypeId = charge.discountType.id;
        data.discountValue = charge.discountValue;

        if (charge.discountTrialOccurrences) {
          data.discountTrialOccurrences = charge.discountTrialOccurrences.id;
        }
      } else {
        data.discountTypeId = 0;
      }

      return data;
    }
  };
}]);

/***/ }),

/***/ "./common/services/billing/security-deposit-record.service.js":
/*!********************************************************************!*\
  !*** ./common/services/billing/security-deposit-record.service.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SecurityDepositRecord', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('SecurityDepositRecord', ["$resource", "deskworksConfig", "datesDeserializer", function ($resource, deskworksConfig, datesDeserializer) {
  var desDates = datesDeserializer(['date']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/security-deposit-records'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    }
  });
  return {
    query: function query(params) {
      return res.query(params).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/check-in.service.js":
/*!*********************************************!*\
  !*** ./common/services/check-in.service.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.checkIn.service', ['ngResource', 'deskworks.config']).factory('checkInService', ["$resource", "deskworksConfig", "helper", function ($resource, deskworksConfig, helper) {
  'use strict';

  var resCheckIn = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/check-in'));
  var resCheckOut = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/check-out'));
  return {
    checkIn: function checkIn(centerId, params) {
      var data = {
        accessCardNumber: params.accessCardNumber || undefined,
        login: params.login || undefined,
        password: params.password || undefined
      };
      return resCheckIn.save({
        centerId: centerId
      }, data).$promise;
    },
    checkOut: function checkOut(centerId, params) {
      var data = {
        accessCardNumber: params.accessCardNumber || undefined,
        login: params.login || undefined,
        password: params.password || undefined
      };
      return resCheckOut.save({
        centerId: centerId
      }, data).$promise;
    }
  };
}]);

/***/ })

}]);
//# sourceMappingURL=main~._common_services__.js.map?_rev=f449dd7d66b1fb3ff48c