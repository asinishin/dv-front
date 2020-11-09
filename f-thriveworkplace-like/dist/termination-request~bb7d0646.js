(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{Lk2g:function(e,t,r){"use strict";r.r(t);r("Muwe"),r("y89P");var n=r("WSeP"),a=r.n(n),s=r("lRNC"),f=r.n(s),i=r("yCd9"),l=r.n(i),c=["$injector",function(e){var t,n,s=(t=r("RtJz"),l()(n=f()(t).call(t)).call(n,t));e.loadNewModules(l()(s).call(s,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t,n=r("jYPf");a()(t=f()(n).call(n)).call(t,(function(t){return e.put(t.replace(/^\.\//,""),n(t))}))}])}];t.default=c},RtJz:function(e,t,r){var n={"./termination-request/termination-request.controller.js":"Xi8U","./termination-request/termination-request.service.js":"jrl4"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="RtJz"},Xi8U:function(e,t,r){"use strict";r.r(t);var n=r("nbuU"),a=r.n(n),s=r("WSeP"),f=r.n(s),i=r("hsT8"),l=r.n(i),c=r("+l1P");t.default=angular.module("deskworks.TerminationRequestCtrl",["deskworks.state","deskworks.TerminationRequest",c.a.name]).controller("TerminationRequestCtrl",["$scope","$timeout","$translate","$q","$filter","dwAlerts","state","helper","recurringCharges","TerminationRequest",function(e,t,r,n,s,i,c,o,u,E){var d=this;c.setPageTitle(r.instant("TERMINATION_REQUEST.PAGE_TITLE")),d.noticeDate=moment(),d.getToday=function(){return moment()},d.recurringCharges=l()(u).call(u,(function(e){return"active"===e.status.id&&"asNeeded"!==e.billingFrequency})),d.recurringCharge=d.recurringCharges[0],d.terminateMembership=!0,d.terminateCoMembers=!0,d.terminateRecurringCharges=!0,d.fetchRequests=function(){return E.query(c.getCurrentCenterId(),c.getCurrentUserId()).catch((function(e){return i.error(e,"Failed to query termination requests.")})).then((function(e){var t;d.terminationRequests=e,f()(t=d.terminationRequests).call(t,(function(e){e.chargeProductName=function(e){return(a()(u).call(u,(function(t){return t.id===e.recurringChargeId}))||{}).productName}(e)}))}))},d.fetchRequests(),d.calcTerminationDate=function(){if(d.noticeDate){var e=d.recurringCharge&&d.recurringCharge.noticePeriod||30;d.terminationDate=d.noticeDate.clone().add(e,"d")}},d.calcTerminationDate(d.noticeDate),d.terminate=function(){if(!o.pointFirstInvalid("#terminationRequest")){var e={recurringChargeId:d.recurringCharge.id,noticeDate:s("date")(d.noticeDate,"yyyy-MM-dd"),reason:d.reason,terminateMembership:d.terminateMembership,terminateCoMembers:d.terminateCoMembers,terminateRecurringCharges:d.terminateRecurringCharges};return E.create(c.getCurrentCenterId(),c.getCurrentUserId(),e).catch((function(e){return i.error(e,"Failed to save termination request.")})).then((function(){return d.fetchRequests()}))}}}])},YBRx:function(e,t){e.exports='<form name=$ctrl.form id=terminationRequest novalidate ff-bulk-read-only> <h1 class=page-title>{{state.getPageTitle()}}</h1> <div class="ff-grid gutter-v"> <ff-panel style=max-width:838px> <div class=ff-grid> <ff-label flex="{sm: \'none\'}"><span translate=TERMINATION_REQUEST.NOTICE.DATE></span></ff-label> <ff-date flex="{sm: \'auto\', md: \'0 1 120px\'}" name=noticeDate ff-model=$ctrl.noticeDate ff-date-order="{ early: $ctrl.getToday(), late: $ctrl.noticeDate }" ff-validate-alert="{ field: \'Selected date\', early: \'today or today\' }" ff-change=$ctrl.calcTerminationDate()></ff-date> <ff-label flex="{md: \'1 1 230px\'}"><span translate=TERMINATION_REQUEST.NOTICE.TERMINATE></span></ff-label> <ff-row flex="{md: \'50 1 120px\'}"> <ff-select name=charge ff-model=$ctrl.recurringCharge ff-required=true ff-options="charge.productName for charge in $ctrl.recurringCharges" ff-change=$ctrl.calcTerminationDate() ff-validate-alert="{{\'TERMINATION_REQUEST.REQUESTS_LIST.RECURRING_BILLING\' | translate}}"></ff-select> </ff-row> </div> <label class=ff-row> <ff-label flex="0 0 80px"> <req translate=TERMINATION_REQUEST.NOTICE.REASON></req> </ff-label> <ff-text ff-model=$ctrl.reason ff-required=true ff-validate-alert="{{\'TERMINATION_REQUEST.NOTICE.REASON\' | translate}}"></ff-text> </label> <ff-label> <span> <span translate=TERMINATION_REQUEST.NOTICE.TERMINATE_FROM_DATE></span> <b>{{$ctrl.terminationDate | date:\'mediumDate\'}}.</b> </span> </ff-label> <ff-label> <span translate=TERMINATION_REQUEST.TERMINATE_ADDITION></span> </ff-label> <ff-static class=ff-no-frame> <ff-col> <label> <ff-checkbox name=terminateMembership ff-model=$ctrl.terminateMembership> <span translate=TERMINATION_REQUEST.TERMINATE_ADDITION.MY_MEMBERSHIP></span> </ff-checkbox> </label> <label> <ff-checkbox name=terminateCoMembers ff-model=$ctrl.terminateCoMembers> <span translate=TERMINATION_REQUEST.TERMINATE_ADDITION.MY_CO_MEMBERS></span> </ff-checkbox> </label> <label> <ff-checkbox name=terminateRecurringCharges ff-model=$ctrl.terminateRecurringCharges> <span translate=TERMINATION_REQUEST.TERMINATE_ADDITION.MY_OTHER_RECURRING_CHARGES></span> </ff-checkbox> </label> </ff-col> </ff-static> </ff-panel> <ff-btn-group> <ff-btn type=submit sense=delete ff-click=$ctrl.terminate()> <span translate=TERMINATION_REQUEST.TERMINATE></span> </ff-btn> </ff-btn-group> <ff-panel ng-if=$ctrl.terminationRequests> <ff-panel-header><span translate=TERMINATION_REQUEST.REQUESTS_LIST.HEADER></span></ff-panel-header> <ff-header> <ff-row> <cell flex="1 0 12%"><span translate=TERMINATION_REQUEST.REQUESTS_LIST.CREATED></span></cell> <cell flex="1 0 17%"><span translate=TERMINATION_REQUEST.REQUESTS_LIST.RECURRING_BILLING></span></cell> <cell flex="1 0 15%" class=ff-center><span translate=TERMINATION_REQUEST.REQUESTS_LIST.NOTICE_DATE></span></cell> <cell flex="1 0 28%" class="ff-center show-md"><span translate=TERMINATION_REQUEST.NOTICE.REASON></span></cell> <cell flex="1 0 25%" class="ff-center show-sm"><span translate=TERMINATION_REQUEST.TERMINATE></span></cell> </ff-row> </ff-header> <ff-row ng-repeat="request in $ctrl.terminationRequests"> <ff-static flex="1 0 12%"> <ff-col> <div> <span ng-bind="::request.createdAt | date:\'mediumDate\'"></span> <div nice-time=::request.createdAt></div> </div> <div> <small>by&nbsp;<b>{{request.createdBy}}</b></small> </div> </ff-col> </ff-static> <ff-static flex="1 0 17%" ff-bind=::request.chargeProductName></ff-static> <ff-static flex="1 0 15%" class=ff-center ff-bind="::request.noticeDate | date:\'mediumDate\'"></ff-static> <ff-static flex="1 0 28%" class="ff-center show-md" ff-bind=::request.reason></ff-static> <ff-static flex="1 0 25%" class="ff-center show-sm"> <ff-col> <div> <span translate=TERMINATION_REQUEST.REQUESTS_LIST.MEMBERSHIP></span>:&nbsp; <b><span ng-bind="::request.terminateMembership | yesno"></span></b> </div> <div> <span translate=TERMINATION_REQUEST.REQUESTS_LIST.CO_MEMBERS></span>:&nbsp; <b><span ng-bind="::request.terminateCoMembers | yesno"></span></b> </div> <div> <span translate=TERMINATION_REQUEST.REQUESTS_LIST.ALL_RECURRING></span>:&nbsp; <b><span ng-bind="::request.terminateRecurringCharges | yesno"></span></b> </div> </ff-col> </ff-static> </ff-row> </ff-panel> </div> </form> '},jYPf:function(e,t,r){var n={"./termination-request/termination-request.tpl.html":"YBRx"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="jYPf"},jrl4:function(e,t,r){"use strict";r.r(t),t.default=angular.module("deskworks.TerminationRequest",["ngResource","deskworks.config","datesDeserializer"]).factory("TerminationRequest",["$resource","deskworksConfig","datesDeserializer",function(e,t,r){var n=r(["createdAt","noticeDate"]),a=e(t.getApiAbsUrl("/centers/:centerId/user-profiles/:userId/termination-requests"),{},{query:{method:"GET",isArray:!0,transformResponse:[angular.fromJson,n]},save:{method:"POST"}});return{query:function(e,t){return a.query({centerId:e,userId:t}).$promise},create:function(e,t,r){return a.save({centerId:e,userId:t},r).$promise}}}])}}]);