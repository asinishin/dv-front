(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simple-reservation~._b"],{

/***/ "./bundles/simple-reservation sync recursive .*\\.tpl\\.html$":
/*!********************************************************!*\
  !*** ./bundles/simple-reservation sync .*\.tpl\.html$ ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./01-centers/centers.tpl.html": "./bundles/simple-reservation/01-centers/centers.tpl.html",
	"./02-reservation-categories/reservation-categories.tpl.html": "./bundles/simple-reservation/02-reservation-categories/reservation-categories.tpl.html",
	"./03-reservation-category/reservation-category.tpl.html": "./bundles/simple-reservation/03-reservation-category/reservation-category.tpl.html",
	"./04-date/date.tpl.html": "./bundles/simple-reservation/04-date/date.tpl.html",
	"./05-reservation-units/reservation-units.tpl.html": "./bundles/simple-reservation/05-reservation-units/reservation-units.tpl.html",
	"./06-time/simple-reservation-time.tpl.html": "./bundles/simple-reservation/06-time/simple-reservation-time.tpl.html",
	"./06-time/simple-select-time.tpl.html": "./bundles/simple-reservation/06-time/simple-select-time.tpl.html",
	"./08-purchase/purchase.tpl.html": "./bundles/simple-reservation/08-purchase/purchase.tpl.html",
	"./other/complete.tpl.html": "./bundles/simple-reservation/other/complete.tpl.html",
	"./other/confirm.tpl.html": "./bundles/simple-reservation/other/confirm.tpl.html",
	"./other/simple-reservation-sign-in.tpl.html": "./bundles/simple-reservation/other/simple-reservation-sign-in.tpl.html"
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
webpackContext.id = "./bundles/simple-reservation sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/simple-reservation sync recursive \\..+\\/.+\\.js$":
/*!*******************************************************!*\
  !*** ./bundles/simple-reservation sync \..+\/.+\.js$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./01-centers/centers.controller.js": "./bundles/simple-reservation/01-centers/centers.controller.js",
	"./02-reservation-categories/reservation-categories.controller.js": "./bundles/simple-reservation/02-reservation-categories/reservation-categories.controller.js",
	"./03-reservation-category/reservation-category.controller.js": "./bundles/simple-reservation/03-reservation-category/reservation-category.controller.js",
	"./03-reservation-category/swiper.directive.js": "./bundles/simple-reservation/03-reservation-category/swiper.directive.js",
	"./03-reservation-category/tabs.js": "./bundles/simple-reservation/03-reservation-category/tabs.js",
	"./04-date/date.controller.js": "./bundles/simple-reservation/04-date/date.controller.js",
	"./05-reservation-units/reservation-units.controller.js": "./bundles/simple-reservation/05-reservation-units/reservation-units.controller.js",
	"./06-time/simple-reservation-time.controller.js": "./bundles/simple-reservation/06-time/simple-reservation-time.controller.js",
	"./06-time/simple-select-time.component.js": "./bundles/simple-reservation/06-time/simple-select-time.component.js",
	"./07-user-profile/user-profile.controller.js": "./bundles/simple-reservation/07-user-profile/user-profile.controller.js",
	"./08-purchase/purchase.controller.js": "./bundles/simple-reservation/08-purchase/purchase.controller.js",
	"./other/complete.controller.js": "./bundles/simple-reservation/other/complete.controller.js",
	"./other/confirm.controller.js": "./bundles/simple-reservation/other/confirm.controller.js",
	"./other/simple-reservation-sign-in.controller.js": "./bundles/simple-reservation/other/simple-reservation-sign-in.controller.js"
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
webpackContext.id = "./bundles/simple-reservation sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/simple-reservation/01-centers/centers.controller.js":
/*!*********************************************************************!*\
  !*** ./bundles/simple-reservation/01-centers/centers.controller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _centers_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./centers.scss */ "./bundles/simple-reservation/01-centers/centers.scss");
/* harmony import */ var _centers_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_centers_scss__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SimpleReservationCentersCtrl', []).controller('SimpleReservationCentersCtrl', ["$scope", "$translate", "centers", "state", function ($scope, $translate, centers, state) {
  var vm = this;
  state.setPageTitle($translate.instant('SIMPLE_RES.CENTERS.PAGE_TITLE')); // Redirect to Select Reservation Category if there is only one center in centers list

  if (centers.length === 1) {
    state.replace();
    state.setPath(state.getPath() + '/centers/' + centers[0].id + '/types');
  }

  vm.centers = centers;

  vm.getMapUrl = function (center) {
    var _context, _context2;

    return 'https://maps.google.com?q=' + encodeURIComponent(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = "".concat(center.street1, ", ")).call(_context2, center.city, ", ")).call(_context, center.state));
  };
  /**
   * Select center handler, proceeds to the next step
   */


  vm.select = function (center) {
    if (state.getCurrentCenterId() !== center.id) state.setCurrentCenterId(center.id);
    return state.setPath('/simple-reservation/centers/' + center.id + '/types');
  };
}]));

/***/ }),

/***/ "./bundles/simple-reservation/01-centers/centers.scss":
/*!************************************************************!*\
  !*** ./bundles/simple-reservation/01-centers/centers.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/simple-reservation/01-centers/centers.tpl.html":
/*!****************************************************************!*\
  !*** ./bundles/simple-reservation/01-centers/centers.tpl.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"sr-centers\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-board> <div class=\"ff-grid ff-gutter-h ff-gutter-v\"> <ff-panel class=\"ff-panel-card\" flex=\"{md: '0 0 50%'}\" ng-repeat=\"center in vm.centers\"> <ff-img ff-src=\"{{::center.thumbnail}}\" ff-src-hq=\"{{::center.photo}}\" ff-alt=\"{{::center.name}}\" img-placeholder=\"{{'GLOBAL.NO_PHOTO' | translate}}\"></ff-img> <div flex=\"1 1 auto\"> <ff-header style=\"margin-bottom:.5rem\">{{::center.name}}</ff-header> <div class=\"ff-grid gutter-v-half\" flex=\"1 1 auto\"> <div flex=\"1 1 auto\"> <div class=\"sr-center-address\"> <ff-icon sense=\"location\"></ff-icon> <a href=\"{{::vm.getMapUrl(center)}}\" target=\"_blank\" rel=\"noopener\"> {{::center.street2 ? center.street1 + ', ' + center.street2 : center.street1}} </a> </div> <div class=\"sr-center-phone\"> <ff-icon sense=\"phone\"></ff-icon> <a href=\"tel:{{::center.phone}}\">{{::center.phone}}</a> </div> <div class=\"sr-center-email\"> <ff-icon sense=\"email\"></ff-icon> <a href=\"mailto:{{::center.email}}\" target=\"_blank\" rel=\"noopener\">{{::center.email}}</a> </div> </div> <ff-btn-group flex=\"0 0 auto\"> <ff-btn sense=\"ok\" ff-click=\"vm.select(center)\" aria-label=\"{{('SIMPLE_RES.BTN_SELECT' | translate) + ' ' + center.name}}\"> <span translate=\"SIMPLE_RES.BTN_SELECT\"></span> </ff-btn> </ff-btn-group> </div> </div> </ff-panel> </div> </ff-board> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/simple-reservation/02-reservation-categories/reservation-categories.controller.js":
/*!***************************************************************************************************!*\
  !*** ./bundles/simple-reservation/02-reservation-categories/reservation-categories.controller.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reservation_categories_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation-categories.scss */ "./bundles/simple-reservation/02-reservation-categories/reservation-categories.scss");
/* harmony import */ var _reservation_categories_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reservation_categories_scss__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SimpleReservationCategoriesCtrl', []).controller('SimpleReservationCategoriesCtrl', ["$scope", "$translate", "state", "center", "reservationCategories", "settings", function ($scope, $translate, state, center, reservationCategories, settings) {
  var vm = this;
  state.setPageTitle($translate.instant('SIMPLE_RES.CATEGORIES.PAGE_TITLE'));
  vm.center = center;
  vm.categories = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(reservationCategories).call(reservationCategories, function (category) {
    var _context, _context2;

    var staffOnlyCount = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = category.reservationUnits).call(_context, function (unit) {
      return !settings.hideStaffOnlyUnits && unit.whoCanReserve === 'staffOnly';
    }).length;

    var availableCount = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = category.reservationUnits).call(_context2, function (unit) {
      return unit.whoCanReserve !== 'notAvailable' && (unit.whoCanReserve !== 'staffOnly' || state.isLoggedAdmin()) && (unit.whoCanReserve !== 'member' || state.isLoggedMember() || state.isLoggedAdmin()) && (unit.whoCanReserve !== 'nonMember' || state.isLoggedNonMember() || state.isLoggedAdmin() || !state.getLoggedUserId());
    }).length;

    category.staffOnly = !!staffOnlyCount && !availableCount;
    return !!availableCount || !!staffOnlyCount;
  });
  /**
   * Select reservation category handler, proceeds to the next step
   */

  vm.select = function (category) {
    return state.setPath(state.getPath() + '/' + category.id);
  };
  /**
   * Back button handler
   */


  vm.back = state.back;
}]));

/***/ }),

