(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"+ODf":function(e,t,a){"use strict";a.r(t);var r=a("KK/u"),n=a.n(r),s=a("0zKI"),f=a.n(s);t.default=angular.module("deskworks.LeadSourceListCtrl",["deskworks.system.service","deskworks.routeHelper"]).controller("LeadSourceListCtrl",["$scope","$translate","dwAlerts","state","helper","leadSources","systemService",function(e,t,a,r,s,l,i){var c=this;r.setPageTitle(t.instant("LEAD_SOURCES.PAGE_TITLE")),c.leadSources=l,c.update=function(e,t,r){if(!s.pointFirstInvalid("#leadSource"+r)){var f={position:e.position,name:e.name};return(e.id?i.updateLeadSource(e.id,f):i.createLeadSource(f)).catch((function(e){return a.error(e,"Failed to save lead source.")})).then((function(a){var r;t.$setPristine(),e.id=a.id,n()(r=c.leadSources).call(r,(function(e,t){return e.position>t.position?1:e.position<t.position?-1:0}))}))}},c.new=function(){return c.leadSources.push({})},c.delete=function(e,t){if(e.id)return i.removeLeadSource(e.id).catch((function(e){return a.error(e,"Failed to save lead source.")})).then((function(){var e;f()(e=c.leadSources).call(e,t,1)}));var r;f()(r=c.leadSources).call(r,t,1)}}])},"/oDK":function(e,t){e.exports='<form name=vm.form id=accessCard novalidate> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel style=max-width:815px> <label class=ff-row> <ff-label flex="0 0 110px"><req translate=ACCESS_CARDS.NUMBER></req></ff-label> <ff-text name=number ff-model=vm.accessCard.number ff-required=true placeholder=12345 ff-validate-alert="{{\'ACCESS_CARDS.NUMBER\' | translate}}"></ff-text> </label> <label class=ff-row> <ff-label flex="0 0 110px"><span translate=ACCESS_CARDS.NOTES style="margin-bottom:auto;padding:.33rem 0"></span></ff-label> <ff-textarea name=notes ff-model=vm.accessCard.notes></ff-textarea> </label> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=vm.save() ff-disabled=vm.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> <ff-btn sense=remove ff-click=vm.delete() ng-if=vm.accessCard.id> <span translate=GLOBAL.BTN_DELETE></span> </ff-btn> <ff-btn sense=back ff-click=vm.back()><span translate=GLOBAL.BTN_BACK></span></ff-btn> </ff-btn-group> </div> </form> '},"1kNy":function(e,t,a){"use strict";a.r(t),t.default=angular.module("deskworks.AdministratorListCtrl",[]).controller("AdministratorListCtrl",["$scope","$translate","state","helper","admins",function(e,t,a,r,n){a.setPageTitle(t.instant("ADMINISTRATORS.PAGE_TITLE")),this.admins=n,this.edit=function(e){return a.setPath("/administrators/"+e.id)},this.new=function(){return a.setPath("/administrators/new")}}])},CzPF:function(e,t,a){"use strict";a.r(t),t.default=angular.module("deskworks.system.AccessCardEditCtrl",["deskworks.accessCard.service"]).controller("AccessCardEditCtrl",["$scope","$translate","dwAlerts","state","helper","user","accessCard","AccessCard",function(e,t,a,r,n,s,f,l){var i=this;i.accessCard=f||{},r.setPageTitle(t.instant(i.accessCard.id?"ACCESS_CARDS.EDIT.PAGE_TITLE":"ACCESS_CARDS.NEW.PAGE_TITLE",{userName:i.accessCard.id?i.accessCard.userName:s.firstName+" "+s.lastName})),i.save=function(){if(!n.pointFirstInvalid("#accessCard")){var e={number:i.accessCard.number,notes:i.accessCard.notes};return i.accessCard.id||(e.userId=r.getCurrentUserId()),(i.accessCard.id?l.update({centerId:r.getCurrentCenterId(),accessCardId:i.accessCard.id},e).$promise:l.save({centerId:r.getCurrentCenterId()},e).$promise).catch((function(e){return a.error(e,"Failed to save access card.")})).then((function(e){return i.accessCard.id?(i.form.$setPristine(),e):r.setPath("/access-cards/"+e.id)}))}},i.delete=function(e){if(confirm(t.instant("ACCESS_CARDS.CONFIRM_DELETE")))return l.delete({centerId:r.getCurrentCenterId(),accessCardId:i.accessCard.id}).$promise.catch((function(e){return a.error(e,"Failed to delete access card.")})).then((function(){return r.setPath("/access-cards")}))},i.back=function(){return r.setPath("/access-cards")},e.$watch("state.getCurrentCenterId()",(function(e,t){e!==t&&i.back()}))}])},OFQ3:function(e,t,a){"use strict";a.r(t);var r=a("xeXu"),n=a.n(r),s=a("hsT8"),f=a.n(s),l=a("zTcH"),i=a("DVTZ"),c=a("yrhy"),o=a("XRrO"),d=a("SGGL"),u=a("Oio6");t.default=angular.module("deskworks.AdminEditCtrl",["deskworks.Admin","deskworks.center.service","deskworks.helper","deskworks.optsAdminPermission","deskworks.adminRolesMatrix",l.a.name,i.a.name,c.a.name,o.a.name,d.a.name,u.a.name]).controller("AdminEditCtrl",["$scope","$window","$translate","$rootScope","$route","$q","state","helper","dwAlerts","admin","userProfile","adminRolesMatrix","Admin","upPrinterCodeService","upPhotoService","optsAdminPermission",function(e,t,a,r,s,l,i,c,o,d,u,m,p,b,A,C){var S,E=this;i.setPageTitle(a.instant(d.id?"ADMINISTRATORS.EDIT.PAGE_TITLE":"ADMINISTRATORS.NEW.PAGE_TITLE")),E.isNew="new"===s.current.params.adminId,E.admin=d,E.roles=f()(S=d.options.roles).call(S,(function(e){var t;return n()(t=m[i.getLoggedUser().role]).call(t,e.id)>=0||E.admin.role.id===e.id})),E.admin.printerCode=angular.copy(u.printerCodes&&u.printerCodes[0]||{id:c.uid(),code:""}),E.userProfile=u,E.schema={photo:!0},E.userProfile.isNew=function(){return!E.admin.id},E.optsPermission=C,E.save=function(){if(!c.pointFirstInvalid("#administrator"))return p.save(E.admin).catch((function(e){return o.error(e,"Failed to save administrator.")})).then((function(e){E.userProfile.id=e.id;var t=[];return E.admin.printerCode.code!==(E.userProfile.printerCodes&&E.userProfile.printerCodes[0]||{code:""}).code&&(E.admin.printerCode.code?t.push(b.save(i.getCurrentCenterId(),E.userProfile.id,E.admin.printerCode).catch((function(e){return o.error(e,"Failed to save printer code.")})).then((function(){E.userProfile.printerCodes=[E.admin.printerCode]}))):t.push(b.delete(i.getCurrentCenterId(),E.userProfile.id,E.admin.printerCode).catch((function(e){return o.error(e,"Failed to delete printer code.")})).then((function(){E.userProfile.printerCodes=[]})))),E.isNew&&t.push(A.save(i.getCurrentCenterId(),E.userProfile).catch((function(e){return o.error(e,"Failed to save photo.")}))),E.saveMessageBoardUserSettings&&t.push(E.saveMessageBoardUserSettings().catch((function(e){return o.error(e,"Failed to save message board user settings.")}))),l.all(t)})).then((function(){return r.$emit("CENTERS:REFRESH"),E.isNew?i.setPath("/administrators/".concat(E.admin.id)):E.form.$setPristine()}))},E.remove=function(){if(t.confirm(a.instant("ADMINISTRATORS.CONFIRM_DELETE")))return p.delete(E.admin.id).catch((function(e){return o.error(e,"Failed to delete administrator.")})).then((function(){return i.setPath("/administrators")}))},E.back=function(){return i.setPath("/administrators")},E.toTasks=function(e){return e.preventDefault(),i.setPath("/tasks")}}])},TdIT:function(e,t){e.exports='<div class=access-card-list ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-btn-group ng-if="vm.accessCards.length > 10"> <ff-btn sense=new ff-click=vm.new()><span translate=GLOBAL.BTN_NEW></span></ff-btn> </ff-btn-group> <ff-panel style=max-width:815px> <ff-header> <ff-row> <cell><span translate=ACCESS_CARDS.USER></span></cell> <cell><span translate=ACCESS_CARDS.NUMBER></span></cell> <ff-btn-group flex=none class="buttons-row zero-height"> <ff-btn sense=edit size=xs></ff-btn> <ff-btn sense=remove size=xs></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-row ng-repeat="accessCard in vm.accessCards"> <ff-static ff-bind=accessCard.userName></ff-static> <ff-static ff-bind=accessCard.number></ff-static> <ff-btn-group flex=none class=buttons-row> <ff-btn sense=edit size=xs ff-click=vm.edit(accessCard) title="{{\'GLOBAL.BTN_EDIT\' | translate}}"></ff-btn> <ff-btn sense=remove size=xs ff-click=vm.delete(accessCard) title="{{\'GLOBAL.BTN_DELETE\' | translate}}"></ff-btn> </ff-btn-group> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=new ff-click=vm.new()><span translate=GLOBAL.BTN_NEW></span></ff-btn> </ff-btn-group> </div> </div> '},Wz6g:function(e,t){e.exports='<div class=admin-list ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel style=max-width:815px> <ff-header> <ff-row> <cell><span translate=GLOBAL.FULL_NAME></span></cell> <cell><span translate=GLOBAL.ROLE></span></cell> <ff-btn size=xs flex=none class="buttons-row zero-height"></ff-btn> </ff-row> </ff-header> <ff-row ng-repeat="admin in $ctrl.admins"> <ff-static ff-bind=::admin.name></ff-static> <ff-static ff-bind=::admin.roleName></ff-static> <ff-btn flex=none sense=edit size=xs class=buttons-row ff-click=$ctrl.edit(admin) title="{{\'GLOBAL.BTN_EDIT\' | translate}}"></ff-btn> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=new ff-click=$ctrl.new()><span translate=GLOBAL.BTN_NEW></span></ff-btn> </ff-btn-group> </div> </div> '},Z706:function(e,t){e.exports='<div class=lead-source-list ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel style=max-width:815px> <ff-header> <ff-row> <cell class=ff-center flex="0 0 50px" title="{{\'GLOBAL.POSITION.HINT\' | translate}}"> <req translate=GLOBAL.POSITION></req> </cell> <cell><req translate=LEAD_SOURCES.NAME></req></cell> </ff-row> </ff-header> <form name=form id=leadSource{{$index}} ng-repeat="leadSource in vm.leadSources" novalidate> <ff-row> <ff-number class=ff-center flex="0 0 50px" ff-model=leadSource.position ff-required=true ff-validate-alert="{{\'LEAD_SOURCES.POSITION\' | translate}}"></ff-number> <ff-text ff-model=leadSource.name ff-required=true ff-validate-alert="{{\'LEAD_SOURCES.NAME\' | translate}}"></ff-text> <ff-btn-group flex=none class=buttons-row> <ff-btn sense=save type=submit size=xs title="{{\'GLOBAL.BTN_SAVE\' | translate}}" ff-click="vm.update(leadSource, form, $index)" ff-disabled=form.$pristine> </ff-btn> <ff-btn sense=remove size=xs title="{{\'GLOBAL.BTN_DELETE\' | translate}}" ff-click="vm.delete(leadSource, $index)"> </ff-btn> </ff-btn-group> </ff-row> </form> </ff-panel> <ff-btn-group> <ff-btn sense=new ff-click=vm.new()><span translate=GLOBAL.BTN_NEW></span></ff-btn> </ff-btn-group> </div> </div> '},k3kx:function(e,t,a){"use strict";a.r(t),t.default=angular.module("deskworks.AccessCardListCtrl",["deskworks.system.service","deskworks.accessCard.service"]).controller("AccessCardListCtrl",["$scope","$route","$timeout","$translate","dwAlerts","state","helper","accessCards","AccessCard",function(e,t,a,r,n,s,f,l,i){s.setPageTitle(r.instant("ACCESS_CARDS.PAGE_TITLE")),this.accessCards=l,this.edit=function(e){return s.setPath("/access-cards/"+e.id)},this.new=function(){return s.setPath("/access-cards/new")},this.delete=function(e){if(confirm(r.instant("ACCESS_CARDS.CONFIRM_DELETE")))return i.delete({centerId:s.getCurrentCenterId(),accessCardId:e.id}).$promise.catch((function(e){return n.error(e,"Failed to delete access card.")})).then((function(){return t.reload(),a(6e3)}))}}])},mrIR:function(e,t,a){var r={"./access-card/access-card-edit.tpl.html":"/oDK","./access-card/access-card-list.tpl.html":"TdIT","./administrator/administrator-edit.tpl.html":"xcvk","./administrator/administrator-list.tpl.html":"Wz6g","./lead-source/lead-source-list.tpl.html":"Z706"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="mrIR"},ngvt:function(e,t,a){"use strict";a.r(t),t.default=angular.module("deskworks.adminRolesMatrix",[]).factory("adminRolesMatrix",(function(){return{accountant:[],coordinator:[],admin:["accountant","coordinator","admin"],management:["accountant","coordinator","admin"],master:["accountant","coordinator","admin","management","master"]}}))},tNSu:function(e,t,a){"use strict";a.r(t);a("y89P");var r=a("WSeP"),n=a.n(r),s=a("lRNC"),f=a.n(s),l=a("yCd9"),i=a.n(l),c=["$injector",function(e){var t,r,s=(t=a("unGR"),i()(r=f()(t).call(t)).call(r,t));e.loadNewModules(i()(s).call(s,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t,r=a("mrIR");n()(t=f()(r).call(r)).call(t,(function(t){return e.put(t.replace(/^\.\//,""),r(t))}))}])}];t.default=c},unGR:function(e,t,a){var r={"./access-card/access-card-edit.controller.js":"CzPF","./access-card/access-card-list.controller.js":"k3kx","./administrator/admin-roles-matrix.service.js":"ngvt","./administrator/administrator-edit.controller.js":"OFQ3","./administrator/administrator-list.controller.js":"1kNy","./lead-source/lead-source-list.controller.js":"+ODf"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="unGR"},xcvk:function(e,t){e.exports='<form name=$ctrl.form id=administrator novalidate ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class="ff-grid gutter-v gutter-h"> <ff-panel flex="{lg: \'0 0 50%\'}"> <ff-panel-header><span translate=ADMINISTRATORS.GENERAL.HEADER></span></ff-panel-header> <label class=ff-row> <ff-label flex="0 0 100px"><req translate=GLOBAL.FULL_NAME></req></ff-label> <ff-text flex="1 1 120px" name=firstName ff-model=$ctrl.admin.firstName ff-required=true placeholder=John ff-validate-alert="{{\'GLOBAL.FIRST_NAME\' | translate}}"></ff-text> <ff-col flex="1 1 120px"> <ff-text name=lastName ff-model=$ctrl.admin.lastName ff-required=true dw-last-name ff-validate-alert="{{\'GLOBAL.LAST_NAME\' | translate}}"></ff-text> </ff-col> </label> <label class=ff-row> <ff-label flex="0 0 100px"><req translate=GLOBAL.LOGIN></req></ff-label> <ff-text name=login ff-model=$ctrl.admin.login ff-required=true dw-login></ff-text> </label> <label class=ff-row> <ff-label flex="0 0 100px" ff-required={{!$ctrl.admin.id}}><span translate=GLOBAL.PASSWORD></span></ff-label> <ff-password name=password ff-model=$ctrl.admin.password ff-required={{!$ctrl.admin.id}} dw-password ff-not-contain="[$ctrl.admin.login, $ctrl.admin.login.split(\'\').reverse().join(\'\'), $ctrl.admin.firstName, $ctrl.admin.lastName]" ff-validate-alert=\'{ "notContain": "{{&#39;GLOBAL.PASSWORD.NOT_CONTAIN&#39; | translate}}" }\'></ff-password> </label> <label class=ff-row> <ff-label flex="0 0 100px"><req translate=GLOBAL.EMAIL></req></ff-label> <ff-email name=email ff-model=$ctrl.admin.email ff-required=true dw-email></ff-email> </label> <label class=ff-row> <ff-label flex="0 0 100px"><req translate=GLOBAL.PHONE></req></ff-label> <ff-text name=phone ff-model=$ctrl.admin.phone ff-required=true dw-phone></ff-text> </label> </ff-panel> <up-photo flex="{lg: \'0 0 50%\'}" user=$ctrl.userProfile schema=$ctrl.schema></up-photo> <ff-panel flex="{lg: \'0 0 50%\'}"> <ff-panel-header><span translate=ADMINISTRATORS.PERMISSIONS.HEADER></span></ff-panel-header> <ff-header> <ff-row> <cell flex="0 0 50%"><span translate=ADMINISTRATORS.FACILITY></span></cell> <cell flex="0 0 20%" class=ff-center><span translate=ADMINISTRATORS.EMAILING></span></cell> <cell flex="0 0 30%"><span translate=ADMINISTRATORS.PERMISSION></span></cell> </ff-row> </ff-header> <label class=ff-row ng-repeat="center in $ctrl.admin.centers"> <ff-static flex="0 0 50%">{{center.name}}</ff-static> <ff-static flex="0 0 20%" class=ff-center> <ff-checkbox name=emailing ff-model=center.emailing></ff-checkbox> </ff-static> <ff-select flex="0 0 30%" name=permission ff-model=center.permission ff-options="opt.id as opt.name for opt in $ctrl.optsPermission"></ff-select> </label> </ff-panel> <ff-panel flex="{lg: \'0 0 50%\'}"> <ff-panel-header><span translate=ADMINISTRATORS.OTHER.HEADER></span></ff-panel-header> <label class=ff-row> <ff-label flex="0 0 116px"><req translate=GLOBAL.ROLE></req></ff-label> <ff-select name=role ff-model=$ctrl.admin.role ff-required=true ff-options="role.name for role in $ctrl.roles" ff-validate-alert="{{\'GLOBAL.ROLE\' | translate}}"></ff-select> </label> <label class=ff-row> <ff-label flex="0 0 116px"><span translate=ADMINISTRATORS.PRINTER_CODE></span></ff-label> <ff-text name=printerCode ff-model=$ctrl.admin.printerCode.code></ff-text> </label> <message-board-user-settings user-id=$ctrl.admin.id save=$ctrl.saveMessageBoardUserSettings></message-board-user-settings> <ff-static> <label class=ff-row> <ff-checkbox ff-model=$ctrl.admin.receiveUrgentReservationNotices no-title> <span translate=ADMINISTRATORS.SAME_DAY_RESERVATION_NOTICES></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=ADMINISTRATORS.SAME_DAY_RESERVATION_NOTICES.HINT></span></ff-hint> </ff-static> <ff-static> <label class=ff-row> <ff-checkbox ff-model=$ctrl.admin.receiveWelcomeEmailCopies no-title> <span translate=ADMINISTRATORS.WELCOME_EMAIL_COPIES></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=ADMINISTRATORS.WELCOME_EMAIL_COPIES.HINT></span></ff-hint> </ff-static> <ff-static> <label class=ff-row> <ff-checkbox ff-model=$ctrl.admin.receiveReservationConfirmationCopies no-title> <span translate=ADMINISTRATORS.RESERVATION_CONFIRMATIONS></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=ADMINISTRATORS.RESERVATION_CONFIRMATIONS.HINT></span></ff-hint> </ff-static> <ff-static> <label class=ff-row> <ff-checkbox ff-model=$ctrl.admin.seeDashboardRevenue no-title> <span translate=ADMINISTRATORS.REVENUE_IN_DASHBOARD></span> </ff-checkbox> </label> &nbsp; <ff-hint><span translate=ADMINISTRATORS.REVENUE_IN_DASHBOARD.HINT></span></ff-hint> </ff-static> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> <ff-btn sense=remove ff-click=$ctrl.remove() ng-if=$ctrl.admin.id><span translate=GLOBAL.BTN_DELETE></span></ff-btn> <ff-btn sense=back ff-click=$ctrl.back()><span translate=GLOBAL.BTN_BACK></span></ff-btn> </ff-btn-group> </div> </form> '}}]);