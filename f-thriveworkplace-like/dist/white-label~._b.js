(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["white-label~._b"],{

/***/ "./bundles/white-label sync recursive .*\\.tpl\\.html$":
/*!*************************************************!*\
  !*** ./bundles/white-label sync .*\.tpl\.html$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./settings/white-label-fonts.tpl.html": "./bundles/white-label/settings/white-label-fonts.tpl.html",
	"./settings/white-label-images.tpl.html": "./bundles/white-label/settings/white-label-images.tpl.html",
	"./settings/white-label-links.tpl.html": "./bundles/white-label/settings/white-label-links.tpl.html",
	"./settings/white-label-settings.tpl.html": "./bundles/white-label/settings/white-label-settings.tpl.html"
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
webpackContext.id = "./bundles/white-label sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/white-label sync recursive \\..+\\/.+\\.js$":
/*!************************************************!*\
  !*** ./bundles/white-label sync \..+\/.+\.js$ ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./services/google-fonts.service.js": "./bundles/white-label/services/google-fonts.service.js",
	"./services/white-label-image-list.service.js": "./bundles/white-label/services/white-label-image-list.service.js",
	"./services/white-label-image-meta.service.js": "./bundles/white-label/services/white-label-image-meta.service.js",
	"./services/white-label-vars-list.service.js": "./bundles/white-label/services/white-label-vars-list.service.js",
	"./services/white-label-vars.service.js": "./bundles/white-label/services/white-label-vars.service.js",
	"./settings/ng-validate-font.directive.js": "./bundles/white-label/settings/ng-validate-font.directive.js",
	"./settings/white-label-fonts.directive.js": "./bundles/white-label/settings/white-label-fonts.directive.js",
	"./settings/white-label-images.directive.js": "./bundles/white-label/settings/white-label-images.directive.js",
	"./settings/white-label-links.directive.js": "./bundles/white-label/settings/white-label-links.directive.js",
	"./settings/white-label-settings.controller.js": "./bundles/white-label/settings/white-label-settings.controller.js"
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
webpackContext.id = "./bundles/white-label sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/white-label/index.js":
/*!**************************************!*\
  !*** ./bundles/white-label/index.js ***!
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





var index = ['$injector', function index($injector) {
  // JS
  var importAll = function importAll(r) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(r).call(r)).call(_context, r);
  };

  var js = importAll(__webpack_require__("./bundles/white-label sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/white-label sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/white-label/services/google-fonts.service.js":
/*!**************************************************************!*\
  !*** ./bundles/white-label/services/google-fonts.service.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.GoogleFonts', ['ngResource', 'deskworks.config']).factory('GoogleFonts', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource('https://fonts.googleapis.com/css2', {}, {
    get: {
      method: 'GET',
      withCredentials: false
    }
  });
  return {
    get: function get(_ref) {
      var family = _ref.family;
      return res.get({
        family: family
      }).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/white-label/services/white-label-image-list.service.js":
/*!************************************************************************!*\
  !*** ./bundles/white-label/services/white-label-image-list.service.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.whiteLabelImageList', ['deskworks.config']).factory('whiteLabelImageList', ["deskworksConfig", function (deskworksConfig) {
  var _context;

  return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = [{
    id: 'logo',
    _name: 'WHITE_LABEL_SETTINGS.LOGO',
    _hint: 'WHITE_LABEL_SETTINGS.LOGO.HINT',
    url: 'logo.png',
    style: {
      maxHeight: '130px',
      maxWidth: '200px',
      width: 'auto',
      backgroundColor: 'var(--logo-bg-color)'
    }
  }, {
    id: 'logo-print',
    _name: 'WHITE_LABEL_SETTINGS.LOGO_PRINT',
    _hint: 'WHITE_LABEL_SETTINGS.LOGO_PRINT.HINT',
    url: 'logo-print.png',
    style: {
      maxHeight: '130px',
      maxWidth: '200px',
      width: 'auto'
    }
  }, {
    id: 'icon',
    _name: 'WHITE_LABEL_SETTINGS.ICON',
    _hint: 'WHITE_LABEL_SETTINGS.ICON.HINT',
    url: 'icon-512x512.png',
    style: {
      maxHeight: '130px',
      maxWidth: '130px',
      width: 'auto'
    }
  }, {
    id: 'banner',
    _name: 'WHITE_LABEL_SETTINGS.BANNER',
    _hint: 'WHITE_LABEL_SETTINGS.BANNER.HINT',
    url: 'banner.jpg',
    style: {
      maxHeight: '130px',
      width: 'auto'
    }
  }]).call(_context, function (img) {
    img.url = deskworksConfig.getApiAbsUrl("/white-label/images/".concat(img.url));
    return img;
  });
}]));

/***/ }),

/***/ "./bundles/white-label/services/white-label-image-meta.service.js":
/*!************************************************************************!*\
  !*** ./bundles/white-label/services/white-label-image-meta.service.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WhiteLabelImageMeta', ['ngResource', 'deskworks.config']).factory('WhiteLabelImageMeta', ["$resource", "$timeout", "deskworksConfig", "Upload", function ($resource, $timeout, deskworksConfig, Upload) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/white-label/image-meta/:imageId'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get(imageId) {
      return res.get({
        imageId: imageId
      }).$promise;
    },
    save: function save(imageId, data) {
      return res.update({
        imageId: imageId
      }, data).$promise;
    },
    upload: function upload(imageId, file) {
      return Upload.upload({
        url: deskworksConfig.getApiAbsUrl("/white-label/image-meta/".concat(imageId)),
        method: 'PUT',
        withCredentials: true,
        data: {
          file: file
        }
      });
    }
  };
}]));

/***/ }),

