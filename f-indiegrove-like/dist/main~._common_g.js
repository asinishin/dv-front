(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main~._common_g"],{

/***/ "./common/global-config.js":
/*!*********************************!*\
  !*** ./common/global-config.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "../node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Global configuration module, contains config part only
 */
angular.module('deskworks.globalConfig', ['ngRoute', 'ngStorage', 'tmh.dynamicLocale', 'pascalprecht.translate', 'dateFilters', 'setLocale', 'setTranslations', 'resolveTimezone', 'deskworks.config', // 'deskworks.translationCache',
'deskworks.setup.service', 'userTasksPolicy', 'resolveGtm', 'sessionInjector', 'sessionRefresher']).config(["$httpProvider", "$localStorageProvider", "$routeProvider", "$locationProvider", "$translateProvider", "$qProvider", "deskworksConfigProvider", "tmhDynamicLocaleProvider", function ($httpProvider, $localStorageProvider, $routeProvider, $locationProvider, $translateProvider, $qProvider, deskworksConfigProvider, tmhDynamicLocaleProvider) {
  'use strict';

  $httpProvider.defaults.withCredentials = true;
  $localStorageProvider.setKeyPrefix('dw');
  $locationProvider.html5Mode(true).hashPrefix(''); // $qProvider.errorOnUnhandledRejections(false);

  /**
   * Session interceptors
   */

  $httpProvider.interceptors.push('sessionInjector');
  $httpProvider.interceptors.push('sessionRefresher');
  $translateProvider.fallbackLanguage('en').preferredLanguage('en') // .useLoaderCache('$translationCache')
  .useLoader('$translatePartialLoader', {
    urlTemplate: 'translations/{part}-{lang}.json',
    loadFailureHandler: '$translateErrorHandler'
  }).useSanitizeValueStrategy('sceParameters').addInterpolation('$translateMessageFormatInterpolation'); // tmhDynamicLocaleProvider.localeLocationPattern('assets/locales/angular-locale_{{locale}}.js?_rev={{_rev}}');

  tmhDynamicLocaleProvider.defaultLocale('en-us');
  deskworksConfigProvider.setApiUrl('/api/v1'); // deskworksConfigProvider.setApiPostfix('.json');

  /**
   * Default route handler
   */

  $routeProvider.otherwise({
    redirectTo: function redirectTo(routeParams, path, search) {
      var _context;

      // redirect with passing all search params
      var searchStr = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(search)).call(_context, function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(search[k]);
      }).join('&');

      return deskworksConfigProvider.getDefaultRoute() + (searchStr.length > 0 ? '?' + searchStr : '');
    }
  });
  /**
   * Patch $routeProvider.when method to auto-add resolveLocale dependency to routes with 'module' property
   */

  $routeProvider.whenOrig = $routeProvider.when;

  $routeProvider.when = function (path, route) {
    route.resolve = route.resolve || {};
    route.resolve.resolveLocale = ['$q', '$rootScope', 'dwAlerts', 'setLocale', 'setTranslations', 'setupService', function ($q, $rootScope, dwAlerts, setLocale, setTranslations, setupService) {
      return setupService.getSetupSettings().catch(function (err) {
        return dwAlerts.error(err, 'Failed to get setup settings.');
      }).then(function (settings) {
        $rootScope.settings = settings;
        return $q.all([setLocale(settings), setTranslations(route.translations || [], settings.locale)]);
      });
    }];
    route.resolve.resolveTimezone = ['resolveTimezone', function (resolveTimezone) {
      return resolveTimezone();
    }];
    route.resolve.userTasksPolicy = ['userTasksPolicy', function (userTasksPolicy) {
      return userTasksPolicy();
    }];
    route.resolve.resolveGtm = ['resolveGtm', function (resolveGtm) {
      return resolveGtm();
    }];
    return $routeProvider.whenOrig(path, route); // call original when(path, route)
  };
}]);

/***/ }),

/***/ "./common/members/members.module.js":
/*!******************************************!*\
  !*** ./common/members/members.module.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('deskworks.members', ['deskworks.members.userProfile', 'deskworks.members.billingProfile.edit', 'deskworks.members.userSearch', 'deskworks.OurMembersCtrl']);

/***/ }),

/***/ "./common/members/our-members/our-member-modal.controller.js":
/*!*******************************************************************!*\
  !*** ./common/members/our-members/our-member-modal.controller.js ***!
  \*******************************************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3__);




angular.module('deskworks.OurMemberModalCtrl', []).controller('OurMemberModalCtrl', ["$scope", "close", "member", function ($scope, close, member) {
  'use strict';

  var _context, _context2, _context3, _context4;

  var $ctrl = this;
  $scope.close = close;
  $scope.member = member;
  $scope.emails = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(_context = member.fields).call(_context, function (field) {
    return field.type === 'email';
  });
  $scope.phones = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = member.fields).call(_context2, function (field) {
    return field.type === 'phone';
  });
  $scope.urls = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = member.fields).call(_context3, function (field) {
    return field.type === 'url';
  });
  $scope.fields = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = member.fields).call(_context4, function (field) {
    return ['email', 'phone', 'url'].indexOf(field.type) < 0;
  });
  if (member.email) $scope.emails.unshift({
    value: member.email
  });
  $scope.urls.forEach(function (field) {
    var name = (field.name || '').toLowerCase();
    var value = (field.value || '').toLowerCase();
    if (name.indexOf('facebook') >= 0 || value.indexOf('facebook.com') >= 0) field.icon = 'fa-facebook-square';else if (name.indexOf('twitter') >= 0 || value.indexOf('twitter.com') >= 0) field.icon = 'fa-twitter-square';else if (name.indexOf('linkedin') >= 0 || value.indexOf('linkedin.com') >= 0) field.icon = 'fa-linkedin-square';else if (name.indexOf('github') >= 0 || value.indexOf('github.com') >= 0) field.icon = 'fa-github-square';else if (name.indexOf('youtube') >= 0 || value.indexOf('youtube.com') >= 0) field.icon = 'fa-youtube-square';else if (name.indexOf('vimeo') >= 0 || value.indexOf('vimeo.com') >= 0) field.icon = 'fa-vimeo-square';else if (name.match(/google(?:\s|-)?(?:plus|\+)/) || value.indexOf('plus.google.com') >= 0) field.icon = 'fa-google-plus-square';else field.icon = 'fa-globe';
  });
}]);

/***/ }),

/***/ "./common/members/our-members/our-member-modal.tpl.html":
/*!**************************************************************!*\
  !*** ./common/members/our-members/our-member-modal.tpl.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"dw-modal\"> <div class=\"dw-modal-fade\" ng-click=\"close()\"></div> <div class=\"dw-modal-dialog our-member-modal\"> <div class=\"dw-modal-scroll\"> <div class=\"our-member-header\"> <ff-img ff-src=\"{{::member.photo}}\" ng-if=\"::member.photo\" ff-alt=\"{{::member.name}}\"></ff-img> <div class=\"our-member-details\"> <h4>{{::member.name}}</h4> <h5>{{::member.occupation}}</h5> <h6>{{::member.company}}</h6> <div class=\"our-member-contacts\" ng-if=\"::emails.length || phones.length\"> <div class=\"our-member-emails\" ng-if=\"::emails.length\"> <span ng-repeat=\"field in ::emails\"> <i class=\"fa fa-at\"></i> <a ng-href=\"mailto:{{::field.value}}\" target=\"_blank\" rel=\"noopener\">{{::field.value}}</a> </span> </div> <div class=\"our-member-phones\" ng-if=\"::phones.length\"> <span ng-repeat=\"field in ::phones\"> <i class=\"fa fa-phone\"></i> <a ng-href=\"tel:{{::field.value}}\" target=\"_blank\" rel=\"noopener\">{{::field.value}}</a> </span> </div> </div> <div class=\"our-member-urls\" ng-if=\"::urls.length\"> <span ng-repeat=\"field in ::urls\"> <a ng-href=\"{{::field.value}}\" target=\"_blank\" rel=\"noopener\" title=\"{{::field.name}}\"><i class=\"fa\" ng-class=\"::field.icon\"></i></a> </span> </div> </div> </div> <div ng-repeat=\"field in ::fields\" class=\"our-member-field\"> <span>{{::field.name}}:</span>&nbsp;<span>{{::field.type === 'date' ? (field.value | date:'mediumDate') : field.value}}</span> </div> </div> <button class=\"dw-modal-cross\" ng-click=\"close()\"></button> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/our-members/our-members-embedding.directive.js":
/*!***********************************************************************!*\
  !*** ./common/members/our-members/our-members-embedding.directive.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _our_members_embedding_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./our-members-embedding.tpl.html */ "./common/members/our-members/our-members-embedding.tpl.html");
/* harmony import */ var _our_members_embedding_tpl_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_our_members_embedding_tpl_html__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.ourMembersEmbeddingDirective', ['deskworks.config']).directive('ourMembersEmbedding', function () {
  return {
    template: _our_members_embedding_tpl_html__WEBPACK_IMPORTED_MODULE_1___default.a,
    restrict: 'E',
    scope: true,
    controller: 'OurMembersEmbeddingDirectiveCtrl as $ctrl',
    bindToController: {}
  };
}).controller('OurMembersEmbeddingDirectiveCtrl', ["$scope", "state", "helper", "deskworksConfig", function ($scope, state, helper, deskworksConfig) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    var origin = deskworksConfig.getApiOrigin();

    $ctrl.getCode = function (_) {
      return helper.join(['<script dw-our-members', +state.getParam('centerId') ? "dw-center-id=\"".concat(state.getParam('centerId'), "\"") : null, "src=\"".concat(origin, "/our-members.js\"></script>")], ' ');
    };
  };
}]));

/***/ }),

/***/ "./common/members/our-members/our-members-embedding.tpl.html":
/*!*******************************************************************!*\
  !*** ./common/members/our-members/our-members-embedding.tpl.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel> <ff-panel-header><span translate=\"OUR_MEMBERS.EMBEDDING.HEADER\"></span></ff-panel-header> <ff-static><span translate=\"OUR_MEMBERS.EMBEDDING.HINT\"></span></ff-static> <ff-static ff-style=\"{'white-space': 'pre-wrap', 'font-family': 'monospace', 'font-size': '.85em', 'line-height': '1.25'}\">{{$ctrl.getCode()}}</ff-static> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/our-members/our-members.controller.js":
/*!**************************************************************!*\
  !*** ./common/members/our-members/our-members.controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _our_members_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./our-members.scss */ "./common/members/our-members/our-members.scss");
/* harmony import */ var _our_members_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_our_members_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/dw-modal/dw-modal.service */ "./shared/dw-modal/dw-modal.service.js");
/* harmony import */ var shared_dw_controls_dw_select_center_dw_select_center_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/dw-controls/dw-select-center/dw-select-center.directive */ "./shared/dw-controls/dw-select-center/dw-select-center.directive.js");










/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.OurMembersCtrl', ['infinite-scroll', 'deskworks.routeHelper', 'deskworks.OurMembers', 'deskworks.OurMemberModalCtrl', 'deskworks.optsOurMembersSort', 'deskworks.ourMembersEmbeddingDirective', shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_8__["default"].name, shared_dw_controls_dw_select_center_dw_select_center_directive__WEBPACK_IMPORTED_MODULE_9__["default"].name]).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/our-members', {
    templateUrl: 'members/our-members/our-members.tpl.html',
    controller: 'OurMembersCtrl as $ctrl',
    routeBranch: 'our-members',
    translations: ['our-members'],
    reloadOnSearch: false,
    userTasksPolicy: false,
    resolve: {
      auth: ["$route", "routeHelper", function auth($route, routeHelper) {
        return routeHelper.auth(null).then(function () {
          $route.current.$$route.hideSidebar = false;
        }).catch(function () {
          $route.current.$$route.hideSidebar = true;
        });
      }]
    }
  });
}]).controller('OurMembersCtrl', ["$scope", "$translate", "$location", "$q", "dwModal", "dwAlerts", "state", "helper", "session", "OurMembers", "optsOurMembersSort", function ($scope, $translate, $location, $q, dwModal, dwAlerts, state, helper, session, OurMembers, optsOurMembersSort) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('OUR_MEMBERS.PAGE_TITLE'));
  $ctrl.optsSort = optsOurMembersSort;
  $ctrl.params = {
    centerId: state.getCurrentCenterId(),
    sort: 'name',
    offset: 0,
    limit: 100
  };
  resetData();
  watchCenterId();
  watchSort();
  watchSearch();
  watchParams();
  /**
   * Fetch
   */

  $ctrl.fetch = function () {
    if ($ctrl.eof || $ctrl.fetching) return $ctrl.fetching;
    $ctrl.fetching = OurMembers.query($ctrl.params).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query our members.');
    }).finally(function () {
      $ctrl.fetching = null;
    }).then(function (members) {
      var _context;

      $ctrl.members = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.members).call(_context, members);
      $ctrl.params.offset += members.length;
      $ctrl.eof = members.length < $ctrl.params.limit;
    });
  };
  /**
   * View member details
   */


  $ctrl.view = function (member) {
    dwModal.show({
      scope: $scope,
      templateUrl: 'members/our-members/our-member-modal.tpl.html',
      controller: 'OurMemberModalCtrl',
      inputs: {
        member: member
      }
    });
  };

  $ctrl.isEmbeddingVisible = function (_) {
    return $ctrl.members.length && !$ctrl.fetching && session.isAdmin();
  };
  /**
   * watchParams
   */


  function watchParams() {
    $scope.$watchGroup(['$ctrl.params.centerId', '$ctrl.params.sort', '$ctrl.params.q'], function (newVal, oldVal) {
      if (newVal.some(function (param, idx) {
        return param !== oldVal[idx];
      })) {
        $q.when($ctrl.fetching).finally(function () {
          resetData();
          $ctrl.fetch();
        });
      }
    });
  }
  /**
   * Reset data
   */


  function resetData() {
    $ctrl.members = [];
    $ctrl.params.offset = 0;
    $ctrl.eof = false;
  }
  /**
   * Map centerId to URL search param
   */


  function watchCenterId() {
    $scope.$watch(function () {
      return $location.search().centerId;
    }, function (val) {
      $ctrl.params.centerId = angular.isDefined(val) ? +val : state.getCurrentCenterId();
    });
    $scope.$watch('$ctrl.params.centerId', function (val) {
      $location.search('centerId', val).replace();
    });
  }
  /**
   * Map sort to URL search param
   */


  function watchSort() {
    $scope.$watch(function () {
      return _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default()($location.search());
    }, function (val) {
      $ctrl.params.sort = val || 'name';
    });
    $scope.$watch('$ctrl.params.sort', function (val) {
      $location.search('sort', val).replace();
    });
  }
  /**
   * Map search to URL search param
   */


  function watchSearch() {
    $scope.$watch(function () {
      return $location.search().q;
    }, function (val) {
      $ctrl.params.q = val || '';
    });
    $scope.$watch('$ctrl.params.q', function (val) {
      $location.search('q', val || undefined).replace();
    });
  }
}]));

/***/ }),

