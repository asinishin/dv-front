(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"7uiz":function(e,t){e.exports="<ff-panel> <div class=\"ff-grid gutter-h\"> <div class=ff-grid flex=\"{lg: '0 0 50%'}\"> <label class=ff-row flex=\"{sm: '0 0 50%'}\" ng-if=\"$ctrl.model.fromDate !== false\"> <ff-label flex=\"{sm: '0 0 50px', xs: '0 0 50px'}\" ff-required=true><span translate=PAYMENTS_ASSIGNMENT.FROM></span></ff-label> <ff-date flex=\"0 0 124px\" ff-model=$ctrl.model.fromDate ff-required=true ff-date-order=\"{ early: $ctrl.model.fromDate, late: $ctrl.model.toDate }\" ff-validate-alert=\"{ field: '{{'PAYMENTS_ASSIGNMENT.FROM' | translate}}', late: '{{'PAYMENTS_ASSIGNMENT.TO' | translate}}' }\"></ff-date> <span class=ff-label></span> </label> <label class=ff-row flex=\"{sm: '0 0 50%'}\"> <ff-label flex=\"{sm: '0 0 32px', xs: '0 0 50px'}\" ff-required=true><span translate=PAYMENTS_ASSIGNMENT.TO></span></ff-label> <ff-date flex=\"0 0 124px\" ff-model=$ctrl.model.toDate ff-required=true ff-date-order=\"{ early: $ctrl.model.fromDate, late: $ctrl.model.toDate }\" ff-validate-alert=\"{ field: '{{'PAYMENTS_ASSIGNMENT.TO' | translate}}', early: '{{'PAYMENTS_ASSIGNMENT.FROM' | translate}}' }\"></ff-date> <span class=ff-label></span> </label> </div> <ff-row flex=\"{lg: '0 0 50%'}\"> <ff-label flex=\"0 0 60px\"><span translate=PAYMENTS_ASSIGNMENT.FILTER></span></ff-label> <ff-select ff-model=$ctrl.model.filter ff-options=\"opt.name for opt in $ctrl.filters\"></ff-select> </ff-row> </div> </ff-panel> "},C6K6:function(e,t,n){var a={"./bulk-assignment/bulk-assignment-filter.tpl.html":"7uiz","./bulk-assignment/bulk-assignment.tpl.html":"PnuM","./dialog/payments-assignment-dialog.tpl.html":"Mwqb","./payments-assignment/payments-assignment.tpl.html":"n556"};function s(e){var t=f(e);return n(t)}function f(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=f,e.exports=s,s.id="C6K6"},Mwqb:function(e,t){e.exports="<div class=dw-modal> <div class=dw-modal-fade style=background-color:#fff></div> <div style=overflow:auto;width:100%;height:100%;z-index:1;padding:1rem> <payments-assignment purchase-id=$ctrl.purchaseId back=$ctrl.back></payments-assignment> </div> </div> "},PnuM:function(e,t){e.exports='<div class=bulk-invoicing ff-bulk-read-only> <h1 class=page-title>{{state.getPageTitle()}}</h1> <div class="ff-grid gutter-v"> <bulk-payments-assignment-filter model=$ctrl.filters></bulk-payments-assignment-filter> <ff-panel flex="0 0 100%"> <ff-panel-header><span translate=PAYMENTS_ASSIGNMENT.BULK.HEADER></span></ff-panel-header> <ff-spin class=ff-spin-placeholder ng-if="$ctrl.fetching || !$ctrl.orders"></ff-spin> <span ng-if="$ctrl.orders && !($ctrl.orders | filter: $ctrl.filters.filter.predicate).length && !$ctrl.fetching"><span translate=GLOBAL.NONE></span></span> <ff-row ng-if="ffBlock.editMode && ($ctrl.orders | filter: $ctrl.filters.filter.predicate).length > 0"> <label flex=none><ff-include-all flex="0 0 30px" items=$ctrl.orders></ff-include-all></label> </ff-row> <ff-header ng-show="($ctrl.orders | filter: $ctrl.filters.filter.predicate).length > 0"> <ff-row> <span flex="0 0 30px" class=ff-center title="{{\'GLOBAL.INCLUDE\' | translate}}" ng-if=ffBlock.editMode><ff-icon sense=check></ff-icon></span> <cell flex="1 1 150px"><span translate=BULK_INVOICING.COMPANY></span></cell> <cell flex="1 1 150px"><span translate=BULK_INVOICING.USER></span></cell> <cell flex="1 0 60px" class="ff-center show-sm"><span translate=BULK_INVOICING.ORDER_ID></span></cell> <cell flex="0 1 110px" class="ff-center show-sm"><span translate=BULK_INVOICING.DATE></span></cell> <cell flex="1 2 220px" class=show-xl><span translate=BULK_INVOICING.COMMENTS></span></cell> <cell flex="0 0 30px" class="ff-center show-md"><ff-icon sense=billing title="{{\'PAYMENTS_ASSIGNMENT.FILTER.WITH_ASSIGNMENT\' | translate}}"></ff-icon></cell> <cell flex="0 0 30px" class="ff-center show-md"><ff-icon sense=user title="{{\'PAYMENTS_ASSIGNMENT.FILTER.WITH_MANUAL_ASSIGNMENT\' | translate}}"></ff-icon></cell> <cell flex="1 0 94px" class=ff-right><span translate=BULK_INVOICING.BALANCE></span></cell> <ff-btn flex=none sense=collapse size=xs class="buttons-row zero-height"></ff-btn> </ff-row> </ff-header> <ff-col ng-repeat="invoice in $ctrl.orders | filter: $ctrl.filters.filter.predicate"> <ff-row class=invoice-head ng-class="{ active: invoice.uncollapsed }" ff-click="invoice.uncollapsed = !invoice.uncollapsed"> <ff-checkbox flex="0 0 30px" class=ff-center ff-model=invoice.include ng-if=ffBlock.editMode></ff-checkbox> <ff-static flex="1 1 150px" ff-bind=::invoice.userCompany></ff-static> <ff-static flex="1 1 150px" ff-bind=::invoice.userName></ff-static> <ff-static flex="1 0 60px" class="ff-center show-sm" ff-bind=::invoice.orderId></ff-static> <ff-static flex="0 1 110px" class="ff-center show-sm" ff-bind="::invoice.date | date:\'mediumDate\'"></ff-static> <ff-static flex="1 2 220px" class=show-xl ff-bind=::invoice.comments></ff-static> <ff-static flex="0 0 30px" class="ff-center show-md"><ff-icon sense=check ng-if=invoice.hasPaymentAssignments></ff-icon></ff-static> <ff-static flex="0 0 30px" class="ff-center show-md"><ff-icon sense=check ng-if=invoice.manualPaymentAssignment></ff-icon></ff-static> <ff-static flex="1 0 94px" class=ff-right ff-bind="::invoice.balance | ncurrency"></ff-static> <ff-btn flex=none sense=collapse size=xs class=buttons-row title="{{\'GLOBAL.BTN_VIEW\' | translate}}" ff-click="invoice.uncollapsed = !invoice.uncollapsed" ng-class="{ collapsed: !invoice.uncollapsed }"></ff-btn> </ff-row> <ff-row ng-collapse=!invoice.uncollapsed> <span flex="0 0 30px" class=invisible></span> <dw-invoice-small invoice=invoice></dw-invoice-small> <ff-btn sense=collapse size=xs flex=none class="buttons-row zero-height"></ff-btn> </ff-row> </ff-col> </ff-panel> <ff-btn-group> <ff-btn sense=save ff-click=$ctrl.assign()><span translate=PAYMENTS_ASSIGNMENT.BULK.BTN_ASSIGN></span></ff-btn> </ff-btn-group> </div> </div> '},WCig:function(e,t,n){var a=n("+iL7"),s=n("GHf2"),f=n("G5hJ"),l=s("species");e.exports=function(e){return f>=51||!a((function(){var t=[];return(t.constructor={})[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"ee+B":function(e,t,n){"use strict";t.a=angular.module("autofocusDirective",[]).directive("autofocus",["$timeout",function(e){return{restrict:"A",link:function(t,n,a){if("false"!==a.autofocus){var s=n[0].parentNode.querySelector("input")||n[0].parentNode.querySelector("select")||n[0].parentNode.querySelector("button");s&&e((function(){return s.focus()}))}}}}])},"ff+D":function(e,t,n){"use strict";n.r(t);n("Muwe"),n("y89P");var a=n("lRNC"),s=n.n(a),f=n("WSeP"),l=n.n(f),r=n("Mwqb"),c=n.n(r),i=n("iAzO"),o=(n("JBxO"),n("FdtR"),n("yCd9")),u=n.n(o),p=n("YtL8"),m=n.n(p),d=n("n556"),h=n.n(d),g=angular.module("deskworks.PaymentsAssignment",["ngResource","datesDeserializer","deserializeNumbers","deskworks.config"]).factory("PaymentsAssignment",["$resource","$timeout","deskworksConfig","datesDeserializer","deserializeNumbers","helper",function(e,t,n,a,s,f){var r=a(["payments.billedAt","charges.billedAt"]),c=s(["payments.amount","charges.amount","charges.discount","charges.tax"]),i=e(n.getApiAbsUrl("/payments-assignment/:purchaseId"),{},{get:{method:"GET",isArray:!1,transformResponse:[angular.fromJson,r,c]},update:{method:"PUT"}});return{get:function(e){return i.get(e).$promise.then((function(e){return function(e){var t;return l()(t=e.charges).call(t,(function(e){e.total=f.round(e.amount-e.discount+e.tax)})),o({payments:e.payments,charges:e.charges}),e}(e)}))},save:function(e,t){return i.update(e,t).$promise},calcBalances:o};function o(e){var t=e.payments,n=e.charges;l()(n).call(n,(function(e){e.balance=e.total})),l()(t).call(t,(function(e){e.balance=e.amount,l()(n).call(n,(function(t){var n=angular.isNumber(t.payments[e.id])?+t.payments[e.id]:0;t.balance=f.round(t.balance-n),e.balance=f.round(e.balance-n)}))}))}}]),x=n("ee+B"),A=angular.module("deskworks.paymentsAssignmentDirective",["deskworks.helper",g.name,x.a.name]).directive("paymentsAssignment",(function(){return{template:h.a,restrict:"E",scope:!0,controller:"PaymentsAssignmentCtrl as $ctrl",bindToController:{purchaseId:"<",back:"<"}}})).controller("PaymentsAssignmentCtrl",["$scope","state","dwAlerts","helper","PaymentsAssignment",function(e,t,n,a,s){var f=this;f.$onInit=function(){f.charges=[],f.payments=[];e.$watch((function(){var e;return m()(e=f.charges).call(e,(function(e,t){var n;return e[t.id]=m()(n=f.payments).call(n,(function(e,n){return e+t.payments[n.id]||0}),0),e}),{})}),(function(){return s.calcBalances({charges:f.charges,payments:f.payments})}),!0)},f.$onChanges=function(){f.purchaseId&&f.fetch()},f.fetch=function(){if(f.fetching)return f.fetching;f.fetching=s.get({purchaseId:f.purchaseId}).catch((function(e){return n.error(e,"Failed to get payments assignment.")})).finally((function(){f.fetching=null})).then((function(e){f.charges=e.charges,f.payments=e.payments}))},f.save=function(){var e;if(!a.pointFirstInvalid("payments-assignment")){var t={charges:u()(e=f.charges).call(e,(function(e){return{id:e.id,payments:e.payments}}))};return s.save({purchaseId:f.purchaseId},t).catch((function(e){return n.error(e,"Failed to save payments assignment.")})).then((function(){return f.back()}))}}}]),v=angular.module("deskworks.paymentsAssignmentDialog",[i.a.name,A.name]).factory("paymentsAssignmentDialog",["dwModal",function(e){return{open:function(t){var n=t.scope,a=t.purchaseId;return e.show({scope:n,template:c.a,controller:"PaymentsAssignmentModalCtrl as $ctrl",inputs:{purchaseId:a}})}}}]).controller("PaymentsAssignmentModalCtrl",["$scope","purchaseId","close",function(e,t,n){this.purchaseId=t,e.close=n,this.back=function(){return n()}}]),y=n("Tfwl"),N=n.n(y),b=n("XAgg"),w=n.n(b),I=n("yKah"),E=n.n(I),S=n("lvz6"),T=n.n(S),M=n("Ekwr"),$=n.n(M),k=n("03wM"),C=n.n(k),O=n("hsT8"),L=n.n(O),P=n("fzuT"),G=n.n(P),D=n("xAOr");function B(e,t){var n=C()(e);if($.a){var a=$()(e);t&&(a=L()(a).call(a,(function(t){return T()(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)l()(n=B(Object(a),!0)).call(n,(function(t){G()(e,t,a[t])}));else if(E.a)w()(e,E()(a));else{var s;l()(s=B(Object(a))).call(s,(function(t){N()(e,t,T()(a,t))}))}}return e}var U=angular.module("deskworks.BulkPaymentsAssignment",["ngResource","datesDeserializer","deskworks.config"]).factory("BulkPaymentsAssignment",["$resource","$timeout","$filter","deskworksConfig","datesDeserializer",function(e,t,n,a,s){var f=s(["date","items.date"]),l=e(a.getApiAbsUrl("/payments-assignment/orders"),{},{query:{method:"GET",isArray:!0,transformResponse:[angular.fromJson,f]}}),r=e(a.getApiAbsUrl("/payments-assignment/bulk-assignment"),{},{save:{method:"POST"}});return{query:function(e){return l.query(_(_({},e),{},{fromDate:n("date")(e.fromDate,"yyyy-MM-dd"),toDate:n("date")(e.toDate,"yyyy-MM-dd")})).$promise},save:function(e){return r.save({},e).$promise}}}]),R=(n("lYjL"),n("X5mX"),n("nbuU")),Y=n.n(R),F=n("7uiz"),H=n.n(F),q=angular.module("deskworks.bulkPaymentsAssignmentFilterDirective",[]).directive("bulkPaymentsAssignmentFilter",["$compile",function(e){return{restrict:"EAC",scope:!0,transclude:"element",priority:2,controller:"BulkPaymentsAssignmentFilterCtrl as $ctrl",bindToController:{model:"<"},link:function(t,n,a,s,f){f((function(a,s){var f=e(H.a)(t);angular.element(f[0].querySelector?f[0].querySelector(".ff-panel-body"):f).append(a),n.after(f)}))}}}]).controller("BulkPaymentsAssignmentFilterCtrl",["$scope","$location","$filter","$translate",function(e,t,n,a){var s=this;s.filters=[{id:"all",name:a.instant("PAYMENTS_ASSIGNMENT.FILTER.ALL"),predicate:{}},{id:"withoutAssignment",name:a.instant("PAYMENTS_ASSIGNMENT.FILTER.WITHOUT_ASSIGNMENT"),predicate:{hasPaymentAssignments:!1}},{id:"withAssignment",name:a.instant("PAYMENTS_ASSIGNMENT.FILTER.WITH_ASSIGNMENT"),predicate:{hasPaymentAssignments:!0}},{id:"withManualAssignment",name:a.instant("PAYMENTS_ASSIGNMENT.FILTER.WITH_MANUAL_ASSIGNMENT"),predicate:{manualPaymentAssignment:!0}}],s.$onInit=function(){e.$watch((function(){return t.search().fromDate}),(function(e){var t=n("toDate")(e);s.model.fromDate=moment.isMoment(t)&&!s.model.fromDate.isSame(t)?t:s.model.fromDate})),e.$watch("$ctrl.model.fromDate",(function(e){moment.isMoment(e)&&t.search("fromDate",n("date")(e,"yyyy-MM-dd")).replace()})),e.$watch((function(){return t.search().toDate}),(function(e){var t=n("toDate")(e);s.model.toDate=moment.isMoment(t)&&!s.model.toDate.isSame(t)?t:s.model.toDate})),e.$watch("$ctrl.model.toDate",(function(e){moment.isMoment(e)&&t.search("toDate",n("date")(e,"yyyy-MM-dd")).replace()})),e.$watch((function(){return L()(t.search())}),(function(e){var t;s.model.filter=Y()(t=s.filters).call(t,(function(t){return t.id===e}))||s.filters[0]})),e.$watch("$ctrl.model.filter",(function(e){t.search("filter",e.id).replace()}))}}]),z=n("G6E5");function K(e,t){var n=C()(e);if($.a){var a=$()(e);t&&(a=L()(a).call(a,(function(t){return T()(e,t).enumerable}))),n.push.apply(n,a)}return n}var V=angular.module("deskworks.BulkPaymentsAssignmentCtrl",[U.name,D.a.name,q.name,z.a.name,"debounce"]).controller("BulkPaymentsAssignmentCtrl",["$scope","$translate","$timeout","dwAlerts","state","helper","debounce","BulkPaymentsAssignment","reportHelper",function(e,t,n,a,s,f,r,c,i){var o=this;s.setPageTitle(t.instant("PAYMENTS_ASSIGNMENT.BULK.PAGE_TITLE"));var p=i.paramsChanged;o.filters={fromDate:moment().subtract(1,"month").startOf("month"),toDate:moment().subtract(1,"month").endOf("month")},o.onInit=function(){var t=r((function(){o.orders=[],o.fetch()}),500);e.$watch("$ctrl.filters",(function(e,n){!p(e,n,["fromDate","toDate"])&&o.orders||t()}),!0)},o.fetch=function(){if(o.fetching)return o.fetching;o.fetching=c.query(function(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)l()(n=K(Object(a),!0)).call(n,(function(t){G()(e,t,a[t])}));else if(E.a)w()(e,E()(a));else{var s;l()(s=K(Object(a))).call(s,(function(t){N()(e,t,T()(a,t))}))}}return e}({centerId:s.getCurrentCenterId()},f.pick(o.filters,["fromDate","toDate"]))).catch((function(e){return a.error(e,"Failed to query bulk payments assignment.")})).finally((function(){o.fetching=null})).then((function(e){o.orders=e}))},o.assign=function(){var e,n=L()(e=o.orders||[]).call(e,(function(e){return e.include})),s={invoices:u()(n).call(n,(function(e){return e.id}))};return n.length?c.save(s).catch((function(e){return a.error(e,"Failed to assign payments.")})).then((function(){a.info(t.instant("PAYMENTS_ASSIGNMENT.BULK.SUCCESS")),l()(n).call(n,(function(e){e.hasPaymentAssignments=!0}))})):a.error(t.instant("BULK_INVOICING.NOTHING_SELECTED"))},n((function(){return o.onInit()}))}]),j=["$injector",function(e){e.loadNewModules([v.name,V.name]),e.invoke(["$templateCache",function(e){var t,a=n("C6K6");l()(t=s()(a).call(a)).call(t,(function(t){return e.put(t.replace(/^\.\//,""),a(t))}))}])}];t.default=j},lYjL:function(e,t,n){"use strict";var a=n("JRM0"),s=n("5q7I").filter,f=n("WCig"),l=n("p2JK"),r=f("filter"),c=l("filter");a({target:"Array",proto:!0,forced:!r||!c},{filter:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},mjbs:function(e,t){e.exports='<ff-header> <ff-row> <cell flex="10 0 50%"><span translate=PURCHASE.INVOICE.DESCRIPTION></span></cell> <cell flex="3 0 45px" class="ff-center show-sm"><span translate=PURCHASE.INVOICE.DATE></span></cell> <cell flex="1 0 64px" class="ff-right show-md"><span translate=PURCHASE.INVOICE.PRICE></span></cell> <cell flex="1 0 36px" class=ff-center><span translate=PURCHASE.INVOICE.QUANTITY></span></cell> <cell flex="0 0 94px" class=ff-right><span translate=PURCHASE.INVOICE.AMOUNT></span></cell> </ff-row> </ff-header> <ff-row ng-repeat="item in ::dwInvoice.invoice.items"> <ff-static flex="10 0 50%" ff-bind=::item.description></ff-static> <ff-static flex="3 0 45px" class="ff-center show-sm" ff-bind="::item.date | date:\'mediumDate\'"></ff-static> <ff-static flex="1 0 64px" class="ff-right show-md" ff-bind="::item.price | ncurrency"></ff-static> <ff-static flex="1 0 36px" class=ff-center ff-bind=::item.quantity></ff-static> <ff-static flex="0 0 94px" class=ff-right ff-bind="::item.amount | ncurrency"></ff-static> </ff-row> <ff-row class=invoice-charges> <ff-label><span translate=PURCHASE.INVOICE.CHARGES></span></ff-label> <ff-static flex="0 0 94px" class=ff-right ff-bind="::dwInvoice.invoice.total | ncurrency"></ff-static> </ff-row> <ff-row class=invoice-tax ng-repeat="tax in dwInvoice.invoice.taxes"> <ff-label>{{tax.taxName}}</ff-label> <ff-static flex="0 0 94px" class=ff-right ff-bind="tax.taxAmount | ncurrency"></ff-static> </ff-row> <ff-row class=invoice-payment> <ff-label><span translate=PURCHASE.INVOICE.PAYMENT></span></ff-label> <ff-static flex="0 0 94px" class=ff-right ff-bind="::dwInvoice.invoice.payment | ncurrency"></ff-static> </ff-row> <ff-row class=invoice-balance> <ff-label><span translate=PURCHASE.INVOICE.BALANCE></span></ff-label> <ff-static flex="0 0 94px" class=ff-right ff-bind="::dwInvoice.invoice.balance | ncurrency"></ff-static> </ff-row> '},n556:function(e,t){e.exports='<form name=$ctrl.form class=gutter-v> <ff-panel> <ff-panel-header><span translate=PAYMENTS_ASSIGNMENT.PAYMENTS></span></ff-panel-header> <div ff-dim=$ctrl.fetching> <ff-header> <ff-row> <cell flex="0 1 110px" class="ff-right show-sm"><span translate=GLOBAL.DATE></span></cell> <cell><span translate=GLOBAL.NAME></span></cell> <cell flex="0 1 90px" class="ff-right show-md"><span translate=GLOBAL.AMOUNT></span></cell> <cell flex="0 1 90px" class=ff-right><span translate=GLOBAL.BALANCE></span></cell> </ff-row> </ff-header> <ff-static class=ff-no-frame ng-if=!$ctrl.payments.length><span translate=GLOBAL.NONE></span></ff-static> <ff-row ng-repeat="payment in $ctrl.payments"> <ff-static flex="0 1 110px" class="ff-right show-sm">{{payment.billedAt | date}}</ff-static> <ff-static>{{payment.name}}</ff-static> <ff-static flex="0 1 90px" class="ff-right show-md">{{payment.amount | ncurrency}}</ff-static> <ff-static flex="0 1 90px" class=ff-right>{{payment.balance | ncurrency}}</ff-static> </ff-row> </div> </ff-panel> <ff-panel> <ff-panel-header><span translate=PAYMENTS_ASSIGNMENT.HEADER></span></ff-panel-header> <div ff-dim=$ctrl.fetching> <ff-header> <ff-row> <cell flex="1 0 80px"><span translate=GLOBAL.PRODUCT></span></cell> <cell flex="0 0 90px" class="ff-right show-lg"><span translate=GLOBAL.AMOUNT></span></cell> <cell flex="0 0 90px" class="ff-right show-lg"><span translate=GLOBAL.DISCOUNT></span></cell> <cell flex="0 0 90px" class="ff-right show-md"><span translate=GLOBAL.TAX></span></cell> <cell flex="0 0 90px" class="ff-right show-sm"><span translate=GLOBAL.TOTAL></span></cell> <cell flex="0 1 250px"><span translate=PAYMENTS_ASSIGNMENT.PAYMENTS></span></cell> <cell flex="0 0 90px" class=ff-right><span translate=GLOBAL.BALANCE></span></cell> </ff-row> </ff-header> <ff-static class=ff-no-frame ng-if=!$ctrl.charges.length><span translate=GLOBAL.NONE></span></ff-static> <ff-row ng-repeat="charge in $ctrl.charges"> <ff-static flex="1 0 80px">{{charge.name}}</ff-static> <ff-static flex="0 0 90px" class="ff-right show-lg">{{charge.amount | ncurrency}}</ff-static> <ff-static flex="0 0 90px" class="ff-right show-lg">{{charge.discount | ncurrency}}</ff-static> <ff-static flex="0 0 90px" class="ff-right show-md">{{charge.tax | ncurrency}}</ff-static> <ff-static flex="0 0 90px" class="ff-right show-sm">{{charge.total | ncurrency}}</ff-static> <ff-static flex="0 1 250px"> <ff-col ng-init="chargeIndex = $index"> <label ng-repeat="payment in $ctrl.payments" class=ff-row ng-class="{ \'ff-no-frame\': $index === $ctrl.payments.length - 1 }"> <ff-label>{{payment.name}}</ff-label> <ff-number flex="0 0 65px" ff-model=charge.payments[payment.id] class=ff-right autofocus="{{!$index && !chargeIndex}}" ff-validate-alert="{{\'GLOBAL.AMOUNT\' | translate}}" placeholder=0></ff-number> </label> </ff-col> </ff-static> <ff-static flex="0 0 90px" class=ff-right>{{charge.balance | ncurrency}}</ff-static> </ff-row> </div> </ff-panel> <ff-btn-group> <ff-btn sense=back ff-click=$ctrl.back()><span translate=GLOBAL.BTN_BACK></span></ff-btn> <ff-btn sense=save type=submit ff-click=$ctrl.save() ff-disabled=$ctrl.form.$pristine> <span translate=GLOBAL.BTN_SAVE></span> </ff-btn> </ff-btn-group> </form> '},p2JK:function(e,t,n){var a=n("Hvpk"),s=n("+iL7"),f=n("tF07"),l=Object.defineProperty,r={},c=function(e){throw e};e.exports=function(e,t){if(f(r,e))return r[e];t||(t={});var n=[][e],i=!!f(t,"ACCESSORS")&&t.ACCESSORS,o=f(t,0)?t[0]:c,u=f(t,1)?t[1]:void 0;return r[e]=!!n&&!s((function(){if(i&&!a)return!0;var e={length:-1};i?l(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,o,u)}))}},xAOr:function(e,t,n){"use strict";var a=n("mjbs"),s=n.n(a);t.a=angular.module("deskworks.dwInvoice.small",["deskworks.state","flexForms","deskworks.helper"]).directive("dwInvoiceSmall",(function(){return{template:s.a,restrict:"E",scope:!0,controller:"dwInvoiceSmallCtrl as dwInvoice",bindToController:{invoice:"=*"},compile:function(e,t){return e.addClass("dw-invoice"),function(){}}}})).controller("dwInvoiceSmallCtrl",(function(){}))}}]);