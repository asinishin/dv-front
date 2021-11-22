(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main~._common_services_c"],{

/***/ "./common/services/communications/email-all-members.service.js":
/*!*********************************************************************!*\
  !*** ./common/services/communications/email-all-members.service.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.emailAllMembers.service', ['ngResource', 'deskworks.config']).factory('emailAllMembers', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/email-all-members'));
  var resTpl = $resource(deskworksConfig.getApiAbsUrl('/email-templates/email-all-members'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    send: function send(data, test) {
      return res.save({
        test: test || null
      }, data).$promise;
    },
    query: function query(includeNonMembers) {
      return res.query({
        includeNonMembers: includeNonMembers
      }).$promise;
    },
    getTpl: function getTpl() {
      return resTpl.get().$promise;
    },
    saveTpl: function saveTpl(data) {
      return resTpl.update({}, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/communications/email-site-members.service.js":
/*!**********************************************************************!*\
  !*** ./common/services/communications/email-site-members.service.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.emailSiteMembers.service', ['ngResource', 'deskworks.config']).factory('emailSiteMembers', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/email-site-members'));
  var resTpl = $resource(deskworksConfig.getApiAbsUrl('/email-templates/email-site-members'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    send: function send(centerId, data, test) {
      return res.save({
        centerId: centerId,
        test: test || null
      }, data).$promise;
    },
    query: function query(centerId, membershipCategoryIds, checkedInOnly) {
      membershipCategoryIds = membershipCategoryIds && membershipCategoryIds.join();
      return res.query({
        centerId: centerId,
        membershipTypeIds: membershipCategoryIds,
        checkedInOnly: checkedInOnly
      }).$promise;
    },
    getTpl: function getTpl() {
      return resTpl.get().$promise;
    },
    saveTpl: function saveTpl(data) {
      return resTpl.update({}, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/communications/message-board.service.js":
/*!*****************************************************************!*\
  !*** ./common/services/communications/message-board.service.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);


angular.module('deskworks.MessageBoard', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('MessageBoard', ["$resource", "$timeout", "deskworksConfig", "datesDeserializer", "helper", function ($resource, $timeout, deskworksConfig, datesDeserializer, helper) {
  'use strict';

  var desDates = datesDeserializer(['createdAt']); // var res = $resource('http://0.0.0.0:3015' + '/api/messages/:messageId', {}, {

  var res = $resource(deskworksConfig.getApiAbsUrl('/message-board/messages/:messageId'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, deserialize]
    },
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query(params) {
      return res.query(params).$promise;
    },
    save: function save(data) {
      if (data.id) return res.update({
        messageId: data.id
      }, data).$promise;
      return res.save({}, data).$promise.then(function (result) {
        data.id = result.id;
        return result;
      });
    },
    delete: function _delete(messageId) {
      return res.delete({
        messageId: messageId
      }).$promise;
    },
    deserialize: deserialize
  };

  function deserialize(data) {
    data = desDates(data);
    angular.forEach(angular.isArray(data) ? data : [data], function (msg) {
      if (!msg || !msg.author) return;
      msg.author.fullName = helper.join([msg.author.firstName, msg.author.lastName], ' ');
    });
    return data;
  }
}]);

/***/ }),

/***/ "./common/services/communications/splash-page.service.js":
/*!***************************************************************!*\
  !*** ./common/services/communications/splash-page.service.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SplashPage', ['ngResource', 'deskworks.config']).factory('SplashPage', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/net-check-in/splash-page/:centerId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get(centerId) {
      return res.get({
        centerId: centerId
      }).$promise;
    },
    save: function save(centerId, data) {
      return res.update({
        centerId: centerId
      }, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/credentials.service.js":
/*!************************************************!*\
  !*** ./common/services/credentials.service.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.Credentials', ['ngResource', 'deskworks.config']).factory('Credentials', ["$resource", "$timeout", "deskworksConfig", function ($resource, $timeout, deskworksConfig) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/credentials/:login'));
  return {
    get: function get(login) {
      return res.get({
        login: login
      }).$promise.then(function (cr) {
        cr.login = login;
        return cr;
      });
    }
  };
}]);

/***/ }),

/***/ "./common/services/dashboard.service.js":
/*!**********************************************!*\
  !*** ./common/services/dashboard.service.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dashboard.service', ['ngResource', 'deskworks.config', 'deskworks.helper', 'datesDeserializer']).service('dashboardService', ["$resource", "deskworksConfig", "helper", "datesDeserializer", function ($resource, deskworksConfig, helper, datesDeserializer) {
  var dashboardService = this;
  var desDates = datesDeserializer(['reservationsToday.startTime', 'reservationsToday.endTime', 'reservationsToday.updatedAt', 'reservationsTomorrow.startTime', 'reservationsTomorrow.endTime', 'reservationsTomorrow.updatedAt', 'reservationsConflicts.startTime', 'reservationsConflicts.endTime']);
  var resCenterStats = $resource(deskworksConfig.getApiAbsUrl('/dashboard/center-stats'), {}, {
    get: {
      method: 'GET',
      isArray: false,
      transformResponse: [desDates, deserialize]
    },
    update: {
      method: 'PUT'
    }
  });
  var resReservationConflicts = $resource(deskworksConfig.getApiAbsUrl('/dashboard/reservations-conflicts/:conflictId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  /**
   * Center Stats for admin/coordinator
   */

  dashboardService.getCenterStats = function (centerId) {
    return resCenterStats.get({
      centerId: centerId
    }).$promise;
  },
  /**
   * Reset Reservation Conflict
   */
  dashboardService.resetReservationConflict = function (conflictId) {
    return resReservationConflicts.delete({
      conflictId: conflictId
    }).$promise;
  };

  function deserialize(data) {
    data = angular.fromJson(data);
    data.selfRegistrations.forEach(function (user) {
      user.fullNameCompany = helper.join([user.company, user.fullName], ', ');
    });
    return data;
  }
}]));

/***/ }),

/***/ "./common/services/dw-config.service.js":
/*!**********************************************!*\
  !*** ./common/services/dw-config.service.js ***!
  \**********************************************/
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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);




angular.module('deskworks.config', []).provider('deskworksConfig', function () {
  'use strict';

  var apiUrl = '/api/v1',
      apiPostfix = '';
  var defaultRoute = '/dashboard';
  var wsUrl = null;
  var siteId = null;
  var sitesUrl = 'https://sites.satellitedeskworks.com/';
  return {
    setApiUrl: function setApiUrl(url) {
      apiUrl = url;
    },
    setApiPostfix: function setApiPostfix(postfix) {
      apiPostfix = postfix;
    },
    getDefaultRoute: function getDefaultRoute() {
      return defaultRoute;
    },
    setDefaultRoute: function setDefaultRoute(route) {
      defaultRoute = route;
    },
    setWsUrl: function setWsUrl(url) {
      wsUrl = url;
    },
    setSiteId: function setSiteId(id) {
      siteId = id;
    },
    setSitesUrl: function setSitesUrl(url) {
      sitesUrl = url;
    },
    $get: ["$window", function $get($window) {
      return {
        getApiDomain: function getApiDomain(customApiUrl) {
          var match = (customApiUrl || apiUrl).match(/^(.*:)\/\/([A-Za-z0-9\-\.]+)(:[0-9]+)?(.*)$/i);
          if (match && match[2]) return match[2];
          return $window.location.hostname;
        },
        getApiOrigin: function getApiOrigin() {
          var _context, _context2;

          var match = apiUrl.match(/^(.*:)\/\/([A-Za-z0-9\-\.]+)(:[0-9]+)?(.*)$/i);
          if (match && match[2]) return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = "".concat(match[1], "//")).call(_context2, match[2])).call(_context, match[3] || '');
          return $window.location.origin;
        },
        getSiteId: function getSiteId() {
          if (siteId) return siteId;
          var domain = this.getApiDomain(null).split('.');
          domain = domain[domain.length - 3];
          if (!domain) throw new Error('configuration issue: siteId is undefined');
          return domain;
        },
        getApiAbsUrl: function getApiAbsUrl(relativeUrl) {
          return apiUrl + relativeUrl + apiPostfix;
        },
        getDefaultRoute: function getDefaultRoute() {
          return defaultRoute;
        },
        getWsUrl: function getWsUrl() {
          return wsUrl;
        },
        getSitesUrl: function getSitesUrl() {
          return sitesUrl;
        }
      };
    }]
  };
});

/***/ }),

/***/ "./common/services/inventory/membership-category.service.js":
/*!******************************************************************!*\
  !*** ./common/services/inventory/membership-category.service.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.inventory.membershipCategory.service', ['ngResource', 'deskworks.config']).factory('membershipCategoryService', ["$resource", "$q", "deskworksConfig", function ($resource, $q, deskworksConfig) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/membership-types/:membershipTypeId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    },
    get: function get(membershipTypeId) {
      return res.get({
        membershipTypeId: membershipTypeId
      }).$promise;
    },
    create: function create(data) {
      return res.save({}, data).$promise;
    },
    update: function update(membershipTypeId, data) {
      return res.update({
        membershipTypeId: membershipTypeId
      }, data).$promise;
    },
    delete: function _delete(membershipTypeId) {
      return res.delete({
        membershipTypeId: membershipTypeId
      }).$promise;
    },
    save: function save(membershipCategory) {
      return (membershipCategory.id ? res.update({
        membershipTypeId: membershipCategory.id
      }, membershipCategory).$promise : res.save({}, membershipCategory).$promise).then(function (result) {
        membershipCategory.id = result.id;
        return result;
      });
    }
  };
}]);

/***/ }),

/***/ "./common/services/inventory/opts-count-check-ins-per.service.js":
/*!***********************************************************************!*\
  !*** ./common/services/inventory/opts-count-check-ins-per.service.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for 'Count Check-Ins per' in Inventory / Product Edit
 */
angular.module('deskworks.inventory.optsCountCheckInsPer', []).factory('optsCountCheckInsPer', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 'coMember',
    _name: 'PRODUCTS.COUNT_CHECK_INS_PER.CO_MEMBER'
  }, {
    id: 'company',
    _name: 'PRODUCTS.COUNT_CHECK_INS_PER.COMPANY'
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

/***/ "./common/services/inventory/opts-pass-max.service.js":
/*!************************************************************!*\
  !*** ./common/services/inventory/opts-pass-max.service.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for 'Max Passes billed in 24-hour period' in Inventory / Product Edit
 */
angular.module('deskworks.inventory.optsPassMax', []).factory('optsPassMax', function () {
  'use strict';

  return [{
    id: '1',
    name: '1'
  }, {
    id: '2',
    name: '2'
  }, {
    id: '4',
    name: '4'
  }, {
    id: '0',
    name: '∞'
  }];
});

/***/ }),

/***/ "./common/services/inventory/opts-pass-min.service.js":
/*!************************************************************!*\
  !*** ./common/services/inventory/opts-pass-min.service.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for 'Min time billed after 1st Pass' in Inventory / Product Edit
 */
angular.module('deskworks.inventory.optsPassMin', []).factory('optsPassMin', function () {
  'use strict';

  return [{
    id: '0.25',
    name: '¼'
  }, {
    id: '0.5',
    name: '½'
  }, {
    id: '1.0',
    name: '1'
  }, {
    id: '2.0',
    name: '2'
  }];
});

/***/ }),

/***/ "./common/services/inventory/opts-product-type.service.js":
/*!****************************************************************!*\
  !*** ./common/services/inventory/opts-product-type.service.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Product Type
 */
angular.module('deskworks.inventory.optsProductType', []).factory('optsProductType', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'membership',
    _name: 'PRODUCTS.PRODUCT_TYPE.MEMBERSHIP',
    import: 'Membership'
  }, {
    id: 'registration',
    _name: 'PRODUCTS.PRODUCT_TYPE.REGISTRATION',
    import: 'Registration'
  }, {
    id: 'rental',
    _name: 'PRODUCTS.PRODUCT_TYPE.RENTAL_HOURS',
    import: 'Rental Hours'
  }, {
    id: 'print',
    _name: 'PRODUCTS.PRODUCT_TYPE.PRINT',
    import: 'Print'
  }, {
    id: 'services',
    _name: 'PRODUCTS.PRODUCT_TYPE.SERVICES',
    import: 'Services'
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

/***/ "./common/services/inventory/pass-product.service.js":
/*!***********************************************************!*\
  !*** ./common/services/inventory/pass-product.service.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.PassProduct.service', ['ngResource', 'deskworks.config']).factory('PassProduct', ["$resource", "$q", "deskworksConfig", function ($resource, $q, deskworksConfig) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/pass-products'));
  return {
    query: function query(centerId) {
      return res.query({
        centerId: centerId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/inventory/pricelist.service.js":
/*!********************************************************!*\
  !*** ./common/services/inventory/pricelist.service.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.inventory.priceList.service', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('priceListService', ["$resource", "$q", "datesDeserializer", "deskworksConfig", function ($resource, $q, datesDeserializer, deskworksConfig) {
  'use strict';

  var desDates = datesDeserializer(['date']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/price-lists/:priceListId'), {}, {
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
  var resProduct = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/price-lists/:priceListId/price-list-products/:productRelId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    getPricelists: function getPricelists(centerId) {
      return res.query({
        centerId: centerId
      }).$promise;
    },
    getPricelist: function getPricelist(centerId, priceListId) {
      if (priceListId === 'new') {
        var pl = {
          id: 'new',
          name: '',
          visibleForVisitors: true,
          useFor: 'none',
          products: [],
          options: {
            products: []
          }
        };
        return $q.when(pl);
      }

      return res.get({
        centerId: centerId,
        priceListId: priceListId
      }).$promise;
    },
    createPricelist: function createPricelist(centerId, data) {
      return res.save({
        centerId: centerId
      }, data).$promise;
    },
    updatePricelist: function updatePricelist(centerId, priceListId, data) {
      return res.update({
        centerId: centerId,
        priceListId: priceListId
      }, data).$promise;
    },
    deletePricelist: function deletePricelist(centerId, priceListId) {
      return res.delete({
        centerId: centerId,
        priceListId: priceListId
      }).$promise;
    },
    clonePricelist: function clonePricelist(centerId, priceListId, dstCenterId) {
      return res.save({
        centerId: centerId,
        copy: priceListId,
        destination: dstCenterId
      }, {}).$promise;
    },
    save: function save(centerId, priceList) {
      // save (create/update) price list
      return (priceList.id ? res.update({
        centerId: centerId,
        priceListId: priceList.id
      }, priceList).$promise : res.save({
        centerId: centerId
      }, priceList).$promise).then(function (result) {
        priceList.id = result.id;
        return result;
      });
    },
    createProduct: function createProduct(centerId, priceListId, data) {
      return resProduct.save({
        centerId: centerId,
        priceListId: priceListId
      }, data).$promise;
    },
    updateProduct: function updateProduct(centerId, priceListId, productRelId, data) {
      return resProduct.update({
        centerId: centerId,
        priceListId: priceListId,
        productRelId: productRelId
      }, data).$promise;
    },
    deleteProduct: function deleteProduct(centerId, priceListId, productRelId) {
      return resProduct.delete({
        centerId: centerId,
        priceListId: priceListId,
        productRelId: productRelId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/inventory/product-category.service.js":
/*!***************************************************************!*\
  !*** ./common/services/inventory/product-category.service.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.ProductCategory', ['ngResource', 'deskworks.config', 'deskworks.helper']).factory('ProductCategory', ["$resource", "$q", "deskworksConfig", "helper", function ($resource, $q, deskworksConfig, helper) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/product-categories/:productCategoryId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    },
    save: function save(productCategory) {
      if (productCategory.id) return res.update({
        productCategoryId: productCategory.id
      }, productCategory).$promise;
      return res.save(productCategory).$promise.then(function (result) {
        productCategory.id = result.id;
      });
    },
    delete: function _delete(productCategoryId) {
      return res.delete({
        productCategoryId: productCategoryId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/inventory/product.service.js":
/*!******************************************************!*\
  !*** ./common/services/inventory/product.service.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.inventory.product.service', ['ngResource', 'deskworks.config', 'deskworks.inventory.optsProductType', 'deskworks.billing.optsBillingFrequency', 'deskworks.inventory.optsPassMin', 'deskworks.inventory.optsPassMax']).factory('productService', ["$resource", "$q", "$filter", "deskworksConfig", "helper", "optsProductType", "optsBillingFrequency", "optsPassMin", "optsPassMax", function ($resource, $q, $filter, deskworksConfig, helper, optsProductType, optsBillingFrequency, optsPassMin, optsPassMax) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/products/:productId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resMembership = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/membership-products'));
  var resPriceList = $resource(deskworksConfig.getApiAbsUrl('/products/:productId/price-list-products/:priceListRelId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    /**
     * Get new product template.
     */
    new: function _new() {
      return this.resolve({});
    },
    getProducts: function getProducts() {
      return res.query().$promise;
    },
    getMembershipProducts: function getMembershipProducts(centerId) {
      return resMembership.query({
        centerId: centerId
      }).$promise;
    },
    getProduct: function getProduct(productId) {
      var self = this;
      return res.get({
        productId: productId
      }).$promise.then(function (result) {
        return self.resolve(result);
      });
    },
    createProduct: function createProduct(product) {
      var self = this;
      return res.save({}, self.unresolve(product)).$promise;
    },
    updateProduct: function updateProduct(product) {
      var self = this;
      return res.update({
        productId: product.id
      }, self.unresolve(product)).$promise;
    },
    deleteProduct: function deleteProduct(productId) {
      return res.delete({
        productId: productId
      }).$promise;
    },
    save: function save(product) {
      // save (create/update) product
      var self = this;
      return (product.id ? res.update({
        productId: product.id
      }, self.unresolve(product)).$promise : res.save({}, self.unresolve(product)).$promise).then(function (result) {
        product.id = result.id;
        return result;
      });
    },
    createPriceList: function createPriceList(productId, data) {
      return resPriceList.save({
        productId: productId
      }, data).$promise;
    },
    updatePriceList: function updatePriceList(productId, priceListRelId, data) {
      return resPriceList.update({
        productId: productId,
        priceListRelId: priceListRelId
      }, data).$promise;
    },
    deletePriceList: function deletePriceList(productId, priceListRelId) {
      return resPriceList.delete({
        productId: productId,
        priceListRelId: priceListRelId
      }).$promise;
    },
    savePriceItem: function savePriceItem(productId, priceItem) {
      return (priceItem.id ? resPriceList.update({
        productId: productId,
        priceListRelId: priceItem.id
      }, priceItem).$promise : resPriceList.save({
        productId: productId
      }, priceItem).$promise).then(function (result) {
        priceItem.id = result.id;
        return result;
      });
    },

    /**
     * Resolves options/dependencies in product from GET request
     */
    resolve: function resolve(product) {
      if (!product.priceLists) {
        product.priceLists = [];
      }

      if (!product.options) {
        product.options = {};
      }

      product.options.productTypes = optsProductType;
      product.options.billingFrequencies = optsBillingFrequency; //if(product.id === 'new') {

      if (!product.id) {
        // New Product
        //product.id = 'new';
        product.type = optsProductType[0];

        if (product.options.membershipTypes && product.options.membershipTypes.length > 0) {
          product.membershipType = product.options.membershipTypes[0];
        }

        product.billingFrequency = product.options.billingFrequencies[0];
        product.passMin = optsPassMin[0].id;
        product.passMax = optsPassMax[2];
        product.taxable = true;
        product.reserveWithNonMemberRules = false;
        product.countCheckInsPer = 'company';
        product.hideInSelfRegistration = true;
        product.showInSelfRegistration = false;
        product.hasRegistrationFee = true;
      } else {
        product.typeId = product.type; // Existing Product

        product.type = helper.findByKeyValue(optsProductType, 'id', product.type); // Convert membershipTypeId -> membershipType

        if (product.options.membershipTypes && product.options.membershipTypes.length > 0) {
          product.membershipType = helper.findByKeyValue(product.options.membershipTypes, 'id', product.membershipTypeId);
        } // Convert priceListId -> options.priceList reference


        if (product.options.priceLists && product.options.priceLists.length > 0) {
          product.priceLists.forEach(function (priceList) {
            priceList.priceList = helper.findByKeyValue(product.options.priceLists, 'id', priceList.priceListId);
            priceList.price = $filter('price')(priceList.price);

            if (priceList.reservationCredit) {
              priceList.reservationCredit = $filter('price')(priceList.reservationCredit);
            }

            if (priceList.passQty === null) {
              priceList.passQty = 0;
            }
          });
        }

        product.billingFrequency = helper.findByKeyValue(product.options.billingFrequencies, 'id', product.billingFrequency);
        product.billingFrequency = product.billingFrequency || product.options.billingFrequencies[0];
        product.passMin = product.passMin || optsPassMin[0].id;
        product.passMax = helper.findByKeyValue(optsPassMax, 'id', product.passMax) || optsPassMax[2];
        product.reservationTypeId = product.reservationTypeId && product.reservationTypeId.toString() || product.reservationTypeId;
        product.showInSelfRegistration = !product.hideInSelfRegistration;
      }

      return product;
    },

    /**
     * Converts Product to data ready for POST/PUT
     */
    unresolve: function unresolve(product) {
      var data = {
        name: product.name,
        type: product.type ? product.type.id : product.typeId,
        description: product.description,
        custom: !!product.custom,
        productCategoryId: product.productCategoryId,
        productNumber: '' + product.productNumber,
        taxable: product.taxable,
        hideInSelfRegistration: !product.showInSelfRegistration,
        hasRegistrationFee: !!product.hasRegistrationFee
      };

      if (product.type && product.type.id === 'membership') {
        data.isCreditable = !!product.isCreditable;
        data.membershipTypeId = product.membershipType ? product.membershipType.id : undefined;
        data.reserveWithNonMemberRules = !!product.reserveWithNonMemberRules;
        data.countCheckInsPer = product.countCheckInsPer;
        data.hasPasses = !!product.hasPasses;
        data.trackAcrossAllCenters = !!product.trackAcrossAllCenters;

        if (data.hasPasses && product.passProduct) {
          data.passProductId = product.passProduct.id;
        }

        if (product.securityDepositAmount) data.securityDepositAmount = +product.securityDepositAmount;
        data.printerUsageFreeCopiesSettings = product.printerUsageFreeCopiesSettings;
      }

      if (product.type && (product.type.id === 'membership' || product.type.id === 'services')) {
        data.billingFrequency = product.billingFrequency.id;
      }

      if (product.type && product.type.id === 'rental') {
        data.passSize = product.passSize;
        data.passMin = product.passMin;
        data.passMax = product.passMax.id;
        data.allowReservationCredits = !!product.allowReservationCredits;
        data.canBuyOnSplashPage = !!product.canBuyOnSplashPage;
        data.reservationTypeId = product.reservationTypeId;
      }

      return data;
    }
  };
}]));

