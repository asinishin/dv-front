(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/MEN":function(e,r,t){},"10fB":function(e,r){e.exports='<ff-row> <ff-select ff-model=$ctrl.rule[$ctrl.role].available ff-options="opt.id as opt.name for opt in $ctrl.options" ff-change=$ctrl.onChangeAvailable()></ff-select> <ff-btn flex=none sense=add size=xs ng-class="{ invisible: !$ctrl.rule[$ctrl.role].available }" title="{{\'RESERVATION_RULES.BTN_ADD_INTERVAL.HINT\' | translate}}" ff-click=$ctrl.addInterval()></ff-btn> </ff-row> <ff-row ng-repeat="interval in $ctrl.rule[$ctrl.role].intervals track by $index" ng-if=$ctrl.rule[$ctrl.role].available> <ff-time ff-model=interval.from ff-change=$ctrl.rule.$as() ff-required=true ff-time-order="{ early: interval.from, late: interval.to }" ff-validate-alert="{ field: (\'RESERVATION_RULES.TIME_FROM\' | translate), late: (\'RESERVATION_RULES.TIME_TO\' | translate) }" placeholder="09:00 AM"></ff-time> <ff-time ff-model=interval.to ff-change=$ctrl.rule.$as() ff-required=true ff-time-order="{ early: interval.from, late: interval.to }" ff-validate-alert="{ field: (\'RESERVATION_RULES.TIME_TO\' | translate), early: (\'RESERVATION_RULES.TIME_FROM\' | translate) }" placeholder="05:00 PM"></ff-time> <ff-btn flex=none sense=delete size=xs ff-click=$ctrl.deleteInterval(interval) title="{{\'RESERVATION_RULES.BTN_DELETE_INTERVAL.HINT\' | translate}}"></ff-btn> </ff-row> <ff-row ng-repeat="ghost in $ctrl.rule[$ctrl.role].$ghosts track by $index"> <ff-static></ff-static> </ff-row> '},"7LHe":function(e,r){e.exports="<form name=formReservationRules novalidate> <div class=gutter-v> <ff-panel> <ff-panel-header ng-if=$ctrl.reservationUnitId> <div class=\"ff-grid gutter-v-half gutter-h-half\"> <div flex=auto> <span translate=RESERVATION_RULES.ACTIVE.HEADER></span> <ff-hint><span translate=RESERVATION_RULES.ACTIVE.HINT></span></ff-hint> </div> <ff-btn flex=none sense=clone size=sm ff-click=$ctrl.resetRules() style=\"margin:-.5rem 0 .5rem 0\"> <span translate=RESERVATION_RULES.ACTIVE.BTN_RESET></span> </ff-btn> </div> </ff-panel-header> <ff-panel-header ng-if=!$ctrl.reservationUnitId> <span translate=RESERVATION_RULES.DEFAULT.HEADER></span> <ff-hint><span translate=RESERVATION_RULES.DEFAULT.HINT></span></ff-hint> </ff-panel-header> <ff-col ff-dim=!$ctrl.rules class=gutter-v> <ff-col> <div class=\"rr-container gutter-v-half\"> <rr-rule rule=$ctrl.whoCanReserve options=$ctrl.conf.whoCanReserve.opts flex=\"{sm: '1 1 137px', md: '0 0 180px'}\">{{$ctrl.conf.whoCanReserve.name}}</rr-rule> <rr-rule rule=$ctrl.fullTimeProduct options=$ctrl.conf.fullTimeProduct.opts ng-if=\"$ctrl.reservationUnitId && $ctrl.conf.fullTimeProduct.opts\" rule-save=$ctrl.saveFullTimeProduct() flex=\"{sm: '1 1 176px', md: '0 0 350px'}\">{{$ctrl.conf.fullTimeProduct.name}}</rr-rule> <rr-rule rule=$ctrl.attachedUser ng-if=\"$ctrl.reservationUnitId && $ctrl.whoCanReserve.value === 'notAvailable'\" flex=\"{sm: '1 1 313px', md: '0 0 250px'}\">{{$ctrl.conf.attachedUser.name}}</rr-rule> </div> </ff-col> <ff-col ng-if=$ctrl.rules> <div class=\"rr-container gutter-v-half\"> <rr-rule rule=$ctrl.scale options=$ctrl.conf.scale.opts flex=\"{sm: '1 1 176px', md: '0 0 200px'}\"> {{$ctrl.conf.scale.name}} <ff-hint><span translate=RESERVATION_RULES.RESERVATION_SCALE.HINT></span></ff-hint> </rr-rule> <rr-rule rule=$ctrl.buffer options=$ctrl.conf.buffer.opts flex=\"{sm: '1 1 176px', md: '0 0 200px'}\"> {{$ctrl.conf.buffer.name}} <ff-hint><span translate=RESERVATION_RULES.RESERVATION_BUFFER.HINT></span></ff-hint> </rr-rule> </div> </ff-col> <ff-col ng-if=!$ctrl.hideRules> <div class=\"rr-container gutter-v-half\"> <rr-rule rule=rule options=$ctrl.conf[rule.uid].opts ng-repeat=\"rule in $ctrl.rules | filter:{ type: 'roles' }\" flex=\"{sm: '0 0 50%', md: '0 0 200px'}\"> <span ng-bind-html=$ctrl.conf[rule.uid].name></span> </rr-rule> </div> </ff-col> <ff-col ng-if=!$ctrl.hideRules> <div class=\"rr-container gutter-v-half\"> <rr-rule rule=rule ng-repeat=\"rule in $ctrl.rules | filter:{ type: 'weekday' }\" flex=\"{sm: '0 0 50%', md: '0 0 200px'}\">{{rule.name.toUpperCase()}}</rr-rule> </div> </ff-col> </ff-col> </ff-panel> <ff-panel class=rr-calendar ng-if=!$ctrl.reservationUnitId> <ff-panel-header> <span translate=RESERVATION_RULES.ANNUAL.HEADER></span> <ff-hint><span translate=RESERVATION_RULES.ANNUAL.HINT></span></ff-hint> </ff-panel-header> <ff-col ff-dim=!$ctrl.rules> <div class=\"rr-container gutter-v-half\"> <rr-rule rule=rule ng-repeat=\"rule in $ctrl.rules | filter:{ type: 'date' }\" flex=\"{sm: '0 0 50%', md: '0 0 200px'}\"></rr-rule> </div> <ff-btn-group class=ff-section-buttons> <ff-btn sense=add size=sm ff-click=$ctrl.addDate()><span translate=RESERVATION_RULES.BTN_ADD_DATE></span></ff-btn> </ff-btn-group> </ff-col> </ff-panel> </div> </form> "},F3iT:function(e,r){e.exports="<ng-form name=rrForm> <ff-header ff-spin=$ctrl.rule.$$autoSaving class=\"ff-relative ff-spin-sm\"> <ff-header class=rr-role></ff-header> <cell ng-transclude flex=auto> <ff-row> <ff-col> <ff-date ff-model=$ctrl.rule.date ff-required=true ff-validate-alert=Date ff-change=$ctrl.rule.$as()></ff-date> <ff-text ff-model=$ctrl.rule.name ff-change=$ctrl.rule.$as()></ff-text> </ff-col> <ff-btn flex=none sense=delete size=xs ff-click=$ctrl.deleteRule() title=\"{{'RESERVATION_RULES.BTN_DELETE_DATE' | translate}}\"></ff-btn> </ff-row> </cell> </ff-header> <ff-row ng-repeat=\"role in $ctrl.roles\" ng-if=\"(role.$visible || $ctrl.rule.type === 'date') && $ctrl.rule.type !== 'value' && $ctrl.rule.type !== 'static'\"> <ff-label class=rr-role>{{role.name}}</ff-label> <rr-limit rule=$ctrl.rule role=role.id options=$ctrl.options ng-if=\"$ctrl.rule.type === 'roles'\"></rr-limit> <rr-weekday-limit rule=$ctrl.rule role=role.id ng-if=\"$ctrl.rule.type === 'weekday'\"></rr-weekday-limit> <rr-date-limit rule=$ctrl.rule role=role.id ng-if=\"$ctrl.rule.type === 'date'\"></rr-date-limit> </ff-row> <ff-row ng-if=\"$ctrl.rule.type === 'value'\"> <rr-limit rule=$ctrl.rule options=$ctrl.options></rr-limit> </ff-row> <ff-row ng-if=\"$ctrl.rule.type === 'static'\"> <rr-static rule=$ctrl.rule></rr-static> </ff-row> </ng-form> "},I5Zy:function(e,r,t){"use strict";var l=t("xeXu"),n=t.n(l),a=t("0zKI"),i=t.n(a),o=(t("RF9M"),t("/MEN"),t("jd5N"));r.a=angular.module("dnd",["dndLists",o.a.name]).factory("dnd",["keese",function(e){return{move:function(r,t,l,a){var o=r[t];l&&i()(l).call(l,a,0,o);r===l&&a<=t&&t++;if(i()(r).call(r,t,1),l){var s=n()(l).call(l,o);o.order=e.generate(l[s-1]&&l[s-1].order,l[s+1]&&l[s+1].order)}return o}}}])},OngR:function(e,r){e.exports='<div> <ff-select ff-model=$ctrl.rule[$ctrl.role] ff-options="opt.id as opt.name for opt in $ctrl.options" ng-if="$ctrl.rule.type === \'roles\'" ff-change=$ctrl.rule.$as()></ff-select> <ff-select ff-model=$ctrl.rule.value ff-options="opt.id as opt.name for opt in $ctrl.options" ng-if="$ctrl.rule.type === \'value\'" ff-change=$ctrl.rule.$as()></ff-select> </div> '},jd5N:function(e,r,t){"use strict";var l=t("JRMi"),n=t.n(l),a=t("gQJ2"),i=t.n(a);r.a=angular.module("keese",[]).factory("keese",(function(){var e="0123456789?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",r=e.length,t=function(){for(var r={},t=0;t<e.length;t++)r[e[t]]=t;return r}();return{generate:function(e,r,t){return t?a(e,r,t):l(e,r)}};function l(e,r){return e?r?o(e,r):((t=f(e)).digits=t.digits.substr(0,t.order_length+1),s(t,f("1"))):r?o("0",r):"1";var t}function a(e,r,t){var n=new Array(t);if(t>0)if(r)!function e(r,t,a,i){var o=Math.floor((a+i)/2),s=l(r,t);n[o]=s,a<o&&e(r,s,a,o);o+1<i&&e(s,t,o+1,i)}(e,r,0,t);else for(var a=0;a<t;a++){var i=keese(e,null);n[a]=i,e=i}return n}function o(l,n){if(l>n)throw new Error("assertion failed: "+i()(l)+" < "+i()(n));var a=f(l),o=f(n);c(a,o);for(var d=0,v=Math.max(a.digits.length,o.digits.length),R=0;R<v||d>0;R++){var p=t[a.digits[R]]||0,m=d+(t[o.digits[R]]||0);if(p!==m){if(p!==m-1){for(var $=Math.floor((m-p)/2),E="",h=0;h<R;h++)E+="0";E+=e[$];var I=f(u(a.order_length,E));return a.digits=a.digits.substr(0,R+1),s(a,I)}d=r}}throw new Error}function s(l,n){c(l,n);for(var a="",i=l.order_length,o=0,s=Math.max(l.digits.length,n.digits.length)-1;s>=0;s--)o+=t[l.digits[s]]||0,o+=t[n.digits[s]]||0,a=e[o%r]+a,o=Math.floor(o/r);for(;o>0;)a=e[o%r]+a,o=Math.floor(o/r),i++;return u(i,a)}function f(e){var r=n()(e).call(e,"~")+1;return{order_length:r,digits:e.substr(r)}}function u(e,r){for(;e>0&&"0"==r.charAt(0);)r=r.substr(1),e--;for(var t="",l=0;l<e;l++)t+="~";return t+r}function c(e,r){d(e,r.order_length),d(r,e.order_length)}function d(e,r){for(;e.order_length<r;)e.digits="0"+e.digits,e.order_length++}}))},nzBw:function(e,r,t){"use strict";var l=t("hsT8"),n=t.n(l),a=t("yCd9"),i=t.n(a),o=t("WSeP"),s=t.n(o),f=t("nbuU"),u=t.n(f),c=t("7LHe"),d=t.n(c),v=(t("rYdl"),t("xeXu")),R=t.n(v),p=t("0zKI"),m=t.n(p),$=t("F3iT"),E=t.n($),h=(angular.module("deskworks.reservationRules.rrRule",["autoSave","deskworks.reservationRules.service"]).directive("rrRule",(function(){return{scope:!0,require:{rrCtrl:"^^reservationRules"},transclude:!0,template:E.a,controller:"RrRuleCtrl as $ctrl",bindToController:{rule:"<",options:"<",ruleSave:"&?"}}})).controller("RrRuleCtrl",["$scope","$element","$timeout","helper","dwAlerts","ReservationRules","autoSave",function(e,r,t,l,n,a,i){var o=this;o.$onInit=function(){r.addClass("ff-col"),o.roles=a.roles},o.$onChanges=function(){o.rule&&t((function(){var r=o.ruleSave||function(){return a.save({centerId:o.rrCtrl.centerId,reservationUnitId:o.rrCtrl.reservationUnitId},this).catch((function(e){return n.error(e,"Failed to save rule.")}))};o.rule.$as=i.wrap(r,e.rrForm)}))},o.deleteRule=function(){return(o.rule.id?a.delete({centerId:o.rrCtrl.centerId,ruleId:o.rule.id}):t()).then((function(){var e,r;return m()(e=o.rrCtrl.rules).call(e,R()(r=o.rrCtrl.rules).call(r,o.rule),1)})).catch((function(e){return n.error(e,"Failed to delete rule")}))}}]),t("OngR")),I=t.n(h),g=(angular.module("deskworks.reservationRules.rrLimit",[]).directive("rrLimit",(function(){return{scope:!0,template:I.a,controller:"RrLimitCtrl as $ctrl",bindToController:{rule:"<",role:"<",options:"<"}}})).controller("RrLimitCtrl",["$scope","$element",function(e,r){this.$onInit=function(){return r.addClass("ff-col")}}]),t("YtL8")),T=t.n(g),S=t("zae7"),A=t.n(S),L=(angular.module("deskworks.reservationRules.rrDateLimit",["deskworks.reservationRules.service"]).directive("rrDateLimit",(function(){return{scope:!0,require:["rrDateLimit","^^reservationRules"],template:A.a,controller:"RrDateLimitCtrl as $ctrl",bindToController:{rule:"<",role:"<"},link:function(e,r,t,l){l[0].rrCtrl=l[1]}}})).controller("RrDateLimitCtrl",["$scope","$element","$timeout","$translate","helper","ReservationRules",function(e,r,t,l,a,i){var o=this;o.options=[{id:!0,name:l.instant("RESERVATION_RULES.AVAILABLE")},{id:!1,name:l.instant("RESERVATION_RULES.NOT_AVAILABLE")}],o.$onInit=function(){r.addClass("ff-col"),e.$watch("$ctrl.rrCtrl.rules",o.updateGhosts)},o.addInterval=function(){o.rule.$$autoSaving||(o.rule[o.role].$ghosts&&o.rule[o.role].$ghosts.pop(),t((function(){o.rule[o.role].intervals.push({from:null,to:null}),o.updateGhosts()})))},o.deleteInterval=function(e){var r,l;if(!o.rule.$$autoSaving)return m()(r=o.rule[o.role].intervals).call(r,R()(l=o.rule[o.role].intervals).call(l,e),1),t(o.updateGhosts),e.id?o.rule.$as():null},o.updateGhosts=function(){var e,r;if(o.rrCtrl){var t=n()(e=o.rrCtrl.rules).call(e,(function(e){return"date"===e.type}));s()(r=i.roles).call(r,(function(e){var r=T()(t).call(t,(function(r,t){return t[e.id].available&&t[e.id].intervals.length>r?t[e.id].intervals.length:r}),0);s()(t).call(t,(function(t){t[e.id].$ghosts=new Array(r-(t[e.id].available?t[e.id].intervals.length:0))}))}))}}}]),t("wJY6")),_=t.n(L),w=(angular.module("deskworks.reservationRules.rrStatic",[]).directive("rrStatic",(function(){return{scope:!0,require:["rrWeekdayLimit","^^reservationRules"],template:_.a,controller:"RrStaticCtrl as $ctrl",bindToController:{rule:"<"}}})).controller("RrStaticCtrl",["$scope","$element","helper",function(e,r,t){this.$onInit=function(){return r.addClass("ff-col")}}]),t("10fB")),N=t.n(w),k=(angular.module("deskworks.reservationRules.rrWeekdayLimit",["deskworks.reservationRules.service"]).directive("rrWeekdayLimit",(function(){return{scope:!0,require:["rrWeekdayLimit","^^reservationRules"],template:N.a,controller:"RrWeekdayLimitCtrl as $ctrl",bindToController:{rule:"<",role:"<"},link:function(e,r,t,l){l[0].rrCtrl=l[1],l[0].onInit()}}})).controller("RrWeekdayLimitCtrl",["$scope","$element","$timeout","$translate","$locale","helper","ReservationRules",function(e,r,t,l,a,o,f){var c=this;c.weekdayIds=["sun","mon","tue","wed","thu","fri","sat"],c.options=[{id:!0,name:l.instant("RESERVATION_RULES.AVAILABLE")},{id:!1,name:l.instant("RESERVATION_RULES.NOT_AVAILABLE")}],c.onChangeAvailable=function(){if(angular.isString(c.rule[c.role].available)){var e,r=u()(o).call(o,c.rrCtrl.rules,{uid:c.rule[c.role].available});c.rule[c.role].intervals=i()(e=r[c.role].intervals).call(e,(function(e){return{from:e.from.clone(),to:e.to.clone()}})),c.rule[c.role].available=r[c.role].available}c.updateGhosts(),c.rule.$as()},c.onInit=function(){var t;r.addClass("ff-col"),s()(t=c.weekdayIds).call(t,(function(e){e!==c.rule.uid&&c.options.push({id:e,name:l.instant("RESERVATION_RULES.COPY_FROM",{weekday:u()(o).call(o,c.rrCtrl.rules,{uid:e}).name.toUpperCase()})})})),e.$watchCollection("$ctrl.rule[$ctrl.role].intervals",(function(){return c.updateGhosts()}))},c.addInterval=function(){c.rule.$$autoSaving||(c.rule[c.role].$ghosts.pop(),t((function(){return c.rule[c.role].intervals.push({from:null,to:null})})))},c.deleteInterval=function(e){var r,t;if(!c.rule.$$autoSaving)return m()(r=c.rule[c.role].intervals).call(r,R()(t=c.rule[c.role].intervals).call(t,e),1),e.id?c.rule.$as():null},c.updateGhosts=function(){var e,r,t=n()(e=c.rrCtrl.rules).call(e,(function(e){return"weekday"===e.type}));s()(r=f.roles).call(r,(function(e){var r=T()(t).call(t,(function(r,t){return t[e.id].available&&t[e.id].intervals.length>r?t[e.id].intervals.length:r}),0);s()(t).call(t,(function(t){t[e.id].$ghosts=new Array(r-(t[e.id].available?t[e.id].intervals.length:0))}))}))}}]),angular.module("deskworks.optsReservationScale",[]).factory("optsReservationScale",["$rootScope","$filter",function(e,r){var t=[{id:15},{id:30}];function l(){s()(t).call(t,(function(e){e.name=r("minutes")(e.id)}))}return l(),e.$on("$setTranslationsSuccess",l),t}])),b=angular.module("deskworks.optsReservationBuffer",[]).factory("optsReservationBuffer",["$rootScope","$translate","$filter",function(e,r,t){var l=[{id:0,_name:"GLOBAL.NONE"},{id:15},{id:30}];function n(){s()(l).call(l,(function(e){e.name=e._name?r.instant(e._name):t("minutes")(e.id)}))}return n(),e.$on("$setTranslationsSuccess",n),l}]);r.a=angular.module("deskworks.reservationRules",["deskworks.reservationRules.service","deskworks.inventory.product.service","deskworks.reservationRules.rrRule","deskworks.reservationRules.rrLimit","deskworks.reservationRules.rrWeekdayLimit","deskworks.reservationRules.rrDateLimit","deskworks.reservationRules.rrStatic","deskworks.reservationRules.optsWhoCanReserve","deskworks.reservationRules.optsReservationLimitMin","deskworks.reservationRules.optsReservationLimitMax","deskworks.reservationRules.optsDaysInAdvance","deskworks.reservationRules.optsTimeInAdvance",k.name,b.name]).directive("reservationRules",(function(){return{scope:!0,template:d.a,controller:"ReservationRulesCtrl as $ctrl",bindToController:{centerId:"<",reservationUnitId:"<"}}})).controller("ReservationRulesCtrl",["$scope","$q","$filter","$timeout","$translate","helper","dwAlerts","ReservationRules","productService","ReservationUnit","optsWhoCanReserve","optsReservationLimitMin","optsReservationLimitMax","optsDaysInAdvance","optsTimeInAdvance","optsReservationScale","optsReservationBuffer",function(e,r,t,l,a,o,f,c,d,v,R,p,m,$,E,h,I){var g=this;g.conf={whoCanReserve:{name:a.instant("RESERVATION_RULES.WHO_CAN_RESERVE"),opts:R},scale:{name:a.instant("RESERVATION_RULES.RESERVATION_SCALE"),opts:h},buffer:{name:a.instant("RESERVATION_RULES.RESERVATION_BUFFER"),opts:I},fullTimeProduct:{name:a.instant("RESERVATION_RULES.FULL_TIME_PRODUCT")},attachedUser:{name:a.instant("RESERVATION_RULES.ATTACHED_USER")},limitMin:{name:a.instant("RESERVATION_RULES.MIN_LIMIT"),opts:p},limitMax:{name:a.instant("RESERVATION_RULES.MAX_LIMIT"),opts:m},daysInAdvance:{name:a.instant("RESERVATION_RULES.DAYS_IN_ADVANCE"),opts:$},timeInAdvance:{name:a.instant("RESERVATION_RULES.TIME_IN_ADVANCE"),opts:E}},g.$onInit=function(){g.form=e.formReservationRules},g.$onChanges=function(){c.query({centerId:g.centerId,reservationUnitId:g.reservationUnitId}).catch((function(e){return f.error(e,"Failed to load reservation rules.")})).then((function(e){var r,t,l;g.rules=e,g.whoCanReserve=u()(r=g.rules).call(r,(function(e){return"whoCanReserve"===e.uid})),g.scale=u()(t=g.rules).call(t,(function(e){return"scale"===e.uid})),g.buffer=u()(l=g.rules).call(l,(function(e){return"buffer"===e.uid}))})),g.reservationUnitId&&(v.get(g.centerId,g.reservationUnitId).catch((function(e){return f.error(e,"Reservation Rules failed to get reservation unit.")})).then((function(e){g.fullTimeProduct={uid:"fullTimeProduct",type:"value",value:e.fullTimeProductId},g.attachedUser={uid:"attachedUser",type:"static",value:e.attachedUserName}})),d.getMembershipProducts(g.centerId).catch((function(e){return f.error(e,"Reservation Rules failed to query membership products.")})).then((function(e){s()(angular).call(angular,e,(function(e){e.name+=" ("+t("ncurrency")(e.price)+")"})),g.conf.fullTimeProduct.opts=e,g.conf.fullTimeProduct.opts.unshift({id:null,name:a.instant("GLOBAL.NONE")})})))},e.$watch("$ctrl.whoCanReserve.value",(function(e){var r;e&&(s()(r=c.roles).call(r,(function(r){r.$visible=r.$isVisible(e)})),g.hideRules="staffOnly"===e||"notAvailable"===e)})),g.addDate=function(){g.rules.push({type:"date",member:{available:!1,intervals:[]},nonMember:{available:!1,intervals:[]}})},g.resetRules=function(){if(window.confirm(a.instant("RESERVATION_RULES.ACTIVE.BTN_RESET.CONFIRM")))return c.query({centerId:g.centerId}).catch((function(e){return f.error(e,"Failed to load reservation rules defaults from center.")})).then((function(e){return g.copyRules(e)}))},g.copyRules=function(e){var t;return r.all(i()(t=n()(e).call(e,(function(e){return"value"===e.type||"roles"===e.type||"weekday"===e.type}))).call(t,(function(e){var r,t,n=u()(o).call(o,g.rules,{uid:e.uid});if(n){switch(e.type){case"value":n.value=e.value;break;case"roles":s()(r=c.roles).call(r,(function(r){n[r.id]=e[r.id]}));break;case"weekday":s()(t=c.roles).call(t,(function(r){var t;n[r.id].available=e[r.id].available,n[r.id].intervals=i()(t=e[r.id].intervals).call(t,(function(e){return{from:e.from,to:e.to}}))}))}return l((function(){return n.$as()}),100)}})))},g.saveFullTimeProduct=function(){return v.save(g.centerId,{id:g.reservationUnitId,fullTimeProductId:g.fullTimeProduct.value&&+g.fullTimeProduct.value||null}).catch((function(e){return f.error(e,"Failed to save full time product.")}))}}])},rYdl:function(e,r,t){},wJY6:function(e,r){e.exports='<ff-static ff-bind="$ctrl.rule.value | nd"></ff-static> '},zae7:function(e,r){e.exports='<ff-row> <ff-select ff-model=$ctrl.rule[$ctrl.role].available ff-options="opt.id as opt.name for opt in $ctrl.options" ff-change="$ctrl.updateGhosts() + $ctrl.rule.$as()"></ff-select> <ff-btn flex=none sense=add size=xs ng-class="{ invisible: !$ctrl.rule[$ctrl.role].available }" title="{{\'RESERVATION_RULES.BTN_ADD_INTERVAL.HINT\' | translate}}" ff-click=$ctrl.addInterval()></ff-btn> </ff-row> <ff-row ng-repeat="interval in $ctrl.rule[$ctrl.role].intervals" ng-if=$ctrl.rule[$ctrl.role].available> <ff-time ff-model=interval.from ff-change=$ctrl.rule.$as() ff-required=true ff-time-order="{ early: interval.from, late: interval.to }" ff-validate-alert="{ field: (\'RESERVATION_RULES.TIME_FROM\' | translate), late: (\'RESERVATION_RULES.TIME_TO\' | translate) }" placeholder="09:00 AM"></ff-time> <ff-time ff-model=interval.to ff-change=$ctrl.rule.$as() ff-required=true ff-time-order="{ early: interval.from, late: interval.to }" ff-validate-alert="{ field: (\'RESERVATION_RULES.TIME_TO\' | translate), early: (\'RESERVATION_RULES.TIME_FROM\' | translate) }" placeholder="05:00 PM"></ff-time> <ff-btn flex=none sense=delete size=xs ff-click=$ctrl.deleteInterval(interval) title="{{\'RESERVATION_RULES.BTN_DELETE_INTERVAL.HINT\' | translate}}"></ff-btn> </ff-row> <ff-row ng-repeat="item in $ctrl.rule[$ctrl.role].$ghosts track by $index"> <ff-static></ff-static> </ff-row> '}}]);