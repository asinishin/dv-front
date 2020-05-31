(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"/Ofy":function(e,t){e.exports='<form name=$ctrl.form id=usageEntryEdit ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class="ff-grid gutter-v gutter-h-half"> <ff-panel flex="{lg: \'0 0 50%\'}"> <ff-header><span translate=USAGE_ENTRY.PERIOD.HEADER></span></ff-header> <dw-date-time ff-label="{{\'USAGE_ENTRY.CHECK_IN_TIME\' | translate}}" ff-model=$ctrl.editingUsage.checkInTime label-flex="0 0 126px" ff-required=true ff-date-diff=23 ff-date-order="{ early: $ctrl.editingUsage.checkInTime, late: $ctrl.editingUsage.checkOutTime }" ff-validate-alert="{ field: \'Start Date\', late: \'End Date\' }"> </dw-date-time> <dw-date-time ff-label="{{\'USAGE_ENTRY.CHECK_OUT_TIME\' | translate}}" ff-model=$ctrl.editingUsage.checkOutTime label-flex="0 0 126px" ff-required=true ff-date-diff=23 ff-date-order="{ early: $ctrl.editingUsage.checkInTime, late: $ctrl.editingUsage.checkOutTime }" ff-validate-alert="{ field: \'End Date\', early: \'Start Date\' }"> </dw-date-time> </ff-panel> <ff-panel flex="{lg: \'0 0 50%\'}"> <ff-header><span translate=USAGE_ENTRY.NOTES></span></ff-header> <label class=ff-row> <ff-textarea ff-model=$ctrl.editingUsage.notes rowspan=2></ff-textarea> </label> </ff-panel> <ff-btn-group> <ff-btn sense=save type=submit ff-disabled=$ctrl.form.$pristine ff-click=$ctrl.save()><span translate=GLOBAL.BTN_SAVE></span></ff-btn> <ff-btn sense=back ff-click=$ctrl.back()><span translate=GLOBAL.BTN_BACK></span></ff-btn> </ff-btn-group> </div> </form> '},"20Qt":function(e,t,a){"use strict";a.r(t);a("JBxO"),a("FdtR");var n=a("NOor"),f=a.n(n),s=a("0zKI"),r=a.n(s),l=a("nbuU"),i=a.n(l),c=a("WSeP"),o=a.n(c),g=a("vWHn"),u=a("+l1P");t.default=angular.module("deskworks.members.checkInLog.list",["deskworks.checkInLog.service",g.a.name,u.a.name]).controller("CheckInLogCtrl",["$scope","$timeout","$translate","dwAlerts","state","helper","user","checkInLogService",function(e,t,a,n,s,l,c,g){var u=this;u.state=s,u.operations=[{id:"checkIn",name:a.instant("CHECK_IN_LOG.CHECK_IN")},{id:"checkOut",name:a.instant("CHECK_IN_LOG.CHECK_OUT")}],s.setPageTitle(a.instant("CHECK_IN_LOG.PAGE_TITLE",{userName:c.fullName})),u.fetch=function(e){return u.fetching=!0,g.getLog(s.getCurrentCenterId(),s.getCurrentUserId(),e||u.memberLog&&u.memberLog.page||1,100,u.mac||null).catch((function(e){return n.error(e,"Failed to query check-in log.")})).then((function(e){u.memberLog=e,o()(angular).call(angular,u.memberLog&&u.memberLog.log,(function(e){e.operation=i()(l).call(l,u.operations,e.operation)||u.operations[0]}))})).finally((function(){u.fetching=!1}))},u.fetch(),u.delete=function(e){return g.deleteLog(s.getCurrentCenterId(),s.getCurrentUserId(),e.id).catch((function(e){return n.error(e,"Failed to delete check-in log record.")})).then((function(){var a;r()(a=u.memberLog.log).call(a,f()(l).call(l,u.memberLog.log,e.id),1),0===u.memberLog.log.length&&t((function(){+u.memberLog.page>1?u.fetch(+u.memberLog.page-1):u.fetch(+u.memberLog.page)}),3e3)}))},u.create=function(){u.rec={id:"new",operation:u.operations[0],time:moment()},window.scrollTo(0,0)},u.save=function(){if(!l.pointFirstInvalid("#checkInLogRec"))return g.checkInOut(s.getCurrentCenterId(),s.getCurrentUserId(),u.rec.operation.id,u.rec.time).catch((function(e){return n.error(e,"Failed to save check-in log record.")})).then((function(e){return u.rec.id=e.id,u.rec=null,u.fetch()}))},u.setMac=function(e,t){e&&e.preventDefault(),u.mac!==t&&(u.mac=t,u.fetch(1))}}])},"3/40":function(e,t){e.exports='<div class=view-usage ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-panel ng-if=$ctrl.inactiveCount> <label> <ff-checkbox name=show-inactive ff-model=$ctrl.showInactive> <span translate=MEMBER_USAGE.SHOW_INACTIVE></span> </ff-checkbox> </label> </ff-panel> <ff-panel ng-if="!$ctrl.memberUsageList.length || $ctrl.inactiveCount === $ctrl.memberUsageList.length && !$ctrl.showInactive"> <span translate=MEMBER_USAGE.EMPTY></span> </ff-panel> <ff-panel ng-repeat="memberUsage in ::$ctrl.memberUsageList" ng-if="memberUsage.status === \'active\' || $ctrl.showInactive"> <ff-panel-header> <div class="ff-grid ff-gutter-v-half"> <span flex="{lg: \'1 1 auto\'}">{{::memberUsage.productName}}</span> <span flex="{lg: \'0 0 auto\'}">{{::memberUsage.passProductName}}</span> </div> </ff-panel-header> <ff-header class=pass-balance> <span translate=MEMBER_USAGE.PASS_BALANCE translate-values="{ passBalance: (memberUsage.passBalance | nd) }"></span> </ff-header> <ff-header class=usage-header ng-if=::memberUsage.usages.length> <cell flex="0 1 18%" class=ff-center translate=MEMBER_USAGE.DATE></cell> <cell flex="0 1 30%" class="ff-center ff-col" translate=MEMBER_USAGE.RESERVATION_DURATION></cell> <cell flex="0 1 30%" class="ff-center ff-col" translate=MEMBER_USAGE.USAGE_DURATION></cell> <cell flex="0 1 30%" class="ff-center ff-col" translate=MEMBER_USAGE.BILLING></cell> <cell flex="0 1 72px" class="ff-center show-sm" ng-if=::!memberUsage.isBucket translate=MEMBER_USAGE.IS_BILLED></cell> <ff-btn-group flex="0 0 auto" class=zero-height> <ff-btn sense=collapse size=xs></ff-btn> </ff-btn-group> </ff-header> <ff-static class=ff-no-frame ng-if=::!memberUsage.usages.length> <span translate=GLOBAL.NONE></span> </ff-static> <ff-col ng-repeat="usage in memberUsage.usages" ng-init="usage.collapsed = true"> <ff-row ng-class="{active: !usage.collapsed}" ff-click="usage.collapsed = !usage.collapsed" ng-if=!usage.passIncome> <ff-static flex="0 1 18%" class=ff-center ff-bind="::usage.date | date:\'mediumDate\'"></ff-static> <ff-static flex="0 1 30%" class=ff-center ff-bind="::(usage.reservationDurationHours | nd) + \' / \' + (usage.reservationDurationUnits | nd)"></ff-static> <ff-static flex="0 1 30%" class=ff-center ff-bind="::(usage.usageDurationHours | nd) + \' / \' + (usage.usageDurationUnits | nd)"></ff-static> <ff-static flex="0 1 30%" class=ff-center ff-bind="::(usage.billingAmount | ncurrency) + \' / \' + (usage.billingPasses || 0)"></ff-static> <ff-static flex="0 1 72px" class="ff-center show-sm" ff-bind="::usage.isBilled | yesno" ng-if=::!memberUsage.isBucket></ff-static> <ff-btn-group flex="0 0 auto"> <ff-btn sense=collapse size=xs ng-class="{ collapsed: usage.collapsed }" ff-click="usage.collapsed = !usage.collapsed" title="{{\'MEMBER_USAGE.BTN_COLLAPSE.HINT\' | translate}}"> </ff-btn> </ff-btn-group> </ff-row> <ff-row ng-collapse=usage.collapsed ng-if=!usage.passIncome> <ff-col> <div class="ff-grid gutter-h-half"> <div flex="{lg: \'0 0 50%\'}" class=log-container> <ff-col> <ff-col> <ff-header class=log-block-header><span translate=MEMBER_USAGE.RESERVATION_LOG></span></ff-header> <ff-header class=log-header ng-if=::usage.reservationLog.length> <ff-row> <span class=show-xs translate=MEMBER_USAGE.FROM></span> <span class=show-xs translate=MEMBER_USAGE.TO></span> <span class=ff-center translate=MEMBER_USAGE.DURATION_HOURS></span> <span class=ff-center translate=MEMBER_USAGE.DURATION_PASSES></span> <span class=ff-right translate=MEMBER_USAGE.AMOUNT></span> </ff-row> </ff-header> <ff-row ng-repeat="log in ::usage.reservationLog"> <ff-static class=show-xs><span nice-time=::log.startTime></span></ff-static> <ff-static class=show-xs><span nice-time=::log.endTime></span></ff-static> <ff-static class=ff-center ff-bind=::log.durationHours></ff-static> <ff-static class=ff-center ff-bind=::log.durationUnits></ff-static> <ff-static class=ff-right ff-bind="::log.amount | ncurrency"></ff-static> </ff-row> <ff-static ng-if=::!usage.reservationLog.length class=ff-no-frame> <span translate=GLOBAL.NONE></span> </ff-static> </ff-col> </ff-col> </div> <div flex="{lg: \'0 0 50%\'}" class=log-container> <ff-col> <ff-col> <ff-header class=log-block-header><span translate=MEMBER_USAGE.USAGE_LOG></span></ff-header> <ff-header class=log-header ng-if=::usage.checkInLog.length> <ff-row> <span class=show-xs translate=MEMBER_USAGE.FROM></span> <span class=show-xs translate=MEMBER_USAGE.TO></span> <span class=ff-center translate=MEMBER_USAGE.DURATION_HOURS></span> <span class=ff-center translate=MEMBER_USAGE.DURATION_PASSES></span> <span class=ff-right translate=MEMBER_USAGE.AMOUNT></span> </ff-row> </ff-header> <ff-row ng-repeat="log in ::usage.checkInLog"> <ff-static class=show-xs><span nice-time=::log.startTime></span></ff-static> <ff-static class=show-xs><span nice-time=::log.endTime></span></ff-static> <ff-static class=ff-center ff-bind=::log.durationHours></ff-static> <ff-static class=ff-center ff-bind=::log.durationUnits></ff-static> <ff-static class=ff-right ff-bind="::log.amount | ncurrency"></ff-static> </ff-row> <ff-static ng-if=::!usage.checkInLog.length class=ff-no-frame> <span translate=GLOBAL.NONE></span> </ff-static> </ff-col> </ff-col> </div> </div> </ff-col> <ff-btn-group flex="0 0 auto" class=zero-height> <ff-btn sense=collapse size=xs></ff-btn> </ff-btn-group> </ff-row> <ff-row ng-if=usage.passIncome> <ff-static flex="0 1 25%" ff-bind="::usage.date | date:\'mediumDate\'"></ff-static> <ff-label flex="0 1 75%" class="ff-right em">{{\'+\' + usage.passIncome | passes}}</ff-label> <ff-static flex="0 1 15px"></ff-static> <ff-static flex="0 1 72px" class=ff-center ng-if=::!memberUsage.isBucket>-</ff-static> <ff-btn-group flex="0 0 auto"> <ff-btn sense=remove size=xs ff-click="$ctrl.delete(memberUsage, usage)"> <span translate=GLOBAL.BTN_DELETE></span> </ff-btn> </ff-btn-group> </ff-row> </ff-col> <ff-pagination props=memberUsage ff-click="$ctrl.navPage(memberUsage, $page)" ng-if="memberUsage.pageCount > 1"></ff-pagination> </ff-panel> </div> </div> '},"3CGw":function(e,t,a){},"4pnD":function(e,t,a){"use strict";a.r(t);a("y89P");var n=a("WSeP"),f=a.n(n),s=a("lRNC"),r=a.n(s),l=a("yCd9"),i=a.n(l),c=["$injector",function(e){var t,n,s=(t=a("ALy3"),i()(n=r()(t).call(t)).call(n,t));e.loadNewModules(i()(s).call(s,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t,n=a("IhB+");f()(t=r()(n).call(n)).call(t,(function(t){return e.put(t.replace(/^\.\//,""),n(t))}))}])}];t.default=c},ALy3:function(e,t,a){var n={"./check-in-log/check-in-log.controller.js":"20Qt","./usage-entry/usage-entry-edit.controller.js":"JzwU","./usage-entry/usage-entry-list.controller.js":"Dfvh","./view-usage/view-usage.controller.js":"DgEK"};function f(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}f.keys=function(){return Object.keys(n)},f.resolve=s,e.exports=f,f.id="ALy3"},Dfvh:function(e,t,a){"use strict";a.r(t);var n=a("0zKI"),f=a.n(n),s=a("+l1P");t.default=angular.module("deskworks.UsageEntryListCtrl",["deskworks.usageEntryService",s.a.name]).controller("UsageEntryListCtrl",["$scope","$timeout","$translate","dwAlerts","usageList","user","usageEntryService","state","helper",function(e,t,a,n,s,r,l,i,c){var o=this;o.usageList=s,i.setPageTitle(a.instant("USAGE_ENTRY.PAGE_TITLE",{userName:r.fullName})),o.create=function(){return i.setPath("/usage-entry/new")},o.delete=function(e){if(confirm("Are you sure to delete the usage?"))return l.delete(i.getCurrentCenterId(),i.getCurrentUserId(),e.id).catch((function(e){return n.error(e,"Failed to delete usage entry.")})).then((function(){var a;if(f()(a=o.usageList.usages).call(a,c.findIndexByKeyValue(o.usageList.usages,"id",e.id),1),0===o.usageList.usages.length)return t((function(){return+o.usageList.page>1?o.navPage(+o.usageList.page-1):o.navPage(+o.usageList.page)}),3e3)}))},o.navPage=function(e){return l.query(i.getCurrentCenterId(),i.getCurrentUserId(),e,15).catch((function(e){return n.error(e,"Failed to query usage entry.")})).then((function(e){return o.usageList=e}))}}])},DgEK:function(e,t,a){"use strict";a.r(t);var n=a("YtL8"),f=a.n(n),s=(a("3CGw"),a("+l1P"));t.default=angular.module("deskworks.ViewUsageCtrl",["deskworks.memberUsageService",s.a.name]).controller("ViewUsageCtrl",["$scope","$translate","dwAlerts","memberUsageList","state","helper","user","memberUsageService",function(e,t,a,n,s,r,l,i){var c,o=this;s.setPageTitle(t.instant("MEMBER_USAGE.PAGE_TITLE",{userName:l.fullName})),o.memberUsageList=n,o.inactiveCount=f()(c=o.memberUsageList).call(c,(function(e,t){return"inactive"===t.status?++e:e}),0),o.navPage=function(e,t){return i.get(s.getCurrentCenterId(),s.getCurrentUserId(),e.id,t).catch((function(e){return a.error(e,"Failed to query member usages.")})).then((function(t){return angular.copy(t,e)}))},o.delete=function(e,t){return i.deletePassRefill(s.getCurrentCenterId(),s.getCurrentUserId(),e.id,t.id).catch((function(e){return a.error(e,"Failed to remove pass refill.")})).then((function(t){return o.navPage(e,e.page)}))}}])},ETuO:function(e,t){e.exports='<div id=checkInLog ng-if=!$ctrl.rec ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-btn-group> <ff-btn sense=new ff-click=$ctrl.create()><span translate=CHECK_IN_LOG.BTN_CREATE></span></ff-btn> </ff-btn-group> <ff-panel ff-dim=$ctrl.fetching> <ff-row class="ff-bmargin ff-read-only-ignore" ng-if=state.isLoggedAdmin()> <label flex=auto> <span flex="0 0 120px" class=em translate=CHECK_IN_LOG.FILTER_BY_MAC style=align-self:center></span> <ff-text flex="1 1 1%" placeholder=00:00:00:00:00:00 ff-model=$ctrl.mac ff-model-options="{ debounce: 500 }" ff-change=$ctrl.fetch()></ff-text> </label> <ff-btn-group flex=none class=buttons-row ng-show=$ctrl.mac> <ff-btn sense=delete size=xs ff-click=$ctrl.setMac() title="{{\'GLOBAL.BTN_CANCEL\' | translate}}"></ff-btn> </ff-btn-group> </ff-row> <span translate=CHECK_IN_LOG.EMPTY ng-if="!$ctrl.memberLog || $ctrl.memberLog.pageCount === 0"></span> <ff-header ng-if="$ctrl.memberLog.pageCount > 0"> <ff-row> <cell flex="3 0 55px"><span translate=CHECK_IN_LOG.TIME></span></cell> <cell flex="2 0 45px"><span translate=CHECK_IN_LOG.ACTION></span></cell> <cell flex="4 0 1px" class=show-xs ng-if=state.isLoggedAdmin()><span translate=CHECK_IN_LOG.LOGIN></span></cell> <cell flex="4 0 1px" class=show-sm ng-if=state.isLoggedAdmin()><span translate=CHECK_IN_LOG.MAC></span></cell> <ff-btn-group flex=none class="buttons-row zero-height" ng-if=state.isLoggedAdmin()> <ff-btn sense=remove size=xs></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-row ng-repeat="rec in $ctrl.memberLog.log"> <ff-static flex="3 0 55px"> <span ng-bind="rec.time | date:\'mediumDate\'" style=font-size:.9em></span>&nbsp;&nbsp;<span nice-time=rec.time></span> </ff-static> <ff-static flex="2 0 45px"><ff-icon sense="rec.operation.id + \'Status\'"></ff-icon>&nbsp;&nbsp;{{rec.operation.name}}</ff-static> <ff-static flex="4 0 1px" class=show-xs ff-bind=rec.login ng-if=state.isLoggedAdmin()></ff-static> <ff-static flex="4 0 1px" class=show-sm ng-if=state.isLoggedAdmin()> <a href=# ng-click="$ctrl.setMac($event, rec.macAddress)" ng-bind=rec.macAddress></a> </ff-static> <ff-btn-group flex="0 0 auto" class=buttons-row ng-if=state.isLoggedAdmin()> <ff-btn sense=remove size=xs ff-click=$ctrl.delete(rec) title="{{\'GLOBAL.BTN_DELETE\' | translate}}"></ff-btn> </ff-btn-group> </ff-row> <ff-pagination props=$ctrl.memberLog ff-click=$ctrl.fetch($page)></ff-pagination> </ff-panel> <ff-btn-group ng-if="state.isLoggedAdmin() && $ctrl.memberLog.log.length > 0"> <ff-btn sense=new ff-click=$ctrl.create()><span translate=CHECK_IN_LOG.BTN_CREATE></span></ff-btn> </ff-btn-group> </div> </div> <form name=formCheckInLogRec id=checkInLogRec ng-if=$ctrl.rec ff-bulk-read-only> <h4 class=page-title><span translate=CHECK_IN_LOG.NEW.PAGE_TITLE></span></h4> <div class="ff-grid gutter-v"> <ff-panel style=max-width:400px> <dw-date-time label-flex="0 0 100px" ff-model=$ctrl.rec.time ff-required=true ff-label="{{\'CHECK_IN_LOG.TIME\' | translate}}" ff-validate-alert="{{\'CHECK_IN_LOG.TIME\' | translate}}"></dw-date-time> <label class=ff-row> <ff-label flex="0 0 100px"><req translate=CHECK_IN_LOG.ACTION></req></ff-label> <ff-select ff-model=$ctrl.rec.operation ff-required=true ff-options="operation.name for operation in $ctrl.operations" ff-validate-alert="{{\'CHECK_IN_LOG.ACTION\' | translate}}"></ff-select> </label> </ff-panel> <ff-btn-group> <ff-btn type=submit sense=save ff-click=$ctrl.save()><span translate=GLOBAL.BTN_SAVE></span></ff-btn> <ff-btn sense=back ff-click="$ctrl.rec = null"><span translate=GLOBAL.BTN_BACK></span></ff-btn> </ff-btn-group> </div> </form> '},"IhB+":function(e,t,a){var n={"./check-in-log/check-in-log.tpl.html":"ETuO","./usage-entry/usage-entry-edit.tpl.html":"/Ofy","./usage-entry/usage-entry-list.tpl.html":"POzD","./view-usage/view-usage.tpl.html":"3/40"};function f(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}f.keys=function(){return Object.keys(n)},f.resolve=s,e.exports=f,f.id="IhB+"},JzwU:function(e,t,a){"use strict";a.r(t);var n=a("vWHn");t.default=angular.module("deskworks.UsageEntryEditCtrl",["deskworks.usageEntryService",n.a.name]).controller("UsageEntryEditCtrl",["$scope","$filter","$timeout","$route","$translate","dwAlerts","usage","user","usageEntryService","state","helper",function(e,t,a,n,f,s,r,l,i,c,o){var g=this;e.backPath="/usage-entry",c.setPageTitle(f.instant("USAGE_ENTRY.NEW.PAGE_TITLE",{userName:l.fullName})),g.editingUsage=r,"new"===r.id&&a((function(){return g.form.$setDirty()})),e.$watch("$ctrl.editingUsage.checkInTime",(function(e,t){moment.isMoment(e)&&moment.isMoment(t)&&(e.date()===t.date()&&e.month()===t.month()&&e.year()===t.year()||(g.editingUsage.checkOutTime=moment([e.year(),e.month(),e.date(),g.editingUsage.checkOutTime.hour()||e.hour(),g.editingUsage.checkOutTime.minute()||e.minute(),0,0])))})),g.back=function(){return c.setPath("/usage-entry")},g.save=function(){if(!o.pointFirstInvalid("#usageEntryEdit"))return i.save(c.getCurrentCenterId(),c.getCurrentUserId(),g.editingUsage).catch((function(e){return s.error(e,"Failed to save usage entry.")})).then((function(){g.form.$setPristine(),n.reload()}))}}])},POzD:function(e,t){e.exports='<div class=usage-entry ff-bulk-read-only> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class=gutter-v> <ff-btn-group ng-if="state.isLoggedAdmin() && $ctrl.usageList.usages.length > 0"> <ff-btn sense=new ff-click=$ctrl.create()><span translate=USAGE_ENTRY.BTN_CREATE></span></ff-btn> </ff-btn-group> <ff-panel ng-if="$ctrl.usageList.pageCount === 0"><span translate=USAGE_ENTRY.EMPTY></span></ff-panel> <ff-panel ng-if="$ctrl.usageList.pageCount > 0"> <ff-header> <ff-row> <cell flex="2 0 15%" class=ff-center><span translate=USAGE_ENTRY.DATE></span></cell> <cell flex="2 0 15%" class=ff-center><span translate=USAGE_ENTRY.CHECK_IN_TIME></span></cell> <cell flex="2 0 15%" class=ff-center><span translate=USAGE_ENTRY.CHECK_OUT_TIME></span></cell> <cell flex="5 1 40%" class="ff-center show-sm"><span translate=USAGE_ENTRY.NOTES></span></cell> <cell flex="1 0 15%" class=ff-center><ff-col translate=USAGE_ENTRY.USAGE></ff-col></cell> <ff-btn-group flex="0 0 auto" class="buttons-row zero-height" ng-if=state.isLoggedAdmin()> <ff-btn sense=remove size=xs></ff-btn> </ff-btn-group> </ff-row> </ff-header> <ff-row ng-repeat="usage in $ctrl.usageList.usages"> <ff-static flex="2 0 15%" class=ff-center ff-bind="(usage.checkInTime || usage.checkOutTime) | date:\'mediumDate\'"></ff-static> <ff-static flex="2 0 15%" class=ff-center><span nice-time=usage.checkInTime></span></ff-static> <ff-static flex="2 0 15%" class=ff-center><span nice-time=usage.checkOutTime></span></ff-static> <ff-static flex="5 1 40%" class="ff-center show-sm" ff-bind="usage.notes | nd"></ff-static> <ff-static flex="1 0 15%" class=ff-center ff-bind="(usage.usageDurationHours | nd) + \' / \' + (usage.usageDurationUnits | nd)"></ff-static> <ff-btn-group flex="0 0 auto" class=buttons-row ng-if=state.isLoggedAdmin()> <ff-btn sense=remove size=xs ff-click=$ctrl.delete(usage) title="{{\'GLOBAL.BTN_DELETE\' | translate}}"></ff-btn> </ff-btn-group> </ff-row> <ff-pagination props=$ctrl.usageList ff-click=$ctrl.navPage($page) ng-if="$ctrl.usageList.pageCount > 1"></ff-pagination> </ff-panel> <ff-btn-group ng-if=state.isLoggedAdmin()> <ff-btn sense=new ff-click=$ctrl.create()><span translate=USAGE_ENTRY.BTN_CREATE></span></ff-btn> </ff-btn-group> </div> </div> '},vWHn:function(e,t,a){"use strict";t.a=angular.module("deskworks.dwDateTime",["flexForms"]).directive("dwDateTime",(function(){return{restrict:"E",scope:!0,compile:function(e,t){var a=t.ngDisabled?' ng-disabled="'+t.ngDisabled+'"':"",n=t.ngDisabled?' ff-disabled="'+t.ngDisabled+'"':"",f=t.ffRequired?' ff-required="'+t.ffRequired+'"':"",s=t.ffDateOrder?' ff-date-order="'+t.ffDateOrder+'"':"",r=t.ffDateDiff?' ff-date-diff="'+t.ffDateDiff+'"':"",l=t.ffValidateAlert?' ff-validate-alert="'+t.ffValidateAlert+'"':"",i=t.labelClass?' class="'+t.labelClass+'"':"",c='<ff-row><label flex="1 1 auto"><ff-label flex="'+t.labelFlex+'"'+f+a+i+">"+t.ffLabel+'</ff-label><ff-row flex="1 1 1%"><ff-date name="{{\''+(t.name||t.ffModel)+'date\'}}" flex="1 2 150px" ff-model="inner.date"'+f+n+s+r+l+"></ff-date><ff-time name=\"{{'"+(t.name||t.ffModel)+'time\'}}" flex="1 3 150px" ff-model="inner.time"'+f+n+s+r+l+"></ff-time></ff-row></label></ff-row>";return e.append(c),this.link},link:function(e,t,a){e.inner={};var n=e.$eval(a.ffModel);function f(t,a){!moment.isMoment(t)||moment.isMoment(a)&&t.isSame(a)||(e.inner.date=t.clone().second(0).millisecond(0),e.inner.time=t.clone().second(0).millisecond(0))}n instanceof moment&&f(n),e.$watch(a.ffModel,f),e.$watch("inner.date",(function(t,n){var f=e.$eval(a.ffModel);moment.isMoment(t)&&moment.isMoment(f)&&(moment.isMoment(n)&&t.isSame(n)||(e.newDate=t.clone().hour(f.hour()).minute(f.minute()),e.$eval(a.ffModel+" = newDate")))})),e.$watch("inner.time",(function(t,n){var f=e.$eval(a.ffModel);moment.isMoment(t)&&moment.isMoment(f)&&(moment.isMoment(n)&&t.isSame(n)||(e.newDate=f.clone().hour(t.hour()).minute(t.minute()),e.$eval(a.ffModel+" = newDate")))}))}}}))}}]);