/***/ "./bundles/simple-reservation/02-reservation-categories/reservation-categories.scss":
/*!******************************************************************************************!*\
  !*** ./bundles/simple-reservation/02-reservation-categories/reservation-categories.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/simple-reservation/02-reservation-categories/reservation-categories.tpl.html":
/*!**********************************************************************************************!*\
  !*** ./bundles/simple-reservation/02-reservation-categories/reservation-categories.tpl.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"sr-categories\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-board> <div class=\"ff-grid gutter-h gutter-v\"> <ff-panel class=\"ff-panel-card\" flex=\"{md: '0 0 50%'}\" ng-repeat=\"category in vm.categories\"> <ff-img ff-src=\"{{::category.thumbnail}}\" ff-src-hq=\"{{::category.photo}}\" ff-alt=\"{{::category.name}}\" img-placeholder=\"{{'GLOBAL.NO_PHOTO' | translate}}\"></ff-img> <div flex=\"1 1 auto\" class=\"ff-col\"> <ff-header style=\"margin-bottom:.5rem\">{{::category.name}}</ff-header> <div class=\"ff-grid gutter-v-half\" flex=\"1 1 auto\"> <div flex=\"1 1 100%\" class=\"sr-cat-desc\" ng-if=\"::category.description\" ng-bind-html=\"::category.description\"></div> <div flex=\"1 1 auto\" ng-if=\"::category.staffOnly\"> <span translate=\"RESERVATIONS.STAFF_ONLY\" translate-values=\"{ centerName: vm.center.name, centerPhone: vm.center.phone, centerEmail: vm.center.email }\"> </span> </div> <ff-btn-group flex=\"0 0 auto\" ng-if=\"::!category.staffOnly\"> <ff-btn sense=\"ok\" ff-click=\"vm.select(category)\" aria-label=\"{{('SIMPLE_RES.BTN_SELECT' | translate) + ' ' + category.name}}\"> <span translate=\"SIMPLE_RES.BTN_SELECT\"></span> </ff-btn> </ff-btn-group> </div> </div> </ff-panel> </div> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/simple-reservation/03-reservation-category/reservation-category.controller.js":
/*!***********************************************************************************************!*\
  !*** ./bundles/simple-reservation/03-reservation-category/reservation-category.controller.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reservation_category_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reservation-category.scss */ "./bundles/simple-reservation/03-reservation-category/reservation-category.scss");
/* harmony import */ var _reservation_category_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reservation_category_scss__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SimpleReservationCategoryCtrl', ['ngSanitize', 'ui.bootstrap.tabs', 'swiper']).controller('SimpleReservationCategoryCtrl', ["$scope", "$route", "$sce", "$translate", "reservationCategory", "state", function ($scope, $route, $sce, $translate, reservationCategory, state) {
  var _context2;

  var vm = this;
  vm.centerId = $route.current.params.centerId;
  vm.category = reservationCategory;
  state.setPageTitle($translate.instant('SIMPLE_RES.CATEGORY.PAGE_TITLE'));
  vm.category.description = $sce.trustAsHtml(vm.category.description); // Convert photo objects to raw urls array for slider

  if (vm.category.photos) {
    var _context;

    vm.category.photoUrls = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = vm.category.photos).call(_context, function (photo) {
      return photo.url;
    });
  } // Filter out empty products


  vm.category.products = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = vm.category.products).call(_context2, function (p) {
    return p.priceItems && p.priceItems.length;
  });
  /**
   * Reserve button handler, proceeds to the next step
   */

  vm.reserve = function () {
    return state.setPath(state.getPath() + '/dates');
  };
  /**
   * Back button handler
   */


  vm.back = state.back;
}]));

/***/ }),

/***/ "./bundles/simple-reservation/03-reservation-category/reservation-category.scss":
/*!**************************************************************************************!*\
  !*** ./bundles/simple-reservation/03-reservation-category/reservation-category.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/simple-reservation/03-reservation-category/reservation-category.tpl.html":
/*!******************************************************************************************!*\
  !*** ./bundles/simple-reservation/03-reservation-category/reservation-category.tpl.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"sr-category-details rental-type-details\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-board> <ff-panel class=\"sr-category-panel\"> <ff-header style=\"margin-bottom:.5rem\">{{vm.category.name}}</ff-header> <div class=\"sr-swiper-wrapper\" ng-if=\"vm.category.photos.length\"> <div class=\"sr-swiper-content\"> <swiper images=\"vm.category.photoUrls\" thumbnail=\"vm.category.thumbnail\" ff-alt=\"{{vm.category.name}}\"></swiper> </div> </div> <div class=\"tabs-block\"> <uib-tabset type=\"pills\"> <uib-tab heading=\"{{'SIMPLE_RES.CATEGORY.PRICES' | translate}}\"> <div ng-repeat=\"product in vm.category.products\" class=\"sr-category-products\"> <h3 ng-bind=\"product.name\"></h3> <div class=\"ff-row\" ng-repeat=\"priceItem in product.priceItems\"> <div flex=\"1 1 auto\" ng-bind=\"priceItem.name\"></div> <div flex=\"0 0 70px\" ng-bind=\"priceItem.price | currency\"></div> </div> </div> <div ng-hide=\"vm.category.products && vm.category.products.length\" translate=\"SIMPLE_RES.CATEGORY.PRICES.EMPTY\"></div> </uib-tab> <uib-tab heading=\"{{'SIMPLE_RES.CATEGORY.DESCRIPTION' | translate}}\"> <div ng-bind-html=\"vm.category.description || ('SIMPLE_RES.CATEGORY.DESCRIPTION.EMPTY' | translate)\"></div> </uib-tab> </uib-tabset> </div> </ff-panel> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"ok\" ff-click=\"vm.reserve()\"><span translate=\"SIMPLE_RES.CATEGORY.BTN_RESERVE\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/simple-reservation/03-reservation-category/swiper.directive.js":
/*!********************************************************************************!*\
  !*** ./bundles/simple-reservation/03-reservation-category/swiper.directive.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/dist/idangerous.swiper.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _swiper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper.scss */ "./bundles/simple-reservation/03-reservation-category/swiper.scss");
/* harmony import */ var _swiper_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swiper_scss__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('swiper', []).value('swiperCount', 0) // Incremented each time a new swiper is created. Used as UID for swiper-container.
.directive('swiper', ["$timeout", "swiperCount", function ($timeout, swiperCount) {
  return {
    restrict: 'E',
    scope: {
      images: '<',
      thumbnail: '<',
      ffAlt: '@'
    },
    link: function link($scope, $element, $attrs) {
      var swiper;
      $element.addClass('loading'); // Wait until images get available

      $scope.$watch('images', function () {
        if (angular.isDefined($scope.images) && angular.isUndefined(swiper)) {
          createSwiper();
        }
      });

      function createSwiper() {
        $scope.swiperContainer = 'swiper-' + swiperCount++;
        $timeout(function () {
          // wait for digest complete to instantiate swiper
          swiper = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a('#' + $scope.swiperContainer, {
            // calculateHeight: true,
            // resizeReInit: true,
            pagination: '.swiper-pagination',
            paginationClickable: true // onImagesReady: swiper => $element.removeClass('loading'),

          }); // Show swiper only when the first image is loaded

          var images = document.getElementById($scope.swiperContainer).getElementsByTagName('img');

          if (images.length > 0) {
            var image = new Image();

            image.onload = function () {
              angular.element(document.getElementById($scope.swiperContainer)).css('opacity', 1);
              $element.removeClass('loading');
            };

            image.src = images[0].src;
          }
        }, 0, false);
      }

      $scope.prev = function () {
        swiper.swipePrev();
      };

      $scope.next = function () {
        swiper.swipeNext();
      };
    },
    template: '<div class="swiper-thumbnail" ng-if="thumbnail"><ff-img ff-src="{{thumbnail}}" alt="{{ffAlt}}" img-placeholder="{{\'GLOBAL.NO_PHOTO\' | translate}}"></div>' + '<div class="swiper-container" id="{{swiperContainer}}">' + '<div class="swiper-wrapper">' + '<div class="swiper-slide" ng-repeat="image in images"><img ng-src="{{image}}" alt="{{ffAlt}}"></div>' + '</div>' + '<div class="swiper-pagination" ng-show="images.length > 1"></div>' + '<div class="swiper-prev" ng-show="images.length > 1" ng-click="prev()" aria-label="{{\'SIMPLE_RES.CATEGORY.PREV_SLIDE\' | translate}}"><span class="fa fa-chevron-left"></span></div>' + '<div class="swiper-next" ng-show="images.length > 1" ng-click="next()" aria-label="{{\'SIMPLE_RES.CATEGORY.NEXT_SLIDE\' | translate}}"><span class="fa fa-chevron-right"></span></div>' + '</div>'
  };
}]));

/***/ }),

/***/ "./bundles/simple-reservation/03-reservation-category/swiper.scss":
/*!************************************************************************!*\
  !*** ./bundles/simple-reservation/03-reservation-category/swiper.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/simple-reservation/03-reservation-category/tabs.js":
/*!********************************************************************!*\
  !*** ./bundles/simple-reservation/03-reservation-category/tabs.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tabs_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.scss */ "./bundles/simple-reservation/03-reservation-category/tabs.scss");
/* harmony import */ var _tabs_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tabs_scss__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Isolated ui.bootstrap.tabs module from ui.bootstrap package
 */

