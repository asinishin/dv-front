(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["system~._bundles_system "],{

/***/ "./bundles/system sync recursive .*\\.tpl\\.html$":
/*!********************************************!*\
  !*** ./bundles/system sync .*\.tpl\.html$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-card/access-card-edit.tpl.html": "./bundles/system/access-card/access-card-edit.tpl.html",
	"./access-card/access-card-list.tpl.html": "./bundles/system/access-card/access-card-list.tpl.html",
	"./administrator/administrator-edit.tpl.html": "./bundles/system/administrator/administrator-edit.tpl.html",
	"./administrator/administrator-list.tpl.html": "./bundles/system/administrator/administrator-list.tpl.html",
	"./lead-source/lead-source-list.tpl.html": "./bundles/system/lead-source/lead-source-list.tpl.html"
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
webpackContext.id = "./bundles/system sync recursive .*\\.tpl\\.html$";

/***/ }),

/***/ "./bundles/system sync recursive \\..+\\/.+\\.js$":
/*!*******************************************!*\
  !*** ./bundles/system sync \..+\/.+\.js$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-card/access-card-edit.controller.js": "./bundles/system/access-card/access-card-edit.controller.js",
	"./access-card/access-card-list.controller.js": "./bundles/system/access-card/access-card-list.controller.js",
	"./administrator/admin-roles-matrix.service.js": "./bundles/system/administrator/admin-roles-matrix.service.js",
	"./administrator/administrator-edit.controller.js": "./bundles/system/administrator/administrator-edit.controller.js",
	"./administrator/administrator-list.controller.js": "./bundles/system/administrator/administrator-list.controller.js",
	"./lead-source/lead-source-list.controller.js": "./bundles/system/lead-source/lead-source-list.controller.js"
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
webpackContext.id = "./bundles/system sync recursive \\..+\\/.+\\.js$";

/***/ }),

/***/ "./bundles/system/access-card/access-card-edit.controller.js":
/*!*******************************************************************!*\
  !*** ./bundles/system/access-card/access-card-edit.controller.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.system.AccessCardEditCtrl', ['deskworks.accessCard.service']).controller('AccessCardEditCtrl', ["$scope", "$translate", "dwAlerts", "state", "helper", "user", "accessCard", "AccessCard", function ($scope, $translate, dwAlerts, state, helper, user, accessCard, AccessCard) {
  var vm = this;
  vm.accessCard = accessCard || {};
  state.setPageTitle($translate.instant(vm.accessCard.id ? 'ACCESS_CARDS.EDIT.PAGE_TITLE' : 'ACCESS_CARDS.NEW.PAGE_TITLE', {
    userName: vm.accessCard.id ? vm.accessCard.userName : user.firstName + ' ' + user.lastName
  }));
  /**
   * Save Access Card handler
   */

  vm.save = function () {
    if (helper.pointFirstInvalid('#accessCard')) return;
    var data = {
      number: vm.accessCard.number,
      notes: vm.accessCard.notes
    };
    if (!vm.accessCard.id) data.userId = state.getCurrentUserId();
    var promise = vm.accessCard.id ? AccessCard.update({
      centerId: state.getCurrentCenterId(),
      accessCardId: vm.accessCard.id
    }, data).$promise : AccessCard.save({
      centerId: state.getCurrentCenterId()
    }, data).$promise;
    return promise.catch(function (err) {
      return dwAlerts.error(err, 'Failed to save access card.');
    }).then(function (result) {
      if (vm.accessCard.id) {
        vm.form.$setPristine();
        return result;
      } else {
        return state.setPath('/access-cards/' + result.id);
      }
    });
  };
  /**
   * Delete Access Card handler
   */


  vm.delete = function (accessCard) {
    if (!confirm($translate.instant('ACCESS_CARDS.CONFIRM_DELETE'))) return;
    return AccessCard.delete({
      centerId: state.getCurrentCenterId(),
      accessCardId: vm.accessCard.id
    }).$promise.catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete access card.');
    }).then(function () {
      return state.setPath('/access-cards');
    });
  };
  /**
   * Back button handler
   */


  vm.back = function () {
    return state.setPath('/access-cards');
  };

  $scope.$watch('state.getCurrentCenterId()', function (nv, ov) {
    if (nv !== ov) vm.back();
  });
}]));

/***/ }),

