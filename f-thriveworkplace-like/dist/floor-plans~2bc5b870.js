(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/MEN":function(t,e,n){},"03Ts":function(t,e,n){},"3W34":function(t,e){t.exports='<div class="ff-grid gutter-v-half gutter-h-half" style=justify-content:flex-start> <ff-panel flex="0 1 auto" class=ff-flex-start style=z-index:1 ngf-drop="$ctrl.upload($ctrl.plan, $files, $invalidFiles)" ngf-pattern="\'image/png,image/jpeg\'" ngf-drag-over-class=dragover> <div class=ff-relative flex=none ng-click=$ctrl.onPlanClick($event) ff-dim=!$ctrl.plan.$$imageLoaded> <ff-img ff-src={{$ctrl.plan.image}} ff-img-loaded=$ctrl.plan.$$imageLoaded class=fp-image></ff-img> <div class=fp-points dnd-list dnd-drop="callback({ list: $ctrl.plan.points, targetIndex: index, event: event })"> <div ng-repeat="point in $ctrl.plan.points" dnd-draggable=null dnd-callback="$ctrl.dropPoint(list, $index, event)" ng-click="$ctrl.onPointClick(point, $event)" class=fp-point ng-class="{ available: !!point.$$unit.availableFullTime, selected: $ctrl.point === point, invalid: !point.$$unit }" ng-style="{ top: point.y + \'%\', left: point.x + \'%\' }"> <ff-tip ng-if="point.$$unit && !ffBlock.editMode" tip-type=white> <ff-header>{{point.$$unit.name}}</ff-header> <ff-row> <ff-label flex="0 1 60px"><span translate=FLOOR_PLANS.POINT.STATUS></span></ff-label> <ff-static><span translate="{{\'FLOOR_PLANS.POINT.STATUS.\' + (point.$$unit.availableFullTime ? \'AVAILABLE\' : \'NOT_AVAILABLE\')}}"></span></ff-static> </ff-row> <ff-row ng-if="point.$$unit.attachedUserName && !point.$$unit.$$user"> <ff-label flex="0 1 60px"><span translate=FLOOR_PLANS.POINT.MEMBER></span></ff-label> <ff-static>{{point.$$unit.attachedUserName}}</ff-static> </ff-row> <ff-static ng-if=point.$$unit.$$user class=ff-no-frame> <ff-img flex="0 0 60px" class=fp-avatar ff-src={{point.$$unit.$$user.photo}} ng-if=point.$$unit.$$user.photo></ff-img> <ff-col flex=auto> <ff-col flex=auto class=fp-user-container> <div class=fp-user-name>{{point.$$unit.$$user.name}}</div> <div class=fp-user-company>{{point.$$unit.$$user.company}}</div> </ff-col> <ff-btn flex=none sense=userSelect size=sm class=fp-btn-more ff-click=$ctrl.more(point)> <span translate=FLOOR_PLANS.POINT.BTN_MORE></span> </ff-btn> </ff-col> </ff-static> </ff-tip> </div> </div> </div> </ff-panel> <div flex="{md: \'0 1 352px\'}" ng-if="$ctrl.point && (ffBlock.editMode || $ctrl.point.$$unit)"> <div class="ff-grid gutter-v-half"> <floor-plan-point-settings ng-if="$ctrl.point && ffBlock.editMode" class=ff-flex-start point=$ctrl.point categories=$ctrl.categories units=$ctrl.units delete-point=$ctrl.deletePoint() save=$ctrl.save($ctrl.plan)></floor-plan-point-settings> <floor-plan-point-details ng-if=$ctrl.point.$$unit point=$ctrl.point view=$ctrl.view pricing-enabled=$ctrl.plan.pricingEnabled area-enabled=$ctrl.plan.areaEnabled></floor-plan-point-details> </div> </div> <ff-panel flex="{md: \'0 1 352px\'}" ng-if="!$ctrl.point && ffBlock.editMode" class=ff-flex-start> <div><ff-icon sense=info></ff-icon> <span translate=FLOOR_PLANS.POINT.HINT.SELECT></span></div> <div><ff-icon sense=info></ff-icon> <span translate=FLOOR_PLANS.POINT.HINT.CREATE></span></div> <div><ff-icon sense=info></ff-icon> <span translate=FLOOR_PLANS.POINT.HINT.DRAG></span></div> </ff-panel> </div> '},DLcK:function(t,e,n){"use strict";n.r(e);var l=n("xeXu"),r=n.n(l),a=n("0zKI"),i=n.n(a),f=n("nbuU"),o=n.n(f),s=n("WSeP"),c=n.n(s),p=n("yCd9"),u=n.n(p),d=(n("03Ts"),n("3W34")),$=n.n(d),g=n("tUjE"),m=n("JVmQ"),v=n("I5Zy"),P=n("iAzO");e.default=angular.module("deskworks.floorPlanDirective",[v.a.name,g.default.name,m.default.name,P.a.name]).directive("floorPlan",(function(){return{template:$.a,restrict:"E",scope:!0,controller:"FloorPlanDirectiveCtrl as $ctrl",bindToController:{plan:"<",categories:"<",units:"<",view:"<",upload:"<",save:"&"}}})).controller("FloorPlanDirectiveCtrl",["$element","$scope","$window","state","dwAlerts","helper","dwModal",function(t,e,n,l,a,f,s){var p=this;p.$onInit=function(){e.$watchCollection((function(){var t;return u()(t=p.plan.points).call(t,(function(t){return(t.$$unit||{}).id}))}),(function(t){var e,n;c()(e=p.units).call(e,(function(t){var e;t.$$hasPoint=!!o()(e=p.plan.points).call(e,(function(e){return e.$$unit===t}))})),c()(n=p.categories).call(n,(function(t){var e;t.$$hasUnits=!!o()(e=p.units).call(e,(function(e){return!e.$$hasPoint&&e.reservationTypeId===t.id}))}))})),e.$watch("$ctrl.plan",(function(){p.point=null}))},p.onPointClick=function(t,n){e.ffBlock.editMode&&(p.point=t,n&&n.stopPropagation())},p.onPlanClick=function(n){if(e.ffBlock.editMode){var l=t[0].querySelector(".fp-image"),r={x:f.round(100*n.offsetX/l.offsetWidth),y:f.round(100*n.offsetY/l.offsetHeight)};p.plan.points.push(r),p.onPointClick(r)}},p.dropPoint=function(n,l,r){if(e.ffBlock.editMode){var a=n[l],i=t[0].querySelector(".fp-image");return a.x=f.round(100*r.offsetX/i.offsetWidth),a.y=f.round(100*r.offsetY/i.offsetHeight),p.save(p.plan),!0}},p.deletePoint=function(){var t,e;if(p.point)return i()(t=p.plan.points).call(t,r()(e=p.plan.points).call(e,p.point),1),p.point=null,p.save(p.plan)},p.more=function(t){s.show({scope:e,templateUrl:"members/our-members/our-member-modal.tpl.html",controller:"OurMemberModalCtrl",inputs:{member:t.$$unit.$$user}})}}])},EFlW:function(t,e){t.exports='<ff-panel> <div class=ff-col> <div> <ff-header><span translate=FLOOR_PLANS.POINT.HEADER></span></ff-header> <ff-select name=reservationCategory ff-model=$ctrl.point.$$category ff-required=true ff-validate-alert="{{\'FLOOR_PLANS.CATEGORY\' | translate}}" ff-options="opt.name for opt in $ctrl.categories | filter: $ctrl.filterCategory"></ff-select> <ff-select name=reservationUnit ff-model=$ctrl.point.$$unit ff-change=$ctrl.save() ff-required=true ff-validate-alert="{{\'FLOOR_PLANS.UNIT\' | translate}}" ff-options="opt.name for opt in $ctrl.units | filter: $ctrl.filterUnit"></ff-select> </div> <ff-static ng-if="!$ctrl.point.$$category || !$ctrl.point.$$unit" class=ff-no-frame> <span ng-if=!$ctrl.point.$$category><ff-icon sense=info></ff-icon> <span translate=FLOOR_PLANS.CATEGORY.HINT></span></span> <span ng-if="$ctrl.point.$$category && !$ctrl.point.$$unit"><ff-icon sense=info></ff-icon> <span translate=FLOOR_PLANS.UNIT.HINT></span></span> </ff-static> <ff-btn-group style=margin-top:.5rem> <ff-btn sense=delete size=sm ff-click=$ctrl.deletePoint()><span translate=FLOOR_PLANS.POINT.BTN_DELETE></span></ff-btn> </ff-btn-group> </div> </ff-panel> '},I5Zy:function(t,e,n){"use strict";var l=n("xeXu"),r=n.n(l),a=n("0zKI"),i=n.n(a),f=(n("RF9M"),n("/MEN"),n("jd5N"));e.a=angular.module("dnd",["dndLists",f.a.name]).factory("dnd",["keese",function(t){return{move:function(e,n,l,a){var f=e[n];l&&i()(l).call(l,a,0,f);e===l&&a<=n&&n++;if(i()(e).call(e,n,1),l){var o=r()(l).call(l,f);f.order=t.generate(l[o-1]&&l[o-1].order,l[o+1]&&l[o+1].order)}return f}}}])},JVmQ:function(t,e,n){"use strict";n.r(e);var l=n("EFlW"),r=n.n(l);e.default=angular.module("deskworks.floorPlanPointSettingsDirective",[]).directive("floorPlanPointSettings",(function(){return{template:r.a,restrict:"E",scope:!0,controller:"FloorPlanPointSettingsDirectiveCtrl as $ctrl",bindToController:{point:"<",categories:"<",units:"<",deletePoint:"&",save:"&"}}})).controller("FloorPlanPointSettingsDirectiveCtrl",["$scope",function(t){var e=this;e.filterCategory=function(t){return t.$$hasUnits||t===e.point.$$category},e.filterUnit=function(t){return t.reservationTypeId===(e.point.$$category&&e.point.$$category.id)&&(!t.$$hasPoint||e.point.$$unit===t)}}])},Sh1H:function(t,e,n){"use strict";n.r(e),e.default=angular.module("deskworks.FloorPlan",["ngResource","ngFileUpload","deskworks.config"]).factory("FloorPlan",["$resource","$timeout","Upload","deskworksConfig",function(t,e,n,l){var r=t(l.getApiAbsUrl("/floor-plans/:id"),{},{update:{method:"PUT"}});return{new:function(){return{enabled:!0,pricingEnabled:!0,areaEnabled:!0,points:[]}},query:function(t){return r.query({centerId:t}).$promise},save:function(t,e){return e.id?r.update({id:e.id,centerId:t},e).$promise:r.save({centerId:t},e).$promise.then((function(t){return e.id=t.id,t}))},delete:function(t){return r.delete({id:t}).$promise},uploadImage:function(t,e){return n.upload({url:l.getApiAbsUrl("/floor-plans/".concat(t)),method:"PUT",withCredentials:!0,data:{image:e}})}}}])},"SjL+":function(t,e,n){"use strict";n.r(e);n("8cZI");var l=n("hBaI"),r=n.n(l);e.default=angular.module("deskworks.floorPlanEmbeddingDirective",["deskworks.config"]).directive("floorPlanEmbedding",(function(){return{template:r.a,restrict:"E",scope:!0,controller:"FloorPlanEmbeddingDirectiveCtrl as $ctrl",bindToController:{floorPlan:"<"}}})).controller("FloorPlanEmbeddingDirectiveCtrl",["$scope","state","helper","deskworksConfig",function(t,e,n,l){var r=this;r.$onInit=function(){var t=l.getApiOrigin(),a=e.getCurrentCenterId();r.getCode=function(e){return n.join(["<script dw-floor-plans",'dw-center-id="'.concat(a,'"'),r.all?null:'dw-floor-plan-id="'.concat(r.floorPlan.id,'"'),'src="'.concat(t,'/floor-plans.js"'),'class="dw-spin"><\/script>']," ")}}}])},aGPx:function(t,e,n){},cfxb:function(t,e){t.exports='<ff-panel> <div ng-if="$ctrl.view === \'public\'"> <ff-header>{{$ctrl.point.$$unit.name}}</ff-header> <ff-img class=fp-unit-photo ng-if=$ctrl.point.$$unit.photo alt={{$ctrl.point.$$unit.name}} ff-src={{$ctrl.point.$$unit.thumbnail}} ff-src-hq={{$ctrl.point.$$unit.photo}}></ff-img> <ff-static class=fp-descr ng-if=$ctrl.point.$$unit.description>{{$ctrl.point.$$unit.description}}</ff-static> <ff-row> <ff-label flex="0 0 52px"><span translate=FLOOR_PLANS.POINT.STATUS></span></ff-label> <ff-static> <span translate="{{\'FLOOR_PLANS.POINT.STATUS.\' + ($ctrl.point.$$unit.availableFullTime ? \'AVAILABLE\' : \'NOT_AVAILABLE\')}}"></span> </ff-static> </ff-row> <ff-row ng-if="$ctrl.pricingEnabled && $ctrl.point.$$unit.fullTimePrice"> <ff-label flex="0 0 52px"><span translate=FLOOR_PLANS.POINT.PRICE></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimePrice | ncurrency}}</ff-static> </ff-row> <ff-row ng-if="$ctrl.areaEnabled && $ctrl.point.$$unit.area"> <ff-label flex="0 0 52px"><span translate=FLOOR_PLANS.POINT.AREA></span></ff-label> <ff-static>{{$ctrl.point.$$unit.area}} m<sup>2</sup></ff-static> </ff-row> </div> <div ng-if="$ctrl.view === \'community\'"> <ff-header>{{$ctrl.point.$$unit.name}}</ff-header> <div> <ff-row> <ff-label flex="0 1 80px"><span translate=FLOOR_PLANS.POINT.STATUS></span></ff-label> <ff-static> <span translate="{{\'FLOOR_PLANS.POINT.STATUS.\' + ($ctrl.point.$$unit.availableFullTime ? \'AVAILABLE\' : \'NOT_AVAILABLE\')}}"></span> </ff-static> </ff-row> <ff-row ng-if="$ctrl.point.$$unit.attachedUserName && !$ctrl.point.$$unit.$$user"> <ff-label flex="0 1 80px"><span translate=FLOOR_PLANS.POINT.MEMBER></span></ff-label> <ff-static>{{$ctrl.point.$$unit.attachedUserName}}</ff-static> </ff-row> <ff-row ng-if=$ctrl.point.$$unit.$$user> <ff-static> <ff-img flex="0 0 60px" class=fp-avatar ff-src={{$ctrl.point.$$unit.$$user.photo}} ng-if=$ctrl.point.$$unit.$$user.photo></ff-img> <ff-col style="margin-right:.5rem;padding:.5rem 0"> <span class=fp-user-name>{{$ctrl.point.$$unit.$$user.name}}</span> <span class=fp-user-company>{{$ctrl.point.$$unit.$$user.company}}</span> </ff-col> <ff-btn flex=none sense=userSelect size=sm class=fp-btn-more ff-click=$ctrl.more()> <span translate=FLOOR_PLANS.POINT.BTN_MORE></span> </ff-btn> </ff-static> </ff-row> <ff-row ng-if="$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode"> <ff-label flex="0 1 80px"><span translate=FLOOR_PLANS.POINT.PRODUCT></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimeProductName}}</ff-static> </ff-row> <ff-row ng-if="$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode"> <ff-label flex="0 1 80px"><span translate=FLOOR_PLANS.POINT.PRICE></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimePrice | ncurrency}}</ff-static> </ff-row> <ff-row ng-if="$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode"> <ff-label flex="0 1 80px"><span translate=FLOOR_PLANS.POINT.NET></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimeNet | ncurrency}}</ff-static> </ff-row> <ff-row ng-if="$ctrl.point.$$unit.fullTimeProductId && ffBlock.editMode"> <ff-label flex="0 1 80px"><span translate=FLOOR_PLANS.POINT.DISCOUNT></span></ff-label> <ff-static>{{$ctrl.point.$$unit.fullTimeDiscount | ncurrency}}</ff-static> </ff-row> </div> </div> </ff-panel> '},e32L:function(t,e,n){"use strict";n.r(e);var l=n("wOy2"),r=n.n(l);e.default=angular.module("deskworks.floorPlanSettingsDirective",[]).directive("floorPlanSettings",(function(){return{template:r.a,restrict:"E",scope:!0,controller:"FloorPlanSettingsDirectiveCtrl as $ctrl",bindToController:{plan:"<",delete:"&",upload:"<",save:"&"}}})).controller("FloorPlanSettingsDirectiveCtrl",["$scope",function(t){}])},eL8s:function(t,e,n){"use strict";n.r(e);n("y89P");var l=n("WSeP"),r=n.n(l),a=n("lRNC"),i=n.n(a),f=n("yCd9"),o=n.n(f),s=["$injector",function(t){var e,l,a=(e=n("xlK/"),o()(l=i()(e).call(e)).call(l,e));t.loadNewModules(o()(a).call(a,(function(t){return t.default.name}))),t.invoke(["$templateCache",function(t){var e,l=n("zB24");r()(e=i()(l).call(l)).call(e,(function(e){return t.put(e.replace(/^\.\//,""),l(e))}))}])}];e.default=s},hBaI:function(t,e){t.exports="<ff-panel> <ff-panel-header><span translate=FLOOR_PLANS.EMBEDDING.HEADER></span></ff-panel-header> <ff-static> <label><ff-checkbox ff-model=$ctrl.all><span translate=FLOOR_PLANS.EMBEDDING.ALL></span></ff-checkbox></label> &nbsp; <ff-hint><span translate=FLOOR_PLANS.EMBEDDING.ALL.HINT></span></ff-hint> </ff-static> <ff-static><span translate=FLOOR_PLANS.EMBEDDING.HINT></span></ff-static> <ff-static ff-style=\"{'white-space': 'pre-wrap', 'font-family': 'monospace', 'font-size': '.85em', 'line-height': '1.25'}\">{{$ctrl.getCode()}}</ff-static> </ff-panel> "},hfBW:function(t,e,n){"use strict";n.r(e);n("JBxO"),n("FdtR");var l=n("7pN8"),r=n.n(l),a=n("xeXu"),i=n.n(a),f=n("0zKI"),o=n.n(f),s=n("hsT8"),c=n.n(s),p=n("WSeP"),u=n.n(p),d=n("nbuU"),$=n.n(d),g=n("yCd9"),m=n.n(g),v=(n("aGPx"),n("Sh1H")),P=n("DLcK"),h=n("e32L"),b=n("SjL+"),O=n("2/1H");e.default=angular.module("deskworks.FloorPlansCtrl",["autoSave","deskworks.reservationCategory.service",v.default.name,P.default.name,h.default.name,b.default.name,O.a.name,"deskworks.OurMembers"]).controller("FloorPlansCtrl",["$scope","$translate","$filter","$q","$window","$timeout","session","dwAlerts","state","helper","autoSave","FloorPlan","ReservationUnit","reservationCategoryService","OurMembers",function(t,e,n,l,a,f,s,p,d,g,v,P,h,b,O){var L=this;d.setPageTitle(e.instant("FLOOR_PLANS.PAGE_TITLE")),L.onInit=function(){f((function(){L.view=t.$resolve.communityOnly?"community":"public",L.fetch().then((function(t){var e,n=t.floorPlans,l=t.reservationCategories,r=t.reservationUnits,a=t.members;L.categories=m()(l).call(l,(function(t){return g.pick(t,["id","name"])})),L.units=m()(r).call(r,(function(t){var e=g.pick(t,["id","name","description","area","thumbnail","photo","attachedUserId","attachedUserName","availableFullTime","fullTimeProductId","fullTimeProductName","fullTimePrice","fullTimeNet","fullTimeDiscount","reservationTypeId"]);return e.attachedUserId&&(e.$$user=$()(a).call(a,(function(t){return t.id===e.attachedUserId}))),e})),L.floorPlans=n,L.floorPlan=L.floorPlans[0],u()(e=L.floorPlans).call(e,(function(t){var e;u()(e=t.points).call(e,(function(t){var e,n;t.$$unit=$()(e=L.units).call(e,(function(e){return e.id===t.reservationUnitId})),t.$$category=t.$$unit&&$()(n=L.categories).call(n,(function(e){return e.id===t.$$unit.reservationTypeId}))}))}))}))}))},L.fetch=function(){var t={};return t.floorPlans=P.query(d.getCurrentCenterId()).catch((function(t){return p.error(t,"Failed to query floor plans.")})),t.reservationCategories=b.query(d.getCurrentCenterId()).catch((function(t){return p.error(t,"Failed to query reservation categories.")})),t.reservationUnits=h.query(d.getCurrentCenterId()).catch((function(t){return p.error(t,"Failed to query reservation units.")})),t.members=O.query({centerId:d.getCurrentCenterId(),limit:1e4}).catch((function(t){return p.error(t,"Failed to query our members.")})),l.all(t)},L.addPlan=function(){L.floorPlan=P.new(),L.floorPlans.push(L.floorPlan)},L.save=v.wrap((function(){var t;if(g.pointFirstInvalid("floor-plan-settings"))return;var e=g.pick(L.floorPlan,["id","name","enabled","pricingEnabled","areaEnabled","points"]);return e.points=c()(t=e.points).call(t,(function(t){return!(!t.$$unit||!(t.reservationUnitId=t.$$unit.id))})),P.save(d.getCurrentCenterId(),e).catch((function(t){return p.error(t,"Failed to save floor plan")})).then((function(t){L.floorPlan.id=t.id}))})),L.deletePlan=function(t){if(!t.id||a.confirm(e.instant("FLOOR_PLANS.CONFIRM_DELETE")))return(t.id?P.delete(t.id):l.when()).catch((function(t){return p.error(t,"Failed to delete floor plan.")})).then((function(){var e,n;o()(e=L.floorPlans).call(e,i()(n=L.floorPlans).call(n,t),1),t===L.floorPlan&&(L.floorPlan=L.floorPlans[0])}))},L.uploadPlanImage=function(t,n,l){if(!g.pointFirstInvalid("floor-plan-settings")){if(l&&l.length>0)return p.error(e.instant("FLOOR_PLANS.IMAGE.INVALID_FORMAT"));if(t&&t.id&&n&&n.length)return t.$$spinUpload=!0,P.uploadImage(t.id,n[0]).catch((function(t){return p.error(t,"Failed to upload floor plan image.")})).finally((function(){t.$$spinUpload=!1})).then((function(e){t.thumbnail=e.data.thumbnail+"?"+r()(),t.image=e.data.image+"?"+r()()}))}},L.onInit()}])},jd5N:function(t,e,n){"use strict";var l=n("JRMi"),r=n.n(l),a=n("gQJ2"),i=n.n(a);e.a=angular.module("keese",[]).factory("keese",(function(){var t="0123456789?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",e=t.length,n=function(){for(var e={},n=0;n<t.length;n++)e[t[n]]=n;return e}();return{generate:function(t,e,n){return n?a(t,e,n):l(t,e)}};function l(t,e){return t?e?f(t,e):((n=s(t)).digits=n.digits.substr(0,n.order_length+1),o(n,s("1"))):e?f("0",e):"1";var n}function a(t,e,n){var r=new Array(n);if(n>0)if(e)!function t(e,n,a,i){var f=Math.floor((a+i)/2),o=l(e,n);r[f]=o,a<f&&t(e,o,a,f);f+1<i&&t(o,n,f+1,i)}(t,e,0,n);else for(var a=0;a<n;a++){var i=keese(t,null);r[a]=i,t=i}return r}function f(l,r){if(l>r)throw new Error("assertion failed: "+i()(l)+" < "+i()(r));var a=s(l),f=s(r);p(a,f);for(var u=0,d=Math.max(a.digits.length,f.digits.length),$=0;$<d||u>0;$++){var g=n[a.digits[$]]||0,m=u+(n[f.digits[$]]||0);if(g!==m){if(g!==m-1){for(var v=Math.floor((m-g)/2),P="",h=0;h<$;h++)P+="0";P+=t[v];var b=s(c(a.order_length,P));return a.digits=a.digits.substr(0,$+1),o(a,b)}u=e}}throw new Error}function o(l,r){p(l,r);for(var a="",i=l.order_length,f=0,o=Math.max(l.digits.length,r.digits.length)-1;o>=0;o--)f+=n[l.digits[o]]||0,f+=n[r.digits[o]]||0,a=t[f%e]+a,f=Math.floor(f/e);for(;f>0;)a=t[f%e]+a,f=Math.floor(f/e),i++;return c(i,a)}function s(t){var e=r()(t).call(t,"~")+1;return{order_length:e,digits:t.substr(e)}}function c(t,e){for(;t>0&&"0"==e.charAt(0);)e=e.substr(1),t--;for(var n="",l=0;l<t;l++)n+="~";return n+e}function p(t,e){u(t,e.order_length),u(e,t.order_length)}function u(t,e){for(;t.order_length<e;)t.digits="0"+t.digits,t.order_length++}}))},"s8F+":function(t,e){t.exports='<div class=floor-plans ff-bulk-read-only=$resolve.communityOnly> <h4 class=page-title ng-bind=state.getPageTitle()></h4> <div class="ff-grid gutter-v-half gutter-h-half"> <ff-panel flex="{md: \'0 0 40%\'}" class=ff-flex-start> <ff-panel-header><span translate=FLOOR_PLANS.SELECT_A_PLAN></span></ff-panel-header> <ff-row ff-dim=!$ctrl.floorPlans> <ff-select name=floorPlan ff-model=$ctrl.floorPlan class=ff-read-only-ignore ff-options="p.name || \'\' for p in $ctrl.floorPlans"></ff-select> <ff-btn-group class=buttons-row flex=none> <ff-btn sense=add size=xs ff-click=$ctrl.addPlan()></ff-btn> </ff-btn-group> </ff-row> <div class="ff-grid gutter-h-half ff-read-only-ignore" style=justify-content:flex-start ng-if=!$resolve.communityOnly> <label flex=none> <ff-radio ff-model=$ctrl.view ff-value="\'public\'"><span translate=FLOOR_PLANS.VIEW.PUBLIC></span></ff-radio> </label> <label flex=none> <ff-radio ff-model=$ctrl.view ff-value="\'community\'"><span translate=FLOOR_PLANS.VIEW.COMMUNITY></span></ff-radio> </label> </div> </ff-panel> <floor-plan-settings flex="{md: \'0 0 60%\'}" ng-if="ffBlock.editMode && $ctrl.floorPlan" class=animate-collapse plan=$ctrl.floorPlan delete=$ctrl.deletePlan($ctrl.floorPlan) save=$ctrl.save($ctrl.floorPlan) upload=$ctrl.uploadPlanImage></floor-plan-settings> <floor-plan ng-if=$ctrl.floorPlan.image class=animate-collapse plan=$ctrl.floorPlan categories=$ctrl.categories units=$ctrl.units view=$ctrl.view save=$ctrl.save() upload=$ctrl.uploadPlanImage></floor-plan> <floor-plan-embedding ng-if="ffBlock.editMode && $ctrl.floorPlan.image" floor-plan=$ctrl.floorPlan class=animate-collapse></floor-plan-embedding> </div> </div> '},tUjE:function(t,e,n){"use strict";n.r(e);var l=n("cfxb"),r=n.n(l),a=n("iAzO");e.default=angular.module("deskworks.floorPlanPointDetailsDirective",[a.a.name]).directive("floorPlanPointDetails",(function(){return{template:r.a,restrict:"E",scope:!0,controller:"FloorPlanPointDetailsDirectiveCtrl as $ctrl",bindToController:{point:"<",pricingEnabled:"<",areaEnabled:"<",view:"<"}}})).controller("FloorPlanPointDetailsDirectiveCtrl",["$scope","dwModal",function(t,e){var n=this;n.more=function(){e.show({scope:t,templateUrl:"members/our-members/our-member-modal.tpl.html",controller:"OurMemberModalCtrl",inputs:{member:n.point.$$unit.$$user}})}}])},wOy2:function(t,e){t.exports='<ff-panel ngf-drop="$ctrl.upload($ctrl.plan, $files, $invalidFiles)" ngf-pattern="\'image/png,image/jpeg\'" ngf-drag-over-class=dragover> <ff-panel-header> <span translate=FLOOR_PLANS.SETTINGS.HEADER></span> <ff-hint><span translate=FLOOR_PLANS.IMAGE.HINT></span></ff-hint> </ff-panel-header> <ff-spin ng-if=$ctrl.plan.$$autoSaving></ff-spin> <div class=ff-grid style=justify-content:flex-start> <label class=ff-row flex="0 1 240px"> <ff-label flex="0 1 60px"><req translate=FLOOR_PLANS.NAME></req></ff-label> <ff-text name=floorPlanName ff-model=$ctrl.plan.name ff-change=$ctrl.save() ff-required=true ff-validate-alert="{{\'FLOOR_PLANS.NAME\' | translate}}"></ff-text> </label> <ff-static class=ff-no-frame flex=auto> <div class="ff-grid gutter-h-half"> <label flex=none> <ff-checkbox name=enabled ff-model=$ctrl.plan.enabled ff-change=$ctrl.save()> <span translate=FLOOR_PLANS.ENABLED></span> </ff-checkbox> </label> <label flex=none> <ff-checkbox name=pricingEnabled ff-model=$ctrl.plan.pricingEnabled ff-change=$ctrl.save()> <span translate=FLOOR_PLANS.PRICING_VISIBLE></span> </ff-checkbox> </label> <label flex=none> <ff-checkbox name=areaEnabled ff-model=$ctrl.plan.areaEnabled ff-change=$ctrl.save()> <span translate=FLOOR_PLANS.AREA_VISIBLE></span> </ff-checkbox> </label> </div> </ff-static> </div> <ff-btn-group style=margin-top:.5rem> <ff-btn sense=upload size=sm ff-spin=$ctrl.plan.$$spinUpload ngf-select="$ctrl.upload($ctrl.plan, $files, $invalidFiles)" ngf-pattern="\'image/png,image/jpeg\'" accept=image/png,image/jpeg> <span translate=FLOOR_PLANS.IMAGE.BTN_UPLOAD></span> </ff-btn> <ff-btn sense=delete size=sm ff-click=$ctrl.delete()><span translate=FLOOR_PLANS.BTN_DELETE></span></ff-btn> </ff-btn-group> </ff-panel> '},"xlK/":function(t,e,n){var l={"./directives/floor-plan-embedding.directive.js":"SjL+","./directives/floor-plan-point-details.directive.js":"tUjE","./directives/floor-plan-point-settings.directive.js":"JVmQ","./directives/floor-plan-settings.directive.js":"e32L","./directives/floor-plan.directive.js":"DLcK","./floor-plans/floor-plans.controller.js":"hfBW","./services/floor-plan.service.js":"Sh1H"};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(l,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return l[t]}r.keys=function(){return Object.keys(l)},r.resolve=a,t.exports=r,r.id="xlK/"},zB24:function(t,e,n){var l={"./directives/floor-plan-embedding.tpl.html":"hBaI","./directives/floor-plan-point-details.tpl.html":"cfxb","./directives/floor-plan-point-settings.tpl.html":"EFlW","./directives/floor-plan-settings.tpl.html":"wOy2","./directives/floor-plan.tpl.html":"3W34","./floor-plans/floor-plans.tpl.html":"s8F+"};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(l,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return l[t]}r.keys=function(){return Object.keys(l)},r.resolve=a,t.exports=r,r.id="zB24"}}]);