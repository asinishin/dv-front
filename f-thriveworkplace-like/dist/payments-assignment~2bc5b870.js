(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{Mwqb:function(e,a){e.exports="<div class=dw-modal> <div class=dw-modal-fade style=background-color:#fff></div> <div style=overflow:auto;width:100%;height:100%;z-index:1;padding:1rem> <payments-assignment purchase-id=$ctrl.purchaseId back=$ctrl.back></payments-assignment> </div> </div> "},"ee+B":function(e,a,t){"use strict";a.a=angular.module("autofocusDirective",[]).directive("autofocus",["$timeout",function(e){return{restrict:"A",link:function(a,t,n){if("false"!==n.autofocus){var s=t[0].parentNode.querySelector("input")||t[0].parentNode.querySelector("select")||t[0].parentNode.querySelector("button");s&&e((function(){return s.focus()}))}}}}])},"ff+D":function(e,a,t){"use strict";t.r(a);var n=t("Mwqb"),s=t.n(n),r=t("iAzO"),f=(t("JBxO"),t("FdtR"),t("yCd9")),c=t.n(f),l=t("YtL8"),i=t.n(l),o=t("n556"),p=t.n(o),u=t("WSeP"),m=t.n(u),d=angular.module("deskworks.PaymentsAssignment",["ngResource","datesDeserializer","deserializeNumbers","deskworks.config"]).factory("PaymentsAssignment",["$resource","$timeout","deskworksConfig","datesDeserializer","deserializeNumbers","helper",function(e,a,t,n,s,r){var f=n(["payments.billedAt","charges.billedAt"]),c=s(["payments.amount","charges.amount","charges.discount","charges.tax"]),l=e(t.getApiAbsUrl("/payments-assignment/:purchaseId"),{},{get:{method:"GET",isArray:!1,transformResponse:[angular.fromJson,f,c]},update:{method:"PUT"}});return{get:function(e){return l.get(e).$promise.then((function(e){return function(e){var a;return m()(a=e.charges).call(a,(function(e){e.total=r.round(e.amount-e.discount+e.tax)})),i({payments:e.payments,charges:e.charges}),e}(e)}))},save:function(e,a){return l.update(e,a).$promise},calcBalances:i};function i(e){var a=e.payments,t=e.charges;m()(t).call(t,(function(e){e.balance=e.total})),m()(a).call(a,(function(e){e.balance=e.amount,m()(t).call(t,(function(a){var t=angular.isNumber(a.payments[e.id])?+a.payments[e.id]:0;a.balance=r.round(a.balance-t),e.balance=r.round(e.balance-t)}))}))}}]),h=t("ee+B"),g=angular.module("deskworks.paymentsAssignmentDirective",["deskworks.helper",d.name,h.a.name]).directive("paymentsAssignment",(function(){return{template:p.a,restrict:"E",scope:!0,controller:"PaymentsAssignmentCtrl as $ctrl",bindToController:{purchaseId:"<",back:"<"}}})).controller("PaymentsAssignmentCtrl",["$scope","state","dwAlerts","helper","PaymentsAssignment",function(e,a,t,n,s){var r=this;r.$onInit=function(){r.charges=[],r.payments=[];e.$watch((function(){var e;return i()(e=r.charges).call(e,(function(e,a){var t;return e[a.id]=i()(t=r.payments).call(t,(function(e,t){return e+a.payments[t.id]||0}),0),e}),{})}),(function(){return s.calcBalances({charges:r.charges,payments:r.payments})}),!0)},r.$onChanges=function(){r.purchaseId&&r.fetch()},r.fetch=function(){if(r.fetching)return r.fetching;r.fetching=s.get({purchaseId:r.purchaseId}).catch((function(e){return t.error(e,"Failed to get payments assignment.")})).finally((function(){r.fetching=null})).then((function(e){r.charges=e.charges,r.payments=e.payments}))},r.save=function(){var e;if(!n.pointFirstInvalid("payments-assignment")){var a={charges:c()(e=r.charges).call(e,(function(e){return{id:e.id,payments:e.payments}}))};return s.save({purchaseId:r.purchaseId},a).catch((function(e){return t.error(e,"Failed to save payments assignment.")})).then((function(){return r.back()}))}}}]),y=angular.module("deskworks.paymentsAssignmentDialog",[r.a.name,g.name]).factory("paymentsAssignmentDialog",["dwModal",function(e){return{open:function(a){var t=a.scope,n=a.purchaseId;return e.show({scope:t,template:s.a,controller:"PaymentsAssignmentModalCtrl as $ctrl",inputs:{purchaseId:n}})}}}]).controller("PaymentsAssignmentModalCtrl",["$scope","purchaseId","close",function(e,a,t){this.purchaseId=a,e.close=t,this.back=function(){return t()}}]),A=["$injector",function(e){e.loadNewModules([y.name])}];a.default=A},n556:function(e,a){e.exports='<form name=$ctrl.form class=gutter-v> <ff-panel> <ff-panel-header><span translate=PAYMENTS_ASSIGNMENT.PAYMENTS></span></ff-panel-header> <div ff-dim=$ctrl.fetching> <ff-header> <ff-row> <cell flex="0 1 110px" class="ff-right show-sm"><span translate=GLOBAL.DATE></span></cell> <cell><span translate=GLOBAL.NAME></span></cell> <cell flex="0 1 90px" class="ff-right show-md"><span translate=GLOBAL.AMOUNT></span></cell> <cell flex="0 1 90px" class=ff-right><span translate=GLOBAL.BALANCE></span></cell> </ff-row> </ff-header> <ff-static class=ff-no-frame ng-if=!$ctrl.payments.length><span translate=GLOBAL.NONE></span></ff-static> <ff-row ng-repeat="payment in $ctrl.payments"> <ff-static flex="0 1 110px" class="ff-right show-sm">{{payment.billedAt | date}}</ff-static> <ff-static>{{payment.name}}</ff-static> <ff-static flex="0 1 90px" class="ff-right show-md">{{payment.amount | ncurrency}}</ff-static> <ff-static flex="0 1 90px" class=ff-right>{{payment.balance | ncurrency}}</ff-static> </ff-row> </div> </ff-panel> <ff-panel> <ff-panel-header><span translate=PAYMENTS_ASSIGNMENT.HEADER></span></ff-panel-header> <div ff-dim=$ctrl.fetching> <ff-header> <ff-row> <cell flex="1 0 80px"><span translate=GLOBAL.PRODUCT></span></cell> <cell flex="0 0 90px" class="ff-right show-lg"><span translate=GLOBAL.AMOUNT></span></cell> <cell flex="0 0 90px" class="ff-right show-lg"><span translate=GLOBAL.DISCOUNT></span></cell> <cell flex="0 0 90px" class="ff-right show-md"><span translate=GLOBAL.TAX></span></cell> <cell flex="0 0 90px" class="ff-right show-sm"><span translate=GLOBAL.TOTAL></span></cell> <cell flex="0 1 250px"><span translate=PAYMENTS_ASSIGNMENT.PAYMENTS></span></cell> <cell flex="0 0 90px" class=ff-right><span translate=GLOBAL.BALANCE></span></cell> </ff-row> </ff-header> <ff-static class=ff-no-frame ng-if=!$ctrl.charges.length><span translate=GLOBAL.NONE></span></ff-static> <ff-row ng-repeat="charge in $ctrl.charges"> <ff-static flex="1 0 80px">{{charge.name}}</ff-static> <ff-static flex="0 0 90px" class="ff-right show-lg">{{charge.amount | ncurrency}}</ff-static> <ff-static flex="0 0 90px" class="ff-right show-lg">{{charge.discount | ncurrency}}</ff-static> <ff-static flex="0 0 90px" class="ff-right show-md">{{charge.tax | ncurrency}}</ff-static> <ff-static flex="0 0 90px" class="ff-right show-sm">{{charge.total | ncurrency}}</ff-static> <ff-static flex="0 1 250px"> <ff-col ng-init="chargeIndex = $index"> <label ng-repeat="payment in $ctrl.payments" class=ff-row ng-class="{ \'ff-no-frame\': $index === $ctrl.payments.length - 1 }"> <ff-label>{{payment.name}}</ff-label> <ff-number flex="0 0 65px" ff-model=charge.payments[payment.id] class=ff-right autofocus="{{!$index && !chargeIndex}}" ff-validate-alert="{{\'GLOBAL.AMOUNT\' | translate}}" placeholder=0></ff-number> </label> </ff-col> </ff-static> <ff-static flex="0 0 90px" class=ff-right>{{charge.balance | ncurrency}}</ff-static> </ff-row> </div> </ff-panel> <ff-btn-group> <ff-btn sense=back ff-click=$ctrl.back()><span translate=GLOBAL.BTN_BACK></span></ff-btn> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> </form> '}}]);