/***/ "./bundles/system/access-card/access-card-edit.tpl.html":
/*!**************************************************************!*\
  !*** ./bundles/system/access-card/access-card-edit.tpl.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"vm.form\" id=\"accessCard\" novalidate> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:815px\"> <label class=\"ff-row\"> <ff-label flex=\"0 0 110px\"><req translate=\"ACCESS_CARDS.NUMBER\"></req></ff-label> <ff-text name=\"number\" ff-model=\"vm.accessCard.number\" ff-required=\"true\" placeholder=\"12345\" ff-validate-alert=\"{{'ACCESS_CARDS.NUMBER' | translate}}\"></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 110px\"><span translate=\"ACCESS_CARDS.NOTES\" style=\"margin-bottom:auto;padding:.33rem 0\"></span></ff-label> <ff-textarea name=\"notes\" ff-model=\"vm.accessCard.notes\"></ff-textarea> </label> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"vm.save()\" ff-disabled=\"vm.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"remove\" ff-click=\"vm.delete()\" ng-if=\"vm.accessCard.id\"> <span translate=\"GLOBAL.BTN_DELETE\"></span> </ff-btn> <ff-btn sense=\"back\" ff-click=\"vm.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/system/access-card/access-card-list.controller.js":
/*!*******************************************************************!*\
  !*** ./bundles/system/access-card/access-card-list.controller.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/reports/services/report-helper.service */ "./shared/reports/services/report-helper.service.js");


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.AccessCardListCtrl', ['deskworks.system.service', 'deskworks.accessCard.service', shared_reports_services_report_helper_service__WEBPACK_IMPORTED_MODULE_1__["default"].name]).controller('AccessCardListCtrl', ["$scope", "$route", "$timeout", "$translate", "dwAlerts", "state", "helper", "accessCards", "center", "AccessCard", "reportHelper", function ($scope, $route, $timeout, $translate, dwAlerts, state, helper, accessCards, center, AccessCard, reportHelper) {
  var vm = this;
  state.setPageTitle($translate.instant('ACCESS_CARDS.PAGE_TITLE'));
  vm.accessCards = accessCards;
  /**
   * Edit Access Card handler
   */

  vm.edit = function (accessCard) {
    return state.setPath('/access-cards/' + accessCard.id);
  };
  /**
   * New Access Card handler
   */


  vm.new = function () {
    return state.setPath('/access-cards/new');
  };
  /**
   * Delete Access Card handler
   */


  vm.delete = function (accessCard) {
    if (!confirm($translate.instant('ACCESS_CARDS.CONFIRM_DELETE'))) return;
    return AccessCard.delete({
      centerId: state.getCurrentCenterId(),
      accessCardId: accessCard.id
    }).$promise.catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete access card.');
    }).then(function () {
      $route.reload();
      return $timeout(6000);
    });
  };
  /**
   * Download CSV handler
   */


  vm.download = function () {
    var _context;

    var config = {
      centerId: center.id,
      reportName: state.getPageTitle()
    };
    var resources = {
      centers: [center]
    };
    var fileName = reportHelper.getReportFileName({
      extension: 'csv',
      config: config,
      resources: resources
    });
    var report = {
      columns: [{
        title: $translate.instant('ACCESS_CARDS.USER')
      }, {
        title: $translate.instant('ACCESS_CARDS.NUMBER')
      }, {
        title: $translate.instant('ACCESS_CARDS.NOTES')
      }],
      rows: _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = vm.accessCards).call(_context, function (card) {
        return [card.userName, card.number, card.notes];
      })
    };
    var csv = reportHelper.buildCsv({
      report: report
    });
    reportHelper.download({
      blob: csv,
      fileName: fileName
    });
  };
}]));

/***/ }),

