(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"/qdO":function(e,t,n){"use strict";n.r(t);var r=n("YoJi");t.default=r.a},"2AQp":function(e,t,n){var r={"./reservation-calendar/index.js":"/qdO","./reservation-form/index.js":"yUci","./user-reservations/user-reservations.controller.js":"qNkH"};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="2AQp"},Khvr:function(e,t){e.exports='<div class="reservations-list" ng-show="!$ctrl.editingReservation" ff-bulk-read-only> <h1 class="page-title">{{state.getPageTitle()}}</h1> <ff-panel role="article" aria-label="{{\'USER_RESERVATIONS.RESERVATIONS\' | translate}}"> <ff-panel-header class="ff-read-only-ignore"> <ff-row class="gutter-h-half" role="radiogroup" aria-label="{{\'USER_RESERVATIONS.FILTER\' | translate}}"> <label ng-repeat="opt in ::$ctrl.optsFilter" flex="none"> <ff-radio name="filter" ff-model="$ctrl.filter" ff-value="::opt.id" ff-label="{{opt.name}}" ff-change="$ctrl.onFilter()" style="min-height:1rem"></ff-radio> </label> </ff-row> </ff-panel-header> <ff-header> <ff-row role="rowheader"> <cell flex="0 1 145px" class="ff-center"><span translate="USER_RESERVATIONS.DATE"></span></cell> <cell flex="1 1 150px"><span translate="USER_RESERVATIONS.SPACE"></span></cell> <cell flex="0 1 145px" class="ff-center"><span translate="USER_RESERVATIONS.TIME"></span></cell> <cell flex="1 1 200px" class="show-sm"><span translate="USER_RESERVATIONS.NOTES"></span></cell> <cell flex="0 1 110px" ng-if="::$ctrl.settings.enableAccessCodes"> <span translate="USER_RESERVATIONS.ACCESS_CODE"></span> </cell> <cell flex="0 1 130px" class="show-md" ng-if="::state.isLoggedAdmin()"> <span translate="USER_RESERVATIONS.ADDED_BY"></span> </cell> <cell flex="0 1 110px" class="show-md" ng-if="::state.isLoggedAdmin()"> <span translate="USER_RESERVATIONS.UPDATED_ON"></span> </cell> </ff-row> </ff-header> <ff-col infinite-scroll="$ctrl.fetch()" infinite-scroll-distance="2" infinite-scroll-container="\'.snap-content-scroller\'"> <ff-row ng-repeat="res in $ctrl.reservations" role="row"> <ff-static flex="0 1 145px" ff-bind="::res.from | date:\'weekDate\'" class="ff-right"></ff-static> <ff-static flex="1 1 150px" ff-bind="::res.reservationUnitName"></ff-static> <ff-static flex="0 1 145px" class="ff-center"><span><span nice-time="::res.from"></span> - <span nice-time="::res.to"></span></span></ff-static> <ff-static flex="1 1 200px" class="show-sm"> <div> <div>{{::res.reservationNote}}</div> <div ng-repeat="f in res.$$fields"> <small><span>{{f.name}}</span> <strong>{{f.value}}</strong></small> </div> </div> </ff-static> <ff-static flex="0 1 110px" ff-bind="::res.accessCode | nd" ng-if="::$ctrl.settings.enableAccessCodes"></ff-static> <ff-static flex="0 1 130px" class="show-md" ff-bind="::res.addedBy" ng-if="::state.isLoggedAdmin()"></ff-static> <ff-static flex="0 1 110px" class="show-md" ff-bind="::res.updatedAt | date:\'mediumDate\'" ng-if="::state.isLoggedAdmin()"></ff-static> <ff-btn-group class="floating-toolbar"> <ff-row> <ff-btn sense="edit" size="xs" class="ff-btn-icon" ff-click="$ctrl.editReservation(res)" title="{{\'GLOBAL.BTN_EDIT\' | translate}}" ng-if="::$ctrl.isEditable(res)"></ff-btn> <ff-btn sense="delete" size="xs" class="ff-btn-icon" ff-click="$ctrl.cancelReservation(res)" title="{{\'GLOBAL.BTN_CANCEL\' | translate}}"></ff-btn> </ff-row> </ff-btn-group> </ff-row> <div class="ff-spin ff-spin-placeholder" ng-if="$ctrl.fetching"></div> </ff-col> <ff-row ng-if="!$ctrl.reservations.length && !$ctrl.fetching" class="ff-no-frame"> <ff-label>{{\'GLOBAL.NONE\' | translate}}</ff-label> </ff-row> </ff-panel> <ff-btn-group class="buttons-bottom"> <ff-btn sense="new" ff-click="$ctrl.newReservation()"> <span translate="USER_RESERVATIONS.BTN_NEW"></span> </ff-btn> </ff-btn-group> </div> <form name="formEditReservation" class="reservations-edit" ng-if="$ctrl.editingReservation" ff-bulk-read-only> <h1 class="page-title">Edit Reservation</h1> <div class="ff-grid ff-gutter-v ff-gutter-h"> <ff-panel flex="{md: \'0 0 50%\'}"> <ff-panel-header>{{\'Center: \' + state.getCurrentCenter().name}}</ff-panel-header> <label class="ff-row"> <ff-label flex="0 0 80px">Category</ff-label> <ff-static ff-bind="$ctrl.editingReservation.resCategoryName"></ff-static> </label> <label class="ff-row"> <ff-label flex="0 0 80px"><req>Unit</req></ff-label> <ff-select ff-model="$ctrl.editingReservation.reservationUnitId" ff-options="unit.id as unit.name for unit in $ctrl.editableUnits" ff-required="true" ff-validate-alert="Unit"></ff-select> </label> <dw-date-time name="from" ff-label="Start Time" ff-model="$ctrl.editingReservation.from" label-flex="0 0 80px" ff-required="true" ff-date-diff="23" ff-date-order="{ early: $ctrl.editingReservation.from, late: $ctrl.editingReservation.to }" ff-validate-alert="{ field: \'Start Date\', late: \'End Date\' }"> </dw-date-time> <dw-date-time name="to" ff-label="End Time" ff-model="$ctrl.editingReservation.to" label-flex="0 0 80px" ff-required="true" ff-date-diff="23" ff-date-order="{ early: $ctrl.editingReservation.from, late: $ctrl.editingReservation.to }" ff-validate-alert="{ field: \'End Date\', early: \'Start Date\' }"> </dw-date-time> </ff-panel> <ff-panel flex="{md: \'0 0 50%\'}"> <ff-panel-header>Notes</ff-panel-header> <ff-row> <ff-textarea ff-model="$ctrl.editingReservation.reservationNote" rowspan="4"></ff-textarea> </ff-row> </ff-panel> </div> <ff-btn-group class="buttons-bottom"> <ff-btn sense="save" type="submit" ff-click="$ctrl.saveReservation()" ff-disabled="formEditReservation.$pristine">Save Reservation</ff-btn> <ff-btn sense="back" ff-click="$ctrl.back()">Back</ff-btn> </ff-btn-group> </form> '},Lkwn:function(e,t,n){var r={"./user-reservations/user-reservations.tpl.html":"Khvr"};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="Lkwn"},qNkH:function(e,t,n){"use strict";n.r(t);var r=n("6RpP"),a=n.n(r),i=n("hsT8"),f=n.n(i),s=n("nbuU"),l=n.n(s),o=n("NOor"),d=n.n(o),c=n("0zKI"),u=n.n(c),m=n("yCd9"),v=n.n(m),p=(n("lYjL"),n("JBxO"),n("FdtR"),n("3dw1"),n("2/1H")),g=n("vWHn"),R=n("+l1P");t.default=angular.module("deskworks.userReservations",["session","deskworks.reservationService",p.a.name,g.a.name,R.a.name]).controller("UserReservationsCtrl",["$scope","$filter","$route","$translate","$timeout","dwAlerts","reservationService","ReservationUnit","reservationUnits","user","state","session","helper","settings","reservationFields",function(e,t,n,r,i,s,o,c,m,p,g,R,b,E,h){var w=this;g.setPageTitle(r.instant("USER_RESERVATIONS.PAGE_TITLE",{userName:p.fullNameCompany})),w.optsFilter=[{id:"all",name:r.instant("USER_RESERVATIONS.FILTER.ALL")},{id:"upcoming",name:r.instant("USER_RESERVATIONS.FILTER.UPCOMING")},{id:"past",name:r.instant("USER_RESERVATIONS.FILTER.PAST")}],w.filter=w.optsFilter[0].id,w.settings=E,w.reservations=[],w.units=m,w.params={centerId:g.getCurrentCenterId(),userId:g.getCurrentUserId(),offset:0,limit:50},w.fetch=function(){if(w.eof||w.fetching)return w.fetching;w.fetching=o.query(w.params).catch((function(e){return s.error(e,"Failed to query reservations.")})).finally((function(){w.fetching=null})).then((function(e){return function(e){return e.forEach((function(e){var t,n,r=l()(m).call(m,(function(t){return t.id===e.reservationUnitId}))||{};e.resCategoryName=r.reservationTypeName,e.fields=e.fields||{},e.$$fields=v()(t=f()(n=f()(h).call(h,(function(e){return e.reservationCategoryId===r.reservationTypeId||0===e.reservationCategoryId}))).call(n,(function(t){return e.fields[t.id]||0===e.fields[t.id]||!1===e.fields[t.id]}))).call(t,(function(t){return{name:t.name,value:t.$$filter(t,e.fields[t.id])}}))})),e}(e)})).then((function(e){var t;w.reservations=a()(t=w.reservations).call(t,e),w.params.offset=w.reservations.length,w.eof=e.length<w.params.limit}))},w.onFilter=function(){w.reservations=[],w.params.offset=0,w.eof=!1,w.params.from="upcoming"===f()(w)?moment():null,w.params.to="past"===f()(w)?moment():null,w.fetch()},e.$watch("$ctrl.editingReservation.from",(function(e,t){moment.isMoment(e)&&moment.isMoment(t)&&(e.date()===t.date()&&e.month()===t.month()&&e.year()===t.year()||(w.editingReservation.to=moment([e.year(),e.month(),e.date(),w.editingReservation.to.hour()||e.hour(),w.editingReservation.to.minute()||e.minute(),0,0])))})),w.saveReservation=function(){if(w.editingReservation&&!b.pointFirstInvalid(".reservations-edit")){var e={id:w.editingReservation.id,reservationUnitId:w.editingReservation.reservationUnitId,from:w.editingReservation.from,to:w.editingReservation.to,reservationNote:w.editingReservation.reservationNote};return o.save(g.getCurrentCenterId(),g.getCurrentUserId(),e).catch((function(e){return s.error(e,"Failed to update reservation.")})).then((function(){delete w.editingReservation,w.onFilter()}))}},w.isEditable=function(e){return R.isAdmin()||R.isRole("member")},w.editReservation=function(e){var n,r,a=l()(n=w.units).call(n,(function(t){return t.id===e.reservationUnitId}))||{};if(w.editableUnits=f()(r=w.units).call(r,(function(e){return e.reservationTypeId===a.reservationTypeId})),R.isRole("member"))return g.setParam("date",t("date")(e.from,"yyyy-MM-ddTHH:mm:00Z")),g.setPath("/edit-reservation/"+e.id);R.isAdmin()&&(w.editingReservation=angular.copy(e))},w.back=function(){delete w.editingReservation},w.cancelReservation=function(e){if(confirm(r.instant("USER_RESERVATIONS.CONFIRM_DELETE")))return o.delete(g.getCurrentCenterId(),g.getCurrentUserId(),e.id,!0).catch((function(e){return s.error(e,"Failed to cancel reservation.")})).then((function(){var t,n=d()(b).call(b,w.reservations,e.id);u()(t=w.reservations).call(t,n,1)}))},w.newReservation=function(){return g.setPath("/new-reservation")}}])},roXK:function(e,t,n){"use strict";n.r(t);n("3dw1"),n("Muwe"),n("y89P");var r=n("yCd9"),a=n.n(r),i=n("lRNC"),f=n.n(i),s=["$injector",function(e){var t,r,i=(t=n("2AQp"),a()(r=f()(t).call(t)).call(r,t));e.loadNewModules(a()(i).call(i,(function(e){return e.default.name}))),e.invoke(["$templateCache",function(e){var t=n("Lkwn");f()(t).call(t).forEach((function(n){return e.put(n.replace(/^\.\//,""),t(n))}))}])}];t.default=s},vWHn:function(e,t,n){"use strict";t.a=angular.module("deskworks.dwDateTime",["flexForms"]).directive("dwDateTime",(function(){return{restrict:"E",scope:!0,compile:function(e,t){var n=t.ngDisabled?' ng-disabled="'+t.ngDisabled+'"':"",r=t.ngDisabled?' ff-disabled="'+t.ngDisabled+'"':"",a=t.ffRequired?' ff-required="'+t.ffRequired+'"':"",i=t.ffDateOrder?' ff-date-order="'+t.ffDateOrder+'"':"",f=t.ffDateDiff?' ff-date-diff="'+t.ffDateDiff+'"':"",s=t.ffValidateAlert?' ff-validate-alert="'+t.ffValidateAlert+'"':"",l=t.labelClass?' class="'+t.labelClass+'"':"",o='<ff-row><label flex="1 1 auto"><ff-label flex="'+t.labelFlex+'"'+a+n+l+">"+t.ffLabel+'</ff-label><ff-row flex="1 1 1%"><ff-date name="{{\''+(t.name||t.ffModel)+'date\'}}" flex="1 2 150px" ff-model="inner.date"'+a+r+i+f+s+"></ff-date><ff-time name=\"{{'"+(t.name||t.ffModel)+'time\'}}" flex="1 3 150px" ff-model="inner.time"'+a+r+i+f+s+"></ff-time></ff-row></label></ff-row>";return e.append(o),this.link},link:function(e,t,n){e.inner={};var r=e.$eval(n.ffModel);function a(t,n){!moment.isMoment(t)||moment.isMoment(n)&&t.isSame(n)||(e.inner.date=t.clone().second(0).millisecond(0),e.inner.time=t.clone().second(0).millisecond(0))}r instanceof moment&&a(r),e.$watch(n.ffModel,a),e.$watch("inner.date",(function(t,r){var a=e.$eval(n.ffModel);moment.isMoment(t)&&moment.isMoment(a)&&(moment.isMoment(r)&&t.isSame(r)||(e.newDate=t.clone().hour(a.hour()).minute(a.minute()),e.$eval(n.ffModel+" = newDate")))})),e.$watch("inner.time",(function(t,r){var a=e.$eval(n.ffModel);moment.isMoment(t)&&moment.isMoment(a)&&(moment.isMoment(r)&&t.isSame(r)||(e.newDate=a.clone().hour(t.hour()).minute(t.minute()),e.$eval(n.ffModel+" = newDate")))}))}}}))},yUci:function(e,t,n){"use strict";n.r(t);var r=n("bOPx");t.default=r.a}}]);