/***/ }),

/***/ "./common/services/inventory/reservation-category.service.js":
/*!*******************************************************************!*\
  !*** ./common/services/inventory/reservation-category.service.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);

angular.module('deskworks.reservationCategory.service', ['ngResource', 'deskworks.config', 'ngFileUpload']).factory('reservationCategoryService', ["$resource", "$q", "Upload", "deskworksConfig", function ($resource, $q, Upload, deskworksConfig) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/reservation-types/:reservationTypeId/:unavailableDates'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resPhoto = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/reservation-types/:reservationTypeId/photos/:photoId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get(centerId, reservationTypeId) {
      if (reservationTypeId === 'new') {
        return $q.when({
          id: 'new',
          cancellationNonMemberNoticeHours: 24,
          cancellationMemberNoticeHours: 24
        });
      }

      return res.get({
        centerId: centerId,
        reservationTypeId: reservationTypeId
      }).$promise.then(function (cat) {
        if (cat.photos[0] && cat.photos[0].id === null) {
          var _context;

          _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = cat.photos).call(_context, 0, 1);
        }

        return cat;
      });
    },
    query: function query(centerId) {
      return res.query({
        centerId: centerId
      }).$promise;
    },
    create: function create(centerId, data) {
      return res.save({
        centerId: centerId
      }, data).$promise;
    },
    update: function update(centerId, reservationTypeId, data) {
      return res.update({
        centerId: centerId,
        reservationTypeId: reservationTypeId
      }, data).$promise;
    },
    delete: function _delete(centerId, reservationTypeId) {
      return res.delete({
        centerId: centerId,
        reservationTypeId: reservationTypeId
      }).$promise;
    },
    save: function save(centerId, resCategory) {
      return resCategory.id ? res.update({
        centerId: centerId,
        reservationTypeId: resCategory.id
      }, resCategory).$promise : res.save({
        centerId: centerId
      }, resCategory).$promise.then(function (result) {
        resCategory.id = result.id;
        return result;
      });
    },
    getUnavailableDates: function getUnavailableDates(centerId, reservationTypeId) {
      return res.query({
        centerId: centerId,
        reservationTypeId: reservationTypeId,
        unavailableDates: 'unavailable-dates'
      }).$promise;
    },

    /**
     * Photos
     */
    createPhoto: function createPhoto(centerId, reservationTypeId, file) {
      return Upload.upload({
        url: deskworksConfig.getApiAbsUrl('/centers/' + centerId + '/reservation-types/' + reservationTypeId + '/photos'),
        method: 'POST',
        withCredentials: true,
        data: {
          photo: file
        }
      });
    },
    updatePhoto: function updatePhoto(centerId, reservationTypeId, photoId, file) {
      return Upload.upload({
        url: deskworksConfig.getApiAbsUrl('/centers/' + centerId + '/reservation-types/' + reservationTypeId + '/photos/' + photoId),
        method: 'PUT',
        withCredentials: true,
        data: {
          photo: file
        }
      });
    },
    deletePhoto: function deletePhoto(centerId, reservationTypeId, photoId) {
      return resPhoto.delete({
        centerId: centerId,
        reservationTypeId: reservationTypeId,
        photoId: photoId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/members/check-in-log.service.js":
/*!*********************************************************!*\
  !*** ./common/services/members/check-in-log.service.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);

angular.module('deskworks.checkInLog.service', ['ngResource', 'deskworks.config']).factory('checkInLogService', ["$resource", "$filter", "deskworksConfig", "helper", function ($resource, $filter, deskworksConfig, helper) {
  'use strict';

  var toDate = $filter('toDate');
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/logs/:logId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    getLog: function getLog(centerId, userId, page, pageSize, macAddress) {
      return res.get({
        centerId: centerId,
        userId: userId,
        page: page,
        pageSize: pageSize,
        macAddress: macAddress
      }).$promise.then(function (logData) {
        logData.checkInTime = toDate(logData.checkInTime);
        logData.log.forEach(function (rec) {
          rec.time = toDate(rec.time);
        });
        return logData;
      });
    },
    updateLog: function updateLog(centerId, userId, logId, data) {
      return res.update({
        centerId: centerId,
        userId: userId,
        logId: logId
      }, data).$promise;
    },
    deleteLog: function deleteLog(centerId, userId, logId) {
      return res.delete({
        centerId: centerId,
        userId: userId,
        logId: logId
      }).$promise;
    },
    checkInOut: function checkInOut(centerId, userId, operation, time) {
      time = $filter('date')(time, 'iso');
      return res.save({
        centerId: centerId,
        userId: userId
      }, {
        operation: operation,
        time: time
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/members/checked-in-members.service.js":
/*!***************************************************************!*\
  !*** ./common/services/members/checked-in-members.service.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.CheckedInMembers', ['ngResource', 'deskworks.config']).factory('CheckedInMembers', ["$resource", "$timeout", "$filter", "deskworksConfig", "helper", function ($resource, $timeout, $filter, deskworksConfig, helper) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/checked-in-members'), {}, {});
  return {
    query: function query(centerId) {
      return res.query({
        centerId: centerId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/members/checked-in-users.service.js":
/*!*************************************************************!*\
  !*** ./common/services/members/checked-in-users.service.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.CheckedInUsers', ['ngResource', 'deskworks.config']).factory('CheckedInUsers', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/checked-in-users'));
  return {
    query: function query(centerId) {
      return res.query({
        centerId: centerId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/members/member-usage.service.js":
/*!*********************************************************!*\
  !*** ./common/services/members/member-usage.service.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.memberUsageService', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('memberUsageService', ["$resource", "$filter", "deskworksConfig", "helper", "datesDeserializer", function ($resource, $filter, deskworksConfig, helper, datesDeserializer) {
  'use strict';

  var desDates = datesDeserializer(['usages.date', 'usages.reservationLog.startTime', 'usages.reservationLog.endTime', 'usages.checkInLog.startTime', 'usages.checkInLog.endTime']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/member-usages/:memberUsageId'), {}, {
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
  var resUsage = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/member-usages/:memberUsageId/usages/:usageId'), {}, {});
  return {
    query: function query(centerId, userId, page, pageSize) {
      return res.query({
        centerId: centerId || 0,
        userId: userId,
        page: page || 1,
        pageSize: pageSize || 10
      }).$promise;
    },
    get: function get(centerId, userId, memberUsageId, page, pageSize) {
      return res.get({
        centerId: centerId,
        userId: userId,
        memberUsageId: memberUsageId,
        page: page || 1,
        pageSize: pageSize || 10
      }).$promise;
    },
    deletePassRefill: function deletePassRefill(centerId, userId, memberUsageId, usageId) {
      return resUsage.delete({
        centerId: centerId,
        userId: userId,
        memberUsageId: memberUsageId,
        usageId: usageId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/members/membership.service.js":
/*!*******************************************************!*\
  !*** ./common/services/members/membership.service.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.membership.service', ['ngResource', 'deskworks.config']).factory('membershipService', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  'use strict';

  var resType = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/membership-types'));
  return {
    query: function query(centerId) {
      return resType.query({
        centerId: centerId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/members/opts-our-members-sort.service.js":
/*!******************************************************************!*\
  !*** ./common/services/members/opts-our-members-sort.service.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Members -> Our Members -> Order By
 */
angular.module('deskworks.optsOurMembersSort', []).factory('optsOurMembersSort', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'name',
    _name: 'OUR_MEMBERS.SORT.NAME'
  }, {
    id: 'occupation',
    _name: 'OUR_MEMBERS.SORT.OCCUPATION'
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

/***/ "./common/services/members/our-members.service.js":
/*!********************************************************!*\
  !*** ./common/services/members/our-members.service.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.OurMembers', ['ngResource', 'deskworks.config']).factory('OurMembers', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/our-members'));
  return {
    query: function query(params) {
      var p = {
        centerId: params.centerId || null,
        sort: _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_0___default()(params) || null,
        q: params.q || null,
        limit: params.limit || null,
        offset: params.offset || null
      };
      return res.query(p).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/members/usage-entry.service.js":
/*!********************************************************!*\
  !*** ./common/services/members/usage-entry.service.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.usageEntryService', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('usageEntryService', ["$resource", "$q", "$filter", "deskworksConfig", "helper", "datesDeserializer", function ($resource, $q, $filter, deskworksConfig, helper, datesDeserializer) {
  'use strict';

  var fdate = $filter('date');
  var desDates = datesDeserializer(['usages.checkInTime', 'usages.checkOutTime']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/usage-entries/:usageId'), {}, {
    query: {
      method: 'GET',
      isArray: false,
      transformResponse: [angular.fromJson, desDates]
    },
    save: {
      method: 'POST',
      transformRequest: [serializer, angular.toJson]
    },
    update: {
      method: 'PUT',
      transformRequest: [serializer, angular.toJson]
    }
  });

  function serializer(data) {
    data = angular.extend({}, data);
    data.checkInTime = fdate(data.checkInTime, 'iso');
    data.checkOutTime = fdate(data.checkOutTime, 'iso');
    return data;
  }

  return {
    query: function query(centerId, userId, page, pageSize) {
      return res.query({
        userId: userId,
        centerId: centerId,
        page: page,
        pageSize: pageSize
      }).$promise;
    },
    get: function get(centerId, userId, usageId) {
      if (usageId === 'new') {
        return $q.when({
          id: 'new',
          checkInTime: moment(),
          checkOutTime: moment(),
          notes: ''
        });
      }

      return res.query({
        userId: userId,
        centerId: centerId
      }).$promise.then(function (usages) {
        // as we have only get usages array operation, we have to find necessary usage by id
        var usage = helper.findByKeyValue(usages.usages, 'id', usageId);
        if (usage) return usage;
        return $q.reject({
          data: {
            error: 'Failed to find usage with id=' + usageId
          }
        });
      });
    },
    save: function save(centerId, userId, usage) {
      if (!usage.id || usage.id === 'new') return res.save({
        userId: userId,
        centerId: centerId
      }, usage).$promise;
      return res.update({
        userId: userId,
        centerId: centerId,
        usageId: usage.id
      }, usage).$promise;
    },
    delete: function _delete(centerId, userId, usageId) {
      return res.delete({
        userId: userId,
        centerId: centerId,
        usageId: usageId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/notifications.service.js":
/*!**************************************************!*\
  !*** ./common/services/notifications.service.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.notifications.service', ['ngResource', 'deskworks.config', 'deskworks.helper']).factory('Notifications', ["$resource", "$timeout", "deskworksConfig", "helper", function ($resource, $timeout, deskworksConfig, helper) {
  var methods = {
    update: {
      method: 'PUT'
    }
  };
  var res = $resource(deskworksConfig.getApiAbsUrl('/notifications/:id'), {}, methods);
  var resTpl = $resource(deskworksConfig.getApiAbsUrl('/email-templates/:tplId'), {}, methods);
  var resTplAtt = $resource(deskworksConfig.getApiAbsUrl('/email-templates/:tplId/attachments/:id'), {}, methods);
  var resBulkInvoices = $resource(deskworksConfig.getApiAbsUrl('/setup/bulk-invoices'));
  var resRecurringInvoices = $resource(deskworksConfig.getApiAbsUrl('/setup/recurring-invoices'));
  var resExpiredCardEmail = $resource(deskworksConfig.getApiAbsUrl('/setup/expired-card-emails'));
  var resDeclinedCardEmail = $resource(deskworksConfig.getApiAbsUrl('/setup/declined-card-emails'));
  var resWelcomeLetter = $resource(deskworksConfig.getApiAbsUrl('/setup/welcome-letters'));
  var resWelcomeLetterAtt = $resource(deskworksConfig.getApiAbsUrl('/setup/welcome-letters/123/attachments/:attachmentId'));
  var resResConfirmation = $resource(deskworksConfig.getApiAbsUrl('/setup/reservation-confirmations'));
  var resResConfirmationAtt = $resource(deskworksConfig.getApiAbsUrl('/setup/reservation-confirmations/123/attachments/:attachmentId'));
  var resCalSyncError = $resource(deskworksConfig.getApiAbsUrl('/setup/calendar-sync-error-emails'));
  var resPassesUsedUp = $resource(deskworksConfig.getApiAbsUrl('/setup/passes-used-up-emails'));
  var resBucketUsedUp = $resource(deskworksConfig.getApiAbsUrl('/setup/bucket-used-up-emails'));
  var resMsgBoard = $resource(deskworksConfig.getApiAbsUrl('/dw-mail/message-board/templates/:templateId'), {}, methods);
  var resDeskTablet = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/desk-tablet-template'), {}, methods);
  return {
    get: function get(id) {
      return res.get({
        id: id
      }).$promise;
    },
    save: function save(id, data) {
      return res.update({
        id: id
      }, data).$promise;
    },
    getEmailTemplate: function getEmailTemplate(tplId) {
      return resTpl.get({
        tplId: tplId
      }).$promise;
    },
    saveEmailTemplate: function saveEmailTemplate(tplId, data) {
      return resTpl.update({
        tplId: tplId
      }, data).$promise;
    },
    attachEmailTemplate: function attachEmailTemplate(tplId, data) {
      return resTplAtt.save({
        tplId: tplId
      }, data).$promise;
    },
    detachEmailTemplate: function detachEmailTemplate(tplId, id) {
      return resTplAtt.delete({
        tplId: tplId,
        id: id
      }).$promise;
    },

    /**
     * Bulk Invoices
     */
    getBulkInvoices: function getBulkInvoices() {
      return resBulkInvoices.get({}).$promise;
    },
    saveBulkInvoices: function saveBulkInvoices(data) {
      return resBulkInvoices.save({}, data).$promise;
    },

    /**
     * Recurring Invoices
     */
    getRecurringInvoices: function getRecurringInvoices() {
      return resRecurringInvoices.get({}).$promise;
    },
    saveRecurringInvoices: function saveRecurringInvoices(data) {
      return resRecurringInvoices.save({}, data).$promise;
    },

    /**
     * Expired Card Email
     */
    getExpiredCardEmail: function getExpiredCardEmail() {
      return resExpiredCardEmail.get({}).$promise;
    },
    saveExpiredCardEmail: function saveExpiredCardEmail(data) {
      return resExpiredCardEmail.save({}, data).$promise;
    },

    /**
     * Declined Card Email
     */
    getDeclinedCardEmail: function getDeclinedCardEmail() {
      return resDeclinedCardEmail.get({}).$promise;
    },
    saveDeclinedCardEmail: function saveDeclinedCardEmail(data) {
      return resDeclinedCardEmail.save({}, data).$promise;
    },

    /**
     * Welcome Letter
     */
    getWelcomeLetter: function getWelcomeLetter() {
      return resWelcomeLetter.get({}).$promise;
    },
    saveWelcomeLetter: function saveWelcomeLetter(data) {
      return resWelcomeLetter.save({}, data).$promise;
    },
    attachWelcomeLetter: function attachWelcomeLetter(data) {
      return resWelcomeLetterAtt.save({}, data).$promise;
    },
    detachWelcomeLetter: function detachWelcomeLetter(attachmentId) {
      return resWelcomeLetterAtt.delete({
        attachmentId: attachmentId
      }).$promise;
    },

    /**
     * Calendar Sync Error Email
     */
    getCalSyncErrorEmail: function getCalSyncErrorEmail() {
      return resCalSyncError.get({}).$promise;
    },
    saveCalSyncErrorEmail: function saveCalSyncErrorEmail(data) {
      return resCalSyncError.save({}, data).$promise;
    },

    /**
     * Passes Used Up
     */
    getPassesUsedUpEmail: function getPassesUsedUpEmail() {
      return resPassesUsedUp.get({}).$promise;
    },
    savePassesUsedUpEmail: function savePassesUsedUpEmail(data) {
      return resPassesUsedUp.save({}, data).$promise;
    },

    /**
     * Bucket Used Up
     */
    getBucketUsedUpEmail: function getBucketUsedUpEmail() {
      return resBucketUsedUp.get({}).$promise;
    },
    saveBucketUsedUpEmail: function saveBucketUsedUpEmail(data) {
      return resBucketUsedUp.save({}, data).$promise;
    },

    /**
     * Reservation Confirmation
     */
    getReservationConfirmation: function getReservationConfirmation() {
      return resResConfirmation.get({}).$promise;
    },
    saveReservationConfirmation: function saveReservationConfirmation(data) {
      return resResConfirmation.save({}, data).$promise;
    },
    attachReservationConfirmation: function attachReservationConfirmation(data) {
      return resResConfirmationAtt.save({}, data).$promise;
    },
    detachReservationConfirmation: function detachReservationConfirmation(attachmentId) {
      return resResConfirmationAtt.delete({
        attachmentId: attachmentId
      }).$promise;
    },

    /**
     * Message Board Notices
     */
    getMessageBoardEmailTemplate: function getMessageBoardEmailTemplate(templateId) {
      return resMsgBoard.get({
        templateId: templateId
      }).$promise;
    },
    saveMessageBoardEmailTemplate: function saveMessageBoardEmailTemplate(templateId, data) {
      return resMsgBoard.update({
        templateId: templateId
      }, data).$promise;
    },
    getDeskTabletTemplate: function getDeskTabletTemplate(centerId) {
      return resDeskTablet.get({
        centerId: centerId
      }).$promise;
    },
    saveDeskTabletTemplate: function saveDeskTabletTemplate(centerId, data) {
      return resDeskTablet.update({
        centerId: centerId
      }, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/reservation-rules/opts-days-in-advance.service.js":
/*!***************************************************************************!*\
  !*** ./common/services/reservation-rules/opts-days-in-advance.service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Reservation Rules / Days in Advance Reservations Permitted
 */
angular.module('deskworks.reservationRules.optsDaysInAdvance', []).factory('optsDaysInAdvance', ["$rootScope", "$translate", "$filter", function ($rootScope, $translate, $filter) {
  'use strict';

  var opts = [{
    id: 0,
    _name: 'RESERVATION_RULES.UNLIMITED'
  }, {
    id: 180
  }, {
    id: 120
  }, {
    id: 90
  }, {
    id: 60
  }, {
    id: 45
  }, {
    id: 30
  }, {
    id: 14
  }, {
    id: 7
  }, {
    id: 1
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

/***/ "./common/services/reservation-rules/opts-reservation-limit-max.service.js":
/*!*********************************************************************************!*\
  !*** ./common/services/reservation-rules/opts-reservation-limit-max.service.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Reservation Rules / Maximum Hours/Day/Person
 */
angular.module('deskworks.reservationRules.optsReservationLimitMax', []).factory('optsReservationLimitMax', ["$rootScope", "$translate", "$filter", function ($rootScope, $translate, $filter) {
  'use strict';

  var opts = [{
    id: '0.0',
    _name: 'RESERVATION_RULES.UNLIMITED'
  }, {
    id: '12.0',
    value: 12,
    unit: 'hours'
  }, {
    id: '10.0',
    value: 10,
    unit: 'hours'
  }, {
    id: '9.0',
    value: 9,
    unit: 'hours'
  }, {
    id: '8.0',
    value: 8,
    unit: 'hours'
  }, {
    id: '7.0',
    value: 7,
    unit: 'hours'
  }, {
    id: '6.0',
    value: 6,
    unit: 'hours'
  }, {
    id: '5.0',
    value: 5,
    unit: 'hours'
  }, {
    id: '4.0',
    value: 4,
    unit: 'hours'
  }, {
    id: '3.0',
    value: 3,
    unit: 'hours'
  }, {
    id: '2.0',
    value: 2,
    unit: 'hours'
  }, {
    id: '1.0',
    value: 1,
    unit: 'hours'
  }, {
    id: '0.5',
    value: 30,
    unit: 'minutes'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      if (opt._name) opt.name = $translate.instant(opt._name);
      if (opt.unit) opt.name = $filter(opt.unit)(opt.value) + '/' + $filter('days')(1, true);
    });
  }

  return opts;
}]);

/***/ }),

/***/ "./common/services/reservation-rules/opts-reservation-limit-min.service.js":
/*!*********************************************************************************!*\
  !*** ./common/services/reservation-rules/opts-reservation-limit-min.service.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Reservation Rules / Minimum Reservable Time
 */
angular.module('deskworks.reservationRules.optsReservationLimitMin', []).factory('optsReservationLimitMin', ["$rootScope", "$translate", "$filter", function ($rootScope, $translate, $filter) {
  'use strict';

  var opts = [{
    id: '0.25',
    value: 15,
    unit: 'minutes',
    name: '15 min'
  }, {
    id: '0.5',
    value: 30,
    unit: 'minutes',
    name: '30 min'
  }, {
    id: '1.0',
    value: 1,
    unit: 'hours',
    name: '1 hr'
  }, {
    id: '2.0',
    value: 2,
    unit: 'hours',
    name: '2 hr'
  }, {
    id: '4.0',
    value: 4,
    unit: 'hours',
    name: '4 hr'
  }, {
    id: '24.0',
    value: 1,
    unit: 'days',
    name: '1 day'
  }, {
    id: '72.0',
    value: 3,
    unit: 'days',
    name: '3 day'
  }, {
    id: '168.0',
    value: 1,
    unit: 'weeks',
    name: '1 week'
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = $filter(opt.unit)(opt.value);
    });
  }

  return opts;
}]);

/***/ }),

/***/ "./common/services/reservation-rules/opts-time-in-advance.service.js":
/*!***************************************************************************!*\
  !*** ./common/services/reservation-rules/opts-time-in-advance.service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Reservation Rules / Time in Advance Reservations Required
 */
angular.module('deskworks.reservationRules.optsTimeInAdvance', []).factory('optsTimeInAdvance', ["$rootScope", "$translate", "$filter", function ($rootScope, $translate, $filter) {
  'use strict';

  var opts = [{
    id: 0,
    _name: 'GLOBAL.NONE'
  }, {
    id: 1
  }, {
    id: 12
  }, {
    id: 24
  }, {
    id: 48
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      opt.name = opt._name ? $translate.instant(opt._name) : $filter('hours')(opt.id);
    });
  }

  return opts;
}]);

/***/ }),

/***/ "./common/services/reservation-rules/opts-who-can-reserve.service.js":
/*!***************************************************************************!*\
  !*** ./common/services/reservation-rules/opts-who-can-reserve.service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Reservation Rules / Who Can Reserve
 */
angular.module('deskworks.reservationRules.optsWhoCanReserve', []).factory('optsWhoCanReserve', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'anyone',
    _name: 'RESERVATION_RULES.WHO_CAN_RESERVE.ANYONE'
  }, {
    id: 'nonMember',
    _name: 'RESERVATION_RULES.WHO_CAN_RESERVE.NON_MEMBER'
  }, {
    id: 'member',
    _name: 'RESERVATION_RULES.WHO_CAN_RESERVE.MEMBER'
  }, {
    id: 'staffOnly',
    _name: 'RESERVATION_RULES.WHO_CAN_RESERVE.STAFF_ONLY'
  }, {
    id: 'notAvailable',
    _name: 'RESERVATION_RULES.WHO_CAN_RESERVE.NOT_AVAILABLE'
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

/***/ "./common/services/reservation-rules/reservation-rules.service.js":
/*!************************************************************************!*\
  !*** ./common/services/reservation-rules/reservation-rules.service.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/assign */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);






/**
 * ReservationRules resource
 */
angular.module('deskworks.reservationRules.service', ['ngResource', 'deskworks.config']).factory('ReservationRules', ["$resource", "$timeout", "$filter", "$rootScope", "$translate", "$locale", "helper", "deskworksConfig", function ($resource, $timeout, $filter, $rootScope, $translate, $locale, helper, deskworksConfig) {
  'use strict';

  var urlCenter = deskworksConfig.getApiAbsUrl('/centers/:centerId/reservation-rules/:ruleId');
  var urlUnit = deskworksConfig.getApiAbsUrl('/centers/:centerId/reservation-units/:reservationUnitId/reservation-rules/:ruleId');
  var resCenter = $resource(urlCenter, {
    centerId: '@centerId',
    ruleId: '@ruleId'
  }, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, deserialize]
    },
    save: {
      method: 'POST',
      transformRequest: [serialize, angular.toJson],
      transformResponse: [angular.fromJson, deserialize]
    },
    update: {
      method: 'PUT',
      transformRequest: [serialize, angular.toJson],
      transformResponse: [angular.fromJson, deserialize]
    },
    delete: {
      method: 'DELETE'
    }
  });
  var resUnit = $resource(urlUnit, {
    centerId: '@centerId',
    reservationUnitId: '@reservationUnitId',
    ruleId: '@ruleId'
  }, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, deserialize]
    },
    save: {
      method: 'POST',
      transformRequest: [serialize, angular.toJson],
      transformResponse: [angular.fromJson, deserialize]
    },
    update: {
      method: 'PUT',
      transformRequest: [serialize, angular.toJson],
      transformResponse: [angular.fromJson, deserialize]
    }
  });
  var roles = [{
    id: 'member',
    _name: 'RESERVATION_RULES.MEMBER',
    $isVisible: function $isVisible(whoCanReserve) {
      return whoCanReserve !== 'staffOnly' && whoCanReserve !== 'notAvailable' && whoCanReserve !== 'nonMember';
    }
  }, {
    id: 'nonMember',
    _name: 'RESERVATION_RULES.NON_MEMBER',
    $isVisible: function $isVisible(whoCanReserve) {
      return whoCanReserve === 'anyone' || whoCanReserve === 'nonMember';
    }
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    roles.forEach(function (opt) {
      opt.name = $translate.instant(opt._name);
    });
  }

  return {
    roles: roles,

    /**
     * Query
     */
    query: function query(params) {
      return params.reservationUnitId ? resUnit.query(params).$promise : resCenter.query(params).$promise;
    },

    /**
     * Save / Update
     */
    save: function save(params, rule) {
      params = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
        ruleId: rule.id
      }, params);
      var promise;

      if (rule.id) {
        promise = params.reservationUnitId ? resUnit.update(params, rule).$promise : resCenter.update(params, rule).$promise;
      } else {
        promise = params.reservationUnitId ? resUnit.save(params, rule).$promise : resCenter.save(params, rule).$promise;
      }

      return promise.then(function (result) {
        // update id and intervals
        rule.id = result.id;
        roles.forEach(function (role) {
          if (result[role.id] && result[role.id].intervals) {
            rule[role.id].intervals = result[role.id].intervals;
          }
        });
        return rule;
      });
    },

    /**
     * Delete Annual Holiday Calendar rule
     */
    delete: function _delete(params) {
      return resCenter.delete(params).$promise;
    }
  };
  /**
   * Deserialize rules
   * @param rule
   */

  function deserialize(rule) {
    var rules = angular.isArray(rule) ? rule : [rule];
    rules.forEach(function (rule) {
      switch (rule.uid) {
        case 'whoCanReserve':
          rule.type = 'value';
          break;

        case 'scale':
          rule.type = 'value';
          break;

        case 'buffer':
          rule.type = 'value';
          break;

        case 'fullTimeProduct':
          rule.type = 'value';
          break;

        case 'attachedUser':
          rule.type = 'static';
          break;

        case 'limitMin':
        case 'limitMax':
        case 'daysInAdvance':
          rule.type = 'roles';
          break;

        case 'timeInAdvance':
          rule.type = 'roles';
          break;

        case 'nestedUnits':
          rule.type = 'checklist';
          break;

        case 'sun':
          rule.name = $locale.DATETIME_FORMATS.SHORTDAY[0];
          rule.type = 'weekday';
          break;

        case 'mon':
          rule.name = $locale.DATETIME_FORMATS.SHORTDAY[1];
          rule.type = 'weekday';
          break;

        case 'tue':
          rule.name = $locale.DATETIME_FORMATS.SHORTDAY[2];
          rule.type = 'weekday';
          break;

        case 'wed':
          rule.name = $locale.DATETIME_FORMATS.SHORTDAY[3];
          rule.type = 'weekday';
          break;

        case 'thu':
          rule.name = $locale.DATETIME_FORMATS.SHORTDAY[4];
          rule.type = 'weekday';
          break;

        case 'fri':
          rule.name = $locale.DATETIME_FORMATS.SHORTDAY[5];
          rule.type = 'weekday';
          break;

        case 'sat':
          rule.name = $locale.DATETIME_FORMATS.SHORTDAY[6];
          rule.type = 'weekday';
          break;

        default:
          rule.type = 'date';
      }

      if (rule.type === 'weekday' || rule.type === 'date') {
        roles.forEach(function (role) {
          rule[role.id].intervals.forEach(function (interval) {
            interval.from = $filter('toDate')(interval.from);
            interval.to = $filter('toDate')(interval.to);
          });
        });
      }

      if (rule.type === 'date') {
        rule.date = $filter('toDate')(rule.date);
      }

      if (rule.type === 'checklist') {
        rule.value = rule.value && rule.value.reduce(function (o, i) {
          return o[i] = true, o;
        }, {}); // array to object
      }
    });
    return rule;
  }
  /**
   * Serialize rule for POST/PUT
   * @param rule - rule to serialize
   * @returns {*} - rule passed
   */


  function serialize(rule) {
    var type = rule.type;
    rule = angular.copy(helper.purify(rule, ['type']));

    if (type === 'weekday' || type === 'date') {
      roles.forEach(function (role) {
        rule[role.id] = helper.purify(rule[role.id]);
        angular.forEach(rule[role.id].intervals, function (interval) {
          interval.from = $filter('date')(interval.from, 'HH:mm');
          interval.to = $filter('date')(interval.to, 'HH:mm');
          if (interval.to === '00:00') interval.to = '24:00';
        });
      });
    }

    if (type === 'date') {
      rule.date = $filter('date')(rule.date, 'yyyy-MM-dd');
    }

    if (type === 'checklist') {
      var _context, _context2;

      rule.value = rule.value && _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(rule.value)).call(_context2, function (key) {
        return !!rule.value[key];
      })).call(_context, function (key) {
        return +key;
      });
    }

    return rule;
  }
}]);