/***/ "./bundles/white-label/services/white-label-vars-list.service.js":
/*!***********************************************************************!*\
  !*** ./bundles/white-label/services/white-label-vars-list.service.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.whiteLabelVarsList', []).factory('whiteLabelVarsList', function () {
  return [{
    id: 'brand-color',
    _name: 'WHITE_LABEL_SETTINGS.BRAND_COLOR',
    type: 'color'
  }, {
    id: 'header-bg-color',
    _name: 'WHITE_LABEL_SETTINGS.HEADER_BG_COLOR',
    type: 'color'
  }, {
    id: 'logo-bg-color',
    _name: 'WHITE_LABEL_SETTINGS.LOGO_BG_COLOR',
    type: 'color'
  }, {
    id: 'sidebar-bg-color',
    _name: 'WHITE_LABEL_SETTINGS.SIDEBAR_BG_COLOR',
    type: 'color'
  }, {
    id: 'sidebar-color',
    _name: 'WHITE_LABEL_SETTINGS.SIDEBAR_COLOR',
    type: 'color'
  }, {
    id: 'panel-border-radius',
    _name: 'WHITE_LABEL_SETTINGS.PANEL_BORDER_RADIUS',
    type: 'px',
    min: 0,
    max: 30
  }, {
    id: 'btn-border-radius',
    _name: 'WHITE_LABEL_SETTINGS.BTN_BORDER_RADIUS',
    type: 'px',
    min: 0,
    max: 30
  }, {
    id: 'panel-shadow-radius',
    _name: 'WHITE_LABEL_SETTINGS.PANEL_SHADOW_RADIUS',
    type: 'px',
    min: 0,
    max: 30
  }, {
    id: 'panel-shadow-opacity',
    _name: 'WHITE_LABEL_SETTINGS.PANEL_SHADOW_OPACITY',
    type: '%',
    min: 0,
    max: 100
  }, {
    id: 'elastic-banner',
    _name: 'WHITE_LABEL_SETTINGS.ELASTIC_BANNER',
    _hint: 'WHITE_LABEL_SETTINGS.ELASTIC_BANNER.HINT',
    type: 'bool'
  }, {
    id: 'font-name-major',
    _name: 'WHITE_LABEL_SETTINGS.FONTS.MAJOR',
    _hint: 'WHITE_LABEL_SETTINGS.FONTS.MAJOR.HINT',
    type: 'font',
    default: 'Optima'
  }, {
    id: 'font-name-minor',
    _name: 'WHITE_LABEL_SETTINGS.FONTS.MINOR',
    _hint: 'WHITE_LABEL_SETTINGS.FONTS.MINOR.HINT',
    type: 'font',
    default: 'Lato'
  }];
}));

/***/ }),

/***/ "./bundles/white-label/services/white-label-vars.service.js":
/*!******************************************************************!*\
  !*** ./bundles/white-label/services/white-label-vars.service.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WhiteLabelVars', ['ngResource', 'deskworks.config']).factory('WhiteLabelVars', ["$resource", "deskworksConfig", function ($resource, deskworksConfig) {
  var res = $resource(deskworksConfig.getApiAbsUrl('/white-label/vars'), {}, {
    update: {
      method: 'PUT'
    }
  });
  return {
    get: function get() {
      return res.get().$promise;
    },
    save: function save(vars) {
      return res.update({}, angular.extend({
        'dynamic-white-label': 1
      }, vars)).$promise;
    }
  };
}]));

/***/ }),

/***/ "./bundles/white-label/settings/ng-validate-font.directive.js":
/*!********************************************************************!*\
  !*** ./bundles/white-label/settings/ng-validate-font.directive.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_google_fonts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/google-fonts.service */ "./bundles/white-label/services/google-fonts.service.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ngValidateFontDirective', [_services_google_fonts_service__WEBPACK_IMPORTED_MODULE_0__["default"].name]).directive('ngValidateFont', ["$q", "GoogleFonts", function ($q, GoogleFonts) {
  return {
    restrict: 'A',
    scope: true,
    require: 'ngModel',
    link: function link($scope, $element, $attrs, ngModel) {
      ngModel.$asyncValidators.font = function (modelValue, viewValue) {
        if (viewValue === 'Optima') return $q.when(); // local font

        return GoogleFonts.get({
          family: viewValue
        });
      };
    }
  };
}]));

/***/ }),

/***/ "./bundles/white-label/settings/white-label-fonts.directive.js":
/*!*********************************************************************!*\
  !*** ./bundles/white-label/settings/white-label-fonts.directive.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _white_label_fonts_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./white-label-fonts.tpl.html */ "./bundles/white-label/settings/white-label-fonts.tpl.html");
/* harmony import */ var _white_label_fonts_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_white_label_fonts_tpl_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ng_validate_font_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-validate-font.directive */ "./bundles/white-label/settings/ng-validate-font.directive.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.whiteLabelFontsDirective', [_ng_validate_font_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name]).directive('whiteLabelFonts', function () {
  return {
    template: _white_label_fonts_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    restrict: 'E',
    scope: true,
    controller: 'WhiteLabelFontsCtrl as $ctrl',
    bindToController: {
      vars: '<'
    }
  };
}).controller('WhiteLabelFontsCtrl', function () {
  var $ctrl = this; // $ctrl.$onInit = () => {};
}));

/***/ }),

/***/ "./bundles/white-label/settings/white-label-fonts.tpl.html":
/*!*****************************************************************!*\
  !*** ./bundles/white-label/settings/white-label-fonts.tpl.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header> <span translate=\"WHITE_LABEL_SETTINGS.FONTS.HEADER\"></span> <ff-hint><span translate=\"WHITE_LABEL_SETTINGS.FONTS.HINT\"></span></ff-hint> </ff-panel-header> <label class=\"ff-row\" ng-repeat=\"v in $ctrl.vars | filter:{ type: 'font' }\"> <ff-label flex=\"0 1 120px\"> <span> <req translate=\"{{v._name}}\"></req> <ff-hint ng-if=\"v._hint\"><span translate=\"{{v._hint}}\"></span></ff-hint> </span> </ff-label> <ff-text name=\"{{v.id}}\" ff-model=\"v.value\" ff-required=\"true\" ff-validate-font ff-validate-alert=\"{{v._name | translate}}\"></ff-text> </label> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/white-label/settings/white-label-images.directive.js":
/*!**********************************************************************!*\
  !*** ./bundles/white-label/settings/white-label-images.directive.js ***!
  \**********************************************************************/
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
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _white_label_images_tpl_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-label-images.tpl.html */ "./bundles/white-label/settings/white-label-images.tpl.html");
/* harmony import */ var _white_label_images_tpl_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_white_label_images_tpl_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_white_label_image_meta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/white-label-image-meta.service */ "./bundles/white-label/services/white-label-image-meta.service.js");
/* harmony import */ var _services_white_label_image_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/white-label-image-list.service */ "./bundles/white-label/services/white-label-image-list.service.js");
/* harmony import */ var shared_edit_image_edit_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/edit-image/edit-image.service */ "./shared/edit-image/edit-image.service.js");
/* harmony import */ var shared_reports_services_logo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/reports/services/logo.service */ "./shared/reports/services/logo.service.js");










