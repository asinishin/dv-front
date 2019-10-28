(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"+S3m":function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.QuickBooksCenter",["ngResource","deskworks.config"]).factory("QuickBooksCenter",["$resource","deskworksConfig",function(e,t){var r=e(t.getApiAbsUrl("/quickbooks/centers/:centerId"),{},{update:{method:"PUT"}});return{query:function(){return r.query().$promise},save:function(e){return r.update({centerId:e.id},e).$promise}}}])},"0ZXI":function(e,t,r){"use strict";r.r(t);r("8cZI");t.default=angular.module("deskworks.QuickBooksApp",["ngResource","deskworks.config"]).factory("QuickBooksApp",["$resource","$location","deskworksConfig",function(e,t,r){var o=e(r.getApiAbsUrl("/quickbooks/apps/:appId"),{},{update:{method:"PUT"}});return{query:function(){return o.query().$promise},save:function(e){return e.id?o.update({appId:e.id},e).$promise:o.save({},e).$promise.then((function(t){return e.id=t.id,e.nonce=t.nonce,t}))},delete:function(e){return o.delete({appId:e}).$promise},getConnectUrl:function(e,o){return r.getApiAbsUrl(["/quickbooks/oauth2?appId="+e,"redirectUri="+encodeURIComponent(t.absUrl()),"nonce="+o].join("&"))}}}])},"4+oX":function(e,t,r){var o={"./account/quick-books-account.tpl.html":"s3p9","./errors/quick-books-errors.tpl.html":"u/ju","./settings/quick-books-apps.tpl.html":"x6cz","./settings/quick-books-centers.tpl.html":"hffB"};function n(e){var t=s(e);return r(t)}function s(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=s,e.exports=n,n.id="4+oX"},"5EV6":function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.QboLiabilityAccount",["ngResource","deskworks.config"]).factory("QboLiabilityAccount",["$resource","deskworksConfig",function(e,t){var r=e(t.getApiAbsUrl("/quickbooks/apps/:appId/qbo-liability-accounts"),{},{query:{method:"GET",isArray:!0}});return{query:function(e){return r.query({appId:e}).$promise}}}])},"7Xsf":function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.QboIncomeAccount",["ngResource","deskworks.config"]).factory("QboIncomeAccount",["$resource","deskworksConfig",function(e,t){var r=e(t.getApiAbsUrl("/quickbooks/apps/:appId/qbo-income-accounts"),{},{query:{method:"GET",isArray:!0}});return{query:function(e){return r.query({appId:e}).$promise}}}])},Kocx:function(e,t,r){},"LaM+":function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.QuickBooksErrors",["ngResource","deskworks.config","datesDeserializer"]).factory("QuickBooksErrors",["$resource","deskworksConfig","datesDeserializer",function(e,t,r){var o=r(["errors.time"]),n=e(t.getApiAbsUrl("/quickbooks/centers/:centerId/errors"),{},{query:{method:"GET",isArray:!1,transformResponse:[angular.fromJson,o]}});return{query:function(e,t,r){return n.query({centerId:e,page:t,pageSize:r}).$promise}}}])},Mu5o:function(e,t,r){"use strict";r.r(t);var o=r("nbuU"),n=r.n(o);t.default=angular.module("deskworks.quickBooksAccountDirective",["deskworks.QboIncomeAccount","deskworks.QuickBooksProduct","deskworks.QuickBooksCenter"]).directive("quickBooksAccount",["$compile","$templateCache",function(e,t){return{templateUrl:"account/quick-books-account.tpl.html",restrict:"E",scope:!0,controller:"QuickBooksAccountCtrl as $ctrl",bindToController:{save:"=",productId:"<"}}}]).controller("QuickBooksAccountCtrl",["$q","dwAlerts","helper","state","QboIncomeAccount","QuickBooksProduct","QuickBooksCenter",function(e,t,r,o,s,a,c){var l=this;function f(){return a.save(o.getCurrentCenterId(),l.productId,l.product).catch((function(e){return t.error(e,"Failed to save QuickBooks product.")}))}l.$onInit=function(){l.load()},l.load=function(){var i={centers:c.query().catch((function(e){return t.error(e,"Failed to query QuickBooks centers.")})),product:a.get(o.getCurrentCenterId(),l.productId).catch((function(e){return t.error(e,"Failed to load QuickBooks product.")}))};return e.all(i).then((function(e){l.product=e.product;var a=n()(r).call(r,e.centers,o.getCurrentCenterId());if(a&&a.appId&&a.enabled)return s.query(a.appId).catch((function(e){return t.error(e,"Failed to query QuickBooks income accounts.")})).then((function(e){l.accounts=e,l.accounts&&l.accounts.length&&(l.save=f)}))}))}}])},PzkH:function(e,t,r){"use strict";r.r(t);r("JBxO"),r("FdtR");var o=r("nbuU"),n=r.n(o),s=r("WSeP"),a=r.n(s);t.default=angular.module("deskworks.quickBooksCenters",["debounce","deskworks.center.service","deskworks.QuickBooksCenter"]).directive("quickBooksCenters",(function(){return{templateUrl:"settings/quick-books-centers.tpl.html",restrict:"E",scope:!0,controller:"QuickBooksCentersCtrl as $ctrl",bindToController:{qbApps:"<"}}})).controller("QuickBooksCentersCtrl",["$scope","$q","$filter","$window","dwAlerts","debounce","helper","centerService","QuickBooksCenter",function(e,t,r,o,s,c,l,f,i){var u=this;u.$onInit=function(){u.load()},u.$onChanges=function(){var e;u.qbApps&&u.qbCenters&&a()(e=u.qbCenters).call(e,(function(e){e.$$app=n()(l).call(l,u.qbApps,e.appId)}))},u.load=function(){u.spin=!0;var e={qbCenters:i.query().catch((function(e){return s.error(e,"Failed to query QuickBooks centers.")})),centers:f.getCenters().catch((function(e){return s.error(e,"Failed to query centers.")}))};return t.all(e).finally((function(){u.spin=!1})).then((function(e){var t;u.qbCenters=e.qbCenters,a()(t=u.qbCenters).call(t,(function(t){t.name=(n()(l).call(l,e.centers,t.id)||{}).name,t.$$app=n()(l).call(l,u.qbApps,t.appId)}))}))},u.save=function(e){return e.$$app=n()(l).call(l,u.qbApps,e.appId),u.saveQbCenter(e)},u.saveQbCenter=c((function(e){return e.$$spin=!0,i.save(e).finally((function(){e.$$spin=!1})).catch((function(e){return s.error(e,"Failed to save QuickBooks center.")}))}),500)}])},Q3EL:function(e,t,r){"use strict";r.r(t);r("y89P");var o=r("WSeP"),n=r.n(o),s=r("lRNC"),a=r.n(s),c=r("yCd9"),l=r.n(c),f=["$injector",function(e){var t,o,s=(t=r("ROIO"),l()(o=a()(t).call(t)).call(o,t));e.loadNewModules(l()(s).call(s,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t,o=r("4+oX");n()(t=a()(o).call(o)).call(t,(function(t){return e.put(t.replace(/^\.\//,""),o(t))}))}])}];t.default=f},ROIO:function(e,t,r){var o={"./account/quick-books-account.directive.js":"Mu5o","./errors/quick-books-errors.controller.js":"U8iK","./services/opts-quick-books-type.service.js":"fuZu","./services/qbo-ar-account.service.js":"k/zp","./services/qbo-class.service.js":"t8A8","./services/qbo-customer.service.js":"tswO","./services/qbo-deposit-account.service.js":"Uiqe","./services/qbo-income-account.service.js":"7Xsf","./services/qbo-liability-account.service.js":"5EV6","./services/qbo-payment-account.service.js":"qQpV","./services/qbo-product.service.js":"l7xu","./services/quick-books-app.service.js":"0ZXI","./services/quick-books-center.service.js":"+S3m","./services/quick-books-errors.service.js":"LaM+","./services/quick-books-product.service.js":"aydg","./settings/quick-books-apps.directive.js":"hcmS","./settings/quick-books-centers.directive.js":"PzkH"};function n(e){var t=s(e);return r(t)}function s(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=s,e.exports=n,n.id="ROIO"},U8iK:function(e,t,r){"use strict";r.r(t);r("JBxO"),r("FdtR");var o=r("nbuU"),n=r.n(o),s=r("WSeP"),a=r.n(s),c=r("+l1P");t.default=angular.module("deskworks.QuickBooksErrorsCtrl",["deskworks.helper","deskworks.dwAlerts","deskworks.QuickBooksErrors","deskworks.optsQuickBooksType",c.a.name]).controller("QuickBooksErrorsCtrl",["$scope","$translate","dwAlerts","state","helper","QuickBooksErrors","optsQuickBooksType",function(e,t,r,o,s,c,l){var f=this;o.setPageTitle(t.instant("QUICK_BOOKS_ERRORS.PAGE_TITLE")),f.fetch=function(e){return f.fetching=!0,c.query(o.getCurrentCenterId(),e||f.data&&f.data.page||1,20).catch((function(e){return r.error(e,"Failed to query QuickBooks errors.")})).then((function(e){var t;f.data=e,a()(t=f.data.errors).call(t,(function(e){e.$$qbTypeName=(n()(l).call(l,(function(t){return t.id===e.qbType}))||{}).name||"-"}))})).finally((function(){f.fetching=!1}))},f.fetch()}])},Uiqe:function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.QboDepositAccount",["ngResource","deskworks.config"]).factory("QboDepositAccount",["$resource","deskworksConfig",function(e,t){var r=e(t.getApiAbsUrl("/quickbooks/apps/:appId/qbo-deposit-accounts"),{},{query:{method:"GET",isArray:!0}});return{query:function(e){return r.query({appId:e}).$promise}}}])},WCig:function(e,t,r){var o=r("+iL7"),n=r("GHf2")("species");e.exports=function(e){return!o((function(){var t=[];return(t.constructor={})[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},aydg:function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.QuickBooksProduct",["ngResource","deskworks.config"]).factory("QuickBooksProduct",["$resource","deskworksConfig",function(e,t){var r=e(t.getApiAbsUrl("/quickbooks/centers/:centerId/products/:productId"),{},{get:{method:"GET"},update:{method:"PUT"}});return{get:function(e,t){return r.get({centerId:e,productId:t}).$promise},save:function(e,t,o){return r.update({centerId:e,productId:t},o).$promise}}}])},fuZu:function(e,t,r){"use strict";r.r(t);var o=r("WSeP"),n=r.n(o);t.default=angular.module("deskworks.optsQuickBooksType",[]).factory("optsQuickBooksType",["$rootScope","$translate",function(e,t){var r=[{id:"item",_name:"QUICK_BOOKS_ERRORS.OBJ_TYPE.ITEM"},{id:"customer",_name:"QUICK_BOOKS_ERRORS.OBJ_TYPE.CUSTOMER"},{id:"invoice",_name:"QUICK_BOOKS_ERRORS.OBJ_TYPE.INVOICE"},{id:"deposit",_name:"QUICK_BOOKS_ERRORS.OBJ_TYPE.DEPOSIT"}];function o(){n()(r).call(r,(function(e){e.name=t.instant(e._name)}))}return o(),e.$on("$setTranslationsSuccess",o),r}])},hcmS:function(e,t,r){"use strict";r.r(t);r("lYjL"),r("JBxO"),r("FdtR"),r("X5mX");var o=r("xeXu"),n=r.n(o),s=r("hsT8"),a=r.n(s),c=r("0zKI"),l=r.n(c),f=r("nbuU"),i=r.n(f),u=r("WSeP"),p=r.n(u),d=r("yCd9"),b=r.n(d);r("Kocx");t.default=angular.module("deskworks.quickBooksApps",["debounce","deskworks.QuickBooksApp","deskworks.QboDepositAccount","deskworks.QboLiabilityAccount","deskworks.QboArAccount","deskworks.QboPaymentAccount","deskworks.QboProduct","deskworks.QboCustomer","deskworks.QboClass"]).directive("quickBooksApps",(function(){return{templateUrl:"settings/quick-books-apps.tpl.html",restrict:"E",scope:!0,controller:"QuickBooksAppsCtrl as $ctrl",bindToController:{qbApps:"="}}})).controller("QuickBooksAppsCtrl",["$scope","$translate","$q","$filter","$window","dwAlerts","debounce","helper","centerService","QuickBooksApp","QboDepositAccount","QboLiabilityAccount","QboArAccount","QboPaymentAccount","QboProduct","QboCustomer","QboClass",function(e,t,r,o,s,c,f,u,d,k,h,m,$,q,g,A,y){var v=this;v.$onInit=function(){v.load()},v.getConnectUrl=function(e){return k.getConnectUrl(e.id,e.nonce)},v.load=function(){return v.spin=!0,k.query().catch((function(e){return c.error(e,"Failed to query QuickBooks apps.")})).finally((function(){v.spin=!1})).then((function(e){var t;return v.qbApps=e,r.all(b()(t=v.qbApps).call(t,(function(e){e.$$spin=!0;var t={qboDepositAccounts:h.query(e.id).catch((function(e){return c.error(e,"Failed to query QBO deposit accounts.")})),qboLiabilityAccounts:m.query(e.id).catch((function(e){return c.error(e,"Failed to query QBO liability accounts.")})),qboArAccounts:$.query(e.id).catch((function(e){return c.error(e,"Failed to query QBO ar accounts.")})),qboPaymentAccounts:q.query(e.id).catch((function(e){return c.error(e,"Failed to query QBO payment accounts.")})),qboProducts:g.query(e.id).catch((function(e){return c.error(e,"Failed to query QBO products.")})),qboCustomers:A.query(e.id).catch((function(e){return c.error(e,"Failed to query QBO customers.")})),qboClasses:y.query(e.id).catch((function(e){return c.error(e,"Failed to query QBO classes.")}))};return r.all(t).finally((function(){e.$$spin=!1})).then((function(t){var r;e.$$qboDepositAccounts=t.qboDepositAccounts,e.$$qboLiabilityAccounts=t.qboLiabilityAccounts,e.$$qboArAccounts=t.qboArAccounts,e.$$qboPaymentAccounts=t.qboPaymentAccounts,e.$$qboProducts=t.qboProducts,e.$$qboCustomers=t.qboCustomers,e.$$qboClasses=t.qboClasses,p()(r=v.qbApps).call(r,(function(e){e.$$qboSecurityDepositProduct=i()(u).call(u,e.$$qboProducts,e.qboSecurityDepositProductId),e.$$qboPaymentProcessingFeeProduct=i()(u).call(u,e.$$qboProducts,e.qboPaymentProcessingFeeProductId),e.$$qboCustomProduct=i()(u).call(u,e.$$qboProducts,e.qboCustomProductId),e.$$qboDiscountProduct=i()(u).call(u,e.$$qboProducts,e.qboDiscountProductId),e.$$qboNonMember=i()(u).call(u,e.$$qboCustomers,e.qboNonMemberId)}))}))})))}))},v.saveQbApp=f((function(e){return e.qboSecurityDepositProductId=(e.$$qboSecurityDepositProduct||{}).id,e.qboPaymentProcessingFeeProductId=(e.$$qboPaymentProcessingFeeProduct||{}).id,e.qboCustomProductId=(e.$$qboCustomProduct||{}).id,e.qboDiscountProductId=(e.$$qboDiscountProduct||{}).id,e.qboNonMemberId=(e.$$qboNonMember||{}).id,e.$$spin=!0,k.save(e).finally((function(){e.$$spin=!1})).catch((function(e){return c.error(e,"Failed to save QuickBooks app.")}))}),500),v.deleteQbApp=function(e){var r;return v.qbApps[e].id?s.confirm(t.instant("INTEGRATIONS_SETUP.QBO.APP_DELETE_CONFIRMATION"))?k.delete(v.qbApps[e].id).catch((function(e){return c.error(e,"Failed to delete QuickBooks app.")})).then((function(){var t;l()(t=v.qbApps).call(t,e,1)})):void 0:l()(r=v.qbApps).call(r,e,1)},v.newQbApp=function(){v.qbApps.push({})},v.search=function(e,t){return r.when(a()(e).call(e,(function(e){var r;return e.name&&n()(r=e.name.toLowerCase()).call(r,t.toLowerCase())>=0})))},v.filter=function(e,t){return e=e||[],p()(e).call(e,(function(e){e.$$highlighted={name:o("highlight")(e.name,t)}})),e}}])},hffB:function(e,t){e.exports='<ff-panel> <ff-panel-header><span translate=INTEGRATIONS_SETUP.QBO.CENTERS></span></ff-panel-header> <ff-row ff-dim=true ng-if="$ctrl.spin && !$ctrl.qbCenters" class=animate-collapse>&nbsp;</ff-row> <div ng-if="!$ctrl.spin && !$ctrl.qbCenters.length" class=animate-collapse><span translate=GLOBAL.NONE></span></div> <form name=form novalidate ng-repeat="center in $ctrl.qbCenters" class=animate-collapse> <ff-header ff-dim=center.$$spin style=padding-top:.6rem><cell>{{center.name}}</cell></ff-header> <label class=ff-row> <ff-label flex="1 1 270px"><span translate=INTEGRATIONS_SETUP.QBO.ENABLED></span></ff-label> <ff-static flex="1 1 305px"> <ff-checkbox name=enabled ff-model=center.enabled ff-change=$ctrl.saveQbCenter(center)></ff-checkbox> </ff-static> </label> <ff-col ng-if=center.enabled class=animate-collapse> <label class=ff-row> <ff-label flex="1 1 270px"><span translate=INTEGRATIONS_SETUP.QBO.APP></span></ff-label> <ff-select flex="1 1 305px" name=appId ff-model=center.appId ff-options="opt.id as opt.name for opt in $ctrl.qbApps | filter:{ id: \'\' }" ff-change=$ctrl.save(center)> <option value="">-</option> </ff-select> </label> <ff-col ng-if=center.$$app.trackClasses class=animate-collapse> <label class=ff-row ff-dim=!center.$$app.$$qboClasses> <ff-label flex="1 1 270px"><span translate=INTEGRATIONS_SETUP.QBO.CLASS></span></ff-label> <ff-select flex="1 1 305px" name=qboClassId ff-model=center.qboClassId ff-options="opt.id as opt.name for opt in center.$$app.$$qboClasses" ff-change=$ctrl.save(center)> <option value="">-</option> </ff-select> </label> </ff-col> </ff-col> </form> </ff-panel> '},"k/zp":function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.QboArAccount",["ngResource","deskworks.config"]).factory("QboArAccount",["$resource","deskworksConfig",function(e,t){var r=e(t.getApiAbsUrl("/quickbooks/apps/:appId/qbo-ar-accounts"),{},{query:{method:"GET",isArray:!0}});return{query:function(e){return r.query({appId:e}).$promise}}}])},l7xu:function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.QboProduct",["ngResource","deskworks.config"]).factory("QboProduct",["$resource","deskworksConfig",function(e,t){var r=e(t.getApiAbsUrl("/quickbooks/apps/:appId/qbo-products"),{},{query:{method:"GET",isArray:!0}});return{query:function(e){return r.query({appId:e}).$promise}}}])},lYjL:function(e,t,r){"use strict";var o=r("JRM0"),n=r("5q7I").filter;o({target:"Array",proto:!0,forced:!r("WCig")("filter")},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},qQpV:function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.QboPaymentAccount",["ngResource","deskworks.config"]).factory("QboPaymentAccount",["$resource","deskworksConfig",function(e,t){var r=e(t.getApiAbsUrl("/quickbooks/apps/:appId/qbo-payment-accounts"),{},{query:{method:"GET",isArray:!0}});return{query:function(e){return r.query({appId:e}).$promise}}}])},s3p9:function(e,t){e.exports='<label class="ff-row animate-collapse" ng-if=$ctrl.accounts.length> <ff-label flex="0 0 102px" class=ff-small><span translate=PRODUCTS.QB_ACCOUNT></span></ff-label> <ff-select name=qboAccount ff-model=$ctrl.product.qboAccountId ff-options="opt.id as opt.name for opt in $ctrl.accounts"> <option value="">-</option> </ff-select> </label> '},t8A8:function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.QboClass",["ngResource","deskworks.config"]).factory("QboClass",["$resource","deskworksConfig",function(e,t){var r=e(t.getApiAbsUrl("/quickbooks/apps/:appId/qbo-classes"),{},{query:{method:"GET",isArray:!0}});return{query:function(e){return r.query({appId:e}).$promise}}}])},tswO:function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.QboCustomer",["ngResource","deskworks.config"]).factory("QboCustomer",["$resource","deskworksConfig",function(e,t){var r=e(t.getApiAbsUrl("/quickbooks/apps/:appId/qbo-customers"),{},{query:{method:"GET",isArray:!0}});return{query:function(e){return r.query({appId:e}).$promise}}}])},"u/ju":function(e,t){e.exports='<div id=quickBooksErrors> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel ff-dim="$ctrl.fetching && !$ctrl.data"> <ff-header ng-if=$ctrl.data.errors.length> <ff-row> <cell flex="0 1 200px"><span translate=QUICK_BOOKS_ERRORS.TIME></span></cell> <cell flex="{xs: \'0 0 80px\', md: \'0 0 100px\'}" class=ff-center><span translate=QUICK_BOOKS_ERRORS.QB_TYPE></span></cell> <cell flex="{xs: \'0 0 70px\', md: \'0 0 90px\'}" class="ff-center show-sm"><span translate=QUICK_BOOKS_ERRORS.DW_ID></span></cell> <cell flex="1 1 250px"><span translate=QUICK_BOOKS_ERRORS.DW_NAME></span></cell> <cell flex="1 1 450px"><span translate=QUICK_BOOKS_ERRORS.ERROR_TEXT></span></cell> </ff-row> </ff-header> <span translate=GLOBAL.NONE ng-if="!$ctrl.data.errors.length && !$ctrl.fetching"></span> <ff-row ng-repeat="error in $ctrl.data.errors"> <ff-static flex="0 1 200px"> <span>{{::error.time | date:\'mediumDate\'}} <span nice-time=::error.time></span></span> </ff-static> <ff-static flex="{xs: \'0 0 80px\', md: \'0 0 100px\'}" class=ff-center>{{::error.$$qbTypeName}}</ff-static> <ff-static flex="{xs: \'0 0 70px\', md: \'0 0 90px\'}" class="ff-center show-sm">{{::error.dwId}}</ff-static> <ff-static flex="1 1 250px">{{::error.dwName}}</ff-static> <ff-static flex="1 1 450px">{{::error.errorText}}</ff-static> </ff-row> <ff-pagination props=$ctrl.data ff-click=$ctrl.fetch($page) ng-if="$ctrl.data.pageCount > 1"></ff-pagination> </ff-panel> </div> </div> '},x6cz:function(e,t){e.exports='<ff-panel> <ff-panel-header><span translate=INTEGRATIONS_SETUP.QBO.APPS></span></ff-panel-header> <ff-row ff-dim=true ng-if="$ctrl.spin && !$ctrl.qbApps" class=animate-collapse>&nbsp;</ff-row> <div ng-if="!$ctrl.spin && !$ctrl.qbApps.length" class=animate-collapse><span translate=GLOBAL.NONE></span></div> <form name=form novalidate ng-repeat="app in $ctrl.qbApps" class=animate-collapse> <ff-header style=padding:0 class=ff-no-frame> <label class=ff-row style=margin-bottom:-2px> <cell flex="1 1 270px" ff-dim=app.$$spin style=display:flex;align-items:center><span translate=INTEGRATIONS_SETUP.QBO.APP></span></cell> <ff-text flex="1 1 275px" name=name ff-model=app.name ff-change=$ctrl.saveQbApp(app) ff-required=true ff-validate-alert="{{\'INTEGRATIONS_SETUP.QBO.APP\' | translate}}" placeholder="{{\'INTEGRATIONS_SETUP.QBO.APP_NAME\' | translate}}" style=text-transform:none;font-weight:400></ff-text> <ff-btn sense=remove size=xs flex=none class=buttons-row ff-click=$ctrl.deleteQbApp($index) title="{{\'GLOBAL.BTN_DELETE\' | translate}}"></ff-btn> </label> </ff-header> <label class=ff-row ng-if=app.id> <ff-label flex="1 1 270px"><span translate=INTEGRATIONS_SETUP.QBO.CONNECTION></span></ff-label> <ff-static flex="1 1 305px" ng-if=!app.connected> <a class=qb-connect href={{$ctrl.getConnectUrl(app)}} target=_self rel=noopener> <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 244.16 66"> <g> <path d=M113.71,25.6a6.7,6.7,0,0,0-3-2.3,10.17,10.17,0,0,0-7.8.1,9.73,9.73,0,0,0-3.22,2.28,10.13,10.13,0,0,0-2.07,3.4,12,12,0,0,0-.73,4.23,13.08,13.08,0,0,0,.71,4.4,9.92,9.92,0,0,0,2,3.42,9,9,0,0,0,3.13,2.22,10.25,10.25,0,0,0,4.11.79,9.08,9.08,0,0,0,4.19-.93A8.19,8.19,0,0,0,114,40.74l4.19,2.95a13.43,13.43,0,0,1-4.77,3.8,15.16,15.16,0,0,1-6.6,1.35,17,17,0,0,1-6.33-1.14,14.3,14.3,0,0,1-8.19-8.09,16.46,16.46,0,0,1-1.16-6.29,15.94,15.94,0,0,1,1.22-6.37,14.18,14.18,0,0,1,3.36-4.83,14.94,14.94,0,0,1,5-3.07A18,18,0,0,1,107,18a17,17,0,0,1,2.95.27,15,15,0,0,1,2.95.83,14.3,14.3,0,0,1,2.66,1.39,8.55,8.55,0,0,1,2.12,2Z transform="translate(-0.5 -0.5)"/> <path d=M118.44,38a10.54,10.54,0,0,1,.85-4.29A9.89,9.89,0,0,1,125,28.33a12.36,12.36,0,0,1,8.46,0,9.9,9.9,0,0,1,5.75,5.42A10.53,10.53,0,0,1,140.1,38a10.67,10.67,0,0,1-.85,4.32,10.23,10.23,0,0,1-2.3,3.34,10.48,10.48,0,0,1-3.44,2.18,11.74,11.74,0,0,1-8.46,0,10.5,10.5,0,0,1-3.44-2.18,10.23,10.23,0,0,1-2.3-3.34A10.69,10.69,0,0,1,118.44,38Zm5.06,0a8,8,0,0,0,.35,2.32,6.37,6.37,0,0,0,1.06,2.08,5.53,5.53,0,0,0,1.78,1.49,6,6,0,0,0,5.15,0,5.54,5.54,0,0,0,1.78-1.49,6.39,6.39,0,0,0,1.06-2.08A8,8,0,0,0,135,38a7.78,7.78,0,0,0-.35-2.3,6.43,6.43,0,0,0-1.06-2.05,5.32,5.32,0,0,0-1.78-1.47,6.18,6.18,0,0,0-5.15,0,5.31,5.31,0,0,0-1.78,1.47,6.41,6.41,0,0,0-1.06,2.05A7.75,7.75,0,0,0,123.51,38Z transform="translate(-0.5 -0.5)"/> <path d=M143.88,28.17h4.73v3.2h0.08a6.44,6.44,0,0,1,2.3-2.63,6.62,6.62,0,0,1,3.88-1.14,7.5,7.5,0,0,1,3.34.68,6.6,6.6,0,0,1,2.28,1.81,7.29,7.29,0,0,1,1.31,2.57,10.83,10.83,0,0,1,.42,3V48.08h-5V37a14.14,14.14,0,0,0-.12-1.83,4.93,4.93,0,0,0-.54-1.72,3.58,3.58,0,0,0-1.14-1.27,3.35,3.35,0,0,0-1.93-.5,4.25,4.25,0,0,0-2.07.48A4.4,4.4,0,0,0,150,33.44a5.41,5.41,0,0,0-.85,1.72,6.85,6.85,0,0,0-.29,2v11h-5V28.17Z transform="translate(-0.5 -0.5)"/> <path d=M167,28.17h4.73v3.2h0.08a6.44,6.44,0,0,1,2.3-2.63A6.62,6.62,0,0,1,178,27.59a7.5,7.5,0,0,1,3.34.68,6.6,6.6,0,0,1,2.28,1.81,7.29,7.29,0,0,1,1.31,2.57,10.83,10.83,0,0,1,.42,3V48.08h-5V37a14.14,14.14,0,0,0-.12-1.83,4.93,4.93,0,0,0-.54-1.72,3.58,3.58,0,0,0-1.14-1.27,3.35,3.35,0,0,0-1.93-.5,4.25,4.25,0,0,0-2.07.48,4.4,4.4,0,0,0-1.43,1.22,5.41,5.41,0,0,0-.85,1.72,6.85,6.85,0,0,0-.29,2v11h-5V28.17Z transform="translate(-0.5 -0.5)"/> <path d=M209.1,38.38V39a5.39,5.39,0,0,1,0,.66H193.91a4.92,4.92,0,0,0,.56,2,5,5,0,0,0,1.27,1.54,6.29,6.29,0,0,0,1.78,1,5.88,5.88,0,0,0,2.07.37,6.65,6.65,0,0,0,3.15-.68A5.9,5.9,0,0,0,204.86,42l3.32,2.66a10,10,0,0,1-8.55,4,12.17,12.17,0,0,1-4.27-.73A10.06,10.06,0,0,1,192,45.89a9.25,9.25,0,0,1-2.24-3.26,11.23,11.23,0,0,1-.81-4.38,11.43,11.43,0,0,1,.81-4.38,9.75,9.75,0,0,1,5.56-5.52,11.19,11.19,0,0,1,4.17-.77,10.52,10.52,0,0,1,3.84.68,8.34,8.34,0,0,1,3,2,9.45,9.45,0,0,1,2,3.36A13.86,13.86,0,0,1,209.1,38.38Zm-5-2.24a6.14,6.14,0,0,0-.27-1.83,4.07,4.07,0,0,0-2.32-2.59,5.15,5.15,0,0,0-2.1-.39,5.6,5.6,0,0,0-3.8,1.35,4.92,4.92,0,0,0-1.72,3.46h10.21Z transform="translate(-0.5 -0.5)"/> <path d=M226.48,33.69a4.4,4.4,0,0,0-1.74-1.39,5.38,5.38,0,0,0-2.37-.56,5,5,0,0,0-2.41.56,5.22,5.22,0,0,0-1.72,1.47,6.34,6.34,0,0,0-1,2.05,8.19,8.19,0,0,0-.33,2.3,7.75,7.75,0,0,0,.35,2.3,6.43,6.43,0,0,0,1.06,2.05A5.37,5.37,0,0,0,220.07,44a5.2,5.2,0,0,0,2.47.56,6.31,6.31,0,0,0,2.32-.46,4.43,4.43,0,0,0,1.87-1.33l3.11,3.15a8.24,8.24,0,0,1-3.17,2.05,11.76,11.76,0,0,1-4.17.73,12.27,12.27,0,0,1-4.17-.71,9.73,9.73,0,0,1-5.77-5.39,11,11,0,0,1-.85-4.44,10.8,10.8,0,0,1,.85-4.36,10,10,0,0,1,2.3-3.32,10.29,10.29,0,0,1,3.38-2.12,11.54,11.54,0,0,1,8.38.08,8,8,0,0,1,3.26,2.28Z transform="translate(-0.5 -0.5)"/> <path d=M231.29,32.15v-4h3.49V22.4h4.9v5.77h5v4h-5V41.4a4.54,4.54,0,0,0,.48,2.2,2.23,2.23,0,0,0,2.14.87,6.15,6.15,0,0,0,1.08-.1,4.31,4.31,0,0,0,1-.31l0.17,3.9a8.26,8.26,0,0,1-1.58.39,11.14,11.14,0,0,1-1.74.15,8,8,0,0,1-3.24-.56,4.9,4.9,0,0,1-2-1.54,5.67,5.67,0,0,1-1-2.24,13,13,0,0,1-.27-2.72V32.15h-3.49Z transform="translate(-0.5 -0.5)"/> <path d=M66.5,33.5a33,33,0,1,1-33-33A33,33,0,0,1,66.5,33.5ZM32,20.33H23.26a13.14,13.14,0,1,0,0,26.29h1.2V42h-1.2a8.53,8.53,0,1,1,0-17.05h4.13V53H32V20.33ZM56.83,33.48A13.16,13.16,0,0,0,43.69,20.33h-1.2V25h1.2a8.53,8.53,0,1,1,0,17.05H39.56V14H34.94V46.62h8.75A13.16,13.16,0,0,0,56.83,33.48Z transform="translate(-0.5 -0.5)"/> </g> </svg> </a> </ff-static> <ff-static flex="1 1 305px" ng-if=app.connected> <ff-icon sense=check></ff-icon>&nbsp;<span translate=INTEGRATIONS_SETUP.QBO.CONNECTED></span> </ff-static> </label> <ff-col ng-if="app.connected && app.$$qboDepositAccounts" class=animate-collapse> <label class=ff-row> <ff-label flex="0 0 50%"><span translate=INTEGRATIONS_SETUP.QBO.TRACK_CLASSES></span></ff-label> <ff-static> <ff-checkbox name=trackClasses ff-model=app.trackClasses ff-change=$ctrl.saveQbApp(app)></ff-checkbox> </ff-static> </label> <label class=ff-row> <ff-label flex="0 0 50%"><span translate=INTEGRATIONS_SETUP.QBO.SECURITY_DEPOSIT_PRODUCT></span></ff-label> <ff-search ng-model=app.$$qboSecurityDepositProduct ff-change=$ctrl.saveQbApp(app) ff-search="$ctrl.search(app.$$qboProducts, $search)" ff-search-filter="$ctrl.filter($results, $search)" placeholder="start typing to search..."> <ff-search-options><h6><span ng-bind-html=$search.$$highlighted.name></span></h6></ff-search-options> <ff-search-match><h6><span ng-bind=ffSearch.ngModel.$modelValue.name></span></h6></ff-search-match> </ff-search> </label> <label class=ff-row> <ff-label flex="0 0 50%"><span translate=INTEGRATIONS_SETUP.QBO.ACCOUNTS_RECEIVABLE></span></ff-label> <ff-select name=qboSecurityArAccountId ff-model=app.qboSecurityArAccountId ff-options="opt.id as opt.name for opt in app.$$qboArAccounts" ff-change=$ctrl.saveQbApp(app)> <option value="">-</option> </ff-select> </label> <label class=ff-row> <ff-label flex="0 0 50%"><span translate=INTEGRATIONS_SETUP.QBO.PAYMENT_ACCOUNT></span></ff-label> <ff-select name=qboPaymentAccountId ff-model=app.qboPaymentAccountId ff-options="opt.id as opt.name for opt in app.$$qboPaymentAccounts" ff-change=$ctrl.saveQbApp(app)> <option value="">-</option> </ff-select> </label> <label class=ff-row> <ff-label flex="0 0 50%"><span translate=INTEGRATIONS_SETUP.QBO.PAYMENT_PROCESSING_FEE_PRODUCT></span></ff-label> <ff-search ng-model=app.$$qboPaymentProcessingFeeProduct ff-change=$ctrl.saveQbApp(app) ff-search="$ctrl.search(app.$$qboProducts, $search)" ff-search-filter="$ctrl.filter($results, $search)" placeholder="start typing to search..."> <ff-search-options><h6><span ng-bind-html=$search.$$highlighted.name></span></h6></ff-search-options> <ff-search-match><h6><span ng-bind=ffSearch.ngModel.$modelValue.name></span></h6></ff-search-match> </ff-search> </label> <label class=ff-row> <ff-label flex="0 0 50%"><span translate=INTEGRATIONS_SETUP.QBO.CUSTOM_PRODUCT></span></ff-label> <ff-search ng-model=app.$$qboCustomProduct ff-change=$ctrl.saveQbApp(app) ff-search="$ctrl.search(app.$$qboProducts, $search)" ff-search-filter="$ctrl.filter($results, $search)" placeholder="start typing to search..."> <ff-search-options><h6><span ng-bind-html=$search.$$highlighted.name></span></h6></ff-search-options> <ff-search-match><h6><span ng-bind=ffSearch.ngModel.$modelValue.name></span></h6></ff-search-match> </ff-search> </label> <label class=ff-row> <ff-label flex="0 0 50%"><span translate=INTEGRATIONS_SETUP.QBO.DISCOUNT_PRODUCT></span></ff-label> <ff-search ng-model=app.$$qboDiscountProduct ff-change=$ctrl.saveQbApp(app) ff-search="$ctrl.search(app.$$qboProducts, $search)" ff-search-filter="$ctrl.filter($results, $search)" placeholder="start typing to search..."> <ff-search-options><h6><span ng-bind-html=$search.$$highlighted.name></span></h6></ff-search-options> <ff-search-match><h6><span ng-bind=ffSearch.ngModel.$modelValue.name></span></h6></ff-search-match> </ff-search> </label> <label class=ff-row> <ff-label flex="0 0 50%"><span translate=INTEGRATIONS_SETUP.QBO.NON_MEMBER></span></ff-label> <ff-search ng-model=app.$$qboNonMember ff-change=$ctrl.saveQbApp(app) ff-search="$ctrl.search(app.$$qboCustomers, $search)" ff-search-filter="$ctrl.filter($results, $search)" placeholder="start typing to search..."> <ff-search-options><h6><span ng-bind-html=$search.$$highlighted.name></span></h6></ff-search-options> <ff-search-match><h6><span ng-bind=ffSearch.ngModel.$modelValue.name></span></h6></ff-search-match> </ff-search> </label> </ff-col> </form> <ff-btn-group class="ff-section-buttons animate-collapse" ng-if=!$ctrl.spin> <ff-btn sense=add size=sm ff-click=$ctrl.newQbApp()><span translate=GLOBAL.BTN_NEW></span></ff-btn> </ff-btn-group> </ff-panel> '}}]);