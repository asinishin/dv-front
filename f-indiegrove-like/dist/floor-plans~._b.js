(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["floor-plans~._b"],{

/***/ "./bundles/floor-plans sync recursive .*\\.tpl\\.html$":
/*!*************************************************!*\
  !*** ./bundles/floor-plans sync .*\.tpl\.html$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./directives/floor-plan-embedding.tpl.html": "./bundles/floor-plans/directives/floor-plan-embedding.tpl.html",
	"./directives/floor-plan-point-details.tpl.html": "./bundles/floor-plans/directives/floor-plan-point-details.tpl.html",
	"./directives/floor-plan-point-settings.tpl.html": "./bundles/floor-plans/directives/floor-plan-point-settings.tpl.html",
	"./directives/floor-plan-settings.tpl.html": "./bundles/floor-plans/directives/floor-plan-settings.tpl.html",
	"./directives/floor-plan.tpl.html": "./bundles/floor-plans/directives/floor-plan.tpl.html",
	"./directives/floor-plans.tpl.html": "./bundles/floor-plans/directives/floor-plans.tpl.html",
	"./floor-plans-community/floor-plans-community.tpl.html": "./bundles/floor-plans/floor-plans-community/floor-plans-community.tpl.html",
	"./floor-plans-reservation/floor-plans-reservation.tpl.html": "./bundles/floor-plans/floor-plans-reservation/floor-plans-reservation.tpl.html",
	"./floor-plans/floor-plans.tpl.html": "./bundles/floor-plans/floor-plans/floor-plans.tpl.html"
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
webpackContext.id = "./bundles/floor-plans sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/floor-plans sync recursive \\..+\\/.+\\.js$":
/*!************************************************!*\
  !*** ./bundles/floor-plans sync \..+\/.+\.js$ ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./directives/floor-plan-embedding.directive.js": "./bundles/floor-plans/directives/floor-plan-embedding.directive.js",
	"./directives/floor-plan-point-details.directive.js": "./bundles/floor-plans/directives/floor-plan-point-details.directive.js",
	"./directives/floor-plan-point-settings.directive.js": "./bundles/floor-plans/directives/floor-plan-point-settings.directive.js",
	"./directives/floor-plan-settings.directive.js": "./bundles/floor-plans/directives/floor-plan-settings.directive.js",
	"./directives/floor-plan.directive.js": "./bundles/floor-plans/directives/floor-plan.directive.js",
	"./directives/floor-plans.directive.js": "./bundles/floor-plans/directives/floor-plans.directive.js",
	"./floor-plans-community/floor-plans-community.controller.js": "./bundles/floor-plans/floor-plans-community/floor-plans-community.controller.js",
	"./floor-plans-reservation/floor-plans-reservation.controller.js": "./bundles/floor-plans/floor-plans-reservation/floor-plans-reservation.controller.js",
	"./floor-plans/floor-plans.controller.js": "./bundles/floor-plans/floor-plans/floor-plans.controller.js",
	"./services/floor-plan.service.js": "./bundles/floor-plans/services/floor-plan.service.js"
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
webpackContext.id = "./bundles/floor-plans sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plan-embedding.directive.js":
/*!**************************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plan-embedding.directive.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _floor_plan_embedding_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floor-plan-embedding.tpl.html */ "./bundles/floor-plans/directives/floor-plan-embedding.tpl.html");
/* harmony import */ var _floor_plan_embedding_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_floor_plan_embedding_tpl_html__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.floorPlanEmbeddingDirective', ['deskworks.config']).directive('floorPlanEmbedding', function () {
  return {
    template: _floor_plan_embedding_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
    restrict: 'E',
    scope: true,
    controller: 'FloorPlanEmbeddingDirectiveCtrl as $ctrl',
    bindToController: {
      floorPlan: '<'
    }
  };
}).controller('FloorPlanEmbeddingDirectiveCtrl', ["$scope", "state", "helper", "deskworksConfig", function ($scope, state, helper, deskworksConfig) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    var origin = deskworksConfig.getApiOrigin();
    var centerId = state.getCurrentCenterId();

    $ctrl.getCode = function (_) {
      return helper.join(['<script dw-floor-plans', "dw-center-id=\"".concat(centerId, "\""), $ctrl.all ? null : "dw-floor-plan-id=\"".concat($ctrl.floorPlan.id, "\""), "dw-origin=\"".concat(origin, "\""), "src=\"".concat(origin, "/floor-plans.js\""), 'class="dw-spin"></script>'], ' ');
    };
  };
}]));

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plan-embedding.tpl.html":
/*!**********************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plan-embedding.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header><span translate=\"FLOOR_PLANS.EMBEDDING.HEADER\"></span></ff-panel-header> <ff-static> <label><ff-checkbox ff-model=\"$ctrl.all\"><span translate=\"FLOOR_PLANS.EMBEDDING.ALL\"></span></ff-checkbox></label> &nbsp; <ff-hint><span translate=\"FLOOR_PLANS.EMBEDDING.ALL.HINT\"></span></ff-hint> </ff-static> <ff-static><span translate=\"FLOOR_PLANS.EMBEDDING.HINT\"></span></ff-static> <ff-static ff-style=\"{'white-space': 'pre-wrap', 'font-family': 'monospace', 'font-size': '.85em', 'line-height': '1.25'}\">{{$ctrl.getCode()}}</ff-static> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plan-point-details.directive.js":
/*!******************************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plan-point-details.directive.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _floor_plan_point_details_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floor-plan-point-details.tpl.html */ "./bundles/floor-plans/directives/floor-plan-point-details.tpl.html");
/* harmony import */ var _floor_plan_point_details_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_floor_plan_point_details_tpl_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/dw-modal/dw-modal.service */ "./shared/dw-modal/dw-modal.service.js");