/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.whiteLabelImagesDirective', [shared_edit_image_edit_image_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, _services_white_label_image_meta_service__WEBPACK_IMPORTED_MODULE_6__["default"].name, _services_white_label_image_list_service__WEBPACK_IMPORTED_MODULE_7__["default"].name, shared_reports_services_logo_service__WEBPACK_IMPORTED_MODULE_9__["default"].name]).directive('whiteLabelImages', function () {
  return {
    template: _white_label_images_tpl_html__WEBPACK_IMPORTED_MODULE_5___default.a,
    restrict: 'E',
    scope: true,
    controller: 'WhiteLabelImagesCtrl as $ctrl'
  };
}).controller('WhiteLabelImagesCtrl', ["$scope", "dwAlerts", "editImage", "WhiteLabelImageMeta", "whiteLabelImageList", "logo", function ($scope, dwAlerts, editImage, WhiteLabelImageMeta, whiteLabelImageList, logo) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.images = angular.copy(whiteLabelImageList);
  };
  /**
   * Edit image
   */


  $ctrl.editImage = function (image) {
    return editImage($scope, {
      load: load,
      save: save,
      style: image.id === 'logo' ? {
        backgroundColor: 'var(--logo-bg-color)'
      } : null
    }).then(function (result) {
      if (!result) return;
      refreshImage(image);
    });

    function load() {
      return WhiteLabelImageMeta.get(image.id).catch(function (err) {
        return dwAlerts.error(err, "Failed to get ".concat(image.id, " image meta"));
      });
    }

    function save(data) {
      return WhiteLabelImageMeta.save(image.id, data).catch(function (err) {
        return dwAlerts.error(err, "Failed to save ".concat(image.id, " image meta"));
      });
    }
  };
  /**
   * Upload image
   */


  $ctrl.uploadImage = function (img, $files, $invalidFiles) {
    if ($invalidFiles && $invalidFiles.length) return dwAlerts.error($translate.instant('GLOBAL.INVALID_IMAGE_FORMAT'));
    if (!$files || !$files.length) return;
    img.$$spin = true;
    return WhiteLabelImageMeta.upload(img.id, $files[0]).finally(function () {
      img.$$spin = false;
    }).catch(function (err) {
      return dwAlerts.error(err, "Failed to upload ".concat(img.id, " image."));
    }).then(function (result) {
      refreshImage(img);
      return result.data;
    });
  };
  /**
   * Refresh image
   */


  function refreshImage(img) {
    var now = Date.now();
    img.url = img.url.split('?')[0] + '?' + now; // refresh image

    document.querySelectorAll('.white-label-prefix').forEach(function (img) {
      if (img.src) img.src = img.src.split('?')[0] + '?' + now; // refresh image

      if (img.href) img.href = img.href.split('?')[0] + '?' + now; // refresh image
    });
    logo.resetSiteLogo();
    logo.resetSiteLogoInv();
  }
}]));

/***/ }),

/***/ "./bundles/white-label/settings/white-label-images.tpl.html":
/*!******************************************************************!*\
  !*** ./bundles/white-label/settings/white-label-images.tpl.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"ff-grid gutter-v gutter-h\"> <ff-panel flex=\"{md: '0 0 50%'}\" ng-repeat=\"img in $ctrl.images\" class=\"wl-image-panel\" ngf-drop=\"$ctrl.uploadImage(img, $files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\" ngf-drag-over-class=\"dragover\"> <ff-panel-header> <span translate=\"{{img._name}}\"></span> <ff-hint><span translate=\"{{img._hint}}\"></span></ff-hint> </ff-panel-header> <ff-img ff-src=\"{{img.url}}\" ff-style=\"{{img.style}}\" ff-alt=\"{{img._name | translate}}\"></ff-img> <ff-btn-group class=\"ff-section-buttons\"> <ff-btn sense=\"crop\" size=\"sm\" ff-click=\"$ctrl.editImage(img)\"><span translate=\"GLOBAL.BTN_CROP\"></span></ff-btn> <ff-btn sense=\"upload\" size=\"sm\" ff-spin=\"img.$$spin\" ngf-select=\"$ctrl.uploadImage(img, $files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\" accept=\"image/png,image/jpeg\"><span translate=\"GLOBAL.BTN_UPLOAD\"></span></ff-btn> </ff-btn-group> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/white-label/settings/white-label-links.directive.js":
/*!*********************************************************************!*\
  !*** ./bundles/white-label/settings/white-label-links.directive.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _white_label_links_tpl_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./white-label-links.tpl.html */ "./bundles/white-label/settings/white-label-links.tpl.html");
