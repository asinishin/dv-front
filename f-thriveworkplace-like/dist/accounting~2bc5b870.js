(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/wU9":function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.AccountingPeriods",["ngResource","datesDeserializer","deskworks.config"]).factory("AccountingPeriods",["$resource","$timeout","datesDeserializer","deskworksConfig",function(e,t,n,s){var f=n(["date","closedAt"]),a=e(s.getApiAbsUrl("/centers/:centerId/accounting-periods/:id"),{},{query:{method:"GET",isArray:!0,transformResponse:[angular.fromJson,f]},update:{method:"PUT",transformResponse:[angular.fromJson,f]}});return{query:function(e){return a.query({centerId:e}).$promise},save:function(e,t,n){return a.update({centerId:e,id:t},n).$promise}}}])},"2GSD":function(e,t,n){"use strict";n.r(t);n("JBxO"),n("FdtR");var s=n("/wU9"),f=n("CZRz");t.default=angular.module("deskworks.AccountingPeriodsCtrl",["debounce",s.default.name,f.default.name]).controller("AccountingPeriodsCtrl",["$scope","$translate","dwAlerts","state","debounce","AccountingPeriods",function(e,t,n,s,f,a){var c=this;s.setPageTitle(t.instant("ACCOUNTING_PERIODS.PAGE_TITLE")),a.query(s.getCurrentCenterId()).catch((function(e){return n.error(e,"Failed to query accounting periods")})).then((function(e){c.periods=e})),c.savePeriod=f((function(t){return t.$$spin=!0,a.save(s.getCurrentCenterId(),t.id,t).catch((function(e){return n.error(e,"Failed to query accounting periods")})).then((function(e){t.closedAt=e.closedAt,t.closedBy=e.closedBy})).then((function(t){return e.$broadcast("AccountingPeriods.update")})).finally((function(e){t.$$spin=!1}))}),500)}])},"2xW1":function(e,t){e.exports='<div ff-bulk-read-only> <h1 class="page-title">{{state.getPageTitle()}}</h1> <div class="gutter-v-half"> <ff-panel style="max-width:320px"> <ff-spin ng-if="$ctrl.fetching.$$init === \'search\'"></ff-spin> <ff-row> <ff-label flex="0 0 70px"><span translate="GLOBAL.SEARCH"></span></ff-label> <ff-text name="search" ff-model="$ctrl.params.q" ff-change="$ctrl.fetchDebounced(\'search\')" placeholder="order #, company, user name"></ff-text> </ff-row> </ff-panel> <ff-panel> <ff-header ng-if="$ctrl.purchases.length"> <ff-row> <cell flex="0 1 96px"> <span translate="INVOICE_LOG.ORDER_ID"></span> <ff-sort props="$ctrl.params" col-id="\'orderId\'" ff-click="$ctrl.fetch(\'sort\')"></ff-sort> </cell> <cell flex="1 1 15%" class="show-sm"> <span translate="INVOICE_LOG.COMPANY"></span> <ff-sort props="$ctrl.params" col-id="\'userCompany\'" ff-click="$ctrl.fetch(\'sort\')"></ff-sort> </cell> <cell flex="1 1 15%" class="show-md"> <span translate="INVOICE_LOG.USER"></span> <ff-sort props="$ctrl.params" col-id="\'userName\'" ff-click="$ctrl.fetch(\'sort\')"></ff-sort> </cell> <cell flex="0 1 110px" class="ff-right"> <span translate="INVOICE_LOG.DATE"></span> <ff-sort props="$ctrl.params" col-id="\'billDate\'" ff-click="$ctrl.fetch(\'sort\')"></ff-sort> </cell> <cell flex="0 1 90px" class="ff-right"> <span translate="INVOICE_LOG.AMOUNT"></span> <ff-sort props="$ctrl.params" col-id="\'chargesTotal\'" ff-click="$ctrl.fetch(\'sort\')"></ff-sort> </cell> <cell flex="0 1 90px" class="ff-right"> <span translate="INVOICE_LOG.BALANCE"></span> <ff-sort props="$ctrl.params" col-id="\'balance\'" ff-click="$ctrl.fetch(\'sort\')"></ff-sort> </cell> <ff-btn-group flex="none" class="buttons-row zero-height"> <ff-btn sense="view" size="xs"></ff-btn> <ff-btn sense="edit" size="xs"></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-col infinite-scroll="$ctrl.fetch()" infinite-scroll-distance="2" infinite-scroll-container="\'.snap-content-scroller\'"> <ff-row ng-repeat="purchase in $ctrl.purchases"> <ff-static flex="0 1 96px">{{::purchase.orderId}}</ff-static> <ff-static flex="1 1 15%" class="show-sm">{{::purchase.userCompany | nd}}</ff-static> <ff-static flex="1 1 15%" class="show-md">{{::purchase.userName | nd}}</ff-static> <ff-static flex="0 1 110px" class="ff-right">{{::purchase.billDate | date:\'mediumDate\' | nd}}</ff-static> <ff-static flex="0 1 90px" class="ff-right">{{::purchase.chargesTotal | ncurrency}}</ff-static> <ff-static flex="0 1 90px" class="ff-right">{{::purchase.balance | ncurrency}}</ff-static> <ff-btn-group flex="none" class="buttons-row"> <ff-btn sense="view" size="xs" ff-click="$ctrl.view(purchase)" title="{{\'GLOBAL.BTN_VIEW\' | translate}}"></ff-btn> <ff-btn sense="edit" size="xs" ff-click="$ctrl.edit(purchase)" title="{{\'GLOBAL.BTN_EDIT\' | translate}}"></ff-btn> </ff-btn-group> </ff-row> <div class="ff-spin ff-spin-placeholder" ng-if="$ctrl.fetching && !$ctrl.fetching.$$init"></div> </ff-col> <ff-row ng-if="!$ctrl.purchases.length && !$ctrl.fetching" class="ff-no-frame"> <ff-label>{{\'GLOBAL.NONE\' | translate}}</ff-label> </ff-row> </ff-panel> </div> </div> '},"9LrB":function(e,t,n){"use strict";n.r(t);n("3dw1"),n("iPZ8"),n("kypl"),n("8cZI");var s=n("xAOr");t.default=angular.module("deskworks.AccountingBulkInvoicingCtrl",["deskworks.accounting.bulkInvoicing.service",s.a.name]).controller("AccountingBulkInvoicingCtrl",["$scope","$route","$translate","dwAlerts","state","helper","invoices","bulkInvoicingService",function(e,t,n,s,f,a,c,i){var r=this;f.setPageTitle(n.instant("BULK_INVOICING.PAGE_TITLE")),r.invoices=c,r.invoices.forEach((function(e){e.collapsed=!0,angular.isArray(e.items)&&e.items.forEach((function(e){e.description=[e.name||"",e.description||""].join(" ")}))})),r.sendInvoices=function(){var e={invoices:[]};return r.invoices.forEach((function(t){t.include&&e.invoices.push(t.id)})),e.invoices.length?i.sendEmails(f.getCurrentCenterId(),e).catch((function(e){return s.error(e,"Failed to send invoices.")})).then((function(){s.info(n.instant("BULK_INVOICING.SUCCESS")),t.reload()})):s.error(n.instant("BULK_INVOICING.NOTHING_SELECTED"))}}])},CZRz:function(e,t,n){"use strict";n.r(t);var s=n("nbuU"),f=n.n(s),a=(n("3dw1"),n("prTZ"));t.default=angular.module("deskworks.accountingPeriodsAuditDirective",["deskworks.helper",a.default.name]).directive("accountingPeriodsAudit",(function(){return{restrict:"E",scope:!0,templateUrl:"accounting-periods/accounting-periods-audit.tpl.html",controller:"AccountingPeriodsAuditDirectiveCtrl as $ctrl",bindToController:{periods:"<"}}})).controller("AccountingPeriodsAuditDirectiveCtrl",["$scope","state","dwAlerts","AccountingPeriodsAudit",function(e,t,n,s){var a=this;function c(){return s.query(t.getCurrentCenterId()).catch((function(e){return n.error(e,"Failed to query accounting periods audit")})).then((function(e){a.audit=e,a.audit.forEach((function(e){var t;e.date=(f()(t=a.periods).call(t,(function(t){return e.periodId===t.id}))||{}).date}))}))}a.$onInit=function(){c(),e.$on("AccountingPeriods.update",(function(e){return c()}))}}])},DzHV:function(e,t,n){"use strict";n.r(t);n("3dw1");var s=n("xAOr");t.default=angular.module("deskworks.AccountingBulkChargesCtrl",["deskworks.accounting.bulkInvoicing.service",s.a.name]).controller("AccountingBulkChargesCtrl",["$scope","$route","$translate","dwAlerts","state","helper","invoices","bulkInvoicingService",function(e,t,n,s,f,a,c,i){var r=this;f.setPageTitle(n.instant("BULK_CHARGES.PAGE_TITLE")),r.invoices=c,r.invoices.forEach((function(e){e.collapsed=!0})),r.chargeCards=function(){var e={invoices:[]};return r.invoices.forEach((function(t){t.include&&e.invoices.push(t.id)})),e.invoices.length?i.billPurchases(f.getCurrentCenterId(),e).catch((function(e){return s.error(e,"Failed to charge credit cards.")})).then((function(){s.info(n.instant("BULK_CHARGES.SUCCESS")),t.reload()})):s.error(n.instant("BULK_CHARGES.NOTHING_SELECTED"))}}])},KB4M:function(e,t,n){var s={"./accounting-periods/accounting-periods-audit.directive.js":"CZRz","./accounting-periods/accounting-periods-audit.service.js":"prTZ","./accounting-periods/accounting-periods.controller.js":"2GSD","./accounting-periods/accounting-periods.service.js":"/wU9","./bulk-charges/bulk-charges.controller.js":"DzHV","./bulk-invoicing/bulk-invoicing.controller.js":"9LrB","./invoice-log/invoice-log.controller.js":"yFfw","./invoice-log/invoice-log.service.js":"Qbtd"};function f(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}f.keys=function(){return Object.keys(s)},f.resolve=a,e.exports=f,f.id="KB4M"},Qbtd:function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.InvoiceLog",["ngResource","deskworks.config","datesDeserializer"]).factory("InvoiceLog",["$resource","$timeout","deskworksConfig","datesDeserializer",function(e,t,n,s){var f=s(["billDate","dueDate"]),a=e(n.getApiAbsUrl("/invoice-log"),{},{query:{method:"GET",isArray:!0,transformResponse:[angular.fromJson,f]}});return{query:function(e){return a.query(e).$promise}}}])},TO6M:function(e,t){e.exports='<div class="bulk-invoicing" ff-bulk-read-only> <h1 class="page-title">{{state.getPageTitle()}}</h1> <div class="gutter-v"> <ff-panel> <ff-panel-header><span translate="BULK_INVOICING.HEADER"></span></ff-panel-header> <span ng-if="!vm.invoices.length"><span translate="GLOBAL.NONE"></span></span> <ff-row ng-if="ffBlock.editMode && vm.invoices.length > 0"> <label flex="none"><ff-include-all flex="0 0 30px" items="vm.invoices"></ff-include-all></label> </ff-row> <ff-header ng-show="vm.invoices.length > 0"> <ff-row> <span flex="0 0 30px" class="ff-center" title="{{\'GLOBAL.INCLUDE\' | translate}}" ng-if="ffBlock.editMode"><ff-icon sense="check"></ff-icon></span> <cell flex="1 1 150px"><span translate="BULK_INVOICING.COMPANY"></span></cell> <cell flex="1 1 150px"><span translate="BULK_INVOICING.USER"></span></cell> <cell flex="1 0 60px" class="ff-center show-sm"><span translate="BULK_INVOICING.ORDER_ID"></span></cell> <cell flex="3 0 45px" class="ff-center show-sm"><span translate="BULK_INVOICING.DATE"></span></cell> <cell flex="1 2 300px" class="show-md"><span translate="BULK_INVOICING.COMMENTS"></span></cell> <cell flex="1 0 94px" class="ff-right"><span translate="BULK_INVOICING.BALANCE"></span></cell> <ff-btn flex="none" sense="collapse" size="xs" class="buttons-row zero-height"></ff-btn> </ff-row> </ff-header> <ff-col ng-repeat="invoice in ::vm.invoices"> <ff-row class="invoice-head" ng-class="{ active: !invoice.collapsed }" ff-click="invoice.collapsed = !invoice.collapsed"> <ff-checkbox flex="0 0 30px" class="ff-center" ff-model="invoice.include" ng-if="ffBlock.editMode"></ff-checkbox> <ff-static flex="1 1 150px" ff-bind="::invoice.userCompany"></ff-static> <ff-static flex="1 1 150px" ff-bind="::invoice.userName"></ff-static> <ff-static flex="1 0 60px" class="ff-center show-sm" ff-bind="::invoice.orderId"></ff-static> <ff-static flex="3 0 45px" class="ff-center show-sm" ff-bind="::invoice.date | date:\'mediumDate\'"></ff-static> <ff-static flex="1 2 300px" class="show-md" ff-bind="::invoice.comments"></ff-static> <ff-static flex="1 0 94px" class="ff-right" ff-bind="::invoice.balance | ncurrency"></ff-static> <ff-btn flex="none" sense="collapse" size="xs" class="buttons-row" title="{{\'GLOBAL.BTN_VIEW\' | translate}}" ff-click="invoice.collapsed = !invoice.collapsed" ng-class="{ collapsed: invoice.collapsed }"></ff-btn> </ff-row> <ff-row ng-collapse="invoice.collapsed"> <span flex="0 0 30px" class="invisible"></span> <dw-invoice-small invoice="invoice"></dw-invoice-small> <ff-btn sense="collapse" size="xs" flex="none" class="buttons-row zero-height"></ff-btn> </ff-row> </ff-col> </ff-panel> <ff-btn-group> <ff-btn sense="save" ff-click="vm.sendInvoices()"><span translate="BULK_INVOICING.BTN_SEND"></span></ff-btn> </ff-btn-group> </div> </div> '},fjnr:function(e,t,n){"use strict";n.r(t);n("3dw1"),n("Muwe"),n("y89P");var s=n("yCd9"),f=n.n(s),a=n("lRNC"),c=n.n(a),i=["$injector",function(e){var t,s,a=(t=n("KB4M"),f()(s=c()(t).call(t)).call(s,t));e.loadNewModules(f()(a).call(a,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t=n("ggrf");c()(t).call(t).forEach((function(n){return e.put(n.replace(/^\.\//,""),t(n))}))}])}];t.default=i},ggrf:function(e,t,n){var s={"./accounting-periods/accounting-periods-audit.tpl.html":"z8s6","./accounting-periods/accounting-periods.tpl.html":"lqXS","./bulk-charges/bulk-charges.tpl.html":"veCJ","./bulk-invoicing/bulk-invoicing.tpl.html":"TO6M","./invoice-log/invoice-log.tpl.html":"2xW1"};function f(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}f.keys=function(){return Object.keys(s)},f.resolve=a,e.exports=f,f.id="ggrf"},lqXS:function(e,t){e.exports='<div ff-bulk-read-only> <h1 class="page-title">{{state.getPageTitle()}}</h1> <div class="gutter-v" style="max-width:640px"> <ff-panel> <ff-panel-header><span translate="ACCOUNTING_PERIODS.CLOSE_PERIODS.HEADER"></span></ff-panel-header> <ff-row ng-if="!$ctrl.periods"><ff-spin class="ff-spin-placeholder"></ff-spin></ff-row> <ff-header ng-if="$ctrl.periods" class="animate-collapse"> <ff-row> <cell flex="0 1 150px" class="ff-right"><span translate="ACCOUNTING_PERIODS.PERIOD"></span></cell> <cell flex="0 1 70px" class="ff-center"><span translate="ACCOUNTING_PERIODS.CLOSED"></span></cell> <cell flex="0 1 120px" class="ff-right"><span translate="ACCOUNTING_PERIODS.CLOSED_AT"></span></cell> <cell flex="1 1 100px"><span translate="ACCOUNTING_PERIODS.CLOSED_BY"></span></cell> </ff-row> </ff-header> <ff-row ng-repeat="period in $ctrl.periods" class="animate-collapse"> <ff-static flex="0 1 150px" class="ff-right">{{period.date | date: \'MMMM yyyy\'}}</ff-static> <ff-static flex="0 1 70px" class="ff-center"> <div ff-dim="period.$$spin"><ff-checkbox ff-model="period.closed" ff-change="$ctrl.savePeriod(period)"></ff-checkbox></div> </ff-static> <ff-static flex="0 1 120px" class="ff-right">{{period.closedAt | date: \'mediumDate\' | nd}}</ff-static> <ff-static flex="1 1 100px">{{period.closedBy | nd}}</ff-static> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense="collapse" ff-click="$ctrl.showAudit = !$ctrl.showAudit" ng-class="{ collapsed: !$ctrl.showAudit }"> <span translate="GLOBAL.BTN_AUDIT"></span> </ff-btn> </ff-btn-group> <div ng-if="$ctrl.showAudit" class="animate-collapse"> <accounting-periods-audit periods="$ctrl.periods"></accounting-periods-audit> </div> </div> </div> '},mjbs:function(e,t){e.exports='<ff-header> <ff-row> <cell flex="10 0 50%"><span translate="PURCHASE.INVOICE.DESCRIPTION"></span></cell> <cell flex="3 0 45px" class="ff-center show-sm"><span translate="PURCHASE.INVOICE.DATE"></span></cell> <cell flex="1 0 64px" class="ff-right show-md"><span translate="PURCHASE.INVOICE.PRICE"></span></cell> <cell flex="1 0 36px" class="ff-center"><span translate="PURCHASE.INVOICE.QUANTITY"></span></cell> <cell flex="0 0 94px" class="ff-right"><span translate="PURCHASE.INVOICE.AMOUNT"></span></cell> </ff-row> </ff-header> <ff-row ng-repeat="item in ::dwInvoice.invoice.items"> <ff-static flex="10 0 50%" ff-bind="::item.description"></ff-static> <ff-static flex="3 0 45px" class="ff-center show-sm" ff-bind="::item.date | date:\'mediumDate\'"></ff-static> <ff-static flex="1 0 64px" class="ff-right show-md" ff-bind="::item.price | ncurrency"></ff-static> <ff-static flex="1 0 36px" class="ff-center" ff-bind="::item.quantity"></ff-static> <ff-static flex="0 0 94px" class="ff-right" ff-bind="::item.amount | ncurrency"></ff-static> </ff-row> <ff-row class="invoice-charges"> <ff-label><span translate="PURCHASE.INVOICE.CHARGES"></span></ff-label> <ff-static flex="0 0 94px" class="ff-right" ff-bind="::dwInvoice.invoice.total | ncurrency"></ff-static> </ff-row> <ff-row class="invoice-tax" ng-repeat="tax in dwInvoice.invoice.taxes"> <ff-label>{{tax.taxName}}</ff-label> <ff-static flex="0 0 94px" class="ff-right" ff-bind="tax.taxAmount | ncurrency"></ff-static> </ff-row> <ff-row class="invoice-payment"> <ff-label><span translate="PURCHASE.INVOICE.PAYMENT"></span></ff-label> <ff-static flex="0 0 94px" class="ff-right" ff-bind="::dwInvoice.invoice.payment | ncurrency"></ff-static> </ff-row> <ff-row class="invoice-balance"> <ff-label><span translate="PURCHASE.INVOICE.BALANCE"></span></ff-label> <ff-static flex="0 0 94px" class="ff-right" ff-bind="::dwInvoice.invoice.balance | ncurrency"></ff-static> </ff-row> '},prTZ:function(e,t,n){"use strict";n.r(t),t.default=angular.module("deskworks.AccountingPeriodsAudit",["ngResource","datesDeserializer","deskworks.config"]).factory("AccountingPeriodsAudit",["$resource","$timeout","datesDeserializer","deskworksConfig",function(e,t,n,s){var f=n(["createdAt"]),a=e(s.getApiAbsUrl("/centers/:centerId/accounting-periods/audit"),{},{query:{method:"GET",isArray:!0,transformResponse:[angular.fromJson,f]}});return{query:function(e){return a.query({centerId:e}).$promise}}}])},veCJ:function(e,t){e.exports='<div class="bulk-invoicing" ff-bulk-read-only> <h1 class="page-title">{{state.getPageTitle()}}</h1> <div class="gutter-v"> <ff-panel> <ff-panel-header><span translate="BULK_CHARGES.HEADER"></span></ff-panel-header> <span ng-if="!vm.invoices.length"><span translate="GLOBAL.NONE"></span></span> <ff-row ng-if="ffBlock.editMode && vm.invoices.length > 0"> <label flex="none"><ff-include-all flex="0 0 30px" items="vm.invoices"></ff-include-all></label> </ff-row> <ff-header ng-show="vm.invoices.length > 0"> <ff-row> <span flex="0 0 30px" class="ff-center" title="{{\'GLOBAL.INCLUDE\' | translate}}" ng-if="ffBlock.editMode"><ff-icon sense="check"></ff-icon></span> <cell flex="1 1 150px"><span translate="BULK_CHARGES.COMPANY"></span></cell> <cell flex="1 1 150px"><span translate="BULK_CHARGES.USER"></span></cell> <cell flex="1 0 60px" class="ff-center"><span translate="BULK_CHARGES.ORDER_ID"></span></cell> <cell flex="3 0 45px" class="ff-center"><span translate="BULK_CHARGES.DATE"></span></cell> <cell flex="1 2 300px"><span translate="BULK_CHARGES.COMMENTS"></span></cell> <cell flex="1 0 94px" class="ff-right"><span translate="BULK_CHARGES.TOTAL"></span></cell> <ff-btn flex="none" sense="collapse" size="xs" class="buttons-row zero-height"></ff-btn> </ff-row> </ff-header> <ff-col ng-repeat="invoice in ::vm.invoices"> <ff-row class="invoice-head" ng-class="{ active: !invoice.collapsed }" ff-click="invoice.collapsed = !invoice.collapsed"> <ff-checkbox flex="0 0 30px" class="ff-center" ff-model="invoice.include" ng-if="ffBlock.editMode"></ff-checkbox> <ff-static flex="1 1 150px" ff-bind="::invoice.userCompany"></ff-static> <ff-static flex="1 1 150px" ff-bind="::invoice.userName"></ff-static> <ff-static flex="1 0 60px" class="ff-center" ff-bind="::invoice.orderId"></ff-static> <ff-static flex="3 0 45px" class="ff-center" ff-bind="::invoice.date | date:\'mediumDate\'"></ff-static> <ff-static flex="1 2 300px" ff-bind="::invoice.comments"></ff-static> <ff-static flex="1 0 94px" class="ff-right" ff-bind="::invoice.total | ncurrency"></ff-static> <ff-btn-group flex="0 0 auto"> <ff-btn sense="collapse" size="xs" class="buttons-row" title="{{\'GLOBAL.BTN_VIEW\' | translate}}" ff-click="invoice.collapsed = !invoice.collapsed" ng-class="{ collapsed: invoice.collapsed }"></ff-btn> </ff-btn-group> </ff-row> <ff-row ng-collapse="invoice.collapsed"> <ff-label flex="0 0 30px" class="invisible"></ff-label> <dw-invoice-small invoice="invoice"></dw-invoice-small> <ff-btn-group flex="0 0 auto" class="invisible"> <ff-btn sense="collapse" size="xs"> <span translate="GLOBAL.BTN_VIEW"></span> </ff-btn> </ff-btn-group> </ff-row> </ff-col> </ff-panel> <ff-btn-group> <ff-btn sense="save" ff-click="vm.chargeCards()"><span translate="BULK_CHARGES.BTN_CHARGE"></span></ff-btn> </ff-btn-group> </div> </div> '},xAOr:function(e,t,n){"use strict";var s=n("mjbs"),f=n.n(s);t.a=angular.module("deskworks.dwInvoice.small",["deskworks.state","flexForms","deskworks.helper"]).directive("dwInvoiceSmall",(function(){return{template:f.a,restrict:"E",scope:!0,controller:"dwInvoiceSmallCtrl as dwInvoice",bindToController:{invoice:"=*"},compile:function(e,t){return e.addClass("dw-invoice"),function(){}}}})).controller("dwInvoiceSmallCtrl",(function(){}))},yFfw:function(e,t,n){"use strict";n.r(t);n("Muwe"),n("y89P"),n("JBxO"),n("FdtR");var s=n("KK/u"),f=n.n(s),a=n("6RpP"),c=n.n(a),i=n("Qbtd");t.default=angular.module("deskworks.InvoiceLogCtrl",["debounce",i.default.name]).controller("InvoiceLogCtrl",["$scope","$translate","dwAlerts","state","InvoiceLog","debounce",function(e,t,n,s,a,i){var r=this;s.setPageTitle(t.instant("INVOICE_LOG.PAGE_TITLE")),r.purchases=[],r.params={centerId:s.getCurrentCenterId(),offset:0,limit:50,sort:s.getParam("sort")||"orderId",order:s.getParam("order")||-1,q:s.getParam("q")||null},e.$watchCollection((function(){return[f()(r.params),r.params.order,r.params.q]}),(function(){s.replace(),s.setParam("sort",f()(r.params)),s.setParam("order",r.params.order),s.setParam("q",r.params.q)})),r.fetch=function(e){return e&&(r.fetching=null,r.eof=null,r.params.offset=0,r.params.limit=50),r.eof||r.fetching||(r.fetching=a.query(r.params).catch((function(e){return n.error(e,"Failed to query invoice log.")})).finally((function(){r.fetching=null})).then((function(t){var n;e&&(r.purchases=[]),r.purchases=c()(n=r.purchases).call(n,t),r.params.offset=r.purchases.length,r.eof=t.length<r.params.limit})),r.fetching.$$init=e),r.fetching},r.fetchDebounced=i(r.fetch,1e3),r.edit=function(e){return s.resetParams(),s.setCurrentUserId(e.userId),s.setPath("/purchases/"+e.id+"/edit")},r.view=function(e){return s.resetParams(),s.setCurrentUserId(e.userId),s.setPath("/purchases/"+e.id+"/view")}}])},z8s6:function(e,t){e.exports='<ff-panel> <ff-panel-header><span translate="ACCOUNTING_PERIODS.AUDIT.HEADER"></span></ff-panel-header> <ff-row ng-if="!$ctrl.audit"><ff-spin class="ff-spin-placeholder"></ff-spin></ff-row> <ff-header ng-if="$ctrl.audit && $ctrl.audit.length"> <ff-row> <cell flex="0 1 150px" class="ff-right"><span translate="ACCOUNTING_PERIODS.AUDIT.DATE"></span></cell> <cell flex="0 1 180px"><span translate="ACCOUNTING_PERIODS.AUDIT.BY"></span></cell> <cell flex="1 1 100px"><span translate="ACCOUNTING_PERIODS.AUDIT.DESCRIPTION"></span></cell> </ff-row> </ff-header> <span ng-if="$ctrl.audit && !$ctrl.audit.length" translate="GLOBAL.NONE"></span> <ff-row ng-repeat="rec in $ctrl.audit"> <ff-static flex="0 1 150px" class="ff-right">{{::rec.createdAt | date: \'mediumDate\'}}</ff-static> <ff-static flex="0 1 180px">{{::rec.createdBy}}</ff-static> <ff-static flex="1 1 100px"> <span translate="ACCOUNTING_PERIODS.AUDIT.{{rec.closed ? \'CLOSED\' : \'REOPENED\'}}" translate-values="{ period: (rec.date | date: \'MMMM yyyy\') }"></span> </ff-static> </ff-row> </ff-panel> '}}]);