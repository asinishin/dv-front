(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{DQFS:function(e,t,a){},W87a:function(e,t,a){"use strict";a("DQFS");var r=a("nOZT"),n=a.n(r);t.a=angular.module("deskworks.rcDateSelector",[]).component("rcDateSelector",{template:n.a,controller:"RcDateSelectorController as $ctrl",bindings:{mode:"<",date:"="}}).controller("RcDateSelectorController",["$scope",function(e){var t=this;e.$watch("$ctrl.date",(function(){moment.isMoment(t.date)&&(t.weekStart=t.date.clone().startOf("week"),t.weekEnd=t.weekStart.clone().endOf("week"))})),t.prev=function(){moment.isMoment(t.date)&&(t.date=t.date.clone().subtract("week"===t.mode?7:1,"d"))},t.next=function(){moment.isMoment(t.date)&&(t.date=t.date.clone().add("week"===t.mode?7:1,"d"))}}])},bOPx:function(e,t,a){"use strict";a("JBxO"),a("FdtR"),a("y89P");var r=a("hsT8"),n=a.n(r),i=a("WSeP"),l=a.n(i),s=a("nbuU"),o=a.n(s),c=a("0zKI"),f=a.n(c),d=a("NOor"),m=a.n(d),v=a("D4RU"),p=a.n(v),u=(a("W87a"),a("YtL8")),E=a.n(u),h=(a("cRes"),a("l3lf")),S=a.n(h),$=a("+l1P"),g=(angular.module("deskworks.timeSelector",["deskworks.state",$.a.name]).directive("timeSelector",["$timeout","$filter","state",function(e,t,a){return{template:S.a,restrict:"E",scope:{date:"<",reservations:"<",timeStart:"=",timeEnd:"=",availabilities:"<"},link:function(r,n,i){function s(){r.halves=[];for(var e=r.date.clone().startOf("day"),t=e.clone().add(1,"d");e<t;e.add(.5,"h"))r.halves.push({reserved:!1,time:e.clone(),timeEnd:e.clone().add(.5,"h")})}r.currentUserId=a.getCurrentUserId(),r.state=a,r.timeStartInitial=moment.isMoment(r.timeStart)?r.timeStart.clone():moment(),r.timeEndInitial=moment.isMoment(r.timeEnd)?r.timeEnd.clone():moment(),n.addClass("time-selector"),e((function(){var e=document.querySelector('.halves-wrapper .half[time-str="'+t("date")(r.date,"HH:mm:00")+'"]')||document.querySelector('.halves-wrapper .half[time-str="08:00:00"]');document.querySelector(".halves-wrapper").scrollTop=e.offsetTop})),s(),r.$watch("availabilities",(function(e){var t,a,n;l()(angular).call(angular,r.halves,(function(e){e.available=!1})),l()(angular).call(angular,r.availabilities,(function(e){for(var t=Math.floor(2*e.from.hour()+e.from.minute()/30),a=Math.ceil(2*e.to.hour()+e.to.minute()/30||r.halves.length),n=t;n<a;n++)r.halves[n].available=!0})),r.halves=(t=r.halves,E()(t).call(t,(function(e,t){return t.optional=!1,t.available?++e:e}),0)?(p()(a=r.halves).call(a,(function(e){if(e.available)return!0;e.optional=!0})),p()(n=r.halves).call(n,(function(e,t,a){if((e=a[a.length-t-1]).available)return!0;e.optional=!0})),t):t)})),r.$watch("reservations",(function(e,t){var a,n;(moment.isMoment(r.timeStartInitial)&&moment.isMoment(r.timeEndInitial)||r.selectClear(),angular.isDefined(r.reservations))&&(l()(a=r.halves).call(a,(function(e){e.reserved=!1,delete e.text,delete e.userId,delete e.reservedLength})),l()(n=r.reservations).call(n,(function(e){if(!(moment.isMoment(r.timeStartInitial)&&moment.isMoment(r.timeEndInitial)&&e.from.isSame(r.timeStartInitial)&&e.to.isSame(r.timeEndInitial))){var t=e.from.diff(e.from.clone().startOf("date"),"minutes")/30,a=Math.floor(t),n=t+(e.to-e.from)/1e3/60/60*2,i=Math.floor(n);i+=n!==i?1:0;for(var l=a;l<i;l++)r.halves[l].reserved=!0,r.halves[l].text=e.userCompany?e.userCompany+": ":"",r.halves[l].text+="<strong>"+e.userName+"</strong>",r.halves[l].userId=e.userId,l===a&&(r.halves[l].reservedLength=i-a)}})))})),r.$watch("date",(function(e,t){angular.isDefined(e)&&angular.isDefined(t)&&!e.isSame(t)&&(r.selectClear(),s())})),r.selectionStart=r.timeStart?2*r.timeStart.hours()+r.timeStart.minutes()/30:-1,r.selectionEnd=r.timeEnd?r.selectionStart+(r.timeEnd-r.timeStart)/1e3/60/60*2-1:-1,r.selectTime=function(e){var t;if(!r.halves[e].reserved&&r.halves[e].available){if(-1===r.selectionStart)r.selectionStart=e,r.selectionEnd=e;else if(r.selectionEnd===r.selectionStart){if(e>r.selectionStart){for(r.selectionEnd=e,t=r.selectionStart;t<=r.selectionEnd;t++)if(r.halves[t].reserved||!r.halves[t].available){r.selectionStart=e,r.selectionEnd=e;break}}else if(e<r.selectionStart)for(r.selectionEnd=r.selectionStart,r.selectionStart=e,t=r.selectionEnd;t>=r.selectionStart;t--)if(r.halves[t].reserved||!r.halves[t].available){r.selectionStart=e,r.selectionEnd=e;break}}else r.selectionStart=e,r.selectionEnd=e;r.selectionStart>=0&&r.selectionEnd>=0?(r.timeStart=r.halves[r.selectionStart].time.clone(),r.timeEnd=r.halves[r.selectionEnd>=0?r.selectionEnd:r.selectionStart].timeEnd.clone()):(r.timeStart=null,r.timeEnd=null)}},r.selectClear=function(){r.selectionStart=-1,r.selectionEnd=-1,r.timeStart=null,r.timeEnd=null}}}}]),a("qNmJ"),a("q9Tw")),T=a.n(g);t.a=angular.module("deskworks.resReservation",["deskworks.rcHelper","deskworks.reservationUnit.optsRepeatFrequency","deskworks.timeSelector","deskworks.reservationService","deskworks.calendarService","deskworks.rcDateSelector","deskworks.ReservationCost",$.a.name]).directive("resReservation",(function(){return{template:T.a,scope:!0,controller:"ResReservationController as $ctrl",bindToController:{center:"<",calData:"<",user:"<",reservationPrices:"<",hideReservationCostEstimate:"<",hideRecurringReservations:"<",afterSave:"<",hideCalendarBtn:"<",signOut:"<",stopWizard:"<",backFn:"&?back",nextFn:"&?next"}}})).controller("ResReservationController",["$scope","$filter","$interval","$route","$window","session","dwAlerts","helper","rcHelper","state","reservationService","calendarService","ReservationCost","optsRepeatFrequency",function(e,t,a,r,i,s,c,d,v,u,E,h,S,$){var g=this;g.$onInit=function(){var i;e.state=u,g.optsRepeatFrequency=$,g.afterSave=g.afterSave||g.navCalendar,p()(i=g.calData).call(i,(function(e){var t;return p()(t=e.reservationUnits).call(t,(function(e){var t,a=m()(d).call(d,e.reservations,r.current.params.reservationId);a>=0&&(g.reservation=e.reservations[a],f()(t=e.reservations).call(t,a,1),u.setParam("unit",e.id).replace());return!!g.reservation}))})),g.$onChanges=function(){g.afterSave=g.afterSave||g.navCalendar},g.date=t("toDate")(r.current.params.date||u.getParam("date")),g.date=moment.isMoment(g.date)?g.date:moment(),v.floorDate(g.date,30);var s=g.reservation&&g.reservation.from||t("toDate")(u.getParam("start"));g.timeStart=moment.isMoment(s)?s:null,s=g.reservation&&g.reservation.to||t("toDate")(u.getParam("end")),g.timeEnd=moment.isMoment(s)&&g.timeStart?s:null,g.reservationTitle=u.getParam("title")||(g.reservation?g.reservation.title:""),g.reservationNote=u.getParam("note")||g.reservation&&g.reservation.reservationNote,g.repeatFrequency=d.findByKeyValue(g.optsRepeatFrequency,"id",u.getParam("freq"))||g.optsRepeatFrequency[0],g.repeatDuration=u.getParam("duration")&&+u.getParam("duration")||g.repeatFrequency.repeatDurationOptions&&g.repeatFrequency.repeatDurationOptions[0],g.emailConfirmation=!0,e.$watch("$ctrl.calData",(function(){var e,t;!function(){var e;if(g.reservationTypes=[],!angular.isArray(g.calData))return;l()(e=g.calData).call(e,(function(e){var t;e.reservationUnits=n()(t=e.reservationUnits).call(t,(function(e){return e.availabilities.length||"staffOnly"===e.whoCanReserve})),e.reservationUnits.length&&g.reservationTypes.push(e)}))}(),t=r.current.params.reservationUnitId||u.getParam("unit"),p()(e=g.reservationTypes).call(e,(function(e){var a=o()(d).call(d,e.reservationUnits,t);if(a)return g.reservationType=e,g.reservationUnit=a,!0})),g.reservationUnit||(g.reservationType=g.reservationTypes[0],g.reservationUnit=g.reservationType&&g.reservationType.reservationUnits[0])})),e.$watch("$ctrl.reservationUnit.id",(function(e){u.setParam("unit",e).replace()})),e.$watch("$ctrl.date",(function(e){u.setParam("date",v.dateToStr(e)).replace()})),e.$watch("$ctrl.timeStart",(function(e){u.setParam("start",v.dateToStr(e)).replace()})),e.$watch("$ctrl.timeEnd",(function(e){u.setParam("end",v.dateToStr(e)).replace()})),e.$watch("$ctrl.emailConfirmation",(function(e){u.setParam("confirm",e||null).replace()})),e.$watch("$ctrl.repeatFrequency.id",(function(e){u.setParam("freq",e).replace()})),e.$watch("$ctrl.repeatDuration",(function(e){u.setParam("duration",e).replace()})),e.$watch("$ctrl.reservationTitle",(function(e){u.setParam("title",e).replace()})),e.$watch("$ctrl.reservationNote",(function(e){u.setParam("note",e).replace()})),e.$watch("$ctrl.date",(function(e,t){e!==t?g.fetch(!0):(a.cancel(g.timer),g.timer=a(g.fetch,6e4))})),e.$watchGroup(["$ctrl.reservationType","$ctrl.timeStart","$ctrl.timeEnd"],(function(){g.reservationType&&g.timeStart&&g.timeEnd?g.reservationCost=S.calcSync(g.timeStart,g.timeEnd,g.reservationPrices,g.reservationType.id):g.reservationCost=null})),e.$watch((function(){return u.getCurrentCenterId()}),(function(e,t){e!==t&&r.reload()}))},g.$onDestroy=function(){a.cancel(g.timer)},g.next=function(){return u.setPath(u.getPath()+"/users")},g.makeReservation=function(){var e={from:g.timeStart,to:g.timeEnd,title:g.reservationTitle,reservationNote:g.reservationNote,centerId:g.center.id,reservationUnitId:g.reservationUnit.id,emailConfirmation:g.emailConfirmation,repeatFrequency:g.repeatFrequency.id,repeatDuration:angular.isDefined(g.repeatFrequency.repeatDurationOptions)?g.repeatDuration:""};return E.save(g.center.id,g.user.id,e).catch((function(e){return c.error(e,"Failed to save reservation.")})).then((function(){return g.afterSave()}))},g.updateReservation=function(){var e={id:g.reservation.id,from:g.timeStart,to:g.timeEnd,title:g.reservationTitle,reservationNote:g.reservationNote,emailConfirmation:g.emailConfirmation};return E.save(g.center.id,g.user.id,e).catch((function(e){return c.error(e,"Failed to update reservation.")})).then((function(){return g.afterSave()}))},g.cancelReservation=function(){return E.delete(g.center.id,g.user.id,g.reservation.id,g.emailConfirmation).catch((function(e){return c.error(e,"Failed to cancel reservation.")})).then((function(){return g.afterSave()}))},g.fetch=function(e){if(a.cancel(g.timer),!g.fetching||e)return g.fetching=!0,h.query(u.getCurrentCenterId()||r.current.params.centerId,g.date,g.date,u.getParam("role")).catch((function(e){return c.error(e,"Failed to fetch calendar data.")})).then((function(e){g.calData=e})).finally((function(){g.fetching=!1,a.cancel(g.timer),g.timer=a(g.fetch,6e4)}))},g.navCalendar=function(){return u.setParam("unit",null),u.setParam("start",null),u.setParam("end",null),u.setParam("confirm",null),u.setParam("freq",null),u.setParam("duration",null),u.setParam("title",null),u.setParam("note",null),u.setPath("/reservation-calendar")},g.back=u.back,g.hasRecurring=function(){return!g.reservation&&(s.isAdmin()||!g.hideRecurringReservations)}}])},cRes:function(e,t,a){},l3lf:function(e,t){e.exports='<div class=hint translate=RESERVATIONS.TIME_SELECTOR.HINT.START ng-if="selectionStart == -1 || selectionStart != selectionEnd"></div> <div class=hint translate=RESERVATIONS.TIME_SELECTOR.HINT.END ng-if="selectionStart != -1 && selectionStart == selectionEnd"></div> <div class=halves-wrapper flex="1 1 auto"> <div class=half ng-repeat="half in halves" ng-click=selectTime($index) ng-class="{\n\t\t\treserved: half.reserved, \'reserved-own\': half.reserved && currentUserId == half.userId,\n\t\t\tavailable: half.available,\n\t\t\toptional: half.optional,\n\t\t\tselected: ($index == selectionStart && selectionEnd == -1) || ($index >= selectionStart && $index <= selectionEnd) }" time-str="{{half.time | date:\'HH:mm:00\'}}"> <div class=reserved-outline ng-if=half.reservedLength> <div class=reserved-outline-inner ng-style="{ height: \'calc(\' + (half.reservedLength * 100) + \'% - 20px)\' }"> <span ng-bind-html=half.text></span> </div> </div> <div class=selected-outline ng-if="$index == selectionStart"> <div class=selected-outline-inner ng-style="{ height: \'calc(\' + ((selectionEnd != -1 ? selectionEnd - selectionStart + 1 : 1) * 100) + \'% - 20px)\' }"> <div class=selected-from ng-show="selectionStart != -1" translate=RESERVATIONS.TIME_SELECTOR.FROM></div> <div class=selected-to ng-show="selectionEnd != -1" translate=RESERVATIONS.TIME_SELECTOR.TO></div> <svg xmlns=http://www.w3.org/2000/svg class=diagonal-hatch> <defs> <pattern id=diagonalHatch patternUnits=userSpaceOnUse x=0 y=0 width=105 height=105> <g class=diagonal-hatch-pattern transform="translate(105,0) scale(-1,1)"> <path d="M0 90 l15,15"/> <path d="M0 75 l30,30"/> <path d="M0 60 l45,45"/> <path d="M0 45 l60,60"/> <path d="M0 30 l75,75"/> <path d="M0 15 l90,90"/> <path d="M0 0 l105,105"/> <path d="M15 0 l90,90"/> <path d="M30 0 l75,75"/> <path d="M45 0 l60,60"/> <path d="M60 0 l45,45"/> <path d="M75 0 l30,30"/> <path d="M90 0 l15,15"/> </g> </pattern> </defs> <g> <rect x=0 y=0 width=100% height=2000 class=diagonal-hatch-rect /> </g> </svg> </div> </div> <div class=time-cell> <div class=time nice-time=half.time></div> </div> <div class="time-cell time-cell-right"> <div class=time nice-time=half.timeEnd></div> </div> </div> </div> <div class=clear-selection> <button type=button class="btn ff-btn btn-primary" ng-click=selectClear() translate=RESERVATIONS.TIME_SELECTOR.BTN_CLEAR></button> </div> '},nOZT:function(e,t){e.exports="<div ng-show=\"$ctrl.mode === 'day'\" class=day-mode> <ff-col class=day-pictogram flex=\"0 0 auto\"> <div class=rc-pictogram title=\"Click to pick date\"> <ff-datepicker-popup tabindex=0 ff-model=$ctrl.date></ff-datepicker-popup> <span ng-bind=\"$ctrl.date | date:'dd'\"></span> <ff-row class=serifs><hr><hr><hr></ff-row> </div> <div class=weekday> <span ng-bind=\"$ctrl.date | date:'EEE'\"></span> <div class=prev title=\"{{'RESERVATIONS.DATE_SELECTOR.DAY.PREV.HINT' | translate}}\" ng-click=$ctrl.prev()></div> <div class=next title=\"{{'RESERVATIONS.DATE_SELECTOR.DAY.NEXT.HINT' | translate}}\" ng-click=$ctrl.next()></div> </div> </ff-col> <div class=bar translate=RESERVATIONS.DATE_SELECTOR.DAY.EXTRA translate-values=\"{ month: ($ctrl.date | date:'MMMM'), year: ($ctrl.date | date:'yyyy') }\">></div> </div> <div ng-show=\"$ctrl.mode === 'week'\" class=week-mode> <div class=week-pictogram flex=\"0 0 auto\"> <div class=rc-pictogram> <span ng-bind=\"($ctrl.weekStart | date:'dd') + '-' +  ($ctrl.weekEnd | date:'dd')\"></span> <ff-row class=serifs><hr><hr><hr><hr><hr><hr></ff-row> </div> <div class=prev title=\"{{'RESERVATIONS.DATE_SELECTOR.WEEK.PREV.HINT' | translate}}\" ng-click=$ctrl.prev()></div> <div class=next title=\"{{'RESERVATIONS.DATE_SELECTOR.WEEK.NEXT.HINT' | translate}}\" ng-click=$ctrl.next()></div> </div> <div class=bar translate=RESERVATIONS.DATE_SELECTOR.WEEK.EXTRA translate-values=\"{ month: ($ctrl.date | date:'MMMM'), year: ($ctrl.date | date:'yyyy') }\"></div> </div> "},q9Tw:function(e,t){e.exports='<form class=res-container flex="1 1 auto" ng-if="!$ctrl.confirmation && !$ctrl.cancelConfirmation" novalidate ng-style="{ marginTop: $app.hideHeader ? 0 : null }"> <div class=res-header> <h4 class=page-title ng-if=!$ctrl.reservation translate=RESERVATIONS.NEW.PAGE_TITLE translate-values="{ centerName: $ctrl.center.name }"></h4> <h4 class=page-title ng-if=$ctrl.reservation translate=RESERVATIONS.EDIT.PAGE_TITLE translate-values="{ centerName: $ctrl.center.name }"></h4> <small translate=RESERVATIONS.HINT></small> </div> <ff-row class=res-body> <ff-col class=res-col-opts> <ff-row flex="0 0 auto"> <rc-date-selector mode="\'day\'" date=$ctrl.date></rc-date-selector> </ff-row> <ff-row flex="0 0 auto"> <ff-select name=reservationType ff-model=$ctrl.reservationType ff-options="resType.name for resType in $ctrl.reservationTypes" ff-disabled="$ctrl.reservation || $ctrl.reservationTypes.length < 2" ff-change="$ctrl.reservationUnit = $ctrl.reservationType.reservationUnits[0]"></ff-select> </ff-row> <ff-row flex="0 0 auto"> <ff-select name=reservationUnit ff-model=$ctrl.reservationUnit ff-options="resUnit.name for resUnit in $ctrl.reservationType.reservationUnits" ff-disabled="$ctrl.reservation || $ctrl.reservationType.reservationUnits.length < 2"></ff-select> </ff-row> <ff-row flex="0 0 auto" ng-if="!$ctrl.hideReservationCostEstimate && $ctrl.reservationPrices"> <ff-static> <span style=text-transform:uppercase;max-width:200px> <strong style=font-size:.8em><span translate=RESERVATIONS.ESTIMATED_COST></span>:</strong> <strong class=text-text ng-bind="$ctrl.reservationCost | ncurrency | nd"></strong> </span> </ff-static> </ff-row> <ff-row flex="0 0 auto"> <ff-text name=reservationTitle ff-maxlength=128 ff-model=$ctrl.reservationTitle placeholder="{{(\'RESERVATIONS.TITLE\' | translate)}}"></ff-text> </ff-row> <ff-row flex="1 0 30px"> <ff-textarea name=reservationNote ff-maxlength=250 ff-model=$ctrl.reservationNote placeholder="{{(\'RESERVATIONS.NOTES\' | translate)}}"></ff-textarea> </ff-row> <div ng-if="!$ctrl.reservation ? ($ctrl.hideRecurringReservations ? !state.isLoggedMember() && !state.isLoggedNonMember() && !!state.getLoggedUser() : true) : false"> <ff-row flex="0 0 auto"> <ff-select name=repeatFrequency ff-model=$ctrl.repeatFrequency ff-options="opt.name for opt in $ctrl.optsRepeatFrequency" ff-change="$ctrl.repeatDuration = $ctrl.repeatFrequency.repeatDurationOptions[0]"></ff-select> </ff-row> <ff-row flex="0 0 auto" ng-if=$ctrl.repeatFrequency.repeatDurationOptions> <ff-label flex="0 1 110px"><span translate=RESERVATIONS.REPEAT_DURATION></span></ff-label> <ff-select name=repeatDuration flex="0 1 50px" ff-model=$ctrl.repeatDuration ff-options="opt for opt in $ctrl.repeatFrequency.repeatDurationOptions"></ff-select> <ff-label>{{$ctrl.repeatFrequency.repeatDurationFilter($ctrl.repeatDuration, true)}}</ff-label> </ff-row> </div> <ff-btn-group class=res-buttons style=margin-top:.5rem> <ff-btn sense=back ff-click=$ctrl.backFn() ng-if=$ctrl.backFn> <span translate=GLOBAL.BTN_BACK></span> </ff-btn> <ff-btn sense=save type=submit ff-click="$ctrl.nextFn ? $ctrl.nextFn() : ($ctrl.confirmation = true)" ff-disabled="!$ctrl.timeStart || !$ctrl.timeEnd || !$ctrl.reservationUnit.availabilities.length && $ctrl.reservationUnit.whoCanReserve === \'staffOnly\'"> <span translate=RESERVATIONS.BTN_CREATE ng-show=!$ctrl.reservation></span> <span translate=RESERVATIONS.BTN_UPDATE ng-show=$ctrl.reservation></span> </ff-btn> <ff-btn sense=remove ff-click="$ctrl.cancelConfirmation = true" ng-if=$ctrl.reservation> <span translate=RESERVATIONS.BTN_DELETE></span> </ff-btn> <ff-btn sense=calendar ff-click=$ctrl.navCalendar() ng-if=!$ctrl.hideCalendarBtn> <span translate=RESERVATIONS.BTN_CALENDAR></span> </ff-btn> <ff-btn sense=settings ng-if=$ctrl.stopWizard ff-click=$ctrl.stopWizard()> <span translate=GLOBAL.BTN_SETTINGS></span> </ff-btn> <ff-btn sense=signOut ng-if=$ctrl.signOut ff-click=$ctrl.signOut() ff-countdown=30> <span translate=GLOBAL.BTN_SIGN_OUT></span> </ff-btn> </ff-btn-group> </ff-col> <ff-col class=res-col-time> <div class=res-current-member ng-if="(state.isLoggedAdmin() || state.isMasterProfile()) && ($ctrl.reservation || $ctrl.user)"> <span translate=RESERVATIONS.USER></span>: <span ng-bind="$ctrl.reservation ? $ctrl.reservation.userName : $ctrl.user.fullName"></span> </div> <time-selector date=$ctrl.date time-start=$ctrl.timeStart time-end=$ctrl.timeEnd reservations=$ctrl.reservationUnit.reservations availabilities=$ctrl.reservationUnit.availabilities></time-selector> <ff-info ng-if="!$ctrl.reservationUnit.availabilities.length && $ctrl.reservationUnit.whoCanReserve === \'staffOnly\'" style=position:absolute;top:0;width:100%;height:100%;padding-top:55px;text-align:center;text-transform:none;font-weight:400;background:rgba(255,255,255,.9);z-index:5 translate=RESERVATIONS.STAFF_ONLY translate-values="{ centerName: $ctrl.center.name, centerPhone: $ctrl.center.phone, centerEmail: $ctrl.center.email }"> </ff-info> </ff-col> </ff-row> </form> <form class=res-confirm ng-if="$ctrl.confirmation || $ctrl.cancelConfirmation" ng-style="{ marginTop: $app.hideHeader ? 0 : null }"> <div class=res-header> <h4 class=page-title ng-if=$ctrl.confirmation translate=RESERVATIONS.CONFIRM.PAGE_TITLE></h4> <h4 class=page-title ng-if=$ctrl.cancelConfirmation translate=RESERVATIONS.CANCEL.PAGE_TITLE></h4> <small translate=RESERVATIONS.HINT></small> </div> <ff-col class=res-confirm-body> <ff-panel> <ff-row ng-if="$ctrl.reservation ? $ctrl.reservation.companyName : $ctrl.user.company"> <ff-label flex="0 1 110px">Company</ff-label> <ff-static ff-bind="$ctrl.reservation ? $ctrl.reservation.companyName : $ctrl.user.company"></ff-static> </ff-row> <ff-row> <ff-label flex="0 1 110px"><span translate=RESERVATIONS.USER></span></ff-label> <ff-static ff-bind="$ctrl.reservation ? $ctrl.reservation.userName : $ctrl.user.firstName + \' \' + $ctrl.user.lastName"></ff-static> </ff-row> <ff-row> <ff-label flex="0 1 110px"><span translate=RESERVATIONS.LOCATION></span></ff-label> <ff-static ff-bind=$ctrl.center.name></ff-static> </ff-row> <ff-row> <ff-label flex="0 1 110px"><span translate=RESERVATIONS.SPACE></span></ff-label> <ff-static ff-bind=$ctrl.reservationUnit.name></ff-static> </ff-row> <ff-row> <ff-label flex="0 1 110px"><span translate=RESERVATIONS.DATE></span></ff-label> <ff-static ff-bind="$ctrl.date | date:\'mediumDate\'"></ff-static> </ff-row> <ff-row> <ff-label flex="0 1 110px"><span translate=RESERVATIONS.TIME></span></ff-label> <ff-static><span nice-time=$ctrl.timeStart></span>&nbsp;-&nbsp;<span nice-time=$ctrl.timeEnd></span></ff-static> </ff-row> <div ng-if=$ctrl.hasRecurring()> <ff-row> <ff-label flex="0 1 110px"><span translate=RESERVATIONS.REPEAT_FREQUENCY></span></ff-label> <ff-static ff-bind=$ctrl.repeatFrequency.name></ff-static> </ff-row> <ff-row ng-if=$ctrl.repeatFrequency.repeatDurationOptions> <ff-label flex="0 1 110px"><span translate=RESERVATIONS.REPEAT_DURATION></span></ff-label> <ff-static ff-bind="$ctrl.repeatDuration + \' \' + $ctrl.repeatFrequency.repeatDurationUnit"></ff-static> </ff-row> </div> <ff-row ng-if=!$ctrl.hideReservationCostEstimate> <ff-label flex="0 1 110px"><span translate=RESERVATIONS.COST></span></ff-label> <ff-static ff-bind="$ctrl.reservationCost | ncurrency | nd"></ff-static> </ff-row> <label class="ff-row ff-tmargin" style=margin-left:.5rem> <ff-checkbox name=emailConfirmation ff-model=$ctrl.emailConfirmation> <span translate=RESERVATIONS.EMAIL_CONFIRMATION></span> </ff-checkbox> </label> </ff-panel> </ff-col> <ff-btn-group class=buttons-bottom> <ff-btn sense=signOut ng-if=$ctrl.signOut ff-click=$ctrl.signOut() ff-countdown=30> <span translate=GLOBAL.BTN_SIGN_OUT></span> </ff-btn> <ff-btn sense=cancel ff-click="$ctrl.confirmation = $ctrl.cancelConfirmation = false"> <span translate=GLOBAL.BTN_CANCEL></span> </ff-btn> <ff-btn sense=ok type=submit ff-click="$ctrl.cancelConfirmation ? $ctrl.cancelReservation() : $ctrl.reservation ? $ctrl.updateReservation() : $ctrl.makeReservation()"> <span translate=GLOBAL.BTN_CONFIRM></span> </ff-btn> </ff-btn-group> </form> '},qNmJ:function(e,t,a){}}]);