/***/ }),

/***/ "./common/services/reservations/calendar.service.js":
/*!**********************************************************!*\
  !*** ./common/services/reservations/calendar.service.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.calendarService', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('calendarService', ["$resource", "$filter", "deskworksConfig", "helper", "datesDeserializer", function ($resource, $filter, deskworksConfig, helper, datesDeserializer) {
  var desDates = datesDeserializer(['reservationUnits.reservations.from', 'reservationUnits.reservations.to', 'reservationUnits.availabilities.from', 'reservationUnits.availabilities.to']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/reservations'), {
    centerId: '@centerId',
    from: '@from',
    to: '@to'
  }, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: desDates
    }
  });
  return {
    query: function query(centerId, from, to, role) {
      return res.query({
        centerId: centerId,
        from: $filter('date')(from, 'yyyy-MM-dd'),
        to: $filter('date')(to, 'yyyy-MM-dd'),
        role: role || undefined
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/reservations/opts-repeat-frequency.service.js":
/*!***********************************************************************!*\
  !*** ./common/services/reservations/opts-repeat-frequency.service.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Options for Repeat Frequency in Simple Reservation / Time
 */
angular.module('deskworks.reservationUnit.optsRepeatFrequency', []).factory('optsRepeatFrequency', ["$rootScope", "$filter", "$translate", function ($rootScope, $filter, $translate) {
  'use strict';

  var opts = [{
    _name: 'RESERVATIONS.REPEAT_FREQUENCY.NONE'
  }, {
    id: '1.day',
    _name: 'RESERVATIONS.REPEAT_FREQUENCY.DAILY',
    repeatDurationFilter: $filter('days'),
    repeatDurationOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  }, {
    id: '1.week',
    _name: 'RESERVATIONS.REPEAT_FREQUENCY.WEEKLY',
    repeatDurationFilter: $filter('weeks'),
    repeatDurationOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }, {
    id: '1.month',
    _name: 'RESERVATIONS.REPEAT_FREQUENCY.MONTHLY',
    repeatDurationFilter: $filter('months'),
    repeatDurationOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }, {
    id: '4.weeks',
    _name: 'RESERVATIONS.REPEAT_FREQUENCY.MONTHLY_WEEKLY',
    repeatDurationFilter: $filter('months'),
    repeatDurationOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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

/***/ "./common/services/reservations/reservation-cost.service.js":
/*!******************************************************************!*\
  !*** ./common/services/reservations/reservation-cost.service.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "../node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);




/**
 * ReservationCost service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationCost', ['deskworks.ReservationPrice', 'deskworks.calendarService']).factory('ReservationCost', ["$q", "$filter", "dwAlerts", "ReservationPrice", "calendarService", function ($q, $filter, dwAlerts, ReservationPrice, calendarService) {
  return {
    /**
     * Sync calculation - used in Reservation Form for estimated reservation cost
     */
    calcSync: function calcSync(timeStart, timeEnd, reservationPrices, resCategoryId) {
      var _context;

      if (!reservationPrices) return null;

      var resCategory = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(reservationPrices).call(reservationPrices, function (rp) {
        return rp.id === resCategoryId;
      });

      var length = (timeEnd - timeStart) / 60000;
      if (!resCategory) return null;
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = resCategory.passes).call(_context, function (pass) {
        return minutes_to_passes(length, +pass.passSize, +pass.passMin, +pass.passMax) * pass.passPrice;
      }).reduce(function (prev, curr) {
        return curr < prev ? curr : prev;
      });
    },

    /**
     * Async calculation - used for skipping purchase for free reservations
     * in Simple Reservation wizard after User Profile step
     */
    calcAsync: function calcAsync(centerId, userId, reservationUnitId, timeStart, timeEnd) {
      timeStart = $filter('toDate')(timeStart);
      timeEnd = $filter('toDate')(timeEnd);
      return $q.all({
        prices: ReservationPrice.query(centerId, userId).catch(function (err) {
          return dwAlerts.error(err, 'Failed to query reservation prices.');
        }),
        cats: calendarService.query(centerId, timeStart, timeEnd).catch(function (err) {
          return dwAlerts.error(err, 'Failed to query calendar data.');
        })
      }).then(function (result) {
        var _context2, _context4;

        var cat = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = result.cats).call(_context2, function (cat) {
          var _context3;

          return !!_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = cat.reservationUnits).call(_context3, function (unit) {
            return unit.id === +reservationUnitId;
          });
        });

        return cat && _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context4 = result.prices).call(_context4, function (p) {
          return p.id === cat.id;
        });
      }).then(function (pricing) {
        var _context5;

        if (!pricing) return null;
        var length = (timeEnd - timeStart) / 60000;
        return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = pricing.passes).call(_context5, function (pass) {
          return minutes_to_passes(length, +pass.passSize, +pass.passMin, +pass.passMax) * pass.passPrice;
        }).reduce(function (prev, curr) {
          return curr < prev ? curr : prev;
        });
      });
    }
  };
  /**
   * Reservation length to passes conversion logic (from ruby code)
   */

  function minutes_to_passes(minutes, pass_size, pass_min, pass_max) {
    var hrs = round_time_diff(Math.floor(minutes / 60), minutes % 60, pass_size * pass_min);
    var passes = Math.max(+(hrs / (pass_size || 1)).toFixed(2), 1.0);

    if (pass_max > 0 && passes > pass_max) {
      passes = pass_max;
    }

    return passes;
  }

  function round_minutes_diff(minutes, step) {
    var minutes_in_step = 60 * step;
    var parts = Math.floor(minutes / minutes_in_step);
    var fraction_of_part = minutes - parts * minutes_in_step;

    if (fraction_of_part > 5) {
      parts += 1;
    }

    return parts * minutes_in_step / 60.0;
  }

  function round_time_diff(hrs, minutes, step) {
    var total_minutes = hrs * 60 + minutes;
    return round_minutes_diff(total_minutes, step || 0.25);
  }
}]));

/***/ }),

/***/ "./common/services/reservations/reservation-price.service.js":
/*!*******************************************************************!*\
  !*** ./common/services/reservations/reservation-price.service.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * ReservationPrice service
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ReservationPrice', ['ngResource', 'deskworks.config']).factory('ReservationPrice', ["$resource", "$q", "deskworksConfig", function ($resource, $q, deskworksConfig) {
  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/reservation-prices');
  var res = $resource(url, {
    centerId: '@centerId',
    userId: '@userId'
  }, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
  return {
    query: function query(centerId, userId) {
      return res.query({
        centerId: centerId,
        userId: userId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/reservations/reservation.service.js":
/*!*************************************************************!*\
  !*** ./common/services/reservations/reservation.service.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.reservationService', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('reservationService', ["$resource", "$filter", "deskworksConfig", "helper", "datesDeserializer", function ($resource, $filter, deskworksConfig, helper, datesDeserializer) {
  'use strict';

  var fDate = $filter('date');
  var desDates = datesDeserializer(['from', 'to', 'updatedAt']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/reservations/:reservationId'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, desDates]
    },
    save: {
      method: 'POST',
      transformRequest: serializer
    },
    update: {
      method: 'PUT',
      transformRequest: serializer
    }
  });
  var resPayment = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/reservations-with-payments'), {}, {
    save: {
      method: 'POST',
      transformRequest: serializer
    }
  });
  return {
    query: function query(params) {
      params = angular.extend({}, params);
      params.from = params.from && fDate(params.from, 'iso');
      params.to = params.to && fDate(params.to, 'iso');
      return res.query(params).$promise;
    },
    save: function save(centerId, userId, reservation) {
      if (!reservation.id) return res.save({
        centerId: centerId,
        userId: userId
      }, reservation).$promise.then(function (result) {
        reservation.id = result.id;
        reservation.accessCode = result.accessCode;
        return reservation;
      });
      return res.update({
        centerId: centerId,
        userId: userId,
        reservationId: reservation.id
      }, reservation).$promise;
    },
    saveWithPayment: function saveWithPayment(centerId, userId, reservation) {
      return resPayment.save({
        centerId: centerId,
        userId: userId
      }, reservation).$promise;
    },
    delete: function _delete(centerId, userId, reservationId, emailConfirmation, repeatFrequency, repeatDuration) {
      return res.delete({
        centerId: centerId,
        userId: userId,
        reservationId: reservationId,
        emailConfirmation: emailConfirmation,
        repeatFrequency: repeatFrequency,
        repeatDuration: repeatDuration
      }).$promise;
    }
  };

  function serializer(data) {
    data = angular.extend({}, data);
    data.from = fDate(data.from, 'iso');
    data.to = fDate(data.to, 'iso');
    return angular.toJson(data);
  }
}]);

/***/ }),

/***/ "./common/services/session/session-injector.service.js":
/*!*************************************************************!*\
  !*** ./common/services/session/session-injector.service.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);


angular.module('sessionInjector', ['session']).factory('sessionInjector', ["$injector", function ($injector) {
  'use strict';

  return {
    request: request
  };

  function request(config) {
    if (!config.url.match(/\/api\//i)) return config;
    var session = $injector.get('session');

    if (!session.isAnonymous()) {
      config.headers['Authorization'] = 'Bearer ' + session.accessToken; // jshint ignore:line
    }

    return config;
  }
}]);

/***/ }),

/***/ "./common/services/session/session-refresher.service.js":
/*!**************************************************************!*\
  !*** ./common/services/session/session-refresher.service.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);


angular.module('sessionRefresher', ['session']).factory('sessionRefresher', ["$q", "$injector", "$location", function ($q, $injector, $location) {
  'use strict';

  return {
    responseError: function responseError(response) {
      if (response.status === 419) {
        var $http = $injector.get('$http');
        var session = $injector.get('session');
        return session.refresh().catch(function (err) {
          $location.search('redirect', $location.path());
          $location.path('/sign-in');
          return $q.reject(err);
        }).then(function () {
          return $http(response.config); // repeat request
        });
      }

      return $q.reject(response);
    }
  };
}]);

/***/ }),