angular.module('ui.bootstrap.tabs', []).controller('UibTabsetController', ['$scope', function ($scope) {
  var ctrl = this,
      oldIndex;
  ctrl.tabs = [];

  ctrl.select = function (index, evt) {
    if (!destroyed) {
      var previousIndex = findTabIndex(oldIndex);
      var previousSelected = ctrl.tabs[previousIndex];

      if (previousSelected) {
        previousSelected.tab.onDeselect({
          $event: evt,
          $selectedIndex: index
        });

        if (evt && evt.isDefaultPrevented()) {
          return;
        }

        previousSelected.tab.active = false;
      }

      var selected = ctrl.tabs[index];

      if (selected) {
        selected.tab.onSelect({
          $event: evt
        });
        selected.tab.active = true;
        ctrl.active = selected.index;
        oldIndex = selected.index;
      } else if (!selected && angular.isDefined(oldIndex)) {
        ctrl.active = null;
        oldIndex = null;
      }
    }
  };

  ctrl.addTab = function addTab(tab) {
    var _context;

    ctrl.tabs.push({
      tab: tab,
      index: tab.index
    });

    _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default()(_context = ctrl.tabs).call(_context, function (t1, t2) {
      if (t1.index > t2.index) {
        return 1;
      }

      if (t1.index < t2.index) {
        return -1;
      }

      return 0;
    });

    if (tab.index === ctrl.active || !angular.isDefined(ctrl.active) && ctrl.tabs.length === 1) {
      var newActiveIndex = findTabIndex(tab.index);
      ctrl.select(newActiveIndex);
    }
  };

  ctrl.removeTab = function removeTab(tab) {
    var _context2;

    var index;

    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].tab === tab) {
        index = i;
        break;
      }
    }

    if (ctrl.tabs[index].index === ctrl.active) {
      var newActiveTabIndex = index === ctrl.tabs.length - 1 ? index - 1 : index + 1 % ctrl.tabs.length;
      ctrl.select(newActiveTabIndex);
    }

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = ctrl.tabs).call(_context2, index, 1);
  };

  $scope.$watch('tabset.active', function (val) {
    if (angular.isDefined(val) && val !== oldIndex) {
      ctrl.select(findTabIndex(val));
    }
  });
  var destroyed;
  $scope.$on('$destroy', function () {
    destroyed = true;
  });

  function findTabIndex(index) {
    for (var i = 0; i < ctrl.tabs.length; i++) {
      if (ctrl.tabs[i].index === index) {
        return i;
      }
    }
  }
}]).directive('uibTabset', function () {
  return {
    transclude: true,
    replace: true,
    scope: {},
    bindToController: {
      active: '=?',
      type: '@'
    },
    controller: 'UibTabsetController',
    controllerAs: 'tabset',
    template: '<div>' + '<ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>' + '<div class="tab-content">' + '<div class="tab-pane" ng-repeat="tab in tabset.tabs" ng-class="{active: tabset.active === tab.index}" uib-tab-content-transclude="tab"></div>' + '</div>' + '</div>',
    link: function link(scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
    }
  };
}).directive('uibTab', ['$parse', function ($parse) {
  return {
    require: '^uibTabset',
    replace: true,
    template: '<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">' + '<a href ng-click="select($event)" class="nav-link" role="button" uib-tab-heading-transclude>{{heading}}</a>' + '</li>',
    transclude: true,
    scope: {
      heading: '@',
      index: '=?',
      classes: '@?',
      onSelect: '&select',
      //This callback is called in contentHeadingTransclude
      //once it inserts the tab's content into the dom
      onDeselect: '&deselect'
    },
    controller: function controller() {//Empty controller so other directives can require being 'under' a tab
    },
    controllerAs: 'tab',
    link: function link(scope, elm, attrs, tabsetCtrl, transclude) {
      scope.disabled = false;

      if (attrs.disable) {
        scope.$parent.$watch($parse(attrs.disable), function (value) {
          scope.disabled = !!value;
        });
      }

      if (angular.isUndefined(attrs.index)) {
        if (tabsetCtrl.tabs && tabsetCtrl.tabs.length) {
          var _context3;

          scope.index = Math.max.apply(null, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = tabsetCtrl.tabs).call(_context3, function (t) {
            return t.index;
          })) + 1;
        } else {
          scope.index = 0;
        }
      }

      if (angular.isUndefined(attrs.classes)) {
        scope.classes = '';
      }

      scope.select = function (evt) {
        if (!scope.disabled) {
          var index;

          for (var i = 0; i < tabsetCtrl.tabs.length; i++) {
            if (tabsetCtrl.tabs[i].tab === scope) {
              index = i;
              break;
            }
          }

          tabsetCtrl.select(index, evt);
        }
      };

      tabsetCtrl.addTab(scope);
      scope.$on('$destroy', function () {
        tabsetCtrl.removeTab(scope);
      }); //We need to transclude later, once the content container is ready.
      //when this link happens, we're inside a tab heading.

      scope.$transcludeFn = transclude;
    }
  };
}]).directive('uibTabHeadingTransclude', function () {
  return {
    restrict: 'A',
    require: '^uibTab',
    link: function link(scope, elm) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
}).directive('uibTabContentTransclude', function () {
  return {
    restrict: 'A',
    require: '^uibTabset',
    link: function link(scope, elm, attrs) {
      var tab = scope.$eval(attrs.uibTabContentTransclude).tab; //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.

      tab.$transcludeFn(tab.$parent, function (contents) {
        angular.forEach(contents, function (node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };

  function isTabHeading(node) {
    return node.tagName && (node.hasAttribute('uib-tab-heading') || node.hasAttribute('data-uib-tab-heading') || node.hasAttribute('x-uib-tab-heading') || node.tagName.toLowerCase() === 'uib-tab-heading' || node.tagName.toLowerCase() === 'data-uib-tab-heading' || node.tagName.toLowerCase() === 'x-uib-tab-heading' || node.tagName.toLowerCase() === 'uib:tab-heading');
  }
});

/***/ }),

/***/ "./bundles/simple-reservation/03-reservation-category/tabs.scss":
/*!**********************************************************************!*\
  !*** ./bundles/simple-reservation/03-reservation-category/tabs.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/simple-reservation/04-date/date.controller.js":
/*!***************************************************************!*\
  !*** ./bundles/simple-reservation/04-date/date.controller.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.scss */ "./bundles/simple-reservation/04-date/date.scss");
/* harmony import */ var _date_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_date_scss__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SimpleReservationDateCtrl', []).controller('SimpleReservationDateCtrl', ["$scope", "$route", "$filter", "$translate", "unavailableDates", "state", function ($scope, $route, $filter, $translate, unavailableDates, state) {
  var vm = this;
  state.setPageTitle($translate.instant('SIMPLE_RES.DATE.PAGE_TITLE'));
  vm.centerId = $route.current.params.centerId;
  vm.reservationTypeId = $route.current.params.reservationTypeId;
  vm.unavailableDates = unavailableDates;
  vm.dateMin = moment().startOf('day');
  /**
   * Callback for datepicker to disable unavailable dates
   */

  vm.checkDateDisabled = function (date) {
    return vm.unavailableDates.indexOf($filter('date')(date, 'yyyy-MM-dd')) >= 0;
  };
  /**
   * Next button handler
   */


  vm.next = function () {
    if (angular.isDefined(vm.selectedDate)) {
      return state.setPath(state.getPath() + '/' + $filter('date')(vm.selectedDate, 'yyyy-MM-dd') + '/units');
    }
  };
  /**
   * Back button handler
   */


  vm.back = state.back;
}]));

/***/ }),

/***/ "./bundles/simple-reservation/04-date/date.scss":
/*!******************************************************!*\
  !*** ./bundles/simple-reservation/04-date/date.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/simple-reservation/04-date/date.tpl.html":
/*!**********************************************************!*\
  !*** ./bundles/simple-reservation/04-date/date.tpl.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"sr-date\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-board> <ff-panel class=\"sr-date-panel\"> <ff-datepicker ff-model=\"vm.selectedDate\" date-min=\"vm.dateMin\" date-disabled=\"vm.checkDateDisabled($date)\"></ff-datepicker> </ff-panel> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"back\" ff-click=\"vm.back()\"> <span translate=\"GLOBAL.BTN_BACK\"></span> </ff-btn> <ff-btn sense=\"next\" type=\"submit\" ff-disabled=\"!vm.selectedDate\" ff-click=\"vm.next()\"> <span translate=\"GLOBAL.BTN_NEXT\"></span> </ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/simple-reservation/05-reservation-units/reservation-units.controller.js":
/*!*****************************************************************************************!*\
  !*** ./bundles/simple-reservation/05-reservation-units/reservation-units.controller.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reservation_units_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-units.scss */ "./bundles/simple-reservation/05-reservation-units/reservation-units.scss");
/* harmony import */ var _reservation_units_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reservation_units_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_res_bar_res_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/res-bar/res-bar.component */ "./shared/res-bar/res-bar.component.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SimpleReservationUnitsCtrl', [shared_res_bar_res_bar_component__WEBPACK_IMPORTED_MODULE_4__["default"].name]).controller('SimpleReservationUnitsCtrl', ["$scope", "$route", "$translate", "$locale", "state", "resUnits", "center", "settings", function ($scope, $route, $translate, $locale, state, resUnits, center, settings) {
  var vm = this;
  state.setPageTitle($translate.instant('SIMPLE_RES.UNITS.PAGE_TITLE'));
  vm.center = center;
  vm.resTypeId = $route.current.params.reservationTypeId;
  vm.date = $route.current.params.date;
  vm.units = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(resUnits).call(resUnits, function (unit) {
    return unit.availabilities.length || unit.whoCanReserve === 'staffOnly' && !settings.hideStaffOnlyUnits;
  });
  /**
   * Reloads the current route as time availability depends on auth state.
   */

  $scope.$on('LOGOUT', $route.reload);
  $scope.$on('LOGIN', $route.reload);
  /**
   * Select reservation unit handler, proceeds to next step
   */

  vm.select = function (unit) {
    return state.setPath(state.getPath() + '/' + unit.id);
  };
  /**
   * Skip this screen if only one unit is available and it's not staffOnly
   */


  if (vm.units.length === 1 && vm.units[0].whoCanReserve !== 'staffOnly') {
    state.replace();
    vm.select(vm.units[0]);
  }
  /**
   * Back button handler
   */


  vm.back = state.back;
}]));

/***/ }),