/***/ "./bundles/system/access-card/access-card-list.tpl.html":
/*!**************************************************************!*\
  !*** ./bundles/system/access-card/access-card-list.tpl.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"access-card-list\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\" style=\"max-width:815px\"> <ff-btn-group ng-if=\"vm.accessCards.length > 10\"> <ff-btn sense=\"new\" ff-click=\"vm.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> <ff-panel> <ff-header> <ff-row> <cell><span translate=\"ACCESS_CARDS.USER\"></span></cell> <cell><span translate=\"ACCESS_CARDS.NUMBER\"></span></cell> <ff-btn-group flex=\"none\" class=\"buttons-row zero-height\"> <ff-btn sense=\"edit\" size=\"xs\"></ff-btn> <ff-btn sense=\"remove\" size=\"xs\"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-row ng-repeat=\"accessCard in vm.accessCards\"> <ff-static ff-bind=\"accessCard.userName\"></ff-static> <ff-static ff-bind=\"accessCard.number\"></ff-static> <ff-btn-group flex=\"none\" class=\"buttons-row\"> <ff-btn sense=\"edit\" size=\"xs\" ff-click=\"vm.edit(accessCard)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> <ff-btn sense=\"remove\" size=\"xs\" ff-click=\"vm.delete(accessCard)\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\"></ff-btn> </ff-btn-group> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"download\" ff-click=\"vm.download()\"><span translate=\"GLOBAL.BTN_DOWNLOAD_CSV\"></span></ff-btn> <ff-btn sense=\"new\" ff-click=\"vm.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/system/administrator/admin-roles-matrix.service.js":
/*!********************************************************************!*\
  !*** ./bundles/system/administrator/admin-roles-matrix.service.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Roles allowed to edit by each role
 */
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.adminRolesMatrix', []).factory('adminRolesMatrix', function () {
  return {
    accountant: [],
    coordinator: [],
    admin: ['accountant', 'coordinator', 'admin'],
    management: ['accountant', 'coordinator', 'admin'],
    master: ['accountant', 'coordinator', 'admin', 'management', 'master']
  };
}));

/***/ }),

/***/ "./bundles/system/administrator/administrator-edit.controller.js":
/*!***********************************************************************!*\
  !*** ./bundles/system/administrator/administrator-edit.controller.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_message_board_user_settings_message_board_user_settings_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/message-board-user-settings/message-board-user-settings.directive */ "./shared/message-board-user-settings/message-board-user-settings.directive.js");
/* harmony import */ var shared_dw_controls_dw_email_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/dw-controls/dw-email.directive */ "./shared/dw-controls/dw-email.directive.js");
/* harmony import */ var shared_dw_controls_dw_login_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/dw-controls/dw-login.directive */ "./shared/dw-controls/dw-login.directive.js");
/* harmony import */ var shared_dw_controls_dw_password_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/dw-controls/dw-password.directive */ "./shared/dw-controls/dw-password.directive.js");
/* harmony import */ var shared_dw_controls_dw_last_name_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/dw-controls/dw-last-name.directive */ "./shared/dw-controls/dw-last-name.directive.js");
/* harmony import */ var shared_dw_controls_dw_phone_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/dw-controls/dw-phone.directive */ "./shared/dw-controls/dw-phone.directive.js");