/* harmony import */ var _white_label_links_tpl_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_white_label_links_tpl_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_services_setup_white_label_links_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/setup/white-label-links.service */ "./common/services/setup/white-label-links.service.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.whiteLabelLinksDirective', ['autoSave', _common_services_setup_white_label_links_service__WEBPACK_IMPORTED_MODULE_3__["default"].name]).directive('whiteLabelLinks', function () {
  return {
    template: _white_label_links_tpl_html__WEBPACK_IMPORTED_MODULE_2___default.a,
    restrict: 'E',
    scope: true,
    controller: 'WhiteLabelLinksCtrl as $ctrl'
  };
}).controller('WhiteLabelLinksCtrl', ["$scope", "$rootScope", "dwAlerts", "helper", "WhiteLabelLinks", "autoSave", function ($scope, $rootScope, dwAlerts, helper, WhiteLabelLinks, autoSave) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    WhiteLabelLinks.get().then(function (links) {
      $ctrl.links = links;
    });
  };
  /**
   * Save links handler
   */


  $ctrl.saveLinks = autoSave.wrap(saveLinks);

  function saveLinks() {
    if (helper.pointFirstInvalid('#wlLinks') || !$ctrl.links) return;
    $ctrl.spinLinks = true;
    return WhiteLabelLinks.save($ctrl.links).then(function () {
      $rootScope.wlLinks = $ctrl.links;
    }) // update current links
    .catch(function (err) {
      return dwAlerts.error(err, 'Failed to save white label links.');
    }).finally(function () {
      $ctrl.spinLinks = false;
    });
  }
  /**
   * Upload Terms Of Service handler
   * @param $files - files to upload
   * @param $invalidFiles - files rejected by ngfPattern directive
   */


  $ctrl.uploadTermsOfService = function ($files, $invalidFiles) {
    if ($invalidFiles && $invalidFiles.length > 0) return dwAlerts.error($translate.instant('WHITE_LABEL_SETTINGS.INVALID_FORMAT_PDF'));

    if ($files && $files.length > 0) {
      $ctrl.spinTOS = true;
      return WhiteLabelLinks.uploadTermsOfService($files[0]).catch(function (err) {
        return dwAlerts.error(err, 'Failed to upload terms of service.');
      }).then(function (result) {
        $ctrl.links.tosLinkUrl = result.data.termsOfService;
        return WhiteLabelLinks.save($ctrl.links).catch(function (err) {
          return dwAlerts.error(err, 'Failed to save link to uploaded terms of service');
        });
      }).finally(function () {
        $ctrl.spinTOS = false;
      });
    }
  };
  /**
   * Upload Reservation Agreement handler
   * @param $files - files to upload
   * @param $invalidFiles - files rejected by ngfPattern directive
   */


  $ctrl.uploadReservationAgreement = function ($files, $invalidFiles) {
    if ($invalidFiles && $invalidFiles.length > 0) return dwAlerts.error($translate.instant('WHITE_LABEL_SETTINGS.INVALID_FORMAT_PDF'));

    if ($files && $files.length > 0) {
      $ctrl.spinRA = true;
      return WhiteLabelLinks.uploadReservationAgreement($files[0]).catch(function (err) {
        return dwAlerts.error(err, 'Failed to upload reservation agreement.');
      }).then(function (result) {
        $ctrl.links.reservationAgreementLinkUrl = result.data.reservationAgreement;
        return WhiteLabelLinks.save($ctrl.links).catch(function (err) {
          return dwAlerts.error(err, 'Failed to save link to uploaded reservation agreement');
        });
      }).finally(function () {
        $ctrl.spinRA = false;
      });
    }
  };
}]));

/***/ }),

