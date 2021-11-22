(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main~._common_flex-forms_c"],{

/***/ "./common/flex-forms/controls/ff-btn-group.directive.js":
/*!**************************************************************!*\
  !*** ./common/flex-forms/controls/ff-btn-group.directive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffBtnGroup directive - wrapper for ffBtn elements
 */
angular.module('flexForms.ffBtnGroup', []).directive('ffBtnGroup', ["$timeout", "$rootScope", function ($timeout, $rootScope) {
  return {
    restrict: 'E',
    scope: true,
    compile: function compile(tElement, tAttrs) {
      tElement.addClass('input-btn-group');
      tElement.addClass('ff-btn-group');
      tElement.html('<fieldset' + (tElement.attr('ff-disabled') ? ' ng-disabled="' + tElement.attr('ff-disabled') + '"' : '') + '>' + tElement.html() + '</fieldset>');
      return function link($scope, $element, $attrs) {
        var fieldset = $element[0].querySelector('fieldset');
        $scope.$on('ffBtn::spinStart', function ($event) {
          $event.stopPropagation();
          fieldset.disabled = true;
        });
        $scope.$on('ffBtn::spinStop', function ($event) {
          $event.stopPropagation();
          fieldset.disabled = false;
        });
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-btn.directive.js":
/*!********************************************************!*\
  !*** ./common/flex-forms/controls/ff-btn.directive.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);




/**
 * ffBtn directive - wrapper for standard button element.
 * Supports coloring and iconing by sense attribute and sizing by size attribute.
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffBtn', []).directive('ffBtn', ["$rootScope", "$q", "$compile", "$timeout", "ffHelper", function ($rootScope, $q, $compile, $timeout, ffHelper) {
  // Size -> color classes
  var sizeSizeClasses = {
    xs: 'btn-xs',
    sm: 'btn-xs',
    lg: ''
  }; // Sense -> color/icon classes

  var presets = {
    edit: {
      color: 'btn-primary',
      icon: 'fa-pencil'
    },
    add: {
      color: 'btn-success',
      icon: 'fa-plus'
    },
    'add-alt': {
      color: 'btn-primary',
      icon: 'fa-plus'
    },
    new: {
      color: 'btn-success',
      icon: 'fa-plus'
    },
    view: {
      color: 'btn-success',
      icon: 'fa-eye'
    },
    clone: {
      color: 'btn-success',
      icon: 'fa-copy'
    },
    back: {
      color: 'btn-warning',
      icon: 'fa-chevron-left'
    },
    import: {
      color: 'btn-success',
      icon: 'fa-upload'
    },
    remove: {
      color: 'btn-danger',
      icon: 'fa-remove'
    },
    delete: {
      color: 'btn-danger',
      icon: 'fa-remove'
    },
    save: {
      color: 'btn-success',
      icon: 'fa-check'
    },
    next: {
      color: 'btn-success',
      icon: 'fa-chevron-right'
    },
    search: {
      color: 'btn-primary',
      icon: 'fa-search'
    },
    userSelect: {
      color: 'btn-success',
      icon: 'fa-user'
    },
    reserve: {
      color: 'btn-success',
      icon: 'fa-check'
    },
    ok: {
      color: 'btn-success',
      icon: 'fa-check'
    },
    cancel: {
      color: 'btn-warning',
      icon: 'fa-ban'
    },
    upload: {
      color: 'btn-primary',
      icon: 'fa-upload'
    },
    download: {
      color: 'btn-primary',
      icon: 'fa-download'
    },
    favorite: {
      color: 'btn-success',
      icon: 'fa-star'
    },
    makeFavorite: {
      color: 'btn-warning',
      icon: 'fa-star-o'
    },
    collapse: {
      color: 'btn-primary',
      icon: 'fa-angle-down'
    },
    collapseBtn: {
      color: 'btn-success',
      icon: 'fa-angle-down'
    },
    collapseBtnPriv: {
      color: 'btn-success',
      icon: 'fa-angle-down'
    },
    // privileged - hidden when read-only
    signup: {
      color: 'btn-primary'
    },
    link: {
      color: 'btn-link'
    },
    checkIn: {
      color: 'btn-success',
      icon: 'fa-check'
    },
    checkOut: {
      color: 'btn-warning',
      icon: 'fa-check'
    },
    home: {
      color: 'btn-warning',
      icon: 'fa-home'
    },
    charge: {
      color: 'btn-primary',
      icon: 'fa-dollar'
    },
    merge: {
      color: 'btn-success',
      icon: 'fa-copy'
    },
    help: {
      color: 'btn-primary',
      icon: 'fa-question'
    },
    reset: {
      color: 'btn-warning',
      icon: 'fa-undo'
    },
    calendar: {
      color: 'btn-warning',
      icon: 'fa-calendar'
    },
    close: {
      color: 'btn-link',
      icon: 'fa-close'
    },
    signOut: {
      color: 'btn-primary',
      icon: 'fa-sign-out'
    },
    settings: {
      color: 'btn-primary',
      icon: 'fa-cog'
    },
    crop: {
      color: 'btn-primary',
      icon: 'fa-crop'
    },
    expand: {
      color: 'btn-primary',
      icon: 'fa-expand'
    },
    plus: {
      color: 'btn-primary',
      icon: 'fa-plus'
    },
    minus: {
      color: 'btn-primary',
      icon: 'fa-minus'
    },
    send: {
      color: 'btn-success',
      icon: 'fa-paper-plane'
    },
    resetUser: {
      color: 'btn-success',
      icon: 'fa-times-circle'
    },
    drag: {
      color: 'btn-primary',
      icon: 'fa-arrows-alt'
    },
    widen: {
      color: 'btn-primary',
      icon: 'fa-arrows-h'
    }
  };
  return {
    restrict: 'E',
    scope: true,
    terminal: true,
    priority: 1,
    controllerAs: 'ffBtn',
    controller: ["$scope", function controller($scope) {
      var ffBtn = this;
      /**
       * Button click handler, tracks passed promise and runs/stops internal spinner
       */

      ffBtn.click = function (promise) {
        ffBtn.spin = true;
        return $q.when(promise).finally(function () {
          ffBtn.spin = false;
        });
      };
      /**
       * Auto-click button on countdown expiry
       */


      $scope.$on('ffCountdown::expiry', function ($event) {
        $event.stopPropagation();
        $scope.$eval(ffBtn.clickExp);
      });
    }],
    compile: function compile(tElement, tAttrs) {
      var title = tAttrs.title;
      tAttrs.$set('title', null);
      return function link($scope, $element, $attrs, ffBtn) {
        var origClick = $attrs.ffClick; // Backup original ffClick handler

        ffBtn.clickExp = $attrs.ffClick; // Click expression to be called outside of ngClick

        /**
         * If no ffSpin directive, add internal ffSpin which wraps the original click-handler call and tracks returned promise.
         * Terminates compilation, adds missing ffSpin attribute, then finishes compilation low-priority directives like ffSpin with -1.
         */

        if (!$attrs.ffSpin) {
          ffBtn.clickExp = 'ffBtn.click(' + $attrs.ffClick + ')';
          $attrs.$set('ffClick', ffBtn.clickExp);
          $attrs.$set('ffSpin', 'ffBtn.spin');
        }
        /**
         * Creating child input
         */


        var input = angular.element('<button class="ff-btn btn"></button>');
        var attrsToRemove = ffHelper.copyAttrs($element, input);
        $timeout(function () {
          return attrsToRemove.forEach(function (name) {
            return $element.attr(name, null);
          });
        });
        $compile($element, null, 1)($scope);
        input.attr('title', title);
        input.attr('type', $attrs.type || 'button');
        input.addClass(sizeSizeClasses[$attrs.size] || 'btn-sm'); // Button text

        if ($attrs.size !== 'xs') {
          input.append('<span>' + $element.html() + '</span>');
        }

        $element.empty().append(input);
        $compile(input)($scope);
        $element.attr('ff-click', origClick); // Restore original click handler which might be substituted for ffSpin during compilation

        /**
         * Observer of sense attribute, manages button look-and-feel
         */

        $attrs.$observe('sense', function (sense) {
          input.removeClass('btn-primary btn-success btn-warning btn-danger');
          input.addClass(angular.isDefined(presets[sense]) ? presets[sense].color : 'btn-primary'); // Button icon

          if (!presets[sense] || !!presets[sense].icon) {
            var icon = input[0].querySelector('.fa');

            if (icon) {
              icon.remove(); // Prevent multiple icons
            }

            input.append(angular.element('<span class="fa"></span>').addClass(presets[sense] ? presets[sense].icon : 'fa-check'));
          } // Exclude favorite button from tabindex to simulate disabled status


          input.attr('tabindex', sense === 'favorite' ? -1 : 0);
        });
        /**
         * Emit ffBtn::spinStart/ffBtn::spinStop events for blocking neighbour buttons within ffBtnGroup directive
         */

        $scope.$watch($attrs.ffSpin, function (val) {
          $scope.$emit(val ? 'ffBtn::spinStart' : 'ffBtn::spinStop');
        });
      };
    }
  };
}]));

/***/ }),

/***/ "./common/flex-forms/controls/ff-cc-number.directive.js":
/*!**************************************************************!*\
  !*** ./common/flex-forms/controls/ff-cc-number.directive.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * ffCcNumber directive - CC number input element
 */
angular.module('flexForms.ffCcNumber', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore', 'ccValidator']).directive('ffCcNumber', ["$compile", "$templateCache", "ffHelper", "ccValidator", "helper", function ($compile, $templateCache, ffHelper, ccValidator, helper) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffCcNumber'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {
      ccType: '=',
      ccTypes: '<'
    },
    link: function link($scope, $element, $attrs, $ctrls) {
      var ffControl = $ctrls.ffControl;
      var $input = angular.element($templateCache.get('ffText'));
      var $static = $compile($templateCache.get('ffTextStatic'))($scope);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($input);
      $compile($input)($scope);
      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.append($input);
      }

      function renderView() {
        $input.detach();
        $element.append($static);
      }

      function modelToStatic(model) {
        return model;
      }

      var $model = $input.controller('ngModel');
      var $alert = $input.controller('ngValidateAlert');
      /**
       * Parser
       */

      $model.$parsers.push(parser);

      function parser(value) {
        var _context;

        if (!value) {
          $model.$setValidity('ccnumber', true);
          $model.$setValidity('cctype', true);
          return value;
        }

        var result = ccValidator(value);
        ffControl.ccType = helper.findByKeyValue(ffControl.ccTypes, 'id', result.card && result.card.type);
        $model.$setValidity('cctype', !result.card || !!ffControl.ccType);
        $model.$setValidity('ccnumber', result.isValid);
        $alert.ccTypeName = result.card && result.card.niceType;
        $alert.ccTypesSupported = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = ffControl.ccTypes).call(_context, function (ccType) {
          return ccType.name;
        }).join(', ');
        return value;
      }
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-checkbox.directive.js":
/*!*************************************************************!*\
  !*** ./common/flex-forms/controls/ff-checkbox.directive.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/trim */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_0__);


/**
 * ffCheckbox directive - wrapper for standard input type="checkbox"
 */
angular.module('flexForms.ffCheckbox', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffCheckbox', ["$compile", "$templateCache", "ffHelper", function ($compile, $templateCache, ffHelper) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffCheckbox'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {},
    compile: function compile(tElement, tAttrs) {
      var innerHtml = tElement.html();
      tElement.empty();
      return function link($scope, $element, $attrs, $ctrls) {
        var ffControl = $ctrls.ffControl;
        var $input = angular.element($templateCache.get('ffCheckbox'));
        var $i = angular.element('<i></i>');
        var $static = $compile($templateCache.get('ffCheckboxStatic'))($scope);

        var $label = $attrs.ffLabel || _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_0___default()(innerHtml).call(innerHtml);

        if ($label) $label = angular.element('<span class="cb-label"></span>').append($label);
        ffHelper.copyInnerAttrs($element, $attrs, $input);
        $element.empty().append($input).append($i);
        $compile($input)($scope);

        if ($label) {
          $element.append($label);
          $compile($label)($scope);
        }

        ffControl.init({
          renderEdit: renderEdit,
          renderView: renderView,
          modelToStatic: modelToStatic
        });

        function renderEdit() {
          $static.detach();
          $element.prepend($input);
        }

        function renderView() {
          $input.detach();
          $element.prepend($static);
        }

        function modelToStatic(model) {
          if (angular.isDefined($attrs.ffTrueValue) && model == $attrs.ffTrueValue) return true;
          if (angular.isDefined($attrs.ffFalseValue) && model == $attrs.ffFalseValue) return false;
          return !!model;
        }
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-control.controller.js":
/*!*************************************************************!*\
  !*** ./common/flex-forms/controls/ff-control.controller.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/nice-date-time/nice-time.directive */ "./shared/nice-date-time/nice-time.directive.js");

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ffControlController', [shared_nice_date_time_nice_time_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name]).controller('ffControlController', ["$scope", "$element", "$attrs", "$timeout", "ffControlCompileTemplates", function ($scope, $element, $attrs, $timeout, ffControlCompileTemplates) {
  var ffControl = this;
  var initialValue;
  var renderEdit, renderView, modelToStatic; // methods from link function of particular control
  // /**
  //  * $onInit
  //  */
  // ffControl.$onInit = function() {
  //   if (!$templateCache.get('ffTextStatic')) // compile ng-templates once to add them to $templateCache
  //     $compile($templateCache.get('flex-forms/controls/ff-control.tpl.html'));
  // };

  /**
   * Init
   */

  ffControl.init = function (options) {
    if (!$attrs.ffModel) return; // skip static controls

    if (ffControl.ffReadOnlyIgnore) return; // skip ignored zone

    renderEdit = options.renderEdit;
    renderView = options.renderView;
    modelToStatic = options.modelToStatic;
    if (!renderEdit || !renderView || !modelToStatic) return console.error('ffControl.init: renderEdit/renderView/modelToStatic is not defined');
    initialValue = $scope.$eval($attrs.ffModel);
    $scope.$on('ffControl::EditCancel', function () {
      if (getEditMode()) $scope.$eval($attrs.ffModel + ' = initialValue', {
        initialValue: initialValue
      });
    });
    /* Watch for editMode and switch control between static <-> input. */

    $scope.$watch(getEditMode, function (editMode) {
      if (angular.isUndefined(editMode)) return;
      $element.toggleClass('ff-read-only', !editMode);

      if (editMode) {
        initialValue = $scope.$eval($attrs.ffModel);
        renderEdit();
      } else {
        renderView();
      }
    });
    /* Watch for ffModel and convert it to staticValue */

    $scope.$watch($attrs.ffModel, function (ffModel) {
      ffControl.staticValue = modelToStatic(ffModel);
    });
  };

  ffControl.updateStatic = function () {
    ffControl.staticValue = modelToStatic($scope.$eval($attrs.ffModel));
  };

  function getEditMode() {
    if (ffControl.ffBulkReadOnly && !ffControl.ffBulkReadOnly.editMode) return false;
    if (ffControl.ffBlock) return ffControl.ffBlock.editMode;
    return true;
  }
}]).factory('ffControlCompileTemplates', ["$compile", "$templateCache", function ($compile, $templateCache) {
  if (!$templateCache.get('ffTextStatic')) // compile ng-templates once to add them to $templateCache
    $compile($templateCache.get('flex-forms/controls/ff-control.tpl.html'));
  return {};
}]));

/***/ }),

/***/ "./common/flex-forms/controls/ff-control.tpl.html":
/*!********************************************************!*\
  !*** ./common/flex-forms/controls/ff-control.tpl.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = " <script type=\"text/ng-template\" id=\"ffStatic\"> <span class=\"form-control ff-control ff-static\"></span> </script> <script type=\"text/ng-template\" id=\"ffText\"> <input type=\"text\" class=\"form-control ff-control ff-text\" maxlength=\"256\"> </script> <script type=\"text/ng-template\" id=\"ffTextStatic\"> <span class=\"form-control ff-control ff-static\" ng-bind=\"ffControl.staticValue\"></span> </script> <script type=\"text/ng-template\" id=\"ffTextStaticUrl\"> <span class=\"form-control ff-control ff-static\">\n\t\t<a ng-bind=\"ffControl.staticValue\" href=\"{{ffControl.staticUrl}}\" target=\"_blank\" rel=\"noopener\"></a>\n\t</span> </script> <script type=\"text/ng-template\" id=\"ffEmail\"> <input type=\"email\" class=\"form-control ff-control ff-email\" autocapitalize=\"off\" maxlength=\"256\"> </script> <script type=\"text/ng-template\" id=\"ffLogin\"> <input type=\"text\" class=\"form-control ff-control ff-text\" autocorrect=\"off\" autocapitalize=\"off\" maxlength=\"256\"> </script> <script type=\"text/ng-template\" id=\"ffPassword\"> <input type=\"password\" class=\"form-control ff-control ff-password\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"new-password\" maxlength=\"256\"> </script> <script type=\"text/ng-template\" id=\"ffPasswordStatic\"> <span class=\"form-control ff-control ff-static\">&bullet;&bullet;&bullet;&bullet;&bullet;&bullet;</span> </script> <script type=\"text/ng-template\" id=\"ffTextarea\"> <textarea class=\"form-control ff-control ff-textarea\"></textarea> </script> <script type=\"text/ng-template\" id=\"ffTime\"> <input name=\"time\" type=\"text\" class=\"form-control ff-control ff-time\" ng-model-options=\"{ allowInvalid: true }\" ng-focus=\"onFocus()\"> </script> <script type=\"text/ng-template\" id=\"ffTimeStatic\"> <span class=\"form-control ff-control ff-static\"><span nice-time=\"ffControl.staticValue\"></span></span> </script> <script type=\"text/ng-template\" id=\"ffDate\"> <div ng-form=\"ffDateForm\">\n\t\t<input name=\"date\" type=\"text\" class=\"form-control ff-control ff-date\" ng-model-options=\"{ allowInvalid: true }\">\n\t\t<button type=\"button\" class=\"fa fa-calendar\" ng-click=\"openDP($event)\" title=\"Open Date Picker\"></button>\n\t</div> </script> <script type=\"text/ng-template\" id=\"ffSelect\"> <select class=\"form-control ff-control ff-select\"></select> </script> <script type=\"text/ng-template\" id=\"ffCheckbox\"> <input type=\"checkbox\" class=\"ff-checkbox\"> </script> <script type=\"text/ng-template\" id=\"ffCheckboxStatic\"> <span ng-class=\"{ checked: ffControl.staticValue }\"></span> </script> <script type=\"text/ng-template\" id=\"ffRadio\"> <input type=\"radio\" class=\"ff-checkbox\"> </script> <script type=\"text/ng-template\" id=\"ffRadioStatic\"> <span class=\"fa\" ng-class=\"{ 'fa-check-circle': ffControl.staticValue, 'fa-circle-o': !ffControl.staticValue }\"></span> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/flex-forms/controls/ff-countdown.directive.js":
/*!**************************************************************!*\
  !*** ./common/flex-forms/controls/ff-countdown.directive.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ff_countdown_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ff-countdown.scss */ "./common/flex-forms/controls/ff-countdown.scss");