/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.AdminEditCtrl', ['deskworks.Admin', 'deskworks.center.service', 'deskworks.helper', 'deskworks.optsAdminPermission', 'deskworks.adminRolesMatrix', shared_message_board_user_settings_message_board_user_settings_directive__WEBPACK_IMPORTED_MODULE_1__["default"].name, shared_dw_controls_dw_email_directive__WEBPACK_IMPORTED_MODULE_2__["default"].name, shared_dw_controls_dw_login_directive__WEBPACK_IMPORTED_MODULE_3__["default"].name, shared_dw_controls_dw_password_directive__WEBPACK_IMPORTED_MODULE_4__["default"].name, shared_dw_controls_dw_last_name_directive__WEBPACK_IMPORTED_MODULE_5__["default"].name, shared_dw_controls_dw_phone_directive__WEBPACK_IMPORTED_MODULE_6__["default"].name]).controller('AdminEditCtrl', ["$scope", "$window", "$translate", "$rootScope", "$route", "$q", "state", "helper", "dwAlerts", "admin", "userProfile", "adminRolesMatrix", "Admin", "upPrinterCodeService", "upPhotoService", "optsAdminPermission", function ($scope, $window, $translate, $rootScope, $route, $q, state, helper, dwAlerts, admin, userProfile, adminRolesMatrix, Admin, upPrinterCodeService, upPhotoService, optsAdminPermission) {
  var _context;

  var $ctrl = this;
  state.setPageTitle($translate.instant(admin.id ? 'ADMINISTRATORS.EDIT.PAGE_TITLE' : 'ADMINISTRATORS.NEW.PAGE_TITLE'));
  $ctrl.isNew = $route.current.params.adminId === 'new';
  $ctrl.admin = admin;
  $ctrl.roles = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(_context = admin.options.roles).call(_context, function (role) {
    return adminRolesMatrix[state.getLoggedUser().role].indexOf(role.id) >= 0 || $ctrl.admin.role.id === role.id;
  });
  $ctrl.admin.printerCode = angular.copy(userProfile.printerCodes && userProfile.printerCodes[0] || {
    id: helper.uid(),
    code: ''
  });
  $ctrl.userProfile = userProfile;
  $ctrl.schema = {
    photo: true
  };

  $ctrl.userProfile.isNew = function () {
    return !$ctrl.admin.id;
  };

  $ctrl.optsPermission = optsAdminPermission;
  /**
   * Save Admin handler
   */

  $ctrl.save = function () {
    if (helper.pointFirstInvalid('#administrator')) return;
    return Admin.save($ctrl.admin).catch(function (err) {
      return dwAlerts.error(err, 'Failed to save administrator.');
    }).then(function (result) {
      $ctrl.userProfile.id = result.id;
      var promises = [];

      if ($ctrl.admin.printerCode.code !== ($ctrl.userProfile.printerCodes && $ctrl.userProfile.printerCodes[0] || {
        code: ''
      }).code) {
        if ($ctrl.admin.printerCode.code) {
          promises.push(upPrinterCodeService.save(state.getCurrentCenterId(), $ctrl.userProfile.id, $ctrl.admin.printerCode).catch(function (err) {
            return dwAlerts.error(err, 'Failed to save printer code.');
          }).then(function () {
            $ctrl.userProfile.printerCodes = [$ctrl.admin.printerCode];
          }));
        } else {
          // blank printer code, delete it
          promises.push(upPrinterCodeService.delete(state.getCurrentCenterId(), $ctrl.userProfile.id, $ctrl.admin.printerCode).catch(function (err) {
            return dwAlerts.error(err, 'Failed to delete printer code.');
          }).then(function () {
            $ctrl.userProfile.printerCodes = [];
          }));
        }
      }

      if ($ctrl.isNew) {
        promises.push(upPhotoService.save(state.getCurrentCenterId(), $ctrl.userProfile).catch(function (err) {
          return dwAlerts.error(err, 'Failed to save photo.');
        }));
      }

      if ($ctrl.saveMessageBoardUserSettings) {
        promises.push($ctrl.saveMessageBoardUserSettings().catch(function (err) {
          return dwAlerts.error(err, 'Failed to save message board user settings.');
        }));
      }

      return $q.all(promises);
    }).then(function () {
      $rootScope.$emit('CENTERS:REFRESH');
      if (!$ctrl.isNew) return $ctrl.form.$setPristine();
      return state.setPath("/administrators/".concat($ctrl.admin.id));
    });
  };
  /**
   * Remove Admin handler
   */


  $ctrl.remove = function () {
    if (!$window.confirm($translate.instant('ADMINISTRATORS.CONFIRM_DELETE'))) return;
    return Admin.delete($ctrl.admin.id).catch(function (err) {
      return dwAlerts.error(err, 'Failed to delete administrator.');
    }).then(function () {
      return state.setPath('/administrators');
    });
  };
  /**
   * Back button handler
   */


  $ctrl.back = function () {
    return state.setPath('/administrators');
  };
  /**
   * Navigate Tasks
   */


  $ctrl.toTasks = function ($event) {
    $event.preventDefault();
    return state.setPath('/tasks');
  };
}]));

/***/ }),