/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.floorPlanPointDetailsDirective', [shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_2__["default"].name]).directive('floorPlanPointDetails', function () {
  return {
    template: _floor_plan_point_details_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
    restrict: 'E',
    scope: true,
    controller: 'FloorPlanPointDetailsDirectiveCtrl as $ctrl',
    bindToController: {
      point: '<',
      pricingEnabled: '<',
      areaEnabled: '<',
      view: '<'
    }
  };
}).controller('FloorPlanPointDetailsDirectiveCtrl', ["$scope", "dwModal", function ($scope, dwModal) {
  var _context;

  var $ctrl = this;
  $ctrl.areaUnit = (_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(_context = window.dwLocales).call(_context, function (i) {
    return i.id === $scope.currentLocale;
  }) || {}).area || 'ft²';
  /**
   * View member details
   */

  $ctrl.more = function () {
    dwModal.show({
      scope: $scope,
      templateUrl: 'members/our-members/our-member-modal.tpl.html',
      controller: 'OurMemberModalCtrl',
      inputs: {
        member: $ctrl.point.$$unit.$$user
      }
    });
  };
}]));

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plan-point-details.tpl.html":
/*!**************************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plan-point-details.tpl.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <div ng-if=\"$ctrl.view === 'public'\"> <ff-header>{{$ctrl.point.$$unit.name}}</ff-header> <ff-img class=\"fp-unit-photo\" ng-if=\"$ctrl.point.$$unit.photo\" ff-alt=\"{{$ctrl.point.$$unit.name}}\" ff-src=\"{{$ctrl.point.$$unit.thumbnail}}\" ff-src-hq=\"{{$ctrl.point.$$unit.photo}}\"></ff-img> <ff-static class=\"fp-descr\" ng-if=\"$ctrl.point.$$unit.description\">{{$ctrl.point.$$unit.description}}</ff-static> <ff-row ng-if=\"$ctrl.point.$$unit.capacity\"> <ff-static><span translate=\"GLOBAL.UNIT_CAPACITY\" translate-values=\"{ capacity: $ctrl.point.$$unit.capacity }\"></span></ff-static> </ff-row> <ff-row> <ff-label flex=\"0 0 52px\"><span translate=\"FLOOR_PLANS.POINT.STATUS\"></span></ff-label> <ff-static> <span translate=\"{{'FLOOR_PLANS.POINT.STATUS.' + ($ctrl.point.$$unit.availableFullTime ? 'AVAILABLE' : 'NOT_AVAILABLE')}}\"></span> </ff-static> </ff-row> <ff-row ng-if=\"$ctrl.pricingEnabled && $ctrl.point.$$unit.fullTimePrice\"> <ff-label flex=\"0 0 52px\"><span translate=\"FLOOR_PLANS.POINT.PRICE\"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimePrice | ncurrency}}</ff-static> </ff-row> <ff-row ng-if=\"$ctrl.areaEnabled && $ctrl.point.$$unit.area\"> <ff-label flex=\"0 0 52px\"><span translate=\"FLOOR_PLANS.POINT.AREA\"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.area}} {{$ctrl.areaUnit}}</ff-static> </ff-row> </div> <div ng-if=\"$ctrl.view === 'community'\"> <ff-header>{{$ctrl.point.$$unit.name}}</ff-header> <div> <ff-row> <ff-label flex=\"0 1 80px\"><span translate=\"FLOOR_PLANS.POINT.STATUS\"></span></ff-label> <ff-static> <span translate=\"{{'FLOOR_PLANS.POINT.STATUS.' + ($ctrl.point.$$unit.availableFullTime ? 'AVAILABLE' : 'NOT_AVAILABLE')}}\"></span> </ff-static> </ff-row> <ff-row ng-if=\"$ctrl.point.$$unit.attachedUserName && !$ctrl.point.$$unit.$$user\"> <ff-label flex=\"0 1 80px\"><span translate=\"FLOOR_PLANS.POINT.MEMBER\"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.attachedUserName}}</ff-static> </ff-row> <ff-row ng-if=\"$ctrl.point.$$unit.$$user\"> <ff-static> <ff-img flex=\"0 0 60px\" class=\"fp-avatar\" ff-src=\"{{$ctrl.point.$$unit.$$user.photo}}\" ng-if=\"$ctrl.point.$$unit.$$user.photo\" ff-alt=\"{{$ctrl.point.$$unit.$$user.name}}\"></ff-img> <ff-col style=\"margin-right:.5rem;padding:.5rem 0\"> <span class=\"fp-user-name\">{{$ctrl.point.$$unit.$$user.name}}</span> <span class=\"fp-user-company\">{{$ctrl.point.$$unit.$$user.company}}</span> </ff-col> <ff-btn flex=\"none\" sense=\"userSelect\" size=\"sm\" class=\"fp-btn-more\" ff-click=\"$ctrl.more()\"> <span translate=\"FLOOR_PLANS.POINT.BTN_MORE\"></span> </ff-btn> </ff-static> </ff-row> <ff-row ng-if=\"$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode\"> <ff-label flex=\"0 1 80px\"><span translate=\"FLOOR_PLANS.POINT.PRODUCT\"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimeProductName}}</ff-static> </ff-row> <ff-row ng-if=\"$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode\"> <ff-label flex=\"0 1 80px\"><span translate=\"FLOOR_PLANS.POINT.PRICE\"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimePrice | ncurrency}}</ff-static> </ff-row> <ff-row ng-if=\"$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode\"> <ff-label flex=\"0 1 80px\"><span translate=\"FLOOR_PLANS.POINT.NET\"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimeNet | ncurrency}}</ff-static> </ff-row> <ff-row ng-if=\"$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode\"> <ff-label flex=\"0 1 80px\"><span translate=\"FLOOR_PLANS.POINT.DISCOUNT\"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimeDiscount | ncurrency}}</ff-static> </ff-row> </div> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plan-point-settings.directive.js":
/*!*******************************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plan-point-settings.directive.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _floor_plan_point_settings_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floor-plan-point-settings.tpl.html */ "./bundles/floor-plans/directives/floor-plan-point-settings.tpl.html");
/* harmony import */ var _floor_plan_point_settings_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_floor_plan_point_settings_tpl_html__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.floorPlanPointSettingsDirective', []).directive('floorPlanPointSettings', function () {
  return {
    template: _floor_plan_point_settings_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
    restrict: 'E',
    scope: true,
    controller: 'FloorPlanPointSettingsDirectiveCtrl as $ctrl',
    bindToController: {
      plan: '<',
      point: '=',
      categories: '<',
      units: '<',
      save: '&'
    }
  };
}).controller('FloorPlanPointSettingsDirectiveCtrl', ["$scope", function ($scope) {
  var $ctrl = this;
  /**
   * Delete point
   */

  $ctrl.deletePoint = function () {
    var _context;

    if (!$ctrl.point) return;

    _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.plan.points).call(_context, $ctrl.plan.points.indexOf($ctrl.point), 1);

    $ctrl.point = null;
    return $ctrl.save($ctrl.plan);
  };
  /**
   * Callbacks for angular filter
   */


  $ctrl.filterCategory = function (cat) {
    return cat.$$hasUnits || $ctrl.point && cat === $ctrl.point.$$category;
  };

  $ctrl.filterUnit = function (unit) {
    return unit.reservationTypeId === ($ctrl.point && $ctrl.point.$$category && $ctrl.point.$$category.id) && (!unit.$$hasPoint || $ctrl.point.$$unit === unit);
  };
}]));

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plan-point-settings.tpl.html":
/*!***************************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plan-point-settings.tpl.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <div class=\"ff-col\"> <div> <ff-header><span translate=\"FLOOR_PLANS.POINT.HEADER\"></span></ff-header> <ff-select name=\"reservationCategory\" ff-model=\"$ctrl.point.$$category\" ff-required=\"true\" ff-validate-alert=\"{{'FLOOR_PLANS.CATEGORY' | translate}}\" ff-options=\"opt.name for opt in $ctrl.categories | filter: $ctrl.filterCategory\"></ff-select> <ff-select name=\"reservationUnit\" ff-model=\"$ctrl.point.$$unit\" ff-change=\"$ctrl.save()\" ff-required=\"true\" ff-validate-alert=\"{{'FLOOR_PLANS.UNIT' | translate}}\" ff-options=\"opt.name for opt in $ctrl.units | filter: $ctrl.filterUnit\"></ff-select> </div> <ff-static ng-if=\"!$ctrl.point.$$category || !$ctrl.point.$$unit\" class=\"ff-no-frame\"> <span ng-if=\"!$ctrl.point.$$category\"><ff-icon sense=\"info\"></ff-icon> <span translate=\"FLOOR_PLANS.CATEGORY.HINT\"></span></span> <span ng-if=\"$ctrl.point.$$category && !$ctrl.point.$$unit\"><ff-icon sense=\"info\"></ff-icon> <span translate=\"FLOOR_PLANS.UNIT.HINT\"></span></span> </ff-static> <ff-btn-group style=\"margin-top:.5rem\"> <ff-btn sense=\"delete\" size=\"sm\" ff-click=\"$ctrl.deletePoint()\"><span translate=\"FLOOR_PLANS.POINT.BTN_DELETE\"></span></ff-btn> </ff-btn-group> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plan-settings.directive.js":
/*!*************************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plan-settings.directive.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _floor_plan_settings_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floor-plan-settings.tpl.html */ "./bundles/floor-plans/directives/floor-plan-settings.tpl.html");
/* harmony import */ var _floor_plan_settings_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_floor_plan_settings_tpl_html__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.floorPlanSettingsDirective', []).directive('floorPlanSettings', function () {
  return {
    template: _floor_plan_settings_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    restrict: 'E',
    scope: true,
    controller: 'FloorPlanSettingsDirectiveCtrl as $ctrl',
    bindToController: {
      plan: '<',
      upload: '<',
      save: '&'
    }
  };
}).controller('FloorPlanSettingsDirectiveCtrl', ["$scope", function ($scope) {// const $ctrl = this;
}]));

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plan-settings.tpl.html":
/*!*********************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plan-settings.tpl.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel ngf-drop=\"$ctrl.upload($ctrl.plan, $files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\" ngf-drag-over-class=\"dragover\"> <ff-panel-header> <span translate=\"FLOOR_PLANS.SETTINGS.HEADER\"></span> <ff-hint><span translate=\"FLOOR_PLANS.IMAGE.HINT\"></span></ff-hint> </ff-panel-header> <ff-spin ng-if=\"$ctrl.plan.$$autoSaving\"></ff-spin> <div class=\"ff-grid\" style=\"justify-content:flex-start\"> <label class=\"ff-row\" flex=\"0 1 240px\"> <ff-label flex=\"0 1 60px\"><req translate=\"FLOOR_PLANS.NAME\"></req></ff-label> <ff-text name=\"floorPlanName\" ff-model=\"$ctrl.plan.name\" ff-change=\"$ctrl.save()\" ff-required=\"true\" ff-validate-alert=\"{{'FLOOR_PLANS.NAME' | translate}}\"></ff-text> </label> <ff-static class=\"ff-no-frame\" flex=\"auto\"> <div class=\"ff-grid gutter-h-half\"> <label flex=\"none\"> <ff-checkbox name=\"enabled\" ff-model=\"$ctrl.plan.enabled\" ff-change=\"$ctrl.save()\"> <span translate=\"FLOOR_PLANS.ENABLED\"></span> </ff-checkbox> </label> <label flex=\"none\"> <ff-checkbox name=\"pricingEnabled\" ff-model=\"$ctrl.plan.pricingEnabled\" ff-change=\"$ctrl.save()\"> <span translate=\"FLOOR_PLANS.PRICING_VISIBLE\"></span> </ff-checkbox> </label> <label flex=\"none\"> <ff-checkbox name=\"areaEnabled\" ff-model=\"$ctrl.plan.areaEnabled\" ff-change=\"$ctrl.save()\"> <span translate=\"FLOOR_PLANS.AREA_VISIBLE\"></span> </ff-checkbox> </label> </div> </ff-static> </div> <ff-btn-group style=\"margin-top:.5rem\"> <ff-btn sense=\"upload\" size=\"sm\" ff-spin=\"$ctrl.plan.$$spinUpload\" ngf-select=\"$ctrl.upload($ctrl.plan, $files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\" accept=\"image/png,image/jpeg\"> <span translate=\"FLOOR_PLANS.IMAGE.BTN_UPLOAD\"></span> </ff-btn> <ff-btn sense=\"delete\" size=\"sm\" ff-click=\"$ctrl.delete()\"><span translate=\"FLOOR_PLANS.BTN_DELETE\"></span></ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plan.directive.js":
/*!****************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plan.directive.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _floor_plan_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floor-plan.scss */ "./bundles/floor-plans/directives/floor-plan.scss");
/* harmony import */ var _floor_plan_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_floor_plan_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _floor_plan_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floor-plan.tpl.html */ "./bundles/floor-plans/directives/floor-plan.tpl.html");
/* harmony import */ var _floor_plan_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_floor_plan_tpl_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _floor_plan_point_details_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floor-plan-point-details.directive */ "./bundles/floor-plans/directives/floor-plan-point-details.directive.js");
/* harmony import */ var _floor_plan_point_settings_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floor-plan-point-settings.directive */ "./bundles/floor-plans/directives/floor-plan-point-settings.directive.js");
/* harmony import */ var shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/drag-n-drop/dnd.service */ "./shared/drag-n-drop/dnd.service.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.floorPlanDirective', [shared_drag_n_drop_dnd_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, _floor_plan_point_details_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, _floor_plan_point_settings_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name]).directive('floorPlan', function () {
  return {
    template: _floor_plan_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
    restrict: 'E',
    scope: true,
    controller: 'FloorPlanDirectiveCtrl as $ctrl',
    transclude: {
      hoverTip: '?hoverTip',
      focusContent: '?focusContent',
      noFocusContent: '?noFocusContent'
    },
    bindToController: {
      plan: '<',
      point: '=?',
      save: '&',
      isAvailable: '<?'
    }
  };
}).controller('FloorPlanDirectiveCtrl', ["$element", "$scope", "$window", "state", "dwAlerts", "helper", function ($element, $scope, $window, state, dwAlerts, helper) {
  var $ctrl = this;

  $ctrl.$onInit = function () {};
  /**
   * Click point
   */


  $ctrl.onPointClick = function (point, event) {
    $ctrl.point = point;
    if (event) event.stopPropagation();
  };
  /**
   * Click floor plan
   */


  $ctrl.onPlanClick = function (event) {
    if (!$scope.ffBlock.editMode) {
      return;
    }

    var img = $element[0].querySelector('.fp-image');
    var point = {
      x: helper.round(event.offsetX * 100 / img.offsetWidth),
      y: helper.round(event.offsetY * 100 / img.offsetHeight)
    };
    $ctrl.plan.points.push(point);
    $ctrl.onPointClick(point);
  };
  /**
   * Drop point after dragging
   */


  $ctrl.dropPoint = function (list, index, event) {
    if (!$scope.ffBlock.editMode) {
      return;
    }

    var point = list[index];
    var img = $element[0].querySelector('.fp-image');
    point.x = helper.round(event.offsetX * 100 / img.offsetWidth);
    point.y = helper.round(event.offsetY * 100 / img.offsetHeight);
    $ctrl.save($ctrl.plan);
    return true;
  };
}]));

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plan.scss":
/*!********************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plan.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plan.tpl.html":
/*!************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plan.tpl.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"ff-grid gutter-v-half gutter-h-half fp-grid\"> <ff-panel flex=\"0 1 auto\" class=\"ff-flex-start\" style=\"z-index:1\" ngf-drop=\"$ctrl.upload($ctrl.plan, $files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\" ngf-drag-over-class=\"dragover\"> <div class=\"ff-relative\" flex=\"none\" ng-click=\"$ctrl.onPlanClick($event)\" ff-dim=\"!$ctrl.plan.$$imageLoaded\"> <ff-img ff-src=\"{{$ctrl.plan.image}}\" ff-img-loaded=\"$ctrl.plan.$$imageLoaded\" class=\"fp-image\" ff-alt=\"Floor Plan\"></ff-img> <div class=\"fp-points\" dnd-list dnd-drop=\"callback({ list: $ctrl.plan.points, targetIndex: index, event: event })\"> <div ng-repeat=\"point in $ctrl.plan.points\" dnd-draggable=\"null\" dnd-callback=\"$ctrl.dropPoint(list, $index, event)\" ng-click=\"$ctrl.onPointClick(point, $event)\" class=\"fp-point ff-tip-trigger\" ng-class=\"{ available: $ctrl.isAvailable(point.$$unit), selected: $ctrl.point === point, invalid: !point.$$unit }\" ng-style=\"{ top: point.y + '%', left: point.x + '%' }\"> <ng-transclude ng-transclude-slot=\"hoverTip\"></ng-transclude> </div> </div> </div> </ff-panel> <div flex=\"{md: '0 1 352px'}\" ng-if=\"$ctrl.point\"> <div ng-transclude=\"focusContent\"></div> </div> <div flex=\"{md: '0 1 352px'}\" ng-if=\"!$ctrl.point\" class=\"ff-flex-start\"> <div ng-transclude=\"noFocusContent\"></div> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plans.directive.js":
/*!*****************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plans.directive.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _floor_plans_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floor-plans.scss */ "./bundles/floor-plans/directives/floor-plans.scss");
/* harmony import */ var _floor_plans_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_floor_plans_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _floor_plans_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floor-plans.tpl.html */ "./bundles/floor-plans/directives/floor-plans.tpl.html");
/* harmony import */ var _floor_plans_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_floor_plans_tpl_html__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.floorPlansDirective', []).directive('floorPlans', function () {
  return {
    template: _floor_plans_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
    restrict: 'E',
    scope: true,
    controller: 'FloorPlansDirectiveCtrl as $ctrl',
    transclude: {
      hoverTip: '?hoverTip',
      focusContent: '?focusContent',
      noFocusContent: '?noFocusContent',
      selectorExtra: '?selectorExtra',
      planSettings: '?planSettings',
      bottomExtra: '?bottomExtra'
    },
    bindToController: {
      plans: '<',
      plan: '=?',
      point: '=?',
      save: '&',
      isAvailable: '<?'
    }
  };
}).controller('FloorPlansDirectiveCtrl', ["$scope", "FloorPlan", function ($scope, FloorPlan) {
  var $ctrl = this;

  $ctrl.$onInit = function () {};

  $ctrl.$onChanges = function () {
    if ($ctrl.plans && !$ctrl.plan) {
      $ctrl.plan = $ctrl.plans[0];
    }
  };
  /**
   * New plan
   */


  $ctrl.addPlan = function () {
    $ctrl.plan = FloorPlan.new();
    $ctrl.plans.push($ctrl.plan);
  };
}]));

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plans.scss":
/*!*********************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plans.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/floor-plans/directives/floor-plans.tpl.html":
/*!*************************************************************!*\
  !*** ./bundles/floor-plans/directives/floor-plans.tpl.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"floor-plans\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v-half gutter-h-half\"> <ff-panel flex=\"{md: '0 0 40%'}\" class=\"ff-flex-start\"> <ff-panel-header><span translate=\"FLOOR_PLANS.SELECT_A_PLAN\"></span></ff-panel-header> <ff-row ff-dim=\"!$ctrl.plans\"> <ff-select name=\"floorPlan\" ff-model=\"$ctrl.plan\" class=\"ff-read-only-ignore\" ff-options=\"p.name || '-' for p in $ctrl.plans\"></ff-select> <ff-btn-group class=\"buttons-row\" flex=\"none\"> <ff-btn sense=\"add\" size=\"xs\" ff-click=\"$ctrl.addPlan()\"></ff-btn> </ff-btn-group> </ff-row> <ng-transclude ng-transclude-slot=\"selectorExtra\" class=\"hide-empty\"></ng-transclude> </ff-panel> <ng-transclude ng-transclude-slot=\"planSettings\" flex=\"{md: '0 0 60%'}\" class=\"hide-empty\"></ng-transclude> <floor-plan ng-if=\"$ctrl.plan.image\" class=\"animate-collapse\" plan=\"$ctrl.plan\" save=\"$ctrl.save()\" point=\"$ctrl.point\" is-available=\"$ctrl.isAvailable\"> <hover-tip> <ng-transclude ng-transclude-slot=\"hoverTip\"></ng-transclude> </hover-tip> <focus-content> <ng-transclude ng-transclude-slot=\"focusContent\"></ng-transclude> </focus-content> <no-focus-content> <ng-transclude ng-transclude-slot=\"noFocusContent\"></ng-transclude> </no-focus-content> </floor-plan> <ng-transclude ng-transclude-slot=\"bottomExtra\" class=\"hide-empty\"></ng-transclude> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/floor-plans/floor-plans-community/floor-plans-community.controller.js":
/*!***************************************************************************************!*\
  !*** ./bundles/floor-plans/floor-plans-community/floor-plans-community.controller.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _floor_plans_community_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floor-plans-community.scss */ "./bundles/floor-plans/floor-plans-community/floor-plans-community.scss");