/***/ "./bundles/simple-reservation/05-reservation-units/reservation-units.scss":
/*!********************************************************************************!*\
  !*** ./bundles/simple-reservation/05-reservation-units/reservation-units.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/simple-reservation/05-reservation-units/reservation-units.tpl.html":
/*!************************************************************************************!*\
  !*** ./bundles/simple-reservation/05-reservation-units/reservation-units.tpl.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"sr-units\"> <h1 class=\"page-title ff-row\"> <span>{{state.getPageTitle()}}</span> <div flex=\"none\" class=\"ff-col legend\"> <div class=\"available\" flex=\"none\" translate=\"RESERVATIONS.CALENDAR.LEGEND.AVAILABLE\"></div> <div class=\"unavailable\" flex=\"none\" translate=\"RESERVATIONS.CALENDAR.LEGEND.UNAVAILABLE\"></div> </div> </h1> <ff-board> <ff-panel ng-if=\"!vm.units.length\"><span translate=\"SIMPLE_RES.UNITS.EMPTY\"></span></ff-panel> <div class=\"em\" style=\"margin:0 0 .5rem 1rem\">{{vm.date | date:'longDate'}}</div> <div class=\"ff-grid ff-gutter-h ff-gutter-v\"> <ff-panel class=\"ff-panel-card\" flex=\"{md: '0 0 50%'}\" ng-repeat=\"unit in vm.units\"> <ff-header style=\"margin-bottom:.5rem\">{{::unit.name}}</ff-header> <res-bar unit=\"unit\" availabilities=\"unit.$$availabilities\"></res-bar> <div class=\"ff-tmargin\" style=\"height:100%\"> <div class=\"ff-grid gutter-h-half\" style=\"flex-wrap:nowrap;align-items:center\"> <div ng-if=\"unit.capacity\" translate=\"GLOBAL.UNIT_CAPACITY\" translate-values=\"{ capacity: unit.capacity }\" flex=\"auto\" style=\"font-size:.9rem;line-height:1.1\"></div> <ff-btn-group flex=\"none\" style=\"margin-top:auto\"> <ff-btn sense=\"ok\" ff-click=\"vm.select(unit)\" aria-label=\"{{('SIMPLE_RES.BTN_SELECT' | translate) + ' ' + unit.name}}\" ff-disabled=\"!unit.$$availabilities.length\"> <span translate=\"SIMPLE_RES.BTN_SELECT\"></span></ff-btn> </ff-btn-group> </div> </div> </ff-panel> </div> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/simple-reservation/06-time/simple-reservation-time.controller.js":
/*!**********************************************************************************!*\
  !*** ./bundles/simple-reservation/06-time/simple-reservation-time.controller.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_reservation_time_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-reservation-time.scss */ "./bundles/simple-reservation/06-time/simple-reservation-time.scss");
/* harmony import */ var _simple_reservation_time_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simple_reservation_time_scss__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SimpleReservationTimeCtrl', ['deskworks.simpleSelectTime']).controller('SimpleReservationTimeCtrl', ["$scope", "$translate", "state", function ($scope, $translate, state) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('SIMPLE_RES.TIME.PAGE_TITLE'));
}]));

/***/ }),

/***/ "./bundles/simple-reservation/06-time/simple-reservation-time.scss":
/*!*************************************************************************!*\
  !*** ./bundles/simple-reservation/06-time/simple-reservation-time.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/simple-reservation/06-time/simple-reservation-time.tpl.html":
/*!*****************************************************************************!*\
  !*** ./bundles/simple-reservation/06-time/simple-reservation-time.tpl.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <simple-select-time center=\"$resolve.center\" cal-data=\"$resolve.calData\" reservation-prices=\"$resolve.reservationPrices\" hide-recurring-reservations=\"$resolve.settings.hideRecurringReservations\" reservation-fields=\"$resolve.reservationFields\"></simple-select-time> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/simple-reservation/06-time/simple-select-time.component.js":
/*!****************************************************************************!*\
  !*** ./bundles/simple-reservation/06-time/simple-select-time.component.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_reservation_form_res_reservation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/reservation-form/res-reservation.component */ "./shared/reservation-form/res-reservation.component.js");

/**
 * simpleSelectTime component - time selection for Simple Reservation
 */

angular.module('deskworks.simpleSelectTime', ['deskworks.resReservation']).component('simpleSelectTime', {
  templateUrl: '06-time/simple-select-time.tpl.html',
  controller: 'ResReservationController',
  bindings: {
    center: '<',
    calData: '<',
    date: '<',
    hideRecurringReservations: '<',
    reservationFields: '<'
  }
});

/***/ }),

/***/ "./bundles/simple-reservation/06-time/simple-select-time.tpl.html":
/*!************************************************************************!*\
  !*** ./bundles/simple-reservation/06-time/simple-select-time.tpl.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form class=\"sr-time\" novalidate> <ff-board> <ff-panel class=\"sr-time-panel\"> <ff-panel-header>{{$ctrl.date | date:'longDate'}}</ff-panel-header> <div class=\"sr-time-container\"> <div class=\"ff-relative\"> <time-selector class=\"ff-bmargin\" date=\"$ctrl.date\" time-start=\"$ctrl.timeStart\" time-end=\"$ctrl.timeEnd\" scale=\"$ctrl.reservationUnit.scale\" buffer=\"$ctrl.reservationUnit.buffer\" limit-min=\"$ctrl.reservationUnit.limitMin\" reservations=\"$ctrl.reservationUnit.reservations\" availabilities=\"$ctrl.reservationUnit.availabilities\"> </time-selector> <ff-info ng-if=\"!$ctrl.reservationUnit.availabilities.length && $ctrl.reservationUnit.whoCanReserve === 'staffOnly'\" class=\"staff-only\" translate=\"RESERVATIONS.STAFF_ONLY\" translate-values=\"{ centerName: $ctrl.center.name, centerPhone: $ctrl.center.phone, centerEmail: $ctrl.center.email }\"> </ff-info> </div> <ff-textarea name=\"reservationNote\" ff-maxlength=\"250\" ff-model=\"$ctrl.reservationNote\" rowspan=\"2\" placeholder=\"{{'RESERVATIONS.NOTES' | translate}}\" aria-label=\"{{'RESERVATIONS.NOTES' | translate}}\"></ff-textarea> <label class=\"sr-time-email\"> <ff-checkbox name=\"emailConfirmation\" ff-model=\"$ctrl.emailConfirmation\"> <span translate=\"RESERVATIONS.EMAIL_CONFIRMATION\"></span> </ff-checkbox> </label> <div class=\"ff-grid ff-gutter-h\" ng-if=\"$ctrl.hasRecurring()\"> <label class=\"ff-row\" flex=\"1 1 auto\"> <ff-label flex=\"0 1 64px\"> <span translate=\"RESERVATIONS.REPEAT_FREQUENCY\"></span> </ff-label> <ff-select name=\"repeatFrequency\" ff-model=\"$ctrl.repeatFrequency\" ff-options=\"opt.name for opt in $ctrl.optsRepeatFrequency\" ff-change=\"$ctrl.repeatDuration = $ctrl.repeatFrequency.repeatDurationOptions[0]\"></ff-select> </label> <label class=\"ff-row\" ng-if=\"$ctrl.repeatFrequency.repeatDurationOptions\" flex=\"{md: '0 1 200px'}\"> <ff-label flex=\"0 1 86px\"> <span translate=\"RESERVATIONS.REPEAT_DURATION\"></span> </ff-label> <ff-select name=\"repeatDuration\" flex=\"0 1 50px\" ff-model=\"$ctrl.repeatDuration\" ff-options=\"opt for opt in $ctrl.repeatFrequency.repeatDurationOptions\"></ff-select> <ff-label>{{$ctrl.repeatFrequency.repeatDurationFilter($ctrl.repeatDuration, true)}}</ff-label> </label> </div> <fd-field field=\"field\" ng-repeat=\"field in $ctrl.reservationType.fields\"></fd-field> </div> </ff-panel> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" type=\"submit\" ff-disabled=\"!$ctrl.timeStart || !$ctrl.timeEnd || !$ctrl.reservationUnit.availabilities.length && $ctrl.reservationUnit.whoCanReserve === 'staffOnly'\" ff-click=\"$ctrl.next()\"> <span translate=\"GLOBAL.BTN_NEXT\"></span> </ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/simple-reservation/07-user-profile/user-profile.controller.js":
/*!*******************************************************************************!*\
  !*** ./bundles/simple-reservation/07-user-profile/user-profile.controller.js ***!
  \*******************************************************************************/
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




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SimpleReservationUserProfileCtrl', ['ngRoute', 'deskworks.userProfile.service', 'deskworks.center.service', 'deskworks.routeHelper', 'deskworks.helper', 'deskworks.ReservationCost']).controller('SimpleReservationUserProfileCtrl', ["$scope", "$filter", "$timeout", "$q", "$route", "$translate", "dwAlerts", "helper", "state", "userProfile", "reg", "userProfileService", "centerService", "purchaseService", "ReservationCost", function ($scope, $filter, $timeout, $q, $route, $translate, dwAlerts, helper, state, userProfile, reg, userProfileService, centerService, purchaseService, ReservationCost) {
  var vm = this;
  vm.reg = reg;
  vm.userProfile = userProfile;
  vm.schema = userProfile.schema;
  state.setPageTitle($translate.instant(vm.reg.new ? 'USER_PROFILE.NEW_USER.PAGE_TITLE' : 'USER_PROFILE.PAGE_TITLE', {
    userName: vm.userProfile.fullNameCompany
  }));
  /**
   * Bind test user data generator
   */

  userProfileService.bindTestUserGenerator($scope, vm.userProfile, vm.reg);
  /**
   * Next button handler
   */

  vm.next = function () {
    if (helper.pointFirstInvalid('#userProfile')) return;
    var timeStart = $filter('toDate')(state.getParam('start'));
    var timeEnd = $filter('toDate')(state.getParam('end'));
    return (vm.reg.new ? userProfileService.registerNewUser(0, vm.userProfile) : $q.when()).then(function () {
      if (vm.reg.new) {
        // Need to login under just created user
        return state.login(vm.userProfile.login, vm.userProfile.password).catch(function (err) {
          return dwAlerts.error(err, 'Failed to login under created user.');
        });
      }
    }).then(function () {
      return ReservationCost.calcAsync($route.current.params.centerId, vm.userProfile.id, $route.current.params.reservationUnitId, state.getParam('start'), state.getParam('end'));
    }).then(function (cost) {
      if (!cost) return state.setPath(state.getPath() + '/confirm').then(function () {
        return $q.reject();
      }); // free reservation - no purchase, proceed to confirm step
    }).then(function () {
      var centerId = $route.current.params.centerId;
      var userId = vm.userProfile.id;
      var data = {
        reservationUnitId: $route.current.params.reservationUnitId,
        reservationFrom: state.getParam('start'),
        reservationTo: state.getParam('end'),
        reservationRepeatFrequency: state.getParam('freq'),
        reservationRepeatDuration: state.getParam('duration')
      };
      return purchaseService.createPurchaseForReservation(centerId, userId, data).catch(function (err) {
        return dwAlerts.error(err, 'Failed to create purchase for reservation.');
      }).finally(function () {
        if (vm.reg.new) {
          state.replace();
          $route.updateParams({
            userId: vm.userProfile.id
          });
        }
      });
    }).then(function (result) {
      return $timeout(function () {
        // Navigate on next digest as current digest replaces history state
        if (result.purchasePackageId) state.setParam('purchasePackageId', result.purchasePackageId);
        return state.setPath(state.getPath() + '/purchases/' + result.id);
      });
    }).catch(angular.noop);
  };
}]));