/***/ "./bundles/system/administrator/administrator-edit.tpl.html":
/*!******************************************************************!*\
  !*** ./bundles/system/administrator/administrator-edit.tpl.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<form name=\"$ctrl.form\" id=\"administrator\" novalidate ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"ff-grid gutter-v gutter-h\"> <ff-panel flex=\"{lg: '0 0 50%'}\"> <ff-panel-header><span translate=\"ADMINISTRATORS.GENERAL.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"GLOBAL.FULL_NAME\"></req></ff-label> <ff-text flex=\"1 1 120px\" name=\"firstName\" ff-model=\"$ctrl.admin.firstName\" ff-required=\"true\" placeholder=\"John\" ff-validate-alert=\"{{'GLOBAL.FIRST_NAME' | translate}}\"></ff-text> <ff-col flex=\"1 1 120px\"> <ff-text name=\"lastName\" ff-model=\"$ctrl.admin.lastName\" ff-required=\"true\" dw-last-name ff-validate-alert=\"{{'GLOBAL.LAST_NAME' | translate}}\"></ff-text> </ff-col> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"GLOBAL.LOGIN\"></req></ff-label> <ff-text name=\"login\" ff-model=\"$ctrl.admin.login\" ff-required=\"true\" dw-login></ff-text> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\" ff-required=\"{{!$ctrl.admin.id}}\"><span translate=\"GLOBAL.PASSWORD\"></span></ff-label> <ff-password name=\"password\" ff-model=\"$ctrl.admin.password\" ff-required=\"{{!$ctrl.admin.id}}\" dw-password ff-not-contain=\"[$ctrl.admin.login, $ctrl.admin.login.split('').reverse().join(''), $ctrl.admin.firstName, $ctrl.admin.lastName]\" ff-validate-alert='{ \"notContain\": \"{{&#39;GLOBAL.PASSWORD.NOT_CONTAIN&#39; | translate}}\" }'></ff-password> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"GLOBAL.EMAIL\"></req></ff-label> <ff-email name=\"email\" ff-model=\"$ctrl.admin.email\" ff-required=\"true\" dw-email></ff-email> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 100px\"><req translate=\"GLOBAL.PHONE\"></req></ff-label> <ff-text name=\"phone\" ff-model=\"$ctrl.admin.phone\" ff-required=\"true\" dw-phone></ff-text> </label> </ff-panel> <up-photo flex=\"{lg: '0 0 50%'}\" user=\"$ctrl.userProfile\" schema=\"$ctrl.schema\"></up-photo> <ff-panel flex=\"{lg: '0 0 50%'}\"> <ff-panel-header><span translate=\"ADMINISTRATORS.PERMISSIONS.HEADER\"></span></ff-panel-header> <ff-header> <ff-row> <cell flex=\"0 0 50%\"><span translate=\"ADMINISTRATORS.FACILITY\"></span></cell> <cell flex=\"0 0 20%\" class=\"ff-center\"><span translate=\"ADMINISTRATORS.EMAILING\"></span></cell> <cell flex=\"0 0 30%\"><span translate=\"ADMINISTRATORS.PERMISSION\"></span></cell> </ff-row> </ff-header> <label class=\"ff-row\" ng-repeat=\"center in $ctrl.admin.centers\"> <ff-static flex=\"0 0 50%\">{{center.name}}</ff-static> <ff-static flex=\"0 0 20%\" class=\"ff-center\"> <ff-checkbox name=\"emailing\" ff-model=\"center.emailing\"></ff-checkbox> </ff-static> <ff-select flex=\"0 0 30%\" name=\"permission\" ff-model=\"center.permission\" ff-options=\"opt.id as opt.name for opt in $ctrl.optsPermission\"></ff-select> </label> </ff-panel> <ff-panel flex=\"{lg: '0 0 50%'}\"> <ff-panel-header><span translate=\"ADMINISTRATORS.OTHER.HEADER\"></span></ff-panel-header> <label class=\"ff-row\"> <ff-label flex=\"0 0 116px\"><req translate=\"GLOBAL.ROLE\"></req></ff-label> <ff-select name=\"role\" ff-model=\"$ctrl.admin.role\" ff-required=\"true\" ff-options=\"role.name for role in $ctrl.roles\" ff-validate-alert=\"{{'GLOBAL.ROLE' | translate}}\"></ff-select> </label> <label class=\"ff-row\"> <ff-label flex=\"0 0 116px\"><span translate=\"ADMINISTRATORS.PRINTER_CODE\"></span></ff-label> <ff-text name=\"printerCode\" ff-model=\"$ctrl.admin.printerCode.code\"></ff-text> </label> <message-board-user-settings user-id=\"$ctrl.admin.id\" save=\"$ctrl.saveMessageBoardUserSettings\"></message-board-user-settings> <ff-static> <label class=\"ff-row\"> <ff-checkbox ff-model=\"$ctrl.admin.receiveUrgentReservationNotices\" no-title> <span translate=\"ADMINISTRATORS.SAME_DAY_RESERVATION_NOTICES\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"ADMINISTRATORS.SAME_DAY_RESERVATION_NOTICES.HINT\"></span></ff-hint> </ff-static> <ff-static> <label class=\"ff-row\"> <ff-checkbox ff-model=\"$ctrl.admin.receiveWelcomeEmailCopies\" no-title> <span translate=\"ADMINISTRATORS.WELCOME_EMAIL_COPIES\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"ADMINISTRATORS.WELCOME_EMAIL_COPIES.HINT\"></span></ff-hint> </ff-static> <ff-static> <label class=\"ff-row\"> <ff-checkbox ff-model=\"$ctrl.admin.receiveReservationConfirmationCopies\" no-title> <span translate=\"ADMINISTRATORS.RESERVATION_CONFIRMATIONS\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"ADMINISTRATORS.RESERVATION_CONFIRMATIONS.HINT\"></span></ff-hint> </ff-static> <ff-static> <label class=\"ff-row\"> <ff-checkbox ff-model=\"$ctrl.admin.seeDashboardRevenue\" no-title> <span translate=\"ADMINISTRATORS.REVENUE_IN_DASHBOARD\"></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=\"ADMINISTRATORS.REVENUE_IN_DASHBOARD.HINT\"></span></ff-hint> </ff-static> </ff-panel> <ff-btn-group> <ff-btn sense=\"save\" type=\"submit\" ff-click=\"$ctrl.save()\" ff-disabled=\"$ctrl.form.$pristine\"> <span translate=\"GLOBAL.BTN_SAVE\"></span> </ff-btn> <ff-btn sense=\"remove\" ff-click=\"$ctrl.remove()\" ng-if=\"$ctrl.admin.id\"><span translate=\"GLOBAL.BTN_DELETE\"></span></ff-btn> <ff-btn sense=\"back\" ff-click=\"$ctrl.back()\"><span translate=\"GLOBAL.BTN_BACK\"></span></ff-btn> </ff-btn-group> </div> </form> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/system/administrator/administrator-list.controller.js":
/*!***********************************************************************!*\
  !*** ./bundles/system/administrator/administrator-list.controller.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.AdministratorListCtrl', []).controller('AdministratorListCtrl', ["$scope", "$translate", "state", "helper", "admins", function ($scope, $translate, state, helper, admins) {
  var $ctrl = this;
  state.setPageTitle($translate.instant('ADMINISTRATORS.PAGE_TITLE'));
  $ctrl.admins = admins;
  /**
   * Edit Admin handler
   */

  $ctrl.edit = function (admin) {
    return state.setPath('/administrators/' + admin.id);
  };
  /**
   * New Admin handler
   */


  $ctrl.new = function () {
    return state.setPath('/administrators/new');
  };
}]));

