(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1zfb":function(e,r,t){},"2w0L":function(e,r,t){},"31LX":function(e,r,t){},"777Z":function(e,r,t){},"7F5v":function(e,r,t){},PCCn:function(e,r){e.exports="<rc-date-selector mode=$ctrl.$rcCalendar.mode date=$ctrl.$rcCalendar.date></rc-date-selector> <rc-legend></rc-legend> <rc-options></rc-options> "},PXs0:function(e,r,t){},WCig:function(e,r,t){var a=t("+iL7"),n=t("GHf2"),i=t("G5hJ"),l=n("species");e.exports=function(e){return i>=51||!a((function(){var r=[];return(r.constructor={})[l]=function(){return{foo:1}},1!==r[e](Boolean).foo}))}},XJhA:function(e,r,t){},YoJi:function(e,r,t){"use strict";t("lYjL"),t("JBxO"),t("FdtR"),t("Muwe"),t("y89P");var a=t("6RpP"),n=t.n(a),i=t("hsT8"),l=t.n(i),o=t("WSeP"),c=t.n(o),s=(t("1zfb"),t("ptuF")),d=t.n(s),f=(t("hWnC"),t("PCCn")),p=t.n(f),m=t("W87a"),u=angular.module("deskworks.rcLegend",["deskworks.state"]).component("rcLegend",{template:'<div class="rc-reserved" translate="RESERVATIONS.CALENDAR.LEGEND.RESERVED" title="{{\'RESERVATIONS.CALENDAR.LEGEND.RESERVED.HINT\' | translate}}"></div><div class="rc-own" translate="RESERVATIONS.CALENDAR.LEGEND.OWN" title="{{\'RESERVATIONS.CALENDAR.LEGEND.OWN.HINT\' | translate}}"></div><div class="rc-available" translate="RESERVATIONS.CALENDAR.LEGEND.AVAILABLE" title="{{\'RESERVATIONS.CALENDAR.LEGEND.AVAILABLE.HINT\' | translate}}"></div>',controller:"RcLegendController"}).controller("RcLegendController",["state",function(e){var r=this;r.$onInit=function(){r.state=e}}]),g=t("yKAW"),$=t.n(g),v=angular.module("deskworks.rcOptions",["deskworks.state"]).component("rcOptions",{template:$.a,controller:"RcOptionsController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcOptionsController",["state",function(e){var r=this;r.$onInit=function(){r.state=e}}]),C=angular.module("deskworks.rcToolbar",[m.a.name,u.name,v.name]).component("rcToolbar",{template:p.a,controller:"RcToolbarController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcToolbarController",(function(){})),h=(t("7F5v"),t("elcI")),y=t.n(h),R=(t("777Z"),angular.module("deskworks.rcLayerGridH",[]).component("rcLayerGridH",{template:'<div class="rc-borders-h" ng-repeat-start="resType in $ctrl.$rcCalendar.reservationTypes" ng-style="{ top: resType.top + \'px\', height: $ctrl.$rcCalendar.rowGroupHeaderHeight + \'px\' }"></div><div class="rc-borders-h" ng-repeat-end ng-repeat="resUnit in resType.reservationUnits" ng-style="{ top: resUnit.top + \'px\', height: $ctrl.$rcCalendar.rowHeight + \'px\' }"></div>',controller:"RcLayerGridHController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcLayerGridHController",["$element",function(e){this.$onInit=function(){e.addClass("rc-layer")}}])),E=angular.module("deskworks.rcSidebar",[R.name]).component("rcSidebar",{template:y.a,controller:"RcSidebarController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcSidebarController",["state","dwAlerts","reservationCategoryService",function(e,r,t){var a=this;a.pricing={},a.tipHover=function(n,i){if(a.$rcCalendar.showPricing&&!a.pricing[n.id])return a.pricing[n.id]={$$spin:!0},t.get(e.getCurrentCenterId(),n.id).catch((function(e){return r.error(e,"Failed to get reservation category.")})).finally((function(){a.pricing[n.id].$$spin=!1})).then((function(e){a.pricing[e.id].products=e.products,i.$broadcast("ffTip:layout")}))}}]),w=(t("XJhA"),angular.module("deskworks.rcAdjustments",[]).component("rcAdjustments",{template:'<label><span translate="RESERVATIONS.CALENDAR.ZOOM"></span><input type="range" class="rc-range" title="{{\'RESERVATIONS.CALENDAR.ZOOM.HINT\' | translate}}" min="{{$ctrl.$rcCalendar.modes.day.minWidth}}" max="{{$ctrl.$rcCalendar.modes.day.maxWidth}}" ng-model="$ctrl.$rcCalendar.modes.day.width" ng-show="$ctrl.$rcCalendar.mode === \'day\'"><input type="range" class="rc-range" title="{{\'RESERVATIONS.CALENDAR.ZOOM.HINT\' | translate}}" min="{{$ctrl.$rcCalendar.modes.week.minWidth}}" max="{{$ctrl.$rcCalendar.modes.week.maxWidth}}" ng-model="$ctrl.$rcCalendar.modes.week.width" ng-show="$ctrl.$rcCalendar.mode === \'week\'"></label>',controller:"RcAdjustmentsController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcAdjustmentsController",(function(){}))),A=(t("oQfR"),t("o/dK")),k=t.n(A),S=t("+l1P"),T=angular.module("deskworks.rcHeader",[S.a.name]).component("rcHeader",{template:k.a,controller:"RcHeaderController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcHeaderController",["$element","$scope","$locale",function(e,r,t){var a=this;a.$onInit=function(){a.weekTimeFormat=24===t.timeFormat?"H":"h"},r.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.getCalStartDate().valueOf()"],(function(){var e,r,t=a.$rcCalendar.getCalStartDate(),n=a.$rcCalendar.getCalEndDate();for(r="week"===a.$rcCalendar.mode?1:.5,a.vgrid=[],e=t.clone();e<=n;e.add(r,"h"))a.vgrid.push(a.$rcCalendar.dateToX(e));a.times=[];var i="week"===a.$rcCalendar.mode?"isBefore":"isSameOrBefore";for(e=t.clone();e[i](n);e.add(1,"h"))"week"===a.$rcCalendar.mode&&e.hour()%2!=0||a.times.push({x:a.$rcCalendar.dateToX(e),time:e.clone(),highlight:"week"===a.$rcCalendar.mode||e.hour()%12==0});if("week"===a.$rcCalendar.mode)for(a.weekdays=[],e=t.clone();e<n;e.add(1,"d"))a.weekdays.push({x:a.$rcCalendar.dateToX(e),width:a.$rcCalendar.dateToX(e.clone().add(1,"d"))-a.$rcCalendar.dateToX(e),time:e.clone()})}))}]),b=angular.module("deskworks.rcLayerGridV",[]).component("rcLayerGridV",{template:'<div class="rc-borders-v" ng-repeat="x in $ctrl.vgrid" ng-style="{ left: x + \'%\' }"></div>',controller:"RcLayerGridVController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcLayerGridVController",["$element","$scope",function(e,r){var t=this;t.$onInit=function(){e.addClass("rc-layer")},r.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.getCalStartDate().valueOf()"],(function(){var e,r=t.$rcCalendar.getCalStartDate(),a=t.$rcCalendar.getCalEndDate(),n="week"===t.$rcCalendar.mode?3:.5;for(t.vgrid=[],e=r.clone();e<=a;e.add(.5,"h"))(e.hour()+e.minute()/60)%n==0&&t.vgrid.push(t.$rcCalendar.dateToX(e))}))}]),L=angular.module("deskworks.rcLayerGridB",[]).component("rcLayerGridB",{template:'<div class="rc-borders-b" ng-repeat="x in $ctrl.bgrid" ng-style="{ left: x + \'%\' }"></div>',controller:"RcLayerGridBController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcLayerGridBController",["$element","$scope",function(e,r){var t=this;t.$onInit=function(){e.addClass("rc-layer")},r.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.getCalStartDate().valueOf()"],(function(){var e,r=t.$rcCalendar.getCalStartDate(),a=t.$rcCalendar.getCalEndDate();if(t.bgrid=[],"week"===t.$rcCalendar.mode)for(e=r.clone();e<=a;e.add(1,"d"))t.bgrid.push(t.$rcCalendar.dateToX(e));else for(e=r.clone();e<=a;e.hour(e.hour()?24:12))t.bgrid.push(t.$rcCalendar.dateToX(e))}))}]),N=(t("s6rg"),angular.module("deskworks.rcAvailability",["deskworks.appDim"]).component("rcAvailability",{template:"",controller:"RcAvailabilityController",require:{$rcCalendar:"^^rcCalendar",ffBlock:"^^?ffBulkReadOnly"},bindings:{availability:"<"}}).controller("RcAvailabilityController",["$element","$scope","$translate","rcHelper","state","appDim",function(e,r,t,a,n,i){var l=this;l.$onInit=function(){if(l.ffBlock&&!l.ffBlock.editMode)return e.attr("title",t.instant("RESERVATIONS.CALENDAR.NO_PERMISSION.HINT"));e.attr("title",t.instant("RESERVATIONS.CALENDAR.AVAILABLE.HINT")),e.on("click",(function(e){l.onClick(e),r.$apply()}))},l.$onDestroy=function(){e.off("click")},l.onClick=function(r){var t=moment(Math.floor(l.from+(l.to-l.from)*r.offsetX/e[0].offsetWidth));return a.floorDate(t,30),n.setParam("date",a.dateToStr(t)),n.setParam("unit",l.availability.reservationUnit.id),i(!0),l.$rcCalendar.next?l.$rcCalendar.next():n.setPath("/new-reservation")},r.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.filter"],(function(){l.from=Math.max(l.availability.from,l.$rcCalendar.getCalStartDate()),l.to=Math.min(l.availability.to,l.$rcCalendar.getCalEndDate());var r=l.$rcCalendar.dateToX(l.from),t=l.$rcCalendar.dateToX(l.to)-r;e.css("top",l.availability.reservationUnit.top+"px"),e.css("height",l.$rcCalendar.rowHeight+"px"),e.css("left",r+"%"),e.css("width",t+"%")}))}])),D=angular.module("deskworks.rcLayerAvailability",[N.name]).component("rcLayerAvailability",{template:'<rc-availability ng-repeat="availability in $ctrl.$rcCalendar.availabilities" availability="availability"></rc-availability>',controller:"RcLayerAvailabilityController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcLayerAvailabilityController",["$element","$scope",function(e,r){this.$onInit=function(){e.addClass("rc-layer")}}]),I=(t("PXs0"),angular.module("deskworks.rcBuffer",[]).component("rcBuffer",{template:"",controller:"RcBufferController",require:{$rcCalendar:"^^rcCalendar"},bindings:{reservation:"<"}}).controller("RcBufferController",["$element","$scope","$translate","rcHelper","state",function(e,r,t,a,n){var i=this;i.$onInit=function(){e.attr("title",t.instant("RESERVATIONS.RESERVATION_BUFFER"))},r.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.filter"],(function(){var r=i.reservation.reservationUnit.buffer||0,t=i.reservation.from.clone().subtract(r,"minutes"),a=i.reservation.to.clone().add(r,"minutes");i.from=Math.max(t,i.$rcCalendar.getCalStartDate()),i.to=Math.min(a,i.$rcCalendar.getCalEndDate());var n=i.$rcCalendar.dateToX(i.from),l=i.$rcCalendar.dateToX(i.to)-n;e.css("top",i.reservation.reservationUnit.top+"px"),e.css("height",i.$rcCalendar.rowHeight+"px"),e.css("left",n+"%"),e.css("width",l+"%")}))}])),x=angular.module("deskworks.rcLayerBuffers",[I.name,"deskworks.userRoles","session"]).component("rcLayerBuffers",{template:'<rc-buffer ng-if="$ctrl.isVisible()" ng-repeat="reservation in $ctrl.$rcCalendar.reservations" reservation="reservation"></rc-buffer>',controller:"RcLayerBuffersController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcLayerBuffersController",["$element","$scope","userRoles","session",function(e,r,t,a){var n=this;n.$onInit=function(){e.addClass("rc-layer")},n.isVisible=function(){return n.$rcCalendar.role?"admin"!==(t[n.$rcCalendar.role]||{}).type:!a.isAdmin()}}]),O=(t("31LX"),angular.module("deskworks.rcReservation",["deskworks.appDim"]).component("rcReservation",{template:"",controller:"RcReservationController",require:{$rcCalendar:"^^rcCalendar",ffBlock:"^^?ffBulkReadOnly"},bindings:{reservation:"<"}}).controller("RcReservationController",["$element","$scope","$translate","rcHelper","state","appDim",function(e,r,t,a,n,i){var l=this;l.$onInit=function(){e.attr("title",t.instant("RESERVATIONS.CALENDAR.RESERVED.HINT")),l.reservation.userId==n.getCurrentUserId()&&e.addClass("own"),l.ffBlock&&!l.ffBlock.editMode||e.on("click",(function(e){l.onClick(e),r.$apply()}))},l.$onDestroy=function(){e.off("click")},l.onClick=function(e){if(n.isLoggedAdmin()||l.reservation.userId==n.getCurrentUserId())return i(!0),n.setParam("date",a.dateToStr(l.reservation.from)),n.setPath("/edit-reservation/"+l.reservation.id)},r.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.filter"],(function(){l.from=Math.max(l.reservation.from,l.$rcCalendar.getCalStartDate()),l.to=Math.min(l.reservation.to,l.$rcCalendar.getCalEndDate());var r=l.$rcCalendar.dateToX(l.from),t=l.$rcCalendar.dateToX(l.to)-r;e.css("top",l.reservation.reservationUnit.top+"px"),e.css("height",l.$rcCalendar.rowHeight+"px"),e.css("left",r+"%"),e.css("width",t+"%")}))}])),H=angular.module("deskworks.rcLayerReservations",[O.name]).component("rcLayerReservations",{template:'<rc-reservation ng-repeat="reservation in $ctrl.$rcCalendar.reservations" reservation="reservation"></rc-reservation>',controller:"RcLayerReservationsController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcLayerReservationsController",["$element","$scope",function(e,r){this.$onInit=function(){e.addClass("rc-layer")}}]),V=t("inKL"),B=t.n(V),G=(t("2w0L"),angular.module("deskworks.rcStaffOnly",[]).component("rcStaffOnly",{template:"",controller:"RcStaffOnlyController",require:{$rcCalendar:"^rcCalendar"},bindings:{reservationUnit:"<"}}).controller("RcStaffOnlyController",["$element","$scope","$translate",function(e,r,t){var a=this;a.$onInit=function(){e.attr("title",t.instant("RESERVATIONS.CALENDAR.STAFF_ONLY.HINT"))},r.$watchGroup(["$ctrl.$rcCalendar.mode","$ctrl.$rcCalendar.filter"],(function(){var r=a.$rcCalendar.dateToX(a.$rcCalendar.getCalStartDate()),t=a.$rcCalendar.dateToX(a.$rcCalendar.getCalEndDate())-r;e.css("top",a.reservationUnit.top+"px"),e.css("height",a.$rcCalendar.rowHeight+"px"),e.css("left",r+"%"),e.css("width",t+"%")}))}])),U=angular.module("deskworks.rcLayerActive",[N.name,I.name,O.name,G.name]).component("rcLayerActive",{template:B.a,controller:"RcLayerActiveController",require:{$rcCalendar:"^rcCalendar"}}).controller("RcLayerActiveController",["$element","$scope","$locale","$translate",function(e,r,t,a){var n=this;n.$onInit=function(){e.addClass("rc-layer"),e.attr("title",a.instant("RESERVATIONS.CALENDAR.NOT_AVAILABLE.HINT")),n.markerTimeFormat=24===t.timeFormat?"HH:mm":"hh:mm"},n.onClickHint=function(e){e.preventDefault(),e.stopPropagation()}}]);r.a=angular.module("deskworks.rcCalendar",["deskworks.rcHelper","deskworks.calendarService",C.name,E.name,w.name,T.name,R.name,b.name,L.name,D.name,x.name,H.name,U.name]).directive("rcCalendar",(function(){return{template:d.a,scope:!0,controller:"RcCalendarController as $ctrl",bindToController:{calData:"<",settings:"<",next:"&?",showPricing:"<"}}})).controller("RcCalendarController",["$element","$scope","$filter","$timeout","$interval","helper","rcHelper","state","dwAlerts","calendarService",function(e,r,t,a,i,o,s,d,f,p){var m=this;m.$onInit=function(){m.rowHeight=36,m.rowGroupHeaderHeight=20,m.modes={day:{minWidth:1400,maxWidth:2400},week:{minWidth:1600,maxWidth:3600}},a((function(){m.modes.day.width=1670,m.modes.week.width=2400})),m.mode=d.getParam("mode")||"day",m.filter=d.getParam("filter")||"available",m.role=d.getParam("role"),m.date=t("toDate")(d.getParam("date")),moment.isMoment(m.date)||(m.date=moment()),s.floorDate(m.date,30),r.$watch("$ctrl.date",(function(e){d.setParam("date",s.dateToStr(e)).replace()})),r.$watch("$ctrl.mode",(function(e){d.setParam("mode",e).replace()})),r.$watch("$ctrl.filter",(function(e){d.setParam("filter",e).replace()})),r.$watch("$ctrl.role",(function(e){d.setParam("role",e||null).replace()}))},m.$onDestroy=function(){i.cancel(m.timer)},m.getCenterName=function(){return(d.getCurrentCenter()||{}).name},r.$watch("$ctrl.mode",(function(){var r;e.toggleClass("mode-day","day"===m.mode),e.toggleClass("mode-week","day"!==m.mode),r=m.date,a((function(){document.querySelector(".rc-scroller").scrollLeft=Math.floor(m.modes[m.mode].width*m.dateToX(r-144e5)/100)}))})),r.$watchGroup(["$ctrl.mode","$ctrl.date","$ctrl.role",function(){return d.getCurrentCenterId()}],(function(e,r){angular.equals(e,r)?m.timer=i(m.fetch,6e4):(m.reservations=[],m.availabilities=[],m.fetch(!0))})),r.$watchGroup(["$ctrl.calData","$ctrl.filter","$ctrl.mode"],(function(e,r){var t,a,i;(m.reservations=[],m.availabilities=[],m.staffOnly=[],m.reservationTypes=[],angular.isArray(m.calData))&&(c()(t=m.calData).call(t,(function(e){var r,t=angular.extend({},e);t.reservationUnits=[],c()(r=e.reservationUnits).call(r,(function(e){var r,a,i,o,c=l()(r=e.reservations).call(r,(function(r){if(s.checkIntersection(r.from,r.to,m.getCalStartDate(),m.getCalEndDate()))return r.reservationType=t,r.reservationUnit=e,!0})),d=l()(a=e.availabilities).call(a,(function(r){if(s.checkIntersection(r.from,r.to,m.getCalStartDate(),m.getCalEndDate()))return r.reservationType=t,r.reservationUnit=e,!0}));(e.availabilities.length||"all"===l()(m)||"staffOnly"===e.whoCanReserve)&&(m.reservations=n()(i=m.reservations).call(i,c),m.availabilities=n()(o=m.availabilities).call(o,d),t.reservationUnits.push(e),d.length||"staffOnly"!==e.whoCanReserve||m.staffOnly.push(e))})),t.reservationUnits.length&&m.reservationTypes.push(t)})),a=m.reservationTypes,i=0,c()(a).call(a,(function(e){var r;e.top=i,i+=m.rowGroupHeaderHeight-1,c()(r=e.reservationUnits).call(r,(function(e){e.top=i,i+=m.rowHeight-1}))})),m.gridHeight=i)})),m.getCalStartDate=function(){return("week"===m.mode?s.weekStart(m.date):m.date.clone()).hour(0).minute(0).second(0).millisecond(0)},m.getCalEndDate=function(){return("week"===m.mode?s.weekEnd(m.date):m.date.clone()).hour(24).minute(0).second(0).millisecond(0)},m.dateToX=function(e){var r=m.getCalStartDate();return 100*(e-r)/(m.getCalEndDate()-r)},m.fetch=function(e){if(i.cancel(m.timer),!m.fetching||e)return m.fetching=!0,p.query(d.getCurrentCenterId(),s.weekStart(m.date),s.weekEnd(m.date),m.role).then((function(e){m.calData=e})).catch((function(e){return f.error(e,"Failed to fetch calendar data.")})).finally((function(){m.fetching=!1,i.cancel(m.timer),m.timer=i(m.fetch,6e4)}))}}])},elcI:function(e,r){e.exports='<div class=rc-sidebar-scroller> <div class=rc-sidebar-scrollable ng-style="{ height: $ctrl.$rcCalendar.gridHeight + \'px\' }"> <div ng-repeat="resType in $ctrl.$rcCalendar.reservationTypes"> <div class="rc-row-group-header ff-tip-trigger" ng-style="{ top: resType.top + \'px\' }" title={{::resType.name}}> <span>{{::resType.name}}</span> <ng-include src="\'rcSidebarHintTpl\'" onload="item=resType"></ng-include> </div> <div class=rc-row-header ng-repeat="resUnit in resType.reservationUnits" title={{::resUnit.name}} ng-style="{ top: resUnit.top + \'px\', height: $ctrl.config.rowHeight + \'px\' }"> <div class=rc-unit-name>{{::resUnit.name}}</div> <div class="rc-unit-icon ff-tip-trigger" ng-if=::resUnit.photo> <ff-img ff-src={{::resUnit.photo}} ff-alt={{::resUnit.name}}></ff-img> <ng-include src="\'rcSidebarHintTpl\'" onload="item=resUnit"></ng-include> </div> </div> </div> <rc-layer-grid-h></rc-layer-grid-h> <ff-info ng-if=!$ctrl.$rcCalendar.reservationTypes.length class=ff-center translate=RESERVATIONS.CALENDAR.EMPTY></ff-info> </div> </div> <script type=text/ng-template id=rcSidebarHintTpl> <ff-tip class="ff-tip-right" tip-type="white" tip-hover="$ctrl.tipHover(resType, this)">\n\t\t<h6>{{::item.name}}</h6>\n\t\t<div class="rc-tip-scroller">\n\t\t\t<ff-img ff-src="{{::item.photo}}" ff-alt="{{::item.name}}"></ff-img>\n\t\t\t<div class="rc-cat-descr" ng-if="::item.description || resType.description" ng-bind-html="::item.description || resType.description"></div>\n\t\t\t<div class="rc-cat-pricing" ng-if="$ctrl.$rcCalendar.showPricing">\n\t\t\t\t<ff-header ng-if="$ctrl.pricing[resType.id].products.length !== 0"><span translate="RESERVATIONS.CALENDAR.PRICES"></span></ff-header>\n\t\t\t\t<ff-spin ng-if="$ctrl.pricing[resType.id].$$spin" class="ff-spin-placeholder"></ff-spin>\n\t\t\t\t<div ng-repeat="product in $ctrl.pricing[resType.id].products">\n\t\t\t\t\t<div class="rc-cat-product-name" ng-if="product.priceItems.length">{{::product.name}}</div>\n\t\t\t\t\t<ff-row ng-repeat="item in product.priceItems">\n\t\t\t\t\t\t<div>{{::item.name}}</div>\n\t\t\t\t\t\t<div flex="0 0 50px" class="ff-right rc-cat-item-price">{{::item.price | ncurrency}}</div>\n\t\t\t\t\t</ff-row>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ff-tip> <\/script> '},hWnC:function(e,r,t){},inKL:function(e,r){e.exports='<rc-staff-only ng-repeat="resUnit in $ctrl.$rcCalendar.staffOnly" reservation-unit=resUnit></rc-staff-only> <rc-availability ng-repeat="availability in $ctrl.$rcCalendar.availabilities" availability=availability></rc-availability> <rc-buffer ng-repeat="reservation in $ctrl.$rcCalendar.reservations" reservation=reservation></rc-buffer> <rc-reservation ng-repeat="reservation in $ctrl.$rcCalendar.reservations" reservation=reservation> <ff-tip class=rc-marker-info ng-if="reservation.userName || reservation.reservationNote" ng-click=$ctrl.onClickHint($event)> <h6> <span ng-if=reservation.userCompany class=company>{{reservation.userCompany}}:</span> <span ng-if=reservation.userName>{{reservation.userName}}</span> </h6> <div ng-if="reservation.accessCode && $ctrl.$rcCalendar.settings.enableAccessCodes"> <span class=label><span translate=RESERVATIONS.ACCESS_CODE></span>:</span> <span class=value>{{reservation.accessCode}}</span> </div> <div ng-if=reservation.addedBy> <span class=label><span translate=RESERVATIONS.ADDED_BY></span>:</span> <span class=value>{{reservation.addedBy}}</span> </div> <div ng-if=reservation.title> <span class=label><span translate=RESERVATIONS.TITLE.SHORT></span>:</span> <span class=value>{{reservation.title}}</span> </div> <div ng-if=reservation.reservationNote>{{reservation.reservationNote}}</div> </ff-tip> <ff-tip class=rc-marker-start> <span ng-bind="reservation.from | date:$ctrl.markerTimeFormat"></span> </ff-tip> <ff-tip class=rc-marker-end> <span ng-bind="reservation.to | date:$ctrl.markerTimeFormat"></span> </ff-tip> </rc-reservation> '},lYjL:function(e,r,t){"use strict";var a=t("JRM0"),n=t("5q7I").filter,i=t("WCig"),l=t("p2JK"),o=i("filter"),c=l("filter");a({target:"Array",proto:!0,forced:!o||!c},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"o/dK":function(e,r){e.exports=' <div class=rc-header-scrollable ng-style="{ width: $ctrl.$rcCalendar.modes[$ctrl.$rcCalendar.mode].width + \'px\' }"> <div class=rc-borders-h></div> <div class=rc-borders-v ng-repeat="x in $ctrl.vgrid" ng-style="{ left: x + \'%\' }"></div> <span ng-bind="item.time | date:$ctrl.weekTimeFormat" ng-if="$ctrl.$rcCalendar.mode === \'week\'" ng-repeat="item in $ctrl.times" ng-style="{ left: item.x + \'%\' }" class=rc-time ng-class="{ \'rc-highlight\': item.highlight }"></span> <div ng-if="$ctrl.$rcCalendar.mode === \'week\'" ng-repeat="day in $ctrl.weekdays" class=rc-weekday ng-style="{ left: day.x + \'%\', width: day.width + \'%\' }"> <div ng-bind="day.time | date:\'EEEE\'"></div> <div class=rc-pictogram> <ff-row> <div class=serifs><hr><hr><hr></div> </ff-row> <span ng-bind="day.time | date:\'dd\'"></span> </div> </div> <rc-layer-grid-b ng-st1yle="{ width: $ctrl.$rcCalendar.modes[$ctrl.$rcCalendar.mode].width + \'px\', height: $ctrl.$rcCalendar.gridHeight + \'px\' }"></rc-layer-grid-b> <span nice-time=item.time ng-repeat="item in $ctrl.times" ng-if="$ctrl.$rcCalendar.mode === \'day\'" ng-style="{ left: item.x + \'%\' }" class=rc-time ng-class="{ \'rc-highlight\': item.highlight }"></span> </div> '},oQfR:function(e,r,t){},p2JK:function(e,r,t){var a=t("Hvpk"),n=t("+iL7"),i=t("tF07"),l=Object.defineProperty,o={},c=function(e){throw e};e.exports=function(e,r){if(i(o,e))return o[e];r||(r={});var t=[][e],s=!!i(r,"ACCESSORS")&&r.ACCESSORS,d=i(r,0)?r[0]:c,f=i(r,1)?r[1]:void 0;return o[e]=!!t&&!n((function(){if(s&&!a)return!0;var e={length:-1};s?l(e,1,{enumerable:!0,get:c}):e[1]=1,t.call(e,d,f)}))}},ptuF:function(e,r){e.exports="<div class=rc-scroller> <div class=\"rc-header-hint gutter-h-half\" ng-if=$ctrl.showPricing> <span class=rc-header-hint-center><span>{{$ctrl.getCenterName()}}</span></span> <span class=rc-header-hint-hint><span><ff-icon sense=info></ff-icon> <span translate=RESERVATIONS.CALENDAR.HINT></span></span></span> </div> <rc-toolbar class=ff-read-only-ignore ng-style=\"{ marginTop: $app.hideHeader ? '-62px' : null }\"></rc-toolbar> <rc-header></rc-header> <rc-adjustments></rc-adjustments> <rc-layer-background class=rc-layer ng-style=\"{ width: +$ctrl.modes[$ctrl.mode].width + 40 + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-background> <rc-layer-availability ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-availability> <rc-layer-buffers ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-buffers> <rc-layer-reservations ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-reservations> <rc-layer-grid-h ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-grid-h> <rc-layer-grid-v ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-grid-v> <rc-layer-grid-b ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-grid-b> <rc-layer-active ng-style=\"{ width: $ctrl.modes[$ctrl.mode].width + 'px', height: $ctrl.gridHeight + 'px' }\"></rc-layer-active> <rc-sidebar ng-style=\"{ height: $ctrl.gridHeight + 'px' }\"></rc-sidebar> </div> "},s6rg:function(e,r,t){},yKAW:function(e,r){e.exports='<ff-col class=ff-no-frame> <div ng-if=$ctrl.state.isLoggedAdmin()> <ff-select ff-model=$ctrl.$rcCalendar.role class=rc-role> <option value="" translate=RESERVATIONS.CALENDAR.ROLE.COORDINATOR></option> <option value=member translate=RESERVATIONS.CALENDAR.ROLE.MEMBER></option> <option value=nonMember translate=RESERVATIONS.CALENDAR.ROLE.NON_MEMBER></option> </ff-select> </div> <div class=ff-grid> <ff-select flex="0 0 auto" name=filter ff-model=$ctrl.$rcCalendar.filter class=rc-filter ng-if=$ctrl.state.isLoggedAdmin()> <option value=available translate=RESERVATIONS.CALENDAR.FILTER.AVAILABLE></option> <option value=all translate=RESERVATIONS.CALENDAR.FILTER.ALL></option> </ff-select> <ff-select flex="0 0 auto" name=mode ff-model=$ctrl.$rcCalendar.mode class=rc-mode> <option value=day translate=RESERVATIONS.CALENDAR.MODE.DAY></option> <option value=week translate=RESERVATIONS.CALENDAR.MODE.WEEK></option> </ff-select> </div> </ff-col> '}}]);