/***/ "./common/members/our-members/our-members.scss":
/*!*****************************************************!*\
  !*** ./common/members/our-members/our-members.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/members/our-members/our-members.tpl.html":
/*!*********************************************************!*\
  !*** ./common/members/our-members/our-members.tpl.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"our-members\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel class=\"our-members-toolbar ff-no-frame\"> <div class=\"ff-grid gutter-h-half\"> <label class=\"ff-row\" flex=\"{md: '0 0 40%'}\"> <ff-label flex=\"0 0 70px\"><span translate=\"OUR_MEMBERS.CENTER\"></span></ff-label> <dw-select-center ff-model=\"$ctrl.params.centerId\" ff-option-all=\"true\"></dw-select-center> </label> <label class=\"ff-row\" flex=\"{md: '0 0 30%'}\"> <ff-label flex=\"0 0 70px\"><span translate=\"OUR_MEMBERS.SORT\"></span></ff-label> <ff-select name=\"sort\" ff-model=\"$ctrl.params.sort\" ff-options=\"sort.id as sort.name for sort in $ctrl.optsSort\"></ff-select> </label> <label class=\"ff-row\" flex=\"{md: '0 0 30%'}\"> <ff-label flex=\"0 0 70px\"><span translate=\"OUR_MEMBERS.SEARCH\"></span></ff-label> <ff-text name=\"search\" ff-model=\"$ctrl.params.q\" ff-model-options=\"{ debounce: 1000 }\"></ff-text> </label> </div> </ff-panel> <our-members-embedding ng-if=\"$ctrl.isEmbeddingVisible()\"></our-members-embedding> <ff-panel ng-if=\"!$ctrl.members.length && !$ctrl.fetching\"><span translate=\"OUR_MEMBERS.EMPTY\"></span></ff-panel> <div class=\"our-members-container\" infinite-scroll=\"$ctrl.fetch()\" infinite-scroll-distance=\"2\" infinite-scroll-container=\"'.snap-content-scroller'\"> <div class=\"our-member\" ng-repeat=\"member in $ctrl.members\" ng-click=\"$ctrl.view(member)\"> <ff-img ff-src=\"{{::member.photo}}\" ff-alt=\"{{::member.name}}\"></ff-img> <h5>{{::member.name}}</h5> <h6>{{::member.occupation}}</h6> </div> <div ff-spin=\"true\" class=\"our-members-spin\" ng-if=\"$ctrl.fetching\"></div> </div> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/billing-sections/payment-method-has-delete.service.js":
/*!*******************************************************************************************!*\
  !*** ./common/members/user-profile/billing-sections/payment-method-has-delete.service.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.paymentMethodHasDelete', ['session', 'deskworks.userProfile.service']).factory('paymentMethodHasDelete', ["session", "userProfileService", function (session, userProfileService) {
  return function (params) {
    var methods = params.methods,
        method = params.method,
        single = params.single,
        editMode = params.editMode,
        reg = params.reg;
    var isNew = userProfileService.creditCard.isNew;

    var newCount = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(methods).call(methods, function (m) {
      return isNew(m);
    }).length;

    var oldCount = methods.length - newCount;
    if (session.isAdmin() && reg) return isNew(method) ? newCount > 1 || oldCount > 0 : oldCount > 1;
    return !isNew(method) && !editMode && oldCount > 1;
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/billing-sections/up-billing-method.directive.js":
/*!*************************************************************************************!*\
  !*** ./common/members/user-profile/billing-sections/up-billing-method.directive.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6__);








/**
 * upBillingMethod directive - Billing Profile -> Billing Method
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upBillingMethod', ['autoSave', 'deskworks.helper', 'deskworks.state', 'deskworks.userProfile.service', 'deskworks.userProfile.optsBillingMethod']).directive('upBillingMethod', function () {
  var templateUrl = 'members/user-profile/billing-sections/up-billing-method.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upBillingMethodCtrl as $ctrl',
    bindToController: {
      user: '<',
      reg: '<',
      settings: '<',
      single: '<',
      autoSave: '<',
      newPaymentMethods: '<'
    }
  };
}).controller('upBillingMethodCtrl', ["$scope", "$timeout", "dwAlerts", "helper", "state", "session", "userProfileService", "optsBillingMethod", "autoSave", function ($scope, $timeout, dwAlerts, helper, state, session, userProfileService, optsBillingMethod, autoSave) {
  var $ctrl = this;
  var isUid = helper.isUid;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $ctrl.prevState = {};
    $ctrl.onChange(true); // initial update

    $scope.$watch(function () {
      var _context, _context2;

      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = $ctrl.user.creditCards).call(_context2, $ctrl.user.eChecks)).call(_context, function (cc) {
        return {
          id: cc.id
        };
      });
    }, function (nv, ov) {
      return $ctrl.autoSelectJustSaved(nv, ov);
    }, true);
    $scope.$watchCollection(function () {
      var _context3, _context4, _context5;

      return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context5 = $ctrl.user.creditCards).call(_context5, $ctrl.user.eChecks)).call(_context4, function (cc) {
        return $ctrl.newPaymentMethods || cc.id && !helper.isUid(cc.id);
      })).call(_context3, function (cc) {
        return cc.id + cc.number || '' + cc.bankRoutingNumber || '' + cc.bankAccountNumber || '';
      });
    }, function (newVal, oldVal) {
      if (oldVal !== newVal) $ctrl.onChange();
    });
  };
  /**
   * Auto-select just saved payment method
   */


  $ctrl.autoSelectJustSaved = function (nv, ov) {
    var billingMethods = $ctrl.getBillingMethods();

    if (nv && ov) {
      // autoselect just saved payment method
      var paymentMethod = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default()(nv).call(nv, function (newMethod, idx) {
        var oldMethod = ov[idx] || {};
        return !isUid(newMethod.id) && isUid(oldMethod.id);
      });

      if (paymentMethod) {
        var _context6;

        var billingMethod = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default()(_context6 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(billingMethods).call(billingMethods, function (bm) {
          return bm.paymentMethodKey;
        })).call(_context6, function (bm) {
          var _context7;

          return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default()(_context7 = $ctrl.user[bm.paymentMethodKey]).call(_context7, function (pm) {
            return pm.id === paymentMethod.id;
          });
        });

        if (billingMethod) {
          $ctrl.user.billingMethod = billingMethod.id;
          $ctrl.user.paymentMethodId = paymentMethod.id;
        }
      }
    }
  };
  /**
   * Change handler
   */


  $ctrl.onChange = function () {
    var _context10;

    var initialUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var billingMethods = $ctrl.getBillingMethods(); // if (!initialUpdate || $ctrl.reg) $ctrl.user.billingMethod = $ctrl.user.billingMethod || billingMethods[0].id;

    if (!initialUpdate || $ctrl.reg) {
      var bm = billingMethods[0];

      if (bm.paymentMethodKey && !$ctrl.user[bm.paymentMethodKey].length && billingMethods[1] && billingMethods[1].paymentMethodKey && $ctrl.user[billingMethods[1].paymentMethodKey].length) {
        bm = billingMethods[1];
      }

      $ctrl.user.billingMethod = $ctrl.user.billingMethod || bm.id;
    }

    $ctrl.billingMethod = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default()(billingMethods).call(billingMethods, function (i) {
      return i.id === $ctrl.user.billingMethod;
    });
    $ctrl.optsPaymentMethod = [];

    if ($ctrl.billingMethod && $ctrl.billingMethod.paymentMethodKey) {
      var _context8, _context9;

      // Attempt to auto-select methods on default method deletion
      // if ($ctrl.user[$ctrl.billingMethod.paymentMethodKey].length === 0) {
      //   billingMethods.find(bm => { // if empty billingMethod, try to find non-empty
      //     if (bm.paymentMethodKey && $ctrl.user[bm.paymentMethodKey].length > 0 && $ctrl.user.billingMethod !== bm.id) {
      //       $ctrl.user.billingMethod = bm.id;
      //       $ctrl.user.paymentMethodId = $ctrl.user[bm.paymentMethodKey][0].id;
      //       return true;
      //     }
      //   });
      // }
      $ctrl.optsPaymentMethod = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context8 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(_context9 = $ctrl.user[$ctrl.billingMethod.paymentMethodKey]).call(_context9, function (cc) {
        return $ctrl.newPaymentMethods || cc.id && !helper.isUid(cc.id);
      })).call(_context8, function (method) {
        return {
          id: method.id,
          name: method.number || method.bankRoutingNumber && [method.bankRoutingNumber, method.bankAccountNumber].join(' / ') || '[new]'
        };
      });
    }

    $ctrl.paymentMethod = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default()(_context10 = $ctrl.optsPaymentMethod).call(_context10, function (i) {
      return i.id === $ctrl.user.paymentMethodId;
    });

    if ($ctrl.paymentMethod) {
      $ctrl.user.paymentMethodId = $ctrl.paymentMethod.id;
    } else {
      if ((!initialUpdate || $ctrl.reg) && $ctrl.optsPaymentMethod.length) {
        $ctrl.user.paymentMethodId = $ctrl.optsPaymentMethod[0].id;
      } else {
        $ctrl.user.paymentMethodId = null;
      }
    }

    if ($ctrl.autoSave === false) return; // skip auto-saving

    $timeout(function () {
      if (helper.pointFirstInvalid('#upBillingMethod')) return;
      var currState = {
        billingMethod: $ctrl.user.billingMethod,
        paymentMethodId: $ctrl.user.paymentMethodId
      };

      if (initialUpdate) {
        $ctrl.prevState = currState;
      } else {
        if (!angular.equals($ctrl.prevState, currState)) {
          $ctrl.save().then(function () {
            $ctrl.prevState = currState;
          });
        }
      }
    }, 100);
  }; // /**
  //  * Change handler
  //  */
  // $ctrl.onChange = (initialUpdate) => {
  //   if (!initialUpdate || $ctrl.reg) $ctrl.user.billingMethod = $ctrl.user.billingMethod || $ctrl.getBillingMethods()[0].id;
  //   $ctrl.billingMethod = $ctrl.getBillingMethods().find(i => i.id === $ctrl.user.billingMethod);
  //   $ctrl.optsPaymentMethod = [];
  //   if ($ctrl.billingMethod && $ctrl.billingMethod.paymentMethodKey) {
  //     $ctrl.optsPaymentMethod = $ctrl.user[$ctrl.billingMethod.paymentMethodKey]
  //       .filter(cc => $ctrl.newPaymentMethods || (cc.id && !helper.isUid(cc.id)))
  //       .map(method => ({
  //         id: method.id,
  //         name: method.number || method.bankRoutingNumber && [method.bankRoutingNumber, method.bankAccountNumber].join(' / ') || '[new]',
  //       }));
  //   }
  //   $ctrl.paymentMethod = $ctrl.optsPaymentMethod.find(i => i.id === $ctrl.user.paymentMethodId);
  //   if ($ctrl.paymentMethod) {
  //     $ctrl.user.paymentMethodId = $ctrl.paymentMethod.id;
  //   } else {
  //     if ((!initialUpdate || $ctrl.reg)  && $ctrl.optsPaymentMethod.length) {
  //       $ctrl.user.paymentMethodId = $ctrl.optsPaymentMethod[0].id;
  //     } else {
  //       $ctrl.user.paymentMethodId = null;
  //     }
  //   }
  //   if ($ctrl.autoSave === false) return; // skip auto-saving
  //   $timeout(() => {
  //     if (helper.pointFirstInvalid('#upBillingMethod')) return;
  //     const currState = { billingMethod: $ctrl.user.billingMethod, paymentMethodId: $ctrl.user.paymentMethodId };
  //     if (initialUpdate) {
  //       $ctrl.prevState = currState;
  //     } else {
  //       if (!angular.equals($ctrl.prevState, currState)) {
  //         $ctrl.save()
  //           .then(() => { $ctrl.prevState = currState; });
  //       }
  //     }
  //   }, 100);
  // };

  /**
   * Get Billing Methods
   */


  $ctrl.getBillingMethods = function () {
    return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_5___default()(optsBillingMethod).call(optsBillingMethod, function (method) {
      return !method.restricted || session.isAdmin() || $ctrl.prevState && $ctrl.prevState.billingMethod === method.id;
    });
  };
  /**
   * Save
   */


  $ctrl.save = autoSave.wrap(saveFunc);

  function saveFunc() {
    var data = {
      billingMethod: $ctrl.user.billingMethod,
      paymentMethodId: $ctrl.user.paymentMethodId
    };
    $ctrl.saving = true;
    return userProfileService.updateRaw(state.getCurrentCenterId(), $ctrl.user, data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save billing method.');
    }).finally(function () {
      $ctrl.saving = false;
    });
  }
}]));

/***/ }),

/***/ "./common/members/user-profile/billing-sections/up-billing-method.tpl.html":
/*!*********************************************************************************!*\
  !*** ./common/members/user-profile/billing-sections/up-billing-method.tpl.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"upBillingMethod\" class=\"ff-grid gutter-h\"> <ff-panel flex=\"{lg: '0 0 50%'}\"> <ff-spin ng-if=\"$ctrl.saving\"></ff-spin> <ff-header><span translate=\"BILLING_PROFILE.BILLING_METHOD\"></span></ff-header> <div class=\"ff-grid\"> <label flex=\"{md: '0 0 50%'}\"> <ff-select ff-model=\"$ctrl.user.billingMethod\" ff-required=\"true\" ff-change=\"$ctrl.onChange()\" ff-options=\"opt.id as opt.name for opt in $ctrl.getBillingMethods()\" ff-validate-alert=\"{{'BILLING_PROFILE.BILLING_METHOD' | translate}}\" aria-label=\"{{'BILLING_PROFILE.BILLING_METHOD' | translate}}\"></ff-select> </label> <label flex=\"{md: '0 0 50%'}\" ng-if=\"$ctrl.billingMethod.paymentMethodKey\"> <ff-select ff-model=\"$ctrl.user.paymentMethodId\" ff-required=\"true\" ff-change=\"$ctrl.onChange()\" ff-options=\"opt.id as opt.name for opt in $ctrl.optsPaymentMethod\" ff-validate-alert=\"{{'BILLING_PROFILE.PAYMENT_METHOD' | translate}}\" aria-label=\"{{'BILLING_PROFILE.PAYMENT_METHOD' | translate}}\"></ff-select> </label> </div> </ff-panel> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/billing-sections/up-credit-cards.directive.js":
/*!***********************************************************************************!*\
  !*** ./common/members/user-profile/billing-sections/up-credit-cards.directive.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_dw_controls_dw_address_dw_address_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/dw-controls/dw-address/dw-address.directive */ "./shared/dw-controls/dw-address/dw-address.directive.js");
/* harmony import */ var shared_dw_controls_dw_credit_card_dw_credit_card_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/dw-controls/dw-credit-card/dw-credit-card.directive */ "./shared/dw-controls/dw-credit-card/dw-credit-card.directive.js");



/**
 * upCreditCards directive - 'Credit Cards' section of user profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upCreditCards', ['deskworks.helper', 'deskworks.state', 'deskworks.userProfile.service', 'deskworks.paymentMethodHasDelete', shared_dw_controls_dw_address_dw_address_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_dw_controls_dw_credit_card_dw_credit_card_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name]).directive('upCreditCards', function () {
  var templateUrl = 'members/user-profile/billing-sections/up-credit-cards.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upCreditCardsCtrl as $ctrl',
    bindToController: {
      user: '<userProfile',
      reg: '<',
      settings: '<',
      single: '<'
    }
  };
}).controller('upCreditCardsCtrl', ["$scope", "$element", "$attrs", "$q", "$window", "$translate", "dwAlerts", "helper", "state", "userProfileService", "paymentMethodHasDelete", function ($scope, $element, $attrs, $q, $window, $translate, dwAlerts, helper, state, userProfileService, paymentMethodHasDelete) {
  var $ctrl = this;
  /**
   * New CC factory
   */

  $ctrl.new = function () {
    var cc = userProfileService.creditCard.new($ctrl.user);
    cc.type = $ctrl.settings.creditCardTypes[0];
    return cc;
  };

  $ctrl.isNew = userProfileService.creditCard.isNew;
  /**
   * Check if payment method has delete button
   */

  $ctrl.hasDeleteButton = function (method, ffBlock) {
    var _context;

    return paymentMethodHasDelete({
      method: method,
      methods: _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.user.creditCards).call(_context, $ctrl.user.eChecks),
      single: $ctrl.single,
      editMode: ffBlock.editMode,
      reg: $ctrl.reg
    });
  };
  /**
   * Save button handler.
   */


  $ctrl.save = function (cc) {
    return userProfileService.creditCard.save(state.getCurrentCenterId(), $ctrl.user.id, cc).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save credit card.');
    });
  };
  /**
   * Delete button handler.
   */


  $ctrl.delete = function (cc) {
    if (userProfileService.creditCard.isNew(cc)) return $q.when();
    if (!$window.confirm($translate.instant('BILLING_PROFILE.CREDIT_CARDS.CONFIRM_DELETE'))) return $q.reject();
    return userProfileService.creditCard.delete(state.getCurrentCenterId(), $ctrl.user.id, cc).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete credit card.');
    });
  };

  $ctrl.showSwitchACH = function () {
    var _$ctrl$user = $ctrl.user,
        creditCards = _$ctrl$user.creditCards,
        eChecks = _$ctrl$user.eChecks;
    return $ctrl.single && $ctrl.settings.enableEChecks && !eChecks.length && (!creditCards.length || userProfileService.creditCard.isNew(creditCards[0]));
  };

  $ctrl.switchACH = function () {
    var check = userProfileService.eCheck.new($ctrl.user);
    $ctrl.user.eChecks = [check];
    $ctrl.user.creditCards = [];
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/billing-sections/up-credit-cards.tpl.html":
/*!*******************************************************************************!*\
  !*** ./common/members/user-profile/billing-sections/up-credit-cards.tpl.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"upCreditCards\" class=\"ff-grid gutter-v gutter-h\" ff-section=\"cc in $ctrl.user.creditCards\" ff-section-new=\"$ctrl.new()\"> <ff-panel flex=\"{{ $ctrl.single ? null : {lg: '0 0 50%'} }}\" ng-if=\"!$ctrl.user.creditCards.length\"> <span translate=\"BILLING_PROFILE.CREDIT_CARDS.EMPTY\"></span> </ff-panel> <ff-panel flex=\"{sm: '0 0 85%', md: '0 0 70%', lg: '0 0 50%'}\" id=\"{{'upCreditCard-' + cc.id}}\" ff-block ff-block-save=\"$ctrl.save(cc)\" ff-block-delete=\"$ctrl.delete(cc)\" ff-block-edit-default=\"$ctrl.isNew(cc)\" ff-block-is-new=\"$ctrl.isNew(cc)\"> <div class=\"ff-grid gutter-v\"> <ff-panel> <ff-header> <div class=\"ff-grid\"> <span flex=\"auto\" translate=\"BILLING_PROFILE.CREDIT_CARDS.HEADER\"></span> <ff-btn-group flex=\"none\" class=\"ff-btn-full\" ng-if=\"$ctrl.showSwitchACH()\" style=\"margin:-.55rem 0 -.25rem 0\"> <ff-btn sense=\"add\" size=\"sm\" ff-click=\"$ctrl.switchACH()\" style=\"font-size:.85rem;line-height:1.25\"> <span translate=\"BILLING_PROFILE.E_CHECKS.BTN_ADD\"></span> </ff-btn> </ff-btn-group> </div> </ff-header> <fieldset dw-credit-card=\"cc\" dw-credit-card-types=\"$ctrl.settings.creditCardTypes\"></fieldset> </ff-panel> <ff-panel> <ff-panel-header><span translate=\"BILLING_PROFILE.CREDIT_CARDS.ADDRESS\"></span></ff-panel-header> <fieldset dw-address=\"cc\" not-required=\"$ctrl.settings.creditCardAddressOptional\"></fieldset> </ff-panel> </div> <ff-btn-group class=\"ff-block-buttons\" ng-if=\"!$ctrl.user.accessRights.billingInfo.readOnly && (!$ctrl.isNew(cc) || !$ctrl.single)\"> <ff-btn ff-btn-block-delete ng-if=\"$ctrl.hasDeleteButton(cc, ffBlock)\" ng-hide=\"false\"></ff-btn> <ff-btn ff-btn-block-save ng-if=\"!$ctrl.reg && !$ctrl.single\"></ff-btn> <ff-btn ff-btn-block-cancel ng-if=\"!$ctrl.reg && !$ctrl.single\"></ff-btn> </ff-btn-group> </ff-panel> <ff-btn-group class=\"ff-btn-full\" ng-if=\"!$ctrl.user.accessRights.billingInfo.readOnly && !$ctrl.single\"> <ff-btn ff-btn-section-new><span translate=\"BILLING_PROFILE.CREDIT_CARDS.BTN_ADD\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/billing-sections/up-e-checks.directive.js":
/*!*******************************************************************************!*\
  !*** ./common/members/user-profile/billing-sections/up-e-checks.directive.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_dw_controls_dw_e_check_dw_e_check_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/dw-controls/dw-e-check/dw-e-check.directive */ "./shared/dw-controls/dw-e-check/dw-e-check.directive.js");


/**
 * upEChecks directive - 'eChecks' section of user profile
 */

angular.module('deskworks.upEChecks', ['deskworks.helper', 'deskworks.state', 'deskworks.userProfile.service', 'deskworks.dwECheck', 'deskworks.paymentMethodHasDelete', shared_dw_controls_dw_e_check_dw_e_check_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name]).directive('upEChecks', function () {
  var templateUrl = 'members/user-profile/billing-sections/up-e-checks.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upEChecksCtrl as $ctrl',
    bindToController: {
      user: '<userProfile',
      reg: '<',
      single: '<'
    }
  };
}).controller('upEChecksCtrl', ["$scope", "$element", "$attrs", "$q", "$window", "$translate", "dwAlerts", "helper", "state", "userProfileService", "paymentMethodHasDelete", function ($scope, $element, $attrs, $q, $window, $translate, dwAlerts, helper, state, userProfileService, paymentMethodHasDelete) {
  var $ctrl = this;

  $ctrl.new = function () {
    return userProfileService.eCheck.new($ctrl.user);
  };

  $ctrl.isNew = userProfileService.eCheck.isNew;
  /**
   * Check if payment method has delete button
   */

  $ctrl.hasDeleteButton = function (method, ffBlock) {
    var _context;

    return paymentMethodHasDelete({
      method: method,
      methods: _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.user.creditCards).call(_context, $ctrl.user.eChecks),
      single: $ctrl.single,
      editMode: ffBlock.editMode,
      reg: $ctrl.reg
    });
  };
  /**
   * Save button handler.
   */


  $ctrl.save = function (check) {
    return userProfileService.eCheck.save(state.getCurrentCenterId(), $ctrl.user.id, check).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save eCheck.');
    });
  };
  /**
   * Delete button handler.
   */


  $ctrl.delete = function (check) {
    if (userProfileService.eCheck.isNew(check)) return $q.when();
    if (!$window.confirm($translate.instant('BILLING_PROFILE.E_CHECKS.CONFIRM_DELETE'))) return $q.reject();
    return userProfileService.eCheck.delete(state.getCurrentCenterId(), $ctrl.user.id, check).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete eCheck.');
    });
  };

  $ctrl.showSwitchCC = function () {
    var _$ctrl$user = $ctrl.user,
        creditCards = _$ctrl$user.creditCards,
        eChecks = _$ctrl$user.eChecks;
    return $ctrl.single && !creditCards.length && (!eChecks.length || userProfileService.eCheck.isNew(eChecks[0]));
  };

  $ctrl.switchCC = function () {
    var cc = userProfileService.creditCard.new($ctrl.user);
    $ctrl.user.creditCards = [cc];
    $ctrl.user.eChecks = [];
  };
}]);

/***/ }),

