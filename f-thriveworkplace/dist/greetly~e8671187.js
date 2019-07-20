(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/kd0":function(e,t,n){"use strict";n.r(t);n("t91x");var r=["$injector",function(e){var t,r=(t=n("oA+D")).keys().map(t);e.loadNewModules(r.map(function(e){return e.default.name})),e.invoke(["$templateCache",function(e){var t=n("609E");t.keys().forEach(function(n){return e.put(n.replace(/^\.\//,""),t(n))})}])}];t.default=r},"5tkp":function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.GreetlySettings",["ngResource","deskworks.config"]).factory("GreetlySettings",["$resource","deskworksConfig",function(e,t){var n=e(t.getApiAbsUrl("/greetly/settings"),{},{update:{method:"PUT"}});return{get:function(){return n.get().$promise},save:function(e){return n.update({},e).$promise}}}])},"609E":function(e,t,n){var r={"./settings/greetly-settings.tpl.html":"KFAT"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id="609E"},"9nkd":function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.GreetlyCenter",["ngResource","deskworks.config"]).factory("GreetlyCenter",["$resource","deskworksConfig",function(e,t){var n=e(t.getApiAbsUrl("/greetly/centers/:centerId"),{},{update:{method:"PUT"}});return{query:function(){return n.query().$promise},save:function(e){return n.update({centerId:e.id},e).$promise}}}])},KFAT:function(e,t){e.exports='<ff-panel> <ff-panel-header ff-spin=$ctrl.spin class=ff-spin-right> <span translate=INTEGRATIONS_SETUP.GREETLY.HEADER></span> </ff-panel-header> <form name=form novalidate> <label class=ff-row> <ff-label flex="0 0 120px"><span translate=INTEGRATIONS_SETUP.API_KEY></span></ff-label> <ff-text ff-model=$ctrl.settings.apiKey ff-change=$ctrl.saveSettings(form) ff-validate-alert="{{\'INTEGRATIONS_SETUP.API_KEY\' | translate}}"></ff-text> </label> </form> <ff-header style=padding-top:.6rem ng-if=$ctrl.centers> <ff-row> <cell flex="0 0 50%"><span translate=INTEGRATIONS_SETUP.GREETLY.CENTER></span></cell> <cell flex="0 0 50%"><span translate=INTEGRATIONS_SETUP.GREETLY.LOCATION></span></cell> </ff-row> </ff-header> <ff-row ng-repeat="center in $ctrl.centers"> <form name=form novalidate> <ff-static flex="0 0 50%"> <ff-row> <label> <ff-checkbox name=enabled ff-model=center.enabled ff-change="$ctrl.saveCenter(center, form)"> <span style=vertical-align:initial>{{center.name}}</span> </ff-checkbox> </label> </ff-row> </ff-static> <ff-select flex="0 0 50%" name=greetlyLocationId ff-model=center.greetlyLocationId ff-required=true ff-options="location.id as location.name for location in $ctrl.locations" ff-change="$ctrl.saveCenter(center, form)" ff-validate-alert="{{\'INTEGRATIONS_SETUP.GREETLY.LOCATION\' | translate}}"></ff-select> </form> </ff-row> </ff-panel> '},e1Ru:function(e,t,n){"use strict";n.r(t);n("DbwS"),n("t91x");t.default=angular.module("deskworks.greetlySettingsDirective",["debounce","deskworks.GreetlySettings","deskworks.GreetlyCenter","deskworks.GreetlyLocation"]).directive("greetlySettings",function(){return{templateUrl:"settings/greetly-settings.tpl.html",restrict:"E",scope:!0,controller:"GreetlySettingsCtrl as $ctrl"}}).controller("GreetlySettingsCtrl",["$q","dwAlerts","debounce","GreetlySettings","GreetlyCenter","GreetlyLocation",function(e,t,n,r,o,s){var i=this;i.$onInit=function(){i.spin=!0,i.loadSettings().then(function(e){if(e.apiKey)return i.loadGreetlyData()}).finally(function(){i.spin=!1})},i.loadSettings=function(){return r.get().catch(function(e){return t.error(e,"Failed to load Greetly settings.")}).then(function(e){return i.settings=e,e})},i.loadGreetlyData=function(){var n=[o.query().catch(function(e){return t.error(e,"Failed to query Greetly centers.")}).then(function(e){i.centers=e}),s.query().catch(function(e){return t.error(e,"Failed to query Greetly locations.")}).then(function(e){i.locations=e})];return e.all(n)},i.saveCenter=n(function(e,n){if(n.$invalid)return;return i.spin=!0,o.save(e).catch(function(e){return t.error(e,"Failed to save Greetly center.")}).finally(function(){i.spin=!1})},1e3),i.saveSettings=n(function(e){if(e.$invalid)return;return i.spin=!0,r.save(i.settings).catch(function(e){return t.error(e,"Failed to save Greetly settings.")}).then(function(){if(i.settings.apiKey)return i.loadGreetlyData();i.centers=null,i.locations=null}).finally(function(){i.spin=!1})},1e3)}])},fPKE:function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.GreetlyLocation",["ngResource","deskworks.config"]).factory("GreetlyLocation",["$resource","deskworksConfig",function(e,t){var n=e(t.getApiAbsUrl("/greetly/greetly-locations"));return{query:function(){return n.query().$promise}}}])},"oA+D":function(e,t,n){var r={"./services/greetly-center.service.js":"9nkd","./services/greetly-locations.service.js":"fPKE","./services/greetly-settings.service.js":"5tkp","./settings/greetly-settings.directive.js":"e1Ru"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id="oA+D"}}]);