/* harmony import */ var _floor_plans_community_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_floor_plans_community_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_floor_plan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/floor-plan.service */ "./bundles/floor-plans/services/floor-plan.service.js");
/* harmony import */ var _directives_floor_plans_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/floor-plans.directive */ "./bundles/floor-plans/directives/floor-plans.directive.js");
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");
/* harmony import */ var shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/dw-modal/dw-modal.service */ "./shared/dw-modal/dw-modal.service.js");








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.FloorPlansCommunityCtrl', ['deskworks.reservationCategory.service', _services_floor_plan_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, _directives_floor_plans_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_7__["default"].name]).controller('FloorPlansCommunityCtrl', ["$scope", "$translate", "$filter", "$q", "$window", "$timeout", "dwModal", "session", "dwAlerts", "state", "helper", "FloorPlan", "ReservationUnit", "reservationCategoryService", "OurMembers", function ($scope, $translate, $filter, $q, $window, $timeout, dwModal, session, dwAlerts, state, helper, FloorPlan, ReservationUnit, reservationCategoryService, OurMembers) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('FLOOR_PLANS.PAGE_TITLE'));
  /**
   * On Init
   */

  $ctrl.onInit = function () {
    $timeout(function () {
      $ctrl.fetch().then(function (results) {
        var plans = results.plans,
            reservationCategories = results.reservationCategories,
            reservationUnits = results.reservationUnits,
            members = results.members;
        $ctrl.categories = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(reservationCategories).call(reservationCategories, function (cat) {
          return helper.pick(cat, ['id', 'name']);
        });
        $ctrl.units = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(reservationUnits).call(reservationUnits, function (unit) {
          var result = helper.pick(unit, ['id', 'name', 'description', 'area', 'capacity', 'thumbnail', 'photo', 'attachedUserId', 'attachedUserName', 'availableFullTime', 'fullTimeProductId', 'fullTimeProductName', 'fullTimePrice', 'fullTimeNet', 'fullTimeDiscount', 'reservationTypeId']);
          if (result.attachedUserId) result.$$user = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(members).call(members, function (m) {
            return m.id === result.attachedUserId;
          });
          return result;
        });
        $ctrl.plan = $ctrl.plans[0];
        $ctrl.plans.forEach(function (plan) {
          plan.points.forEach(function (point) {
            var _context, _context2;

            point.$$unit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context = $ctrl.units).call(_context, function (u) {
              return u.id === point.reservationUnitId;
            });
            point.$$category = point.$$unit && _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = $ctrl.categories).call(_context2, function (c) {
              return c.id === point.$$unit.reservationTypeId;
            });
          });
        });
      });
    });
  };

  $ctrl.isAvailable = function (unit) {
    return !!unit && unit.availableFullTime;
  };

  $ctrl.more = function (point) {
    dwModal.show({
      scope: $scope,
      templateUrl: 'members/our-members/our-member-modal.tpl.html',
      controller: 'OurMemberModalCtrl',
      inputs: {
        member: point.$$unit.$$user
      }
    });
  };

  $ctrl.fetchPlans = function () {
    return FloorPlan.query(state.getCurrentCenterId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query floor plans.');
    }).then(function (plans) {
      $ctrl.plans = plans;
    });
  };
  /**
   * Fetch data
   */


  $ctrl.fetch = function () {
    var promises = {};
    promises.plans = $ctrl.fetchPlans();
    promises.reservationCategories = reservationCategoryService.query(state.getCurrentCenterId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query reservation categories.');
    });
    promises.reservationUnits = ReservationUnit.query(state.getCurrentCenterId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query reservation units.');
    });
    promises.members = OurMembers.query({
      centerId: state.getCurrentCenterId(),
      limit: 10000
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query our members.');
    });
    return $q.all(promises);
  };

  $ctrl.onInit();
}]));