/* harmony import */ var _ff_countdown_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ff_countdown_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * ffCountdown directive - decrements counter once per second and emits ffCountdown::expiry after counter expiration.
 */

angular.module('flexForms.ffCountdown', []).directive('ffCountdown', ["$compile", function ($compile) {
  'use strict';

  return {
    restrict: 'A',
    scope: true,
    controller: 'ffCountdownCtrl as $cnt',
    bindToController: {
      counter: '=ffCountdown'
    },
    compile: function compile(tElement) {
      tElement.addClass('ff-countdown');
      return function link($scope, $element) {
        angular.element($element[0].querySelector('.ff-countdown-time')).remove();
        $element.append($compile('<span class="ff-countdown-time">[{{$cnt.counter}}]</span>')($scope));
      };
    }
  };
}]).controller('ffCountdownCtrl', ["$scope", "$timeout", function ($scope, $timeout) {
  'use strict';

  var $cnt = this;
  /**
   * If counter > 0, start decremental timer for 1s, or emit ffCountdown::expiry event if counter is 0.
   */

  var timer;
  $scope.$watch('$cnt.counter', onCounterChange);

  function onCounterChange() {
    $timeout.cancel(timer);

    if ($cnt.counter) {
      timer = $timeout(function () {
        if (! --$cnt.counter) {
          $scope.$emit('ffCountdown::expiry');
        }
      }, 1000);
    }
  }
  /**
   * $onInit
   */


  $cnt.$onInit = function () {
    $cnt.counterInitial = $cnt.counter;
    window.addEventListener('click', refreshCounter);
    window.addEventListener('keydown', refreshCounter);
  };
  /**
   * $onDestroy
   */


  $cnt.$onDestroy = function () {
    window.removeEventListener('click', refreshCounter);
    window.removeEventListener('keydown', refreshCounter);
  };

  function refreshCounter() {
    $scope.$apply(function () {
      $cnt.counter = $cnt.counterInitial;
      onCounterChange();
    });
  }
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-countdown.scss":
/*!******************************************************!*\
  !*** ./common/flex-forms/controls/ff-countdown.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/controls/ff-date.directive.js":
/*!*********************************************************!*\
  !*** ./common/flex-forms/controls/ff-date.directive.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ff_date_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ff-date.scss */ "./common/flex-forms/controls/ff-date.scss");
/* harmony import */ var _ff_date_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ff_date_scss__WEBPACK_IMPORTED_MODULE_6__);







/**
 * ffDate directive - date input component
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffDate', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffDate', ["$compile", "$templateCache", "$locale", "$filter", "$window", "$timeout", "ffHelper", function ($compile, $templateCache, $locale, $filter, $window, $timeout, ffHelper) {
  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffDate'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {},
    link: function link($scope, $element, $attrs, $ctrls) {
      var monthly = $scope.$eval($attrs.monthly);
      var $container = angular.element($templateCache.get('ffDate'));
      var $input = angular.element($container[0].querySelector('input'));
      var $static = $compile($templateCache.get('ffTextStatic'))($scope);
      if ($attrs.ffDisabled) angular.element($container[0].querySelector('button')).attr('ng-disabled', $attrs.ffDisabled);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($container);
      $compile($container)($scope);
      var ffControl = $ctrls.ffControl;
      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.append($container);
      }

      function renderView() {
        $container.detach();
        $element.append($static);
      }

      function modelToStatic(model) {
        return monthly ? $filter('date')(model, 'MMM yyyy') : $filter('date')(model, 'mediumDate');
      }

      $scope.$attrs = $attrs;
      var $model = $input.controller('ngModel');
      /**
       * Formatter
       */

      var skipFormatter; // flag to skip one formatter call to prevent overwriting user input

      $model.$formatters.push(function formatter(value) {
        if (skipFormatter) {
          // skip one formatter call to prevent overwriting user input
          skipFormatter = false; // reset flag set by parser

          return $model.$viewValue; // just do nothing
        }

        return monthly ? $filter('date')(value, 'MMM yyyy') : $filter('date')(value, 'mediumDate');
      });
      /**
       * Parser
       */

      $model.$parsers.push(function parser(value) {
        var _context;

        if (!value) return value;
        var enMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var lcMonths = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context = $locale.DATETIME_FORMATS.SHORTMONTH).call(_context, $locale.DATETIME_FORMATS.MONTH);

        var allMonths = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(lcMonths).call(lcMonths, enMonths);

        var allNames = allMonths.join('|').replace(/\./g, '\\.?');
        var parsed = MMM_DD_YYYY(value) || DD_MMM_YYYY(value) || MM_DD_YYYY(value) || YYYY_MM_DD(value);
        if (monthly) parsed = parsed || MMM_YYYY(value) || MM_YYYY(value) || YYYY_MM(value);
        if (!parsed) return; // none of patterns matched

        var date = moment(parsed.value, parsed.format);

        if (date.isValid()) {
          $model.$setValidity('date', true);
          skipFormatter = true; // set flag to skip one formatter call to prevent overwriting user input

          if (monthly) date.date(1);
          return date;
        }

        $model.$setValidity('date', false); // 28 Mar 2015 or 28-Mar-2015 or 28 March 2015 or 28 сентября 2015 or 28 сент. 2015

        function DD_MMM_YYYY(value) {
          var rexp = new RegExp('^\\s*\\d{1,2}(?:\\s|-|\\.|\\/)+(' + allNames + ')(?:\\s|-|\\.|\\/)+\\d{4}\\s*$', 'i');
          var match = value.match(rexp);

          if (match && match[1]) {
            var monthIndex = -1;

            for (var i = 0; i < allMonths.length; i++) {
              if (allMonths[i].toLowerCase().replace('.', '') === match[1].toLowerCase().replace('.', '')) {
                monthIndex = i % 12;
                break;
              }
            }

            value = value.replace(new RegExp(match[1].replace(/\./g, '\\.?'), 'i'), enMonths[monthIndex]);
            value = value.replace(/\s|-|\.|\//g, ' ').replace(/\s+/g, ' '); // replace delimiters to spaces

            return {
              format: 'DD MMM YYYY',
              value: value
            };
          }
        } // Mar 28, 2015 or Mar-28-2015 or March 28, 2015 or сентября 28, 2015 or сент. 28, 2015


        function MMM_DD_YYYY(value) {
          var rexp = new RegExp('^\\s*(' + allNames + ')(?:\\s|-|\\.|\\/)+\\d{1,2}(?:\\s|-|\\.|\\/|,)+\\d{4}\\s*$', 'i');
          var match = value.match(rexp);

          if (match && match[1]) {
            var monthIndex = -1;

            for (var i = 0; i < allMonths.length; i++) {
              if (allMonths[i].toLowerCase().replace('.', '') === match[1].toLowerCase().replace('.', '')) {
                monthIndex = i % 12;
                break;
              }
            }

            value = value.replace(new RegExp(match[1].replace(/\./g, '\\.?'), 'i'), enMonths[monthIndex]);
            value = value.replace(/\s|-|\.|\/|,/g, ' ').replace(/\s+/g, ' '); // replace delimiters to spaces

            return {
              format: 'MMM DD YYYY',
              value: value
            };
          }
        } // 03/28/2015


        function MM_DD_YYYY(value) {
          if (value.match(/^\s*\d{1,2}(?:\s|-|\.|\/)+\d{1,2}(?:\s|-|\.|\/)+\d{4}\s*$/i)) {
            return {
              format: 'MM/DD/YYYY',
              value: value.replace(/\s|-|\./g, '/').replace(/\/+/g, '/') // replace delimiters to slashes

            };
          }
        } // 2015-03-28


        function YYYY_MM_DD(value) {
          if (value.match(/^\s*\d{4}(?:\s|-|\.|\/)+\d{1,2}(?:\s|-|\.|\/)+\d{1,2}\s*$/i)) {
            return {
              format: 'YYYY-MM-DD',
              value: value.replace(/\s|-|\.|\//g, '-').replace(/-+/g, '-') // replace delimiters to slashes

            };
          }
        } // Mar 2015 or Mar-2015 or March 2015 or сентября 2015 or сент. 2015


        function MMM_YYYY(value) {
          var rexp = new RegExp('^\\s*(' + allNames + ')(?:\\s|-|\\.|\\/|,)+\\d{4}\\s*$', 'i');
          var match = value.match(rexp);

          if (match && match[1]) {
            var monthIndex = -1;

            for (var i = 0; i < allMonths.length; i++) {
              if (allMonths[i].toLowerCase().replace('.', '') === match[1].toLowerCase().replace('.', '')) {
                monthIndex = i % 12;
                break;
              }
            }

            value = value.replace(new RegExp(match[1].replace(/\./g, '\\.?'), 'i'), enMonths[monthIndex]);
            value = value.replace(/\s|-|\.|\/|,/g, ' ').replace(/\s+/g, ' '); // replace delimiters to spaces

            return {
              format: 'MMM YYYY',
              value: value
            };
          }
        } // 03/2015


        function MM_YYYY(value) {
          if (value.match(/^\s*\d{1,2}(?:\s|-|\.|\/)+\d{4}\s*$/i)) {
            return {
              format: 'MM/YYYY',
              value: value.replace(/\s|-|\./g, '/').replace(/\/+/g, '/') // replace delimiters to slashes

            };
          }
        } // 2015-03


        function YYYY_MM(value) {
          if (value.match(/^\s*\d{4}(?:\s|-|\.|\/)+\d{1,2}\s*$/i)) {
            return {
              format: 'YYYY-MM',
              value: value.replace(/\s|-|\.|\//g, '-').replace(/-+/g, '-') // replace delimiters to slashes

            };
          }
        }
      });
      /**
       * Close Datepicker handler
       */

      $scope.closeDP = function () {
        var dp = angular.element(document.getElementById('ff-dp-popup'));
        dp.remove(dp);
        $window.removeEventListener('click', onWindowClick);
        angular.element(document.querySelector('main')).css('padding-bottom', '');
      };
      /**
       * Open Datepicker handler
       */


      $scope.openDP = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.closeDP();
        $window.addEventListener('click', onWindowClick);
        var dp = angular.element('<ff-datepicker id="ff-dp-popup" tabindex="0" ng-click="stopPropagation($event)"></ff-datepicker>');
        dp.attr('ff-model', $attrs.ffModel);
        dp.attr('date-min', $attrs.dateMin);
        dp.attr('date-max', $attrs.dateMax);
        dp.attr('date-disabled', $attrs.dateDisabled);
        dp.attr('monthly', $attrs.monthly);
        dp = $compile(dp)($scope);
        $element.append(dp);
        dp[0].focus();
        $timeout(function () {
          dp[0].querySelector('.ff-dp-cal-body').addEventListener('click', function () {
            // close datepicker on date selection
            $scope.closeDP();
            $timeout(function () {
              // return focus to ff-date > input element on date selection
              $element[0].querySelector('input').focus();
            });

            for (var key in $scope.ffDateForm) {
              // set date element to dirty state
              if ($scope.ffDateForm.hasOwnProperty(key) && key.indexOf('$') < 0) {
                if (angular.isString($scope.ffDateForm[key].$name)) {
                  $scope.ffDateForm[key].$setDirty();
                  angular.forEach($scope.ffDateForm[key].$viewChangeListeners, function (listener) {
                    listener(); // notify all ngChange listeners
                  });
                }
              }
            }
          }); // extend height of main element if datepicker overflows it

          var main = document.querySelector('main');
          var paddingBottom = parseInt($window.getComputedStyle(main).paddingBottom);
          angular.element(main).css('padding-bottom', paddingBottom + main.scrollHeight - main.clientHeight + 50 + 'px');
        });
      };

      $scope.stopPropagation = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
      };

      $scope.$on('$destroy', function () {
        $scope.closeDP();
      });

      function onWindowClick() {
        $scope.$apply('closeDP()');
      }
    }
  };
}]));

/***/ }),

/***/ "./common/flex-forms/controls/ff-date.scss":
/*!*************************************************!*\
  !*** ./common/flex-forms/controls/ff-date.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/controls/ff-email.directive.js":
/*!**********************************************************!*\
  !*** ./common/flex-forms/controls/ff-email.directive.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffEmail directive - wrapper for standard input type="email"
 */
angular.module('flexForms.ffEmail', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffEmail', ["$compile", "$templateCache", "ffHelper", function ($compile, $templateCache, ffHelper) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffEmail'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {},
    link: function link($scope, $element, $attrs, $ctrls) {
      var ffControl = $ctrls.ffControl;
      var $input = angular.element($templateCache.get('ffEmail'));
      var $static = $compile($templateCache.get('ffTextStatic'))($scope);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($input);
      $compile($input)($scope);
      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.append($input);
      }

      function renderView() {
        $input.detach();
        $element.append($static);
      }

      function modelToStatic(model) {
        return model;
      }
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-icon.directive.js":
/*!*********************************************************!*\
  !*** ./common/flex-forms/controls/ff-icon.directive.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffIcon directive - wrapper for .fa, allows adding various icons to templates. Based on sense attribute.
 */
angular.module('flexForms.ffIcon', []).directive('ffIcon', function () {
  'use strict';

  var senseClass = {
    // sense -> class map
    checkInStatus: 'fa-check',
    checkOutStatus: 'fa-check',
    checkMark: 'fa-check',
    check: 'fa-check',
    plus: 'fa-plus',
    refresh: 'fa-refresh',
    increase: 'fa-caret-up',
    decrease: 'fa-caret-down',
    info: 'fa-info-circle',
    breadcrumb: 'fa-arrow-circle-right',
    error: 'fa-exclamation-triangle',
    warning: 'fa-exclamation-triangle',
    ignore: 'fa-minus-circle',
    header: 'fa-header',
    membership: 'fa-users',
    reservation: 'fa-calendar-o',
    billing: 'fa-usd',
    user: 'fa-user',
    navigate: 'fa-arrow-circle-right',
    accessCode: 'fa-tag',
    message: 'fa-comment',
    center: 'fa-home',
    facility: 'fa-home',
    cloud: 'fa-cloud',
    location: 'fa-map-marker',
    phone: 'fa-phone',
    email: 'fa-envelope',
    list: 'fa-list',
    sort: 'fa-sort',
    print: 'fa-print'
  };
  return {
    restrict: 'E',
    scope: false,
    link: function link($scope, $element, $attrs) {
      var sense = $scope.$eval($attrs.sense) || $attrs.sense;
      $element.addClass('ff-icon fa');
      $element.addClass('sense-' + sense);
      $element.addClass(senseClass[sense] || 'fa-bug');
    }
  };
});

/***/ }),

/***/ "./common/flex-forms/controls/ff-img.directive.js":
/*!********************************************************!*\
  !*** ./common/flex-forms/controls/ff-img.directive.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ff_img_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ff-img.scss */ "./common/flex-forms/controls/ff-img.scss");
/* harmony import */ var _ff_img_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ff_img_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * ffImg directive - wrapper for standard img element
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffImg', []).directive('ffImg', ["$compile", "$timeout", "ffHelper", function ($compile, $timeout, ffHelper) {
  // square transparent image 300x300 for correct img-placeholder aspect ratio
  var placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAQAAADTdEb+AAACHElEQVR42u3SMQ0AAAzDsJU/6aGo+tgQouSgIBJgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsjCUBxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFjsPeVaAS0/Qs6MAAAAAElFTkSuQmCC';
  return {
    restrict: 'E',
    scope: true,
    controller: function controller() {},
    bindToController: {
      ffImgLoaded: '=?',
      ffAlt: '@'
    },
    link: function link($scope, $element, $attrs, $ctrl) {
      $ctrl.ffImgLoaded = false;
      var $image = angular.element('<img>');
      ffHelper.copyInnerAttrs($element, $attrs, $image);
      $image.attr('ng-src-hq', null);
      $image.attr('alt', $ctrl.ffAlt);
      $element.empty().append($image);
      $compile($image)($scope);
      $attrs.$observe('ffSrc', function (val) {
        $element.toggleClass('ff-img-placeholder', !val);

        if ($attrs.imgPlaceholder && !val) {
          val = placeholder;
        }

        $image.attr('src', val);
        angular.element($element[0].querySelector('.img-hq')).remove();
        $ctrl.ffImgLoaded = false;
        $image.one('load', function () {
          return $scope.$apply(function () {
            $ctrl.ffImgLoaded = true;
            $element.removeClass('ff-img-error');
          });
        });
        $image.one('error', function () {
          return $scope.$apply(function () {
            $element.addClass('ff-img-error');

            if ($attrs.imgPlaceholder) {
              $image.attr('src', placeholder);
              $element.addClass('ff-img-placeholder');
            }
          });
        });
      });
      $attrs.$observe('ffSrcHq', function (ffSrcHq) {
        if (!ffSrcHq) return;
        $image[0].onload = loadHqImage;
        $image[0].onerror = loadHqImage;

        function loadHqImage() {
          var $hq = angular.element($element[0].querySelector('.img-hq') || '<img class="img-hq img-hq-loading">');
          ffHelper.copyInnerAttrs($element, $attrs, $hq);
          $hq.attr('src', ffSrcHq);
          $hq.attr('ng-src-hq', null);
          $hq.attr('ng-src', null);
          $hq.attr('alt', $image.attr('alt'));
          $element.append($hq);
          $compile($hq)($scope);

          $hq[0].onload = function () {
            $timeout(function () {
              return $hq.removeClass('img-hq-loading');
            });
          };

          $hq[0].onerror = function () {
            return $hq.remove();
          };
        }
      });
    }
  };
}]));

