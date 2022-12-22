(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"/MEN":function(t,n,e){},"03Ts":function(t,n,e){},"3W34":function(t,n){t.exports='<div class="ff-grid gutter-v-half gutter-h-half fp-grid"> <ff-panel flex="0 1 auto" class="ff-flex-start" style="z-index:1" ngf-drop="$ctrl.upload($ctrl.plan, $files, $invalidFiles)" ngf-pattern="\'image/png,image/jpeg\'" ngf-drag-over-class="dragover"> <div class="ff-relative" flex="none" ng-click="$ctrl.onPlanClick($event)" ff-dim="!$ctrl.plan.$$imageLoaded"> <ff-img ff-src="{{$ctrl.plan.image}}" ff-img-loaded="$ctrl.plan.$$imageLoaded" class="fp-image" ff-alt="Floor Plan"></ff-img> <div class="fp-points" dnd-list dnd-drop="callback({ list: $ctrl.plan.points, targetIndex: index, event: event })"> <div ng-repeat="point in $ctrl.plan.points" dnd-draggable="null" dnd-callback="$ctrl.dropPoint(list, $index, event)" ng-click="$ctrl.onPointClick(point, $event)" class="fp-point ff-tip-trigger" ng-class="{ available: $ctrl.isAvailable(point.$$unit), selected: $ctrl.point === point, invalid: !point.$$unit }" ng-style="{ top: point.y + \'%\', left: point.x + \'%\' }"> <ng-transclude ng-transclude-slot="hoverTip"></ng-transclude> </div> </div> </div> </ff-panel> <div flex="{md: \'0 1 352px\'}" ng-if="$ctrl.point"> <div ng-transclude="focusContent"></div> </div> <div flex="{md: \'0 1 352px\'}" ng-if="!$ctrl.point" class="ff-flex-start"> <div ng-transclude="noFocusContent"></div> </div> </div> '},"4tyb":function(t,n,e){},BQyx:function(t,n){t.exports='<div class="floor-plans"> <h1 class="page-title">{{state.getPageTitle()}}</h1> <div class="ff-grid gutter-v-half gutter-h-half"> <ff-panel flex="{md: \'0 0 40%\'}" class="ff-flex-start"> <ff-panel-header><span translate="FLOOR_PLANS.SELECT_A_PLAN"></span></ff-panel-header> <ff-row ff-dim="!$ctrl.plans"> <ff-select name="floorPlan" ff-model="$ctrl.plan" class="ff-read-only-ignore" ff-options="p.name || \'-\' for p in $ctrl.plans"></ff-select> <ff-btn-group class="buttons-row" flex="none"> <ff-btn sense="add" size="xs" ff-click="$ctrl.addPlan()"></ff-btn> </ff-btn-group> </ff-row> <ng-transclude ng-transclude-slot="selectorExtra" class="hide-empty"></ng-transclude> </ff-panel> <ng-transclude ng-transclude-slot="planSettings" flex="{md: \'0 0 60%\'}" class="hide-empty"></ng-transclude> <floor-plan ng-if="$ctrl.plan.image" class="animate-collapse" plan="$ctrl.plan" save="$ctrl.save()" point="$ctrl.point" is-available="$ctrl.isAvailable"> <hover-tip> <ng-transclude ng-transclude-slot="hoverTip"></ng-transclude> </hover-tip> <focus-content> <ng-transclude ng-transclude-slot="focusContent"></ng-transclude> </focus-content> <no-focus-content> <ng-transclude ng-transclude-slot="noFocusContent"></ng-transclude> </no-focus-content> </floor-plan> <ng-transclude ng-transclude-slot="bottomExtra" class="hide-empty"></ng-transclude> </div> </div> '},BRh7:function(t,n){t.exports='<floor-plans plans="$ctrl.plans" plan="$ctrl.plan" point="$ctrl.point" is-available="$ctrl.isAvailable" ff-bulk-read-only="true"> <hover-tip ng-init="point = $parent.$parent.point"> <ff-tip ng-if="point.$$unit" tip-type="white"> <ff-header>{{point.$$unit.name}}</ff-header> <ff-row> <ff-label flex="0 1 60px"><span translate="FLOOR_PLANS.POINT.STATUS"></span></ff-label> <ff-static><span translate="{{\'FLOOR_PLANS.POINT.STATUS.\' + (point.$$unit.availableFullTime ? \'AVAILABLE\' : \'NOT_AVAILABLE\')}}"></span></ff-static> </ff-row> <ff-row ng-if="point.$$unit.attachedUserName && !point.$$unit.$$user"> <ff-label flex="0 1 60px"><span translate="FLOOR_PLANS.POINT.MEMBER"></span></ff-label> <ff-static>{{point.$$unit.attachedUserName}}</ff-static> </ff-row> <ff-static ng-if="point.$$unit.$$user" class="ff-no-frame"> <ff-img flex="0 0 60px" class="fp-avatar" ff-src="{{point.$$unit.$$user.photo}}" ng-if="point.$$unit.$$user.photo" ff-alt="{{point.$$unit.$$user.name}}"></ff-img> <ff-col flex="auto"> <ff-col flex="auto" class="fp-user-container"> <div class="fp-user-name">{{point.$$unit.$$user.name}}</div> <div class="fp-user-company">{{point.$$unit.$$user.company}}</div> </ff-col> <ff-btn flex="none" sense="userSelect" size="sm" class="fp-btn-more" ff-click="$ctrl.more(point)"> <span translate="FLOOR_PLANS.POINT.BTN_MORE"></span> </ff-btn> </ff-col> </ff-static> </ff-tip> </hover-tip> </floor-plans> '},DLcK:function(t,n,e){"use strict";e.r(n);e("03Ts");var r=e("3W34"),a=e.n(r),i=e("tUjE"),l=e("JVmQ"),o=e("I5Zy");n.default=angular.module("deskworks.floorPlanDirective",[o.a.name,i.default.name,l.default.name]).directive("floorPlan",(function(){return{template:a.a,restrict:"E",scope:!0,controller:"FloorPlanDirectiveCtrl as $ctrl",transclude:{hoverTip:"?hoverTip",focusContent:"?focusContent",noFocusContent:"?noFocusContent"},bindToController:{plan:"<",point:"=?",save:"&",isAvailable:"<?"}}})).controller("FloorPlanDirectiveCtrl",["$element","$scope","$window","state","dwAlerts","helper",function(t,n,e,r,a,i){var l=this;l.$onInit=function(){},l.onPointClick=function(t,n){l.point=t,n&&n.stopPropagation()},l.onPlanClick=function(e){if(n.ffBlock.editMode){var r=t[0].querySelector(".fp-image"),a={x:i.round(100*e.offsetX/r.offsetWidth),y:i.round(100*e.offsetY/r.offsetHeight)};l.plan.points.push(a),l.onPointClick(a)}},l.dropPoint=function(e,r,a){if(n.ffBlock.editMode){var o=e[r],f=t[0].querySelector(".fp-image");return o.x=i.round(100*a.offsetX/f.offsetWidth),o.y=i.round(100*a.offsetY/f.offsetHeight),l.save(l.plan),!0}}}])},EFlW:function(t,n){t.exports='<ff-panel> <div class="ff-col"> <div> <ff-header><span translate="FLOOR_PLANS.POINT.HEADER"></span></ff-header> <ff-select name="reservationCategory" ff-model="$ctrl.point.$$category" ff-required="true" ff-validate-alert="{{\'FLOOR_PLANS.CATEGORY\' | translate}}" ff-options="opt.name for opt in $ctrl.categories | filter: $ctrl.filterCategory"></ff-select> <ff-select name="reservationUnit" ff-model="$ctrl.point.$$unit" ff-change="$ctrl.save()" ff-required="true" ff-validate-alert="{{\'FLOOR_PLANS.UNIT\' | translate}}" ff-options="opt.name for opt in $ctrl.units | filter: $ctrl.filterUnit"></ff-select> </div> <ff-static ng-if="!$ctrl.point.$$category || !$ctrl.point.$$unit" class="ff-no-frame"> <span ng-if="!$ctrl.point.$$category"><ff-icon sense="info"></ff-icon> <span translate="FLOOR_PLANS.CATEGORY.HINT"></span></span> <span ng-if="$ctrl.point.$$category && !$ctrl.point.$$unit"><ff-icon sense="info"></ff-icon> <span translate="FLOOR_PLANS.UNIT.HINT"></span></span> </ff-static> <ff-btn-group style="margin-top:.5rem"> <ff-btn sense="delete" size="sm" ff-click="$ctrl.deletePoint()"><span translate="FLOOR_PLANS.POINT.BTN_DELETE"></span></ff-btn> </ff-btn-group> </div> </ff-panel> '},F4bp:function(t,n,e){"use strict";e.r(n);e("4tyb");var r=e("BQyx"),a=e.n(r);n.default=angular.module("deskworks.floorPlansDirective",[]).directive("floorPlans",(function(){return{template:a.a,restrict:"E",scope:!0,controller:"FloorPlansDirectiveCtrl as $ctrl",transclude:{hoverTip:"?hoverTip",focusContent:"?focusContent",noFocusContent:"?noFocusContent",selectorExtra:"?selectorExtra",planSettings:"?planSettings",bottomExtra:"?bottomExtra"},bindToController:{plans:"<",plan:"=?",point:"=?",save:"&",isAvailable:"<?"}}})).controller("FloorPlansDirectiveCtrl",["$scope","FloorPlan",function(t,n){var e=this;e.$onInit=function(){},e.$onChanges=function(){e.plans&&!e.plan&&(e.plan=e.plans[0])},e.addPlan=function(){e.plan=n.new(),e.plans.push(e.plan)}}])},Gn9L:function(t,n,e){},I5Zy:function(t,n,e){"use strict";var r=e("0zKI"),a=e.n(r),i=(e("RF9M"),e("/MEN"),e("jd5N"));n.a=angular.module("dnd",["dndLists",i.a.name]).factory("dnd",["keese",function(t){return{move:function(n,e,r,i){var l=n[e];r&&a()(r).call(r,i,0,l);n===r&&i<=e&&e++;if(a()(n).call(n,e,1),r){var o=r.indexOf(l);l.order=t.generate(r[o-1]&&r[o-1].order,r[o+1]&&r[o+1].order)}return l}}}])},JVmQ:function(t,n,e){"use strict";e.r(n);var r=e("0zKI"),a=e.n(r),i=e("EFlW"),l=e.n(i);n.default=angular.module("deskworks.floorPlanPointSettingsDirective",[]).directive("floorPlanPointSettings",(function(){return{template:l.a,restrict:"E",scope:!0,controller:"FloorPlanPointSettingsDirectiveCtrl as $ctrl",bindToController:{plan:"<",point:"=",categories:"<",units:"<",save:"&"}}})).controller("FloorPlanPointSettingsDirectiveCtrl",["$scope",function(t){var n=this;n.deletePoint=function(){var t;if(n.point)return a()(t=n.plan.points).call(t,n.plan.points.indexOf(n.point),1),n.point=null,n.save(n.plan)},n.filterCategory=function(t){return t.$$hasUnits||n.point&&t===n.point.$$category},n.filterUnit=function(t){return t.reservationTypeId===(n.point&&n.point.$$category&&n.point.$$category.id)&&(!t.$$hasPoint||n.point.$$unit===t)}}])},JZQZ:function(t,n,e){"use strict";e.r(n);var r=e("03wM"),a=e.n(r),i=e("Ekwr"),l=e.n(i),o=e("lvz6"),f=e.n(o),s=e("yKah"),c=e.n(s),u=e("fzuT"),p=e.n(u),d=(e("3dw1"),e("yCd9")),$=e.n(d),v=e("6RpP"),m=e.n(v),g=e("nbuU"),h=e.n(g),b=e("hsT8"),P=e.n(b),O=e("Sh1H"),L=e("F4bp"),I=e("2/1H"),T=e("ZNCF");function A(t,n){var e=a()(t);if(l.a){var r=l()(t);n&&(r=P()(r).call(r,(function(n){return f()(t,n).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?A(Object(e),!0).forEach((function(n){p()(t,n,e[n])})):c.a?Object.defineProperties(t,c()(e)):A(Object(e)).forEach((function(n){Object.defineProperty(t,n,f()(e,n))}))}return t}n.default=angular.module("deskworks.FloorPlansReservationCtrl",["deskworks.reservationCategory.service","deskworks.calendarService",O.default.name,L.default.name,I.a.name,T.a.name]).controller("FloorPlansReservationCtrl",["$scope","$translate","$filter","$q","$window","$timeout","session","dwAlerts","state","helper","FloorPlan","ReservationUnit","calendarService","OurMembers",function(t,n,e,r,a,i,l,o,f,s,c,u,p,d){var v=this;f.setPageTitle(n.instant("FLOOR_PLANS.PAGE_TITLE")),v.onInit=function(){i((function(){v.fetch().then((function(t){t.plans;var n,e=t.categories,r=t.units,a=t.members;v.categories=$()(e).call(e,(function(t){return s.pick(t,["id","name"])})),e.forEach((function(t){t.reservationUnits.forEach((function(n){n.reservationTypeId=t.id}))})),v.units=$()(n=e.reduce((function(t,n){return m()(t).call(t,n.reservationUnits)}),[])).call(n,(function(t){var n,e=h()(r).call(r,(function(n){return n.id===t.id}))||{},i=s.pick(y(y({},e),t),["id","name","description","area","capacity","thumbnail","photo","whoCanReserve","reservations","availabilities","attachedUserId","attachedUserName","availableFullTime","reservationTypeId"]),l=h()(n=t.reservations).call(n,(function(t){return t.from.isSameOrBefore(moment())&&t.to.isSameOrAfter(moment())}))||{};return(i.attachedUserId||l.userId)&&(i.$$user=h()(a).call(a,(function(t){return t.id===(i.attachedUserId||l.userId)}))),i})),v.plan=v.plans[0],v.plans.forEach((function(t){var n;t.points.forEach((function(t){var n,e;t.$$unit=h()(n=v.units).call(n,(function(n){return n.id===t.reservationUnitId})),t.$$category=t.$$unit&&h()(e=v.categories).call(e,(function(n){return n.id===t.$$unit.reservationTypeId}))})),t.points=P()(n=t.points).call(n,(function(t){return!!t.$$unit}))}))}))}))},v.isAvailable=function(t){return!!t&&"notAvailable"!==t.whoCanReserve&&"staffOnly"!==t.whoCanReserve&&t.availabilities.length>0},v.isReservable=function(t){return l.isAdmin()||!!t&&"notAvailable"!==t.whoCanReserve&&t.availabilities.length>0},v.reserve=function(){return f.setParam("unit",v.point.$$unit.id),f.setPath(f.getPath()+"/reservation")},v.fetchPlans=function(){return c.query(f.getCurrentCenterId()).catch((function(t){return o.error(t,"Failed to query floor plans.")})).then((function(t){v.plans=t}))},v.fetch=function(){var t={};return t.plans=v.fetchPlans(),t.units=u.query(f.getCurrentCenterId()).catch((function(t){return o.error(t,"Failed to query reservation units.")})),t.categories=p.query(f.getCurrentCenterId(),moment(),moment()).catch((function(t){return o.error(t,"Failed to query calendar.")})),t.members=d.query({centerId:f.getCurrentCenterId(),limit:1e4}).catch((function(t){return o.error(t,"Failed to query our members.")})),r.all(t)},v.onInit()}])},Sh1H:function(t,n,e){"use strict";e.r(n),n.default=angular.module("deskworks.FloorPlan",["ngResource","ngFileUpload","deskworks.config"]).factory("FloorPlan",["$resource","$timeout","Upload","deskworksConfig",function(t,n,e,r){var a=t(r.getApiAbsUrl("/floor-plans/:id"),{},{update:{method:"PUT"}});return{new:function(){return{enabled:!0,pricingEnabled:!0,areaEnabled:!0,points:[]}},query:function(t){return a.query({centerId:t}).$promise},save:function(t,n){return n.id?a.update({id:n.id,centerId:t},n).$promise:a.save({centerId:t},n).$promise.then((function(t){return n.id=t.id,t}))},delete:function(t){return a.delete({id:t}).$promise},uploadImage:function(t,n){return e.upload({url:r.getApiAbsUrl("/floor-plans/".concat(t)),method:"PUT",withCredentials:!0,data:{image:n}})}}}])},"SjL+":function(t,n,e){"use strict";e.r(n);e("8cZI");var r=e("hBaI"),a=e.n(r);n.default=angular.module("deskworks.floorPlanEmbeddingDirective",["deskworks.config"]).directive("floorPlanEmbedding",(function(){return{template:a.a,restrict:"E",scope:!0,controller:"FloorPlanEmbeddingDirectiveCtrl as $ctrl",bindToController:{floorPlan:"<"}}})).controller("FloorPlanEmbeddingDirectiveCtrl",["$scope","state","helper","deskworksConfig",function(t,n,e,r){var a=this;a.$onInit=function(){var t=r.getApiOrigin(),i=n.getCurrentCenterId();a.getCode=function(n){return e.join(["<script dw-floor-plans",'dw-center-id="'.concat(i,'"'),a.all?null:'dw-floor-plan-id="'.concat(a.floorPlan.id,'"'),'dw-origin="'.concat(t,'"'),'src="'.concat(t,'/floor-plans.js"'),'class="dw-spin"><\/script>']," ")}}}])},ZNCF:function(t,n,e){"use strict";var r=e("fzuT"),a=e.n(r),i=e("yCd9"),l=e.n(i),o=e("6RpP"),f=e.n(o),s=e("hsT8"),c=e.n(s),u=e("03wM"),p=e.n(u),d=e("Ekwr"),$=e.n(d),v=e("lvz6"),m=e.n(v),g=e("yKah"),h=e.n(g),b=(e("3dw1"),e("z3Z1")),P=e.n(b);e("Gn9L");function O(t,n){var e=p()(t);if($.a){var r=$()(t);n&&(r=c()(r).call(r,(function(n){return m()(t,n).enumerable}))),e.push.apply(e,r)}return e}function L(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?O(Object(e),!0).forEach((function(n){a()(t,n,e[n])})):h.a?Object.defineProperties(t,h()(e)):O(Object(e)).forEach((function(n){Object.defineProperty(t,n,m()(e,n))}))}return t}n.a=angular.module("deskworks.resBar",[]).component("resBar",{template:P.a,controller:"ResBarCtrl",bindings:{unit:"<",availabilities:"=?"}}).controller("ResBarCtrl",["$scope","$filter",function(t,n){var e=this;e.$onInit=function(){t.$watchCollection("$ctrl.unit.availabilities",(function(){if(e.unit){var t=[];e.unit.availabilities.forEach((function(n){t.push(moment.range(n.from,n.to))})),e.unit.reservations.forEach((function(n){var e=moment.range(n.from,n.to);t=l()(t).call(t,(function(t){return t.subtract(e)})).reduce((function(t,n){return f()(t).call(t,n)}),[])})),t=c()(t).call(t,(function(t){return(t.end-t.start)/36e5>=(e.unit.limitMin||0)})),e.availabilities=function(t){if(!t||!t.length)return[];var n=t[0].from,e=t[t.length-1].to;return l()(t).call(t,(function(t){return L(L({},t),{},{x1:r(t.from),x2:r(t.to)})}));function r(t){return 100*(t-n)/(e-n)}}(l()(t).call(t,(function(t){return{from:t.start,to:t.end}})))}}))}}])},aGPx:function(t,n,e){},cfxb:function(t,n){t.exports='<ff-panel> <div ng-if="$ctrl.view === \'public\'"> <ff-header>{{$ctrl.point.$$unit.name}}</ff-header> <ff-img class="fp-unit-photo" ng-if="$ctrl.point.$$unit.photo" ff-alt="{{$ctrl.point.$$unit.name}}" ff-src="{{$ctrl.point.$$unit.thumbnail}}" ff-src-hq="{{$ctrl.point.$$unit.photo}}"></ff-img> <ff-static class="fp-descr" ng-if="$ctrl.point.$$unit.description">{{$ctrl.point.$$unit.description}}</ff-static> <ff-row ng-if="$ctrl.point.$$unit.capacity"> <ff-static><span translate="GLOBAL.UNIT_CAPACITY" translate-values="{ capacity: $ctrl.point.$$unit.capacity }"></span></ff-static> </ff-row> <ff-row> <ff-label flex="0 0 52px"><span translate="FLOOR_PLANS.POINT.STATUS"></span></ff-label> <ff-static> <span translate="{{\'FLOOR_PLANS.POINT.STATUS.\' + ($ctrl.point.$$unit.availableFullTime ? \'AVAILABLE\' : \'NOT_AVAILABLE\')}}"></span> </ff-static> </ff-row> <ff-row ng-if="$ctrl.pricingEnabled && $ctrl.point.$$unit.fullTimePrice"> <ff-label flex="0 0 52px"><span translate="FLOOR_PLANS.POINT.PRICE"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimePrice | ncurrency}}</ff-static> </ff-row> <ff-row ng-if="$ctrl.areaEnabled && $ctrl.point.$$unit.area"> <ff-label flex="0 0 52px"><span translate="FLOOR_PLANS.POINT.AREA"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.area}} {{$ctrl.areaUnit}}</ff-static> </ff-row> </div> <div ng-if="$ctrl.view === \'community\'"> <ff-header>{{$ctrl.point.$$unit.name}}</ff-header> <div> <ff-row> <ff-label flex="0 1 80px"><span translate="FLOOR_PLANS.POINT.STATUS"></span></ff-label> <ff-static> <span translate="{{\'FLOOR_PLANS.POINT.STATUS.\' + ($ctrl.point.$$unit.availableFullTime ? \'AVAILABLE\' : \'NOT_AVAILABLE\')}}"></span> </ff-static> </ff-row> <ff-row ng-if="$ctrl.point.$$unit.attachedUserName && !$ctrl.point.$$unit.$$user"> <ff-label flex="0 1 80px"><span translate="FLOOR_PLANS.POINT.MEMBER"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.attachedUserName}}</ff-static> </ff-row> <ff-row ng-if="$ctrl.point.$$unit.$$user"> <ff-static> <ff-img flex="0 0 60px" class="fp-avatar" ff-src="{{$ctrl.point.$$unit.$$user.photo}}" ng-if="$ctrl.point.$$unit.$$user.photo" ff-alt="{{$ctrl.point.$$unit.$$user.name}}"></ff-img> <ff-col style="margin-right:.5rem;padding:.5rem 0"> <span class="fp-user-name">{{$ctrl.point.$$unit.$$user.name}}</span> <span class="fp-user-company">{{$ctrl.point.$$unit.$$user.company}}</span> </ff-col> <ff-btn flex="none" sense="userSelect" size="sm" class="fp-btn-more" ff-click="$ctrl.more()"> <span translate="FLOOR_PLANS.POINT.BTN_MORE"></span> </ff-btn> </ff-static> </ff-row> <ff-row ng-if="$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode"> <ff-label flex="0 1 80px"><span translate="FLOOR_PLANS.POINT.PRODUCT"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimeProductName}}</ff-static> </ff-row> <ff-row ng-if="$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode"> <ff-label flex="0 1 80px"><span translate="FLOOR_PLANS.POINT.PRICE"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimePrice | ncurrency}}</ff-static> </ff-row> <ff-row ng-if="$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode"> <ff-label flex="0 1 80px"><span translate="FLOOR_PLANS.POINT.NET"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimeNet | ncurrency}}</ff-static> </ff-row> <ff-row ng-if="$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode"> <ff-label flex="0 1 80px"><span translate="FLOOR_PLANS.POINT.DISCOUNT"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimeDiscount | ncurrency}}</ff-static> </ff-row> </div> </div> </ff-panel> '},e32L:function(t,n,e){"use strict";e.r(n);var r=e("wOy2"),a=e.n(r);n.default=angular.module("deskworks.floorPlanSettingsDirective",[]).directive("floorPlanSettings",(function(){return{template:a.a,restrict:"E",scope:!0,controller:"FloorPlanSettingsDirectiveCtrl as $ctrl",bindToController:{plan:"<",upload:"<",save:"&",delete:"&"}}})).controller("FloorPlanSettingsDirectiveCtrl",["$scope",function(t){}])},eL8s:function(t,n,e){"use strict";e.r(n);e("3dw1"),e("Muwe"),e("y89P");var r=e("yCd9"),a=e.n(r),i=e("lRNC"),l=e.n(i),o=e("BZ5f"),f=["$injector",function(t){var n,r,i=(n=e("xlK/"),a()(r=l()(n).call(n)).call(r,n));t.loadNewModules(a()(i).call(i,(function(t){return t.default.name}))),t.loadNewModules([o.a.name]),t.invoke(["$templateCache",function(t){var n=e("zB24");l()(n).call(n).forEach((function(e){return t.put(e.replace(/^\.\//,""),n(e))}))}])}];n.default=f},h2Ow:function(t,n,e){"use strict";e.r(n);e("3dw1");var r=e("yCd9"),a=e.n(r),i=e("nbuU"),l=e.n(i),o=e("hsT8"),f=e.n(o),s=(e("jUNa"),e("Sh1H")),c=e("F4bp"),u=e("2/1H"),p=e("iAzO");n.default=angular.module("deskworks.FloorPlansCommunityCtrl",["deskworks.reservationCategory.service",s.default.name,c.default.name,u.a.name,p.a.name]).controller("FloorPlansCommunityCtrl",["$scope","$translate","$filter","$q","$window","$timeout","dwModal","session","dwAlerts","state","helper","FloorPlan","ReservationUnit","reservationCategoryService","OurMembers",function(t,n,e,r,i,o,s,c,u,p,d,$,v,m,g){var h=this;p.setPageTitle(n.instant("FLOOR_PLANS.PAGE_TITLE")),h.onInit=function(){o((function(){h.fetch().then((function(t){t.plans;var n=t.reservationCategories,e=t.reservationUnits,r=t.members;h.categories=a()(n).call(n,(function(t){return d.pick(t,["id","name"])})),h.units=a()(e).call(e,(function(t){var n=d.pick(t,["id","name","description","area","capacity","thumbnail","photo","attachedUserId","attachedUserName","availableFullTime","fullTimeProductId","fullTimeProductName","fullTimePrice","fullTimeNet","fullTimeDiscount","reservationTypeId"]);return n.attachedUserId&&(n.$$user=l()(r).call(r,(function(t){return t.id===n.attachedUserId}))),n})),h.plan=h.plans[0],h.plans.forEach((function(t){var n;t.points.forEach((function(t){var n,e;t.$$unit=l()(n=h.units).call(n,(function(n){return n.id===t.reservationUnitId})),t.$$category=t.$$unit&&l()(e=h.categories).call(e,(function(n){return n.id===t.$$unit.reservationTypeId}))})),t.points=f()(n=t.points).call(n,(function(t){return!!t.$$unit}))}))}))}))},h.isAvailable=function(t){return!!t&&t.availableFullTime},h.more=function(n){s.show({scope:t,templateUrl:"members/our-members/our-member-modal.tpl.html",controller:"OurMemberModalCtrl",inputs:{member:n.$$unit.$$user}})},h.fetchPlans=function(){return $.query(p.getCurrentCenterId()).catch((function(t){return u.error(t,"Failed to query floor plans.")})).then((function(t){h.plans=t}))},h.fetch=function(){var t={};return t.plans=h.fetchPlans(),t.reservationCategories=m.query(p.getCurrentCenterId()).catch((function(t){return u.error(t,"Failed to query reservation categories.")})),t.reservationUnits=v.query(p.getCurrentCenterId()).catch((function(t){return u.error(t,"Failed to query reservation units.")})),t.members=g.query({centerId:p.getCurrentCenterId(),limit:1e4}).catch((function(t){return u.error(t,"Failed to query our members.")})),r.all(t)},h.onInit()}])},hBaI:function(t,n){t.exports="<ff-panel> <ff-panel-header><span translate=\"FLOOR_PLANS.EMBEDDING.HEADER\"></span></ff-panel-header> <ff-static> <label><ff-checkbox ff-model=\"$ctrl.all\"><span translate=\"FLOOR_PLANS.EMBEDDING.ALL\"></span></ff-checkbox></label> &nbsp; <ff-hint><span translate=\"FLOOR_PLANS.EMBEDDING.ALL.HINT\"></span></ff-hint> </ff-static> <ff-static><span translate=\"FLOOR_PLANS.EMBEDDING.HINT\"></span></ff-static> <ff-static ff-style=\"{'white-space': 'pre-wrap', 'font-family': 'monospace', 'font-size': '.85em', 'line-height': '1.25'}\">{{$ctrl.getCode()}}</ff-static> </ff-panel> "},hfBW:function(t,n,e){"use strict";e.r(n);e("3dw1"),e("JBxO"),e("FdtR");var r=e("yCd9"),a=e.n(r),i=e("nbuU"),l=e.n(i),o=e("hsT8"),f=e.n(o),s=e("0zKI"),c=e.n(s),u=(e("aGPx"),e("Sh1H")),p=e("DLcK"),d=e("e32L"),$=e("SjL+"),v=e("2/1H");n.default=angular.module("deskworks.FloorPlansCtrl",["autoSave","deskworks.reservationCategory.service",u.default.name,p.default.name,d.default.name,$.default.name,v.a.name,"deskworks.OurMembers"]).controller("FloorPlansCtrl",["$scope","$translate","$filter","$q","$window","$timeout","session","dwAlerts","state","helper","autoSave","FloorPlan","ReservationUnit","reservationCategoryService","OurMembers",function(t,n,e,r,i,o,s,u,p,d,$,v,m,g,h){var b=this;p.setPageTitle(n.instant("FLOOR_PLANS.PAGE_TITLE")),b.onInit=function(){o((function(){b.view="community",b.fetch().then((function(n){n.plans;var e=n.reservationCategories,r=n.reservationUnits,i=n.members;b.categories=a()(e).call(e,(function(t){return d.pick(t,["id","name"])})),b.units=a()(r).call(r,(function(t){var n=d.pick(t,["id","name","description","area","capacity","thumbnail","photo","attachedUserId","attachedUserName","availableFullTime","fullTimeProductId","fullTimeProductName","fullTimePrice","fullTimeNet","fullTimeDiscount","reservationTypeId"]);return n.attachedUserId&&(n.$$user=l()(i).call(i,(function(t){return t.id===n.attachedUserId}))),n})),b.plan=b.plans[0],b.plans.forEach((function(t){t.points.forEach((function(t){var n,e;t.$$unit=l()(n=b.units).call(n,(function(n){return n.id===t.reservationUnitId})),t.$$category=t.$$unit&&l()(e=b.categories).call(e,(function(n){return n.id===t.$$unit.reservationTypeId}))}))})),t.$watchCollection((function(){var t;return b.plan?a()(t=b.plan.points).call(t,(function(t){return(t.$$unit||{}).id})):[]}),(function(){b.units.forEach((function(t){var n;t.$$hasPoint=!!l()(n=b.plan.points).call(n,(function(n){return n.$$unit===t}))})),b.categories.forEach((function(t){var n;t.$$hasUnits=!!l()(n=b.units).call(n,(function(n){return!n.$$hasPoint&&n.reservationTypeId===t.id}))}))}))})),t.$watch("$ctrl.plan",(function(){b.point=null}))}))},b.isAvailable=function(t){return!!t&&t.availableFullTime},b.fetchPlans=function(){return v.query(p.getCurrentCenterId()).catch((function(t){return u.error(t,"Failed to query floor plans.")})).then((function(t){b.plans=t}))},b.fetch=function(){var t={};return t.plans=b.fetchPlans(),t.reservationCategories=g.query(p.getCurrentCenterId()).catch((function(t){return u.error(t,"Failed to query reservation categories.")})),t.reservationUnits=m.query(p.getCurrentCenterId()).catch((function(t){return u.error(t,"Failed to query reservation units.")})),t.members=h.query({centerId:p.getCurrentCenterId(),limit:1e4}).catch((function(t){return u.error(t,"Failed to query our members.")})),r.all(t)},b.save=$.wrap((function(){var t;if(d.pointFirstInvalid("floor-plan-settings"))return;var n=d.pick(b.plan,["id","name","enabled","pricingEnabled","areaEnabled","points"]);return n.points=f()(t=n.points).call(t,(function(t){return!(!t.$$unit||!(t.reservationUnitId=t.$$unit.id))})),v.save(p.getCurrentCenterId(),n).catch((function(t){return u.error(t,"Failed to save floor plan")})).then((function(t){b.plan.id=t.id}))})),b.deletePlan=function(t){if(!t.id||i.confirm(n.instant("FLOOR_PLANS.CONFIRM_DELETE")))return(t.id?v.delete(t.id):r.when()).catch((function(t){return u.error(t,"Failed to delete floor plan.")})).then((function(){var n;c()(n=b.plans).call(n,b.plans.indexOf(t),1),t===b.plan&&(b.plan=b.plans[0])}))},b.uploadPlanImage=function(t,e,r){if(!d.pointFirstInvalid("floor-plan-settings")){if(r&&r.length>0)return u.error(n.instant("FLOOR_PLANS.IMAGE.INVALID_FORMAT"));if(t&&t.id&&e&&e.length)return t.$$spinUpload=!0,v.uploadImage(t.id,e[0]).catch((function(t){return u.error(t,"Failed to upload floor plan image.")})).finally((function(){t.$$spinUpload=!1})).then((function(n){t.thumbnail=n.data.thumbnail+"?"+Date.now(),t.image=n.data.image+"?"+Date.now()}))}},b.onInit()}])},jUNa:function(t,n,e){},jd5N:function(t,n,e){"use strict";var r=e("gQJ2"),a=e.n(r);n.a=angular.module("keese",[]).factory("keese",(function(){var t="0123456789?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n=t.length,e=function(){for(var n={},e=0;e<t.length;e++)n[t[e]]=e;return n}();return{generate:function(t,n,e){return e?i(t,n,e):r(t,n)}};function r(t,n){return t?n?l(t,n):((e=f(t)).digits=e.digits.substr(0,e.order_length+1),o(e,f("1"))):n?l("0",n):"1";var e}function i(t,n,e){var a=new Array(e);if(e>0)if(n)!function t(n,e,i,l){var o=Math.floor((i+l)/2),f=r(n,e);a[o]=f,i<o&&t(n,f,i,o);o+1<l&&t(f,e,o+1,l)}(t,n,0,e);else for(var i=0;i<e;i++){var l=keese(t,null);a[i]=l,t=l}return a}function l(r,i){if(r>i)throw new Error("assertion failed: "+a()(r)+" < "+a()(i));var l=f(r),u=f(i);c(l,u);for(var p=0,d=Math.max(l.digits.length,u.digits.length),$=0;$<d||p>0;$++){var v=e[l.digits[$]]||0,m=p+(e[u.digits[$]]||0);if(v!==m){if(v!==m-1){for(var g=Math.floor((m-v)/2),h="",b=0;b<$;b++)h+="0";h+=t[g];var P=f(s(l.order_length,h));return l.digits=l.digits.substr(0,$+1),o(l,P)}p=n}}throw new Error}function o(r,a){c(r,a);for(var i="",l=r.order_length,o=0,f=Math.max(r.digits.length,a.digits.length)-1;f>=0;f--)o+=e[r.digits[f]]||0,o+=e[a.digits[f]]||0,i=t[o%n]+i,o=Math.floor(o/n);for(;o>0;)i=t[o%n]+i,o=Math.floor(o/n),l++;return s(l,i)}function f(t){var n=t.lastIndexOf("~")+1;return{order_length:n,digits:t.substr(n)}}function s(t,n){for(;t>0&&"0"==n.charAt(0);)n=n.substr(1),t--;for(var e="",r=0;r<t;r++)e+="~";return e+n}function c(t,n){u(t,n.order_length),u(n,t.order_length)}function u(t,n){for(;t.order_length<n;)t.digits="0"+t.digits,t.order_length++}}))},mCRw:function(t,n){t.exports='<floor-plans plans="$ctrl.plans" plan="$ctrl.plan" point="$ctrl.point" is-available="$ctrl.isAvailable" ff-bulk-read-only="true"> <hover-tip ng-init="point = $parent.$parent.point"> <ff-tip ng-if="point.$$unit" tip-type="white" style="padding:5px;min-width:160px;width:160px"> <span>{{point.$$unit.name}}</span> </ff-tip> </hover-tip> <focus-content> <ff-panel> <div> <ff-header>{{$ctrl.point.$$unit.name}}</ff-header> <div class="ff-col"> <ff-img class="fp-unit-photo" ng-if="$ctrl.point.$$unit.photo" ff-alt="{{$ctrl.point.$$unit.name}}" ff-src="{{$ctrl.point.$$unit.photo}}" ff-src-hq="{{$ctrl.point.$$unit.photo}}"></ff-img> <ff-static class="fp-descr" ng-if="$ctrl.point.$$unit.description">{{$ctrl.point.$$unit.description}}</ff-static> <ff-row ng-if="$ctrl.point.$$unit.capacity"> <ff-static><span translate="GLOBAL.UNIT_CAPACITY" translate-values="{ capacity: $ctrl.point.$$unit.capacity }"></span></ff-static> </ff-row> <ff-static ng-if="$ctrl.point.$$unit.$$user" class="ff-no-frame" style="text-transform:uppercase;font-weight:700;margin-bottom:-.75rem;display:block"> <span translate="FLOOR_PLANS.POINT.WHO_IS_THERE"></span> </ff-static> <ff-row ng-if="$ctrl.point.$$unit.$$user"> <ff-static> <ff-img flex="0 0 60px" class="fp-avatar" ff-src="{{$ctrl.point.$$unit.$$user.photo}}" ng-if="$ctrl.point.$$unit.$$user.photo" ff-alt="{{$ctrl.point.$$unit.$$user.name}}"></ff-img> <ff-col style="margin-right:.5rem;padding:.5rem 0"> <span class="fp-user-name">{{$ctrl.point.$$unit.$$user.name}}</span> </ff-col> <ff-btn flex="none" sense="userSelect" size="sm" class="fp-btn-more" ff-click="$ctrl.more()"> <span translate="FLOOR_PLANS.POINT.BTN_MORE"></span> </ff-btn> </ff-static> </ff-row> <div class="ff-row fp-legend gutter-h-half"> <div flex="auto" translate="FLOOR_PLANS.POINT.AVAILABILITY_TODAY"></div> <div flex="none" style="display:block;margin:-8px 0"> <div class="available" translate="FLOOR_PLANS.POINT.AVAILABILITY_TODAY.AVAILABLE"></div> <div class="unavailable" translate="FLOOR_PLANS.POINT.AVAILABILITY_TODAY.UNAVAILABLE"></div> </div> </div> <res-bar unit="$ctrl.point.$$unit"></res-bar> <div ng-if="$ctrl.point.$$unit.reservations.length" style="margin:.6rem 0 0 0;font-size:.95rem"> <div ng-repeat="res in $ctrl.point.$$unit.reservations" ng-if="res.userName" style="margin-top:.4rem"> <span nice-time="res.from"></span> - <span nice-time="res.to"></span> - <span>{{res.userName}}</span> </div> </div> <ff-btn-group class="ff-tmargin" ng-if="$ctrl.isReservable($ctrl.point.$$unit)"> <ff-btn sense="ok" size="sm" class="ff-btn-full" ff-click="$ctrl.reserve()"> <span translate="FLOOR_PLANS.POINT.BTN_RESERVE"></span> </ff-btn> </ff-btn-group> </div> </div> </ff-panel> </focus-content> </floor-plans> '},"s8F+":function(t,n){t.exports='<floor-plans plans="$ctrl.plans" plan="$ctrl.plan" point="$ctrl.point" save="$ctrl.save()" is-available="$ctrl.isAvailable" ff-bulk-read-only> <focus-content> <div class="ff-grid gutter-v-half"> <floor-plan-point-settings ng-if="$parent.ffBlock.editMode" class="ff-flex-start" point="$ctrl.point" categories="$ctrl.categories" units="$ctrl.units" plan="$ctrl.plan" save="$ctrl.save($ctrl.plan)"></floor-plan-point-settings> <floor-plan-point-details ng-if="$ctrl.point.$$unit" point="$ctrl.point" view="$ctrl.view" pricing-enabled="$ctrl.plan.pricingEnabled" area-enabled="$ctrl.plan.areaEnabled"></floor-plan-point-details> </div> </focus-content> <no-focus-content> <ff-panel ng-if="$parent.ffBlock.editMode" class="ff-flex-start"> <div><ff-icon sense="info"></ff-icon> <span translate="FLOOR_PLANS.POINT.HINT.SELECT"></span></div> <div><ff-icon sense="info"></ff-icon> <span translate="FLOOR_PLANS.POINT.HINT.CREATE"></span></div> <div><ff-icon sense="info"></ff-icon> <span translate="FLOOR_PLANS.POINT.HINT.DRAG"></span></div> </ff-panel> </no-focus-content> <selector-extra> <div class="ff-grid gutter-h-half ff-read-only-ignore" style="justify-content:flex-start"> <label flex="none"> <ff-radio ff-model="$ctrl.view" ff-value="\'public\'"><span translate="FLOOR_PLANS.VIEW.PUBLIC"></span></ff-radio> </label> <label flex="none"> <ff-radio ff-model="$ctrl.view" ff-value="\'community\'"><span translate="FLOOR_PLANS.VIEW.COMMUNITY"></span></ff-radio> </label> </div> </selector-extra> <plan-settings> <floor-plan-settings ng-if="$parent.ffBlock.editMode && $ctrl.plan" class="animate-collapse" plan="$ctrl.plan" delete="$ctrl.deletePlan($ctrl.plan)" save="$ctrl.save($ctrl.plan)" upload="$ctrl.uploadPlanImage"></floor-plan-settings> </plan-settings> <bottom-extra> <floor-plan-embedding ng-if="$parent.ffBlock.editMode && $ctrl.plan.image" floor-plan="$ctrl.plan" class="animate-collapse" style="display:block"></floor-plan-embedding> </bottom-extra> </floor-plans> '},tUjE:function(t,n,e){"use strict";e.r(n);var r=e("nbuU"),a=e.n(r),i=e("cfxb"),l=e.n(i),o=e("iAzO");n.default=angular.module("deskworks.floorPlanPointDetailsDirective",[o.a.name]).directive("floorPlanPointDetails",(function(){return{template:l.a,restrict:"E",scope:!0,controller:"FloorPlanPointDetailsDirectiveCtrl as $ctrl",bindToController:{point:"<",pricingEnabled:"<",areaEnabled:"<",view:"<"}}})).controller("FloorPlanPointDetailsDirectiveCtrl",["$scope","dwModal",function(t,n){var e,r=this;r.areaUnit=(a()(e=window.dwLocales).call(e,(function(n){return n.id===t.currentLocale}))||{}).area||"ft²",r.more=function(){n.show({scope:t,templateUrl:"members/our-members/our-member-modal.tpl.html",controller:"OurMemberModalCtrl",inputs:{member:r.point.$$unit.$$user}})}}])},wOy2:function(t,n){t.exports='<ff-panel ngf-drop="$ctrl.upload($ctrl.plan, $files, $invalidFiles)" ngf-pattern="\'image/png,image/jpeg\'" ngf-drag-over-class="dragover"> <ff-panel-header> <span translate="FLOOR_PLANS.SETTINGS.HEADER"></span> <ff-hint><span translate="FLOOR_PLANS.IMAGE.HINT"></span></ff-hint> </ff-panel-header> <ff-spin ng-if="$ctrl.plan.$$autoSaving"></ff-spin> <div class="ff-grid" style="justify-content:flex-start"> <label class="ff-row" flex="0 1 240px"> <ff-label flex="0 1 60px"><req translate="FLOOR_PLANS.NAME"></req></ff-label> <ff-text name="floorPlanName" ff-model="$ctrl.plan.name" ff-change="$ctrl.save()" ff-required="true" ff-validate-alert="{{\'FLOOR_PLANS.NAME\' | translate}}"></ff-text> </label> <ff-static class="ff-no-frame" flex="auto"> <div class="ff-grid gutter-h-half"> <label flex="none"> <ff-checkbox name="enabled" ff-model="$ctrl.plan.enabled" ff-change="$ctrl.save()"> <span translate="FLOOR_PLANS.ENABLED"></span> </ff-checkbox> </label> <label flex="none"> <ff-checkbox name="pricingEnabled" ff-model="$ctrl.plan.pricingEnabled" ff-change="$ctrl.save()"> <span translate="FLOOR_PLANS.PRICING_VISIBLE"></span> </ff-checkbox> </label> <label flex="none"> <ff-checkbox name="areaEnabled" ff-model="$ctrl.plan.areaEnabled" ff-change="$ctrl.save()"> <span translate="FLOOR_PLANS.AREA_VISIBLE"></span> </ff-checkbox> </label> </div> </ff-static> </div> <ff-btn-group style="margin-top:.5rem"> <ff-btn sense="upload" size="sm" ff-spin="$ctrl.plan.$$spinUpload" ngf-select="$ctrl.upload($ctrl.plan, $files, $invalidFiles)" ngf-pattern="\'image/png,image/jpeg\'" accept="image/png,image/jpeg"> <span translate="FLOOR_PLANS.IMAGE.BTN_UPLOAD"></span> </ff-btn> <ff-btn sense="delete" size="sm" ff-click="$ctrl.delete()"><span translate="FLOOR_PLANS.BTN_DELETE"></span></ff-btn> </ff-btn-group> </ff-panel> '},"xlK/":function(t,n,e){var r={"./directives/floor-plan-embedding.directive.js":"SjL+","./directives/floor-plan-point-details.directive.js":"tUjE","./directives/floor-plan-point-settings.directive.js":"JVmQ","./directives/floor-plan-settings.directive.js":"e32L","./directives/floor-plan.directive.js":"DLcK","./directives/floor-plans.directive.js":"F4bp","./floor-plans-community/floor-plans-community.controller.js":"h2Ow","./floor-plans-reservation/floor-plans-reservation.controller.js":"JZQZ","./floor-plans/floor-plans.controller.js":"hfBW","./services/floor-plan.service.js":"Sh1H"};function a(t){var n=i(t);return e(n)}function i(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="xlK/"},z3Z1:function(t,n){t.exports='<div ng-repeat="av in $ctrl.availabilities" ng-style="{ left: av.x1 + \'%\', right: 100 - av.x2 + \'%\' }" class="availability"> <span nice-time="av.from" nice-format="shortHours" class="from"></span> <span nice-time="av.to" nice-format="shortHours" class="to"></span> </div> '},zB24:function(t,n,e){var r={"./directives/floor-plan-embedding.tpl.html":"hBaI","./directives/floor-plan-point-details.tpl.html":"cfxb","./directives/floor-plan-point-settings.tpl.html":"EFlW","./directives/floor-plan-settings.tpl.html":"wOy2","./directives/floor-plan.tpl.html":"3W34","./directives/floor-plans.tpl.html":"BQyx","./floor-plans-community/floor-plans-community.tpl.html":"BRh7","./floor-plans-reservation/floor-plans-reservation.tpl.html":"mCRw","./floor-plans/floor-plans.tpl.html":"s8F+"};function a(t){var n=i(t);return e(n)}function i(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="zB24"}}]);