/***/ }),

/***/ "./bundles/floor-plans/floor-plans-community/floor-plans-community.scss":
/*!******************************************************************************!*\
  !*** ./bundles/floor-plans/floor-plans-community/floor-plans-community.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/floor-plans/floor-plans-community/floor-plans-community.tpl.html":
/*!**********************************************************************************!*\
  !*** ./bundles/floor-plans/floor-plans-community/floor-plans-community.tpl.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<floor-plans plans=\"$ctrl.plans\" plan=\"$ctrl.plan\" point=\"$ctrl.point\" is-available=\"$ctrl.isAvailable\" ff-bulk-read-only=\"true\"> <hover-tip ng-init=\"point = $parent.$parent.point\"> <ff-tip ng-if=\"point.$$unit\" tip-type=\"white\"> <ff-header>{{point.$$unit.name}}</ff-header> <ff-row> <ff-label flex=\"0 1 60px\"><span translate=\"FLOOR_PLANS.POINT.STATUS\"></span></ff-label> <ff-static><span translate=\"{{'FLOOR_PLANS.POINT.STATUS.' + (point.$$unit.availableFullTime ? 'AVAILABLE' : 'NOT_AVAILABLE')}}\"></span></ff-static> </ff-row> <ff-row ng-if=\"point.$$unit.attachedUserName && !point.$$unit.$$user\"> <ff-label flex=\"0 1 60px\"><span translate=\"FLOOR_PLANS.POINT.MEMBER\"></span></ff-label> <ff-static>{{point.$$unit.attachedUserName}}</ff-static> </ff-row> <ff-static ng-if=\"point.$$unit.$$user\" class=\"ff-no-frame\"> <ff-img flex=\"0 0 60px\" class=\"fp-avatar\" ff-src=\"{{point.$$unit.$$user.photo}}\" ng-if=\"point.$$unit.$$user.photo\" ff-alt=\"{{point.$$unit.$$user.name}}\"></ff-img> <ff-col flex=\"auto\"> <ff-col flex=\"auto\" class=\"fp-user-container\"> <div class=\"fp-user-name\">{{point.$$unit.$$user.name}}</div> <div class=\"fp-user-company\">{{point.$$unit.$$user.company}}</div> </ff-col> <ff-btn flex=\"none\" sense=\"userSelect\" size=\"sm\" class=\"fp-btn-more\" ff-click=\"$ctrl.more(point)\"> <span translate=\"FLOOR_PLANS.POINT.BTN_MORE\"></span> </ff-btn> </ff-col> </ff-static> </ff-tip> </hover-tip> </floor-plans> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/floor-plans/floor-plans-reservation/floor-plans-reservation.controller.js":
/*!*******************************************************************************************!*\
  !*** ./bundles/floor-plans/floor-plans-reservation/floor-plans-reservation.controller.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "../node_modules/@babel/runtime-corejs3/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_floor_plan_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/floor-plan.service */ "./bundles/floor-plans/services/floor-plan.service.js");