/***/ }),

/***/ "./common/flex-forms/controls/ff-img.scss":
/*!************************************************!*\
  !*** ./common/flex-forms/controls/ff-img.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/controls/ff-info.directive.js":
/*!*********************************************************!*\
  !*** ./common/flex-forms/controls/ff-info.directive.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ff_info_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ff-info.scss */ "./common/flex-forms/controls/ff-info.scss");
/* harmony import */ var _ff_info_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ff_info_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * ffInfo directive - static text info block, just wrapper similar to div, but with special CSS styles, like padding and color
 */

angular.module('flexForms.ffInfo', []).directive('ffInfo', function () {
  'use strict';

  return {
    restrict: 'E'
  };
});

/***/ }),

/***/ "./common/flex-forms/controls/ff-info.scss":
/*!*************************************************!*\
  !*** ./common/flex-forms/controls/ff-info.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/controls/ff-label.directive.js":
/*!**********************************************************!*\
  !*** ./common/flex-forms/controls/ff-label.directive.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ff_label_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ff-label.scss */ "./common/flex-forms/controls/ff-label.scss");
/* harmony import */ var _ff_label_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ff_label_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * ffLabel directive - labels for ff-controls.
 */

angular.module('flexForms.ffLabel', []).directive('ffLabel', ["ffHelper", function (ffHelper) {
  return {
    restrict: 'E',
    compile: function compile(tElement, tAttrs) {
      if (angular.isDefined(tAttrs.ffTransclude)) {
        tElement.html('<span class="ff-label" ng-transclude="' + tAttrs.ffTransclude + '"></span>');
        tAttrs.$set('ffTransclude', null);
      } else if (tAttrs.ffBindHtml) {
        tElement.html('<span class="ff-label" ng-bind-html="' + tAttrs.ffBindHtml + '"></span>');
      } else {
        tElement.html('<span class="ff-label">' + tElement.html() + '</span>');
      }

      return function link($scope, $element, $attrs) {
        $attrs.$observe('ffRequired', function (val) {
          $element.toggleClass('ff-required', val == 'true');
        });
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-label.scss":
/*!**************************************************!*\
  !*** ./common/flex-forms/controls/ff-label.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/controls/ff-login.directive.js":
/*!**********************************************************!*\
  !*** ./common/flex-forms/controls/ff-login.directive.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffLogin directive - wrapper for standard input type="text"
 */
angular.module('flexForms.ffLogin', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffLogin', ["$compile", "$templateCache", "ffHelper", function ($compile, $templateCache, ffHelper) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffLogin'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {},
    link: function link($scope, $element, $attrs, $ctrls) {
      var ffControl = $ctrls.ffControl;
      var $input = angular.element($templateCache.get('ffLogin'));
      var $static = $compile($templateCache.get('ffTextStatic'))($scope);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($input);
      $compile($input)($scope);
      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.append($input);
      }

      function renderView() {
        $input.detach();
        $element.append($static);
      }

      function modelToStatic(model) {
        return model;
      }
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-number.directive.js":
/*!***********************************************************!*\
  !*** ./common/flex-forms/controls/ff-number.directive.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);




/**
 * ffNumber directive - number input element. Allows integers/floats, negative values, short form of floats: -.5 .25 -,10 ,01
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffNumber', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffNumber', ["$compile", "$templateCache", "ffHelper", function ($compile, $templateCache, ffHelper) {
  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffNumber'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {},
    link: function link($scope, $element, $attrs, $ctrls) {
      var ffControl = $ctrls.ffControl;
      var $input = angular.element($templateCache.get('ffText'));
      var $static = $compile($templateCache.get('ffTextStatic'))($scope);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($input);
      $compile($input)($scope);
      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.append($input);
      }

      function renderView() {
        $input.detach();
        $element.append($static);
      }

      function modelToStatic(model) {
        return model;
      }
      /**
       * Parser which adds leading zeroes in model value to short floats .5 -.25 ,10 -,02
       */


      var ngModel = $input.controller('ngModel');
      ngModel.$parsers.push(function (value) {
        if (value) {
          var match = value.match(/^\s*-?(\d*)([,\.]?)\d+\s*$/i);

          if (match) {
            var integer = match[1];
            var delimiter = match[2];
            ngModel.$setValidity('number', true);

            if (delimiter) {
              // Check for integer part only if float number (0,5 -1.2 ,8 -.1)
              if (integer === '') {
                value = value.replace(delimiter, '0.'); // -.5 -> -0.5  -,8 -> -0.8  .1 -> 0.1  ,2 -> 0.2
              } else {
                value = delimiter === '.' ? value : value.replace(delimiter, '.'); // Replace delimiter from comma to dot
              }
            }
          } else {
            ngModel.$setValidity('number', false); // No match with pattern, invalid format
          }
        }

        var parsed = parseFloat(value);
        value = isNaN(parsed) ? null : parsed;
        return value; // Undefined/null value or no delimiter or no pattern match, return raw value
      });
    }
  };
}]));

/***/ }),

/***/ "./common/flex-forms/controls/ff-password.directive.js":
/*!*************************************************************!*\
  !*** ./common/flex-forms/controls/ff-password.directive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffPassword directive - wrapper for standard input type="password"
 */
angular.module('flexForms.ffPassword', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffPassword', ["$compile", "$templateCache", "ffHelper", function ($compile, $templateCache, ffHelper) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffPassword'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {},
    link: function link($scope, $element, $attrs, $ctrls) {
      var ffControl = $ctrls.ffControl;
      var $input = angular.element($templateCache.get('ffPassword'));
      var $static = $compile($templateCache.get('ffPasswordStatic'))($scope);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($input);
      $compile($input)($scope);
      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.append($input);
      }

      function renderView() {
        $input.detach();
        $element.append($static);
      }

      function modelToStatic(model) {
        // return model;
        return null;
      }
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-price.directive.js":
/*!**********************************************************!*\
  !*** ./common/flex-forms/controls/ff-price.directive.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);




/**
 * ffPrice directive - price input element. Allows integers/floats, negative values, short form of floats: -.5 .25 -,10 ,01
 */
angular.module('flexForms.ffPrice', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffPrice', ["$compile", "$templateCache", "ffHelper", function ($compile, $templateCache, ffHelper) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffPrice'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {},
    link: function link($scope, $element, $attrs, $ctrls) {
      var ffControl = $ctrls.ffControl;
      var $input = angular.element($templateCache.get('ffText'));
      var $static = $compile($templateCache.get('ffTextStatic'))($scope);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($input);
      $compile($input)($scope);
      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.append($input);
      }

      function renderView() {
        $input.detach();
        $element.append($static);
      }

      function modelToStatic(model) {
        return model;
      }
      /**
       * Parser which adds leading zeroes in model value to short floats .5 -.25 ,10 -,02
       */


      var ngModel = $input.controller('ngModel');
      ngModel.$parsers.push(function parser(value) {
        if (value) {
          var match = value.match(/^\s*-?(\d*)([,\.]?)\d+\s*$/i);

          if (match) {
            var integer = match[1];
            var delimiter = match[2];
            ngModel.$setValidity('price', true);

            if (delimiter) {
              // Check for integer part only if float number (0,5 -1.2 ,8 -.1)
              if (integer === '') {
                return value.replace(delimiter, '0.'); // -.5 -> -0.5  -,8 -> -0.8  .1 -> 0.1  ,2 -> 0.2
              } else {
                return delimiter === '.' ? value : value.replace(delimiter, '.'); // Replace delimiter from comma to dot
              }
            }
          } else {
            ngModel.$setValidity('price', false); // No match with pattern, invalid format
          }
        }

        return value; // Undefined/null value or no delimiter or no pattern match, return raw value
      });
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-radio.directive.js":
/*!**********************************************************!*\
  !*** ./common/flex-forms/controls/ff-radio.directive.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffRadio directive - wrapper for standard input type="radio"
 */
angular.module('flexForms.ffRadio', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffRadio', ["$compile", "$templateCache", "ffHelper", function ($compile, $templateCache, ffHelper) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffRadio'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {},
    link: function link($scope, $element, $attrs, $ctrls) {
      var ffControl = $ctrls.ffControl;
      var $input = angular.element($templateCache.get('ffRadio'));
      var $i = angular.element('<i></i>');
      var $static = $compile($templateCache.get('ffRadioStatic'))($scope);
      var $label = $attrs.ffLabel || $element.html();
      if ($label) $label = angular.element('<span class="cb-label"></span>').append($label);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($input).append($i);
      $compile($input)($scope);

      if ($label) {
        $element.append($label);
        $compile($label)($scope);
      }

      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.prepend($input);
      }

      function renderView() {
        $input.detach();
        $element.prepend($static);
      }

      function modelToStatic(model) {
        return $scope.$eval($attrs.ffValue) === model;
      }
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-read-only-ignore.directive.js":
/*!*********************************************************************!*\
  !*** ./common/flex-forms/controls/ff-read-only-ignore.directive.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Read/write zone within ffBulkReadOnly block
 */
angular.module('deskworks.ffReadOnlyIgnore', []).directive('ffReadOnlyIgnore', function () {
  'use strict';

  return {
    restrict: 'C',
    controller: function controller() {}
  };
});

/***/ }),

/***/ "./common/flex-forms/controls/ff-search.directive.js":
/*!***********************************************************!*\
  !*** ./common/flex-forms/controls/ff-search.directive.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ff_search_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ff-search.scss */ "./common/flex-forms/controls/ff-search.scss");
/* harmony import */ var _ff_search_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ff_search_scss__WEBPACK_IMPORTED_MODULE_4__);





/**
 * ffSearch directive - combined text/select input with remote search
 */

angular.module('flexForms.ffSearch', []).directive('ffSearch', ["$compile", "$timeout", "ffHelper", function ($compile, $timeout, ffHelper) {
  return {
    restrict: 'E',
    scope: true,
    priority: 20,
    terminal: true,
    controllerAs: 'ffSearch',
    controller: ["$scope", "$element", "$attrs", function controller($scope, $element, $attrs) {
      var ffSearch = this;
      var searchExp = $attrs.ffSearch;
      var filterExp = $attrs.ffSearchFilter;
      var changeExp = $attrs.ffChange;
      /**
       * Search method which calls searchExp and tracks returned promise
       */

      ffSearch.search = function (val) {
        ffSearch.curIdx = 0;
        ffSearch.resultsFiltered = filterExp ? $scope.$eval(filterExp, {
          $results: ffSearch.results,
          $search: ffSearch.val
        }) : ffSearch.results;
        ffSearch.matchActive = false;

        if (val && searchExp) {
          ffSearch.spin = true;
          $scope.$eval(searchExp, {
            $search: val
          }).then(function (result) {
            ffSearch.results = result;
            ffSearch.resultsFiltered = filterExp ? $scope.$eval(filterExp, {
              $results: ffSearch.results,
              $search: ffSearch.val
            }) : ffSearch.results;
            ffSearch.open = true;
          }).finally(function () {
            ffSearch.spin = false;
          });
        }
      };
      /**
       * ffSearchOption click handler, updates view/model value with selected option
       */


      ffSearch.select = function (option) {
        ffSearch.ngModel.$setViewValue(option);
        ffSearch.ngModel.$setTouched();
        if (changeExp) $scope.$eval(changeExp, {});
        $timeout(function () {
          ffSearch.open = false;
          ffSearch.matchActive = true;
          delete ffSearch.val;
        }, 310);
      };
      /**
       * Child input blur event handler
       */


      ffSearch.onBlur = function () {
        $timeout(function () {
          ffSearch.matchActive = false;
          ffSearch.open = false;
          delete ffSearch.val;
        }, 300);
      };
      /**
       * keydown handler, closes ffSearch on Esc
       */


      ffSearch.onKeydown = function ($event) {
        // Esc
        if ($event.keyCode === 27) {
          ffSearch.open = false;
        } else // Up
          if ($event.keyCode === 38 && ffSearch.curIdx > 0) {
            ffSearch.curIdx--;
            $scope.$broadcast('ffSearch:changeOption');
          } else // Down
            if ($event.keyCode === 40 && ffSearch.curIdx + 1 < ffSearch.resultsFiltered.length) {
              ffSearch.curIdx++;
              $scope.$broadcast('ffSearch:changeOption');
            } else // Enter
              if ($event.keyCode === 13 && ffSearch.open) {
                $event.preventDefault();
                $event.stopPropagation();
                ffSearch.select(ffSearch.resultsFiltered[ffSearch.curIdx]);
              }
      };
    }],
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('ffSpin', 'ffSearch.spin');
      var input = angular.element('<input type="text" ng-blur="ffSearch.onBlur()" ng-model="ffSearch.val" class="form-control ff-control ff-text">');
      input.attr('ng-change', 'ffSearch.search(ffSearch.val)');
      input.attr('ng-keydown', 'ffSearch.onKeydown($event)');
      input.attr('placeholder', tAttrs.placeholder);
      tAttrs.$set('placeholder', null);
      tElement.prepend(input);
      return function link($scope, $element, $attrs, ffSearch) {
        $compile($element, null, self.priority)($scope);
        ffSearch.ngModel = $element.controller('ngModel');
      };
    }
  };
}])
/**
 * ffSearchOptions directive - options dropdown for ffSearch directive
 */
.directive('ffSearchOptions', ["$compile", "$window", "ffHelper", function ($compile, $window, ffHelper) {
  return {
    restrict: 'E',
    require: '^ffSearch',
    priority: 20,
    terminal: true,
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('ngShow', 'ffSearch.open');
      var repeater = angular.element('<div class="ff-search-option" ng-repeat="$search in ffSearch.resultsFiltered" ng-click="ffSearch.select($search)"></div>');
      repeater.attr('ng-class', '{active: ffSearch.curIdx === $index}');
      repeater.append(tElement.html());
      tElement.empty().append(repeater);
      tElement.append('<ff-info class="ff-search-empty" ng-hide="ffSearch.resultsFiltered.length">search result is empty</ff-info>');
      return function link($scope, $element, $attrs, ffSearch) {
        $compile($element, null, self.priority)($scope); // When ffSearchOptions is open, check if they fit to the bottom of screen, otherwise, display them above the element

        $scope.$watch('ffSearch.open', function (val) {
          if (val) {
            var rect = $element[0].getBoundingClientRect();
            $element.toggleClass('ffso-above', rect.bottom > $window.innerHeight && rect.top - rect.height - 30 > 0);
          }
        }); // Scroll ffSearchOptions to top on filtering search results

        $scope.$watchCollection('ffSearch.resultsFiltered', function (val) {
          $element[0].scrollTop = 0;
        }); // Listen to change option event from ffSearch and scroll container to always display active item

        $scope.$on('ffSearch:changeOption', function () {
          var opt = $element[0].querySelectorAll('.ff-search-option')[ffSearch.curIdx];
          var optBottom = opt.offsetTop + opt.offsetHeight;
          var elBottom = $element[0].scrollTop + $element[0].clientHeight;

          if (optBottom > elBottom) {
            // option bottom is out of bottom of container
            $element[0].scrollTop += optBottom - elBottom;
          } else if (opt.offsetTop < $element[0].scrollTop) {
            // option top is out of top of container
            $element[0].scrollTop -= $element[0].scrollTop - opt.offsetTop;
          }
        });
      };
    }
  };
}])
/**
 * ffSearchMatch directive - selected option template
 */
