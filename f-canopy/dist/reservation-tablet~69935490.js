(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"12k6":function(e,t,n){"use strict";n.r(t);n("Muwe"),n("y89P");t.default=angular.module("deskworks.ReservationTabletSignInCtrl",["flexForms","deskworks.state","deskworks.dwSignIn"]).controller("ReservationTabletSignInCtrl",["$scope","$translate","state",function(e,t,n){n.setPageTitle(t.instant("SIGN_IN.PAGE_TITLE")),e.$on("dwSignIn:SignIn",(function(e){return e.stopPropagation(),n.replace().setPath("/reservation-tablet-wizard/reserve")})),this.goBack=function(){return n.replace().setPath("/reservation-tablet-wizard")}}])},"1Xgu":function(e,t,n){},EkPe:function(e,t){e.exports='<form name=$ctrl.form id=reservationTabletSchedule> <div class=animate-collapse ng-if=state.getPageTitle()> <h1 class=page-title>{{state.getPageTitle()}}</h1> </div> <div class=animate-collapse ng-if=!state.getPageTitle() style=height:1rem></div> <div class="ff-grid gutter-v"> <ff-panel ff-dim=!$ctrl.unit> <ff-header class=animate-collapse ng-if=$ctrl.unit> <ff-row> <cell flex="0 1 160px"><span translate=GLOBAL.TIME></span></cell> <cell flex="1 1 210px"><span translate=GLOBAL.COMPANY></span> / <span translate=GLOBAL.NAME></span></cell> <cell flex="1 1 210px"><span translate=GLOBAL.TITLE></span></cell> </ff-row> </ff-header> <ff-row ng-repeat="res in $ctrl.unit.reservations | orderBy:\'from\'" class=animate-collapse> <ff-static flex="0 1 160px"><span><span nice-time=::res.from></span> - <span nice-time=::res.to></span></span></ff-static> <ff-static flex="1 1 210px"> <span> <div class=rt-company ng-if=::res.userCompany>{{::res.userCompany}}</div> <div>{{::res.userName}}</div> </span> </ff-static> <ff-static flex="1 1 210px">{{::res.title}}</ff-static> </ff-row> </ff-panel> <ff-btn-group> <ff-btn sense=reserve ff-click=$ctrl.reserve()><span translate=RESERVATION_TABLET.BNT_MAKE_RESERVATION></span></ff-btn> </ff-btn-group> </div> </form> '},"F+j4":function(e,t,n){"use strict";n.r(t);n("bOPx"),n("1Xgu"),n("OVVd");t.default=angular.module("deskworks.ReservationTabletReserveCtrl",["deskworks.state","deskworks.resReservation","resTablet"]).controller("ReservationTabletReserveCtrl",["$scope","$translate","$timeout","state","helper","session","resTablet",function(e,t,n,r,a,s,i){var o=this;function l(){o.header=o.header||document.querySelector("header.header"),o.container=o.container||angular.element(document.querySelector(".res-reservation-tablet")),o.container.css("max-height","calc(100vh - ".concat(o.header.offsetHeight,"px)"))}o.next=function(){return i.resetParams(),r.setPath("/reservation-tablet-wizard/complete")},o.signOut=function(){return i.signOut()},o.stopWizard=function(){if(s.isAdmin())return r.resetParams(),r.setPath("/reservation-tablet-setup")},o.isAdmin=s.isAdmin,o.logo=document.querySelector(".header-logo img"),o.banner=document.querySelector(".header-banner img"),o.logo.addEventListener("load",l),o.banner.addEventListener("load",l),n((function(){return l()})),e.$on("$destroy",(function(){return o.logo.removeEventListener("load",l),void o.banner.removeEventListener("load",l)}))}])},IoQK:function(e,t,n){"use strict";n.r(t);n("JBxO"),n("FdtR");var r=n("0zKI"),a=n.n(r),s=n("NOor"),i=n.n(s),o=n("7pN8"),l=n.n(o),c=n("WSeP"),u=n.n(c),f=n("nbuU"),d=n.n(f),p=n("6RpP"),v=n.n(p),g=n("YtL8"),T=n.n(g),m=(n("1Xgu"),n("+l1P"));t.default=angular.module("deskworks.ReservationTabletScheduleCtrl",["session","deskworks.state",m.a.name]).controller("ReservationTabletScheduleCtrl",["$scope","$translate","$q","$interval","$localStorage","dwAlerts","state","helper","session","calendarService",function(e,t,n,r,s,o,c,f,p,g){var m=this;s.reservationTablet=s.reservationTablet||{};var b=s.reservationTablet;c.setPageTitle(t.instant("RESERVATION_TABLET.SCHEDULE.PAGE_TITLE",{unit:b.unitName})),m.reserve=function(){return c.setCurrentCenterId(b.centerId),c.setParam("unit",b.unitId),c.setPath("/reservation-tablet-wizard/reserve")},m.fetch=function(e){if(r.cancel(m.timer),!m.fetching||e)return m.fetching=!0,p.loginSilent(b.login,b.password).catch((function(e){return o.error(e,"Failed to log in by system user.")})).then((function(){return g.query(b.centerId).catch((function(e){return o.error(e,"Failed to get calendar data.")}))})).then((function(e){return T()(e).call(e,(function(e,t){return v()(e).call(e,t.reservationUnits)}),[])})).then((function(e){var t=d()(e).call(e,(function(e){return e.id===b.unitId}));return t||o.error("Reservation unit not found.")})).then((function(e){var n,r;m.unit=m.unit||{reservations:[]},m.unit.name=e.name,u()(n=e.reservations).call(n,(function(e){var t;if(!(e.to<l()())){var n=i()(t=m.unit.reservations).call(t,(function(t){return t.id===e.id}));n>=0?angular.copy(e,m.unit.reservations[n]):m.unit.reservations.push(e)}})),u()(r=m.unit.reservations).call(r,(function(t,n){var r,s;d()(r=e.reservations).call(r,(function(e){return e.id===t.id}))||a()(s=m.unit.reservations).call(s,n,1)})),b.unitName=m.unit.name,c.setPageTitle(t.instant("RESERVATION_TABLET.SCHEDULE.PAGE_TITLE",{unit:b.unitName}))})).finally((function(){m.fetching=!1,r.cancel(m.timer),m.timer=r(m.fetch,6e4)})).finally((function(){return p.logout()}))},m.fetch(),e.$on("$destroy",(function(){return r.cancel(m.timer)}))}])},OVVd:function(e,t,n){"use strict";n.r(t),t.default=angular.module("resTablet",["session","deskworks.state","deskworks.dwAlerts.service"]).factory("resTablet",["session","state","dwAlerts",function(e,t,n){return{signOut:function(){return e.logout().catch((function(e){return n.error(e,"Failed to terminate session.")})).then((function(){return r()})).then((function(){return t.setPath("/reservation-tablet-wizard")}))},resetParams:r};function r(){t.setParam("date",null),t.setParam("start",null),t.setParam("end",null),t.setParam("title",null),t.setParam("note",null),t.setParam("freq",null),t.setParam("duration",null),t.setParam("confirm",null)}}])},cVEE:function(e,t,n){var r={"./reservation-tablet-setup/setup.tpl.html":"e1WB","./reservation-tablet-wizard/01-schedule.tpl.html":"EkPe","./reservation-tablet-wizard/02-sign-in.tpl.html":"iEtI","./reservation-tablet-wizard/03-reserve.tpl.html":"pySg","./reservation-tablet-wizard/04-complete.tpl.html":"ruFd"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="cVEE"},day0:function(e,t,n){"use strict";n.r(t);n("Muwe"),n("y89P");var r=n("WSeP"),a=n.n(r),s=n("lRNC"),i=n.n(s),o=n("yCd9"),l=n.n(o),c=["$injector",function(e){var t,r,s=(t=n("fChp"),l()(r=i()(t).call(t)).call(r,t));e.loadNewModules(l()(s).call(s,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t,r=n("cVEE");a()(t=i()(r).call(r)).call(t,(function(t){return e.put(t.replace(/^\.\//,""),r(t))}))}])}];t.default=c},e1WB:function(e,t){e.exports='<form name=$ctrl.form id=reservationTabletSetup ff-bulk-read-only> <h1 class=page-title>{{state.getPageTitle()}}</h1> <ff-panel style=max-width:600px> <label class=ff-row> <ff-label flex="0 1 180px"><span translate=RESERVATION_TABLET.RESERVATION_CATEGORY></span></ff-label> <ff-select flex="1 1 320px" name=reservationCategory ff-model=$ctrl.category ff-required=true ff-options="cat.name for cat in $ctrl.categories" ff-change=$ctrl.onCategoryChange()></ff-select> </label> <label class=ff-row> <ff-label flex="0 1 180px"><span translate=RESERVATION_TABLET.RESERVATION_UNIT></span></ff-label> <ff-select flex="1 1 320px" name=reservationUnit ff-model=$ctrl.unit ff-required=true ff-options="unit.name for unit in $ctrl.category.reservationUnits"></ff-select> </label> <ff-row> <ff-label><span> <span translate=RESERVATION_TABLET.START_WIZARD></span> <ff-hint><span translate=RESERVATION_TABLET.START_WIZARD.HINT></span></ff-hint> </span></ff-label> <ff-btn flex=none sense=ok size=sm class=buttons-row ff-click=$ctrl.start()> <span translate=RESERVATION_TABLET.BTN_START></span> </ff-btn> </ff-row> </ff-panel> </form> '},fChp:function(e,t,n){var r={"./reservation-tablet-setup/setup.controller.js":"yJ0o","./reservation-tablet-wizard/01-schedule.controller.js":"IoQK","./reservation-tablet-wizard/02-sign-in.controller.js":"12k6","./reservation-tablet-wizard/03-reserve.controller.js":"F+j4","./reservation-tablet-wizard/04-complete.controller.js":"oVwT","./reservation-tablet-wizard/res-tablet.service.js":"OVVd"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="fChp"},iEtI:function(e,t){e.exports="<dw-sign-in id=signIn> <extra-buttons> <ff-btn sense=back ff-click=$ctrl.goBack() ff-countdown=20><span translate=GLOBAL.BTN_BACK></span></ff-btn> </extra-buttons> </dw-sign-in> "},oVwT:function(e,t,n){"use strict";n.r(t);n("OVVd");t.default=angular.module("deskworks.ReservationTabletCompleteCtrl",["deskworks.state","resTablet"]).controller("ReservationTabletCompleteCtrl",["$translate","state","helper","resTablet",function(e,t,n,r){t.setPageTitle(e.instant("RESERVATION_TABLET.COMPLETE.PAGE_TITLE")),this.signOut=function(){return r.signOut()},this.reserve=function(){return r.resetParams(),t.setPath("/reservation-tablet-wizard/reserve")}}])},pySg:function(e,t){e.exports='<res-reservation center=$resolve.center user=$resolve.user cal-data=$resolve.calData hide-reservation-cost-estimate=true hide-calendar-btn=true after-save=$ctrl.next sign-out=$ctrl.signOut stop-wizard="$ctrl.isAdmin() ? $ctrl.stopWizard : null" reservation-fields=$resolve.reservationFields class=res-reservation-tablet></res-reservation> '},ruFd:function(e,t){e.exports="<form name=$ctrl.form id=reservationTabletComplete> <h1 class=page-title>{{state.getPageTitle()}}</h1> <ff-btn-group> <ff-btn sense=signOut ff-click=$ctrl.signOut() ff-countdown=20><span translate=GLOBAL.BTN_SIGN_OUT></span></ff-btn> <ff-btn sense=reserve ff-click=$ctrl.reserve()><span translate=RESERVATION_TABLET.BNT_MAKE_ANOTHER_RESERVATION></span></ff-btn> </ff-btn-group> </form> "},yJ0o:function(e,t,n){"use strict";n.r(t);var r=n("nbuU"),a=n.n(r);t.default=angular.module("deskworks.ReservationTabletSetupCtrl",["session","deskworks.state","deskworks.Credentials"]).controller("ReservationTabletSetupCtrl",["$scope","$translate","$localStorage","dwAlerts","state","helper","session","categories","Credentials",function(e,t,n,r,s,i,o,l,c){var u=this;s.setPageTitle(t.instant("RESERVATION_TABLET.SETUP.PAGE_TITLE")),n.reservationTablet=n.reservationTablet||{};var f,d,p=n.reservationTablet;(u.categories=l,u.categories.length)&&(u.category=p.categoryId&&a()(f=u.categories).call(f,(function(e){return e.id===p.categoryId}))||u.categories[0],u.unit=p.unitId&&a()(d=u.category.reservationUnits).call(d,(function(e){return e.id===p.unitId}))||u.category.reservationUnits[0]);u.onCategoryChange=function(){return u.unit=u.category?u.category.reservationUnits[0]:null},u.start=function(){if(!i.pointFirstInvalid("#reservationTabletSetup"))return c.get("$$reservations").catch((function(e){return r.error(e,"Failed to get credentials.")})).then((function(e){p.centerId=s.getCurrentCenterId(),p.login=e.login,p.password=e.password,p.unitId=u.unit.id,p.unitName=u.unit.name,n.$apply()})).then((function(){return o.logout()})).then((function(){return s.setPath("/reservation-tablet-wizard")}))}}])}}]);