/***/ "./bundles/white-label/settings/white-label-links.tpl.html":
/*!*****************************************************************!*\
  !*** ./bundles/white-label/settings/white-label-links.tpl.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form novalidate ff-bulk-read-only id=\"wlLinks\" ff-dim=\"!$ctrl.links\"> <ff-panel> <ff-panel-header class=\"ff-spin-right\"><span translate=\"WHITE_LABEL_SETTINGS.LINKS\"></span></ff-panel-header> <ff-spin ng-if=\"$ctrl.spinLinks\"></ff-spin> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 0 120px', sm: '0 0 250px'}\"><req translate=\"WHITE_LABEL_SETTINGS.COMPANY_NAME\"></req></ff-label> <ff-text flex=\"8 1 200px\" name=\"companyName\" ff-model=\"$ctrl.links.companyName\" ff-change=\"$ctrl.saveLinks()\" ff-required=\"true\" ff-validate-alert=\"{{'WHITE_LABEL_SETTINGS.COMPANY_NAME' | translate}}\" placeholder=\"The Satellite Centers\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 0 120px', sm: '0 0 250px'}\"><req translate=\"WHITE_LABEL_SETTINGS.HOMEPAGE_URL\"></req></ff-label> <ff-url flex=\"8 1 200px\" name=\"homepageUrl\" ff-model=\"$ctrl.links.homepageUrl\" ff-change=\"$ctrl.saveLinks()\" ff-required=\"true\" ff-validate-alert=\"{{'WHITE_LABEL_SETTINGS.HOMEPAGE_URL' | translate}}\" placeholder=\"http://thesatellitecenters.com/\"></ff-url> </label> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 0 120px', sm: '0 0 250px'}\"> <span> <span translate=\"WHITE_LABEL_SETTINGS.MEMBER_DIRECTORY_URL\"></span> <ff-hint><span translate=\"WHITE_LABEL_SETTINGS.MEMBER_DIRECTORY_URL.HINT\"></span></ff-hint> </span> </ff-label> <ff-url flex=\"8 1 200px\" name=\"memberDirectoryUrl\" ff-model=\"$ctrl.links.memberDirectoryUrl\" ff-change=\"$ctrl.saveLinks()\" ff-validate-alert=\"{{'WHITE_LABEL_SETTINGS.MEMBER_DIRECTORY_URL' | translate}}\" placeholder=\"https://the_satellite.townsqua.re/apply\"></ff-url> </label> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 0 120px', sm: '0 0 250px'}\"> <span> <req translate=\"WHITE_LABEL_SETTINGS.CONTACT_URL\"></req> <ff-hint><span translate=\"WHITE_LABEL_SETTINGS.CONTACT_URL.HINT\"></span></ff-hint> </span> </ff-label> <ff-url flex=\"8 1 200px\" name=\"contactLinkUrl\" ff-model=\"$ctrl.links.contactLinkUrl\" ff-change=\"$ctrl.saveLinks()\" ff-required=\"true\" ff-validate-alert=\"{{'WHITE_LABEL_SETTINGS.CONTACT_URL' | translate}}\" placeholder=\"http://thesatellitecenters.com/contact/\"></ff-url> </label> <ff-row> <label flex=\"auto\"> <ff-label flex=\"{xs: '0 0 120px', sm: '0 0 250px'}\"> <span> <req translate=\"WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_URL\"></req> <ff-hint><span translate=\"WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_URL.HINT\"></span></ff-hint> </span> </ff-label> <ff-url flex=\"8 1 148px\" name=\"tosLinkUrl\" ff-model=\"$ctrl.links.tosLinkUrl\" ff-change=\"$ctrl.saveLinks()\" ff-required=\"true\" ff-validate-alert=\"{{'WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_URL' | translate}}\" placeholder=\"http://thesatellitecenters.com/terms-of-service/\"></ff-url> </label> <ff-btn-group flex=\"none\"> <ff-btn sense=\"upload\" size=\"sm\" ngf-select=\"$ctrl.uploadTermsOfService($files, $invalidFiles)\" ngf-pattern=\"'application/pdf'\" accept=\"application/pdf\" ff-spin=\"$ctrl.spinTOS\" title=\"{{'WHITE_LABEL_SETTINGS.BTN_UPLOAD_TERMS_OF_SERVICE.HINT' | translate}}\">PDF</ff-btn> </ff-btn-group> </ff-row> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 0 120px', sm: '0 0 250px'}\"> <span> <req translate=\"WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_TEXT\"></req> <ff-hint><span translate=\"WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_URL.HINT\"></span></ff-hint> </span> </ff-label> <ff-text flex=\"8 1 200px\" name=\"tosLinkText\" ff-model=\"$ctrl.links.tosLinkText\" ff-change=\"$ctrl.saveLinks()\" ff-required=\"true\" ff-validate-alert=\"{{'WHITE_LABEL_SETTINGS.TERMS_OF_SERVICE_TEXT' | translate}}\" placeholder=\"The Satellite’s Terms and Conditions\"></ff-text> </label> <ff-row> <label flex=\"auto\"> <ff-label flex=\"{xs: '0 0 120px', sm: '0 0 250px'}\"> <span> <span translate=\"WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_URL\"></span> <ff-hint><span translate=\"WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_URL.HINT\"></span></ff-hint> </span> </ff-label> <ff-url flex=\"8 1 148px\" name=\"reservationAgreementLinkUrl\" ff-model=\"$ctrl.links.reservationAgreementLinkUrl\" ff-change=\"$ctrl.saveLinks()\" ff-validate-alert=\"{{'WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_URL' | translate}}\" placeholder=\"http://thesatellitecenters.com/reservation-agreement/\"></ff-url> </label> <ff-btn-group flex=\"none\"> <ff-btn sense=\"upload\" size=\"sm\" ngf-select=\"$ctrl.uploadReservationAgreement($files, $invalidFiles)\" ngf-pattern=\"'application/pdf'\" accept=\"application/pdf\" ff-spin=\"$ctrl.spinRA\" title=\"{{'WHITE_LABEL_SETTINGS.BTN_UPLOAD_RESERVATION_AGREEMENT.HINT' | translate}}\">PDF</ff-btn> </ff-btn-group> </ff-row> <label class=\"ff-row\"> <ff-label flex=\"{xs: '0 0 120px', sm: '0 0 250px'}\"> <span> <span translate=\"WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_TEXT\"></span> <ff-hint><span translate=\"WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_URL.HINT\"></span></ff-hint> </span> </ff-label> <ff-text flex=\"8 1 200px\" name=\"reservationAgreementLinkText\" ff-model=\"$ctrl.links.reservationAgreementLinkText\" ff-change=\"$ctrl.saveLinks()\" ff-validate-alert=\"{{'WHITE_LABEL_SETTINGS.RESERVATION_AGREEMENT_TEXT' | translate}}\" placeholder=\"The Satellite’s Reservation Agreement\"></ff-text> </label> </ff-panel> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/white-label/settings/white-label-settings.controller.js":
/*!*************************************************************************!*\
  !*** ./bundles/white-label/settings/white-label-settings.controller.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ff_color_ff_color_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ff-color/ff-color.directive */ "./shared/ff-color/ff-color.directive.js");