/***/ }),

/***/ "./bundles/simple-reservation/08-purchase/purchase.controller.js":
/*!***********************************************************************!*\
  !*** ./bundles/simple-reservation/08-purchase/purchase.controller.js ***!
  \***********************************************************************/
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
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/new-billing-profile/new-billing-profile.directive */ "./shared/new-billing-profile/new-billing-profile.directive.js");
/* harmony import */ var shared_need_help_need_help_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/need-help/need-help.directive */ "./shared/need-help/need-help.directive.js");
/* harmony import */ var shared_reservation_agreement_reservation_agreement_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/reservation-agreement/reservation-agreement.directive */ "./shared/reservation-agreement/reservation-agreement.directive.js");
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");
/* harmony import */ var shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice.directive */ "./shared/dw-invoice/dw-invoice.directive.js");
/* harmony import */ var shared_dw_invoice_dw_invoice_payment_processing_fee_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice-payment-processing-fee.directive */ "./shared/dw-invoice/dw-invoice-payment-processing-fee.directive.js");
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");














/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SimpleReservationPurchaseCtrl', ['ngRoute', 'deskworks.helper', 'deskworks.StaffHelpCtrl', 'deskworks.userProfile.service', 'deskworks.purchase.service', 'deskworks.reservationService', 'deskworks.reservationUnit.optsRepeatFrequency', shared_new_billing_profile_new_billing_profile_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_need_help_need_help_directive__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_reservation_agreement_reservation_agreement_directive__WEBPACK_IMPORTED_MODULE_9__["default"].name, shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_10__["default"].name, shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_dw_invoice_dw_invoice_payment_processing_fee_directive__WEBPACK_IMPORTED_MODULE_12__["default"].name, shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_13__["default"].name]).controller('SimpleReservationPurchaseCtrl', ["$scope", "$filter", "$q", "$route", "$translate", "$timeout", "dwAlerts", "helper", "session", "state", "reg", "settings", "center", "purchase", "userProfile", "userProfileService", "reservationUnit", "purchaseService", "reservationService", "optsRepeatFrequency", "reservationFields", function ($scope, $filter, $q, $route, $translate, $timeout, dwAlerts, helper, session, state, reg, settings, center, purchase, userProfile, userProfileService, reservationUnit, purchaseService, reservationService, optsRepeatFrequency, reservationFields) {
  var vm = this;
  state.setPageTitle($translate.instant('SIMPLE_RES.PURCHASE.PAGE_TITLE', {
    centerName: center.name
  }));
  vm.reg = reg;
  vm.center = center;
  vm.settings = settings;
  vm.user = userProfile;
  vm.purchase = purchase;
  vm.reservationUnit = reservationUnit;
  vm.date = $filter('toDate')($route.current.params.date);
  vm.timeStart = $filter('toDate')(state.getParam('start'));
  vm.timeEnd = $filter('toDate')(state.getParam('end'));
  vm.reservationNote = state.getParam('note') || '';
  vm.emailConfirmation = !!state.getParam('confirm');
  vm.repeatFrequency = optsRepeatFrequency[0];

  if (state.getParam('freq')) {
    vm.repeatFrequency = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(optsRepeatFrequency).call(optsRepeatFrequency, function (opt) {
      return opt.id === state.getParam('freq');
    });

    if (vm.repeatFrequency && vm.repeatFrequency.repeatDurationOptions) {
      if (state.getParam('duration') - 1 < vm.repeatFrequency.repeatDurationOptions.length) {
        vm.repeatDuration = +state.getParam('duration');
      }
    }
  }
  /**
   * Next button handler
   */


  vm.next = function () {
    if (helper.pointFirstInvalid('#simpleReservationPurchase')) return;
    vm.spin = true;
    return userProfileService.saveBillingProfile($route.current.params.centerId, vm.user).then(function (_) {
      if (+vm.purchase.balance <= 0) return state.setPath(state.getPath() + '/complete');
      return vm.createReservationWithPayment().then(function (result) {
        return vm.updatePurchase().then(function (_) {
          return result;
        });
      }).then(function (result) {
        state.replace().setParam('accessCode', result.accessCode);
        return $timeout(function (_) {
          return state.setPath(state.getPath() + '/complete');
        });
      });
    }).finally(function (_) {
      vm.spin = false;
    });
  };
  /**
   * Create reservation with payment
   */


  vm.createReservationWithPayment = function (_) {
    var fields = JSON.parse(state.getParam('fields') || "{}");

    _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(fields).forEach(function (key) {
      var field = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(reservationFields).call(reservationFields, function (f) {
        return f.id === +key;
      });

      fields[key] = field.$$serialize(field, fields[key]);
    });

    var data = {
      from: vm.timeStart,
      to: vm.timeEnd,
      reservationNote: state.getParam('note'),
      title: vm.reservationTitle,
      reservationUnitId: $route.current.params.reservationUnitId,
      emailConfirmation: !!state.getParam('confirm'),
      repeatFrequency: state.getParam('freq'),
      repeatDuration: state.getParam('duration'),
      fields: fields
    };
    if (state.getParam('purchasePackageId')) data.purchasePackageId = +state.getParam('purchasePackageId');
    return reservationService.saveWithPayment(vm.center.id, vm.user.id, data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to make reservation and payment.');
    });
  };
  /**
   * Update purchase order
   */


  vm.updatePurchase = function (_) {
    return purchaseService.get(vm.center.id, vm.user.id, vm.purchase.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get purchase.');
    }).then(function (purchase) {
      vm.purchase = purchase;
    });
  };
  /**
   * Back button handler
   */


  vm.back = function () {
    return state.setPath(state.getPath().replace(/\/purchases\/\d+$/, ''));
  };
  /**
   * Staff Help button handler
   */


  vm.staffHelp = function () {
    return purchaseService.createStaffHelp(vm.center.id, $route.current.params.userId, $route.current.params.purchaseId).catch(function (err) {
      return dwAlerts.error(err, 'Failed to create staff help.');
    }).then(function (result) {
      state.setParam('notice', result.notice);
      return state.setPath(state.getPath() + '/staff-help');
    });
  };
  /**
   * Whether recurring settings are available
   */


  vm.hasRecurring = function () {
    return session.isAdmin() || !settings.hideRecurringReservations;
  };
}]));

/***/ }),

/***/ "./bundles/simple-reservation/08-purchase/purchase.tpl.html":
/*!******************************************************************!*\
  !*** ./bundles/simple-reservation/08-purchase/purchase.tpl.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div> <h1 class=\"page-title flex\"> <span>{{state.getPageTitle()}}</span> <need-help phone=\"vm.center.phone\"></need-help> </h1> <form name=\"formPurchase\" id=\"simpleReservationPurchase\" novalidate> <ff-board ff-dim=\"vm.spin\"> <div class=\"ff-grid gutter-v gutter-h\"> <ff-panel ng-if=\"vm.date\"> <ff-panel-header> <span translate=\"SIMPLE_RES.PURCHASE.RESERVATION.HEADER\"></span> </ff-panel-header> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.LOCATION\"></span></ff-label> <ff-static ff-bind=\"::vm.center.name\" name=\"center\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.SPACE\"></span></ff-label> <ff-static ff-bind=\"::vm.reservationUnit.name\" name=\"reservationUnit\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.DATE\"></span></ff-label> <ff-static ff-bind=\"::vm.date | date:'longDate'\" name=\"date\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.TIME\"></span></ff-label> <ff-static> <span><span nice-time=\"::vm.timeStart\"></span> - <span nice-time=\"::vm.timeEnd\"></span></span> </ff-static> </ff-row> <ff-row ng-if=\"vm.hasRecurring()\"> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.REPEAT_FREQUENCY\"></span></ff-label> <ff-static><span ng-bind=\"::vm.repeatFrequency.name\"></span></ff-static> </ff-row> <ff-row ng-if=\"vm.hasRecurring() && vm.repeatFrequency.repeatDurationOptions\"> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.REPEAT_DURATION\"></span></ff-label> <ff-static>{{::vm.repeatFrequency.repeatDurationFilter(vm.repeatDuration)}}</ff-static> </ff-row> </ff-panel> <ff-panel> <ff-panel-header> <span translate=\"SIMPLE_RES.PURCHASE.ORDER.HEADER\" translate-values=\"{ orderId: vm.purchase.orderId }\"></span> </ff-panel-header> <dw-invoice invoice=\"vm.purchase\" center=\"vm.center\" allow-remove=\"false\" dw-invoice-payment-processing-fee settings=\"$resolve.settings\" credit-cards=\"$resolve.userProfile.creditCards\" e-checks=\"$resolve.userProfile.eChecks\"></dw-invoice> </ff-panel> <div> <ff-panel-header> <div translate=\"BILLING_PROFILE.PAGE_TITLE\" translate-values=\"{ userName: vm.user.fullNameCompany }\"></div> <small translate=\"GLOBAL.REQUIRED_FIELDS_MARKED_WITH\"></small> </ff-panel-header> <new-billing-profile user=\"vm.user\" settings=\"vm.settings\" id=\"newBillingProfile\" class=\"ff-grid gutter-v\"></new-billing-profile> </div> <ff-col> <div class=\"ff-grid gutter-h gutter-v\" style=\"justify-content:flex-end\"> <reservation-agreement flex=\"0 0 300px\" ng-if=\"wlLinks.reservationAgreementLinkUrl\"></reservation-agreement> <ff-panel flex=\"0 0 300px\"> <label class=\"ff-row\"> <ff-checkbox name=\"emailConfirmation\" ff-model=\"vm.emailConfirmation\"> <span translate=\"RESERVATIONS.EMAIL_CONFIRMATION\"></span> </ff-checkbox> </label> </ff-panel> </div> </ff-col> </div> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"help\" ff-click=\"vm.staffHelp()\"><span translate=\"GLOBAL.BTN_STAFF_HELP\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" type=\"submit\" ff-click=\"vm.next()\"><span translate=\"SIMPLE_RES.BILLING.BTN_PURCHASE\"></span></ff-btn> </ff-btn-group> </form> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/simple-reservation/ff-panel-card.scss":
/*!*******************************************************!*\
  !*** ./bundles/simple-reservation/ff-panel-card.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/simple-reservation/index.js":
/*!*********************************************!*\
  !*** ./bundles/simple-reservation/index.js ***!
  \*********************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ff_panel_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ff-panel-card.scss */ "./bundles/simple-reservation/ff-panel-card.scss");
