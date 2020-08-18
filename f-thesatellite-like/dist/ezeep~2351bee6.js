(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+248":function(e,r,t){"use strict";t.r(r),r.default=angular.module("deskworks.EzeepSettings",["ngResource","deskworks.config"]).factory("EzeepSettings",["$resource","deskworksConfig",function(e,r){var t=e(r.getApiAbsUrl("/ezeep/settings"),{},{get:{method:"GET"},update:{method:"PUT"}});return{get:function(){return t.get().$promise},save:function(e){return t.update({},e).$promise}}}])},"1ag4":function(e,r){e.exports='<div id=ezeepErrors> <h1 class=page-title>{{state.getPageTitle()}}</h1> <div class=gutter-v> <ff-panel ff-dim="$ctrl.fetching && !$ctrl.data"> <ff-header ng-if=$ctrl.data.errors.length> <ff-row> <cell flex="0 1 240px"><span translate=EZEEP_ERRORS.TIME></span></cell> <cell flex="0 1 160px" class="ff-center show-sm"><span translate=EZEEP_ERRORS.DW_ID></span></cell> <cell flex="0 1 200px"><span translate=EZEEP_ERRORS.EMAIL></span></cell> <cell flex="1 1 500px"><span translate=EZEEP_ERRORS.ERROR_TEXT></span></cell> </ff-row> </ff-header> <span translate=GLOBAL.NONE ng-if="!$ctrl.data.errors.length && !$ctrl.fetching"></span> <ff-row ng-repeat="error in $ctrl.data.errors"> <ff-static flex="0 1 240px"> <span>{{::error.time | date:\'mediumDate\'}} <span nice-time=::error.time></span></span> </ff-static> <ff-static flex="0 1 160px" class="ff-center show-sm">{{::error.dwId}}</ff-static> <ff-static flex="0 1 200px">{{::error.email}}</ff-static> <ff-static flex="1 1 500px">{{::error.errorText}}</ff-static> </ff-row> <ff-pagination props=$ctrl.data ff-click=$ctrl.fetch($page) ng-if="$ctrl.data.pageCount > 1"></ff-pagination> </ff-panel> </div> </div> '},C39i:function(e,r,t){"use strict";t.r(r),r.default=angular.module("deskworks.ezeepGroupDirective",["deskworks.EzeepUser","deskworks.EzeepGroup","deskworks.EzeepSettings"]).directive("ezeepGroup",(function(){return{templateUrl:"group/ezeep-group.tpl.html",restrict:"E",scope:!0,controller:"EzeepGroupCtrl as $ctrl",bindToController:{userId:"<",save:"="}}})).controller("EzeepGroupCtrl",["$q","dwAlerts","helper","state","EzeepUser","EzeepGroup","EzeepSettings",function(e,r,t,n,s,o,a){var f=this;function l(){if(f.ezeepEnabled)return f.ezeepUser.id=f.userId,s.save(f.ezeepUser).catch((function(e){return r.error(e,"Failed to save Ezeep user.")}))}f.$onInit=function(){f.load()},f.load=function(){return a.get().catch((function(e){return r.error(e,"Failed to query Ezeep settings.")})).then((function(n){f.ezeepEnabled=n.enabled;var a={};return f.ezeepEnabled&&(a.ezeepGroups=o.query().catch((function(e){return r.error(e,"Failed to query Ezeep groups.")}))),f.userId&&"new"!==f.userId&&!t.isUid(f.userId)&&(a.ezeepUser=s.get(f.userId).catch((function(e){return r.error(e,"Failed to get Ezeep user.")}))),e.all(a).then((function(e){e.ezeepUser?f.ezeepUser=e.ezeepUser:f.ezeepUser={ezeepGroupId:n.defaultEzeepGroupId},f.ezeepEnabled?f.ezeepGroups=e.ezeepGroups:f.ezeepGroups=[],f.ezeepGroups&&f.ezeepGroups.length&&f.ezeepEnabled&&(f.save=l)}))}))}}])},C6F0:function(e,r,t){"use strict";t.r(r);t("JBxO"),t("FdtR");r.default=angular.module("deskworks.ezeepSettingsDirective",["debounce","deskworks.EzeepGroup","deskworks.EzeepSettings"]).directive("ezeepSettings",(function(){return{templateUrl:"settings/ezeep-settings.tpl.html",restrict:"E",scope:!0,controller:"EzeepSettingsCtrl as $ctrl"}})).controller("EzeepSettingsCtrl",["dwAlerts","debounce","EzeepGroup","EzeepSettings",function(e,r,t,n){var s=this;function o(r){if(!r.$invalid)return s.spin=!0,n.save(s.settings).catch((function(r){return e.error(r,"Failed to save Ezeep settings.")})).finally((function(){s.spin=!1}))}function a(){return s.$$ezeepGroups=null,s.$$groupSpin=!0,t.query().catch((function(r){return e.error(r,"Failed to query Ezeep groups.")})).then((function(e){return s.$$ezeepGroups=e,e})).finally((function(){s.$$groupSpin=!1}))}s.$onInit=function(){s.load()},s.load=function(){return s.spin=!0,n.get().catch((function(r){return e.error(r,"Failed to load Ezeep settings.")})).finally((function(){s.spin=!1})).then((function(e){s.settings=e})).then((function(e){if(s.settings&&s.settings.enabled)return a()}))},s.save=r(o,1e3),s.changeEnabled=function(e){if(!s.settings.enabled)return o(e);s.save(e).then((function(){return a()}))}}])},CyfJ:function(e,r,t){var n={"./errors/ezeep-errors.controller.js":"jSUC","./errors/ezeep-errors.service.js":"f12y","./group/ezeep-group.directive.js":"C39i","./services/ezeep-group.service.js":"jWkI","./services/ezeep-settings.service.js":"+248","./services/ezeep-user.service.js":"wVrF","./settings/ezeep-settings.directive.js":"C6F0"};function s(e){var r=o(e);return t(r)}function o(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id="CyfJ"},LpgF:function(e,r){e.exports='<ff-panel> <ff-panel-header ff-spin=$ctrl.spin class=ff-spin-right> <span translate=INTEGRATIONS_SETUP.EZEEP.HEADER></span> </ff-panel-header> <form name=form novalidate> <label class=ff-row> <ff-label flex="0 0 120px"><span translate=INTEGRATIONS_SETUP.ENABLED></span></ff-label> <ff-static flex="1 1 155px"> <ff-checkbox name=enabled ff-model=$ctrl.settings.enabled ff-change=$ctrl.changeEnabled(form)></ff-checkbox> </ff-static> </label> <label class=ff-row> <ff-label flex="0 0 120px"> <req translate=INTEGRATIONS_SETUP.EZEEP.USERNAME></req> </ff-label> <ff-text ff-model=$ctrl.settings.userName ff-required=true ff-change=$ctrl.save(form) ff-validate-alert="{{\'INTEGRATIONS_SETUP.EZEEP.USERNAME\' | translate}}"></ff-text> </label> <label class=ff-row> <ff-label flex="0 0 120px"> <req translate=INTEGRATIONS_SETUP.EZEEP.PASSWORD></req> </ff-label> <ff-password ff-model=$ctrl.settings.password ff-required=true ff-change=$ctrl.save(form) ff-validate-alert="{{\'INTEGRATIONS_SETUP.EZEEP.PASSWORD\' | translate}}"></ff-password> </label> <ff-row ff-dim=$ctrl.$$groupSpin ng-if=$ctrl.settings.enabled> <label> <ff-label flex="0 0 120px"><req translate=INTEGRATIONS_SETUP.EZEEP.DEFAULT_GROUP></req></ff-label> <ff-select flex="1 1 155px" name=defaultEzeepGroupId ff-model=$ctrl.settings.defaultEzeepGroupId ff-options="group.id as group.name for group in $ctrl.$$ezeepGroups" ff-change=$ctrl.save(form) ff-validate-alert="{{\'INTEGRATIONS_SETUP.EZEEP.DEFAULT_GROUP\' | translate}}"></ff-select> </label> </ff-row> </form> </ff-panel> '},RceT:function(e,r,t){var n={"./errors/ezeep-errors.tpl.html":"1ag4","./group/ezeep-group.tpl.html":"qZXE","./settings/ezeep-settings.tpl.html":"LpgF"};function s(e){var r=o(e);return t(r)}function o(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id="RceT"},f12y:function(e,r,t){"use strict";t.r(r),r.default=angular.module("deskworks.EzeepErrors",["ngResource","deskworks.config","datesDeserializer"]).factory("EzeepErrors",["$resource","deskworksConfig","datesDeserializer",function(e,r,t){var n=t(["errors.time"]),s=e(r.getApiAbsUrl("/ezeep/errors"),{},{query:{method:"GET",isArray:!1,transformResponse:[angular.fromJson,n]}});return{query:function(e,r){return s.query({page:e,pageSize:r}).$promise}}}])},jSUC:function(e,r,t){"use strict";t.r(r);t("JBxO"),t("FdtR");var n=t("+l1P");r.default=angular.module("deskworks.EzeepErrorsCtrl",["deskworks.dwAlerts","deskworks.EzeepErrors",n.a.name]).controller("EzeepErrorsCtrl",["$scope","$translate","state","dwAlerts","EzeepErrors",function(e,r,t,n,s){var o=this;t.setPageTitle(r.instant("EZEEP_ERRORS.PAGE_TITLE")),o.fetch=function(e){return o.fetching=!0,s.query(e||o.data&&o.data.page||1,20).catch((function(e){return n.error(e,"Failed to query Ezeep errors.")})).then((function(e){o.data=e})).finally((function(){o.fetching=!1}))},o.fetch()}])},jWkI:function(e,r,t){"use strict";t.r(r),r.default=angular.module("deskworks.EzeepGroup",["ngResource","deskworks.config"]).factory("EzeepGroup",["$resource","deskworksConfig",function(e,r){var t=e(r.getApiAbsUrl("/ezeep/ezeep-groups"));return{query:function(e){return t.query({placeId:e}).$promise.then((function(e){return e.unshift({id:null,name:"No Access"}),e}))}}}])},oBRD:function(e,r,t){"use strict";t.r(r);t("Muwe"),t("y89P");var n=t("WSeP"),s=t.n(n),o=t("lRNC"),a=t.n(o),f=t("yCd9"),l=t.n(f),i=["$injector",function(e){var r,n,o=(r=t("CyfJ"),l()(n=a()(r).call(r)).call(n,r));e.loadNewModules(l()(o).call(o,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var r,n=t("RceT");s()(r=a()(n).call(n)).call(r,(function(r){return e.put(r.replace(/^\.\//,""),n(r))}))}])}];r.default=i},qZXE:function(e,r){e.exports='<label class="ff-row animate-collapse" ng-if="$ctrl.ezeepGroups.length && $ctrl.ezeepEnabled"> <ff-label flex="0 1 116px"><span translate=USER_PROFILE.MEMBERSHIP.EZEEP_GROUP></span></ff-label> <ff-select name=ezeepGroupId ff-model=$ctrl.ezeepUser.ezeepGroupId ff-options="opt.id as opt.name for opt in $ctrl.ezeepGroups"> </ff-select> </label> '},wVrF:function(e,r,t){"use strict";t.r(r),r.default=angular.module("deskworks.EzeepUser",["ngResource","deskworks.config"]).factory("EzeepUser",["$resource","deskworksConfig",function(e,r){var t=e(r.getApiAbsUrl("/ezeep/users/:userId"),{},{update:{method:"PUT"}});return{get:function(e){return t.get({userId:e}).$promise},save:function(e){return t.update({userId:e.id},e).$promise}}}])}}]);