(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communications~notifications~._shared_a"],{

/***/ "./shared/attachments/attachments.directive.js":
/*!*****************************************************!*\
  !*** ./shared/attachments/attachments.directive.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _attachments_tpl_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attachments.tpl.html */ "./shared/attachments/attachments.tpl.html");
/* harmony import */ var _attachments_tpl_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_attachments_tpl_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _get_attachments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-attachments.service */ "./shared/attachments/get-attachments.service.js");





/**
 * attachments directive - attachments list for email attachments in Communications and Notifications
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.attachments', [_get_attachments_service__WEBPACK_IMPORTED_MODULE_4__["default"].name]).directive('attachments', function () {
  return {
    template: _attachments_tpl_html__WEBPACK_IMPORTED_MODULE_3___default.a,
    restrict: 'EAC',
    scope: true,
    controller: 'AttachmentsCtrl as $ctrl',
    bindToController: {
      attachments: '=',
      form: '<?',
      attacher: '<?',
      detacher: '<?'
    }
  };
}).controller('AttachmentsCtrl', ["$window", "dwAlerts", "getAttachments", function ($window, dwAlerts, getAttachments) {
  var $ctrl = this;
  /**
   * Attach Files
   */

  $ctrl.attach = function ($files) {
    return getAttachments($files).then(function (attachments) {
      var _context;

      $ctrl.attachments = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(_context = $ctrl.attachments).call(_context, attachments);

      if ($ctrl.attacher) {
        attachments.forEach(function (att, idx) {
          att.$$spin = true;
          $ctrl.attacher(att).then(function (response) {
            att.$$spin = false;
            att.id = response.id;
            att.url = response.url;
            delete att.fileData;
          }).catch(function (err) {
            var _context2;

            _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = $ctrl.attachments).call(_context2, $ctrl.attachments.indexOf(att), 1); // remove failed attachment


            return dwAlerts.error(err, 'Failed to attach file.');
          });
        });
      } else {
        attachments.forEach(function (att, idx) {
          att.$$url = $window.URL.createObjectURL($files[idx]);
        });
        if ($ctrl.form) $ctrl.form.$setDirty();
      }
    });
  };
  /**
   * Detach File
   */


  $ctrl.detach = function (index) {
    if ($ctrl.detacher) {
      var att = $ctrl.attachments[index];
      return $ctrl.detacher(att).then(function () {
        var _context3;

        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = $ctrl.attachments).call(_context3, $ctrl.attachments.indexOf(att), 1);
      }).catch(function (err) {
        return dwAlerts.error(err, 'Failed to detach file.');
      });
    } else {
      var _context4;

      $window.URL.revokeObjectURL($ctrl.attachments[index].$$url);

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = $ctrl.attachments).call(_context4, index, 1);

      if ($ctrl.form) $ctrl.form.$setDirty();
    }
  };
  /**
   * $onDestroy
   */


  $ctrl.$onDestroy = function () {
    $ctrl.attachments.forEach(function (att) {
      return $window.URL.revokeObjectURL(att.$$url);
    });
  };
}]));

/***/ }),

/***/ "./shared/attachments/attachments.tpl.html":
/*!*************************************************!*\
  !*** ./shared/attachments/attachments.tpl.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel ngf-drop=\"$ctrl.attach($files)\" ngf-multiple=\"true\" ngf-drag-over-class=\"dragover\"> <ff-panel-header><span translate=\"ATTACHMENTS.HEADER\"></span></ff-panel-header> <ff-row ng-repeat=\"att in $ctrl.attachments\" ff-dim=\"att.$$spin\"> <ff-static name=\"attachment\"><a href=\"{{att.url || att.$$url}}\" target=\"_blank\" rel=\"noopener\">{{att.fileName}}</a></ff-static> <ff-btn sense=\"delete\" size=\"xs\" class=\"buttons-row\" ff-click=\"$ctrl.detach($index)\" flex=\"none\" title=\"{{'ATTACHMENTS.BTN_DELETE.HINT' | translate}}\"></ff-btn> </ff-row> <ff-btn-group class=\"ff-section-buttons\"> <ff-btn sense=\"new\" size=\"sm\" ngf-select=\"$ctrl.attach($files)\" ngf-multiple=\"true\"> <span translate=\"ATTACHMENTS.BTN_ADD\"></span> </ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./shared/attachments/get-attachments.service.js":
/*!*******************************************************!*\
  !*** ./shared/attachments/get-attachments.service.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Get email attachments service - gets attachments as data-urls from array of passed files
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.getAttachments.service', []).factory('getAttachments', ["$q", "$timeout", function ($q, $timeout) {
  return function getAttachments($files) {
    return $q.all(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()($files).call($files, function (file) {
      return $q(function (resolve) {
        var fileReader = new FileReader();

        fileReader.onload = function (e) {
          return $timeout(function () {
            return resolve({
              fileName: file.name,
              fileData: e.target.result
            });
          });
        };

        fileReader.readAsDataURL(file);
      });
    }));
  };
}]));

/***/ }),