/***/ "./common/members/user-profile/billing-sections/up-e-checks.tpl.html":
/*!***************************************************************************!*\
  !*** ./common/members/user-profile/billing-sections/up-e-checks.tpl.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"upEChecks\" class=\"ff-grid gutter-v gutter-h\" ff-section=\"check in $ctrl.user.eChecks\" ff-section-new=\"$ctrl.new()\"> <ff-panel flex=\"{{ $ctrl.single ? null : {lg: '0 0 50%'} }}\" ng-if=\"!$ctrl.user.eChecks.length\"> <span translate=\"BILLING_PROFILE.E_CHECKS.EMPTY\"></span> </ff-panel> <ff-panel flex=\"{sm: '0 0 85%', md: '0 0 70%', lg: '0 0 50%'}\" id=\"{{'upECheck-' + check.id}}\" ff-block ff-block-save=\"$ctrl.save(check)\" ff-block-delete=\"$ctrl.delete(check)\" ff-block-edit-default=\"$ctrl.isNew(check)\" ff-block-is-new=\"$ctrl.isNew(check)\"> <ff-header> <div class=\"ff-grid\"> <span flex=\"auto\" translate=\"BILLING_PROFILE.E_CHECKS.HEADER\"></span> <ff-btn-group flex=\"none\" class=\"ff-btn-full\" ng-if=\"$ctrl.showSwitchCC()\" style=\"margin:-.55rem 0 -.25rem 0\"> <ff-btn sense=\"add\" size=\"sm\" ff-click=\"$ctrl.switchCC()\" style=\"font-size:.85rem;line-height:1.25\"> <span translate=\"BILLING_PROFILE.CREDIT_CARDS.BTN_ADD\"></span> </ff-btn> </ff-btn-group> </div> </ff-header> <fieldset dw-e-check=\"check\"></fieldset> <ff-btn-group class=\"ff-block-buttons\" ng-if=\"!$ctrl.user.accessRights.billingInfo.readOnly && (!$ctrl.isNew(check) || !$ctrl.single)\"> <ff-btn ff-btn-block-delete ng-if=\"$ctrl.hasDeleteButton(check, ffBlock)\" ng-hide=\"false\"></ff-btn> <ff-btn ff-btn-block-save ng-if=\"!$ctrl.reg && !$ctrl.single\"></ff-btn> <ff-btn ff-btn-block-cancel ng-if=\"!$ctrl.reg && !$ctrl.single\"></ff-btn> </ff-btn-group> </ff-panel> <ff-btn-group class=\"ff-btn-full\" ng-if=\"!$ctrl.user.accessRights.billingInfo.readOnly && !$ctrl.single\"> <ff-btn ff-btn-section-new><span translate=\"BILLING_PROFILE.E_CHECKS.BTN_ADD\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/register-user.controller.js":
/*!*****************************************************************!*\
  !*** ./common/members/user-profile/register-user.controller.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_services_setup_user_field_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/setup/user-field.service */ "./shared/services/setup/user-field.service.js");





/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.members.userProfile.new', ['ngRoute', 'deskworks.userProfile.service', 'deskworks.center.service', shared_services_setup_user_field_service__WEBPACK_IMPORTED_MODULE_4__["default"].name, 'deskworks.routeHelper', 'deskworks.helper']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/new-member', {
    template: '<div ng-include="\'members/user-profile/user-profile.tpl.html\'" ff-bulk-read-only></div>',
    controller: 'RegisterUserCtrl as vm',
    label: 'New Member',
    routeBranch: 'new-member',
    translations: ['user-profile'],
    resolve: {
      reg: function reg() {
        return {
          member: true,
          selfRegistration: false,
          step: 1,
          stepCount: 3,
          new: true
        };
      },
      userProfile: ["$q", "$route", "dwAlerts", "centerService", "userProfileService", "state", "routeHelper", function userProfile($q, $route, dwAlerts, centerService, userProfileService, state, routeHelper) {
        var selfReg = $route.current.params['self-registration'] && $route.current.params['self-registration'] !== 'false';

        if (selfReg) {
          state.setPath('/member-sign-up', true); // Redirect to new route

          state.setParam('self-registration');
          return $q.reject();
        }

        return routeHelper.auth().then(function () {
          return centerService.get(state.getCurrentCenterId()).then(function (center) {
            return userProfileService.new(center, 'member', 'register').catch(function (err) {
              return dwAlerts.error(err, 'Failed to load new member profile template.');
            });
          });
        });
      }],
      center: ["state", "centerService", function center(state, centerService) {
        return state.getCurrentCenterId() ? centerService.get(state.getCurrentCenterId()) : {};
      }],
      lazyKisi: 'lazyLoadKisi',
      lazyEzeep: 'lazyLoadEzeep'
    }
  });
  $routeProvider.when('/new-user', {
    template: '<div ng-include="\'members/user-profile/user-profile.tpl.html\'" ff-bulk-read-only></div>',
    controller: 'RegisterUserCtrl as vm',
    label: 'New User',
    routeBranch: 'new-user',
    translations: ['user-profile'],
    resolve: {
      reg: function reg() {
        return {
          member: false,
          selfRegistration: false,
          step: 1,
          stepCount: 2,
          new: true
        };
      },
      userProfile: ["dwAlerts", "centerService", "userProfileService", "state", "routeHelper", function userProfile(dwAlerts, centerService, userProfileService, state, routeHelper) {
        return routeHelper.auth().then(function () {
          return centerService.get(state.getCurrentCenterId()).then(function (center) {
            return userProfileService.new(center, 'nonMember', 'register').catch(function (err) {
              return dwAlerts.error(err, 'Failed to load new member profile template.');
            });
          });
        });
      }],
      center: ["state", "centerService", function center(state, centerService) {
        return state.getCurrentCenterId() ? centerService.get(state.getCurrentCenterId()) : {};
      }],
      lazyEzeep: 'lazyLoadEzeep'
    }
  });
}]).controller('RegisterUserCtrl', ["$scope", "$timeout", "$translate", "$filter", "$injector", "helper", "state", "dwAlerts", "userProfile", "reg", "center", "userProfileService", "centerService", "setupService", "UserField", function ($scope, $timeout, $translate, $filter, $injector, helper, state, dwAlerts, userProfile, reg, center, userProfileService, centerService, setupService, UserField) {
  var vm = this;
  state.setPageTitle($translate.instant(reg.member ? 'USER_PROFILE.NEW_MEMBER.PAGE_TITLE' : 'USER_PROFILE.NEW_NON_MEMBER.PAGE_TITLE'));
  vm.reg = reg;
  vm.userProfile = userProfile;
  vm.center = center;
  vm.schema = userProfile.schema;

  if (reg && !reg.member) {
    // register non-member by admin
    vm.schema.customFields = false; // because backend has it true for non-members

    if ($injector.has('ezeepGroupDirective')) {
      vm.schema.membership = vm.schema.membership || {
        membershipStatus: false,
        attachedReservationUnit: false
      };
    }
  }

  if (vm.schema.customFields || vm.schema.shareable) {
    UserField.query().catch(function (err) {
      return dwAlerts.error(err, 'Failed to query user profile fields.');
    }).then(function (fields) {
      fields.forEach(function (field) {
        field.value = null;
      });
      vm.customFields = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(fields).call(fields, function (field) {
        return field.section === 'customFields';
      }); // vm.shareable = fields.filter(field => field.section === 'shareable');
    });
  } // Auto-generate login/password for non-member registration by coordinator


  if (vm.reg && !vm.reg.member) {
    vm.userProfile.password = '123456';
    vm.userProfile.passwordConfirmation = '123456'; // Auto-generate login from last name for non-member registration by coordinator

    $scope.$watch('vm.userProfile.lastName', function (val) {
      vm.userProfile.login = (val || '').toLowerCase().replace(/\W/g, '') + '-' + Date.now();
    });
  }
  /**
   * Next button handler
   */


  vm.next = function () {
    if (helper.pointFirstInvalid('#userProfile')) return;
    return userProfileService.registerNewUser(state.getCurrentCenterId(), vm.userProfile, undefined, vm.customFields).then(function () {
      if (vm.kisiSave) return vm.kisiSave();
    }).then(function () {
      if (vm.ezeepSave) return vm.ezeepSave();
    }).then(function () {
      state.setPath(state.getPath() + '/' + vm.userProfile.id, true); // Replace current state with Profile Edit to make Back button work

      state.setParam('productId', (vm.userProfile.membershipProduct || {}).id);
      state.setParam('membershipStartDate', $filter('date')(vm.userProfile.membershipStartDate, 'yyyy-MM-dd'));
      state.setCurrentUserId(vm.userProfile.id); // TODO: if allowed by schema

      state.setParam('attachedReservationUnitId', vm.userProfile.attachedReservationUnit && vm.userProfile.attachedReservationUnit.id);
      return $timeout(function () {
        return state.setPath(state.getPath() + '/membership/billing-profile'); // Navigate Billing Profile on next digest as current digest replaces history state
      });
    });
  };
  /**
   * Bind test user data generator
   */


  userProfileService.bindTestUserGenerator($scope, vm.userProfile, vm.reg);
}]));

/***/ }),

/***/ "./common/members/user-profile/sections/up-access-codes.directive.js":
/*!***************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-access-codes.directive.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);




/**
 * upAccessCodes directive - editable access codes list in user profile
 */
angular.module('deskworks.upAccessCodes', []).directive('upAccessCodes', function () {
  'use strict';

  var templateUrl = 'members/user-profile/sections/up-access-codes.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upAccessCodesCtrl as $ctrl',
    bindToController: {
      user: '<userProfile',
      save: '='
    }
  };
}).controller('upAccessCodesCtrl', ["$scope", "$q", "$filter", "$timeout", "state", "helper", "systemService", function ($scope, $q, $filter, $timeout, state, helper, systemService) {
  'use strict';

  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $ctrl.save = save;
    $scope.$watch('ffBlock.editMode', function (val) {
      if (val) $ctrl.rollback = angular.copy($ctrl.user.accessCards);
    });
    $scope.$on('ffControl::EditCancel', function () {
      if ($scope.ffBlock.editMode) {
        $ctrl.user.accessCards = $ctrl.rollback || $ctrl.user.accessCards;
        $ctrl.rollback = null;
      }
    });
  };
  /**
   * Add button handler.
   */


  $ctrl.add = function () {
    if (!$scope.ffBlock.editMode) {
      $scope.$emit('ffBlock::EditStart');
    }

    systemService.getAccessCard(state.getCurrentCenterId(), 'new').then(function (result) {
      $timeout(function () {
        return $ctrl.user.accessCards.push(result);
      });
    });
  };
  /**
   * Save access cards handler
   */


  function save() {
    var promises = []; // Iterate through new access cards to find new/changed

    angular.forEach($ctrl.user.accessCards, function (card) {
      var cardInit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $ctrl.rollback, card.id);

      if (!cardInit || cardInit.number !== card.number) {
        // new or changed
        var data = {
          number: card.number,
          userId: $ctrl.user.userId || $ctrl.user.id
        };

        if (!card.id || card.id === 'new') {
          promises.push(systemService.createAccessCard(state.getCurrentCenterId(), data).then(function (result) {
            card.id = result.id;
          }));
        } else {
          promises.push(systemService.updateAccessCard(state.getCurrentCenterId(), card.id, data));
        }
      }
    }); // Iterate through access card backup to find deleted

    angular.forEach($ctrl.rollback, function (cardInit) {
      var card = helper.findByKeyValue($ctrl.user.accessCards, 'id', cardInit.id);

      if (!card) {
        // deleted
        promises.push(systemService.removeAccessCard(state.getCurrentCenterId(), cardInit.id));
      }
    });
    return $q.all(promises);
  }
  /**
   * Delete button handler.
   */


  $ctrl.delete = function (card) {
    var idx = $ctrl.user.accessCards.indexOf(card);

    if (idx >= 0) {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_1___default()(_context = $ctrl.user.accessCards).call(_context, idx, 1);

      $scope.ffBlockForm.$setDirty();
    }
  };
}]);

/***/ }),

/***/ "./common/members/user-profile/sections/up-access-codes.tpl.html":
/*!***********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-access-codes.tpl.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"ff-grid gutter-h-half\" style=\"justify-content:flex-start;align-items:center\"> <ff-row flex=\"0 0 110px\" class=\"ff-no-frame\" ng-repeat=\"card in $ctrl.user.accessCards\" id=\"{{'upAccessCard-' + card.id}}\"> <ff-text flex=\"auto\" name=\"accessCode\" ff-model=\"card.number\" style=\"margin-bottom:-1px\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.LOGIN_INFO.ACCESS_CODE' | translate}}\"></ff-text> <ff-btn flex=\"none\" style=\"z-index:3\" sense=\"delete\" size=\"xs\" ff-click=\"$ctrl.delete(card)\" ng-show=\"ffBlock.editMode\" title=\"{{'USER_PROFILE.LOGIN_INFO.DELETE_ACCESS_CODE' | translate}}\"></ff-btn> </ff-row> <ff-btn flex=\"none\" style=\"margin:2.5px 0 2.5px auto\" sense=\"new\" size=\"xs\" ff-click=\"$ctrl.add()\" title=\"{{'USER_PROFILE.LOGIN_INFO.ADD_ACCESS_CODE' | translate}}\"></ff-btn> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-addresses.directive.js":
/*!************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-addresses.directive.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_dw_controls_dw_address_dw_address_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/dw-controls/dw-address/dw-address.directive */ "./shared/dw-controls/dw-address/dw-address.directive.js");

/**
 * upAddresses directive - 'Addresses' section of user profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upAddresses', ['deskworks.helper', 'deskworks.state', 'deskworks.userProfile.service', shared_dw_controls_dw_address_dw_address_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name]).directive('upAddresses', function () {
  var templateUrl = 'members/user-profile/sections/up-addresses.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upAddressesCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<',
      center: '<',
      single: '<'
    }
  };
}).controller('upAddressesCtrl', ["$scope", "$q", "$window", "$translate", "dwAlerts", "state", "helper", "userProfileService", "optsAddressType", "optsCountry", "optsState", function ($scope, $q, $window, $translate, dwAlerts, state, helper, userProfileService, optsAddressType, optsCountry, optsState) {
  var $ctrl = this;
  $ctrl.types = optsAddressType;
  $ctrl.countries = optsCountry;
  $ctrl.states = optsState;
  $ctrl.new = userProfileService.address.new;
  $ctrl.isNew = userProfileService.address.isNew;
  /**
   * Counts existing (not new) addresses.
   * Necessary to hide Remove button because at least one address is required.
   */

  $ctrl.countExisting = function () {
    return $ctrl.user.addresses.reduce(function (prev, curr) {
      return helper.isUid(curr.id) ? prev : prev + 1;
    }, 0);
  };
  /**
   * Save button handler.
   */


  $ctrl.save = function (address) {
    return userProfileService.address.save(state.getCurrentCenterId(), $ctrl.user.id, address).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save address.');
    });
  };
  /**
   * Delete button handler.
   */


  $ctrl.delete = function (address) {
    if (userProfileService.address.isNew(address)) return $q.when();

    if ($window.confirm($translate.instant('USER_PROFILE.ADDRESSES.CONFIRM_DELETE'))) {
      return userProfileService.address.delete(state.getCurrentCenterId(), $ctrl.user.id, address).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete address.');
      });
    }

    return $q.reject();
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/sections/up-addresses.tpl.html":
/*!********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-addresses.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"upAddresses\" ng-if=\"$ctrl.schema.addresses\" class=\"ff-grid gutter-v gutter-h\" ff-section=\"address in $ctrl.user.addresses\" ff-section-new=\"$ctrl.new($ctrl.center.country.id, $ctrl.center.state.id || $ctrl.center.state)\"> <ff-panel ng-if=\"!$ctrl.user.addresses.length\"> <ff-panel-header><span translate=\"USER_PROFILE.ADDRESSES\"></span></ff-panel-header> <span translate=\"USER_PROFILE.ADDRESSES.EMPTY\"></span> </ff-panel> <ff-panel flex=\"{{ $ctrl.single ? null : {md: '0 0 50%'} }}\" id=\"{{'upAddress-' + address.id}}\" ff-block ff-block-save=\"$ctrl.save(address)\" ff-block-delete=\"$ctrl.delete(address)\" ff-block-edit-default=\"$ctrl.isNew(address)\" ff-block-is-new=\"$ctrl.isNew(address)\"> <ff-panel-header><span translate=\"USER_PROFILE.ADDRESS\"></span></ff-panel-header> <fieldset dw-address=\"address\" dw-address-type=\"true\"></fieldset> <ff-btn-group class=\"ff-block-buttons\" ng-if=\"!$ctrl.schema.addresses.$readOnly\"> <ff-btn ff-btn-block-edit ng-if=\"!$ctrl.reg.new\"></ff-btn> <ff-btn ff-btn-block-delete ng-if=\"($ctrl.isNew(address) ? $ctrl.user.addresses.length : $ctrl.countExisting()) > 1\" ng-hide=\"ffBlock.editMode && !$ctrl.reg.new\"></ff-btn> <ff-btn ff-btn-block-save ng-if=\"!$ctrl.reg.new\"></ff-btn> <ff-btn ff-btn-block-cancel ng-if=\"!$ctrl.reg.new\"></ff-btn> </ff-btn-group> </ff-panel> <ff-btn-group class=\"ff-btn-full\" ng-if=\"!$ctrl.schema.addresses.$readOnly && !$ctrl.single\"> <ff-btn ff-btn-section-new> <span translate=\"GLOBAL.BTN_NEW\"></span> <span translate=\"USER_PROFILE.ADDRESS\"></span> </ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-co-members.directive.js":
/*!*************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-co-members.directive.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/dw-modal/dw-modal.service */ "./shared/dw-modal/dw-modal.service.js");
/* harmony import */ var shared_dw_controls_dw_email_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/dw-controls/dw-email.directive */ "./shared/dw-controls/dw-email.directive.js");
/* harmony import */ var shared_dw_controls_dw_login_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/dw-controls/dw-login.directive */ "./shared/dw-controls/dw-login.directive.js");
/* harmony import */ var shared_dw_controls_dw_password_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/dw-controls/dw-password.directive */ "./shared/dw-controls/dw-password.directive.js");
/* harmony import */ var shared_dw_controls_dw_phone_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/dw-controls/dw-phone.directive */ "./shared/dw-controls/dw-phone.directive.js");
/* harmony import */ var shared_dw_controls_dw_search_user_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/dw-controls/dw-search-user.directive */ "./shared/dw-controls/dw-search-user.directive.js");