/* harmony import */ var _ff_panel_card_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ff_panel_card_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_staff_help_staff_help_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/staff-help/staff-help.controller */ "./shared/staff-help/staff-help.controller.js");
/* harmony import */ var shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/staff-help/staff-help.tpl.html */ "./shared/staff-help/staff-help.tpl.html");
/* harmony import */ var shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/templates/new-user-profile.tpl.html */ "./shared/templates/new-user-profile.tpl.html");
/* harmony import */ var shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_9__);










var index = ['$injector', function index($injector) {
  var _context2;

  // JS
  var importAll = function importAll(r) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(r).call(r)).call(_context, r);
  };

  var js = importAll(__webpack_require__("./bundles/simple-reservation sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(js).call(js, function (m) {
    return m.default;
  })).call(_context2, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/simple-reservation sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });

    $templateCache.put('staff-help/staff-help.tpl.html', shared_staff_help_staff_help_tpl_html__WEBPACK_IMPORTED_MODULE_8___default.a);
    $templateCache.put('templates/new-user-profile.tpl.html', shared_templates_new_user_profile_tpl_html__WEBPACK_IMPORTED_MODULE_9___default.a);
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/simple-reservation/other/complete.controller.js":
/*!*****************************************************************!*\
  !*** ./bundles/simple-reservation/other/complete.controller.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/dw-invoice/dw-invoice.directive */ "./shared/dw-invoice/dw-invoice.directive.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SimpleReservationCompleteCtrl', [shared_dw_invoice_dw_invoice_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name]).controller('SimpleReservationCompleteCtrl', ["$scope", "$q", "$timeout", "$translate", "dwAlerts", "state", "helper", "deskworksConfig", "center", "purchase", "settings", function ($scope, $q, $timeout, $translate, dwAlerts, state, helper, deskworksConfig, center, purchase, settings) {
  var vm = this;
  vm.center = center;
  vm.purchase = purchase;
  vm.accessCode = state.getParam('accessCode');
  vm.settings = settings;
  state.setPageTitle($translate.instant('SIMPLE_RES.COMPLETE.PAGE_TITLE'));
  /**
   * Prevent using Back button
   */

  $scope.$on('$locationChangeStart', function (event, newUrl) {
    if (newUrl && newUrl.indexOf('/simple-reservation') >= 0) {
      event.preventDefault();
      dwAlerts.error($translate.instant('SIMPLE_RES.COMPLETE.BACK_ERROR'));
    }
  });
  /**
   * Back to Home Page button handler
   */

  vm.home = function () {
    var origin = state.getParam('origin');
    var centerId = state.getCurrentCenterId();
    (origin ? state.logout() : $q.when()).finally(function () {
      // If origin presents, log out
      state.resetParams();
      state.setPath(origin || deskworksConfig.getDefaultRoute());

      if (origin) {
        state.setCurrentCenterId(centerId);
      } else {
        if (vm.center) state.setCurrentCenterId(vm.center.id);
      }
    });
    return $timeout(10000);
  };
}]));

/***/ }),

/***/ "./bundles/simple-reservation/other/complete.tpl.html":
/*!************************************************************!*\
  !*** ./bundles/simple-reservation/other/complete.tpl.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"simpleReservationComplete\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid ff-gutter-v\" ng-if=\"vm.accessCode && vm.settings.enableAccessCodes || vm.purchase\"> <ff-panel ng-if=\"vm.accessCode && vm.settings.enableAccessCodes\"> <span class=\"ff-center ff-bmargin\" translate=\"SIMPLE_RES.COMPLETE.ACCESS_CODE\" translate-values=\"{ accessCode: vm.accessCode }\"></span> </ff-panel> <ff-panel ng-if=\"vm.purchase\"> <ff-panel-header> <span translate=\"SIMPLE_RES.COMPLETE.ORDER.HEADER\" translate-values=\"{ orderId: vm.purchase.orderId }\"></span> </ff-panel-header> <dw-invoice invoice=\"vm.purchase\" center=\"vm.center\" allow-remove=\"false\"></dw-invoice> </ff-panel> </div> <ff-btn-group class=\"buttons-bottom\" ng-class=\"{'ff-center': !vm.purchase}\"> <ff-btn sense=\"home\" type=\"submit\" ff-click=\"vm.home()\"><span translate=\"GLOBAL.BTN_HOME\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/simple-reservation/other/confirm.controller.js":
/*!****************************************************************!*\
  !*** ./bundles/simple-reservation/other/confirm.controller.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SimpleReservationConfirmCtrl', ['deskworks.center.service', 'deskworks.reservationCategory.service', 'deskworks.reservationService', 'deskworks.reservationUnit.optsRepeatFrequency', 'deskworks.ReservationCost', shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name]).controller('SimpleReservationConfirmCtrl', ["$scope", "$route", "$filter", "$translate", "$q", "settings", "dwAlerts", "helper", "session", "center", "state", "reservationUnit", "reservationCategoryService", "reservationService", "ReservationCost", "reservationFields", "optsRepeatFrequency", function ($scope, $route, $filter, $translate, $q, settings, dwAlerts, helper, session, center, state, reservationUnit, reservationCategoryService, reservationService, ReservationCost, reservationFields, optsRepeatFrequency) {
  var vm = this;
  state.setPageTitle($translate.instant('RESERVATIONS.CONFIRM.PAGE_TITLE'));
  vm.center = center;
  vm.reservationUnit = reservationUnit;
  vm.date = $filter('toDate')(state.getParam('start'));
  vm.timeStart = $filter('toDate')(state.getParam('start'));
  vm.timeEnd = $filter('toDate')(state.getParam('end'));
  vm.reservationNote = state.getParam('note') || '';
  vm.emailConfirmation = !!state.getParam('confirm');
  vm.repeatFrequencyOptions = optsRepeatFrequency;
  vm.repeatFrequency = vm.repeatFrequencyOptions[0];

  if (state.getParam('freq')) {
    vm.repeatFrequency = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, vm.repeatFrequencyOptions, state.getParam('freq'));

    if (vm.repeatFrequency && vm.repeatFrequency.repeatDurationOptions) {
      if (state.getParam('duration') - 1 < vm.repeatFrequency.repeatDurationOptions.length) {
        vm.repeatDuration = +state.getParam('duration');
      }
    }
  }
  /**
   * Back button handler -> Simple Reservation / Select Time
   */


  vm.back = state.back;
  /**
   * Next button handler
   */

  vm.next = function () {
    return $q.when(session.isRole('nonMember') && ReservationCost.calcAsync(vm.center.id, state.getCurrentUserId(), vm.reservationUnit.id, state.getParam('start'), state.getParam('end')).then(function (cost) {
      if (cost) return dwAlerts.error('Not allowed. Chargeable reservation.');
    })).then(function () {
      // reservation without payment
      var fields = JSON.parse(state.getParam('fields') || "{}");

      _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(fields).forEach(function (key) {
        var field = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(reservationFields).call(reservationFields, function (f) {
          return f.id === +key;
        });

        fields[key] = field.$$serialize(field, fields[key]);
      });

      var postData = {
        centerId: vm.center.id,
        reservationUnitId: vm.reservationUnit.id,
        from: vm.timeStart,
        to: vm.timeEnd,
        reservationNote: vm.reservationNote,
        emailConfirmation: !!vm.emailConfirmation,
        repeatFrequency: vm.repeatFrequency.id,
        repeatDuration: vm.repeatDuration,
        fields: fields
      };
      return reservationService.save(vm.center.id, state.getCurrentUserId(), postData).catch(function (err) {
        return dwAlerts.error(err, 'Failed to make reservation.');
      });
    }).then(function (reservation) {
      state.setParam('accessCode', reservation ? reservation.accessCode || reservation.access_code : null);
      return state.setPath('/simple-reservation/complete');
    });
  };
  /**
   * Whether recurring settings are available
   */


  vm.hasRecurring = function () {
    return session.isAdmin() || !settings.hideRecurringReservations;
  };
}]));

/***/ }),

