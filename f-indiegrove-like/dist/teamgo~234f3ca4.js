(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{HF90:function(e,t){e.exports='<ff-panel> <ff-panel-header ff-spin=$ctrl.spin class=ff-spin-right> <span translate=INTEGRATIONS_SETUP.TEAMGO.HEADER></span> </ff-panel-header> <form name=form novalidate> <ff-static> <label class=ff-row> <ff-checkbox name=enabled ff-model=$ctrl.settings.enabled ff-change=$ctrl.save(form)> <span translate=INTEGRATIONS_SETUP.TEAMGO.ENABLED></span> </ff-checkbox> </label> </ff-static> <label class=ff-row> <ff-label flex="0 0 120px" ff-required={{$ctrl.settings.enabled}}> <span translate=INTEGRATIONS_SETUP.TEAMGO.API_KEY></span> </ff-label> <ff-text ff-model=$ctrl.settings.apiKey ff-change=$ctrl.save(form) ff-required=$ctrl.settings.enabled ff-validate-alert="{{\'INTEGRATIONS_SETUP.TEAMGO.API_KEY\' | translate}}"></ff-text> </label> <label class=ff-row> <ff-label flex="0 0 120px" ff-required={{$ctrl.settings.enabled}}> <span translate=INTEGRATIONS_SETUP.TEAMGO.LOGIN></span> </ff-label> <ff-text ff-model=$ctrl.settings.login ff-change=$ctrl.save(form) ff-required=$ctrl.settings.enabled ff-validate-alert="{{\'INTEGRATIONS_SETUP.TEAMGO.LOGIN\' | translate}}"></ff-text> </label> <label class=ff-row> <ff-label flex="0 0 120px" ff-required={{$ctrl.settings.enabled}}> <span translate=INTEGRATIONS_SETUP.TEAMGO.PASSWORD></span> </ff-label> <ff-password ff-model=$ctrl.settings.password ff-change=$ctrl.save(form) ff-required=$ctrl.settings.enabled ff-validate-alert="{{\'INTEGRATIONS_SETUP.TEAMGO.PASSWORD\' | translate}}"></ff-password> </label> </form> </ff-panel> '},IVpE:function(e,t,n){"use strict";n.r(t);n("JBxO"),n("FdtR");t.default=angular.module("deskworks.teamgoSettingsDirective",["debounce","deskworks.TeamgoSettings"]).directive("teamgoSettings",(function(){return{templateUrl:"settings/teamgo-settings.tpl.html",restrict:"E",scope:!0,controller:"TeamgoSettingsCtrl as $ctrl"}})).controller("TeamgoSettingsCtrl",["dwAlerts","debounce","TeamgoSettings",function(e,t,n){var r=this;r.$onInit=function(){r.load()},r.load=function(){return r.spin=!0,n.get().catch((function(t){return e.error(t,"Failed to load Teamgo settings.")})).finally((function(){r.spin=!1})).then((function(e){r.settings=e}))},r.save=t((function(t){if(t.$invalid)return;return r.spin=!0,n.save(r.settings).catch((function(t){return e.error(t,"Failed to save Teamgo settings.")})).finally((function(){r.spin=!1}))}),1e3)}])},NlsM:function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.TeamgoSettings",["ngResource","deskworks.config"]).factory("TeamgoSettings",["$resource","deskworksConfig",function(e,t){var n=e(t.getApiAbsUrl("/teamgo/settings"),{},{get:{method:"GET"},update:{method:"PUT"}});return{get:function(){return n.get().$promise},save:function(e){return n.update({},e).$promise}}}])},OKZS:function(e,t,n){"use strict";n.r(t);n("Muwe"),n("y89P");var r=n("WSeP"),a=n.n(r),s=n("lRNC"),f=n.n(s),l=n("yCd9"),o=n.n(l),i=["$injector",function(e){var t,r,s=(t=n("RhmC"),o()(r=f()(t).call(t)).call(r,t));e.loadNewModules(o()(s).call(s,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t,r=n("VHhx");a()(t=f()(r).call(r)).call(t,(function(t){return e.put(t.replace(/^\.\//,""),r(t))}))}])}];t.default=i},RhmC:function(e,t,n){var r={"./settings/teamgo-settings.directive.js":"IVpE","./settings/teamgo-settings.service.js":"NlsM"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="RhmC"},VHhx:function(e,t,n){var r={"./settings/teamgo-settings.tpl.html":"HF90"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="VHhx"}}]);