/* harmony import */ var _directives_floor_plans_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/floor-plans.directive */ "./bundles/floor-plans/directives/floor-plans.directive.js");
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");
/* harmony import */ var shared_res_bar_res_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/res-bar/res-bar.component */ "./shared/res-bar/res-bar.component.js");


function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default.a) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_6___default()(object); if (enumerableOnly) { symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8___default()(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9___default.a) { Object.defineProperties(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8___default()(source, key)); }); } } return target; }














/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.FloorPlansReservationCtrl', ['deskworks.reservationCategory.service', 'deskworks.calendarService', _services_floor_plan_service__WEBPACK_IMPORTED_MODULE_10__["default"].name, _directives_floor_plans_directive__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_12__["default"].name, shared_res_bar_res_bar_component__WEBPACK_IMPORTED_MODULE_13__["default"].name]).controller('FloorPlansReservationCtrl', ["$scope", "$translate", "$filter", "$q", "$window", "$timeout", "session", "dwAlerts", "state", "helper", "FloorPlan", "ReservationUnit", "calendarService", "OurMembers", function ($scope, $translate, $filter, $q, $window, $timeout, session, dwAlerts, state, helper, FloorPlan, ReservationUnit, calendarService, OurMembers) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('FLOOR_PLANS.PAGE_TITLE'));
  /**
   * On Init
   */

  $ctrl.onInit = function () {
    $timeout(function () {
      $ctrl.fetch().then(function (results) {
        var _context;

        var plans = results.plans,
            categories = results.categories,
            units = results.units,
            members = results.members;
        $ctrl.categories = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(categories).call(categories, function (cat) {
          return helper.pick(cat, ['id', 'name']);
        });
        categories.forEach(function (cat) {
          cat.reservationUnits.forEach(function (unit) {
            unit.reservationTypeId = cat.id;
          });
        });
        $ctrl.units = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = categories.reduce(function (units, cat) {
          return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(units).call(units, cat.reservationUnits);
        }, [])).call(_context, function (unit) {
          var _context2;

          var listUnit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(units).call(units, function (u) {
            return u.id === unit.id;
          }) || {};
          var result = helper.pick(_objectSpread(_objectSpread({}, listUnit), unit), ['id', 'name', 'description', 'area', 'capacity', 'thumbnail', 'photo', 'whoCanReserve', 'reservations', 'availabilities', 'attachedUserId', 'attachedUserName', 'availableFullTime', 'reservationTypeId']);
          var reservation = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = unit.reservations).call(_context2, function (r) {
            return r.from.isSameOrBefore(moment()) && r.to.isSameOrAfter(moment());
          }) || {};

          if (result.attachedUserId || reservation.userId) {
            result.$$user = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(members).call(members, function (m) {
              return m.id === (result.attachedUserId || reservation.userId);
            });
          }

          return result;
        }); // $ctrl.floorPlans = floorPlans;

        $ctrl.plan = $ctrl.plans[0];
        $ctrl.plans.forEach(function (plan) {
          plan.points.forEach(function (point) {
            var _context3, _context4;

            point.$$unit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context3 = $ctrl.units).call(_context3, function (u) {
              return u.id === point.reservationUnitId;
            });
            point.$$category = point.$$unit && _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context4 = $ctrl.categories).call(_context4, function (c) {
              return c.id === point.$$unit.reservationTypeId;
            });
          });
        });
      });
    });
  };

  $ctrl.isAvailable = function (unit) {
    return !!unit && unit.whoCanReserve !== 'notAvailable' && unit.whoCanReserve !== 'staffOnly' && unit.availabilities.length > 0;
  };

  $ctrl.isReservable = function (unit) {
    return session.isAdmin() || !!unit && unit.whoCanReserve !== 'notAvailable' && unit.availabilities.length > 0;
  };

  $ctrl.reserve = function () {
    state.setParam('unit', $ctrl.point.$$unit.id);
    return state.setPath(state.getPath() + '/reservation');
  };

  $ctrl.fetchPlans = function () {
    return FloorPlan.query(state.getCurrentCenterId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query floor plans.');
    }).then(function (plans) {
      $ctrl.plans = plans;
    });
  };
  /**
   * Fetch data
   */


  $ctrl.fetch = function () {
    var promises = {};
    promises.plans = $ctrl.fetchPlans();
    promises.units = ReservationUnit.query(state.getCurrentCenterId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query reservation units.');
    });
    promises.categories = calendarService.query(state.getCurrentCenterId(), moment(), moment()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query calendar.');
    });
    promises.members = OurMembers.query({
      centerId: state.getCurrentCenterId(),
      limit: 10000
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query our members.');
    });
    return $q.all(promises);
  };

  $ctrl.onInit();
}]));

