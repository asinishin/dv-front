(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"+G0p":function(e,t){e.exports='<div class="rc-scroller"> <div class="rc-header-hint gutter-h-half" ng-if="$ctrl.showPricing"> <span class="rc-header-hint-center"><span>{{$ctrl.getCenterName()}}</span></span> <span class="rc-header-hint-hint"><span><ff-icon sense="info"></ff-icon> <span translate="RESERVATIONS.CALENDAR.HINT"></span></span></span> </div> <rt-header></rt-header> <rt-layer-background class="rc-layer" ng-style="{ width: +$ctrl.modes[$ctrl.mode].width + 40 + \'px\', height: $ctrl.gridHeight + \'px\' }"></rt-layer-background> <rt-layer-availability ng-style="{ width: $ctrl.modes[$ctrl.mode].width + \'px\', height: $ctrl.gridHeight + \'px\' }"></rt-layer-availability> <rt-layer-buffers ng-style="{ width: $ctrl.modes[$ctrl.mode].width + \'px\', height: $ctrl.gridHeight + \'px\' }"></rt-layer-buffers> <rt-layer-reservations ng-style="{ width: $ctrl.modes[$ctrl.mode].width + \'px\', height: $ctrl.gridHeight + \'px\' }"></rt-layer-reservations> <rt-layer-grid-h ng-style="{ width: $ctrl.modes[$ctrl.mode].width + \'px\', height: $ctrl.gridHeight + \'px\' }"></rt-layer-grid-h> <rt-layer-grid-v ng-style="{ width: $ctrl.modes[$ctrl.mode].width + \'px\', height: $ctrl.gridHeight + \'px\' }"></rt-layer-grid-v> <rt-layer-grid-b ng-style="{ width: $ctrl.modes[$ctrl.mode].width + \'px\', height: $ctrl.gridHeight + \'px\' }"></rt-layer-grid-b> <rt-layer-active ng-style="{ width: $ctrl.modes[$ctrl.mode].width + \'px\', height: $ctrl.gridHeight + \'px\' }"></rt-layer-active> </div> <div class="ff-spin ff-spin-placeholder" style="top:-131px" ng-if="!$ctrl.calData"></div> '},"12k6":function(e,t,r){"use strict";r.r(t);r("Muwe"),r("y89P");t.default=angular.module("deskworks.ReservationTabletSignInCtrl",["flexForms","deskworks.state","deskworks.dwSignIn"]).controller("ReservationTabletSignInCtrl",["$scope","$translate","state",function(e,t,r){r.setPageTitle(t.instant("SIGN_IN.PAGE_TITLE")),e.$on("dwSignIn:SignIn",(function(e){return e.stopPropagation(),r.replace().setPath("/reservation-tablet-wizard/reserve")})),this.goBack=function(){return r.replace().setPath("/reservation-tablet-wizard")}}])},"1Xgu":function(e,t,r){},"1zfb":function(e,t,r){},"23wd":function(e,t,r){"use strict";r.r(t);var a=r("hsT8"),n=r.n(a),l=r("6RpP"),i=r.n(l),o=(r("lYjL"),r("3dw1"),r("JBxO"),r("FdtR"),r("Muwe"),r("y89P"),r("1zfb"),r("+G0p")),s=r.n(o),c=r("G5Td"),d=r("qsy7"),f=r("ECOP"),u=r("Quiy"),m=r("XzTy"),v=r("Pdm5"),p=r("Qjvx"),g=r("Ltq6");t.default=angular.module("deskworks.rtCalendar",["deskworks.rcHelper","deskworks.calendarService",c.default.name,d.default.name,f.default.name,u.default.name,m.default.name,v.default.name,p.default.name,g.default.name]).directive("rtCalendar",(function(){return{template:s.a,scope:!0,controller:"RtCalendarController as $ctrl",bindToController:{settings:"<"}}})).controller("RtCalendarController",["$element","$scope","$filter","$timeout","$interval","$localStorage","helper","rcHelper","state","dwAlerts","calendarService",function(e,t,r,a,l,o,s,c,d,f,u){var m=this;o.reservationTablet=o.reservationTablet||{};var v=o.reservationTablet;m.$onInit=function(){m.rowHeight=36,m.rowGroupHeaderHeight=20,m.modes={day:{minWidth:1400,maxWidth:2400},week:{minWidth:1600,maxWidth:3600}},a((function(){m.modes.day.width=1670,m.modes.week.width=2400})),m.mode=d.getParam("mode")||"day",m.filter=d.getParam("filter")||"available",m.role=d.getParam("role"),t.$watch("$ctrl.mode",(function(e){d.setParam("mode",e).replace()})),t.$watch("$ctrl.filter",(function(e){d.setParam("filter",e).replace()})),t.$watch("$ctrl.role",(function(e){d.setParam("role",e||null).replace()}))},m.$onDestroy=function(){l.cancel(m.timer)},m.getCenterName=function(){return(d.getCurrentCenter()||{}).name},t.$watch("$ctrl.mode",(function(){var t;e.toggleClass("mode-day","day"===m.mode),e.toggleClass("mode-week","day"!==m.mode),t=c.floorDate(moment(),30),a((function(){document.querySelector(".rc-scroller").scrollLeft=Math.floor(m.modes[m.mode].width*m.dateToX(t-144e5)/100)}))})),t.$watchGroup([function(){return r("date")(moment(),"yyyy-MM-dd")},function(){return d.getCurrentCenterId()}],(function(){m.reservations=[],m.availabilities=[],m.fetch(!0)})),t.$watchGroup(["$ctrl.calData","$ctrl.filter","$ctrl.mode"],(function(e,t){var r,a;(m.reservations=[],m.availabilities=[],m.staffOnly=[],m.reservationTypes=[],angular.isArray(m.calData))&&(m.calData.forEach((function(e){var t=angular.extend({},e);t.reservationUnits=[],e.reservationUnits.forEach((function(e){var r,a;e.id===+d.getParam("unit")&&(e.availabilities=[{from:moment().startOf("day"),to:moment().startOf("day").add(1,"day")}]);var l,o,s=n()(r=e.reservations).call(r,(function(r){if(c.checkIntersection(r.from,r.to,m.getCalStartDate(),m.getCalEndDate()))return r.reservationType=t,r.reservationUnit=e,!0})),f=n()(a=e.availabilities).call(a,(function(r){if(c.checkIntersection(r.from,r.to,m.getCalStartDate(),m.getCalEndDate()))return r.reservationType=t,r.reservationUnit=e,!0}));e.id===+d.getParam("unit")&&(m.reservations=i()(l=m.reservations).call(l,s),m.availabilities=i()(o=m.availabilities).call(o,f),t.reservationUnits.push(e),f.length||"staffOnly"!==e.whoCanReserve||m.staffOnly.push(e))})),t.reservationUnits.length&&m.reservationTypes.push(t)})),r=m.reservationTypes,a=0,r.forEach((function(e){e.top=a,a+=m.rowGroupHeaderHeight-1,e.reservationUnits.forEach((function(e){e.top=a,a+=m.rowHeight-1}))})),m.gridHeight=a)})),m.getCalStartDate=function(){return("week"===m.mode?c.weekStart(moment()):moment()).hour(0).minute(0).second(0).millisecond(0)},m.getCalEndDate=function(){return("week"===m.mode?c.weekEnd(moment()):moment()).hour(24).minute(0).second(0).millisecond(0)},m.dateToX=function(e){var t=m.getCalStartDate();return 100*(e-t)/(m.getCalEndDate()-t)},m.fetch=function(e){if(l.cancel(m.timer),!m.fetching||e){return m.fetching=!0,u.query(v.centerId).then((function(e){m.calData=e})).catch((function(e){return f.error(e,"Failed to fetch calendar data.")})).finally((function(){m.fetching=!1,l.cancel(m.timer),m.timer=l(m.fetch,6e4)}))}}}])},"2w0L":function(e,t,r){},"31LX":function(e,t,r){},"777Z":function(e,t,r){},AtBm:function(e,t,r){"use strict";r.r(t);r("31LX");t.default=angular.module("deskworks.rtReservation",["deskworks.appDim"]).component("rtReservation",{template:"",controller:"RtReservationController",require:{$rcCalendar:"^^rtCalendar",ffBlock:"^^?ffBulkReadOnly"},bindings:{reservation:"<"}}).controller("RtReservationController",["$element","$scope","$translate","rcHelper","state","appDim",function(e,t,r,a,n,l){var i=this;i.$onInit=function(){e.attr("title",r.instant("RESERVATIONS.CALENDAR.RESERVED.HINT")),i.reservation.userId==n.getCurrentUserId()&&e.addClass("own"),i.ffBlock&&!i.ffBlock.editMode||e.on("click",(function(e){i.onClick(e),t.$apply()}))},i.$onDestroy=function(){e.off("click")},i.onClick=function(e){if(n.isLoggedAdmin()||i.reservation.userId==n.getCurrentUserId())return l(!0),n.setParam("date",a.dateToStr(i.reservation.from)),n.setPath("/edit-reservation/"+i.reservation.id)},t.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.filter"],(function(){i.from=Math.max(i.reservation.from,i.$rcCalendar.getCalStartDate()),i.to=Math.min(i.reservation.to,i.$rcCalendar.getCalEndDate());var t=i.$rcCalendar.dateToX(i.from),r=i.$rcCalendar.dateToX(i.to)-t;e.css("top",i.reservation.reservationUnit.top+"px"),e.css("height",i.$rcCalendar.rowHeight+"px"),e.css("left",t+"%"),e.css("width",r+"%")}))}])},ECOP:function(e,t,r){"use strict";r.r(t);r("777Z");t.default=angular.module("deskworks.rtLayerGridV",[]).component("rtLayerGridV",{template:'<div class="rc-borders-v" ng-repeat="x in $ctrl.vgrid" ng-style="{ left: x + \'%\' }"></div>',controller:"RtLayerGridVController",require:{$rcCalendar:"^rtCalendar"}}).controller("RtLayerGridVController",["$element","$scope",function(e,t){var r=this;r.$onInit=function(){e.addClass("rc-layer")},t.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.getCalStartDate().valueOf()"],(function(){var e,t=r.$rcCalendar.getCalStartDate(),a=r.$rcCalendar.getCalEndDate(),n="week"===r.$rcCalendar.mode?3:.5;for(r.vgrid=[],e=t.clone();e<=a;e.add(.5,"h"))(e.hour()+e.minute()/60)%n==0&&r.vgrid.push(r.$rcCalendar.dateToX(e))}))}])},EkPe:function(e,t){e.exports='<form name="$ctrl.form" id="reservationTabletSchedule"> <div class="animate-collapse" ng-if="state.getPageTitle()"> <h1 class="page-title">{{state.getPageTitle()}}</h1> </div> <div class="animate-collapse" ng-if="!state.getPageTitle()" style="height:1rem"></div> <rt-calendar settings="$resolve.settings" style="height:180px"></rt-calendar> </form> '},"F+j4":function(e,t,r){"use strict";r.r(t);r("bOPx"),r("1Xgu"),r("OVVd");t.default=angular.module("deskworks.ReservationTabletReserveCtrl",["deskworks.state","deskworks.resReservation","resTablet"]).controller("ReservationTabletReserveCtrl",["$scope","$translate","$timeout","state","helper","session","resTablet",function(e,t,r,a,n,l,i){var o=this;function s(){o.header=o.header||document.querySelector("header.header"),o.container=o.container||angular.element(document.querySelector(".res-reservation-tablet")),o.container.css("max-height","calc(100vh - ".concat(o.header.offsetHeight,"px)"))}o.next=function(){return i.resetParams(),a.setPath("/reservation-tablet-wizard/complete")},o.signOut=function(){return i.signOut()},o.stopWizard=function(){if(l.isAdmin())return a.resetParams(),a.setPath("/reservation-tablet-setup")},o.isAdmin=l.isAdmin,o.logo=document.querySelector(".header-logo img"),o.banner=document.querySelector(".header-banner img"),o.logo.addEventListener("load",s),o.banner.addEventListener("load",s),r((function(){return s()})),e.$on("$destroy",(function(){return o.logo.removeEventListener("load",s),void o.banner.removeEventListener("load",s)}))}])},G5Td:function(e,t,r){"use strict";r.r(t);r("oQfR");var a=r("o/dK"),n=r.n(a),l=r("+l1P");t.default=angular.module("deskworks.rcHeader",[l.a.name]).component("rtHeader",{template:n.a,controller:"RtHeaderController",require:{$rcCalendar:"^rtCalendar"}}).controller("RtHeaderController",["$element","$scope","$locale",function(e,t,r){var a=this;a.$onInit=function(){a.weekTimeFormat=24===r.timeFormat?"H":"h"},t.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.getCalStartDate().valueOf()"],(function(){var e,t,r=a.$rcCalendar.getCalStartDate(),n=a.$rcCalendar.getCalEndDate();for(t="week"===a.$rcCalendar.mode?1:.5,a.vgrid=[],e=r.clone();e<=n;e.add(t,"h"))a.vgrid.push(a.$rcCalendar.dateToX(e));a.times=[];var l="week"===a.$rcCalendar.mode?"isBefore":"isSameOrBefore";for(e=r.clone();e[l](n);e.add(1,"h"))"week"===a.$rcCalendar.mode&&e.hour()%2!=0||a.times.push({x:a.$rcCalendar.dateToX(e),time:e.clone(),highlight:"week"===a.$rcCalendar.mode||e.hour()%12==0});if("week"===a.$rcCalendar.mode)for(a.weekdays=[],e=r.clone();e<n;e.add(1,"d"))a.weekdays.push({x:a.$rcCalendar.dateToX(e),width:a.$rcCalendar.dateToX(e.clone().add(1,"d"))-a.$rcCalendar.dateToX(e),time:e.clone()})}))}])},IoQK:function(e,t,r){"use strict";r.r(t);r("1Xgu");var a=r("+l1P"),n=r("23wd");t.default=angular.module("deskworks.ReservationTabletScheduleCtrl",["session","deskworks.state",a.a.name,n.default.name]).controller("ReservationTabletScheduleCtrl",["$scope","$translate","$q","$interval","$localStorage","dwAlerts","state",function(e,t,r,a,n,l,i){n.reservationTablet=n.reservationTablet||{};var o=n.reservationTablet;i.setPageTitle(t.instant("RESERVATION_TABLET.SCHEDULE.PAGE_TITLE",{unit:o.unitName})),this.reserve=function(){return i.setCurrentCenterId(o.centerId),i.setParam("unit",o.unitId),i.setPath("/reservation-tablet-wizard/reserve")}}])},Ltq6:function(e,t,r){"use strict";r.r(t);var a=r("XH2C"),n=r.n(a),l=r("dfd5"),i=r("dM42"),o=r("AtBm"),s=r("V/c9");t.default=angular.module("deskworks.rtLayerActive",[l.default.name,i.default.name,o.default.name,s.default.name]).component("rtLayerActive",{template:n.a,controller:"RtLayerActiveController",require:{$rcCalendar:"^rtCalendar"}}).controller("RtLayerActiveController",["$element","$scope","$locale","$translate",function(e,t,r,a){var n=this;n.$onInit=function(){e.addClass("rc-layer"),e.attr("title",a.instant("RESERVATIONS.CALENDAR.NOT_AVAILABLE.HINT")),n.markerTimeFormat=24===r.timeFormat?"HH:mm":"hh:mm"},n.onClickHint=function(e){e.preventDefault(),e.stopPropagation()}}])},OVVd:function(e,t,r){"use strict";r.r(t),t.default=angular.module("resTablet",["session","deskworks.state","deskworks.dwAlerts.service"]).factory("resTablet",["session","state","dwAlerts",function(e,t,r){return{signOut:function(){return e.logout().catch((function(e){return r.error(e,"Failed to terminate session.")})).then((function(){return a()})).then((function(){return t.setPath("/reservation-tablet-wizard")}))},resetParams:a};function a(){t.setParam("date",null),t.setParam("start",null),t.setParam("end",null),t.setParam("title",null),t.setParam("note",null),t.setParam("freq",null),t.setParam("duration",null),t.setParam("confirm",null)}}])},PXs0:function(e,t,r){},Pdm5:function(e,t,r){"use strict";r.r(t);var a=r("dM42");t.default=angular.module("deskworks.rtLayerBuffers",[a.default.name,"deskworks.userRoles","session"]).component("rtLayerBuffers",{template:'<rt-buffer ng-if="$ctrl.isVisible()" ng-repeat="reservation in $ctrl.$rcCalendar.reservations" reservation="reservation"></rt-buffer>',controller:"RtLayerBuffersController",require:{$rcCalendar:"^rtCalendar"}}).controller("RtLayerBuffersController",["$element","$scope","userRoles","session",function(e,t,r,a){var n=this;n.$onInit=function(){e.addClass("rc-layer")},n.isVisible=function(){return n.$rcCalendar.role?"admin"!==(r[n.$rcCalendar.role]||{}).type:!a.isAdmin()}}])},Qjvx:function(e,t,r){"use strict";r.r(t);var a=r("AtBm");t.default=angular.module("deskworks.rtLayerReservations",[a.default.name]).component("rtLayerReservations",{template:'<rt-reservation ng-repeat="reservation in $ctrl.$rcCalendar.reservations" reservation="reservation"></rt-reservation>',controller:"RtLayerReservationsController",require:{$rcCalendar:"^rtCalendar"}}).controller("RtLayerReservationsController",["$element","$scope",function(e,t){this.$onInit=function(){e.addClass("rc-layer")}}])},Quiy:function(e,t,r){"use strict";r.r(t);r("777Z");t.default=angular.module("deskworks.rtLayerGridB",[]).component("rtLayerGridB",{template:'<div class="rc-borders-b" ng-repeat="x in $ctrl.bgrid" ng-style="{ left: x + \'%\' }"></div>',controller:"RtLayerGridBController",require:{$rcCalendar:"^rtCalendar"}}).controller("RtLayerGridBController",["$element","$scope",function(e,t){var r=this;r.$onInit=function(){e.addClass("rc-layer")},t.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.getCalStartDate().valueOf()"],(function(){var e,t=r.$rcCalendar.getCalStartDate(),a=r.$rcCalendar.getCalEndDate();if(r.bgrid=[],"week"===r.$rcCalendar.mode)for(e=t.clone();e<=a;e.add(1,"d"))r.bgrid.push(r.$rcCalendar.dateToX(e));else for(e=t.clone();e<=a;e.hour(e.hour()?24:12))r.bgrid.push(r.$rcCalendar.dateToX(e))}))}])},"V/c9":function(e,t,r){"use strict";r.r(t);r("2w0L");t.default=angular.module("deskworks.rtStaffOnly",[]).component("rtStaffOnly",{template:"",controller:"RtStaffOnlyController",require:{$rcCalendar:"^rtCalendar"},bindings:{reservationUnit:"<"}}).controller("RtStaffOnlyController",["$element","$scope","$translate",function(e,t,r){var a=this;a.$onInit=function(){e.attr("title",r.instant("RESERVATIONS.CALENDAR.STAFF_ONLY.HINT"))},t.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.filter"],(function(){var t=a.$rcCalendar.dateToX(a.$rcCalendar.getCalStartDate()),r=a.$rcCalendar.dateToX(a.$rcCalendar.getCalEndDate())-t;e.css("top",a.reservationUnit.top+"px"),e.css("height",a.$rcCalendar.rowHeight+"px"),e.css("left",t+"%"),e.css("width",r+"%")}))}])},WCig:function(e,t,r){var a=r("+iL7"),n=r("GHf2"),l=r("G5hJ"),i=n("species");e.exports=function(e){return l>=51||!a((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},XH2C:function(e,t){e.exports='<rt-staff-only ng-repeat="resUnit in $ctrl.$rcCalendar.staffOnly" reservation-unit="resUnit"></rt-staff-only> <rt-availability ng-repeat="availability in $ctrl.$rcCalendar.availabilities" availability="availability"></rt-availability> <rt-buffer ng-repeat="reservation in $ctrl.$rcCalendar.reservations" reservation="reservation"></rt-buffer> <rt-reservation ng-repeat="reservation in $ctrl.$rcCalendar.reservations" reservation="reservation"> <ff-tip class="rc-marker-info" ng-if="reservation.userName || reservation.reservationNote" ng-click="$ctrl.onClickHint($event)"> <h6> <span ng-if="reservation.userCompany" class="company">{{reservation.userCompany}}:</span> <span ng-if="reservation.userName">{{reservation.userName}}</span> </h6> <div ng-if="reservation.accessCode && $ctrl.$rcCalendar.settings.enableAccessCodes"> <span class="label"><span translate="RESERVATIONS.ACCESS_CODE"></span>:</span> <span class="value">{{reservation.accessCode}}</span> </div> <div ng-if="reservation.addedBy"> <span class="label"><span translate="RESERVATIONS.ADDED_BY"></span>:</span> <span class="value">{{reservation.addedBy}}</span> </div> <div ng-if="reservation.title"> <span class="label"><span translate="RESERVATIONS.TITLE.SHORT"></span>:</span> <span class="value">{{reservation.title}}</span> </div> <div ng-if="reservation.reservationNote">{{reservation.reservationNote}}</div> </ff-tip> <ff-tip class="rc-marker-start"> <span ng-bind="reservation.from | date:$ctrl.markerTimeFormat"></span> </ff-tip> <ff-tip class="rc-marker-end"> <span ng-bind="reservation.to | date:$ctrl.markerTimeFormat"></span> </ff-tip> </rt-reservation> '},XzTy:function(e,t,r){"use strict";r.r(t);var a=r("dfd5");t.default=angular.module("deskworks.rtLayerAvailability",[a.default.name]).component("rtLayerAvailability",{template:'<rt-availability ng-repeat="availability in $ctrl.$rcCalendar.availabilities" availability="availability"></rt-availability>',controller:"RtLayerAvailabilityController",require:{$rcCalendar:"^rtCalendar"}}).controller("RtLayerAvailabilityController",["$element","$scope",function(e,t){this.$onInit=function(){e.addClass("rc-layer")}}])},cVEE:function(e,t,r){var a={"./calendar/layers/rt-layer-active.tpl.html":"XH2C","./calendar/rt-calendar.tpl.html":"+G0p","./reservation-tablet-setup/setup.tpl.html":"e1WB","./reservation-tablet-wizard/01-schedule.tpl.html":"EkPe","./reservation-tablet-wizard/02-sign-in.tpl.html":"iEtI","./reservation-tablet-wizard/03-reserve.tpl.html":"pySg","./reservation-tablet-wizard/04-complete.tpl.html":"ruFd"};function n(e){var t=l(e);return r(t)}function l(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=l,e.exports=n,n.id="cVEE"},dM42:function(e,t,r){"use strict";r.r(t);r("PXs0");t.default=angular.module("deskworks.rtBuffer",[]).component("rtBuffer",{template:"",controller:"RtBufferController",require:{$rcCalendar:"^^rtCalendar"},bindings:{reservation:"<"}}).controller("RtBufferController",["$element","$scope","$translate","rcHelper","state",function(e,t,r,a,n){var l=this;l.$onInit=function(){e.attr("title",r.instant("RESERVATIONS.RESERVATION_BUFFER"))},t.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.filter"],(function(){var t=l.reservation.reservationUnit.buffer||0,r=l.reservation.from.clone().subtract(t,"minutes"),a=l.reservation.to.clone().add(t,"minutes");l.from=Math.max(r,l.$rcCalendar.getCalStartDate()),l.to=Math.min(a,l.$rcCalendar.getCalEndDate());var n=l.$rcCalendar.dateToX(l.from),i=l.$rcCalendar.dateToX(l.to)-n;e.css("top",l.reservation.reservationUnit.top+"px"),e.css("height",l.$rcCalendar.rowHeight+"px"),e.css("left",n+"%"),e.css("width",i+"%")}))}])},day0:function(e,t,r){"use strict";r.r(t);r("3dw1"),r("Muwe"),r("y89P");var a=r("yCd9"),n=r.n(a),l=r("lRNC"),i=r.n(l),o=["$injector",function(e){var t,a,l=(t=r("fChp"),n()(a=i()(t).call(t)).call(a,t));e.loadNewModules(n()(l).call(l,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t=r("cVEE");i()(t).call(t).forEach((function(r){return e.put(r.replace(/^\.\//,""),t(r))}))}])}];t.default=o},dfd5:function(e,t,r){"use strict";r.r(t);r("s6rg");t.default=angular.module("deskworks.rtAvailability",["deskworks.appDim"]).component("rtAvailability",{template:"",controller:"RtAvailabilityController",require:{$rcCalendar:"^^rtCalendar",ffBlock:"^^?ffBulkReadOnly"},bindings:{availability:"<"}}).controller("RtAvailabilityController",["$element","$scope","$translate","rcHelper","state","appDim",function(e,t,r,a,n,l){var i=this;i.$onInit=function(){if(i.ffBlock&&!i.ffBlock.editMode)return e.attr("title",r.instant("RESERVATIONS.CALENDAR.NO_PERMISSION.HINT"));e.attr("title",r.instant("RESERVATIONS.CALENDAR.AVAILABLE.HINT")),e.on("click",(function(e){i.onClick(e),t.$apply()}))},i.$onDestroy=function(){e.off("click")},i.onClick=function(t){var r=moment(Math.floor(i.from+(i.to-i.from)*t.offsetX/e[0].offsetWidth));return a.floorDate(r,30),n.setParam("date",a.dateToStr(r)),n.setParam("unit",i.availability.reservationUnit.id),l(!0),i.$rcCalendar.next?i.$rcCalendar.next():n.setPath("/reservation-tablet-wizard/reserve")},t.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.filter"],(function(){i.from=Math.max(i.availability.from,i.$rcCalendar.getCalStartDate()),i.to=Math.min(i.availability.to,i.$rcCalendar.getCalEndDate());var t=i.$rcCalendar.dateToX(i.from),r=i.$rcCalendar.dateToX(i.to)-t;e.css("top",i.availability.reservationUnit.top+"px"),e.css("height",i.$rcCalendar.rowHeight+"px"),e.css("left",t+"%"),e.css("width",r+"%")}))}])},e1WB:function(e,t){e.exports='<form name="$ctrl.form" id="reservationTabletSetup" ff-bulk-read-only> <h1 class="page-title">{{state.getPageTitle()}}</h1> <ff-panel style="max-width:600px"> <label class="ff-row"> <ff-label flex="0 1 180px"><span translate="RESERVATION_TABLET.RESERVATION_CATEGORY"></span></ff-label> <ff-select flex="1 1 320px" name="reservationCategory" ff-model="$ctrl.category" ff-required="true" ff-options="cat.name for cat in $ctrl.categories" ff-change="$ctrl.onCategoryChange()"></ff-select> </label> <label class="ff-row"> <ff-label flex="0 1 180px"><span translate="RESERVATION_TABLET.RESERVATION_UNIT"></span></ff-label> <ff-select flex="1 1 320px" name="reservationUnit" ff-model="$ctrl.unit" ff-required="true" ff-options="unit.name for unit in $ctrl.category.reservationUnits"></ff-select> </label> <ff-row> <ff-label><span> <span translate="RESERVATION_TABLET.START_WIZARD"></span> <ff-hint><span translate="RESERVATION_TABLET.START_WIZARD.HINT"></span></ff-hint> </span></ff-label> <ff-btn flex="none" sense="ok" size="sm" class="buttons-row" ff-click="$ctrl.start()"> <span translate="RESERVATION_TABLET.BTN_START"></span> </ff-btn> </ff-row> </ff-panel> </form> '},fChp:function(e,t,r){var a={"./calendar/layers/rt-availability.component.js":"dfd5","./calendar/layers/rt-buffer.component.js":"dM42","./calendar/layers/rt-layer-active.component.js":"Ltq6","./calendar/layers/rt-layer-availability.component.js":"XzTy","./calendar/layers/rt-layer-buffers.component.js":"Pdm5","./calendar/layers/rt-layer-grid-b.component.js":"Quiy","./calendar/layers/rt-layer-grid-h.component.js":"qsy7","./calendar/layers/rt-layer-grid-v.component.js":"ECOP","./calendar/layers/rt-layer-reservations.component.js":"Qjvx","./calendar/layers/rt-reservation.component.js":"AtBm","./calendar/layers/rt-staff-only.component.js":"V/c9","./calendar/rt-calendar.component.js":"23wd","./calendar/rt-header.component.js":"G5Td","./reservation-tablet-setup/setup.controller.js":"yJ0o","./reservation-tablet-wizard/01-schedule.controller.js":"IoQK","./reservation-tablet-wizard/02-sign-in.controller.js":"12k6","./reservation-tablet-wizard/03-reserve.controller.js":"F+j4","./reservation-tablet-wizard/04-complete.controller.js":"oVwT","./reservation-tablet-wizard/res-tablet.service.js":"OVVd"};function n(e){var t=l(e);return r(t)}function l(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=l,e.exports=n,n.id="fChp"},iEtI:function(e,t){e.exports='<dw-sign-in id="signIn"> <extra-buttons> <ff-btn sense="back" ff-click="$ctrl.goBack()" ff-countdown="20"><span translate="GLOBAL.BTN_BACK"></span></ff-btn> </extra-buttons> </dw-sign-in> '},lYjL:function(e,t,r){"use strict";var a=r("JRM0"),n=r("5q7I").filter;a({target:"Array",proto:!0,forced:!r("WCig")("filter")},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"o/dK":function(e,t){e.exports=' <div class="rc-header-scrollable" ng-style="{ width: $ctrl.$rcCalendar.modes[$ctrl.$rcCalendar.mode].width + \'px\' }"> <div class="rc-borders-h"></div> <div class="rc-borders-v" ng-repeat="x in $ctrl.vgrid" ng-style="{ left: x + \'%\' }"></div> <span ng-bind="item.time | date:$ctrl.weekTimeFormat" ng-if="$ctrl.$rcCalendar.mode === \'week\'" ng-repeat="item in $ctrl.times" ng-style="{ left: item.x + \'%\' }" class="rc-time" ng-class="{ \'rc-highlight\': item.highlight }"></span> <div ng-if="$ctrl.$rcCalendar.mode === \'week\'" ng-repeat="day in $ctrl.weekdays" class="rc-weekday" ng-style="{ left: day.x + \'%\', width: day.width + \'%\' }"> <div ng-bind="day.time | date:\'EEEE\'"></div> <div class="rc-pictogram"> <ff-row> <div class="serifs"><hr><hr><hr></div> </ff-row> <span ng-bind="day.time | date:\'dd\'"></span> </div> </div> <rc-layer-grid-b ng-st1yle="{ width: $ctrl.$rcCalendar.modes[$ctrl.$rcCalendar.mode].width + \'px\', height: $ctrl.$rcCalendar.gridHeight + \'px\' }"></rc-layer-grid-b> <span nice-time="item.time" ng-repeat="item in $ctrl.times" ng-if="$ctrl.$rcCalendar.mode === \'day\'" ng-style="{ left: item.x + \'%\' }" class="rc-time" ng-class="{ \'rc-highlight\': item.highlight }"></span> </div> '},oQfR:function(e,t,r){},oVwT:function(e,t,r){"use strict";r.r(t);r("OVVd");t.default=angular.module("deskworks.ReservationTabletCompleteCtrl",["deskworks.state","resTablet"]).controller("ReservationTabletCompleteCtrl",["$translate","state","helper","resTablet",function(e,t,r,a){t.setPageTitle(e.instant("RESERVATION_TABLET.COMPLETE.PAGE_TITLE")),this.signOut=function(){return a.signOut()},this.reserve=function(){return a.resetParams(),t.setPath("/reservation-tablet-wizard/reserve")}}])},pySg:function(e,t){e.exports='<res-reservation center="$resolve.center" user="$resolve.user" cal-data="$resolve.calData" hide-reservation-cost-estimate="true" hide-calendar-btn="true" after-save="$ctrl.next" sign-out="$ctrl.signOut" stop-wizard="$ctrl.isAdmin() ? $ctrl.stopWizard : null" reservation-fields="$resolve.reservationFields" class="res-reservation-tablet"></res-reservation> '},qsy7:function(e,t,r){"use strict";r.r(t);r("777Z");t.default=angular.module("deskworks.rtLayerGridH",[]).component("rtLayerGridH",{template:'<div class="rc-borders-h" ng-repeat-start="resType in $ctrl.$rcCalendar.reservationTypes" ng-style="{ top: resType.top + \'px\', height: $ctrl.$rcCalendar.rowGroupHeaderHeight + \'px\' }"></div><div class="rc-borders-h" ng-repeat-end ng-repeat="resUnit in resType.reservationUnits" ng-style="{ top: resUnit.top + \'px\', height: $ctrl.$rcCalendar.rowHeight + \'px\' }"></div>',controller:"RtLayerGridHController",require:{$rcCalendar:"^rtCalendar"}}).controller("RtLayerGridHController",["$element",function(e){this.$onInit=function(){e.addClass("rc-layer")}}])},ruFd:function(e,t){e.exports='<form name="$ctrl.form" id="reservationTabletComplete"> <h1 class="page-title">{{state.getPageTitle()}}</h1> <ff-btn-group> <ff-btn sense="signOut" ff-click="$ctrl.signOut()" ff-countdown="20"><span translate="GLOBAL.BTN_SIGN_OUT"></span></ff-btn> <ff-btn sense="reserve" ff-click="$ctrl.reserve()"><span translate="RESERVATION_TABLET.BNT_MAKE_ANOTHER_RESERVATION"></span></ff-btn> </ff-btn-group> </form> '},s6rg:function(e,t,r){},yJ0o:function(e,t,r){"use strict";r.r(t);var a=r("nbuU"),n=r.n(a);t.default=angular.module("deskworks.ReservationTabletSetupCtrl",["session","deskworks.state","deskworks.Credentials"]).controller("ReservationTabletSetupCtrl",["$scope","$translate","$localStorage","dwAlerts","state","helper","session","categories","Credentials",function(e,t,r,a,l,i,o,s,c){var d=this;l.setPageTitle(t.instant("RESERVATION_TABLET.SETUP.PAGE_TITLE")),r.reservationTablet=r.reservationTablet||{};var f,u,m=r.reservationTablet;(d.categories=s,d.categories.length)&&(d.category=m.categoryId&&n()(f=d.categories).call(f,(function(e){return e.id===m.categoryId}))||d.categories[0],d.unit=m.unitId&&n()(u=d.category.reservationUnits).call(u,(function(e){return e.id===m.unitId}))||d.category.reservationUnits[0]);d.onCategoryChange=function(){return d.unit=d.category?d.category.reservationUnits[0]:null},d.start=function(){if(!i.pointFirstInvalid("#reservationTabletSetup"))return c.get("$$reservations").catch((function(e){return a.error(e,"Failed to get credentials.")})).then((function(e){m.centerId=l.getCurrentCenterId(),m.login=e.login,m.password=e.password,m.unitId=d.unit.id,m.unitName=d.unit.name,r.$apply()})).then((function(){return o.logout()})).then((function(){return l.setPath("/reservation-tablet-wizard")}))}}])}}]);