(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0RPu":function(t,e,n){var s={"./settings/appointment-plus-settings.directive.js":"ETEG","./settings/appointment-plus-settings.service.js":"oOHa"};function l(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}l.keys=function(){return Object.keys(s)},l.resolve=a,t.exports=l,l.id="0RPu"},"5ms1":function(t,e){t.exports='<ff-panel> <ff-panel-header ff-spin="$ctrl.spin" class="ff-spin-right"> <span translate="INTEGRATIONS_SETUP.APP_PLUS.HEADER"></span> </ff-panel-header> <form name="form" novalidate> <ff-static> <label class="ff-row"> <ff-checkbox name="enabled" ff-model="$ctrl.settings.enabled" ff-change="$ctrl.save(form)"> <span translate="INTEGRATIONS_SETUP.APP_PLUS.ENABLED"></span> </ff-checkbox> </label> </ff-static> <label class="ff-row"> <ff-label flex="0 0 120px" ff-required="{{$ctrl.settings.enabled}}"> <span translate="INTEGRATIONS_SETUP.APP_PLUS.API_SITE_ID"></span> </ff-label> <ff-text ff-model="$ctrl.settings.apiSiteId" ff-change="$ctrl.save(form)" ff-required="$ctrl.settings.enabled" ff-validate-alert="{{\'INTEGRATIONS_SETUP.APP_PLUS.API_SITE_ID\' | translate}}"></ff-text> </label> <label class="ff-row"> <ff-label flex="0 0 120px" ff-required="{{$ctrl.settings.enabled}}"> <span translate="INTEGRATIONS_SETUP.APP_PLUS.API_KEY"></span> </ff-label> <ff-text ff-model="$ctrl.settings.apiKey" ff-change="$ctrl.save(form)" ff-required="$ctrl.settings.enabled" ff-validate-alert="{{\'INTEGRATIONS_SETUP.APP_PLUS.API_KEY\' | translate}}"></ff-text> </label> <label class="ff-row"> <ff-label flex="0 0 120px" ff-required="{{$ctrl.settings.enabled}}"> <span translate="INTEGRATIONS_SETUP.APP_PLUS.API_BASE_URL"></span> </ff-label> <ff-text ff-model="$ctrl.settings.apiBaseUrl" ff-change="$ctrl.save(form)" ff-required="$ctrl.settings.enabled" ff-validate-alert="{{\'INTEGRATIONS_SETUP.APP_PLUS.API_BASE_URL\' | translate}}"></ff-text> </label> <label class="ff-row"> <ff-label flex="0 0 120px"> <span translate="INTEGRATIONS_SETUP.APP_PLUS.COWORKING_CENTER"></span> </ff-label> <ff-static>{{$ctrl.settings.coworkingCenter}}</ff-static> </label> <label class="ff-row"> <ff-label flex="0 0 120px"> <span translate="INTEGRATIONS_SETUP.APP_PLUS.APPOINTMENT_LOCATION"></span> </ff-label> <ff-static>{{$ctrl.settings.appointmentLocation}}</ff-static> </label> </form> </ff-panel> '},ETEG:function(t,e,n){"use strict";n.r(e);n("JBxO"),n("FdtR");e.default=angular.module("deskworks.appointmentPlusSettingsDirective",["debounce","deskworks.AppointmentPlusSettings"]).directive("appointmentPlusSettings",(function(){return{templateUrl:"settings/appointment-plus-settings.tpl.html",restrict:"E",scope:!0,controller:"AppointmentPlusSettingsCtrl as $ctrl"}})).controller("AppointmentPlusSettingsCtrl",["dwAlerts","debounce","AppointmentPlusSettings",function(t,e,n){var s=this;s.$onInit=function(){s.load()},s.load=function(){return s.spin=!0,n.get().catch((function(e){return t.error(e,"Failed to load AppointmentPlus settings.")})).finally((function(){s.spin=!1})).then((function(t){s.settings=t}))},s.save=e((function(e){if(e.$invalid)return;return s.spin=!0,n.save(s.settings).catch((function(e){return t.error(e,"Failed to save AppointmentPlus settings.")})).finally((function(){s.spin=!1}))}),1e3)}])},dSLc:function(t,e,n){var s={"./settings/appointment-plus-settings.tpl.html":"5ms1"};function l(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}l.keys=function(){return Object.keys(s)},l.resolve=a,t.exports=l,l.id="dSLc"},oOHa:function(t,e,n){"use strict";n.r(e),e.default=angular.module("deskworks.AppointmentPlusSettings",["ngResource","deskworks.config"]).factory("AppointmentPlusSettings",["$resource","deskworksConfig",function(t,e){var n=t(e.getApiAbsUrl("/appointment-plus/settings"),{},{get:{method:"GET"},update:{method:"PUT"}});return{get:function(){return n.get().$promise},save:function(t){return n.update({},t).$promise}}}])},tRtM:function(t,e,n){"use strict";n.r(e);n("3dw1"),n("Muwe"),n("y89P");var s=n("yCd9"),l=n.n(s),a=n("lRNC"),r=n.n(a),f=["$injector",function(t){var e,s,a=(e=n("0RPu"),l()(s=r()(e).call(e)).call(s,e));t.loadNewModules(l()(a).call(a,(function(t){return t.default.name}))),t.invoke(["$templateCache",function(t){var e=n("dSLc");r()(e).call(e).forEach((function(n){return t.put(n.replace(/^\.\//,""),e(n))}))}])}];e.default=f}}]);