/***/ }),

/***/ "./bundles/system/administrator/administrator-list.tpl.html":
/*!******************************************************************!*\
  !*** ./bundles/system/administrator/administrator-list.tpl.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"admin-list\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:815px\"> <ff-header> <ff-row> <cell><span translate=\"GLOBAL.FULL_NAME\"></span></cell> <cell><span translate=\"GLOBAL.ROLE\"></span></cell> <ff-btn size=\"xs\" flex=\"none\" class=\"buttons-row zero-height\"></ff-btn> </ff-row> </ff-header> <ff-row ng-repeat=\"admin in $ctrl.admins\"> <ff-static ff-bind=\"::admin.name\"></ff-static> <ff-static ff-bind=\"::admin.roleName\"></ff-static> <ff-btn flex=\"none\" sense=\"edit\" size=\"xs\" class=\"buttons-row\" ff-click=\"$ctrl.edit(admin)\" title=\"{{'GLOBAL.BTN_EDIT' | translate}}\"></ff-btn> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"$ctrl.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ "./bundles/system/index.js":
/*!*********************************!*\
  !*** ./bundles/system/index.js ***!
  \*********************************/
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

  var js = importAll(__webpack_require__("./bundles/system sync recursive \\..+\\/.+\\.js$"));
  $injector.loadNewModules(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(js).call(js, function (m) {
    return m.default.name;
  })); // Templates

  $injector.invoke(['$templateCache', function ($templateCache) {
    var ctx = __webpack_require__("./bundles/system sync recursive .*\\.tpl\\.html$");

    _babel_runtime_corejs3_core_js_stable_instance_keys__WEBPACK_IMPORTED_MODULE_4___default()(ctx).call(ctx).forEach(function (key) {
      return $templateCache.put(key.replace(/^\.\//, ''), ctx(key));
    });
  }]);
}];
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./bundles/system/lead-source/lead-source-list.controller.js":
/*!*******************************************************************!*\
  !*** ./bundles/system/lead-source/lead-source-list.controller.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/splice */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/splice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "../node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (angular.module('deskworks.LeadSourceListCtrl', ['deskworks.system.service', 'deskworks.routeHelper']).controller('LeadSourceListCtrl', ["$scope", "$translate", "dwAlerts", "state", "helper", "leadSources", "systemService", function ($scope, $translate, dwAlerts, state, helper, leadSources, systemService) {
  var vm = this;
  state.setPageTitle($translate.instant('LEAD_SOURCES.PAGE_TITLE'));
  vm.leadSources = leadSources;
  /**
   * Update Lead Source handler
   */

  vm.update = function (leadSource, form, index) {
    if (helper.pointFirstInvalid('#leadSource' + index)) return;
    var data = {
      position: leadSource.position,
      name: leadSource.name
    };
    var promise = leadSource.id ? systemService.updateLeadSource(leadSource.id, data) : systemService.createLeadSource(data);
    return promise.catch(function (err) {
      return dwAlerts.error(err, 'Failed to save lead source.');
    }).then(function (result) {
      form.$setPristine();
      leadSource.id = result.id;
      sortLeadSources();
    });
  };
  /**
   * New LeadSource handler
   */


  vm.new = function () {
    return vm.leadSources.push({});
  };
  /**
   * Delete LeadSource handler
   */


  vm.delete = function (leadSource, index) {
    if (leadSource.id) {
      // existing Lead Source
      return systemService.removeLeadSource(leadSource.id).catch(function (err) {
        return dwAlerts.error(err, 'Failed to save lead source.');
      }).then(function () {
        var _context;

        _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context = vm.leadSources).call(_context, index, 1);
      });
    } else {
      var _context2;

      // new Lead Source
      _babel_runtime_corejs3_core_js_stable_instance_splice__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = vm.leadSources).call(_context2, index, 1);
    }
  };
  /**
   * Sorts vm.leadSources by position. Called by vm.update method
   */


  function sortLeadSources() {
    var _context3;

    _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = vm.leadSources).call(_context3, function (leadSource1, leadSource2) {
      if (leadSource1.position > leadSource2.position) return 1;
      if (leadSource1.position < leadSource2.position) return -1;
      return 0;
    });
  }
}]));

