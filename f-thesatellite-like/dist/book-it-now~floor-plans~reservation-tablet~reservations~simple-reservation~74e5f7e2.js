(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{DQFS:function(e,t,r){},W87a:function(e,t,r){"use strict";r("DQFS");var n=r("nOZT"),a=r.n(n);t.a=angular.module("deskworks.rcDateSelector",[]).component("rcDateSelector",{template:a.a,controller:"RcDateSelectorController as $ctrl",bindings:{mode:"<",date:"="}}).controller("RcDateSelectorController",["$scope",function(e){var t=this;e.$watch("$ctrl.date",(function(){moment.isMoment(t.date)&&(t.weekStart=t.date.clone().startOf("week"),t.weekEnd=t.weekStart.clone().endOf("week"))})),t.prev=function(){moment.isMoment(t.date)&&(t.date=t.date.clone().subtract("week"===t.mode?7:1,"d"))},t.next=function(){moment.isMoment(t.date)&&(t.date=t.date.clone().add("week"===t.mode?7:1,"d"))}}])},bOPx:function(e,t,r){"use strict";r("Muwe"),r("y89P"),r("JBxO"),r("FdtR"),r("3dw1");var n=r("NOor"),a=r.n(n),i=r("0zKI"),l=r.n(i),s=r("hsT8"),o=r.n(s),c=r("yCd9"),f=r.n(c),d=r("gQJ2"),u=r.n(d),v=r("nbuU"),m=r.n(v),p=(r("W87a"),r("cRes"),r("l3lf")),E=r.n(p),h=r("+l1P"),S=angular.module("deskworks.resDragSelectDirective",[]).directive("resDragSelect",(function(){return{restrict:"A",scope:!0,controller:"ResDragSelectDirectiveCtrl as $rds",bindToController:{start:"=",end:"=",slots:"<",limitMin:"<",scale:"<"}}})).controller("ResDragSelectDirectiveCtrl",["$scope","$element","$timeout",function(e,t,r){var n=this;function a(e){document.querySelector("res-reservation").style["user-select"]="none",n.action=null,1===e.touches.length&&(console.log("onTouchStart",e.touches[0],e.target),n.touchTimer&&r.cancel(n.touchTimer),n.touchTimer=r((function(){n.touchTimer=null,n.touchY=e.touches[0].clientY,s(e),console.log("TOUCH TIMER FIRED",n.action)}),300))}function i(e){console.log("onTouchEnd",e),n.touchTimer&&(r.cancel(n.touchTimer),n.touchTimer=null),n.action=null}function l(e){n.touchTimer&&(r.cancel(n.touchTimer),n.touchTimer=null),1===e.touches.length&&n.action&&(e.buttons=1,e.clientY=e.touches[0].clientY,e.movementY=e.clientY-n.touchY,n.touchY=e.clientY,e.preventDefault(),o(e))}function s(e){n.slotHeight=(t[0].querySelector(".slot")||{}).offsetHeight||37,n.prevIndex=null,n.clickDisabled=!1,console.log("event.target",e.target);var r=e.target.className;r.indexOf("selected-from")>=0?n.action="start":r.indexOf("selected-to")>=0?n.action="end":r.indexOf("selected-outline-inner")>=0?n.action="move":(n.action="direction",n.movementY=0,n.movementCount=0)}function o(r){if(r.buttons&&n.action){n.clickDisabled=!0;var a=function(e){var r=t[0].getBoundingClientRect().top,a=t[0].scrollTop,i=e.clientY;return Math.min(Math.max(Math.floor((i-r+a)/n.slotHeight),0),n.slots.length-1)}(r),i=n.slots[a],l=null!==n.prevIndex?a-n.prevIndex:0;!i.reserved&&i.available&&e.$apply((function(){switch(n.action){case"direction":return n.movementY+=r.movementY,n.movementCount>1&&(n.action="reselect",n.direction=Math.min(Math.max(-1,n.movementY),1)||1),void n.movementCount++;case"reselect":return n.direction>=0&&a<n.slots.length-1&&!i.reservedLength&&!i.buffer&&c(a,a+n.size)?(n.start=a,n.end=a+n.size,n.action="end"):a>0&&c(a-n.size,a)&&(n.start=a-n.size,n.end=a,n.action="start"),void(n.prevIndex=a);case"start":return void(a<n.end&&n.end-a>=n.size&&c(a,n.end)&&(n.start=a,n.prevIndex=a));case"end":return void(a>n.start&&a-n.start>=n.size&&c(n.start,a)&&(n.end=a,n.prevIndex=a));case"move":return(l<0&&n.start>0||l>0&&n.end<n.slots.length-1)&&c(n.start+l,n.end+l)&&(n.start+=l,n.end+=l),void(n.prevIndex=a)}}))}}function c(e,t){var r=Math.min(e,t),a=Math.max(e,t);if(r<0||a>=n.slots.length)return!1;for(var i=r;i<=a;i++){var l=n.slots[i];if(l.reserved||!l.available)return!1;if(l.reservedLength&&i!==t)return!1}return!0}function f(e){e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}function d(e){n.clickDisabled&&e.stopPropagation()}n.$onInit=function(){n.prevIndex=null,n.clickDisabled=!1,n.touchY=null;var e=t[0];e.addEventListener("mousedown",s,!0),e.addEventListener("mousemove",o,!0),e.addEventListener("selectstart",f,!0),e.addEventListener("selectend",f,!0),e.addEventListener("click",d,!0),e.addEventListener("touchstart",a,!0),e.addEventListener("touchend",i,!0),e.addEventListener("touchcancel",i,!0),e.addEventListener("touchmove",l,!0)},n.$onDestroy=function(){var e=t[0];e.removeEventListener("mousedown",s,!0),e.removeEventListener("mousemove",o,!0),e.removeEventListener("selectstart",f,!0),e.removeEventListener("selectend",f,!0),e.removeEventListener("click",d,!0),e.removeEventListener("touchstart",a,!0),e.removeEventListener("touchend",i,!0),e.removeEventListener("touchcancel",i,!0),e.removeEventListener("touchmove",l,!0)},n.$onChanges=function(){var e=Math.max(n.limitMin?60*n.limitMin:15,n.scale||30);n.size=e/(n.scale||30)}}]),g=(angular.module("deskworks.timeSelector",["deskworks.state",h.a.name,S.name,"deskworks.userRoles","session"]).directive("timeSelector",(function(){return{template:E.a,restrict:"E",scope:!0,controller:"TimeSelectorDirectiveCtrl as $ctrl",bindToController:{date:"<",reservations:"<",timeStart:"=",timeEnd:"=",availabilities:"<",role:"<?",scale:"<?",buffer:"<?",limitMin:"<?"},link:function(e,t){t.addClass("time-selector")}}})).controller("TimeSelectorDirectiveCtrl",["$scope","$timeout","$filter","$translate","state","userRoles","session",function(e,t,r,n,a,i,l){var s=this;function o(){var e=s.slots,t=s.selectionStart,r=s.selectionEnd;if(t>0&&r>0&&(!e[t].available||e[t].reserved||!e[r].available||e[r].reserved))return s.selectClear();var n=Math.max(s.limitMin?60*s.limitMin:15,s.scale||30)/(s.scale||30)+1;if(!(t<0||r<0||r-t+1>=n)){for(var a=s.selectionStart,i=a;i<e.length&&i<a+n&&e[i].available&&!e[i].reserved&&(i!==a||!e[i].reservedLength);i++)s.selectionEnd=i;for(var l=a-1;l>=0&&l>a-n&&e[l].available&&!e[l].reserved&&s.selectionEnd-s.selectionStart+1<n;l--)s.selectionStart=l;s.selectionEnd-s.selectionStart+1<n&&s.selectClear()}}function c(){for(var e=[],t=s.date.clone().startOf("day"),r=t.clone().add(1,"d");t<=r;t.add(s.scale||30,"m"))e.push({reserved:!1,time:t.clone(),timeEnd:t.clone().add(s.scale||30,"m")});return e}s.$onInit=function(){s.currentUserId=a.getCurrentUserId(),s.timeStartInitial=moment.isMoment(s.timeStart)?s.timeStart.clone():moment(),s.timeEndInitial=moment.isMoment(s.timeEnd)?s.timeEnd.clone():moment(),t((function(){var e=document.querySelector(".slots-wrapper"),t=e.querySelector('.slot[time-str="'+r("date")(s.date,"HH:mm:00")+'"]')||e.querySelector('.slot[time-str="08:00:00"]');e.scrollTop=t.offsetTop})),s.slots=c(),s.selectionStart=s.timeStart?Math.floor((60*s.timeStart.hours()+s.timeStart.minutes())/(s.scale||30)):-1,s.selectionEnd=s.timeEnd?Math.ceil(s.selectionStart+(s.timeEnd-s.timeStart)/1e3/60/(s.scale||30)-1):-1},s.$onChanges=function(e){!e.date||!moment.isMoment(e.date.previousValue)||e.date.currentValue.isSame(e.date.previousValue)||angular.isArray(e.reservations)||angular.isArray(e.availabilities)?t((function(){var e;s.slots=c(),e=s.slots,angular.forEach(e,(function(e){e.available=!1})),angular.forEach(s.availabilities,(function(t){for(var r=Math.floor((60*t.from.hour()+t.from.minute())/(s.scale||30))+1,n=Math.ceil((60*t.to.hour()+t.to.minute())/(s.scale||30)||e.length),a=r;a<n;a++)e[a].available=!0})),function(e){moment.isMoment(s.timeStartInitial)&&moment.isMoment(s.timeEndInitial)||s.selectClear();angular.isDefined(s.reservations)&&(e.forEach((function(e){e.reserved=!1,e.buffer=!1,delete e.text,delete e.userId,delete e.reservedLength})),s.reservations.forEach((function(r){if(!(moment.isMoment(s.timeStartInitial)&&moment.isMoment(s.timeEndInitial)&&r.from.isSame(s.timeStartInitial)&&r.to.isSame(s.timeEndInitial))){var n=r.from.diff(r.from.clone().startOf("date"),"minutes")/(s.scale||30),a=Math.floor(n),i=n+(r.to-r.from)/1e3/60/(s.scale||30),l=Math.ceil(i);l+=i!==l?1:0,t({slots:e,reservation:r,index:a-1,direction:-1});for(var o=a;o<=l;o++)e[o].reserved=!0,e[o].text=r.userCompany?r.userCompany+": ":"",e[o].text+="<strong>"+r.userName+"</strong>",e[o].userId=r.userId,o===a&&(e[o].reservedLength=l-a+1);t({slots:e,reservation:r,index:l})}})),function(e){for(var t=0,r=e.length-1;t<e.length;t++,r--)e[t].reserved&&e[t+1]&&!e[t+1].reserved&&e[t+1].available&&(e[t].reserved=!1),e[r].reserved&&r>0&&!e[r-1].reserved&&e[r-1].available&&(e[r].reserved=!1),!e[t].available&&e[t+1]&&e[t+1].available&&!e[t+1].reserved&&(e[t].available=!0),!e[r].available&&e[r-1]&&e[r-1].available&&!e[r-1].reserved&&(e[r].available=!0)}(e));function t(e){var t=e.slots,r=(e.reservation,e.index),n=e.direction,a=void 0===n?1:n;if(s.buffer&&t[r]&&!(s.role?"admin"===(i[s.role]||{}).type:l.isAdmin()))for(var o=Math.ceil(s.buffer/(s.scale||30)),c=r+o*a,f=r;a>0?f<c:f>c;f+=a)t[f]&&((t[f+(a>0?1:0)]||{}).available=!1,(a>0&&f===r&&r<t.length-1||a<0&&f===c+1)&&(t[f].buffer=o))}}(s.slots),function(e){e.reduce((function(e,t){return t.optional=!1,t.available?++e:e}),0)&&(e.some((function(e){if(e.available)return!0;e.optional=!0})),e.some((function(t,r,n){if((t=e[e.length-r-1]).available)return!0;t.optional=!0})))}(s.slots),o()})):s.slots=c()},s.selectTime=function(e){if(!s.slots[e].reserved&&s.slots[e].available){if(s.selecting){if(e>s.selectionStart){s.selectionEnd=e,s.selecting=!1;for(var t=s.selectionStart;t<=s.selectionEnd;t++)if(s.slots[t].reserved||s.slots[t].reservedLength||!s.slots[t].available){s.selectionStart=e,s.selectionEnd=e;break}}else if(e<s.selectionStart){s.selectionStart=e,s.selecting=!1;for(var r=s.selectionEnd;r>=s.selectionStart;r--)if(s.slots[r].reserved||s.slots[r].reservedLength||!s.slots[r].available){s.selectionStart=e,s.selectionEnd=e;break}}}else s.selecting=!0,s.selectionStart=e,s.selectionEnd=e;o()}},e.$watchGroup(["$ctrl.selectionStart","$ctrl.selectionEnd"],(function(){s.selectionStart>=0&&s.selectionEnd>=0?(s.timeStart=s.slots[s.selectionStart].time.clone(),s.timeEnd=s.slots[s.selectionEnd].time.clone()):(s.timeStart=null,s.timeEnd=null)})),s.selectClear=function(){s.selectionStart=s.selectionEnd=-1,s.timeStart=s.timeEnd=null,s.selecting=!1},s.getSlotClass=function(e,t){return{reserved:e.reserved,"reserved-own":e.reserved&&s.currentUserId===e.userId,available:e.available,optional:e.optional,buffer:e.buffer,selected:t===s.selectionStart&&-1===s.selectionEnd||t>=s.selectionStart&&t<=s.selectionEnd}},s.getSlotTitle=function(e,t){var a=e.available?"AVAILABLE":"UNAVAILABLE";e.reserved&&(a="RESERVED"),(t===s.selectionStart&&-1===s.selectionEnd||t>=s.selectionStart&&t<=s.selectionEnd)&&(a="SELECTED");var i={from:r("date")(e.time,"shortTime"),to:r("date")(e.timeEnd,"shortTime")};return n.instant("RESERVATIONS.TIME_SELECTOR.SLOT.".concat(a),i)}}]),r("qNmJ"),r("q9Tw")),$=r.n(g),T=r("GJsN");t.a=angular.module("deskworks.resReservation",["deskworks.rcHelper","deskworks.reservationUnit.optsRepeatFrequency","deskworks.timeSelector","deskworks.reservationService","deskworks.calendarService","deskworks.rcDateSelector","deskworks.ReservationCost",h.a.name,T.a.name]).directive("resReservation",(function(){return{template:$.a,scope:!0,controller:"ResReservationController as $ctrl",bindToController:{center:"<",calData:"<",user:"<",reservationPrices:"<",reservationFields:"<",hideReservationCostEstimate:"<",hideRecurringReservations:"<",afterSave:"<",hideCalendarBtn:"<",signOut:"<",stopWizard:"<",backFn:"&?back",nextFn:"&?next",hideStaffOnlyUnits:"<"}}})).controller("ResReservationController",["$scope","$filter","$interval","$route","$window","session","dwAlerts","helper","rcHelper","state","reservationService","calendarService","ReservationCost","optsRepeatFrequency",function(e,t,r,n,i,s,c,d,v,p,E,h,S,g){var $=this;$.$onInit=function(){e.state=p,$.optsRepeatFrequency=g,$.afterSave=$.afterSave||$.navCalendar,$.role=p.getParam("role"),$.calData.some((function(e){return e.reservationUnits.some((function(e){var t,r,i=a()(t=e.reservations).call(t,(function(e){return e.id===+n.current.params.reservationId}));i>=0&&($.reservation=e.reservations[i],l()(r=e.reservations).call(r,i,1),p.setParam("unit",e.id).replace());return!!$.reservation}))})),$.$onChanges=function(){$.afterSave=$.afterSave||$.navCalendar},$.date=t("toDate")(n.current.params.date||p.getParam("date")),$.date=moment.isMoment($.date)?$.date:moment(),v.floorDate($.date,30);var i=$.reservation&&$.reservation.from||t("toDate")(p.getParam("start"));$.timeStart=moment.isMoment(i)?i:null,i=$.reservation&&$.reservation.to||t("toDate")(p.getParam("end")),$.timeEnd=moment.isMoment(i)&&$.timeStart?i:null,$.reservationTitle=p.getParam("title")||($.reservation?$.reservation.title:""),$.reservationNote=p.getParam("note")||$.reservation&&$.reservation.reservationNote,$.repeatFrequency=d.findByKeyValue($.optsRepeatFrequency,"id",p.getParam("freq"))||$.optsRepeatFrequency[0],$.repeatDuration=p.getParam("duration")&&+p.getParam("duration")||$.repeatFrequency.repeatDurationOptions&&$.repeatFrequency.repeatDurationOptions[0],$.emailConfirmation=!0,e.$watch("$ctrl.calData",(function(){var e;!function(){if($.reservationTypes=[],!angular.isArray($.calData))return;$.calData.forEach((function(e){var t;if(e.reservationUnits=o()(t=e.reservationUnits).call(t,(function(e){return e.availabilities.length||!$.hideStaffOnlyUnits&&"staffOnly"===e.whoCanReserve})),e.reservationUnits.length){var r;$.reservationTypes.push(e),e.fields=o()(r=$.reservationFields).call(r,(function(t){return t.reservationCategoryId===e.id||0===t.reservationCategoryId}));var n=JSON.parse(p.getParam("fields")||"{}");e.fields.forEach((function(e){return e.value=n[e.id]||0===n[e.id]?n[e.id]:(($.reservation||{}).fields||{})[e.id]}))}}))}(),e=n.current.params.reservationUnitId||p.getParam("unit"),$.reservationTypes.some((function(t){var r=m()(d).call(d,t.reservationUnits,e);if(r)return $.reservationType=t,$.reservationUnit=r,!0})),$.reservationUnit||($.reservationType=$.reservationTypes[0],$.reservationUnit=$.reservationType&&$.reservationType.reservationUnits[0])})),e.$watch("$ctrl.reservationUnit.id",(function(e){p.setParam("unit",e).replace()})),e.$watch("$ctrl.date",(function(e){if(p.setParam("date",v.dateToStr(e)).replace(),moment.isMoment($.date)){var t={year:$.date.year(),month:$.date.month(),date:$.date.date()};moment.isMoment($.timeStart)&&($.timeStart=$.timeStart.clone().set(t)),moment.isMoment($.timeEnd)&&($.timeEnd=$.timeEnd.clone().set(t))}})),e.$watch("$ctrl.timeStart",(function(e){p.setParam("start",v.dateToStr(e)).replace()})),e.$watch("$ctrl.timeEnd",(function(e){p.setParam("end",v.dateToStr(e)).replace()})),e.$watch("$ctrl.emailConfirmation",(function(e){p.setParam("confirm",e||null).replace()})),e.$watch("$ctrl.repeatFrequency.id",(function(e){p.setParam("freq",e).replace()})),e.$watch("$ctrl.repeatDuration",(function(e){p.setParam("duration",e).replace()})),e.$watch("$ctrl.reservationTitle",(function(e){p.setParam("title",e).replace()})),e.$watch("$ctrl.reservationNote",(function(e){p.setParam("note",e).replace()})),e.$watch((function(){var e;return f()(e=$.reservationType.fields).call(e,(function(e){return{id:e.id,value:e.value}}))}),(function(e){var t=e.reduce((function(e,t){return(t.value||0===t.value||!1===t.value)&&(e[t.id]=t.value),e}),{});p.setParam("fields",u()(t))}),!0),e.$watch("$ctrl.date",(function(e,t){e!==t?$.fetch(!0):(r.cancel($.timer),$.timer=r($.fetch,6e4))})),e.$watchGroup(["$ctrl.reservationType","$ctrl.timeStart","$ctrl.timeEnd"],(function(){$.reservationType&&$.timeStart&&$.timeEnd?$.reservationCost=S.calcSync($.timeStart,$.timeEnd,$.reservationPrices,$.reservationType.id):$.reservationCost=null})),e.$watch((function(){return p.getCurrentCenterId()}),(function(e,t){e!==t&&n.reload()}))},$.$onDestroy=function(){r.cancel($.timer)},$.next=function(){if(!d.pointFirstInvalid(".sr-time"))return p.setPath(p.getPath()+"/users")},$.onNextClick=function(){if(!d.pointFirstInvalid(".res-container"))return $.nextFn?$.nextFn():($.totalCost=function(){var e,t,r,n,a,i,l=o()(e=o()(t=$.reservationType.fields).call(t,(function(e){return"customPrice"===e.type}))).call(e,(function(e){return e.value||0===e.value})),s=(o()(r=o()(n=$.reservationType.fields).call(n,(function(e){return"extraPrice"===e.type}))).call(r,(function(e){return e.value||0===e.value})),l.reduce((function(e,t){return e+t.$$deserialize(t,t.value)}),0));l.length||(s=$.reservationCost);return s+=o()(a=o()(i=$.reservationType.fields).call(i,(function(e){return"extraPrice"===e.type}))).call(a,(function(e){return e.value||0===e.value})).reduce((function(e,t){return e+t.$$deserialize(t,t.value)}),0)}(),void($.confirmation=!0))},$.makeReservation=function(){var e,t={from:$.timeStart,to:$.timeEnd,title:$.reservationTitle,reservationNote:$.reservationNote,centerId:$.center.id,reservationUnitId:$.reservationUnit.id,emailConfirmation:$.emailConfirmation,repeatFrequency:$.repeatFrequency.id,repeatDuration:angular.isDefined($.repeatFrequency.repeatDurationOptions)?$.repeatDuration:"",fields:o()(e=$.reservationType.fields).call(e,(function(e){return e.value||0===e.value||!1===e.value})).reduce((function(e,t){return e[t.id]=t.$$serialize(t,t.value),e}),{})};return E.save($.center.id,$.user.id,t).catch((function(e){return c.error(e,"Failed to save reservation.")})).then((function(){return $.afterSave()}))},$.updateReservation=function(){var e,t={id:$.reservation.id,reservationUnitId:$.reservationUnit.id,from:$.timeStart,to:$.timeEnd,title:$.reservationTitle,reservationNote:$.reservationNote,emailConfirmation:$.emailConfirmation,fields:o()(e=$.reservationType.fields).call(e,(function(e){return e.value||0===e.value||!1===e.value})).reduce((function(e,t){return e[t.id]=t.$$serialize(t,t.value),e}),{})};return E.save($.center.id,$.user.id,t).catch((function(e){return c.error(e,"Failed to update reservation.")})).then((function(){return $.afterSave()}))},$.cancelReservation=function(){return E.delete($.center.id,$.user.id,$.reservation.id,$.emailConfirmation).catch((function(e){return c.error(e,"Failed to cancel reservation.")})).then((function(){return $.afterSave()}))},$.fetch=function(e){if(r.cancel($.timer),!$.fetching||e)return $.fetching=!0,h.query(p.getCurrentCenterId()||n.current.params.centerId,$.date,$.date,$.role).catch((function(e){return c.error(e,"Failed to fetch calendar data.")})).then((function(e){$.calData=e})).finally((function(){$.fetching=!1,r.cancel($.timer),$.timer=r($.fetch,6e4)}))},$.navCalendar=function(){return p.setParam("unit",null),p.setParam("start",null),p.setParam("end",null),p.setParam("confirm",null),p.setParam("freq",null),p.setParam("duration",null),p.setParam("title",null),p.setParam("note",null),p.setParam("fields",null),p.setPath("/reservation-calendar")},$.back=p.back,$.hasRecurring=function(){return!$.reservation&&(s.isAdmin()||!$.hideRecurringReservations)}}])},cRes:function(e,t,r){},l3lf:function(e,t){e.exports='<div class="hint" translate="RESERVATIONS.TIME_SELECTOR.HINT"></div> <div class="slots-wrapper" flex="1 1 auto" res-drag-select start="$ctrl.selectionStart" end="$ctrl.selectionEnd" slots="$ctrl.slots" limit-min="$ctrl.limitMin" scale="$ctrl.scale"> <div class="slot" ng-repeat="slot in $ctrl.slots" ng-click="$ctrl.selectTime($index)" ng-class="$ctrl.getSlotClass(slot, $index)" index="{{$index}}" time-str="{{slot.time | date:\'HH:mm:00\'}}" aria-label="{{$ctrl.getSlotTitle(slot, $index)}}"> <div class="reserved-outline" ng-if="slot.reservedLength" ng-class="{ own: $ctrl.currentUserId === slot.userId }"> <div class="reserved-outline-inner" ng-style="{ height: \'calc(\' + (slot.reservedLength * 100) + \'% - 40px)\' }"> <span ng-bind-html="slot.text"></span> </div> </div> <div ng-if="slot.buffer" class="buffer-outline"> <div class="buffer-outline-inner" ng-style="{ height: \'calc(\' + (slot.buffer * 100) + \'% - 3px)\' }"> <span translate="RESERVATIONS.RESERVATION_BUFFER"></span> </div> </div> <div class="time-cell"> <div class="time" nice-time="slot.time"></div> </div> </div> <div class="selected-outline" ng-if="$ctrl.selectionStart != -1" ng-style="{ top: $ctrl.selectionStart * 37 + 18.5 + \'px\', height: ($ctrl.selectionEnd - $ctrl.selectionStart) * 37 + \'px\' }"> <div class="selected-outline-inner"> <svg xmlns="http://www.w3.org/2000/svg" class="diagonal-hatch"> <defs> <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" x="0" y="0" width="105" height="105"> <g class="diagonal-hatch-pattern" transform="translate(105,0) scale(-1,1)"> <path d="M0 90 l15,15"/> <path d="M0 75 l30,30"/> <path d="M0 60 l45,45"/> <path d="M0 45 l60,60"/> <path d="M0 30 l75,75"/> <path d="M0 15 l90,90"/> <path d="M0 0 l105,105"/> <path d="M15 0 l90,90"/> <path d="M30 0 l75,75"/> <path d="M45 0 l60,60"/> <path d="M60 0 l45,45"/> <path d="M75 0 l30,30"/> <path d="M90 0 l15,15"/> </g> </pattern> </defs> <g> <rect x="0" y="0" width="100%" height="2000" class="diagonal-hatch-rect"/> </g> </svg> </div> <div class="selected-from" ng-show="$ctrl.selectionStart !== -1" translate="RESERVATIONS.TIME_SELECTOR.FROM"></div> <div class="selected-to" ng-show="$ctrl.selectionEnd !== -1" translate="RESERVATIONS.TIME_SELECTOR.TO"></div> </div> </div> <div class="clear-selection"> <button type="button" class="btn ff-btn btn-primary" ng-click="$ctrl.selectClear()" translate="RESERVATIONS.TIME_SELECTOR.BTN_CLEAR"></button> </div> '},nOZT:function(e,t){e.exports='<div ng-show="$ctrl.mode === \'day\'" class="day-mode"> <ff-col class="day-pictogram" flex="0 0 auto"> <div class="rc-pictogram" title="Click to pick date"> <ff-datepicker-popup tabindex="0" ff-model="$ctrl.date"></ff-datepicker-popup> <ff-row> <div class="serifs"><hr><hr><hr></div> </ff-row> <span ng-bind="$ctrl.date | date:\'dd\'"></span> </div> <div class="weekday"> <span ng-bind="$ctrl.date | date:\'EEE\'"></span> <div class="prev" title="{{\'RESERVATIONS.DATE_SELECTOR.DAY.PREV.HINT\' | translate}}" ng-click="$ctrl.prev()"></div> <div class="next" title="{{\'RESERVATIONS.DATE_SELECTOR.DAY.NEXT.HINT\' | translate}}" ng-click="$ctrl.next()"></div> </div> </ff-col> <div class="bar" translate="RESERVATIONS.DATE_SELECTOR.DAY.EXTRA" translate-values="{ month: ($ctrl.date | date:\'MMMM\'), year: ($ctrl.date | date:\'yyyy\') }">></div> </div> <div ng-show="$ctrl.mode === \'week\'" class="week-mode"> <div class="week-pictogram" flex="0 0 auto"> <div class="rc-pictogram"> <ff-row> <div class="serifs"><hr><hr><hr><hr><hr><hr></div> </ff-row> <span ng-bind="($ctrl.weekStart | date:\'dd\') + \'-\' +  ($ctrl.weekEnd | date:\'dd\')"></span> </div> <div class="prev" title="{{\'RESERVATIONS.DATE_SELECTOR.WEEK.PREV.HINT\' | translate}}" ng-click="$ctrl.prev()"></div> <div class="next" title="{{\'RESERVATIONS.DATE_SELECTOR.WEEK.NEXT.HINT\' | translate}}" ng-click="$ctrl.next()"></div> </div> <div class="bar" translate="RESERVATIONS.DATE_SELECTOR.WEEK.EXTRA" translate-values="{ month: ($ctrl.date | date:\'MMMM\'), year: ($ctrl.date | date:\'yyyy\') }"></div> </div> '},q9Tw:function(e,t){e.exports='<form class="res-container" flex="1 1 auto" ng-if="!$ctrl.confirmation && !$ctrl.cancelConfirmation" novalidate ng-style="{ marginTop: $app.hideHeader ? 0 : null }"> <div class="res-header"> <h1 class="page-title" ng-if="!$ctrl.reservation" translate="RESERVATIONS.NEW.PAGE_TITLE" translate-values="{ centerName: $ctrl.center.name }"></h1> <h1 class="page-title" ng-if="$ctrl.reservation" translate="RESERVATIONS.EDIT.PAGE_TITLE" translate-values="{ centerName: $ctrl.center.name }"></h1> <small translate="RESERVATIONS.HINT"></small> </div> <ff-row class="res-body"> <ff-col class="res-col-opts"> <ff-row flex="0 0 auto"> <rc-date-selector mode="\'day\'" date="$ctrl.date"></rc-date-selector> </ff-row> <ff-row flex="0 0 auto"> <ff-select name="reservationType" ff-model="$ctrl.reservationType" ff-options="resType.name for resType in $ctrl.reservationTypes" ff-disabled="$ctrl.reservation || $ctrl.reservationTypes.length < 2" ff-change="$ctrl.reservationUnit = $ctrl.reservationType.reservationUnits[0]" aria-label="{{\'RESERVATIONS.CATEGORY\' | translate}}"></ff-select> </ff-row> <ff-row flex="0 0 auto"> <ff-select name="reservationUnit" ff-model="$ctrl.reservationUnit" ff-options="resUnit.name for resUnit in $ctrl.reservationType.reservationUnits" ff-disabled="$ctrl.reservation || $ctrl.reservationType.reservationUnits.length < 2" aria-label="{{\'RESERVATIONS.SPACE\' | translate}}"></ff-select> </ff-row> <ff-row flex="0 0 auto" ng-if="!$ctrl.hideReservationCostEstimate && $ctrl.reservationPrices"> <ff-static> <span style="text-transform:uppercase;max-width:200px"> <strong style="font-size:.8em"><span translate="RESERVATIONS.ESTIMATED_COST"></span>:</strong> <strong class="text-text" ng-bind="$ctrl.reservationCost | ncurrency | nd"></strong> </span> </ff-static> </ff-row> <ff-row flex="0 0 auto"> <ff-text name="reservationTitle" ff-maxlength="128" ff-model="$ctrl.reservationTitle" placeholder="{{(\'RESERVATIONS.TITLE\' | translate)}}" aria-label="{{(\'RESERVATIONS.TITLE\' | translate)}}"></ff-text> </ff-row> <ff-row flex="0 1 100px"> <ff-textarea name="reservationNote" ff-maxlength="250" ff-model="$ctrl.reservationNote" placeholder="{{(\'RESERVATIONS.NOTES\' | translate)}}" aria-label="{{(\'RESERVATIONS.NOTES\' | translate)}}"></ff-textarea> </ff-row> <div ng-if="!$ctrl.reservation ? ($ctrl.hideRecurringReservations ? !state.isLoggedMember() && !state.isLoggedNonMember() && !!state.getLoggedUser() : true) : false"> <ff-row flex="0 0 auto"> <ff-select name="repeatFrequency" ff-model="$ctrl.repeatFrequency" ff-options="opt.name for opt in $ctrl.optsRepeatFrequency" ff-change="$ctrl.repeatDuration = $ctrl.repeatFrequency.repeatDurationOptions[0]" aria-label="{{\'RESERVATIONS.REPEAT_FREQUENCY\' | translate}}"></ff-select> </ff-row> <ff-row flex="0 0 auto" ng-if="$ctrl.repeatFrequency.repeatDurationOptions"> <ff-label flex="0 1 110px"><span translate="RESERVATIONS.REPEAT_DURATION"></span></ff-label> <ff-select name="repeatDuration" flex="0 1 50px" ff-model="$ctrl.repeatDuration" ff-options="opt for opt in $ctrl.repeatFrequency.repeatDurationOptions" aria-label="{{\'RESERVATIONS.REPEAT_DURATION.LABEL\' | translate}}"></ff-select> <ff-label>{{$ctrl.repeatFrequency.repeatDurationFilter($ctrl.repeatDuration, true)}}</ff-label> </ff-row> </div> <fd-field field="field" ng-repeat="field in $ctrl.reservationType.fields"></fd-field> <ff-btn-group class="res-buttons" style="margin-top:.5rem"> <ff-btn sense="back" ff-click="$ctrl.backFn()" ng-if="$ctrl.backFn"> <span translate="GLOBAL.BTN_BACK"></span> </ff-btn> <ff-btn sense="save" type="submit" ff-click="$ctrl.onNextClick()" ff-disabled="!$ctrl.timeStart || !$ctrl.timeEnd || !$ctrl.reservationUnit.availabilities.length && $ctrl.reservationUnit.whoCanReserve === \'staffOnly\'"> <span translate="RESERVATIONS.BTN_CREATE" ng-show="!$ctrl.reservation"></span> <span translate="RESERVATIONS.BTN_UPDATE" ng-show="$ctrl.reservation"></span> </ff-btn> <ff-btn sense="remove" ff-click="$ctrl.cancelConfirmation = true" ng-if="$ctrl.reservation"> <span translate="RESERVATIONS.BTN_DELETE"></span> </ff-btn> <ff-btn sense="calendar" ff-click="$ctrl.navCalendar()" ng-if="!$ctrl.hideCalendarBtn"> <span translate="RESERVATIONS.BTN_CALENDAR"></span> </ff-btn> <ff-btn sense="settings" ng-if="$ctrl.stopWizard" ff-click="$ctrl.stopWizard()"> <span translate="GLOBAL.BTN_SETTINGS"></span> </ff-btn> <ff-btn sense="signOut" ng-if="$ctrl.signOut" ff-click="$ctrl.signOut()" ff-countdown="30"> <span translate="GLOBAL.BTN_SIGN_OUT"></span> </ff-btn> </ff-btn-group> </ff-col> <ff-col class="res-col-time"> <div class="res-current-member" ng-if="(state.isLoggedAdmin() || state.isMasterProfile()) && ($ctrl.reservation || $ctrl.user)"> <span translate="RESERVATIONS.USER"></span>: <span ng-bind="$ctrl.reservation ? $ctrl.reservation.userName : $ctrl.user.fullName"></span> </div> <time-selector date="$ctrl.date" time-start="$ctrl.timeStart" time-end="$ctrl.timeEnd" role="$ctrl.role" scale="$ctrl.reservationUnit.scale" buffer="$ctrl.reservationUnit.buffer" limit-min="$ctrl.reservationUnit.limitMin" reservations="$ctrl.reservationUnit.reservations" availabilities="$ctrl.reservationUnit.availabilities"></time-selector> <ff-info ng-if="!$ctrl.reservationUnit.availabilities.length && $ctrl.reservationUnit.whoCanReserve === \'staffOnly\'" style="position:absolute;top:0;width:100%;height:100%;padding-top:55px;text-align:center;text-transform:none;font-weight:400;background:rgba(255,255,255,.9);z-index:5" translate="RESERVATIONS.STAFF_ONLY" translate-values="{ centerName: $ctrl.center.name, centerPhone: $ctrl.center.phone, centerEmail: $ctrl.center.email }"> </ff-info> </ff-col> </ff-row> </form> <form class="res-confirm" ng-if="$ctrl.confirmation || $ctrl.cancelConfirmation" ng-style="{ marginTop: $app.hideHeader ? 0 : null }"> <div class="res-header"> <h1 class="page-title" ng-if="$ctrl.confirmation" translate="RESERVATIONS.CONFIRM.PAGE_TITLE"></h1> <h1 class="page-title" ng-if="$ctrl.cancelConfirmation" translate="RESERVATIONS.CANCEL.PAGE_TITLE"></h1> <small translate="RESERVATIONS.HINT"></small> </div> <ff-col class="res-confirm-body"> <ff-panel> <ff-row ng-if="$ctrl.reservation ? $ctrl.reservation.companyName : $ctrl.user.company"> <ff-label flex="0 1 110px">Company</ff-label> <ff-static ff-bind="$ctrl.reservation ? $ctrl.reservation.companyName : $ctrl.user.company"></ff-static> </ff-row> <ff-row> <ff-label flex="0 1 110px"><span translate="RESERVATIONS.USER"></span></ff-label> <ff-static ff-bind="$ctrl.reservation ? $ctrl.reservation.userName : $ctrl.user.firstName + \' \' + $ctrl.user.lastName"></ff-static> </ff-row> <ff-row> <ff-label flex="0 1 110px"><span translate="RESERVATIONS.LOCATION"></span></ff-label> <ff-static ff-bind="$ctrl.center.name"></ff-static> </ff-row> <ff-row> <ff-label flex="0 1 110px"><span translate="RESERVATIONS.SPACE"></span></ff-label> <ff-static ff-bind="$ctrl.reservationUnit.name"></ff-static> </ff-row> <ff-row> <ff-label flex="0 1 110px"><span translate="RESERVATIONS.DATE"></span></ff-label> <ff-static ff-bind="$ctrl.date | date:\'mediumDate\'"></ff-static> </ff-row> <ff-row> <ff-label flex="0 1 110px"><span translate="RESERVATIONS.TIME"></span></ff-label> <ff-static><span nice-time="$ctrl.timeStart"></span>&nbsp;-&nbsp;<span nice-time="$ctrl.timeEnd"></span></ff-static> </ff-row> <div ng-if="$ctrl.hasRecurring()"> <ff-row> <ff-label flex="0 1 110px"><span translate="RESERVATIONS.REPEAT_FREQUENCY"></span></ff-label> <ff-static ff-bind="$ctrl.repeatFrequency.name"></ff-static> </ff-row> <ff-row ng-if="$ctrl.repeatFrequency.repeatDurationOptions"> <ff-label flex="0 1 110px"><span translate="RESERVATIONS.REPEAT_DURATION"></span></ff-label> <ff-static ff-bind="$ctrl.repeatDuration + \' \' + $ctrl.repeatFrequency.repeatDurationUnit"></ff-static> </ff-row> </div> <ff-row ng-if="!$ctrl.hideReservationCostEstimate"> <ff-label flex="0 1 110px"><span translate="RESERVATIONS.COST"></span></ff-label> <ff-static ff-bind="$ctrl.totalCost | ncurrency | nd"></ff-static> </ff-row> <label class="ff-row ff-tmargin" style="margin-left:.5rem"> <ff-checkbox name="emailConfirmation" ff-model="$ctrl.emailConfirmation"> <span translate="RESERVATIONS.EMAIL_CONFIRMATION"></span> </ff-checkbox> </label> </ff-panel> </ff-col> <ff-btn-group class="buttons-bottom"> <ff-btn sense="signOut" ng-if="$ctrl.signOut" ff-click="$ctrl.signOut()" ff-countdown="30"> <span translate="GLOBAL.BTN_SIGN_OUT"></span> </ff-btn> <ff-btn sense="cancel" ff-click="$ctrl.confirmation = $ctrl.cancelConfirmation = false"> <span translate="GLOBAL.BTN_CANCEL"></span> </ff-btn> <ff-btn sense="ok" type="submit" ff-click="$ctrl.cancelConfirmation ? $ctrl.cancelReservation() : $ctrl.reservation ? $ctrl.updateReservation() : $ctrl.makeReservation()"> <span translate="GLOBAL.BTN_CONFIRM"></span> </ff-btn> </ff-btn-group> </form> '},qNmJ:function(e,t,r){}}]);