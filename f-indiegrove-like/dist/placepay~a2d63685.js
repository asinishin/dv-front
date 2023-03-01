(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"+zsG":function(e,t,n){},"2kHi":function(e,t,n){"use strict";n.r(t);var r=n("nbuU"),a=n.n(r),c=n("6RpP"),s=n.n(c),o=n("RN/2"),i=n.n(o),l=n("xcNz");t.default=angular.module("deskworks.placepayPaymentMethodDirective",["deskworks.helper","deskworks.state","deskworks.userProfile.service",l.default.name]).directive("placepayPaymentMethod",(function(){return{restrict:"E",scope:!0,template:i.a,controller:"PlacepayPaymentMethodCtrl as $ctrl",bindToController:{user:"<",reg:"<",settings:"<"}}})).controller("PlacepayPaymentMethodCtrl",["$scope","$timeout","$route","helper","state","userProfileService","PlacepayPay",function(e,t,n,r,c,o,i){var l=this;l.$onInit=function(){var e,t;l.paymentMethod=a()(e=s()(t=l.user.creditCards).call(t,l.user.eChecks)).call(e,(function(e){return e.id===l.user.paymentMethodId}))},l.onEditPaymentMethod=function(){return i.open({autopay:!0,autopayOnly:!0}).then((function(){return o.resetCache()})).then((function(){return t(200)})).then((function(){return n.reload()})).then((function(){return t(5e3)}))}}])},"8qXe":function(e,t,n){},HZXA:function(e,t){e.exports='<div class="dw-modal placepay-sync"> <div class="dw-modal-fade"></div> <div class="sync-wrapper"> <ff-panel> <div class="sync-scroller" flex="auto"> <ff-header> <span ng-if="$ctrl.dry"> <span translate="INTEGRATIONS_SETUP.PLACEPAY.SYNC.PLAN.HEADER"></span> <ff-hint><span translate="INTEGRATIONS_SETUP.PLACEPAY.SYNC.PLAN.HINT"></span></ff-hint> </span> <span ng-if="!$ctrl.dry"> <span translate="INTEGRATIONS_SETUP.PLACEPAY.SYNC.RESULTS.HEADER"></span> <ff-hint><span translate="INTEGRATIONS_SETUP.PLACEPAY.SYNC.RESULTS.HINT"></span></ff-hint> </span> </ff-header> <ff-static class="ff-no-frame" ng-if="!$ctrl.spin && !$ctrl.state.data.length"><span translate="GLOBAL.NONE"></span></ff-static> <div> <div ng-repeat="data in $ctrl.state.data"> <ff-static><strong>{{::data.user.fullName}} &lt;{{::data.user.email}}&gt;</strong></ff-static> <ff-static> <div style="line-height:1.25"> <div ng-repeat="event in data.events"> <ff-icon sense="{{::$ctrl.types[event.type]}}" style="min-width:13px" class="ff-center" ng-class="{ \'text-brand\': event.type === \'new\' || event.type === \'link\' || event.type === \'method\', \'text-danger\': event.type === \'error\' }"></ff-icon> {{::event.msg}} </div> </div> </ff-static> </div> </div> <ff-spin class="ff-spin-placeholder" ng-if="$ctrl.spin"></ff-spin> </div> <ff-btn-group class="ff-tmargin" flex="none"> <ff-btn sense="back" size="sm" ff-click="$ctrl.back()"><span translate="GLOBAL.BTN_BACK"></span></ff-btn> <ff-btn sense="ok" size="sm" ff-click="$ctrl.apply()" ng-if="$ctrl.dry" ff-disabled="!$ctrl.state.data.length || $ctrl.spin"> <span translate="INTEGRATIONS_SETUP.PLACEPAY.SYNC.PLAN.BTN_APPLY"></span> </ff-btn> </ff-btn-group> </ff-panel> </div> </div> '},KpP6:function(e,t,n){"use strict";n.r(t);var r=n("yCd9"),a=n.n(r),c=n("lRNC"),s=n.n(c),o=["$injector",function(e){var t,r,c=(t=n("yPJS"),a()(r=s()(t).call(t)).call(r,t));e.loadNewModules(a()(c).call(c,(function(e){return e.default.name})))}];t.default=o},"RN/2":function(e,t){e.exports='<div id="upBillingMethod" class="ff-grid gutter-h"> <ff-panel flex="{lg: \'0 0 50%\'}"> <ff-header><span translate="BILLING_PROFILE.BILLING_METHOD"></span></ff-header> <div class="ff-row"> <ff-static flex="auto"> <span translate="GLOBAL.NONE" ng-if="!$ctrl.paymentMethod"></span> <span> <span>{{::$ctrl.paymentMethod.number || $ctrl.paymentMethod.bankAccountNumber}}</span> <small ng-if="$ctrl.paymentMethod.number">(expires: {{::$ctrl.paymentMethod.expiry | date}})</small> </span> </ff-static> <ff-btn-group flex="none" class="buttons-row"> <ff-btn sense="edit" size="sm" ff-click="$ctrl.onEditPaymentMethod()" ng-if="$ctrl.paymentMethod"><span translate="GLOBAL.BTN_EDIT"></span></ff-btn> <ff-btn sense="new" size="sm" ff-click="$ctrl.onEditPaymentMethod()" ng-if="!$ctrl.paymentMethod"><span translate="GLOBAL.BTN_NEW"></span></ff-btn> </ff-btn-group> </div> </ff-panel> </div> '},RrxA:function(e,t){e.exports='<ff-panel> <ff-panel-header> <span translate="INTEGRATIONS_SETUP.PLACEPAY.HEADER"></span> </ff-panel-header> <ff-spin class="ff-spin-placeholder" ng-if="$ctrl.spinLoad"></ff-spin> <form name="form" novalidate ng-repeat="center in $ctrl.centers" class="animate-collapse"> <ff-header style="padding-top:.5rem"> <ff-row> <cell>{{::center.name}}</cell> <ff-spin flex="0 0 16px" class="ff-spin-sm" ng-if="center.$$spin"></ff-spin> <ff-btn-group flex="none" ng-if="!center.$$spin && center.publicApiKey && center.privateApiKey && center.depositAccountId" style="margin:-.5rem 0"> <ff-btn sense="sync" size="xs" ff-click="$ctrl.sync(center)" title="{{\'INTEGRATIONS_SETUP.PLACEPAY.SYNC.BTN\' | translate}}"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <form name="form" novalidate> <label class="ff-row"> <ff-label flex="0 0 120px"><span translate="INTEGRATIONS_SETUP.PUBLIC_API_KEY"></span></ff-label> <ff-text ff-model="center.publicApiKey" ff-change="$ctrl.saveCenter(center)" ff-validate-alert="{{\'INTEGRATIONS_SETUP.PUBLIC_API_KEY\' | translate}}"></ff-text> </label> <label class="ff-row"> <ff-label flex="0 0 120px"><span translate="INTEGRATIONS_SETUP.PRIVATE_API_KEY"></span></ff-label> <ff-text ff-model="center.privateApiKey" ff-change="$ctrl.saveCenter(center)" ff-validate-alert="{{\'INTEGRATIONS_SETUP.PRIVATE_API_KEY\' | translate}}"></ff-text> </label> <label class="ff-row"> <ff-label flex="0 0 120px"> <span> <span translate="INTEGRATIONS_SETUP.PLACEPAY.SANDBOX"></span> <ff-hint><span translate="INTEGRATIONS_SETUP.PLACEPAY.SANDBOX.HINT"></span></ff-hint> </span> </ff-label> <ff-static> <ff-checkbox ff-model="center.sandbox" ff-change="$ctrl.saveCenter(center)"></ff-checkbox> </ff-static> </label> <label class="ff-row animate-collapse" ff-dim="center.$$spinDepositAccount" ng-if="center.publicApiKey && center.privateApiKey"> <ff-label flex="0 1 130px"><req translate="INTEGRATIONS_SETUP.PLACEPAY.DEPOSIT_ACCOUNT"></req></ff-label> <ff-select ff-model="center.depositAccountId" ff-options="depositAccount.id as depositAccount.name for depositAccount in center.$$depositAccounts" ff-change="$ctrl.saveCenter(center)" ff-required="true" ff-validate-alert="{{\'INTEGRATIONS_SETUP.PLACEPAY.DEPOSIT_ACCOUNT\' | translate}}"> </ff-select> </label> </form> </form> </ff-panel> '},TIpW:function(e,t,n){"use strict";n.r(t);n("JBxO"),n("FdtR"),n("3dw1");var r=n("RrxA"),a=n.n(r),c=n("udX/"),s=n("UYtW"),o=n("ei0f");t.default=angular.module("deskworks.placepaySettingsDirective",["debounce",c.default.name,s.default.name,o.default.name]).directive("placepaySettings",(function(){return{template:a.a,restrict:"E",scope:!0,controller:"PlacepaySettingsCtrl as $ctrl"}})).controller("PlacepaySettingsCtrl",["$scope","$q","$window","$translate","debounce","dwAlerts","helper","state","PlacepayCenter","PlacepayDepositAccount","placepaySync",function(e,t,n,r,a,c,s,o,i,l,f){var u=this;u.$onInit=function(){u.load()},u.load=function(){return u.spinLoad=!0,i.query().finally((function(){u.spinLoad=!1})).catch((function(e){return c.error(e,"Failed to query PlacePay centers.")})).then((function(e){u.centers=e,u.centers.forEach((function(e){return u.loadDepositAccounts(e)}))}))},u.saveCenter=a((function(e){return e.$$spin=!0,i.save(e).finally((function(){e.$$spin=!1})).catch((function(e){return c.error(e,"Failed to save PlacePay center.")})).then((function(){return u.loadDepositAccounts(e)}))}),500),u.loadDepositAccounts=function(e){if(e&&e.publicApiKey&&e.privateApiKey)return e.$$spinDepositAccount=!e.$$depositAccounts,l.query({centerId:e.id}).finally((function(){e.$$spinDepositAccount=!1})).catch((function(t){return e.$$depositAccounts=null,c.error(t,"Failed to get PlacePay deposit accounts.")})).then((function(t){e.$$depositAccounts=t}));e.$$depositAccounts=null},u.sync=function(t){return f.sync({scope:e,center:t})}}])},UYtW:function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.PlacepayDepositAccount",["ngResource","deskworks.config"]).factory("PlacepayDepositAccount",["$resource","deskworksConfig",function(e,t){var n=e(t.getApiAbsUrl("/placepay/deposit-accounts"));return{query:function(e){return n.query(e).$promise}}}])},ei0f:function(e,t,n){"use strict";n.r(t);var r=n("03wM"),a=n.n(r),c=n("Ekwr"),s=n.n(c),o=n("hsT8"),i=n.n(o),l=n("lvz6"),f=n.n(l),u=n("yKah"),p=n.n(u),d=n("fzuT"),y=n.n(d),h=(n("JBxO"),n("FdtR"),n("3dw1"),n("+zsG"),n("HZXA")),m=n.n(h),g=n("iAzO");function v(e,t){var n=a()(e);if(s.a){var r=s()(e);t&&(r=i()(r).call(r,(function(t){return f()(e,t).enumerable}))),n.push.apply(n,r)}return n}t.default=angular.module("deskworks.placepaySync",[g.a.name,"ngResource","deskworks.config"]).factory("placepaySync",["dwModal",function(e){return{sync:function(t){var n=t.scope,r=t.center;return e.show({scope:n,template:m.a,controller:"PlacepaySyncCtrl as $ctrl",inputs:{center:r}})}}}]).controller("PlacepaySyncCtrl",["$scope","$resource","$timeout","$q","deskworksConfig","dwAlerts","close","center",function(e,t,n,r,a,c,s,o){var i=this,l=t(a.getApiAbsUrl("/placepay/full-sync")),u=t(a.getApiAbsUrl("/placepay/sync-state"));e.close=s,i.init=function(){i.types={none:"check",error:"error",new:"plus",link:"refresh",method:"billing"},i.dry=!0,i.sync({dry:!0})},i.apply=function(){return i.dry=!1,i.sync({dry:!1}).then((function(){c.info("Synchronization success. Please check the results.")}))},i.sync=function(e){return i.spin=!0,u.get().$promise.then((function(t){if(i.state=t,!t.running)return l.save(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):p.a?Object.defineProperties(e,p()(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,f()(n,t))}))}return e}({centerId:o.id},e)).$promise.catch((function(e){return c.error(e,"Failed to sync.")}))})).then((function(){return function e(){return r((function(t,r){u.get().$promise.then((function(r){i.state=r;var a=document.querySelector(".sync-scroller");a.scrollHeight-a.scrollTop-a.clientHeight<40&&n((function(){var e=document.querySelector(".placepay-sync .ff-spin-placeholder");e&&e.scrollIntoView()})),r.running?(n.cancel(i.timer),i.timer=n((function(){return e().then(t)}),3e3)):t()})).catch((function(e){return r(e)}))}))}()})).finally((function(){i.spin=!1}))},i.back=function(){return s()},e.$on("$destroy",(function(){n.cancel(i.timer)})),i.init()}])},sqsK:function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.PlacepaySettings",["ngResource","deskworks.config"]).factory("PlacepaySettings",["$resource","deskworksConfig",function(e,t){var n=e(t.getApiAbsUrl("/placepay/settings"),{},{update:{method:"PUT"}});return{get:function(){return n.get().$promise},save:function(e){return n.update({},e).$promise}}}])},"udX/":function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.PlacepayCenter",["ngResource","deskworks.config"]).factory("PlacepayCenter",["$resource","deskworksConfig",function(e,t){var n=e(t.getApiAbsUrl("/placepay/centers/:id"),{},{update:{method:"PUT"}});return{query:function(){return n.query({}).$promise},get:function(e){return n.get({id:e}).$promise},save:function(e){return n.update({id:e.id},e).$promise}}}])},xcNz:function(e,t,n){"use strict";n.r(t);n("3dw1");var r=n("03wM"),a=n.n(r),c=n("Ekwr"),s=n.n(c),o=n("hsT8"),i=n.n(o),l=n("lvz6"),f=n.n(l),u=n("yKah"),p=n.n(u),d=n("fzuT"),y=n.n(d),h=(n("iPZ8"),n("kypl"),n("Muwe"),n("y89P"),n("nbuU")),m=n.n(h),g=n("gQJ2"),v=n.n(g);n("8qXe");function A(e,t){var n=a()(e);if(s.a){var r=s()(e);t&&(r=i()(r).call(r,(function(t){return f()(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):p.a?Object.defineProperties(e,p()(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,f()(n,t))}))}return e}t.default=angular.module("deskworks.PlacepayPay",["ngResource","deskworks.config","deskworks.reservationService"]).factory("PlacepayPay",["$resource","$q","$timeout","deskworksConfig","dwAlerts","state","optsBillingMethod","reservationService",function(e,t,n,r,a,c,s,o){m()(s).call(s,(function(e){return"none"===e.id}))||s.unshift({id:"none",name:"TBD",_name:"TBD"});var i,l=e(r.getApiAbsUrl("/placepay/session-access-token")),f=e(r.getApiAbsUrl("/placepay/autopay-changed")),u=e(r.getApiAbsUrl("/placepay/complete-transaction"));return(i=document.createElement("script")).src="https://placepay.com/plugins/pay.js",document.head.appendChild(i),{open:function(e){var n=e.amount,r=e.autopay,s=e.description,i=void 0===s?"":s,p=e.orderId,d=e.reason,y=void 0===d?{}:d,h=e.reservation;return l.get({userId:c.getCurrentUserId(),centerId:c.getCurrentCenterId()}).$promise.catch((function(e){return a.error(e,"Failed to get PlacePay session.")})).then((function(e){var s=e.publicApiKey,l=e.accessToken,d=e.depositAccountId,m=e.defaultPaymentMethodId;return t((function(e,g){var A=m;Place.pay.open({key:s,access_token:l,deposit_account_id:d,autopay:r,autopay_only:!n,amount:n,description:i,on:{autopay_changed:function(e){var t;if(A=(null===(t=e.autopay)||void 0===t?void 0:t.payment_method_id)||null,!e.autopay)return a.error("Autopay is required for members. Please enable it to proceed.");var n={paymentMethodId:e.autopay.payment_method_id};f.save({userId:c.getCurrentUserId(),centerId:c.getCurrentCenterId()},n).$promise.catch((function(e){return a.error(e,"Failed to change default payment method.")})).then((function(){return a.info("Default payment method changed.")}))},closed:function(s){var i=t.when({});n&&(s.transaction_id?(h&&(i=o.save(c.getCurrentCenterId(),c.getCurrentUserId(),h).catch((function(e){return a.error(e,"Failed to make reservation.")}))),i=i.then((function(e){e.id&&(y.reservationId=e.id);var t={transactionId:s.transaction_id,orderId:p,amount:n,reason:y};return u.save({userId:c.getCurrentUserId(),centerId:c.getCurrentCenterId()},t).$promise.catch((function(e){return y.reservationId?o.delete(c.getCurrentCenterId(),c.getCurrentUserId(),y.reservationId).then((function(){return a.error(e,"Failed to complete transaction.")})):a.error(e,"Failed to complete transaction.")})).then((function(t){return P(P({},t),{},{accessCode:e.accessCode})}))}))):(a.error("Please complete payment to proceed.").catch(angular.noop),g())),i.then((function(t){r?A?e(t):(a.error("Autopay is required for members. Please enable it to proceed.").catch(angular.noop),g()):e(t)}))},error:function(e){a.error("PlacePay error: "+v()(e).replace(/,"/g,', "'))}}})}))}))},preprocessUser:function(e){var t,n,r=m()(t=e.creditCards).call(t,(function(t){return t.id===e.paymentMethodId})),a=m()(n=e.eChecks).call(n,(function(t){return t.id===e.paymentMethodId}));return P(P({},e),{},{creditCards:r?[r]:[],eChecks:a?[a]:[]})}}}])},yPJS:function(e,t,n){var r={"./payment-method/placepay-payment-method.directive.js":"2kHi","./services/placepay-center.service.js":"udX/","./services/placepay-deposit-account.service.js":"UYtW","./services/placepay-pay.service.js":"xcNz","./services/placepay-settings.service.js":"sqsK","./settings/placepay-settings.directive.js":"TIpW","./settings/placepay-sync.service.js":"ei0f"};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="yPJS"}}]);