/***/ }),

/***/ "./bundles/floor-plans/floor-plans-reservation/floor-plans-reservation.tpl.html":
/*!**************************************************************************************!*\
  !*** ./bundles/floor-plans/floor-plans-reservation/floor-plans-reservation.tpl.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<floor-plans plans=\"$ctrl.plans\" plan=\"$ctrl.plan\" point=\"$ctrl.point\" is-available=\"$ctrl.isAvailable\" ff-bulk-read-only=\"true\"> <hover-tip ng-init=\"point = $parent.$parent.point\"> <ff-tip ng-if=\"point.$$unit\" tip-type=\"white\" style=\"padding:5px;min-width:160px;width:160px\"> <span>{{point.$$unit.name}}</span> </ff-tip> </hover-tip> <focus-content> <ff-panel> <div> <ff-header>{{$ctrl.point.$$unit.name}}</ff-header> <div class=\"ff-col\"> <ff-img class=\"fp-unit-photo\" ng-if=\"$ctrl.point.$$unit.photo\" ff-alt=\"{{$ctrl.point.$$unit.name}}\" ff-src=\"{{$ctrl.point.$$unit.photo}}\" ff-src-hq=\"{{$ctrl.point.$$unit.photo}}\"></ff-img> <ff-static class=\"fp-descr\" ng-if=\"$ctrl.point.$$unit.description\">{{$ctrl.point.$$unit.description}}</ff-static> <ff-row ng-if=\"$ctrl.point.$$unit.capacity\"> <ff-static><span translate=\"GLOBAL.UNIT_CAPACITY\" translate-values=\"{ capacity: $ctrl.point.$$unit.capacity }\"></span></ff-static> </ff-row> <ff-static ng-if=\"$ctrl.point.$$unit.$$user\" class=\"ff-no-frame\" style=\"text-transform:uppercase;font-weight:700;margin-bottom:-.75rem;display:block\"> <span translate=\"FLOOR_PLANS.POINT.WHO_IS_THERE\"></span> </ff-static> <ff-row ng-if=\"$ctrl.point.$$unit.$$user\"> <ff-static> <ff-img flex=\"0 0 60px\" class=\"fp-avatar\" ff-src=\"{{$ctrl.point.$$unit.$$user.photo}}\" ng-if=\"$ctrl.point.$$unit.$$user.photo\" ff-alt=\"{{$ctrl.point.$$unit.$$user.name}}\"></ff-img> <ff-col style=\"margin-right:.5rem;padding:.5rem 0\"> <span class=\"fp-user-name\">{{$ctrl.point.$$unit.$$user.name}}</span> </ff-col> <ff-btn flex=\"none\" sense=\"userSelect\" size=\"sm\" class=\"fp-btn-more\" ff-click=\"$ctrl.more()\"> <span translate=\"FLOOR_PLANS.POINT.BTN_MORE\"></span> </ff-btn> </ff-static> </ff-row> <div class=\"ff-row fp-legend gutter-h-half\"> <div flex=\"auto\" translate=\"FLOOR_PLANS.POINT.AVAILABILITY_TODAY\"></div> <div flex=\"none\" style=\"display:block;margin:-8px 0\"> <div class=\"available\" translate=\"FLOOR_PLANS.POINT.AVAILABILITY_TODAY.AVAILABLE\"></div> <div class=\"unavailable\" translate=\"FLOOR_PLANS.POINT.AVAILABILITY_TODAY.UNAVAILABLE\"></div> </div> </div> <res-bar unit=\"$ctrl.point.$$unit\"></res-bar> <div ng-if=\"$ctrl.point.$$unit.reservations.length\" style=\"margin:.6rem 0 0 0;font-size:.95rem\"> <div ng-repeat=\"res in $ctrl.point.$$unit.reservations\" ng-if=\"res.userName\" style=\"margin-top:.4rem\"> <span nice-time=\"res.from\"></span> - <span nice-time=\"res.to\"></span> - <span>{{res.userName}}</span> </div> </div> <ff-btn-group class=\"ff-tmargin\" ng-if=\"$ctrl.isReservable($ctrl.point.$$unit)\"> <ff-btn sense=\"ok\" size=\"sm\" class=\"ff-btn-full\" ff-click=\"$ctrl.reserve()\"> <span translate=\"FLOOR_PLANS.POINT.BTN_RESERVE\"></span> </ff-btn> </ff-btn-group> </div> </div> </ff-panel> </focus-content> </floor-plans> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/floor-plans/floor-plans/floor-plans.controller.js":
/*!*******************************************************************!*\
  !*** ./bundles/floor-plans/floor-plans/floor-plans.controller.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _floor_plans_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./floor-plans.scss */ "./bundles/floor-plans/floor-plans/floor-plans.scss");