.directive('ffSearchMatch', ["$compile", "ffHelper", function ($compile, ffHelper) {
  return {
    restrict: 'E',
    require: '^ffSearch',
    priority: 20,
    terminal: true,
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('ngShow', 'ffSearch.ngModel.$modelValue');
      tAttrs.$set('ngClass', '{active: ffSearch.matchActive}');
      return function link($scope, $element, $attrs) {
        $compile($element, null, self.priority)($scope);
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-search.scss":
/*!***************************************************!*\
  !*** ./common/flex-forms/controls/ff-search.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/controls/ff-select.directive.js":
/*!***********************************************************!*\
  !*** ./common/flex-forms/controls/ff-select.directive.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);






/**
 * ffSelect directive - wrapper for standard select tag
 */
angular.module('flexForms.ffSelect', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffSelect', ["$compile", "$templateCache", "$timeout", "ffHelper", "helper", function ($compile, $templateCache, $timeout, ffHelper, helper) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffSelect'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {},
    compile: function compile(tElement, tAttrs) {
      var innerHtml = tElement.html();
      tElement.empty();
      return function link($scope, $element, $attrs, $ctrls) {
        var $input = angular.element($templateCache.get('ffSelect'));
        var $static = $compile($templateCache.get('ffTextStatic'))($scope);
        $input.append(innerHtml);
        ffHelper.copyInnerAttrs($element, $attrs, $input);
        $element.empty().append($input);
        $compile($input)($scope);
        var ffControl = $ctrls.ffControl;
        ffControl.init({
          renderEdit: renderEdit,
          renderView: renderView,
          modelToStatic: modelToStatic
        });

        function renderEdit() {
          $static.detach();
          $element.append($input);
        }

        function renderView() {
          $input.detach();
          $element.append($static);
        }

        function modelToStatic(model) {
          if ($attrs.ffOptions) {
            var id = $attrs.ffOptions.match(/\S+(?=\s+as\s+)/i);
            var name = $attrs.ffOptions.match(/\S+(?=\s+for\s+)/i);
            var array = $attrs.ffOptions.match(/in\s+(\S+)/i);

            if (id && id.length) {
              id = id[0].split('.');
              id = id[id.length - 1];
            }

            if (name && name.length) {
              name = name[0].split('.');
              name = name[name.length - 1];
            }

            if (array && array.length) {
              array = array[1];
            }

            if (name && array) {
              id = id || 'id';
              name = name || 'id';
              array = $scope.$eval(array) || [];
              var obj = helper.findByKeyValue(array, id, angular.isObject(model) ? model[id] : model);
              if (obj) return obj[name];
            }
          }

          var opts = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(Array.prototype).call($input[0].querySelectorAll('option'));

          if (opts.length) {
            var needle = model;
            if (angular.isUndefined(model) || model === null) needle = '';
            if (typeof model === 'boolean') needle = '' + needle;
            var el = helper.findByKeyValue(opts, 'value', needle);
            if (el) return el.innerHTML;
          }

          return model;
        }

        if (!$attrs.ffOptions && !ffControl.ffReadOnlyIgnore) {
          $scope.$watchCollection(function () {
            var _context;

            return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(Array.prototype).call($input[0].querySelectorAll('option'))).call(_context, function (opt) {
              return opt.value;
            });
          }, ffControl.updateStatic);
        }

        if ($attrs.ffOptions && !ffControl.ffReadOnlyIgnore) {
          var array = $attrs.ffOptions.match(/in\s+(\S+)/i);

          if (array && array.length) {
            array = array[1];
          }

          $scope.$watchCollection(array, ffControl.updateStatic);
        }
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-static.directive.js":
/*!***********************************************************!*\
  !*** ./common/flex-forms/controls/ff-static.directive.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffStatic directive - static text control which behaves like ff-text, but non-editable.
 */
angular.module('flexForms.ffStatic', ['deskworks.ffControlController']).directive('ffStatic', ["$compile", "$templateCache", "ffHelper", "ffControlCompileTemplates", function ($compile, $templateCache, ffHelper, ffControlCompileTemplates) {
  'use strict';

  return {
    restrict: 'E',
    compile: function compile(tElement, tAttrs) {
      var innerHtml = tElement.html();
      tElement.empty();
      return function link($scope, $element, $attrs, $ctrls) {
        var $static = angular.element($templateCache.get('ffStatic'));
        $static.append(innerHtml);
        ffHelper.copyInnerAttrs($element, $attrs, $static);
        $element.empty().append($static);
        $compile($static)($scope);
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-text.directive.js":
/*!*********************************************************!*\
  !*** ./common/flex-forms/controls/ff-text.directive.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffText directive - wrapper for standard input type="text"
 */
angular.module('flexForms.ffText', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffText', ["$compile", "$templateCache", "ffHelper", function ($compile, $templateCache, ffHelper) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffText'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {
      staticUrl: '<?ffStaticUrl'
    },
    link: function link($scope, $element, $attrs, $ctrls) {
      var ffControl = $ctrls.ffControl;
      var $input = angular.element($templateCache.get('ffText'));
      var $static = $compile($templateCache.get($attrs.ffStaticUrl ? 'ffTextStaticUrl' : 'ffTextStatic'))($scope);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($input);
      $compile($input)($scope);
      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.append($input);
      }

      function renderView() {
        $input.detach();
        $element.append($static);
      }

      function modelToStatic(model) {
        return model;
      }
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-textarea.directive.js":
/*!*************************************************************!*\
  !*** ./common/flex-forms/controls/ff-textarea.directive.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ff_textarea_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ff-textarea.scss */ "./common/flex-forms/controls/ff-textarea.scss");
/* harmony import */ var _ff_textarea_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ff_textarea_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * ffTextarea directive is a wrapper for standard textarea tag, adds some styling.
 */

angular.module('flexForms.ffTextarea', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffTextarea', ["$compile", "$templateCache", "ffHelper", function ($compile, $templateCache, ffHelper) {
  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffTextarea'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {},
    link: function link($scope, $element, $attrs, $ctrls) {
      var ffControl = $ctrls.ffControl;
      var $input = angular.element($templateCache.get('ffTextarea'));
      var $static = $compile($templateCache.get('ffTextStatic'))($scope);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($input);
      $compile($input)($scope);
      var rowspan = $scope.$eval($attrs.rowspan);

      if (rowspan) {
        $element.css('min-height', 2.4 * rowspan + 'rem'); // 2.4rem = $ff-control-min-height
      }

      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.append($input);
      }

      function renderView() {
        $input.detach();
        $element.append($static);
      }

      function modelToStatic(model) {
        return model;
      }
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-textarea.scss":
/*!*****************************************************!*\
  !*** ./common/flex-forms/controls/ff-textarea.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/controls/ff-time.directive.js":
/*!*********************************************************!*\
  !*** ./common/flex-forms/controls/ff-time.directive.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);





/**
 * ffTime directive - wrapper for standard input type="time"
 */
angular.module('flexForms.ffTime', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffTime', ["$compile", "$templateCache", "$locale", "$filter", "ffHelper", function ($compile, $templateCache, $locale, $filter, ffHelper) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffTime'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {},
    link: function link($scope, $element, $attrs, $ctrls) {
      var $input = angular.element($templateCache.get('ffTime'));
      var $static = $compile($templateCache.get('ffTimeStatic'))($scope);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($input);
      $compile($input)($scope);
      var ffControl = $ctrls.ffControl;
      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.append($input);
      }

      function renderView() {
        $input.detach();
        $element.append($static);
      }

      function modelToStatic(model) {
        return model;
      }
      /**
       * onFocus - selects entire content
       */


      $scope.onFocus = function () {
        if ($input[0].select) return $input[0].select();
        if ($input[0].setSelectionRange) return $input[0].setSelectionRange(0, 999);
      };

      var $model = $input.controller('ngModel');
      /**
       * Formatter
       */

      $model.$formatters.push(function formatter(value) {
        return $filter('date')(value, 'shortTime');
      });
      /**
       * Parser
       */

      $model.$parsers.unshift(function parser(value) {
        if (!value) return value;
        var match;
        var hours, mins; // 12-hours format

        var ampms = $locale.DATETIME_FORMATS.AMPMS;
        match = value.match(new RegExp('^\\s*([01]?\\d):([0-5]\\d)\\s+(am|pm|' + ampms.join('|').replace(/\./g, '\\.') + ')\\s*$', 'i'));

        if (match) {
          hours = parseInt(match[1]);
          mins = parseInt(match[2]);
          match[3] = match[3].toLowerCase();
          if (hours > 12 || hours === 0) hours = undefined;
          if ((match[3] === 'pm' || match[3] === ampms[1].toLowerCase()) && hours < 12) hours += 12;
          if ((match[3] === 'am' || match[3] === ampms[0].toLowerCase()) && hours === 12) hours -= 12;
        } else {
          // 24-hours format
          match = value.match(/^\s*([012]?\d):([0-5]\d)\s*$/i);

          if (match) {
            hours = parseInt(match[1]);
            mins = parseInt(match[2]);

            if (hours > 24 || hours === 24 && mins !== 0) {
              // allow 24:00
              hours = undefined;
            }
          }
        } // Validate minutes


        if (mins > 59) mins = undefined; // One of patterns matched

        if (angular.isDefined(hours) && angular.isDefined(mins)) return moment({
          hour: hours,
          minute: mins
        });
      });
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/controls/ff-url.directive.js":
/*!********************************************************!*\
  !*** ./common/flex-forms/controls/ff-url.directive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffUrl directive - wrapper for standard input type="text" with URL validation
 */
angular.module('flexForms.ffUrl', ['deskworks.ffControlController', 'deskworks.ffReadOnlyIgnore']).directive('ffUrl', ["$compile", "$templateCache", "ffHelper", function ($compile, $templateCache, ffHelper) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    require: {
      ffBulkReadOnly: '^?ffBulkReadOnly',
      ffReadOnlyIgnore: '^?ffReadOnlyIgnore',
      ffBlock: '^^?ffBlock',
      ffControl: 'ffUrl'
    },
    controller: 'ffControlController as ffControl',
    bindToController: {
      staticUrl: '<ffModel'
    },
    link: function link($scope, $element, $attrs, $ctrls) {
      var ffControl = $ctrls.ffControl;
      var $input = angular.element($templateCache.get('ffText'));
      var $static = $compile($templateCache.get('ffTextStaticUrl'))($scope);
      ffHelper.copyInnerAttrs($element, $attrs, $input);
      $element.empty().append($input);
      $compile($input)($scope);
      ffControl.init({
        renderEdit: renderEdit,
        renderView: renderView,
        modelToStatic: modelToStatic
      });

      function renderEdit() {
        $static.detach();
        $element.append($input);
      }

      function renderView() {
        $input.detach();
        $element.append($static);
      }

      function modelToStatic(model) {
        return model;
      }

      var $model = $input.controller('ngModel');

      $model.$validators.url = function url(modelValue, viewValue) {
        return viewValue ? /^http(s)?:\/\/\w+/.test(viewValue) : true;
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/ff-datepicker/ff-datepicker-popup.directive.js":
/*!**************************************************************************!*\
  !*** ./common/flex-forms/ff-datepicker/ff-datepicker-popup.directive.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffDatepickerPopup directive - popup wrapper for ffDatepicker with lazy rendering.
 * Opens datepicker on click of parent element, closes on window click or date selection
 */
angular.module('flexForms.ffDatepickerPopup', ['flexForms.ffDatepicker']).directive('ffDatepickerPopup', ["$compile", "$window", "$timeout", function ($compile, $window, $timeout) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    compile: function compile(tElement, tAttrs) {
      tElement.addClass('ff-datepicker-popup');
      return function link($scope, $element, $attrs) {
        /**
         * Parent element click handler, opens datepicker
         */
        $element.parent().on('click', function (event) {
          $scope.openDP(event);
          $scope.$apply();
        });
        /**
         * Close Datepicker handler
         */

        $scope.closeDP = function () {
          var dp = angular.element(document.getElementById('ff-dp-popup'));
          dp.remove(dp);
          $window.removeEventListener('click', onWindowClick);
          angular.element(document.querySelector('main')).css('padding-bottom', '');
        };
        /**
         * Open Datepicker handler
         */


        $scope.openDP = function ($event) {
          if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
          }

          $scope.closeDP();
          $window.addEventListener('click', onWindowClick);
          var dp = angular.element('<ff-datepicker id="ff-dp-popup" tabindex="0" ng-click="$event.stopPropagation()"></ff-datepicker>');
          dp.attr('ff-model', tAttrs.ffModel);
          dp.attr('date-max', tAttrs.dateMax);
          dp = $compile(dp)($scope);
          $element.append(dp);
          dp[0].focus();
          $timeout(function () {
            dp[0].querySelector('.ff-dp-cal-body').addEventListener('click', function () {
              $scope.$apply('closeDP()'); // close datepicker on date selection
            }); // Extend height of main element if datepicker overflows it

            var main = document.querySelector('main');
            var paddingBottom = parseInt($window.getComputedStyle(main).paddingBottom);
            angular.element(main).css('padding-bottom', paddingBottom + main.scrollHeight - main.clientHeight + 50 + 'px');
          });
        };

        $scope.$on('$destroy', function () {
          $element.parent().off('click');
          $scope.closeDP();
        });
        /**
         * Global window click handler, closes datepicker
         */

        function onWindowClick() {
          $scope.$apply('closeDP()');
        }
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/ff-datepicker/ff-datepicker.directive.js":
/*!********************************************************************!*\
  !*** ./common/flex-forms/ff-datepicker/ff-datepicker.directive.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "../node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);



/**
 * ffDatepicker directive - FlexForms datepicker element (not popup)
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffDatepicker', []).directive('ffDatepicker', ["$translate", function ($translate) {
  return {
    restrict: 'EAC',
    scope: true,
    templateUrl: 'flex-forms/ff-datepicker/ff-datepicker.tpl.html',
    controller: 'ffDatepickerCtrl as $ctrl',
    bindToController: {
      ffModel: '=',
      dateMin: '<?',
      dateMax: '<?',
      dateDisabled: '&',
      monthly: '<?'
    },
    compile: function compile(tElement, tAttrs) {
      tElement.addClass('ff-datepicker');
      tElement.attr('role', 'article');
      tElement.attr('aria-label', $translate.instant('GLOBAL.DATEPICKER'));
      return function link($scope, $element, $attrs, $ctrl) {};
    }
  };
}]).controller('ffDatepickerCtrl', ["$scope", "$filter", "$locale", function ($scope, $filter, $locale) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $ctrl.today = moment();
    $ctrl.weekDays = $locale.DATETIME_FORMATS.SHORTDAY;
    $ctrl.date = moment.isMoment($ctrl.ffModel) ? $ctrl.ffModel.clone() : moment();
    $ctrl.date.date(1);
    generateDays($ctrl.date);
    if ($ctrl.monthly) $ctrl.months = generateMonths();
    /**
     * Watch for $scope.date (current date) and generate days for calendar grid
     * depending on current month if the current month is being changed
     */

    $scope.$watch('$ctrl.date', function (newDate, oldDate) {
      if (moment.isMoment(newDate)) {
        if (!moment.isMoment(oldDate) || newDate.month() !== oldDate.month() || newDate.year() !== oldDate.year()) {
          generateDays($ctrl.date);
          if ($ctrl.monthly) $ctrl.months = generateMonths();
        }
      }
    }, true);
  };
  /**
   * Checks if passed date is disabled or outside min/max limit
   */


  $ctrl.checkDateDisabled = function (date) {
    return date < $ctrl.dateMin || date > $ctrl.dateMax || $ctrl.dateDisabled({
      $date: date
    });
  };
  /**
   * Switch to previous month
   */


  $ctrl.prevMonth = function () {
    if ($ctrl.monthly) {
      $ctrl.date.subtract(1, 'Y');
    } else {
      $ctrl.date.subtract(1, 'M');
    }
  };
  /**
   * Switch to next month
   */


  $ctrl.nextMonth = function () {
    if ($ctrl.monthly) {
      $ctrl.date.add(1, 'Y');
    } else {
      $ctrl.date.add(1, 'M');
    }
  };
  /**
   * Compares two dates with ignoring time (while date1 === date2 compares with time)
   */


  $ctrl.compareDates = function (date1, date2) {
    return moment.isMoment(date1) && moment.isMoment(date2) && date1.year() === date2.year() && date1.month() === date2.month() && (date1.date() === date2.date() || $ctrl.monthly);
  };
  /**
   * Selects current calendar date. Calendar day button click handler.
   */


  $ctrl.selectDay = function (day) {
    $ctrl.ffModel = day.date.clone();
    $ctrl.date = day.date.clone();
  };
  /**
   * Selects current calendar date. Calendar day button click handler.
   */


  $ctrl.selectYear = function (year) {
    $ctrl.date.year(year);
  };
  /**
   * Generates calendar grid data ($ctrl.days, $ctrl.prevMonthDays, $ctrl.nextMonthDays) for current month of date argument
   * @param date - date to get current month from
   */


  function generateDays(date) {
    var firstDay = moment([date.year(), date.month(), 1]);
    var lastDay = firstDay.clone().endOf('month'); // Generate current month days

    $ctrl.days = [];

    for (var i = 1, last = lastDay.date(); i <= last; i++) {
      $ctrl.days.push({
        str: i,
        date: moment([firstDay.year(), firstDay.month(), i])
      });
    } // Generate prev month days


    $ctrl.prevMonthDays = [];
    last = moment([date.year(), date.month(), 1]).subtract(1, 'M').endOf('month').date();
    i = last - (firstDay.day() - 1);
    if (last - i < 0) i = last - 6; // if prev month is empty, add one week

    var first = firstDay.clone().subtract(1, 'M');

    for (; i <= last; i++) {
      $ctrl.prevMonthDays.push({
        str: i,
        date: moment([first.year(), first.month(), i])
      });
    } // Generate next month days


    $ctrl.nextMonthDays = [];
    last = 6 - lastDay.day();

    if ($ctrl.days.length + $ctrl.prevMonthDays.length + last < 42) {
      last += 7; // if number of rows is less than 6, add one week
    }

    for (i = 1; i <= last; i++) {
      $ctrl.nextMonthDays.push({
        str: i,
        date: moment([firstDay.year(), firstDay.month(), i]).add(1, 'M')
      });
    } // Generate years


    last = date.year();
    $ctrl.years = [];

    for (i = 0; i < 5; i++) {
      $ctrl.years.push(i - 2 + last);
    }
  }

  function generateMonths() {
    var _context;

    var arr = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context = Array.apply(null, Array(12))).call(_context, Number.prototype.valueOf, 0);

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(arr).call(arr, function (val, idx) {
      return {
        date: $ctrl.date.clone().month(idx).date(1)
      };
    });
  }
}]));

/***/ }),

/***/ "./common/flex-forms/ff-datepicker/ff-datepicker.tpl.html":
/*!****************************************************************!*\
  !*** ./common/flex-forms/ff-datepicker/ff-datepicker.tpl.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"ff-dp-cal-header\"> <button type=\"button\" ng-click=\"$ctrl.prevMonth()\" title=\"{{'GLOBAL.PREV_MONTH' | translate}}\"><b class=\"fa fa-chevron-left\"></b></button> <div> <button type=\"button\" ng-click=\"$ctrl.showYears = !$ctrl.showYears\"> <span ng-bind=\"$ctrl.date | date: 'LLLL'\" ng-if=\"!$ctrl.monthly\"></span> {{$ctrl.date | date: 'yyyy'}} <span class=\"fa fa-caret-down\"></span> </button> </div> <button type=\"button\" ng-click=\"$ctrl.nextMonth()\" title=\"{{'GLOBAL.NEXT_MONTH' | translate}}\"><b class=\"fa fa-chevron-right\"></b></button> </div> <div class=\"ff-dp-years animate-collapse\" ng-if=\"$ctrl.showYears\"> <button type=\"button\" class=\"ff-dp-year\" ng-class=\"{ current: year === $ctrl.date.year() }\" ng-click=\"$ctrl.selectYear(year)\" ng-repeat=\"year in $ctrl.years\" ng-disabled=\"year < $ctrl.dateMin.year() || year > $ctrl.dateMax.year()\">{{year}}</button> </div> <div class=\"ff-dp-cal-week\" ng-if=\"!$ctrl.monthly\"> <div ng-repeat=\"weekDay in $ctrl.weekDays\">{{weekDay}}</div> </div> <div class=\"ff-dp-cal-body\" ng-if=\"!$ctrl.monthly\"> <button ng-repeat=\"day in $ctrl.prevMonthDays\" type=\"button\" class=\"ff-dp-day dimmed\" ng-click=\"$ctrl.selectDay(day)\" ng-disabled=\"$ctrl.checkDateDisabled(day.date)\" aria-label=\"{{::day.date | date}}\"> {{::day.str}} </button> <button ng-repeat=\"day in $ctrl.days\" type=\"button\" class=\"ff-dp-day\" ng-click=\"$ctrl.selectDay(day)\" ng-disabled=\"$ctrl.checkDateDisabled(day.date)\" ng-class=\"{ current: $ctrl.compareDates(day.date, $ctrl.ffModel), today: $ctrl.compareDates(day.date, $ctrl.today) }\" aria-label=\"{{::day.date | date}}\"> {{::day.str}} </button> <button ng-repeat=\"day in $ctrl.nextMonthDays\" type=\"button\" class=\"ff-dp-day dimmed\" ng-click=\"$ctrl.selectDay(day)\" ng-disabled=\"$ctrl.checkDateDisabled(day.date)\" aria-label=\"{{::day.date | date}}\"> {{::day.str}} </button> </div> <div class=\"ff-dp-cal-body ff-dp-monthly\" ng-if=\"$ctrl.monthly\"> <button ng-repeat=\"month in $ctrl.months\" type=\"button\" class=\"ff-dp-day\" ng-click=\"$ctrl.selectDay(month)\" ng-disabled=\"$ctrl.checkDateDisabled(month.date)\" ng-class=\"{ current: $ctrl.compareDates(month.date, $ctrl.ffModel), today: $ctrl.compareDates(month.date, $ctrl.today) }\"> {{::month.date | date:'MMM'}} </button> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/flex-forms/ff-include-all/ff-include-all.directive.js":
/*!**********************************************************************!*\
  !*** ./common/flex-forms/ff-include-all/ff-include-all.directive.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * ffIncludeAll directive - 'Include All' checkbox with embedded select/deselect all items behavior
 */
angular.module('flexForms.ffIncludeAll', []).directive('ffIncludeAll', function () {
  'use strict';

  var template = '<ff-checkbox class="ff-center ff-include-all" ff-model="inc.all" ff-click="inc.selectAll()"' + ' ff-disabled="!inc.items || !inc.items.length" title="Include All" flex="1 1 auto">{{\'GLOBAL.INCLUDE_ALL\' | translate}}</ff-checkbox>';
  return {
    restrict: 'E',
    scope: true,
    template: template,
    controller: 'IncludeAllCtrl as inc',
    bindToController: {
      items: '<',
      default: '<'
    }
  };
}).controller('IncludeAllCtrl', ["$scope", "$timeout", function ($scope, $timeout) {
  'use strict';

  var inc = this;
  /**
   * Include All checkbox handler
   */

  function selectAll() {
    angular.forEach(inc.items, function (item) {
      item.include = inc.all;
    });
  }

  inc.selectAll = function () {
    return $timeout(selectAll);
  };

  var unwatch = $scope.$watchCollection('inc.items', function (newVal) {
    if (newVal) {
      inc.all = !!inc.default;
      selectAll();
      unwatch();
    }
  });
  /**
   * Watch for items include status and update Include All checkbox status
   */

  $scope.$watchCollection(function () {
    var _context;

    return inc.items && _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = inc.items).call(_context, function (item) {
      return item.include;
    });
  }, function () {
    inc.all = inc.items && inc.items.length && inc.items.every(function (item) {
      return !!item.include;
    }) || false;
  });
}]);

/***/ }),

/***/ "./common/flex-forms/ff-pagination/ff-pagination.directive.js":
/*!********************************************************************!*\
  !*** ./common/flex-forms/ff-pagination/ff-pagination.directive.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ff_pagination_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ff-pagination.scss */ "./common/flex-forms/ff-pagination/ff-pagination.scss");
/* harmony import */ var _ff_pagination_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ff_pagination_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * ffPagination directive - FlexForms pagination directive
 */

angular.module('flexForms.ffPagination', []).directive('ffPagination', function () {
  'use strict';

  return {
    restrict: 'E',
    scope: {
      props: '=',
      ffClick: '&'
    },
    template: '<span ng-repeat="p in range(props.pageCount) track by $index" ff-spin="spin == $index + 1"' + ' ng-class="{ active: ($index + 1) == props.page }" ng-click="page($index + 1)">{{$index + 1}}</span>',
    link: function link($scope) {
      $scope.range = function (size) {
        return new Array(size);
      };

      $scope.page = function (page) {
        if (!$scope.spin && page != $scope.props.page) {
          $scope.spin = page;
          $scope.ffClick({
            $page: page
          }).finally(function () {
            $scope.spin = 0;
          });
        }
      };
    }
  };
});

/***/ }),

/***/ "./common/flex-forms/ff-pagination/ff-pagination.scss":
/*!************************************************************!*\
  !*** ./common/flex-forms/ff-pagination/ff-pagination.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/ff-panel/ff-panel-header.directive.js":
/*!*****************************************************************!*\
  !*** ./common/flex-forms/ff-panel/ff-panel-header.directive.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * ffPanelHeader directive transcludes to ffPanel header
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffPanelHeader', []).directive('ffPanelHeader', ["helper", function (helper) {
  return {
    restrict: 'E',
    transclude: 'element',
    link: function link($scope, $element, $attrs, $ctrl, $transclude) {
      $transclude(function (clone) {
        var panel = helper.findParentElement($element, function (e) {
          return e.hasClass('ff-panel');
        });
        if (panel) panel.prepend(clone.addClass('ff-panel-header').attr('role', 'heading').attr('aria-level', '2'));
      });
    }
  };
}]).directive('ffHeader', ["helper", function (helper) {
  return {
    restrict: 'EC',
    compile: function compile(tElement) {
      tElement.attr('role', 'heading').attr('aria-level', '2');
      return function () {};
    }
  };
}]));

/***/ }),

/***/ "./common/flex-forms/ff-panel/ff-panel.directive.js":
/*!**********************************************************!*\
  !*** ./common/flex-forms/ff-panel/ff-panel.directive.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_uids_cuid_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/uids/cuid.service */ "./shared/uids/cuid.service.js");

/**
 * ffPanel directive - replacement for flexForm directive.
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffPanel', [shared_uids_cuid_service__WEBPACK_IMPORTED_MODULE_0__["default"].name, 'flexForms.ffPanelHeader']).directive('ffPanel', ["cuid", function (cuid) {
  return {
    restrict: 'EAC',
    compile: function compile(tElement) {
      var tpl = '<div class="ff-panel-body">' + tElement.html() + '</div>';
      tElement.addClass('ff-panel');
      tElement.html(tpl);
      return function link($scope, $element) {
        if (!$element.attr('aria-label') && !$element.attr('aria-labelledby')) {
          var header = $element[0].querySelector('ff-panel-header') || $element[0].querySelector('ff-header');

          if (header) {
            var label = header.querySelector('[translate]') || header;
            if (!label.id) label.id = cuid();
            $element.attr('aria-labelledby', label.id);
            $element.attr('role', 'article');
          }
        }
      };
    }
  };
}]));

/***/ }),

/***/ "./common/flex-forms/ff-row.directive.js":
/*!***********************************************!*\
  !*** ./common/flex-forms/ff-row.directive.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffRow directive is a one-line container (display:flex) for any child items
 */
angular.module('flexForms.ffRow', []).directive('ffRow', function () {
  return {
    restrict: 'E',
    scope: true,
    compile: function compile(tElement, tAttrs) {
      tElement.addClass('ff-row');
      return this.link;
    },
    link: function link($scope, $element, $attrs) {
      if ($attrs.ffClick) {
        // If ffClick is passed, add click handler to child ff-static directives
        angular.element($element[0].getElementsByTagName('ff-static')).on('click', function () {
          $scope.$apply($attrs.ffClick);
        });
      }
    }
  };
});

/***/ }),

/***/ "./common/flex-forms/ff-section/ff-block.directive.js":
/*!************************************************************!*\
  !*** ./common/flex-forms/ff-section/ff-block.directive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffBlock directive - repeatable container within ffSection directive
 */
angular.module('flexForms.ffBlock', ['flexForms.ffBtnBlockEdit', 'flexForms.ffBtnBlockDelete', 'flexForms.ffBtnBlockSave', 'flexForms.ffBtnBlockCancel']).directive('ffBlock', ["$compile", function ($compile) {
  'use strict';

  return {
    restrict: 'A',
    scope: true,
    priority: 30,
    terminal: true,
    controllerAs: 'ffBlock',
    require: {
      ffBulkReadOnly: '^^?ffBulkReadOnly'
    },
    bindToController: {
      /* require doesn't bind dependencies to controller without it */
    },
    controller: ["$scope", function controller($scope) {
      var ffBlock = this;
      /**
       * Delete Block Handler. Runs delete expression which returns promise and then deletes block from section.
       */

      ffBlock.delete = function () {
        return $scope.$eval($scope.deleteExp).then(function (result) {
          if ($scope.ffSection) $scope.ffSection.deleteBlock($scope.$index);
          return result;
        });
      };

      $scope.$on('ffBlock::EditStart', function () {
        $scope.ffBlock.editMode = true;

        if ($scope.editExp) {
          $scope.$eval($scope.editExp + '=true');
        }
      });
      $scope.$on('ffBlock::EditEnd', function () {
        $scope.ffBlock.editMode = false;

        if ($scope.editExp) {
          $scope.$eval($scope.editExp + '=false');
        }
      });
      /**
       * Edit Block handler. Starts editing block.
       */

      ffBlock.edit = function () {
        $scope.ffBlockForm.$setPristine();
        $scope.$emit('ffBlock::EditStart');
      };
      /**
       * Save Block Edit handler. Resets ffBlockNew flag after saving.
       */


      ffBlock.save = function () {
        return $scope.$eval($scope.saveExp).then(function (result) {
          $scope.$emit('ffBlock::EditEnd');
          return result;
        });
      };
      /**
       * Cancel Block Edit handler. Simply deletes new blocks and cancels existing blocks.
       */


      ffBlock.cancel = function () {
        if ($scope.$eval($scope.isNewExp) && $scope.ffSection) {
          $scope.ffSection.deleteBlock($scope.$index);
        } else {
          $scope.$broadcast('ffControl::EditCancel');
          $scope.$emit('ffBlock::EditCancel');
        }

        $scope.$emit('ffBlock::EditEnd');
      };
    }],
    compile: function compile(tElement, tAttrs) {
      var self = this; // Wrap contents into form to allow submitting block by enter

      var form = angular.element('<form name="ffBlockForm"></form>');
      form.append(tElement.contents());
      tElement.empty().append(form);
      return function link($scope, $element, $attrs, ffBlock) {
        $compile($element, null, self.priority)($scope);
        $scope.saveExp = $attrs.ffBlockSave;
        $scope.deleteExp = $attrs.ffBlockDelete;
        $scope.isNewExp = $attrs.ffBlockIsNew;
        $scope.ffBlock.editMode = (!ffBlock.ffBulkReadOnly || ffBlock.ffBulkReadOnly.editMode) && !!$scope.$eval($attrs.ffBlockEditDefault);
        $scope.editExp = $attrs.ffBlockEdit;

        if ($scope.editExp) {
          $scope.$eval($scope.editExp + '=' + $scope.ffBlock.editMode);
        }

        if ($scope.$eval($attrs.ffBlockDirtyDefault)) {
          $scope.ffBlockForm.$setDirty();
        }
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/ff-section/ff-btn-block-cancel.directive.js":
/*!***********************************************************************!*\
  !*** ./common/flex-forms/ff-section/ff-btn-block-cancel.directive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffBtnBlockCancel directive - cancel button within ffBlock directive.
 * Has very high priority as just operates with attributes at compile stage,
 * need to start before ngIf and other directives with high priority.
 * The overall sense: process attributes one time and forget about this directive.
 */
angular.module('flexForms.ffBtnBlockCancel', []).directive('ffBtnBlockCancel', ["$compile", "$translate", function ($compile, $translate) {
  'use strict';

  return {
    restrict: 'A',
    require: '^ffBlock',
    priority: 30,
    terminal: true,
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('ffClick', 'ffBlock.cancel()');
      tAttrs.$set('sense', 'cancel');
      tAttrs.$set('size', 'sm');
      tAttrs.$set('ffBtnBlockCancel', null);
      tAttrs.$set('ngShow', 'ffBlock.editMode');
      tElement.html($translate.instant('GLOBAL.BTN_CANCEL'));
      return function link($scope, $element, $attrs) {
        $compile($element, null, self.priority)($scope);
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/ff-section/ff-btn-block-delete.directive.js":
/*!***********************************************************************!*\
  !*** ./common/flex-forms/ff-section/ff-btn-block-delete.directive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffBtnBlockDelete directive - delete button within ffBlock directive.
 * Has very high priority as just operates with attributes at compile stage,
 * need to start before ngIf and other directives with high priority.
 * The overall sense: process attributes one time and forget about this directive.
 */
angular.module('flexForms.ffBtnBlockDelete', []).directive('ffBtnBlockDelete', ["$compile", "$translate", function ($compile, $translate) {
  'use strict';

  return {
    restrict: 'A',
    require: '^ffBlock',
    priority: 30,
    terminal: true,
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('ffClick', 'ffBlock.delete()');
      tAttrs.$set('sense', 'delete');
      tAttrs.$set('size', 'sm');
      tAttrs.$set('ngHide', tAttrs.ngHide || 'ffBlock.editMode');
      tAttrs.$set('ffBtnBlockDelete', null);
      tElement.html($translate.instant('GLOBAL.BTN_DELETE'));
      return function link($scope, $element, $attrs) {
        $compile($element, null, self.priority)($scope);
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/ff-section/ff-btn-block-edit.directive.js":
/*!*********************************************************************!*\
  !*** ./common/flex-forms/ff-section/ff-btn-block-edit.directive.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffBtnBlockEdit directive - edit button within ffBlock directive.
 * Has very high priority as just operates with attributes at compile stage,
 * need to start before ngIf and other directives with high priority.
 * The overall sense: process attributes one time and forget about this directive.
 */
angular.module('flexForms.ffBtnBlockEdit', []).directive('ffBtnBlockEdit', ["$compile", "$translate", function ($compile, $translate) {
  'use strict';

  return {
    restrict: 'A',
    require: '^ffBlock',
    priority: 30,
    terminal: true,
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('ffClick', 'ffBlock.edit()');
      tAttrs.$set('sense', 'edit');
      tAttrs.$set('size', 'sm');
      tAttrs.$set('ffBtnBlockEdit', null);
      tAttrs.$set('ngHide', 'ffBlock.editMode');
      tElement.html($translate.instant('GLOBAL.BTN_EDIT'));
      return function link($scope, $element, $attrs) {
        $compile($element, null, self.priority)($scope);
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/ff-section/ff-btn-block-save.directive.js":
/*!*********************************************************************!*\
  !*** ./common/flex-forms/ff-section/ff-btn-block-save.directive.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffBtnBlockSave directive - save/ok button within ffBlock directive.
 * Has very high priority as just operates with attributes at compile stage,
 * need to start before ngIf and other directives with high priority.
 * The overall sense: process attributes one time and forget about this directive.
 */
angular.module('flexForms.ffBtnBlockSave', []).directive('ffBtnBlockSave', ["$compile", "$translate", function ($compile, $translate) {
  'use strict';

  return {
    restrict: 'A',
    require: '^ffBlock',
    priority: 30,
    terminal: true,
    compile: function compile(tElement, tAttrs) {
      var self = this;
      tAttrs.$set('ffClick', 'ffBlock.save()');
      tAttrs.$set('sense', 'ok');
      tAttrs.$set('size', 'sm');
      tAttrs.$set('type', 'submit');
      tAttrs.$set('ffBtnBlockSave', null);
      tAttrs.$set('ffDisabled', 'ffBlockForm.$invalid || ffBlockForm.$pristine');
      tAttrs.$set('ngShow', 'ffBlock.editMode');
      tElement.html($translate.instant('GLOBAL.BTN_OK'));
      return function link($scope, $element, $attrs) {
        $compile($element, null, self.priority)($scope);
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/ff-section/ff-btn-section-new.directive.js":
/*!**********************************************************************!*\
  !*** ./common/flex-forms/ff-section/ff-btn-section-new.directive.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ffBtnSectionNew directive - add/new button within ffSection directive.
 * Has very high priority as just operates with attributes at compile stage,
 * need to start before ngIf and other directives with high priority.
 * The overall sense: process attributes one time and forget about this directive.
 */
angular.module('flexForms.ffBtnSectionNew', []).directive('ffBtnSectionNew', ["$translate", function ($translate) {
  'use strict';

  return {
    restrict: 'A',
    require: '^ffSection',
    priority: 10000,
    compile: function compile(tElement, tAttrs) {
      tAttrs.$set('ffClick', 'ffSection.newBlock()');
      tAttrs.$set('sense', 'new');
      tAttrs.$set('size', tAttrs.size || 'sm');
      tAttrs.$set('ffBtnSectionNew', null);
      tElement.html(tElement.html() || $translate.instant('GLOBAL.BTN_NEW'));
      return this.link;
    },
    link: function link($scope, $element, $attrs, $controller) {}
  };
}]);

/***/ }),

/***/ "./common/flex-forms/ff-section/ff-bulk-read-only.directive.js":
/*!*********************************************************************!*\
  !*** ./common/flex-forms/ff-section/ff-bulk-read-only.directive.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ff_bulk_read_only_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ff-bulk-read-only.scss */ "./common/flex-forms/ff-section/ff-bulk-read-only.scss");
/* harmony import */ var _ff_bulk_read_only_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ff_bulk_read_only_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * ffBulkReadOnly directive - bulk set read-only status of ffControls
 */

angular.module('flexForms.ffBulkReadOnly', []).directive('ffBulkReadOnly', ["$route", "UserTasks", "helper", function ($route, UserTasks, helper) {
  'use strict';

  return {
    restrict: 'A',
    scope: true,
    controllerAs: 'ffBlock',
    // emulate ffBlock directive controller
    bindToController: {
      ffBulkReadOnly: '<'
    },
    controller: ["$scope", "$element", function controller($scope, $element) {
      var ffBlock = this;
      /**
       * $onInit
       */

      ffBlock.$onInit = function () {
        if (angular.isUndefined(ffBlock.ffBulkReadOnly)) {
          $scope.UserTasks = UserTasks;
          $scope.$watchCollection('UserTasks.tasks', function (tasks) {
            var task = helper.findByKeyValue(tasks, 'url', '/' + $route.current.$$route.routeBranch);
            setEditMode(!!task && !task.readOnly);
          });
        } else {
          $scope.$watch('ffBlock.ffBulkReadOnly', function (ffBulkReadOnly) {
            setEditMode(!ffBulkReadOnly);
          });
        } // Bind test read-only toggle on hot-key


        document.addEventListener('keydown', toggleFfBulkReadOnly);
        $scope.$on('$destroy', function () {
          document.removeEventListener('keydown', toggleFfBulkReadOnly);
        });
      };

      function setEditMode(editMode) {
        ffBlock.editMode = !!editMode;
        $element.toggleClass('ff-bulk-read-only', !editMode);
      }

      function toggleFfBulkReadOnly(event) {
        // Alt + Shift + O
        if (event.altKey && event.shiftKey && event.keyCode === 79) {
          $scope.$apply(function () {
            setEditMode(!ffBlock.editMode);
          });
        }
      }
    }]
  };
}]);

/***/ }),

/***/ "./common/flex-forms/ff-section/ff-bulk-read-only.scss":
/*!*************************************************************!*\
  !*** ./common/flex-forms/ff-section/ff-bulk-read-only.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/ff-section/ff-section.directive.js":
/*!**************************************************************!*\
  !*** ./common/flex-forms/ff-section/ff-section.directive.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);




/**
 * ffSection directive - container for ffBlock directives
 */
angular.module('flexForms.ffSection', ['flexForms.ffBlock', 'flexForms.ffBtnSectionNew']).directive('ffSection', function () {
  'use strict';

  return {
    restrict: 'AC',
    scope: true,
    controllerAs: 'ffSection',
    controller: ["$scope", function controller($scope) {
      var ffSection = this;

      ffSection.deleteBlock = function (index) {
        var _context;

        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context = $scope.collection).call(_context, index, 1);
      };

      ffSection.newBlock = function () {
        var newBlock = $scope.$eval($scope.newExp) || {};
        $scope.collection.push(newBlock);
        return newBlock;
      };
    }],
    compile: function compile(tElement, tAttrs) {
      // If ffSection expression doesn't match ngRepeat pattern, we don't have repeating
      var collection = (tAttrs.ffSection || '').match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

      if (collection) {
        collection = collection[2];
        angular.element(tElement[0].querySelector('[ff-block]')).attr('ng-repeat', tAttrs.ffSection);
      }

      return function ($scope, $element, $attrs, $controller) {
        $scope.collection = $scope.$eval(collection) || [];
        $scope.newExp = $attrs.ffSectionNew;
      };
    }
  };
});

/***/ }),

/***/ "./common/flex-forms/ff-sort/ff-sort.directive.js":
/*!********************************************************!*\
  !*** ./common/flex-forms/ff-sort/ff-sort.directive.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ff_sort_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ff-sort.scss */ "./common/flex-forms/ff-sort/ff-sort.scss");
/* harmony import */ var _ff_sort_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ff_sort_scss__WEBPACK_IMPORTED_MODULE_3__);




/**
 * ffSort directive - FlexForms sort directive
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffSort', []).directive('ffSort', function () {
  return {
    restrict: 'E',
    scope: {
      colId: '<',
      props: '<',
      ffClick: '&'
    },
    template: '<span class="fa" ng-class="getClass()" ng-click="sort()" title="Click to sort"></span>',
    link: function link($scope, $element) {
      $element.addClass('ff-spin-sm');

      $scope.sort = function () {
        if (_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2___default()($scope.props) === $scope.colId) {
          $scope.props.order = -$scope.props.order;
        } else {
          $scope.props.sort = $scope.colId;
          $scope.props.order = 1;
        }

        if (!$scope.spin) {
          $element.addClass('ff-spin');
          $scope.ffClick().finally(function () {
            $element.removeClass('ff-spin');
          });
        }
      };

      $scope.getClass = function () {
        if (_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_2___default()($scope.props) !== $scope.colId) return 'fa-sort';
        if ($scope.props.order < 0) return 'fa-sort-desc';
        return 'fa-sort-asc';
      };
    }
  };
}));

/***/ }),

/***/ "./common/flex-forms/ff-sort/ff-sort.scss":
/*!************************************************!*\
  !*** ./common/flex-forms/ff-sort/ff-sort.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/ff-spin/ff-dim.directive.js":
/*!*******************************************************!*\
  !*** ./common/flex-forms/ff-spin/ff-dim.directive.js ***!
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
 * ffDim directive (dimmed element with loading progress indicator)
 * Control ways:
 * 1. ngClick/ffClick + ffDim on the same element, click handler returns promise.
 * 2. pass variable in attr: ff-dim="vm.dimSomething".
 * 3. ff-dim-target="targetXY" on one element and ng-click/ff-click + ff-dim="target:targetXY" on another element - UNIMPLEMENTED YET
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffDim', []).directive('ffDim', function () {
  return {
    restrict: 'AC',
    priority: 1,
    scope: true,
    controller: 'ffDimCtrl as ffDim',
    bindToController: {
      dim: '<?ffDim',
      ffClick: '@',
      ngClick: '@'
    },

    /**
     * Store original ngClick/ffClick expression, subst ngClick/ffClick with ffDim.click() during compilation.
     * Then restore original expression in postLink. This allows transparent intercepting ngClick/ffClick handlers.
     */
    compile: function compile(tElement, tAttrs) {
      var orig = {
        ffClick: tAttrs.ffClick,
        ngClick: tAttrs.ngClick
      };
      if (tAttrs.ffClick) tAttrs.$set('ffClick', 'ffDim.click($event)');
      if (tAttrs.ngClick) tAttrs.$set('ngClick', 'ffDim.click($event)');
      return function link($scope, $element, $attrs, ffDim) {
        $attrs.$set('ffClick', orig.ffClick);
        $attrs.$set('ngClick', orig.ngClick);
      };
    }
  };
}).controller('ffDimCtrl', ["$scope", "$element", function ($scope, $element) {
  var ffDim = this;
  var dimmer;
  /**
   * Create/remove dimmer
   */

  ffDim.$onChanges = function () {
    if (ffDim.dim && !$element.hasClass('ff-dim')) {
      // Dim
      if (!dimmer) {
        dimmer = angular.element('<div class="ff-dimmer ff-spin"></div>');
        dimmer.on('click', function (event) {
          event.stopPropagation();
        }); // block clicking
      }

      $element.append(dimmer);
      $element.addClass('ff-dim');
      return;
    }

    if (!ffDim.dim && dimmer) {
      // UnDim
      dimmer.remove();
      $element.removeClass('ff-dim');
      dimmer = null;
    }
  };
  /**
   * ngClick/ffClick handler wrapper. If the handler returns a promise, the element is dimmed until promise.finally.
   */


  ffDim.click = function ($event) {
    if ($event.shiftKey || $event.ctrlKey || $event.altKey || $event.metaKey) return; // allow text selection on any meta key

    var result = $scope.$eval(ffDim.ffClick || ffDim.ngClick, {
      $event: $event
    });

    if (result && result.finally) {
      ffDim.dim = true;
      result.finally(function () {
        ffDim.dim = false;
      });
    }
  };
}]));

/***/ }),

/***/ "./common/flex-forms/ff-spin/ff-spin.directive.js":
/*!********************************************************!*\
  !*** ./common/flex-forms/ff-spin/ff-spin.directive.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * ffSpin directive (loading progress indicator)
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffSpin', []).directive('ffSpin', function () {
  return {
    restrict: 'A',
    priority: -1,
    link: function link($scope, $element, $attrs) {
      $scope.$watch($attrs.ffSpin, function (newVal) {
        var input = $element[0].querySelector('button');
        $element.toggleClass('ff-spin', !!newVal);
        if (input) angular.element(input).toggleClass('disabled', !!newVal);
      });
    }
  };
}));

/***/ }),

/***/ "./common/flex-forms/ff-tip/ff-hint.directive.js":
/*!*******************************************************!*\
  !*** ./common/flex-forms/ff-tip/ff-hint.directive.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ff_tip_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ff-tip.scss */ "./common/flex-forms/ff-tip/ff-tip.scss");
/* harmony import */ var _ff_tip_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ff_tip_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * ffHint directive - absolutely positioned placeholder with info icon. Shows ffTip on hover.
 * @attr hintType - hint type: success/primary/warning/danger (success by default)
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffHint', []).directive('ffHint', function () {
  return {
    restrict: 'EAC',
    compile: function compile(tElement, tAttrs) {
      tElement.addClass('ff-hint ff-tip-trigger');
      var icon = angular.element('<ff-icon sense="info"></ff-icon>');
      var tip = angular.element('<ff-tip></ff-tip>');
      icon.addClass('text-' + tAttrs.hintType || false);
      icon.attr('sense', tAttrs.hintType === 'warning' || tAttrs.hintType === 'danger' ? 'warning' : 'info');
      tip.attr('tip-type', tAttrs.hintType);
      tip.append(tElement.html());
      tElement.empty().append(icon.append(tip));
      return function link($scope, $element, $attrs) {};
    }
  };
}));

/***/ }),

/***/ "./common/flex-forms/ff-tip/ff-tip.directive.js":
/*!******************************************************!*\
  !*** ./common/flex-forms/ff-tip/ff-tip.directive.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ff_tip_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ff-tip.scss */ "./common/flex-forms/ff-tip/ff-tip.scss");
/* harmony import */ var _ff_tip_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ff_tip_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * ffTip directive - tooltip which appears on hover of .ff-tip-trigger element.
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ffTip', []).directive('ffTip', ["$window", "$timeout", "helper", function ($window, $timeout, helper) {
  return {
    restrict: 'EAC',
    compile: function compile(tElement, tAttrs) {
      tElement.addClass('ff-tip');
      tElement.addClass(tAttrs.tipType);
      var inner = angular.element('<div class="ff-tip-inner"></div>').append(tElement.html());
      tElement.empty().append(inner);
      var triangle = angular.element('<i></i>');
      tElement.append(triangle);
      /**
       * Link
       */

      return function link($scope, $element, $attrs) {
        var triangle = angular.element($element[0].querySelector('i'));
        var trigger = $element[0].nodeName === 'FF-TIP' ? $element.parent() : $element;
        trigger = helper.findParentElement($element, function (e) {
          return e.hasClass('ff-tip-trigger');
        }) || trigger;
        var tipHover = $attrs.tipHover;
        var rcScroller = angular.element($element[0].querySelector('.rc-tip-scroller'));
        trigger.addClass('ff-tip-trigger');
        trigger.on('mouseenter', onMouseEnter);
        $scope.$on('$destroy', function () {
          trigger.off('mouseenter', onMouseEnter);
        });
        $scope.$on('ffTip:layout', function () {
          if ($element.hasClass('ff-tip-right')) {
            $element.css('margin-top', 0);
            $window.requestAnimationFrame(function () {
              return positionRight(5);
            }); // fire during next 5 animation frames
          } else {
            $element.toggleClass('ff-tip-bottom', trigger[0].getBoundingClientRect().top < parseInt($window.getComputedStyle($element[0]).height));
            $element.css('margin-left', 0);
            triangle.css('margin-left', 0);
            $window.requestAnimationFrame(function () {
              return positionTopBottom(5);
            }); // fire during next 5 animation frames
          }
        });
        /**
         * Trigger mouse enter handler, adds class .bottom if tip doesn't fit to screen above container
         */

        function onMouseEnter() {
          if (tipHover) $scope.$eval(tipHover);

          if ($element.hasClass('rc-marker-info')) {
            $element.css('margin-left', 0);
            triangle.css('margin-left', 0);
            $timeout(function () {
              // prevent right-cropping tooltip
              var rect = $element[0].getBoundingClientRect();
              var tRect = triangle[0].getBoundingClientRect();
              var marginLeft = parseInt($window.getComputedStyle($element[0]).marginLeft);
              marginLeft = Math.min(marginLeft - (rect.right - $window.innerWidth), 0);
              $element.css('margin-left', marginLeft + 'px');
              triangle.css('margin-left', Math.min(-marginLeft, (rect.width - tRect.width) / 2) + 'px');
            }, 100);
          }

          if ($element.hasClass('ff-tip-right')) {
            $element.css('margin-top', 0);
            $window.requestAnimationFrame(function () {
              return positionRight(10);
            }); // fire during next 10 animation frames
          } else {
            $element.toggleClass('ff-tip-bottom', trigger[0].getBoundingClientRect().top < parseInt($window.getComputedStyle($element[0]).height));
            $element.css('margin-left', 0);
            triangle.css('margin-left', 0);
            $window.requestAnimationFrame(function () {
              return positionTopBottom(10);
            }); // fire during next 10 animation frames
          }
        }

        function positionRight(framesCount) {
          var rect = $element[0].getBoundingClientRect();
          var marginTop;
          var vpTop = document.querySelector('rc-header').getBoundingClientRect().bottom + 5;
          var vpBottom = document.documentElement.clientHeight - 5;

          if (rect.top < vpTop || rect.height > vpBottom - vpTop) {
            marginTop = parseInt($element.css('margin-top')); // var marginTop = parseInt($window.getComputedStyle($element[0]).getPropertyValue('margin-top'));

            marginTop += vpTop - rect.top;
            $element.css('margin-top', marginTop + 'px');
            triangle.css('margin-top', -Math.min(marginTop, rect.height / 2 - 12) + 'px');
          } else if (rect.bottom > vpBottom) {
            marginTop = parseInt($element.css('margin-top'));
            marginTop += vpBottom - rect.bottom;
            $element.css('margin-top', marginTop + 'px');
            triangle.css('margin-top', Math.min(-marginTop, rect.height / 2 - 12) + 'px');
          }

          rcScroller.css('max-height', vpBottom - vpTop - 40 + 'px');
          if (framesCount > 0) $window.requestAnimationFrame(function () {
            return positionRight(framesCount - 1);
          });
        }

        function positionTopBottom(framesCount) {
          var rect = $element[0].getBoundingClientRect();
          var marginLeft;
          var boundingRect = document.querySelector('main').getBoundingClientRect();
          var vpLeft = boundingRect.left + 5;
          var vpRight = boundingRect.right - 5;

          if (rect.left < vpLeft) {
            marginLeft = parseInt($element.css('margin-left'));
            marginLeft += vpLeft - rect.left;
            $element.css('margin-left', marginLeft + 'px');
            triangle.css('margin-left', -Math.min(marginLeft, rect.width / 2 - 12) + 'px');
          } else if (rect.right > vpRight) {
            marginLeft = parseInt($element.css('margin-left'));
            marginLeft += vpRight - rect.right;
            $element.css('margin-left', marginLeft + 'px');
            triangle.css('margin-left', Math.min(-marginLeft, rect.width / 2 - 12) + 'px');
          }

          if (framesCount > 0) $window.requestAnimationFrame(function () {
            return positionTopBottom(framesCount - 1);
          });
        }
      };
    }
  };
}]));