/**
 * upCoMembers directive - 'Co-Members' section of user profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upCoMembers', ['deskworks.helper', 'deskworks.state', 'deskworks.userProfile.service', shared_dw_modal_dw_modal_service__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_dw_controls_dw_email_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_dw_controls_dw_login_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_dw_controls_dw_password_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_dw_controls_dw_phone_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_dw_controls_dw_search_user_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name]).directive('upCoMembers', function () {
  var templateUrl = 'members/user-profile/sections/up-co-members.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upCoMembersCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<'
    }
  };
}).controller('upCoMembersCtrl', ["$scope", "$q", "dwAlerts", "dwModal", "helper", "state", "userProfileService", function ($scope, $q, dwAlerts, dwModal, helper, state, userProfileService) {
  var $ctrl = this;
  $ctrl.exUserCollapsed = true; // collapse quick user search by default

  $ctrl.new = userProfileService.coMember.new;
  $ctrl.isNew = userProfileService.coMember.isNew;
  $ctrl.makeCoMemberInactive = true;
  /**
   * Save co-member
   */

  $ctrl.save = function (coMember) {
    return userProfileService.coMember.save(state.getCurrentCenterId(), $ctrl.user.id, coMember).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save co-member.');
    }).then(function () {
      return coMember.saveAccessCards ? coMember.saveAccessCards().catch(function (err) {
        return dwAlerts.error(err, 'Failed to save access cards.');
      }) : null;
    });
  };
  /**
   * Delete co-member
   */


  $ctrl.delete = function (coMember) {
    return dwModal.show({
      scope: $scope,
      templateUrl: 'DeleteCoMemberTpl',
      controller: ['$scope', 'close', function ($scope, close) {
        $scope.close = close;
      }]
    }).then(function (modal) {
      modal.element[0].querySelector('button[type=submit]').focus();
      return modal.close.then(function (result) {
        if (!result) throw 'modal cancel';
      });
    }).then(function () {
      return userProfileService.coMember.delete(state.getCurrentCenterId(), $ctrl.user.id, coMember, $ctrl.makeCoMemberInactive).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete co-member.');
      });
    });
  };
  /**
   * 'Adding existing member as new co-member' state, control should start in edit-on mode
   */


  $ctrl.isNewExisting = function (coMember) {
    return (coMember.userId || coMember.existingUserId) && helper.isUid(coMember.id);
  };
  /**
   * Add existing member as a new co-member after user search
   */


  $ctrl.newExisting = function (quickUser) {
    return userProfileService.get(state.getCurrentCenterId(), quickUser.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get user profile.');
    }).then(function (result) {
      $ctrl.user.coMembers.push(userProfileService.coMember.convertUserToCoMember(result));
      delete $ctrl.quickUser;
    });
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/sections/up-co-members.tpl.html":
/*!*********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-co-members.tpl.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"upCoMembers\" ng-if=\"$ctrl.schema.coMembers\" class=\"ff-grid\" ff-section=\"coMember in $ctrl.user.coMembers\" ff-section-new=\"$ctrl.new()\"> <ff-panel ng-if=\"!$ctrl.user.coMembers.length\"> <ff-panel-header><span translate=\"USER_PROFILE.CO_MEMBERS.HEADER\"></span></ff-panel-header> <span translate=\"USER_PROFILE.CO_MEMBERS.EMPTY\"></span> </ff-panel> <div ng-if=\"$ctrl.user.coMembers.length\"> <div class=\"gutter-v\"> <ff-panel ff-block ff-block-save=\"$ctrl.save(coMember)\" ff-block-delete=\"$ctrl.delete(coMember)\" ff-block-edit-default=\"$ctrl.isNew(coMember)\" ff-block-dirty-default=\"$ctrl.isNewExisting(coMember)\" ff-block-is-new=\"$ctrl.isNew(coMember)\" id=\"{{'upCoMember-' + coMember.id}}\"> <ff-panel-header><span translate=\"GLOBAL.CO_MEMBER\"></span></ff-panel-header> <div class=\"ff-grid gutter-h\"> <ff-col flex=\"{md: '0 0 50%'}\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.PERSONAL_INFO.FULL_NAME\"></span></ff-label> <ff-text name=\"fullName\" ff-model=\"coMember.fullName\" placeholder=\"John Doe\" ff-validate-alert=\"{{'USER_PROFILE.PERSONAL_INFO.FULL_NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"><span translate=\"GLOBAL.EMAIL\"></span></ff-label> <ff-email name=\"email\" ff-model=\"coMember.email\" dw-email placeholder=\"jdoe@mail.com\"></ff-email> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.PHONE\"></span></ff-label> <ff-text name=\"phone\" ff-model=\"coMember.phone\" dw-phone placeholder=\"888-379-2865\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"><span translate=\"GLOBAL.LOGIN\"></span></ff-label> <ff-login name=\"login\" ff-model=\"coMember.login\" dw-login placeholder=\"jdoe\"></ff-login> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"><span translate=\"GLOBAL.PASSWORD\"></span></ff-label> <ff-password name=\"password\" ff-model=\"coMember.password\" dw-password ff-not-contain=\"[coMember.login, coMember.login.split('').reverse().join(''), coMember.fullName]\" ff-validate-alert='{ \"notContain\": \"{{&#39;GLOBAL.PASSWORD.NOT_CONTAIN&#39; | translate}}\" }'></ff-password> </label> <ff-row ng-if=\"state.isLoggedAdmin()\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.LOGIN_INFO.ACCESS_CODES\"></span></ff-label> <ff-static> <up-access-codes flex=\"auto\" user-profile=\"coMember\" save=\"coMember.saveAccessCards\"></up-access-codes> </ff-static> </ff-row> </ff-col> <ff-col flex=\"{md: '0 0 50%'}\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 180px\"><span translate=\"USER_PROFILE.CO_MEMBERS.CAN_MAKE_RESERVATIONS\"></span></ff-label> <ff-static> <ff-checkbox name=\"canMakeReservations\" ff-model=\"coMember.canMakeReservations\"></ff-checkbox> </ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 180px\"><span translate=\"USER_PROFILE.CO_MEMBERS.SEES_ACCOUNTING_INFO\"></span></ff-label> <ff-static> <ff-checkbox name=\"canSeeAccountingInfo\" ff-model=\"coMember.canSeeAccountingInfo\"></ff-checkbox> </ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 180px\"><span translate=\"USER_PROFILE.CO_MEMBERS.GETS_CENTER_NOTICES\"></span></ff-label> <ff-static> <ff-checkbox name=\"getCenterNotices\" ff-model=\"coMember.getCenterNotices\"></ff-checkbox> </ff-static> </label> <ff-row> <ff-textarea name=\"notes\" ff-model=\"coMember.notes\" rowspan=\"state.isLoggedAdmin() ? 3 : 2\" placeholder=\"{{'USER_PROFILE.CO_MEMBERS.NOTES' | translate}}\" title=\"{{'USER_PROFILE.CO_MEMBERS.NOTES' | translate}}\"></ff-textarea> </ff-row> </ff-col> </div> <ff-btn-group class=\"ff-block-buttons\" ng-if=\"!$ctrl.schema.coMembers.$readOnly\"> <ff-btn ff-btn-block-edit></ff-btn> <ff-btn ff-btn-block-delete></ff-btn> <ff-btn ff-btn-block-save></ff-btn> <ff-btn ff-btn-block-cancel></ff-btn> </ff-btn-group> </ff-panel> </div> </div> <ff-btn-group class=\"ff-section-buttons\" style=\"margin-bottom:0\" ng-if=\"!$ctrl.schema.coMembers.$readOnly\"> <ff-btn ff-btn-section-new> <span translate=\"USER_PROFILE.CO_MEMBERS.BTN_NEW\"></span> </ff-btn> <ff-btn sense=\"collapseBtnPriv\" size=\"sm\" ff-click=\"$ctrl.exUserCollapsed = !$ctrl.exUserCollapsed\" ng-class=\"{ collapsed: $ctrl.exUserCollapsed }\" ng-if=\"state.isLoggedAdmin()\"> <span translate=\"USER_PROFILE.CO_MEMBERS.BTN_ADD\"></span> </ff-btn> </ff-btn-group> <div flex=\"{md: '0 0 50%'}\" style=\"margin-left:auto;margin-bottom:0\" ng-collapse=\"$ctrl.exUserCollapsed\" ng-if=\"state.isLoggedAdmin()\"> <ff-panel style=\"margin-top:1.5rem\"> <form name=\"formNewExisting\" class=\"ff-row\"> <label flex=\"1 1 auto\"> <ff-search flex=\"1 1 1%\" ng-model=\"$ctrl.quickUser\" dw-search-user></ff-search> </label> <ff-btn-group flex=\"0 0 auto\" style=\"z-index:3\"> <ff-btn type=\"submit\" sense=\"add\" size=\"sm\" ff-disabled=\"!$ctrl.quickUser\" ff-click=\"$ctrl.newExisting($ctrl.quickUser)\">Add</ff-btn> </ff-btn-group> </form> </ff-panel> </div> </div> <script type=\"text/ng-template\" id=\"DeleteCoMemberTpl\"> <div class=\"dw-modal\">\n    <div class=\"dw-modal-fade\" ng-click=\"close()\"></div>\n    <form class=\"dw-modal-dialog our-member-modal\" novalidate>\n      <div class=\"dw-modal-scroll\">\n        <ff-header><span translate=\"USER_PROFILE.CO_MEMBERS.CONFIRM_DELETE\"></span></ff-header>\n        <label class=\"ff-row\">\n          <ff-checkbox name=\"makeCoMemberInactive\" ff-model=\"$ctrl.makeCoMemberInactive\">\n            <span translate=\"USER_PROFILE.CO_MEMBERS.MAKE_INACTIVE\"></span>\n          </ff-checkbox>\n        </label>\n        <ff-btn-group class=\"ff-center ff-tmargin\" style=\"padding: 0 5px 5px 5px\">\n          <ff-btn sense=\"cancel\" ff-click=\"close(false)\">Cancel</ff-btn>\n          <ff-btn type=\"submit\" sense=\"ok\" ff-click=\"close(true)\">OK</ff-btn>\n        </ff-btn-group>\n      </div>\n    </form>\n  </div> </script> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-comments.directive.js":
/*!***********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-comments.directive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * upComments directive - 'Comments' section of user profile
 */
angular.module('deskworks.upComments', ['deskworks.userProfile.service']).directive('upComments', function () {
  'use strict';

  var templateUrl = 'members/user-profile/sections/up-comments.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upCommentsCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<'
    }
  };
}).controller('upCommentsCtrl', ["$scope", "dwAlerts", "state", "userProfileService", function ($scope, dwAlerts, state, userProfileService) {
  'use strict';

  var $ctrl = this;
  /**
   * Save button handler
   */

  $ctrl.save = function () {
    return userProfileService.updateRaw(state.getCurrentCenterId(), $ctrl.user, {
      comments: $ctrl.user.comments
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save comments.');
    });
  };
}]);

/***/ }),

/***/ "./common/members/user-profile/sections/up-comments.tpl.html":
/*!*******************************************************************!*\
  !*** ./common/members/user-profile/sections/up-comments.tpl.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upComments\" ng-if=\"$ctrl.schema.comments\" class=\"ff-no-frame\" ff-block ff-block-save=\"$ctrl.save()\" ff-block-edit-default=\"$ctrl.user.isNew()\"> <ff-panel-header><span translate=\"USER_PROFILE.COMMENTS.HEADER\"></span></ff-panel-header> <ff-row> <ff-textarea name=\"comments\" ff-model=\"$ctrl.user.comments\" rowspan=\"5\"></ff-textarea> </ff-row> <ff-btn-group class=\"ff-section-buttons\" ng-if=\"!$ctrl.schema.comments.$readOnly && !$ctrl.reg.new\"> <ff-btn ff-btn-block-edit></ff-btn> <ff-btn ff-btn-block-save></ff-btn> <ff-btn ff-btn-block-cancel></ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-custom-fields.directive.js":
/*!****************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-custom-fields.directive.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_form_design_fd_field_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/form-design/fd-field.directive */ "./shared/form-design/fd-field.directive.js");

/**
 * upCustomFields directive - 'Custom Fields' section of user profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upCustomFields', ['deskworks.UserProfileFields', shared_form_design_fd_field_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name]).directive('upCustomFields', function () {
  var templateUrl = 'members/user-profile/sections/up-custom-fields.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upCustomFieldsCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<',
      fields: '<'
    }
  };
}).controller('upCustomFieldsCtrl', ["$scope", "dwAlerts", "state", "UserProfileFields", function ($scope, dwAlerts, state, UserProfileFields) {
  var $ctrl = this; // $ctrl.$onInit = function() {
  // };

  /**
   * Save button handler
   */

  $ctrl.save = function () {
    return UserProfileFields.save(state.getCurrentCenterId(), $ctrl.user.id, $ctrl.fields).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save user profile fields.');
    });
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/sections/up-custom-fields.tpl.html":
/*!************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-custom-fields.tpl.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upCustomFields\" ng-if=\"$ctrl.schema.customFields && $ctrl.fields.length\" ff-block ff-block-save=\"$ctrl.save()\" ff-block-edit-default=\"$ctrl.user.isNew()\"> <ff-panel-header><span translate=\"USER_PROFILE.CUSTOM_FIELDS.HEADER\"></span></ff-panel-header> <ff-col ff-dim=\"!$ctrl.fields\"> <fd-field field=\"field\" ng-repeat=\"field in $ctrl.fields\"></fd-field> </ff-col> <ff-btn-group class=\"ff-section-buttons\" ng-if=\"!$ctrl.schema.customFields.$readOnly && !$ctrl.reg.new\"> <ff-btn ff-btn-block-edit></ff-btn> <ff-btn ff-btn-block-save></ff-btn> <ff-btn ff-btn-block-cancel></ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-documents.directive.js":
/*!************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-documents.directive.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);





/**
 * upDocuments directive - 'Contracts / Documents' section of user profile
 */
angular.module('deskworks.upDocuments', ['deskworks.helper', 'deskworks.state', 'deskworks.userProfile.service']).directive('upDocuments', function () {
  'use strict';

  var templateUrl = 'members/user-profile/sections/up-documents.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upDocumentsCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<'
    }
  };
}).controller('upDocumentsCtrl', ["$scope", "$element", "$q", "$translate", "dwAlerts", "helper", "state", "userProfileService", "session", function ($scope, $element, $q, $translate, dwAlerts, helper, state, userProfileService, session) {
  'use strict';

  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    if (session.isAdmin()) $ctrl.showUserAccess = true; // Clone and backup documents on edit start event

    $scope.$on('ffBlock::EditStart', function () {
      $ctrl.docsRollback = angular.copy($ctrl.user.documents);
    }); // Rollback documents on edit cancel event

    $scope.$on('ffBlock::EditCancel', function () {
      $ctrl.user.documents = $ctrl.docsRollback;
    });
  };
  /**
   * Add button handler.
   */


  $ctrl.add = function ($files, $invalidFiles) {
    if ($invalidFiles && $invalidFiles.length > 0) {
      return dwAlerts.error($translate.instant('USER_PROFILE.DOCUMENTS.INVALID_FORMAT'));
    }

    if ($files && $files.length > 0) {
      if (!$ctrl.editMode) {
        $scope.$broadcast('ffBlock::EditStart');
      }

      $files.forEach(function (file) {
        return $ctrl.user.documents.push(userProfileService.document.new(file));
      });
      var ffBlockForm = angular.element($element[0].querySelector('form[name="ffBlockForm"]')).scope().ffBlockForm;
      ffBlockForm.$setDirty();
    }
  };
  /**
   * Save button handler.
   */


  $ctrl.save = function () {
    var promises = []; // Iterate through new documents to find new/changed

    $ctrl.user.documents.forEach(function (doc) {
      var docInit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $ctrl.docsRollback, doc.id);

      if (!docInit || docInit.name !== doc.name || docInit.userAccess !== doc.userAccess) {
        // new or changed
        promises.push(userProfileService.document.save(state.getCurrentCenterId(), $ctrl.user.id, doc).catch(function (err) {
          return dwAlerts.error(err, 'Failed to save document.');
        }));
      }
    }); // Iterate through documents backup to find deleted

    $ctrl.docsRollback.forEach(function (docInit) {
      var doc = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $ctrl.user.documents, docInit.id);

      if (!doc) {
        // deleted
        promises.push(userProfileService.document.delete(state.getCurrentCenterId(), $ctrl.user.id, docInit).catch(function (err) {
          return dwAlerts.error(err, 'Failed to delete document.');
        }));
      }
    });
    return $q.all(promises);
  };
  /**
   * Delete button handler.
   */


  $ctrl.delete = function (doc) {
    var idx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.user.documents, doc.id);

    if (idx >= 0) {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context = $ctrl.user.documents).call(_context, idx, 1);

      var ffBlockForm = angular.element($element[0].querySelector('form[name="ffBlockForm"]')).scope().ffBlockForm;
      ffBlockForm.$setDirty();
    }
  };
}]);

/***/ }),

/***/ "./common/members/user-profile/sections/up-documents.tpl.html":
/*!********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-documents.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upDocuments\" ng-if=\"$ctrl.schema.documents\" ff-block ff-block-save=\"$ctrl.save()\" ff-block-edit=\"$ctrl.editMode\" ff-block-edit-default=\"$ctrl.user.isNew()\" ngf-drop=\"$ctrl.add($files, $invalidFiles)\" ngf-pattern=\"'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'\" ngf-multiple=\"true\" ngf-drag-over-class=\"dragover\"> <ff-panel-header><span translate=\"USER_PROFILE.DOCUMENTS.HEADER\"></span></ff-panel-header> <div class=\"ff-grid\"> <ff-row ng-repeat=\"doc in $ctrl.user.documents\" id=\"{{'upDocument-' + doc.id}}\"> <ff-text name=\"document\" ff-model=\"doc.name\" ff-required=\"true\" ff-validate-alert=\"Document Name\" ff-static-url=\"doc.document\"></ff-text> <ff-static flex=\"0 0 36px\" ng-if=\"$ctrl.showUserAccess && doc.userAccess && !$ctrl.editMode\" class=\"ff-center\" title=\"{{'USER_PROFILE.DOCUMENTS.VISIBLE_TO_USER' | translate}}\"> <ff-icon sense=\"user\" class=\"text-brand\"></ff-icon> </ff-static> <ff-static flex=\"0 0 36px\" ng-if=\"$ctrl.showUserAccess && $ctrl.editMode\" class=\"ff-center\" title=\"{{'USER_PROFILE.DOCUMENTS.VISIBLE_TO_USER' | translate}}\"> <ff-checkbox ff-model=\"doc.userAccess\"></ff-checkbox> </ff-static> <ff-btn flex=\"none\" style=\"z-index:3\" sense=\"delete\" size=\"xs\" ff-click=\"$ctrl.delete(doc)\" ng-if=\"$ctrl.editMode\" title=\"{{'USER_PROFILE.DOCUMENTS.BTN_DELETE.HINT' | translate}}\"></ff-btn> </ff-row> </div> <ff-btn-group class=\"ff-section-buttons\" ng-if=\"!$ctrl.schema.documents.$readOnly\"> <ff-btn ff-btn-block-edit ng-if=\"!$ctrl.reg.new\"></ff-btn> <ff-btn ff-btn-block-save ng-if=\"!$ctrl.reg.new\"></ff-btn> <ff-btn ff-btn-block-cancel ng-if=\"!$ctrl.reg.new\"></ff-btn> <ff-btn sense=\"new\" size=\"sm\" ngf-select=\"$ctrl.add($files, $invalidFiles)\" ngf-pattern=\"'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'\" accept=\"application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\" ngf-multiple=\"true\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-lead-source.directive.js":
/*!**************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-lead-source.directive.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * upLeadSource directive - 'Lead Source' section of user profile
 */
angular.module('deskworks.upLeadSource', ['deskworks.userProfile.service']).directive('upLeadSource', function () {
  'use strict';

  var templateUrl = 'members/user-profile/sections/up-lead-source.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upLeadSourceCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<'
    }
  };
}).controller('upLeadSourceCtrl', ["$scope", "dwAlerts", "state", "userProfileService", function ($scope, dwAlerts, state, userProfileService) {
  'use strict';

  var $ctrl = this;
  /**
   * Save button handler
   */

  $ctrl.save = function () {
    return userProfileService.updateRaw(state.getCurrentCenterId(), $ctrl.user, {
      leadSourceId: $ctrl.user.leadSource.id
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save lead source.');
    });
  };
}]);

/***/ }),