/* harmony import */ var _floor_plans_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_floor_plans_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_floor_plan_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/floor-plan.service */ "./bundles/floor-plans/services/floor-plan.service.js");
/* harmony import */ var _directives_floor_plan_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/floor-plan.directive */ "./bundles/floor-plans/directives/floor-plan.directive.js");
/* harmony import */ var _directives_floor_plan_settings_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../directives/floor-plan-settings.directive */ "./bundles/floor-plans/directives/floor-plan-settings.directive.js");
/* harmony import */ var _directives_floor_plan_embedding_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/floor-plan-embedding.directive */ "./bundles/floor-plans/directives/floor-plan-embedding.directive.js");
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");













/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.FloorPlansCtrl', ['autoSave', 'deskworks.reservationCategory.service', _services_floor_plan_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, _directives_floor_plan_directive__WEBPACK_IMPORTED_MODULE_9__["default"].name, _directives_floor_plan_settings_directive__WEBPACK_IMPORTED_MODULE_10__["default"].name, _directives_floor_plan_embedding_directive__WEBPACK_IMPORTED_MODULE_11__["default"].name, shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_12__["default"].name, 'deskworks.OurMembers']).controller('FloorPlansCtrl', ["$scope", "$translate", "$filter", "$q", "$window", "$timeout", "session", "dwAlerts", "state", "helper", "autoSave", "FloorPlan", "ReservationUnit", "reservationCategoryService", "OurMembers", function ($scope, $translate, $filter, $q, $window, $timeout, session, dwAlerts, state, helper, autoSave, FloorPlan, ReservationUnit, reservationCategoryService, OurMembers) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('FLOOR_PLANS.PAGE_TITLE'));
  /**
   * On Init
   */

  $ctrl.onInit = function () {
    $timeout(function () {
      $ctrl.view = 'community';
      $ctrl.fetch().then(function (results) {
        var plans = results.plans,
            reservationCategories = results.reservationCategories,
            reservationUnits = results.reservationUnits,
            members = results.members;
        $ctrl.categories = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(reservationCategories).call(reservationCategories, function (cat) {
          return helper.pick(cat, ['id', 'name']);
        });
        $ctrl.units = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(reservationUnits).call(reservationUnits, function (unit) {
          var result = helper.pick(unit, ['id', 'name', 'description', 'area', 'capacity', 'thumbnail', 'photo', 'attachedUserId', 'attachedUserName', 'availableFullTime', 'fullTimeProductId', 'fullTimeProductName', 'fullTimePrice', 'fullTimeNet', 'fullTimeDiscount', 'reservationTypeId']);
          if (result.attachedUserId) result.$$user = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(members).call(members, function (m) {
            return m.id === result.attachedUserId;
          });
          return result;
        });
        $ctrl.plan = $ctrl.plans[0];
        $ctrl.plans.forEach(function (plan) {
          plan.points.forEach(function (point) {
            var _context, _context2;

            point.$$unit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context = $ctrl.units).call(_context, function (u) {
              return u.id === point.reservationUnitId;
            });
            point.$$category = point.$$unit && _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = $ctrl.categories).call(_context2, function (c) {
              return c.id === point.$$unit.reservationTypeId;
            });
          });
        });
        /**
         * Pre-calculate categories and units usage
         */

        $scope.$watchCollection(function () {
          var _context3;

          return $ctrl.plan ? _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = $ctrl.plan.points).call(_context3, function (p) {
            return (p.$$unit || {}).id;
          }) : [];
        }, function () {
          $ctrl.units.forEach(function (unit) {
            var _context4;

            unit.$$hasPoint = !!_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context4 = $ctrl.plan.points).call(_context4, function (p) {
              return p.$$unit === unit;
            });
          });
          $ctrl.categories.forEach(function (cat) {
            var _context5;

            cat.$$hasUnits = !!_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context5 = $ctrl.units).call(_context5, function (u) {
              return !u.$$hasPoint && u.reservationTypeId === cat.id;
            });
          });
        });
      });
      /**
       * Reset selected point on switching plan
       */

      $scope.$watch('$ctrl.plan', function () {
        $ctrl.point = null;
      });
    });
  };

  $ctrl.isAvailable = function (unit) {
    return !!unit && unit.availableFullTime;
  };

  $ctrl.fetchPlans = function () {
    return FloorPlan.query(state.getCurrentCenterId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query floor plans.');
    }).then(function (plans) {
      $ctrl.plans = plans;
    });
  };
  /**
   * Fetch data
   */


  $ctrl.fetch = function () {
    var promises = {};
    promises.plans = $ctrl.fetchPlans();
    promises.reservationCategories = reservationCategoryService.query(state.getCurrentCenterId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query reservation categories.');
    });
    promises.reservationUnits = ReservationUnit.query(state.getCurrentCenterId()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query reservation units.');
    });
    promises.members = OurMembers.query({
      centerId: state.getCurrentCenterId(),
      limit: 10000
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query our members.');
    });
    return $q.all(promises);
  };
  /**
   * Save plan
   */


  $ctrl.save = autoSave.wrap(save);

  function save() {
    var _context6;

    if (helper.pointFirstInvalid('floor-plan-settings')) return;
    var plan = helper.pick($ctrl.plan, ['id', 'name', 'enabled', 'pricingEnabled', 'areaEnabled', 'points']);
    plan.points = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(_context6 = plan.points).call(_context6, function (p) {
      return !!(p.$$unit && (p.reservationUnitId = p.$$unit.id));
    });
    return FloorPlan.save(state.getCurrentCenterId(), plan).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save floor plan');
    }).then(function (result) {
      $ctrl.plan.id = result.id;
    });
  }
  /**
   * Delete plan
   */


  $ctrl.deletePlan = function (plan) {
    if (plan.id && !$window.confirm($translate.instant('FLOOR_PLANS.CONFIRM_DELETE'))) return;
    return (plan.id ? FloorPlan.delete(plan.id) : $q.when()).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete floor plan.');
    }).then(function () {
      var _context7;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_6___default()(_context7 = $ctrl.plans).call(_context7, $ctrl.plans.indexOf(plan), 1);

      if (plan === $ctrl.plan) $ctrl.plan = $ctrl.plans[0];
    });
  };
  /**
   * Upload plan image
   */


  $ctrl.uploadPlanImage = function (plan, $files, $invalidFiles) {
    if (helper.pointFirstInvalid('floor-plan-settings')) return;
    if ($invalidFiles && $invalidFiles.length > 0) return dwAlerts.error($translate.instant('FLOOR_PLANS.IMAGE.INVALID_FORMAT'));
    if (!plan || !plan.id || !$files || !$files.length) return;
    plan.$$spinUpload = true;
    return FloorPlan.uploadImage(plan.id, $files[0]).catch(function (err) {
      return dwAlerts.error(err, 'Failed to upload floor plan image.');
    }).finally(function () {
      plan.$$spinUpload = false;
    }).then(function (result) {
      plan.thumbnail = result.data.thumbnail + '?' + Date.now();
      plan.image = result.data.image + '?' + Date.now();
    });
  };

  $ctrl.onInit();
}]));