/***/ }),

/***/ "./common/flex-forms/ff-tip/ff-tip.scss":
/*!**********************************************!*\
  !*** ./common/flex-forms/ff-tip/ff-tip.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/flex-form-title.directive.js":
/*!********************************************************!*\
  !*** ./common/flex-forms/flex-form-title.directive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * flexFormTitle directive transcludes to flexForm heading/title
 */
angular.module('flexForms.flexFormTitle', []).directive('flexFormTitle', ["$compile", "ffHelper", function ($compile, ffHelper) {
  'use strict';

  return {
    restrict: 'EAC',
    transclude: 'element',
    compile: function compile(tElement, tAttrs) {
      return function link($scope, $element, $attrs, $ctrl, $transclude) {
        $transclude(function (clone, newScope) {
          var panelHeading;

          for (var i = 0, parent = $element[0].parentNode; i < 5 && parent.parentNode; i++, parent = parent.parentNode) {
            panelHeading = parent.querySelector('.panel-heading');
            if (panelHeading) break;
          }

          angular.element(panelHeading).append(angular.element('<div class="panel-title"></div>').append(clone));
        });
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/flex-form.directive.js":
/*!**************************************************!*\
  !*** ./common/flex-forms/flex-form.directive.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * flexForm directive transcludes to panel with heading and body. Supports two-column header.
 * @attr label - (optional) left-side title, can be expression, e.g. label="Test", label={{'Test ' + vm.count}}
 * @attr labelExt - (optional) right side title, can be expression, e.g. label="Test", label={{'Test ' + vm.count}}
 */
angular.module('flexForms.flexForm', []).directive('flexForm', ["ffHelper", function (ffHelper) {
  return {
    restrict: 'E',
    compile: function compile(tElement, tAttrs) {
      var tpl = '<div class="panel-heading">' + (tAttrs.ffLabel ? '<div class="panel-title">' + tAttrs.ffLabel + (tAttrs.ffLabelAddon ? tAttrs.ffLabelAddon : '') + '</div>' : '') + (tAttrs.ffLabelExt ? '<div class="panel-title">' + tAttrs.ffLabelExt + '</div>' : '') + '</div>' + '<div class="panel-body">' + tElement.html() + '</div>';
      tElement.addClass('panel panel-default flex-form');
      tElement.html(tpl);
      return function link($scope, $element, $attrs) {};
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/flex-forms.module.js":
/*!************************************************!*\
  !*** ./common/flex-forms/flex-forms.module.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/from */ "../node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol */ "../node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator-method */ "../node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);








function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default.a !== "undefined" && _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_3___default()(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(_context = Object.prototype.toString.call(o)).call(_context, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_1___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms', ['mqs', 'flexForms.flexForm', 'flexForms.flexFormTitle', 'flexForms.ffPanel', 'flexForms.flex', 'flexForms.ffRow', 'flexForms.ffLabel', 'flexForms.ffStatic', 'flexForms.ffText', 'flexForms.ffUrl', 'flexForms.ffLogin', 'flexForms.ffPassword', 'flexForms.ffEmail', 'flexForms.ffTime', 'flexForms.ffDate', 'flexForms.ffDatepicker', 'flexForms.ffDatepickerPopup', 'flexForms.ffNumber', 'flexForms.ffPrice', 'flexForms.ffSelect', 'flexForms.ffTextarea', 'flexForms.ffCheckbox', 'flexForms.ffRadio', 'flexForms.ffBtn', 'flexForms.ffBtnGroup', 'flexForms.ngValidateAlert', 'flexForms.ffSpin', 'flexForms.ffDim', 'flexForms.ffImg', 'flexForms.ffSearch', 'flexForms.validation.ngTimeOrder', 'flexForms.validation.ngDateOrder', 'flexForms.validation.ngDateDiff', 'flexForms.validation.ngUnique', 'flexForms.validation.ngLte', 'flexForms.validation.ngLt', 'flexForms.validation.ngGte', 'flexForms.validation.ngGt', 'flexForms.validation.ngMatch', 'flexForms.validation.ngNotContain', 'flexForms.validation.ngCustom', 'flexForms.ngCollapse', 'flexForms.ffPagination', 'flexForms.ffIcon', 'flexForms.ffInfo', 'flexForms.ffSection', 'flexForms.ffTip', 'flexForms.ffHint', 'flexForms.ffCountdown', 'flexForms.ffIncludeAll', 'flexForms.ffSort', 'flexForms.ffCcNumber', 'flexForms.ffBulkReadOnly']).factory('ffHelper', function () {
  return {
    /**
     * Simplified version of copyInnerAttrs, used in ffBtn directive
     * @param src - source element
     * @param dst - destination element
     * @returns {Array} - list of attributes names to remove from parent element on next digest
     */
    copyAttrs: function copyAttrs(src, dst) {
      var attrsToCopy = ['name', 'minlength', 'maxlength', 'placeholder', 'ff-countdown', 'ta-toolbar'];
      var attrsToRemove = [];

      var _iterator = _createForOfIteratorHelper(src[0].attributes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var attr = _step.value;
          var name = attr.name,
              value = attr.value;

          if (name.indexOf('ff-') === 0 && name !== 'ff-countdown' && name !== 'ff-alt' && name !== 'ff-spin') {
            dst.attr('ng-' + name.substr(3), value);
          } else if (name.indexOf('aria-') === 0 || attrsToCopy.indexOf(name) >= 0) {
            dst.attr(name, value);
            attrsToRemove.push(name);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return attrsToRemove;
    },

    /**
     * Copies ff-prefixed attributes from directive root element to specified child attributes receiver with ng-prefix.
     * Should be used in compile function to copy attributes on compile stage (template level), before linking stage (instances level).
     * @param tElement - first parameter of compile function
     * @param tAttrs - second parameter of compile function
     * @param attrsReceiver - child element, attributes receiver
     */
    copyInnerAttrs: function copyInnerAttrs(tElement, tAttrs, attrsReceiver) {
      for (var key in tAttrs.$attr) {
        var attr = tAttrs.$attr[key];

        if (attr.indexOf('ff-') === 0 && attr !== 'ff-countdown' && attr !== 'ff-alt' && attr !== 'ff-spin') {
          attrsReceiver.attr('ng-' + attr.substr(3), tAttrs[key]);
        } else if (attr.indexOf('aria-') === 0) {
          attrsReceiver.attr(attr, tAttrs[key]);
          tAttrs.$set(attr, null);
        }
      }

      if (tAttrs.name) {
        // copy name attribute and remove it
        attrsReceiver.attr('name', tAttrs.name);
        tAttrs.$set('name', null);
      }

      attrsReceiver.attr('minlength', tAttrs.minlength);
      tAttrs.$set('minlength', null);
      attrsReceiver.attr('maxlength', tAttrs.maxlength);
      tAttrs.$set('maxlength', null);
      attrsReceiver.attr('placeholder', tAttrs.placeholder);
      tAttrs.$set('placeholder', null);
      attrsReceiver.attr('ff-countdown', tAttrs.ffCountdown);
      tAttrs.$set('ffCountdown', null);
      attrsReceiver.attr('ta-toolbar', tAttrs.taToolbar);
      tAttrs.$set('taToolbar', null);
      return attrsReceiver;
    },

    /**
     * Checks if we are running on a mobile platform
     * @returns {boolean} - true if on mobile platform, false otherwise
     */
    isMobile: function isMobile() {
      if (navigator.userAgent && (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))) {
        return true;
      }
    }
  };
}));

/***/ }),

/***/ "./common/flex-forms/flex.directive.js":
/*!*********************************************!*\
  !*** ./common/flex-forms/flex.directive.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/trim */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6__);








/**
 * flex directive sets element flex style. E.g. flex="1 1 50%" -> style="flex: 1 1 50%"
 */
angular.module('flexForms.flex', []).directive('flex', ["dynCss", function (dynCss) {
  'use strict';

  return {
    restrict: 'A',
    link: function link($scope, $element, $attrs) {
      $attrs.$observe('flex', function (param) {
        param = _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_3___default()(param).call(param);

        if (param[0] !== '{') {
          param = "{ xs: '".concat(param, "' }");
        }

        param = $scope.$eval(param);
        var classes = dynCss('flex', param).join(' ');
        $element.addClass(classes);
      });
    }
  };
}]) // Converts directive name + parameter to list of CSS classes and dynamically creates these classes
.factory('dynCss', ["dynCssBreakpoints", function (dynCssBreakpoints) {
  'use strict';

  var classes = {}; // class names cache

  return function (styleName, param) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_4___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_5___default()(dynCssBreakpoints).call(dynCssBreakpoints, function (bp) {
      var _context2, _context3;

      var styleVal = param[bp.id];
      if (!styleVal) return null;

      var className = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6___default()(_context3 = "".concat(bp.id, "_")).call(_context3, styleName, "_")).call(_context2, styleVal.replace(/(?: |\.)/g, '_').replace(/%/g, 'pct'));

      if (angular.isUndefined(classes[className])) {
        var _context4, _context5;

        classes[className] = bp.sheet.cssRules.length;
        bp.sheet.insertRule(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_6___default()(_context5 = ".".concat(className, " { ")).call(_context5, styleName, ": ")).call(_context4, styleVal, " !important; }"), bp.sheet.cssRules.length);
      }

      return className;
    })).call(_context, function (className) {
      return !!className;
    });
  };
}]).factory('dynCssBreakpoints', function () {
  'use strict';

  var breakpoints = [{
    id: 'xs',
    width: null
  }, {
    id: 'sm',
    width: '480px'
  }, {
    id: 'md',
    width: '640px'
  }, {
    id: 'lg',
    width: '768px'
  }, {
    id: 'xl',
    width: '1024px'
  }];
  breakpoints.forEach(function (bp) {
    var style = document.createElement('style');
    if (bp.width) style.setAttribute('media', "(min-width: ".concat(bp.width, ")")); // style.appendChild(document.createTextNode('')); // WebKit hack :(

    document.head.appendChild(style);
    bp.sheet = style.sheet;
  });
  return breakpoints;
});

/***/ }),

/***/ "./common/flex-forms/mqs.directive.js":
/*!********************************************!*\
  !*** ./common/flex-forms/mqs.directive.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);








/**
 * Media query styling directive: <div mqs="{ sm: {flex: '0 0 50%'}, md: {flex: '0 0 33%'} }">
 */
angular.module('mqs', []).directive('mqs', ["mqsClasses", "helper", function (mqsClasses, helper) {
  'use strict';

  return {
    restrict: 'A',
    link: function link($scope, $element, $attrs) {
      $attrs.$observe('mqs', function (param) {
        param = $scope.$eval(param);
        var classes = mqsClasses(param).join(' ');
        $element.addClass(classes);
      });
    }
  };
}]).factory('mqsBreakpoints', function () {
  'use strict';

  var breakpoints = [{
    id: 'xs',
    width: null
  }, {
    id: 'sm',
    width: '480px'
  }, {
    id: 'md',
    width: '640px'
  }, {
    id: 'lg',
    width: '768px'
  }, {
    id: 'xl',
    width: '1024px'
  }];
  breakpoints.forEach(function (bp) {
    var style = document.createElement('style');
    if (bp.width) style.setAttribute('media', "(min-width: ".concat(bp.width, ")")); // style.appendChild(document.createTextNode('')); // WebKit hack :(

    document.head.appendChild(style);
    bp.sheet = style.sheet;
  });
  return breakpoints;
}) // Converts mqs directive parameter to list of CSS classes and dynamically creates these classes
.factory('mqsClasses', ["mqsBreakpoints", function (mqsBreakpoints) {
  'use strict';

  var classes = {}; // class names cache

  return function (param) {
    var _context;

    return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(mqsBreakpoints).call(mqsBreakpoints, function (bp) {
      var _context2;

      var styles = param[bp.id];
      if (!styles) return null;
      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(styles)).call(_context2, function (styleName) {
        var _context3, _context4;

        var styleVal = '' + styles[styleName];

        var className = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = "".concat(bp.id, "_")).call(_context4, styleName, "_")).call(_context3, styleVal.replace(/(?: |\.)/g, '_').replace(/%/g, 'pct'));

        if (angular.isUndefined(classes[className])) {
          var _context5, _context6;

          classes[className] = bp.sheet.cssRules.length;
          bp.sheet.insertRule(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context6 = ".".concat(className, " { ")).call(_context6, styleName, ": ")).call(_context5, styleVal, " !important; }"), bp.sheet.cssRules.length);
        }

        return className;
      });
    })).call(_context, function (className) {
      return !!className;
    }).reduce(function (result, item) {
      return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(result).call(result, item);
    }, []);
  };
}]);