/***/ "./bundles/simple-reservation/other/confirm.tpl.html":
/*!***********************************************************!*\
  !*** ./bundles/simple-reservation/other/confirm.tpl.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"formSimpleReservationConfirm\" id=\"simpleReservationConfirm\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <ff-board> <ff-panel style=\"max-width:480px\"> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.LOCATION\"></span></ff-label> <ff-static ff-bind=\"vm.center.name\" name=\"center\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.SPACE\"></span></ff-label> <ff-static ff-bind=\"vm.reservationUnit.name\" name=\"reservationUnit\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.DATE\"></span></ff-label> <ff-static ff-bind=\"vm.date | date:'longDate'\" name=\"date\"></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.TIME\"></span></ff-label> <ff-static> <span><span nice-time=\"vm.timeStart\"></span> - <span nice-time=\"vm.timeEnd\"></span></span> </ff-static> </ff-row> <div ng-if=\"vm.hasRecurring()\"> <ff-row> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.REPEAT_FREQUENCY\"></span></ff-label> <ff-static name=\"repeats\"><span ng-bind=\"vm.repeatFrequency.name\"></span></ff-static> </ff-row> <ff-row ng-if=\"vm.repeatFrequency.repeatDurationOptions\"> <ff-label flex=\"0 1 100px\"><span translate=\"RESERVATIONS.REPEAT_DURATION\"></span></ff-label> <ff-static>{{vm.repeatFrequency.repeatDurationFilter(vm.repeatDuration)}}</ff-static> </ff-row> </div> </ff-panel> </ff-board> <ff-btn-group class=\"buttons-bottom\"> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" type=\"submit\" ff-click=\"vm.next()\"><span translate=\"GLOBAL.BTN_NEXT\"></span></ff-btn> </ff-btn-group> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/simple-reservation/other/simple-reservation-sign-in.controller.js":
/*!***********************************************************************************!*\
  !*** ./bundles/simple-reservation/other/simple-reservation-sign-in.controller.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.SimpleReservationSignInCtrl', ['flexForms', 'deskworks.state', 'deskworks.config', 'deskworks.dwSignIn']).controller('SimpleReservationSignInCtrl', ["$scope", "$q", "$location", "$route", "$translate", "state", function ($scope, $q, $location, $route, $translate, state) {
  var vm = this;
  state.setPageTitle($translate.instant('SIGN_IN.PAGE_TITLE'));
  /**
   * dwSignIn:SignIn event listener, proceeds to Simple Reservation / User Profile
   */

  $scope.$on('dwSignIn:SignIn', function ($event) {
    $event.stopPropagation();
    state.replace(); // Hide sign-in step in history to skip it with back button

    if (state.isLoggedNonMember()) {
      // Non-member - long simple reservation
      state.setPath(state.getPath() + '/' + state.getLoggedUserId());
    } else {
      // Member/coordinator/admin - just make reservation and complete without payment
      state.setPath(state.getPath() + '/' + state.getLoggedUserId() + '/confirm');
    }
  });
  /**
   * dwSignIn:SignUp event listener, proceeds to Simple Reservation / Non-member Self-registration
   */

  $scope.$on('dwSignIn:SignUp', function ($event) {
    $event.stopPropagation();
    state.setPath(state.getPath() + '/new');
  });
}]));

/***/ }),

/***/ "./bundles/simple-reservation/other/simple-reservation-sign-in.tpl.html":
/*!******************************************************************************!*\
  !*** ./bundles/simple-reservation/other/simple-reservation-sign-in.tpl.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<dw-sign-in id=\"signIn\" show-sign-up=\"true\"></dw-sign-in> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/dw-invoice/dw-invoice-payment-processing-fee.directive.js":
/*!**************************************************************************!*\
  !*** ./shared/dw-invoice/dw-invoice-payment-processing-fee.directive.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__);



/**
 * dwInvoicePaymentProcessingFee directive -
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.dwInvoicePaymentProcessingFee', ['deskworks.state', 'deskworks.helper']).directive('dwInvoicePaymentProcessingFee', function () {
  return {
    restrict: 'A',
    scope: true,
    controller: 'DwInvoicePaymentProcessingFeeCtrl as $ctrl',
    bindToController: {
      invoice: '<',
      settings: '<',
      creditCards: '<',
      eChecks: '<'
    }
  };
}).controller('DwInvoicePaymentProcessingFeeCtrl', ["$scope", "$timeout", "state", "helper", function ($scope, $timeout, state, helper) {
  var $ctrl = this;

  $ctrl.$onChanges = function () {
    return $timeout(function () {
      var _context, _context2;

      if (!$ctrl.invoice || !$ctrl.settings || !$ctrl.creditCards || !$ctrl.eChecks) return;
      if (!$ctrl.settings.enablePaymentProcessingCharges) return;
      var rate = 0;
      if ($ctrl.creditCards.length) rate = $ctrl.settings.paymentProcessingRates.cc || 0;else if ($ctrl.eChecks.length) rate = $ctrl.settings.paymentProcessingRates.ach || 0;

      var prevIdx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.invoice.items).call(_context, function (i) {
        return i.id === 'fake-payment-processing-fee';
      });

      if (prevIdx >= 0) _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = $ctrl.invoice.items).call(_context2, prevIdx, 1); // remove exiting fake-payment-processing-fee

      if (!rate || !+$ctrl.invoice.balance) return;
      var fee = helper.round(rate * +$ctrl.invoice.balance / 100);
      var item = {
        addedBy: 'system',
        amount: fee,
        billedAt: moment(),
        createdAt: moment(),
        description: "Payment processing fee",
        id: "fake-payment-processing-fee",
        name: "Payment Fee",
        price: fee,
        quantity: 1
      };
      $ctrl.invoice.items.push(item);

      if (angular.isUndefined($ctrl.invoice.chargesTotalInitial)) {
        $ctrl.invoice.chargesTotalInitial = +$ctrl.invoice.chargesTotal;
      }

      if (angular.isUndefined($ctrl.invoice.balanceInitial)) {
        $ctrl.invoice.balanceInitial = +$ctrl.invoice.balance;
      }

      $ctrl.invoice.chargesTotal = helper.round($ctrl.invoice.chargesTotalInitial + fee);
      $ctrl.invoice.balance = helper.round($ctrl.invoice.balanceInitial + fee);
    });
  };
}]));

/***/ }),

/***/ "./shared/need-help/need-help.directive.js":
/*!*************************************************!*\
  !*** ./shared/need-help/need-help.directive.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Need help? Phone 1-800-000-000.
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('needHelp', []).directive('needHelp', function () {
  return {
    restrict: 'E',
    scope: true,
    controller: function controller() {},
    controllerAs: '$ctrl',
    template: '<span translate="GLOBAL.NEED_HELP" class="need-help" ng-if="$ctrl.phone" ' + 'translate-values="{ phone: \'<a href=&quot;tel:\' + $ctrl.phone + \'&quot;>\' + $ctrl.phone + \'</a>\' }"></span>',
    bindToController: {
      phone: '<'
    }
  };
}));

/***/ }),

/***/ "./shared/new-billing-profile/new-billing-profile.directive.js":
/*!*********************************************************************!*\
  !*** ./shared/new-billing-profile/new-billing-profile.directive.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-billing-profile.tpl.html */ "./shared/new-billing-profile/new-billing-profile.tpl.html");
/* harmony import */ var _new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_4__);





/**
 * New Billing Profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('newBillingProfile', []).directive('newBillingProfile', function () {
  return {
    template: _new_billing_profile_tpl_html__WEBPACK_IMPORTED_MODULE_4___default.a,
    restrict: 'E',
    scope: true,
    controller: 'NewBillingProfileCtrl as $ctrl',
    bindToController: {
      settings: '<',
      user: '<'
    }
  };
}).controller('NewBillingProfileCtrl', ["$scope", "userProfileService", function ($scope, userProfileService) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    var _context;

    // filter credit card types according to settings
    $ctrl.settings.creditCardTypes = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(_context = $ctrl.settings.creditCardTypes).call(_context, function (ccType) {
      return ccType.enable;
    });
    $ctrl.user.creditCards.forEach(function (cc) {
      var _context2;

      cc.type = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = $ctrl.settings.creditCardTypes).call(_context2, function (type) {
        return type.id === cc.type;
      }) || cc.type || {};
    }); // add one CC if no payment methods

    $ctrl.user.creditCards = $ctrl.user.creditCards || [];

    if (!$ctrl.user.creditCards.length && !$ctrl.user.eChecks.length) {
      var cc = userProfileService.creditCard.new($ctrl.user);
      cc.type = $ctrl.settings.creditCardTypes[0];
      $ctrl.user.creditCards.push(cc);
    }

    $scope.$watchCollection(function (_) {
      var _context3;

      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = $ctrl.user.creditCards).call(_context3, $ctrl.user.eChecks);
    }, function (methods) {
      if (methods && $ctrl.user.paymentMethodId && !_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(methods).call(methods, function (m) {
        return m.id === $ctrl.user.paymentMethodId;
      })) {
        $ctrl.user.billingMethod = null; // reset billing/payment method when payment method deleted

        $ctrl.user.paymentMethodId = null;
      }
    });
    userProfileService.bindTestBillingGenerator($scope, $ctrl.user); // Bind test user data generator
  };

  $ctrl.isSingleMode = function () {
    var _$ctrl$user = $ctrl.user,
        creditCards = _$ctrl$user.creditCards,
        eChecks = _$ctrl$user.eChecks;
    return !creditCards.length && (!eChecks.length || userProfileService.eCheck.isNew(eChecks[0])) || !eChecks.length && (!creditCards.length || userProfileService.creditCard.isNew(creditCards[0]));
  };
}]));

/***/ }),