/***/ "./common/services/session/session.service.js":
/*!****************************************************!*\
  !*** ./common/services/session/session.service.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


angular.module('session', ['deskworks.config', 'deskworks.userRoles']).factory('session', ["$q", "$http", "deskworksConfig", "userRoles", function ($q, $http, deskworksConfig, userRoles) {
  'use strict';

  var url = deskworksConfig.getApiAbsUrl('/auth');
  var session = {
    wait: wait,
    refresh: refresh,
    login: login,
    logout: logout,
    isAnonymous: isAnonymous,
    isAdmin: isAdmin,
    isRole: isRole,
    loginSilent: loginSilent
  };
  reset();
  var promise = refresh() // initial attempt to restore session on startup
  .finally(function () {
    promise = null;
  });
  return session;

  function isAnonymous() {
    return !session.user;
  }

  function isAdmin() {
    return session.user && userRoles[session.user.role] && userRoles[session.user.role].type === 'admin' || false;
  }

  function isRole(roles) {
    if (!angular.isArray(roles)) roles = [roles];
    return session.user && roles.some(function (role) {
      return role === session.user.role;
    }) || false;
  }

  function reset() {
    session.accessToken = null;
    session.user = null;
    session.expireAt = null;
  }

  function wait() {
    return $q.when(promise);
  }
  /**
   * Refresh session: exchange long-life refreshToken (auth cookie) to short-life JWT accessToken
   */


  function refresh() {
    if (promise) return promise;
    promise = $http.get(url).then(onSession).catch(function (err) {
      if (err.status !== 401) throw err;
    }) // anonymous is ok
    .finally(function () {
      promise = null;
    });
    return promise;
  }
  /**
   * Create session: log in
   */


  function login(username, password, remember) {
    return $q.when(promise).finally(function () {
      promise = $http.post(url, {
        username: username,
        password: password,
        remember: remember
      }).then(onSession).finally(function () {
        promise = null;
      });
      return promise;
    });
  }
  /**
   * Create short-time session (log in) without visible effects (used in Reservation Tablet wizard)
   */


  function loginSilent(username, password) {
    return $http.post(url, {
      username: username,
      password: password
    }).then(function (result) {
      session.accessToken = result.data.accessToken;
      return result;
    });
  }
  /**
   * Destroy session: log out
   */


  function logout() {
    return $q.when(promise).finally(function () {
      return $http.delete(url).finally(reset);
    });
  }
  /**
   * Session create/refresh handler
   */


  function onSession(result) {
    session.accessToken = result.data.accessToken;
    session.user = result.data.user;
    return result;
  }
}]);

/***/ }),

/***/ "./common/services/setup/allowed-host.service.js":
/*!*******************************************************!*\
  !*** ./common/services/setup/allowed-host.service.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.allowedHost.service', ['ngResource', 'deskworks.config', 'deskworks.helper']).factory('allowedHostService', ["$resource", "$q", "deskworksConfig", "helper", function ($resource, $q, deskworksConfig, helper) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/setup/allowed-hosts/:allowedHostId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    },
    save: function save(allowedHost) {
      if (allowedHost.id) return res.update({
        allowedHostId: allowedHost.id
      }, allowedHost).$promise;
      return res.save(allowedHost).$promise.then(function (result) {
        allowedHost.id = result.id;
      });
    },
    delete: function _delete(allowedHostId) {
      return res.delete({
        allowedHostId: allowedHostId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/setup/bank.service.js":
/*!***********************************************!*\
  !*** ./common/services/setup/bank.service.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.bank.service', ['ngResource', 'deskworks.config', 'datesDeserializer']).factory('bankService', ["$resource", "$q", "$filter", "deskworksConfig", "helper", "datesDeserializer", function ($resource, $q, $filter, deskworksConfig, helper, datesDeserializer) {
  'use strict';

  var desDates = datesDeserializer(['creditCardCutOffTime']);
  var res = $resource(deskworksConfig.getApiAbsUrl('/banks/:bankId'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: desDates
    },
    get: {
      method: 'GET',
      transformResponse: desDates
    },
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    },
    get: function get(bankId) {
      if (bankId === 'new') return $q.when({
        id: bankId
      });
      return res.get({
        bankId: bankId
      }).$promise;
    },
    save: function save(bank) {
      var data = angular.copy(bank);
      data.creditCardCutOffTime = $filter('date')(bank.creditCardCutOffTime, 'HH:mm');
      return bank.id && bank.id !== 'new' ? res.update({
        bankId: bank.id
      }, data).$promise : res.save({}, data).$promise.then(function (result) {
        bank.id = result.id;
        return result;
      });
    },
    delete: function _delete(bankId) {
      return res.delete({
        bankId: bankId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/setup/net-check-in-settings.service.js":
/*!****************************************************************!*\
  !*** ./common/services/setup/net-check-in-settings.service.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.NetCheckInSettings', ['ngResource', 'deskworks.config']).factory('NetCheckInSettings', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/net-check-in/settings/:centerId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get(centerId) {
      return res.get({
        centerId: centerId
      }).$promise;
    },
    save: function save(centerId, data) {
      return res.update({
        centerId: centerId
      }, data).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/setup/opts-dashboard-income.service.js":
/*!****************************************************************!*\
  !*** ./common/services/setup/opts-dashboard-income.service.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Settings -> General -> DashboardIncome
 */
angular.module('deskworks.optsDashboardIncome', []).factory('optsDashboardIncome', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'cash',
    _name: 'SETUP_SETTINGS.DASHBOARD_INCOME.CASH'
  }, {
    id: 'accrual',
    _name: 'SETUP_SETTINGS.DASHBOARD_INCOME.ACCRUAL'
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

/***/ "./common/services/setup/opts-free-access-length.service.js":
/*!******************************************************************!*\
  !*** ./common/services/setup/opts-free-access-length.service.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for Setup -> Settings -> Free Access Length
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.setup.optsFreeAccessLength', []).factory('optsFreeAccessLength', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 0,
    _name: 'CENTERS.FREE_ACCESS.DISABLED'
  }, {
    id: 30,
    hours: 0.5
  }, {
    id: 60,
    hours: 1
  }, {
    id: 90,
    hours: 1.5
  }, {
    id: 120,
    hours: 2
  }, {
    id: 180,
    hours: 3
  }];
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    opts.forEach(function (opt) {
      if (opt._name) {
        opt.name = $translate.instant(opt._name);
      } else {
        opt.name = $translate.instant('GLOBAL.HOURS_FILTER', {
          hoursCount: opt.hours
        }, 'messageformat');
      }
    });
  }

  return opts;
}]));

/***/ }),

/***/ "./common/services/setup/opts-invoice-date.service.js":
/*!************************************************************!*\
  !*** ./common/services/setup/opts-invoice-date.service.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Invoice Date in Setup / Settings
 */
angular.module('deskworks.setup.optsInvoiceDate', []).factory('optsInvoiceDate', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'invoiceDate',
    _name: 'SETUP_SETTINGS.INVOICE_DATE.INVOICE_DATE'
  }, {
    id: 'chargeDate',
    _name: 'SETUP_SETTINGS.INVOICE_DATE.CHARGE_DATE'
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

/***/ "./common/services/setup/opts-min-pass-fraction-unit.service.js":
/*!**********************************************************************!*\
  !*** ./common/services/setup/opts-min-pass-fraction-unit.service.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Setup -> Settings -> Min Pass Fraction Unit
 */
angular.module('deskworks.setup.optsMinPassFractionUnit', []).factory('optsMinPassFractionUnit', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: true,
    _name: 'SETUP_SETTINGS.MIN_PASS_UNIT.PASSES'
  }, {
    id: false,
    _name: 'SETUP_SETTINGS.MIN_PASS_UNIT.HOURS'
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

/***/ "./common/services/setup/opts-prorate-at-start.service.js":
/*!****************************************************************!*\
  !*** ./common/services/setup/opts-prorate-at-start.service.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Setup -> Settings -> Pro-rate at Start
 */
angular.module('deskworks.setup.optsProrateAtStart', []).factory('optsProrateAtStart', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: null,
    _name: 'GLOBAL.NONE'
  }, {
    id: 'firstCharge',
    _name: 'SETUP_SETTINGS.PRO_RATE_AT_START.FIRST_MONTH'
  }, {
    id: 'secondCharge',
    _name: 'SETUP_SETTINGS.PRO_RATE_AT_START.SECOND_MONTH'
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

/***/ "./common/services/setup/opts-prorate-at-termination.service.js":
/*!**********************************************************************!*\
  !*** ./common/services/setup/opts-prorate-at-termination.service.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Setup -> Settings -> Pro-rate at Termination
 */
angular.module('deskworks.setup.optsProrateAtTermination', []).factory('optsProrateAtTermination', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: null,
    _name: 'GLOBAL.NONE'
  }, {
    id: 'noticeDate',
    _name: 'SETUP_SETTINGS.PRO_RATE_AT_TERMINATION.NOTICE_DATE'
  }, {
    id: 'terminationDate',
    _name: 'SETUP_SETTINGS.PRO_RATE_AT_TERMINATION.TERMINATION_DATE'
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

/***/ "./common/services/setup/opts-reservation-credits-unit.service.js":
/*!************************************************************************!*\
  !*** ./common/services/setup/opts-reservation-credits-unit.service.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for 'Reservation Credits Unit' in Setup / Settings
 */
angular.module('deskworks.setup.optsReservationCreditsUnit', []).factory('optsReservationCreditsUnit', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: '$',
    _name: 'SETUP_SETTINGS.RESERVATION_CREDITS_UNIT.MONEY'
  }, {
    id: 'hours',
    _name: 'SETUP_SETTINGS.RESERVATION_CREDITS_UNIT.HOURS'
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

/***/ "./common/services/setup/opts-task-permission.service.js":
/*!***************************************************************!*\
  !*** ./common/services/setup/opts-task-permission.service.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Task -> Permission
 */
angular.module('deskworks.optsTaskPermission', []).factory('optsTaskPermission', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: null,
    _name: 'TASKS.PERMISSION.NONE'
  }, {
    id: 'view',
    _name: 'TASKS.PERMISSION.VIEW'
  }, {
    id: 'edit',
    _name: 'TASKS.PERMISSION.EDIT'
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

/***/ "./common/services/setup/opts-timezone.service.js":
/*!********************************************************!*\
  !*** ./common/services/setup/opts-timezone.service.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Timezone
 */
angular.module('deskworks.optsTimezone', []).factory('optsTimezone', function () {
  'use strict';

  return [{
    id: 'Hawaii',
    name: 'Hawaii'
  }, {
    id: 'Alaska',
    name: 'Alaska'
  }, {
    id: 'Arizona',
    name: 'Arizona'
  }, {
    id: 'Pacific Time (US & Canada)',
    name: 'Pacific Time (US & Canada)'
  }, {
    id: 'Mountain Time (US & Canada)',
    name: 'Mountain Time (US & Canada)'
  }, {
    id: 'Central Time (US & Canada)',
    name: 'Central Time (US & Canada)'
  }, {
    id: 'Eastern Time (US & Canada)',
    name: 'Eastern Time (US & Canada)'
  }, {
    id: 'Atlantic Time (Canada)',
    name: 'Atlantic Time (Canada)'
  }, {
    id: 'London',
    name: 'London'
  }, {
    id: 'Amsterdam',
    name: 'Amsterdam'
  }, {
    id: "Pretoria",
    name: "Johannesburg"
  }, {
    id: 'Helsinki',
    name: 'Helsinki'
  }, {
    id: 'Jerusalem',
    name: 'Gaza'
  }, {
    id: 'Singapore',
    name: 'Singapore'
  }, {
    id: 'Sydney',
    name: 'Sydney'
  }];
});

/***/ }),

/***/ "./common/services/setup/owner.service.js":
/*!************************************************!*\
  !*** ./common/services/setup/owner.service.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.Owner', ['ngResource', 'deskworks.config']).factory('Owner', ["$resource", "$q", "deskworksConfig", function ($resource, $q, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/owners/:ownerId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    },
    save: function save(owner) {
      if (owner.id) return res.update({
        ownerId: owner.id
      }, owner).$promise;
      return res.save(owner).$promise.then(function (result) {
        owner.id = result.id;
      });
    },
    delete: function _delete(ownerId) {
      return res.delete({
        ownerId: ownerId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/setup/printer-usage-type-names.service.js":
/*!*******************************************************************!*\
  !*** ./common/services/setup/printer-usage-type-names.service.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Names of printer usage types
 */
angular.module('deskworks.printerUsageTypeNames', []).factory('printerUsageTypeNames', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var names = {};
  var _names = {
    printBlack: $translate.instant('PRINTER_USAGE_SETTINGS.TYPE.PRINT_BLACK'),
    printColor: $translate.instant('PRINTER_USAGE_SETTINGS.TYPE.PRINT_COLOR'),
    scan: $translate.instant('PRINTER_USAGE_SETTINGS.TYPE.SCAN'),
    fax: $translate.instant('PRINTER_USAGE_SETTINGS.TYPE.FAX')
  };
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_names).forEach(function (key) {
      names[key] = $translate.instant(_names[key]);
    });
  }

  return names;
}]);

/***/ }),

/***/ "./common/services/setup/region.service.js":
/*!*************************************************!*\
  !*** ./common/services/setup/region.service.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.Region', ['ngResource', 'deskworks.config']).factory('Region', ["$resource", "$q", "deskworksConfig", function ($resource, $q, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/regions/:regionId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    },
    save: function save(region) {
      if (region.id) return res.update({
        regionId: region.id
      }, region).$promise;
      return res.save(region).$promise.then(function (result) {
        region.id = result.id;
      });
    },
    delete: function _delete(regionId) {
      return res.delete({
        regionId: regionId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/setup/roles.service.js":
/*!************************************************!*\
  !*** ./common/services/setup/roles.service.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Roles service
 */
angular.module('deskworks.Roles', ['ngResource', 'deskworks.config']).factory('Roles', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/roles'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, assignTranslations]
    }
  });
  var roleNames = {
    nonMember: 'GLOBAL.ROLE.NON_MEMBER',
    member: 'GLOBAL.ROLE.MEMBER',
    coMember: 'GLOBAL.CO_MEMBER',
    accountant: 'GLOBAL.ROLE.ACCOUNTANT',
    coordinator: 'GLOBAL.ROLE.COORDINATOR',
    admin: 'GLOBAL.ROLE.ADMIN',
    management: 'GLOBAL.ROLE.MANAGEMENT',
    master: 'GLOBAL.ROLE.MASTER'
  };
  return {
    query: function query() {
      return res.query().$promise;
    }
  };

  function assignTranslations(roles) {
    if (!roles) return;
    roles.forEach(function (role) {
      role._name = roleNames[role.id];
    });
    return roles;
  }
}]);

/***/ }),

/***/ "./common/services/setup/setup.service.js":
/*!************************************************!*\
  !*** ./common/services/setup/setup.service.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6__);







angular.module('deskworks.setup.service', ['ngResource', 'ngFileUpload', 'autoCacheFactory', 'deskworks.config', 'deskworks.helper', 'deskworks.setup.optsInvoiceDate', 'deskworks.setup.optsReservationCreditsUnit']).factory('setupService', ["$resource", "$q", "$filter", "$http", "$timeout", "deskworksConfig", "helper", "Upload", "optsInvoiceDate", "centerService", "userProfileService", "autoCacheFactory", function ($resource, $q, $filter, $http, $timeout, deskworksConfig, helper, Upload, optsInvoiceDate, centerService, userProfileService, autoCacheFactory) {
  'use strict';

  var cache = autoCacheFactory('settings', 30);
  var resSetupSettings = $resource(deskworksConfig.getApiAbsUrl('/setup/settings'), {}, {
    get: {
      method: 'GET',
      cache: cache
    },
    update: {
      method: 'PUT'
    }
  });
  return {
    resetCache: function resetCache() {
      cache.removeAll();
    },

    /**
     * Setup Settings
     */
    getSetupSettings: function getSetupSettings() {
      return resSetupSettings.get({}).$promise.then(function (result) {
        result.invoiceDate = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(optsInvoiceDate).call(optsInvoiceDate, function (obj) {
          return obj.id === result.invoiceDate;
        });
        return result;
      });
    },
    updateSetupSettings: function updateSetupSettings(data) {
      var _context, _context2;

      var newData = {
        locale: data.locale,
        timeFormat: data.timeFormat,
        sendNoticesFromLocalCenter: !!data.sendNoticesFromLocalCenter,
        enableEChecks: data.enableEChecks,
        skipPlanMemberSignUp: data.skipPlanMemberSignUp,
        creditCardTypes: data.creditCardTypes,
        creditCardAddressOptional: data.creditCardAddressOptional,
        enableEmailing: data.enableEmailing,
        dashboardIncome: data.dashboardIncome,
        enableAccessCodes: data.enableAccessCodes,
        isFranchise: data.isFranchise,
        activateMembersForAllCenters: data.activateMembersForAllCenters,
        declinedPaymentAutoRetryPeriod: data.declinedPaymentAutoRetryPeriod,
        declinedPaymentAutoRetryAttempts: data.declinedPaymentAutoRetryAttempts,
        enableSecurityDepositInMembershipProducts: data.enableSecurityDepositInMembershipProducts,
        limitRefundProcessingTo: data.limitRefundProcessingTo,
        limitDeletingOrderItemsTo: data.limitDeletingOrderItemsTo,
        enableRenewalNotices: data.enableRenewalNotices,
        multiLevelProductCategory: data.multiLevelProductCategory,
        invoiceTemplate: data.invoiceTemplate,
        enableGdprDelete: data.enableGdprDelete,
        sweepCharges: !!data.sweepCharges,
        emailSweptInvoices: !!data.emailSweptInvoices,
        invoiceDate: data.invoiceDate.id,
        prorateAtStart: data.prorateAtStart,
        prorateAtTermination: data.prorateAtTermination,
        enablePaymentProcessingCharges: !!data.enablePaymentProcessingCharges,
        paymentProcessingRates: {
          cc: data.paymentProcessingRates.cc ? +data.paymentProcessingRates.cc : 0,
          ach: data.paymentProcessingRates.ach ? +data.paymentProcessingRates.ach : 0
        },
        addCenterPrefixToCalendar: !!data.addCenterPrefixToCalendar,
        calendarOwners: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_6___default()(_context2 = data.calendarOwners).call(_context2, function (item) {
          return !!item.owner;
        })).call(_context, function (item) {
          return {
            id: item.id,
            owner: angular.isNumber(item.owner) ? item.owner : (item.owner || {}).id,
            mask: item.mask
          };
        }),
        hideReservationCostEstimate: data.hideReservationCostEstimate,
        hideRecurringReservations: data.hideRecurringReservations,
        hideStaffOnlyUnits: data.hideStaffOnlyUnits,
        reservationCreditsUnit: data.reservationCreditsUnit,
        minPassInPercent: data.minPassInPercent,
        passGracePeriod: data.passGracePeriod,
        publicReservationDetails: data.publicReservationDetails,
        gtmContainerId: data.gtmContainerId,
        affiliatlyId: data.affiliatlyId,
        enableAddOnProductsAtRegistration: data.enableAddOnProductsAtRegistration,
        enableExtraFieldsAtRegistration: data.enableExtraFieldsAtRegistration
      };

      if (data.sweepCharges) {
        newData.advanceInvoicingDays = data.advanceInvoicingDays.id;
      }

      cache.removeAll();
      return resSetupSettings.save({}, newData).$promise; // .then(function(res) {
      // centerService.resetCache(); // reset centers cache as qboIntegration affects options.qboClasses in center
      // userProfileService.resetCache(); // reset users cache as changes in custom fields affect users
      // return res;
      // });
    },
    updateSetupSettingsRaw: function updateSetupSettingsRaw(data) {
      cache.removeAll();
      return resSetupSettings.save({}, data).$promise; // .then(function(res) {
      // centerService.resetCache(); // reset centers cache as qboIntegration affects options.qboClasses in center
      // userProfileService.resetCache(); // reset users cache as changes in custom fields affect users
      // return res;
      // });
    },

    /**
     * Locales
     */
    queryLocales: function queryLocales() {
      return $q.when(window.dwLocales);
    },

    /**
     * Timezones
     */
    queryTimezones: function queryTimezones() {
      // return $http.get('assets/timezones.json', { cache: true })
      return __webpack_require__.e(/*! import() | timezones */ "timezones~.._timezones.json~28478f2f").then(__webpack_require__.t.bind(null, /*! ../../../../timezones.json */ "../timezones.json", 3)).then(function (response) {
        return response.default; // return angular.fromJson(response.data);
      });
    }
  };
}]);

/***/ }),

/***/ "./common/services/setup/task.service.js":
/*!***********************************************!*\
  !*** ./common/services/setup/task.service.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Task service
 */
angular.module('deskworks.Task', ['ngResource', 'deskworks.config', 'autoCacheFactory']).factory('Task', ["$resource", "deskworksConfig", "helper", "autoCacheFactory", function ($resource, deskworksConfig, helper, autoCacheFactory) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/tasks/:taskId'), {}, {
    query: {
      method: 'GET',
      isArray: false
    },
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    },
    get: function get(taskId) {
      return res.get({
        taskId: taskId
      }).$promise;
    },
    save: function save(task) {
      var data = helper.purify(task, ['options']);
      autoCacheFactory.emptyAll();
      if (task.id && task.id !== 'new') return res.update({
        taskId: task.id
      }, data).$promise;
      return res.save({}, data).$promise.then(function (result) {
        task.id = result.id;
        return task;
      });
    },
    delete: function _delete(taskId) {
      autoCacheFactory.emptyAll();
      return res.delete({
        taskId: taskId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/setup/white-label-links.service.js":
/*!************************************************************!*\
  !*** ./common/services/setup/white-label-links.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WhiteLabelLinks', ['ngResource', 'deskworks.config']).factory('WhiteLabelLinks', ["$resource", "Upload", "deskworksConfig", function ($resource, Upload, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/white-label/links'), {}, {
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
      return res.update(data).$promise;
    },
    uploadTermsOfService: function uploadTermsOfService(file) {
      return Upload.upload({
        url: deskworksConfig.getApiAbsUrl('/white-label/links'),
        method: 'PUT',
        withCredentials: true,
        data: {
          termsOfService: file
        }
      });
    },
    uploadReservationAgreement: function uploadReservationAgreement(file) {
      return Upload.upload({
        url: deskworksConfig.getApiAbsUrl('/white-label/links'),
        method: 'PUT',
        withCredentials: true,
        data: {
          reservationAgreement: file
        }
      });
    }
  };
}]));

/***/ }),

/***/ "./common/services/system/access-card.service.js":
/*!*******************************************************!*\
  !*** ./common/services/system/access-card.service.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * AccessCard service
 */
angular.module('deskworks.accessCard.service', ['ngResource', 'deskworks.config']) // TODO: API doesn't support single GET method, use query GET and then find necessary item
.factory('AccessCard', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  'use strict';

  var url = deskworksConfig.getApiAbsUrl('/centers/:centerId/access-cards/:accessCardId');
  return $resource(url, {
    centerId: '@centerId',
    accessCardId: '@accessCardId'
  }, {
    update: {
      method: 'PUT'
    }
  });
}]);