/***/ }),

/***/ "./common/flex-forms/ng-collapse/ng-collapse.directive.js":
/*!****************************************************************!*\
  !*** ./common/flex-forms/ng-collapse/ng-collapse.directive.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_collapse_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-collapse.scss */ "./common/flex-forms/ng-collapse/ng-collapse.scss");
/* harmony import */ var _ng_collapse_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ng_collapse_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * ngCollapse directive - collapsible content block with lazy rendering
 */

angular.module('flexForms.ngCollapse', []).directive('ngCollapse', ["$compile", "ffHelper", function ($compile, ffHelper) {
  return {
    restrict: 'A',
    compile: function compile(tElement, tAttrs) {
      var content;

      if (tAttrs.lazyRendering != 'false') {
        // Remove content from template on compile stage for lazy rendering
        content = tElement.html();
        tElement.empty();
      } // Collapse by default


      tElement.addClass('ng-collapse ng-collapsed'); // Return link function

      return function ($scope, $element, $attrs, $controller) {
        if ($attrs.ngCollapse) {
          $scope.$watch(function () {
            return $scope.$eval($attrs.ngCollapse);
          }, function (newVal) {
            if (angular.isUndefined(newVal)) {
              newVal = false;
            } // If collapse is false and template is not generated yet, generate template


            if ($attrs.lazyRendering != 'false' && !newVal && !$element.html()) {
              console.log('lazy');
              $element.append($compile(content)($scope));
            }

            $element.toggleClass('ng-collapsed', newVal);
          });
        }
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/ng-collapse/ng-collapse.scss":
/*!********************************************************!*\
  !*** ./common/flex-forms/ng-collapse/ng-collapse.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/flex-forms/validation/ng-custom.directive.js":
/*!*************************************************************!*\
  !*** ./common/flex-forms/validation/ng-custom.directive.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * ngCustom directive for custom validator
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.validation.ngCustom', []).directive('ngCustom', function () {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: function link($scope, $element, $attrs, ngModel) {
      if (!ngModel || !$attrs.ngCustom) {
        return;
      }

      var validator = function validator($value) {
        var result = $scope.$eval($attrs.ngCustom, {
          $value: $value
        });
        ngModel.$setValidity('custom', result);
        return $value;
      };

      ngModel.$parsers.push(validator);
      $scope.$watch($attrs.ngCustom, function () {
        return validator(ngModel.$viewValue);
      });
    }
  };
}));

/***/ }),

/***/ "./common/flex-forms/validation/ng-date-diff.directive.js":
/*!****************************************************************!*\
  !*** ./common/flex-forms/validation/ng-date-diff.directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ngDateDiff directive - validates difference between dates in hours.
 * Example: ff-date-diff="24" + ff-date-order="{ early: vm.startTime, late: vm.endTime }"
 */
angular.module('flexForms.validation.ngDateDiff', []).directive('ngDateDiff', ["$parse", "$timeout", function ($parse, $timeout) {
  'use strict';

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function link($scope, $element, $attrs, $ctrl) {
      /**
       * ngDateDiff:validate event listener. Forces current element validation.
       */
      var validateOff = $scope.$on('ngDateDiff:validate', function () {
        $ctrl.$validate();
      });
      /**
       * $scope.$destroy event handler. Unbinds ngDateDiff:validate listener
       */

      $scope.$on('$destroy', function () {
        validateOff();
      });
      /**
       * Watches for ngModel and forces neighbors validation
       */

      $scope.$watch($attrs.ngModel, function (model) {
        $timeout(function () {
          // force neighbors validation
          var parent = $scope;

          while (parent.$parent && !parent.hasOwnProperty('vm')) {
            parent = parent.$parent;
          }

          parent.$broadcast('ngDateDiff:validate');
        });
      });
      /**
       * Validator
       */

      $ctrl.$validators.dateDiff = function dateDiff(modelValue, viewValue) {
        var options = $scope.$eval($attrs.ngDateDiff);
        var diff;

        if (!angular.isObject(options)) {
          diff = options;
          options = $scope.$eval($attrs.ngDateOrder);
        } else {// TODO: implement me
        }

        return Math.abs(options.late - options.early) / 3600000 < diff;
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/validation/ng-date-order.directive.js":
/*!*****************************************************************!*\
  !*** ./common/flex-forms/validation/ng-date-order.directive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ngDateOrder directive - validates if one date is before another date.
 * Example: ff-date-order="{early: vm.startTime, late: vm.endTime}"
 */
angular.module('flexForms.validation.ngDateOrder', []).directive('ngDateOrder', ["$parse", "$timeout", function ($parse, $timeout) {
  'use strict';

  return {
    restrict: 'A',
    require: '?ngModel',
    scope: true,
    link: function link($scope, $element, $attrs, $ctrl) {
      /**
       * ngDateOrder:validate event listener. Forces current element validation.
       */
      var validateOff = $scope.$on('ngDateOrder:validate', function () {
        $ctrl.$validate();
      });
      /**
       * $scope.$destroy event handler. Unbinds ngDateOrder:validate listener
       */

      $scope.$on('$destroy', function () {
        validateOff();
      });
      /**
       * Watches for ngModel and forces neighbors validation
       */

      $scope.$watch($attrs.ngModel, function (model) {
        $timeout(function () {
          // force neighbors validation
          var parent = $scope; // find nearest form or ng-form parent element

          while (parent.$parent && !parent.hasOwnProperty('vm')) {
            parent = parent.$parent;
          }

          parent.$broadcast('ngDateOrder:validate', $element[0].name);
        });
      });
      /**
       * Validator
       */

      $ctrl.$validators.dateOrder = function dateOrder(modelValue, viewValue) {
        var options = $scope.$eval($attrs.ngDateOrder);
        var parent = $element.parent().parent()[0];

        if (parent && parent.tagName && parent.tagName.toLowerCase() === 'ff-date') {
          var early, late;

          if (moment.isMoment(options.early)) {
            early = options.early.clone();
            early.hour(0).minute(0).second(0).millisecond(0);
          }

          if (moment.isMoment(options.late)) {
            late = options.late.clone();
            late.hour(0).minute(0).second(0).millisecond(0);
          }

          return !moment.isMoment(early) || !moment.isMoment(late) || early <= late;
        } // parent is ffTime, compare both parts date and time


        return !moment.isMoment(options.early) || !moment.isMoment(options.late) || options.early < options.late;
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/validation/ng-gt.directive.js":
/*!*********************************************************!*\
  !*** ./common/flex-forms/validation/ng-gt.directive.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ngGt directive - validates if value is greater than specified number.
 * Example: ff-gt="0"
 */
angular.module('flexForms.validation.ngGt', []).directive('ngGt', function () {
  'use strict';

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function link($scope, $element, $attrs, $model) {
      $model.$validators.gt = function gt(modelValue, viewValue) {
        var src = parseFloat(viewValue);
        var dst = $scope.$eval($attrs.ngGt);
        dst = angular.isDefined(dst) ? parseFloat(dst) : parseFloat($attrs.ngGt);
        return isNaN(src) || isNaN(dst) || src > dst;
      };

      $scope.$watch($attrs.ngGt, function () {
        $model.$validate();
      });
    }
  };
});

/***/ }),

/***/ "./common/flex-forms/validation/ng-gte.directive.js":
/*!**********************************************************!*\
  !*** ./common/flex-forms/validation/ng-gte.directive.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ngGte directive - validates if value is greater than or equal to specified number.
 * Example: ff-gte="0"
 */
angular.module('flexForms.validation.ngGte', []).directive('ngGte', function () {
  'use strict';

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function link($scope, $element, $attrs, $model) {
      $model.$validators.gte = function gte(modelValue, viewValue) {
        var src = parseFloat(viewValue);
        var dst = $scope.$eval($attrs.ngGte);
        dst = angular.isDefined(dst) ? parseFloat(dst) : parseFloat($attrs.ngGte);
        return isNaN(src) || isNaN(dst) || src >= dst;
      };

      $scope.$watch($attrs.ngGte, function () {
        $model.$validate();
      });
    }
  };
});

/***/ }),

/***/ "./common/flex-forms/validation/ng-lt.directive.js":
/*!*********************************************************!*\
  !*** ./common/flex-forms/validation/ng-lt.directive.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ngLte directive - validates if value is less than specified number.
 * Example: ff-lt="0"
 */
angular.module('flexForms.validation.ngLt', []).directive('ngLt', function () {
  'use strict';

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function link($scope, $element, $attrs, $model) {
      $model.$validators.lt = function lt(modelValue, viewValue) {
        var src = parseFloat(viewValue);
        var dst = $scope.$eval($attrs.ngLt);
        dst = angular.isDefined(dst) ? parseFloat(dst) : parseFloat($attrs.ngLt);
        return isNaN(src) || isNaN(dst) || src < dst;
      };

      $scope.$watch($attrs.ngLt, function () {
        $model.$validate();
      });
    }
  };
});

/***/ }),

/***/ "./common/flex-forms/validation/ng-lte.directive.js":
/*!**********************************************************!*\
  !*** ./common/flex-forms/validation/ng-lte.directive.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ngLte directive - validates if value is less than or equal to specified number.
 * Example: ff-lte="0"
 */
angular.module('flexForms.validation.ngLte', []).directive('ngLte', function () {
  'use strict';

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function link($scope, $element, $attrs, $model) {
      $model.$validators.lte = function lte(modelValue, viewValue) {
        var src = parseFloat(viewValue);
        var dst = $scope.$eval($attrs.ngLte);
        dst = angular.isDefined(dst) ? parseFloat(dst) : parseFloat($attrs.ngLte);
        return isNaN(src) || isNaN(dst) || src <= dst;
      };

      $scope.$watch($attrs.ngLte, function () {
        $model.$validate();
      });
    }
  };
});

/***/ }),

/***/ "./common/flex-forms/validation/ng-match.directive.js":
/*!************************************************************!*\
  !*** ./common/flex-forms/validation/ng-match.directive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ngMatch directive for validating password and password confirmation
 */
angular.module('flexForms.validation.ngMatch', []).directive('ngMatch', function () {
  'use strict';

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function link($scope, $element, $attrs, ngModel) {
      if (!ngModel || !$attrs.ngMatch) return;

      var validator = function validator(value) {
        var firstPassword = $scope.$eval($attrs.ngMatch);
        ngModel.$setValidity('match', firstPassword || value ? value === firstPassword : true);
        return value;
      };

      ngModel.$parsers.push(validator);
      $scope.$watch($attrs.ngMatch, function () {
        validator(ngModel.$viewValue);
      });
    }
  };
});

/***/ }),

