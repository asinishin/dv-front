(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+n1t":function(e,r,i){"use strict";i.r(r),r.default=angular.module("deskworks.KisiUser",["ngResource","deskworks.config"]).factory("KisiUser",["$resource","deskworksConfig",function(e,r){var i=e(r.getApiAbsUrl("/kisi/centers/:centerId/users/:userId"),{},{update:{method:"PUT"}});return{get:function(e,r){return i.get({centerId:e,userId:r}).$promise},save:function(e,r){return i.update({centerId:e,userId:r.id},r).$promise}}}])},"2D+T":function(e,r,i){"use strict";i.r(r);var s=i("yCd9"),t=i.n(s),n=i("nbuU"),c=i.n(n);i("FdtR"),i("JBxO");r.default=angular.module("deskworks.kisiSettingsDirective",["debounce","deskworks.KisiSettings","deskworks.KisiCenter","deskworks.KisiPlace","deskworks.KisiAccessGroup","deskworks.center.service"]).directive("kisiSettings",(function(){return{templateUrl:"settings/kisi-settings.tpl.html",restrict:"E",scope:!0,controller:"KisiSettingsCtrl as $ctrl"}})).controller("KisiSettingsCtrl",["dwAlerts","$q","debounce","helper","centerService","KisiSettings","KisiCenter","KisiAccessGroup","KisiPlace",function(e,r,i,s,n,o,a,u,l){var f=this;function d(i){return i.$$kisiGroups=null,i.kisiPlaceId?(i.$$spin=!0,u.query(i.kisiPlaceId).catch((function(r){return e.error(r,"Failed to query Kisi access groups.")})).then((function(e){return i.$$kisiGroups=e,e})).finally((function(){i.$$spin=!1}))):r.when(null)}f.$onInit=function(){f.load()},f.load=function(){var i={kisiSettings:o.get().catch((function(r){return e.error(r,"Failed to load Kisi settings.")})),centers:n.getCenters().catch((function(r){return e.error(r,"Failed to query centers.")})),kisiCenters:a.query().catch((function(r){return e.error(r,"Failed to query Kisi centers.")})),kisiPlaces:l.query().catch((function(r){return e.error(r,"Failed to query Kisi places.")}))};return f.spin=!0,r.all(i).then((function(e){return f.kisiSettings=e.kisiSettings,f.kisiCenters=e.kisiCenters,f.kisiPlaces=e.kisiPlaces,e})).finally((function(){f.spin=!1})).then((function(e){var i,n=t()(i=f.kisiCenters).call(i,(function(r){return r.$$name=(c()(s).call(s,e.centers,r.id)||{}).name,d(r)}));return r.all(n)}))},f.saveSettings=i((function(r){if(r&&r.$invalid)return;return f.spin=!0,o.save(f.kisiSettings).catch((function(r){return e.error(r,"Failed to save Kisi settings.")})).finally((function(){f.spin=!1})).then((function(){return delete f.kisiCenters,f.load()}))}),1e3),f.saveCenter=i((function(r,i){if(i&&i.$invalid)return;return r.$$spin=!0,a.save(r).finally((function(){r.$$spin=!1})).catch((function(r){return e.error(r,"Failed to save Kisi center.")}))}),500),f.changePlace=function(e,r){return d(e).then((function(){return f.saveCenter(e,r)}))}}])},AtqB:function(e,r){e.exports='<ff-panel> <ff-panel-header ff-spin="$ctrl.spin" class="ff-spin-right"> <span translate="INTEGRATIONS_SETUP.KISI.HEADER"></span> </ff-panel-header> <form name="form" novalidate ff-dim="$ctrl.spin"> <label class="ff-row"> <ff-label flex="0 0 120px"><req translate="INTEGRATIONS_SETUP.API_KEY"></req></ff-label> <ff-text ff-model="$ctrl.kisiSettings.apiKey" ff-change="$ctrl.saveSettings(form)" ff-required="true" ff-validate-alert="{{\'INTEGRATIONS_SETUP.API_KEY\' | translate}}"></ff-text> </label> </form> <form name="form" novalidate ng-repeat="center in $ctrl.kisiCenters" class="animate-collapse"> <ff-header ff-dim="center.$$spin" style="padding-top:.6rem"><cell>{{center.$$name}}</cell></ff-header> <label class="ff-row"> <ff-label flex="1 1 270px"><span translate="INTEGRATIONS_SETUP.ENABLED"></span></ff-label> <ff-static flex="1 1 305px"> <ff-checkbox name="enabled" ff-model="center.enabled" ff-change="$ctrl.saveCenter(center, form)"></ff-checkbox> </ff-static> </label> <label class="ff-row"> <ff-label flex="1 1 270px"><req translate="INTEGRATIONS_SETUP.KISI.PLACE"></req></ff-label> <ff-select flex="1 1 305px" name="kisiPlaceId" ff-model="center.kisiPlaceId" ff-required="true" ff-options="place.id as place.name for place in $ctrl.kisiPlaces" ff-change="$ctrl.changePlace(center, form)" ff-validate-alert="{{\'INTEGRATIONS_SETUP.KISI.PLACE\' | translate}}"></ff-select> </label> <ff-row ff-dim="center.$$spin && !center.$$kisiGroups"> <label> <ff-label flex="1 1 270px"><req translate="INTEGRATIONS_SETUP.KISI.DEFAULT_ACCESS_GROUP"></req></ff-label> <ff-select flex="1 1 305px" name="defaultKisiGroupId" ff-model="center.defaultKisiGroupId" ff-options="group.id as group.name for group in center.$$kisiGroups" ff-change="$ctrl.saveCenter(center, form)" ff-validate-alert="{{\'INTEGRATIONS_SETUP.KISI.DEFAULT_ACCESS_GROUP\' | translate}}"></ff-select> </label> </ff-row> </form> </ff-panel> '},BAIu:function(e,r,i){"use strict";i.r(r);i("3dw1"),i("y89P"),i("Muwe");var s=i("yCd9"),t=i.n(s),n=i("lRNC"),c=i.n(n),o=["$injector",function(e){var r,s,n=(r=i("Lsfu"),t()(s=c()(r).call(r)).call(s,r));e.loadNewModules(t()(n).call(n,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var r=i("cBTd");c()(r).call(r).forEach((function(i){return e.put(i.replace(/^\.\//,""),r(i))}))}])}];r.default=o},"K+2R":function(e,r,i){"use strict";i.r(r),r.default=angular.module("deskworks.KisiCenter",["ngResource","deskworks.config"]).factory("KisiCenter",["$resource","deskworksConfig",function(e,r){var i=e(r.getApiAbsUrl("/kisi/centers/:centerId"),{},{update:{method:"PUT"}});return{query:function(){return i.query().$promise},save:function(e){return i.update({centerId:e.id},e).$promise}}}])},KAtn:function(e,r,i){"use strict";i.r(r),r.default=angular.module("deskworks.KisiAccessGroup",["ngResource","deskworks.config"]).factory("KisiAccessGroup",["$resource","deskworksConfig",function(e,r){var i=e(r.getApiAbsUrl("/kisi/kisi-places/:placeId/kisi-groups"));return{query:function(e){return i.query({placeId:e}).$promise.then((function(e){return e.unshift({id:null,name:"No Access"}),e}))}}}])},Lsfu:function(e,r,i){var s={"./access-group/kisi-access-group.directive.js":"SXRw","./services/kisi-access-group.service.js":"KAtn","./services/kisi-center.service.js":"K+2R","./services/kisi-place.service.js":"Pof/","./services/kisi-settings.service.js":"f4YS","./services/kisi-user.service.js":"+n1t","./settings/kisi-settings.directive.js":"2D+T"};function t(e){var r=n(e);return i(r)}function n(e){if(!i.o(s,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return s[e]}t.keys=function(){return Object.keys(s)},t.resolve=n,e.exports=t,t.id="Lsfu"},"Pof/":function(e,r,i){"use strict";i.r(r),r.default=angular.module("deskworks.KisiPlace",["ngResource","deskworks.config"]).factory("KisiPlace",["$resource","deskworksConfig",function(e,r){var i=e(r.getApiAbsUrl("/kisi/kisi-places"),{},{update:{method:"PUT"}});return{query:function(){return i.query().$promise}}}])},SXRw:function(e,r,i){"use strict";i.r(r);var s=i("nbuU"),t=i.n(s);r.default=angular.module("deskworks.kisiAccessGroupDirective",["deskworks.KisiCenter","deskworks.KisiUser","deskworks.KisiAccessGroup"]).directive("kisiAccessGroup",(function(){return{templateUrl:"access-group/kisi-access-group.tpl.html",restrict:"E",scope:!0,controller:"KisiAccessGroupCtrl as $ctrl",bindToController:{userId:"<",save:"="}}})).controller("KisiAccessGroupCtrl",["$q","dwAlerts","helper","state","KisiCenter","KisiUser","KisiAccessGroup",function(e,r,i,s,n,c,o){var a=this;function u(){if(a.kisiCenter.enabled)return a.kisiUser.id=a.userId,c.save(s.getCurrentCenterId(),a.kisiUser).catch((function(e){return r.error(e,"Failed to save Kisi user.")}))}a.$onInit=function(){a.load()},a.load=function(){return n.query().catch((function(e){return r.error(e,"Failed to query Kisi centers.")})).then((function(n){if(a.kisiCenter=t()(i).call(i,n,s.getCurrentCenterId()),a.kisiCenter&&a.kisiCenter.enabled){var l={};return a.kisiCenter.kisiPlaceId&&(l.kisiGroups=o.query(a.kisiCenter.kisiPlaceId).catch((function(e){return r.error(e,"Failed to query Kisi access groups.")}))),a.userId&&"new"!==a.userId&&!i.isUid(a.userId)&&(l.kisiUser=c.get(s.getCurrentCenterId(),a.userId).catch((function(e){return r.error(e,"Failed to get Kisi user.")}))),e.all(l).then((function(e){e.kisiUser?a.kisiUser=e.kisiUser:a.kisiUser={kisiGroupId:a.kisiCenter.defaultKisiGroupId},a.kisiGroups=e.kisiGroups,a.kisiGroups&&a.kisiGroups.length&&a.kisiCenter.enabled&&(a.save=u)}))}}))}}])},XwCg:function(e,r){e.exports='<label class="ff-row animate-collapse" ng-if="$ctrl.kisiGroups.length && $ctrl.kisiCenter.enabled"> <ff-label flex="0 1 116px"><span translate="USER_PROFILE.MEMBERSHIP.KISI_ACCESS_GROUP"></span></ff-label> <ff-select name="kisiGroupId" ff-model="$ctrl.kisiUser.kisiGroupId" ff-options="opt.id as opt.name for opt in $ctrl.kisiGroups"> </ff-select> </label> '},cBTd:function(e,r,i){var s={"./access-group/kisi-access-group.tpl.html":"XwCg","./settings/kisi-settings.tpl.html":"AtqB"};function t(e){var r=n(e);return i(r)}function n(e){if(!i.o(s,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return s[e]}t.keys=function(){return Object.keys(s)},t.resolve=n,e.exports=t,t.id="cBTd"},f4YS:function(e,r,i){"use strict";i.r(r),r.default=angular.module("deskworks.KisiSettings",["ngResource","deskworks.config"]).factory("KisiSettings",["$resource","deskworksConfig",function(e,r){var i=e(r.getApiAbsUrl("/kisi/settings"),{},{update:{method:"PUT"}});return{get:function(){return i.get().$promise},save:function(e){return i.update({},e).$promise}}}])}}]);