/***/ }),

/***/ "./common/services/system/admin.service.js":
/*!*************************************************!*\
  !*** ./common/services/system/admin.service.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.Admin', ['ngResource', 'deskworks.config', 'deskworks.helper']).factory('Admin', ["$resource", "$q", "deskworksConfig", "helper", function ($resource, $q, deskworksConfig, helper) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/administrators/:adminId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    query: function query() {
      return res.query().$promise;
    },
    get: function get(adminId) {
      return res.get({
        adminId: adminId
      }).$promise.then(function (result) {
        if (adminId === 'new') {
          result.role = result.options.roles[0];
          result.receiveUrgentReservationNotices = true;
          result.receiveWelcomeEmailCopies = false;
          result.receiveReservationConfirmationCopies = false;
          result.seeDashboardRevenue = true;
          result.centers.forEach(function (center) {
            center.emailing = true;
            center.permission = 'all';
          });
        } else {
          result.role = helper.findByKeyValue(result.options.roles, 'id', result.role);
        }

        result.centers = result.centers || {};
        result.fullName = result.fullName || helper.join([result.firstName, result.lastName], ' ');
        return result;
      });
    },
    save: function save(admin) {
      var data = helper.purify(admin, ['options', 'printerCode']);
      data.role = data.role && data.role.id ? data.role.id : data.role;
      if (admin.id && admin.id !== 'new') return res.update({
        adminId: admin.id
      }, data).$promise;
      return res.save({}, data).$promise.then(function (result) {
        admin.id = result.id;
        return admin;
      });
    },
    delete: function _delete(adminId) {
      return res.delete({
        adminId: adminId
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/system/center.service.js":
/*!**************************************************!*\
  !*** ./common/services/system/center.service.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.center.service', ['ngResource', 'deskworks.config', 'autoCacheFactory', 'ngFileUpload', 'deskworks.helper', 'deskworks.userProfile.optsCountry', 'deskworks.userProfile.optsState']).factory('centerService', ["$resource", "$filter", "Upload", "deskworksConfig", "autoCacheFactory", "helper", "optsCountry", "optsState", function ($resource, $filter, Upload, deskworksConfig, autoCacheFactory, helper, optsCountry, optsState) {
  var cache = autoCacheFactory('center', 60);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId'), {}, {
    get: {
      method: 'GET',
      cache: cache
    },
    query: {
      method: 'GET',
      cache: cache,
      isArray: true
    },
    update: {
      method: 'PUT'
    }
  });
  return {
    resetCache: function resetCache() {
      cache.removeAll();
    },
    getCenter: function getCenter(centerId) {
      return res.get({
        centerId: centerId
      }).$promise;
    },
    getCenters: function getCenters(_) {
      return res.query().$promise;
    },
    createCenter: function createCenter(data) {
      cache.removeAll();
      return res.save({}, data).$promise;
    },
    updateCenter: function updateCenter(centerId, data) {
      cache.removeAll();
      return res.update({
        centerId: centerId
      }, data).$promise;
    },
    deleteCenter: function deleteCenter(centerId) {
      cache.removeAll();
      return res.delete({
        centerId: centerId
      }).$promise;
    },
    uploadThumbnail: function uploadThumbnail(centerId, file) {
      cache.removeAll();
      return Upload.upload({
        url: deskworksConfig.getApiAbsUrl('/centers/' + centerId),
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
     * @returns {*}
     */
    deletePhoto: function deletePhoto(params) {
      return cache.removeAll(), res.update(params, {
        photo: null
      }).$promise;
    },

    /**
     * New Methods, the above ones are obsolete
     */
    query: function query() {
      return res.query().$promise;
    },
    get: function get(centerId) {
      var self = this;
      return res.get({
        centerId: centerId
      }).$promise.then(function (result) {
        return self.resolve(result);
      });
    },
    save: function save(center) {
      var self = this;
      cache.removeAll();

      if (center.id === 'new') {
        return res.save({}, self.unresolve(center)).$promise.then(function (result) {
          return center.id = result.id, result;
        });
      } else {
        return res.update({
          centerId: center.id || 0
        }, self.unresolve(center)).$promise;
      }
    },

    /**
     * Convert center data to angular-friendly object
     */
    resolve: function resolve(center) {
      if (!center.id || center.id === 'new') {
        center.id = 'new';
        center.country = helper.findByKeyValue(optsCountry, 'id', 'US');
        center.state = helper.findByKeyValue(optsState.US, 'id', 'CA');
        center.bankId = center.options.banks[0] && center.options.banks[0].id;
        center.taxRates = [];
        center.ownerId = null;
        center.regionId = null;
      } else {
        center.street = center.address; // duplicate data as we have different format in some API calls

        center.country = helper.findByKeyValue(optsCountry, 'id', center.countryId);

        if (center.country && optsState[center.country.id]) {
          center.state = helper.findByKeyValue(optsState[center.country.id], 'id', center.state);
        }
      }

      return center;
    },

    /**
     * Convert angular-friendly center object to POST/PUT-friendly data
     */
    unresolve: function unresolve(center) {
      var _context;

      var data = {
        name: center.name,
        shortName: center.shortName,
        street1: center.street1,
        street2: center.street2,
        city: center.city,
        state: center.state.id ? center.state.id : center.state,
        countryId: center.country.id,
        zip: center.zip,
        phone: center.phone,
        fax: center.fax,
        email: center.email,
        bankId: center.bankId,
        forInternalUse: !!center.forInternalUse,
        hideInMemberSignUp: !!center.hideInMemberSignUp,
        description: center.description,
        map: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(center),
        directions: center.directions,
        color: center.color,
        timezone: center.timezone,
        ownerId: center.ownerId,
        regionId: center.regionId,
        taxId: center.taxId,
        taxRates: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = center.taxRates).call(_context, function (taxRate) {
          taxRate.rate = +taxRate.rate;
          return taxRate;
        })
      };

      if (center.options.qboClasses) {
        data.qboClassId = center.qboClassId;
      }

      return data;
    }
  };
}]));

/***/ }),

/***/ "./common/services/system/opts-admin-permission.service.js":
/*!*****************************************************************!*\
  !*** ./common/services/system/opts-admin-permission.service.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Administrator -> Permissions -> Permission
 */
angular.module('deskworks.optsAdminPermission', []).factory('optsAdminPermission', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: null,
    _name: 'ADMINISTRATORS.PERMISSION.NONE'
  }, {
    id: 'all',
    _name: 'ADMINISTRATORS.PERMISSION.ALL'
  }, {
    id: 'viewProfileAndCalendar',
    _name: 'ADMINISTRATORS.PERMISSION.VIEW_PROFILE_AND_CALENDAR'
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

/***/ "./common/services/system/opts-system-email-function.service.js":
/*!**********************************************************************!*\
  !*** ./common/services/system/opts-system-email-function.service.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for System Email Function
 */
angular.module('deskworks.optsSystemEmailFunction', []).factory('optsSystemEmailFunction', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 0,
    _name: 'SYSTEM_EMAILS.FUNCTION.FROM'
  }, {
    id: 1,
    _name: 'SYSTEM_EMAILS.FUNCTION.SIGN_UP'
  }, {
    id: 2,
    _name: 'SYSTEM_EMAILS.FUNCTION.LOST_ACCESS_CARD'
  }, {
    id: 3,
    _name: 'SYSTEM_EMAILS.FUNCTION.NEW_ORDER'
  }, {
    id: 4,
    _name: 'SYSTEM_EMAILS.FUNCTION.EXISTING_ORDER'
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

/***/ "./common/services/system/system.service.js":
/*!**************************************************!*\
  !*** ./common/services/system/system.service.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.system.service', ['ngResource', 'deskworks.config', 'deskworks.helper']).factory('systemService', ["$resource", "$q", "deskworksConfig", "helper", function ($resource, $q, deskworksConfig, helper) {
  'use strict';

  var resSystemEmail = $resource(deskworksConfig.getApiAbsUrl('/system-emails/:systemEmailId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resAccessCard = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/access-cards/:accessCardId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resLeadSource = $resource(deskworksConfig.getApiAbsUrl('/lead-sources/:leadSourceId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    /**
     * System Emails
     */
    getSystemEmails: function getSystemEmails() {
      return resSystemEmail.query().$promise;
    },
    getSystemEmail: function getSystemEmail(systemEmailId) {
      if (systemEmailId === 'new') return $q.when({});
      return resSystemEmail.query({}).$promise.then(function (result) {
        var sysEmail = helper.findByKeyValue(result, 'id', systemEmailId);
        if (sysEmail) return sysEmail;
        return $q.reject({
          data: {
            error: 'System Email not found.'
          }
        });
      });
    },
    createSystemEmail: function createSystemEmail(data) {
      return resSystemEmail.save({}, data).$promise;
    },
    updateSystemEmail: function updateSystemEmail(systemEmailId, data) {
      return resSystemEmail.update({
        systemEmailId: systemEmailId
      }, data).$promise;
    },
    removeSystemEmail: function removeSystemEmail(systemEmailId) {
      return resSystemEmail.delete({
        systemEmailId: systemEmailId
      }).$promise;
    },

    /**
     * Access Cards
     */
    getAccessCard: function getAccessCard(centerId, accessCardId) {
      if (accessCardId === 'new') return $q.when({
        effectiveDate: moment()
      });
      return resAccessCard.query({
        centerId: centerId
      }).$promise.then(function (result) {
        var card = helper.findByKeyValue(result, 'id', accessCardId);
        if (card) return card;
        return $q.reject({
          data: {
            error: 'Access Card not found.'
          }
        });
      });
    },
    createAccessCard: function createAccessCard(centerId, data) {
      return resAccessCard.save({
        centerId: centerId
      }, data).$promise;
    },
    updateAccessCard: function updateAccessCard(centerId, accessCardId, data) {
      return resAccessCard.update({
        centerId: centerId,
        accessCardId: accessCardId
      }, data).$promise;
    },
    removeAccessCard: function removeAccessCard(centerId, accessCardId) {
      return resAccessCard.delete({
        centerId: centerId,
        accessCardId: accessCardId
      }).$promise;
    },

    /**
     * Lead Sources
     */
    getLeadSources: function getLeadSources() {
      return resLeadSource.query().$promise;
    },
    getLeadSource: function getLeadSource(leadSourceId) {
      return resLeadSource.get({
        leadSourceId: leadSourceId
      }).$promise;
    },
    createLeadSource: function createLeadSource(data) {
      return resLeadSource.save({}, data).$promise;
    },
    updateLeadSource: function updateLeadSource(leadSourceId, data) {
      return resLeadSource.update({
        leadSourceId: leadSourceId
      }, data).$promise;
    },
    removeLeadSource: function removeLeadSource(leadSourceId) {
      return resLeadSource.delete({
        leadSourceId: leadSourceId
      }).$promise;
    }
  };
}]);

/***/ }),

/***/ "./common/services/user-profile/opts-address-type.service.js":
/*!*******************************************************************!*\
  !*** ./common/services/user-profile/opts-address-type.service.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Address Type in User Profile
 */
angular.module('deskworks.userProfile.optsAddressType', []).factory('optsAddressType', function () {
  'use strict';

  return [{
    id: 1,
    name: 'GLOBAL.ADDRESS.TYPE.HOME'
  }, {
    id: 2,
    name: 'GLOBAL.ADDRESS.TYPE.BUSINESS'
  }, {
    id: 3,
    name: 'GLOBAL.ADDRESS.TYPE.MAILING'
  }, {
    id: 4,
    name: 'GLOBAL.ADDRESS.TYPE.BILLING'
  }];
});

/***/ }),

/***/ "./common/services/user-profile/opts-bank-account-holer-type.service.js":
/*!******************************************************************************!*\
  !*** ./common/services/user-profile/opts-bank-account-holer-type.service.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Bank Account Holder Type in Billing Profile / eChecks
 */
angular.module('deskworks.userProfile.optsBankAccountHolderType', []).factory('optsBankAccountHolderType', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'personal',
    _name: 'BILLING_PROFILE.E_CHECKS.ACCOUNT_HOLDER_TYPE.PERSONAL'
  }, {
    id: 'business',
    _name: 'BILLING_PROFILE.E_CHECKS.ACCOUNT_HOLDER_TYPE.BUSINESS'
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

/***/ "./common/services/user-profile/opts-bank-account-type.service.js":
/*!************************************************************************!*\
  !*** ./common/services/user-profile/opts-bank-account-type.service.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Bank Account Type in Billing Profile / eChecks
 */
angular.module('deskworks.userProfile.optsBankAccountType', []).factory('optsBankAccountType', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'checking',
    _name: 'BILLING_PROFILE.E_CHECKS.ACCOUNT_TYPE.CHECKING'
  }, {
    id: 'savings',
    _name: 'BILLING_PROFILE.E_CHECKS.ACCOUNT_TYPE.SAVINGS'
  }];
  $rootScope.$on('$setTranslationsSuccess', function () {
    opts.forEach(function (opt) {
      opt.name = $translate.instant(opt._name);
    });
  });
  return opts;
}]);

/***/ }),

/***/ "./common/services/user-profile/opts-billing-method.service.js":
/*!*********************************************************************!*\
  !*** ./common/services/user-profile/opts-billing-method.service.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Options for User Profile -> Membership Billing Method
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.userProfile.optsBillingMethod', []).factory('optsBillingMethod', ["$rootScope", "$translate", function ($rootScope, $translate) {
  var opts = [{
    id: 'cc',
    _name: 'BILLING_PROFILE.BILLING_METHOD.CC',
    import: 'Credit Card',
    paymentMethodKey: 'creditCards'
  }, {
    id: 'ach',
    _name: 'BILLING_PROFILE.BILLING_METHOD.ACH',
    import: 'ACH/EFT/Direct Debit',
    paymentMethodKey: 'eChecks'
  }, {
    id: 'emailInvoice',
    _name: 'BILLING_PROFILE.BILLING_METHOD.EMAIL_INVOICE',
    import: 'Email Invoice',
    restricted: true
  }, {
    id: 'paperInvoice',
    _name: 'BILLING_PROFILE.BILLING_METHOD.PAPER_INVOICE',
    import: 'Paper Invoice',
    restricted: true
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

/***/ "./common/services/user-profile/opts-cc-expiry-month.service.js":
/*!**********************************************************************!*\
  !*** ./common/services/user-profile/opts-cc-expiry-month.service.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Credit Card Expiry Month in User Profile
 */
angular.module('deskworks.userProfile.optsCCExpiryMonth', []).factory('optsCCExpiryMonth', ["$filter", "$rootScope", function ($filter, $rootScope) {
  'use strict';

  var months = [];
  var date = new Date(),
      curDate = new Date();
  date.setDate(1);
  curDate.setDate(1); // Reset current day as 2015-06-30 may cause 2015-02-30 which is really 2015-03-02

  for (var i = 0; i < 12; i++) {
    date.setMonth(i);
    months.push({
      id: i + 1 < 10 ? '0' + (i + 1) : '' + (i + 1),
      name: $filter('date')(date, 'MM - LLLL')
    });
  }

  $rootScope.$on('$setLocaleSuccess', function () {
    months.forEach(function (month, i) {
      date.setMonth(i);
      month.name = $filter('date')(date, 'MM - LLLL');
    });
  });
  return months;
}]);

/***/ }),

/***/ "./common/services/user-profile/opts-cc-expiry-year.service.js":
/*!*********************************************************************!*\
  !*** ./common/services/user-profile/opts-cc-expiry-year.service.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Credit Card Expiry Year in User Profile
 */
angular.module('deskworks.userProfile.optsCCExpiryYear', []).factory('optsCCExpiryYear', ["$filter", function ($filter) {
  'use strict';

  var years = [];
  var date = new Date(),
      curDate = new Date();
  date.setDate(1);
  curDate.setDate(1); // Reset current day as 2015-06-30 may cause 2015-02-30 which is really 2015-03-02

  for (var i = 0; i < 11; i++) {
    date.setFullYear(curDate.getFullYear() + i);
    years.push({
      id: String(date.getFullYear()),
      name: $filter('date')(date, 'yyyy')
    });
  }

  return years;
}]);

/***/ }),

/***/ "./common/services/user-profile/opts-country.service.js":
/*!**************************************************************!*\
  !*** ./common/services/user-profile/opts-country.service.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Country in User Profile
 */