/***/ "./common/flex-forms/validation/ng-not-contain.directive.js":
/*!******************************************************************!*\
  !*** ./common/flex-forms/validation/ng-not-contain.directive.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ngNotContain directive for validating model to contain a string
 */
angular.module('flexForms.validation.ngNotContain', []).directive('ngNotContain', function () {
  'use strict';

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function link($scope, $element, $attrs, ngModel) {
      if (!ngModel || !$attrs.ngNotContain) return;

      var validator = function validator(value) {
        var strings = $scope.$eval($attrs.ngNotContain);
        if (!strings) return value;
        if (!angular.isArray(strings)) strings = [strings];
        var invalid = strings.some(function (string) {
          return string && (value || '').toLowerCase().indexOf(string.toLowerCase()) >= 0;
        });
        ngModel.$setValidity('notContain', !invalid);
        return value;
      };

      ngModel.$parsers.push(validator);
      $scope.$watch($attrs.ngMatch, function () {
        validator(ngModel.$viewValue);
      });
    }
  };
});

/***/ }),

/***/ "./common/flex-forms/validation/ng-time-order.directive.js":
/*!*****************************************************************!*\
  !*** ./common/flex-forms/validation/ng-time-order.directive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * ngTimeOrder directive - validates if time of one date is before time of another date.
 * Example: ff-time-order="{ early: vm.startTime, late: vm.endTime }"
 */