/***/ }),

/***/ "./bundles/floor-plans/floor-plans/floor-plans.scss":
/*!**********************************************************!*\
  !*** ./bundles/floor-plans/floor-plans/floor-plans.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/floor-plans/floor-plans/floor-plans.tpl.html":
/*!**************************************************************!*\
  !*** ./bundles/floor-plans/floor-plans/floor-plans.tpl.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<floor-plans plans=\"$ctrl.plans\" plan=\"$ctrl.plan\" point=\"$ctrl.point\" save=\"$ctrl.save()\" is-available=\"$ctrl.isAvailable\" ff-bulk-read-only> <focus-content> <div class=\"ff-grid gutter-v-half\"> <floor-plan-point-settings ng-if=\"$parent.ffBlock.editMode\" class=\"ff-flex-start\" point=\"$ctrl.point\" categories=\"$ctrl.categories\" units=\"$ctrl.units\" plan=\"$ctrl.plan\" save=\"$ctrl.save($ctrl.plan)\"></floor-plan-point-settings> <floor-plan-point-details ng-if=\"$ctrl.point.$$unit\" point=\"$ctrl.point\" view=\"$ctrl.view\" pricing-enabled=\"$ctrl.plan.pricingEnabled\" area-enabled=\"$ctrl.plan.areaEnabled\"></floor-plan-point-details> </div> </focus-content> <no-focus-content> <ff-panel ng-if=\"$parent.ffBlock.editMode\" class=\"ff-flex-start\"> <div><ff-icon sense=\"info\"></ff-icon> <span translate=\"FLOOR_PLANS.POINT.HINT.SELECT\"></span></div> <div><ff-icon sense=\"info\"></ff-icon> <span translate=\"FLOOR_PLANS.POINT.HINT.CREATE\"></span></div> <div><ff-icon sense=\"info\"></ff-icon> <span translate=\"FLOOR_PLANS.POINT.HINT.DRAG\"></span></div> </ff-panel> </no-focus-content> <selector-extra> <div class=\"ff-grid gutter-h-half ff-read-only-ignore\" style=\"justify-content:flex-start\"> <label flex=\"none\"> <ff-radio ff-model=\"$ctrl.view\" ff-value=\"'public'\"><span translate=\"FLOOR_PLANS.VIEW.PUBLIC\"></span></ff-radio> </label> <label flex=\"none\"> <ff-radio ff-model=\"$ctrl.view\" ff-value=\"'community'\"><span translate=\"FLOOR_PLANS.VIEW.COMMUNITY\"></span></ff-radio> </label> </div> </selector-extra> <plan-settings> <floor-plan-settings ng-if=\"$parent.ffBlock.editMode && $ctrl.plan\" class=\"animate-collapse\" plan=\"$ctrl.plan\" delete=\"$ctrl.deletePlan($ctrl.plan)\" save=\"$ctrl.save($ctrl.plan)\" upload=\"$ctrl.uploadPlanImage\"></floor-plan-settings> </plan-settings> <bottom-extra> <floor-plan-embedding ng-if=\"$parent.ffBlock.editMode && $ctrl.plan.image\" floor-plan=\"$ctrl.plan\" class=\"animate-collapse\" style=\"display:block\"></floor-plan-embedding> </bottom-extra> </floor-plans> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/floor-plans/index.js":
/*!**************************************!*\
  !*** ./bundles/floor-plans/index.js ***!
  \**************************************/
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
/* harmony import */ var shared_wizard_reservation_wizard_reservation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/wizard-reservation/wizard-reservation.module */ "./shared/wizard-reservation/wizard-reservation.module.js");






var index = ['$injector', function index($injector) {
  // JS
  var importAll = function importAll(r) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(r).call(r)).call(_context, r);
  };

  var js = importAll(__webpack_require__("./bundles/floor-plans sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  }));
  $injector.loadNewModules([shared_wizard_reservation_wizard_reservation_module__WEBPACK_IMPORTED_MODULE_5__["default"].name]); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/floor-plans sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/floor-plans/services/floor-plan.service.js":
/*!************************************************************!*\
  !*** ./bundles/floor-plans/services/floor-plan.service.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.FloorPlan', ['ngResource', 'ngFileUpload', 'deskworks.config']).factory('FloorPlan', ["$resource", "$timeout", "Upload", "deskworksConfig", function ($resource, $timeout, Upload, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/floor-plans/:id'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    new: function _new() {
      return {
        enabled: true,
        pricingEnabled: true,
        areaEnabled: true,
        points: []
      };
    },
    query: function query(centerId) {
      return res.query({
        centerId: centerId
      }).$promise;
    },
    save: function save(centerId, plan) {
      return plan.id ? res.update({
        id: plan.id,
        centerId: centerId
      }, plan).$promise : res.save({
        centerId: centerId
      }, plan).$promise.then(function (result) {
        return plan.id = result.id, result;
      });
    },
    delete: function _delete(id) {
      return res.delete({
        id: id
      }).$promise;
    },

    /**
     * Upload image
     */
    uploadImage: function uploadImage(id, file) {
      return Upload.upload({
        url: deskworksConfig.getApiAbsUrl("/floor-plans/".concat(id)),
        method: 'PUT',
        withCredentials: true,
        data: {
          image: file
        }
      });
    }
  };
}]));

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=floor-plans~._b.js.map?_rev=9ac2df6f4957fdf4ddcd