angular.module('deskworks.userProfile.optsCountry', []).factory('optsCountry', function () {
  'use strict';

  return [{
    id: 'AF',
    name: 'Afghanistan'
  }, {
    id: 'AL',
    name: 'Albania'
  }, {
    id: 'DZ',
    name: 'Algeria'
  }, {
    id: 'AS',
    name: 'American Samoa'
  }, {
    id: 'AD',
    name: 'Andorra'
  }, {
    id: 'AO',
    name: 'Angola'
  }, {
    id: 'AI',
    name: 'Anguilla'
  }, {
    id: 'AG',
    name: 'Antigua and Barbuda'
  }, {
    id: 'AR',
    name: 'Argentina'
  }, {
    id: 'AM',
    name: 'Armenia'
  }, {
    id: 'AW',
    name: 'Aruba'
  }, {
    id: 'AU',
    name: 'Australia'
  }, {
    id: 'AT',
    name: 'Austria'
  }, {
    id: 'AZ',
    name: 'Azerbaijan'
  }, {
    id: 'BS',
    name: 'Bahamas'
  }, {
    id: 'BH',
    name: 'Bahrain'
  }, {
    id: 'BD',
    name: 'Bangladesh'
  }, {
    id: 'BB',
    name: 'Barbados'
  }, {
    id: 'BY',
    name: 'Belarus'
  }, {
    id: 'BE',
    name: 'Belgium'
  }, {
    id: 'BZ',
    name: 'Belize'
  }, {
    id: 'BJ',
    name: 'Benin'
  }, {
    id: 'BM',
    name: 'Bermuda'
  }, {
    id: 'BT',
    name: 'Bhutan'
  }, {
    id: 'BO',
    name: 'Bolivia'
  }, {
    id: 'BA',
    name: 'Bosnia and Herzegovina'
  }, {
    id: 'BW',
    name: 'Botswana'
  }, {
    id: 'BV',
    name: 'Bouvet Island'
  }, {
    id: 'BR',
    name: 'Brazil'
  }, {
    id: 'IO',
    name: 'British Indian Ocean Territory'
  }, {
    id: 'BN',
    name: 'Brunei Darussalam'
  }, {
    id: 'BG',
    name: 'Bulgaria'
  }, {
    id: 'BF',
    name: 'Burkina Faso'
  }, {
    id: 'BI',
    name: 'Burundi'
  }, {
    id: 'KH',
    name: 'Cambodia'
  }, {
    id: 'CM',
    name: 'Cameroon'
  }, {
    id: 'CA',
    name: 'Canada'
  }, {
    id: 'CV',
    name: 'Cape Verde'
  }, {
    id: 'KY',
    name: 'Cayman Islands'
  }, {
    id: 'CF',
    name: 'Central African Republic'
  }, {
    id: 'TD',
    name: 'Chad'
  }, {
    id: 'CL',
    name: 'Chile'
  }, {
    id: 'CN',
    name: 'China'
  }, {
    id: 'CX',
    name: 'Christmas Island'
  }, {
    id: 'CC',
    name: 'Cocos (Keeling) Islands'
  }, {
    id: 'CO',
    name: 'Colombia'
  }, {
    id: 'KM',
    name: 'Comoros'
  }, {
    id: 'CG',
    name: 'Congo'
  }, {
    id: 'CD',
    name: 'Congo, the Democratic Republic of the'
  }, {
    id: 'CK',
    name: 'Cook Islands'
  }, {
    id: 'CR',
    name: 'Costa Rica'
  }, {
    id: 'CI',
    name: 'Cote D\'Ivoire'
  }, {
    id: 'HR',
    name: 'Croatia'
  }, {
    id: 'CU',
    name: 'Cuba'
  }, {
    id: 'CY',
    name: 'Cyprus'
  }, {
    id: 'CZ',
    name: 'Czech Republic'
  }, {
    id: 'DK',
    name: 'Denmark'
  }, {
    id: 'DJ',
    name: 'Djibouti'
  }, {
    id: 'DM',
    name: 'Dominica'
  }, {
    id: 'DO',
    name: 'Dominican Republic'
  }, {
    id: 'EC',
    name: 'Ecuador'
  }, {
    id: 'EG',
    name: 'Egypt'
  }, {
    id: 'SV',
    name: 'El Salvador'
  }, {
    id: 'GQ',
    name: 'Equatorial Guinea'
  }, {
    id: 'ER',
    name: 'Eritrea'
  }, {
    id: 'EE',
    name: 'Estonia'
  }, {
    id: 'ET',
    name: 'Ethiopia'
  }, {
    id: 'FK',
    name: 'Falkland Islands (Malvinas)'
  }, {
    id: 'FO',
    name: 'Faroe Islands'
  }, {
    id: 'FJ',
    name: 'Fiji'
  }, {
    id: 'FI',
    name: 'Finland'
  }, {
    id: 'FR',
    name: 'France'
  }, {
    id: 'GF',
    name: 'French Guiana'
  }, {
    id: 'PF',
    name: 'French Polynesia'
  }, {
    id: 'TF',
    name: 'French Southern Territories'
  }, {
    id: 'GA',
    name: 'Gabon'
  }, {
    id: 'GM',
    name: 'Gambia'
  }, {
    id: 'GE',
    name: 'Georgia'
  }, {
    id: 'DE',
    name: 'Germany'
  }, {
    id: 'GH',
    name: 'Ghana'
  }, {
    id: 'GI',
    name: 'Gibraltar'
  }, {
    id: 'GR',
    name: 'Greece'
  }, {
    id: 'GL',
    name: 'Greenland'
  }, {
    id: 'GD',
    name: 'Grenada'
  }, {
    id: 'GP',
    name: 'Guadeloupe'
  }, {
    id: 'GU',
    name: 'Guam'
  }, {
    id: 'GT',
    name: 'Guatemala'
  }, {
    id: 'GG',
    name: 'Guernsey'
  }, {
    id: 'GN',
    name: 'Guinea'
  }, {
    id: 'GW',
    name: 'Guinea-Bissau'
  }, {
    id: 'GY',
    name: 'Guyana'
  }, {
    id: 'HT',
    name: 'Haiti'
  }, {
    id: 'HM',
    name: 'Heard Island And Mcdonald Islands'
  }, {
    id: 'VA',
    name: 'Holy See (Vatican City State)'
  }, {
    id: 'HN',
    name: 'Honduras'
  }, {
    id: 'HK',
    name: 'Hong Kong'
  }, {
    id: 'HU',
    name: 'Hungary'
  }, {
    id: 'IS',
    name: 'Iceland'
  }, {
    id: 'IN',
    name: 'India'
  }, {
    id: 'ID',
    name: 'Indonesia'
  }, {
    id: 'IR',
    name: 'Iran, Islamic Republic of'
  }, {
    id: 'IQ',
    name: 'Iraq'
  }, {
    id: 'IE',
    name: 'Ireland'
  }, {
    id: 'IM',
    name: 'Isle Of Man'
  }, {
    id: 'IL',
    name: 'Israel'
  }, {
    id: 'IT',
    name: 'Italy'
  }, {
    id: 'JM',
    name: 'Jamaica'
  }, {
    id: 'JP',
    name: 'Japan'
  }, {
    id: 'JE',
    name: 'Jersey'
  }, {
    id: 'JO',
    name: 'Jordan'
  }, {
    id: 'KZ',
    name: 'Kazakhstan'
  }, {
    id: 'KE',
    name: 'Kenya'
  }, {
    id: 'KI',
    name: 'Kiribati'
  }, {
    id: 'KP',
    name: 'Korea, Democratic People\'s Republic of'
  }, {
    id: 'KR',
    name: 'Korea, Republic of'
  }, {
    id: 'KW',
    name: 'Kuwait'
  }, {
    id: 'KG',
    name: 'Kyrgyzstan'
  }, {
    id: 'LA',
    name: 'Lao People\'s Democratic Republic'
  }, {
    id: 'LV',
    name: 'Latvia'
  }, {
    id: 'LB',
    name: 'Lebanon'
  }, {
    id: 'LS',
    name: 'Lesotho'
  }, {
    id: 'LR',
    name: 'Liberia'
  }, {
    id: 'LY',
    name: 'Libyan Arab Jamahiriya'
  }, {
    id: 'LI',
    name: 'Liechtenstein'
  }, {
    id: 'LT',
    name: 'Lithuania'
  }, {
    id: 'LU',
    name: 'Luxembourg'
  }, {
    id: 'MO',
    name: 'Macao'
  }, {
    id: 'MK',
    name: 'Macedonia, the Former Yugoslav Republic of'
  }, {
    id: 'MG',
    name: 'Madagascar'
  }, {
    id: 'MW',
    name: 'Malawi'
  }, {
    id: 'MY',
    name: 'Malaysia'
  }, {
    id: 'MV',
    name: 'Maldives'
  }, {
    id: 'ML',
    name: 'Mali'
  }, {
    id: 'MT',
    name: 'Malta'
  }, {
    id: 'MH',
    name: 'Marshall Islands'
  }, {
    id: 'MQ',
    name: 'Martinique'
  }, {
    id: 'MR',
    name: 'Mauritania'
  }, {
    id: 'MU',
    name: 'Mauritius'
  }, {
    id: 'YT',
    name: 'Mayotte'
  }, {
    id: 'MX',
    name: 'Mexico'
  }, {
    id: 'FM',
    name: 'Micronesia, Federated States of'
  }, {
    id: 'MD',
    name: 'Moldova, Republic of'
  }, {
    id: 'MC',
    name: 'Monaco'
  }, {
    id: 'MN',
    name: 'Mongolia'
  }, {
    id: 'ME',
    name: 'Montenegro'
  }, {
    id: 'MS',
    name: 'Montserrat'
  }, {
    id: 'MA',
    name: 'Morocco'
  }, {
    id: 'MZ',
    name: 'Mozambique'
  }, {
    id: 'MM',
    name: 'Myanmar'
  }, {
    id: 'NA',
    name: 'Namibia'
  }, {
    id: 'NR',
    name: 'Nauru'
  }, {
    id: 'NP',
    name: 'Nepal'
  }, {
    id: 'NL',
    name: 'Netherlands'
  }, {
    id: 'AN',
    name: 'Netherlands Antilles'
  }, {
    id: 'NC',
    name: 'New Caledonia'
  }, {
    id: 'NZ',
    name: 'New Zealand'
  }, {
    id: 'NI',
    name: 'Nicaragua'
  }, {
    id: 'NE',
    name: 'Niger'
  }, {
    id: 'NG',
    name: 'Nigeria'
  }, {
    id: 'NU',
    name: 'Niue'
  }, {
    id: 'NF',
    name: 'Norfolk Island'
  }, {
    id: 'MP',
    name: 'Northern Mariana Islands'
  }, {
    id: 'NO',
    name: 'Norway'
  }, {
    id: 'OM',
    name: 'Oman'
  }, {
    id: 'PK',
    name: 'Pakistan'
  }, {
    id: 'PW',
    name: 'Palau'
  }, {
    id: 'PS',
    name: 'Palestinian Territory, Occupied'
  }, {
    id: 'PA',
    name: 'Panama'
  }, {
    id: 'PG',
    name: 'Papua New Guinea'
  }, {
    id: 'PY',
    name: 'Paraguay'
  }, {
    id: 'PE',
    name: 'Peru'
  }, {
    id: 'PH',
    name: 'Philippines'
  }, {
    id: 'PN',
    name: 'Pitcairn'
  }, {
    id: 'PL',
    name: 'Poland'
  }, {
    id: 'PT',
    name: 'Portugal'
  }, {
    id: 'PR',
    name: 'Puerto Rico'
  }, {
    id: 'QA',
    name: 'Qatar'
  }, {
    id: 'RE',
    name: 'Reunion'
  }, {
    id: 'RO',
    name: 'Romania'
  }, {
    id: 'RU',
    name: 'Russian Federation'
  }, {
    id: 'RW',
    name: 'Rwanda'
  }, {
    id: 'BL',
    name: 'Saint Barthélemy'
  }, {
    id: 'SH',
    name: 'Saint Helena'
  }, {
    id: 'KN',
    name: 'Saint Kitts and Nevis'
  }, {
    id: 'LC',
    name: 'Saint Lucia'
  }, {
    id: 'MF',
    name: 'Saint Martin (French part)'
  }, {
    id: 'PM',
    name: 'Saint Pierre and Miquelon'
  }, {
    id: 'VC',
    name: 'Saint Vincent and the Grenadines'
  }, {
    id: 'WS',
    name: 'Samoa'
  }, {
    id: 'SM',
    name: 'San Marino'
  }, {
    id: 'ST',
    name: 'Sao Tome and Principe'
  }, {
    id: 'SA',
    name: 'Saudi Arabia'
  }, {
    id: 'SN',
    name: 'Senegal'
  }, {
    id: 'RS',
    name: 'Serbia'
  }, {
    id: 'SC',
    name: 'Seychelles'
  }, {
    id: 'SL',
    name: 'Sierra Leone'
  }, {
    id: 'SG',
    name: 'Singapore'
  }, {
    id: 'SK',
    name: 'Slovakia'
  }, {
    id: 'SI',
    name: 'Slovenia'
  }, {
    id: 'SB',
    name: 'Solomon Islands'
  }, {
    id: 'SO',
    name: 'Somalia'
  }, {
    id: 'ZA',
    name: 'South Africa'
  }, {
    id: 'GS',
    name: 'South Georgia and the South Sandwich Islands'
  }, {
    id: 'ES',
    name: 'Spain'
  }, {
    id: 'LK',
    name: 'Sri Lanka'
  }, {
    id: 'SD',
    name: 'Sudan'
  }, {
    id: 'SR',
    name: 'Suriname'
  }, {
    id: 'SJ',
    name: 'Svalbard and Jan Mayen'
  }, {
    id: 'SZ',
    name: 'Swaziland'
  }, {
    id: 'SE',
    name: 'Sweden'
  }, {
    id: 'CH',
    name: 'Switzerland'
  }, {
    id: 'SY',
    name: 'Syrian Arab Republic'
  }, {
    id: 'TW',
    name: 'Taiwan, Province of China'
  }, {
    id: 'TJ',
    name: 'Tajikistan'
  }, {
    id: 'TZ',
    name: 'Tanzania, United Republic of'
  }, {
    id: 'TH',
    name: 'Thailand'
  }, {
    id: 'TL',
    name: 'Timor Leste'
  }, {
    id: 'TG',
    name: 'Togo'
  }, {
    id: 'TK',
    name: 'Tokelau'
  }, {
    id: 'TO',
    name: 'Tonga'
  }, {
    id: 'TT',
    name: 'Trinidad and Tobago'
  }, {
    id: 'TN',
    name: 'Tunisia'
  }, {
    id: 'TR',
    name: 'Turkey'
  }, {
    id: 'TM',
    name: 'Turkmenistan'
  }, {
    id: 'TC',
    name: 'Turks and Caicos Islands'
  }, {
    id: 'TV',
    name: 'Tuvalu'
  }, {
    id: 'UG',
    name: 'Uganda'
  }, {
    id: 'UA',
    name: 'Ukraine'
  }, {
    id: 'AE',
    name: 'United Arab Emirates'
  }, {
    id: 'GB',
    name: 'United Kingdom'
  }, {
    id: 'US',
    name: 'United States',
    import: 'USA'
  }, {
    id: 'UM',
    name: 'United States Minor Outlying Islands'
  }, {
    id: 'UY',
    name: 'Uruguay'
  }, {
    id: 'UZ',
    name: 'Uzbekistan'
  }, {
    id: 'VU',
    name: 'Vanuatu'
  }, {
    id: 'VE',
    name: 'Venezuela'
  }, {
    id: 'VN',
    name: 'Viet Nam'
  }, {
    id: 'VG',
    name: 'Virgin Islands, British'
  }, {
    id: 'VI',
    name: 'Virgin Islands, U.S.'
  }, {
    id: 'WF',
    name: 'Wallis and Futuna'
  }, {
    id: 'EH',
    name: 'Western Sahara'
  }, {
    id: 'YE',
    name: 'Yemen'
  }, {
    id: 'ZM',
    name: 'Zambia'
  }, {
    id: 'ZW',
    name: 'Zimbabwe'
  }, {
    id: 'AX',
    name: 'Åland Islands'
  }];
});

/***/ }),

/***/ "./common/services/user-profile/opts-mailbox-handling.service.js":
/*!***********************************************************************!*\
  !*** ./common/services/user-profile/opts-mailbox-handling.service.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Mailbox Handling drop-down in User Profile
 */
angular.module('deskworks.userProfile.optsMailboxHandling', []).factory('optsMailboxHandling', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'dropOff',
    _name: 'USER_PROFILE.MAILBOXES.HANDLING.DROP_OFF'
  }, {
    id: 'mailbox',
    _name: 'USER_PROFILE.MAILBOXES.HANDLING.MAILBOX'
  }, {
    id: 'forward',
    _name: 'USER_PROFILE.MAILBOXES.HANDLING.FORWARD'
  }, {
    id: 'email',
    _name: 'USER_PROFILE.MAILBOXES.HANDLING.EMAIL'
  }, {
    id: 'spheremail',
    _name: 'USER_PROFILE.MAILBOXES.HANDLING.SPHEREMAIL'
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

/***/ "./common/services/user-profile/opts-membership-status.service.js":
/*!************************************************************************!*\
  !*** ./common/services/user-profile/opts-membership-status.service.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Membership Status in User Profile
 */
angular.module('deskworks.userProfile.optsMembershipStatus', []).factory('optsMembershipStatus', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'active',
    _name: 'USER_PROFILE.MEMBERSHIP.STATUS.ACTIVE',
    import: 'Active'
  }, {
    id: 'inactive',
    _name: 'USER_PROFILE.MEMBERSHIP.STATUS.INACTIVE',
    import: 'Inactive'
  }, {
    id: 'nonMember',
    _name: 'USER_PROFILE.MEMBERSHIP.STATUS.NON_MEMBER',
    import: 'Non-Member'
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

/***/ "./common/services/user-profile/opts-phone-type.service.js":
/*!*****************************************************************!*\
  !*** ./common/services/user-profile/opts-phone-type.service.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for Phone Type in User Profile
 */
angular.module('deskworks.userProfile.optsPhoneType', []).factory('optsPhoneType', function () {
  'use strict';

  return [{
    id: 1,
    name: 'USER_PROFILE.PHONES.TYPE.HOME'
  }, {
    id: 2,
    name: 'USER_PROFILE.PHONES.TYPE.WORK'
  }, {
    id: 3,
    name: 'USER_PROFILE.PHONES.TYPE.MOBILE'
  }, {
    id: 4,
    name: 'USER_PROFILE.PHONES.TYPE.FAX'
  }, {
    id: 5,
    name: 'USER_PROFILE.PHONES.TYPE.OTHER'
  }];
});

/***/ }),

/***/ "./common/services/user-profile/opts-share-email.service.js":
/*!******************************************************************!*\
  !*** ./common/services/user-profile/opts-share-email.service.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for User Profile -> Shareable Info -> Email
 */
angular.module('deskworks.optsShareEmail', []).factory('optsShareEmail', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var opts = [{
    id: 'private',
    _name: 'USER_PROFILE.SHAREABLE_INFO.EMAIL.PRIVATE'
  }, {
    id: 'members',
    _name: 'USER_PROFILE.SHAREABLE_INFO.EMAIL.MEMBERS'
  }, {
    id: 'public',
    _name: 'USER_PROFILE.SHAREABLE_INFO.EMAIL.PUBLIC'
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

/***/ "./common/services/user-profile/opts-state.service.js":
/*!************************************************************!*\
  !*** ./common/services/user-profile/opts-state.service.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Options for State/Province of address in User Profile
 */
angular.module('deskworks.userProfile.optsState', []).factory('optsState', function () {
  'use strict';

  return {
    US: [{
      id: 'AL',
      name: 'AL'
    }, {
      id: 'AK',
      name: 'AK'
    }, {
      id: 'AZ',
      name: 'AZ'
    }, {
      id: 'AR',
      name: 'AR'
    }, {
      id: 'CA',
      name: 'CA'
    }, {
      id: 'CO',
      name: 'CO'
    }, {
      id: 'CT',
      name: 'CT'
    }, {
      id: 'DE',
      name: 'DE'
    }, {
      id: 'DC',
      name: 'DC'
    }, {
      id: 'FL',
      name: 'FL'
    }, {
      id: 'GA',
      name: 'GA'
    }, {
      id: 'HI',
      name: 'HI'
    }, {
      id: 'ID',
      name: 'ID'
    }, {
      id: 'IL',
      name: 'IL'
    }, {
      id: 'IN',
      name: 'IN'
    }, {
      id: 'IA',
      name: 'IA'
    }, {
      id: 'KS',
      name: 'KS'
    }, {
      id: 'KY',
      name: 'KY'
    }, {
      id: 'LA',
      name: 'LA'
    }, {
      id: 'ME',
      name: 'ME'
    }, {
      id: 'MD',
      name: 'MD'
    }, {
      id: 'MA',
      name: 'MA'
    }, {
      id: 'MI',
      name: 'MI'
    }, {
      id: 'MN',
      name: 'MN'
    }, {
      id: 'MS',
      name: 'MS'
    }, {
      id: 'MO',
      name: 'MO'
    }, {
      id: 'MT',
      name: 'MT'
    }, {
      id: 'NE',
      name: 'NE'
    }, {
      id: 'NV',
      name: 'NV'
    }, {
      id: 'NH',
      name: 'NH'
    }, {
      id: 'NJ',
      name: 'NJ'
    }, {
      id: 'NM',
      name: 'NM'
    }, {
      id: 'NY',
      name: 'NY'
    }, {
      id: 'NC',
      name: 'NC'
    }, {
      id: 'ND',
      name: 'ND'
    }, {
      id: 'OH',
      name: 'OH'
    }, {
      id: 'OK',
      name: 'OK'
    }, {
      id: 'ON',
      name: 'ON'
    }, {
      id: 'OR',
      name: 'OR'
    }, {
      id: 'PA',
      name: 'PA'
    }, {
      id: 'RI',
      name: 'RI'
    }, {
      id: 'SC',
      name: 'SC'
    }, {
      id: 'SD',
      name: 'SD'
    }, {
      id: 'TN',
      name: 'TN'
    }, {
      id: 'TX',
      name: 'TX'
    }, {
      id: 'UT',
      name: 'UT'
    }, {
      id: 'VT',
      name: 'VT'
    }, {
      id: 'VA',
      name: 'VA'
    }, {
      id: 'WA',
      name: 'WA'
    }, {
      id: 'WV',
      name: 'WV'
    }, {
      id: 'WI',
      name: 'WI'
    }, {
      id: 'WY',
      name: 'WY'
    }]
  };
});

/***/ }),

/***/ "./common/services/user-profile/up-address.service.js":
/*!************************************************************!*\
  !*** ./common/services/user-profile/up-address.service.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Address sub-service of userProfileService
 */
angular.module('deskworks.userProfile.service.address', ['ngResource', 'deskworks.helper', 'deskworks.userProfile.cache', 'deskworks.userProfile.optsAddressType', 'deskworks.userProfile.optsCountry', 'deskworks.userProfile.optsState']).factory('upAddressService', ["$resource", "deskworksConfig", "userProfileCache", "helper", "optsAddressType", "optsCountry", "optsState", function ($resource, deskworksConfig, userProfileCache, helper, optsAddressType, optsCountry, optsState) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/addresses/:addressId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    new: function _new(country, state) {
      return {
        id: helper.uid(),
        type: optsAddressType[3],
        country: country && helper.findByKeyValue(optsCountry, 'id', country.id || country) || helper.findByKeyValue(optsCountry, 'id', 'US'),
        state: helper.findByKeyValue(optsState[country && country.id || country || 'US'], 'id', state && state.id || state || 'CA')
      };
    },
    isNew: function isNew(address) {
      return address && helper.isUid(address.id);
    },
    save: function save(centerId, userId, address) {
      var self = this;
      userProfileCache.removeAll();

      if (helper.isUid(address.id)) {
        return res.save({
          centerId: centerId || 0,
          userId: userId
        }, self.unresolve(address)).$promise.then(function (result) {
          address.id = result.id;
          return result;
        });
      } else {
        return res.update({
          centerId: centerId || 0,
          userId: userId,
          addressId: address.id
        }, self.unresolve(address)).$promise;
      }
    },
    delete: function _delete(centerId, userId, address) {
      userProfileCache.removeAll();
      return res.delete({
        centerId: centerId || 0,
        userId: userId,
        addressId: address.id
      }).$promise;
    },
    resolve: function resolve(address) {
      address.type = helper.findByKeyValue(optsAddressType, 'id', address.typeId);
      address.state = optsState[address.country] ? helper.findByKeyValue(optsState[address.country], 'id', address.state) : address.state;
      address.country = helper.findByKeyValue(optsCountry, 'id', address.country);
      return address;
    },
    unresolve: function unresolve(address) {
      return {
        typeId: address.type && address.type.id ? address.type.id : address.type,
        street: address.street,
        city: address.city,
        country: address.country && address.country.id ? address.country.id : address.country,
        state: address.state && address.state.id ? address.state.id : address.state,
        zip: address.zip
      };
    }
  };
}]);

/***/ }),