angular.module('flexForms.validation.ngTimeOrder', []).directive('ngTimeOrder', ["$parse", "$timeout", function ($parse, $timeout) {
  return {
    restrict: 'A',
    require: '?ngModel',
    scope: true,
    link: function link($scope, $element, $attrs, $ctrl) {
      /**
       * ngTimeOrder:validate event listener. Forces current element validation.
       */
      var validateOff = $scope.$on('ngTimeOrder:validate', function ($event) {
        $ctrl.$validate();
      });
      /**
       * $scope.$destroy event handler. Unbinds ngTimeOrder:validate listener
       */

      $scope.$on('$destroy', function () {
        validateOff();
      });
      /**
       * Watches for ngModel and forces neighbors validation
       */

      $scope.$watch($attrs.ngModel, function (model) {
        // Force neighbors validation
        $timeout(function () {
          // Find nearest form or ng-form parent element
          var parent = $scope;

          while (parent.$parent && !parent.hasOwnProperty('vm')) {
            parent = parent.$parent;
          }

          parent.$broadcast('ngTimeOrder:validate', $element[0].name);
        });
      });
      /**
       * Validator
       */

      $ctrl.$validators.timeOrder = function timeOrder(modelValue, viewValue) {
        var options = $scope.$eval($attrs.ngTimeOrder);
        var early, late;

        if (moment.isMoment(options.early)) {
          early = options.early.clone().year(0).month(0).date(0);
        }

        if (moment.isMoment(options.late)) {
          late = options.late.clone().year(0).month(0).date(0);
        }

        return !moment.isMoment(early) || !moment.isMoment(late) || early < late || !late.hour() && !late.minute();
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/validation/ng-unique.directive.js":
/*!*************************************************************!*\
  !*** ./common/flex-forms/validation/ng-unique.directive.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * ngUnique directive - validates if each value is unique.
 * Example: ff-unique="{array: vm.product.priceLists, prop: 'priceList'}" ff-model-options="{allowInvalid: true}"
 * ff-model-options is required, otherwise, validation will loop
 */
angular.module('flexForms.validation.ngUnique', []).directive('ngUnique', ["$parse", "$timeout", function ($parse, $timeout) {
  return {
    restrict: 'A',
    require: '?ngModel',
    compile: function compile(tElement, tAttrs) {
      return this.link;
    },
    link: function link($scope, $element, $attrs, $ctrl) {
      /**
       * ngUnique:validate event listener. Forces current element validation.
       */
      var validateOff = $scope.$on('ngUnique:validate', function ($event) {
        $ctrl.$validate();
      });
      /**
       * $scope.$destroy event handler. Unbinds ngUnique:validate listener
       */

      $scope.$on('$destroy', function () {
        // Force neighbors validation
        var parent = $scope; //Find nearest form or ng-form parent element

        while (parent.$parent && !parent.hasOwnProperty('vm')) {
          parent = parent.$parent;
        }

        parent.$broadcast('ngUnique:validate', $element[0].name);
        validateOff();
      });
      /**
       * Watches for ngModel and forces neighbors validation
       */

      $scope.$watch($attrs.ngModel, function (model) {
        // Force neighbors validation
        $timeout(function () {
          // Find nearest form or ng-form parent element
          var parent = $scope;

          while (parent.$parent && !parent.hasOwnProperty('vm')) {
            parent = parent.$parent;
          }

          parent.$broadcast('ngUnique:validate', $element[0].name);
        });
      });
      /**
       * Validator
       */

      $ctrl.$validators.unique = function unique(modelValue, viewValue) {
        var options = $scope.$eval($attrs.ngUnique);
        var count = 0;
        options.array.forEach(function (val) {
          if (viewValue && viewValue === val[options.prop]) {
            count++;
          }
        });
        return count <= 1;
      };
    }
  };
}]);

/***/ }),

/***/ "./common/flex-forms/validation/ng-validate-alert.directive.js":
/*!*********************************************************************!*\
  !*** ./common/flex-forms/validation/ng-validate-alert.directive.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_validate_alert_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-validate-alert.scss */ "./common/flex-forms/validation/ng-validate-alert.scss");
/* harmony import */ var _ng_validate_alert_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ng_validate_alert_scss__WEBPACK_IMPORTED_MODULE_3__);




/**
 * ngValidateAlert directive - validation error tooltips for FlexForms
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('flexForms.ngValidateAlert', []).directive('ngValidateAlert', ["$timeout", "$translate", "$filter", function ($timeout, $translate, $filter) {
  return {
    restrict: 'A',
    require: ['ngValidateAlert', 'ngModel'],
    scope: false,
    controller: function controller() {},
    link: function link($scope, $element, $attrs, controllers) {
      var $ctrl = controllers[0];
      var $model = controllers[1];
      var alertContainer;

      if ($element.parent().attr('ng-form')) {
        // control additionally internally wrapped to div[ng-form] e.g. ffDate
        alertContainer = $element.parent().parent().parent()[0].querySelector('ff-label');
      } else {
        // normal case
        alertContainer = $element.parent().parent()[0].querySelector('ff-label');
      } // if ff-label found, will use it, otherwise will use our parent


      alertContainer = alertContainer ? angular.element(alertContainer) : $element.parent();
      var alert = angular.element(document.createElement('div')).addClass('ng-validate-alert').toggleClass('top', $element.attr('type') === 'checkbox' || alertContainer[0].tagName.toLowerCase() !== 'ff-label').attr('role', 'alert');
      alertContainer.append(alert);
      /**
       * Bind updateAlert when element receives focus
       */

      $element.on('focus', function () {
        $element.on($element.attr('type') === 'checkbox' ? 'change' : 'input', updateAlert);
        updateAlert();
      });
      /**
       * Unbind updateAlert when element looses focus, hide and clear the alert
       */

      $element.on('blur', function () {
        $element.off($element.attr('type') === 'checkbox' ? 'change' : 'input', updateAlert);
        alert.removeClass('visible').html('');
      });
      /**
       * Update Alert
       */

      function updateAlert() {
        $timeout(function () {
          if (!$model.$invalid || !$model.$touched && !$model.$dirty && !$model.$error.ext) return alert.removeClass('visible').html('');
          var options;

          try {
            options = $scope.$eval($attrs.ngValidateAlert); // assume options is object like { field: 'Test Field' }
          } catch (err) {}

          if (!options) options = {
            field: $attrs.ngValidateAlert
          }; // if not object, then string - field name

          var msg = getValidationMessage(options);
          if (msg) alert.addClass('visible').html(msg);
        }, 200);
      }
      /**
       * Get validation message
       */


      function getValidationMessage(options) {
        if ($model.$error.required) return options.required || $translate.instant('GLOBAL.VALIDATION.REQUIRED', options);
        if ($model.$error.date || $model.$error.parse && $element.hasClass('ff-date')) return options.date || $translate.instant('GLOBAL.VALIDATION.DATE', options);
        if ($model.$error.time || $model.$error.parse && $element.hasClass('ff-time')) return (options.time || $translate.instant('GLOBAL.VALIDATION.TIME', options)).replace('Date', 'Time');
        if ($model.$error.email) return options.email || $translate.instant('GLOBAL.VALIDATION.EMAIL', options);
        if ($model.$error.url) return options.url || $translate.instant('GLOBAL.VALIDATION.URL', options);
        if ($model.$error.minlength) return options.minlength || $translate.instant('GLOBAL.VALIDATION.MIN_LENGTH', {
          minLength: $attrs.ngMinlength || $attrs.minlength,
          field: options.field
        });
        if ($model.$error.maxlength) return options.maxlength || $translate.instant('GLOBAL.VALIDATION.MAX_LENGTH', {
          maxlength: $attrs.ngMaxlength || $attrs.maxlength,
          field: options.field
        });
        if ($model.$error.number) return options.number || $translate.instant('GLOBAL.VALIDATION.NUMBER', options);
        if ($model.$error.price) return options.price || $translate.instant('GLOBAL.VALIDATION.PRICE', options);
        if ($model.$error.pattern) return options.pattern;
        if ($model.$error.match) return options.match || $translate.instant('GLOBAL.VALIDATION.MATCH', options);
        if ($model.$error.cctype) return options.cctype || $translate.instant('GLOBAL.VALIDATION.CC_TYPE', $ctrl);
        if ($model.$error.ccnumber) return options.ccnumber || $translate.instant('GLOBAL.VALIDATION.CC_NUMBER', options);
        if ($model.$error.unique) return options.unique || $translate.instant('GLOBAL.VALIDATION.UNIQUE', options);

        if ($model.$error.lte) {
          var ngLte = $scope.$eval($attrs.ngLte);
          if (angular.isUndefined(ngLte)) ngLte = $attrs.ngLte;
          return options.lte || $translate.instant('GLOBAL.VALIDATION.LTE', {
            field: options.field,
            value: ngLte
          });
        }

        if ($model.$error.lt) {
          var ngLt = $scope.$eval($attrs.ngLt);
          if (angular.isUndefined(ngLt)) ngLt = $attrs.ngLt;
          return options.lt || $translate.instant('GLOBAL.VALIDATION.LT', {
            field: options.field,
            value: ngLt
          });
        }

        if ($model.$error.gte) {
          var ngGte = $scope.$eval($attrs.ngGte);
          if (angular.isUndefined(ngGte)) ngGte = $attrs.ngGte;
          return options.gte || $translate.instant('GLOBAL.VALIDATION.GTE', {
            field: options.field,
            value: ngGte
          });
        }

        if ($model.$error.gt) {
          var ngGt = $scope.$eval($attrs.ngGt);
          if (angular.isUndefined(ngGt)) ngGt = $attrs.ngGt;
          return options.gt || $translate.instant('GLOBAL.VALIDATION.GT', {
            field: options.field,
            value: ngGt
          });
        }

        if ($model.$error.dateOrder || $model.$error.timeOrder) {
          if (angular.isString(options.late)) return $translate.instant('GLOBAL.VALIDATION.DATE_BEFORE', {
            field: options.field,
            value: options.late
          });
          if (angular.isString(options.early)) return $translate.instant('GLOBAL.VALIDATION.DATE_AFTER', {
            field: options.field,
            value: options.early
          });
        }

        if ($model.$error.dateDiff) {
          if (angular.isString(options.late)) return $translate.instant('GLOBAL.VALIDATION.DATE_DIFF', {
            field: options.field,
            refField: options.late,
            value: $filter('hours')($attrs.ngDateDiff)
          });
          if (angular.isString(options.early)) return $translate.instant('GLOBAL.VALIDATION.DATE_DIFF', {
            field: options.field,
            refField: options.early,
            value: $filter('hours')($attrs.ngDateDiff)
          });
        }

        if ($model.$error.notContain) return options.notContain;
        if ($model.$error.font) return options.font || $translate.instant('GLOBAL.VALIDATION.FONT');
        if ($model.$error.custom) return $translate.instant(options.custom || options.field, options);
      }
    }
  };
}]));

/***/ }),

/***/ "./common/flex-forms/validation/ng-validate-alert.scss":
/*!*************************************************************!*\
  !*** ./common/flex-forms/validation/ng-validate-alert.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ })

}]);
//# sourceMappingURL=main~._common_flex-forms_c.js.map?_rev=65738d60315859bb1e6f