/***/ "./common/members/user-profile/sections/up-lead-source.tpl.html":
/*!**********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-lead-source.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upLeadSource\" ng-if=\"$ctrl.schema.leadSource\" ff-block ff-block-save=\"$ctrl.save()\" ff-block-edit-default=\"$ctrl.user.isNew()\"> <ff-panel-header><span translate=\"USER_PROFILE.LEAD_SOURCE.HEADER\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-select name=\"leadSource\" ff-model=\"$ctrl.user.leadSource\" ff-options=\"opt.name for opt in $ctrl.user.options.leadSources\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.LEAD_SOURCE.SOURCE' | translate}}\" aria-label=\"{{'USER_PROFILE.LEAD_SOURCE.SOURCE' | translate}}\"></ff-select> </label> <ff-btn-group class=\"ff-section-buttons\" ng-if=\"!$ctrl.schema.leadSource.$readOnly && !$ctrl.reg.new\"> <ff-btn ff-btn-block-edit></ff-btn> <ff-btn ff-btn-block-save></ff-btn> <ff-btn ff-btn-block-cancel></ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-login-info.directive.js":
/*!*************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-login-info.directive.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_message_board_user_settings_message_board_user_settings_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/message-board-user-settings/message-board-user-settings.directive.js */ "./shared/message-board-user-settings/message-board-user-settings.directive.js");
/* harmony import */ var shared_dw_controls_dw_login_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/dw-controls/dw-login.directive */ "./shared/dw-controls/dw-login.directive.js");
/* harmony import */ var shared_dw_controls_dw_password_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/dw-controls/dw-password.directive */ "./shared/dw-controls/dw-password.directive.js");



/**
 * userProfileLoginInfo directive - 'Login Information' section of user profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upLoginInfo', ['deskworks.upAccessCodes', shared_message_board_user_settings_message_board_user_settings_directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, shared_dw_controls_dw_login_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_dw_controls_dw_password_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name]).directive('upLoginInfo', function () {
  var templateUrl = 'members/user-profile/sections/up-login-info.tpl.html';
  return {
    templateUrl: templateUrl,
    restrict: 'E',
    scope: true,
    controller: 'upLoginInfoCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<',
      memberDirectoryUrl: '<'
    }
  };
}).controller('upLoginInfoCtrl', ["$scope", "$q", "dwAlerts", "state", "userProfileService", function ($scope, $q, dwAlerts, state, userProfileService) {
  var $ctrl = this;
  $scope.$watch('$ctrl.saveMessageBoardUserSettings', function () {
    $ctrl.user.saveMessageBoardUserSettings = $ctrl.saveMessageBoardUserSettings; // expose in user to call in user registration
  });
  /**
   * Save button handler
   */

  $ctrl.save = function () {
    var data = {
      login: $ctrl.user.login,
      password: $ctrl.user.password,
      passwordConfirmation: $ctrl.user.passwordConfirmation,
      disableGroupMailing: $ctrl.user.disableGroupMailing
    };
    return $q.all([userProfileService.updateRaw(state.getCurrentCenterId(), $ctrl.user, data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save login information.');
    }), $ctrl.saveAccessCards && $ctrl.saveAccessCards().catch(function (err) {
      return dwAlerts.error(err, 'Failed to save access cards.');
    }), $ctrl.saveMessageBoardUserSettings && $ctrl.saveMessageBoardUserSettings().catch(function (err) {
      return dwAlerts.error(err, 'Failed to save message board user settings.');
    })]);
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/sections/up-login-info.tpl.html":
/*!*********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-login-info.tpl.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upLoginInfo\" ng-if=\"$ctrl.schema.loginInfo\" ff-block ff-block-save=\"$ctrl.save()\" ff-block-edit-default=\"$ctrl.user.isNew()\"> <ff-panel-header><span translate=\"USER_PROFILE.LOGIN_INFO.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 1 132px\"><span translate=\"GLOBAL.LOGIN\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-login name=\"login\" ff-model=\"$ctrl.user.login\" ff-required=\"true\" dw-login></ff-login> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 132px\"><span translate=\"GLOBAL.PASSWORD\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-password name=\"password\" ff-model=\"$ctrl.user.password\" ff-required=\"{{$ctrl.reg.new}}\" dw-password ff-not-contain=\"[$ctrl.user.login, $ctrl.user.login.split('').reverse().join(''), $ctrl.user.firstName, $ctrl.user.lastName]\" ff-validate-alert='{ \"notContain\": \"{{&#39;GLOBAL.PASSWORD.NOT_CONTAIN&#39; | translate}}\" }'></ff-password> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 132px\"> <span translate=\"USER_PROFILE.LOGIN_INFO.PASSWORD_CONF\" ng-class=\"{ req: ffBlock.editMode }\"></span> </ff-label> <ff-password name=\"passwordConfirmation\" ff-model=\"$ctrl.user.passwordConfirmation\" dw-password ff-required=\"{{$ctrl.reg.new}}\" ff-match=\"ffBlockForm.password.$viewValue\" ff-validate-alert='{ \"field\": \"{{&#39;USER_PROFILE.LOGIN_INFO.PASSWORD_CONF&#39; | translate}}\", \"matchField\": \"{{&#39;GLOBAL.PASSWORD&#39; | translate}}\" }'> </ff-password> </label> <ff-row ng-if=\"$ctrl.schema.accessCodes\"> <ff-label flex=\"0 1 132px\"><span translate=\"USER_PROFILE.LOGIN_INFO.ACCESS_CODES\"></span></ff-label> <ff-static> <up-access-codes flex=\"auto\" user-profile=\"$ctrl.user\" save=\"$ctrl.saveAccessCards\"></up-access-codes> </ff-static> </ff-row> <label class=\"ff-row\" ng-if=\"$ctrl.schema.loginInfo.memberDirectory !== false && $ctrl.memberDirectoryUrl\"> <ff-label flex=\"0 1 132px\"><span translate=\"USER_PROFILE.LOGIN_INFO.MEMBER_DIRECTORY\"></span></ff-label> <ff-static name=\"memberDirectory\"> <a ng-href=\"{{$ctrl.memberDirectoryUrl}}\" target=\"_blank\" rel=\"noopener\"> <span translate=\"USER_PROFILE.LOGIN_INFO.MEMBER_DIRECTORY_LINK\"></span> </a> </ff-static> </label> <message-board-user-settings user-id=\"$ctrl.user.id\" save=\"$ctrl.saveMessageBoardUserSettings\" ng-if=\"$ctrl.schema.loginInfo && $ctrl.schema.loginInfo.messageBoardNotices !== false\"></message-board-user-settings> <ff-static ng-if=\"$ctrl.schema.loginInfo.disableGroupMailing !== false\"> <label> <ff-checkbox flex=\"auto\" ff-model=\"$ctrl.user.disableGroupMailing\"> <span translate=\"USER_PROFILE.LOGIN_INFO.DISABLE_GROUP_MAILING\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"USER_PROFILE.LOGIN_INFO.DISABLE_GROUP_MAILING.HINT\"></span></ff-hint> </ff-static> <ff-btn-group class=\"ff-section-buttons\" ng-if=\"!$ctrl.schema.loginInfo.$readOnly && !$ctrl.reg.new\"> <ff-btn ff-btn-block-edit></ff-btn> <ff-btn ff-btn-block-save></ff-btn> <ff-btn ff-btn-block-cancel></ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-mailboxes.directive.js":
/*!************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-mailboxes.directive.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * upMailboxes directive - 'Mailboxes' section of user profile
 */
angular.module('deskworks.upMailboxes', ['deskworks.helper', 'deskworks.state', 'deskworks.userProfile.service']).directive('upMailboxes', function () {
  'use strict';

  var templateUrl = 'members/user-profile/sections/up-mailboxes.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upMailboxesCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<'
    }
  };
}).controller('upMailboxesCtrl', ["$scope", "$window", "$q", "$translate", "dwAlerts", "helper", "state", "userProfileService", "optsMailboxHandling", function ($scope, $window, $q, $translate, dwAlerts, helper, state, userProfileService, optsMailboxHandling) {
  'use strict';

  var $ctrl = this;
  $ctrl.handlingOpts = optsMailboxHandling;
  $ctrl.new = userProfileService.mailbox.new;
  $ctrl.isNew = userProfileService.mailbox.isNew;

  $ctrl.save = function (mailbox) {
    return userProfileService.mailbox.save(state.getCurrentCenterId(), $ctrl.user.id, mailbox).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save mailbox.');
    });
  };

  $ctrl.delete = function (mailbox) {
    if ($window.confirm($translate.instant('USER_PROFILE.MAILBOXES.CONFIRM_DELETE'))) {
      return userProfileService.mailbox.delete(state.getCurrentCenterId(), $ctrl.user.id, mailbox).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete mailbox.');
      });
    }

    return $q.reject();
  };
}]);

/***/ }),

/***/ "./common/members/user-profile/sections/up-mailboxes.tpl.html":
/*!********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-mailboxes.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"upMailboxes\" ng-if=\"$ctrl.schema.mailboxes\" class=\"ff-grid\" ff-section=\"mailbox in $ctrl.user.mailboxes\" ff-section-new=\"$ctrl.new()\"> <ff-panel ng-if=\"!$ctrl.user.mailboxes.length\"> <ff-panel-header><span translate=\"USER_PROFILE.MAILBOXES.HEADER\"></span></ff-panel-header> <span translate=\"USER_PROFILE.MAILBOXES.EMPTY\"></span> </ff-panel> <div ng-if=\"$ctrl.user.mailboxes.length\"> <div class=\"gutter-v\"> <ff-panel id=\"{{'upMailbox-' + mailbox.id}}\" ff-block ff-block-save=\"$ctrl.save(mailbox)\" ff-block-delete=\"$ctrl.delete(mailbox)\" ff-block-edit-default=\"$ctrl.isNew(mailbox)\" ff-block-is-new=\"$ctrl.isNew(mailbox)\"> <ff-panel-header><span translate=\"USER_PROFILE.MAILBOX\"></span></ff-panel-header> <div class=\"ff-grid gutter-h\"> <ff-col flex=\"{md: '0 0 50%'}\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 130px\"><span translate=\"USER_PROFILE.MAILBOXES.NUMBER\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-text name=\"number\" ff-model=\"mailbox.number\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.MAILBOXES.NUMBER' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 130px\"><span translate=\"USER_PROFILE.MAILBOXES.KEY\"></span></ff-label> <ff-text name=\"key\" ff-model=\"mailbox.key\" ff-validate-alert=\"{{'USER_PROFILE.MAILBOXES.KEY' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 130px\"><span translate=\"USER_PROFILE.MAILBOXES.HANDLING\"></span></ff-label> <ff-select name=\"handling\" ff-model=\"mailbox.handling\" ff-validate-alert=\"{{'USER_PROFILE.MAILBOXES.HANDLING' | translate}}\" ff-options=\"opt.name for opt in $ctrl.handlingOpts\"></ff-select> </label> </ff-col> <ff-col flex=\"{md: '0 0 50%'}\"> <label> <ff-row> <ff-label><span translate=\"USER_PROFILE.MAILBOXES.NAMES\"></span></ff-label> </ff-row> <ff-row> <ff-textarea name=\"names\" ff-model=\"mailbox.names\" rowspan=\"2\" placeholder=\"{{'USER_PROFILE.MAILBOXES.NAMES.HINT' | translate}}\" title=\"{{'USER_PROFILE.MAILBOXES.NAMES.HINT' | translate}}\"></ff-textarea> </ff-row> </label> </ff-col> </div> <ff-btn-group class=\"ff-block-buttons\" ng-if=\"!$ctrl.schema.mailboxes.$readOnly\"> <ff-btn ff-btn-block-edit></ff-btn> <ff-btn ff-btn-block-delete></ff-btn> <ff-btn ff-btn-block-save></ff-btn> <ff-btn ff-btn-block-cancel></ff-btn> </ff-btn-group> </ff-panel> </div> </div> <ff-btn-group class=\"ff-section-buttons\" ng-if=\"!$ctrl.schema.mailboxes.$readOnly\"> <ff-btn ff-btn-section-new> <span translate=\"GLOBAL.BTN_NEW\"></span> <span translate=\"USER_PROFILE.MAILBOX\"></span> </ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-membership.directive.js":
/*!*************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-membership.directive.js ***!
  \*************************************************************************/
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/inventory/reservation-unit.service */ "./shared/services/inventory/reservation-unit.service.js");





/**
 * userProfileMembership directive - 'Membership' section of user profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upMembership', ['deskworks.helper', 'deskworks.state', 'deskworks.userProfile.service', shared_services_inventory_reservation_unit_service__WEBPACK_IMPORTED_MODULE_4__["default"].name]).directive('upMembership', function () {
  var templateUrl = 'members/user-profile/sections/up-membership.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upMembershipCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<',
      kisiSave: '=',
      doorflowSave: '=',
      ezeepSave: '=',
      settings: '<'
    }
  };
}).controller('upMembershipCtrl', ["$scope", "$timeout", "$window", "$translate", "$filter", "$injector", "$q", "$route", "dwAlerts", "state", "helper", "userProfileService", "ReservationUnit", "optsMembershipStatus", function ($scope, $timeout, $window, $translate, $filter, $injector, $q, $route, dwAlerts, state, helper, userProfileService, ReservationUnit, optsMembershipStatus) {
  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    $ctrl.kisi = $injector.has('kisiAccessGroupDirective');
    $ctrl.doorflow = $injector.has('doorflowAccessGroupDirective');
    $ctrl.ezeep = $injector.has('ezeepGroupDirective'); // Filter membership statuses in registration for member and non-member

    $ctrl.membStatuses = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(optsMembershipStatus).call(optsMembershipStatus, function (membStatus) {
      return !$ctrl.reg || !$ctrl.reg.member && membStatus.id === 'nonMember' || $ctrl.reg.member && (membStatus.id === 'active' || membStatus.id === 'inactive');
    });

    if ($ctrl.schema.membership && $ctrl.schema.membership.attachedReservationUnit !== false) {
      ReservationUnit.query(state.getCurrentCenterId()).then(function (resUnits) {
        resUnits.unshift({
          name: $translate.instant('USER_PROFILE.MEMBERSHIP.ATTACHED_RESERVATION_UNIT.NONE')
        });
        $ctrl.user.attachedReservationUnit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default()(helper).call(helper, resUnits, state.getParam('attachedReservationUnitId'));
        $ctrl.reservationUnits = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(resUnits).call(resUnits, function (resUnit) {
          return !resUnit.attachedUserId || resUnit.id == ($ctrl.user.attachedReservationUnit && $ctrl.user.attachedReservationUnit.id);
        });
      }).catch(function (err) {
        return dwAlerts.error(err, 'Failed to query Reservation Units');
      });
    } // Hide 'Make Recurring Billings Inactive' checkbox on switching edit mode on or off


    $scope.$on('ffBlock::EditStart', function () {
      membershipStatusOrig = $ctrl.user.membershipStatus; // Store original membership status

      $ctrl.priceListOrig = $ctrl.user.membershipPriceList; // Store original price-list

      delete $ctrl.user.makeRecurringBillingsInactive;
      delete $ctrl.user.makeCoMembersInactive;
    });
    $scope.$on('ffBlock::EditEnd', function () {
      delete $ctrl.user.makeRecurringBillingsInactive;
      delete $ctrl.user.makeCoMembersInactive;
    });
  };
  /**
   * Save button handler
   */


  $ctrl.save = function () {
    var data = {};

    if ($ctrl.user.membershipStatus.id === 'active' || $ctrl.user.membershipStatus.id === 'inactive') {
      data = {
        membershipStatus: $ctrl.user.membershipStatus.id,
        membershipPriceListId: $ctrl.user.membershipPriceList.id,
        membershipProductId: ($ctrl.user.membershipProduct || {}).id,
        makeRecurringBillingsInactive: $ctrl.user.makeRecurringBillingsInactive,
        selfRegistrationStatus: null
      };

      if ($ctrl.user.coMembers && $ctrl.user.coMembers.length) {
        data.makeCoMembersInactive = $ctrl.user.makeCoMembersInactive;
      }
    }

    if ($ctrl.schema.membership && $ctrl.schema.membership.attachedReservationUnit !== false) {
      state.setParam('attachedReservationUnitId', $ctrl.user.attachedReservationUnit && $ctrl.user.attachedReservationUnit.id);
      state.replace();
    }

    return userProfileService.updateRaw(state.getCurrentCenterId(), $ctrl.user, data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save membership.');
    }).then(function () {
      $ctrl.user.selfRegistrationStatus = null;
    }).then(function () {
      if ($ctrl.kisiSave) return $ctrl.kisiSave();
    }).then(function () {
      if ($ctrl.doorflowSave) return $ctrl.doorflowSave();
    }).then(function () {
      if ($ctrl.ezeepSave) return $ctrl.ezeepSave();
    });
  };
  /**
   * Membership Status drop-down change handler. Shows 'Make Recurring Billings Inactive' checkbox if switched to Inactive
   */


  var membershipStatusOrig; // Original membership status

  $ctrl.onChangeStatus = function () {
    if (!$ctrl.reg && membershipStatusOrig) {
      if ($ctrl.user.membershipStatus.id === 'inactive' && membershipStatusOrig.id === 'active') {
        $ctrl.user.makeRecurringBillingsInactive = true;
        $ctrl.user.makeCoMembersInactive = true;
      } else {
        delete $ctrl.user.makeRecurringBillingsInactive;
        delete $ctrl.user.makeCoMembersInactive;
      }
    }
  };
  /**
   * Reset self-registration status button handler
   */


  $ctrl.resetSelfRegistrationStatus = function () {
    return userProfileService.updateRaw(state.getCurrentCenterId(), $ctrl.user, {
      selfRegistrationStatus: null
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to reset self-registration status.');
    }).then(function () {
      $timeout(function () {
        $ctrl.user.selfRegistrationStatus = null;
      });
    });
  };
  /**
   * Delete User button handler
   */


  $ctrl.deleteUser = function () {
    if (!$window.confirm($translate.instant('USER_PROFILE.MEMBERSHIP.CONFIRM_DELETE_USER'))) return;
    return userProfileService.delete(state.getCurrentCenterId(), $ctrl.user.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete user.');
    }).then(function () {
      return state.setCurrentUser(null);
    });
  };
  /**
   * Delete GDPR button handler
   */


  $ctrl.deleteGdpr = function () {
    if (!$window.confirm($translate.instant('USER_PROFILE.MEMBERSHIP.CONFIRM_DELETE_GDPR'))) return;
    return userProfileService.deleteGdpr(state.getCurrentCenterId(), $ctrl.user.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete GDPR.');
    }).then(function () {
      return $route.reload(), $timeout(5000);
    });
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/sections/up-membership.tpl.html":
/*!*********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-membership.tpl.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upMembership\" ng-if=\"$ctrl.schema.membership\" ff-block ff-block-save=\"$ctrl.save()\" ff-block-edit-default=\"$ctrl.user.isNew()\"> <ff-panel-header><span translate=\"USER_PROFILE.MEMBERSHIP.HEADER\"></span></ff-panel-header> <label class=\"ff-row\" ng-if=\"$ctrl.schema.membership.membershipStatus !== false\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.MEMBERSHIP.STATUS\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-select name=\"status\" ff-model=\"$ctrl.user.membershipStatus\" ff-options=\"status.name for status in $ctrl.membStatuses\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.MEMBERSHIP.STATUS' | translate}}\" ff-change=\"$ctrl.onChangeStatus()\"></ff-select> </label> <label class=\"ff-row\" ng-if=\"vm.reg && ($ctrl.user.membershipStatus.id === 'active' || $ctrl.user.membershipStatus.id === 'inactive')\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.MEMBERSHIP.CATEGORY\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-select name=\"type\" ff-model=\"$ctrl.user.membershipType\" ff-options=\"type.name for type in $ctrl.user.options.membershipTypes\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.MEMBERSHIP.CATEGORY' | translate}}\"></ff-select> </label> <label class=\"ff-row\" ng-if=\"vm.reg && ($ctrl.user.membershipStatus.id === 'active' || $ctrl.user.membershipStatus.id === 'inactive')\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.MEMBERSHIP.PLAN\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-select name=\"plan\" ff-model=\"$ctrl.user.membershipProduct\" ff-options=\"product.name for product in $ctrl.user.membershipType.membershipPackages\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.MEMBERSHIP.PLAN' | translate}}\"></ff-select> </label> <label class=\"ff-row\" ng-if=\"$ctrl.user.membershipStatus.id === 'active' || $ctrl.user.membershipStatus.id === 'inactive'\"> <ff-label flex=\"0 1 116px\"> <span> <span translate=\"USER_PROFILE.MEMBERSHIP.PRICE_LIST\" ng-class=\"{ req: ffBlock.editMode }\"></span> <ff-hint hint-type=\"warning\" ng-if=\"ffBlock.editMode && !$ctrl.reg && $ctrl.priceListOrig !== $ctrl.user.membershipPriceList\"> <span translate=\"USER_PROFILE.MEMBERSHIP.PRICE_LIST.CHANGE_WARNING\"></span> </ff-hint> </span> </ff-label> <ff-select name=\"priceList\" ff-model=\"$ctrl.user.membershipPriceList\" ff-options=\"plist.name for plist in $ctrl.user.options.membershipPriceLists\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.MEMBERSHIP.PRICE_LIST' | translate}}\"></ff-select> </label> <label class=\"ff-row\" ng-if=\"vm.reg && vm.reg.new && ($ctrl.user.membershipStatus.id === 'active' || $ctrl.user.membershipStatus.id === 'inactive')\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.MEMBERSHIP.DISCOUNT_CODE\"></span></ff-label> <ff-text name=\"discountCode\" ff-model=\"$ctrl.user.discountCode\" ff-validate-alert=\"{{'USER_PROFILE.MEMBERSHIP.DISCOUNT_CODE' | translate}}\"></ff-text> </label> <label class=\"ff-row\" ng-if=\"vm.reg && ($ctrl.user.membershipStatus.id === 'active' || $ctrl.user.membershipStatus.id === 'inactive')\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.MEMBERSHIP.START_DATE\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-date name=\"membershipStartDate\" ff-model=\"$ctrl.user.membershipStartDate\" ff-validate-alert=\"{{'USER_PROFILE.MEMBERSHIP.START_DATE' | translate}}\"></ff-date> </label> <label class=\"ff-row\" ng-if=\"$ctrl.schema.membership.attachedReservationUnit !== false\"> <ff-label flex=\"0 0 116px\"> <span translate=\"USER_PROFILE.MEMBERSHIP.ATTACHED_RESERVATION_UNIT\"></span> <ff-hint> <span translate=\"USER_PROFILE.MEMBERSHIP.ATTACHED_RESERVATION_UNIT.HINT\"></span> </ff-hint> </ff-label> <ff-select ff-model=\"$ctrl.user.attachedReservationUnit\" name=\"attachedReservationUnit\" ff-options=\"resUnit.name for resUnit in $ctrl.reservationUnits\" ff-dim=\"!$ctrl.reservationUnits\"> </ff-select> </label> <kisi-access-group user-id=\"$ctrl.user.id\" save=\"$ctrl.kisiSave\" ng-if=\"$ctrl.user.membershipStatus.id === 'active' || $ctrl.user.membershipStatus.id === 'inactive'\"></kisi-access-group> <doorflow-access-group user-id=\"$ctrl.user.id\" save=\"$ctrl.doorflowSave\" ng-if=\"$ctrl.user.membershipStatus.id === 'active' || $ctrl.user.membershipStatus.id === 'inactive'\"></doorflow-access-group> <ezeep-group user-id=\"$ctrl.user.id\" save=\"$ctrl.ezeepSave\"></ezeep-group> <label class=\"ff-row\" ng-if=\"$ctrl.user.makeRecurringBillingsInactive !== undefined\"> <ff-checkbox name=\"makeRecurringBillingsInactive\" ff-model=\"$ctrl.user.makeRecurringBillingsInactive\"> <span translate=\"USER_PROFILE.MEMBERSHIP.INACTIVATE_RECURRING_BILLINGS\"></span> </ff-checkbox> </label> <label class=\"ff-row\" ng-if=\"$ctrl.user.makeCoMembersInactive !== undefined && $ctrl.user.coMembers.length\"> <ff-checkbox name=\"makeCoMembersInactive\" ff-model=\"$ctrl.user.makeCoMembersInactive\"> <span translate=\"USER_PROFILE.MEMBERSHIP.INACTIVATE_CO_MEMBERS\"></span> </ff-checkbox> </label> <ff-row ng-if=\"$ctrl.user.membershipStatus.id === 'nonMember' && $ctrl.user.selfRegistrationStatus\"> <ff-label> <span class=\"text-danger\" ng-if=\"$ctrl.user.selfRegistrationStatus === 'banned'\"> <ff-icon sense=\"warning\" class=\"ff-flex-start\"></ff-icon> <span translate=\"USER_PROFILE.MEMBERSHIP.SIGN_UP.BANNED\"></span> </span> <span class=\"text-danger\" ng-if=\"$ctrl.user.selfRegistrationStatus === 'abandoned'\"> <ff-icon sense=\"warning\" class=\"ff-flex-start\"></ff-icon> <span translate=\"USER_PROFILE.MEMBERSHIP.SIGN_UP.ABANDONED\"></span> </span> <span class=\"text-danger\" ng-if=\"$ctrl.user.selfRegistrationStatus === 'staffHelp'\"> <ff-icon sense=\"warning\" class=\"ff-flex-start\"></ff-icon> <span translate=\"USER_PROFILE.MEMBERSHIP.SIGN_UP.STAFF_HELP\"></span> </span> <span class=\"text-brand\" ng-if=\"$ctrl.user.selfRegistrationStatus === 'inProgress'\"> <ff-icon sense=\"info\" class=\"ff-flex-start\"></ff-icon> <span translate=\"USER_PROFILE.MEMBERSHIP.SIGN_UP.IN_PROGRESS\"></span> </span> </ff-label> </ff-row> <ff-btn-group class=\"ff-section-buttons\" ng-if=\"!$ctrl.schema.membership.$readOnly && !$ctrl.reg.new\"> <ff-btn ff-btn-block-edit></ff-btn> <ff-btn ff-btn-block-save></ff-btn> <ff-btn ff-btn-block-cancel></ff-btn> <ff-btn sense=\"reset\" size=\"sm\" ff-click=\"$ctrl.resetSelfRegistrationStatus()\" ng-if=\"$ctrl.user.selfRegistrationStatus === 'abandoned' || $ctrl.user.selfRegistrationStatus === 'banned'\"> <span translate=\"USER_PROFILE.MEMBERSHIP.BTN_RESET_{{$ctrl.user.selfRegistrationStatus.toUpperCase()}}\"></span> </ff-btn> <ff-btn sense=\"reset\" size=\"sm\" ff-click=\"$ctrl.resetSelfRegistrationStatus()\" ng-if=\"$ctrl.user.selfRegistrationStatus === 'staffHelp'\"> <span translate=\"USER_PROFILE.MEMBERSHIP.BTN_RESET_STAFF_HELP\"></span> </ff-btn> <ff-btn sense=\"delete\" size=\"sm\" ff-click=\"$ctrl.deleteGdpr()\" ng-if=\"state.isLoggedAdmin() && $ctrl.settings.enableGdprDelete && !$ctrl.reg\"> <span translate=\"USER_PROFILE.MEMBERSHIP.BTN_DELETE_GDPR\"></span> </ff-btn> <ff-btn sense=\"delete\" size=\"sm\" ff-click=\"$ctrl.deleteUser()\" ng-if=\"state.isLoggedAdmin() && !state.isLoggedRole('coordinator') && !$ctrl.reg\"> <span translate=\"USER_PROFILE.MEMBERSHIP.BTN_DELETE_USER\"></span> </ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-personal-info.directive.js":
/*!****************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-personal-info.directive.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_dw_controls_dw_email_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/dw-controls/dw-email.directive */ "./shared/dw-controls/dw-email.directive.js");
/* harmony import */ var shared_dw_controls_dw_last_name_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/dw-controls/dw-last-name.directive */ "./shared/dw-controls/dw-last-name.directive.js");