/***/ "./common/services/user-profile/up-cache.service.js":
/*!**********************************************************!*\
  !*** ./common/services/user-profile/up-cache.service.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * userProfileCache service - keeps instance of autoCacheFactory for user profile.
 */
angular.module('deskworks.userProfile.cache', ['autoCacheFactory']).factory('userProfileCache', ["autoCacheFactory", function (autoCacheFactory) {
  'use strict';

  return autoCacheFactory('userProfile', 60);
}]);

/***/ }),

/***/ "./common/services/user-profile/up-co-member.service.js":
/*!**************************************************************!*\
  !*** ./common/services/user-profile/up-co-member.service.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Co-Member sub-service of userProfileService
 */
angular.module('deskworks.userProfile.service.coMember', ['ngResource', 'deskworks.helper', 'deskworks.userProfile.cache']).factory('upCoMemberService', ["$resource", "deskworksConfig", "userProfileCache", "helper", function ($resource, deskworksConfig, userProfileCache, helper) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/co-members/:coMemberId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    new: function _new() {
      return {
        id: helper.uid(),
        accessCards: []
      };
    },
    isNew: function isNew(coMember) {
      return coMember && helper.isUid(coMember.id);
    },
    save: function save(centerId, userId, coMember) {
      var self = this;
      userProfileCache.removeAll();

      if (helper.isUid(coMember.id)) {
        return res.save({
          centerId: centerId || 0,
          userId: userId
        }, self.unresolve(coMember)).$promise.then(function (result) {
          coMember.id = result.id;
          coMember.userId = result.userId;
          return result;
        });
      } else {
        return res.update({
          centerId: centerId || 0,
          userId: userId,
          coMemberId: coMember.id
        }, self.unresolve(coMember)).$promise;
      }
    },
    delete: function _delete(centerId, userId, coMember, makeInactive) {
      userProfileCache.removeAll();
      return res.delete({
        centerId: centerId || 0,
        userId: userId,
        coMemberId: coMember.id,
        makeInactive: makeInactive
      }).$promise;
    },
    resolve: function resolve(coMember) {
      coMember.email = helper.stripUid(coMember.email);
      coMember.login = helper.stripUid(coMember.login);
      return coMember;
    },
    unresolve: function unresolve(coMember) {
      return {
        userId: coMember.userId,
        existingUserId: coMember.existingUserId,
        fullName: coMember.fullName,
        email: coMember.email || helper.uid() + '@' + helper.uid() + '.com',
        phone: coMember.phone,
        login: coMember.login || helper.uid(),
        password: helper.isUid(coMember.id) && !coMember.userId && !coMember.existingUserId ? coMember.password || helper.uid() : coMember.password || undefined,
        notes: coMember.notes,
        canMakeReservations: !!coMember.canMakeReservations,
        canSeeAccountingInfo: !!coMember.canSeeAccountingInfo,
        getCenterNotices: !!coMember.getCenterNotices
      };
    },
    // Convert existing user to co-member
    convertUserToCoMember: function convertUserToCoMember(user) {
      return {
        id: helper.uid(),
        existingUserId: user.id,
        fullName: helper.join([user.firstName, user.lastName], ' '),
        email: user.email,
        phone: user.phones && user.phones.length > 0 ? user.phones[0].number : undefined,
        login: user.login,
        notes: user.comments,
        accessCards: user.accessCards
      };
    }
  };
}]);

/***/ }),

/***/ "./common/services/user-profile/up-credit-card.service.js":
/*!****************************************************************!*\
  !*** ./common/services/user-profile/up-credit-card.service.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Credit Card sub-service of userProfileService
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.userProfile.service.creditCard', ['ngResource', 'deskworks.helper', 'deskworks.userProfile.cache', 'deskworks.userProfile.optsCCExpiryMonth', 'deskworks.userProfile.optsCCExpiryYear', 'deskworks.userProfile.optsCountry', 'deskworks.userProfile.optsState']).factory('upCreditCardService', ["$resource", "$filter", "deskworksConfig", "userProfileCache", "helper", "optsCCExpiryMonth", "optsCCExpiryYear", "optsCountry", "optsState", function ($resource, $filter, deskworksConfig, userProfileCache, helper, optsCCExpiryMonth, optsCCExpiryYear, optsCountry, optsState) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/credit-cards/:creditCardId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    new: function _new(userProfile) {
      var cc = {
        id: helper.uid(),
        country: _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsCountry, 'US'),
        state: _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsState.US, 'CA')
      };

      if (userProfile) {
        cc.firstName = userProfile.firstName;
        cc.lastName = userProfile.lastName;
        cc.company = userProfile.company;

        if (userProfile.billingAddress) {
          cc.street = userProfile.billingAddress.street;
          cc.city = userProfile.billingAddress.city;
          cc.country = userProfile.billingAddress.country;
          cc.state = userProfile.billingAddress.state;
          cc.zip = userProfile.billingAddress.zip;
        }
      }

      return cc;
    },
    isNew: function isNew(cc) {
      return cc && helper.isUid(cc.id);
    },
    save: function save(centerId, userId, cc) {
      var self = this;
      userProfileCache.removeAll();

      if (helper.isUid(cc.id)) {
        return res.save({
          centerId: centerId || 0,
          userId: userId
        }, self.unresolve(cc)).$promise.then(function (result) {
          cc.id = result.id;
          cc.ccv = '***';
          return result;
        });
      }
    },
    delete: function _delete(centerId, userId, cc) {
      userProfileCache.removeAll();
      return res.delete({
        centerId: centerId || 0,
        userId: userId,
        creditCardId: cc.id
      }).$promise;
    },
    resolve: function resolve(cc) {
      var expiryDate = $filter('toDate')(cc.expiry);
      var month = expiryDate.month() + 1;
      cc.expiryMonth = helper.findByKeyValue(optsCCExpiryMonth, 'id', $filter('zpad')(month, 2));
      cc.expiryYear = helper.findByKeyValue(optsCCExpiryYear, 'id', expiryDate.year());
      cc.expiryYear = helper.findByKeyValue(optsCCExpiryYear, 'id', expiryDate.year());
      cc.ccv = '***';
      cc.state = optsState[cc.country] ? helper.findByKeyValue(optsState[cc.country], 'id', cc.state) : cc.state;
      cc.country = helper.findByKeyValue(optsCountry, 'id', cc.country);
      return cc;
    },
    unresolve: function unresolve(cc) {
      return {
        type: cc.type && cc.type.id,
        number: cc.number,
        verification: cc.ccv,
        city: cc.city,
        company: cc.company,
        country: cc.country.id,
        expiry: cc.expiryYear.id + '-' + cc.expiryMonth.id + '-01',
        firstName: cc.firstName,
        lastName: cc.lastName,
        state: cc.state.id || cc.state,
        street: cc.street,
        zip: cc.zip
      };
    }
  };
}]));

/***/ }),

/***/ "./common/services/user-profile/up-document.service.js":
/*!*************************************************************!*\
  !*** ./common/services/user-profile/up-document.service.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Document sub-service of userProfileService
 */
angular.module('deskworks.userProfile.service.document', ['session', 'ngResource', 'ngFileUpload', 'deskworks.helper', 'deskworks.userProfile.cache']).factory('upDocumentService', ["$resource", "Upload", "deskworksConfig", "userProfileCache", "helper", "session", function ($resource, Upload, deskworksConfig, userProfileCache, helper, session) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/documents/:documentId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    new: function _new(file) {
      return {
        id: helper.uid(),
        file: file,
        name: file.name,
        userAccess: !session.isAdmin()
      };
    },
    isNew: function isNew(doc) {
      return doc && helper.isUid(doc.id);
    },
    save: function save(centerId, userId, doc) {
      var self = this;
      userProfileCache.removeAll();

      if (helper.isUid(doc.id)) {
        return Upload.upload({
          url: deskworksConfig.getApiAbsUrl('/centers/' + (centerId || 0) + '/user-profiles/' + userId + '/documents'),
          method: 'POST',
          withCredentials: true,
          data: {
            document: doc.file,
            name: doc.name
          }
        }).then(function (result) {
          doc.id = result.data.id;
          doc.document = result.data.document;
          delete doc.file;
          return result.data;
        });
      } else {
        return res.update({
          centerId: centerId || 0,
          userId: userId,
          documentId: doc.id
        }, self.unresolve(doc)).$promise;
      }
    },
    delete: function _delete(centerId, userId, doc) {
      userProfileCache.removeAll();
      return res.delete({
        centerId: centerId || 0,
        userId: userId,
        documentId: doc.id
      }).$promise;
    },
    resolve: function resolve(doc) {
      return doc;
    },
    unresolve: function unresolve(doc) {
      return {
        name: doc.name,
        userAccess: doc.userAccess
      };
    }
  };
}]);

/***/ }),

/***/ "./common/services/user-profile/up-e-check.service.js":
/*!************************************************************!*\
  !*** ./common/services/user-profile/up-e-check.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);


/**
 * eCheck sub-service of userProfileService
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.userProfile.service.eCheck', ['ngResource', 'deskworks.helper', 'deskworks.userProfile.cache', 'deskworks.userProfile.optsBankAccountHolderType', 'deskworks.userProfile.optsBankAccountType']).factory('upECheckService', ["$resource", "$filter", "deskworksConfig", "userProfileCache", "helper", "optsBankAccountHolderType", "optsBankAccountType", function ($resource, $filter, deskworksConfig, userProfileCache, helper, optsBankAccountHolderType, optsBankAccountType) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/e-checks/:eCheckId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    new: function _new(user) {
      return {
        id: helper.uid(),
        bankAccountHolderType: optsBankAccountHolderType[0],
        bankAccountType: optsBankAccountType[0],
        fullName: user && user.fullName
      };
    },
    isNew: function isNew(eCheck) {
      return eCheck && helper.isUid(eCheck.id);
    },
    save: function save(centerId, userId, eCheck) {
      var self = this;
      userProfileCache.removeAll();

      if (helper.isUid(eCheck.id)) {
        return res.save({
          centerId: centerId || 0,
          userId: userId
        }, self.unresolve(eCheck)).$promise.then(function (result) {
          eCheck.id = result.id;
          return result;
        });
      }
    },
    delete: function _delete(centerId, userId, eCheck) {
      userProfileCache.removeAll();
      return res.delete({
        centerId: centerId || 0,
        userId: userId,
        eCheckId: eCheck.id
      }).$promise;
    },
    resolve: function resolve(eCheck) {
      eCheck.bankAccountHolderType = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsBankAccountHolderType, eCheck.bankAccountHolderType);
      eCheck.bankAccountType = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, optsBankAccountType, eCheck.bankAccountType);
      return eCheck;
    },
    unresolve: function unresolve(eCheck) {
      return {
        bankAccountHolderType: eCheck.bankAccountHolderType.id,
        bankAccountType: eCheck.bankAccountType.id,
        bankName: eCheck.bankName,
        bankRoutingNumber: eCheck.bankRoutingNumber,
        bankAccountNumber: eCheck.bankAccountNumber,
        fullName: eCheck.fullName
      };
    }
  };
}]));

/***/ }),

/***/ "./common/services/user-profile/up-mailbox.service.js":
/*!************************************************************!*\
  !*** ./common/services/user-profile/up-mailbox.service.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Mailbox sub-service of userProfileService
 */
angular.module('deskworks.userProfile.service.mailbox', ['ngResource', 'deskworks.helper', 'deskworks.userProfile.cache', 'deskworks.userProfile.optsMailboxHandling']).factory('upMailboxService', ["$resource", "deskworksConfig", "userProfileCache", "helper", "optsMailboxHandling", function ($resource, deskworksConfig, userProfileCache, helper, optsMailboxHandling) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/mailboxes/:mailboxId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    new: function _new() {
      return {
        id: helper.uid(),
        handling: optsMailboxHandling[0]
      };
    },
    isNew: function isNew(mailbox) {
      return mailbox && helper.isUid(mailbox.id);
    },
    save: function save(centerId, userId, mailbox) {
      var self = this;
      userProfileCache.removeAll();

      if (helper.isUid(mailbox.id)) {
        return res.save({
          centerId: centerId || 0,
          userId: userId
        }, self.unresolve(mailbox)).$promise.then(function (result) {
          mailbox.id = result.id;
          return result;
        });
      } else {
        return res.update({
          centerId: centerId || 0,
          userId: userId,
          mailboxId: mailbox.id
        }, self.unresolve(mailbox)).$promise;
      }
    },
    delete: function _delete(centerId, userId, mailbox) {
      userProfileCache.removeAll();
      return res.delete({
        centerId: centerId || 0,
        userId: userId,
        mailboxId: mailbox.id
      }).$promise;
    },
    resolve: function resolve(mailbox) {
      mailbox.handling = helper.findByKeyValue(optsMailboxHandling, 'id', mailbox.handling);
      return mailbox;
    },
    unresolve: function unresolve(mailbox) {
      return {
        number: mailbox.number,
        key: mailbox.key,
        names: mailbox.names,
        handling: mailbox.handling ? mailbox.handling.id : mailbox.handling
      };
    }
  };
}]);

/***/ }),

/***/ "./common/services/user-profile/up-phone.service.js":
/*!**********************************************************!*\
  !*** ./common/services/user-profile/up-phone.service.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Phone sub-service of userProfileService
 */
angular.module('deskworks.userProfile.service.phone', ['ngResource', 'deskworks.helper', 'deskworks.userProfile.cache', 'deskworks.userProfile.optsPhoneType']).factory('upPhoneService', ["$resource", "deskworksConfig", "userProfileCache", "helper", "optsPhoneType", function ($resource, deskworksConfig, userProfileCache, helper, optsPhoneType) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/phones/:phoneId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    new: function _new() {
      return {
        id: helper.uid(),
        type: optsPhoneType[2]
      };
    },
    isNew: function isNew(phone) {
      return phone && helper.isUid(phone.id);
    },
    save: function save(centerId, userId, phone) {
      var self = this;
      userProfileCache.removeAll();

      if (helper.isUid(phone.id)) {
        return res.save({
          centerId: centerId || 0,
          userId: userId
        }, self.unresolve(phone)).$promise.then(function (result) {
          phone.id = result.id;
          return result;
        });
      } else {
        return res.update({
          centerId: centerId || 0,
          userId: userId,
          phoneId: phone.id
        }, self.unresolve(phone)).$promise;
      }
    },
    delete: function _delete(centerId, userId, phone) {
      userProfileCache.removeAll();
      return res.delete({
        centerId: centerId || 0,
        userId: userId,
        phoneId: phone.id
      }).$promise;
    },
    resolve: function resolve(phone) {
      phone.type = helper.findByKeyValue(optsPhoneType, 'id', phone.typeId);
      return phone;
    },
    unresolve: function unresolve(phone) {
      return {
        typeId: phone.type && phone.type.id ? phone.type.id : phone.type,
        number: phone.number,
        ext: phone.ext
      };
    }
  };
}]);

/***/ }),

/***/ "./common/services/user-profile/up-photo.service.js":
/*!**********************************************************!*\
  !*** ./common/services/user-profile/up-photo.service.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Photo sub-service of userProfileService
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.userProfile.service.photo', ['ngResource', 'ngFileUpload', 'deskworks.config', 'deskworks.helper', 'deskworks.userProfile.cache']).factory('upPhotoService', ["$resource", "$q", "deskworksConfig", "userProfileCache", "helper", "Upload", function ($resource, $q, deskworksConfig, userProfileCache, helper, Upload) {
  return {
    isNew: function isNew(user) {
      return !!user && !!user.photoFile;
    },
    save: function save(centerId, user, file) {
      var self = this;

      if (self.isNew(user)) {
        userProfileCache.removeAll();
        return Upload.upload({
          url: deskworksConfig.getApiAbsUrl("/centers/".concat(centerId || 0, "/") + (user && user.membershipStatus && (user.membershipStatus.id === 'active' || user.membershipStatus.id === 'inactive') ? 'members' : 'non-members') + '/' + user.id),
          method: 'PUT',
          withCredentials: true,
          data: {
            photo: user.photoFile
          }
        }).then(function (result) {
          user.photo = result.data.photo;
          delete user.photoFile;
          return result.data;
        });
      }

      return $q.when();
    },

    /**
     * @param params.user
     * @returns {Resource.$promise}
     */
    delete: function _delete(params) {
      var user = params.user;
      var centerId = 0; // const res = $resource(deskworksConfig.getApiAbsUrl('/centers/0/user-profiles/:userId'), {}, { update: { method: 'PUT' } });

      var url = deskworksConfig.getApiAbsUrl("/centers/".concat(centerId || 0, "/") + (user && user.membershipStatus && (user.membershipStatus.id === 'active' || user.membershipStatus.id === 'inactive') ? 'members' : 'non-members') + '/' + user.id);
      var res = $resource(url, {}, {
        update: {
          method: 'PUT'
        }
      });
      return res.update({}, {
        photo: null
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./common/services/user-profile/up-printer-code.service.js":
/*!*****************************************************************!*\
  !*** ./common/services/user-profile/up-printer-code.service.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Printer Code sub-service of userProfileService
 */
angular.module('deskworks.userProfile.service.printerCode', ['ngResource', 'deskworks.helper', 'deskworks.userProfile.cache']).factory('upPrinterCodeService', ["$resource", "deskworksConfig", "userProfileCache", "helper", function ($resource, deskworksConfig, userProfileCache, helper) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/printer-codes/:printerCodeId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    new: function _new() {
      return {
        id: helper.uid()
      };
    },
    isNew: function isNew(prCode) {
      return prCode && helper.isUid(prCode.id);
    },
    save: function save(centerId, userId, prCode) {
      var self = this;
      userProfileCache.removeAll();

      if (helper.isUid(prCode.id)) {
        return res.save({
          centerId: centerId || 0,
          userId: userId
        }, self.unresolve(prCode)).$promise.then(function (result) {
          prCode.id = result.id;
          return result;
        });
      } else {
        return res.update({
          centerId: centerId || 0,
          userId: userId,
          printerCodeId: prCode.id
        }, self.unresolve(prCode)).$promise;
      }
    },
    delete: function _delete(centerId, userId, prCode) {
      userProfileCache.removeAll();
      return res.delete({
        centerId: centerId || 0,
        userId: userId,
        printerCodeId: prCode.id
      }).$promise;
    },
    resolve: function resolve(prCode) {
      return prCode;
    },
    unresolve: function unresolve(prCode) {
      return {
        code: prCode.code
      };
    }
  };
}]);

/***/ }),

/***/ "./common/services/user-profile/user-profile-fields.service.js":
/*!*********************************************************************!*\
  !*** ./common/services/user-profile/user-profile-fields.service.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Custom fields in user profile
 */
angular.module('deskworks.UserProfileFields', ['ngResource', 'deskworks.helper']).factory('UserProfileFields', ["$resource", "$q", "$filter", "deskworksConfig", "helper", function ($resource, $q, $filter, deskworksConfig, helper) {
  'use strict';

  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/fields'), {}, {
    query: {
      method: 'GET',
      isArray: true,
      transformResponse: [angular.fromJson, deserialize]
    },
    update: {
      method: 'PUT',
      transformRequest: [serialize, angular.toJson]
    }
  });
  return {
    query: function query(centerId, userId) {
      return res.query({
        centerId: centerId,
        userId: userId
      }).$promise;
    },
    save: function save(centerId, userId, fields) {
      return res.update({
        centerId: centerId,
        userId: userId
      }, fields).$promise;
    }
  };

  function deserialize(fields) {
    angular.forEach(fields, function (field) {
      if (field.type === 'date') field.value = $filter('toDate')(field.value);
    });
    return fields;
  }

  function serialize(fields) {
    angular.forEach(fields, function (field) {
      if (field.type === 'date') field.value = $filter('date')(field.value, 'yyyy-MM-dd');
    });
    return fields;
  }
}]);

/***/ }),

