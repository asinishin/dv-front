(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"1xfW":function(e,a,r){"use strict";r.r(a);var t=r("lRNC"),n=r.n(t),f=(r("3dw1"),r("y89P"),r("Muwe"),r("03wM")),s=r.n(f),l=r("Ekwr"),o=r.n(l),c=r("lvz6"),i=r.n(c),d=r("yKah"),p=r.n(d),u=r("fzuT"),m=r.n(u),g=r("hsT8"),I=r.n(g),E=r("nbuU"),h=r.n(E),v=r("yCd9"),b=r.n(v),$=r("bfRn"),w=r("WgSX"),O=r("G6E5"),N=r("LTMe"),T=angular.module("deskworks.Invoice",["ngResource","datesDeserializer","deskworks.config"]).factory("Invoice",["$resource","$q","datesDeserializer","deskworksConfig",function(e,a,r,t){var n=r(["items.date","date","dueDate"]),f=e(t.getApiAbsUrl("/centers/:centerId/user-profiles/:userId/generate-invoices"),{centerId:"@centerId",userId:"@userId",orderId:"@orderId"},{get:{method:"GET",transformResponse:[angular.fromJson,n]}});return{get:function(e){return f.get({centerId:e.centerId,userId:e.userId,orderId:e.orderId}).$promise.then((function(e){return e.items.forEach((function(e){e.include=!0})),e}))}}}]),x=(r("FdtR"),r("JBxO"),r("WoWj"),r("U00V"),angular.module("deskworks.invoiceLoadModule",[]).factory("invoiceLoadModule",["$injector",function(e){var a={standard:function(){return r.e(25).then(r.bind(null,"vj9N"))},alternate:function(){return r.e(24).then(r.bind(null,"uAdW"))}};return function(r){return(a[r]||a.standard)().then((function(a){return e.invoke(a.default)}))}}]));function S(e,a){var r=s()(e);if(o.a){var t=o()(e);a&&(t=I()(t).call(t,(function(a){return i()(e,a).enumerable}))),r.push.apply(r,t)}return r}function C(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?S(Object(r),!0).forEach((function(a){m()(e,a,r[a])})):p.a?Object.defineProperties(e,p()(r)):S(Object(r)).forEach((function(a){Object.defineProperty(e,a,i()(r,a))}))}return e}var k=angular.module("deskworks.invoice",["debounce","deskworks.state","deskworks.userProfile.service","deskworks.setup.service",O.a.name,N.a.name,w.a.name,$.a.name,T.name,x.name]).controller("InvoiceCtrl",["$rootScope","$scope","$route","$filter","$timeout","$q","$translate","dwAlerts","debounce","reportHelper","state","helper","orderId","userProfileService","Invoice","setupService","invoiceLoadModule",function(e,a,r,t,n,f,s,l,o,c,i,d,p,u,m,g,E){var v=this,$=(c.paramsChanged,c.loadResources);function w(){var e=u.get(i.getCurrentCenterId(),i.getCurrentUserId()).catch((function(e){return l.error(e,"Failed to get user profile.")})),a=g.getSetupSettings().catch((function(e){return l.error(e,"Failed to get setup settings.")})),r=a.then((function(e){return E(e.invoiceTemplate)}));return{user:e,settings:a,module:r}}v.config={footer:function(){return null}},v.params={centerId:i.getCurrentCenterId(),paperLayout:"p",date:moment(),dueDate:moment(),showDates:!0},v.resources=null,v.data=null,i.setPageTitle(s.instant(s.instant(p?"INVOICE.INVOICE_NAME":"INVOICE.PAGE_TITLE",{orderId:p}))),a.$watch("$ctrl.params",o((function(e,a){v.pdf=null,d.pointFirstInvalid("#invoice")||f.all({resources:v.resources||$(w),data:v.data||m.get({centerId:v.params.centerId,userId:i.getCurrentUserId(),orderId:p}).catch((function(e){return l.error(e,"Failed to get invoice.")}))}).then((function(e){v.resources=e.resources,v.data=e.data,v.config.styles=angular.copy(v.resources.module.styles),v.config.header=v.resources.module.header,v.config.body=v.resources.module.body,v.columns=angular.copy(v.resources.module.columns)})).then((function(){var e,a,r;if(v.data.date&&!v.data.date.isSame(v.params.date)||v.data.dueDate&&!v.data.dueDate.isSame(v.params.dueDate)||!v.params.address&&v.resources.user.addresses[0])return v.params.date=v.data.date||v.params.date,v.params.dueDate=v.data.dueDate||v.params.dueDate,void(v.params.address=v.params.address||v.resources.user.addresses[0]);v.payments=I()(e=v.data.items).call(e,(function(e){return"payment"===e.type||"refund"===e.type})),v.charges=I()(a=v.data.items).call(a,(function(e){return"payment"!==e.type&&"refund"!==e.type}));var t=h()(r=v.resources.centers).call(r,(function(e){return e.id===v.params.centerId}));v.config.orderId=v.data.invoiceNumber,v.config.reportName=s.instant(t.taxId?"INVOICE.TAX_INVOICE_NAME":"INVOICE.INVOICE_NAME",{orderId:v.config.orderId}),v.config.userName=v.resources.user.fullName,v.config.userCompany=v.resources.user.company,t.street2&&(v.config.styles.startY+=12),t.taxId&&(v.config.styles.startY+=12);var n=v.config.body({config:v.config,params:v.params,data:v.data,columns:v.columns,resources:v.resources}),f=c.buildPdf({config:C(C({},v.config),v.params),report:n,resources:v.resources});v.pdf=f.output("blob")}))}),100),!0),a.$watchCollection((function(){var e;return v.data&&v.data.items&&b()(e=v.data.items).call(e,(function(e){return e.include}))}),(function(){var e;v.data&&v.data.items&&(v.params.items=I()(e=v.data.items).call(e,(function(e){return e.include})).reduce((function(e,a){return e[a.id]=!0,e}),{}))})),v.selectAddress=function(e){v.params.address=e},v.downloadPdf=function(){if(v.pdf){var e=c.getReportFileName({extension:"pdf",config:C(C({},v.config),v.params),resources:v.resources});c.download({blob:v.pdf,fileName:e})}};var O=e.$on("CHANGE-CENTER",T),N=e.$on("CHANGE-USER",T);function T(){if(a.$resolve.back)return a.$resolve.back();r.reload()}a.$on("$destroy",(function(e){O(),N()}))}]),A=["$injector",function(e){e.loadNewModules([k.name]),e.invoke(["$templateCache",function(e){var a=r("Xycc");n()(a).call(a).forEach((function(r){return e.put(r.replace(/^\.\//,""),a(r))}))}])}];a.default=A},Kh2r:function(e,a,r){},Krgv:function(e,a){e.exports='<ff-panel> <ff-panel-header><span translate="REPORTS.OPTIONS.HEADER"></span></ff-panel-header> <label class="ff-row" ng-if="$ctrl.banks"> <ff-label flex="0 0 100px"><span translate="REPORTS.OPTIONS.BANK"></span></ff-label> <ff-select ff-model="$ctrl.model.bankId" ff-options="bank.id as bank.name for bank in $ctrl.banks"></ff-select> </label> <label class="ff-row" ng-if="$ctrl.model.centerId !== false && !$ctrl.noCenters && !$ctrl.centers" ng-show="state.getUserCenters().length > 1"> <ff-label flex="0 0 100px"><span translate="REPORTS.OPTIONS.CENTER"></span></ff-label> <dw-select-center ff-model="$ctrl.model.centerId" ff-option-all="{{$ctrl.allCenters !== false}}"></dw-select-center> </label> <label class="ff-row" ng-if="$ctrl.model.centerId !== false && !$ctrl.noCenters && $ctrl.centers" ng-show="state.getUserCenters().length > 1"> <ff-label flex="0 0 100px"><span translate="REPORTS.OPTIONS.CENTER"></span></ff-label> <ff-select ff-model="$ctrl.model.centerId" ff-options="center.id as center.name for center in $ctrl.centers"></ff-select> </label> <label class="ff-row"> <ff-label flex="0 0 100px"><span translate="REPORTS.OPTIONS.SIZE"></span></ff-label> <ff-select ff-model="$ctrl.model.paperSize"> <option ng-repeat="size in $ctrl.optsPaperSize" value="{{size.id}}">{{size.name}}</option> </ff-select> </label> <ff-row> <ff-label flex="0 0 100px"><span translate="REPORTS.OPTIONS.LAYOUT"></span></ff-label> <ff-static> <div class="ff-grid gutter-h-half" role="radiogroup" aria-label="{{\'REPORTS.OPTIONS.LAYOUT\' | translate}}"> <label flex="0 0 auto"> <ff-radio name="paperLayout" ff-model="$ctrl.model.paperLayout" ff-value="\'p\'"> <span translate="REPORTS.OPTIONS.LAYOUT.PORTRAIT"></span> </ff-radio> </label> <label flex="0 0 auto"> <ff-radio name="paperLayout" ff-model="$ctrl.model.paperLayout" ff-value="\'l\'"> <span translate="REPORTS.OPTIONS.LAYOUT.LANDSCAPE"></span> </ff-radio> </label> </div> </ff-static> </ff-row> </ff-panel> '},LTMe:function(e,a,r){"use strict";var t=r("nbuU"),n=r.n(t),f=(r("X5mX"),r("Muwe"),r("y89P"),r("9HME")),s=angular.module("deskworks.reports.optsPaperSize",[]).factory("optsPaperSize",(function(){return[{id:"letter",name:"Letter"},{id:"A4",name:"A4"},{id:"A3",name:"A3"},{id:"A2",name:"A2"},{id:"A1",name:"A1"},{id:"A0",name:"A0"}]})),l=r("Krgv"),o=r.n(l);a.a=angular.module("deskworks.reportOptions",["deskworks.helper",s.name,f.a.name]).directive("reportOptions",["$compile",function(e){return{restrict:"EAC",scope:!0,transclude:"element",priority:2,controller:"ReportOptionsCtrl as $ctrl",bindToController:{model:"<",centers:"<",allCenters:"<",banks:"<",noCenters:"<"},link:function(a,r,t,n,f){f((function(t,n){var f=e(o.a)(a);angular.element(f[0].querySelector?f[0].querySelector(".ff-panel-body"):f).append(t),r.after(f)}))}}}]).controller("ReportOptionsCtrl",["$scope","$location","state","helper","optsPaperSize",function(e,a,r,t,f){var s=this;s.optsPaperSize=f,s.$onInit=function(){!1===s.model.centerId||s.noCenters||(e.$watch((function(){return a.search().centerId}),(function(e){s.model.centerId=e||0===e?+e:r.getCurrentCenterId()})),e.$watch("$ctrl.model.centerId",(function(r){r&&e.vm&&e.vm.config&&e.vm.config.reportOwnerRegion&&(e.vm.config.reportOwnerRegion.ownerId=e.vm.config.reportOwnerRegion.regionId=void 0),a.search("centerId",r).replace()}))),s.banks&&(e.$watch((function(){return a.search().bankId}),(function(e){s.model.bankId=e||0===e?+e:s.banks&&s.banks[0]&&s.banks[0].id})),e.$watch("$ctrl.model.bankId",(function(e){a.search("bankId",e).replace()}))),e.$watch((function(){return a.search().paperSize}),(function(e){var a;s.model.paperSize=(n()(a=s.optsPaperSize).call(a,(function(a){return a.id===e}))||s.optsPaperSize[0]).id})),e.$watch("$ctrl.model.paperSize",(function(e){a.search("paperSize",e).replace()})),e.$watch((function(){return a.search().paperLayout}),(function(e){s.model.paperLayout=e||s.model.paperLayout||"l"})),e.$watch("$ctrl.model.paperLayout",(function(e){a.search("paperLayout",e).replace()}))}}])},WgSX:function(e,a,r){"use strict";r("Kh2r");a.a=angular.module("pdfPreview",["deskworks.helper"]).directive("pdfPreview",["$window","helper",function(e,a){return{restrict:"A",scope:!0,template:'<iframe ng-hide="ie" title="{{\'REPORTS.PREVIEW.HEADER\' | translate}}"></iframe><ff-info class="text-danger" ng-if="ie"><ff-icon sense="warning"></ff-icon> Microsoft Edge & Internet Explorer don\'t support live PDF preview. You can download the PDF or use another browser to have live preview, e.g. Chrome/Firefox/Opera/Safari.</ff-info>',compile:function(r,t){var n=r.parent().parent();return a.isMobile()&&n.hasClass("flex-form")?(r.parent().parent().css("display","none"),function(){}):a.isIE()?function(e,a,r){e.ie=!0}:(r.addClass("pdf-preview"),function(a,r,t){var n,f=r.children(),s=angular.element('<div class="ff-dimmer ff-spin"></div>');s.on("click",(function(e){e.stopPropagation()})),f.on("load",(function(){angular.element(s).remove(),r.removeClass("ff-dim")})),a.$watch(t.pdfPreview,(function(a){r.append(s),r.addClass("ff-dim"),n&&(e.URL.revokeObjectURL(n),n=null),a&&(n=e.URL.createObjectURL(a),f[0].src=n)})),a.$on("$destroy",(function(){n&&(e.URL.revokeObjectURL(n),n=null)}))})}}}])},Xycc:function(e,a,r){var t={"./invoice.tpl.html":"kFxu"};function n(e){var a=f(e);return r(a)}function f(e){if(!r.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=f,e.exports=n,n.id="Xycc"},kFxu:function(e,a){e.exports='<form name="formGenerateInvoice" class="gutter-v" id="invoice"> <h1 class="page-title">{{state.getPageTitle()}}</h1> <div> <div class="ff-grid gutter-v gutter-h" ng-hide="$resolve.orderId"> <ff-panel flex="{lg: \'0 0 50%\', md: \'0 0 100%\'}" ng-if="!$ctrl.resources.user"> <div><ff-spin class="ff-spin-placeholder"></ff-spin></div> </ff-panel> <ff-panel flex="{lg: \'0 0 50%\', md: \'0 0 100%\'}" ng-repeat="address in $ctrl.resources.user.addresses"> <ff-panel-header> <ff-row class="gutter-h-half"> <span translate="INVOICE.ADDRESS.HEADER"></span> <div flex="0 0 auto" style="align-items:center;margin:-.5rem 0"> <ff-btn sense="favorite" size="sm" ng-if="address === $ctrl.params.address" title="{{\'INVOICE.ADDRESS.BTN_SELECTED.HINT\' | translate}}"> <span translate="INVOICE.ADDRESS.BTN_SELECTED"></span> </ff-btn> <ff-btn sense="makeFavorite" size="sm" ng-if="address !== $ctrl.params.address" ff-click="$ctrl.selectAddress(address)" title="{{\'INVOICE.ADDRESS.BTN_SELECT.HINT\' | translate}}"> <span translate="INVOICE.ADDRESS.BTN_SELECT"></span> </ff-btn> </div> </ff-row> </ff-panel-header> <fieldset dw-address="address" ng-disabled="address !== $ctrl.params.address"></fieldset> </ff-panel> </div> </div> <div class="ff-grid gutter-h" ng-hide="$resolve.orderId"> <ff-panel flex="{lg: \'0 0 50%\', md: \'0 0 100%\'}"> <ff-panel-header><span translate="INVOICE.DATES.HEADER"></span></ff-panel-header> <label class="ff-row"> <ff-label flex="0 0 116px"><req translate="INVOICE.DATES.END_DATE"></req></ff-label> <ff-date ff-model="$ctrl.params.date" ff-required="true" ff-validate-alert="{{\'INVOICE.DATES.END_DATE\' | translate}}"></ff-date> </label> <label class="ff-row"> <ff-label flex="0 0 116px"><req translate="INVOICE.DATES.DUE_DATE"></req></ff-label> <ff-date ff-model="$ctrl.params.dueDate" ff-required="true" ff-validate-alert="{{\'INVOICE.DATES.DUE_DATE\' | translate}}"></ff-date> </label> <label> <ff-checkbox ff-model="$ctrl.params.showDates" ff-click="$ctrl.columns[0].include = $ctrl.params.showDates" ff-label="{{\'INVOICE.DATES.ADD_DATE_TO_ALL_ITEMS\' | translate}}"></ff-checkbox> </label> </ff-panel> </div> <div> <div class="ff-grid gutter-v gutter-h" ng-hide="$resolve.orderId"> <ff-panel flex="{lg: \'0 0 50%\', md: \'0 0 100%\'}"> <ff-panel-header><span translate="INVOICE.ITEMS.HEADER"></span></ff-panel-header> <ff-row> <label flex="0 0 auto"> <ff-include-all flex="0 0 32px" items="$ctrl.charges" default="true"></ff-include-all> </label> </ff-row> <ff-header> <ff-row> <cell flex="0 0 32px" class="ff-center"><ff-icon sense="check"></ff-icon></cell> <cell flex="1 1 100px" ng-if="$ctrl.params.showDates"><span translate="INVOICE.ITEMS.DATE"></span></cell> <cell flex="2 1 100px"><span translate="INVOICE.ITEMS.NAME"></span></cell> <cell flex="0 0 80px" class="ff-right"><span translate="INVOICE.ITEMS.AMOUNT"></span></cell> </ff-row> </ff-header> <div ng-if="!$ctrl.charges"><ff-spin class="ff-spin-placeholder"></ff-spin></div> <ff-static ng-if="$ctrl.charges && !$ctrl.charges.length" class="ff-no-frame"> <span translate="GLOBAL.NONE"></span> </ff-static> <label ng-repeat="charge in $ctrl.charges" class="ff-row"> <ff-static flex="0 0 32px" class="ff-center"> <ff-checkbox ff-model="charge.include"></ff-checkbox> </ff-static> <ff-static flex="1 1 100px" ng-if="$ctrl.params.showDates">{{charge.date | date:\'mediumDate\'}}</ff-static> <ff-static flex="2 1 100px" ff-bind="charge.name"></ff-static> <ff-static flex="0 0 80px" ff-bind="charge.amount | ncurrency" class="ff-right"></ff-static> </label> </ff-panel> <ff-panel flex="{lg: \'0 0 50%\', md: \'0 0 100%\'}"> <ff-panel-header><span translate="INVOICE.PAYMENTS.HEADER"></span></ff-panel-header> <ff-row> <label flex="0 0 auto"> <ff-include-all flex="0 0 32px" items="$ctrl.payments" default="true"></ff-include-all> </label> </ff-row> <ff-header> <ff-row> <cell flex="0 0 32px" class="ff-center"><ff-icon sense="check"></ff-icon></cell> <cell><span translate="INVOICE.PAYMENTS.DATE"></span></cell> <cell flex="0 0 80px" class="ff-right"><span translate="INVOICE.PAYMENTS.AMOUNT"></span></cell> </ff-row> </ff-header> <div ng-if="!$ctrl.payments"><ff-spin class="ff-spin-placeholder"></ff-spin></div> <ff-static ng-if="$ctrl.payments && !$ctrl.payments.length" class="ff-no-frame"> <span translate="GLOBAL.NONE"></span> </ff-static> <label ng-repeat="payment in $ctrl.payments" class="ff-row"> <ff-static flex="0 0 32px" class="ff-center"> <ff-checkbox ff-model="payment.include"></ff-checkbox> </ff-static> <ff-static ff-bind="payment.date | date:\'mediumDate\'"></ff-static> <ff-static flex="0 0 80px" ff-bind="payment.amount | ncurrency" class="ff-right"></ff-static> </label> </ff-panel> </div> </div> <div class="ff-grid gutter-v"> <ff-btn-group flex="0 0 auto" class="buttons-bottom" style="margin-top:0"> <ff-btn sense="download" ff-click="$ctrl.downloadPdf()" ff-disabled="!$ctrl.pdf"> <span translate="INVOICE.BTN_PDF"></span> </ff-btn> <ff-btn sense="back" ff-click="$resolve.back()" ng-if="$resolve.back"> <span translate="GLOBAL.BTN_BACK"></span> </ff-btn> </ff-btn-group> <div flex="{lg: \'0 0 33%\', md: \'0 0 100%\'}" style="margin-bottom:0"> <report-options model="$ctrl.params" no-centers="true"></report-options> </div> </div> <ff-panel> <ff-panel-header><span translate="INVOICE.PREVIEW.HEADER"></span></ff-panel-header> <div pdf-preview="$ctrl.pdf"></div> </ff-panel> </form> '}}]);