/* harmony import */ var _services_white_label_vars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/white-label-vars.service */ "./bundles/white-label/services/white-label-vars.service.js");
/* harmony import */ var _services_white_label_vars_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/white-label-vars-list.service */ "./bundles/white-label/services/white-label-vars-list.service.js");
/* harmony import */ var _white_label_images_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-label-images.directive */ "./bundles/white-label/settings/white-label-images.directive.js");
/* harmony import */ var _white_label_links_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./white-label-links.directive */ "./bundles/white-label/settings/white-label-links.directive.js");
/* harmony import */ var _white_label_fonts_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./white-label-fonts.directive */ "./bundles/white-label/settings/white-label-fonts.directive.js");
/* harmony import */ var _white_label_settings_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./white-label-settings.scss */ "./bundles/white-label/settings/white-label-settings.scss");
/* harmony import */ var _white_label_settings_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_white_label_settings_scss__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.WhiteLabelSettingsCtrl', [shared_ff_color_ff_color_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, _services_white_label_vars_service__WEBPACK_IMPORTED_MODULE_3__["default"].name, _services_white_label_vars_list_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, _white_label_images_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name, _white_label_links_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, _white_label_fonts_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name, 'deskworks.whitelabel']).controller('WhiteLabelSettingsCtrl', ["$scope", "$translate", "dwAlerts", "state", "whitelabel", "helper", "WhiteLabelVars", "whiteLabelVarsList", function ($scope, $translate, dwAlerts, state, whitelabel, helper, WhiteLabelVars, whiteLabelVarsList) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('WHITE_LABEL_SETTINGS.PAGE_TITLE'));
  /**
   * onInit
   */

  (function onInit() {
    $ctrl.vars = angular.copy(whiteLabelVarsList);
    $ctrl.vars.forEach(function (v) {
      v.value = deserializeValue(v, null); // init with empty values
    });
    WhiteLabelVars.get().catch(function (err) {
      return dwAlerts.error(err, 'Failed to get white label vars');
    }).then(function (vars) {
      $ctrl.initialVars = {};
      $ctrl.vars.forEach(function (v) {
        v.value = deserializeValue(v, vars[v.id]); // re-init with values

        $ctrl.initialVars[v.id] = v.value;
      });
    });
    $scope.$watchCollection(function () {
      var _context;

      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.vars).call(_context, function (v) {
        return v.value;
      });
    }, onVarsChange);
  })();
  /**
   * onVarsChange
   */


  function onVarsChange(newVals, oldVals) {
    newVals.forEach(function (val, idx) {
      var v = $ctrl.vars[idx];
      var value = serializeValue(v);
      whitelabel.setProperty("--".concat(v.id), value);

      if (v.type === 'font' && value !== 'Optima' && !document.querySelector("link[font-name=\"".concat(value, "\"]"))) {
        addFontLink(value); // add link element for this font
      }

      if (val !== oldVals[idx] && angular.isDefined(oldVals[idx]) && $ctrl.initialVars && val !== $ctrl.initialVars[v.id]) {
        $ctrl.form.$setDirty();
      }
    });
  }
  /**
   * Add link element for new font
   * @param fontName
   */


  function addFontLink(fontName) {
    if (fontName === 'Optima') return;
    var link = angular.element("<link rel=\"stylesheet\" font-name=\"".concat(fontName, "\">"));
    link[0].href = "https://fonts.googleapis.com/css2?family=".concat(fontName, ":wght@300;400;700");
    document.head.appendChild(link[0]);
  }
  /**
   * Type comparator for filtering numbers
   * @param v - variable
   * @returns {boolean}
   */


  $ctrl.isTypeNumber = function (v) {
    return v.type === 'px' || v.type === '%';
  };
  /**
   * Save
   */


  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#whiteLabelSetup')) return;
    var data = {};
    $ctrl.vars.forEach(function (v) {
      data[v.id] = serializeValue(v);
    });
    return WhiteLabelVars.save(data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save white-label vars');
    }).then(function () {
      $ctrl.initialVars = {};
      $ctrl.vars.forEach(function (v) {
        $ctrl.initialVars[v.id] = v.value;
      });
      $ctrl.form.$setPristine();
    });
  };
  /**
   * Reset
   */


  $ctrl.reset = function () {
    $ctrl.vars.forEach(function (v) {
      v.value = $ctrl.initialVars[v.id];
    });
    $ctrl.form.$setPristine();
  };
  /**
   * Deserialize value
   */


  function deserializeValue(v, value) {
    value = value || whitelabel.getProperty("--".concat(v.id));
    if (v.type === 'px') return parseInt(value);
    if (v.type === '%') return parseInt(value);
    if (v.type === 'bool') return value === 'true';
    return value;
  }
  /**
   * Serialize value
   */


  function serializeValue(v, value) {
    value = angular.isDefined(value) ? value : v.value;
    if (angular.isDefined(v.default) && (angular.isUndefined(value) || value === null)) value = v.default;
    if (v.type === 'px') return "".concat(value, "px");
    if (v.type === '%') return "".concat(value, "%");
    if (v.type === 'bool') return "".concat(value);
    return value;
  }
}]));

/***/ }),

/***/ "./bundles/white-label/settings/white-label-settings.scss":
/*!****************************************************************!*\
  !*** ./bundles/white-label/settings/white-label-settings.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./bundles/white-label/settings/white-label-settings.tpl.html":
/*!********************************************************************!*\
  !*** ./bundles/white-label/settings/white-label-settings.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"whiteLabelSetup\"> <div class=\"ff-grid gutter-v gutter-h\"> <form name=\"$ctrl.form\" novalidate ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-h gutter-v\"> <ff-panel flex=\"{md: '0 0 50%'}\"> <ff-panel-header><span translate=\"WHITE_LABEL_SETTINGS.COLORS.HEADER\"></span></ff-panel-header> <label class=\"ff-row\" ng-repeat=\"v in $ctrl.vars | filter:{ type: 'color' }\"> <ff-label><span translate=\"{{v._name}}\"></span></ff-label> <ff-color name=\"{{v.id}}\" ff-model=\"v.value\"></ff-color> </label> </ff-panel> <ff-panel flex=\"{md: '0 0 50%'}\"> <ff-panel-header><span translate=\"WHITE_LABEL_SETTINGS.OTHER.HEADER\"></span></ff-panel-header> <ff-row ng-repeat=\"v in $ctrl.vars | filter: $ctrl.isTypeNumber\"> <ff-label flex=\"1 1 200px\"><req translate=\"{{v._name}}\"></req></ff-label> <ff-static flex=\"5 1 100px\"> <input type=\"range\" ng-model=\"v.value\" min=\"{{v.min}}\" max=\"{{v.max}}\" style=\"width:100%\"> </ff-static> <ff-number flex=\"0 0 36px\" name=\"{{v.id}}\" class=\"ff-right\" ff-model=\"v.value\" ff-gte=\"{{v.min}}\" ff-lte=\"{{v.max}}\" ff-required=\"true\" ff-validate-alert=\"{{v._name | translate}}\"></ff-number> </ff-row> <ff-static ng-repeat=\"v in $ctrl.vars | filter:{ type: 'bool' }\"> <label> <ff-checkbox name=\"{{v.id}}\" ff-model=\"v.value\"><span translate=\"{{v._name}}\"></span></ff-checkbox> </label> &nbsp; <ff-hint ng-if=\"v._hint\"><span translate=\"{{v._hint}}\"></span></ff-hint> </ff-static> </ff-panel> <white-label-fonts flex=\"{md: '0 0 50%'}\" vars=\"$ctrl.vars\"></white-label-fonts> <ff-btn-group> <ff-btn sense=\"reset\" ff-click=\"$ctrl.reset()\" ff-disabled=\"$ctrl.form.$pristine\"><span translate=\"GLOBAL.BTN_RESET\"></span></ff-btn> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"><span translate=\"GLOBAL.BTN_SAVE\"></span></ff-btn> </ff-btn-group> </div> </form> <white-label-links></white-label-links> <white-label-images></white-label-images> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/dw-modal/dw-modal.directive.js":
/*!***********************************************!*\
  !*** ./shared/dw-modal/dw-modal.directive.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dw_modal_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dw-modal.tpl.html */ "./shared/dw-modal/dw-modal.tpl.html");
/* harmony import */ var _dw_modal_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dw_modal_tpl_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dw_modal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dw-modal.scss */ "./shared/dw-modal/dw-modal.scss");
/* harmony import */ var _dw_modal_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dw_modal_scss__WEBPACK_IMPORTED_MODULE_1__);