/**
 * upPersonalInfo directive - 'Personal Information' section of user profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upPersonalInfo', ['deskworks.userProfile.service', shared_dw_controls_dw_email_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_dw_controls_dw_last_name_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name]).directive('upPersonalInfo', function () {
  var templateUrl = 'members/user-profile/sections/up-personal-info.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upPersonalInfoCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<'
    }
  };
}).controller('upPersonalInfoCtrl', ["$scope", "dwAlerts", "state", "userProfileService", function ($scope, dwAlerts, state, userProfileService) {
  var $ctrl = this;
  /**
   * Synchronize login with purified last name if login input is pristine for register non-member by coordinator.
   */

  $ctrl.onChangeLastName = function () {
    if ($ctrl.reg && !$ctrl.reg.member && !$ctrl.reg.selfRegistration) {
      var loginInput = angular.element(document.getElementsByName('login'));
      var loginScope = loginInput.scope();

      if (loginScope && loginScope.field && !loginInput.hasClass('ng-dirty')) {
        loginScope.field.value = ($ctrl.user.lastName || '').toLowerCase().replace(/\W/g, '') + '-' + Date.now();
      }
    }
  };
  /**
   * Save button handler
   */


  $ctrl.save = function () {
    var data = {
      firstName: $ctrl.user.firstName,
      middleName: $ctrl.user.middleName,
      lastName: $ctrl.user.lastName,
      email: $ctrl.user.email,
      company: $ctrl.user.company,
      occupation: $ctrl.user.occupation
    };
    return userProfileService.updateRaw(state.getCurrentCenterId(), $ctrl.user, data).then(function () {
      return $scope.$emit('CurrentUser:refresh');
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save personal information.');
    });
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/sections/up-personal-info.tpl.html":
/*!************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-personal-info.tpl.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upPersonalInfo\" ng-if=\"$ctrl.schema.personalInfo\" ff-block ff-block-save=\"$ctrl.save()\" ff-block-edit-default=\"$ctrl.user.isNew()\"> <ff-panel-header><span translate=\"USER_PROFILE.PERSONAL_INFO.HEADER\"></span></ff-panel-header> <div class=\"ff-grid gutter-h\"> <ff-col flex=\"{md: '0 0 50%'}\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"> <span translate=\"USER_PROFILE.PERSONAL_INFO.FIRST_NAME\" ng-class=\"{ req: ffBlock.editMode }\"></span> </ff-label> <ff-text name=\"firstName\" ff-model=\"$ctrl.user.firstName\" placeholder=\"John\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.PERSONAL_INFO.FIRST_NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\" ng-if=\"$ctrl.schema.personalInfo.middleName !== false\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.PERSONAL_INFO.MIDDLE_NAME\"></span></ff-label> <ff-text name=\"middleName\" ff-model=\"$ctrl.user.middleName\" placeholder=\"James\" ff-validate-alert=\"{{'USER_PROFILE.PERSONAL_INFO.MIDDLE_NAME' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"> <span translate=\"USER_PROFILE.PERSONAL_INFO.LAST_NAME\" ng-class=\"{ req: ffBlock.editMode }\"></span> </ff-label> <ff-text name=\"lastName\" ff-model=\"$ctrl.user.lastName\" ff-required=\"true\" dw-last-name placeholder=\"Doe\" ff-change=\"$ctrl.onChangeLastName()\"></ff-text> </label> </ff-col> <ff-col flex=\"{md: '0 0 50%'}\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"> <span translate=\"GLOBAL.EMAIL\" ng-class=\"{ req: ffBlock.editMode }\"></span> </ff-label> <ff-email name=\"email\" ff-model=\"$ctrl.user.email\" ff-required=\"true\" dw-email placeholder=\"jdoe@mail.com\"></ff-email> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.PERSONAL_INFO.COMPANY\"></span></ff-label> <ff-text name=\"company\" ff-model=\"$ctrl.user.company\" placeholder=\"JDOE Software\" ff-validate-alert=\"{{'USER_PROFILE.PERSONAL_INFO.COMPANY' | translate}}\"></ff-text> </label> <label class=\"ff-row\" ng-if=\"$ctrl.schema.personalInfo.occupation !== false\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.PERSONAL_INFO.OCCUPATION\"></span></ff-label> <ff-text name=\"occupation\" ff-model=\"$ctrl.user.occupation\" placeholder=\"Software Solutions Architect\" ff-validate-alert=\"{{'USER_PROFILE.PERSONAL_INFO.OCCUPATION' | translate}}\"></ff-text> </label> </ff-col> </div> <ff-btn-group class=\"ff-section-buttons\" ng-if=\"!$ctrl.schema.personalInfo.$readOnly && !$ctrl.reg.new\"> <ff-btn ff-btn-block-edit></ff-btn> <ff-btn ff-btn-block-save></ff-btn> <ff-btn ff-btn-block-cancel></ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-phones.directive.js":
/*!*********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-phones.directive.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_dw_controls_dw_phone_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/dw-controls/dw-phone.directive */ "./shared/dw-controls/dw-phone.directive.js");


/**
 * upPhones directive - 'Phones' section of user profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upPhones', ['deskworks.helper', 'deskworks.state', 'deskworks.userProfile.service', shared_dw_controls_dw_phone_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name]).directive('upPhones', function () {
  var templateUrl = 'members/user-profile/sections/up-phones.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upPhonesCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<',
      single: '<'
    }
  };
}).controller('upPhonesCtrl', ["$scope", "$q", "$window", "$translate", "dwAlerts", "helper", "state", "userProfileService", "optsPhoneType", function ($scope, $q, $window, $translate, dwAlerts, helper, state, userProfileService, optsPhoneType) {
  var $ctrl = this;
  $ctrl.types = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(optsPhoneType).call(optsPhoneType, function (type) {
    return angular.extend(type, {
      name: $translate.instant(type.name)
    });
  });
  $ctrl.new = userProfileService.phone.new;
  $ctrl.isNew = userProfileService.phone.isNew;
  /**
   * Counts existing (not new) phones.
   * Necessary to hide Remove button because at least one phone is required.
   */

  $ctrl.countExisting = function () {
    return $ctrl.user.phones.reduce(function (prev, curr) {
      return helper.isUid(curr.id) ? prev : prev + 1;
    }, 0);
  };
  /**
   * Save button handler.
   */


  $ctrl.save = function (phone) {
    return userProfileService.phone.save(state.getCurrentCenterId(), $ctrl.user.id, phone).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save phone.');
    });
  };
  /**
   * Delete button handler.
   */


  $ctrl.delete = function (phone) {
    if (userProfileService.phone.isNew(phone)) return $q.when();

    if ($window.confirm($translate.instant('USER_PROFILE.PHONES.CONFIRM_DELETE'))) {
      return userProfileService.phone.delete(state.getCurrentCenterId(), $ctrl.user.id, phone).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete phone.');
      });
    }

    return $q.reject();
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/sections/up-phones.tpl.html":
/*!*****************************************************************!*\
  !*** ./common/members/user-profile/sections/up-phones.tpl.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"upPhones\" ng-if=\"$ctrl.schema.phones\" class=\"ff-grid gutter-v gutter-h\" ff-section=\"phone in $ctrl.user.phones\" ff-section-new=\"$ctrl.new()\"> <ff-panel ng-if=\"!$ctrl.user.phones.length\"> <ff-panel-header><span translate=\"USER_PROFILE.PHONES\"></span></ff-panel-header> <span translate=\"USER_PROFILE.PHONES.EMPTY\"></span> </ff-panel> <ff-panel flex=\"{{ $ctrl.single ? null : {md: '0 0 50%'} }}\" id=\"{{'upPhone-' + phone.id}}\" ff-block ff-block-save=\"$ctrl.save(phone)\" ff-block-delete=\"$ctrl.delete(phone)\" ff-block-edit-default=\"$ctrl.isNew(phone)\" ff-block-is-new=\"$ctrl.isNew(phone)\"> <ff-panel-header><span translate=\"USER_PROFILE.PHONE\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.PHONES.TYPE\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-select name=\"type\" ff-model=\"phone.type\" ff-options=\"type.name for type in $ctrl.types\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.PHONES.TYPE' | translate}}\"></ff-select> </label> <ff-row> <label flex=\"1 1 auto\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.PHONES.NUMBER\" ng-class=\"{ req: ffBlock.editMode }\"></span></ff-label> <ff-text flex=\"1 1 1%\" name=\"number\" ff-model=\"phone.number\" ff-required=\"true\" dw-phone placeholder=\"888-379-2865\"></ff-text> </label> <label flex=\"0 0 78px\"> <ff-label flex=\"0 1 34px\"><span translate=\"USER_PROFILE.PHONES.EXT\"></span></ff-label> <ff-text flex=\"1 1 1%\" name=\"ext\" ff-model=\"phone.ext\"></ff-text> </label> </ff-row> <ff-btn-group class=\"ff-block-buttons\" ng-if=\"!$ctrl.schema.phones.$readOnly\"> <ff-btn ff-btn-block-edit ng-if=\"!$ctrl.reg.new\"></ff-btn> <ff-btn ff-btn-block-delete ng-if=\"($ctrl.isNew(phone) ? $ctrl.user.phones.length : $ctrl.countExisting()) > 1\" ng-hide=\"ffBlock.editMode && !$ctrl.reg.new\"></ff-btn> <ff-btn ff-btn-block-save ng-if=\"!$ctrl.reg.new\"></ff-btn> <ff-btn ff-btn-block-cancel ng-if=\"!$ctrl.reg.new\"></ff-btn> </ff-btn-group> </ff-panel> <ff-btn-group class=\"ff-btn-full\" ng-if=\"!$ctrl.schema.phones.$readOnly && !$ctrl.single\"> <ff-btn ff-btn-section-new> <span translate=\"GLOBAL.BTN_NEW\"></span> <span translate=\"USER_PROFILE.PHONE\"></span> </ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-photo.directive.js":
/*!********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-photo.directive.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _up_photo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./up-photo.scss */ "./common/members/user-profile/sections/up-photo.scss");
/* harmony import */ var _up_photo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_up_photo_scss__WEBPACK_IMPORTED_MODULE_0__);