/***/ "./shared/new-billing-profile/new-billing-profile.tpl.html":
/*!*****************************************************************!*\
  !*** ./shared/new-billing-profile/new-billing-profile.tpl.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span translate=\"BILLING_PROFILE.PAYMENT_METHOD.EMPTY\" ng-if=\"$ctrl.showSwitchCC() && $ctrl.showSwitchACH()\"></span> <up-billing-method user=\"$ctrl.user\" settings=\"$ctrl.settings\" ng-if=\"!$ctrl.isSingleMode()\"></up-billing-method> <up-credit-cards user-profile=\"$ctrl.user\" settings=\"$ctrl.settings\" single=\"$ctrl.isSingleMode()\" ng-if=\"$ctrl.user.creditCards.length || !$ctrl.isSingleMode()\"></up-credit-cards> <up-e-checks user-profile=\"$ctrl.user\" single=\"$ctrl.isSingleMode()\" ng-if=\"$ctrl.settings.enableEChecks && ($ctrl.user.eChecks.length || !$ctrl.isSingleMode())\"></up-e-checks> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/res-bar/res-bar.component.js":
/*!*********************************************!*\
  !*** ./shared/res-bar/res-bar.component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _res_bar_tpl_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./res-bar.tpl.html */ "./shared/res-bar/res-bar.tpl.html");
/* harmony import */ var _res_bar_tpl_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_res_bar_tpl_html__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _res_bar_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./res-bar.scss */ "./shared/res-bar/res-bar.scss");
/* harmony import */ var _res_bar_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_res_bar_scss__WEBPACK_IMPORTED_MODULE_10__);


function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_5___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default()(source, key)); }); } } return target; }











/**
 * resBar component - reservation availability bar used in Bay Reservation / Select Unit
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.resBar', []).component('resBar', {
  template: _res_bar_tpl_html__WEBPACK_IMPORTED_MODULE_9___default.a,
  controller: 'ResBarCtrl',
  bindings: {
    unit: '<',
    availabilities: '=?'
  }
}).controller('ResBarCtrl', ["$scope", "$filter", function ($scope, $filter) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $scope.$watchCollection('$ctrl.unit.availabilities', function () {
      if (!$ctrl.unit) {
        return;
      }

      var ranges = [];
      $ctrl.unit.availabilities.forEach(function (period) {
        ranges.push(moment.range(period.from, period.to));
      });
      $ctrl.unit.reservations.forEach(function (res) {
        var resRange = moment.range(res.from, res.to);
        ranges = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(ranges).call(ranges, function (r) {
          return r.subtract(resRange);
        }).reduce(function (result, ranges) {
          return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(result).call(result, ranges);
        }, []);
      });
      ranges = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(ranges).call(ranges, function (r) {
        return (r.end - r.start) / 3600000 >= ($ctrl.unit.limitMin || 0);
      });
      $ctrl.availabilities = calcAvailabilities(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(ranges).call(ranges, function (r) {
        return {
          from: r.start,
          to: r.end
        };
      }));
    });
  };

  function calcAvailabilities(availabilities) {
    if (!availabilities || !availabilities.length) {
      return [];
    }

    var start = availabilities[0].from;
    var end = availabilities[availabilities.length - 1].to;
    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(availabilities).call(availabilities, function (av) {
      return _objectSpread(_objectSpread({}, av), {}, {
        x1: dateToX(av.from),
        x2: dateToX(av.to)
      });
    });

    function dateToX(date) {
      return (date - start) * 100 / (end - start);
    }
  }
}]));

/***/ }),

/***/ "./shared/res-bar/res-bar.scss":
/*!*************************************!*\
  !*** ./shared/res-bar/res-bar.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/res-bar/res-bar.tpl.html":
/*!*****************************************!*\
  !*** ./shared/res-bar/res-bar.tpl.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div ng-repeat=\"av in $ctrl.availabilities\" ng-style=\"{ left: av.x1 + '%', right: 100 - av.x2 + '%' }\" class=\"availability\"> <span nice-time=\"av.from\" nice-format=\"shortHours\" class=\"from\"></span> <span nice-time=\"av.to\" nice-format=\"shortHours\" class=\"to\"></span> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/reservation-agreement/reservation-agreement.directive.js":
/*!*************************************************************************!*\
  !*** ./shared/reservation-agreement/reservation-agreement.directive.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reservation_agreement_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservation-agreement.tpl.html */ "./shared/reservation-agreement/reservation-agreement.tpl.html");
/* harmony import */ var _reservation_agreement_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reservation_agreement_tpl_html__WEBPACK_IMPORTED_MODULE_0__);
/**
 * reservationAgreement directive - 'Reservation Agreement' section in purchase step of Book It Now and Simple Reservation wizards
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.reservationAgreement', ['deskworks.helper', 'deskworks.state']).directive('reservationAgreement', function () {
  return {
    restrict: 'E',
    scope: true,
    template: _reservation_agreement_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    translations: ['reservations']
  };
}));

/***/ }),

/***/ "./shared/reservation-agreement/reservation-agreement.tpl.html":
/*!*********************************************************************!*\
  !*** ./shared/reservation-agreement/reservation-agreement.tpl.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"reservationAgreement\" class=\"ff-no-frame\"> <label> <ff-checkbox ff-model=\"reservationAgreement\" ff-required=\"true\" ff-validate-alert=\"{ required: ('RESERVATIONS.RESERVATION_AGREEMENT.REQUIRED' | translate) }\" title=\"{{'RESERVATIONS.RESERVATION_AGREEMENT.REQUIRED' | translate}}\"> <div translate=\"RESERVATIONS.RESERVATION_AGREEMENT.LABEL\"></div> <a ng-href=\"{{::wlLinks.reservationAgreementLinkUrl}}\" ng-bind=\"::wlLinks.reservationAgreementLinkText\" target=\"_blank\" rel=\"noopener\"></a> </ff-checkbox> </label> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/staff-help/staff-help.controller.js":
/*!****************************************************!*\
  !*** ./shared/staff-help/staff-help.controller.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.StaffHelpCtrl', ['ngRoute', 'deskworks.helper', 'deskworks.config']).controller('StaffHelpCtrl', ["$scope", "$timeout", "$q", "$route", "$window", "$translate", "dwAlerts", "helper", "state", "deskworksConfig", function ($scope, $timeout, $q, $route, $window, $translate, dwAlerts, helper, state, deskworksConfig) {
  'use strict';

  var vm = this;
  vm.notice = state.getParam('notice');
  state.setPageTitle($translate.instant('SIMPLE_RES.STAFF_HELP.PAGE_TITLE'));
  /**
   * Prevent using Back button
   */

  $scope.$on('$routeChangeStart', function (event, next, current) {
    if (next.$$route && (next.$$route.controller === 'MemberSignUpBillingCtrl' || next.$$route.controller === 'MemberSignUpPurchaseCtrl' || next.$$route.controller === 'SimpleReservationBillingCtrl' || next.$$route.controller === 'SimpleReservationPurchaseCtrl' || next.$$route.controller === 'BuyPassBillingCtrl' || next.$$route.controller === 'BuyPassPurchaseCtrl')) {
      dwAlerts.error($translate.instant('SIMPLE_RES.STAFF_HELP.BACK_ERROR'));
      event.preventDefault();
    }
  });
  /**
   * Next button handler
   */

  vm.home = function () {
    if (state.getParam('redirect')) {
      // redirect to splash page from Buy A Pass flow
      $window.location.href = state.getParam('redirect');
    } else {
      var origin = state.getParam('origin');
      var centerId = state.getCurrentCenterId();
      (origin ? state.logout() : $q.when()).finally(function () {
        // If origin presents, log out
        state.resetParams();
        if (origin) state.setCurrentCenterId(centerId);
        return state.setPath(origin || deskworksConfig.getDefaultRoute());
      });
    }

    return $timeout(10000);
  };
}]));

/***/ }),

/***/ "./shared/staff-help/staff-help.tpl.html":
/*!***********************************************!*\
  !*** ./shared/staff-help/staff-help.tpl.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"staffHelp\" class=\"ff-tmargin\"> <ff-board> <ff-panel> <span ng-bind=\"::vm.notice\"></span> </ff-panel> </ff-board> <ff-btn-group class=\"buttons-bottom ff-center\"> <ff-btn sense=\"home\" type=\"submit\" ff-click=\"vm.home()\"><span translate=\"GLOBAL.BTN_HOME\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/templates/new-user-profile.tpl.html":
/*!****************************************************!*\
  !*** ./shared/templates/new-user-profile.tpl.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"user-profile\" id=\"userProfile\"> <h1 class=\"page-title flex\"> <span> {{state.getPageTitle()}} <span ng-if=\"vm.reg.member && !vm.reg.selfRegistration\" ng-style=\"{ color: vm.center.color }\">{{vm.center.name}}</span> </span> <need-help phone=\"vm.reg.phone\"></need-help> </h1> <ff-board> <ff-panel role=\"article\" aria-label=\"{{'USER_PROFILE.USER_PROFILE' | translate}}\"> <ff-panel-header ng-if=\"vm.reg\"> <span translate=\"GLOBAL.STEP_X_OF_Y\" translate-values=\"vm.reg\" ng-if=\"vm.reg.stepCount\"></span> <small translate=\"GLOBAL.REQUIRED_FIELDS_MARKED_WITH\"></small> </ff-panel-header> <div class=\"ff-grid ff-gutter-v ff-gutter-h\"> <up-personal-info user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\"></up-personal-info> <up-addresses flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" center=\"vm.center\" single=\"true\"></up-addresses> <div flex=\"{md: '0 0 50%'}\"> <div class=\"ff-grid ff-gutter-v\"> <up-login-info user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" member-directory-url=\"wlLinks.memberDirectoryUrl\"></up-login-info> <up-phones user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" single=\"true\"></up-phones> </div> </div> <up-photo flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\"></up-photo> <div flex=\"{md: '0 0 50%'}\"> <div class=\"ff-grid ff-gutter-v\"> <up-lead-source user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\"></up-lead-source> <up-terms-of-service user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\"></up-terms-of-service> </div> </div> </div> </ff-panel> </ff-board> <ff-btn-group class=\"buttons-bottom\" ng-if=\"vm.reg\"> <ff-btn sense=\"back\" ff-click=\"vm.back()\" ng-if=\"vm.back\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> <ff-btn sense=\"next\" ff-click=\"vm.next()\"><span translate=\"GLOBAL.BTN_NEXT\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=simple-reservation~._b.js.map?_rev=a67921b482e7c7b75c3f