/**
 * dwModal directive
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('dwModal.directive', []).directive('dwModal', function () {
  return {
    template: _dw_modal_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
    restrict: 'EA',
    transclude: true,
    compile: function compile(tElement) {
      tElement.addClass('dw-modal');
      return function () {
        /* link */
      };
    }
  };
}));

/***/ }),

/***/ "./shared/dw-modal/dw-modal.tpl.html":
/*!*******************************************!*\
  !*** ./shared/dw-modal/dw-modal.tpl.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"dw-modal-fade\" ng-click=\"close()\"></div> <div class=\"dw-modal-dialog\"> <div class=\"dw-modal-scroll\" ng-transclude></div> <button class=\"dw-modal-cross\" ng-click=\"close()\"></button> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/edit-image/edit-image.controller.js":
/*!****************************************************!*\
  !*** ./shared/edit-image/edit-image.controller.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_image_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-image.scss */ "./shared/edit-image/edit-image.scss");
/* harmony import */ var _edit_image_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_edit_image_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ff_crop_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ff-crop.directive */ "./shared/edit-image/ff-crop.directive.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('EditImageCtrl', [_ff_crop_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name]).controller('EditImageCtrl', ["$scope", "close", "load", "save", "style", function ($scope, close, load, save, style) {
  var $ctrl = this;
  $scope.close = close;
  $ctrl.style = style;
  /**
   * Init
   */

  load().then(function (image) {
    $ctrl.image = image;
    $ctrl.image.url += '?' + Date.now(); // TODO: maybe cache-busting is not necessary

    $ctrl.initialCrop = angular.copy($ctrl.image.crop);
  });
  /**
   * isPristine
   */

  $ctrl.isPristine = function () {
    return angular.equals($ctrl.initialCrop, $ctrl.image.crop);
  };
  /**
   * Reset
   */


  $ctrl.reset = function () {
    $ctrl.image.crop = angular.copy($ctrl.initialCrop);
  };
  /**
   * Save
   */


  $ctrl.save = function () {
    return save($ctrl.image).then(function () {
      $ctrl.initialCrop = angular.copy($ctrl.image.crop);
      return close(true);
    });
  };
}]));

/***/ }),

/***/ "./shared/edit-image/edit-image.scss":
/*!*******************************************!*\
  !*** ./shared/edit-image/edit-image.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/edit-image/edit-image.service.js":
/*!*************************************************!*\
  !*** ./shared/edit-image/edit-image.service.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_image_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-image.tpl.html */ "./shared/edit-image/edit-image.tpl.html");
/* harmony import */ var _edit_image_tpl_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_edit_image_tpl_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit_image_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-image.controller */ "./shared/edit-image/edit-image.controller.js");
/* harmony import */ var shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/dw-modal/dw-modal.service */ "./shared/dw-modal/dw-modal.service.js");
/* harmony import */ var shared_dw_modal_dw_modal_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/dw-modal/dw-modal.directive */ "./shared/dw-modal/dw-modal.directive.js");




/* harmony default export */ __webpack_exports__["default"] = (angular.module('editImage', [_edit_image_controller__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_dw_modal_dw_modal_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name]).factory('editImage', ["dwModal", function (dwModal) {
  return function (scope, inputs) {
    return dwModal.show({
      template: _edit_image_tpl_html__WEBPACK_IMPORTED_MODULE_0___default.a,
      scope: scope,
      inputs: inputs,
      controller: 'EditImageCtrl as $ctrl'
    }).then(function (modal) {
      return modal.close;
    });
  };
}]));

/***/ }),

/***/ "./shared/edit-image/edit-image.tpl.html":
/*!***********************************************!*\
  !*** ./shared/edit-image/edit-image.tpl.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<dw-modal> <div class=\"edit-image\" ff-dim=\"!$ctrl.image || !$ctrl.imageLoaded\"> <ff-img ff-src=\"{{$ctrl.image.url}}\" img-placeholder=\"800x800\" ff-crop=\"$ctrl.image\" ff-style=\"$ctrl.style\" ff-img-loaded=\"$ctrl.imageLoaded\" ng-if=\"$ctrl.image\" ng-show=\"$ctrl.imageLoaded\" ff-alt=\"Image\"></ff-img> <div class=\"ff-grid edit-image-toolbar\" ng-if=\"$ctrl.image && $ctrl.imageLoaded\"> <ff-row flex=\"0 0 170px\"> <ff-col flex=\"0 0 70px\" ng-if=\"$ctrl.image.url\"> <div><small>X:</small> {{$ctrl.image.crop.x}}</div> <div><small>Y:</small> {{$ctrl.image.crop.y}}</div> </ff-col> <ff-col flex=\"0 0 100px\" ng-if=\"$ctrl.image.url\"> <div><small>WIDTH:</small> {{$ctrl.image.crop.w}}</div> <div><small>HEIGHT:</small> {{$ctrl.image.crop.h}}</div> </ff-col> </ff-row> <ff-btn-group flex=\"auto\"> <ff-btn sense=\"reset\" size=\"sm\" ff-disabled=\"$ctrl.isPristine()\" ff-click=\"$ctrl.reset()\"> <span translate=\"GLOBAL.BTN_RESET\"></span> </ff-btn> <ff-btn sense=\"save\" size=\"sm\" ff-disabled=\"$ctrl.isPristine()\" ff-click=\"$ctrl.save()\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> </ff-btn-group> </div> </div> </dw-modal> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/edit-image/ff-crop.directive.js":
/*!************************************************!*\
  !*** ./shared/edit-image/ff-crop.directive.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/assign */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jcrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jcrop */ "../node_modules/jcrop/build/js/jcrop.js");
