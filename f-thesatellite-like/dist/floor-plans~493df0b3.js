(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/MEN":function(t,n,e){},"03Ts":function(t,n,e){},"3W34":function(t,n){t.exports='<div class="ff-grid gutter-v-half gutter-h-half" style="justify-content:flex-start"> <ff-panel flex="0 1 auto" class="ff-flex-start" style="z-index:1" ngf-drop="$ctrl.upload($ctrl.plan, $files, $invalidFiles)" ngf-pattern="\'image/png,image/jpeg\'" ngf-drag-over-class="dragover"> <div class="ff-relative" flex="none" ng-click="$ctrl.onPlanClick($event)" ff-dim="!$ctrl.plan.$$imageLoaded"> <ff-img ff-src="{{$ctrl.plan.image}}" ff-img-loaded="$ctrl.plan.$$imageLoaded" class="fp-image" ff-alt="Floor Plan"></ff-img> <div class="fp-points" dnd-list dnd-drop="callback({ list: $ctrl.plan.points, targetIndex: index, event: event })"> <div ng-repeat="point in $ctrl.plan.points" dnd-draggable="null" dnd-callback="$ctrl.dropPoint(list, $index, event)" ng-click="$ctrl.onPointClick(point, $event)" class="fp-point" ng-class="{ available: $ctrl.isAvailable(point.$$unit), selected: $ctrl.point === point, invalid: !point.$$unit }" ng-style="{ top: point.y + \'%\', left: point.x + \'%\' }"> <ff-tip ng-if="point.$$unit && !ffBlock.editMode" tip-type="white"> <span>{{point.$$unit.name}}</span> </ff-tip> </div> </div> </div> </ff-panel> <div flex="{md: \'0 1 352px\'}" ng-if="$ctrl.point && (ffBlock.editMode || $ctrl.point.$$unit)"> <div class="ff-grid gutter-v-half"> <floor-plan-point-settings ng-if="$ctrl.point && ffBlock.editMode" class="ff-flex-start" point="$ctrl.point" categories="$ctrl.categories" units="$ctrl.units" delete-point="$ctrl.deletePoint()" save="$ctrl.save($ctrl.plan)"></floor-plan-point-settings> <floor-plan-point-details ng-if="$ctrl.point.$$unit" point="$ctrl.point" view="$ctrl.view" pricing-enabled="$ctrl.plan.pricingEnabled" area-enabled="$ctrl.plan.areaEnabled"></floor-plan-point-details> </div> </div> <ff-panel flex="{md: \'0 1 352px\'}" ng-if="!$ctrl.point && ffBlock.editMode" class="ff-flex-start"> <div><ff-icon sense="info"></ff-icon> <span translate="FLOOR_PLANS.POINT.HINT.SELECT"></span></div> <div><ff-icon sense="info"></ff-icon> <span translate="FLOOR_PLANS.POINT.HINT.CREATE"></span></div> <div><ff-icon sense="info"></ff-icon> <span translate="FLOOR_PLANS.POINT.HINT.DRAG"></span></div> </ff-panel> </div> '},"7v6b":function(t,n,e){t.exports=e("M381")},DDl7:function(t,n,e){e("h2hn");var r=e("/ZBe").Object,a=t.exports=function(t,n,e){return r.defineProperty(t,n,e)};r.defineProperty.sham&&(a.sham=!0)},DLcK:function(t,n,e){"use strict";e.r(n);e("3dw1");var r=e("yCd9"),a=e.n(r),i=e("nbuU"),o=e.n(i),l=e("0zKI"),f=e.n(l),s=(e("03Ts"),e("3W34")),c=e.n(s),u=e("tUjE"),p=e("JVmQ"),d=e("I5Zy"),$=e("iAzO");n.default=angular.module("deskworks.floorPlanDirective",[d.a.name,u.default.name,p.default.name,$.a.name]).directive("floorPlan",(function(){return{template:c.a,restrict:"E",scope:!0,controller:"FloorPlanDirectiveCtrl as $ctrl",bindToController:{plan:"<",categories:"<",units:"<",view:"<",upload:"<",save:"&"}}})).controller("FloorPlanDirectiveCtrl",["$element","$scope","$window","state","dwAlerts","helper","dwModal",function(t,n,e,r,i,l,s){var c=this;c.$onInit=function(){n.$watchCollection((function(){var t;return a()(t=c.plan.points).call(t,(function(t){return(t.$$unit||{}).id}))}),(function(t){c.units.forEach((function(t){var n;t.$$hasPoint=!!o()(n=c.plan.points).call(n,(function(n){return n.$$unit===t}))})),c.categories.forEach((function(t){var n;t.$$hasUnits=!!o()(n=c.units).call(n,(function(n){return!n.$$hasPoint&&n.reservationTypeId===t.id}))}))})),n.$watch("$ctrl.plan",(function(){c.point=null}))},c.onPointClick=function(t,n){c.point=t,n&&n.stopPropagation()},c.onPlanClick=function(e){if(n.ffBlock.editMode){var r=t[0].querySelector(".fp-image"),a={x:l.round(100*e.offsetX/r.offsetWidth),y:l.round(100*e.offsetY/r.offsetHeight)};c.plan.points.push(a),c.onPointClick(a)}},c.dropPoint=function(e,r,a){if(n.ffBlock.editMode){var i=e[r],o=t[0].querySelector(".fp-image");return i.x=l.round(100*a.offsetX/o.offsetWidth),i.y=l.round(100*a.offsetY/o.offsetHeight),c.save(c.plan),!0}},c.deletePoint=function(){var t;if(c.point)return f()(t=c.plan.points).call(t,c.plan.points.indexOf(c.point),1),c.point=null,c.save(c.plan)},c.more=function(t){s.show({scope:n,templateUrl:"members/our-members/our-member-modal.tpl.html",controller:"OurMemberModalCtrl",inputs:{member:t.$$unit.$$user}})},c.isAvailable=function(t){return"notAvailable"!==t.whoCanReserve&&"staffOnly"!==t.whoCanReserve}}])},EFlW:function(t,n){t.exports='<ff-panel> <div class="ff-col"> <div> <ff-header><span translate="FLOOR_PLANS.POINT.HEADER"></span></ff-header> <ff-select name="reservationCategory" ff-model="$ctrl.point.$$category" ff-required="true" ff-validate-alert="{{\'FLOOR_PLANS.CATEGORY\' | translate}}" ff-options="opt.name for opt in $ctrl.categories | filter: $ctrl.filterCategory"></ff-select> <ff-select name="reservationUnit" ff-model="$ctrl.point.$$unit" ff-change="$ctrl.save()" ff-required="true" ff-validate-alert="{{\'FLOOR_PLANS.UNIT\' | translate}}" ff-options="opt.name for opt in $ctrl.units | filter: $ctrl.filterUnit"></ff-select> </div> <ff-static ng-if="!$ctrl.point.$$category || !$ctrl.point.$$unit" class="ff-no-frame"> <span ng-if="!$ctrl.point.$$category"><ff-icon sense="info"></ff-icon> <span translate="FLOOR_PLANS.CATEGORY.HINT"></span></span> <span ng-if="$ctrl.point.$$category && !$ctrl.point.$$unit"><ff-icon sense="info"></ff-icon> <span translate="FLOOR_PLANS.UNIT.HINT"></span></span> </ff-static> <ff-btn-group style="margin-top:.5rem"> <ff-btn sense="delete" size="sm" ff-click="$ctrl.deletePoint()"><span translate="FLOOR_PLANS.POINT.BTN_DELETE"></span></ff-btn> </ff-btn-group> </div> </ff-panel> '},Ekwr:function(t,n,e){t.exports=e("MK67")},Gn9L:function(t,n,e){},HGI2:function(t,n,e){e("BZMQ");var r=e("/ZBe");t.exports=r.Object.getOwnPropertySymbols},I5Zy:function(t,n,e){"use strict";var r=e("0zKI"),a=e.n(r),i=(e("RF9M"),e("/MEN"),e("jd5N"));n.a=angular.module("dnd",["dndLists",i.a.name]).factory("dnd",["keese",function(t){return{move:function(n,e,r,i){var o=n[e];r&&a()(r).call(r,i,0,o);n===r&&i<=e&&e++;if(a()(n).call(n,e,1),r){var l=r.indexOf(o);o.order=t.generate(r[l-1]&&r[l-1].order,r[l+1]&&r[l+1].order)}return o}}}])},JVmQ:function(t,n,e){"use strict";e.r(n);var r=e("EFlW"),a=e.n(r);n.default=angular.module("deskworks.floorPlanPointSettingsDirective",[]).directive("floorPlanPointSettings",(function(){return{template:a.a,restrict:"E",scope:!0,controller:"FloorPlanPointSettingsDirectiveCtrl as $ctrl",bindToController:{point:"<",categories:"<",units:"<",deletePoint:"&",save:"&"}}})).controller("FloorPlanPointSettingsDirectiveCtrl",["$scope",function(t){var n=this;n.filterCategory=function(t){return t.$$hasUnits||t===n.point.$$category},n.filterUnit=function(t){return t.reservationTypeId===(n.point.$$category&&n.point.$$category.id)&&(!t.$$hasPoint||n.point.$$unit===t)}}])},LPPa:function(t,n,e){e("YpQb");var r=e("/ZBe");t.exports=r.Object.getOwnPropertyDescriptors},M381:function(t,n,e){var r=e("DDl7");t.exports=r},MK67:function(t,n,e){var r=e("HGI2");t.exports=r},QPzo:function(t,n,e){var r=e("qqp4");t.exports=r},Sh1H:function(t,n,e){"use strict";e.r(n),n.default=angular.module("deskworks.FloorPlan",["ngResource","ngFileUpload","deskworks.config"]).factory("FloorPlan",["$resource","$timeout","Upload","deskworksConfig",function(t,n,e,r){var a=t(r.getApiAbsUrl("/floor-plans/:id"),{},{update:{method:"PUT"}});return{new:function(){return{enabled:!0,pricingEnabled:!0,areaEnabled:!0,points:[]}},query:function(t){return a.query({centerId:t}).$promise},save:function(t,n){return n.id?a.update({id:n.id,centerId:t},n).$promise:a.save({centerId:t},n).$promise.then((function(t){return n.id=t.id,t}))},delete:function(t){return a.delete({id:t}).$promise},uploadImage:function(t,n){return e.upload({url:r.getApiAbsUrl("/floor-plans/".concat(t)),method:"PUT",withCredentials:!0,data:{image:n}})}}}])},"SjL+":function(t,n,e){"use strict";e.r(n);e("8cZI");var r=e("hBaI"),a=e.n(r);n.default=angular.module("deskworks.floorPlanEmbeddingDirective",["deskworks.config"]).directive("floorPlanEmbedding",(function(){return{template:a.a,restrict:"E",scope:!0,controller:"FloorPlanEmbeddingDirectiveCtrl as $ctrl",bindToController:{floorPlan:"<"}}})).controller("FloorPlanEmbeddingDirectiveCtrl",["$scope","state","helper","deskworksConfig",function(t,n,e,r){var a=this;a.$onInit=function(){var t=r.getApiOrigin(),i=n.getCurrentCenterId();a.getCode=function(n){return e.join(["<script dw-floor-plans",'dw-center-id="'.concat(i,'"'),a.all?null:'dw-floor-plan-id="'.concat(a.floorPlan.id,'"'),'src="'.concat(t,'/floor-plans.js"'),'class="dw-spin"><\/script>']," ")}}}])},YpQb:function(t,n,e){var r=e("iddO"),a=e("loUa"),i=e("cJ2G"),o=e("Btbx"),l=e("3tq3"),f=e("i13M");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){for(var n,e,r=o(t),a=l.f,s=i(r),c={},u=0;s.length>u;)void 0!==(e=a(r,n=s[u++]))&&f(c,n,e);return c}})},aGPx:function(t,n,e){},cJ2G:function(t,n,e){var r=e("UkRz"),a=e("FkQy"),i=e("/ADo"),o=e("CvrR");t.exports=r("Reflect","ownKeys")||function(t){var n=a.f(o(t)),e=i.f;return e?n.concat(e(t)):n}},cfxb:function(t,n){t.exports='<ff-panel> <div ng-if="$ctrl.view === \'public\'"> <ff-header>{{$ctrl.point.$$unit.name}}</ff-header> <ff-img class="fp-unit-photo" ng-if="$ctrl.point.$$unit.photo" ff-alt="{{$ctrl.point.$$unit.name}}" ff-src="{{$ctrl.point.$$unit.thumbnail}}" ff-src-hq="{{$ctrl.point.$$unit.photo}}"></ff-img> <ff-static class="fp-descr" ng-if="$ctrl.point.$$unit.description">{{$ctrl.point.$$unit.description}}</ff-static> <ff-row ng-if="$ctrl.point.$$unit.capacity"> <ff-static><span translate="GLOBAL.UNIT_CAPACITY" translate-values="{ capacity: $ctrl.point.$$unit.capacity }"></span></ff-static> </ff-row> <ff-row ng-if="$ctrl.areaEnabled && $ctrl.point.$$unit.area"> <ff-label flex="0 0 52px"><span translate="FLOOR_PLANS.POINT.AREA"></span></ff-label> <ff-static>{{$ctrl.point.$$unit.area}} {{$ctrl.areaUnit}}</ff-static> </ff-row> </div> <div ng-if="$ctrl.view === \'community\'"> <ff-header>{{$ctrl.point.$$unit.name}}</ff-header> <div class="ff-col"> <ff-img class="fp-unit-photo" ng-if="$ctrl.point.$$unit.photo" ff-alt="{{$ctrl.point.$$unit.name}}" ff-src="{{$ctrl.point.$$unit.photo}}" ff-src-hq="{{$ctrl.point.$$unit.photo}}"></ff-img> <ff-static class="fp-descr" ng-if="$ctrl.point.$$unit.description">{{$ctrl.point.$$unit.description}}</ff-static> <ff-row ng-if="$ctrl.point.$$unit.capacity"> <ff-static><span translate="GLOBAL.UNIT_CAPACITY" translate-values="{ capacity: $ctrl.point.$$unit.capacity }"></span></ff-static> </ff-row> <ff-static ng-if="$ctrl.point.$$unit.$$user" class="ff-no-frame" style="text-transform:uppercase;font-weight:700;margin-bottom:-.75rem;display:block"> <span translate="FLOOR_PLANS.POINT.WHO_IS_THERE"></span> </ff-static> <ff-row ng-if="$ctrl.point.$$unit.$$user"> <ff-static> <ff-img flex="0 0 60px" class="fp-avatar" ff-src="{{$ctrl.point.$$unit.$$user.photo}}" ng-if="$ctrl.point.$$unit.$$user.photo" ff-alt="{{$ctrl.point.$$unit.$$user.name}}"></ff-img> <ff-col style="margin-right:.5rem;padding:.5rem 0"> <span class="fp-user-name">{{$ctrl.point.$$unit.$$user.name}}</span> </ff-col> <ff-btn flex="none" sense="userSelect" size="sm" class="fp-btn-more" ff-click="$ctrl.more()"> <span translate="FLOOR_PLANS.POINT.BTN_MORE"></span> </ff-btn> </ff-static> </ff-row> <div class="ff-row res-bar-legend gutter-h-half"> <div translate="FLOOR_PLANS.POINT.AVAILABILITY_TODAY"></div> <div class="available" flex="none" translate="FLOOR_PLANS.POINT.AVAILABILITY_TODAY.AVAILABLE"></div> <div class="unavailable" flex="none" translate="FLOOR_PLANS.POINT.AVAILABILITY_TODAY.UNAVAILABLE"></div> </div> <res-bar unit="$ctrl.point.$$unit"></res-bar> <div ng-if="$ctrl.point.$$unit.reservations.length" style="margin:.6rem 0 0 0;font-size:.95rem"> <div ng-repeat="res in $ctrl.point.$$unit.reservations" style="margin-top:.4rem"> <span nice-time="res.from"></span> - <span nice-time="res.to"></span> - <span>{{res.userName}}</span> </div> </div> <ff-btn-group class="ff-tmargin" ng-if="$ctrl.point.$$unit.availabilities.length"> <ff-btn sense="ok" size="sm" class="ff-btn-full" ff-click="$ctrl.reserve()"> <span translate="FLOOR_PLANS.POINT.BTN_RESERVE"></span> </ff-btn> </ff-btn-group> </div> </div> </ff-panel> '},e32L:function(t,n,e){"use strict";e.r(n);var r=e("wOy2"),a=e.n(r);n.default=angular.module("deskworks.floorPlanSettingsDirective",[]).directive("floorPlanSettings",(function(){return{template:a.a,restrict:"E",scope:!0,controller:"FloorPlanSettingsDirectiveCtrl as $ctrl",bindToController:{plan:"<",delete:"&",upload:"<",save:"&"}}})).controller("FloorPlanSettingsDirectiveCtrl",["$scope",function(t){}])},eL8s:function(t,n,e){"use strict";e.r(n);e("3dw1"),e("y89P"),e("Muwe");var r=e("yCd9"),a=e.n(r),i=e("lRNC"),o=e.n(i),l=["$injector",function(t){var n,r,i=(n=e("xlK/"),a()(r=o()(n).call(n)).call(r,n));t.loadNewModules(a()(i).call(i,(function(t){return t.default.name}))),t.invoke(["$templateCache",function(t){var n=e("zB24");o()(n).call(n).forEach((function(e){return t.put(e.replace(/^\.\//,""),n(e))}))}])}];n.default=l},fzuT:function(t,n,e){var r=e("7v6b");t.exports=function(t,n,e){return n in t?r(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t},t.exports.default=t.exports,t.exports.__esModule=!0},h2hn:function(t,n,e){var r=e("iddO"),a=e("loUa");r({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperty:e("UkIg").f})},hBaI:function(t,n){t.exports="<ff-panel> <ff-panel-header><span translate=\"FLOOR_PLANS.EMBEDDING.HEADER\"></span></ff-panel-header> <ff-static> <label><ff-checkbox ff-model=\"$ctrl.all\"><span translate=\"FLOOR_PLANS.EMBEDDING.ALL\"></span></ff-checkbox></label> &nbsp; <ff-hint><span translate=\"FLOOR_PLANS.EMBEDDING.ALL.HINT\"></span></ff-hint> </ff-static> <ff-static><span translate=\"FLOOR_PLANS.EMBEDDING.HINT\"></span></ff-static> <ff-static ff-style=\"{'white-space': 'pre-wrap', 'font-family': 'monospace', 'font-size': '.85em', 'line-height': '1.25'}\">{{$ctrl.getCode()}}</ff-static> </ff-panel> "},hfBW:function(t,n,e){"use strict";e.r(n);var r=e("03wM"),a=e.n(r),i=e("Ekwr"),o=e.n(i),l=e("lvz6"),f=e.n(l),s=e("yKah"),c=e.n(s),u=e("fzuT"),p=e.n(u),d=(e("3dw1"),e("FdtR"),e("JBxO"),e("yCd9")),$=e.n(d),v=e("6RpP"),g=e.n(v),m=e("nbuU"),h=e.n(m),P=e("hsT8"),b=e.n(P),O=e("0zKI"),L=e.n(O),w=(e("aGPx"),e("Sh1H")),y=e("DLcK"),I=e("e32L"),E=e("SjL+"),x=e("2/1H");function A(t,n){var e=a()(t);if(o.a){var r=o()(t);n&&(r=b()(r).call(r,(function(n){return f()(t,n).enumerable}))),e.push.apply(e,r)}return e}function N(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?A(Object(e),!0).forEach((function(n){p()(t,n,e[n])})):c.a?Object.defineProperties(t,c()(e)):A(Object(e)).forEach((function(n){Object.defineProperty(t,n,f()(e,n))}))}return t}n.default=angular.module("deskworks.FloorPlansCtrl",["autoSave","deskworks.reservationCategory.service",w.default.name,y.default.name,I.default.name,E.default.name,x.a.name,"deskworks.OurMembers","deskworks.calendarService"]).controller("FloorPlansCtrl",["$scope","$translate","$filter","$q","$window","$timeout","session","dwAlerts","state","helper","autoSave","FloorPlan","ReservationUnit","OurMembers","calendarService",function(t,n,e,r,a,i,o,l,f,s,c,u,p,d,v){var m=this;f.setPageTitle(n.instant("FLOOR_PLANS.PAGE_TITLE")),m.onInit=function(){i((function(){m.view="community",m.fetch().then((function(t){var n,e=t.floorPlans,r=t.categories,a=t.units,i=t.members;m.categories=$()(r).call(r,(function(t){return s.pick(t,["id","name"])})),r.forEach((function(t){t.reservationUnits.forEach((function(n){n.reservationTypeId=t.id}))})),m.units=$()(n=r.reduce((function(t,n){return g()(t).call(t,n.reservationUnits)}),[])).call(n,(function(t){var n,e=h()(a).call(a,(function(n){return n.id===t.id}))||{},r=s.pick(N(N({},e),t),["id","name","description","area","capacity","thumbnail","photo","whoCanReserve","reservations","availabilities","attachedUserId","attachedUserName","availableFullTime","reservationTypeId"]),o=h()(n=t.reservations).call(n,(function(t){return t.from.isSameOrBefore(moment())&&t.to.isSameOrAfter(moment())}))||{};return(r.attachedUserId||o.userId)&&(r.$$user=h()(i).call(i,(function(t){return t.id===(r.attachedUserId||o.userId)}))),r})),m.floorPlans=e,m.floorPlan=m.floorPlans[0],m.floorPlans.forEach((function(t){t.points.forEach((function(t){var n,e;t.$$unit=h()(n=m.units).call(n,(function(n){return n.id===t.reservationUnitId})),t.$$category=t.$$unit&&h()(e=m.categories).call(e,(function(n){return n.id===t.$$unit.reservationTypeId}))}))}))}))}))},m.fetch=function(){var t={};return t.floorPlans=u.query(f.getCurrentCenterId()).catch((function(t){return l.error(t,"Failed to query floor plans.")})),t.units=p.query(f.getCurrentCenterId()).catch((function(t){return l.error(t,"Failed to query reservation units.")})),t.categories=v.query(f.getCurrentCenterId(),moment(),moment()),t.members=d.query({centerId:f.getCurrentCenterId(),limit:1e4}).catch((function(t){return l.error(t,"Failed to query our members.")})),r.all(t)},m.addPlan=function(){m.floorPlan=u.new(),m.floorPlans.push(m.floorPlan)},m.save=c.wrap((function(){var t;if(s.pointFirstInvalid("floor-plan-settings"))return;var n=s.pick(m.floorPlan,["id","name","enabled","pricingEnabled","areaEnabled","points"]);return n.points=b()(t=n.points).call(t,(function(t){return!(!t.$$unit||!(t.reservationUnitId=t.$$unit.id))})),u.save(f.getCurrentCenterId(),n).catch((function(t){return l.error(t,"Failed to save floor plan")})).then((function(t){m.floorPlan.id=t.id}))})),m.deletePlan=function(t){if(!t.id||a.confirm(n.instant("FLOOR_PLANS.CONFIRM_DELETE")))return(t.id?u.delete(t.id):r.when()).catch((function(t){return l.error(t,"Failed to delete floor plan.")})).then((function(){var n;L()(n=m.floorPlans).call(n,m.floorPlans.indexOf(t),1),t===m.floorPlan&&(m.floorPlan=m.floorPlans[0])}))},m.uploadPlanImage=function(t,e,r){if(!s.pointFirstInvalid("floor-plan-settings")){if(r&&r.length>0)return l.error(n.instant("FLOOR_PLANS.IMAGE.INVALID_FORMAT"));if(t&&t.id&&e&&e.length)return t.$$spinUpload=!0,u.uploadImage(t.id,e[0]).catch((function(t){return l.error(t,"Failed to upload floor plan image.")})).finally((function(){t.$$spinUpload=!1})).then((function(n){t.thumbnail=n.data.thumbnail+"?"+Date.now(),t.image=n.data.image+"?"+Date.now()}))}},m.onInit()}])},iDDw:function(t,n,e){var r=e("LPPa");t.exports=r},jd5N:function(t,n,e){"use strict";var r=e("gQJ2"),a=e.n(r);n.a=angular.module("keese",[]).factory("keese",(function(){var t="0123456789?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n=t.length,e=function(){for(var n={},e=0;e<t.length;e++)n[t[e]]=e;return n}();return{generate:function(t,n,e){return e?i(t,n,e):r(t,n)}};function r(t,n){return t?n?o(t,n):((e=f(t)).digits=e.digits.substr(0,e.order_length+1),l(e,f("1"))):n?o("0",n):"1";var e}function i(t,n,e){var a=new Array(e);if(e>0)if(n)!function t(n,e,i,o){var l=Math.floor((i+o)/2),f=r(n,e);a[l]=f,i<l&&t(n,f,i,l);l+1<o&&t(f,e,l+1,o)}(t,n,0,e);else for(var i=0;i<e;i++){var o=keese(t,null);a[i]=o,t=o}return a}function o(r,i){if(r>i)throw new Error("assertion failed: "+a()(r)+" < "+a()(i));var o=f(r),u=f(i);c(o,u);for(var p=0,d=Math.max(o.digits.length,u.digits.length),$=0;$<d||p>0;$++){var v=e[o.digits[$]]||0,g=p+(e[u.digits[$]]||0);if(v!==g){if(v!==g-1){for(var m=Math.floor((g-v)/2),h="",P=0;P<$;P++)h+="0";h+=t[m];var b=f(s(o.order_length,h));return o.digits=o.digits.substr(0,$+1),l(o,b)}p=n}}throw new Error}function l(r,a){c(r,a);for(var i="",o=r.order_length,l=0,f=Math.max(r.digits.length,a.digits.length)-1;f>=0;f--)l+=e[r.digits[f]]||0,l+=e[a.digits[f]]||0,i=t[l%n]+i,l=Math.floor(l/n);for(;l>0;)i=t[l%n]+i,l=Math.floor(l/n),o++;return s(o,i)}function f(t){var n=t.lastIndexOf("~")+1;return{order_length:n,digits:t.substr(n)}}function s(t,n){for(;t>0&&"0"==n.charAt(0);)n=n.substr(1),t--;for(var e="",r=0;r<t;r++)e+="~";return e+n}function c(t,n){u(t,n.order_length),u(n,t.order_length)}function u(t,n){for(;t.order_length<n;)t.digits="0"+t.digits,t.order_length++}}))},lvz6:function(t,n,e){t.exports=e("QPzo")},qqp4:function(t,n,e){e("zzoj");var r=e("/ZBe").Object,a=t.exports=function(t,n){return r.getOwnPropertyDescriptor(t,n)};r.getOwnPropertyDescriptor.sham&&(a.sham=!0)},"s8F+":function(t,n){t.exports='<div class="floor-plans" ff-bulk-read-only="$resolve.communityOnly"> <h1 class="page-title">{{state.getPageTitle()}}</h1> <div class="ff-grid gutter-v-half gutter-h-half"> <ff-panel flex="{md: \'0 0 40%\'}" class="ff-flex-start"> <ff-panel-header><span translate="FLOOR_PLANS.SELECT_A_PLAN"></span></ff-panel-header> <ff-row ff-dim="!$ctrl.floorPlans"> <ff-select name="floorPlan" ff-model="$ctrl.floorPlan" class="ff-read-only-ignore" ff-options="p.name || \'\' for p in $ctrl.floorPlans"></ff-select> <ff-btn-group class="buttons-row" flex="none"> <ff-btn sense="add" size="xs" ff-click="$ctrl.addPlan()"></ff-btn> </ff-btn-group> </ff-row> <div class="ff-grid gutter-h-half ff-read-only-ignore" style="justify-content:flex-start" ng-if="!$resolve.communityOnly"> <label flex="none"> <ff-radio ff-model="$ctrl.view" ff-value="\'public\'"><span translate="FLOOR_PLANS.VIEW.PUBLIC"></span></ff-radio> </label> <label flex="none"> <ff-radio ff-model="$ctrl.view" ff-value="\'community\'"><span translate="FLOOR_PLANS.VIEW.COMMUNITY"></span></ff-radio> </label> </div> </ff-panel> <floor-plan-settings flex="{md: \'0 0 60%\'}" ng-if="ffBlock.editMode && $ctrl.floorPlan" class="animate-collapse" plan="$ctrl.floorPlan" delete="$ctrl.deletePlan($ctrl.floorPlan)" save="$ctrl.save($ctrl.floorPlan)" upload="$ctrl.uploadPlanImage"></floor-plan-settings> <floor-plan ng-if="$ctrl.floorPlan.image" class="animate-collapse" plan="$ctrl.floorPlan" categories="$ctrl.categories" units="$ctrl.units" view="$ctrl.view" save="$ctrl.save()" upload="$ctrl.uploadPlanImage"></floor-plan> <floor-plan-embedding ng-if="ffBlock.editMode && $ctrl.floorPlan.image" floor-plan="$ctrl.floorPlan" class="animate-collapse"></floor-plan-embedding> </div> </div> '},tUjE:function(t,n,e){"use strict";e.r(n);var r=e("nbuU"),a=e.n(r),i=e("cfxb"),o=e.n(i),l=e("iAzO"),f=e("fzuT"),s=e.n(f),c=e("yCd9"),u=e.n(c),p=e("6RpP"),d=e.n(p),$=e("hsT8"),v=e.n($),g=e("03wM"),m=e.n(g),h=e("Ekwr"),P=e.n(h),b=e("lvz6"),O=e.n(b),L=e("yKah"),w=e.n(L),y=(e("3dw1"),e("z3Z1")),I=e.n(y);e("Gn9L");function E(t,n){var e=m()(t);if(P.a){var r=P()(t);n&&(r=v()(r).call(r,(function(n){return O()(t,n).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?E(Object(e),!0).forEach((function(n){s()(t,n,e[n])})):w.a?Object.defineProperties(t,w()(e)):E(Object(e)).forEach((function(n){Object.defineProperty(t,n,O()(e,n))}))}return t}var A=angular.module("deskworks.resBar",[]).component("resBar",{template:I.a,controller:"ResBarCtrl",bindings:{unit:"<"}}).controller("ResBarCtrl",["$scope","$filter",function(t,n){var e=this;e.$onInit=function(){t.$watchCollection("$ctrl.unit.availabilities",(function(){var t=[];e.unit.availabilities.forEach((function(n){t.push(moment.range(n.from,n.to))})),e.unit.reservations.forEach((function(n){var e=moment.range(n.from,n.to);t=u()(t).call(t,(function(t){return t.subtract(e)})).reduce((function(t,n){return d()(t).call(t,n)}),[])})),t=v()(t).call(t,(function(t){return(t.end-t.start)/36e5>=(e.unit.limitMin||0)})),e.availabilities=function(t){if(!t||!t.length)return[];var n=t[0].from,e=t[t.length-1].to;return u()(t).call(t,(function(t){return x(x({},t),{},{x1:r(t.from),x2:r(t.to)})}));function r(t){return 100*(t-n)/(e-n)}}(u()(t).call(t,(function(t){return{from:t.start,to:t.end}})))}))}}]);n.default=angular.module("deskworks.floorPlanPointDetailsDirective",[l.a.name,A.name]).directive("floorPlanPointDetails",(function(){return{template:o.a,restrict:"E",scope:!0,controller:"FloorPlanPointDetailsDirectiveCtrl as $ctrl",bindToController:{point:"<",pricingEnabled:"<",areaEnabled:"<",view:"<"}}})).controller("FloorPlanPointDetailsDirectiveCtrl",["$scope","dwModal","state",function(t,n,e){var r,i=this;i.areaUnit=(a()(r=window.dwLocales).call(r,(function(n){return n.id===t.currentLocale}))||{}).area||"ft²",i.more=function(){n.show({scope:t,templateUrl:"members/our-members/our-member-modal.tpl.html",controller:"OurMemberModalCtrl",inputs:{member:i.point.$$unit.$$user}})},i.reserve=function(){return e.setParam("unit",i.point.$$unit.id),e.getPath().indexOf("community")>=0?e.setPath("/floor-plans-community-reservation"):e.setPath("/floor-plans-reservation")}}])},wOy2:function(t,n){t.exports='<ff-panel ngf-drop="$ctrl.upload($ctrl.plan, $files, $invalidFiles)" ngf-pattern="\'image/png,image/jpeg\'" ngf-drag-over-class="dragover"> <ff-panel-header> <span translate="FLOOR_PLANS.SETTINGS.HEADER"></span> <ff-hint><span translate="FLOOR_PLANS.IMAGE.HINT"></span></ff-hint> </ff-panel-header> <ff-spin ng-if="$ctrl.plan.$$autoSaving"></ff-spin> <div class="ff-grid" style="justify-content:flex-start"> <label class="ff-row" flex="0 1 240px"> <ff-label flex="0 1 60px"><req translate="FLOOR_PLANS.NAME"></req></ff-label> <ff-text name="floorPlanName" ff-model="$ctrl.plan.name" ff-change="$ctrl.save()" ff-required="true" ff-validate-alert="{{\'FLOOR_PLANS.NAME\' | translate}}"></ff-text> </label> <ff-static class="ff-no-frame" flex="auto"> <div class="ff-grid gutter-h-half"> <label flex="none"> <ff-checkbox name="enabled" ff-model="$ctrl.plan.enabled" ff-change="$ctrl.save()"> <span translate="FLOOR_PLANS.ENABLED"></span> </ff-checkbox> </label> <label flex="none"> <ff-checkbox name="pricingEnabled" ff-model="$ctrl.plan.pricingEnabled" ff-change="$ctrl.save()"> <span translate="FLOOR_PLANS.PRICING_VISIBLE"></span> </ff-checkbox> </label> <label flex="none"> <ff-checkbox name="areaEnabled" ff-model="$ctrl.plan.areaEnabled" ff-change="$ctrl.save()"> <span translate="FLOOR_PLANS.AREA_VISIBLE"></span> </ff-checkbox> </label> </div> </ff-static> </div> <ff-btn-group style="margin-top:.5rem"> <ff-btn sense="upload" size="sm" ff-spin="$ctrl.plan.$$spinUpload" ngf-select="$ctrl.upload($ctrl.plan, $files, $invalidFiles)" ngf-pattern="\'image/png,image/jpeg\'" accept="image/png,image/jpeg"> <span translate="FLOOR_PLANS.IMAGE.BTN_UPLOAD"></span> </ff-btn> <ff-btn sense="delete" size="sm" ff-click="$ctrl.delete()"><span translate="FLOOR_PLANS.BTN_DELETE"></span></ff-btn> </ff-btn-group> </ff-panel> '},"xlK/":function(t,n,e){var r={"./directives/floor-plan-embedding.directive.js":"SjL+","./directives/floor-plan-point-details.directive.js":"tUjE","./directives/floor-plan-point-settings.directive.js":"JVmQ","./directives/floor-plan-settings.directive.js":"e32L","./directives/floor-plan.directive.js":"DLcK","./floor-plans/floor-plans.controller.js":"hfBW","./services/floor-plan.service.js":"Sh1H"};function a(t){var n=i(t);return e(n)}function i(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="xlK/"},yKah:function(t,n,e){t.exports=e("iDDw")},z3Z1:function(t,n){t.exports='<div ng-repeat="av in $ctrl.availabilities" ng-style="{ left: av.x1 + \'%\', right: 100 - av.x2 + \'%\' }" class="availability"> <span nice-time="av.from" nice-format="shortHours" class="from"></span> <span nice-time="av.to" nice-format="shortHours" class="to"></span> </div> '},zB24:function(t,n,e){var r={"./directives/floor-plan-embedding.tpl.html":"hBaI","./directives/floor-plan-point-details.tpl.html":"cfxb","./directives/floor-plan-point-settings.tpl.html":"EFlW","./directives/floor-plan-settings.tpl.html":"wOy2","./directives/floor-plan.tpl.html":"3W34","./floor-plans/floor-plans.tpl.html":"s8F+"};function a(t){var n=i(t);return e(n)}function i(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="zB24"},zzoj:function(t,n,e){var r=e("iddO"),a=e("wkvk"),i=e("Btbx"),o=e("3tq3").f,l=e("loUa"),f=a((function(){o(1)}));r({target:"Object",stat:!0,forced:!l||f,sham:!l},{getOwnPropertyDescriptor:function(t,n){return o(i(t),n)}})}}]);