/**
 * upPhoto directive - 'Photo' section of user profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upPhoto', []).directive('upPhoto', function () {
  var templateUrl = 'members/user-profile/sections/up-photo.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upPhotoCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<'
    }
  };
}).controller('upPhotoCtrl', ["$scope", "$timeout", "$translate", "$window", "dwAlerts", "state", "userProfileService", function ($scope, $timeout, $translate, $window, dwAlerts, state, userProfileService) {
  var $ctrl = this;
  /**
   * Save button handler
   */

  $ctrl.save = function ($files, $invalidFiles) {
    if ($invalidFiles && $invalidFiles.length > 0) {
      return dwAlerts.error($translate.instant('USER_PROFILE.PHOTO.INVALID_FORMAT'));
    }

    if ($files && $files.length > 0) {
      // For new user profile, doesn't start uploading, but read through fileReader and substitute url with data/base64 image data
      if ($ctrl.user.isNew()) {
        $ctrl.user.photoFile = $files[0]; // memorize photo file for uploading later

        if (window.FileReader && $files[0].type.indexOf('image') > -1) {
          var fileReader = new FileReader();
          fileReader.readAsDataURL($files[0]);

          fileReader.onload = function (e) {
            $timeout(function () {
              $ctrl.user.photo = e.target.result;
            });
          };
        }
      } else {
        // For existing profile, start uploading immediately
        $ctrl.spin = true;
        $ctrl.user.photoFile = $files[0];
        return userProfileService.photo.save(state.getCurrentCenterId(), $ctrl.user).then(function () {
          $ctrl.spin = false;
          $scope.$emit('CurrentUser:refresh');
        }, function (err) {
          $ctrl.spin = false;
          return dwAlerts.error(err, 'Failed to upload photo.');
        });
      }
    }
  };
  /**
   * Delete photo
   */


  $ctrl.delete = function () {
    if (!$window.confirm($translate.instant('GLOBAL.CONFIRM_DELETE_PHOTO'))) return;

    if ($ctrl.user.isNew()) {
      delete $ctrl.user.photoFile;
      $ctrl.user.photo = null;
    } else {
      return userProfileService.photo.delete({
        user: $ctrl.user
      }).catch(function (err) {
        return dwAlerts.error(err, 'Failed to delete photo.');
      }).then(function () {
        $ctrl.user.photo = null;
        $scope.$emit('CurrentUser:refresh');
      });
    }
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/sections/up-photo.scss":
/*!************************************************************!*\
  !*** ./common/members/user-profile/sections/up-photo.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/members/user-profile/sections/up-photo.tpl.html":
/*!****************************************************************!*\
  !*** ./common/members/user-profile/sections/up-photo.tpl.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upPhoto\" ng-if=\"$ctrl.schema.photo\" ngf-drop=\"$ctrl.save($files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\" ngf-drag-over-class=\"dragover\"> <ff-panel-header style=\"margin-bottom:.5rem\"><span translate=\"USER_PROFILE.PHOTO.HEADER\"></span></ff-panel-header> <div class=\"ff-row\"> <div> <ff-img ng-if=\"$ctrl.user.photo\" ff-src=\"{{$ctrl.user.photo}}\" img-placeholder=\"500x500\" ff-alt=\"{{$ctrl.user.fullName}}\"></ff-img> <ff-img ng-if=\"!$ctrl.user.photo\" ff-src=\"\" img-placeholder=\"500x500\" ff-alt=\"Photo\" ff-attr-src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAQAAADTdEb+AAACHElEQVR42u3SMQ0AAAzDsJU/6aGo+tgQouSgIBJgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsjCUBxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFjsPeVaAS0/Qs6MAAAAAElFTkSuQmCC\"></ff-img> </div> <ff-btn-group flex=\"0 0 auto\" class=\"ff-section-buttons\" ng-if=\"!$ctrl.schema.photo.$readOnly\"> <ff-btn sense=\"upload\" size=\"sm\" ff-spin=\"$ctrl.spin\" accept=\"image/png,image/jpeg\" ngf-select=\"$ctrl.save($files, $invalidFiles)\" ngf-pattern=\"'image/png,image/jpeg'\"> <span translate=\"USER_PROFILE.PHOTO.BTN_UPLOAD\"></span> </ff-btn> </ff-btn-group> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-printer-codes.directive.js":
/*!****************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-printer-codes.directive.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find-index */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find-index.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);





/**
 * upPrinterCodes directive - 'Printer Codes' section of user profile
 */
angular.module('deskworks.upPrinterCodes', ['deskworks.helper', 'deskworks.state', 'deskworks.userProfile.service']).directive('upPrinterCodes', function () {
  'use strict';

  var templateUrl = 'members/user-profile/sections/up-printer-codes.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upPrinterCodesCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<'
    }
  };
}).controller('upPrinterCodesCtrl', ["$scope", "$element", "$q", "dwAlerts", "helper", "state", "userProfileService", function ($scope, $element, $q, dwAlerts, helper, state, userProfileService) {
  'use strict';

  var $ctrl = this;
  /**
   * $onInit
   */

  $ctrl.$onInit = function () {
    // Clone and backup printer codes on edit start event
    $scope.$on('ffBlock::EditStart', function () {
      $ctrl.prCodesRollback = angular.copy($ctrl.user.printerCodes);
    }); // Rollback printer codes on edit cancel event

    $scope.$on('ffBlock::EditCancel', function () {
      $ctrl.user.printerCodes = $ctrl.prCodesRollback;
    });
  };
  /**
   * Add button handler.
   */


  $ctrl.add = function () {
    if (!$ctrl.editMode) $scope.$broadcast('ffBlock::EditStart');
    $ctrl.user.printerCodes.push(userProfileService.printerCode.new());
  };
  /**
   * Save button handler.
   */


  $ctrl.save = function () {
    var promises = []; // Iterate through new printer codes to find new/changed

    $ctrl.user.printerCodes.forEach(function (prCode) {
      var prCodeInit = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $ctrl.prCodesRollback, prCode.id);

      if (!prCodeInit || prCodeInit.code !== prCode.code) {
        // new or changed
        promises.push(userProfileService.printerCode.save(state.getCurrentCenterId(), $ctrl.user.id, prCode).catch(function (err) {
          return dwAlerts.error(err, 'Failed to save printer code.');
        }));
      }
    }); // Iterate through printer codes backup to find deleted

    $ctrl.prCodesRollback.forEach(function (prCodeInit) {
      var prCode = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_0___default()(helper).call(helper, $ctrl.user.printerCodes, prCodeInit.id);

      if (!prCode) {
        // deleted
        promises.push(userProfileService.printerCode.delete(state.getCurrentCenterId(), $ctrl.user.id, prCodeInit).catch(function (err) {
          return dwAlerts.error(err, 'Failed to delete printer code.');
        }));
      }
    });
    return $q.all(promises);
  };
  /**
   * Delete button handler.
   */


  $ctrl.delete = function (prCode) {
    var idx = _babel_runtime_corejs3_core_js_stable_instance_find_index__WEBPACK_IMPORTED_MODULE_1___default()(helper).call(helper, $ctrl.user.printerCodes, prCode.id);

    if (idx >= 0) {
      var _context;

      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_2___default()(_context = $ctrl.user.printerCodes).call(_context, idx, 1);

      var ffBlockForm = angular.element($element[0].querySelector('form[name="ffBlockForm"]')).scope().ffBlockForm;
      ffBlockForm.$setDirty();
    }
  };
}]);

/***/ }),

/***/ "./common/members/user-profile/sections/up-printer-codes.tpl.html":
/*!************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-printer-codes.tpl.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upPrinterCodes\" ng-if=\"$ctrl.schema.printerCodes\" ff-block ff-block-save=\"$ctrl.save()\" ff-block-edit=\"$ctrl.editMode\" ff-block-edit-default=\"$ctrl.user.isNew()\"> <ff-panel-header><span translate=\"USER_PROFILE.PRINTER_CODES.HEADER\"></span></ff-panel-header> <div class=\"ff-grid\"> <ff-row flex=\"0 0 50%\" ng-repeat=\"prCode in $ctrl.user.printerCodes\" id=\"{{'upPrinterCode-' + prCode.id}}\"> <ff-text name=\"printerCode\" ff-model=\"prCode.code\" ff-required=\"true\" ff-validate-alert=\"{{'USER_PROFILE.PRINTER_CODES.PRINTER_CODE' | translate}}\"></ff-text> <ff-btn flex=\"none\" sense=\"delete\" size=\"xs\" style=\"z-index:3\" title=\"{{'USER_PROFILE.PRINTER_CODES.BTN_DELETE.HINT' | translate}}\" ff-click=\"$ctrl.delete(prCode)\" ng-show=\"$ctrl.editMode\"></ff-btn> </ff-row> </div> <ff-btn-group class=\"ff-section-buttons\" ng-if=\"!$ctrl.schema.printerCodes.$readOnly\"> <ff-btn ff-btn-block-edit ng-if=\"!$ctrl.reg.new\"></ff-btn> <ff-btn ff-btn-block-save ng-if=\"!$ctrl.reg.new\"></ff-btn> <ff-btn ff-btn-block-cancel ng-if=\"!$ctrl.reg.new\"></ff-btn> <ff-btn sense=\"new\" size=\"sm\" ff-click=\"$ctrl.add()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-shareable.directive.js":
/*!************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-shareable.directive.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_form_design_fd_field_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/form-design/fd-field.directive */ "./shared/form-design/fd-field.directive.js");

/**
 * upShareable directive - 'Shareable' section of user profile
 */

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upShareable', ['deskworks.userProfile.service', 'deskworks.UserProfileFields', 'deskworks.optsShareEmail', shared_form_design_fd_field_directive__WEBPACK_IMPORTED_MODULE_0__["default"].name]).directive('upShareable', function () {
  var templateUrl = 'members/user-profile/sections/up-shareable.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upShareableCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<',
      fields: '<'
    }
  };
}).controller('upShareableCtrl', ["$scope", "$q", "dwAlerts", "state", "userProfileService", "UserProfileFields", "optsShareEmail", function ($scope, $q, dwAlerts, state, userProfileService, UserProfileFields, optsShareEmail) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.optsShareEmail = optsShareEmail;
  };
  /**
   * Save button handler
   */


  $ctrl.save = function () {
    var data = {
      sharePhoto: $ctrl.user.sharePhoto,
      shareCompany: $ctrl.user.shareCompany,
      shareOccupation: $ctrl.user.shareOccupation,
      shareEmail: $ctrl.user.shareEmail
    };
    return $q.all([userProfileService.updateRaw(state.getCurrentCenterId(), $ctrl.user, data).then(function () {
      return $scope.$emit('CurrentUser:refresh');
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save user shareable info.');
    }).catch(angular.noop), UserProfileFields.save(state.getCurrentCenterId(), $ctrl.user.id, $ctrl.fields).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save user profile fields.');
    }).catch(angular.noop)]);
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/sections/up-shareable.tpl.html":
/*!********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-shareable.tpl.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upShareable\" ng-if=\"$ctrl.schema.shareable\" ff-block ff-block-save=\"$ctrl.save()\" ff-block-edit-default=\"$ctrl.user.isNew()\"> <ff-panel-header> <span translate=\"USER_PROFILE.SHAREABLE_INFO.HEADER\"></span> <ff-hint><span translate=\"USER_PROFILE.SHAREABLE_INFO.HINT\"></span></ff-hint> </ff-panel-header> <ff-col ff-dim=\"!$ctrl.fields\"> <ff-row> <ff-label flex=\"0 1 160px\"><span translate=\"USER_PROFILE.SHAREABLE_INFO.PUBLIC_FIELDS\"></span></ff-label> <ff-static> <div class=\"ff-grid gutter-h-half\"> <label flex=\"0 0 auto\"> <ff-checkbox ff-model=\"$ctrl.user.sharePhoto\"> <span translate=\"USER_PROFILE.PHOTO.HEADER\"></span> </ff-checkbox> </label> <label flex=\"0 0 auto\"> <ff-checkbox ff-model=\"$ctrl.user.shareCompany\"> <span translate=\"USER_PROFILE.PERSONAL_INFO.COMPANY\"></span> </ff-checkbox> </label> <label flex=\"0 0 auto\"> <ff-checkbox ff-model=\"$ctrl.user.shareOccupation\"> <span translate=\"USER_PROFILE.PERSONAL_INFO.OCCUPATION\"></span> </ff-checkbox> </label> </div> </ff-static> </ff-row> <label class=\"ff-row\"> <ff-label flex=\"0 1 160px\"><span translate=\"GLOBAL.EMAIL\"></span></ff-label> <ff-select name=\"shareEmail\" ff-model=\"$ctrl.user.shareEmail\" ff-options=\"opt.id as opt.name for opt in $ctrl.optsShareEmail\"></ff-select> </label> <fd-field field=\"field\" ng-repeat=\"field in $ctrl.fields\"></fd-field> </ff-col> <ff-btn-group class=\"ff-section-buttons\" ng-if=\"!$ctrl.schema.shareable.$readOnly && !$ctrl.reg.new\"> <ff-btn ff-btn-block-edit></ff-btn> <ff-btn ff-btn-block-save></ff-btn> <ff-btn ff-btn-block-cancel></ff-btn> </ff-btn-group> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-system-info.directive.js":
/*!**************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-system-info.directive.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * upSystemInfo directive - 'System Information' section of user profile
 */
angular.module('deskworks.upSystemInfo', []).directive('upSystemInfo', function () {
  'use strict';

  var templateUrl = 'members/user-profile/sections/up-system-info.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upSystemInfoCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<'
    }
  };
}).controller('upSystemInfoCtrl', function () {
  'use strict';

  var $ctrl = this;
  /**
   * $onInit
   */
  // $ctrl.$onInit = function() {
  // };

  /**
   * $onChanges
   */

  $ctrl.$onChanges = function () {
    if ($ctrl.user) {
      var _context, _context2;

      $ctrl.user.activatedAt = $ctrl.user.activatedAt && _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = $ctrl.user.activatedAt).call(_context, function (center) {
        return center.centerName;
      }).join(', ');
      $ctrl.user.masterMembers = $ctrl.user.masterMembers && _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = $ctrl.user.masterMembers).call(_context2, function (master) {
        return master.fullName + (master.company ? ' (' + master.company + ')' : '');
      }).join(', ');
    }
  };
});

/***/ }),

/***/ "./common/members/user-profile/sections/up-system-info.tpl.html":
/*!**********************************************************************!*\
  !*** ./common/members/user-profile/sections/up-system-info.tpl.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upSystemInfo\" ng-if=\"$ctrl.schema.system\"> <ff-panel-header><span translate=\"USER_PROFILE.SYSTEM_INFO.HEADER\"></span></ff-panel-header> <div class=\"ff-grid gutter-h\"> <ff-col flex=\"{md: '0 0 50%'}\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.SYSTEM_INFO.JOIN_DATE\"></span></ff-label> <ff-static name=\"joinDate\" ff-bind=\"$ctrl.user.joinDate | date:'mediumDate'\"></ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.SYSTEM_INFO.USER_ID\"></span></ff-label> <ff-static name=\"userId\" ff-bind=\"$ctrl.user.id\"></ff-static> </label> </ff-col> <ff-col flex=\"{md: '0 0 50%'}\"> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.SYSTEM_INFO.REGISTERED_BY\"></span></ff-label> <ff-static name=\"registeredBy\" ff-bind=\"$ctrl.user.registeredBy\"></ff-static> </label> <label class=\"ff-row\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.SYSTEM_INFO.ACTIVATED_AT\"></span></ff-label> <ff-static name=\"activatedAt\" ff-bind=\"$ctrl.user.activatedAt\"></ff-static> </label> <label class=\"ff-row\" ng-if=\"$ctrl.user.masterMembers\"> <ff-label flex=\"0 1 116px\"><span translate=\"USER_PROFILE.SYSTEM_INFO.CO_MEMBER_OF\"></span></ff-label> <ff-static name=\"masterMembers\" ff-bind=\"$ctrl.user.masterMembers\"></ff-static> </label> </ff-col> </div> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/sections/up-terms-of-service.directive.js":
/*!*******************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-terms-of-service.directive.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * upTermsOfService directive - 'Terms Of Service' section of user profile
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.upTermsOfService', ['deskworks.helper', 'deskworks.state']).directive('upTermsOfService', function () {
  var templateUrl = 'members/user-profile/sections/up-terms-of-service.tpl.html';
  return {
    restrict: 'E',
    scope: true,
    templateUrl: templateUrl,
    controller: 'upTermsOfServiceCtrl as $ctrl',
    bindToController: {
      reg: '<',
      user: '<',
      schema: '<'
    }
  };
}).controller('upTermsOfServiceCtrl', function () {}));

/***/ }),

/***/ "./common/members/user-profile/sections/up-terms-of-service.tpl.html":
/*!***************************************************************************!*\
  !*** ./common/members/user-profile/sections/up-terms-of-service.tpl.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<ff-panel id=\"upTermsOfService\" ng-if=\"$ctrl.schema.termsOfService && $ctrl.user.isNew()\" class=\"ff-no-frame\"> <ff-panel-header style=\"margin-bottom:.5rem\"><req translate=\"USER_PROFILE.TERMS_OF_SERVICE.HEADER\"></req></ff-panel-header> <label class=\"ff-row\"> <ff-checkbox ff-model=\"$ctrl.user.termsOfService\" flex=\"0 0 36px\" class=\"ff-center\" ff-required=\"true\" ff-validate-alert=\"{ required: ('USER_PROFILE.TERMS_OF_SERVICE.REQUIRED' | translate) }\" title=\"{{'USER_PROFILE.TERMS_OF_SERVICE.REQUIRED' | translate}}\"> </ff-checkbox> <ff-label> <span> <span translate=\"USER_PROFILE.TERMS_OF_SERVICE.LABEL\"></span> <a ng-href=\"{{wlLinks.tosLinkUrl}}\" ng-bind=\"wlLinks.tosLinkText\" target=\"_blank\" rel=\"noopener\"></a> </span> </ff-label> </label> </ff-panel> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-profile/user-profile-edit.controller.js":
/*!*********************************************************************!*\
  !*** ./common/members/user-profile/user-profile-edit.controller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.members.userProfile.edit', ['deskworks.routeHelper', 'deskworks.helper', 'deskworks.setup.service', 'deskworks.userProfile.service', 'deskworks.UserProfileFields']).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/profile', {
    template: '<div ng-include="\'members/user-profile/user-profile.tpl.html\'" ff-bulk-read-only></div>',
    controller: 'UserProfileEditCtrl as vm',
    label: 'Profile',
    routeBranch: 'profile',
    translations: ['user-profile'],
    resolve: {
      reg: angular.noop,
      userProfile: ["dwAlerts", "userProfileService", "state", "routeHelper", "resolveTimezone", function userProfile(dwAlerts, userProfileService, state, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return routeHelper.selectUser().then(function () {
            return resolveTimezone();
          }).then(function () {
            return userProfileService.get(state.getCurrentCenterId(), state.getCurrentUserId()).catch(function (err) {
              return dwAlerts.error(err, 'Failed to load user profile.');
            });
          });
        });
      }],
      center: ["state", "centerService", function center(state, centerService) {
        return state.getCurrentCenterId() ? centerService.get(state.getCurrentCenterId()) : {};
      }],
      lazyKisi: 'lazyLoadKisi',
      lazyDoorflow: 'lazyLoadDoorflow',
      lazyEzeep: 'lazyLoadEzeep'
    }
  });
  $routeProvider.when('/new-member/:userId', {
    template: '<div ng-include="\'members/user-profile/user-profile.tpl.html\'" ff-bulk-read-only></div>',
    controller: 'UserProfileEditCtrl as vm',
    label: 'New Member',
    routeBranch: 'new-member',
    translations: ['user-profile'],
    resolve: {
      reg: function reg() {
        return {
          member: true,
          selfRegistration: false,
          step: 1,
          stepCount: 3
        };
      },
      userProfile: ["$route", "dwAlerts", "state", "userProfileService", "routeHelper", "resolveTimezone", function userProfile($route, dwAlerts, state, userProfileService, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.getForRegistration(state.getCurrentCenterId(), $route.current.params.userId, 'member', 'register').catch(function (err) {
            return dwAlerts.error(err, 'Failed to load user profile.');
          });
        });
      }],
      center: ["state", "centerService", function center(state, centerService) {
        return state.getCurrentCenterId() ? centerService.get(state.getCurrentCenterId()) : {};
      }],
      lazyKisi: 'lazyLoadKisi',
      lazyDoorflow: 'lazyLoadDoorflow',
      lazyEzeep: 'lazyLoadEzeep'
    }
  });
  $routeProvider.when('/new-user/:userId', {
    template: '<div ng-include="\'members/user-profile/user-profile.tpl.html\'" ff-bulk-read-only></div>',
    controller: 'UserProfileEditCtrl as vm',
    label: 'New User',
    routeBranch: 'new-user',
    translations: ['user-profile'],
    resolve: {
      reg: function reg() {
        return {
          member: false,
          selfRegistration: false,
          step: 1,
          stepCount: 2
        };
      },
      userProfile: ["$route", "dwAlerts", "state", "userProfileService", "routeHelper", "resolveTimezone", function userProfile($route, dwAlerts, state, userProfileService, routeHelper, resolveTimezone) {
        return routeHelper.auth().then(function () {
          return resolveTimezone();
        }).then(function () {
          return userProfileService.getForRegistration(state.getCurrentCenterId(), $route.current.params.userId, 'nonMember', 'register').catch(function (err) {
            return dwAlerts.error(err, 'Failed to load user profile.');
          });
        });
      }],
      center: ["state", "centerService", function center(state, centerService) {
        return state.getCurrentCenterId() ? centerService.get(state.getCurrentCenterId()) : {};
      }]
    }
  });
}]).controller('UserProfileEditCtrl', ["$scope", "$translate", "$filter", "dwAlerts", "state", "helper", "reg", "userProfile", "userProfileService", "setupService", "center", "UserProfileFields", function ($scope, $translate, $filter, dwAlerts, state, helper, reg, userProfile, userProfileService, setupService, center, UserProfileFields) {
  var vm = this;

  if (reg) {
    state.setPageTitle(reg.member ? 'New Member Registration' : 'New Non-Member Registration');
  } else {
    var pageTitle = $translate.instant('USER_PROFILE.PAGE_TITLE', {
      userName: userProfile.fullNameCompany
    });
    state.setPageTitle(pageTitle);
  }

  vm.reg = reg;
  vm.center = center;
  vm.userProfile = userProfile;
  vm.schema = userProfile.schema; // Set membershipProduct and membershipType from ?productId param

  if (vm.reg && vm.reg.member) {
    // Find membershipType and membershipProduct from route params
    vm.userProfile.options.membershipTypes.some(function (membType) {
      var product = helper.findByKeyValue(membType.membershipPackages, 'id', state.getParam('productId'));

      if (product) {
        vm.userProfile.membershipType = membType;
        vm.userProfile.membershipProduct = product;
      }

      return !!product;
    });

    if (state.getParam('membershipStartDate')) {
      vm.userProfile.membershipStartDate = $filter('toDate')(state.getParam('membershipStartDate'));
    }
  }

  if (!vm.reg) {
    setupService.getSetupSettings().then(function (result) {
      vm.settings = result;
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to get setup settings.');
    }).catch(angular.noop);
  }

  if (vm.schema.customFields || vm.schema.shareable) {
    UserProfileFields.query(state.getCurrentCenterId(), vm.userProfile.id).then(function (fields) {
      vm.customFields = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(fields).call(fields, function (field) {
        return field.section === 'customFields';
      });
      vm.shareable = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(fields).call(fields, function (field) {
        return field.section === 'shareable';
      });
    }).catch(function (err) {
      return dwAlerts.error(err, 'Failed to query user profile fields.');
    }).catch(angular.noop);
  }
  /**
   * Next button handler, available only in registration process
   */


  vm.next = function () {
    state.setParam('productId', (vm.userProfile.membershipProduct || {}).id);
    state.setParam('membershipStartDate', $filter('date')(vm.userProfile.membershipStartDate, 'yyyy-MM-dd'));
    return state.setPath(state.getPath() + '/membership/billing-profile');
  };
}]));