/***/ }),

/***/ "./bundles/system/lead-source/lead-source-list.tpl.html":
/*!**************************************************************!*\
  !*** ./bundles/system/lead-source/lead-source-list.tpl.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"lead-source-list\" ff-bulk-read-only> <h1 class=\"page-title\">{{state.getPageTitle()}}</h1> <div class=\"gutter-v\"> <ff-panel style=\"max-width:815px\"> <ff-header> <ff-row> <cell class=\"ff-center\" flex=\"0 0 50px\" title=\"{{'GLOBAL.POSITION.HINT' | translate}}\"> <req translate=\"GLOBAL.POSITION\"></req> </cell> <cell><req translate=\"LEAD_SOURCES.NAME\"></req></cell> </ff-row> </ff-header> <form name=\"form\" id=\"leadSource{{$index}}\" ng-repeat=\"leadSource in vm.leadSources\" novalidate> <ff-row> <ff-number class=\"ff-center\" flex=\"0 0 50px\" ff-model=\"leadSource.position\" ff-required=\"true\" ff-validate-alert=\"{{'LEAD_SOURCES.POSITION' | translate}}\"></ff-number> <ff-text ff-model=\"leadSource.name\" ff-required=\"true\" ff-validate-alert=\"{{'LEAD_SOURCES.NAME' | translate}}\"></ff-text> <ff-btn-group flex=\"none\" class=\"buttons-row\"> <ff-btn sense=\"save\" type=\"submit\" size=\"xs\" title=\"{{'GLOBAL.BTN_SAVE' | translate}}\" ff-click=\"vm.update(leadSource, form, $index)\" ff-disabled=\"form.$pristine\"> </ff-btn> <ff-btn sense=\"remove\" size=\"xs\" title=\"{{'GLOBAL.BTN_DELETE' | translate}}\" ff-click=\"vm.delete(leadSource, $index)\"> </ff-btn> </ff-btn-group> </ff-row> </form> </ff-panel> <ff-btn-group> <ff-btn sense=\"new\" ff-click=\"vm.new()\"><span translate=\"GLOBAL.BTN_NEW\"></span></ff-btn> </ff-btn-group> </div> </div> ";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=system~._bundles_system .js.map?_rev=b9230496ca2debf5fa90