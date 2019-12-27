(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+iS3":function(e,s,t){"use strict";t.r(s),s.default=angular.module("deskworks.dashboard.dashAdminSelfRegistrations",[]).directive("dashAdminSelfRegistrations",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-admin/dash-admin-self-registrations.tpl.html",controller:"DashAdminSelfRegistrationsCtrl as $ctrl",bindToController:{users:"<"},link:function(s,t,a,n,r){var i=this;r((function(){return e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashAdminSelfRegistrationsCtrl",["$scope","state","helper",function(e,s,t){e.helper=t,this.navigate=function(e){return s.setCurrentUserId(e.id),s.setPath("/profile")}}])},"0Zo7":function(e,s,t){"use strict";t.r(s);var a=t("hsT8"),n=t.n(a),r=t("WSeP"),i=t.n(r);s.default=angular.module("deskworks.dashboard.dashGeneral",["deskworks.dashboard.service","deskworks.memberUsageService","deskworks.setup.service"]).directive("dashGeneral",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-user/dash-general.tpl.html",controller:"DashGeneralCtrl as $ctrl",bindToController:{settings:"<"},link:function(s,t,a,n,r){var i=this;r((function(){e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashGeneralCtrl",["$scope","$q","$filter","state","helper","dwAlerts","userProfileService","dashboardService","memberUsageService",function(e,s,t,a,r,l,c,f,o){var d=this;d.$onInit=function(){c.get(a.getCurrentCenterId(),a.getCurrentUserId()).catch((function(e){return l.error(e,"Failed to load user profile.")})).then((function(e){d.user=e,i()(angular).call(angular,d.user.creditCards,(function(e){if(e.defaultPaymentMethod){d.defaultPaymentMethod=e;var s=t("toDate")(d.defaultPaymentMethod.expiry);s-moment()<2592e6&&(s-moment()>=0?d.showExpireWarning=!0:d.showExpiredWarning=!0,e.expiry=t("date")(s,"mediumDate"))}}))})),f.getUserStats(a.getCurrentCenterId(),a.getCurrentUserId()).catch((function(e){return l.error(e,"Failed to load user stats.")})).then((function(e){d.userStats=e;var s="hours"===d.settings.reservationCreditsUnit?"hours":"ncurrency";d.userStats.reservationCreditBalance=t(s)(d.userStats.reservationCreditBalance)})),o.query(a.getCurrentCenterId(),a.getCurrentUserId(),100,1).catch((function(e){return l.error(e,"Failed to query member usages.")})).then((function(e){d.memberUsages=n()(e).call(e,(function(e){return e&&"inactive"!==e.status}))}))}}])},"24Ie":function(e,s){e.exports='<ff-panel> <ff-panel-header> <ff-icon sense=list></ff-icon> <span translate=DASHBOARD.USER.GENERAL_INFO.HEADER></span>: </ff-panel-header> <div ff-dim="!$ctrl.user || !$ctrl.userStats || !$ctrl.memberUsages"> <ff-row ng-if=$ctrl.userStats class=animate-collapse> <ff-static><span> <ff-icon sense=info></ff-icon> <span translate=DASHBOARD.USER.GENERAL_INFO.RESERVATION_CREDIT_BALANCE translate-values={{$ctrl.userStats}}></span> </span></ff-static> </ff-row> <ff-row ng-repeat="rec in $ctrl.memberUsages" class=animate-collapse> <ff-static><span> <ff-icon sense=info></ff-icon> <span translate=DASHBOARD.USER.GENERAL_INFO.PASS_BALANCE translate-values={{rec}}></span> </span></ff-static> </ff-row> <ff-row ng-if=$ctrl.showExpireWarning class=animate-collapse> <ff-static><span> <ff-icon sense=warning class=text-danger></ff-icon> <span translate=DASHBOARD.USER.GENERAL_INFO.CC_DUE_TO_EXPIRE translate-values="{ date: $ctrl.defaultPaymentMethod.expiry }"></span> </span></ff-static> </ff-row> <ff-row ng-if=$ctrl.showExpiredWarning class=animate-collapse> <ff-static><span> <ff-icon sense=warning class=text-danger></ff-icon> <span translate=DASHBOARD.USER.GENERAL_INFO.CC_HAS_EXPIRED translate-values="{ date: $ctrl.defaultPaymentMethod.expiry }"></span> </span></ff-static> </ff-row> </div> </ff-panel> '},"3EYM":function(e,s){e.exports='<ff-panel> <ff-panel-header> <ff-icon sense=user></ff-icon> <span translate=DASHBOARD.ADMIN.SIGN_UPS.HEADER></span>: </ff-panel-header> <div> <ff-row ng-repeat-start="user in ::$ctrl.users" class="ff-clickable animate-collapse" ng-click=$ctrl.navigate(user) ff-dim title="{{\'DASHBOARD.ADMIN.SIGN_UPS.NAV_TITLE\' | translate}}"> <ff-static flex="0 0 50%" ff-bind="::helper.join([user.fullName, user.company], \', \')"></ff-static> <ff-static flex="0 0 50%" ff-style="{\'padding-right\': 0}"> <a href=mailto:{{::user.email}} ng-bind=::user.email ng-click=$event.stopPropagation() title=""></a> </ff-static> </ff-row> <ff-row ng-repeat-end ng-if="::user.status === \'staffHelp\' || user.status === \'abandoned\'" class="ff-reduce-height ff-small animate-collapse"> <ff-static> <span> <ff-icon sense=warning class=ff-flex-start></ff-icon> <span ng-if="::user.status === \'staffHelp\'" translate=DASHBOARD.ADMIN.SIGN_UPS.STAFF_HELP></span> <span ng-if="::user.status === \'abandoned\'" translate=DASHBOARD.ADMIN.SIGN_UPS.ABANDONED></span> </span> </ff-static> </ff-row> <div ng-if="$ctrl.users && !$ctrl.users.length" class=animate-collapse> <span translate=DASHBOARD.ADMIN.SIGN_UPS.EMPTY></span> </div> </div> </ff-panel> '},"49Lf":function(e,s,t){"use strict";t.r(s),s.default=angular.module("deskworks.DashboardUserCtrl",["NATS","deskworks.routeHelper","flexForms","deskworks.dashboard.upcomingReservations","deskworks.dashboard.dashGeneral","deskworks.dashboard.recurringCharges","deskworks.dashboard.dashOutstandingCharges","deskworks.dashboard.dashMembersCheckedIn","deskworks.dashboard.dashMessageBoard"]).controller("DashboardUserCtrl",["$scope","$translate","state","helper","user","userLogged","settings","NATS",function(e,s,t,a,n,r,i,l){var c=this;c.user=n,c.userLogged=r,c.settings=i;var f=t.isMasterProfile()&&c.user.company?c.user.company:c.user.firstName+" "+c.user.lastName,o=s.instant("DASHBOARD.USER.PAGE_TITLE",{userName:f});t.setPageTitle(o),c.nats=l.connect(),c.nats.on("error",(function(e){console.warn("NATS error:",e)})),e.$on("$destroy",(function(){c.nats.close()})),c.canSeeAccountingInfo=function(){return!t.isMasterProfile()||(a.findByKeyValue(c.userLogged.masterMembers,"id",c.user.id)||{}).canSeeAccountingInfo}}])},"4sA8":function(e,s,t){"use strict";t.r(s);var a=t("0zKI"),n=t.n(a),r=t("NOor"),i=t.n(r),l=t("nbuU"),c=t.n(l),f=t("WSeP"),o=t.n(f),d=(t("w+ol"),t("iAzO"));s.default=angular.module("deskworks.dashboard.dashMembersCheckedIn",["deskworks.CheckedInMembers","deskworks.OurMemberModalCtrl",d.a.name]).directive("dashMembersCheckedIn",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-user/dash-members-checked-in.tpl.html",controller:"DashMembersCheckedInCtrl as $ctrl",bindToController:{nats:"<"},link:function(s,t,a,n,r){var i=this;r((function(){return e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashMembersCheckedInCtrl",["$scope","$timeout","state","helper","dwAlerts","dwModal","CheckedInMembers",function(e,s,t,a,r,l,f){var d=this;e.helper=a;var u=[];function h(e){if(d.users){var s=c()(a).call(a,d.users,e.id);if(s)return angular.extend(s,e);d.users.push(e)}}function m(e){var s;if(d.users){var t=i()(a).call(a,d.users,e.id);t>=0&&n()(s=d.users).call(s,t,1)}}d.$onInit=function(){f.query(t.getCurrentCenterId()).catch((function(e){return r.error(e,"Failed to query checked-in members.")})).then((function(e){d.users=e,u.push(d.nats.subscribe("API.:siteId.centers.:centerId.checked-in-members.create",h)),u.push(d.nats.subscribe("API.:siteId.centers.:centerId.checked-in-members.delete",m))}))},d.$onDestroy=function(){o()(u).call(u,(function(e){return d.nats.unsubscribe(e)}))},d.view=function(s){l.show({scope:e,templateUrl:"members/our-members/our-member-modal.tpl.html",controller:"OurMemberModalCtrl",inputs:{member:s}})}}])},"9tvY":function(e,s,t){"use strict";t.r(s);var a=t("hsT8"),n=t.n(a);s.default=angular.module("deskworks.dashboard.recurringCharges",["deskworks.recurringCharge.service"]).directive("dashRecurringCharges",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-user/dash-recurring-charges.tpl.html",controller:"DashRecurringChargesCtrl as $ctrl",link:function(s,t,a,n,r){var i=this;r((function(){return e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashRecurringChargesCtrl",["$scope","dwAlerts","state","helper","recurringChargeService",function(e,s,t,a,r){var i=this;i.$onInit=function(){r.query(t.getCurrentCenterId(),t.getCurrentUserId()).catch((function(e){return s.error(e,"Failed to query recurring charges.")})).then((function(e){i.charges=n()(e).call(e,(function(e){return"active"===e.status.id&&e.nextBilled&&"As Needed"!==e.nextBilled}))}))}}])},CSwg:function(e,s,t){"use strict";t.r(s),s.default=angular.module("deskworks.dashboard.admin",["NATS","flexForms","deskworks.dashboard.dashAdminReservations","deskworks.dashboard.dashAdminAccessCode","deskworks.dashboard.dashAdminBilling","deskworks.dashboard.dashAdminUsersCheckedIn","deskworks.dashboard.dashAdminReservationConflicts","deskworks.dashboard.dashAdminSelfRegistrations","deskworks.dashboard.service","deskworks.Admin"]).controller("DashboardAdminCtrl",["$scope","$filter","$timeout","$translate","state","helper","admin","dwAlerts","settings","dashboardService","userProfileService","NATS",function(e,s,t,a,n,r,i,l,c,f,o,d){var u=this;u.settings=c,u.nats=d.connect(),u.nats.on("error",(function(e){console.warn("NATS error:",e)})),e.$on("$destroy",(function(){return u.nats.close()}));var h=a.instant("DASHBOARD.ADMIN.PAGE_TITLE",{userName:i.firstName+" "+i.lastName});n.setPageTitle(h),n.isUserSelected()&&o.get(n.getCurrentCenterId(),n.getCurrentUserId()).catch((function(e){return l.error(e,"Failed to get user profile.")})).then((function(e){u.user=e})),u.hideAll="all"!==(r.findByKeyValue(i.centers,"id",n.getCurrentCenterId())||{}).permission,u.hideAll||f.getCenterStats(n.getCurrentCenterId()).catch((function(e){return l.error(e,"Failed to get center stats.")})).then((function(e){u.centerStats=e}))}])},Cx3O:function(e,s,t){var a={"./dashboard-admin/dashboard-admin.controller.js":"CSwg","./dashboard-user/dashboard-user.controller.js":"49Lf","./widgets-admin/dash-admin-access-code.directive.js":"SRwX","./widgets-admin/dash-admin-billing.directive.js":"JVpn","./widgets-admin/dash-admin-reservation-conflicts.directive.js":"a0px","./widgets-admin/dash-admin-reservations.directive.js":"fsnK","./widgets-admin/dash-admin-self-registrations.directive.js":"+iS3","./widgets-admin/dash-admin-users-checked-in.directive.js":"sjTq","./widgets-user/dash-general.directive.js":"0Zo7","./widgets-user/dash-members-checked-in.directive.js":"4sA8","./widgets-user/dash-message-board.directive.js":"Oifl","./widgets-user/dash-outstanding-charges.directive.js":"V5+H","./widgets-user/dash-recurring-charges.directive.js":"9tvY","./widgets-user/dash-upcoming-reservations.directive.js":"zKnN"};function n(e){var s=r(e);return t(s)}function r(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="Cx3O"},I8wp:function(e,s){e.exports='<ff-panel> <ff-panel-header> <ff-icon sense=user></ff-icon> <span translate=DASHBOARD.ADMIN.USERS_CHECKED_IN.HEADER></span>: </ff-panel-header> <div> <ff-panel ng-if=!$ctrl.users.length class=animate-collapse> <span translate=DASHBOARD.ADMIN.USERS_CHECKED_IN.EMPTY></span> </ff-panel> <ff-row ng-repeat="user in $ctrl.users" class="ff-clickable animate-collapse" ng-click=$ctrl.toUserProfile(user) ff-dim title="{{\'DASHBOARD.ADMIN.USERS_CHECKED_IN.NAVIGATE_TITLE\' | translate}}"> <ff-static class=dash-avatar><ff-img ff-src={{::user.photo}}></ff-img></ff-static> <ff-static flex="0 0 30px" class="ff-center no-crop" style=z-index:2> <span class=badge ng-class=::userRoles[user.role].color ng-click=$event.stopPropagation() title=""> {{user.devices}} <ff-tip class=text-nowrap ng-class=::userRoles[user.role].color style=min-width:60px> <div> <span class=hint-label>{{\'GLOBAL.ROLE\' | translate}}:</span> {{::userRoles[user.role].name}} </div> <div> <span class=hint-label>{{\'DASHBOARD.ADMIN.USERS_CHECKED_IN.DEVICES\' | translate}}:</span> {{user.devices}} </div> </ff-tip> </span> </ff-static> <ff-static ff-bind="::helper.join([user.name, user.company], \', \')"></ff-static> <ff-static> <a href=mailto:{{::user.email}} ng-bind=::user.email ng-click=$event.stopPropagation() title=""></a> </ff-static> </ff-row> </div> </ff-panel> '},JVpn:function(e,s,t){"use strict";t.r(s),s.default=angular.module("deskworks.dashboard.dashAdminBilling",[]).directive("dashAdminBilling",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-admin/dash-admin-billing.tpl.html",controller:"DashAdminBillingCtrl as $ctrl",bindToController:{stats:"<",settings:"<"},link:function(s,t,a,n,r){var i=this;r((function(){e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashAdminBillingCtrl",["$scope","state","helper",function(e,s,t){var a=this;e.helper=t,a.toBillingProfile=function(e){return s.setCurrentUserId(e.userId),s.setPath("/billing-profiles")},a.toIncomeReport=function(){return s.setPath(a.settings&&"accrual"===a.settings.dashboardIncome?"/income-by-item-report":"/income-report")},a.toAccountsReceivableReport=function(){return s.setPath("/accounts-receivable-report")}}])},L6E7:function(e,s){e.exports='<ff-panel> <ff-panel-header> <ff-icon sense=reservation></ff-icon> <span translate={{::$ctrl.label}}></span>: </ff-panel-header> <ff-panel ff-dim=!$ctrl.reservations> <div ng-repeat-start="reservation in ::$ctrl.reservations" class="ff-grid ff-clickable ff-relative animate-collapse" ng-click=$ctrl.navigate(reservation) ff-dim title="{{\'DASHBOARD.ADMIN.RESERVATIONS.NAVIGATE_TITLE\' | translate}}"> <ff-row flex="{sm: \'0 0 50%\'}"> <ff-static flex="0 1 210px"> <span><span nice-time=::reservation.startTime></span> - <span nice-time=::reservation.endTime></span></span> </ff-static> <ff-static flex="1 1 210px" ff-bind=::reservation.reservationUnitName></ff-static> </ff-row> <ff-row flex="{sm: \'0 0 50%\'}"> <ff-static flex="1 1 210px" ff-bind="::helper.join([reservation.userCompany, reservation.userName], \', \')"></ff-static> <ff-static flex="0 1 90px" ff-bind=::reservation.accessCode ng-click=$event.stopPropagation() ff-style="{ cursor: \'auto\' }" ng-if=$ctrl.settings.enableAccessCodes title=""></ff-static> </ff-row> </div> <ff-row ng-repeat-end ng-if=::reservation.reservationNote class=animate-collapse> <ff-label> <em> <ff-icon sense=info class=ff-flex-start></ff-icon> {{::reservation.reservationNote}} </em> </ff-label> </ff-row> <div ng-if="$ctrl.reservations && !$ctrl.reservations.length" class=animate-collapse> <span translate=GLOBAL.NONE></span> </div> </ff-panel> </ff-panel> '},Oifl:function(e,s,t){"use strict";t.r(s);var a=t("NOor"),n=t.n(a),r=t("0zKI"),i=t.n(r),l=t("nbuU"),c=t.n(l),f=t("yCd9"),o=t.n(f),d=t("+l1P");s.default=angular.module("deskworks.dashboard.dashMessageBoard",["deskworks.MessageBoard",d.a.name]).directive("dashMessageBoard",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-user/dash-message-board.tpl.html",controller:"DashMessageBoardCtrl as $ctrl",bindToController:{nats:"<"},link:function(s,t,a,n,r){var i=this;r((function(){return e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashMessageBoardCtrl",["$scope","$timeout","dwAlerts","state","helper","MessageBoard",function(e,s,t,a,r,l){var f=this,d=[],u=10,h=140;function m(e){return e.text.length>h&&(e.text=e.text.substr(0,h),e.crop=!0),e}function p(e){var s;m(e=l.deserialize(e));var t=c()(r).call(r,f.messages,e.id);if(t)return angular.extend(t,e);f.messages.unshift(e),f.messages.length>u&&i()(s=f.messages).call(s,u,f.messages.length-u)}function g(e){m(e);var s=c()(r).call(r,f.messages,e.id);if(s)return angular.extend(s,e)}function v(e){var s,t=n()(r).call(r,f.messages,e.id);t>=0&&i()(s=f.messages).call(s,t,1)}f.$onInit=function(){l.query({centerId:a.getCurrentCenterId(),limit:10}).catch((function(e){return t.error(e,"Failed to query messages.")})).then((function(e){f.messages=o()(e).call(e,m),d.length||(d.push(f.nats.subscribe("API.:siteId.centers.:centerId.message-board.messages.create",p)),d.push(f.nats.subscribe("API.:siteId.centers.:centerId.message-board.messages.update",g)),d.push(f.nats.subscribe("API.:siteId.centers.:centerId.message-board.messages.delete",v)))})).catch((function(){return f.messages=[]}))},f.toMsg=function(e){return a.setPath("/message-board")}}])},PbmZ:function(e,s){e.exports='<ff-panel ng-if=$ctrl.stats.accessCode class="animate-collapse ff-no-frame"> <ff-panel-header> <ff-icon sense=accessCode></ff-icon> <span translate=DASHBOARD.ADMIN.ACCESS_CODE.HEADER></span>: </ff-panel-header> <ff-static><span ng-bind=$ctrl.stats.accessCode></span></ff-static> </ff-panel> '},SMZY:function(e,s){e.exports='<div id=dashboardUser class=dashboard> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class="ff-grid gutter-v gutter-h"> <div flex="{md: \'0 0 50%\'}"> <dash-upcoming-reservations id=dashUpcomingReservations settings=vm.settings></dash-upcoming-reservations> </div> <div flex="{md: \'0 0 50%\'}"> <dash-general id=dashGeneral settings=vm.settings></dash-general> </div> <dash-recurring-charges id=dashRecurringCharges ng-if="vm.user.role !== \'nonMember\' && vm.canSeeAccountingInfo()"></dash-recurring-charges> <dash-outstanding-charges id=dashOutstandingCharges ng-if=vm.canSeeAccountingInfo()></dash-outstanding-charges> <div flex="{md: \'0 0 50%\'}" ng-if="vm.user.role !== \'nonMember\'"> <dash-members-checked-in id=dashMembersCheckedIn nats=vm.nats></dash-members-checked-in> </div> <div flex="{md: \'0 0 50%\'}" ng-if="vm.user.role !== \'nonMember\'"> <dash-message-board id=dashMessageBoard nats=vm.nats></dash-message-board> </div> </div> </div> '},SRwX:function(e,s,t){"use strict";t.r(s),s.default=angular.module("deskworks.dashboard.dashAdminAccessCode",[]).directive("dashAdminAccessCode",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-admin/dash-admin-access-code.tpl.html",controller:"DashAdminAccessCodeCtrl as $ctrl",bindToController:{stats:"<"},link:function(s,t,a,n,r){var i=this;r((function(){return e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashAdminAccessCodeCtrl",(function(){}))},UEiN:function(e,s,t){"use strict";t.r(s);t("y89P");var a=t("WSeP"),n=t.n(a),r=t("lRNC"),i=t.n(r),l=t("yCd9"),c=t.n(l),f=["$injector",function(e){var s,a,r=(s=t("Cx3O"),c()(a=i()(s).call(s)).call(a,s));e.loadNewModules(c()(r).call(r,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var s,a=t("lc1n");n()(s=i()(a).call(a)).call(s,(function(s){return e.put(s.replace(/^\.\//,""),a(s))}))}])}];s.default=f},"V5+H":function(e,s,t){"use strict";t.r(s);var a=t("6RpP"),n=t.n(a),r=t("yCd9"),i=t.n(r);s.default=angular.module("deskworks.dashboard.dashOutstandingCharges",["deskworks.purchase.service"]).directive("dashOutstandingCharges",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-user/dash-outstanding-charges.tpl.html",controller:"DashOutstandingChargesCtrl as $ctrl",link:function(s,t,a,n,r){var i=this;r((function(){return e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashOutstandingChargesCtrl",["$scope","$q","$timeout","dwAlerts","state","helper","purchaseService",function(e,s,t,a,r,l,c){var f=this;f.$onInit=function(){c.getPurchases(r.getCurrentCenterId(),r.getCurrentUserId()).catch((function(e){return a.error(e,"Failed to query non-recurring charges.")})).then((function(e){var t,l;return s.all(i()(t=n()(l=e.open).call(l,e.credit)).call(t,(function(e){return c.get(r.getCurrentCenterId(),r.getCurrentUserId(),e.id).catch((function(s){return a.error(s,"Failed to get purchase for order #"+e.id+".")})).then((function(e){var s;f.charges=n()(s=f.charges||[]).call(s,e.items)}))}))).then((function(){return f.charges=f.charges||[]}))}))}}])},a0px:function(e,s,t){"use strict";t.r(s);var a=t("xeXu"),n=t.n(a),r=t("0zKI"),i=t.n(r),l=t("+l1P");s.default=angular.module("deskworks.dashboard.dashAdminReservationConflicts",["deskworks.dashboard.service",l.a.name]).directive("dashAdminReservationConflicts",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-admin/dash-admin-reservation-conflicts.tpl.html",controller:"DashAdminReservationConflictsCtrl as $ctrl",bindToController:{reservations:"<",label:"@"},link:function(s,t,a,n,r){var i=this;r((function(){return e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashAdminReservationConflictsCtrl",["$scope","$filter","state","helper","dwAlerts","dashboardService",function(e,s,t,a,r,l){var c=this;e.helper=a,c.navigate=function(e){return t.setParam("date",s("date")(e.startTime,"yyyy-MM-dd")),t.setPath("/reservation-calendar")},c.reset=function(e){return l.resetReservationConflict(e.id).catch((function(e){return r.error(e,"Failed to reset reservation conflict.")})).then((function(){var s,t;return i()(s=c.reservations).call(s,n()(t=c.reservations).call(t,e),1)}))}}])},a7Fd:function(e,s){e.exports='<ff-panel> <ff-panel-header> <ff-icon sense=billing></ff-icon> <span translate=DASHBOARD.USER.RECURRING_CHARGES.HEADER></span>: </ff-panel-header> <ff-panel ff-dim=!$ctrl.charges> <ff-panel-header class=animate-collapse ng-if=$ctrl.charges.length> <ff-row class=ff-small> <span flex="0 0 40px" class="ff-center show-xs" translate=DASHBOARD.USER.RECURRING_CHARGES.QUANTITY></span> <span flex="0 1 280px" translate=DASHBOARD.USER.RECURRING_CHARGES.NAME></span> <span flex="1 1 400px" class=show-sm translate=DASHBOARD.USER.RECURRING_CHARGES.DESCRIPTION></span> <span flex="1 1 130px" class=ff-right translate=DASHBOARD.USER.RECURRING_CHARGES.CHARGE_DATE></span> <span flex="1 0 70px" class=ff-right translate=DASHBOARD.USER.RECURRING_CHARGES.TOTAL></span> </ff-row> </ff-panel-header> <ff-row ng-repeat="charge in $ctrl.charges" class=animate-collapse> <ff-static flex="0 0 40px" ff-bind=charge.quantity class="ff-center show-xs"></ff-static> <ff-static flex="0 1 280px" ff-bind=charge.productName></ff-static> <ff-static flex="1 1 400px" class=show-sm ff-bind=charge.description></ff-static> <ff-static flex="1 1 130px" ff-bind="charge.nextBilled | date:\'mediumDate\'" class=ff-right></ff-static> <ff-static flex="1 0 70px" ff-bind="charge.total | ncurrency" class=ff-right></ff-static> </ff-row> <div ng-if="$ctrl.charges && !$ctrl.charges.length" class="animate-collapse ff-no-frame"> <span translate=GLOBAL.NONE></span> </div> </ff-panel> </ff-panel> '},bDmU:function(e,s){e.exports='<ff-panel> <ff-panel-header> <ff-icon sense=billing></ff-icon> <span translate=DASHBOARD.USER.OUTSTANDING_CHARGES.HEADER></span>: </ff-panel-header> <ff-panel ff-dim=!$ctrl.charges> <ff-panel-header class=animate-collapse ng-if=$ctrl.charges.length> <ff-row class=ff-small> <span flex="0 0 40px" class="ff-center show-xs" translate=DASHBOARD.USER.OUTSTANDING_CHARGES.QUANTITY></span> <span flex="0 1 280px" translate=DASHBOARD.USER.OUTSTANDING_CHARGES.NAME></span> <span flex="1 1 450px" class=show-sm translate=DASHBOARD.USER.OUTSTANDING_CHARGES.DESCRIPTION></span> <span flex="0 0 75px" class="ff-right show-xs" translate=DASHBOARD.USER.OUTSTANDING_CHARGES.PRICE></span> <span flex="0 0 75px" class=ff-right translate=DASHBOARD.USER.OUTSTANDING_CHARGES.TOTAL></span> </ff-row> </ff-panel-header> <ff-row ng-repeat="charge in $ctrl.charges" class=animate-collapse> <ff-static flex="0 0 40px" ff-bind=charge.quantity class="ff-center show-xs"></ff-static> <ff-static flex="0 1 280px" ff-bind=charge.name></ff-static> <ff-static flex="1 1 450px" class="ff-small show-sm" ff-bind=charge.description></ff-static> <ff-static flex="0 0 75px" ff-bind="charge.price | ncurrency" class="ff-right show-xs"></ff-static> <ff-static flex="0 0 75px" ff-bind="charge.amount | ncurrency" class=ff-right></ff-static> </ff-row> <div ng-if="$ctrl.charges && !$ctrl.charges.length" class="animate-collapse ff-no-frame"> <span translate=GLOBAL.NONE></span> </div> </ff-panel> </ff-panel> '},cPZt:function(e,s,t){},fsnK:function(e,s,t){"use strict";t.r(s);var a=t("+l1P");s.default=angular.module("deskworks.dashboard.dashAdminReservations",[a.a.name]).directive("dashAdminReservations",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-admin/dash-admin-reservations.tpl.html",controller:"DashAdminReservationsCtrl as $ctrl",bindToController:{reservations:"<",label:"@",settings:"<"},link:function(s,t,a,n,r){var i=this;r((function(){return e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashAdminReservationsCtrl",["$scope","$filter","state","helper",function(e,s,t,a){e.helper=a,this.navigate=function(e){return t.setParam("date",s("date")(e.startTime,"yyyy-MM-ddTHH:mm:ss")),t.setPath("/reservation-calendar")}}])},gaa1:function(e,s){e.exports='<ff-panel> <ff-panel-header> <div class="ff-grid gutter-v-half gutter-h-half"> <span flex=auto><ff-icon sense=message></ff-icon> <span translate=DASHBOARD.USER.MESSAGE_BOARD.HEADER></span></span> <ff-btn flex=none sense=edit size=xs ff-click=$ctrl.toMsg() style="margin:-.6rem 0 .4rem 0" title="{{\'DASHBOARD.USER.MESSAGE_BOARD.BTN_POST\' | translate}}"></ff-btn> </div> </ff-panel-header> <div class=message-board ff-dim=!$ctrl.messages> <ff-row ng-repeat="msg in $ctrl.messages" class="msg-container animate-collapse ff-clickable" ng-click=$ctrl.toMsg(msg)> <div class=msg-ava><ff-img ff-src={{::msg.author.photo}}></ff-img></div> <div> <div> <div class=msg-meta> <span class=msg-name>{{::msg.author.fullName || \'anonymous\'}}</span> <span class=msg-time nice-time=::msg.createdAt></span> <span class=msg-date>{{::msg.createdAt | date: \'mediumDate\'}}</span> </div> <div class=msg-body> {{msg.text}} <more ng-if=msg.crop translate=DASHBOARD.USER.MESSAGE_BOARD.MORE></more> </div> </div> </div> </ff-row> </div> <div ng-if="$ctrl.messages && !$ctrl.messages.length"><span translate=GLOBAL.NONE></span></div> </ff-panel> '},lc1n:function(e,s,t){var a={"./dashboard-admin/dashboard-admin.tpl.html":"nfPb","./dashboard-user/dashboard-user.tpl.html":"SMZY","./widgets-admin/dash-admin-access-code.tpl.html":"PbmZ","./widgets-admin/dash-admin-billing.tpl.html":"vqcV","./widgets-admin/dash-admin-reservation-conflicts.tpl.html":"xttt","./widgets-admin/dash-admin-reservations.tpl.html":"L6E7","./widgets-admin/dash-admin-self-registrations.tpl.html":"3EYM","./widgets-admin/dash-admin-users-checked-in.tpl.html":"I8wp","./widgets-user/dash-general.tpl.html":"24Ie","./widgets-user/dash-members-checked-in.tpl.html":"xcnm","./widgets-user/dash-message-board.tpl.html":"gaa1","./widgets-user/dash-outstanding-charges.tpl.html":"bDmU","./widgets-user/dash-recurring-charges.tpl.html":"a7Fd","./widgets-user/dash-upcoming-reservations.tpl.html":"u32j"};function n(e){var s=r(e);return t(s)}function r(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="lc1n"},nfPb:function(e,s){e.exports='<div id=dashboardAdmin class=dashboard> <h4 class=page-title style=margin-top:2rem;margin-bottom:2rem ng-bind=state.getPageTitle()></h4> <ff-panel ng-if=vm.hideAll> <span translate=DASHBOARD.ADMIN.NO_PERMISSION></span> </ff-panel> <div class="ff-grid gutter-v gutter-h" ng-if=!vm.hideAll> <div flex="{lg: \'0 0 50%\'}"> <div class=gutter-v> <dash-admin-reservations id=dashAdminReservationsToday reservations=vm.centerStats.reservationsToday label=DASHBOARD.ADMIN.RESERVATIONS.TODAY.HEADER settings=vm.settings></dash-admin-reservations> <dash-admin-reservations id=dashAdminReservationsTomorrow reservations=vm.centerStats.reservationsTomorrow label=DASHBOARD.ADMIN.RESERVATIONS.TOMORROW.HEADER settings=vm.settings></dash-admin-reservations> <dash-admin-users-checked-in id=dashAdminUsersCheckedIn nats=vm.nats></dash-admin-users-checked-in> </div> </div> <div flex="{lg: \'0 0 50%\'}"> <div class=gutter-v> <dash-admin-access-code id=dashAdminAccessCode ng-if=vm.settings.enableAccessCodes stats=vm.centerStats class=animate-collapse></dash-admin-access-code> <dash-admin-billing id=dashAdminBilling stats=vm.centerStats settings=vm.settings></dash-admin-billing> <dash-admin-self-registrations id=dashAdminSelfRegistrations users=vm.centerStats.selfRegistrations></dash-admin-self-registrations> </div> </div> <dash-admin-reservation-conflicts id=dashAdminReservationsConflicts ng-if=vm.centerStats.reservationsConflicts.length reservations=vm.centerStats.reservationsConflicts class=animate-collapse> </dash-admin-reservation-conflicts> </div> </div> <div id=dashboardUser class=dashboard ng-if=vm.user> <h4 class=page-title translate=DASHBOARD.ADMIN.USER_DASHBOARD_TITLE style=margin-top:2rem;margin-bottom:2rem translate-values="{ userName: [vm.user.firstName, vm.user.lastName].join(\' \') }"></h4> <div class="ff-grid gutter-v gutter-h"> <div flex="{lg: \'0 0 50%\'}"> <dash-upcoming-reservations id=dashUpcomingReservations settings=vm.settings></dash-upcoming-reservations> </div> <div flex="{lg: \'0 0 50%\'}"> <dash-general id=dashGeneral settings=vm.settings></dash-general> </div> <dash-recurring-charges id=dashRecurringCharges ng-if="vm.user.role !== \'nonMember\'"></dash-recurring-charges> <dash-outstanding-charges id=dashOutstandingCharges></dash-outstanding-charges> <div flex="{md: \'0 0 50%\'}" ng-if="vm.user.role !== \'nonMember\'"> <dash-members-checked-in id=dashMembersCheckedIn nats=vm.nats></dash-members-checked-in> </div> <div flex="{md: \'0 0 50%\'}" ng-if="vm.user.role !== \'nonMember\'"> <dash-message-board id=dashMessageBoard nats=vm.nats></dash-message-board> </div> </div> </div> '},sjTq:function(e,s,t){"use strict";t.r(s);var a=t("0zKI"),n=t.n(a),r=t("NOor"),i=t.n(r),l=t("WSeP"),c=t.n(l);t("cPZt");s.default=angular.module("deskworks.dashboard.dashAdminUsersCheckedIn",["deskworks.userRoles","deskworks.CheckedInUsers"]).directive("dashAdminUsersCheckedIn",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-admin/dash-admin-users-checked-in.tpl.html",controller:"DashAdminUsersCheckedInCtrl as $ctrl",bindToController:{nats:"<"},link:function(s,t,a,n,r){var i=this;r((function(){return e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashAdminUsersCheckedInCtrl",["$scope","$timeout","dwAlerts","state","helper","userRoles","CheckedInUsers",function(e,s,t,a,r,l,f){var o=this;e.helper=r,e.userRoles=l;var d=[];function u(e){var s;if(o.users){var t=i()(r).call(r,o.users,e.id);return e.devices<=0&&t>=0?n()(s=o.users).call(s,t,1):e.devices>0&&t>=0?angular.extend(o.users[t],e):e.devices>0&&t<0?o.users.push(e):void 0}}o.$onInit=function(){f.query(a.getCurrentCenterId()).catch((function(e){return t.error(e,"Failed to query checked-in users.")})).then((function(t){o.users=t,d.push(o.nats.subscribe("API.:siteId.centers.:centerId.checked-in-users.*",u)),s((function(){return e.$broadcast("dwWidget:SpinStop")}))}))},o.$onDestroy=function(){c()(d).call(d,(function(e){return o.nats.unsubscribe(e)}))},o.toUserProfile=function(e){return a.setCurrentUserId(e.id),a.setPath("/profile")}}])},u32j:function(e,s){e.exports='<ff-panel> <ff-panel-header> <ff-icon sense=reservation></ff-icon> <span translate=DASHBOARD.USER.UPCOMING_RESERVATIONS.HEADER></span>: </ff-panel-header> <ff-panel ff-dim=!$ctrl.reservations> <ff-panel-header class=animate-collapse ng-if=$ctrl.reservations.length> <ff-row class=ff-small> <span flex="0 1 120px" class=ff-right translate=DASHBOARD.USER.UPCOMING_RESERVATIONS.DATE></span> <span flex="0 1 160px" class=ff-center translate=DASHBOARD.USER.UPCOMING_RESERVATIONS.TIME></span> <span flex="1 1 230px" translate=DASHBOARD.USER.UPCOMING_RESERVATIONS.SPACE></span> <span flex="0 1 100px" class=ff-center translate=DASHBOARD.USER.UPCOMING_RESERVATIONS.ACCESS_CODE ng-if=$ctrl.settings.enableAccessCodes></span> </ff-row> </ff-panel-header> <ff-row ng-repeat="reservation in $ctrl.reservations" class=animate-collapse> <ff-static flex="0 1 120px" class=ff-right ff-bind="reservation.from | date:\'mediumDate\'"></ff-static> <ff-static flex="0 1 160px" class=ff-center> <span><span nice-time=reservation.from></span> - <span nice-time=reservation.to></span></span> </ff-static> <ff-static flex="1 1 230px" ff-bind=reservation.reservationUnitName></ff-static> <ff-static flex="0 1 100px" class=ff-center ff-bind=reservation.accessCode ng-if=$ctrl.settings.enableAccessCodes></ff-static> </ff-row> <div ng-if="$ctrl.reservations && !$ctrl.reservations.length" class="animate-collapse ff-no-frame"> <span translate=GLOBAL.NONE></span> </div> </ff-panel> </ff-panel> '},vqcV:function(e,s){e.exports='<ff-panel ng-if="$ctrl.stats.incomeThisMonth !== undefined || $ctrl.stats.accountsReceivable !== undefined || $ctrl.stats.creditCardsToExpire.length" class=animate-collapse> <ff-panel-header> <ff-icon sense=billing></ff-icon> <span translate=DASHBOARD.ADMIN.BILLING_INFO.HEADER></span>: </ff-panel-header> <div class=gutter-v-half> <div> <ff-row class=ff-clickable ng-click=$ctrl.toIncomeReport() ff-dim ng-if="$ctrl.stats.incomeThisMonth !== undefined" title="{{\'DASHBOARD.ADMIN.BILLING_INFO.INCOME.NAV_TITLE\' | translate}}"> <ff-static> <span class=em> <span translate=DASHBOARD.ADMIN.BILLING_INFO.INCOME></span>: {{$ctrl.stats.incomeThisMonth | ncurrency}} </span> </ff-static> </ff-row> <ff-row class=ff-clickable ng-click=$ctrl.toAccountsReceivableReport() ff-dim ng-if="$ctrl.stats.accountsReceivable !== undefined" title="{{\'DASHBOARD.ADMIN.BILLING_INFO.ACCOUNTS_RECEIVABLE.NAV_TITLE\' | translate}}"> <ff-static> <span class=em> <span translate=DASHBOARD.ADMIN.BILLING_INFO.ACCOUNTS_RECEIVABLE></span>: {{$ctrl.stats.accountsReceivable | ncurrency}} </span> </ff-static> </ff-row> </div> <ff-panel ng-if="$ctrl.stats.creditCardsToExpire.length > 0"> <ff-panel-header><span translate=DASHBOARD.ADMIN.BILLING_INFO.CC_EXPIRE></span></ff-panel-header> <ff-row ng-repeat="cc in ::$ctrl.stats.creditCardsToExpire" class=ff-clickable ng-click=$ctrl.toBillingProfile(cc) ff-dim title="{{\'DASHBOARD.ADMIN.BILLING_INFO.CC_EXPIRE.NAV_TITLE\' | translate}}"> <ff-static flex="0 1 180px" class="ff-center no-crop" ff-style="{ \'padding-left\': \'15px\' }"> <ff-hint hint-type=danger style=position:absolute;left:5px;top:50%;transform:translateY(-50%) ng-if=cc.defaultPaymentMethod ng-click=$event.stopPropagation() title=""> <span translate=DASHBOARD.ADMIN.BILLING_INFO.CC_EXPIRE.DEFAULT_PAYMENT_METHOD></span> </ff-hint> {{::cc.number}} </ff-static> <ff-static flex="1 1 410px" ff-bind="::helper.join([cc.userCompany, cc.userName], \', \')"></ff-static> </ff-row> </ff-panel> </div> </ff-panel> '},"w+ol":function(e,s,t){},xcnm:function(e,s){e.exports='<ff-panel class="dash-widget-members-checked-in ff-no-frame"> <ff-panel-header> <ff-icon sense=user></ff-icon> <span translate=DASHBOARD.ADMIN.USERS_CHECKED_IN.HEADER></span>: </ff-panel-header> <ff-panel ff-dim=!$ctrl.users> <div class=ff-grid> <ff-row class="ff-small ff-clickable animate-collapse" ff-dim flex="{sm: \'0 0 50%\'}" ng-repeat="user in $ctrl.users" ng-click=$ctrl.view(user)> <ff-static class=dash-avatar> <ff-img ff-src={{::user.photo}} ng-if=::user.photo></ff-img> <i class="fa fa-user" ng-if=::!user.photo></i> </ff-static> <ff-static> <div> <div><strong>{{::user.name}}</strong></div> <small>{{::user.company}}</small> </div> </ff-static> </ff-row> </div> <div ng-if="$ctrl.users && !$ctrl.users.length" class="animate-collapse ff-no-frame"> <span translate=DASHBOARD.ADMIN.USERS_CHECKED_IN.EMPTY></span> </div> </ff-panel> </ff-panel> '},xttt:function(e,s){e.exports='<ff-panel> <ff-panel-header> <ff-icon sense=warning></ff-icon> <span translate=DASHBOARD.ADMIN.RESERVATION_CONFLICTS.HEADER></span>: </ff-panel-header> <div> <div ng-if=!$ctrl.reservations.length class=animate-collapse> <span translate=DASHBOARD.ADMIN.RESERVATION_CONFLICTS.EMPTY></span> </div> <div style=display:flex ng-repeat-start="reservation in $ctrl.reservations" class=animate-collapse> <ff-row flex="1 1 auto" class=ff-clickable ng-click=$ctrl.navigate(reservation) ff-dim title="{{\'DASHBOARD.ADMIN.RESERVATION_CONFLICTS.NAV_TITLE\' | translate}}"> <ff-static flex="0 1 260px" class=ff-center> <span> <span ng-bind="::reservation.startTime | date:\'mediumDate\'"></span>&nbsp;&nbsp; <span nice-time=::reservation.startTime></span> - <span nice-time=::reservation.endTime></span> </span> </ff-static> <ff-static flex="0 1 200px" ff-bind=::reservation.reservationUnitName></ff-static> <ff-static flex="1 1 400px" ff-bind=::reservation.errorMessage></ff-static> </ff-row> <ff-btn-group style=align-self:center;margin-top:-2px> <ff-btn sense=reset size=xs flex="0 0 auto" ff-click=$ctrl.reset(reservation) title="{{\'DASHBOARD.ADMIN.RESERVATION_CONFLICTS.RESET_BTN_TITLE\' | translate}}">Reset</ff-btn> </ff-btn-group> </div> <ff-row ng-repeat-end ng-if=::reservation.reservationNote class=animate-collapse> <ff-label> <span> <ff-icon sense=info class=ff-flex-start></ff-icon> {{::reservation.reservationNote}} </span> </ff-label> </ff-row> </div> </ff-panel> '},zKnN:function(e,s,t){"use strict";t.r(s);var a=t("+l1P");s.default=angular.module("deskworks.dashboard.upcomingReservations",["deskworks.reservationService",a.a.name]).directive("dashUpcomingReservations",["helper",function(e){return{restrict:"EAC",scope:!0,transclude:"element",templateUrl:"widgets-user/dash-upcoming-reservations.tpl.html",controller:"DashUpcomingReservationsCtrl as $ctrl",bindToController:{settings:"<"},link:function(s,t,a,n,r){var i=this;r((function(){e.transcludeElement(s,t,a,i.templateUrl,i.bindToController)}))}}}]).controller("DashUpcomingReservationsCtrl",["$scope","dwAlerts","state","helper","reservationService",function(e,s,t,a,n){var r=this;r.$onInit=function(){var e={centerId:t.getCurrentCenterId(),userId:t.getCurrentUserId(),from:moment()};n.query(e).catch((function(e){return s.error(e,"Failed to query reservations.")})).then((function(e){return r.reservations=e}))}}])}}]);