/* harmony import */ var jcrop_dist_jcrop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jcrop/dist/jcrop.css */ "../node_modules/jcrop/dist/jcrop.css");
/* harmony import */ var jcrop_dist_jcrop_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jcrop_dist_jcrop_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (angular.module('ffCrop', []).directive('ffCrop', ["$timeout", function ($timeout) {
  return {
    restrict: 'A',
    scope: true,
    link: function link($scope, $element, $attrs, $ctrl) {
      var img = $element[0].querySelector('img');
      var jcrop;
      var unwatch = $scope.$watch($attrs.ffCrop, function (options) {
        if (!options) return;
        unwatch(); // watch once

        $scope.$watchCollection(function () {
          return [img.getAttribute('src'), options && options.crop];
        }, function () {
          if (!$attrs.ffSrc) return;
          jcrop__WEBPACK_IMPORTED_MODULE_1__["default"].load(img).then(function () {
            return $scope.$apply(function () {
              return $timeout(function () {
                if (!jcrop) jcrop = jcrop__WEBPACK_IMPORTED_MODULE_1__["default"].attach($element[0], options);
                var _options$crop = options.crop,
                    x = _options$crop.x,
                    y = _options$crop.y,
                    w = _options$crop.w,
                    h = _options$crop.h;
                var dx = img.width / img.naturalWidth;
                var dy = img.height / img.naturalHeight;
                var rect = jcrop__WEBPACK_IMPORTED_MODULE_1__["default"].Rect.create(x * dx, y * dy, w * dx, h * dy);

                if (jcrop.active) {
                  jcrop.active.render(rect);
                } else {
                  jcrop.newWidget(rect);
                  jcrop.active.listen('crop.update', function (widget) {
                    $scope.$apply(function () {
                      var dx = img.naturalWidth / img.width;
                      var dy = img.naturalHeight / img.height;
                      var rect = widget.pos.normalize();
                      rect.x *= dx;
                      rect.y *= dy;
                      rect.w *= dx;
                      rect.h *= dy;

                      _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(options.crop, rect.round());
                    });
                  });
                }
              }, 100);
            });
          });
        });
      });
      $scope.$on('$destroy', function () {
        if (jcrop) {
          jcrop.removeWidget(jcrop.active);
          jcrop.active = null;
          jcrop.destroy();
        }

        jcrop = null;
      });
    }
  };
}]));

/***/ }),

/***/ "./shared/ff-color/ff-color.directive.js":
/*!***********************************************!*\
  !*** ./shared/ff-color/ff-color.directive.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-picker */ "../node_modules/vanilla-picker/dist/vanilla-picker.mjs");
/* harmony import */ var _ff_color_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ff-color.scss */ "./shared/ff-color/ff-color.scss");
/* harmony import */ var _ff_color_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ff_color_scss__WEBPACK_IMPORTED_MODULE_1__);


/**
 * ffColor directive - wrapper for 3rd party vanilla-picker
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('ffColor', []).directive('ffColor', ["$timeout", function ($timeout) {
  return {
    template: '<div></div>',
    restrict: 'E',
    scope: true,
    controller: 'ffColorCtrl as $ctrl',
    bindToController: {
      ffModel: '='
    },
    link: function link($scope, $element, $attrs, $ctrl) {
      var ownUpdate = false;
      $element.addClass('ff-control');
      var picker = new vanilla_picker__WEBPACK_IMPORTED_MODULE_0__["default"]({
        parent: $element[0],
        editor: true,
        color: $ctrl.ffModel,
        onChange: function onChange(color) {
          return $timeout(function () {
            ownUpdate = true;

            _onChange(color);
          });
        }
      });

      function _onChange(color) {
        $ctrl.ffModel = color.rgbaString;
        $element.css('color', color.rgbaString);
      }

      $scope.$watch('$ctrl.ffModel', function (val) {
        if (!ownUpdate) picker.setColor(val);
        ownUpdate = false;
      });
    }
  };
}]).controller('ffColorCtrl', function () {}));

/***/ }),

/***/ "./shared/ff-color/ff-color.scss":
/*!***************************************!*\
  !*** ./shared/ff-color/ff-color.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/reports/services/logo.service.js":
/*!*************************************************!*\
  !*** ./shared/reports/services/logo.service.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var logoUrl = '/white-label/images/logo-print.png';
/**
 * Logo service - handles logos for invoice
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.logo', []).factory('logo', ["$window", "$http", "$q", "deskworksConfig", function ($window, $http, $q, deskworksConfig) {
  var siteLogoPromise, siteLogoInvPromise;
  var maxWidth = 480,
      maxHeight = 171; // according to w = 140, h = 50 in invoice-header.service.js

  return {
    getSiteLogo: function getSiteLogo() {
      siteLogoPromise = siteLogoPromise || loadLogo();
      return siteLogoPromise;
    },
    getSiteLogoInv: function getSiteLogoInv() {
      siteLogoInvPromise = siteLogoInvPromise || loadLogoInv();
      return siteLogoInvPromise;
    },
    resetSiteLogo: function resetSiteLogo() {
      siteLogoPromise = null;
    },
    resetSiteLogoInv: function resetSiteLogoInv() {
      siteLogoInvPromise = null;
    }
  };
  /**
   * Loads non-inverted logo
   */

  function loadLogo() {
    return $q(function (resolve) {
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = deskworksConfig.getApiAbsUrl(logoUrl);

      img.onerror = function () {
        console.warn('Report failed to load site logo.');
        resolve(null);
        img = null;
      };

      img.onload = function () {
        resolve(img);
        img = null;
      };
    }).then(convertLogo);
  }
  /**
   * Loads inverted logo
   */


  function loadLogoInv() {
    return $q(function (resolve) {
      var img = document.querySelector('.sidebar-logo a img');
      if (!img) console.warn('Report failed to load site logo.');
      resolve(img);
    }).then(convertLogo);
  }
  /**
   * Downscales logo and converts to data-url then returns { width, height, data }
   */


  function convertLogo(img) {
    if (!img) return null;
    var dw = img.width / maxWidth;
    var dh = img.height / maxHeight;
    var scaleFactor = dw > dh ? dw : dh;
    var width = Math.round(img.width / scaleFactor);
    var height = Math.round(img.height / scaleFactor);
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    document.body.removeChild(canvas);
    return {
      width: width,
      height: height,
      data: data
    };
  }
}]));

/***/ })

}]);
//# sourceMappingURL=white-label~._b.js.map?_rev=f9959ae3cb8f9e3e62aa