/***/ "./common/services/user-profile/user-profile.service.js":
/*!**************************************************************!*\
  !*** ./common/services/user-profile/user-profile.service.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.userProfile.service', ['ngResource', 'ngFileUpload', 'deskworks.config', 'deskworks.userProfile.cache', 'deskworks.helper', 'deskworks.system.service', 'deskworks.userProfile.service.photo', 'deskworks.userProfile.service.address', 'deskworks.userProfile.service.phone', 'deskworks.userProfile.service.printerCode', 'deskworks.userProfile.service.document', 'deskworks.userProfile.service.coMember', 'deskworks.userProfile.service.mailbox', 'deskworks.userProfile.service.creditCard', 'deskworks.userProfile.service.eCheck', 'deskworks.UserProfileFields', 'deskworks.userProfile.optsMembershipStatus', 'deskworks.userProfile.optsBillingMethod', 'deskworks.userProfile.optsCCExpiryMonth', 'deskworks.userProfile.optsCCExpiryYear']).factory('userProfileService', ["$resource", "$q", "$timeout", "$filter", "dwAlerts", "Upload", "deskworksConfig", "userProfileCache", "helper", "upPhotoService", "upAddressService", "upPhoneService", "upPrinterCodeService", "upDocumentService", "upCoMemberService", "upMailboxService", "upCreditCardService", "systemService", "upECheckService", "optsMembershipStatus", "optsBillingMethod", "optsCCExpiryMonth", "optsCCExpiryYear", "UserProfileFields", function ($resource, $q, $timeout, $filter, dwAlerts, Upload, deskworksConfig, userProfileCache, helper, upPhotoService, upAddressService, upPhoneService, upPrinterCodeService, upDocumentService, upCoMemberService, upMailboxService, upCreditCardService, systemService, upECheckService, optsMembershipStatus, optsBillingMethod, optsCCExpiryMonth, optsCCExpiryYear, UserProfileFields) {
  // General URL for GET user profiles
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId'), {}, {
    get: {
      method: 'GET',
      cache: userProfileCache
    },
    query: {
      method: 'GET',
      isArray: false
    }
  }); // Explicit URL for POST/PUT member profile

  var resMember = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/members/:userId'), {}, {
    get: {
      method: 'GET',
      cache: userProfileCache
    },
    update: {
      method: 'PUT'
    }
  }); // Explicit URL for POST/PUT non-member profile

  var resNonMember = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/non-members/:userId'), {}, {
    get: {
      method: 'GET',
      cache: userProfileCache
    },
    update: {
      method: 'PUT'
    }
  }); // Restore Password

  var resRestorePassword = $resource(deskworksConfig.getApiAbsUrl('/restore-password'), {}, {
    update: {
      method: 'PUT'
    }
  });
  var resGdpr = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-profiles/:userId/gdpr'));
  /**
   * Get resource for saving user profile. Analyzes user.membershipStatus and returns either resMember or resNonMember
   */

  function getResSave(user) {
    if (user && user.membershipStatus && (user.membershipStatus.id === 'active' || user.membershipStatus.id === 'inactive')) {
      return resMember;
    }

    return resNonMember;
  }

  return {
    /**
     * Child Entities
     */
    phone: upPhoneService,
    address: upAddressService,
    printerCode: upPrinterCodeService,
    document: upDocumentService,
    photo: upPhotoService,
    creditCard: upCreditCardService,
    eCheck: upECheckService,
    coMember: upCoMemberService,
    mailbox: upMailboxService,

    /**
     * Reset user profile cache
     */
    resetCache: function resetCache() {
      userProfileCache.removeAll();
    },

    /**
     * Get new user profile template (requests template from API)
     */
    new: function _new(center, role, scenario) {
      var self = this;
      var res = role === 'member' ? resMember : resNonMember;
      return res.get({
        centerId: center.id || 0,
        userId: 'new',
        scenario: scenario
      }).$promise.then(function (result) {
        result.id = helper.uid();

        result.isNew = function () {
          return self.isNew(this);
        };

        self.resolve(result);
        result.addresses = role === 'nonMember' && scenario === 'register' ? [] : [upAddressService.new(center.countryId, center.state)];
        result.phones = [upPhoneService.new()];
        result.printerCodes = [];
        result.documents = [];
        result.coMembers = [];
        result.mailboxes = [];
        result.accessCards = [];
        result.billingMethod = result.billingMethod || optsBillingMethod[0].id;

        if (role === 'member' && scenario === 'register') {
          result.membershipStatus = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(helper).call(helper, optsMembershipStatus, 'active');
          result.membershipStartDate = moment();
        }

        return result;
      });
    },

    /**
     * Check if user profile is just a new template, not saved to backend
     */
    isNew: function isNew(userProfile) {
      return userProfile && helper.isUid(userProfile.id);
    },

    /**
     * Create/Update user profile
     */
    save: function save(centerId, user, registration) {
      var self = this;
      userProfileCache.removeAll();

      if (helper.isUid(user.id) || !user.id) {
        return getResSave(user).save({
          centerId: centerId || 0,
          registration: registration
        }, self.unresolve(user)).$promise.then(function (result) {
          user.id = result.id;
          return result;
        });
      } else {
        return getResSave(user).update({
          centerId: centerId || 0,
          userId: user.id
        }, self.unresolve(user)).$promise;
      }
    },

    /**
     * Update raw chunk of user profile data without unresolving
     */
    updateRaw: function updateRaw(centerId, user, data) {
      userProfileCache.removeAll();
      return getResSave(user).update({
        centerId: centerId || 0,
        userId: user.id
      }, data).$promise;
    },

    /**
     * Get resolved user profile
     */
    get: function get(centerId, userId) {
      var self = this;
      return res.get({
        centerId: centerId || 0,
        userId: userId
      }).$promise.then(function (result) {
        result.schema = result.schema || {};
        return self.resolve(result);
      });
    },

    /**
     * Get resolved user profile - special case for register/signUp scenarios
     */
    getForRegistration: function getForRegistration(centerId, userId, role, scenario) {
      var self = this;
      var res = role === 'member' ? resMember : resNonMember;
      return res.get({
        centerId: centerId || 0,
        userId: userId,
        scenario: scenario
      }).$promise.then(function (result) {
        result.billingMethod = result.billingMethod || optsBillingMethod[0].id;
        return self.resolve(result);
      });
    },

    /**
     * Search users
     */
    search: function search(centerId, data) {
      data.joinDate = $filter('date')(data.joinDate, 'yyyy-MM-dd');
      data = angular.extend({
        pageSize: 100,
        sort: 'lastName',
        order: 1
      }, data);
      data.centerId = centerId || 0; // Add centerId to other params

      return res.query(data).$promise.then(function (result) {
        result.users.forEach(function (user) {
          user.fullName = user.fullName || helper.join([user.firstName, user.lastName], ' ');
          user.login = helper.stripUid(user.login);
          user.email = helper.stripUid(user.email);
          user.joinDate = $filter('toDate')(user.joinDate);
        });
        return result;
      });
    },

    /**
     * Query user profiles / search users
     */
    query: function query(centerId, data) {
      data = angular.extend({
        pageSize: 0
      }, data);
      return this.search(centerId, data).then(function (result) {
        return result.users;
      });
    },

    /**
     * Quick search user profiles
     */
    quickSearch: function quickSearch(centerId, _quickSearch) {
      var data = {
        centerId: centerId || 0,
        quickSearch: _quickSearch,
        pageSize: 50,
        activeMembers: true,
        nonMembers: true
      };
      return this.search(centerId, data).then(function (result) {
        return result.users;
      });
    },

    /**
     * Restore Password
     */
    restorePassword: function restorePassword(data) {
      userProfileCache.removeAll();
      return resRestorePassword.save({}, data).$promise;
    },

    /**
     * Delete user profile
     */
    delete: function _delete(centerId, userId) {
      return res.delete({
        centerId: centerId || 0,
        userId: userId
      }).$promise;
    },

    /**
     * Delete GDPR data
     */
    deleteGdpr: function deleteGdpr(centerId, userId) {
      userProfileCache.removeAll();
      return resGdpr.delete({
        centerId: centerId || 0,
        userId: userId
      }).$promise;
    },

    /**
     * Pre-process user profile, convert string datetime to Date objects, strip uids, etc.
     */
    resolve: function resolve(user) {
      var self = this;
      user.fullName = helper.join([user.firstName, user.lastName], ' ');
      user.fullNameCompany = helper.join([user.company, user.fullName], ', ');
      user.login = helper.stripUid(user.login);
      user.email = helper.stripUid(user.email);
      user.joinDate = $filter('toDate')(user.joinDate);
      user.membershipStatus = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(helper).call(helper, optsMembershipStatus, user.membershipStatus);
      user.membershipPriceList = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(helper).call(helper, (user.options || {}).membershipPriceLists, user.membershipPriceListId);
      user.leadSource = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(helper).call(helper, (user.options || {}).leadSources, user.leadSourceId);
      (user.addresses || []).forEach(function (address) {
        upAddressService.resolve(address);

        if (address.type && address.type.id === 4 && !user.billingAddress) {
          user.billingAddress = address; // collect billing address
        }
      });

      if (!user.billingAddress && user.addresses && user.addresses.length > 0) {
        user.billingAddress = user.addresses[0]; // if no billing address, take the first one
      }

      (user.phones || []).forEach(function (phone) {
        upPhoneService.resolve(phone);
      });
      (user.coMembers || []).forEach(function (coMember) {
        self.coMember.resolve(coMember);
      });
      (user.mailboxes || []).forEach(function (mailbox) {
        self.mailbox.resolve(mailbox);
      });
      (user.creditCards || []).forEach(function (cc) {
        self.creditCard.resolve(cc);
      });
      (user.eChecks || []).forEach(function (eCheck) {
        self.eCheck.resolve(eCheck);
      });

      user.isNew = function () {
        // inject isNew method to user profile
        return self.isNew(this);
      };

      return user;
    },

    /**
     * Convert resolved user profile to data ready for POST/PUT
     */
    unresolve: function unresolve(user) {
      var data = {
        login: user.login,
        password: user.password,
        passwordConfirmation: user.passwordConfirmation,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        middleName: user.middleName,
        occupation: user.occupation,
        company: user.company,
        leadSourceId: (user.leadSource || {}).id,
        comments: user.comments,
        membershipPriceListId: (user.membershipPriceList || {}).id,
        membershipProductId: (user.membershipProduct || {}).id,
        membershipStatus: (user.membershipStatus || {}).id,
        membershipStartDate: $filter('date')(user.membershipStartDate, 'yyyy-MM-dd')
      };
      if (user.discountCode) data.discountCode = user.discountCode;
      return data;
    },

    /**
     * Binds test user data generator on pressing Alt + T to prevent wasting time on typing.
     * First Name, Last Name, Email, Login are unique with timestamp, password is 123456.
     */
    bindTestUserGenerator: function bindTestUserGenerator($scope, userProfile, reg) {
      document.addEventListener('keydown', fillTestUserData);
      $scope.$on('$destroy', function () {
        document.removeEventListener('keydown', fillTestUserData);
      });

      function fillTestUserData(event) {
        // Alt + T
        if (event.altKey && event.keyCode === 84) {
          var uid = 'test' + moment().unix();
          userProfile.firstName = uid;
          userProfile.lastName = uid;
          userProfile.email = uid + '@z5ut48g83bf04bvg93f.com';

          if (!reg || reg.member || reg.selfRegistration) {
            userProfile.login = uid;
            userProfile.password = 'Zx123456';
            userProfile.passwordConfirmation = 'Zx123456';
          }

          if (userProfile.addresses && userProfile.addresses.length) {
            userProfile.addresses[0].street = 'test123';
            userProfile.addresses[0].city = 'test123';
            userProfile.addresses[0].zip = 'test123';
          }

          if (userProfile.phones && userProfile.phones.length) {
            userProfile.phones[0].number = '1234567890';
          }

          if (reg && reg.member && !reg.selfRegistration) {
            userProfile.membershipType = userProfile.options.membershipTypes[0];
            userProfile.membershipProduct = userProfile.options.membershipTypes[0].membershipPackages[0];
            userProfile.membershipPriceList = userProfile.options.membershipPriceLists[0];
          }

          userProfile.leadSource = userProfile.options.leadSources[0];
          userProfile.termsOfService = true;
          $scope.$apply();
        }
      }
    },

    /**
     * Binds test billing data generator on pressing Alt + T to prevent wasting time on typing.
     */
    bindTestBillingGenerator: function bindTestBillingGenerator($scope, userProfile, reg) {
      var userProfileService = this;
      document.addEventListener('keydown', fillTestBillingData);
      $scope.$on('$destroy', function () {
        document.removeEventListener('keydown', fillTestBillingData);
      });

      function fillTestBillingData(event) {
        // Alt + T
        if (event.altKey && event.keyCode === 84) {
          userProfile.creditCards.forEach(function (cc) {
            if (userProfileService.creditCard.isNew(cc)) {
              cc.number = '4111111111111111';
              cc.ccv = '123';
              cc.expiryMonth = optsCCExpiryMonth[5];
              cc.expiryYear = optsCCExpiryYear[5];
            }
          });
          userProfile.eChecks.forEach(function (ec) {
            if (userProfileService.eCheck.isNew(ec)) {
              ec.bankName = 'Test Bank';
              ec.bankRoutingNumber = '021000021';
              ec.bankAccountNumber = '9876543210';
            }
          });
          $scope.$apply();
        }
      }
    },

    /**
     * Registers new user.
     * 1. Creates/updates main user profile part
     * 2. Creates/updates child entities: photo, addresses, phones, printer codes, documents
     */
    registerNewUser: function registerNewUser(centerId, userProfile, registration, fields) {
      var userProfileService = this;
      return userProfileService.save(centerId, userProfile, registration).catch(function (err) {
        return dwAlerts.error(err, 'Failed to create user profile.');
      }).then(function () {
        var promises = []; // Photo

        promises.push(userProfileService.photo.save(centerId, userProfile).catch(function (err) {
          return dwAlerts.error(err, 'Failed to upload photo.');
        })); // Addresses

        userProfile.addresses.forEach(function (addr) {
          promises.push(userProfileService.address.save(centerId, userProfile.id, addr).catch(function (err) {
            return dwAlerts.error(err, 'Failed to create address.');
          }));
        }); // Phones

        userProfile.phones.forEach(function (phone) {
          promises.push(userProfileService.phone.save(centerId, userProfile.id, phone).catch(function (err) {
            return dwAlerts.error(err, 'Failed to create phone.');
          }));
        }); // Printer Codes

        userProfile.printerCodes.forEach(function (prCode) {
          promises.push(userProfileService.printerCode.save(centerId, userProfile.id, prCode).catch(function (err) {
            return dwAlerts.error(err, 'Failed to create printer code.');
          }));
        }); // Documents

        userProfile.documents.forEach(function (doc) {
          promises.push(userProfileService.document.save(centerId, userProfile.id, doc).catch(function (err) {
            return dwAlerts.error(err, 'Failed to create document.');
          }));
        }); // Access Cards

        userProfile.accessCards.forEach(function (card) {
          card.userId = userProfile.id;
          promises.push(systemService.createAccessCard(centerId, card).catch(function (err) {
            return dwAlerts.error(err, 'Failed to create access card.');
          }));
        });

        if (fields) {
          promises.push(UserProfileFields.save(centerId, userProfile.id, fields).catch(function (err) {
            return dwAlerts.error(err, 'Failed to save custom fields.');
          }));
        } // Message board settings


        if (userProfile.saveMessageBoardUserSettings) {
          promises.push(userProfile.saveMessageBoardUserSettings().catch(function (err) {
            return dwAlerts.error(err, 'Failed to save message board user settings.');
          }));
        }

        return $q.all(promises);
      });
    },

    /**
     * Saves Billing Profile. Each credit card, handles default payment method, returns promise.
     */
    saveBillingProfile: function saveBillingProfile(centerId, user) {
      var userProfileService = this;
      var promises = [];
      user.creditCards.forEach(function (cc) {
        // Process only new credit cards
        if (userProfileService.creditCard.isNew(cc)) {
          promises.push(userProfileService.creditCard.save(centerId, user.id, cc).then(function (result) {
            return $timeout(function () {
              // End cc ffBlock editing
              var block = document.querySelector('#upCreditCard-' + result.id);
              if (block) angular.element(block).scope().$broadcast('ffBlock::EditEnd');
            });
          }).catch(function (err) {
            return dwAlerts.error(err, 'Failed to create credit card.');
          }));
        }
      });
      angular.forEach(user.eChecks, function (eCheck) {
        // Process only new eCheck
        if (userProfileService.eCheck.isNew(eCheck)) {
          promises.push(userProfileService.eCheck.save(centerId, user.id, eCheck).then(function (result) {
            return $timeout(function () {
              // End eCheck ffBlock editing
              var block = document.querySelector('#upECheck-' + result.id);
              if (block) angular.element(block).scope().$broadcast('ffBlock::EditEnd');
            });
          }).catch(function (err) {
            return dwAlerts.error(err, 'Failed to create eCheck.');
          }));
        }
      }); // All credit cards saved

      return $q.all(promises).then(function (results) {
        if (!user.billingMethod || !user.paymentMethodId && (user.billingMethod === 'cc' || user.billingMethod === 'ach')) {
          if (user.eChecks.length) {
            user.billingMethod = 'ach';
            user.paymentMethodId = user.eChecks[0].id;
          } else {
            if (user.creditCards.length) {
              user.billingMethod = 'cc';
              user.paymentMethodId = user.creditCards[0].id;
            } else {
              console.warn('userProfileService.saveBillingProfile: user has no payment methods');
            }
          }
        }

        return userProfileService.saveBillingMethod(centerId, user).then(function () {
          return results;
        });
      });
    },
    saveBillingMethod: function saveBillingMethod(centerId, user) {
      var userProfileService = this;
      var data = {
        billingMethod: user.billingMethod,
        paymentMethodId: user.paymentMethodId
      };
      return userProfileService.updateRaw(centerId, user, data).catch(function (err) {
        return dwAlerts.error(err, 'Failed to save billing method.');
      });
    }
  };
}]));

/***/ }),

/***/ "./common/services/user-profile/user-roles.service.js":
/*!************************************************************!*\
  !*** ./common/services/user-profile/user-roles.service.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Options for User Role
 */
angular.module('deskworks.userRoles', []).factory('userRoles', ["$rootScope", "$translate", function ($rootScope, $translate) {
  'use strict';

  var roles = {
    nonMember: {
      _name: 'GLOBAL.ROLE.NON_MEMBER',
      color: 'default',
      type: 'user'
    },
    member: {
      _name: 'GLOBAL.ROLE.MEMBER',
      color: 'primary',
      type: 'user'
    },
    accountant: {
      _name: 'GLOBAL.ROLE.ACCOUNTANT',
      color: 'info',
      type: 'admin'
    },
    coordinator: {
      _name: 'GLOBAL.ROLE.COORDINATOR',
      color: 'info',
      type: 'admin'
    },
    admin: {
      _name: 'GLOBAL.ROLE.ADMIN',
      color: 'info',
      type: 'admin'
    },
    management: {
      _name: 'GLOBAL.ROLE.MANAGEMENT',
      color: 'info',
      type: 'admin'
    },
    master: {
      _name: 'GLOBAL.ROLE.MASTER',
      color: 'info',
      type: 'admin'
    }
  };
  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(roles).forEach(function (key) {
      roles[key].name = $translate.instant(roles[key]._name);
    });
  }

  return roles;
}]);

/***/ }),

/***/ "./common/services/user-tasks.service.js":
/*!***********************************************!*\
  !*** ./common/services/user-tasks.service.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);






angular.module('deskworks.UserTasks.service', ['ngResource', 'autoCacheFactory', 'deskworks.config', 'deskworks.state', 'deskworks.sidebarTasks.service']).factory('UserTasks', ["$resource", "$timeout", "autoCacheFactory", "deskworksConfig", "state", "sidebarTasks", function ($resource, $timeout, autoCacheFactory, deskworksConfig, state, sidebarTasks) {
  'use strict';

  var cache = autoCacheFactory('user-tasks', 120);
  var res = $resource(deskworksConfig.getApiAbsUrl('/centers/:centerId/user-tasks'), {}, {
    query: {
      method: 'GET',
      cache: cache,
      isArray: true
    }
  });
  return {
    query: function query(centerId, userId) {
      return $timeout(function () {
        return null;
      }, window.cordova ? 1000 : 0) // guarantee auth cookies in cordova
      .then(function () {
        return res.query({
          centerId: centerId,
          userId: userId || undefined
        }).$promise.then(function (uTasks) {
          return deserialize(uTasks);
        });
      });
    },
    interpolateTaskUrl: interpolateTaskUrl,
    tasks: [] // user tasks cache

  };
  /**
   * Some transformations on userFunctions like converting functionId to url + params
   */

  function deserialize(uTasks) {
    if (!uTasks) return uTasks;
    uTasks.forEach(function (group) {
      group.open = false;
      group.tasks.forEach(function (task) {
        // Direct HTTP or HTTPS links
        if (task.url && task.url.match(/^https?:\/\//i)) {
          if (task.url.indexOf('{{target:self}}') >= 0) {
            task.target = '_self';
          } else {
            task.target = '_blank';
            task.rel = 'noopener';
          }

          task.url = task.url.replace('{{target:self}}', '');
          task.directUrl = interpolateTaskUrl(task.url);
          return;
        } // Search in known tasks


        task.url = sidebarTasks.indexOf(task.url) >= 0 ? '/' + task.url : null;
      });
    });
    return uTasks;
  }
  /**
   * Interpolates task direct URLs like https://www.jdoe.com/?center={{center}}&user={{user}}{{target:self}}
   */


  function interpolateTaskUrl(url) {
    var resultParams = [];
    var query = url.split('?');
    query = query[query.length - 1];
    if (!query) return url;
    query.split('&').forEach(function (param) {
      var result;
      param = param.split('=');

      if (param[1] === '{{center}}' && state.getCurrentCenterId()) {
        result = state.getCurrentCenterId();
      } else if (param[1] === '{{user}}' && state.isLoggedAdmin() && state.getCurrentUserId() !== state.getLoggedUserId()) {
        result = state.getCurrentUserId();
      }

      if (result) {
        resultParams.push(param[0] + '=' + encodeURIComponent(result));
      }
    });
    if (!resultParams.length) return url;
    resultParams = resultParams.join('&');
    query = url.split('?');
    query[query.length - 1] = resultParams;
    return query.join('?');
  }
}]);

/***/ })

}]);
//# sourceMappingURL=main~._common_services_c.js.map?_rev=f8417ff66929eaa4f932