/***/ "./shared/ff-richtext/ff-richtext.directive.js":
/*!*****************************************************!*\
  !*** ./shared/ff-richtext/ff-richtext.directive.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var textangularjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! textangularjs */ "../node_modules/textangularjs/dist/textAngular.umd.js");
/* harmony import */ var textangularjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(textangularjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var textangularjs_dist_textAngular_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! textangularjs/dist/textAngular.css */ "../node_modules/textangularjs/dist/textAngular.css");
/* harmony import */ var textangularjs_dist_textAngular_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(textangularjs_dist_textAngular_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ff_richtext_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ff-richtext.scss */ "./shared/ff-richtext/ff-richtext.scss");
/* harmony import */ var _ff_richtext_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ff_richtext_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * ffRichtext directive - wrapper for 3rd party textAngular
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('ffRichtext', ['textAngular']).directive('ffRichtext', ["ffHelper", function (ffHelper) {
  return {
    restrict: 'E',
    scope: true,
    compile: function compile(tElement, tAttrs) {
      var input = angular.element('<text-angular></text-angular>');
      ffHelper.copyInnerAttrs(tElement, tAttrs, input);
      tElement.append(input);
      return this.link;
    },
    link: function link($scope, $element, $attrs) {
      var content = angular.element($element[0].querySelector('[contenteditable]'));
      $scope.$watch('ffBlock.editMode', function (editMode) {
        if (angular.isUndefined(editMode)) return;
        $element.toggleClass('ff-read-only', !editMode);
        content.attr('contenteditable', editMode);
      });
    }
  };
}]));

/***/ }),

/***/ "./shared/ff-richtext/ff-richtext.scss":
/*!*********************************************!*\
  !*** ./shared/ff-richtext/ff-richtext.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/ff-richtext/ta-toolbar-email.service.js":
/*!********************************************************!*\
  !*** ./shared/ff-richtext/ta-toolbar-email.service.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * taToolbarEmail service - ffRichtext (textAngular) toolbar for email templates
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.taToolbarEmail', []).factory('taToolbarEmail', function () {
  return [['h1', 'h2', 'h3', 'h4', 'p', 'quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'], ['justifyLeft', 'justifyCenter', 'justifyRight'], ['html', 'insertImage', 'insertLink', 'wordcount', 'charcount']];
}));

/***/ }),

/***/ "./shared/short-codes/short-codes.directive.js":
/*!*****************************************************!*\
  !*** ./shared/short-codes/short-codes.directive.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _short_codes_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./short-codes.scss */ "./shared/short-codes/short-codes.scss");
/* harmony import */ var _short_codes_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_short_codes_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _short_codes_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./short-codes.tpl.html */ "./shared/short-codes/short-codes.tpl.html");
/* harmony import */ var _short_codes_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_short_codes_tpl_html__WEBPACK_IMPORTED_MODULE_1__);


/**
 * shortCodes directive - short codes list for email short-codes in Communications and Notifications
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.shortCodes', []).directive('shortCodes', function () {
  return {
    template: _short_codes_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
    restrict: 'EAC',
    scope: true,
    controller: 'ShortCodesCtrl as $ctrl',
    bindToController: {
      shortCodes: '<'
    }
  };
}).controller('ShortCodesCtrl', function () {// const $ctrl = this;
}));

/***/ }),

/***/ "./shared/short-codes/short-codes.scss":
/*!*********************************************!*\
  !*** ./shared/short-codes/short-codes.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./shared/short-codes/short-codes.tpl.html":
/*!*************************************************!*\
  !*** ./shared/short-codes/short-codes.tpl.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header><span> <span translate=\"SH_CODES.HEADER\"></span> <ff-hint><span translate=\"SH_CODES.HINT\"></span></ff-hint> </span></ff-panel-header> <ff-row ng-repeat=\"code in $ctrl.shortCodes\"> <ff-label flex=\"1 0 140px\" ff-bind-html=\"code.id\"></ff-label> <ff-static flex=\"1 1 350px\">{{code._name | translate}}</ff-static> </ff-row> </ff-panel> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=communications~notifications~._shared_a.js.map?_rev=e395f41fbfc36d250051