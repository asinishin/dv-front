(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"/RdB":function(t,e,n){"use strict";n.r(e),e.default=angular.module("deskworks.SaltoCenter",["ngResource","deskworks.config"]).factory("SaltoCenter",["$resource","deskworksConfig",function(t,e){var n=t(e.getApiAbsUrl("/salto-ks/centers/:id"),{},{update:{method:"PUT"}});return{query:function(){return n.query().$promise},get:function(t){return n.get(t).$promise},save:function(t){return n.update({id:t.id},t).$promise}}}])},"1R8d":function(t,e){t.exports='<div class="animate-collapse" ng-if="$ctrl.groups.length"> <div class="ff-relative"> <ff-header style="padding-top:.5rem"><span translate="PRODUCTS.SALTO_GROUPS"></span></ff-header> <ff-btn sense="new" size="xs" style="position:absolute;right:0;top:1px" title="{{\'GLOBAL.BTN_NEW\' | translate}}" ff-click="$ctrl.add()"></ff-btn> </div> <div class="ff-row" ng-repeat="saltoAccessGroupId in $ctrl.data.saltoAccessGroupIds track by $index"> <ff-select name="saltoAccessGroup" ff-model="$ctrl.data.saltoAccessGroupIds[$index]" ff-required="true" ff-validate-alert="{{\'PRODUCTS.SALTO_GROUP\' | translate}}" ff-options="opt.id as opt.name for opt in $ctrl.getGroups($ctrl.data.saltoAccessGroupIds[$index])"> </ff-select> <ff-btn-group flex="0 0 auto" class="buttons-row"> <ff-btn sense="delete" size="xs" ff-click="$ctrl.delete($index)" title="{{\'GLOBAL.BTN_DELETE\' | translate}}"></ff-btn> </ff-btn-group> </div> </div> '},"20x3":function(t,e,n){"use strict";n.r(e);n("8cZI");e.default=angular.module("deskworks.SaltoSettings",["ngResource","deskworks.config"]).factory("SaltoSettings",["$resource","$location","deskworksConfig",function(t,e,n){var r=t(n.getApiAbsUrl("/salto-ks/settings"),{},{update:{method:"PUT"}}),s=t(n.getApiAbsUrl("/salto-ks/oauth2"));return{get:function(){return r.get().$promise},save:function(t){return r.update({},t).$promise},getConnectUrl:function(t){return n.getApiAbsUrl(["/salto-ks/oauth2?nonce=".concat(t),"redirectUri="+encodeURIComponent(e.absUrl())].join("&"))},disconnect:function(){return s.delete().$promise}}}])},BuQ3:function(t,e,n){"use strict";n.r(e);n("JBxO"),n("FdtR");var r=n("20x3"),s=n("/RdB"),o=n("v1iO");e.default=angular.module("deskworks.saltoSettingsDirective",["debounce",r.default.name,s.default.name,o.default.name]).directive("saltoSettings",(function(){return{templateUrl:"settings/salto-settings.tpl.html",restrict:"E",scope:!0,controller:"SaltoSettingsCtrl as $ctrl"}})).controller("SaltoSettingsCtrl",["$q","dwAlerts","debounce","helper","SaltoSettings","SaltoCenter","SaltoSite",function(t,e,n,r,s,o,a){var c=this;c.$onInit=function(){c.load()},c.getConnectUrl=function(){return s.getConnectUrl(c.saltoSettings?c.saltoSettings.nonce:"")},c.disconnect=function(){return s.disconnect().catch((function(t){return e.error(t,"Failed to disconnect from Salto.")})).then((function(){c.saltoSettings.connected=!1}))},c.load=function(){return c.spin=!0,s.get().catch((function(t){return e.error(t,"Failed to load Salto settings.")})).then((function(n){if(c.saltoSettings=n,n.connected)return t.all({centers:o.query().catch((function(t){return e.error(t,"Failed to query Salto centers.")})),sites:a.query().catch((function(t){return e.error(t,"Failed to query Salto sites.")}))}).then((function(t){return c.saltoCenters=t.centers,c.saltoSites=t.sites,t}))})).finally((function(){c.spin=!1}))},c.saveSettings=n((function(t){if(t&&t.$invalid)return;return c.spin=!0,s.save(c.saltoSettings).catch((function(t){return e.error(t,"Failed to save Salto settings.")})).finally((function(){c.spin=!1}))}),1e3),c.saveCenter=n((function(t,n){if(n&&n.$invalid)return;return t.$$spin=!0,o.save(t).finally((function(){t.$$spin=!1})).catch((function(t){return e.error(t,"Failed to save Salto center.")}))}),500),c.changeSite=function(t,e){return c.saveCenter(t,e)}}])},JWRI:function(t,e,n){"use strict";n.r(e);n("3dw1"),n("Muwe"),n("y89P");var r=n("yCd9"),s=n.n(r),o=n("lRNC"),a=n.n(o),c=["$injector",function(t){var e,r,o=(e=n("qYqd"),s()(r=a()(e).call(e)).call(r,e));t.loadNewModules(s()(o).call(o,(function(t){return t.default.name}))),t.invoke(["$templateCache",function(t){var e=n("Vijd");a()(e).call(e).forEach((function(n){return t.put(n.replace(/^\.\//,""),e(n))}))}])}];e.default=c},"K/S8":function(t,e){t.exports='<ff-panel> <ff-panel-header class="ff-spin-right"> <span translate="INTEGRATIONS_SETUP.SALTO.HEADER"></span> </ff-panel-header> <form name="form" novalidate ff-dim="$ctrl.spin"> <label class="ff-row"> <ff-label flex="0 1 160px"><span translate="INTEGRATIONS_SETUP.SALTO.CONNECTION"></span></ff-label> <ff-static ng-if="!$ctrl.saltoSettings.connected"> <a href="{{$ctrl.getConnectUrl()}}" target="_self" rel="noopener"> <ff-btn sense="ok" size="sm"><span translate="INTEGRATIONS_SETUP.CONNECT"></span></ff-btn> </a> </ff-static> <ff-static ng-if="$ctrl.saltoSettings.connected"> <ff-icon sense="check"></ff-icon>&nbsp;<span translate="INTEGRATIONS_SETUP.CONNECTED"></span> </ff-static> <ff-btn-group flex="none" class="buttons-row" ng-if="$ctrl.saltoSettings.connected"> <ff-btn sense="delete" size="xs" ff-click="$ctrl.disconnect()" title="{{\'INTEGRATIONS_SETUP.DISCONNECT\' | translate}}"></ff-btn> </ff-btn-group> </label> <label class="ff-row" ng-if="$ctrl.saltoSettings.connected"> <ff-label flex="0 1 160px"><span translate="INTEGRATIONS_SETUP.SALTO.NO_ACCESS_POLICY"></span></ff-label> <ff-select name="noAccessPolicy" ff-model="$ctrl.saltoSettings.noAccessPolicy" ff-change="$ctrl.saveSettings(form)"> <option value="suspend" translate="INTEGRATIONS_SETUP.SALTO.NO_ACCESS_POLICY.SUSPEND"></option> <option value="delete" translate="INTEGRATIONS_SETUP.SALTO.NO_ACCESS_POLICY.DELETE"></option> </ff-select> </label> </form> <form name="form" novalidate ng-repeat="center in $ctrl.saltoCenters" ng-if="$ctrl.saltoSettings.connected"> <ff-header ff-dim="center.$$spin" style="padding-top:.6rem"><cell>{{center.name}}</cell></ff-header> <label class="ff-row"> <ff-label flex="0 1 160px"><span translate="INTEGRATIONS_SETUP.SALTO.SITE"></span></ff-label> <ff-select name="saltoSiteId" ff-model="center.saltoSiteId" ff-options="site.id as site.name for site in $ctrl.saltoSites" ff-change="$ctrl.changeSite(center, form)"> <option value="">-</option> </ff-select> </label> </form> </ff-panel> '},QCNM:function(t,e,n){"use strict";n.r(e),e.default=angular.module("deskworks.SaltoProduct",["ngResource","deskworks.config"]).factory("SaltoProduct",["$resource","deskworksConfig",function(t,e){var n=t(e.getApiAbsUrl("/salto-ks/products/:id"),{},{get:{method:"GET"},update:{method:"PUT"}});return{get:function(t,e){return n.get({centerId:t,id:e}).$promise},save:function(t,e,r){return n.update({centerId:t,id:e},r).$promise}}}])},Vijd:function(t,e,n){var r={"./access-groups/salto-access-groups.tpl.html":"1R8d","./settings/salto-settings.tpl.html":"K/S8"};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=o,t.exports=s,s.id="Vijd"},bleP:function(t,e,n){"use strict";n.r(e),e.default=angular.module("deskworks.SaltoAccessGroup",["ngResource","deskworks.config"]).factory("SaltoAccessGroup",["$resource","deskworksConfig",function(t,e){var n=t(e.getApiAbsUrl("/salto-ks/salto-access-groups"));return{query:function(t){return n.query({centerId:t}).$promise}}}])},cwdL:function(t,e,n){"use strict";n.r(e);var r=n("0zKI"),s=n.n(r),o=n("hsT8"),a=n.n(o),c=n("bleP"),i=n("/RdB"),l=n("QCNM"),u=n("q1+b");e.default=angular.module("deskworks.saltoAccessGroupsDirective",[c.default.name,i.default.name,l.default.name,u.default.name]).directive("saltoAccessGroups",(function(){return{templateUrl:"access-groups/salto-access-groups.tpl.html",restrict:"E",scope:!0,controller:"SaltoAccessGroupsCtrl as $ctrl",bindToController:{save:"=",productId:"<?",unitId:"<?"}}})).controller("SaltoAccessGroupsCtrl",["$scope","$q","dwAlerts","helper","state","SaltoAccessGroup","SaltoCenter","SaltoProduct","SaltoReservationUnit",function(t,e,n,r,o,c,i,l,u){var f=this;function d(){var e=o.getCurrentCenterId();return f.productId?l.save(e,f.productId,f.data):u.save(e,f.unitId,f.data).catch((function(t){return n.error(t,"Failed to save Salto ".concat(f.productId?"product":"reservation unit","."))})).then((function(e){return(t.formProduct||t.$parent.$ctrl.form).$setPristine(),e}))}f.$onInit=function(){f.load()},f.add=function(){f.data.saltoAccessGroupIds.push(null),(t.formProduct||t.$parent.$ctrl.form).$setDirty()},f.delete=function(e){var n;s()(n=f.data.saltoAccessGroupIds).call(n,e,1),(t.formProduct||t.$parent.$ctrl.form).$setDirty()},f.getGroups=function(t){var e;return a()(e=f.groups).call(e,(function(e){return f.data.saltoAccessGroupIds.indexOf(e.id)<0||t&&e.id===t}))},f.load=function(){var t=o.getCurrentCenterId(),r=[(f.productId?l.get(t,f.productId):u.get(t,f.unitId)).catch((function(t){return n.error(t,"Failed to get Salto ".concat(f.productId?"product":"reservation unit","."))})).then((function(t){return f.data=t})),c.query(t).catch((function(t){return n.error(t,"Failed to query Salto access groups.")})).then((function(t){f.groups=t,f.groups&&f.groups.length&&(f.save=d)}))];return e.all(r)}}])},"q1+b":function(t,e,n){"use strict";n.r(e),e.default=angular.module("deskworks.SaltoReservationUnit",["ngResource","deskworks.config"]).factory("SaltoReservationUnit",["$resource","deskworksConfig",function(t,e){var n=t(e.getApiAbsUrl("/salto-ks/reservation-units/:id"),{},{get:{method:"GET"},update:{method:"PUT"}});return{get:function(t,e){return n.get({centerId:t,id:e}).$promise},save:function(t,e,r){return n.update({centerId:t,id:e},r).$promise}}}])},qYqd:function(t,e,n){var r={"./access-groups/salto-access-groups.directive.js":"cwdL","./services/salto-access-group.service.js":"bleP","./services/salto-center.service.js":"/RdB","./services/salto-product.service.js":"QCNM","./services/salto-reservation-unit.service.js":"q1+b","./services/salto-settings.service.js":"20x3","./services/salto-site.service.js":"v1iO","./settings/salto-settings.directive.js":"BuQ3"};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=o,t.exports=s,s.id="qYqd"},v1iO:function(t,e,n){"use strict";n.r(e),e.default=angular.module("deskworks.SaltoSite",["ngResource","deskworks.config"]).factory("SaltoSite",["$resource","deskworksConfig",function(t,e){var n=t(e.getApiAbsUrl("/salto-ks/salto-sites"),{},{});return{query:function(){return n.query().$promise}}}])}}]);