/***/ }),

/***/ "./common/members/user-profile/user-profile.module.js":
/*!************************************************************!*\
  !*** ./common/members/user-profile/user-profile.module.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bundles_lazy_loaders_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bundles/lazy-loaders.service.js */ "./bundles/lazy-loaders.service.js");

angular.module('deskworks.members.userProfile', ['deskworks.members.userProfile.new', 'deskworks.members.userProfile.edit', 'deskworks.upPersonalInfo', 'deskworks.upLoginInfo', 'deskworks.upPhoto', 'deskworks.upSystemInfo', 'deskworks.upAddresses', 'deskworks.upPhones', 'deskworks.upComments', 'deskworks.upMembership', 'deskworks.upPrinterCodes', 'deskworks.upDocuments', 'deskworks.upLeadSource', 'deskworks.upTermsOfService', 'deskworks.upCustomFields', 'deskworks.upShareable', 'deskworks.upCoMembers', 'deskworks.upMailboxes', 'deskworks.upCreditCards', 'deskworks.upEChecks', 'deskworks.upBillingMethod', 'deskworks.lazyLoaders']);

/***/ }),

/***/ "./common/members/user-profile/user-profile.tpl.html":
/*!***********************************************************!*\
  !*** ./common/members/user-profile/user-profile.tpl.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"user-profile\" id=\"userProfile\"> <h1 class=\"page-title\"> {{state.getPageTitle()}} <span ng-if=\"vm.reg.member && !vm.reg.selfRegistration\" ng-style=\"{ color: vm.center.color }\">{{vm.center.name}}</span> </h1> <div class=\"ff-grid ff-gutter-v ff-gutter-h\"> <up-personal-info user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.personalInfo\"></up-personal-info> <up-login-info flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.loginInfo\" member-directory-url=\"wlLinks.memberDirectoryUrl\"></up-login-info> <up-photo flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.photo\"></up-photo> <up-system-info user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.system\"></up-system-info> <up-addresses user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" center=\"vm.center\" ng-if=\"vm.schema.addresses\"></up-addresses> <up-phones user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.phones\"></up-phones> <up-comments flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.comments\"></up-comments> <up-membership flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.membership\" kisi-save=\"vm.kisiSave\" doorflow-save=\"vm.doorflowSave\" ezeep-save=\"vm.ezeepSave\" settings=\"vm.settings\"></up-membership> <up-printer-codes flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.printerCodes\"></up-printer-codes> <up-documents flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.documents\"></up-documents> <up-lead-source flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.leadSource\"></up-lead-source> <div ng-if=\"vm.schema.customFields && vm.customFields.length || vm.schema.shareable\"> <div class=\"ff-grid ff-gutter-v ff-gutter-h\"> <up-custom-fields flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" fields=\"vm.customFields\" ng-if=\"vm.schema.customFields && vm.customFields.length\"></up-custom-fields> <up-shareable flex=\"{md: '0 0 50%'}\" user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" fields=\"vm.shareable\" ng-if=\"vm.schema.shareable\"></up-shareable> </div> </div> <up-co-members user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.coMembers\"></up-co-members> <up-mailboxes user=\"vm.userProfile\" schema=\"vm.schema\" reg=\"vm.reg\" ng-if=\"vm.schema.mailboxes\"></up-mailboxes> </div> <ff-btn-group class=\"buttons-bottom\" ng-if=\"vm.reg\"> <ff-btn sense=\"next\" ff-click=\"vm.next()\"><span translate=\"GLOBAL.BTN_NEXT\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\" ng-if=\"vm.back\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./common/members/user-search/user-search-state.service.js":
/*!*****************************************************************!*\
  !*** ./common/members/user-search/user-search-state.service.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_membership_filter_opts_membership_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/membership-filter/opts-membership-filter.service */ "./shared/membership-filter/opts-membership-filter.service.js");


/**
* User Search state service
*/

angular.module('deskworks.userSearchState', [shared_membership_filter_opts_membership_filter_service__WEBPACK_IMPORTED_MODULE_1__["default"].name]).factory('userSearchState', ["$rootScope", "$translate", "optsMembershipFilter", function ($rootScope, $translate, optsMembershipFilter) {
  var state = {
    advanced: false,
    checkedIn: false,
    centerId: 0,
    page: 1,
    sort: 'lastName',
    order: 1,
    pageSize: 100,
    columns: [{
      id: 'firstName',
      _name: 'USER_SEARCH.COLUMNS.FIRST_NAME',
      include: true
    }, {
      id: 'lastName',
      _name: 'USER_SEARCH.COLUMNS.LAST_NAME',
      include: true
    }, {
      id: 'company',
      _name: 'USER_SEARCH.COLUMNS.COMPANY',
      include: true
    }, {
      id: 'email',
      _name: 'USER_SEARCH.COLUMNS.EMAIL',
      advanced: true,
      include: true
    }, {
      id: 'login',
      _name: 'USER_SEARCH.COLUMNS.LOGIN',
      advanced: true
    }, {
      id: 'phone',
      _name: 'USER_SEARCH.COLUMNS.PHONE',
      advanced: true
    }, {
      id: 'accessCode',
      _name: 'USER_SEARCH.COLUMNS.ACCESS_CODE',
      advanced: true
    }, {
      id: 'printerCode',
      _name: 'USER_SEARCH.COLUMNS.PRINTER_CODE',
      advanced: true
    }, {
      id: 'mailboxNumber',
      _name: 'USER_SEARCH.COLUMNS.MAILBOX_NUMBER',
      advanced: true
    }, {
      id: 'mailboxNames',
      _name: 'USER_SEARCH.COLUMNS.MAILBOX_NAME',
      advanced: true
    }, {
      id: 'occupation',
      _name: 'USER_SEARCH.COLUMNS.OCCUPATION',
      advanced: true
    }, {
      id: 'joinDate',
      _name: 'USER_SEARCH.COLUMNS.JOIN_DATE',
      advanced: true,
      tpl: 'userSearchDateTpl'
    }, {
      id: 'payor',
      _name: 'USER_SEARCH.COLUMNS.PAYOR',
      _hint: 'USER_SEARCH.COLUMNS.PAYOR.HINT',
      advanced: true
    }, {
      id: 'macAddress',
      _name: 'USER_SEARCH.COLUMNS.MAC_ADDRESS',
      advanced: true,
      tpl: 'userSearchMacTpl'
    }],
    resetColumns: resetColumns
  };
  state.filters = angular.copy(optsMembershipFilter); // reset state on logging in/out

  var backup = angular.copy(state);
  $rootScope.$on('LOGIN', reset);
  $rootScope.$on('LOGOUT', reset);

  function reset() {
    angular.copy(backup, state);
    translate();
  }

  function resetColumns() {
    state.columns = angular.copy(backup.columns);
    translate();
  }

  translate();
  $rootScope.$on('$setTranslationsSuccess', translate);

  function translate() {
    state.filters.forEach(function (item) {
      item.name = $translate.instant(item._name);
    });
    state.columns.forEach(function (item) {
      item.name = $translate.instant(item._name);
    });
    state.columns.forEach(function (item) {
      item.hint = $translate.instant(item._hint);
    });
  }

  return state;
}]);

/***/ }),

/***/ "./common/members/user-search/user-search.controller.js":
/*!**************************************************************!*\
  !*** ./common/members/user-search/user-search.controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_search_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-search.scss */ "./common/members/user-search/user-search.scss");
/* harmony import */ var _user_search_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_user_search_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_membership_filter_membership_filter_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/membership-filter/membership-filter.directive */ "./shared/membership-filter/membership-filter.directive.js");
/* harmony import */ var shared_dw_controls_dw_select_center_dw_select_center_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/dw-controls/dw-select-center/dw-select-center.directive */ "./shared/dw-controls/dw-select-center/dw-select-center.directive.js");








/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.members.userSearch', ['deskworks.routeHelper', 'deskworks.dwAlerts', 'deskworks.state', 'deskworks.helper', 'deskworks.userSearchState', 'flexForms.ffPagination', 'deskworks.userProfile.service', shared_membership_filter_membership_filter_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name, shared_dw_controls_dw_select_center_dw_select_center_directive__WEBPACK_IMPORTED_MODULE_7__["default"].name]).config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/user-search', {
    templateUrl: 'members/user-search/user-search.tpl.html',
    controller: 'UserSearchCtrl as $ctrl',
    label: 'User Search',
    routeBranch: 'user-search',
    reloadOnSearch: false,
    userTasksPolicy: false,
    translations: ['user-search'],
    resolve: {
      auth: ["routeHelper", function auth(routeHelper) {
        return routeHelper.auth();
      }]
    }
  });
}]).controller('UserSearchCtrl', ["$scope", "$filter", "$translate", "dwAlerts", "state", "helper", "userSearchState", "userProfileService", function ($scope, $filter, $translate, dwAlerts, state, helper, userSearchState, userProfileService) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('USER_SEARCH.PAGE_TITLE'));
  var us = $scope.us = userSearchState;
  us.centerId = state.getCurrentCenterId();
  if (us.users) $ctrl.previousSearch = true;
  us.resetColumns();
  us.advanced = false;
  /**
   * Search button handler
   */

  $ctrl.search = function (page) {
    var _context;

    var columns = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = us.columns).call(_context, function (col) {
      return !col.advanced || us.advanced;
    }).reduce(function (obj, col) {
      if (col.value) obj[col.id] = col.value;
      return obj;
    }, {});

    var data = angular.extend({
      page: page || us.page,
      pageSize: us.pageSize,
      sort: _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default()(us),
      order: us.order
    }, $ctrl.membershipFilter, columns);
    if (us.checkedIn) data.checkedIn = us.checkedIn;
    return userProfileService.search(us.centerId, data).catch(function (err) {
      return dwAlerts.error(err, 'Failed to search users.');
    }).then(function (result) {
      result.users.forEach(function (user) {
        user.joinDate = $filter('date')(user.joinDate, 'mediumDate');
      });
      angular.extend(us, result);
      $ctrl.previousSearch = false;
    });
  };
  /**
   * Filter visibility of search result columns
   */


  $ctrl.filterResultColumns = function (col) {
    return col.include && (!col.advanced || us.advanced || col.id === 'email');
  };
  /**
   * Select User button handler. Changes current user and redirects to ?redirect=path
   */


  $ctrl.selectUser = function (user) {
    state.setCurrentUserId(user.id);
    var redirect = state.getParam('redirect');

    if (redirect && redirect !== '/user-search') {
      state.setParam('redirect');
      return state.setPath(redirect);
    }

    return state.setPath('/profile');
  };
}]));

/***/ }),

/***/ "./common/members/user-search/user-search.scss":
/*!*****************************************************!*\
  !*** ./common/members/user-search/user-search.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./common/members/user-search/user-search.tpl.html":
/*!*********************************************************!*\
  !*** ./common/members/user-search/user-search.tpl.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"user-search\"> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <form name=\"userSearch\"> <membership-filter ff-model=\"$ctrl.membershipFilter\" filter-data=\"us.filters\"></membership-filter> <div class=\"ff-grid gutter-v gutter-h\"> <div flex=\"{md: '0 0 50%'}\"> <ff-panel> <label class=\"ff-row\"> <ff-label flex=\"0 0 104px\"><span translate=\"USER_SEARCH.ACTIVATED_AT\"></span></ff-label> <dw-select-center ff-model=\"us.centerId\" ff-option-all=\"true\"></dw-select-center> </label> <label class=\"ff-row\" ng-repeat=\"col in us.columns | filter : { advanced: '!true' }\"> <ff-label flex=\"0 0 104px\">{{col.name}}</ff-label> <ff-text name=\"{{col.id}}\" ff-model=\"col.value\"></ff-text> </label> <label class=\"ff-row\"> <ff-checkbox ff-model=\"us.advanced\"><span translate=\"USER_SEARCH.ADVANCED_SEARCH\"></span></ff-checkbox> </label> </ff-panel> </div> <div flex=\"{md: '0 0 50%'}\"> <ff-panel ng-collapse=\"!us.advanced\"> <ff-row class=\"us-show-row\"> <span title=\"{{'USER_SEARCH.SHOW.HINT' | translate}}\" translate=\"USER_SEARCH.SHOW\">Show</span> </ff-row> <ff-row ng-repeat=\"col in us.columns | filter : { advanced: 'true' }\" ng-include=\"col.tpl || 'userSearchTextTpl'\"> </ff-row> </ff-panel> </div> </div> <ff-btn-group class=\"buttons-bottom\" style=\"text-align:left\"> <ff-btn sense=\"search\" type=\"submit\" ff-click=\"$ctrl.search(1)\"><span translate=\"USER_SEARCH.BTN_SEARCH\"></span></ff-btn> </ff-btn-group> </form> <ff-panel ng-if=\"us.users\" id=\"searchResults\" class=\"us-results\"> <ff-panel-header> <span translate=\"USER_SEARCH.RESULTS.HEADER\" translate-values=\"{ count: us.userCount }\" ng-if=\"!$ctrl.previousSearch\"></span> <span translate=\"USER_SEARCH.PREV_RESULTS.HEADER\" translate-values=\"{ count: us.userCount }\" ng-if=\"$ctrl.previousSearch\"></span> </ff-panel-header> <ff-header> <ff-row> <cell ng-repeat=\"col in us.columns | filter: $ctrl.filterResultColumns\"> <span>{{col.name}}</span> <ff-sort props=\"us\" col-id=\"col.id\" ff-click=\"$ctrl.search()\"></ff-sort> </cell> <cell flex=\"0 0 22px\"></cell> </ff-row> </ff-header> <ff-row ng-repeat=\"user in us.users\" class=\"ff-clickable\" ng-click=\"$ctrl.selectUser(user)\" ff-dim> <ff-static ng-repeat=\"col in us.columns | filter: $ctrl.filterResultColumns\"> <span> <span ng-if=\"col.id !== 'email'\" ng-bind=\"::user[col.id]\"></span> <a ng-if=\"col.id === 'email'\" href=\"mailto:{{::user[col.id]}}\" ng-bind=\"::user[col.id]\" target=\"_blank\" rel=\"noopener\" ng-click=\"$event.stopPropagation()\"></a> <ff-hint ng-if=\"::user.isMasterMember && col.id === 'company'\"> <span translate=\"USER_SEARCH.MASTER_USER.HINT\" translate-values=\"{ company: user.company }\"></span> </ff-hint> </span> </ff-static> <ff-static flex=\"0 0 22px\"> <ff-icon sense=\"navigate\" title=\"{{'USER_SEARCH.BTN_SELECT.HINT' | translate}}\"></ff-icon> </ff-static> </ff-row> <ff-pagination props=\"us\" ff-click=\"$ctrl.search($page)\" ng-if=\"us.pageCount > 1\"></ff-pagination> </ff-panel> </div> <script type=\"text/ng-template\" id=\"userSearchTextTpl\"> <ff-static flex=\"0 0 30px\" class=\"ff-center\"><ff-checkbox ff-model=\"col.include\"></ff-checkbox></ff-static>\n  <label class=\"ff-row\" flex=\"auto\">\n    <ff-label flex=\"0 0 104px\">\n      <span>{{col.name}} <ff-hint ng-if=\"col.hint\">{{col.hint}}</ff-hint></span>\n    </ff-label>\n    <ff-text name=\"{{col.id}}\" ff-model=\"col.value\" ff-change=\"col.include = !!col.value\"></ff-text>\n  </label> </script> <script type=\"text/ng-template\" id=\"userSearchDateTpl\"> <ff-static flex=\"0 0 30px\" class=\"ff-center\"><ff-checkbox ff-model=\"col.include\"></ff-checkbox></ff-static>\n  <label class=\"ff-row\" flex=\"auto\">\n    <ff-label flex=\"0 0 104px\">{{col.name}}</ff-label>\n    <ff-date name=\"{{col.id}}\" ff-model=\"col.value\" ff-change=\"col.include = !!col.value\"\n             ff-validate-alert=\"{{'USER_SEARCH.COLUMNS.JOIN_DATE' | translate}}\"></ff-date>\n  </label> </script> <script type=\"text/ng-template\" id=\"userSearchMacTpl\"> <ff-static flex=\"0 0 30px\" class=\"ff-center\"><ff-checkbox ff-model=\"col.include\"></ff-checkbox></ff-static>\n  <label flex=\"1 1 auto\">\n    <ff-label flex=\"0 0 104px\">{{col.name}}</ff-label>\n    <ff-text flex=\"auto\" name=\"{{col.id}}\" ff-model=\"col.value\" ff-change=\"[col.include = !!col.value, us.checkedIn = us.checkedIn && !!col.value]\"></ff-text>\n  </label>\n  <label flex=\"0 0 auto\">\n    <ff-checkbox ff-model=\"us.checkedIn\" ff-disabled=\"!col.value\" class=\"ff-small\">\n      <span translate=\"USER_SEARCH.FILTERS.CHECKED_IN\"></span>\n    </ff-checkbox>\n  </label> </script> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=main~._common_g.js.map?_rev=c22925bb1728569e3dad